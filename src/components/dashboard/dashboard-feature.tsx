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
    "tAfnEEoMViGmoy3XJtsTEy7iQ98DQ3Q7Ap4eU7CSJP7YwR7gvrPsGCc38pHiwyyJqhNiKpQe4h9fAspBtJgaEoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kWxgbVWJ9NbmZvCeta5oymGxEPCUBuVZG1kMDwqBVk1G1VwDUnr68yZvxfsefGCvYWeysQXgG1EZ22s2dSuiia3",
  "key1": "8NTdctexjdCrpeGC6NQa8bF4mXy5PsYp5T2MACxSsQ6WMCrw5EczvPk5DenuGqNSvJd7msMczffVfG3EAnCFquk",
  "key2": "278Qcwea3o7NqANZiqT9sC6VdSJjWg9xNt56uAAKPBgYNLxMeAobgxvUUyiQhjmPNJjE9w8r21DkNPH3UjmVyCnD",
  "key3": "2WBwiZam9ng5tukWCbDKVdyMnwn6Ed7XGNZAFSnmQPnM1qXJ59cdeQbFjx3xan6FF4aJRjXd55SqFUkBVmFk5ApD",
  "key4": "3yTV52yy75tMxbWe1hZ4r4efPhn3mFwZ2Cxza8H5bYzaJFg1pEPKqXYgEBHQbLnHFkqqadcQcNxC7Zfx8FJt8aYX",
  "key5": "3U9ACH9M5zqGPQu2Q9ahUJTR6gvx8mHWXEJnX2pR3kHsvd9SEV9Nof8xorWhaWHBD78pHAxiAw3PRWA1PSMojx7X",
  "key6": "4bqJeVQSbPQtkwuGqFJGseE6RfD3ENtRktT4bsxvK1WdjPpYdxdoGRu7Qfrfdtf4djX7NQssyvirCkhdY5nTkgrx",
  "key7": "5xpT4Q8WnLWSaKSSz9KViFd89g8nZuW4Zh2RTkihExCbeX8UT43W3km2Z8ScD6tEKJkVEERqiMAgDZCBhXSpnANk",
  "key8": "58qRPUKep3d3MFfTCcCLBrwZZU8r1BLxaLzv9y3ywMgzUba5k3su1NvpgMXhkGimTo8NVxR8jgMVZ5G2bdeP83vF",
  "key9": "tHov5HjCkpqpwuP47ocKtvz4QMBvrm4rRdNnfBDXShSA7JpzpcD45MQ5wcyCJznTYkfYWgqqDvQtQo4UWYsZVJA",
  "key10": "2YW44DqrpARUT8va6S81kLU1VicBhhLcXqjY9Ab1gqM4T4FQ3pL9WJAzPETxLBRfqMnT2TMFePcCasu949X7i4SW",
  "key11": "3uxUEnHcWnZHfdE6BzPgBauUi9yqiZujMCanA7zmSbXCyQYvFw2ki3KiHDP1dEXHe2nTe2Cqrssukf19fTNkSw9u",
  "key12": "4zdDbDA55ohNFmURYk7HNu2JnN96eqHm5KKSWAMySrvvpftj7DeQ7aQD6oPqEKjH9bk5bnhxgnoGzhDzYUg6asPV",
  "key13": "57N1fc8kbWZX1fnVbbhj3Lpq5itaLL4hyUTsV1Yi9z3pN2jkqj7YUJxXpMdUdkLnokphjCiQpM3pqvXsxMDmGJ7b",
  "key14": "4t3bbpVrB7Md4abh4VJ6McfumNvFZ9MmwKtwdE4jCCWB8ktY6HZCLR4LfmiKFghXK8boSRb8zgf3ZC1UvZv9vgdm",
  "key15": "45w4t3RRCQa2M8wwZhXafA39x17JKPCcF9J8eirRxP9nsMvVxsjfMu3JaBfdZ27tGjciuwmv61qu7wv22pLqbgua",
  "key16": "5WWUJ4dJQwps2XKCEcw7ZYi3BywhYgiFcS6EDbJiNJ4NaZm3wjcRDhymuWFo6Q6TWN6J2rLXpw1zLv34cCVLY1Qs",
  "key17": "2SwdLVAp9rqemMYcyYdhQuizFCm7nfcaLksU4dTwu7CELkDiEoQ1tzBTwyHta2u1WquVzHyhcS8myaxH6KU35f9p",
  "key18": "2YBdCyTSGXDFJJN9EeBmWjE51kFfy6Ym3zdq4goMWmUKrvsHUYTKgLHxRksSm6yM9EtnXoLDHTYVM1wvwznQDmKN",
  "key19": "4jwuQm68iKDTZjjGCQSaDV5u1yuK51Ueu7kBNSCHhaxkWVmg2WDnJUzVeQcEVDqgbtgUAS358tDZquZ9pPrD7wW",
  "key20": "27xncrSsfzCpbGDF4ZCyESLUnZU37RMJiW2hA4SF7Aj3qZ3zCx3vHoxLUTqVFHqfnvHHmakhNDaAqPfaiugdEZ1x",
  "key21": "9spPXGj1hfKNumRLnJFSHA1N47kLpdgZHAPfMowq88TGC5WhyqKGX6UoNrtE7rTwDe68L3XzZ95DnSFBcPV928S",
  "key22": "2v5CGQbK1CyeFsykL7fBKyAfXR9NQ91dcoqnjQVZXx9FPTpq823eUhVxhrQTAE3VXMRf3MCMw9Ewm73KE7WC2kNS",
  "key23": "4S8rQNe8nzq8BTMMwxYUoH2hApuZwEW1WH2mbwZvevuRgDP5TYr2otPWxKeARevVBPMn3i7PspmHtnAQsFFrTozT",
  "key24": "4AuosqEAxhTDQ9MRjwc97EemV3MvyeSdDJ4Qfk55Qsa44qUVDTseFs6fKgxsnPzWo3zYHTFXZcSpJ9yEK4uCHBCk",
  "key25": "578mPpTtKs53wK4itFndx1r1DAGJyJLmGYWaZat7czqCV1ydavWioX5BUUGZ3rst1a6zwDk2jBHJqjUfhDqU1qki",
  "key26": "2HGotxBGZfU76mKkBjfXm8P5giUbt9LsSQc4pVQCjv2g74pauYPfdfSaGpNDebHD22dnXexLJfJaz9F6q2A6NzUY",
  "key27": "398JxFcDv2s4QsiQyCDZi5UhhZHxCtajLXBaT76ErAhKaP7F6AJBoeWrk2aUr4fVQRWvjJKj8og3ZBYCqLV3A2zr",
  "key28": "3N57aWm7jtuGYF43rxzUc3tHiGdAF8djnxDPoy497ST3t9XJGqL8jpbRwbD93V9Ztrt1Bje6SK5E4FNWnGGyyFXh",
  "key29": "5ex3boCng2SdTFwEb6wUKQ8W7FnKsbE6F9HmMsyoJbkiiCuKQ28e2fXchLcbKj8tV6tv1kDJKuDjrMmLG5uSh1vA",
  "key30": "4xAb7SF3i2gTpJaisiSdDnhFHZcdsPHM5MNer9ovQsnKKASDs824TtTnV195myLp7yW7LrrjrYGveuywZNFnDgbd",
  "key31": "qa22HvmWVjF8y3Vo4GXr2TB9CHp8dHUj7eUXqgdJkpy2gze2yuKkT4SEkggeYND9mZEhXHYYf7MiD9cJRu9yya5",
  "key32": "5bdYoH2yEbTRHMDoER66fvdaq1qNvvmWsGZ9gADWvvGcXk28nF5kNVbq1GeSp2yzoJ3fycTXoEzTEHw5HssqgxPZ",
  "key33": "SQDYviXcUZeTZvZiCWCjW5PUrsPuazUuZ1HhAohByqwz3pGoSJTsqu32kYfjBF22mKRNtcQ5KLe23p66xfJoCu5"
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
