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
    "5TKBbdxSTf3NdvwmrohLqPtMQ3GBCqsugSeyXJF3a9CozxFvmPosnZmqdcoKhpDWY39Z2FtzW5dijBAVABUqhuwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VtNYwCJnxPsgKrTDaB7BNAKk8zUJ8Xtyvp3Z8wRQqjhthi1K6qAz7hVQ7TbQ7Qw8KynaJrNpVAgWEynPy2WV12h",
  "key1": "5hFL7ijKcgQsYoggiGuPF2kvcmmqjAtWidRqTopMQrDF4oKErVqFgjfgmj3fqTnqzfMLuWAcSkc8LsTijSYrW63V",
  "key2": "7ACRc4Msdrmx9ACeDEFWdb9j5y1C5pVGqba7jVWzStVHJ5TejTvzC5VHv3qCBNpWti7U1pEVzX9ohgQzYgCLRWY",
  "key3": "beUy4c2mrXzU4KdhPf1zi6gQEsmjeDWxVYYFzCEf1Gw1kqzvhAcwVjfdT61QQqScNEsk5pyUr8ts7JBftmRpP8S",
  "key4": "5N75HvsBDWjM2XEXG1xtBLXrBWFWAVWJLtp9UZbzc5nHmx9QpqRRegvGqKdiUGdXfLkU3WJgygwM8MVbCPSNnXhp",
  "key5": "2EJHLE3wNEJZXDsCnSji9exCAh9KsZiJAsXDvFxHVEJsUM3aau64z6HYPiiwdoiajDrNyH9L9vN4RbNKmWM3TLN7",
  "key6": "2ZcxdXyN19YjFkYgsU2vcLfHx93aKbkae2HodTsaG2aFLv3QPt5iLUKXEEXbaFHsk1ZYvCgqNk12gs7PVX6XoQ8e",
  "key7": "5dHy8AJP1BivcVUc41PPxGcHiQaTJKJSsqhCZsVEW6BVcMzuivg7iVTemMgo78k2567vyJErai7m9X6bBi7SSErp",
  "key8": "58RuCSDZ49LZrLhFZeFwkxRFMB1mxwamvSTrp2hZ6K4Vr4SJTAx7uED1db2UYHipeR9PMS4hsQYDQjdbP32RZ4Kh",
  "key9": "4K8rtpckrd9tjvJ44q5FBUZxXdBX4sup2Rzhno37hjzWmHTZZXr5JvLnm6u2MSUekZyZNm3tdXCwQFSMpQVmxZa8",
  "key10": "2wNQyBYVc3uzvWPWvM9Zv7veMQamzkkixicv4vFBGKjBixmZRFmN4FyEuaB15ZcQShgDdSWdimMcie2tBtwFGSuV",
  "key11": "3VrjxJZtvC9Ewxg3yttbcuCivF5FhvraAGLK1QWd2xvubn6oM4vwxpBQztR4wYSDwQx7GHj9yanTZMdwfQnN4Zyp",
  "key12": "3tpC4752EmZeKtW68wrgdVUSHMoDzRRQc5c1Fw5eFL91GTGrJa1XKdGiDFVkDM56p8LjrJVk3GHwPUrULJLmJkU7",
  "key13": "2jJGXmwJNYEcwDY7jayCHTrYyCGLg882nGpgpASoGy6WnR3bbh8u9mUM9KTwZ465iLsCLz7qkLrKdn8Jxu3215Xm",
  "key14": "54dv7oyhSYUEWoeNiY9Z7xcei27f5FwhTAY5Fpnx4hQ6u6ABbviKPcjazz15XWEAzWYHUdPu1FwGsxkZrPT9zWdB",
  "key15": "2DdzhMC4RfUhyNwWAQYQ5Hbvkhhgh2TQPAeEaui2Pxx7KTt71GTT2D4AyVxywuXYKxH9jsasVQENbPxpt5eBvNUD",
  "key16": "2s3iFcAStmqUNYn59oXCHzA68HAWjjPJGVvJH73syTFkkzMyHfM9N6AJpax9oa9YFun5DSfqVbwAmHomYvcBoby9",
  "key17": "4zmmGa7B4H5e7EJHPDejyhDPMppFsFmpNozPq3MGuF9x4CFA7oHLssGD3c6hMcpnNneS516vGNeGepFSMnWDvZoh",
  "key18": "63xFLw3Z8wfqEeURyEA7QxF5VkaoiDPWD3tymKG9QGFP1tCR4HA8hvyPP7JF8js2uszqmxvmxD9r7oEqLA9phgws",
  "key19": "5eZCB4a2gkMxznaPzZiHMox1aD9BfeJBKy4uvDn73k39GzjHy1RFRSiAgnFCVk18eVCdvirure2qzzCMBxDD8FwP",
  "key20": "5AZQpmAYt24TXCPkXmjmKX3abCX5RNNNdrJ6ToFTsLeLCdpkjPHCy7xMyWuBSNqqLP2wFEWZZ1mZvAr25SWT6C3R",
  "key21": "3si5ULD38M9QBorPa3QRHyz5kzbKNq61oJRXvaG6wPe2FywfS4rSeL1Zyubdj9W4a5sx6iShRGoa7tgiRpMcy4rD",
  "key22": "2fdAoxvHxKS2Cf36BY6udgRxCK2NhGxkaqcx6NzBWwA5L7787sCofXnEbizaxYs8fxR6uSAv4MskopAxbU5YekFp",
  "key23": "9VFPWsMBVs3gLzVMMxokbeRcKcXn4TmvPNf1hm8VoFRYWBmRXpoURABhWZErnkVraNsqc8G3XJkFSLzdpG258q6",
  "key24": "5GmPn5WwKSRPsmbHm87kmbzE6c2L4QXv8gFvqMBzVGY5krHoeZVBV9C1KSWFybp2ftsR2X78Y4Z1eW5uswNzaj9q",
  "key25": "4MVkpsEwcXNrTCuTMVPx5E64CA7j6i678QZnc6kCnpDbDM3yfSMGfEnsGY6dVMSUy61UV5eMorRpYvejP1ek3L1X",
  "key26": "3Z6wmq4v8gnLYRThaUVKeCk3m4up5q5pwaxUYjDpPj141jHCJxWUpK17YsaZTDGnTerz7HNZqw2gngYBCsyGLmoN",
  "key27": "4a37vPBE3GhtFa1YfbWenHghp88XdQBBRPX7CXa5JC2CdvVR49PyLCYebPPmczSe21inhcFpWkUnQBVrH1dwUGej",
  "key28": "441H2zkPu7yiSpH9V2L2APeXahMVzm9kjirpHSog3eQQ1jYn4N9NnoMLSkNUR6ijuXxV3bJn6gEDVzD9525TRzyy",
  "key29": "xuXtM4zxScfFn36oAz7RCNJzBUN3qwf8Z6sGs46QUKqnR4jXXMuAmVMMQV1nqi9qmz1PLhjdUHvhmuTywFnk1YL",
  "key30": "5cnunQ1RriSbHVddL436fF7mxJUUTagkLKgeDhqejf87J1GnHsBrkr3JhsZuR11kTziWQcMhBj5iPumiaMvWjCak",
  "key31": "4nqhmWrybK5AJXpE7bWgoPojzoTK3z1wsQKkrVPg6uzvGKEkaDkMJUj5fbY8yrPorUx2fLsLn6Eyv18oC1atS2nG",
  "key32": "2SET7GJrsLRT7CgZzRzo3bgJ5GxPZz8j3QdwbYU1qwvW49me89HHe9hXZ7EWTJHvuvN5RQGATFG1tTPJsxxvXgWL",
  "key33": "3SRaDCFYJJaAAPRz2aeMDzo8ASF4fruiKCjyrsJy8KD9UTYwUSLpVTFMgDZRgu8q3Fsosihz9mbcAs3Yk3JVr2Lm",
  "key34": "2Nq7TBRFhvcH8ifMvMcFujLos7f6tJvXRKJqinpnMSzy2ZKLyekFNf8Po8nxyUnJ26bstczpmhQkdAJPjJBpPK7P",
  "key35": "2x8XP7MpN4icY4jVXXgFDyzHyD5w9uiFWxzLAgVa2Xnvtym4hHnGbzwmGbvt9W1MZacpzRLS5ae4QiKHAoaQ5g5J",
  "key36": "2tkhDSzQWJcMuBjFxw8YCN6hHFmDK2LahsDDoXLGwuFhNVyFU83Tcwnw3ZJrthcoAG9AsHkGWf9XPQqVfemroBzA",
  "key37": "5mfLwL9cQv2roPRbNcis231w8g77jhpGSHR5Xn2Be4BKZxztg7zeS6JyNtXUroBGUWfvyvT5zvvKZCaeq2jVwidp",
  "key38": "2tPmSceHHUoFb8HKR5trNZsWyXXGjZRmuobiTMbuDQ9B9U6nuG3Vdzzm9rsssaLqit8fmjawJhBhTA9XgbHRkAQ1",
  "key39": "2eY9q3uy1gZF84WWfUbBK1VhWsdZVNFLBGdKDpfZFzRjhxgY6srA5xC6YUkC8MnfTyf4bMPYvznkVeRDifgLRgBN",
  "key40": "QPmNZByY439kg8fxacbvZGREf17VLSs1hdca6yb9Yo5vnzdsTpUuJsAD5aRFcKTKd2SB8wMMhL5YXdmxRq8jF6o",
  "key41": "5L6Ss4uZ7NFzMn2rtc3JMqZwgAj1rM8xD3zBmAA7EXM7TJbtX2NAtfgT1saYJjVBVrQ2ij4V8FZ38tS19krvUU3P",
  "key42": "3aEw9wWxMVdAXM4XydMsMpFJCbb8Eik5v6wvPQE6w5UdidzNXz1rEcYRR59qZ1gSiGmgUNU1po1WbjmMKEP1Un2L",
  "key43": "4Gow8Enk4ZroaCzUqK1TFyTvhMShQ1jUyHS2vez4t5yEv1eJ3V1MtnFBsc5pFses3xao15D4KgJ6hCWt1mdd5x7f",
  "key44": "5UiNpJ2CPxtcF7f6HNWnCDKSzXFHMGqCwPFngQtKrfJC11pGF7vguZXqgNdcigqkQj1qwwgbTivpKzoKZKs5T6Nz",
  "key45": "3x5EtcN5mkTbSWt9aT4YkNmGaaaTY7QyZ6tUxxyhy9QSF3NuBfVAGNwH3FxXCiy4odpunXZEdzECuzsCKxFP82hF",
  "key46": "4FGW5xAebZkfxf6LaBTxZ2UeNUjYoXQMw5MAJeUUXU6t3oaapHjReq8rqw82SUPxKiE1k1YEZkCXFqG1FukWSpUV"
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
