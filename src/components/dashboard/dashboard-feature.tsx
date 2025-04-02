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
    "4QbxDCKgkfJy9qJwBHjRvmseNAirLBSH1CkVBVfWiUJu4CuaFYAfLsm1EXq7S9FFGTnfdxwdMo7mri7wqReUJjXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yBWwv9BoznevvbekcnSj4KmwrSB2eaVZeAGSnsfFevNnQtiGVoQdicGpdwgAS8Gn4xsuzuYsTBydCBPmBrmx3XL",
  "key1": "fwcsgXWfsgWq8PBfk3w8CB9C13WpWsB5hm89oGvpGmgPRxeGCfHPohvxLCQSM6qPL2dQWZSFT8jTB2euAytnuMm",
  "key2": "41rV7Ze124TuiqvcVbmva9u9ART4ETQjUnfQQDDVtGADvDvR7tKez31wCCTsZ3nq8KrXmTDnYzYHMcUC3HRAYHFC",
  "key3": "5xDSMg7UhfCnLiwV77q7a5GwfDeAKha2eeTfMHNn7wzPBpRpYVVGYfhaw75X4wQX6yG5GC99Aibd5ky3g7VURqeJ",
  "key4": "2v4znFQiaqu2AGGUTZ73v1CagR1w5T9hPXRXJY8GBr74sYoYjhLUBR5dL8GoCnKesDQUEA6T67ADyMVYV8pdhRx2",
  "key5": "3rVBsK2LPtPDt2bySpoLDSmz3bJijeJ7jfAsUkKsyUzGRNsVTpeZMDPXPa9m59AMaBNWUBMo4M2645qrU9tBbZta",
  "key6": "5kFKG6fq5Lnzn8qDFCNLNzF3msJkMD8tkj52y6aGrGGjgakD1cfHKv2AHkmNUp1QDoKRKSBWm4EEHB48eZdVnKJk",
  "key7": "5tej6UibCUaZ9PjMcUuEPQi8bxp12PWbhQf5ArqJo8pJYVAYsiDR8idE1SD1dkvkV7PniiuVt95519fzW6rpKjrG",
  "key8": "2uaKtrFBAj55mKe1M33bDjsQGN6Cr8vB4DanCe63VkRLc9ryX77fH9WY7pXtciyevYjsHXkJKXdCzRxgZnnvvsuK",
  "key9": "4615LDdxSAr8QhZftCYCY9SipBKjaV7Wao7i7eMpNepaRUjvGihqwwCgEUWtgvnC7TgBqsmttUpFwzSzfzhgCYSG",
  "key10": "qZseD7ipNWaUY1DTKWEoTWxqHD6FDiT9FngcyuHrGXEjHz2crFpZENceWQUi5DQ81RWJfoytmkGhc9fML38sF68",
  "key11": "3gmmQp63WRZPn7pEMbB6H12BPfuuwkDbhAgm33Q7VyWspvh2BVe9us9q5RfKPWaurBmvkUiJwsB4kr77pprxZjre",
  "key12": "KwfMY1xUfmEWEumeXvUmqmyV4DpDgWF3TqsYU7xwSVxVzg3u4nhoboTjwiQZhV2XseuNW6oxX8WDbxDny5oqFPG",
  "key13": "456YfT5cVpHFy6KjLCegaqTgLe2XbfqGoh5PvHkWLANP8iLLXfWv6irGP3xV9ukELbRgU7piYzU9HttB9V5D26y8",
  "key14": "5wmjdFguMP2D9HueevDSurMoboHGCKZnc5j8WRJU6BwDia4LhSgFjQkBetjZcdSy7GQPsnG6dJVgoCkbtMjxBeVX",
  "key15": "3L8irSe1L7PBbKbdzPHgptU4kWnXJEVqrRG7G2qFyfB8xCmiwyUauwCC6quyRAeGdK5uanzhkCd6sQmSeBJG8BNo",
  "key16": "4mq31JaQJqCKzKEiMGGwGKoaspg5tx8A4kvkRKSBDuR9vqz2QdZWRwtK1LGNHXTzrbe3RVNBMoAratUQBmru66Qx",
  "key17": "3gxN7ktJmfSSPp2HeBgW8rh7QEqsWbihoQC4DkdgYsPovpkvPcQFyyv2FmPQHVLKijfkcwYoZ3X6L6szKzpdc2st",
  "key18": "4yM8MCnYbFwnohDZcAptcHhsHv7AQYNzpS4vPg6ZEnM6nzXKUuNCR45kPbTAmJH2UNCTXtadDHp69c6eiW9oiSvj",
  "key19": "4A8NKMwSQrSP8EyErqsBZYRvmfV8eunnt8rK4GRj26scg4aCyikVgqTZQQw4KbduDenr9VVqQUTiTZYpJoPxpmbB",
  "key20": "5GmKAbiTb8ayvsx1LBj4hHvWPS7WbcmkEbhPSJh7DGQWLEeZyQHzFtci1ui76AAKrDDaNqC4MaiTPUn4gywBL2gE",
  "key21": "32TqV5DEhiCpCTuUL1rYzpM3Z8dxyekVSMBwTAhW4i6XiASfZDCYXn8mvkLmfn48D6FPQBzV1CihfqgCB4eMXxw5",
  "key22": "25oQpdToQkJDykwhBWw7y7Rg8bYA9nZTG4SAznUf1LJpZvWVjLiqF7zLEy7Zy1EqkuoEVC8QNu8fipSs7o6sKLho",
  "key23": "3aMVFJEiqH53hKHmMJzP4wdbwqyeX5ynr1x5tLGJiRD1N6WtjhmHGQbivTG1PDp2kZ9kHXpzxTHxGUEywT2H3BnA",
  "key24": "4fv7XBMkQZQZiSeQv3fHiRkbkNVzQjhiej3o1oBsd7zxF9oqNSf7WMq4o7rMdzFZKpFD3qGoEDtF1pn6GeaV4PKz",
  "key25": "2hT2C1hBMbqxQxQGKsnfdjK1FCJNHxL27hqS3ydGuUNpzGmqyEFuLbgTi2Dj6xS2WHsy4khAVk6XPzAZwqYwPUR",
  "key26": "4X5bppRHTbkK758x7uMwh4xkoo8fX11722jawNQnJrBiTqdSTZZztF1JmLBcgTpGjMtcPuBEERJW42n3pSuZnc8b",
  "key27": "4ThpwEu8eBsKnaFpSzTvPzHsQ6NzgWXExa2xZp1WYbpXXnBjq1cevd1aKaMKUV69mME3n1JzHGV1yqiMTgFGrrxV",
  "key28": "3zZS3cVeF6eXAw3kMESJFeQHnHQVXyBnjSMM3FYxRqgWBKrDQ8oB9oLB4VWaaQCqZ8J4fBMycFZ9pFNjeh2FYZeX",
  "key29": "2z66jTEnALd8GkZrnpomU4QTSMmSpqcAy4bDJVwGNyvcKJXHXJuUw78dSkMvHxhj1M6U1yNSMNRhwWACuvwjuyy8",
  "key30": "2UnYfYGaYtunkcyzrR7928JBQDgisJTthaJqDvFEhZbEAqXMhjpbhhuRczZYGcxvxWbk6L5ycNeNq2VjNEUskqYn",
  "key31": "3aNaVucedqqUyaxffipoBhUEu6NJXKnZ9WqtnQRSBQX3iMF4Ap6mLsMVADPTvEy3HZyDC5HKfrS7ACfH5ofwrrfV",
  "key32": "64f8P9dWuwbYh2x7fyZjZtS2vpiYevohXZyYXeozsYeMe8YEpcWhYdSRf55ksk5TUFoD3QY69oHtgya3y6KgnJ4a",
  "key33": "4wAxHciKYP2h4CH8c9xAeMHT83XvDu2AV8Lh1MxmmMKpPe4woxVQQ5EXEmLtWnWL8L2pPTkbnCoEtqBgQ43eDupB",
  "key34": "1hdVETvMUfHaqu4yEGkMKQwM4R6kTCfV2g3b2zugiBzzRSuzqN4XnfEb3gewhDjQJPe1awJYTNaBmAnKNsThMPf",
  "key35": "5V9meotMdmvJFaALb5vKLzd5rzY5kyekDe87ZisibjJAGKMiWzEUSwh6G6qLrF8fckCtcowQ5RGxyKfvP58HAG5g",
  "key36": "2YwGzWNdf5eh8TEFz5y7JiQgXxiJrf5d4wk5xLWaBuLsktaaGVB36fHXeZrmB4Ly7pU1BJtNwLTDEXvkr45KMaed",
  "key37": "4r9G9LHkBkNpUv11Se4XyhWK8BM491Mn1BWYX99akqSAcorYEWHTAL6fpvjjbvozDwm7sGzsbAs2gCqAdMtxXQ3s",
  "key38": "3bZEDTLKyaoTeh2zkLcXf9XLFUy8qtyqo7e3spxTL1bbLRcLv7HHjgGwUobGazUH6wddD1awrmWpgy7WwWdnQ86U",
  "key39": "3Ngm3NDWWkVeaLtj66367AVsaFGaQmG7L7XP6j99jisvGpgPi7vRrsqRz2sLfZKSna3cyHw99kL3qbDSmzWD5XX8"
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
