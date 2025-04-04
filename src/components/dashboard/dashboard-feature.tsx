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
    "5StgHnzBJRkbMM1zpoqe34SWso4s96Y1QtGuKQnsfM562nuvnRfdFK7arK8P4C7Rn89541xYmm5cxW9fBp1PDSRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uChXrXmxzxkm8xrWbvcLb8jmuHfHa9eDi5BGBZSLBzGNvQyER7CakDea9ff5KvKR9oDRMhtjd5mJkVM4fsUnD4E",
  "key1": "3USEoESR3mDd8emhL7gjgYsBY83yzRUfg7nPq8TavGQ785m1PXZfCePrS9QdLjrwcpLuSemn7YGKv3UwiMXuVt2z",
  "key2": "yXuhgPrRnprZMWHdN41piWQZxmZgDEMRc4jF8kAkfZ6SNo4AA3NSLNiWo2jTWewo8d5MH9y1N3D8DQfyfQK8vDb",
  "key3": "GX5u96BJd1xt5myCDMUHfAK1BP6ybhUdKr8K1J1ifY4PKzwZtrk8YL9VV5aWhq1EZetm2n6Ha8kqxUaiGaYvPWS",
  "key4": "3kx6XmGSnK2oNkEemFMzzvFnyLErHUFRvHCgssKEYvDy4kZcMeUQy2SyXDKw8cAtUVUjjpcBmBDA8Fhet2pMkDmX",
  "key5": "3EBhopVMp7i3ag7MAxXVPSm2yVjsS6se2zS1SnPowKhmYv3injHQ6JyKdcGfzfKndwkNELSnhyVyhcp9cPDciRCk",
  "key6": "NSigp4Pg8Sd46xEMBnrY76K89k2wEjNw3P99GJ2bRWueDmFh19TJ1GpygevvMjYq8PfGc8eg2c2RHkZjHrzmjKy",
  "key7": "4mMHnmFqeFEq27xUDydPsNkNGzsY65DC29camWSTv8ptpyWWtN61yvowdAJYEReVKkZaWLBfVV33vziyhADuYoLS",
  "key8": "5evfqu71SbgSNKH5MiTmWsKYod8mFuvVyBfoemTuYXEe9fyVwDEYACWyry6jXry79UxhG9ZADZdKtnR5HqwSgzry",
  "key9": "2eZB1gDu49X5QfKan1wjixPZsJ563hGqy73Kf6bLduKYWL6YK4L3MzNqoh6LtotFpQQSdB9geYvPWhzsEPS8qorm",
  "key10": "3dJsF1Q3vurRDAueyEGB8YbcjFFi2JVX7DnmuoDuhG6JtJn1eFyAgVCnXXpRftgTx4U5wNbWZyRbZopyHacdziSB",
  "key11": "5Vj8JaT6JRFDcpgGenWgGkdxtpoLupenYLth24u8QsP9CxGShbDdK9ehcJye8fMVss5V8zsamHfn9FvR4NSV6JhW",
  "key12": "5RA41yKffJxMJBLSavN2NgzAqydfdHHT48sQ1yQ4hoSpLENjGcAUMqzCU6Hyhtt5aKhPvyyaABw2SmVjpBWJRGeu",
  "key13": "ASTapsrJkwPwH8csbDLL1n43SDz4QaoB5uVCYv16w5Hvy82JWPRU9pFdvniPU5uu7NWxfNp4aysxD4gbDUP5bQP",
  "key14": "4vb5NhE8rTgYNLb6mXPmj2WY94eUqkVDRSGRog7BHas1sV7eHB7WpjtxVrQ4PqoP1KjGrdVzV17yYqSbExW9Qyfp",
  "key15": "3JstK2PRwEaYwMFDBsawq2NbgRjrzmXcyT6vfTtmASqNDnhsZHU5tV5H4moMT7MY8mj6BfVKNENTc8Fyttg6JEDn",
  "key16": "ec7NjqgrjQVCHX4ZbwDQNN4uigBkh8dJhsGWhyWvPkLCzXdSp98tHVopUNhMoEcCFzcajNTaaXW2Sm3e6ACmhPA",
  "key17": "bPjo9WqdtGw5dsQKAVi3TToQNW38DZz41kEUY681CDkcK2snnFFKxDbesAEEio6ydBjXupSDUMAxwruPnQ4xAsr",
  "key18": "2GNvp9kFJKsrGMH13FXRE1eUVq1VqDxJC1cqQxzNCJQyinp5PfzJZL42W66NiHGrMJndewnHbeTNBe3LGpSVFjDT",
  "key19": "2zdAVH4zruSdypdAtkKGefv2x968a16rAXJhn4YGzgLqspV3gvHQvHShmKirQU2DVxkkkFhzhjFD8Hu1dGN7UQ3",
  "key20": "3RAy6SRRVzJyb2mBxNbFE1asxy9u7n585kaybdFiUZ5DzKNwXEoAqY4Fn9vAMbwZ1awdFmUy6A5PdVUDk13fm5A7",
  "key21": "4BaFjVVfFDvWoMSzqbQiRxB15KHi8vt8M38BhgZmgDKCm9hy85upbmFBgynX446zBuqwi2E1fhcPMYTPStAW7DCB",
  "key22": "5bG2gwBE9gsDui8XX1FyDyjcS8ZGFqWrdw1eLfEaTgTyfYaeJoXEwPp33sZvqbomzpbpcnNcrgFQYjMH2sefzruo",
  "key23": "5aZZ9A3DCum9AKjmYnGdcGJ8tGDhHzop4vQt71y2ZtmZ5fJg6SqitSD5Ua8qQZbeSvzRHiSm2MMdyNH1ZetMWDB3",
  "key24": "4DGEVwndsxQxGMaGzYiVbvV6RxS5qKotzqsvaqm4jTLsAwhcxq1TR792SeBuXoZd8wB7bxB15NaZdkNCwmW58AJP",
  "key25": "4wmHvyUeoVrnHvswvjsB43cacj95piSvMB6hjR6h67DaT78bDZs7e7D6mhTrk5xvZ4SSB77wtvaCsTeAmFdizrMj",
  "key26": "5cXXUEc3SP7RpznnFjGmt1hBqvrtSiWW83JsxcKxB9s4DEogRuWNRbR2Eb6aLgBGVKkzEFKixYVrmyubnn1pKDhx",
  "key27": "nGc5Kj2oV95J5Hv42R6DAjJrTB9md4xrA6tJsxkb7Xi9Eccwo8xKrGGTFe989frLMyUDDeAysve3s92z2NTC7q9",
  "key28": "49bg2QhZ9bV11eKmx8GPbz6499YCHYMYXggCZcgNPzbs1EuwoAFYPdaTcCgALnD5iJS6SMMFcgYejBGGryH85fbR",
  "key29": "PamKeBebBx8MJMPoamtyBSFFbUjnsxjFpDGUyoxTVdVLv1TPUh98yZkCkAZ2z8H417FHohFrTgC9juiZtRxmXg8",
  "key30": "2EFxYoaQhTTH1aMAFt8nbNRkhZhD4rcsJmLMjFzUsUmZSnJecPcQUvSpPpHfjGPTT1ancuEwzR4cGNJeB5BBNZAf",
  "key31": "2SEoGokf9BUnkcx1FubZXcf8nSw9t62L2tgStkavo5cKesQjLuX336bsJSmv3RTSnhu6sViFZwWyYsmpjdQkwx8j",
  "key32": "2khqVuku5eSskUyGBnPqhGBb1kEBBSWMr5WVxKvDDm6LsJpRAW3duc4A8FbqEkFNBewfey3wVa8b7rCtVyXgWmei",
  "key33": "3H6sNQpw4hR8PYLyQ6anu3DhAmSvjokXFE1RYciWqLk8jb77YTf1CtHzbky37kYatUzQagdxoz5AS1cYm94AW2xH",
  "key34": "4hLP6L7TqzWpRz7mGYLzWHZKSmXCSP27rcWko332xA4aYmcd8aWRfdCYzWgbZ6Vcf9Xwpg1wcv4WH2jJGbekbEep",
  "key35": "yM5FMTXEZK6MSoiaxLuv7yf8XDimgFzoCdwbuWdah3XVhdBHd3bGvwiqkQ2irpqeULgwEUEfLBF11SX8zv5QdGZ",
  "key36": "4HWYqQE2BAEUDz3v2yHRJtSZrA7dgMFwzUcDn39Mk2Q3JUob5bor5VLiktu9x9mBuPaZsGavaMSFmE74DfBv61Xq",
  "key37": "4XbMijZD7vwRpEfSia7DFSQNmYAPkAAkoyKa97Y1DLtEh5jFyDaCua5WS4h4ap2ktU45g3R4BMyuAMs3fEhbEZq2",
  "key38": "5smfxgDm3wDbTVstwmuTLscxt56HdeRfRxajgHRTG4Y9eKc1d9CZFfZKoNNE5Xjws3eT8MnQFoYK9DfFKqRWapWt",
  "key39": "SRA6THb6C3mTX3HwHy9JWDS5nTsTmakwDrx6dAqiXbBNvUogcW3cEt4q4BNY7UxcG9ayzbd5QdoHEqXhVYhJTMG",
  "key40": "3hpRCAFoSPLWjawniwaLZyztHAR6KwddpFtUPXfK1RfSYpBbUiTeWVkwpZiKv2yeGbpmAz2Qvv2GxML8GhZUX1XY",
  "key41": "3RP3DZEYtgkNrPK1YeMGfqZBjdFVXRR6nimsXPN6WDqQugADm7TUXmVcXqXHWEuWVM34SWGy6Ta7K7tBFu6duQ8c",
  "key42": "hoL3FUCrboSouUEg7T2QrDtQmGBLPtUHumKjy4BfUY1fD3kHkr2fxXGhYZpbkoJAW21KxBK48L1kZPqyvgG19S5",
  "key43": "46A3r8vKLyNx7EWE2Tg42c4ZFNeRzbDP2vQog1mR3VKMv6858XxAYg8HfLQAhmGjrh6U3b96UYi6zeuHn91FKg5m",
  "key44": "2us2mTjxGhtSgi9y9dM3zh3kMjmuWxExG5SE4K57pen38DG5MzPDxxGuDgWQCdp77wpWCF5eyMN1RcASXkRs6W4P",
  "key45": "2x239TnaMtzoKmdcW3mCfE7dZgWJpDWEGGd1Kk2e1t2464MQBmbzfHrG6EERknfNB92E6x4vqs7x27cFULJwVT5X",
  "key46": "51SkuKBd36AbDyT51BDYNzaKLtaPmsJJv34EFWySACoaGLM6DUkw4hBhwNw61Q8AXyCiDYCehVTGNjMLBwdC3nST",
  "key47": "49RTvsCqGbpcjL6hmZKGAqpZoKySqdXjktYABrad2RDnFVn5Vj4FF5ouZ61AsdFgkhC7H2GxxQ355158osQ1n4L8",
  "key48": "2Q546zP7un1zpsAVfMf9LaxLr6tU8gnYsWxzrZrd4ruAdemQRrGNGbtkWqu3p6p28yGjz9eUPiNgrRqYQrA7SxKW",
  "key49": "4NVhpNihL2MLbTda6dQHCLidYmXYHpRHB38JAyVm9jdeETsN6WUHLYMPrSLUSPkXmNVXEhGCmLknRJEiQTceLSjS"
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
