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
    "5t7MeqV8mfW9R1rGMJbCXy5NqWBrrn4pjSFsSHjtnhSnETBBNQy88zxThwvJXMUF7TiMEQ4fo4S8eeEdaGyKfduw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gp9yeG8aywdKJTCtwBzCKPxiK8WXLXXmzNzBfDdbTfpNAetgsPbhFmm23xTP4B2kNWY24RM7d2cuKqm7dqdHqxP",
  "key1": "4auJtiuX4HXdkM1qUUbGHJDD6SKqgihpyECTcUBDejFcTgNLfJjMi5mPDAAYv3rZAoCxYW6r888ieaR3eDukxJWs",
  "key2": "3jurzdwQXHbRfkbsHmxqkoYbqxKfBKkGenCEekJQtcCeJPaDgiHo3VXww9QDenxCaTeAJHmoZpp2TMkuuzJXz1tB",
  "key3": "3WVDwK9dbjCg7ansA7k3kQjHWV2hqTHC6B2ZfdZcaZVbrXF7yS6g6zxyDugE31dCCNZaAqe4usRWzhDQT53PjRm5",
  "key4": "PD6MU62F5Yt1wiACLxC7xfh7DqkuqP3HoPYiy9JYwpXAmsdiYhPLyn1EZ4NThQQkwodyyAKuHA56VSyLcj12dB3",
  "key5": "5dyTLexpb4ZxGo4rafh49wk7fYJiExxk1HU8VpQd3KXpVFD99uJMZiPK6TkWawoFzZXPVE5xezqNTWsQxnmgG964",
  "key6": "3yaFPHYjBvSqMTx7TCcuPkkB238MW3piC5ZmtCWtMNiN1Q6DZ1syQGYrkYym2nufTgX6zzyZSz47mtZVdfyUCAmy",
  "key7": "5WygByPveoRUKFZjR69EEeGdrza4dnHQAownP6tqzMsP6N3LFdBZgQssUDuQMbtRLzDk3mUvKRL82HtPpV7iKxa9",
  "key8": "2iRgVz4TNLMd2qa4jtdCVJqDiMAHMMaqHxSyDpsV3itL7pGKaeYveAKRaTZ6aTvEkbXiA56zxsR9No36fmpz7GLV",
  "key9": "4BfghDomfhBJZjA75n7hxWdMUwTeK8axwWbPLHYCeJgF9ushTDjYRPt995S3ZZhEZWEEAvQJDUdSswrWJpUM3svN",
  "key10": "4mTjBrz9V4iNuvAQ4vdqxbag9QCAfKwMRWmHyBsWtwpzt4BnMhY6zdSNY2odq7fRArojiVHdpo5pMedQMA498cZ3",
  "key11": "21qHiGLjFynw8rRaR8GUHofjxmGLU3m6dwHwnD1N7QinXvXukDDo7QVsSfL2BgjtgoyPnhUurJqbVCxuDVze22rM",
  "key12": "4zeMB5xYJY973bDQwTkSqEmkKVS9XawmD6ucdb5FKksNJa9eUfT3yCRcbbdzL1YVcHjXEFRZT4XAwHjwFVGZqCFE",
  "key13": "PL4Gjmi8k1yiEcakzUJRYJ3oqd4iWN7s9W9A43uymYSAYqVocM25cb54MGTRLZ2qskvdjEPgtgWStkPeyAWTf1y",
  "key14": "4FuZAwSNEEFtA4FFeyDri2krxuUMArfUEbyX3ngBwUyXPF56DyKNiE9r7vqwQFvrw3xwA5WoY7HUcV9ZQSAmxxtB",
  "key15": "2irhffE5SC8ux4Fj97CyYe4cQvVVkQoPrmAb8u79w9nhpkv6TKXZ7Appc8eaDmjnQr1hzTUGKbDtYoXAfpUNdb3p",
  "key16": "5T9mxSdi57qJCbka4mWTM4sGe358jEddvRhFNXnVcCJ6trU1zZFvvTF8x9zDADWhXKzNb43dxY9NPyMMs924EzpN",
  "key17": "2k5naDDpEc6gWnmWxZf6MFcvW4vbxpgcaFatcnxN6FhWBzGNvpn79rjxXzsuShAy6kQZjph3uZ6r9SNVVnxTmEQE",
  "key18": "5J4orpst9CfDtZEqzWYowFGLyMA2S35AxFfXW3pzephiH3idTCDc6V3NiycADbNVbhu7ECq6Wozx44oG3wn4Qg1g",
  "key19": "3ZyDLQtt6yVRsLExhZm8T2YLYjh1LrXjXf52DZTB2BTsrk41aYSiziGYnBYxGpYP3z2JmgfBiczFZGgLB6HBdaxP",
  "key20": "4BSBYmxjuUmizrVRF1gnU6rko8u2hXPNi6i1BvPDXTPmZpa27NphMtKG9Dwx9QCt8SE4z2qz2bcLFqFBmt3bCFxZ",
  "key21": "59hNQWn51MhmWUqLhAJoqFEtSdFkGjJDPg3wjAn882GBATZkZZih1YHX9Lb3s5Vgyc9YRzctUVEtHJxHzdGGZ3GE",
  "key22": "4gjpYD8kLFeyZErPTX7HJu9Gg1EV88zicwhQqmEtYFMdpN8eDCNj4HUfqvwmbEkZGH93y3gGmWFNxXBgGDMqXNXY",
  "key23": "5bWMpkeBVMJMUZ6Yb3DNGakXTWgZthcTyeTQJvpvQrDf1HYuJUfjSQ2JsnUKWfW5DAamfmX1Yvy5tqQcYn2QR8qs",
  "key24": "3c5ptxBJbBntmFkujqpncxpKby9uYsGW7QFfeNcSEZ7Sj5RYTxJJxjUgLjjD1JEZSkhHJYc43eZ462rq7CL8TAvT",
  "key25": "2tfuA5mFeJATgZEVwDv2uwJqgTSWcEPGhNEto1PwDxDfWVQ63VYELrKWYHQavtwLPZGQjjUy7THcRzfECPEdUNk5"
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
