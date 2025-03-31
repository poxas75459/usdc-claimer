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
    "kusvnTJmzWZUwjqLg6FZCc65cYfTJf1kxTmKED6PfkyiWBFVKSGSJHBF4jK3EuJRXSjbNQ5dve9aqDVSj5zLocn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qGmwets1kXHFu3X8gxfPKGSsfkrFzXDK3SaQ3xzpsfpF5JcBEeoEnvmkaCq1WN8RadLB8msJmphZjFqgQXGxzm9",
  "key1": "x4oRXkJxosBUwxwmgmsMoR3ZMsucJmqbdzrXMUe9tSeiq6wkkypbNbrNmXVGS71y6FYBxKpmeBERKYGa7M4a2bd",
  "key2": "57jHdFxWw6p1GLsKiuKsBCRqrmRyMcbuD7A8vBzxzBLzR1HpGbjYp4yYwhGX95m5LMxzuUA7DPqsHKiuZcbyUDAv",
  "key3": "eh5xXJYigK6sjsqu8h13C6KjXbi2QBSxdyLNmYAu3nt83RfTCWTXXzEC59DyMB5r6DnJZLsxvxu6KLRkTGUWEnx",
  "key4": "5gjGUPSfxzMy8abvMqq8ZcXVihnEQnqhyzHrYfz4Resm3F8jgLfGRXVZ6K5ExuXShaHeQ2rofixKP4mYT8u3G5Rp",
  "key5": "4swYT6CUJbPST2LjzoGXVCzajunSQQDSogckmRYaBQ6cH43XD45GrwsKnPMCJTKAPvVdY6Nk2bm7q2ME8tYhEHdL",
  "key6": "5QkrZ2ynHVXfWF82zVCTcxXdR1LQAMaVG5zjWKziMjZQ4CdNPceG5oA4c3cjbkjeoLMhFiF7PmpCdJaWwuGbDJLD",
  "key7": "4kna4tqttU3PxNW39GAnA1LywLhyVWZjy37yJgxq38LjFgshvFMQQLJV5qUUzPXSSWV8s2Kjo6t1Kp6KfZHfd4tc",
  "key8": "5WLAQtwGgr3DYYo5gqSFcraqJiApJrkThS1QYSHsyqrdvEZNH1ZNYzZ6TtM9F4Wy1Y19868dkUQd3UVBQtDwX4uk",
  "key9": "3eWquoVfuZU9L9NJveLBEp5PVc4DnmhyLoeGkJpDhVgn8HnSxqPX8ENPvPakRwRxc1SBgr3o5BiicUyLG3pqDyyo",
  "key10": "3VV3FZedTG1Zx3hTJ5hJybiFtP5WqduVqv1fJRnnD3sQMd1CchtVhkpMam7H8Vf7JYnHhmZtYg4uRqhc5xXBsFd3",
  "key11": "33jTmH3DjAziSL18SqL6oy5Q9AdGzFUfrUSzjLFecKpaWdZQS4BpMWRE4RE7owwcRozfY4UPsX3hx18YgFrHBQQh",
  "key12": "3mFXU8ywcVrWk64UCVnDUTMWUxdU4bnZ79LHuTkyUW8NRnPNuPfWpax5eFfk8Uq3KbRCEW7iC1McLpYrYp8y7hk5",
  "key13": "3YbpNQDsCEK6vgadZjcTfUohSXsNA7Kc95kqMWUk9MHCVkJPRmAT1fWg9cWgWGEo5DCyTALZTmHMK8hhhtXoL3cD",
  "key14": "5RoFcFxQMtb3syL2t4HCpkAn5QeiRKhTW4w1gQQtehyVa5RB8FvHd6pwnSRxR6yedfuh3PSJhGjmVmgmG42vnyDf",
  "key15": "33yBPUtCQQD4LAj3mcWEZDAQNGyhmYS5ZvYbgXjL6fhMDmPNmmNRwv6neAgSJfj4zYbk8Emms1X4KbAGH6WeyNrN",
  "key16": "3JrZPwyLiYRD5nQ7NqHZqGn87SZ1GfhmcPSwBGjhxg42wCZA5dgk3jrDnTzoraYro8qSHoQgHmnF26LkkC54Pt4x",
  "key17": "3FxQP9gQnk9BJTCXNRXMAonnQKGTnL7GuHMrQw7ZbcfSZam9k7sZWLjJxLgppGCZTKFgKvsnhANd57odCUGjXFjn",
  "key18": "48sQKvXqKmHSkkvKga9rV9yyjrHsyYdfLYA8w1HcVZAqNJoYKiyJKhb1bEz9ApGf7XtPSCeyn8DJFMngZ8aEFqwd",
  "key19": "5W43z595Hvd2WVuaczYDrUwNX54dwdgw8TA87VUJuy5anDZtzMfBVM2XZRTWxRiqejSppNTZfuKS1rBHUSrSU3z8",
  "key20": "4z85AeWas1u6V1VaKkupLZvtmz6J6bdybpCw7j2DUhvA8sqGvZibzoXuUeLBMgW9DWnnrHWtFYwDBpdGC58DUjnp",
  "key21": "2TDBYYJyXSxMdNoLM6z9Z9czTJhdt8jTzkN8yLvw57atJD5brPgDSU2VnZGdTXKbGrDpYpvAkRov741e3sbbXSAV",
  "key22": "XaWTWfRwhZxTwUfXutHb2jBBHMnDS6k7YkSbjDuRnPvywFMmWApEahFxPiJTn4AnuEiuegHSed1o8fionqvurDh",
  "key23": "j4HxVLqEtnnm9Z8ZFqzuvKxx7SY7bRt3hAGr5c4GKM8f29wuzN2AtBEcHg8Skib5bo6bVZcbuPx6WqywnQ1ucXQ",
  "key24": "4X1qaEiXvGvzE8TLH9WEoFaoABkq2HMhNvvxXpuQStfo5h9NQCLMKAncgfXf784ZVSnUbBNG1vQ1KXPByaiPgBmu",
  "key25": "26MkUSj5LcNCouzYn5TxVC148oMbWq1PByXYXcFbBrzqpsUMa2BJyC2pqV9YEPcg53fdSyVtEk2V6S9KkUYg5T33",
  "key26": "4DDKmRhUMj1sufHFrkhoqwuBURPAqWJ2jQTFcZfEBNnxEekL3HiFEqXhL8ZWJjKjkot8r4BZ7PA9zQaHymFMGUz6",
  "key27": "3jZXjYYj84dbLiWbzF33HgJPF3StEYhD1NjB6DCx79XK8kkh881WgXGxtvcgSTBzTxTdHJWgt1r7bmETzyARAAGY",
  "key28": "3EjuBKfiodHCsxKoB96amXQHmaN4g68voC5KrtrR46HWzXfBxigAqMKSomy7aEJ6Xit1KvDQcoo9diAs81pmTKaj",
  "key29": "3qBemkqJDZe18mneiXx3sozqWQwAApPZnSe6XfdmigsHNjo5Jo416jZxEwBR7Usj1n7UiHd7yKiymxyKhG5DWdDp",
  "key30": "5EbPGC7SZ4G5VJAFmMDskNV7dGVBfS7vEiwHjv9SeAezEsYRhMYYhRWTX8ed3pmgMRtPFKoFg2Yky7kST1cYaHaL",
  "key31": "3JscxjdqSCJ29DSf3aMtBeg1PKdm81rjL7tQBpxud5qXoUA7ikXsrLPNh9GKGGeAqS1xuZCDiySpewxqzshKdChG",
  "key32": "2bKLNget6XJyU7Sw7dao5XiiJEQJLZmXT2JKQvGk3fhVnGUfPJ863XQ1NKvPxdAjiByvv4ZNZFUrwfkCQ8Qd8snF",
  "key33": "2hru4z54ivP5LYEcjKTGquZKKb5MHhEaU8Dw3Sz2i2zAHQurEd25wkN3HJ9sYdyMwZLR3w1oTv7x589T4jNTecP8",
  "key34": "5T19J4CXG9FW7A3yUrS5S66fy1fxrbfUSJSTN4eoQq1ZU8GgDRFt9ZScjHjz93pQ8H2Z31qn3hDzRfXABeaGsFEQ",
  "key35": "JSSavmWyUZ3fxMbBvuTe1nBnKvNviZz6wucTaWNoAgzSkUV21KAYqbUfJQ7Wk8AmBko1X2csskrGKCbNvg12vVJ",
  "key36": "5YkTnd16QGSNBf5y6gax4LSBYnb1wPdbzVEQ9AHvB9um2uPDmGyKPE1UZBtyuf5n2czVf7iJ1GYp4vTrNpPdVpv2"
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
