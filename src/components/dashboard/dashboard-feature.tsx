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
    "2qK6MG4HjjWdm1Sz8DGUoceji8aWArvMmjxENCBWQwaaNRmCKnNHfYPwLKRMX6zB1RpkMzBtqEKfcdP1rb7o9Lvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5isLWTMWiJjBpQQA9BMnNrY7KPqN4rfLMZqZiqBEdGZNumDBRMD1PLzA9Xny8rsJS6SuHGyeNc2ZGdJ47dcuXbYJ",
  "key1": "65P8wgRx5PPfRmhLFKJURzV4KT99aTSpUeweV4JifTYLUPGByY81Cg319hwc2uY8ozH7gW6GevRV7t4wHuZmszVA",
  "key2": "27JyT1nAUHkdMagaFDZ6gLkb9DuqakJwxzpzrDb2pzq4U2SZ3mxzupHJsBPeW6p5kvhfqtuiiRk9gt1mdnKNgdtB",
  "key3": "5xXq1uCxuxtdGyHMCZV29TFpoxH6E38zbWnoULvZJTXZfYtW7cuLuszSwoJkcGYV2GuVGYn7hFg3sByQVhuYroQw",
  "key4": "2sgnGc27FUDcXCqEfZzZVifkiwuBWyNcKjP39QzvPUMAtrLX96vKVMfnufMQ4CTRvb91QEzw18yuPqcVcXNLdGCK",
  "key5": "5CVbdv2JDMWNAgA8bFDxNC5PM7WB68dNwQkNR24ZWZMEfcG35SJJb5Fkps53kcPzcsKHthq5XF8ycQSnpxJbE7gR",
  "key6": "5i2M72CPekFDKQgiSBZUhvpjvEoQfBNz3R4dRj4dSdgPsHLxED1ULEPnW6xi4Ku1HhHUx1TChvkiN4sccNzZS3UK",
  "key7": "4K13HkCc61Ne8sMxLtbgx419XtKp7yATjCTCM2awgFCxKpKQsz31sBvDMxtVkdEn6rnaEoPt9GfqJQHXR4fU5Gv5",
  "key8": "2C9byudVmjrYvDfGLT2EUPMaoHeuwE1Eo7rArEfwFRfDoprVz1PRkctcN7g7i4n2KBcgnYWXRdfBNX3uRPwxmLkC",
  "key9": "kU7qgmcu3KiWkoib8wdb1ygcHPTTpxRa4SjYDHHtWNSjvamoo16HdvjmmarnZhfbRWbBew2ZcPFb4SVkx1dVwuY",
  "key10": "2MyCUxfo8SJ5xq9fLrXVJjbnvM7ENQMeQfAmBQg8iZiwHHAP3WPsexua6LNkfaeJVYXeWaD8ctRQxutq4D437k1d",
  "key11": "67GhGguL3y1CEueQ6hPBfwidjRFn361T8RBzvLphqErEoN8FPoUoQN9A8AcGQwSEjzJnKK9yGQU8LP4w46R6VV63",
  "key12": "3HhvrujAXx7Z7jf1XKCBpo9U2S2n8VPGB8Y1NWZvYCGkdu2hRQBzbVkrv5J9eDkjq4TKxwLFWy65gqaxz4GjRXZ1",
  "key13": "2swPpqKrJHjKRA4tXw74zq2EVdihjSVvuZYBv9ZqoiPU9FYeJkzRNpM8ezxSseHf4t765ThG52AFS4w9GNYoT2jy",
  "key14": "5yzQGZbAGHNNxc8fYfsEzFMS3SWybELo9mqM3a8DuocRfozbHZDge4UAcpzkNxE5VU1p2tmbVKbsLAa5N74uqKNS",
  "key15": "2xrz8QEVb9FZtAin2KmfofnKCs7V8R1q4KAAZyVc2LYuXoCE1BHCFtz8P3r6Zf1EgBXu2hHPqrkrVWofxJ999Sic",
  "key16": "3Hk9M1FuvjfMjSwppPnByuDxqiCutd3JDAkfeRPpcH7ey4gVRztjU4scrAyi1oEdNcD74Ycv7UpopD8GEDbuea8j",
  "key17": "64SyRZrcPUGkULgwTnFfj5k4vgvY23y637sfcc2mmvGSVzkFVYb4yxFQ9YhYBVHsiqG5T7g1XzpN8XSE611h7u3Z",
  "key18": "4cEjkaJ21Ku7sFqv9BeaErSVWBXkrvEesGbFywMbQmiP5NNwzvjusVUa3bddMHjVR8JvWFLZBcK7MNiKZXuNbPYt",
  "key19": "5x1ZfcLW91UTiEuyEWDCr5Bvsc9cm9dByYV7iR5ZBvkzVfKgXUoAdRFtc8pbyBTb2Xgx9P1WqKJm77zdmQ1LYuVX",
  "key20": "4RzvTPbajTePh6L3UXjhwqmk42RuGyBCnwK8RMU9EUUMV49gK7LEYjRo4bEQBDQjQWz3xrDNnSBXFaD7iepZmiKV",
  "key21": "4NgjDhH2Uc3wZ7afLfx5nUoBgHxgkfrDC1pogp9BYXtyf8pYnL2QSWMvTS7ncgk3dyoYWrpYnRfGt6ChT3ddMbvB",
  "key22": "2JMvgDQ3T74fT3amVXn66jZWunshtGy8FTnva4bGMYqVfLJK8CRGxcaHHz12XSV4Xjj1fmJZVcsgmUnC4Ki3m5JH",
  "key23": "54JUUD3nJGFmv1HUMyqfhPBxnEESkzKL4jH9qSBQ8NySnnsjfoFvC5y2MJdsntTSo9ihcGFri3CqBScuYbTiMDvn",
  "key24": "218KgLZ6WsnfEakRhogAd8a3pAv7sZ7P1JHGnYsLJHKLQWwh7kbqLVJPqU1vyRqHnokJHNkxuWHCcdRie6bRX9u3",
  "key25": "psA1a6ESECoEYhauRi5qNXomXY9HB4fHx4jVKCu51TS4wrpHyHgQfKQhXKwAY6VW4meUEhTK1TvsZ9ndDJsdish",
  "key26": "3pxvVvkkVKr8pferqjH1KoDts6nuNsowazpxsXqxEWWNRWqvseg1mqUh8VeHyyB64JHBGikQrWAdRg24ugFUXuSS",
  "key27": "3jAWJLHbjrf7WiByqp9QeSPXd1zrXc68JH5htVKz5MpubNwBSce3Sfw8wLcZJscf2KNyNT8efzJhjzEF1N2MEgmu",
  "key28": "3zeuvBMKyiBfNXv11VJgX9ZqReYVyFdMAfjJGb2uTpSPzKuRXyvZkDn3LWdcDGoQXM1KjvUver1YNxtgYkH7AEB",
  "key29": "2VkgAwbzy5dR22AwehMuJxhtHac8bvxwHk7RBxWRzxAPtVqfAngvctdJ5xsUakLNc7WB7XT8W2Ttbd19yc1fFa2d",
  "key30": "2Chu1KdwFh1zDh9rnywQNPQFPHCFgDwE7pnkqPS2a8dZ7spcv1gDNRea41nhpf5xbvRMTTPcLcDX8rHd2GTchMKX",
  "key31": "5fYCTZPoaJZ77kZNJ8y5xRLfkHYPH5kvzfisSZpkA2LF1vJoMh25eGMAKbJHHb71SvkSetxyCDC9sBrsR8M378eP",
  "key32": "5NTT2WYbzoVjKWFrtcTsUdFBKX2S1545rNiVuK3EwewSbMGS4B9v7EBfKFNd5XKSURryhHjVJ5Jbfg3DdWcJWm14",
  "key33": "32oawhwKusGWBit1M3Dqonvywwsa54j6e5B2ZsBohJuvY826qFWNm2b3RharhNejRRUzg1Ax4q1Emor9HYCAryaY"
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
