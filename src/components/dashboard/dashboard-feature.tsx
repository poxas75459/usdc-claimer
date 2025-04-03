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
    "3wVQdMeeJnsZbbQor5RV6HFJfxSB9Aswhi8ExjgbBCVt5CfvRt6GahMmU2U6ZiH5Qps3w4f8LjAQios2kGxh8KmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FYXqVgWx7d4eaz72S4T7rACS3rHJFohZ6HRWE2kdkcWXyM1Df79j4d6tVNW7TT6LdzJrt9tEt11tGEtRqQTeH9V",
  "key1": "4CbkRuHaJF2avuJ6Mqx2N4M467YoZxbd6p6WwoX96MJoDLADhvnx78Srxc5qFJq8HTShf3vNY4x5SQC734LTpzkN",
  "key2": "4mJgf81YTdtAjW7B78RQgc4zzYCKntNEFcsaq2d9i5xsT1R11EAyy5XAve7PFj9FPRbLRFh1PoRmih4t399QbT92",
  "key3": "3wKd6khh4LJSwGcmvtGgc2LEK47MguQhZnHuWX3p6P3TMsKteZKu1ysKmZYopJJ67QUzFLCfhYNLJR8m226hTckB",
  "key4": "5ZxfnmsgkfD59SScYLt6rAKUXS8Ja377m9K1UdQ9ByPZnwLy1DGGV12ZnaPSFyWQ8rDCs7Qurkm8Q2TFH2e8hX5P",
  "key5": "4pWzjMy8exowJdaeRC7d3myTGCAvZY2axThCrL4Yps8xyTRP7dgG8oerunx9asfQrNmr7fPGiF1ADj4zWYAJikT4",
  "key6": "5RDQSepqMECThHNGV87rmS5AxR6AGLmzy9E6mY4L8SmwAboKjAJkH6wLV8cN1zPt7zTDEQaZChhSk65bsxaQ9QU2",
  "key7": "47Jz6Qury2KkhCHps54NnHZu6MGUCb8d7DsLKywTSjBnYfhePg2L4NmfmdmNBNfLGEp6Q7p72H99Wr5fNxDvEJkC",
  "key8": "2UxuyaHzDRSGGSjH5JyPkV9eh2t39LBefuYDqqEKp8ZP6NudtgVqZtJpFgXmRfkJe5Jo7oDZ1rKqotfgCB95QmVq",
  "key9": "3J7mddLJcqLKy7QDenY5qzYPWynHX5etYSAjKfdPP17V3WWR2MznkqD1R9RiCr1TjT87vZWbrtoAYB5do54dea6k",
  "key10": "66dmFFo7ucjh9omqyV2p7sR59qn4ihWXRnN56oaUvr3twtbdd7cj7vaCbSuD5LyU7a29ib5B14DepmjuqtqrqNMc",
  "key11": "5QDjgxJs98zVExznLzs8KHtRpmnfyECxHJ3fGVfn4Xk3DSipnqUfFzAbdpsC7qPu7Qx5jAZiqNrvzWG7PUZ2C7Lr",
  "key12": "5P6TfgC3YNNhNfDXtFVz1jWvLZNgf84Du4HfmyyWsaq9Dxgeiex5jNp9Wj3a8vo5J76K69pah4h7mcncMq745peW",
  "key13": "4bMdw6GZqYNNhvae8yV2dwaXfB3h1XVoHfsD47YvbRbZXGpLnY5PQgdPJSMk54RKb9w9Ae2WKbXD6vG9PwSMgXTY",
  "key14": "4aCPXpMr7KpXU7KjiN29y9WrgmG7JrKTTofkobjjgSuEUFAV1AdAzjRjQmWkWGWFxp6t5MhNwzAomeZtKgwqkapL",
  "key15": "5pUNiNEY73c4aMbNUxB6FgemcXupp786RyEEUvY7qvsW5uKvy8maVmvnXxXrMfboKXnfdmtLM3hcEe8zzZs9d3of",
  "key16": "4QBbSRqVTkVgbr92c8FZZwHWQyiwi3ijC4pXqY8FxVKqeo9b5DSmX1vCrTYi5sLnmuuVT7BDxCuTnpnPYMyMi6ZB",
  "key17": "XCXsbmrz6ACVeeZP2nwJT1yuGTvvWExp6DYXWZUFJz8H6P8PUctsSZXEdKwEvfEAauTZvAkqjMtVy7yoQ6hyCAj",
  "key18": "3UG3eeBYkCteVbSyChy5q929fApbiHFCUNfyaVkfq4Hc9xKQoxU8wmPob7sEBsv4uCkL6d4NJjdPAxZSC4ZWpYeC",
  "key19": "jMtq63a3tAcqLwfuHiXqZ5BK6bRZ7fYK6mN4AD2Gfe67nBJU7D94h1pZTieeghYihqrSiSGHuXvp73ZvDhp3aCm",
  "key20": "5dwrx9yjGGSAJLa92Guit9o3CQR2LQMSqazjisHD7mayFWbc9MUxaDoqGpWn6WCmYzrKG4rrBk25CxypU7TcVFWT",
  "key21": "5EJ7adbGwc81pRTwtHNpHQuFP2opWcDdKbi6VC8s6E7msBVxiEYzePRQepWfcWxEFWo1DZYmJDCV79RhjCJa6NLP",
  "key22": "3g1JtjXZrD6hF4Gyq5iCuzSXgoGtkYPvmrur7GuX3d4Ya2zT8HVDbFkRezGDBbtxDmWLJc5XfTcU5bjSQ1XS8rxq",
  "key23": "2BkmqM1f6BZ3jx4KmQhZVCwopqnVJHtWAwZU6328r43Ra3BLhuc8WpDAF9goMCqPiES7f6CUPFaWSdLFizACKcN7",
  "key24": "4CprazqYoAQVtCgjYciUia6hw8HwZzw7PdqJmSHMgtwA2BgXDJxXpK5FrQQBZNXuzY8JsXYvkMQWqTjSAjo7CtiC",
  "key25": "22KKH9MKeP3YH69fbvCNrjrc2Adds9bVnSJRtWUTaib9iivAB7RgHpzgPCWyMHE4pKvFEYK3MEgZJJxutCeB5o8J",
  "key26": "5NATpUNCzVR7RTmQsvELKRF3MeN47tYbGZFcn1Kq5ZPzQriQuQDCBbaNJM9ATczyyZBsbvMJDaGCAti55UcEzjkQ",
  "key27": "4MBeDiDvW56T3zpmcYsphKQGcgyThcuhh9ejD9yFPiDqwFKtJ3oifLnU9To7tyLLTp33ExS9RhEKyKUj7GnUv2nM",
  "key28": "3oqig6q5PSo1hUQwf3BPWYzghPsZepBeCSNPNca1DzHVUmwYKh5pue8yUABJh3uatkX2MDqwYKMq6JiMZNrfXyCd",
  "key29": "67jFe5d4JifJZq5bBbpENduaUGHrZJpVxwJqGE5uvCJTYjHP8ogwfBMcR519VWdfnxo6xNwTXWcs4Y3r8TmJ88gX",
  "key30": "UfmSsiDskh79XvFdVgLjX77wn8iGbij6qPP3kGLDmcEi2oekGt418eidJnPqNP3Gs9igArpKwCvgBmcrLcVNHVh",
  "key31": "JYzWXoF6kFrfXXDbDYFJTo6SXh4ze4u6gubj46fDxQVVwLQEyiSLWQ2C1UDY1XirBYNboxuN5qboMFYmYKyV67n",
  "key32": "5JS8s9teXcgYLJD7mwm1sknNzeN5yrDkhjHquA2P6fZT1pxpQjDYPPRXs292uQsPXwZGGJYowesfYaHAP8dDPWEh"
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
