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
    "2zFtz7cvz72FaB1mrhNG6UPVnPo369dVxmyeb5eoaMJ8eTfxQEDYnQfZssCCjSJus5b2nojJEYX5jDcDnEsw25eE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcPR5AoYmULRaXVQxoshQjbmsvwmne9jz4qBkXewTDCooC447Fn9nm8QNbK2yuLo9zYMKoRrfwhxT4tCL3kLX8V",
  "key1": "4rT2tKXpcfCiPpDSKFkLXftmof5KHbyaNcsddStPxKiJ91w3A6M44pbQfMgMnUiPtpFMmR66WGCYcmAU7EghCXXs",
  "key2": "38FRijbhBjrvRXetSCEBexbJnwVnXbszybtCemDNcpJqqZwFFC3h66UFgecDPgSjsujQCRUsZaxvthA13Yf9P6yR",
  "key3": "3aS1FiNNA2iVC6jjyEq9RzTyYdHk2m5MtTaqU1eNjGnoqh4rmt5FcNE4uPqTZFzjEr2jNe2AvNwC5gxGdcx6eTDJ",
  "key4": "fK189ynX5vTtMaocpe3h6UdeENQHA71k6RFzyCSsf9LPpCpeMnvVbVTZZmUPeMmWBjjsWSWwAiKnGGKy3i38FL8",
  "key5": "2UxvHcbfL8oxqPEcuxi6EEaEkdrDzyB3rWNWTBBigwGgC1hqtnUkmHLSryihGpqwzHuWFhif8dfJEQyGiXbbnfKz",
  "key6": "46u8Tky2Pbs2mWfXcQ3LFPSRTex3W3HKJkwSyyPBMP1poKKV9pJtbUp5iA8Djq2mGUpGi5uidfSKxkjUZkazEXEG",
  "key7": "4ip9o3Z3HFv5njeN92jDa4kTm5z86X9RyN7d633BWCZYXUWURxdpyPhnZYk6tn7ynDSPwtuGYiTPFbSrUHxs2wD",
  "key8": "5jYrbCs1F5o76KjZqkyErjYYUoJKsEVfZvGCwaLheKEYv9UE3ToW8ra6x8HeBT3v7fbCwKWU5ieduWAy9hmnsFg6",
  "key9": "5L4Hh48ZtrZDpEEL2wfhvggoAy3BniyiaYP7NAFQUgsTVCbhGeDW9FiGf72abniCXZVKwNLQ9SfRzMbrog77SMY",
  "key10": "2V1NoZbnTA8qFjDtyJs8Pg5RquMK2csuDWudbo245ktAyXu4MvPV3t7dpvusBfKi4AnWJ6gmRbtcvNnNQfVM4wgx",
  "key11": "3wQwVLMyAn8zUTmxCJ6tPRcyAeb4krFUGDV4qaxF7gZpxNAf7Rwnt6wueDoevN5bEuSWzv6rFm7jgMKAsU7uETPc",
  "key12": "5iTjyf9gVhUnWJBzF9sqU3WCMtCVuLcWvS3ueKExQgeVTD9Ef2nQJnLdnpbed1ynHzn7UoLAowGt2xsVcD6gNATi",
  "key13": "4KB6D96D8FX35Aa1p1NLR6Va8MMQtFggSwQ2gH3eAUhvucQ8xg5HfQCoJctdcNtamWT1mgFPgYf2utQMb72wAGmL",
  "key14": "3VAK95XrJdx2FsmMF1oWGU61fEf9dEgkV2r7eqV5vn6jCMcysNUe67Yzz74YoKZxBn7TEbpPkKaMQ3pGxEQVws75",
  "key15": "CfE8XzT45htQFkJZnQu82BFrPy7tMNXcm9cjdGVQss59KVUN3xHLsTMAn7z6BRvYMTbowpj227JrfCQQA4UhJoM",
  "key16": "66SfhBK3VzdoCnfCMizfUbBJVGvJXijk5WUh7ePpKdur4wvnC8NS3R6LhStaeXUuAPBmeajZR12dAQV6adzuaNHA",
  "key17": "4E5LiTWPpmV5vxkG3Zqeuk9HaVnVk4yMPXqFRcvfDazU4qP5KwB6n5BdETH4s7F6mMiEvpHFvsnL4KqJwpYooNXq",
  "key18": "3sbuHrsFHPVHWgn9D1X8MHHRWak3Z4dR4HDvgaxjwMnogVU9dLp4z8ibVnAfUr5CvQLhCn2s9notc9sXKvpRiNiw",
  "key19": "2v7LgrRGq3v7mzJ9WM7nqGqXzW1AifSdpzGQQDYB2nU8K2mLfk225EdmMj5kpG8sXGAaqDdirmnuUt5bJwwH9eH6",
  "key20": "34qLXSbHQUHS5ZW8aErRkkNDMUYNYaH4nwKn66zTrhztuyUBqcNj2XxofPv71E5ot6TrWSQ29E5jefg2Hxeep29t",
  "key21": "4rMGekH9DA52djnjVJB2hDwwfBLpVD1b6eMY1FnacdWriak4zWtUCpVSRTaQtQ3CYhJE7QMi7K9Bb6exFue2xyUh",
  "key22": "5MqE3KHNxk8pSmrZFNoj2DD5KW7k5tJ642NUEVavBbeMphcRPDtTciDSH4dJxRNapEBFKx1M55jUYR9mUMrVJSwC",
  "key23": "4WRFuXn8bmmt7oYcPhj6ajxq8evQKyDhpvEjDZtPDagXaoPnMqv7yW1ErPvu9yuuE6gV58YWYmTHFG2GzV4L4uaW",
  "key24": "FvmefdYXnujQDF4oDuFHXoHWadvTKnrbX78NjTBApGZaMaXxdTJ4ax3gxDt1s5WWTxWxfXe7sezAJQKbgFMK3sc",
  "key25": "44A34g5gwCw1YQAHnNvvqn8eFzgox4dwFowsU5f77ztAyJoN9q8ummtNEofjwUp1wT4Mt1bQAB7SddAvbxoddWAh",
  "key26": "fuEqCHA1HL9pu7mZSPqKNeMkPmrQCQ6bx5exWPTR6UAyndKPdkUoF2mAMT6tYGHXroQ1aNSpELFJifwEuhR5ozM",
  "key27": "rG7HCtYC2opAmZxVyCriUopSoPMLYMaYRLiQHN9Nms6Eh3FMn2abyX8FjAvnri6dptQDBCAdEnXhkSSUF1B7XDV",
  "key28": "4WDoxMTm1UHXFM4XiCzk3Ub5Vjn2XmNHKEf4XduGGvZozKoehCzMhQuHooFJHdXMZZWFvoM6egs8ghWqCmSTpq4e",
  "key29": "4DWEN6B7o3KTqzvSiD13M8DhqHf2QCnPDrotpj5HD8RDatFST1fT8UDmkS6tcc5giAcMk4hTAJuF5otXUFp8f1c5"
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
