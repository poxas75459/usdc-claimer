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
    "5SWoTAgEJfFCp2Be8jnooxmvnzA821iNJKjbVw2SR5TLbuFo7ZcS8JjLG73vWAj9HjsJT5aY9yvy77yQUPSpUgBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UjCKnej3mzLjxTiLd2b2nSMmZe5kcFPetpoK4dcdZvqhfBqywVJPNQgnE6Z6wStEt8VadJNQg4p6ogvbRdj6JkV",
  "key1": "T42ELSu6qjec61PXy1GusbF5W57o5VNaZE6bsvZPNQ6dvHiDmYMvBBwLgb8Vrh8biVgpdhgYJvYuzdCnm5CkAMS",
  "key2": "3YKPCwiPyo1yBKzxvGRMVMX4W5EbTJ8nLg5EHCREJ5QzZNf9jqXjWHTpq5RQpdENtW7rD3j3MSDkJLdJ4w2fQwMV",
  "key3": "29vssm1FoHKRi2R9us1wbuK1H2ASvr3Qk6x1bgt2i2CHYf7eKA5U2vfryYbFnLmxvdWQgbyMLkv84syR5N8qjc95",
  "key4": "2qvXrqguUvjz4CGRFGeWavtadh4keGF77fCaahgxH2twCKKfTm88NtP1RJYSUFEPZzsQnzdhqiWcyoY8iY5685SK",
  "key5": "4MoNDVW5tBQyr6iyPVQPDmZ1cayxkbkvbQFJgP8qgNhg39tNRhr2neP3XXaj991ZdyCXFV9Dou1Gvd2hVr4NmPJ1",
  "key6": "2K2ETHqZhiEfdmhrs19iTfR3NY9DY8h55v3CPmjiKSyt5Zsvun1v69hcLKfnuH6TJZRmZjXdg6LxqC5xzYxCz3rn",
  "key7": "5JBEnQEruJX4Lbnn2BdrUaHxPty1QNWkgHF5LZot17S8HRA5YYDsJd1hgv56qwLJvvsAz5Am3bkbZoHktACfxUSV",
  "key8": "7ByCYzi5WaQfVxMNN9LFcEdEAZCHP1Zossx2z89bM8AWwQjL2zddBzduTuwPvL2v7hxJcduYCi1xeyU3X1sW5g9",
  "key9": "3fYy8Hn9sBeZKGU8i1qnz4D4vfXyvRznNRFHaxwUh7EwW2ttdXdgQSge5WmJcNsQLx5pGQ6PmqTMhCcPzYS5zELR",
  "key10": "24SteTMXWqaxXWDGpRBVoqa4YfUCAfgxkeZX32BbUwLcSV7aQ585VtiumurhiCJJzWhwnbB5Yu9tcZxar9WZxaQ8",
  "key11": "4nnz1dpCg9zzjqBoPEWzzJSiAQEDWusKJ5Vzv45Kj2tA4HonqtTRqRZCQqRh7ALVbG2dcBk5maAJSopgkttNoHED",
  "key12": "4YrfNymPqpPn84tLmEixrc5SYELy1G9bLYXdF2mbVyj1pBgha7ugDLf3wmMGo9Z9MknaJ3zCBBTYbsm958Z8Y3UT",
  "key13": "5pL6PEHXCDKqzNVTmVw5JPxqjGdCohLRvn34Q4HSd47kSGaJptxSDP3FTW3itjBcM8kkjCh9pX9hLT4QRaKqxBM6",
  "key14": "4ZuEHShMQZBanu3jHeEtX2Vf2G9DywYm184yEsxjL5zMLHzRoCkixSTCEJjJRHW34e9oCL4ciQeudARpoA82EV8v",
  "key15": "59dB4dnxo9pF7VETep1ve4X75KSq3QjbTcS6MS6CAFpDgn9uMQAebzs5isucbpNcU4CY8PEc7fBmXpyhFQ9x1r8r",
  "key16": "4jFbSuoE2WkzzPkr4X85guRfY2VmNMyX4YQQBRw4ouFYB7yAUFus7qvjCWQe9s3rgoWv3inedd2PnHYpM1bmKpvn",
  "key17": "3qoDe1p8eFGzm32Urx62BddHF2DdYT8ebC2Ub4EsfQnsrx5bX1NzxEWKE2M8e1DK9zkprZACbDz7FYjcN5bgxPm4",
  "key18": "4dXvsJ4vvab67EXWXKV9Qvtf8an56cLfbfWrnsYtbE4bMncSDdx1EaHe4gioUQrV1biKE5comajy3HxfpqzRMRn2",
  "key19": "2CUyJaSD7om8BtNBE2DUrLKQpgm2z3SupzmeVLmu9vQ8AEMEfiJHUUPnN3CT5TWmi2LA9xb2SK21RgMt1tEZnhY5",
  "key20": "3hy3r7aWWc8AovaQVykbid13D1BWS9DE7xa4acpe89n9URxPGHzkJx6rmV6bQ4CiiCE9Ne6to7G5B7Bs924mSzRC",
  "key21": "27CLZn9V7q7do8AU1xxu6eFTYxCyerKyjnKuqpvp6sM8wW8adgkBoXTsjbN5iTQgAJkjhwWQ13sTTpVZ3Xka4xvC",
  "key22": "4vLKAsL4ZEkMXTNZZvCXHiLmhPiQXNenWNuxyp8pHWCiJzcqgSwYJvYiBszkBcaQFvoanBvTHpD8JNdh4Q6N6B2k",
  "key23": "5NStJw9sWNmeTugu16AA2EMXtZWxNLP1168LEURmvwAMJwZtbUVyyaUYN3fPF5bDaGji8uqmHxjH1sYT6u4jtZCz",
  "key24": "4UiX2XYDVh2itHVdg3YJutC7NVBRCaHddxpxxnTW8FWRog86GBYneuZPfvWCBt2prtGFPZ1nDpQCtkaghH2bFVbf",
  "key25": "3VaKrvYbMGBQHYjgu5dPaN8YNFuayMeroENkDPoM6w4YDeareLj8AgDxhPY2sKZeN93fNhcUNKXxp53QZar4VCau",
  "key26": "5pWxbuvPcuewFTM3VzQUAyrSdhYpHCJjWvKckYoDMuMnTPw7zwyWQRESnxeQswiCRf3mJfokEukM2L7A7QoMKPET",
  "key27": "1iXKs38T2EoJSX9ogyFbAcAjgATn1JeA4NHjUdp8Rnsu9w6aD5HwUBVy5fGarBe4NewN1ST3Tb3gKX5Wj46PLN8",
  "key28": "5i4RDudFHxx3B9XogN7S3yAQofS2s9fgfuXUsyyQkbJBZDC8hfBjvRXFupwAA3MDY3GyUrS3KEb5VoPLfJW6reZG",
  "key29": "2j9Nu8DCTc9j6xbYYJvcqNEZSGdrz8LDybjLoK4WyBpXs4MsM7z8ti8CP8C79o4Hs4VXAh3pbrjn1Qupc4LgprHB",
  "key30": "3EUS3Tv5VMa8tgy5tGqCCgwajV1JdRwZ3txBMzDaygvaF6nUuw2TCmMCrrY7bs4RYghWe9ADtAtk5hV5p8FcArjd",
  "key31": "3mA6P7Byy241puhz5Mxf9MkXfvu3wMirbBcNcmSritFS4FQZHrLqjTbYTm8hLrtCmpvouwkq7oDvdTTczRCVRmfK",
  "key32": "5xhHhTZrBNcsVpssgbRbP1Ci9J2Bh2Ui9ARiXZN9Mgw3HVCzamudWAadafpGq5R5AtqvBYTDfbh5Hj3uAxWsrAxq",
  "key33": "M6eK7GzoLKSJN5mDLkgskv4RYTEAN7DnsWv6zAWBviaCGqJke9vfjb8DpcT5KT2U4o5ByT8jR32vhMZBUxytSNG",
  "key34": "2cnBdNqDidh1jn1qFdxpJPNvETm8EP53Hr4KRXjwkuVUFcPjBfZN46nbQWYHaeNP2L4cubsi2oyRK5ighmFMbdqd",
  "key35": "3sUp9u7BZ8314yQhNgkuB7LW42tiqs5N9RUBPei6aRzaQVdSLAD1zu237xqrLxAkjWici3FqtT9xdRytC5R1Dbuk",
  "key36": "4r3JrDfPmJbf11FmFDyuoaMGE9ANDY2XojNeKLDP5XWQQFSeeCekrADYniMJHBbcuxeYb8bn1AWNNuM83kHLM7uh",
  "key37": "2Z9EAG9uoQC717K5tsMgk9ePCP6NAw4iDAbaoZm5QqHHoQ2f5nt1wRdcRfXafuL4HjJhEVSGAd35Pyyaopm82h8R",
  "key38": "3pp6h1NHPG67vFeDTxbsKSe9BJ44ri3xzp1qTUeSzSuPrGDgdMoW4djTEiATmrrdRUpkFEa4grReHZvsGZt2Beo3",
  "key39": "8cFTekZx6G1jXpxdZcA2stfYbea8m9pmdMwLkCBFTCC2b9nKMtigw1oG2YCzpK9Zdff2iwUpzbCM5u96F9oxwGC",
  "key40": "2yEE3KrZvByV3qL2tHicBkv72MJib76LuPStwrw6q6fxGLPSk4vftPQ6VfCe2zftYhNd8tAQEJum2ozxvyppBoSE",
  "key41": "3xyPvBMfy7uyy5nJD6sgvt9WHQuZubNzj8MHzq63Tfh9DQ27QLGuBu1YiSNn3LB7SLbJHxeAqw9ACmFqCYYgUMcP",
  "key42": "3j7KQKjkG7vYenrbaE9Xx1NqGCZ1JJ2qD96QG8EeASZn5zBCNE3ooBw5iBpUsZXZLNkhMgr6n1hgarFGVwv4ythP",
  "key43": "3iNDDQfXtVuV3Gq2JfM5gi8vu2yK8ncTsxXPaNgqXp3PCQ8VaEM8icynKF2qqQX8dnAvKgpxLDUH8XrxgRyRKY1s",
  "key44": "2Zgez5WXT7mXoGUvsaWpGKZgyimedk5zb2ahE76ZePqtBNJxvihKjDyJRHpNHo71ZzSqQd7p9vzRj9FLDtG3hND7"
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
