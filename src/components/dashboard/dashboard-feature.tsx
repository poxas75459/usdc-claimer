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
    "2WS3STiM9r2TZtaMD42hs2U4m8Vp69dxFJA5e6AieKnYc8LGv72eWCHc5BNE6F8CxoLtaW7oGBAs7Httwwfdf1ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WZRJVVhQ3KbNNaRyh9EWxjDnHmCkqcpgrDq8EAiUquyXbfDhXP1EH3N7PjiiwEA67F3CKu3ra6ebC8Z95KHWiT",
  "key1": "FmRkxT5Gq7QSd6LGiicbduZVXujjUNuTX1k9Ycqd11peL41YdmRG6ie3MoCR96WnHBYzgoHD2uBYGRqLeAshcSs",
  "key2": "5C46hLyXjAuDc5tudAyAzWLK9Q6FR8h2ynNzeHwQfpeFtCsRGZ8LbbsPVJQTr9b4hAXQSedmt7d9HC8Q6Gd2up1P",
  "key3": "2xF76MkkfBUPA9m2zr6YJA7UB5mmk2LAeiSC572dWwecGqBu43HpY9LyWgrewVB1EWFHSYWiGaKxPYkQJXfgv5W7",
  "key4": "3UmoKhSK5TagHek7U77nGSvAkMHAyrTXbw5acccg1jaJrteTQTPGRGxuWB6dTFynWshLmHnAWikn6unsuEZcJ49P",
  "key5": "5sg1bGd7vhT6W6VEGanw6ckqxKziVgE1hAYwyZkpfM6gSPj6Lr3YvnsdVNMm6wNFkWAWaf5yJ4ovcnjGsCnDvd8C",
  "key6": "4vVc1VyPLHji2ziH7uoL8RL8vRzSGveTTweUr5KniGXCSvyxKYHhJFmMrS3qEvcczzJbcXJ4C5MLNxkqB1qPbgZS",
  "key7": "3by2rzFnbxUuSZPSFGuWTKYqZDsibNuQnfw2kT7hPAVQB7aMyGwaJK8TBtRbCC2GreUDRJQjUDqnt2imrF4GTeh4",
  "key8": "4zJJXjNqM3T4QG3rLM5qG5F5QDdQk2HMLfSfEG6nPUDhVBPPKGcdovvz2m4sW4AAdv55bDUr13ZNg4HCqhKJYA18",
  "key9": "5oUhNAh8gAfX1qB1TgvRuapmbfMonzvwRDdf3JS8fFACVTwS6UoKNS1GZu8jfc67R3FjnEka3ZdyXUm3rWXJaosi",
  "key10": "4J5JNNpjm48GFBYEUSaCLWGLsAiwWsLCwD4XPbySuA7164tr6YSwtNTFzJ6jKnf33rrZ7QRs1RwxJjW2qGMw1cwQ",
  "key11": "5CTo9nmwkR4J3h5h8WAM5UsusuDCDh6nq3kX9Nv4z9RQF66tnVfeq8dgguYZoZcTDBxgZfqeeCArthnPa6SKTSga",
  "key12": "3wBN4FXdNcpSxz3gmjYWwZmyJSVvQngCBFzJBiLDBmBWTtYAGRM2EzVnpJMPvi95K22taQTsq9BVS6PAvE8WANtm",
  "key13": "4gp5UhEUamMX87iwpfFBMGoSQq8t9gH2DTARoNScYHuuRjXEraQjjhwEJAfY4UNjfe3uGuRvVt35A2YiuVsArhu1",
  "key14": "2F3X4buoBUeccHyvwCypQYvYsNUXFZ9p7rSTC6CESMrKTAwbetLo9RZhcMSsFSuzutWLBfcYjiYoxHnZjFACKusY",
  "key15": "4dzKxHVMtcT8YNDQTj7ghfbkbQY2NYdDJUcCPpQuuWYoVtdWvjUvJfYEJsPvfbg2b92fPmyRWh6UmXdUFRLVGRdF",
  "key16": "a4B7yqFijQHawD1GiuC1TCgQ4pSHhu9bBdzXecoJkAcnLqGLk998fS3LYRYPRnxCaALtUohB6SNfNUMgSwALNZf",
  "key17": "MhyS8C2ZBDamGFu1QxVQY25YRLrTtaVja7wWktJR1icucs28VP3opQahb4mPqFVrAPYoCpZQrh2c1cCY6jnuXHC",
  "key18": "4UEfoLGJvNUJXstByFvSk2emG9BFv2HVB5HKjYjibhkeQvZkdeffxBu7q4LNSqZQMDzBMk9mdDM2iTbtxrdkg7jd",
  "key19": "3tGR8q36RtPzjTzrUCnyivpP4828BgJpmCLEx6rusH8Exa7hTnMSKnDker9ft2aEb41HqkQPPqcxHABXbKiY4u9Q",
  "key20": "nnDrowZjCicBLWA4sgs8vKRnK3Hh5stPDAPRcB54rhyYs1E6z7RJvBWmN1JQNgvfpeN9KyDYEtxB4Ux2B8z8Zbk",
  "key21": "5bCfG8LLtPGZsmD87KybNfrwtsGhFy8hUdvSWjTgYWEha7EiZ3hNGhLVhKTf6St6WdB9VSzKGnLCFVD39uGAB3Cx",
  "key22": "3vfNRcjiGQGgqQiwxzVtrzGCgUQSmfh3PazcenGEZfaJhXUDf8YSuDcrf8Ax61aGgkC8n7YXa6rxCqMTKQam8yU",
  "key23": "2cSeVioZWL8vSktg3Wq9k1zK3e1KsH6Vp575iaPJ5Hj35HKdYHextfFshd7sfehSeQriiL6vnwcJFT7JT5nwizHp",
  "key24": "2x5iQdcCSAXqYrAC1sPqg1b3CGfPym1BpaoBKwCfFTH1ENw5g5bo44HmMtLeCxLWrymEKwdjxKkQAizya6JJFRQH",
  "key25": "93NyTwfmztQ8toVRW74PzU2efs6za3STLJCrWasdtkkPRTPzN4dYxpX4CDiEBKQJAPpvYHs5YCUofFRAoNJLCCD",
  "key26": "33uiQazGAwvbNfGhKNknnxx1TWJYW1TFf3qDsCF9YPDwi7SyDs4C6jxEbENLC4UGomwPRLNoS4osjxobsunA2M5V",
  "key27": "g7Abjgagt7yMU5uBG1k2nmhEJy5GcyiRV7mWfD21FsUwhEMhUYCvTyZmqhFNXHx3KdPvXyh8LhyoqqiLrcDnBLT",
  "key28": "2qGoquZcpwX8awdAibFPGEqdkz4oK2SneFzKoivHUAdiBWpnqNd3vHSNXTU6Hhte1KGpyPT9L66VF4bKaKvAYLmY",
  "key29": "2Y4MVstgjZwAnss7Vw6bmnPrCmbLrHqgxksAMVM4Ya7uPiLFYg7uyRLV3AUHYm9oRHxTVMsowMso1QHcWmxKypTT",
  "key30": "29bEcJreZyBwVm4r7eo47hVhcePrN4xaFktiHUx5Z6GoZnQumxzSe66ikxDnn3TeMCgM6t6eSP8BZmz8pFJqooof",
  "key31": "4SnFnrasjRUqSozErHHx8uqBQFD4DM4vDcbK1nrRwbeWuFEjQb7WkbzZ9gqKsYjbv3DCmVyWPr7GPGwfPDvowtt6",
  "key32": "bCNRvVMKgAAFB9hKoMRoMkhH9QxjSir76YmANQwAzFeK5MXdk6Z51A555ogWJbv1GPFkK3UPAddcDsCFrRBYwrH",
  "key33": "67PADd7Z3pUyJuPhmUAbteeHCYbqM973rEQJxR3G5zafH52poj1Mcmn5679uJ5Nt3UgH4oNg5BGLDTNpEebxmJk5",
  "key34": "3AptSsVaumz2AUPZtziXugtrkkLq6vS9vFne6ixGdqsMmTkyysftYRfasKUYHW5tnTPVDRr3vbiNAuBkkPzEEcbX",
  "key35": "5LcW1DinVTh9UanHQHMjJe1KrQ75qBT8bYc6fWU1hs432dAF8ctBWwnP58AiQuLD8g9JAJd7igLNGTu948iAiYHi",
  "key36": "546eRUe9kbVdtMh4EDkHYQqUHMH2p6ugU9eMV6m3SARiB3TgdrXv8WdJprGPBNATitAdkZEpfY6gRMA4KEKvJbSj",
  "key37": "mUZecr3zEzYkbqRCxsqXBztcK5oUiC4veyuYzhmJfc6mzDZEt381H9kC5N2Y4nhGgPE9B5AsrM3ciGXkMSnYo1a",
  "key38": "2gLHtiQ1vvu44Q6pM2sBMYpRpescFfah9xrxdttCxgYseB3nFN2YEdESbKYCPiBuemDxVaSp81deZEvgbLSp2DP8",
  "key39": "2DHxjrEtyZffaktJPbu5HNTvVSVCB85HmbFLckiy2oPBH4hBnGYf4oaiBJdLYwZ7R4nkqh4CxMX46yDH6aaxZjBw",
  "key40": "btKn3iEKUCQrvR3ymFjWaXphXmvtpfsj6NsYXrXfSaM31rujLEiNQAG8d2WFwn3B7JaUqQ5UAFpeq97d4A88MaD",
  "key41": "3m2NxkA79Qnr2JoikEahkXLZ9B5bZMzxxD793UH5yShgMY3DHnsdnkd6xpdDaRJYjdMHWWgEL5sqDVY38Be7Yjje",
  "key42": "2YFMP4SnchR13c4fkYkgycynXre4cdy9MnfEXAUYskUtv2xSFJHbcnhoBRGFzF4damUuP7QRmu3aAptELp7JakT3",
  "key43": "3XDYJG9coqKkM5m8qTJtzT1w3amVewJpwtdmoPy2QDp6NPKA7jpsgRxSvFuj7EMuLyGdWp8P1xRCcroByxTfVhL6",
  "key44": "3ktsMJEjjyAXNt79mJae1mJ2hJwiyLY3gpZSefEk4ZqV77s2T77yZkDV5Ja5MBS6onNDqRhJp1RLTVBSfVY94eQP"
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
