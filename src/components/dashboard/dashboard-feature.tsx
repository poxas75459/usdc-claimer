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
    "56H5TjtQ7fKYHZ5gvEpgnkGfzixjuRt3tUfvpxwtEqgY39QHL24RWffGcMwUMF8UJnh76BX4GuNGdaU7aLvLS24q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jnob9xxCNLFMh8XdKdFv5C7rioinSCDPmDnwVoyaMu8ouU1ZFprLxntQCQQDfccUWgFJ1Gk1sYQvurpvkvvHza9",
  "key1": "2YufVwWitN5yJD6vPbexMBAFrmtMNWhEGxP1SsHJXNSJyCCggKoxuN9rLw1AbsQygEiMzHRWdXtdb5VUMvCNnQVU",
  "key2": "3cLHaQveYzPoi12kxSD7VieDmXjTEYfJNoaD7YtCv1WMSZiVEvMaoRsNfCHRjiv8TMX1G92Kcaz1tMuSBKNxPSKw",
  "key3": "65AiTqpocVQT1WqeS5Z7kmz3Qcp671WzTvY1T1FWYu8mN9fgL9eFnZc21NXVigVEY7pBWijb7En67rhxbqtBTJ1M",
  "key4": "5uXo1deN3fjm6qCkRKvScjmg1uGsvuWNfWEidSJ7AmH669jPmt3okdUdX7r9nZL92NZh7rCgSdQtWSpzCJCY7xXK",
  "key5": "MDkuKBrwAVKj26sLt3HhQevYvA532x2iFVFNnrTWgALkpBJSfnvydAXg3NjjhtuX6dKKV4gXwNiMt7vcwBZoJ4u",
  "key6": "iVpJ5WwDDL2McV5GwHUnZgfZAbbJoEo1PzzRfQVEDRsbj8QHUMaHocCy1JXHaaHinesZ2i5QdAr7Qy8rpS7LFeD",
  "key7": "2rzQuLsPh2UCj3RHLCP6BmFZbkokqXzrQcnNtnUat6CeMmLtpDK2TCuDzVxCLAXfpDc5eCcihUR9dXuzBi3vJyeC",
  "key8": "2K9nzHqAYmzDsaxZyiUv2BKeNEuH2PExQanqUcpWkhZ2xrouV4AZrSADXKoQ6RXdPrkC7qYJxwRcD9Jt2Cqbq6HS",
  "key9": "5KPjiwdz5iUKW6tvtthiUnwoFpfCKbLhLHqV9uGRTDWsZC3xAb3obvo1WmzkTkfhd4C9sTKcvTRYPRkGaBjLSXEe",
  "key10": "5U1NZE8etBHkVAmAYGm2ckJ7mpnstUzfm2sN3F4vjLp5xstFN9WGvaq8jrLhaBS7r89ME1KkSxoVpyLPHFqMikmS",
  "key11": "2fkhJ2JfxGTXijLrTzadkoUPs8PWTGAAb5TJ4FYVMeH8AtQkaMMGbAKHEL5ez9kYg5V8z6VibtqJd3LLNvf58x9E",
  "key12": "25xdbhYNNBowyBkBg5nu4SxVMf3hEryuog3MiF41kaikMgPTcXSC9mJPvbMEnLp2MumSP2JmxZqUDK49VjGwNcGB",
  "key13": "6437vZk3yfod3tj4MkwKNtGJ2amm2CToPiFwJJdpGWZ8B9qgpwiZghrr4GQ1W3sstBT8t8Jz7d257NY6SqwqQGJP",
  "key14": "2nLSv9uJtGNRbPThyvEvCSTBfZNeFM6PgPzbPaVXu46oZTdXms4HiJSac96n9FHhD1DdUhZHQutqApuhenotDDfv",
  "key15": "5GaVbMZ8DHXH4WvAbcMcu2Jfn8anTz6FeYznwi6NWJeZhMwVPYF4xDCJ8cugmgwoPDFTwPtWKSHuRk38s7oNtdFs",
  "key16": "65cik32uR44g18KGZDKoe7RzDPB494Xbfr54w5seHVkzcr5bactxHEoKzA5bsgmiES35hThBhQ9RJYVxJDpWPM6T",
  "key17": "4CijTUTFeJs2hRGLb9UnXjP5V8amQKdtZcqt4TE1h5P7x7yRFZpsQ6rBBD8JepHMwtzsgFtM8si11BfHvWD4CyZL",
  "key18": "e3CVRWtRWU3xCZDLujhrRG7irgH2yfRAX8z1iy2CUVHjuBBQTQYbfWcynPMVKMXDEGui3UkWX1qZDcfhN74cLKn",
  "key19": "SSXqsMAyw2qcaPEkJMDgYReAXyc1NSDdHMd2g3L94Tw6SYTWxLuwjuoENPbpJ5jPfyhDVJs4J6Z6bTCkkYEQc1b",
  "key20": "3AzPRyPpx1mFxnmsG83LpRiNsF5YtPtZJFfK9Z7fVYvsvoQCeHiamuvfjrbHkohZFA2jNkUEuCjT3XLoS6V1EDjs",
  "key21": "3danRMWAbfTtCkfi1XPGm2vF8Yd7FPqq8A6Ax5aLYe6uZaAQoTXFNz9tY66Cz4B6YmzPPknuHEzKFDRmcnLBW3SY",
  "key22": "2wK8kFXtLr95t9GMaCn1uf3zX4zCMGjfs6vPF4qqrvye3cv8vNeyN3HnT8TnPCnvhTDrma7aWjqWW8cfSAESCxu6",
  "key23": "5MrveeB1Q9AiamQauWdhzroKsPaBg7R3aLhTsMAR9obW9yRoEd5TWaAiBUsM3srtfD6uGU3SpnpAQLTU8XWLX9n8",
  "key24": "3RLjs6mpxZJ2fET48vSSMBZFGMq5KJhDgKNXD8Hduiuu2TTbUPTocFuzgpUrJZeQTMudpKML8ak5XqvfzqruXRXL",
  "key25": "2sNNbe3QNUDW3bqHQVE32EMizZDN6zCbRJPBLNkHu654aNi3rdAsG2FXQ5UCcQ2rjDHNH9ehfnWRtPczt5CLrLJj"
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
