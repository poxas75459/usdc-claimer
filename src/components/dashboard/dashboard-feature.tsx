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
    "3q2Vj6CKnVMfh4GbVWhpxZhDS8UCfrVUnwHBvSW3y3xKJQKYQdaCcMdBiHMMkeJJ8iLgAJDwPpeoc4BFqKzY21p3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i4CXGBN6TejVo94D3zaq33jmQ8ypbfREo7HZWBVghgpE3ErZQCD9P9PAuVndhdMAHBjiQHCP4qdoqC6BXvXPmNd",
  "key1": "3MzJSCPbMB4PFyaQW7GFkGFErBHPwY5WSoYWSYFXpxS4CYSzUtcWudP8m32J15e4vEghVGSgK2xi5cbFKYBqqX7N",
  "key2": "3QS8CsdmTg9WnroTGbsp67EeLLK2KLBnZFg1ZxkoYvEWdqgKeiA1LHKrqMaEzpsm8d9gzmu3Aw9LeNyF5JfmgScQ",
  "key3": "5kvgDD1mfrFLiQofEx6c1eQygGo9Ed4DHdfuv1ch22uawoH2KutpphguaCJL9oPv7zYUUuiD7KdG68CTTr1J3qpQ",
  "key4": "4BGFNWNxK6e3C15jaZzceYvDSfQu3K5731hvS9FuefsBaKExVywJgaDYsjAWBvAr2DegbQY3kawrwyJbXCyjHeCe",
  "key5": "5uTexQtxQLSZNbdyhhgc6DN3A2vyMkFuxUvTYPUJN6aMxMR7n2mLjftfPCpH3vizBNDFHtsafqJRzDJMsYrsGEZd",
  "key6": "4JAqVXTr66siDXrukDywyazXr1dTfLqTy7M4JmsK2cXuL2pAGikD9WGWRYVGpU35bNVGu2ut16cYrGYvfTx9rEUY",
  "key7": "4cvaTGFKn9kgsy1rkELGFeXTvcRCnmNDbnunWgJMAakhzFtzk8kWYdnzbzq3dkAJvpPxWxwV2L8NfhL54SV1XE2x",
  "key8": "2b98aNhtCxN5PqRGmB22gaqGJGYWc6zBnEWNZ6pXGEdWtrmd4rBB9s28ph3uELW4bHBXDyYZG6dAw4ivrjNy8SmE",
  "key9": "3QbvGPwN6M6mrtAtQa46Yp4XYH5niPWGsftsxgFed6ZqCXAC5et6R3JurB8o34JesnVNmNPVsacJmK9BjWPnTquh",
  "key10": "4uxMhYSTeUvLV4idQR1LzufV8TEQBbxaEsM8WARVLGSrMh6kX4HhiD8Ff7SiNHNfwXAXiQSbknGWMqTSkkmNHYaN",
  "key11": "PR6NSpWmZCAxEmY1UZSEwvCnbdr4tSfWhkBkhm8uCyT2uLUfLPmKorqa2oQ97xg7UPSvgAsPKv89rYrRw48BbSH",
  "key12": "5d1DUB2DM5PNZnvQJdA6dFTVQqjmBqYoV6bg5jiQDc28V1yyMgcU29LrLBEQFFxun9VMuWFSnKWgQZ96DGxvtZ4L",
  "key13": "3Z5TRdTHzYXNXEpoKUn9fEmCZRni97iU4jcXo1KuX9agaR6JwiWakeZgQgSFBioAPaFSTWKfe2cJnvCQdTbbsya8",
  "key14": "5apPNwCRdS9bj8EzNfy4j6Qy6WaX7T9XouURehKVfUY7EELvuciYUZMJZeHZyo1VJP15p3r5QEoWWF7WvhCeqorw",
  "key15": "4uKTz6S71droLnksH4u1wKMEnDZfj1w1EzJuHUiHsf1bTbeNRNnZG99NXDU7fuPP3sqZKxEKH7pUdUL2tvN5w4LM",
  "key16": "3ixsRknUrNjdCcvEXLBjpwsHMzZsds8QanUXf8kD1cuwL13MrJCxUbowqeVUPsjUVYB8RPm7BYQuZm4AtnEXtNGd",
  "key17": "2qSRJHBGjfnpEB3nnAe77aPukF75eRyQHTLymRF4kfdexaVFZkmFcpc3Ag8ZyG9H7Fydj75QUQF956dQpxdh2TY8",
  "key18": "3eybfJ9Ya3VBMdr13wiDpEKqJ2wbtrZTSio2xbZd4JWmfqKuDLfJXZhX2aqEW5agdkbAthBBCRBdAoeY6YNE5N2M",
  "key19": "5iRL7336pnQpHncfi3JEiTS1mZ4GP4r7X6jBSX35hFrxcz1QRMsHbR4FgF7xuCdBUBvwTaRqnspT7RyELuK7N4kd",
  "key20": "5nVrvLjFMdvtP3QMjpd1tgD1yTbXCMj3fxAUu61hH4HgytiDZch1WQfBjKJCuWu6y1QtH7KE7L2vJVcz2fsC6HE5",
  "key21": "43Kq5YjUWoetbUs2rXp17A5Dqp4Eo3EsVpWok1ZBViReUUPtiHdmu1UPn5oryUY2fQ6hypPaMGz2qS6tRVk1gUpR",
  "key22": "5v7WwajAEVH2xxzxibvSqepnMgwGSQXD4e1CScN9WsWciUPPqCrA74bYDqsN1STEKRYS5Pd99xtB9CCFvuSTTZhY",
  "key23": "5CP8fg76ZUvbFhEEEAj35FXzKLwmLaNEQ7ouXQ6UbViec4TSuj3qSXEuohA9rGaKXQdjjPKu63fDVRqp1GsaUccy",
  "key24": "2tQK2mNfc8bokTun5UFjz4veXJJUYbodfmiTZBewiXthDRFbzMQXdmgWmMpgEgKWgJDowDTXkosNowuCtEnmavxR",
  "key25": "481dWKS6e2HDEM3QZZ8CiH6RcNDPLjkkRodugYkr8PSRWBKUEtSE34dn86fkaWcSH8mGE25YTmw8jJ9yaKS7q655"
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
