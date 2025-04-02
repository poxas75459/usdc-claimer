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
    "2Zy53r8uXX1Ji5jnxnXJJznWMzMYocYYPrQ4ihTusxpb2w8d2F6FTjzYugyCvMLCptiqeojLmWh4SwMUdvR84z3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kFgTWj5EY6M5jsUv1XhqgWo6H3FZ59TjdpskxaHhWrZEU9pB7mWE3L3jxB885qxAkBt4dhjeUweAF4j3CZayYc1",
  "key1": "3hQiyP8C8tAs26cn7TBafXNS7KpPGFHuqp25M775R9YACvhGuwk3L3Hv6qtJkXDy9ZHwRvaqFGgBprVKosXYvUFY",
  "key2": "4ZGjBLhwRrZ1by9NSTvYW4bpX1cx2CHjcNqA9c2rBtzqwSgvyUQW4G6EGE2wFG4f3VHg68f3bmEu1NaYgPNPY7Ap",
  "key3": "54YZkQjohRXc5jXqc2c3b9SFqsUa7ELi47pdPfy5urTahZBdsrq2y3dsH5w7xXnoB2VraW9e6eoy1HvY9duzR7su",
  "key4": "5TkqMp2zVAw9H4Qhv1HYUnyjBpiNtBjtLpUe1AVp9V3qVPUeyucuBFUh8bYkBwKRY7sJyXf2K3rrMMYpAtinygJX",
  "key5": "2o4AxU59yVwuk4cPQuCXToWCjGYRb3tycwznxoWpztNdVxAcKx9qjCFVTTVMTGNGwW1mempscFT4NhmYBC8iKTSt",
  "key6": "2nJGH1iDCRYi3rC4iYqiRXRD8jrphCxK4tRKZpU6ksiSXFMrGpKq4T925iFtjNUYzgcDjAzv8QaC9vXq88eVAGh9",
  "key7": "2FbPV717in6t8eTkE9AMpGS4pDWwLJsqZLsgUQi36tbMLcHgF8u6TT3GLXrUXR9Gz9nRBZm886vxxHZUHup5snFE",
  "key8": "5TuMTyAq1AcFN7bc2BYnyw88oXVsKzSdYxVSWKQPd7FFLKnfLNXNWfaWPEqnPHrd2qir4nnLKQBJWhdKkbDVeh6n",
  "key9": "4N57EnPJRMtcYFgXJdQBpRsTz5TkeFsy3uzKorZF9Amp8W5TzSbW5KyRoPuBAHX592GHatgZ7nPgftuubmzvNX1A",
  "key10": "4vgP2TPXyuGPGe6owLESfZHmmnEzAHjEbUD8CWUoruFcsfavWasWitBtzwkLUCwsgv7BDgQKBZKaYoYbFnkJN9K3",
  "key11": "NyyiCjRRDHL3RzQktfRuih4thkqP1GThKurkj4AXWmhvoKKskrGc7CcHuZjUixocVH8UKnAZ8wWAj8wKAboo6wi",
  "key12": "3cAwnXeb36nmmeVuKdwXGk9LTwTDS1XSQ8skYrSZPks7Eab5NZjK1x2cRUR7bB5KcDxChJBFXyFgdAHJ5HJfPtuV",
  "key13": "67Dc66A8nnLi9QVfy93gxstSbGgpLHf6dtD2B24vp1LEJ39jn8VVUVT9mRsFmk1x128CHihX13KLtxWzRDn92NFJ",
  "key14": "5htowZBRwp562NDrozKCLFwaVmDk2UcbY764jBsVDKLQAP1GbbDM4wVTW28wsnwJMtuu4QcqipFxAW9TwZHE28NT",
  "key15": "46tB8uLqyaBWFeaM8SpirxYnmet8Gmqos3q1MJwxbpYm5E9UD9gbzNKPhbef8XHkSXFhqBzyzZhWhdUGThPr3j5h",
  "key16": "w2WSryjeUBun9jwbATHK4dxrfitzJSdN13gr5kAvHHyy7Hy7CpnH6dDneNZsGBnoY7rb1YKrmptL554KDZm3eNx",
  "key17": "PNB3U4ZPawRCDLhvziFhgxQffesdqzynVWdDBtC6PDUo4UBpggtwjRb1VRFZ8pHFxbAg5UXepYoi3vS3KwdAmP4",
  "key18": "4NXUJRX5LjLA2NCvFv8c4c22wn42HY6Qi7gfLSTxAapkjVGB1P4H6kSEYagmwrvdJ65ZXkoUqr2GX7jzFpaJDmku",
  "key19": "56XAVoMmNpLDotVMfV8VjFjaZXvtDYmkkovAhzMaewMqJAE667C2Zu7H2SM5xWzZXmu7o5RECf7r8Ei7NBczQkq8",
  "key20": "56G5UKgfZ7B4cqGmXa2yryMFihUGuoU4heYzDjM1pg1DRRTiEppTX5HF1VUeCz9cahLsrtXzzmFTEjKYx5vX3qxR",
  "key21": "4gA94mmxbag5dLEYL5UU5YNMTLCC2rhAiY9e4TrzWZk2VsGEqCRBpGWqtKKmpR3dWabMinaWp1m3HCiwVwgEqzn3",
  "key22": "5J44gGo2CJBZ5FnL8jhWT11zwbp7FTu7Xjs3qeoMyHykqLZY6izpDYMJo19RXx1w6EYcZs4o8vxN9D8xwtAZisXL",
  "key23": "uNK9y6QLijejH52s4xNBMMhNSwc2VpFXgMXhA9B4G5sfmTMHAog1ed4hcbL7Dcek5twbq9rTSvagYugQAhEYykz",
  "key24": "4tXmC2RWZQvsbHBQDf8w7jJWBphDgGTq7Vn4ZSkkRHkv3surziEqWQpViLrZ2raibCwNr3PWJSyjs1L5r8CMGrrx",
  "key25": "2qTNi63PHDcsgFzoiPotcWAJBs8MKTTecviN1fcx4V5QieDfJjZPuqFE8jD3QaKbEbPA8PBjEVGzHRTt7GdTt49K",
  "key26": "53337vNKVBSzvnxFE2STfcxVoXBzq5jkuXzDGqakWuQFUpHzcnqjSN4p8VfgKbV3pQEDiR45KUxk1YHa7jhju5fo",
  "key27": "1udpWac3VfmW6mwWE5F1HBPfzshEC6Ad1XpXaiCWAXzaNqaWzj2Da3ABx2EGLhQf8Gk7agj1Gke3CH9xyXjy7zL",
  "key28": "48gm19SJMGunZo9dvewqnar1p7hZDDHrFkgySiEJSvQapefQ2f4nXeiKroHpkrcVmCM4MTWHa8XLUPP25DPtZUCt",
  "key29": "NydXJUHqMqmvvruSWz7sKo2nbr3Wxq2H5EQMym6T1dXaf7DkGzKgXY1Hc2REMrurzMG9d7xz4nZRD5cb9evu1DQ",
  "key30": "BrL2m5PzLkvVizn4GSmxB4eueQ6DNSSoXRqpjf7sTcGNvCVsq4KXtyR88KzAydiTkHySEZoZCvCMVaiCvcNeR7m",
  "key31": "443ZZfko2TZNxdBDDJj5UXwgGYNuZxtfDEbaKWP5BCuKd321oE77LCKbwqcwPxT8GmuCaZnWKKPe2af1iqvjzFvp",
  "key32": "cCGvHwsGi2Rn6EmKp5TSLKKbp28SGGRgzvSm2kyaXZfDFFDWw4H8KVnTEaBzK5ofaBsCBzJxannitWv2j3kyDFg",
  "key33": "1Ks5x2JWTvEtnFv49Az1q8Y8FakVtiFV1XcnRpMxqMbCxchSHamn68Zyb9maS5RhySmwncqaJ8TCNKGX9Xc3mTB",
  "key34": "4nX1Nr9bSr2jyHGJXUX1YCUZJwtvkn5CeKrRigRWnmJNsCGdv8WVjnBFXaFukVgQbquyEqdjS2SQ2CcBxae18CWK",
  "key35": "2jkuv4GdsT81KumbUFuycx3g49EEa4gVm8Ed8DEup1HBAv38MzNwTmaEm7AkrHj2juyVVJAB2kcfPgSjqeAqxT8A",
  "key36": "3S6YNo8KkPzqsHUUJ1Fw2V19vgTs2YPWDsZrDbqCPG3Ra6J3Xf2WMXp26WHs8YcQetkvbA8C49ZHVw9aTub7WKsR"
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
