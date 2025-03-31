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
    "4RHZDhuXqr7S7asUdJuJuPFTs8sr2Avz3JPM1yATPhfa4G1DDeAXJmfxpwH8wgd3AQvuKwjPBnZRjHyC6ZsQtAu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BcT2NaHuLMpZGHdyWYRodFfZQFjhLnhMdSu6s1j1LF7V1CWxfrrGTWh7WruHr3JtzUCpJknDP6a8giUYmDC4XAT",
  "key1": "b9uHpa9wNrwwMTxJFS4QYnuLsC18q4eyiBPsPazJjRVN9ex11KfQdYUeJC7mYruEVrKzWnQRA4bEdo7DxEPbKmC",
  "key2": "4mXyhtFtPTjbsvtvbPjPW8sJcz4qqdY419GcHoJT4Hng7XKJda8yaFrJgd8ZycEwT9snR1WutbmKNoHYxaxPTW8M",
  "key3": "saMkqJ2eWj2ztJcNPWWyMympkz1YhAnUGgxNntoedWYE5T8Ztc4dGCXgQbM6UdWMvhV7GWGeYqjkvxJvSHPMx3t",
  "key4": "NzQVz6TLCjehG4S1KTHzEQKkZybSpdYhetaqFJNHnAtfx5rXhjELnUjMZa48p42bWtuQXVFB6nWfa3g3KzuJHSf",
  "key5": "3dpD9nnDNuGj5evNGmp4uLarULAzcbBFFZFLK3VJr5zLxui5sJAdFPC8uwkqKgTafagSQo8iisfhuccjm6P1G7Fn",
  "key6": "3fB6NN6io5Y29LS89fm1qsyrZ1uhJEJZzqdmb5y7JWhgk8GhXntxUnQ3yBqnVgiYooF2Tk8d32aBUyRVzvt7Rp47",
  "key7": "jjJfCRVdrgbixmGsSZW2J6fVwhB48XZrAMoq6ACZA9CYJRsnwK64Aj3x8qdNzMjoLwCzNtjNzJbJMbQM98N1mT2",
  "key8": "asz3XbvNJJE9sVoeanchxYRt3r1EX3V4FGHdY9oLrEjfZt9LcevEThWESVL5GUp2ebcJpnSyCUnfyR9gbw7Dim4",
  "key9": "KRoveYHRp92LYuPNJiHj4gkxmppoyUJ3foRS8PrfhNoAJEXGHMMpLALczgbgAGL9ZZ15Zk7rx3bGKzqJYg87xox",
  "key10": "2RD3Hn8aVhCNtrBVP3eFwNVbQG9k8CmQT6px6KXzBPDZdA8eMMsYRVua6nqi229wT1N2dZcdXy6WF3xxY2fi8hhn",
  "key11": "2zrdihh5VRqMLZY9TuCdHMFmxzNu46hSZZSvcsmhAV4gCyKj6AN93EsrrquA7aQ3etYZzFkATQLgEfN75xSW16yM",
  "key12": "4iBRxSAXpiz2Eeiykcg3ju6dL6mq7xEyt1Q7WW27Cgdysgy1iVWsL8xXoDhthnVJ6X9LMYEtwEx3N5Qagyt2QjQC",
  "key13": "a9oMHpuKKXmWiSjQ5b3bwyGpp8R2JLdgseFnDW3zQ6gpyvXZUc5RHgrViArNvDQUxWnRoXNCPFji7fBgXBcRp4r",
  "key14": "P8nNHm63vn4o9Z9kqmnNm8qRPHcdHTVUkrCtd7uNyA4ARuuyLfRCvRpcFwpLzGLgFbx3AcJJ54onxJjPHfF8znx",
  "key15": "5HGYhGkwYqjYV6EL2Pav7gkoof34QH9MRi4Ekc2oMxFfoasxKv4Bii6psAW7L8oj1brWBZ4Sa5Z6DK48qg1e2zfc",
  "key16": "3hs7dt2tTCqamAURdf3pzJSuABPpTV4vPXB1wVDUkcoy8Dqc9ugPFPjU5NETod6ERZXY8zpVRmG95PdgQT5bFFXt",
  "key17": "4vXGMA2MAhR1KNs1GnVixKww3xwd3bZgnF8E3VohHXdUK38kehJAQMM8Gd8dwEmtgqcLuNN4xLpkMGzxMqkxuGkV",
  "key18": "3Kr9tuP4PraYdcTxdUNeA23mXLRg4mJWyrn5cvWMDU6twpEw2Bf1sDvQ34dtRrEyw1bSxzedFZqHDAdrftN13SzS",
  "key19": "5FqRPnVyXZ4mQz43AvxK5DjStNUP3GLqMPMZRb8hFsqXS2jBMCb3Sa1VkbGGjQrw7YfHBAtm4UcXEiPQiUXG4ZDC",
  "key20": "65pmuAvsfmaCE7k7JqTHj2TwCrohk87jk6vU554trWDZoMzr5N51mrkcNKeAAfqdagQZ3kZuq9eLTq4wDapHfbTP",
  "key21": "2KPh8he6DYjyjTA7mhdwHZS6KFPzA5TWttthNCSvzbMfcMAo8WZf7P2CH3R54F7GAyHrugZ7SFbn61KWiFzeJLHX",
  "key22": "3LmBbQQH3d16BUqoT9pbJ4i3xYLUPDJBDYoB3ukvHaFfh7QtTmo4QQkaJmLBAnDd8jSZcNoqD7vx4pyvvCc9T8WG",
  "key23": "4EVgUtzHfYXJUesUpFHLTGJqKvN2P7gcfK2V3CUUo8CfRu6YvFqiTXi7MgSso1Vah17NXwb5DXGHCwQxAvFsSDeA",
  "key24": "631a2p8UE7T9NYt96xPzxEsttmF8EgATHXALKm77e37BAyApNq8WBs11Y4XUVndNSPWSmc1A6m29VQG38YGNFEpy",
  "key25": "5ww5rfL9kT1iLkNNNHmb9cpAQ5q3Pg9BqShg7GFZ9TpqUbc7a8HpKdCgbUPL8dNHfN4C8pfy12FurDbajwf44qAL",
  "key26": "3DQTgHSmdJLA3yiQHx5k818bQBBdxZKvDJ3oBSa7nnnc4nE4x8pqZBLHJbEEG4Zq5w1insSBsvGcvPviwDahLof4",
  "key27": "Ugqd9zPqWUkzPQz6wi6wCpjnadtX4Z8m9Cgww6iXF9TAcbV5sg67y9JHcrVxoFESp598botE4TLNMVwkpthNQ61",
  "key28": "29bzr8BFhx5EmtisKysPGw6GHZKgsbKXzYp7UHm3KvcmUiqgZKBAZfdz1BvVCpLqDQ3r7XAU6KWqQSadEiVJKWZ2",
  "key29": "2cXG36yrVf58JwqXsu2sF6fnqYXhEvTSdtWU1ogutb9WvfpBSnSCRVwjxcGmLGB5rHofS4PKgBxhxzYwsKhMawur",
  "key30": "61s1gqHekpFah5FyWLr6ARoWZUukkmj35qWzQzDCWpFq5mMGGKq2MKmXiuLfEs2o3ij3Ew9RuWbeGCdNV6GjxrwZ",
  "key31": "655w5R7XGFKedVAcCUysXas2UFu252qYcSSqDRy3bnDYdpFzwq2g6m6vtVLRSHr3Ji63cgjC9DVQC9yyosBWr6Bf",
  "key32": "2R4DGYUdKxrsJoy7nTktQxcBHQmxNdKpBqu5ypAYQeSap5mtKg86Wtdspn1J8MwuXtvS3VvJErCwpC26X5vMXaTg",
  "key33": "XgSjdznPd4EG4im6mZdBvteTA8b2hoVG3gDd31Q3Si5QXXJNVz8mBzCYuQixsvbEVcyAxrESuegD4M1QyMcM5Mp",
  "key34": "58kKX3HHJ9cm7PtJWbz7L48PA7Dqbsgis5hfPKucYTzRncB7RZuH6Ph6rJegsJ9xqxCkdhy7EnB4UcLmQPzfmYJ6",
  "key35": "3SE2JMRcuJoJsXVrZXVXsA8Nx6tApDRRwrYvBUmukyiWDaiFrhGfPqmo8gz3W8FvYkn3aBSUpGq4T8aDK9KAXa1N",
  "key36": "33mnD3mTuovDtB9kBeZ8Z2m4BqCjhjqFoF1BRs6cHCUTHpA7ABN2RKyieALeS5MEKeUbrnfRntpqqUTWFe5vjqZT",
  "key37": "YHumZehUg96Zt1hsT4qNHtRLnXyaHDQo46ZjYNCGzHYtmJ3vyL7KvQnsDzCmwiy4DNNpYGNeufjEtZuyEe47H1i",
  "key38": "3RixVZTmmZdZEwDwb18VphBmoQKbB1UrFSzMWSxULbYxWt8qoCx7AwnAqA44jT3E51jsJikw59ck4reRvpSNbioK",
  "key39": "35wiBAEg5wm1jEj4jVqWk5oU3spVKo5aPnSnnqTqjpzzMZdDMjcMRtK3XDr1fLvCVhn1DpiVgQavgAF8KeXQq788",
  "key40": "55t5yECAKzzNN944BmkCpzUpuWDp8Dc1iDmW8RPKoxkkM4kwxzC7rLHDuH8M6mmrVC9R9nmsH7GxUFmaQAirfmPZ"
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
