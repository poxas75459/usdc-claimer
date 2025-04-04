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
    "3QLSe1Ga7FuNMENh52kfu1GAvnjAbLCDyePx1wgpwQjjVMYueQTHVpUv12UfQTvGXAJDWMa494kCpvhqj2SPJPKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zzSpev9k386wQJwNjENRUGpEW8LQooujQGvrhzxxWZpjnyKmEtd9aDyDX3FJYYJkNt6YtwgdfHu1cJMqVSbeAV4",
  "key1": "3yw5keoKynciVXXYbxFXbJu12uGrnhfcosyFXasSUHXojjx8RDyfFihEvHHXBRxtCPEVe67XR3PXthJNLkJ4aRtk",
  "key2": "5f1jq14T86vE7FuTvJiNmQL8wQfQ2J9b5sokiWqVhHxnKx2qUDrPEbL4dhLmuyyvppRr31kxGCHm37LQn75SwtZQ",
  "key3": "62jvobAdQmupvuauBbQazjYPmvtLyARMKZaoY3GECYDUuTnL5yKzTppNnhGZyXGEiSMKQypTkQrLcRgjKyTWvWK6",
  "key4": "2WP52L1SeFDbKRJacCxvj5EQZ82ovhCGoT1GsPLirQpouQ3CyE7znt3pAVXScWzzAryuLk29LtPfFE3tWykiTqkh",
  "key5": "4hU3xmq3boJUJ1Am51bX16cAdY4wijjsbTmupAsWYV2EM86YBYXVe4PQwt9kz8UbnZpqtGGVjF41mLKDZQBDQneg",
  "key6": "4vhDDvj4zHVQgjwcPAwdc4c9RYWxMSBtb4M79RoyCYGoE2ATL7nBn2D3V41Q97yvQKTNvS5cdzJKJfWVrtJSAKFA",
  "key7": "Qb8kvVFMPgS1iUiXZwroQYpn1Z91oTttt4tLaMTtBXspQ37RdMAMNV2Ar5CfuaDt28KmeLUQKs7nPx6yBZ8hEuD",
  "key8": "5R8gB7AwNamyZ3gqGENtpemjpFH9CHfw9XuywePULdk5vaxAfaJT2H4qPFznAaxhdKzS73qRzj2GsSaJ1QT3RyZH",
  "key9": "42WpgWkLZrv9388yZ32Gvsv9ML3cbvj6eEmnEjttjR3ykqtgWqfRVfaYdS6rStQ4dJaWB4qeEoHoLdhAiucep4Cq",
  "key10": "2xyVmNzBRA8U5BAYRj5k9Meg8BtX39DFAfjF9p6WRCCuNVt2ad7xh4v7Jdtd4okd4o91VqSvpD1RaAKxQUL3RgaR",
  "key11": "7EJ7nJ9icU2k2imnpuhGqzrwDjULP2YVpJp1DxmPnf1Jqb9YN1bb2DFzyn3TSxnBYHsV5okQVKJZy8zHMw2YT2B",
  "key12": "2JESV9cLPNiAbNNBWPVKoJwzLZSuuch2U5xwfLAwM95VJNCR2MHYWtsydZPQ6zmdGMtQ4Hq334BJoAXJm9H5q2bV",
  "key13": "44f3FTnEGhKzVnAZbQWtkqDeTW1qyTPjQ3Udf27kX327BFYweuf4YUezowBGkrg9aDJorDcSGSB4KDbongD6h31R",
  "key14": "tBLvkSLbfLjHQRxXVRdWLC7Go7SMYf5dAEUFSouKpwquzi3NC26HcSaTtvK9PXxZwZzWrSs99dMBwWzGBTPhojC",
  "key15": "5WD5UrDGiTohv5SbUuYp9ULaPR81kxRUwzBspgCEpBWhp4RN6QWqPHU3Tk3gfY9aZUHovDujRbnM5VbT5cKJq2nK",
  "key16": "5gC3mHddzrLR9rzqoRUZ9qY4Zxn9v4WeTH8mgZ5Cb1A1rrqPS2sAQdVWH6egu24PJr7VbPaTPF7iXXxt7WU39Uep",
  "key17": "Kx9Fo9umyqHACX7YSGuhvrh3V4am9wEXCPXqok46GLhW7qhGGBhEog1fww7sXXFMyLZAxFxKhiCQfbGUszRRFWz",
  "key18": "2Tacwj12VmgCvZrXdaPafYNxMx7gsMBFfkM9zsr1h7L7MtdJmgg9L5yAKYrNfH81Rd61mTdcZpryDFCEjwNwfAoC",
  "key19": "3PCxXT7dd5KL49cds7nr4p7wTHZrj8dMHstzBVhQTDHdV6jBeot3QNs2BBz5Q9bH4qR5uWmoL1HHPcPeX2NJhS6c",
  "key20": "Mh4mcJc7PUaFE8dNzg9mbFcDdodLg5HDMZimAoQiNJG7GCPdQdHurcFK23iyK7y6H5GLYC6ZDXCpH1mRUyvwhnH",
  "key21": "4BBL8M6iMSAAoasKehpEBo1gfaCZ7FMdKbQNeqZTmSG5YrTz2r98hR5Qyxk77fv8c6Eb6aEF2PmyqjoE4vEE3kJc",
  "key22": "2914RaLcMcgcoC9781RkmgEjBWwtLtgoRBPLX6oqPhXyNya8yQPB9FN6CZfXTUcSkPm7xAJ3rhwVrTqLWhGyV7R4",
  "key23": "2NpGAPaUkypSXZ8VgeFPSKkZT7LVEGFZMWAUm1BA4dXTwQytGdjXny4xjqyUAcbQTFNvugTsVwS6Y4pP5xrqkyu2",
  "key24": "4dBLSvWP2Hi1foCU9WUjxXS48xNTEuLRgd2ttTdvnYe3xuvwcNGv9Fm3Aj4VFeyYdzr6emKzhWYsi97owRmsWHtT",
  "key25": "3V5kFU7UspM3KNC3A9388WxhgbVgK68EEit8t5SNHBayt3aGJjZ4MP7sH2zTLjXimHtTjnmzd9XBD7b5MAhbNeN3",
  "key26": "55ADuLrCc8WGHQjuQug3jgkFFrb8LBfuALSHUZT4VmFfuPwZp1MRdRn9hf8shfkSoZs47pssFR23n5fCEXD441qE",
  "key27": "3UNN4LKijEAqDGdM7CvejfMRQdo3YdyuRKu1YxhikqbBCVHKxUCgGu8413VBRzWrZ1k4m2KtASsGba1SgDQ7d5z7",
  "key28": "52ALun7P1nzCuM11hkZ1XwH7hQmbY3o3m4LHoaf2yu9ByDqmqqSwTtwj5YRNm9SKZp3idGL9gxSTFQKtZqXzGiu6",
  "key29": "4YWFbn81GewtvQRYcP89GM9d6annN4znk9XMD9pwNBNnUGXyBWTus3xczzoFppAsK6qStKEqUhzj1Qof8J7bTYyB",
  "key30": "4HtAtPxBN81DGBLurKh6qWB5D4ziFkofTVYoxGtjUcR5r3q9xtQKfShnGwsqyghoGFonfiEcNSSWsMyRHpveGk3m",
  "key31": "66BrWc6xiYVbU1W1ChNCRz4t9CNG8tnpzKMtY3RQTjT3i9w88kxf64T1N2RkLcokup9Y836Q8huWADhAV1oXjWFf",
  "key32": "4mH4Ybxo4CgtfYFJPU3wZ9QocrDBxriyimMdLfnR7imjP1MxC4xwykeAVNUYTnkTURuTrA9jMDvxgQVCndUGCSjj",
  "key33": "3fwLnQDjYkzx28zqWX5C6HvCajw2PLh2EpY9iEfanuEsqapRDaN6agbC9YyWEqzpkrMVpQueS66eGQ4ziUTj2GzT",
  "key34": "2nBFMHA4n3wH5Ke8Kj97iEBqREbEUZSqnFfhMThsQEeXjcBBT7Ej6wv59GFqPtyoBMd1AvhCekevSYSDwaV2PjZB",
  "key35": "5sYR28ehf99iaoWKxVgC9j5yEnG16QkHXfBzp7w5NS6AGJvVAnNsxuzwic3huUaP79fQgStBmB6vHJWgw7AFD84k",
  "key36": "2VxxhuXRhVtB5zDyzzrD6QH8foRzYGYmyNCtXbFmziKncnZPX1MfSFJ1wwMkcJtKh1PCKZTqCJoNpChgLGzuYEUu",
  "key37": "2S563wePYCe3NaHMxmXPQ2oMBchpua4sQRgwVSX3gCzTW2UdjndrQEMSEm7B1Ac5sNW8mw32CgMrFhwcrN78k2kq",
  "key38": "mb8bMPDB8ZKMjAtHa2aieT6HapEzQpUvXykKQYUWd7rThLGBiLgd2By136JxYQyXEkrfTtj9T6vuTL7zBVpL1Y3",
  "key39": "mKNbYEEdfPVtRMisWqypDzyEYpReKKjXcNmVHexhdTeTmBXBdA9RRjpfQFddXmV8HVEoXJAngjjH2XQi2dcK14D",
  "key40": "2Wk7ZDcw2dTw5asmGM1QsF1t9X1XoYCpyDSobRaZpmasMCZvgLQf8CFQzsyRD9nF3ctrehofpRefg6RmNDtU23b3",
  "key41": "2vhthwKecUw8wJyKS2jtq8fiKFh3wadaKTiF7UEXGYX3m2Y3hmnaPZaw2dmigN2UEDQT11bBXvnWKYQ5rdqPV3QF",
  "key42": "5KPVeX4eB8DwVh2RQ6vrTXfYGqrMbNx43Fk3YD7bA1qn6AYZEjCEx4pzw6iZqxTWzoeMRisqoimiRuNhMZCoz5LJ",
  "key43": "uyv1MnbkMwuZp9KLBrj9v1fWBemEXSfG9h1h977sh76dbm6iujEnAfB9JvqGUzHHSQiJh7RXxFzbdhDqCzSL9dX"
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
