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
    "5sARgJ9xntCng18wiaC5kX2KmUe5EovdiCG39LbdxrSXXc4v2A5id2WMBqBiu2ihqZkmCb4uZd49dJJ7BgipWch5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVLHA1SQagAdsz3GCSbE8w7Gt3tjfM6dyvQQhEhPEnkLdzCaiVVNU9AKrJrR5b1ynnT8rPThkQEvVQxcC1db7m7",
  "key1": "23XAvMF4sSxkebraV3ZdRnCrWrcGk7aLB3LTaDj4gmMvYoTvM7apfFfiRJRCFzoS2gnCiLKsCrm3LRu8ki2JMWPg",
  "key2": "4oXw21hiVBKg5E88D9r8H4qfp1mgxbvSEdcEk6vrxWdSDitj3S5gd8NPd9d6U3otnzd3G4MCsBxJwC3ZD7mamqfJ",
  "key3": "2qesdTf5mDayWNUvnE1ALU9ed6ioF525KXJza5PnjfC1x8hyLeN5CHzhrovGLX8jpV3RgvshZ7K9FKpyhGeVRcz9",
  "key4": "5c3VU8v5KwhVVgoHdDoMNiv72rKoxkTFVJzbutyAiCGwsmBNm24Gezjgd5a8nMaTfw5u1GdY7mSYYNx2mss4Lccw",
  "key5": "5jqSA6LZoEdimxa1PWbj6hYvkeyTZ3r4wiWHnSP3ijTSuNBTZpqnDCV4VaKyDHuqZUAv4ns1WyUfcN5pDoQs6frL",
  "key6": "ASjjBsPvB3o6cybFVeFBHjP3RSuEiHwc3gyGXTCRgrJoNyjs12dk22xqry9aLFaRNNxfnbndVsiAp6LHR679RGo",
  "key7": "JVcSbdj3VtoAWYMkzzgXBgvTYtyFn2cPGSSmiUt5d473KxRL6Un784EWweEq5ZDGPena25tqwMfG96YcDkvRQ5y",
  "key8": "3RsbLRxrZvJsgAhfcAgFzqGwoycUWkj26UL6Y7XcDju8G14uvr96yJjvRaprAcbVvEocy7pj2iyYHQxQ8KkwbYN5",
  "key9": "4uKuQjhGu2kJrh1Mi4z2GH7g9DSUqD18Z7RCnPYTJkXR5kUaCAPd6smyKhzmrCavEPm1JzdGnAR1SYWyUfDtLJ5R",
  "key10": "55hYxJWUFBf3ui6ZWPCofpZs4K7fiYvjMp5g6VFgd3iQ35c1hjEViHEouqWMhn8GX8GAfJ2qMUn25aLZzNYRXXUP",
  "key11": "3JT6RDW9RGTRw9DFyF6WHNSDseqg5Tav65REGiYauvnp9CaFj5tXffvJ38atEdo1EYtSFBG6FMXM3omA7qnhx16s",
  "key12": "2htUMN4yo8eANPdU5oxJ8CDPwr7KLGdpS8VKahXY7Hzy7Zjdy62zjWNmpJ7R1Pm3RbBT7HtKQUpSFPKx63tuDnwv",
  "key13": "5xUfUXdgH6TeXGTMiTxrbaP8DY6TsGBf6oxnf9penc3V3jtWejkRi8hR3rBmHrCLmDvVWMDB9scP4qsExRjwxbLN",
  "key14": "4Fh6VvVjGH3aT2CEMdm8DYCNwgYeRuKFmroGQMicu2ddqYWL9TBPai39Msy8TFjSjDLioKgjd6j3yaD1hok3JWAw",
  "key15": "2sArbMwBY5jj1L7GqSHHsTDxmRnsLfBUsc988P7CRB1UzWMBJnRGuEQGFkuvhhhbkWR7hAisYfGZbodPofPw6oz2",
  "key16": "GnSgawQmTPEdYxnB2kTMPV8XKDfwVwALzsJqJ6PWVJyKT1WUBc52NMtxPWqo66XVkTbY9tcM2Q9jCWqTsLkF1fj",
  "key17": "HkAZoWCE6RsNM84wvXMVVActRajo4SVKGtFCCpzNbYdNVQhenK4nY4DSK9fpe8vrwFUYWgMQHwby8nufihfFHo6",
  "key18": "2ibs2pXuBfGg5NtLYRjB5EW1Zhcbm4ccV1mv9HhR8hjB5aU5FEMxfVG5aYMqquA5ZZEKftbWsyTY6i3rS7oX8QZK",
  "key19": "5hP3aF1DN2ifmWj5QS999rwD94Qb5fg39NiP796pq8TNRWSiLX4ZMePTwQEdNtqpMR7pjBJsv93a8MPe2z9GWLGi",
  "key20": "5JH6ig3CxKuVtG6RRi4utfngK96cGLD5oZNrgk7sbZSNf8axAZFZahXz8KktRuoG6syLY55m6JySK2JmS2BNj5oA",
  "key21": "4fhH2r6tjcfL4Pc8ftZJRCKdiwLM5qiZAAtSXUhufxGakch9wK8XPYeTpmTvsm3EEoRxKSZU8op4wmiPaSQpAacp",
  "key22": "498S9NvBku14m2uVtcfbopFXWzHmc89nxeUUyGEjW73rWTBLzb6jCxF45n6HDCfRGnDeJjNimZRRgUivk4xGmjAu",
  "key23": "32Z1SNNkCwB4ewDMj4rzdGRFaTDy7GmqMbWyPfdtPNZcZMEzL4rEmocLk7gPGjfZqF1rQqzrbMZUFryJFSAn8eEa",
  "key24": "5epfN63jXkFxGA1bWGW2QiKDLB5YWnr4iUJysjUJCEZBfPPEam8qdfViFrnoqSFNgxJr1r8YQ4Pa89CWHnLnyKkG",
  "key25": "3rEitYB4poaYvZXMV1PbDL2fJF3ZbKDBUq9sWERBTGVoaPkhUGvZoAFAfd9X2QMuejRBrH8MzLYNeme3Zj8EWqE2",
  "key26": "3N1MDRAaxRW34ZdhC1LKjArPtHCf73QHpxUqCG7QT64PdRY9KRaDzpZc1sGF8yLLRaJCZY4Vj6yH92KGcWMwkQSm",
  "key27": "5NhppPkwLd88pcCfMeofkK54tyRQYLPvNvVHD3qkgptoQLN1ootBFdyS7AkjYPWy1Gq3RaecocCeqyVqC6sioKN1",
  "key28": "5K9U89PKuzVuKYfzQYPZ82ZUjeUH5LQuW9CD8QVJftyBQnZwjyoLG85mKcvbFE2k6ucBbGTXAzaA6kbSE2pSZf2o",
  "key29": "5iXW8X8VwcTyFE13uQGMZVWAcWbnmRxgZXGkMjB1bdibWCZKF4Y7GZ6k1X6hgkhAv8ahgS6r79vtYCQdLC12iY5c",
  "key30": "4wpYPvmqSq4pFdnrHRUm3UsBJamkeu13QcMdj1JV6ADR3RKvgVNcdpDA9h6oQPPdQY7i9BMV8iY4UNrWT3GnESF",
  "key31": "2ecsZ5B6sLezDtKtWJg1nSvrcvqMp2q2MQddxPubLqyjnG9YZoyumbiYezjUvnBVmQg48GvgWoCYBHZWNfcewZpf",
  "key32": "4PsqTfbB5t6HzvWuki3SRgnknPWcJCpPDJv1CYnXWfAUn9xwyr9Gb4Knx5o5R2Bpoop4C7AYCjw47kYUbnHAxZRD",
  "key33": "67Ga4GEkqsHMLsKcGBJVCnPufbvTuBPEeWBEZi19vaHgCZ6YgZkBkMRrf9u7N49DJzHNuLZEsySbSF3jRveXczVE",
  "key34": "2UPjH54EizCX44so6bsggFvFSUWGeoJoLtKeX5ZuAU3fuyCBLiuAbLMg8u8BsFABUvt5ZmVcybNwnza3JSYo7fRF",
  "key35": "4nY6cHAX2LDXTebpXYkePEBRnmcNS2o5xnekwgr7dic4yWaqMVXsHtdUeP9qu9uZ2XAVSrvFSmtc8Y8uYm3YjSJT"
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
