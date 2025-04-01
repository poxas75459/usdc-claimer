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
    "5N7uc9ENebAWn7qg36qLyvwJVV63Z3GRezUCFs1PK3aDNWaeEAg4NT5FQNuq6p4TrJQ6pSy1rYf42Vh1VkXKUKL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SLnXCNiMFW7kxFDxk6xZpWJhcypiDA3kHzUK62WWKXxcvQK7JAwuWEDExuRjVPjXDit6XbXY9uxdxgaBW81zxJM",
  "key1": "5RgmRPinTqKiokWn7kfzCzfGJCMsvtpkiq1vw6XRvT3NpnzyzdpHKFMuwbXyjk3gvSvXj5i538NDEtFmSHYcCCvy",
  "key2": "8RySpWZvGPF3CGFqKXMWcnJFU5hDyHC9FMC7fEyBTndTjPH5dgWgJWUYXLefZPFxutaotzcdk2C7RnnYzQiJMCm",
  "key3": "3NycBoMamGnF6a4qBkQAA2FLvKxMBLcN9EHeNWXj9rtZsL6kXVr1tkQkBGqVXTsMXeSihH1N92jfT6jCza41nVAN",
  "key4": "ez5aJG4qGaAypv6CTqBkg4ntw3EPUU5bdexyfM5Kmsnc2J5SjrDfJGjCqpscTsn5tvJPHCde8tMnKGd6s6k3F98",
  "key5": "61j4QtvJxhVL24a1WD9r3pQ8Sc6R7yW5J6vVZrEtu7AggkTMLiWvT8JGjrL8f9nsJG9qCsNU9wpA5ePFUF8PXSsV",
  "key6": "2tCc67fVtf1qGVU53CxVxrBQ8RoEjzwM3Ra7dsR2ugySnfsBngBrtAMWMJdsSUD7BJmQUJVVMZsrrhVddpdgi2FZ",
  "key7": "PtvWzUTPntdZRJ5MTcyFJKnD79rd4S3hieeF8Ba8nvTJXUpEbaB9za9SkBiS4sbr78oheraqjK7TCR5MdfqzmBA",
  "key8": "2QZE9ttMhTFZiGgFfhgkbhHwPsuj47Y9c3ATQzEoodo6eKFkxsjLs4aBeFcS8Qmze7CEcmWo8Y5keBXPtsRdXemK",
  "key9": "5Kt1m3nW73NJHnGYDa6c9mcUEvwcf9UxeZQVM48kzUfBDMn7heozj8vscTvmpKZPQkB59KCpLuPA7hDd8yWZoYU1",
  "key10": "2DeeA2p9Nk4v3VSpB6DiESiZoqTaCB72PV4yaRsf1vp8em3oy2qdpUAQhKHbvzAVyrSjxeqyrsvk461utZaxLQNT",
  "key11": "dob2KwZ8danufuV9zEZphtj1ioz1UpS1FCbzk1Hup5gdLQpa61YRVF1WrQRisofqSTwZ4dw7VDKb2eycNk2hLdk",
  "key12": "5kgnidRrqVB7iiKAAoh7wBh8WxppgofUFhPxvQpaLLJiPivzpFiPjmJbbZLuSWb3BSbuZeP1rv8YKFzNcSkDwsc9",
  "key13": "49TiXBwN5CvaeZV8Ew3RAC2XwCcBpoQhiXmKtfDpP39PqXk7RN5bqNJWwrec52kgsU5WSJzQKrNnf1e22yxV6S4b",
  "key14": "5nvkKsjHaPwicdDv1DVWugH1A3z7ZzDQ7HDm9VFnsC77RYgLEwKdfHHX8j9YxsqYDkNGmmpPpKXkXRTxxYFpK3KT",
  "key15": "3serEsxyjN5BgePaRtS7de5WziQgyKLm4c49q7Z6CYhEASn3Y8GBriNjPTQ5nvw285AibLvSZktBoYSgCV2gYTWR",
  "key16": "4Aj5LL4s9mPfYqHtweAP6meRmZvJtBiNmiefLosG3HRr49DxHbaiSWRYHSTu4QfDLWdVL3bU3fndEQH6Zc2fgmZy",
  "key17": "2ZQ44Fo6f41zWiLQHKodM3xVJB7C2znCZ6A73fXtFUan3xDtL4c7XN54gmGdKhkFFrt5napufyjYdh7i1Qv6JjTF",
  "key18": "5Ah43R68SEVxFGBXRWSCruVToYsRmai4neVc6mmDJD8VsyR8trkyqkSHdy5wTpyT9ifGm8sAQVrCiX6BibGLfTKd",
  "key19": "x5mCGQpzf2UUNQkmPkhTkF6jF42vZM44qP1sQ8Mn5BzhgmFavXWUDNX9nsAFYgWdWkyyQXRUdQNpBUPWnhQR1M4",
  "key20": "DpvDYgWJ16Y364X1MsiEkxMjtpovnrJcFYjXN7zvTv3zDczEd2xZtcG6Z2fKWjT35zfjAM9vtVcyq8SWzd9hqf3",
  "key21": "3dBxAWFC3DT6t99UExxfJB7BXXHjGDZgxQJBwuNSjzshgmgSwJ35J7urVEG1qFsYjjnJYkkB1C6p9ZdFmsUeoxPK",
  "key22": "4RepqNoLEgk75Z5uctcuK23cMLjM4MvmBcoWxbczLysoK8mAinrh3chDkSGmDYByj28KxxxKNkvfX1vktk42JRyk",
  "key23": "32x6XUD3hhXeHHu3fxC4ugkBsw4oDjQR8jUT8vfnk9p1cBj4bLcdeJm9YeKbQR3pEpMSL2hct3RFybUJ4KjU4qTo",
  "key24": "3mTgfzjSk6JeHf7hBFdM8cyPGJV9HtzzjVMhasjh9BQGemyAK75Kr6d9ugjtLNEnM6mhhFrQKjEzhJrsexkNCC7h",
  "key25": "35ccVvH2knAjuFpC4bVJ45dQcGm9ZQuBRpz4Cf7sep6GY1pPEnxF8sW8YhoauMUxrsmFSW2WC8syDzPVxPucFLGM",
  "key26": "4JXhMosqujZbU3tALrFrXTye1F3AXdC3Jyy4nss3SKXYKvQ9ioJLAyFyuB5iWNAdh42yde6VHphr2RZoWKREY9BD",
  "key27": "3ZEQdhYSMCmojJ89CHCjuCf2dqVPMe2bixkwJeqd8DQUqkoArzzEgxZPE87Ka7xcURxQTQj9qhqGFGeHceCKpt8C",
  "key28": "5nGu6MVtMGa1j6nNVGYw7raoNoYHU9sLC5mzHgsUx6VyCf7aTQKnSVePcV1k94jpi7RQzJrWs2mPytWnvrNZQXPs",
  "key29": "3difSM1NdUJZEP5MuDaAQN7qFppzbUhzVTMBizwd7dFH28LaGczLxTnF88Mf99PwBcW43vcb2nEUr8wMNGiiicdJ"
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
