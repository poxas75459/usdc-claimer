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
    "3BDzd1btZdiSc9aCz1bnvQHceMhMx6PBWyNJMwcZnRYcSmjN8kicfgENjapgibZwYG7ZDic7ABSnGS6MEZW2WJBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rP4ZxeAYpFdRQaHDS83UChykYTiBBYskCw486a46FKkb5LmH7eBZ8LKgXsgGkfL3TJF7a2QFes9v8EWGvxD2EFg",
  "key1": "4KboKwfn9VCjdUmuxSYU6J2RbZo6HvXSuNTm3zckG3dWRDHAUjBxRADTLzpQ8ESwntQoEHQjk6p2JgHcFtppsFm4",
  "key2": "7FgMi6wpdVvoZoAEVNfJAdpiUvuSVZqoFNXpWgS9rQiL3BmSbZxCYg9PjBH7UhyCNfJ6MPk9dBLoWtSap6hjGDV",
  "key3": "3y2kfNchRvik7eU8q1wq1NczDatd9pRdPuKJdXGtD9j5QJgogfm88J1dc5VAHYYBxU4JgvnAuTeSNEvP1EJUzKra",
  "key4": "3guwbSQMbAYG8C6EXGQk6yf6ivMUxreAxvmDKxBVT4raJUSNFKkN9MJT6UVJiPwcKGKcEtwqp7h4Tee5x23Qa5dT",
  "key5": "5Hgz7XWGz6E3ZGbz6geLdLGcDsKeLDP6VSXauc6vzfgUabYpQxp4orqX5yzCzSdZJ3ys75rrAKpuiDBgbgo4yoan",
  "key6": "4Kw4Ab1P4NTadPgN1GdT6rvRMspGKijM8DCwBSd7EnRykz87nBKAbM7fVm3mxJnNFdWUN9XkQa688As2vnyKVcBh",
  "key7": "4iEqN9wfQ9yvMJqDQuYm4XgCHd7W99aTDfmugzXsQK4Kkt9mW5HjjYfLuQb2YKrwHUsVSWHLRx599oHbvMyeweBg",
  "key8": "K38XytSQ5RZhmSzsKBVtw8H6voCVaLxwFNhKfBS6LA5iUKbEbNCPdQd3bNh2JMGj2THron5hwvUFeFZpcLfReYe",
  "key9": "23np78zNP97T8zStoNqP6CqQVd4ayUzV98oDsRtFYd4bhHzGu4Va2xAg4k7uP8mPe5VzgqrzsLy2kKopHfNeRddp",
  "key10": "4JqEsocbT8bkaMaWBGVrB4iSzG5LiyKQxoZumsWZLPC7fWCp9rNEn3ZVyyHEvR75EWDy7k9c87vA9djdCcNz3zKo",
  "key11": "1b6dCGmkotFVYnQLksUQEXxfRbF316goo7rokF61kxHy6QMDU4jGs9cMxVXfzbH73D7fsU6j8Zy5VSdCrybYvEc",
  "key12": "4R55YZnD3bksXQ52yNd8wNprBTU4vnmDGQcigzog6jhchf5NWi96W74wdGeC6jtbVVQX1Xiicj7nSJ47vd6qsMc",
  "key13": "4apj7ssMpY4nZhkTy6En45cZy6nRy5rXVda5KdPAjcx2pQpyzwfYM23QAiVQ8DSgRYi9eEK1qsS65ygn2r9QocGP",
  "key14": "65F1gQommHrtx4CBACZvCGHDEoZDK6NRthpKh2GabkcX9KwvZRpp4yZ1KShKoBBfa2SAJHFWM6c6LNoEDJx2WZDo",
  "key15": "stqenzRotxSjRhYXkMgXBNjnxvLmS4PXk3wykcN1iiYWtPv2RnFtFYzZ1nAS59jf9tnBAN44FSrQ1j5auAzMRcP",
  "key16": "3w4TrsnLUD1VvdNvwuhCyfct7brpXmUryespp3ZGET9RsqjtTJroGkAVtNHxifafcjt4eKfo69px7dATkAgnqwFB",
  "key17": "3po6ehohMQUaZDFUYmxn8RiYUNy55S9FWbNvjgaG12bD4ftZHZujUa7STybXYGZ5rDxzMdVzJdme73o4uuLsr3FH",
  "key18": "1PpWd1ebwWPG8sPccy85eyXkAL86dnD2Goma6Zwuo7m3KHm1Jrb3C9aEF4LTLhGd4FVf6r3u2m1xpQ2VWFhwg6k",
  "key19": "54Je98fBx2Nqxebok7xVrcBfseqMuwMEkdukXdzNRDohDxUFgGgiqdBTKohSuaP97iHGVjAWH5hGibNX84QSLzLv",
  "key20": "2fPGqc3NG2vzkWJutsQr6Cqe8xtu6ZYqQQQyco7qdvBvzaR4tcfDiKnvNovJxVspm9mti2JZrYU3GFCmEPfpMbuH",
  "key21": "2QDRQigsP9PnYnCPYFPTaCk7bR79KFX1ebe9EjnrFg3hrWNg9WqzeCYFRp5DrEoG5ME4Bu8LVg5c6FkhaVh3cvZN",
  "key22": "G6wo4Tu1XdxRgNdtxHHEod76kyfH3x6BDSar9Ym6Z7rpXq3euNx3EAqpV78qb11xi5BtLs5CHHnnSngBrctAtDk",
  "key23": "21FqimQo61xMBUfaXDnknZDB4fJNpibPR5cUHy1Xk5vT7xeuJLEf4wmR5hD1RJnzytiFc94ZQwsFdN5Aunro6vM8",
  "key24": "2XSyGPMJ96WySqbeQDPx9UYQ9Xe92USCqDZxAV1NzkFyokU2nbgzJK3KjQiaihGH2LjZdGQX99AFfeTYU614DxPC",
  "key25": "59gv5fTiKmfiYzsCU4SvRrpjWgxdqYRzuREutwMaJWWG9oiMpQuZS5YmYE6FdFfh7nTv7cZWVtuHBQ3ZEd1bsZ9Y",
  "key26": "2SkhzNA9DqNwRhnbFZbfLm9ka6w3kRscPKtnipYW3Jcgkqo5TvfwKH9Ux5jLCE375Y2cTsVQQw75J1kiwr62GAMt",
  "key27": "YVgbbqRi4ApvsUMTfPmNwbXyKV4HECsFSmwXAG8T4gYuiJMP6NZvHXiXFA9BEiLmxneVNk9jEiuAxmt7BuP5Z96",
  "key28": "22S4mwGswS6qYjyRgeXvSbVeXQSLaB1F4Mj2oHZqAeTGyeLr5svSrm2nXC7PopdTsYhXGhVis8K4zd9DLuH9DEgo",
  "key29": "2PBDg9SwyEU1eiFdZWzrMDu9XSLvkSdQEJt59EJKY1PKgkh4pi22jd2uLyivvbYtRkRiyQPBZpKN8WpKHbR4k7qG",
  "key30": "29tVAHQSxZM3wwU76mKWGpy6hbGeLWrgXCrJ96GPpTSeCnkjnP2nvwdXunzpyDoozRXaFyZgn4ZHuRTUUcdNXTvh",
  "key31": "3oNcMghgHdynhnzb7poFbGw9LRzjBifZcsCWZGSdNnsRQ1APK3zNzwMhzkjdSoShBYRE9VKjpxXxjbLXMUGUBtgs",
  "key32": "4ytqmhWgh8vAaMyywRQhtod6mc7L6xBYTkNk3wAY1vw3TLnNthhxtRVGzeiRfsr7TUmG7tYnY4un1qEn2bg22ihd",
  "key33": "3oTU3FHKNngBMwHZR6KEPZnHikdzPShGZNAX9SH19ejSL8uLT2z9nXWdLVjgpiy2gTFNjfDT7YVigg49JXZ6Ltd8",
  "key34": "4fwfNubXLcpmVUyL1pT8AT4hUMzsRxEXqxH9y67UcgQ5VuBDdGo79FcXU1UieTbvm8Pbv5daLTZHFVv9ttubsGwB",
  "key35": "34LFFzy1Muo7CnQogATmpZdnqKtShk4TgupgvVYg1MErdyBQeYAkjrjpMXiWW9YKjvYKwUj48LxDHBSsVi4Tn5Ns",
  "key36": "5sCZZV1ZjQ6VHTseH4YQmeaSzTfCytSou3KNrGcZxvXn8C9srKW3HVdWSyEDmgTn4R469QtKeixfkHAfyG1d6FcD",
  "key37": "3a4BzNVseNCLF2mLF6AjximZ7k6NMpAbVgExNYoWjhRdE8rj7P1gh3V6F9rbV84u6gF3QWjHcoaW7W9kWLdmXH59",
  "key38": "28DuNFYn5YbkPVitoeTHB37wy6utQPKjSQ9eJSFr73SRBhLFbPHtuvuXaoJmMRWWVcv3T3prYEgy7jpY3iCRqJfi",
  "key39": "5sDfWnJrAC5GqusZTdwRfKiPF3ZWCALbR7mnhePRLwVdt7VtFo3KV3g37Hp2L83q9g7z5qiRHY2axfC5f5iUAgDZ",
  "key40": "2ZBRo6m91DMYZyf7YdDRJRMVjJ1y4LJqCsKnE5k64XZPmKUJaYUQEnaVJufyRQ9W3ripMPLCqHtEoVHSc3QuQWpu",
  "key41": "4zUCWNNss2CKRnStyiyVw1krudP9JL13Aqmxv3MrsPuBwpsD9yinwJgFTxdMmrLL39Q9ydpmKGF93eZCgMLd5tm7",
  "key42": "4EZvqNh2mAqQAZDff4QuSDtjH6PzZU1pihUECN6wXoWQCJx1ZcAjziGHxFaWUsm47oyGwXtK3wfaxsJHg9BrqAG"
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
