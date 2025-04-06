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
    "3MvfxaGtVKn312sap4VCCfLqZoiKsQmqquH8YyUB38MaPYMbNdUJVYao6M2K9hhaXFpPLUkM8bmsq1KKe944GyQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HGsUcCvTrQ9Hfqa21qHBybdeEUNFdQNH1ZbC9e3bacxXhUa9KakMZMp7Q4rqYLY6eFcZf7qc5b7NxUBKtzbem8p",
  "key1": "5ws9bHxra6ZnmfSGSU5J8H7d1pvxrc2GaZ5Dc54VbTT4nCkA4TdbSbpkpJAF7e2KxVBdp1juF8n5cP5BXoAZufDA",
  "key2": "sE4Z6JcmgrAGJscoRqgd4gbkcLqEAk3m7ZophfxinGHjqinDiGje8wtD9ZPGbxZhbaqeaCLvgaXNRHaGyWFZ7oE",
  "key3": "4FjP2DwVsbHmbi1KkZLXz7ZrKuCsVn9ZyDd1NcBxU92TkeMX7n59fi5utkDkcfTBUaYLhNhMrtBGAXw4XvEPqaQ2",
  "key4": "4RSv97k3cc9RG5tfQEzdCE5uMBWzqJJhwtJcJZyY35igdcuitVhGUbyYfsdDDcecrpFe69nAwYVDwtQoMHiC2KDB",
  "key5": "4tJnaAkxdg28Fihrh8HxNDFDBxWmAA9WHz1L58fVJuTgYGSeDFg1AD3hZS5VVsXJf2Qak7YuUJX88BSKXzxKvCbS",
  "key6": "43gd4oq2vDCTxbHRoNvAt443gmpEqx5UW9zqugRFYiR1fEraNtRHoavm4tBA6CndJNFvhiDen4CaC3UUJ8LeCjr9",
  "key7": "4nXJBsHWjJ8euoPK4PXSGjKYA6TGzd92qspaJ9z5aq7hufs2y1ySxHSduGickiG5HVsQgyZPixn6zsysAizTT54z",
  "key8": "2eYmH1zkzuXcQdpXcngjKitdEz7gu6q7f2mpLQRgtwUnN9aUnzy1pbnhiyLqeBMsdxna5LKcARRo7q5qZsaiGZoZ",
  "key9": "3wcVpJRmeqKMsKw5Yisfb6ubghU6KsYnMApUb8CdYDwn7MHrcUFxRyXvRidNztrZVs89tyNh9AyZc3TJCWjJc3Gz",
  "key10": "2sb6uX4jHY6U1QCryctJAoJSsDn8oPukpAmQh8hnUVKosPmwYPAdLFnvMUynUP2tLrstMVvaMK4qDnR3PSadxyqR",
  "key11": "FU9xnmvMmNyB54cbnW3p3MQamvuqH5zU1BuDha7o58JZSWBa7jbBDgruZiKSG1CtpcEqzFWMvRDBsgrT4UQm8to",
  "key12": "mNBFLSbx5f8Z5v6GqnkRmVQw4Dgp9xWVX99PGpALvyQUwr7dFwqWogP2bKCS7bC7MWkZrmDmuriQPCokPDvKjV9",
  "key13": "532eU381ftD5H3qrLXBqnnhxrdwkoteGZZz8GJWew25hGngsbC6ULZKeNPeEQetxoobDhJzbPdk5hi1NfFioGHWk",
  "key14": "3i8d95uBh5sZcGSDSeqdkYxQpmPKpwyuLu1D6FTZg2Q9qjU1yD9WaFN5VgrwyHEkYXYX6a5S3tFNAHLSVz422NEo",
  "key15": "2chEB9rDpqdexcfKFzpxp2XX1FZ1Yw1kfBxNv5ueAGA4ds9kdnWdgfxwZDvERgZ4MT22wiSUMCRX1G5x971e9CY4",
  "key16": "56U6WgJWV61rF9mW7GJpRDoVWF6ZKn1nrqk9wVxbpmhMfsCdbn39VJ5VuEp7yQz195yHSNzyPQEjVUBXDDMLUSw7",
  "key17": "4z3gx2ZdAkJfyiY8giuGdDbgKPsVSN7bMsv3PTxdTcQQzWJWE6U5WqHNwYTDfbeF3i1Q1S5a4NyedAwbpycq3MwH",
  "key18": "3Qy9jdRgM3MNtt1BuUQfKZsSBfjrQYdMcS7q98v4oX8ShN8odpDYKNKxwSgaHbRZwa9pUWfXoSShaZEhhCD4RxtH",
  "key19": "5W9LrjVm5VQtkxpNxtkxC3ncJD2gbCQzunYTmXJVLT6ntxURA4TKKiGK1hMKEwMM56DhG3CXoU32nsteNBrz2w6H",
  "key20": "5vvsShU8JV1QyK2hDqaXrW3tuwfkGquYh5GT32UUqnfmozbXWU4NQViuh2US59ShBHX4ExQxCSrcc3ipX3RFUZPS",
  "key21": "FEnh7ocuAAMZZmySdEPAYUEr8C1ANJQbYgWptudzAU1iuQCosfKtkk6px5z8FPtS1KCZSYhXTsz3YXtxWrGuXs9",
  "key22": "QtHkUyknGeUmWmyfjJLcaBeeJZoBVbF7KHF1N9Nb55hjmWqH7kTHMvsegSkBDdCvfk8gY5X1t4JEF3JYTQ2JLEa",
  "key23": "9C9REgEapGxFDSQkUe1pyDaSPH8LU1ydHMkjREDbXYvHC9GgT4jGgf6sky5RpzZh4qSukYQ913W4REWCqisQBQC",
  "key24": "5NB9pmtaKbKdqsizqtJAPZk1eB33vyZX2n391FPxZpdZFn1LGT9LxnLijz9zL8NHVyRhmYJbHKRbTaB6u8fDLnwe",
  "key25": "5yFgNFQE6jQLroaMFbziE3wi9GGgvNp8pRYncpSvGWKC7nbi91o9uwFLbrJzYB8hn1KeBTxzJUvgRrnV6WAArkP8",
  "key26": "U8QMixmZ6hGE7ibXMWR87effsAnY776HsyV6yWgpDM49wxRxrF7JAHs9dsB8Wi6G9bJdCe8H9yPBdg4VT31y5AN",
  "key27": "58h2Vpi3wuyUSaw9gicQcxU8xFAHScBzywnhoCB78QmMxNSjiAidDanM5BMiy2tpp7dKYZyKPmQQfpn1g8uQLsYg",
  "key28": "q2ynyWHFKfredqQdNKoZa71R43kTo9gYXFXpXPKpymbds9VPJ1pAwK9topEN4D5TA5mFPkXjgRUW8c8ELap3vM8",
  "key29": "3tkwrxucwtZ3JLMU96fCE595K1TXFTEVivSqyiHt9BPJh2z2pYHG9p4dM6x6Fhq9R493RA3yZsorcZyKpAn6Y7PU",
  "key30": "dpvi2a8goDabVn1zRkidEKEugB8ZEZs9UbY3YgMCdRBDiARN26LJMPAGqaBow5MMR7eX6uKK7nWYnECuHp48ZtT",
  "key31": "2EH55akWTgEXcKgxBJw2XkwL7wVbpy2ZihsHzaPWXgkhRXVyViibC3jCp7CwQWJ7PnLGnVsNdxyWjiuXYAjHBezp",
  "key32": "4XCVPPVmT5WJieK7QVtBsYhWNhLEWPdopKCks2NNJt5PfVfQJkWBFhBvmzH1Yzf3aspBw6hLBFJztKhRDGH6d6iX"
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
