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
    "2muh1ykmmq55XQ83UEKYCyjQjci3Pqk4jiBJZT2tmH9gk4MqW64Lb4uoREFXUYTCVtvCh4dkS4T16H8RzTmX874b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a5ZCLiSsy1U7XdzoEGF7q6ZbeSLZxM5D3PJFhrJduRnBh6viX1Z5NAcQZ1JMpsihSYx2M587SXAFKActnJsRa5S",
  "key1": "55eJKfQY1uHxp3iMPfP6wRUTtXabGcFkTxJbMRW3EgNr7MyX1LfQbJBV9AyxYKS7fYBBQDsFVY9MHHaKy92d3YXx",
  "key2": "414GnAHEaSFiKgoQzYMchRx2juUq4aZYFUjuk21ei1ZtzAV5QDK4udnxuQT8qTyLQ1bYSRPdbgvk2fPZwxv27j9Z",
  "key3": "39CohM11VX8jZPupNqhanaM1gN9at87bMBiaA51X5wTDFzYuRzoYpfuW2txCa9eFQnnGgEzD2iBTvFdoudtyMaBA",
  "key4": "2nFHsmx6nfZSZkGSrYdvfwcfeatTRaU4JptD6djEjbQFomw32tXuwDMA1bQ2isbsUjpisqPEj4e3NXNQGDtTjVH6",
  "key5": "4RRH1euaX2qncrBrUbERVsbJR4W9QudZ5QLZcVbXRDzHvZbH5Em298BEN1v9nXxWNKYedcsreJ1HgPw4iTK488QM",
  "key6": "3zbq6BPEswLLjhKUZ1JPHQzGE7RYb8x8eG15AowDPkPPLUiu1r4TBrfSrhv6tSjVaH4dwP9BX3vvy391gQqjKuQe",
  "key7": "2hLVH3oYhpySAmGjFbnFSZDKFnVrtthJvoJiLgvBmXSSQM5XEo1BKvQZputTxAMrxXsCJSVVXTaUUcAjhRJgHJXH",
  "key8": "uEdmYfpVoymkxxsELdHrvCokkzesga94JBLGCYSjNpnk6gpmqvHny4mqkcn5xiU5JH6QbCVPkZx467xHwedQ35g",
  "key9": "z7Dhq4dekgnUmJeG4XHZay4YShqt78ohakHtUyh7f5YT7RVdGUWGKJtJ6wiNKr1KqEAVRSjZrEoWYsrFEd43qYD",
  "key10": "2BuGPR2bx9ALy739E9q25t3HThC4eWhUsBqjJf4N644XPfmW96TNCEJz73Acr4wXi4NrVjkydf7S3ARchxDTpJ54",
  "key11": "2o45ufUERe2UPbSmhUuyUuaYk354uKcVet2StPiPspis9NkxKcL9h7sjiDVmPGD5ApHZWHCC5y1Yn2rw52wwBySg",
  "key12": "4PaTQWRHzYhzKLvigKyirJtyAhEaKMvNLnEMEEwqBkbDA8bo8Tdr2SVvhVQHYWZ55B2hs4rN4uvtfvRSZ2y225a4",
  "key13": "2hdXByrFkhXSPNgtcvN2d2RCZJcWQ4By9G1YmSedaQHPAueMgnrd7S8aEP3vrtfted1tUMFV9Z7jcYRte1V1cwoD",
  "key14": "5p4Ux4ov8FWVdKRE6HsW6FJJdVRkyGcuZsaRHvnXno9pWHbTSJJsXExVzQyMvA8PcNrS6W4FkaZe71NQ1WogzD49",
  "key15": "66E3mRzV1dfgbEauFXnJr4qcvWbUkmx5XpZBmqJ51goavbmEMd6rheuZnrBdDTRu4BGt7o4BtrSkgxzcD2T5TJTd",
  "key16": "5vLS2skcJr7WbcGSRVe32eBbcxr3UFwbSXKhTkX36mGp4NovRLEFL938Qvphosk52uHL6QKqdXHUVTM1xru9kFPj",
  "key17": "64iHH7niyJsEg2aLCYugqna7K59TTkLbqRA4PsdqwEndYTSmHTVKztCrKGMEQienw8obgLazNzYxN32chjsdNRfk",
  "key18": "5ga3wKr7FZpe5g6ocE4jK7A4CXoCtpmEnAMpcbbLW16fYfASd2gcQ78Qu41LmrJ7NX3x8ATVLE3jjbB4L7oygPp8",
  "key19": "4DSUSC1Y7jTRBs5ULhPn7u5zUjVUSNXsMfJSY9f4xh4qYk6pXkz3FSvwXUZgPpV8sh8REQ8JiJxRkQtHqhTR4d8z",
  "key20": "47TbXBJxPeN5eGYGJJCFQMdHRqvU7sM6KnkSotJzZv817WHDwBJ9i9PYHN6bTt8eMv3UFsN4aNAy9EnKZbnK8rGz",
  "key21": "4Fe6inzirvnUSqbNoczesiBFDJuDcejikQsVpboS2Qwcwz7L5UTazAWyLGAxdngYuGqkcVv1p31FnmMT981GkwYB",
  "key22": "3jsiKriLaRPwinzB6XZBGho5mnz3H3jNm4TAm7cgeGYyfF6ATRHucHVvNGUjjkK92e7psUhpA8spNgggKqo6fSzA",
  "key23": "aXfgbeoo6u2fAghQt9GbhWdkWqYz4G1YGbWpveumMcePWX89uJbYLrxc7PrGMwSqSAnUjco1GtYgVuRfdj8uEhN",
  "key24": "KFFGb37WW9mVzhUafmACB2eXuXAKnDoGHWzJy5MdkMzShvMJiNRJrku2YWucX94yB9CWqgxRVXmbqmqadtKGpED",
  "key25": "4YF9vUrKao6Z3hq4t4BfWD1kiAm2teHjtYmVwjZAYqyD12WTrpAu1GWbFwD41n2pSPi1DUvVza87Su8wcXXsXz4n"
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
