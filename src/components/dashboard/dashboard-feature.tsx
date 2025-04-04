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
    "3DKz4DSuoGJg9VcbDjm3Buyx2aiHN1gG5Q1LEEZkMDYCinBaqyg95rLLjCXbbyGkq6CZqfSCfJwdvEeudGteBfdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HYsiVPWdniUrcVgWKpkUPKvQDpDQBvXsnFG48bjMxFgyyL6Ug5iXV8Kg4gMqr3GowdPt5vZ1HuJsEm8UdCZ76LN",
  "key1": "iW3kktWZ3sVvkbCiofEk5rLqugmk98xGiyD5pjDoE321twgHMN1tgfbqTjNdT6ugxUYcCJMSMCJgdnpBbs5aqz7",
  "key2": "3o1a45p9pxJitvSS6vSdBCawDbJJMWbGpuqf59EpUSgQoLCEbAPP6yrvzYfuaJX4UWZmtgBVMniZLDaWmXhZwgJp",
  "key3": "4wrWWdY3YmCppxHQ2naNkhreymQL4stzC2YHW8B8niUbEuf8TfJpRRJabSe2N7f1DtJq5q4NRS7Zc32brD5BSvSk",
  "key4": "4DKyzxRMMRMuHRKTAgtFg1y8RCmG7pPr91rA2wuVgBqrriVnqGsZbvpuBpa4DJJsdV61hwStbpZ1178xVLLKmwwP",
  "key5": "3jjMwSjKusLCMXU9UKvz6bVmDLhjHxFWdbdci1Tv34ZQLQTQuQdQC3A3UXhuivMqyZHumd66RoNzrUBx7XS5z7kL",
  "key6": "2Q9FUoFvGUS8K9ayKZ8VYfqFGFYaAWk7xUaBruGS3k4VJtKKhMfChZdp7NQ5cj1CieGFR9wWQCWfoDmdCFi1UrYZ",
  "key7": "2vS1yqjtAxB5EAky5wCvoXBNeAjokHTT34KPAv1jvWjiLZnfp9zAiShRxwJmtSGQQxuiAP6sGg3cfUHquyNnsDGH",
  "key8": "5Au8ioJn4gxGJdAMshvHNwPwsKcVyhePgyUxw8TfQR6Z9TfnAFCN2rLpkhErJDqZvjyx31uJKo7DjckFEkngbRhu",
  "key9": "5QPsbrviRDG6qmL5Kwd5uTMmBuMo5Z3rpS7QqQWZuERh3UpoBRPQBZHtt8eKsGBY8hrK2SwjVrp7Evsot1v8Qoww",
  "key10": "67SCRZiymZbenR7zZQyZ3b37CbUnb326BWqLS1mGg8ZQLbWz2iKFX1hHnMhMtWaC7y9G841N5PwQ9WxgimDAKo7L",
  "key11": "5toxhGUuLY9pA1J64SfJDQgEanH6SLk8fTUNoi6EUVMiHciWzp3B5X2dQVGdjTWh5bYvD9HQJCeSpXD5k9UZKFaq",
  "key12": "4dCpycS37ypn5wGZfcJcUJ6rsuS7KpjtjDEg5gnaXpqHiHbxf8p1Dqeu5NZRDEqJXCGAYTZaw79JLcYRkgJ3Pzp4",
  "key13": "yokoeX6sEVDiPVUgZCe8NQV6teCaFq4CDAwbPhYJgUXkvS5ojXgAe8efZqKL9RMerx7z9xAUgkwg8ZAr2DrUH84",
  "key14": "47tnYrHdMMES4HtqEdDs9XAoK3zkoQTW1juJ1mZj9nBKyPSpCi7tMRbG3sfciCANWYeqyZTa9ZWtPw7sU44U3gTg",
  "key15": "4v1bsn8BPCDV13EJMAhHW2jzQ44U2zbrPsdKFKEZs3GwjgGGe97bs4b2zqqkt5D9sE3yYuxfRgkcGRG2C8WY9Amd",
  "key16": "3NSdGu3bmWS2hq1T9NtN5SFkKMNruZsHCtAww5VUUk9ytKUZTH8KFwL7cyKiavKQGAzd5GDGPd1Jgtjo8vRVkaqB",
  "key17": "2Yo1PcUtYHFXsKyKLqaaP5TqSmsWfab5kJmEgEAQWCNaef7up4Q7WqWcCkdJwHN9UBHdSkz9AAVBJKGBSbwxuUFN",
  "key18": "41W15TJzG72MdNWAi4PQJ48E7UYtHRnvKxXzDL4DgSkKpQ6Evu6aUNBLzbcjcdv2vqMs2EgDbyMZogrYiAeuz8m6",
  "key19": "5SBKjBnmseqduqJYh26xZVCsH5Cza5K6cmKSHDNKFxJmtGzsfrxSmcTgCwv8xWP4KQ3ynR8PucY2NsnxvAZgrhoD",
  "key20": "5d7cuXjaoZeyZzo7sDUmGDxxxrUJPxZsWtkaBf4UmGxJuLvWvfWaiGQhgLNmLd3qm7fXGCWC5BzzcpKotN5qJLmC",
  "key21": "p4jY56WYSnhDvZGTyDSyLPspmLD44bMh7LztkvRNRLkjeNtw5NvAGNN38545AnKiudq7uteSksY4vcMBi95xkS3",
  "key22": "45FhRNyxkxqcRYFnyE4TeBJHyARbiXyBtLgfCeTkzxXVEsizk5Tpjg7nSv4Bw3Ca5MFN7EZQZouvPSFdYC4VRxnQ",
  "key23": "2zE6L8m3bvDtF68mHrrkkHDR8gd6ZMFwziLkHtajcpUGgmsmcM9xqMnny4HFTrp4hiD1NXQN9zvqTS6o3fgLDRGX",
  "key24": "24s1LLAhTVmqeXy5q1Njz2Pxy8tKmHrqvz5d3nSgJ4x1pFLgC3r5VpFaNQXJmjSU1Jaa4yJz7sbwqmqe8HYoJ2QK",
  "key25": "4oqvBXpAELmgek6qveSA1jFf5wEHaznsAVdpgj2hsMDpWuU1DwzyWwJPBLc38nUnXWXM1Q2bDAgtSxvjghQp1CzU",
  "key26": "5oftw4zLapn8zxE5zUngsA27ktbLsZrcWYmbsqK9qsN66V7EkppxpEobbcKFMgahhFhvi5HRoGfBu6BKPypQCzY9",
  "key27": "26AEWnZBGcaCGQWHiMBq3jCnXF83BSNzKhi25hNhSXQmRWMxymmHhJ6HE5p2JPDxcDBAoxFrB27eq77YMAgEQf6p",
  "key28": "4jFoHFsJGeTVoNi4dQbsrabQefZpe6mi9dioDBHQKtMh8UhkDGnYv74uuXwHCFafF8qhQ3bKwarjC1zNfbUhGcsQ",
  "key29": "5y2nGAa7CX649TxNpy1DV2JEUiLcENwLUvjVqUzpxsfkEAgqqYXSDQMwmSgVpyo2ArNHjcPgwDYV4dcjsbEuVEkA"
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
