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
    "46G9GiAdqx8WDnjX6Rf1jsgMxEXxbUjLEYTN4nugk2DDQFtEeYDTTnHdPNZ4MjgrLccA51GLJ8UD7kzNxNNR2ByR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43N7ABWycKU27B135J6ubzEvSDgXmqcFx4akJKFYSncFJGd8J68iUB3sTNNuLaEdVrqnsXfA4CXfMVhzLCrU8Uy",
  "key1": "3s2h6u7AmkhA9yXMgZzgHjkFwHnqVi28v8hC2Bo1hpZYU9UQvyKGyDUhu7Xf5UAn7QMtxWAue6n4TrFEV6uotyqY",
  "key2": "3X2oreaz1QosYC7LGKWqN3mRiHHrAgLqPzgVnqhApomE6VVHgrqqXwvWY2XEFrvJBcMevabsAsa9tA1Z4FVT1DuM",
  "key3": "2oyVEgXXYuTNMXqDLV1e7WBxndQQbasPUiZrJ6DYU1YpenAz1BHUcTQgTiDu7p6x5fjkmaVGTDxGvLsrFpY7JNLG",
  "key4": "3V7gdYxgGRbYQELcrwwss8Dmuj9HMeQgKjr2ry8Afng2Jom4faVvaMaK7CaF18UH1vPXY6M812Foz7pGCZWmrTKv",
  "key5": "5CY9vmAXVt3Q8rVwz6kLDLK7F3y7QNBhYvEndpJ4G54sE23aEef3BLsCCr32fKCDSwEEfk67cx57H4Tag4WGoUGM",
  "key6": "4kPVMLvnspYKTE4YfWNPECTNea2LoK1ST5xMG7TBxsdLyxeCn8ZmvUQev5F8tfHoSzHVwqXkoqAyLad8MzVrFjs3",
  "key7": "54XMGwR9rbkqspzjPdNPAkZqhZDts9RrKwhp6iX9GqKmCn6TibBtseHoP1YPZKCbnoQGveQKgHr1f6cG266vXQ8Y",
  "key8": "5Fbe9vDJaEeAphAHx84opYjEYpmDBVpgMbYWi4fKHgSH4qBpooVViNJWZkx2ceiMmdJDatMCoJ7ptXgR22ZLQfYM",
  "key9": "Y6xQwz6aXpyyQhFaA6kKABawx7NBoyreXf7tnJ1SspHJWHCFmFUEG4LxJmG3TPJFjkneSYhViVPvPnSeGZygNHZ",
  "key10": "3oyEGEAxQt1vF2dSseDcRch6usaBDLQVt2ChVLNhuuJYUwhtfxvbXiUGFuRfJ7zf2vWoY5g2xBVihf4SxEKGFSYh",
  "key11": "38JQqFoH6xFq9PxvU12siPsa41KjZbTzAPwbcoumbccXocnZVrWMnKXhbitXAucjZJ4WAH9zV2dv49TS9PsWoEN1",
  "key12": "25nj58Q4fDMXoaAdWGkDZqk7uVuURHREoZsUjFcDPpx1bYeQbSbkKKzeHw9jsnkdCcEew7iKGoeiqmpWEjL6Cut7",
  "key13": "59gh55nWoWidvMmowEX11bk7kkd1akCY1UHYL5iUj7DDTftb8MmqygLd3gdL2H6J1CpbUzZf37aTKfJwXLNfW3eE",
  "key14": "22b7GZD3bbu9A4vhfSXxwu1xfAZCsuhcqkPEUpjgxSd9Tbqt4qJPbfkYUcxcDoB1tXxeaJCmqEbCvHTcisrPmM5n",
  "key15": "5NiGVmYkfRgDdJNT4VMUfiDgnXjLNggS4wQtopjPBXxGZZaWvMXbuBPNgGeT7KHAiaG5au6YYMWJRVZ4qQZ4pKUe",
  "key16": "4kfcniqsZ3GZ9TnyYoQHuCpmpDKbyWdUp2M7azUMp7ZBeaWzbF7NWkZDhQcoDdSEQrSxHLeNQK4akHfrbcASZZsR",
  "key17": "3EeS6LRs1zQvNNKb2dgTRSFRZGBcu1rjuXsABVyYHtrtW2YzMTQCRjmxw8ZU8DndUx64hjUjHsN6RC7fG6xsyhFN",
  "key18": "3kDJrdKdXX3tc6MbiDaSzL69PE5sNM1CmzPtA4ooH9pDJWSGUEUBbYxchRwTvkwm8Kh17ygfYvGN8ZVfqxVkYakJ",
  "key19": "2cSumQvxb8gDFufJSmV2epYaBYiJ3jrDQ9idhsjsL6zfhsHDbkE3khdjnqseP4bW1Vw9TBFmHmdLtih4XQ2kwqRy",
  "key20": "2jxgfqDMyuRERjzBJfzTF7b3bqsYRFtcucyghRubcvizqxAP5S53S3a3rhZ3GWeo5jEKyM5k66yYjX2oaxKt5B3D",
  "key21": "QxY7sCxqhqJueqnqhzA9JZ7A5oyP8JSs4ePXb8TLkx6xuYK8YPgGD7Sd5hUfodZciQ72UDwQuQCz3oKqckMC8oW",
  "key22": "319FoYbUGwEGA4h27pXVTCqccKKETLRWR4mFAfbt6CmhquFP6hCbjSLwcBuyni2rjBcoBbvQCpKCrHrdBeBX4UsC",
  "key23": "37KDCsDS2mqbKbFBiZ4E4ptdeuNpzCVit8KBpUuKudNGwziouF9obtoUBomJ8cTEchzB8mNrMsb62o2MepgMqzin",
  "key24": "5ZM6QfJwkRKiiVLS2J75FfpNjdVUWhD5L22ZbbX9fA22y4FR86SfVY6gLPzeYi9zxmzJKYtwwPv8ojGdY23zbT7b",
  "key25": "2dbb9Cb2iD1sMPhyqM9A3kseHyhomd8cUmPTTYi9T3XyPMU6VGKwgTbYkntWnutsU9RTiEmTGVnrHeheHx6Rh8yx",
  "key26": "4Xa4iVCAZssNmFTpFsgSMD7dwtcvhJ7sk6waWDjHyTxiZg84AkGZ8vofeNsFi88FXYXYUKEXW8YMt8CYWCnVP6Gk",
  "key27": "4ygYjAbm8SiLP56XsjFM62p9Bz4dTHMjjta7TTs1LdXdZTz9R6emcrFbgJvEzZANnJinQEDe6F5QGoHyf4nDDz2V",
  "key28": "3XuzsXptEtLtCzVMfGdBNGtjnQEqu4tpZhUcfKsWEw2SqcUEJnifyf8aauMWsEcRqEQ2TJ6hDmJzJBL758D46jcu",
  "key29": "5ZuppxgtaJYZ4VKQ5DZJoFCqPdU31cbWtPVU1jSq6opDKnte2XBXcELTyonSnShUYaCW9hsfd58Evx2KpZceST4s",
  "key30": "xGuw45mXj46FWdFX5TirpeuGSTWHJsMM19HiXyG7xth9iqp8BhRcq61eTf9eYJD8nsWRTgDhyMQStGcq8toM7F1",
  "key31": "4Niz43f3o9bYmBhU8NcTTnZssQTHHa7GkQArcRLMHZBcdkFPCnrFvtPMjn6ESrBZbg8iJcCwK5qTLER7nPD2tzUU",
  "key32": "5kzD93GsT8oqHF4kdNiNbhdvhQGYPS8Prpv9g8tAKED31FY74WGfBwtQeWCH7JdbuU3XeVSxQJsYsFpNWwAakZoE",
  "key33": "2dXLd3FGTK14rbDkSRmbEc2yV4Ghr8XptTiN8ioWp5RKugSkhWP44gzLG2yhUYrfssYTZTygLxi5meyQiSr8A5Ar",
  "key34": "conES156vDAUYtwqNw7DTd4B5yz3Qys61obJGqB8or9PDhg41wzbVHPkjRZ27eTX75FHNRMvbfL42AKnB2UEBNY",
  "key35": "2v1jao6Yg4tFgBR3vC5GuCzy38UHQ2YWDjkh6Y1UmMut7HfTACYkrTy7ZQwPM8VXcnAty2ohMo3NRMicy3orVXwY",
  "key36": "4y8JVegSLmNyxZEqsQpcTYj26cvoRjH1TrdSbgSBKUvj4g5yMAACx8gHn8jBdHtZGXDW33AZ9P55ztF31HehM8hR",
  "key37": "3cZbYjkG8CMLTAEf7UDWYTteNNP8tS6nbrXgyrzrX7TSrxfzA85NdwhUEc2CCqp1buKDocbFbSKAhppowYzaDjZw",
  "key38": "5EFEqVZiBxjNs6KZeYfUB4UzUaUpDUN9T3DschrPAxsqgj6tzEekPuzrJhxVDw2MV4ABUnjpmd1GpomGa4bthTHH",
  "key39": "3rYLodoJVxiynmWxFbsAJFPSvfNAqN3VPeZ7cmqZ5wUxu6mGTx987xxGbYFptPAFKS2ToGPxDJWFe9ewY4BbUGZw",
  "key40": "5vFLAFXR37YyXnTmejQwQw8AjKLa5kaW982xSuKCeXmFXTdvjQBSN6f736zwvVyoP5iEWR3YBtGoR6weELn2s5v8",
  "key41": "2W7AiLTneCkHSTNe37ui5ZgbRYcSJZeVEat6C8w1SX7XrFzmQonNqtu6SJEW2gAuZbksrfDgAzCRE1R4aBrDSTDn",
  "key42": "3uzMXD9G3Uw8sxb8DDTBw3vCWv4riPRPdi4rURrgjaxnamMu7ZEJfshvijrKMdUy671LeHMr7ztPm3ryYMGzBYRq",
  "key43": "3DNkdCQwcT7jJFitNKWwZUXbGtZReF4KdYJuLrDo98UJjRE8AZj3VjydgJJb1mXK9vnztsb5AwZP1dQ9tzqNNNE"
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
