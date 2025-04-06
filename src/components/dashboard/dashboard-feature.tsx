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
    "3KdhJH5dtBnxBPFaSnRPiwwgyUREg1L8vZsehxoCtCftFKmvHzmLr7j6LDnwyorkuQHx4kpz2Rq2RQb8PriAKwFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63gPXzJkBoZr9AR59VDLgXFajRQ7YgX6H7LCbC4n4qft4hHX6sgck4YTJXt3t8F3PY9a1b6UJ3TAD54mEQ2yXTbZ",
  "key1": "2yrY5JNg8N2XsrXFzpSbMueUgoJnGvVdWbFUsbHFvQUz88gcczz2N4sVgKhPMKj8hebfzM6zdPUN68rVWtHYedV3",
  "key2": "3cuXrwYgMYyj4kRkB66G9dbR3hcPk1QmQ3Jr9LbMqmcUszdz9vrcyFjvprjnYDanRPZUyatdsGAf8qqxQnWBwKA5",
  "key3": "2zmS1e27bues4JhgUYuCaCWqFztKLHTgTN5Mt6T4eaeiVGMK3HPd9dhHU3qbhXEcDeyKyk2jLKuNH59EnuQxUKPK",
  "key4": "5cmDNm7tKwvF9etxyjPVRV9C4THsXPCTw6JvftNc9sBfNxbLqrbrCoZJ7RymYfZff1GvtiNJZ6WNsK5bmnyg6bKv",
  "key5": "3KYA61XQMMCFVtRthADgbFWvEK7UTL41EREmQnn9WPjVhvq86BmMcs7KXS6prKasnDvosgucxd5hgwDzG3ZTQ5DA",
  "key6": "2g63LxY1WdJj5CmGaXcJu5PiPHNw1G8xvCqGoKo2D8h8qZBY1yX2LdWTEsa8x7K6CRzQouPu9B3xFftJ7n6wWxQ6",
  "key7": "qracyW4ftPZhSbFGnr7sZi5pV6KGAUXtJYgABzbkvGZtG3oG4ksZurEK74WYVtVZqvhLNSQMVyjm1k6HoaXqTkh",
  "key8": "59cyXgdziSWgGLtYJa9iSZyxSZ5zbBcDNuAE7pSksxQmzASAYr4eCAC2HFxsH8Hj2FVTuvwFHcyDG6cfQoRmFyit",
  "key9": "4ErgSdh2YukS2xvYEACJiFQVwwQMWUyLye4XDCeThnzUawsPf5z2kMunTrG4q7F6orWWs2U7u7yv6qq5D2yz3sVW",
  "key10": "2y9WvXLhfuY4Cs5aQ9tkfyUQeE1SoPWqyPkaAKZPWtHk5bwFG154JbM2r5Sp6bmiixvpEfj4EuWub6CXW8aAk441",
  "key11": "3Mk1Bg9L2R68SJZdeEJgcyuuFkUvuJt6x5yMgev6uByENtXQPBMrATEix9V255rYkpFjPzuYas46KAHKdQeXtMnw",
  "key12": "5ykW8oo1WsJnZrrpAy6sutG4N7q5pthLaAdSKmSgco7GzVRhPxmtFtoG7CSZSiJVMwLiuMwXYPiTGfUz887isf8h",
  "key13": "2ZWhtgTFurwKQB6rzYDGrpCXtNXWvSj5dMJ2rEHwAFAfUtk7vG7qmzXcLFCTBdDuQLbnxN5bTNQ7BcWdiwFToNVX",
  "key14": "5czAtoqGL2hU54GSLE8Yqs9B1FVpbmVPckmgb9U24tyhXGigRSFkYRxDPwibeK4RQFD3ihmDwgPnS4mKtuEpSQgt",
  "key15": "2wu4uKck7hghtxumAoG4DnVGvxbrgrLRHQq6EVyy5A12oyWgxSToseY4HEenGiJed3GbaAxR68vbRVJ3kyzLfDXb",
  "key16": "2FJjoAwycLnpYJ5XgqoHJmtA26NNMhfPnjjgVmw2EpuTG9m8QncexoobxQxdYNkLc75tVhH89qHTvENdpwtE7S8D",
  "key17": "5UcCoCJyEoR26hVVY3x3c4c77SJG3fshVgcHkMctxPSimiabLLJSrAf8bWRv4wbkjG8TsLNPcJYhvK1qhGVc5jbV",
  "key18": "5V9y4zyDYAZk7zS2s7TeWctyGHvYjgthiAr9MLKmpEnGcmwcCyaMSQHsAD11xsztBsXPAxeK2Pzf7PXGQxmbsCiK",
  "key19": "3n6vuYE4F2uPD36qwFsVSmagsrLYKGWxvj4xEsaBC3ukYViZ9JXvJvPrDra8qL3A9SK3Vd3YSUe5BEZCwbAP1sWh",
  "key20": "4kGFX4sCSA5YGYfxpaajpYv6TcwtbTWPLmHmV3tqVZf6XkJw18mWpgjurJ33Jk7dwkDMrBgi8aEUMcvqb1oDLfgA",
  "key21": "51m8TvvbctmJXNLS4sVEq4XBmjxHeHoYAvwwP2jwGZjuBykpiFALsQ4gwx8x9uMhJ5B862RduwidY9pR3GPtCMax",
  "key22": "5dhfqbjs817XeW9baPBLAbcdaaoSJifPuAABcbvTMNzwUEzrrJjtZq5vuPfQCqRppQQmuYnpnNWs42RGi3hNHX3R",
  "key23": "4AKKaMYZKEr8WoVG7n5WojtP1UqWAWzeABRtVqMqv8fHoNRsqbwfxECGphFkYWMKqh8cquMMsbtE2EW4wb3wqaYv",
  "key24": "Hu3Ap9FywxxYYYDxvw3uEsg2SQxCYH6ZPjURjadeV5H2QMC7NZ5wDZZ6BCxZCHKgLTvPrYjLED2X6SgsDP5ynxX",
  "key25": "4MDEAvgzH2wwPRTBpuZU4VxN15P2S8gfFxtf2HiwopBoTZkXDaZr2GSByiUVDD1HEYuSrUeWaX8yrj1wmYuNLyEA",
  "key26": "8PW73AVdihY8K53KcWPDMLAhvNMqReLr7S2fhvYKfrxCSFAPxaZmQrJbNK9PbAhZnEUtArPEhXrBoqfgxazh5WR",
  "key27": "C5frXXUyfecCr91BUvT3Gm4teH4UPvPpUe41azbEELUqkWBV4iCCfUQqoQ3cRY1adTREbKw63osm4JXa5sYbZxQ",
  "key28": "3JJH4VJgm5Uq1jR2n3cHmmf4HwPqttLCDPqis6NTEBkUt5BCBjFypBnRXzpBxFH3oxRiQ36TQraJ7pTHfCMT6VMu"
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
