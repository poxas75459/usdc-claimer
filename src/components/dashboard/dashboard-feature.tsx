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
    "5fw2NtBxeUDZd8KWLEhM1vCuAu5ecwHrFc1xHw4v9kMsWjaTGhCAsj4PQoAFCbNWrqxnorf6wAF26KfG84763hGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "516ncAWZDTb1aZKF3V6YQRDkZXJrpZ1i5AgErkQyZCMx8GgyuweoBFv1hnxi3zkbxSRNFvTE3o9NwpkU8Bkyooxy",
  "key1": "4MRpZSUc6pDHqVqyaZsqM3CydLceMiQnzv3bdiCngoQoLMqYhJDxhkpmHHxkWm2UkdPip9BTRG8dKzA4pBF5R6ys",
  "key2": "4aYDtRcSLWVURd8Y7dFcHz1QRfJ4pNaK7daR9hCbnB1xGgC5RtCSiF3tnzDp3wAS71L29sCpcGD2MuF2ozKNgpcy",
  "key3": "xn6zpHgZeRJyPvUtcLrdtdsNib63DME19NSYorjYTRMfZ6uvB9XzRwQXpJgFR3gSnsSPuWyBTGEsgL7i3r74swt",
  "key4": "2aCwFMDM4DjMgHxbU8cTmwZ4eSVkZtVc67BMsP5TmapTiALYJYiX2tqtd931BKhfGHvqVRMcTupsoVREC8UCP1jX",
  "key5": "4CnerwqCJvRoypjidDZT694oNrigu8n7J6G3mRkNEjR9YU8fw226jLvnHAcQkHMR9ZW3kTMUaRuzfnbzvrMcbevf",
  "key6": "2n96bAysqrib1rqjRP1fsWyfW3QcSsMwv5sSS9mruX8DFAzv62Te5wZTBN1pDnzdH5hXikFV1pWhvuKNkM6gBP2B",
  "key7": "4QFkAjNMcHrkCW6LMVUeUPerc3CTPGMic79NWSuEdtUSAYhTHYDoRfZpcugJPPLL5yvANdE7LBa9e343traprDiy",
  "key8": "59EmHpydzKRcG1P7HHmMdNWDE62LyT3UunpWekG5vR3Fwh4SvGjiWk4EVE3NewCoYqSe6MeiE3fqVKs2FceS6DKD",
  "key9": "4hb13kdm8zHXo3axeX7b1qz3WrvTuG3u6pAK5mUbwXXbuMRng8Yvu54VA7z9JUzzjGxggfhux6unwtv2tuZ232m9",
  "key10": "5ZxWGB9q1xhH1tBN7kV3QCjUjxfpdebBEhVqdeRwvV8Gi3djyAWWSve6SjLS52cD55KJDHWdzJ7HJ3kLebREX54T",
  "key11": "w8PaVBUahfGAjZLxfi7bSSyUGnteVxdgK1m4kW2948HmViUSTusabWUStuSZ6soP6BT8tBn5FuWFzAFvTCVEQiq",
  "key12": "2JWgkUqVqXLAJtQ3zjCGFuURTJxrM895sekU5QtMbsNLYncocan3WTEnZV6xKeCVt4WHbRiR4FmJBn4HRiJaUKmm",
  "key13": "4Z9XEdfR8PPxRQV9p2iirAW8aFbjPAW3FQo5kGWEiTXbvoVMwWNejdNCTrGu3jnWn8gYPnhoAhC4CqwJ1xoxj5Jo",
  "key14": "3mpBZMkHSBgcGhNdoav563aTXBVSsXyYp7Dn2VCZuM6kGP5Q7mRdZTGNRTddoDt6r3LCNoxeD63wmET6Mj7Kxs32",
  "key15": "5xqDRLhg2uLniDs6RCxX3dUVsAN66BYzPoonAXx2Lxy2svGHwSHuqnFrGFvzxAbmmTcwmYSfFbJg46WvQmJGT6A6",
  "key16": "2ZhD7moYwisi1vyVaoeQ9NAXPFSwvYbhKxZ49ZaAroSKSQrKMSgEisKMZT3Jta9bDhFucdc3qsjxKtqV1uZs9ccw",
  "key17": "2PJtWULSdiAAkvB5KkiHWyZjHs3nDdf4TN4dZT85t7H1tL5XuPQGAdn6UxGFdcb33MNAQaADvuyKj5h2v6koiKj1",
  "key18": "5T5oK9JVxBQT9qL3U8aBhAQjZeB4ShTVKqbmnTFuqgyNX2ToNUMDTUss1iqAGKCEjYfiratoTkzV7okdAhpgpnky",
  "key19": "BMEAcYCuJD1dcgAGdbPKLmAFaizafieLCWe69Sj1nCjprvE7woJZbeuZDR4LtKv4fSoiTmkwv1sZnyj1gyeycAc",
  "key20": "5FffnLsDB81LyCLUR334M4mZ38aGqpgWoPwkQcsNtVXG56GMSFXJay9G4ekVnax7k7oiwW4csVhyF1aCwfdn6xbg",
  "key21": "5BiDQ8EG188gnwBDrfwwFVEZt9Rf4A6VdYuxxZ6mQnM4XvddwCqr39rtAG9MHDjxDAVLfuLjgT89qLz6ogmcn31B",
  "key22": "5hKVba1A8TSJzheJmjYJutdu5DbhnGgSwjqtdwVFCmQN9GrP5ZKkbHY3JwGqcRF6x1CBFmrTczsF1D2CEuJE5kvi",
  "key23": "2tGQJUgjp7LP3arTpz9gu8JUENcngL2oKWRs99L45CixtKFaQP8RhfXuvyuVWWbuGHt3B3mxd99neuqrjVM2a5Cf",
  "key24": "5RoHLmVPDcRU51zZwPiEiaKtyR5EDVDRFWQVgzhAi2BGLcWHZEwLVuXFCEwa4NTdTPC2m6z2ScWzqKKzVXwFRS3c",
  "key25": "3HecHngxjvvSMDAhiHnNLnLgpsaRSoW9vzMKDvaipy6XYtHfHPiQuwPJhA7UGGGHZPu1Va7efM25v6ckTRhchc1G",
  "key26": "2Ka41bEKLKXSt9GgpdPpQrtfNo4gs7bREZMcpvL7ZAGC71jJyt93T7n2XNg9w2NDmTGXhK7dx9QGRGcWgDFVsneU",
  "key27": "5JDdHLGLdYC2KpomaySWxKsbj5VevvvBMB8qLg5Uy3j8CdECC6p3LdDd8z7SH4br6afR8XAdG9KdTH5PKP1NWu7",
  "key28": "q7TDoxfJ5PYuxHGjErTkmroKodzztvntrLGJmfwAAcfadg7b3VpPT3JMqMA68mshdx91jsGcmJLxM6z33mmWbY8",
  "key29": "2wgbrZzL69cW6hwv1C5VoR1Dsyb9wzm3QNjaSUPaTR669Cvewqt4DtsSkxCHgjYTNTTzdjMsAbTqo6qHEE53JiGm",
  "key30": "62YVPqnbavQfF2Tib8W38f1bXtEt5bmPESJjid1DsbjdbCTq7s6SsWNaydg3xfCk5am9ao5tXBr2GMtX1kNvnSJ2",
  "key31": "dHNaaWSRELLCM5rRC1wW1tovw48GYVUCE1jxPBV2oQrUKrzLvsPZ9M4Gs1vaFHxJkDHixAbRxkaYDmRcoU6Hw3Q",
  "key32": "2Td6aANG5qBgpHw2r81KjzXgo2W5upD84GZWaGsyRYqo8JyjK2BGE3xpnEA6VrRqFcP1SJANtAJqsVuEevcqQp2u",
  "key33": "4LPFLMiUfJtzMvrCsNmYNyigQEkGZ9EWi6XQD2kSuii7oY9qxHe6ot977VeWv8GczUQ6kp1pT5nGeyPV3iKB8jVy",
  "key34": "3Y2tK291PNRtNs72yGy8734uUi6U9LLtFWuuYKm34xfb3ned2fASxJhCFVFJbMudSubS87hQcKetmfVz4r5G6yhi",
  "key35": "33ZVfd9U9uQScPkurr4xEugJ8wGphENw8vG59VGKDYpCtzQ3KzKJnfDWMUepAe67x12afqfrLksZCvb6r3Mo6PWn",
  "key36": "5gAtbpf4DqwdVeGbWfTmxug3MRWH1zYAT1iX15fN1LapXdMp3LpiiP7nXdqKk4c4kmMZzi1aCLUwVYrJuDVNcgef",
  "key37": "4nhvrZfnhff7zYxUMuyhEqncrSv9ugrroctx8S6LRFbWxJoTBEoWfJgzXCSKFXL6nmLtGKGgvtc7tXBkL4ahkWpj",
  "key38": "Tz7qfTRPhr9RuVijsDfwwRZbXHJis3b4sTq8xJpdA7oYei75MSEoZtgmA1CuXuxbpy8Xm2ybyh6JETx3z88rU9M",
  "key39": "eLu3t8oAueSnXcUcWi86sEUfs1NPWX2hc6a4G9NKgfdEPkbcQ1qErKcfdsZ3wFJXKreBk8XX19hh4peSPMYVu4d",
  "key40": "3pXidFUMFwWkroSwurCRrHpjWH7CpvsaXTpXaS82KRBAVQ7kPccrZdheFE5oqBaaBjSxB4Btipf7csf2ny8LHYkY"
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
