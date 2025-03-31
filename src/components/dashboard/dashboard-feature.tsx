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
    "5FMzemEHgcYELk3K8QeeAZju4dCmbAwLiijpvhLmw7E47F6pX4wN1YWGonRvhwxSSszxHyEpAUiSY7TUNzvdwoSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dq3cz7DVUVC7bRZ4BQHiyg2Gqi95tTEXCfpuTKSxWPEF3jce6uwBbmE33vwUD4fo1A9vM5YNyfcJ6N7pTsQXoom",
  "key1": "EN7BXhjrPZUS9DRL6UWPwsguKbXLZ3Fie9zjc7oQ33MwLTUDMYDwLD3Ecq9LeHSFrW3gioQGTY66Pk3ZGamp7Yu",
  "key2": "4xidKn1ciCMq1zV7kr5Vm3SAncqmC8m2jWRKMXewzrePLWfZ5673HKQJKkywiEESNR1s8aR6vyw1DYrZTiDL7TH7",
  "key3": "2hQES2mqy1vsBzdvuWtxnaW5vZF2wpf2UciEPACM7PrWvDPpuFJyTwaoGTRXCizvqbmmC9Vb8Si5yhLcHBVcDfmX",
  "key4": "2xMDjVJkQwBXUR9pqQg4P4RtknxzSUH5ciShLR9vSmhfjDU7DbdCmkA7SFZ3wPTVjEjZ29d5tCtCPXdrqQwzKZ6a",
  "key5": "A4XVizvQ7wkqRd8KWwSVw4DLBwrZjbEMXbTBGiS6s6NxL8PzZz4gfpH4zLqeuWt9qdM57xuMfEovBwiS9v7my3h",
  "key6": "6iQcFfsSFf4f1VAoXZ8mZoERAfhgTdkGKgH6xe6f6c33mYPnqDjsCdknMDb9k4y1W7WdNKjyYCqg1emvBzF87MG",
  "key7": "2UZWqYindV9uecBkMD6yoHbj9HHWEAmFgxSGVC1oQsyzSqrEXjAnkMUeS99Ks5zzBxf34Ypwu3op46Q2m7qY42ja",
  "key8": "uMxg72aPn4tfWMwYB447vh8jXqAxiTvmoXNvzTt1dmjSq1WuiTZKqYK4roYfrCRbeCSo7oNDFXgTNqgM8otrqeR",
  "key9": "39hmotMrUL9fA5TeJkmnfYa5u5qTmMExh2kTcqmxCcy2yWqxuVGrC9tHAtPhFP8f4cV1cbhXxZoZKLnc2qb7uyyW",
  "key10": "34zrhwftjTe43CtPrVdop9vviqpayxnUht7sY6hJHQZCjCkYRSq7LJF7xGSTaFmec2psSFgdgHmqB8k4YBFvBTTp",
  "key11": "4UZbwv9DqsMpAf5EAqnawew2rs9hX68NaKg142d6c5SZRNQgQEM11SNJ6A5p5vrtH86bZKn8TonZjuF1mAmCn5vF",
  "key12": "k9jHfijnJJbw9h3f7wGM77mq9VvpzL4X67LEj1p14M9r7yuvGhoGhG2WDT4RE5pqUUW6LWn9YWLZVhBz7ffmRBZ",
  "key13": "5GbmQAU9p8t1nU3t3wbVimYVkgq7r8FcgMChRVrWLNouhBwao3xhq8EUpb7rK2RNEZGT25VmJGK25UuwYWqtDdrH",
  "key14": "5D5z75srpRxAVQZyFrVHfhRypFEE77Btf7f1wsHAprQQVKVBVpjFBqGuAy7nsrqyzazFrwjPkvEzpnwFAyzJ7N5L",
  "key15": "5vTRs56bEEuU5XSv9R6AxC1jKJUY4R8Kkp3irMjS5D3KK89CRHcj8BB6SAfnVbuNxipDQHb29qdcfHW7YqFt5Ydf",
  "key16": "4aCarQnwBryA1XNWu6q8zNRqsTFZaDtC4jTfqFevVJd4qrCVS3F1zQbFu2ndS9uHavBaq6FMPnoz51QJPG3u2iVn",
  "key17": "2H9qWKLzRWYN7SgSixvFjmQyRC8fvnbzD5Fvj7TX32fBbbi1QW4j23xBTs6ZYPRCxJz868W6LYJoAGCYDgHgDxxF",
  "key18": "p3ukMS3AVJHj5m3BD5JjLdv8M4gZTWz2XupzheHf9pYckmyXXdYM6kqSo98FKoUQZ8fkHYnevxz1yfW1nB4vrx7",
  "key19": "5e5eWXqryuzdmx1nsrR1b4XmDMDbSpaMDnYadnPjmNfDrBcbGW39w9FsafVEvKfBNGNnDW4E7Nc1mxM7BGFCJvmh",
  "key20": "2ZB5wyaDSuw2rxLNBvBfKSnrR5z46oq3MV7jc13XWUyyvPGCk5TJCS45sQuf3bziF3XBgE5n6BLfGaBcUC46nr1f",
  "key21": "5gBG9eVY9UCMRtDJLKtcdcP1vzcFKo5wg1JubZd5b98fjTPQWre1xdfw3bpaMkjkK8eZ25KpX3M4PEVZ93A7Ki3",
  "key22": "2ujJADud3RkwXNwzAns6cUPzXQ2jZiXBfcpMDzBjmqZDKPYKmv6UGQpFEEneyZFUeZxDaYU8ekf2JLufdDmFG7qA",
  "key23": "4KZxS9XoceJDpbveoYxzWNqdPYXxqqTArN2zsoTa9TjchEGTK5jFX5c1sVcQNfeQsqs2CySYSZN3NjmYb6jnoFBb",
  "key24": "4uB6Uznp79Kcr3wm3TrZmYwadL5xDqojDERhgdJMHzkR52FPBKZoF4vjKdU1UVJqqCm5GUihsFojhyVNbPA5ocqm",
  "key25": "3CwCMHLzdSLWvoPsfeZqt8mLrNNzCybdHsja7mkdCne4bvt126x1ARK2jL6WrFou2Ds1aEp3pmRomyY44SGiheBk",
  "key26": "4io2KeGw45pz3uGMLM5gxr811LBq7ofqVWY7KNWZXvztrgk9PxuZBotmZNsgz68wHVZqfL3g9uS7sRJyELu45X8o",
  "key27": "Bo4DgcKbMtkPNnb4kpY7eyo5wMPM8QA9g8wviUbzHLdgaEanVVa8FvWjDmZCcNGirNstymtn2BJGBAhgVz3VQfe",
  "key28": "2GUsihJDbkqQqH3zxvHLDB2XFXLAd3KYPQW2ugHWUnSHDtroqT35RWZeszBgpyvUB69uVmsyBYnCqNTESRdJrAT6"
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
