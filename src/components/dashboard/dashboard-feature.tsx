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
    "3GUUnW8BKBjjQSG6fs1RaNrxywGr8wZ1zaXyWrmRYgmdFX5u4LcWWAd1i4xqBEhriigayWrpCP8UXmff7TuzDVtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44V7G6nMMcfh4HjXYdQhqJZvxXiZo7Yk7ug8Y9gGW79mDzxPFbpzGR6GshvckuY1f1FSRK1cLN373xZ8tTBDNWAL",
  "key1": "57GQTNyDFyCYsBYfxRSQfaFsErhFXCDMFX1LnyzFCpF1mefL184jwpUSfRNW5apipp9Lz5dvv3wtzsre5VcRn6wF",
  "key2": "bKqSzzM2qE4DrKRSZ4FAGkD4hP3nxGfbJuqFG9m1MXWoFuhbnZuLzGfux4AUFBdm8nrMhCcLQAjmYV8TsmMqeYw",
  "key3": "BpneMdWcLjbvn3XrkjztfgTdohKW5NF9JingP2FDre4kik6rcH8wNFhgDfDvJwYA69uRXeukS1Cq9YRb2QDDGHh",
  "key4": "5hcbSvtUoqByE1mBxQmEV6uzf1WR1D6adk2hun5zwqGpggsyChFcv78c5vPdsrLAKcyWqaLcqmTbK4FRCBKutzq5",
  "key5": "V6hhCFJCHd21RnhG2ebYGbyDp9fhh8Wcd23xzFLjm4YGsD9SbMbi5YebbMuPJz9D6yC5dmGSuzvC4VzKBdzcnaE",
  "key6": "4ASYSTWvkjYUAvr8UUTvNDMsqgU18MwfWJmZTuYzAsXubtMG1pMzP4Pqk37ziPNodZ1DpXJSpALVkwwo9Exzp1Lg",
  "key7": "64dYfB9JaAbtNMH2N79okDzNpbM7GJsekgzb6bZFUUR9P2KYotxz9SjVKBnCDrKt5PtbocpTfxgMy9M9FyB3PE7h",
  "key8": "QBFSpf4tFc8Y3eX2JoDRYVDimHfh6MpW3AKZryry3ithYd3qc6MHAhUxvnbw3Q3WkbPBdYjqdeWACm5w3XG9Bad",
  "key9": "2WEBo5jf2hmZJFXa2gCrQME3qngj2TrS2QTuuHhQ9tD54SomeQ36HiqbhjRVsU6R7KFid1Dq7rmfxterWTqPE1np",
  "key10": "5Z8cJAdZFBH415wgDJqTCvJKBcKomkNyzgSZDFzkCDYTFstxE769TPGuPY2fLLnFQw9EgxD2y9yNQoTXkyQYDSqk",
  "key11": "pYVnozJ2Wjr9SfhLQX8uwzcQ37fRPQKUTx9SUCSLijWZ5QPpr3JBy9SxsbEo2hvW3qNa7JYAjpCW27TSmQPctev",
  "key12": "5JjstpRsGq5L9MUdQ8ozAMwjq4TE5zRyi7ZtLdtPyD9eunTYM6kF8dbSZmgmTjcfZQPjv76zEhKP1RdZNmMvDqi2",
  "key13": "4ts5CrJHCxcrWKw2SriBgoJqRH2diWKG2p3rUwwdEF9Y8Nr84qoBPzmBsDr4muMpXnzrwPNewcioM2hUQo5tunTE",
  "key14": "W9dDatftA9aaQskuBWNFPftdVjQ8eFXnkBYTwCQtkuSDyyuA8CGFyFFeLz2kPrsgBuhUfzBJuGSmPd69CwgApiS",
  "key15": "35HTyhY2vfpZDSfZTiZAQUrkzrAVcS4YgavRcjMM3Zj4YoBGMhibcyJtY3jaxtoqhMV3yDy7g1iPxhx7fqt3UuFv",
  "key16": "yVqRCnxEEWsW9d1C2iXZYVQurvfJesxrZLgcZJy4mqRGEKgCZ75dwVCBvg7MbK5b7iz7VQLRjedLXmTLBmpenD9",
  "key17": "49K4rPU9SnjrkQSHCBqWUiFMpk1FxC86bUQ5JKnHnCsWBecEySHEQP1dv9bVLogznQRQf3bJC7DeuretknW5MKCG",
  "key18": "66uYr6mDbweqPw9ZYZkqnxoMTEiZm7zgV7aVv3sitkPM7Ui4EPdREM6CEWyxcpc6L5JZt3ZcWyArbsoivggU2huJ",
  "key19": "mDwQmjGLtD1QGD6R5jjWqYbe8sTQcxFd9i1X5JNuzTMba2SA5bPHR1DC7ZF5zt12xDjp9aznLT45X2pcqA9rmDB",
  "key20": "5UP77z2QjvJVrhPJkFqbNHRgtsHG8viqJUmeSMmu2aAnDvSwxWw8YvKPRVWoWz1Nw2rzEZbUS5bDarAtsZnoHqn1",
  "key21": "2AJx1bZSyG6RWJ5otvNhgX55t1WZNMg8DFSSojLe9DTwJgazyJ8E9t6RKCkUcqoR5WC3M3KH8St2Ad13RXeNzBAk",
  "key22": "4iFb244AU653SjxKTGNx7sMLFdsAQrvzWnRxRouKJcWXkWAkwwqjxnSfRMvApo9VFSp7BjCFHnPhEY3WrXJEkEsX",
  "key23": "3NWU7ogKBdysGYFLNNrhYb5J6jAYBVa1ZFSGha9FeWexPhMUZ3HU4Nf9HMG836njcxMTpySgY37BfdMsvxmgvc2t",
  "key24": "2NJY47qY9B74tZ45ZeSAerrd1nth2hiSvAySnwFAoL7y4QY2sKTaF5jLEFbn7vSZ95c5s5dpepoiR9TmJVW76sPj"
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
