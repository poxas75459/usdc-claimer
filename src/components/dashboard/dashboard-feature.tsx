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
    "3mhV2kyvMA39292Sr8tbPQfgyToKozeF1TARXe9FtqXzo7LZWzLUavQKDp1gtZLC2dmkYkkDVXNMe4D2nhBsN6qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jGzo69Ss282Jw3pUqbi3faJaRWGJL5nViDgb94ncociEHs3989CFXBcdVC8rikPyRrvE3FwWqsxnJKtgq1k7SwC",
  "key1": "5S6Ei43gB6d555NoJtF5cjZGEt89x5KvVN35Exwh9a2fsiiyY18cgHK7NJHznJbJTDLKBaZTjGLL8JSZ17FXawxz",
  "key2": "447NniHTeoWnG55zFnkfWAopSd2PL5HUjY1SPUHMRabkyRhufjrMtfrvfx6w66qrsrtaqSTjxXZP9AHZthFAo2pa",
  "key3": "2b7xC32cHdD7AWzNPQuy2rAjqokcXLpzgUxNeLCLhUHEqvthmtTz9PkNM7aSCZjiaRG4ArTc1paNZJRDVia8G6g3",
  "key4": "5xgUaDUMWHPejAtXxaDybfiTikzk1wiQweG8AM5LqCFnqeLbNXt4uiRhLLMVcRsRfKFRL5K4FcJ5xe5XAm66DqSi",
  "key5": "276ua7UDQ3wogWLDkq4WsYYtEEqTTpmynYFDaiC9AerD93wCmpEL5B65wx5zLzicBV4ZjkZiySj566ANma1vuw1C",
  "key6": "WsN5ue5nYYsvWmMcsXJZmem5x6ErMscDhhNEkNNsNvU5tJFuBh1igkkAARr6c45U6SdsgoCis6dTwPzCaRLjrGJ",
  "key7": "2T6NwSGZ4J6uDxiDcWYq75QRYw524iKyi1jhkJUdaWcnkHZ4ytSAJk7N22PaBjPveM9WC1RqVzgQnDcS8AmcvQg2",
  "key8": "3zkWKP4yg3RzW5zrWmHtDBvXLRAcJj66wDxNSVvxRxKSoGHkeRmFE8N6hGUUKom5mhdQigvtuzsu8CT9tGvpEySp",
  "key9": "2etYP1g4J62KfTGkXWeAuNj1CwjmXBP5HNSrzWRXvci6M9vWUS32fC6SykEjXZaHN3yWRPXRwbs4B7DzxRsLVJLZ",
  "key10": "3ANGxvFJ7XbfpCw6GrHZoKK3e3mV1ek8v5uyB4Dd37gnU1xExvuqwxQ2eeMZJ8CSN9diuXKsWFznjfgkrSZEEFTn",
  "key11": "qpggBBevWtZae4tT8wxZgG3hvLU5y6G7GzBfyoRQUUwUmzNjekdaD1G24qrd3mgkMZcBNwuQYAQHvaADWB3Qbgd",
  "key12": "3gpDeeM86j3DVbhW8TwsnxC7VtFMNwPcqe9SpYZPL2RB75tcorrxy5KFA2r7bsAv7aKMYbLHwNc1vG5MSH4ZZyXb",
  "key13": "3x3yE3iXBMLziE93QuT9eTVoQUGqcjKaVN6CTDDYf2ZQhY878xj4JuTgTaPL4KydLrAD5uKBe4nLLyG5UnavU3ib",
  "key14": "3fo7DhMqCdhaj4dAXuNk5Rk96tqPXW9NHYzqLwVEFtob5qEoqzJXrAiVCjDHds2ExUY1ktLbwfUsZJDnqc2pHgqV",
  "key15": "5juESXbfBu24kFBf2sb4EUXo86oRmNfHfJ1YbVLgAZQqR1zxpbtKRjo3KLzsjj3EtWChygpJTipzW9JMgAozhJ7h",
  "key16": "4ouZeE687HCbqAhbcdrHaqAEXdUZqwcbBw5wkymG2fnjXvehn2LfkCvHnfyU8oS74RGp1SkUvjgR4RTUYULUq2Jt",
  "key17": "3VUCmEFWyxh8JWRnkKspU3hHRa1B4nQQDRfztfyb7bwpXFQiEUX6iWNxsLS4HCsENAVqxAap5EbhraE3by2WLCr7",
  "key18": "41QJW1L1BkS9CYGqZzG5utPLgLeGwd2YPmAzWRSXMyKQ9wjHqUrXtEHtK7E4SFstAtcnr9ejSj6wn1hmhLFkwNxJ",
  "key19": "3RKhjD4Vx6qm9oJ6kZhnPk12gP3BNMDktL5hyAsdC9gnrZqJKQ46q55eGdzjT6SoY3B2RFB2zmfEMKghZVcFcWvH",
  "key20": "336ZPCeDc5ZMdyg8pKCxniPjX6aRdbJRAdeJWMpu74ADEi3psZ7REeH3Sz6FYXeJQ9eygUu4R63gEkEus9St83ia",
  "key21": "4GfbdNNBybcQM5Df2T3sPLMhdPo4c4CBt5Dxq8NuozbiSqZnfSorjKfQpyVNg5bEa2jjUfp3vzDFLGfMq5VfShPq",
  "key22": "5rfwQuBCp3SdiSGXpd6ySvQ8VtAcXJxqPRMEsA5oxTTcyud3xMUr6iCivJ8mXMTQycVKA9YpriqXsVnpeAga3nTG",
  "key23": "4w4ds6fzi33evbe4yYCMMRoWt1oqNhHVYduVgA4NrRKvAWzVUoetLBRALbrZbGXb6jHq2zqxoBwjFZSG54i2ufa",
  "key24": "3oHUMQhFn2tbxcG1sWEem8ZxyXtrRaAJBfPaHLpARBXT2ggrgZowpgqEvDGvj1JjBosCgCaWWSDRmdoSKsyPE4Rb"
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
