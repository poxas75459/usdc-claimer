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
    "4qCC2jsdC9LePZntpg86ANoBQMLZ9NnSaHvoLPWPegRjGefWdyvziwD5VDe1dVx87XajnL742BwwR9wK4RnZVUp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kd9TFAyewWTNUEZ18SUKD7QqFAcYkhMm5e9MGcd3zBaMTu8Tn9kvSwVVyaupM7EderMWYgtuRJPpwX8Zpi1iuuL",
  "key1": "2yBEZDJwgdte4p6bNNzfbzmtenepmTKfzVpqn94pCPApRFf8YWTDqMsMFnyjwFqi4WHKd2pceJn5sbyiU9VRM9W2",
  "key2": "4aG29fZcKnvwRd3d9qGDasXsCwULUVL78LSYZbYCeSfGYFGUGCTvT5wxqLe3znxwgkwAyMyn3LycsFRpZE5W5pcE",
  "key3": "2KDbETACz9H83XsnbtYaKnCKjiffpCDEV3KpR39e5c4jvEWhUB3phijejmVCTAkMCt2vLLe3Tbn4MLPc7FSDjBTA",
  "key4": "5H2TFLqyK4rfCdSKZww85GxcJbETcwpCJaidbCsaS34THD8UifsoU5Z71AMwfo5yhSihiY9nB3bEGmaSN6Va4u9y",
  "key5": "2TNNm5JCJe1S4JPnf5v7B13Jw9tVLX1fHt2jFdadojUEMyBrHwotSJQ8rwrTSHoaHCrVuU7pGStvVNeGajzqNa3x",
  "key6": "sEZDweEqv4PpU1qnXnWQukQZi4VKiC5FhmsjP4bVBaLc99uXdbGnayhMkEaPiBv7UpMhsEC5vXfCZ1kEj7y4VQ2",
  "key7": "4UWukXopTevsmodZzDP2CLetQBZrBAuGZsE9Yhy1FcVTpdjgqNMoKW78yruu5AXeo7Xar58okZbumdXipSravX1t",
  "key8": "3yUCKiHoQbWm8iQMJch52ABmkFTt6HgSmA29B24firvDbSauDdc1462znfQezcRKvwS19pDaKWwcqdYuxrxuMbFG",
  "key9": "oMepdZQnkJK4s6QGg9w2gfb2iEfzV5EosCk2B12cWCNaoQuGr7Hi6F7qNWUSQ7BgohYvwbn6KvecENGh4shqTmJ",
  "key10": "2Npvg86EQj27y7f3JKPRpmXMiuunW9nzsvrqxVAcqVHAzDaaHmovW8M1JH81usTa9F7bHq6vCCYHRzfyGtZ2aLw6",
  "key11": "53jeAhtzwmyq8N5iDUwkgCdPsM3zUyDk2BszPiS8mvu8Y9mXxSX2t7q8AKmMHjqABDRxWTvqLR7f6xjCJTrpEah8",
  "key12": "5KxBcMqFahc7tcx3xz9A4NcYVQ8DffpVuv7SHg91B55Fb6uw51ugkzPVFTsUEDNL397H1E74aAeh7vSz7M9HNq5r",
  "key13": "4NYZYU1ZHHo7nCXVTya1qbX2xz3Guas9Q4BeboPEXyMiFW4JKSopjKCSNWyVkCNk4JdCT1sUQvYv8bcHpqhTG5Xz",
  "key14": "2d7mFaRvZ9TCX3HQTmM6JMZVaC5stfPyZoGPaeV9ZfRfZCpWSD3Pjp1qUgRemmhgFEHmsvzqyVdihVoLqqJomCfh",
  "key15": "KpbLgKBrUiuqjVAWZn1bwBticoH5kYnYJKF5wQQA27Y7CLSK5L4Gep9CpBsVobsVSuNNBM5Vk3j6o6yZAA2L5Rk",
  "key16": "3bCgxD4zxihNrJCYGQzbVWe9bJmVhBwLWmZsMrUsvZ3SSKw87xVDzvxS6jBru8gTH882Are7pJ2AFFXDvBP7hcRD",
  "key17": "457e7cfLi6v3oT764fNkq9ZmRVaPJZrwVgkEkXTLtoiqiXLH53NMkY9qAP9UXNq2TTFM8EPKSuCLF2RvgbZsASvN",
  "key18": "ggyRZAp2GZxgSanTossfPfA6TebJG53Ltawu5ad3HxYTGYzgP4uSjV92Q7KbEcSixUUnPD69FEV2fqitXvYs4KY",
  "key19": "VMfD2rePeTopuQKBnvR4Kh8tKp3gjr3tUuwptqugxVjUgKKQFJU4seNjdHn4JU5iHpZFD7CYscDSyTihqbzMrz7",
  "key20": "9HbSAaBDodKzKoJCtCKgm65ZfZQNRzzmwwFxB9pv3h4cDtg2Q63kuHfCdKRjSPSLudEg3EAnMKroi86eQ5TmuWf",
  "key21": "2mCidaDo2BmqmcTYGMPRucxACCUJfG9tdxPCCK4e3KNU3NZADcVr73ymctMuA2si6TFfUQiWhqv8jm9o7fhpFqgJ",
  "key22": "3e4MmZtECqJaLeo4vTdgASBQrS9X2rrZR7MzcChjv1AGNcwNikn9fE7WCWyy8UGk3wesjeSUEoGCUtrrCSFNKBSn",
  "key23": "CoiLMPZd9WHonkXQcsyTaY43GuM8odmBmezSYDgdPQ5ATHqFWVyS93XTfHeoYzpYoRz3mB8tFB5ir6eaDQusfCi",
  "key24": "2Jd6nYJWkYVxXUUDMNhU2Kj6QZUKbKP8VD5pViiFTg8ecg5apsF8XAJLAw9hbQyZNTCUJo7tdwcvv8TmV7R5AJ6r",
  "key25": "4KFVDspDccKYvqd3FVtj1DUPSwoDGneFe5GGDd39Pct17bT3tiM9tRLerKhm4QFfBkSBX6jKX2GzK5T4iUACnoFc",
  "key26": "2R2z9mS8uDRbmW19j65Ddu3bpLuAqTfDeRZ2XLu73WgQEEWBRabjRvvE9CXMw6HUgeEYUmUeZzYciD2bu8y1RTo2",
  "key27": "4YKuUnnfiXgctAipgJcJYcZbh5SMcPQ3BLB7AVJKRTgGgSXqJu7GbcdT37mTNALwt3nz4rqKLV8cDeub7i6kDSiz",
  "key28": "5TYq5asPULZMN2NWNvX661aYnJDGC5QR5MqepUX8L42Xn8HL6MGdde9mHeoR915xi9R1hTVLpf7dE8As2Gjb1EYD",
  "key29": "31h4fNtEEkhhZjRTsoo7TdceU92rHi6xwV7ibQ9rudTEAJvnBY7qwdArULXp2SQJavurPTSibcCimuf6WBFYB7w5",
  "key30": "5CL88TixaZms8jUqhmfgqGRPRrX2unLZDavKHqgQaKc25aQCTNcQ2HGfNjS2dPu2guxFcSBNBJe63Q2WuqcQedVg",
  "key31": "3HYDbgU2hZASorotBqxWdsjQ2o54BdZpPcvqUdcPBst7wAeLCkSdAB3QDj9vJpEnMBJz6oKnFRN1AkRfmCWr5F1L",
  "key32": "37saNt6HEXsooZEJ3K3a4cBsjRjt4q8vb8bR9U9vR3pmxCF5GehC9RNTE4uYRmzWcVsYRDEdKVA9p2MtFjnYf8t9",
  "key33": "51gqskD12MuYHEan1EkdZ7raT9Ba8B9dQPehXnz1QnoDLK2ux627grt7seE1AWD7MSotKUA7PbGFEnwHaB3552Yy",
  "key34": "3JT8jf6ruUq54uPoHM19HhHFKGbczRoVJfGXCAzFiQaeoiPD5aGgi87LU2Eat1UqPxsAtaVj7PHti4EMKD3XNsuy",
  "key35": "55pGTr3t3NoLd9jUTGgZXeqeqUzxFDadxF5AaMw5bNmhpuUTjAqV44j4m8SPZ5A2dvcrKz2RWUhuRmQT6KenXSav",
  "key36": "4T1HVRpSETFUWuCyptjtGGVwdd99zGfqymaj5VQGefXp7fJr1Hn7zGYdWPZY4cysip6cWM4E31MiAL4d1GHuJuqy",
  "key37": "4x8WuhHUbtKt4g2XpHcjm7szzPxk3g4mHQTWSu2nLRwpdGEntNBKaATgr1hvUwjz14WuT75hi14Pze9FieB21hh1",
  "key38": "4GCTogmD1EMAaTjfUBNjMotPXuh6wtQFjzDmawZCzsK3f7Dte1XMoALNZty1WXnm2YfKU9pqFe9XD3XS5gqbUFdb",
  "key39": "5rokvGiZu15TYQj4Dpq2Qmdme4oUTQuwVMQ75DpbCCySnAMttZZaMbWQ4DUsLwesXiVnqn2Y72WzVBwZkMX4KsyQ",
  "key40": "dbWPX7wJ9ZnZohBXoBQYrcGh23zg6UTErCz7VLKa4fZdCf73u5LKr2EyGw3kSvAJAwNajV3jQerRHNJVhiXAs5S"
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
