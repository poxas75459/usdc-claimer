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
    "5o4rmuihhC5KjnKRSLiaa46Wjbo93hvmZ5gteVMYQ8b1gjABnxCcDS5kFDzNVf8qBUx3R3q9KJ6ktGjKkk1sC9MH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42kkKRV1qRGPh1QUFNehNWC4aEiFpgC6hhp2SvEQDQEH7TdLyPBiK5PAHzhz1rQMQMBJAc2xmuW1J9z693oXxpsu",
  "key1": "36PsZRJ6PA8jL9qNJWvP4V5y4nd7H4KES56gEnYduC9U4LTb8vfftJRUYXD3gSnna5sgwpYjXCXYwigkv7zjr657",
  "key2": "47dcupVvFPm1GHWhpLaehWgM9EcvtCEDy4fKNyMUopSFxWXgdhLZeNnUi3ARLLJn1gNG3jfZtvdtXHBALqaDJbDZ",
  "key3": "5CmwbkXzT3kHGEvUFiqbMQcnZBSHQRwjsBy59Ju942YjfSbhKE2ug8kFY3KRTXpC5AqQkBWxec3GSWJGLF9gjg7y",
  "key4": "5zPCqmvQNmGcsb36dUrce414xqxw5Vsa17kZseDYFbByMiYT3FgoPquvNtiQvRFS6gsnoD7iyLg7GSg3NFrHsXRF",
  "key5": "TpWWqMD49DEcv1fu1xDU1EGXTqzT8mMAQ8k6YRN1mt2NsuLecgsUcao6CLhtvjmNtidtTUPAQJ8eHBmwwCVk7hz",
  "key6": "4epK2MjXEwGu4SquxxBz9c9UjkEVKJb6sxFEG4NRyrybQTHwWD57HCQcaoWpVmgbWwvpDd5f1oyqMZRzVfcU7SVj",
  "key7": "46KK4BagGaJTzkMTCvrApGibcmxr5C8ndq2AJxtiAso2GmcxUqQaoz2WJp8veHfTrnqs1BZpk8N6L9kqKrfTfg23",
  "key8": "3dREd3QQhbxzTeWEVMPqwPesGK3cHK24ZJU9VuUUZjE91GmvGgQLH1uZsYDKE4Xg5yYAezNmsA28QB8JQRrVhp2y",
  "key9": "4aTmj5Se7sdm9aCQtFEfJYRWAy88fLwyqsGRPg1NEGX2PjhS6irjR9QY2ujba6DvxKLXo1G9ok5d5uTBSkyeLYFS",
  "key10": "44q65HK8adgvgarVsy9LLh3SLFaNhECTbRfsTA8bdHgntU39JzLL4itjWxPZ9W3m3YM9X28DrhSiYRGVhiprQLer",
  "key11": "FxX6oDMfHjVt3iXHFiFzBUCno7MKN6SbWeZntNYKwi7bA3DyKRHUheoBpjsNP12MYGfpLko1obHqjZEQyhRNTXn",
  "key12": "4rCLMjQPkn74s8zqJzoSL4e18gZvsX3u9V3jJQwbVQz3MqLcjGz34z9JH4iZD8UALoxVRhvqMenEb7KBbtQqMDYS",
  "key13": "4GD7ZbRXnJbiAAx5xreoLduvEU3ScDmmteSqNmwWPUqR4XpdQBdiqNCzSe31NFERzmDeVeQPMrsHDAp6d6z4QjVk",
  "key14": "34zoTnjdypJFfyh7f9bxGjMsezn9JdkDXds6KtdwABQc1C1x4zwTMQ4KMwuMXFLkzYeJNJ1C2Mm3b5jRbjSNx22u",
  "key15": "4jk7Nymw3u7MuRnRCGywQ552Mw4pdi1UucAgPZX5S9v9gBDgzMssgLLbgX6iKda55eSZNKGMHTp5iDKEn2qoRTDZ",
  "key16": "23Cn5p8XUXn39GvbwFqjLzDEbaEcF4VTtamnWAJCzHG81e7ZrnyUiQJkSXFShGyzNX6Ez1LtNn1bcda9QffHKeVj",
  "key17": "4zv7urhxGG8LTzDEhB5W9HQ6TC3qyBmpfTby89nRBEWukGAjH8sBwCyv2K4sJgGJ2YhBZg2HnNQEUpWLSKoyoYgM",
  "key18": "5xfQHeriZUzXnfhz9eJqFWmKvEj9fGt5HY7cuubN5kofh5EeMU257vEr7SuBxzQfRY1ejVeSPZG6dUEe22N8S6R8",
  "key19": "RAWyzRsq8MaR71fKY1spZZcbjVwUHGU9fnJZnEy1vrePKShoyDoAg12TaaaYuT9ULk7GhHGkoGTR4DLKEJATysU",
  "key20": "WGTXc2qs8qZKzyJKfYhiz5uzh27i83Upp8fa7PeYDi256LSEP131snWXgtdboYm3rvH4S4WfdosQ4xZjFqJiUS8",
  "key21": "etgLN84MczddSxG6iakHL5VaByQwc9SVaGvzHqfo5gyTP66WDMsZ4gQZLqHWsjM8SPN1SrkeZVEAEC2mrRMQwXq",
  "key22": "EL1R5rT4T4Pi5bj7TBT6Go5ijcs3rDLs5WkqHmKPTK3HyF3Ln56vZN2q2LSS4h5XJfmVcnQ9a3zZPVadHrzDRF2",
  "key23": "23LTJ2UyBYJjwTu6QeH4kTHBaxuqcES5K7oV6FMs32UsxtNz7mrgzUecVPrQSGm78NwTMhehrKenFK8rXCiT3KXm",
  "key24": "5s9TyyzmbyQnk7RR2SHmgsKxDAZqNwQGdAfeYwQV4cNJQwhQ2jiZwsrpfR3ezZT7ZVNZftX9Fk16EmAFsKe9sVD3",
  "key25": "5K147TbP22PkmJ1kwfgwBtfBLiqD67CN97i9MU9L6yUFHf3p1BjuqpXvCG5qe3ADJGzh3MbG1E3ouqsfnA4sPWtW",
  "key26": "3gRJ7QSUPTzoSze2Ca6toBxuFm9xMLKphnDcf76X1UT9GK4rG57DbtcZA6eNfAToA1jFwQSBDHpNH1tz1VyMvvMR",
  "key27": "n7Rxhrb7tYKkHAW9U1882Nj2Nk3z2oDZ5gGB5KY9ybyZQeTR4XHxBTFR1cetugDoE5vCdQJUrfDtGX9py7RsXdC",
  "key28": "4be8HK7etFGyKbvCQSSjWCnjbqGyiBEhnyGAovmSjrXrxZEiS3VGPG2ef1XP3PyTriBsD1RTEHfLneSFDNXkJe1H",
  "key29": "atWD8qd3w7JuvuCBjsg5KxwGcAwAmu4QTUU3LgDziJntVkFb5AHuja1nNuQ7depkzckQqC2pyA4zwsYd858enby",
  "key30": "2Vj2egLgGW4VJv456PdQixR7tXLvJ51K9dykZ87tBv1phdCL3QH4hUwhZ7QAjSLNiiukw4nT1xTtjjcGuWqtfTQi",
  "key31": "3jqGAh1aAf6AANEs5VMqLNdBJXpAeCjWZeLihxzSzP9tKBA27YfXEXJWpUxVgNQ6XL5jXRwQ6kG1UJz8a7u9TKhq"
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
