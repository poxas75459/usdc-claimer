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
    "8JMHUwspLg3Fu49LmNY4KSbvPck7Ut9ckpLjfEKzqsLCeTJtoZmRqjt5vYjovrwttNqNHkizHTMBWnbvDQXnZVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47P7mDCW75QjZSWS5KBt5LnejJWZix3mnANWTR6JkoRzHt3p1SMJYe4zVC4vjgzBKvWkg5L9kxynPKYqqvyyJmZD",
  "key1": "56wufmsZEoB4tgN7ZgCopRqf1kADfhN78Sb99RoxMkksVwDucN9GVtnnsCvso669B9ksdURY1QqnNuWMfUM3XBQT",
  "key2": "25xcMvWzmzKzHB6XXvu3MqPF14CS43NDWYXMoJXtBM3oRbYC3t1frLjarLWXsZZhN7AjLp4b8Hjngb7YEZMPDV8N",
  "key3": "61GbEbkmek6R6fcXkAuUanGAd1MCTHdwXyrZm3ZSVhrvYbaPUTzibCo5FysuGRjE2LrXW8KkYWUqMzUMnN3RCjaj",
  "key4": "3yeuCKaQC3Mju2wMUduL14Ynsf8xK4jKMxdKcKWEZwtNwsPLCzpDu42U2DjGtDQEUNaBpx3nxwLqpNPdRc4RkRNF",
  "key5": "4eeVDfuekk9cAE6MoFCux2v4Qtr9shBFABXdXyJMSXkJq6FTdwqCfyViuFmxY1F4wvHBAJr9V9oG2Xi2cyj8pVqq",
  "key6": "5wBLBwtGNtsUUcjTko1zhEozPteHH5T4P1jpnBqzymX9UsnAu8TLCfLkd7oRjriTJpy1baNDqabbEuvCwmDyfVy6",
  "key7": "3DqWmp5uq6fjwnujryAega9k4pAKwBzGNehrmMSHo7ZmPe9EWENRUGw2iXoCmUE4zCb1AC7EGjjmEQZizeboztrA",
  "key8": "UD9uhqxLgbW9jj4y21bwhjP7FBj2Pzid7rh8FqUDC4HWFPr4F1eTnLDvKbYqukofvuf66udJxRRWYzUKKT1yGpw",
  "key9": "5zjFGamPxrsHQd16FfQjaVh9h8cc8vifrpQ6zPPWy8DNRPPJpPzT2Cx9wn2UXXv2ZrwgfqkgjMS1eVxg42vawPCi",
  "key10": "2eK1eWcNN7ybS9obbyZaYTpaWYbEv5smcDY8kDUzmcWxSBXhVGjvEN4GUbPVBcUmKdqMNhknjKDjXJHHXuQ4bZv",
  "key11": "572ex5fBazwn2CVgYiKTMkcZSX4W2X9DzWRFPf1eECkhRZtoKcHNCunT4WUp75rWzrSN5ww3tKkRCENRkykv32MQ",
  "key12": "2gqKWasTAAfrYyxwd4duqY2g8HnVhVAtcXzJm2umnhwUms3swgDZMsH44fxqrBqrTXkWSFjVEn3YriSALMHr7A43",
  "key13": "4L12SLX8MkwAqZ12XjhBW2ccprQnNUQHT3BYpinAn9XckWHRG6Nm3CEhSqMf293S889TrWZJkS2x3QeS4VVn1x71",
  "key14": "29wHosyM6VmqpmegjZVmyv6eX2teW3yYn2PeWsU6s3cqArLTB2eepQpXyhPpbYQqwMuxonY3sdA5BKn7HDnFYgcn",
  "key15": "LKGvGJGyC2Sy5i5aPrETPFu7sJHMjyKp9VRu7ztpgDegYGpue4dS2k3X5odeXfkcwsYDqmpjo8b2uD8HqFjrQLi",
  "key16": "axfBqNRioHq6dF8X7LUbG2BHcVcSVBEy7iJhGLyAhpZaY7UYvCUcDvMRp2No7v7a1Sfrsqy7dqkpqpAz1Akp9u1",
  "key17": "M7gJCx4cokXpqiMucvufx2Qgft54ngdrtEKmLvon2UJaiFq29WieGN18Dw1L3jG7pcqwMPYF5r4uBKZ59nhsLee",
  "key18": "58SjJAoxRaR6SUudbpLZSdPsnchzERL95qVBRpp28gZitpdMYAebYzEMmuaZuWbVBN9v9H291vBQVF7LJs2y2vVG",
  "key19": "2eMGvprPGbLsi4efj1QUSnRDuFT8BG2EFovXXrTQic3UtoosKn7inXoXidtHNoehYdrRhvW8ZA7fPoh8qjAfbqDR",
  "key20": "4UwWSKu6UvoBJv9NwpyujYyGUkf7pSsCS9opHi5aU1PfnEAY7Vh6e4E9xLuHpf4brUm7yAS7GxALcgXvmZ39bYjE",
  "key21": "52jujYEXVFWfYRkdMzkLMKKJ4kuc6QQEG3tzw2vY8V1tLkjTg8YUfgo1XA7Aw9mGTbrVwdRTTRjZNsMfJcSPYKoS",
  "key22": "46vPQA3bmFYSKKqzdv3LvbejSWvt8ro7c5PmZ1k6BGi344JuKaYA2Aq7MtTonmRVqzVUs3uGfNgTTFEZzsf8j4L2",
  "key23": "3WwGqgiSZLUqDULivVYymwwK9xriPjtgT1BWt5fCWRgjBRhxp2pQkkxq9ZqNjwPn1qTSZJ1mW6eKohGrWdJrerGR",
  "key24": "Ln24Y2na7Vc2yMHa7Gj3rzZnm83CyfosjbQpWAwEMoXd9Wu9y1whecuvW29cAm2c8AcHbVCRZHxV3oQse7SxrBk",
  "key25": "5Ud1cWpJFWVFmxphmMCnGA98s7W4bYpWM2xktZvRNgpoCSNaUtqwLgaQHp56243PYhFmpHcASXqgGUxHknLrGDRq"
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
