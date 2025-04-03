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
    "2UMyrsCTx4ffW1oH9jDzUjCjSfSqYQSbAjSuJJ7gtv8FEN6nTbmBstL7BcjCMqxrCdbwxvhh7Q1EDE5t7esf1kRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ts8J9xbQaqJSMrQYj8MbJgwakVAgGoonnuQfroXydSP5x8rX5VgrhhkRYhxcc7ZE5dm2w55kM2AUAjJpKoStSoJ",
  "key1": "4XbxmHV9rhJb2y1QBeVsymCppzikGQYZQvNSkfLBHu8jFfBRZ9DPtUfb5PBNerhfK5ZMTmnyb3GbF2Zbk41yBSvt",
  "key2": "4644kg7Ef8p5G3gE8x6JZ6hYbsfGUovRPmFwFbh3jKyQNepbTB1vZA3EMsEwLxWr24BwMpmuZweKjqtQbC6jeuBr",
  "key3": "59sHj8zDzwioYzzKs4hHFHMfcHEv7M1fEcLTX6hg72nsu3CP9bhB37nnRixe1XmoC3BtpaUQGcWrbMRgQnSTEKQ9",
  "key4": "4xH6Xg8U9VvYvQa5uSDVnkWtEfVEo8QirGuu2nEchtuWx3TaJnbb6VwUrJttruSki7Ki1LzgT3nsYGXh4vEKvo5h",
  "key5": "2tUAfmmkkLvj4Y6anSJtcBWEydj8z5res5BZ4BacfE37Swo2YA3tHEFL2T18uEFanaUG4bDaFMyXixq6hJnR7dZX",
  "key6": "4uG9S15moLFQkwXpkr54eiJtTTS5tcoBZy7p463iUv591wGGh3AdNtsjmVK4cQxGns4yz8FMvQoEjSFEYLRtagR7",
  "key7": "23nP93XrSGmSSerbtWQSJjYh8Wi3WzVM3SZ14ubVAQdWuGs7xTxPKuJeNWJbt3ifGKz7GUcuWj48wnNASJZcKGkM",
  "key8": "4dzWrCgL2oASQ9CVhCfKzaxT22PoccrbZuezsibXy6GfZAFNHuGbJv8E4NrnnSLvW9GLcG6THRZu5V4Jqo6YSCNo",
  "key9": "fUpBTwYfbqKh5LbGSBZxbP2Xhd5fLTAUnyL3AJ9Jt45wJtPvmTbRZzqQLp1WVCvioeP3gNsbu4HpmEH7LnrtVvj",
  "key10": "3vtK3B8ZK6LrvEFDW3u4wGah6a2JU26zpva3gG3AHRedRi7XGuBE4oT2b3VWbyNd4b5ZEgrcSn3XkVHJLoQW1TaK",
  "key11": "uCQzYizz71ZGHhuDnzMMkXx4pCEgq5WJdha5Waogui1pgPWMyFtBf4CGaUBbiniKDuxoDsU6ZLgcgiqQj8YFNgg",
  "key12": "5TakMHyK1nAVdJ7ooJkfA6ChEVg5NV65mpSPWWVRczw3Tmy6m4TFYyUWQqk8nRSoX2K5B9gvC9rdKL9R1rmv3aTY",
  "key13": "3XP2g2mYJ7bkDsrMdp2S89P7JQmvfx6rMAEefoKGLt9czrqUbGrecBs74bYYqHn8T3oVnXnmr2wRmq2kuuxQtdqv",
  "key14": "4AQV24sqCGSRLcSUHjsnM1LAKBTwSUun4eLaLwFDqR5hK3D2ZAV6VjMSGUVZWdWRi6zW6TDyQRdRoYM2Y3uaGiaH",
  "key15": "28AFkaHbdeRH2aSSACzjPdU1fVuMFgwHrR9v6nknKedpCqN4268EFPBiTHWuhs9SsEueiW5gAzBNGa9Ztx7mcdEn",
  "key16": "4cUjprBYvKgS9fyEJhoWHaTuL8bqkRnuBj6g6wxWjm4SfRJaZEZkZuXpmS1dx72ngHuVvxEWaMKU8ReJUoofCRPH",
  "key17": "5M3AFwwkFb511XTjMQFLVFrnYxrPR11CihVzSedqECd68je13ZuXiZ3TeMMYWNHsGEWbDjK2x6kmJ8dtPSqGqZQq",
  "key18": "49A1kzjXSqaa6cVmvKcEMMFLnjdqx9g9WUjnC7GzdKamRxkFo5d1f8zLEae67soQzKWQBfnbeyVQsGGHrFGJwiNE",
  "key19": "61MSHDFjNE6tDvEuHSiAPWJMV7jo6aRfFDCw1BrQQSktY4dLHgaAVHy5ukaAHT1CYbPPhnXetia752k42TJvJSPm",
  "key20": "2hg3Xyvo594g8jWSj6QGJJJTXTuq51K5tP4VC2vQnaXBeK3Vhc3XUfuLP6tNm6Cb2Gqfew47kuPT3nH8DbBvxfAd",
  "key21": "1z3RhVPuEf9QWFPLp4DPjH6Mz7q9S1XZjfEjwFKMh8hbfPgwYyHfT17tg7Uuw2db8Jt7dywYcS2LAk5cMUT4JTu",
  "key22": "3v1q5XYAuSBfTAFXmarkxUv68whMy4pG1vZQ5tHjuRNHe83Y8YJKPueEcNP8hDmSDjR3iDUwpifXc5YtYk3qgMX7",
  "key23": "3cuTH6k5JNvJAfLbDyrQb6jkvvZYb3GXyg8vMCMs2Z941esQMfDXTW3LBoezvN61A8gcaPm3EQpX9onKwYRPEizo",
  "key24": "5b3RvVhJftvhy2mHAzBXLHDQoe6UxoLdkXjG9mopsMbCtcSGfk8SfeeGxsGm1ZjgmLJWHUajQFk2Q9T1yb9cVg9Q",
  "key25": "5JvRfTS3WVd2hP3aC6mTiGL1vq6jx9CxHdCqSUK57ScEEGdgnWkqPCAm37dao9Md84nS1prFJJAJy9jRgDEwM9Q4",
  "key26": "62vQLPxhUDUH9Vs2oWCCtsoe6UoXDxK5xwMCCJ8j1zn28rxZfCHChJa693GU6WpNXDyRTRBb8mKZUqyrMLxdxaRt"
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
