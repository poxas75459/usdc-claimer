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
    "2XFyA1MscnKhCsv7LrPxnZtPzwcg4eGBhCazTFX1BVs6eAqgPaHg2cac1ZyJ2dzDr3sPhMqXxwRsK3jzpKyxEFaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dGG1bPGGSe9jSNhTrV6K67YMyvY5cVD2acgNcHwuu8D2GQFQdqGS5ni9dLw7WPz7obbTfzkDn46UpGHA7HLZ7BK",
  "key1": "368pK99bw9FaWL4fvAZSrSma1sM23KsvhhMxcYwzeff5uUtLgwUM2jS4fK9HG96ccv5dJzZRZkuPH3AhjUEWUEVn",
  "key2": "66nciUPJqVm1nLuFhe9hPFKXSVAHKJbraH3EACBnPgd36Kbn1US6w7ce9oVwJSGeou4226LKuvN1PQ6eqLLGKyBa",
  "key3": "2kXhu1yQZ7zJvfA1wYSMSgBQmgYq2o9Wn66womtcrqpqtDVf4j6AVsiJ85hwGZDfTamqogD2u2j7pjkkwYQmdNCF",
  "key4": "3uysFPn8APAQgiBFZKrNr2WiL1w8J7zWGpa1E9UKVh8kye89NoGjT4L74bFk3pM3et9bp4fknDggS1GcxwBdaVgY",
  "key5": "4sSoEmzw3iQky9nhbdtFkUR7y8KrbmMhWTBad2KzHVUnteh6dFk42Jh2o3Rqe2iJmMtjUKKinHuuqa1WapMwaGLX",
  "key6": "64rG9wzSz9tcirpsabvVPQzC1xTkGkCGf372NWXgGfNfARYEo7WpRfrA4VuiuENvd9FtHSTmVqDiswzReQKFpxNL",
  "key7": "2tNAGhyVxRrYKpwjBQGhtCU3bCvGngS3ud19vfYufbwdSSuneVGiFnvHM5GJQuZbF41WDx5QdKV1ivDdZSJS2y1d",
  "key8": "35j45nqUeiMrdn5y9rVnXAd5WRdDn2EyDGuJuRArkVjCn4UEX2rKvMxxXrA6UBL9DQX5FAVs2785oQiT9Gk5ACGC",
  "key9": "5wCuewGnRMig8bTPkFuV8qyu7okMKhzzFkz4HiQDTNUFX5bh3eMfSGeu6sLZK6GVRHcSGtMXNvkqXTLh6Fj7dU1B",
  "key10": "4JsfXRrU9Z39TmCw5L7jz3mbpJGpNuoHfSrcgAB1tCTEDsQqXqBnGvpEqPFJ5kgqyX9KpPgTqj7nW3nz7AoZkvwx",
  "key11": "hM1BA3nnLaqSrY8whr4KJr1PFybPKmx5oUzPwaSwKE8zGwMK4Lzzsx2T1xLS3Q5PxKe2kc6Dm1nR69c22gX5See",
  "key12": "5DvRbYdciBZY1yKQaAcWuBRtFoScoo88h3gSh4mKodvNGXR3XCkrsZv9ZdYhF8EuxEJEToH4a8nByxQhLmXDjC2U",
  "key13": "4rv93KTDpRwnHUUSoiCqCMH842Vk1bYELW16vM2ZwNqH1bw8r8DGq92Ys3jopBCyvP8G1495sfQZhUWiuEKbC5Yb",
  "key14": "4cP2uAFbAz4DAVnumEazdaVP4o5ufCxX2s9V3M61KVHMgK7zNYz6t3oaN4aHotTvMYgrzm2RwV5o6yXAYSXWNUX9",
  "key15": "3TsRDpQoBREG1zHbyGmEyViX8jeKnubdCsYifB5Z4eGeLbkx6TdT1WgYGDWyrWaLFX7Na3Ppy1zDoEP7syPvbaPM",
  "key16": "3chqNRx7GNUg8fjLQXVrBZTSrymdK1X4UUf1s3DtjH9i1e2C4YV6KdmveFpxfQhytAfMrGs5usAE69q1Yat89Pym",
  "key17": "3PgbV7nRRrw4TcX3dgxzLX6PsGkzXWWiSVDCtKUbm4jp5NpHcdYqFFEiJ1WHKTmxVXG3TnGvQehN2QvyQn4JzfgK",
  "key18": "4bdswkrwZgvvjbBVHgAFGxwDrdtW88NzwbFqASadegy7g4Rei6CPiV72YtuxkXzr7toY2tS9Y1dNKwURunEDPwTR",
  "key19": "2WiT49xkYAfUuuJ4kRN6L56jBVQBRSSUMzze27ToAchH5R8Lw9R8PBAw4gsvXSBeQgSwMFxB8ekARS4BxUYv9Qrn",
  "key20": "2KCCqs9dWtfsRMrRHNDEPzPr5H6E8tShhwq7MJMt16antuJ9Eib9FwfabgMGcJfEC4VBnmJa6iSeNUCPVRBD5e9g",
  "key21": "bUAhXgmdjwgKyTPnd9T4zrsEvmxMa3xDugDoNQ1Xyod2qbXJf3gPEXeTtDbNd5GNYkp1cgbFqnB8JVRY49BoYAE",
  "key22": "5KrnxvAd93Y9RZXcQ9N6cMxHonVXV7UeXfQ8Gu8CPSdWGRSjybR89jw1dSV8MkCc2ApTsDxBDqAzpDegwLLXfpgK",
  "key23": "nVQGBSH5L3wMFbZVj6BS2qrBSKHvFBumWnVzVc4Kd9srop7dywv2xxDKiRBKRnWJgBbFd13y7eHxwr3hoGSK2dj",
  "key24": "4Ve9vUBPkJ1QUDiEG5QNGpN7SQD3a6Z1fhpQ4LLrMK32muWjoiz9vCPqUC3rs5pEJdS4Z8ev69y6FZt54fWd9CkP",
  "key25": "3rqMAUybhEUE2RSaLu42vLX5jXrqJqPWiKyS9M4VSH56qRM7dpgdm63qZJMufUZJCU3CJUdmtrKXGgVRNEBvnJbz",
  "key26": "47AMckWkNajEoVdZihH7FxpXLPss7BJCTQ9x5z6LJpcC8Xh9JH9tUb5s8STAsL5ZfKny47ssSbZEfyQrpDMWqaob",
  "key27": "43LLJrkGzK3ssn67KPFj2LYtmZfxUcJnT2h7Xz6xVAub84PyQUnYpfJmcL8FMTW3M2Z84LPhvQ5zVxsmQVYC5Ppj",
  "key28": "bTDvn5SHbawCgUZ87Eup1EhA5G47LRdMt59A7z9EqcEb4G5DxFPR3VyZqdPvNq3nQbc1x8udBzuKzTuR5xiPUDf",
  "key29": "4S5BDYDdM1AXc958RExn3kUTPyqXGhkLCgCHM1SwzPjdDnHvbAjiqxbGsuFU4hDqjg75CJUf4DwXV1b9t3NgQBwd"
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
