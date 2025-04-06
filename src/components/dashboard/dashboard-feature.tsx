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
    "4n27b8zNH7J9JL47KzfRM48y3GtzJ43s6faaPqjwz4jRAeXhVdFXSWJzDPKDPAn2BGmssU7VEJcAkqzUfqpz3uRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nJFYzbPgtiu7wQM9YTkPNpJhDPbm2HKHwbSfG8atZg6vY2szReNMkCuhkXKRL5oFjz3WLzyMkLDD4xTYBe8ccE8",
  "key1": "3vxGch3bKszmqPavYcS1M2ZyJfEwrWjG8t7XbYqqBb6QwkQqsrSGMzeU76Cxg9tsTjpirwFvPkv4uUG9eD7QyXqd",
  "key2": "3SupQVrgDFNVBL1YuTKTfqAUUemnfPfVNY3NW6uEbHQWydDCkV8KU1HgrkyCy6frr5kj5TffBV118BBM4e25afgc",
  "key3": "4fZK8ecRjPNitk76Yne1jj5FRUz3GR7C5urZaMhwCoUqrq3QW79Kiry2QkzJEUpznDTrbjZmhzNRZFLadr9Jsr8E",
  "key4": "4C4h3L5vGe2Ed8NHKqzvCKtZJXo1UU3JvEuZDT8bnK8CuB8EgNbJUpiBnA4FPPpmn61nQSPRAdombb4VALeDp77Q",
  "key5": "44LNXxbBifXjskEZ5tTkiM54GSsmUoazvx2uGEhktAkCyQApnbZjF5SFVpScqqBkwdAKRSNueXYufY621fwGbHGT",
  "key6": "2DDvVBw6vRRTbMjCp1WarYYFMqw8LwRXJEZqnY1x2U8uijnzBpH4w9BaLYCVyiv1x1qSEwXPhg6MMsQrrtqZLYr5",
  "key7": "2g34uxaz44PyrhTatKqNEeVv4rMn72HNocUP2EvNSW3vstb3qQ6j6skUNJVrUpx4DKQpfAgwADatwwRch5S3ukQU",
  "key8": "5cxnHcvnqWHsTo1sGyqh3ZwEPkpqJMxsNnEcEHu5qraj7WkS8pBcgQVRTEG4yWwh58zEWUenGs6q4uk8VaJ6KNsd",
  "key9": "9HdWZmvyohVrVRwn7bzwTYyvrQHEPrYm9UA669NcXbC3GQ9kFvq8CEoNLGzvNv2LrDrZjnBRBy3yLw8RY2hUyQL",
  "key10": "2HTNrJmFLYFMax2bq9RKAufvLsS6oFvPhwg7BUDpfyryNh4z1iiVQ7of2oUCRnWGRctHpzEABGp5UohxoUnGX4Lf",
  "key11": "UjFW9h2zDXdqDbRKzJfPuCiVtUnbVxiPbVw8QR4fs6Yd7PS6qLSzwsSfSRUEaspp8SPi8Rwkr4fCRx4zgKN5efB",
  "key12": "27j1y44FrdJhTq5VzrVufZWEpnxfNf9LwT2JRdkAbMJMB584URAETRYxxEowYqmmzyMicz1LdQWyvNb6XSUKMXWc",
  "key13": "MqRzEorVW5WjiW47TiYd1V6sDcZcziuKMCSkgXmPDMhoDSfHn35kL5izbQ81jSfZ1KeVaZ1s4HN9RNkTVuYXay7",
  "key14": "4cmqgL7kTpeL3vsHk2rSYU8c4nPgtNdYUkPjuaQQ8eHX9Zgugx574S6NdhuRYhpPM2LhLv1HuwRfWvDoqXWt6Qyu",
  "key15": "5SARqinAPsV3LxeehdYUGPnMF8FJq8eqrxV4afhC3mSTvXTbjaDHrJnb1uC8PgAUBGAR77thJ17x68ofrHExeTof",
  "key16": "38ace7EDHcy19ED9LLMHmJAz8bzQjTHbthnYb11CwsQ387piXHjuoD2XfqNZFz8bsP7fQrUt8vW8KwKyNqGQhi9k",
  "key17": "2KPrcApmekLNCn9EFwb4SsbQ44BAg7WbgJhtUKjtDRi7oCqYDiXcsFN9qC3ZtfgFgcCbBLGNGA4z265W2Kyg7n1i",
  "key18": "4AFTgEfMsHacKxeJFfbn5gJvLaSYVheb5tosyQymE221Fts2rPj23Ld6MQ4s6bmGo2WqCkrtzv4Yb4g7dXUpLU6A",
  "key19": "479Ke4Ez2QVcEsfg156WjWXmcCQHTaX8tWnu9VZgvgb8KBUiCeo4TpKdU8ANwHafwNgqzj2uUfBfcP35MocJUHiG",
  "key20": "39cJmt4BJNNNk7ZKkVq2giwF1pdQzjqCQF5ysqLX1mVDfQBQgVhzg3ovWszPVZqnMtAL6L8Tbe6oKtehaWsMfwL2",
  "key21": "35ChQgGT9ovcwem2XdT9EGDEZv2ByEnckfM4RnGY4HLswYiRbbJzggL9WtY9Qo9dSZY4EHRhco2MzncHVgKyJtvj",
  "key22": "QH5M6GBoxtZ2KTYKejzYv4ZPv9ThuYRL4ueTTgfJrWM79HvU4fPUUdjX631RbzeDLKYTKjq8GTNud25XDQyM65C",
  "key23": "2soG481NbBL3eZU8jZ17KANys4t5Y2fgTNrWHeUk9Vohhyevtp4JdxC7gANq1xKXhkXuU2bjacRw6jiQC25Sc3CX",
  "key24": "RpE2myKDTgnhAnGwdRneWuujHbcvMHKMZBKhPjgF4kKSgVXgvJQmAWYhPziRPFWSfu3Zj3Auxi1LL2TGhqU7mz5",
  "key25": "4RAfPt5WLt4FAqPco5X3ieqSJXFv7di3odz7i2uDVRPEDMdH2t1ikgEj2ewqfNrQREscY6A5Lp8i5fpDcytXK2fe",
  "key26": "5ZBgY1NUnKvTyxJ1wYtYvDPurkvKQHasvLgRbGEDiZNH8CskZV7NnSFNJfmdJibb3cX9ntWphiHYvcbHMRWgp2jY",
  "key27": "5LpQ12sfFRx5CjBgVYLjhz9v8WbyqNTN2CTQZJRTj5FciwYmTuG8Pzx6gqQpH1mSfM6umPSVxRgbHP9zMBdgoNia"
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
