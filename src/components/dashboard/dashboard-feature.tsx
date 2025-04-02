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
    "4G7sGS7ZnyVray8tP2UiLWEF2XU9vJQNgabUjCjupw9FLDxeURiSdAyczRAdqhbThbSpbRfxnzARBaHDUzowv95v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H5xfjw7ruVd5Lh7fBEUP2DaE3cKEkYcB8QDKCwFmCQq2MkQT1sv8La1XFZPv1se6mrS79yxgJiCbApjvYXZm1X1",
  "key1": "2M3C5GfHE54Mt74L72FXPghVsC5nLbT8YnU4xsEGrCH8dAC4SVL3Ngc5yoR9MEVZT53hHoyGnR3ycKuKJ6t7UWhz",
  "key2": "3FDvhRFV7YEEeP6bbKYY9akLh615h8772yRBuxBBoTALGFiEtqQuHNp1eB4H1zrRxrwaQFFjLkaQ9HNwMu48BsHu",
  "key3": "4Q3pmXqu9VR813Rca56bPFeLC99gJ7zTSkStWGryjZLmurZPKvMiF9VCyn3PipBFr1i1zMhJMTedZzqocFXdNAhS",
  "key4": "2ZkNsDxsT364j44264mZXNg5szctFcytCuGbeePntZMAaP9nexumUQcouxGt8ocKx4Cfyc8kA4s9tSYsZoBWMbnL",
  "key5": "2nttZZqcRnp4qR8LpowQ4FMavfAK9hn6ikiczwHzKGiCrB8CANoD8TDSXxRWp1tzJKLT9nc9SYsvWqFaA3MGcWW4",
  "key6": "2v8LstRMuxPaFhqisH6Xx4nNzKHQCby37o8AJfpv81dfxEMYRFJK4TCHj4nYqRcQz9V5MULtZzF2yUs417ut6n7r",
  "key7": "eZgS7wycNbsibfUv3h62CRiGHvxLK3MzeiDNM31wFbQjgcjZKjG5fKY65ruK6bpURR2XTsHmKAdusK5pqQYPw5a",
  "key8": "3LZEiRkMHET6TNCGnhMdGHHhJXS22qujNgpQ8WbVjpHzshRzhYZ7bT3Jr35MaMgYYFddbMtWt7x5jQQULh7tRYFH",
  "key9": "3jkf26SzcpMEakqeStK9GsvrS4ZToE7wec5VJteVEb2ju9cmtmdCbRSsABkJaKmGjYxT3EKAB9oBB4rJBkYykeHe",
  "key10": "4wyrr2PU2uTaFLB6nmAGb1jH88o49GwvuUeuocWtCiYH7m8JGStA6xj4e8wcNBoKeNnpB2iivX4WxWGWApRp7nSV",
  "key11": "4WAtHRwSwCh5eN8msYMTh7wp6UFqcTabeVC7HwqM5bLiZk7q5c4HA8PP43nXicMrVYaKLm3QeW6zxRho6Q4zLVQH",
  "key12": "3zXhxMK2rzR78KDSMTykZaTXSgWTfxuDWF4j348KN3vBtokw8wWVbJAHHGTiyCfABP4JgXUcHKPaYk4j1pFN5j13",
  "key13": "4iQdzqQ2vo2V2nCtU7Z4FGHh37V2LofkAsfB6duCDiDU8HuXDXnuCuQyydWq5XLxjrLmBdf662ezjAjwvzKLY2qL",
  "key14": "5LPS1jnoXWmXvd1A1hxpbwaKF5h3Sh9xfYtZKLvv3PhAxfdGdvMrTmiWcogW56ARA6xaq13Dgca7G1t8WitMMxUe",
  "key15": "5Ps2BE6b6yFWXWPzY1rVwHpiMw83uj3wHeLMyiHB8vHVxrDwgmmCT3GfqBaABnxGE7btKPYGPYdUpP4DTBYZkHiW",
  "key16": "GiM2gjSCFfGAcwCaFcRCkpKrXS7DM6bc7T64LuZe9NKuVd7Sx3nfqQuiPDbYBsnUgAzKR1iaTzoS3RqZnymB7uT",
  "key17": "57UR21RrEFZk7P2ZC3RxBa9SALZyMfdFFUBXE35n82uSEp3oTXnb3rqRHbHJ5TLnyi18kmXiieXDwHuqnjihTq9U",
  "key18": "5yK4Nux269g6id3i5pLAMmA34PEm5TQAXc5GAxjqxyGWXPGeqRmvTXzGVVswXx21kjX8yFwVKu8mE9dBqDUdCgy8",
  "key19": "Toy9u5LR8pReW3E5Ki7LWAHmmZxgaWxEwMv3Hdh1hcaFNZJxn8Rto4JEopSLyzbw3aeQ4u6qC14xSzmig55dRkm",
  "key20": "62dRTghQ6kT7uWiPFJVc764g2cEzJMACteFDfbQFq9v7NvsGuC3GhX8nEJyUbL14KhLDw2YMsLT67yssafymk3Fb",
  "key21": "4g58xoN147BJLsFndxZWvKDpSuS3TMGH89przPADzJViGRQvzQLBzHL9ned3XwXiqy7pxh7gCNvvnvyBzdjFys4L",
  "key22": "4jFakEcRskrvfaLPHtJtnDgA557KW9hn7JaziuFvp83eozfGxub8zyd9CQ8TtccSJUi819KXHCzrNx8Y3sLPHD1X",
  "key23": "4go3u2EjJu6yMcLsgciU15gBgPCrRyijfcAgxH3t48nE2eexeTPobWVToFjWn2dd6AJYJ8GJZiWNEnyJ1EWHutU7",
  "key24": "5ZmqYFqXYnbvpkAazyGSwTQpM6owNkAQSCCmac3h9SnFHGKkgBrqj8QyaEdnuSq1xfwNjyyRSvVxC1hFawJsEXU9",
  "key25": "xHwWYohNdKwisbLXDv34Qpu64wQLCutZFtzBSP3MTyySbXkQG9hb1A9uaNPndvVrc4PNpPtzUFZCyrGvx2iJP1b",
  "key26": "gf9vvWnbbufJkni9ebUj2KYoJJ3oooRtQ2QK9warx3JbqCFZzqn2Z86mrzHwzEkKPLZM4G73dwR2csVLskYK5yi",
  "key27": "4oKVNx7FLTr94iSy9Cm3Evggrs5FokUUFwaY2GoRKGH41FMxpmcnUp3GkGrwRBGTA6W1Dp7FVdc26M5yUWwiWSvd",
  "key28": "4S3jFW9gn6yr2pQiyn6aMLUpnRB5aTk5wc3bVX8zXvTrp9WUaZSnEL7CWhG5of9NHzQHXCFVXpY77F1db8e9XpMG",
  "key29": "2gQBWncbK4XLdydKbUDG67NeA5XmyHrhe35aD2yxcgxBEw5phVQNmG7tGnSneqirw4w4umpySBsv9UR9hx6vi9G7",
  "key30": "TVP6A3fPijbBjdkqRqWL3YqaAikP1AuGamdFqCrS9dUqzhvaccnBC9ZjX7kDY2etQRvVC7EYNJEwXGTqqnukWjs",
  "key31": "4NTptqVUpf8E8G4fqXVHffE3xStNf6Af7eFXQcQ6JSYNA5EwYujamnjCKaeQzYgnVfV8Mho1Y4FqHvr9TGQLyWPq",
  "key32": "5dV1Z1C2QjY211aTeuY3XV2DwRg5LJtCctQUM7dXAn2pzPWGtR3QTk9dv6r76mzBdM9XkuKQzaurTuDBCWvkFvpn",
  "key33": "5bmyPoudS8gNWpri4iUKXGoFjq6aSyRTenXSrmwMULv9vf1kB6WcfUXT3iPDN1rLC1weH9e4VqdqDwWamhU7XADK",
  "key34": "46MUUamVqYFDEMFWZsRqpiq5XqwVnF9ekuX1smxf9U1jg8MpZQMJK1VFLpAFK8h48T4cZ8mSP3KKGnCHERq34vB1",
  "key35": "4HvHcejYVY42HQbPb26zWUErVLvP6zCxAYw2FLBC7avEDi5kHVE7HaJ6q2EnEmm33Ua8TfKZLoTTLhbbqq5GmrqX",
  "key36": "2PJVh9jWaHp7kUVU2Cutx7CrWgBX7QPn6WNW1onM1jZcXBxERmpMNBQ7V7CmPQB7D5Tisisw7TB2jykzsbuwhKS6",
  "key37": "2chuEgbjGW3KqoGQS3vScgG7tkjK5hpqA6jKfjijbksGHLj88mXt3gz84RQAzibjnM9tLF7R6sgtkpEm9j6Fq2Ax",
  "key38": "yYogD5wAJz9QcAaCs5vcjk5ixJimpXAFJm6SoDPBNE7xmktZjsXxLYUNYAaWWzX6JvHRNFh3TiQ3gxEKWEZachD",
  "key39": "5Bx3WQyxJadtFdGs2PxmPHfs3JdCagK3Fc27RSJTkm4M76xNyvdRA966Piu5hT7G3NpFELH1sNS9KWcdhm1UFSr2",
  "key40": "57m3ESZSxdhZU169qDLBPPWuMjytVNggqLaerwcScrzJUbCViFRDGFFKihskuDQcNeGq3VEJ3RAxRkrNV11jdW7g",
  "key41": "2aWtkumKVbVpTgQpU9UGqaRRXYR6yTWvbSj174mE5zd6ahdiS2PauzEda5hB761vegni8avkZnm4dsHNrfwTSNrw"
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
