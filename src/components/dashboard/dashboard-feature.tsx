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
    "44Unpwv32xEX9DkHDtZbBXAtAYpSNUin4tdqoCMTudWrPqUGr4WPBiahTwzpAjmz2M5xb6hWLyXWByc19SRGM1R1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sU4gv15v1z5UJCFJvSmEUAZGKfKMqmig18Fim1G2PnbhhPDWizwk5nPekiNXQNNNnjEHDjh8AkStfuT7AdrUXHA",
  "key1": "2e27uac4uFQXRa1LJteaXyBt5jbqm8gDuLx5XVmbFNXz3ocCikG2yTqEwGoFPtWfEsZe5zxEh62u3ZYQTsC89xie",
  "key2": "4sN5ndon7rkBotxf9C68LWYXBVQfBTXfyNJ6p1Qk3ddryrnABHoFRfQjkAawAKpJbSqs2QavMmZSEV6YABphSkdk",
  "key3": "5oi9W8vKESPMPLwtEQiZd7kixhjcwwaDAGm15LgqkJUdvx8gGqR8P5tqATQMNSZeLqgvnHzLReqLZQW7LYPc6pow",
  "key4": "GmosHTkYXVhUPMSmpSLv5wCAw1rE3saRSczSidpZQBJXasS5t6uRcc43gehtf2BXJNrdE84FLfNTQuESDtXzk7E",
  "key5": "5G4d59Gtwb1wQcugQbBUmERW3WB4jQyLSQZxNzuFptxZAXWns4tzuJsWoHcsNMCywD7ah4QJnuPukLcTSt2eXGXW",
  "key6": "3x8oVUFbHwKKF1YbBToJBG8dpRejUeKqRqQfdghEb5sNDUz1J9TtxwPJ1pNM5tEdTBYLZCwZh6ceKmAfYQUbge9B",
  "key7": "3S1LVHmqrYq64sWAfLuHrxwdNKYw79fbHfhojMUfKt8cqftV9jWvhyp3Ed8qmJzkoteNE6jPbmEPmzqUJUPC21GH",
  "key8": "igKVmERrz89Y3ZQ4Quu1ysnVafHF2zrxrTMp1TxFdzBnPMiswnxigdJshipZb6dMxJLim9JUmVo4fPwM1KwnCDT",
  "key9": "cXgXVqEQ6hecYzje22w3LNAep1RzGjfMMn5Vvu5FVAUvoLphHu3knuoJh1gKeGtu5ZSbMbrkuEW3eLjvK5dWBLw",
  "key10": "3DozsRb5evhtdrRfy4Edq4DLGDXDFmaNUG7uDug4AYGDEy1LHgCnZvSEagRoSo84owmu1vFECy6Pc5QWQLBS8o72",
  "key11": "3GxLwL2wVF5dWYzhpFLxuwgu5r2dis1M2VqoLWYGZbftCwMHJh5XJeo3YhtCycJ9iKBg9MQihsbXHHLhx3iHuXHE",
  "key12": "2MqvkNdkpxp7Pt1CSejsJytTmJAacxGcU1pvnUQ4yr3UefTPKeSfv5Qvovzd18EU3fRVDkpc4civz5PAmhjHxgYU",
  "key13": "4CjN9BhAw4QVqjNoN6dszYVCnowq4SoSkatkbBhhwEGHUY3HPvSZUCU6q4FgJzn5qKsizTxT9uWnt1D4KkoHPpwN",
  "key14": "5GcpESJQKbXf4nXHntK36y3Gkrf9wu2ktaHF33ruDKPhQ6PPT9ucQRfqC2cPkYhzrtYSHucwwzGeGknzgWAPaXgL",
  "key15": "5w3MGbCCp9jukG7bAjf68ECcTwUDyHGrn32xmeGfhFmuHUGNPfY6F7yqcS4Vr3x5xQn2cN1ouEEgmrcGmhyYBT5U",
  "key16": "2Zbc6zRMCeVhmpod46m6anWXUTNp9KkNBjgK79MVFkj5oLHkkTuxQJx4tgTN4eLtchys5NpK3Gr6y793X471NJrx",
  "key17": "BZLMKGieL1T6zEv2uHqs9LSVWn7C3JaWWwczRNHe5ktvjk5QB2dx2gk13E9WghDMUHR9fw6dDHMKncJFhBpCVUv",
  "key18": "391622ckug3X27xnbZsCx6tkebXLeJpP3hSdtd42rnL16nPRhdKZBDCVhdMvzTsNAZxFK7xHNVjKj6fVxUWd2BF1",
  "key19": "4Bc4gMXdWUMSLrQNenrg9Jrns2mBSpaFWNuvHCxedq4RRDV64RmdmZPvEUm1PcSCkZrxB912AoC9BNMq5waoBNzD",
  "key20": "4brZPSYBitTtpsE8MWqjmJpfq6c1r9RtccFSZnqtDp1Wi3ovwaTwvnSLBRtG5feP6BVNGRaEfLWwXoeetq4fLAwQ",
  "key21": "554zvDeUFVB9bkeRNEHpa3eHgFgfcaXYaviReNFKE2TvCk45srkuuhdCyjqQavK1XbbvyVyszmiJYposUYj5WfL7",
  "key22": "4ztsoP8ofA4xzMYFNxG9WmjVSwWjt1vgK2unvLPkoYTbhjWM11TA8MCvfxmriTQKXq8oq4aoNm3ZsGYw4vxpXXNV",
  "key23": "2QCSKdiGiWXgrZXkGyvn1BjWyLTThr27EnUVKNfWuqWHxHjEVtuhs3jqMmJPMg8dF3GBenymZVRz6MFDPvxXThDm",
  "key24": "3WnYLTwPfp2MoXR8K15qwBFo3pzwL1xZ63MxXq3AoZyUdkWHfUQajV7wX1MU2B96FpJzJhPLbxSKabkRX76Ba81e",
  "key25": "5E83hL7triN2EuT369SSCXyYUF1ef3RRdxvKMmXcERvo6b46RiKQuQkihN2hMuZpZUofALGNfFtH4qEYAF1f1rJy",
  "key26": "3VWfR7WYX6KGCnbHzi3AGsT7AjEogB3XJsvbtYQq6AYC7JEckMbg1kgZmJa7ttnX8JTGaTpUdsTpHAS2nUEG172L",
  "key27": "f5nBeiJBxA4FEznipF17SC41nDYKnoBR8kaXuL8q6VWj9dV7SqgxcHprvYXUZ5TuxK9R65ycBmk3WpbQVehB7b4",
  "key28": "2iTETD9ZotgVszjwPQqSzUDRDcCtEhFeFZsQW49zWDZvXVqfmCmSet6CznXuT1Mj5EowsEowVVUEPxgTokowy5D8",
  "key29": "4Rspgf1JbMUwNFDG1zDNEAXgBA2FykRQtaq1eexZsyeRwC7eSuPL43kXCKjAP9nQ5NeehhbtqXdrxhZgpEVF7uAD",
  "key30": "5gcYYysiLW3HzkQPJ8oN1S4uxPHPjDBSesFmKgTUc9nobnJVKEsHRpRkTAQcnnXnUg9MhLiomH89ja4MW3Ac29on",
  "key31": "54tPuuSUmZfXagCHcuXCYBn23RyimuqQ1J5aqJAqRmh75ZBbtqAKmZNnCt3D13VkVoWe5stTyAPtMvih5QrpxHn",
  "key32": "4iCowQZXNQuFkncDqYtX1rZ7NQJesug3X36X5u5vtaNLmratsDF9CiPCecWZCJVG7b4gL2CB1Ku4dRAN68U8PCrR"
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
