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
    "4hKD1eNYLv2M5s8Tb4ADY8Jh4r1JAh9Wbp8djYyUqUyYiuqB8YgoVAwadYhxdzTXeMcBnkiN6Zc8u2FRTJPaRd8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BxwYtCuqHwjyxVdmhhmJr3t167kYNXFpTBCM8tX166PX5so6AM6wiJLP77edVNDgvDSx6oMFyGdiRJYUYGTihMV",
  "key1": "kdpcwD6Tjv7ezLgYDBP7NGCkWRCkRuuBpjARezGQxg82A8NYGMsbfwX8AvQJzMFTD7UjfGER6d5V6sXbrFea9wg",
  "key2": "3naMNhdxKva9afVeSnLjigT5Us67gNYt5kK1fMDPwxiHZEoXW31uVCjJBu72LjcU25hKvFGSkkk5puo5Gxmpc5QR",
  "key3": "3hZDJ7PLuEh7Njoh2ShNWdEyfoi1fcbt4FjJD3qfJQvLTkVKnod1tJYTHV7cMF4NPVUjo9JFAteqN4DB5QF3oX7H",
  "key4": "4ZNxEtatMMwkAkG9LJvNNhn6tuakbJLCWkQFvqWbgZBpTTTj1yVcHupJMXtC2z5MAzv8nD2MF8AKvh4EmsTGx27i",
  "key5": "2cPw5NFBDj3S3FcQrxY7azsCCHXB28E9Xt77Sk8dVeTrZzybWzLUvN88u4bkB6cZaxmaBqcUZcuLrP3ByToqxry3",
  "key6": "4CR9w6wzdTWQBrWWJengTL5ZWXQo7LMrhxACKsKEWNHDgn4jNx2GfDz9v4fr84QjNz23YJaJDuzZtYaoV4rLGiKb",
  "key7": "5mGWL6XqDoatkCmeQnjFRNsTcuExDH3owpCDwfcMiu221p34MvQhFntv2crZC1vbpW2mBwnJcJD6wmbfWGM84JbZ",
  "key8": "2TtP4gqzEX6g7f3BQjjxRH6YHt8FgpnpqAzM9dvnWbkWbzdM4sAdyJuk6g7hBmNqJ2cikB4w1iQh7tZtyU8EYvvC",
  "key9": "67Gc3kxWqHphjJKHNUpfrqnayYPa5g8VRGeDdwES2ZHqityDgMg8UDvADpfL8C5UqbvYd3VpynptMFycbaiGVTW4",
  "key10": "b1ttmGD6yA8vZugxyk97bSZik1UqmqWB6Uo5Mz91GMX49Kc24VtJEpjf3LMjGx5mPrTE9zdf5AL4tizKbcrNZ9H",
  "key11": "4Sf2puSBDviA1C7JGVxCnDLEd7YasEaatVAYydAPoxvifm37imM3AT5dhSVhTCErxhHrcxYrJLk4eprLa7Hs1fZg",
  "key12": "34zVQKTUbVGyTK3MgM4rHH9ZxN2wx9weMhrxzBN4wBYPE8F61f5rx1uUgksTLL6ZvPh3th7MYTiWJKm9FJX5WSUV",
  "key13": "5BruU6mdfrVHuG7efBAtjQUK1jk7srDH1PNzk7riuUhTLRf4QT7xV5NtNvYbecNKTW19qy7ekbxNDUoht9NES9zv",
  "key14": "3RWnwXF6gnUe5fCAHybZPKqUQpLEz27EVMQALPUixPkAFbkRs1CzmaBkufSCenVgqHWMsdG8cZ34Zk7mG1eEXAgL",
  "key15": "ZfYpVPkggQRoGVKibNvUy1tr14UZwZyu5vg5e5yU9GPruRnHLztqT23Cv8rNm7NTBFKxDCRAxuzJ4xdvWp1JVFS",
  "key16": "45bAswt67pDjdf7bPsWGZKQRVLE5g7XRNEetupPVXNmyebAVdadwrcGAJ6f6HDH8Z18bc9qkNPDftg8X4XJYf7DJ",
  "key17": "2NKVuWTMCsCqJNyzjT3agPemsuHviPBZ1eSq87xybrgfWogCAxkQRw43C3VfmqHZ8brkPYsCtVDGNapUccF5sma1",
  "key18": "3f4TSpwDfsGVqMPpbxe8AgZk562dwtoJjnF1MhpYzAT7DWQscTUqLSn1Z4fXeWhj6NMZHyUpHrEWZYz8pm6GQp8P",
  "key19": "3y4sWvXhfA7G4Pk1bxXwrcLS7pp4hKZhAneSiipzk2hmr9MPD5mANYAi3thbbhWHicgJ9ppXANcm9LBDJjk4LbQG",
  "key20": "67dhtPqQjrxSCNi9kVkayV2UG8BonzZnJhpkUnW3t1V5E1ZjR7h1qeNhoT9E3U1xLi6jxw5g299oV1vTcVMTxEuZ",
  "key21": "F2nDVCGtc5REG91A6NwcMGfLbkLENxmj3Z9CBE9csMEPVK4EqMHS9Cky8vj8gkUUL4d1dxrFm4TuiDCRoedhdQa",
  "key22": "srMs1G89rtYmmm3mdH1j5JuYM8kzLD1RK7nA3Apy9s53CJp32twA7DaTjKxSbw8tTbgSU9gpHh8arPspbFX3e4t",
  "key23": "5ihycgcfmTKdwfFiTBQQPpbPqPF8MGgoxGry8MCEqhzbePxT3PjwPwReCf5yVt2s8tidy9ndVwBmjzDrHweWTrHK",
  "key24": "5QFcUtDoACqi13r32bra7oEgmLQJCkrYhCtHJTP5H9HAQWnj16WsCGHc3usBiAbtjegG1GgBScvFcDixeTDGmXmA",
  "key25": "K2imaZ8B7R8xMs2YHbfJA6tBKTuRpymHevAjyg2hCC4WEGtmv4cUUnE4uww1qaKLkea1dN3B8YNqPKUC5aWmfvE",
  "key26": "4BmenVtaJnGfHzEGsJMkFFAzuLPupxugCk83QyQpkopPsbw4qbWUyhZTq342nVRnEJiNxC5unpRhvWom6TxWXj1r",
  "key27": "5ehG9Wd7p29jfMPcCjH8RvsXcxZa15Dasz6ubpCNRpWv1r1Ej3WoxXFP2428mTG3kwxwre14y7bQqHDSJvR1SRMH",
  "key28": "4Cg2FJrvDGkBPXjJTCEmtDWd3p4dBioPnpajmyHwXBzRK7APCkXcxFvhUFbs4QbH4HpGGjiEh7wbycD5AddNXe54",
  "key29": "EjFraQYfgJVjxQbD1KNji8PRWFmAGzZsWc5YXBTrxGVirUTfgJarPJJx7nJJcMBnHeG4k1NvAGSFk5zaZngU8F3",
  "key30": "4y4c65meJbFAt7fA5GFTHSgNPcmbLosZowNZAtoUbaB59RNoSfWFQaPqDZ24FRtkN8b3Zn1tumTBdMCD1iYmwToT",
  "key31": "4FiH84hq4DV2xGn79QLFkLmBdc3MLJk7E7dcqfpvqH5BAwiTN8mKaGBAXzJ6QsokJy1EUeBXBhoQo4cj5ncaAbpM",
  "key32": "5drJuFG4AVbSRRxzMVNF2LGfHXkLs4NDtLCT1a1gT2Fy4YxGt7U8aAFCeXYaBuVKFHWjZwPxZJxsVMST5fpUs6QZ",
  "key33": "2ZaEgRhcuqnz5TEHTmDL999x9GUQEHFHHaiMAPPZmiK6r2cSLayDUcFqc3sgeAGgi5fuJ7VytnykhkhzG1hBaFsc",
  "key34": "2c9RjPiv74vm8F8yXz9kDh3rZmqUMbhMg6BXqTYvCD24DsZfzBsLGY13WXYHH13t6iT4fHAksjCRYHjpALSUpeDo",
  "key35": "2PYvjYx9x8DLmYBQPT1FbBE7ArndyPJRZeBbbbv3dUGafcgjT96ZavG24XArzKkBvsjWVPWHBbDsG9G64RvKB2Sx",
  "key36": "4977Lk3VMm7FggBgD131RMtWgnj69Daeest7fht2dAieiYJNKtkCdAPrfaKJ36uf1TpjvgaqCtA17WvqKgQ5WXi9",
  "key37": "2okC8okhrucrjUdB2Y9G6VhuYLgXVC4JGtbrKFEr4sbpFZGnr4BWJLK772GKYwkmeCCwhMfZqqrEPJEQkHc1ncdD",
  "key38": "21BnBFPF3KuZM7j3QsahgT4WqB95YMnFJx66vgfKZF5g5HoNnFNp4QfFDP4J69HEf7JHZuPmDpEAJwmzXp7ZtwEu",
  "key39": "328BMMoZrJksThxbJjkVBnJ3YiKxQfN9PtZmgDgtLBuVmaqMFrij2va1yXF9eyrVGcxWJNhzpGE6ZNqh1ZKPym14",
  "key40": "3gkWvZ1ZPFS9WSHcxbsxL4WtQeLPdstNDvdz6xjCXZrUWch2ZrSshngFnd5e445HaqSVWHrLZB1g6SMPdXMfFbQK",
  "key41": "5LExyF7bqxnRHfHT5Be6DRNHJCEryTNFpjYTqAuVqU1ATtx8nEVqh9CPsPYTxQZ6dKm2Tn1wVdJ9AX5Suq2n94H9",
  "key42": "5fmZjJZvYFnB24RsJrQzLuSpQpoUSQ78yR4DE6M3kMQnAd22NvPjSGuKTTmNT1tqgZQL1Dh9geH6Wu4wpUniaqAP",
  "key43": "5XoepQoD9PwdKnpJXyEXRffZk9XdJG7ocnGvhL5L7gh1asm25YhR8a1m9YHDUEJJZg5QHnkFvpdhGmbfhH3kqQaM",
  "key44": "284FkG7ZYiwPKkEivgHxVNwTtaM52sAoSjUUgo9edFdCW2QokJ8T9E1ucE4s69HrZTe9k9xJYC1kSUDLz8WMRLHV",
  "key45": "3cAanwSXWKbdz2pRTSjzQLYVYdTtN28oBJyhM9ci39e71oZJTxCWcHbkVqMhfwAoBXAxaGrr6oMPC2Jg3mALPZCd",
  "key46": "5d1VSPKYdx5ZqcNTTCdBDCbdGA3ykfLTGWEMoaEjBHy8yNyJqJ39KPqddq3rE3kn48wVgC79TDt6ja4e6WHJHdPu"
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
