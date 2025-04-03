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
    "3qZdyjCk7geYmVQhunPJY61FJt4sPpYbV5oVWghjd39MnQzrWPJk4QB7SKk2h7NWoiNQ9x8HiKF9ti64D76LGnpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ADLMAfJS6MBEygiLZDSYCdHKZC1Cbrf8JnHkYG587EkrL4xcVZyketgGxokoX5Y1CAwwz7En2GNW31EieZA4Zvv",
  "key1": "4yikqJRWX4JrWLrXKkecxNdccxvtoH8VKdLNnuztscy4hpM2ozf6sFKTNinK1AktZyJZPRAdUm3UaTKLsDgRjzsD",
  "key2": "3btNCKhRSVUnLeFca5wcgArnZ8WJNCJHtCT2HyAw5aDSuunDYCUZsYWj9E4k6rh3fMPeo8Swi5oaAiUa9S9rz3ay",
  "key3": "3b7n76MBc7irtoxcHU5T8LMKr3rf5MnSTjbQEgQvMR9cJqiA7mc5ycr7oy66V7XnYT1SPym4GEAMzvA1znUGhayw",
  "key4": "4CVo1Mv9KW4zd8qWsTt7zJQsJKXQe7He1KevBUFpFwLLAz46YGCmqMjrRW4qN7ZBQ8hDVgi6tB2fZ4SH1GPMF8gu",
  "key5": "PLxY9ApKHZkuJ1NFTTxjGUTJsZd9APBZg9vS2wghqWnmn4XrSyE3AU2pSSazwbFKn36UkTSjqM4nbLF3dAtZwFY",
  "key6": "2TzDH1mUXmdtejk3HQW6WUKQVWPBUuQ4jq729FQNGuJs36uivcEbScinGveehNbkEoyrs3WrCmTzeeqQvG5RT7tj",
  "key7": "Lsvnf6riTVX6MSfqPht1GK2CKRZw5AnGLwGWkgge3XW98ajbhj6Xd5JRDqUSxj4eRMgYNsXiVDqWx8s7CZbYPpa",
  "key8": "51ggX83DZ3RGQJpaWPkBGszyeFCrrriroew1TDq1x6ncqQD5PShBee6NWcuN6ojeXwqWiRQzZgMV4nZTsEfpsqeV",
  "key9": "35u3VGcLFekQNyTt9EfZh2SA1eAvZ2Ba6HKMybosAxBw21eHWYyDxo2m7NiLDzKPVz1VnnwEJ1p7K7NdDHoWk5hu",
  "key10": "57Y5diFkqgAfTe38CjV2e9EJvfw5brStzMNG6Ps3tc4GaTe4tZMtXic7cmVrTxHAJA6yJaNiqWLJgxJ1Rn2L2NH4",
  "key11": "4zqm7fFzK8h65FLgjfHrzuXDaJAzxR6DGiPJU34cq7ApPrZvDeJ2fDkP19GQYduzyFGsa55scUqNjVnrwbTiExa1",
  "key12": "5waeykseAs1yPArzdr9Vjngh3GeRjyWGV7AafHqtf56k1J8wA8krAAR6ZpEWpRCUwDuVUkbCYiKqwxir2W9dm23z",
  "key13": "3osGscbbLZ95yPj3tihqj5v4HZmULwU1oSohsYZifmSmd1iScofMYy9Wh7s9543hhLabirkTp7HqhdQstnekNGC8",
  "key14": "4nqYn469GR6u9mt1k6jKwvwNuPf1KWxupjzS3XHyD98hudJwTq3jT9V8our3h9MZW2ndwPH6ecQkurZZQj1gsSP9",
  "key15": "5uq2rtjQThfMT1V7zAykXXBZz7e747H36hMZg6Vg2MPSrF45jErwZkX64jvXv8qVf79vf6pkXWLpjMjDih34bNmZ",
  "key16": "4xVJnHs6BTsbocwzZhtms8FHX5s66fdjZ7fiDDuW5Dsmop1opaAcxi5wMmhAfcXLLH7F9VXcHj5qajXU2N6CMTTa",
  "key17": "2SD8gSvChgBxaWghrfnAXCitcooqc12cHeUJgb9QcVh1K19464xp6NP2b8wVzFTN36aKbVw9gWXGpqJf9rV9JJNS",
  "key18": "QsPvY6yrQf4vs3SzMRfGrURmWdVcSxRDuEL6UTw8B1MAmQG43BWNqM1PojvQN9Aso3Mi6ia94ooacnNXYE3A1nN",
  "key19": "45TG2pSYYxawGALtrqtTgAbFWkLAKk8cukQxCkDMWHGvwtTCZoxn6WPEQvX2MmFRYVJrUxs5HmfUB2jCm9CsR2Hc",
  "key20": "5EX6EmZ4AgxyDQeK1hvhmdmyaZd4wCSS6fAiZrKojVomunrbNp3Fp5e1Lp7BUzM9zNsRrMtBA3xCuyaAAwG1qU6y",
  "key21": "5ZAC2RfernEvSaeuYwwiUvfkuNrAMcJSe8gyuxEeLAZT9kkYfEoGuwzuxJ2cAFyZAN3y23iDjGdyK3ttXJjDPGPV",
  "key22": "67BCryp7RpYMiQToTqS1REwiSFkAvdRuj9XwL4SuydcCvdtzpMY7PZo1F4PfS41sxUmMvr6wdncFoEFgKyRryHco",
  "key23": "HVkRm7nr8AkxfN6tTHQ4zA8cK43JpiE1BQ1yqLas5GvpCD3iu11aAmvJ6ALenFtePfQEYfgs34wMUAHNQEDGRcX",
  "key24": "2Q2rT22Dhr5ghPCrTckhcamkdJvuDEXfw9i5QQnQXYwBo2WyiWyMt4JR5TmxhTdduUF6doCCb1ZeGLh66ebDz2jz"
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
