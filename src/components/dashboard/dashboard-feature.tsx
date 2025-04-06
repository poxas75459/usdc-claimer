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
    "h6zYyMVuZYEwPGC1Ar7S86wgok2yE8zeUpg9EB2xqQsPNknpSbn43NCCFPeBTc9D3tbcCRpwm3zR3kcpgeBv3Cq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rNRRLkWKQiv7wALLz9A5urVm2AxQxRPHVsUTFC5wCnx8MGwA3VgVjqc69N7v7hjEMi8gjeLonyW5Fx7ZZKF1eYC",
  "key1": "3fmGJgZSrGmN6qqXVmg8Lac4UXswV2gx5CwNSrZavaxAqYjQZPFuEBV8cSkiCE2RA6tCxVuN4j7UDGamEWikiBxy",
  "key2": "4XVXcENghhn2DLUzYvjvspstosXUe2UsfDCTUxLp77vdyA786JD3c2FY9Q2NxNGadacGmsNweQXcMXKTmQmoJd2Y",
  "key3": "2KZVjqf5tGZ54JY5Mdp1KZLSVcAUDmLwRFmXMEPFwFNQxMU9akniiZzhsDm65gCsMzzEpm4TXNRTqu5gA9dbctH6",
  "key4": "4bFt8U5EHXFmFvqcWvgkvXzQBkshP7zkWEnYbitQvLb2pGptrJTEidNEmceV94Yp1bawWammb3k64Ko8fHbSfLPq",
  "key5": "2rpSU2p9HcDxhyVEp6Re4MtmBtpNdxKfL3wpHNYQ5ZHcFi6CDWKxXqvgKSPfcg86Z82byae6QfgrS3KZbTBTXdTt",
  "key6": "oAxptqjLTHWy8dSSCtAdgDaDbU6A9b41Yqxa3UASEkiaeG6mwPhFVBGvXMY7PMyE2Gd8k1xnsJuzLsw1UhhHdE1",
  "key7": "33Ca1c7FEaz8odo8K8r5EEGdeEV6skpGVtuZtafq2Jq4JVGx7NGBrMw7TfJiJmd22vZPpmGadmdT8Cpm9DdaefD3",
  "key8": "5vaGnZ9VT2JnkpMLqBKzAqyrqojfnNXCaBP8Q63PJWgxsDNsRRsDo3oQScFxJJDcrLy4pPrSdwx1ebaoaU5XJR4G",
  "key9": "53pjYv3S6EvzbZVTBigRQdr8evWu32u7hHrN8pezmEyREqedJJbhZnXU8EbmwZ77t4MA3eo2NfyXdiXsknuaEQvv",
  "key10": "uXp77qiTYfVNXp7cp3q3qS6LiuWo6TSsSwUFjxzHPoyYPoAc4p9tzx1tyafXDeLPw4vBihP5Ut5vrSLnCztVyEJ",
  "key11": "23F2gwuRXjqizCG6WXq38jZ1BRbqE5ZMWHXJb89oJpMXPwNk7PYAkLRRU41LFUMSr8gLtLz65xSxfFPyAyu3Nzof",
  "key12": "2U3F5TPG8wNW5yPWvRRapLUrXcK2dYTdsrWSnBYkcoUqYA1wN6TRrXv9G9yqLT5gYVUC2iMeYxByqVSXtsKekZup",
  "key13": "2zLxmNFSwBYu9k92rfEnpMWjC6CAxLm9oH4zZLaCwtUBza3fzTJ7zJ4kE3qKc8rFcxH75VotkoXSBa7bD6hh42UU",
  "key14": "5x7ePiJSoqn2QAowP5r1jsEjucUrQStpwaWDSvxibUjsMEXJScBneC2Mk5ucSwfP4f2zp2QQKhAUxh1EgZEd55uG",
  "key15": "4KLsUzjivsSPsLc92tHB4yW17DNQrYnmpwrmFAKMutvSmPRAZinVh8ZeJsL8zJ8z4xZNbcAxtczanLUZYXPbs5BF",
  "key16": "5XWcoATaDnedWGHPQ2xkv4ptKD3KoEHoH1i8t4MRRmi3CL77b5aHp215rWQwVuWMvVc3jtmnaGbJoLEQ9WxViSKy",
  "key17": "5unegAaGLaAHBJykQbhbakzBz1PQ1bGEnNgo6HkN8XRsiB215Kvy8Li34Q1a3kkgm3VReBT7zFGTamvzJJcXmtzG",
  "key18": "UrPbXf1f8aec3GzTm2JXmGR2GfmZaDk5ULwS6vKAd2BWkT2Fqw65tkyBbCMotJjwwWbnXA6uoJpvG17a4teUww3",
  "key19": "2u6CEbDxRD19sFbVa4f7n9WpXqgtFkFNkFHdxDf94F4Ktn8KoZ1GXJcEqiq3fQ86nGTWviwkbyrmwRMunELjkoYq",
  "key20": "cpnk2rv7Yo4g4RpFDd1ViKouFa2YWS8ZWV9abDYAtgk86Cit9FddSR4hCrGgbWaGhhtA5dR5py2tuMSGaPF8cde",
  "key21": "5bKUauRDYFXDinwfLbVTMWh7fJvguwoMDRKb8h6TpWKrKg8L2icMQbUSXm4q94LFVLKk88rLhca7z1unnHeHey5G",
  "key22": "3n7zsXHZ1FXsFWht5jtwB6yGhdSGSpgtxRPCrVPyzouVd8eGXLULLZ6hxvT5fxpBYwxzg9UUx669XrAp97vNcDGo",
  "key23": "5K4GGxsFWPXVXEWyZAx4Z6vQfAyr1FKopPFFV62MiFCoBrbFizKwCsEWXA9Qz4a3uPk9rnTLKC6kkoq7QQUuosk7",
  "key24": "45NgrjYnCBXcvj7icRfhbnAAnsPDMPwhkVH9zDuAqwYqsTZ5BXCwZgqp3A18PEzf8yj9mmyTBnaKo5bFnd3jmDYs",
  "key25": "3Bykgn2b5kEg7kJuvxnMKbExGFtTfJBn6AYin58f8brfAvasK7yZv2YjbPEgjAXtW8wFrGfyd79sDevRUQLafxBk",
  "key26": "3DHJkAYmXLfwZ2YD7oNebPZNEcTk7RM1e4eCrJCysNSxP1can3PwCR36AUXo2EyxrUKTx2bMATRBiCkfTQYLiCHF",
  "key27": "5GdJS1jwEnF2qEmaFZUfBcJkfjyRqxopPPVZrynWafzu54F3cmGGZYBruoj975wEXBxR8V7e4S5Aus6kU9Z1okCQ",
  "key28": "3xPYaDHgLQH3ya8cwn3B9mZGCa5LBzrYKSzb1dMa8w69UNWL9gM7q56vw9ktdEUbENaKcRvDY4cdKFAwHUCQKKBv",
  "key29": "yADv4vL77gGhiqreNQdMMYhrVisbQEA8fUsR7nnNbgGhQohUKe78bShhr4vyuMmNik6cLVvFytpa2cdWv4EkzM2",
  "key30": "372wfV6FpUiRmUwE2yNTYAHHURCaxV2iAf7MEWgzZNXJpQnAWtZfA4G7gdAq4WKeFVaQn9qWPBN9QZqFj71Re89k",
  "key31": "3WyzoWZ6k2wEjVN6vxuwx1GodASvxfe2SK7m142Dcpxph2fWxts4khG48TGbbzJLh5xRMc4b8B2y8oAMpf7wjxXn",
  "key32": "4wcCH3wnokkkhBg7tjDaLEbG8GSAKZgd5dRchLG7Cw6ai9ozFu1a94G6XxroJ6QmJJQu7BfFXGRhyXsBihMz3HRS",
  "key33": "56XsG9UL4FDX3uUi9hovJTPDqNffkqBrfuYgF8S2SMC2MELXD9usuScVThyvyFXFE5gQ3jSzakUwpKEaUh6xU4Kd",
  "key34": "4HBzsmL9sZuYMuprKNjMBAGQ9MHoj5vB9GbVGha1SwjjUxj9iW2Xj3sLL9vKanvg8338Zv3To5NHy1Hoyq5YcPke",
  "key35": "2Xz9mAw6kNGFydXbZWcWNsJnEdceL7z2288HnwM679DgoZvJof3gs2CbyYEAn1sSbDtYQRo3raN7zqyMsat6t6gs",
  "key36": "4HAYvADot914w4wqcm8TsjDyrHXd81aBPfoBjhvRgB6N3diajDAdcfSrG43s12ryaKTetpivsWP7imHf3ieZvzBt"
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
