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
    "2PVfAPSLN6YSZ936Bq87rH5nZ7D3H7SyuFHui428BoBpubyxQnjBqmUrLYf6ZM2eSwkndUz3zdqkaKgify2vhh3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45NFtjJwh3MNB9UHTNCrFKfUfvphPCfRoF7egFBSHdQ5r1nuux8JGLvpiM1zmKguBq9mdN9TFUadqryFzktbD25Y",
  "key1": "4ycuYPY4Pc9mkYbGEyDPmQF2yYbFTg7Kc7MvYT7GsySPjMusPwfxEHZw8v8qNPVDpX4h4b6Y8jcEuGdNAJhNt9An",
  "key2": "39pML8z2r9zTjUAWgvDMUAVxvN17jrjwxNG4PKDveuy3fPaoD4GkTajJHhvjSrAcE7B2LNVkJzHwHTCqfPCH8WBS",
  "key3": "4VDjCYjKnxneHeu2171Kqpyes6ao53b2yLtmD34g5P33iQKuQ7U88jyUBzwMppVnNF3DgcxH9anELQ6RubyonqZb",
  "key4": "4HTooeLznGCxhewUgvKoZSoW4bKG8b86dGPrs5GyMvWfwwbfuX9NbU76QfXV7FRkXd31Yzf9xU1zir4opY9F6UgY",
  "key5": "2XbbnNcd3CbrtstQumwgU5cW9VbHXWLhkjomtusmazH4gGiuotmDR2JvoUzHgV9iQz8qkmtG1TEgPyAnwSQDqfnT",
  "key6": "2Cbjk4j3DwJekn8FsaJvzkRdPdwnsTaEeaMobGpNRneYrSxL9rGHNBNaqnod7TRevYrVX1bhdGicpRpHvXv3h9CY",
  "key7": "fNSygZveqk8xYLDjj512b4QSFvMaG8dWPEvVBg7zhigoANCi1D1QVBYDnr1anPEi85WGyi2T7iPBVZFH8daeGXe",
  "key8": "2TUciab1HWUrf9fr5GYdrPxjoBzsLsYKAZPgMrQpYYiYkBCMtC8mmWnC4ZYW3SDup3CGXfAzsXMZAipc96V7FjoP",
  "key9": "ngUtN4awpLDRCk57284uqC94JiRnbaoTgiKgNBbNoUgYqVmPcvaWZP3EijywNn8ogNTfF71m85fxLTKNkJA76jN",
  "key10": "HDNjNkj8ioXPFCgzsBqpfHySginGLSVo1FKRjuopjg6M6a6UNVRUiQBPxSBaJLDgDHLJszi3ZS3Md3BVw4EVKL8",
  "key11": "2LG3epqgvGTS4hxrrcq7wPXhHdEi6ejuN2A4LtetPcFfC7ZBWzrv34xwrxNnCnxHcDhGGGVCK7Dnyrh7vU73GkhF",
  "key12": "JtpNUZYrkxqrnxVDHs8k4RsGUw6ekFaUueH7seKT71R9Usf1MypzXGkVFCXec8v6upFALb4QPx2XgYUcuyBnpAK",
  "key13": "5Cf8LPGw27CZk6G9BkoTxs2FbRMpomKkzaNNe34ZLY2D2Y2TxMercQHkZwFzvtuJRDLwddNyKsXuXcrhy4u3Qiq4",
  "key14": "2uLhDLnm5K9UkUKAac47LUJRwrfBrvLsXgwkjMiaqgburLkgx6L3rkaELiTkuqa5rman5hwcep1deRKKf1YVWyCs",
  "key15": "3junacPusbQyuxuiNtrzXtEEAY5GZsJbn9PANWNk6cQWqU7a4DPCGe8D8TWQkE6bfuM3KbX6myfEKjvXq2KeDj6Z",
  "key16": "Qm3ZP6BUfzKrGmTTJGymz2KA7devAjp3PGi51kWUoMhp1cEMkGBYUTEnLPx5qXDTAqFjRMpS3yP9APyikqeGRm5",
  "key17": "3YQmBN8tTcNDF6YwN78yJVLXrRCJe4r8oiiLWham5SMxkFKb4eM86cgGP8yT8QPvtfbg6rTUDWHMPC1NWXJbPPSK",
  "key18": "5kBaCJU3nnmEiTH17g3rBkMe1auZHmjTypZdwhvnzacUDnQfvTb4VG1JPRS6PdEHwH3XNqCfq8CZ9Xjv5NQtMypT",
  "key19": "5hHtRGwNyWKymbjGdTKocNBhEEwqvQEADanagJTwGgE3ybymq7kgAL6PgbrapGkrXqVEEYPwXWUEizNd6Ba3CkUe",
  "key20": "ANTbRt6YXJFWfyse1RnEb3T44yB5emkFNGvzA41ncb3HzBE7d8qKqcUJQfPE8acjhmbj2zgCVbXxwx4HM53N2kA",
  "key21": "ipQ4LrsUEMFH2zPoV62X9iGZxkcWDnAMCbRHg8zTYxhZAcP7gMwXkyMAU5vQXwjP2ndASJuCGfn2UesQkEcwMUt",
  "key22": "5QV3gURuwTmP8tw16B7wZfU24iJSYje1rnqBCfPnknjtqP5zDcjZg55dwuhp4218Sic3SRSjFn5D8HLFTRR7nCSu",
  "key23": "4BBmZrEfhkiC2aEV94UzDfMFSHaQrtFbYwUVPo86iy5p97hQV4LYDnhRQuMGcStdgSczBXoejTWRKwtDXziU9NMX",
  "key24": "2PTfNcx4i9BpHB82t3Cgc6FEdkzwCjocsNXnd7K2BiatiiLH7MXM1PbTsoPQMehrU2ZqG8fyaT81GV1Jc8mpx8qL",
  "key25": "3xg3sbnFa4Jt2hsdbU5nyDh6cfque1VmVxmSE3WG3geKu1f4hZbPSf88LwwvdndyuLjbGisDVMbfZqc9bhaxrcri",
  "key26": "5t5BtALeFjpY6nvYJcz11S3zry6DHTfWGfLFpkBieLvBsMG6gfwv4kfB8EB8F61wd2L4DNx28fFLS35U4B8PP9xj",
  "key27": "5VZJufCx1GiueRTqfYPJE9bhaGGnw4zAo4g8CT3Jsdz4afNVMHvDTTT4QSC7Y3jf3EzBvsRGWVHTxfvdBUqTUhS9"
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
