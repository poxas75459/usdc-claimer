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
    "8XTtWfs3rqni2w4UWNBdCHTe8m2gnK7aKFiMHxJH8s9afUKMZNc73zPz7RtWgFec1BDExCFcuyVqvTiMdBqedrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jT3z1h4vcSyrF2tYQ6BvSpSwdGeykwaDEwJ5QeZzqUPy64gBAh98TM8ZuvmhDWrvtj8XtRZGiF3n3js98R3BCXo",
  "key1": "nXVBdknqv2Yk5hQLmDRVPz8XFkN4ahyvA2pNxPqxhc6Sg8JqX2uMJnKkCmd7Y2SyXJ9rZvdioMAmHpjfrCoK375",
  "key2": "4P3J3Egwcfezx4J3NzUFCxiF3P59X2kkrSppWepwnhJvZhpmcV12MmE1hhTozbHXcyZQfP8DuAs1B9PCBhQNigW1",
  "key3": "4NKrhSpN3CCTpJ6m3tTp22cjoibWySwiEQqnBDQVBZQ8rS9DhAsgRzqrGQY4Y4gXXb2icw9fvB4ZG4d12P2FpgTa",
  "key4": "Ax7EootB7mRsQcZWQJYdmdxfB6XeWPq258BxTVQKH7vgNHyQLfnZu1qwmpDVHGAb73aogXmucP1noT4BYC9Dor6",
  "key5": "2xxTau8upL8Rzwht4dNDd1s6gbFL9GUMjbNK1ikLJ3pCLhQFV6YJHWQbX4kfCuhNHvzXY7vBrDexJCeKUYbQ3euE",
  "key6": "629Rw2RtyotqTbMuftN5bYGxKRHJMZ5xo5auEENEnKvZFDJSvb1jdKNLGeUa1to1C1m7BaCw8fLp47PgHKRfuRkG",
  "key7": "2KjtqGkbNCWX3oE77PoPLt2mu18azD2wGtCackbJGLKxfefxucZCi3rotiN6Pb7NhThEYpBPEdWS2rbDKKMNPBrM",
  "key8": "5Mw5D5As9LRHpiyYsLQeies6DtVvXeFcf1mfdZji1qGwXhMqTpCuK8VGSCxZrkij5H24i2ANUYNVwJqYGkrg4EPJ",
  "key9": "2AyNJ1mnGbUzP8HKQQkiw69pgQPWevMb5CnWrLcfDULNrVFhb5x75px5aE1eSznULzkQsvSHTeKnycM3cAQAzXsD",
  "key10": "3SPEbG8nnNkc3eTmHibs4jMFrCAyWMUawfszbRA3FZhhM8ywfc4GjCK85iFZMgLfmWmDtx8ft48Gc6cib8fuNz8V",
  "key11": "56KCNKWWFVXG6fYsQfPQHo2JP3ZxNMZ71MXFytLcNGSoXE9dXaF24c9KECVCtpjBA4eXabEU6LBYoRREJkTtYjnT",
  "key12": "4gXujTiLKwVg3B5yEKpgJoKkW8jwnwAqU1VuncFYJ2sxkSpHoj8bPhYBufQ4fcJyCgq51zbTFDMXogPBgA4Yyw5D",
  "key13": "5ExDyyH69Yx3tV9K3ShAXwBqebVw2cH7zxsnmV4MPECcmfScFwGZrXP77khyQhkos7bJcyAW9QPKE6NtnGhwDY27",
  "key14": "VPWoeWYXZgv7BmTGKVf4rQiTzTWTXv1bpiRH1yZaUJ5yQrq4hhZirvpJj4gJ1m1g4ZJZXJwAFw7V2apweUhgJPu",
  "key15": "3UuKAJ1R6hfEDSkP4xWmWoPDk9vYW1kJMqQTBbAFG4X1rEXr9TWaS2JDC2nCh9UPP3xfuxtdHoZQc5wAbGxTuifK",
  "key16": "5GgwcHHjBYzQ791B6JQzAVEnNRB4EoMrPbHo8YLGukzAPdWDqBN7nDu7n5putoPsCikyfdNriDK6pkFSBYDYy1k8",
  "key17": "ChZ9yHiU5ETerbTz4yWqiRgjqrRyc5zQh6PHEhBtC8voaPjqXhm7WXZcwKVJSytDw1CriqHYo55HTfJfJJtRCBZ",
  "key18": "Fn78X15rnAsZPkocNEprUcF2pdCwpzbPj5tvSYS4iMGDu4qwUiHDPMK7tFyFZQfKQn683u9KRSxKBNn4QSjCFzm",
  "key19": "4QhDAw7iDzz5gMTUQscpuMZo6KxMPsEa7vYVvZQz417wfMVV2QLUxasaRCqBPsCXpa1j16Curd88xU5xwAMYjzej",
  "key20": "2MoNJkF5bbBUkAW7NVnFnwYSGssmQRQtP23qYjd69psixmUzd5Pkqymafkrvs48jyyizMsvquSw1Z7RvQaG2o5jc",
  "key21": "4sTUGyiKj8gNRq3zMWViJgUT4EC32fW5tByAHhFLerxaFacwEdNh6oXKNR1tcopdjCXYTmpYbwstV24byYNJFh1y",
  "key22": "5KzKzx6HdrvKkgS4Uj22yNHjy8enp7JD2TFKdR6Pu61AUDRxbCx91ES1Mcswk9iUdCXiU6BbqcsnZ5nmemduUCna",
  "key23": "4ySdYRAf1Ds3Z5aWdK4FvendaGGmoek2swPZVz8kvF4yF9mfHfFNDVrNptsxymePZgYwYZFvnFbJtFrvS7REoBPw",
  "key24": "58fL1g7cWo5q6r2WXKCSBT8iZg5wVXAX3fMAoxebRuu7G2D2a7t19JchUjCs516Rxk1cw6nAqKhVdMCt8GNDMUsN",
  "key25": "4xrg5oLim9xgSG9XNnTqkuHpCfAT9JWjN3rFcD8GcHnsNhdFmS5PG4672kCzwS1vdUVsWtViSDF852Qc7bVJwwW5",
  "key26": "4q7i2Ws7N4cZPW6x5v38e1gveCPyMG4g69PW711TEK2fGayS9sM23C6v7YgFaFrzCJyyKGmUtjy6JBxpVaf8YiD2"
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
