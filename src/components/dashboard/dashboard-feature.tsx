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
    "h8HZvhrDZrYuGGQ7uzxH6SeA5LgCE6UWNTTRhyrkPWoDwUhhSYuDP8PtJpWmdRCwhzYuy8aHvJv9dwj8XaoECdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H4uTHYQ4tuW9CskvN5ojRou5n3NxDBo8wXHXh8Q6nMiQvUyNNwgrJvGYRH1az6btVLoRhcTwAFGNnVSFH1wP3rY",
  "key1": "UNuZwQC8H9AuthiFdjpA7qimeTpN62JZM4epJxYcnDzFxviBm4kCaxJmmLz7okB1EwWc6r2UV8DMPea9hJZeHuf",
  "key2": "2oXPbi73KH2h6JZb86kXu7JFS6b1o78bxKGXyhP2cXgUJk3LadpLPk5oLiWGTDv5aW8YeNdUE79PuLUMBE8tSu7R",
  "key3": "4QCTCAmKnEQRMxmbzSYVDqh1kQwPUTDDpqnEvLo2P1AMZbdY1BYGcMep65iKcsg2Gr2YYcWi2uXUGA3bQDw9tRhB",
  "key4": "YXw3GJD2PkUE8vfcvKZKJmXQiXuJHBmyVsNYJcxvWW52QMcXsctUxQHX8aGzEXcyzzS5A2VCXxQWfPZMZR2x8VH",
  "key5": "4Y3UAkzto61YejjpFAG9m4Et8i9WGR2zvJ4eZRVRbSFPMZmXRHgqm9WuEgBRrarRTqxAfvpZoZ7uAuD5L1hBYmrQ",
  "key6": "5z6Bu9Lz7cHDvvVfFWuXjSYcZys3TYoCgPsgAFPLrrGhevf6CF4UvZyLVzRycoHuXNGPapckHBizqok1gUMc8Sj1",
  "key7": "5QCYknDHfqj3tw9aACJ7q59tSPC3KVE8RkXqbqSgTzF97zUH2xAWEdDuq4KC9DEXSdcLtfnmoRLsKBgsLvh5S6Zg",
  "key8": "2iJkuHWMK32yGB7Jgv5kW1obosGKYiJLx8X5nfF5TGWwdF8dJM9mAcYk9AMShqMdwpB57gqmWz8d6FtcaAUYibcx",
  "key9": "gtMGmrgDEBpehfQ1qySe9ATTbKt7c2h9thYiJvcHRDPRJCbSkjEkXiLJ7Fcy9dwJCvfRrFPwx4SDdMfzY2qPfWU",
  "key10": "4kEEWwHxfcuCnUhazbYMhfBH5s8FwKPbaWNtkZeoHbjBCXWYSzD9pZjE1WZQH4obXJz2AZCw2pp43EMA6DTpuNtc",
  "key11": "58VboJjauff75RNw2QzrPWZFdyTaH3EGJJSpdPnT6jyWGKKCtoXnbM6GHhDYcPdK8mgqSr4V13SnG2ehnwzVcy8K",
  "key12": "4BuAYFuZzr2sT9NGRvRoKg9Lae3GPnnUMeSiZ7jNYRN3ob4ELUUKUX6KDXA756D6aMnJv1qNfTxJSYDBYoReRBin",
  "key13": "sZRRRtM4YzoZDjLUf1reJRVM7tdKm1H6ke6tFSQJKzLH1PN2yjw6Xx2AVXcrTavNviHoDGZA2LKrqhP3t6ENaZS",
  "key14": "27nkJSP2ENPLeRUDmKfjgSPzmSTcN7MpHa1AgoPurG4kcNWQ4pbozhdKScHiy2fiB6fC7QNKF3mmTMW5c3vbpif7",
  "key15": "3LfEDgjJKPUfcianS4c1C4AJp8aP37PVQedT2YFhGdDb44qdyJZmFhPNNAdkQkahVCb9fvXe2X8RAbfPxhmvUf5k",
  "key16": "sALzC4LYQUNGHwNWqDbcMtJmw9WgF9rwitpWoLFhbGGbaqbW4D1Jugz2VbgBcxDmz71gRrbssUMNzjuhRroxS1H",
  "key17": "4HPAm7YYgYEDsG4QurvwR7rc9AxCVRqnfLUUX9ybc23p4AXCWYD3DNfekjq3o3dpfQJPXUB4dH8L5A3NpKe69BPX",
  "key18": "5gqPYJWJAxMvPhX9AehftHmRMERYqm4WXyVaVEVA7VVPNWb4U6eCGKoSnrbF8goS4D2NLo5hWBU7T2hUXiPxWSwg",
  "key19": "4d4vjrZhxr2ZiKQjZSU2qQ5t8skxUCr34yEVoSwn871GRrGnY1sbfGej9sCgXcMYaHcsdfoiX8FRgoMjWpKCjFJg",
  "key20": "45FiViGBxHzyHqc9NLMcud6rdrj3xyteqHH275ySPZ6e8dF5HNxob5UoECqYg5n5uDdNdekrWwF8zKvdkX7Ls2mj",
  "key21": "VQGAwSS2zPmsFtumswY8AM4Vq6k8mhx1JCZnPb1Un7rfkAJYYDbsEDx8DynKGMUb6PjArFcZtguPJsaa6DcWV18",
  "key22": "oCZBbcPDmQrcnBeKyzNMhZNq72Syd5QAnwUP5dfYx9MWJStNer8vhZKJBi8jQot1egZr23K3MTepZY2pjyZkHAF",
  "key23": "2tjvhzJ2N5TqpL7L48imH58CouvUEe8dU68bsDdckeHCE7X6rhq2ADpc5cciVSc6FD5htbu8169ndaqr43c3kSMp",
  "key24": "5Ziu6ahCW49rfyikUjGFrGESpqFCeUUnkpcrSyiieRkf5VvZMSESdzg1yisqCTmvU44tjeZ5r3RBCbT4W3oEUyzQ",
  "key25": "2c3ZeyuorhwaxFJMeuNfYxdNN8AtbbMxx79cg3Rre15xZtQYRckQYr9R4yS82NuRJVBZS3Ptef1SjJG9kPxDDVy",
  "key26": "4hK7g5F8XHRS45WNDdkmwMgRaw5xMwSoSc2mrWkDHgYbAqRAUHX3RVPzrCaABbFA8NZLUXdZqAzWqrw5mcFNev5p",
  "key27": "4Kpi7Y5UFjjx6TZrmRGG17NC3J3zLZ3UsKfGXQpsqgTsep7yZ8tmpHG9VUEfSi3aSLBppwij1p4Bc9TGSxUaioMw"
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
