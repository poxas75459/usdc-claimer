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
    "41xmfqEq4i6nnnMYiZ7QfBMr5AwsYKpMQJjxuoKLkeipCE6cwy7rZFubwCyiCwuaJX231qPSfyW7vrpDcoaMZUaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vxqYBfAtJG1zTuXvwDm8HQPV5AidVqKUSnMyiWB7cVeuezQscdUuAzadgrUcqhnK2gqkZz5u4itept7ekQxLH2o",
  "key1": "tqf4r7mxbVQaXy6Va2FSW7X3hgu7hFSVLP7pfLKQGsgmvaY7J6HnKjheUNcW9aYaYAiiJSCDqxMrWCyG6MuP4sq",
  "key2": "3PECb7PNxp37VWxoENhL76YKEMfocnSk67N1bzvuipqZbpU83Nk7pw28FG1B5tB4PcbEUdV47BH3qEJkBp9KQvY7",
  "key3": "2mNvDB6UMXTrAdyF8i9yxN7LRj7pgJZAWtqPtDy3yCjky5mh9gjjvjvFpPTdiZEQXge67JzjTkKxwXNKn24ubu8e",
  "key4": "23LCKXkgtEtyF5GBxZ7UAC1EEZNjFA7Xs5XaLA68vGTKVzPPSnKNyD9SgfHsWmS38nohzv6KWZKzxRF6f7Kptk6Z",
  "key5": "27WiU3eNgdkQ2jBoMAW7iQ1i5jePUtRBxr7zkxoV7eLvS7FREzdn9ghYXuXQDfyyc7v2HP5Y9ZoFaCWU2T97ZLSH",
  "key6": "2yPyzn3pqW5Qu8a7cYd5WUtLi2tcTKQsHu8KqxHnPSEE9PCvHJT9GMdcrieapqttEyH1bZDHHEDaWuuyUECNvRaB",
  "key7": "4N2KvBsdS1tUNoYiKQw7UpJbqd3hnhQmTuQNqKbEQ8GrfEYdBZj5Zh3H9j9S5mDNkNJ15NfhXXs8pnQXj1pNFRAM",
  "key8": "5swgFtHKdcXaasEEp7FBYmJ3g8Yo6Mo2N4WtLXCQmaaQnuDjP2WNHYYcqS1K1iJvfuSVfhx7MnS3EXSMGBx599sh",
  "key9": "3NKJEi5RWTttEA8RfKFCHVLz3AumMx6DDW9cjKWxRzjCykRHEdDYauvEiGowAKbdZ3WXPvKovYmS4Q2FU9vvXtsV",
  "key10": "4DFF3kQfptvAwqGrBKBeXEa3558dcRh2oyhAxBZTog1T1PMmrwYXBRZMoFoYwrvDWnWvMeJfGC379eaFHuDusDTG",
  "key11": "5sRzNT4z1ed2dGqkS6ZYjwVLkhyByMndrd1EktXAZsRfqV6Uj3fj3YbvUUAyzpewjR8XcyoJucYRqnkfWvhRJdzH",
  "key12": "4wSN8fMTfJhpM51v1NbFzzNvD9KHueLnN7HJ6roMX378GgM83yYGyMktgFCvi9NLj76RFz1sJaSQZ5MiWhm66Sha",
  "key13": "5SdRrimPKAZtrfxjVvvoaypCV3UYJ8ao7opsFDjZdw5waaN9ZVmf6AjhPbRVBKEkq6WuQQNRr47omTCYUY8w8nhW",
  "key14": "5qD4nnoQb4mwW9fR2pdd1pwNdR6qKZtS4rmcHYZdMXipubxmg7rsG9c6avtve9wRrXvV4ZwT99yPznJekLWccFND",
  "key15": "57HC9pWz6wTt5NWjbLhtGxVYTf3H8pamXKiQTbjtWi8tjtHcpj4wbEtPmWeEyCwA6WoXpCudQjYXWgC6a3TEhZVK",
  "key16": "27yX7mSfYFxb97dX8ReDLQHrtgBCxXUCGd7aUHUQgjexX9csbYXWUtY8PrtHAfmAN8tkmnt6yvN7X8ZVt4NhBGg9",
  "key17": "3jmDD4yTF7yUQtqqHXtmy2JxYT3fcPs4AwwNc67et4n6X4WVCfK54AqRTsBaLnXSzzps7w58SR3iS8RDFc9Q2xT8",
  "key18": "Rr2CJEk8KSedDqsJdbYH6FaXkWXCpYd1PeAyzdo8HLdGyXnSLCxJhDc8mhj1wq1RYcGL8oS5B8mrb1hdsuBWKPy",
  "key19": "rwrGHMVnm6ikPYDUEkB97nYZLXBzz4zdfNaQaHJLh4gMsLZ9DPMzGj9UayUt3kUSkyWDuU4B2vGCAUadiE8uPnT",
  "key20": "3wXXtgguyaUa25n35dEJ1UAh3wG5uLoP7EfwhVR9mjM557RemyHej11sk37zWRRvAxCdrgoVJbtjnNt2iUyjotua",
  "key21": "mBWtB5fLh7YANvb3RM8iuNRjJE2J3ehAJkhM3YWrAqG6LPVsp8rdaneGKkrmJ3uQ1fPqtH23ZpR3tZYjbyfetAT",
  "key22": "4YMyV6AjLteGqqr1AUH9vKc21xSTk4zGirMxzhtKJtYTTZ2YwN4taeTk3bDYhRyP833tqdCCmRV4cSxMPzWq2amC",
  "key23": "32rpd934zzpMioTWcuaPtvjKXneCzndyUWQbBkEL6wzgNkb1qehpJjiTQtjDbBk8kc1MLbVZh1SUSB4GSQ4KxTZo",
  "key24": "npPQpopTpjymEMrXX5LFfpiUw22sY4YLT294TVFCAsR52YLLYxwqcJW7asycLXhezPqKcVz8hDxexEy6wvUnYje",
  "key25": "5r7Kg37B5hUWBMsAanjbWjrAguP9NQX8S3EB5riFAAtbvPwMRh8fnqYpouKNBxhgqYoB7J8od6AmCXpe39o9sXpf",
  "key26": "4hYjvKE9J1jHGQL4NoHfLB6XzmqVtgSppaEjLf4FpPDGaCyaaPHc8k27AtgAdF2GYJx7rVu1d9USDHVY9aQHgi3B",
  "key27": "55VLJ5r6X1e77EfN8idsfTMLABNaJtEFmfMqv823cmSFm5y4gLC25p8e8AS6SGyptiGk1VzN2CjHQA1QSk5FVH6w",
  "key28": "5qUD9ksGBkHjeBVKGiQUiwgunpyAq4HJhosPUPkEpWg5siBuqfYFz4tbeiJ16zjmrtYbCtixxcbGpepCmCgRTbci",
  "key29": "3Ljs1SAY9egrUf9b3aB65R1eyj2rHDpVxRSCitGrb9peq62THAY3h99q8tJtFwe6mcm8PT4meArSQgr2kPRswZ6z",
  "key30": "4zN8o4dwg5G5a5ymEsCR1pvS7pJrD2x7wh784fRuu8goTqgLP3ftq78jfPB3YJnLTRnSEcT3v1ihX2XScLGPqtNA",
  "key31": "2BzdwUTkMQqPHvNqPE42AicaMQEfnR3BvBDMwaexVK6Muds78Js3u6gWocB57jW5smvDuTpU13ymBWQ5uDNMrjUi"
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
