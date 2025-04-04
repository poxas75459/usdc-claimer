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
    "3e4XGKGi7qQC65ndS7TCLjErwdbdgfExmc72cCcDx7f87yCSLnAvUFJqpvnFHRtLQJfnjgbvDo5YmeYMLZav32WA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GxAmQyxEbC6UdWDFdTZuNsLy1Uz1H5cJdcu1fRYwVc2hqrxtU1yw7FT14FTpwkcHPNS5ZCbKaKTyvqVmjAPRGnc",
  "key1": "4xj4FcmQzYN8h6EFrkoHSrqqiJDX2qR2Aoajh1QG2yBTosyaLPLHsBuydX91wmBqMZ3FQEyFKDUJskrutD5XVtGk",
  "key2": "3xHnCjWZ7SaJjKYF3pZjeMzszn6HeLrXmQCDerpda1jyQUz39dLj5rvZfXvNWK985vbhq52okpqZnykfFTbeW6jb",
  "key3": "5SgYFuEPQqriwpnjLHEJMagSaZvGkRKeMkrBR4FCXxqeZztDUBZFv7Q8jvX68wdSJbBjBNGB1yEdQYgsqy37UAvt",
  "key4": "EtDf4KrbbJYuaqNCCyCQR9BetvyXTZhGqWihdT2puzZsUxgeQhCGAqc7q6YforhmaAvdCQaQUt8G3U79pRVjEsa",
  "key5": "V64pVvDMGtzC68YSqW4UTQYwxKsnbDDgRAGPASHUksAnretFjWtgassMWqRDdmyUB6A9cM1NQqCu3dK155mADJk",
  "key6": "4HXytHg6daMcVhuNhyvS8b94GpxsRQwwSqXYEyrWuGBVMMu4sxRaKck8sQCTSU3AzKfqHt77hqXyR76GAfnAPmZU",
  "key7": "576JZs4w8p37TvRrFQ9CAGyQ5TBCZzyvDF5kjDTNDSSYNERCMACmVooTTwy4P9XYsjpHkp7uTq3NUUs97mdJNrw2",
  "key8": "3CBvPwwGacDibij526RUNdSxevUM8QCpCVbvP1TGQUazioiYY3xfvj2SJzgoFtAXNp8TkEtTSANU3pQ7zfCaZ9P3",
  "key9": "22BqHif6pvriACf4v267qsbhYsJMGt6uHfPqfxKogjzDXVYGwjv3aAnrKrn456qwHM3FpzryDzKqtczDXebqxFCN",
  "key10": "4xv3kQDTcPm2UnstSoxUEenmn5fgSzzuQxUwh3TgJdh2XEWqtqnHcub7jjiSbsxRM44aYXjqNDaVeYMkgkTjn5Xb",
  "key11": "5vM28bLvgwotGeErhfHr6v6hSniyXgN6iMrg7tsxtvGK2dATwp7yNEe4NEscjXpPJTBkzngcPyYwkCqt96DpCiS7",
  "key12": "3Ba7SFHmqAqqVSMtTzEopEQZmsKp3j2q7S5kVV2y4ndymqLyrqCXbNsEhgFP3NnLEcqjzAUVxzi72hptMMqadDoF",
  "key13": "2KNvAdAEv3f38crFe2P5WNzYfuQJsm3HGr3waGr1kYaHM8SJ7VVid4f1g3S8ohQbeZzMPxXP6H7M6zVeMSFuz2Vu",
  "key14": "4jLjyGojvMH2FMNWbcsXtsNsFVD6YNgyncKHpR1TPKnSCLPgrhytPnfwDQ5hPmk4mJotpdjHtjqeTqFGuFK1tLtK",
  "key15": "4Ainn2WATubrbv36k5i54FJXXM4a8sLPXv8Lzf4ZABvkmZFny6psysdwC1ECAttASoNrzwr5y5CbPEnSXHCKGKxL",
  "key16": "wu4iFcXfxPanZzR9TPiqsGFNNyBzm7Dg1VsGDku25fY5YRjon7Y1Qh1NHwxLVYbR9DASk5ESarmmspWYuUVY1xi",
  "key17": "4ef3wvgEg169u9xWGYWDzrYogzAz6QxK6nTN9sgHtcW991V5B8N63HRajNa5CfZFVJqBRqV72GVgzyPC1DHttTVs",
  "key18": "5D46xNyYhjSuE9gd1NgKYdKmEWt8z7SwqnNE7SQkyUhDACp3d3W8RLHdczZqEB3ziaT5cGKg5L31PKMGtBocxGSV",
  "key19": "2E9QzLnJTBzi9Qu3wUGCZ7J5DRtjyfbaUU5Ci83d9Mkw7exdXBM4yU5Xr579PdgbknM1PAE399RCW2KLrAMMwi9x",
  "key20": "5g3KgvgFVKkTCdtgijgqcmtiJ9Ww1aUo6Pzt5kmTKX2tL7abCYL5yxxR73SQ4V2RagkR6GmQZCanswk4o7bSfcY9",
  "key21": "5qRcSH6ApCsEKe7DDUQZkLzNBezz9fBcr6xw7uLD7N3kYymXEX5pxyZhPfuYSuBSWt5cruMXy3f7ksqrW5HTTcG3",
  "key22": "46zXG9pXnJVcEgWqZwuA7URVERqGEhDfbqdxwJ51sc3LhyK4MeKJTuyC5Vz8XEXsHaVKE63pB3F8gx2CPoJYvxXh",
  "key23": "wQASfyHh8sjkeujSRfYJkVbimN4FaLxDF3y6DizFUvuFnRYnXon19KteezozwmDYniwNNS7Yb7yYfuetRaq75GV",
  "key24": "3utopUnsS6uktRnQZJuYG7rURrjPfpgFgaEyb6ietcaBQVfurA7Y4kSCRv6cwt4kdg9K8iBJsk8mgzpHcme2YSzQ",
  "key25": "4gZyJvyt2foBajikYZvn8jf4tNXuo5QagCmxBx6y15s8xGTjHZrjFeDNUXj4wuURzazcctUGSibEpuBd6oUN9Euo",
  "key26": "3BA5cMJxuPMtkSmT1gvTen2teCWCHWHru4VWHpYF7s4TfPgTPAQBi4T1iucZhEZFD79d9HmLHQ6WyRajhvJZuB9B",
  "key27": "2wBwQiE5T5V2fHSxPXGXisfi89wMERxCkdcWDneh3NPxoDt5RLEGTxwFYQcbCwYUHAa5nAoeEYqbAJ3XzKjBS5QC",
  "key28": "cUd5ERRZrqt1K3Rkk2aR9uBg71trK6CWx5qjKkasgdtoz73tfJJDH2E4thsfq3QpzSP8H5PiK5AjJLwV8Ujov9S",
  "key29": "4cDHV1azZ9kjbxzgcbHyr8yqhUDvueos8QpafpVxAKoDJSNNV9BJEKZjeaUPyzcM2jFBumAjoYTRYXyQ9pFFCRFD",
  "key30": "5jd4Pj56tKMJjwL1Fud3mnHTjPjkGMy8S8kav2hxiSHvJhBsXaNMwZzo58L6yh75j3Tt9x6ui4td5S9BPdBZ2ETe",
  "key31": "2Ypz1TNcgP4QHg7sekeW9yhc8XeY4cAZmRnYRntcxdBJ5S4CpZEZM94dKrTzfW2aUMnmX4Vc4p8yVGRLqWwNuT67",
  "key32": "R8TMU367WtV4qYobLQ29aKoHGhQVVrUwM86iZcijZaHgmiuy6M4tUv9kZ5TxfvD4XVxtPYAPjYEpwxLM9MYLX1p",
  "key33": "B6DSYNjbi8Jz69S5XRZU7h3ezZ2ppP3u1QuKsXfbA6GZxexTNvWA1UF2bj27TDGMDWgzGyngt1M5vjJ5qV4yNSE",
  "key34": "4gNFZ1SsbUDZKADeKL9VdqGjkRrmzEaehD1WJS1eVU5HuPBrd1KiF9r6cuqRNkTobe155bFMivNZkQHTg1bc2f4M",
  "key35": "4G3VKXd4MD1ftrUPDfPq6i7M6dU5XGkFjEQ6Tnwa9qKuEpXMibgRMjSWGTMsA4yAT1uhcQximZHLNU5HcSD4okGz",
  "key36": "3Jn87GykASKrUXHwoBNKjkqwgRxMnD4Gf2tk6EBQq8xzgev7EPixoQ8tpJmYDbYyd6depYduoB2ZCHxpNZqeQcfx",
  "key37": "43voMfRUjwEbdtK9RAsfFyPVQvA3SHLb3tS2zahdmEKWNmS9HGoQkVCMsm5ruJNvFq4GMfhHXpR22yqanGYEb7da",
  "key38": "5BYztyKtf3saLWd22Eu5xA5xaBVx8gCVhc6mqpxZ9a763UbKQbRcL8xar4qyduuuhCLDEK4TvfosrFLXaKbHsTfq",
  "key39": "9ZyXDMvyutrhNd6fFHB2JBum8Uiv7vmGiNGrUsMvQYX2oqnMD6Can3KYkSHeGLeN2mPW6Guf9L9D3fJNcde8Gmg",
  "key40": "4iuTdr3Ma48jvj3s5RmVTCe87sdms74VYHdnPf9rGtUWChkdnekfN7khQSJX7bnu2XqbDzg7UDmAghjXZJMGmrua",
  "key41": "3U9BGcxMiRL1f94nS91Q6j322cVfg9vsC82AznkYyafdnKqyUExvzZAF1HQt4V2VDYmJAmnLBTywPjpGGwmpQBwW",
  "key42": "4SBD9RVgVf6ZcYiMLd1TbVkMC7xXVR92QErTmBxAMEgdw8F5zJArLj4XaLxSEhgW2J8gcHvbEQBLytnBApmgtxQC",
  "key43": "3FbexrCDiB6n9WsSYVviGWLPAT5XAFumKg3haYgKV1DiVALzrEcVwtFiRkRu2M4ezf7YsV3hogxm8bTTN29p61Bw",
  "key44": "4phiGqsqiaY4nJy54T753WkGm6auUbzG7j5kywTCtqNY3JRsYyNJhA1FJFFGgBzYVrkjBTanSy1Q3ToycCJCGabX",
  "key45": "4NwMydp1LMqUgXPGb3xvm5EdQ8JfnB2GEaKNs2nLHGjKFYXGD4KhVf5YAGu3cCMFPuaRyKqVAg1y36SoWDm6BSHA",
  "key46": "2LvvhMeW7Ff6137LsWZVi9rF1sGkRRPSwCGNW2Bwu8d2kiBuTLscMG4acLMZQk4dDaMs7RJH1wihAx4spZG8gzYc",
  "key47": "42J2gUg61tgdhKPTmA6aouSMfi5XVscvvDsFX6Fm1jn3TUwGi7SrmY5X2EzxXNzp82kX42sYNimG2ua39aza9T4h",
  "key48": "48wrH17b9w8UbwZgT7JyR5ekamMm6atsAjByZkb1TdgGPxGaGUDJHXsXxzMBbmSY6jZpsJAXiX5QTtuuF3cuUfn"
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
