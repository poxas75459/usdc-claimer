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
    "5e46F3UAXstdnvnvViqMXpqe3dyg3qSMT22uQeKFaBwXeS9XicAz3qE3Xi5GhtBwf2u4mBRnURG91qSLtK6gkxJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QmLjKwzxeTBJSbMUyfbqHnHTCPWpyh9vPvXGBsdLaFEbUdwGpKEuqVEXHU6thGd3CUwsUxZB7FT3MjmzqxC2yZX",
  "key1": "3TXRk7wdeMii6MPLuMD4LWeHLm4iVdRxpFiCYiTFyyQVXBfqzL587K6UzsPwnWGZD47mxCEndd4Hc9vQWvtA3j9Z",
  "key2": "2aGMJpWok93vjYh6VhG3sCSvjS84J1ctpAAytGCATmMt4B51UWDVUMkRZnbc3AmrBmwvpdeccBePALWiHJ2UvNQS",
  "key3": "4dvZ6wPtdHicTw7MMwJabG1sQ11GaqrHfkGSd3LaAq6Y3H7BKyqpkvs8Cvfv3Av9RG8xLbcgB2UP5WdriQXGMQNd",
  "key4": "5m6XKoPuTx4u8zAExXM5VEU913AMuXKQosPiPiFUbYVy9qg7p7wjfRi3ygvDHjL3w9KJwAcsfy1hgjsXUuPmJ34A",
  "key5": "1UsfjD4KUS3SxqtFiyUcWg3tRhpbR14er6UWG5rwiqWKVp7rncapTrDpyQXrgLUzM6qyeDvCVPWqVcfBQ64Fd8L",
  "key6": "euQ6fdkNG63kwxWTBkVqGoeu716iWVkraBv8zEdQb1x4Vh1noyhMhcKUhVsWWQam36AxJRdVc5jWdEDWd6dJzUi",
  "key7": "63Jo9Td9D4cZeUf8vZ9ESVZ97Fekcv2Jx2vug3Xu2S64y2PGDL4xEQQZYXfk12ZeBhpXCo9Jj22818gWDPGtXSKc",
  "key8": "3s6Zo1KL9xeykd7LTXcymxJf3P7gRqwG5z7ziYsKiajjKFQYB7gEvGv8BMb92mNMNH8ikqWfB92NaLtZ2P23QLQw",
  "key9": "35u3XXenAsZKLq4WeZXAAmS89SNV1kcuihWTXrdJw4CYVSWVAmwMySuk8aLv4YGsWKFbPTjjHvoQ7vBd1gPegncc",
  "key10": "JjRJtXQHHNkp9MMtLnXFDVpRyuVyKqtVAKVgJpGjQBcPLwNBA5TqYgrVYGcxu3YFCqv7aoVRuLZ2idjBRbJUvMh",
  "key11": "4Z2dNzkNuUFiTXJf5UQE5NKhmtKZ5iwDsj2U67dTXK48QXwAYy2KMsuYsCrFfxmGQF8SippiGGdQ6uR8PXkNCkru",
  "key12": "3jN5rsn5DSbp2ZgD95JgTBdpRx4BtqQMDyBBQAuYeq8mqDaJF5pxvUBd3RXtqGKS7HjtkCQcRrUJVrGFJMLnztTm",
  "key13": "4mrwrw9PjQwEQVQucv2cAuGJDhJdeA7c1sWW8kxXTLGCtCPwFt9ko9oCrzpWqPMtcPFPX3CZrBpcnt73NwL2MwZq",
  "key14": "5R9sDF3kq8Mw9U6ERvcJaKtpRJyyrnYfoJtsduhezx1uSEVXqUbvYzRdDrfvyCeNv7ehuqSzbGQ5pV75rnDBHJfc",
  "key15": "YuireiGXRfEGN4oMnrYSqPExF8pMgPwQzKvYimZFR6g7quRV9okQCx3kiBuxRSfT8eKKjqSHvCYMcUuZLwAYhYf",
  "key16": "5Rpj7r5ceMKHKJN8gyBp7HyvBHfxkeLSntRSqR4CturVtnf84MRGAb2uXAT9pXLUBeScXZmTAfiSeLJemXXPX7kk",
  "key17": "3uuDm3UbNJKyBPAbTucNGte6yAsrDjDA3ZQVNsNkHJvfm27BXv4EdqeaciBjNpwcZiVASe74dc33R4BxE5jFLGhY",
  "key18": "3GzahDm1x7jfWwpDhwpuhwSUr3W8cwDWoUyQEB1APuVtGuDYqiFVQBrzmxrNigQfNQYuRdJgjjLZkRhDSBqjAm2V",
  "key19": "3vuma6E62YRiKdwnbyUA2aQKYg1CcnMa2MbStaLNPSPD1oyzGp4b79YjBXmBQxdPza9wGLzyaxEcutZ6JHjPfkoZ",
  "key20": "4keSpoxy5VqWzBbJTjPQKNxPobZUgY7ks9VSdYzUCNP6tdVENPa86Riw4NzTKjFd64csNkJU5TcRgKB42zLnc9pz",
  "key21": "2ATQiAfAQpLxSe8ALZJVMNeTKCJfcExhKeCfspiRUoftR9pSFSBLkSKtwhh9T6radAhhSmgPjAqMvRMZdWVWQTjP",
  "key22": "2FqZ4D8AQMNHySwq6jPzgcqghaagzWnrQXL4HvgzwFUkELwAaouDQPoq5M6bETMbxM3CPm35ri4ZLS4vMJLN7cA3",
  "key23": "4ghxmsTieF5q11av3ijKrL4sRkcBTettigPYtx2u555SkafJxFpznF4u5ACmRpK1cDLqeDhpHnzagthsH6xEcX7k",
  "key24": "5GvTHaxFzaBgr59STjM78LN9SYTCxK33ygSyoQenRhtUGRpmXZ2jC9t2z9EowxSze483wpDmYk9PSJed3c3nxX5j",
  "key25": "4gRm29YY97SuDE4LbHDwsMyKy3KFr9RKY3Sgby5kYrg8i8z2WiFUJMz9NQypAtDLf2ax3XPHVtfEwS8eHA8ovT9E",
  "key26": "5orJdg86q6w1dLntijqtoVdwrDu8tqyMQMbAywKjYLZdaxJZrj554s1eatz4KSQCz18mD5odHkLKfwYsRkX6JkMq",
  "key27": "3xv6hMhNmK97gVQth4QNxT1CtA35ydX3nKoa3ACE3FBtQUP2HaRFtHVGGpWJp97GgNJXXihdwUUHmZU3KYfVUwPV",
  "key28": "39UEuEcYnxykm6YRq87SAuHuAVJGZiRZ3tWyz31HAZX8o2ANuRaZW3nJcywr9XDL4ZQRYYpqHCvRxTuM86mDBf6d",
  "key29": "3TdH9mULPdFszMWU5M1di7Cd3wKXRvnUkVvk6EbnL6pTZueiPMwGo831AmM8MSTy7mk7mVnxvvA4VEF56rDiiEor",
  "key30": "5UJJkgPTDiPzagzVisae5WDHBK9nrbQjxebBSMxMAtuHb1uAnKGVdiXir7Pip5mVFxY6UPgQqdp65tpZjidRpEU7",
  "key31": "ko2D1boyqQnh6in3AaSggiQrLSta2vx3SnUEGGz3k77bEHGrPgodxfnJWVQkxUNtYYrYr6eo55UGqECBCEXjsj4",
  "key32": "LfLWvYtJonsEmvsM4eVbwf3fvzwEs8mWsATD9sQj2fwaGLM9vp1qLSWW1639rPQVn1HVeuYhJx5WDpDv18yrjBt",
  "key33": "5idLt6w4aMdY63PUKEwQiYYJ6DgCSmuTHKNHrPZAD2LNweKCUTb7U8CwvgqSPTVrAJG4qq9iEiXnN75zuYvVXpPM",
  "key34": "4rC1L1CDtYoescQFPYEXUNa3BwCcKpsobtNCiWiUqub1pMmxoS9SH8D9qq7vY1QZtxR7UXDkTwgxUGpfYMMYUWiV",
  "key35": "5LVQ5LayhRnBrKGYGvPhTXxgVox7Wvrv3kRKzPzG2tPWtXkLWgvQrZ7j4LqVPmTuMrwgWGjMQXKQ4Q3rVoB47EkW",
  "key36": "572zBa25pZyebwduUreEN4ujXhKsuwKemMTkMuUzaRryAev99NnGFaX2nkoBKr1UQhHraVi1PkY6XNJmSrtDHEcf",
  "key37": "thuFfMvyVon6sfPMVVHTV55cqDR1U7zys6pr9ZjNRQHBG6XhdBVQ58BGQVy86U1Auf9by9J2roGjmkc9S9KybiU",
  "key38": "4xKUjiV8qTqsRGqf71q2dZCjHwXmbD57vG52eiWVzpavHkjr9oeHW3oGvnDU7FzzKMFWsmdoGZT3jDdhufR6Mwvo",
  "key39": "3kN2QmoknFi3Bu4SGue43tpe7RBhkERWtZ596RaFUHqD1CyNcwDEneG3YMaQFgmVWZENG8Rj4aWrzTVYJr7e1PXC",
  "key40": "3BJLGjvhqHwihtK3BkAvdjoLbNiTQzQooWHxiDPxeadYjvk7ZQ3g55yW77fPf1RmnoMVAfhr1ncScR8GUv3iX7eW"
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
