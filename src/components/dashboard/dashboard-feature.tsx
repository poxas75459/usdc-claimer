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
    "29A9f6r5s141GyPDyTLGFCC7xzgcWN6nufwRZRCMFXS7zrFTWtBJNyyupCviKzZXW3jR7ZQHE9mKR66qMvzcjV57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QGKPAAnNUirCdczG9mWyZiE9SPbs1bXxAn14RzcwuRkzF5SqJ1qRiyNE2GaaiFChDZYrwGAsFYk8Q1oDaXZyyi4",
  "key1": "3hUPMiyuNuSqSViA3Sy8QqP7aJo6AyvL3CzV8a5VGJNvyFzP2VKs5AhzGeFX4Pa4ZM96zpketimHP5LJBLkUeUXy",
  "key2": "mGipbYfDcd2SkXrty3HKnV2XnJTfHUr2HMvFiPCnQa6wRQr97dMTzt52emMszXD2TFFrjtiu6T9TyePFiJX9CVM",
  "key3": "5Z3HNqygNJNJtVsH2uHeEjXFWtLDc1sdjfPHYNBWSeNj14zWK2Pp6BycVNbz8entredvU62AaQ41it6ZFtw9Q8k",
  "key4": "38adpqGMXdS1jvM3hSabDZfHvyH6PwTr1GzqA96v3TiK3EZzmqasLfzBnDNjnrGLiL7R9qX9ecez9hqFGNHfmMQy",
  "key5": "4bYKa3j1nFhbFhY1b6cVbcCorQPZvkbipUS5zQDJr7qpcp3oniEfU4cPoNg75ZuVWpm8Pdeou5PpwS5rqQGL71Hc",
  "key6": "LzmPMuRrADvTMkQsDpJ21zNoFw3uWrJxQSNaf96has5dGjwRdEgsVsTLH4iBvhqeFU7a6iUvEe3pXBxrX1bafdQ",
  "key7": "5ocLGHZ7JiznmVhWeZeLsQsG4zP3V4WTX8ea2QQBxMS1V5BKUEsqpCmECDkRrzZjZxQFX6x2hj1HEmnHi9kDZebm",
  "key8": "4oGtE1E6EZQpharzQQD6LgBaSrZcYjkwriFDGZbohWJc395zUUGUGiwg9WCr1KdkqYhJcxDf2yz4Qm93dnB1WUCf",
  "key9": "4JWbbTZMnGdVKtTQw2zX1DVBk4qiWP7FCt7o72PQNpfo7N8rSEL2DLaiH6KsBaQ7BPocGo8QyusX43F8Z4T67MSr",
  "key10": "RAott4cuQi7DTGN7ysQc6oXRQ3BBvwXrn392Cx3ff1Hsttvv1SKkFtQFTzgnhcY3CqN1oaQjsMAsJjfRX5pQfvo",
  "key11": "3nDQ9aXLBF73tYmTNU7MwxYY4pMNf1RsU8bFFQj7mYMajCcEuFp2ZFutna1bzYRtT9AmkYFbRGaT3QqkWwd92emS",
  "key12": "4fv7uzNcLxB7be9bk9PBhNJAbEMNcxC6YZ8a3wby48GvEinKwuSwqZd14g8mcvMs1ofTdbjynJ9Fa6wHhrnQTWD7",
  "key13": "5r8vtJvZNdEHo1FSZDqemSWx4CEmVhZUEpnrD58ctwivstcpkym4Wt217rTjSqx6bdoDp9HFVL5hNLtryP3FXNNE",
  "key14": "4kRowG1qqj77YfNmtu6VncYVEUcDdNikj2q42qkmihvkZa1pGqtBw3mE1g9SCn6WARFSp3NycSBo6x6EvrNfYTJS",
  "key15": "4rphq1StJf5PQei7hGq1f32XKipu9Rugn4H1MNCqSMN4KmpnshidrqxEERcCPM5xEfffAMEQQRtFVxAksSX8BdPf",
  "key16": "3iFfgyb9SH4bp6f1ZfdZkFDYnv7kqu5TM6N23jxd9ScTrBWEuZz87sEJaVHeUvQqF8hKA2Za3ohMv3rfzN71gk9u",
  "key17": "2nFzS3wtHhfw7QShiQuKnVD5qTfoguTUXz9tbrDKiCwBgPzTU1NtJTi39ehP6FGvdMmRTSzbf4SrethLVGEjGdHF",
  "key18": "2wXkBtwTBpXHiR8eT9PjjqGanvrvkkmySuwPYTvGsbBziMQjQ8LEJwituuJX61MaRMps4mEhkK7mRUdeQSKAXqjM",
  "key19": "3L1HFxFgpzM7NXDn2BNwCF65sCboSPCS9YSBcexhd7e9gHNJ7yN2hGP1qoGUDcPNZemfRVLXbmYrfTLV7m6n716a",
  "key20": "cN1wsCMPmzwUmwiCw9aSvEBwVoYuTnBxzCYjwejZe9fNzgJbBTfXEsBCWc8enbRzSKtPhvNYuDSyxwrsjzVzJvw",
  "key21": "VbvnzQhtB9Fu9sku2FpvphnsBCZ5FFuN8oQb77YsVXebVRDzEsGNvVQc413K43MfjrjeJ5FxFotqV2VPiVtN4kW",
  "key22": "3Bh7eg6oFaz9ptgwoWSccsdeWVtiaqrjbEwgmvj8epRWxSTbvGG9a3mTKbnQkSencpwpFJd3sye1TV3h5nD2BJEU",
  "key23": "WiChpQK7hAV1eButvshpPMtETqYvwnPwWiCpWBo8nbkWGBrJbayApGKzAm7ogAhDtvWrx4AWE8WZGu5fxSvgndp",
  "key24": "45eJtodRuWaYPbyS5tj3PwbAqi54QPQmdHWB7UQgxKpPHNGjVKrh8SCX6Wj1yuoXGKeq81fBZeaA1zEpVUyNfAeB",
  "key25": "2swewth9ZbZozkpkEhsDrfBSJkKcH7wSBPaF1uNUU9qaDobj8foiFdvGVsYH6EnroRC1Et4LWtsyg9LmC6tMYGSA",
  "key26": "MzUa1qHQZkA718fk4G77Sj6BCNJgQY3CP5aBNuxUgJfkuF21tpVMjw41CghBHPTUBfXZydB4SMJs98V9u7Nf9HW",
  "key27": "4W9TXV98nKVrxtcxFoyVj2juQU8UaYyTrMcyxQoFSbfiRyUPFCVC5ocnH7tWQPYS9FrqqQ2EhMu1cix6qF3aEtLR",
  "key28": "2DrdXxwgZ158Ap61KeAK2jUrvLfLg13tUF8tkjQAZQyNotGwA33NjuGcu3LiEbDCREKNxgzmcQx444BEGEo1dift",
  "key29": "3mCppZdgEPmfJPdihXwsKrBhAVk2KvzJpXutrgd9bELx1331y42KvevdjsVkU74DMVjMT7mwHZ39PfUSLWCfiY6i",
  "key30": "j51Lx1kj6eGgjLL4nB47yS9KoUefWiCbgCrQpWKLH4Ui3daMEdL1cjTNvZC4RdWc5fgKkRApN37LR8m8hDGpB3s",
  "key31": "5L6p96xBcf4nfF1HnDayyhig3XazWVrxTyKTrQC2r41hFWsdC1BbxNA5yTsUYcnWH1r1zjNSRWYgASNH2s96JZ8a"
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
