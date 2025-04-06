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
    "447ccqZPNSYWsaTu1Z2pDnhE3UGZdFQyNaK6DceFagoqkRP4NfSwV9HxvmYXMTPie5URuQMx6MyGu8BmsdqzprnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TmtMzgjGHUEALxZEPmZj3HSbGGzKG6sGJ5bFKyjtdfDSASKS7HwudY4jKPkv7pfyyxtmZPu7r7Mn6i7noBK4Fti",
  "key1": "49eoZTdmh8T7Vt31kJa5cXttGTVhmip6QQUpeK5CYFEUZgVy8rVN1qDkVqWUATDUWQHQMMbEypvibBD8bZ7bUeiZ",
  "key2": "4GTbZdbtuQdiKbwq2fveqDtVsy2BeDyjz2AJKY5fHn4E77awDToz2g6AMdCinX2F9AbBoWPdmtWXLonZCKiX5Psm",
  "key3": "5da6XEQdAQTsSmaXo2Y68QoV7pW5G1kAHH65tjbe4YByEKBwSiVzy1Keuy1M7uoUCi5nH1RNFxmsKnnBnP8De4vV",
  "key4": "p4eoibJc2K3ZmWRpDLNrpzkF8dMXYxz4jR1D71nNfMUJ2qc8outZ8uWCv6KURBu1NbzbYvS9XvUpiyR8H7i6zwQ",
  "key5": "4d1B7a5PszfxVSnfg6gn7goQ1qmFiP4mNLJvXDLu5ojoN7LKzcNHZ7C6e67SDashP4zGv47razBvGffiaZroBcdN",
  "key6": "E42CXM1A6BVDFWQ5b7Qf1qzNijbmzAa7GmAcaXNtuQoJGA81Ehom9tFZCeMiAjafTR88wwyv65AkHkVAkRLzoqA",
  "key7": "2434um5EPrwH2d7FcfJM61L7QTHLFRHCxaXaqeH9ipWCCRcmkDnrkz5q5s2GrobZxFPKAECfz1tNqdruAjH9ohgf",
  "key8": "4cgx721FswuaYw8qmQaXfWkgy5rnrXh7oomBo1ui8zunYn94tcxAVubXaxgjmtm84tqKjaVoAfRDR4xUuRmsLCZJ",
  "key9": "vopRApd9uSJA412jA39H1MJYtKhSA9nvRuVuMdY1MV5dVGy9HVccwkzbouh6xzkVsaXT6VmL5Te523D2WNiJfp5",
  "key10": "3441qByvf1SpQpWQNkgdSA9Fh2qLEhwbZFbAbryqB1tqtTothF83SUDEZUcp4m6vAh2XE6Y94zbnaVurFT3BMLNi",
  "key11": "4GoxcLj9CoVePs69v9zowQR27YrcjHPGSY1jeiLLUM3ogfLyvwTM7T5i9nU59jzfKpKd15oMfYmXTXgaanQ3ds35",
  "key12": "28XpAQxzALca7kB8UaY3cnB7Q66QsVAT74mwZFhkush47zUvaYyrGog2XqXQcLMWdTLsbDQwwFG9jLMvpfzJPnbZ",
  "key13": "V99wMt3c5EVP27mvPzbogr6ELSkDULHoMbc2puBwCh4EFpxH2qnzbYAf5Dq9A681JWGk3hDADnYyxJPWWT1U54t",
  "key14": "xxgz7rqqd7yDF4Ujns3otZjxbfMccVA7Sqwgy3D4gcQv1QoqbbUCA5mFiHBuGfijrXErRTTVKVzNj8KvqQds1oe",
  "key15": "2NdpBZMRfxpH934LRETXSqVbVGjdo1S2SQki62SCv2SiBTrVsFabFKjoTtDU1tBpzkc1wgqACNdDDb7xDgdBpgUW",
  "key16": "3pzxS3qEsPzZ1Ae9UYgrwSaJtXxT5o697jqW9TGbTgd9WLGdUsmud1TerpGjmPE4EtuyFNsXVnAsg6Cq8hscLeWA",
  "key17": "3J7jbrTefoXQqj6Cw1RRSvSeLzzNwDKGCHF57waV6ZUm6sLLkzF3CUeiiAFnECUsbeXxibEfD7LoBPmBKYMQq4DN",
  "key18": "4NVq9hm7foFQQLWdvku2TgzVJTrLVXm7vjxfnsRMQWEP7X4KfcFi9pXsizXGmnhNk9DiFBWAX5zMVR9QqeXdEuNW",
  "key19": "2TxjknveSiL1cmyeYGBBR24dEVqk7WoAFrv7tqHfipBU1YdERXCQrpwPmxS59Pdk5z8HJtwAfEuvTDrfwa4rEfa3",
  "key20": "66gNEGJBqGwcW1H47jMYpkKoWfQWN9Whv4bqAVEWjcfUHUqEi89vYZxp85QcG4FM96ERH3ojg5NppKDXp6DtCHd4",
  "key21": "3FfbfnWXwE5mCdNWHpFaRGnoDDcKC2TKBvbAuEw6GcnpuohKxhpGWymZU2GJv7iXn5pL4gKU4BEiQqhF9CNEYZ9Z",
  "key22": "451QKGJoATFFdadKt2k72yQWhbTkwQVsTYU68vENipspZhRneZiUPeawU9QDG3bSFa38o4G3hpsPNs5BL8ADwS1J",
  "key23": "3dR4hh3cf68CkG5GRSANU7MhnygCpWfBQYeB3DWgrPVSxCMAW2KduMqRMZncRpFy5EYWHcXMj1zC5wyaHPpWSNJu",
  "key24": "2EPHkb6YDnjyEnVcG1jKWDbFqxQsSUNEFFo7bzuxJzVRsHbgCg7N7Fg8B9DZcukSUpJFJcRMCJVcTzAyRsp4paSU",
  "key25": "3Gdtdsfg4m7jpyFwgFS1Qtyos6NB5eWnfbWcD1jLDwNzEfLau2eACQERG5p651NXTd2L3dcuc4y3VVWbwMgde7wK",
  "key26": "SKkG22RqpyBVwcaocQVJiJix1nvbX79fXsLqvQKfJQKXVhqBQXiS25cpqgDnZG54unu1E6t98PXX4CUqR5tQzDL",
  "key27": "5DENvrGnFRVWjeYpkrB8QKrxZ1iFPxyuUhKE8Xo9bZyhQjo6iNE11Rogpfj7RQEE4AwMwSaSr9UdE6VYKBvHEZj",
  "key28": "GwXau39GaPNU9kKcoRJFXZwArQYUdGqnSHQm9Pg15oDYucXmw4Jw5pRPP1v7GxQHPJwS13is1YfRYkp32jYjBD5",
  "key29": "24QAi5od1pzne7iqatZ9wgbSV4AySnuRcTiRChMqe3xN77GnrbHmw5Z4ZzzSXh2aAWacK4KpUPb44ijW9VBiRtsf",
  "key30": "2hSGRygMML3TEyzeSDpKSPooiJB3YgK2HX1gbDshuntHZnoXUSNb3M9YqmE3Dx5jNJjqyhRnaYndBhDXvSPuK5wY",
  "key31": "4XYL1zYxMBuy2GANs3zhRt4pfLzqcZUKoFovtNREcFCBh5WeqSxPqtS7VW3jPgmeJYvmHayW9nWyPwBqeXHhJQs6",
  "key32": "59cX7UUu8wePwvf5x5FVj9gFeTLHdtBDDXWVA26cuej7NjegpxXckVHBuX7zjrrxBAX3GpgcCX3NVQr35mupHVnw",
  "key33": "5BKJ3rXbA7c8kiJ5YoBxrbkHBbBucMYUVbo3e2hh2aEPBhj5Jj11pDGStGT6P2gBYGYcxwu7fjssDARzNFEbT9PG",
  "key34": "2H4FfkWsfiKG4ZA4JiSAAaLDqJY5KZyHEqkL4wReBk937NJdnEXmt4uPgrfycSR4CkU7fWT24Cn5MDME3F9WLJRr",
  "key35": "3JL2VgUZUmBFhKFp97mGBXvDb5RcchqUJjrZ8PikSLvN9s9xsXsiYLPj3xz5bSnzTPTin4tp16TmvG9YxQLn72DY",
  "key36": "3ZFBX6WodFu6GV8PkmuSHfDvdM9dCiayNwt9CkefFT1GLG3DbYbrib9Fgu7UXgbpq1Y3rBkLv8ZoxtsBwCXLy4ED",
  "key37": "2yo7TqhfiVGKfnj1Dwy4y69VYkpCZwJaYfW5CKEEz2sU3YktVVLzvLBgNR94XCEB17vBDidGENRhCt61jL4gpYKo"
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
