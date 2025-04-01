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
    "3fxAqeUAUfhtMjizXFYzHejUG7qmRMjojR5wN1Gi7kxJCQRRv1YZwWuSgk4jXuizAjgq4w3TDZKvsnoYhR7Uz768"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64PbN1SaTCJXfdWCw7NMbKCmfLitnktJQnxA4WuwA34bDwh6QdGQLx3XEURBHnxQvWkmG9BnRYSqRMmE4pFbFywH",
  "key1": "4xyHN942rtH79FmR6Qes8D5HHBupRD7tg6xCmHZB7y2DHNn8cpiFTZTDeGHtkSYuiiRcVDRQZgKmHsQuCq2ht8fd",
  "key2": "3xVCLGYE6qLnwo2scAVNXhTCUPJXZ6p5dvayEvXoG7VF8qS1oscBXtcdYW1n2TG3w7hGGBocXWe4JjcKgWgekgnZ",
  "key3": "21Rq7nUKJMJTiXXmC4ha3GApNqUfeXFX6NEG1K5aqJASznKQCC8Uynj9d8g3jxHf2WPP3eHTQxLZFjcgqpx45Wfc",
  "key4": "4BLLxcNiuN64L8m5m4incyQzfUVyXKch1sfBzn5uYCDqkDXZSmehh2G3ZNiS3ck7cpdGa4N1m6uWYqSc6bjBTJFL",
  "key5": "5zgsV3WGUNpWRhU3D5KTwaUCTWvm3g85Nt2dpV5GqRfQCeLQ5xJu2a9MXpkb6e287gUBPS8Pxv55yxrCUZ69zFrf",
  "key6": "yw4wVipzpNgToW6XZjYqiUJ1jDY1qPr26VLmGZRdr7MGuyspwM9iPnm9qaGbB99bMbuK9hrGtzEu3UpudkAzsqS",
  "key7": "3k7uPJdr9NoVqv5g6VJ8NRPrMXA2v4EzGexrbMCfrcW8eyRGmyWbGLZSBHsTHwarfA97LUnivDjgVhRhCfY5EbxP",
  "key8": "5z9sawZ2ZDq1tyWowYYGUHqQdGtUmQUkxMfGqsknLFTntFN613Gf4o5gdj2Y3FpRzq88PfLe5u8h8zCSpsy73bPj",
  "key9": "3Z36Fo4bbxY7iLhkirypAuHJDRJoMEdscB5fvedfpLAkNHW8FrsE2sm3AehsAutMkeLfFxwJgdwVav3TTead8XnG",
  "key10": "4cG3s4xwMwttw9PUwSmA5VAUFzcV1mJrfMyLWi51id3GB8QmcLhz1peUh2u7zcFVNXpzoxj6EXT5gWLc23AXKRJx",
  "key11": "4uQBTPJdx56m1CGAwkN25UaYwEnGnnoXsQ5zEAwJ3ievEiQraU3XWtcNndAA3zjjYZw95NjKU6Up6kPcCBTq3m5K",
  "key12": "523dbQPgh7xNpFM1G8rcL7rrURtJrgNyrGBeYzCJbLTsE4TXyjh8g8QoGrdepZJSoeZVonq1cPwgVMeKmdyxjciV",
  "key13": "5K6dHMpjG9nzQFoHvuk1kdnfSVedx4zqcsf8Tkv5XuJNiBL3WhRHYSFw7fLUzYcGKjFR5ohDmtjqRWpbjWeuMyTd",
  "key14": "wFjoNsLHDESn5NbXbGtWUD4zeRT1msSzUFZiuecpMs21rdsk5s6pY4861AXitmsJjbNa2uUj4WnV8pLL48CsBpm",
  "key15": "4REmR73haM4a8dnz6C8K6ww7thJUXsojTTfm1jDqUQxD1D7dwcM4sQV14oiN7pmK2SnNibxCMegRD1Ro5wWFSTvN",
  "key16": "5SD2G5fgEfPd7d8vRCk4KQRNEAdT579sgcSbAdaeHGzWJUCoz6ks2PzBhpWnAfp1oRDnrtDrS3YPxEAaXPLBWUS7",
  "key17": "3Xt4cx1s7nMrkFZ8iZeZj75L2pwssiUfhqzXR6GiS9cgQtzZxNS4cKNakdNGX5H2mbWkdyNRA4z22MihsLv394ci",
  "key18": "5DvPx4Ziu7RQKCv1d5jZVzVVhfKojQK8hd7VQZcrRc6PPD4jJrVQEXXmWMD4AiemXv25EyywW2BhBdmq2xLhDD5S",
  "key19": "S9qvzrUVivU4QACk86vnniQ9vK2nzVHhVsUqG9cXnhKuntCCXej7HjqwaXTse1xwJUwLN6Ys2Rd1t2q7UrPAkkV",
  "key20": "3p9SUpQ3Fc2hT7cnQiUYHrQVvUqnWWyhUgoEqYySVG7EvGTEUfs9ZytURvQWsLrczS3fU1qkmqeq7AprwBbx8uWg",
  "key21": "8vrAzeJuD9KRFuWRzEU8TSvvx3NrHYStqoRQ2XZpRsXMHzT9JQgg6hiYRbzwniGpA2rn3n3YFFMKtPbrJAo7CLz",
  "key22": "46C7ThYn5h3pXkGY6cngSqQjPHeQi1SG7BRC4dqxiMHBiLP6QtQGbeKErPpwv58gWTDf4xUjLfDCnuJCKjH5gLv2",
  "key23": "H7sU3gqzaivHWFsP3g8BidRgo4xdWHUTF4VPdFMoFyshLDFJ1BKEzqLjuuP7s8S8LP8m9oJnEzibWyHgBdzPXaB",
  "key24": "2FtRn25feUEB7XiB6JWgmAxG1pFztbkwLHxVsEYecWD1Sd8PDbjehtynksFpUXKiom1cPJ1x2tfu7nSsEtgVFmXP",
  "key25": "29jRG5n9fBohD2mZw9WCjaAi8pbW9ZSUA7LxDEPZuMqTdDhxm3GV9Dw9zXRLbwbaJZtqH9cCjAatcTmR32ae7B4j",
  "key26": "AT9sqPjoP7jqA5Hn25oDD6NUWoEzDmeyHvm52MRrm1b9bSWPwurqa2cXfc1PY7nDdyYr7s33A2z2NcrsUD3BC8f",
  "key27": "3AcrnCQN7dWWwmrU1voe87k2BLgYwJCJRX2qztdrMr2Pwz9BwjnFXQbu6DoWysXTdRn91fZQ4Z6N8mw8iVPuMono",
  "key28": "5wyH36jQu5FJJagADWKmbCAjhUtj24jQLRRvq4aJN51FPPfcoPw3YicYyD895urQuQK4kMUpiE72mGmUqDnF5oqG",
  "key29": "khm4UvcnDNWiHLEiHCWFMsmQc5UrkhGmo9e4DVjMU27y8WsAyz2qqoGZEBhgPn1qwgwLn6fRhik6mY9MdrMeiwN",
  "key30": "2rLxM19hueNZZfmsaZTLjbUUmLtMfU1ZPz7FGNjjU6TuJANtXGuzHQkarXMQf8uSkay4BLu6rbKRA6dtMqY6zeLv",
  "key31": "44qVDG71ooGTKFSvX2UVEGUhQBj2nPEoSTpTH1n8vRgyH5k4tjXTxwDnvetiSKNPV8H3ggJoJaQp4RCGMpjWBT4b",
  "key32": "5q6NGjXwft6HYpZW8HbxtaVNanqam5NiqKNZ18RDso4q2GzkkVzXcxaRdCkhZKbZLRiVMtWm2DL26ZK5AbM5hui3",
  "key33": "4RC6nrXzxw5UtMeenvARsezD1xLVbNEFCyAWMfc5skhsJgqpmqgF9qyoGkL53w5fRTUkQ9XybSuMbMKVzD33q2xa",
  "key34": "4f8tUuveUQn1nDw4BjSvpnFN98kxP3UB8tX75dWY5RmMmbCvJVtAQ1JzZuKGAs1cjUyyYNtTYSH7zdX3s6VShVcs",
  "key35": "4HRcNUr8nHbYe7bA5kMmbUWomqUd6heDjgyMB7569FoxgZ58NSEC6fDwcEbBVMQeX9747on3r8Q6djWRpu8V1njr",
  "key36": "4ABuR5BUttJGf3pLqKAgXXMMF4Cawu9vvM5N42kkWSNqL2qsUTGGTEdbV4QYnArVi43o1pcbnmgkmvp2MzW3Hwkw",
  "key37": "59iZvQ83fx9wwwMCEoafAoLHE92Mw2X64JCxtPQ4tYB885NmCRHvHdM5mayWhv6DCoF7T55aBkMj7rSRasvR4yrV",
  "key38": "5wkAA358TSKbxKUetoTmXKE5kM2PrDYFEn6T6CwmreSNaCbHevrgnroWjEX8SEg52aJX4GdSjkDDwUqEGuqNZ9aE",
  "key39": "4M2VXPySWj2w1LTcDhAhFaeFs6unrRHTPSCKfWFjPP68eKZ6Qrcde4wuZPFF4Dfz8bnZjPdtWEBDhRrRm6amoozi",
  "key40": "4kTHLDE61Yj2ScZtLxsixDs6VFXVX7GproKTHXjDS4cVGpdo32seor7kUzKgfR4tGtaJsrhR1j5oJGA8Pqku2bXy",
  "key41": "rp3DLqDC7isTqUwxQqQGUg1q8Wun7zwg5oTntUe7FotWYewJXe8pPMxbqRoKjVa2U3g7cDKaz57QS84eJtwh3s1",
  "key42": "Abi21X85ZpFKdgKxnSH4nsa5qpRvkLn8rmAL2NnGynBiSyuX1qxNaofVYM4Hm7mDgjEmAaGNBzwFXx9FDuF62Qi",
  "key43": "34HZHwT44X9B6SnJycwnuNY2JmPC8Gh2uR77p13X7AjiH6Jo6pKDzQFoDXQco9ADG2qFMSXcrb9tWonq6XqLbsM7",
  "key44": "324aQDiQnryGtVqTsCMQghHnc6VMQ9ijjLkQRtbSvNJpyppS5RXxc813U4fM9N3t5CuwNXurZjazFr3vLNK3GR4S"
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
