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
    "3hrrg4cuDu27HMWGQEswKu1apgog7oudyvcFQCFgMRoQKZPY9NEnzG5hfnxmghPVEDpEKX7RzGu3XTn9BGzS1b6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkxqdr8y4VDFWamG5dCURhxfVJ8jvyurPbakCpxoXbYMMrvtMuJn7sVAjwBNTDkVhcxz3TCbczihWbeYRavP1Ri",
  "key1": "4a7XeKD1BXx57EYp33e43VhCWi54wZEbcxiePFZWdiP9RnNRSnHgY7qBfxLBTzd1DbdHqMkAjCRTGKGhCm3Zg5t5",
  "key2": "2XiNjgvcLLk2w9kB8pkoaqKfDwduA1AK5gUhW1TTT7z7gnUgfdVQgKVY4K9WQeoyTdTDNxw3kTTLoaqQe88DSn5Z",
  "key3": "4oMoLjwjysuM1KWBVe8CPRFxgo1msKAepiYVQsZ7L4aa8b86RFhrLFNjqT8KxmqT9Mbh6dRZDcXbALTxXTesDgF8",
  "key4": "gNBFVyDiFsR5Tx4HxzsNTLfgtdqNjFbPGos3cZM4TzrF9TPjdAVRzvVZHKTP2vhAvBPS3zzuGz3SKk3kj2pWG6m",
  "key5": "thbizHaMX2dyT1dHGzM7sSF2AdMR1g7kDCyVy7gwGbEmPENuAUx9p5jskbJTWjKgdF23URQ2Mk94skAcVYT1nit",
  "key6": "4sJUymxsRe5LGNCB7mWVNpqAbDMbr4cFAB4cws3szQka7oC9gFBausPwi8VHsQbbpEUddTW4gP8K7GZXVApbrq5F",
  "key7": "4UwPzkXr9mQU3Kit3Rkhr4UvDchfUeFdpgKCSQiHwJfxgEnmxmAKoGMY95vfCPYNR1PqfeqPatBRoBtaAtZrEFzA",
  "key8": "2U4RpSJm7kYFvMScbbi93S2BxaYgd3VRt9WXMhQiHx2v5nx3h5Q2nYSqt6qmAifvduGEFv71TngEDFfoqjkaDC2e",
  "key9": "bAJfnYEkHFs3g8GLCuASfkKty53QBzHK4miqusStXG1kJsR9fSKAzjziLJ5RZ8Qp1iM4wVjxXsQkQhTXhuh8j87",
  "key10": "5P3251UJwcW3VG2ZrmBZhstJcokRXXoPp39QyanNa9euDFBuedwwszcMXkBjQuG7yWiRyRaYX9qHrcs1zL3Mj2p3",
  "key11": "5GjASTnWUMargbEjUYrGBgKjYiPck4c5vrQjGHL67znhQtzPRNAeTJn2iUUiHZLwTts2apQ3Dx8A8cMvHvtcZe9Q",
  "key12": "4iDHLjTTKrRisxzNVTKGbXs41N8g61Ak6KcyNK3Sb5BDf2J9PDnsQgzkTs3ZQY7QZ53sAaC577gfS9qcDY8wmjtZ",
  "key13": "2MAqMPf4F4eenFxhY37kYNxJJiR3fx4D9LmZwopdXrvXs8gGWbPUHSsCzThypk7eK111VQXQ23cCc3WDbCi5H6T",
  "key14": "4jqJEbfjp57KuGKW3S39bkKUSTpGTsHNtX1qnCDShbgt8BBX2axmgEYn632NXS5wV1HtRD3khkiYRA9prNrUEn8g",
  "key15": "5tRhKPtWu2YBQAL9bLV6tN8yvsCbS6JPXB3cnwocqweeNbVYYV8ZZgWs91euLi4y62D7tmv2Xi9zKLNLyzT4uM1k",
  "key16": "27bdkZBMWsvFj3fV8SQ3eZyVmRqTbCEhWbyoVTB3U4ZZkLZuFK7T6yMzKyREhKLqMTFcccMizBacC3C99SbY1JTk",
  "key17": "275PchMz3k2NbnX9PZzPC6tF6aowuUb3Vsa7vEDLADeYwdUppphxUr7UediQwNUfWr5ASS8hvu49HdZxhvYN6jeb",
  "key18": "5q5rXM3UWkyzFmfrwsQLZNviFnrtpjrokbgQ1QWdLMZ3pjKasPLkCkNc5PCZhM86Kcn96XZ5tsCa8iKFRP4wxAXd",
  "key19": "kTGyQ6Bn46dTEW7iEgdufrQZ6WqR1UEMVPEXRC2VYbMbx8qSEHCpHngb3ncGQvVAbWsRZMxGr49XJ99Z8bxVTJH",
  "key20": "gcUnNJjrQHueRh817ZJtFhewSV1zrjP9JahWENy39SyNDNjXU4Jv8vgLUP5zdaPbSDciXKuUHUNSjTanjHgBAk7",
  "key21": "J4KQT66e3XnYBhAjjFa9ZbuM5m8oPSTkmCs5iGdBHRxTzG6Md5LB8aJHjBjJWWArLLTFW2GK1BtJ1BWAVnV6uM1",
  "key22": "5wDQFGLokxxNQEKESw8AioM48h48kni9ZHNFRg7znwRS9xeX19A3rY8KDmPf3fGucPKHTu5zRaYwxARHvuRWAYMc",
  "key23": "48Ge6BKzYbpazPZPQ83ExPB3sRw1bwvmNsgZewETyGc8Cs6tpScMQ9fAd65hrq3fEaSD1F6wcRyua2aVsQ7cMhfX",
  "key24": "2yTkMBKwspbuhkoAetzoUzCcGyAHD4YfK5jFx3F7sfa8UVNgiVP6dd76hrVHBvFtiLdqafgsVkEQ7gi2vn5D9Xga",
  "key25": "34K7hUJsVCUrSJYbSAjNNGEcdcpQ2fhmDZ9dDfFrarDtBTy9yyTqvHkyA3yV9PsHKVexdjkcfj3WJkqRmMVfkZMp",
  "key26": "5xeFWfmTofx73NZocMr1R6rkpgBiKxakHpye971KUpf78ihHECKD2X9kCWJgTx5wZTeDQcBcJhMzXSo1r62fTQmP",
  "key27": "5zkp1GbEWq5NquwDQzRm5G9gVCfKPteYVnnTkwQwdsCLVbNoGEcr88p2dE4kDWAGcbGtiSpADNrogQ9T3XNH8onD",
  "key28": "rc8GUPs5fqhWUL5N3LAxZQwUFAYGAMtE8623AQwV4LiGP2dNSVQdUbzhrB8CsuAxz1mUuLGDkMpdWDQrk3Qe1gK",
  "key29": "4DsMaLSPpuGf6YddvryzefTeC3drV8QJ2sYEbwnfGWLkhYzv1SoCSU8M6R1FWLTt9qRtNF39phmTxwvS3NV2aFSD",
  "key30": "2kfZeAXWXMF34oNcLaZU4Qb8q1ti4VfSvmqmCZrNoFexCYPQLJ7ZQH8xocALR7UZ27KKnFN6vQC4mKcDdSQuuvgW",
  "key31": "4P579kSWGSomZWAYYxuq1YHDQSRLBfyGvLUBaaQsFwzZgXzSX1hgPT1SGSH28WS7jZTpiVCVtDZTgrAhH5Z16wtS",
  "key32": "2uvCvX6QuPLr17Swz3BiVwrRawxP6naWEfBLAGVrzEhUNYsXLBAeJijPmZWi2cLyENvQbLqnPMcYTzs4Nb9NAknE",
  "key33": "4Ka1jfFDmREu5ftYFBHtwvqPnPxsrajyFeFzkVFR9KUisjN8dqzvsexNowehZQmJ7PAXFDhfcSrbXoEYfsLFsXxF",
  "key34": "4f32TawJULr7QEr9E7wx1sJsgPeuJLeKpw6LhS5LrJPLt2gciWUYVTcnwm4744SA5isC3ystRuCVWr7ihqoHNrQR",
  "key35": "2xsUatUDvAdtG8q7dshWvqJTpTRhjQLdqqqy9UK4vLjni2J8YX2VmqgbmEQt3TZV6mCmSkoiKT1AUhuuqtgsc3ws",
  "key36": "3DivUKUv47mgNAEgDQNDda9GW9hwirWZoP5iT9dnTRgVv1pFKP6SHfDQ2VuecTvVftBpbYq89TDRTVuStvrmdNQ",
  "key37": "3LVys5jh4tyMSzgaS1SjPCrqFt1TJfBMLvYQsh73AmXBb19LokHDWp6YrtF9GhBWYSF6UH5cwEgQ1RckKcgmnnsR",
  "key38": "2nttDsbrPxGdeyrUdopaUeuMEkdzNwCkZbRJMfp7QLG1YMJmgYzLK3scmywWp23M9p8smsvtgA6YMxQad7a1o2oM",
  "key39": "4iPBfWaW2irfGT3Z2o1bbYcp1ixj98V4S6T5KZ9SbwLQfrfdbWD6SzGpxce2h96thPD8r9XF1EekBMexCByucGfP",
  "key40": "3AUw5SLpdE13Tku2Lg6W6JD7fzsMJZMnRwYPerSdv4DsTJZTaevtFFLvWfqCWronbAg1JXW5hHaK7EWURB2gMYwe",
  "key41": "convwHzpBQ2SvDacdqwrNvFPVZ6t6m6Ukc7UHWhWmoLVEUoGRnXWapBrhCqanhR5WFG86c3Mz3bLdqiccwiJFhd",
  "key42": "5mpcz4QwytFkjG7ber9kso88ajG2sM3HGoNdwLrbR1FMUyAfEncmKuXihPkabEiWi4CyaNBcKv1aYjfT8E6dB7sZ",
  "key43": "46mSUvZufFhUYqb6Kazb7DJ9DfozrdxN3fzY2166ZX4uHLKRfqX8cLBH6vG65G8QaRdS21ZrwDfrdyMH7BGQUJDe",
  "key44": "38odQzrEVr4m5QBHh9jHZUnv4kWnbZTU8JHxmBVWuPQ3x2XREwrohmhYp6n4uhh4QdRXGhvKB7M8nbaiHhJRtyD9",
  "key45": "3NireeKKaASc7ZfmVKM2885ZDZENtrbcBGpLUARrpd8NnDetj8CNsqeXUfse8veQjhacAybbxiTiQfPswntjSHz3"
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
