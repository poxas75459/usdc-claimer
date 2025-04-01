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
    "54GizJ56ntBJb5U8qZCXG5gXh5LeinGPpSsT82hyGxd94M5kRD4m96rA42GQbUatyhAq5GZesdsAREcLBgCaw5Lg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ps4jHaHPpqWZSZGvF6QNv2ADRBuxjUEqkg1NzkrB91b3J89CWTbZ2ysfeQ6NgVqMWPkoauN9ArKE5ziod8jyB3X",
  "key1": "uY74fFMpjKhR9FC2wE2ne4pYAmypNjYSP2PuMrcne7J9KRhpfD7Uh8KmjHS7pnSA6xMgpDc4AUuVea1yszUfWhv",
  "key2": "4sWAUdX4RtActw5UubLuwYgrLj6eTr7CQ2t3q1u2eMw5Cdi1RefNyyYAZU8LPy2Ccp246qdh9K8JtE7USgJ4arDz",
  "key3": "jzGSWmMyztADMEfPzudgwJMWVh4J8NfeVdr96XpqyRrY9EC4jdRcKtnm5FMeM4Mfgg7exscWVnCGy8vGbWb7yz6",
  "key4": "3mSx4tLZRUoEDfy9dvqmKzs4c9RzBzE7oCDgL7rtGegD7FRccKnk6pccsrbGMwPBDYPxFjKY2QSjnXnkg5MSwsRj",
  "key5": "4jV99Ud8aLgYM1SHYrNXbpmDvWmEDrV6V6iCDYuxauxqSkybvXqQKg3CmffegPYi93nqhpNwqFZkev7Brwrk4MgC",
  "key6": "47W9Dn3XSwppA7HVDWe1qGwUjHjsvZ8KbTnvvMQcpWgeb7UTnHH2rSJtUvoxHLqZBQAf45HytjqHrhyLShUpGYt8",
  "key7": "2kzNoY7hr7Es93pyosTNqhooY3yD6XKU79rtipkoRAv6hKYe3L3KTUJ6SoW2atUBwHHj2eowE167XupRMaN8MRwd",
  "key8": "4PRNtz5ZLZujb4CkAShp1y7xs1xNepM5ZNBHLxC18WuaCeqFGHwBb2QfTiiecfji6eQ5tYnWR5SvnMLth7LZfy4b",
  "key9": "58zx8rYeBAdvQqXSX27qq5iq36XLqajUwzTy5SHwppcbMePPDPCWfGGRnxWvh94JvYpJRMD86z6fZhtBLyVMF4vu",
  "key10": "4PSEzCcMd3ciaavgSRaG6dNTrDhk2bEdkH7d9VfahQZb2c2Ri31AeMuVPLbPjVEKz21R4WWMRTqm4USMGN1RHqwU",
  "key11": "35s985DoY5DqVKgM2p6wdF5sHGwYNqfJMU3HXBJujQgKsruieaGKRoczn8kZ7cjw1ERVejHLteNJ1xSexBU3PMT2",
  "key12": "33ttxRpPtPbCHZXoB1hpdjF5gst579WLhgTWqqpJMps9MiN3hsz3Md5kdqyC9d3fGc4jKyHLZQ379vvDefVa4Nax",
  "key13": "4H28gwDZRPaaEhMvbbVycuhuRd419cEnXdaoHNh4UpMv2CXrgRiAAcvdFtJGsbwBCQRdXWYfYc8LDijubk9q6HiW",
  "key14": "49SmTohnmkNcL4bXxYszW1gF1WqNHcYznWUGK84GdVvqgNjUbctdkX2X5L7yR9HZMj5y3tsW8SUtMcsfoxHiDD9j",
  "key15": "RgnAazYKTYGfwy5yDQFnKY7AZU4M4tGKHyk2gfa8Wcq3zUB9B5X7mWVtLNSaZTAai5h1WY9UDCU5KKSvsjw9NNt",
  "key16": "5TYeaKe1mfhZbSV7esCUof9NejBUd7Ghr2fSC6XEN6axZHK5e7v27PusjBhzZufbzqbCCajGy5EjFtg735KVzZ88",
  "key17": "31aFLDBFyLj1Unc134UCvyoLDBCE3Bt1sWHCgpkMBUCXYqjwpKg5vdTzw8ia28keE1M9F4y4WpkbcNYJXGNbScye",
  "key18": "2Jg41JTeBxoCMpmDFyKxiNed1uFibFiz2TVi2oWnZhmK9EkWYFaCUz3Tk9zLdogvYLG8yhovX4xdfDBCu93tVCQb",
  "key19": "UsHyTYEshXe3QQUSWFAH9otZwiN9Yb9XHW8dNC9sG36NHTQdHScvs9VhUV8HzehS7evXK6MnkbQcpf9jj2s19Bm",
  "key20": "4mdAVG42XUpren9dYiNfTJFjzwQWhA3n61JqRN2bsgqQDsu8qBMX4BoA2fG4aEZsvcc8LyNJCMcNeJKnqCxUhzSY",
  "key21": "5v63hWW1xRzYJNsCnAnMgBCFHWCbcXkZ4qtSUKwpPK9RF5igFAMmuFkZ9abbtHyKzcM2SojhiuZ1XYEf39oWxF9H",
  "key22": "29pXLEBs1BZt4zQyHgJQXCXWoTUDeEhgUsupThJNmFmgdjbt2TMV8Er2FGwjK9mb1cCa8ALoXUbfixa2onBuYJJk",
  "key23": "2tCGr7q64gaHdXprMu3Ka11VsFcxRSsvp1hJ4o4jpQY3enJ2nEK48JM43FRrfwKHcjgasVahXABxqkvNRyn6ig3q",
  "key24": "xMW4jq2vYbJWmi6Z5VHqCH1SBcA3JgN7mG9wGFwUfHsgVYRS2Mbsbc5hqiDDA9VNZkAEs1bZ9hyY54wPyz5aJGz",
  "key25": "2qu33UWQJpxVE1r1riYmZ2FUUEeoH9NoktKC4ccMje87rWAhH8RCGzhUGYaEd4wCoYcDfrMjpCbDcK9wY73eWNxn",
  "key26": "H2Re2fvv5SSZcYj4kPj6jaCYTgxDvYEhc9J8dNoFBtcXApVMWdsEVfTDB31EPbKzt57TVj1Q6reTEcnv5mLjxvm",
  "key27": "2HWJZ51YE6KHQRxJn7iV6P53oR5XcJ3bYG2MVXhMFeNotPHomZDnvWas4TdAm9w7XokDz1ftRCA1NG4ChLoZadw2",
  "key28": "5eNppk9s6EgmDG72Hu76PQg1LB3a3WHaMB391fms8kodY53bm52jcjBRAJTbt8fiTJRbnz6rVBkX9ybhDXPafGr",
  "key29": "2uGfFBEpXxqgSFWgBz65Xzigay5abCVRn9MR2eWDhKnSDueTvYjY96ecs5PQgeSRZv2Dfr18zaKJSsdkrTVMno6H",
  "key30": "5QkknAjMxnzyJQTsKfm9ZsgSWAHZKgXj3RwdaseiZxrY96kfJM6pgqidCwY4XsJ8zsSxVctybrYKWGDz82254iDA",
  "key31": "3nJF7oniYQKuzcDU6LfayQGo3jKxgJauox7F6oAKbRz3khVH3po6yV6zo4RBhBwni3fQztmmnaZaH7wyepjX29LC",
  "key32": "d5juJbt8aH2B5ZqvboTaP9K5VTbUHuM2A8biudN8umF3D9MZE5F2foQUAU4WRzNsPwSBJv3pwY4r5DWKXLBtJyV",
  "key33": "586n58CNuHspuDnTtRU6xmFQSPchs5xRDCngHwtb7fgo1YrAAHoEjGrGSejhVn9V9FyrYRbwThAKTQHrAZgzkkkR"
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
