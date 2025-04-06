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
    "W5B7JPvqsDXDkvkfkzKrW5rxj7MnBk4K4Aoo5FioHPjWALWKbqdSKWEX4FQMuqks5e7udT2ynP7swmhwNq6MNDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dhYDnw71HGyAcR3M6uUmwyAo1kYQJpAqXgF4EMinioEVFuWq6cfnnw5AzMBMfe2ezRAT3XjZocJQ4zgCXVYqUyV",
  "key1": "4BtkUnqCSisbh8hnCpaexkPJRBKwydipvEzLL8qJvgEnzcJMoBydLokG67kzRnysnN5r729Xpe6wzRc8BuNzYSDS",
  "key2": "3DYEB2ggvMbu1tacdNxFkDtV9xpLtrTNVP3i7fKQJD9EF4weDFsZAsATGqJoBXViL6M9Yyiv9D1Vk1mrLuLnkUT4",
  "key3": "4QPr8T5JAmJGFjAayT22NepNUotygoVSPuAEWpVFuzfe1vdQsKmsK6naW8eGifPxiSPUTgCHJuhGiMjQnHpo2vKF",
  "key4": "3mbHxTpe8wR8U4bwTVRFdcCdkDE2HD1vg58eAEbqocqK2BPH7sGfjaUB6CQhHWFaqmvrPTKKGjjLHieE24qdaNDy",
  "key5": "4oPQErYaDmNdwrEgfbnKggFtbcBUsUpuDzLhpPz2Fqg7WzFyWF9aJSKQbrXPqYnBubdR8r9nZWepwVzRU8p3uLip",
  "key6": "qor9y4yddCpdryN8CcVf67Kp5xmxRik18J4u59A3KPwjHu58xmZqz1iygAQQEKdyXx6qCRNi3Gn2yiXPgPLTyM1",
  "key7": "2nJCWaoBk26WmkdfTRq7ehkqX4dbHCMKhgymC3K6WCtNUP6eT6P8c3e3qkV2Hof5UY9wsoFhgdVAzCr52g24MG2b",
  "key8": "4NWR41QFcW1axjJYaRP7juaTUmKvjG8oUxsNJgi6jAVsRiojaoU4swwNY174UL4E5QD8eJacdtAZEePBYhCaaTpX",
  "key9": "oEL82G7NEYjhnQCMfLr8UNrTNScPscZdZwhCGsQeJYMKSH5CZ79oGiBZZYkJmqsr91pWoWt5nKssKT74sRgMY4o",
  "key10": "oLjt9jVzddVpxNfcRYHcefDHmqoBCEDHjUhKyhwJi4j5rQa4xfAwWE1YEGBeuoDbYSDNuoNiDf4R9CviB5J6rZd",
  "key11": "5W54m5sodBVzCz8Wc2DQykMD39zaeqeSt1aLkT9YtyT5vvaHMjKePdYVBPQewxvth1PSLpQmnrsu1PKCoLAgdFGy",
  "key12": "tVFkinHSSneEZBZABKJ8GYpTmU21Rn6d4XbLChRCJ11LY6wvdcuyj7ujagzFYiJnHhqXwfN7zKon1SazHbatkk8",
  "key13": "9X7jDNQsWyeeWwJPvUMQixSB7iJwf65S65661vvQHyShkxPDKzxjtZuhsg5dStjkNNTNiRBG4mCK3nJxL4P8mPh",
  "key14": "3V38rNeRhzyw5rF6JKf6HUJTQCLwobjAMpzDHSGqyhR6sXJkcmGErxuEaFHPvNz6nHYpjye19H4EtQbN4thtQpQ2",
  "key15": "2v85U5dZsAyAqhR7xTJ5Rmthj3CCvpxSuL5GssD91Yi5Fs9PeXsEQ79U4uP96TxFb4GXwQrkr5cHMSwyZtcjWEgy",
  "key16": "29m87LbBejZHAH5QiAgSTcKbeQiTCYLiNG2wCujfwaiLgmikQqfX9UfBG4QNXRNdBM1dqtPJk5hYcrpKhiR6NpX5",
  "key17": "3Z13oWrKWZTDH5aca8pXiKXTeqK1ZSnRbbDKpVSxTsgmRH7e3vjxZfE6dRCQfZ5LAxPBHcaJwTfWPckJs3thMrQU",
  "key18": "3ePF1aBgtAzj4PmapFVkqwunbRmMdteDF9jyqcNRdz6pbEpqhTYjX234o3siAaxHxxcbNQ7A7A4LbHqfvXdgxY1b",
  "key19": "mGvquzXm7cjWmHJneHH9XbntWHF2Kw6aXejTKHZsuwEVXXYejKhiKfBZ56W65Bk6x1nQ9N6GDCXmTxrMXWoZnQM",
  "key20": "5m6ywcGCt86KxggbZ4X6Utbg126wwZwRSmiwDSsRtZarh5eb1NXt4mT5Mfagwp794az72wE93zqaB3MqSAvVQ14G",
  "key21": "2w5vGfij5MvKZUd2eeqLvNR83gWAWawVbZ8h7j75A2y5JfTrZ23AFtLtb8iWNjQCiNvy5vznBueaqhcb85fSFyAZ",
  "key22": "44R3ptzKZLKphQoG7eqCzUpQcZyqaKXndfcFniv2EDjfghg4AdGSckBE1PsKtHeNwBXcSYBFqhoF715Q7bEfGjyx",
  "key23": "4DPyGFo4jAnPTx3WPnQEU1jG1Wrk839ttWfKUgZzpu7k4Pn43Tve2RDJDUrRr1LZasCfVzhtgRpssUSbDrMbHuSc",
  "key24": "3gZGLXEd23h2igKsxdT6iQWN8PHJjJiALn81f1381zXmiuXHhgtbxeSGdaFMvonYH2HKbWLFrtb4wPzS3JHvz9aH",
  "key25": "5sN9ZYpibpGuyiCzYCzpjG3HK9JwYNHmig1KqjGSLAg6XMhYXMycVWYEzDXfiNooCih8FwgdgutHLHRZgga3mvj1",
  "key26": "h67WgUJpkD2LpSi4svK9wt5SjpFxLT7kdtFUeakj3uJRwMBaz858YYi1aMkLBJxuhcjVAWrWone4xmNuMaAANpv"
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
