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
    "5qUog3w2WkwFgLv4EyfZDfPcG9DyzKRp8BSaWx34Ugu5q1uqxeDWKSmFZiqxtjpoP5vUJ5HebBJsFwnx59Tu8ysR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xuw9NXNKhig8ciSPdXH4ssVFDivbFNALxxjF3o3HxEu1LpUik63BMx1fgdFiufjH1afChjrEwAkZisBTzrn1eto",
  "key1": "2yDN7jRN38dSr9DhHHiFenmZgxwfnGu1vXpgS3EDShqqcmQEZjDiaQi2NLJcgD1HDjKosgJk8r17tMTuR6zy1gTv",
  "key2": "5huii28NtU2VrDt9D6dbpa2nSYh29ctToqvjHhC51guuRFCHzxMN3Vx5WHYXQPLwwAmGDAUjKJg6ZJmCrfKyV3Dr",
  "key3": "dWdnB7C2KAsoXvv1QN2vJtEjXecdowhtjVCkJkTSzNASM42egeYCDHvMqtnpBdLHqEV7ddM1RJm4NkkX4jmZX4E",
  "key4": "3pq3T4PK6nBGb3j2mEntvWvpwbVfk8NxSTYNV7cydjEpFqJQEZb3s55fFXxuTDTGryQZUM1yYeqGGVX3a86VLVE5",
  "key5": "2A97BExq9Gb8qFjNdNcg4YBptd6hcxVfHhViHA7UL1mNkYsHxctcNjLH3amTjWCMTSxsqCCc88fQ5XUM4Y6tLh5t",
  "key6": "51z1JXJgyBAxsJscNyvFfMNBqzhb7usmAsjvhar5KVjGvQUNhN7V8Rufynv426TfkGaFSmL2vcq8tW2eqcYac2Ah",
  "key7": "3AGQkyN6MkPtGYXJ4sNaADH42h6gBoqpZVbSpipbXmSig5Mo1keQENqGQvdYM4MK84uAzXG3LRnfULeJRXtEhZ7R",
  "key8": "22iykvw3ZUNnowqGWrDdYUms2UzBJQbKddzZFTNwrwKtcPzTUgCMwxLD3WXXPHbhGGFdrgALxDzHS2vyEs3tVLyZ",
  "key9": "2JGB2LjsF15JbyVzrz79N5UaKrjbHbrC7ciQZrGAhPoyTjZwRmc9GFYkkkYDV7ZKn5zghrjfX5nNZoob6idSjNBL",
  "key10": "3JTPHDfyE5ArN6Nj2hdjVkBKT56VZwkFC3qWzkozA6WYYPJn7V2hXGgcRtWZGv3rzjTYkvhsFqmTAWxtybGUFjSn",
  "key11": "5eb9W8VBTenzaJRUQJk6avFjrrmYbgizAfhbXXq5rhYqZ4LP9wDuM8ozTCXRptD8EHypVjypzT2kkMJtfAcXVqCo",
  "key12": "2Kx2sysAPwrPmKCzAjePs9uqsUZiB7KqhH7rzxYuc5Hp9SXSkiciWgqjR9mVJTnee6YHKCZQNJs5TCk9ZszYdiSt",
  "key13": "2SvbNJ6kRWM8qxPGeyG8D5p3gLK1GkYEHBCz9DtthPmM4NUGPkRU3XaGFn49UYwZ7kmh4dRqQjvdpTDEHTfDoZbS",
  "key14": "5ad1CYoJbbFqxbp9JMe4gF7k5pWD8wBsZJHLbUghpmS6MUNkxiEYsd4RZSWC6aUedD5rWAGpF9mtYzYUnSYeR5Zb",
  "key15": "nb3xBfNE5Qg31Sovp6ZdGTAwvA46jeyN1F13BeGykvwrRc3usxRQdjSbmYzibwpczYjvrrt85kTFpLMgwGwXm8J",
  "key16": "F8ZUdSUADAGDw1AAY36wzoppf36kvbZNV9DhrCZWivUvNyn6S2W18RYojt9Bqa1rGTviSKFaNd2oAcZtWaSbVa8",
  "key17": "4qrEwUrs1bojayWqK8sgvhjcYMBmWn8KuEyHsmkUyrh8eanWgfKaWFMw3r8AaPj8PPTDS88758uMwcbHbg48W1Rw",
  "key18": "HkttQRKE3D9vQj4cyX9iXSCvPY4qVe1CggnDxYLhdMCuPCoiMzUfawXSBGoysKfZtEad8rkp9MGLZkphiPPxNYK",
  "key19": "dc9VFRpK7kQuW926AiduMkq8J1PzMEPeCodCPdNgfgpYALfPoYF8aHGR6hDyqkQRVT2CWkcacTPNUBhE78PLT7p",
  "key20": "53oqnNNeFchbn7ELiUzsJjd3BNMi1q2S9ShfrArwmR3qvVo2wkncjZVctRv5jZ449NHJLexQTAmY3rvjzQktfsFD",
  "key21": "4AqjwUPfkFC9dgQnKWhTwBNLcb8VjcPVUr1NbRrZdLcxSopY7CERNYVtckcwWb1uKUvZ9eFkbh9mD1u6Xnt6ti2a",
  "key22": "5cYskNBQqS2nsGhKMx7nbWrUsedXdxthYhwiSTFpvhQteFKZik8Wsozc4SsFGZwXZYLnsqkEatsThiWHZJw3tWUi",
  "key23": "2o3RCCRvz2hvKdTJ1qLJEm4x9jsRoXgzXLPDs4Eu8Jaq96f2hV936jJmunQMTJc6gBpUEeUo6izkx9LPyGkVunaf",
  "key24": "4ZENmRV3m3JmyNb3ZUTRzPAwJXjQA8tyr3TeiPAZGxDqtDZVQVjUbUoxeNyGHDhHC9xBg96sZ8aXXFjTS5ShjtCQ",
  "key25": "61FueNhMZXCet9USXcrpRTz6VxkEn9a9unkiu5BtQFEN8HTNduD4vf88DdCV94gFiALjhQ5oFCunom9tWa63S3Eq",
  "key26": "2pGqeyHD3ssq1ag3gVWMA4CoqXcWh6exPqXAqBwBgCoimjS2Dzux9CZe77zRLA2vKDydExvq2HQrnr3wExJLvkvS",
  "key27": "34aEEgu1W3qcS5wZp8XBnLk9VdqExKMSDVb2jhdpzBxtfXDMRaDQGDJT5tGh9VwtZsqi8nAQ5Ckv2wK1gkH9gsHo",
  "key28": "4ZDven7bZgRfwdPCQZogVyg1nNjznmokL9oFiaqCM1uQEbwwEj3HGD7oUpEyRqnJ2Tm6kwHJuDTF9D83ZmWBEFA3",
  "key29": "5J2PjNnpxHthU7e3qkPNLyoTrm36t1uAufzb8rT5LqEUAppo4AZeZVxNKTPQSZNePnJ7Rz54MQY2THVWLHvScR5F",
  "key30": "5bzeBtcPjzzbiHJsu76bxiTG999yZ6aHfQ3yETiLJGSqFyMv9cxULgAphH7vkjrGvSukKGEJSEZG2EEusfTMf3M4",
  "key31": "2EzpcHdY49vB8qqDq8ghhBR5NdZVFFbnMSAdiwTTxW4JwLnVkA287hgBq9RgBi9Tnm9DsX59X6XPARnEkpU1Yz7s",
  "key32": "2oimnWmZgUywd33x6jYrYdx7MgkMhKG6DkE8oZJvkSkz4doAGRcMZdyaWCjqhMYQbF4NF3c4TAWojUJRV1a3khZL",
  "key33": "2DSTX1eDwY6FNUFBuRqceP2HmGzp9JzQRYyBK1uBvNYeowqKrhYBTwznGqtPGkRqqmKsAXSMYVqDEAHC7c4yyfDG",
  "key34": "56X4MbW6Scs2sHr3o4ExD2W3q23CyBpvrT8zzaiLwwRqrLGj9mhUjAK7sv9oEa71SS6toc56C8mK6mtCscGJ8KzB",
  "key35": "2dK1kmBipZS1MsZ2BeeBrRzveqTFt5WUibL61b1MYqKd3H8ooQYC6XuHp7G9rTT2QoCDawCGqf9UdNmaCgJowQ6r",
  "key36": "5cnoWXRQZ7Pq587eB1wPVKYEErL1p71dtCLW2YhKFj21gqnHi9Wd3Yk6euitM2m8CThCj9QBjmaqyfY3F35J61dE"
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
