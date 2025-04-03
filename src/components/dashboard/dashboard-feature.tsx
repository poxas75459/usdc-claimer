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
    "5V8E74XFjbyaKpvhdL2Gi49MbFhJWQXikDvwpBLMV7M4sVujQQEdzCSvXRXzBeAoAuNsV5f91P7BX3ydidE54qJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gFJXVn5fcYYj3jZpXoh6aj7ycJguXWYduuep4ehEmyEWPznRJZKCEooKM1n893tpJyrWX7prGvi4dZ66eXfP8wX",
  "key1": "Wbww3R2PeQyFsADDTW36RDpBADxmvt6wrmMRPcQn4hGY7SF86wbhikfki5KzkEF6wYcdQmzTNL6D8K61YJAvzFc",
  "key2": "2yjUjx8UxnSKdQ6T9qd98pjfdjRLwiFhCo2JxedriFEQNJ1AeMqagRG9JW8afy3Chnb9Gv2fst2NgXty5SbpFARe",
  "key3": "3nqmpXKamH6Ceh7wYNVB5gjdHE8TnEBGj8wzvU4Do1oaXPdnHfjm7avG1yt3t6B6B2juZjSpHD7f8gz98x9EM1tL",
  "key4": "3x6RvLUGGNHCDBmWnTPJPTNBFvpwz2zkJEgHb6mH3JYJGZKMKqZTczz3MHFHaHoKW7V9QctqdYBKmPnM24asYnCa",
  "key5": "2x2QZZtPxPkCYEs7kTAF6N8ZDJrjN51ssNk3Q1yiJ8QfUhPgTRtdktsEYQd39MNANwirMwTTocV1pGnNhNdU26yk",
  "key6": "5TLNRu7hxWj9x6YFJmJX98PWqs4TpCMvo42vUebmsNk8we9hqXHZD8YWpcAcPyBACmVTBRnPVCh4vdsySnyGGmdg",
  "key7": "k8CEs6J9icMYNggm6fTSfjC9nX9v6h6hQbwJi6rtyJ1nFkgQcNmVWQTKBmAoe9cDHQWzLFWtdCqcaBKnx5UjDkz",
  "key8": "gVu8FMbLXfXuFo3RLQYTJgr5tSrAAJr7ALZg9AESn87zvacUMdNVLtQfkhTWfqXaiRozBxVT9YvnmpoiiB6jh6G",
  "key9": "2DKJmqgv2LHnowQh1BVr7Wjs5QwrhD2CNpkjUpeGtHiR4735izhp7C31mSHaXJSYoZPCebMCrQ45KuWtyzUm2okt",
  "key10": "3T8HpdstRFxwHeixRFLaNUR5Rog5uMbPggVnUjZA3Ckds9VNYMxwRaqoJwJev185aQbKQ5StnpQSBaNoXvrFubCH",
  "key11": "3abDFuiuGmykfpPFjE9fapc6vsXYk3uzALLumx1jUG8RgsunUm6ChdTURvhGSotToZkKbrYcXaxMobSvMcG8UB7j",
  "key12": "4gVYLkiVGeWC3DkmMWwKuVr4P4hMhzayVtjvkX1ea5kBMt2h86ii8EwmBQFEKriDA3cctrh9X5vbiPMT8iwSoJev",
  "key13": "4fjptiCDZjhQZxi4ZhTKisjR1Vk3DcooX6TPS5qpcX8oWAkfwBLgvKSSoaSAxQWnUQ9bZeSPZGnjodu8Vb93EyF4",
  "key14": "5msM3fVBbg185ouqPpNcbZ2mNv1uFHrduno9hhhRDHKuVFtwQu8GVrB5c8m4U3rKkUD9dGFChDf46a46CVcnYWAv",
  "key15": "bTZUpNqBMTt749EJRRXg3F3YmEbNoPkAaXeykJkzVZuu6sTwQR2yscoUUxynHEXqVBKGtPkGXwFSLFH2eSnDc5P",
  "key16": "4CwGZBGCSaB7fPCeD1byjk1D8RZCq3A6TcqErcESaGptZEJ6yTSvCc3VLMWxAW8ELJtugPkzpSbaiUUbaBAyGmnR",
  "key17": "3K9MZy1jeZqcWZN9yx34sps4daCU6PDZJuDXgUnQhRJTBY6hH9ouBd54kuFxDACJjhcgGQT5XVvMxgzQaatqRWdG",
  "key18": "BqVTT4cJ8sYf5HRQu3XpoDkvJPYdfGoX5gFEM2LeTJDv1wW1ohdq3EiyVAWsovvWRFkRp6vFZky5nhuFKGccVUC",
  "key19": "4aNWoLEiczkd2ivSVRxZhuM1qEB7a1qraTNMMHj1YcFaBsRZaQZAs4CBrXgGb5sVnJZxoGVYdJMtGxsNQQVSVuDp",
  "key20": "4NenzjJ75uHJXr3xANVzvsT5JrxtZ54ZVkF32t29XNSveXfHvYrJXN5hq8TCmV3mpwaDyTksystqWWs2ELococt",
  "key21": "4yExvtK9ekBsMYeUrPuJUghvQ9BBZM3ZAYSR4qjxCXgzaaw2irEwGPcWCApdu5qj2gjFdX8CscA4V2QLR7tjgy8s",
  "key22": "4CuyryDZdanvaxWnUUtDsG8JFT2A5y6gZyqfTaW1GCEoQCffemkH5xBzepaJtq3ByWSqvdWDogP734mnApCj2RS9",
  "key23": "2SsDkZVTT1c5HtcmSkokQmYAACkQXHekt57nNSGxwtcUncwEKPcMTr4e4gpj4BfyfhyXPV3fbudN4DkmgawrNotz",
  "key24": "KuWNeafd3vrZyUvERbnsW9WJF3rt672kTReEVtQDGsp5ixVJJiGZaGYFbep9Eerxmvhf9A7RkLCwqSZDh9e4pvb",
  "key25": "ZbrvkYNqcoahKX6AsMcEA6JKKoUuVhJoNwZPA5qXi3FPE2VcuYXQDaepMUCJrtKQi1h4uXs8UX2VGu6Y9neE6B5",
  "key26": "2nwoCS79PS5J5mNb5WMC1z4C9cX1SW7ms6s7k9hgdYdbwFj2UngGfK2BuqQZcXjNTBu8hKpbzHVUFhXa1PDSfMA4",
  "key27": "vwS5ZnNSEUHQSqquei3UVHepJwB5shRLNLhvvd7coijEEA6b6QyqfEQ63z9LvQsmKUCbtDRBsYFAK5cuC6kEpPq",
  "key28": "4rFcBLSyxsuYzBCm5g4USaRQvHwNndvFbgLAXzPWJYprAvnHPbTRj2ne4PbKUDoouQP4XEWGBCizSFconcxMuC5f",
  "key29": "4UrZ2U7ptsxcTVWdtjwDi7n7t6U56WyPvkZ7RPg9HBxuiCYdxw3xmRjrnAbz6QKh8pbE8S7tQxgQZJmh61SgFSfe",
  "key30": "VdA8XKqhAaDVCCJJRraRVCQV98wN8RDZU3PXFWyt9ZDgKE1K3MF76eHNzM17qk3PnhgRWLp5DiUAuyUWDxk5qvR"
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
