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
    "5C9ra5Q88eeGyfWJ2czm7by73LTxYd24unrTvcHqN87dyZdc7vFmYbjC6zQ118KXAWWNJqr9Cccmj9gTamqzoQer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ia6rjGoc64BHqqAT9yyY1Pkwg6H8zsw7AtcszQUXWdNcswPpfyNoRvpadArB8ohM8S5HmbPKyyJZLJjF3StmvhQ",
  "key1": "D4tXDPABBpvzWW6xniR8TtvxgwrJoLMVS8f4jAq2Stk4khN1ffudTHcwL1jRDKmmw856AhouMMv2xEbUZ7Muwt5",
  "key2": "2rUfFd8djJZy8JUHaWBE6zLp1AXSENKxA2Gp8XvKDzqJ7NZpN1Hz3UU8LpxE8LJz8PdmaoSfjoya1JWJviNXQJS6",
  "key3": "jAcSfDLkhn4dhL8aiSchzUw8KqtJ2E9CtuHyAfvMhvw3dcEVDrtnUXMzDavKvg8bbYXBT2eNjKzca3JyDb9Kvfc",
  "key4": "FnPuFURBY5vXvsXiF64uPw57nbEU4L48dwwNeKqqyU4n8vm8gxeX2Cm29T8fYBE9NTtHxpaQBVNuBuWzUqX8MNE",
  "key5": "4vPPcjxAZLAirR2kT2eoUWGAwgnwgwHaWohyoMsb89h3sX6F8Qyh3ZEo4viGuGLSxnMvYyaKs65Tcdu5Ug8EgcMR",
  "key6": "2rCmtG8G1f8bN5iSdS161BRTvufmBkC2LwPQr3ykXcrGuFHtzbfq86P3ECYMCiqjrErqL73KGT6a6WG85S5aceUR",
  "key7": "53vJo4eeohcnNxAUj73ihPrKvQzsDanXyqdSmz3gAUCEmWeCcgPGyQMVgC86HV8Ntb91gvYNcKXeunDwqqHXGvG",
  "key8": "4RnUMHKq6zga85fepVSWZjWigdX8rPr7XSquJR6P6pj5f1zVLD6bUkcPEbjgaM5xX1fqh1yuQEACSxdN2EENuVDU",
  "key9": "moomAxtFx9DSGHRqczgH3zgKNqfTC5ruCjjLRSyoBs7bnwGKTGGQKDmnAKY3ocRmhcxmK2MJzXNEfaoNt6cU9CE",
  "key10": "3eagYpWB8bMHoVbJjiEfMjs7P1Q1c4CLWacChoRVNgM4PifkuNg4pGPoed8g6CfhbjrYgs7D1dr5oHAWJ59QBWsQ",
  "key11": "4aSRaqNWaFzE2n7WQNB3hyZmYuhe6MLp56Pp5rnhGHPtMLorAg9FsQsAqzAjYyGrGov1CWUQ1RVK8oudAgornLYZ",
  "key12": "4GfADdDFgokenDnan3jzQDXXhtePKLCQKGmsERtTEDEkHwiF6urfbtZLfd96pYNoJd2XvVPBpjAw5KaABvg2BypC",
  "key13": "34AZ9VqsaKhcgS1zPmY2fkrV7iyxXKn9P8bTsX7orvDTUzLuRYFTRX2jYzv4mwkm2BP7KcLz3GxWwGh84XGitY4p",
  "key14": "5vQUaUd7ZrC5bDZQukgXJKjLQPFYN3Sk3f6PmK185fed8QMFk32QEAruWnTVDcxvk42CyreWoKB9cG6tS5GiFxok",
  "key15": "2ZoYHYRgUFrTxc1n1Y1ekqxWfmuhvUXc36T61kanyEtqXodTqLsTWDnNvR8N9ckg4aA2VFGhfFCAh9gLJaZmCXet",
  "key16": "4c79Y2om8R2qD1moPosKDaC4JsT5wG2BU7RtKaNS9E3B6GVdpeMoTozjtrRHLyhccmnjWXbNaHhC94ZK7G6PukBt",
  "key17": "4wv9frdisKkCtTYUbvikgXUxrMv3rzts58v1H7duWHubkxRcuEtDHrXrUt4NKo6aduhnNtojkNzs9tKQdiWD7KvH",
  "key18": "2qV4CoDmEzzDdfe2MCpg2NPW4v1rApLnXpVwcnsauautHh1H3EmMub34kip1wm8t8sKWiuhZReHGVf2b7vMp6iiW",
  "key19": "584dgSyDwdscnZJmrtXmmzbtms19bqy82tLRaWkKvR6wBTmWTrw1uTwXpwReHLVXbpjyLys8jfC6UfKgREeke1BP",
  "key20": "2nSPRWwApbKhSBM83AnXpjwREkmz5kbb5Qe6Mh3vjaJQLPKoKKibo2d8iY7Kuv97jcNj8wxaxVGh8A3uaE4o9YSB",
  "key21": "3MZfzK3dsnougF8tQ97bE3EmpyMKz4zpuzv2DQHHwSteUcug1ADT1bsDrLMmoDS312VSeGg96fScEpQgyLVzBWMh",
  "key22": "33XFxZKYWPtYWh2SXQzDY4mmvimZRnifa9m8szsQh6EMugVEJZ8XmfMDSSNHd69CnUJBbB7Q3geuSDoP58hgUQ9",
  "key23": "euWWJf5rs8Z9etnN5ZRd7RZ292hNuLr3mFodLNeiE5PNegDHQEhZyJNXhK778uNHE5AWTbTHsuicEkjhBn3yXz9",
  "key24": "5bVRm9PLWgoV35SJMpeuGpVNGxiHVpHs41JRXmqTFwef9qea7ypXNRmmbU3DzjkiTVaTXinqgbM4p9QC32g6g6Sc",
  "key25": "3BkkbPyoKzwjYwFKfiKM9hVCaTVKU1HSYdocD7xAHCDezxPMtGamSau85N2mT9evM4U6Q9Q8FAwG5TE3m1XHbWbv",
  "key26": "mnNgRojHQSiGAjnueP9e1wP61yxdhiTycY2Zt5w78Rj1Z993g5WcrxZRxHGocYsJ8yBnP1NQYVN8qZAXQJGPF2e",
  "key27": "KUtzgL5E8R3zzTd27fTrV995kgW3QssvPoH4NizPmJWy22x2GyrKzYNqza6Z4nJBdaBLhimG4p6oPQtvvbpyyZT",
  "key28": "djXfNVz1eeD9WPRY9MYbLeVaRFSrGB2N9fvenpKYgzgM8pKoo3stCEsbZHGH5XA19Kfc1KsQHhQhLs177LwBNaP",
  "key29": "4kPThRcqjGwXZADwUAzGBsRKRcchnLRTqqDfEbWa3iRyqw4yASjNidndY8opn6nYyMXKvo1yAAEsAreX5nqxm33a",
  "key30": "447rBY5yvfsaiGFMxH6DRjycshkVkFG7CjdhRB9wmsJrkAaQykymvKftNcLETQeSpUugNSuN1zjzkJjDCxCW6Meq",
  "key31": "wv26cbYbWJBY9ETJCHxVsCpAsjowCQ68N8Z48pQhzoACt3J5j8MfZuuj7tAwWdrGVc34bMvFowVmR2eJ64H6e32",
  "key32": "3PHNCnrCpEdQ5QDxjtFKHocRJN4eMRbfMvU5Saj29qsXHfYJwNqKmmbUn27RaX4AWsc17mKUFZ7Qwvkw5dMrRssj",
  "key33": "3oC9LycnaXTXXtszLkf7gvAiZjDJk1xas442ET4LzALEKeQLryLWnrmf1mXf6iDSYiypYTyhUzsLn6YoeUfYRFwW",
  "key34": "rgp29bRneSSaFVqvWiqcRLZbmzc7Sa6Q4g2ZiSv32BkJZ2scfvLqfSvP2Eju7UwWCDccmNVECkFsnTxkmQTYMge",
  "key35": "5r26uGhX7KNGahWFq94U8ftFBH9CYjxKax3APPBxLP73Lwua1GHYjrxuiXruEV9J7W9zkXwdi8h99rb1iJLb588D",
  "key36": "21GtsEWna2bU8jtnwSg5mPZ3hjfiP3bAepZkgUPDZWXrLMjdQJA6J5AvfjycjYMZKMaNmbCFAV9aK5bLYBW3AgwV",
  "key37": "3UGjcrhFjg46EiPbnw8bXVx4VXf1uMiagLdGU38LveWEjsqNZrBvsHBhH9525SCsXyLWkeqa72A2oUA8f5bHLodq",
  "key38": "2br1CswhN8dpkGuE3Nu9CyPiF2JJV1AkiUUqw8tA8dNh6gRZBFxYTDTwES495aw7FwCPmUzuzmUVwmv76Zj96qZc",
  "key39": "3uA9yvdduVZw7tvKq7nmoXAG8K9PkxJt8L1uVRmhnNCyb1CzrzaGCrLwUbxFoAse3JNHtT1k9nG6uahLiScNE4uu",
  "key40": "2NnT3yKQN5143c1KQK36anrYw671APTbeAgzHvGqmJ7aMqT1CsuDjAwqAZiDYDy9K9eRs8xFiV8FHS1ZNkZGKpF6",
  "key41": "63Y3QwLJZnxyVWWLwYCvSfRNA41HB98xM1HRGzmqRCXgkkQfxLQgSVujV2DZzsHrvDtEfrZoDSmURcmdzyk8LTCC",
  "key42": "4uqKiKneSrDzYLg6vixsrmWn5wTor9WXweEjwZ5DYZygGbZeW63HHVDk5y9YsFS2hou7MfHvvhsnebREdVrsGEqN",
  "key43": "3SkY5wyHcyCuunAtABbCcrDQogaWnLT6uqXwkw5rKrhy6iRzhM5GBgggqxZodYARPTqUVjLAc15QZMaeAwEafn6L",
  "key44": "5u9rLSJRkeERUUnkUPzC5Af2FkT6XoXmkBJLsrEfMuftZgbHF2BqtrK4KgSAQbGhnYJC1fLoBF7acs5BYMNZEazC",
  "key45": "Nzz8XvB455Dg8QcNUd6qMJ3wkNYPHq3k9WrKxiXMLRa6QBTYtCYSHvZP9rHkQms91CPYyBUSk2ka9JcLzswq3fa",
  "key46": "24HMhb59RcbgDWfeDiiN7i17658ivvPXcF86NFFueXxcuRcQSRqsK4NoWUcCDVmbvkdK5C5SswX71d7mcwFeK9wS"
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
