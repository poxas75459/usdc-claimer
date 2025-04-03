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
    "3bqLy3qx83jukuMZt3JkuJ9fqx7T2k1sJ8kBmviGVzjRSBtGDP4CVL3BieSoxSuhxHwsu1wgQPjsCGdXPJCL8MMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y5ePPyeENEo5VBvErLiSfrVc1PT5JSDvYbQZu5gnqhBsx3gpLNYeEkCnZEXMYCVF1xZ5iwn8BRtpSRE2V5wkiEe",
  "key1": "5z23L92a5sxt2uGXxtfHhciyyrhsEn3QC839b89LGy39sREeKUKttT7XMDxNfbCC9mMV2xUH33CS7RSFR9YP1yuC",
  "key2": "52SJeuUFZVZPHC8iBpS87Di11wakYCzbP2wg94DNdn26tBzxTa8wxbCY95UwQu45d6kcHJTZSkM8Q6iYzVHCjLGD",
  "key3": "2Qmv3Jq7LaVE9qVB9NRxkw2b9og5rh2Ra1EuGS3Z3ELaVvvz7gBSQFZaeGeyjbU4AL6N116xgQJb7RjMWQuBmvLh",
  "key4": "67ScKL32KvnfxM1CMz2UiAvYRi4uiSZb9C8Yb3J4fmXx7q9U7YSsj25Foof7wVpV6yegj4iebJcP3KomPvn97qMV",
  "key5": "5DRCMW996mHfNTjhAWgYYUhtEpGBLQ56M7Cw8omnc8riYFZYkuMyNBjSHWs3rK7cxC9R4GPvibd4EvMJ6kNq2hfH",
  "key6": "2fd8tuzxawcGdTu9XvSCPAtAJWuLeBYH4yDvF47yvACV8N6iJJpf2uEqLC5RaBb85Fdc2Dz2VsfHqC8ijBLMeFjG",
  "key7": "4tLzBU5xPnpnkYmZtzFzRPk3xqdtjXtsHLT4xE3HpurwSA2KV9MW8ZWSAZU7GTNVNP7n3TQRe62fizvBjEUECdHM",
  "key8": "3zAEdkRSYvMwXtXBqSvXPfBFxL79RjKobr56vUtq1WUSrNY4nCozrYNeLphcubUqvaMij27kFFhWCT35ma4HiP78",
  "key9": "3Q1gUPVLwU9NwvwDaonscJRi894xiUiSmwZuKS1orAoLMq7W32kp2Tx1hkDn4xJFeiD61xex9hi8NEUZUi6agTH6",
  "key10": "4MLmKsrd1t5p8vTGnVbjMLgRgxhseXoLL3187k2cUhFHwgFkG9wmVezUnkmdAyRx8HQ5LFDKCBHCd4Gd5fEFG6RJ",
  "key11": "29fCjMLocibzvYX6W3Zk2J1RBde67kKKUiQ3iYGbUHFtthH7jpWYFVLdfaQQhuvnvzG7QNdpM6DwBW1jDyS2TLji",
  "key12": "A2brrN9Wn9Qe4Vo2Y5xHt3eeViwK8T7kFhSzauowRUx1vXRKmLEAyTRyyu5XxqS4ModvzUXVnWXj3gYrPT82Uy7",
  "key13": "59a7SNnnawQVZdkT2qMcgV5RoTLmDCjKuoYz7jbytXoNPG2PQFPV9He7zUmfpj7wfKXRR8U6J7nGPqJbXu67jcB3",
  "key14": "2pDA6KYvMJiiGfF3nvYu5bktTwa1GvLCcSniq8BXSHZmPf9nMdTkSwbTZNXVqRSZPgLp4rAombw3sxYsBW3PzsN8",
  "key15": "2DLpaBaDKTj8aufemFMukgBXGb3eFKqXdBZihukMu4gkcZShyrpD937WBs2p7kF1vfjhwhsjLGohYF1GzMhUaE1o",
  "key16": "3YqXKwaMxiD7GiWZeRmgRLcCh3uPEyAVVGFuxT9HiTGhikkkXddykykb6fWxDnpvxaKHHJ7hiwhs5gvWBhUvcFe8",
  "key17": "2Z6bzsoCghiwXUcG9bPvtwQMt5JghNvKVb26KJKi3tEMvyAuButzKsG5Gmij2jJJR5KwWVtozdE2mS9HxhXNys61",
  "key18": "5b5DeFg6dfeDTkBB7BxLWGBvQaws8BjttNTQaLyrwYFU1eZ884fnoMGCcEyP92BvyM1DWqoDisJ2GHknmNzibDFc",
  "key19": "41ui3ZvX9rNkfTt8E6CmiwkCZYHADgt38X8hehWT13FNL34uiYxjG66ZFJcF7Tcs9k3LZZmZtLdc6zoLp2aRWPuK",
  "key20": "2Nx4DqhgQku9su4Tu8mkvgQYYqtDq4eMkKJgfgT6d7Ez71JTakJsfG6iLHmw41zsea4WhmBNXwapZKHpot8Uf5Eo",
  "key21": "2jPG1yMAB7ixE2giBD5norQMdLFceNef8FmGPKSh3gG5uR5xMqSDyysF4UdsZH1yNhtoiFGW2twdquP7Lm4d4kJX",
  "key22": "3pW5uD9yKgwjJPghvkohExG63Fa3yDKgTu4ttL7npgTjsdzLLKN1HvNcypEev6fLaR7NmoDrFwqm6ow4XCwPiymk",
  "key23": "2r6eG8AbahLYtC6mgbh5UJCvXCyU5cvDUb4wNCLJQAzXYijrPz9F3yo5G33FFZXA1q6hNwFMmgSZuYQ39VzL3dgS",
  "key24": "5pdgie8A2SPfrsisX4dvjndedVLZkMh5rrrzTXhCgLVKKa7Jh85jpvph3oeT6ekK1qj6p3BD28nyHSGtFYAd3mtT",
  "key25": "2XNnMVUE8XirPej9bL6n4LKUG1Qq6jQyH3jpRPMfgG5HTMMNB94V4CgDU5xVn5m3dZoy3irZs6fyxSJjWGExKXUu",
  "key26": "36G8nyivfjRuv9FZha4giPtCfe9oFhny6mzcTaAQByFdsGKwaoFbuxkzLmuidY1hoCCtjwqZqFkMQcFbVGiBYnkh",
  "key27": "5PdjoDQqnFrcR7jY7gA6LXA6YiTM8EjNxcnyQ6wBiUyjVG1oPdSUMTAr8PYggKE9HoA83fJ25tbcmd7KutvSnHWU",
  "key28": "5vvjJNFYzwg6WZUvd43DS1uCgKQigqnyPwPc3MSs9mpNiq1SKGtoDbZppbafmzvhSX7agjuT91CJZfwyQs8karYR"
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
