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
    "3U256nuaJVdijw4XHs7YwXjYTBrRCKgvaPHA9p3c5xyzc8KirdxYUCzxacMZjPYmKx9EQPfuJUahKXKJtpZpxs8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NgnUPc1CfE3bqN5MhMPXEXQ49gaLaxcYoEPC3HiKPhhHHk63i2F9Sx1qxELXUbSRBrtWSmxKuKVLaz1SFh7G3Hx",
  "key1": "5s8B24Ye2jcae67LJkd4TR1gkxag6QM5EsxQ9VwQRnsUUfYKdTJjQPLoYMEvMAG2xV5YB6mdmkqmUZjr1gfC3xCf",
  "key2": "5SQ43pohNyumqyYqY8fDXT43wCwBADjqrdECp1nBQMiDCHJRDaUJYsYonCpMyk9h5KPiMMme8EkhzUVD3uLp58Eb",
  "key3": "47DAZjseZ28HrTANHL92G3mgjUyA4o2rpCMY67d1SKwQiwnd6AAJDcYbDp2JE3VSuHWcZjru3FKJvEEohH2WJXt2",
  "key4": "UZCmGrtzK2r2NpthxkuV6eCCo3UWPCrCsrZQaNp7YXp8pgWRAPUc1hhdiuGif6ceGNgENDLaqZCbERfcfrPiKht",
  "key5": "3nrajAE5Kmj6wujzAyFXgEZKvYibpq4jsfGNrQYDVUyJ7DVzpEd1QVwS1tpMiE72osh7Mb6w9zD7gK6KMuCGRSBK",
  "key6": "tY6xW9ceDemznSaTan5cizajen154ib9MwQNeCSdAhJnhHZRRPZVZuGJCRP7hCruuPeSYptAaTUJxWkoiWXpoN7",
  "key7": "5Y6zjxPyV3BJBA6C1SzetZCxjA9jGThDMwQv2qJxBByfwQNbjp3o1BvHZHfYbv6d6Dr2oFvjPqBsU7ysEdgVFdVG",
  "key8": "2uNnV6y2jpabqNTaTi91jHicN6WYbaeJcrbpP7TPh8pxkZRU39s9KFCPYDzVR5aWQUfBcUe1mbiGMfqQQjfVQMwe",
  "key9": "36yFH9qWstxDtoZ4fWVTuvCv8BRrfFTMyfKi7NEkEhXH61QSeRDqvWgxXTzgxMgn2UnyHd2GhMjHMEApo7Ydyxzg",
  "key10": "7byicQXbqxF8cpog1z31TAevQJXaDQmmfE5kmkXmEspDkGAYhbwnCQpJqiLcveGxV48KcFiaYzKGMW49ZfjQL3Z",
  "key11": "5nGCuH6TQrNvDk8EAya5saB21qWnQPiBh9x3SpmeqyYz1FjwA5R4DEiJFLbniDm5oxcufEHFqZxHuhHksRVCkpp",
  "key12": "539pydJag17NDE43TN85qtfaEPujGGoqMqw2WwVj2fzFgKGGEYnFeteCsoBaN8F43dxGTTY5n2vzNJpjovxKChYB",
  "key13": "4FJZfjMETnohQ3NLjiJ7zqQA8HhR5zxa1pXJmqDpzqde2zVUkBJgAcT7294TXF1SkMSkqFrbhVpUaNAkVZRtZKQS",
  "key14": "CdrJyWuBTcyUJax95NGYBETcr2rwR1F7iwSeXWG4UJkczBpvAjJzqsYNz4ZKng6eMCErDVLNJADZwGbmfjZKYVV",
  "key15": "3Bds4Vc7RvakRzf7xU47XP2pGVQDhTstNJ5T6oaeXHxo4FL6SLCYWPpRfgZsRSuPRW7gAA6XXSBY2FpNqyRfHQRL",
  "key16": "3XL89E9a6HPxYEY6xkcRNS6rcdNJVtZpbqaMUcCKsqvScZqhgib6CfeDrGKaGP7CitWhUnUj59B4exjpA7JqwV3J",
  "key17": "46hz61ZLaT7LkYXuhGx5WNeTdK6r9GHYSEfQsyCKrRY5bFEA572C4prVTWv3GtdYF44QmErxUMaw4p2xECUZNDfV",
  "key18": "4t2bnDUH6Y1PXxq7NzwisAP1BuHGM8NMUAVtN76eYxFQVg9eeYjtHoHggZ4SLnn4UnGQcVtZf4j2DdbQLGWRkNoF",
  "key19": "2fZwC1UQwseXbrvpgH2bB4pcwezcKhWawRtAR9bTaJKfAHDSzpp9ddHT5BApKybCQwXArDR7bJGGuJemLhwscGLy",
  "key20": "8tB4syshvWiPC7eVpBDnb28M2BRn9MkMMvg7Tw7sezgnFSGnm46PvExitsXMR53TrkSDu5tCgGdw3EWbvLMPyuY",
  "key21": "2C999NeFQ3mLuraxtGRzUf3ANMGMXu8kzpT8YY2QEXvguPHgdfQTP8BRj9wTVbKfnVpaD7GDYnoY5cwmvy69PdqA",
  "key22": "3UiGF2XafrVxJ1FZ2DPFeUVxob8awhcShWGhLsByf4QeLR9zTwoFNkVk9R9FouSLhvbonhnW1DiHtq1B8aGNADYg",
  "key23": "4btqTh6EN79hUFu5enZWHCCqqAjFPtR98PCAbN2k8bwwM2AAyszbxf9kuLUsWv1v9vS6MTPxNfHUGLmJKKC1Q1qP",
  "key24": "23NzjFL7nmGRHVSdFsr1MGQdKheb2UqCz4AkrxA5wShJ6iquWuud5Q2eniGmaRpuM6woY3iwvvsLBovnZHsABb2F",
  "key25": "5MKo7MWHBXXGfxGWssZpfa5M7yqN8LKT6MqMXX5PWv5Qmrqd5UXN4vnzxQVsZN9XmH4Uxf5wqMQ1j3tiJskbLv8t",
  "key26": "5jxqEnV2ooWR7Kak5TKy6VFKk6Df3anKcopsxJUsvBYG2XMG3AttK5h2zPVuq6maEhRbemHbzUhZv5MnbXxo3T7o",
  "key27": "p53o2FFHwnAYnehhTSZJm3L8wjG8AHC1goxCzni8Uhm9tfjvgFH2Hy8BCH1bWMWHT1etTk84v2XZYvLdXNjd2vk",
  "key28": "4s7stH1EBkNdDSZoj7JZRdv2eFmohN3m4VM4kSpfeRjKsJDxHpQS8GDd1rsRJ7iURGT8t64nueSg7q1EHAZuhyjm",
  "key29": "idcL9hcgzgM9jeAcyu7dFNKKgBujkbBVBU58N1xTwnXMGH7EkheBG6bsKSFC2TLUhajUwHpPVvz3oULsnysmhQR",
  "key30": "3MyRYAQMG1hAtxLwJzhTkxbfhpfBJq3YPJo4GcMbsVYVnuEH9HmuMaomVxoNYfuSrnqZjJB7h26XCVKCkVQT2BGi",
  "key31": "3yvAN3kb7uAkURtmiTTcV3NKsUYg2fZ8e7JWKoUv5qjjMXCntqc6FJ1RFVxWWgpHE272rUj378aTavFvVi3vUaDP",
  "key32": "3F7buXkFv4Y9eP7BpaWYvTis8h8yVP32pCxWqq3ZiHUBTbojXmxExdkbg71PZXkfxHdYnnxT3Ch1HgsptHdTt9ZM",
  "key33": "2Bsx1JGRtf9tdnspAGUrAXduEB6qCABgtEBWLhmSXWBY5JmbR7mEwHrkmPj3RiFARnK9Qfk7HznYnqaF139GC46a",
  "key34": "5RD6eVyB8dco1rMCrJqjvosYBhQrAohLzF4Eoi3mkfMYfSuwPfk85BYZDrFYYecMc9s6M9SXbkyfPC7FVfwzw8KG",
  "key35": "4PZSromcrQSWJnvnBJXs5S97XaEZqu5HnaSpX2xirpCnrLAUs9Uyg7yuFv1vENsvcds6J9iGfN3Wbe9JAAmbfS2a"
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
