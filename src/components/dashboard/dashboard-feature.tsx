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
    "5zczXfqa7GmeeeR3rRJrqrSyEcRCKS7kWnqo2CBbxCoryQChMxN87yFvWNu3A9ug3biMQuA72dEmH754mHqHXXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33jEaVEzL8j1yzcC4eK947SiDcdpzzj2fnnxgKpmz7k7UEe4Y9GrvUTgamL3Tj754x8seDMjJGunLeYzMeo1SkmY",
  "key1": "2TMCkPKVDXTzCjBid8jp4h6zaQDU3diJoEYTQZKPMbzR1WU3T8aSwnv26gA6y4BQnoLtKZYysEJQgcbFUn4iQe36",
  "key2": "rJHr5pbjW1YJYFoBt6MCYJJHcQDUMJZvZW5pVn517X8x4db26oZptkwNDqvJXzeDTtojW7WWpy2RqcdJCi2pQuv",
  "key3": "3mFzjtMyeDMdjdvbXMQjXbcsSJNArVWaMXAe5AahjpmByZUQESocikHVhpUxn4aaG7UTBsR678tHE18bxb7WmXFm",
  "key4": "4hCNVh4J7RfjGQh6bBNVKWNfWM48t8rW7ZeDdCkamuQbebSAmibFzasg5hr2wncmuiXwUBY9JVcXuxEvD74v3HjN",
  "key5": "4zrAC9FGiT2VqX47wFd1fHrk3ppHiAtssW7JodEVBKNc5d4qbmjpMjV7GyDN2Ybzya5Vv92FPYXau9aXUKEf1abJ",
  "key6": "Li1MsrR9AjZJ8cjwSu93nJWCPtM3kvC848eUaXezUUSan12EDedpTxzAKMc5CX9JufcddLxVqSwJPrEwL9AdVuY",
  "key7": "4ge5BkmQ6w7yyX15m1Gh9h8QxdcCRFgDYuZvuZqakYMJsJPFmWdu3Pzm8Y5ePf1zZaLqfaVy4w3pTvFUfJQdVpw8",
  "key8": "3gtSQ93h8qJ95GMam33n4yHDkr81zGbzBfUiTEhj77ec3o5hLUFZrEiM8xKQea8xHRtTpkGfoJD1ozPfoEwG6rdq",
  "key9": "5KLoU5c51sacndpr8m62r2jQTkhABEaFsYtrPdyYqP2Vs7ZokxYCcijcndjF7iH5FcqakgWMBzcMs6UHQFehLPPw",
  "key10": "3W9SAxuFEPz8hurMKsazxH3BB36ny12WqcdzzgN6FFknQ8DdXpem4omzoESenErKudcu6mPHAKrXFEGzuYdsq2Ck",
  "key11": "iTMfbmT84zaRZo9MusP3upAKhCbjdnDvKZ76rsNJvWTL4Q46c2uyfp7BC6wqPNBfkpp4ztpRuZxAyp1g4SExuBo",
  "key12": "3Fvm7fsEwCviw6Cbo8nSHkApeopnMq5KZyXnVYc8iCxfW7b51jRV34BTqtAmWr4CTovEq74j84ePcnTQwRVZetkE",
  "key13": "5TuDnADbAvsossBk6FKxtQWhUfc4d1CjR8BVR9qra3Rxt1bHP77J2WQaKTLcHgCiGvBNtYtaa6hbowJSpHpSWquh",
  "key14": "5NuUZYyGxbNiGCVTh2daQDHfAMKJBedq2AMjAtpFNsrKngAoLQsAg5ML45J7vvvcfKLy923eD9BnQfjtCYAW1abk",
  "key15": "2obf2yXbSYK5TrqyZysWhk8wTU3uJmKMch2sE5LUiFzkYTqrkn851orHMBhUk6jQBh5L59sSpz3Xp8HJEbQYsrU3",
  "key16": "2Sf3DV1RWxBVivwC6j18EYQmRCF74aeNd8U5L6vNwBCt6HYnA5DdkFaKu5r36KvKoCUBaSPnn8c5BmpCrrvpktP",
  "key17": "4mmR2BBq7KVMo2ssLJ1R5AFcpeRswSQSRsKHeo2LhXQsUbMuU5UCDZ38RNGDAv82xxSvLmf791MJhCPVx6AdaL1p",
  "key18": "vK91WnByXwG1qmBWbGXbKJwLRBYYnN7pKTDjydQBKL7hiB4kM6QgMEqYU3SunfBVMkCVEaBpM9SuynTp9qbGN6j",
  "key19": "4BydxusncgCr4kQhHQVHYJ5Lbmu5VGzdUBXF4YWGDtm4g5KmK3ykX7HsGUCMNqGyB6zq18xTePDphmhKLp69Kov9",
  "key20": "zgRkpQornBu51RdudhptMLwMC9R7sbExReYyjdVkJW83Ro8fmS1RWrDXcnqc9PTD8sMCRkTpFm8FkYLBGU8ZoGk",
  "key21": "3tUM14SpioWe7QEHqPSMqjhmQEDBiAVM9iymoNtYaNViEXeB2xHfAoME2xYrfX6jf6PQvB5h6wh4ko3GjqeRsjb5",
  "key22": "3CYSmziax2aXHRp4mQfa3M8SXb5RbUoxZyRFq44pwvJvnsBppN7CMS86CZx6LrgpAY3ZXwygegR7mHwHyv9Did28",
  "key23": "shJQZjE4CRZNF1uudAuannh7KJMXwcZzYwSjaFXFxdTC2PYEFbbEzHbFdrbUgTWSh3amMMCPtvo2sCTPS5z2n4C",
  "key24": "2cDk69uhu65g7kSnjAX3zy2yx7gMjmZe94rXuMEG4qyhSdedoaSLjTU7NrwQvFGARAyqLEuz5a8DeDADuHWcoT48",
  "key25": "3YXZK2ZTzjRpYagd4c5YGdSKr1k2M42bKNMSN5wdVBksVRKkt8vQkT6BKswFANkwWZJouCH1pd3SQDwvqEb4vsMX",
  "key26": "tkjTx6m74cumiBdoWK4vGPATZAnpMKQ1vYXWMy8sY6BKkpnLkLdNKkdRXJQUHts3WLAZXVJ6Y69C3K8EymfG9YZ",
  "key27": "GtSPQAu6JupP7qdfvLzTJU27jesFGJQogQavV557jjqtGJM96pWRhvNc3Fka8sauH4oRDonNPDjkWTgqrx3RHjA",
  "key28": "HpAq3Qt8Za89w3zpj1EcfQ3K5573v9FV9bhkUmir5wHxLznqwMVVxn19d4Ej7RiY2LKFf2rpoodCUZfuYifr2kX",
  "key29": "3FcgYmG8bCSwMeX6Xhvu6KYGZSHansfNM5T6bfSA8SYBmhaHvPgw1FEYCrHRo73YvtwDbTVQFbjxNkGJyhp4BtFP",
  "key30": "gPQ8HiAMjcqZaTNRHKuPPWwoN3iaZFxrZazfwZPSYJMXt2qGVaQ2WMPqCW59EbJ61GwEUtNpH91i4PymhpELa4q",
  "key31": "7cmQRLD8cFnLqwcjhhRnMEpiWCvoDJNZdwKgQNNGPfCoUNQdDzxmk95tnsQ3jJdoJ58fecjxTJKhErejivnKFqr",
  "key32": "52DiYxv9hhoW7CqxhhFNT6UbZ7EJWWufLyjTFVgAELcm59aq6yH6SJJzxMRDYYQFjgLqXrruWAEuHFuA8T46Vw7p",
  "key33": "2z77LwtNqw6pcXpctJEHqthukwZ4tt4z1Djc8yuGqy8ZPVyFEsTDFGxMSDeaN7zP3TnaFyUUbboz2NTWhk9s65CT",
  "key34": "P2LLCHPs6uRNZnSPtt5M95kt7xGo5DqcxNvM3N9qE4A3QZS5ZJStnZs9ysobs8eWETETY3iHoypozzP3xTaAvn5",
  "key35": "46EuxxVyzK95yXGhFX5MvC7vp5SvC4HfLzFxNj8BvC4pbJzBhTk6ZpL1uSfHAyi7AjXwJvHKE6vTV18YxtNJRHZd",
  "key36": "4mT7FbNw95vyY91kPoVqBibJKWjw2ocYh5mSRckUmc2Mg5eUY4G4ECcrmp226eVpisojAkVv1BpEd8ocUchSpAGw",
  "key37": "4UAihZWbeGMb4twZtobxQYABHPgw4sfhMUo4r5jExNiEJaRoZiqPD3CGDzqvayemdCRbYWjPFtWFXgxE7b1J3UX"
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
