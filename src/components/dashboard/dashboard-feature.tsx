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
    "5ebYGbiXh5qpqMVPTLMUhkzDyskNy8VjHVeTdcCBY9rK4foyJ3HsjgqsSLodgwT2LqVFJu1mK1FUppfr8Sumyjud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xBgqgSTKysr3oCvwaz41dkvjgP7vPgHrgpCRSmKqR65Tg9TDNqCKWqs2pAbj85Mc7Q6ATWJa9XGSxSGXF719roj",
  "key1": "4HiNU7jnPKc8zb4QhvWr4K4zSHFXFXctKWLbHwNaci4yevz7Juei1y6YAy7XVaVqeFhipwF8s12U1qzBxjciJCzw",
  "key2": "4VeTXTgMKqvPXVnuJCA6ygoUGBViAzVgDFnrJR6Z9fg2V7HHHPx8ywj1S5SeUucsQywVfULCAZtVFEoiCUBDHNbH",
  "key3": "2UBFFrhYq7EiY1FUyrD5DH4MGNLixLEn7g1Fzr3dNjKV9z8niZSpva6nDYZ8gRsTmp1vTroXzWTideF22NgGT5Ln",
  "key4": "4BhyFp9u3icQToysx1n2vCbjfxBvjSVJki8XjhrjdsabB6S1ap7ZAv4uzaSVXAfUm4wXsCJ2ePjnd9f8ZSkKaPwX",
  "key5": "5qcLgs2xFsggTH9hNoUPga3kJivWoLMuRQHZ9jbB41MQdSG19WyzJgvd1oPpbnbMkbMgEZRKNcmuXhjCebkPdmer",
  "key6": "5q5Dm4wfSS3munWcWEyusp61U1gRnDMK7HWVG4wVe4qYTjhe4z7HjKy7LzNuD4eLtuVtxLrdyy7Y7cZm7xmDPuNf",
  "key7": "KNtb72FMJ4Qg1b1xjqJkzjGyBpQMt5oYndx59mSUF8hNVZnDMBHMrK8a5UEfwf9TScby6XbKWBrbABJ8cEARoXY",
  "key8": "2ny413CXX7s43RgqkJmg88ib5i4N2AvYE5C3ZmaPyS17emdPzbPeFZCvAMx1uLp8b4xK2fxasd7iCveSV79nHtds",
  "key9": "416H2iGSHJ24HtxwJHuT9nnCWiyMN7MBiH4V48zJwsw52GZG19JcmikZ8ZMGnqk8q4W7fxCzTkaAebc5PsC44NLP",
  "key10": "3jzj74BQyxSz2b9UsQiS4vLqfRq1qUNaUyGtgXejUQMNxQ3ZWpbvFDa3FWyhmQ3Prx5eWMMmbHZgjvCXMVt7rrrR",
  "key11": "5NUHGgESoKkayUc1a7baAfJpr8gEzcg1QGFe47Z3ccF2Uz9kcwcJxQtmk7o9X1yg4wYQCpraNUN1B5pVGvjeUygs",
  "key12": "4Aevtv7GVHouxYEnkwPzeKhyhZa1DVbUkftMebwNWqpBKcDZaQA4dv16uEAw674oUFBqwarYW5KqcwUuwBMZoZWw",
  "key13": "4qev81VqN16SJVqB5YJVN4RexRNBhopiw93BJz1AMGypP3rHw3uzDjpfbT9NoAtQze9px4qihKthcxQSx1BNjXRA",
  "key14": "2FmtTP3pgGT8RqabUFCWV5UM2fM4sum6zVU4FxnZSvgZMHUC4bsBMsKjpXLm7HrxkCD3AZcSPtRTEmmGuswRXt6c",
  "key15": "2HAZq6do5D9je2CSTQthdbgvk3CbANsSwro76WMsXEHBhmoH3Qa49UyBoj6VYq6gapNjJaHMvGbx8t8uLRYJ7Cwu",
  "key16": "3PSkhZeBiAed5WePTVVQ3agA1m3ZnKmBaxZZvwg8dYXXMCBTvHaHLvSWfBRjo5yGk2pyg68K7gV6sYvfUwqBfdNU",
  "key17": "2m1g4eL5FwX3GNyW8B1aTFhgaGck6WscDvgyWpxSE5czUbkuaUXeNgMRv5v5GHmXQsZxKDkhCyUPquYFy75hHJkL",
  "key18": "3DjUdpVk3FHs7j91Y2pKYiXFSDxEYupf3ShtZr4V7Crj58UBArjB2usvkhiJwkFnwpZzFqWC96S78bmeSm3ramfH",
  "key19": "3DRG8tm5koXsYd4hkQB5vSKa1jursr4sH6KEu4uTngA6BdAtQXQSuixbd5NNmoPT6P4DSVvXrDyDJLxmmyhQry8V",
  "key20": "3q9ECBdEyJhAaibLqhaTFC7VSAriBqsV9kB42Sv9euv29RC3axTA1ziBo44m9UA3NG7YCtnGkL4xPq7xwNmmAypx",
  "key21": "5nc1Y8VgyoLUymna2MkRUnwpuneQjQL1y18R7jQkRwHmXJpC1M9jJ5ZXr23pYtFLpxV5q4hKaPPxXRhTVpkn8bwf",
  "key22": "4s5PrbprRnTZeB4idhkqyb5hJES2W8zNFaW1k5TawgMk6baB32bw7LfCa7WsaWNa6pVU2mhjPKaK4u5NUEyWHBWs",
  "key23": "5QcrdyNfTmg7M7GGxWWzCMYG1sdfeVb7tBHNik334hFDi9tckd4jUXWNtdZGAfTt2WBkafBdpMmdmxZ6f48MNMj2",
  "key24": "B9wV8tv5WHnBjmuozRDPbPexZNHQkPPdNx59Rji2qdj1PEhmskZd6jDHtmgiTd1ZfNavwHdfD3D4sbdmC5GwhCR",
  "key25": "3k3E4VjuMnR5uRniKnLiXhEhya9CaUCF8qnctQxFfJ5VpgGWWWhbPyfxU9GLwXT6j4L8xxn7rA2fAdZ1VWU4ZRbG",
  "key26": "4AsyF3XJZJDrzfS5cWEPrThAzvrrsDosnmYPJVMZ2RFVKdp8urmRg7gT8GwBcrYhTJRMushiJ14nJf5pNUSqcGdB",
  "key27": "5ohuYFggLKnFeX7rhecTuVXETARhkXGUHWk4qNe3riwLBWUageZ8pFHCjA2rSb51VcWwKEVLKu37RV1Qxt7zhDPk",
  "key28": "4HoXn4DJ3esXJB46znFE3KER22oXpJ4RjLhBDxT9onEBeEXTmRaFqCN3giFKa1udrHbSNZQFhGLC9eRQV9HJDvB1",
  "key29": "DTiErpjKbuW5RjwpSWhzRxbP4Mk4pbiNUafLRerbVDaqj5dhzYzWT1ojmSuoCtACvUS5eBiafxazSiTU19YzV3o",
  "key30": "5Mo7RZ7ZRWtycKCeHyRygyZsNeuNVjNhp38BKr3kSk2ShjZ4aSX2gr9QBqgRKq1gWoQsiG4t4ZxYApmM8bhGiou2",
  "key31": "wk2F1asvLB1NkzL2E351Y4g2uPKL9nsuVcA9mDNeFmFGregbYF3ePKKQq1mxmjkkYcrf5FRkTwtz7hC7hrYYHg2",
  "key32": "3fMpiuLuUtBwSWpabjFZVZNGWZBmJR2SZYDQMQF7HQMGzuNLeqqXWXbToqmgnnyMa5PnnazFjEZZjyHirbzYtYcH",
  "key33": "5HqeG4T4Uz2FwVDDRK8evim2hcVLxrseYVWgvtXrmiEVdRMkoGgx7W38SqHGsV4C2mudDKpwmuqpybRyXFWY8TJB",
  "key34": "3e3EALb7UMfwsGjuQxsmAR66aksUZuMqd9gaeG9jyvdVJXXKmPRRUYKrF4qEkVxmpJDqZT63dDrpxWPcHyfJ47eN",
  "key35": "4XRHrYyd9mNioeQLpUM61vkmrcymGsdZKwxAsaCoU9jhxwHChMwXwe9BEjTG91UuqYWySL7ckDWxECSAoCK8n89G",
  "key36": "2m5SLZvAeUHKf4AG1gMpqhBZ21gPfhgCQ3BZVqBeCHBiNYuGdbmPKmgW5KDM6hBr1ybhqXmbbBsEMqRSGv8DjvAm",
  "key37": "EZ7yLXzfz95NTGgPTz6vv8WeNr6eLmoHgoeid8QCciNQ7Lsj9ftEECvJrRiM4CVopSSCxPFBUyv6oSQuPdJf32E",
  "key38": "5dQEJYXCfSvQjbiqQR5k5sRGXVLo5k5VKA8sCAaVVJ3cNCSMh8YxxVTzXYmxoPSj7ArGetCGT3nrv9QduBZ8eu3w",
  "key39": "2HJ9sZjFoZ7VfLkeRUko717utF5RF1Fq6bca9c8Kc1JgM9wtHKxN7B94XhE9Aon77HdtNKUsXH4JBmiYN7Z3ZHGW",
  "key40": "5JabnjrruBaRfqZveUX1PCjLA2o6mSxXnfEv33BEHJC5J9gnHPBv2xUwpTFDPFFzKKAzMhJY7CMXuLRiF9RHawCT",
  "key41": "25PyRmG5zLa5fx36thQfZFKonaXw2wADrb42f6g4hQ2bZGevG7xr13DxuJfosPuG99Nn7CifiEq7pnHG7QpE9yxt",
  "key42": "5YjPz8EVBvpFiWdqDAQPdzgSFpVvj7QwZMWhQZuf1RpzHH2P7G5LGWFdjPXLREsYeZMkoq2FXLQ1UcT3LZzq4rJb",
  "key43": "2uJZbSxqEzKjojiSfQ8pnHqCTp8RKW4q7PRTcb6WWPzd7XDnwdZZSFiau5nAXEyTA17DGqMoVdMioNie9nUWAK87",
  "key44": "3pUAyPm9JA2YY8F3KUPHjdWjYwrCi6SudjjAPmRSR22M4K1Me7xmWxn7qWNcbZLhbp3fwfdR22dneVW6ffe28CL",
  "key45": "35ue54cYBaMLE5WD5NwaYhDEPkHr58THbixMZLSJiwKG6RSAmg6SMHGahjmD3jJiXXUa82ctAL4qmEbK279SxY7U",
  "key46": "3d9zS2uK1WosFL7sG8UeX4KeNTdj3ADi1iGhQEo7KGqY4Sxj354XFKMt4dVnC25ykskQAV5gFFaPec3UJzE9DCW",
  "key47": "2owwzLTieFZyA4pLiQkkfJa3BAnE9FQGH3tnbLgp1iVKuq6a2ERyuPr5teGhPXoCAb5QzwCJ9kp5yZMrVbiGTDiA"
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
