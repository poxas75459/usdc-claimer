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
    "3iAN1bZaSFeqJj2nS44FhUGi6unoMcokKJLimPMDvaKQ9MVQv9vps2vjf4HgDBwED5fdLkPSEq64mFvSZ5rLja4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5givbPfDVE5KupunrCb349MccAktNHCxDdeutL2f7GhM5oU2sf4pTjLz1gCWJeqHX5swD8yRsj1aALA9xkz7u6ur",
  "key1": "5Ys2X2HHp94tbxJrpbtMrndUkBZ28jNaVpjxrqvhRpauUTuZCry3WKcskiziWEJptRWYc3B8EfukpYNqXWgT6bZ4",
  "key2": "4ALfVGo8w3n61FiZ1suRmse15bGRQ49fezQinFJJ88hMh4x8GC1w6nYe3hTmoiWgPKXFP9D5bZntgh6DqbAihK4o",
  "key3": "3Zn9e9ig3g3CNyzQp74bUFZ4Jf5XVJ7vSWidpTh8Rna4gpgWqRhxt25hgtwm8TVv9vGw9iRN2V9NgaeUbLknjZaz",
  "key4": "f9YkbTeB57UKrcExEDjfu8E2jQAKGREJk6L8v7iBfXirPchET5MdferVELwGZmG6hHHZjqVzn525sxr4cogLCni",
  "key5": "3dF4J7zsMNdMLqfTEgV65eacF4Jiw31NVG5grqHtkf2kaMhfHRQNXou5RnipxgEDQ4dbzMmZJbwzVu1PpD4TJvUR",
  "key6": "5Ndetnkf5UPsrbzsMh9J35oUuC8zFq2d6T2FeX1qsmBniJ8yp2zunkvry9qmmuC4yKXVPJ78e4ZiFbqLQ85kzD2S",
  "key7": "5Zj9zj13yVxfSLQkPWQRG5GKAZVsSjU2i79nYUCcw2sx9sizJh9L5d1CGzn3xYP2cVMEg8a3RCcXPaGf6tJiAqna",
  "key8": "53dMqQ1i6kNWhfXniZug9x7rNtLescGcWpf8s8Qk3EHtw9GrhK8ZKYmDPTBZigkWi2NeTnRFXzVc3xqdZneNCiH3",
  "key9": "2hJTwoQ3uzRH9G7SsLZG5xukuD15dAPnUnYjhJxvAVX5zsuwbUea6z3p4N2PXneWkFUKyjVhZV1uVjKyaMFhLif7",
  "key10": "448U9H2KqcQWEr6zkH2Y9rqLHdYMWzbkXJbJGNXH3qGRyYd48myFQpFyjPnJW7w6PaPmpVgJh2F1D6ZihopKC51i",
  "key11": "3eqkvFBr5Nejw2buyMkozWWQmYpeZz2ibQHjKQhgU8BaJMPxDavxpfkAisTLXDeUrStj6woW521buK94JTTdha6c",
  "key12": "4eKyE6BBbapoVSZxU49Bytd5ohS2DjyDWBmcnPbYC1kKfJ3EosErNeJZr5vaeroFTMgFTVWiMojdxQ6DU2iHTSsL",
  "key13": "4RfesDRcvYbZLFR8sd1xRt7QR12Uy2E7YotQJYcawGsNyujUo9MEwCj257Q3T4c6dsegVmiPW11b7Pw8ospKwoms",
  "key14": "5tdVNhHFW6dwKkxpnrnUdJRZ9C8c6bW1jvQFd6bcHc5e9yrivyenYqPfjpmSiyWUqt1iYiPQhGxvDJmegpe1nSec",
  "key15": "3DH4CRABUqp27PAgyGcwLCBtCdUzpvpcQfEfjhQhi9PbnZNkbdpvQjEXc3rScD9h72UnrEy64ADgMuoDApYUYZr1",
  "key16": "4549jpZ1jvDSTgZeqhjRrdrWfWfXCc75yV5fKPVU7m3LsRWJ75k4jiakyf3mp7tPiGjTf55XcS6bYQrJ5j73DiA7",
  "key17": "9m8yXVQwNHXduwBiPbhHgiS6ivSKfSTy8Gn7rrPDNBB4oDDuqLnfJGkc5KEQ7FeY5QNjbEMoj5HK8tu5By4Z4Fp",
  "key18": "5pjXjkjKuEcvppmRWApA2A36FyxwaK6iziTfrWpRwBGNE8qq27BkkYB5SU5YRCyBdnzJfxq1s7kozBWZsfncsGxb",
  "key19": "t4vm6weLx79PFV6tcFkwQsTs5dd85zJRaJTymnBuSx451meTHQhDn28WKcnnwJGvPQzLPXZoJT4SNmkQzajQq5X",
  "key20": "5cQ1zwaZ6rZ9eMCv1bZqp2FTuJhCkYYXP5wwVyyCtEdP57HfuPmj3haMZiravpaoBMjoTBwMptLRvwk5PkcujNb1",
  "key21": "53kGb8sFKFY5hceqbvBEWGN1FVq1g5yWjBtVmoybA4aev7MGE4D2ok2PNG6vuQndt72JDbjhKMag1SCFN1imJ8fm",
  "key22": "2xYh8bjXNqvLn2tprd8L6nyoZXMQxyT67ijg8c5WxUdmnTW9Vr8z51zwwdLkt9hzet8vRpyEG7oRhRUsTEUthBcL",
  "key23": "2KZhmWtfwBsxZBQioNpT1Dy9iafeWGf9qGgUVaMERJWvmjGCvybvTxVaCMJM6fnkS5oq1YqkGRjYu5SrNz6WM3UU",
  "key24": "4jhM4BjszxnfJuhAkt2Euc1ETpSJEyHa3Fw9cLW7QKfB7c5cisman1MR3svdSYV4Mk93xJduRD73N6kYQZpPBtAy",
  "key25": "231He7yEDBY27nSxfjVHjQjVaRhNruqWxkGSSN4cgSMW9BKfzFCe8VmZXMoqUnPur8bSpJqYPUKCzQcpMZhNxbrP",
  "key26": "4dBj4gCTz4rp7ySqtabtG3r34srKm56ChnSTMgHZubJyEiCk4P2a4LcLSDU6M5awFvvqprLp3wH9nJj4YPAsoJPa",
  "key27": "Ve232Q6P3SJGU1C3xYjt5xfrymLdvp6p7otAkAyGS9B5iGjmr1DkmjRj2b6izwG3pcFmwzoQUhcQQVABxfYbEqt",
  "key28": "3ATMsaE1NM7aZ6ae2np8MbXhEVqJbnkTa3H5afFcoFAfwnbGSSvDt5gwZK1f6JPTNUwmRtA2MpXVMeGfUmYW79nK",
  "key29": "dUyD1jydx5JB45EhXRWfF1N4m1npwcF7QzDoepA1eMgMyugDABVoVm1kJ5SHHr3Jf6sEY88YAr7bVSi62Xttw7g",
  "key30": "5o63eDy7KKVZiZWXDt5gJfiJBLUKdc3BXX9ttCY6VYhmc1FPnzLVKP8x2rALjPAUPewP9fJnVoZtngoFqacN3Kqm",
  "key31": "EY3YEc5pK77N2gch2ADiwAU21hi97qefSJg26ipJPfRMNPEQBEix99VAU2BHMehk6uEqtByZStimShG4rnXzXeT",
  "key32": "4M9UtPtNqFUyJX8qDw587oYVK94yJykwGwMLDeG7NPGqQFgVru712WtTcwZS2kkEceMX8ASe3cLXfxJc242M9gZr",
  "key33": "5WKqpHWascnnXeG2fxAQpNf4AF9om8kTLjkY6DtRYfhZF5MMVHt6ZBdjt9QZi7evS4YxjrghkmcAneKjpUgqaLDz",
  "key34": "5XpyTXySG91LcgWMbTH1Di1D9ZQM1eX3fCYkxPmyYbg8u6enzHzYvip2k7Upqhc27hc5V51pba4NFdhFRiDg9r3b",
  "key35": "7EoMb2UXLr7cnCsfqVqCUQ3zQjuxwmw9KK6ZzvUUsqVF6G5CYBt1cDFFE5YWB7UHGHQBCEfMEqAHP4VGfTpkT2z",
  "key36": "LNi1kDRJsV1rV9xtWJMRNYYAWadcTTWTRxnN7TD4EwzxfTDFWT1GrPNdJRFjdj3561nm2i5MahHTbeT8XpUVEMo",
  "key37": "3thqPK3LjVWoaE8yHGEZZms8BzrEBpxavuSaYRyiYmMpGMgokjGCWEMjH8cWa5H7BZGqv27WdzNzQR9FxxF6y8wh",
  "key38": "3hnFcd5vAPdJJYZhuU7i4DXnQ7n6B2CmWU6dtpCZmfKmmVfQSWpoWxJoyvAVALAEtBpwcsfkKSeDeW6hz2dvsyjy",
  "key39": "2dt92BWkcbxACYPZ4yiNc1ZaSvp3odcjcgWRp1XLTAMT898zzt2UW7kuiQGwJaeAHYeqZWdnSNcTnLRtRif9EvZo"
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
