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
    "3nXCb8Wh6gdxGx68G2viEMYGqAZh7ErJ5iRTowTxTNBwm5ELxgQCkeVRWkoPHUQ1sZAjtBX8NikhETVt6dsbTWVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38xoG95dyMLeTP6Z4gVy71TGNX8JUJ8EkHBxdVeooRjqehAnmPiir2cakWcEAYiiPFQpFWgURpy9XrbSUSTvLiVP",
  "key1": "2KEQThDkDh4WnfX8PFN1YBwqf3E1GvJbakLRVYX3X7fnHcey6ThKxFV5HBGeUPjV2rGQa2o4ZtETtQomGhaBEV1C",
  "key2": "55oWCbZsVjGzawsmUrC7dTgLkzMEPccGfAN2bNozZ5tH8zsmSo4nooLWQjy7ZFgi73gXEdkcc3wv2dNMwNTXCnpr",
  "key3": "57hvmLoPmSZMx3cCHptUXdnPBwAJKyS7yZz1NYSAML8PDAYYKBe5xEJJM5gkyzGLqi9zw1HMpNYknKJWRGr2E9Rp",
  "key4": "4jDaeXxRaX3PZgcnAA3CCVCEXjnNewKzdDV4PdCDeodj2PJecuxcL4r46qJmEte1t6YSh4sL9vpZwtEz4t9jxvxN",
  "key5": "4WT59ZMtmw9PsrSyuqDqenobzbJRbVbEJ5BRobdSrQPzTqrQS1DeXpw8cVfRpn8VKujvsRx2bzu7HfXjR6gyTjse",
  "key6": "2g5B6hHpMcqU5wBtmx1VUJvgnzptTyewqx2e6wgQjZRr2hUDVeFVFyrd9cvpVbz5i83mp3oKhXjqcoy7Tgqzmsyf",
  "key7": "3xgSCg5ZMTegDxPFqkh5y7mKdeJa7K7AtSbWpVFeTy1SyR2o7GdVJqzmVF1WA7dPGhcK57sFTvyMb1V1TCNTYTr2",
  "key8": "3CjN8VbNorFt9AJjSD6tCghw2VwLUEGF2xKx3JRjxQQDquukvpEiYf8om7B3mPdqvaPTHwsUvGF9rWyZtDwLaDi2",
  "key9": "CC2ZiNfNRCv2QPXLBs3o8whg5RR7TXi795pi3hxraArcXAE77jobePFHdFj3exFZ9wWLVrq7DXkeUSk21MPK9aY",
  "key10": "3pyf4rvCu79LxWR8QVuD4xvGD8jt8E9UoraaRg9yLSazpN9Zw5JegXf6bwZmX4kCJadpLxBX9mK6EzPopXmjwfk7",
  "key11": "34ZD66oDFVfLzs9MeVswBoa1477FZAjaN9qB6nnQ3XMpxF1EXeqqh2ieVJpsYwoAhVd1qBAJJSgUnT98tBpZzKXv",
  "key12": "5WYwT8LYds7EnHaY8oZSTL2Y2r1v1C9PBKpcjHVNg8Zbg4f2NewPpmHSvdeu8bD3UGSdcSzSfUgCb9EGfnPVShtM",
  "key13": "k1xYz5QjdwFkewopmk1ZgjkC96JcFZZDHz4wRG4EbcA8SZK7ByfLugFt86qAk2QXbz9jAz2H1ViTwZiAaChDj68",
  "key14": "9uvN6WSE6SfhXb1uGenLXWdBZr8dTuu9WMF9RhdDbBaoPSW28eKiLdUXcqdRYvMnVrLXDnopSgKYqCj53DzRkjw",
  "key15": "KLHUj97EMfku4qb8fXrbhzj1vMvtA4vdVJrMHCnrnrFnSDuuXgcaqWDBxSodN6o3zweNR8m9vWkofLQRkYwoWEu",
  "key16": "4TUVF26595s4dmHgnd3xgyh8BhHS7gYAfQ6KjDBmiHaWMQxCXFPrXtJq3N7AyPLaNWzUX7F1WEsd6iyZ2Gweu7A",
  "key17": "hb5SkyBn8RXwm3K8Q5n8vijwpb27ddPEj9rQipDuFwzCcsKSYhSViZoSW3Yxgrezz1NjJoA1jB8PeNfQLv6sYKn",
  "key18": "3tBr6NLCJmRUVYX6ebq3WfjymmBevvbppGWhAEwhYYask4GXrBgG7D2LPTeberGTjiCfeZK97MJTdepRjp1rW55W",
  "key19": "2k6H1FuJGAFzbuiTfoodAwHbAbLMnHHQuH2C5vp2cP3DkoUX1bf56cZTtAQGjkakPU3T3nwiU8rP3yNUFpxHtcs8",
  "key20": "62FoX28AGZPyUh2LM7cNcG2uofbZb5GJQ7PxpU7MpPZKdKtyp6QkW7eCPcW6n83eNbPpBEngkemUXeArz5i4J5P4",
  "key21": "3nHFs89hFQPkNkAr7hLu4GhCcAXCCqLC35ZP3sicphUNk2k8WhUoeZCaMtiYdTHmqXo1KdqcrMCycSxf4zUudhgp",
  "key22": "29VN9n6vorY4FxrDtWRhscUta8izanqK9pD3PqLhpr6g1NHHj7vT1LVQrjqxjFm7T1G9rxdGndMmkxJVrhaNXVvw",
  "key23": "21eGPgzCFdVNY9dRGGJxmgCjTjdMfVgjw4g1QrNqVrnwWRC5Zx5vTBjrtc7w1PgyPNbhXqFYj7pqbRDVXC1rC9ub",
  "key24": "5TSP9mATU6eWxN267Lq5jWKaT63U9rcPY7xc3BeGkJXPjE37tdcv1kqNuo8fo56Dr5mXTXoP9aXYB2D3Dtijs35S",
  "key25": "4HEtyx7FFdV7hsvsPniinCUh3YTQhYtzZDazH25nYBjwRTWRb48wTc2yhgXtVVbzdnRkZFzfm4cs1YTgsVzZkwzG",
  "key26": "57cRHk2ZoFpyHERwhoG6jpV9jX225jePe9w6mG8hzvCCU52UJnurszf1YQtB1GeZeEKCMS5XwAzx77BLFy43F2Y6",
  "key27": "5rCjnBumW9tzb833yaRveALu4bKSgkcNezPvHvyKD2cRqzaUKLyNeeQD6ss3W8wDaKWJogTKoHTRDk2bNRkTkFxN",
  "key28": "4V4xCZjyDbAfPhhSaGdJ8H9D8jMveBxQo51wYuWzF3yC1qGXvWUkcroY1nx86AMoVmkh8LYcsDmTQmCBt2XTk7TR",
  "key29": "fKmiaa4GNnPhs4GboVcSreBKA7rYYA772b3uYi83gy7G5fZdfiGyQU7T65JLQBEyZ8dqwvqDjqVHrs2Mwnd5oUS",
  "key30": "2aGfpPU8tV6SkqSmv4kJkFgjVr6YBK84HDUyWi6rLSXmVnp2Nh3Yud3W7s17QBpGQG8x67pcvtsEnG5gxMMf3H9D",
  "key31": "2hXUYbgRwJMeBv7UqC9qnmvnMF7qTkizzeHvyf35myPdCVnUDG48ETZwFw75DFCyuV5mwyhT1erP6ZtGqBmwYkmt",
  "key32": "3uBh6tEo4abV8hnFPEp6vtWEe71SJEEDtUqCTYsG2zJFYbrQ3XKeCbrQjgDiNfHbEkt1t2TEWY2UesNks973qFmY",
  "key33": "2632rhbthuuarX6EUFjjiYT1GVPCBDyqNn7dpA2467g9JzQxVm25GM2cTQtRHGA3X4E3JUUkarjTHYyBBS6ZLMK4"
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
