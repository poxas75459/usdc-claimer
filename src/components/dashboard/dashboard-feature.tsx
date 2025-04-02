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
    "5ym8aGahaAvmtqW7YwXF9unFjeynXSwENrQX26SSWntYVk11o9LEuDeaMnxDFVw5PkgRHQdsjfF676HgjFgXiKwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TT5jyZYvSNE51abNJMjciiSd7yoFarA8YDHCLrw6ktUved9bzU91CECBEfbwQsdBuvjLArntTqJLnT39SBLaA68",
  "key1": "35GTMPvoFdE5FT7nGBsXP6nf744Ci7Ls5rnS9L88f5R6gLc4Z8CXtx3tNe1nEzaJsEKDmu4CkLLgpvCo1Wu67ngB",
  "key2": "5oodCBxErfqKfGRQd2tMdPDrR8n2LBR7jaJzdFPUuAzxz9Y6MMLXu5YGBg2SnuKHhjcTiGGCLQHn9889zJvrNDKP",
  "key3": "5an2XMgj6KPos1GLJrUH3gBxqgCDBDmCyVFh4bagFav3LzJe1uVntGt9s8wWPM3oRSkqP2kT25nMYqHdVhAAZC73",
  "key4": "3Q2q6W7Fhb2NW171ccY5pgZchhMguAUr4Tgtfg9hyemHiF1pVEDFt2FSLmUVeQu5294M375mFTFzt5w84xjo14pu",
  "key5": "4EkxcfQyFQA1iefH8swgWULSfZsDwLd3orJr6wsGoJZ5kYh196xiiLfqpHgj3H2qP3bAfaRjb3tRz9DSvuEoZgcY",
  "key6": "2eGssJHX7Mc5HLCt2tJugZA3hBnwsMzBHR8bCRXqLLPwqJ99WQWpgDheEQ6SdZoXoiKHTs4qEA1DLjuSpAU4cVv4",
  "key7": "Zist4EHa73ipNXGqkCkAiayyqGqm7yaPWJUaJ4uY1PMQCWzxpFPfRmMq9qZMPiN3NeLhmkehjkNHc2pE6tfnAwW",
  "key8": "4LBuErwtWUfXyFVty7EXxqovKtWhR2MTt9UyLbq14eyzMXsugyaMgocYMXwWhYLxj2F9xXNGfRYjeE43pPNEmcZv",
  "key9": "28wsCK3qdyHUdeYjW4JsYwDs5UdXDysevZXcLHrZ6pHBb3ZtS54hpicRcU4xMz4nJEANGvGZkZe9128qZebPMtbC",
  "key10": "3mF2QcwrWVkCB8zQPW3m9X12T25FxVnGDQG31jq6nf7Ck1dJxfWgegCqeHSnehfhYCaA1v8PMKVaFHpHc48Zqyki",
  "key11": "xuagFb7C2cp7b1r4TLDfHw474YurGoLkfmxqcAJDMxm8FrpY7ww2E6BHweCkUM63he6bxQB2LV5Rk4iEwQHGNAD",
  "key12": "3yGEimuwHpvu35B6WmcCQgDy4DiCpJMLLGPpiftau4rdegvsM8vTCZG87hzaxVPtv9XoNdu7PA4SURnbBsf63Woh",
  "key13": "9L3Exww38GkApVHrpkQqpQHUvGxLAUnKvPjbVQ7Vv1DJ7iMA2RbR2ZVLMbYdBECUTPdwkRFeUXePE8zJF3TBWNu",
  "key14": "4vJa2BoQhiR1ouWtZa1k18iw7GAGBpRMTu2xj13oieDhwJdcLMzTUM4pTPVaAwRxJzmX87VtSX1DyMrxE7dFgdio",
  "key15": "431mMiVhQxKoLzCH8iUDi3vEzXYLJH8kfCSap8i7YNPZajbJCR4VoXtBiETydHXCDoSZ7kub6mokgMAN6zhYEhRu",
  "key16": "5WYhrRE2UvLHKpsn4UicwFQfLXeoBqjrYaEnNkmhD4Wr2o2a4qP8uTViwDuL8wBJrzSrLU9Tokc4xkH28PXD8hsZ",
  "key17": "38gSdJR4a2kULBroFzE5BUPfRfyfDgaA5gZkdhFJWGRrWgU3uUDQG42ZpPLnQBYys2MB1fxYvDwA4BWb54hTbPaG",
  "key18": "52jURtQKzZ8FVKDWM2mrPqeS4HREvegDLMReCmhWvqBFppXFYzJ9PvqLYyyWjPXBtYaU6xEMrNFX9LGNP1JJ2XKG",
  "key19": "4kCxuybzgQXjbzQnV5zjngizKk21NgQfqR7wj2hw7AccqFCRN6RN3khEWWFt3VgHS73gtT9NnucVzyfLj4rZhS3S",
  "key20": "2ehSGvJfxEEvQAnSWC9jRX3im3zs25ypaKV17Ux7e1a3k6NNiC3bYuhBPHaifejva7hoFsWBMVFBXVC8kf9wcLvv",
  "key21": "38iZDN8kyakHp2YSMWKWFXZQcXmY24eeWNvcyj7iDtv13QoxA9mWNvvYhSUcvWoeaWR9jn6qqN8cDcG5xERSYeTP",
  "key22": "4BYUYvLxcUsamLPpHGCPjCFn7n5iYneepjP1zz1gc38eNMSGHDyZ6sgWCeth8TQefWTNHtQaxLg1rjK577cvZZQQ",
  "key23": "4ugFsvoZMmbe8tDsfJWcaZYy1rxP9x8s6EzFG8tR98trF4qDFbnnWk8GfKmMaEyiYEiKyB6NzaviRZ1Hgv9dzSuc",
  "key24": "pFhabY5b8CBYMc5yVeeoABGhcswjgMEanhPSh8abGtGg6jTmVy3zytGmGKBSWShUzRjxo88m79ZM1coQvCAuvo2",
  "key25": "55vCJ6CeMKYvANPrxP3ucKGq2nbpNXNtJsyGh4eTTvMEEYxvkEHiZ9M3dfraK1R5kKXUU7BvQD4JuFLvdqAqcvv9"
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
