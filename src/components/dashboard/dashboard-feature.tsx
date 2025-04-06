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
    "3UFhNfUD3Ps8KRYcXEa5ihPXrRmp5n3T7dXRSNTjHBuFmJoECwQVDhnoC1wSQxkfzk3Xv7dYQnXgd2iiywV4jssH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uHucbin4t5szv4jNuzxtNnJDCPwFzM2GvbhhnxMBDUJswp1bfbFycSUEdisFgxSxDQneXzh4oHeSMJBB1d7PEpi",
  "key1": "3b9bg5EgD3Vfarq73iaUhXiSRPkAjDqDt3S2YoJ8Xpnx6PfCHjAUpW3CT9VvVRohLv3PSGNPpK1RNK19yN6xjrz1",
  "key2": "44MkJqmvz1oNA6HMb74xU1GxY8WyrHQGa7WPNDg9gr8Gb7h3167hweBHgAdcDen6pMfrpLLzF8bRVioCZfeUXDtH",
  "key3": "zSdQahmk9BANLefyXv26oD7cam69qGErPgXnMDaMQypGaQ4DgEZ6gBjhTd2FSvMR5BpBHWV3Tg8Njt8JzSUfyTf",
  "key4": "4yofGJCJRhG3VHq356cBWv4mKmVznZj8E2VHvTztAYbZ8fqXBPj1dBTK4puT7c472ZfBsnV2ysmAeJn7Uq3aomq",
  "key5": "46Fwonf4Sn5KJyHNeAXYekbw9AMevjbYJ4N6oLrsti8TGCJcYCir6K8kU2Si88VNLFsPyvCtNfniR11teYK5Ajz6",
  "key6": "5QGx62uh8aPR9ZZZmsfd2khdqThBZF2qQCqa36H53Ywd1ukMQRLrtWTnX8NNa7YnvAhN8wSbSGQhp3s9gPpgyJ7R",
  "key7": "4Z5wmuxK2tPhsUUGt8qPj7Qq7zfj5dCe29neVwK93qorkybGSX3oTMKzsA5kp8t4Guu6qzhXGbmMcobeVEoNuzpr",
  "key8": "5uXjBWHgZ7ir7NiD3xZs3i5c6VhBxoQsjWhobiQPKwx6ou8M9z4oCrtV334HqnruyXcrbtBbzy1yCdHNZ2iQk5hH",
  "key9": "594SJAYkdLACR1FKXHz5w6FaggxMYh6W2pxmUnXWRHexQYDrV7K5sdgBedcsndVXJUNvshMktvuYPqXshdt3deEX",
  "key10": "2mh7YiGq6ygu9HA2TpHKvMhXTFM8Q78d4xWJvnaSevNdLS6HiuqpbXJNx5BEAWftNNqemntsCQmTmHSDNihoEBme",
  "key11": "4E2UcCY453VGgY8rMJJutBpvTYy8xbsvQAJpoEXu2yGWa4b37ghBiPDLPDJZ9AkmfH3LcNkYztXdTuvVt7Cb7n4R",
  "key12": "3f7eoBuLuPVqLWv1X547EwNHTQ5naePeV6JtMcCqhVfHgkJQST1W9LG5LVqbnkYHvyiurnU5NmbugAnZz9fkehx",
  "key13": "26iLqUY81YdsYasMG4pGneMJDRPWSs1cD2qtYPo7TfJzWgsLSyTiNrq8pbsxCLtnawPa6M5zUnmrCTZUyM17AueX",
  "key14": "ofGCJo85qQmCtL1oN47JKB82TbU5j1p2ASAojPudqVziYmx37zj7ABJZSryigjmBpSBgY96UJmoQnZXAdEmUYAJ",
  "key15": "5aZjGRjzKvkggcQwSpdUGT61cQRt4zF83hqZ7CbfjEdTRZVnQenShvNZTFoVtGVDZxNpv6BmCHSJQoD59gC4VyLA",
  "key16": "4WsTarGcg6E3wGxx7Ei1SugjApLZYfwGSYzqw5QTU93DqQ4uHhTjrgW9o7jmKsvvbo2esrLrFukqpyYWYPE5bEbd",
  "key17": "4Uip9GTXDbYv3ePao5XnnGi2inybjJ43dgXACQ1AgKsWhcAHpd7xmdjirU3nfE5sU8UXV8oJB5MxQmFVn7oSgiRS",
  "key18": "3EakqTEQh3EhhyZuJtfxcQaxVQc9tHkYmZGQUuoeyR64BJWyJkhb535S7MTs6KnZ8o7ZJ6sHDsTVGpXhtUWfgMdk",
  "key19": "5WdSaTrRGMRSnZWm8p1PEB7SSBnLccBW2Yihx1dypkinXy1259FrkHP5yXss8Hm3NbQSaJWQohg4PizkxLyrPQ9f",
  "key20": "3uT1GWGpqK4tnrHukmuLsaAXkWPEtQtbFfudbQt86SrHUHz3MuAr1yS5h7UbPxy9pdsgsSLGBY5LGGdKgQd33b5q",
  "key21": "5tFsFXuqDzaU9FpTarso7bHAtXAXEGeKdv2Q9SnZjLjmmritUvYotvFiAZ6BeSGfd34t4iH9rQcutoP54GtDe1Tj",
  "key22": "2HfY8vGHcyNBHaE1ccCLkv675XmoLwWAdor9HRFkA6NCyZEtB5SHTsQarxZk5s31wVKmgF2Ced9xiFAiHkvAGQUq",
  "key23": "4HbLZD9BUCjZyzmkP2NE21CSo75AagQEiNxSbJ2QS2HdJQTQzz1mEvZHPBe9mwWv3hMvMtFd4KD5ZZ3JH3RxCCNg",
  "key24": "29JCtCwBq3jGs9MxXr5EUjWeuxWFihj2z9FfK95iwcLF6T4w8NVZr6eR5J1ekE2UCn1ZeQp1FBq68rqoA4UTTswf",
  "key25": "5CkE9ZQ7Q1mwQ5Pn4Y6B71cRo9qH2Ve4H7WkJfTZzR37TtD6TorovVCmmBv7J2HuhNkk1pDexJ4RBsTeM6Jc7Zip",
  "key26": "3o3UNPQsUy8D1vwY3xjNkTPbp8ae4i8biezSC8knKfHJBdBXD7p93vateuS5Ro42xWYNUbDPS7DD5bUkq7rGqKUr",
  "key27": "5fycZKx7u26q6dnBaTSCfQoEPUySRC2MFXiHzX7FupcHBwDQSqirDQN7ihMoXL1Lc8S2EJNjEbTsoaS8vBMfT3Wq",
  "key28": "3Eqc1hKLzGNk5gTdwpoWt2CjxvqF71TZESPizfZA9XtvCL6KWco9qnqjAQXXtMLKMVQ58Cpm6zWYd3JRjmDCHq7g",
  "key29": "5Wq6McjFjbDwqfCi6RakrDBz2AW4FHbiSGBUmZ3PXkbhCLWza5Noa5Ntr9qqUZJ3kBgriMvsqRe56zkamwpms8Sp",
  "key30": "2FVkTUTBFKCqm2M4qSEj9vtSPae3s72JNjLwepHwqobFgvT2Rr4tpv5fpmrtCVjhHsShiwpGSu2F3VWyYeaX8SUM",
  "key31": "5jnqGzEZxDfxYxTxXM1UcMJksn9Qm9YZmeH6xop8V11urCGN4RrXgPqByLZkwUyFcqq9i8bpcQXzJXGKa7Ykmk6e",
  "key32": "4fsLxV8Tsz5V6bVCMBRWNunxZDZL13X3pvDPsBnUsAoLxtQvvpv88eSHWTK1bUu65YyVdHHvYeEQyjZfQkGHinFG",
  "key33": "BjwaY2Hj85CveuYwx35KfeZ3fwRyjZc2ubDen91MSnDYvwF4NGFrfdF8AuVqyp8AdJA6BFQvXDrYh61DGcKQMNb",
  "key34": "4uQaBR5TbpF9t85dvYUFQBvTTWgBYw6Kky5BnbrcWCWSV21u6s5ZHiLxjywNzKzX5YcQaB8VRaBtxddk7DB5yhB",
  "key35": "5GYLtacbEUt2oZEhe3GxnEi576CnHeZ9Dh8xqKtTJk3unc3JZXwUS61WHNVeptjqzjvLc9aWSvcPoH5zVoeL8xdj",
  "key36": "3DTrXKrXo6J37jaqMLGe1cr4o2khbvRVn76kGWWeSGDtxrRXr8rBnVpAkaj4TDB1uM5ggGgCBhtjFqaW4RLHSkEz",
  "key37": "2fNFaahNJggCPfhjzCUUJC3uQGcfo9YERUZeqCDQR1PWCD6jKSrWv8344HTHZsyHdPTyomzXn7yS5XgCzwrv719z",
  "key38": "4Y6NyipJRD29koQRwVYVUD4Sy7jo846QqXPcc1Q7KzqndFDzYW85qWF3tzV4haK41w7yn45geRPuKdbMtEtmQJU"
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
