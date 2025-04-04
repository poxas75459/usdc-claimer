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
    "259qtg75uJBs7RtgQt8yKfT1QQtBjMjh8v6HFZNxboCX7q4quHmj3wH1iLAmZHfV6GSTsm5oWwZmBsd8nfBZTpmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tEfy4dTi7fxebXEyhufyu5ii6YWNTTqsymqiRHjdpuyRp6D1tszxtiFMUMXah1v3aRfxstjnPZDxSfmt5FcgJie",
  "key1": "3cz2HPRGo2xGMg1sq9nbmkpo6DaE5VcYHJCGdJDc3KMHrHZNdukufFSQmooUpEg7GuavJMvqirtzinCsmKG3LP6p",
  "key2": "4WALuA9ZDeCxZvJ9tShCJGXjwX5KFfSmVNtyFqT4u4ZcMV9mZyysHb76utCGNj872tXRW4VqemHFR3TSv5mEyq2r",
  "key3": "chBCgMhTYLAAJapcz79UcfUUni9SevLQ7iSZpL65mmag7Ew9ZndsMMr3yiirPysEjbV9ZSeEDJn3q75ic6ywCJQ",
  "key4": "3EDTcmBwznW41H2MnB3gntXqL21fvo3b6Z43PH185fBh6MNM751qhmD2rPDHF7Lcd6FuWZGVb6hzfcs4eg3MkLGH",
  "key5": "ACfLQnWWfDWfoCBGAyqVZ2SvNvWTsX3oL6BXJFxsqECy21U2ZxeTztdKTsFuJaESAN5UYESR2DD9GGWz2gQpe12",
  "key6": "xZGUhBd3HhRSQjMnKHPC1CHYqcfmUcuVuoFUpWD9JvsiUpEJpHrpb4WSR7XtbzZwoGTyMyqvCZwFVtvv8v8JiHB",
  "key7": "3rw6TtdWTpwKKZpVLMxPnrAEWmyVFCEKSez1TTX1LXmzoXPxULy8LjQW5JYjxi7oy23YT3cf44YXspEUG8QgUPpS",
  "key8": "4fknmoxAvJWDCPrg6ZUCfwVnPPYjWenY4b365S8dphaGpkTARm7pku8g5mF1rVKBiWqHQ3s8UVfmeZxgvcGgh8AU",
  "key9": "X4VS5jhhEzpW5uXmCXo8UHpr8kJDEWzofcdyGY6F8iLxKQtUz3Rb9NVQ7UM1WD5tLgJgcdpziRBBMnJ8tGeAyDu",
  "key10": "47CsqWeoYugGEXP7SJPcENwHsksfS4kHo367bPqLHPkQK9uWTND9E5YrKDY3663o6JuxcnHgXhiuHJXgbHeNbWwJ",
  "key11": "4VXCxsSE8jfMhNVySP55GcVibq4aQS6HHvfcKkBegBfm1SEHzAucN99QWHVbGFaRx3QoeiRzpKivmKHUSmujS9bN",
  "key12": "Qo8hvfhhDVB7GKPRwSXxjoxmCcbD4jFcVgXxqesUw1KjfGveTGjvLjoWqDN5bgw9gqHix5WXXbr9dh2mvodJi6S",
  "key13": "nSaqwiq9iYVHWLsTcNhXxy499iHwfM66AsXgvRcSxtfPRAV8k6cENSGQq8fhy6sxR814tmBnZuBkcBNCUxfAvwS",
  "key14": "CSXhF9iR9ogYf4JFD4TrjvaQc7AGEo5v8e9PDUwKeqitxaEicRevEKLtCNjnVbSanewm7bcv1MfG4hiSoerSi2f",
  "key15": "4kMAcM2DHLfPDhpqJkU53kYznTYPQPDWsrV3xbtq9YJth1Q1PyeNoT83q7AtpmQoTxSCvawD2yBUc7bcFqfKHV2D",
  "key16": "56UPfKvQx1inGNABksFA9Cid2iWYi2d5ppueUfV4StM9MjcPX62DDpusePMKAeJEzRECMvZFAJQygSGVDbkR4bmw",
  "key17": "659MBTztPTjZJNGHnBScB3Tk2mkbe9HUuTSEikAfZ3zXZVuAn5t1GmQ5qN1H3DYNWGWe6DWonPMgFtkYGKMEYTUA",
  "key18": "4Wk26L7SPjydHRsJxCq3tWtsvkZXvPFctfuvduxcahWmhCbG5G9QZ7aK2YmgCUL36gHC3daAbdY8TXZxj95E4dV7",
  "key19": "HjHgScryQQZndksMryc3tR6pXwNsLLkQtE2nxDdydehr2oWadtrS33UhW65AmMJQC53zFtHFQwe7tBfG9cd4DSj",
  "key20": "3ktAodXQc2SZEWAqEpzNypwRfP4CT89mpobHHrvze7PdgyQTbvUKxdUt1wX9L1ivK7wDM2evreCLc7MsdnudQEsp",
  "key21": "2xYCD8ufSoSpuboh6aUjuvg1244ZRniuQC4pAGezpzYmvUUJzQNuhM9rynmhGkqeCF29Tg4VoCyzwBFRPswXAEEP",
  "key22": "34iMWvF11yaDcMJid3FmHX5bKWcSrSvyK7xy8F92pmhbaKWejou2d6vzmNxbzYnHySjWg9zv4UuFqYxnswJMDpaD",
  "key23": "5DciVy3ZhkR44tQLxGEh4yvvzWwkqens4QfDxp1k87DChkkApFVz9HWTJvswGrmxqnZbyaXhA1BaaiAzEUg1tZAT",
  "key24": "54oR16ec9ZvLQD2xu1ZgrMYRB52rs34Y5hppd4t3r3cuWi8pYxSHtfK3Eu1grpBthRxQzphYuixhtGhNn1N99JvA",
  "key25": "3VcRyHks3i1pFHpGaVtps1mNfXtubTWYPhEystivwvECGrc4d7fSXwSHXzBvTHsLNNd6jc9NSR4Efggd3apqqapS",
  "key26": "5KNd1dioUxvgkSey1aViWZ3reg3TN9W8jBT985SrpnJGu2BGfLDQ5Wo8DfG9DANgXSHJ3rNmRmewr7USxXGMNmej",
  "key27": "2MyXMmJfVpiFStzz9yxQmoABdxTip5qECVFjLMaXeHPPWiv8wc3xt1UDiv6PCDFdH2QUxt3DtSULsvmHxjfMWk41",
  "key28": "2aj2BhrfKYyZ44hvE34hF3TxBQBJc27QAWmawgfSsYdTQ62kP99b789EZonLmgqPVGRpbUKYQiJKzpdxqBJoqkzf",
  "key29": "4H4Kgg7Ek5juH3SPfjMjNP52X2x71SAyyXTYZYZet91T7SbwHjJQt99cJPjDrfzpH4sRnfbp7Lw2r6WGVQyfMTGw",
  "key30": "5Njxe7D92GeUiPXEpEeWYnSCVKP3vkVAwpAmj6C5EBG51Mi7m6vncALQ1qeo19C9orKGAU2JAQeoBqD4BWF8JV6t",
  "key31": "2gzbFg2Td8FGM7rRcH85MjaE7bgS7N4tgmF2eVsUZgRFvdjfy7ERtg3tJTDxrnXpfP7iuDQeF8pz5bYRJSqzzwbm",
  "key32": "4ejFye43M9Z7h5cnGst8tkvQYs39nhxfPQ9qCX4b82ETYB1E4TNSsaFpRMNrnf1jJH9XtYE7suDV9EHpbhdTdu1U",
  "key33": "5DS81oY8AbdiwEpvNW6BnBJnw8jpDunvxLmeyEw98XZT8YxNFWP4xAZJQ8RGuDV3Dj5iw4FTxRpuhpn6MGdqwh95",
  "key34": "5oStdGmR7Gmz2UxQqNmKd2Ht8rN8EGy46XrWhdJb4xoQRmxqsRK4RVweGxL47sbGDD6e2EVqzhQ6FcuKgtNCVdWY",
  "key35": "5kEHNKY3fDkv4QrMy65n8tYarzydab9qFhbcgnjjD6R76Eimx3vPSkRCDc2juN7y1zGPS3RF4HkLfrNGN2HvYBFh",
  "key36": "3qtcv4Gb5bAmRBgAfNuAyrtTS6XMq6PhmeSXFjLKL8QpmV1uUiBX7tYRmyBMWNUqaNoJBcxhZwgUteYo3So5kSHs",
  "key37": "WHDCzccaeabPjJg3Gib9vo3JrA2E28FGifCSVXvAhmfUTb692N9ww61VMiyk9GrBkLcnbK1YejXtt5hogVWbPek",
  "key38": "5Um3mgoKM5rpzbVFmSvCUXd761a5Nne3eK4kaJy6rJR1AKAvs1C3C3nnTR7PBbFJPXuzkcE6SJHTT1vVg8SYgQXk",
  "key39": "3HBhR7sqtfuva5Ls8k9eKUxmwUCnfsA3e2rAEJoeKz9aYhdsXQLbWLiw3nX2um9i3yEv3GGzsG8ZWu2gJrMY6fGY",
  "key40": "5UpLf8uPfgkEapPUEF22TJ9PAVvVVAtywXvFWBahbdXU3cD7PM9YkKz62uV727jfWuknGS2Z26CiWMo35yRxyZpY",
  "key41": "5gtHv734Nmw1J8KR8D75cELqcker9CUAh8MPUVTaBGZdVSGfDDGNQQVJtNQSSysPK4TPXD6nqJccjvs7aH8HQHbV",
  "key42": "uwftbWjHqoFjSoQLHuHKkBtzA2KM3yGSpNZCQMbTtcH7aRHBMt9MrmPiZN2xtJN3NA5jruMYE26bGaaHkh4GN79",
  "key43": "2We1LdchUesSsQSTowbS6deyZVPLhT9NRw3Np27z3VZskgHAL6jHaNtpeD7YRSqxzsUxHEAvgXxEA6zmxPPNMvY",
  "key44": "3AtPQhJkqnhq183CieoMYigJzmAgSjAeiW2EUKPk3UxCVtq3d5JXaFahdjHAkfSf3pnAKEkhAoVefr1nNKduwhEv",
  "key45": "4ETLSSPemTYrvov3BruVLAVRAQ7gSvvqeRUfhE3AjAupfNh3xCX6fue4VSRAW5TmmPrJsxzuheWwpT3htVTtFNJc",
  "key46": "4yWj1mko5vQp8UUTjaAnymimJeexMAbsY9B3Y3Lc9kFCzNAEmYXKDPobDo9JB18NZwAN8NzVaUXckHwdKNDSLv49",
  "key47": "5jZmtZ9q3R4b77C1KYgALn4FncfK6czGa9ritWjMCdMVUDtKDGhVUsA66JyL4bJmLfAhWggJSVVSMgCVwsNmec8i",
  "key48": "6zrwN5XrnpsRfob6oX56iind9UH5MnV6Rf7BHYAqCrvKYP8u2BDvsETo6zF3fomXVakMK24A5gJ5DTWHb7fMpGH"
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
