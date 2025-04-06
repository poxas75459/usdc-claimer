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
    "3Sh3bgMU2NEYrLReizGqvJ9REErjhefDjveb82AzGowWRFiyMey7PQKQYbZYdrdQynn29aS3fCzmXfP8sGYgCenA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tQj3FMK4e84rqv7rPq7VT3kHEtJcDwcrqnLbzHxh37tiEa7xGjdUkcijJbXEBpPueATbPw664FpyH5TSLdeKVgf",
  "key1": "31eBkGTkP9orYNXgcnEzGQuuMrwwQGFdJbWQbKBGVBV5EwE2gGVpzGB16DZ7u7cCnaZ2cbhRaPuUHkuEnFq6EdqS",
  "key2": "58npdMNAHuPRYuWwGNPkM7MsLAcBqARaaJGoPGnSyPmTJs1A9Gc4jp7g8dGXU727GN74WKhVDPyscL7VMUh6aLvr",
  "key3": "3SZ1yvRwcAhmuCywsiR9juMGjTpyPdTKp3t447G2pTwooLcB8isoUYZRizafPgiBYENVbU4t5VWDCDPNXQ67P5zP",
  "key4": "DANXNfWa9Fo48wJo6BKhY6Z4pyQUzJDa4bezXHzy2g6FyeJLUfeVKsoZAfjgMq2T2gR3LwFLKe3uCKmnAGreXkC",
  "key5": "5Rkp75NCZXWKwYExedzzbFv1rr1HyiTcSm6qiVMnqCxpq3cNRrmiiXGDLkNvXmgDqVuojG8FujamRNZRjXqARTat",
  "key6": "3n4uyNkivwLZvUnf4WoPztePRnhKtHHHHmt9x69jLmokrsVFNoGa3hWeev5G2pLgVxGPbjUjFvxFSpxVBbqJN7Rb",
  "key7": "2Snhsj62aUccRa4QFdpVWFBugy1azQLBwQqgeRnu27qZhvi1drdWSHcWwBndTiqTGWwLFr1Sy1gru57ersD6FU5o",
  "key8": "3TKE3FBXDipG9HXwXwrjv4j2M2fpafEQNrCFPMkfKndLzUACTg4YpqhCjecBDczLvAC6S8QpEkqTwfvjbyAuXYds",
  "key9": "58cmKpqemvydLK9wCD1XZmraZb4biRWjR6voLEJ8gbFxy6msvYcL3hTGww2Ukj6ysTPce2kL9VYJy81jRNjUqNrY",
  "key10": "5rmdJioPXjRJ6ELhB4P2wLHj4mqipyYHVoQfQ5AMNB4Ac3AojLCFpo5G7XeazV4RbMh1dT7XkPrCPY76qmUPEmHm",
  "key11": "2MiCMVPpFQYoUNeTQ6hzAyTGtWHWU2dQ9xdrrLKV5wh1G2a7tbGfJaKzZZ5tFL9468JHnwnwWhLJTmxmmUe1sGfw",
  "key12": "3vHjkxRzLvTeEqZXMtmSAuuFG5rDhqPWBDX5PpxgazRhU2Ndbr3y7MDGxVGMXFeniq8fW2aKu5GQN2uXE5wccKH1",
  "key13": "4jYamxJDnBciyUaUFjoDobFMQE3dCKyZoLiPgNvjo8SsRMK9Tq2auwANgxmGAZhbRiDLToGPvT2jKcFcpWdKbnMw",
  "key14": "2ZVNcQ5twdayeGdFC8u444HCJmWvaJgZpNRqCAgHu2ysXzcNdMmHkSk1utw6QSn1gsra53yDGaMXvKJtMLR8r6Na",
  "key15": "2GQ2ukUyTMiZpRiwKdBvGMtg5LRM1e1k9UPxZN2XgAMmUVY4X84UKpwFe8ijYXaJMCVL9RSFbb2zRVsisQovGg5h",
  "key16": "29FSVPTuPkPhz1HNDL6yYJos8DSxhHA2ZaVcP4ZGoz2LSvSoDY2jxmHNempi6nQakygH4vidZECFLSbbgkHEco6p",
  "key17": "e7JeEpyrijtPtrkXjJENCwWwoXRV34Nk96fk4DEk3Udvm6gsQdiBPHqDovtyZtvDwMHuS9qNnEumGuht9NK8dcL",
  "key18": "2FV1zzsa2nD66VGCufQFCnfZafGNNRQ3Wnf6Lnf1am8taqsLDtaTr9d6whVEFPsLBXRb8NGmcrtfB7CLzk3HqiUD",
  "key19": "ZDF4BWSbxnua4JwAK12HXTDZbSfe2Uqmx6KZLTYEdZg1GMz2TjBNvkTnMxCvaQ69KWz98BS4zBJQDHgRUUqYUC5",
  "key20": "3TBR61QYwcyRUukjdA4qnxKSDogrqCuj7tXQS8tH6fYsVUVceTEju4fADCqvMXRvJKmwCDukxkCatN2m4x1fR82C",
  "key21": "3bSMRxmYS3reAMVE1my79ikDkyUCa4xCrpsmLzo52sL3NqwewEfysVi1GqB87EGbzhK9pAXG3eZqpgWAEops1YhY",
  "key22": "64zNd8zgZwXvERcEmgG4jvBrnN6TRmq1g2DZLiBM5iLfgHZjbHhuhbnSrvqgAux7mBEWd5hgdaLUBUo4wrFHB3mq",
  "key23": "2C2jBpAh6NfDR9HAi7KSxEgsaKTXDdkRg3ZN1TbYdg7RXSdR3odUsLgQK9yY9d9o67WkjCP7QCc7DS9GA1EjFZLS",
  "key24": "3sDhgdYfCguWgogoS5L2bdtGmbP889Fvzd9fNBUVnYfGAozTyPM7MLPrdrQnSn8hwtSMm1Pt1ZWwqJkLmH2KNaxP"
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
