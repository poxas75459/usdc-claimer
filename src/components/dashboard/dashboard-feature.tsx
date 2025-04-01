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
    "2A5DSYnHq2rrKGhxmbn54y6AW5mzhNEu8zgvULBffHxBWdeMcrTuYRcgWaMruR5vvkHzU3crqbh4HaFdZ5mtYKcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65XXXsa8bS8jH4LZuAMbbb1f5KsCqagBPoMYXpn7Pj8GGDictF9Urw5gc9WAStiZbUF3EvCqWcySR9Q17HQMGw9J",
  "key1": "24CPJ4PZFdRBAeXz6jZBSrrzMGVCxng4shKbBj1J7XRQFGecYe27nXL4Wg9dXQr6ZbQTfoq6i8dMvG3Wz5msLUEi",
  "key2": "3CNdDSW1A4urHZHdnD6ybsVtJQ4E3NThjtETBR9bPb8Sfh2NXLe3VabvwDCrMUiDGPh7sL1j9XaqSTHxrEXRMgaM",
  "key3": "3qWkMWyeYz7TtQSJ8j8ZMLVdafkvpbzsNB7nWZ82VaTHwbJQonEjEkaB5mbwzewUENZq69bw1iURs6AMrGYRvUnj",
  "key4": "4jgt9nRSqcQbMNWnJU9Acieddhw8DjEP8xnPPsgCgdZ3Dyqd8FWiBxX1PkmGJ5eQ4W7jVRtqDxdPfWXS8wGN37gW",
  "key5": "65N3CAzGhvJ1DgEfLuvm6uXBwPrN9mgxPXK2ARnevnUS7vhd61pXBHPnwGi2pPekrDRw714MQ28JV8Sf7uakSrDp",
  "key6": "39GhaXhCQ6EuR2TCvq4UcgyKb2aEaag6NWQE6izZsktcZVFQH9ZaBdZqcoJgnnR6HMGQAa8b1ZttPg1zny4FXndu",
  "key7": "3cn68hBCDcCrzbzZ7D16FiZ3NT74weTXZVGgaUxtyBWKwqhjQYVAxWN22awRE1byyqYDVUXgH7JPqmgowcayZy7v",
  "key8": "3k3o18eauwQVhsmAXoWnSqahyTmcFq6mZGnRZUdorovrW8QpcWvTSLHZfFxUWMtt4pMFRm2VJbF6xMk7uBysBoGj",
  "key9": "26cB5TPMmtsUoJTsBHWE86x71JCrw19VJK8oor9X7e55QUVJNVV7hd2JkK1tmczjeaLN9THN7iowXnabpoESF3EF",
  "key10": "Dy3eEWUTaxxH96qEeBRit7j8dE939BZtUSMBqzhTa4iJ26btvCYLZYD6ncCrgE1DLjYx2C4qiYeeLjtzmEdQaYg",
  "key11": "2aoyvDPu8CzNfcakSYYW5YsYya7P5g4XTue3T8iuoeFSYspA3KJnZfgcjdNAGMwWoWypNSncELr4Dj29J5eEvSsc",
  "key12": "2PfJjEQiWJkahrbffKoe28vzCRTrWUTPAVX6dEWuLqpKt1tugS4qKe6ea5zcqH7Vsocjorn12eUYKpGptCwt7Y2x",
  "key13": "4jcnK28rVtpVKSUaejo7xqqDPFxiHRXABp24HRTKoT4BTzHXquQQwBixJbwLZRocA7eUQeyFHmbYFqrQJEkephmb",
  "key14": "4z5oJPscVwUdZV8ucUrr19tqU1Y5RXWvyyWUD2isze6HUuxiv8xiz99s5mcrATiZg1p2ngk5aSjbLfatnqFoB8vW",
  "key15": "3btyG39xtAgD5xMLv6kjSSttSDnGaJAxRmgyrtzRWsGYebbGnNaTnQ32cFReYJykc5L6aKEfeB9pd4XQtKNmCcPB",
  "key16": "jGnrvctSNGgwAUoVbnooVpiywjs72fF5SLtcSbdPgqbTLD9hBsbTR2zMSAKmLyK2bM8Y51gd6JsKnVBxWw2PDk4",
  "key17": "3NbjbQA4Tu53bAXF2MwyfR8Z4wRZHnh8hPSEspwGh9BFCjfGMXzJCmSX4cMzSbKMp4vHR7uwzSjFpfvEifW6a1gP",
  "key18": "4x7ADXVEHyFfEWzW3rz6EpzdMjgahJuxJbKtkxodEkTwAoonHqpgFP1RRzuYtN3ApoKJGESNZHmsnh5eSk7q512S",
  "key19": "SZZwhNpqqUm2wvPgvkUoPe3iPJPpa1N89sQhaJauxNvyiDgMrxmT1qP2jfQ3jbhcb2D3JfqcHQ3ueJXnEW19zi1",
  "key20": "4QSakw2zFwiDTWka4k582BfaEGFdRtG7ra1NdvwovEAU4QgesWYwT8bkhcKqoRVEphdgKhwEZr3kpVF4LV2HkYKM",
  "key21": "4Bwi8JPQ2UgeJDfCVtMArigdb9W2gNWFFNGTJ5xU9FeKaG3gDCaoknHfkghsDrJ359DyY8APk6p4AqGvDjeQnoht",
  "key22": "2vi69SNxJAjwkMBdbSKTF17LnwkY82yUtoxGcNUfMT1q9SDJ4UGXKQ6zY1gGbTZV2EChTTc5qoeWh1jo4LLorDt2",
  "key23": "5dHpf9Kha7apv84h3jqkFENqcJuNqx63dKpXn1c3DXoBwuuwvZ3NYZs1Mmqa6FsjBu1PeabBJUtvFXgJUJG7qnte",
  "key24": "5fBmn3pUCEn59Auv8bBwPjDB98DTzXBAeGpvnWFyq9tgf8W2w7ea9u5KkvpQomLzCFa1xU795U4gE5TEPNvGZzSW",
  "key25": "32vAwRas1MA3yBQtwKA3kU4r26WoPpLREQJwNemDzYXHkPZLLutGwy1uYMAGnRFaqQ9Gh9wV46MJBdhRKrquFB7s",
  "key26": "4xwjoar5xb64qsjWQ5tXTYDSYoUdQtyt1mqMcDuhHbsUCUHeFsgi9Dcv6UfpRgs7w6KCm812ZNcEsir69NRg7Mb5",
  "key27": "2595WVXe7NzEe99hszTRnebvQcRjhNNiVBqTUQgMueJyVKrt2DPU5AwaUrDZnTufS2C7PT8zBn4RuSXgEtkiFCW9",
  "key28": "5LND5R8hV8yvXyXPvu5bJYB1UJz7SMTR5oYfntScjZR3wjyadUUXUUy3UmUnxJLVHLea1uXh9Ro4tikio5kjXkaP",
  "key29": "3bCFagyVFQkwBqKmo1ogLkyde3Kez8rTF2S4GUdWdBSYFSAHhGaxMf1ZBBTS6rgCADQjUx97dB5koJ9BeLPJV4HQ",
  "key30": "2UpaAebxeVToRHSqRLCbTHR92NxiK7iDSu6ivSL3zSS6JC251zbx7QWrHxdiaRbWFrSfBbM8R8okncpZvUqzNskd",
  "key31": "bGPFsvoGBW688B97RgfogUwd4k1Hp3H2qf39EaSgnyFTQksySQED5h4oNWJtwbGJYEBQDnVwTLzAn9B7c1F6hgn",
  "key32": "3rBsgQ5aH2uWmEDBW1JByj7f1pgKkmJ86YHygH5kUn8R4na1uXybUg7DrRhNkTYmFrjKZZFuKPfAfi2PGoF591c5",
  "key33": "wiZqeCu5FzFvwjRa9uHRZ5d1mEznNi1cKccPXr8DH4HC62cWwTZ7PXXVRQ92xzh1mUfJvdYifeZuH12QbnoukUe",
  "key34": "tCxi3j1stRYt1JuDWAYa8XWAbNhZQDw6v38HZxouFGQisWEoGik6qvEiKjh7WeGPhb7smuzgqRRzXpVvxHS6bCM",
  "key35": "W4xk5bWwAQdaLXMePGnYi95RM34mW4eehy1FznxQYBMy3LEcKQEzV9kg9pQA9toMaJDXJhXbQpD3dJkzGt79BKy",
  "key36": "PnyyFGjsyVoLvBFqqd9C5BWMLytodevqE9zo39wCQR8tWKN9itdbNJc3QZk5R8hchSS6vjrba5Cw1YuFvqwc84A",
  "key37": "4Jy5AMsuQpWCrDPR8H8HZUsfsJoBNDQnXADNeJpnPgD7Ub2N8o5dmM9JurHnHw468iA3PgpNSyR7oBMu7Yj2vFuW",
  "key38": "wYSu2p7X5zpWcJ86kACQn6581pwQF4YZDedGzx4TzBhqtDZSoJ5wigM5P5Tp8zDm89HddSLEvewn2S1fWq3sBZJ",
  "key39": "5WndhKG5x98MTMtrbhv6Wr7bfKSd5Qip8Lk1gzpcLN8U8kgt7ofRaCMFGeCHToqLtbt3x94dBWGxygwcKJRrriv5",
  "key40": "52PpVvcMMx4dXi5XgnMFGUAwWDWDahGMogjAKfbHdiG9DBiHyow2M5XxhF5xhp76vVrqxapH21tBDESotNjLLj6D",
  "key41": "3XEUSFe29b7D97MYPLGCXAgCo7JbJNkpBTw19dA2KGqabu1fQGVpbzYadTcok7q6yFjmbGetb8E81c7drSXiAWpt",
  "key42": "4zx9BvE1j1quJtyomSmjPVKTdqFn2uWakTLH8Km9QSMp9XSPNR5gL5kMo8diCh1x5WerEZ7WqhxE1QKZyVDJjGsf",
  "key43": "5g26x8ekbGqxd82DkHJyjhj1uQbmXFgNPDAZSUxtQTaKphDPCuFLmgHkdciVnQPDoaLieejqHUKNVkTr6y52ziro",
  "key44": "57GfqiaypEEAXCPn3K2gLE5WJrtXfwhCpFBM5ScACGER1SC7Hq8HCCqUNdL4LRA9LBVddeT3cKR74Ejbk7RXfmYj",
  "key45": "2Zp56x6qm2ivQyCGyZfnB7N9DjZDgudvMj4ZiS73sQ37N7MYQuNsQWJjDdKQwknSddGbSWEY6JkfMc5akYehXiyA",
  "key46": "4Hx6A7s2duWV5AwFPdAwEheViva9o3Uxt9YztMmcXLfUaVcm1gvEQySyYS1TzTsCk9CG95e2FpLA8QyXkev3qZC4"
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
