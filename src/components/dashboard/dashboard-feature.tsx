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
    "5pTazpjY6heHPrVMLngHok2vfJoHpq48pGnFEtPKy4nuNwKUMvkXsax6jrhDJT2xCcZR3eMgMv14wct6c36ZTzH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SsS8PzdGsN6yqaP12SHZnmnmPwH72Av8oiv8DAqhcjC1erHN8BwX6JAKKCfkFm6189qwEU2PyD18xjJSjFLVRYN",
  "key1": "2xFRBa8Ypi4BJ7YMf3BmQWjx8VZLkp5gdYaav6n6VY6xUPoj64yUZdXrfuV2PnXdK1nM2Za5WEsgfxG9wGaZzrrT",
  "key2": "HMy4cnEQTFNTDQLgvtUtpGuNbaawc6FcuXxsKFomUscQEXvUP4NakW8qmCkH81pRHA4t7BaH858Td7YEYsAAc5D",
  "key3": "P7UqmnAcR2uMNrHNVpgvPpmUUgYgPn9c17XB9eRbqUYaJN92qXDfiKMiwBRiA7CgLcdkDvNKvH6my8wQQXPivV6",
  "key4": "6pgbmR3G5QYJDQWuZyYp18K68AkGUmaFeVQ5VP7t7a682jr3svXT38q6XGMYEqZX3maCLhHAcWczVBAhuXTzeo1",
  "key5": "3iFVbw9p1rV3yFQCnVEdPqCFYCHgixKMdr9ejDh2JGPmgZAtYwcGqTRnDM17LYTD9MfDjaeE9QmmdAXtea5vwndk",
  "key6": "qJMWQ2rW8Wk2DkEfBA4sEhEJvrWMFhaFDMwR9Mdn1qnShYqPgDGmq9NVbsv7CLM8iuEidcQnwTgcRLUYuPM8Av4",
  "key7": "2viB9zoqcHEye9TTT7G5zNtkWoW2pcpB3V5J3FLUVMqQ5g3H4MVoXHGk4u2aHx3wHHfP8euVBM5i1HRk4Dg6wzaZ",
  "key8": "439vBKLKEKkkTT1jPuihPtS54uESjMF5jwW849T11eQpmGutqyWwA8JkR4boMApyYsCayLTVmjT9vXQjjBDaZnzq",
  "key9": "35CYnCty8kHRzYgas2ATYUrbCXiSC1M2EcLzT4pK4GzyBE6KAm5bjjKmVYsQNvf8DkEA6LpzuP3zucSD8U4kBXxL",
  "key10": "3HuFtpYN2k8RdtqTvAjHFKXJRonxpYirintkcZ1gFt3QuTgQ27RoKqqnRpbPokSkkTp1T9W3zDJb1qfsS6RZQhoE",
  "key11": "3kUxJg5nKQz9DzsGaLvzmxKvhSLFuvhG7Gj22jBmR3hZy9gfqXjE2q6XccyY8ygZQ7qKWdtKycsB49mfz75bEE8A",
  "key12": "JwVVAqE72xXfRmSnQnSK7j7JUtZ7fex4VKaU12gsbVY9FEjboaWF7uNsDS4Wo19pgoEhuF4cckSZfKuKeq9yLPx",
  "key13": "4pLGryY2TQVErZhWG66dxUnpcELtJtkNYUfHLjnFgMFjBAK4L2EKVXhwo8GoahXfsWsUrFLXpL8hqhYLS2jQhBUU",
  "key14": "4ha1iYBaHziN4MEv18THeLtYu5wGBnTg7XkaBYKhqH62fhob8rGbnsERgAYuwSHoHNZujqR9c93vHrVHRuRRMzoM",
  "key15": "2oTw64Ve3adkUXVoQFQHmYTtpDsprkjDpn5yF1VfXAGx2jw3p6M6P7ih5vdezj6STLg8DrN6G2nMfv1EYSh9ynae",
  "key16": "4UstVk7bBQJkRCDeFUw57Hyw9refzeA6TLgUMLaqew3hVSs8v2UyZcEVitEM9wm8miiS96TZ1XcufCZxG1AM1JW1",
  "key17": "5cHrEEsGPdSHvELRbXftWLWnYfMiF4Z9StY8ueMR1VBH7iu4bXGRTbedZvva2Nxxx1iWRjL4Z4paa2ktvE9jSkhf",
  "key18": "3PcZgHrvR5KRkF1nTZXv9bSFUhS6peaZxE8zZbBd8jYYSkLs9pnpn7i7iqesuyCW3iFxWVUseSEvqGTc5NpPJZKs",
  "key19": "59vUCiUJqoo4vgpy5bnNWBTn9SxSPxSnS3kqcog3K8eU1Zjhj7TvC8NHXrhowj9dWMVmR1KtvYZEPqL2PW9zwD2A",
  "key20": "4dQuNE2oXXEk5KvbGD7nQ2Rs8BvkVYxeyFef8yBBCmp8Nf6gTY9gouRRiEnPb7LT4sEfEntQ3Ysn7wsETyJNxYJm",
  "key21": "26uyRsCaMqwxVnsTRyrNfrzJ2qvFUciDisH8brfHKfy7Fv71pKC3CwiPBGRPjEgfQk58rkKWWfq2oTAKYQNcgncC",
  "key22": "4WTh9yLrsK1jpZAeGmQp24HvjQRFFLubac37cr218ofwbEiNwQYNx2VBXSZK6u1boccZ3s74h89hCABkCS2tDka3",
  "key23": "2qiS9QY9AzcUxiYkB7RtwAafsdz6qjAQwmZsfFCZrtPqHhynHM1Lm92yPuLVaYhmp8QKr28FuCN2A9pLpB3oYjVT",
  "key24": "2d8ootLay6sgGbyJcaGxE5gAkLnaXBHu6jwzTAy2QfVYUXgh8nVML1aYvGxhGC7m1krkuWxVCvStzLxR1KZfwR5x",
  "key25": "5aoS6b6hK7fhqWxLv4Ss3nEqXYD3auonAhsdzd9y9zveKY8zUb6ZvWodSuoDYf3M87p6dZh8bvgAAsuEjdLTavrw",
  "key26": "49ZvqMjPR385jgXcQbfYkZxgh3Fj8kzLCbhvZCJjCz9yze97uMVmDCy4yimdQX7qLRHPgCdMLksWcnnesCBVunvL",
  "key27": "2hBNrRTpZYj3o5WJtnPfBevmYmasTWuYLm7dcnKV4ECGxoGRMCcjYCAEPCJnbRd9yxHQcdiNutf1T8jsXAZuqDNd",
  "key28": "4VuAEinpRCDbHYdXZr1seCCsJXrBs85u6EbZuw5MgE4kB1SNDsVyHN5fWuoP28NJSY7tP89UsmVs4DcBgnaVsfsW",
  "key29": "2AdgpNDdXrRBd4RSHn1uUh7xL7uzChdT8ZNdF5gQtdyMLonTpY6sggPFmwLfFXmEdXZ7D2vgukQMKasEfS6GNc2Z",
  "key30": "2D4KAaQK1vU76Tr6zUXLgyA1N5DvBk2yyVBBY9UXEgDudytnHD39F3mmnc3bYDXBABNDiVdPCypU48wKJ3v1v4T9",
  "key31": "41dWYk75G69mnGnWZLoajZZN1cxXhVF4RzYLFUfPDNNsCVA1fMRa5hGf8KYNDGJUaAmr2c9JFZeta3NhjStu4ZEP",
  "key32": "3mKRJyqobuwied9mkmVn4b4cCH7uThnpp4cuws3QLi3oGKZikpLZCe3J4obSCZnkaeoxixGXhTXgz32BpFwuMMv4",
  "key33": "5oU3wE6dXaPxgatokke1ALWizK5A4ePudRHW4FVtBS4c8tmukoFwnkpqsLsgBut6RALGY9EQXsazYy3jLMYvL4jF",
  "key34": "67qGagR8oBNss2Y4R52d5cU9GMjuryruV6LmdC6JjmevDNfuvQpoMDfi3niwxdtUCE8XK4oSQdGhuSPtvBXuUkxu",
  "key35": "5s1e2ZSqEJNV8msYyc3DN2Aeidw43xXb2Vywm1PYW7pddE5Hna2QSQyLHbSuTpu5KoCW1PjxnMCDrt5eqNrJZiNo",
  "key36": "4txo2QNQC7okQ56hPRhG8LL2R5iwYgSmJzNcpCyx6noCJhmnLonawbU8vEbdg7uiuxGFdeLeo9dB5aVsrJpHFchr",
  "key37": "42xh5S9cPfDdsXgWhdpJ4KZodZYLi547NAQJpxaYPHuLyikCBy4oNcwzrEk4WyBU8jAH2SC2aoSY881Hf5dDsRbC",
  "key38": "5co86VS86KkMPctsCCgV5EWYqG8hq1hDWQtXzjzDHuMwq6hUp64wNroXTuWAbmuCi3XWaggR2QAMZF2v2tYMdEEL",
  "key39": "5qtxxa5xW9RrWwLmspwXVuHkmQe7Svf8e5c4vKa7EMAPqkg92MvN8a67MSeLH5eDALBf9f6CNEyBebgsCKJSs6zJ",
  "key40": "3Wf1rBfrD1XP2b6HqujqzE8UDKNshthMYRiWUWggp7t7jwF2GTKQjCwwq2Tx8A5qTD3DSSmGpyS8MVBMbay1S15M",
  "key41": "YdBGZgnhi5DhxQKjdEBwWPQmNNH7iLkJutVc9QWhg6YhSABxgJ9TLkTMicUNJf7gt8GKvUAbXHFvsWSznEo7eyP",
  "key42": "2AqSBoJ7DtUHxNS5qgkqqGdZqv7Lv5Pd7Aq1dmboJyy4Vy1kXes9CcPu5a5mKJ7mqjTpVxojA3JN7HBtKB1VtXGV",
  "key43": "5ozF3FkMqjyacHrfohx2MnErXFpN5fT7w5acXpQnoteo1zq7oqFWvMNWadEEPkEWMZph3Ffz5RkQ7xdfdJMkB9jZ",
  "key44": "9Xxyz8LenC62hpKnskkjqdB6ckQoVnhaXm6bYShmeJCW6ro4c4NKnAKHF37ojX4ENUZQD1C8TnyKYJ6hwyUKHuD",
  "key45": "4VchkfSy5zx1wUWwXTZegC11ie1MXT99m6tVw6r4GvDqz7PiBNQ5TkhGHLnRHE5EBSy982Y8eb2Ykrewue58Ajqt",
  "key46": "49pwdWUBFcLbgPZQgQ62tuhCKUY2838kritgUNmrGjphjEJEbNK8yUW3NMpd2xzsXAfm9NMiFr6FE6dCoYmqzMr1",
  "key47": "3n3XshUdxPGmoafWJE5dbJSJTEMA32KT7WYFbBydyPPLEaRqz1PsZXjSThs7H88zNady9ENoScr9CP4WNXKiALSC",
  "key48": "5vEncEKe8o7GsEuWEj5ymGkQsPqJiJ18qUaab2kjcq9XzCFZDxQEZwnyfsRGSzgKxHbb6s3gfdF45DsecGk2yyL5",
  "key49": "4sMAMmJ8TUYXD5SSb4QnY2h1FoYhBwWnr7GSa8FxpoDTi1JxYECKTFjpoyUL4LwoYgkBK8b1UvabZGUzvbFVD4ov"
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
