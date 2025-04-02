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
    "9eEZFMtMLj7tqHeYEqfL9X8jtFr1oKRRUu6gPGw1E8JjjszXkh1ZqH4S6FWtLU1vaYsGkJxHYsGe3xRgRJahkzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "413wPfKsfk9ZcCeXQJfcrabtPHYVaytfPG668TFKdK7Fs9xmmMqWMjiX8aLc1fkigfZSif3Xjkt6aXUtm6wA47VL",
  "key1": "3wAsTzhwVbzp8JiwvxMhVQaShW5q8kjNA2keBCgy41tKATGFQJZjvbrHtZ7XHwtA7nARsFbiLoX5mbWV6ZZPVNGG",
  "key2": "2kYUMT19sjrwJ92oCcrF6J1RPCryfBadE3MRcnHje2yMJ2USUKN51xKgzvND2hcHNjPGPkri8DJ5PZGf6t4ywo9A",
  "key3": "3ZCZWbKZV8NDwJVQGuZdsV8VobrcrmQu1wW1sXzyghW1ReCnuK7zdziiVVmSzJm7QxZCwbMNGxoRggWozG6GWYMn",
  "key4": "cjHFvPYx4j9yqxpTuSzHwesiWyZH1jZhx26KBaLs6VN4wnjFH5XKJTaKzxohXDjCSiMzGCaABSisZ5SXnCTvhLc",
  "key5": "E7GJX2esYCoMfo75vbbY2b8f1Up1PhLWxrodzNY5EmKAbqrH69jPj7tDopTUTyPJXdusVXeBFQNqZ6aLfJUkxvU",
  "key6": "EXxbJe8gcuoE9KDLBaem6UnxoQ85SG78deYKT32z1nGNu6JEQSTgokEPkGRsoaBqJue5GqHPtAKMdSyuuQgyXdL",
  "key7": "ag8PcDX3w6mHKUAD11iMhWeScU2Qopnpxmavjf4ZCJfzBrxTKeAL9bXG45BS2s6pi824GHVFhJbrXMGjnXtVViz",
  "key8": "4attqE3pwn4wMYKXiNPmwAn4dMth1aqRup5goj7pXyqQ3cFVtGDdtoNk6KkPNems6qzJudjcCTtL74qje6jzye3D",
  "key9": "21qwkmAUcQYV19bmxiPsHAsEhQp6FwzAkSvyfSNZaQHXCp4iFqpQJ37ahLqkv59bJFFakg5D3MBjkLWffEu8Qh1M",
  "key10": "2NyFH6vphCWagDhoDZrQQdWqZsT4cx78dRiSzbmEj88wPdQpn1FeGRYebeJ1BQthiJU6s4pS6sGdRpFTGbY77RVH",
  "key11": "26kn46uPP2ENS7odxYVsm8LjgrCHY5UoqeCsHXt3PgSwsA8Va9yJjpvbwZfJy3CtG1jqUnYZ5ajVUDy65tx23Qvv",
  "key12": "zuZH1v5DXvtXiYpd8RFkY9sEaSnpML9YwvKbdFkmiASuxNVE7riPra9CJX3oSbyEyWx2hpTUwAUUiLg5FeZhbSG",
  "key13": "2uGr6QZFonmqfPvZiJBdvywZzpnrVVMuPZpKQwxB7tPbip2gUVtoP3fma7fiVyyQWvYLWS5VgTJrTmiKnWUFUtrR",
  "key14": "125broz8oCxzjCXzh5DCSCzMjnTcosJrpZ37Fm4X1PnBLNSqFkNR8isPpSStd3JxdnFwmgj74BWgxxEnvrRqEvNX",
  "key15": "4cr6Mh82ebBuhVAvAHMx4wyYxvXqgn7j2CpGfYmK1W1kt2zMVXQiBZVkToWNTXuuWhbB4rxrRmVsFJXNk2mUSB1F",
  "key16": "5zozT4fnkCk1wrMPiNGm7feqp71guaLNErpZpyNzwZmmNhP9qXiSo47Wk6WNJ9EgDjTn5M1Ue3wCRuYxzKZah8Tk",
  "key17": "2pZRuBqApBDHssGqHrJC8Hmf5TRZaR44ym8QwdZAEXJZxokr3Qw3jnFXc9o33pfWDVNLeY3E7hhtGSrShJvCwVfh",
  "key18": "3Hq2zg25m3Z8JqKSFWMg5H9EEJ4f53dEAtwUvzSZj8QQBbEom7xzHPfoZhYCdcGMAA2C4mRCNkmk1mNDWoqpRDM9",
  "key19": "4tduSqsaYw6jYtgEybQa4dQEtH7ABgGmZUsHsTGraH5yVQiHDMGejvLJr7LbUCz9P5ZpLVx38XgUGhmSraBamxhd",
  "key20": "5B45qHvVwQbfTMgYMBWfANQbiyUyUpbQXth6RnytHx9dat2oV1hcztDCAFc4gaqWhnAt31m35Wd9vwjb5j2H9SeD",
  "key21": "3XGtN9SuwKxBaunhNtCwazwua8YHo2C4nBWzpwbKXpV2aV7XU9EQxJ3NCgRD2Pf3ZPTnZN7PxWa85PAQHprjRUsf",
  "key22": "oNWTYSEj4k7wbjkawL8F2Hsn2pDqaRn3wX17jkGo8wTKDDd1Ettw21CzJabcD6CqpnCWH7e8wvokn7LgCyzyzSU",
  "key23": "3W4Xs4UjdTvSqiynMBt3bp9LGPTQT4gcyBN4XgrcYecXKNEtAetwMhARWn2Hfb5BSDemvxGWgoqUMru6wgitUypf",
  "key24": "3mhYcWxwHHuiv6PFEsStdFb1dSGQsbhjvyeZBjVAC1ast3V29xXoGMD1hy9TZsQ4iN6BxEYPZuuP9BfWEvAGBa3H",
  "key25": "3hGcTMWynDg3KbUw4JRTL8QgHq7grbdBLY6An17M2BMeW1hFwyaHxMKPPCnGE1jXLrDYCNU7AGAfh2eDD5X1FrB3",
  "key26": "2mLL4km2RD9s3give3fcfHELhGihAb13CP5RhEeELVgbUR9JbNg6kbHnZgX4rrE6yo6pFvj6WZFmfdAsu1xtrXtY",
  "key27": "3WsEctdGKBApedD9i3qQKSaKp62d2VW52DWeaB1K4r3TqyXtebVqhMVuqMb9cFTqBcqhmApcgJPND2t4g2BPNSp7",
  "key28": "3fAdzNZb5Wxo8YSoLhPcMAXb4LxjiNrJUzWLKx4suDjn9Wz45JGGjGL7Mwugi2ih6Jjmo2kLc4kgFTnCKsoYc6po",
  "key29": "54wDyc8xdxuo69HvEw3SjvAiMK5XCiGVCCFo3Sj7oG2cHDSK2AmG9jQfxAngwGg7ojbKU8GEYmNQCuktVnsmrDxb",
  "key30": "2zpzCfQnvzqBLXgpFWdUbWoQXyYHsgcqvhxWes6QYDnmuHHgEnnspFwNB3jsTMAKVn3oVUuh8QEkh89noCYXpt1A",
  "key31": "WDRJRsQtPcrKnEXWuWtkbjPY4YHSBygi6xaEyAPoM4nbjcPPuCn5fZ1qHFYiCpuyRCnWdjiTeJNcCXr97UPpvb2",
  "key32": "48ep8JQbjbBzpzfsjVdvKi7XVPMmj5rqJd6tWPonxN9rNWyBwhgU2JmZ5VgcBAPJ3T9GSizzECiD6LAQjeRhuy93",
  "key33": "2P77VJBPZnwQHc7W9e3rfGrioCvCty8HDEQkSnBKRSTotcdSeey3uzJstGy2bFQMFL7t9FVzkGDY6sXkDYg5Wekq",
  "key34": "3NAckFR2CxzM2DArHovJmX48QtJBttnSaew6VtwSCFr8Sn5x9z2A3fH6ZEVBvfZNNaQSrQM5cvDGLoEvkExxzQTL",
  "key35": "xDq4v1iam1jmVJ1jrnjqNBt9qqhQ7pkEiEARpRzkm56DpgGAAQASdBzWaHSwCcWHqzJtxCtnYZm2BStoge8cbE5",
  "key36": "5y3GnZBWy7r3SHAeqioL8cwr3AQgb1hSbmVyAoYN7V5PioZoTY49DJZsWBEPFyJ5zEpAxajCKvWqxm46jzABicH2",
  "key37": "s2bLnvJnhmap1AFY65w7N2BLCVcsfm8VFQxTCs33HppVAjahi7eNrqmVmv9abnGXHG2dyKPtKMZeUanDS39QLzQ",
  "key38": "5yVASBmQRyXkSnPrnNrTLNp33rPt12cEaHhcnF8Lj6viLWb8BLTyjGJTP8VZvoBPnFwhbRkvQpSFBa5Q3piGEBTb",
  "key39": "6uKmhuEFJP3PuLZ1CqoDSH6PFUGPLcpx1f48E4PPA1qZ5g2a7ApKMNNnspApFopPRJ8ADD6FKgJewvvVGtCQKcJ",
  "key40": "5gwCUGCvCamy61BmkKJYckPfXC6VGjgV8znoW58BiL21ZjBUD4jM94tUgk9GT2E45g4L4agwuSjWvQnizi6F7Tmb",
  "key41": "41PG6EJA7AWXyE6DYxTFXv2Rtv7VrRqLN6oomabcJe8zGdkrmYngachdTTPycAqJQPeBFwE13yE9bYvH4WQovpTB",
  "key42": "nRn5NxnP3ddAHm3Nb3Jpv8GuJ7wkgoZ83dhLM2xp5g5ZDTXq5rg38dberJb3kp7Bb9DGHwN9cd1RftT4P4T74P1",
  "key43": "31uRJTLea5HCfDb89NrBMaXm1sHueJvRgGrgLVS6niFdmuyT3DjCMvD6uFWvTXUV5WuXMhP6mdtKthbLHDWwDCdW",
  "key44": "2F7HqcyX68MHKv4jAMMRjHAxMsjcJ1hQNkcw9WnsK7vimJ2eDeFbN4vrbpXZfXRkHWWg9mSU6DYBbcJegJrzgF53",
  "key45": "2jjfL8MjF7Nw34mPFXPjxDa8FTNxXLHQa86ZLWL7EUbdUisDc5HBXHjbTXZJ5tCDjUgeJp79FurXsRfgqEPbARcT",
  "key46": "3sApY7fowUTsWRxECy8uGxWjcnMmPzMrijqgs6b2uHyPXTazXVrFeS5eSPsURouXa91bMUo6uiVdFrU1CCE2H7v"
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
