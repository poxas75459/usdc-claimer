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
    "4RSntVPYJq9p3r61t2Hs2AwxcnXgA2PPnsD3YT1vd3nVGqpUuPaLNYRohaQ11ibb4TDTQUbcjmd6d7Mm4nTb6zWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TABKPpHnG186W4r3JwzHVHLeaF43sbTJhPGa2rBYY9Toc8EBL6V9bktKo6HK4UthnYq9HD5tMUinsSZLtxMMLzd",
  "key1": "3CruhD52sefPc3tpEVk2m6Ao1a7gbL4Mq5fdbvdQvXqxiUKrz5J72EZTTUTEkiRkwQ9UEbkTbRBryJUKWFhMVuvV",
  "key2": "5korUzHLQaLCr9EXtLWK9XaGcSzdBGYaTLUtki4T9JNHUHnwzfEfmHjCdTVCa4wW9o4Gf7eyKthFX461q1KFMsP8",
  "key3": "4D4LzUHxj4mTVZJEdo9PGCe7j4ST5XeVQKBw3KaVoeWn9h44qYYt5wkmZhj8FfbgQSZPwTUZztpp6QHzBaQYsTE2",
  "key4": "4JzCwVdUHUFdZjUyMmxtxNtupZokNyPxZcz1g7FYdY9sLTfJKqF3hNgFDRWPadk9fYsrTsZKjfqTteS95BCY3pw",
  "key5": "5ub5zo1tKtiMxvyxgkVXQBsjaPYnJMMxMsfR9uUWRYhp7ycDe3RDHuPqLWX5WVsiZvbja4DixiU5b63eaNk5uiUs",
  "key6": "67AWXbfAPBLreTXcAUCsp4SaDJ6wqFLjadyDHhNCoYaKx1EWBUaRhyj79RtXVMnemPW1S3TdNaHoUX6NyzDpVPcz",
  "key7": "2UummGferW3urrjXzdhoZT5CnKoqi58RDn9yFcXL4ABCpUuwPgahNN434riinY2ft4oULEA64daSFrbrQfgbZ9xo",
  "key8": "yEeChFNmcgK23Ch287cFH7EKA4K7zddNjW6j5UzNCa1nQqwsh3teeYXEWKcnqEKrKXLvvvaxMCTjXprESQ8GCZ5",
  "key9": "Mg33DfyDmkKvyaGiPEREVBA5xX4w1k9xLHnkqH8GRXLM2arUQw5Ejfs4HsLBcU7yPHBtbK1bsYGxuEKJ4KgJE9b",
  "key10": "52NxJqPwSU49ZTLUoNjnvZsiTNC2fasmuRwZZSujUTPh9JBzL4roG46CtJH4hwGb6eHb37S2x8RvTSTZ1PwTFiLJ",
  "key11": "4v8bW2NH5YENYUMmE8BaMvGiupEJ92hvWx6nPW371sezjqvVKGWRCgra5Lu4Qd6qXHNruM1ZrN8xa57swUhzL6Dd",
  "key12": "Rv6J1uM5HLMxGYKSgU6haqD95cHRtDPvGDyeqY3oGthdmt8Hhs1MYe1PNxu8BsdQGEwS5F4KDZXbpJsiVE44z7t",
  "key13": "2dBQKJMCFEJfFqtGyWMRYHEsEWrLBC1YMWHit4UWyLEnHd58jvPDc8oyzYfVCxKxfMGvpwMLMwoR7UiXisyNpCSx",
  "key14": "4KfQNkJkkkgHHRqUYujkwuCBS9uDDTPqy45uA1LbLGq1fngUoJYSMUhHopCABsW6Hof636TF9eMLjZQxNAvEGjZw",
  "key15": "2fNMi5EYw5TkAGWmdKARYEsgLhZNT7QV9V3PoDAg3e3BWt37hAbzB3fihHEAtoUxM6Ard1dSqWH4BCrhdgf4H1Z5",
  "key16": "4vuqaHkh2KwHWeRoupCvXJykAwNUwajowAho3oVXwq2kHR6uvG3vfX7xEJfXMe4TWA1AiCdhEXSn57FStqhuhhmX",
  "key17": "3CVogvhqe6RodM3edSm5zxMDrhcY6xTASAKbM94SuyUELkRHap5mnXtJribuWpMaeC7xvwAkQ3S33CZgh5podZe3",
  "key18": "x4RizVqbfxGNiSL8JEvGSg77jjhFW5muj5Y45vTLDZpBt8454NgnFAxAGLF4gS4dhCGxNgtyupzdhtSS5ywS9AH",
  "key19": "4GD8p63vRqjZHJbsqBRrZps8ryvyQR2gKT3d94fXt7fouUX2MaXMeoes5ZiDtChwsomPmEgVzgrRP5cyruAsJzXv",
  "key20": "2AXCQ2Y1JxKdoNHQTbzmvQciszjfKubv3NNUG3ZCvSj3CCQGhsbYM7w7qFNaH5TQKSo6btCdMnaxv8S1mgzw5wV8",
  "key21": "4zi2EQtMaj794JsMr7afMAH8g6dqpz3B4TshMpbVvHdxNwbhH2Kj1PgvAcW9ZLDzRKCwJaEDXkucPA8bikMUV9nB",
  "key22": "2x7nKS8C3FGLx3CPfZxtF3BvvCverPmTQw5JPNmnULd4vRNo57eoUuAHEw4kqG5DQ8MopjREvwN3zUMC8dgW2bSL",
  "key23": "268NuSujduhZnPVgpb7xwsxvykUwDE8Y9d2VgaA5yeXrt9zCxQbfnPHi7ptd7sjeXtbrdE8ErbJ4G5vqqrUzHb8h",
  "key24": "5Tu4wg5ZXTvRbpexsRxCK4jx4uasKpbWL1V8sHnKFdRrniB2346CKKz6mMheoqy83eDQpvWN7YyphbVtjZ9Mv1AR",
  "key25": "83j5XNeCQUdvJ5o3XtyJ2NUyReAL76s31AHdueTFNApSQwsT7oLKPtPkNNRDQ6JsUx9BH77B1g9RnyNdk5mx2GK",
  "key26": "5EmFctThdzYM9hMGqKKFnvnnUbPnmdtDDTMtTF2ihi5t55uzug3gtVM5a7DueJ23VPX7UoW3wG47xvcMocabGJBm",
  "key27": "2fzf5FMbiTqGDAdLM8hPKJpVW7Lh2Sgt4ePiwCM48fNqTMbSzkRG7M5tQjhhfSKJ64UeB8zvq67BEKJxJkyERHCX",
  "key28": "2mTuNuMYC9G3udLK9nZgyw4Pj39U1tmnp6hq9Y7nQQ4D8TZ8zXJ7FhFFxNtLrLsPjeriVDffeAuxoR6mwfh56hcX",
  "key29": "yBhokH9bnkAz71cYaNx1mG2qMsBcm7k3npb6FYe56V3LcwBDrs5smNNaALmywZ8DRctXyxa1ufQV5e33EPdfb8W",
  "key30": "4LwyNDWwS6SRJ5G291epN9NegrshUedhhC6EBqRFDH9tk5p1WDskLygK3n9STs4xYucTKhygxbPbk8Nxdymjdtbq",
  "key31": "5qhEPUwzJCPZLihAAe3hKM1tmVp93mns4XqJDR1VRbmPKSZmTxDV5Ac5gnFGtYszcTzzgWk1c4C2pJBxL5uJXuEx",
  "key32": "2E1MJxJ97oyURzTSC7FuD4JD6j2HEggD45QD3FtyoYPwyw4DPYMPwTBLgwt6mimLKRNtQ8qEbT4rY7dBv9H4WcDo",
  "key33": "3TsEREjvaScbArpv1mMoxaEGtsyjRSWJt7VsonbFPoxmVVTiLEEcK2JmBRXenmG5JgAsqWuoaAaY3iPWwqgpADKU",
  "key34": "2SNefvN5E1KkKkX6TNsnqayUHhUWmp7Yo4NnfGopEhadfiTEBHn5NS5L5tbWpsHZRFFUbvjyTJGTJFYUpPbQ8V57",
  "key35": "4jov4qFMMdgx2oFZTuuBvgapp61BHyYZwEyCS52yAMFmkbk9aPoL2gRVdwFoN2oLxuriKJge6pDrMYRrbUc34LCT",
  "key36": "ZW4saVRghsbQxsnDeA3yemAfEYuLzYu2rfCEbonEUU5tbLBn3SSvrQt99aibdca7fSMTyotrVHNSHBWyWL974jP",
  "key37": "5aWuy3fdEYNHzwEV7HpAjQeghdhU3TnsmRjLJBFVY8ZewSjWrZmQEJB6v5X8gakewdUy2gThSA7gvqVTWLTnACbx",
  "key38": "5KnoMcVV9xERNRLsuynS96iSU9jhBEj8m5PSjkqgQrDMwmKAHpCvS1CdiVz3nkAvr2Djn6fZq8y5tNDvaEpRG9f8",
  "key39": "338kqhqkX7wfVJ1FHbdHyNeqNEdguauXMTRaievLh7UuSDeoeWP1oq2JsMFKgNg9rX7vFetBqVsNT3vPp6R8snTU"
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
