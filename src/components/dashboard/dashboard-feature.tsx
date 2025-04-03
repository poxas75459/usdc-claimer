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
    "2aLRHxHC4Bs3V26eeBZ1UJycwqDNhjuyLW2fbWmgG7zT7mHMWL4ozVrQdZ3pAaizCtuq7zNvse9paj4ikceBJPwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HcpuwqTqEdMpaWUEFnPq6r7HqzAY9fKhysVvn9DpyNpns99oNmMnv6nCxo4HwM2jYME3nf4zcK4mv2DkeNq6n6e",
  "key1": "9CvpouXbvFMxpA6vRrGAhukFhnLLvB2LjSNpNjyDQJGw6RXR7RNTqkbfH3S9Xn1EzU3CnNSDXcdAYRnXrR6dK6N",
  "key2": "3Mz63J55mfmSY2nVy18DHKQWCu3fuwtUBbHMrZXgeikGatckw9TtXW8aiiJ6ZxktbNUHqawpLUqgWhjd8izh8ktz",
  "key3": "3ctpPs5gEASAmBWMdikBi1H6jbW5qHu9vCuGw9ERAc5p13y8sEXXcuPyciQqtYrxcpJ9do8feSKXEf1r1B8E9Pa2",
  "key4": "3t3YC4cCJjYohSaPyt2KUYpKVLezHcq3UZCJ4SemPKCiD1oaQHdavW9peCb16MMcRY5dPPzvZ1sgDWiXzHcHnYQV",
  "key5": "3p91CZFPfYidVHeRFzQinVHfLcD3RR81tT1NX7so42UDm5RJFu86Gn5z9kSVGrEL1aHCD5RbnHSdpvmGg4FzNfz8",
  "key6": "21munnEksNTZ9jyQcoZwaQoTKuNARLm3XsYD4T7qzBL9Cu3byC8QK8DbLLEtQeF6QeGPYAwytXDZtiZQy8zkAgBK",
  "key7": "vPKCC6VWq2V5oZYQmP6vTJpkAAnQJZVYJeKC1S2KS9SX41Sejc3XnBi4Qnet6LiB9K7py5Gzghkz1fMqbdkyqsa",
  "key8": "LJQtW4vDVKeaiNhWjbWJdkc3Y4xRGh5vjZ5KRmooxWG863UrnHcYcVVViAuoA53vK5rL8HiQd21zoeT6fd5h4m9",
  "key9": "2aPPdjdFwzYvzBM534Fesukr8PaPrb3wCpqWC4d8kqGGRd75o7LG5CA5XN9m9F7Fr1Gpe54KDM9aNtitXSn2wFdP",
  "key10": "4XSJW1NZhjRuon5vaVh5iJXZ2GWYYXBoyqcnA777V2sFo57XAEwFNVJMtRjHF6bbWTCiud1TpVzUAk8xXocvNZqL",
  "key11": "3HeDJdnCw4BN45Ensx6JTtrAQtNmtHHDWcEQX2tYECMZCmuHFXADAbut7B48hACssxxWL9m2CsTqaj5K9u1qzAam",
  "key12": "23JEBtzSa2r2mgzud1RT46Lnnt3H7Hwym4h3KMevnMxDtKzyzh72a1yY2aRTTmeUYJiUUQD9ECobj7QZm7sfFzdz",
  "key13": "5Pacm4tVDbeHU7uRedeSR4twz1KEop3L99p4Y1HaQGbU6ApbvksdjsfGFuw1Ax4fsoq2dMP4RzbS5bAf5gQt6A6o",
  "key14": "pX1nmstvm2SPU5mtn6qCsRm2nSoZh9s21Y4VkS8ArzA7XGtBEzNj4nkWT7XuTBaUF7JDsNPCdEizyx7AiM6iCiF",
  "key15": "5DjvnqbkwvxTyTb99yTebiCbAD9V5SuyM2iqboSXFmxZPCwsDGB57rqgKenUnmLhwJNpNvvtdGZMdHhDAR6bRhCG",
  "key16": "3YmVrMwuKygLA3ATnAAUa88cNqJHteYUoqwDPtpnT6Js5bAsEvvMhDWF75nCFvCiR2ib8v6z1ecsveXo8GyF9Qju",
  "key17": "ZEM75urtaLMPvKPo6KXsDYuGx9dyS2VFaTBo7hQgeoGSRRwrAYag1U5Qm8e75Bt1afLzYy2HCqsBo1NKP28JyvV",
  "key18": "5zxJU2CU23BfDrMwwGWP66w22eMHQLBrVFNJxWfdFypSca1mh9hR3g9it3LmzvnqWDBmX26rgxvmyWsYH55dXiiJ",
  "key19": "2ZdT1iFLVQ3gG2RqRe71ozUSMsAxRbUPzS6CvJEWfMH8yDUsv1JdL9M8ijF5eG4PUQib8cqDvagQLnaRdWbGxnmL",
  "key20": "2eyvbqPd3V5pw6x7xPKhNAdi61SLVwDsCYn3zywVCpF5ykvd7nLs8Ese1imoDKGqiMdcgRSduZLo98Qh5djJ6ceB",
  "key21": "5MMsoZT3ZPT8WJR3YCdUf16Z5zBWkBoZDnmu2kg5DUnVViy7JhiuKPnrvZGALwU1iW86pcWB1TA8BZnq7emPucF4",
  "key22": "5vEpjgySYVHDoEgfi4BDHKax1TWjQxz7DSWzJSqzYrx7UtuA2zHeC5DLCcyrqdunKFv3zX5hfit7omwgkktxdvc3",
  "key23": "44SoLXi46UhvKXe9Uky3yhjzkrG6fyFZQqGpKAg6FsCcigZ1hWnMc5CcbPThyiYEE1HxuRpby7uAVVRzFK5UFeRi",
  "key24": "4joDchqN9n8zMBHZLV3zzXgJybTghpexBitFg5y1ddFTB784sc9RmcxtU9E3R3K9d488SDz8fhVfhAUE8HmPRrgf",
  "key25": "3i8J3iiYqsBbefcPNCVe1Ezxi8PyeTHQAoPS6qe195uBsVFDYn3gSs7BzJEYL5nLVBkeF3Yqpe6xuZDVTQ1PEBcU",
  "key26": "333rtVUjp3aFm3aw2LfZ1ZnceDzxDYNHDfyXKxUGMTNwTqZ7kwLFrYMcEgsWSiMSnyU5ZBeE27tvaB7FBcuR3Emm",
  "key27": "Zr41oFx69GY7wSnzVzT4uTPfkQo5A6icXRyQA9Wtpf5EZDcarVidG6s7Q4yF1PCcPYHCe4sNBLtzwKCfswoSnrt",
  "key28": "4js4SY3PpeGvLw5n3phTaKW6Avi7i3yijRHkZ5ofxjjqr2qFZZE3nNEQfXaSF9ki9GRmV71ShqLmwj7nsS8Qfib"
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
