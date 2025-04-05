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
    "4ZqBGCtvoYMNbFzfAvAG6zg1s4ntJsrxKpJNBGE15ubyT95MEWncxJ4zzrCG9xvLMADpwieHDykWcTdCp8jrjKgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUvS9uDQ3tpvvmY5rswWuXwCwQCeNwTaKFSAcFPLGRNoBSNGpNLn5kV2vAbbf9aFwvokwVMktX1JuXCsG8CtRYC",
  "key1": "2gbmFFyy1S7jvLaiRp8CCaCtkgtNNvGTa67gyHztF2QF23JR7inExKVJ6oEAfJV7uXh2KYBG7g3kn8XnyHvN2gt5",
  "key2": "2nys8KxvqkBgXYC9eMcQYkatCoWsoineCFFkZTNtfU2HrCdvZ8uEJMsyvkYj3Ru36szLWZsi4RnBTXXr68v1FZvE",
  "key3": "3jarkL31qXx6VBjnooHbANoy88zCqJ3kqTofk3MVQPMNxkuf69QCuVqhwU7oU76aS2XDNLKSZjkStZcj43C5ccSx",
  "key4": "3UrnUbxdAPmtRsyrqA28MM4jKj6BKtQ5bqVmtFG5czHtCYefWNNmG7xDY1xU7ePKwMaZqVyTLPj7LPnrVFAmhBGB",
  "key5": "3QVoTA5HCUMFD8Vy7FJpqVyJSWJpbVxdDDPF9Ar19Qin9QPtNcxEHwawuY4tez6sq7TKD3muM2Fg2G1TtaRpxrbe",
  "key6": "5Htuny71Bfs7XgQSRQjrG2FtXzFoKZMt77GLzmjZj1JEfV2kiL7wByDEhbDqXZRgBBxELNo1Fjqj8wJfq9rWD8Ju",
  "key7": "2zvT5dBBBNJ6YusKwwsZb3mfbKuuMsnETK7F8mMWWrYqumndG7qDcbJaNQiDaXi2FFhXsTLmuczWCZEVRRmQtsWH",
  "key8": "5gKZTEMxJPjxnD4TqqzK3o9HScBnKmRwdg4iyCDcuWoyqC8seyJvUdSq2cutqLEQZH4bx6nXrqvxW5FUiYdZX5CP",
  "key9": "3AF5tr3H2WFhqsypYNcfJAvNCNuhs3kRMBYk87W6rcDD6NUiPhBtuyMTYy6gK6tg3DLrbmeG5XZ7JEt4EdkNhCfR",
  "key10": "4VS7Ur4156VtMCyKf4eGXcCfeDH1Rnq3gUvfeQuLd8dVssCGs41KVmJKhBB66Mp4WjoRrR4EEYDLPZCLCvwzsGkS",
  "key11": "5Yz56Dd6izZtshbvA6VthLFNfqWhroYAmzwe7reHvqw1sac2C2sRktt5g92n1Q8nzV8cJxfULGLPD4d8jMyKaPdj",
  "key12": "62JrVWkTzuEiuwx6dt5xUtEJ2LB5fZBL1CZbaBRe7NAcXh6VxtgGj3nurN4sUgUsc3KsD47WbCpUzBuZuUAz2RnK",
  "key13": "MybKXTMXk9GhhsNVaB8DJ5RX6eBT9xR9E2Mba2B8nBq1NjF7a4caNUBzAy4xmmFCja3Fu6Rkoc524mBZz13KM9v",
  "key14": "3PT4W1vKLqYxdx9mdAaWLmjrGwtqqnYdTQ9QdE1hRqFm7DbcrMhdNjBYN4oYerTpCtBCzj1B2PDEKKpKE5mPLaTv",
  "key15": "PokyjyjPQFQmAq6Cou3Vre9v3syzQAFTozG6U9zvHDq34a6SknyoQxeiwhcKrdSgkUeNZNHP8EjrpHBR1RGpsNc",
  "key16": "4ZaLBcFi4yBEYW1aW9wbgYcEoABVuS6jHGoP2oYaUz15RR2b9grFjn42RPr1PcoyjbJhvhD7U7oV8G8gspngyQ1g",
  "key17": "9CU1KUsZPgRq21691FewCZuD5qVGsZsVBCCFr6xsvtu2WsjWqpkd5BzUMk3FjXQZxTXstzcuUuUyvSmCfK84Snx",
  "key18": "3yop7YUF2622uySigUncmjcTC7Lb8scSe9cw7HxizQgY9hmKqXXCqGKergsHNqW5aYaE6T26YVocZ3CStANtffJr",
  "key19": "2Um5B3CNcBx4eCYG2T1QFrMWrb7UGbYtzoY7fKX6p5RjoAaPJ9JPSCSXDviwYqKzoiyvyxwGQ1FMALn4muTGF67H",
  "key20": "27qwUuCyyy2gEL3tVpLeB3T7PBpg4za2NnHSfH5PFKTT3MEL7A6JW41oU7XM2n5QZeS5sg9t2yj1z1b7nPBhUxcD",
  "key21": "3bEeKKHV1SgW7FfirbwY7GM6JbXw7RAkTRtG9JJ5Mo94bdHNwVEuh9CYgRxkJEAoA51yqCNh7zwNb221DPnxmoL8",
  "key22": "6TwXZyGvqwMoFTi9QbdRpyDVYii17chjEHaRJRU74J92p83QcfLycvMik6hZZLHh3JCrUdNbDbNFNcsb9e3mTYs",
  "key23": "58zsGr95edLzZ7o7vS4xZ6NKp9aDuGy5fBYAxH6HM1vWeLNfiprAoN8k3gBdfu8FyWdcBc4S5zp1yG6UimSiG3cu",
  "key24": "2TFbBoEcU73L4Cadnh8L6ZDkhgk9KjftxXWwhf2Yb1migVyNFde6dpd6gHU3cEapKgs8DtfJUXat6XPJ7VmDpTRe",
  "key25": "3Yqj1qPQLRpiUs1x864dKkiBmeeqYV7LQaYpM8HP2y3A4B4vkj5G9Hir7ZVvvoq6cAUTwBtn3pzMMbrfAogPcThx",
  "key26": "3hrgcFNsyDEQmbqNF4DiGKt1KT3yKuXoP7GAq298gVRFfFxixUG49h8pJ4TyU1LmKBmTWCM3FdX67P4WpYBoTzJD",
  "key27": "1imSWUEe9fDiToD234WKL2BdUJruuPFfQZLMyTBiwCXE3mFgG65FJHLLaLYY1cr9z5DzJutUTsFykqjLFjhuF4w",
  "key28": "5qNdsfHvrT74uqNwLx9QMSMSdK1NGpX3p1k62jCRy13DKbyWutNahegk2En8LcyfPrDVSF2jR4S9YpGVV8j7y1JP",
  "key29": "5m8tKKBtiuj4SVNSqft3ywxwKMXdUm7yKjkqo65CkfMKLR1qi7ALHnn9YCVwjagqSzfShM1UmcPLmsc1DWvH9nsR",
  "key30": "iJEtra8w2sujdUcytdKxajCkpK8qis1aXUtSoJqbRJbHuCjDLqQhoeufu7BXJbWXr4KP12HhSQdUiFhj1WkaFWM",
  "key31": "34eMUojrPmFxJ9JsCVnhmjxni78DBafr1uACWepr8LMVJA1RiYuR6H7neRXQsTdTNhoz6gEeeNXAS5epjqAg13ss",
  "key32": "2oRcsY3LQHThigQ7pWFeensCBsJXqhZsvpK9YWzhGTDRPePgkrT87gnL7TrffRbWdRPq8D5w6hUvF9K77q9kj5W4",
  "key33": "Ckajo8y6FZ8byG25a4tDqpVASyGUJ6gmWkxUvwnCyMzAZz7WtyjRWsfGH6hmSHh2uJ7oastZGKjT6fGSEpFYUtz",
  "key34": "4pus4joTdGU5dYTLk7zdeXW497RzFeBwShg7LNXwXxD8jSLjca6KQHPukDfrkj8b2HWbNYJKeBqyiqshRtGMXmt",
  "key35": "6ZkDwgEigoyqYDBfyJcKKDixj5KD7TpnCMPTJ2yPaXwyxn9MfTov9JXTDkGP41N9roUL3oEFU4FVk7fnS8SnLBz",
  "key36": "32BB6V1LTZ8kKAjJpxBBbNN3RZeerLqfZa8tka1nLgL9nqD3yffSj2mJf7jtQpba596NPks1gdZa2eyUeVWNGFKs",
  "key37": "DwRYesAkwVjjBRxRdJtZQHjMhtibfmFVxeu5gbMwpMwJgSYYe3v2SxSBjfdSL2ZMWw4e3xfwQhUVi5eDDHxzkDf",
  "key38": "3vaFM9EsZ4ceGrxrk3E4w9Vgm35ycpk2Asi93KGTE21S4Kjdt6izRyhDEBeQ4rnD56FAgVtjp28i5recqKAdzdq7",
  "key39": "EcHbAE5A3rSYx8iZRMkPCTiorpf9GexbfthRi3PvvZDCWigqad8SAhPExe2VSw5E5rGP7g1HfJa5WhpitzxH4GD",
  "key40": "9A8YZrPdNvVj2KKc7BB1wTBfKZ4cKdVsc15uMZ9CLgCahZM1XG1oAki6XREbzDmm92VdKh8zhgFTcLMEqoMANhR",
  "key41": "5Z2SNwPYRnfwRwHnvDFbEEjY2usXTR4Nyg1h8WHCGKwkh5k5nFA6Mm99BUdCYTnqjui5RMexMxrzCFeGA6J73zdr",
  "key42": "4car8dPsm1NBwameqYvdiNYDxvVgT5sHEs2nAQumoB5zthQHMf9mhM1EY92uPQANopeRpYYXZrDhd9Lbsyd8a5LN",
  "key43": "5zeWN8U2rsRJWEgE3k1a7LNCdq2oZEqaiYuUbQxsu677qu9UkbF5Ur7SwwuAGBYmjVG8iFZCMYygaY7qVhAykdyD",
  "key44": "47QzuwExbd8gVPyVF8jKK3iDeUESw1F9iF5C4hM9DYECEmz2Hy3fraZFwmdUGf99eBg796HWU3uFkMAX1i62oApR",
  "key45": "3MK1go8FP3Jc8Awvt88yaGYptByAVcaYaLQVWqkYq4BRqVPPtxttfCcvD1HaejTWdWDKemoSvuo4zcbyt8LoN7xw",
  "key46": "2ycGiLNw8ooRLHZTDkNj23q57MYcb8X2NJQmtfweA9NPstysakNiSkmMsyf2QY7AMgMMHZbPuMXHEVbAsNvAUiCu",
  "key47": "5JkBwZw14WorpUYgvGtpzYXmf5wirw3EfL1fq9D1tGBoQhh7pfoLtevnwwBRdCFSt41XTzxUaz5o3pcugcjerCxG"
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
