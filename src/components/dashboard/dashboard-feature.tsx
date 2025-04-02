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
    "2ScCGLytQ7Yn7DtHwuZ1EDTH5vG2K2mEKABySL2GJP8CyoZD476hkfrkFSp63edeEqC9b7GKxZGjcc79QrMccXDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UsY9BwwvTPBxVwyTULkm4fidChzuF3zHV2UF7u2ZKAPzqVuoF5vpeWwFqXsRbX3T9kn6tYubekwaQGjuUTebBpR",
  "key1": "W31EhhZP3pRS7LnyfJr8xTZj5XQrENr26sQ4p72V2jbYThduhyeaGo9FmH8zyTyGxKsvuV44hADJJd9izJ7r7AS",
  "key2": "4nLBVeJB9e6uK8g8kZCiAFmJkgshd4oYvF7i3Jw9VduNczQVdN2W5tNsRN1LSYDmzPt6a3aG2imCDUTM3eRFiVhW",
  "key3": "3F5kshnSecP3XQtAKiWtVwjXqYgx6xecfgyn9aUk7d5ZFcLL1yHrfrwJheV2sv2opdRzUGheFHFunmKym7MVngam",
  "key4": "izd5HbD2s7FH7notNPERFfTCwGBSDbPjnwSjeMNcVCccyk9Jw8ExUvFHwezhRyja9H7knVboHHGgEFmTQskWjvK",
  "key5": "5fkPhKKNb36sY9Lhs84mFXt8UxJ2ZrhP3NHo9Q4mXzWrXuknRGLJkaFh6EtpvwVoj66CeHBb4eWpTVeDM3SwoChB",
  "key6": "4TGYgdEMTzX7LeJCh4i5q6rMtT5w3eELKJ3DPqV1HaXrH1EDJkn4c4JrzTLyhwTcM6AmCkiwEYsKymM8T5uewASo",
  "key7": "4DWK73EAfe7H8Lghd8KB6J58fVWmaAVta7F5Zovb25s4sdqinLdZto5Po9QgZHwvqkzZKGUMks7QFh7CBFdFgFgo",
  "key8": "3FcvLVwoabXyZ2q24wxaPfuGMeBJKrTJmfyNn3H3h4MGhb16tVFBbNKvuvVCdF6LqQ1CxBjuLG5YJKYV4aZTyAyR",
  "key9": "5xtJeeVBfJ2eBD8DhEYWZUBM1B6aygwrjfFXd4fRNs1VwATSJUPFb72rQYcGxaodP7D1QJTaPqvroyuGCLGDC6C8",
  "key10": "TdNjdPGnJuxgDp9c5CE2MsvSsbn1JoamZvKbW1DHV1968X71pU5apU4FqkftNs6edXHjQUZZDQdrbZXLaBXtksE",
  "key11": "34bvsXb5Eo1LFmD18dYNoTXmC5fvNfuv18nRJYAss3tGYxf2NSxy7Uvyi8oJmWQQr2ZXDgVLGR9ADnaqUizhVLpK",
  "key12": "4tCJ5NXrzZJ4myPcsKikB2EpbK7xpWUGj63BwUYvNdag5i6TthoCYoaatsrEvFDR2wcr69RfM4C6pu4ALnJny1xv",
  "key13": "tggJuFL5eqj85cBVAbSQfbFryAebf8fr55hMfYmizvoHpqqNXtUNHNBPqJgfU8DxkStzMbgLbkZyKNigq93LeZB",
  "key14": "Ey3ncT8Z54nFAkzoESYWKzN3sYRcnBTAZ1N3MrMBTk7CvtvfvhvBF2Z9gg1BzZMB4T7Lpu23KMS5XBjcUSJa3c4",
  "key15": "64LF99DfMmUyLjTfnTqBMPkqDuv4RfUbXhx2MhNP7ZyUcn4bJmBxJPWtGSeSfAp7tF98uA6Vbs94roYiNa9YotDA",
  "key16": "3W43hF6rtr2memNEEKWeEA8W1gkytUPC3dbU2v7X4Zv6bd1MBsAoxdDm5S5dbufATMDtWiiLi4W8xHdiZh8rqYqX",
  "key17": "B3Sa1vWxiCJYbtEZR2wLvBG9exJjcS1uVu1PZkZajpnqJnbAuFemHe2DUbM9Gecm2Asw1TK4CqXCGyXktmHLZJ6",
  "key18": "c3aqRKUHssjtAvLjHm6caYB9rysJria2VCopkGXDtcjAnVpJvgprhDSX8nLVLQanjb4WPvs1EC2W3vPDFqwNAyk",
  "key19": "9wSkkF1kFvLxjtvpCUUtgHjesmwMCaq7ihJdWjc2XBZWBMGFBSrDanQyqmM9rCGBmrTd7mQR5uGHGQQQtJhzYYW",
  "key20": "4zWbtB7R8TeecqEb5eTXSx2EA7bwiwQLTVYDd1Z7PccisuBa1Htz53GV5PgSv8dC9syDWuFFpaAeJkdCVfSb6fD8",
  "key21": "3bUTAXmkjpVDpeUskFWdEEFwHmNfJx76CxvsFcCcP2kmmWePd5ZKGVEbAaR2zvzDrPoShCpx83vr6psJrUNkE1Ke",
  "key22": "5A3ZKyDL8Qp53JvgNC3BktQg4W5mnudpMDRRnxyYWZYHVyGU4PQWegLWvjZ7MpVCZgcTLrXrFarJZ3RdgvMXgaoA",
  "key23": "2EtPNDHLQ6PsFCqxyzrgo8R3q4yoeqCSb79GNojeEivF4xqsZdkTbgrXXCXBxLofU4WMdBJ6LDvhDC7a2U3xSuGh",
  "key24": "3gLYmc771bgiE6yV7cSne5DFeiEqAUxaPPxgAKboCYKW791eZjHzcthLk1cBrNStgHA2cVK97u3y3oyNF2JQ2375",
  "key25": "4vC4sD3Y1ioFfUABhB89neyZDsdkdBfYY1SsvsRNr6hRG96nS2QcVrtPquoTKxSpEo39y1HWSZX2PZcMi6jszxce",
  "key26": "4fmLBqJpPpjT8RvYEUWZbFr464WBTJBXKfXHYL94Nxva8zrjPiPrBM6tny7xkqyHyeJqeaBZ7RUYFf9VWq1CBmbU",
  "key27": "5oyJZpm1iE4tGpddc48fH3tzzftp4gCj39ADAx1LJ2QCev8hPYUDnNwX23Uq3SGcPSK9SFEKerAjQnZ4tLjAZWBK",
  "key28": "2u2AnPGtZuuS8EXUgPbBChKVx5qJH7TkndR6SxDawKuJ8w1Y4Li1m6rvRA4Xtf2caDBK5MRfvWrV3FXYvUZb3jdi",
  "key29": "okmz3rYQRMz3earFwLXJEZZ1TftHys8W3THgudAF65kV8Zn58vLBEip7zejmWtzK5xW8EAtFmi2ZToC4gmUvUi3",
  "key30": "61BefM2G8j6fLtqKUZHZcnyXhT1chp1fNsinN214FLUEhzwKefPqaArS8rSQE8AFMKrA8nvwD4FgB12fFnf7Px9K",
  "key31": "5CKyuTf6FBPzF92n5gSFH5ixpVYRGdxTU9vefWJPZrT1k2sVqapQmzSQPvKVjEZakdkcrMpXs77HE1LmSGy9qXf6",
  "key32": "5dFrmVP19mXNjGP2ngCPRoi7RaDDiapA2QuMdhwHQ1trNW5mTcwAC5XB1FHbHeLLcqCJA7MFgZNYXzhj1Kvfjgm3",
  "key33": "56gagL8QMsW6ytiMDL4YkQEQyfA79eB9hwNEbpg1znAyPDDcpJDqHJ93FwAZoU8YodnL9eRunNsBmcrwKs1ZWduq",
  "key34": "4ubET7pdPxtQmB3DxD3CZxLBGhqBugs8Up52SYYetvvyezYHr47TogBFEdPuHFPTLEVXkVVMKbYiJnGzTGkq3fCp",
  "key35": "CUYGg2mnn6VGuh8LdseunTzbVUpdMYtv8x4M9fGzAoCWxoGxk1uyF5ZDkbu1p9NxU1r9LpKhcNwHPBdS4sZoVHy",
  "key36": "46Vbkh2z7Fmi4p8Mu8ic6e7LG9RApX17rDpG4MrVcTbon4ZkG528oPA95kSP7afhti8jQEi7ht4kiZoHunyjRydy",
  "key37": "3yfUkNMWNN7Ek6KxFaewD24sfHjRZDVphX8HRCHdgfk6dM1LRZFud9rcMnG5ZRYdcaC1RxTD12N15G7g7MVnxJES",
  "key38": "3xbQDJrXY1KzbGWox1HEgx4ZDDj98AVKitsNoFusDdZbUvXzK8wE7Q3UTgRyHShNHcSMtz1i6tv5cFCGBWAVsCsH"
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
