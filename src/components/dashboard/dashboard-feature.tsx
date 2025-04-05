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
    "5bYNmVNSZ6tgcw7JBAEwrGTjnMtcA7MngQ3e5HybefVfwwPqphQ2tafU4fNmeJ37dhN5wkpqoP9XazQ7hWZaTHoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWYMf8o6qshj6VhndCTVh8okzxFGfC5gfdXJpLWxefEoZD3L3x97bq9kk9mAgUS8ekMpy2ZWRVyXcyrFgU1rUVm",
  "key1": "3g1PPGcsfmrUQ4bm4fiV7GY2QiWFc6HVTsvMFkv4sV5rYf9GKtbL96NiiLvTPFEtDgMeduhTtvtjo6NnF9PuVaXd",
  "key2": "3AEKFj8J69x7mC5S51FLw9sFzL3rWXPN423fwiwuNN7tpHXBJqEx7isjdqGEjxgsMFzratCygQxwkxzaz19XVkzb",
  "key3": "5nHbdzz5zFApXMFWwhMZXK5z6msZb87c5drCDcwDFRQynqoztrPPdgkr6hd6QnuL3ARVkUASTBnda1KFQX9JgpG8",
  "key4": "4n5wTN225xJiXthEkNm3HonV9kmmGtTt8zXPvrPNCAg6RRoEjqZin7N48YK3bHEhXyXj52yjzgAhpTrab8161rVk",
  "key5": "2WVUND92wNGX61p7Qs2NdFBccXTLpShjoACKdP4Cg9WG9iutaJ7KFqMCD3uQVkBQH53vLZMJhujqqgqcDEAdz3mA",
  "key6": "4yLxYKBH98ZZFJia63gBcXDPQni8nDRiLoVBUWsQm4CjJitUm7YnQfLReX8ThyyajU9tcpSf2QPJt96LtWKg8aUe",
  "key7": "ZzquAx5qpJQzMueTf4XDrH5U6MR1qchZUZGLKqajhaFdFA1rKJDnSSLPAnQbqNBvqPNhYYGWsguPN55pnBfAMtt",
  "key8": "3vv5XWPVakiQZuTf8U4wXvUo7GCiDGXMFSRNmcDL6ahh5UEzNMCTeqYHER3Zwv3GkbfmMk4KMj4DhXMhcgHxqhqo",
  "key9": "HgaCAMgJRBybaXETcRcKKUoJn39JQivrdAv2GMZV4TSURzgQd1oFNKxaBoTHJRJpEvKubssNgqAc5sjK5aiN1i8",
  "key10": "oDgR1zZxMmLrnoX2dNNsJVGa8s2KvWHs3mRMEpaBDzUHrc3FbhGTtiFEE5wJQjMK8F3jvECmuZ7FU2P6jKG1T3R",
  "key11": "4Gm14jXhXAmBuyRDrjhd4VNnM92T2WajDZYiVze82JAjFHrTnGWqzy4xKt4Y3gsZ7F9mXec6NsoDN9XbxKgdcAF7",
  "key12": "2oaoVnTfvLBpv5ZuxzqSpp5WEAa9GU3yGFQ31KT4rL4wdj3uCPs5tCYKLjoBD5XGtjjfbvjtFPcuHLKzqmp2GzN3",
  "key13": "3usuH2iea5QxdiEg3pa74GBtDsqPxECEZX846cv5YHNqzgDc2sb8JdobLf7EtnBtStuDE1heMJWkdqGw9BMdyFSe",
  "key14": "4x95TfCoi5FMJFd4yG5rNNvXgxV35bqsKgyruTdaRZD3n1WfoE9tJ9wcn4icscCSkqVD4tDPB1ci5kyE2KHmQn82",
  "key15": "2JFkdzh3QgboUneG4shjWtUnVTYTEfurS6rNMZ1PBNdwLUzhkSB1r35aE8fjdsgp41uK1joHbtsCW3Wkby2CzGbB",
  "key16": "5ZA3v9Aer7Fu9QDqrAkmGFBysbhdCDPcaPsoASXGQKLVAr5pevaUG4YfuU1bM5Hx1t9cwJs4CkLsfNRsotzhFwHR",
  "key17": "4KTZQ9fvxM4yAYmTv2Q7dnuaoQXz7sA1dTnBptNVGdiCcLY5qszn5a2X27jmupbfJxocyjdJLZyhyFYf7EYnV1vw",
  "key18": "2gF9Gb4BjhPoFaqMYr2PWKZXWYMzRTXGWx7Pys6fZq6VE6YGY8io4dQJ8nGG9hqojtcqMsgy1ztpHfdg2zo4MiLE",
  "key19": "3ykD5W5QuykB6QswpCzF9C4A3z37FSoY3VYxnroeifz8bSM1wCUXNH3rTyouJMmF7qmdqhjarmMF1uN28Zy2sdRs",
  "key20": "25VQY5cJqgi4d57PDvTTp94X4h181c7GKgwXMXFLxW6o5KVkpGRSmPSEoXLKrfRTH2xrCLGCXMn4JfXyWw1gJDTr",
  "key21": "5WrCEXmYskEq2STUiJhAgxK9XPZ4CDNUAz3qUPcr1js7T7yHuiJuBo6YwuQ8DzYjr7aH5qUPtXbp7qPntU1D7xbs",
  "key22": "5f9svRM77Y4TLxgKpDhqyiooxaJJcx3N8tf4utqPQ7sPoR7LNUet75cUgZUFC9hBF3NbZuKAGRQf5znoB6PQRbjj",
  "key23": "4kDER3LmU9eUMLc2wownUHnVMNazN2ziFLPuRuGXKUropiuRJCZwk1T5R16vSvmYZUYb3UpJojBhmsikF95sBGqJ",
  "key24": "DQLB8WmzwDEfzF6kptdCeBcmGbMtzVu77qNMfcFUbBfr4v8BVJ8VJzfBLz3aJ5phGR7VrRbzsmCLQcjiYDzXhJC",
  "key25": "RyYKyC7tTBX8dwrEEuRju56CDpw8e8bqYwhvvJWBdasffbeWbkViUTSgg7piNqUFbbtm5yMDHKNGKhwcHLvcD4y",
  "key26": "4wLnQqM86A8GEAgPQNV85iMt7dofeThPB7e3e2NayHdoomjcqpEGZh5PYdvifeB72Dje2Xifyfg8URmiQDXmkpgr",
  "key27": "4etCDQFAf4LdFEHM9aB4WeWuDtSP4Kx1ht88PWeuTQbLYwbWSM8sUpnnDhqcgCCzEiSLGEDixbfwycDctpCmUja2",
  "key28": "4u73gfyXMv2KhRuwMCcJRsac5KW7bEvQPdExV61cC7svMPvzSsbsuPbkYuZdUZxUhUdK9AxKpccWmCCePtAP1KdV",
  "key29": "3XxjszEy6rH2o6LwzXPeJ4mv3P6ZaLBMHjBY5X4dfBPej4GcvQDzvB2TXxRQFaD8nAxUSDVgJr4Tu8wWNodfUH6J",
  "key30": "2UP2UsY5FMxzFRTFiwxhftob4L2iypodAsYdcVtFeAoSbs1UQYQmZh6j1Za1Dkmx465RSdXL8UWSytS2hVHuGz4t",
  "key31": "ymhKYmq7tvZi2n8WaFxBWaKNPp3JiVCsJYezJbMmwKoekTqcJtAWagU57v3aWRPC86734FRxgcL7fxtCHWiZVD2",
  "key32": "2bXk9m1pBQgUdR8jHi51nAK3ST1TRKRK78KSNAD4VEPyzsGbAv6KBuP6D77RZAkkYEJKTJ7a6TCnx48DqVQVRqPJ",
  "key33": "UUEsAodHUZ2y8cTtPYD3kwnzkzF8NaNsUoh8aSdGb8btmyi1dzUdocaHWjYpx3Cvj2nqvQNjkFZN3hJ85uPAVBR",
  "key34": "3rgVx67r55RgfdhujeHipF6VSrLN3V3HyYvfvhWsggMrQpyjRidPFeLxjbbi91mrF7oPxaWsnwqFCDQ1HEz8zWzP",
  "key35": "KPAKZE7SbBBR51ZTcYPDV3KnfgPoFsM3WJAg9YXhCcQHzZP4bZuqX1Hg1TShcDgsihaQLEqKoQPzL8EM16hCLXk",
  "key36": "3e7eJad7ZoJPBqqeeGifLLoR5qZ2LrMNBmMSX2DiTZAvrWRnKtghsK5R8zt9DJs4umJ82QKoMxoHxNL1XcVZ9nKP",
  "key37": "4QfzJxgfzMtixwsrfgq1e4Q47nQmSAxCZQ3j7X8apwFszuydg8jGtTFagzyKTUfKefLNPVGd2cQgY3HJQLDHwawP",
  "key38": "5kDVNNA3dZfrsZa7P5QnFJmkCswqfQfH5KCHVYCupSUbgo1iivvi1jBbFcpBw8rf93shP2dU668mmpgbGYtcTNBG",
  "key39": "3qKRMRhPnEHrdsL2NS8pZQUZDbpuLomW1XQT5JZAiqrbAbgWrvS93DJDjX7XRaFUxfG7b1fuDJQZUwaQN7FxLLNY",
  "key40": "4e6EEEwqLcsH5ZuizzWMkdoJXQfRQ6WhYPcfFgAn1DydaKjv2TYZgfTSBmj3LXs7V1RC3x3QunFmG7ABw9eF4Fg",
  "key41": "25SWtpZbKyFjzZkkom79nrSX81eLfvRLeN7awKH9VhJyTt9BstGNRWE12fQK6r3cEmMu7MHfTsiLh2xu7jojfJgV",
  "key42": "4jgNNrjnQMhuMymvEhLNdK3GWKWgrcqTQy4CNeig9kbXX48MNPUUBJFcZwPWra4s1XXH2enz7TzqDqSAQVchWjWF",
  "key43": "2WkKmBUGET5WpPjyksyWDBqfjY4R4HRiRBuNLp2xL2ohtguFu3kyq6gjGc4gzqjwaGepNVwQX2o3oEUyHnYmjwZE",
  "key44": "2WN8P5gSAVRgmRzgxTGkTFaWkZcsVG9b1LdBYeShEF4R5iHBP4kkNMSUSCxXMubqZh6MFM5izH4dSwWJBpXkRkk5",
  "key45": "5bSnCC5twTmbP9TH4HA7CKU6FYTVGv67iUydxSdF7s7nGpjZmwwo12D99XPvqDsSSxZxexbhMT5iSXhqwKoFZNQY",
  "key46": "2V42XevPhNSfxqQKoRf3aJWPs53r6Xfc97CHq55VevHNZPkwdcj5ZrGcyaM9uo4aBX2bmWgWfLm85cdziUfNxCXj",
  "key47": "4us811HGiyyXeiyjiHDW1vTnhSxCzqW4cc8DL2atbjgb9v7irQ2e6oVEWUxQHZfsEm5s6yAwuoGTxbRSFC6MxgM2",
  "key48": "4FDCKjjEthB3a7n8nptsVFxbJLT3RjPuPszFav1z9db4amQdKkb8qQwgEJk3wmCaBveTJDLsv9AvRvYmB4dND55V"
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
