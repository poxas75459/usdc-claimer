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
    "skjLbHaegW6grpwhwefee9Jhu4z8SXDHWgPzqp5WtQLgKMG8kxSAiZqa5gWXCacck5B6SQYEdRHqbwDdXytqtAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3masR62oFZSjE8yi7x6TtmNjmKw2xcd7zA9Vk7a1TrciFEEPyPknuWHr7E5UACsFjLeF2gEk3ywidQ82XMTzVU8D",
  "key1": "5PEDGUZotpT825LY3w3v83CK9CZvW2kWmEiYD6mbdiRZpmo4GcomanKzuX9ZpZudiNTMLk1xQ8eArRbZ2sGjKXgy",
  "key2": "556zJeJTzyjCtYJNAaQvBjqUsGrBsGapCdu7vpAG7MMpUxh8VX4rziiweDejQzzQkP2KVYtU7c6ARxjNhKPg4YFU",
  "key3": "4zPdRP7jFfitLkQKsB47cQjEPM6wizKLcKT64kX5TJPY5uB6jQkeRn2GYAmkyfauhiZRq3ncpb9hSaBbL8cRx5iM",
  "key4": "Nau14DjQCZhmFJzFCwhxWzSzz9g1drMEy2FceKWeLbv9hSwBVQnYRXvkokKEoao3JAcZTN3cAFrWMNgPQeGv5Mf",
  "key5": "ydQPP3kdpMvXU4hgbLvTJTZS3cR5PyyCDFF29pph6UnUXAsNFPCvYuk1JMPgs9qH21yHkAoq2XE8Tw7Y1TcfLR5",
  "key6": "3VRqL4aGdsS5hhvQnyhvsujiqBCqcQ5dQnw9fEHcmCfcdts5pZdnc9EJ4FiNW4Zx9G2SVA48vfDuYZVvL7WNp3UF",
  "key7": "5otzd55vYi9x3JLKrNPGhiMms7KCr6oG2Z1KC3HcE3bXtqf9ydsRE5ST6pHLxVu6SBLnP9WdexfiS64tb5zhWpEx",
  "key8": "3a4eBRUFr4y3QjRpR68UaiewAUrBsRnTZ5jk8qiorVVK6V4LBpmLVVqYFK7aiCwFk228WeX5K8khCFVwwXunjjPH",
  "key9": "2nJjMiGzavRcTFGxDBoPBGASvuErVLQ8sWHbA3TUUDQ44KipQbDpMHy2nPiyHKgMhii1T2scr1ReioopXb3Pk1kw",
  "key10": "2urTTAcjp75BMxQvfqKWSq41vajf4x3vHg4TnABdeAHz31pmb1mxFWqZU83ncKGt99dcpjr2SoMo6v34Xw6dFMrB",
  "key11": "5CsJZSmoDznCNLEuWDfEn9JM52xyMxgvKd6nkQn1kDCsmY8Y5qiu82tdp2YwRfS7oRWeXNHRxXMALMJBMDgrBfwc",
  "key12": "xTVuBTbT82Hj24EYKHp5JLT1opG86oNhEfEtHMYrpfxqeGW9VJJnp9NPh7LTpWrNdxnaW9bfvm8uy6H3EeVnJav",
  "key13": "psaiE7DvVvHshy2CqE8maNkK8hd8jScQoxn4vcYYQzRFQAgHxHSabSaYYQ9wRnngta4tSs39rZSmUEbJiZqiqx1",
  "key14": "3C2czxPCrxjhR5Q1S1bhRwFHWjnNaYRxUZyGwto9fd69k52u5bwvFmqqjS3YYYw2PPefPSTuobnQfzgGVWyKKyAd",
  "key15": "2MGTjbeXaANUM6Xv14B4efC3CDEnfYBvgRh98y8YWNcYbD2VMg4YRJHKe7Aez1isVeXKpQN5gsHG7d6xXMeAWUnw",
  "key16": "2YYop9A9bYKeitGHu6KLhHfrhunDTYT5pdTReJsi8NdNnEoT4j5Ztwrv2we3GryZzM2ZxK4ps69MMJhmHg2mR6EJ",
  "key17": "2Xyx4Re14hp9wurt2GSHaMxFTi6TWNdrdZ7RcQME48hPuXxVdLicB1EhYEFgTHUsrHivwekGeWjDdruY1NmXtBWL",
  "key18": "4B7b9m7i1z1mD11nYQhACpGn81biTN2tzx1eRmqDCE5Ze5QTd1UtJ9ui5pPTiSFNTGpp8FXRSu3zrjYGfbkCLPEa",
  "key19": "3R6xgctL8PZ95TQen8Rrw7FKJ1nrVbUW9QtDXXsmjvLVf9z3jTL3UHt52jqpx1jSyuCCu33hYYTQjfJs39YLaEUW",
  "key20": "38piXF6GdixyL8B31mck5cakx7Vswexfo8a9gzAPceH76m6utMYdgvhG3MtRvdW6YjdoUVvQY2iv28DYuDzi1zbs",
  "key21": "3HPwNCKXPqrTway8Z6qbUgVEFXbYotCiZ8BfDB3s8U6fj1TqpgwkSSA3Kykn5M9zfPAPoMvjP7VDVbqMhrAq1s53",
  "key22": "3fRz8qxJFFsNzJF2ysNWMnYueCi4iF5qmqZrrWukHpkqxLrqttQHRLUazjtG1N6czHyPPoUpGvc2f4A3E7mYFM9P",
  "key23": "2unqZrVktH2BQ7jxojiVt5CF3HYSGRQY4fpeTaxKdMjxR2A3mckkU8YMVtN3UDszD32vm4MsQ8yHYjy7XrfxTQPG",
  "key24": "4KWcdMZdniWygZGGXqHStRrQ93WVN3mSLH5Mj9jbYbzgMmLT4QbDEubNmwCKderXLW2zMsnQqxCJHhNPSpHjVTgM",
  "key25": "2ZSyTVKFhVDSNMz4V4TF5WSR2X4rPjxCeitkQu6pG2BmxBuZNKDCyNdmvs1J8zh6QNNFNSkoouEch2ozv7ZWuefi",
  "key26": "57hM5UR92HgKZ5SrQDVWrcN85xeps5VvuzSYgwRuEU8Gq4L6ovNxkeswMSA3536cMLB4KUmYHqJXkAJCLSbWG1ZD",
  "key27": "3YKkR1MAZm7t5x3MgtsdPgvErpQQPUmSfpbKJCgvaXnF6t8KmMpfERTRKiZk5VWViSfh8EBroac7aYdaT8XczpRf"
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
