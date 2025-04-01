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
    "5nL7JdHKZ5VkBwfGxftzWqknTWXy8t6sxREArfR82tZz3pYNEb6HJgQAfzDyQyySEnVu4YTcxdiy4kvBWVM3NASa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vkPyoCRdcHT3ZkpzZCaYkqiv1Hvwah3GTjdwmAZyWik8dg2EZ2oLD9iTJHwcjD9K7AUBTcWR5MHVnZMeiGu6azp",
  "key1": "2UNxckpUB4eXFntcMMoBa4WdvGn5yqWzwznNwvukdfc3nEJgk8diiGtE5GULNaNnJgayaycN5aCiz9NGEBDjkRpG",
  "key2": "4kvrscnjwj9mQ3mBKqrm3YhK7naRgfTrtccdKGt262AU8iQVdNGw4gL9MWq67B5tu1wDiNfAZrS2ko7oDW8AgE7x",
  "key3": "3KmtWxsv8gku3jWME4vFosv7zXE7Kb4osv6EckYB61oySLAf1gSGPgjtEB1G5reGVdZsZJMErUDjEmmQiFtQDJNG",
  "key4": "3g6Es7G2JwUj3Do7DdeFy2UTsuRQPbQiGdbK8h9vSm8ZJZ8TcqJzecFMrSyV7LCPhH3779TFpTFXu69cXJuq8hae",
  "key5": "36nB5qDBQeWCkuPuuptmcc1chvRLsLbCbz5Sw7CcEQWM2PzWWYmsvnqwu1dErqbs9FUDfWpJKKriTJxpwsfspbWj",
  "key6": "2fg3vExzfQDog5HXyticXWEguEDqpciQpcLFghjEZMRBziX7oHo6pCh8awrbUXBZu2zykNnnAb8d3mGWu4KE4CQr",
  "key7": "5a9MJfPxUuoAXaqkPZTNYVHN7Bwxo4CQX5r1Qk4GqGZaejX93HDa9bRxyputikBq8yuFyg8qsJYcurXhRDv7pkWb",
  "key8": "MvpScvUm8v8gjbsDeiUHAbN6djfi4SoVFJq8UqvnnjhZgdBQr5wLj4BsywHy1w47uqReWAJvnPUVh8jFhYrZti8",
  "key9": "2xdpccHiKpxU29G1Bg4KLNj2dLAYpuHpBmKyiZnz3L859fexWXEWwNUV8dpDMYY9hxPFoBPNAyd9HwophcaxchUG",
  "key10": "3w5M4jHCj8hW9DEhPJsmSxrWCcfTHDrb4dG7ofMwj1RZmKWSkfL7QLUQGwSa8xigYdvkN9UE25RfNzPdTQgZhE41",
  "key11": "5JeWvwG6xmkmSqnf5FyvpzTLZiHtc9JFjx3SdVtgR5UVmkVxkQC7o69xaDmfHusydxefqG1i6ZevXsuaKjsR3rwW",
  "key12": "5t6TfnPkn5iZmRGEJoqzqKrtzxXmhp72HhLzs1cyWX5Kds9WHFyV9Z9h3gfnueHHhY64BHLdj79Yfid8MQGwmGFD",
  "key13": "4sFLTWXp27jxBJrMb3r62bALi6A6FxPG7LE2WpgRrYqJov5KuiAqVg4TgQEJ5tKxMN22g4dHUUjAfTs6fSJ66cQn",
  "key14": "2hChVv7jhMzRjyvBcmg5Ay7LuFD87NCAChEq6i23ZtAgFTAdDKWsAzhoRWXaioSxMq9rgnGxoWuoa4WtKaBnwhSy",
  "key15": "5P3LyF2tYnNtLSwpPidLrRwXVaBDXW1aY81CLDrVBTaeTQRWfp3RYN2hMRxHuRBq29fNHXXoJnzgpcaJJuYYCKjM",
  "key16": "5Q7QdsJSa4U6t2nS489ZAnkdD6TggSkjmxuJGoX2X3Ag1i9etjuZzkZN9a3cz5AVg5FNaTnrRJad2jcXEThV7x5W",
  "key17": "48ykPr83LgkPmHX4QrdG545wfdRnCKVfS3aNRhQ8jpAm81ZYD5ZiB8YJB9TnN6w2iS2XWaKNsdHu9xSm7djSTec9",
  "key18": "62n796FvuTMsu7bQ1BjamHBDfgfb2Z9f9C3SwLpWXHNtrp6WSdgbAV7FcrMMFP5v6BzHJoT8FVMMsrqbvC8Xedn2",
  "key19": "437bGU3n785d13rcQpR8aFP1WtU3DX8hQsiRX9fCgFSMfRtphtBZrVfVkBZwRgwEgUyQQ1HTR6epJatZRxhYJm7e",
  "key20": "KMx3gmmD2PoP1i62a4i6fyuZ9uZ2f5wqgCWYRsKdxBhFy2u1kf91JbCAsBmB8kyvPYLs5Zv5UzJuEvk9mJ3WjPk",
  "key21": "4W9KYJ2avzhGHmejjNYsMmC9PXCuxoU8bgFcdHz8wYq9GHEzWZa9QZWebaM73wuMbgHmEesEzwJ6ntcGXBBjim15",
  "key22": "3LTHS5mLBwuLpCokNxeWR7AszqkFzq3JnueqdQdHCsPMfq29twXyK2VbxnEfD74bWgQ1KHmE1WyTfoWEBvG2mg2z",
  "key23": "3J8QuAzKrxtWGPNcvYS7jze5SbB6gzhtmTWYtmSnVDmd5a9w6dU4r8M2bbYWrVisLhF6GZAmFuNBa2hdk7DeeM2D",
  "key24": "5Kvq4H5yCSsjDyjDe2U3DEp22AdEow9pYxTzGcJwsgZKoJ8FMghFUW8SWPM65GNJQjvN9FKvvCmaRzgMjwXGABM8",
  "key25": "4QK9PjxqJxinqsQj3fFz4n4bH3gy7k6Yo8wwZdFLsppjuTcBFShk9qemAMw8odkuTRoBv7ZLHycEqh9tLq4DVj4A",
  "key26": "4f5iZiNWhjioLxVMhcBBekvTpd3prAHQ4KfCMvNmY9ij6qoe5XPB8T9iwd3zxgVzGJyPbinkoKYv4KGEnzcPacoh",
  "key27": "3MYPxXUbfaA5VN1XW8Qz7sHxBiZbWXuxN9khTP2RRS1Qgeq64JiSCZJbu6MPJskury8sHDWX6TjUuprrczjLvrAJ",
  "key28": "2GqSXNCjcANUvvGJXjnp8XxNMFcqSaGJ8fnYcPnfcjXhm91y1EKbn1TLaTZHeftDFVpKujLjVb89xnBmE9Nn35X8",
  "key29": "5dgCAnu6VRnjomgSHCJeLpu5ERgmCy2CSCw9JZLLAaPUHbmpCf4uvGJiBcUW6URVmie7gZUS3tCpPy6YZhBk1mDY",
  "key30": "5qYYwY1rYbT4yzyWM3rrrZjwJtBtEmUd9fcvEiMM4zAv8SjRMpjBrqPJ9c38pFZpniwVjVRZ454ZwFQUNCUBioVY",
  "key31": "5Di9RBSgvB4jtJW32eY7ZhuKXspFdBM7ic5L2vQFm5gay3ouny1B5iqxkvCuaWZKif4SDh6A7kn6xqkYtEAsSYYR",
  "key32": "SSmdkMQ1Y7Je9349BGLqEK7hvX5agjs71kUJhZcBMUU2Z2Td73Do1dfteZQrmkrHrZJByWw2YCQi9S2sVbXnXyM",
  "key33": "3zsBv6KLxgmh8Etr4h1Sr1oEZahDM82TcTW93QqTRkwRwZDvUEbgC88s4chx6iAZctYxG9fh3eWrJKu9HJEiAFu1",
  "key34": "5smpLrCjzhqgR3Cb6QZXcFNBSRy4XFgNLHQB7zGxMduGN6kbmcR49YvXKHkWLKFCX5chakjFtduWkhnHJFWARgXg",
  "key35": "4c9XPHJojRoqLwj2GGSV1txPKesTDEPAokWhVe1XH3dL9FipR4Ky9CvrW5qLqP2cBia8RwahZ3F1GXYZNDP1qfFM",
  "key36": "4zjbVVBwMJ3pLYuwAEZRPoVeYt8qRZzttvNh5zwdM7SPq1tKUAGsibDhiW6S8292JNhCFNFGabcG6AFuWpDTMKAf",
  "key37": "2iCaYyZMHrjTzY4Avck6adpctPW2rxY3Kkq8FFZFG5E32x1bZcM5onZjcLRFr4ohMe23YSF9Usb2HrL8vmKnMX4d",
  "key38": "4Chkky2FWwD5j9VPitUy9ayMvYTJSFcr1pT79NWXBa529Be8D2Vbc1An3hkxsCQ2JaB9prWEqjbtXVmpDdWM7A8u"
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
