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
    "25ysjWcvVDeu8sLtNodD5MoLKxCriszmMpAMaZQ6JLtAgZbSesEmmBKRUhZymZLc4WZNFdTJFHdJz2hNKHEyoVTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zKh5mnGuAd9KAXhw8V9tCPsYmiJebtJmVPzUHqpDfro7uYXdax11UjFvyUhMxJ3A4uRzdtQPPc8dE4ck4i7DXCR",
  "key1": "44n21pdYHJYcsNt1MgnkqaDTeWTnqXnAGsEAsb6gncyk1pGbrYe23zWyoojjuQiogo7WzGCpJgJm1CsQ6DgT3xtV",
  "key2": "2ZUYQvAafM2QRkvFiruzC2YgsqRm98KdgH8EC5scpSvgYZPzeJcze6TSHfM8Q74KGejdvQJrpiLLLjhTsxVZ3kVi",
  "key3": "5FLpjq815SwQVKCEH81kzGzrBcP4JtLknkvQBydDeCKaECET5pP91j5wShg2Aj93fY2sSbwkXEFyM3F3xZMN23MN",
  "key4": "5v5LZqp9CagUT8c2oSximP38BV7JU28An17KndgywaRZBErkYjyRgHMYM7HcKtKSs1Mb2tcFan9YW6AZ7WYKX8Mv",
  "key5": "2jmsmQnAAJWLcpzfpEVYtELV5Jet84FMrvYHJNeftF7FCaztdBDTbhnBKVs8ySzhutWG4vxMf5yMoJWk5Cy8NyUk",
  "key6": "khnF38hybhagsgVHzwycvkQbRVTQ4ChbtcCermm3bxTmXhcqrZzT6TDYv6tUkzRAKbemg4ozX3QVjy6PpDKVTSs",
  "key7": "3wKvBBfdUPF45FbTLqdsM1jdsHfasGbxrVCgapcHCqWb2QTLBiSRbZeHaGQijTbEhcUQnkQqmKFSsGf6t2ui3X63",
  "key8": "5wM1Ci78KquAdBLcsyEaWuPrrjHbfy1bayKyXQywZx6bCc6GZRy5Nq5h2km2uA4fzUPZFju52y3cHcdyRbVvNUuz",
  "key9": "63h3n9ak9RYZvrERBEUD6A8KrFLGFjHCs94sS2FVF2Uhyk9ZHkcFDiaq4S3Y6ck21r1anxEpHdCY7mciN8B2BQWz",
  "key10": "hgEDp2wXNzwp2fytsrqTwbShVkiwLjVDeVQms1qhXF69G2M25dvbi9CnUCDDyYtZ9QJyUMb6AVrvwaMXWYcnvgQ",
  "key11": "2RpJWthruNSYsXo2Ge7kHJtnWUPwsfArRkFrpTturBadWZHiy9vYWABsGdDyeDZGGcKF6cfNtC8xvSGWSgtMqcLs",
  "key12": "5ojRhhAns72hTfU74PdZjBBGhyGW8ukSqQSzLDgD5t7iWLrm8nfwcq1tEN1K5YrVj7eV3ct1DswBkmqhCR7PaMET",
  "key13": "ChhTYuhB2ejDQKW83tV5HvSrhf6ZLoNdRrg8HiWeci5Vo6XsEn9qf6iAtHXPSbVfzoxWx8JTePxREJG3HCpnNFW",
  "key14": "3heBksXbVrhweTBxeYgGDnaNJXwJzghptAbg3nXM5RDFPe1yDgAfSm32uofzsiayvqYYSZREcBEdiT4xfsNwNvvu",
  "key15": "qHQPFbrJc47k2UZUxBAd8DHKCXZbkqdDa7Kg12mRPgvWjYrAWDpr4tt9XmwyZ4J3UigFahtzhWbqJ58rc2eYVNZ",
  "key16": "5kfdvKLZ3AvHLbbN8GuJpitHdHNoLJujvHh9FuxbeVtgW31NUieRGSDrmmwdARwxZEPWMHF65rsLVNaf8o7buiNL",
  "key17": "X4wZZuau8nfNd4tpNaMzLh5RVtTP1xKfyXGbG9w4iyYWwfnhuo74WA4115rb9x6yfhVbUJXmFt9469mgTzeMhZg",
  "key18": "5vQ9JThuh5fYfHSeL8REYKYAjenE3C1PCEf82c1EheBKw4NSZ3XzqpC9FeGB1yab9sLkcALp5UHqRPxG6aUj5nuT",
  "key19": "55UEv4ViZTuFuBW1YyQpW6yVq32HJCrHfJYcaGaKEjAzZyyd5WPv6EHbvjhMpSdqwTjAcS5799gB4gvU68DvBHCH",
  "key20": "54UcQwrF5sf24hpjBmKwdR9c3PrkDo8ywkQZhAkYqQS4XfZQspHi6cCj4LBPuXcj5nNrYb8RancdJy6ifnbmeiKz",
  "key21": "4mpNZDf7EfiWUcEoSEkyzg8kLkGBWdCk1RoQrorDpZAyfjYXwJxHBYKuPv2DqsA6yvn4fz8iadH73vMDHUs9d7sY",
  "key22": "4Yi2kBWkvkZqvfNsog4vAJEAVYKnQ1KNK9xyhCpUpzCa4DmvSSYgE5x7Y1akHscjp8eq2LNHUuQbj2b7yQimX823",
  "key23": "5GL61T7cxkLLPT6yGBXXhCG38XJviAUe3ryc5SJ2aweotu4EW9R7bQ97KAwdNjD2QGTm7gUQywXEENsYaEvkGJGe",
  "key24": "ArJiWB7P3e5VCwCy4KsdcJjFj4a1QLoRrv2BY38oG1qciyYBPwCtuoZyn1rkwDtnXbusB9NfXZUYjFRKPw31Hcs",
  "key25": "3x87QQSUqujRsGH9Ffis5h8grZggKPQ9XpRCnSgvMznBDRVgM6NeuTwMyoG48HPAtMtSkEGzHUmyFJwqXHXzvDnX",
  "key26": "4zAV1c7oPVgpQuZ8ao6nUXAKCmykZzg6KH2La5rgiDmGYABsJkp9ZfiCrxMHWPhb4us6Wg4UkKiHSFpHMCMVrmVY",
  "key27": "5bLWACfhr5q9yr2rPq4R4UVeXduB7yciuNnHE1a9T9d7yi6EsdfxPSAXSKEPaBLHk5x5uwqpudoR4dRZkZfiTC8M",
  "key28": "KZeyx6dmLnWjy1wH3m5eFCC4fGAJjJe7NtdzS3LxSuSxtBqwgBTbMipATgB9TH8G2ysyhS9CEbKiVKCft21yDsq",
  "key29": "4emUNpPKmPY7oZMjKHtF5qHmkAXQAznUjZjdmRcTs1ecPEAfx5Qe79P5zfVL8RY9Mkc7DhLioUZmcMs71Z2427wa",
  "key30": "5MAiUWxpPvweCuZnV1L5r5abefMBpWGu6QPhytQNL4CWaFSyWK7qYG7W56tdfT9CpZ2KD2UazqRqggg8W6q2DKPH",
  "key31": "62mmC1JAJisRG1bmUj2gphPkQThFZcL2DhBLZ5f6Q7aYZMKRBiCFSFqG5N2Rb1FbYNK66NMK2wokbaASbns3EnCn",
  "key32": "41DCP2Nwz6GP4HkU7eXwBrStxwDhmCwsaFPW5ndDFCAwiz7ExE4o6aeshPH5Kr5A7WENFuTstu8rADnrLv2ghzvZ",
  "key33": "3PfRAKwJ9E9YDJNsXwgJ6EQEdKuFXkFCKXB8RVjirAFx6wscgTmnXDq5CPhYh6nUrUj1EgeXPq4cw92pgoVkoKSq",
  "key34": "5UpGvgKhvFs8fAB7ZdcUtg2Km9ukdg1EGogzB5Py22tvHqJ8Xnusaui58Zf18Wv127r5kpqusr9sht7wzpMu4RtV",
  "key35": "3PkJpwCFa4fVDYXGQHyMmSJZNtsiBAHFAhepP6RALhxLxJYtgJsxEUEd3HSxjYZWq4ioDEy4fZyeoGP5rF1hcnPX",
  "key36": "zTLx61XLN8VaK1sCK93nc8pE2CsqTWtno55Wa6GQc4fw2tGEeCFTRTnUpA8a5MLRLNmLp3n81t3nMWsRdFwEeup",
  "key37": "5ZDWVVeBWfecF2WvfKKieNr7QWy6Lp7WVJDcLuiE26He2GZJ65ihg9ge9xh6GfrBPEGRreKvmainyCA14zC97Ww1",
  "key38": "3D4NmTnADepZt1CjJSxuufubZN5hSD48SLp6U9S5WrZ8x1yD4uzWiNRvLAeTg7tkdg6t9qnz6nMnm9mQgGxQMUYf",
  "key39": "24jTpB4wQEnSUEmoJFGgsFQNfJ3jqkfGzeanTQD19MUBjbD4iJhU94yGccyjCXvrSvoXJ9iKrs5w1CVs7fQh83CC",
  "key40": "MXt1jqmReE7AFhxVNVUuZzoxr26PmPDre4aPYfPfsRFwqNfUF8iyvK7964BSeSbunB2izPkJqg7p5xazjMf8dvA",
  "key41": "iHc6upovZPoUkiW5rJUGU4KMf51W84MzqNBZBYN6V18KgTgJD9Enmpo6zKRMZgcR3ag9BpH6mUk5U1uAh7GLBvr",
  "key42": "5zSueEEKkv8RVi9YeEErrUfnaDsFKCA57Ly2UF5AzUP7swEf2A65rmQ9VHCSBqr1RZVe8s76877JRCRoaNbezaHR"
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
