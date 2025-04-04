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
    "2Dk8v7ocYwRAjgvsXRttjob5ptNNicNJVJas9eQvtuc9etzWRfpMd1rBvMWNKL1Srs6fUybnkq3udo3bRWvSqMcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HBXPJbtiGSXY8VsT5XNe2aiDKzb1SQn9KUR7HX7rrJjM4zAgU6TJM5xY4QcVKtmkPNLmTGw8tHXmwAVLSw4ZKm",
  "key1": "6uoYvJinQyMgXw6GZypuUsZ796BGMaqnzdCndx7k5FhNYTeBGP1fgi9Rik949Spc75ZuyaKgXmX5xbZjp6rQkW4",
  "key2": "4h3QkE9YEb9p8HDdAgnsjdWkrxuBAMLdcuWRZsFoUHFQTY26Vmqwb2hmtxQGxfHtETTXuZ9Zyp8WS83A5RKZrLyn",
  "key3": "Gmqn9ZTHZJcU5Hp2GErZ6vfrGZZnP4xQL2L1kijvbJkPHqbktKz7TKbchiRBgRqja3MKM25iq6Hb4idfwyx7uiB",
  "key4": "5aNLfYfMDSBrp1Hb91hfJ98Gmw2nqLEyvQk37pJu5grsSNpcXUJuzUWN7AjsC33nQez759oApUETzB1Vgb1ywk6W",
  "key5": "4mmJifo4pzuUPF6aLN1fMwWC3QnB79VQZXQRmAmQnfsp3ddKQqVGZsroKCwDDh5BBjYqKjqCxmmcMEMgPARk8uov",
  "key6": "4Wmc9pDi4tiEZiEHUcg2BjepNV9epbK2GDPrxDbcqJYEqYXkJNErX36HCAPJ9LUHZ5SaeFvG6iQaY3cNHV4W3Srz",
  "key7": "5HrhoFZpkMPk759pzxa6xYhWxCgV9yaMuSsPomNPM5LyDxyTyV9G6bFpF6AMK99LWo6QsxMmeX25AvMEmAirhM6y",
  "key8": "3viywtvhwHqVXEPyMcboTGBbLeEUF33G1ypx8jUZVWfNAjt6eFhwCxTvLUzwt5Ku6ZmtgRSsipAWmzd6AKkSzFTL",
  "key9": "4GfTFrwRSwiaf9FQBkuP4L78jg3tQazsnsraoY9YUj4ZvZvF5PiD8CWbinhMM1BTq6p7KZbbzcCkGURJz43vCeDd",
  "key10": "5vk6yEE7o8rX15fN26ULKGY3j978BqsiajR3ZCEeb4149zUc26C5AAV59wpMV3HBkMsMWFCYCGtvP1Arwpx1tBPL",
  "key11": "4noQ3T5Bug1WRMLPmgptzjPbY2bkgGPwBD3NyqkwVyMKHHVp7u8nhUTLdMBEHr6wvpfsmW3odMsPdkeooc7W7JTT",
  "key12": "61ARZNmToxQsgifirNxtoswspTR4CqAvQYhmRzBuErYUMm2cLtVMZxb69W65PwMyYCufi7TQwcZoce8ZptC9Z4sC",
  "key13": "5TRmuLPHgSjDRHHBwoWsd9thBHsXsSLgEHbZzfL6HMsVU9aT32LydGDLTTyvmiTRLuvaxkf1Ej3pWEkc56hTwvJo",
  "key14": "p66Q4xX7qN8sMPWJRj3QcH79SW2WeCLqsEbeZy8ghD5LvxfPv2ZCKSo1TkDFZkKR5eEWuMLFhGZx9uxAaZ7XACM",
  "key15": "3fjfjQS5gLhNrxjYE89keVDhRfH9Di1i1QwGrcdPVHDegcHqxBzCRgDuZfti1CShiNiWxaw2a45CVfJx5hn4bigY",
  "key16": "3Jsd4QPDL7dpnfFb75RKQmwnirYLSqdRtX1hgbn9cMshLTUQDvPpM4FQ3xRknc1QHLBbqVX6qp6hZ1nNQYWKDPJk",
  "key17": "4qhRihEB3bNjQDN3y13vwFYmCqzLu3QjdAgeV9FAVaKMTiqF3nWUqBRNt9HhgrFCh9i6FiG4RzYWm9wvgQ88hh9i",
  "key18": "aStGycSkWSovg4ggWFL573k8Yxcnh8ynb5Khd3fBygJhxjmjiURZWUf8XhvS6AF5ysj9wz8ENHLVHqCTALExkHf",
  "key19": "4vCVFoLzBm3j6JchLLEZy5w6CSwa1tVAJPuLmKz63qZwnDFP7SfJuBEtfz6Thp5XkFnM3VY9Z8GCGxWLKXYNqwH3",
  "key20": "5vPQXwvxUQiNpWYGkPJWKYF2CpddNBTxTGfcoopSEFZRMWp3uq2CggVDGoHRmGUX2zB9jVUcyigoF5LKBwDhbCQ",
  "key21": "JUAK3HBR3YcCsoFvFYrtw41RY1mgCJv3RoSMvrdLsTqrY3RfYu4kSsSQ2YvmzSZdLw2zh59YTGPiFV9bL3h7TBX",
  "key22": "2PPCJU4HbKKHknYx8cUUvDsneNgMymeKm2qqmZAnCNMo2WWTkfXXkusPC9B7QpLRXsjHRS3ci65QNiYMQcY4mm39",
  "key23": "3kjmbtZ7a1ydHbbDJytMAmGmevVQi3REPx4mrx7sjLPaZM22LAmVrpTZ6mrFaSpM29Ya2bh49PkErLJFZWhnyAQu",
  "key24": "5jYb8Mf8uZecgUjDpUXmd29KXXSZ41ZMWM2qGKgsFLERqRGtEaWtkdf492AEMoSAeQ5YQgDo3JVuHdDhJrk2iJUq",
  "key25": "43aNGDGSiUxekvo6vanm4cmZ9goLbJNku24eieWwtX8oF6VJjS3vjYSHc8uGcJcAAdDreuR7rnPs9HXoqpR1LygR",
  "key26": "D9dpFp8nJymsPMokZLFLh5zST2WJPTHHpcA52QbWJNyBXJEgfADJNhaAQPoCoFpX1pw8JoSSMUTMysw6Hq3Uk4L",
  "key27": "5gG5EF58WBELJtMR8GWBtz3wZNLA3GADuxxMx43xZQJxH3FH1fCTkv8Xu3z8FaaDDi7Dru5uqHCu1ek4pGDQDoYM",
  "key28": "2ZHDcmTyYQPtuVZwEWuaoUwS6ixp8V1Lo5dyKgFvnF5J5YoHkbYzW8FKo3SpjAMe4Gyy1rQFqeLnK4fJa1AVTT6",
  "key29": "4JonqiLz1Akfmx9nXB43PZrMfjsgEAH3sSQFrne66guAgtdkHK7QEtC3pfUf7CtPgP9qQsRdeeFzojbe2oQ1oojq",
  "key30": "23UT57t4N6SEAmVwxKKd19R7KUVYsdyQGJ5EBMJUp5ZP5hun7PwRwdE4M58Lowk7wY9zhTFvudbCvGy2VRScTPSC",
  "key31": "71HRT2B17NnVVUK3wH54Qi92RHHVYYQHWtppEkqmjisw9Sop7kLgjiaCnRu9GxhHZ7XGzBdkRsu5hky3uUXLT51",
  "key32": "3iqbTYEhex89YqbE5VB1FiDbqQeq1m3hvGY4sAiFaZ6kzFT8WekUFxJiH4soatcCQzsyHF4MrxEYt9sZQUyqLxoH",
  "key33": "3Q1t8Q2KuJxbquSmAnoHKk8KDJuLJDb6o1fHKdDrGrWexvFfABfMpaHfwthiWdmrAbZv6P1GAiP4o8QrmzgGCb8C",
  "key34": "4gnrwvN6ZY5tSV4jq5FJFm3Zqi6DezsLytKmjXi593Qdy52NLFvnPDhFzViWRTcA2xEJaSLSvC5TFhgxYkAooFg2",
  "key35": "5C27MsQpU3VKkGKeQjdLidFKJFaWUK7YQqoBcTPTC4CQ6DW3LexWzmQWBZSqspUJpt7a68AuMPPYBWZNttbDvJPf",
  "key36": "49DUM9yiUHMrdDBuidFFJaJYc8o4aoFiFUGjhTpuGgj9gwdyezqarbsgSZ2dMZ9e8ceHdZFiFgXQDMviFsvb3ZUq",
  "key37": "5zmtZERgjPgz9bbVCAUXeBb6LyxXUQEXxg7a7nKP1G3bJ2iuhckhCqJAJjqYNFXyZHRwpnCo3L9Tj8szxPAGPtj9"
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
