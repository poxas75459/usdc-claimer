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
    "3q78AYTRnRQELEdi3eXHHP4hBWKKFp4FAuApbS6Sr9Y87myYuY9UvPNuFDNyDDZUzJMt5Y1bUwCfoJ3qhgpSkKfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rw4BCd4e7f8V1Wq2GqNcqdECixyU9o2rkPghdMSQvCXsPkHtbjKRdhgBz9quuCawSwTLAEJD9L4eV9o6k4pV9Qq",
  "key1": "3Y9bZS4jM9bsYancjMQz7ZMsbJnCCcfHMCGcifCzDP4xMfqtWTuHkTnT5gNk3rNGx7kGpFujpcQ31gP5BKHqiiGi",
  "key2": "qgPq7fdDW1o9VUYPDuQSodbtGSdHzqf6m4AjtmjXZvHVFhdaFaeoSbLf4Amn6HYHdYvpSjkgSXtHcfAqUDYHnQp",
  "key3": "3Nf5KSbrdCPfftT8buqSnPm9JXQ4KkduC4nyfiSs7o3JcsV3LU7GUkLqEjJgbbLmyWHViTvQHXZ3uB7SBisPaamC",
  "key4": "4GBNTrte8bpKtXeDaqxPZfPy2onduQUr5JgVjbiTzJhDdkfXNnEYPUcKLxw5j8CAJ9un3uEgwpYE1RtqgpWd9b78",
  "key5": "jzYsrQc2zh3xM7CxP33nCAuvwqAAyRW2HkydSVvydysQy5e7P16F4ESfX1jMv31a6pE6PtDebpCmAGt84Jt4Qqc",
  "key6": "3EdrK58xBY7Wq1C9xheipJh9wybVjAuFG7tfgeC1vfhfWsDd5bYS2CfWCN3jumMZsWJ8JjGzatXEmpQPj2qAbXRe",
  "key7": "3J88kYEJUfCh3XX6vRZ9ifgnJJWB3SvD7RxqA91G13iBM75i2FECNaAVcrEXiLUg7ReKrvbCedwN1Y2zLUEF7NV8",
  "key8": "5RWCW4kmyscYYWUmxqNkh2RVEx2vHMFGbtEJrqEAzqYcj3mx5nMMzqGq4LhrhpEJHBHczmCVYkzwEZvpcwdXQa3D",
  "key9": "htGKUPT2XC59iApjSjsWKJkHh662qTW6a8n2PCk3SgpV2hdURksr3pkK2MJrAY6gkmJ4vAyitUh7DmNN3bBTqTA",
  "key10": "3dCtGarnRq2sBAnsCc5HLXtbDgVDg7cuLzmkVMZNfvG6D7LuQrwa9EZGpBYzYwUw2pTZQP4rsf3RiH9i2g8fccfk",
  "key11": "GCfw3crcFcmME5whsxtATFSzAM2SpDQgehc5ieGtnwjuMWo4BTVRdRL8KNR5UwLkwa3kQHZXJrPNeu1Tnqn5QHu",
  "key12": "4devKKYadQzqBvGeiUbq8ucihHeUqZXAQJNu5SfD59paLzSUuvm7Gc1P6iz3zMtzCbKqNZybAxAnVowBPGmMQw29",
  "key13": "2dN3PPyiRwN3Gy8V2AEcb2ZtaBXPcotZRdLb3gykd7uxeaUpZWXcXNmn6o6tMAfeL8xDNWHS8R2tYoe9BG9BB2E2",
  "key14": "2DC9YRHSm4uhfu6paXi92rUuU2mXcHQzWbJjuJM188tY8BmC1mJvtZUX56miinUvF1LX9oAhvuDKPjdLdSSxe4mx",
  "key15": "3ZxzhkuL3AQbRqi6877pXH533otDcztVzjqFyENYMg3R89Cp5rUC2ePCCaLurgH55rPtAZ4R5vM3DiKSBaSh3edy",
  "key16": "PPLPxDZGKeJ4jpP9t8pb5YJHxpLDjWJL1WhzDFZgkJ9FWiCHCw8JqfLnAcyzFGuzxag59MfWTDMhFkdys1Nyjvd",
  "key17": "4kzn3TLPoWU8gMioXT6Mu1KmTbAizRUS8zLg2aLeydffJCbWLWMauMjRWYkJUMQ31q1uPt67o2DVzTbYYHv9cBdA",
  "key18": "5kAHBtkMwPjggKCPyrGX7zHQEQhdZNiH4oSCecFaMtAxBX3CA8tYYfqKgrWVfbpvGx3LZ5bPi6o7XEeHgAGfLMGx",
  "key19": "416C44ZXy9JFSSyE5dBZpzdYGHayqjsUk8x1iAcrppKKZP66KJ7BateydjZ1KJcSxFwrCEGFrx69cFAs1mQujt3H",
  "key20": "3Tuar5iPR1zKZMoiXoS41fc5pjPeQ4hgia3Br3aheJ6mvDstFos5pb2iwjXdnVPyDPn83GAEGr1Ffu2BB2aMg1gz",
  "key21": "3VYnLqzFPtmr8nLWBodfHaBFXX55z1fqrozuoiNWEfWmPyjgRLFixAL78wa5FPfRkpxKhaaU4iXHg8JMQZBRWwAo",
  "key22": "5zW613BGYAS2HRKcKVj9x13E8pPezg1ohxG1q8CqLo4fiGkJDzf45QqVtUDtmHHtjBvaAZyZxAhb5WZaErDh6Dwx",
  "key23": "LLar1o6gitFTZyf1UVBxq3FnzRoc2K8AhNTEjFKBXefws9YZK4PxRkLQq1YUmkqiAyQkph5pHavnCUY2Nz3iVVX",
  "key24": "4DoY6VNFnLws4mUtKEEqtKQ4ZT1KUwLDPT8CHspmwgCiZannPuiQ7Fy5KfB6cf8DJF4WvH86EZJAiTQFRduu5xSq",
  "key25": "5jNU3JN4u9gz1AMna4M6xTUbiSvMRYr9LPaey1njGK5Wrb6fd4LaXdgSv3yFc8vDQHdvLQN6METtVQdLnVdeAJAg",
  "key26": "4BKafhxgFXBV7rD2LhmDBkyPDSbbze3e48m84wUrcmTNmjU1UsDSxELsUsCXvqRfczs8VpVrrekJ5k8sxXZLEKUM",
  "key27": "23Gwe83t2HstYomhHnUDitZFMT1uePDCqtzHKJ1f2cNswLpusGNY3VSSpDKxKVdkM5gTMDpHDFog9gnzDLzseQmD",
  "key28": "67WRwEV4TtjdybXb9NKmGbY8bYypfAfoivSRYbXHYqQX2uwoV6m6k3FvKk7J9be6DzGyY5m1MEzxVd2PAr4ypWft",
  "key29": "5WVv83bMKuo56nC54GGAiP4WvVzN19K9zQZrmhiPc8nHNBfeXEnWEMsVUGS9cB5oWR61RRTUsLtP89NoJsxVHUAX",
  "key30": "okJ4T1SVjfQDN2a4cnUCsFfCQ1uk88Nr6UzAj8Fj64QeHpXC7cc2V1F857uC8VjraonHZUcjhZoDp7nSwZAbrTx",
  "key31": "3LosrDJdqW9fW4Qjpa6tZrpmJjnRUrzf3kx2Aj5opJyPrVuYnqpPrrtTGMuBqCwYxEWUuVtrz7tWbMr2K4Zwj5ew",
  "key32": "58wQk3fcTmERZtSPnBcDdcKTHtqA2Bqc1RsGxdek9mi5tDCrvMUuiq7kicacCmyWkznQqUqhewWPtAL1kWZexNRY",
  "key33": "5sKqqVPumUTdDUA9Bs5NdhKWv4fNFhmxkZ7rde4UEXtY7yqrTykDVg1S1tKfMmtByv6YBpBnK7yPYe1pkQkrcBvn",
  "key34": "4EhYS9ZZTyZmKzsCnc4YGNu3A5qonq9P789ZeiCn6BfnXmLkmLXwgshtyeSPsgWtb4Y29nmQqZcv513okHoz5VDw",
  "key35": "46SQgpMB5w2G4zRTtUh4w8VrPpoajViQT3d6wishxDDWLXHjH9JcbXcfEbD5s2TM8b56qGKPTHaAyHBhgapgnR5k",
  "key36": "3coVxHwSXMPsQorQ6NB4sHkFpbeQMS6wsCMWrapEakfkXXBzCpx6bFNeT65bkXAsSgVkwsZG9DmFquqya6Nwo3tt",
  "key37": "SA4HWSP13PJNPwGCzorYX3Ze7uvc6sx1XCdUNyyAizcgVCmzx4KEkckeM7FfeF8ANNCf5NCgqWdoWhY2cz7QJ1U",
  "key38": "4V2j37DxSoKwuz5sLBqSbGBBz3U9F4MaNuRWnWiJJMujRCak9FQRzwdsyEATPimbvdeEXG7XSCok4NNUP87GkikT",
  "key39": "4unbyvJwEC9mVfvNA5afQrhB1BdqJMJ3zGhegdrfobWwcKYdjsNX5NLV3H4KvsxkLksQvTDukWLdXhPQiycaHWMk",
  "key40": "5HM95NsfELFqz6t9x7kZKrmHWQ2hbR5RM9Vp5HthqjF8xgQjdbf7AN3pqXkRNUhzHrEanRxjoKuvUgUC7phEnrwT",
  "key41": "Yn1pmHYu39Fc9tkSoToDRovbdNva9j8ypUz6gip1CUJwgPGJY1YxizBj6jFKWVMDWxcSchFNmuuKhCXmZzkYjjz",
  "key42": "SzBNUCEvCF7v3ayRDLQDtVZRD7BD9kuQmcXuNDvJFGNv2MhLACa97s22AU5kLDmgsf6JDfeU2BNaJCniek9kaXd",
  "key43": "35WTKoLqiAw2zHZcopN3k2fJj4cUnj1qXTeKNNgcgHJDMmq5bY9eoNtrVyRCMiHXSKKmVh9TmrKcJabuY8LQCmNL",
  "key44": "4Uv17R6YvEQH3xnyBKvPYHnKu69hJPTmALeZofqV6chrd6jZvYfg94kyCm3ty8CVppsNqumpqr7mKR15EHoPAjC2"
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
