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
    "3KVzzHoJ7WJ8jWFmDvfEka2o4F9XF3kgXf2v12bMQcP2FcUHZiBMzTrzTDrkRtrcLmnobF9E7UtriVuTyRQHRpyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29qRo89xZwENtCrAaJPd7t7NJUab1WyQ7Pf6n9gNkC63HSWTG8w5boDXKeU1NTQN7B51SfnFVb2VHficosuxPzwn",
  "key1": "2ssgAynJZgDWpQK78QcaXPfa5uGfFJmtpzVYvhceRm181WMAWWQcscy1suUWQWcGP3YqYSrsDidTsAsVjeZS3ATj",
  "key2": "5a5Yvtsqr3E4nr4XvsFtURb9kVzgNKZmKsCym36JRHzQ3sJeGv3gmnDcRq4XHo8sX9mP4JAJcz5W2JZQb5nxsVZ2",
  "key3": "641SJr2feGBSgpThWJTf1AhMLQns7SgcGdPBrGaEi9FtKv99DDbpAQynB4a3rmA6rXPErcD8U3bQHfvzTEakHjjb",
  "key4": "4xYRzkrnQTexzwqjVe9r2Epo3XPCoHGUCUQLJdZkdpafN4RUVUHo8jux7U4Q9sqQh9m3kLQor4RNWWMPrAg91QuM",
  "key5": "2NHkZhRytQzvVu8iDRGACAr5fgGtrv5N8JLzFagHZ1KkCNM59s5AMHXZeNWd9dfZiC69RMf6CiQjekpDZ1WVdhcc",
  "key6": "5YTFqQicxcWE52nziJirh21dU7h93bGsrfwWqRM8akeANSR4zjuAPHYgXxH7KZbdYi1rV9S3hcHHtHmrqy3P5tH9",
  "key7": "3m19BfCoKYrD4w7RpDCo9vVuunY9v2F2GcRYKWSesEd5w3HTbJ8HMXDZAVceXgER2G2efpWVZQ6YZxkzduEjuveB",
  "key8": "4zBigUsKCUwYkN61Pw3tDXigP2fsx1wqXB7ZnunYC9G2Y3koYG2wm5eTRRSDyR5HtTC19Bp4ZnHSLY8LFx94bpQ9",
  "key9": "2yirZw9Wd2KApTMnxJdjX9eQRRn3krK1wUnVtxXNdy6qxsY9qs6oM1xsPCJmeYcoiMYA7hSH3jEKvSKoC736moCA",
  "key10": "3gbKgZAAxyxg7PGWdZBmPi3ahnsVjxvFbAtraqMxAqkakBknf8yHLJdQh8LP6CxMryJigrT5aZzuBfJAmA74urDQ",
  "key11": "4BXpFVmQJvgLmUoW6iotY3dEHzNqJJBn2BD5cVzB2rfwfguRm77TdbaDrYUg2a6ZfgeeUvnihYkuEixVkiBe4EVX",
  "key12": "uk9rzk5j3kuQzvywQj5MaP2gTy8kr2JKUu1iVV6ZoiZWqNpvxLCzeBXaunww2zA19d92Aoy48UNkEGsMMLEjRHM",
  "key13": "4yWUr1MHFpioaFTm72v3VA7Ln4ddHJ9qZbCRmHSw6KETtrt8gNZv5WNZ9KpuEmHgZBUhuQ9Bivg5qTBtDwrCFc8f",
  "key14": "fHwXJcVc9TBEhwfrY9Tw45sLsnfseafnX9vn7LrL2xv2PsGGjgUhBvxdwrMVCxZZEKUQjxEuGHZbXGSZLrCXyUw",
  "key15": "qiWUDwiKWQuRVq8X1zwjeQ5NVXQ5GM61boXdFuivTwAMgAYtBFemrz1cHBKBRdKCrcGJ4N1ZAVVg6RRRztKrfom",
  "key16": "4Xf5oJY5Mf6dSFojF76ednVWiALmRRrFwofZiXmQ8tXt14keQnAoRtKmY9C2M8gpPuXDPpVwpjayd61a9q7w1DJZ",
  "key17": "4MjNGXsgx9cogk9knpXqAAFv4yVUCr5PwsuCpH4gdpUYm7s1wr2VCC7BtoWaQA1dKsK4QnwXdWNDnmXiU3NTf3qE",
  "key18": "3NFGDn6bt3hi54Y8FggB7zaYd4rMJ3FQVXKPsiLmseEQ6E74MESBXGfUxXdivLyBQKkT8TqfyGyCraQE3RCHQ1gp",
  "key19": "55fTVmeDERMgeWt8SW3ytKjbJrrfcAsYaiTXoXdusgAqYN394Ln2DSv4vJ851QimbFBDHbAZfA3hjkJWXYTERy5K",
  "key20": "4KzFLQZsELjAXgqyttZ7K9QKX2Wj3BSM1LQgPSJodVDNe3s5Dz22h9RHoWURPfX5st2e5YrHA4SsPdcvVPVNW9gd",
  "key21": "4JLjiGrNd2DC38JxetFM7LvDAENmXxKxae3Qc3qnGkU8HgvhJRaPLNUS8rU5zoaCaTziJgBtXVKyr2cZd3GsbuCe",
  "key22": "5VASLYTd699x7sDTgzvuRAs8bRRKreuLa8zuyFGVuETxmKdL5KNb6PZr3ahkBJDfcMmwwT7A69cSehKqiGgkM4aW",
  "key23": "4Rxz5wCX4wfBb2ENfmsQgCWi6S4UmHP8A6W8rRzLp1UQxYSh5Mvkyjuausu5StK9uRn6AvF5DpTQVHYEmZnAAjRw",
  "key24": "N2qEHWeTXnFmxe7LE7NPLuqnT1Xood6oxy4Z2tJQTWDDRVdK34ZfmTj5XpMxhmoNGwQFxWXGEAiFCyQQ1XEtNWS",
  "key25": "5yZBu2gfHHhvGZSX7Nh8sUgXqNdSZydj5GFcfbZQhHHjDNc9dfGSTWQ1VkM64cTc7pKh9AVU1bATskbKcww5ME2Y",
  "key26": "8JaoAGrAnZ5H24x25PzLDBk2hacG9DJVDFMifC6R8PFaCcBQJn8vy4ZHPUSwQUV7fbvFwex2FHCY3D7uasyPWd8",
  "key27": "5tVYBWgohtudH6eUezMqpjn6neYexYTx9qU2pw7Vky5wpecERmmPzUZRQNzvcxGUTC3vEfQZRXq2JGXsHAPAEYDh",
  "key28": "4tSGfd9NwaXgHrRhQL6h5XX6GwYEKn6wZZfus4bUSsAFnH7JTK6qVJpCjwyjxgYZtSXTgesoaGYPQLDqpVm29kNV",
  "key29": "4SCttJreBAw4ejexytvhUjZkV7ACCkGyAtCDE1EQ3y3qVNsQbhaWV3LtyAvwvAZV6HgNbr9DeBKR4FyKDXskSuYc",
  "key30": "3v47xdQKzucTk9ywtkT9AHpfeVpF1JmUeAGwCFTgeBVQ68iMD2Pu5i1Ms2p76sUCs9t2dD7nKrccxavw2cBKhpq9",
  "key31": "28vDKhbWbAq8H5ywmZQ7UJSahKgkFKxtg8PtCxNtfcWBH4pkd1AgEzHCzStrmA3bbKgk5xDVraKFeo43Whi58X11",
  "key32": "4M19XsDVaFHFSjJf1UCdTgaGwFh6xDWbfsNTU7KYPECupP6qWHhcSG9L1YjMK5EvZMRLryFpbFFipuGdqHm1o1Df",
  "key33": "4T5Ax1A9uHhuaWVdDa9yabvwPWgapeXKat7knrqk6wtfY2P4LwSkPyC9NupD9Ri4ALh6wtNVfGa8A6mp4XNe3bGQ",
  "key34": "3t5Vn2Ta8YV82w3MsKSyyJ6uGtJ7nJ2ZV92bMWVY2t6dvUTpe4cwANZQUEFc4s8kzgQc2wGUSoBeyMWUqBgumHx7",
  "key35": "4wRuhs5TVfLvcoVxfRkyM779EfMLrXBCWRcJAG6QUq7Zwh4F2kjhkhRH2Ku3o7nQazQstCXKGDCtD5SYn2WsPjZU",
  "key36": "UC31YnfZAiSY3DU6d13QXoTZpTHwawGRJCjsx71Ron1zGYrviVYS1hCjXVGpnty8pKr3D59c9VtRtASnoAjKs3H",
  "key37": "345F8gW3p2F2oMiGeRX72NLwH1nYfg62QfGiX4xEKRP5HfLsqxD7yRtkvATuJwTwCrbmZBRUjP9vUWhr6vms12TQ"
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
