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
    "48iv9j7tBCkDqMoSx1hM8xnXTYXrDdTzbav1ydFKnecPFCt22zK7c9LkoyE6X67S8VC3cLV5y9KGmW6csRr5HK1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22mqtEMs9CheVC7JVspUeu1Wb7hiygivdcRcegZWtM7e1ziTFy8AR3jE49di4cXVPg3hP3R1dbP3Rfn5wQ6reYfC",
  "key1": "34gfTGVwFeDmGEJjAFQbAjhuR2g1GgdimTRMDg4F9du4BM1WQ8zBpL54eywLjWGpMNdfsyg7WHuRa9XMNzhahDFy",
  "key2": "5YFNQDprC1WzU8uHCQxPfYc4WajHMuSZMYhK5rijxcTgbK7XnDoApQ9AYy9ZRjQ2hugqtdjkzHbBLVvw4fb4nUdt",
  "key3": "4cy6aej6J6xqG28J7wphURWnS4KuuzwcD4MSgGWfoj9dqFyYRmKUnkW2VmqbhgASguZPiDHBR4K58VRnV9FWqsqn",
  "key4": "38C9eW3rD6LRdBBy5n8giHZYbJLLwXY9xPEHo65w7Sf45tmGrTReChncqujry18zWiScrsqTNubixdyWJo4c7BfA",
  "key5": "3yGL9iSSTBt5v6DLWvrCup2N31q1gVEUQTUkimxfN8Me3jhyut1SYQcu1omnucAyhSXdG8E3sfmmMmUu1S83wM4e",
  "key6": "9S6eDSr9eBX9Kn3naSXdVqnE5NLYPi4qBuNd9L6dkievpotuZ6S2YHvv6vMKPoz39GcbzQjkDoz31cYdvH2rAu1",
  "key7": "2fbbtusakdM1MhHf8Sgs1eGivWY3UmZC113wkA41ntV7BuB9gnTcKyPiRDz1c8mqJZ8oKLPvGUrEwKFkqBeB51As",
  "key8": "2hp8nXKvwEcAcicYvtZtm2U8wRcH5BM8zC68dP2yDoXLjtk1vX6QYpLCHijG7KQ6DsxsNtPgPxEv9Y4qyy5iSgoS",
  "key9": "28KGVBUe7RCG9c3GHxrvcnguvZEsX9iGaj6sYPQmM4Wy1mMKbdqixEXbcBq43eYxkJ1rtETRptmuMEL77rk1bWoh",
  "key10": "1mhuRgtGbE7B2caP6c3vpChT73MBYYgPnaSTqHVnSFLbgmnEKZ2YCiZvrrZBrK8Y5tFbUwGU5F7FasB4t1piM9V",
  "key11": "5Ct2op5TpttZDqknBL3NH4XXq8aiyHXjEv4an2NRR3UbCgT6s4cm4daQdCVNtJ6XssJoLJHgM1L6yu52znt1csVU",
  "key12": "Hokbs4PQifigBiZGNRdjgwLizdSQmwEtJqAFrjy9V8FTeXv9es8xJBrHBFbpWErQA9neJAWQDYSXrHK7Tpympqn",
  "key13": "4yD6sMAL27esr2hJcwAaa9wELLnsePs7hbGhHDtSvMzRVBkq6FgaKPEemvQV8CACZgPuFekZM28WpXjED7YN9YRo",
  "key14": "wQnpKTZsgAwvn2Q84V2hRmRPeMEVmpGgicxhHboNSvsZocFV1t3VzwPYx9EQvbaNguj659cqYrRvdHuyxYBPNrU",
  "key15": "5y5LMiKPvVya3RTy2yg544jDRdPC2N5kyoN5BB17qPMfuucMz3XSuazRnd1f12Sa9dcKbNhicqSznn6zZ2ZZDAYS",
  "key16": "TPiz584QvSxAuVFfKuqAN1oCzi7fd4La5Pw6iqeeVsZXpwADh9ZeDshJn1NVDeP8fvNoArsfG9TuQH2iBMRrrx8",
  "key17": "pP3Mvkuo2eZJk7ASgH49teVeqmi2ARt1Mfj2mxD5dZzwbNLVCggZ5wqLuVm8uYc7xXCErjNJpyh4YWFBJXDB9pS",
  "key18": "EmNmkQfWD2AdsZ8Hc6pivWF9Hy9THKFMNjNTCPD1meEHpSTaWY9vCtfLLWzrNrAPSKecNgL9doCGqbPuLfhv8Ly",
  "key19": "2TaW3Arn8K8oCDbtCqPffACpoZNfEycpEsrjbTYt7oqFTmY8UZ1PNeQGqixExNdc3aiKKL4MQesUU1zgHPQrHSaH",
  "key20": "2FSLMf6DCsf3nWr45BZwGKJjAVHnMw6H9ozpZievwP1292xBfve9UFYUEdMw1RGbpKiCBsqX8yJTzizjCEQw4dKD",
  "key21": "43pq73kYc22wyM6GdirHA4g39HEZtoxavXtRKHaf7gSXW7x4smRZdi5pif8SQMUrWAsqMPTXUQwBNcZ47TYss2bb",
  "key22": "4e8PNGUzxWnFgBWQFwx25pGNgftRCmDMxRjuLnNE9qmYCFrd9pdddp4ai2ekSCSuWd2KcZZPnjvA7wb9oQ2RLAPa",
  "key23": "3WEvdQmzTdMPkU72TnoqJwofKCySG1cNibTghKzTt9YcoER9za9hZuXqfcbfkXeZF2KK7CVhovPSsBJFrHU8JZr6",
  "key24": "5gWVCFgjPUhFJEk8Gmvg1Q8WTR5pi9MW1a9DBAXMoiqdJi4hZVCFxF7ZwjaodUqgDXrhFrxRxqc3csWGkEU42tgo",
  "key25": "4Qzz24J4iSGeJEqFfTu9W2Pwx6epbYv1MPf1ueyFvk8XFUFQJN5XQc23zpp4By5a5a7tAQm4f5iPxKbsrw47JvpK",
  "key26": "2HKrvmcnqLHV6mkw891VCjGUkPH9eeayuPJwMjsdQfzN3VurxckDq81EZj9ob7vowwPTE4zX6pjeddEN4Na2VCyr"
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
