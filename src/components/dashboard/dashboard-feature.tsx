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
    "5YqxKKfmrGXffcTCRbjc9UhLB4kXMYRLD5GpRS5121KxZo8LFzG1AhxR63GaK5nTV48oxkr2tLDBNdrXAsLUPfom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gEGy9aUqmqnPs8tGoDk1YKXEgV2ZaDNVczjay6a3XvfLFkiGiSJFVeguxTUzM5w1a4JxmJpuAxWuMnT9e5iRwbw",
  "key1": "4MbgJCmjs4V9aVQqQkvHTDDUQhnFMsqSuFYA2vUVoiktMUHHdfACXJkyuE9GgHABsFX3eXifE5xjdz4JAiRUUQ7V",
  "key2": "5rJMekv3NeVJfA48UGUv1FoD2JimdHnMGxgzgud86h5q9dC62rh3GU1djkf15jT1LQumf4ygmrfxH34YHNtw8iSu",
  "key3": "5o61P7kSN8cCi6HqGysFW28353H9CvCPdm81h51MjAUQbE1s3qMQ5HHAymqrt8ncV12mqSYRkmK2JUB4SFgrvzVY",
  "key4": "48h3pu7NSezYoCHQ3UEh4t5QAYqbi2jw9zERCTfLiGwmRjKaEAnHMbmooU9cvyA5bkHTp3iw6RfZcbZokgazaSt8",
  "key5": "4HcxhjLsMtQke3nPwda2zeREWEGmqWQboQ2PQNAK86cZDj45et9fuDErS7m8aA22tyByJAByBErrKtk2p2zqAmv6",
  "key6": "2JTJyhxzLpzEN91ctGDvRWaxkupk8qv31mTuHzERW7kzNNpaVDSFDvQdsYEyDW2k8tf1Zk9SjiBLz9b2ZLaJxY1c",
  "key7": "5r94jX4JWmYx1Dct5Qq88cHGYzD9vpXFDTwiGZCSozrAMW9FwJXBTXHH4NywBeF993mA47k3zuukRoREDPMjm6ag",
  "key8": "ZzLVp4azjdZrQD29sNZasFs4Ho26up7hPHi3sByhBSvANvXSknp16yXDZB8igXP8JJD8siupUeHCHSJurLZw1mD",
  "key9": "5k7bcckfow1ihTW7EUuYK8uJbBHmoj6cxjqztkfdEPVt4qpDMm9niPCDdqqiqSoPPJ9fjgkqgoNKAWPstwQqHztC",
  "key10": "2WHiZmnSwDUiedmiLBkjUrUyLS5yGogqcKPqqTeGvu3foss7v1BphDdAHEWH4PUigrAkGG3UHyoYXBi273or6LtU",
  "key11": "3wAKzBwarGzhPuCaxtfdDrvPkLQ4TCj7UZ5k7C6No5ogiYWUMxD74Gu1WgwpfeGLsmq2iChphAVokdH5gDciBEuR",
  "key12": "KVxttQ83dwbi5tuF9Y2cBLmBqVY7PqFpMrAnWE1vKLyoQeXkr3GXdkSEHdGwoZAqkiX58dvWAcwDQXrYQ6nmsL8",
  "key13": "5gZnRKXPEGLN8aAxCYac41VHq8FrMBRDVyDhij588CeDhukLEFnNq6wAdGwaH4JCZjezKDCtYeZAnFWpibwxiPcL",
  "key14": "SpDqreFE4YiLM8qCEjkDFg7AxazexzJJRULggQo6uv2TTeYA1BkvvWsT8o6e8Gu12gkneG4Wedgn3zFtT8GoCwz",
  "key15": "3wb7PVWKCfrSBNLcUD5eUWYmiAkf2rgF6hMYA1JGJSzKMgx7QwF5jLzFuPdQbu8j5VXrnYHdY3i6dbbggJLzhvhe",
  "key16": "4Ro1ZGBmqWZJfNry8pRzHtwebGSXawJ9pUyRiXgiZAK1QmZufsRmvYvbwpqJv4ezdyG636ib7fDeXTTqeA7DyDQd",
  "key17": "MFkdYQgVDAwyZWBoF2cJ9kDk7xaT7xQUCyjooXmDgYatYaaVbwZsjgoLQv7GhVdgsTpULFJ9Yk1AXxbpSirvP3F",
  "key18": "5QuJijCeyC1GT2HR7WjPskCjkWEXUsgkWNRhHXeq3GSighRYvzmgK1nkzFtEmxt2h5wxFmvFniXDDEk4yp8kbZoF",
  "key19": "5356LM3Cc8MNja7DKiDXTVaWnkdWBDfCddWvgP8cGzg9wRn8izBfh2K2TAN6QiMGBqwaxNYSiAUvBmk98vq4xPqD",
  "key20": "izdfrhg6K3gXsTPfaJDygTRvxBExZGnWGTRP6KzCpBdbKaWm31vJNDTNbsFZ5iHTyv5SeKeXcCsisB7aS9HBQFb",
  "key21": "3BSf6S7UkNqwvj1PtpBrEdv3i9cF3YoqkNmQNwNaPUPC8YaBZT3fobYStp3gPMVxpRZVBJ11DL2eiiCmJbwUCQcw",
  "key22": "4fkNquFxwqm7UeHz8obUmheFM5pV4XsRE1aq79W1Q2JdnDEYK32xy72z2atUz7Sd7zS9zQkDeEaQP2VojiAipWi2",
  "key23": "4Dccv3c7369UFHkWB7MkNCYcbbqq63CVKgWnywHLEPAXMMCdLQtSrrfpF8M13MLYhd2SSLneM3759M59xvfNuPRB",
  "key24": "3yf1LuRF9iVSpmuwh1iQGjP5RSu3UMogpJ5TPSVpEh7pYKFZqDPtqS2RxsESDtkpVqfuJhsTdMQhdz14QhDkAgxS",
  "key25": "4mbUnJ32nkKvYS2RR7ZYbmZB7eF8uRnkBaF14hsmEPHmNDDuF8nK27ffMTRrUJLET47JwDgNBZm4MXssL1jDP8hR",
  "key26": "3ErV2RgRPnomPSiyacnbfGWNNm6WCBVpNrTdcyyquUAP9cLzCWTZ8YxbNTa1KEiNCKuhT2XR5p1cxv5zcXWFrUFL"
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
