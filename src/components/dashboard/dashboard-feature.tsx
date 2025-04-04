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
    "26DFUZftPL8bQ6ftnEnEqBBf5GxL5YR6pyXjF9JHhWxzqkrejmeqB3gZpaUAjysxMh5gpcBq6WkRkvivkh4JSwJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9XPAcpSBqpnb6FSwS8gLYrE7JYFbZ6kuP33nsaeX1dh8wHqT3BHmhUgKSXinfo25Tz7Sdp16y9SzLEJP4anAJ5B",
  "key1": "2UjrwaUG3fPDFqUiwMhbHkRNsGKeZ9ZdVTdBo7cNPAYNGhnvkUt6aRHs85PykdirKpvU68XkW1tkmChCtByHSLUK",
  "key2": "TYm7P2BVwHNvpcx4196txxjytu1FTBs76eGUwWW1uNQRiGX7rgiEzr9C1nSpgBS9enwEvaso9JaUZY4Ckm3YMrR",
  "key3": "5LRxu6Asn9nrg8DBCpjdRZS6NGAc3WbX1TpV8UEtzX4igW3KRXRb7Vh34U5Fmqqhrozk57FcRn9vgX8cE7iCtn1W",
  "key4": "5x4AySrdngqe2Xmwk9XNRoCewMzoRCzz732reydrnMG4FeaerHPXLCTyv4s3hjpGtvto6cmJgfeLtzFPGFdY2QVt",
  "key5": "5RxJoAZDjrk5iuhFQurngkhG3zbjSDzTenZsKTTBc2VhfyP24PvCf6jy5aeT1w6wCpDmJtzmTGtXbhTMHQecYJm5",
  "key6": "3oDpubriKWnLhUiqk57UzSqJnsypCaWkQsWZ6TZqVYNcUQgZFe7VTMGP1uqNteLsv5pYStUk5NgYqwU8kwoW6cmS",
  "key7": "3MfeerMeoCYNgD12kpZZ3CqJKF6Q9CossQDdkHogVZL45TgjqRFeUbhrj9jMkhUok6kjJYX4rgyqvFgEr6CNtbAy",
  "key8": "2NQ47hCnWpMu1mLBHGb3LF8fp3ZsohSffhm7oYycHKka4CjJCsWvCDZB3h6dQF7JkNis9HBaeSAXuRsw5JqqM5PG",
  "key9": "FJQg5r7Ns89hhMXu62XiZfi2RXVrJWcpgkGw9bDUGZKm9vhwp4ZSTzBMkWQ1dU1odCkTta1rymVmkXZqCCV5ubx",
  "key10": "2dtaAL3vjVXB6CW3FDDB3bJppYAaZKeXyCRQY4BjpABJXgeK7a2gEqC7MjphhYqLtrdcwN9JBJCHwmadcFNaBETS",
  "key11": "vJjh7hW6JA4nLqHwBKaimBgUYLTh4QYigaBDsHP5tbrPh5j6fGiJhQ1KNhm83fW9f7YcDxV9z71Vxuu6fGnba1R",
  "key12": "21DYfFkNw2xGEBxzgru5gAA7iQgXzKMCxmwpE858QrYggDUaevD62uAGcLMqERugaik2Go7cwB93HxbH5MfvCJfq",
  "key13": "5wKzTfxscaKkpGpqnKbPJWRuAU1NKQaFqZPX1XQZR4zRA1NUPN9gZ9uM1UdmRCgXXihx472fhXzp3FEBUHejCZ68",
  "key14": "2LgHsF8oBHNHnS4jJuNcX5CVTfeBbXLDQFB6TqBmqUbEYsXUmyurFvUdF8z5hE8wKsf7a1XpnwvA6b9WjgqELe9n",
  "key15": "nNxvTRu3aKdxEsZvisZT5kYYCSbDSmkfyaGBX5Bo9goWBLkNsKwhRpw4XjLi8ntW5NBipJab62XAHMt44DfCDCa",
  "key16": "2qiuFSiCjiyXkV2EMQpVN4EkRSaQQoKRNUREPfpxZGUGLBgHEPnRnQqtDjQb1gpgEcKVeYkppj5wqKHGNHag5cE5",
  "key17": "7FhLZBQDDW7kFA4uiAm4wLp1Bi68FZndfmFDPP5MMDRuvqU5NkTaUXS6TREFY6WRYPkmZT2ARUyXmtTxxKp4c9a",
  "key18": "5DP2Jebu6965YuqiY1G1ZdQPHdnHp3uxVX7pKpkatoVqSM5K1Un9EakUy44s3azLrRmxDQUvXiSJ92a9Sp6R1woa",
  "key19": "42ehn9qfYUHpwZk7uBikf1S8G2fUaFCp1xGVqveuWLHoCbPabwVru3dPB9UrkmwGpPzbDR2ua7bxro8wZwZpaoJi",
  "key20": "2jjuvAeM5bnszpHbeJoPoZrv3rqaMRrmpeJYEWENE1cDkFdSvPqCRfiV4owC29WXsnMnwYZ7dWhm5bcffQArnm61",
  "key21": "23VYRac8tbu8BcYEdfCLw8Kombvf5NNNN17VCy6EnAWWew87FnLmdHVShscNC4tJD3jBXDPEzmLcJ5piRgE2rwqe",
  "key22": "4UjgLWXfS34CVmPr3QSVuxxtaSpYN7u7acQ2B4aVDESspcCBMvu5MVi5cqxv2xogme9LmSfXjPrf2FMbFxzodzcL",
  "key23": "28qyitN9wpzAcvTv8joNxYPzQmpLQ2BhivZjbUiWYa4r7Jh7fGCKKXhcBU4nGcqKrUcVzCRamxn4omvDhBgspdNA",
  "key24": "R1r7nvK5xu1YQrLvrfq5tjCe2is3ipZmMpRbSjsX6xPmUW2GxL3SvEfrBLeJcKW2pidHtsLcf8bQJsbrYbguM3B",
  "key25": "5iYTP85uTg71dc87z1ynxhTMX6Ymmo3fknJXWiW6WSisJZCFksVPMxYTzHnRNEHHrAXD6SQbJ2rsG97Sj3LysRqt",
  "key26": "56RBBkg8qhyV4w2Weea5rJPByZiiaefukv9bPLmSUXiJ7bM24UwFGH54iCwcBpEN6jVZFSDr4zZCkiDFxixXxDm4",
  "key27": "3vpoGN1daPWfDjm7xA2i2HbH7Bkyh1xqnZ6maRRArDFiLjspNYmUETa14PGJ3xarn8v8HDDgpGFBpAS86NMZGDY9",
  "key28": "ouwaTaC2aQP1cKwjymaukPMg9bgyDnZk5d4X5yypFxjwkmWPiANCaeCm4p8r9HcdrALM3rcGWRGRR8S9jRoGfmR",
  "key29": "dc93DFqHwVLVAyDb1r7KCMt6AexVA4ommmNwMh15oKdP3E6v3WWZuJYdis315dGYq6v4VRVE8trFXXGrGwV7iFG",
  "key30": "6iJVFHYNQBmSahACDCHbEmQDmRPYxYL5QMLRb2hPXg3jSXQ7vkSY9eAZfEouUb3CeinW2AMaBxxSWBCXPgL7uUs",
  "key31": "jWkHtNeTXJMsGRswjiLLxf58xqoofHVQ1MQcPVCNH9kKUTQFVPZ7ecq3cLRgAWKExiKW8arnjE3hrfBeTwUBmS4",
  "key32": "346rpd42scckEfTnXJ7JxZ2TQ7kY5WV5VnGx7sq6m8BBkJDhVgoZL2hGzrrdb5X99mrELMXYKvymnkt8KogEmFCB",
  "key33": "kVKdzACtNnWi2ADjCMyoGxGK39C3WAmFH1BYEiCxkMfQhYft9qfGF9sZKDFV8ARbwFXEqQnbYKM2aTG7mLVo2E6",
  "key34": "3BV54Tp11rSLACqpdEKAhgrNxh1wvctt17ECa12k34fzjm75ANthXNuqLQzfTc5jrx1UuLXDwR5eGyidenHKAABk",
  "key35": "2r5mt9ijTk7va8ozrp7ez3c3ycmTkrwGCeTchjELQK4BY9ksn732dZrD3XdMs9QscT99ufodjxRKN6vVz2YMXHMQ",
  "key36": "XbZXw7o5s7ots46YyQUyDoBhxAXMrFC4hVEXFsAv9E7bKRZ63SXjTVwNRYAsuBRwjcmicUjfqQ5Ty3kyRyCF4Tx",
  "key37": "4xgWWg6M8d4p9nSR9wPaKYss5hFkCrxbETXnZ2XWb4y4tfL6ib3uyCDujcB61keqYMwojEkhU2GCMyTwMp9PpSHc",
  "key38": "3UAWEWhrPR1MCL1kUw8ujeZboKT95CLwqZMJxxbod3FYoo6FEV3CP8k999NEavQga88nZT3gsnk4KH3eD9JCTaRq",
  "key39": "2xgtTmSWWMitZ7SiYBZkJ9hfF2ZHBsodLimAeywrPSmCPp6fPbibmycBQ2nyfays83MBgMgzN3GHSNNNHSubCeUS",
  "key40": "4BnzjjFBktzSbccycng8HqCc7yEL3HJB42Pr36DH12M3Bjyv5a3anfNdZjkWTqk4yAfVwptBZgSnDXqiDxWraPX1",
  "key41": "5tkFhBzTegeqWjr1nahzo5FKsmdYXKLgi3ATcfpygFGFVJgsiFMkhDr8auXPC3ZudeBS2yStvVi3QjTJ9FNQMjVd",
  "key42": "2hJBp6tydQY8wPdgvUcsuFYNcnEwHKcVvwuwmYr8NG3XZ7HMD3PkQwXjobqhXs215dS6jQKXBKFPBEbEf2zTftPj",
  "key43": "27k5FNEmQQ5xyABuf3YUrCcTHQW3RJrmXFuQj71dFdFTnJj5tkK11ocpLBoGvXsdNryM7g2ARJdWvDDHiktE2zLe",
  "key44": "2VmHqLg8rWid49TeaUqL7xTg7E5sSnuNZqtBesY68GumJWb7SaJUZqTgHGhHyPAeGB5p3rXg1P9D4cLUDSaohT9B",
  "key45": "pJtjnvi2pJfooHJL644gbW1ceavdAK93SfYLqXucHGSDsmcupvdUzyCiPBP2sN3Lcjp5BoC2CSE5ZYZfRDzDatj",
  "key46": "39RY4L9jD18yjbLvoSoPZaCmDJRqjrKDNwCw9o5AUW2BcKnxvu4MfNjGkCaEiv1LDhLuW3x9wAD2jrs6aWH1KpBC",
  "key47": "3RP1krrh3X4ZzmBBrb1yWz6TPLdHHUYYfurPkjtj3gyWc8G81tNhyf4f5e82ybAQgenAD6Wxek6eNBLiDmMSppUt",
  "key48": "5T1D57wfPxqdec9d4bWwT96zN9ZjYeu7cjejyCNCspkcxQVBzp4x41WZG9pRTSVW8pwzpDxUcE5saSXuxzxxv7km"
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
