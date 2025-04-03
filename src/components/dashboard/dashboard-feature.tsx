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
    "3Ppd2vVBijaJA5g52DRP6985Gto517eGzRd8v6AvZijrkPeYHKK5BGiVAqZmxjzbHFxWf4TMFN3qQ93uGYPjWkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cbBRRAyJWExJJzedektqCLVQotMdXctJVjLHZh53VF6whqcKbsGsrJC8pP9Kfmgj5bZmH54UbD4acqwBPmKgGuQ",
  "key1": "ZUKC9m9xT7Y88ci9p9hrZtuz51acBcNX3w5iu4Y66t1oTv3MxnREGoTW3e1HXjFjJaH4aBeNq9cKL6m8f4GeuVA",
  "key2": "vzuAxFdgjb7ZeMa7dFt8r7f3sS1cRAhWVgXJ45QetmoFPG5ohoiXnMCutMa64qTKRgjzNRQuorcuWsShZ7mFzE6",
  "key3": "onymcNzmoxyktQ84SeBSRAcY3Ph8sFgsuCvP76TSKYX3fmSf8wjKenGC3t4w5rzjTsoQ9ubPzV3NMPvocWUvXMp",
  "key4": "4EuCetm56cqVUtnWqg8MHAccP9TynLvrhwzDrucEhzixqRicemj9aphmNekGmbHZyMx5k17G2a5TvWcFVMKKve2n",
  "key5": "5WxvLvGKiHiFXEyEGukx7ivsqqDjxZSMoKcq7PgUqwCf9ky1SD4TvDrpJqnMdJmP2LuLgjxwHr5F8DkiYEcjBr1V",
  "key6": "3Mh9uePZv7a5Wy561d9ijZB8sZ9nMGoLv5okpQgusX4k5FxQgXPcgvghxekWjr3x34MRV7rE3yhhgrJEKNARvVBJ",
  "key7": "NuYWxGe2sse4k6ghtrDna1mA9FPxwsisU5waq1ckHUXafzByN5VpFvmvTviUv9n2zbdKjFm7HvxACbMy1mhXj8N",
  "key8": "4huQ7swdkjMJiQMXJy9NW66KDh5KfqCSDGzQFdh3KJdMHhYDyTHkBFR1sJpTWqXBW55Z6VNLdqL2Xej9pe2CxP2V",
  "key9": "4is4Z6HAB4ZXMD6PggfyPWMsbzBAguHXm8no14SbCHJMTehPPYDF9TeLJLHc8tbc5yEtZXCngygCE1zSYjkqw6n8",
  "key10": "nbc4S45SBNA1siXuzNPD8UnH96NEoF3B8PzqNEwCacYCtYSEdT8amsX8WyG4irxoPVxEYmqVv7ADCaPDxN6oAxL",
  "key11": "2dGMEyiAW5hpRjrMk9BFeVE6sCEAsuJb7NDSBXeMFDW1JaaWLHBE8oxVYtiTKBDfUuaDzJr3ZQwP4EqB7JkGNdeB",
  "key12": "29i2AxUSCAyPgFd9cRswV4FGCuTVFNagoJk5WNo5V13kisE7EfQeq8TSDHrxHAuZfPFY8dqCM42VJqPjCUXL5a7Y",
  "key13": "bMBUJswwNtcnQh5HTJxWp6m4kKmbREF9r1z5qoeDa82LuoMaJ62FLSC2NoqTuMnjkPvijgs2GZfPQJcWGqvfDZZ",
  "key14": "4jx39Ey1g6iWsDj6FB39j8VdxrP5JuoEdT3PGWbCHC7sscjBMdhjf3NGGZxgC759yY89mxXPBhUxkZWqLFxse9Kk",
  "key15": "xg8FTMQdFufyCiZnZTkDt4RzXxzgwicagc7wWzaYTDFHq2bXXGJm6jJfuLAWdh2mf4m6jFk2Pe7dQP9CZFkV5Y7",
  "key16": "4CWcV6tCdPZoBdNCJWCw6HcEdeSPLspmYGLCtzMZJY7h8rn5TKbzpCWiYL13iYX6sngj3zdbGthPNBLRVscoh4Y",
  "key17": "37ZPm9qLRCo8skCvZp7FxrXu6Rh1VPb4YepN5cFrVmiwRb9w6bySdrzfuVJSiZqVvsXZGpfvN8nypX4dteWesu24",
  "key18": "2ne45wTscz5ppf14AtNNDnukbY3u1QnmjAoX2pC5aYmMEVkpRgpdCmAKFDXyW6eUKzQXDRVZUdWzqsKjYYjza95d",
  "key19": "25toWYj5eioj4NPuZ4gX8erxNtNTzi3ghLiBybenqWr9fYb9DcPxdeiiaXUnj4P6nb3DNJuF6aKF29YuXiE2sfE6",
  "key20": "5sjhNNWN6Q8cKHpdR2jhuxF1KD8t6nQeoTqUh9LsWnwm6TddppyMcSEZzkYqVKHKUgeXPyPsXesPErJxfc7PQzxg",
  "key21": "5evYSPbPeBZJZYtwLwmUYJuD9HufLSZvM84uvfYqxoGroyKDp94ttQPqUm4wHBtHPfj8yEGcATGdACne7uekF6Zg",
  "key22": "4afZAikWJCAtszKvH4yuHALd1YsmwX8AE4QwtHbrz8p3PttNjnEnUVYWuP8hCZHqNEBVR7RNrwjExvPaT8QjwBoV",
  "key23": "4J1M1cvbeqvmxGcUJJrktfGWypf6sqzcU1NRDLsM74oEqmQBHFkPtTVZwCU4g8j2Wx6QMvGiQijPcMe9Jcv1wLwa",
  "key24": "2C5Xqhyxw8FVTiVB4wCUhAyoeTKQuZZm7ep2JoEcYYn1m4wDnLqjreHNSExNumQ8tcDRt9W28nMqB2QQzjFbxWUA",
  "key25": "2wdD1XLxmH46m3qnCGMFrJY96fAqM1SHK8T6pP8gvTMTqYZvdudH355azRSDqmZaEVWzFA1uC281EuoVZc486xTo"
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
