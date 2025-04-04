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
    "5SzipisTGffdCdVG7u3EYtVAt5rw8tTraiQxUxoBsyCv22NU1jQPynxzFtqi5dt2jqZNgABiyztRCLN9gKVjQFgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32L7UX4J98GLahd8hZ4dVWFDsTp5yLtoJjb9SpMoE7hKLU14fYvTRLNrxxfrgp7WJ6VyL1aiji6bRF3fAoU3KtyQ",
  "key1": "fsK2QwM2oAZeWLGx5BfBazthAxuqa6TPwhNwNGSPkdB8dicQeXdR4tvxEbEGirui16q79j3thhrSEdtcpTThvim",
  "key2": "4sqeAoYR1kqUZGqfZ6jF1YJ6w8BqtgUy4YnGeusKcqCRM8PCkr2XEoCaYFRBWuchVFQhHD5GqAwMWVk8WrQHtcaJ",
  "key3": "5MTEHHNPb7RoQrL6BXbJWDM4uenxNRH9pWLUnL3sDYzcW3vbY8GpffnuwgNX1qY85bzE4ZY3koS8TUveH5T9qE7",
  "key4": "5uKtqRbW9tS1MWVa76Dj8MAtwatdgegrfZvVbdv1zUtMjYfx2miLY4dddjqwMd56qQwzqY1JfJcPQbVyLbpx9Lmb",
  "key5": "6iyGsH5E8KfstGhaUNSz8Ck5gRx1VSBgvtguVCtGfTNeRoxT75CSidGYADvXihTkyuVJiS8AGxuvLw1H6TzSB9t",
  "key6": "nXKpvFdRbe6Muoj8w5Mo5mtvJstur4FJN2XDFhTsNuBoTGwd6peq5Sy6QbWkXi7FcvC2toD8JciFNCLSHoD7fLS",
  "key7": "VK7bpGqFsEP6UuVPitn88tYPrg1uUEMEKXDdF23hYJsNegrbRhiEFAr48HAcWj9Ah3GAZSJ3NUJJYVr4SVYEynE",
  "key8": "24P7cQRpEatRtVStyWzu9n9eDqVF3rVLn7XdrAunzKZkHkc1retGCZZ8DJtDxHRgqoZPCXmCEKo5oWGVS8stDFrH",
  "key9": "5jiG8as4JhyLgYEKToYbx2gTm8UhgFZSWGzoTSusCSdttmD5LLSRQvy7b4RaUtZD9qPyDATcj8TNBBc47RkwgLgN",
  "key10": "2bv5EkPjJ9EECbg96sakvymu4AazgNtBmAUQZKrfPMTaus1K8D7zpK6pLuv3E6q9PVG4dtD2kVsX4rJrucLQcrDV",
  "key11": "4uqzkv6bvNX5rFXz2NPCazkiCZMV3frHH48zexopinJvnENGAxa27Dn56wVkTJyavvNfwr5ZPf7q8VajqHyBwZAf",
  "key12": "4tWcH2oWjaNhGX6TTwkusMc1jwd9GPy9mEkndL1wzBK5sMd6Zq38SypMnNNo7MHigxGET1nMmC6sPmxcevpFQ3Wz",
  "key13": "4Ywz5YPZ8S2fGQvuCmQgbvoAUCYsqktXVg8vMi9QYb2h8HDCrv1NfoeVE2GAkaHAUPcu9GUfggyLRGKaEDAmpe6J",
  "key14": "45aeCYhBxgdeDSpwKXJXH4AhZjjuWTo72uy1M8t9z94P2eKYF9qrTi7ZA4Q2pbr7QXQyo6qe38Bkoi5UGsGP5HY",
  "key15": "2MtzgSN2dmFeTLSkiv9WPgM95jaGt51Ls1end5qpYDHXx6XmdG6pxTLat2L7s7VLALTfvFyySbjRKQzHiTAEGNZj",
  "key16": "5R1nFqNoyBecGDVNH6fB3EgCy4Jg2yRoBfuJNQSYU9rkf8Fk9dAEyMmQg8ztSaoHoqE3gnx16fd4YvaNUtAaDNJX",
  "key17": "2rcC7E6iw2eQBfEBZiJ4xNbJmcKNNTudA6x6ThjC8b1jfsUe6io2PaPQiLEj8j5XHydZ9aTW9RH4HheHPtLhGRj1",
  "key18": "2FS5ECtdoEBoWg31wZQG5KkjEAPsCd3XhbugiSq6QM4Vg2N8LRPDjbvHYUuubeerrby9kbxzyAFwnJw8MLa7oj27",
  "key19": "4tbG7ZhfXK2MdLGZtbgr6GU5TzEsjfDL9C4mMQpurorsT4tFGYKTfvKhubQHsxQeKKXv8BYPUTdsr8u4J5N5CfAr",
  "key20": "5kMLsVMDH8Z5w3Du5uUXD7wqDo6ciQWEy8W1dabxgfKZHctjpr8bihsL2wP7ScwnSoPvEePC6Bn6xF53Hx2WxFCj",
  "key21": "2dH8i5tQxnVViBCmyby3yN92nBRAw7FS85g8QSEvsZRT4JQ2m89rnjjzACFUBD5D3toewsmWnUpqaNx2ADDyZfm",
  "key22": "5NH2dUxKegU1UVf2bX54kdc59BVfTbZctiqfdMA6yfKr3Np88UYrzm1b2GGs1VReuegFnL8eFG4QPEtabfAXzU3p",
  "key23": "2oww2T1mv93hRz6gMk1prgEKWYyDNRhRZJWaeTrxiVmqBHT4QE6vonsmA7hMUzuXKzsbhSUxSfqB5boX7oPkuLcJ",
  "key24": "5Y6NDe32XkrxtMsXfrQNRnGPxRGSFz7Q1aY1wrwtsYCnpgDKjvo2hpaHn1qoAZLyCYRxzmU3dP9NN4sPYwwjZrky",
  "key25": "4L22xRWu8rFfTq8bEH6ETuXLShYFB1UUfTvamMPW3MXLdfQridyPYKP1E6zbiXEqiSbeRiiqumLKPQh6d6GrneB7",
  "key26": "2kz1tv3XwwCSr3s1iPPHBAtCgjVenP7RsNwgBSfe32vjdRfKF5iExBgWQHUoSFKwKTqPKXmebe9bF846qo2i6qGt",
  "key27": "3AJY65rt7E3TndUSK74hZkGWvAcNrM29Lke8ph8pUxCiM4Z1gh4MWFFLoNaTtiAmRnPbJnMiFaQY8Mv8v2TaMuc2",
  "key28": "axtJnYgxPJWd8GaUDy3K6ggz7bLyDrDQf7yZRMvoL8EP1Y1nEmHLgFDDRrUoWQb2J2AkCTStTK72ekxCQ6dsvLt",
  "key29": "5wT6AjQ6TVBf7a9ZUvnm1QUnzGXbN3Ah21FqCxDDw7tZ9GmWiNzt7F9qeTab6i5BZ7924VHcyShz46VrkgSBVVsw",
  "key30": "2UhW283DLb3jQ24XdhjZa68iT3tKDmW8fMawgzX22M3SXD5icBtfUyjxvPbez9JtFASRjVv5XtubydvHGkZh3qjm",
  "key31": "2N8bgaoTy5YHBrhRt7Mq6x6TemeV5JAhso1frxxr9FC8kiDcU8RY48LG7yEDeRuuUHuvCm9kgKWHYi77hYTHG9wx",
  "key32": "5XBsuaJmbpWSDiTL2VswMmLy6EUJyvgeWvQYt9pb2nGrmMHaLtgsr6MpjCJPFBpAv5yzzK15yBn2NLBkUg4f2BCd",
  "key33": "3B7cjFHkGDzZKD9DVg17DmHLq8TweWzFif2x3fXCTE26AxJsy3MvVayBY5P9eahMmZvfhdQubisYWPhRSAsMAbFG",
  "key34": "NRdjSLmRg54yqsRorm1ooh7FMQ4LGEt4AeSWNMLrFaqQnGJQyzRi6irjzQvTY34oSJShP6b5W2h3cAyx5c8g18y",
  "key35": "29xVNJe6B5kQDvpytjyuYthKHbsmMJukcDM8CbkePm2YFFA4oE93CwvQKqTgRNrPZnzFDhbQwRfZcRyV5bpHXtHS",
  "key36": "3FBBC5DYEqAfsZYW1SrEsKa59JG7cLNDyGi7MvuJUH1SsJD5pR7ZSbG7ZzfjBpmiYpdXHt5RHGvaL256LiuTLio2",
  "key37": "3Uvh3GnaWzQHq4oyJXnfq43DPqz6LFhGwNtHLbaZv6zBEw99SBnNJ5Qsx28xAf8uhiEsV3SF74BMZC8h6Jnwn9su",
  "key38": "2SbTTTbsfhe79LwE6m5BVnhmXWkDtcSMZWNXTC4BAhfQ7mxV46m8gFcbHBjekBaB6aVUsdf5A3dX1AJeeZ4oFtRH",
  "key39": "F2GMT5dmAiL9FGfyZ3FTxCPt6UbL25v1eJBR5fYS3cuWwmVxuaqSHeTJ6NMrA6cA7G3MSCkScZYvLeUdkapsnAQ",
  "key40": "3odnzLHS1WDXr21eqAdg8LN9Nh5NViR8jzmv41YDhvrn6KtGwEGDGFAVor1WovYbQCaMKKadPu1bHcdqgp6uoky9",
  "key41": "uc7Gb4qaS4ALvJnAD31sx5m47fdf5SSCsziwKVUeGQYh2KRnggtBk7pRoA1vjFtXVemLRBTQqGgzgbyCyNt4Sd7",
  "key42": "2ZvwGbpZYDa9HBumQCLmcS8oJbwm1UWdkTHnNG7JVrKfEKRj6aiBDaSGnUQKoH1JeuDbHCiqXzdVD5qqfxTgx65r",
  "key43": "UvL5j29j78FJc3mm5VemxTwwQzD4KLmnRaGbvtnw3J24TmmegHp1QSyEvXD2jZPr5EFydDmEKueVq5igMLsiEx3",
  "key44": "3snKnAaRJjVfkZkVGS8XYJRMf19FNE1uh1TU8RGZBT7WACXkjQSQEAgVefFaVS28WxZTi4jjVn6diF4nNR8DfMNB",
  "key45": "5fRoEXcbdMDVMxoh7Mma1Qp6FbAAyTPzp3JdLnULE1j4VVrYPCsuZQdC48sVXWBtpAx2jLbuDw6xn4j44YJW3DqU",
  "key46": "2nEpzi5nKsFkzhCsKwnzmEan1ugNUkL9AfBgKNkUJDL2sFf4XFb6KwvzD3ddTZrMWC6c5p1nsNi5ysG1SZhoBnRS",
  "key47": "5NtYNKfrporXRGzAKrZAgfjckMfyMfZ5wfnfaUGsPxBZfgruLPvLVPEPuEVvBdN9xvT218bNzPhoEQZD8hmGGort"
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
