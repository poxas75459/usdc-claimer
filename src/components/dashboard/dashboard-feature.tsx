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
    "5vaeMBrWkrszjywG6mgi111dTwpik6vGGcKrfi9gYqu7zXL1qLK1CuhaZdDMNzGSTcgh2KvxgXS2VARP7cHy7i4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qwYH3uhiKrQbKWBJYTmxeEi4iawAB9GbbyQYN2uTSP8Fjjc2cr6fL8sEgX7AYHUP7NhLqzs4FKzTeRa2jai3juE",
  "key1": "5HMhQm15amhN5RbyteMVkgv92m33K6whTqBN8VJSWtj5SMbzWsYJDSmRueQ2XK7rb169hQz2mDAMM9yJYDNSE7HN",
  "key2": "5b46UTyp8bx2C5rWRBNDradsvfVd2PBNW2FHLbkJfYpJNgf7J8aSWK6UvbJErxT8EtPRvyxC8NevtmPRDpSaY56S",
  "key3": "5SJVFFc9VXFuqhw1n1XdkBLUUpLiQzGnkkaUdBUpSGKNCBTLxiuir5qJGZwf6jznoKEbtDx844ssXuNoBD3SqKm1",
  "key4": "2qkrSaDniKhAM7gFvSaxQ55owN7RoXjfzRNKjaNipg6MaT39tn8rEvVhddByGurCWVRn8TsyNme8oiexxUG31Y1H",
  "key5": "2sMp5qPczKeYEe7WmcRKTwA5Etx9vBBehUiJvMbThb1Zq4m8Rra7cZJxqW26LWWNJV2S7eHPEHPf4mWqBhgQAe2B",
  "key6": "3QwFiYjR9zBwSdtgkGJS8w1WJ6mrsN3uZLRq3Dsjv3Jrq8f8U35s6DSEL3GgwdT8pV7xQ5iDivURtPuB2EbKP7rP",
  "key7": "9eBwPtSGGWZrSbuPsfmptbisKZiNfpWr7op7NoDsPvdcRVYPSpcnQ5VCkM8WFgohkCXJXAQU4CVLw1emLEio4ek",
  "key8": "5vQ1gcuvvEW1VAVkpYghvkKB7akVam8YcUwEBY7HyszJLZ5ToA6ELELcAP1JsqX1XXx1pMPzmgswKeHPUHhxwkiF",
  "key9": "67ehGJE4nqaRBp396S3JmjVoHhPeig3gfKc5dS1Z2X7gDnadezuoyMUtC2ak6FAkwW2rFtsB7fYmjV6oidPAEmUL",
  "key10": "3AGR226cbiELPYMTewfdip3HcULLh7BpenG6yRp1WmKYK6fQmWuJPFQpshYp7tfDGQRdVYZJNquwMkryqScPLKoV",
  "key11": "5DdbB3wP3mT9y2tubtcLGd9HVgkmTW71wATSiryxPNKKfRWaPH7vj4pzwHPhX3H9SG1BMPnpXNrcbanubtEHeGqj",
  "key12": "3gSUoVC4cqptfZdEE32Bez1dmSiCYPcipkuj6GfJ2tGpffAHN1AP6hBGE8NovDuaeL7NkL7wezniPSi9h3Y3bP3L",
  "key13": "5bFBUKR51nkcuVA7Sb7wef3zgLCaxCPvcFB2BnAHhutThCcf6YJ8Cfr2RPfJ5Adyg2wvFXd9BDKNVZvbkTTbfM6a",
  "key14": "24kSXbwEbEZsFHP188Xh4D4ebcbkMQ2xJNRtPmWTNDY8CaQo8euV1jxeFBYA7qDqSew8oTNDtSi6wgUJJRQNj9LE",
  "key15": "VHKdWGWM6ULdBY7QPsDfuZEFSKiLWCqP4Q1L45XoQtpA8vWdpaDyPLg5S7r1oSEUHAqCWa1638f5VMeLktHmWvE",
  "key16": "yfYad24XAREbtaQkGcpStmhuv1FqPuzXRTSW76a5zQB6pRE4w3AdCqWiSRqQmA7DGpR5hb4bjL1t6Rxz9Dt6WZW",
  "key17": "2tTnn3PefHFBxizs4jJrvGD8aW5XW6Up7TQfgX5usbuUuUjdD2uHfUWdVPJ1axQ5F4PK8KgA3iVyNXwTKUxhqCC4",
  "key18": "ig7wUxrWsCNnEfmp5Gc6aZspmqvVNLKW6Pvy4rnbcdnHzFFeu5tms1ftNGLZ2t6roQ1Quia5bA8PUbVaFYDLXFh",
  "key19": "26TaJpwvm4pJgofWaKPU6p1pzAKfbRmGgmN3PKw1zr2qJ2mWeHaCghGTzYKZPNhhzbfKxdUnfggUYQwKQriH5A7g",
  "key20": "61yExvqkbfCbJMJHr8oSpCf6fS2q3KPRqqmbDhYaKBH5MKDfGWh5ReeVDyCyGvHFEAY85duFyVKoL2YKPiUxboQU",
  "key21": "3iTWoBpiZM6x8DLMWapwCSTMnRvrpkFeiDjW3BA3nwxkVh1zWnMDoLtPkuZfjzrdzE7w8ZKmL31qnAkpXvoH6FVB",
  "key22": "3AHyStm3kBFkCNALkqbxT2Tnq5QmYnYC9W8yZSPRryJc4iDMgNzgCLsDjanKGtaJH6ZQw9enyzc3gC8CeQgmVS7y",
  "key23": "5YhoUMYjyasY6hRtQyCAqRyfUc5nh2EB1DrjwbX2fP3p7ZEH3czpH7uPGnqyuEkvbTAi5FZxUq22VSHeDwatg3G2",
  "key24": "2PARhLensVdVWexDiLxCWUc1n4w46JQS6QHucTGW34KrZBQoYuEXQikGkPggMefm421ypGzypQYJucQyXtZq7g6N",
  "key25": "32MBfhzzBBAnxdn71qZ3Rwton9DRFmuULxRh6cm7iz5tTGnCNfJUhZMXG8Sqehjjo7rvX49Dw8f6rB2HSBCJddsR",
  "key26": "42JZvaoskJQHdN4ithorqDcj1Gfn6WVK6mQyQCeJcC5hT6AC1BfY93JNKNeKUNMumVq2VE7YwFHzmk6rSbwnfDfo",
  "key27": "3oVTKnta5PmaaL4zTKjkojkwDWigW42uRPukQtp2LeKWZYKaAFvUZYWLCH2DWXUq3Wtmj6jJZVBKBRdYP7JAzf6A",
  "key28": "23a4C8BdajLkMpJa6Dn2gZAwg5GinmCoghLEDk6dN9JW65hUTc9ZHSoYw4aPRvTYhnRgLhYw1mAeEwsnzyDgWgQ8",
  "key29": "5FLK5Lc5YpJnPWDBuxFhrLuD77rS1j3s278jtwYLPZ2jvCCfPPcoAGtHhVuWJB9RoJwh4zFHYjLhTSE3MNAvXGnu",
  "key30": "2LXwtGMbsxdjy5WZhLDCzURiv8bD4ypD19c4qsBYJgk88SaBTFv351CtG2fAeb6J14Pb2Nukcj2jZ28LzjLqdh8b",
  "key31": "3L4PftjdCeLsBBksfk7Z5Vw1x3GqrE7136RYvXa3KPYJXZB41FvR1Qp9CcLpkzWw4FRvKXmB9gC6DM8LzPLc1fSu",
  "key32": "5So7Bfnfoa3NbMC2Z1bpRLZYMmFeUFZRATp1dVbFN3QSGuWPGJBUq6fdzYv9tv7LtLkM624vk7orTKjXSkAxBygp"
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
