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
    "ZmZLXg2vL9ZX2W5y9ao6VF4N7SVuiV68juVLJLKMRC6LYiKGBwruP8DvWKhjp6SAQBFqRhk1FB1PQ1yfAKteTnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jYUKyuCN3f5w6bdrZpcH3n584jnzsRuUyP4d4RWKHejUdaeEmkiet7ZJudEP6JM54xBKx96stV45EXgC5SVLpnq",
  "key1": "5HoG1Akd3cYAU5Gj1ZnoZrUhLHgVqd9ZijovJyPdzsz4cs3rEFT7KNth5MR7PT6ogDB5ppmXKaTHswV8ZqEXBXxi",
  "key2": "3RKNmFYQ9fyTM8N95coHzxG2kd3G2nckNZMDhcTYXeLTtshSqWGVY1ZhBf1fqhVYhvKBGWzeXxiNenJ7iNGpfeyD",
  "key3": "3bez9NkfEL91gNTSptPYuupywgiSuRa9oYr1rRxLVkDXFv6Gj5Me6Jxu6qpKka5ra7NeEZ5CGqsNJbWFFvQQSiGr",
  "key4": "3p7yG55hmhX2PRvEdqGTB4tZ5KsUxMXJmDwdSJFb1runPgxnY6bneZ9mNTxEjdtUNBV5fWrwzqWchRbSQxj5uWx7",
  "key5": "4dvhWZB4YSqdXTmvvtnEc4WQFQRpycboQsw4xvMqrt9UE7zFpNFcNXhHH1EVwwkivcySvaRCwsPmb15dgzo2kvGt",
  "key6": "32TBRPKCkhxjD3qzSPepFAx4dofc3pFQ7NT7ppWX29ziTnzz19pukMQ1oyM22mUwkrp5aNpSqaxPctThaMqS7z5i",
  "key7": "5kjaEyk27ibfjFTHDboVyDn7V17PFrryBJ8XWgcSPcbXEfm4vKtRDEHSCbfMc8YZajb5BZJxbNsyyQcUupwFmMKk",
  "key8": "67mHKFf77xLQsXNdzCFGsodkAZJJoEQVoaq8QHgUz5ApwGGeBtsyNPKrip1st6qaNLNBKyhAtwQY1TVvSCu34LV5",
  "key9": "3HSg9JPsYrYNSeQDubF244tWx1dNjdtdz2axdPThZ8FLSwoEWsm2b5MpWYd3xi5ocuf2hH6VrHcfEDYK6w4A6d7y",
  "key10": "463kn7SGbG6hkf8BFGCXzTgSm9HFFzBbzPMnEFiGoP7g2ScBjkWd3AqFyzA7Ao27F3AtqFWmiuyWBsRoU6B4qKUn",
  "key11": "2VVtd4u68aWQRrzfwJdWpS4h2SBvQJBtQdmkYSsAiUhE6S1qchwBMip7Fx9cXBQTe2jJFvq5TEwQy2kZTyFi3HBc",
  "key12": "22KCBYpHvroycwyGGq6yeALBYRu3fxsumzkCsUZ9zPsCxVMfavuazostyyqxshJC1cyuMvxve2gKVLXz2qCExD42",
  "key13": "64See5CV6udc7rmVRgiirbBy3VYHS92w41ysjajWjgDVfGNq7eMaznC5edfP88VTKL8qXH44G5Xi4443R8Hns9Z3",
  "key14": "WhpppE3R1ahgxu1kSTRHZTGSqJGrKenCe2NbyEGPnABDMckbH2UsTiNkxgJFSmfULErwXpcFrE8nMKN11nHLgHe",
  "key15": "3Pti4aZLHkUG8XfjARpP9bYZ4VXrA6H9Rv6mxsVpNk9ArqAVWsxoed3QJQ1GKQRg1rUDCP9af2cSMrEQGFH4bnwW",
  "key16": "54giCV4jpdXMN4wv8QtKBFPf3YWHZQrspiBFE88wNickxtrkZTg2GE5LrPKCxu7kNk9wi4su6ETx5bSt6XX3Rsgf",
  "key17": "2GRe1SWQ324b1AEkKhZiDgincrfDGSjMR4EGFWs8HhEZcGVd6kY62fp7NnHcYNK4mN5psLynbp7FY1MPBDzT9kZi",
  "key18": "jc5vDrG8SY82XduZqh2rX6mmXcH9KyunAZ5t45jsHoiaBdDppNSpbE5Z66XmqAF3528TJJNurCXwfdAWTXwTXCJ",
  "key19": "TjXxqdfRF7ayYSVXpcBVeau5UERtpMvSxPtA7vLJpcPiUem9v3dX8pceMiV9DGRLqSBUunmeeANEbbpEKLDpuEC",
  "key20": "gwETc6c9dcgWGfAheeL8zCWtCohUz4UJDKcFqFfffGHJs9DbdgBbyHV3DmF5FsvwEgH4hSyE4JL3jrMj8rCPSCz",
  "key21": "4kYWJpRk4XYw1FhsDpNn3yF2RbicCpQ2sg6wJH9hGT6dRYgNgTKGv5CRsiwrt5ewhtfvn2yiH5QnRJQMMqEfvFS1",
  "key22": "8hgz3DPemW18skimhe8orxxMpnpy4oP92xCM8AkqWzdisdNXn7ZbqpN1QqyXzffauH8JoG2bAr87YLer5A1ornZ",
  "key23": "3jN9G96Qq49QjMHmxq3K5jeZRbuninU5eRmqxAqFdZbLey8VPPTmLNz9PcRVX1HuccK2jRJHc3FQwxCKUZ5s53Ex",
  "key24": "3JXUnhuamn7D8RD1ZtceGiEVrE574uPdq714de8TM1orvp5QPchop4PM1i6NE9tchnKfeghXXeb6HtdsRBjNPrp",
  "key25": "nRP8FRRxPfNrmdUYbvdFVcGohnxzmvpYwH5wMuNU97zYYEHCQmHugdeyVPA5FN6EFWuXrWra5JXJExnGeC3quBu",
  "key26": "58YZaxNyvY3tzNGzSqYgmfEhcyND5sYNHDRPP9Q1Vvxze48Peo6tFkUMPtKJKP7koazywogyW1fySvGfDAskTV6z",
  "key27": "4LRDJiaGdfipAXumD5FVpt2Zwy6d1WUpjBQ5hrd9k6EVojxSDDrbq5XSDk6XLafZ1mNUNVcx7MBBmAjuLCPgZfhz",
  "key28": "2eZZJftUd2XP1UEVYVCJ7PxzcWoCF9sVsceDcc2s2V4NHETcZtZfeoUFgVWFT6Wczwta32z4YY9hFs5mCoZPeFXm",
  "key29": "by5ewmSB3K2FnyZYdZzQct9gYcanqXF1xP3Jk7mQY9VRnhnEGF17Upmca3wJAUKE1R7ZYELRRXgrw4JGW8ZwWB6",
  "key30": "4KkaB1SWAWzKLnbvJ91fqhypi27JauYxBaa3m2v1eRk4g3EDwn6NbnyUHf3eaGUJ1b4iGzmrhfYpz8LGBu6L6VKm",
  "key31": "61DaoZznDR4qzYWQpxdJJ7CcnPNYWLthDkxa6o2Y78gRetV76f5wt9xLnPwwkJEH82iXrYcLneap1zR6YRuHyxMm",
  "key32": "5igxsnxeLksQZPJj69Ys9i6PiRuk6RpjoYvRhvwLcQgDent6YFn1zxnrFTptVb4j1bkLszs6UYUEYRFaGjBy8nK2",
  "key33": "5q5TG1CdMHhtLH84vGvYzD8HtUJyU18pguVEGrkbtMCHi5GYUg7emadJWtDMTD5LL6q1rHrWem1ApvaR7RruVhPJ",
  "key34": "55xqrnhYU2zqPsjx3j4T98YjBNL79baJ9ozUeLRfazeQsRaQvA51zwZ3pS26p9V212LPPgDVKZwgFWu3TZYRrQ83",
  "key35": "3THRjgJb1wpmdFEUVXN6WUa8XWQtYL8i5jPsSdh55j6oTSCKN5G76Y2XDfYNoidyzdMMMdUg8Nhy2b7xe8mrXmZ6",
  "key36": "4uA219cLEzJ24WJBy7zQkytFrskFDVTsvmCw6KNQT2p4en2bvMFSgAuTfcJgVT2MLxByRFsgQ3sFRJyZ4L19UaFP",
  "key37": "64rGex2R8RGfHNJWSqXTdwC2v5YymkSko6ShXZjk5L7FnzmWg4g2ydMTk9ZR4KWab9XiN4sYMtbNQcepzWUzQMzT",
  "key38": "GMd8wZWXQvfCo4UPjufgNWKjQFZ7cTJq7MW8AFndwfRGLgSKpYvQbfpogo5XVuC5EWKv3ZoM7wK9o4yNGWpiUAv",
  "key39": "5Qiak2NQSeAeEsYUmof7nV8MGDsNMuYui8samxy2kmTPnnabeSef1fwUvGhtvrZKDFViMjMqvfnRQat66xwqHbYG",
  "key40": "3MK5uLk1mDZKQYCFzSEjnFtfWgPqxNDme45AWfpFvUmtzuNaTQDjFjH1YZZSV1WFCUAPCGQYyV5PJAjhnxZ3Vrea",
  "key41": "nDpnAGRvzp5Rb7aLD4KhxaT3F6ShdvQVC8t9bEcjAhTYmYHDjR4VjbaqWjYwoNVWTZmVd2cLFqRC4GszLLkCfNA",
  "key42": "mQsEjjEE6wuRjMYEdnudRK2QxgSnjSjSztZ6ADaPoU7vSWqVsc2TX9TERsUVYZ52TsFj3ZafBL9YBYGC5GhLLzV"
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
