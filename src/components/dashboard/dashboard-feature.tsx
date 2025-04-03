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
    "48DbvCo2Knp4HGApC6ikTnfEL4pKiH3R9KSR3zM6xNGhtzyfjebPmdZ9RoYyAnBtwXspQCZqyWLMmkZTVuU8FoSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MzUrfmcKnAyPE6TtWEgQbKBsfeGDgWZbnFwYsgn8y22Cz1oxAoHfiMZWdVpvbmcAUVjuwUu5UuHzw6hHuhiJWJz",
  "key1": "5M8ekjcPd8ZaiqKi4BSeuAJmJ9epyZnr43TK9a5X1VvxZ8C26C5uyZ7K276pd3L9X5yxrNrBCmgEuxdYUqLHrLD",
  "key2": "43yoYN3yMQrtUqy7v9PS4AoSXbXxiYdZLB5BHsAiWfPv13Lni2ZNjB4ZfxDF4LyaTPqHGYDEmExQXds88XYNDL7B",
  "key3": "62XKR1UKy4vxH3rey3XJsi9Unhw9g9WagiMH4k2LmjA1gFoYgSamK46uJRDPm41VF16ZTSySCNayTyr41E7kNSJz",
  "key4": "3HjYeEzZFZeUmcG3oFocUYzPY2QvQnG8DKp8ZQnZFzdjNJiRwDktr7GREKgdyHnYfAvTHDRV3irkk6AfX4xoiUWP",
  "key5": "8kLAi95c96sbh59s5xC9cPBWw1gPvbNpzk316Susxfzsd3WP8HJKVT5jv2GmRkXxrbQLZRoFHx3auNmXqoj6vZo",
  "key6": "3g3rQpnnwwc4rjgTUJSB1ZBQ2JoaffeC3q1FDK979B3QpejYvcDWnjyc89kXhc6BCQ3JZDtuQVy4RTR1TCYUp1eW",
  "key7": "TUMyh1dkxsCVe13GjmpPBT9YucxotkFCD7XtDf3bCw1dW1P1cikx9WGkrsyHcLJpKL5AV5qiUWMWSWyhHsmK16y",
  "key8": "2THL3D7x7TdJeCjDHdNCi6HLwbuo6g23aMCsV77miwj5bY4kPSi9eEjqze2WDB82Ssq3cdHGmLUYtkj1HY7KdqvW",
  "key9": "4bxUcK9VwDwcFhNfGqCDLZXjRBUdZsWCuktTNaU1ZwEmyYnd6dksvE347m3UAm6wJasiC9czmShvyXEM11KtdyQ3",
  "key10": "B1XBV596dGjB9LeefTuKfmQWsak93YyubfnCn9zamuAwpCZixLAu12Q9fXeFU5b6GRLDNTZNUttnFW4SaNSQEie",
  "key11": "5mSJqPco6E7G4CXKpwv9toAt8S7FRLj8t4HggLYZ41oSGnjkrVHsUfwn2vC8cd56M4wEMAzLeT186cmn6eZQYkiu",
  "key12": "3eKC5wbEAjn9UQz3gCVBCYkcKKgyd1ss2BnAi1qaTc23aRyJhT8wo8GSncQ19XXAmaiwGG6A6DrD5VeqZoy8vSBD",
  "key13": "2fA4gbTa9qazmFo6AzRM3ZfxfmuocVSnM6erJ7QGV8dt2K8xNHg7xmtK9BVrdUjkNdzLesrHpkDScc3v9tnqHWKc",
  "key14": "2RZ85ziYQdnqjUtVjL5koHhyTX6A8ECMseW9n7Dd9mwQmbFnaiMGivfHWZNEq6Yf1N3aAcBeQ5zgjE8paD8mYCpx",
  "key15": "3Xezj2wEExWQ9me5TjWS57PDa6akGytBJfYXjVH37vYBxAfhBkCoXkVfdMBXLTcTxgtnTG6qSiyoowwt2y2g1WoX",
  "key16": "2KZtcoWCddsn9B4EnZry6RuJDmLJE6h5jyhL64NprVUkkTQn41njuJkX3Tdk73yyw9gWsLJ9DrNxh9NwYqL31qZ1",
  "key17": "2Dg8kB6CwF9mBfn4cDyqrmC8cpSM7pyQn9aCGbbrnPaXSfRkjyoPV3M7EZLBjoJuHswAtS42wp6C4qkgoNefTEMB",
  "key18": "2FpZvyWGmLGMsb482c8z1wbZN389mGiUSyv7Ck9ue3Y3R66AYKGnmfy5SznqJFTuDZiD4ghohY64AyG1BJRiCgbf",
  "key19": "45urzvtkxdQ3vVB2zvFinX2oR1c9SJMan8yyyHYPtiVE3SDuwEZc84zaEhGgSAHDsYNJqQHetW7cHqkDrnKMYs9",
  "key20": "2F3uibHAzNy3KeeJSdFxDyzaXHYaKyt2i5K3yVkEaAjMBjVCVooYsgxrJksdeEctYxoY3Fon88apgEgcULBL2sDR",
  "key21": "2xyF1saC47YTb9mWaDaHTNrQdAB68Hr9DADGuoJg4TaCNw3mFyj4EL1vz9ZrvyC2goBW2MvBNwDSfFxpoQUd43De",
  "key22": "2R59Z4muwsNxWixRCNWy8PXQG3EbUkBJ1DF26qxPvkv9dkxqYoashEuu4P1TcivrBywuFXu9NAZitMycvqyQHaTC",
  "key23": "4hmVgdrkqJM91rD72t1oAftV8ioognBrqvnJT2mbcYsAVxJnaVyr3xubrVKXi8oqmEPZ4QyDDHq8vuSPV6i9HjNs",
  "key24": "4Xr19dkXzG5KhJVr9kaw2uL3fVK2m2cGoVqMxE6CCgyzGnuyyri3wbh71ow3dtGY4No2dwqaxkBqR7mz54s7VNwE",
  "key25": "2vKjgKxfZC5y6Q9zq5AEhJPqSVXkWTWjgcmxrskSHSpVB9VWo84NJ3BXRuCdZ6QfRffP2fpGG95RYYKgK5iae3gy",
  "key26": "2tuVQKR9rzrko4zfPuYD98wCxPAmrEbztTTHA5vCZApnG22ToYmBfXjPsoTsMkZRHggmmpqkY1QpWwxBAvq8Lq5u",
  "key27": "49nhnhnUsj5xxMeMVy99Reo6XGWnTC1GAfqbjnLZvXfshQSDKYwTR7t5hxFuMPSdKjaTKM3hS1NBZcJQZLP8CFmd",
  "key28": "49EWFd8JHh2fJxrTwno2PLh5ANNwq8136pmBisDy8h6AVw1hwkNAtF8cEL9PyqjqWjsfn1atEgJLHBoxA8aCx1X2",
  "key29": "2idaFFXSndazhQ26YXNd2MviM5PVNiVxbMt5C9JYjVhoBC39oeHSuRdthv34dcZ8LHjEqz8YwLxPq78tEGd4Ytcv"
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
