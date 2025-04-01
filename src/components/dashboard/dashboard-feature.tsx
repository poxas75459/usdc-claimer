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
    "DvUZw6uuvwCVK55AX8HbEYv5SiZKa1V8maFm31AZqgzUrLHkNvMgvgoQh6AEWV8ZvVL3Y6ixLbVrRj336PvVfeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TkWVbwLdkPFvDC1QvMx7JKVaZwZyCn1XA5Xd2u14QH4yoe9HyuZaowmtUev85Lca3LSqoyLQhG8icDXhkFU9KyM",
  "key1": "5TYMmmqTiRHd5FyTV9iLPRktPGH9Mi4W6Vf1JDqpWfjPoZCD35HDQf3hhdPkZaP7PazQ6ezye4N9KW96XL13yhq1",
  "key2": "2uiUMxXpgAh2wTtwD9h68bafykqJcV3y9DafFBpj4UgJP1rdiaDtf9DojcCJUccPK9RRoKAahHa5pXmtZWqouK4s",
  "key3": "5C5acwxHx3stXFKxpoHH6eNUTijX4N8R8FELG4DJKsf2Q6xnTzvdLdTRGvowNFwC6YqVZ8afQAVytfsvNVKHhhYL",
  "key4": "5zWV9erSZeCKvdoq9n3R5gTU2UbgtTXRDNQ5xT2QrrHRNZuUXuUWyEpUnSP4nvPuEZnvzYRxXhvFDU821nnue3wC",
  "key5": "58r2iwGHoNDtvstM1Zux6gDdT84nPVupLrvpfeboy2gvBDRKsTyLEDT2NmXgXNbwkhX9zcYnFR9dSyJFCGfe1pEJ",
  "key6": "4Jkqjvnv5vWs7A4sZdEvxQhpsYj1GGWWa6tqYwzaoM5U3JszHynDyRJX9stFJNdyhEVjY9RzZBisUKpENb5vrbZj",
  "key7": "4UcdVboVtq5yzQxTrZGtU7YUqRfbgF2as9BBuWH4SCH4Ut5YTtWusVWHK5AcyQBznUU44BxjxLNrf8rAvCFDoNSG",
  "key8": "4JpxNHKWoWrnCWoeKnz4FFSS1T4nULsuRBCBGvnKy12Lq8yWBFP2sk3zcpkJSjMNuG4BPPgD21VjL1BTt9VKGxZD",
  "key9": "3RJjyak99NAMpMr23MfVRHZqpAKVHrN7EmRutoobxiprk5k5Ag4tqxE6U7CRP77hSbJynS16QVTF1zgf9biG84bG",
  "key10": "48UHg1chhQSxL9JHXgtZwpXomme6oUpEzcAv2TcGWrdwG5WKsScWGZB5oBXawXDHneSC165omrUp989FHu5t8MSF",
  "key11": "4PS6dconAxHHYbX4hqg5fYaqz9coPK9kRp77uko8XNARmJwzdueGxGt6YqsfMnFd3MvbyridAScifwPjVbK7hZ9F",
  "key12": "2zgpxsnuKGPPsCYxFcPEL8eyY2yVvVMbKZMQDoYTHcHDqze4cP61i4Xb3EtFk7JnTyyuU6qQ7cYG5YjTGribm4Qg",
  "key13": "3PqDQu3v1k1mPZRbEdCqNbvsZLDFUAkimamkTUa1ZwfupLHA9DhHnsTvHrkfJWg2DhT8s6w3V9ZR2Mgcw8zUXqb",
  "key14": "DPoA2hJ1fktFeEBhYfbCdi9hZaYLWNjwBAVTUx8hHrq6roe8UfpcX99rEY2By5kTorpdEGwo8cP5yPypVe9EYV6",
  "key15": "31QoD8JLwRXAyrn9QW28dgtcEMwS624ABasyQshfa4jPhjwqLokTvBQMBbVfsBKDjvf75iNQBJzP7ibJM91cktRc",
  "key16": "5r4vun5VsTPJzi9akX7yuaFn72eqUrZBW517VDYjTQ5jSgPRWMomihpe1aZN4ndjY3PoywPfYtcYYqyWx4467JWv",
  "key17": "2CxEZxYf7Pe1Ro7f6bzQeTpRhMqjS2P5ZmGVRcsTVCgYKv8UW5J92JQ3BY7nsKVymVRugzxJCBdt1n2DeWtBuVm",
  "key18": "2Sz8ixAn8fcS7CNaJShUu6GeGTZzE7f23NWVfzUEDaitGgMrDD9oQ6JMVFm1DRnMYiWSQNk2iMxzCnSxsQAVXZVd",
  "key19": "H9Sv3Beq7uHr9ypvom1pVNvDz3jDBqt2jqfwYWLWSiRTc4u9bHErrgQUnr1wyn32rH6ije9M3BkC9FQE8xy49g6",
  "key20": "3GSsTFf6X8w5pM1rmvGVxT7GZrjr35NHctJryheiNWr51R6mtqEAwe83xds54gheJNCitNnuk1yJHzAJBRJAU49R",
  "key21": "3cWzg5rBJv5yRFtNsPN6efHWwrZ1hpa5fUSdGRewMDXuFDFaLoAR5JePKVMvNr9dBtcnCYago5bvFW6UpWH6HWgK",
  "key22": "ae6vKXocv5qHn256ntEVVm4QG8Vy6iqacDa3ERPjeMfue9X8kzmwREHm1Nb6iQpamQujvD6anC3rGRaxhr4HfPe",
  "key23": "4BvTJxtw7mMfHuepxTHHkxkkvUWzQs4vpP1BdS6WvZtsE1aXUVQezwhFsqfSqUcJGjQAc1dwygii5pp1HXhkkVQ5",
  "key24": "42De6YsQua2K5kiVDse84Y2NKSWYSwwLfr5PYo9x2cRGTtefrdJQpcYyz8AnhNkcUBX5U1CNVeMd9whbKXvFayZg",
  "key25": "bQStnt7EGLE7Dp7PbqpEMdNd5K6kNFZzJ9q6JpYcVzWeVvrYvNyRGe6xWJ1VhyGbRHpsVfqj7wj69bmrLnENAkc",
  "key26": "2bR6wxgP5LycQ66tJBnQfMgpJbNekx1QVJ49o4xqk6YzguQg9v6mYyAk2eD49UJ42ea7wc9dicPS7g4zoR6EfT2S",
  "key27": "B9siAU8cEP92U5BhByFfysGUL523LB3HHBk7GNtVfR7zAHiSvhnw9yV7DH3pEoA9iuyvAbUGH19VUX1T5gMkkaL",
  "key28": "3Ti8Cn95i5GYo6c5e4AXMXFscuT4ykvAqrme7Dq7e3kq1vyLcwTUD9mcZySjK4CuMiAyRfCSfULDQAWHYRX55JPp",
  "key29": "3uerYQjAuKAGyp2oiSwXNGjUANVHkDKrqSFi8zbejB6cxkZZQKXfrSVCmrR6G4ZYXNFbwAStFqtGGNMLm48PLaqD",
  "key30": "5MreU5fW3hkzCdVAvsXCHvfafWhb58dumxbiYRqbgTmksbFH8Xa1MutJPdgbXyhfAdvXgVq6AwxSpCgnuPruPLQ6"
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
