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
    "2GdYvVkhxgnwzVmr97GhKVpTdAwco2nNRqiD4cgcLJnVBRQd6nTJDvWWPenDmk1iFoja5uLqcM2XCHaXhWgjFxvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mdMMYcBT7CFzbgJCSYUBABX7Xqf8yPFrAbTFxmeb47oHXKzgmquT8FJvtd2sYNUBWkDTVd5rf6QoeSQzPC44gWF",
  "key1": "1qoo8PCwcVePnC3SsgLCuuU9bmDkeQZoJqSXvsWfcvpaN5ViaHAbUq2BJd7xZ9TsSFDJapRUZFN2baDHjsvvw5K",
  "key2": "gsH9k58wGek6F1kYVcSCa3Rdb5JD71fAJNwCxPMt4EWkhDaEEyVX1C1BtCxNDY5CVwQTCABMQUqiDm19tCjKGn1",
  "key3": "5cMFKPouVtrpCw5Fwe6kYzZQYK8vSUxA1hMmpvuboy6ojKzMPWqVV6etktqGK4w3ryRcCS2m6A3gLG2ffG9svkm6",
  "key4": "57EALy73K9f8vxBSR64GTkS8rDNyYzyfdf2g5YHtAir8KLKQnYci3Mwn9ixpmognKHw3tKXhgwy7oiQ1xYFhavYW",
  "key5": "3HHpKMWTqVBVfpBnRx67YnJhzkiQDMLs9XBPeLnGqBTrwbAy36L6rB5kC3nms5z5jPW8JCaHX2MXJW9VSk9QDAZ8",
  "key6": "2uZCUVQw225PaQgRGWHEmuWFH4LAEzU9NC1WN6NQBzvcahtR5FF9KeEVq3oktXUNt59Jjs3z1SvuXixb8FF4bcaT",
  "key7": "2wpG4uoFzbUoEmHZQNbfippSBPaTrxLSb2Zm1pEPUbAuiU8P5b25scqoFZ99CLKjMMjnaVRKyreWr37rdyhBLGri",
  "key8": "3LzkL2S8m5HY3DGtyeZbApEqDPLRzguEWXb93Cv1msJdWtrMw4Pi3ENFC4EupFPcoHVyqgXR1QZRZvQNheSZQDbM",
  "key9": "W1ZaE3eiNfyP7V5jUgcGJVXut77nou5TpfPgFqiS7D8x6SdHqMGov33FFEv8MhAsgqQWye8jEyXVN9aLQbYA4kA",
  "key10": "4v3pzCMXS85y4tafUpSoab9xWnDP9xa4BtB8f5aw7QWJ9umNhS3Uh3YiwK2R1RqbsRdy6rziEuU1beGUWqZNfXYF",
  "key11": "5RyjKUUF57m1XqtWM6V9axh1wbG7ZAU2YeqSu7UKk7Z5WUunu6a2N2wTbMA5TZ2cuL8q7i74eUYFSG2F2B1nBiYk",
  "key12": "4WDWgFLrYk15p8x5Z5cenUCu1gdZApcwPgGjL5c2CGvW8DHA8S6KPwJ4MPUWTPTTR8j3GVUfCyiTQ9Va7c7VbCLk",
  "key13": "4qSe9cR3eK7RPHVpXo1awTwZuW2NosAEZT5VXDQbtGtyycbhcgsF4kq4rZP3ntDL5phLPR4NCxkbyQpsxEaHCdqq",
  "key14": "2ZUJkEwG8DfFM8ZbL7Qfuy1arC1tT2A78PRjMVCdHAHzzYekuvduySMYhG3JWdBdwCrwsvVKSASq9RdTJECU8upi",
  "key15": "n31Xj89xCNnqpa8G1MCmbSGXnm3M6B4o1BqtM1wN8wSaHiu69vHb7tJNTeyw916ycfuj3oKPy4p74ZGxtsccNy5",
  "key16": "5kwBi3hTSadDWEn1f8iZhFKv5bwPot8gHwFbWDAhKYzd44DmBvG5uSJwZemqFXPMNVitnqsRaJjmkfw3ZUyH5Kpo",
  "key17": "4VdL3nHZBr2wiAwqvdVgyBsPQ3UnUFmtUD52hXteYUMcCt7hYDWM2sKZ5H9bbuVqPBx1GHzLmWTdGRpzYVC4Ep2",
  "key18": "2mvhL1hgwjHCb6XApHRRAkkPv33poatQErrwDqSLcmtdhTnXVebVpFQVrFCSzL97Fd4sWSTjjAhuryWi1cCQbkRf",
  "key19": "3jz9PaSepgR8oWjEpc6qkXB4zmyoz6MCc6QDD34Ey7E5HHbpvesXmyCRmnbGMr2Suo2UtuBZVU49F3hQvJxwG3VY",
  "key20": "1CANEt1uvPDUFDGNiPALQT1ZKagQ661qxqV7v5Htn8dQjVf9pVe7qsKNFpwrzfL4yxEy2uUj8fwteNHygB91PE3",
  "key21": "5MrRr9YKCff2v4gJ4ZHZHswXoLYS8MuZnHWkQAz2wmDDUeYZmpiUZTYvs2QbxB15npiC64xodCtwGSqwc5McvZkJ",
  "key22": "2fFEFxyRKZtcvBopPXNKpmRtvzgk913RLzBVUatv2QF8krYvMqHAEuYsT3d7aWBwATRuNGFzU6LNy5GQvDVCuASV",
  "key23": "3hHgmT5GJAqbHqT3wFdK7yLjLBTfWQCM3nFmxeVrvzXvUroXSdiv8GUcoQ8UAzexVbDhNjau5FSewDKA2WiNVis3",
  "key24": "4Qduj4QsZ5csHug4KPxspWePqyZQHvcxBwDkFEicaK7aEFUbwfXPyP6gXnRpU4opKX7X1Vqm1nWQcyMJYSFE34iq",
  "key25": "2JjrxvwTxxhLdS2KStr2bte426PvE4TL6nqUjked9qHwggYRBgoThWtiV5oDbw7Ydsovckk7w2LjQnJhjtfSSycg",
  "key26": "4EqBU5PfwcFkq1UAa2JPgP7sh4pxoHiwQ8pnzNyRCupcp2H6F19N8kXopG8CEZzwFB3v7iYikzaNKUejeMFpGzLc",
  "key27": "4mfRhtTveabTYU9k84Z17VsEvcP7j1rKW4EkEAR5eivgDhj9FULSrjAyiuBtWJtJ8gRPpGbpQZZoNFXJWjKDBbbC",
  "key28": "5ikh74pddoai6PpzzhQDCXcmYib6VaMx8wG3MQiqGJF3WdXt3a6ozCqPjs3unbHuNkrBUKZgeXTTh4QvZHtZY3Tc",
  "key29": "EzrBdrgkBpXMJKiwuwYzZAYwHPb5nx6q88859p7cDyuPsPxWiE1W83vxHYPtTg27S5oE6SjJG3yLETDU3XVysEW"
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
