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
    "34bGJmu8Jh2u7fHspVDojabqDbm4pCHvBbPFaQJC8p2CX1wrLmNVCp8q57T3drwnC7YDqnprhpMFpmbDA6Dxz4gQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52myzK77PSDyaFfUQCEC7qsFyHzywij4mvu9BfMwvmFSMVRBp1dm8RPhDQr8kRpexAS9N1sPvDiNXJr82xieEfWz",
  "key1": "4XntaanzWaiVd1A3GLoCGw2ZGnBvqheqek3g8pr6dTeYSTtJh3jprBk3xW1ravQ63Q9N8aY2eUtYWe8fxiE6bJgc",
  "key2": "5RxXvgvv8LBRbkr1D6GEaZ8NcSk15PpNtHtauen8nqNLYCNYUhCTcxv4ynoPokKW3bTcNLH3RNcEzq2S6crZT4VX",
  "key3": "3zX8bgVL9n9uzRN5CqCTGub2gd6D8UFPDuiMXcXQsQrXZV4wNz8FeTUv4j1gRcZdWT7cEkXhsjp5yVfnhYFE2YwT",
  "key4": "4DqE2ng3g761Kenqzd9A5DraeHRLFiq19bbGTauWxTQBm452AJv4EpQTWqksZQJUYSNprBDcP7YY9jrEk73TMP3B",
  "key5": "3Gob5CT821zJcdUkZJ1PGxpo4Ko45EPXUzGkwwAA7d4VwC8Hhi4XuGw2fWzVdgDL7779MDdD1ASnrWwWH3JuqHib",
  "key6": "3LjRBj9QLxW46Wie8xaKKJgWv8JooX78zvDtJpgNqpAtcE1vM7DDoDy1E9yH7K28R8dsT1tL4bsUATHG2DgTJSoU",
  "key7": "2bfPWDj4apTDCGzxUX9ZkTkc78EeM3B2ExT8kMoajasE9SWiKns3kMuvrNcsromQRDTp1eHG75wsUgbW199hqygt",
  "key8": "4Znre7Q4thgekg42N7xghdpLS3oh5rgrJr73DV1U7LpjFYMR4sydTstRgbzNZzuvbF1aGwGr8g4wDf9mxn4b5m5F",
  "key9": "2fD71brerTfYxkp5qWFWjwdqx3zAwYq8WGrLN2Zk2jdYSua3unhwYkdNDJ3MpHwD2ob1YTiLjge6PQAWNr9hnxQ4",
  "key10": "2ZfAYeqoxK2XkKvxm6wz21XH6A2PX6MhVBb9mkiUooCJmLef6YLr1sx5tcL1t1To9ksKBkDkVwApk9c7CmdsoC1Y",
  "key11": "5PQhMVNNraTkSmHsfXegnmW3QQ7jc9a8pxWrx59bvqkh8fAxN98fscV9SMKHZcAkSneoaxmX2tbiZLoYQHrxqXbE",
  "key12": "EQFK9avnDtUpDkaZ2aosN2wDPJ8QmeC3NeAgVjREnK36AjMaKgQ234peDjYu1C2eLpKG2Egnx7ETwb94pwjvwXP",
  "key13": "VZm8Lq7CXhu8NZrqS6P4zZG7WsGWG9Cuoi55JfaWrcJmrXWCY532rAHFsmsghJB4T6x4Gn3h8EvJpjHzeqctu8A",
  "key14": "5J3k1YWY4ewhoz48CKnCe52BxGQZLrzGJdmc7tziuyjLovxkdzZt5i2wMbWbha2xAEApeecKkm5WJWnHYiagPxWZ",
  "key15": "en3emVrVCf5L7Bj3xbr2LF2qeDJpX8ur7qFJm5CGabZmBEd1VEvUs1MJ7d7J2cp7ga8mAPLGcSyhNgj8EXHsXyM",
  "key16": "55R5F5WpES2ZoTaHxVokHhLDff2m8onJHgSFimCAUmTrBe8BTFEXsc7WFcsT1jaiqCz7bYhULBneuqgzQ4WcoNH5",
  "key17": "5raGoRnxCga4sVnUmy9FP3NckfPB4RkktWmwMQMz6LNXY2XDdnUXrTJb1LMP7AGhY9LY33ZASj4utZXoUFULH9NM",
  "key18": "2qtfBx7mzJM9erCtwWKgBQbn4KZ6G2vJXLLa3RWK2UFhR6CUEA6Vs14sx5PNV4WPFYHnZCWz5DWXtjLByxj2qUjC",
  "key19": "5Uz6EURBcxC3ZxSJLiN4G3w61fqfenRViiBVh8b2gb71fi4MSYtXo8mojd7sqXYH6XNJ6Z3GifSNTAZvsYrJYiTJ",
  "key20": "5ejpxBtYoHLnFADdenLLuKnr3W4rKxwh6YnuhyUN9NUuiFT571DzLeh13vkbeWbrpGrHoi4R2oU54DZv9AoPELBv",
  "key21": "5UdviCevcFxWW3RoLVekBodx2mwgXni4MZogRZjBHMcyi5WkTfp1SCC7B18QjD2SWjnoyoGqxvJEpEcfViiwPH1v",
  "key22": "3rU4PB7UkSxWt7V72CHb9f8kN5mFsJMHDLm133htJbToEngY8eujDb8awjSD1aiQSRgEptUwJ7UijgZjM3jHkjDV",
  "key23": "N5bEJDzR13pKvyhGqPcEwC2GVnVwtoYwr9fF6Zxhv4ZRqBg9SvqjnP36w349iJLxFasH6BGGag7msfijcBdrL2s",
  "key24": "3E22JvxRRA5C8ePjXwJ4XhDvsydmNvYQhgeARgtM21kMpVPKi1zxBBBV4GLaXrmc2X9Pjd53sprVEBmfiMWg7t3m",
  "key25": "2M9YFSV64fC7qvbBzn63i28wVxCACX7CirVjgyZnjcdXBhbCRvcUQnjbXYnA1WdgRRzEdru6xLYRyeZQZ2uNZdoj",
  "key26": "63BgbKHXVt8kA6YDZEu8TMfNwW8m5HojsfXnczNAD6fNZSpTnqxLsH3dKziyYwGFJ6bEMVCQe6efMeaDeU3NhFfU",
  "key27": "41GgEAD2QcdwSvQea1JUEJETTq2EJ9VD1HSsFw8jnKoTtPYtdaj4ewGPGfeCmm1Dg1EgfSRd7Jguk7JsifZHpX5w",
  "key28": "5uuLumdDWJLoqvSUwh4naBkhjdsW1UYSpTJ3Qmw51c19HjnvvnYQwQRHL6hFEucYME8BXJtYx7sCCzxMhhiZL21N",
  "key29": "4mXVEUJrBgbNBJ9TYysTVodv6su6AQymwK8GZvkucbLj69XsgZJ57qjT1uzPgfLzgJ96gDJuWANz2RrPsnAiMiR2",
  "key30": "5QdWoFF5NW18D374uaVL253z8iWL7EkyjxeLsxH7F3GHrYE4QZTHadqFP4ZkAuWfSFtih3cEg62sVPaN7Up7fUgF",
  "key31": "2xxiiP2YwMMwErn2SNQqfQHGEjYxyswGPnchyFLs8wFTSAVQcZFHYGnaD2WagtkRwB9hrG5ZBZKDMjLtGRiLTHwk",
  "key32": "3h6mwnVFcGgJzA1skJRwTQrZYEB8RkxZZwRRaHN61j4dDZzfMhe2zp7y2vfgG1LYxyDv3TzufELN5ndKzaPNuCyr",
  "key33": "4vvZeFnfqStJzeaNtcvA5JAYqQ8K6k7q1FPC2LEpyhhJz15WcgqBUjFVsxahKN9ZFk2MVbiEEACfWC41iCuxi4sn",
  "key34": "66zPdfhR5GJrnPV5PEvYGWbtxJLdyT9mYb7t2qUuuuyPsXwYWjcG5yE4Aj4cuL1jqr1NjWhVRx6DaaR51VRQcKe3",
  "key35": "vdShYMtu9u2bEGDnLziaRTyZSB6iCAGVBrJMn7Nanz1qbYJKJStea6M8T9YEH3AnN2gifqm44by42RuKr16vSv4",
  "key36": "2D69pHj9E2g2MLzSgqWuLAN5kQouSiuCgpwTyFEzNjhH8fBRxGx7VwkNNZAQXpacYNQ8Hjk99UgGZQS7RpFm9HXQ",
  "key37": "Hgrje8N598TwrwB3gK2aiRGQGeVUNfXum2XTh3hNLWcvz2QgPuxfRE2tUeq46R8YMdcMXXTCW6omUWDcmPSxXPt",
  "key38": "KNvrLedzVk8QJ39jnr8HUJaYPWbzazRVFvin3AL6wuqmj1PRVZ1rHV3QZg5wiHMxoZnko3SCYqQV9wq8XbgJvwp",
  "key39": "4DTBH6AbtvXCsYGAxRsXr1ASYeeKCnEr2U4UArbExvJai6GEdEXv1sskKj8VWL5m5jFPmaXV9zWL9VZmviW3KTKF",
  "key40": "43TwZPrTpqCuaLxndzLYNBmMZA1SPQ7GxpfqvKwoqvVqqyW1qqkkM323fuzdZtZnfDoeKqysJ6axLMNsVMuJbDA5",
  "key41": "4P8W36hpUAAiGDguaxbddna1WhX2XLqm6LtgvfcncrRsm75X77arEGz6yG4LAXbYi5jE4oXJ1Hj44W2Rmo7tRM13",
  "key42": "2bYpM1BbTyQPBTGWueQYmLoLr9KXtFEJRoVqJHMdGt9RGybGVvuezZtsJDFSg4Sm5xi2QmCNrPs2Mv5AMmMkgUie",
  "key43": "4CQn6mdU5C9w2BwUVvRAyhPCGDaRRFU3nNZgkZ5MH6dHg9ASTZj23iaKMJmkm2ae8APEvqXG4oakqs1ixDnWEpAg",
  "key44": "5EovPY1PJ6wxiCum5gbjLAtgRbKPfRNHm1n36SJhyhZPQvK9gayBnv4jyNRU452t6JmPgq6zJQ5rDTHgAkVrJdEW",
  "key45": "5jyHqkVozHKcAesTg9JUZe9s2LXQ6zarUuLk36vmMVu7yp4TKf4oy7TmXdgKYKNDeW5y723LVM33cDVb3TkDhf8H",
  "key46": "5u48scDpa2U5Tu7xGLcyoBbsNCSatwSYiZqJ1ZwGdgEbrfRsX6kNd138tBRAXKMEP2GTwQRJ2a6jLTZ8mR8qcbuu",
  "key47": "5etSgAfhX8dS9rEpDB8wFkFrowERQuEJbzUoSyXsDPHB9iKAHZn1ieNm7WYsa4Hv1MKqciFapQXKvYi9nJkSXLPs"
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
