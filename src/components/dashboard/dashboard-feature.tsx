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
    "4cAYTBHGdbdzQsfKawS9CgwH1rCpRhc2AQPSszqTxumT2Bjn6E16jnhDkXzV25dicZvV3hetxugmFyfVYZAjYZZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64tJQdjdm7XoyE645r7NnyZiVWSszLFT6d8GmdJMgaFoFhkYL5AHzz3qxoexRNYrMLo44xu4WM2Daq1ohENz2ava",
  "key1": "5V8YWUpMRJx5h4JDTZuC99FebBfAGnmFsCjW74is5v6cUGtGHYQHQRA8Qtb4xxBXQwNhWGun9emgYpGcMUM9zoPB",
  "key2": "3ksKjbhG2QWEdgQKTndKGDdTKUCUhgWYzwG4ofXEiEprMN9jKhffPanEBjEvpVEvdQHhivWxDw4HVsVEk6Kx5qun",
  "key3": "3RmiovNX1CvfGvwx15qyeyLg9DBgfoJaN3xbbLPL6f3DfB9W8w9SxNDac2sxfJJo3f84vSzw1iUPSCC4FTBM9Gka",
  "key4": "38jBwvmP18yapZyVuYFU3CXbVDMjTuPFv7gpP1V7H3m9RtvUwLvqYbUYkJHFnc7bq7HP3Nr7c2KPoao68dkDUh1U",
  "key5": "2wWRopzm53ia9TgfxNJfUxcv1UCDCaC6bj5VV1vyzsFqXzShC9XR7b6psfCuT8BCfxBHdPKRFFz8tXfWvAL8DSPw",
  "key6": "4hPujohREPemXwr4RUnW6vGDtCm5rFWKBT1MZtTuMRKTb51HSdFTeKKMDqQyYpEJzcyinbGPMiKfMq6zGoaogEch",
  "key7": "2oRChx1oFgsLmEZKJhTyewKtQFMX4PHkMrTZ263SBx38fnH5YSNRpiG32E7pyT1bN64nc4QyVh1s5f8DuTvZfraS",
  "key8": "5aCksy5z5spPXjrfLnk7P1emfydEWeoSUcMZVH2NkxsFL1YgvHZ9JmDoQHyqiX9qSDgSsbCLcDTAQCHUrfdMiXa",
  "key9": "hk56LLGKF5fQBMh2W3nMUTukGWonwKCYHkGL7fQqGMUnjFAnJmam16byFymdo55FTf6xg9Bpd92yXmziWSguXN6",
  "key10": "2K9i1tc8oo8PDWc98tChrovyYmy8oLTzPT5mcThDTM4AJuKxxFh3YAoMsCgxhiLVBGZVcsgBERCYFK2VvTuDQfw1",
  "key11": "4Suqi37p4xJsLBT7uKepYwjzXdSJncr9eP33QtLfqbPg2sJrKw8grbTESPVXhxpqhZVh1EQTBufsrqoyZ2VFAQs9",
  "key12": "rCa9VriULrMiPbXwbsM3DrMpAbGkqc3bgE64A82KAQvFj895H2dYWNKpp59m6A2s3NuG9jrRS4XBY14mVuij3UY",
  "key13": "5RUyH4ChwZQzsFpCBywZQUuHVmPzMDZ2wEgPhrPv7BvALpi3SkKNeS9j9Y7i5CN9fWkfYAFL7MzyMRpYqhrHomPb",
  "key14": "4z273pxWeyQGWc6UTYPWy4EG9jC3NZQweTgSVPE5T9KFbUzkLMnH2BHAbzJ7CaeaGMYu2z3kujUMVTifwyTfygjm",
  "key15": "3vv1S6iFSfCJRoKqLnYSN2ciPH2ggQzhdyY8u1KyUgfVUJPxL524N83PrwgxUXAZ2MExUCA3NZf6e5rWuuahpmBs",
  "key16": "5wyGz9XHAS2BN6Db4ZycZia6XBaw3cLAF8kPh887w5AR49LWy1ACSpvQwkkYmoTeWCSB2fGs46xGb5uUop8fe6i3",
  "key17": "2CpVsw1ALAUcoLTknxnfneT7ySiSDq6NduR7om62FBqd9j16jQmLz6gJizjPr8KHqYAQxeo69Lt8NkvAzoGoypjp",
  "key18": "3j4HuBWzx5zhHt2bgVvHttQKFpemZNrcz5mdwQDuBqrCKP2YnUnn8fBNHaacTPXo51UpST4hkWKmDeKmg8uosP27",
  "key19": "3eXq9kHuiwhSWAW4bCHKiaW1ZaWVWFTavdUR2T1L6iCJ3iiFhFX8vHYrs5Lpf4r8RzuaqmgeXgz2VMPqLsRDBWcF",
  "key20": "5WSEmQi9ecbyMkFYJhCuGkjEZhkFmgoVj1YNp34mYpXSk7tqs2S3h6mk8FZnznuDEJyZBaN3NFWMaz93qk2RMF6z",
  "key21": "4GKJg3BYqDVQHfxMjSGVPjBMk2ega4oaKo8jRTM4NmHQJpK9zCg34FuiVjTUMEEtdVJ8PdCuqYpeGhfGC8QLhu1x",
  "key22": "2JbbRJQdcJsuAxRBXJPe5nx2GgNmswcdnSjtvBfE5yLV8pcm3X4nw6z3vRQ2ySGzZwYA6yZ9d4d3shPzrNFywozz",
  "key23": "23kpgAG9vCGDuTinQr3FnQh5MzLJH27n3oNVsdDy7xDdoW61rLf6rFE7rMQkMsM1XMejp7KaBsN3twszaUu6nTGp",
  "key24": "2jL8EkJRk6AFfpc2uxGfAGMKGDAzSsEHQBf6wjnUTyUsLtPxL7pA6d3HBqhLNXXr9zG6oZDzTNNZgBsAzChvqFDF",
  "key25": "2PZwi4Yz4ViVFww2QXdQ8o1hFNwWHNuCa2SHixSJ2S9Lb5JSWPKwsX9gEC8iPQHbFCAiGc2AQ7MTa8K3VCSfDxVg"
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
