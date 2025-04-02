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
    "49SrYchEXaZfeqGncwNXtdoVDGU6XqHUuxnETCkRosGR45rq6GM8u9vBFsJQ6QmeUQ87pXZqGq5PuAEBuGBnN3WL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xM2PHwUAZUhALows5i68wP3rrMyZU935py3FKnged3DciBZZHQCW25KihiaTgAbJkEaoBotpDcP1NrHssUCigdd",
  "key1": "27K6wwoE1dcX6c1Q7nENYjnXG6UU8aWg4KwugTG8iAq9uXFQASfzSLYFWm6vkHwpCjVFc5B4Q7twXLNufbsquM7E",
  "key2": "z4wNpuS5L7ud1CTNA5wxr2eGcVqdgX6VMviSdAiwtLtcKGyoVkM9MPoyxuG1vaZ3dFacKbta2fN4n5MBuyR6Y3J",
  "key3": "uqupSSoLQs4Lu5WTmhm2HqUxkWh8dmJ9R78veKfNmSqg8gBu7j9nEaDkf6GxnMHH6qtmh6KpZs47n7YuseRgfdV",
  "key4": "4zbbfDpjTdiQ6sWdb58DNyV8iTiUqyijHGH8TxmXHifezjVW7Y3hRKHw16DGrwPEYCXdTYg1sSLtgLq1ZBSFum9W",
  "key5": "4GcPkeqN6uBkm5CEWutE642kYqsoEYy1eLKQ8uo5Eh69eJNPWoSWWmQeajWPn3esX6WoLMAQrrGbh6g88pGfdRPe",
  "key6": "fsSeJZBXuVE1gDUtAbBTxSUN9e6JYTAtZNgMuffMYjcSrQys8S2soD5Z8P1HCGkuguz3sCB9U5ksoBEe86vVP7s",
  "key7": "PfLD9goayPTfuvJfGDqi5Vuy77Ehq52SEzVhschFhxPRPFyhreHHRMHvzVxGTyfas7b7tmkCAF1s69fhC7hFhf6",
  "key8": "5igUUEEHFATVMq1tht5fDfbZLw61dre31MYc46o7eud7i6bYAQq2dEANk7LQT7ynQb9XwiXu73nEKsDFyxfXRNMn",
  "key9": "GUDcGzmxyarkTahhnfGbm8i7xwnpJ4X9gndjd9R1o43ifZC3vCi7XLYmxAqfN6fnqGHnmik46K4VQNWm8dcxpah",
  "key10": "5wpswPzq7FC43VPi6JLPDu1isjqRAvWEy7K6wDSY74fc8tjHjaHwYZbRFxjgNfsnD4YPD4Doomwd6T9Bws5b3sQ5",
  "key11": "3dyvBRZezxRarXqw2bqF3HnKjNTvWUMXJoJqcvD97BPepBMHr6BUmcNShD6CWs3sbrhdwp435NKxw7MMejYuvXue",
  "key12": "5cLv3BpTuGRJeDyiccqgbnk5c6mppdG2Jcf6tGwauaBdFufeFsQRgDUqyPzkojHkb6QK525VcLxtAEPx9j3sKYbQ",
  "key13": "Ko4h1wyx7R1UoGPBGCKYhmhrkz8Ua7dsKtza9KeNtTRgxeuJRNcULhUkJZmMcQFgKywRZ7C5qz2bsquXexiUxNE",
  "key14": "2YG8Vhn4uykDGesFViA2p1fbHB2vrfo3J9Y9t7HhsyeafQDtTaoBjvFwrkGvWpafx6V8YzgVGxkKf2WpnJWDzRw6",
  "key15": "3J55tAKzKLcBjtJL8S87wK8NEnKKyo4sXTorhhVDuEKdo6iCmV83obgL9M32kXvfJHtuLssGseFL2ZwkGLXoyvC5",
  "key16": "3ofFSVMTNieL9E7w1JUhevcHbgAFar8yzWzwDaQNdgKSGjcGvhw5EC5ot2rTqvcp9GLAuEjffT1KKmFLhgCNwPc8",
  "key17": "5AQTBZrvoa5RaX9u5wCTGWfoEiDo4SMMn7m7pAmb7KbpBv4cMkw9uETJQaGVVRaz1ZZSzZoYNq69qe1xkmgpGKQH",
  "key18": "41Abo2eZrNh1eZDm8WCZZSj9XfsT7wGnyfPpSjvsKYUrwnS298BJvH2SRXSo8nrQ6UGtrBeJ9dYAu8fRPJfyEFqm",
  "key19": "5Q3tXGNbHRRJjPBaouiYmpLLuZ9bp6PPQRDFBZzRczNgRkEhGYR6egJQ9nXhwH6WW9kij2r89DzaASqNdm8tPsi",
  "key20": "F298DdDTPgJjkiLpuYjASMfETcypbXpwbMnY97xaWLj6ciRobfBS5nqPNo8PdVQS9XTSExHWL2gecokSfcFK92E",
  "key21": "36Q8hzvxaXPupa6bGiQ4oC4Jgd2mSAMft5HWt4NmaN92ieCNaC81wP4qRyWv57ygBmV6m67AqYu8jex9oxvaioeD",
  "key22": "2XyadYPqNTjTfon1CBNZuoJj8QzoZdJFbkuBJfZBZjYCcSxhPbe5je8pyiRht6j1uQX7V2ZhHgYvAX1tVJiPMFKZ",
  "key23": "4Av2m6fNyXXFHRwiVsS73CMs6Fq4AzCLbKc1UTGMZJHdYbEWxi1Z1y9utr3DBW217PRBYmJ39YJJnoeF5F5JviRU",
  "key24": "4KHYa9zjwmfCfJW3E3U6evY2Zca6V61RzQz9uDiTswAWVAEVcedE9dEXSYTNPn4EJ437oTLooitzJc114D2QUH1Y",
  "key25": "5HEpfJeNLJ5fzG1KJKeWYWJ33erNBVUciowuLP2hfVep5HyTFzzHh8XZ2VhbaN3bMWZsi9vppEWZMgVrni16i6wn",
  "key26": "3vGRK7rJPNzw4TP3aCZCxbX4uSUbAQ6eV4gX7AXUD6knYP8uAZq1SwfPsZbncd1rnqPMvkmEzqATHhb95B2egaxK",
  "key27": "5DqvhBgs9kz8iJeBuzCem2xuzHSzAwkRvD8LVUxdU7yXTbfaYLHZYNerGcZQkATxZCrGQ1qH7QXinDzFbEc3Zd9G",
  "key28": "2jDZ5UubCyvQPUTxcHMjgwbRmLtUmxogRTpSZ2QjWtwFgnLi9xNsLETTu9Gn44yrhZM568ZhfKNXA3tSm6b8jPLW",
  "key29": "3iMzVC2RUQFigj3Au1Fh4LfcVnjWD5zye3gLPndcPNKKNgkQBNkBMKN81bgETekzzRq7sfcvmNFrxYGsSrGJQDfz",
  "key30": "2shp2CvYAzu7WM2tLrEiTBHEZLVB3Q3zaTapnBA7pDST9LGwo2NwWT52uR97d8BxKY675GWxgxbpB7bMC5ocHkKN",
  "key31": "RM1EeDBC83oQ5j87oCumAPN2QU4aMB99mBKMFfQReJ6nZSEuVmKMRK6VnfujeWVTmbB9nebLKEwQLgDr39Af6YP",
  "key32": "8hHFNNSKS7dQm2PMidwNLtf252ZSRKW21bmTfMeUDMXj6WA2zSWkDD9VFkorTRb2M6ZkYyiNNfKg5dyJPwEEGfo",
  "key33": "46QqHGUUitXGk7dHWBR9HBdBjpKo9gwFZZhsFjsSYCbWxTYEre7158mr91cfDaBuhs83Q5UAuH7ePoPV4SsVKDB5",
  "key34": "4rnQzcBRFitgmxBSxxQYMuDWNtLemyz7Jdvib3J3kGDe4nVxaZn9wRNrHAWB44jmmf561zf4M5YXwXobxXEioLfg",
  "key35": "4nKN6V8AJMAcRcENXQPzTgBfS9FyAvd6NHWxhpc12ua2SHNEJ7Pqhh6e5S35J6ouwc31nNxnv5YRPzuSQqmeJgqt",
  "key36": "33Xy7CA6rmwZpxWnn3kAPaxvXyd3iWfhc4vaHrWytRegPuxS9dC5yuUxdjGB11r4shvtGVNGqfydyJhJi6QQrY1f",
  "key37": "3uysuFW2858rZEPF3Rxpew3ZCjPHiDyJVQo5tC73f6HKBuSkp67HHPPxQnpKHM9VVDoWCTUj1Yrb4n1zQXDgr5HX",
  "key38": "3RKcPoJ4P8B5vsphA6PTPp5vH6TFpy4bPDsLmNfd8FZ6i5QqNSm1m6upuM6Nm3MYNBa43FWg1ijpemma2vvk3bXU",
  "key39": "4hP4EaTFzZ6iUzvkiDtHB3cX3fwUYq7LduFCyVQMyxwa8ZaFS9eYZ9A4T1aKnBUro1jhSbeBEwFtKyUzxxHuh7n3",
  "key40": "5HySnrBuRtkrQL64UxqJDgYK6WAVyGX9AtXZ7fKJsCZiNJZFUa1SoB3LqECHoJSuisUC8a6GdSX3RiVX6VVr48qY",
  "key41": "5bTdhHTLzFQncpZ6hnwzDQZXcxFm6rwN75jduhU1K7DggCNSzMh5jFic5txgUQ6CE8q5p9pS464FsPNqqWhxY4gz",
  "key42": "2181ZUyhdQGLrBF5WbMU7QFw7RkpVu4HwUhKyzZeru7UFTPbiUzhkf4rC5ao3Sq4vtgMHo6Eq4Bqb9M5xDv1G3i7",
  "key43": "4VE9sMU4hfhuUdJHYTVSSnw6kUz3U25uEugXZLs23RzJBqAyaP6JsE6ukC9vQbnt8bAacMTed9K9cReq1ALduw2Q",
  "key44": "4cXBfMG6STDy51xxckeDQ4y8S1AadtsdjDBqu6irGbjngaWuvDNbr7a85gqBi38orFKrf7w7S8MEBYajyVuxKT1k",
  "key45": "3cvkPtyszmmuMAag6vkK4LAMYDLz2oVFoQkLEKwNNFmzBZdR53inbkm29p1Fq5HBiBvbFdz7WeWou1mJsSVfon7M",
  "key46": "3tdeDF2xgjXqgxRcCEoJdVPdBX1DkpFk1PgJZs3Wrc3Z9c2C525NrTPShoMb5LZaXv1SauWjGwzduJQ6uzk5md9t",
  "key47": "4awB16kNZ5Y6RueGzJcTvtZSKBLFMm33bWTxgxMV3TExj7qu9Ebhb7dNGJXx8VfomjMFd7qYpFfCrWF8dw2BZBY4"
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
