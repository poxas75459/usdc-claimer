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
    "46AU35bPRpbVjWY7ZjLWjsVxkBzM6WnYXUCh64KmMeZR9q1MyS7QjZMivB85EhYAdZE6tmhNsWUCHre9bxiDh9Mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wGDk46tEzorD4CJ4VrY9LrEKpRFXTj4BF433XKc4CjkrBKrEKVyM1WMA94jq3Mqoz7d4zZ8nCBBr9nGYuvUmG9Z",
  "key1": "3Phsf2zVap7xzzrWisvKHJ7J3ds6gRoz6TQCXK79V5s5enUHxRmysn29qWbjxmjQg1DGSfPsoPdsyoQg1ws9yoAA",
  "key2": "3Dyv6uehhaEuJ2Ec1M4uPRSybpg1LuMnSnerjvCjqWCyGKHXYiEfRTPQbPNLrcGcvMKJcojenHiqt4gtG3JzjynC",
  "key3": "2vTQYCpbx5QMxVfuYtUsnDJMh3cAUqvqNN8M4Ap57skpnUUJk6XbmL97Co3RM1HwhdYtmhNvoAU5DPoMoH6YF745",
  "key4": "2Y8pgYhCvtfW2PqakrzsCt4D9cWvCBjiZYS9Kc7yy6un68xJLZJ7DY432EMZFWQeyjBEtKukjK2xJVBV3xLKr2Vp",
  "key5": "4SyV3UVH9xS913JeuP2UKqZnsCBps4wjGimKLq6y7FhMhQ4ywnTWFCNkQ96KT6W9s9PaLghgiVoQa9mTLfEeAQNg",
  "key6": "4Xm3Qm6GztjiED2tJyR1jVJPz6Vdm6Gps8jYppkrevJrFN67gPqwgWu2AEWRg8iFTsP4j1zL6V8mFcFTnpeBHgwu",
  "key7": "4C6BnoGej6avKKYAh6sAgPc9UZQsc54wUk6cd77HQCPSkKRg4vh9NCScCbsoL5NydwP1mKgKYh3LxW379QS1SSKV",
  "key8": "5tgeQUrbcJzAwoGFZiyvfX9ZXr1ZdiMcE6MXjaUAAvoUpYZvSKrtVxCmre7dJK7RXrRgfky4Cya2w9jTg5XQvQwZ",
  "key9": "2oqWQCzfhofWfZCsK7neCL6pKgB1NjZ2CjLTMT1qvoDXwqSLDDH6pfohz8jjm1WzFXTVKvCYqDCihAv4dYTanzSC",
  "key10": "23Gbt5Lms8GgtZ2BfSTHSjPCXoAExNKCrge5Tau8rdvmCwJBk8sTSqRgYLDqdf9PmP9d5gqM8rEgDSUwLN3bZqAY",
  "key11": "3rxn87pY2FVKktVF6ySRwy3YRxU5JhxhEv6NM6EnYByE6G8vGy6YriEvSSeVgXwLJ2Qstwhm3y8m2iKUsYo4Pkm3",
  "key12": "3J7HwJiiC4Mrj8UNgkLa2Cm4yDYe15fUtUUWDKfpGop8SbAYwp4cAGZd5Qe1md8kRbNreErSvNmQVYiuhsQDimFA",
  "key13": "VeoKK3DPqrT7ekFckswzQttFQE61w5dZfhhDV5auwM3R6mBVPNic45UujLRojqH4bTu9cWoCLQ5nmTijo6f9wRf",
  "key14": "5ikKQRqapww5rMBcdNgDP8baLztHGVucaUZ1PUHLuvGNXfKVzVnAWtBoMcoLYdBJKLNRygUraWNLh9tyoJLSffXH",
  "key15": "2HzhxHdBfKjTb1Nq88y7vgPQ4wUDu9tv51yaT6yUwUcgJZt66zDp4y9Zn81pSqwXaHxhp6gYT8VgMb6Sch6moJo7",
  "key16": "BAvZyCjccaqijkK8w3xrnWjKf12htPycMoHmVH3PwhFr69TAD5YVrDZdDNnTGwy2mn89xjKtjKPU5FMr3xH8SYE",
  "key17": "3XL4y1V3bjz99JEDLkH6vuCLMPR6Xu8tkfcVuLUycvE8nZ7hjVUYViYa97LatFncitBPWh2iBhb9hDQ1c9i2Tjee",
  "key18": "49qu99ymnntTYTXmP91gkTSR1bSYfrnsH6qz8kkusJXEugJpkmrGPWeHNMH4Zu1RNaoVhwT2PJc4v5QjJKLrA6im",
  "key19": "Fpy4R9tG7RfjXit9VjLrChZsBxZDsX5Y3egxdyhV2iNTFJ8MWHgrRK4m9EmB2hM5GPtvGkKThuo1Zfhag5BRcVo",
  "key20": "2i7tAXsPnsrLi9eBmcgg4YkHv4V7mGKMgUkLdSxsdCUocW5WbpzeKCR8YAyZwun5shLevuCPGuZhPu3LD96kid4T",
  "key21": "58nXuskRmuW88qE1TGgAqodDYzannmFL6DQpTSiLTVmhLjHATnRPzvppLJCTja8B9vfZPMWnJymFkJKWYPHu8nng",
  "key22": "nHHQJ4H6fChuVAwvfiReATkpFgDes6PYijJX5k74jfGC9ktzRWDWegCtzpbHiRQis3Ex9n4uqdj68mwdA5dzyLP",
  "key23": "2BH7gUyLUypL1x44P1UwzTc6CCNTPhSimjyWsvYBEGScpxemsxqrRPVJWVpVaxWMLhsa2oJDFhy8PafafSNdbECy",
  "key24": "5P7EviNGKmejBt9tiqwwDrgJyUy2tRtw9TvXigb9KdRkgNntyh74FMDWLDPYtuVwGHgFSms9v7bYfFLcnbqczhJp",
  "key25": "4d5BodrUTturNgUYPhWTj6mj1PgLMYKKSv5rTb5ZrqiccMKBgr1PpVbzUvmu1k33LAoe4WgWRg44vetzAw4uno6F"
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
