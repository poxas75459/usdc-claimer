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
    "m4HMLC8PnvLPxMBwU857Xa8xLgep8qP9GrUe7KWGKvG7f4Bsfj5xaZ1F6VhChUHnn6neYoRyFqzCesw7HPzmnng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qu8G8NcFoW3zYUBSd5rStQ3ZPZCK27Z8w9yiKpKWJ1teCZEnUPYZfJuYvMn7LVpfBFRUHYaJFsoGU2UknJzwGG8",
  "key1": "5PXv48A1uoWAVRh5Dn4R15qDW1aMd31HW5Yi2yhHV1JkPX5wqcNZkgCWvMPV2V6FnpPknQA6W9WvoFHf4rFrUinQ",
  "key2": "4f3Z6oYgXZYFLBVsMz9uDFn2bdfuSiV8pDMi1rizeJZjTjujLums8KRxTTAfpivvSSNemgNj55oZwam1QzZwnMGo",
  "key3": "2u4eqXiNZ915wu22x1GnmSvHAHYq2vr5sGuj8NXaSUiQBrozxoDtg3pqHpr4oaudEtfA5jymkVpuYeks2yvdxT9B",
  "key4": "4P83APPurtd5Yy2Pi4PWyjMX83BNKaSDXtaHcneFJbVZq45sLixhTnJQRfuPhS4MMk7H4AKuyegYjxpuq4DrxkGH",
  "key5": "3ckd3N81kAQfy5MQTW7BSh6y8BX9R4uWpfF2RqquLV3EWE2A5Z2mCUmK6coaA8PM3YwfaS1uVHUUW5Hy3AfVfttX",
  "key6": "45fDaR8tXS9TLZHrmQCwMGGBSjXvT66qmAPUWeAFYgz2chStr73rUXvW1f93gvcp9Ud6kK7J6igPWnuVmpHJSTPX",
  "key7": "5tTBa92bbtNcserggo6DhGXEa9Tw9oDa49bayq6mgH9NhZPKCedHNrzuRJQiBokFUfMvMtiHVYbQmKLiDzbJ5xtj",
  "key8": "26z6Q4mfvLChCD2rvfCa4jWAYi9FSkTknrD4ffg179SHNYHEg1nx8JtcaZHvSCR4o3ozfdLT5JcEDkPiiWs1Sip5",
  "key9": "5zL2nETpsmcoVVa4RqbwQPySWVV3pnZaLNsRETbZQikScZQttSxhjhhujwTsPGqHB9c7vXQC1wUHB5rU4KbJUeSa",
  "key10": "3gJGDmzspZYKwCPPzo7xA8mxmgMrcuwAcuP1VGW8CBs2twbqEGz3jmJYWNSzFLHXzcggqygD1CmTpqQaXRJxeDsF",
  "key11": "2GKWP32XbFzAV2nJ5WEvUntzcHsV1WbCfPUFP2Ezbx19K5pNRqbobqnPzAEBmS6zh4DBMuscDbGxEARnDxfYWM2p",
  "key12": "4irS8dQ6TiftEgG32eLMQpdiRwXs3kWfLMhjzHiPrVtGnSeteE25uW6SzhvgAXpPKbdKPGdiEnVqxaR6YJaWRwFn",
  "key13": "3DWhsEDXWpYGukrtFDAJ73qo29Kii6oazW7GjeJkQwSXxKxEJy9CoGowMG6rWLF6ZQsvAfethZw5eEn3EEWSHKJr",
  "key14": "2g6aS45UrV9W2UgozALKbfMuUv4Gs1BYMVymAHZF2pbaX89xZjtXCbMD16wC9bu3xmnCyoRPdqqBoc9c86y4KGnB",
  "key15": "8zhTWukBiaJowhAE3mQCdbEW81nw2dQjrBcFerfatF4oE4k4PuWzScf3t2PLh33ijrrWsCHFD3QVYxAWtPkaUdQ",
  "key16": "mofoz6wRHtFc3WPKAX1suKhKpDJtBHFHUpVskAtSRwSckX4z47itNRvCRHTz9qe6qiFcVgQHeZLf4sGMckDn8HV",
  "key17": "4V8XeebXtNXL2PL7HRt72kceCzpjGuRCnAcSisXDyTKAton7JzxjgshSiG93S9vkMYUP24rgpnpouvXkQKWLQjmH",
  "key18": "5cF5GV8FrsdBxnYZDmFR9spvvYc4kFKBGUJkq9gGAj9bFVS334ZWsfn8zrkEVGtesg3q5DSFTWdfu4JJGD6Spw8Y",
  "key19": "5qEfRHCHqKrduY3BwgTe5DAXSk3fbMHWm465DuumoGFep42XC3WvVgTjL2q5jfbyzaTPM4WsDMdLUAeXXBEhrseJ",
  "key20": "2k9iB3Wnn7tUoU4pJj2DycdUz6e9n7AmjjnWyLQHgo9Xruiy43uDhVXTFmN6x9z8wxR5vyoegtgqRosQn9PpGLYQ",
  "key21": "4aTzGzSokhXW3a8tvLBNKVeQEniV84F5XmutLqJtdF5B9zra6PFLU2Kq8Ra2z2tadumQR1rLcTSr6EMVzz8YHeYo",
  "key22": "329NxC5o78BgAZ3crPoCgUB2BWKgCfc8FHpxrn9C11AgKutJxEaw1RsFJzVLXPVZUEiNLpy49F7EFeJFGpsjm1w5",
  "key23": "564ry9PURky2P4taLNj4bQ4NvEWvJM41EJkEWFLtYAmiHiExk1jghbm61PPS7XAPZVpMFfpA1hci638nuFYyGjNn",
  "key24": "3g7TBXg3zpEEreMH3DfZWKSDKbHjxkdw17s6jRJ1rRLoKBFe8uJU41vhx3mLdGFbpdN6WnMG1QQp2E7fSbgJanTc",
  "key25": "DGswUDGX56z2KvJLShudqXkfdAHRGpA7bjtZiVPdNEaP4c45ANbaYGhQ5oMEmdBFS1WjwRPbiZJGU2gnmRZhMDk",
  "key26": "4Rqfxbi75CmgbsyPUDKSKjJPDkpNrtMdMrXgMW7kWCywk5fKqyKnPUTg3orifaWxih3r5kmFWAuTVXc3cDpch3Na",
  "key27": "wLFy8SpaY4wFkGvef2KfYUMRKJGEVx1TwdWpkz97DqaLm3nHaUpygwcp4gvBmQopdN1SGZ22EgsLYFNJD8cwCpx",
  "key28": "FSqM3hvBszhB8oKSbWhrujdsaf6gYUhHLCv27WBxegjnS5nCynyESXc7zMQnpffwwvzodAhNg1pdAatLowWyN9Z",
  "key29": "C3rcdfqGNZ9A5G5iaKPMM8Je1QFMKeVGuQ6sJKTV5LLV8Tmw7BwEQ6FYn8pJyqELW4n5v2MnwSe5WVzepwA7e5L",
  "key30": "4y1cu6mfg45ewwehZi7Wx5LWUBMHxTqemGQQroH4Ttjm78BELgQCuTwDrU9QKj7GkAKAgHNxPBbJFYJ4Y2kT2SiP",
  "key31": "22t6MCk7mVA9XJs73JFZ9ESpX4CjRXgKa1oQeV5kMT88m11VKqUe5MPtcF9n9py8LQLjrwzqExMuH8pnq1w86d31",
  "key32": "zUV56fNM2MvV4pwTPYkKEk71Ju8Siqnz1AvcP2TWjYgHKLtPDWxdfGKuRVEQqDyDXvvsK1XkBRcHxEC8ezxf2rE",
  "key33": "269RezQcAzyaG84xEBtK1MMgeFr1ii5ZCYLBfCL6N9Cd1PFWBFiK7jmBYBHQktEH6rEoFCots4nK64L8nQB9437Z",
  "key34": "Z3i7zFM7TCfmZb2HmZsm1Nx1ECZGCTX7sgfLPiaoSnyuQKbrraGsodRKNngYmjQK8uczieA5WFrKbcVSBGJVNb1",
  "key35": "3w7eLVWhJ43KxjTSZkGLu88JcBmTGnDkcWMsx8QzJ6nuL2h715e5qRr962ixUDMR5d2FxDvj24ZxagXUpgTkgPta",
  "key36": "4M9ZvhnrCcWxqsVr4qgSJ98tBYgLa3jETfdzVs6S3G6neZG8uScAByVfQwzbN7mB7Q2vgem9jUbGko7r3ahuJF2Z",
  "key37": "5LBXCH7NXuCA8v54ReSSta7MYovFGJGw2dPvTC6NscEA2Boc7iNj7C7p86KjoQmN5Fkvop6z2G9sxwDSq5CKCEMG",
  "key38": "2CbB9JDqUg1p8R53TTWSjMBfXWz7PfNiK2RNDikEBHwjP7ygf1LpWGM9HdnTA2sa7DDo8Dk7cggyRLsFqHHA5qm4"
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
