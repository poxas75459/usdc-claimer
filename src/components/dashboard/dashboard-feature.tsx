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
    "rxC71zjme2mckCX5YR6Wq63pGTjk9mFT3LGdRtHSQmLCeYmdB3M6fEhkgUiahBJt93iCnwurmxQPvWhZ3QN39Rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31MeiZTAhtETVT7NP75Q25z3cV2WZt8BHw4nwU5LNJ4Viwk63ytBKZsJoocg1wHoGrxLubPbgBXQPdg3pZQrz1Fs",
  "key1": "2BDuPuEtQ4yPNEo4n1XHUiECUqtRgze6w5iy3Xgk31vuqGfMCneyZxi79V96ausc2ja4gqyhpD8C3kC4C87cwhdx",
  "key2": "2jszucmcmHzfvraYbLf9PFHQrpbhjMg5rG6fFAn4cwixQq4fAp43KZ4uMrFLdJhMymv1qbXBbbTpHE3SHoQyAN5n",
  "key3": "afnL6mf8TLepYYthXwWf5Dw4cuqp9EuB1AqezLm5BcWaqmPVJtov16xUr6jR9Nt6N1jb2USJ5WPkzhB7zQmYkVr",
  "key4": "23W5LfsSjEJgb1aywAEpkg5zs6eJVsyM9MDYCuWqcaMfHVJNUfyQ4byNRejkLVu1VpN1ecamsRkFZF6MRpSKdwKq",
  "key5": "K1mzhxHREWZovxrTsfE1bVh1VWvznmKt5FWRRY2A7JVaFw7sctsbcP361sfufg2wzfk36jwJ7Xf89825uMM5uji",
  "key6": "5yVYK9JtgKmKw6u4n16tkRrH91nsXASbxz1oKMixwMumX6RfCf9ScZN6qna9U598GvRvCDDVFgV7np3uV2K8PT4",
  "key7": "4cv7a8oUuKFj1ftFj9KbttXaxAXc5cFF7xypJYUR2gK6o9UGQb2zEd5zDCHwWEC8QVrCC1LNzzmQkLHDoghfcant",
  "key8": "3V1szPQUTETEUpd9xiMur4BiKQDTEfU2xuWX6hCYdNk2GjnbNmrGGmW24fD1khyN2SUdoFQ4n3JdQbEY7Wz6u9dd",
  "key9": "2ZPpkVb41ABvb3se8pbHSofdfAqVjWpbhs9SqUwFxyBCCGDeSFcDCis4qohziTasQGwxk8t4je1P3DHVbCyaaBuP",
  "key10": "27hGUT2PTxk7GCzqkp1ufHGd9PmEaYc3b9Zciv5FUN4WMtzMrDVU4zHsD6opYHvJiPkBKzRkgw5Rh4X2Miqpib8T",
  "key11": "51TvPB91FKw96dRccudrNRTt88KuT3Ff92PKd6upmSAaGGSknjG8Fpk49z7DmTvZ8GzjBrPunUzBZxAZen1HEn6o",
  "key12": "2onBskkKVJv8aFpND1Z2hv9KhYDiMtFZSDJdQFDFtZUSKtJ3XLMxXbFkN3RSqDb3feZ4FqJrNXvFnutFxMAzsPGP",
  "key13": "6BjYdn2dUA1wANEtnXv36Gj5eNcrE54yiyNFQCSpZzyDRziRzQubdgeuAN7sEJVejKAoiHQXpYwVpCgTvW41EK3",
  "key14": "MERrrreL4QtRGtuyk8kacVrLuTwqScVnpZ2jCf3JRZk6tRF1zWYLcAs8ufYPLcoQz1xRTzg6TNRy1JfvhMMhVEx",
  "key15": "4EJwnK3FLzJQwy3fvi3dXo646hHPe54XWA18jMZTAV6CekyCcVVspj9buirxB74cn6Q6ELxXdhbLbEnHvRfPFNZb",
  "key16": "2yEsXGpRAKm43CT3EXVau6YiFfYv5V53F8bFQxqKgvcGQskdGHrbAdFmcXSUTw4LigmfC23VLogEzwN9Xhf6tezy",
  "key17": "33GMQdkqJiNg8yHRnSct1ccAmzsUS9qQaDruhvCMXWnufM5k3jVUEzgVZ9T5EJFuZeX2cv5dvkW5dNa4wfzQ2aHp",
  "key18": "4AueNi9Q5AUkz2M2UNibf7WvDiukZ2HYP73bDhTK4a3DWL6rc4CCLGhrMXLJ3vvbr4Ds83YtGaA8zGf1RBPgQkgL",
  "key19": "4A2EST5R48a98KJPaxocMUiRLXdfJ6MQWTjT174XbtiHxSjWm6UygDgzBqTztyQT94H1287WKuPuStBaWyqVD2ML",
  "key20": "5TkBaXphhS1h5C3AuS9rzgxKnhraJuvRkaqDeC6whecjzPSX3w9YEmkAN9LTNvSygR7ywifHUYeuUMgBUEC8BmLf",
  "key21": "4bvmi1T64CGq1xZMVK4nDHZuegh75PpHPjdXnorHvCEhcf7zyCbafgwtpVQJEdp7nCV9157gn2QFagZkS6jfnNGq",
  "key22": "3MEz9JKbUmJKFzTMDoyAVdoDA7YSAnyJ3BCCF8isbkGVQckiLRW1Tx8icRP8wSnGYXFckpJKLpbRNT53RrPbDCme",
  "key23": "4nKAzZFUQAWH9fFekfVxTtNhvcsguB3PDHEDQi55cdBczKxSZp1RgJi689kWMtpEGm19hTieRRmh9m3VfZbsKypC",
  "key24": "ZtogJ5TAGdapCGmgoDqQuonVFV1ouAHizPS5Xsf4BE6Yy1vYpqwa4PBreBobTS1CncSAN97uNhZaF5M67XPZFmy",
  "key25": "5KZJpux9ipBySuGESrgAPfTM59N3wbVroMKFfNRebktUZi6L9Ta7G36TEwJN7i3PF37ZuNu8csZRSghL5SEU8n1w",
  "key26": "3uRHdFfS3AM7u6s3e6oSB3r4BfKf2qAkQjanTwujNaWgd9LKntsex9XjqgxHMbSUHejxeZE2UgkWBVwBguEhqyxn",
  "key27": "33NwH1auVbE8nssah8mTxZYFSTF5EDFo9yPDHbD34Kz139wrUSvQrCHVwxpfqAKCtRr8o5nM2xpLyEZLsSQGwsdU",
  "key28": "5UboayhRt6KXBdS9bg7dbTWVbJXKBLVFiaDwASAdeLuXoff3wTiZhSg3pvstY4kRHXfypTBMWiVkjKLHcsjook99",
  "key29": "2D22PG3JzaKz27zFpgRHrUSpKpScBA1QALYSW9MpfhrhuLqYFoabDhQvEJpoh43Ama2LxxPsnwy86Wz5iDWTaEY8",
  "key30": "3fSV48ZraFL5kxgKqatWU2FPGSigJBWX9w23XGf7UiyVB9ncwxCTS2hfCDnAKo4rMwTajLtwb1tYvWAYoMU8Tpph",
  "key31": "4U6bzrBTDqtgLsKW3dhsfhgtK2Mb3F6VefhbQC5wHEGYH1Fzk5NhSRx7NmN8YNG7kbSh3QpH9VDyPPRfQ1ycwHKT",
  "key32": "2HhaBXwShpkTULrWPSGkrKcALshcZvCVTR7jzdt3qhWyTbH2Me7fqmexYnE4inrzwo9YFGeR1GkMEWQFFjPnmmw7",
  "key33": "86uUeHB9fsN7RmgPi9bwHwL1WcuF1Cite5t8CnvLuUirGPa3rDEHAPtUyuWTp3fJDhuFmiapdnJoCKZZ6gmb1zA",
  "key34": "3F36f9jevf4LQPEPn6Jr4ByB5LkcVUjwCQvsRYB3cwtBK8XdomUNbpNYeKd1RSr8s9Rua5hMkhFXnxwZrJrByiHf",
  "key35": "336QipWxY72uym4CzD63Q53nF6nzNgMKyLJ24Ho8UVcZu5ctuTYHXeQjhog13ZDtg4aLxH6pFBqJqeGe7LQiv3PU",
  "key36": "55pahjUzm7jNzQSBxz7VPJLgnLcTrnG9Cd3JcnjXJNavxqvrMZh7RpRqfB9ZvDQ5VFjC7UQ8fgNZAHQRiQARML9e",
  "key37": "66F43YpQ9XYeeuoDpRovmtLEmz82yn5UqLrgcZNw1w8b9zsGeQsnjpe13qJHmndSxDhQQBw4EjjsWfNXzx4DvVr5",
  "key38": "23imAaByLHxqWX3E5FMMcehgA8U7iW4NkFTmgmSU1k8Aw57jByeQ7ZzeEfDa37j7aVNJwstUa43oS7g4rzm1c1gF",
  "key39": "2rTUNU6xzsT3GzzYqPcqTSHaM6fCyNueiPGVawzMuK7nDGJd8etSotN36hnUVgaQ9NcDsjcstaEj3MzdiACEKLWa",
  "key40": "4cr7hh59nEXEoVFs639BJRZsEJ63pcz1ZRQ1zcDLiayDS7GavaNQM92ggeXDpm7kaAS4He73Zux6jUUkM2b4i8ff",
  "key41": "57ktDpTFo2rdvoyoEG2xt2REi4Rfunn9qj3ZCawGsbvpwkDuXDahDZ6swLtMKPHCHRxGkVKqUawynYgfMD1bULCE",
  "key42": "4yrK2uhhFGSf8dFh8kYhimPDLit9BJjCbkZg2ThNWmHwEFSxUut4XSz2icY5XyNqe4GASGWDzu7Fs3Yw4EYKrx9d"
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
