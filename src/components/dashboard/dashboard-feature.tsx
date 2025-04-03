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
    "73aTkB4Emuua4PHA4jd3MJwu4BuXExDFZLuf6GWjaZCVoHL91Y9po5hmmCFEcfxKGxaEi5fy7GuBZ5pUiUhiYEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eMGy5YVRfJoMzuewt73f1ApS8jXxNghVwhQSLA4ufm7NE24L2XaQFjL5H9UZs52aeg8kJEdAD6SgvHjJyRxjMm1",
  "key1": "2xPU2e6cVNcBdcgp6xfe1u1xeqyBajqTFvdQMLLPwJhbWioHUnZ9qR1FJR1vpypWfqKUTgmr9QUfZk7C8yWTTNEu",
  "key2": "23h1spcsbtQBh9osJejnV2j2yH9ai4BvDqvXXS7wm9xMm63L4BSQKiYsqzsPayQkm1wXeT7ki2g6UbHnfyw2vd97",
  "key3": "2D4zQV7845rc9bf8H6hLu82WTA5WvMA3aTHUDBhsvBViztWjEvYJwWBE25KdrSbaKRwYoEJo3dzxLkCzEr9dHqqv",
  "key4": "2ucB9Gq8QYhYbc6gvutLhK2oY5kWSmZz693N4H9q9vJRv5ocPuzyrsPrauyhUEkZJMRHuJZ8G862SdZqu2haSrMP",
  "key5": "46ZSLL3xLEqe7VUq8iw8wdEydpbPQqFJpV3TQeXVGoQkm3PxuAYBHmvTXaefqivuc7G2qJbzMXC5RCdd7YLP8NWC",
  "key6": "3gc4a9cSKBXyPfG6RTU8fA1SyN6CSDSQL6gsi8YHPzn3FfK1GX7BqaBxncrzDJAACYEFvtrMKidavPL6w77pFQyy",
  "key7": "4miN5ouP1SuPgfpyrcF2SQT65x2AX5xdHFCwGhtLmzUG1L4N3DabDurSszWSsA8aXqBmD1ZC9Nu7KTqH3c2fFrBL",
  "key8": "Ni9vz84GS7A7ZZr3BdnxrNGHb1hTyULKuS9Zfde2MRuEyty3JZZ2a6oE8KhDGZRHYw5FoE9vQU7wVHY6pmvcGcA",
  "key9": "4EYH55uEXe4HfE9zWaQYshvNWY698Ukbgtv5Ya5kZkVKHLQq8JJW3j9rRMr4BH8SvVZGeTnmYrpviDU7saWrGMwW",
  "key10": "3gkNvvUngms8woW69FNaVCaNpmQ6hG4VTkfUtJFkg39qWheKbZgXK9uCqjjYaUDNSqfZoMqtKcPWhC9mkNrwGmET",
  "key11": "2vBeQCFP7e3kkeXv7faZCqZahsS1RDHcMK83kYoHH6nDas8i2FTTLXqgKsZywLxgS3cxq8prnD4ko7ngtqzTuQnw",
  "key12": "5ZZA5QMgoewUTYYCxFoebEoEazeVHEC8HMEq56qPd7gcud4wcRJr8z8MtjTGbtQMFb4rGXMyzbZZKNM7uXBP7Rdw",
  "key13": "3ACesmonzsgmvokEDkGkHJri1ZCFaNwkrVkYaiY5V7qDxVHkVjK5zfJ2BLMDCCbXECXVEWBEVmYtBcUtAGUWPviG",
  "key14": "4dMSH75ScCD277Q68wi1JFS74Q6mpMmFZGq4mUUPnFd8fQtKka2m9aDudwA9G7cB5T5iqWGJKPxhwsRnG2Z6DVx9",
  "key15": "67DrRoKnqZpwbxEcBVutSbqZx49U6yBPLhtmHpKPmjgoK2QrgYJfnrcqQYByvKXyaNHpcqrWjfHHwGREfoC8eNxP",
  "key16": "4esLE25UPA4xTmt9Sc9bJtjtEwyQ44PsrW6HAF6bvp5ERwLVYWRGUquUGMPU53KTt6tGXSp73Js2WpyKBxQFaaQm",
  "key17": "2Yg8N9j3HimY8HRoRNMEhGY2DoPJDk7pzbyEKBQ9iDy335WF6fkGGTv6bcXV8YSjVhtuXqoNA9c9kk6gnZtT4hn",
  "key18": "5oMcTjSpGkj7wWLUi7gb6i5QGMU2yV66HaSTNsYxNcjfXz7BixGis3GVGzEUeCr3Cwu5W5jC5e76bYSKJKM5xKda",
  "key19": "3sRpYwEwMRx6exNanLAoNDDBZeYy8Ad78PQpcLiEHHrgsntcpi4xYazTofUD6SX5ntv3bgywg1hLdaPosFz1DPnN",
  "key20": "2b1w4UDF57ga9ikRgwqouUjsdj8hcuNhFAPB5kYK8eAhQFcksBTYo7kT2zhVrqATpK5NNEuYNuPsaUbNHAdSuhiT",
  "key21": "5BE2HNTByh1aiysQqxKty6JCGH6kXsQT2rgiSkRgvdKecgdsFsjMzVpo9UemKDs6xvxxWKxDxVFT5kpqRTu4f5oS",
  "key22": "4iM6LnHpsHpVYUsaXRUSsBZywaAwXVJ8HWbT5Fni2tNjMRRSGmtZM5tvRcgzS5MDWz2J3ShEDRgF6ofv1ka3TTdo",
  "key23": "58V4G4hHX2Snn2nnhn8v6Vw99vXQBb9vTK8YAbGnBrd4wmjD7LdjkGNq6qN63q9wEE2jrLTpA1uhQF558VJV3Yji",
  "key24": "122DxYEfe1xc7TGLyHq5CvGmcJa5V26znHvbyBPm2yoz19DErpWVQU84Y7HzMFAUQetj3eUnqZsfyuqpV2WgSCVS"
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
