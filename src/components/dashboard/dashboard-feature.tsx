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
    "3jNhLu62kVCRL3UiyhggdKBRg4WVSnWsNpXrUF9BfXPTrUNhDAGGv4mam6AfFjWtYmsEXZJkEJwiNtupUXHG22dL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3smErr6DhevkJmDTXXKL1oVeaX3KdDE1YMFuxVC7NHxSyU2618HEhnJzTxtL1KsAHbw8i9ah5HrJyq3dECs2fvzW",
  "key1": "22oKUcEc7a1nHAunZqieBgcV798PNKDDRaz4bh39UVTmvznRi3T9nvLRoxCy7vcVSxAYVuJZZQBvSyAoJ58Sv1Lj",
  "key2": "4FGwZvcM3aTxciwKLYhGoJ9nLhLZQcPgxhZ5KcnD9XK65xd3XqKiUMfaK5QgdrKcrQ54AvWGRWEWkRuymR7MzxsV",
  "key3": "2geJgZmDLPbTVwMvDXfHVc3mFrZVpMV1Mprcn2eq7JrJLCZji74nydaqGXwzAnVfsXue7XKAA6qNAMAKw9kLQgC2",
  "key4": "4Sp9J7RHdSDuCFnD1ekiBSD9uavjGPnqXfunLj7Wq5HymkJoUyv2SNTLfE6Dfh1DfKj9wKp2Ms2E1wFLYvdad1qD",
  "key5": "2roPy7om7m1baPaTqzmfUpJWuUanarU4j5BHNfX6xVSi5mYHbnL4KjgnHwEmmHRQbb8hPrJmpvhGkHghxmzhzCKt",
  "key6": "ZoYg3F2JCxsAfJxLvGcW5Y33BSfvKwfwVneDuJqZsK3S5Jhd1kWc4A1yqSyG7CSmytNACTzgeLLMQRV5q7h9po6",
  "key7": "2vP2RJPkFVCWp4WjNEyzzuwDkBNmHLjdeLD8jYHjMKD2tJAWBSi9SEoozAym7t37k1rWdxwhantsm7kZnV8N15hs",
  "key8": "pPpH8vxwCYUgNExJoxq1w53rseEYRte3DzJeFUJ2NPQrGKE1NNMSbSoJqULqYjHqetR8UFmfKEuHc6mRWSkiEo4",
  "key9": "518aYswKptKgvTGruBUerx3x3k9yGcwaREPbv5YKtn5R8sUv1KGvYp3RH6iJkVczeUeK7Fek4q7KR2FhjHUGNHdT",
  "key10": "5y6cBBNqXCf6SSEehmSBbyoC1ZszztXtDri91bKdRMnQtt8ZMcf4mZ3HVBbmNvFXSRuFPuDp2dkSoPiFY5bCEVwc",
  "key11": "4jmkaoCjMQxFm4mUTkwt41ttH4TZnKusAyVQgBkRweSKmu9BLuHgzty1ojw8qCMLxuDBVLNkZJU43ATHVqo7gDZm",
  "key12": "2zfLsRJkX5dnbeu81efj3m2B1eNeKXW1tVFkeCagoZR771D7xta6juoxNy7i8tsTAQswdcdCF4bd8iXp6d5qK8PG",
  "key13": "3CoMhikzBUD8WUcgHTPiv4U1R6S8fxm34fHzBwzMtBaowjHJWC9S54J4js5XZFeyijBu6m6W1jmTXCsdkLX9zqMs",
  "key14": "sFhj8XfCVyzUV9Z6Eg6JxjrW3z7ZBWtVfKg4gDHiBmetXnNNZG3XqEURNoKxGqH7hKZVHEimjubTPqV1W6mxH2W",
  "key15": "39ADtmnAmHRsgTvE7vwwWfrnUGyTTB7MNinoseKMuzoBnR2Vci3S6Tnr2ttFwmFtYLzzDqZFzyQHCTYtdXUYCdwb",
  "key16": "3UAhfaPdULTHwfiW9hdDYtVwj8xdtuMSUk9vUfhgS1cmMYYhu2HJifQ8TYnB5CfAJp1ZKFCqjGpAJVKZxwLHstWG",
  "key17": "5HxL7naqshJ3esJUeALY2HMS3G4jBtkkuQq91C9ttmiJ7C8k2tBK5JwHRUtT5Rdw9sQWzieiEAmYd3VGSwLZYj67",
  "key18": "3BeherDrKvfbmFVSNVb6dYfb2NFG3dCx9cD3RhH3m6c3ZhZcMnhAmvB4jDNbcbmVSku37SHb4nUphhU38qMcX6GZ",
  "key19": "3LA1ijTvNHafRZvXnm61tQZ7QJaWUutUH7sRiXpWniBuS2xTZxe8Vr9xuVZpgt9fnjYbeKdsXJVQXnERkAMj1zT9",
  "key20": "hqUHgPicv4Si7tJ3YzLPuKuK9AJBwGJVbWnB3bHitBd9pFhc2qMZNxt2G6qHZELxbBdFdTk85nkqtFUuJPxNdfR",
  "key21": "5nsirj3GXkwWb3b982hSEYuTES3phjueSm3egz7BiGosZUkGt6jhN2RaS6HbwfyE9B87X2fch3HwhXJAHmHAtaXc",
  "key22": "2om8RemxyUVvgFDRcDCbeSXDGci5vR18PbMuhGKPsvWroVxork9PiFZZBGMxZRYJwNU39bgE27gVmonnvpvqFNTY",
  "key23": "5g79GdPMvwT7on1HUXvxQiVSKMmhhL5VvdVhL4gL8aKPGejT2KqHQEPrzPLVUn8oxa6a3KAAbGjPurJKvrd92L72",
  "key24": "33LJ3tgQVBZQqYGazXcgCEpTjoz2qqyT61THSXLKY7yf4RQLePEbb5aJJ6bMv56dEQFkuNJynX441cDxM2vpRXsB",
  "key25": "5vm8Ajj5zS2u6TosbVA9ydv9Mw6VuTAY6gsJYJWJs1dabt3k484hHpNHGD5tVzQxUKBCz7Xeyxn1gtH4eZH88qim",
  "key26": "Y1S2w4XEipYHccAQzKwHcn6DRU5Q2MrEATUDxi74a3PC14Bdju7zBUVgJUDzbaJn1hxHLksMmife3drPX6Bp55X",
  "key27": "44fKkBYCx2xRpxMH92rnZ6mLNDb4TUJHzBPzZkq4xqge5traY4JBVVNLHmWE8fKr1EPpPekm1S3GpeySyFKjBcCw",
  "key28": "3QzBWkf9QfLXtAruMTFr1Ey9edeUpEqxEyRAdN3H29Zk3uX7H5UG5n6EtXQvEFwJTJEX1TX9qXkjMXkPcYiDZ4fq",
  "key29": "rwQGatecxBqRBaahNgDHf7ThBkkzvvRMuaTab6RNQynn2zKutobACFFBFFfq8nSAPwFGP4wL6kwjoUysRAiiBXb",
  "key30": "4T4tumAUzu3P3UMHEeFcPotVRaNwSUAAZ4o6L5WoNvbUdYfKtDUYRmuqHtbDFjiuYPYcaa4U5Bmd4SwoR5xBnor1",
  "key31": "2rp1URrQxqnyo3kGMDTVxZZUj7Yb5f4vYqkg1jgUcndQiyyeKCNAob6Cw7rRP3EE6anxcnsjezXiSxJYwv4u2bgb",
  "key32": "4o8dzzGbv3hLq2MEiahYF7CKXqHgBHTasM2PczxjCnV2AyV8BQUhfJdaAFDDz3HpkXUJHP1AHSnueU35JwhoAnzs",
  "key33": "ALkw3egMLxuRoSYzv1E1SBfQ7NVowZpQFpgeMqXKGr4yvHbyZRyRzEvMku9s9zGmTSKUPc9crfC4Wze1J4AZFiC",
  "key34": "4EeKRWAoG42CrJxKNqTeCKfc44Pn3n9iDn2aJitVEhKoiMhCgzmR7nuChr2qk8ztMH6cMqn7oeFT1235AAyBUD5R",
  "key35": "MNGhmC1cMYpocEb6x3tAMkooWYhgahgWftabaJWNABcfDdoGn3XrBwvyn3xZXyVMdKJ7VhnDbkptRCpUCQ4Mvi1",
  "key36": "5LyFFsRf9XieWRUxiiNHpmAt9esVCe9csFfZYNmKCuvjXcq1Eis6TMZRhm6pNQzodj4WRMGELpDkPMoi1E3LQaXT"
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
