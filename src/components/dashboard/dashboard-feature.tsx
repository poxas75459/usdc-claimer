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
    "2gJWmGMqmMEGAcTWGdvGQyVfP9Km7t5eDK3fHDQS7e4arqspWuhZwNUrG55Gu4qfoE6zYtPzqkMf96cY68Lbid6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cePX68Eyb2ePPns2xneYvrrvnA97WTa8rUMAc6HL8pqZ15H5cjVWrCj4Y2XKJGEBzhxwhq3UsYgHcTYWAM3BE7M",
  "key1": "bR1Z3dfKEJNu3DB7ummjQs4fWT3AkrFKmQ5Xowdfc4ZhUESCNrBjR2rq5HNmyTcxcsa8qFt3ibfz3vKnJQjfzPV",
  "key2": "66i8uCC3E3E1n4ptW2reNvyCKFhzrw9mMPLcbeVmrqUgtsAVfE1VBQVS7bycCAuSHhUgC3gpQRP3mcj9obkXrfRL",
  "key3": "259Hib5R6qv2DATDetoJazyPbBPEyWJDewqB4SdWgP49jAuAqpyMZfqCwnVVamcbHXTdySbStjZVpfVu2weW82U3",
  "key4": "22skvB7uXoCWUyussB2H6JkTziNNBUUBTsnz76zmiFM7nbYAdaPZ8G4dH9FQmxsCnpdHdCmdWoNzU334RShaD9fw",
  "key5": "2qGwiyZ7PtHDRxgdEpyrdn6mq5zcAcFMaHGiQ2RLpH7TBJ9aMQV96oAVRZCwBfM6nNCJ82Hx2Nr3AZxkd5S4W7yY",
  "key6": "ULbEoKbXv8emKh8X8T1chB3pMGFG13BRPmjDmHswWi7fBxzpHAkEDCucZjH9di1H93iCSfkjiJwqgCfEN3gZCfL",
  "key7": "5guZpgpQ5MboTcvezjtgjdU27cYs47wGdZ2EG7SJjEJxSopJ47MUiPUxQq3euqrY4stnTcUBunzov47tL4oR5L6P",
  "key8": "23Yn8831kgR4pNj3kvu44DkigikKfzggS1fqFBWktR9bwNmuyc4MPUEtGo3KAmDvTkMHBhmeDSTMY5BhztapvRsP",
  "key9": "4GCEbhxynubB3SVv2ysFUzedmbdVSCMpgDzpj48pFRs7JEU9QvPxiY3RknMhjHbXDf3et88YZZC9iwx2qxXxJZHh",
  "key10": "32MixuVbDjKn1n3H4YfxiZnX67eNFs4WmVnf216Vbr5hGGN1YnsKKRguZb699SsswTimbudxhmVpnzpN8dJMp2ii",
  "key11": "5AbrSZf25xAbEimXuw2in1WbZcYd9iPKCfqS421JeqvF4nD9AhKvAwTLHYfRZHBfWBmoZMFXiuVy2enTxC5DNtpZ",
  "key12": "3DoNshgwG8A5krTS8G28coydCkq6Ujsn9r3RGQ4oZPbm1C3ZpYKkcCrRddWuoSztR5nQ9dr9csGyuFubc2KfpkSc",
  "key13": "4uDBNRKwL1AzMwJ6DbWMeYXmYnp2wiFQhPdjaJi9n79oMcAdsva7Rtvn1kRuRq8f2HCZEZekgRBAiCSyExHGN2We",
  "key14": "5KwsQNMXmK3jK7NYkJo4aKdXZWHSTnQqFwRN2Rk5Fkz8vWsjodCGMcMVQhJUSxLp3m512aCCSeTCtS5iaiu5p5t5",
  "key15": "sTkKmBn5iNMtnwQaUafyLxH8pmdtuoypCAB3oxYq9QoSB183aVytWjrMvaxxpddRkKPAZx6SqmNAbKooMNGTEgZ",
  "key16": "2X5CuhaZn4KfgpPzJGxipeoY7v6dW2LjngAznp7L57AUbGrMfFqhFr1V8NwhNx5foq3bNPLn8M2ivDBj4bBjzjiQ",
  "key17": "2BNwFWNxSzbwn4X96FBRZCqhPiJBFdcbTiiFVDvnPbuFRkLcGPGx5uJzmm2rfZjcpzYoGqGuS2STPC4RoJo5YhFv",
  "key18": "2PFeByPKBHrsrxikf6KNepYJxHjM1bv7bT64FPjU78C7D8gZ1QgCixvhMHGDA6dgJbnKY7WN5grYfFtG1qExdq9x",
  "key19": "42jhGEac4cF4WumtCQC3jDsH8zX3EcjziVFcsUQKby1hVCdNMmCTVAsgMDSK3jWxF6YkeUyeJ4yGTK3eCv99sfzB",
  "key20": "4LCtNYPwQGJvZ5J5ANDgincr45EwA51HdyKnkGBVHEeSBfCF9C5yLRAXRPpMRjpDMAsrDnbNuhQS1ZRB8JHPLq7C",
  "key21": "2srJjL6ZRyckjBqzk2x5LeTzJTGanaat7EfwoHwQBPWmVSU1R68x69YVg3QUsDW98brazDkyL5duY23x5bVVpWkz",
  "key22": "4EDXCAsecGDQhrNueBmk7vDpogcWhiWoGK93KRhTYvmwK8QViRtcJsNJwJG39p6sdkrGBBjuiuHXtyifJUqfAMW7",
  "key23": "3x4hsEzXZmeRnGpSUQPos2BqafBFStFkbCAtTkdT5mnDcxDdkF6QqdEDTMSgCofGhLnSTPWo7ABNTcj2pK5Qdiyz",
  "key24": "5gMxQohLkVf2w8dnHbB383M22JHNKK9YzLWRU8xg5AoE9vKRTPf7NBcP1ebQmdGhfUUv4nkUUL2ZJHboULPnry9h",
  "key25": "UvtsfgDbmCeopD48PvM5nHfkcMWTZtojFMLSpzNKJrKinDnFrJCF9M2EKhZ2fagGUqEpvyzR1TXGesniPGaQGjH",
  "key26": "2jVDpWhhFgiT1DWRC3zybFjKebo2wUfz5chqkaCYeN867Uvbho6WD4jofY3RCFHCbQbeRg3AE5Y5yC4zM7c7NKi7",
  "key27": "3RXsnU6CgUzu3AxfVtMP5EEwUcT5cYaesg4KWTThZZPeJqsaG5s8CEu3VfU2JupYCN6QWtJfBerMXk6JsUdDrvkz",
  "key28": "5En3Sj9zyZseR6UagDFxBiLJC8ovSpDbr7ejvddon8tuBygcd1mL4Py8GC1fjW2iHNhCehdTNDPDFgJEaSfG5N4",
  "key29": "3H16831kqHdo59Siti9dwqyf9Cxv5oU3pj3SxJmA2axzmq3StZiG8oSPVFuJtjgAeFpufkDRvcsuaDfHC7MAY7Fv",
  "key30": "4HsGGBgC4Va8XUepeUBdRRMfbbLtedHf9ZynnjTaidjuMdeBFhdrZ2S56PghWd8YuBJf7rHFLAT7NY5rkYzPFe1q",
  "key31": "52W1o8nykyfLJEyLVcARmTLVhhFtr883A7mdLU2H1f1ftncXXD7oqNsMFE5hP5b4XScV9A6ZdgtSiJSktySHaavo",
  "key32": "22Y9Wg3s8UHTsD97y63smPs3PHHaZTXp8FPYSNKcmCi7kjMmNpr9BKJihBBqJr8r9fDNuu7kci4jYdsxA4zHZKry",
  "key33": "2iaCX75YbBWHvBgvSM6LrJVLtoxzRAa9a5bDwZx8m2eEVZRLvPZ2Zw3A4zr2qhn3zmuVUqz3oV4c62UPY6BsQaGR",
  "key34": "51jNu8bRDvgAAcMbBDhz8h5bBExM5QQTs6aeT4ReTRaGeRUKpDwyRqsfkYAucKrxVrMSVR7wkEBXyS3mzBwcgoWH",
  "key35": "4UNYDviSXUTAkgYuJQwTSqYmyyqrBC97BGNUP2nJob4H4ZAMoqfDCMy2wChvWkKNeRN6jWmGmqPpxjjziA5fEMdq",
  "key36": "37P3ChAUUJFkCEVxetpX5kF2oN76fsMjgBfpyopyhcy2D5e5gFZdRNDvJdJfPVim9zQYP1vyyLKyxMvVokRd58h1",
  "key37": "5kNdLWHNG1VpZ7YkiXirWw1EH3rvLSRZwMfWQEFYEryzGFQ1VjCgVCKaKM8a4LAqoL3LKHt7GxTxMTq7iMWjVDXn",
  "key38": "4YzdkFh9AdejfD4AUBYdQ4xTnQbz2mJdLUfVNpeyvSDf6MHPuZeZdrvjJdyzuYrLQnXYEBRSrzcFP3UsaLzsrDFC",
  "key39": "24xr2pb7feyMsYGQrx1mLscrakRdq8nVdtTuVQqCFjVa3MKGpREWSgSHvpttXsq13waDv7K5GLRNWf96vjmjmAS5",
  "key40": "2Kp4Y2tzbKxrqSZpL8wLBbxLzJwcyjs7ajqRdkMgyvF5FBMqsqaoVgTYMqcsL1TJZ1AEfgnChDTQC7RWhS7jCHjY"
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
