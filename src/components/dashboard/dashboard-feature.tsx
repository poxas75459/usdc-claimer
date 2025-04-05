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
    "4E8EuSaVGq4UGPnn2uNWRTcZQMdTFCRtrYZnoazuYMFpC3xH6uU6TzkCLAL3DhV5g6ea9M8wPUN9gShofXph6vro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "255dRtx8wSzwaTzKYUmA9cPZPytu2x3XyG1T2LX9TxyYvUc5Dwt6wDhF1FuqA2AGoLKkSktmykRyNqk4ScgwX5XD",
  "key1": "5vy2xAL3Qf3w3oAQA8aDptuPiv5nHXQBaqWTPWLbCdjPRHyKqzNKP9rUPWrAZNjesLfUbrUZqzPR53q5bPgnyyNH",
  "key2": "3uRtB4drpMFJdNtohHUUGco6R7gQq2k38eh9JMuEUenR16AKPdp4HgV4jJVPnMqKWRv1V3THiBezV1dYZY9k5ddw",
  "key3": "5eRnTN7LSn7o7fK3CHx11UZe7ZZ8hnxNr7ZTfARfUiBJ4JkrCs4T96g1sVtmbK1SbYitfvuZUzzwTtxv8cuqFtT7",
  "key4": "2jfQquvggrSDfpZfEPY568CbNPHwJnbJUK3JYRdKrMRxHqKdRLC8Tsp6tM7jiKRXrJDf7G8SyEXbbwdUr5R7fnnP",
  "key5": "M7UAYDNxDx1Q1iBBj851wDKAC4G7WVCjeZM9152iPi7Hmv89Y7D96aX9ybv5JDs4CHbHi843zUHjt18jxqHxpGx",
  "key6": "muMLsHgrgde7qE3XDyBawco4tM8J3WnTnZ8zYeaGprgBXWroAXi7kYepQC8m456xfVwTKu2xJCjTHFKkLKmFUkS",
  "key7": "5ndFsVCwwLKaZMBmqJzA5jfGJoTRcxUG8kAgTqvkTnWodpHdoSG7D9rSqqB1z8GGQMu1wGoj28NaNVF6ZnYemnam",
  "key8": "5i2skkhpwGcN7g49gLxtRxY7R95xVTTxbpJkUkD4sRGFqmeidYX5s7a5mXAcYb29WAhKVC4bG6AHWttUpoJsCcsq",
  "key9": "3TwPQyj4YtR5Nmb3b9XpDpM5x5FTGdNuZmo29E78KdWpBkaqF4gFu2M9ddF5tb7xvdpNDuC9J4Mryjr7Qi1G1fzp",
  "key10": "4gNjj4zhDL4h7Kzkzad6frQgZ5ZuqGJQiUhYqkRcjVfVT3uFV9TaUqmdBSYyuh9oHSLk8fraht1yybzFXPCJeMtV",
  "key11": "2uxxmSjvLiZzHxApsfwWabY8nyt2knCrB8Z6t3t8NUQwkdgZT2FMmUm3JkVh22jw2BVk2K4fgncXBxQM8F8agUtW",
  "key12": "2MnRM5t99jXFVtwkoHXaqLuCVvFoL5A1Vc6AZp7D85bNqAHio2b4pdWSgJUkFTTwFHx6aRcS87WP3TzTpEGmSXCU",
  "key13": "61ZHKXoBYtRXghJ1RgXg2KgNdWDoGKLW6rqFiML9iELP2bLBmMGYpNXCnoua68nm1NmWgpmFJbYtVHMSyyGtoE1x",
  "key14": "4Yy1BJyJ9ykkhHv8UGJqGSqQKJqng7MpNcokBWSaSfk3eC4SkQfHVugC2ZpF3UovVRtTiKpUEnaFS1zeqfahZSjX",
  "key15": "3UTTkMcG5PXnQSBi7LP7RPXGUMm9vCmLNVX4QHLtwiNdVFJYepVi2qh4WQA7M9wdKhT3DTrgXnrvGXtD61bCZXbR",
  "key16": "49EHw6D6gkJu3WLVHqrctCUsEDorxyBspJKQR9GRRJLJDt5cmGcnnUiVWLFac3KQEK6TEYayNGZQVSa79XGyN328",
  "key17": "4PpufXSDSS8a4eAznxa47QusVX4Y9kB28H7R8TxBr1mvF9GcZbQkEj7AnKsqAsheZ8q7XAqfvyYG7q11XpTiGNwa",
  "key18": "36aiakSRwHncHWqhbodn11qS3frzUwkQtrka5VLNDkQkK9LnBgvFPEde9fxjoqEWcWnrbn6JotVCks9oKr75s6Hy",
  "key19": "ZqTeS23nLKHmDAYXN8Mx5eCWcpcY9Dh3d71zUmQWLQoBymBUDHAQhK1guzBP1nPFkc8mvn8MUYaNysFvu1p715M",
  "key20": "2uw2wxkrKHVrmhEPRj9qSGk6KeBhNmyuDreH9nbRBE9nFxuKVsxBzMfeP8rguhPDKmWzj8tunH3UZ2HRauaw9rm7",
  "key21": "5wVBE4VRk2NJQ2d7XQWt2gNmPUzUEXaM7TH7opCovA7T1gyioo6AYrd8WEjJSB5iEi2UqLMPQpi1PvXFmYndLNJ4",
  "key22": "5ByxAMPoDvRSQnygKniSDpQtn9x2SBjLKA4sZ1M8fgKZ8bj8MUXNAjjfWnw2hYjD4AG67fWsj4NNAgwCbxjnRBXU",
  "key23": "3rwmJ9zqA47LbFzUePuP18iN6SXNvFvPAxsy32AQS4XHCLuXdfkDTzkwfjGDAFomjck593YR1oNkjJJ2JV8WiMdD",
  "key24": "4RMgKcENFAPmUfeNaqSxBRpzU9wKPNZuzQJV81x4zwdAWoeUWqguCCnZUaRF98H5GQAHDTDcEZv2tcgJdm1YNPV3",
  "key25": "4nBH1ctdJi5v44cpTx76SDBPUj4XRSdXFKudewYX9jyNFkhPoXSjsCJsq2FHcfkk4BvRsVWGnN93zWQLd9vb7taa",
  "key26": "4Kb8TapX92WtPXCaKTpMBTbmb7TMrtkBZXLG1K9V7oMFYiaqTgtnarj7zyPV11TH1cRjbEuDJfu73qJbZVCJq9oe",
  "key27": "2rp9bZztj2Yhe4DjqoQysKSFagSNJCmW4xtmoFxWvrBJXAXJXML9VXB5EPi6qfssxHdVhhcM7Sd6TXQmMMTVwzYC",
  "key28": "21v47p2pMFZcZJPDhQ9G2319fykTSxUNU7kNhM5Nc8mJFDrk5uKBgYPHq4GCXkFkERcVnfDEkbvzbNLN5KLaj5pY"
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
