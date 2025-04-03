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
    "26vNSJ7sQqvvKVviHQHZiMUDZsinARpu5XrBcx9brA5gy9RReDPvhLR3xFfwMsVCNooFgvmiBFVtzwWLFFyxecwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jSr9N7Vkqqrv5Duaaq2cphARUKFZSNyEnUDBC6w9hF7okpZAfyqsUWjVbD1vvfS8pvwNFsvAg2mFdtmqg1cEryx",
  "key1": "2grxSpx4cma8qfxH5hafdCyhZ6iRF7wPYaXU8MK5YzzM9CKxgF1xdUwihaQGvvXM9qF337VCRWkwBbBkyQawJypG",
  "key2": "2FLzo4sq5oHJJF8JRvZY2UNNto72nM6iyDXGZGzHvBaqwhnUJjv7s92PQgBB1XTeesk3N3bqjhF5tdH5Tp1BzEN7",
  "key3": "33SaYZpu8ieLCEKWfjUPEV9AtLxBF5k7vMsdViHmvnx8icyhCjrBt2UkGVYPYYMJj3NyVjYS6FmCvnBEt6a2cYHY",
  "key4": "5JEQ5Aktmac14obvEcdy4J8JyVvm9MBw5DUjftkgxzxAPK5xvkJepb4c2HaY7kK8ojV9sUckAtgLd96ffFR4Fa2y",
  "key5": "2CbvcMUfoB5eGHS5vq4qWKy8dnRtpCanZmGHRr9eVm4q3WV6nvTypESMMKsPEB1A6GZyhwTTDeMqBndfnZ79RLFG",
  "key6": "4PsV12JmAgRtx5v7iDiuo46RpW6gjkbRnsMU4WY1MpXpA513Hs8xPQ1NtHtiBcZGj7KR6GjbeFVbNk1r94c7xud3",
  "key7": "4uR7STsb6ffSs7GjvTmDESiVZMGp6MU4uAgZXx3qbQw3kBNDeaNqaHgWR4Kc8kB9R7JB7EjhbCF46r3CPvPYiULJ",
  "key8": "5AdnDEHpu5fg352VARxDV6HHbN8Qns74dPPsckjgaUmBdJR2QUu8qzkLdemdsAs2Dq2BEuwRkhdEauzMxBT5RhiC",
  "key9": "onPnMNT2MS6K4vidTJK9cGdesq9bDCWAKaQVVubyEX4sunfowxeysQqGGPGrprRHfUJDrmn17Uy6sW5iChhUviT",
  "key10": "3F8nVj3hGTB5i78cbSnyUzt8hZS3RjaYVLA4z8cSiBZSviiBDfg2oR8i6rXsHgHbMFv1SeuY183onuK9UYXyPo2S",
  "key11": "2HRQvroyDBomSEwj78R52scLh4qjSuN1PxvMhSAoRM7nYWzu4hdfUvu4Uah1xwoEymd9FMFDZivweN1XyhVECzAw",
  "key12": "5BEpqDuDWxTKNVfsPaDrbU6z3B1T4r1D4KX9mEfazW7c4KktD4pf4PxEJfK9fApwoUzWzi4ezGKgyatsfVw1eTKS",
  "key13": "2cuigwFYUgGC1PrYkaZCFHfnBwk2QVcip2FpSnGTCCWGBPrxUVXP26ycRfUU6x7ZcRQpTDTnxAQu6iVorPTMP2RK",
  "key14": "38rMnHCFjqH9Co2rLkVdUxDiPGmwiFqPEGVqJdMK7z2H5Ff34CD4unMqGMssbEpCjkPc1WLUKexfD2wMjwZXUmwh",
  "key15": "3jbQNKMbd4GeE25asLRXWyHffKaNEecaEYnASuQX733EDmxPMu1Xyxk7Y8S37pYSYU3K16PmEUq637ENG7Movcfw",
  "key16": "EaU9XrwpjAQenJC4ArixcuHgGYUaqTdwGK1Y7bNQ3Jo5vKwv1N19ZAczr3YB1828HPrjmjLjo4YPZViwwwhv4Vt",
  "key17": "uNjt7H4UVrtgyVJqfQrQjvg9wgNWmLkzNmVWAngtVtnLszCRwGU55TGRZsjqJTM9u7j8mALCPaP4YdBqcQFQJAY",
  "key18": "38svcaKxNci9iMyW4P2W9XhWdF17eEUPKGCNycWP4tg3ocTcCxCeJEHoKKoGSZuv8Ltme6fN9AGn8NyxQqEJvWQd",
  "key19": "3Asjtd22SAQHeKYUr2mCDeWKDCNJqeJwSHR6V413BJCTh9YN68mkE12WeZXCM7eFq4v82UcpBRVFCtX2Gb75gAbf",
  "key20": "3noLpAML6VT1B9CX4ghAM34mBajsdcnWfvpMYLH5NY436XFRkuqN45rKXsPFp2GxRMcxEdBqaeHVFERL1JZhbrKn",
  "key21": "5tZnzV7qJYUVxhCxXZu7WVxHB9yy46t1Cmk7bVupvbFmg6vxnQFf4fviE3BdALSLsMtjoauskWpXDb7XUctmYWTS",
  "key22": "GPFkfw85us95x1asejaJs8dvgrZ4f6kYiESQb4gGvepyPygQEVM6f3X6VdSxdN4mZacB1D1zfvf5ThzQ7fFfVvX",
  "key23": "3J9zjkgKJGCA2tCNestBujMNitKRWUDjoyJKd9aD5fBbMUwRC31etzMf49JVQhzNzGGw4tRkb4QYnftgBPTXGUq8",
  "key24": "4LnU4Sf69EM2ddwSQgSmQmK9GFieaamGRXqP687KEt9jMBAAU5E5RYMgzzZvtzaWhjgrnNV4aCJKMCY6StVCY2zi",
  "key25": "5gf7cuBS5qqCHSwzudTphys5NG1Bo7RbxTtSK5PesaAxb34LD7FXb8EJ5ebZNCHCHuEkrpTiADRLyzCookwNYMf2",
  "key26": "523G5uVQ53PWe3zWvgAb2oS5wmNfvUmH3LGwudxzqzggThm1UxHcnR9vVCrTT72jFLxinCxU8TB9iDyztBCgWMLj",
  "key27": "WhrmgqJje6kTkQKRYvP8AemZEeDFoZoSMKSy7vzXvXfemydPKSMEdym3mLWA6YnSKTN7ZvfRHEu768hC5KzNbbM"
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
