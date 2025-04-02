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
    "WC6qAuvDrmETNhcMf9m81bzpKb57bGbLtzscK735MAyPqanqNq7M3fsDvKbAK3qfg8AZKNwFj9nPHNdznNmhG77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23jyZMhJ4kW7ThYde6s9KMKpb65dLwZPJze4butncW1eH6iKt5DTHa8CH11j1LxVUewprpzCU5JiCsC4nGPnFg5H",
  "key1": "51xoq138mxyYhjEokg6UxrYEhuzH3mKLwVujADPY9Ndp6kEjBjcf2uVi4SMEE4ZH4iDkzy8AKhZy8NWB3TZwfFLr",
  "key2": "33SpZGtEnyehbGDkvU8pLc8VFB9cpeUD5P9DdmJmi9g6bQunDuQfFNH6su33jJR4t9DqwWSLGFnWTDBssZyvBhb7",
  "key3": "4ufeK5EfWi7aAvyig7WFxacs15y2mrF4X7fYfu8n1kmi8Gnxswkrv33wCZ7ZY62uPtiCTyuu2XUScssEGZqKsMoV",
  "key4": "548UPDG6u8ommeoLVrvawGuXsX591p2UhddokZDYPFbNh1PMcN7rqmrS597sY3DBsVr3xyrET4sif5ZhWaxiGsSn",
  "key5": "3yPBm8Qz28HDhdW3dfC7yTFJtBM2Nce24gHBdhJF6eie2SNC5m3ow5Q7fWVtaNjtmch3TemKcLWFtEiqai9YDG2V",
  "key6": "2Kpc33Ye1f4xU8Ra7ZeBx1SarndxwtrPuYDJhYjFv66M8jhRpM736H2kbndacKCDo1uUvZGbyGZnAo8VMsgakVTj",
  "key7": "6EtUG7ey6CKcFBGaJGStmKsisg3SfxbQbAsALosjuDaZgs34FbFF6qnmkwYEi2hi18Z8GFX5JhdPhi4TRwpW5cf",
  "key8": "4ZJjAgvZu1WEksLDzm3wrEGPixNf5TqPFPE2p8MQLKK55nwAg6aGnNW4b7Q9b11MTKS4kjuFVBgC5JUQunpKhm64",
  "key9": "bMdfEUeP9KMmUznoSE5qvMpP6QpxZhzeJeTLGUbUFfCnZWcMR8WCHq2LsdEyxMKeMG9AXMuP2K9zV812CoJ5WkF",
  "key10": "2afdnUFPUrwknxrx7daSuX1aPF3Xn63rtnoE35DevzUPM5CzeSuzNavGttDrLdUomQoQKo8XZBkAuYmMr89pGCH4",
  "key11": "2H3oqbkJJ88dXkJVz81RgRgGwZB2wedwu5ThJzm4jrQXcmGuqTt4a94qjaETHCQct4YXnAQe3cQdb2NhBUWkP2y1",
  "key12": "63dc5h1sbCURiks7oGp5odVdhviZTHQu7oJNe5sBq7ic2sQ3mLPuHCQVhyE9k99nmvEm8Q1okmmjwxFB6pY46aao",
  "key13": "3iZYBWE6nuU2nxh3zGeLN55Y6X7fDp7UyYtoxbdEoHf6kWNJAQr7Bhab6CfcZ2xfVRQAa5ToJiBcHUsk1PF597ja",
  "key14": "44LicwfxRCxU72pW9Yx8pZ42uNccBTZLGzSNUFpjtYQf3ahgXvZgggkgaM1mKqR3oyHD75v2RMQiMeZKkdVzi5vV",
  "key15": "46xA1wZtiQxsTnsGR8a87S2JQsWjaYPkjzwMjAUJwdS83tNygdBwWMT4bAntwDYrtVvRUp35WLV3h9Q16xgVvq8W",
  "key16": "4rjbEzMWSbJuMx4VgUWX2aottA2CFcs8bSKmaFPzocZiFUKQioFRKLoNbTB5qUaAcGVd9CvYToKfVdBRcqctDHgt",
  "key17": "53nKy7C7n7VCyht3Li6HT2cyV7CS33vNNy2FfaXN76XivHZreTDjnGhoh2msqoVPLNMfiLYPkkGybxBP9zEiY2EV",
  "key18": "3XGfDELNoswxwMECw2bCtwjqnGHGQGxeM5mba1Zat3ysdi5qJAZngCZ3MW2CyT6CPxgym9UMeKm6h7LSoBANLPvZ",
  "key19": "2vAjkcweG4iTQuWbstC8pL2cLKNPJzJTAzDfdfVNRQnsYVzubmpUyywFGKC6JbVW4dk2izLTwDWT9uXfmiPn315v",
  "key20": "dgtSHHu1DaUNNnsrHZ7c6gjaKz1Aqbi5KtFcYe4xswCjSABhBFj4bUWGjfHas1gVDeyChruBR4taLi24XE8gV8T",
  "key21": "2o5SYHxyxzAcmBSmLVLhLvcHQzLEqBXiVFZkF4kURHGVLxBTamw4jw2AY6m5LkbCogN7MiMrpS6UPNa6YUjnmfoP",
  "key22": "2MwAAuSJgiB1AmwM5NHzjDmY8qU8pucMdikeDamqcZWsXvYLXDur1n5KJu7vexrWHNtZ8iSCsKSknh2nnYKBX9YT",
  "key23": "ZcM7zd7uACaFvMYcHXwXNuC7Zgy5prMQXZaWJcGReEWsMLsD7yD77vKdHasKurvzSrJTrKR8uzPHUbMe7s2Bzws",
  "key24": "3impHtun1rzgJ65eNmTHaZNYH7tn7HxNRzBDU6DVoDCnNZi9ZWLVutST51PzsxMgjUbBLwzFTyxLFr3aPc6GpEgc",
  "key25": "2WUSq2GDFvWBTmhAGVkf4vQgagCT1QPuxK73z5y3QWmHnLtKNyn2ZGYGaJX3kYqgfsscMAuS6bwVvkyia1FXYDsj",
  "key26": "5EwBicH46PeL5uGpiMKsbzr9v7af5B14SAYKEXHPxyDm9qskqatHHnrB8uCDFoMhGRJ1L1BkXkJC9eriQ6bgQfbX",
  "key27": "48qnRc2PvQ4SNmznwm96jNy333uJUR5VLU9AMZzuAtrRHhinGgEJHpBzHtQiTKCbExEXMGP77G7rn75vYbGuJ9k1",
  "key28": "3EKHTDLz96MRpqtuyZt3vzWc9wmeKehfXvRHY2mQ4cjpcwzE7souJCai5f6ZhRcG8fJD2BX3wFJJsrDsfTgT4GFf",
  "key29": "5EBrqmvPn9w3BRYG9bNovjy9u4MTTFkMvh1mNAK8zjYqud3yg7DHkdR7jJmaXsxffbDqPk7Sxj5rHLSdeJvAgChX",
  "key30": "44URyEwhjPdkHaZAc6kvQthkPBrDzEE6FA6YhUYwHxCySN3VaZa4f8o5DyqyHx2JV3EqfSqBuJkP41WKM7quh59Q",
  "key31": "22DfEyEuQXSZaoZUea6RqEgpeyba3yvT6qRtnL5yQMKcpZaxnFt54ZfqYicUnLrFMypuGfGjXjQ5FrNnY9jfaieX",
  "key32": "3a61AC8Yc3ihdq6fMJaqpABmCVBdcHVo2NHzv9w5sqRP59atxegjuxZato9CgwKZHJaL4ijGq6zfgPBcxZPGNnpe",
  "key33": "3esCDvAcYEEFvYvXgo7qmVu18qU2ExZd5cC8DZf84f4Gqm5H9t6qAPoHTDs4LMjVPPmGmfBJ9Zc4gFavUGSZznoY",
  "key34": "3ZY7XvTK7yFstDXGkDg99AcYngnUJqoQfdKRxzECdYSZBkrFZ7314zq1xjUVX2ynRtwtuHWK7dHN9asZv9te8Ery",
  "key35": "4Fsh1HawVrdcmwYJwjnm6DABmARaeJfPat5dUTtJgHpEsc7QXHfS5ayjMCia31uxh1J5YzWQ3yafYmEJpiJXMaEK",
  "key36": "23bvtkEq27b6nqudMg7UjR1W3UWZ8gbXvXyAeh84ghYBjuN1TMyWbaGYy1h6MiPAHpYXmruG8znZuyQEVhpw9wWd",
  "key37": "3cXwq2kiUJbtPNc5o3iGq2uLD9gBpfSMToWWsXLGDDJ5AMhju4EwEwoUTEFCtp7z34nMuqUQ4XfHWEKGoWqcG884"
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
