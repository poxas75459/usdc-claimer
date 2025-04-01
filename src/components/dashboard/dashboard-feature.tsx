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
    "5jSfeGq7GTWh5n98tnybFnjRXGQtAjfS5oM4cffwW94gZng9sQe7hCRWXDn1N8zkbqzJ5jjHzPhzSPBoC5Q3m7un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iJdv44d3yrBBpgDdK5UPbXF7G3FyVaxz4dYd6g2EbJ7nsnjsakqLTuAEdyjhzRYA6GJ28zVq9vUgpfWxnzxpiAS",
  "key1": "3xrJB2v3st5THAcAaVpQUjFDmfj7VEdNcGB3PnbX5zdgrgdz6XbC3ZsodCVjNT161Bx1TUnwQ7inYBYxNTYrGtBC",
  "key2": "4QVd1TvcQ4qUzhWvBE9e5QFJuE77hDd2iARFosK5h6QFjYFc6CcWcZHUeenxN5hajnG72hRgpbfmmPLFd9UWgeu4",
  "key3": "3dtfLJciNGTwd4XWBqKtUNysVe6Vs3SM13eXFzai9sxdUmeWdfgjtSiUDEkZfVLpsfnKvgXLTjfgasGtuvsrBxy9",
  "key4": "5MHWq2u2fbe5JWrw7B6tLNSPV1uF1yhFMoE1KgUJij6MP6ix3ZQ3Wa9ijY3vHwGwhWfzJnEVMD1ymN4PVCjrjM5r",
  "key5": "37XHjQSdrhmwF9qVqeo7gRiSEUXByt6dq99KHB98A9PM62gbGou95dBFJkzgYUZkuMHaA1zYL6MGrTD24G2cWGyx",
  "key6": "nAqcjc833MJCvqJcefBos33jZGV6z3yjUhSjC8SZqwJb8uZyCD43xJULe1WwUa98jyJczmm7UZBNpU5PhAC5DWU",
  "key7": "4Kd9EzZF33xVraJvrdhfMRQjD6GftoCNrNsFM5UNHwjLYQkw14fCZtXoSPqo5ZHmvXKH4BvxEoNhzLXv58MjjN95",
  "key8": "wr214wqzcmTQp9fxGc64RuMTXzDHZPbfPK9YamiGBuX6Qjonpbxk9v6MRjiqLVEh31NtdyjMygQAMckagmahcq6",
  "key9": "4KAs9HJrPrdzNncLYNSYn1oo8nFtaZBNeZwu4eAvs86DUN1MpnTiTHKrg9XekPmA4uXQk1e7k1ZHMHbwRjqYMN8F",
  "key10": "5amSSs1F56KexDwDcVj2sw7F4nJqkRb24jM1nvLjiRNfTzzeW9LNc4GJTC2DGiprGrbpabcUWKnrXYFkPVPBRs69",
  "key11": "5dN6CgWJn7akSkjdQUVn75hidzBMcY9E6yH2Z45B9sHbogWkZiaXiXKigjkevaDNNy45KNxZA9d1VdDTCnzWaMnD",
  "key12": "DvaHeCMNb8DtMv9uK3yC8y1CQqGLEhc2EKhEJadSvpnqAtYD5P6c47TcGBmB7zswBFKPXrgu1i4KBmp3AcC9awY",
  "key13": "5ZLTMG1WUZgQdccztFzVspf4ACSwzEaqHetruhhmGU67enwHLosNPziEcZ8bbKYJnRSUbMF1xHBwewWFmgRGCHon",
  "key14": "4FUTnmnmJ9heGy7xsgrgaGvXh3LumcEG6ebbGmmvPxdtNU8xqjioWSxt97kDhbELEDS9sfZomwgvRLfqXwwZbAqo",
  "key15": "3m3WRcKXqhxqEpvtdpSnuuSxzGh7tmvpMHcvi5A6Qi2o1fVZkfkatrFWFMZ1oaofc2TbhLWMkEustuANmiLWR29y",
  "key16": "4DaS8hpU31e7FRgaBuV3G31BEYqLhC3C7SaGyJX2WSv95Jn5inXYuZVjGY91w1ZNPCrZ3D2qg6tqURMu7CbeVTBM",
  "key17": "2ZS7iLexib5gxwmzF884ANg34yr8EqkjqDyndMPcApap3bYWDPSZk4Fq45fJ9rk2AGT5BUniXdS5uh1J9YHbjuEY",
  "key18": "5W22Wtnq2zPne6S44mnECuLJ22RbejxSj1nSUZpoKtUPTtwMrVPL8h9M37T4wiYHBLH5mhe3Sd21i27Gqbzf35n6",
  "key19": "5cCtv4BRfx1Fjx8W32j4gTMG9kYcwUWJdkunxKBjYRXBgbJLjikroU1TfFrsRshr28sVuFiXyGTdfmue2y89wKbS",
  "key20": "4CmUihYcMuYtzyuXPKPx59ppSC9LKYXmyfyCWd8vnGxGJJB5dEmm2HGRtk4B1iGJKXPi6xQcSVcqPCFEX5koZ6Mz",
  "key21": "zxDb3TrA7TGk7WUskdJakWPD8xf1xEX4A31ydbWRYfmV5GknxcP5jcPx6yYQrWkRgs8F7aEYk2Lugg1XBtsAcgW",
  "key22": "2uQYVQHzkXqbAg6GBCyPWLMaR1ZqcfCMwFPX44a3LVxP6nEVyeBoSmxndx68tKKw243ZvDszDskTpmgkooyPAcEr",
  "key23": "5dZNgJoBShGpivtRqjxcSGQxR1D9mBCW2nmJgUk4P1prQTk2gv5fq7NDbbPL3r2Snv9hhyrkfDMWpRDGTJbFwxPn",
  "key24": "bSGxKTY7Xf3y31zgjU1hC3fQSJYXXvybazxu3MgoAApiceyXfREMQJoqBp32Kb1rFeKcjBuonb9hFAjf7pEdLnC",
  "key25": "4h18YGxKgcB9DM6LHLT975wFE5MqUe571Ryxn5Xy9N9wpmrk7Ku1hvtfQ27BSqtFB8JHagKXXH4ycEBbiTCzDDc7",
  "key26": "JFRZvtAXMK5tUJxhRwmDfYwJYWJy2mGK1KTrNrn82cfnPqDHXuwWCsv5BuJFVNEwydTma2tMZjJa6vy3NgqTnnC",
  "key27": "54DKZJHDCXJ6x2E8ro1YXrAEA84jotsqaXEZ58LzLDjKm9ynF2Kr2QUdDxyKH31yyfkZU96P3DrX6B62F3bQvi7n",
  "key28": "24rTxt7xXZ47ZDM3kVrSg73iQyBMaJrat48z9BUXgWCpuCirEENQjveDmMoHw7JFGUzCEYd5D1vTFrooW8MbHD54",
  "key29": "5zgxofQYvpUJU8c1eXfz1BXZHvH4DF5EHXHnB8FN5AX3W45djQ2vmPcg3BmUr6jZWE1iUvTbAJYoLDrWjvyoDFcg",
  "key30": "jpPbWFFV6tiwkYtQ9sPWXcQGGUtbXQxgxSAkssKMFKYgWCASkRu1HArJURzfH2FcLdvnJmkzjUXb96U7c3YyjYd",
  "key31": "3fdojwum7xviWbNP2TZGnYJqZUNx52LaBuHj78KaGFsDve8go9osifUx5oHrCRP5rHoZpaPUkB4qZcoVrZ1XnN9A",
  "key32": "5wUbBMwcTUJMMgSkqFf3XBt1uid8WES4AGJ6ZHVc2ZjqMMYjbXbhdrUPFY9muaRr1mhyBeJjhrdoMDCtDtx3Gur9",
  "key33": "4htHD8LSDUb73cDFxKLiJCs1usNMVhUa6DqwH1Yknqi1Q8izLxxj4ynZR3XEVdF7H8MARGMjQbgP4gkcJJBw9t5X",
  "key34": "3mDdC6b2mmfGREJHgdohGMEdJFAr3f5uCNZ6HqZ82554oCBAyXuR7SHXe5zoQdCLLdohmsN3gnjmsJJ6Fd7aNPzS",
  "key35": "43pZ673zSEWwVZvNUcgW2JGek7xoKZWogXYHd4Ca4uyMU8ZgkyjyRz2mAuYXkVATvDWFrqMd74NiyNt2w2GiX2hw",
  "key36": "4RV1Eki4FFSXcCgx9dnSkfJzUBMPBF6WigFbxRHitc8sYz7epFPfWZ39cMrk9epoU5yeerXAiJpFTPPwvmi1rJzR",
  "key37": "5ykeuR7uYzXNj1cG858hP4wV2BnPsq4cxc9vUtxxXnfMTSXofYuy7SbNejzcgfda6YJmgRnimAUiqVyyQ3NsownR",
  "key38": "58aNcJ2wMktQzfT24mgYGSqw9Xwht7KQj8FPDu89fkocPBKLQJ7vKfLoV6CeLzVpq1EELfAAqx11Ujqspbe9S9dZ",
  "key39": "2sxBzV56KcrQSS79DdWFjasPYVzwcjdDmad8yvZa7ebi8i9TLVViMh9qbNa6QoqMTvWerTSEuW9wtxGAegcvNqsb",
  "key40": "2gnGb9H8WJtHtbtDNXRdUUbXwSoLp5NUPSWewm47bHFxk9NnhgndpVLyqA3DNdtdN6rcmvWpDaPgnByW7KLQPvqQ",
  "key41": "43oYhbWd3VjPACArcqMq1YTkDXn6Qrz5oDrBfMb32xHigvKm4NZdZ1dHUfSLFetbhv145TNdpZxM36CmkBsKFnAW",
  "key42": "5D5kxyESZEc5s4aa5LmhHiWCbwoaGrGvcs3Lo63YTgZ7ZAuD6HWQfAUgJn1CKXTJTazDwuPrj9bXTThxy3zZxuJC",
  "key43": "zpRgvKEQQD1AH78BRMqb2m2nCSVNFE9fwJh8nPs5mPFS1ffRRL3DXMjCF7kWaxpStWoTQtajkQjeGaobB1CGt6G",
  "key44": "2XPyaB9qVgH1qotuEy6Ccp1D8K4ouZG5aqkGcLkyLckywP3hkkcfxa92H59saBzFP6RpHub9ehiUYQAjFM9LLeaT"
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
