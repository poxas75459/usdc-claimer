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
    "4beX7K1MxnffAc9rPqSjiqPvHQ6zBWeCGWLzyyAii7VjFLGKKMzPbEgEkMJbYAawAfzUuzvjD52kuDMt1EqDM5YT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GRDhh2xDUkNVPyAWZeDWeZs1x3LQHg6REDDRuuYbGKagv97mNeFBYwvP2WndQHr6zcuvJxLvmx9v8Z3LDo5Um4s",
  "key1": "4T1HqWHqAisEdZ4XNX6Lc3enyqgaGPk5UbXT5tay8Cxz328HCLo7XbxBCnT2wGW8hGXRHYRM1KgbEzCgidTnUgfz",
  "key2": "3LThAqGmnKaAutthQv6WfF15MMC9G5FAa8h2h6pE49Ut5nWuig4yBTC5h3nya2NoTchFipGeLXJp4e3PrLzpH2Fw",
  "key3": "5bLqnedyi6Rech6LX5rx4H421xxdUnNc9dSHqcugvbmQPRSkj91deGYUmDmpaGHpfhGW2Qxys9qpjZG8Tz3QtDN7",
  "key4": "AHqcq3aNnSPHqXTyPbVaNSzofJYowJ3NYeWVjTuXtDyZATmmCMN4VdqmeNXoWscMRnZEAZGkj2F4YkJdogLnmQV",
  "key5": "3auvACBzT1hdm6iRmXWW5AjuioNaN8vMj4ViT9tHy8K5Yc2udPC6HRgdx9ka67iFR5K3GcGqwMMc1C52NnWfKfCk",
  "key6": "3YwVng8ZSm3rmnPCR344cctAhwnZgwztpFnRKAVFibBhiYG8paGiW4yJS5MFXboAr7Cg7BmqQ2ZDskr83tqjSwc8",
  "key7": "492LGEbRqtqGDTWzw9cpDLuS9Wn3UV9hqTpAMGHVydAbz2PAuqXF68tA4donxuSMUd3jyGLYbTi5eS7CcJwtJB2k",
  "key8": "2LWFwaCRjoEnG61ogqyFDPyamEqK1EkiC6aYfHfWKTgUnssoJfXYLs2oikoKUzisYaSm8TwxY3rU3CVZW7yxxuao",
  "key9": "UiEf9RirhqLBjrrUUScmdkdamHb3ajtuYZtZaFG6TPZpf54iDrfNGjUXcrA8k68EA5TB7UiV3rDgcZuLGT4KpwH",
  "key10": "5xMPQ7n3fZeVx9xtMZGFBE8ZK1WfUyWQRe8naj37V4iMxfqPVUKYM2dN179Y6b5Qhjb5G6bun8mhWvwbpiDphRxx",
  "key11": "5ZCmXyrPGsJfToDR2jC8ZtAf3HDqHw6fwWPXJAPQzpG2uinSHusQyuX8sayZo7spLsAXc8qwBMbd6ARYrqM8sh9m",
  "key12": "4ymGoSgtSfakujgXWT1gPZw4EVxRDGp6sxX1zhXtX43iq1kJR1ybEpm2KunFuN42pwomBPBT6zhBxELizt4uEHCW",
  "key13": "5uyCq2U99CuU9fsvvhg4N8zAWUGph2YV1SC4wF1a5X3rursxAbrcbwJwriPELF6EVKcS9G1uU6Y184XXDWpnG47P",
  "key14": "3FofQwcaUsTXyVoh8YGxEikKLtUpWTZs1rmtV9gyeTkKxad959H3wJeu9u1ghqcMMXKYe1K3BsywSNcktz7Z4HQN",
  "key15": "tNQud4mVHKiidcD5kRqbMmFseFSQFHcQCFp7be7CpjKbMQG9ZSdo2YRoN6F93UKHAzsvGKvozdMFLK6CPeCH9KX",
  "key16": "2mN3TUsMEu2GisaWHPQMSn6ExVABGLqo48TGoNdfERQqznr82umZuUiqfrxSzf1T8vk7Q8w9GdGSMwUvHoPPgX4b",
  "key17": "33b3Qe7wjNv38NjVCHTcj7ZC41mxWFUG4TVES4kRWFvNSUAbZeLQuXLYM5fJFZbQakQRoDARTS21wuXj76ELLYwf",
  "key18": "2EajyMBxhPiBhLMtPtEXVuQYA7BGoA9BPkjkJKJfjAGoYJfEWGT2GtNAsggJTpcsWWbMWvtiF3gjFLiC1FJSXjK1",
  "key19": "21wyVKV6FfcmGV6dq8ABv1fUoUcM6g37cQ2s5WSq9FRae4h7xACBV3xU5dQsgNeWkmocwg8D35bC3ggnBLrdKQrh",
  "key20": "3Vw6wEJicLsucqEqdSmS47EcN4p5waLjjFexQrSRH1F38gDhVk2o1c1ReddHu3qwP39bJZSTRuGAPcegJX52z5xt",
  "key21": "5aB2DotNfFMkPoz5syKuRbXpcwPerMEkbrBfX43WJdTwC5u3zFpbXaQ1hFBPyobE6zkDuj7YABjMYfBk79qJa7A1",
  "key22": "43NcgQt4JBZrzVMFQtyp6NhKj7TArJCFtsywomn4aV48kpgNYHSxkyDUyavZqcpVRTfmZ4JtLrHbWsgGWywqdvn9",
  "key23": "4aTef4hoYmQNje5imA57ubTuQ7wFv6SCXP38nNu1VW8yApbJ3zXgz7gNStqZD1xr2uybVhbAafqeNtviehJbsGkp",
  "key24": "2yACRgUDXjpNK64HkjgznTJVYank29dMk2JUfksth2wFgpvbmTt17KbzbViHJQaNipnFsWjpYqazNp7RwGQit1z6",
  "key25": "2EEGoQrdYGm7y5x17iAv9iGoxy2whzj49Hf3UMC2gscwHm6Msw3Sddx7XvGbn7s8HWGEM3wmu4EeYUpzyEtCJrZR",
  "key26": "5UFRAWzEw8bTCrDtFaDDGsXMdbQPAK27ryfdwKe5zwSHzABRWj4KfzMzne2bge3LvfF9KkZY94tKKz9hWjHzjXjR",
  "key27": "59yhUNYZpKXNQtFU8Cek5v13dXbVYyDhjW9QTBnGejG9VQKTrmW5Fr3XWsp3CytiNDU94PRYXJWjMRV62f8BywJz",
  "key28": "2Src5y16arngh9aAvo3Zh1LhjHeos74yAZNSjc4Hs6NxYMBRTbhdaTNCVuhLXQfykJ5Y6Yp6D9yRYA6Qff3zqzLy",
  "key29": "4mZLBM9yrv5vbSRu4cHNJXw3ngrXWvBjYegz8wZRWPKUXBfzhJidGUknnYZNUizFdX3PsPg5APPduPux7o9CsjvT",
  "key30": "4nxQ1HP1qwzmWvj1KVg2EBtDTeJzE1MfwqEcUZyiayzfKGPvrTZcc6YQcrP18bQ6LyVUW1cPBrAwustTLKZrqa7z",
  "key31": "28qW861VpVw13D6rpppCVu1kjt3JLSafa1EJjwQrFiSj7KhtmT5ta8MEKS1KpNkfEhjJ6K2TPvCQBhLbQZW1vFcW",
  "key32": "5GswTWzQDGx3MYbKYSV6k4aHKLuQ6JXYuJgHVfXePv3qT7QQLndzaoM8mdun8eC3SQ5hoxfPRWCiP8y6iRf4WU8i",
  "key33": "5ostdK8kMou14MPPP9q64x4Ab6oS7UzejPwC4PXkwhu5x2g1JyxjThLddKtCA3hG9JJ9peHdELb9nuTDr34ZfK2P",
  "key34": "5b7m6MNSJSKxjVdAPtKNxkrHHZ6xY8njDXAqHfdzjPQ3wGfFJiuDq5mHg16Apotz6hDw4KzNkmrCqYSZtAnwWAzp",
  "key35": "2K8i6MQ22aUWpGaDE1SBxtMCM7xxbpWN2MePuzq775aeaxKATXJoopgPKAUdcQnbUVkzWNJv31HN3jEEZD4HPmRQ"
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
