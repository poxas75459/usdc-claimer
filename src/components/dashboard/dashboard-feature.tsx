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
    "5MRvtozkP1b8EytTVyUHV5xQrNG7zQibcpdwmSBntZj3JJuRjCAPgtK9i6i6QA8YX7umCEAEZYnU5xNThZsxzv6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kf3tRvVVPwa3ByYdLLqzyALYhkxxpEwpHY42Yh2XLoU3XgH7GRKEDYdBf2hc71E9zCyNRhBrwsr3QaKbxHDXRFs",
  "key1": "3kF4RrqzpS9EW4U644Q1k2geJ55toyHXUEdAJQE6vsg2t7J1scV3megLGDC1pAHZLR1QaCyo2UuhpvxEL7sy4tWx",
  "key2": "2Yon8PJcoWHjjHz6u4hHY3os8HxWzL3SZvpTn3CGwiJrLzSgawEw1LL6aE5dcRHNK9UQHZ5KCz19Dgcg7Ew65qmp",
  "key3": "3wYESSWst9VrCigNZ6rLWmJ9dpWivSo3zFa3vJEJR8y19H8jYpVuaANWQK4WFWtA4R9d78DJ88uaNo5cGw2zzUvW",
  "key4": "4GRh3NETwvzMv1TGWYbCvSUbmvWj5Uh1wU9QddGZ6UxqyHBpYJphyNg7Ai9VRAUgFGVWmkLya18qpWsV363J6hnC",
  "key5": "3nD7wnXLsNVEs6dBBsgwyUoZNPWrE83HK7dXbPmuaK1pLW6Mci1ACNG2xk2v7UmL6ocm9EiJTCuTThBZQf96cTbC",
  "key6": "4dyMBSf5cQp9Npd8q4SyyPoRzVG3ARHEn8ZLZAsPcnPdQs2tsorLnfP1KUt4iaDnRgRiw2tWxYKVovtWcb5CEJLp",
  "key7": "4xdB5DKPaVh7TmFDQSeqWW1H7VLyxNqCfjz2NNbJPJQwximuFN7Bg2HTQzsUtQ9qzmNc6D2uBSCqXdHLS7ARFNc7",
  "key8": "2EPfRYjtwBkBUz7UTn5VXqihD2UPng3BhGFQ2r1ThS2Gh2j9fenAxktuXvN7mz2GnUnR237XwM9xx2v3jDy7gV9w",
  "key9": "s4ZDNm12QztpbFewwpzfYMnC8xAsLtdKfFcgxdHUEYbeDRjWbHTCC3H7R3FNhSTwAd5hndubiPvaHCXJdgmnSNv",
  "key10": "2akNwFoR1AYaigUf4KowqgzSUUHpjoMuYa8hdNQKHX8Vgrdpu1Jsv6Q8UmykzwGcr1656D2WsaosWymvPuGkPWdY",
  "key11": "2RxM5Y28qkP1AScqGoVQV7HiofSzmoZniy83KTB2aZFhb711zvEvAigaCYodFPNe5MydmimwiZoXC6XgxeaHB9KN",
  "key12": "3CU2FMP15iRPAmdax9c6MuFJf7EPu3tB9zVxNxnjHMtQjWTC8a1jat8NKzMJMNgvr5UgKEaygQpC8Ymk8W2GY8cx",
  "key13": "3AvWjyfY6mJnveeTrwoaC1DHb3PFp7Bsfrzoa2ub9JPT9uRXxm3zPVTdWced3Qhi5W1uvvimhJwzkjNzzMLKHB62",
  "key14": "ooeQXnpdGktzzTUdaFoVTNBe73iMtE4xvibFYxkxBMt1W7TStE5ZY3aFUJfLb3FfvJ84kXQ7VEz2BZvSt5oq69Y",
  "key15": "4q5hDzmiWnZP5YaH1UYeEKhXpqTXoPG3sx9ZqXbs1xVC18NnGzBdvHnFXecGrMDT3SPe6rFESELyFs65sPxbnC4F",
  "key16": "4an3pv8detbGt4BSg1CSj2ztiYmpnKWfzUH2EWKHjjczLwTx9qDZCX1oDbyBemVqkzW3bE1xnTAZJsQtZvJ2KGiE",
  "key17": "4Utsn6U4LtTUy4jMGbkNt9UngYCfMbKXCFNBAK7ChWCWhgGJ81rSYDTx2CXg1DyHXWZiWwpE8yrbYRwXjSGquesZ",
  "key18": "4e2U5YcUQNBWPcgQniztBkM3LMC8LhRRV7HZmGT73xrQNTrHcg8D8cDUZAW26DkdBGyqxGVE1v48AA9yq8dHH5wd",
  "key19": "hVVgzcVANMEhAx35YxU8qSbHv6BfDKVoiARvUDxRceSbiUC1XYmFKxTHauTn6T8HejGwmqfBuaYQAgsffsd4UKQ",
  "key20": "4jV1Bm1neq24tBhAxhsy1qbmGAwmRt7GCyLCnqi8VFwwWGcrCAphWGwzy9xSJm7qXnX9iCL6B58KturV5puAKV7d",
  "key21": "58tGYnpbDEN54gG71VczBrW9G2TyDoqwPSiPimKc7vHFAdxfV98QypGCHbWouUpxbSVsfiNhxdoM2CwMkBMmJ7DJ",
  "key22": "3AwcsQzdrqHyFG9kUCCjThSpdmxYY77GT8hNZGgiNG5Gj1AJNxNvAuFZPLKdBHJh6FUFyNgPbEBBtuK1fGm8W51K",
  "key23": "fGu9kEuWr6F9h2ZRxDHP5qeapc1ErtbpRpqios5BxVnz1AKQb9tn6KRKUJ4vbvVCLupYhESL3QwbTJVbK356fhW",
  "key24": "3trfm3wymPwxTjn41oTpZxyrsuGjKyUGvpikUPqvr8Z5oibemoyk82b3FXw8so4Rkv94okb5mPxq67ASzNgBkW16",
  "key25": "25Y4Mp1pb3FmaGaokpJcxcVcs58SQa9wgjryaZzbvwDCc5fvWkyrNPfi1u6PWD78WjYigj2dtNjXNs9dbmhLVwcP",
  "key26": "5hZrkZ3TN8dXwk2Kyy9qoA8MEcNb3JDe4TCXPVmz9ZtBwuW7jsfqCiTuz6KgQ3LfUbwqNWAvERo9B2bfzBa5cn6w",
  "key27": "3bzN8EGcV4NETZ6pvo2WDszm3Zyqy9qc7eTujN9HpECbjXgEtBCqig95YYJ1wwARgXoAKkPsdfp5UJN8nuhe59bj",
  "key28": "3aPy17fKzXSxZYttH3k8tfPfJkXYuu6NNCK9fhf5FwUWA7awp7BcLjxvFRM5WAwwMd3MyqX1vYUqhzDGdfyEbcTL",
  "key29": "57RXS8DqahsjXAcmLPwZ5ZT2e658qAGh4F1QpNBHSek6KwqvgaxPknrxqAq3wSfMj2ftFKSyJDqQaM2MDEQjyuwm",
  "key30": "3jTgxaEjJWbrx8TZZCWKjJTfKYUeuauhNSsu4TmW416kXfeZjiLBh6mK5WVZBAbNXV9CS69YqibC9e2PJY9NvBZ9",
  "key31": "C6rc5mZd6uqPrrfa2AXGaJGVzDEG59wc72gx1pgJZzguf25wLjeLpsQdouYEeaXhKqiTBZp1AokD3YuQKBqutk9",
  "key32": "5ieDqj91WvawQMY4NvYJaFToMibqLQx3XqHuGLj4azQ23G95CtA6r6g7dT1ZTAqyLM5BiP7MDLXRRWScyzs7T6Sc",
  "key33": "4BiuHiSC7VfX73ubnE5seZdh2vSBA8AQbg8Z5v1ZCvwDo7KhJC34UJQauTTdAEhhi4zc4U5kFdFdv6kyqRqyHqif",
  "key34": "4jG98aWkpzD49jK1sgEnMx2oV8hvmwdL8jaamLyjuUX9suKr8NbE6QkxiUcYM1m8ZpesS1Y3zbWuRSW6jmDnoq97",
  "key35": "4FSwANZ6EwjCmR5xhXw3PdkVEDVc1cFNny2degV6G1JRD1wMdv5S1vRhrfVXGEbBidAdVuei48WiHGQ7bTp1rmcq",
  "key36": "3kYiSfyBYDCAqpjRkw24U8SvQiUB3BcnKjCA8SjGR6pNG1SpsQsjNztt5hRPBthekWLHVcHcYn1X2U5yV4VtybmJ",
  "key37": "JvW9rHw1Pm6QAYXQKeJYkoL7ENzzDezTKhCDq4V5yA5ZRLVmBvSJfz1ZZc8cxCT8Ym5vzYy7ggV2Dy3hkNtkFxZ",
  "key38": "Du8RUY5GDnoxv9fXUBcGgiH5KpFr1J5LEMQibtyeEdKJTQy7XFc96e5YF6gYL2msPXKHB6f5dHKARRf88EzzbU2",
  "key39": "3V52MVyP91oGJwMvXkXVKQVTNzM2KcRo5xXWR5LG95voQ3vgJ8ynXjsAFyNzujAeSTpGUZraxYZVLMvzqtnK9eot"
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
