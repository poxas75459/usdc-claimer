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
    "nyuDsivNnoRaBtdAwGdiGJJK9bRdj6jGvKUtJsfT7YotSbv53W4xnJbvBweeJ4SWc6TRtiiJJ2HPiaAL6CNxCdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R5bt6Uyg8CPuJDCkNr4pg1dNAXFu7hRmTJL1HHFDkQK1XN5NVe7bD3uUQPkTaY6YpBB4bc4SCSKWEiXVZ1pYYeF",
  "key1": "4f8vX9j1WCcRj5s9UYf4iJS718W9SWTRZk8UEwSZjWcHA9RFUuormeWb4MiVYVnffiF61Ro2R2e1vjik4CcijDfM",
  "key2": "47DrnXFAaetbg8kLNF1HXeyHswVLza3JngpNYtLKkARWvxaAvCUo6fRQmkvmBqFAspiNZQ4ZS5vsaP5HwYqow8U6",
  "key3": "wmxgfcJBxu1DPiBdycdtGwyeK7FoEduDwjUEbTSpS6HHcUfvMVKGSMj9vZDkWZeLqg7WPKpcuptQkRXEvZxKkJF",
  "key4": "2YCLv9c4ZrVacn3uhXKLQsPHFRJAmQPUrH1ahg35hCoEGN9bkDPPBBFfkHtNB8F42c35Ruhu1mgjrkZhNLAaPUvV",
  "key5": "4zjFgV5i7ZEXBeCa86dbHZiYJ32fMHLrhFHGJJoMJ67hHpHf4bb8u4UWKPdp3xVM3Ez3RKarNjuPtsy8qpdS1u4V",
  "key6": "31F6hsDqSRRfkoT4Uz65NHLYc1YfScmJgtbaTN574g5Pg9roeWh57M4KMLdsRMWuZzaKkSenKoDUrTA9h4BZoKdY",
  "key7": "Y7DH8LQtqFyGiemhkAgfLRHpAY7PmnyBNJwcwVEtHPiPgA6smkkBiW4ZNjxAVKYtfS12bvGNFb7CP4JcNTvMnRK",
  "key8": "4UeciJ4WyoiKB1FBStHEoKeCzwL7gRCtKP4VxqaamHFdS7iochKtGhYa8tVLXbCAUz2An8vAzD4cHYVEtuVSr4QG",
  "key9": "mrCBFjuHVbkD5GgpNTaxyrdH8oLsk5yaGmP65BudnoYq33NEb45H6PBxZxARW7LjoDZRVFw1qmKY8GCu9u6fE51",
  "key10": "5qEi6NKCkUCNhBkKv2fk42qTF6pm11TD8yfHHvfvDogAmiNUtvX3NpHJtLEbp4zFhsHE2LLTHocvr4WYtRTRv9da",
  "key11": "eTX4kJjtgmov761Ytnt9vt1FotWPWNPUvWqZTSiK4ceWhn3VLqQxE1h6EQfLaVC3gzxU9m4nbJt9yRpV6svaYpH",
  "key12": "3PEJjEQ2kf3sk8DxMckkM5Jd3jxLP9w1hci8ti3vnKKEgLbvzrtrWjafLNMo57hqxxhg126zRmBQvqy1aAUSQCuL",
  "key13": "5vTbPye26Wh1HWQkWqFH4HVfceFUGHNk4iCvUSsRJrng4vbCWJuKtQXTQGQ4EuDjXhmznmbRe6RNxH1sCYQUh2uy",
  "key14": "T4TqSZJkPq2K51fSbtYZRF3kTvbVgAmgrpipqr7gmbzMzoj9rjNG3HzirfkeJ5XuDbfMKEmC1yDMfSwu9phS7PC",
  "key15": "3fhTvwN8Np7D5DMEmRgR4PeuYSo4VLf1YJSEgbzRim6Mgipc3xHbSXLrVunmRbw3yXsHG2SeANfMP9VbktQEAYND",
  "key16": "5fmuEFfSgu2HJhnnyJ2AK7668rm1Shtddn3mYa1yfyf1vnQzmQ2ev3B43n2CBzskAGhuFSPshawvKgY4B9aUb8ap",
  "key17": "LBNMsKgGaUv7BmtNsjMzgK8x1eowA1Xok5NgnvmQqjKyzfzQLpMbASCgc61M6S2j6Tytg63udxiH2Zk738jhmTx",
  "key18": "4JgLUqv3xy2DAvVVg384eqQZB5axsUH71eub2d1mCqrJ82mNYJ81x3cp4MK7gtr2smLP8AWPdkyagq5U7tVBc2xz",
  "key19": "5jbq3pYoAuYfXkrxuKb4d8XaW1EoyaXDAzs4froQzuRRnxWi27vu7dCSjd9QhB4tdj5ZQUaLHrTtjtkxkPSTbRPS",
  "key20": "4DxSVx1jnwxAg7Fs3WjEHKsrA1zDkpKVg9YGqNk74JHcfnuad5oRTHQcTq52Y51WzTS5PGizpyLxD5BE12CTKQ3H",
  "key21": "mP3Ym7Cd3rAVSMUpPiXYibFRn1brgcwDEfSnLJyda8mYbnZ1gkJuzfhUjLk6jfvzQ2QVZMG5nUD6xVnQs9c8VV9",
  "key22": "5sDZbFR5QDiGoESC5hueoyEqrgeM2crajupjeVQoSiCUKuHRPF4CP33wWhDEvX6vEe7FkKBWG3eYKNfj7ZKbqRaz",
  "key23": "62yPrD9XThKFQM1ur5qSxf5YhangKfXL4ciKKwHZu3xtRZHnCVPHDMjWEU3EkoERoyT8B9CNYP4rogHo12DtScLH",
  "key24": "4wKrVupEXtQvnLRcLLAQLKJ487Nb8Lry6FQoA8JxA4mUK37Du9t83Lkbv2doi8QsH4d2YZBLjDtEShDXH3dhSBb9",
  "key25": "5bj4d6ahQvzNnzgSkXhvqgsdR5TwFYfHmupxvgoufqc7nYT2Rxud1GupGTjLQhcUcY12um3ZSXGLCBpFvWCBpX6g",
  "key26": "5carzduqeG4fYo3K2uVjn6HXwJEMisfm3NGkbTs2VBgfNWbk6ig43PR4k1rRtt8bsZFYype4qsueuoYesHJMVFRe",
  "key27": "2DfJW5x1emXke9acVqjsZE3hZTAzro4qZ5qe7YvZPPrtSy5gyctNEao9bn3vDTFbnZjXWCxYrA98GCGQta4NhgqQ",
  "key28": "gCzD6oZqCsi3XfTMXSSmYbpcTbmwgjAQ3CWkug4KrDPBvvtKhwJmTVznW7wntZdLrE6vpkMZqa9B1ixpEsfHR2i",
  "key29": "2AVt5fYVUWJTwYpYQSxggZ3mptwmcHLvmR6LqjiB1UBXTBVhEKrVnJJEem9cvzPTmP8WJD39mKnX2NgYq7AAV6Yz",
  "key30": "2HnQegDtG7pxT6VadLWMVh2vV7Meja6RBu76BS8JqsnYw7fNvyQLgygmh4Bgg8sT5Fv9g3xUqcNhxtjnxKdHmTVG",
  "key31": "JWiHugRMfvxU4VTuCyFubL4U1a9hgfirWp58A5vaZ47APCMEJiXaJoVLmfAx6aGBDD6J3VxgGSohrjNUAp6vVai"
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
