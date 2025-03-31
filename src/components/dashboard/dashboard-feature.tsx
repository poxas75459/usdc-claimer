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
    "5xrpFant3jVLDX2zwtGgXSTdubachgzcZRwfW6PjSFS8tUdz64vPaapbtzSUJUC7gDUSZN9FxPk7RkYouDrFsLUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fzf9osbj4gEEY1tCcjNrQF17kxYSZy9Nbqsv1xiFWkWDfWE6ofFUKASb2JhRsbzqrRpuPPJtiXBKbsdmgxy6Vsh",
  "key1": "4NADRYwLAkcmFx7FWqPWg4RSAGuq1ghuZ1KaEByPvL1QABHCeoHqhuUwUyPcqPD6dho53pq7nfmUvQkzVFWR9psT",
  "key2": "3e2zEV4bVfMVnmRaRyQMTZLYJZutNe3sZihfTDCAT7bSLEpXtLwqRr91Ws1idHM6eeH22jQsPFPhayCfgsAMZaMZ",
  "key3": "2Z2MSemQQibHUsdsBVPF2nj4b1tyUd1r9grZnJRkQUPTub7mjyE6n35x5L9ffHotqECRSmohNu2NKBUuRbbCC9we",
  "key4": "4hUbFoZXnNdZHiTeHsCntctJ1BaTGxCUpGPAhCrmPVpLgqVWDGZEe8nRBikXzLEEWnUsy3zvY6QEdaHegFXcHbtP",
  "key5": "5z5nc7AztHNXwKSbn1sZdh8Jwy2jehh6Gih83shopTVuKKvLYVigZspTFX7rHh3RdjPVCftqMCtfZ75t8nSZfYKp",
  "key6": "4W3JoDg27vsURqhYJSAsS4nGqkzXtprSFrcEZqmpQboCjSnjdBHoVPXZdR1pR2rq2VK8vRZpziSjPh49nfbLpB6B",
  "key7": "5gtEUbCXYVqFetf2edbWYMVw9y8ELoFVGV6UhaA4hbc3iEcdnnP6CUHZgrhwfPnz7XHgiRwHGt5evVeHevSmV4Dh",
  "key8": "5ArRB4BkdSXeuTyioWesqCXnTK2hfxtBNQmKs1GmnknV2VavYbsDHM98LwHf9TpUUCY71N8tRLzDyRZB4kni8gq2",
  "key9": "2AaCAS2PpEr2eBQZopDmRb5uMW4czk2csZaUYvSmHf6SzBawu71Wz3EdG5e54u85xsHSXVQ9bbfePr53tsVSH1CK",
  "key10": "3P4Q2n9YiXHCAPcPjESobriRYXrqWeMyEEMr3eFFZ3cwCigVrRNDf8pzGYN2xqVaAQ2wznpnDVWp49yakmbxe8C5",
  "key11": "3isETuNNs4fWSk7Kako1zXmbd9z2cmUmbafjVRnMNg6Wv62hQ2wU9wBR5t1P8rQb9tuQsMkq1zWLBM6BQxXTR3X5",
  "key12": "4qG6xMbzrtfHwyaJ6k6e8vPrYg7Hvhv52JutBj4bgbzRV2SUFvXRHdbmhBceHtFWEbzMuBJkVDgA8rChE26DoFyi",
  "key13": "29CLAhfVorTaTqqap981AAJA7T8gsBmJxX5W3g5eAEBNTC3xAByjkmPnE78kHUCNqvsxnVnRzYLi23WnDr4oef8F",
  "key14": "23DYVTAqZmiiPMGYz1EacXWvB3kE51iWqqd48TqMZjwb2ECUh2CRuBGUpneFinRmMVdDeNMVLFtMkKZNAyRJHq9k",
  "key15": "SwQ1ey7Bg4fs9C8nXN8zKVUkKkiUD42LzDZisA5v6XbfYVkpPj1CnHgZZPSBjCKoAARoGZBNC24zWfNdVunZWh1",
  "key16": "VVdKUMw6DreBWiy14Dq2H8aFgzDfs3VW4ahXV4vRqyZ7258Vnrn3SJqCHQKG9dPvi7UURXAoT2d75GAewkswAFp",
  "key17": "3rzWMXPjE6Bhv8SriRnM3QL9e5MKRnwzeT5oqTqDV13TMD18YDHR4U5iLytvyPsoJiLyLn4zgMSUaWv2GjrkHCi2",
  "key18": "5nJw51kSU8rvwnZVXy9YTqFLejbWKFMGCf3XjiT4ouHajjEwbCkd8MHZ1839QcN8ctguyKmmSKX2iz7BsEAmWGK1",
  "key19": "2x9CBEyoHKGhrZLGFxJy7ZexF2Kk5v5xao4PHGxTnrZzDxR7PbpDXsW71WxUhyx4NczRynFuQUTytwGpPAXQTmBc",
  "key20": "3B1r8nVNt77fuM9NyCnbpbeAgUFW3gPB1BS3tZ4M2Znv3XVeyoCvUkfc7gEciNovFruj7ra3M2sGmJXRDyTwotRD",
  "key21": "5j2RAA7FSN3q6yGPK16hBiyF4itK21LbnBPQ7F1iszNATBE2hPMvngmzGtBoXAu5uZnMgqjaZR2864pTXTAkBYRt",
  "key22": "2aTPZLkDDWWhZgYtJ4Xrov5229xUkYEyfiH8AMBeSEsSuZ1odjoAtFvqKc5u1XLoYcbfehoeBP3uzqvaZXuL9gG",
  "key23": "NXJe85PVGfGp9RTGzw5iDTSQrwwaKiDhJ4mBrPnvhyRdYgBCXTbip4fmwPn3CA9ZpLsf5DGiZDvJsto4F9EndXK",
  "key24": "38S6vgbm6LV4yjtpPQffEaWaaTSdsDQkPr9gJ7fVSLGU33FPyf24NaYow679WKHagwPX6MpPxY2jDCX8V313jBb7",
  "key25": "33n6HfQDJxMAkAf9t6b2pR7CpQZvzGGXb9UT4a1TBQVFdt8pPZNhHt4BuLCKNNaVjZJ6CsVn47H8rxbFheNJsw2P",
  "key26": "49m4nufKdqbdZQHuBR6W5vYrRNzPvwJE3gxRhoB8F4hToV4uwpzC1rnG19vvQSg9qzwniA5W1vVeuLGvgaWDSecF",
  "key27": "5x1z5k4tGfyZo8eSwXqQPaH3RF7zURNebko255eSUyETcdbSxsd3wGGUYuJTqDgpvjVnD6h38TUBamwawuXJLeER",
  "key28": "wTF3pTornxgo1avtCMcBSRPoXAsyKhemdv46oALuXMSnqkREwAJ4ETn1zV1rQexE7du3mgk8HyZzso2zx5WzNyh",
  "key29": "4hSFCxqT2FFNv3k6YbjANJjaRpffkzc52yPb3yvqHy1YUqsajEDdEuUTbYSLC44PYneohmLqQLMAB4PaGMS3ux92",
  "key30": "5ZHCdnVjb4Jh1EAFPKoRAwGrT7yQUr4gqbkgszFiMPQ6cfTvAvBpxXwhwEGxkZvYS9NckDs6VSfUmaGfcuYdykfC",
  "key31": "bkVbxCCHpJpLRoYoMYRXavSu1EnqoRTfnn5XHsVD7YcuRzo7bqgm9LZ1wCzko7mRwPG6SnScxFY3CEb8ntV51H5",
  "key32": "6TKfdBYozRqeREj9eGFg64FwhD1FC9GPH3eQ5b9EjohPr6ju7mdkZx1PtieY8x8kmcTDe4Rr64XYEnMkPd5nY5w",
  "key33": "3AFPoNHKCQ4wFCS4MzkxB6ftSTmsd91YmR9AFVVSt3ucHFUrqqkV4cfG5vLTKVnfGFfwNjJBU81pLtUpJ9qH91ah",
  "key34": "45khcP4UCeAnvNaaobFPTV8mVoW3CszodAHqK2MiTytP8rtv5LPKkPt8sUQvdofZivaS112bermWgzY6FUNoz3H4",
  "key35": "2boaXwDdhvDBa1cGFrZsMc9yTPrjs32GRQCA7nxhUX9Wfof5akAYcFtUaGDiP1ncZbSt4ePaazVDP1tkChuspzX2",
  "key36": "5AntnVeVbF2MtZC8oKxrLXsBVXS2TAzQwNdDjikuYoPpQyEJAjwjrK1NjtpU7q3iVFahsnXDuebzHYqC5PsVjzzE",
  "key37": "3hB29kwo4PTPGTzF4Vy6i3KAF4L5vikb1jcGCufC3jnA8a7wRAXxnRYyMcUc8aDwy3P7YMfu9DxKewHxZs6jLpkQ",
  "key38": "327xczJVt4ArL6uB77e3h4tzcDz975T6JFUR1tNxKfjB51tDzXcFnFJkswkg6q1UDpcXxHNT92UBqojDm5eMKqXC",
  "key39": "5w21Jh7ThioYdac8nCaK9ciAcLjVzhAY9SRU6UYfmMGcgY6XcsyYhbsaTwkuhfwiLAWHnW8hsnKjM6dJTiCVxnMe",
  "key40": "47TzNMfWJVp46GyhxzaSU4KoMMVFZpNACMck3DMw5gmmSNwvWDsbmPem8W2eUfdd4cjdYEBaVr938dU31YCqxAFp",
  "key41": "2qp3qYbpiykYBzHQRUqgT5QXZQJfrgx8goLDYsH5hE1tyREBC5ZjShS6ZnEFaXGNQEuMx5QbJkH73715QQR7Rwo3",
  "key42": "5ZPutVTSgVrroxsGgSEsrMGatfwhqHAKLZhtvkCRpJ1ctw6gyw6uN1dcFJ96KtqNa444Nf32F9wFhbr5KZMaQDPB",
  "key43": "2aU8uSNpWTUZL5QzE1SwLUweMpAriXr1ZjcAj59f8WuKHTCt9Sg823pQCFCk8V4VR2qnNy7khzAKCXpocokE3qbb",
  "key44": "fATKCGbTUZcbNSYxaP4PrHkGEiptJLFrWViwdCW9ZBxW6snZc1T5GMEim3E6uoCVU7WPsXgALm8pbS6rGDS1mXn",
  "key45": "38HAaLxkhdb6u2iGvtDn8QRnCpFNJkkwDpNDjD7k7idukEU9yr2gPiM2eJ8AkiQABwnMm8qhhMRhHNWp1RDmKpMJ",
  "key46": "5k6ZYLVa1Bhtu3tU9cfqLvBUKr29UNr378VrqrVRGq1rqiEMh1PzPTtDmA2kPHGdFVTjm2MbnuFQtaJJ2FDuKiGk",
  "key47": "2BXw4jN4c4MYJSyvxgKQyCQJ2dZ6nWsAaNZg8yzNfUajFSvNaphco3wYKAbpWQZbRA1CTcboSNbsW9uiyLtjeKCB"
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
