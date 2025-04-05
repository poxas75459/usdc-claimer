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
    "3hdf7yVxwMDByA5yHYnjRXmMyPteFTJDYjE8Qbwek7GQHChkGeWJqY8zvH5YAPf1nNWqT6ZHN9jAAHmzVAY7qPrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25gkg5kgGvqq7qHKs2E9qT7hp3NCmCAGri3XSY5eubD7CcxvAD9V7Antc62cZYGXTZ1LXvrzsV4Unu9FUqVnetGT",
  "key1": "5YeNi2EkJrf3ievEGuefuXsRaHKF673LTFnXjpaDCLK2bAys4u8HDoUkTq2PjTk3MHL6MeP1Kp8DK7xvY8ka2ZKT",
  "key2": "3N7NGgnG2UJSurLyxzPtNT75uQEAV8v25zyLWNFc8xfyEAuPAbuiUE5Rk7jFoVrTjnXSZPxu7djcsKqo4T6Ce5iP",
  "key3": "243KEfJdQVo7ds69ifVUCVTrRZ2hF7n1fu8vxz725qry8ujVLecU1uYPpcotY4mLbkHNCf6Ay6CWKq7xutiJ2qJV",
  "key4": "58KSVp9dNhNMjYgFicT5Rc5j7YrLA27g5eq7yPc9oMaR63TcQ9Ej1BBW5cqpS8xNCYgaFr9YxMpFKXjL4KMM5jBE",
  "key5": "4RzaYwnfJUcBdeGuFcu8TVtoqqyqkTBg3cFUnSK8DKy8ZPyNZMof6KndrdbmcbESHYvDLN7ShuMkvyk5LMGUFTrT",
  "key6": "4baDFaFE3Wyi2b1gBD6mG27oWn7oohrNYb5kzS8F55qpyLSHus3kmKWLA6roRxmTKYZN5rPwsqPCmpn4R2mEhbjV",
  "key7": "1KLfSVEaxvc8yJpY98o3HVP1CUBKfTPBHRWKKXC8TfXUUtsoNWXnaC7CJiesv35TWz6yQ3K9itMWyaSp2TVbR1b",
  "key8": "BUeuDmiK7GHqaTma3eNxEYWYBWXuiR2YfL4GhkXdF395guK5PDPUqoGtFQotgE81XPexgeBoP25zsKRmbuGrY2s",
  "key9": "4BDDhyo95nGNYfU2s1BmTZzML9cqAGPq5ddMcJ1yFppiMhrzCgDZrZ7QYK5UC7n4EjpYo5zVmGU7FzqNZCnAWfuX",
  "key10": "2moumdoxGSDzzdtbSDr5mk8V6oJsJrmi3Cv2sokoAYjEG8NR1gMBVvuSVgAzWhqNADnMcqCMUVcjbhatx24VRCTJ",
  "key11": "2aZ3EjxpsM8qBFCd4Hd15PQrDGC9JUzEMWBDUuUW2KTztQh843C16iVqSL8hrGEP46dVVECyMdrcPab835a942bP",
  "key12": "2duVRcVaLGygBVS9o9aki2AzSp7s9dwrCVvQ4KpfUJN8Qwv1DrPdmZ2ATWVPsvQh4HuQKFSv8YtvxBuj2un9K3A6",
  "key13": "28SjpEkh8h67nhetBDXZzUSQNsipjjKAPGSA3yxxfYUei3HhjVGntGBR61LE8bF5bRccoWZyTdE1zip3JPJqnz3U",
  "key14": "5yzE8kh8hiwykQGuMypnecUjjpxXByF6BL8JzKyo7BVN5adFiXjV2HKWSz26zyFvsCqnGHeoqmNJJaB73C7yRWMR",
  "key15": "4Bq1dLXCzQ5iDfF6soh4bGxE1wSiMdRyo8LzChYqowYWBPyo5K4kiTMXMDLfL6ZqSiF39L1iaLiLzcvq541YwbUc",
  "key16": "a75KxhMeM4Ya5Pa7ZBLi3cJkRjC9sKGRCQBKEQnx6CCKNuvgzD94ro9jSZXwSxNXgoBqZ4gHHrJL6JHbEWbzdfD",
  "key17": "5g6kEFvxUuNkkAUeZ4GSrBPSwK1ybhmz9PmCWXPRjQQcqQ2cLj2U9fbWjDYcYh4M1xn78XAW3Y3thaqFjJpmkwNa",
  "key18": "2VYBaS9HUgJnewrpeMUJUeXtDZ5fZFTW3eB7yRaPRrkRNhr3y2qDgKyHH7fJE1nBmuzFHZ53jt5dCtCBntZxukNg",
  "key19": "61EYGwcZFcEYv9A9vJhWvhRKEfVeKBWAq8uMZHSqauK5nCB1rcNLWuY7Wa6VC1ZKDNvtNmTC2QXvRFQANQP3CY9w",
  "key20": "4MBnCgu7YCfoMSFVDVpmSZ7175VAocVVb1B9EZZ9soWqNtJVwNUjWHLb3hpHMXsw67T8aQhF7tvqd6wSYe57oHcB",
  "key21": "5Wc8teHcW3UVfiV7T7fUb3CSD9cN4Rdamk8NiUcN1EhrDoQqwvBvhmnA59U7E3JDBtShg5Nforp8SbEGFQ3jBpUQ",
  "key22": "3NGcfrv65zyPCBJ4UYMgMzxtBgbjuVwBwCuxbBduZhAt8MetttM2aJbHSkvUARLsFNg29Hx8gpJyEoWicv4EcWxU",
  "key23": "349wz325ERohcUCcHk6GZngZHQJcANoeATjA2w6Z6GrPcW5nkbxeEtLvgwg51YrsdEuPd1rea26a1dqRq4Qn8HA8",
  "key24": "GFx56JVecERzq9p3Ks66Xw7pchw83o7opA64Bsf2DQRVwG691jr4dNMyqaHkpSUp2QcbYi9b9XcLk5um4bf8zC6",
  "key25": "3DzneaPxUBFkHWyoFComnmLwiKXfRzitgxUKgKptoyeHwZnnN9izibnsJ6NeoMqnsQWupYAVNQjtERMVN1EHjo2S",
  "key26": "9Yhm1i34jTgPV4B6e3LSRwmwZvLvPqcyyWEGwzfrSZtns5wy7N7L95BJYe7hBuSn4gPRhxrqqA9Ck7igS7c8xKP"
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
