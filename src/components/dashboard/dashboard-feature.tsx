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
    "41nfvyh6LtH5wCZyDJrdLyvy8XN8mCaGcEo66jzwwsXma1xjRmL5dwTXXi3jVtCsDoh7RCApc8cbKWgFoEkFtDPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WW5vJ32h341KsFAyX61cf1qri6zXWC22912jSv1VMH8F7PyTYkfo3p6za314iuSPahaDZBrGe55oSipz8cQ2tA3",
  "key1": "4Xtp5KygAHDcwTcK81Ze6TnkDcN8DzpUjmR3xuvyH6wF3SELTVjxo7JBLBiCAZ4TySQcG3h5x7L1sZgscoZbQMDB",
  "key2": "3kMMfPAbfQdSbuT8aLLVWxLrZr4FSqvcR3fnfw61fTKYeysrRBxCJL1gBxiFEvwmrZeHRwmTBfbBRYJ2iXe4YYE2",
  "key3": "2RE5TPg49FN14RTDh6cuAvxc3GoApTTskK6q5Nyh23rAwToB9LSCMD5R2AdzXgcXv9VB6JKL5une5pyURD5rHB2W",
  "key4": "4Yd7toRSHA2inND8fmRzZA6C3sTYHTwGtuSN1KCXdjLXK38YTBtJCDy3NYZQQ4ZBEErZAgqbfLbtzynabaRxF1zw",
  "key5": "RhzNr8HBWmF1BNQUPeJJZ2Rggz3jAs9sYGKWscmmLDVAyb98p8EnF1vcPa88g1KhobSjDYB6yHVezsT4PZErUt8",
  "key6": "3GfGQhjvPnGVSZoZFEekBXWv1vBRE8ExGaADLuHXXTqVtUrdKhFb4qBm4sme98NPe71tB1APx41hcGso69ngGNVR",
  "key7": "24ktE98AearTmt9fiyYCbisvArKXVCaCwPcimD4prb7FbvaShMQM4JsSpT7ERvuphMquz61om7nKf2BuH6oBWTWt",
  "key8": "5ixLdrtPq9sTQ3wmtLe7EFaMkVorkjp15xrZr4EjqqF82cKv7sfwfUqhwUxXKFjaSugecPFSKsNsfXG7uLKre1C8",
  "key9": "6tVgA3EDWaqVaLNjeJH2uBwwyfUdVat8S5jsDjnDVKDefG8ZdztW4LxRVXYnxeWbSh5PFhBgzxoGaopiTs5T9Yx",
  "key10": "2xsfT729QDo2bXv1zg99iQGyovTp4HLwGzKt5omqfsLUa5pkRgHqVkPCDv8ycK8aViYp21Vu73JWMLfEUH3nYK3J",
  "key11": "4dDZoUMa4cWqmRD9vShSgcRuSUpeD9keHsxTco2bkeSvMsEPR2divt9aQyd4wBc1RBU8pB31mSD6D7fprApgkTE8",
  "key12": "5apWKnuvbFGZ43AGa9q14KYoDkMwjtmjT1ZULdqc6xiujMpcoo8EYfdvrpWgyHKNzb8rCLRtJqS7R7QdaKxDk8fE",
  "key13": "31uXASAaE25qstZSHDigDZGMJ5JXmiPtQEgZ3c5Bf6MJd7AFgiSiDjWcrry6TP9FoBC9FLsVXNtXbEVpN7UrBaRn",
  "key14": "6aQhj2wEeWKz9dxyyfhtnHmccAig1akJUUvUNvEhYxwESH1PUz1E1reWT9F9ZPMQFNj6oifPfdw3bMitdEnTQ2x",
  "key15": "3osd845Jsrjymc7tcQssY9UTyjt5ybq2rjFhqiGskd4sj6UA1zKz8QzSwZ4hweVJ16ZeJxgkf6k8ZsY5c8eRmgga",
  "key16": "2ia7a4qDyTjHhLK9KifTgbZsYx739fMGMVvKx16Jg2nY1pQ8t4wu3AVfiaWuNs4b7DQYnixSeKz441i6eBFWHB3N",
  "key17": "5GrrgSUdncmCKdmbX8rbyY69Bt7E9RvhfE9rTvuYURM3iiVgvqdLAt8bcNdpXd34ngbxKoBcZGozLBY7GFwgmaJR",
  "key18": "5xzjPzrdANxtCpXhxmS4K2eKawUQuxor9jMhQabfv7bzSr6KinFWuLSfUKx4XhT7EWx7JNciXFP1P79jFf4cAeNr",
  "key19": "3APttAdx9moZp7ZHABezXn9cophZGmYLEisaXFJyaW18ACMSDyEw5kzTTQ4BHA4S1spqhfNn26QVAcUcBZhVC8Pe",
  "key20": "4PgtRPyhSzZYAgLmDwUoXuYcKfBrXqy8r5Nzf7MXCU1c6FP1aa8B2pcRxCgVedN3fwC1wV4qaLT9XJfXgqjFR2N3",
  "key21": "9u6S1ydseS1N86uvuaWM4zWnorRWVHQp3QmrJVyz92UsxEg79rvoWJ9C5qAYJSP1ETDzydhQZHy8J8WGpmN1ptq",
  "key22": "4ceAdAnXcccCwiC2ZfpQK9VPZJYf1LwB5xH6KNgee5WVDpyzCNGpa6pzzRYcGYSP35ZscjwVMzpoHeTJTzWzWfji",
  "key23": "3rQkFnyRym1jyS9SN4KbeTHVrLkUfe9xiiSQE5KtTqvxVq4t3GLEyArnoEwNsyR7h3Xk8ujd2P9XQWvsmv2nWREi",
  "key24": "3F7mmGRRmUgz9YXZHQ4E6C5zqiFXgKjJ1b5eXz3NxiGwKeo8GhUGDNaZaDmqLTnStJYJVDjwxZxVkvHLtAHiUSfq",
  "key25": "4P8ZrjKz2inBdMA6vTQdfYY71CXfv3VHpPWwn1QMBF4Gxqixpymn8E5hft3RZTn1hMDBvrFYB8YSTdrdL1kND4EZ",
  "key26": "2H1rE5pXeuABWBghbHChguFMsgRaVbmH2vj3bMgwKNk8SX5j7yryZTV6ajB1tTrSVxp91yVvLfkSUu5VTzrZbCVu",
  "key27": "5SPbvV3ANn7EsQ4FFE1187J46nLEb2sUZ1ZEGzdN1vggWj222J7hvHahkQjLgAirPR6hdZTaAZrbT25e28rhEGME",
  "key28": "5QhuY97MHb4ZTfJ9EnFRgGZGZmPaLL8f3DxSMW6mCzPmwf6QGbhmZTd4dwzYoxkuZUECFnpDfyPfYKszZof8HTMC",
  "key29": "28bR3xZamT7eW9676nXF3dBcWruUGcTVSgtT9rq2TNdU87bYX6uJj89EsYUfGVeCFjAnpanVZfGU4pTTEkyN5nZM",
  "key30": "219xSwyrWpTFWYCe3GUmw148KsefSYiAxUenQuPZdqkEGYYvoUt2Qtm9NDMQ14zHPAwxFiE3aaifafymVJVBu6gQ",
  "key31": "5t4PxYiEZ2DtQHFCdy2MGdFh3NQNcqS8G9rt1R9WherR1F5s8uc5eFeifvShQaHwDn5GGoceX9FaUqMH6JZv4a3v",
  "key32": "2YgX9x8sMMoR3pRojffnB2LFmr1pCGpfUZC6HjBDEPpuibGrTUVq5YymfTNMpwSzTqtP8KAN7Qm6iXWM18EvxQfu",
  "key33": "2KSnczKawHS9kHRdJUL6XuGSDEmybmJZn4CwH6bchsXNE28y3U4FfNCrYDRRokKHVxHUJfGk9uYH44bobMtno74i",
  "key34": "2G1NnQ13gmZbXQznQkG1dGgLyYP788xkGfRFcoVFGspqP1NPZuMuA2ATUiX92Pt9Lf75Du7mj1MCFLiUAcMCvDEF",
  "key35": "349Y8HFzjxmFZW6x7gVAy2mM3J7J9PgeBpmDBqwvvvETUBfwRPui5p1NKohdgYoWNzcCST1TwLzRP9SvhT6dyh8H",
  "key36": "5YW87WxsEwQbDd2DB4kcfEeFrwq6KFiBFYDXbAEtU3dSjAZx2ssQYzNF9nMtHRqQfmBdUBNKTLd6tTZFwt2xAVv8",
  "key37": "3663PuNpSjDYePqAQoXLJZMgHvwugGE3RGETgDFot6BRLqvoKoy3ui1mr14PC1aW6VP1GbaSYcsyxymrbJVz9ed2",
  "key38": "4wKf6hTRQFNy9jj6ma5AZ6pMaWcKSCZXaDn3jm4ixC5XW5UT15E19dPBFRxqWnYg3S5stZt9qqsEKtzmkqPwv7uA",
  "key39": "2SDpFWYB5zQgAS548WACkGqRRJ26WCdVnyvqesS9sYiPeVqKcEENpMwXScuZ6wAd4X3Nu5wkMhMNTpkZRqnH33Nt",
  "key40": "5fKUzGLCiWkBf79o9obtgKsKmwzb1jnkLTwV8CR11CDn5VzwyHF6gbmk33SvJKB4nYFnvdVrYgThciGVzXTmyDKY",
  "key41": "2owC4s8qzfwQ1QQNfu9iJWzW1dBonx1axXyEoBibKiUWs97Zb6EZuFdtWbUPLLwScMFtQdYx4oBtaWuDj22wuF7p"
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
