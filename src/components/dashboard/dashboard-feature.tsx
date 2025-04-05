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
    "5uEHPnBh24qSDgu57iqBbuC4oWtmQwS3HJc8ur5d2UJ3VaE63h1tEpz6rHoyPbiRrfVMBDe7A2YywdvbAPvLQuwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22x7ZDcuWDng8FQRhqWoiHozbaiU2JjhxKYy1WqHcmh3cVN2JNen6qwVu4ayqHwSiPBGP2gD4yc8AiasgdEcmUmx",
  "key1": "4YZPDwPKE3CwnQNBxF4nvMkiSTL9RF3ve7nazQwbuWYroXKUdedtNLsJxAdSUmhY9iim94vj8mNuzykFfeLLsgFg",
  "key2": "4ik2NZHtoVUgeJFi99Ve9dZqB3wS6F1Xtoe36XWgZXTFN2yXRvgEvK7LZHfhsv2o6w8n6zF8cMt1ZYvzDnWun8pw",
  "key3": "3a7CF4f9XDj1QrLmYqRXDwzd2SaUqhan3BYw8vSR3M4yf5hchMNd9woUV5g8gRQ58Ck1oyV2d8Uhdu76TQ1tE5k6",
  "key4": "66WYdENxLCch9B31zBFmQ7Lz7hyWGMcibDLWjXHjMmvfvTG9iqmzcYkGkFXwW2xnBcBytrP7PBemSHGA3isKJdcJ",
  "key5": "UZRzcxvH1AV1aPg7wHqSdNqnx2BuG3ymTXGMHJYEEn3XMunEZpNAwY3qFpiSxJS59EYjSBN9VWxK74PeYoBkz7a",
  "key6": "5HoB2trMeipBmCJjYVF72fEEHxpfcTXRisbh8De6oZZqE6n5afVXGKAzFrCMrBQGKpSGY1w3FScQMGNqQ1dJqBCb",
  "key7": "areg9frmzTPHKx9CosqReZsfDCckLaGcBnhaaQAjjtwUayJfi7m6MnaVRmdGkh12BDCEUmBJsJNsjq9P46EuXDd",
  "key8": "2iMm1XD73mRXGFwRz8K44AtDeanF5yAGx69cNbjcEeh95Yf3a7aaVShZZu5K5xxTQXv8HKDrnLRF24zNRvk2ngb9",
  "key9": "3vzPgawe5T3L9N6SV67pErTpmbCTrPKKVT9cXscDpXdZdTqaV1ieqFAYKNjQbgWeVXXrKdzqV1R3UNQmj15c26Qm",
  "key10": "4bkf5ZCooK7zaJB8dhMU2hw2dm1uoRTaE42tTiJzkQdfsDApEV2VWGojNSjqiCTyk8TPLuC68rGXJAQp67wAVCYc",
  "key11": "ZYQzkLesDnA4bHupXEEX5K8MD2k2zYNSnJdgeFdwJHwDbCbnSQvJ1Rpozyn9LZUszv1xYFZkbXpSyfF9HTVoRLa",
  "key12": "365N1dASycRf5cEhrG9QcH1xEdw8MjtapnCmGt5nyJPc9JUED7zcB75smLUKo7S1hzFV7Jsv9bHDAiQYrGgTAfTX",
  "key13": "2FtYgrGw3oRGWGKgnd831mxPLb4TNbqVYHZXiT7zVGWQ6KsvSA23FjwaYEL1rZ4XcuihXYLYyDsLUm63mrEB6Byo",
  "key14": "2MmUuWDB61fz3XE4ESri8QHJUQ77yXUY9eSBoP7ZTc2R1ER9bgkevbSW3JzVPTtwFVvnNDb4U2SFFCBK5iBv7anZ",
  "key15": "5qzosAdc7pw9qU1A5rdWTDt43G4BWrKtkPDJxkkQWzy4v9exSYUikXe5FPYGg9PwGRpm7p3bBn4go44LbhjoMkny",
  "key16": "4S3bLcEGBXbXme4rEasvAHKBE5FeSts8sjvhwFCmYuvkFUn1HPbqeMtqKTSDVchJvkooD8scQvY8fsRPbohCHPS8",
  "key17": "XN9DWzpqAH3CobRq8BLHMCJpu2jCN7BVQ8XLDMoY6hv9JjL2249zatgfDB6TymxDFtGDWnBjcpvtujFU6gwFGui",
  "key18": "4EdpVU2vibJV2x2P7GKXDpN1Bco1Vc2KttzyxXqC82KEU5v9ZYt4jaiYBi3wzSzYyXm8F3QV9hwgZ2tQXQcHW7Mj",
  "key19": "4GLje71jq8H1Wx5UgfCW5dUbcsHai3bD9saUNtjVyiFusQqprgEAs7dfBvtWchP9QCiGXVWaMmooASBzEsNkXbZg",
  "key20": "heQntNfbAVkVPSPqTroUB5p62F7oY1iJJ32rzBH2jAxbYxiWimGNRNMXfu6wWqN9fnA29MtGCKRdTJH7KdyjxPP",
  "key21": "3yZrB7Mgdv7ZhKnXbQUePwxYW1vPUbSKXr756FgxGLv7gEBvb8PUJaKLrmyEDmRuWQymVNETCddxpmLSMknqYpyi",
  "key22": "5FBE8KdP5f8Aa4MJb2Vzv9NTLM2kQVx6Vvkf1uK6MQahdk3n4HphBjF7wkahnARQ4JirDKkLdN3CrJcNTJbXf8is",
  "key23": "3qDNyXYCo9d1PButhsih6QdswkoQeEHD7hGR7EFSUGF8E2R9j42PavRw5geNHKTdkBSwFybBvnnsrr1evazhTHTz",
  "key24": "46QeFV8uDDKPo6oXbFmbxgZs62m235gWYP2jKDfiTF1eS2ofu53LsquFhYiK9pWSy1qAj36xCvBeSRnVJmzG3JSx",
  "key25": "678DkS63i1F1BCWduaiE4XZXGojWtpxp4rNMvRA6Gc7m7rMcGU4QtVtgEgzaGp12kDzcWENsYeU4cMr9gnNzbAGf",
  "key26": "PEtM4KGCdM9r5JW6W8C1w2mK5CApZvj67QVVwD4Caq16E5Rb8WAVZ9Bsc2VcTkrsx7W549TMwN94WwEZ2kyoPdX",
  "key27": "3RhZwwD9B4pgTQU2VqR781YzAWdpN6vwRtECcvLxVqXVS44Uk1wbuMh4Q223zZi3LpbXxtFxu8jmkfgsPkP9cbDn",
  "key28": "4id1tJmi1GMGDp14FLob3eQGTn8Ave9n9VeFfNRphryctXZ9BU4DjCUKPubCQAcXhrMeZ4t6bif5opyjUTyKbrgy",
  "key29": "5WVGCGDReLXDzmwYYfAZQdDUdjCiyNToN15RzHLdETnyQ9AFYsVgYtvBMBoXB4ukX4wybohYGer48p2mRegALpWy",
  "key30": "2SGt44jugcwJArfgSwtqshPfhigWdFeFikh3hX2daA5A75prVXx4DFF7Rv85CtycxQ3vi2overmqmtd2za2Ppchu",
  "key31": "MhasxNk814WRESdwUp6ARWU9151UoyGfLTvn1EGj6TSQ9UTe95WbQLmURHD76mn1U7dg49v6dwixNYND9YoqTgt",
  "key32": "3FBtEMYEuMcnHBqtcauMdZBtZLNas1NZu63n6rREKggSJPntGzscifv5iqg2Dpd8wjuX1P1SsencvXo4XB6SdvPZ",
  "key33": "yTrDcPHMnQ2huwnNA7zvpmz1jopzK9FQYyBtJY6qcNJ5L8kbjzmnrqYH4xcUhCbPR321i3pY753CZ197pKgnwFF",
  "key34": "3vLkBkh7kvvArKKVYxMANjouhFbTRXEK8j6NN6kwSVwbwxTfmaQag1wnojtyV8WsoLs1ADaVGq4Nf9Z8HThwb9VR",
  "key35": "4TXc4f4gHN8kGKL2Eh1AbVFLNFozW3NV7sP3qYDHufSPjThZG32uVfM5ezf7CXruVE5WjaHWqxDvF1d3rSJqodN3",
  "key36": "3zmyYaMU9NX2fUCKYxtVuqYxZRbtT9EpXjEofQJiZcsnsrJMxjpa3umUjdYtt7KHNy4S9uUaNG6CDYWiqQHLcY5Y"
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
