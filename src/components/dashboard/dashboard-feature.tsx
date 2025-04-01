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
    "3MrQihggc44RLYBgS17D6wRN2zJBQitocBBGVi2NnHtPczkXXjmUmrpQLeCAasyan1zeKCf4u41iYuHcTqSUsyej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vXy12CTjyu6H78PGdAb157hxGExL6yMyHsyiCB2fZj1QMtcPmazzDFUjpSt9uhVX6o9nc8HCWsN6UtDdQsk78rd",
  "key1": "13MNC7L1Emr2hD2t4q8sthHh7kfBMjx5HFGxEE1x15T6Bb7TZpgKpgPq9sBtZdSbqpEiJDUo4oPMz9PZFzBtJE2",
  "key2": "Ro7gdSnyHswFd6hq5drWWAUY1hMpH6V9Rtcmk7oEe6AZovEZV18MaYK7j4FXCSqLjq4ydwAiGTxDzwEGVT12HFz",
  "key3": "2UrSY9rywRhFntQ8RYScDoFadEPak1YGKSDgiAK1MjBipXGBr3wH9tbVGdb2ZxxnimTz9KGhs5QFXPuqSDNgEjB9",
  "key4": "4vLm4zMMznLquCC1nU7vJBTDyiNRuxMNZqd9Jqz3YKJgLmmfhFg3Ldb4ZR1Auox1q8AfUuzbwmefyCDmLWhQFhcB",
  "key5": "BYg4xQ3hGRkzFhu4X3dgtGTW22t78FWzwpSc8qoiCpkTWwHNsLHjPBBrCYcUUgk9wMnECThdgsoPkGVEue9fkF4",
  "key6": "4fHwqv2RhTT4Zcdftyc1UDhXMKsXJjJygsBDo5piGw6XWVYbFoJKJpUXJ4GdPcAqbgYCWw5cwtJGTRYmfEYcHEZo",
  "key7": "57V1aX9m37r2FPCXJn6wn3WMzWFup15xZzeyCXJ5BZF2YfmqzepmXmwB9Zb2ZUvsiLpUYtWyxZUw9fMzpkaynX7w",
  "key8": "mDcfu1aXijyR11RoJshqmkK34jaq9L2CGHLdDkTmZTL4umeYtkYWZDn68w1RjzPbFyAUsJzubJ5LUsiLjhphUEb",
  "key9": "4gAssJQRQFMUjSSsb27kMZNkn7ykNx2Dr4ykQZLUgT7atSaJELoTym3S3cAwF4pBvBinww1hFnw34uPa5XJ1k6u8",
  "key10": "2fX9MmuGTjv66r8tk3zKPy1DuYAZvi9X2T1keHEXFtZuhJnim712LeJNPuScRfzbrEyJ734DMoMZkhWzJA4PL3Sq",
  "key11": "D1LZiXR2Rj4jK6bRZgQPZoTNUxJDXt6HQqPB74uHss9w84qMcshf3W3Z9pnyua7oNVxA5wAZd8CWcxn6UZcaBAb",
  "key12": "23UNBN4V1DTy63nBg5q9yh3zjXhNRXshncjnkW1n3Qjuh8LL5mVYEWQ24uXY1RJ1P3vX1yWJByfDThkd9kPBwLgB",
  "key13": "2dkmTwWxGYUSM7qtma71UAC4mG9EEaUjRHfPqth56tgBjpDywpMnyPs1ZdUpxi5ZGs3U7MNiUHVwtbJ1Vm2PLTBt",
  "key14": "4PPqS641nzPkaJWaF5VLpCbxCyxNeugmHL4jpC9NMSRAV17vFZAouJFSCQ9m8F1n5obD9giqfkts7vkWrPhAjFNK",
  "key15": "2rbDyXnYymxeCnJC7by4qiBvqKv4x7SLz35FrmTzG43kE1guEfiFYvTPS1WxxZ9LQiTc17hAbFACo6D9hox6vkBX",
  "key16": "2qksj6WotPhD6MP9frsQpcuyAncEdzYrd7BbG7QdvL2ZRejK6ja4TD4TFC39i58V3cDG4oo8QzULCR6NLUN8SdSM",
  "key17": "ggoXfkQc2XbreMcHYVFxCytvQuDZ5U1qqGofBhVp5FFZS3w9U2f3zjCctLF4SwK9YRNnd3jJ1FKii6gFpE7W1Ki",
  "key18": "5yYqGEcHvJKc3yCSieLvu4mLBqNth2qirRdQsnXeMx5k7eL4rxBvh1KxoWGjJtCyCPAmFguhT52q2SrGMSpXu1Nq",
  "key19": "4gbsEYjw2Rv3s4F182h37uFYZQ3yyLCzVYkEXD8ctF8B16FE7abxK4Y9u7buVm9wYmVgAjGVCfqLwxCJsQQwqPE2",
  "key20": "5sur22xZWDZRyRn8E4cG6Y2VkMP6v8C9ENUa69AjW48yCDwh33RReBQnUvHaqZkcnV5ozo3aDqEhWAzGmsab1MVq",
  "key21": "2NocaS6j4gKYCxvLrvLmqCkNuCcJQ3FNW6jeJbAGrdFM37Ab9YGcSNW3mqkJXfNNphW9RoN2JSJt1S4tyvaSwipD",
  "key22": "4adkagNtJy56cam8vMJjXyevBMcvpxW32o5m3KEUFaFAsr4JfmcDmbZa94XJvsZrRxHZCqn5jWpquQG9SjY4zHw3",
  "key23": "4gLGAXe13dJoMLWfXBgtRPZqFMEYw9AVrawwGvxRYoU3JgSq3Ap8H1LhpQTbGTykKCfozvcPoZ56F4v9nhtwJCZk",
  "key24": "2UhPUP6KR38QULR573k7xX5g4DjJy6doKVkDZz5aa3eN6FEmMhSysT2csgm7GuihcM8NddH3PtUsAwngy7F6g8mU",
  "key25": "ziyywt3oG271VzGdypXZYpWtfPFH5DVEwMxnhh7WjptyoBHjrBmBAPeTqGHwNXMuygEeV1NxU6XbcvXyG7FhNC6",
  "key26": "2tWm1NQq6odPMNKbeEmnfhEJfMinDxA77s2LFJqPbsCBfP9YHHkpZostdjWSKDvjwdRATihQHBJ8M4LyhJ4AQAwH",
  "key27": "5Vby9qbwBNgZLVMjAHAV9TBrhggsVX1hsWDs3vqvbxepqWSppYUsPqXAzxQkgcmEwsvfLBDtUK66cGN4E7RyuTde",
  "key28": "5sw2BKM9R4BCd2SLe6mokAqeTk6ZHfrMWoQrnUxT1QaDVLKNnsNjC888CXZ8fHRsz658cnwVNe2n4UVAacb3M99E",
  "key29": "2NTfarjBELQG69xbP6TYN7Le1FyuqGfJgkWM24WhyjtEzZepB1z6nAxbu9V7bwsVt8R1B9Zyzp1LapQyN9M2MDaK",
  "key30": "3obFpg9ntKGXbitSg5DwgUhq5GvsrTxsvubSpEEpwS5XASiZf96oqovLm8Rr5rDuaw6L6R2ZBEmqjb9zxd255Uj9",
  "key31": "j3cENmbcb98PoWRvyuNVpo9AmCoEWPPbNXvGVJ78CdhHt7BBgSSJ1cv1trda86nzv9evy6ALWhuDYojvdAXAtwm",
  "key32": "5cbHwRRNJcAGEFVeGmp1DxrfF7kmftLYEm5QQuYPELhGUi6gmyCDMdYT6HyaqL4f2ndkvmZXz3o9aU4bu9NHKyAs",
  "key33": "5eL1QzHLKAsB14QqbTwX4CgZ56PZHuWHpUEGp7JLJCoE1EujV35FD37oZBozYBahpHsBuuTXKDKnk16cM3G8oKtC",
  "key34": "21wwXgkiX6gZ4qhVbDdpschdeV4h1nyZ5tqyqamitjJgJZ5wCDMDSSTf8jSStHoZDZQqBxR2CzCxrTeaKhDMoueF",
  "key35": "2763i3ptde3fV6n6ubTHtwAcm8vFY3eCb83Wk6kjuLtD7doaG5WRzqBeFJ3Bd3HhC1iWc5LXbZG3U7gF6n5ULhRc",
  "key36": "AxDtp8Ubtr22tFuK7H2UbKgdYfJXDXkQjzMVmf5YfR9VrTXjXHgwwp7yaAnLaiTqQ38C55EjMnQWpPAjBHZbHFu",
  "key37": "2e1ovoqWVNk3JzYiYmCzvu29f4YT66up5FPCon2q11qMxvbZQCJBumWfSRrFXEqgv5R6C7jV5gLbEbL7Z3veeNpg",
  "key38": "4nN8bNHQW23AVHTSiD6Dnuo5G8vxDcFrQxFQALWbUsqDtpi6KYibPGRGFZ9KftzEJoioQH12YcuZDAqzuGit8a6d",
  "key39": "CffYcNMta8rvynTCsKVTeZ7JRHAt5VBrr7JgyFuvV99ifcMmqS4snBDgK1npw7HDgXZrGNip6nfuMNnGMzAgxwv",
  "key40": "5swJdXYNJzipaenuxqT1AD4DKidVqXfF4kDk8xzRCJyQj5DrpBnaDcPAwk9LwsrSbjq6vYphsWYQ2hFe1dLapgXv",
  "key41": "4Xh6RAwocctT2dhHMpTyc4HrrUSG4DmPB6TzeHXqqFutWvd7Xfaridquw4Ev6aEFrMhhMn1bKzKtMywaNEGFG5Tz",
  "key42": "2FiwfLbkugUMUi4qYJPpzV7sFDuB3tgDCT34sWHq9TRzNg9PHWminTGW3SxwfjDHdnSr6TFrBjRXxTKjdEybmmHD",
  "key43": "2wZVteubrVGoqU5JFywoQV1cb6GMk3vTgwYwmrTJPDkMCi2Ub3t7dZKkMixSmJA5ixRsFgkSdFqHuoPjXb3msZa1",
  "key44": "2WL6Vwwk6rtXhEh3Eh2EUhNS4E5NXD1GwacEodVx9THXoWuRLRfNvoqmHRrx8PQJbev9CmisVGngpBTJnYU9eHeN",
  "key45": "4ADGpcwmHYFqapRDA3sSNZ8ayT3bftAJyqzqnUzPKVdkoZ3PWNhZBDY6zaWsaVkYNgetRRbzAC7L8eqFusaU8baR"
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
