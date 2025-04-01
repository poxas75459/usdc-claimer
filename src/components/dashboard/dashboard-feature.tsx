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
    "4J54deLagkvmtJ3hU3spDywK84suAK8BWMoXKHtQawTCeR2bqP9HfeJzD7Qdi2tTieiPzFysDTV86uYXSWzSKhph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Es1fVt3hAA6FRfHkXAdFJWj3UkxbRCAYRYnEuvSbzWPuHztrxkJCH6gziq78KRUfb4C8g3PovY852hKLM2meCGA",
  "key1": "4QUmgyArxJxeziqG2UEghvQA9UMLFpZYPJSXyaBRdT5D647YqwK9hJavaot62akJx87RARykvXYgBR4aExXxCYES",
  "key2": "2MoMFmmTYh4zDxNSZ4YhtgH7FYePQBLDBNqwh7H8uCqQX2kNTsBV5JeSFunmFZm58R7QNLFpYBoU4Pz87KNdorSk",
  "key3": "x18FkH5iTEro6aVWn8FLsQvJeNM9uKxLUT2nwGP75cVjs6439VgdQHypsZktntUqPzPrHeCugUBbMEh8LzS5ZUj",
  "key4": "2xjEqR2z8sRJw1spUCHZ1tbP3aw8MTbW4aqrkB9VEHpb5zAJAGXciWkUiYKucDUTe86vmTSfGZreswruACDYSium",
  "key5": "48ib3Xc5SaPs9Z1rTvm4NnhFmbPK7qefBD8uy87WCZv1ZqDZAhPMBQLhAT3uSa1xznaLQZi3icmY5eHyR4Jz9i4E",
  "key6": "3MuErcbVyCBpJ65mTWHRSscuVkZqS7DiobpeA2Xj2dS23CHn4b5DPEj8dQWpNTyfRu4BY84jh7kRcH1BgzpDL1sr",
  "key7": "5zYQLb9DvN5AapjLrmyFyzQPXWjp9WyFM7QSuE6k1iDsSTCuaRinb1644pryPckYXMev3iqSfmMS7yQe2LE9WvsE",
  "key8": "4Jc5yFQcNpiiHm4xjuvcBoBWf9cyYeUVeeoTEa8PHbULMSt6uUM4MvsfUjis4h6pbLv7QWn8xW1YqVDZvQEWhqjx",
  "key9": "4Frn8XE14XwXvZAYUgKMQDUBSQ1123PjRSTaW1s5AdgdJYVJjqzeiEqtDA5eVZXxTMsN4i4TcxiGMnFp2y7HDjjA",
  "key10": "3JMHpTDwYf3bX4FhiDY1ASAZ2MD3eTysX7MNdTFgaSjQu2Loo36dfvruEikNwcZmid4L79YfL6XqSh8M9JpcGg1K",
  "key11": "4c5Jg4n4ZYgEj4zC2JVZGKrHjzmR8iDFkiT4hiAiupMA9q12UurvkVDFv4ro8VhekAXsyTw71GF114pNzY6RPFLc",
  "key12": "mPoSJTyCH7NtxUE9Z4tsCg3QFQKgju8RQJqCYhPqHnXyych6TMqNr1tcucu7mF7TMJQMoaPTjtgBGz3oxjAkipx",
  "key13": "2qv1j3Xu4LVzWvQMRSeusBrXqCx86M5c6jSxRUasjto7L1f6Um8sWF1USSvbtqAPUdVBwq9JLwzREBvtdtB4eVLK",
  "key14": "39i61miiW1rQ2mZxxQzXg2CeoVmMA4AQS2a2kYpCWttnGJLARsHLackhUzuV6z5vPie25wbrKSzXeFKUn6h2YaLQ",
  "key15": "4WN2pKBiVyoTPmRUC7ebnbLKzpvtC4vXjQY4DmBHhXpJ4RncXr9epMEY8ioa4eNFTJWiWqsGNVEJFSrWym9C2eXh",
  "key16": "52i4oAmfSnk4GuQLwtMZniYBEZCfuZy5dSY5sy8STK8dKuTvhYHJ6YASxQg2c51cyHnVWMkyDLcRa4MvDBHHm43h",
  "key17": "2mLfDzHPXpqMp4Vr2MiefoTLNSafvhRj97F9WP8EdMXkPyhGrtFMTvDPoM6zYnVr1J8eRp3SvtGtDd8T7RTDiuyM",
  "key18": "5jY9g5Eg8bX1o2NhkDY5qoQ39ZzzFsRfxRw1yUw3msTqkhwXj24s3SKj7MGBezszhc1PgWmnDZW8BZsMeDAx4w81",
  "key19": "3bmvN8HLCfYYwqB2bGbHMaNpSfhBXzWNUYjUcP1QPnJC9LCpXUgKSHLw44hkY2SVEmYX3HrtL5qiHecpBYU1MHDw",
  "key20": "26CLKs51zgn4KjdjBBHMx8JEMpi2X6jgGZVwxe23CHhi7ejuk7TQXdzVK922Xg13PjNZjFSEZkZ2njL64xPcsFdJ",
  "key21": "2NgjsEuhkQrX1qR1tf8r9eW84QxR3keaq48RZna9qScCTAtuviuhsUQQ5ksF1sc1xKh8uV4ySBUNjQ4LHakSF5rV",
  "key22": "4gwzMg21BZfa9rweu9rRke3qVfAnCBsa4yVM9Vm86sogecGBQR4TbQNU82nUXRhbk4ZKU22QWhXTcqnHsTSbwzVg",
  "key23": "56GapAKmVttyxkHDZQzL3McC843JKPTzAVzzy3mrkA7QvFWAYE9iaLMZ54jCyDJmPZbdeRzLmrAndXDJvy9tXbU6",
  "key24": "2WLheeSFZNvL6xnXqxXMQiHEhjxoNXrgAZM9XJqKCQy9kU8W8rscPT74aUA4i4s3H24QhCfKGrCT1NyiPaFFmSLk",
  "key25": "2KRePug1AJM6GYbesk5sWPWMVtwvw4usZZwF6eiPDP6fokC7LAaNddg5z7ff3MqjKi7cU5kqBWuuMBhyPASUPmqG",
  "key26": "3HgPPyehAWqjQmd6jBHzP6g5W7nB6r1kbFBFxEaaCKzT4XwWNcLuF5J4fomskQdXwvXkdJokWtGkT5rcMuk3EdhT",
  "key27": "2zP8TJ9P2jviXNHdz6NpCbd9peTZ1x2wMYszmJGktvyUGa5YREUwCXX7mCJbhTPxoFptM35DU7BanhkX2pzYNJnd",
  "key28": "3KrsPy2Hmkp71czPBnCggjEJY5xN2FTQUv7g26hUCAHbJM8xpgvzbNnWYaqaJMxZMEcF1PwYYj2wWushGixAUp61",
  "key29": "4xr5VznpRHBsq5SA71P8ag1sHoierqHF7uDpMKLw3ss9XLFNy6u47XXSJ9DUTB8g2LP332YQekp77Brc73PEJnjB",
  "key30": "5Q4cE4TTz5VTYG7y7L69RmsX68yx1Y8dxVYChi1bSfBbkfLyESPLUwNnPDxDCwhAjE7FPDkZ23QdoFUNe2UwJegD"
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
