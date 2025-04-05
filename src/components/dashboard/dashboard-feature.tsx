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
    "mgb6LhoDeWmbrYwzRewHSKYntr8feNnXdVArdUcRbw6z4kZ7bVe6rjcLnuih7f7BTRzY9NXoJLSFmjK9ZvDYeqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HCadnT4J8sZa6to2XK8dxUCBfQ31Q5VwshypaDJzv6YHMuixHuG4Q4jmRZ4N1D7UfUsv7g8fUtu73KCiecMjxDn",
  "key1": "GndjsEZtWYYYJSk3WHMGFtr7WKAo2mTBPLF9uLfGzEAhhqYFWHwXwgKNLPPj4sSVxmTWMUtv7QgDuoB8VCyiv2a",
  "key2": "2ZPLbHDBUyyfeDSJ4Jg9mxM87RYQ4JYBK1zNWFtrsAYMYtsWGKgL7MpCYChKQSvqcPacU9rhVjb4WREDmdC9cmtR",
  "key3": "3qUPD7nKXWxsQy2fWN342dw1FxnQA4raT5CafaiXAXPLGZDaXLHnCzqpFDMLaX1zpM6UopUJt358W3WGq8WR4Ut9",
  "key4": "3KzCrAxKPBtEdJhqn6EbF9LtkVWguRtov77XFW8KYKnyxhe4D1Do6C97fYiVzDfZXeVx9TSy3TGotdJ8nHsJHQhH",
  "key5": "5TA7J9fNLy4LWoaWyLjXB9ofVc4PPoBg3U8LdP1mAKEYksUNciNEYreYDH2TqHJofmwxBUr6F2AtiKMpTnuuVZVG",
  "key6": "3T8B1Nq2L8kAEEAFLu7nrJEPrGJ3E5xK6UW9XQkPm7JrsXq32aKsjFU3HQRKKeyQQvjRcUkAhJh9CfjagLX2sACP",
  "key7": "4ws65jD2i21C2hAwz1VUyTBf1DrKhCcP9rqYjFVM9RCApS7d6i4ReovGVL1s4oGsDrVrThSLkYrN55mXh1smbP5t",
  "key8": "62sd5WwxGaj7QPH9sHGn3fjCYzqHUwzr9jFdHNiujrpq5ciRPr3GypfTFMWoTofNSspuYW7ygRwkq1gXkTzGKxf9",
  "key9": "m6t96KdS4FMzcaUfF8vbXSUaEqiUQSxt45xB5vL61fZW23bPPTAA7Q2zb4kLk4ZXptsrBYRAPdijaH5APeTNGW1",
  "key10": "3C8pznHwGUNNbr7qUpoZEKLghntjLgPyz9xvkZSHE1vj2LodjK4Eox2iwwbfHQb6aAik4GGBT68vbrmcXT1CsKyk",
  "key11": "3x4CmG8vwSaDPAfD46ZepKTMx7RMRg1appvn11u2DLYq9GCz5tSbgHYRtVL5dgfnLwkaYXQuh4jPzMYp83HED4r3",
  "key12": "5KNsezdeqVW1eQgNLsT8UzDLNKtDWuewCyPcvEyqcx9Dj6RJzcEthxq1bA4bXY6wMZ7o8rbmd9x7QG1GvAr2ZSiq",
  "key13": "57TvjQYg6c9SA2VWHTZnjemuPWcFy9JNkJrjnHpYUTGNw93yxsFeMDxur7SinjiQgTtsaui2AZRjZuWi1DybvqWq",
  "key14": "5kdX6rcx2Qs5wypbA3ZnRCcLPWJsq54CASnjjYVQ8RBhPXBRnMCdFZaEGdoTjSgnA97abBnCryrDdWVHW9BxZFhB",
  "key15": "4DQYsekFCXjqd9yWqkR3Ab3pDH2UzMTMMW2KgicxUL63TBidxBZTd2bZvViPtPua5KsDaFwXn3cHyHCzxde9SWgT",
  "key16": "GXNM9X6dY3hKqUentuZreHrimmp15t5wiNo7xLkPw4FRzLXkoJpFPbZFAkFLcbZfqy3zoYoiJ7PMomz84SUjSMf",
  "key17": "4SP164TQBEECEnsRpzieKdEhpPNZCGeHEEmS8TuV8vXEUQtiCR2ANRNK1pvXyxbkF8v6VwNWBu9fLBDqGZPFH2Ki",
  "key18": "4bUR9EPy1XHNhfK9NEr5Z6xaYysYRi2kHVc6duhg1UK1q3EWqTpd3DRQVQNL4FediiNef2FnYe2rMPER5GFmT8Nh",
  "key19": "42MLm3U8yQSc2T5TmAiVQqMNcYVXeF9s8VTeNvpX2T5gUwrBtuDZkabwzFRU6jntAVCPDMxqY9Ydmy3FPD5BmkCc",
  "key20": "5qszwN9wRdrac1N41fBV1YYNA7gi9cPwqxVC8E8ZBN2e198MBiqv8xbbfHJUHaN2Eu9GfouRmGFWDt5kBQkFRAJ5",
  "key21": "3279rXeGPAmtrkNZqj8q6EE8NZDTiWsEJmxkeApFca9TYnJYhddr1QguaHQdEEqxTy51P1WbdYkGWD1osrrHQ6gn",
  "key22": "dNDbvFZJYLHFZ73uRQisFHCQug7zsVWuJ5f77ub4nZ63zpnyJMwTgAnaG8mWQ8ybaZFugU3WxRianQgdnN228t7",
  "key23": "63vR1ADtDnox93eEScz81f41KYSBJ41tsFSaPvxTpFvRcNn6RqCSXcJry4c3VYdLmZaCcjYa7QwmHBygqCEd6u8L",
  "key24": "2gvbThjRKMEU4jRoVXBQ9cHgVZoam5NUXxDDhzGGehbj2LcX7o1czmYiVD1ffCBu9SEr6X2zGtvnL63goYC7zDgs",
  "key25": "3jABU1dHLotXtNKFfN8Fc6n3VTbb9SCA1qG7VPiWysTYy4xMnnJVnP7DtFz3Vr7aC2JwXzwhLbm3miEsYzTfvefb",
  "key26": "7TGb4KUntyFomqityRV8SceNsR4L22UambW2NMwLBn2wt4tMym3EV2xQsUAPdtdyfywchfdpiS9xxvP8Md89w8N",
  "key27": "2ZaBLbp4sKdbb3Bx1mm51rtDxTtzmcWntmFj65qasJQEsEvpJTABVhnR3UUYzyweLRT1ucptPzcvfxSJNn3m57yU",
  "key28": "WK6PUXPkVJyoKRJ9qqbxUtqibshiAt3TqUeeW9t4PHc4WtpsdGK6ofKVZH8A6h88EPJ3N2DfoPXGshYhjPbS3wr",
  "key29": "ZqETonRp2N1bgfaBsAcg88ZT6AKLqQqGBuPhHjR6AzvjPzAMdTcavTCQ4pwypUhjM6nwhAWtDY8sTUQthqaWobK",
  "key30": "5RndfYKU5AmLKScNhVyS6dHaw1G1q2VPKDyRiyrcR9AXyzSjKTLq62pWogu45cSw8nCALbeQrAMtiAqFe8JzaocY",
  "key31": "xu7TA4gKRqTMK3XJDfthhj5bteqP6TCfdnMzBg18qom6VEEWAPFNndZzy6DxbL2JfdYp5XMNNCi5j733E8PtUSo",
  "key32": "2Rn7G6wadZYdrVZnetUQAEeyvDwqFzn2qx8fjw8tRxZRTopc8PfJ8VmM6QyBmbCL9q5HvR537kUeyJmiUp5PYh6g",
  "key33": "3F4ZVt1zw6ki5gk8eYChyDuvZWm1sJnYJAtowHdUxvT5VwrKaGnyssfA7HsJ4Kdc7qxp9pXCsYvYrvTnT2ifgjR5",
  "key34": "45qkVMee5R4nm6ER3nD9Z411vrdLkvKbESor5Wf1Fege5kGth8QnVWSuqZx9ShntRWwLZgaWwCKZMLt32d7uicCV",
  "key35": "X1i5PxZi8LD9qQxk5hRnjCLuLtLCG6cQ8UyQ7GyEU2A7LQR3ziMoui5E6jpdxCpYEpxLDMaeqLvt45nvN6a9cKn",
  "key36": "dVXpmDsdd2fQHninrNxaKzBxEiHPRvC4k3pAieZU72n8M23dr1kArNJ3aco51DvqhMxyGzimiMJiY9ch8TMsDy9",
  "key37": "3qwQ6K93xvXJYU7BGjz58gZLvHHf2DVrrcJcEfpSKpfpKnDrDea6AiBmxvRgJrDJcY9gaQsfMoSh1xbqiRrwAhQg",
  "key38": "3vUdDLjAq1UyK4UH3nuD1XEd9P1peZTnNXWNkSqfWeAkpdAGQNV3ofGmw86CY4RnzVRK4wmUPbNYHFMRCmkfg2Qa",
  "key39": "33FteCuxhbZiRWrCr3LcEtnC7CCEd8d4DA3GEMGGAxPAJWRyTFtJeKzXatcNwujuyNWW5WM8gW5zNtm2iUz6L4pB",
  "key40": "2KmzN4RwznYm1nNZzB7Bk18JADfEYUoDGUAft25sBqyhKPXmjN3z82R1dvV9AQpBWC1sw6mKg7nBpFcQZk88VzrZ"
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
