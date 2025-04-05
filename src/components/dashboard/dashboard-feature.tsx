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
    "7KTeVFBce1ZKxHBZ5VqDJ2FgKHWJpuvbBdx2QfZBzDEKRrz7nxXPXnQPSnDx8chH2qGewiL9EoDVAJvY4A53Qp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uMdv8xMFcYoaD3e8Cm85nBiSahHGvAnAcSmoU9ZXbTRY7aoH3iGTzcdF5GU8uXmMprJn9Cx1fUvsKE5WYx9r5GE",
  "key1": "4NZKBDLnACFTj9CDREcntZg1JrefFBARJ1Y5iDdH5aVqvT3j3MtxKk9sVYRMwPNHBu4uuyLS4C9CinV2uh4RRM1M",
  "key2": "4rd8ZLjDpy81DoBFFxhcRkTTdd6MhqoE7tHn9vXZcyJSvdpLQgAx6WC7pRowwbRpcg4Ut9ytRT9RG3VqDo26jmMm",
  "key3": "2nTSKcfMaGsvETqNubNYisuPtMuzywLZi2jnFe4vQDppWqRgyxyQmsDhF2oPuGCuBxzMRECwUwiPUuXFfCGJv2YZ",
  "key4": "3vAyVL6DRcD4DGy5JzBfYZcvsytnnVmy62kw2gv2gaybs9Hrkx2YVcsMN67E9U9TsEiUApG2REFvZxh1JNjUPV43",
  "key5": "5Sdo6FLFQ5FBYY16UV4knekXqNJJCzJTYkauNNRoFHqg9BvHUnmdfmUuLhGnX5W29xMzvPXqkU6zYKYghR83TS8E",
  "key6": "2VPGCdKaXpU4xxaGCkpq3VFGz9jK6MND9HMCJTrPNQwFqVNtwz72q4Q5W6j3T86snT7zCaX8ke6hKXdQ2Exb342o",
  "key7": "5Ra6iDJeS9SGC4xEW8Z15RVkajSiv8ycxXRZq9seNZXqf1gbAgbCQurDBDe8w89e2iPuhbTX8K9tCti3gYuULniC",
  "key8": "31kNQDSbXyDVnTzDEUeuvPQmUpWaK8PVTwVTjQqFEHVSDfs9m2UQnwqUQX1U4QPhjC9Uu3Yt37vA7HAzKYXXEHiK",
  "key9": "3vuzqU2UJExqRJBBEHrr2Kn1r5MyuqAPkVNQokvcLA4ez8qwR3VVUb1dtGyqfbj4shQBGHTuZxZSg6XejRzW7AUb",
  "key10": "3poQQJv2tZyjHS9dssrqZRKkYyahuJMyc8RmJW17bAuhHjWHCGqZgNm7npUXrdFct16XFCZtsrmdmTcUNyYefc1F",
  "key11": "3uwwFBLbEpqp8jSRWwm9Fha9oqQPbb2tbtbUCLicxbyKFG5yMegznBSo6nnvtM9J7DVS97At33Q9D1nRSWgj95E6",
  "key12": "2U1A4i8SRcCuLqEJ8kgj33bLEnhy3zm5drNSqQkv2RSNk4TmcUFCyoe5c4x8Dam9QtQpsRTWSJNsSAdbkkirQdBC",
  "key13": "2wPZ3A8TsaUKso2iYqin8zeWYcq3WArpoFpHhe1WfaYzAMuKUsT79LZ4FYyfB7uFxcJxs1JkHVggYCU3DSf1ETqj",
  "key14": "5xc8rNmwbGU7hX3ghwKYHYXhdkqVTrArDs6Kz36u7i58qA5pLzo6Fxbp2SRqmtHuw6YxkYyytXamjvWnwVgXJ9fF",
  "key15": "4ysSHTT1XrTMkJnEko8Gs25yYod5J6FaVC1FLdq21t2fj8BfoRbZkP8YAYemqLthCou2KdCGE7r7sHBdmX6bF4D3",
  "key16": "23sRi81uQwnebF1NaUySUTyjv7XFALnUPpagfjsPx1wKXAtafJPqLbMcQE59QDzzx4uSHGjmCHZX2bhJQv1y7scW",
  "key17": "36CmPqZC8xPbEvaRgidw4bee4aKmAJDc5ip9Jfg8ffsh9WCSrrn7XgQN35kVPtkNcUzFYvXqWNFkop83rW2taeMH",
  "key18": "44LgQCFPrbbhaRjkDVztzKunSb6Svq29sEH777LQv5HH56YQiH2EC19e3xcv3Lt7wHSQCGMCsbXM7Ywideo5e9X6",
  "key19": "2dH3u6Q4YokK6z925RZAxmMfFQtgshBdvdyR9YJP2rkhvUkvtFT6voq8XoqBqrAA4PfG3FGuk4o3jKbDJSebgg5o",
  "key20": "3FyoAMaZzSrz4A5TgUXqgZH7Zv9CBbWEP388taS7WjKnJKP4QkNYKzZzW5qdKjgQUtBNF2rpRqHUCmv3WbLVMiic",
  "key21": "5ofLwvwxNn21vdftwsqqpSmK6gzmkeVCdhHotjQXTDb5WWEhM43oZu5cWGv7S1fZSL1ZCVrUP9qWDD4YVvwVecEX",
  "key22": "4zcVKz6bUekUP6FF7r58ruryFnetpRcqgj4N33tE1GuYXJeuxBvN7Cfw1d5o4D2iojf7wu3qBgQGJLr2b6CKXfRQ",
  "key23": "V7LwyWhGWbeStDcoVUty5UNrTfziNMQn32xfE58XBNoGGZgNc6FJrezvS6yYwKDyjVLxLcFsAhbYkWtGKcwY5pZ",
  "key24": "2azKkVqLziYsSmek8nrKrencHJsppXXRwt4iUPYHG8Fsdb7yJpanRVodLP2NpVZhzL2nukig47GGpeQJ79CXLrRF",
  "key25": "3PsVyLRvn9vR9WS5mHhRvRSPvFiLe15QzhFhhhXfdFJttDhwryVeT1JjWcYnUUyPCksp7mHk9omG8YkgfSMwnbHZ",
  "key26": "4mNEsrdtNbU6cQ16wtUtLRKMfUjSKTMYKT3VRMy6o1TtoVMqaEanXqXnoef42eVdQQhj6nbSvHN2ZdrHzB4iuWkR"
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
