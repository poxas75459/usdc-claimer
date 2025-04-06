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
    "44x6tDPnRjnduyNdun3sJQwxQo8Q59ztBqkXbrbsuMs4yuK4V5TUJxV79qCkhPMq1iTiSrU185d7MMShYBNRyYeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQ9xBjo4PtmgUmJf7idfPJ7voYh5MqeFxYD7TTeGV2DzK9Yi2fgwSiZ532osqNsHThkFYQA1nh4c9bWQknnrX27",
  "key1": "4QUq2GtM7xuYtcFNWvxYPeHDD6DNT5t4VC1HfcBuQnnFoAayHqJU16FjE3GwS2rYSsJNMnLrr3Ww397bBA6Hxs7Q",
  "key2": "5CVo9v7M9AJ2E7QrBTxHKzHy1qogMdmfNXHqfFZB4ZtU47djnzH5bg1je74fhXqhjusMFddRuEz97Ze9YdNHiS8c",
  "key3": "4g4vkEoAndLyG5Cj1ybRPWHdi5AJaA5MW8Z7mj1gK5ufvCYEZuBqRJ461WjxWrYEiWwQPvZzqvmshzn2RAjESKfK",
  "key4": "3LUnPfLrgy1ZLNvjeTYx8FPUYnRyJ34yn4jcjNHRDQrwSzpMk1x1Vm4c7pRvfGrtK8b7knWm8LKKUYjocCrWwqbe",
  "key5": "abe2uxNY8LLgjFa3QrmrBgfUsEkXqiCuZ5LYrfLduvjcnP9ntjV1UNg29kgmnNhFvQmSdbC7w42GUGwZxPXLBfw",
  "key6": "2yjyS65h1bYmAKyq1VC8pcrJtKoSEBuoXpFL7HgDQQfgjhVqRzjjn2sdzxiVAc3RRUzhAm8vkuMzq4PR4MQVoGqp",
  "key7": "4MktBTATkZpWsqLjxvh7qde9ot87aTqA6g2eoqLQFULEbzr2BhwKao6QCzys87j6fQF95nxvGmBpQ6wQAvZdF6wi",
  "key8": "2kFAQaw5NrsiFLetvv2SQMpCuBMUDtMKaKzCDS5W4Abxjak8uFU5DAXTxuiMLyTNr3rWY4fAMF2K7yswEVfKJMfN",
  "key9": "2g2nxhQVE5FVrkrvdtLjsMpHh6eC8ryW3BXgjdq8JFXPxCz8Jhj7MEpn4nDodvm5CF9xBy5o4nDUgj3bnoahHqys",
  "key10": "2hqDaCGbHyBoGwQBaakoxqCexHVpqj6aFhQr2ebUyxyBvLt7Y1P3ec6mZbP4c2qt6LeiXSC7FMav9ibRSVZyHEje",
  "key11": "4rnweuaeqox8jNUnEARsu3xTk67PMmCf16GqdkWTDQrtw2zqFPQuFRoiADWfjSXBoQdkQF7YuBcQF7UFq6kvrivM",
  "key12": "46M6ojLMshWSTqRBAfnLJm6mWbLZE8HUpjRQRAVZz7dWw9Gj2oFcXQwk5pRbniqmSbtvAyN4uBSFoTMLe4abzaUG",
  "key13": "2QTseJR5UQTSjPQcYS9szenfmd97X2seUvHVxURfvXoebyKgi8VX8NubEgqhz9dDG9GayM4k1uUku5mKHP7MooLe",
  "key14": "ijcV2nxkHK5cEWyWPjGYwBirMNvAWBroZFhxRj8aSB2WxpSjfHCDWYt6jck1ukREGPdWZT9JcTYJnZQfAiE9GQW",
  "key15": "3mGEY4WoxgrcfR8uFiQG4jMpwqpjxCSF1QWoKbQmdBVVZdrYfXXdXDxzmxY5sEXznm6dVSJL7ucfUouCDbynLo6D",
  "key16": "4TtaqG249fwjXFmMMgsw6AMFg6cy7ocsc27JkeWAuEL3c9fq3ofBQmfdcTKaJ6WDtKwvL3wfUVXoYkDkhUcdwaUH",
  "key17": "TQYvfJAHwkWy1dTv3ANgHys5k9HGm2UkpjhS9cGBdS55UbQfHNucnhhtrQNtJqMgbNcYQdkGhGMcbZuKtS5C4ox",
  "key18": "2XnWvJ86m1q28w3nGwpV4PyJMx7TrFrwj8yuNu3f5dokDGDRCWDQ2amA2ysvynAoFgnZuj7jbyAgwiSks4HvZ5tw",
  "key19": "4pz8omMEWSgHr3bDRqZFv2eE1TMwGaHxJePG86f1kNkn59uynPNbH3S6r6AW2rV8VU9aEN7275kF1fmsc3W8aaq6",
  "key20": "2eGnxVPUPiKFaFRd2dnZbeVcF1VGRZ6EQL9twq7xYKowW96KmqUtt9VMyYeAUboxabcy84BioYgXLW4ebLPFNpcu",
  "key21": "4WEWLhSeri1gMvF7JrBs55ecxA4LYGADc8sCRy7wfpXgjfKt7egCCfXfTRW9CkHEF6xUvEGTpccdcXb4eAZdoCmU",
  "key22": "3YmdsXsimWFonvtzUA9MmUhuzEDbVy7DiCkhTdPPpP6G5Bto7JwR76EB6tPR9CvpX3ZKNmyR8nSLhDJuifGHd3Y8",
  "key23": "xvbsAxzhqbXXM17WftvcRAr1ABLz2qtGG7pmhzuGM4Yn47VKh4SdxrzVTG6n1Xjq7Hx1xBodQYgJpaGkJJ9AFbE",
  "key24": "3LcdfttgSGsvLo3WDPQKpJFKdxirnw31r37G82he7tYamaaZdBpNLLB8AZbZLoU3MVp9xGmkHP9d3oXfHnV869dw",
  "key25": "5HMwBejK7qSADTDyEHJ2ozkQ3AhTt83pkbBTFz6N2prvBehQEw4ndmervYa5B2HwSi8RRfTNR9dGe3kJiToMubDj",
  "key26": "vBXz6UuGijnTub7RaB3Zxqr1MuGTASqCTTWQ8xZPFzJ7v54DFGTC9mY1t2ox7Fz4R23ff79GXnnVUjFQ15bJ84c",
  "key27": "55SnqbaJQPjyahdSNJdEAEmySZUKU53mnqCsWYeeE7ok9gps9CRhqrGYEoocTJjEQXjDXaUw1gMMCRJapBYvpWDx",
  "key28": "2MazW2FVRqJpiZT2M3CQfFAVXedydqJXcsvWRjwsqN4mgrQJLshe93NiZr3n1UJdR1wYiFEdFH5goHQfWr13XSFL",
  "key29": "2um84GFaCTCQGcWT4KPwesx2rckugkG3a4kT9fKeJC82q3vcsGnaexgVzSttjXwYynKwHksiKUNBxoyfD6YCP47h"
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
