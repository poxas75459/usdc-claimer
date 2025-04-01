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
    "4zte9dLxDTSWfT2Q6Q4B8No7hBoQYnYNLL7VhPWEbCzsMLjJ9WWZxaxjEnXMq77wWCjPUHKbVqmLxNHBhGRiudrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1qCRGUhLegdhU8HTzUJfn6sQf6KNT3Lrpny4rJWoU64bqdeB4dSneyDuaZTXv4TWfxopQTA2QzXxFXm2UUoVDVj",
  "key1": "4E8VutmXcPYeyEHmqXBADaj6PDRLc1t3eXS7Mgs55PmeZ5U3YHrC1JEarEqXmyRMLugVWg9eXxHC1SBg7JMdzPdn",
  "key2": "5s4YzKWUQ6UzpE6Uaf4r6pwBvXsmW2DySTzoPq7pu6NstdS2YGfNiZJVgJVBF8YwEiMCFWQwd3a6EkJWLWqKZ6hP",
  "key3": "4UtFLpZaSiDRW4hsnDsxJBjb7uX4gLxpx43zzTDdL7rNzCs8HDPsdqALCQWKSGMeLu4SMQmyEeRAGuJEfQenTME2",
  "key4": "3dZBdv12eFUMFR5pts1JyspQF32ryNPgRsdp66FBuT2ZD7MLNaUgndbgD2hzS4oYtrmGpW9xEPAXVkeCFaTacNjr",
  "key5": "k7EoeKApkBadpdRjgmhMrkpWdvpQgtdZdwYvaVtV1XcgKVNHhWmb9vvpwoRJuVBQmcrUtr1AeRnevAQsxqHFPhF",
  "key6": "HegWEJq9XBxPTaeJp8UbdiKHivjy8SZCYhKEXEo7jozUipZbKhzCsbfmL4PBXXx3eZMi4MmGu7L7C2SMRJ58QA6",
  "key7": "4mrFjsQvZfDLASJ1oUxV7GVDpYMQrMfvYpWhdxfgCArEoKYCMGkdPhTrUdNLbnx4NHwcqmK6qwiN7ExgnqBhq6SV",
  "key8": "5KrP1z4DBrxfMJ7wtsvrqzw5iXruqwdpxWhffonRfpzt4J4AJYKyjmPmqyr2NSpzhdGdWRTRGEb7iF8BXfKyyP43",
  "key9": "3YYGFXkU7uvN4dj1cMvpuG4ny1xD4SCqE8dgYXXuJ8J6gqZsM49Mk1wV7Dq9VmDcXbJZvyGvsTaeWFEEJHHSFrGF",
  "key10": "5gWNtfysxEf1EuTTFHPZSGC5mysA6CCGfsZPpKKbuLf9ULJrPSovn1zJU8y6eg3jrZ9gg2pJcHvLcCsFknYWbE5u",
  "key11": "tu3XgFrfqaHLZD74wiZ3QhUDKrHY2W8UcdnTibMBZDj1qnrXWFbSA6X2b1nP44pDkR9nijhqmQkixsiRoywX8S9",
  "key12": "mSEooMh5X1oHYDfCBtDNCzf82mTugfSuuiFJorbcLVrGybMMiZKqrr33DWQHfw3sUBYoCxiMtY37PMPnHjgCVvJ",
  "key13": "5a1LwEwvqFAbBwifjc31uKcH2JBcJyixHZKBNiLt7nzVMNLUeQpKEf8B5MeM6NR7Sri2JwRemWzTCDkEVmrKTo8A",
  "key14": "3ac3Qvtu2bhvguX9iuARQXC7EvZpoykuAPTtUb3R2YGV3VAEDXpwPxUk72fetc4DtYVN7oX3467MjQBpKFxpDuxW",
  "key15": "5w3PYJZhEtP7m7WU4KEceNBCvYjeqqx44WstxSGvgRgE7Co4a34xN1Vv4XCmWVKZSQ5x6XxLwjnAAe71uWRb1wT7",
  "key16": "26KuD2sVHjyroUPk6ZGc59Bnyj7TqpPfPDQaS8yboU9vLhbxQ1Su5zgfMjgbJLnK2sucdMoaBBGPqrehATmVVxtm",
  "key17": "2qy5SsX3JLQ8BsaP1CMmu7Yohnx7Nw5TdReMmL5yGHh7kX3gmB9wMhvKxqvqPArLVHuP9aoUtT6JAxmVTA4Ar57b",
  "key18": "2zsJe1cGjBne7Raid6t9EqgfpLDhmr3DJ8dRqprwQpcru1FTH6m8UYdeqcBUXXSCcMRmgNrBbFZEWn7QtMbKq9w2",
  "key19": "5rRTDksS7tCJagnzPQQzB6SxnVk1Kqp8KNNwgbZzSfkbNVCqW8ogH6SxEeWnanBpXXTE1hDDKTKHCVFucfA1EgXf",
  "key20": "2DtDccqnbnFTcAfCkaKitvrwttNGR2z6hqpHtHzk9QBwcigR6KBV4pQLPm9zu6ZB2woumY1uMuZ5AvFRLteWqTk5",
  "key21": "5yuHxk5HigkT4So5qopAtSa6yxKxJMpDhfz5ZwGm2rcusR89E9kiojB1dXqJGnT8ADdmmZUQTiM1hTaj533v6uGR",
  "key22": "zD9Grjch3XRbnjXMkaQUM63wpGHkKJahqqzgeKquCAsvj74iAaaoitV3j9VuEEhGdaSXkEGuacwxobfhnRytPNM",
  "key23": "64DCv3MZ5YRM1vzfh79XjQ9k9vxwUAX6wj98RUVL9NwQMz7DRUV6ajV66xvnJTpALJUxFRAJNPcEQqp8d4ifP5kt",
  "key24": "3DfnZybq4LknTRUfwHBGKv8qB9TND16Pjgiu49XW3wEE76vn9UfwLL9BTqKVrXKY3v4S9wsyQjL9NNo3D6y3uuXn",
  "key25": "5URxJhghQxKd66pixBT5t1776v8sW8xXpqxgxioLJzL3T5PHChXUMUmXDCJkByTgMyZYwq1n4bYqzo7ztpZNbenu",
  "key26": "5syvqTKWpZtxgwoVuaYGNYJSNRX9avRr6QbQRJuEtcJguANdcufNVHEYzgT4qAd7JBwzVrPmBVZJEowYX7MzUpfd",
  "key27": "5CUQJz5v4LkjfRQesU7LPjDzxZ4YCjZ8TzJfAdH5T88v9Kont2QKEEL5GkkLqTzZyhnVuCmZXfq8XuB1QWZ6iUNZ",
  "key28": "nqPhAWoXwgvQWHpagDfp7DBWp8T9HLZhZUSZ8z6TrvUpHaWXTcSyXb3smSLy6dBZVXjUtwnpwK9FsgLdHRtyS2f",
  "key29": "4edUHyxrSW9aiKGp7yQGPe7dDVaNZ3DjBakSo5WPCUTrW5mbBm6BhGnZLL6jmV1HvKN2YVzi4TsmYbtcbdzLykJY",
  "key30": "4gyQgRMUwedSSuyzQJYTxxfAKTHoiFALeMdDpQjREkwuFktMzqtKfT7J6vUggCXVq4mCLNxg9da9jQ8eDkb5UGMW",
  "key31": "5rV1ZpERVfqTQ4RGQxe98Z7qj6d5viHpWjiE8QGfKvta9ybnWHX5wbyQixAK2aaHZVD7yFXh4Wrq5cLqsjvwkDRA",
  "key32": "4kjo8tHfiVkc1GPpzKo7SBbQfWC2TQmjZ9xHrpsDoYmHKWSKovJEoQzqkex6rnQRpU2LPStiS4zzdTqbYW9sc5Yo",
  "key33": "2kscasMRjLdbewp14iMyeaSiyfXwvprBDgtQHQQySbYLMj3QhtVsJLbiJXEKfuGkn5h86Y913s1ZYCZrREtrNe2g",
  "key34": "3HaS4TSSemrvLjZZz4oaV9MPsaSDmEKXuvwdqz8wCSwmvFaa5Pr5L7yAND3MTkAThaWLvtwdUkkfASrTPbw49FXF",
  "key35": "3wY5jneLWh6zy2eUfrHE7cvViMiMSBQ2oDiiu2ok9UtYVcT5cn2tt5Jff4E9eibCqiALhdjPRbJUudkLrkzv1U3B",
  "key36": "4M3SwUpVaK4FUQC5wLLDTEYf7K7TkxZFbdcLCQjZ96aGd1bZQxXTe18GiqEVYgqQ2Wzvmb2VVbZwhoYqkYAqUMax"
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
