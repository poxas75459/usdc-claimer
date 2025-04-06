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
    "mqV4vEhECCXmpDk4LnjD34pPPR3SCSxTPsazb32CYnLfCUBgizGpeETY3SgJLf4QfP1kMNua3cxue16ksLJdcwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j7RnF4po67C91H3yREFcTKLbDxuTExY9eo5RFER3y3eNky4jpHzTX8bvHaHUF6sFBHXj6kc11Xm5g9ZaEiRWYKn",
  "key1": "2M8jekG92M8sjkzPuX6LAt1ox5iUf6k6YabVzYRiRcoVfxjcSQ5LfQZ1XqQi5poMahCgb5j9Qc9A4WjxF8wjFsdv",
  "key2": "4CyZDYns7Gg1pUfhWG3xEuWtqvx4xKtXDnMA9z92NL6MkgobLTFoDLacBeaNHHLNQcCRvH9CzYQiDLTsPmpgHd1b",
  "key3": "4vMdtMTz4xXMqFGsEaKUfYaES6ByvWK7wVvsCrKBb34f5ktZvmW8Y9fWxFfRnucgX7RVLkU1isgxdH6PwghdqN2S",
  "key4": "5jMYioofxRJybTGu9TRuNjBPFDgCxZA3Q2b1jYoxLvCDEzCGKmdKZc3ZvPoPrkX6hxdbUoeYAm61bcQBfv8HuozC",
  "key5": "5U9vQi843oPWErP26Z9xRGHeNUAaprUac1yTneHuZASPY8acjjuNQrtUynkswAij9TK12ftHghDhd5BhkxVhQ3Vt",
  "key6": "4H4mqTJRADq6p5Mq3ifrrc2FLa3J7huYffq8xZibQw2mVmsyigkzxxBQTpKBB6MvXRud1UwuRcGzgZH3d8DeJEQ2",
  "key7": "43Tv88wesXZruR77WpiLLkq9wkBRbgBLUgBb28GgwQ4h61cU7eX51gAxyZd95s39UhW47pa6G3pJc4vCJ1bB3x1o",
  "key8": "r5foFHhc5oYb6jJyPiMXUSPeSog2EbmCkV7LS9et1DbWEyfXJZiXBMnhjZJTJ6FLHa8PF3bydbPdpLWdQKw6Lsy",
  "key9": "4dtv8XsXfaET3iGebrmwac8WKFCxWjbUErPQuwAGKRAXh96zvB59iddvDvXmimz19ZgW7PLwnKNWSnRo4nopfDbE",
  "key10": "yboEgFTx9NMuQzvgq23PvzHnHdC9ayUrPWKcJMZbcbc87Zsy8zwXwmXckfBQ2sEu8pcfiaDSD5sjkKAWM5qbgjH",
  "key11": "4YdSHV3mMw8qGZ82998ovdEeWNzaZiyaMgtP9yQwE16gmvEfvjFDcoouN7F5551xoACv6CjdPfvUA2gaNiyV6W35",
  "key12": "4L4iVYAZAFhFbV5UgxbhtyNYkARtu8kNcCmdrdsZ8rxKPCAADrSLzRWYuJsp2N8pxxphACJ25azvEw3QUHqUncRB",
  "key13": "2ff1B1BfuBAusA585kMGWXuccFjojBCVydhNuHPGVgcMFTZfJQkAARYkeVsJ1Vzu2NjcfiqEUK6fRnoHMuG7wX6a",
  "key14": "2JzLmuCeCzGKoXGapA3hundSwzM4YupeiBRpn3mx1JeQFd8wVkEyRUgi3kpS6bquoiKU551V4rCbMAf1sVrhjGWY",
  "key15": "4VUnFdcaYg7zZyUbnDq5edRxNWyohWn1aPYHxYANUsezmUxvCUBKjTUQEvqHPjDM5BUZ5GnXiy5oLiJ4VVcj6oJn",
  "key16": "42fkW7FTxouZeuKc1uqwsRkBfwFya5sdMeRLVfmVJLyXbTKSARRG7XvoBwFctYBXSxf6K41jnVFFWmfrAAzdk4mG",
  "key17": "5rLCxEiBA82BFrvU1vkhzBQQjJTrXUrfWq1Gaa2FxBGRmTDJ6gisGGfZBACuJrfrhCAudq7zjQnJr6gyFEaHuMqE",
  "key18": "2ksDbeaKgf6ioDXiFhsaBNT85YGeYg812Qr26AqeUtjuai4sLS1wCo49LsocFFXniFeFguBBkjEbpijFNE9iA8D2",
  "key19": "32mHuiZWUr5C4KHmNtmzxkYU52APGJ2gZArLSyHADjLvxWnRKmgNLi5BU3oy4X66SdcqM6ASjc84ZsZoB2d1afm9",
  "key20": "2PrVxqbmxGZAMrSb2cVEvBtxoeZ2dddE42aztp1dMdpdn422vpkPmFNcZ2WDJ1UH2AJPLXhykSgJHvtZAeSFhATG",
  "key21": "3ppVQe3ZEnCu12mzZYqPSWsA9xtUQeq1HLJQbgX7XtP6VdqoXSS53hbRb9ohmHAMXCfJNVntrTmZbdemGqo72UKe",
  "key22": "4od62VAyg6dMtXD3boyk5GWSBmJ7wvm5sGiuuuT4yWq3Ra7Ptw8XF9vY5YLegpDs7p2JdqqRswoW21kxtsAehXYr",
  "key23": "5M8xm39tYLHNqE9QhUr769JB6UbymksPkbPbDE6hubonCoQW26KhNQ2UNBPzfrngoMvZSWJpGRUSGPbdU5NteBGz",
  "key24": "3cZdzHLA1GFpREGdf7A93MrfHUYmZznesi5DZ9jzpUt18regZZwEuNaNyQf4VEUZDgt6GGPxsfhnhRUwtxwNiy51",
  "key25": "2XegWEQFZcvLvZMR9PRacnLDR1VsgC9QXNMdLhyKMnZWAoeNqDk15K5hex4ZRU9bmbN1j1oLfuJMxBWMLx2iYBnV",
  "key26": "tbrQw5zyX6mFgkVf3RbDWmiMKW1bCs1B75reNV2xzDrbztMpuRV4rpXUckEXcv1WDE5gzvtTBaMkx7vomkqERyX",
  "key27": "3nM43hnWzcfPKBohBVzspBCLFShB4zZ7evzc91UKvP4WJBhUfHCcxbNipAWSW916VrjEcf3ikdwHQqJZhvVd2dq9",
  "key28": "4AR7PnEnKH31L5TK9bX2U9pxdM7i7TQwtY5zM3Sxai62rQYxzzg5MoBCw18PxQacbZnehVyuzR7YnyjXuGBfuyKt",
  "key29": "34E9B4r2EHobAyRzKuQGauiCUPY2b1bapnTuZZ2c9zCWg47MdegCEZkHi7GtWVHtRh2X83kZk4YUcoF6b8hSesmL",
  "key30": "TKofgFA6Y35thDjyBq7tQgYytobHEfYe4jLvdYg72K1mnjCae2hf2L7D2w7KGQQdo91LVvBGJRUdGKSX78mB16b",
  "key31": "2UHpGWrwz9LSVyaiFu5n9riqqHtL82VtprcQ2UtN6jDtRxanjY7HKd2uEgMhJnbhDNUfsMUxD2rVmcLjRSwuHNeU",
  "key32": "3W2oQKgDFYBkMP7RjSsZ4mwof2L7pS788RAaU6t3h2cg6wTUjPpdoHFdWaMk2KJhmTyqWsAo24UGMZMmRFWHuhoh",
  "key33": "3U6zaPUHRZuvyP1UmmNBmkcwQU3EV5TuBP3RKRoG6hXctBoXA42jAGHURJGDHqGudZvuak8rKoQzEv7phHNkkDWC",
  "key34": "2GFTPJDbDthb8T4Yi9fAUN45ckymSfeUtcks5acvfYp2HC6RCLb7DuXAoWhCAsA4KSiokw11iwBSypQA2R8tLk8",
  "key35": "4ajWHGVDsSzZpdjxtwkMHCtQnUojJX6etJL6Nrz385KqornLdNsCWG4aFnkfuFpzetkivreSLmQEzUSNH7QwzX8a",
  "key36": "35xLT5d7MFuxT87XMD444s8hHDXsXV8CAP9qnUfBYDGEPoReggnLZ97g8CwMLbT5Wk1E2LNbcu3MpzFfkVmpBPgA",
  "key37": "CooQCGV6c9cxBFrKPdqRTMg7eLwXPDGJpN1dbggJqcHJqMpPTVgY9S9cYrsWXMkefFSDkdZCw3ava6FfgdGomtF",
  "key38": "3pdLM4MMpeYfpYofqjci6oRT7J7ZNXUvZ41V2Ngwk448WXpycWia93AnKwSeywpqSkCXy3RwqC1usgavEhLSQcXg"
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
