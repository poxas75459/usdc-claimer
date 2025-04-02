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
    "34E3cZRJrUewyqFrDhE1rvRmjw6y1Sm7RFW1fjGfertZouTLJFGGZmRxysjoNMg6eebZ6pDod1YQe49WCfW1q4rS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U6LqVyJJQgXRysT4hr7KkGZUNWHesdtFVF5P2mFCmSSPtUfQzw7hs1KJ8xpGu3bND5jtPDwML81okBgrk8zNPdc",
  "key1": "3V2DGQSJHcvVwouASsMmPkWci15SaxDhRH9CP9AGy4s2ySohcFBVBoovXszya1aKFVQTj3dPtHt9UcaBCn4pTqyF",
  "key2": "4hAxZ8FR77Qaad6MDLoa2M2w9ZmK4qrMbLToUEnt8t6EFDGXqxMxuPZPNXrFyYeR7Ddp8hi2svVbs77AhdQxwDtx",
  "key3": "oLoJsHzoeU48Q51hbYd5KgTq1Yk3DfY44jVgmx4GKRmL4s2jTeX4UQX7j8z6Z31bUJLXWNkG82rPNm5gcu2cJMc",
  "key4": "JFmyMGxPcfjmiY1h3k6cnExwUp5DCHCYT5GhqQphenTrqYidrzV8hLYqWpBPXJRrthPXFMPCGDrUHt1ftS2QVV6",
  "key5": "393RR9QuUa1VvU2mdvanNHGmcqK1xFjGahwdxxfrnvD4arfHh9wZMMeRS9o4qFWqRkH9ziW5TnTR91Dktp52Dggb",
  "key6": "2BZaZhYKabJMGibxVryVGXH6sUy5JvkZVVWeLMrRCs3rDFFd3mNnDrghxMcPwbU2hhEjXwcPKMwQSBGY7te9AyZW",
  "key7": "EG4iGNEDhjEb9GRPFKPwHvwBYey6eRaVbw1QouG5eX99kCc4BamvnS5FicxmNKDRVAbtJF87Xf4G7A94ad2XDEJ",
  "key8": "2oxcv9rpZiBES2gHfeeu73QCZ6f9Bq7KYcRQNiA6tUotcjqdMxTyiw6LpGtfrQKCbVwPWs8jkeZo2aQkunyFmgjN",
  "key9": "5FaFjNNbAhfJu3EW37Hw9Q9giLJhu66rTcM3epj9En95zMhGu7dSMvQrj1tgc93DLa2B9queiTR8G7ezexkgKsUd",
  "key10": "4zFqjYEE9Vr8Ju5EyiCevSMSu7MbCXcbHWVRbwSzLn4pkZ5kjsqvzM9NRe4WocPfNq1eYZamxQZG3yF3jHwminnV",
  "key11": "5pr9FAEdoKDXAV1pnNM2W2NkAAsn88pmn8ESkdkmHq3BCD2kNzib63fcP8XoS6FptaTkMzJVhWg36XFwTo8Zk5QW",
  "key12": "4iWyKKni5ojV3dGtsupX3GmF9YuWVWmgnxn6MfQW4paqNfbRWHHJM9kmAMwytFBSRXRXgxFtwZ1iErPN6XK5ZqSD",
  "key13": "4i1Hi9aGmTSyjfChUP8WEHFEryBeEzwWXwBkTaTverqkKaBmaBTz4CpTnsdWM9sWtrHavBMHP8BYN374yZqbTJJ2",
  "key14": "NbUEe1brp1wSEsHGsstT6Ao35qjyLyKoUrj962o4jLkFzuQVhW1qDbWHBS11w7iMd9X6hbfM6k2K3QWYgRiCLQv",
  "key15": "4H7CmnpFt1SRw3xjC7kvKzVPRFio6cvxAMJDnE2UmDWZELF945Xtn4uBL5USrxAZoyY6A4GC76qnbW9UFpQXo5ax",
  "key16": "2ZFmeLZm8QpxHyVqk62QLmFqsbw4rH7cSUH41Ab5742KUgCvSQLhAP9tEt26nR5FQ6cgxpdmNjwJCitASfCTURMR",
  "key17": "3WyEkfNxn84DhuGHv6Jr7AWwGChWzXaHiVnQpK7K5kNgJmdXQQgim8X1heWfSg94iwuDqAqzK76FrQ1NhZ7ha6Nj",
  "key18": "Xt7pccdXJv9cinSHupANsHRihRPutvWXeN5gMs5VoCXMbNUXtA5Q3PkKExEunG6yp354qZ3cgNNuuY6YqYcANKU",
  "key19": "5aGzzJ7Xi4KjPscdnY8oNv7yQijSnhMnLE2sK8oQaw2GYcn1vuQwZnkjbBJvNjrTuVPB3eGP4sUjUCMXyoDkNgmf",
  "key20": "66gEmWaR67ZaAhdABSXabzztUFuAGZZ6ku5bYAJqfcyhaF2njrdiXPXy56hzrKUUrho5FD9AzmHmiQ42L127ond",
  "key21": "Gcv667xoSmGFgyJAaJ9hcae25W35H4M9hAvaMe2v6NyjCQJ4jPvWCWGpMaqeNR8TiqDcG8WmB1LXmpR1tbTofL8",
  "key22": "3CzHj9c68Nq1xQaFjT2GaU93tMpAki54LoBtyAusQ16vn25SfEKtXLHebzwdN57ezn1unYs9WZvJ3WKWpyQD1SFm",
  "key23": "4yjX2r1dZPk1DwwbeMypuuuS3263LhRRioZXhDh38ZB4cwripRNRNybWUsTMNFxYBrG55F8sbXngU87mnJCcBGaV",
  "key24": "2j8uTcSJsEg54QsE9A3LJgjuA22hgvQkfHkvVWeiwJ4wTdXn3iAHbP5MvaCJaBCXFQUbNpj8ES4qtyu3PjMMA65t",
  "key25": "3B52dJag4GSoapC7ekDvXm5ceVQajM2RgL3m9NB3zSfETWbgzzcphiXyMrxGh1js5hPsk6cKipqUe1HzdwyE2bqB",
  "key26": "4mVUYQcc4j9HWmUqBfmM4jZ95EeG2KwKAw64fwsoeEpGHPYxLuWTi5gFgPHi19UC4ZUWp8qe6KptmpCvWdApCJk6",
  "key27": "edRhQwGtMbzd1jrTMHvQWcaGfufdV2o6aQb4UXPXx1L2AjsDkD3Juu4djz2ZcJHgnFWrbTcSPygiLxSz8gxLX41",
  "key28": "vDJbCVtPSa4ADgg4VjQ9dirgMMPiEgxDz43BVWYJf1ot6iA1K74qJLDq9iUaRbNPioMC3qXZwHwWS22nvMYHvgZ",
  "key29": "66RSxhYVMuopV14Er7aRxLKNRomY4mKoLXcM2a9DcMfErUW1eQwHpNW2r9xk9KKenRcucPTerdP8BT7MEvmZjMdF",
  "key30": "4YnemNFLTPzEcgpJuhbFbnzC2M3VB31LZ9G6Gzmk75RVzYK49BKTV1SteZ3vew3SK8t9w64wL9aEnJaePGks1qC5",
  "key31": "tYR8nMAEsdPiL7G1rBuCJ8dFJDRxfRzx9e89EAFdjfZ6iobBaYtVfJY14BZsempVC1gbbAfaC83AXBVFWR9kt3W",
  "key32": "5fQ93q84WbaKpdtiMbZZocMpXgNLShHMJmAm7k3i3zUJ9Bb3vhpKtWZqYpGdA6DqyNumAZLYSdoP7PriSzpZtmsQ",
  "key33": "22W1k1gQfA5NyvQEpCSVC5Ra5NXdmRwvBrXUtfhgJh5vY9mGyNzjoEieYJUqRY3Uj7wcwxNq7GUkZa44N88bGJcb",
  "key34": "4KBxxdHCWBfgcEkbntrZD1xvtHSsHYrqtikBD36kWhCbYw62vn1cwUthrMvDdWmG99Y5hp6cmUfvQb8brAgq31Kd",
  "key35": "4EP32Azpd67Xn6zDf29SeLrdQwwrgaFqP1u6ugAH9netvDMJCYNcN1a2JUGd2ocKgyTPHxLesuo4jTzXj8nXP5yf",
  "key36": "2uA6XKSacnL9pTPp2yE1mLe4iScbdtD9S5eCsQ2XggU29Dzj5vhV6fEZXLYhadwrdCqizMcMerjV2yCHQDmNrjGu",
  "key37": "5CFgqDhudkcXhRYd4WqiVddrfHKTucnPrayCfThDHbLFL6URvgMEpt1XGczR1f54tQhqbjXvBKVS4HSqtnSv8wDH",
  "key38": "4LhrnHtT16EcS9QxwApNQ3MvZHVYxisfgvNNJwcDKJhzTQCSjfSszHU5BfJEf1rFgsmupvyppVGe4a1BY2Gy6bpp"
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
