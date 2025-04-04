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
    "2x43gtPd2dvrSLyXJgf2CDsBRzD7UBAd3UN2UxyDSQzwFsDsFkdobdgo1uNetMzGFbpAWsTpLCZSCSPriViex6ZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FFLck4LFR1HpuSuwBBp8M1KXbe8tTzxnvrPtrgvjCtBMVKspHoK3SaGtdry3y53gaP4UFyNp3quPrwfk2y82WDY",
  "key1": "Y24unmPtyUgBQCZi4AGDiFNgpjPWZVd1TyEys7Pm5Xu7LQmQz6n6gBKSEt2FCSdvmnLh2xebwNtTWAPaaJ2Fc2t",
  "key2": "3xSD2yGnYAN3hbdLWjfX121xVQU2UL8phZA4hfBWZ4RULs9E8rb4VX8HxNZ92FCef77wCB4ea5bnYfCLjGDtKvUJ",
  "key3": "6ppXcibKgXUYJzr8gGJPh8qQCV4mQYNjBrJSV9j9mioXRX2KqtGqKzPgwH528NdCTAiJnLE3Hk4GLt3dz3PS9VW",
  "key4": "4Z4mYUP3msKXQRPLxeXVa7KpRWyi9EXXxWP8kwtcAgbft326ynscCmkAoT8FquSAPWhgYq1BAw8RVzjTNrRqZdA3",
  "key5": "eBgkR3T5qnGkQ5Y9AsJ9XjXXt2r2b7h9mmM2eqqvvPdhXwh8q4kPiNC78rEGn3axXZvEwEpSddMoiCknvhh1td2",
  "key6": "4sSMENbyujyf6DK4ucXckLrhQEJ6Yc2ZvLVNqGd9WR6C91zF9LNWez86Prf7BtLXBiLxFLruPuGMFjJ1bb21pQQh",
  "key7": "2SdQhsCanzki3UPdVmzJsDdvTb8TQuwGxk6E583Yn8eGnq4UJWVi9VVbECWensQE3vZ9iRsF2Lbq8D11dntKjhFf",
  "key8": "5DHNcCZYkxtaGHKXUAaLJBKGHPurymBNFCjB3otGyZYGN296kcwWcaqks9K8WJMACnmUNMspCE2uZ2T8dXYA5Rkf",
  "key9": "2nznjhLRxq7hGJ97z2xVkyzpE1ZZmFdDGyNaJBQ2TSyNbHqA5U7WEC78Z2u3ujboyms8jMvApUJw4wLdEPNpToGg",
  "key10": "3TWaoihRmUmXYwb6UkThrE9AQWyz4ZzVCR6RMRH3RYzFkPrFxT6tXo4xjr6qeXSwrRtcZ6imtKQYkpFwWianUjod",
  "key11": "4Wn7zVC5Xp2S9ywcrqRBQ3vwkjSAyq58V7iE1MD83AK8cGVk8s1b24ubEVDqA8HQ13tkDCtdNEThqLZ1veVttnhW",
  "key12": "5oaAgfESpwGEtZ8fXniFFbYQusxk91VQEcXmk1gaQ5EVyN6QRnUFYQcdV9HczPRxQTKaXXUSgw6feRW9Zmn6PFCe",
  "key13": "MRD78jMkyt7k1VhvNxkD1LVresqVfcSMhF3FjnsdER3bKzpJhgYTaRhZFptudpRMaY5n3QZ4jnZ79HRTnN76tzm",
  "key14": "5PEUHF3qnUTWAba5SKWF5KKa69a3AHQVRpdYAYZ4Kz4a6paFPbQ8Kp238zsAAedeBQ82EXwxEx4ezqXoKQqijiER",
  "key15": "3B5jxR6RxArfuxyhfX9hPqLpERwbcdKn8tWcYrtb4iQ8eBNFeok6xqdMJBixDDfZQcugGbmLuhhmKvJfXwpHSdZY",
  "key16": "6wKS92fNZpjp4mihAVHutc4jc2dQtAy3zGF8GsZg9c58w6NwoKqG9aTpqakfvtxd4HefVPTHKqjRv8EmvZyetsC",
  "key17": "35RGYQ3gyZp4kJxZhYTfpqEMgKMA8zf68Acj9j9Gn5VgAQmTFDVpEu8L3U9PVguLdWyN49gXipHp4DugtX2DkKF",
  "key18": "2B9SorMynBN6iJFxQeRqnn9neB6zWwyJeZ8hPsvqBs8zyj6SCnNqVWchEvfQnevm6xWgmnkVbzQEjCco1inLg3KZ",
  "key19": "5v8uSwD2E4bAefWKrSCMK6dj1zfwUYpZyHMSuV76T1etu4Hs6nTPyGfv8GM3oAr2wrtYHxJChvCbp1K13XMFDS39",
  "key20": "2gwxq6tz3mdq5itAPhg3Hx5D1wKjXUD4nz9ySXfwgvKscGZZizq1s7YWyQMLjGDauLw8SBRjiZJxJZjmrEEicMz1",
  "key21": "3uSsNaPfcLExAj4TXQBFAeAX58v1hbsBsqM9f52aDQ6QbzhNSzuqTaXov3MDjcTWXVAz12ckDp7VfmowYgFWUX24",
  "key22": "3u9EdGzbedNmp6uWasuxDNmMZgyegPvbS2uVD2W7uTWBfUR1jWatfsjTixmfbbW1z5TmtwC8fppB3enSByPSiAwY",
  "key23": "292fxtLKiXUFfCVgMCVQx4G1AuxDRW2VDd4duBA7LWhjJxYhopJtFj9HhVVuA4VXhLiin7VPEh9Nn4jLAGa7HmkC",
  "key24": "5WpjT4eM1tewC7svpDyrtvu1TJLuvK8KvBDU2bmb7ZWCzrkBXKcVn55bcdcQLB2rtj5SsLd2qjzaV9Fh1jSTCMVg",
  "key25": "2ZpDJGGkgJAPNmDsderfLQt2BHVKiv2GdkE1eCVjCeotWkhLkAcm99MexTWVVwR2N9rmcdFJo7Uzwp1FFAZ3gQRi",
  "key26": "SoXGkxYz3EiXkJahA2b6i9yav21hsVy32yiWE9HgQPKteDyUrGbZ539MT1uwWDkCytqtcnbkeWSjBa9JB8SRxnT",
  "key27": "4gnDZDrkZSrVxGaQ92v7wx6Y7c8vTTcdHvWu8ePG1akdsw6pTpiKcLTFnEeqGdyHqdU5xRGorLQCqZnSvUZz8owg",
  "key28": "4rbkqiJ7Fotoq78cuKAZLZ7CDB5qme7VDKtk4rGJ5kt9sGudpztCVciLvGsYS3xXcPDTTs8FYkDMDCXZryKdFT8y",
  "key29": "5x1XcjYXijKUoYCG87HeNDrhnDZYaM4tpUqrpMBLEVq68MFMvAakc9aMZsd98wFe5syVHKXVTQ7o6QARdEWPeNH5",
  "key30": "2MmMTr2wRBQqzoUbhgsju46fg6as3Nzumot3KpMY5aV8yubv5pHwn9hJXmxqzeREyXzkhb1Cc4GCaS1ceZeKNuVG",
  "key31": "3EkLtJUyMqwHXnuU8fQVBUrmhZ6f28jPYAuWmqnykHFo8rfR13wiiGwCqEXM5e3XfhaCssx3bvzo5zC43SKiZJsc",
  "key32": "4rZu9bivwJML6LiKQ8yYZ4mnmMDd9aD8DGL7YEftDBwExG2vyWqq7cxWujrojmXgC2p2vpyEAviisJ3GU962qY9K",
  "key33": "4Fy8iHZ3aSmV68obMgRnsxyj1zWypGyjZPkuZsp7G7Cfb7X6qY1pzryoRMZEvp9FbtRH4TVW3RMvw3kKv4AxjECk",
  "key34": "3PjpxGm6dbaHRCayFnZh78wLZgkCrpraEN9qmxhCikxLkoYSqwyBPTCH5TfMzvZ3JBiPGv9D1U82BuFAoqrHqnMZ",
  "key35": "4TRdbcvMk1svQRPTx7B1CdfqVamxKCPawt5mHJr6VNRVWcFRfr4ZxDaCJwfEJqJdko15bNsLR64EZZaW2KbnzP9M",
  "key36": "2yH9MkbPvQbHMeyQaqg3NNLRkJsoYEjWqT2bg8qMgzAx2WW2zcQF6P9CTfwwoEcHnR5o53VucG9Bc5dkj2p3MxRU",
  "key37": "5ZqqMQjfeQSjRi2zP2vVnb1EsXzQXmCrYbDArUAD1pPDPHCNQhFR4uKrvFmKqbUnPz25C4BjLFSELJfzEds9bwXC",
  "key38": "2s6t7kH2byJ5vvjpQoFdFSjmmmkcLxVkQHPotAFXzwpEMQPvykpgb3UNeMhDsAGADHWt6Hon4gqjndP6FAUSHGTG",
  "key39": "4G3okntoXzM41s65TjeWND1nXKaMnGduE9kcN1jTnGsZ13WVDBZDAv6CgyXcqXSGzwZmZ5oQsbWpGZVvtJqEvzaW",
  "key40": "4hh7mD3D5eY8jc4zTf9PPDtFe2XQQut3CqUyiauB4vte5B37DzX9xdMvmRTzKnUToC5mDsHZstM5cS1y94RWhv8F",
  "key41": "5SdiZDx1U7vKBWH16uwv488Zv5yJFW9UvXEPpri1m9K3uwUtSpcCMZRYm7XfiWWcnkzuMbWqXAbWmUWN7SZDEjyc",
  "key42": "5PWDtPf5pw9ywR5LM1ExaLN1UDhwH1GwwCqtw4Y4bUNPX7PdnY14D5aNs6b1VSrM6pUyW7F4ZbQtpMc3aixCKaMX",
  "key43": "4tUBC9pw3xv3DFdtuxWHvV2JCrEBjAfVePVaujAVkfxjkmK6ySADfojoc7Bo6Tsdn9CgMEfWF3Z6ahVYgczKJ2j1",
  "key44": "SxAmiJvTG8n6thNUGkbBiyeAbxDNJdERNGemcK25BbMFmCukeoJboohTVWwUqjasF7yMPgPcggRL3AkCSVvw5bD",
  "key45": "2rcDvdudayx42dJBoepkoNZxmFT6STN3pUF7wZkDNo4WTKcpZLvbyV5o9EDbjP3ShZMeYrCRDqdDb6enoiG5oGAd",
  "key46": "5upqE1tdSZ6caYBEvgtP8X1ux2BXcbeMZNzqZ3BCLpQLZoxuQoM6tsFuM9YPgHYGQB2iJR5g4ckDvxZbTdcRQTH6"
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
