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
    "2JMraZGdDBvJPc8MsQ3sgtTASBDLz9pitFwL8mXAUw1i7m83oRBZSpKbEbS7bkgpVeijJC5rKSEe8hE5UHjcwhQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2koAUqifBMbMCm4XxxezVws5MQ5ACzJLYmXerd9P1M2nHJAKMnQXZiHAkB25i5DR3G4UuRFBqaJ1YqtdLjpznjR9",
  "key1": "3fPNgho6MGHHebVdXo9qVhPguzDeKwcwY5uXTApVg72zs6fmrABnL2UoqqWYGP128PGUHeStrzLM5tiUEDguaa7M",
  "key2": "5Lr7jqp2B7c4L8S3a4DLdJwYfuM4eXbhrUa1k2p8io5xj6EVMmJdpozKWjdhsGCWcKgMFKuoSRgBbhxYGRRbqxNm",
  "key3": "4aSQk2CLfDC3P4Jd7mnrjHmuw6xLis1T4VP3AkQqDzCBxF2pdF4YGDkQE2bVF4jRnBoTQiJ8NKzfLGy2PL24hwZ",
  "key4": "2x7oGTuRifdcADT64dCw4MKhFXnv88yWZkCHcrMjdCox3qSWdBftUWaYztiGp7HcdkYHLaUzmqnLoQEyPAZ4JtYB",
  "key5": "26G8wxLi68TQZSieezodHJUopDk632j6VU29dzEkT57QKyUHpdAuAzWxA3uUsHnH8h9GSjH9YyYeJadmm5ckXEvc",
  "key6": "3hRgXAhWdkxsPn1bdaAM6gNe1RbYb7EzMP2ZzXPwMVzd13RZGCrCnh3TtP6VM2neS8pCmH33abFRbZSiDQ3FNB2Z",
  "key7": "2Q7xgojWiG6kwq2czw8n1Bdcb6nYJW15ByfrAaFoUQe1jG2dn8XtH9coCKNtAibxH7QiCgG6yDGpLWqVmQtEGtEG",
  "key8": "5QM3kA3QMJ3Y5U6XGM52cWvW22BwtpzoAuA2KpwwstPkHDHVpr6uPLbG1QagYAGSqzAz158LKJKMGLXQAgScNiXP",
  "key9": "5FmfGALnLEwCuK6R2o3xbVpmBUepfkRdQZcjcSCxJ7izM4yXxwBgezs9FVCVE8i7biEG6jm87E8ajke2rya9t2ie",
  "key10": "2bQbjLWdqe7Sn64bFrqwAqMqYbnxpGEevSvFoq7JMwg1hMzQVABDCw7d91K3kwzHaP7NMCciPAbspTPoMdDDczL3",
  "key11": "3Yp5wYDVsjnAyGmj3u9gJkfMdwV4VkQq4Bsp7yBqkLvrM7SpuZzT1RByRFkgSCqw813926NB27bcxBgo4wtahhid",
  "key12": "5ZcqMRQXGPaEa9N53DC3q5xUujWrJpkFjtC8LMrwVqD7UBkxzXqSvZBvVdKzyqfHdZkqjMKRapVdhUDhjZx6hjDr",
  "key13": "2SAmsWBDwQ6QU2nVUitfmSBiKJ4xSxdGRNKuLXtxmqAqeMFF3KEiHFebdCLLMbQcGGbtJRJdYzcJguCoUfHZpnP6",
  "key14": "5646Pt2gppyLUbdpQ2wAg6TzuLavM1htzkcrMkxf6FwKeyzouKjvqfLjJUx6rbcAkabLpRszFEoihbKSnxYPHSAX",
  "key15": "5CDjnhU7MvAi1XsHp47ssiEY2y8mJZcJSmNnqJmtp7ixWUQFVDjmzM7SpQbLJs8vYTpdJS1tSymNDH95u4sbC9go",
  "key16": "3roREZjMPT7ehm56Y68yJ44JWKFxG5nkxoS6TkfRBvXNK2fKk3QsZ4BGn468SPQBKhcdNQqNqBKQGNekiKE1WjWE",
  "key17": "3dKjzqyarP3GdzYPLbVP4N7SHcLxDxHpuy9Rb2NEKhqHwPskXLvrFLnr7xnNPKZ1ku13LTrJ5ZJga4k38erxKtER",
  "key18": "2VjSWWgzczy4wCvvcq11WBBCproAunTj5Pk6VRQ2bA9a6ot1NFeugESHkYk6VgyB7kcSYKto1SLbodK5hi5yCQ3A",
  "key19": "5jMi4nzVhW1Vsu1ZwyRYyhxDNFp3dtN3NoZhbpoJg4QATsxeoi6eZeLeZc4gPEd8pHfwYSRuL6LoC8JWh7mSLhjC",
  "key20": "53BcgqqgQC7XfZ4ocVYBRYFnEauxXDA71WrJhzvW1U7Yua4KS7bmmYtQif24Kerajd5tykSa2mRW3uWVZyqyTCvs",
  "key21": "oTUQSMpFKy8CcUAueHeWhQPLQwur8JxjPN8EiwxCsdBUuXnuyBSNtpTSxDVWqmCCvKjNCcrJ94YLpvMFFUDBD6u",
  "key22": "KsoWw8cBusEQPPrt4VWmZxJkQKc3cBue5EQCf95KhERJ4m3zrsrtCNkJB5m4M1AMeRts9dvvMLw15aHnkwLuv4L",
  "key23": "5CuUwUAWV8NG4nQ1HpSCeNy9qCUSHMLno1zucwiMMtHgBzgxEGwqTXK43JPyQL5Zq1UkToa7ggJMMnEixATMoqGc",
  "key24": "HbYUQCG9cKqYFigRGKRhdTDZEHMFQK6RQNQaRFV4V3nSSayjvxoGsBGRU7npT3WgH1MokiVcdFyk1Rt3QUG9guZ",
  "key25": "3tgaFvb9UvMRjpjJo5f1wK7EPLyfnpSfkWCUKjwEJhenHiBngLqK7N2VkWK65bUJWsqgP2KJp3bHhyFK94sMYNju",
  "key26": "5rUEQ6YcDcFxT2TDzgRdjgBDfir6Lbe1SANMsiM4AnTLXTfRdj2y8eDtSqPUjpz4GUCsoZEKYtawNahTBGUjRtYw",
  "key27": "vgGyxJFKR5AK5yn9RmiEfZNUyDmDtfyqTAN8zPyi6Di7sEcPBP1FDGGT2bGxbmqScr3Sd7zYPd5yRbEeL295J6b",
  "key28": "32KChmTuAifj4RJGxNMEZ9pzgm6WCe3TS8SWrp4Srt86twDrj7STzEFhNzYS3RNnrJSKogs7XCNcKmbohnsFtKXH",
  "key29": "AkFgBTyMPFs5QLsXB6F39EH4z9ssXRZn4HLJGMpagLhNv5RUzzvkXweDtUhXjYqfJeMLxR7kt1d7pXbe8m9mxcF",
  "key30": "2M4pi8dEcYwvqFtmVtKRCfsdNko7c1rvdeway8VJTiJgaThFhHgpjoaHVgEAp8RX4MxWppb9pVu1r1UpWcHwYmJE",
  "key31": "2hqejEkuX2Hn9N2QAT6TcxpkykDePHd62TqPuvYU1xeshFaM24QD2oPPEfbXgPBpKMNcfCmytPdLBS4xEZ1nhoBW",
  "key32": "3ain9AX3jzZ1w3VP7trM5q7PNU4umdWxX9dCxDGg5c6s3pNgZGRqXCms95JKwc2dVbYci8C4mnXxgLb1Y8Xc5KPw",
  "key33": "4Do6YHVtbw5i7CkkV2WF5jioWg8B64Pogt38jyEmm4NWjGT9ExaQabzX6JMq1iZqMxHzPFAn8EWzWfPNZN8Nuj14",
  "key34": "3zknzM4WqEkwQVBpUWi98f3NRKyCWWnbjqCU2ekY9CKG5wrsxUDSKvTb8kpG1tfaQJx8PotBjoQ3cUgdWPaQPnF7",
  "key35": "48W6kyNpd91gGTfCW2euquBqd9tM2KqQJcE1Ah3urb6FddXv3Sw3ADt7MDYiCZrC4NEdUvudKjCXrXDt7tmNNoq2",
  "key36": "2G77FHi5eVzU7qsGPz6F5crWXJfezwZhWJ5FYLK4QM7uosUhXzrkUBPCpQAhrA5PsavcrSfR8jKk9PiGpEMdn7FM",
  "key37": "2g4NofgyXKXJjfjjM1fqNrHf7G1My2cXdffzY3B3GXyf1yqbNdNieBrVBX1r6q8X8HJgQ81oYJiNgxjW5GMMYRxZ"
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
