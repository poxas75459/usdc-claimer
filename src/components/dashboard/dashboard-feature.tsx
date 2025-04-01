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
    "m27GYXxdhgL4MANdnYRmpftvWzxp1J23JuzaGVXkUyqzmwdKZj6gfejakjR1Lqi9onu8sBprmGynYCzMDeLKVMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zLXmRtcAr2WKBQ4Lj4cbeQPLnTJcWgdCihpJfJ2URSjfouJaZcTBSbuL4qoW2d61uMsNHebYk1QHBJEWHV5sVf4",
  "key1": "e9sfmVZvrKKhxebkLKKNMF2BtPfG9cK1uifoMVctuCN8qpvG8dXunWCDBHTuiBmGCeTJ9ozwX9c7cLN332gtw5c",
  "key2": "5M4ruTtYPdzhGCdW2213wgXtv5ijMpsfBs168yNmZ3pUSLCQu3DV7dJCDtDypiJYT7pfi1w4CUH1zUKkrQxQmYiq",
  "key3": "2GbeUapgKF9ENBLYy4M8naXLKVE2bQqpQVyw6fEbpp9Md7oR8pRuS6ccg1YeBcryyRjbfn84f7qVZ1f95tfHZEPc",
  "key4": "3WSxzm7ZgeoLGjn8DqVMVekW76XWnGTNbn3jVrunMGtF4Cp1DqSUSwV72WaDf7yi5GCGSYyjfGtGt7451JG7WskK",
  "key5": "2KLwKRXGAX6uwuBN847uWNK45EXf28Na82gv8LKbqWDT7DkT2RYjuvfWt1anEwS5GHNwudcVp6UoLSJ5xRFHWkTC",
  "key6": "3FDD9xoc1gh6G81nHQ9icPAfJdf2smk6vfoL7NbeSe9HXCsDHMkdwmTLPUnZwH35xXLPHwUPC9b9PoRbz5BNsM22",
  "key7": "4rtay6V4EdpbFZcCnDRQSCvR2SC3HbhX6kokH6MdhgUakFqNwhWykhNxNJgDNGmssmQ9ghA96DbCnvqqV7stHGQx",
  "key8": "51oRaEwE32Yp5UVcLV6VY7D7NjAtFp8m7oNzBHsyxCuxmBCbhykg72EcnQdZkLyU5kFUmoXaYutyrFMejyCEgNQC",
  "key9": "3fKARXZE8caKNUCiAipfEy7YsVbNHbhKUyBVR4NfUvpGgvQ85AVTfyuSLuunUAP8ewGsWsjWVuHQWXXD67o7a5Ss",
  "key10": "3gXPNND3wRmH3g7iMGnn1DNF1j9pJTpjZU7bCvetBq7ELWy7vdLjLnJeumSK7AQYLzsuB5oPnw5YMLwiPyQYPHS6",
  "key11": "2QKXws7R4w8RF3JczkeDkwp1b1xuE9RbUy3DT7K5zb9NAgmugY9HiHZELkY1WLGJdYvD2MscBRfTLPYV4ftWmhus",
  "key12": "2Bcx5ZA6NwaDZzpTgDCkYQZaSNjppKbE3EETrAPnZ6NTnn8T9ripWHKLmvhoK7p94UBGZovj9KoAyrbtWvi1mMwT",
  "key13": "magy468eySrhqmCpHFz3CktNb18fZbcRULnbb9VaY5KWXACjUzS62YtCJBgFMpoPXju1syhQ5m5kbEsya42XeoX",
  "key14": "2u9PGwyz63n4W9nEEo9tCeKYYSN41avfZvoekEi1EyuHwrXiUjeoMc9LUyTc4VvsrPM2zTyhJ8rHkZij5DafsS2M",
  "key15": "3GHDo6i19M4FxzNvNFmHVe4RD1QBZ64Fnut6aj38UVudHE1aSiJEbDxdmPyknqqpxD4z1gST8ZW7S62ZWGaem1Lm",
  "key16": "3CbyyRtZ1K42y2zSPytRswqaz89EMSqsmZ2fPHJVbs1pNuy6T23jUoFBq8ZPgVZzYUqN852iuobvmNNu857PNhuG",
  "key17": "5m7Z5FkUB9LBtjw6EbLK5iHbCgbgAeuXVcPdkC5nT4ed5P5Hu8PS4KmAoViueLDkVHrJBQTi3z8o2GcekfSCxYBN",
  "key18": "62VRB4Ut6xbFpEtsy2Rs4zCYktWJ2rqT3RFYKyu7j4ZkCG1zKw6zBMfx1oxxhnYmgmk1DJrxvpKBLyE5akRLeCZ1",
  "key19": "F6taFAHZEfa6sQqS83MxR661NHuPn4SHdLdPfFTZmxgoiXjSbD4Ap85huEtR5wnVdk53PiAkrSMCdC91d83sHTj",
  "key20": "2g4GhGwttkNenL6hKEr6Tr2R4aL4hn7Ucb94sJ5k9fnSJMRCBorKfhgMfZRjgG3PpHNTAfzL569HKTcMUPATYw64",
  "key21": "2vbydAF3Bw17pbzG4RWM3vetukryREPvzq4s81k8M2PM8ZC3sEmNfeWLzF1ovzQfofNuNk4okcp5VhogMYjUGATv",
  "key22": "WtM8DPvVXMZWuP4y45Q5SigijCwSvJ3jtRH8DcoN5M19wSiEv9cXqDB8gD6PcjdeRpsieVwaqGxwWA7m44ioVer",
  "key23": "VERoqV7bDtTvciB4DZT6kkg2bhGWNT43EM3Bhp58Jdx4qXWQpfSWmY3jc3TXis1LtTLrTsRCb5pNJbPSWeSwRAb",
  "key24": "3kmAGDupU7foeLEKZKBHNPNDVPcWiThGNFUhdgF5WrmP3jdpWcdUGyhxWUf6a7JDDVVtRwn5xggUJGohxcDW2c7c",
  "key25": "H8KwADo7zijE3hnZ8tFdgcfL5vwCGNnErat436geZKFaZU72kdYmjAHP8GJrUJqtoGGgcLtu2q1RG4SWPNFXgET",
  "key26": "KgV3skHU2UhyH7U8iCfx7wbEnLcHCQWpuSGyXKpr8DYBSEZuM4Ewr6Efk1Kdm9mDMnyb4h99Eayh6RYS4yPfihS",
  "key27": "25YxoryAAo8f78aXza7jYZRDUPae3ubcfnQBsz3XT8GPveSKPfxx849YPLurmJcTeAWR1yT6rhzvuSidSVQKfnCr",
  "key28": "2k1jguuKmHUUAVmrkPN8m42WcS2QSA6efRBuDSdbReNkSYdEcQ83q56jqaRCP54NdD6iHRiPr9TgVaqBSv3ocnqL",
  "key29": "56myaQBYbcZrnv1T3wLyN3igk6wzKNLTj65mQAiDKV5EMDc3dad6u5nApsbHsr7aLUwHXmSPwCYPvNkEk6XikwXS",
  "key30": "64ArjKeUuL1YCxQWt4FjjEZhgihr3FoQGPd7mRyumWK1sjDmhUUUURxWWckWXspHiAHyybxeWEyME6Di5VqgmBt8",
  "key31": "58hJCJXYrn4Ly8Whh9CitsEgpwUYo2qpmjeUDWoUwrwZMfhG2cyUvAu8QAAz5svBGJ7tx4P96LDY8imtdmMnipwP",
  "key32": "3qJEZ3wbtsWGd8A4htXNM2YgpLj36ezn1PpDmZmErUTcDuwx4pXvJGEm8SMAujawgbKCN29UUL6uHUEpXgoLUD75",
  "key33": "2nPDVyKzkrrnsG69PoiGh2hvnjCfCPTNSn6YBaTWduMykWCKoqZZ55fws4cHon7fpp25XeMn2U49hgApGz8VerUD",
  "key34": "LgHxDTRhqZaU4ynp5d68uXFYXRQq89mvX6HNtNkjcaVk19uuj7osZKq6xTaJKLYzfrmu9jFxNgqzLh7ARhw2fZQ",
  "key35": "2HF64wHng9KoCtkVwSMmGBRspLBUM7Eeyt6gc56EfEzaTHtUimZNEyZq3zug4eDFAuuJPhsh1ESrCJSphBUFVStW",
  "key36": "2STVQaGe7Dd4xGQWA9U4NtthuEtSz3AHJZiQzi5mDzB9kYAh9fdfRG1gHpk6fECzUuvrAqBYYes3rBuzvLpZdf8u",
  "key37": "3HjSRQcTeZ3RVR9o56do82xtsVgo1kzAQkPwx1EkspT5pdzZz2GouPP7m5kcYjmSnG1zNuBNNTP1UCqxGWbcwrZP",
  "key38": "41AGL4gJU6sy1z3Wwz6MmNNXakJAnNHzvN2K51mmgwoakg95iqDb2itmcBXe1tm9WDKvBfeuRzFY6UAMisQ3JPeD",
  "key39": "3CRvYMz1BCTWZAzF7WsU56s35dPEk8Wc1XFJKerRNSPGQPh6cfrjhRxRQkFSiVr7fZQ1x6Tg9KXaqw2SDbGjeMT2",
  "key40": "3VbynkUzgqVA8itfbVaNTpyJFtJk7ZtZuD4kjNMsXz9Eu9Ec4uyYGMQcQwqwEKE8rG3GWqrPC6qBnueBaM5Bot7t",
  "key41": "2J3vSaJcVK8okFEtdYaRk3STfvrd8pKJJoj5fPEq8vcdVRa3Qas91ARspidctdLYCASTjg6UqbzM1xV1PTN1oFKe",
  "key42": "DKRb4n7yyc63Z2hj8WbymZepYvQD1nN6xvMqAVFtXYZ9CVgCE35XWCASVVPPjW8uwpSNng6eX3mtPR25ahkkvEe"
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
