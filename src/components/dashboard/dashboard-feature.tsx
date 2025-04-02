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
    "3R9EcXBbxbcdEbT8J174GiWk4G1xw6qf8TzjySPxZPm3CEFpL7xnRaejtWVPQyTp6muR7XAqG4TWVhRzSro6Rjoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SjSRgwtKt1Ugz2g3kxPL3TgB6Ktkg1QWnX5h1xdipPaFRYNaV4uGvFr8LkgEY3U1oDYygruzx77VcDvEcpy4Go",
  "key1": "5wnaXwj7SnQ5CADg1YUd8raLXMJXX2c4SWGWryNUy8BbsgGjfbcWH89ZSnbVqSArntBSwvnfFK9fNAZxegUf6iEs",
  "key2": "21pwJ8sZLpzxrZ9MJ3yypJ2uEzCu7cQTga9yhBEyQNUNSd8ShiipeKtek616pBQoEVBNUdaks8prNoQAnh574U9W",
  "key3": "2BWKMXb5eQDMAw1ZJKhbYeTZwK11mtaMiyMeiDUBL2mbmYBmCNmSDt9J5DmEtUqpnJJZTtVQSU4TXKUyp3rD9ujA",
  "key4": "SaYumQpuMAcDN322y1eqtRDCBAFyXo3w1cE5ZJPUJxj44mjDfZs6yq3CzmnF5Ju2Sy3h2m9TJBDnV7efHayBCWu",
  "key5": "4tbRPhvS6mAc53myiptJppMHRNVydmMbisAqPdy8emz4T91Z9gZumGMt4X6t64AECGzmUoUuENETjiEvV6ZFEkM9",
  "key6": "5KfWEciq5KJmdoNy6dki6Q1UigrSxt3cF22ZyG9Hs7RkKVqruwQ3n1d3ipgkWZ19wRG1NSfWLw4uCCxHAbFwdSKA",
  "key7": "5jvrCkQusefSNre1sgiYy5CfTPv8PQH87aXR1EhCaFimgASHFykGhEJHAidfwMEEjdv3bRf4Je2t85hPYyisbqXd",
  "key8": "5pYBRF3GneKqbnt8X2Y1abvJsuY4NJkgUM7jBBgmEhrpRUroUN8DxnXGLJjpFK3i6dj3YBbPtHexA4cTuHaYJmb",
  "key9": "63kbaYUH4PXPfnWQkrmntKxCdichYh4uE8vy9iaNExKu3Bsqx3EDYJqn44sidHwjLW7UtaWkqcaQrsbHiNmEV8Vp",
  "key10": "3cYBTKtHNzWYytWD5Sy6E2TowvCvQbEBeJs8JUFS65WzqYmt3GPWwfbu1zdfyS7xaGWVa8Fp2wMQGZkTZwmtMQAr",
  "key11": "28pQPgmn1XstDDukBN8WaGYvoUuezPwXgpdzvgM3iHtmhBftoqE6narY2JFqJajYseXj7Nv7nvDUArJJawF4Kus4",
  "key12": "3vBbLEoeZFbhLn8sigAV16VFaWSX38XAVyQ7cMHoskg8MUNayMS7eCs3HvVJd5nrgh1vtJPZyyaNApAuaUMiu6kk",
  "key13": "5Pw1itRoBxB1obmXSm8U77NoLeSB2APggoQPzon3J1LQ4Yk88Vwmr1MTnBBnBjpiswfW8EM59kan1pTuNw8hxRA6",
  "key14": "3MuCcGBERKVaoYDpECwTzKPvG5g15JYzDUTv6LpUkwbvD44imRWwLmxhkfF8XJNNoYv2XErgzgxuA4EnE62S7ivK",
  "key15": "4hnCTEbS5oRiMqM1TxZvoPRRx3YTcByf7HYMTDZ5SeCwksrBdXn6kyqKu8utfieGeZaPGNPd6L3qHUqhLUYiwXFg",
  "key16": "D8p8S8cQxfecumuKCKozqeky7ss13de6TK5C1kTBCr9654Gsyz7btf5h168jwYJkQeRAtd9PGmncb9fG8TnbESc",
  "key17": "2yfP7V7bWVTV2ChLbSsxVs2eYy1PH26NobbU2MKmT2hFGWCaKnZzt9LD2Uch9Cg56CARdjNz6waTBjznbu8KbwTf",
  "key18": "Y1LhxnqMwC4ZNbBuR85WDmNkda2Bf9pRpCfrqqKFTQgx3GKzPzYcGMgGrQixt8GDQzhVTf7o2Z55HJchjc5TkWj",
  "key19": "5diNLM1RWC5TmjupdHSNo9mByMzMNxnPPnbCXCjdwnb1oeG2o157XUCRjtwdTPj456TfCgLEGouqk8YECtUxyc1Q",
  "key20": "2qQoFchgwj9p6MUhtkLzUqXQgbvm2NgHZoAgjeVnoaVgBZDnfzc7mAScRgU6MH81pf1FP2DkbChz1t83NNd8c7Hp",
  "key21": "2HWQtxvCDYMCjSRyKWmygK2UqRvPqSWXVbddraLUdYQGxEmeFKavM1GammhvUmdrCM1aGGJJbyUsAL2L8KXmFAr4",
  "key22": "5bLo1AgAgFVXHf2LLtyRTmxDjvF9dkQZfoCgwRm5fEhUxRLihCnYZTWxdwWZzr9PfBBZqgpjpNMsnPJZ343gG4ZH",
  "key23": "3GtVtDbSyo2urNYnNT5BmLbxGyBo2AUnpb7Zqqa1QBqRGBdtqnaztW8nCYn4KXgg2EkHhk67aYB1uoCPubgKFfyD",
  "key24": "4om9fkyxrJE2CsZNnuRMV8SMHr3gZNCugpaPjXvsGyPbx9qTsk8wxudKwWhKQRZjLktNdyo8o3wvn9cm3nyiLiz4",
  "key25": "6mAj3Vp1dvWUbc8Vn7gXHawKnZGgDLnQGNK18eQR2r5VHsc8ZXCh2esWpCxXe46ffQiAknWxJfrwJ66imymCdpP",
  "key26": "4kuutUqXeWbh9TWNJvttsiA44BkctbLrL8oY2MLckWdGLj8g7cq8YGncPktW5pjJ3DYupLAADHoFE8dSV7fZ7TXa",
  "key27": "CwbsDfSB8zuB7Q4uZxAxVW2Xq4Q4uME9suNvpA977nc7xdAge6q45f6jBr8FZBLLxKdVHwqTokBczqRoUNEdsVY",
  "key28": "5HnuAsiguWHwKHwap2m969moN4UdfJmy6s4gg9HQmujvcRU3Fi1HY2hGDWv8PTJXyzKeiEHMQvHwf1FHPpKDDBy5",
  "key29": "5awHgWHdijDKED6ZznkJ1ds7vzzV87v7xjULDTbLkKhWdZPFLkcwc5s2SPonJNpz5TuRbCEy487voVsM4SVxdteU",
  "key30": "4EMXFr7JchJDpbEkTe26kAnSTSs2ZCs6AoVaQQzN9mQSAiyXVzggjnnAqYzE9E4kdsa3qTkBznVQKR4N5Ru9mrDC",
  "key31": "5RgvRZ9FTwgHmqeQXZ3Ut1w257KwTEjfoZhKxvHios53cToSgoWtJF3HDVyG6WXtZMqKkdi4xo1ptG8UHEXxy5PX",
  "key32": "2gj2NorzTb6QD5Kj97pmjp91wZ8ui6XkgsxNR31GwN6otTvH6F1eeNRS5b5VC2HLVU7a83KzoEHavAQ71E8WsaG4",
  "key33": "3XZ1H3f6CdAXquMqBXzmr6R5ebcjLt11zayqHQE8Mfthx9b1CVGR7AhAWgyUg8VTQoGuKcNbth5eNhtXdNjijVBZ",
  "key34": "QZNsechhCGAvx8JTNVzF7g2kSpwGBczGEx4afgMmVHMJ3aZZ1iQN2sac6dSMARhD9bqxUtbJCUemQ6n7uGqg8Wa",
  "key35": "2jQ5dFZbGM5eLRCNB1s5WWjbdx3JSLJM2oMDLpEzBfeaDoVccbJbCa8tawpDcjHarPgQooE95D8fD4gDxqZgB69M",
  "key36": "2hptfBbVgaKYqoXMqyDqp6Q8TqwLkcY2vKqwcvra2ax6V3XcoBhsfxM1faVe4kZZjwbG9PDdD6TNSS4mNozhjqWV",
  "key37": "kxujSiV3DExnsmb7k5pZvUUv9JfUEf83W81pJ8yv9hoyjKeoaB3SJhqq6B2YPDvTukuQ1hZt4gHeGJ9tNYEcXVr",
  "key38": "3ndWaePWpM5QdxvJZEapdato65ASkCGJvxRFQ99Ye2XPWv8ZW1mCmzYtstdo7cd14V6DxZ2n877M9JC2vL1jTKEx",
  "key39": "5eUPJJNyxYRM3F7d2pDD1EpZFtxvSvVnUcZXuMtBN7vsxhKbfK1tiP84io4u25H6VspPrToHDDCM2LWDzoU1jzgP",
  "key40": "4eyfKeTPBnfzMM9FcjfddK5MWFKQhTCNpxyddAqjwhKwrrbRUk5o9gABniSamksEpdMrcMA3HUCu8F8XsRYdi7fB",
  "key41": "4LD1LaceCn1sVDxi8SVwpCpiA9bnejxnPcRZXmhs5J2nhGinVf6zNZ9LBsTDjWEzgovYaKefUGrxNeSPK5AzXph",
  "key42": "66eSZxvZrAauC4GbtQP8NGwuT5R9f7gJng4MA3stL7gD18FTNmnnLcNbays9ytUfqf2tKb5FhSouqJ4BLB4txMLM",
  "key43": "3hm6kkJynebDMYsxCKynt8berYbR797mHo5ppik2j48EUAZX3vdSg2vtvMsuUFjwEmngzotEMggEZkfxDb2fSkrG"
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
