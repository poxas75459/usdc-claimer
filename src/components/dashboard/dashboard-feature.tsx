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
    "dr4os4Pd86R4twDcDNu3BV9yET7AjxXxFpYniJWJ2hd8isXm6JiyGJ1qPMXRyZHLZfWRv2Hs8F6dxicepCi8S6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35QNtVK3u6inDntkxjo6j2hUdPKLVQnrjZVJKDFBrUcUMjZFcpFxqdzcep6WYgp1H2AA8ACn3gks2uY8nqUXD67G",
  "key1": "2NMjMHgJNNKv4wHaokHQoFg7ErnMuShco4dH14FAGz4dy2nDmPvzZv1W34N1nqgJSb7nwE2puwDEJkBwoefqGDGt",
  "key2": "2yvhKhEwpQ2gnySC9cdQ9WJYnGfQoqQzkFH4cTeP8jyrYKZwCQwozU7hN8ihP56bAp38FuxDjwdmR5ZMFJRUWqiH",
  "key3": "4G87nBBLNxSR3DwZZNZkomd44jS3dgJeANwxnHx2oM19ndrvGxscS6JYH9LKv51NfP5MwR5dk3Cgqoy8ZBtuEw38",
  "key4": "2nLYwv1yEg2kS9BVJHLg2QBMhetz89msHc8UMiZoAsXzXtrnDP5ppeUPnUh6DD3Goyf2XscspCBo9Momq7A4eR7N",
  "key5": "2LMxQ2VxbyrZZNPumwBeBsSwwMvhpE2MHhxP9FbSdbPnPSRPHwdSBBu2wHGYm2G9Sc9rJiY5DqzavKqewvYyRjWB",
  "key6": "4sF3CphfKjL1yLCdfciDb5wL8XJ3jXdkfFxuCF2FVHLGYDhuzPXEdspw1pzPyrYqoXnwao784ZzWtW7DbDcmc7AY",
  "key7": "gKR3K9Hiwx8Ddc9JLZfNH2e3XYCHRb8QWi7Y5nZqWctWBCM8tJ9VocfGxHvarpJJrNPkUV2zoMVSYzC1gAZfQTe",
  "key8": "2Avdaes4JdyZh6i47s2LBjiPecADbpBWDUek6voDguh3q1dKLk9VTkDR6PNnTLE22iijV5edYEBQQfF5rQeKKGrp",
  "key9": "UYRmdYY4LimFCiLHHtbvNY1NUmLmyQryH44CGM5CxAsPZLrd7GfjqogGkAG4C83ahyhzWGQ2JU6fk3tQLhC787R",
  "key10": "4ePByfkP68eDatDrKxUBxH4E1TU5jvYjbUj3vuaEukCL2Bsx69tSNVUNkZaXcg48k3doAW7YmMJmmHakZhy4b4Vq",
  "key11": "VzXNm9Yf9Bq3AeoGBvWhjn6fbF3UEH9AJk1aRfS8KZo1zApDKsCmQGL1gptTnvjHfuaqGETnE7i2NZuDpPnHS25",
  "key12": "5tBACY6gRxFHKjHjGB41XCFobQhhKUCMkGBNazZBfYhmaiMMeWZzeBdXuv8giN2yhU43ktRoQ49sg5CHYUbyXNdN",
  "key13": "58jo7qgoiFWbvrf21bRyrujEHcE2J3mnnDXc5Jmou2QxH2ifrkCa5pjEBvqWyx7fNQeLbZouJ8V9QmtGDWNxBZSd",
  "key14": "5oMGxocByUDaPynRAgGGrb57YJH8q4FZcZf7jH7uLUsAQGTjZzEB5VCLYUwfVhBenYdnJbW6Sf1NU6cH4CuZEpzS",
  "key15": "4RRYeHNtCCV7vndqCcJEmHR1weGCc9AABEyH9ApCbqwHLB4VZJs39qi3A14WXUXJZtJTkHeXciyzetcDLXLGrX8z",
  "key16": "5pTARUcScZFD9osby8YApZ6JVQuxexYdtwGT3ZdmdN731h1NVycZYekoBpbatXG1VZ5hjuVgvrwyfMM4ATiUuiPt",
  "key17": "v2psQxGmwFjonzKzX8uuPLD3NamaquA7aa2mww4nJttW794whr5EKCqA6CaSYB6bTLpcSUcGjHGwjPwGM9S73uJ",
  "key18": "2EXHHFLFji2zNgcy4kWHqFBHkXAvqbpTye5kp4tVbwU2mPubneC2akh8cvWSWqqP8zPpJciqudDKN16zL45WnmVo",
  "key19": "2Re2FAy7QpT5gMm65jFUVrrgFEJoFTdWA5cG4VoRpA8dqZfATnxmPYAYoysFgt15DrNQDAxkJUDhbibGqSoBc3RR",
  "key20": "4But8Vr39BAHdt53PkC1vh7FmbRvyBhuNBLy3vek2mkNdWmt8k3cQv5TppAJujd3sLvJPLRh2qpnNWNFkVa4r56b",
  "key21": "5btgFyUhBUphBa5yyx5exFF7qabYSETzErMbpoAc3zo24tvKKcAeMJVUyQxLKeuTbC4QBdmKQDMda2a8EAH1ego3",
  "key22": "5m1wmjWSqp2PRVXAWQodSdrqUvJgxQPa7wWTsCiEajwmH1g5McFmsML5q4NPxMvwXwHQgcbi8JeKzdVsPmVBdQ1Q",
  "key23": "3pXuL8F8FpPEtKonyMQHUsAHRpd3FF2M1r3LwGQN5o8aLny8rNBaE8cA3aR2vcFbnqLtasYRyMeNgAEencmuaD6W",
  "key24": "2dwog3Ws4PCdfA6rZ7bdMK9TxkC3Vyc5hmUoRgLTXAP2iDiZLvuN8zEV2KTuQaFsLEMgNpWTMUMA3LjCynT8mT3y",
  "key25": "43hecSLxB3Ut5KcNNfMw3YWDRQoAqYXhgwkHQ4w4eYAFoArXNdKk91odmCEd5veL39BZACfP2MfTnwYe89Gx9J8D",
  "key26": "4sKTzdzQEcGKUdkA6CZMAvruQZjTvsn5THXrZ7wN6Ho68Ebht41t1V6V2zm4UyoEnDFsxouW17s9vVoVGqEA6n6c",
  "key27": "4fE86R4EVxnB7UjAEZ3YjeZ2n4q5AJzgdZWpAVKKdDhvWi36TkXDKbM1UtP8LmCeNEcmkB3Mxu62SYAJx8tMMtx6",
  "key28": "29eQpWHKnPn29SSSeHiF5jfeoNJ8eCm8MJKtZnaRXJeXXQ6KG5hB5xcmKa4jNDVHTnjHkFz6C4vJBcjnFtXJMwU8",
  "key29": "5UdXqT8Ba1iMBJVSfiYiJUUSJoJUCCb3nSEPyYKYuZiPdXEcpfPwiwxF7vExoFKu6Sa32a8aogfCUFjjjhZavK2z"
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
