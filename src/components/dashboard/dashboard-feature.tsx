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
    "2rhMf8rEPbSxQ4tqFXCxwgQXLkeZ6CUZ1ci6hY47wx1NucwMvJiJwPwnC637ZMjwhaiPvdgpKv8yWfZPjFtd7pFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H5oYd1ziKFy6fkfuw9L69v5jfEXBF2SJgMCQsczyx5TBD17Mxeo7fz5VvGfVsbErq3bLbdNsK5AwfACXtoY3zC4",
  "key1": "5WZ5Pb3ubN3W7KjpsjHPfiHZB9q3dSwqethAe5g1gobZKuQCFHvPvBqfsFK5B8aHxDt4Gu8Ai94wH8dbmUrkX48S",
  "key2": "QH9AAW7ywC7yKaMRAhKw7bbjZPDi8SdayC5iujdGJXCg5PK1m32pMJnMRT7VeqSUBiQtZdq2Qro8YmPuLDBPE4s",
  "key3": "591dZmhTMqS3Qqi2WEbCAM6kNZ61czQrw8aX8LQP6L5baAk4dYvqg88MahgYkjWftjDBC9kGgbQzrRzsypZKqxzQ",
  "key4": "5DwaF9rRQJiD2atywPn5MQKLdRrah6Csvkf6DpBt5YyJkxGTowZTyQTvmAwVE2TgqyWKxaTBnGqz3Tsioz5qvYvU",
  "key5": "45ZiDz5K7i31naHF8My8zoG53NtE4eYoJiEU9JL2CdCM4p4ytMxpoXppGWc1Rqsoxpz6Em8EAHnY7Gyq9HkxAiLh",
  "key6": "2dzknyfCxYMyKKZ2tcdSVacYhCwBiPQWCeTShA6PsGut5d4L4MYbXs9fzR913wx3766cSQem18Bz8vX4FLWxy4XF",
  "key7": "46zXDj9LJENzua4M5UzHAc5UkSL8TYdgkkhUpRrFSzi3YhEy2zaMoPTG36BeBFu9ZqUWtaDUhsmakZSHxUBD1S18",
  "key8": "AjxLSW9TJndoquB22x1nh1EtE23VHAy5mZQYobcYoRqaTpw78xM5F1VdJNRxW8K9jbod54up2b5TF99yjVCP3eC",
  "key9": "4FEQJpziFoipPoS7HKowe2mFA73arLVZ9kEHver58cPWt8SvkTPjSsZsqrVLJAuZjTJiuFc2y95rwaNxpkNU2HNf",
  "key10": "2rbiuNoSbFw752CayY4sX1A6WM2yiB5sEWt7o49fM1BZVYEnEuvZKEzzhvB8SbseJTq5j4iAZZRiQr7Mzke9rHTw",
  "key11": "Xd8gHWXbV4Mmmvn68a1y7BXc8GBpYRiZwwwcf8kCZTjrgbq1WgQfS1tB62csdqvhzCzQRXK8Hh58pw1izYC1ufR",
  "key12": "2Yg9wsEpr6BtYbwxLQyzYFM4UjyNx4ENvVf31RiY2ZbuuYKPrQiqdCuFb5NNMkuTxGHFm8nQHtnZGV13QZUnVUwa",
  "key13": "299hXhex9PjaGMtJtfVSEmRezpzidFPB4UE3sp7E5aB9SmaQwkQRZ5qiVJTbc2n37uhm2bXyVZEtrNazPf2ijAuN",
  "key14": "Ybc7KUjtNBvWuDQrm563GupxjUcGU6aNBcssDht3P7sL9KGksYH36nVPyNurtRj7FJj8UU9vSoJDYrcAyUdrgTq",
  "key15": "2PinXwRySKgUphqjedQLcVXGFc6drHa1oLNtiF5K8Hxvk1iNeYbRK7Z1jjDYrDCDex6sRFg81haCiJnz1mAa4QNh",
  "key16": "2M1yzH161mcKKnqpQSWbX3KM7abyZR3yNm5Qwn7zsCEzLUB62wfHZadhSC6nZ5NSPneiRw48dMCqpMERFJKCP9yS",
  "key17": "5LfpSEeWmcVNpe7Zd31xP4F5hC9pgCuU8z8tFSzLCBRNQcjosQNkNABNJLsBrXksYcZJ9TN8ecPt4Ne3FnMuDGBH",
  "key18": "5J9SCoxGNDWw8xp9qJyR9AHf13JNXVEmbg8o3pZKoHkUep1FS4BAdTkhops4mH3Rxc6RQANMEhZZF5bWTbkRVNPZ",
  "key19": "328jny3Kom8iMTQHFQ49m8i8cpqdTMLKJytJ5nzUkgaj46u6dz8LbiQNrxMEizo5geGinXKE5SFpjRRYHBdF1LLE",
  "key20": "4dWx619abDugGdbyFTK27GmyGQxcimRsobTqMrUHvQ7ShsiioqdGU1xrNSSvqUZHM3qfKi2P1CGq9agm2bpxyZA4",
  "key21": "2U2AE4tcay8aozffL4YDk6EH7EoZ4PyMPp9Yc3kQdTKKXfVuoMmithKe65542SzWDeGFpVt6gL1YNLGtsUw7YU6D",
  "key22": "3G1EnQQw7392bRmjckaDhw2n8237ZwGMzQvvfRUaX4KNYue2KKDgtbjK3Mk7AaVZ5zscgkZ69cKyKhybCxupPgHN",
  "key23": "2CsNDMfR8rtQWkbcggeC1yoBNe72WEYfAhiBWu8Ukf5UY29RENUnqUEdHkQ99GDA9rDJ7BYUujEgh5JkhNVkeEfD",
  "key24": "3CYbgyDGuSp5ZEYQ6TKKB6FgMr9bF4Cr8f6ZcxAgnJrE88MnJLBxLP492KLfouNr3Y8QAggqCJ28TW9qjWfpzgYm",
  "key25": "2B7tYYLPGj1afpRtvxyBKnom9Y8WsFzsJG1sDhprYraqf4nP9wL51Q1bE8H7u1p46NwBXaBvzjMN3XJ18jKhYxcC",
  "key26": "59ju4P4SP22Hoe4D5Xbh6M7TvJd8m1MHDh3iCuMqi4uomd8LSCt7ptkwHATQxe2WtTpAj16AQz5Qs3aiL1pCYRDx",
  "key27": "JsH2TEGM7afbjjLEMRe8s9xRbuove5KypVwZenCEeVtJrURGmFzMxxCT59jtdf9VxK9EsrHjX8YgVTK6FDj1bJ4",
  "key28": "4hDt63xYT1YFWnErrBV8fHppsAoTNXWk4scLPuPjGi4mFU6oVUTERGHzYba6U8wnZFJRPm1FHGbuj8iiWnYTS9ST",
  "key29": "pLZCyQqvJ8sWxXeZCPRdQ4LYTs4f8nheU5MGVj6TwBMkeABDH4nTyKx52EpihWrbW1RKtPehnqgTRKiP6woXYkv",
  "key30": "3oEGd9wLdNrRciRCFvava4MMYYUXi5HYEsSsvLvp549gAqbrPNavDtFK2QWAYiuJGTCW6BiQBVEXcXTecpeH7DbV",
  "key31": "5b53A4BNTaBT45fkG8Scnn6Uwj2JbE8yzdRGP9oEavA5zFGE8Wx4xgN1aNoR2FjbNGafKcSiVv7HworBWoZK47ez",
  "key32": "2y8S1JoKSsUko3nSfdSTRdDRUiC2V1zsLNehjkttB7iZVi9EjtvMZEyK4U5vTsfcW5yussWixc5U8Y3Z3mm7v83u",
  "key33": "5H9s8mh2wKfibuqALpLUdW8K8UMxzRgyoStCTLoZrpFfy2oSthTax5roxL2SmrQfgTCqbwPhr8SduczqbTfuupP",
  "key34": "o6AAG47RPgz3Ursd9XR74Lo8XLVacqvtShFLVcAAQfdv6sLuu4uiVTQDXWr4ePwSXXTTTf1iozbbJNWHPjND4Qe",
  "key35": "43htcA1aPVZkuc2QgHYTQ9G3bLfYrvdtkfstSJP3SQJhXjEKF7UXF9A75j9uRZCiKMWJEwQFZdWWCFu9RZfEaJq",
  "key36": "iwngm46zeYfAsC31bQXyZhQ265LcYJFc3NjidAm74ZACrTQrptY4A4T5XjnSqFk6cVtQUPjpXvLzgxZdXGndv8Q",
  "key37": "tmW4TNURbpkaSacksCsxbPcL72sM38bgBBjBmDcjkkQ47oy2RaBj3fjkVgJfPmtXGnqnBwvo9XQQDLdTvogS17v",
  "key38": "4udRB9BjshBrfpcZFDJ9rVfdg3hjkWUDWpwKozmiedxuY24CPs7vkE2JUnfKKoF2yMDspSNhkpjwAeNuTsQVAPvC",
  "key39": "5FZfy8SKE9USLNvVmJoTX8jmWXbYf33HicpADbnUq9LtGDeErFEA3fhSCASVL1GBn5QpPfTKz7VGoX7K2FeMDJAv",
  "key40": "5FA5PFdfFCetwSiuHBXNBndyorHbzCAVK6DCJEJtjnyRaFdVMC9nxNDSSD2GBa2NwZSwX35uH4Yxirbu7o1jwKJh",
  "key41": "64nevtua5RSbAkfSbayfhoBnqw2xviy4GzjgsBFKmLCpwBhN25SFYbPVhDXuc6Nw4TM6TEngzT4poFSVqtQHURmy",
  "key42": "412yzdn8h77rhWci9cZmXphdetr6EZYSwRB41LKRJdtkpYhWAEcoXjWibQvVvkrGs1akevxTEJpTkBbnhu3JikjD"
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
