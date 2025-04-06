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
    "5GnABfBdDGyA8kbBwTq8E6XwdrzBQan31EGjjDxbn1DJ1qp2cyiPP3HYuAb6MJtDMwHZeaBGKqX15tBqC4sxpSGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WuFTFEWaZfdZCbSQcuF7w1UBHhzKtNh2NXVNpM99h3HewWqxkE836drEpYqyPtny1418kYxP7vx2kpuuZYuyfpz",
  "key1": "4VBG6CCsPUzdZPGKwRg77xJ3x1sGJyLjaf3pm4U2R6jYzWcfvn3fFRfKUAkahpZtsTgvnjtPWRF8RFLAdSJZoAHT",
  "key2": "3k96wD99UB8WthtyqShEM1G7HrJiwWz32e36d5YUuVjC1BGMNrcD9ghykdnVd78TD5qMdqQuZuErV8ChFktFUTST",
  "key3": "5ugBYSQgZeJaTKwJhbW38CQjX9tP7Mm6gMearoH7BpRaer58ZxEKP5RkReWx1ve738JyEwJZkEzwaAdWyeR9fmqc",
  "key4": "4PJe53agPHhvoeDdj9KrPTyh8kF8GYmgwLzTJqKnxBM9fNTGUpxbLnrte2jJ9TNvgnfgUx78LVYucbN5Xes817YR",
  "key5": "2YvsCYd1fsW5ytXjX4YEoqqR9WryAqoD6ZXULBHBYN4CmLwvsXVfmXjVdvyzbXFs9JH3CbnR75MWLMdEBZnCMpF4",
  "key6": "3i8tzqBpEVh1KEPmvoJ3ozeXV9wSsyNczQsAZWmakdErETt5HZuY6JWhvjPfocL8CNA9twjBeMu6qctnLTgysk6p",
  "key7": "4XrWBR2YW9JY2JXfeZxD2nM1fPhXqKJSDnxwpxvoBbA2tpkPcHqXpL1gRxWSoTYzo4L15ur4E9efU7M4Y5tpcHmG",
  "key8": "3c8BgSNJNAQS6VN4MR3VVib3G86kTUTkpTXnndSsTX99y4PReLxTa8raVdwMn1jaqVDEWZWn5c4gqftN1DyeA3Fu",
  "key9": "62ajZ3CKVBZgrtSfGeo521EM6JsKt6mqUNThtgb7msgLsR757iWeEPKF3EBvERyHZq3TuW7KLNJnj3ep3M1faGXS",
  "key10": "5FUdRF35Zvq13taNcyi2fEoQepXFesLPr8St7qeXRVyUUi9NbzUyc8Xj2QYqvedK96yNZjFjDTUKr4QN3LQ21EcP",
  "key11": "3VMEaoWK5UZkUj2kNEFv4Bx1H99njkhUZiEX3HuYGjHhNy3495uR7YgYYugquKmHJpCKXNvCJsqLRfQykcN3xWeH",
  "key12": "4unYDrA4E7EeYDwfRLcMwD7tnVknVEthW3EtwQMFhLf4gGDGQAukRJHojtQbYjPrs13Z3ytmruQffHbjiXB6gT2d",
  "key13": "2P9297DNh9VksMrPsz1F52sypGACkyGhK7SSqDbpoExSpM6MbXGs46ZSAw1JURjtza2qnFVBxkLxFuVuuiqSJ1dr",
  "key14": "2v6TK5moEGd2ZHJm8jffRUqQ1SCNJzxhrdK9tQjzmGcw4dRxGuLAufB78gg2bVc6xrdbsuMdry5zGX1xQ1x4hVcJ",
  "key15": "4WHiDYDgZBEKx91D9mWEFV378LGKfng3UyuMvGRU7Vk37B9KrD5ZRB6zRC6NxYoFxE2pgGRoW9oQs9xXvXYvA5u6",
  "key16": "2jejDy8GkZp4QDWE9rU1YuonJTHiqhWTNzbd29VeNr328Uig5JHbr9xWgJ4jS5usoS7B9ucdfP7ACbPPZeDFedEG",
  "key17": "2iuM26DUrQewNPw6W8LQb9j9Q9FQDkHSZHUrEfr96UjvT9Syt9BuWuoxrv839Mfv7ooMEBp1mrMbZckxdtPZS1Gs",
  "key18": "2tFismpDNvp4cEZfm6Ri4bJj7NkMUoyUEvrvvEncAQ3hJsNun129pmhWkfi1wJ1XQ37tJozPwd7bgn2G4mRZhEuH",
  "key19": "3XaDvD679YgcRBhxDy9X1WK3xmjSPTZti77Apvrw6n1xCFss4bbsMazLuS7wB2kqCXEi5b9FUaJKqeb5TGzo5TXR",
  "key20": "4J9mwsQVXD2JXwg1oS4fYXrmqjaxoM28KVVjBLunKo3okwXYP95HeXiz8yQqk4aBbjrLtN1UYzToMvSvUbS9bgGb",
  "key21": "37M7sSzoyybeXQ8TZu5D2bGmqoYQyqcWLYxigvpiBesLBBJrrgaEokeYJppBXH1vphdPiTnKqn818rtVSfu5L26P",
  "key22": "ocsr3j4pGh5JHdnbdSjegkBjHWbpuQ8vAMwm3KHWZWHGUNDFNat7vnFAbBBJiURjyMHovNxLydn3Tzr982hPx6z",
  "key23": "5h2JBocHcenCER3rBAskQGc6BgSr1K64F5qVm13LZpZxiQYTk615G7KnwJZMqmjJSTovhHuKkBqBu51sUnSr9Jsp",
  "key24": "3yEs2dNXhAzUdM8i9VnTqcrZmT6WrogrxZrvU1zGce2k6zK7VSaK6PEnjhunPaKKb3iuPTxehS3gj5SX7qdh9YBg",
  "key25": "5onoztjFkpEDKM2LrTwgTFbePFkmytDNT3RJFFmAwif7MabwQZDpXg7HfWgCgi3jQJEn58EMthDAQ4MNGnDU8vP7",
  "key26": "2mpmyb6Fxx7RKc6eUskTzWe8KrZ3Use8wtqtT857tUcueaQ9qSpQXBvRLHQhwv41Kz7dQbYveNiVqkAaU6x8GMV8",
  "key27": "3jDF9YPZzT9TET6zbHnv638aCKPZLVsnoLp4urEMNfL9TaYb5QpsNayYtHimMpH2Anw419YcB6Gj9xfacN5tZwp",
  "key28": "5KNS1aBHj5HSkPuuEcGA3am79XpfnYKuVXUjmQHAoscbjAHCP7G2PaQtxvFcrrQGnjnw3PzWVYRsbLiLKDRwsH6n",
  "key29": "2WSDvqvQ5Q5RjchpHfB1StpCK32oBLKUMuYJRrZYEo58pir8hC4g2dDeip7GNzcCSWyzswWpwPPNz7khb9fb8u4n",
  "key30": "B1fjsU1V8StFA145gjLwaWxSUHmKijkWdftBKCwWXTBUJ9YtkQzg85ChVQVRFQrtTWPLw6QHHQYwngGhWUz4BGt",
  "key31": "4UQ5gyf7mqfgT9eDNPBnsHm5RnHMFb2AzbZmGRZACoP6ZG7EmprZ6xsVwHHm7pw3isY2EyecrvMGFhatsN3rREmP",
  "key32": "3JBPGS4NyB6qic5kM97qbhjwM1GfV5NxpuakGS5ayE3NaMk7nipwCzJGkKL8aqxbK9EZsUVfZfxDCgvXXTpyQBTS",
  "key33": "5RuqPmpYV7k26HpKMvqth9Hth4GP68LMz18UD1dCduuCf3SiZLusuCtSoCPuqanEwJNo2Bkdiqbv6BnLM4BtwtMU",
  "key34": "49dWHYSX4HrYRGZxj1WvfyLFiTfhB2v2SbN13cqPky5cv8DtNDuCT5Y1SQXYKoW2sFFn5q6NvHWATufHPr48se7b",
  "key35": "mJcyxKm6N3zxVV2RZWauNm6YV8uPQ9MGV9xbbZTem3ATDke5L59DuV3zb6os3MUSt6iYVzabCLkGKtD2pyqirVr",
  "key36": "4Yrzh2vdnRVK25sdvxz19PtYsdYDfGEViefXHMxFfKVTZaubS6C9mDueNvdtaCqYBkN1C4aPZVNVW2xFsHZ1Ze5z",
  "key37": "49GiTcS31gZensdwPYRovqcQxkboEhTnxFyaTWZYmCdPw8tXbYJaQh3X8xhaHwyb1FKMhMJvBYhuMACYcknr9Ecz",
  "key38": "2nxtMEY7WNiZzVAKhFqFkbYawYGTaKivNtvhpqNfCAfJ3b46seFw3Vg32rF4xX8zKmJf7RcN3qCc7GYPGHwMs8R8",
  "key39": "26P5D1Qa2SobfY3Q121AfTZ8YckodJnFDvBhoB2bph26etw6Kj4HvZanyAfotP71kF78QR2fASJBhR9MpLz9h9oW",
  "key40": "5z2qg3UD87kWULqWxrtG6rGmc8fohU3qoPK1B2nofrC5AyWymKFwSssxDeA8GFDex12yQXohTnunaKSb9NqXidW5",
  "key41": "4XwKPa3vLLXUbFb35KTryFFjq5cw7Ax4zKpe3GNDAcxitQdyPAbrtpGySwu7VvWbpGsGGb5SgFDLkfP4Esrb3rzf"
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
