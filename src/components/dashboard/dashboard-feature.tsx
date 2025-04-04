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
    "3pujPk5RsYhV22HPbAHaWbwLekq9LWvoEZP2wjkf8p5zchxb7VTFoHXKBQKrSDpssE9VgjpAQnskQhfjizto2FUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J5iXTmRwQjHTWPfxeEQmHt9F8FqWgyJKR1neGkit8dvf1tFcrk8ht1BQ85Xz6aHyiVNrmNrMjsm7oyN3CRK1FwH",
  "key1": "5u8p2KSumHuF6965DkmZZVziP5Qsq3JVZn4An4VqCvyJVC1L3swpF3R1XQ5PCGGcDnMnwmSYodTncbKhbiovK4d2",
  "key2": "35FQDfzx1bHRJVvnqBatrBMGA6SPwBjdqpy6sQTXhsjMcQ7ZxUqt5xmToXvEUSKugXTasSVfAgXgCQBPPbfXaRUz",
  "key3": "4hm23BPSrKP648YFwxbLSotgdgpxUhWtcjV9PeDMeAhnuesB39xwQCiJVma46hik1RLm7ybuAKXgQGNMzhR5zLwm",
  "key4": "3P6iQ5dTKucbNrAPY7of2aBGajnZm5gczBPtqwPVnKbWvYamVY2d9X8xmh4ac4mpXwxTDhbsRju1j8GN2fVTmAMN",
  "key5": "2dTnfRoDeqxCtnk4ffh4gjfWTempAuLsqEyW2RpyqFsWvXPYitwCKU8bv6rE87TQikPP47Wa9ou9XYjAiHqQPZcW",
  "key6": "XRiv7WACaoYikCnmaEz8kCmzYyyH7WPLjxgpc3pzt6VTe4sw36T8r85KHM3EHaGV2uaJSLH8D9q4jE6fDWCZhsh",
  "key7": "294bVW7VUR4f7S9s2EUHg4nPWnwa8bpB5PBytG3bgdnN99Evgi6Uz39vihVn2FFvMdaHq8oXMnSYCtK86gxjcSwB",
  "key8": "inJMo3WLBYenUNBg6EwPu7ASjSbhKpm45WTCxrFCrRUdGbJ5CayP8sbNfitWCmVrDenoxpTixE94Exynwy5f8QB",
  "key9": "28kCU88oP5siiZM6gu3vRupZJcn9cYJNVkPoa9rE3XjgmLt3ePmZJG37nEY4FRRFoxeMR8wXc9WF7yoWZgKvuYuW",
  "key10": "2w3KpZjpFuUGgtvtAUo4uTcf5tDtXzv1ntuvYuV4s7P9Pf2PTsa6nKitzPCaSkQLugeEYZbVtCiHt1mUnmgxb2CG",
  "key11": "5HoMDBo3rnmGCzZmDGwg4B2Ja9gnVupFVaqvEBYa7Fjy5QfCk2FDV8iPY7GXhyW2X2a5tF6S6yXd72eZBLQ3X32m",
  "key12": "5NbrG17SVLES5PurKu5rxeFGCmjC9KaiBMaZ6JqyjDds2daptF881WmFsNHEykvVDAYDAWkEgu2vtkz4VCYHnVJq",
  "key13": "245jsXKXnp42KGpw5uE4qW6p5WipEF39vir93uwWFZvGAVXTZp7L2zR59MMW3df6q6Y7ujo3tQ7p29VdbxNQ77AS",
  "key14": "5MiHWs529QEoHpFoqxMZzNaegUw7LZ2sbTJnPsDTXW4uX1HC2HdFU99ZsRWufzKY8E5cpgsgGeJEwSu8CfSHS3dG",
  "key15": "5fGfhVko56KX9HNYv1tSV7AfgHguQeja3VwLCkghihQMXcEuobz1QmLDo8oWW2J7Z99WqBy6QtRefSzsXiQ1gw7g",
  "key16": "4NbLttDJ9Tv2nf7cy5znvkHaFbnYwMmw34XSxXGK7jYSLbMDn6eijL4XaNWxaTaQGGR8vgoLKzzuRx2wTCayWMmB",
  "key17": "39UVmPntWFJFftLjBVpWd6X7KjmzMqaFP4acyWke43ES7uTDMpzC333zQgTSzzeGmxaB1QGJu2gfzVfsPw3LbcoF",
  "key18": "sGeERKgnEm2FWwqaGY3hjcy5rroQpKixf6gJ3f7wLZwqpepN3ud7icj7XjCqXRLLynVu95oMugHgwzB65MLc7Mu",
  "key19": "2C96YLV1vudfRhpStjX2fmV9JeWLTHbiqyrd1UR4gJtNBGCtWQJTaySQEDszrxneLoNdXAMn6qZrKsGwN8RHSNvq",
  "key20": "rJEveoRHBTqrBXTxnbhMKidCWbHdjPt71LyVvpsK3ngUeub3KT17YCoBYWsmmuYRFei6qYAYRdvnMCLvdavUgzX",
  "key21": "3TpZAYhwo215LAUDzmGMRtKA3kYXoGhqyg94ZcQCfxCTWUTr82wRwziAVWfw1rgromjvoWVGUVp8sNtm3ZSckDAe",
  "key22": "5oenYYDnb9VQiNsn6taURxvNmyymcfUeK4Zkcx7trJoyAM172gA6gKDZ39N8dSU3Ka7PECMTdLNDr8Komq9MEnaV",
  "key23": "4ZJPQFLE1qxLdwkpnNynuCKUx5TRwyjz86tV9RzapTwPCscRXTox6TExVwd9VK25bZyxtRVYZprWie42FBwJimra",
  "key24": "zHzgPv8LKv6nUheGPUcqWoue9sD3nJr6QLcei7vQTcEjPGCv51aNXajPhDBobMDxjCThtm1tToDh5akJCyuMjUw",
  "key25": "sw8gAmir2uda7bssMX3wwz3MkkhnLmhBp539HxBjNk4X4yDnHnwhna29LbSghc6ZLxmtCjZ5CvHWL8MA5B6hVXX",
  "key26": "kcDgHC1yPzXM3YwCcrmYqosxSDbMtC9eUffHXsjmhgZv6xLtBkbiVK2tT1dueVCpkU3nfSdWgbnNFJGZmrNCStT",
  "key27": "2nRAPCbbw1LTgS4iSEYJXJaCC5Fa5sqBgSYMrBoem7MYBS6eCxEW1ZsZd2dcW1ZcxAaUjjBHHrWS5We4PCqwE4ES",
  "key28": "3ZPLAft6m6vvdqCDxD7A328ti8aKX66yMPkroc6dQFZHeUNwHsfGGJ8kTSBMHj23rXXiuNWfgNbz2BKZAuXghKzz",
  "key29": "2tUqahQqyQuKH9exfYyWKucvmNmWpT1GKTScNuA2KNpnQzE51GQPBnR1x8xZQFyy5zwco777TgTS7q4NryZzsNC4",
  "key30": "5Jdr9VBzneyeXEGe6SMb3eJ9XA7zP4qQvoMjRVBnqM3eJaRAJPkyQ7rJhSs9GvFoYmA6uxCkZWa71ZNyM3oQtNmp",
  "key31": "4uzGZZ9M9D74kanmqmKYTSXStWiezxoWvmUsbMVVY16wevmkM9AHBM9UmmNt9PizpunML9Dwo25JsxUwgyvjXcCn",
  "key32": "2nrN6UaWTJJog7oqAUcmw1wZsaQ7UzV4xinFjouvDMLM6YD4ndJD4Brfp7rwFjjd6P4SG2nyKUoNGuiqosQf4HBu",
  "key33": "2T9Vxh8DRnrn92AxQPjr8o2M51aYLNWMjvsa9CXtBW3htH4NGaYTh73qK8EKASShSAad7x4ASBbj5hJvDyKZAL5K",
  "key34": "36Xc6xWNMoJSzZ8Wwhu43CEJta7qQzprwwFArr6DTxsdkvVj52vA4c4NHKz8f6NRtH6zLehb3n1jwbSuLT664M6m",
  "key35": "4DNUWkkLRkwFYGJekZjpF1Yh6PAuJwUmjGRXS1862eFiKZZxEFTsEbnWcqYDjRceEMuaHZuQjooKJer9bgrtB7Kh",
  "key36": "3yC5q7PWNEHSdXJtax4wKV2w5SaH9XkciscrqBGpnypjuGsx9CfggLKNJubM2NJxcFHUh2QufDNsae12MF6eBpcj",
  "key37": "4zj5GhpyFyy8Ad5N4wSDhrXNvjgSNJDTSYdVq6stptP85iroSy2QNd2GnsXx3EQyS57TMPwNAzeYkxrVNW11v1jB",
  "key38": "5tzxb22QLUPszuMGwUoBTbrqdkaLS54Hk9X7vTgr2GTrtvZK9gEkQE83i8HkQvMU4faMNhcxrx4RcHtysK5PJ2Z7"
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
