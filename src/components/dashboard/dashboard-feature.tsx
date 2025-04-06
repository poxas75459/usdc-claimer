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
    "5LugWovaQnjD1J8Qnafp3WBAZciyPJuoBEYqnE2FpvAfPYer53SAhLjTSi3g2axXWSuNBUfqxsjoYr3he4cebsoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56yx7CPdRfdK2BjQx7crokyS7Z7NMh1d3pp4QRLMppGyRHzrFRSXLUCAgnStQT8CgdZPWBK9pzMgbBvw6deXSA8a",
  "key1": "2cYhqmWAQD4RZmKbtD54CqXcuqxpcgYcDofxdZ2vxQAHDjyiB2dRW6Y6CRw2fZ6Ff2AByoCB8fVZiZySBQfxoYM5",
  "key2": "4J3v93b7smHDoP7GY9gXFScBrRv4LGGgM7DfHbzbA9TBT1P8VuD7ybzPzcSg6htPsAVxCQYhwiGzFfM9bVSSALwt",
  "key3": "2nSEVb2A7mN6w4JH57Du5NFsJ1iKt5GrfSxVY2229zdsW9pEE4J7FPX2ACYCFo9tbNjK8UcQdoZ5q2AV3zs6sT3n",
  "key4": "2G1iLUWR5M4tigV8dy3zLDmZnvYZK43zr3ju5BGoEfpcGwn3y7wr6F5qBNHA9DRcd5PRr4XxvyTNhBmB8taDJNda",
  "key5": "WCULkKYXpHGemN7qtWvueFvus86DdPA9FHj4hPeFYcWjKkQVBp4oWu7Dfpuj3671EfwwoFoYHgjKPMcyFPgZNJ6",
  "key6": "65VRLa9SMpL79uYZBNurf2b2VAVPsRGHtmQrdJCK3Lz9eNJhgTDMNBk4Ec28juxyA1RdyKqKQhwxXUw4wSqE94gC",
  "key7": "2DBxjdHuzhPZC7Z3oU7pVsgFpSXZjYqptRp7JMuqxkYq8Cmc2PJARzdDtPkVukYogQBuovtm8Vka7gotT2ks6dxZ",
  "key8": "5h9Q8aFLuZZTWXDF2bejGKepqB6orEUzuRE2jLnMDG5MZUGTZ6uanEtzFiPEy8HxLrp1fLcvhjcsZVtETacsGpkr",
  "key9": "2wtpvRefZnzGLnHdbASALeh7tCLs7Vjr4Ph7ji6z8pmDXsHHqdSaZYcjUmifBox4hgkkuwnsGqxadKuEyYX6r4pe",
  "key10": "v3TXY4AKELA4Jw4ocw6dvi2AiY8eSWgXgkWYezqsBaMDUfYLEyrAqnQpRtvY21fdyr8AkADMCR5rogXC7cpk8v7",
  "key11": "3YcHVAdLtmfYECutEnjr5D95Bi8Ld18NdfJtahQ2LSHPpciqZgNY51bc6hyNRnzJjREtEgj56kSt9tAwUbjDdxys",
  "key12": "4TeqpCkPLpUmxwFXKuGbwWmveYzbL2WTA7gEhUuM5ZHQPXtwnvqKHyHcEm11eAfmBgCr4efjxxfupHYnDpFxaddD",
  "key13": "5KghGvQdkxyLNA28a5PJGRzMXiNxRuprnDzKYaQrhDA71QyfYVkK6B1iDk5TyDoUz5GandoQi4ArXQngQjy298zJ",
  "key14": "4xqoo7etmv8LRQFmdAQrcEM8HZTbg851WVDYN7ZK4eSYueG3WvLE2xtumJgQeFqqgZ9ioYRYuEEsEbUjjxFUTdL4",
  "key15": "45ontoZMegndCRv2AdeyKbHVbgBKNy4N1PVTs7Nd2avGVJu2biCMtd32Q76VLR7mzPHegPa217VYDgUwojd6ZREX",
  "key16": "3t5Qmf13RddEWH5JriqKPL69FgbwtsLHJ4FoqvoBkr1HtaZ9nX8G9ypBqfZhsHyRZZvt4TV98kE1tkDAoeMQUbuu",
  "key17": "2orJ6j5TXcGFkXrptGrw57DbNePkXvbK4nw6cqyDmdwJwN1r8PovYqtRBR5qsshftL1pjCEtpVj3kan85jgVoywT",
  "key18": "5NieLz3Xqnm2YuyhSy6KdEHXswDP7RWGcqfTUuLsYP3dx2akeNJvjEkeJ1mTA1Ux8kFoig6sWbHLwb62Z9oqWLj3",
  "key19": "5zAVXZDAkrGVNuUmE6Nw1EdVPS9n7m5coL7inqy3RnJWqUb3spDf3vbe1kmha5Lrs4fr5R75MEBJ4ZEWPBX25EWK",
  "key20": "4kYC3S2drAnUGvED98AF7K11EEw56taeSS84NpA7DWnceTvgsnTdv1WEqP7hMoYgqhfPUvtyw8dj9bfdotzw1ojx",
  "key21": "mT9aFcDwvCBtrc6dnwEEG8NCRxJ2gT8Zr5Ngycai2FX6eN8u2BXUcaGDdT76zdd7K6iekPxcWrtQZk2gjVsuUrL",
  "key22": "26Bi6m2TW3PP7A4273UtfSEnfr2E6K1nyqoNapqQuSqTEmULXFf8V2J39TwdcqXbHQiWZzURggnJxtjLweuikqHo",
  "key23": "3eA2tXCHSh9jdpDDnnQB77TuZEt4SzbkqrwKuUpwNfv28K7qELsCyqgHG1FUjt184HA9gSnBTY875dHKMivwTgfJ",
  "key24": "4ftFLTRuTejeT47ofoawkdX59sFNnQ2anWZCTJjXiG2shieoH4H44LdNTbLf52Q9agV5NXmeXWA6qHTaBNk62y66",
  "key25": "58C5Pt5PvdpqfYn35Lyg3gksmtzET8cWG3NDnDxaszcchCisgEhCKHfHcCdujYKyyqXkCtoX1ki8yWXbMYR1q9Wo",
  "key26": "T1DaWPWuAMc9UyQPgra6G9nSfQEa77G9P3SYPC8iudcHbUcQ3TeTkYujzU2GrJN53XiAYCGMDSD3LML434QEZGC",
  "key27": "eKApW5epY1u99BN8B3aU1NMvR9EvuYggERoBQgVcwsytbbsDKnEr5mxnYKDsjCazJzq1cH4hEfPigrp4Hx4fa6c",
  "key28": "ebYLTR7DFXs4v4whjQAXbS8YtQ3rzuL6o5bTkN13LdJZYjuRmwPxV9xXSXpVbCjRnbwpj5QQUm1zbKSdodTjU2U",
  "key29": "4dYTkSoyb3GACKCPdpZBeMTPRiMe4BepBvx5EfGw3vk9TfMQWeCk5SngN1HG297VtZM4UtPFK5rJPa9x6nYg3Q2t",
  "key30": "t1ijpuwhFdaRMjRyVXg7F9sz5BpWNGSjxGGg1TLQXU1NrVe9anqia7v98pPQN12rH1vTZyfjaCWA5i1C7PxxnW1",
  "key31": "5u6pbVTqv2kWY1nwRoik5PJ9gkGwcMZPyFWnmEcSUK29CgmPwjzgSGTzk9tZ78Sn83wHNnPBQSEqFsJVhUfPfMyb",
  "key32": "2q69yP9m4tLvrF4sqSrUiwQz6huQWpT2BvDvDdbzDbAd8Q7U6MiK9bMvUhXU4uwQrhrFPMruAdqhbQp87deNiNuV",
  "key33": "4zrMBkuDfBoUkScFytp19kA965a4dEqH22t9P6tkK2XUK5LjJF7qyfm7eFk47KpcwL3p16n2CMkxej9UeFigb3nK",
  "key34": "57zhkeq4EFmxqqaVNkUgNSBAmk6yWXMipztAoqBdg367YqfRfcuziwd2ndgfNZ4kf8aCYsydWVPAyMZsc7tvQ9Vh",
  "key35": "6cHzSCBGBj4dViD54WkxFzwTtEzMuxkk5T9DumoYBTCN3YqxNTsU4tGGPNUmttNbuyy8nUpL6ydci4PoRUWvCua",
  "key36": "48ehPpXg2s9bWh8RZPsVXKmYXGUanJLhcECUo6954nZC7SxAQxq4dZAEUS1EyaM4JZtfLVta2afZmuaC3BZD8X8z",
  "key37": "3eRKDYfDQv2RQQ8M1RoeXNFGfqGw1FYoQgKs6CULVVraSnPWExgKeGfNMrtQPno64u7vocwkKWwFvhqWgav52rPz"
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
