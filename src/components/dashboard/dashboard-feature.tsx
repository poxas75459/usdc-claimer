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
    "2FR8xrQsvwQDyAHRZNus5KAYS5EZ6d6b1eVQu4Fw77q1uRxkEkJtDt5pdbgFCMzov1SAiH27x6gjg4Jhoa6bXtLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cQFuvBYKTcAz1eWnGW59Ckmw39MCvCNwVxHiu8mC1jx9jRmjcYdHhd5etC5ojqAmkTvaeRaVKSThgX2JHXmmSiw",
  "key1": "3U9W3E65ySGd8xY5NAMoahXurmjFhun41SB4qVCT6wgkF26dP1QhLPzwYK6TLU8hJkm38K4Y8mfRd4xRmWY5ChsB",
  "key2": "5NTj6xgTRVJHUrmyQHNuu2mymwQ8ooRFtdJfU6z72FfEibKCL6uZtobCeFxk6gHojyXeo6DXa1c6oN2hk8SSbkML",
  "key3": "5WTo65z8NTJKPBiwnP2U48WgQt5y4EeRG1EDffEobgCHJBZ5pZLDQDK3yBM8sKGcPe1g3ygUkfCkWf6bLwduTpbv",
  "key4": "3YAqY2QAuETweUA8zWHTWbnSzeiWyQPanv4KyNddiZyczg2HTnxDfNre8ndq42t2hWfPPk4eYBZRmCZDAcZEyQw3",
  "key5": "5XWVtLLmQFaPH8hwHFX9pXvY8dyFCBBVRzw9HWrCA4uvVfFqTcSGruqRsNfVk9g24JuFZzoEPdSuhqxhTNj3RHFf",
  "key6": "4aaZGZBGpNbjBYsyPXHL38ztAmSTcYAiKFk3SGd3QThBu6bWU1xhTzQuBk9oZXmypvtexfjmESerXWhn8x38kyjE",
  "key7": "333ZNQZUTHN5NpahXaraQMhWnPJT8dBw2uuk5LJFjx8ySEbmAmgSiFdwKi7fqaL5gTCEoHwTUzrcw8UDZ5MQ6hiX",
  "key8": "5fGsPYXiKhjYXy9MVPGKKxHU2wqDjBdsiQDex21BuNhvjewARpHvtRi33hdSrHctUUgPeeFEn8nWfm4cYPQDWwA5",
  "key9": "5BtdPEhATMZTHkTHCSKJ27xdxo7QV2WrfHk6gmxXnsUKKD9tWU6MTYtt81X177f65qQ9MzLRNpQkv51bAxeqcmQN",
  "key10": "yk9XDFStTqJVZ5tnwb86aDwRM2FDbA2USRYvzeyCFiobiaUzbGGi1vnnxd4F759d2JRUivYsNcN1BmZuL5aWV2X",
  "key11": "42qUi88tJ1t3nLTSoSrqLCm2TEneLxYzVMMeghYhpKBnC2JQUxSsM6Wp1tqVQgHa5nDZE2oe3cDWBZeEU2M1ysre",
  "key12": "5hsJGuLVM8GsB8aZMEwfjSLikjgSadCA5EKWXmKCWq8dpTF2MRHN1auKKMnshb55JCsJvgRW98QghsBhiHsYGxsc",
  "key13": "L6BDz8XQFsAe4kKiY7mo4us1U8bbiNuUuRTJ2CDAVJz4KuunjUDRb4cUgj8iSEcfUttdkXPFngkBuKhmGyiXorN",
  "key14": "5WCDuAtPEHsqp3ygz3fusPhUADHDfk6nVfSwfecsCjKK8vhW7PjfRhUkQKra7UsKYW2HYNeqgeXto5vKPizHsjkR",
  "key15": "4RPHdbBjSPKP32EMz7ooTyUdEvqGRCXGEYFUyBdVtrLkKhBVPYhG71RAuumQzmhyD2c2M923zXrk3X3MLgPRnPv9",
  "key16": "5eYsELuHEFXt2UcYG49JHMucP3rZoYAcr5mrzKfUhUXbUECbN2KB1FkmH7K2WA9tBGZi8gz8EFBc1h5fw6BUzU3b",
  "key17": "g4M9pJP8aneuDpB2gZinRfvELrfMrfqvME11ykMpEGYqXQLbcW6WUpQ6CPp5U1RpTuun5pHx1hk9wphzYJ8wsTL",
  "key18": "3xYRThcAPXkr4ELxf97L46zDd5WNrvBfRiF9u8VPTkPkSJeqopYee4oUcQgPxjHtXpmEV1EACGjjC5JhDigN2jhV",
  "key19": "2aiWMfYQguDfhWJvJC4Ma6Qrjk2PPNnuM7o48akziaAfcGz1TXWtjAiGWZyPJLhgy63ehYnGGVe27G9opBYKnHNx",
  "key20": "4VLNq69JLZeaPpd34uuz1wKnL4hPL2BFAZ8Ns2gbray8eL1vM2nFJyzGEAYVR7WvEsV8LCrU3VAudg1ZuUXvCtCP",
  "key21": "4kHu3eCKq3csVjFhJXfLEuWQnYtXzrTm32Vx3DjcgeY7A7Ai2Eo1uHGdiHNLbJmEJ9CFVeEFqgLThqwHtjmsAhuL",
  "key22": "34As6aK2beHhYAK51gAPfQFLc2bJ1GRfXm5VkbUYSyKn9m21TKaB7X9EBkBFenndgoKinjRrbrT2wyk6jmgMRtFh",
  "key23": "3GP6D9VzX9UFmV58aJHtHUur5tCw8UZePZefcKBAX18jsCdYpr9SPzBLZDZ3LiT918Q5ma5PeTggLQXyFMh8x537",
  "key24": "4bF7pyGBxQcxoH7ooJsmJiFParFeeCdvVBSVztGCP61q8ncxcYXMFt3kr9MhtVCkB2nzzB3fBkZArp1TmGCXq4Ly",
  "key25": "3ZiHP62a6KHWJvxpgiMVXwWRuVS7b3drDFMm2tqn3LjEKJEfPZ2p3sHQCNt5WqE4abKwfMdE9fTT5caYzauA8WSf",
  "key26": "2zvBGYYpvrD3bPcBwDwv5j8GAXwesxQ4yQePxZNw2SRySReS5PDVQMr5AnomVZV621obGndTEXDG2YJ1gF9NiCpM",
  "key27": "5BTg9ZpstRhghpBuv3w1DnqThxFFH9fUmu7Ugdh8bvMQVT29GzDgRvwvf9ovAgwccGis5GfWAGfytpBe6F5LNP9g"
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
