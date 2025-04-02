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
    "37iR8pa7BUzQ7z8XAUJ6YJdmhwwuM9qbww5PRjwdrx4GEY5abzZAFEUvH2rEqjbEXkUJgcz7ZR4h7Mw2rM5LCPN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MadTc8fZmNwMDtjnrQdhXDnaP8v7PfUXkzteobiGmuy1V4vJbDLx4MZ7UM7XK2P85yMZQgdqHWkwEASqbv24jQw",
  "key1": "HzKYVus7f8Buk3PsWPRhphg7KcGmkLBGeN5sLU8b7XLAK8c3fTpPMoFWvH2Nvh7rK294x5dnnjaN8iDe9ceGpPy",
  "key2": "2YuiXKgsaQg1pt5dLYtTEcmdCgdQ6A2hwKXBAmjtPwho6iXuX18rUj4R2SvfrTd2HCP7f7SWaT4622c12VTBZQzC",
  "key3": "2FSBCHPEbwZsegdvkQTfMwA5jYekEDaEykUC74LD7XC2cCGAdPAe1evR5bVZfpJBM1tMTdib3ZeXC2AsxkyCQAgu",
  "key4": "2ZyQ4NG7m6jhopVg1uzh6azpe6cusnqZSVqJ4VVKf34qmCsbeTFioghLc5f9ActU5h2oUNYjsxctePZzPtkexsWf",
  "key5": "46cBPJfpDBGJJE5ug8vZMPYUR7in34Uq6JRnr8vn6EWzV4sZYtFTHhzLDkojtidgD6u9WRKf88SNM7iE2ULWmYC",
  "key6": "5qnoTTiAb2BTeXvYfT58f4ViYBvVZ7CJQRGbge2rdtaZidjjuFsjeD5DEchpHZAGudbhAeba2F8jEmdykyGFj39b",
  "key7": "5wS3ZPFssZK2tjEZnDonZp25CBncmS9M9G2LE83eLScZsdMHoQxMuUR7X1QCYaxrKTHnNet1eMzSqTiLFZxo1ikG",
  "key8": "4exKtbaq64zvcXuUYq46DQ7Y647n2biu3Qcq8mLq7LYtMXFjRmGiJLhDTospj6xCpDQQXqqErjApUjH23ryFBzZG",
  "key9": "5m3puJ5ab1xuMHAt4anCg4yQAstj4Dbpb3pXQLpUEjccuiUQDQ6NKmZHkrk2FRZUUjR7PPHRtFhGJcPXAwaJtDB1",
  "key10": "3D78XHi5h1V8S8pgJgDt2XyLkhBaVR61JniBEh4paE89Ezr9UqazkmGaKVepm33mZ1ciMnbiJKXn2SZL6Amg4iLH",
  "key11": "3MMwYEBPNu9rW1yUm4vLFjQLQKh9PJiEnPoHE9GADDy5zMDeiPtA6C2ZxbB5TX1E3kqYf9E4kEPQng3PDA2cbpW9",
  "key12": "2jSJnLeYA6m12358AFmMTfdPrCqg5SMvYhz232NBAmBqtE5yuAywqSUnYcDU8TXmrPH48kLU8hYVTW1XjuBEv5y7",
  "key13": "2pTEKyEXWW8kPrKZEgRmfCXvx57aH7XzmE95xJcBwbjJUeuJ8B7zYQnx7yhj8vb7sdvj4xwcJBuGC2Bg1h1pxoeW",
  "key14": "2BdfXk7QbZNjwnvdgBueiVaKvrDuVhNQjq9h6ns3BfWhtLXLQwonEmPhVg2KS94V7VebjXdp4mQWJsp5wvKAVBUW",
  "key15": "5iC7GXbv7FEAsuza6andb81BFUN5t57BNLDs7TjfQZCSkvMNV3HRyYjNiH8MY6zqrWDgY6HJjDsznuR3gRBTdgKH",
  "key16": "2TcnDRYdZeRQe9pdND9KkxhnqVTRrEQP5vh2HSxquxtxoDeDSwQUFhmFLixsmHPHvHzGgG46mXgnwVaqYRhJWxD5",
  "key17": "5AtU4fMnTwFp9dmXCj5PmWStJgBjffVTLm14ksMXzSG7Mh6KfUE3PobcrueGoCBgbBQDzpnF3TcsxeeqnXuUaDGA",
  "key18": "4yWm6BnZ4QM3VJLFPUeTsVzoZsB5pFYeusuZahqm1SScCZjeusuNUmyr7ezHVxQWwVpusrr3m5M7J2Y4GwdeTRo8",
  "key19": "2JbDVUMvBAah2sYywPrTovYPSmujZumTVciUubvToWSQmXdyYic4VHWov5TvSquqVHwrzswHjPANRqHwzfATxRGT",
  "key20": "4kMMUjigGqj7sD3mgpTvjEiSGmLqNsSDsiSSJLrNTNXwvQUJTHnJfqUMprxpsADc1TBBebwfB86kSPvQLT9Ztaxw",
  "key21": "3k2CS82nbwwnJC1DV9rTewkjEJphfcJS9aS1d5Qi5woZ1xAaHdFiZtzNZnwVNaaYSy8PNd7ZDQqrXqkejAGzjtTd",
  "key22": "kcMbUZzEt4c6C4mgZSfyiBbZpHpX2j2EAty7XRdoUufBQHJfmsPZBKc8JcAJdsXvbMPHfPurewx9Q96oNEb9ynp",
  "key23": "zzjXGHy33uCdyWEKmg8czsR5W5cVqiaWTUQK7rAuG7bBXRcG7FjZxPB1rKCszkHKL7ce6f7pQ9KF5r2DZfyLpze",
  "key24": "2tuva6nv8VxYzpUtmJtRRNRepgzWJmxMkRdBV9AZtyMUo5MMdMDwovcBy5yoM78QkT87yYvkbccEits2AkJEkCsj",
  "key25": "56wAEXDnrtx2cXi1fx8a9aAUGJs1cYzBB2mqQA5j18FM6if5ZYKbATw5HdDkktRAtGZLggWdyBmuKSdZbfpojQYQ",
  "key26": "2aWLNVebrSFtH4Ymj4yPKS1oNsPdrocE2zVa6cFA1WaWctbZRa4MaREjiJztWUsvpYKLEW3uDaqSxnbvnQCHivWF",
  "key27": "pCzrKeU1yw853P2dPzaHbumZesVAFntGrrh5xzyro8JjKEZWak9mKikSLQxAVYu9g7DcCMsbcjXvzdwBFQAFRnj",
  "key28": "2YoB1a2zgTpfZnCcCH4QoFS3ZZGuVwJE5PJSdjNss4UAUUNncyP6iN8UD5UGiANn5cjc2Cv5mAkVTvLyPFxLCfuC",
  "key29": "GupgNWAL4JWCA5V3HiXh9Lx3XRCGdq9Km47HSYs6oZyPP54kRQvjbsAbxVYNTsGnDiPs8sifz5Keh6Epg5jtfgU",
  "key30": "3QLaayCYgmnrTJ2aNejsDBaNaSNyE15MMMg4UG4KexguxGj6c4EpsGjWczQXk8ZUg6MG1i8nSnTL1tWCHNMzT3iW",
  "key31": "2xTEheQioKZwBtudAE2znrd9bovepqMpsofCxmRsdH5uzeRUibBFHtxZmTQQhCEUJyRYaEzpADR3hVPL4jHB51qF",
  "key32": "3PT2qSXh2mbsEoFX4nATxmzDfvXGi2eM7PrDn4AtePoxTAcWpNWY6bBXuzWnjVHgnZj4gRuxzquknXqVR7jn9McB",
  "key33": "4Z32rdbiFrsfybG8ecpQoZmUvZCVXw88sxwhsNvGPVmXHbHJfbQs7pvD9zHX2q8tKt9LUrUdPZUABeBH6TfNGhA2",
  "key34": "3ifD7aRNMESoK7rbg6BUXwTY3RjvdgnHDyvwj5H5kWp3U3qkjb2xY9gGgJexxnoiKdC63wn2biRXqWiqkTZVptVA",
  "key35": "3XVZY3Tra9wMQWGgKAt8KaJZpbfqLEinrgzigyhUvpSsKQdYXkAHQysduoGFSmssFsnWKCre5XaP88e4w4Pw2N1V",
  "key36": "5mj1SqpxPNpvgqjMaW1yXSXdfNA9UzUkVLqn4Y72akLW3kAatwNVmsBvR4ssDz5HKTQo6GAs44gjuNDyqw7q6pPb",
  "key37": "2mh6eFpHgsAUkCGhTvk2TbX3ookL5LcHbaA6wVk55T8SbGFZLDJVSopVYfAxHW6Tx58fSgC6ommr96CEQfRAPLsw",
  "key38": "5NN1ttKeVZgNQZsJfNWCWZdL4pfRT8cwvS6sjk9aEK8uLiobarkphbiGjQL5GFfdv9PN9AtxAMFe2mFATGnfhMhn",
  "key39": "3546B6hyXQjAXzHrY4sD7iVfYoCsz4eSdcWhpuDEE6o4Tw3CXG8541hJfcahMFFEedtauVHf1j5CVX4qW9Aa1XmP",
  "key40": "3KhN23vciy7e4TT116rGH69cHuApdcZi8A27Uh7kKsr9vkiL78Z991RSwrGL2csATtJcbVFaDmdYWB8ogabF8vZ5"
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
