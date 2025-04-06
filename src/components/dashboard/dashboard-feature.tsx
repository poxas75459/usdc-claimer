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
    "4pgzFApgMcH5SqfLuKd5rYexgEufq6bbVRWLmaU9aFZNsfvs5KH5i3UrMVPBnBWg66EG3u5rjmxzN5aLd21dAdJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nUsKhKzrRKJmv1bQw8Ln5gWF5EU57UrsXjNcridUvghiSzqXnU3ZgdFNigUMSXCPAR8dQFGXM2TGZqyQ1oo2uuo",
  "key1": "PV2vaZeyVFnci69jdobp214LxdjZhm4BdD9PbXJz8t1UwpTE1AU9CDpTTdqnNQm186GQuqEwTLTqMAe2j3ureDo",
  "key2": "eGNV4FJMAYgFCUT9WaMfNBBM4RdJMXKJUfjoN7TbCY3mk3D4uvPZrCzpqu9pD1qymRL4tsbQouGXenzHKQVdXie",
  "key3": "2UgqvW7Fem84pce1WciXMZAMELPBFCj5f39B9K1tWWAGHG1Rr91t8KHRWJJyEoUxq1c8vcZiYEzZ9avKMEPTFNZ5",
  "key4": "4SZQyrci67kwMHrKeQJkVCP965aDqyu9a1qzsw9FSiJS1eBkTrBtQSfDPC1yrE8m5bQtthPvk8B6oQqXc2wvq9CJ",
  "key5": "32eeS7crgfwMKN1Ngda1Xq9GJSTL92VPTBzmfbu7DFnWHRL6Cnb7637T6o1YwmyzbJSZEj9GrGw8XPkRBcaJvyAh",
  "key6": "5cMtd5PE5WhedYHfxuEbTSSU6HZWwULPcSX9bHhJMLwFBg8hJoEDESBrny4KtXtrLBkPXNX3peFRDUjbhZDsFrNR",
  "key7": "PvqmkqbyrTrcmt6BWAAmpNeFyz9FaEY9mjwp8rXo4M2PdCQq1goeq2BFaVZrvt7QsZxsCtrcLWeUKdTV4wSPcCe",
  "key8": "5UdREagQNvSAZs8MJ8uma6ZHWSjTLmXahN4cgPTVh6rYrbMdR9QwfAWX4ESBAKN1caJy63Y4yyRcm3odZZZkMbNU",
  "key9": "Ebs3ZhFfS4R3RvHQnHNRGFwLht8mBU8muWNEqwaSbabUSojZeHGG9Mmsw1qPotUqv9c6NmtCo4GLySQ7mB2h75V",
  "key10": "36dd2oa2P1z3UEp499jiVMyU3eomgWmotapffHgWUbz7pAJzCcHveVWGxM6qRCKBJZwhHFy8ao8HGQopL7TrkmFP",
  "key11": "62VMFMQST2zwWESkSyCPy764egQZYZVjNPbcCjXeiRziCS39rad5VCy786soBEHzvCvWcsGqU677qe1Ktv3SzVYt",
  "key12": "5GxEcjviULb2bMrXj3yV54KkKkDRDFrPidv4FMgyGXXn9rPRTbGKoXTpnyfqCHS7PidjpBB3GB1CtQsT3RQjVAQi",
  "key13": "52qmtX1Wqpf5gzSQ4A4ebCD5GbjwBQY5JgXNZt86A9WB2Gm61qLBhQoEK3mpqQ9g8ZXWeB8xnq6mi5rrNeyyVikQ",
  "key14": "2f2LSLTxVnfEkF2u5veufN3jUDbYxqjNXU62BWMLkGd3rUwP7aP9hQBxjiciGfnkHZ8s9wu6fDLaSkEhZ2goBQJR",
  "key15": "2UkPCt54XTzvq5pB6pUyLzqAqkmVmwj44y5cHvxsM1RgK3WUNXrLNtce8kYoUcWGeSi1h3mZmAKDevntE7XuSraf",
  "key16": "529Y1KCTUohejYv9rXCViwxWYfCkxcGJGg3oLzTS5YAsJg3brYiUzW3fiy53NqtNeZSSLUfK2yL2GVhf2pejdTwK",
  "key17": "62Po4JYRyrJcJBZwby93g7NavdRGmHebazx9WheCgRShGeA7Wt9YEHphs7vUKZDf3pCWJvhmy7L8CcNJrQ4dJfVt",
  "key18": "28HNW8PksQNLYtsHmd7Zc4qx2eyHoGVt73TGGMmp6rYzTCFASdJXKLLrXE6ZQjV1JUEdwqHXgohQnAXmaJngkJh2",
  "key19": "3J7LcjUa9HG8GEXWxkinswAVchWTBSqcipP3fxB1Wvd1fRNdV49GriRiJxDt6VmjvarYCj3da3xETAwt5HVzTRZZ",
  "key20": "4KWmNgSQ3Z2DomHXDB8c4jL9ALPYn5CWexREYwwHWgLmZ2Ejdw9gJ2AkdwQ98H1wbzJtdwzA2UiR19swz5XbvQja",
  "key21": "4w9kHH6rDWT5hwJ8oZHruAAZWRXbe3wFeiEzs9kPyZaKi2wXK8tqsUAYiZWuAe8c6SG8dPS6jBhddxNFsHFdU6sT",
  "key22": "5Tngj13QPk4LQoAfUMv8YsqSmys64iTRmzLium5iMrBPx1Djo2pe7cDge8nhE6bYmDMnUQqECbEVFLpFf7D7rYpM",
  "key23": "4A3hgnnH9pRvww1S5C4njo6XZSwphmh15askr22X6tH84mAN7QGX3Q6AqaXYPTfHkfhCjBwTKPmjXUgV2d785j5L",
  "key24": "5eLgv4Ge1jUZAe6uXzdgqQ61p78dxSZBGe1w6BeWc69X2TqsqwE1KLoB45pFwLX2waAodm8tngFuAtnJJrvQxRTz",
  "key25": "4uiP6ur1BvdFKge1jhKG3dnTdHyZkkrY45BQ6GaKH92X2PfxqW4pWq2BCTrsjsUG2mjgYWbLjAYzCViB3G3aWky2",
  "key26": "5jGY37y9nqMDxcB7MmuTs2kxKPR9S8TiuSsTJC9RoZUhPYNQfYpWR7ftXMvG9Tqg9kiUu2EVTEWnCxF26WbT3njY",
  "key27": "3qn1FrUvVkBjKCZVKEGZxqEowHLZjdNzMvzzqikAxCCB6dCWiSz7pDRtmgPVaFgi6bqR8RZ2btumjBr4UqeKreYM",
  "key28": "P65cp3RBDCotuAcyXYGAVbovERFF6HZi52ySmEdSP56f1LQsosGe7XNuxpa3Bj2XjEDiE2JgBbzQZGjeZr49xdy",
  "key29": "31gsAhEamHDMLsUENDXss8UQxGLLzbSradjtXBc35ZdRwJunbCTbBCGJJdejFDakKvSzdw8z77153mmNjYgiLYSJ",
  "key30": "2q6YggcRiiU8ozEqWBCg1Undu8gTH4cppe7FoDbyBNAHeJV4FYLsiQ9bwAhXLmYmoKKFoQ3FUeFz6sgajBrQ2DK3"
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
