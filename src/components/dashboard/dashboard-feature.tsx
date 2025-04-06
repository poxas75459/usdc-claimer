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
    "3pP3TJ8ehrzZtBJgn7Hu9uz1ygRFo2Hij7ddLVsLoKaVHd3gsBoyWuf5ruhxpF7ebkDaThjPHR54iR4cYCBv7gpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rfiq3oSjtXyUR1otjubDPrM3UpxSq3fpuDcRh4Lw1u68pKiPVJrKVWX1mPQsurUpCwLGwEmYLef6RTWwFk9hZfo",
  "key1": "qu2Hpo47BaWNXMETUae1cP8xbUeMiGhz54dqpJaxeCdQKg89tL1vU5oNrAecQAhTLEBcyEoCr7d1XRfknNhWBhQ",
  "key2": "4bsHUCCMTK7b38M9MgdgPTm4gx6aoqiJn2RgLcLyWLV4zoL47rjtg1SbrqAvvC8DcC2woRddtcZK91Dre1s3PTxs",
  "key3": "5CJJeJmA3pnX45B61NF4W8zLniCG4Qii62kuFgWabLdDkBVt8qwPRsS2ywwWq9fAHrjW9tV4wdg6VyQUGLggxkwu",
  "key4": "2z7Hn1HB4x2ZWNZiT2LcBvZWvtsGt7g9g7CCXxCix2p5o9fHhuMCpfFuVpkPjXsSHept99FhCtv3mzGJGaeYLkPQ",
  "key5": "51V7FdczFTPmXWMZUfHkXsB2VdXHZhRsPET2dvFK5trUGo483M3yteF3UN8yGLhPByxTEhNoFRBMaRxz5eP2rngP",
  "key6": "LFrueRbryQNUrSXtRSfyaxuAnxwjxqyGjjhnqre1wq2M8bV9rtyo5Abinz2wcxEUQcgFMP9bpsAWZ5ttg74Gkcy",
  "key7": "3ivTA3jf1xQk5mwmoDAnrqmg4eWr9CQxaqQyeHuDuniYu7XJWV7gR6ehLmBXkB1sBTmSD4o1JY6n6zQuJPNnKUsw",
  "key8": "3ozs3w385g3fAYgGEdSy11hSszsyVsEAyGxKXX1ipPLbkTL7nP853JxopAZk1KPkpN61KxxcuUWmUNyrBiNx8Vcm",
  "key9": "67qdPPPjfgW83pCa67mxLe68BrN2ehsjva2iVSTKKA6Dq756tqK3zJaNhmxCByz9KmLd1UYTvAnYx6Svptzq3FzH",
  "key10": "uKukkyLSHLyMMtDVs8uov8EdtZ8UYdnVvXBmAXRyE4M3hD4UmXW34pt12cqMEgCq8PvvQGDpxhH2swxG1kBjPNY",
  "key11": "2Wf1RVGDH2d36D1RrMzQ9uXHpDAzr2AFWZCbfdepT9yiYsYLL6ep9txQ61R6crMkZ8qNjkGXRgb5PxKEJ3miCQ7T",
  "key12": "2eFBdeHDyP5tMcW7aFQQVu1sbVgf58DAwqaNxmHzedqcYF3RKwC6bicBnwk9dbhVaPTxZ2x8NRGBM9poGUUbf99",
  "key13": "3k2tcZdeVE5uD1EdP2Q6Uxg31M8R5LQ3bmbpSoEdcXiL6MUJXxDiq47KQ6ZoRLTXGXHd2bRuVCNUNUUyr2P2MpQL",
  "key14": "4SgpzM3HfzwwuVHBY2hhmxia2UJTV8iigWe81HdYZMpou6fzrqjwCxvcUUiVR59BdDr3Le5oSnBYopTKCnh4vAYY",
  "key15": "sMxHo4ou6WpNoQHZg8zXdr2WWwXmNmEk2cDrbqqr2bPRVCqEGL1XNMNnUrQ2X4abJsN8kUU1CfYzgpcoKVbL9NT",
  "key16": "qhBCwP5nY1o4T75Z4FhxezeGeXkNzsdedYTp4nr29LHiRmsMbXTM6YX1u3BpyoL6qVEmRAVRX6qfM6HeBPezraJ",
  "key17": "5gS8EvC6xeL78dPtZCBeYbyNg18UG6tAu9mUFKcqp5p1wJ6tcNLrEJnmCjwsuZKRXjFUagE9PZASXUJ1ppwr2fsf",
  "key18": "2tQXAcZfSAX9uQgd7ybJTABgwqq5eGfH2Vg9xxmNzcbcmjijksPMwbyVZQRrkkYVoGPbmjtAwiyq2rKspTnc63D",
  "key19": "2yv4P9uAgcCf27UXhaQrLS58NkNoqWYK6r1u2eXwSi2vwULvpKKcAnZVxxVKA7TbkZhogFzUu8SaLeZSAThJehe7",
  "key20": "4961aNWb8MWg8NsE4zNARi4nsY2KNYCYd1HZ5RViJmnuU8W318PnuwD6q7dmzXZABUegKzsajxuTxoTghjWhrwdr",
  "key21": "4oYU2vQGRFF3vBiYXWM4R6B1SqHDhtLTpZK9F7BQkTUn7Jx9YV96g8D7Px1DW8kLrxjbHWsp7tcZcS856r38vzQU",
  "key22": "39zwxLG4xc6PVmqiqVigH1agAx9jrk5osuzE55m8ZUFXiWTHJD2TirneMZtwXLwW4d2p4SPjqrbDqaawQ98issNV",
  "key23": "nzCivYxYEpDz36dSv2dUozQdqbrp5RMFYBXttCQMAGZSemxmCf7yKe4DmTUQTuQWNB2xd4hAUL4iWtxH2nj2dXh",
  "key24": "KdBatTckpaUk82wMdLendFQvjevTCe5fr5YRkdEwmkyrvoQ2nUKEwTVHSjqTSmrf2HTCUxDFF5hPd5sd7eHmnbc",
  "key25": "2nmhhE1dFwfGeX3CVvmcEzrG9mrjnRvyZuWYvSkcbZXeffmSmSecf1y4wVC1AtZPsjPrrY1Dg8Td4dtdPJMsnPyo",
  "key26": "3A9UbPLe9DtnPUwvRMjkdhpA7i2Aj3oxFv9FXcCGYPNZdK3241ErQerFuM1gcLaZB4ZpEYsQoifA7RoWsE1NCUft",
  "key27": "5y7GMYVFYUEUuqVtWDAeZgk9JsPAR9Qj6XkhQtDonfNyKKdzd52czZ2WRBJQve7vSBJX3xgoG8xNrSb54q6uxqtH",
  "key28": "3mYHED8ZCZK4Jh2SjtKWeGi4j21QjtYUyLkZAfe1heEH6kN7oVDTAxMZZER3MyumVfoeXHmYUmYnSDwFr7jCvB1F",
  "key29": "WCky9gd6jFc43hZ7VLtp57MkjGgirTv4FEATHeq4AadQyhspE7mR9fNRvp7AxZbVQiJK9MSXvEsaQrQDhYYX8es",
  "key30": "2DvGfkyESG9G7Yw15BG4WyhyQFVoJmL8ntRs1g4xUTDoLzCM2sne1cMtjToD4mpJXUyLHY7LnwhzHCwGTtQasQeS",
  "key31": "3xA6SXwE4GmrCWXdB8A31t9ctEtufenaf8uXUXr1e3oSzQzXoqMwmDpXNwTPDtWubP1RRQ3bkj1KyZ5XFbXC7vRb",
  "key32": "44MC2GUz4pCGDZNJHXcFGVLbpr4dJuV4YPAU5DeydMjfKL3AymnSi2WJvZ1xagiHMydfciWjD48ozCrnHrrwx4bq",
  "key33": "2CepBNmBv2Wmb338kzpGRYwJV1zvXA9dZnUABDQXrGerew4iet8ETsCtD8ujiMvYoyiPPHTKhGLx1XHPAJSAU1Vu",
  "key34": "3mf3DLoGJtbV7iEA4MSSinbarmdyVf2f1EQUh4SxYtUjZ6KggDLVRraWAwEypgiWwoF8RYCRUcsscjr4GQzp3BHt",
  "key35": "BaRL9kNnBnSFCd4z5tRGnmobhaSoHgWQqL5gsMUvkMchT8NsPL9KuuiowT4rnY2JefnbE8G5d13TmwdjUzyANwM",
  "key36": "3yEcYQRRTqHDer9Gd75k5CCZ6xbu48zp6MYKQqV6QZxkAXtQdSqyze44x4xDiec1XcEPRXJp5iQ4BMy9wMK7J33d",
  "key37": "3kpjj9d2SEJ4vVFjpQuoR8U4XhPn1oS1f1C9hJYoR7Chjv244iJmhdu6GjkKWdfBy6eH6L8uL3nWaG4c6iyaqUfC",
  "key38": "vRYTpH1CnHHvLZJ7TJyucRTibQwkBRggu6JVPkC8MF5YH51S7g71C9qcA9gYz4Uo8MVd4HLvsU1DJ1xnBZCKYNZ",
  "key39": "3UAh48gaXfz1YB5rk4otZ2V7AjEEcymmGQ1AecAQ2PDs4UJBZLvPx17JvNDAuRZbxf8n2d6HiryqMKxpvRm8HM6c",
  "key40": "2J9cUGwheR2RskCt4FQ5UQf7Yzrp7e64L4u1Kk8EnHFH4uBJErwLKp4dkZHYd4voV9Y9eaLGpHL5AEnSk9zPob2w",
  "key41": "3sRJrbNzHSTVJjG5YXVrZ3jyYunLahaYmbBSWMAwBJfiXeBYDuttucLLnqETeNx41ZySKh1uDbjtkEoWyJJBkYp8",
  "key42": "3aHW2P3Q4xyb9n4RxpNDPXw8FXH8M3QikApCJHbLSNyjyzpXgbhX9QaCGUsssr9dDgqZ62ncNpaQ5Lb6wFgcHifC",
  "key43": "25CEddBCgdWmxgcvf6KHdU66oHT4KaQU7CuH7GJBEZvMSsDmPJ7PF56H3YGgnN4Px3EeSduKXTdFxwCfN7t82ytn",
  "key44": "5cfQ78KfBpvmjyEakwmjQz2K4udzjj3v9kxpammfoKFMjzyG7WoAzBvb29iHTUXRigE36N2y1vrvFsdDCTQtSUfJ",
  "key45": "rEZYeasZQKbcvjSYeS6P8Nc8ALqF1ZAwrWXE2w9vuW3fwaKNk2jswdzamj41gzrfgGHMEmPyre4nPBfTuGeuzEp",
  "key46": "DfAPqeqS3ANXNXpSn53qHmPJomzPHjaVSzPCokKtmqDvHfkB7XfXsCMJhFZq2mX8fUWF3VGqwXWQH6PaX4JFyaf",
  "key47": "4PwaPmYzFui9Gu8y6Ndjpx5rCqL6LvqU1sneX8YFkWEkHP5nySnTSrtjTcNB9Ser7m1V8JihpLSGkkQ42oRfxXS3",
  "key48": "3WoNhbcupq5ApjiqV4ok7VS9cjhZuVkkJTNUYZpsbNp9UcBjvrybTUstkXnLjpbLa6TfiD2Q2qodUmdVj5c5LxfU"
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
