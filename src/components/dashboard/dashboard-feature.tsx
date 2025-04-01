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
    "2nak3RJ9JzatF4hpM5ZB7K3DWJNSQK9f2xHCZyvEMPjDsCDkCYPfPxgBokovfEV6a8eKPJtFa8FaRARuRh87puLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nKw4MXb9sGfbDepcGoFrG24rBZC5DE8CQPRpwRK2REaSVTjTc1H47Eu33vSnZDXWzY7UnWba6vbKdGpJhzdFqPZ",
  "key1": "26xGthJYjTYzAA95KZJAPafrV376eZeNYkv3Zp6wV42qwFRUPyxk3jU7bEu5GCmjumrtR4T3ZmUvStwh6EYNquTu",
  "key2": "5fscTCf8A3qaUWEAwpSScMKduiwE8LZGtFdXrdD9UtXKVj1Dfvha6jiUfC3GHeF9S1tMAcUjTPdTLpeTKpU5Rdk6",
  "key3": "2eSsWwcMas3wBUULjAb6mwhrj2dS8Wm4UKeskxVJ4RX6znF2uQBsAwnZfogFpEjDW1PV8Pk9oVTTFucSABd7Scof",
  "key4": "4oWS85oAEDDf5XLgCjLHEaE7XuYcV7BepBYdWrzMM1s8LsoxUA1nBifypmU25FCudLQ4ToVPqMRbfLPV3cZDTeuJ",
  "key5": "3uGCBEZAEuiB2z9JM2saANwQCBYrV5gZ8qqSwiVMr7rS8jagntpz1VKqWJDa4vunGiwizJc27DEtxPA8rC7vL2D8",
  "key6": "3sNh7incBxZhSMYTfK2h1LS9p3dTjUNy1r4UJ3PJoBkkShVfHybVpfHgnAhz8GGs9tr6ntepD7V9Nv93wqNdDcP9",
  "key7": "3NLi5LK2iDZrVS2zaDeXNDmoyzMiejxtqVkJcU15ProSwAgHsQSfKxy3guXELSWuEBvBAygjHXh4J9KRuffh79iR",
  "key8": "3ewUpXTSUyuzDTVYmnMx1yBJLhVX6hSRceh7u4HzXWgzqx5dYAMGapg1qJJB3S33scvk1JXpSQTMFkZXWJskeeAP",
  "key9": "4vsyup6n9k4LmxkePtYPSLF2Ha32GGSTAEFUDprHBfVvdAUXsF5rWfHFLVaaF5FZUHniRgn8GyQRz2QMvgvQUwy2",
  "key10": "3ANfYcoTBj3RJhkrSomGPYBLacwp8cRHeRfCCBwGeXsKBE4azsPBHkMwjjKHsSAkTZFgW6vbfiGgPWx3MWh7ZAC9",
  "key11": "5j4k9qQ8CiErQcWKcj9Rt3tCVuWQGfxGLSPzWMwDP5DRQPQKXKuttxfownR86bQCf53uyHv8WcCzmQPyNLLByj1Y",
  "key12": "2PFa13ypceq4zguxqHxy6SmY39KhTPHH7TbuvfBbiKE9TpktLweLPLXNYiLosJ7MSs3AbmiwKX9MHeWLeCw7oCgV",
  "key13": "5nSDZjdjhCQ6jUaX3c47QsV3gjWi5aNKn4B46UTXPSW15R6Hb4pVBmthqed32181RVY7JETkPkXoMVcVyqdB6Tgc",
  "key14": "3JAA7ZCMpnijAVBh91w9kjdmX2FqyLN3RFD2tRam3nUpTDh2FaxynHirnRpLXoxH7SQQGgWQUMyDiRBLNcQaxoyo",
  "key15": "2cncFpFnVFN9XMHM8CbMaPXX76uToRv69XUd7EGKe8usaLU8va3BRXnuipZ76sF93G55MFaxRTVEiyeHjBN6yQvE",
  "key16": "WrrcWXRSfoT9hpcYJLMdV5P2UtofprDq3cVpZmGRZWi2xGZFqP9ef7qkbueFkFLFz1kLY9nFmot6QMA2MTLNp1n",
  "key17": "xeZ27jbuXvh1idD3hrQ75RHEQ2XzmqvcDUnYvEAGgqf4kjo99KidfvXJ4jvX96Xz2EYZmjabBMPhvCBQsgvrGk5",
  "key18": "2xvPsXyTc14Q6t3XP4QPHaTTLcceC6fP5Pz8uLRxwdT1CknAcjBordXY2DUkqRu6p6iWEMd4yDgriYrBeegt185m",
  "key19": "CpvS7XYt7HaLMEhZkC5DqNumFf6NwHHRM2M13sPxgnDRQhnsuASudqZfnayxM2WQCt3XeBBNLGk1Czu12H7Aa6H",
  "key20": "3orvcUFhDwdfKRiQqdhf1LCux727VTiP37KZqM747K8cpHxyUDqmjYQ2Ui2nCgD5CXcsCguTP9FGaJamvkhTmY1D",
  "key21": "3wetYfrqSgaPr1uUkcMoAhYC2BjVZY1buJuw4dTtgpEdvaPQ4yeXdM5VXTWRTxhFbHZ4eLmNBTWumBivJ1fineYC",
  "key22": "3e3gtuUPeXPnjuTNKwBGfdgZrdKiLBP7LtfKy3vZhYihaAe4svNRHBUbWzcFymK9nf2pXK3cnVVsXxq7AFxUmWUN",
  "key23": "2Pw8HD3VXoJUcBy8Yxq1bEtPp8UYWSPgRzHHQyPAy9G6TMFfVb8ucvsohETQvvjsXFg4QrNmJPnkseXuEotpFaJH",
  "key24": "3sD6YJ1gEARBQeTSXKR2L1cGdXn3b6Qr3xsJCziKr5w1VNAemS8PFhKs4uLniVfVQba84VgtPaGfcGsrtcvwDdNj",
  "key25": "4D1iHNbzbWQSGa5sHPYTV452tHuHbE4LnL4iqkvbZnBGMucivwTUs5JHzdEQXGTgHtkUS4Hu3SUosWBr7H5qfyWz",
  "key26": "2wRLQn1zjDXTT3ALkgKF8PmEK1eFPfJbvZwNLccYzycBLTuMDF6gPngqPXwaHqqivHp3KER2sdCN4GooJ3G9WcAe",
  "key27": "sHeiHoRKTrywRuXCgTwrG1vq8q28SaU1wh2R6jmRuCGa3crrHnR1WzamcARiq2ABbdJi3B2WU3kc3o738gXAUzw",
  "key28": "3F6Pr9zsdqULkBp73EgG6LxjshMjiyLRYfVwziKAFHAgXvrUwqcuunEUcgppkBrRWryNhZkSNYBjVBr96WzgNpLQ",
  "key29": "4r55Q2YPaC5h6KTXaY6kA3CZxvwS1V6bFAzuVY27QeqkVbzCo7DsmVHSvWamg9MASAERK7mibK9HZZn6DoMNBCQg",
  "key30": "26NoxtxW7MCF2goK1hAMZpgcR98qLTqkF1eXLgBHrJcizxAeTgQdcgjLvecqyFGSWBSt3msgLyAKk9kPsQdcmvL9"
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
