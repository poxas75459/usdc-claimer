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
    "3Nu57tATBZRtHLJh8Ex1QSYSbL1toVK8JinaPdAdvgNd1U7eSJd2vWi1o29HfbEAp8vLq9fm8nYjYiyiAX4GSaYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j1QcehBN9dmM2t7wW9huYT6CT46dfGjkLLYMvizarRAMvU5SqiPaDDKLLug9zXc2epFMHz41XRQ7iZ8CrTsVfHS",
  "key1": "59jM4n9jmzR3s5me61vgFreYnfNN66W7VH3tLocSzZ1JWxkFFf5Kb8bZDLmp8zAp4rDadCyNvbpTbDGFjgPENdYL",
  "key2": "41dNgbKEWWBrdEr2whCTTNForeyAUCBjnQwVYBrM2mBN7sNmo3GNQnqd9cMeqGDwAVwXnPVAYQ1RicBc2Nak8u7k",
  "key3": "4fojg2uuHNAem5ce7nbQPuLRZg91PKhcTcyRUruCDTQVvoHfbppL5h25c1iHS7keDmHST6QpLFwTwqdE5FFapA15",
  "key4": "55Mt3CAGojBM2hBbQtXoXJ84mFp2bQ7UtQZg4DpGMkuFspMfVftD6uEaiJwCkSsnEvXUM2KUuCw9hjbzfCD7pTTu",
  "key5": "2Z4TaeUvFEwZPyRGUdU67VXgdcYnbqTHLHRKS4kiYCATcUCYiYv93XbnnJepwvu9bcYCxRUmPkCUdjxUGoyjVZWP",
  "key6": "5CEktcqL7NnGPmoZaSGB1YVQFfc8j8Jhmi12TAPC5VYbuidrnuKZjqwy6CrfKeRmt5E8wFvHxpNX99Q26GDcxVNP",
  "key7": "4otuGjuCKC699Bzso7ZSwvMzJdJ9pTVnLG8XrLDidPoe2MVFSPv2iGipPWfZEuMNRYqYZx4PbKgtkRkkWjLL5ZZs",
  "key8": "3PRHzpcaSGQNxjc1Aqh8MnK8apEN2XCXJk85jxeuJB1M3ZRZzudAfE2itvACfjxDwZnzRtkPUxt6b6aDFHavBWEc",
  "key9": "66EU3r7aEfuxykbBuMRRi5xidEnpaH4JruoqGVvJQ2tcN3mFkZ6LT9EnUzGsqtayxAWd7PGpoppZPgCA6PM28m4x",
  "key10": "5giGr9NZu3PYNg7FK2V3fCVUa6p7J35Fi9eGTJYmx5KPvdkc1tWGnujRZnJcnza1H6jEgmgwqumsCzioTsXLiEC7",
  "key11": "sTqE9FKJnVnm4ewah4ohSn3J7XJ52pTeL3gcSVSsh7YKGDQWLcboP4W5r6jeDxb1xiYxUdEjHaE2kuk4vXsG2yN",
  "key12": "3KVpyoRPBqijiZCssiAZYwFQcg2W6x1MmrCanrZr9nKS9wiUDP5p4RYR3A6jo1ZhBKSxAF4WuCBkR3Dz7z7pfRaN",
  "key13": "4NZ8NCWKo65vQnuX5roRvinE9d8U8YUB17X6NChzRvSbPJRMjZF2m1HpxixYnjxoCoFXEeddZWUfuFhZnVefcYDB",
  "key14": "2zue6NzMVs1Bvm9yBLRiyKMGs9kV76uh7DKq4wz5kdwzRm93wFdTsadSVuqCRQK2H2qeZgkSPsZwuki7EvdMNtAp",
  "key15": "59C3cm8X4hq7XwxEeTKzUFiJstpquZgnZdkWuQYNh5vZ8ZdBJmfp62N6re3EPb2yU5KweApU85MjPa8nwmYPjxGa",
  "key16": "4d9rvFN4eotCqQv5PWjJLfxZGj41UF9fivrszJiqJcaXn4hurkUofq7FkNPogs7z3wdm52Xmy3QbitnFoznhDbLs",
  "key17": "4WXajk6rvD5AQ7dgfhT2Sdzebqs6JQXQMTCRJgRtssjXdnuNGKuHkbJUqTjgVbs6qPtKVux7HnwvvvMSbPMS78Cx",
  "key18": "2AkkFrG7GvLqNs2g22i3BuKGoE3r21uidfgWDKm4B49RM54CyuLP2Vo9pvRCA1CCgvLDRhpZNucs2bomBhYk6ea1",
  "key19": "JdgqNgnHseF59J9gCvXcGko264Ejk72gBwmRgDXi3DdBVx8aAeTEM3ivu7uGHq1VW6wUYpVxBw8hYxkYaa99vzU",
  "key20": "4aeNCsW4opK6NmWaEvw8xwiJc8e2GJNUVRKCKfpMTL5azp7t4rdBRXHZ6RzHWk1GaotD8rviBXZHdgjzx1TjCa26",
  "key21": "47y1XPUCsk9YKxBgPfnPop8hgCTACZ3ed9Z3WuKouzeS97Gx1Q1jdLkLjk8JbBzUmRJHY4GsdyzJG5wjkiVBzqoS",
  "key22": "u8AiqJCX2uMFvQr26fUb1GASjhzyekooqa2vwHpU7hraBDCZpEtWkwXNQbaMV52NmrNkzMLoXJWivY5WB42eNBg",
  "key23": "5MuUCckUtgbUniwHpDS21QXYPC2mbFh8mLyZ6BcqBzuqTiiXzxA23DhYFGCbKpsg76VbGGQrpaw8ixyXVYcd9JE2",
  "key24": "63FFjuaLwyePYXDEPbKwHAixGqWACcYVx55Qo47ukhT5Pamt6VsjKmHDdMVj4R2818gKoZNWdrVULVVGBNCKeeLw",
  "key25": "4btLKDSeNeMXHwhSA2pxESctAieNFEtMPMtEVUQBDWz9MRisa18gP7GHQNDSMm1nL8So4LkPnnkaeNf95Dr9Tkbw",
  "key26": "4XkbS9hciLW7uogThUfh3q1BevtShp8zqaK5uCswG2m5eVHdj2yYr5ir2WdcuG49Q11bzYmuvJMVVuvuztDenSny",
  "key27": "8Bd2FyR1D4rRwDND8BU8aMfktvjLGxnA7g6kgT6DQ5WWeR54r121tvTUqNWwTHYmi3qUrY4Z69TLvaXtRof5hiX",
  "key28": "5umvTivdP6GK76L1icvsfwbSvnyNDapzNur2WsqDY2NAJMexFztmUXsDm4jvGbh3P4jGHcxdHutu1tCnapV3A1YH",
  "key29": "5oy5TUftTCBbzzQ9todiGsT5MHT1xJ6R7rpHWb8dDTQu9RzFdjcjURo9tmJ7EQSeJqXEJDwuRvmwjRxTVDTQRqvv",
  "key30": "5CoTwnRZaEzbB2VYPdVRa2nEZ4nQ5yUraEr7zhcjoQqwmpFAATLbtuavQ7QRtLrSTeJpiU4FNFgHGrPGKS1XPXMM",
  "key31": "3PM84myc3Y2JtM8Q4bXpRLYSB7iDDgrdfGJxbxCghrRDWpKWcp9wzPMxz2cxssm4PW4YJ7ASdiBc1uGYXMmn4ZWG",
  "key32": "5qP3acLnmGVswG3mEKdYF6bmd3ZRvnhAXACdR9nxmiP2cFErXW7xnViguyGepNAbVrVU4MudEHq3oPzBxvXBJXt6",
  "key33": "53ZiNBywwXjXzNWipnDqo8h7JnUNyVtmYzzZC3iqXPKBaVYHLg6C7YFzxo7kyoKMVViRt9EXqLsgkTtnxTrCJ45E",
  "key34": "29nodVhW1N7SoG8gWGC2RyTDgfuMFW6xuFjugH6vGpEzvbFrzQsMV3xECq4B56kWEYTARvsdsD6NhvKDSqpxzzHi",
  "key35": "WBzv1LAjMoUFH7ZtUB5zraaFuAUtZegmG4Ywrftx5EGFMpgcswdBhpQ2CuNzJMwpjVCYpu58VPwUzWUNH8oXi7W",
  "key36": "CmVzLoXxVzAmWQGERfVXFg5jjXQYfbAvdgeVnzQxhSBUXzQkqE3VpCCtYFP33oyMFqyS5dtjvWhWTdRcfsz741J",
  "key37": "27QEK7aHEJz2RbKgQHnWaJFJR1i2C2GE6qBMJSHBSmdoecp6JePJvAxxvQBwEG6DNe1iuQJWzoA7ixCf2ZfWo3dF",
  "key38": "5mN8RmpFf4GuHoQJjSNorYtRj3Eo1kcxWAMiVo63Q21gnhMPd2Ny8SMPqiRobBB1g7VaCr99AQGeRGHRhRs6Xw8g"
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
