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
    "4NKZqRPeWkgpGefeKbhhacyTL7wqCEytVDY7TXxKyrskUaVV3KdQXHwrVfoiYiDyCZV88UVG9Yn4sLPSFnvHm2FF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tyAs8JSdVtfV7VV2L4hjVXGpRfaxEsEDQmVWdMqMhVy3isQHd5XH8nNJG2uJnjMHGv4dReCB6aZpoMaxZrJe8Fa",
  "key1": "2LjL21vGY6tzasm81vqnVsSGGFN1XTdT6wV8kYMNaDTFKkSAqGFAkRnbW4U9nhQeF35LFjQ9PGAdtYa4Uo3EqFMZ",
  "key2": "caQtDScCvMeqy7VV9nEav3PmgM7TxRxNRHnWSHrfUWGFEtQ9FM6qzaEs1or5UXz8Xd1asY4pHUrPXjNLv66yKZ8",
  "key3": "4NeKJxwapBLBSH5TEgrJoFfRjf79QZabk7DmfAqWvdZXi3HPFYdW2wCLfuYgZ99MdVSJKRz8X31FQehtYBomikwm",
  "key4": "3juiJWot3P1aoyDc6Aks9kasu3jhS7Fmih2jh99xKjsaBdZZk4oCUCEnU75x2AzvksbmUWfREaqMRW4QXJVNYc7a",
  "key5": "3zLe36ZBgsnSQ4VpSpe5X4KEWhJyp9xCYkBJBmuA6TfBbrPX9XaczjFYGQkr9P3QsaME1ZzW8nj2ptNMSJVRT6gi",
  "key6": "CCaegb8L9bTe1ENCGgmVh4oyGpttLzzczSc1o8CfZAXZpAhnKwc2a8smBCYsjoFywUbBubqopRasYEhR9Efgj8v",
  "key7": "45zb2kkqrtTpv7USZrvQM82YbEsQTpT5KiaqRcbegKeNUmfuyS2aZzUPLrZEYZ5yPpxCzwk7wyAsGdUWGNds2nwe",
  "key8": "3AaAeLmYEZ9p9PrFJW8S17WtrkAJKDwsgm2r16fH2GMwi1KSy44N37LurmJQsfByuQzVgDMSLaZEURxgjSWwfS9Z",
  "key9": "4sYxYEWHbxkvmuKegy9MqF5utuG7sgteo64j2RTH5QZFsmEeg4EawnHhgqWNssT3w6dtGxChfueisDNvdibxoXpL",
  "key10": "5n4k6bbDVTaQ68Bh3FN2wBazUMWvsAtksttfbxn5F1PMcrvcBEtFbJ8zGBpZd9nt8XxBdUsEfJ7SQRagcPrLTiV8",
  "key11": "4CPF8FByQAy63V1SLPvrAuCYeRB3vEo2ydwP8CyhYzvNXHzsMxmqh728ZSg4Zd6SveSJvxvYeaBPs5eySJ3U5m8d",
  "key12": "2hZDsxJaXXrQHtY3YGuZvheL4RQaNLyKTSweE9cBNKxBkuyshuCb7LVgTbMx7JYQdbEVz31QL1ZbA9A3ue1x1FDV",
  "key13": "4Tv6b23QY9qNAtzxHZrLkpDU1CmtPvosZi6zKPLhtHKYTKqhR75Qx24msaeuev9w7xUyhyYmKwNwX4UpgTMp6ngA",
  "key14": "3ejqa55EbDCEc64h61Qj96wVD56xdDmVzfXtVHgxFxHpngxxRXxfTcE73yAAr8tgankcqhHiJ1wGYSijqm6Tv5V3",
  "key15": "4YGvPeBRM4DSH2gpAH8DQEerH7QvvvaikGWDHtjJagTuJGwLXCoMuUgjCrKeDsBkVQSrhm6Wfsim9XkbqTe869y",
  "key16": "1Je3Bh1g3PhmFyP4TkhLwPv3iQWWJ2XqS4RAX853khzbvML9KfqQUWhGNwzrawTX1jHFoaBUh4qXqxtGTpywyym",
  "key17": "UET1Ttu4WExttopzwHpjsWC4rUoU7CeMsbEXJkWVrKTuCRcieZPkTbPBuB3f4UhcSHvLXvd84tazPoN31aYg9av",
  "key18": "43pDKFP6MLdmk692P1NBtGrjACkXhBzJ3MM3WFR8S4sBKd11yFBnHipnNuwVv8DPA2ht9gCiMpJSjuSMxU6T5Z95",
  "key19": "BYDjVXWPuyjAoaNT11NJdHyzpTCU3g3fAQojbE7Cr6SfSpaac8E3BEi6Dn75a4VDpyKWmLLMKK9Yb5cCPmcesLD",
  "key20": "2Y1Ks4k4C6R2U7jaaGAa1zwGEnaCAVGSQzvLE6phhQDteSb1MB7woCNC5qi1oTFxgL9oEPye3hfyvamV3oNiPKza",
  "key21": "4hL3bpuepF2qkaHHjn2q3hDLBe3qJmDFNvyd9UQT9M1YmC5Lw6dsdWKy6M8XgZg84Drnx1LAfAXrobTXL5SMeym4",
  "key22": "4sZ5rEpjNUQnAn7oSQ5ZMxgZH3ScDa11ncf4pJu9zsLoQnwxwSWw3tkFi5jsdHFHeV5ie5N998jRkyhtfo1GSEzM",
  "key23": "z2rJX3MHLvXPgJqUe6bhDhorQaYwTn1vFrXuHhkgoCuAKakaNBaCMkr2b8hBwU6gH5X1Fuy3pg1mSYZscTmh4TD",
  "key24": "3FmMTu7oejEAEnZ9VSwimcTNZokA8aPMh2beoNRPeLiitHt7VJW7J91gc1Yyn6W5S8nCVfNRTQtL21T2JoAzhCXH",
  "key25": "31Dh8AFHwhZNpdV9M1ctHjWqpB4RPX3MJMKkbggfxLWqFbmKGLAbrGsHYQvjzrnDvsW36ZhePprGmyRG25L81VXf",
  "key26": "249k3HJhjeFGb8T6nVyRSVCcPiEPVA54eiEbBs49YKrbrTNF2LdkmBURG3vFMEaVDS6aHiTc8ksH7y44oQ4cwijY",
  "key27": "2hhDtQ62CWPqW15hSuaTCQCYPSqTRqaqJWmGTqP3WQjMM8LHFKaW5fnD2xZm1MuymQnsvsuMzTuksDukSjmcDzpx",
  "key28": "24xCm9DzSiD2Up8rnu7F8oGnHDFQhf1GxkfkPMWPCdZuNkNRBV6haqpXzN7nEZ1EzzwmXS5di87xiLbQg5AwaFM5",
  "key29": "2waAwKwzdQSHJTUqaX1BrXUxhiQuenhU4fWsfP3acdzErS1St1tBHvSLrFi83ZgG5TNN35bhsLjTxbczEy8i1641",
  "key30": "4ghPteHCdEEtq1htiqkYRBMds4ibQVkzVwYZy9WLXFZrqHSEDkAQTpVKhEr6nwCqQFY4wehnABUxFE1AR5K5wPNN",
  "key31": "GA5bsfpEJS71iJmhqfq3FJrQW5YfWjU9TDqwnDkWKvLnSRFUn9zLUR1sK8CvVnxunVc2xALS6RWUmKzRdgWctSw",
  "key32": "4X3mWaioYCk5qxKkaBNZWpkqSgdfDxX4k2NvZQK4iEkS4JG46mdoXu27QsNighKeDNQ5BxRvH6NQZ1nQ7ZvmBqQP",
  "key33": "5AbKLG2mRkpHwFfBiD9Tf7rxS91MDZyMjFBVcTEG3ojNcaPBKnSoSqiT4e18ZSzW14bqLsCk9DYLrm2Kdwj8CD2u",
  "key34": "38b4DoMFsUX4zCs22Cz1mCWfvt9Ebpp2F7corx1RzcDffbNyhUdBWWLvpQ8Qp3vV93Mwi5Ude6EkTuJdZDg2X5Cw",
  "key35": "58cFjdEk9uMDS7ZcXVZv5j8nhTEfimwaotj5G3naxketqZZ7t8zmbD8srQhTcANeZhoS5XrNZ2UonJUgC6FQ9qp9",
  "key36": "39rD4THsk54L7YKgnF8CN4LoQxGJFL5oDKkjGrHcHSWeUMCk7EZN94BfS4zm1xAWbgoj4ueRJtCdyeZGRdAo4yVG",
  "key37": "55D1S59aJo6aaTqWYCWpJZ4xGihvWPxD9ZHxanokycc3x4AF4CRewd4AujRj1swm4Azztd4io8w8KC52VVeHzNNC",
  "key38": "5igbyg9bDkfyFNAK3oak2XgzE4uE55kGDE3mH5XT8etPYhneP1nKN8ksuARTaUmm9xVjsUG2ttpjVNGvsTPynpvk",
  "key39": "2cADqEuJCvopWKCPKkUJcJgL94suFK1jpNnCTzZWDcyGLNKxCJm1xkLVC1wFgsKo3fZiMHMgYiTABgvbEuUtbS1U",
  "key40": "4HWr6F4tYheUCbQNZRMJY6odChwtaC3yjSouYHg3Rw7FqRXSZdQiY6dNxrou6r5bnmjAkuGvhjUTLaAXPDfrcte7",
  "key41": "6675ootWnPFsVSB8sEJ7FZMapqjWnF4tocq9z9NcMUdfizdXhBJz6UXPjasbs96qNxwXuyaVvg4M2XKEDNi8uDTa",
  "key42": "25Ar7bAq9tbMmAbBe267jQj3KRJcV4kG6n8sZx4qHVDurXk3n9EaSCtRNV7uvuWweSye2FcYPqXQ7npvEaybwC5C"
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
