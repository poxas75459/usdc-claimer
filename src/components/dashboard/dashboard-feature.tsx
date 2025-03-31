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
    "3sB3SHCFxCSvosHedmNAATb6KbLUKhNMP4mxnbk9b8fwqaRHCWagG2FAye42ZXcYDhC5AnE6ijSACrVZS9fQHhnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zeGEdwW7PALztT1GiP7pB9PNq4TwKuJvWVqaa5gGg6REjRZvKSqFXKMctkppWiVBhy7YdpUYxMrMWUKbxVJfQkC",
  "key1": "2nWGjXHy42bqywYvUCaGT6pTrinWwVxF2dgQwZwSPiip67rU7NHQFc7eTx9Ljo52shDzGTW2P4fenxBRZEG1xELh",
  "key2": "2qoV44qP8MswsCGQc4Edtn5oggkPgPga5X5rLaRFwvxFMPD9KS16SUF54WUE89MYcN42ycYaAPyUZYXB7XLmkq4K",
  "key3": "2DXwvpsw9ZP6FYDSUr2VRiHdzkNMq44NGk9cJyYBxSCDW5pzLNJRWahFL5vmqWh6rj1SkLdFs34W6wL19fCnVTmb",
  "key4": "4b4S73w1mJFGigMYZk9qmzMdfe2DjgDcsboqcakCWJYbnFd5u3q2YhxNTZwyp8QyttYsj7RHC6G3d5HP8SWYapVJ",
  "key5": "4WsjwxobhXLVpkXqpnHfoNJkNSnky3y5KB5HtVQTjCqJrHveunAkny5sUM8K7UCo13MU743zP6n22chfCS3B6cUV",
  "key6": "59wV7XWwi8aV4VPuqgWPmuNoYnejyT93Ed82vtDhxuEqzCUYqLWb2yR7bHARGQTxz8HT9yhBJbtfCh88Vi91gDs2",
  "key7": "4CvuT94znFy5BFvVpqMt2HBTQUjMcfXAhc6qYJxjFWMXT2Fxr6UK2HazCRNP2d9d8SkHwjAvnUSFgd3c3VFYT7TU",
  "key8": "5dmR4Dng9EQhcP2j1tyfEUvpzeV3ZEqtYD8U5fJcTz5UoqBrpYJk1vq9gVKCnJjFvoetsKmaYJ4P4sJLLPEMqLJx",
  "key9": "3vRfKugL7nrxHSgqjyZBVgKkfy7k3CKiaffMV2j3fSGY1ZCKQEWRsuNq6n4WDuFNoAaW2L6kq9CopuVFdbHJ8vfp",
  "key10": "2BJ8QZ7wRwMJRKY25xK6u1DF87PMNKFbUpcG82iVUsKo4oVBWYKHgQP1AnbTRiKP3coTYBFuzrwBP75nyN9TPbk8",
  "key11": "3p7TYh9nCGonXkMDUVsy3bqnFej2pPyRuGzEWJfZT6198nyUQDEJpDNLXc5MPm8hvdSM3Tu6jmSLULnduUMLdx2y",
  "key12": "54xCjNNjJ2DEUZ7fPgiASxU3KYrgznWbNqADWT8mcPWbvSVZGXMgRtqvoB3uK4tZfVufcdHH6P7W7Vf29WeVoXGd",
  "key13": "5zCmZFBDzwUwG7jZV8r92mcyvoQ4wpaGbrEZkKRGBrniss54M2HaDvH9G8R39vRwerVVY46Wm8tnwH5vwRStFA7o",
  "key14": "4cTuwPZh8boc4vnZpays5m98NNhBtsV75sfpAzG9xq42HVnQRuBHFVtC1vTaYx47SSTsySh2vedSrgHieC1bnRoz",
  "key15": "7yoFG54vuqm7Fz4KGNyXsFJ9H312aGEVEicMEq7WPGwXiAC15d2ti7NJX2PxSDifRgdrNdm6s55ybr7gMy436hm",
  "key16": "4Yw9fp4xMhzsm9DS1vyigUgPcoKRDHoHBx6ibUJKeUgS3KZTgG5ezrv4wtnpLmAabja9T1pFe4Dzq26gh4kYFW7e",
  "key17": "2tpAf7BAjZawLo3hk9uU44Jozg63BF1s73u4E2NDygVD4VVyx1Cq5Wp5e7VMRzif7cD2KD7CQ7nNr8d6zKLv46hP",
  "key18": "JBAnePsAvvvSYbRerRSa742eRrXn5G5QpCiuHEuYxQmjTae5R7rmHNWPvuyoejbL21Qibwqncfnyk12nQ7HQnLA",
  "key19": "b7EfSqrZ7Kk4s4UBTzwQ3GjWiP8GY57Up635YwKM3QCShybL3VxAoq1R4CGXkGdjdSDW8fqJ7f7T2J4HVPM4VFf",
  "key20": "qiAPicBAxSPoi4GowfS8xLsRioNK9drL1VpeQaBPb8u6H7ejqDC4y5J4PeQY2bSR476FUtt6YSgHJUMJWc9NBss",
  "key21": "aaKdcwvWf3ao613tWdyGXhHy2xfZcxNo7FS5nCGvCrRrdHtUz49RE4JGeoMryXLssEuas6WzToQM5ipNWmntDk3",
  "key22": "25Uz4BmEUJedvN6SZXdndK6oz6tvFZYtwe4r4nCm4DdFcmy1re5FL15cEmBiveLh3E8788Zwzsr6FjfsUaPaj5DA",
  "key23": "bAcLKgvA8B8UCbhDf3Uyzqu8pmvmTrco93Tgpk5xgtjurLYfGZZg57RstNhBjGVm49u7itTGbMBwz7TPKccutuJ",
  "key24": "4gMg63H5fPCv64HSKxwuT652VMFHoPmr6UioBFLFpy64Zhp71d3uH1UBNibBLXjnZy9zvXsn7JyYW6Brrrymy6jL",
  "key25": "3pNjX9ht1SS7tKNbpGs6YWc5SE4jRyrhxym9kgaCVkdpkuBXbwiryFitbmdcFcZ26jMu1iCSMGWiS8737x7pxQ5d",
  "key26": "v35WF1ieT6dbfvZxw1LymjxzLd7Ka1py1zptRqYA8oNDrGnQuHG43Vm9kXXLP1CurEkSqEZejd4ZeRQxYfFzSpL",
  "key27": "2tAUVouPiTstuTtYsN42pK3q94AP26MmxguYGY1WFjoHf5a9wZRsMPRKgW7Qj38x56v4i6yFnDkNq9mS4D6WAUxQ",
  "key28": "61k9SYpbg9m7r5e92ZsLSnU5uXM95a2UDiRhYzhqYXFZvwKYcN65HUXjris7wBzKQz7CQbLcKVG9muxzsQ1kd3Pd",
  "key29": "4jn8X7ydsfVLNeNJwxamWQkownW6D9ddoCA2aBcpFET5GUk7f88AvFMVjTHMKKDTsVZT7gPBfJmCiJJZe2SKUVqZ",
  "key30": "5dgEtp1do62abNjRTW4sYTZTGva8BzSFghyeyLHNEGwBfJ2bD4VkH6JYnAhCJ4e7efL8tM3LAfLhyPBatoJuw4Rc",
  "key31": "5uGiWwy9wXsfa7b2ub1ieZwNme1otDzkAwHiVHahFoR5humCANCDcBFNvkbb3MnGL3um2VPkSwATMHdCPtsc2nJo",
  "key32": "cRnDt9QcKNzMjBtXNJkMrVhAZHNj1qnk1qTV9vzh84SJdRVozJZhUejQ4Q9vzGk9pDacRmP9wSjhd5tZqTm2Jyj",
  "key33": "2L34yMykLJ2yoXam1EHMSveVrj73C8jKH4ZWmiKjaUEF8vxLZnhpZR4V9iQYUGk8RcR99zDssvt3DzqBLndc5EHN",
  "key34": "jqLHKhudBB8iqgPhBGspDLA6zLkoErJSQ6kJhPLA68Zhbs4fSjpin7ks93ENCjjnUedFwTikHfp1Go4u2MHMR67",
  "key35": "5wcJTXtHCoD93VqYRLZxFwiHroxKqZnvh77fVMbZN9vqHKVSuUJFZC6j7ewP9sSYASDvMUgv1gRTPan5FAuyJ1aD",
  "key36": "5ByWNrmBsz16bxyX8iXbaSADQuLTTouN8jodEs2rrQnuWiCVmSrAMbMAjvoQ4BeQga77i3uTWND1cFXpDAwaVptq",
  "key37": "5NfY4MSg1p2rcLtiy3DtyExHo5qnZ7v1A8qVRvE52NbuvUrxoxjVYDvKKaTpyewf5PHVVAiqLTu2sLhm1d3WgJe9",
  "key38": "37hqC62DQYxT9qYKwbtfhFChUQYAafQfGAsSoyo3Nbf2ervqEZ2rVcjbezZUmCyty1HXFA97NCaDJWgvrCj4Mu26",
  "key39": "2Fwk4yDzAWBzkrnHaJG4xgAHfxXZvrLooTYLcJTN2VvxM843ZNFNFfQNctyLUmik1u829njXkNo9kvzrBxvQSV6k"
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
