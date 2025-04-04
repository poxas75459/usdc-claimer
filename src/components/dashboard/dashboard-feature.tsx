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
    "2dngu15UBfkPgXSgGmnwX3hKzHtAjv4U2pJPJd3eEzFL4q2DA1eSjdvxUBWYrp5xs8P5UzBxwboAwxKL3srb7rGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBEkRZyyHKZutk9LcXUW425nwKG91VYxfJoWyVGM1YQvip9dyoHvJHgDPTSEkAVAMZBoiEU56vCGwxgvBXdBeSJ",
  "key1": "2RjVuKBsPyKFRCGnuhxhS2VwsGoHmEMiWmgfTByPRqkaFCHhLFxTzqYMcxh79QYHGMRrANXnkcgsZtzNWvcvXpoD",
  "key2": "5ErdatxyTCVmH6H79CVhEuNrL14HgM5SYSo2SAWxcadyUqVsqjB8Gos67KF1KLznrauW3oFHfDGrHiGrLc5qwPv2",
  "key3": "pPixyGbw1R6Fc8rYkG6jZHHePZGv8izPNmeUdP1ozsE6dVGtAvDrw8FmZzyCCC8Zzn2iSkMjCsLkpiqnVHk9xeB",
  "key4": "Pj2vJkApaSYEc4iQi25q7NP2yvbn7Zk93pvq2bWYRGXBdVbaGpLDQgyzVHDrf5srf1qZZiPRs6Sr3NVzU7CqWVJ",
  "key5": "2w2yAZoTWwUE6vGQjs7GEPiUb4XvtYKYf6E7tzgzQbq5sEcJACJtW6u6eCbx42LXXowKA3LUz2Um1s4YpD4Jft33",
  "key6": "28ih9nzEZMuZGqQUDKYUzGXjfgh362VfcdTTKPe54LTghFozUbkBMT41q2rUr3JuMhSPFvD2NSD7EjvJWeef8jmh",
  "key7": "3orBWdyLmrSgPGfZVnS1zSNyr6EQDvd3PKKjt4rZjvmRSzh72vrwacBVTTTzWN48pBRm1yFcmySUudydx9LsjBgU",
  "key8": "64C2MhWKkoQXb4Sg5UWF3jXgCEWeMKa7Dy7PswRD9fMeeoWyobG4evRt2ScKYxs8ikNMkXB78t2iUJqFfo9RWh8d",
  "key9": "4gG5GBc1QPesDURbf2RprnwKUaawmhWwgH4chQBFM1j4Z4sBtQesE7qDRaxpBvreyhiSaqFgPAo3VoDxGqoCkK8U",
  "key10": "52atVMRrbchPbrE5cXuXeT767DooWuw2uC36fcC5EZrUsMeU5yqFJwwxP4uhgggqQWxAYc2hQ5Jt8gTDpA3fQT2w",
  "key11": "d7djohVLm3ArGfHtF6Rgacqyxv4xfeLquzqCUyhYvHMzwJafNhgswuACBJX9PAPT2fF2UEvd6L3fY7JowzbpUuD",
  "key12": "ePzvfk74DhmpC28Gb5rLSxvkZYXwKNxEtn16qx56jrjFmHPTAWmbMjbAuYtp8d4hEz8m4r2sTUqbaxjDE9QTa4g",
  "key13": "5P7cLTAMJZp2rkgua96YQFMa1Yb8QiscRqi1h4nLQHYkwBvS5HCU6t8YdoU8jzmszVvxoNxLt3piy7bjmk7DjRrZ",
  "key14": "37cS93p3u499yFvMic1QkQv6GWaqjhPV29sib887HswFMvPHyHPqbV5VpPhgXh62WAdL9kZC1VWtW2kvE53b6XW4",
  "key15": "2Tp2G66kdd7kUH9SKz89J62qmustxGefJTzvGnzeE1LqSRRwq1k7i4FzuRGVo85CvgMHYkgTNe3sQdE3UZm7SeSq",
  "key16": "5Yi88horLYyueCb4Tw1gFdR4hPXe2zTbTWAKdi9ZmuBttuvibGidB9ixSKr3qrtc6VgUxUqbQVNtAmcufyqoszZk",
  "key17": "cULmtusyX51Sk6v9mmbmurdZV426Nkf8hufPo6rLs4ueq5deXgyFbMay9atQuBtKBabAsQRBs2AjUqEJJQFp4iY",
  "key18": "4iFi9WoGzQWhTZSQCxntKdqnBtmBGNVrnrcxeLqiPARKHEeuKQpyoAGtWLjWP2a6nDyzGuk19nYPiMJR1gSkKFMG",
  "key19": "27jEW8NofH5pJg8rQw4jfigXGxDxBtTd2yBMvf7U3dffmj7wnMx34NyTMRqKkA8CDefdCBZxr6tuMJwKH3zfecEQ",
  "key20": "496SsJpcu7NKMWHccC1uHDv4DTXNHPEzBt4ZgdrgJfT84xY1F8r7zcTUSkBbTb4FY6ieFpe1Cyr93icGK8ZE7ym8",
  "key21": "K1TLqfdL2XugBpPjiU1cjFeaGns2f7nKEMYQgePVHRLbEwo9Bbh1Ysckuo1UTmTiWzvRGkbjNBjqAU8Wy8PxTPJ",
  "key22": "2WmHK3yPCxDqYLR2f5wKSFRt1JaJhySkXYUZAp6XyV3hCguWTDQTRueZsSLpc3puphnDVrytGLNigdE8iGHMag8Y",
  "key23": "2ka3r75NvN3w7zM8oAwkD8Ck8feGCgQXmHKUoU21nFzH1QoYk6jDf5xb4TykTe2V3W3VfZNpt4trxRip9YbihYsF",
  "key24": "zDuhEe6dQpWh84ShHvjn52nqvynDdX8QSahYBD2cWnTGPv7emebh8y2jhkZ6VGxfzMw2Ej7UupvvMgYJdDxWB9n",
  "key25": "2cMrisQ8xeJsg8aUuSq4TRND4PiaX36RkCkHW99zNrw3tyJwFz1hBAqkDsWPndWR96vEYhjLbHo1JWR2MNBrA7ku",
  "key26": "jSuNPVeERYzN5gYHnJq1kToQuNsHmMyzkUe5WQztk4qXUjPuP3yUMyNr4Uy84pReEQuxXBj1FQscQp7Ean4VpmS",
  "key27": "352adbCC9jdXRuFLTVa9pSn8HkbNWkRWos7w4rnaMtmh9jgRGszATCTFoFbxebEtcmFZVhhpHw9Wvo3HKFgKRnDs",
  "key28": "kcgRFBoKd6QiviAy8esEJ2FDUxCjJmeLonTQXk4v3nNjEVjjXUSLtYVa2xeapSCdHRWxAMwqAvTVorAeRNa3UJV",
  "key29": "2vQ6AXiD47fCrb6E3ngkwLkiQDj86xA7anLZudDuM3tEAB95m3ZXerZxzeYNnqtWVnxJEysSRt1cymfim4vuTebm",
  "key30": "2z11g1HjCvafaSqW9fQv9bR3eWKfbD9jJnqnCcmq2p6JPKfRK8ZBq6QvKPHkKzrBJy7c9c9H6YsUYsLYM952hwSM",
  "key31": "3UEZe6tnsjzaDx9hj5t9uxdJ7a9Djfmh53Qt3w2xzQvWrmixD8LCnyBoGszH9QE78Y2pzNk1D5qa1dFPM71jRed7",
  "key32": "2LEeeZMrmp82MgDS4uSpSGyBjhTJzti9VoRSwadbmP5BwuS5h4mRxJyVm2KBKxuS44eQgQQGC2UyAFtALaywL35T",
  "key33": "28qQy9AktCVW5qYh2TUzX5zBpjyFzoQCcQ61LZvB8tHwGNELM4CABsPSiN9qHmemAx6RGKG6c3wCF5yjSyZ3WycQ",
  "key34": "oHdZhddaKTpbqGoxCogoPRVvC8xhTtP8uFuPiEU2xCnJHUR8RB16brN96FFWVvAYZhJjVxUs6T6J5Jd4bfwvtBe",
  "key35": "iJiFXpnK7rC3qXQjz3qdJuPn3SNnonF9mE6Gy3h8iWmbBjVCxRZJokVHiBJ2TU5XDrvCAEG91VUNRsPVrWZnxRR",
  "key36": "4bhdEWaSGNKQjxqHCXZfbhJQDgRRRBkXAZvuYmW7zVWvnA9KLia4UK2oxphafKifR5agM6zQsrEgmvvQ8z23VKqm",
  "key37": "3RhUrwW7UJ5WN7Nkki4RZ8nuvoq2cngmS11CXCALem25bzNFEv9EnjLGf634VLNUi6KaaWhgmWwWozzXjxrLJv33",
  "key38": "5LJmy5PrG7ExYJLrgLfoGvP3dRjdaFbWAV4C6GKBko6vVfbVNW8KQWn5XJiLQhYVALUMeohrkQvxp4zFQ34v52E2"
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
