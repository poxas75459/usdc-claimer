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
    "2JzensGfCZjvoMjtvhjakGELhaoBokeExSsuKGhck8Kzjy1CDHL88exjYBarRZpSzMKoSZDrupTaunViWfBkCQ2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZMKCbNgDoKWkBTKuomC7jSEnZh8ShwiMoSnwsqkW2DMrSYnSPTaheq2DY6E6WQYHX74PSLTWjfKPGfCqU8bhGHL",
  "key1": "prt5ca5tevfcyBxJ8QZFckgrtrtMjSHFAaay4ZTA78VNAhhZoKjPRDSooVToKcVwRWzyiZ9diaPdBKfei3cpjrR",
  "key2": "4drLxbLxAET6xctLL8AujWWK2WBW3XZzfYM7wG1DFCspVwUk6f53vS7P1ZaqgK8JbjKV7P5j8fUtViTALQijEX7f",
  "key3": "5J6rhccVR9pwFaBCfSXQfAek7BghBSPH932iiNML5oBJuHvoZCjeo6tpDyhCAHY7Mt6Gz4NfWN9bCiWJT1mssKzk",
  "key4": "4JotuznKPEMMoPxR2iArh8WunVpUKfetQnoEx6PTZeLqUspKQzdvm5z37ZzUo6msmZtnkXckY1LUPDUZNi1CTcCR",
  "key5": "5uDXXnnqFmbbkMTCjtfzvMZvmqx9bFy5SJvbDKwsKTSaizd74fBjL62yXhrMuquozHy99dBu2PSV5PZtELgSGRg6",
  "key6": "3JzdUbkJHTRwU24hwM6owhsm4hfBRmK16XvuGrWKEbQm2TctyKA1Zu1xb2ncyHBoeCUrGYmEWAo7Y3ESAajef1Xx",
  "key7": "6JnxYwwyM3UzhYVW9Jkqivb6rv79r9Ypi7WzmroqueRu5JJWnyMTZwtTP2CKf7DkGisPhnQRUyA1JUC8icAWuZ5",
  "key8": "37G5EbsqRE2f7LReHNmtv2Jgb4tnBddUaUqfByBu9K8pB5YCFJj6RqYbjyEFVxMuP7kKeiL3bELPpJYXAmnrvd4c",
  "key9": "kr5Qus8aeVbTs2eDcaH9UtH8Y5jhvLMPHV5b1q1a4N7RCCWPeoucVYn9poo35zEK8QhUTVbc9DgoSFyAAJX51e9",
  "key10": "5X9qFPzC677YohQkXRLRg47int4YfqPefLWBkHBPq5gjzi6tEQELFrb8mRhWtHmAi3iNFos1p1hsWB2QUFtASncp",
  "key11": "4yav2QNbAvDocZzcfnV7VUy9NziCkDGf1KUsrLgA3Vo3AGZkb2sebQBApvcUs7x8jKmZeWem6yWzs7hnp3SjmwGq",
  "key12": "5wHKiSyFCiohgmrBzwWvctjM6X4pPyCj7DzfzbFZ9LeogwAsq27GuTaExdD1eoUGfw8rC1LohHhQ8fhiq1XRYvgm",
  "key13": "2n7uri5yUb9UPh4j6RvKQE61LvazYZRwhLpHizLP918LnGAZXENJCQqXMSU1UoiWA5UeWEHqPwjzLRUT7Y76TM44",
  "key14": "2WUJrYjg7wZKApQtK5vc2YJQAqQZb1uuRiaeP8tz2jQ1mZ4jiz75wswitt4AgHiqLNHYH4u1JZpxkxSQ4xdGkntE",
  "key15": "4GuigDCVwraPkMQ1yMeVKyqufnJnc4cRq2b3G1dWrrgY57tzjUS7hoCqZZb7PfpsFTbfw5UycG7zVeahzUDErSck",
  "key16": "4hoyideZSzu6VrjWVRECzvg6XJJM2PtfVfMTG1pYRjAb5vtGTCgNhZ6siUHHF61tbbXRwazXKgnmGvqtQoVnh1qQ",
  "key17": "2ALjrEtcmcC5BpGPUgN5r7t5SXMb7EEVzqxdZ4PYnSvYjggDDbyyUAyMyLnHKF6JqYAsbgAbACJxgw4tEywM5VrV",
  "key18": "4JeowKcyLUVSzFRoX54S8CDJwvJwousXbj7u6ixvga6U2RL4MoLMdaeZYrmnCTEBHdsKtPQTSzTVnKAsdBtz7T16",
  "key19": "baAnYbvVREQ4f5pAMeJao7aRvtPV1n9emko76fwHRuY7aZh65R41dzP965GQjzW1rUmiiJh9HTFNm4DjPSBHx4P",
  "key20": "4wqssqyYVN4Qk1hHyoFgxmgyoUK5HHfbc9X2PJyHHBf6QFHrZDFWYwf89of81PXtXbjGYVFL9yXqY39Nh4HgqnNd",
  "key21": "7f41BVeX8HFkrXRnA7SEwmcvtrTMNP42a4Ajb8SxH5sjFL6rFPdDk47nCsSggKiR2ULkVYPePYXcCvJeaUntRZu",
  "key22": "3TxLdDDFGLVMFqBEbHLwxgeRfC5MA6uuPhY2hTir28t9m6tuF8ZJsDR5AdeSNusc8uuouj6dcSLhcmTNxcVGdVkt",
  "key23": "8SNwjWP722mSwELWs3GE1dqvKW7yP3PKE1W9FzkKZGL56pYgWJsU1uyURQJAExh9g4i4rmUGsXc4aGxpY2x8qCH",
  "key24": "4iraeaWvyV6Bq9JBh1ZXyV6VrK6avReDVSTEWuPhanTzALqoL7K3oFTwfKyQhBwJU8uBYPhoqupZyKwPdDfsnpnJ",
  "key25": "3EMs8z8asLa3m5nKT7CTebXDmzqTUXmXoNsH6EWKbasQF7wsGtS8GXbo8EeiP2Z9EGCpaAERoo3wAezpWgkU5hPw",
  "key26": "3fN1cLtPoiGWsANfocqZU1GutS6Exkx6xyBCxCsiRARtb8Wky6Pe1yQ7b9T9FdjKaNLTerXFAwjdibaAfgeUhcyh",
  "key27": "4vZ6AdHMq4NFwWxUTWaqd9WuNrGjxvdw8xugkCaBK6yTZapxdwNe7pt7Ubi2CzNxxvW1xhCBNk7vsGfSQkertxeZ"
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
