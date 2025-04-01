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
    "2BVa9LFPScLLsaYBF7hKtshDuv6agmbTSFXe9nJgTsiXHwC1wEM747WhyNvEHDwWnXdMjYXE9Ut7jfkJoi6bniuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Covgws6JG8sEAEcBVq62w7z1cJWXeA8YCMW184zGXyqUJfagJq2jdFqugKCtMRTrvzXvrPXeXiA2SoNe173UpwX",
  "key1": "4WGSWt61Z9tMDdTnzN1qGSJciNJ7tQBbViXEJQ8kAgocBoFUKzjjUGD7nAzg6whazyjVgqFCgHT3V28gdjVTGqtB",
  "key2": "4HQxNMUewb4YiihT7B1eYacnZaMR2tquY94KoLfFXTZ9FmMKFgYiymcGoG2F12uXuL2awXXUS8wsBKGhS75gVfzR",
  "key3": "25GWGPw1AWpj46YdWAYtWiBms2dAQeyTyWiLTpBGoKR4HfpGPcKvHi7mTu3WLqnqUu2wFxv9HjZqBKXv9gC3ejAo",
  "key4": "57CEwWnjZmSQkR4j2p7tzypEGRQhpNXd2QCLNieCZFc1EPH98jUHJeXGvaE4UWAjP5cPiTRT3cWJGxC6MFhMBhng",
  "key5": "2XV9GVhFmZ6kxfWUZCnzkKrhHSozy5whsdxVgFrQcWprNJv7h2AgFAuANyExhngsapqDy3XxXDi1rAyDuZBbzsq2",
  "key6": "3LsdusEyURLjfUk3Y19dc7p7oZg4Yzw4zp1brRA6cYiDspSn24YxFStymUNbhd2fFg9b4dNv4QfeiRZf31yL5VxB",
  "key7": "2aGb8edYRJCpqXszgsP1nX6nQCWd3moKeRgUxc1T1RZWH9McZPRuKRA92dNgNNcHKn913RU7KnpaoANufjx34HK6",
  "key8": "4A9GJN8zc6DuBJwbbUycWV9bvPao1RmVZr3HLgCLXSSBZGtxgTaLKwuaboQhVGjQdRWfXfbMEHitiocz7djJeZr6",
  "key9": "2Q8WYTNNojE144rwqq3tJkZdCvid7sTrGf5uEcqdF86xMi5Hn1n3tyy2VCCF6xQaGe5ReSoCmk6gp6qwR3VaV7Ut",
  "key10": "61VBDiNvi3RWD2idCxXG7pAtenGJNcmYZEom5JUaUpNXpb9Sz9fZmiYnugWj1DB8dh9AUjNMmDL6PCaVvSGYBnZj",
  "key11": "WvHZmqDFt8Tb97e1GfQxbi77U8ZTVLizn3t1zXwX3akuNSRDast69UTQsocMqBBeKUL2FjBpRyx8JGzBB6UjzpR",
  "key12": "oztU6F6Mykykai1UwBqXvDL97e791SRxy79A2v8ZtTXP8wiyc4KJaBCbjb3v2iqKDSUVPztGYFcDVag2wXD3miR",
  "key13": "4fjWehiLP7QcGCiomk3Z1sYKGJsqRFRzLFnUHiWGoB5jRZREfF35XY2TphhiNtdzBNfLUyLDWVZQCvxja1c6jDzn",
  "key14": "5453BEx8Eod7F53jm43c2F1ScHyfg8yYpnTaQaFFfdrgXu8GL8BQZuStuG9AC8zqSbyddFUxauTQvYx9DGJudKFW",
  "key15": "2n57wmGcjmnL1DqtkqJrJESRRu41RNGFdDSrkqGKBvGFS2HibqKqfDAfhYdSbB7PDN1RN1dbgQ1ruNa9Y7nZYZLt",
  "key16": "5t43QUiHYrusx3SkveB3XfawKQujxNdY2giJPCrvWb83J8PMNp2PmvrvjXWiPm9dYvfyYbZ7uqc7m4X8qjTqhoiK",
  "key17": "4McPzXyeC1iw9MxedG13WfAFMz2EzdF6zwBme4sxFP8tuKYjdVqUvQ7naMdrjAorBPZMzX1CQQB1bM8AaQRSu2XK",
  "key18": "3XZFSBixfqPPxw5ni2XVzCxwnADqJAfB5CmD6QERBoMMEU6yNq1aKAPwHH41Hj4XPQCn1hKZfFoQAjqX8jcaW11k",
  "key19": "5zYJbEnXRmpRVev4TSVnPfLk3FsKbGFJqQkQT96mPYEuAgaDdgdjbEjcYDF7KJS7MwUw8SE3HEWZJz71h6QR3Gkp",
  "key20": "3ifH9GxyATaaNG9dAfr3oHqub8Mb17NK4iczgmPyDDayRYksHSW12GTiu9EJXb236ssY4PuFJYfVZgFP93KVBAes",
  "key21": "3iVLsoqgLzbLc6H31vjR3CH8Sh34xMiU4ZMNvVr2ffCgocuwK7KZjP3FBmSfeFNxJkZvohdB7RpvaFVr8r6ioQky",
  "key22": "3narb9gLwZtQYAS67qxKeU1H1yTGjgddgxPxVFWL9JnVhJX7FTVE9VW1dhmAoPDUoKuuYXzoh9pUDE1sdmhHmFN5",
  "key23": "2qeJR6j3shQd4jDp7wKT9RRoBiVxYTeD6o4Js2Z3kraMAJNDzMxLREXP9yHgcq1dyQyupKhh254DcQFdrpfQzi5T",
  "key24": "3RdKsZr5NPBVtR1TSquLdf12D3TQBigYh86cfqR7HJTWbthV1gRYybFrSm59WbER2dGNYrTJ8yNA5tDih8ckRDy2",
  "key25": "J5S4CeDXuJiD3d1V1X25NnQd2LRBZDw1MrKACjk7N5DcMUZzvagkqJN3AAsY9WBqv6r3n2oTKPBhhxZxUpe5n4U",
  "key26": "56i4cTUTwksbWifb5F81kQ6nE2waThi9VqW5kigrvFZMmXugzMZtM96EDiaTczrGGPEuAKJfe75M5TyMdF6fXMwT",
  "key27": "5jyxPoucnkHjMDg2pXuzzAWcK4aZwN8QgdF7gVyXzBpqfGC1XgYLEkbLkdY2tL7MQoqdjuDLCyEeuMXNRBag6rUa",
  "key28": "2w1srqwPv45B6oP1f1Q97kMDRxkYszZNM6dpffzCYpSs3MAUn8rAgdBQew8QoxrukQ35TMeRufZjYLvurFu2A68B"
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
