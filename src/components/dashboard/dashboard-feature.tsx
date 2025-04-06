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
    "5UQSR4o1Uz3NhEzKt9G77SPU9Z6RcRAVBPZLEBGCzYiRGMw7hCmaFKFVQrTkhpg5zjDgWQ1dkdtBW8gRd2TfSBTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P69xkHFBwq5dxj7ASwr9SfkKPA7M6qrQxHpskUV9Y6R2HhwjpaLF7LPxuMRBM89sv4AKZABhwkGmMepjh1Lzhg9",
  "key1": "4zDg2DqN9sdxuTNRAKs5SMoice8A5QyEtaWxiV8AA3MCQ4TWGu9KTScv8GN4DnZbGj73VgVXKozrKgqfJqTDjsPW",
  "key2": "2GQGqr8hXiuCiu1h4WAW5LULvvK9DgZnNvBUBzyGKCWKTtxRgoUBSJ377WKuXuhhYzRuk6A6eYUpiwv2ZxL7dyXy",
  "key3": "5xGghVzp6QK4SHFAb2YzEtdBcKz6zZhe32WG6NFFNG8kadCXYqgv7apkm9dx6wL8FtNzPJ5Hkh8BgGGo9vCMEjCW",
  "key4": "2UNUra5q587t5dc1a7TDmPFc6NbjfXYvcnC5B5JLW4zaBr8u6J8GiFtkUKyfZ1zLXTHR7euxNWQrWQbt4uuao321",
  "key5": "66yDqqafiYtgSidGEL7ktQebBYXKPraou2WiXEgDtAXzLqKGNB8e8NThp4ngFV9skXhi9LRk8WUeRRrBcoLfx2vF",
  "key6": "4akbmSGeSj3McFsAyjZ4XAWyTVFXt98wdsBG1uojU7D1KY3PdVue23CQHFJBDHBou5yQJ6TYA6PppfmdqcdahqzE",
  "key7": "3yCmfeFUD9aV4wNAhVvHLcsKtKjPukQCD3LwLHqYv7cxKvW2LqtUaxYim9ejMPBacoLkNRpzFr7jNSnANLdtmomg",
  "key8": "5BgqaLL6TeDyLkbjWseqNcXSVeDmc5TibqyFCSmQcN7vwDBk8gs8o2zzG9T6jWCYSiDt8JZtBHeMMLFxrrdKJt9g",
  "key9": "7J4rhMRSqznK2jFm4t3LkJhwbG63ZdNwUWnmPdvGa7pjub3gohoPgMHBarAxPjWT876ZiwEUcJ8fWwxoCW6qPSz",
  "key10": "3PNEZqM9H8KsJLV5atGpP7tkJBDzQRvGt4YqcQh2d4cgwMn7wzLtpj6s8FYoSHHabTMsGTDVSML43m2b4HX3rNWP",
  "key11": "5x5H3iZSTXPpZUpXgWaCqcnKdsPmcaP5uPDzxrj8Q2tAaLU1fMSGdb4tEGo46fbFte3x1LWJBKVLMSCZQTB5Hr9m",
  "key12": "23RYK3U1scfdt1B7cLTc1JS9oa9TvspUtLjs4gSZT68T6LDWp8ckSpUwJMYAUZDQMAQ8kXkTpLKnujZe12HqeAY5",
  "key13": "2Vv9CAyZifBgMFiXNg4uU2Zy6rZwRRNr3ohj89qCaTqVCeDJZSh5dGZkZp2Acd4FGuka2w2ogieN73u2fEnB4tJG",
  "key14": "J5zyDTbU2tUMoDQD1jJUjp4HGcV6eXdbRpXs2EA1vzWjFY2qnNecuoJTVgB9A5coxQxUAYERH5CctSzS8zkLJZo",
  "key15": "5DaSwqLb8BVnhAnW1d4RAcUgrGvZAQDkNeUjGevFeZtnkbE7qNDMocXx9ogjbnn4WtkD95wwZPH4kN37qKCjRMDo",
  "key16": "4zBByyUAsGgtwx3tanMFtrUR9qmUpujQMvJRuWvRzeot1qJ92f74dLVUYwp5BvTGGkAUyTbCzKNWnEFtkm1Hbr6D",
  "key17": "5zD2jwthi6j4xNxMj2i6wmqq7uNCxkexpzZ7KW5Fr1Unz8EJrJC8aQBJcQthki3kUqSaAEReUqVqukKEwbWFKgKU",
  "key18": "4acpdkDq8rSxX1bxuZCFr5MgTsaMdSr5MwQNvvHaDR2rrFXWCir15EnTcwd3AQpnPUscuTb2t1G2qybpMW8GriLv",
  "key19": "2a6xZcnzsuL6MGwWizcnaXJgTu7BLeAnTWgkfyiNPWoosPqA7K24jfnZKLzDq9zqjNPgLMeEEcCX7dygZXpCZ7gS",
  "key20": "w4yXfqfT22WLtkrXy689b9fnU8uFLqJv7eLMYVxH6L65G3iPzfsFRxxY59cXyScPQEsQwBYQF5ijWiYzVBmo34e",
  "key21": "3enPd8enDKQSUgVKjQapCAF2z3QE44ZMo1vdLv7Y1e97iKfkdJj4B2e4zoWFz4tsucpoKFu9gFzWvjhRnJw9fhBe",
  "key22": "3c7SQwAV1D5oq6eiQvL5NapGLdkoXzBBN1vqxRjkiFF5eczEwnpwrPVmsJr5jAzrgGft1yHt39tBw3aJjiCqWto2",
  "key23": "4hsvvSuzLV1gyyeowBy6ABDbDPSyU9zxTcob9NwgQm8GXiQX7bnr8xQazcqYZCn5cJH7oQMDj6bReJ51HSwgonzf",
  "key24": "gQUez3bNfEy2Vh6u1VURAgsii61CiQ1DLRU53ircJMXxWqV5JUUcWxo92c6CFAhBLiHRtGfUJNCxyCwP2b1c5ek",
  "key25": "2XFjnVdPKKL9Ez2G8rLkkFwaVQ7qGWd2wm8D1UMCVmZVszccBSXY56vvcZWoaUQmeZCwoE5cYvbGiHXx1uNE5Naq",
  "key26": "avi8oJF3QCVRRb8jFcxAsb8j9Frz2vdikXBDUnTrxBh11Q2QLDaAiU42kRoRTC4PBasXVDdwG6vQ61RxsU7KaT1"
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
