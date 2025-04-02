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
    "M2ZGbfN8LC5tQFLdW3rxKFpuBhqWTDSZL4DR37FKiAnTjUNrzb3VSV5HoGkuQD7tVCSV2qiMFC2qHX1dZbYSF1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "baSdFJj1jKeZ3TR16TVJMBDnFfFtniBNfstcrfkfi9TfE3UnGejdLneLH6zBd4WstBRondozefHAhozcBdYwuz4",
  "key1": "aafQiaQJ8gp64g9DhCsfYKYCqTGXm3UaqtGxWvgQtNRdESGPDvF7nK5wRktUxVFqkrNhE1ZmyE17vdMxgLPc28v",
  "key2": "234d1aoPTJyW2S17yKPrxWCnCrZauYAhkdy1jW3HgVBfZ3QvWDMj4WdHkny7femJbX7T54Fr2BtC1kuwTzZGL57n",
  "key3": "5YR1tDpRdaxXztLg1amC3uE2M9D2EWd7vtqx2SzwJvyssJy2rzqcKvUa7d9KeFfLp9JHiUrBficKFMB4DS1r9Duk",
  "key4": "Wq9axLjrDuzR6KLH3idiAJaqVAWBqpJYNLvP8DzhdjichyxwBcuJpA7PG1ZXpfjSMgHjfNUWkc58uCT34k44mCR",
  "key5": "672ch1vUVmNUVsgxtX95xTxjviVpfgpW14bVWDShPkb1s6PKPVpxSX496H9VMmrVQm1ceGmPGj2LX5KZWBBzvkU2",
  "key6": "3wnp13yVg4swkc8k4SEkxr6gRjh1f7qf8m6r7zvdsu5nS86V8VeEu4kNK67MNrKcz7iSuLUwjh5yREbbwp3Wkxrd",
  "key7": "2bBStyT9omehKho4EEzJc5bGSvvtG4rcFAJToiGQwT3vX5nSBqpoBuHcrgQuLtQ8gcwyHoHZS16rqJVPwejkao3Q",
  "key8": "2ZtYiGXtPo6DeEYWu1droXmZAcesNfyWhFoNXdXh5Wi6UXfcML8kf4rtijvRTnGyNmUTGDb3KgjBuYeMS6wCtQ1M",
  "key9": "2mTXA6fomHjcsfMRkKhLQvizNz2SWeA5MsjFKiuiqHPvNrr7jfXYDkPGLXyFELTLtetTYmTJQoeKoU2A5EnjDWvR",
  "key10": "3KdUuto59FA9pSs2XQodA1bbXwNH98Bfd435i6vj6ndDYLKF14Pn44Bz7TssRYMD2AzNJTmLqkrELQHBaPeQqRgd",
  "key11": "qovjhd7LzeP6gt4KG1wvBsMe1JnDztYrwELB1HCeHRNwn5ouGkwoWxrLZTXykEVhvbUsBS4tD2AWz7fSA2BkKWc",
  "key12": "5PpxaPUHDWXgKDMS4V6rXiJEioHTu7ctRzHrFaCUHshJEtRQDxhJUf4gYEqne7db18VVzB65R8vnsrViAAZyQukP",
  "key13": "26HCp4yCibMhdFjUfU1KfZ2DRSqdz7Se6zr2sZ6GuBQzytYBSzhnYKAHDiVZJDLeAWYB5wwATyb6NHPuXPHsYHTc",
  "key14": "51dxdGU3DSuYZiVNaMqpVA17PWht1ceHCZw8yBw4o3XheUvXXXgaCiGEYMU48hL6fX4nhR4V9RmU1oFvvHFGnW4X",
  "key15": "5NUDiyu34Wb1ab1rfKfxHiaAzn7Sazs7J8EAWj8ia2q6cyEuDp5soDFiA9cV5a46KUqvk4drn3ZMzgcMDnk64cf1",
  "key16": "4ztYw81Vp2dBQbKbeMvbxTyToKJe7W2GsC1yS55RUDvf1mfYguVUyXjTcurWL5gH9UXpY78joVTWWYQuxjvqHEdz",
  "key17": "5TotroxwxBNcqmpgRMMoS2ZL6dPwLTxjGYhbxyBWkvrZ3m5sCsWFQNYvkjb3oFEa5xnEGHyznBr96ijhinWY9NwR",
  "key18": "64PC6oMYmBmpZNm4axybEuRApC4QZRcsxDaHS6jk71DTQ5997YisTM6BennApkWNZxe2WaZCmr1hocDGGTrLeyYw",
  "key19": "4SKoKyjVYfPZ8wA9GhEXF7eJ7FXNGE7T5CWvn2XrauXPDZSUPxAKZKD4ckAAnNUiEsUfsUuQFgn66fZNNh51Qtkd",
  "key20": "4EhKyMj7CWeF5TH3vuGrxmapVELmAaYENUGYszWjquji9m2tvtQtirVpgRh1fMNU9XQnqhTo2Gajqo6bUvyc9VLL",
  "key21": "nEeQcn2NzCWcD7XWgb9XwDKQCk5LWp9VjqgV8LW3yYiY2FjizEktvJpqMM1LTEsCguVF6iiKTikWkQEgaK8e1W4",
  "key22": "4i4agg84RcUPFszepvUP9kGews9XkgtPQTdpy8Pz6FbbTK2cNgwVAX3dJ8i64jqmE6dj2N1AWvuNGpVEFJr1qP4J",
  "key23": "3WvYfCKKcadT1wPYLLvT3JsrdWxt2TWehsCNEv7SLTivoNEoCa2mt9xt6PNoy3x6WLCS9M4bNhKFdNAZszpUFEYU",
  "key24": "4aCtebrWvZKgiEqCWF5KQpHJQWoZi42H6wMEQpeMHPXL86LXprdRV37XjumQujZ27ppsEgv2nLFEkNZmayeby4ft",
  "key25": "3Gy9yZmYEYVwfmJrVaVyYkUGgGX7Wbf7Xrz4gxNyv2jRD4QBiBTeisZ8U4owe1GbHsgyu9EvZBFMKCAmPgPviJC1",
  "key26": "Ui38KSLabvinxACbfTGunXtPN3AR2T9QaAzuKMZrcQYKoR3xjNv7KFfheZmB22CssLFGWBVH27sEb1rLN1Yjbkj",
  "key27": "3waBdzYoPyJMF2M5hHKsbGbBByFER4429ftNWVd4MTDXm8DWDSBHZK1DmHwx2sJqEi6sbU7MR4fATZVbm761is8m",
  "key28": "3kFAFuxahJk4cuxMtRk2MQD7CiYHLLaWdi1XpS6kvu32SBsNu7xkBzwTGFdnBMLZcswhFUWPcjPHGXXQnXV8vhxV",
  "key29": "4XRjh966WawJkCTZQu1hZvoeMQdQ6jK9TRDJEpM1efgUt3cfmQKhZFhrtBvbfKBGgUQUiG2t9hW3DEfFrP7qDbqF",
  "key30": "3TW2k6o281yCbePErir5pjbZtotzSCDE5UX7MQJqfUVCzESkfx6JwFzNASvrsZ9zcMwL3y6oXWmaUfxfxGBrNK8t",
  "key31": "3yndcVhaiPmE53zYB2C6eEM5Jqw15T7tTvkedgTxgYxqXdCen6sr5QHwfD6s7URrG3TqnYzMZamdd1aKo9Xy4mzB",
  "key32": "2yd3VPGhe7Cgowk9jPtoiRhtQg3b6zwSTLFs4F456ZfowHjDbQPxQXLHuXifyvruq3x4DT85WX3L6ZBA7M124Qa3",
  "key33": "BcWMgAUu9SXw2SnNz5GNan5gZfsJCqdqGYFfL2sdPF6cdfZw1CxKy4JD6et3inWc66iHyJjDqTJNm5crCCqHErf",
  "key34": "47dJ4KWm4nUuq93C6gEsGX1wr4G8PoprsY4BPmhq4LgiGwhMb45ccrUEAgmmtELR9umoWeV8bBQATvAWBRAtnyWz",
  "key35": "35reF1JdVgpsLzJEyZCHhA6zsiwWcgKCqw1f4dMV5Zgf8xHtvMByS2s8S6a1T1PydYa9PC8aEf8k4yA53Ncxig43",
  "key36": "5rAoMHSkrjw3vkk3np9YqEPQ8SkoiGUhCMJEBAzUkLDmMJ4qDdzA4Ao4Au4DRpFVp7Tn3JRTXAN8a7QD4yTtzjMM",
  "key37": "5ncJjiXPN4bnTqmCDfnUjRdq1VjRk43WdypobAEjTo3Ysyr38GE2zzJDZmBbEfmpCb3CEUiAQzqABxQvRP1nEcC9",
  "key38": "48hBz1utoDWGx8e5crNKN69pGSknpppEue71iHkCfXMgwkCqfsUdpZBAiBuW7QPgH384Z2Squ7edXuo2maTsr6b1",
  "key39": "47qHXYP8ngKLdTHy9PPbprwL1qwJR9hnvLvF1mkyVWR5DsQuJfkYmVX48qdGiJVLtp3WMppe5bWLyTerS7x136rG"
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
