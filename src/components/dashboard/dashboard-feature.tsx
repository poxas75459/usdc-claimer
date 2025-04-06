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
    "SknCxs1t8VdimesYiL5bzW5u9ww3xWfwkVx6uTiH1oQVmxfyD9dp3U1qzLaGv1aTRaty5SZvJfN8Y77p3iJR2X7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xu5kkCJKxkyw2zYkQsRNopn3kjg5DQ1LssU2yR3U6fyizX2nda84uiaQnLJRNGXR3qxutVfuT77t6o3oqV8mDd6",
  "key1": "3oxtj7FXgr5pziqQfcZCgttvZhEBedor5a52oysto5cKqw1NKk5CnVEwDtup7wYfA5wq1nKYBna4zzwL6rp7ppuh",
  "key2": "4HEYj8jCnr8XwNWcQp4YNutH1ioMy1sajddsrNHvt73rcf51VhTKgJx9WM21nEgjBPLMjeJVXSgAgwKry6KGPADX",
  "key3": "8vR2cfiafzUTekvCkzwe6CZ8k7ZatbEfcZNeDZQVgoJDLDVBMH1mNbFGj5bqpC3Wi7Q6C5LHRJcq76YtVWKheLQ",
  "key4": "3ZvN39xeiFAwhpb1BrpNyTvXDMey6aM13dnxKfB6EVLpt86g3iKcGHjS79mdqSzbFFd2HmeHJZsXQfvbHUpKJUDw",
  "key5": "3gvvrAtLyJt376s2pGWYsP5Vb39AqYFokxxSXBNuQEYKdDqqbSrAhjyC2BBegCrZZq1vaGBAM7NnMrsmNdmUDTHv",
  "key6": "2hZACV1Gp5oFfA4ohFAZgmknZxxMRqWr9F1H5feJTTF595YwH3QZoXqME5dAyFSzwd3jKNQjJotCbyhgGcU5kq1S",
  "key7": "no1we8vVfaScuMBdKxZ68emvt1B8QkWo6AoJBDKUN7EBKdv8mRUnLUdyWz6eKjjZuYQhDsZy6myDNCnuJ11Kuvi",
  "key8": "TF7BrTU3PHiLSNTK8bxg34Wnme4jCsuGkk9v8WUWhRGzhzPXQFys39k55mNksQG6HPBKMjC7gLuDsXMo1nUNGcU",
  "key9": "evXmEaRtxpPWoTeSsR993y9b5zdNgKuS6t6SBgsJiAX8mr5X84fxncAaPTu27PcQkxMhcRmSMwWrrpkisooAuvq",
  "key10": "AACSDEavGJbXA4VqWDS7zKbmkbwEgQCkRbMiHC6dAwCoqPFdKQF25rMeM8gTsuAe6pt8dPPt4n7jiseG7XjYFDx",
  "key11": "iStdU9TkxYG4aPG3M8jnTu2PD3PcG2phMdJXLmkFkAQbLz5hjD7aKK7B5Ef81nK4BPD8b57nuwhm6ybK1n1RcXn",
  "key12": "4pZHNdHV8W7nRihq35CWzdu2Q4BzYY4QYTX4By9qSx1mJdw7i9TLdGzyhjHWmMdseGhjk9DiR9jLQxbou2aKMibs",
  "key13": "p65ebBbatUvqJgP26daUoaMfGv7b5t6b8AQcALqJR3k7qMn5WmQtA2Lcrwpn5AbnZJgZ9X43LRfbcXK6HpqB4Dt",
  "key14": "4x42gb7yKgeSJtC4Mtsidk8pStT1bVqujZwk3LFp1DSepbNvYsNuFfeT2zXSohbheNrnEjyTph14Fm1f61xrm78q",
  "key15": "fUptB7gfUUfWiZ8xE7w9XAx1tVkNHvxRmMM6vLj2sEy8Z7jhjTfg9CNX55BKu3YfySqNgu8Zj5MqufFsrQiCNSB",
  "key16": "43EgpjxRNLfQNNjBTFE6d6hTvC5Xqq4rxHtXGPoLW8NgsyrB4HyyZFRUprftMpufoaEZvJVkT9QafHeoiDPnfN48",
  "key17": "36fv9MuWTR8tsbyRtMmKDMdhVa2L1u1mPrwe99ramc7mWjrNtvgNu2nZDoeqtNu6hzB8kULZ3e8CYxfcusHxGRnA",
  "key18": "5U4G49SUrfeRJNsdUi7mNYGtCjPB4xgxnudvUV8TLBRRsqx7XK5MuXFijsHczYpqCmow1J1Uyw5qfiQf9Top5xCC",
  "key19": "5AQ1WGybU3vaWB216tvdbNDbKDibWo7fvRqjvHX6Uopci3rnfjKq3WAHoj3QnuTR5nQcRfdy6vfuwyMcXiWsgz7s",
  "key20": "3uLChF9B3iHsDRGUozxVggyej8yc7BbLw7oyynbngEtke6Y4CrF2x2h4uHVZdjFbuRuxDk5gtGm6WQ3FdYmaXpe2",
  "key21": "5H434qPVfGHwbg4rSZfrN2WHvAaTxA6QZ9PnNS7FgGsVzx7DgDA8p2LRPQUodVRpjPRAXwXzLaGFYcvdN1EfQTBF",
  "key22": "38WWhYLveWUG3uu6MNX3UBf8s7xtiDusN98pTa6fjBohakW61TEE4iYT7hfwv9PiAVxPCWTiep9XvKmE62WNx9va",
  "key23": "5eZuLnZ4BvPpHtbteWpW1VjjGNaH6H4sg4kKhToVhyBZErjhZW1RX6Qs9tysyvwh3mHTTQDhMuaxUcUqDoUtPFJY",
  "key24": "2cH6Yk6SHNzXiEVCQcztNyKa9cyxcB3YHCvGf1pDPzEJErJSiPhWzJZJ6KmWco5pCqajqEh4SUyUN3knkjPEY5CJ",
  "key25": "2zFMnfVFRBHz3s5Bo6S3fkEGrx5dHu5NrpD8ANXTU3ZpCs3216JWRtG1Kc2Bx8tJc9Y2UUu1BBmmjWm4AeWKmFg1",
  "key26": "aK6dCdMpL81E8pVuu9sKgkwC2QjpgfxksNafHvmS2gkVkTHi9G9oZ581AY1p2x9xQeFDjpoLwmdZfNdwxUFGaak",
  "key27": "SZdRpth9u3nRh93FdyvD2GC7zgqPHtiiMF2vavFo29HGHKSHktwRJCoDV2BFMKheKjZX3hmztGfyhJyCpyyHc78",
  "key28": "21VFD2mqSYwyNr6jA8df6a4AUsXvmKpPMUpwutK8pqKFR7SqaFcHvyj7yiB6jrRku4QNC9QCi4n4g7fcGwhCgVDb",
  "key29": "2jHGTKtDYig79R7ntPwM5fm4rBh7UBv16tGPK8pPmWXaAb9cu8qHV9kekLgt2dK16C6mKCH8w9g8VmKiYGV8JZz7",
  "key30": "3WU1GHVamkAB9rS13CZ9SmbubFaAf1TehU341HnNe7Hz6Vb9Dc2Pvd12yZPaVh1kbTj4QYSQBHhNBG1aevmC1jdG",
  "key31": "57vxMWwn13HSTvwkZPZ5VpFb4QPFCvNUj5Jq3gzZQLLH95zcWgUiHiajWWE37YgewFAVzKydTuhhxVXWijN4uGP2",
  "key32": "cXd2rca82QcxsJ4osiv7S8hixMwggJWqusy3AWPuruViBb1bbRJ7Ze7anDCFfkANucg7bWNnimSf48soYJXkr3y",
  "key33": "36kPvjFyJXM8oDo4kFxXBJ2MWb5Cpyq6unkDBXcZ3N4A3ujpGoEvGUAJBMmwYz7oR4f9vQrxtXf5KCy4WK13qSxa",
  "key34": "4sEb59u68pTuz14JJto3dorh8G8AWdCZDMRFsAN1EHcqdZo1zwVcvS6uG8ZR8puzWGzf7hExSpjL7fY3RtZznAXw",
  "key35": "3E7tu3Twc4VVjExDRsXZdAAcf6tvEgtt2oLeLRVTbiMdztjtD7Apx2S4HMUBrvKhgcydpFU6sjDjVethN8hCdSyf",
  "key36": "zLPa9dhVEXHwhG1oyJTikR2KD9216orexCwU9qPKH52q6jaKqc3YViywZqHoRSspW3akiN85oBHX5a6HcXjY8AB",
  "key37": "3EVvhhu9NY3Y1vK7zLXXCqysMzvWbeBjkyr4Zd6PGXX5Z8ndiR3RfuiLKsggEvjHYExp8e9FA4jkvB5G6ifbzqfd",
  "key38": "4A7V79JdwR3YMUtHP6kR82jqUxyBYpXyZuMW7tdgfsAEa7epLqvG6oLykr8dh2R169kW7KQn8kPC5TzN2y61EgZQ",
  "key39": "5QKBC1M19jh4qY5CMah2MQMN52WYf9bJjmGsWN8pd49UGPikgg2SEPC38wiGXLsJ2RWRn1ed4RCeFddu29LsHT4m",
  "key40": "23FFANb84iwYDpY4htRVLBH9Hw7PJAbfLjj2W7PD4K6P6U8RGNe7QXgA3qncx9J6mNCnZPHVkYt3b4HJxNBdKior",
  "key41": "5oz19vU3TVE3i9CCA1CBVt5eksDJaWqFyCCcvMPPgEyoRY9kbwSSLh7KEmGHXJSp4uiM8Y1v3yFZUsmmEZNFguQR",
  "key42": "2uwzRibxPWQsGN68vARoj7RM4TTqFtrazKW2z2bxfVz7iyqT6obDro9aH7DaDikuaScTRTRvXntht4xkrCmp4zSA",
  "key43": "5jFD2a1smtSTryfpyf5DubaP923Sdq6YjV7d9V4QpCXyRcGwBPJysgiWGdWrDGPJZBWysi8AkE86Fbh2tWEwo5Y",
  "key44": "3fFNDw85AAZA5VfrzMoJjsPRYbSMD6Vec4jpWYDUrVCDddJPTGNWzZ6jJKioWkhNsPfK7xF65mchmDpWznzZBx4N"
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
