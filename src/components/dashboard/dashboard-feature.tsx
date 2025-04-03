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
    "4AxrcYxPeQdPqweMkDXQiLEhCcs3ebgzm1ex2aNn58ijNrUY82an7emB7V4xwfd2q6T9eoe11EpKvwp6diaAp8Bq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WsJXmHv7CXzwtpB89qLqYrsEVoaWg1nSNmktnKU7fEExbPWT6kCUdBFoaUHhQ3jYwL6v47XVSRveK5ces8EWfW9",
  "key1": "5Hdp9kV7fj86ZQvKn3q6Th2fXNKJfjXjtFPrTr2iDNKSHUxNZgXMgPQbe3fyciWR2ZWF7tfn2Wd5P7oiDGT58W24",
  "key2": "2ysDM6iArFcCqK9b6QqiVJBZDG8XiKpdFGrEkbmedcnJ8hpFa9pbS8fBRdGdcFe7HddbnP7eNKCUxgCDqW272EGS",
  "key3": "zToVYsciXUJFu8yc8x79P2ZqJKGho8a6PW5CwGfQDmMSbnyHkDt4hZMU6QK6f4ywGcUa9EARPX84CayVqWtbCcj",
  "key4": "aJoXZCRTmm53cK4gjaznevkdEE2WtVoo1bCszVFNSYhq7khTBsK982QgWmWipct92Vp7mf2Uptf1biqk4pu8ARh",
  "key5": "nEz9jhUJoXAXgGAhrDRQLTtZWyB2YTXwHEwiVtcSkW4XKvKZPyYj5N6q3cyTqbEFpE7ArqKnrimH4n9MkdZWFfq",
  "key6": "5sNqk7eKukWzUX32aHVvYrZD4rV3tYUE1DUHUPEdSjufe6pQ11FwPEng1NyXF9JdJjssaqXTdW1zm1pAMZ2dHCcQ",
  "key7": "2AN3Edu4XtvLsVFWmieZ2Nxj9pf3cj74P7WdUce6y5Z2ZmYDqWLvXEEZXqYUxdsd1jx4U6QGGuGgj8ZzJViAKfmt",
  "key8": "hdHX8ekQCAP6M9AoJCGgYVXRMTHfXzHZBMH3pAooRVaPHUqF7npJ8uBaD7aYyrDMc5sNXU9ZcGyvdG582TzQRJA",
  "key9": "4L8EMXdVYYb4XDfXfJjwECVZ7KBVqEf5Uah3woGVfuDzA88ZV4WjMvCpLSUcxorWFTzu8gWJadwL6myzKXMHGdoY",
  "key10": "5JH78Rfq4E3hsPfvn5ZMxG7wJZQvboHUvMqL8iuJKsnc8XcPFCQqKBpbLGHLiWPcAV3qeQ6XMzwkjZpdHKtEjGDC",
  "key11": "4pNQMYJQKaN3LwoeA2H9tGqj5Tp6eZChnWZ2Djq1P9MoLjb1BfLGrJJAshcGZ3RCqRG6LapeyFheWK697D5v97Kr",
  "key12": "3DMsTpgpnYXQMnJ6Xr78mK4cVBPhHGKuNh3rok8XoMbuqbG5NgN4qfNdqG1yWLN9uDXQi1RU4nbsCT8z68Z2YkuU",
  "key13": "55PzsXboPXs3Srec18aoC4mKMd9xr5myFz5rD9LfAVnwcBBUfKuywpYzfew5mDRP2XvC3TJHkXaumMBPWZAxvVX",
  "key14": "5eUoMXSWgDT8mvQAjvbchtQCViqEtJtdy2nwMuwbZWKPh4cZCxw5Ry2aZ2DXZPEa26jXDkC4sXi7L8e8gU2d7Rtb",
  "key15": "4NzVXfHoD2dBuw5GmFg9dEF64ojiVS4rDE75hdEisuhveG67uPyM62FkRYwaVteCVGt2NKgwMrTYnirQKYfvYxuv",
  "key16": "5tn4H6avYYMxcqcqz1ibFXCGxf9YojQhUbydu99dBro2iqbwZB331ekUWaxWkxB9waPDKAjQhmw2FqwEyR1Nvqrc",
  "key17": "CACaaYuZ17eG2XriaRiSFABXuv2qQGr9RDv6vqEAfmgk98g4SyKS4sTk7JWSBBmp5efVVcMPATmBQeqMqSu8Pep",
  "key18": "3zrWcHxcyqnagfFfPftjMcpwo2vGCiMykTM6ApcK5wGcD3rkF4LoxVMQRLCs7why57a63H4QYPpmuA6jngAG2JVB",
  "key19": "2rrbBjPekY9BhkZALk8i1THeihjH9drSVhximYNWDBCRy6bARrT4y8kq4rNVrKmyGXFKDNzpfyQbRiimq6KApVd5",
  "key20": "nFFNgskJeX84AqYuSEdoXAUkEEb1Kfg7RgEmgW8MSDAYdCnkFWu9t9Lg4MGXpUhgEduXYsuXzTkkAW1uLEdLAp8",
  "key21": "2pDDcR7nsWn1jYaiqmfVjp1SUyGi6kBfHLCNAxqmD44sH2gYSxFdyrZuXqb622LVWcF3c3byVXKsv2CDPyoiCzrr",
  "key22": "3i8Z8oVmaAo7qxzCvpmUdPknKKrWgrzxJ9dbuKqkWWGP3tGbWWWEJP9kZtDXU5CMJn5t9KyDT79EXw4rfPwELjFC",
  "key23": "iDB6pb1HqqvrJdPNaRYRi4jcK5iLdKeAkN6cCRo2RQwtFTn2Pr6gHv3qpsXaZwdweGrmQtfJdR5hxadDHySivrF",
  "key24": "2c8fYQa7Fhri2UjdRDGgrR3wdeuEATkuDUzUsnTrxKr3rPcseFuCrU1fMuPKgeegeapB4suU48ygr7SaxrBRKJ8d",
  "key25": "XQvWN8e3dp2wWC2spdrnadSQ1YUh71dkbgxHdpx2EknSNNeHvgLPeXmT6yBKbDWPeyxF1jyMQxb11h44N3kGQkx",
  "key26": "2KXGcW2ngyFsEgFezhmHEFSc7GUa1dohXxC49v8QFzQHx1D2UTQZkQh1maP8EuLwNv5fRJveC4D9dxA36jvtWVVb",
  "key27": "4SNZVoFCXtdEfEayX7J5X7c1JhRz1y4Y9B1kX4jWcZg19bkobyoVQfYgjsTbcF5hc687tPKbevhCS8vvevhwfxUP",
  "key28": "5jpLHVTJKDcixwzaZsd8YxHLaZ2sJjNsgoVXtcRGomUnwiTbqcVt8mgYcJumV4QwZfPkuxxMh9BVAKWaneLw6LEK",
  "key29": "2FyuNHYxzGyezgrBaRVzWgQLAxHSBxvnSkbPTiARPsuzKgrMs1e3x6wLzvByER3RptaBuNzbjBTLZyp2toMBPmc9",
  "key30": "2WTi32iwpMX8QJqnY2gWNX5eXLw2ccp9tH2eQ6dQcPiLpurULnZp4KpUH4rWPiF79H37nbikFUwRYunsXQ8inE6F",
  "key31": "2pj2Vz9pCSu4CSKDvUi3b5X3Zdpka2xRJH3GkHkUEfsxbBhJHuuLU9CJQFTuMeak1ue3isFaBBDLuue426FfL2xF",
  "key32": "5GUpWmkbMCkGufS99Gub3GPGhvMaiQ272ofmNX8sp78GZXqKmLhxWACvB3yRRAQ5b2GuUN9T5CnBgVDHYMq9gpH6",
  "key33": "UbBaYiqXBofxj5dj6Jdbz4k4UxREjXaDJcwTAayTMxR1pYLNiPNYP6dZB7wXEUQ8LAQWUdsL38iyZioCSz6MPmo",
  "key34": "5VGoeyrQgEZS3nntSCQDyPSrScCMWWE9NK3JaYUdXbt8GixJXB3CWvfH5DFyvzWMfNXwM2G2YMzYnqKkTgjNXYLv",
  "key35": "xQGsVcbPZPTq9UegEn7g6zAyd3sdyfvhA7woLKkfahF3QGoxRWuuaexZUUiiFPWL3mkuggkXihowUHuxeZSxB5V",
  "key36": "qVG5EThQCqou9HcU8cboYBguvK74KLzUK4rY1nyqr7UeKu5CZsYEam7JGHiMgRbKHix7ZBVq1dYNNHfjtsyAQjE",
  "key37": "3mvF51qrfXqYpPkRVg67JdswdoBtcspFb1vcgNgAhwTaJiUieRBwCZAx6Apg2oQfmodm4oLWBFrjTvGVTnZLiW9Z",
  "key38": "5gGtYN8f1HYBDRz3edV3Kmki5qeYA8GffueSJd7hzVMyZ1FhkUpqQtHdAKnvigVE58QzQ7S5RxBc6sRfEeKb6wY2",
  "key39": "5ohXwNpgvQktRQzN4crdKpjGoYUZJco7MYNWkgAqAFKYULghKitWNvhi69rr9CgE82qzbhZoG9BrujkD88tZpSXR",
  "key40": "5wMyXQdubMLABHpHFaZACWBsmU9RZfxgMeNvkiFfBmyasHw457hgrp5oSLwhqjdfQrmbD4mmV52NdNVVgrzDVr5A",
  "key41": "2Tu7oRC45WwFwLqfoEJPuvK9mXuSL221u69BL7ePbyxbE33ooa7oizCpNjfp4vtJZwkEvHtDznq2ThRHqdu5tkjQ",
  "key42": "2Hmm3osJR6BiZeWWYAtD433fVBavr8ZiGNEKWGkvc2qRJbiMKqqqRHVAkyV2carCAVcYRh9dd52ktjj1BADopjrM",
  "key43": "4QyNG1hQc2q2iKrGp6hQzHAuZsJfLhyEZ3pZYJ11dtgqiVnJ7QjGhsCdYP4CpbcuvcErj6ED7dRo4Vk4iuzx4T3T",
  "key44": "y4hSxktRY2RiT7fALJVgNVsrdyhqQVxfktsKAsnkCDGNYoad7PWcr5F4sp3sEfrxK7wdTeUJMXnDXTGi4trifbh",
  "key45": "5v3483MNwWVTZXu2fH49gP5CWfJ2HHJp3MytnFy1cviYfdUBrHi1niME7KbeZXkpwW799pFa2EWMpxen8ZyxWs8i"
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
