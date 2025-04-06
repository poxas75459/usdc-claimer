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
    "CxquPDz1r4pd5YFKNaVGyBP6EuTyi8dcLgm5NP2hfb45Txjr2dNg4ciR5Utoq7Bcz5ueeqXVdvmNkxejtihJrma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38dq4nvqGmUxjEuYrzYzNAFVg1bGyLPPSnRMzHLDwHLuHf7Rwm6HfADyEQRbMafaaNpv1U6JDXbFH4kpTa5uCYG6",
  "key1": "5K5MJgfZTeUuMvMeeHhbcZAiWXCeqU1ZJC174jy5Eay189rro1bWW7FnJzYn4it28oCu36reWC4FNd7aJKJzsWsF",
  "key2": "378qUEbkXJh7GowCJ541dSeWkTHwWp7NLZrxME8zPyDvMnPMKGmcrmQAjGhQrm9a3qg2nR9dFHUpsQqyTSB4qz31",
  "key3": "3RYnwK6cukVA9LEAYvpBKz9wLgkpdhXwpC5nwyGzrj3pSUD7Wwd4AF8MUBateYgjxhVwoAuHHWY3AoVt61Ze6Mte",
  "key4": "3sdFXYmZVv8WGqcfFE1AMveU7KV1imx5iTWkou9Mbn25KHCyfERuG2hmiAaPSQTfTb99Y73AGTVTwgRmueY6kgPD",
  "key5": "37xB9m9daqSYzTn5RPVrD6oNpPYjqG9aTD6PbvUgS6JpQwq9oPb6EkAVQbjXdRjWWuC6bSYkzTAT73WkPLoBKdXT",
  "key6": "q9z1MzfsjvbLQYSCb7ns6PYhrWwcJNta7xvUkgPSXhPucVDNcNytMsM2aZYc5Seyy2w7yoVpufSAfgjj13eyWmV",
  "key7": "4GDi5hmMS9DiTrxb2A6ACKsiYoVyJvRXocwP6JVBbcFydB732zDdL8eetktbB1igncFDgjKpo3g21URmtfc4dUY9",
  "key8": "3u5hLjJSkNfV5mQYUqFbDmiNw4wsGJu78ycbLxpEmshbPPRyFDaVKy4jJv2Ur8k8WSnGs5jJNpQz3dtAYLXqXmJW",
  "key9": "4QzzY3PrSvMNQbMZZFRHemgpMDcom21uC3TA6AA9cjvdfKbmsQnVr1GY5AeM6ERvB6d2DYrXkw7X8rVqPyCC3Mjf",
  "key10": "5etZfc9E5XsqyTrY2oQAUpMqUAwypu87T8xkb6imvP3EGPvMD9aAwZq3XrN1s1U8SosYnPmfWFvhsAGv1VY1JHee",
  "key11": "TrHjHmxoR1r81yajEvLdsj84zsDcbtYtSy79WCm3Tw17W5exE7qsKoAtC9AN3GzEyaoWsawhCD3w7CEZN6Nt9Ft",
  "key12": "4cKa8FBUw7PGbQ8PxwFJCpqtz67hDZteUjrooQfuwPfAGFn4bxuMiAvmNaoUPjZjufnsjvFuFjsghA4h5UAmk9Ka",
  "key13": "4FTwftFdtC8zaUmxGFR8cnpRZLZQ96vEnsbPRZXw5ZFnB1iaR1xwrPPHSkb8aUigcUgb9HEKm2zMuRrBLGAc29JE",
  "key14": "FM9nABpzt4882Wj83cRLvpKHchdHcJyUjkMghQjmk2yEiCmq2Xowe7E4ZcidRr7FgpvsUJJMmCemGPh8zQtcGut",
  "key15": "3pvFaSo297N9ZXGtoadL2PDhA9sFyHuXJSnyqmw7AqR4Z2VoNhsNR2bUaYMSN91ZuXbRGW3fpNSLZPgjp4E39pqL",
  "key16": "2it45a8BLVEDLFJJZuPnXtexKmjL2ryrCcdPiPbFKQcYqzphgEmwAV5XQmbCFQcpbU8HqWaLrKeJnBoFozhLDVw3",
  "key17": "2d63KXpTJ3AS8csGTCRnqmJSbsLNcpa7eM1CPiBBru6265RwLktQaU3ymLhLHhmBRcuDrhEhFsS9vyyPacmYMUzM",
  "key18": "5RqQWKcE1xBvYqVjyw3RVgS6iTTR2jaoS2EXSSq4R7pdUgpCWJLfBhkx3mBDy6dBQwJ9D65exCtjybvsmR5Ygcx4",
  "key19": "u4gVMteVBESHn5e4WQrjLpVdfDZsFYGvAeXSnEBWEYhZYNBE3Fd7vXygo3otMiTynW3qQvyTx2eGrQJqeTAGdfM",
  "key20": "QFuM4DdM9YGhw7h7BcHhmHDKB4L3WgyVpY4cFWH8fmyJBa9j9EeW2m3oS5c17vmqcc6t33pQoyr1a1eFQeUjXbK",
  "key21": "5Sccs6x7rNb69CAD15AEUsX88dbi2R8gY4P5iBvSXEN3Frdxb6aQNxKdD8bDeYxb2mevRGGaWEzmkm9r9ouaZRPs",
  "key22": "3M4abfSCmQAKLBRbY9kHETndkJz2ExyN8ahnAH8YUBnp4sPuZeMfd341PMCQbZNmxAzVon5Y1W7YJzEk4bxErTff",
  "key23": "Q2zQxuPrDFpvriQ8H61WJZdnC7twGKc95A5jzMkpEc1GnPGNcTwou877tU7xmkFiJSXCii2MJKA4NWJSRgWQugr",
  "key24": "2x6ZpmTL7p7wHbQ7C26CCNpB1Bd3Zcd93KVVgqdnnPskP97q9ZaiV37XFqHh5QgwHAESreCRVkn1Ac2ctj5XHx2k",
  "key25": "3Dnohxu6HvtzBNw5CFhiKu4TZdFArsNuE5r5iAm1fx1iQbCUMarbYweKKcNwgoemQU3dWdPgRPVCDDLsvgabR4oS",
  "key26": "2zbZsKKQ6PSdkCiax7K8g5tV7RQbPQrM47npu2vAhCRLhtdAQN4CgFCg5tKwMpGsPkTB5vD2WDkTtRVMQWJFy7CL",
  "key27": "86qtrrt21TkDPGMx1ZFdeiC2QswjxLyxdrwqum34nPhLjtftjxcLPojWKTQGzAV2moykyA3G55LvP5jfwkP8a7E",
  "key28": "7JqdHod1pJaC7RMwpUKjafnAP5stqD58Cuyrd9aDiZLGAYHQfMw6ncNr5fPis7mD1br5dgVQipgr3Re1uATNR9z"
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
