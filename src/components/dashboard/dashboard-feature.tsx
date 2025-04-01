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
    "546DgiQbcV9D3MoarbprPtmpoLT2GEPXncEGzJyCmVMiekKcCsjp8Abyqf4xMR7e9AZQZFFPjQt9RmHksbynaaP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MkZbQ9n2WrrT4WoiVY8UqCW7VaoU3hHsiNX535uCf13hpKbu1inicpgSSzGcqgStF2iMi9ZMLmokJhE72c4Gkbi",
  "key1": "3ctiQjvNCiZLbiHAiqMPdTUTzwQbZFdhfYZhpa9bmJ7EBTp7VcssryhvybpPQNjKpJtJWQW8m6mSp8LfHHNYeRbm",
  "key2": "3WyW726mUGWfXN2pYZPSN3nydYygSkno2fPW326fjsG7XZFYkwf5GFKzsadBE4XzBsvBM2YoHNsyF4mueYfKFshV",
  "key3": "31iKDUL2EB5FWxuthkYTxTt8aH8YGgbpAHndGfrgTig6vuxZG4eamdXG8rK6XJJsGDMD7756ddojtgNiNAbDwXYR",
  "key4": "3czaps377fdPJXaLSe1fopjrLF5aW6xw4miPaVysn1psVK74e8QJpixPdWkdxLKR9JETNs65tHU9mJNLAZvi1o8A",
  "key5": "1WexXW6f2RepNVahWghfk4t3hYnJfw3K54WdjWNxkD18EWMJFTDNt25tnn8FAoopPvHLt114gS1PaSjk8xuV4zB",
  "key6": "5nX4uGbMMKCbHGxsg7ugnFqm4w5Mt7AiqiSrfNvsGtQAYnQmJz28Rc4ViAqxXUPuBuZppbwmD5FnxUX8DoEXiqtd",
  "key7": "SaTbLX19oK7mooEGKnBU1pvC5jsq1foU4jjBubz5GQ8sKZ6Vv3bLKGpiRne98YFt6KPUxsneMDzs38Ho5PN73BE",
  "key8": "3ErQuNJNpR429w8sS8Kqvt6bXV4Bec9AaSc632CCS9WQv1W6SqdEwoQydhBVP661mdXZGeyvYuS71ZQkusHTjC8Z",
  "key9": "CuKyEugBVH1wMnBVnWSH4a7Zb7e4UPaW2ag6mUPACu4edPbBSwrqE3iwMkagbXYz5mi13atzeK5PzfrrHwEDefs",
  "key10": "3zxPk2ziFYewN39gyRbENecFSLdniSHwumyqwH8yXAUiAqKk31LzyeoVbq1a7RFWpydcvKkvs9HcBkVNBPwqrwDx",
  "key11": "2QePMf1P7nkQjNABJxDJ7HChuWPH3ZN3DuKqYp5coxxPb3KjD2GsYFwULMgzNCuxRg2MM3SuHdJGggdFi2amE95u",
  "key12": "54yFNxb7XbW6nYQW9HaEr6UoLvz1AmhKx5Lqu6EC4xC88y7tzW3oSVokmRdTPyGqwFXTQiSaKW5stufoQpceuDaE",
  "key13": "414f8utHykhyKD4fVeBa8LyyDo1b1buPaZJz5W9RkJyZQEaGR5dpaU1jWaHkqUvDr1C3ijPrMNQg8Ur8iXB5qPGs",
  "key14": "5YG4k52iH1StSGYBG5WofMYVr523PXmPtAxUPyns9bAb7vCNyEMqk4v7qTZMpG2FGYFFR5dfjvbeMHDLh6rya4Yd",
  "key15": "2sHozX2LW7ounWuDvxZwrxbz2zEi5e5HnekjuoKZyjteBUBptNnhzkjwX1sgFxUDcP2Z6deZRhfz9bgUAD8CTetG",
  "key16": "4wzbrEdpxzTvTs8cqMGtDR5Gwd8Sj2rcheqgw1Qr7R5uK2z3jWTUW8oTTdr6GKy4y3eYBt1mNKdsSiNb1Np4pYHR",
  "key17": "2ccuzpZrKfBX1ywqrKFZiFW2ri9MiFB1abAes9b8zUivL93GvAkDQtSaYd3EZgCnT6HdT4caHDmc5aRZZpDexZpv",
  "key18": "2S8KBR5ni2W7Cm55D7H15hQCaNF9hjKVAcUWsAshECB61MXpWvunUDwj2psgkMWS1PNHbXnYEmxKvL2njCFFFqeb",
  "key19": "4e15Gc4AbaRZMjjoBRRFGJgyBfADNp61PCytFdXJE4LMJCTTCMMU8Ew55QuiQiYoiyZaJ4eqiCWeJHiFb32u3gr",
  "key20": "Sz5Xi4SvBx4BzDZfE33oSphqEYNWGi8EPk56Yz2vjL33Xx4LxEDpJjiGc4ZtuPEdZ1mrDfgAtMWBH3Np6586Y3z",
  "key21": "2LpsEspJCdreWmn5n4kQDgMvzgGkMdoHPY18RARzqGvzuhNJq14br4Eawfg7PHoimnqYWEGkEEC9qofHVooBQKMb",
  "key22": "3P4w5R8BiwvqmCTbTaemFYaD8NLbhhojGDFzAy8bR39Ugd71Pb7r5DHNPS9uxCVauTsYpXoQFRFnFcgsmeFxHZQm",
  "key23": "PyHSBvu3AM6RGG9wKr7gV4PwKSLBW9eBzwFBLtyw3Xv1eM7DcYk8rrLynNzcFqKX8DBpC4mdh5ee6AyW2HrDckE",
  "key24": "4S1h2eY4Y3dypRQBLAi7MmZJL75TnJw8LRgeZka73ufU54TY88GZC5ebRTZQggxKrAuvTC8oeR3mTkuEFiC2RrLG",
  "key25": "5p5rbYxZcp6Yga36eV82iGTksuvP7LMM9LC9oMrzq8iLPoUQnsyH96tHkk3QbP13PRS3X3bV2MndW11CDgYcR6m3",
  "key26": "A3UponHMstAFfoJawCAt57LCTJdawkVXwJcwPWzZ2iG8L18xSAQFbZnjBtKjZUAED6Xc6kYAKPnZX8vKHqf4qvc",
  "key27": "4dz22M3kZWR1iqAv6R89sivcgAvUa6UEtY6r2Rj6Mqv9oxFAvvN9jkiSSfrGtWFiDa1VpG2C7g5hMhxGARi6mBDD",
  "key28": "FqnaQmQwU9KNn8kiYQndg6j91yro746dFUsKcLtr5RXZA3tuQbhsBUWTXc6wTJWkSTqGcb85nLBFMqu92ZbScf8",
  "key29": "4ANqfceG1HQWj4r7a3dMzsvXkUBSHkg9FaLBM1c58Nm4MSSpRd4rM1UTqojbXCRkNZGhVveAUz7EbQhWWRVrda1o",
  "key30": "5hug11suyAPinCH94b4MVXgyspXKaPb9kRcP5dZWMPxwWD5nnCGnBKZJT2oBr3JBSGETRGXgjn9MDqphzdffWq9v",
  "key31": "5oiR9mwrJGefUfKHx3EuRx5L5naMnJoA2hm7L2cCmnbsW1P2x4ghWkqPxo7M2eziHFnfndEacX6t1eTnWZ1Tv9ra",
  "key32": "4TvukKZJ3mz3Nqq4C5h9UNmRHzeBceEAFH2aaCiZr2FEBRyX5rSCW3CzPU8N9stt7aKcbGFmj9Sbq7mtVvgou2vC",
  "key33": "vJKYDy4LACVBbBdi4UEB4WQ5T6PUEu6qFsfjfwSRm4qQbH2AR9fqGrpLwrjWGtLqkwP4zRUPquLuXRULRz5iVJa",
  "key34": "37eiQf5oPaobv3zH94w8UKybivXvhLKUeGxoEQiSpD7xhukNk1NMw5RN64gpiec6bLMWttbyanYFfwJVRKscTgnY",
  "key35": "2hQ2MJW9zqZkmZhP4wvKw6kdsr1K3g4SiJegFC3Xsb2ikG5diFjL38LjLN7SpY1pa2zNDAnu2UfqbTsWbVsB2eer",
  "key36": "4RToLG8uxeHZL2yuLiv4RycQDVKydks1Dfw1V5XWWp5WM8jKQq9AepDjVVhzTEXTo63Cfr6z5jGgbMGyzpq6bHgS",
  "key37": "5dCHkrd6xePZQx3EYDpvfeDir1yBiedtQgmksvWgHQL59iRm5mzzCqVNg9EkNr1wSLJSmSD4n1proHnZt1Jtf5ZU",
  "key38": "3yWFe7faS9ZASoC1aj3GdnmLDjWx91gPCdSwhZcZkcMtQtVuYnGiDnAPuwuP2kT5w3zVcHSbKiwhNfvkGsPWiBe",
  "key39": "4fyht7oKPkTiKvHVuy1ry7EzY4h9kK9J97oHW3UQ4Q6ofkAz5gjYPYJEnKuEXMXBDhPkiE4muiUu3jSg83jwzV2W",
  "key40": "4d5YT4EGfGpiHsfXsqUmoWT6o8W6K5yrrnGvWXzhYAcYUGfU2iokFGsU8zUMjr4Ux9tyHWvMH54jJBndRmjfeS7Y",
  "key41": "2q5xYNFpBi2hQTNPq2ts7QurMASKs9PA4rpzhv2QgWHmRwgCaD1HdhxaLs8pDvFYnCtiT9nzFZKd6izb6oVSRyJj",
  "key42": "3383FhsuvpYy7nifeX3uRs81CzJp4PG6YxhRK1mLoKwLdCpdZGzkULDrgFMLRJJxTVuFtNjisKtqAyJpLegqAqP7"
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
