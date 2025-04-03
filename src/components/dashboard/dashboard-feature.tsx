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
    "5GLLmgShDYziU9iJuPbS4Ai2tkAsbg9EDjmtXkHNQxLHe8SmrKFRf9mF7UpNgpLrcHopJAQ7RXk9va3P8t6RCXCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ErJ98gSsz8ru3VtrJSRsJWLgpUUGAF1VycHwqJfMMTrXEBmDuWE4w4Qp7hX87KKWhMtnuUxBtosVZXcjCZ23WaY",
  "key1": "5uqPCKBRDRKwSkFVVJA1xfct1ubWW7Aus4j5BnSkxLzB4mq6KaURrTo3xvPDPomrKfv2nkYf8a8RwhFwmuoEjNhi",
  "key2": "nwqjCxiQExjmKpnXf2nacErn9fahBLKR84FzqNCzaaLawL4R2g634385hoHApoEtd3eMLpNv3wSRv8VLsozjGMj",
  "key3": "TQTYZ8xeuMkTDrgobu2KqpjeHUi42KtSyXG2JnmvJRUqZVJZ5t6NWaqxCAgwCNZWTMxmwPxLEkewHcVq7DrsGQE",
  "key4": "5UBszYdj3yvxNCFV6nPuR85mZo9oMUdt9wBrCHwhmfGZFPJogh7D2K31p5dQA5Hq42hwJuJmCziTpraXWbChBsNT",
  "key5": "3C7T1QHK85kLiQSFUPnBUNRMHo7DR41v5eSjDV5kShe7dapvYFAva6WgR3bJvqwpZAXjbJRZHSF4y31qe5oeDb4W",
  "key6": "te22yy1Wx3WAF8dz8teXAEAj7jhvZvsq2iUM11D2McWVviU4Y5rDaupyoYfav8mNddS8KgiiCcwUMAruq4FRffr",
  "key7": "37GxjDqwpv1yg2kyUnewxUASN4nSfns51MckLNR4f8GBzjyir6AHomNpEj6n9dqjwnmRo3pVZowDCnqEAWrjxnNZ",
  "key8": "2AVLCb33V9fvqTbRLLYSRAXYGJLtcxKFgLhzUgJUTX2pLqo6owe26dNHjC5p1dConug8q1wUW3jQG9HEoDepSbGY",
  "key9": "2SWeQCVqPsHU8Fvp5UAuicm5DxfGb1qeCbz7FS3kYGwQkRKKUxYDp9hSjgCZmemqvjod1dAhnFjam3cEwJZY8xED",
  "key10": "4gfvWgLb6qaTta1YNSGxvuBjrPrxRNhnTdRvubpK5EYBoGx6ghZN777nANtvHBymXfZT9c7sSk5r2UWzwNNaDXXE",
  "key11": "uQjqHQVhACbrZveskQu3beyWSvFoYxj9TK7J5jw3DhJSbzpqV1fym7CqjsSxAbSq83sFTzcNZ2qvtnmu3aC5pc8",
  "key12": "5g8yuQPqHT31XjFMoQm1yvayVYN47bCKpe7DfuBPmFvfP2WegSYunFiKWEJtPYZKcxfnrpEXtvrG795C5A4yBb6D",
  "key13": "23V71EpFPjuWDRmuUFHAUhSkdVE6JnAmCEfZUPSAKruECur1tpyVZUuguuhsfcAektveE9fQuydku7jafXWELQTD",
  "key14": "qEEEpejM97R8KeXfxivY3v6dbDA1WUZxSwBxSaYRERXCMX1nvavbTEk4T9RDSDuYwH8x3nWuaE8F6wer4QUcQq2",
  "key15": "JhWenmsXcaLM5vrZZydXd3hdNtukypeJxmbZGWLC11aRwT2GJEjBLYtoCXgR3iDCSH6wgD2J2j5zsHaMtgTBfTn",
  "key16": "2FygETGLuyVycsGTPDWuPLahCw1dKvtEgbfSN6PSYiEq5MRU6cja1oWjgt4JNEDExWE1AmbyumQGsqaHo8LGYCma",
  "key17": "3eFEJ8F7DPCyzMrTJeTGYjPcMW9nUnvAgEfJfdtXfY4p7TK821pZcY2Rrus8fFckbg8P3BsLe2xv6HcUEfe2cdGv",
  "key18": "bduCEKMiXMTt2kqPcLdSyULPuoPk5qa6BtrLjAZq3zdRkh1LAjrmdPZG2uAv5Pb7Fm9T1iYRa85Hv9mFPb3CQfJ",
  "key19": "3fyEXsKhWPWHbutaiRKid4HhKvBPkKEe24hBWgJqxXBGJxSgFhgn6QBZMYs19vM1uuFAj7vomh7js7q28cYfzCP2",
  "key20": "4HUVKjeXecjYPkE8e1Z82VNrFCDX3p76xxCK4F2Bq7JbEn7xAVDTMCp7BR4AVeEw3yc8Je9ob1oKc8LL9wmDQEmo",
  "key21": "TTp5JqCJHsYJS2VEvQxN2BzMgsHNwUUXMyt56GWZCuxmKPnEhgZ8Da9F45kUzT5StxNuVgNHSCNNpqGrFXY4qWD",
  "key22": "56CG1CpY6d2TdD74PpcoDBh9KoF2DXk5A8BPKMzZuphfejMoa8VWYb23kjv33V7VGdeAFNe96P7qioFPKcdVZJmA",
  "key23": "5W1KR4mQ9WhGRXb6j2kN3kXfAXDLuJ3PPM3U7iazEZxWaYD11m2VF2QujZs54iaC7r1eQ3qriaTHuTJNAuG9Jrmv",
  "key24": "25TjqUQPVR3bULuGMGhmsxryjPtpWFTjgroG3XY4vm3jppZ14oYEtdjxhQrmaYm68xx9kis6kKybCt8MXvvJE1nL",
  "key25": "24yPsie58rvE6qgUQ1rbHPDKtgU24zmAoxg7NK18N2Ryn9rVBv46EKTPWuC74u1Zjnsf4YxoiYL3zFPKrWCzKkfV",
  "key26": "2qpyDWL1siqjvpA2jYxyw2oChqDh1S22JLPtna2twQUvkyvXGMeFvmd2a61pz3pm7pZjti5rJqML1pZVPEnFG3rH",
  "key27": "2tDRqyAYz4qg3pr1QA63TytUrbyPtGmA2AmsikmDAUokUuDeuJ5PD7R5Jz4NXYNHyri6qNXxrWmgJZhtV7kPBFc3",
  "key28": "3yQLWwxP7WtFo2ki1w5CUhuFGfk2HQczMXHNPA815pwpMDkbquRzJMPjS3iFxFwK5bFtCSyvFPn4vGQ1d58ZZuLe",
  "key29": "4oiW6V85Z9srRuLwogMmdYdozTbUPKkqCs7xZBhuHJXDvHUJepZYMTzBsj4UkFgZa9SLJfPJrRA74Xfz5f6ZXKXj",
  "key30": "4yWnshoF91Ky7kubcE6fro4jDXxwv26BSG7DhCtyncTCxfSSrNLCxpgFkQQzJg5WDSwWAD5MoqwHj9uopc293wgR",
  "key31": "5Npm9BGagcf1CBf71FVZa9oVQ8iiZNyvSbb7baTW15WDSFWNDRUfDDezPTaFEeNJevcRaddSgUHwSnr5biaYv64B",
  "key32": "47xir83VYpUtzM6Trd5E4ET6wXE6H6gGR9DNtxf4Aja4gkhkM7DpG9Bh4VWZMJGccn9NCEEa9qPKsoNgRZ2y2tCe",
  "key33": "4JRpQD3GLFq8VVRmTGZB1yQM7YSaGGn4NECdKSJPXFXSSwhSszK1DqsPFWVehKKriN1HxWAn37Z6hAVmNDJ8R6ZX",
  "key34": "5HWDyhX86fLFFD4nzFqffYRKadkf8K8XpS8CC2fd8LCaJBMpdbcWF7zegK3bVBNXYz7ot91CUQLfhSRK5VM9i6br",
  "key35": "oNZSVdsbFyby3ZTmnQ289gCuts2swLm57He31NsYuark2Km9Bz5X6vU3nHSnhnZ3ehqTno64ZD8Mph8tGY8oofh",
  "key36": "ppDARAP9izUjJpt2ohJyvWxJk37atK4U6DjjEWsfNGaHpkrphKXWTd2Wt975FpjdLTRDNE3c9fj6pKgzmhs3DFE",
  "key37": "eRZT4dBLD1MdRHhpdXTqZQpwc5S1SEeoVHJBCSSwbc7PQrZExVmC1qnSbJBvR1cwEMVU2FyQKUZqfpM2A3hAVFN",
  "key38": "2LtvvBzLLRkGqdzeuECSHVNTVRjLMcScbTWL1Cm9S2HKbAK2MfVeoEwmLsMUJfUSHctrBZKaNpaXmeWR7mEegbaT",
  "key39": "4v51Rbs8wdQZwfVJ58gUK4K1HdakDWsrJFdi1obGZjyuGfkDc79rh6dhr6EcCK8jQ86ebYNazzrkm3W8gxsXRr4W",
  "key40": "XpScHpEV26QahmF3R2nLxy4bVgaK4n5AryWRP3ffzn36ARe6FBt72Q7idf5QHLCQjQT769oaZifrgcA2FXM7z7V",
  "key41": "2MbqVkt8epkzJWwzQm3cvbDhmyFtUyoxjxg3rWiXpdtqtYZYDntEFZnMhue23dxi7ATos9jpU5pfuytNKTFbWpfz"
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
