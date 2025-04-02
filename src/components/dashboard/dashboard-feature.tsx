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
    "2ei5Zt4Mv43nH1mpYsjAmJ1LNpwTN49wkZGp9ozJCj7Gjb1AZui9tBRSMqBLdBBFCYAqsz7r4nPqM1rEX66LTPTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zVquCVVeZ6ey7dxrsMcdBRHEQFhHBdVnPjX5bYvoFdktY88ujrW3JQm8nQ1XQ3swjAEYJ34xEg3BQUh7R7BKzaY",
  "key1": "5UwcueLb6jubDaKbEGFpe33YkVtnfhKCZwCX1FwMsCsTubign14XErF1X5uQjcvoQXkna436pDhdCuqhvz2m36LE",
  "key2": "3P53ZBScLdmNTN6e8J6W9PYCbDMU1HXZGsjbR6AHHhb7rQiuVXeMzJUSApeuMwtRkegLuEung9V4RHYkAPjGtQf2",
  "key3": "3dHdchFF7LPAmwTZVSjTCbpS8ShzP7JSxTCx5dCY77XGKmBMT18DvS6SyxNTZuEY513oU8wo7FBp6GsUoG2kFhFs",
  "key4": "2sYmoT2ob88WsWmL1SHHHkkbKRrMc5KqwvyTPeh2oKWjVTnMNodB5Lxy5dpXqbjAhPZE3Um6wXVJRfiT5JVrS2Np",
  "key5": "4gHByYqdbNb2k6J7k3kwQFCF3bNn9XabWJxXSe5Lz3MhbgDM9JfD82ebGWqvcNa4qXKYGfvscwesq8pyTBX6Yk51",
  "key6": "5XbXZA66WgVcCQ9s8MhhkH1nH84GAVfSdAUayghC8JA1qyvJhS6zVGhP3bTFabXZ7DJA3GNDGC3nnTh2Mq9ZvFdd",
  "key7": "2SqQVpvmSTfkZD7GaX3kXPDuBF9htYb9ZfQSCdt6BGSvGcN2J65YhoVeVSvWFRATSmdgk6iRLZZKPFaQJH3TvZsk",
  "key8": "HX31nQ4mH34Gm3EXfjTnZfTAaSaGVzaSc6jC8JjftXYhanxGgiuXTXzGHdfWg68mcVyboz6VQ9tvHQ4wZXq6xNC",
  "key9": "4gKPGFgA5UA5vdMcF4z573vE3G1UpqxWrKnZXCjUFfEXqQEWFwsxmvxfEsCHoP17jLPftWaCP3BLaQCqxJV6tk9r",
  "key10": "2FnyxtVk8QJqhqhJB9pmWTzEjqEVHRwUVyuh73ABu5ujQTzU9izNauKCeUjoXi7XwXJtGLZU5HMiUuxnXHCYMhBA",
  "key11": "4m5v2SZdLLuY8n1fHNsbaHMUNr9PwM74M9XDe9uxnvaD47ewkA5wbH3fV9ybUP2eB8Pq95R7ckdiBMi7LAUg8THz",
  "key12": "3tRgRcEY3LbgMYM2tafF4d8JCU9rn7FsRVNTL2TGQzpy8hZhma66tJ9rCuJhdXLxyC8iEMNTt7ZmM9GyTS8VX1rh",
  "key13": "4jZjFq34YnX9mT8HTqsvMX3JvYpQALNzM8y1pFn2TbP8jN6kU1kbfHcm8UgovvCpdQAcBVWZn7dxf2qM1nyFX6y2",
  "key14": "2qxYM4Xq3n5V1WncJzH3VPf3EKUyQVvnSbpuEnz2iUDAAd8ZuKSf9TeMiwy6BuWQF4QYYHpatV3SEwx6wHJDMNaU",
  "key15": "f7RvL2fWnxxyTtjeYNAKmeGPp4YKiXTxV4NwKhL3tX8xCiU1ma7HB2UCv4svgbJSSdxsErdCe36wZDYkorRhKkw",
  "key16": "2skFUnZMG5jM422iBToTAPkbsGo6rv3dfJy1QVPsPZCQB7y5x3ZP9rFjpGRjVXvo5iav2nQ3vZdaPmVMzUGsdgMs",
  "key17": "2kj6FKBzuBAswo5QB8vwP2XEUEP4e8psKLCwqF7sVUDTWAY1zuc9w2MbRwiedkYDTEzStkmEgqdXLmcvw8BCHzx9",
  "key18": "15avA148JqmEdMNUJUGKJYcbPDpHPr8oyTZJJJzCkSNPx5C3vboA1s5s6pbd3AC8j6g4wohkeSnZedCoMiuMT3x",
  "key19": "2DD4DSUc5Mft6wrFF1w6nAGyxgNwzei9bMPvxS7DcbxoCzmeFTttHGVvGfdojsMiDV5BBfP4GX8TqVXppQJ5GVLq",
  "key20": "52UeKph1J85KpbW3FGokTB4NHCkvkCvQX5mfaqCM8tgGzQqgAoDXE7vng7LridB8yBaooeXCtioQuAu3sFCYxYHz",
  "key21": "4XUXHnhveV38iatSfYEZDXQihB2A1gWRzNH6ADjjwLoyUyacAcZAQQAqpKihHSFnvs1xgENa6d5H4aMSPCztpj24",
  "key22": "3QC6uYeSfWNdf7TWb389hcsGzXooMYQNUuhiwcNi4XNjZsjWhiKS9KC2hC8MgqCeExovvhVEEduWq7vhWLjXxbWs",
  "key23": "3NwKo8qkxfFceMMFvBxRExe4Ze1uYb9rNQWCiPB1JoNKDew1EJu6JQUyMc6YFC5g6L5vyYBXGgTRxkNSsU58jMyG",
  "key24": "VQA6K2Lrc3BzSqnfpBWyy5cqBUnbVXFnKgabeCQyGc6kBSSrb4HM4MshF2BaL7B6QRFBvAXx4Koc3piXv1Joi4U",
  "key25": "3qARaNbiUK3LUaXqRuPx7f1Y4DziYwmt4ahsqHP34bDqf5ynw8urZoykDvfQa4AB2fmJNeboz2ofJuD1ty6J5DaD",
  "key26": "3cCS5CVQ2wPeCwqn3uPLvMeG5mGJSoy3uypGEM4CUdjnSf47p3JZ5thVQqZumuqjEEnA9N5vsk9ogGatocB4UdrN",
  "key27": "5oPqu3dq6UbXWHt4wU9F44fsRWCSCwHpdYy9VhgXz39SXijTswWDmSBuCoPBJQFg6oHWe5URzLoCrrH2zTKX3ZAS",
  "key28": "5zibZgEgQJxuTBMXF6uANYYNvaBg1NYAS3HS8AHZouoqLJY1BQVrEk3xFEvzqjjCVwpFy3kVtR6XQWz5FbhXbQZb",
  "key29": "41owkthA8BiB59ZLNo9gvWgYBxwBFWtyg1AgqySjxEGMexaVRRUAZtcvu41efL9cMY9AEeX25j4R5LLrFzhTCiv5",
  "key30": "jigffobjCeakqq2krccruZW6TJAjqpX8bZE5HFe1TEw5o4P8RHVc2q8qJLQd76J3rz1FtTbwGz5EwQrQXAWik7t",
  "key31": "Uign4usiKptrWXBpRtaErF3DUPTaTJyf3abd8WRmFdLNF1Rxg71jkofniaioc1VeCD2qVVKyfxKYt2Nj2Exwto3",
  "key32": "3LGX5c5Z9uEX8ktid1z9jBH6gribj2fhiQGDiTz6D2MZ78YkK6aHVznk7dXqNaRVKRP1hrKUWbVsF1HGJ9hHCTh6",
  "key33": "2rkwuZX5hmxM8Z4YoKFYwuX6dzyE1Qy58JPfBYLCMcGbZAFpDSLG8EnK5a9tq4nJ1gtXsmtyzYSqhaWyt3yS4Rqw",
  "key34": "HZrpwTanWnnbLz9pMXAaWN4hwj5oinScxq15mebu7pTL7L3J67HAZ2kcFsKtkqo9mSZQnJrkLf4DPNEZk94G9VT",
  "key35": "7W4TMMUFa9SkmEADBCvFYbHBoKToGkp6wbGXm8aCtcUk9zMmE5ijAponFW9dGYMnZS271reZ2cvVLZdWcSy1Jcw",
  "key36": "38SktSbAJ8Bqpih1J6FXxN7zEuz4nLhivTT2Y6mDf4EAh8M2gpzNQzKbyjefjucQeT6v37RbajsUNFhFETmn2bXa",
  "key37": "2K57huprFLmACpRhi4ApwQE4XwGUVrVSpst9megMQGzvJ1rLDs7HdpKWFMyQwmFevSsj4ac399h1in3GYGh2uTmV",
  "key38": "5HvYg4yFPor7GnKRyNKxmHvNoSNTsAkoGEbAa76NTBVCSHjUvR1e6kNCZgffpuim5uoTkKzcf3F3QWEVbixAuyzv",
  "key39": "5bwoYwh8qELgFfDhvKc9kAokrNcBnA29P9aDJaYCoaPqvv5rjgrsuBM2vHFgoZyLsd8ZRbZLdRucq6p15mwJeCnC",
  "key40": "26ZpDzdiBnaZrbGctxvZPLQJkixhHL2fk8j1aH1881bAP4ayopk63s5AWp3YRXubpabSwuv9KwVtp3t62pK5YRs8",
  "key41": "2QPHzR7Puhq2TtvXQFDqG5eiWqNXwP3v9HGgmENowyCehDZHrrFqbBkQrqXJ2m9K5C61brunNE6ry3R9zqtANKS5",
  "key42": "29KYqk9ZasQ8zpuok6WgeZTXnvsWDH9CALuL7rfKxN9RJUCtJyEQVUQeGYfp73d3pinq1beJjREwQxN5YETMbns1",
  "key43": "3rWxyHiTCwUqRrSdiAEzbcYLd4srHztcFDNvaF7eGUDFLVXwV2mgGPYmJxETqhH4UZMf8kSLAoGK5M9mCRMJ9SKM",
  "key44": "3UDe6BvGAboZAu5hk2XPjvvnC7MAcNMCMDoyhMAYsmSMzMEmw4CCspduee7mbmuoMaY9i2P2Q38WfVzB5adMj8Xe",
  "key45": "3eTCY5Vjzwpg8KfXVfeH2mPMjgXDKUPAH3J6UarTSr1NBewVfH2qCLh67Rbk5MJ9LXtYcLaAAKuzqLgxVhptswZR",
  "key46": "G2idAR19kcw4r8RDf8RscEotErA3dkUvS5gTUg84fYJCVf9sh9zqJ9Y8wUvb29pyemFiok7Awv3hLmUNHtKockV",
  "key47": "5RN5MFvF6w5WVAneqXqJCci3CBrcUGv5G2E4izBbq5Zshy1Xe6p8NVEs3qGfRhg3Aq1eaM8oK8GVjcNMeNT6fAQo",
  "key48": "43rbtcdLQG4LA9KNkh9yhjWNiDQk9oXsJeSUhTfrzRkKeC2oBQzn5LhbF1Cie2Hf9d9UTuGM61EVsPri8QLM5RUe"
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
