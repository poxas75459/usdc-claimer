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
    "diWQu1xPbFYJxskwYjrs1pPvCjiowNRxsTJTQVwQabgP527s7Ld15knoVZSdfQixa74Si6A5Rxgz3tzDk9ZJ1CC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V1oEvfXMEneKHbTAgBnWrs5ipjMg62nD8sdLnHTA8pZyGufY6B25qYqdjyrskiJfqtnAMQ9wG7GPSJttsGFaE2u",
  "key1": "2QorUjvvZsJ6yf21NGQxyNvRNKFrmP1MSaTr5N8fUSDHvgduTUc2YkeEwxPiaxjd9MKHRddH423hghbbMBA3vf5Q",
  "key2": "QxEcgZ1cEFtCo6PUsoqMvJi5qFDnQpVqfuFVcGtwB45dwWxHJnFekLUS4Urma57VJGFKvUuCCtp5QZC1j5snLih",
  "key3": "n6xSqrBDBuP6hiqvXYLxu3WfAAFzmG6u8sijv7kWYvBApLCrDYGiGJqfYB3Wgs6r8GedWeqKeRKydgNfcJh5sMi",
  "key4": "2kKeY3nuoff3b8seoAqi4EF4TjEdHA4hPBZtEcX2mjLua2S1YTr76jg6NFzLRmboL3G9rhuXqPHBEtwnj3SswR17",
  "key5": "51yigPRAT8sDJk9TCc1HJwS86PHb6cxJJDa1wwYGGiMnFtnAmhPEk2KnWf6HkgrzvCt4K5s2NAshL7FaMJqoJVG7",
  "key6": "hnQEKPHhQr1bn6L3mQrGKccMNvABHvNmnpGcJeeMHqQfe8XzRfpp5iPpTq4PT4y2kZ5QQJWtS3w96QQ5v7N3oiB",
  "key7": "3nztgJ61vxhHzM2uDFBvwU8cR58tjf5qcLWCezRf4VgWeDb5JWjPxdEDo8259RV9ZEeTvF3yhyc86Yhqrfb1iswG",
  "key8": "3JXYHYEXnyKR5fttZWFSprbed1CW8VRA16TLCzf9W74iwCaGRLm29Ya6SZo4nevjpENrXi74oHpJMf7Z1hDxfQ1Y",
  "key9": "5WYMF8EfUZR4cUQpoX5vJ3kDZh9JDxYeuEsBrX7XjnLRSr8kQpZHWzfuWwX6rMAy9sjf4SfjMqYbT2exUPjRoet3",
  "key10": "5VsMmc4nZcUqeF7EYy3aS2JxqSqrfi7Fj32XjHGqDpCksRpZGbYDDBZLtGK2gy9LbpUeYSeQXYLynR2sZAb44yPE",
  "key11": "2mMxm8gA5t5BLhbsm6rGUmQXWmXk7AocSjRdo4s2pv2dpaGLhnf6oF5PUMcZyBeQ119adEew1WK7qscaxU9jEgDS",
  "key12": "44v4fJannz8GkbjXY6tMPuEgBDd3RrfX4Bthx8ANQ2cHhNxFNi4zkvpDJCwBjE76nhrZu5xw3Ea7wayprQ9Z51ba",
  "key13": "8PeV6K8o7niKG7B6hgmvn4mJPkovTi6x29H1o5fozKs3THR4mVq4bobfq3iWdnaPgPc9TkkiG7UhgvAFp9qn8zK",
  "key14": "3XFwqMuJvjGxM4aA28Hmyq2jLXvGzUGdVCJGsGvu4ojQsKL6DDEGjv98EBEdoFmJ8YDH4q2hpUKHdXc9oznTnf8v",
  "key15": "473DYCRwvv5QitxySTo2ysK5izZgAZ3WY9zNmj49S1oMyj7Q5uXK1oA4qNDD8ugqRfUY89mYLUJAfxvxcWQeK32L",
  "key16": "3bkQdVfqwsit4kR3fxXXprYnDhVmcykwESfee484vJGQXKaKzzMPn1T8vEx5KojLpupD9M7vcyME3nJhLFJhf6px",
  "key17": "5uSkgKXoALjtGJcPkRQobcgVWCSXXBdt8zKPKVhkn21s45HfLv2bivHcKiVE4juTbXxsBy5iS7ibfx6GyjxbqmS4",
  "key18": "Wt8D4ivdStxJ9b1aChqidR9jGxBBexHH3HcJU3z9RJBQzK4nEGr2inrNcwKCTmvPMcujjngUns9XNM4kqotjHFF",
  "key19": "4BPKa31T2a9qDEgUTHdhKoun8efT7Qff6C7h6teXTVUn6fLdeLfDF3Dn1DXAbHB8srkcf8ZJ9Zixop89ai1aD4RG",
  "key20": "49AU1JpNNwo75ZpzsKviifSbqe2KrbszfnSMa2j9cEeARoUrpBbpCpquw6YVs94ehh13pnez12v9ef2RCz6m3dtG",
  "key21": "5v3LZbeLFoaRPfY1gsoQJeKfE4FZaFewWFSi2W1eyA9ZQUAxXeg61hm6bHqRzFrtcQFe2SiknvHPPKmgSjihVz7m",
  "key22": "vyrSDJ5Kp8RRaFygzzDdjHrHdKy7hTRMBSs2o1anZNvX2HjJG9RqoHpwdGXxJY36tePLPRjpiZtoWRmK6JPG7BF",
  "key23": "4MZDJyMuJVHuQjgMUuFguNxRz5Lf8G3RhjRBzdpDJ9KHzpa1bhxrxkJfUSR4GB86nJU72sGypKm2gJDah5m6eMJC",
  "key24": "qM4jPQ19Y1EJ4HyPnV8pZ1uFbUtSueQTySn7KEzt1thopZNy2RKuJEPvW6BESX9pFHzJZ2TVFmwQhZCytXFJLTR",
  "key25": "2gZRnrNXj5zgN1WJfdZA54fSpd9SzWDi4NLT5U9Qog5nxf36ZvDXbgqzJuf8S243HmYc3pZPhu1tLDuzCFYRzcaw",
  "key26": "ngVqUbBjmA5QFbNvC9aMak9uZ4DSkhkss9Pw7D54uneL4TRFM98DT2uGj2LYekGbkQMGnjWYmjdWSmu2HzuCYvS",
  "key27": "34ZHkap8tekLwmxbiAgGwEUUGmcH3TVWRQ1k6p9prmBQUW6KqdramejnCskaPzph3JRA5BqKD6EF3Q6RMBdmgGKb",
  "key28": "4GGGmm1P6wbpQVPRNYjY4EMGvjsoxq5Cuu6HnrQUp764jB4rAT1T4Nj5NtwgBUewc6Q7SQgcXuxLdahccAjh2ozY"
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
