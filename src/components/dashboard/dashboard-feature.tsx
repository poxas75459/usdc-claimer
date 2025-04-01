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
    "A6eoZk53eGB8mSW7BgG5xP1sPX8STackos2FENhV3EZWk215F38gnQfdMZpyMRbyY9zWDasQFGjxbtLQM96Dyb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QEwnjt469hjYuQTyawSg7Tsd3jZFr9aY1p1PAwCiM9kAthrGgmP8xoH883aT3JRLLZakHUtYv24LhihxphycwmF",
  "key1": "3z6edgNTxfDBr6uMkZALRAUUMF4ZN9djj5ruGLZbd3puRMbyw97ob9UDXT5VCGW4QqjofSWpv9RLAGiVxs8C9w5d",
  "key2": "4cMr1TyRjG1ALBLscgYXevpw6tbbaVRyAfBsHyb977ocpwQ5LXjmrR4UtFagt11nUf1PGxvaAM82cMkLyKBosV1B",
  "key3": "BLMyQFQa2TD9XayatcitnGxcr27DEPLp3xj8jWGWYNqPzMPib5N9LE2M8wH7wnHNgGFTo7xdD3ueN1qWRwF2njq",
  "key4": "2bQpmyNRxRXcNRCGvwttFsJukDp6TBF3UwiKhHCPUjGf9AgYw5UDBZ83RdVoeAvbQgPFmYBbuGUfV8NCrJgYBj49",
  "key5": "2fjjoZEzdKGCe4Dv4dkRtkd6T3U7dnSpdxXCujzp1ZR1VKvWvYF7XrGbonxwMt1wcgHyFLdqjitDn27TKPrGAHbv",
  "key6": "PgzU85QcRenSEgftxJNV5P1MeDTBgUEcF6X1W6PDdk9hzFfynmZLLsRM4fe8t9fpBQ17M4A9aRvPDrWPtEJwGMW",
  "key7": "3CvG1zp12AiBqaE5kCWx5VfRnyCqf7MhUqfzBHei8QyPPJzm3RS8urGpt5CLjSqiBR9fUGGeswkMByGxcqADiPuA",
  "key8": "3mqWbQY3wQFWRzhtTE7PrQexsnWZ22Pp1FyrnD1dtfnQ5JsrMfX1VwbuMpBMQH65SEVoceCs4CieTLLqYoe9Xa2w",
  "key9": "5hwBY8Ko5cVWYvpexdzcRd1jaYckp8gco16oBrwEqMRezwtmZaA2bKDzYoqCKC5WkQ2kwcXiZvkSQ9Ffoc4vetGQ",
  "key10": "3SH826NUkVHmgUDJPksUzpuY1SoCANjrhTpYDFzrXAiewBgFbvmJXNh7RU3qx3M74gPm92TttDQcFwvZ2ih82oTM",
  "key11": "EZa8EdCeAvmnxdsUtN8ap8WtBs3tMs26ypCvr1mTVeiGK2oPgq6tzNYPKp7ih6AXmaY36dhbSoweCz9PWnxfNXX",
  "key12": "3s1ExA27ChUL4LrqT5j6nTcECeEmkj8VDrfZyLa4rYiCEXUJ9vJhK2LaWRq8vYNbGsyx1AzDocA8WoSkbGYaCZyx",
  "key13": "4KFvVjvfxHwrPp1nNzsYsBChRY6wnbKNmDyKoUEGMxTKdNaANhja4fAypvEyhCrEyGhWtTLHnffrE9anXZ1GJFqq",
  "key14": "5X5Z72ywsQ1pTaK3GoYBX8tJk1kd5LE35VNQ4dNH4HZBBAfKZC4v5zMk4vqwryJELnum3etRF94nb4qj3Qz2Jy5Z",
  "key15": "5Uoh7Sk3MtYXAcD2zkzXqum72648HEPxFsq8W5voBufVSi3oAsak3zRx1vFotYcL8nmTZ78C7GaxuqRdH9HBXWLz",
  "key16": "4g3kMDZdFxAXwz8uUa7b4a7YXqKcU6u4jrifT5XGFCffQ9kYBt2FcXn9KJvaBacoV9DS4d5W5TeLVRJznanYZgSy",
  "key17": "JPhTEMjW4tTxCyjafQowuBoFKPMwsEFoKxAjzg3tggz1GiCUmJ95rWo8amx5hUQcBUWUR4YuEaZAr41PT1iyXsm",
  "key18": "45LdtdwMgxeESEEpuHHwKpicddkj1ofQU2aLARyGWFCbvn3xtcEzNywXHDguKm9j5H4G61QekUQ4utfG78R7wzGG",
  "key19": "58zBdXU4X9jrNV4kaEa1WdHqLLfQtp6HGNCxeFoGo5KU6R6p4fYMXCnEWY7n2aVSDz34jpv4GXqDNsLWxT1Pfj6j",
  "key20": "WZ5ky8FizD6MC1EHSuLhi9Yfsmb7ypvJFxXW3jpefN9bwTwVedowA4RLKrNrTrmPocV6YV2NjMDyTfpYMr6XjX1",
  "key21": "23WvNdz5BqQkfJJvU4Lmq6dCL4ayJyH4i2k4r2Jc2KjjU4DQQcJQ4hU4Q7AyojwzykrkNi2pQjTuw58BepcpvimU",
  "key22": "vAE1wX7uEv8TQvu51FY4gYDq52qLnmndU5ZKPaWnnq7x8TvyaQp8XH7Tv9qr22r9QvTK5z2b2Z6NWGvD7jZY1oM",
  "key23": "4RtjwfJQGbWYMQXri7MBU45DaL2FcwXeCKWEBsTmUK1HLwjkZYxh38SjhXvA162P1WXuWifUCoqqumcJ9WEhFYLM",
  "key24": "2vhxrgLycF57uaXdU8yYxapkRhMsjogzhsajLg31q7STxSwe52TC5a8ff5mYBSahmjqUjq8aG1Fqhz6DnMTcuTps",
  "key25": "4QuNJ4QZoWJkipocbjtbUsA2s6v2YBWgS1uoDjfd7ERn3iNHFVUjWrSMR4r4km3srmFAmvEsw7asD6K8AQRtZTYf",
  "key26": "5q6ytReYcp4yFHrivxyBqhe69H5kLbbmUwr68nLMCZrwmzpedHHu95VfiGtQ8mCjx7SnkVxeB5yuR5F52kpVdqQ9",
  "key27": "2BoFopSbUdtgLEzSU2h83kJ2vYwZheUUycg1KLM6sLHExsFK2VRu2PNb9EJfsc5326gF5MuLZA57qrtBZyUNbHjx",
  "key28": "376zsPyQqT86ALWpKUYTg4fGKYyAxn2P2p2RjA3LCJSLNqVescPmbHt8bkRARAAAtfxtPGbTmabyWQQZBPedVuix",
  "key29": "52gJJKwoX8H6iNv3FjWxvsxHkc1WMxSeRrApYhpJTEaek2UCrCgJp4afYyAgqbCsS1bCV3Cz1gDT8kLkeBFb2SGm",
  "key30": "3UwhFQcdVKABniRJxnJWCuqS5mhQh9S2jBr9tWKs9mad85C7CZRDpkMN9ufp3LdbhPsZwGM25fxvksuHuRTVaZCA",
  "key31": "4FU9TEjxQTaY6GBhANPE3s2Bmw8DzTkN8SMATM89jmLzgc4yNX89cNCgqDE7MkQDTRD6ZDu3R5aiU3gGjwnhAs1x",
  "key32": "67VoZv35JpNx4ur6XFTbXhANNht5yi6BiKoPpFxW9pMEXCs7LkLQe9RVC9nAvWUXsmimita6kMxTBHisbRkYeKeM",
  "key33": "2FBXQiLMXSe418JPdXqi3CK8D1LSGm9EHPRVvJUxXrEgWJtmr4wUA5R3pAfFfQ45UB7ZEtTwxLNAcRivQ4jWLU3D",
  "key34": "4y4iR45DDx9tFNnmVNScWDzLY5cVnbgisYgxKg9EMY7NsGrKfUXBC47WqyhpiPshLTVdBYwXS1yPSVNKkddqRsJj",
  "key35": "4iAS6EUGbtAYRtW9jq5j2yYykue7C9grhX2LGowxcwvLLxheYLQHamxiH6dviHhqLCauLiUMite8BeNnZWBVGUiL",
  "key36": "3VvESVx7EEWXhHGqSXWtetMGsqdkNsAaiaKFYTtrqt3KQXiMgCq9Z4nmRkmXmnnJ4NM4L91uJ2bCkg6kJewbrvJj",
  "key37": "5AZg86j1vMwxwsEeWGKqW2VRcNTRuzKXp2m4q2UjikaWHcgjZHucu3v5yygQGahzBtG8WXJA3AAvrSypEwYpnSu2",
  "key38": "mZ7NVrDu6Es954iRyEsC2aFnUnSiPEFs6mF4Xv1kp3b6xajygBoPJ2y53tigSbnYzUBCdpXxoS1rQnhZGLWJesk",
  "key39": "2MnMMSRTyZNGwbr2wgpCmZz8KU6giudwGrEfDahCbrjW7m9cixGXtL9EfV5eBJb86mnpGewaEugs3hqJPZmPWSA2",
  "key40": "3gsrt1ykXa3TdX9JB3Ar21uttU53pfYFUwCFyyzbEbeQmFK8YH266bZJJ2MySqaREpZfYBt2Hj33UYoLC6CaUGBp",
  "key41": "46ZaEjoc5Lu82sskNZwu5ZWznRUJRNdu3WTPYHceheyYRok5bPiMVkthwzfKffrUSbR6q37E7YU48CCoukUkEp4G"
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
