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
    "4v36heqKuG18MraKEMTKjyNga4FRHLbMhrmxnDkvWsjctz2H7CdPd2UUz1fZtqBktDbfsgsEy5ujrjRaRnYr1erE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XuPExxrTgqdrY6dLm8DrjvDM8rTSphrxfgJc8pnk1GtJg6E6wNLPgTrhCemSFRwtjSzviqmgavnKMk6GCJUgkSi",
  "key1": "GRvL45MsriAXf2zW3rNku8vxmLWNoNSB5NU3owiQuRbyE8pNMzfYumGZBQv1QPSAkrQ46fqxJ4qkMce8YMTijYF",
  "key2": "2wRoquGzhxhewfYfWRHFqtakY2TxoJMdi4VNtfQBrbbxeHnLd19JnL1vFYdP3AvTPUqK5bK731G76D31cdFCwi6c",
  "key3": "5M5sqKkEAE31LpnKz5FPZ3JbTfUvMVX1X3FDq9qwam9aJbXS1wbkC3RMNvPBzTVWiHrQkZKaf1UeU55dSkLNmJab",
  "key4": "5QThtPQ2rPsCxqXYVMqXnJZmAFsknWHecv8wMgMQTKUNPeLqCuGpMdzZCR5GW6cET8JZaUJ1UYtLWdn5sEcV63XV",
  "key5": "39bGHBcsAdwFVqDPDfoFAabSTNfNZ463DL9aiwoKrYDn2hNRZziBSsfNEcwnin9goVcw8QwFQKkD4XuBzeXjXpq8",
  "key6": "55GmUAgq4kaEdFqqmqP8bntdNnPqVbQqimFL8GwtuAC9oJpfJEmay8jPf79rZ6fQUZ5XvCMi9PsNW9q5BrYmRHvT",
  "key7": "5ZK5pXfk93kPxkWvF1U5sHDsddSKiLitGSPWYS36D4fC2wosGkwAorEDATRpu8kfDUG8WndVY1xF1zr9YJcPDj8v",
  "key8": "2hHiCgKEKsDwUEJfwuEcfGg4uL6NXacmwX2megzgstGprKvsVxitdWMbzJu2fwTXV9SASAogHvmcjPYpLxMcMZ2t",
  "key9": "3y44LEi9uMnsmMMaUfpN6JmiVLcgyCtyVkZE71siqCYM9geNACYLJph4qfFJanvtaoukJmiooMcj9sTgJBbnqFVS",
  "key10": "2f1majnSZmiCByQvB7c3mACAYQWx55NiqV1Ce8hENYSebsYZr2q7Q4T8hBEbL6fWCQnQY2vHP2ceTz7NaUVTNxiK",
  "key11": "3rPPSS3CjqR6HNtGz1TFLoYFecizbTjZMr9vRMXf24jTFM6hTyVdxazfxGQsTV76BgtYUUUKYV9SNgL9XBiSsPzE",
  "key12": "yr6fKun7YnrRK2AvhhkoaTPMV7oALYLEabUA4eRRoTxWBrvbATeoZpyBdmBYVN5dxn6oBnBh6RhGtbqosPWNfrS",
  "key13": "4DnCYCSD5HHuZAujBnTTyfhH5hXtCH64eWZ5RCN5GveVdb9CuFeuUc5wyKL6Efbb43t81y9DQsZVN7N95P39B8jC",
  "key14": "2hnQB3Kyjd4jeLpN7PNxKWSQp1BEbuB2nvPyfmTtkMuG7tKsAZHuQrxQgxoErPGxdgx1HA9jc9uj9nqJCbYLNvLi",
  "key15": "4nveeK5J2i58buvTBi5F5FkseeytYEXdZMhJVkrAgJTXsL3xQzfR7SsXck4fYHoXcTjpjkeDH4vwUSDFjTieborm",
  "key16": "42q2F35xKDecLakJje8mu4QukGpHcLgnbQxXf6EWWA1NCEaCn6LEq1b3QEX8Gb3umFh6G7siGkQupW1sUbQZv6vc",
  "key17": "16FhdHxBCtfSvJ8uxjW7iksDbE3WCr5fBteLCqBsKS325CCdXnUdEXGeRp7XKRvrDrXbXn3x4AS7YzB7hCdeXqs",
  "key18": "4g9rdpr89AmhggFSEr8AJuKas4ZS24KTKs2yLFpXe2YKoVb7cvUPbAncey5niE6m4sfYdTgMhgLoQ688NqEmEyEs",
  "key19": "gvdEEMtBpKwoLWWqi7RSbvKNRUrjnC3tMD2mYz5DiB2r4a1UfwLiJuaYKhEAcoYtCVgoMLQyhvAoqL7qjkdvJEt",
  "key20": "4VndRAbLpyaWo7sa9RCQ9eMorLnQ2KYopDRYzWg48xvBZRXdLpmhyknnjLsCFtSw8UAiytqBs19YBXVLe34JLcFD",
  "key21": "5QACsrxZnbaMq6ErL2UQwiTCz9u8Qr1sRTTpPgmnhW3M7KnFqjp1d5SLzap6TkqnjgGCdKjkK5WcP1sPybCYWn1h",
  "key22": "3hZVcWM7e8xd7DsTCNFAiw8qXq8W3pxsxPaJ6FteZKwoMviBmHtWfXktXDWFenY2QisDkXmTdTnzV5piexqAHTWd",
  "key23": "4kN41pRTNgfWzyomaAErtgdDPHcL91qzXs4TBuuLXWvf7CBFMd72yPLCpgD9rC8j1uKhvNKdNPViYY3sv8fXpKGy",
  "key24": "f38ArXZVKb3ZUMBibvXT3WFwdjZFxPiPeb3w4zDBDvoKCB6hSqxwrzsFEfsjhpUTqGGaa8rX3aRqHDprZLRqd5F",
  "key25": "2WdFbuP7ruSAEpx1srrVy8eoFFhjheJrgcX7Gr8CMHY7YPgbBLZudmkYz9mBMqtqyhKhksD1ARsy99FiKyVewJb1",
  "key26": "3icRA9PVMdv5oS9fbX4YzeUL7vsbVVw4MSdBqMTyexz65S9DgyeBAkQskgrd6HeMqYoS83dQvfAFFqPnuX5ucjTJ",
  "key27": "4JfZcfLZWn9UC1wtt27xQ6kJK4DKDJq1V8Jex8oWHd8nmvvN7g85ojH5aaEpGiiRMb4oqpWNUjzubecKBsi73bWG",
  "key28": "KhrvNPqcr9WhVhxL67s5zzNq74aNqpy7fKHhXpBxYNkW1ZU4ixz5Ha3aR2n7LLubQ2ygCHQWAFatoe3YQnYLXHq",
  "key29": "5MLXGCLaJdwdcecRGipB1FdAMHwgyNh74NYJFjWi712qcQnqdxQ1BdQKGLPGhEzvt4e3nz5kmgL24D6seeSAoTUB",
  "key30": "QtQs1y7cALzbCFkF4RJN86N2RK4fJDjqvuQDnt9aHJcCnwFDmZAz91CX3NG4v2pPW2BDnUWY21WXdUD6ZbAMAHv",
  "key31": "5wm3gfjJYLKffZkgXnUgVz7mCDHkeVGtige7njvZkJqxHxNGBumoyoK5VSu9LyfH8qsch3en5q6AELruRGVRP414",
  "key32": "3zk1wGQkMiMcv8EEH5DkAmgwyTLeq4Q4NUAREfbg9dJpMXmBzkJToiz7K54EEcxz3JgVvkrT5EbbBxYNjDkNU8x8",
  "key33": "mzYU3qC55akubTccpWTnnXLpD8hqdBYSfAYdBFvetTjrR344pgMsWXrjryHoZ8z1qpgXafJuxxxSEPc64hsHiyH",
  "key34": "G6tVk4XG4vH3TJjeQxyt2xQtNzxNTQZ7UGSMrinvL8q6sCTKKLZ57Xfkf5XeLyBogyYfFz5Q54kgYQgwW7zBKBN",
  "key35": "DEg7KiwvSmVF4zFY9j1f2QqH1VXPMfJ5D8nzGKuFCs2khnYMcsHbbj7w2GNB3uAwQNRu2xWmq1vuMuTj28kwdvh"
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
