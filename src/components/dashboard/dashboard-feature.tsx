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
    "26ppncdCZr8L1y9qnCkiCiXtizGWDVgqcF2fpSFLK16sKw6ncXKnvrWW8c3N6sYT1ffrfzXJTYK2uHMGUNXAzunU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tyZqrTiEa5yhF5ZmSQyuimaVkZDRh1NW4VDQ9Mejw9ZuLQLyBBCuB1eLYH5ZZFHv4K183khshYCLkQv2bKny4c9",
  "key1": "XpWXqBitvmaGoZf4jML2XyioLZPWNCfdoZD1JDpitgMi4hKQJhKkwZEr4ho2oRSu9ohBDz5Fddn3zzdJP8Ahnp8",
  "key2": "5uqLyrX6V24VjZTdkEFpLQiSxNutNiaDV3kniQbgWnbjninAz9jUVCkXEhr57hkmypMCFGyXqcxYQT6xx1gAx6AD",
  "key3": "2DBVty1ARdF4eZcb4kkv29zCy6oMMdeQXdCLKbSTNVb1nRtWpTG7BqK75TxqA6Zs3UbCAbASMfUkKzF1YMGXfLsG",
  "key4": "39H9CWJLQ7JSWYy7CMAswZeNoV8dznEQU9uDCQx7UZMsUzusC7jrs3bE8JSBRXvLC4wVVb4nBGDscg4qUUFN6unc",
  "key5": "ZyPyUUw5i7tc37B4EZsFxGxujHwXo9HMryyboT4Uhz5ZPhGDd1tWWaCAvB73r69rogP1ir4yNkS7BX72Yf7AFeH",
  "key6": "4zTVFvZAeRKcximAViDNEQ3dMX2kV9APWmPUAhASaYSTMW4SKetxkDRa4DEWJBQfVdwWboBo23JMAyTvZoi6CfnE",
  "key7": "4TpohTa3zcf5kFAM4BR5xXkM6xsJe9oTfAP6MAn1BEVHTGQ6reoqBGnBU3fGXfQTQeGxJRBwEMPwrXpRudWF9rVJ",
  "key8": "2GdrYZ3yTf4rNhFn5iHeiAEGxHvihLYEfN4VZ5E7HXFu76g8edEfLLbpiydqmUciB5ZoiBA91xm3XG3YsYpU5tC",
  "key9": "3vRUDhw4jhmszPypArBvaiciA6HudsSNwd6jYsj8qgvSDt4VEh7yQoSRwdMMAGKzzVyZNDW5xRUiLDbLqgLGcB59",
  "key10": "443qAydz7NrNzvVjPDtSL9bebaPePxf86H2GMg1AgHR58bmUBvys3jQ2eUtz9KrmTv1qJX5d9SpdXXmVCui7MNgb",
  "key11": "3QqNAoSLGCX7mr4UPsziCQTxFKRjHqmqYAPDaD1csXeZ2q8ThDbqihHRkJKQuarTBQbk5e6BN2YXSrCXcEQGYDkR",
  "key12": "5MwD8yatra1vLPfXgqyEerYTWdYqkXzbDcXZLAhfC3CBHRAQ81WmKdo9qS6y44r52rY18DVeETVYMUxyDYE7kzxf",
  "key13": "4VgYvqrDLc2VZh7yXFQpTMyrio72ZqB85N8CCdR6B8WBnP835YvyFS8US3syV7XdqguFZ8DPDC5KkqELwQvzdnT5",
  "key14": "5XcYGuR6QQVeZLGVfhC3FXJppTMZmWB3v7MBSaw6iYVsYTA7n5yRLs4LXAMyYJm2V2NHqFT13hzyXba9ZCKznvgA",
  "key15": "5Cyq5fAq4AMxY1rumWp9vXJfax2s7jZmd9brYrgj8jN4ZjTgqqLaa2f61BcopHA2Ar4X7g8gxGcf77xgLE3M6VSg",
  "key16": "13QjG6NQSQev1jQQgPn9Xb4FXkt59PcaRPEu7GxMDVgybHzj74D3hZmW9sr8Cr43cLincbEPRW1DqNtFE11ShR2",
  "key17": "5pJe71tiWEGKpRKP7bRgktjsfdgsrPkbfwxKG7kpv8eTibtSHmewyUHoHPnpy6FhGgtUQrZBLXJSjc6cbDaoCcsT",
  "key18": "4c8qGB9TNHhxjXRNTquPMdYu8BZuPr8vZ6VSrwxLhLSCZT2W9uRXy5RAJ8rwaLDCE15cWSJWp2J1RuMEMEzH3BUH",
  "key19": "28iLAzd6Tir5kU2VNV5p94Y861vhoYKFVGQSqyBHuHaebz4Gidk82Jw5Ryu6TwrLUdLi6ZnzuVWKN8w9xtT4BVsi",
  "key20": "5mfYfx3F3Ws3SdJTHh9KrMXZmiVHS1YyWgszCkgE6XyJ5W4ierXs1GDjtx22u6PeVd2PhoJMY3VocVcDvbay5qQG",
  "key21": "55vDTrpFEcvTM2VGnLyFq2qy8iGoPiJiS42whLX7k88iwETGazyDn7Zkc7SvWqegwyLtTZ6YqXsj7AWoBXp9vrF",
  "key22": "3Cr6uAjficb8rYhQJYzUstcjWVtSRDRBCzFcKfU3i6KXhUsmPpJvqWWrvLZb6TPjhRD8C3DHjjY2jbHjg7xWHxpK",
  "key23": "5w9dRZTDVbqrTnbu1JcUBocgwRYy9jKmX7yS1FrDYGvnnHa7uJ4s6bbRMT5Jj1mmpDovcxxKs2gdVVRh3d3B6i5Q",
  "key24": "4NkgaWBDx9UdHKjL1QBoPFLkzteCLSLhWX73RYZGGD7x2SSuoPyePJBiZ28sfgj9RqxZWK8wqLz37weEhN7BqasE",
  "key25": "2Q52PH1XFVQ9K5TLzSmvt1V6gkpfZW6KwQ32hhYo5ARHKinwSD2KeqZHdsxrSHbEzpJfy5ZYcTiAyRd5ZxhReooE",
  "key26": "5DdFNnttooqrS3iFaLGTJumGWNbM3dZ6XDUeVLWJtBD9Tid9ZduuuwvVzGmnzrrWhwJhARsx5v8qwCFuqWLQBVcJ",
  "key27": "3F728Tm8g9e8Zsf7Xy6yT8QwES14uZncwgkZkArLh13FVVHYiCajdGpS8cgTPtB5nYho9PTvmXfNxPc5prjcp4c",
  "key28": "wRfgzk2CiJGkXK1xgQDxnuoWTDTrHxuGDafTo6DMNdqiv24wenQqxFvELwE7YVibXY3SFyx1XVuq3GdutXnXCGm",
  "key29": "4Ywhq8v3Rw3wzVBDL2gCW9HQv7gCpdyCx16YkPP6ZirAzbTynJ1iUkbEecXEtnY8QEkmKxxTvoNddkkUJNHSPTt",
  "key30": "hivaJaQuEsrxCcDHTRNvKMr7PsAPF3XiCAXRZzHnMGEw4cWvTEcRhZi2Ks9UrsPZhq4eaSVErSxS3znNNgD4xKM",
  "key31": "4qCwJFtjPoEk2LWnAomvxb4P47J1ekZN7Mak1gFvak5w9XZJ8KXWJGfb3tbrY2Fn7h7MwXqPhhG5aeKvAioezw1L",
  "key32": "3HGmBDCVmxXRSMut962ctLvnyr4yTf1bpRQzu9YgZ3TQscqSyXtjQgXTzsdLLsHhMancwwcuAi7o83SuzZQ69r2C",
  "key33": "4cwA7s9d1mfdXEkfTuAcPPhrbYshxzF9fq8Nx1xBcnr4SkcF4KzmC959EH6ZX3GLMSSZRyco53NS3Mxr75a2xNeZ",
  "key34": "2kzoBV8MVjEWuDHkHsbTHbCQrBVXsywH3wemifWhUSdBWmEuc3vH9vNszivg6KUKxinsgTG6nbL1qL1ATTur1vh1",
  "key35": "5azXCVMRBbdt19QkaEHdXdBL4smdgUoL8qdDokc75YuFmRTLgFCp5pfqTh8EHq1b5qz7qcKYR7dzK7HZi38L7Dwa",
  "key36": "rChmKQmsbumYM6t7qjK2GNALH5nmNCp8DYVBT7aDUcZad48Rk4TGD4xsYfFYcgn7oLWJGoSeg9H5Mp85kub6UhH",
  "key37": "4V4E7x7nZHacERVSt4nT4DTrKW2AQuZkCKWdHWso1foAyY63rFjVNiBSNpmZ4KhY2bXxtxq8f5jsmKUxZZWfZSbB",
  "key38": "4sDQ28EfqYbd3giWELHCB9oc9siZpbouE8GyFzqCz4Zn6r6uYNAa2ugBZ4pBTMdh7qG6qwMUutK9hkZRaWGfXY8H",
  "key39": "4p4jfiu7eHC3pUBmdACZCRjoQGPnhShkEszkcU4hnjinYkN5TA7fQhcPDumq2U72dJx4KwtViUensvUgD4v3PiDy",
  "key40": "r1FZUbfQZeiZKFhYoRXNu6R5No4GqdyTUiAti4RFCmTyTweKTTMUiztXGG8BZJJVUhfbh5mTgWqHHhE31PHLoZh",
  "key41": "4AefFdWBWHm6N1xvtXmEWhxCKzLTasvUjg7S1zmXR33VWUUBFndZXn9b5dDtaSLobBUv2eyniMyhqEM5NZQ2P5EG",
  "key42": "2JvBiLj3Mhsaque4MYstCrFXG6dUPH4fyn8Eyt1AtpAVudFyZvARgCwqcz99rYvCJR9B8mn6ZDmDNqRAq8xoR4Qm",
  "key43": "3FzXjdrLPvKkvxXmfdym9txwwT5wJ6S7kGs8KnDBBUKH59WNwW1ycK5RY24zXgcgJPYuiVDzCFjtir6TnWqSC9Ce",
  "key44": "2oTDrbNf7bmSZ8mSuVAYSEytYmqc21tMBPge1r1nBskuJuLFaaqSzxtyoy45PCJt3hhW4wvDLo2qv6PGs4fWD4HN",
  "key45": "3KhyogwqRsmFUn2NQtg3uuCTHUdViDXpMhrKYp6ztDcwsR5vsqJsBCVzyPnzurHtGLsmxhr74HSbVW4Xr4w8gh6c",
  "key46": "2MYCANhvGZfHNJwYWXMkXEQTBjATp2KnCJ53HoALEoGUyQtm2nWwNczLqkES3g6nNT2b6XBCb4EZgTBCSJT4VtUe",
  "key47": "3qg7x2M56dkUkCcti3JFExrnn2qC2G8XARbzoey3F1wS8Vp4jK7sDeAfNguZPWQ6AHyPbS8wBCLkK4fsDS4gbtnf",
  "key48": "4wpzBGCezQXtMcVbHg6RKohynqqqKn8DruV7VhQ4YYHLyP4RkzW3hkEVYoaFhY72oVbGc8DJQHiiqep2F2VzwM91"
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
