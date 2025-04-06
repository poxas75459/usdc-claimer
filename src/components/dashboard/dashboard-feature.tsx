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
    "37iR9KQZCABmrKyov3N6Kkhe5GoGqUyp67RxNAeEk2FT3vxqY9oLbBfjHGh1XEgLa74Hi73ZVyjBhJk8ECNNioXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V3p5iDHafWrh95Rc93Ur2R9oCdwDxekVnnGn4ZPQAdALzMnEURTWwH3NDGXfzfdLwUr2k777CSFQyckJ3yNy7oS",
  "key1": "5s8bcGHREHKZjci32QJYbRLsBrzyV1jrRjtrFpNhGRmKj98iLptEPzEFBL2aYMwQ2xPSrXiMeb5x2DQKqL44mPCa",
  "key2": "5YQjcT37kGivKJ3rTcpXyEWnTnqnYbEnUnnugsyBpwnEeDUZjhrS9cNTXCxFLVb49cxwcSg5RwTKGKr1uxsaLmFT",
  "key3": "2iWw74NFYfuuHEGV2YxLAEr9eZsKJHw1JAqjcfqsF7t9tSwi5JQdTKp83Yriq3w1M8sed1SBdz8ypQW6V8TY3nvd",
  "key4": "4hrqjZkeXxuRX2dBQsF4EXQ5w2FbdcVpFc5PBHdxamJJ2DLvHbEPkQvuKRdxdywVVuDEVdHrUVkv4yQy8mRBNHSi",
  "key5": "4BWYHFZk42nxhzQW1E6j6doxHdamnHs1LTtriX5pMPnTHLrj4Vn56zD9TaKQpkM5jRdG8fr4yTTGgQryy5n2BerA",
  "key6": "4JBcGrmdD41uGLXg44ztERZ9svK2Zh8Q25zTQmukVyVvv5jZc4eGBVYMq3bjLviforaFNbbmYw7HfVB4sLcpVtXc",
  "key7": "4eta3wwsrqgpUZKvS3txCF48jLu9GvFcDYepFhTq89JAKNzY4syeXKhaHzaK57z2zMsQR7XNtz689zSYLq13daL3",
  "key8": "3tu5A1Rr8YXymeE1SESj9BWtsqBqQoCQ3nB3vhsHNLR1ctBB4XpZjanQPw6Zs2sC4fZWB8kLt9LjttqF1GHxEqHF",
  "key9": "5DdkxsDzw3yhoSfmkskuZweqMZGEfcqceAUDGqFTrG1UtxmDYXzdhmxtafhkacxFRWoF72XidsQmqcqui5ZWP7H1",
  "key10": "5AAvZG3U8WRSzwGHS3FJUovHAmpA6NV94iyzvK82a1f3h4SHagcbU72BR4uXw9DwsEPK1WNqqivHiXjovPiQEkFX",
  "key11": "Gb5MkrxsxMVXp9LD9emg6F5aYwBzxtnmgbwZyRuA9arFcMdqZVukmiSHUT5vztptnoTbLRwSXoLeUDA3pyqgu7T",
  "key12": "4Y8tutLmDiT816Gx3sQvJED86aPgkdQoH6tvKBegnB9jRnWYZ8w5hMKm4BXDPPTd3zczdEEnzFCKXwzWp5c8UUjZ",
  "key13": "3TXqyqNZSdfRd9GLRwLY8WzhzAF2MSS9U67DXR6sthrUGT2MNUJjmcnywLfYs1XjDLMHzvRFeDBhtJ8zinS1Bp3f",
  "key14": "3neBoQwegGMcrS6xTsZnA4xVsnSHtqY16QUtdf4c6ggwE7e8bwV16E3UaVafR6YFJdZ4vEdPCy6JQfdbiePeiqu6",
  "key15": "3rdX3vRkFLXT1MABhjg3rVTawfKeNcT7KJFV9bWa8SywqzPYEeeKzRxABqpYWC3N9xUGQrrpZ24ejcrxBHsFQGkX",
  "key16": "3q22srBzSnPqKiWzhaBjTTN2QZniufXp3zNn9qzyL82mRkW1ydUjpuStbvS5HQXhLrPwVVHUKK3e5ipsSAFy7Na1",
  "key17": "2JPm5ToukktrtkfogKg1q7S2FmeFqPguKRjuxFhiLnReE9L3kZ9kScrtdEjeDgGseZTj6A4vcUhhHYsoVwqDfmEC",
  "key18": "4g6EahwzajXPQm2xX95Pu8USXBHpzDneJXhZoLiehdRJcK9bqzBx7Kx53bmBVojZ965Pm7rqL35KtfHWbQRYiAY7",
  "key19": "4vcuQx9yaFxUb8YUiUvapnPipy2xyNRGbNcv7oJbrihLkmFfWbKo46vUVsRYTdWSHnM5rwzSDScrfxQE4in4Ju7m",
  "key20": "bZADQzAyqRB7FzjLcq58mw6ZqSFqbp77UBAoT6zd3v3bdzXSKoSjQu5MuqUF65jdRR6H1vRey8VywjL5XjFirfs",
  "key21": "46o8rFhbszJgtKFnF5Zq4ycPUs5j7oBjVuSjyRqXvoubBbKstanhEjhCugEYsmLLkWYJYbPVj5S5bX8PDUffCoPn",
  "key22": "3Di3Hb7pxvo54SpYenSnY5w7t6gCvzk55bEFXL1onsj2jC2eWhCHjrRo43Rzxx7gV6LoTuuR55jdZAibu9Mreuev",
  "key23": "5u75Z2YE2PLpEUnKXEcXTYPHa2SJceoHzgoNoascbMXJ9EhKxs2Mzeu6EosYiz2tfBmS3QkUia2R2hpPNGZTehFa",
  "key24": "3XTY7NTYVw1XTXjHgg7EWE3HszTMpEh7AqCgPV5aGx9Rqw3PvULWtWsgLvisggxhXZd5knW8PzXX2fzXzH7DaAZd",
  "key25": "2uUkeYRZ3JEUoaT4dQiEHgCvpJqerKjh4oTYkU25RdCekZTDXm5LDiofSs31TzJNtJWCMS6TK13ZGwcRttrTVB7G",
  "key26": "31UbJCByfQ3Srq5CaaPCyv7u4s2bxNQaKdNgX1VjRCLY2Jwn41ckZfnEEWJSyFYCBUbM4YaQv61VNmW7AemJdU7h",
  "key27": "4pLyfSXAXhNoVEvnxRhHcjECctUbKMsy3zrmWyDJWo2ASUCVYmUYGMFpzM49jH6JrAEBozDG8Q2rLh7S7ndbDrfW",
  "key28": "5QVSbhRhmwwCUJVqicKHoaj6R8UpgyfTJrk69bvCbeFZAeAfDx2FEmkWrxLHR7zQLxDNMiVTUqtCmZBaCxANkn5v",
  "key29": "4ZBtAdFAM4PD6jdGhnQqc9xEjr6Tew86ACgHpguiucci9CiwCSBR4dMR3wWsw7HpS9MSD3s5PVfUjpwryM4DeKRC",
  "key30": "2RwpzFb7vLE3d3MxJ2JiQGzWkheyA9a55T7D4DZFpSCJuiPnaPj2Zg2KUN9xRFLLhR2ddvWCghWhFCNPnTM7jQ6e",
  "key31": "3eC465ofgBw6WHZbjAFBD13ps5PYuXDxgw374VAYCYuLhSrofX5B37fRNez4KRjm95t4w9eTvAYScEGxu6heNKEB",
  "key32": "oQDnswvkyCaWe2zoFkh7eMZksUT25pr8NKrTfbnxQY11HkiytStuHVVeKYSkwBDVTiud87gqJ8HzvVUR4x52PSG",
  "key33": "5LWL66bG3my4JQqbA3JLFdEu1NMLeM3kQSPTknN42YNn2cURGjoxZyBBhAWwZ5dfwbG3PEx7GNV4CkTWNFQRJZsW",
  "key34": "536FhM926Gvev3M63FJkP1SzAzc1REtSiKTYYpNWM5J8B9Sqm6MNzjD7BShV9gBBqY8Pk9CA9jyoMM5oMvPpBuBv",
  "key35": "2heTBEPe3F9qszoTmN8qp6kVBkRGRFfAm6zYkDnV5qSPTkH3YHR8yXN4HHXquD6ye3MawEp9BM5ZsNprcsefAASq",
  "key36": "3nrcony6z8w6tsP2WRtvosfV71n2erpgjX4aMjewQvqsexytZBSQL8pJknLLJYWSj38qYyBwMf2Yp4GescVe2DtY",
  "key37": "bGuV91N8BG3qGed1wyZoRAisbYFz3YeKxJKgHk5coSUaVSCCp3FweY8HJPMdFariPzdxmnJgzNVBJsCKBfoCvs7",
  "key38": "39aLPSQmd6NZEd8aW2utVZGkH6EJ2a1u5Yps93qQUimWAtAPVxsLT8BY7yxxYx38XVysMsqy6wiybWJ4XCBH9kYW",
  "key39": "5wic5e1FBBmdxaQWn5vuFMSbbaKJosonHR4XiurwTQ9fypjUjDZt1tuANS1wdQJscSQZ47je9nuKJV23YjAQfAAL",
  "key40": "muLMYMprN5v4FeVjSP7VcfiN6SsSbfHFDLoZszUYHNtRyfpjXGPp2eYa945JxFzFGNWKDndfHsgcUKM8LS8JNA8",
  "key41": "33QEn2h8uMoAidGRTsdoSpVDbrTY52NNSUAtFcAE3zbXZ9VWUpPBVff1TVPCSwdQvLXWqwNLJXkUNLAHNQQDpnGo",
  "key42": "3H4snxTavR8fqojW8BZoHu5B6WwuLE5X8aqrmZwVuSxvMa2wyE8M6bw4TatTwxKfVbuNzGME363Q8kb7c2mU8aCX",
  "key43": "2J7oMNjP4ruGqP3L64zCJ85HmLTxpvxrURn5ahQv2BJQpftAdw3jJkpemKjyQE1vxCUjmJYapYzNBzZ2szAKhzv9",
  "key44": "65dkowNaRLwXmPFotDb5VSWTvao65GmUY1XYhKNYLZt2kxeVSdwG473N1W6AHcXWFGymTstATWuBvSDh31iXEUuc",
  "key45": "4P6SAB3tthi9KFgPrJvQexXLsQAj3ys8XXY9M1HcpTwjuQxxkieMr6wqvxXHeNJUMFB9saX9ZyZsn6xxHg4fBG6A",
  "key46": "4swNmqWxXZZZAqNsV9RwJdpgFCEVL3bsnUfAeV9SzfLZ83BqRU9ogTjayDpABjNp49m7ZNzuypWVP4xgjDPy1Ttf",
  "key47": "2VEs5Lux2Hw6HwSQynHotuoVkbDd77sY7BH43HYNqmVhQKcbXTPYAJRVguQCQr1R2nkgCmPJJQUfYRs7Mv79P6vj",
  "key48": "5nbjnrwL1F8w1DpRzNdUrGKzPpLKMuEKURywkYyk2VveceBDzrBXerAMPDGxZa6gMtcWaVEw1waf893RBir9YYdV"
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
