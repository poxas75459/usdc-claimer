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
    "48e34xYAnMpPjfgT7JBuHnspRZvcwACREFtbVC4AhrGSeF122N9WSePkkuSBPJWzt9ctD6Ne9ErA2H9EEWNvvgai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qwRo1WAGMxdNamVPWNd4PbkNGV8ETqMCEQh7mbNtNP42Ti61ffSHZLT3wvf2u9RPWm5iwbrpt7pWqniV89x3fPN",
  "key1": "3MRapvSy3UMAFNYoHZx9jmzKSCv3SNNfKny2SvoGp8v6hk8uNBv7jU6grLbETiHP3XpNkFtSQUy5bwRuV1A7YuxY",
  "key2": "37VFK1nKvUeqtZm61hMMTsZ4CmUpWoEBxWHm2eGRSdkStgDXTtGW5CXpbDeidZXGPYfpphgvkofa38v3hjcXsU1t",
  "key3": "35dJEUXS7sJvLJaTPhYooHAxs7BtmRvmTeoizseFokgzfZu8tDirsTQBUXeMSwhN1BDncaKP8jVPVPfjb7fmYJqx",
  "key4": "5Q8BZhB9MDjeAU9f2vu1dFUu46ppCXh8JMUyocJPnBLERaWQ8zBq992zhJUcJUv4TuvubAAEoi16zqBByRajBNt",
  "key5": "ftue7xLw5aKbfgDyS35gyiZ73cUDh9pkoGkgNsfBvnF1kvUpNqCqmnq74ccuLcQNCbEo1VHJvgLYuTyCWiWFbsD",
  "key6": "QWMnFWqsHXqXtLj2BURnZ9PUzL2vrdJBFtJ17cs4TVHBnp7LXPqMrpvfZJszG6w43MgnBhRwdvpJ4vTqSECZz8c",
  "key7": "2oLk4WsikW8U1DeUUm9jwHViqHMLuPLief51WAYLjuNZYU5dA9T2vQAg7H2479a57agTcY6PvTftsbLRruCVWHyX",
  "key8": "5UzJAS8NXcp7YW6pckPBDsTB7Yw41xZgMZXfFfogR89SxHYwQxeEppuUg2i2Gn6q5tVcyZTij42tL96H5z79nkpp",
  "key9": "4wmpiTd7kNQ2MA4kjhvmYx8bGcPtdCsfF5uGWyw1RdrSUCz9JAEpBwB1AjPV39WBQV99pYdk4mcWd9uMspoyYHab",
  "key10": "4tMQ7ritAhuYLrjgK6bth6t5ruk8h2fszomXu1JUTJ6Ei7otZW4hScXdXS18ZS7eSBiJNMgtMeq8BzmhpPzmPWu1",
  "key11": "4Fu5WCKBsooCBW3tLutrpE3m9vUqkQ9RWdMWcY2i1RqZsH4TC9QiaDbQHKwfazxR6UwpRnmuPE13AWBYHizqxb6h",
  "key12": "47qHrw7EnCcRXuyNrTVP2CHN3aNt4RWfRkPQpeAdr1f4EUGdpnnCvuwqSfHgrMJ3aTU9vSoDNg7PqdNpUJmEvxE4",
  "key13": "3QUXfcnT9RphPFzvq82i3LLP8gGuKfKj3nSABq58EVntAmn9aVUE46jPdWdafp66nZ3qQ1MnMyyqQHMr6EHr5uga",
  "key14": "2L5uBF8Amrw3pkFie3byeWeHpdQ2YKW2WrRwXZHL6sGo5eDPLrfu1PnfWKJdPeY2mQ3MDWM1SrSoB5ZSU76mFYyH",
  "key15": "3UwA549vYj9aj8fuUrvuLacXwzY4jAfjKoUjjB4SAgYziosz2MHiSeHDmCx2VqGhkoP7GywwvNyRqAq3QSEkdEQj",
  "key16": "22BGazDYUVczYJEX1mwVzNkXVCvK4MofieemG1VT8Y5avGbLTHfNSgTHkajTGu737KxniB2HMrtB66LUPxB8YWuD",
  "key17": "3oTE9mKKk7KXFuheZLZfoNsQ2jTjYKcktRN2Y11bmZD4FXTbYULytmffmDsaJDEn7HVMG6K21wWdWFzEHTyQbd69",
  "key18": "Tkx9RZyoBK7okutuQTYDmt5bgaDFbAQeNKGxKXUZQNbo5WpJkd5oNGs76ovwvrr8m9ZEPb3sVokdbtYpoo2RC3Q",
  "key19": "27mnkf47et3MatggaLY4GuvCNJJuizknZC7nWbwam62MCiZjiAiZGwh86eA4Fw3mEZu1MsPVmeGkbDkq8MqERKNz",
  "key20": "3qFZ8s42cTL9xaDdKrS8eXPuDrkhzyxR6nBEZQJUzbig9WRjgVykNqivJwyeWveaTNSdcnMD216pEVaGueXdjkmU",
  "key21": "Amf6yaA2bG3Ls3DxcWAmpP2TKAG1LRHN6dXfsQM2MiFC6LEsmTBq9SF4h4Q4sqmv3NFhvFLGgVnXspB6ZjEgxhk",
  "key22": "2em1hXEWdaHRMFsc8j7Vn3BgSV25SXmz617EJ86V3DJqFdo6UkCMdDhAr9DAP6Dx5ymhHBumFn9Mu8mGiwyviMwf",
  "key23": "4k8a7orF5jk3nDW576wpSTeb6WCk3JJDuLbpsMUYnmfHNoDQJBg4fB1ZANJbmzKbXVoviaBUkyWcjkfGgzcs6tZS",
  "key24": "2yURNzETYeH9PXEzxJMfZBKsV8GoZ3m4iG3ZcHtxR1MquHRieertP5yWLRD7YSgY5iiJDgu9QJNNzyiKGGZKFEeH",
  "key25": "5YwFPf8eBsmfn5mwQmnUFM1nnBATMyXuE7NqxWjFRybLjW6qUKxW4MxEsT4rraazRwaVNQ8hTkNxAW7xUgpaLdB5",
  "key26": "2puT3tVfWJiTexpz4Cr7Z6mWbV9XjMUtaYMrMrim9Y4wArMdcxqP8RjYCjik5y5gfh8iq7kh2YVSBRvG1gkuLeWg",
  "key27": "5eCPx5MgGuKor8q3ETsq7UDk61DLWN4wE6A8jBrCcEv38iDsDzffcs4LXvmL14hgUEtuQ78YzxGBr9w6xCcAUXn2",
  "key28": "4EMZWvzMB31Gzdzutd2WS4cxKEErGtW4a8sffWZcPzxCCB4mW1MfRGq2xtit5GkkZeiC1CUf5zFbBQevFRrHjaor",
  "key29": "2gAEBssN2tYuNdLnW6trdzqLfpQcqUGRMfahqHyUnFZvENkhtpa5K24QsEKgnMYDEkdcEQbL2kcoFdZvp9A2myGw",
  "key30": "4bNXj1RxVNexrBLm7HhasVwvehD79w5G3bm5DaTLLf98oKGnbArdGYXRXf5HXn7T9aM5vAD58gdDCQuLbFYGNZvF",
  "key31": "48wUKqN5zVqY2UDF27nj2dDYditHWfdDuw4dGeaH1BNBRiEWMvem6mb8mGrEejRCrzgppUu5K2K8zcwShBFFmUqd",
  "key32": "XYQBc11JKreABAVfo64GwUJ92aqcRxvU9eHvbPWwyLiFYutxPrTyNqhTe9V5S9Ytfa5yrZxxMnr8BUmcRLgmmEr",
  "key33": "49CTBMkWBxRsnTRzspFqw99BHdLP4KZTaZW64T9fGsgixLyLyR4MGCbYjthiu9FL6hutGsz7nH4igKvwDUdT6UUH",
  "key34": "3fYX6DXkA694WRXN8J3S2iKtAtBagnxLzUioTRnJX448XsWBQhomcXfnP7Tn7xe7nN3q7vVVJQ8Zw3FDwknMGRhR",
  "key35": "2xaKsk2F7JmcvDAZNS57KihhbxrFDUrFARqJNfw3g7oRNiVqKThJRMjUAL2MKwB2XZidgk53ZkKpsHmR8HQcFtgC",
  "key36": "Ak5BEYbZe4hRib7Q9iyyjjJEED6FCkHdkzY83MSiz9q3aLTQvqvqndvzQPxHcDJqsRoUkhTu1ktFN7wCPk3Pe5n",
  "key37": "5eWLu2u77ApXLrsJ918qC9gkbLMghJzumZ9vAzWqcx3V1kPE913VZM3jBVtDzPaXBWywN51ddJQwv6RufiEmBTpT",
  "key38": "2bJZNvwJU3QT2rBttLvVFjhWTFcd9QXy5uGt3zpTp6H3bZqxPHzME9KGsgfJH2bEcxzQNyxknKThfSnbAjakLsfx",
  "key39": "62ThPKHuvFGeB8yn6j9oWRa41rNKgZD9u9mNz7o4r5fBJyMafzUbJWKaW5eS6gE43nZrHthywoNFMo6wzBaYT5ZN",
  "key40": "EmXoppM5535UKew2e2kJVG6YasS5VEq7PGYF31ksrDY8bPVyPVJBwxeoLdyprzf5VupTR14bKnQDvoPy5S75usi",
  "key41": "5fzSQhFBYxuhFRem1L1j4BUNqN856AfGLdTTZXPDqoHLGkRDyDNXg8mX9m7pHyg8vAHxtP4bnhuW5ymtqsz7trLp",
  "key42": "SeLdp2hZwxzP4RW6E54dKhiEK9qxxEo8WST4hrRfGSo6y4a5svhGgsW9yfymr9CQK8sB9cW8zX7sTbjaVg5FjfL",
  "key43": "2KZYCB6Fs7p4WHhnJ34pWUFwRu1omab8pS1uvd3Mo7VR7deRVKBTVa9LcENTq1jpGxQjNXoF47WUagAPoRuyFoi5",
  "key44": "LvsyMdYdBLPo6vwEJqTcffi9PpdyUH9nJEFt3tG32CzdKeJ38opCaZvVd2r6MeV8YLmjHtVLM6uGtv16iL4N99L",
  "key45": "3WNJ53QnB9RsneAJEB2hDRaniWjvWGBii7ry13fALgPzAKWuremTnvsAq45JLWjaMy8n35beaDALD8uECsum2u2v",
  "key46": "2q7kMZ4Pbncvxhd4wkVMqWFMupRgd8dNM9Q7cG6KtENhku2jHHhJUzE3wmKwCz7X1ED6tS4prR7ecJtjYVCd4f2c"
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
