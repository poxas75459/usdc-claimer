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
    "2tUb1URKih7reSGt6tiRGiHj9mAEL56RqGCdWqAr8iWUYwZSgr8eDw9vkWSkQ48vmyrcPDRoR2U3Qj1qX8v3QERD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GR7FsftMYTbtEmLb7xKCoegsGmNAPda7s9xd8eVAbAL8y7Am8aj8KmHzhJZXfQDm8K9YENW19EUmbvQqjLSR4bx",
  "key1": "dELxGzXh2TDFg9qUR2CHHHHQmKGBEsqQ3ggwiK6sbPxxzxPWXRLGDdPzdepDzjZENDoBy1Y1yp9BUMkt4UdgpZY",
  "key2": "2UmTMrWxPuffiNnewHsyaR6YzbeTp5ecUzadDFjVJEMmQFVHSew281ssSYo9txV9xHNiSdoiXmoCCfFNj9nHvFAc",
  "key3": "BxE4uPtAHqhuQZEQgw3vygtqN7jYFNehxFDfq7p4PjmDaG5tEqqKpMZdzZAG7HzP3ab23HxZHsHUFLFz9MjVbPt",
  "key4": "54TTsssLSTYivoGFvB4WEPNwf9qyRBikUkazptNUobjW5wotmHkjArhpxyce5zioR1Cdhvyb2QCffKH6Lphw1CmY",
  "key5": "2auPxCQHBdUhMFuQVfMTGuGXbus1MttMKZ8ot6m2dUwnc2X59GPRqUGsZH6hfkQUdciyrsqisoYy4PF5uUXtVswA",
  "key6": "4y2A1ezUFpxsCw7KAyRrAVBXwtAvfrcUDByBoiP7CGnV24xj4X1CisZMk6Brog6nWzC98Re7q2PAM8yD7EPhoguH",
  "key7": "2ggWmEWY1K8uMKkcfMkBJaUcGptE8tWJdEiuFur4vMrvSCUmyzEGDoU457KWTxdg7mn8JiNLZHRiUo9FSMe6yQrC",
  "key8": "ZQjyvdaMaGNzmau6VwpGh3ntBUJM3xv4CoyUH14dmzb1CyL9VsQQbUXG9pyYzN6NeWCT3apvj7q24Y8QcSFwy6P",
  "key9": "5aMiKQqSZNedcGLjnPGAK7KevTk3cyFNpoSZ31P1FxLXrKHYL9fhn5E3ZqwH285t5JhUFatysupmhnAd7AcuVXQu",
  "key10": "3Tsy6dqaDa7EWP7wjry6rAZUUAa4jj62vtUrdoxXPHWErZ26LYup7WaqhidmG2bajUafeKmhMYqTYUBCxTaxFzwB",
  "key11": "5isdngdUbhWdkoLjbzGpuHJW5xF8W7YagJpSenoydwXbaUkdrmWudPcRMGcwcbRvj7jQk9nyq7yRDsYW6itVXYNP",
  "key12": "jKGqALNQaej2qYaxzxVZThM1CsTUTFfHxJBAm1VRrDpu2gT3FFfTN6MhWQRAt7Nz79qJHQRLd2UVnscs8eg7637",
  "key13": "3M7h6bEU7MU3mVqNrr8peVJPLWKNW8D23UQw3GsWBbpZibw1jMUfp4hdFtniB5ErJnAE7dNnjdVV4uJBzhRU8cN7",
  "key14": "22yX6gpq3cHupEsWd886JPWArVVzHdv6UFkeaCYpGfFLzJo53n3o9Ant2sKFDpKNivEQWsenmvweBwGH8ZqM31po",
  "key15": "4V86u9bHvyXAMQFEb6qLQJbWzAUSfWP2UpbwVZYWxkkGx459fjpnFNkTUfyutnGGvC7hL5y9zrU2fF7RnN9PbQ9u",
  "key16": "4AjZewUPFrE7sANBC2fzt1sxreWPjiGEsfGJHqqMYksXgUBNNSLWFfm5PBjb9muoLLoY5QQYdW5jaJ6vLyetWb97",
  "key17": "4mF4tYKzdsb9o5dbaQbLnREWCRwJ3WKZd8zZZY6UkKAu2nAUfanjAuTzMNXzG4fpTEZGrF6WurnA4gnZoSKvhfPY",
  "key18": "gZ2JMABPYBMRdkHuaUpShnBKDraCYk7oMHLXWwyDgCcxinmaj4DrQZgP2TuZXKWgscgHNZgnH8sKns1Dn6VZBS8",
  "key19": "5Qu9craia3XWr1NiYkLrWXk4GP8SuJYYqfYGFcb72JdhrnHak7CDzHwF4XgdLQod7XXVMwqqQ4KSHKB33Fbbb719",
  "key20": "2dUQggWrdeCwcYtEBkuvxNsjGbJcSCXnbLTsSZTYcVJGwE6cSAvj6Xi6MKjZrZXykwzp7AriFn7fvCBi8tQEs9St",
  "key21": "5wyu76kknWhpQXd46drYhp3bqvFVFncEQJdKRmeYTr7TVzd8LRzh9ggL9wm6uLJa52Tr52L9Zjnq2t18L8KP4VQn",
  "key22": "3sMaVwY3NjmdHyewvjc4L67TgFu2YqtWfKnNYrkCH3EpVwMmbMLdqVxmQkoTC6DcggYYc7wLr4sszVyvkLuUYfA4",
  "key23": "3zftr3QErHWiBSxUhoJaBF3rXs5CFuTQgk8qLGyGHA289Ub6eTFrpeAW5sHTQJQYtXiJ5hts32hRtv6snPDFrxUp",
  "key24": "5TY8BK3SR1KqvzTc9NrrKyNcbCRV5q1n6mt61FAWYGwwLfh7Wyei42s19KmaVJ4LRHKaQoQ1qBs8rpQ7Z3Bn11d4",
  "key25": "3XtZYdDAnXRJ2AHNuYHAEqVDoRVjU5Hr7BWx1CCnXAgCqaXXL8mYwbMfHDX8uLVdniCDEK2DcPZJcwq6XvxZcWWn",
  "key26": "3DE3DR1EVRp4rWrw6vbfSbLFwyvWJ1kDDaSntEGYzPUM44RiQrbGC2uKM7VrKhcaXSe7QpZ6PSqVg3PwPbjU51HK",
  "key27": "2jEksVHeaHoWZao5hBH9jCCBRzwdA2jUAWyUVuP3bCqETSSNvo4FPois5N7E1WDHh4sC4fFNYBjMYoKaJTAPkeKV",
  "key28": "288L64VRpZAZpodmdE4gQ1JEH4mZr8GLdyPpLpRdRiDDwPxCoQppF7TrTRvqajBhLk1S7mpqwdFJKeYAZjcy8K4U",
  "key29": "2WTfHutv75LKrke4v5SB5V8inTkmmxrqQkthAjwdruSPCe65d5BeKWktyqQTbaGyrKALTZ6xoRvYFFr2yc4d5Qfa",
  "key30": "4UxxkVKg4fK7GzytNsCYzVdUDsd6SoU3x6ydjHsWZrzVBtBfZdSpubAzmA1FFpPs9cNtbk2AKSTUd2LiBtAHbrjr",
  "key31": "2fH1cm72qp5cKAdk7uJzVyVG7ma6eATrJKNnF7yZekSqkqb24f52pRU1peNuKEsvdZcqKkhVc4YdTxSr8VNVCVDN",
  "key32": "2sY1JmGkmQLGHoJtmXVzW5x9WbYVZuPe5kHnJaZebcSeYnBgCwLA924BWs2tnxRobawumqJZnvo1REmAzk4KMfEi",
  "key33": "W6i3vqiRi3XUrndBMyH9cUPsKNcu9XE7NomdqSnexBE3ZUEofdgcjFLEyoX8PyT3QPiQEMVjsPSLWeXzZS3EE6P",
  "key34": "3aVmZw7s6gn7CNRaRGQDozktf8PAgkULyhSRZQsATpDuHqb9UwkprPQASWggeeHXRKuwgb6E7ZiZydfehAZHjJa8",
  "key35": "3GJMpCMPBj2Tejz2u1VwW8J2NJ4QZFGGj7BXd4VGfkygGB5k8a5SDSgxFfakAwucBdu7Ev68PJKbdcnsfgkhTSR4",
  "key36": "3eQcmTzZKqKVwedLVtiiJ2r6JaP3QD6idW4YJdWt9x4zwu2Nk4vWyWCzcJkLTy4dqbJ6Ys52EkoLYuLvzKqu1Bjo",
  "key37": "2qtc73Rf6W6kEpqeeqMREwKEmEdSZYavBTo1sfpq5nYQqLYppMyfwGkX4dzDP2UwzonJn7Fe9m8LQiy7DhkM91E5",
  "key38": "jryuUJAxNgnP5XbMfsqsi9jXQauN3dBK5zM1S6b8dpHsnopgDC5b7zeQgV15VYMCw4B7yYYCf6rmTsTzKzZs3c6",
  "key39": "mc1YrH7RzgXiccsxbpm1cGETxzYBqe3KkGaH3RZNAaCy1skzaemn7YonWEJwHyU81qromgZzHFyt7gQbhZamXyr"
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
