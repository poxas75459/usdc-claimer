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
    "4scJYADnxXAQ4CKQFh7pThtudG3yejLRbmwvjXLnELChPNv6xHe7kLRNXrqbdDtSm8w1BWENzqUpiFU5piGcUogR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hn3dwY1eH79xP1VHPjdgDRuCbt1NR2qfErxgYzXu1TvQogMhxaeEAQzPmP9Gu8UDVS343AcbDWRTaRq7eZNk1wB",
  "key1": "4t5UCExFespNetvjqocnPerVoQqbpnnwnuF5XavWo8HgJYirkpSKXun1SBwYSyhXwfudMKXxDyBoQK5uoz21jVAL",
  "key2": "7JEK24u2wuJivdQ1Z7h28hWSHrwfsZzvbNCa3Mnfs8mhSTZQ63GQGegVHnevi69beYyGAuubpqvAHRC3oJjgf4w",
  "key3": "2UQ4nq7FDGDk34hAcmfDoJxe8EoRvvbLjsHfykivyXTwNqHRfizFsLvdptqLHsCZHw84gQMqyGs4rMsynUssAuDY",
  "key4": "25xzbVuRaeDtqtr7Wk2U2gVhVe7af4zGmzfDZFSWo4NvPjB2fijA6h78md33deon5mxMpUFHXfD3Xq6te2fmo3ns",
  "key5": "2EkVsMHzfGbDrmJQ329BYQdXSeryGCSWL6EBiCWv7T7Pj5ZQ4cNGnsCWkGN8Wwd4StVhUkSXyibZVrd8Nbm5jXsc",
  "key6": "xpm6L2oMp4wHjoLhjFWSfbvoPjVExRZ8QGdvEE28JoeBSW1o5rECDppTg74uWphta6XvVMQ8v3kevpwaBF45Uz9",
  "key7": "3r7zH6SBexBqWDmaPch7tPz43d5iXPgXrpQsQAMQEFQDXetLGPSu7e8dQhyn8KLdR6v7bDWMwY5ajFLjgDMi7bqk",
  "key8": "vF79a8v7xASRYhVj7MmHTo7jgvYT1FtviGJEmaxZsccQutaVd3oMZho9nsDQatsQySAs9gkwFYJFvwA6oKgDfBg",
  "key9": "5aTKvhhmSgkhHNgpq24oFaV6v3Y1GYEot51irZpzkehhUc13RqxiyFCqeg2Z25PHadBBQUR4GTiueJsmy4JBwHT9",
  "key10": "5h6XV8mgj6MEbnbpTqgE9tbLLMwbADUqKTWrBPn2nLzSAQvTPAuH9JaMFGAvqh3piiV3osefMaydTuLvyCtGvrwW",
  "key11": "5q1udjLjV9DFR33ZGSEV25htcYYxYdmZZzUXRhbaw3qTzFC6JGHRJnwaxF2X7G4L7ymHtX913AuwCBunQsg94v73",
  "key12": "3DMQFZFoRBG6FgvFLoGpUNjAoPrshmh6ddZHHAgFnDELjF5LmjWvsp1jE3eNn1h62n41zmRxPRMqTx37WmjCgUTW",
  "key13": "jXA2iVyBWJQKnX2Abv82WQNa2Z2tW21VzgTGjLNuqUKKJe2StCxTJEUYGEaSABUG4G2UKR92bNr1Ymj2sfYYWCy",
  "key14": "jTmFNCQEH5LzwMzqBSvZ685PcqpRHED9326gpUWftddTc5EELpEQd9xppfHYYMfrs1q2aUaN4TghCcnEmT4EMV7",
  "key15": "2n38TweFp1eoy97bC1g4gF34TLY4pP7WammxMSwP9ab7nAAZkugMgSsZ9CKxv1wcT9yJjVQtx7hWT2uChRboAZA4",
  "key16": "5qYeQbKfkH9yA6orykt7QqNLPf5cfpHkkc9BACiDQi3Ax2c794dXQfrbViJRQmUhGpbnzsd455qVQdK8KegAsiLf",
  "key17": "2V9L5Vfi969iJtEQJNVQ7hRSoSbmXjwyAx64mgds1PM8Sg8sAHq1Fu8KKQwqTrcMDgd2FU7a3Td61ZdCWbCPt9pW",
  "key18": "5KEKBvAEnn2FgjoGJ1SxVuP8JdxtU3dU8zZ3CKWx8pLjTZmhQD55RyavHE3bXwJfvpv9XTwysnfPTbyEpgap34iR",
  "key19": "67chvcj3bYKD2CTZbsZpSu21x2KNHt4gwWMoGMjdqauFdUPK4W1cwyjbVEtb6idJ8iBU2ZUrwhLs2RiroepKwbcC",
  "key20": "yHZdz5PA3S9aEtrNRRzKZAbLapfkXrJmnXgkiy7bVZXVqujqptaYUfd52mLDZLncUWdd4sGkumANUTkAYBfRyWd",
  "key21": "2KsSeNBNo8iNB1MFYsm8KXRZZEuxXkWBXi9yDgmCwbERushL5UwDhpUbWhc5mZMeXkSsKFb7sHUQ2akayqQmArg5",
  "key22": "5do3xidGnYEZmkZQPnRRCX1LFUtJXE5RgzVFU33msZuFWUU9sqiqDMPcLUQb5N8Rg2p5THapa74nnypcuAaCBomf",
  "key23": "4gCQaGwdpA1i4ZuRKVG52VCcWb11Ccda8Zee5V9tdStM8p5Q1bk446qSrquC3jBmGnWjroc2zqJDJfFbhoDbjKXp",
  "key24": "4Wxto8fCbvrRf3NJ4zSTsUVA5S4jrwmWpMQHfy4vFwTDKnEsJoaQoaSuYs9Jmv4qCmdctsMZFxzkx3HX287UyLZg",
  "key25": "3bfRbwSyLKoMU1Utep1E4YPcddXcNb4SdAiPHjZMch62kL42ojD7xgwzQ3oKJESz4cp6GtTjTGUfNnkBaAAR8QgJ",
  "key26": "4zaqSKmRATcWmA5s4qhuhoFMsuvQGyNsTA2pKSSKPRGzqXCn3wNfUyQduULp8sxLcRkXNoXcAaFU3FHVsVjPYzUz",
  "key27": "TZJVpd842SzrZsqbH4P5K42bzmm7TtVUYydzHCeq6qRXRrF4WQrT8J9bvfmZcF2z8qUSYp9bW1yTMTZWd4KqwB2",
  "key28": "64HYNWRVaswPcf5pp5fwfEATsWzTjZQsLGMoMKGD9TFo1wkLw4erfXcw4C46TZrKuTQ51zEzvZpFP3ojXBTxWqSN",
  "key29": "2pVNqdgpgKH6U3KHkGtB6DKg3bTJRpCrTGWau551krW8CXkqFm72Dm7uWbrQRWAJJ2aAEguKJFwF8wDBc4ARPHfD"
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
