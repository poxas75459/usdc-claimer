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
    "42iLNQrPqjxkyWF3YHguw2giiDuNg7N6TbDeoVB3JHXGUupp6qBZoMhzdUXRh5v4F2UE7876KHuMbCQRXgLegnjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2De9tcA5oXkdheNHokHEsLEeG3Kwq7d1hEzxAWrBiFQuhMdUeNZfBSGPcW3pW8T64egV9QG4QesVo8ExKwup5GLg",
  "key1": "sPxvxWMs7ttdGt9PrmVaJadb4zP9UDckqSVGrGebHVp33c82gDGqkKuDEXigs6P8XW57QH3vABJqNbZw6aGsJtY",
  "key2": "2NK4y3RHr9NJWVb1Bhy8VRksQLtst8adtWGhkCQJhzqMtgnFQiGwTuD6KZfra9t19hZ79hKW7LwLMs65RTjAd2Qi",
  "key3": "38KoFzB9GcMP3aHGiNrCGH1Qyj3EGr17t6dZjBFMzWjLVGi5hVFvTBdhbVQMDtzy5SmTvb16EkgiAruxhfowp8LA",
  "key4": "3oLd87QvpXkYhjHGmuyVRLzG9FdY8awLyKY5jXMPrxjT2kgTCNoRGabWLSqrGV3LoUG6uM7Fs3M4ZWfycteSvz8",
  "key5": "5tSgs6XXxd1AyC64zpdKiwEv4oh43ALfF6FDWE2e5Fo2fqpV853J2pnCKWiD73j6LeSBbdoiMHpkEHMEwQBGJeqv",
  "key6": "5xAYQroD6ZZt2SrjqQ7mGzFmqbapP831KjMvZJm2shDNiuEuuNJUvs6CCKq4TN93VC2MgynhqjDfoP77drXYxcUM",
  "key7": "37KDBKPkeRS6ejjMAB1kQ3vzRTbqRuBkAFJbSQ6vZ3kNTX3EPbnPquMwGQTAvBYQLYsv5hidia68Zja6KCGcgAXG",
  "key8": "4EBuTPseE21RyHP2z288YMbdPd8UveZgA8NtT4EzNKJgUmGvaMqW9cHunuUJoYtJZFcNQVZ8FRHWWcrXF3x68svf",
  "key9": "65DDs57t8nvGFfqkq7Gj5RYc2dPiynXup13MHxBCvbMEb3wJ1SAawdiJyTBKh5HMMAxHne3gzHNKMJPor5o5EDSR",
  "key10": "5DzBV9osdbYdV97PigkRKW2mjVF2NG6Mx8YEU4Px6WLSqyESMjXSBHHuWKea6gC9w1L8ngkvnrPnTQkSKpAbCRfA",
  "key11": "5cFJSympmFa9VpJ72WA6szSLYRXa52itr3WrqGwTXMw9uw5yYxaxf4H3AdNoF9FfWerUy5DzrqMc7wfHnjnQJUfR",
  "key12": "61Lv3LqyW5fd2b9p6wTcpAvhxmyikAKqKJVzo1xQwgbrQXqSUdEyYbHvwx6nTpSgiFaK7UqaJvgHFJxj64gwmpTj",
  "key13": "CfkyFf348qsTXki9nXd7Amw3hav96ZGh5NLJE7as7WR7MsVBgvRwrPo1fahSQeC1tvV7xrx3jxRQu1gt7aUxUyx",
  "key14": "4pFBJJpTsZrmAeP1fKrNiWSWSSzB94wwn57b3jCkVR2B1xP5eVK18MPEkfRtLTrmT1qwUfqmzpQ2dnDGR18cKFRe",
  "key15": "gAj1di2BxwuyBcHEoheHj8WJnCE2XS29KqJTfwURrFhYZSgjBMszrvCyEG8qEh133Y4pHLMmBpsyQcQroGmBhLm",
  "key16": "2FfoKCRomNWbFZCoqQnWanYX91ptDeLcxXsAhiaCNFcK6Rxa3svUTacHtZGkoWu1EE4DoWKReHiRbPEKccMqv21v",
  "key17": "4h6FAW1EzcmbM26pvrvn8o1Mj1zofXoxRBBeT6jkubbApsc7hp8Q76KouHapBPh8VdEZ5BA684nQmbcYcW1hkhSu",
  "key18": "3AdjU4fJUjFDAmcpcN5PDTiZoC2yit3pkmDnu27r7iZ5RTSVpyq89fWYZNM2VDmo3jozSaidrJfVtWRKXCVzviS8",
  "key19": "5UryLPLt58RcYmsB1ashPP6ekTSpHxbMDmXSDm3yksVEtsSZQuzSQbVQs6bHFZg2xbKNrJEF3oBqDMJroANXhtWQ",
  "key20": "2EdAMmiNhiFV2j2vpsaV3M3UFZzUB2oYpCZuJwNMY8SpQAaLnLXNBZtxZ1M3sd69i2Ts8texaJd17EqMkmVS7TE7",
  "key21": "36qhi53WkCbKdFjxd6hTfAxi8a3QPDubgwKYfNkjyeVWEnjbAzmi8zhbbgXbBMKhFxCVf3kdXfC6Qb6EQ8z6vHZr",
  "key22": "JQhJU4kMKX1XcEDqt8XXcKXpzDvxoiqBesR7DFitNx2aYJ6pkU7Rtkt5YR7C31Ap2josh8N9CYKvHG8GTR9mukn",
  "key23": "GX4BRU3oVm3KH5tTQ3x6tyWbYKAUyzgjvfD4CPPvDk4C3JyukFyLidCYNgrhPm9x7zUvzx6dwH9ZjPMgG8x44fa",
  "key24": "3ZYiqGXekg666n3aQwdGy73ExWBKVwUWrA8fKdp1CJkmaGz7zoUaCn6gvRmMBLqgogKrKQ7DAT48MQejxyqXUBYr",
  "key25": "3sJBWSU2vPBMWF3yRaPVP514DZHkBFfcu6KZnMBCmELTbFCjYYQ345VXDrPaEGfqkuqVzkzTAMZpmBTRK9BbHMaz",
  "key26": "3LGcBBTimpsTArLfrhWAAFsXAEV2F4AwgnEoQF5LqhoEXXS45PtAx2WMU6ipkauGPaiMEf92fbjSA32VkhCY2NHb",
  "key27": "4sW4KjUN3PuWpwLs8dzwf5w4xDBRET2vSh2GXGT1LhxLhexWiPy77yRes1KdKHquuV3DyhzAKQvfnLYAea1pHdPF",
  "key28": "3BTuJ6L5EYwAQEggKNBRvfEy7c5As18La7YGX5WxFJjtLNoQtwrZdNat5KAXBat9ZQQddGZUsykQbU6p3BfrASMQ",
  "key29": "56yr23cyHUbjUCbXQyQBrBeuqwZAWxhdckFWfxKjXFdt8gd1K66AdpLeXwy7aPfUDxdA92kGSEDuRodna4KAaZ91",
  "key30": "4zCtCDstc2E3weXaL7cLn6viSN6dUxcnxZ3aN2oG37mLMFoKX63WuzhskpQ2krrm7FK1iMe9J3xQAUUgEBfu2Xz1",
  "key31": "4hjNjsYpiMKH45WCoEKHkJFAcQiynP3emXLF7Si8z6DynCQbFsuLwNYE85iKuh4u6NWCrRYh5Kqo8CnF5Fh3RWrc",
  "key32": "4HxhQ3SbuAPLPkbWnxm5X6mcJ6bYmsviEBY7LVzNcY6HignPULv21yVxqqfRhSYng2y5VK232M6QfZ6yXX7pWnyw",
  "key33": "4Zxy7QSZdQ47y2VpyssEqWv35nmoQa5Fp7q7wk4RMAQwxPjudTCz1YwgJqssXkouaRKBHUuMs8EtizHbB8owF2Tv",
  "key34": "eQgeva6cTQiFp55mZxNSigYtgjDNz8PApxFAdP8fMqZN7DCk4Kf1ToKywRJxw4X6pbq5SfKta9vJN17wrXF3RLJ",
  "key35": "AL3FoSC9nqdpgUvh8ZriK8d3ENvJZJcTU4Y2ayxBugJYoccfWymjPDFnC3k66SXUd8NyBDsWqidU7qgbkNeAjSM",
  "key36": "44FGK9vXwbPwqn4zNtSokgcXTtKY5xatKEqZSuUwG7Yc9G1bBEXsQQ1zDxXt3Gdrcgx11ft6koX4puJt9ntyNM7P",
  "key37": "TV2UMsRcjMNtC1GSdakESvCw2oM7w4FfqHvDoLarrLN6HPMkD1amXdqrZSmD7v3QzYDdwj2VUrRoaoTrP1s1wLL",
  "key38": "53uiQQX2HvVCaAMY9rkndDcGjzNg4KqX8aWNoUquRPyR9jMsNgU9o3exKe6aPWvSCsN1aG9iMpyhGBYByTAV1Ba8",
  "key39": "2KJJcDSDmkoccvXFuyUijQxzCN3hU21YxdvCGUeGF3a3tc9arZxbkx5CmVUiGLrTTn364PU3wLkXvMgC3j1qYNbN",
  "key40": "iMgvb3jd8YztG9YoFdx6m1ynJRKLf17BhU3Kg5FgSDt1w8h8sRUpHKi83dXdH8YS4zQB8QLRbETzT5Qcm6tpUe8",
  "key41": "5pkKQMwWFhjBL9RtKJt9q6CSR1hXHTchJRgYYXza7nV2gz6J3vnmPPMtbst66193oiXaZQV1ZtNf2dp8KLinoGot",
  "key42": "gJgjeNykY5DsqkVw8aKAKTxHZJe9kMcsy9d49PjdAwWu4y7q4gkQtdSwU3mzYKP6ua5M7TJdXh9Ur1K4xRobnf7",
  "key43": "ocBGEY9AVFh2oymKfi4KtN65uyU7Kf1vjND1eFg1Bcub9dFRuyrPseeVQQsFbyiNL7BgwPpR86nyMmRE2XUWK2T",
  "key44": "4z37kFGr4WnS5u9sb16eWRfEKc9rF14mpAgYiuZMrkfuLj1tPtWCPukNCiLfyMQvu9TbipGmzSQ5S8PXHhebd54d",
  "key45": "5Jqk1zxCRJ9Nd6U1ZEh3ofMreb4Sit3JPf1qsp9PDapxH4PHdYHHgEtyQyDiEhM5mP7FEgp96enFzED7sWQR8QMK",
  "key46": "3mNrxsLj8Cdba5z9Htu9XkPLAAiGcAapymqxEiJhkswhwP7fA2XKYmrTEKMPvMmqBL3kHexBxDBnoz6zLw6gARKt",
  "key47": "5BxtTGh4NvD8wijFRf1RLCeD1pUayGn9ncA2a31vNBMHKWyDFqmEHtza69v2wLt1BfWvJM6f3EeemYHu7VKjGS4B"
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
