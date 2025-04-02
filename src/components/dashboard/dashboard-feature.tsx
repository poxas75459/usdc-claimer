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
    "2k95rSEwkDRxK4cfyUf5bBV9xnfB7ctUYJPxCpKy9aJoJC5Ge4uB3YJNiYxYE1rT1vb1wC1xxeJQPWcwbVcbC9xQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DtmhBDMTHg7yy4kmaif6jXpPgGbYCtfdXerqBQi23Kv2z4toEpJVThQcHN6AmZFhRumCKZFyqV4A1tPZCF2M11Q",
  "key1": "34HpqjChmWo9VwrP18gVzhak56hXbkCZo757PghUy9e8Punbvi1Kuat1iWxYnobHzBt9NSV5q6bbHJMkAUWSx3eg",
  "key2": "4qJDgaVKuRw82FM4h2oJ6EwGVz7yXZevTbgf4X8LjT9hfChCrWTNNCbx5nGitPR48HByTWWnzr1ShPPxQzT3WSeN",
  "key3": "ss94vmu9Li7tR5HU3ZDRrNyNjzVC5RiBPgMQNCDomqWh2wLzgdy46LCEiJefhBduTmyy6gzhvJTQJ5MK8UjZApv",
  "key4": "Qgbo9QF44dL4hNQmSGk5AMnNmqGFga4Q1BB7e5JZ3Wizoni1w25etKe2QLrHiWy4TTjny5mNL17vuTTmpN1nwpJ",
  "key5": "4k4rYmtPND4AJuDSznqNu71Enoy3s47PRTvMDfNZBqUzpGioTWLyRpGzLDSPAdqCBLDe27jHHmfm9QC2SsfQA4jz",
  "key6": "3XL6poSvg1SZhR1ZjGwD8EFmDWxHzxd1cFbExddmNKadsSajxoHav2DieDjYwVVA2rKtF2TtJv7ncmiZNghHpyXh",
  "key7": "5EKtxYQcfN4AUsN2x2ZmkPwdFFroD6qxMNg26s6Jt4XusenKUC9WXqVcCGZaiarn1QANvJNhmoWWjThc3VJUz4pa",
  "key8": "2y7K4Bcui3XrxipC8rnBCAB7FgSBhuCnjAwJ5JYyWbUqTmXY47Tc66s57r2RLr6zQD8ZXBcPiVuVeoWMdn11jTSL",
  "key9": "4PhmNawGi21RyQFtYnnVPFCJ5nnRac8HnXmEzwqi6zCWLdF52rQS7qMuuLrFFfMd971UzAmM9HTv8xBPaviwQmkK",
  "key10": "tcwC8adKWsbBXNNZ519zoPnfSdRVqVj3QY1zFQtytfLYjgfy74qmPG8EKtEMdZtVGNByN4fFTGbDxAZduKJVks2",
  "key11": "tYbaGDLA8Tupuj6LRD2zvVp8w5mDs29hCzwufrwL9k7UQn9NPQjKctVkzne2tjsNYCSUaxgE1VHjJD4p5oYUmwo",
  "key12": "e6kc7kQbBnPLE1jW6TxEHGVwmPkdxwtV3WX9g3YMTS2BnqB1bTPZ3M5macFpPLEBisn1kb1QQahbWCgQQRMNE8z",
  "key13": "3mkc4ih7jgsQSMrkWuQKaHqJQgioZaH8a1KG9koQaT5Zt1xUYaSuVy1ZKQRjxtcvxmWRZshNhz7uWGqPBRgWq716",
  "key14": "4QjQkvmU44kp2qaFs8pKxecJX2jJnzZqTM6KKq9FgS4GyKX1Uu3XaE8GXaibkkMboMWfF5X3pqpL2o3W8Lpa4BiV",
  "key15": "3nnfY1oo57rXq3KF7KrgjqxDZkfed2CGuU2aGnmtaGVfMMPnwUL79nchPiCPM2hVzjXsAMDxG4AqiKtQ5dTKYtWH",
  "key16": "4hSoCf5CioqhUANcw4u8RQYJ9FHh7cT1QqMEPY4gxDrpCd1kqvt1fy9mcwqxawmzbCnD1ThtXYzJRMmZmwf4mn6G",
  "key17": "25CRQG3Qr9eNyGBZJaRLs2thWHRMtfEnicH8MkAR6LrsbZw4KgK9HAjs8XQfktM2oLHgPFbpwXv5G5YtrLJQK7se",
  "key18": "37zJhHHvqzUQJ1rDAkj92HEECQ5x1SV2JR7GYCzw9sLVEuagGqGEJzzKixSG7a9gM7bEEwyjtis5MiLXgDUp7W31",
  "key19": "FyA8EiMpJxjztjvHRfJo6KJWZXAVn5H3JAvToLsFEp4dWV55o8n2GNgbNtSxWv2dzbUUGhuohDyGy2MG2iqQ9Br",
  "key20": "5p2Gx5Z4BJuEbQavCULp82j3TtX6U2eNyHY2G1ifwg67xyX5t5mHgSTugAGnT7oCdZJ7q7oyNP7QQX1hStV9ZmDX",
  "key21": "3A4SW6jUmcH3YRARbADB5o25A6odQjHjkJTesmcm1y9Pkd8m4nUAMEEfG4xWbypg3wsV4tYMot41KgEd8WzrRGms",
  "key22": "3oxiedYpuvz5o8ioiWNRUtwu2Eq3cWQWUUttjpCYGRXQJbnkan67ajUXU56mccoKkzKaFKxkJ1rbXgH5qKszbfSS",
  "key23": "rB1aTEKLkSukhLSvBxUkipRcADJdjR6QWTexqQaG52LqLe65yWd8jJz1W8bH2PTZqfAHkBMhTK11XiN7AZsRTh4",
  "key24": "5f4HRH1keSmEe2gRiL2qJSLYqbUfnEo8Hcsv54K4i2G4hb3z4TtS7mRV3F5mYGXwSArSUYSunxCQykUoprsAqkZX",
  "key25": "3CYJd2CB8hcm6bHD7XWQ3BqFnvPumbBrJB8iiwk2qkd3oxxQXFxPa53NdUV4NShmqavnLnfiyc8gzwqnTj7zCJrF",
  "key26": "2D2SYnfFfgFGcnwqFTEdCFJkqN2FboPvThyU8Js43uM7trEdwY1u11kgridUvgPLnCADVojb5LupsrpNwfH4J7HW",
  "key27": "431XvSnzKSsqhYU7vUzUpvfXLNxmf9pEGd7fkhzFr7aNi6fQN1gj1EWg3KYfP67xm1n48TGzXQWFr7S3zULtRDGD",
  "key28": "62o93NAyUs1dxEbjcq9NQZpFwR5WxYyRWCvvYcDFHJWCpR6hcg5foJSqfPpXPno3wuncNAED7dfiq8wLqGND5dTY",
  "key29": "2f1PPJHoorP4RPHpB9ogKGFr3vX2wvu6R4xrWNFy3NcxjswGwKANHBB7tBuPJncVdKd36jW1QxciLmWHAPcUeMM5",
  "key30": "36pK9LNiBtNjG3LN2UrcyiZstTiYJeJ6ig4vfxDDMNZ3DzoUH4xh2CxUD9Ea8C2zEJozixgUMWofWcU8nD7dDfST",
  "key31": "4tGMpTvBcRmnD8EK8SLBQHiDPmwXsfLLEPCJS7Fs4PUM4bSkSms8mCmkcLwHHhhAtpB4dc5qx7zvNAgkvf6zifoA",
  "key32": "5dwEen4yyy7wpCetYwhNNxnHcRwndmMnHtVNZQC2tzfAAsmLpCSzfmzs7PDcgbXU87AvzipU6ksgHSnuwbTGwV6o",
  "key33": "23kCkKPKtnnc5xKJTpgNoR12WQ6vWzLVrqrB7G237JwfTgJr4KaLNvrUjwTfrhF37suXXPu71gbMeyRWN5tQs93S",
  "key34": "LrpJChW4EpYt97V99Ed2Ft76YURrkuCgQXCepRvHdqiGum8jcGZL1NTaBd9T4kh4famr9wjresZNNv5id82i6sx",
  "key35": "34W7PorT25AWBVchjLwMuVkLJnNepohzFdDDCa8i3TbUwyJp5fBebP8UJKvcQZMcqgTHeQAVvLZyD1o7LHsqaQkb",
  "key36": "3FzmWJmexfKrfsqGLZZ4hFpxbAwvowAVGqLCkn8WZ4vjGCsGTp1P8J8wp4SfCMWUY5mKDUWHKf3HfZZWNRybHr4c",
  "key37": "4t2ysJvFn57dEMUz6Zfy1MpCTgnZ4BgMZ43q1zjBSfSaJvjAQPAFdhiYNC1exXm7i3Npx4KVtDKSLVLLr3ZFdt51",
  "key38": "5YmTNXypGCLkAbxuz7bYQGaaNXESNcKpYtDGN5oQUkp9eqmfMsXiQantXV9eTgHq2qNso6Goc2Bo9rttXKwCVV1V",
  "key39": "2XxFWoSPi7SzV4c5UTrntS4vZievCcgsz5JnNirQ2xLsoNSXFGXY1q4FaB5b4Ztyq5P2fMByPke7mDA7hztyWMVm",
  "key40": "4cmbXZ4zsNFB8PNJqDiV2Es97z7ckjk8c4KDaFvWNV5t41qDSrD82wJoWWd2mAPjeUTarfEMt66K7JHzFUPz5jv3",
  "key41": "54ERTtmm66PsjVWDw2tQ8DfD2gwHPFviTweNGCHA69paoVunmxAe8pL7Rya2u3r8v2pi1Ma8zbX45g6hWYBR1nBD",
  "key42": "2YyLpu49QrLYBY15teVbZE5XnHafY3wE5wJLdcAmCarVAZ42eXSJRD68BgcqqyvkzUDUiBuadkWfkgtz2iKk8NHi",
  "key43": "34LTNMD4Mbf4PjDZSG3siY45UtVrC4cTSRsWu8HCRhatzqEV2jsR6b2mwfFtpCoZaxhoHzvQ4Pqfdf1SLA1fjpVz"
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
