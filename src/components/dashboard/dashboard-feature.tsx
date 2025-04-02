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
    "4uiLq5GymiMDWSVjJvLeCsdf32Phg7ZEA4NyTUpNgpuS86Lzuv46QwvuJDxRuPPcEBc6kJ3W4reqzSV3NB9VzMCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJaFGBFCgidxn7s2P5uPDYUNFgHKuxQTefjLnYoqAX1R8F1DSpqfW6yx3YaEP6R6HMb5s98E435ExiPp5U9QZNg",
  "key1": "3EAnLv41P9V9cMP7va8WmSyRRbtmvzguzWYStuHkJKTZgNNaUJ1Q5fbgQBjaP2hrdY17p2HSCu7Uaj37KGf3ykbp",
  "key2": "YyJsEdPfjYUZfJtEzan6i3sHTArHQJsDgJkCbp2UKoj5t7Ds8JtwbLXjgEj32PX99HGajjrP9AsHtJA1ibBfN8q",
  "key3": "3aFnpVcefS2AG3HkijfGPG6iiMwP5uACLJD3cWPbu8hn31NHTHFLLn1esZ8SKGg6webG4PDQarEpuy7X7MLTkhzu",
  "key4": "fUyYxRCMgbGPpCFbJ1bbx4uHW2sw4itLE3bNdPTrjQQWY5mmPibiDi1TrHZcLiEUyzuuLrErDDtea7rwvfnAS52",
  "key5": "2C46UAAuFdFcCRgGDQ8594xob2A8QvCCQQ57xkWkfLDzUVspZSP7Km6TFT4cQ4PJHpyvUr7X6FCg28m7auPbhYiD",
  "key6": "B9mUCNdE8N4FB2LNWXEfafpfe6uJPdpKxAo8QvcyYqMh8j72ipVnm4YhVwgzbJd4dm2LGtV1cXsmpF7RwjGbN7J",
  "key7": "2aTdzmMop5dwLUWJgrGSZzpbLKjU7DrwvmxqZXymcAWFw5MH8wtA8YjmsoA4ssS59FrWUwReyubEF1iBukzDbQjd",
  "key8": "2wx97DNFgtr7yJsXW6eqCMdeDQk6H9SZTWbn51ZkeNnBkeYcC4wPeizwchdpfqFBwoY258xLFPCeRDMvZCdHeiwV",
  "key9": "4F631n13ExcLsV6HpbJxsGTTR1e2viQ5iUrE1Sexx3KKPPfGThnDQgedBtc3XJh1Kbq689BgvVwXqY9mr1v57nuW",
  "key10": "4NYSzBadYhB91QjCVfwd6sHYpLSfrvcZKxaTANXfvyoQYuHuqEeFcVuEYHNLDtK6x8a5XhXPb4uX1wFLMkvGP7Rd",
  "key11": "4USWj5ftNfRZ5cWR6PpQjrGvhzqVi6ojgfm752hMAMtNbDK7ouD7wpGbxpZtPcL6zgMypyQPFVRFUCZotzrWEp7K",
  "key12": "25DUgkayGYKPN9poihMs6sfwjGCw968zuXRsyWfqAQckkN8gqaudvXGykEr9EYkcbST5Ya8ppZBRMkBXxx4H89tj",
  "key13": "2tT8YQXRBCvVjjNhU6puwSKuTtWLu2XUjNKtmh5EgKun1rsnGXb2LK9jU96WeTgyryddgPN496EUZwiNWrqc7jMA",
  "key14": "FMqo6p3S52cgDR8FgEYLfaegdByFMULNdmVNdiquuYcmPLwhEBP3bvcpkCg69QNo2oFhFPjaRsoFLTuoXA9oST7",
  "key15": "4C1dKTiYgH2Trs9ZJc7iJoVuRMAH2jPM8jYzsweEVcMA9ynjHmjbznswv5SG7b482X8eeVkYheq6tTerMjd7FBuY",
  "key16": "8sUecLg2HRUR18XjbE4MVaPfZ9kn21uJCiBQy58CRuxYu4xse6gwHp7BV3kDqhdTKosVAVaY7gPSLi256sfu75L",
  "key17": "5A6ZDoWprCgrj32ZNBBQvQMkFBcxtVEgr99d7qs83o4VwxQoKauc16x9FV14p8p15cjaiVDRSEQ1abVYQ59y3ZMA",
  "key18": "3QTjnsYbjRbYqWX9vY9advHabEnw7qCfW4byhR1RBewCDXj4XiJYXcQLSL7gLYSzbED3Nh8zttjkt63ZVZ15Q4UL",
  "key19": "5sB1ibmqp6Ukv1Q8D81rdLBRavZeKcCvHv51HHePnzdtQGXy3pphWfFU6kiWQDjSKcHg9MbDqUQo7cBXAQwMjn3r",
  "key20": "4oXcxE11jfDwEueuTprzkqqk8ai6a4zXgZqUKXSkKbDvPgReoZ2ft6JfrkahHDhKNdLNANCz1s6fvAzfH92AjzAp",
  "key21": "2NFEvZMLUiPCUhKDchGeayKWNQxLZ2yyvk9GwucE4ugrCTvvcPC2ahXzergzCLtBjoCshEJks2mKn3TtWpkCodNu",
  "key22": "ab3gVeC4D9KBf8v4buFudYc1qu9f9b6yEj2tzFDG2kFTuh6hvMfvoqbwfwqw59QwXhRsK8LExfTLychj1J44s8H",
  "key23": "6577hvR3r28yTC9MpyqsqwV1BxgCGTnMkPPpS6MBH5nWHz3SUUk6aWJjBxBM5hXE7FDxRSAa8RrJ8Wvj2D2fXinN",
  "key24": "DPsok3a5dFyuZW1beuUZNmVbKQcLo8EN36bepCHmEuWnhY5u9PuTTX47hJnmioAxpEESMFJs6FuwHK6jPwZr1gV",
  "key25": "2yafdPeTGjuJcHGVvzLhry8xktmwmWQirudC1pqq2bsyhvymGxtAV7aPFNrA9wEyftfxe6zUapuUZnrzzBw6EcTk",
  "key26": "22i3kEin4RFxouKXLSaSfqzXGx7b4Jcw6CKUxx74JnbdX5DQ3vT9oJXdPjvDHZ52e4PDbM1tAXiK8RsDhdgeDcJb",
  "key27": "4Uutya86dLKBcXQic2E7A1s6aagJtcHRirzU61WFbsT5Hob7BGWpebYUU7zMjujyXVdT6foWRTsLswALnRXDTgJ1",
  "key28": "24LWwhRBzK5aWqNxQSSgKTJMEUxJGcviCt4a8Ej4aQGBH5nXVA1SQre2eTBRxTELaBcja45LRXb1kf8jT3z26EsV",
  "key29": "3V4UTFCRfFEJavEU7N2uEsV2AotP3nHZRepmJtQTBdNUqcLz1BspLadnGiqRBNoEDMuRcb1vhrQX3GEJVXBLFwoc",
  "key30": "46hSW4ienEZJ98ApCQfewDqEHWcN31YgiD89mvzSom7VLiNMwxRbaY38T5U9YRsy87BWmcFzZSh7ZEi7cbciHh34",
  "key31": "oDdrYwS6qWwgErVQWdoaf8hH7uUVwnxSJ9YWLncTGegCYwHS9YoURJjtjaN9zP9NJVZexkp69rH7GWkHB2Ezwri",
  "key32": "47GNTU1iZLENgE62SjQxoUHJYxmCv7br5vjk9fs9J3urHRZgT9tBNjaVLVLfavDE3r2ELLZ1iqtmmckJ7QU9jjAy",
  "key33": "2JcmgWkMEca7isBN93LcdZkF3qj7aP4C5sV7scZAXC3sTo3Jmx8JZCkLFi7nPofayR4i2uhF2399Mr8MbFnNmMge",
  "key34": "Tg4hUVe7Ex1i57fmWVaxH6nkX4HT97PMTymX1uzy3PNhFboHe6YsKNja7PsyAtFW1SbgcW2598TqgfDaEUbhtHU",
  "key35": "2RzkEbXuu4PaXhjp9X4qXkL5sHSstTH7kGou1f76MpqdbmUG48tHAbUAgoNJ76H6nHkFSDMWJicp6WVohbuKa6YQ",
  "key36": "GB6pySmMMxNmFN4hYEXcEuZdd2zMRvB1gipLUh5hCNhb9gGN4YKVRDQjPoYDBkXpiPuhPmbgmecNtBtUpqGhPXW",
  "key37": "3kiHjiiS69r7NpCiqH2vSpVjRK2ZqPmioSi7WEhqBgncrn1vQ5xVCdCL6wH1xZPZA42zfMAxp66DfLKKw3GQRFDp",
  "key38": "H7ScqSwB2hL35k7CG2Ap2z6FL2wfZhRmzqc3wkHK7AAJ47MHvhLPcFNMt55nyYRNzrNfuNhrD62YUucGdK6pTzQ",
  "key39": "3VSXcuTay9viwXBnmYqSQEorvLZ2kE3FMptmYon6WLyJVuqm5MeKrrbbeEpzWd8NGFjBnRKVh3u1VDSXAJWdYTzy"
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
