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
    "3X53nZNjy89Br7UbwR4g2afzz3cJ4J1heL2Lag64wD3s9tX9M7jAzfB5Dr1MUsu5A5m5Nfd1fT8814uABx3iRjB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GfWzapqXdoctrKMJSS3Cu6kGBw4Mdmz2FMymVfzeUTfME8m84wHmpMhqHYxvBXbubAf6YYXdy27U6WY3xP8dA7V",
  "key1": "h7GDTePeRVLWGEtF3YZNEYAnyGoNoLge59so2cYhi5miVXd3heosBNnUYd6ye79zqqZzaS4crJdew6skWxqgeas",
  "key2": "3KMj5gMuFKmcnATkfp2WsgcoGJWmqRV8CCy8HsZWAb9Jiy1SgGAcnqkCB1KEVd7VLodkwLaJpGzBR2GkCUhgSiwk",
  "key3": "3PkhR6EwBiVMcye4DN9QsWJYPgeq5wA9ofJ3xsziML3rRHaPT4X7CNs14yC4h8iKPzHfySD5PriSvapVaxCdQffJ",
  "key4": "2L944ume6QRR4imAFzxZSJrBqAwXuuGgkiT3qWoENfefbQYpGzKtuURvMRjceCikMMMJzFp1mJ37m5nRooFTL9Ze",
  "key5": "YqXPv5ASTfq1GgKgwGNGNcrWexasZybo4b3Dv2PaZGzdXoiR5knJJyfApKEry3xbbyvGGpuCfTLGwqEJV7Ng7pX",
  "key6": "3ZBMNGdzFLF8CRjKKR4Qyq5jPfvZmZqVfnd9sLtGmvuYaKwk39DP4SfUkRTaAtH3CoamSL87XKwfc27amAhMZTqh",
  "key7": "C13MBzdNCZ2QHiAtNe696ND6S8H5m9haZmLDNmECfrjoT5Vp3T7FvN2T14MDA9BV5yVbR2YvGiFS2jaHMXNSyAm",
  "key8": "4tjG9VK2uPzFnH4ihQC9UuRUy1FNmfg2NMsH2J77Sn7PdfRB7dFveHtaExJ9p8kYKfpJXDwXcqroddiZk9KkydRR",
  "key9": "5YDo8DsEqf5ijcJYszEdUgH2YZXaR9B2GqdHVJ1yyhx9CyjQSzqn4ZjvWJxQBtPhJFPuXtiBJrimZbCNTypdTtSe",
  "key10": "tPfdeA3kqjf5sPSWU2CYFLGWv1L3ynDM9F6PsbBTop2iSZuCwHQnvEzVSyipzJVbkKwL4KxM2xTvGEt1JwZAJWS",
  "key11": "5T95q6FsZWL45DPqUakz7Tu9PQ8DfXoZezKrFVE8j13RYRBR3e8JQ8Q1cnrYsqmnKC3x9YiuYvFfG15ux1Z4naDx",
  "key12": "5wYSr2BQeBdw22U4UnELv1vZEPyevNrPEojdyQhzwtnUWSJzDFACdSNEJeGhdGjsA66Yw9QU1dE3WsxCxfEnFp5v",
  "key13": "46JD8t7wqedGqWQbWR2pFrEyiZ7DtAGTgBgNvS58tqQCL7DwvA6KSrjVQ6o7Yobfp5n16xzNWYXzfadjSLWxkq5b",
  "key14": "5bi4GwQhyLYwMk27mpdPqgNGGuhxmtfeTDNRschibKZu6NViUnrLK5xKyrdBfHmqwaiSBQWYpAocp3autcTgqkgS",
  "key15": "3t9mBTCDpxpHZCXjMLSss3cAXZevZGXvCbsH7ABP1ERXsr4hjARiLmrMAjYWagSY8CeNiLJ7fdTmSyDDkjtdX9iw",
  "key16": "3Pp7WPX43re32PDNTWTv4kRS5ynNbxaLpSAeCreHmBm3L2hQg23VrA5d5AoXAS7tGCd32jewLkx6shiiD5dPHURK",
  "key17": "5k5HLw1q6whEWsi2UceVNqr89f48c2PwJ2Aux2Ntvpw9ULaTWuFXcnN3ksoYj6Xng7rwYBi471n8njXUyACZ7UoQ",
  "key18": "3LdaJTM2MPvVzp1j5xE38i3RhuxdEvoPHTyLtYsyf2i6BCWepW3mxmDmZ6mYiRhbiKZx9qcPyZ5SiNFHAo6iZB7Y",
  "key19": "4DQXRVepjvrqd1eDcmdBTfRNZ6wPDT4vrUArHDiftT9JBFirw5kJNM1UcfQUTv6WgSwM5BoYmrodFDzw7kEzaM1k",
  "key20": "2Y3U8St8LcjL9aMGcDEiqUxF6NZJoKBiKvbZnmrgq6EkyxTrwmMBow62mkuGVLnfUzezLrq7Gj9rk27zwHHa6uRy",
  "key21": "3QFk8MrKu9KoitFRvqL3jZftUpMhdorhtH5U7qaVF7eRSVT3YiJjKqj3uuDHzQHGJysTYKwzTxTmi4gXyxPe97jf",
  "key22": "YhDz1GqLTZ3tR5Be9MKUKdKVTWzxt3BPUkvCY9ik3wLpfMnnGe3qn5SjV9zdWKPEfCvMsNMKzoGx8yGeGYb3tQm",
  "key23": "SyCBfRmQMDuvgS2R5SSU3YWs8Vx1cV6GrSTy6rw37JxRJPJD3yiRQJPtCLiYr9DaZGBQojeVihHZ87n2qd8qypL",
  "key24": "mECWsaqvtCW1uRhYea5mAVDLx9D75tN5KtJ3BKXbLBpGrrqgnaJTwNNR3t4kLTVbphFPYwxoURjh5e6D7kfYapH",
  "key25": "4qWdMZ6JxFNGCHvebgV6bJ5Ziww7yAzPzDLcgKDbXcW4QNEf3q9Dw1w4UuGpPCEkCT6YaT4xbaBAcMGMwcNPHF17",
  "key26": "2qCwLa9DzVyNiHsmgtuE3yeXPgC539GW7cWnZRyBLzGkzuVbqh3eG192kEr8HCVtLXKRecAK4hJ56vRd2GFVB8bh"
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
