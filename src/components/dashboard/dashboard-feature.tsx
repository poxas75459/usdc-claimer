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
    "3YVJ72D75EZw56nquFy1mAuVjQ1fAoJ32CJeuDDoFc23tu4bMQ2NDysCZACm1wLfqwhdH98bbobjb3jLW1ANyWzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NrXgt9H6FgM9BaPNuaVxD3EpHvhStq3bPZdSHTAXYXHEbm21S8LzmRdkUPnX1HBM5AQ8SYLLW7rGstiT1x9rxMC",
  "key1": "buPnjHyru3drMhqTXPhyF15NCXx8Z1mkSK2VpssQGrsTfeW88eHH3GaKdT6NUweksMydWtWTUNFKvsRVHS8VCuj",
  "key2": "4VZbFsX9anoTZ95VQHMTovkmfVxqSV8CmVtxZRudBvcKfuJXzZrTVRoKrUcKUavMoMoXr9sxdZgVm2RpmwcLVhL6",
  "key3": "2D17XLetv7n2yQ9LxJDgcDUeFkpYYngbvkgo3BH7TMhu4dCu6nevHbz85ovymA26QGehLnq6rjGbaBCVZpxRKseH",
  "key4": "2zWezrgPCGt4QMHaFSCAhpzsEDxKZA4SaMjYoqef2eUKL3w6M5EPc3UZexP3m14NWu6Xv35gd1zaDHjRV5nXafta",
  "key5": "5LHEa2CcwTRBLYKSHHAUKRqQFbQNZuqxUaQH2Q86zWrLLcjEuqRUcHTovTtbwUBtuuPsVuaoTb4kTVbu71MY68Dv",
  "key6": "4J4QuJQXXQX8peQkW6ejhdcv8Dh2ssXT5SycJVedhd91m722EJwWABF2rUpPgAmvd17DKs1E4MA2omQHwBbwvgVp",
  "key7": "AbZssQ2TsbumxQ81tjSUvBjQjjML77Lv4b7fpBsLWCR7aTbETsFYLZpN2DhGcDAWXPqMpPfreLmnATrPZovu3ug",
  "key8": "63GfE9bv8AynsiELuRF6viccifhidBdVTSs3SmtZGBQwGAtyGwdJCuSY3niFSRjm6u8NGrAq3hPhhrFFiAnNUSqF",
  "key9": "5sqLU7jJHJ8VC4c9WFL8XoC5nYfqiHc3PGjx2wk8wXPqjQLzXjcdsRefU5v5snCgZ6j3YbMeZBKqG2npDhfewuf",
  "key10": "66Q6hLMSSVWEKWMa7uXnkhMfvagCX8HK2mywZhCJBtf9rhCaSo9NS9BqupfVt3y6CHkRqRcnVFP4uqqz4RH859Ft",
  "key11": "qDY7UJB7UYpPdjhj4q7UADpykA9PG1AMMn9rd1LFy2RCuEKBbmxQvS9FqouLmgmYuHPBZ2CKFviKcKLqYSvPDQp",
  "key12": "2yo75o9YYCe1eSQhfihQQ4k8QA3QR1nDSfPBTZ8fQFRypDqCrwAPj6Syy2m95vvwxP7vU37hmWKKXtEhqbga5y2N",
  "key13": "2QVKCBx3fdLSAkXfGRVA4FdPxh2MMPZagXWgZV6ka5GBGNERewx3WbXPaJ6tECZVvXp7TZTFQnpyJ2cCAVoB2z6q",
  "key14": "3GffkABpLa13RDjPRbW6471qttsv4DwGQNk9njQT6VVu1vxbZHkr4AahwzsHP28fjEWGkUPw8TJi2re7P4nGqNWk",
  "key15": "2JFX6DBiw1sd63wLB8ZB9ryLzUCrfLB9beHvf1Zuf7ykQqnEMCH13rucuyUwRmVzAKYrrL8vvHRy4sqV5SNnaPZs",
  "key16": "AmVZ2iyuxuTy2xzR27YJdJNLhvsjGBfsdmVtacKWoAFQxd8QqPMt37N1yM1b8fZF1GkzftBVegmfAFu5rRPsPWz",
  "key17": "3GeJwow1imUBgMnkPCjM27MFL2VnmWGBNgZPnjwZrJkKUgbGs4oQ5Kw6dikZGS7Pb64JfjBP1DYZ99f711xppyJo",
  "key18": "54BBZHkFkwW3RLMQJfZW2nJFp1zoJXJS3QDtXVywQ5hSzKquG5PL5T3tLCm26BUDRJALo2JvofLKVEpRgTjWNbnG",
  "key19": "42dXLCPQAox2KYsACMLQP4quSzFx3zFmb6tKJrtaW6vZfnRfgsKZeg9qZkmSCpgAf6hCPedgMX7j47jyDLZdnWYk",
  "key20": "4m7XUow2sUoGkjWjy9fdJuMcfhf6SgWrau9E177MhEUoGWQ4uRp8BQY18Kpmh5JTuBeDbRdmCKHaNuSj5uViAxaH",
  "key21": "2RniBmEzqhfuMx7BT3Nac67PaRTXyQPLN2AQETJYFZfLHg5wzX1sGQGnmn1KGPSpehfxBbbu2r9r62WMtrWP8Eqa",
  "key22": "4M6mnQuwQg9yf6GK4eFKZ7t7WTzBF8H4nuWnqHysdomercWM1Bnq2KYkGdSDB4CWgDAUwRmou8wLAK5N9PRzg7A6",
  "key23": "3NcPFwBRBKTZxbMunqwHejTF8MD56qoGhYhMGmNLasJtUMiMyZLFXez5agLkTg6kNgfYEsiLaEvW4gdekaiswVkG",
  "key24": "4cct2LMv9YUYud43UEVrVBhjAZBH9n9ZDqr5QvctNUPKwZDesWy9CMrgwo3odCwmVX6eBeMLqhESC7YdcuWBbsaH",
  "key25": "siYAbLrufJExAhYmrpbG15kMjvrP8ZjxZrCdQC9foMLAxc7jr87uj3rx3Hnnav7KtWyiJzud1vdjYPnQecyfpSs",
  "key26": "66GrtFP13TbMfBQUQFXSNUjVYNa2bfYKXud87eUQG2vGM7DP7eZ9Se2ivgsbeNL1XsXmZWB3b7NPVetZt9bHA62H",
  "key27": "2u7KuAp2asPwumenif15NveUaZf6q7Ch6jHuQFJHQY9envcYYQ1D2iXkad5Lf1UQSfKK3PRdJkUXN2wv1KjkA3jQ",
  "key28": "2trbDxDd51n9kJp3srZ6mm45FbboRpwu7veYLzaJxcVGorHQXAbqGbBGWJ357buUGYL31bGi53WcjCihTNJkSjtC",
  "key29": "257xjGanLR5ABR6LFKaUC41a5T7wiJ6kAUDKrteucP11pRcMaT6PhhKmjwuXrR7iYc9ZGPbSvBaDhjAsCw3hrceH",
  "key30": "4EyfJfcnad5qNvfY8FWto3fkzquaWyn2dsXeuD6h9W6onmsxDLqgTZiFZmESmzJNzXM9Pby2hYf3Bjhoz6t6mwYY",
  "key31": "2jtKoTAMvLSjLESeD8GWUanXAFKfxWrUMGUbqUardhh1UpXbRiPFURZHnVUF25Q8P1PbeLPiS5w7NTPAKMZVe8Nf",
  "key32": "5kYAPLKyoTQPy487N4Eyxe7dZL9XRVqVUSrUrMy1UbdKF1jL2kVQ6ghQhJSQxfXS3ES4weU6SgMzWwpvREqLtbDG",
  "key33": "2xx4NrVV94Kmq1HWS6YAvEGyEVoYFuY6Yxj2jGKpKW1GyAf8aWDGBado3N4orq5SSmSVsbC7C3a5EuUsKGf9Dj78",
  "key34": "3vEw8YtUwikp3ChaKSkZQqkGDZK6S1g6unpKR8BQH4otyNL15msuRtEWqhrvd2jfcBWvW1TTJPuRqAFvkXgwmQX2",
  "key35": "xricWb857b35n4t7fNNHLgvXvkymtX7mwC9JkXZ4DzJUv13muvGS74FbazwWc8Eh3Smu3uhCuauvpeV2k56KAuY",
  "key36": "3XC1P8WdhzbkHAwokeT9oNv2MH3CypEfVEbxtkephCtpTJmp1Ewn58gxEY9hZa9eUzDUS1Lb67d1uup68293dzaF",
  "key37": "3q81GhoF1YoTCeSWkA9vLroQvETLBHK3EYyRksab6dJw1tDcm38Y2H7yrdjBVxTjTEz8qXJZjgYh9YmKnQMVHzkm",
  "key38": "3PNBfSC3FBAkzwJr6WgAH6A46QS7Rf33H3gZQB9dxkzQuKweTcpkskEQ9Q6cBVg3uCxCT8cintFm9wRDuPNp5NMN",
  "key39": "5hohs2kMKJ75TPtiAxztwsRqYSQH8iHJbXGjJCFH4B1ZGdPfWr7h92AZC8vJmPJbSDd5DAx2eaJiiMwnxxi9Lnpw",
  "key40": "2tJHiHmThP5etaYStv4tubmGonSnEkjyW9ujBcV5qEaYcP7vQbARmKpJ1rZmVGB1C483SXRGVfimQQ3tqjiYDXKR"
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
