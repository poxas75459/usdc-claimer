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
    "3HVQf2NTPEaJ3aqU5rQgnQhWqxkPgBQYJqeGoVKhw9Kma6hbavKQdZUhXx8ZVXYhUH85TfsuHT4RbMcd4WmGhWxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BLGdXTVjqWvuVsQaAPov4xVx3JUu5iCWanfZii6e96Daqm5LHxfKA33gBYmwvgpjTK6H29yE6L9RArAy3iNbGNs",
  "key1": "4PY4KTf837AwbvWEpfb9kUCRvMtbzQftyApDzHkDwBQUVWF9aK4bnt8nkDsFVE45X7cRnTaM9PgVnS72BvaBCAXV",
  "key2": "b8SnzkJa9eqA1uHbhH38r1eErX5MxRdNXHoa2fymfHVMJsuGna3yunySNBM265ZKixixX8UBofG5mySYnvfD86X",
  "key3": "35GpBhvHBPrr3ho3As6qfQkBLB1Y3sjtBYiXJSPD5Usov9BKF3RR5weSEz3WkBdCe55w8gtuAGUHdnLd4BGrtu9H",
  "key4": "2VqUCAoZQ14ZSxDszQ9EP7aPS4PKaxnuifA1LiS1CMoQMqKz9JszGr8hZmUzCgJ1VpW93k43vQ65fDwJYrfsCEeW",
  "key5": "2SZdg4Y3gPRuYhhodrdxA4y8VUGJ1mHj7ZfRwFcpfqWwWpTQ6DEzFFGHFiuBeCs3YDwyByk2wPkK6CMnyPiZhuwE",
  "key6": "dbFMQ24Y9hDiiwqJN8zkv4kHYW7rRWTpzoVBP5PNyRT9zMHvRxMc33WAyaEaZ55TGEeMmpqBFCsGixRnrTPTPzE",
  "key7": "xuqXAw5HkQDUZtne3jDbnXYhAhL3txuD8JWULfCLr9bU5jSYVtmPSCUgF3MfWjUehhoPPm1Nm46qjavKZkNHFSd",
  "key8": "3k8pegnw6nkPVjhmh1TL2hDUw5Q4LrvmMrMA6k1Led2dvLXYyghF5jQ5dHPckSeojjEqyeQVAjN7UFU3HSizUpcM",
  "key9": "4NW7koez8VsccTRQ6NBhHfRW7XtB3zCbZwuy7wnx91HqFcUbeW712HqH84YTCNWvXiA5UFgu5PSR3xk3tW95ByWr",
  "key10": "2FbzpMbiKHQsQ5oZqsbE8Qxo9Y529LoP29sLQ9SB3BYrpD7FMMeWktXDjfQtG8zbEAv5TJ9mycBsfCiiDTNzPY23",
  "key11": "JxmYDiCnWHRkAorJXNuEAkgJFhPdSiPZrYVu3mWRZiD8ipn9QkBa9Xye6UTSpinzTGW6cJwPL2DGEC4MwMpsorC",
  "key12": "5d6VsYR9kdP5RTN6PsvufdgoUHYEC6s7VEdmQ654j6XecYEMxBeu8K66i1xdcPhb6AYjxqZdeQDQunKjxSXjmRZd",
  "key13": "4Cg8swTuHQGiAfTYrdbv2cniwu2cQZATQMWHMs7j8KsjzKftX3MsH4TtuhGjALnehN9jJ79Rtb69AxnHr3BLWivB",
  "key14": "2zWwg9DhxM93EXN9zxgvuU5AfmJR5SVkswssoiFVqZGiw6h1KMoxb37Va7Qju1kJsibFj9uxCt952YsNb6VmGttd",
  "key15": "4p6DPcTv6Bo4NLeXQ5nwGdSoLoBrsQzvMpfGL6LwMnvCw3mKY6MwoKB6E9juFokDZ8Mba2Gn72AL2kg97sj2go5L",
  "key16": "7yrUxY9A7wY94yETJhPma6uKkkLSVyBqVjtt1bHuxhmsHziKLFssK8Js5H8bpfoUorE4s1zrvJDz1C9hxkhCTAP",
  "key17": "65u4wD7d1x27JCv5qCbSTmZpbLvLHPEqyJxocoim56WmWQHDknrxsS3ZCGytiVnmGExUCYccRAR1fyYrCuWhDhRC",
  "key18": "5dPETBeuEUd7aYkUsYR7BDYdrWCfT6ebZrRwSuUmCwt67UNUuUAuoKBqtGfMCdjdC6Ben4wU1DugkYRctBj56qiM",
  "key19": "4DQ8mxKh3nhLMwiAd9GQLZ5AtRtTnH1nDGNyRgKMQbCGyXo7DjDem1euY7zWV2n5h8qyxAGACMsdJ9ptZ4QK53bg",
  "key20": "Xy7LdjzXupAi6mPPWwLC2s5KUGn43QyABxDWbbEg8jesuwiPTNqvSjcsgYwV57xaNzN88nhhcfRQnKJomj75TBX",
  "key21": "5SsSUuCG5zWGuUo55sWjuE79YMGvsfbG4K8H3M1YBe1T8239fMWpMAtNvyeu18BWiA8Q3YfiGZm8EEogpD93SA4Q",
  "key22": "5r14UC76y4YMReCZ2jDAHu8L1EPq2H1MFWZdwimsv534vKMEsUSDJ9WYqju2yFHfNF3K8f6XbAjDdxfeat58XNpq",
  "key23": "3nBi4F9x51qR2eBCSiqBsmtjBG1uhFRgVDAAvgdrDyAfgtGRNQZuaeZ6yammTjH85K1zu7gP2DSnCPNLHSSEtDVv",
  "key24": "AhG38kU2FYiWTxVLLGWAYTJ5sQ9qhn5unzfWJySBNenNkfUh1wkTPHLtG8m8e4DnUKrfKKPqXFdDv9P5MpqMic7",
  "key25": "2FvrFcbhMKYcsn6uhZBKLqXdRxQ9BR4n8V2Z6D24v8fcBFW7ZKeXZb8g3pGw1zL5xPpdbTia1HSqKYSDfAQkKySm",
  "key26": "WTGckeoR6xQeLDeVWMUjaKNYHN9Q3i8yeVYiyLvAxBaAs5Px7wmdhJ4NSW1UgvnPCcaQQt1WQDNM8eJ3K2rfAz3",
  "key27": "5NMRcxfq5eC1uAfY5ZKJyUX8NwJJAgNFSbh5AoYhLvQnZNrFpNzSnAoX3Kmu1d4gULBfApcAGvZYhvKzCuUN9TX9",
  "key28": "JycZ2du6C6Ejh2tBDYk5xV3pQ7LV1KzFu5jhz9xhquN2pEu9CyBC6AyHSS16TqeAQhvkxMhrmvHbEgGjgmpd5vM",
  "key29": "26c6hBMZr3w5y78QWJBLfi36ptnNLGESo2zTxgHJNiu9x2a24mFuLoiFGGuKLPpzjCGun7U267ehE9FaeJPZ2Qxy",
  "key30": "Z2XKAgAgTDeKJHLDvULU27ZG99aGgsiF4xj7cXvQMQ5fceocLfxYysbyj9DZEK8SGiL8EfpoLips2xG3sncC3LP",
  "key31": "3R71Sk3zVzZcQfJBpNECFXNFCEY3uQc88DJrisZjbN3d6p8X3TT5Nbm1edUJLhRVEk731AUk8TyC6A75p6uJ5GJY",
  "key32": "5MEUn9tgakE4bva3TRULm3Xoxz8mrUtBKQ7JGPMnjdxdL33CiFYds5s1hG4vep1jgX69f3PgEuRMEPsVXAfjTi4c",
  "key33": "3Q7Sq8C3JM6sYALwNX8bVbPDS6n2pspzLWJLeiLhV1rYB9XGYGvqnFjsNYU7VvrFsairDWxGe7i6WgDezJiwzYUf",
  "key34": "3jDd3PQNsc8KsHXDmYkeypHwSpesydHc1hZzCMvVeej1fFEGndQDyCiNBGs7rhdn6oN68MCqNhqkq7JxjHApeFox",
  "key35": "35uNYAxGRgkqDseYqbz3ibSrLr69VYUYqpfwjpvt775zbEZYGL2YBxiwCuRMPPj8AR4ue554E8v62wwzzMxQYJ3T"
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
