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
    "3XYyc8dwAo8hmcpJv1of2bGr7RhQ627ERm5sTEemEAnFQekRAesEqV8KHYX1BuC6hjtbYjrya5dtc3EAUijSV36T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zcp7SqycnY8brnESyR1skJPYJUnoQEyLhzjuGpvuCmCet3suzqsaTxXUNmcrGy3kUmQKEqx2ijEZMLb3wdEfAzh",
  "key1": "44P1udRmqFNKphTU1uxRB4Yoc5FjcuKEnYKeaq98DNHgUReiQdmDc2T45ZfT6MAyPWUJkG96AXeU5oarko84UdxL",
  "key2": "3H2p3DehxBM4QxDaNaREtZy8k8RBLnyAHDs2cn5MWwkw7pLAmzB8GCge2CXTFekuKA4BdoLkV4S5PPeViJTsWTmj",
  "key3": "34KpZBLVdRbhjgmAG63d89x4MM5UnddQHvL994kgyYUZkKn3buEJiL3pHagpjswNcuouc6kmcHdxfvSLn3MH9epm",
  "key4": "4VaZjgEWBsmwmQMoP4bfvaZoSwZA2BrFh82shLfpsgDS851tmv21JiuCF7E6hBu8juyt5u31zDrWnL7HYQsDUrd5",
  "key5": "4UcaANAV5KsP9egDedsaBuJa84xmWwPwEa1CvyzvacdYpjYo4xzuyVUEKQUJyYmp84h5hCnLoxx4DuCtazWGwNPF",
  "key6": "bzmbgP1vW8uvq94Z9CSNj5ZXY98aMgjeJZKEjUjisCNT1WFfQj3has3U9skrf9LFNixncEz5ahaJniDJdppzaFk",
  "key7": "36Rmtc9dkLaWnFTb7nw7HfHn9otxzmBfR6yWCDjptYS8jNUbiKUUBREZQYZbCNUCZBeJe6bLBE2DcaJQwyJfzzgb",
  "key8": "4DmZz8EQxD6WQUJvzmQud6Pog2ZshM3B4YBgCojSHPRqX3zmRNLfV3MzwFBBnJHLooj1U7rnvP65zafgSNoSCQix",
  "key9": "2cXur1EW1D7K32ru89ndC4gNYhRdoJisHPbKsdgnikj56kKYXbrnUQqTyp4Hrz3qmWWZiN8cVFojD132Wa8TLYz1",
  "key10": "2anYmQC48jfyCgwyohHtEKZDzms8wZ6vesSPwRcQr2P38CxhL1eHLC45ZXMt5PrH16Jirb6eH1JqzJxmn5BnwBgF",
  "key11": "W83E9CKTZg3TkwSe9cRQgfLcfVqbkk6pNuEErGbiCfU5RFp3KEJTmspepjwJ9swVcWNfnZdzox1hLsF4yiGApkb",
  "key12": "3uQnZXLswm3eqJW4shWX4c7V9x5EgjErsRiECQcjjhCvoACc36JmoyuVySgKB383EDejdyVZdcK4tCYRcm1o7c4m",
  "key13": "3uMEZ1eZXtHE1XZrycH45HrA55zqKSbFk4f5pmYmr93Qg5p3xoGDExmS1NsgSSdL8fYtsiM7X6m6rJAXFxrjRfQD",
  "key14": "3EsVP9zsvwM5YPX68GJKXfEmbD9vqJV3GqSchnS3oceXsKyDgNhuRj22yXSYaTwdF3vXhm9Me7eiZgWGgXUoDcHB",
  "key15": "2Sjqysx8V4C6GaueWxWoGCYG5UgtjHMpJD2KXxVyetT4Uyx5t3BU1r75Xuur1heKPPgrt7H4z4qK7urZVS8BvWwE",
  "key16": "2BfULpFQbHdHGCeZLAEocwKdaiTeGRfjenBmKfL9nP3Ej5KTbk6j3oVR8pCLbJQtbc8Z917178jcwiha8APwmg9f",
  "key17": "41nSjFdcMWEttik2eTYhQV38X8RE9KxmL158r6Yx7sKLSzQJnEbAgnt8qHPWwy3wdrY3moL3ScZWqMeToNP2xopW",
  "key18": "VH5UBUpx9bqNVzgE9HqHG9sQtYDfJZ4W8JpbvfQZUiT2HwoDxjQ646EsoYDQ7cDsk37oBxZRrfATpVhqV7UuY7c",
  "key19": "FiD1aEtDkHthq8hrbgdgzq4LMJLfLePBRSvUqFcKAQCMzqQXNDuRgDtPzAbGV86o1gLWU6EzDnG4NqrpTKHcoiw",
  "key20": "5ijJ9fpoWhiLcX7dgdks8RZi7U2E3Feo6DAoWH8KdhTee9dFw58FsozJUAvbeakSNhKD6TVmNiBKa58rLwBwKZ64",
  "key21": "KmGK2nmMiw3qrUmhFyTzcXqmGmg1zKwUQSWbDVyG8iUECGBYSFQXQkZN65CZmg3mMD6jFiM4FuzQnru2j4NmAyv",
  "key22": "2K1H4gufkqf2Rf4jpjwSQ9AWRhTXFNoHyhktffUrEG4pauG21YhG9kewVhvoKrQPAsrZ9mxoYV3RTG8judfHNxGh",
  "key23": "rZMfMhhMpiVjAfs42UUoYRXNW9qVs4oBfZwW2ek3m6A1stMj9ST7JpCBTqLJMewQcnWSjHGiE8rcR9yeavgKVD7",
  "key24": "2DPMuxujhoSwHgwFQJ78SB1zMsA6vL2ZpcX4mRmAeVmfb8AmTtwo6GJ4fR9BTpB9KEppKGCPDqaQYmQoC3s3nTQc",
  "key25": "7BvgC18RnBtc6wNcurgSSY5VeP1CwBJzpKAkrfoVPUk2ReP7MCmK6qiqCNjXXz9WVhi66tiGUdBcv75TZzxsGVG",
  "key26": "3PtL5GSAg1kiEh8nc4P8xRNz7Uu82nXbHhTm3m6TBRft7EZn91EuPpZPbc6vsyr8yA4xPxFKW9wa1TuwD5iHyUwB",
  "key27": "4LWHJLtqvgUYm5EbbnNHXDZejACBnxD1Vj6VXdBBMiQdQc6FpipMGAVEgQj6WrTSkxBBskHSYqTPYhm8oGZzE9uq",
  "key28": "3sZJJ9fQyaSEzA7Ybr4dHEPBJYPoKNRDnazeJNdkYp7gWcak68pZKga2Mb96uTFtbq7c7LEytfWYyhYFNGbrr3SL",
  "key29": "44bhn8anh6Yt1N3UxGSA8uzgPt2cKK87UcfSWrXtXjsGTBw4GtSVRwY6nK4vaLFpqnDQvwWVHL4P93xNE3ifhUAD",
  "key30": "5Hwa82n8mTSAnuiafXjqBG7i7Ewuy4z3jBQe2xmtCVYnejfaejcRzDPFRSSdNhoBifDDATHsns8uSvyDSbsT6cvV",
  "key31": "25MQRfAwNjiqaLzos8kq5fpdQoY9n7v8gRCzC4VqwSuLR1FXdVDPm54HkCvq3qcot9tZb23f4L8ECWEwm9DNRP8Q",
  "key32": "5D7Jx4ds5wcqPK5CX8kUTk2ybXm4NALiAwf8Q968v2THi6R71w3vXDYuoVN8FF36XV2GwSXaDwHpA7wZZwV4CzrH",
  "key33": "mt1mr7MT9jwqGV2uH3N8SndFoVf4xnsCGsgf7xKxH5ePLg7XGx9gjJYDy67f5E77iMvwZnMAEyfzZiMNtnunw1S",
  "key34": "GkGYhhJcfNfB5GJ3f7TFmSkyZDSAbmpN3jjicankeuRoQQSjSjMeGbkqKg6dranFdfSVLWWwuZj451KXRrDd7Tp",
  "key35": "2EAMqWALCVGqBHu9LjdioCyTBe2uWhE96zj69PSS3TZqDLy5rHKdYPenNjxCCbN29kFA2ziTYjUgBiYywPi8NYgn",
  "key36": "4YxUHJvQxG2WhvJbomsY4DAE5nchJYc3fAcp7QiPvMwzQrkJVc8RPymUFM8huk6nSrHrvEeXoKuZxNUr1iJKjZ1F",
  "key37": "reqHt6srySCrkhoH8UJp83KgKgbzjzYquiW28PbPRGBZfRGJBxfCkhRpeY7Xn1CMtJe5Bd5w26NHvkKRqvuxFjP",
  "key38": "5Lq7eJq8msuPcTbB7FH2Vknyzewvqy6Ks7w8X2svPto1eENTnVjtk7FHiu68Fh63D4cSpkKDAVhToeVEKt5j2x1y"
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
