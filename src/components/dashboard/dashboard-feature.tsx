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
    "AeRpDsfuHiRVBSTC2L7jNeXgSRckB6Ch6CvjBpSP12kJgM6fiNAr5v5fTjvp5wWXU7H5KpyF3Csc7rcBxyWXdT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xrXRxDvZ5EjHc5bPQij7yhErCRgK4axBFKQnqBqHJWPHhPQmGutFHZL4pkczg8NkXghjDBYGUmkGnNeH5QvGba8",
  "key1": "47AExcMzq2L9JmpqwntjS8LPuJZ3su3o9DncaAny1wRxGvn8rgCi69TSqwhrfh6UomweJmoZtPAosHuLf4WHoLs8",
  "key2": "mHKkdgb3CE12EwAD1BAwksWDbFY6QqsgzwjoRZ4rWCUocxtzprAije2L2DwimUpShMvEH8k6Zf58EkpLSob5ALJ",
  "key3": "3THdzsu74PwpBayePb1QneAzknikKeq1vdxBnryeVk6vM7cejxiMunXmWYbzn6TdjodbhQQQV1Tn7LQYQQ3nnoV4",
  "key4": "3EjDjaVhoaxw8dj2usFhmH9wXsfnoGAWD5zGEnghCXeyJr4E7e81ihhdj9LPyaEzYZTV8Qho7xBm8JFwbvzKgFup",
  "key5": "5Bm2tQWyAo6VWzhBi6oUFPXbFKmpJ73Cu9CQSFRf716GLYkH4houx6FNnBkbNKHn5igG3p4jyfmkcb2Pr4ctyePZ",
  "key6": "5z2DKyJ8C3J3E53zwHz1EgF7Ueo1ck2TexbMStoDraUGwP6geJGqTn9kCThzbiwpj5e4ckHT1GbChp2n7189fBRu",
  "key7": "2RwYxYRbbaEa9QCsNYRK6YGsYGFXe2ecc3eGrNiNoc468Pocb6BUoDZusrNRCaRYmp3NE1gqE8gvHrDWedMXfnZp",
  "key8": "4SzSGpBRvCMwV3Anwkg44NDcRUwUuvkjzkF2xKxFscfyoRsNpJCzp32Bx2skS2KqcVkNN9csHs5vtzwWzdXXHbfN",
  "key9": "4udMc7mVsKMdSWc6SEepdFGYwQJvaLpHsTs2g6RgiqXrd6hBjMpcCJESc3NVbkZFL2fSGBg65rYvT3aP7vq3xte",
  "key10": "5izPuHUpKkaVDezzo4diyysahT1FCV7Dn6swiy6q7fa3wktjnM6sHoCGk3EqLkFx41UESFPSQ2BhfWbPjoVvq37t",
  "key11": "3y3AMoejzMgTLN78jSaSEMZe1wrAgkN1R1671TKMwtVEgB9rTLpKhyUmM9Drtk4o9dqw7ESQwUCciz7dPubVFAoH",
  "key12": "2Bqdyf3kpuNAcQokCKto9fg3Ftx3CdtsfdiqR16kejmmNQ2n1gYKaNCbbu7d4gWbHRtMJP5UHmDJzEUaHeHQibs",
  "key13": "5zdocuAYTvefhrsZVpFAMjomxgXa5dbMWqha3yJNmSadBPv3PTQS4rduzLirKuxpWU4Lp9rkCF29LpiQFAVzYsLL",
  "key14": "3JQu7RUPmrnWc3AsqTZmsmtXxwfSicDLTqfHJMaQDnnfdoJchprvAYPdPmuDUUYJtH4qhmgPfLKTEYidW9bhGJCX",
  "key15": "5nZAWcr6ovcAmsbHnA7Ckkj9N42DFNVgdzozHYiH3pGf7jFURTYyCiZUPVjgE3xhJF7LBJq7RrsAXGYGTaTYFVgN",
  "key16": "5BqANXE4gxedgQxfxLfX3HSaDzSTNgq31CNGbaJJSPQFesDtPSe4qjqcJGwsYBPEaJzNCCh26LHRNn5rAxHqJYsk",
  "key17": "5kZf7DMMNomgSDwawsc5E2y5y8LTEWg54Zu5z9eNmsyAD4en7RTLYGd734geh9y1LFCEEtmG4g7XfeNiEXjLBHzL",
  "key18": "5XJbQtaAfMSJ19sfqMUT56amFDYunWtDTjfTfDEZcPGe2SLVkutdj1qxbqKTcmJKKv8SJT47DmvpAxbeXgvHeGNs",
  "key19": "3yytp1UjCpeuo64sDEEKDZ2JQR8Fp4UZhuea4Q2LWa1RhcNne6SwZdACJ4ySfHRrToM2JUxWmEMWQmLLQ2eQ66w9",
  "key20": "5sHwBXvv4DPoCpJzghs362VPcU5YZFyDXRmLRPNtiA8WgcUSqxRcXKL7bkv7MUv7q8CEZNZDaiw1Xqg2tTVDW67E",
  "key21": "4FeQCLLXxNzPhXV6TqXbLAa8zBNojLJQT8fm2FPmGF8bjqtHHAVty2VgWp7MqjESHkm5M7Rq5bNZpR1YjaJEmCcd",
  "key22": "4pXtyeX2yohPnqBA1ymGwF6NvaseEMnTKXdWX5kKopgBr3WbXdiui84TNz2U7mvMSJAZth5cGFyMaQm5GVCAYgab",
  "key23": "4P1nKugmjk8tcDyhKzwjj8abZLDrxJrzzREEmxEjTbFcP84ZTLFVfPF6W7FfBV2TDsECzG82k4pvM6eZhynPgJQE",
  "key24": "28y46sma48MibS7xmudfYjGLcsQGDBAv5xM1wC4HTMiWTBdWha27m6XFZsHW8dyTLNSvc9hS83dQfWzc2Rh24xNx",
  "key25": "5wPy9bHy51T6b2yf4TjXb95EHcUhV5BPNmLNgkK3Q5i6KqRqzKg3ArvynDsYAKLgifGuv3wsoe4UTEdd9BHH2c4C",
  "key26": "5XgcDn98Ek19EBgmBe4cDfPNDn27kmDA2XZapt8MKATfa7P6C2EUcv3UqJtcfdTUEqyiYNZ4SVwcQCzT2F8oqB2s",
  "key27": "5z7m9u6pPPDYqBfD5fTGzotg6NLGpYqRP8JHrcETHH6hwEXg3j9ZD5TMaL5BtH29gtGPwo41Hy4FN45yTqb5Fjyr",
  "key28": "2Wj5j6FWNazw3iZyWjcrggF6U27ic5oheiJPDBuwL1SerBwaQh8gyamNt41R44DNmXcEZU3nCpDxmKmVqs7MrNhP",
  "key29": "5XnQ2Y5F9xpCp3hWuq7pUAqWJyXRm6vbYJRRLuuqBypUqV4GV5edjJi8JQVe24bN8A6ABPbc66CABncfPJPS4UrM",
  "key30": "Reni81mpQ2cCp18TtRD47m9R6bGuLYVJZbWsiuUcx7WAjSCeP4NMuZ3x2WYGJg42ismwsr4sQQAhtkqn69nFEca",
  "key31": "2ajijphTf3PwzjeebsLF78WVyyrPuzuf88AaUkCVcjYGfkf57iNF7im94Fj6i6gD5nsveMba246LARJ7Kr3GKa9R",
  "key32": "37J42SRT9qXgAHw1zvPa4FUe7bY4Zen6GHRXKo8jzwdX4zqQ4Ekag9QudUmn1dg8gsMpwPhDyCXQufQTN2j3AgV3",
  "key33": "5deWoQJ7ipuNpiLsmLJZXN4uvHru2xC47rwVgw35uGqcJN2qCEpzfGba2Yss5iDQ5gymL8TJFExnGoZiTXfKEYjz",
  "key34": "3vcTfAFj5H59vz8jGFA558GL1rUs1aP12Kgme4oLnaLcpRz7yXf5rGpB72aytymp3497EcoDS9qNx7UGDmGpDMes",
  "key35": "5Lg2tbzRKUU32nEm5RpNcmF7VFFAdsWcAkq8MRzW7KDDaXS4JpvFzwG3QejdMLLV6Fqpbho8HsgLkeA4cNKeDjhn",
  "key36": "33NyNNhDm2iwU1wrB9q7WMUXYS6MkcxbfScV8VFi9ftb7rCDgqA18vPgphHvqbxjwABxFnSKenA7cDo8ii1AHJaE",
  "key37": "4BJDUGKDMCVRwPkFR7CRVfqRPCAYfTGMHP1w9kZT5WGWqRhR6KpTh6YA7ETMTBHHGMND1sDp34L4JExMNNKn5jwM",
  "key38": "28D4YkCPyyAn1bU4EqRerRe2oGgNycHm1LV1oGEujU44NXepqaU9Ch3NpfL5h7XDoDeKZ15pUR7FDt3HDLGXAMsT"
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
