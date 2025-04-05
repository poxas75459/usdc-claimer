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
    "4WKA8vEoj4SNtThu3LrfKPGCmAFNXvEjWnSdCxp352rm3JU5LGVcSAn3QbkoCMx3Ph5fs3pvXVNe8WHPvcnvfV9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ff5YyFWT56dWJPUpxPUw7QMNyAYcf7bjVpyBzfGgvXHHiXwpPu7YsSGS6JV6KUTPeVtyUs8qovzdb9mySqNUeFg",
  "key1": "2Y9Czw1vyybEisz5tAF2mRDhfrTcxCdCHtv1Z9GTypm9v1o7NTvR5QwTU47xP3ut5sGNJLxhkcgxLg8tnEfsrT4j",
  "key2": "Ft3pnnogAVcDUczZJaoy1fu1Je8dWxyLLNsJxhqFv6QSJ7XuyvZFw34mgifBNqGYzezARAHiz8W1gubLpYi3BoL",
  "key3": "wQDZyiCRHpvmj9Ez8vrt7yxDHpmT2qTXw5WDiPbdnArd69gVANGVNCPvxHz3L4V5zvBuL1Wr6Af2FyPYeFzXGpU",
  "key4": "W3C9KpC3MJPefwpqJaqhhK8FhKZqsakwF214FsmPF99BNDC7JxeDEQAapUEwJCsgvfnLY8Sot5fXzMLH3fpqfaC",
  "key5": "3WZDTEts38M7Du8uMU7fkmHTZmRfkzPKJqnSGa8p3eMzDJXDbiCkyJu7D62zNR9BiRGsUotGnAWuBUyXiSJKkKwQ",
  "key6": "53LX7A38JKKXUZpHxJXD9umKmZZmaQmVqkTX53VgvNt7EBmSrJC8DocdVMGsvFksGapxyTsbKYPXBZVNjytiTPkj",
  "key7": "a1D7Ffr9KFYs8WpYm5AGY2UvBsaN1uCp74QcXbhRwLfGKrcSPW4zkbRbGrgWpBTQYJSPSGQcpy6syRYSCy5gxF1",
  "key8": "5HAHjW6g8TqUwGavgCv62BUGwnegduxiM7duYSoLCTAAVmU4C4L5BrfTH1daC6HwhtP2xPATVL8pvYJBVSNieEXw",
  "key9": "5wsk6FzrsMfojgj18u8xZDgzqCRUMoQLdaMLLw4c13VSrPm469tA2kwVi5BPsQMKaHSi6g42roYTzfV32PQ9rkJc",
  "key10": "jhhkaNxzpBSyDgH29dGFKJEDzpMgmSAhThxGCBB7rKc5WB2ajvK1ttyyf6W3HVGkMauumdzgPByH8UESgMvjUJC",
  "key11": "5dFteECCQ5sqV9sstjiLATYcqZsWW91LMF8ykhdaqFX9Pw3U5tap19pnK5P5gmGKniPbJrFpPTeBXgD4yr7e5N4E",
  "key12": "4yRHXQW3YVYnV6GfG3bzi9wEfwfy483vnNgUsVMbutMmEKdCyudLkQ81izyp6rwYFqCMuM2BTheBiMT77FgsdHfq",
  "key13": "T3dDgjRMjiqWKnP5gWbs6aWCR8V4L5R1SweGkiXJ8D6VHvbTdWHB2gDGgWcSVShSM7vdYEgVdgozojcasWsXSmy",
  "key14": "NTPtjJjjxTgoD9wE1q4Vjeo8jFEWXuVbrVZZnY5aVN6WrTp3ZFuqCALgtEc8XbNF3Dniuw4AfvvsdSDYJnQvppR",
  "key15": "5CyhV4T185sWeJZGngxi7jDm4zJ8JqxnYfUSiXXywherYES6QLhn2UKJMGKBeK8h3XbVcdToNZ8Nn4qPnq8Z6j18",
  "key16": "2XAbqhraQFBcd8VWysvWX9ugLcYFsZVsUDqKi94pDjWzLgsc5Trcpp8KqnyF4ggaNRWFX4hokAB91UmovFx1pwsi",
  "key17": "2d9XwM8yGj7mxfEDiqke6V6Voa2j4HU7Zt9GCt1N1FdFEEjAVjFPkX5uQkch9dYdbzg2r3bWAN6CnXLe4PxgqUvi",
  "key18": "42djYs27UX5CFokCe3YYDwnbyKcVKY4maFb7v5XkBWaM5WPMW5HbWJTeBFsSKR9RuRMqu5xkzbYNp9ch5SrpRr8j",
  "key19": "7PgWDcz5KmX6wVc7PbY9nLyZGTZ5eBRw9wrFb8EpoTT4bxKpifvYy9dFV7sL4DS8NvRDa8iA5JbxWa11F2XKvvj",
  "key20": "4fXGTfTj9q1aN8L2yf1XEoEQtWSeefPfH5GTZmfVnvzkicZeyLvxYL5HFf1EBqCe3NWy4NtnuZXpPBAPitQfknuk",
  "key21": "65ekyJA7qZLEUFFvXH9erV5pjStJfvq274XUMKih3JfvW5owKKUcUaYww8qXiNSPuEBDGxYfk3ESwkzHq9vV2Au9",
  "key22": "2TfdunqojS9MrqraX6UKLUhwEsFbvJdNzxhYduBcoDugAetbQicpkRxvp9AkFegwW6QDX6kF3TP18n8NtQV8NBK6",
  "key23": "55zzxwDjSy64zGgrbHb4DxMUV9UZJjznUTzmNGCUrVgtv8Kgy1YgYtB28txESmZqScMTTiSwcVts9LitNR72Jw3S",
  "key24": "Q1g4asCgG2rha2E5jAcxt9qyvHe5U4wXrw7gbMiFjyA97CP3MRKW2DucXHw9eQU48atK1WRsY2XSBo79ib13e5m",
  "key25": "4BqjpbTJysgij21MUJ4C8QTmoUmzczG5Nv8zZgjorYdFEkbhjXJejhDiHBdskohb7AcEDmtTzSxY8HPhEAQqgbAX",
  "key26": "48axVB9UUmVjb4HZrgrhaiGYN9AboDqzCY7PtnstsPQmEtQvSk6PDXmZEmbTdqcKXQmZhCyHn5DUJpmmaH6w15hb",
  "key27": "8vEtYHAxjB7Xeg6G3n9wjTiGw5mLknBeKtYKDw3MmBgKUN1jQmcat4BgmQP4Q53ouHxowvdTebdkhECyq62RW2H",
  "key28": "5wcJKcjp6UYvSSahbsBab23nBPqHNdQ1gAWoF865KuNPa1YvmyvLcShbDBPAMLAMJmEhtcJH7zezCXrVaJWPxSrh",
  "key29": "4mvvKxzGtgNba8DXaGg255zL1kcUJAADVTtV57vncXiP46oaithWdkivQ1nb4ckZfZuqHrkCYQDmfv9fetQCQ29f",
  "key30": "3opLJeKRKB5dwhAtZh51HeKHD7LaX4CR8XfaQ78EkBa4rcV42vVmDNoZTxTqCj8W4HNvSU7sePboiYtcLwZDLbck",
  "key31": "2pSPfg6fMwPKKNNGcabm9a1PTpbmFE5hBQ62WmmHWu8kvhwCRykoMwJnP4st2kTeNRzh7QA1gxmh6NiHR3vXTFrC",
  "key32": "4grfH1NnE2hsgXddJ6vxMVczSDEuNiLMPhe9R8rrxEfJ8UKkTPU6bXdtXw1coxpTMCKa9F1gNb8UQE2AqC3bqpTp",
  "key33": "63XgaMveifDf2JN4Zyzv4kpp2vAVnMuy33QhaL3BkaCxSTiRHnVgZn5hbCzRRoesbR3Ni8H5eFiJMQd51E53BQ77",
  "key34": "67R6zxBtE8JkQW55niZwSZnM5qvGUYQ8gqHw4xiyTefXGNDjkKaH1EMyhRV9GVMmw2bQJQvtzGQDbue7uZS2Uo8R"
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
