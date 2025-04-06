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
    "8dkigMWMvqpQEFKxN5xjpN2BR6GsmztYiRaCe8qdV5wtHuFqvepnxdhYYst2mJVuwbMaow48kzhx9Lh5u3pUoaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VYdx13r1q7VPbPrM2FmBnFgPZMtk4BR146yVueHuSPu4mVjb4sBxu57scyBr5v8oE4bbXueoYCSDTutfVaJjBrg",
  "key1": "SHQk9bwWNXggpaYomkUCkHfTcsriojHSrJjoTPNYQLwAj2BZm29jdNA9DhsNDFUea9kb6oZEJ9Ff1vWGSYArFFR",
  "key2": "CyVKE18V7AheeJNdSfS9mJgTKmwQDRjbX9DHRZNXXyjvpJFbQ5Mbu4pcFNcSUv3U8CGWmRWKVrH8ysW7PRFFYhn",
  "key3": "4djTgLu8wybnygFQUNhAsLT1qPFiDTVwRLYRsi9MWuGXjuWLY5KRS8xQMYUQrehU8bJxcYS5s7LRt1QmCjxTadnG",
  "key4": "3xFrgVG35NshnfXZbHF22mpoLKWMWgn8WG8Q3RG9LPf2J19NFHXsFUrXDEZbbVWeLJ8psJRbmdjnvALjM7mqM3gK",
  "key5": "Sd3ce6x5Vor68EKd5AaLYV43n4JTww6y4TYUtFGgGat7z2rDqhMizdn1h998XpFdj4fC3nvGRHdxxNZcCvUfLMi",
  "key6": "4ndKZehTRH8dJasYekGJC8N3JEBDKypHJdEhw6dAuefDD5G5FKvY8nkNiWCi63nXrQQsePXtt2okCp39maKBaXpf",
  "key7": "4yRGLG3rYam2j8taLLwZzmxaejw5LoHKA8Rq8qQffFJphgUBhJC1YUugVZBL3SZTW7biEb6tsJizU8bdpMdYpy2L",
  "key8": "3S6LNawiXZscUHJ1uLsGMT3NejrXk7UJqMUmbGSxHvWqcXKdd2yy6Yz51aYhGupYWHXf8Y6bmStKuoyRv3TfSNEb",
  "key9": "3ZvC6ztdQ1g4A4d1JSdKBfnzQo3X63oBFbNxsYkxgXarTELq4NAGZugQV9zUqzEqkmKyH1XxLuwW4zaZKkudqA9b",
  "key10": "3cWhtKrm3ejYpvPBDec3NVNDabi3ZXHNUaeXZDkJgBU17VjT6yw1TG1MLtHivyBW1tAJcsPPBHSvHHKZs9xQXQjk",
  "key11": "mRpxq5rPuZSmmoP3vngZoCCpYj4cnHwmy9QGpeAQ5C1tc87Wjay22t1yDpjfaZ25fUEFQsEkQEenqqLAwtizA8i",
  "key12": "3LCSvLd8xtJ7CEperzSRSyq9QxMaxJeNFWSuAKsBE32yXNzmdzGN4Eo7U6J4jhUNBADgZsRwDC3ARXA8JjpSyKdC",
  "key13": "3patsFVq3JYnHGmAfydSxJzSWcyQFfRLgh8FWYZDwHETTuPSZZ3yLJ1GtK7ez8iGjACCZFVvjeTG4rMfYGZKT7GX",
  "key14": "29gBhePXFXh7bsDFw8e913YWzKjD8VLKcN5e8RZUEMbABRZ2fbDuBtw7u5bB1jT2Ttq7sRUe7Fq5vmCZ28GfQQVE",
  "key15": "3wBksrMjotqbSdAgXcWYWDxHibbffbhcUKyqnQ34S3s8Z6cgPcYN2FWLNaEbX63vSwJJE4GJ5bmNdLLkJoX3pQ2",
  "key16": "2tcMPWumM6RfcJAEJm82WysSt9v6tt8bLrFHkzQ9UsS5N6xVdLyKbhDGK5ziCiyZFuhScDvBuWdKn2g1Sm27CaoH",
  "key17": "2JaZ2sUr5atAFEatkr9HerfHzdKfTHxbr6TJazh5BeTSMrj3hUApVk6Xgobm9KkCMxyJRaFUh9mppuJZ7xXah5b8",
  "key18": "3tdfHg8U8pUgGBRorQLxQ15umjtYSf9tWCEzRtmvp8a2EwtxpAMncakaKM9ie6ymrwr9jTAVNcHkF2CE8YM8rBcx",
  "key19": "vYD44ue7SrU93QHEg4AtnbZN1coNTByKypK7AF5X2odMZm2Wvz5HJKTuMJFFJeCaGFyTTSBV5J5LfPcSk8WM2gW",
  "key20": "KjxR39WaoTirBrKZT1pWbdJSMCrs4uxWNrz4eXvTw68NBYpGQ1YJe215B8nBxrMiaHR22aHFVF6EdvWrZB1DsXL",
  "key21": "21FAK9Gtrd7sGeRm25B8fUi94CXXrpSaXU1RMekvjNJLSmaWbZMqYcLJ8VAcWpWoUbu8CMJaW2M5LgGBM7G7N2aQ",
  "key22": "2obvayyAzAMDBGSqQ9Tsz4QgTch2MdqNpLMHPWSCavKy8ofwcUnbnBjPZMagNN6n29Nc5oF8k1kWA3WjD9tdwy97",
  "key23": "22yBEHXEsiEBAYPKQhjmZqkgS9c2SAZddLtKNzFNAjQQrVv4fjtRVkFuTidNPRFpQkPPodtpBFjZ1GM2xiKay41J",
  "key24": "2fNrLGuoxwpyhgcEDyyEm37q7a8yvD3HZvKyUsVBe9cTwVxiE8fv45ux4d3AmJHizZk8fHyms6vP7L2Hcn2D2rgB"
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
