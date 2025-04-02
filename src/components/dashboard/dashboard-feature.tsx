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
    "Ee98LbfP21RKgo87x4csr4NuoyisorNoiY2PYNziCL1oYV8vPD4VZa7FHqu6K6LTxeEWDSoK1BjjnSrMXBEMjkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BKUjG7ZyHQuVfK4RQpjqPtRFbT42BpjKhr3p1roYRhmpSiC99SLDKXvHRJkiw9iCgfXzLKCR8QnzwQ12TBT3yLv",
  "key1": "3DPRjfwfVHCpA9DEkYpYMDzUfE5HGzg2GkLSX4sEoWPfbJ6iFgdKQ8ZnAPYNhcz46ZapiRCLRSKirG8L9BJryxnM",
  "key2": "3DWcj219MXUXFZySz9hhJSzE9Fs9EA39uAd5rmAD2XLvLG19qEvTutgxfscnmrVXyfmUHZRyw4Z6ABM7yPFYu7tH",
  "key3": "4D4cufzYo4sqXerqqq81jksmdcVwXCU55jRnDTSedC7nbfVfoGh98rj6gkvVxptHJruWqYDQdA2gy4bJGfCsyuBM",
  "key4": "3cbzo7hiUsAvWbmHPJMaegiwqZZN26HYexX4RMGFcHQ26t3FyxQqBBp7zPJx9ofjwAQPFKvDshG2cqQpyAQyru16",
  "key5": "2mUR4Lphsdc1jtEoZTp4NeDx946A8iECcb2XoAix3KdLfkowBKYvfunuv6vCEwAfndkQMaPnWdqbqnCdHf6cPcP2",
  "key6": "3v6Nu5ra2uiUHXXPCEnkfvuzNqDdi3U6pPJEwLbWA5E1EHV6zip8phGwWnTf2fcdV9H5kDG4WjvhPTWmFMzbxd8T",
  "key7": "4KJLpHCZ2n3D5MgcuCNhGbyh9rrkN88PsYQ3c55Zb4gYJLhBnVieWeAJTitT1BCo4dWtWo5iZXCSgbafJFLy7Wir",
  "key8": "5BzjPsb4XzELuVPknLVP1Ey1ZiwndksK5TczQzhDGc8A9uUpjtRSKH7oLbPMaFWxyNacjZ848broE4EwERtoi2S3",
  "key9": "5v4UP42NAtbUwRQHyTyVLNzSMkNRvsaf6LURyNDo5HdHCjuNrD6gQQsB7xWwby2mtb7DYnY237M9ynpsSZn3uTAH",
  "key10": "2wwHv72EGuUeMThu8qzRT1G4EKdZmNjFubW1ku4pSL1LYHbi7GXxYNxFnXXZAs3bmU7YXV3WrPN2wByqH9usUG1p",
  "key11": "3AFFoe2q1EKv2MLFj2XSRJSeMX7pkLtuQ2c2f9o7osehnndVYAd8Mv6XYqqAxCo8tKgPdizgFZLEPiCHDE81ea6X",
  "key12": "5tXpaQcTwts84beeH5qPagA6dDes56VXf4W3mhcxveaa3qcBrKhga44NQUjdTUQCGg8tWkgrCV1YRtaQZCjxRWu2",
  "key13": "52nWmMa8kCeHj6mzNcWWSTD6bKkPfxfUPSD1VvwCkHHVqpBzcKCRoxRaSUPCi3Eezs6e8e1N1oPFa9rdbMFhqPB4",
  "key14": "5szRgdcwTEMWcLrKepGHGiwzHPpuyUNmVJFHzJiNuuKJEDoGkqnHoKJCHojx5RpMguySFbPFGHNGvg7E1Uc88hWZ",
  "key15": "31A6KSMgiUEoZKwqQsLTAfxkQdJaCmBcd393mj9vdqQvnA5PkxBbg6e3rR9j6GEWcjsfwXfUZeujaJsjyL1VLA5j",
  "key16": "wDGHDVPzWtgk7NiTeSkKkUfrDWH7M7bwWbaZu7qxBgwwFyXg6WkapsqTVPPYchogZUeie7mt8zaSgK5QFwjrg5j",
  "key17": "2exFkErxw2pAFi2JjShVWRMYwkfsC2P2M7Ys71jVvSqf7QohjnkRep2nFfv2Gae2fciYbPndFUjfToXqN4wpt6E1",
  "key18": "5tTLos2ixNNbQjiLKLSdp15Z3xNUiqqvZLvnzD9FwPKZZsZR1eyKLVqRxNXpSmHqyH71xkv1uAgemUaRhnXsSFsd",
  "key19": "ZE469LWAPaPU2FA8BQ8mFAjajiwkahAXzEgMD67KJRW7ZVB8ZuTvcPjormQCz977b7riFywPCVNoc9aW5cpHHDZ",
  "key20": "4KktZ6c6VGdVFG6ZKdfoF4C1vrK8Fub9Bvum4dqZbANHDSfsnoG4fYV7XYE3G8Mo15KMg4iHQKCt8XAcihcSxp6d",
  "key21": "5f81g1vgomh3mJnBEWjhtqifMWhp5Ai2vTD9bYkPWcwQciZoyNnSEKcNKhH39NVSTBgCgHnhTCdZuyJouHGbgnhv",
  "key22": "p5t5kibte8ny4GQhk4MiVqZ7JqfFreKQ8WpeJ8qgQcgXopycC7t5JghQjXVtNLqorQHX9y9fVx2Tu8knaaqZs6v",
  "key23": "5SbF4nXyFZXwh3yWh9Qcvp8r7yN546spUwYsNYJTbfLa8Hg9sQKJUz2kSpSaKjKZhBkEkb9WJ4YjJ5eEusaJC6xG",
  "key24": "Hzfb8eijqehjHKpmWQkeNpMs7UQpRqAvt8HPDNgVyaBgDJDY3QpAi5jSVMxXutcgpDccGYB4JfZTAztfRxxKiHm",
  "key25": "2Hbc8tcN2ZAriLAc8sHfdPQrH2uotw3kVkNkk8AuneBs3LLd4teC56dEfvWY6k4mhvWgwiMx4g85skTsdKUebFjb",
  "key26": "4QMh4qx2vhugS4m4GxhtMbEAATHJrdxyDRY3eYtDkBLZKZfbEiNzPZV3ku59qHof3jtbCUUyZuGRRew85DdN2z7X",
  "key27": "3YFxKuD27D6wraBsjjF4EV5EXBo1743wZNHCE3jHtbD4FiV9tZGnw2TAXrn3b9ZN2kKWDvF8ncCMyLZMM9zvAWPh",
  "key28": "pR44z1LWseQSoo31JrAMKh7Mm3EBHWtDHjTCqo9b6idumBcKU5Rzb4Ue2QE1cH3XmiP3mFQg1FedL2XV9q7BZ1A",
  "key29": "4FtAS5sVzFAeK8PtbEfYXQsBT7jENiBXtKyAC1SN8YHSLTxSpQYkKUxore85cbAAhv5KictiNdcWEcb2QnvFvox3",
  "key30": "UYCKVA4Wq8YBEVLkiAVeiF1oKuXWnXgeMiQbe2EkjtMtYyEmAFJH5kuNWreEsrqkdgJk83WAV89akWjG1CB7X6J",
  "key31": "WQeoZWxDxy1TjPsHS5j4dNDJRS79gTLxJHpgyAqG7kXRhVQ84myBZn9pnh93aH8wmeA2ezy6gnuRUGk9xac3tyd",
  "key32": "59mwTZHqVN3v1Zo51Zd9sbhMxPnVn6cWmDV9aLKDuw46mrDAXBTbao6pr6ExztdHqQkooM3xNBy4bPUQnSKFaANs",
  "key33": "26avUVYkW9SfNeSBuATyAXgJfuN2TVMcNz85oxVHsk8QAaYjrGuZQdzqjj591WN6K4B2kcT8e6poVT6L9XRPJAV5",
  "key34": "3pu5i4rSq5ufiHK6hy5HDYx42Tq5w18DqkxpxZgcpT8ftPgQs98Nw86L9otkprwPGKDSBqY76kFm8wuEguNasQPE",
  "key35": "2g1ff7busULiJkJCbyyw1iwcFxD2NviUiMJaMMxAmdV7LhECa7F7UmdYydVtrYHVNBGMmJBzhPSwGJGLobUVXLhP"
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
