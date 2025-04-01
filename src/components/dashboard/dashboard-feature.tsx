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
    "3HUx7qrqh2c9c6WWCX61nKcLhQtGJVfwbWhGQ6ZtTU8pEkutEpZHnBUW1vxt7xKoWUvDBtzSaYcpfGzw9MCHGbug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7NitSRMQcZqisyWtzFvQCSuHFVLQ9AFzJGKd3wpKApRPEeFQc2QJHx75Ck6ZvJLpKkHNirajMKX1PymqN5UjLxH",
  "key1": "2NpUwcEbChT5QSL7Sze1eztXoSbLSLyVGSG8n3nfbBjYmXkyfBWrdASuVAFqXkhDakLXcfD7NZiCvECBSTfWXgjv",
  "key2": "5F6WnSJ9Y8LtAVQdAcBKLe1Nd5EjX9rv4cVNUtvZSrEvDd4qP1YdhnX3YDQpF9swGpnNvPqDUNDM5FTMm3zWL8E1",
  "key3": "3nVqfVX3Gb5yFTYjgGT7ngpCZuprBrXZU8YWhKrz7KzHg5BxV6umEF84ozV1EWXFXQVcLWN2nvC7ki1XrGBRhwJ9",
  "key4": "atoic2ZPpJpSMbfXNzVSavjB3z5Qi9FMNXbF9vQCm3WA7jpkHYBRqRg5R9Z7X15Uqtt9WAvP2qdzaxzF8hcC9cA",
  "key5": "2V6NxLtjUQEkDFzcyfYCMWy4pbqaPfuTxn3wMX56x7HERQUc1CA8mKofk8dma2TfskTUJSPDyE1tTnSttNfdAKCU",
  "key6": "3Sagc8rRLhfvzGxbtFfztfQ6TPNTPBmJkPSS9Lv9reyWEQDT5sQnJbFMrGKEskDRbSywaBU6cHm4XUQaxbnkLNCk",
  "key7": "35esSX5H1ZgSwaShb3hUd9akjH96n7CZ4XZYfS7EDu4vkYRTzef2KBygd56jheaX5jkqiGky4hR7xnxyYooKAd4v",
  "key8": "4CTEmte2ARTkt9qsVxCK9WZrHuX1nTSZ6DZiMYSLpndtcZyfQRZso9ERUFzyDuHfdngDaRPUjqqGYFW4eQLP544G",
  "key9": "4QcFJo184drgaCJAb4UXJFuGdg7doK1XhZWr2oyiYi6Ad5bCzQJwZuecsRgk5QiZosz4zPP3vtQFg4L6evugvwi3",
  "key10": "598AMNVSc3cheLxb329sKkyNokkb9owSuTKAFm8pnNcEmSAwHhGqJzwQRn6qJPXN9LSuBLne5jcNkRLggU9cWrYN",
  "key11": "583QKp8o729q4iBfDyqCWXsuobDCXWNGn8RACzBgZyvUUk4Pqjgn2dYEcvGrULaexxuQ4YWbnCnkECUxwBWDiuQy",
  "key12": "5bC7cR9ikxFfTctMTRe9VbvuxsazFrNtrR3Sv1RfL55vrwzhmPc9vqTpY9eZLeTAv59aQ5EjmdTt3JvaNpByd9eG",
  "key13": "TwUWe4GXcXq9SMNZ4aanXoyBdkwxSiZ8MRQ7MNyY2bCEceKBFMxwcaUxpKbuU2G47gHTxMGefMJ95reF7gzhYAq",
  "key14": "2KJ8MB31QwjmSMTZBDUCbKqtNFMzUBRYhfksUEZWknnN4Q9RFpha9cFdgJebgmjLog2dZNb86vWzq4wYuywhqWEL",
  "key15": "45pqs93qa2hYMxFaACpHNeeaDAiUZ54K9i9bDyvEaDsA483HyJep5MTLPm7sCYH31JV3hx6i6W39DRz1vL4khytw",
  "key16": "2SW5tFeoqK7chg72syWGw2Cx1Jcs9JYaU9AbyK4u4d4epDa6iX9Lhe7L7PUcPiNSRimJ4MG6wuwX76EsCx6DNkh2",
  "key17": "28548ix5aPbKY8a5aVNwNHZAyq1yzdxNiU3QYfJSFcBGg48yk6PiMqF8KmKtdr5vGoQWUTTdGNiUK3dGrsmG5L5Y",
  "key18": "3LWSZ5enQs1xJLCyMgUvBiQDsBTMjug56JCqGm1639zq3FPU2pVTJdtLJisaqSp7wgEc4KXAAwVGjrdPouFPXcuQ",
  "key19": "5LjKHkLRqnCLxGW33WqbgwuvG4iEGxUX9UEVhSkQRkdko6WrXGNSEmNgvsfpYQwnxJ2MaQBBc7ZaJrPApsMyTZJW",
  "key20": "31etcmy2gArQfCmGse8m8EeBDSgF7nhrfQCkKvxAvn3Zwx8KWvgvuNUmcDxzSdX2irHdT7VV6ffBT5kQRLyMF5uX",
  "key21": "3Aff3xVy4JvRK3vJFDRxbbvoQhnFUQrC8GfAzT5axKczHYMRHNo3vXszsXQBMK9sjDFDSuC1qvem7fiNPDNrFH5h",
  "key22": "3fRT57GReCwYNaCbortVppxWAjx8vEbJVBNAYxRvHvohrJPZHP2pYsTnm85m4s9GZ3ewnsjUQpncrV1KDKfycTgt",
  "key23": "4YwKAEW2isMyiDrsTZc9z6LaJ4DAhsqhjH6WaodskLRYLZU37sZjZAmBnffdBiFnny46hvGJhB7bm6BmmSdGAXeb",
  "key24": "4fZrHp1LknQWd3rbRHBMmvj2Gt6cCTzzv3hsEpyWdmdeL1jQu32YEwf46yYcGrm7XEo1BN6oGiHvf2XKCAxU6nap",
  "key25": "ghDjKyMd9xKggG33BrTTSafLbSH52Sm1WeNjjNdoDRiifaLLrgdKNu4txc8JrjTSgiDDrEEATXRuJKUFCc5qJF8",
  "key26": "3gCTAcuz9c3hithtPojQ4DHimc7gEsDzhj3uiHha9Z2fPx1yT9DY98uxFnnUBsh1mVaC2bvivKaJJYzxuMRf7tUj",
  "key27": "2XUytsLjXiHK5HU8FNBKLy8Q62dzoYcuPHGLv5wTTfz2oq3UAsNQ5b8rkXG98E6bEHXZQq6cB6QxbKfqAsrCg3Mu",
  "key28": "3ybAU3GDk5MWmt1EGvyqVfrjBhbQwtVuuDF2VSB1ibA7qaGS3mQaE2JCeQzZ9kWyxfzfKqn7Npeww8WTStvVGaAV",
  "key29": "2vDMRFHt9mormNS2rRn1fUgVDES4Tw2YvNnMCoeHfZdtRMkr6LbPPoqxS4h1Ps2re6Gqebwyvg19dJG86Bstw1T",
  "key30": "4nkdfJxiPaH5z6rdLhrKeavYFy1zZkX8HqXvUAd2vJSQ5X9NCvp88Qeyvn4763upXKCTdK9Mn2qbaj6AjrrYQrWc",
  "key31": "5yzQu1JmaFziw2dy6oDocyQPdWHwQuY6ndbiPbw8vdv2YbT78JEVNvDAqzyTnvqJdxVvXKVGr2uGofjKb6XqWUkD",
  "key32": "5iQQPdSR266LSp44kFHUbBJbi5ujcUbohntMzfbZ8h8mLB7Ci3obUURKFxmsmghSMJL91CtmFnptKLgKg6xSdd85",
  "key33": "5eiyHL7z98xpRpPCJZCRtgm4vjMSHkKmTJqaQ6hHidZwdA9VvsjmvUCxyonnexizzDSGFy6MsxABbmZWKPvmoMoR",
  "key34": "2ztvWQWszvQRATJEkGWdy6QuR5CHu8gnXyBLaNAqYNDFH7n8NNtdZUZthrX51DbJohcgqUeKEXaPJE2sLoKsRFcb",
  "key35": "5Sgfr6f3dkGbuwPZDFzqJKjgZ6jndxWpb4BcBSUSoyRj3GDchd6UHiWsZeedqDcfANjHng7Pttispvc8aeRRbndH",
  "key36": "4NnW2bEVJqUSWdJaKKyNz4FmqYJybsPGXXmtT46ZG95qqqNUHaoQJpywtYEHJ4xFzBmyhJHuxwQ15VSZmv7osKeT",
  "key37": "44VrENXqvkyWtgGSyLysiV6fcHLRmhxDJmVch3jgg75RSCXPy75921oMioTDtKZE7nz3KpferBEGrN5ActAN3GXf",
  "key38": "4iuuyMW1pPCfcnobScUJcUnEMfjVDrdsTggBxzotXq9ms6C9VRsXC3nLS8ksFUwJ8t2Krf8DZSKrPp5WVqqaXGwV",
  "key39": "5zUeo47tcHj2z17fZ7XgNc2mSqo8bMSrLdBZ9EqQPDfkuYrJqUdnbM2s29Uh2QrZrU5axFfLtFQjPQ2bLEx8xSBf",
  "key40": "2o8LD5kqUNsU21htcPUiSr3SiUpLp5FzPLxL4JfjzhxAPGyzwnty6gap3799WwzQxJG1wRFCPK6ogJuUj9AAgFY",
  "key41": "3Drv4B4YXfZ8TkdV95Ev7U7WLxZJSucyeJZLiKQRGBr8DmiK4GQyWFtYoa2gfJVYi3TXsE3tjCii7BKBBzZuoiLX"
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
