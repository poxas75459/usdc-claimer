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
    "5j7XxghSTGuk2dwaFn4qS5dqrTfEXZvmjXtQiK1sCbgwjKAzBpug7R2zNjFqpkAD8QCab6177LzoYfXx1vD3am3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3613jxNzarQY7wvZQPNFVvjs7dj5eabPHHS65uR58tbECQiv6xnT2JUWvkSsADtryowp31sAnQzmaMu3jCbwFUEj",
  "key1": "4AUoGQ4R3Gor898MHfrD9AdxMUh32dbUt7iEHCGkmB16HULjjjHRcfuoqLfgifjWfqVXLBArnifQyF8nx6X72HTK",
  "key2": "5ronnA6MNjhyJQ8VpbnFDZLhLF7n4Q7o7AXiBZddc2ty4P4CgPXEwNZGcn5hKVkquw4keog9kvjus9uMgkp5Uh3",
  "key3": "2qv4C7skQoP8J1myf6uuHNz8QTdBTnnypxC2GLTtQqK7x54uQtpAtvVKt8uEs3vgiEZZFXT9CAY4g1uDPsBywQQr",
  "key4": "5pSuGR6rwf4yNsAXgQzD46woPD8BEqaEhQfDWgAnDy5Dasy7J4FGGRHjP9ZpgXKQEUZPrLXpadcBXTepBTYxFweS",
  "key5": "4qKpxurzLHziTLnPgxYmxXiHrrvsQDPtb7oWSu39URk1Wxpmz1miaU2ZEQtR7gHKzzJt2at5eQu1bAacSqWs2auQ",
  "key6": "2ikgMAyTtLFKud3d1uE1GtQUnDqVXxhbAmxoJzmW2x9hBwu8VZPod7wWEwKTUbbPuL3vkrWeJh2f1dRzYZKc2sBg",
  "key7": "58tuaLA2HgJm1upH9zUcb2KKqk7hcyBtDoAdYRe3DBMNeuL2FZYMC8zuHUtkj3BS9CXwD5g2CxcyJBVbUeHU8hYN",
  "key8": "zfo9v5eDB1UYKNiFfjzuDPfYwv6KaYscrZrP1emGZdoEZJ6eReAvSsyWD3vsKqMjr7JSwWaYNad7bT5BHXx9rXM",
  "key9": "5HYEyH72HJumeoCeXSXWrsyJYzF2dowZNfr5Ttfe3K8YLQW8dWP1z5kdVd4ZvR4CNSXEKVYfPTAkgvvgPBZdTY8a",
  "key10": "5VFTuruqvTPCPZxpW89pYV8fQerAo3LVFz4MfMULDFYwfWJ7B6xko1HNpr4hFr3os1SgWk2ACdSdxEcB941VvgYw",
  "key11": "5RkhZnHjrZZwErNaY8MQzRz7JDvBNqW2gKsLGpk6nv9bvFKNgUko2HSdta9kMPhC8PA6MYuinZtrNTDraSe7YX18",
  "key12": "3gpdwFYUuzVWrWnybmFpMMLFMS8obpBCPap4QpWtYsTgPpj5vJFU1SXxjd5fLvbwY39zQ5ZRQndNRrdWfq3pgJr9",
  "key13": "47rdyH5cVXE1MUr3zL2phvSgg9aVZjbw8oaXBay61xBxCZ5Pi9irT3hE132CuSje26h66EyT5N5eiGwtBRQuK5Sj",
  "key14": "5Up6SowDvUGSWeSvZDT6KVkoxa3BXGc1W5YkN7Hno5JVHrSaBro7szsegJL2hAT1gKJYFK8sQH9vn39EA24yfsks",
  "key15": "3PAQAKf3me3KWCLCAtuCxyyu74qSCsLGbRpG8nUxbVbzGjfZei9s7irYprezbs1aGw4R1j3JfLGdRWz4kP2V93QM",
  "key16": "28cW2hJyMsUqD6wVJTfknB2n1FbKXP3hdZBgs4VgefStiC5qShoa1Axr2A52rdkMxPntrkxCpeJvqjRbER2ynhV6",
  "key17": "3K2GhTaTgVtJ5DjRCrKPJboJZgM3NLnfgPumndvtVQqWtuFsXpS6Dv3afUgHrLTcXrPJfh9jDm5a8ehFHD7jWJNh",
  "key18": "X8d3XgT3ERBSgvwN34XVik8XdspwxFcRqXPVPxm8hvQeAZSD71De1CgfVqHqt31NodtAhsxmgU7VZ9U2zE1VfPV",
  "key19": "654nTGFNRCP6GxTXumgGgEqyAGu4msRqTvj1Yj1iERtPPy1z6z4m6Bgn37oAXS7Rqr2pDpTrWmfFCp51TiU4TZLc",
  "key20": "ZgszzxUbNm2RVktNLu5c6D7kHJLE73Jj28tqJ8kSYu73NAwSW8CHbRTuhutaXgMaKyudHDA2pLZZ3PSx4zBV9uR",
  "key21": "2izWq2v7eMFvAZ5CdPGDVoRsrVQZyeSN5399sKqrBVDesUhHNqtjw4KHxEvX4X4hwm7Yi32hLiAJ3kFA5R3c2QbS",
  "key22": "2yDWNkz2rfBHyfvEEWScjG8Rkpn18RYsRicyyn1TXdNBe9DXSVr1h9YMa6juUZmd1BKAaHw5oXS5MZW1fy43wCv9",
  "key23": "X2FRC9fqu6DkTnLDFHxnJxq1uvjehqinAcFU6DLBn7xZ3c6vMCanPCjZZpSCK2vkSLATkQLuzRUV6Ls1PH8ebxc",
  "key24": "4EvTDAkzrrYpJ2jeAuBv8yqZ6ejKm2jtW3Ughb4w6XmiJGRTgknHXNKiUTsLWDyy2RbU8DNJHpr6h1Jaqs5n3TLj",
  "key25": "2i5FWHrSnUDhbH9HHqVkk3bvfTDiP8EGZ2xosNjvD8RfmJZhMS2d8JCPgHNRdedNXGwMxnwqXbCQxXEZHN9D3p32",
  "key26": "j1oNEGNdceeUrGFanVaWyRSSWCuVNa2LpigCWmxC14fUCNfGS62wHutKSoBMHuK3fMrsYAXBBPR6MvydmhxAP9B",
  "key27": "2Ck2H8Qp9rNq5UesDWmZg8g5dJhJq2Fh5AE2pYtWJXc5wQj4ZDpTf94yx1H3Zh9RCY1nWbpTMGchd5h1RkLHy7NY",
  "key28": "4rm6w5Y4rFn61fmiUeMLi7AooBkAnJgMW8BfeW9gddUDUpXGpP2BhFajKWUUL4NqRAAQK3Ba8s5Ee1qRoeYtvgFV",
  "key29": "35XiB8EL8froDbV37yg6DjTKwSDmMm5MUM2z4Aejqmv3gtCNGe4AmA6KERZrBDAqzNWytxvoKuDHsQmSYq4syZjd",
  "key30": "2bG11HtZxudQdjRRJVe79hhqAmf1ZMfofHWzjg8rNvEF2erJs7jbaaBStugyUqB3YMmYNb7Qcvh8diKjik2RxwQb",
  "key31": "36QJQGYNiU8CeDCc6zzo6SyMAiPzqwTaZYUUue72E2aGYMnbPunCGCj5s1H76YcvdRUhNfXGYGvjBbYeepunYXH8",
  "key32": "5gADQjjLL979Qd1JxTthcjvwc4mdCXm8yoWc1QsQxE4SRihTDVF4G6taemKKggxjqhv4Zn2UwfiRNXWRyDUgy6pY",
  "key33": "2ugQCapYg24zg4CGeVCwF5A71eP14uiBokYCQUP9wAYRFu29f61teLgm3Sfn3U3VJy8dGKue47KDaVVRyykMYvd6",
  "key34": "2BoSRN3767HL8mYZb8rNg5eu6EhrQY1jJGgUu5XrnRR2VLX1VFrhRabFsdvkCRUz6CjLC2twBjjjsNxNaW8k3knS",
  "key35": "2xFJekgjVVesrvrAZ6pt2bK8n7r7z6oAHFNsRDjcfnsttSRcRYYDdgYE113RjnFSvTzysupjw63jLzhSDkBDxxQA",
  "key36": "Dynq9N9uXvk3NQmRgkVE3ZktZTMjQJnhxVr9wJHCkUX5QdjMfVtwHHgq7uGn6nNm6s6gio7euG1QKoBk9anPrJw",
  "key37": "36NTD5thcbzz3NgxiuRdtRjEgUE4SEJEZQmbxSCP8tQyAy3vykKWJgkrFsQR9mGvjWgi72N6zK74pmyDzMxftdzH",
  "key38": "2ZNrhjBS5KLuCAUsmte2iFBHjLZ1d8adL7YDmDjHnsxzGXd78Tx1L6azE3MKU5csCnYXnhc1oWqjXvcwfsU1YyN6",
  "key39": "296zrZhFUd978XS58EATCYqbdjN17XEmYDvWBcqd7sbT2hyAwixDAturPHd9Hokq5XVCaJRit2LEnbGPEEXzUF7R",
  "key40": "2nLtD6XaPfSQ9AvvmpmsTGZwYdhD8FugvFbXdzabd4BJ6fiXXDrovDQfqhrXDW8xVGpyHxifuxUwfbNMySEHSP2V",
  "key41": "231QUZNyX5j4ENyToPuR2DxVegiR6txLeDa9qsxQQS6Nb9Z7GNEPq85u6tvrCw1ev6cKK7gCoeqAwM1UcLMLG6Xc",
  "key42": "3N6eM4KvV21h6zKArqbdUsnGv22iDy5ty2x5xxgGpVvYx1ip2fpKSBuxCsUb1NLARbX5JR4ZZowLjtPDrqEytnJy",
  "key43": "Qu4MiYhoXMK5CS97RfuSVf1ko4N2qyhJKBYU9b4GxYxqkFVEogFSJvQRx2vb5NJAqcvp72nv4t2i4bu5xUxgL1Y",
  "key44": "FhcGbyRpyxykwjmaojTLNMMysnWf6AnxZGQUbueUvhhZNxfpJi1kwr8f7nAavs5T6PFXEQ2eEeUzgmddrZJgatC",
  "key45": "3BBQYnpGGVHfN1N7c2sjPbNqEPGthm8EptVMSe7ZQChxgqVeVYTfUvNAD4fUvE4KwEM9dpoHAhLUZH3XcWQHG45r",
  "key46": "2CDHSqQbARAhJTR4AopEKbsEUj4SEEPwXP5wtSFCmHim4BPwv27dFXm3aUyzXgYnAaWQo9LS9TMyWu2TELzSTq59"
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
