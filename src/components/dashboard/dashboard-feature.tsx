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
    "2UBDC78UznrnnbYECsL1cnPV72y9bpszinsUBmVZzQsPTa24wJDiydCsUZPdJauntoP8MZ4AnQNnsoWUqmyP48NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46p3Uv5UXqbkPvLPMiB6h6zxmG9QJKKfwtRuPRX2rLrgRutfxMNmCa4ciZhZzHfmoBmzvf7EaqSNAhH3SaLPArLR",
  "key1": "NHRzMxPNtkkK8vrnQcu6TkZP81J8av1KNvAxqw3gPXaP6Nmee8mQUvnN2jT9jc4PAje8WNXv51C7PAoV3H6EuzT",
  "key2": "2GCubuEdLLLaesf3HYFuY8XkfmkAswjnwwRv12REGN7ZMeFQUZXTM89VMvYwoXMmk9vayGZfqEsqvn2kUkQ2WLAY",
  "key3": "4J36S19GHcdzNNAZyotm8Vb37o5cePMM4RoSCX5eNqU9NxC3SuYesQBhZNbFhgUkisHmCbsz2rKTyNHoYkjWJtJr",
  "key4": "5WSNWhrXCrEBfyeMZhdEmYKTz3hDc9gQArk4fGTGYc8Pvb3RVG9ZKXncmHt5azpMrHnrFXHHwmR3RAgoq5cTWPqk",
  "key5": "4E1w9GS4KJvhbMBTumGBZGzFwAo2x98tXFcMrqgMce6VYbeCjhBSWo7VvMYjyc5MSWSKBx1ggSSkxqzeg91BgUrH",
  "key6": "2f4KWcLxyyJV3EjmtRmV2vkAueNcqBjQarHLxmRmD51K4hP4E7MNEhm9bjrxfJV5veiXtrMn43EupDfsHgRFW36M",
  "key7": "2cshammWZvrF3pP7T1DJE5D2MxMu1Kq1BkBhKzCNjqzSquToq5hVJnRo7CVmj3NwKgvSpGU1pXgroWLAGcr7CMMi",
  "key8": "tv22L87iZmGR7Pdmahc8ZEPi5RjuYT4UmuMAJjatASGLTFrjVozosR6BzgU7GkgfT19tcv1PJemGLLaQtxVeNPy",
  "key9": "2WFMfbdPY4tb5NgFQ2wZUn1s9xtkG4zPhjz6EuibbQ1ByGB5kGrSq2ZKGwvRvBbGPeQYuTu3H77PEg2tgc2HSCmV",
  "key10": "wW1CK6ogDPoXeaB5XfRx8reW3XSPD9iqQbEZS6so5aouLpmHKYvbVywMmMVMvvpcUYrBicoX5pUxKRk58rKHjWr",
  "key11": "54ZFwmuNmUV2mVaTynawUvAxFJjMGsMur8k4xFnX1KQYgaEckc7bBzw5kMxkZxpW3B9UWcLysGpk2NY6BWnGxXNN",
  "key12": "uEEjsDitQKUxK3gpqrNiDqhUPaRLZcpFEnnUpHQZnRg4qPogyxKWLH8GLfTFBum4S34ByDRv2RMGWtcNeqG148v",
  "key13": "5uErHGHJnHoDgf8gFMhqzmwgynogQXtysT5Kp3cSo898FJZBBv2m8Gbc3fabNk5Bwu8ynVVwYTA8GjLZFR3chUym",
  "key14": "4quG9QonaFvHTfxQ1Aj62jZzthy3jzU6apG4jMgazWzt8MtcegCrT2VupudTkpi8mNVBfhWnbW1aZrHxj3tHX2Km",
  "key15": "3ucruYCgUcW4rCATyXnP881tqd7XvWJJBoCSx259CzQgCweoRsGJat6KjCNx9kNmBgF3qqsoXv9C8gvsfhLcABGU",
  "key16": "5jitTAMPHswEmpjVrUScBK6Mt8nZia4cPahcsSqJ85fiM9QYw7Y91QzXYB8N2VU4QTLWkVFWgjQiuEzb5JfwVv2j",
  "key17": "44aTVs2DYBuw4GEeGBzKgAnQGWFYuu9iygNkTKoANGjDvHGkReSXxnDAmRwJPU5n3xS87BSVYAd3yrofuC6ZAyRx",
  "key18": "58Z2ZMtPVRZDWdZ5wkQupKdEGxd9AAAoRHpdGZ2bqJsWs96nZvEXaHcaJR17gpijJurp6NS2K5CbSLDkXoyaKVYZ",
  "key19": "FMdEXeLVPp6qWGj3pqFzNAeCHNJnMumowL8kK8cCU6N32ZxRVjBowrCGEoFgTC93TmktbAcccerzpEdfwktNo6Q",
  "key20": "3fmsHxht2jUYYAtwTPPazo8sco6yfnZ2fSSJH5JJrDuV1UFDfQVZWCahKLvRWQAPGz1kZpVofuFnX5DDkg2StG1r",
  "key21": "5HiVxFwC12m1fmMwYydsEUWPh8F1YEUeLEAiiyBuSr9s7bt9YWCSWLAMbd6unro1vmrBDuqstvC8N2VS4sQd6N7F",
  "key22": "3Jrk3naVFLXZ6yB8AdLhGZkLdSrBRg8BMmvpwF3hk6gHpVp2HZaVA9sAjH493q3kzPfgwDgdYe1f9JPMoktNGmsE",
  "key23": "5M7Kvnptw89ozgC7dW5kiHi5H8bERzkntSY27nHZRtHwmHhhjAgCXWiBJWx7k6tzzVde7TpWX9GyyGFQr6nt9tjK",
  "key24": "PAUVTjzUQNj6U6ZdADMkrkPKaa2TFii7rDXrNXYX1MNvJybX2JJFfH3jKgrgPAN3NiAZbzrwa926N1sVHScSbxG",
  "key25": "4BWvv5VXx4692dg8oQUea3eg1YRmU1enibmBKLGoe73iMcBf4gw71ZxDMEMJK5BaaCkcEYb7NqzisraERTnVpLhi",
  "key26": "dXBrt5hRfaKmq3xE3c9PG3mgwYck3t7rFFjWRb4KZAmACsWmtDjM4H3hPpyWTv8RZxNbhQPYLLusdNZYMb8km8p",
  "key27": "2nS8HF5PyH2gZvJHyyZaFhdbAUsHU2M85okZyPoxUf9pPGzFTZL74z8sGAx9HMszWi3h4rD524JmuNVCogkXRyTB"
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
