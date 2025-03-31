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
    "zxwDnQC6dF76xQXce4r7heai9R5dAkCo2AHe7veiGbRVWeyaKJGJN8d7TqCyQUeGirZurHazmhgu27pN9u3m94u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FiBMTY1c881g65SE7u2n5PQyb9RWmb9YqU1qb2rsTUJQa9E2ykJ1enBLKi3dThjmif9YCFhQfkKiReaFxnAYoRg",
  "key1": "3U9PWXeeJ2KmrSkWqNW8LjmSag6LwTqyE4B4bhP38hqJbvqjogTBwDFHPdrEp7nfMkuApGE3DrhDHpbRQinc4oof",
  "key2": "5X1Mzxq8VhGGUkdktRbpVxgrhcQMWHR7nyHf61kyrfrWDaZ12ndJDNyLXcVQM8kLLCkpCzG75RLpxQDMhNC3xas7",
  "key3": "5z9qToKnZ3YyKXGMjmePbCGo7WWjWKmoSM4XoGGgVJG8k6gVdHCnEZjwSanTGu8MWpSCdDf8nUaojR6K91k3RLqQ",
  "key4": "2UnFmSREu3Ny8L49EqZHzmtT3gHQRx5uFmpepAZt2qiJjNt9KihCRErKciMdCykqW8CdYKC69ER9rBHpN5RtSGnP",
  "key5": "5nBrt8wnXKEFT7L59by1ANWYv9jXhfQCYuX4BoXbcPqkeKMCjsDgm4PkKdJzHHT74KL4gniFTtUQbseEjFzeZDr5",
  "key6": "3PvzdwY3p2to3N9G6CYVUE26QNuyGgWChfctYm6Amo3ZoB3m7Q1iESuzsfLiJC3V8ZSkff8eYGWdhJJvTPWQPf7Q",
  "key7": "2knMeG58UKdAaQGwWRMaxzsFGd7s4LLrJriFBggkxYVyCVyEw7f4zDnZBJhJhwjRnYYwdnEDxN4GprFTXVxgetoR",
  "key8": "2vJrgkL5zqenMxztVuTa4DqEtvXSkjcsdtZDLesAX7WMW9nHAQUqRyHwRN9QS5p19fiFqPmgx4niP3GUYFi3be2P",
  "key9": "4nsrYK7PFHztfBTuzavUXsEi9UWq7vLuD2gvWoupckbtdNRLZKXb6qXM6SfFnbGQVFZKGxwKhgzJtDzY8CpMH7Xz",
  "key10": "3RYxzSnEwYA1WyKJkPy3z4uAQ5LPzfXuzQi41RiG4rkKW7eN6pqtiQ7bwMHsgcQdzJWoSQHP75KzxBaRrSXnggvP",
  "key11": "51n6RhP6sNQZwCrBRmhmCJvkzcNjDU3Lkv8Ka74W5n4G64tXcBqm8xpPpZnWLCLtVXe56WvSWX1VU59jWprLg6cx",
  "key12": "5YnisLQqESZnE3TgFWNiwN5g9Mn94pAQbejHHmqoowUDAMSWJa5NPaZtppkfZkEJ6PbZMwqxLxg4KoywYZs4zQSS",
  "key13": "3hSAWkTkD4mLULhijPx3yYpLWYTAgGEDeQgbSzX7JRTrNidQWMaGK2Ltett84bB8sjx2xMFxrHP9xPy3U83rMEaM",
  "key14": "3E3MiTQdMMiYyjxZYkpV8Ne9tLN4JBB2qcgADqwV6DRN4hxBuc9Pm95sUpozu15zrkwcQVbaWTvkvHToRUbYcwiR",
  "key15": "MUdssVWFZN24Duf6nkojvnHg7cEQaBvFETT8XGH2acBLbk6hneAF3NXvtDL72jwK6qhxQaKj7AHRvXJFq25AQsX",
  "key16": "63iMj6CEdPdQWgk1HB5wGmiHw33MBJRNyWv9MoPd7Gofb38oLSw7bwJ19rRS94JiDuCYY14SkbvZ4m4qJNizpXVz",
  "key17": "46C7U18gQPLxXzbLNRvcmuuCMCREA9PmNWJZqpsxJrrWv1oQkopjh6wHqg4oDyYUkFBRCGfyJWuSRdVBz9FJ2nZQ",
  "key18": "5hph8YKDmqxSA65NVspMSSiyGEXabryycQ5jMQFjcwsJWrBucGPDF5tkkuTQvLSuRW96QdMKUeRTXm7ctoEHVHEN",
  "key19": "5zYPGF1q8438kub9VbgJS984irj5PTrj4P1M9Ti9MHcGpiJfpGKkV6YTKgHMtXkBymHHzBJWAzywjMPF8zK3syp8",
  "key20": "HxG5SDF5vRV7zFygjDcoTzHtYuBPjdfnECybcEhWCtJoDKZtMMeo9REbms9MvGxcx9qDSpLzx2jqBuaKm7rSVK8",
  "key21": "5zcJTUBJkzEH8JHvmFKuPP9vMqYAWULCnssgazRappJad66jmwSUoSGukftifxhaDM53T2ygpw13JwuQsaJ6hCx2",
  "key22": "q7T1vppR5wEW2m6FCuAYoBsXgBw5xQihWvzYN2WJPp85VD2wpnfyQdWcGzGcob53XDyiojCBJ68XQqszSM36e9p",
  "key23": "2hcoKVL7T4wumU49jsFmGZ3ebTkh2vW2yYzyi2LvVE8dac2gjmjnShNhs5xvTeSESrL9cKwYSEMjbLHxUapVQVva",
  "key24": "2i51zR1uVvDyorVrKzUQkLfqvM8VUTafb6SipPRHoCn8Q5FQuYASAw88ftNpkzq7ZCr7Rc9b6hutMWg8N9MS1zrL"
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
