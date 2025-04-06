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
    "2hCwZ21GB1Rceyfe2pnmaFR3NdxhgzKP3ihGGctyJ3QGiXwc315X52JiCVguUDZEXSFJDyV2zvV5ZxX4a8k12Wtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wmBCrTqG6tfM7agQp37mJR6cfh5V34pzJADFyQzKPUPt1GfDjrsZJjRAy5n8gukJVmXtcNuihuGEmr2i9JvkhuD",
  "key1": "FhqDNyWY46fuQ68oTPtT8PdKw1fuAVtXf1Cgr61MmaBRbCRNJDGeaQTrDvtjhEsMn9onyQZ9wJJr6k3iQqZE3Zf",
  "key2": "2YeMXg7pvQTG2e7Cy7qmaB2pVcGsRwckVLM4pymzhJ9un6nv5NJM8nTJz6rCJFzwJXGa868P7mtbrHgmZUWrVR9Y",
  "key3": "54WqVHBCmZ9TscvSQTcaqUuinZveDh2uqDtyuoisbKdZxfijDiexxFANkzTVXyuuXjxpxddcG52PpfYHwfURiTvo",
  "key4": "4zDD8NkMXxCGCTqknve5YKg4r2TLmAjiQ181xBhraNaykeADm5Xrp5YMg3rfPkGA5PpLavh6LnLBwSBu7W86Ddbp",
  "key5": "5s6ADX5j9PratiJ2J1vTL4KqfCEXtrtCQmdhTF2nGbuZSUy6o8uuLnC7HBpUxmWMu83beGDTaDs5ULoFf4egbbQb",
  "key6": "5nr8Ho65rRrxp3apFkssnjteWxoFuuSQvoDzgjEvjQhE1AKA7sb3UXbMjnNyrkKxa7d4b5xA6GzXGDG6Mifw1qdt",
  "key7": "4SKY7GGC9YSM3S4UBaWJf1V47CymdXFxCHswhXhKCeem651RRwZmyRR5swTkh5rrnwNtkbgGTwviFXmn82eZX5Y6",
  "key8": "3YTCPnpdhdWX1iaWEsb7BhYMMjGnVEzexTGdhuCC5hjjPA5K1uQfC7cUrttZrTSrzB66G6BC1XdifBrBnKoMkcGS",
  "key9": "126312MoZm75sHAM5izyUwNdSTUtt8Gd4W8ny1HUdLBk2owp7GbdZwFrDUMzdb552HTGpXGiJdtowKgouMP3J5k6",
  "key10": "4FBmAQPeZ8z6kUGgpenpdY91A3zfzPrEkQ2XJ82q4eF53YqEu39yra3hkAiKV98CYUyMfUXoMAGkvewxqhYQe2zR",
  "key11": "1PkUotorUpEPzpgnfxSu2zkBod3fM3PiEtNq5fNGmwopspFZqMAWhfJQxDM7bYya32oYRKpXkmCCYeonavPZyRy",
  "key12": "3rP2sAp4yWMPFxLHtsZMFQyb19NbosZWbc1rDJqZ2ZivXkoW4e2k9FBVguqcH5a11gyJRLTYECcmitJ8Ce6z7Guz",
  "key13": "3J7eBbgpBdph5AJs7shz7JWZhNpaSpMRvAnG8sykSaYnDu6SGUwWEVNttSfmmjSRphnURWGo5u6TmJjp8xo5R16f",
  "key14": "5pGcTjHE1gZy7K9m8zyRZoehhePBxbEbZSGzuXUXpdKK2C7wm1AdYuTp6RzUyntEV6igoTKmqCVucUe3WWGXkhez",
  "key15": "2gt5Ym1zCpLurdXws647FZFrRRTR6DZVPNoREuESGhAenRLJo3tjs8eM26o4hEMDPHZRgxjwJfe4y2skXxXGkcc1",
  "key16": "5yTqSjVCcQZB5ZSQUpKFrfWsTAssMrkWiPJz2nMxGNGs8US4oZMFsTmLUz7oQoNdvbNeJDPhXCaDq6cGV2QzTyzR",
  "key17": "3UuqeyN9uEvWejiikhJ3gD93dZKq36jGJk6qJXqrsHxZTUwqBzaZeBnsNqxj3RUeJjVR8QEhqwErt2iR9fqGCmJf",
  "key18": "4y9ycznV3mcsXU4x2KVPmd2D2ekKMyCEZdyoDCa2ysz5MLZzHUFWhp6sExaBdawRKxggimSRvqc4NnCtzDhuPhm",
  "key19": "3wZZkYmBQVb9FuEMkt9tcd5BrUh3BU9rZzbDJPSm16zC4T2R49NFtDmfgMzGupShZie5XsCVZwCJ2mXktyrYuTWG",
  "key20": "3pPKUvkPReXw7JrdQS4SHHHwFmVbVXZHMyamUMVzxE6SXguzVHH3YYrQniY7BLGrwvHvqHWLhCUoUiwLU1T2NuCy",
  "key21": "SSgiD8h9SMwi2gjaHZhqYaYau4aSxTv2qRhsuDwW9xv6PEJvNbXHJ2WX4m7zQZhRNGicpM37KXUNarv2ZeJhNdY",
  "key22": "3UyXj87MUpkSYDrvkt9hQMN16jM2MDCQ2Jno8LdH9zKd8RNA4LxdstiqzkzfFjEF4VAT6dfNGkiJB1Q1oMsk4wAc",
  "key23": "iUTwFPugE1dzgUX4g2p9ZYsnKDpxZjcuGwyP3SZ35KL2Vn7VmrFmjrjim9aQJRmEbQ6E9qShPAqYg7oNKTixNnP",
  "key24": "4G2iBaSV5uX9dsJC3RLoudMqncj5iaSZkXXrZwzHCeyBvMw1PLqk1wtoXs3bzTRmfzVtcPCikVNLQApdTMVCEpBU",
  "key25": "3quJuz2rLbbvuhrS1YgBprnfHyJgsRkuHTYFBXTuazg1QCYtVFdnVKwxwvgeKBekrVr5RtesWChv593CUHUHxU3o",
  "key26": "2HimaQbhnpeZVpudjtQ34kxCs9HtFcz5jAMWy9aVqC4dnEnqSgiGDvqkvSXMSppRx2QyUnPqYqCf3DqkvMqTZSZi",
  "key27": "383KFkw7pcqSSdcvRztn62X55LvFGd1Urmw7qHhXZeMbyMSRqJLq2N5Y6qqDVxW75QMDwnNQMm4tQn7HBY2NHXEA",
  "key28": "2WTzttorsBzgbdha2yPRv4pCrAvvXgpEBK5CZyAspipThkRSQQq5o98ZkcUZ7QynX9tYR4egkWnbCCgwqHja3HVD",
  "key29": "43e842ET2XrSVwqGz8JVs3cnvYGWbjh81psgheHmPYV7mdiFcVxYh8WjLnbQvnmKA9KtDBQacV765SVdNhhP3G2b",
  "key30": "VV4LAt3JnTRrZSHLDfQWb5cTwdtb7Vj2Ww1Gs8iaJGWCQJEq4aoxEjsnZ3DxPMbz9E5MHFXsKPTFRhvdmnSokJ9",
  "key31": "5qJm1nTqK8967Rxahme1bhKeBbGC5YMRUqQ5Ra4TMXiMNHx3P1V8ptjo41YX7xp46gjyXuncKBKuy425rg6se69C",
  "key32": "57EybKzNkwYku1f1usmnJa99qaMipVcW9vTj77mEMMc5Eex9cCWgqfpUxpWn3ruFcPDYnMQZQ5iaxDfGKabhkbNM",
  "key33": "2PM71u43yJHe67qAfrhgJKJiapX75i6HQw3PBxTmepthu75GjXMRy5CXMVkdNwnsANaZZov9o11runntmgEkwzsx",
  "key34": "5xBxnMSwUSJ9inC57jfdVCm6oWk8fFtMskdGZxSx9B6EWjwB1mSVGzjLor2R1Zbt4KCkJPSe4nLRTPrCGgLsK4Up",
  "key35": "2ZRjjAGyvSxT8PFEejfRudnDMCTR8QukvcXaLdqhVSQfzXCWfLQ5Nq3CbGsAehkrShAjuJtt4pFXptyRxEkw9uk9",
  "key36": "42bhjyznoq67gtEyRAUu9wgqYFEHZ6uUDWJ4KEJCumR74BRxEr3ihZbnCVnxbSmBcASnGAN3UUATXiFa5eqQ6Zit"
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
