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
    "4BjRtzJDvPMhXprGCzxYWjxR1fTCSLdhYeFAKdjCWTbL5G26Ga5Fs73d4fPa9LYQkeWU4J96f97DmxCgCG7PFtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TaeZW4Pz6rM8wfjDQCkR85nhhZmY8j21SgNsruMo7ifp4S5yc8Kee4EVJkWpGEJ5NhHQKoimud5nNHSbnQC564L",
  "key1": "34qZKnMTWrxsPBUR49qGgZQg1rP4WZwqvRxsNRzxzJNygKZ68DTV6vWoH5pRCaEPVBCR6fjgoo6dUdiKXAXu73oo",
  "key2": "PF82t4c2CD4g462jNJ2C71PruvQy3P5Gsc3iJvDzFHaFEmgK5Gfpspc8TR4Tw9x8L88jvyrjVjCvyivah1uJbZs",
  "key3": "4pKUvXrQVYHBJZW9XQLH4BP7hXFUNPgZgjtpXYpz8di1JmYUV2YaSbkVDW47W9BHQ6qJK5BZ6wJ9hwKRZ4KuxRjC",
  "key4": "2LNFBXAycQG1F59f5vvfeSXwUgJPYf3mUSoyhxNUH7EMkGz9mo2SkVzavXhPbWc6EU7PXtrwvXtYipdSc41ZtuT1",
  "key5": "5yFtcDrPKYPHiztcpdaBeD148sfvPzskVW6yhuiLnfCqNyfPGkpH6miVWEC8Sqx5gTNZgnw4ZVTVkszhKMUP1HVm",
  "key6": "5J6qiRZAxQeVVr1uTmEuef4yCzExfykRkd7mN2PxqvcWWNoVVZRiVTTL66Nc8ZcNv7miMLYDjAp9HT3kAf177Mkr",
  "key7": "4QtE9fk7zRx8xKkDSdv6p6V7hhBJaz7EdHxut5TtSNkgBDqLHNJhn59wdwBnF9n7zKuq8uxGCKJKLHPuHvqtMy1W",
  "key8": "2rNoqDtc6koyhPo79EAWYKuV7hd7Lr3MWww7zSox5bquTcMPCVK1aZSzGbDWsFST2T35keBJwyY3zcx9YCq5rMk2",
  "key9": "ty3MHT3kK9SMgVG6sorr5H1U4eGiVDnW3aoBBRUZ5LMsDLCwksxoECeqX5yYk2CADBCDkHScZiz729pWzHRRZz1",
  "key10": "4m3E7PMmM5H2kM1oBnAXs88Qv1F5suPhPznCbJsiok5XiwHEx1G96Ju6veC52QrcpDMjrWLgnhxq6Q141VAVvE3b",
  "key11": "35may9ARnxf4oMCo2JanEEctPVJTaReQaFk74MRkVmwBWYhHJ8wSknR2MHbKZnzb3aiVYFYw4M345dDA6v4UtGQe",
  "key12": "3nvjfsyyqAy272fdhEvp5nKa2ZKeCK8HNAKFtPwM9rMNZeUvNPsVmw55dxHDtre5R26jp7gotm4pLetyTnNfT9ZQ",
  "key13": "4hJfo5okppqCRTwmPgKYRkfC79zSjeQV7ht2hVQSsRmY2hZxnJKFvM58QNSy4REAV5abJubBgZQ2ksrJw3Fvo6eC",
  "key14": "3uNujofG8jMC5fKDudCWFJSUD5RHunQxseqUeNWRsrZbdXspCCM8PBvC7B3U5Ton9R4rSTnJ83tPi1bKoSggoqpu",
  "key15": "2VoW6uzA4q1JSaw4wv17gjsFPYLbSL9PXuGq5Y4AciCLcHfvqS3mQYUwJC95VTpJJfmvLpQybjhcrD6KVgi3DfQu",
  "key16": "4VSU1BF1qxfbxwVzJ4wbCAmxCKnwpnSXFJuxXY9e4cze8Zpjk2RQfe9vNKqk5kaxPoLnwcutjLqqmM6dMKEz5Z8U",
  "key17": "5RsDRqnMqbzaevPLQaKeX9RoRnTXggdR3oKATtkzNd1XoKNAfN8Lg5wegRUU27X1febfG64pTBKeU46x3Rfi3YwH",
  "key18": "29AwtrSRXzuVLQws9cgFzpEhSZzeFFJYiUmf4GrPkDo2r5AMJnsd9ceMwTBNJ7ym9RcU6ue2BceFKAHD9khG13oN",
  "key19": "4diZmWjrT2yGtgyiNnvur3tkigiebwJ4vevDmm7Stcwj3m2YU6LkxfGRfLxoJgCnNynWd5dSJRqNwKNyv7MuFiCJ",
  "key20": "24C2EjcLRt8qbmdpteBVq6cwXYRUHU9zLAswjRHszZTyp6iUjNeenYAwHjNM316ZVPX2Vn3CX9iW3N2owNedahK1",
  "key21": "7PDYMcXrmzuNGmASEUUvPerpFaMjZiXWeVF66cRAzQ599rDvyGBP26e45jHhsqt6cikVDb7YKSvhJ4o4LBPgsHY",
  "key22": "2QKJXRSqY5mXRp7f2k6x95PbqXFoCxHFnHeizermAQoUGZLBe9yDuv9NHC6LNWSKSJH7cdqP9L4g3MRZt3ncC1Z7",
  "key23": "45Qa3Mdk3yxPmW2BsMNB3JoyfupaqhV9FJpUns3FRKMoyD7AVW3sbhLHSMgfQbZ3YcZL6Pj5YPvrez368MuKtjvT",
  "key24": "4kHmJEc7gt8YcQgJgks2x6dMEvFtE8NsRC5okbZTs68pyQ9tFKmfdtkLN8dsfok7VNCUj4FQjcJ9wVe564DrkPUy",
  "key25": "56siTMtRtFYazThUNCYmEaFuhgyKuHCbYBdSu8FRFZJuDSgQy8bzmpvGEn53AWrisa5M7jrS8eu7ZCTKs7cp9DwS",
  "key26": "cDL817sXFonzjd2zZYUkB2F1nK9L6LKh4yVPBPmYMCMwwKH7vvps5yBd3ko2kyAvrTdtSBqvNmQaPt2EBaJPydu",
  "key27": "3eykjkDWpxbD5NBxu7EVeKZpbvftxuxibpbowuxpTjpjCC4cbV5Wxy2ZULoUWjAyhDHy7cwgbnKt3XEadGhXFkso",
  "key28": "4xnN67Po1s93mv44qm1o47q7t6ohiv7qjkZdBLmyqTvst9cLJEL7HCQnbwfQS7c6odyYGbh9n11bsq4wqM96vxAT",
  "key29": "4FK9MjdJLhHKZPbCpTgwCfpiQCj6Pm7CMz58t3fo4wyKe12RLR6kUvkPe8ZhAFw6hEU6QXWf9ztyCtTdzn4utLnP",
  "key30": "3pxrAJAsr9N8App1U7YPgpF3EU96vxqCrTyPjAWX2BLzQ4Za9hgqFxgPCkbsUYQCqhrWYAeYRrqrSPZ9yTcKe978",
  "key31": "3rCEUjB4fzYvSxLb2mYfH8bm3hjKe4siniBJfcyaSFGmSG6ifQHqKPxXhtLEyWzPKdWdwZ6u5F4rwh79ebGhzor",
  "key32": "wZg5ASEmCGkv8uvcZNEmSZdvUJ4DyLxQNpLJQNiDNTZ1YYjqft7monTuJ8QPb1Vnnmxy1j1CkWv7ZYmrPG2B4CS",
  "key33": "4MNXJ9MVS5nVoG2rmCb7pGbhoGLLL2iwPYVqq5L9WRSYVVVhUHn4aooRy9ALbtUxQg3mZM3qDr6LKjEpphJxi7WJ",
  "key34": "4mkJaBecFQJ4qQSbjjMrB7UutpvNoTVesXnAHKuTNgC9kPrqfHkXjm6VftY5DAcpCbdkTwV3kqxXJrJvc8cgZF4Y",
  "key35": "VvyuQYz7iotTodnfUS7BDz9AgsWE1avoWrjEwxdjKnZV32U2f7wXJq3GVqpAcKLb3Wd3oB3YxyA1cZUJAJH7z9V",
  "key36": "EWjracGRjKsogW6XTYSL9oBD2gNkc1ePNycYMRbwsSxPc4NvvQG5ZszVb3GJ3R79aM1A6cfTjBwXREDQn7u4kiM",
  "key37": "5K5BByuchYndgdY1kPnjP5FbRB7wroLdnnqpA3wYhMynVmXrzQTEPDptAsYGSKCykrUnxgcd7TCPZP3zR8YoGgS1",
  "key38": "3JnPvy9B2hK3m1x5FeUqQPHZkCvW59qDqCLFbuqwMRNtJTGSjCeYjGJieTm5oayMyNGrTdu7oTGBmZMvD1A8mV3p",
  "key39": "4gkzdCaksJtwRAGfcizjK1nFq2e73Umtt6ChCfHFyB5zAoAj6xQ7JXArJ2LFtZi4CFXgexnwgD5Q4qFskAu2Ho5e",
  "key40": "65bmbGsZnQRQJtZJAz3qPkFEVZ38Pgk8bNRwsNcudNKvJAYsbr1FqYzecUzU8LPbJ4oHKesXTbbDobCGWUFovhgJ",
  "key41": "5wLTr6L2PY18if1XycB83WkatjUKYRMPsDPrx122QchkptEx39EoSpjN1Y5vYXdZYFzZU23HiLFVPNs74NK9WioY",
  "key42": "66xFNn3uCXKD33E95ToocwEBjhpbnJ6AtbshYEewbs8NhoC663GTnJCdwiVGMFpVEBk1Uzrd67HqweMXwQ26H4pt",
  "key43": "Jp59128hm3JNBp6k4KTRHo8qYfoB5c3KEDwvSqgZwZqqKHgXofXNYiEnumy5zpsnhtuj63pyJiKcu9hMLpqemsh"
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
