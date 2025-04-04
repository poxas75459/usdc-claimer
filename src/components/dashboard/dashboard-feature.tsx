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
    "3ETZ5anp8nSFKFpCy6zWrvSJkPQVr2F8xrnyBB22fVQ4z92uP4jyDFU2eVAcQtsG4sCRPEXomgvx5ohPm7mtd6kT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SWJWokFz9foZiNwYDgwwsbuAzBLQc6wZBuhHxfcTJgABYTRiCwrm9SNAnY5Vr1eftZArFEQc8EYC3qT43WDicEE",
  "key1": "ATa9xwXN5PktZEPrXsGRGEadJtBnUbUSdRkNJaiV3JKLNKmqmQ3tvSenKm5CPE9EUVCkAfbhqb7YZPMn7sju1Vi",
  "key2": "4fHkh4SxNBJjY58fGDRR1rPqbyEg4Xd5Zz1D2ND5ukZnqWoC7jDMGczVhsgvbwZvRQhjGZSFCeKoQxcLFDJtMxRP",
  "key3": "64rSh9fb6uBHKckGoLbrW5YubfQZYqoCgv1xFefnBEyqBY16gyBHcfSEdsTf7MnZLXRSTLZEbf4NiDw5kUPgmMoq",
  "key4": "2N4GybHtDswwkcS2nsDcmLELSyfe6x5aN2HTwDxbjcG1APsDqRfa5wxaKHNGgVRo534QAFtVD8rtJoXiKXFNK2VM",
  "key5": "647c2xArkUobq6ECTzqZJyUeZtpnXp1CYQ4LLC6XBJ6ojANuEAaW17vSfMrUwtY6Wt2DN58ZsAzZMzKSNb1joeu3",
  "key6": "4AqcXpaLSvxkcRRRvQauQSoLk9qe5i5t5sz7uJa6Kgej5z5HMna5je3TMp2fh6nLu51x5h6XJPrcwgoFwd7mpRSU",
  "key7": "4Mw7QAo6FjMPQK9k4ET2Emfr5dwgAGZf6g6oPazCzqbyf1Zm91uUV2d9cu47fgMKL3VPoYgapNTyKgVdPH9acL3W",
  "key8": "3oDF2AujRmXtJVe3S4w57rRh1Mrkch56qp63aYjXrarfYut9yfvj6fs2afdWgLQ2cgPTBLQiQwE2toPhLRwrrqA3",
  "key9": "53XTHrknSQQVX3vCAy4LGGr3VbUPszHvGdxRs4KVT4CvcNRLfZ1Zk19oxSWNnV9ZdM5uSKWRw8RJFt1jG5vj4b7t",
  "key10": "5RkxJhZxaRpjjygUiQ4rhpBZ7MbmpXrwhmjyenAbeBnUyscrNXDZtXzMj4xftkfomGAxwLtPWgBEs8AvoMZb5NPP",
  "key11": "53bh3cfqEYHv29SGRj8QWc1yV4XRefseifZfvyMevaKAC5Xt9k52CZZvKjEP4W7RWhADYRXUiDYwvHhyTCPyTDAE",
  "key12": "3e8uEVGkbxT47P3EyokNqyyVeEjg7LRvi727rsDJ4nZntUXHgLuuntEvLWRTeVQDZjWaJ61eLUUBTDydCeWtSFmo",
  "key13": "4JjC99NPn2A6reuwgCov66Sbaf2X6peEPcF93upXfetB92hc1LBid2ahMVxo3aMwaZyTwaMEWFeZeAw2emphTz8c",
  "key14": "35RVoEi2iXDBb1dp6tvEuW4uaLYFSeLzmcwhGupAsKiKQSfQXg1XhJkdmhMpB47nh2pNi7RB7RBUKxhGckf7Avju",
  "key15": "5aYjD86kJUhinEtRjTH9XiqCTwdXbfXRoqfVBkZo2g1MMfnXmQSBQj6YHjABpstypy58Y3UShSMmued8s5r4NZsM",
  "key16": "6bwHhtkGuWrVmVkCwRS3r24dk7vG8GdJ7TwskZ2ThZFqLHc8kRKuzXV192XwGUKVdfasE4hQpub9ngamyVDN6f7",
  "key17": "tjuaUyMaaw4MNv6JGQitWBXa4vsx3BAPFooZ24VAgmz2fTeAXDLWBbDtfnFryoaZnEperQaMGfiWgEakFKc673R",
  "key18": "xK21G1oMAHLAKnfqerqmvGsz6BMtEx14qV7VbpajYnmguoXuwUsRLeuKHPUwLVDATDQpu9gMuw5jkuShCv817X3",
  "key19": "5CL8Xu9aaiq21UaJjCdzNdLhqsWVaLnEAFPR6GUNMzrA51aCQKqcggw9U1fnYTVx915MztcgijHZwvMf9wfpiP7L",
  "key20": "4HbzxTb2KPUnhcqucWnhfwuJGfxYagsPRuBX94uwkiZ1LnGGFXooBYfJCAztG1gw3Y9cawh7SSGZyDhNCceFsEbi",
  "key21": "5KtA5Y5pdTHiU4oor8GowZLZgJWDuy5Xd54X2nnUqfhN8moapqg5ztmuqKxzaw99q2dJKTJVtGQmEz9cdAhdSCgU",
  "key22": "2ik7Me3E4uGWeYdNs7Uf4JWZ9gKpU9igFXvkuKuFrT8RfXDV3Wkpw3z9EJ6CBXtvG6b2q64rxdDASdMZJ61ShzF4",
  "key23": "2fN1ims7Sv9LEo2DjHfYYuHXXkM7ApNjsKKVBqGqj681xF1hggwp8Wy4iM5SUa5hjh6DYA9gJJNhJoRZPT2zRRwU",
  "key24": "o7c174AePpgc4ZJEqPjg1DYh7VkwFeHsHb9hc82RT2vftbCwEazdaEM9nnB58AWsacj97YaJ3Wv5jdJFZSEkBM7"
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
