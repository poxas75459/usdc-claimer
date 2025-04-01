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
    "3xZ1uzPvjU8fpX3B9pLW4hYp4YjYoyp3EFEd27En53Sx8xiqcbMfCKhBH2W3Xe7yRzzFBDPFE33SxWVRna9eNePz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c8mqPDqChMwhgaeenKw4puFXCyN4uxkDMfuheTCgS9jbB2B47sypL1KzjdrNemRhs1FcJxvEZ36ctPEpCorLoLi",
  "key1": "2RycHCKVMbm5KxyJb3sgim3jr2T28qz9CZZk1cJKgyk5HCE17pnJHn7CzDQ85sR5jwciMmwPtXKkWyYH4EHb4hP4",
  "key2": "ZfLDGrKemnKsvwDH556Jz2bQupS84cdF5tgvZNA439Y6QwEC7dWR1e8a75Vjd9NuJrnCQUcsy7W9Nhn2MJuiMd8",
  "key3": "5ZdxPqRpiKtd5B3BHHTTX7wusVQsE4s4wSav3bPkX2pLLNJDsnMhPidZJvNXXpqHf1KCaCYbwgHLdZVz8XRNCR4z",
  "key4": "oaE3P4yswBSmU1dZksL6mHSkc3vGijXN52JFRf3gxoKGNL9zN8CQMVzZa4qMkZbgBF3k6iRWJNQDAkyijoqQSor",
  "key5": "4pbJ4o5P6E8BLhhkHz8WpFu23Xf76AJUJ5wmaSB4bfiFnZYVTDaDvw4CsPgRLubEWFdpxfp83aV7tpUx86eqmE3A",
  "key6": "3Jecctha2UaDYp5KVGQdWs8wLL7qQjLd99AD4BBtxKbeoYu6HX3KDDg5G1wFDrdYYLG4Zinj6k8sWP6m21E713yd",
  "key7": "6B57vGDrcSPL4ggcgBdeYYNvSaY21VhGYeXUhaw3LCwrxc7Nyw3Hmr6HtQs34PfxtVR4vCkZSqEPqoK5RiNSjVg",
  "key8": "3XpRD8Vd5wb85mvCZRj1iKwvptd8DBB3Gp3G4TpjFHrgi9tZYyXvGXi8mAwE8ceESVgPGYHvVvnHJC4womCUeRgJ",
  "key9": "TGdPSUenZthTjGxWDACMHmDsggPhBrf68eoPEp8jtNHY62ord6T1o58EkBvK4RcV4dyLCXuLokt1qNX4EpJesjN",
  "key10": "2wmxRF7MUtjAS1T7YMm9RGvUrA2GKwG6hbBHntjgtgihRwdM3ATLY59W7xzJN6wJrRS8CHnpc2gGJMjPPw1XQu8w",
  "key11": "55UR1Eoe2C2VPW157RarSCYoJtv1ZQLb7VLzx2CwbtJZvQfqQbWvrYrCboVQTckboTDu84VEF7P2Ka3iUsww22pk",
  "key12": "67a7koijZeisZ4CcizDADSVvWCmrQjpiTFZ3n9aufebJBmgBNPyWrDJCApU8QunvqjvcRNVoJXEjmLeiKvEK4JgP",
  "key13": "4JCBBydHWjd62qvMEViuiUCGUUPfmNoB11dobfGSTPJ8V8UrXubHKSbQGsgqPVvA5QY3Z4tP2nsYE8TFtvqq6gVn",
  "key14": "65Fitmdcb522Bj6iMrmEERmzKuNTCh1tCTUUZxQmgwCKsfVjBysnrZrwgHRvSc6wRd7mS4BYQCxTAZwpAEaKszfc",
  "key15": "fpT48uc8mpRSW8wn4yqakRkdz1toxD97nJtsSwDWo9U6nuNTkqt9UfoKZxg3jZbu4YLkn5hzKHgu1LDvL2wFMrT",
  "key16": "5krCTf3NySWaNF5o21MWSp3Eo98dHRYrRD8faDMcLL1Av2vmdrKBYU5fW35YiMxaBVUwkyh34ThRZkYKuwM9zYDp",
  "key17": "36JWxmLwDc6Jv7VSbkdfFLX59QBUJpP2J9VMdMqbMSJa8Ghyvw4YyXyJ8xRpa7oSYMdH5CMjFqg4BnjbDNMAALTR",
  "key18": "2zS1r8YdHvddSpAvNNbRMW2PKEY4RN8ixpWkSig8Xqgp9qAB3mwVXFj33oP42ae5DqpzMrMWuzVRRdizXuDTXHzL",
  "key19": "3x5pQQDAYSMEL9VjYQ1eX8KYMZ4GUWk25FKtdMjmwFRVsUJ1wzXdHq1fB3Ue6XH2LantSXyZq6ohy77GKCJDjFjn",
  "key20": "3DQGsaXxV4j7YuvcZF8DBySxZdNnKbN8M9NS1hRx9peS2AzLLubqCoduXx5xzG5qxgHXWhijLzqJ3fy14J3T2xpB",
  "key21": "3U8WaGjehULQCFhd4JecaFg5BvVp7Nt54k3jwVREEjNU66Nbo9eWSGFGnVaTh4rVrVqNHDqUmRZGtTkant9V8roM",
  "key22": "3rzrTVyWwgg3ftEasSorEigwXQ34mHjYiK49zX3RQKnbqyHd36AcbS1xDcit4NBkFDjFbH6w2yHR6JkwzKtxabWM",
  "key23": "2SKWQXuS5h8rZf6owZjtDaQDGTsZwwN1m4683MWsJuhWnVj3LrwiPcZzQUiMMLfV3YbYB4WSsptp2syqSQSvTg4n",
  "key24": "39JAdtRNcyMirvRZNJoAav812Bo6RcXoeqQpLT2yuH1cCjKC2Kav3UeAsDepP6CF9MgUMU1c6KAbBxQW9SjvzemV",
  "key25": "5z2VRWSGnaCFhfNCc1rwpacTyx7uZ4bk1FpKPKLchBs7VtnSLmpFeuv1sPiCG2BQigQbKtJdiKxrMEcoDXmq2ZiJ",
  "key26": "Top8RptvUYd1DnTKZYxBkHK8eWBTmBpVtGmzxCMo3iihq6qVoByCkBme6rRQ4va9UV72sPZWpVLHdEGGWNN28LL",
  "key27": "DbZK8iryRd7NNpUr9aqes6MgeuTGHQnQeJTrAwEswwRN7z3q1whz41EcHGoZdmoc9bp3jYvDUZbszSSU6bEGpqM",
  "key28": "3pt229WECkW5Z9mYpfrJ7pxYQ5wLWUBxnhFVG7EYgANVdH14BiQsDcws48WT6FSExbCZTqd937DpYodksZZVqco",
  "key29": "2VsyZS6HHQGs7PFryJLhHtjo5jkere3rzJXGWVwBdRSqBXFBESHancjPx5HaWjcDxeTztHKJNL8fUzbjQGgp4o28",
  "key30": "5SgDmSoJk9rZakT5eBWQFdsLWFBP7GdLy3WVjbGmBjUy6nVxUeh114f1Dx7M3umC5qdizsfifhGk7jgDjYMBWFsU",
  "key31": "3VKcUbifQWct8na9y4NvmbGzxefT7uVBHXSzZdpAcc9ZJLM8AXt2oUMH9kh2JrLKHtFP7eiL2GJfS5uuQeyfHrjn",
  "key32": "2XeSHVMsQMBe5jBR3imfUE7p1nF5Bx75X6x3cSqcEtQAan4UXoN2DguSNTXZByREZLWgLWN9LhFiMrQJR3wzBgZY",
  "key33": "2QyaS3XpwRUxZJxNjkAHy9JgEgsAahGMLL1kTRt5BKJZTak2HcNRx5FeQHCaozqEcJcBHxCKbjkLppVBZ2Dar7DP",
  "key34": "yPtcByzYixWECemS43j59PBJ6219QC18WNZ4DJix5U7pG8XRuLp9v5Q9h9qZT9crC3QnM2w1yYx3zNWG6uShY6o",
  "key35": "63MC1ccBQsxgVgB28C6iDFhV1qeUvFM4Sc2MmFptYdoGj6rTEKcowmWfDpSRK99xpJUhbegJYPJPt65ed6bGHuW",
  "key36": "UZnautDhgHGtCQ9w5JNHJbW8PQCmfLnscazHVhC4oEXPdEtVZjqPEVtGgS9hCitTyyyHyLjxGxZnyu9UDy61LHY",
  "key37": "JhX9v9sgP1ZrccTmspi8QN2AQ72pD1XjB1FMPycPoHXSb5pXwmwwG4pNeGdf29BYUbQWCExST1Mc9gUbGMNCd6k",
  "key38": "4y8TJKPszhamvzArsUQvk8cDANudjDrELG27PV3juccjHSe2umDqD8YT2yfU1oF2rh4rF9GircqmBJpbDDAuJzfP",
  "key39": "4bobYf5Rf39Y4WdXHXhMUiBqts9qXYnpzqQu2neg3dH7ZRMtFh2r9voaE8NKNZUBJ9sLmvrSaeuoatuJKpivw58K",
  "key40": "4qeu7N9Nvhm6E9Mmmwek7pt9Mqm82f5yoNjUrbyt7XWPK6HjNqfLC9aTbBYEc355ZhbND2cqGdNVENtNYBat5eS6",
  "key41": "5vkReeYFqnqx1S4xvNzQQUFb3WACizXMDZ7ceTaH35ZrHYUQZTzhLxtTAoKSSQrKtuDBy2CzkAANeHXaNKJq4QrZ",
  "key42": "2nR9GihGSq4JeWnsCPMe7GjFCKR84Naxr4sVHmCiXZvjZA4WT4i1G1uZrWXf98kfrEVUYSFNunmxDUNEfHppgLmi",
  "key43": "4Vkpa77nK8ma4QFhUQ2Jzj2wW3yE6RKfPcfDTTYztRWCoMduyKBH5xPmYbBzoh7n8tBdKNqvHL5Pi4DHLFeMzD6p",
  "key44": "1iiVhX83UFWQKj8vVgsFSWBmS5ss6nizmFuZtHBMtagD5t3vvGBubWQKECk2oZDJeZaYs5m4hdu2iRdJmycvSNw",
  "key45": "kuTQFuF1WTnnsn43dN3LBhv9sdoQ16vdbA53YRn9GAhQLYstLXt1eGGarnLbBnuWjr4aq9qpLpiFsM6Fp4MLj75",
  "key46": "58RR8P5Je7MeRiPez1w43vFJNGt2HKH8Lrqm1fFnKvMxTFRFuWtqQe7Ztjb4UWwsbaKAVAQozJYxVGg1hPS7KjmM"
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
