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
    "4fFj9V9NeVWL7cmaKtUNJnhmjufCQKffZeWoowQzt8HsMP3NCiS45HP55qpWhR92H89WhWHt2Qg2yuxAzvRS9Njn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4385mDJrLNGsneonSHBWWjpUbDu3EaiSL2xUkiWsvzLd8xMiD8bc7pHQhcZSc5HuoeH2vtZJecxjbAG8yi1SNZRD",
  "key1": "2WH7yW3ZjFuea8Ca7v1PM7RxSTT2eVKA981h5D5KYPCfpsQm6CtUcScfH1TN85iuvbSpdfoDYJCXRn66WgL9ijd1",
  "key2": "3RnSTwUVsoWBTfaM2QEzUWR31oREZDUyY3gxJdzCVeMt8kJYhuZSN3YLgDM8wS2XnRkJ2aMrDRovAsctZM9wNWmA",
  "key3": "347qPZY1CtuPCF9DyfNxx6DZfRmikHFKkkehcDnALkhgUVLyowZ6UUBZdjbGpTMFqTQTWUS16TwEQRMEE5xv1MZK",
  "key4": "XRbJVS2iPbcPwepjR2pcVhmShXSZNn7N6idx3BWb1S1MA1NmPgKvVhmgCfMo6bhqTPFCjzuMPKVHiQH6jeS7P9Q",
  "key5": "fmiLFmmEhbNiKv2T7d6B3tcKiyBcVN76AM6t3vMCmAP4iXnqWA1YXzsVRFCXWC643nF782fN4CTn1HM9qmJGkuo",
  "key6": "58PkCgBTPZ9kLoqukxU4ZGoA8uRSoANMs9L57UsnQEcadwadEnR7BNHpswuDHWbU8UsJgn4DzGM7i27HHbgZzgj2",
  "key7": "2SKEYKFW9HtdCaYTWaTDfcVUi9uForPkWdqSgzsgXcgP4C2Qz98k6EofRi5crxRURmwJDPxZwaJJk2kGqsoq9bG",
  "key8": "DhL2ZajNsyXdHf899ECrreayUCfSi2bsjNcKBQpusCuckQeReAka5vxWUcXHGZ9yKnFfvQmWZw8ZCDAdNa7zWnH",
  "key9": "33HEzzxvrRP4xS9M4px6uqLvnwjknxef8uHDLoS9B2Xa4qbfLNjm7GCjxiqrqTSnsvfJDbuwsNMd5wsDKZZ4UGrv",
  "key10": "2M8xXWppfdQb77HFq1NB4psyF2VbsNAUSGMCW6nuXjnpuZ9jxFhUjCTa41nDEDoR52hw3qoXGPEor1nKxMgzrt9Q",
  "key11": "A4X9uUdijY3tr2CivDPtFHQrHy233iEMBR8yTchZQJAhSYRGywe2ceUesBg5KcghpFXFJhdUb1Rpsj7jk2V158E",
  "key12": "3UexNa9XizLvknimYzRYLkTREdJuywUT18dVUjBom4xQYdu3nnyaJAwap1ZRiEuTTXUvqdcYgyMw9snuztJn4ZbZ",
  "key13": "5bXL2qJzdVNtZdxk8oVePS58RLRHiDogFDNUJdNE1GkX83NLx2S6yDLssjdCwj4V2hSAEDpbVNBcVNdjcKqbL1DJ",
  "key14": "5N5gvMXhno3aNjGKXBbe96mC4dWD1uohWreZnDe1uqbqVDyPSB3CagTsfgbWPUzMnhoRZoUxyvr7KaeHwqEAWTKS",
  "key15": "CHefaCFogtwbbvSJ4EsXavMETTPQcHePHejmJd6qsdD52PQweYFgZgdAWSy99zFpyHhmkNh1Xi82ZyBZJvLrxaL",
  "key16": "sG3H16YUohY5G1rqYKYXRfBXkzMJ4Wds9LeXLwgnYrvTBm7YhTMcTemnZc6vzoKpHc2fzQ9CZbEuCm4jQAUmQjc",
  "key17": "4W4TGgU5QnE5BHZMiYKvGhpSAkNhHnhSkoPwiKTp8KaDD4Stgh3DhuZW5DYcSuCAr9dgyU14BY8y8JADHHXQTgfY",
  "key18": "2zQwdvzz1vzu4sELp1gPeDTBzZoQWWyRa89Ritfu83oN1uRLo96Dwc3pCJcPCFX848z7RWwdFXczJzydurgaomvL",
  "key19": "vjqut4WUdh674SvPpCtpap3vWvS2WcfiXPs9iemMnxmUAu3PQHj9czM49Xw5N3SZ6mFRkPj7iZTrZZG493wW8xR",
  "key20": "3hUSuQ6rvxRzCd3xEgMH92i4bVw2XhtirGFuWys1p4NXFaCWbXuGwH9kj9QF9gMSLfVXo8UiqHdrg9Jaa4deU1b9",
  "key21": "2zg79goYoAeGvCpE8XoeBpsv6S1f3CeZdSnSGxNS2ptLUovNz1PVAdHSQY7xhcia8PodhywcKG8F8gsMdey8NBJH",
  "key22": "5Nxreuo1Y39ktnmAepgv9Ez52Q1aqUkC9F1UhEr64ShimpbareTcVD2SPdRtyyuz8nE7A6MufdHD5UTcbW3YPQQr",
  "key23": "5K7v5w9r3QjN3s4i1sVpMQ79BneRbitVXrrgvPw97j3ue6MFs1awbtEndJB79GVkjFtUqkAv6Xp546mrvrFiy7rr",
  "key24": "2owH54cYFov7fXS1EfKVmWqBysMLJGaVdxdCNPSBWVrKmTB3kgGvgsfSSbSaXpg7ioXM8p1SF7gmstNvd1uq6iYx",
  "key25": "3NSsX94jUXvV69kYzoM8LUi2fntw2K5mPW1gGBEExuFQ7P4Rq8efLJTD1h2bCyudkeRf9HTTFtw31u9mJREZxMYF",
  "key26": "4UtvSdShyNg2fNarsY8h4faLMvRG2Z8UFrK7WJgDfUX7VE7sD7maaxHczZD5dkyndr2TeXmqUXGhtsn6jVqMH43Y",
  "key27": "FJoinVc1btuxPWmSf3xFka4vzcM5cFCUZoGa2ho38eSBUSGfLMQ2ooicmtSZWm2mMcx5m46TSav7vdGRRMnPs6p",
  "key28": "5NEPpwkD2VaUbq6hkHnv2HYK5NriTi4wuW2xcm4q78Mvp9sDFe7Aqu71FRAPZAEEcG5ity5P5MnetGTCvn46zjRT",
  "key29": "2ifvcz9YAZLrPSa1DQCugEXXxeKVVPZDAevYos2TqQia7TgK3Y8ZFpVmHxiwxRcsWfVKhcJYuB9oN3PQ45QJBK3M",
  "key30": "52NxoQjGvtwizfmaPTLpFgvaBQHM1PgRbgPNASfG2hS1XG8ztYBwwTqEVCvN8kU5VWW19FppoGZLJfgWsV69gydC",
  "key31": "5P9TzzWjDWpEUf6ZvUNWiCZ4RwpopRKZDTibBdEAdYYoYagRCSHTRhpuLfcFKMS9Sc9RouXyYEQP9nhNiLyh9oxT",
  "key32": "265T3xd7g5nHF6SctgvBV7tB2cWRYhCZ55joTQqrSfDJfokBw4Dt3ZfzqgKd5CrqMSx59bstWkztrce9iLDnw5bM",
  "key33": "pJL89hUpkKKL2t89imumuWzvshBX8SpZzevMCMw5eLCYvgzcKsPAc4ZBF4KbKQjYVtzP8zpyReQQPyaFSnRyaKF",
  "key34": "2vrveSvem2igUfcirkwvKpxDjam36BmHnqna7yMSDfHqQjaR92JuW62Ceb3QYhZnuXoz49UKSbuonsdzYHTtafLC",
  "key35": "4fUoLkjXeiT5xFBNR7B84f9pK7rDTpbsie221k6rwutzKFU5rf4yNTydQGsGB9B1PUSqcFcZo3xZ6XSNntnDpBzg",
  "key36": "5GDycCbbqNhHxDbw8caHFZFLECNYP9QdAdxwttu48DcYNBC53GLcG4WPqFVn9rpPEzEHeEVhRSLX6qWJrmQ2LbhX",
  "key37": "3H8iWDAw6P6gXrnnhXXWRxYZDYpsaN1NGFaXQA2cvCVkhFmQkWnG8fWNsm3N9zJ2Y77G1SXGAdexK44gaduyx757",
  "key38": "9DsF2MUJMyPu4FFkDsDYiwHVKTkyxaKEeNUB5tGUtKVxUxn6UoTNpopmsD3Ch9EkUBwwhCwYccsukMGgRfpazEN",
  "key39": "dMpqwGBjUd6n7skBh63aaEZ8hWrsaH6Wzbs65rFtu5r9fnD9jh91xtQkjzKdgvHTneZ3hxdo7m5Hw3NbhCFRkcg",
  "key40": "42GVSm8bYDo2Hk57UV9KUn5yv5Phr9DRxcefnHoFuUx2ic4dx87G3F4YnGbFeDiR4w2uoz4PNwnWkEBTNqg8Bz2g",
  "key41": "38QZoBg9tuHkS9uyLaYyqCsxx8nsJbYnZYrCAcbUYFAXGqrvTmC9gpnHb16w6DaDdvAczsEqQbaECrFK5qCvuFEf",
  "key42": "4ybBeZxWNTSNoFqwDCcZJSFb9vQKENdAZg1NpA96LJdPZC58XRczPTgkgiKWZ9W6sAAGJ3cCkJgGnCEU47F4yrf6",
  "key43": "5yTaoHXnx6gZD7Y6Ruo13mfxJ65S7x3sMvxAW6beSB4UaeSBMPjK3jLasGFWWkvbTB76PPMGhsE15hR1rdtiuK7B",
  "key44": "49U1zB4u6tVR1UjAEsAddG3M6MzjFDP7CbL3P9uxUDYnjeUvraXbK3sigvuCBoBBbvHxWTs4MJyCTtCr87X33ERs",
  "key45": "hH1V648HW8ZJHFjKMiGrwNaUwa8fd6cxWcpQpaPy8ZGhx5PJ7qCjs1ZxxShL7N3s1zWFfHmFxPebhVXFURViCaE",
  "key46": "4nNA39RHRwKLL2w3mMvKTniapujSuuUs1UddDucHrNJAAnpjj9xVA1NEBcoiyU3P85C22jEpFoY9yXnwJXvtiYNT",
  "key47": "4DZnB4j6A9oCZFuZypuDToPuyUGYcSMXtDWBHeNjbT4yss4GJhpDv95Tt7Pdm5SQdwDDpH8XiS8t7oaAGnr5exJ9",
  "key48": "67ypgDMUUF4eNA73dmx12pFFySgUYPeFqozWirHeGaKFVTvZXz2jvBqmwikN26mHQtGqFt5VqiDACxMqutzuSFs",
  "key49": "rYDQ9v8BU5WPHhJ8Q4nnzxmAMPs4NKRvNb6Ecj4kJQT5GHphvqEiqqDcwD2bT8eUaN4mSCRuUGFw5E8Ttvj7C6k"
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
