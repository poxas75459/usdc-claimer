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
    "29QmBzJ1Zn9JFs3ny83c7bRfUyiGQXdaX1kTNDC8hUEy3CkR8JTn6JSymD1brkvkeoaN5EisLwGEVUdrxEfUrKpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yo9xoN7bGTLXNQm318LgWnx7WTdxmeF5fDymBLWkjpdHVwc7bUQxEtYy93ucmddXotTCLMjqELvKKY1aRwFUfVU",
  "key1": "2FrZVhLm4v6Gyq95GhU5fQuG893WzjULPa1BCWrXxUsoBoFBW6V5kyXQmLGgPKzutRPibKKc7rj85uwBhgBy6mw1",
  "key2": "M2JuSxjimjEdVaxMfG3ebdBwJuDqRRZJh5UVb3VuUjLmZRTDRioN7xZcWNZZS6CWkA7YUHSxbUNec4fN9KCnEv5",
  "key3": "2pGzV8qFMbe1ypkeDusNomCDy7yvoR4UNtU9yQ5whrUxHQmgXJ7FEeLFyYxkxXQCcuPpoGQ8sxGYVXCaeg3B6gLd",
  "key4": "5xMqpzsnx4u4orSEdds92uczJXvS3YrBmsrmsgu7x5Bz1FL2K1uoKEwuvTqy4T52izBRN5qxzFLnm9kdhFd7Loja",
  "key5": "4imgYSsdmnUk7wc3EPCdFmjbFNr6zQmEcDRgSY75D9m9bSvDCHucbcvDNJufssHYRa2LWLiUkAULY7zDigC2m9Pi",
  "key6": "2hUDxUx7S6uY5XEekSxyHxHuovPadNoMgK55HU41NgLzt4PjgRDGMREXxs1wC9pNSdVYhMPpukj6WU6F4wASqREs",
  "key7": "kvihdgV9oebu7aSJ5p6NH1xcJaEexxQuzm2QbZJ5NaBE2jiAjCMgy7Bgr5nkWarTNQ43bS7fhRyWoyCkipqqNQh",
  "key8": "5t1yAta6PSKMCq2VmcXKg8XtardsHBuPGoTcBZ7U7U1agVeVRWvvo9hjnAhSwBVFRH2v7U3zYPMvPam3zSVpQik7",
  "key9": "3JUHv1LYQjaC3raoGb5n6wd8Egjibk28oK5JYa7BvB6AemEA8VbhfsvHxJAPtmUHD1DzAM7hTTPqzLkGokg6bNJU",
  "key10": "3hRACW7XgnuhbWRcGpHXkJusywk8HjNPyiztwBHafRvpYaew7Xh7Fbxdwx2ktEmyNUak8X1BM4hH3o2NsLNPE6d6",
  "key11": "42JJZ5eLxQSF1JHgteWZzcYejzd7jGNRrkWSZwSKCXEtxdkatCWfoL94riQLKGuKxA7ZgpKPJMaF2UkLxUJsrTTy",
  "key12": "3wEBYTQzQLej3Wu9sRxMi1NhP4vFtMr54c5wmYK68T5jdzzqQqZ4d2B6rqFGY62MYLyqUVtXDoCW2wRuijkCjNKq",
  "key13": "be9MSPwweBreEJJU8qbWeSSAU6Q87RrmeJ3pPZA2qP2o9NBhXzhmUvWXr8Z8WQsnHKxoC3hMiG8TUB3QprNRHK7",
  "key14": "3Ym8pudFbMYHdWyME42VTGigqaH8EvP4Xz2JdxiGKcDFE1P2kQEdSR5dC7vtyxPimstG54n5GthjF4Msz8ktsamY",
  "key15": "4HzPFrebFJBLXu7znvWHURye9eNan6sXidRwT445Rc4KtCVCSQQqUvZy7xQCWUxjVMq41ycGvaByV8VCTdtN9L72",
  "key16": "26awpWeoospxKprim23pEzRajdbnv7pVZhjHG3i5HohvQViZiDNkhbgtaAL1EekVAo2rKHVzZ41CfBPVwwnUcdtp",
  "key17": "4dENSgLYtk8CuCP8LqnXNF3iAndVgT6WyLaofEW48RZx2ixsvTMeP8X6568irDaeas5CidaqtzhEupBUf1QsEmUL",
  "key18": "4GS9M5NCEWWZgCkkmkmz1jWR2DYmYezD3dA8zB8J531qY1nRuNcDM1sWLEJE8hkLCneswjifGuoiXFufZZGWVmrx",
  "key19": "2esFDzfUYpjAfb18Z4sQc43D7mFyzcfxJCbUCWEGxQ5hNQ9oStPE49KVMr4gnW1YyfNBz5Hsg3Q9VBmTzhgDc7jw",
  "key20": "ouzDzAfp55Q5ABiiYKoUHRbeg7tVuddwTYgtQjoQqWc1yBpzoSjrGiNhzgravikWYXXwzr8VyPfnyC7qSTGnA6p",
  "key21": "3WjHaN4kuSjxCFBFKpXuN65QRwrxT5ieMjeQEG2DRNBxJQZGB8op1NdpqpYkxDf9YSCtksptZPtviZAUeXMqn6Y3",
  "key22": "1urdsXMNYuokSHxSaXfy7aFTgCmKRV6cHC3Y3Dxn6aSaEip3Ndx3TGU52ykMv1X5aepAgHvtw3NWamqxRCAhCWV",
  "key23": "3mWcdt7YECtASDZCT7TRNSDnPgx6d1WdLMAeLNK499q3F7KaL7ozVukkgSuDds8ihsbixGggSrjgB4VwRAx1c8tY",
  "key24": "42uM4ukrkofg52UQjPyR7Bqfe3KXAwgkMZ2v114kXyprTj341PDFLMoB3gbZS9xvLEpmVfmdiwv8jX6F2KYyarVz",
  "key25": "hzGNPCSaqfQUHMMk84WTnSAdnhoGvGmu5QaBeuTVs4rs6kezxPQVk3NeE6YhBM9yDQMke6ZyrMnmiLVkLuv59MJ",
  "key26": "5cGE9prgAaNw9sYjZCMXvVH8CGp9aF718jJfJENTdAQr5LVXD7HeEfAnfHYQrbZNPKKUy4ZPcT883iFu6qYprJkT",
  "key27": "2wXeHtrzVyVkYWJULharey1B6VeuDqM8RqADqfJ78gpPbFHHcNSB5jdBrojRYVUuBaBCdAVbRkhJmDAMHpGPhKa8",
  "key28": "3ApkLeMPbanRvUZnGqeesNBNRc8AvirBkA7erEmZaBzFtB4qbUZAqeF5zKed89JH8s8Aa6fvQJY21kaeTTNXBnLS",
  "key29": "eSp4wmzW5VgxxQFTo379LyZHZ6cfvRHFpPZ2FUPxfpjSNvBjWi4xbY6AKQtpZL4baW8mukVYVMEnkJAsutNot8C",
  "key30": "66e1V7A3ZLZVRjGu2mmz4rk6JeRiTyBd44EiRA9Q5qnUREe4VoPYb49D6njnToiBhkaM4AB3eEuqjdppR1RwzycG",
  "key31": "5qMfuZahVqdLH9HXNEac9vL5sCXVh1LFLTrRqDVFL6mZrAVMfHFoNKv3ndWqGMw59dLZmhG13CoxJF48J88XZFPc",
  "key32": "5Vwn157DVk9Ks1F9tCuohWYzJdvbd8vVpU1bjzide7dLEVBfgyPqBTFNniyRefLkfRBXE1DyVDq2MGaVDk8FRFH7",
  "key33": "3UW5QXF9x8ZH3ZSxJYu2vBwy4ZCWkqS9W6TfZjXzLC7hKS9QH5LQDzTDbjQpw6nYyetMpyA7FvtHgE39up3JS8DH",
  "key34": "drgd5t2rLEkjG4EEfGaVHH5yg6c3WgYXxZdj8YenSWYjKUafzXwHCZJ3EwuW7Y2QpTqiha8SdTAYKG2pSbVDRmW",
  "key35": "2J4qGDA6WCqKshw2oLENY6EpwP3apWeq2raP43SPbn8iQaoyRcndcVQyojP37cx38vTmRPb5gDbUQrpRGXMM9Kzm",
  "key36": "2Thww1n1qQ7y64w8YTL1tvXCE2fGG27RuRWPWdZinbMuxGZRRCX4tfxN52Dr7fP7JNzUxKtsFqDxanEwV61LQfmZ",
  "key37": "2qDgrMdime6GdSjpZkDzWFMmbMVkQFjGxPEtMfGxfhG7zZwsjkVTLc9SEPdVJxcrX7ct4gPB7GrvSrBVmFwmFP7g",
  "key38": "2opR7BGm1uFiMnwQrHgvfJvSvtmb6XiVwu6wpJGPHmWXbSZNCMXFUx8iJwqvz6WxieWKDuTLFQiCWCwfx3hXDAsR",
  "key39": "4TKnT51ad7SZfRUTfpNZUz18sxPy4LyRNDGoDzRLGCfeMvGUj4qk3m14Tktg1Vx6vSYpqXinMPJnQTUUU5nLLoN8",
  "key40": "24TdGm3S61DdcgfygvdEkFCAuNRZMj5GUd3bEC7G9s4Q5o5pdsgoHN1rueioPhecbcpmuMRJ2YbffnKCoML1mA2Y",
  "key41": "2wVUK7We83kGrkaKrWex6vg5N4EJPnmQmacyq5SceXvNwhLFwe3xFxExzJjkejJeGBF4Wcc2ZdYMynmjQMyhTnxg",
  "key42": "2bdyL8c9P3ZZtfgNvdwWkEbsHYVGyvGdixoeCCPKiz8Mw5n8Q93eYKdoipzh9fTAA7rNCPo1PiWBPUikF6bMBRVf",
  "key43": "4MZFC26KbGUphHNXu7J7LMdnUJDro3sTSgKhmgdo63CAXs7EazDE5bt8yKg5eeL7pmpNCGEz1PRS3QjpvdgDCHwL",
  "key44": "4HKY65xdR8kZ9ZJZnujCy28hM9CegkkPAL8z1RXfx1fTSA7NEuB84xXBuA1jtK6HmUmoJZxPJqGm3AJxErm2xzBi"
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
