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
    "Vxn15v72PE9Eoj1GXJUkmMyX6kFU9LEGa2DxKZmuEZtWaA45Dw6icUcxuuYEjzHTjN43FuenVggwRgM8xTMNAHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wjf5agAgTHRVvyNJSREqZBCgPLEPmM7ZcqnoJoVcx3iCMaqSrue6HawrC6MWQLTACcz4u31ia6fy37do6rEnkcD",
  "key1": "3ozVr3YQERkFHj5Jw92R73TR42UhLkhUmK2yvBVScb4oCjSm7CHomUAm2dCEHdCsXZGtvzN1bXa6CC5bhbkB2D4B",
  "key2": "36GFpUNSG7otq4GhKS3TU7GJ9sQrN91PPHgmSFLvt3nU1Wwff9PRyZH45N8jidv4vDMZCHWRFu9XTKwKsL6PcYBo",
  "key3": "9QefeJKArrEoZ6DdqzAUbvzmeqFkwcGiH1FJgjWtF3Cwdbof1EnbB5s6xPvUrnLkk7PuL523vbV3ZFVf87K6zJ2",
  "key4": "5iu6UT9byUcRF9oKDrdyvNejTg4qu7e6p2Litico4XoDTfM23pgcqGrUMD3v6i8ZN3fsDTzPFfZsCKAYF4qZUswL",
  "key5": "pJ6bGwccVPANZjLCZNVGffw234UtobJEt6YZcBuZyoeaz6BSWEiSfPig4bXevYqEE77wL4Bjb6uaekL98jBjwEH",
  "key6": "5EFfKWJeyMYxkACRSYQDjmM18yFwuBJYWG4TNmB6ZH2sqBQMG94CUNjHM3jKzgfAvq8bDn7E9eHo1dNmC23RH13a",
  "key7": "5kis9Uxhf1EcTShpwghwm17eURAgSqEjMobcZxi3KjCnSqScNRUFW1BkNp7PGntBdJbGWyrwgjBQnFtcXeB6MpL8",
  "key8": "2KMJz8heXK64ztHeuJ5igYBe8AxQzoKdy5z6igw8NXTGJDAThDq5bCpwCmVLC3F5N1N2H6dyh2unS6fVSL9Kydpa",
  "key9": "54RAFyeZSpLYY1UWAHhVGe4mJ3DpSiSeixVcnBgpZifrTmAjgEVsPWeReZAmRuKxiqajGuKVaeprB6a9ZHgsGgae",
  "key10": "5zV2T916BeQo7CKJGp52ibh5YwQ6QfE3qop3nh3SGUtJwtkWxXHpZevGTxbpHdkRgbGF3CDEyfGrtoW3eGKQTR8F",
  "key11": "4Z6cCW4Nrb8NzmpAFqAdMryxcLvZeyLeXAJRAmdVrnxbiRAFXY4ZbmgPNYLbGepYpsyAwfAf1FYWFygWKCcw7S6e",
  "key12": "5eHhEzWnG1oAGV82i9RPwpQfAGodESf2FXKmGGPtj3RTK6qVKo36LYdZQynJANusDeQPK8xwUcVzHN3agiDf2f8j",
  "key13": "59xJurvPkMJXxov9VQcQDrNQaauFxSvUhL8vPHNAy9yhWCrVQ8iHtLUnQFpB8FstQVcEs48PLss4UmcjygaGGCtj",
  "key14": "uD5F72wq5ojaVAzdbw964JgNDQUBqKGM6RB1GQfbGvCkteez31aVhe61nhYuoPKMvVGrV1EcKjfWgLnWeYFqwaS",
  "key15": "5jrovonsM7vUe25ZPt8HwkMbQvBBMxS2FDzMVJETjeqd3WgVj9qifuccXVPc2YCCNFRTJbxYVXFEyjEEPppBQEeg",
  "key16": "5HAkxgE5KhMobNEgmLdsLdYctdtdzfnSQVNtg5eEJ6mmRLPvz3BMucaWzQWgvgcGj7oPV2F4SfQ7yn2wacY2sPKn",
  "key17": "5JNw2ertwateX8MxAYm1GhL1uZEMz2hfCfg8iso2HzRi45M6JJyu2HfJcieuTxV7jDQ68sqr6pPsgPvPFeNVm163",
  "key18": "4X8C2yJHLpf5FSeVoVqrf3aZiDbZfzQuK4yvTQXCSNAZP19CHxFvq1uzUPuH4yY2vNy6egW2ouiVHAMkZy7dz7nG",
  "key19": "2Q4dubYDevRmATd4HUhTiSABNm1edTt1wnjDQL1PHyDGx55j1YJYi4URmt8xce9QGmpdT1xUJGZsvu3RfuTA5Sro",
  "key20": "355dAfARuVunS3Z51TAqTgZkotSrUyMZSvy5ATdMKnteLtdqpmWyzV79GfYHKgSN4B7VyeJMFiiRmbVvnmADckZh",
  "key21": "RVM58rq2gDcZ59dZusobNyp6gKQadZUK1MtFA6pPfhk1YeeEcP69m7cx9EPA779SsF23rGBAyozGYSxfeeT3L6J",
  "key22": "5rXT8ggekwafi3HHkVnijh9H5KDeSBTYpwKkfZRqANX6X5iPzE8qJ1YEmrdceYiJu2ZKahhyc7KZCRdmGdcExEeR",
  "key23": "3EEXmviXoj7ki4fBg48AXiMAEgzFBbESmPTK7hBFExqifVHTGTX6xX8KmM5qfmaRZwXL1YpdXW1VMu8sjrP5c2Gg",
  "key24": "NBm8jAbJy5bxjKCVdNCQKpVzcNUV9hCiWMMGQRwYcxnMfyJV47uLCorVWptjPsvNBEyM3vYXyVPMjfSxEBAQcqe",
  "key25": "557U3FYY3q8VHUqYJLaSjFBXTnSmgymWZC1SgGBUXqob7caTDF88133HQrvvtoD3mPp53e8uHy6QSXwu32BCzvGv",
  "key26": "5YautWfaAvyMUarPS1MucqeA45hPtyoseJWGDCYaNPqCSEfDPTPbZmGkp9AihXRv9bgxFyWMFFMwP5JHctryRA5L",
  "key27": "3TMBjNEiWQX8QqfJ4JuZGdut17H4EV5TABv1onDmWNBgKmpk1jF8uvma5Ake9fa8aiiJdyNw3NyDFJbRmMPah3ta",
  "key28": "5534CHG8EhMsFY9e4CLpzfXszJ8NmgK4985UjEo2sykWK649b7PLEWZjYqnsJCGuEXC1Zm8KCkhU4Q5gYoD653pK",
  "key29": "3k6f9Wq53m4RZugBpPA7RXEvFHMbXStwBhRHHfYn9SAPXYPb4GkXAHmLauLmxAJ4vVmiLU9HP8Efifc3zCrPPr9v",
  "key30": "HNKBdsb5T5f66yigyJqHqewGo4cikrWh64XYjWDrWB24uzEYGjzokfv1g8qnKZgSSVo1J9QLdpP71ZRorY9Au1A",
  "key31": "5SejVVb3E89kwaETpjDGCx7MyCvxYDmjMVNUSt2PHbX7vyPiNLbg6oB3AEK9oYJZTWfsgjmswhJFBhQ6eQWvuJvc",
  "key32": "5r2pQo4oX3K9b3MshVoytBm1gTFhYWyN7g3VhJMjVCQjwst3T78CDKNPzxzUtxsHJ1xq5Ynp1deEM47F3MxDzWL6",
  "key33": "5f5ti8zmVSt9H62f9is6B63ohzcm3a6PELv9YExLH7qeapnz9vT4tpHU5X6Z3xNcj1mKbXgfTfkemQL6EbPZr5BK",
  "key34": "64WVjijenuG1n4Uhit9UEjEjidgvREYLfSvWrAL8Cywj4JvJGQGKprbHVLrWTXYNx4UuWSBfLTznGgUjEtWzqpXw",
  "key35": "27dRwVc4524KQuGUTFiG9QGMR76qXZT8AHWAUKpGr2Fj4J8YX5waTLvxRF7HWSf8Ba71z9Ape1dCxr2rcBRiKWPf",
  "key36": "Cb7AqNdw8y4j5aq9wSEEXZTRQ5uBBg9BFaxAiBW5dyAYCsPaRPmNM64t6hbwKoibqTGhed4cCgv1vTKqzfKYBXZ",
  "key37": "3vdvfL3D6pBAJyQGkcWGPBDXQg9YY16SbdhMapPzy9ECne8RttcBSKHcLcpwSvE9K2NnB5mzgWNXKpYdwtmhHLT7",
  "key38": "25qiXVykpSjV4sWUh3JvyW2seuJnCNYcwtS26jMRGLgpRJfFSEg9M3NfGasvAPpSs4NN3n3o2hQGzWCJgUKFWUpF",
  "key39": "5RUJC5mdo3NEb8WViwaor833jyxjNVH2qB66CmmLwj5cVRiLM58tvL4vUYQAfEobj23UYVa8hQNdtBw9SESBDNeE",
  "key40": "56JNxvsyz84ZxPtw1k6ftbHxLeWSsZAFjWDxhNXSQMhBavYyfNGr1BSPyDC4mxUZWXzt79fnusZD7yW7kCTsvx6T",
  "key41": "4moDaut9sxXufQnHQbuYNHhtQJTmDQDBE5s2ZSj2ytkLSU1ss9d3pq4R1he4b5LCMC1f3VbfuaiGCZ5o87dg1GnS",
  "key42": "5he2hVQqdCmTRwNWuQr27doBQ5vxRV6BDkAWxtsVnjBJQs1F6zGcfmkrjuMsayebfJoSJyKJK6CaqWB4J6HbdQuS",
  "key43": "2YZVwJntyZ769EqvKhkuWjFhuuJ4iEWFXSanSwEThtwWpsvk6y62E2mpB8ibwduSDUjN75p7wexiWXTRDiBQpb5V"
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
