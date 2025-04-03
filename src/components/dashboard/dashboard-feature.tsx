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
    "2YBYbLktizxvM2CSKcdqX3kqF37VTdBgBGjVq4FBJWaZRN5WKyddHzakDfLbk7DFSGK8dMUZafmPcEWYmMpkPP22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W79SbT2bY3n7tNBq9FwpZoXRz69Exg5JYb8nbjgc3wv9RJpJcasQ5nbUadk13Mx2Q5Jy23pKUhyBEGsX1VBViQJ",
  "key1": "vh9aRAv2yafpcG3LVSiTTePbY8UQBzrPgbjyRPi4HMWVpF2deCxTAEiGApjXX8HnXsTPnFQmbb7EQYEB1KPTbvt",
  "key2": "3FKbF7rDntCBsjAHA7ySU8gmeSdwpWctMw2NfS6bPErY2ftoSMeCBnPqb8LhJmuHkRJTPjpPcBntZ3zqkeypzom2",
  "key3": "2HTbVH2JBeVgE7yX4y94wnQFkW4bDzqTibJMj9dK2Ga1QdvqZ9n1xY1JEu44Vi2FDic4Mzdk5vCF2tvgqe1YtsCh",
  "key4": "4dzwV3X75J1J7dpRFQiwE7SeXicEryTXGvjUxTkzMDX82ZRaZhWqAsBYu7uEfLnfjzM6G8Bwzmj2QKMBp9bNZmUr",
  "key5": "647CnGcapMuwfLymWk4UHFV9AbwtM9mtZBkmgbKojpetFHFGtqhP9PVs4V87cZfy76qb6yf95UmEZFdLP5UjjQDa",
  "key6": "52NSPTTw5FpmuodBeQyoYkMh9WwzNPrzMpGw2u2ay5CWcUjKUgoqpWP3sSgmbfhYdn6gUkmPhj24X4Y4UgKhxAwb",
  "key7": "34owDZ6c9ucC9S4Xw36dmuEB6ksGydW32PSa3URLgq5hSb8SiTLewiFa1Dxzvw3iyW94bhMMWvDuxHx6ex5J5BuX",
  "key8": "T2ASLTqKCLAHkq74G4jYGH12HascNZCDqZ8XZ7KinGKiN62MAwZTxMMngRfUyWwjvserZxAmWdxuPUrwhxRaWwe",
  "key9": "2h4DBYhYazMT9WYJCBXVUvbvv35BAqngvunsfXD3DfuTu5qyvn7WLdMoiWZtEVuQLJHV8J75a6VFENCJH7CnZ9h4",
  "key10": "5BtsB5FCHNv7o9Tebq9WFSwpsBjsLazfk7PeSH7YQJHj2fgqgD94vzjTTHnqLfHLmvmWuryYqnzr2jH7BNvF2G6B",
  "key11": "3cUM24BQthjhQAhpiiDAL6XT6yWfcyjuJX8JPLxsFdVT53SD9EP7ToHY15HMikApPZoQJPnZ5Sx9thY6wra86ZGJ",
  "key12": "5moCjLu7Sq7rbnk7BmBwKLSAesoHsZEHTpL1QoMXhRdvqMNwMDAk36qGbABEPgxSwQdhJpbvTnN5oWM1qux6bJc5",
  "key13": "3whcmVe1CZC5xoTBSB4iFNUtTKbfbYDyvL5iGCB6ztz48dXCUTQ8HTNes94ieGVVLk4Y7ZVqKjB5qDp4eqbzGYvL",
  "key14": "y6UjWxuxR1SwrsguKPJ1ozbw75HQf13htyck6mcJGjHV5NAgwCYPrnKcsmEaP1RRpAksKg7AfDBdGMVFvtYW7vQ",
  "key15": "64EgJu3ZBvB84AgMod71RRj6DKN7j8WqNagtAh1oaqzP2fkTq5PVnMSdun2TQav2CrEdwzwNHFWSB5eBoKwtv6o8",
  "key16": "5FsFGaaHRb9GKLjrU3rLCPbGisbgCfcBDibtzKKYFtVHjrEBLYQemPcqS8VsdHbV6zfWbm63DtZScJehCZ9NRBDL",
  "key17": "2v3qBsEEZ4uU4dQ4kLXYz3dxNB9mSccCcR2QpB6UM6LLkDvC3cyzZfmQt38QK1wxTzRwHzm1C7QH1z6pMbDRi6rD",
  "key18": "foUxgFxcB2fT5zFed8sxeAMwPxTMvpH6k8s8AyDG8VCxopFptkHKWVKgAZak6XpkhzZib5wJNjZEVqeCsRSHqon",
  "key19": "4bi6ZA7Koutsq29r2KouGF72e5PyWTryAUG6nF7Dq6D5C9vVXFT1ehjNvq5fKiR9S7QQYgZkHfjQRe95txH86CC7",
  "key20": "4FBqrVe12ZPFAWByTCFbd7EL6DRhWVJ5fbqDrxKhEqnDiaw7sPKyF78vSjj16U5YoowsFFPjmJui3YJreh5KtvWT",
  "key21": "TmpmgN9yL238qMY1idXtA62q9g34PZKxHBEX59Zt4ASzrns3NUyzdWvMvYvVPWcVV53J8uyCny7dp9qWHP9wVH7",
  "key22": "3vfCYHWuAzgw5rxpvxpMct6RNSmFrpwPMfqrLfuAHxgoMdjxHV5m58UDQnMW68KUSnVq6p7snzrXdtefnxGkxXJE",
  "key23": "4A3wRcFuAUEXw3wdvAHV3Dn1Kx4ieNLwfmCzUQgdYsy37zepWCVzx8M4CVShYqKDaMmnLyM4JNBdiFcPdbxy6bjQ",
  "key24": "4bM1zUcshuvCBaBWfEcoRxXHQEiazS2DmW1YGFycsSTr2cWgvKxzwMqjsDC5c7Bv488p3cdBiarz4MvmNG9yMemX",
  "key25": "2yb34X5UrX77tfn2xveWnLExUBhX8Ei3fcNCtnCpQyZLnArsn8juMGNmqHTNsbzRbbRU1RdBvRy5W64tHjBM7KB2",
  "key26": "TT4PzBmkYUq7g1GCYi6V67iaTUuhRkKtRZovsoLuM48bid422dT4gWLV4pw4thHdQeb6UFqmYZ4mhRb3iyaxxeW",
  "key27": "27w57oh3mK66SkRuJmVmaZkbHe9DgvToso8BXg3XQmJPZVRGtzecBhPudbwPZhRns3w2RYudeD56mRcz2q6YEsB9",
  "key28": "3YQjiVbk7LKknRbSmbiL9c342SEKjkM6BotQjqVpa9V4ZzSXPD5AcJJETVoQp1EfouVepnyS6e79QY2dH7w93ZHZ",
  "key29": "FQwoJuc4eyf4Do2EDsZyavTxS6gJmoyhYAyYyLzVq3SSsP6L5HZmYowCEsQy9AH4MTGsSaFUgLyFoRbWZxksygi",
  "key30": "4CcaiuHRrB3EJjQjnnUP8V9Mc9FqSWQ6qeEAtJF49V1HNRFFe6TMZj7WWdkkKgFbMQVcUFRNcDXpMzzBpgYarnm5",
  "key31": "5xZtxPWV5dRNncZMpyBiCmV3nXfmXUaGDwheJp8wCsYEYLFbuUfPfvK1qdy7mWGfn8EQjmc99upy3ZtmXNBTSqTf",
  "key32": "2jph5vycdsSJiSdVtRevqct7mD15asufpa7LAj7QvRhnus8LNdLT8rbkjAsCKamZpftGkw2cDV6qw3n59mes5wSi",
  "key33": "23nG5XdhzX4yK2TcRMLnBzCn3eYMfAFkmFxwGUzavbCTViReZES9rbj59vWgcfA7rQ9gGr8JX2ZtRnRXzJkh9YUo"
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
