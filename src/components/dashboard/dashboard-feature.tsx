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
    "tUiXiG2kr2XVji1nTo4GLFD3CBvjVQBjZPHA3DYiYz5yCuZNAhuYn3vyTCTiTw1xzFKRBQfbQvu6SvtqXVQZQvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Y8tCcfH19fvmpqqqMqFHnB9fGj4biHzZ2VWr17WHFGFvCaYo64jJaUSx3di9pQuFGkPRCwQFkuXUQZRaQNG9xt",
  "key1": "RfmPXT9hEihyD5yrALzmbxM8C1bPwwiuU3PLdEv7FgRW9sXJSHaPH9tR8G8Wjgrq7VkLDfwfdyc7Kq7j3zcobfh",
  "key2": "3d7PPvZysY7AS59YFajEJkFNQnSxnHiBqmGFJ6sEJf7AufZkTrmfBv2uQWpS3c6jYtwpz4NCNjemSCZtXrGrjJ9M",
  "key3": "2Cp7JwsBrBVQZ4N21RWZea4ctLbvAbBr2RTcjsv7szFx9FTNtZqZ5voQhq1kYGMV7qHpPmLY8en95Htw65P8Hf9x",
  "key4": "4BydksEfTbaqC8gMogqfFEmCskCzNq1rkJaBNTYx3bi6iMKVJ4feruMx4VFPUaiFz5So2wSXY5R1x4uxz6TPSAC9",
  "key5": "3FDUy8NKRwp4iiNMAQEf94JaCwzBAobo5XK8jSvkxyuqMu3am17U9K7Ufhnis1qcdGgz2pP9KhKsFvLVRf1bNEvF",
  "key6": "U6ftezjnMUoBbbYSoAQE4v7LVVWM4omMntsY6KPHEg5shwTwNX6d7CrCCpGGjZJAytZPXBcoqfapzbazao4zFHR",
  "key7": "37tj1MiWmF5mfcDeociE8ne7HmETw1HaVLcJ8LDDNkxSmMeHutw2qsZZR1Ta4JU5USMfMAeFpbfMX2yRSb3oie6d",
  "key8": "hidRh6xhcV1b1PX3tMyHDBYUys4PCTSiCT9EXJsY6b6SPjs8JsfvHqCx5ZByYRTS42vKdR9BECwTvKSE1ski82q",
  "key9": "3VDejfpST2hSpGTEPY5ZAtcKMn3bJnWH9bqJDnMZbZQpuF37yF1P1jErLtJ34XMURzEWTqHLsSYHUG4sQ5vmWKDn",
  "key10": "2gBYasTpK7wK6NeaiihYDdoVrcBm1pMdzS8YXBo92KgMQ1bm85kq5YfURbrGJQTSPRiPs7bmkQKjCLKdXhjeU3Wp",
  "key11": "4SCVywdUFUp5MuF6v3LhnqcLBRAhYFrJsXJ31AfKw5jx3rXejb9ErpxoRqzmym76CEguffwb5xHKpSBoJsWisvSV",
  "key12": "yjmD4ftdJkqT8VjaS6vU3igjFhDmNtw5omEwbWyvQ9yGu8hcwFAHBBk9qeGWKP8A4k3fRGd97VQLbEnssagAMaQ",
  "key13": "2VLkNpYE2V3injGMs7AdhnrceDf5fAHodB9tH49vEPTJodVVusyJHfii6UcZbh2XrCnYBNxVxJCxpa5Duq8Rep4z",
  "key14": "3mrpzCQkVk21oobhN2LeYPFy1mcKDnPFepnoUSQWD8HBYAtxKD4uWDVw8Dx544gUqdw54efsPyWDP56zLyJ69S36",
  "key15": "5q1L859h2wagBPzUUbmgR6KZwfJ1bq5ZVTANQS97DSnTp1Qw7hQCFraRr57XFKVP4uUzcoeZa3zkVZi8V7pmLcsK",
  "key16": "2oah6AxkwdwLZiMu3tYYoERJaUcqCqDsjbQ4FBV11VPj5ZFikd3bLEiarGjbeRt9y2P4rVzjsoYx7WWKpeUPR1vs",
  "key17": "Pwg4a9S5sREgaJLTmYybEubtqaPY3hEvBu4uwYkB8g5x4zrwN2L6SSEJAB5U3hxkdby7RfvVycEK2qJ5YaA4JBE",
  "key18": "4Q9gLhqoSWzhRBSJauUvzHXzwdW5fZdH97ZESEkHTzagbF2rUy4dvSfT6h3u7vufPbVPD2wweE6TrmWQ1UTG6ipV",
  "key19": "486sXs5vxS2YrPaxDK2MTwh9gB7AkvmDrnAJ8GumR3K79wit2RB3wkqNhckRiWnHo9qfTHBxNX9bFpNaFWxEozcY",
  "key20": "3hnDrPXLVBzQMZCCbkAToWehvV46qyrkrrSn7GwTMo7EnSLNoiVBu5N1rAHnWvWzzcp7oeEsZzJx59mHcTGJWvLe",
  "key21": "4nMKDeBmZitCLewXKR8wBoN4YChR2VsUHhfsGSMnUGn27b93PvNb8p8mCzyuvp9cx5tMxMiNF4uURE4VXyCj1hgg",
  "key22": "2AeZpVxoDcwjPoXKnJB7xerb6Kk5EodMFVgERYQti67CkHxJ2vaWg2QCPRQWsfLUaeNGC4MY5ct4sYM6QYJXoynQ",
  "key23": "4RcHiDQg2gqxGeVmmC1Ehd3wpXQGF8RXCQSCz4vFVMLEMMyJVXmj1pyp1RNmxjqTPVEit8ZVq6EZjGVipW7JCAXJ",
  "key24": "4MVqHixJf51voo3PJPfcj7j1gqEzwpESKF3QRUm5AkEd4xgkikhHYvPYo92R1VMRm9sjUV5vy6oAJNCGNUU1i6e2",
  "key25": "cvAZgiow4i676NMvGWNFq7fup9Dn1vQembAYSq5dYQtrUc8yHdS5s9a2Ti3N8yptPQmbkNo2aBNH6Lefcvw4qYN"
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
