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
    "3xpKJksSsFZUcNFP78hhvwat2C6JBGQ2U44KA4vaqeU8QpLmdRK8B5epmBojUoMHTHrn5wNZM6HWycDsQRSPT5rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67PNaMEoRNn4BW9WDYatoK9qpwizDMkoB6axxCMX6E3pHuMjvDj9S3om9uuzweaa7ZUtjZSujdkqMhUQtrjXhgRN",
  "key1": "gax4yhzog3xG1CJQj1v5xUJTfjkZrRYmr8t5tHqEgSYbKpTudAHESUXcAVvibFtXK7pW9SxbEZ1T8nHCyKiKoqe",
  "key2": "3g5peD5moAiXn982qvJ8mPr73KMpQDP8e3WQVRb32KT4zWNcmPgXFwxbScVndTsMGgLjJDJUxFjkh4Vb6WVFzuvh",
  "key3": "4Tq6dUGHa98BzXGHkvGu81LBrkY89VddRUoZ1ajxjLtNWzEciqHAj3vLC1QXojrCKQFL5jDYaefoC3uCW6jnNWs1",
  "key4": "2aseLBnhZupwfFxCLfFHMpY1XxBMcerhJZQFhVnyJ7v31DpRFSHkgEaeyhzHEqdc4jjpWyWUJyDNAcmnGbp4kqgV",
  "key5": "52c9aEyprdvC2ZVv7po8gB6ZRHUEqwUm7hJb56k9f54wNM6LUD7YXYNaDxyiz6oHkKvT4NE876k3aTJK8wiCaZ5K",
  "key6": "4ntmFUUNHs4DiErheQZTG28pXD6MfDVF8QPnKP9DA4TArXcMsLwCfusYA8gCYDLENtorHXPR9e66MQ2iVcaUG9m",
  "key7": "3fWFr86pugrCJXtyEYE6VzA9hFaR8X6pZygKXQUK6QHguvTqYcH5CLo63r7ts4Dg9HcCAvCy6qiCTuMcaGLUEmkh",
  "key8": "5WBuMMMCjwxuzcRBZ1bm29kuYf2Eufyagbv4p7foU8KmYgsSRBHR1gbZWQoGU6qQC4LbiFMpaNaz3XF3pdo85Xqd",
  "key9": "3iZ8Arr2MYg8pQaxVu2jvEqcjPeJ4cSKpeu3mY6Kv4GyHStRQT48kLYU4PViGZWCt26rPrQngfd8RFc6z2qDjhkn",
  "key10": "2SR1cU5jRZnAaVNKiAY9jiH82EDaWZx1wSenxGN4DR85mn7xY2FJTrriF6DKVuUb1DjJ24TpJ8SDWGPqoMPkYa2i",
  "key11": "2SdGtmT5HHs3hzBD2Q2435pjDUW9dAXQhTmtH6mtW7JBKLHgeSax2RR5mUaQJn8pv21YGvzJG98JayZM4DYzHGAm",
  "key12": "5BgmZFaksD3xn96uym9CRyQnH982cMrgwyzkqQbZPMAxdgtzmYpXA1wzayKFa5WELucWbwjLfozvLxx9r5gczNSF",
  "key13": "2wcrxvy6mnBKZa3K5qXN16HkCqtpekLzfjECnaJu4iiwZ1tPWAcj3TPqV12sVNwocVbZ6NN6FXyio4SQVa2FLzHq",
  "key14": "5swX1Npvao5g2w7AcnzYVFsU68bKpyVDi53mGCW3aHusJaeFndzMAG5tc3RoQoEbVfSVu75feWmY6YFHDE4sCwjt",
  "key15": "26X5kto7J4sVi9rDQvK6L5mUg1QUZTVq6bD5xppxu46MdbUCw9wvENNd9NdQCdKmGfgYXZECDogco8iz7paSG4q6",
  "key16": "5EXQ5XpGVRr3FJfAoycS3x6mUzN8UdLYRCAxa13Nxmpdeq2NDKL364yoFG6Fy1NoNhRD4Q6kGyEcNpoW8xXTqFE1",
  "key17": "5rbjw2mnd8Ha3UpnE5pKR8xPKxUhnZj9Di2BktsQ4D4hvZydFM7nJKfKLtjPXc3XgaanEC7M4RB5oNGdVf8LnUTA",
  "key18": "5bYnHuXJMQkuL3N9YEwshh2cEeF5gDtmpbonayNoeU4Co1CqpTWXtxbY6w6HEmtBqVR6aWexTSu3FRSQ3wFWj9sp",
  "key19": "2AyyakSeQpCriGnzArABXiC63DrrTdSGGVHXf8iJP8jPz7wWJANPJDXLKdE2VvAguFa5qKmyB3XQtqmVxXvuCQRx",
  "key20": "3Wt1r5CP4hqRRPBdDDPGTMc4e2MmX1Y4ragfZbFyCCLEZg6RMDs94qLPo9HBWc92NsDuuxm88ahp1bGc7x4xm1Qx",
  "key21": "4FPccPLbnJ9TDF9bGF71UreeQHCM2o2mKrcnPyo1hjPCyY26rzA3NUrjkSSyNFj6UYdYeX3p3NhJQjyXpFNJFcFT",
  "key22": "4h3fR4E8BzWPqRoPHkuZwiizpdbU8FdBUK5wqvuYdJXAM3EhMVcTDdeGVKy19hxo49q39r9k1U7D1yLKbaoReNda",
  "key23": "4WZRDoHDhMeBF2x6XnuT1MhNWMwU7BnkwSSBF6XFUPehxBzzAs3Mu9HudDHTzfSmTgC2PeyGxbnLGBeYPhTewcwr",
  "key24": "5nFTnaghMS4RPHXrEnc68AXJByhwmz11iLuurG85RGfvon6ZD9tnRiT94db9WowMHFHAt8XphBbFUUwQwB9Pq3MT",
  "key25": "25CCpySbF1xSvxoDWKK8UqubGriHohvjMRwuQjkhVSxWX6oCjuYYJXh5tq2w4Rph551TUHs9fVycgLwwqArrghPS",
  "key26": "5fepae9pDtuq6WXTm2r7zyoymfNKEraV2i63ytkaUyxbaVLTwvEmkskGJEDqkpBGem3dac7dfsrvHjoEoonCRBpT",
  "key27": "pRaebhrMjfMzubrXzcq5j4LbnGuNEVPVao57YaFpV6ZvchDf2SRsuwXcPVm6mw7eLc6xGRJhq3LdGYWitHaUp33",
  "key28": "65d5kReDsmA28L8Q83epLWNPgFkQWcGyEoV7efDi55L7HUNn32sNacsbbi5RXngV4PRXQg57jwCXmhVXH46bnDkM",
  "key29": "Kf72hRFoz15ES7yZpy8xQRQ7mWKVZuEF9i93RvT5jGjXJu5v6Wi2WpvpwQFjYEVoojQAupxbuvdaT9h9Wf9Mcws",
  "key30": "56wsJ5rKHPFTmdRodwvteyYmZFGot2jdZh13hxFgS2Ugdo6mZWFJJkbwtvJbFZZqQrWe8iadHkncPb1S6hC5j2ND"
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
