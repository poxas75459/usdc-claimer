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
    "Ysjs3Ut96QfMwpBZh6NhWWnxhNab1K77JcKPLWeT6nY41EmvJM3LKyUu4CiRdkkTDrBdVzGeTxtoRt72nniiBoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HZEgpMaknHCErCHfMvgzycb6wHNHC2eFBm4cHPb97LQJo5XZJGtUoMFu2SXKLEzAh3ZksZxr1RWZUdhhikf5gJq",
  "key1": "4mpW2fKDoJ5WcRqMGjMkkVqUCX5ETYXgVnWLZK3zdxiWmzWjJMWbWsgf5zXNqnvQDR2PMQ5LqVfhqojwGRGVdZv1",
  "key2": "2XFpdVGoiRbtsLWH7XaBLv7545qR6GMyJFyoGLz5MxwyrpmrdLept78YxWz2gnTkf3jPH4XU2Vaif2kVshQD7ukG",
  "key3": "33bVYLwEjvA6yKne6dDS9TciHUgeXVddn2tqtdRixeRLY6aWms35wJ6bEcqATLzqbMNxVh2hLCr3igaGScPbF4oK",
  "key4": "5yQ88T44vyFgmdMEjaUG8BQKuoqi6nHxCt2ZdeqsL2ghWfrPZ3nFhgA9JpnWA3Y9tijRnx4oUZ2NfpDmsdwwDP5K",
  "key5": "65CuZuSdE3rFabQbA4msxoffUgkBQup6N1DDmJARCQ2EvoXqs6oBoeV7kj2ym24pj5k6Gvx7wPB7c4H9BGWHRSt6",
  "key6": "3p9sr6R98xxPH7KCRDncBPBe7256mv6iH1cxgwcbJ58Z6LXzugZJEa8JpZs133fnNxxAUqxnMtEDxomzFYh18bW2",
  "key7": "3x1Z4mSESED8qqxcqEHa5pN7XCjfXjrmx88EJJZ2xhNfCYHvT2dcyF1JxLreAWvtjhBaVMhFBj7X3snrJ57ypw1K",
  "key8": "p9LX1XSYwP5ay1fxpEtnhysaMYxBvvku6eCsb1aMiawTF4uF1m5wxJFyKYZkpVKT51vpQa2tnqaaWh3eXf8rEPy",
  "key9": "3wXkkafbnpeM7cVVafyqBNiMmUjnVduDeXVqV8hNPNe46fAB7pkYErEUzjmzoxLGprDdsxHejU3iAvPU5tg5qT5r",
  "key10": "3hiFKnkCLMS4LE8D2nDLtkRVg6GQPfVAL9zgFJDxb6dkksdFA8EG6MoyELbhAhMoP9rjmUWXaW8kv8H2EFuFthb3",
  "key11": "GKPMwKcYax1FRmyK9hVjjCCBFgej9KDAwEvJbXdNXF3jnrgbpobkjRKdJzeb6nwtZBF9kjJ1rw5Be5LpWpR4ckG",
  "key12": "4smEgHNUBeSASjNNvzP7zVWNJtDwvUGMULrXH2Cfyh5gGEsMzkfZUBsTDTFYaKGUVjWqH5QBhNc5bqFeRVe5Hwzw",
  "key13": "3xqU3CUAWf5A3HyK5ZhfxcEUcm5BrsJQZfPaqUKfBYRZ3ofL4mUWwaJfBM2P5bb61yPULsW7EHKu6pNQrRYWNpAW",
  "key14": "5LXvBPv95VfdNvBPV6U7ZDrQPvfckErHU4WkNSpKaiYVLQ363BA6fHCjayKXvSURDEjUbzN59fnVLWQXMBzuU7H",
  "key15": "2QJJ9PTfybpfX4bsFQPsGqXRoYmsjaFyExqnVkt2qLuvgnH1gK312vrsXd1GF98pBku9NiEpRyYqNESn4oxDhZ6S",
  "key16": "xoXnATktZ7daz5d3vdFKyg9ZxJNCraVw2QsvHTF7s4j4v9fhqvUUwiyYZErQKCXFJq7F7JXAghrhwppixRahCYR",
  "key17": "3xc8TMapRFEEGmQBur5bHRxFSAzT8pDzQa6S4QxBu6Y7iqKnMYAxMXoeYAiy7yBZofBYrwHxiRBAJsvrgMwLjesy",
  "key18": "3pQ8ifoZfdC8CG1fM9TzKK6zToxuz6YqJ7YVqnL5FrSkEajsWiBHaVPqU7DquBKsnSNmGoL1nA6JhT8PjYRHHJWs",
  "key19": "3HQYmJj71dmF9X2amqHQPvMtC3mD6Exoa2841MtEBmDjpmj2p1czArSyBX572dCdCFbjCX6SfayWqAM1D98fAka6",
  "key20": "3H6cg9gAAnZkyFH45zwTZJKYELnbNqMHuRXZqjRLmzZ47heK5ou5NEKZ3gN4gwUnuvvBkSNVZ1SNGDGY4S42F13U",
  "key21": "22RKxJ41FhXnPaY1zug5Dp1ZVwwedvb4Baoqx1AANwJS2yE3x7UzMQ5w4wdGE1MmKv4LnK55XwCozQFioeHd5ZA9",
  "key22": "5wrDzLmdgyQKgddzjTwfvRpNVaJ6xjxtgDouneWh2jxHW4h3NEZsSSyYa88snryNytKRRjjbxGK8QTH649MBFGzT",
  "key23": "3cxnaFNVfG5pR1h4iwV2zJTmaC67DZCsA5uV6o5wDR6pX2EWPtMXGi3mSiv9xCyEjKxpEBobBdQs9u7Lex4pdB1j",
  "key24": "4pd7jAYUy5sgHnht8rHG6paPZ1VLjJB6Dqc8pHsKdWZVHUThv8TCmn4XogmbLgys2sUsXRD158j1aCViM9hYEhkL",
  "key25": "GigZwWZ4Y4LzEbE1HSRbQFkNsyCezgcDhEpXvR3oY2Yi9RGXjTzzkAqcWc9F5v1wrZ3R8zQCFEbNNAVqUCYGpv4",
  "key26": "3jP1jFq1nh96dQiD6JiJvT5JZmENBhZM6QMpAiurPugthyrVzZtRt53PQcmoqD58mcVYEEn1JV1VLGnSngHiAB1H",
  "key27": "QbaoAA2EaVY9bahgC1jfoCNqq3nBz7xkg1UHZCu5FcdPny8LEnnKM5J2gQjFbZmctzVq3vkPFR65Jyi9viFTynS",
  "key28": "3BzcfbR5NrChxweYkGev3R3pLUtdhQ4Njp6m4P6BjaWbFb6GdUxjbxarYRPdU5iQpJWLWqhMErbi1u4orwnDXQ7i",
  "key29": "28krvBfQ6z4UjQ6jEuUshEg1ees3Z54AiPyaLMr5vqvaTzt3m6xu2x13tvj7VRxKEurLC7k3kR3YHN8bEGjTjhdi",
  "key30": "48YtZXD2KKFEvtfodVEV8jcbWxZnm4FsDqQJqs4ioowGL1sAuyohb7AA9s1zKLUKBTyW6SaNY7WP7q8AAncVLQzE",
  "key31": "4eyd4YSvKJR3Yhiqq1yz6eVYRibxA3JQXbvW9WB1rTyikjjeYGgJYTaTqsfAjzWvvo1ok5sVHcMTpvw8Kc6haQP1",
  "key32": "bEQhfsoaGd81UNWGpfztMEuRWn2tBtNKjfzKYxtCWkC4rU7FPg1JmfRa6NmEWAmTvpokSY5otNcqQ5WAkVhVuSX",
  "key33": "42iExzUuGbBf5RErt7f2wVVUj3Na47ZbJ5upGVShuAtdQduWpYAicfTU6gFepySmnzzwC2LgUbSvZH3goPTZ8Qn5",
  "key34": "SjSyzPMrX9bC18anvqmVwErdPrDAvp7vJhvMkMJC7WyMnwNtmrGKTHsrQ6nH6VmcRQnnVa9HP5W25vVzECp5KWK"
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
