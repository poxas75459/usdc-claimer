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
    "MV3L3A5yx66FxtJL3gAKhap8gzagcfvvmcwNAjVNUMrnCXj4VnkfkaqDiCiMDHEpwLno9yodTTiYnuq26V7zMr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Snt6ntmnbgwBMLp6VrQkzN8qp9utBwcKEphwMnvZgauZXxn4pFsmgaGsuizrD5B9PBfRX5gtzdZ5cb41XVdZ6RF",
  "key1": "6Lx4cYXwLTGXbN5vYVFPWg7Jg9cDMpj1ZN6Xr8M7FF1fr4jnRkXDE4Vqkc3aGH7MQrycwEAu1oZB628tmy3wkc4",
  "key2": "6kuujsVuAuqpYR2ff3otBP925q6RL7hqswhuLtr7fcSwa6Xk7RLpNAp2V4j8RoWcj1ZhnVitWHagx9xYRqq98UY",
  "key3": "3essBvUw3dBdkcKKngtHxW26K7ibN2Q51qmcFJ1kdgZHonxrPCUxvGSj4fWyosUn3YhDQF9XpLHRjZsPRpDHzjSo",
  "key4": "TcPbmSKEEritAE5yrFq768NkTGrL4ACggxzfzYrxTX3Z273ALWUumWsz34ad1KBmCXssbkMwd8kUwznDkKSvsTF",
  "key5": "3wVwJBmE2e87gYxwHtM2FGQDsm87MUDHV6JBZwevrzQquPoNj7q5EeF48b77XRpPGk2zyMwJtqtZA1mXAM638agF",
  "key6": "2Di3Jnt17asuEQ42dj18pfj44TkLpTVwm3ojxZiSaa8myXYaRkb6SqUokaFZwENeBf2fsSBdfvQbeAcBjphdmTCY",
  "key7": "2CWy4n3qHvjavXAwNETUtnRa29jNNK1uRVRXYehPa8oEr1ox4y11qFuxaGGSrSsM27pCHbLW6PcjS1PR26m4DK5T",
  "key8": "5i6xiwoD7Q9Uw5zDTKw72yaaW1aAyGh7DSSZxoZ79P75kByekYUQThqe5DpmYLNsFZA4eZkguu77nJ6d1AvoWTwc",
  "key9": "4FWESymaLZHT7SZxGtnnXf23wicqvSBredU8T88FNz4Tj7sTx3L9JiXHx7gRgYokXwYbznbzyv9s9RdBF6tYXN4v",
  "key10": "4Zv48gnXEpW7zvJwKvCVdtLxVQiZBDBx3VF4jDWh4MSa1gGVw1StGWoxMqmNrCayFNU3MjMiJwWnKtrYdoJxQEVA",
  "key11": "5pnrM5FJA4PkEG1eW18GEF96PhgZynNf6ZL5bSWqaU1gnymztBFgLUyzY31rcQqBDMJpCooxxSuyEPp7GmptHpby",
  "key12": "5RoMVRrkYk5tyFj9nF5DTuZPXkdNN95NNcNT9bop9enJm8uGFD8idyBqvZtTBWroaGPdUVdM93qhxjn2W5EUz6dH",
  "key13": "4HTyK97oKQUTffD8UNKZZH3WXb5w2sMLVU6L4BkJCwDH4GPzdKuU4DYKd2oGsLYdpidLA9Q5GuWuHvFjTa8yKrdm",
  "key14": "5w7DpxZMLCsRbWD4RiMrAwv5ospkKiN7YT3a4K2BPPruMsPeRF54EP5cuSdSz1rMo5nF5uD5CwnX5icuubMVs8c5",
  "key15": "8uhZnqegtLDMnafF2NrCZkoWpZtgHUSm6fsAnV2Wh12FtwPdL2VeBS4XW3EJrDbPXWbbKKZVEV2d4aZuuLRNCWK",
  "key16": "4KTqjY91G3merwCWXKo2JQsACyKBqrfFvM8e6LRN6Vd6T41Ssp41AdCR9t1MKSNUptpMnhyWsyqXsGyM9aitv1zd",
  "key17": "3jkCjgxYYiCLBdCRofjcXBFXmX2nrHojFSi1D2HvgvKJoppZP5UK6UcTWN9GB1t54GRym5Zp54M3eFNrMyCE5pwH",
  "key18": "2Qp97rrRycdPhkdhgzoSzF9A1qB9kcCzuU7Ms7ZHELYv4KTb1t5FD5wpUFLnC8jPWP9swQp2ooMhBSiMGraXFKKe",
  "key19": "4XVgqYcDZDcBVeWpj4c3B1zk8ChaZ16yR2XpA6Myaz487rW8oeGgz8Xro4qdNtd5apPt436JDGWKRETgD4SWU9ii",
  "key20": "3xu8Qk9wbEwrQ4xr7xKuZgjEjhvUxiYcrkEqUkc1msvF6w9iwQi3qADKnp6h1jSAwpi6kM7tTtR4W9b5834rezzz",
  "key21": "3gTmyNLMSmxT4mGisXbuZ8rRPVr4yUXgaGFwYjp9g6mmDgv7tYU1zn9WuDWXKGtadonENv14Aoh46BiHSGGBFQfx",
  "key22": "2TzmxMk3tiCeb71FqoLc9zFJr8nrzJxjrmZAMVQxHMQAFdB1hScQbckeudvBRfVtwdFWLRsPMS1nDn3ixQmxhnFf",
  "key23": "4SPKMsrSF6vgxLrhGF4v5AUtqvDwLSGTfqZBcLxGrq2jCW8A1aWZb9ZY6uVY69xtKVAtLPDDtbQYBR5V8TA6NipG",
  "key24": "4yBMwtVm2rMr8tR2H3poNsyJZHESX5W5xhoTjyRCgpqPyx2x98AGjthwgERsnfKNVbFZSQ2FBQuhj4eWGheXskDQ",
  "key25": "3z7jRxZubPUa9Pw8TRfCVxt1XXa1kHBXy2dVqJfEoPDfpuePRAUStwCFybWTUyniyHT6XAqATnxxUoU3iXrwQu4b",
  "key26": "3DW6iaQTqthfpkz2A31FJW1enWs256MUDLaD8LYSADMs8RBG9wkVtpQACDxq7i5Zz7em7DiEnAtcurmqrBoazqe1",
  "key27": "44eFKgRtRMYCU53HAN2qowJ2pTur1AztfU2ur3oFS2hFMSDh3jQ7gmsiszUQJGTANTZ91KxGBjBbB63Rvu3DDNZK",
  "key28": "2oQUJ3LEfLLyvxWXGPAMubD8tG2EgKpFpnwhDmGk7QArkW1hgjJcMK2uSP75dStPc4RXAVEtbkwQ9V6dX6a2XEGm",
  "key29": "fTkM86WYvGy1MXRBKtStnxmZejB3U3GoV9duDKNevAiCP6cAxdxTD3nE4tR3XFfqtqL1bLMh5TsdH5U16zNhyVD",
  "key30": "638Xptfmq6hoqJnkXQBeY3RHFjSjrGWkWhm5pdfmb5gjLWnTZvQ1EgJRcr9LL89gRnUGCV5RFUGeXpTjb4CAPNsn"
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
