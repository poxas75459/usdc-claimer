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
    "318Wh8LLPokFCui13Ndi2G5AzFPkSyFmrawQ8c2bqoKa1hA2MWBRrTH44Lkh8AkKa55ddgPJsjVrRFMVwQ9gavWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p5fAc9iTZTuGvALDiev3dHBkSwNDETE5HihXK3rV7C6TkENAtWqGWXx9C6uFNgB7yxwW9YwMBcdvzseZ5WTPiNc",
  "key1": "c6gxeV3JVatS48XwWX6koJHAZXEd7nL8bwftN1cuurLA1whvL9k5q6srytQppfTku9G37NQ68GLSoXJT4u9DHJ6",
  "key2": "3DpGTJnw4Y1ePcZ5VLyuAZFBqkQCNrr4oFPvVmxyV1isaUJU4rJrbDNqDxCFgV1q5gruLrwjsLxGnRbWi3Au6fo2",
  "key3": "5g61FcEM9uFRXG3CNB8hpNtrPGWeq2BrX58j7b36NSmgCnZMJHfR5RVCa5YurUiTn1RrBNwJ2PuJLpQXn5U2qkeJ",
  "key4": "3KmgJ1UtJvqy3MQRdUdfiXmgpQKqCPQRdWgr3bGMpY3QvfAk8Wb5GiosvrnPokBeRt1HUn9SpSphxptZ7BcWLK8F",
  "key5": "QAFpuVMuq3kmANmdzLqCypCC9QYP6zNwi6W3bao3YWWf7k4fdq3ZB4jWCEw5U65qe9JenhEoQez1SsYya8vszvL",
  "key6": "2DpqvdhVtUUNCp4dXnmiVJs9Y3hKUk5si2zTwyW6NcLfkL2w8tUwuBXHPR4TCH6GGvMKrpStDdFyZDKKPhYUYTL7",
  "key7": "3qZSJ8RvqDc8uEQcDkjBsdjj1PFpqf7UCyU6yqDY1ZktQNccphSYAxsV5MDkRWeJD3GMmj68u24yeUT4hsF953U8",
  "key8": "5yCxGZGMPuGK3HgY8uaNpjH8oHoD89jSLRbEEGbvZWTzWx4yn9EvhQrH4ng8Jr6y4cFyzWqbkU5bYnWJzfkwCqZS",
  "key9": "ctsbQCNTaf4jFQU3VzczdDBqFrpFM7qm8fooHPWDWiSwa7v6jo1Nap2Xosmx6xoWih8U1P6KLHLhVM2GazbLfBb",
  "key10": "mKS7cKTdte6CqEUEJ21dEGxMsWr8cJTxEnRwWC3JbJrqV3zmYLJz4L8D2yY34Y7Wzk9p4zeHxP4313XucXp3q19",
  "key11": "3UnqppRexa73ouKpayb6K3sb183A7bjyKPcnSFF2xyXoZ41QVkEMUw7byZ8oFJ7MBgGvG8ufJavK9y2w8P3hiF3o",
  "key12": "52G24MA6NjorAtMQNGgLXwdMPyLRu4jsJeE8HFz6p8cpitEGwAcNyHSV7XMGQ7ECZPTf9jeDbs3QTKWcpEqmKQtc",
  "key13": "5H1U6exLoyodJ3xvHtwuhi7boEKyRDuA2k76aDQ3fLLqg52mipdrbiXNsmFfhpXJi3oX12EAXioWk7JY26YzGC5M",
  "key14": "2hz5S3emzNpu9UgwjwDyx5EgeP7yis4bigknxbEicxVGZ3aNKhVPy4Xu39BCeyHPXQv5mwhYqpjwHaLvrc2zJsBj",
  "key15": "5PYc6F7Zm2djVUmWzNu4Penq2eC9UdBU8d7iaZCRGrouJt8u97wU1mXi5DH3JA4rRqxyYkbdvdtMxcVF3jCEbLKS",
  "key16": "2JdKqHreDJ3dtWAUnGGFH2wuoBA352TkheRroELH9LT7RmRzvJ43SGZ3182CbzgQXRo4t3mVaTPT7BqQa6dWJBUQ",
  "key17": "3Rn3uevuGN57qYiBBkEsn7FdaW5R9c5cRwAptE81wPeyhTD6ZiK6YSeDR3deystLkDpyE6FMv4tBqKQGoTTxvqxi",
  "key18": "3Gwgx5v689Mngj8HpMThjxTmNvb6hc13Ex2rk9rQB7MWBQGrXkshKRMtC2aP1F5A85orNjE1wEWD5W1791s73zve",
  "key19": "5x1bZhPEXo23nvTubnWKqtcbFK2ySBLcP66CW9zuSpF2rHHKQZcQoSp9uGCioqZkPZyowbPCyYvof4sp37X1frjc",
  "key20": "62FyaAUbUbPxs1qcLWKZcwgCG7VaiNmqHc7ioytuDEGKZfyPL5KHtU7Qr5DUVsEkmuN5EXhRVwVgmAQNAxBoLm1M",
  "key21": "55AsZtbeP3iL2PVkSJupwamPhLpTHDRofwu5LAWEQ7K73hniXQMYK6hJo6tWmmwowSojNQyyR2ayBvAf1dAY8sLj",
  "key22": "4pLzyYLT9FyihVw4buwfUmKGDvHEiSXEPt24exJTXBTSeJmz7aE6c5Ly4nfm1UczY8YSWcftPiRjxikVsFA2qaby",
  "key23": "2FfhiH6upp8xbW2F6iwSxx9YzJrosV8FKuwXzq1ZTvr6Xr8fbQBbAez3VivM9GHd1FnSUYMuobW98vJH5GtdxohS",
  "key24": "2SFYcKasKGXGKARgygCf6JMLtsChM4Z3Pvzw5AmCzWg224bQhUDW4k9TMzFzGKuM7c6Zvq2BCNhZQLJKkz4WYEKg",
  "key25": "67REXtuKhuXF1bZfqZVcBQ9zS65XV5nAhhnh6QGVAJhEekMYgDVNAW8YYfkL4F3CTgv7qAkmrUWtAuLJSkPgygxe",
  "key26": "4wQ4xqEUSPm8h2VYZqXnLwfTEk3Ysp6sEGPRQgABNviwFzFRMMpWaXAvC8NpXHmvxh2x5otUHHEAkuQw986DyEVT",
  "key27": "tbZmgkpHLdxxgnovF8RDSDf6N7Ks9qyi7QtGehepuAXzYML95EFpdDqAzHzY9XvD9Y7Ps8ErhQXNK8fy4TKFJBx",
  "key28": "2dXuUYUmDZu2rn7S31Rs6sgr7vjsRxXtDjAaoYT4fFHrsMfCw5aXJXzaZuFKtH3wosHoDGhC872xmstPmx3J9Sth",
  "key29": "f9c8PS1LPjVtJ32cZ1ZphujphHDqTSLXGGmpMtxYwVbLzrBKgpUNkVpuQLeDvj5bKUVKc3soLGQLRyPTgJod9yc",
  "key30": "4KsCc5jw2CNyfehjDPesZZc73NyH4L8jMFYEHbp1fci1atFjQVLaHEcdNaZ8zerHJjLBXwJdtEzzTUGmJuuoQy19",
  "key31": "3Z9xZ2z26CKqppk59Vm59fUgHvDHUYzuWoaa8GZTMZsRuFP94r3MxGLUneLGFB9b34nAZNB1mdPiyepTsveZXvHK",
  "key32": "2CapkGYzmkeJFvWHiQ9nfULdJLNYEqNFpPBGX1e4hNcaFDB99jN5VACA91u4GjAMGW4XJKcoz3uQ3bhYRtt2G3F5",
  "key33": "5FFoiAqBNgPpAhsCNSsfdobkg6Xy6yTVF5Px4t24NfxCpt5feoC2WE3LX1nuXkSTtTJq1ev7RYLg2rWoUihxrqtn",
  "key34": "2gxa22b45xNnUDX5vtRQ15M84k4ERicJwVqxTgNvCTL4tmHJuGpsbkNoduoZjsABKTjx9QsS6nXSUoduUgWW8jwy",
  "key35": "67m2nMURUfjTzKbvRL5S7Twj6mH4bY2J8FnarzpoP64kPZeRLCbGSR8bBajf9aDvxG7vivN74mwoufCRFUucPkvg",
  "key36": "Qig3xrVDgTzV764i3r4cUw48tH8szspB3MhvRbTkco7bPPbt4zVTiYDdScSP1Nf9qDFoG6S4x4bgRu4UxtiGZoV",
  "key37": "2A6T44mb2aUpzz5d7aFTnSwKx8tkU9YQcaC3SV1gmy1wboyUMeCZE5JJ9hrxkrcsFw3ggZgSNaBPuQfg9HFoSnsn",
  "key38": "5S46GVLQgeETFaxwDQNnQ7jhHCtz3XH31Hac2wKdW9ALKHCGX7U8VeboLpEDTRAYD8FJXFHCxkUh5B2TqU66F8ni",
  "key39": "3BpSZK6a7rS7FNLe2hqtpjio9ByZKxUQXWhbJiQ2vCRgCfYsFXyH2yMT1oZSzcYNZiMu2Cjjub2Cd3wDbM2iVSeV",
  "key40": "5c3QW1zUb9tmcbVf2En4iTowCN1TV3EPLdK6PDQ4FYTyLjZ8veoUHvJbuqV8wEkjSpEVZcL8QWncMVcy1d43RPFo",
  "key41": "5EtqVqdUfp2FpbHvTs6kF8xy7tRvDLBsytj29xHuTZ9GM7hQGhmDUtg2ZyPytPtHdHMc4XoDon4ncRTC5QujxjDJ",
  "key42": "5oLrC9iiRKZZgp7VEcQLFJWqa72pV6igrrhABYhCS2xoZDHUvhwSQ2ZEHLHZdSsy92aJbWM5VTXYWK2VUMb25XS9"
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
