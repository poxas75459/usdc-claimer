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
    "2GXyD74vwp9xQc5L6WkePxXQQ4BNqajJqExAh9hcab9b43jq6jfAyt3HaUZgnuUbtr1rvTVXLKxFXFAT2SWdUc8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q1Rkg1Y7wDyFZcDUcUt5PKaL9ahnzy1VhEi3mc6abpkMZjU5YP1JnXzwFiv6YWEarCF14ChssSfty4v1eua44WC",
  "key1": "3A1sPFeheqUyFQhBNkWUgD4SZNoSt9WswQczwxPmdSRsxpWp7AC9hyHyhxYoEE4rXENWS5YKhTiukkY3e9E66vBg",
  "key2": "k6f5SZczEqmooDUsaiNGLfL8ivzG1F82hBr5nZnukpAsxbitEtf59oiRoGsS4Axq7tyogweYe234gRNz4XydUZt",
  "key3": "egHWNmDcMwDWCJLSoCV4PjpEzpcDCggUPJa8q2txRm4f5Grc8eXtQiVpXo3GwkgoqJePE3MUFqkfiR7hxiNRDMu",
  "key4": "5pgYFKSG1H4tPHJrwoEwBXdL65L3CE7s4ZNoe6PJRdngWyeh98M5Ngwv6nYYGj5SQWWihAahKshB7omG9i9LXS4c",
  "key5": "5aAcTwfMCmAqbYAsYtZULyKjiUd7NLMF5knq7HPdQDgBcVQgfpX8GQhhYeFLBsqsdM7nDBJPBUR9vhhPYAfEeBBp",
  "key6": "FHPZA6eAwbcWfCC48pqmakXMuevna56qbERYzKWmJrDb3WB6YmwXKJcCkufUt2Kd5XnhSVtvLbzeUoZ1sJNUi4j",
  "key7": "3cudgFT1o8QF7APckS1Q5bTQs4D7KCEYdSBdKsV1Jy2e9TM4HEqzYrU3j1rsQXPFb9C4XLqK6TwenTyNjsRK98QF",
  "key8": "3Rnw4wDr6CGLi7fistWPig6eaeFtuNDwuTKb7utswrtm4ijewrwaXhE2dRWTncQJXj5qoMFcAY9eSTPyS6YRGRk1",
  "key9": "581y3CJ6diEhYw6b9wYnTzTzzQmtgj69nNUQFLXwvfhsY6nz1JUpngkii6aDJ2F1STkN5aDJ8ifNzALg5aY4YJnF",
  "key10": "27yy8ht9VGtPwYQcPCzNKXCCFcC3NQ8NmYDz1CxrTQQxcY2xXM4F5xQXkNvcKZZXBysWqz31YnqMGjvLTzXqEYH4",
  "key11": "4UJLh51HLLs8zzsqDejqTN78AXey2BxfP4fWsfmNjNxPzVVJ65jocckYGRLcGMMhvu8eZbXYgpgAryMrty9jUUiA",
  "key12": "3iQMdDDxnyKFeW16ENrKUDXLqGWRvFVj2n36WwjBNiU5Zkp9QeP17cneiaq3RwJ4DadSCxjZWKoMCwqefEd9r4XJ",
  "key13": "5bkqJZceLhhBMJ3aM2vCXFNpgNtaLwdrccneJ7HRgtKJQca8NUGpkz68o5LSJavU7Y8EnyaVDBqpHuWAhKiRoyjr",
  "key14": "4aLPjCfrbnRMSGwbJsHrCwL5oQZaDWVxH4ftiQUPcuBhBP99dHiXTU4FxrgWgjGSMLN2owEvn1RD7a9tpxqbyxHa",
  "key15": "3B4wntXJHvUsWzenSa1Fe36BPTsZVGqKcDr3HVXx1WZ1ds4YDfDQc3CXG4Q4B8HBZqQe4JA4NE2ZoiWFjdJzRJF",
  "key16": "3J5qZ9Po9Zkd5NnEpm9i1C1TS7NYEsnUUoa42HNJak4kWTUAZig4qrJBbJW8Lb3ARKRrByKV7nGRF11NMjmgV3RW",
  "key17": "rnHzoP7AmeRZcwjEF3hiVm1XW3jN5ri9REVX1gnwriY3iwZP9hchEXX26Q7BCs6Gdh1gZSDJNgnWz5e4YqqHDY4",
  "key18": "UXjHBDx7QtgQMJsU8Ytz4cY5rkM9ZXhfFkGL7V5M7WydkMfWi486wm7N4ehh1QNqhT9MVYc6nDoaJH9wXKQHVdr",
  "key19": "4qmo66joCRFnQzhdnfPWsoSrh82e8ZfrGFmQZnDypik6ViWDT7JHsmjnRtkVfo1TXrVESS8Utet6jeTEQccKmNjJ",
  "key20": "FJaKTKX7bUCeY4DE8ZPUYgo9EFfse1r4Aex3gf2iD8WvvRLZYfVFxwXaqu38St9aRCc7of7U3MVjdqH6tTfcxYQ",
  "key21": "4karmatYwxoDLrU3U4GYDkeGSWBLE3xLcDW7PCQvytqeVTx4sE9tEHCxmxLws6dQ4ffssUaQqpz9KMjETFmPmo9z",
  "key22": "3WmBpFsguhc1qfPTWtJmf9MQLUCfzs3gApXpNBuNcxRKtfLBFFx6kM4Swc9SyWHAJnCZh29Fj21oKTpUBmGdtSLD",
  "key23": "5B7yyopJSgynYC77EQJvc8XUpckhap79yQMqx1CqFReh4mrTbWmy537pZdLavusyUiaGSudhAm32bVnZ7Qr1W95n",
  "key24": "2KUKT1ooyaWJQqnimtqqYWY369dmgxiPwd36WYgUrp8JC1NHYpYBEJU6VqXteEzyTjyznC3yGpUQi9nwdf8wztB5",
  "key25": "3Kajy3TTTYkgXi78gHzL9hvrbRVYGhJxgmPGqLmfMGpYtvB9FTz4euVZntm2yD6Ym2SuKZ3m5ftjX8Qx2hBP4Xoj",
  "key26": "3S3Ymrh8hcyHfdVBEhyH9QJLVDZwLmtYkkhxwuhZNVGw2vwP7HeumkAESxeFnqmtJx22B6gQM88q91XFGSu7xaEY",
  "key27": "5HSu3Qaun2iohoqLEYcmWsXUJABFSJk1bFMMAhe56zzgS3Zn8vXUKCTVqnNzCx55FGXEhSyQK76q54sG5MmgAezy",
  "key28": "2Hf1nXUeh4JcxsGJE7Bh4SQPm99PunZ2zovXnjCcfAPkMsSQBLnEuw47NcrN6awvz2XYkMhCG9gsmUsu7Fqm2h3j",
  "key29": "52YeAQ35kekhWSzCZKWyfp1XMx4MWei8ST45ZqhqXugL8DCJJ5E55xfiYfWXKo2T7dNPaRc8TV8fdWBLw49mFgyq",
  "key30": "DYvB99WtLGXmTYEfZ98sh87bSmBmCMUToT3ARnG9W9q5M2Wc1Sokg8oXMQgztW7iSkJaawgCt66yGAZ6uJpT9bw",
  "key31": "5UMGaCwwxaZKC1NkzDNrXPb4fMmmcwYeakW2B2UX75cGaEWKUQdtJ2rijgm8cvzbhNtLCR1PbbRyGP7dJt7147wr",
  "key32": "64MbCbGjPTxUxanvXZLHkvZdo5pa233DMC8GanueNnXW1HrrGwPywmWKjLncnRPFoAQMFiRmygGk19heb15noR4W",
  "key33": "DFR8VTPr715ug44PmoE1PU2sSSNgjJjvnKs2U7MSZCzwZ621Z5xBKX9PyNsyqEyKAr6E2n8fjmtrtYrDhpM1FdJ",
  "key34": "PjgLEUSyQKmSYonXoUVLPM95uFikHpRyNEJsEgGKAZ7XiyPPXHxAaZjv8UAZqKHdHjw4Pin4VMskg2tHCN6zvDK",
  "key35": "w9rXNHsduvnjfF1vsswQED37eXKzrLZe34pyBtKJoNugZh93skK5AMux4dL7s4GwrZg1ET1pm9CY4iGFm19gL51",
  "key36": "5zQ9uJ3urhUKzVjng9YXmvqVGTnrAwV4jQRxUZQ3CzGWK2n85h3vxAXyUZaMwMm5ez2ZbThdEvNRWcTdEFqsC6En",
  "key37": "4BVH3jm9Un5iSTVvBHShMiRE63gADMuo2HjfyteNMZPRDtioFKiCBKxaLe8sR1wbyAZjk3RgKXyS32ifgqun1ngi",
  "key38": "4fPzYzQ2sjogfcoqMMhLHE9uc8shPoALQgfVrNfNGeoJWyMH89wjr89Fv6q634Rq5vcm1QvLhFyrV5Gj6GDQ8CaR",
  "key39": "5vPsp5ziF9qDiodGpiQYcpQ8FWg1hws6JUJcjibEbDodTC4yUxE6EKVkpNSwB594ZixkZ99xfnziPSsvtM4uhEvR",
  "key40": "3Dzo4qR2TizYSmtRtmLramVDme5b7m4yEAvdJ6PjVxBuuyVeAXe4VH6LDBfyaLHDGHnUoNTi9ctBxqfJFrUvmM2W",
  "key41": "4WdshUTrsBp9PndhjeyJk8vCiqJcLV6fDnMvAHYP5ijG9MreFRjFGG6z6yWLHu3oLNhqwPsJ695kvMCv23ubiBmY",
  "key42": "2z9VEyFuHz1LnRPHLJRXR2FtaxyUmTvnNDxxkeiGXFEx4vuudAeGpW8EjJUJi3vHxaksB5Rrrqp7yhRqfdgHD9ph",
  "key43": "41QQUAtsd6ytL6rCuuxr9SADEjdYuSzPA7aEjZpKN8HsELi2JycfcazWkzwPHPegnbyYJs1LJCcYaGJR654te3jB"
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
