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
    "5BEgcb4goemV3xninShiKiwN7vfYDHfiQ6th2GKC5srQCwD59yBXezviLehuDGRvGR9zrAPvv8d1KU48c2XgAHSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f8bMfKc3EBt1E6pBEfFsuQ1CZWYhr6AaDZP8yjeFcSEs6RFrmBAmEQ4jt1KNsUUYESCNQ66Q41eCRzjvSk49WuU",
  "key1": "kGv9z7CKsPQa2RpbaSExcirKagGPEmc81czUTHs7DfBQmua4yxyQv8xjQhPBzpiotPRH7e3TaVcAnC3aKxHRPN7",
  "key2": "4KAV64Q3SPPVBqaYLDHsB4SeAsqMHEg6Do5f4Berh5wozqqaiNcJQoiBr8omg56iVUtaJcrZmmgKLe8tndsCfRox",
  "key3": "cgEqoixUTGLiTgP6FgMKqZE1ZfHHPdVXLSw8v2CvWUPvpuKjw8FTrntZht7QD6Lqc6v1P5uvna1pKfJdme9D671",
  "key4": "3ExoquJJGjxu8JQv7FSeQDKXvdCxKk3rX1G5YFNv7NLJvMYaxfpCVzvEjvycjzAE8ijHERiZDBHfgx6sRU3R6diT",
  "key5": "4JvnwCN6a53mpUnpnVzDKfvByDQR4cThjgE2inBLPNhQXrNfivQYCJQ1fyhTDSDjiJH86hAhZ51HashbNugzL73M",
  "key6": "5XTJChMxaqE8f38yeqwLb62CZfTRe24onGue65SmEbp2yuN6YNLBWP2rni2BP2K4ybSvzPc9FjWQzGuoe5caJKbh",
  "key7": "3xWomp8fFnXtW23aCn2hqioNnzJwWC2XW4aZHWua9CVGGcxK2HXRfbwEBfxeFeHhwoHA47hUsug3Wz9qptaTebgY",
  "key8": "225oGtH5xwWXPLqLC8Uno1oQQpm6nPr4tDkAaSKCvYXo6tPPd9ZjjpLYkECWZPxzgE1Sw5iy7uSrbnT1W1AckePj",
  "key9": "3zTPq7BFuB7zm9qYCa5uAWiZvbRBkLoukMAzu5zUXRxENLikwQ7tNngVQNZja2QUEfXntyCDSWULzrnDDbBauAqH",
  "key10": "5KDaKDiJocCwiDEBksbi7fEQCpqig9oktbfLfCEdHMkYitAEkDTZgMuEeJa2wUGsLiiAEUWow2yuw2ytAnWS8Bhg",
  "key11": "4GrepcXcY7CRr5GP4mbekFjXbDXPzJ3eEmAz8sj6DJVXga21xYVrFgVREj6uGHhCdj6r6BHhS1o8kmQfnjFioxKC",
  "key12": "rYLiEXR3GqfBoRVChnmfhWPARqodPxg51i7YQANqYfrw3GbZ6npAWDm8bGMXrogc2QDYU3PAJ4PCXw1XajiMEbf",
  "key13": "4reXK1pCazpsYuu24Rrd4KdBamRV1pgnyfUir5CT5qM5668kgDbrmmwNA22NKW5Dqr4s1mqaRtKXHHHsTkJcAnX",
  "key14": "4HDzrudJZmMAeQM6VhqyyGUE8NGuxNoKJ4vhcqG4FMUd7MqrMeGjPW5RD6q2sYFkhmicPGELAqA9XpEe1rwR8d42",
  "key15": "5FFgnEGF4y8eoTnstSiKnnydRB9Q3aVod4Etn5ZhnwsSTZswpmpqWWGWncSPrv1r8bS2gmJZ45oMaSTy2YUUxCZa",
  "key16": "5WuYwRdkpwzaSZhdkV8cDw1oPLiBaXm1qJKfHPZku6URzygG6gXq65ejx9VrUdMU77gWrA8QBVd2LHy1TLt8dxHE",
  "key17": "3YLEbeJwrrEKuHrbtc7yVj5Yy1CVvgNLMmG2f2y1v3Xm6WsndX1BbqVh8bBvfVYH1SetKKhUFDeD2zN8wpxWvVfY",
  "key18": "4W9AhdZNCKG3trF9hoBfzDizmTdXjaY8SGfukb2FDDvPqnydE6k4knnzfRXgUPaRArLBmqocvLQTQCz4tQobz3mJ",
  "key19": "2mFUsDyuRxsYT3MvK5x45bNKjvwu49FLeTXBk95ZVbXydcEUYekYTTXAe2hnS3BkQ3nbBYdGnwPu1gV5ayXUUjHG",
  "key20": "5x7X2wPDmpCFhV2tTyXBzWg5KwdGM1f71fmKkdGcEiU6T2DYqmQfACmy6LrbNgS9pWhwYTdK3Fkp3weSeadyPfJB",
  "key21": "QWz89rSFovspNi2zuYPGnQAuwUgxNqFrk7i12Zj8JiMjyZSDyUcoAHuo9FVPfa1oiVUjXjSmtKkgTPb3sjhD5zX",
  "key22": "28PcMpk2PaTSPA81hMXoqJt1bMCDBTT1g4Frnwe1ibWeTXRe992BJtvfjijLRqpyWzx5juPzid99bgbgPfNEEmg1",
  "key23": "4CxgEjHMyRRYoC41FAPuHYtGZZkrpAyYWgetGGj9CCXAe4CuED1QqQZJqPJQoMNd8TqS5R4bXmDe1mW5E1T2dUk",
  "key24": "3kgzQd97PWPFqFujbVzdaPBBtN1YV1kpv3vDPk5jVWXJK9eomrWuUWqM9ZYy9w6LoB2LGd2i4SsVbuvxiS83up4Q",
  "key25": "5bWL9XYgEmyxKtxCfNCa6E6bN48FdQfs9cyWcX1FB1enu7pXGjc3kyXpoVmMn5j5cs3yKHEA9dHZTrow2u4JEv8C",
  "key26": "cgBDzfYfeEkW5Ar9wxQKCaxRQgHMVHP4UquaCLpA2AwT5LFz1aiwkFes3Hwfco6bSse3kox5H3xKx9gRueTtSUz",
  "key27": "2RDJUNPVMB5ih4D54ZYrWw2RC2vEJgdNyn9rWgo9HBQiV4znyiX5GmYYxJd1K3Eaj3fCUjyiRvkUCAEvrwCQkwyQ"
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
