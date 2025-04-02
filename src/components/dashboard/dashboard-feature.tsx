/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5AtuaqwRFpj6PRyBU8vGe9PFLeDqWGeJrVEGFYxY4bkt7YabKsEdp4PvXxX8BH3TQxnXa9vLapMJ69W5XvgF8wVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Bmq4QJAuN8L7kUGusKQetzRj7Sehw2bVeASTKAmKi2z6bUTUUEqgMLffcXbfvN7BcyKkLg25YV5xjbQNorX6bD",
  "key1": "4RmRMZ7HydWfRx4msQt2HUNhBtTJEvaWoYuYrymF2A3kxV4jj53b4fu1ZQyCqLTLUVLkJzhbb2WVxNgdPHRKFMAA",
  "key2": "3E56e9yrEiHj8M7kCKtMxqhxWfr3hqW1pVaUJ7AKZ2CGwxKcCYu9q37BPk6mXDD5pJ1VgKEuFAsFfpuhMBg7EBXh",
  "key3": "aLUjTGoccXU76GGqyszvhhdL6RAz23djuGW9rsv6AYzmRPgxzgzw9ZDUYPpdtKnc6AJKespGT8mBJaKe9wJaDbF",
  "key4": "5HVb8WYiEoPQFfYG8Nrjo2ArGVJU5bhAJozhtFxsMiFV2iSk54uY5M8bQTUF5e1mGtfnbURFjZ8fLrCZyUJYv2S3",
  "key5": "5PqGd6ia96j61Uuu3YCx1FhQLfmfppaNAnKY3db58CkYBX5XbiBRbJBpw9P36kKQjmdT7WCqtwLWZ1vag8Gz4SsE",
  "key6": "2g1u5YxpFE2yhj9L2UfXcEzcqAo3G5MTHQkXRDEERZAnGiy84bSF4PY8D3ChsXDgzhMajYj3xkbBurDvZwXFtNcE",
  "key7": "5B1JWFWqh19eY2ua25QpwF5PwuuDkEaZK57Vi2RzyFdt4AxKcmWe1XgWBPzF3EzBuPgXxohqvUoq1vaR1LQuuUW5",
  "key8": "42jhXsEw3qod3ZSfUTFC3nb67CDE1LyS29YNTbbWS4TsVwNjapuNFDQ1AHaQYxZS5Zkwi7qoMVNry7nm18uKRVvk",
  "key9": "5oGyHnkdB2bjYrgxAB2xaC8XFcerajc4aoghgiMvynFLQmAWTj29WLm4Q9gywBFqnfqQB2Q1hoseBjx3PeWEsD33",
  "key10": "2ezpbHYLUd7CAxqmiLCo2qVpbJLkGazPuaKSAnMvrvgmU7dpEeLAsQ9cVAPefSkXAWRUHVsPsRaB2VdQ1HQ6DQ7M",
  "key11": "fadS4zCuEBb9zSjVLq4i3GymSmGYHq34i8n7Zd2t6UNvXzopAFPTENWqYCCyZWXUrhJ9MBiw3i1gvNtwfzNTwek",
  "key12": "5qPnSDgqKMzYQgG9AzzTDGiGwcWb8SHHwMwAsPTYrjZSbB5qRCJiMoyM1yuba46sgquszmC5M1FdWKHAddot4gd2",
  "key13": "3qREXuu48WJLMSMNZvWhifG3BfjXQ4MDPmC4w5waLWT3agZJoHLpU8fZH97WwTy3sdVsCJUSeFyjU2RKyuVfyjjZ",
  "key14": "PpEhGUj6UmiKFnH5YEua4XvW2gQnthjDWBcSrxbTZwm5va6XR9f9GwUi2L93CJGk9v5o4EAr7NwZYaH1Vv8ApK5",
  "key15": "PPnxfKzHTS6wzzNPPFwCXsxyFWD5yxZqmDER8tMy9t3NthY6stgJGA9435yGsfyGqPq6uwTACMQDXr43EarnX1C",
  "key16": "pbSSifeB2WoxN9YHuNWcDGd2wnjgkMCRs8pxpQtRRr5sToo6XJCEFFRhiHYyu6vWUDUHhXB5RwLkWMv2V8UHKHq",
  "key17": "3dWTtPhDE8RsSSGPJeu7yVjyqpXqw6KVcH5hDMjhbjDtWCg92fsvLcJz7KNBxXtvY67ytacexqUKQite8fJn2HFp",
  "key18": "6t29SECN1ahvp1QELRoLJooFDQuQYDRAvJehFGCszex4Y4RPe2wziaTedtSeAETZTQMUZodMkaevPXV1MEmzeS4",
  "key19": "3R7hDePLs7PEUYcyaYGDinwxWZF1ezpiezJBo2N75xFGuMYv8PrJcYdifXmkZeeZC54uW1hNr2wafAnnxwfSkyX6",
  "key20": "4HGR5GrQqUa1wW9so1qMcmuhS93TpwXxGmwoDXvoURy8UJAPGyyzTP8YEZvv5YAf1Le7YYgPNHHc3DFWkL3kT4dg",
  "key21": "3EmGrD18AfTDR1sXcmZXPpQwtSCZPLHNgJVUVgwe3MCLoJTADvRED16kD7DFq83xGgzPdRCXvrCA2U9p7D3oSVGD",
  "key22": "2e1JfzgcbrutjYH58EWoqfxZ8y4zkHATbpTtrbHahoKxE95eKc8wrDRjkN9E9znqr5DpDWabzVNsfcqfgDJyuuj4",
  "key23": "2DxkzQmNDC9crv9MqCqvhr6bhE7299N5EM1zFpiYVy7cWYDgTPDpWG4nsoW97sjeHWqFsXQ6ZkjoSYqphFGn7Nsm",
  "key24": "3NkpH6vFbgJ8JutLwUfmmdxJj3QEFJ47HAf7B8uDzLC4NN2E2ZFHr3KgvvDkFjfQPgAbvS6WsHbTidx4iJEBAVCq",
  "key25": "26XwqN7NvSYfiek369BJLctNi58utW1B4ba2TRQnmw2X8wWcNyziMqjJ8g9PV8jLgEULg6S6QEqiJ7TuV893qHsQ",
  "key26": "4Zq5fGLdJsCisoYyTYRGd7SLJ6Lc4ZpMGKSRa8jt1TZ5ZRQzSCugobosLPVte7DgPVL9ZH6uSbGP362r8aFa7zwV",
  "key27": "4tFZprw1ExTjvsRVYyKoTtF8YxiYvGohp4BPtVB8asnsBBa4363L1AsiZi2RCATxQjfNKgKZuy3sde9E8sVQ6cAy",
  "key28": "5mEvHuttxqYo8ZS4tSRZfNP6DbY2B7VtCcCLRCQSFwX66jbLFUAXKtjvzkfQ9sYRYtrG7X4KhwncYWvDqkbRF8uh",
  "key29": "38NMZnT3ujnLz1nJ7r4kUVmyfocfheNX6Gx42N1FqNw1T8Ea2wxWaHUr2BoMwMpqL73mmwHa2HB1t6SVjAdp7Msq",
  "key30": "5t4FV7Dg7Wk38GverYSHAHfQVWRhsFeVq4vdgkeEiTZkKbVxvRYHQpadNNzf84b2qNZGWYwofMCBn1G6AXEKQY2N",
  "key31": "FfHgspvkRs3KAxiU6dk7qCZkhd9ym2qrrpSLUKGNAuKWH5LyHN5jLrwWVPYNHmeiU5TxBwRPNK77svQizt6sh5q",
  "key32": "4shZvYYMbBPVd8UJUCedhCKZKzktAtFGrR26TT9fDtuXgCzedex8XNL8cFhxtxqkbjDYsHR51qEiovsRebi5X8Wi",
  "key33": "3qmY9armxPq5DTpgeHcyHU2NMEv64CjixDxJiTggYDNn9AztfAnKHRgdAuQaDktKV6RTYvPqTq5bySRn3Eo414Q4",
  "key34": "3DyCCvTtCGghxLqgykakp5j1VxGMwy23WeW6n1ofpv2JEpnxbPMPMmF7vMPCrdPfF7DaSuhYCAvALosfwPXCubPu",
  "key35": "3cU37LCDroS9xARH6yKVj4xM7BHhbrXmMqxtMDQCyFK5AMoRpeYyUfFFwdBSYmMjdDS9gngmT99mjNJYJVJvmonH"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
