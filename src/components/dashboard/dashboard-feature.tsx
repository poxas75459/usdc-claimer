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
    "3p1az9aV6femSSG6VGzkgbniaSXQTShLY5ja8qkg6Re98TPS17VowJ6MxgRXqen3wuLbvVEhbPn8fTuckK2iskPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UhfB1Y3Fri4DneSqdi5j6iRb8bgBkP6yffdSX2cY67uZ3ca4BuTVWNHcBXxNnho5vvwK1anqCH73M9SFSX4K31U",
  "key1": "2EpBvf95QE4vJQK5LD7TuKNYxEZMHNFFk84Bw4zkw4pNT9SkZaxcLHLawS87nLDHAN6z63YL321tzqAsd1eZXv19",
  "key2": "vaab9X3Tv7Ljpq3szJpdLu6Nfee2rS3kaGwNXYJQc23vuJYvqvAk8y1wUFiJtTwKuZndaL3r7hoQUZ2uaUfmJZZ",
  "key3": "3SqpXRfAXZ5mZXSpyhJLjyo8nzDMwybdGZtARzjG2WHTSTMkYtYGyNySXLSwpBoPD2enjvaFNydxSppfCVy5GA1W",
  "key4": "3gr3THFGW5hJwVLvTxfnZspUNj7NZWQ61WCgpYLJb491e8tRx3fVS8B1461iLtoLYGfemePHg1ud59LDJDDFrYTL",
  "key5": "4GvWsnp6QVZQhjoY31nShvgDgHMQ3LTcGPGe2ahahzoMNtadvgEAK7M4BGDYCmKzAWpiHC6PuaShpASbJPAoRn7v",
  "key6": "5TYKbWpUwpFYgd3GxucXn6K2oNav6nwFuMFqV5uEeFH5vVUUbyzNM4go35UWNMnao544Er3LYrXjHJB4hyBanxy",
  "key7": "4hwVYbmC1iCGMMBSBZembWofCSGvAy1fLTDeuB9qeVXdbT9xMGYGVpJQsFueKz7F6NbqbZcrRpDDTQFuTd6yLRcA",
  "key8": "5RqZbu8GGQVvbAej1kk1jaB1PNUMeyuU4m6vFwE5ax223iqDE6MzwQYr1UjJ4Rc79U9UAeZszUGGgbmdb2P2WmpQ",
  "key9": "39z4NrKDXY3c9aND6LQyxs3n6K62GrVRFBcZmP9jU67g4SoTcMeeQVKsjHWDi9ei1tZCUqBKbfj2Rofnz1zQguJN",
  "key10": "3SgkV62AQ1Dc7GdJ1Ex7atpGGVn27WVujUkQYBkywkvZK1T7AezZEmvQZxCd5mbwHZTjxmPTfD4ATGfR3xT2JnRx",
  "key11": "24ZK6fAcKrez5SwcyocnuAJsZdo1wWdi6JVSDvvF5b1C2yzybvwa4pBCi2gUajNwXvSNVEpZMhnVXNs2hWKszfA3",
  "key12": "24m937qjPB17LRMvBpfPTFBFY2uzhZgRaBzADb4UfsS6TWQywAx4HchckmNKBzKABwW4Y565KseZRik62EisRhsp",
  "key13": "38hw966A5YqNXvKvkaDzyeX7RtXXqEVWhPi4byFPfnefLX2GGvZK1S4DYbvKQaNcU6pbwxNW8qi5SSfjYWDHnkJY",
  "key14": "4yXkvbCCudfmhbqBn1pS18GKgmt45k4KscE6gpCH1EVPUvTfBt3NfLg6VhPpeiUbFTkP1FwZ66f8jYLTCQ5ydyaM",
  "key15": "2YtWdGBxGRupiRpbKjFXFohXh1NupGUQwG7X4fYWztzteT4X15idPvbeUGP7DQxanUfXQEvxGG6rakEpvd4xUSG6",
  "key16": "XXZwKaXna23fE7bU9DScNPTMA38rXxPD8uhqPCN8oNivP3ST9pT2qE83Sv1TxyGBjN8hhXjtKZiPYWBpQByACsB",
  "key17": "3SaHpVY9D5e5eep2PqocJsaSmCCwbRm2VAquH4kK3f3SbKUW3jpP5z9T9yDwYBQ2fh2tRrCtojTMN4aFbnuqwzQS",
  "key18": "EVbzNRbdoo4ssCYZyGG8Kba2JDLVrKVixDRUeaTdeYvZ7rkxehi4bzmivovqGnPBxSe2QV4THD2unChu2hQkxan",
  "key19": "CX9NHXbNUaRhsCmGMX6ogA7CymXAXcYmPZ7tLGT2V8qQg7PhWySdSXw9RqAzPLYhm98voSZHu4v2KPAUUXWFQmG",
  "key20": "4qkJRSdqL57eGe8WjF8AfY7N9GLrScXUQicq2a4tAnXoyrn8RmFoZTKBjqaFLdfKQb8ABLjLePLN5UK7fbnsAA2g",
  "key21": "4pvfgsx5BxqBqUWLteEPiQWziYHj8aP5EcipHnFqCFhcmjbRCVQ8cCP4buWbB7635rhF96X98C4ne1rw4C96TzUm",
  "key22": "2uVywRj8z1wEtTGZSfUuzp2E68EXRKVc3EHTiTSyvsTvgLUjumB47bJE5H4KXV9wVyLAYPSorKxafDAFsDHs9giG",
  "key23": "4VuKfxjP3tP9EvsQRqxYNht4cNYrpWvDnkbmGrCGjZJJpNbwXQxCKdDbQCt8tKPAasg2ive7hUdLaEQrvUPbLFBa",
  "key24": "5XZNHg2wUWoeQqoWQmKjJgNWRhp2atsAJEPXN85sAjUPDCt8qAkgvasmT6Q2ERjnpHsHZimjiZ6p8hdd8BiVPFv9"
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
