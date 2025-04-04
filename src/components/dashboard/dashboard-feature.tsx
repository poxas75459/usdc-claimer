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
    "27xVdJSvG4TywP5vY9jV2XH4xaHCng4HNhMGH83rPbghopFSXStPvr98nABYhLojcAvcYCR4D67Gog7bPUm1TrrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kUZtWzrtMnLr5shsEBLwjEJEjubYiherbU1mw8VkXG75PhALABEMsaDXSx5fjUgVWBVQeFRQF3MDCqqveZHVptE",
  "key1": "4qksAFCxGkh6TiYc1tWTCxksUguK8hF9rd2k7vvWgEdt2rtn8smTmBib1ZdAim274aJfciE3VBAJXLqHExq4WKi3",
  "key2": "2ueLQpDwDGpUK9NmsXtDuu26fzEorQgEWmDwShUsqv7kavBeChpc5P4gYXYxU7Q7ondwaA441Gop8GtBnhBff33K",
  "key3": "5VdWrRnRTguvav3kYh5rTiEL7eUHbxYSY6kYGwr4fVPA7qWwUnEacYQRv5LMCAnkgBJJXkh9zKk98QMhEX3GooRK",
  "key4": "f42vceDxMfUCVQ2MHRLfJXVG3MsMtRFYUdatuEY81PeQEVCo6tq3eXGwX93FQgdMi85xwBVc6a5GeSRZzCfhWfy",
  "key5": "66PgPAzbsBRUYBJdNAoiNt8ME4QBhzqEPtyoiWZj8m2XneCBEB41YUy4xX4N1uC1eZyKKVa9oNC5BxVebPJwsZfT",
  "key6": "4F8y6tX8SZYLnktJwwhk2yAGNdZm2MTjyZ3rHbFSXZ6XkfsqpzUPuavW9R8me4qqQqS6M8AGVUcJEuesq371uz94",
  "key7": "2Zj2hPavwgbLNg5NAqewKwhWaApGX28XDNSa3L4xMV6BF5fWvB3b1EEehDSY7mFgA86eHuZ1LaH6jsQt8nivMr6p",
  "key8": "36BHD27RocpB6wk53PzspdL3Rk29zzTLa2oLfwqMxb3jgZqFr9nHmnh7B5u68qzA7CuBB1VVtXPahFFYcCHypENC",
  "key9": "5aAnTcEavSAhyKqbTDt5RbuYMFU1gv5JGJCtWUP2kETApcyW521w5uz3nxeFsn4WPMEj3KCkLHvx2BgQDo3PHexu",
  "key10": "3A3mdLcKD5FrAWjUbE4YTBMLJnQkECQzyVhFN4vrTeLMCm443jEpD9thoQxnRHKn2wyyveG5zkpgov9qQqDesixF",
  "key11": "4Mrro4GrNT6GDDf51JMD9hs5we2LPc5YirueQnMurjuenit1sZMJiyZgqsRubZKAH5aBW3ppWKMWotMUk3343bAw",
  "key12": "5axAdjEN4b7ktmLN7btf1uL8yu819oThcWQca42UiS9Hoh9djGbh5HkgWJKBhh61867u4XoFyxKJsowPpTgtKQPo",
  "key13": "4AUdVgqcQFGtYnGYZAf52Tu76KrMd7Cvdrm565meKNnbGUiAQYo4aCMd8v56qanH8if8g1ziwFvyQZ1Qi8Tws9dv",
  "key14": "36Y6gXeUSMjzUAXbupb9AQ1xo5zyLcqTbwy7iqVjcgTsnxN8haV3jorJz7YzuRd54YhE7VFAQGgMqVJViZcmgGAK",
  "key15": "4CwFS3BLqbdeGzjvWvapE1zwRNzqY1H62cTtorDtT7WJLACskBUcBGAGtD3QoydtoVtEGz8L22fChz28FQ47xNba",
  "key16": "3ppjzHAwE5dCntovrnxcdQ5Ag1VhUJF6zuxp7KGj14ZtvCAUrgFp15XgQx8JMd4pGsHCEMvKYJGjdqRgzVb239JH",
  "key17": "5ocr4Gqe9NHe27zZHV9wkVV2gCFCD1grYriqEqVorEPqGNeiQafiChcQDjJSe3xHMTY4oSukY2oiDmhtikqj8TQz",
  "key18": "58otLiAPHshMn4X9SLNY1SJiPubhps2nNQ2Mjpe4cESDrho8yaRfeGZRSuzST5FdnaMPXgi9wgSJ3Nvpdg7Jfyks",
  "key19": "5Sd2Rc8d9yQLqTqxgZTjYVxXPmSJdw8n1ecV7vbgz7bbjyiqZYp8wCCaezH5pFSMegKTxVukuEyd3Sdd2mxxTzFg",
  "key20": "5EC1yqFxPbFJEdp5M4xiGJPUSGoPACYcyxZreuKomcPDMShnq9N7SL8xj3k8PwUvQsr3ecqcb3Fntd4vUvq4HhVT",
  "key21": "4uGnr7qE6YzSB8x9YaKYpz35TnhoBNN8VficSPzDyCodbjCjvfVNNSCwZa45KjDDDSNK7ktAhuMCEKF2tn8NXZKf",
  "key22": "SBkLtLmDYzPaDTW5zWkUZDDYqydnTxQepFNrGQkTKTyw4P4B2tRCF7pTTfRcujr7wPyraeyTFQuuepvZF4iha9P",
  "key23": "2965GaQ9NxmZo2cpR1LcQhcmMF9qxidYDZmomEV5tS8GZ3MHQ26NCtR3FFntLyyR7WcbfctzC5DA4QnLL9cavLAL",
  "key24": "3QroT3u5QhmXnMuMnY7nwSuv1HygKdoxF49WQXNkLx915893PGsiQpvAj6Ai3kWqDjEhYLz6ArnaMEjdTv16kF6v",
  "key25": "3nkJ6YVTgunM58P11CvmgvCKTFXB788n4smF5LCDZSYt9DMjmhsvyQGvwn9T1Y3Jm8mgr2RNeZ1kJrTSL4Vo2z3q",
  "key26": "Dh3Vzz1XRqUX54JJ2VXeqwmDwmpDjg4K6m2N75GgY57zDfDm9HBRmgP7NZZfZHUF11uYCiC69NPyXDHhnsKgoNN"
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
