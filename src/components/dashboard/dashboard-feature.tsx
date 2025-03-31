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
    "2nJKcHJu7afcSassqAAQ1vEqZTqdBw3bMBYFpfJRRmbxrLoZgSpPJ6BxM1EFVp6tZs1h8u3B22pDyGQruRuW9rbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "feht3sX7u8GBLLhAX3iiQkWujvmnXh3YmWm6NJiTs2NAiXQ6fJHALurWiv74SypcA6VCS1yaEe8U1u9mvkEtkTf",
  "key1": "58q7BicF5w8ymsZZ8J21RbBkKWKD5U8boijc3C5Erzktn8Djeoinz3PMxvs4BL7TtTR6x9h86nWyXk4NSvLG7YMr",
  "key2": "2Bm6avsnFSkBbtehLUEfsA6YGkijj8JfPtMw8y8GLqr3V6Zq4deNkzYBbHXaRx3y1pLZ8856Yo7vzF4ViysgYbzy",
  "key3": "57c1eW3G7UpJkv87XEuejbV2kv8VwmYALTHNt7KJQAQvoL8BG4zgMrcJM8KAB2wshs8FFjVK5Zvne38DCpNqcfQZ",
  "key4": "54KBM11nWPHh8mgiCHaRowXcaDMyFEATWhvFoDjj1fJidkHGxhYN5VyvjbtzgZDwjY3BbphByWnyYf7cqLqaP3cB",
  "key5": "2ShGfhu9DZiTyDH9cHPfYz3114C3dDtwr6XwKHkaLJUw96ZCLcbNfxyWEnz5uGjGcCJt3MVSi3rj6mkZ38TJT5v7",
  "key6": "2r1T2dKf6G7ucM8T1pXmvSFCRxUgM6pV6dsNBgXHNwjDfRwgqWsZwsH8yXHJrTx5tvB7LT5cXZZUGcY6bsFxw2b6",
  "key7": "25frUBE5yKwaCi57K8kcoZhM5wpE7B1Dais8gQGz6t6Ve6R8n91yNLVamLB3JeGqMaZAkqQPsUSpQX2Auf84iJbE",
  "key8": "5KSKNZNj1CBWyED3GRvTrhfeYEQwCu7Dtu4xWgyBFzkgjwqh5BdMYMA4bub7capyaSNQoD963vNRAPqJPQDKGC7o",
  "key9": "4n569jHc3mi9FLEqSLw7rqknQcGUJtRuAEE9WZPUGQspCjk4wBwnNbs6RKPy1v94cVkfcn9xDiRWFhv862qWtqm9",
  "key10": "3qVYf6bh9noXyjyGXbjkSsCCMvt6rZ5jasdJdyH6M1JkPZgDVmbxpMRfMx8SQQnmiLCt933SfAtgxi55V1vtswzX",
  "key11": "5qs7tth9FTbT5kf9oH34TMwBvWXKgemdvLXKD9fFrdocRywd9iNbadFkqeCVPtDkDZHfEWuesjpKc4XxVrnb1eNY",
  "key12": "5Y4ptrYic1KkStjAxSS74rfX7KT9Y3jBkD88gZfoVZkQgnc1UuqKUqV8fV4roxDdHYBV9SUEL1dMpV6XbyxQJVuE",
  "key13": "282stPkDShXdVsNLT2AeAbxA1k4VkDWNDjYpC1x3TpcfQLMK1WukXt2VLFmeTxpDuGt52vNcaUkniJQJgifF5dde",
  "key14": "3N9skRZNn52dCfrmM9sYQ2CrnpeSqRifAuY6zf9ZvBeZBb1ypw2DXMSzkSyB2i8cEF8a5zsCfSEgMQ2Tww8vyaZZ",
  "key15": "2HGD46VGVaAgjtKdNZ5zkPJk1dTc8EDubZeBtGSQ5XzgyL9VGs5SjWq8cxBUmScKy4v4YUy5raBCKuGLYo6vp1Pr",
  "key16": "kBTioXiDB8UjD3Er3HJi4bZAqgZ6KoFRVW41bunFep4T8ad4kGhBpDiyPWjEZaMmXYR2m1WvtpkC7p9yVwARmaG",
  "key17": "4BGnadrti538gAzFe58KJci9HF68BQcHjDW44oEFWuPyPaisSUqFCEjASMsY5NU2M9ApsDgh2AoeSt2bbqYRwkiL",
  "key18": "4Ef1k6jcc7pwVyTbK4k4xEZKctEUtGMK3vpW5T5CNe45DnydxoMTBdfZSGDEdWCtmnJFApYVE411XX91EGHQMifi",
  "key19": "3UYNHGgcrstVeFaWDNK8YhzKypvgdBNxDVk2tPsaUUXsBy2w8JQ8eqPvr3nFhB8iXZPfu9XyqhNf4e7kGhd9bKp9",
  "key20": "4XzmUPhviWDdNybgNS6N9LK44NUsyuS4msVGCyEVL4zDWvyXXjeayeB7gJHa3aksqnhCfjoKYdVRc9FMwJaY5U2h",
  "key21": "3GJKKjKUohNfM9HEyAnn2TSrgd8gB5u4c59shbNs5QxqKec5WF84z2v3oU5ZRZBcxKvWdFjgrfjSeYtvdE5j2rV2",
  "key22": "MvvNa6B7QSfMydpfhZok91FvXLE36Hq8WMUkP5sSxar2sMLrYymqgw5SitR6QANe2raETdWBtVQXH2yWfFJ1G58",
  "key23": "4sZxWXb1oUng1wnJWj7qJT4acJnwMuMrneHTmw9vxca2u8gkPiuLJsEYZqttYUf9P8Q44aMw8huD75h5bNN3e36r",
  "key24": "2UB8Nnko2RXgnVuyd4dXy1CPQJZKkpngcfHewqeQbPfx2hwJ1PBAL3K2SCNVt6dQxyfY3hhnT9vDEH9ukaHnLES5",
  "key25": "ic3bWhuv8BZ2nrwTg8NSEp7W8jsqvY4ZdzbjzFdefL4FBCdoYNa1mSfLGkqUjBTHQTB42S3m5bR82YYCHfNDWfc",
  "key26": "3T3z8dzo2SSqY4ZKtS8Ftctq1EEiNNy74br4VGAKAiwXGCGvurNz67pdurgtmm76WUwFKfu9kkH6c1mUbCA2FMSs"
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
