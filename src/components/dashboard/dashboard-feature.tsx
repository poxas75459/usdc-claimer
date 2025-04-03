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
    "3zweZdauigLJbBMCwKxPuazPLQXoBP7ZZ9q6nZ96sqYy6m5SbV4noc7s3DYZwTbxFdjwGqRpt8NQmXJUXKh3sYuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c76MstJ7s2XY8R4UXZcwUPGt6keAuciCDAKP6y4ny4kPQniFJMn1MZmJcpYNfAKv1oPgDeRuMwqJbMzYfKbVxJY",
  "key1": "4d8UFkmJ7R9An3xTCnnRRkHUnUh4a9Cof8P8bEx3CkiCTUqc1EJiSuFWxuo8J1VPnp2p7jzRPjMwTstbDP852N45",
  "key2": "2gL4gdrU2GSzRhU7iEgGf3yvy18VWUKD4UFw5qDgQ13cJxrnFKq4stqxUTjTMK4zJi3K7Ljv1Zmq6q3k5wDn65BT",
  "key3": "5zY1hjyYodRMvKz1F4AAeDmD2XC1Rp8shEK3JrewCvf5VsykvC3S6NHwaLdSxPPx18138yXwnruDerz62L71pk5P",
  "key4": "2L28c4ZjAHT6NXmqNa2nhkPxchPnH4rraZrQz3Qn3pzazPt4r9cpKS4QnKVV75paUvVmkDBg5QhiFmxZgeodvivS",
  "key5": "3kVjT1avaEQEEJfDNGqWpq4gN7ARwZxEBKBHmBLke9bgd9MvdbVx3iXTRzLowCQp1rtTKZJ3iH6hZzyA535Y6BWo",
  "key6": "4jFsZYkknzBDvJAxcty1BSK2RmNfBctAff2ojQbPN1tX9aAsb8KZzD3cRf4YMwHzrpSJPm7oH2DznknfmxRGuzST",
  "key7": "6JPh8aLn44ajFXoTdu8STSVUcDJcLZzFe3wjFXjDXJj2QcxsCEiSw6zJm1G3MwhyTVuA2S7ehZ74rViv5i96Si6",
  "key8": "2tuWr7g6KT2Eb28MbyDnd9uC3tv1LDK6AwSW4zxeLQ3x8hrmiJVrt3spW9kvw8aTtqNjsoTAUbYTMfbbGxDmXUBm",
  "key9": "5mpqSawC3Afom9bhjayFoe82k3AkmpbwwR9MP44z82wkE8LmWzLAVDPh53CrCY4oCsHzb6fGNkw6vR9uPYh9koQ5",
  "key10": "5rnCAVFj5jxvPFPHTZMtLhqScWB5Du7XvQfmYjU8epfk3oHgdG6iH1EpsvVk5xPpmvHN7p3GMdN5yFEuzxurz5kx",
  "key11": "4BmL6c2sqg5pRAfYVdgvhooMy6WUwqUafcFfecYaYqarAUHuDWJAMt9quETWVsocmy4Ctho21Mb8FUmLE4spD9FF",
  "key12": "5Aq8YWcRN11HaxtG8LSHHbMhvu1DSEeScpM3dMc8PdYWtkZbGA63ndiptb5wLi53s3dBVuZqm9PVqTkmaoTh6vjQ",
  "key13": "5YkvqsoFScbVck1dkinzLtiqmpNR7rb9yrHY63B37zBRjLDHkZzo8RVyGWu57PDmV9vmz85FN2HBVosP1m7FFs29",
  "key14": "5JYwqdYveZPwuDSN6JdPwjudjeMTpeu23qxBqy7HXDnctPhvK6ShYr8NPgYsWniFXVYj8vD3u4thVwvk6RgTWfvL",
  "key15": "5k8hkgjuaYsr393FgGi3EER2aH2amrT9MqC1zRX3qHdCijX21abX47qK7fKCPVNoCWQreY4m1VsN5KaoV7rWPQ9h",
  "key16": "446UjKytsvWtpEKw1C88S9yPaNgm7VzFMLKvSUJKpQYEwMaQ7LqkuVK6uYWh2vZaouBYsfYg9yeoLzxS6SZB4YuH",
  "key17": "4jmrx2WVt9JVRqDfcQ4VjURK4KRm8udE4YTemzTGuqiumAa8UhJ1aidfrgTLeuTZVisWXcDsMuXYngBnpCs4FUN6",
  "key18": "39CUcLxHo9xqGDccpvPz1xzWh1DsNK6MDq5JrK1L8LD9QmGPvPU68FTpAmU6RVvLkDGH45T3zYoiCzcF8C4putF7",
  "key19": "44eECQZrVi3W4STjsLGMfZQ1hAwZqT9mEyt6VHqYtmakmhjdHnxCrsSm455PbWiWEueRP3rMgg6z1KYHYQEbUzkn",
  "key20": "4k7Lb6zVf4ncyHuPhx4x9sY3GNWiFUAio6DWUjXuMRgz76isGtDBewoUXawmw6kqSEiwSWZVbPX1dNJRNLoiTXf3",
  "key21": "5eNsFJKR9LJDRdMSgpAGm6pU87sDMqZVsdmT5BT9pZhJY4XSJNUFd32H9aVK8d13dgy2wCXAFhv5TFvbkAZx4ADa",
  "key22": "51CXKaEiCpwdaJ2fje5aMuNzbpeHRCFZD8Pd7RxTpEu34cKBFvpMJEGy7B1krZ1UvQUiez2dkXuZGwYMQUpxymLz",
  "key23": "jFkSXGi1dMydx5ZPPRsFeXhzdsGhg2mCRE6vHy3oNq6mX9zpSRBKcy7VLjuC9swdCRht782Skf9pryRaNhVqLzs",
  "key24": "4iJWD8PR5MMzrdc1tu7ZWNnRFbbyS9izN43GyFyHYh2u3Sa8uGQ4o9PtD5iyjJnpGPBh9FQUk6XQ5BKcM3LT6Fud",
  "key25": "4EWyiWW1BgSQsavS63WPZNKP2asucSDsuudZ8ePzEX9tfJBjAL9CSqBSVQhXBei7MsUZXU75R7ZeuQq9HtpfD64h",
  "key26": "3vdj1fSAv2BEco98VX8wZNyN8gaNq71qjRZ1g6FTEaBLJSmXbci9wntGBnZddo34p3kTwmRjfRXfPvd6mMngVMCu",
  "key27": "4tKNEVWj6m3tD9pYG9wS3eFGne9CndKUuDqJMFxht8cCo8TZ1U5mWFVAUfMn2QWo35zPhHvQ6yGL5ka242836h7m",
  "key28": "3LasYkgsZh9grrwc1pNiYq89mGVddB93gqZCu1ZrKXKoyobrWHh6UBEvkAEGeZUVGBWiquPaFYPvmANg7w5Njanf",
  "key29": "2bbNNaVqaFx3XyADZbZCtb6KqPtc1AEtdj9EdYimj9SxdFk5xWvmUGsgKkHpEuRy6SRWFcg6THb7BsW6NFKpQgEh"
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
