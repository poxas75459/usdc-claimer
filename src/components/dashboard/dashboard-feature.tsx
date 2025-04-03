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
    "M9L6uJhKrMo2T4Q2RGZwathAWRSFwZdES1GcFoa6SnhLV4uWR1FsvPckkFGW6NUTf74jRTgzDyq8WqKZWNKN2dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WrCzNnJosyMDZkFjhyQweLYz241wrDmtLAYKZaTTGH3Bwg7ZafkQSETC9pMHQGkkq35S3iqJS3X4Pp6FeN8SQGh",
  "key1": "UqhYvKEaw4RDcHGr8R7mAEfjuD2oWdGsFRkH61JcPBQaiXWJwUmL2e6MHEKhdvk8s17gNz6AK1btmqRDTzUJ55F",
  "key2": "MQcK9RhEE2Md1m7YiZj8g5QZHdzQS7qp3Hz871gDYU2c5aogmTcAhTE3kFcELx8kzhXuZzSaRVwEqM9UmKcmeKY",
  "key3": "2BJVNTc4h37Lq19ads5t1QJ239DbWZ3zuyVXNjwkFLUh7iUf1TeYfXaAegnFUPMYaheaZvmD6BuZwB2kwXRJZG7w",
  "key4": "3aiXBUiuyMQVSU17a8RAUbx9v4eie4MgNLJWrbJpqEX5Fb86HzLvJahiPJv8TcxLQQEXAbRzJSL59Z6vF7wSjUFA",
  "key5": "4Sna4Y3WBGqYUKn5P4jFrTGvumxfPq2eBsn2QBpN1jcvygxdnN3aUG8TQdjkMxsYRBDMsbtytPrYgqLMYDqCxfap",
  "key6": "BX9apc8K13UWMjtjjjC8a9QbkyEe2VxKnqFL3B8Vw8huuKcyPBiisont9isdRtGBHA9UG4oTAz6Q1sMQQkZoBmK",
  "key7": "2AMrHLPJ8PA98PKuBANjqddEnKs6puQME4QriiKLLttJQYRQyqkttSscPMLowSBoEoKYj789P18bk9XTkroRL9ED",
  "key8": "5caKg49pyk2862AT5fKXm7ZGYNLBUP2K2hLAeQrDRdt3rF5gJy5rEVrSgKPNYjuKq6tPJR4JidYhWbwQWZ6vG7Ap",
  "key9": "bnwDGErVYbwCqSvrAZTqxja41ARFaBTUp3tQW2Xg91RKn7v9WjTK2ckEaDK1xQVCx8hnX6DjRrhpL1McqkbZjnZ",
  "key10": "hHu11PDifGERbiQvoAMYA3a754PHZywzWTbfJjedTghMVq6wqiuEme5Eq7EBwJyDS386GZqTe3RsWkXe9ShkdYm",
  "key11": "4GTUA1wjKDogLw8tjfWRXgg95UcmgW2QC2Sn7Uqot4NGVfRgUcb7PUExmzkU752NCzAf8uZYGjovVTT3Xs2CytMW",
  "key12": "5DAVmakGtFgfSMtyPNwGSsPwTzUaJQP6tTkj7Auy4iZXM6TB6oiYPbqj3c5hNzG1gQfJTqcdKCButXA7XKoZF1o7",
  "key13": "5LYYGw61iU8VBC8M31TYfrLNhMqn9T9q4HonKthedLycuFJigW4rcqY95Y1hmgBgvnAKFspxSCMaK9Sp3BZcacw1",
  "key14": "4qm848azRMnmNR6ZC1fkgpcC1xUFT1HkU59sxUVdDWhvJtpFevtNCPjxaWixtyQcFYCfVEwefu8hRThre8CbbPny",
  "key15": "3YTcS3cN1ALACNMUB45yZCfeBt2rx3HNT9t1bsqopuPhQrCpmBJoCA3fjPWP9anhWVg4PdHdKww4uuQwtAQb7Kam",
  "key16": "5y6GoEjfRMyhxWFue42r5P67xFTwtX9kNP5nY9kieiNUPcGANQGXpeSTNpsE2PKpyAW61dfNivshFSep57tSzqF6",
  "key17": "2ZtWMsr53Eqv2RoGzow1TrYAbDzEawQS2V8pvy8Z5f7vThfpvyMeCReagLiVrJ1e6FPimghMnBQxYXF5yyzCmdCe",
  "key18": "B3z4T55JA14A4YNZexUYMsUc4xR4TYjVjc7KC8wWY9hxYcJqsPrQTyFSJeEAWqBn6W3J12edo1rF6hSmu9n4hgr",
  "key19": "3y6XWmPmTGcUucv6z1QPCGW3aSQYjVpoePviqJzNR2oYd9yaafdjpRWeAghzqeAhJEABQxy5LFDm29szatjYf4GL",
  "key20": "4yUFxoP9S3DEeDxevfsP6dwYgQczNfyPUPTYAsk25YAK3wCsFEzUSywEbaKsaQVXAVbk44wniK8QrVzPvYeALYXM",
  "key21": "5fKTcWSt9tAU72qJjH83KN9orRCXcXrTrYWTVzoQa5cZdhJRKTG57aXEPUrB2afgF6faQ8vxYESG7rYtJsgwnejb",
  "key22": "3A81D4p1CdBFou5frdgRMUNqnWQ1GYw9jsJ1fVXRCxnjYudYxnMfDBNQcpgu5SnqsLCncbVTQo6w5f1QaUdXKYLy",
  "key23": "25NkA6Covw15ErSByQ16ZBhzYYjGpuBaWKFbMAPVg9UwEoKKKhoLeuVUi4G9hK7PCuUw4BQHEkJ33R2HrbcCPDeQ",
  "key24": "5aTpgFaLZTLLYBVJD4zHsvJfT4cmUweArCzpL3A4DtK6WC1BziSDkRpddTEA8Rgcb7zydsYZyfy8kKJDxw21hont",
  "key25": "5vn74VMNJyoMHWKWSxuuXi1UhquXgYnBq7pgKWZt8EVsVgKNKTFfV2LqrtjifvNjNmfZ7E5v8y44nUWCph1dPkqB",
  "key26": "4pS35cs8TbaegUWj3RgkkjhmNZBhqqgbLTMYjgtgPoVzXYj1s48Y9k4arkgWAtVgH1P5rCmMfVc99Yqrz9Qo217A",
  "key27": "WqrEm86jgR2NX1eHRPFvUn51Mm1X4q9Fr8tXDBgvWYVuWr3GJc4WhorvexsE2v9cwFyjkfnZdcHjTWavtftEG4c",
  "key28": "5xAScLAPUgq1fEcc4QNf1p71Ee9MQdtahZdzh4GrQdZU3KbDUX7AbJAQ1EpCJWBq9WG499oRebanLwUqdgfzr5eh"
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
