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
    "4TeXdptjhZN7TxBou7dHuUcTUrCwbu4YeDX1vQmhxcArxqgjtRd2CRtV6fLdbpUMTGPTTxGRas1pFiT3Ex5bwwHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UeavPwQscNsUv8FQMCbXbujVR9VaWiC1UQHcwjTzjUxqKdnMA4gKHDZ7m4DMoYBHtUnbsooZBQHBkyfVLWAkbwd",
  "key1": "5VHs7bQ3eKPTsFtVc9UPENjZALWLcmdeu3P9WDeABzWQtMyY4GtVeHFURGNhi9Q5Lx9aJWgLVQrV2WmnLatL7Szt",
  "key2": "2KTtZ4uCRvEvhRuPqBeXwqUBjZkkLdzVsCo8ADHXAF2zwQxjBm1Ji6d7QCbQhxrsTi153MpU9MmPMghPk7m6ChA8",
  "key3": "4SfF9vKxQPxDaWBPeD1xpuuAAf4QhhDuE5zi1XunhwCLDE8oa6pHL7mCKshURXVLFzXNRCbzAcoPxqssAhtabwkS",
  "key4": "qeN5SJWqNSDc8SoCzvBHNFak6b2UhGSpuDasVR4oqZpBmUWVwC8pFwgmYsLTdzpTAD16SQikkVj4QRX5LRpBd9i",
  "key5": "5NfH5ceJdmALYXKhstUD32sdNiG8XGhJkv3TYjYUccG9pVWkdDyi25KXF7jLgvWUqGkb1kAU158Rh2TsGvg91XyE",
  "key6": "36sEo1gy8PCGnBp8zMywV2tw6UyQ453fWXHNuqH7wYDj6GSqPZAhKces9UzTeHii6BjuNsxa7jwzQsrRLfKtofzq",
  "key7": "JKNzwE7EzQ1wz7miNbajm5r8TXc7Zuunj5kRoUeqic4MFwqJrQ7xwrXCBWY81rgosbCsng59PmMiKHEsZqpiipJ",
  "key8": "5Ftbf8gGmcS2CQsgDRJLVms4Mt4picUV3bpkRBewJdPs5M27QDb95pbdW151YQv66n3NGUsBc8bRSA7nfh1rH6Rd",
  "key9": "5hLWnYRjU6WCmvv84S5msCPZSxDgPv4iMer4JCkkZyfTivuheqZqsUujjs6TA4cLDmiTKMM4jdDQarivsBFVZgpY",
  "key10": "W3SPDguAcXZ8K5LQKPPQMCymZXnR7dKDntFqkYyvTDdHkMUbWkRLSXSZodCyF1XWend6CbYnaxthy5yzqbfF7Ui",
  "key11": "2mXj4FWdP6WFqtJK3ruRiUTiY8rtryiWMhKAmDUKvZYxfTcBNk3qDwE8eU6u3tk8LWm4XdeLeM4Nau9dso6KAH1d",
  "key12": "pPvHfHkciczWaFfmdKtbfqQxC1oAB5SEnyXUNgmmg3T4fyZvnsxSiQVS9LCpvefjQbXGyM3UPGQ83J7WJoSZEx2",
  "key13": "YyG8ZvWpTMRznESc65LfaqWctU7QPRnyNsoT7JHxpXdZVtQDP2nuMFPdu3w8KdvsNdxhAWwhsDq5qF78EuA7Xmy",
  "key14": "MM9pJMxn9JsbrV8Q2FNJcWMJsUhpLSNPx9yUdWsY1YXqLzX4BarGRG2qomSRseZ8LQSbbpPqCnAZqDEL3n52f8a",
  "key15": "2nD1kv6G5TuJLh9zqmUg7joLfdzzCSjuJnGdcyP7UPwW3x4LpT7brUBkK7Njf5tjpW8sJ95E4XdiFjBpQsnXxUSE",
  "key16": "2o2Lr9ape99cmF211wuDL2HBozVwhhM1mfH1vADnAKu8TuqdxjLC5xcVTfjAJwCqvzBajp3PACUSqJJvrJM41nXT",
  "key17": "2cKATy1qSY6fLCCaNuFLaY2E9x58nX9mURfL5SgK2BQeLMrpYqT3LBJ1S5frJaEL3sHXgRB5YyyTJWLQAUmtzy9F",
  "key18": "2MPuVTQH3s114nSgWjDGcaC5nFf22k6s7eAW2heC3C8QdScsH8BNiU856z5W9cZKJ6aj3m3WXAXHcM4CG8ypy8o",
  "key19": "4rusVszkCJQ23euLEW8hYf4RSae8WLxLUi4dFv5xqezBbNPHhbtERFj4WFfTDpp6a69BaH3TJXP4hojergphbKg9",
  "key20": "4ktbfMbjQ6jPUzRRfXT5GFQEwLXy8K8txb3e94Gq2Qn1dUNFBeYgvwkcGDq4mRtYfufSJaJ6Li9PcuWCQ9jMBL1g",
  "key21": "4BDdByBNNiyjx4H1ohpqFmVvAXR86buZguPfxE4a6XS4U3Ec5gqjVj4c8ZyRvK6w4mNXVq9gWgv2t3qUktCyHgNz",
  "key22": "VSDXkkYjFTVnTeWvAm84DM5nYXS7pS4sXfjF67agLMLkQGEjQtS2wQHXNFosTeXFu2oVrGMm9TYsV3zecP8zG6W",
  "key23": "SyYD6AvQb52F7bE6N7iqBCCwZpJiWDxioj7wJtXwtP9iQ2Tbwx6sVuz7qQxtPyAijzF7GT6DCCdz6QFRBLWeDbT",
  "key24": "47hKvdPsynjGrVQae4ADE4Lydk18QKhh9oe5hoRnhojtScbYSXfhpDqcWKax4CjduFZeAa4wTRh27QuFPDhFzX3w",
  "key25": "5qR6k96vvAkDnfq3xuMyzivHNvAgB8B5u2ksc1pFrXkiMa2nfdVmyBt6Y8YrqwZYooRi9WyXC5wfYESJ5uKYnjwt",
  "key26": "2z5yzKzhiyh2bXV1sAMvZfJmrmRnPhkcU9T8WVz7XXsridXb7ejf37QB1t96DoCmEXHFi7iBDKh7Xr5SL3sUkcDe",
  "key27": "3QkLmjANsY4XkioodVxRwViA3gEKjAtxpC9Vi12N7scoCzZ7hWNBfY3BNieHEqzUa2yvwi1mkoteopPe1DgHH2as",
  "key28": "59VhrKeHzubaEku9926McaWwkboBhH9dBqhXvsJq8FUf2VFkaKxB3nmGa5oYwLJxk37fqVHsFTEVC5TomXzPDpYD",
  "key29": "3cxSwZFanqYP4Guzkh3Gbr2ZNUZjDs6AyJVKnJ2TBSsBPwAM8YVRbGmMU1YAR5DDS1wAfrqsTTY2cGQUK9Z9Y5ya",
  "key30": "4Zofeuk2jKQomaYBTrEEaX8ETeNj7PwZces8jbpcZ7jGDgP68tgHnanEDMRQkiSMDh5D3NWDJjPkQURoJQt4hCM",
  "key31": "4AWe5cfp4Qpd18qiw1FLv3SzFnVdfuDCjPtyGYoV5RfrKpBUM9msrzFwqB8UmCrVRp5iUdN1wCk9o1RQ5gbrWkJp",
  "key32": "4qWA1tVNL1WZmUH5LamRqKVX8uQrH7qqC1akveszu4FB66wRmMVZHMX8CTB4Au1x9zFudceL7DB39Xfy9XYgV8v5",
  "key33": "3UNnn8LUYPmKc2U6b1BLBLheYstS7CXVneBgNwSSpLdJQrSWW3E5ipMnYG5TLZG7JvpJFuLwRYvCLY5hh3hfDHNC",
  "key34": "2QaiV71PYRNyPv4WjY7xQ2zXmKqUm6Aj9WBtiC52HLhxXLN357TF4uBc4bS7x8hGAPiVS5UXtKgHTLBaUjoHFT83",
  "key35": "3ZFyEqD62KgNERFYy7KRk95YC8wBToNbcV8aGVtzNFnntJRzmXfCuNNtu4Ngte8k8q4V1o8NLbTk7Pt81TaaexMH",
  "key36": "52jrnEoX1xoYrswuUg7GGZ8NBVPCbd6o5y9mg8JDCDpgpmharVdXASqMgZwnPRG7btzzJA2GTKQVsJg9LR4BKJ9R",
  "key37": "3C4VKGAg4hmytZVCGc1Q8vxRfR2f9JUCWy5ohxB7j96qiGhPijLoettqqgzGrqq4pzUUK7GFBDERoU4tNWQerduW",
  "key38": "2BXqVNvrrhbxQmBsezWk4caCSRbFVTB7ZxfC5bXWbawAEw6CPxhzkoq8JHSiEyLEj39z4oD5k4uVYJpJSvd8pGTS",
  "key39": "5q9yKT3WfF8LRMpx8XzHZUaFrekMKffKCL1YTmzKguxguU1dbkkgvkpc8e8K7n3YG4gJKNscKXQJpubWw8tB14iH",
  "key40": "3qcUjndZwyki2KFJAg6ByfsgzERkidBqRRSpLDPLmYSMuJa4SBkzkQrWzAZMk484t4g919LbCng1FziHizhXqVsZ",
  "key41": "3BbnuHEuxDC8KHxDy3BNLsLqPgymHvKLerngd5CsrKSwQ9VESfP28uwqExSNfowPF9aAnhxFdSKZk6of2QpSR3iB",
  "key42": "5fUPyzVY2mcqepe466acXgm5xy612uSpFmfhiyQEwZGrR3vLPp2TXBM2boWo8XpT3MDfPRMBfJvJXTvkbzxf46hk",
  "key43": "3J4WdkSV7g24pQAwW8FySNogDWkuqsft6Hw2uW28L1RRpccFx2uKPzTZ4qnRLoPaVckuUDM6gnPdRSroZNhH9K5i",
  "key44": "31goixZipj8cWjygPAvHDfanVrK2o46o1YjJEVaE666rQFtrEbHZMrGJ5bpg1wz8chpXDRwRqrTPazC2ji9WDp4i",
  "key45": "4vUZdbVKyzv7vvxrc7Zyh1VqKPcF2h5ePCSiRZ3BctLcy1GRsBX9Pmsof2mcrTyfN9P74yiQEuzX9b6ZKop4CUXf",
  "key46": "3RgrhYtGLnCKUGbgzAVKT6i5upoxwTuYZpvBRrsZSpvEQpxZFmhkFvxCXWwbDcB7Zp5GFrDfPHAC9TSPXQA8aDdC"
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
