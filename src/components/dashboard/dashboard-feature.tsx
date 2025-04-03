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
    "63GHBb7TkWkwPV2n4i6tKvDzepD4MwqWRskaKGyFLHeGbWTfFZUfm8qcJCqxAVM1zm7TRkSdhoYgrLEZXNUBrFbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LV3mpdZxbMv6yaLxLHo875XEJhMm6tPcJcg1UNmmi4pfpNWqN2dGLwyHNfdJ4RHqEb8h6nsjVeVHDzPyh9ZyGVW",
  "key1": "7LQhA9z8tTKDgM8zHX6kbMbgvQarRwRtaJ7A3ezBPuc6Aw8k8vNTDFPukCkYh9xErQwFjxzXEX9MNfRFj7ASFjP",
  "key2": "4S55DNzLfzRaWvUPt36VvM8o7xTG9agH1haS9gcqc9GmPbDCY9sdKNWVqJ2o6SXkoSANmvfF9j765pTiDN361X2k",
  "key3": "62F9JSZJuLb5bdhW5Ag5zfxG1Z3vU4NZpZk5ADtvJ4hpqeZkQ7q7zjmoqK1UAeb156p75kbpW2MbTkvqC4QERAMM",
  "key4": "5xjqVdTjMDWxd8ddk8vQs8JaWQ8EwRZVNUQx8xD2DMqKvQwHxfTn23YrnhFGXAEdsQhXEK6AyhpN88abhkh2WTeU",
  "key5": "V7RutdrKKS11169hQ1WBr975BDR2PxaNhGEk2SGmKfAX9bht6wgdYtA5oG28hXntDYmGDiSziwLtoHmjHw2mFMZ",
  "key6": "22RqQ92vqaoJmUzTdyQbfwv4u46Qh55fxSRKZhiz4oCcrHs1FmxXxwVHpmCKu54XFyHLAUmMNf1D55Y2fcB1cR3g",
  "key7": "5GbnnQJWkS8BTNC3yw2tuNWYotzNNdT8ZbWN2BsZLEq7xCstnrpWP3nH62BSD9LSyDa4CELTq7pUWGWRQQ1gcwpu",
  "key8": "3DnBvf1pjK58gCgPsAu15DSQPF2M8rTckvhk8kQSzarGzZHqHyqU37wH1vDQJEhVHowxXzs4dwfiKKa4gDMU4aX8",
  "key9": "3oJM89H3Tm34oeukBj4d2hFL9irTBtKmUnyRr59xokUFfnrzKp9DKevVxmCz4VmMtqofEEfcg8Vx5mHyjsUiwxe1",
  "key10": "EJaoTRgqyjcYKU48pUv4PxoCqXCgFZMwr4DtueuZwxegQRauc5fz8jo1ZMmdWcKH77tBRF1Y6ycctqxgQGxV436",
  "key11": "4Vn2D2HWn4VKwnBbRrDLMxUCFt5b3b1Ue4c4VeUWqVaLxsDwR9wPS7vz3xwY76VHEueLNEZLgEPfCt9yTtMj6iYY",
  "key12": "3xf3dC1hV3XmjAc3WSVugw6hSjWBbvfxNCQc6AMQjjUtMs6WQbaHLxfQLwiQxsv6dxaG9HFptQewyJigzPAsZf35",
  "key13": "5jNamfBqvxFcvRMznthob3BipETmawPD4DxS9WBdX9zFkQtRajuk8sicqGkzkE8wM6QW9vAZ96o1wqQEixTm43o9",
  "key14": "4FP6yfKmuMHmmwC1dGVctD8vRZ3fusiFhKFrZSkTWUFTzxWvN256g1iB5dTw3U5fcuUfPZnfWJSvtwoW1hh2NGyr",
  "key15": "27ux9Stq7hjEDrBpv26RYFxehyqn6s9wjyQKjLVWSpQqhLkKdeuza2ujCZ1pbfY3o629JXE3XrVntkLDf3RsJGkt",
  "key16": "5jNakJKLpyoxdTMUWeVpHaQPLnWQVJqeUQBv7BPRBQ4pYhkxXX6Ug3N5tbMYjXgQEqkxX9x1K4fhtH574eDABa2b",
  "key17": "4cxVCDEZgdCdUQ722vB9k4EsxxCkDVHWNE7bAQZfAFYzfYkWxspLUTe3KDxgXNsUifQhUTDhurKQVwWEbQeAaP1T",
  "key18": "XumhP4Pt5KKvV68x8GfFoop7uYjNX6kCZGhBCKCRaFYbBPE2dnMQecmBFPdkX4gVk41dzHTTyt5sGQxtGuVrvWQ",
  "key19": "3WvMCp19L7EVvbgPDYuoiDdNxtzyQYkHErUVSHgaQBQT71mgwnFrfJpCHZmurvWLwYiyxVDYbbCLAkBvRjc5qsMW",
  "key20": "xgV26t51RrmaSo7zAJ1D9ujeUZGSrGvkVBMpUf22fTrVUJHiTDsmQQZgpyNqXiWoSdHqTWEePoWXyJBdfdn1orC",
  "key21": "5eqGyA4ziSnbAQkWysSnzVRJ2KU4dr4KisFktidaZv9o6hECchcBYZDPtFhLsRfasLHZZiPq6Duksamt1iLiAgso",
  "key22": "2eANA84nDSziCCQUFbQUtTcQo9VVeZARcvDLtCFncJPvDCmmWHJo21wsE7WvHw22rsLZ16MqDxjb3z6cREGmAQ9y",
  "key23": "5aybG5AzjgbN3u3XemB71c781h9X1QXNSecQVNkXcHB8s57JxURoGF4Cg4UbZ3f8zvkFwDLudUpRJYbbM7vZrnEA",
  "key24": "4ZGcFFkFhmVJstpexhun6927PeEYfbbcnCCM9mmjjZ4DJKg1DpEGu7RJhQnxkPY8CpjgF1PSbpBT8fEZH4366r1s"
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
