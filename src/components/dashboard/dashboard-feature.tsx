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
    "2xgHcrTMsKDbnpLb6qs1SUAp8WSCP7P7Ax2We7B3dnooCcSRjAqRjrhpwKs1nQZ6BvbrTJ6sUdyUQ7rJrfUKroHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfC6hTDsbJPWA2xFgwEnVv6MkoWd9gPHZHnUCJwP15ZVpBLr7UjwusdqDp85mTgHVtqKCwyDwTUm2Ju46tJaD3o",
  "key1": "18TqwsgUyqyFdfSVjbM8Hm9KPYwuUasJi3PQjw54bvqP9bCRL1Uu2NtNW1NmDEmS4y7cGxWn6NL8rZwyjwJEK4w",
  "key2": "3fnMyBxcZva34jVeTemuQzZXGwJ17BKBnUwWzAfmAGiN9yXr3BjrJhjKSGncWA1ZgxQhq9iMb8FTn8LCM1Q5Rg8A",
  "key3": "WkqSdKhpy18JdpabsFZjViWuzrr9vsSa69ZuQdVjE4J6Hg1WhNM8Y54ASr3SDFrdu5BsZoV23SZxLXcCM49ddvD",
  "key4": "SeSyuZMYZAQtBUxFZCZAcaNzxR1Zuek4xFj3pKJf3zRyHEoVxmEsjNtKwyQzVqeHNtVyf16WtTYAWmuats31bgF",
  "key5": "4j1BwRXzJmGvQDSGmc26pDsnP6B41eqn1QnQmoaUQ4RAEh35gasNaWUNHFQikETRqxsAF9YSk8v3EktVWhCA1sr6",
  "key6": "2o5R9g2N6KVbotXmXCMj7Pvgj85iXsyUv33U5s3utUPkHBCkNNDJjHuEEmv59SWDoQdHuzB8iPcxpgWQbEVYGJxW",
  "key7": "4DJvGWvR14XLpRQ4gKBqewDB5yhvPbQhNjpuramLDZpw81zcEjibDYRz6TSmTAxEaPgaE32tyoDLKjgoQa6VCUWi",
  "key8": "2AyyFsF5aKLAS9CZc9TwsogtMfbiedFFN1c8NM5rRmA4RPVJzBgiBMZhbzum88GMXdTUvCqDq2NCdrbBc5FJssSN",
  "key9": "2gevNaJE9gRoNGKgyRxDHqG4bD7xdYqbiFFCvCk3K96xVw2jjsC2vUTtFEAcXZ4wPuW76p6cWDVvvZD3ZwwqNDRP",
  "key10": "4K8st8rvFdtRBCG2ySPzW9xi8kB4T24W2A5RbYN9FLDBLAEsXDUfKYeqASmTwVHNB4WB2kuNnVXVvQGjxeHutdky",
  "key11": "29S7SH2Z8bdi978otSDzD86QLE4HpZpfnbyhqnKKASM7BoGdWoPmSTSdhqH48D4KJur9ogS71FZBYaKgn4tNwpnV",
  "key12": "3s6yKxtN917aaa2foFxvVrnhQTJSMcZG6o38y1YWXh1dhUBQL3tBHAuLcmHKSxu1Mh6eXfVkqUujS5JAU7rewt5Q",
  "key13": "4qUKeXDkepfzdxYmhgZCjoG2xoZ6STdWkHUqM4ZUCc9QPLx4h8Lf7AUJFzrBHSNrEYKMWujibfqcCk1p4Wmwqgqa",
  "key14": "aToFQzy8xCmYYuRmpWd5g4Vwbu1V2vDM5oFPCqMXxyUNJthKo6So3BmcaWFCaEhdF5bocbRJiKvAXqV6wNA1zmj",
  "key15": "y8mAUAcefHxKDiWGheyaHwAtbPuRRuFssiMJXvqWdNG9rifZyY6sFc82zpdbmZueQwvVeiixSZGu3bH1zzxpQRG",
  "key16": "3pH49DfeUxaz3vY5tTCrqwZifkBdFYCasYYFnWKxfmsf6u818CiX8VPwYKxgYinxrMsd57vWzeP8HpmvtzqovrFb",
  "key17": "5aD37GubKZ4aQbJYtj3eNGTgJJfEcbNvToS4GqiBtHdG3zDwMSxr45qGaKkPxBxWjjnjW3VG7EvbdeDFF1Rc5ydS",
  "key18": "CzTavWeF8HKm7PEDVdkXrE1CF53HJCaE9houbLFwzCAeqbruQ81ud3BYaBC6ztidP9zXzDhW4UGUSLvChRzoqLM",
  "key19": "3CFfGaNv45PqZXRerFJUfBnUSzvLmu2wQzzaCS7uERdQ7uFz1WdhEdzUDFH8odpi62ewBKEHZJWWrwpP57QDBfwZ",
  "key20": "2roVvGuZTA19fpoGWLNU8iPhF5u5UvDfL4tN1AYDduD3GFC8CwQAHB6KPcm9uQgNRsszvfDjSp1iiFGRwFn3TA3w",
  "key21": "3c4g7SCYkkfPNZav5s1kBpnwMpEUS4qg6Tww64czuWzn9aQYoR3gz6UpT7mCEQ1QnbsctNRN9VsBquvrPpm64faq",
  "key22": "38mBei5qi4YxNWGpiMx3GbmdHcfbUPVJc9pMWHL5qeVbQaTXQBvmSRt8z56Uj9dzjJyLoSVbqMEt9p1FUye11xFi",
  "key23": "3ZpEysrecGM3aQFaw4msxK1UQG3wiR9ZtbK8gbQd1SJ5uFU5s8X7GqYXdautjUme4CWh5nAoTfuYnPXitdbsfnKd",
  "key24": "ZLGrRSPxuPFYmyXK3WWPG34uMkXUgCMKDMw8QrL95kfMm2YoidhQ6JyNyDQyCp98ztVSjAne4DG7zD41Myi8Vyu",
  "key25": "4qgumN6pbnxQMJ648LgkxDJtkBfXDvEFuXQKhtdNZpomNoTBViwzASB98ti598dFSujMCiFNqYQwyfkzCVFVMAv3"
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
