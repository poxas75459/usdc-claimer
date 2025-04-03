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
    "2pnmwUKSY5xNhcnp6gqcNTkVVkWRjYm9xi28AoR65GDv2S84uxt77Cy4J2uB3BeAQt52ZdtguoVZme1uuTiYzQpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43rRLA3eJVp5f1DcbxohTctfvD8RYKMSQFXve9oWg6LRQZeU1Wfes7MZPJM2Rgng2rVxb7zdiHWkPHqBPmMnyrth",
  "key1": "2L2YMec5U4moQ7CVt3nJWaNxQz1VCtogwzeE7cf6Lar34TYH7qqMT75wG8Ma3mMM8ZpdVEGR5PHum4h9ttCecVWY",
  "key2": "57CxKLAddW8Zy2gQ7A6x4BfrkXdxaom6qFjE9wHkqwE35tDfLcHv9NhnXqvfFSedxTyjm7n9poTjtDk5i3CfiFsC",
  "key3": "3gkKZwGqxyQnELFPgurbE6aeu1UFGnW24aeUzBQLzDmv9KnE2XssMj8vDS35qu5aHSRxyticpdhAvWRMSdZt2GQL",
  "key4": "5BnacwjZaD5Avg23K6gYW7sLrhVRLqA67TozhFJnRgpa4gJsJ5FKbstxJH5FBqrvGbn4HwKJXPMzJiszaYBxfvjp",
  "key5": "5mrmhhBhdGEa3tA3j4y4eZ8sjD23LhUJ5L1WwQHXrjT6oFPRxbUCxtGtYcruuNWh2TPFi4pfZd7sY68ML1tut2PZ",
  "key6": "4mpXHK72m43tSdwrnaXmKFUg9nBu9cQHUT7Pfppr4BLjrMHSKmcaTPKWpokS9KXfc246gsyNECxem9PvLXJ19HpZ",
  "key7": "3uj5bmzq17F2L9H664qxNBbMd65zwUFgs88WWqaUG8QomwyEq6cmTMVDFaQF9W8z1cz3fVmK1YLH4WBb1ZmM71hi",
  "key8": "4rMo9fviLnVFDhTWBg9rtDyhUJGHZ5YZpo2MAx9p3GE9cJ4ism8vGsezQDPBzE1s1RrXjxxQwkZSxcgjZNmBvveK",
  "key9": "5RAH8ddsnAZHSgc5vLv3tfkW2pxErpooxKKj7JWqvH5pkoobxgRVZay7BnK6AgWsqQ1paKKMaMGkk5A2MtYPDToB",
  "key10": "295bHB5d1DMo7caYTnKjCKPaDNdwB4b64XmG6zaJm5NAJWmrZG9G691qJaZ1uGUssuJ1k95GV5weZUdpj6bXBvL9",
  "key11": "5rwZB7dUcFbehiTDa2odrXEWoTQev5WSKVsPRdfTB1pFUtHNH4un2AmN5YM5733z3jyfmY6LF5a3X6ksAARbG2Wn",
  "key12": "5eKvu725WLdAMzedyDPeBd76KjC6qnFW72HjTgy8y1jifMwLJ4zNXA9nKKbWuCj4xDog4VYDdSMYQbNfkzuR1nXo",
  "key13": "4H7vu82ak3TAw6rPGthtRBnJVXj8fvrngAUDdLR48Z5DzPnxTE4aC5qtrUtB51CaMQtUmFeFb325WiGrr7wvJf8y",
  "key14": "bYJRjFVDk9Xv12pNXjfdVZz3LQpFhDHhENTm2XvafHLc5DuzE3JR6eo13i9eUAk5xCAjDkdswcX991YAn3oamf1",
  "key15": "5AC1FXLiK4sYnMooiexgNDMqxf8W2a5MRJTVoarUisXQeQ6Vhxw4on6paFFYdqgtmERnHwMr71WfiwNuyGp7Q9Qo",
  "key16": "3y4dCVgQJu7kUBd3Wiyg5Y3mDHPiomJ6WwdXmHXdFA6KXXZLuMrcADhSPPz9TndbEgD96ifG6NAH2jhBeTRPFi6z",
  "key17": "F9Vb3TjwZEyVXdu5tKPNmRJBvLq2uuZxM4PU1LvttTEbnU9JYc3Hfsa9Yn81QPAMv8zyUuEqS7xL4z391UikCTM",
  "key18": "2uEbq6QFvvb6wakTzPJUbf1RA3RobWvv2np9G7FKJHEtmuqaz9G3zK6wfetuJAGEYbGGjzoCVai1XKGoYA7s2wTD",
  "key19": "3vL44FSP7RudSgtfUs3qYbhEfZtRc2iAVz3LSRRaBqUBdPjJnBBzPedhY5uKqKLHkS2ZwhMKt76RJGmc7KnbbvZd",
  "key20": "5SodApSGhoqNdgtcAtzUaLAH4TabRv272CW4ve1UHdRwmyoL86aFAGPaHu4dZMjHzTmjxWRxWboGH2cBbfCJT9B7",
  "key21": "5mPXHmZFfe8HQzqkbwtWYVpTXZA1VzhBXKM6XuPZhnJRPCZZCxtPZL8RuakKyDE528i3Xbi9RjyXX2DJe6n42bAC",
  "key22": "4Abjcv2goeyJhfuXk4CAX97DeHGDoRb5bRDfN5mD1Cp7dbXfSGLaYuvZMNhmWityrq5bcTVjDbfyoUsEw8yd6ACw",
  "key23": "5sGyN76im521sqCMyN9nRb2gvpvWCoxC8Zu48tTE9LBL6vewoVUowUwCCLTBrH4rfpBnV8dZTSZMaqdmCxk6Yd8E",
  "key24": "vUttZSqLBzwUacP168GDo8bfd2F4toQeyXe3ViFMxksEEJDUQ7kRtVCYEvELHGVKWNfEZxHZ5zuAtkzZBQqheZM",
  "key25": "4CakRFXuV9roy7SfaqJt5N1ESCuumRAEV2xBZ1QKuoDNMP2ojToX6P1AwoF3AAz4yPGfj4x5gve9w3Y77mbGhZE4",
  "key26": "3nFuHXzv32TAfsiX91uqHiKQMsw4VibZAs6KrNZXGXp4QUUEyC7uAbx1L6CFsL8hYvtEJdtpMnbHpkzvKqSVbWKc",
  "key27": "5r5xb7GEwHCR4snEmNidrwYbkTLxqZmyu5j3zS3qTfmx5hQ9VnoqGvtvkrCFVtaBpPN66EaPSE427envXseQxBvP",
  "key28": "44bNuYx1ifn4M3e9KbMhCX3oD349mgcN2Y7zERoZfWVWaHVHK2QqjcNw9LshGqqwth9uJB5NmbHc39wNC4zo2XRy",
  "key29": "657bkieCscp3sSCPXkJm8cLgEwJV2gvTtfv2vGzNDKcLvXTN4hGjc8owcFer1FtQ9ZWrMPxi7kdT9vFGC9kQKHFu",
  "key30": "3iidT1CBP71Ym8iBwYTiJp799PX2U3Cth5unJ9c7py4AqBYnGNP3CBgkUL18PoLK2MGJuzEcCcdSoY5EfUaWZDy",
  "key31": "z55N3sXnVwBvyhAbptFiYUjNFsaoyTFYC13HjaUnvm6m9PR7Nv5TivUcCBSLZHBdKQ2dWULeYAxx5JGiFuyKU9T",
  "key32": "5BvCqnJoTwFQ97tJxtmf8z5hrgi9Gjry3pUT54or98c7y6TdnfB6axU6m2Q9daAVBjxYj3QpKzfRKAS9V8JGSNSJ",
  "key33": "5zNiGRu64vRTDysRJeqKu9VFqnqozdSmPZFXvLkbt6GSWTs96ijupdc7eQjmd1pvHNYHyRUew7ciKskWVs4c82Tv",
  "key34": "67WNRYbPb9RYsPDtdTdaWf761Es7o73qJS5T9rKGr2SMaaLYjd8rXdu1uEAJgkwg6T1nqMaMBjkgNsan16sKGapM",
  "key35": "48YErDiULpPJCRSdEHc14AQPz1gxHPHRP6CNvWqd5MNmRLFRbDAcb2j3KqNG9qC7PaucTFMtVg7tswMKq51cduQK",
  "key36": "3BWubQMmNrCdDo6hL4Cz7KwahzvpSj8hLZosTCh8EKRpeLRY8qKrFYS5trfyT5DpV7ngGPHj9MpNiz64afQ7kzku",
  "key37": "3yi3GVcWubtaybaTkgNnS9ax43BVB2dX3wr2G1w1fnNViytPJ68juuLDHSjHPhYchwejrZ8eK9Eg4eC8Hon1vxpm",
  "key38": "5Ah6zRRefiJSRsWDXuM5WrTfqXu9hoJzwd9LtAXLbU7MhnKkrqSvBSVy49hNR4jukVQccnr1yA3xjYAm3k6tAK59",
  "key39": "3jLHaXSQ95f5gewzSH5fYP5BaPyCeRMBa2XuHttYfBfrD38ALTYmiULdpGnwZ3XLLtnErJnQvY7gEFLx4nTW64CE"
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
