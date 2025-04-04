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
    "2U3bmErcjiZunRpqTpn1pRzP1ijvJSp4CTUkYSMZhhmQHaz8PAc8BZiR5DYdntnHFgnnfWpCbEzmzn8YM9qVTLmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t5DCKjCgZ7VgPa2aeUQUvgvbrnmrGaz87wPfHxgV6NJFGvoDmoaHmxM1bbxabioLSf5odacsmySsm8GttKrijAG",
  "key1": "5i9RfukxqA3o1x4eQ97NZi17ywztYmW38bk1kg4dZvVQ1NFQdRdHXYfCARC462sJCDpkQnBwUAkECaCfmj1z2McS",
  "key2": "5eGdLSwtPtw4H8VCRtfaoJ88SukdL6psngtMZNzwR2SMENWdjaREkynH9DVvEtm8C7v6D34Saqzn98VpvWUywSkK",
  "key3": "63mF32g8CMeM5Dh66t4X7xjdwgULUQa15UQUUgk9TXx3aaVXKwaTyb6WkLnqZkYeZVjMcgqpRuiLixB5SQFJUTc1",
  "key4": "4vej5u4eHm3bLYwpMTccAz7eK1haNYntdeQiEA9UiqgxgALE4bLdKADHjic5MR8oiXWEWMD6mSUFE8canbwSq7Yo",
  "key5": "59JH4jdBPguBRN2PWSWKTZdhc68jrp699rmtjuJDwei7Z9WuHV4WUEmK8PfGcyNNJgQN33Bug6YyP1hcmW9dy3WM",
  "key6": "558bxjwjn1JT8sjtXw7ZZxCmP9M22dS7aMgj7Yrr195Tv5dWgmQmfqDSo4sEsXcoEF2PozJquQ4VsmeNR2fK3F37",
  "key7": "4DyymHJ3Hwx568NygyihXj9u4sYKnpWRJhek4HNHC7tdH8C62ss9vZ9Uh2bph2cWjxF3f6jrHQxDBgmaTgqFb8V4",
  "key8": "59hG69QJ3vg3tjZ5vZWG5GvS91p8FqWmeDo6BLK3KeZuQfPPyRyVqVqy9MhuJuqVDnrsmyrwDEpHYTN14ncq1jyt",
  "key9": "3hJ62VYmtsf13vxSmSsfWgowJ4R5RBHwxZWVeRqFgXqTXtmkRMyL4ATotupqR3sgmhi85mLwTn84mDdL6qSvgSWZ",
  "key10": "5oR3sxbRt7LgtwfuFTxU22rdXSPKvcAJ8v65cCRWAoh14ri7djr9Qwa2u5o4kp8z5QTd81cBTv3AtFDtLQSMqjBE",
  "key11": "nSF1kwjQgrupm9JQJVjFVAM8tuzQa6yd8kESxY9JxczNxKNd2U2NUdmUCqyU7rSkQwwzxCh9L8tYAHAxDhJBxG8",
  "key12": "3h53Ecjs9mwvfENamuHueURqAoGZgnafH4sfgDxwvpP1acRVY2pQyn2y9BqUKDP6p25dmDii61R8U4BRb3kPqdDz",
  "key13": "49nWZ4cEm3FXg8aDFbYQv2Yr2VjYVRLYxKuw2BpBCkF5KfAiRawtekwwCsW7FBWaCsoff6n4rddrwsjRzNoyWNrL",
  "key14": "3yCEsYEeJisMdseHC2heFHr5gYE5NgPEneUtgiwmfqnb71iiUzV9gJuP15STCwesrhoWdg8SrbAkZrLZDGhNTB15",
  "key15": "2ze2LkU31xDG2t4fSG7R8FAeZCb8knGTW13PgYJbbYVdWzdauPYDP1Dz4e6dmvZTRJ5kBv2R4zEg1miChd8HyeXs",
  "key16": "2UyjRwryN9z3bLsTpMUi9aY7CDjA5jL1PdH6Vpry7s7a146wSU7VX4Mv69fP9pXoNhiQ2aBANzTjcm1cKEKGGjJX",
  "key17": "5q8oWgaegGguuQZ8y1xJsNDQjbnUqyhkviDkS8W7QmYHqd1Bu9M4mRH22Xs9Di3YqiWL83RVEfzwkFPW7CpepT19",
  "key18": "5L9ivBShz6VdiP57pXwGpc6W4mJUAuDAfwYELKuLxZLoGjJYjE2rzGGLeitSD851bhugVsRskoNadxZpC56s99SJ",
  "key19": "3abbm3KSrwCp94CWbCKPXcet7dqX16hg6erLLPmy4drfc5e6hRGnz4thALBThKCQ3kpkeBf546ZLdFcTpBAesAbX",
  "key20": "4pJVgRXgUj5mLevxPu3evWUUTZq7M67WHd5sG6BN18nDeVWUzNpaq2bxUQXFaFbz4tWz16qezh23aeMXZx6MBCys",
  "key21": "4FZbqs6d4W2ZNZxDa5L3EUg2dvB4AhhnJdmL8p1qNuxJ7Y8DXo142bBcZBm7Cp1vMymPs2J54LeBespmCZ1qnJJx",
  "key22": "32eV2xgZFm931Y2Eso8hcueM3N8qH2JwZXHzN3rTCsiQVFT74ojHoJcKri9CVZ8KkKuNAhdXGDR7HSLC2tzvchUo",
  "key23": "28pGtQHEyWCFqfgAqhMJoXAZ6Eooxp6wNe661Az8iioqoQcV6XYr9cfqW21bYZtSFZdrCJG6vUL3xkiKLwkTUGFf",
  "key24": "2yCqu16Na1VZuxyVW1CDaM45QZtzA9LGWSRDMLXZLznjR8zRbRZ9By5k5vm6H98QQu6sHNyDmSgrdD33LHyEuGbZ",
  "key25": "5YprKacmHtdLPyW2rsi9vHnewGdvF7iNwuoxQ1FZMMCz1qpxgLUd3UppuwR5zm4CXgrNAm4wc3cjT7ugvLCTmrJy",
  "key26": "fa1T4v7HE3CqRwpKt14Q5kw7NheksxooDgM5XtkonFBHADVgzxKUn7KsXXv53hEKUQuNKspBnM8Yt3HB6RZTo6u",
  "key27": "33CHDtzp11Ch1PJ7hpZXN1WoDxzRaKrAz3eBmPP4i7qGnRiwwc6hDwS2xVEDiPJed5YQd1rHfgKDhM7aUx6UcPUP",
  "key28": "3vWWGwtKN5D13B55i5hrzL11DLgg85HKQwUNK2nNVcVMswZ5MbGxENYAphq7SPgAD7N3dM6paC6kiumiyui3Rewp",
  "key29": "4gbBrMdHu31zuw3qsi55ZYuzt5CAermH6tfuothte6iJA9bg7Px5dgWoTW8C2VpVFNNwXE6jniSeyWh82QA6ZdEx",
  "key30": "4JizszGNWoBY517JGGyoDb3Piu5Nd7Qra7SSwbiB3PgAj37MgHDhoCQLPt4T3uAxHmPBuSofkEdWqEGqFB1xtLpT",
  "key31": "42v3Lc18WyrLPSevE96S7ZJoXrcDBF79JotcmayxNnrvtQFH1CgDud7de1kUz73Qwhuwd1bGdwgu8auFMAWvayEB",
  "key32": "3FF8WJcK4VyQwhm66y8USwVXQcgbk6k4pKPV9Uz1WFaUmYd11d4xwvhY65YKjpUWLaRWNe4AsjsR27d3oVi7oSHt",
  "key33": "3rqUWehAwuMz2YAUobD4JLN6zEfTZ1CANqU29UjJFuGZZwayJfe23k5HcsiHqX83UJBeLKmoNGhBC3vQj1ZAVXFD",
  "key34": "52sV14NvzcSJ3VAkoTAbEgT23ZogHv1CJrXqckN8ekpLt1fuvmyKdacLKF6pQh4RtsYjcpS79nNWMD2eygTGEcpy",
  "key35": "55qb8LtnJmxNmdy2CcrCYWWp9Jgqe3PHrcfuvThFkc7ouQ2ChHNfKkCrxaVuiuJ5UBgPzyqw3qyfmJuYWTrgHyr3",
  "key36": "65s3PfVUzH9qqX1S21AabLerAyHrabzZ4UYWcpNLS27vPx8auyYc45pHCNPBFzzLioEgoJuGz8piEodihQKFqGEf",
  "key37": "3kXWAQ7aF9F9yJHMwmUFewp9jbHHHKjchR1LokqqA7r2msRfa9ceKE8oB8JdDeZ3kqCPibcU7H7iafRx2mFgBjhF",
  "key38": "47J4qaZherzkUbSr5jRxapz8sziSjc4RzGtipJFbYAZB8TdSfXybGLRAmLt7rhrVGkzCc3nvCi1KT2P37bESw6j2",
  "key39": "2wD61u4q32P6GZz98goKBo4hfkYrhjSQeG57AWCTypsJwbdSoYF5wECPbhFUCBKwhvPep5oUW2JWgFv8dfvQuUjp"
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
