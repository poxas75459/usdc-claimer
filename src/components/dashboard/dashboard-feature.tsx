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
    "2TKEiXxb5V3FrLtAjPs56V59daq3Vrx99zAnPXa3UbF1jJ1e2Bu4VWUYpN6yB9fwLeUsB5ms8vBW8VkZq8uWF5SY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YU58Rzr3QB1vdAYEgqDPJLYuu8A5ayqYE6yDvrSCedsTbdCeXaBgjKGZE4WNtCcMv8tF7XqcFrAzDQ6R9GeSxij",
  "key1": "4PZuEaHKEvVxgEK2zqru52b3Eq513hhaVMK5Z6EP4we9KJfB9qHH99wXyBufaP28aep4ub4ADLP5FbhT2RrH1Cyd",
  "key2": "568BhCuJUs21BGwsYRusAye4hrhTARiaaV6ZKBRaDNX9VwnoK7kM936HM7FpGdbdp5K1rE6LZt2WvGPXHhLqhfSo",
  "key3": "2GCnMZusswvagD7uo7bExKkpiZws8KauWC7MKmJYZsRBjtZuHzLwKMrnPKghVCrJevjj7z5p2z22RdGicmxUfUYK",
  "key4": "CigeXyQbNR561NRm92X1jYsjC8BwLPRYBjQ5KU3WveDbAvcv4HVUviQyH8yv3Zb6zvJzvN14f3k7fWe39NprmdA",
  "key5": "4mdRDZd9812DP1KiBRSecPxxZG9VFnw9EBuAhZMFkCNgtW372xJp39VsrjgfgNB6uxtbhYePKCAbPZ3QR11Kjh9J",
  "key6": "cQLraje4n8JHAC8FubrdrCRHN55PoKcHC8ajKdQ7GevoHfavG4WqpxwDcQCKn56r5vijuwGpXYeQz69e6QH4sWM",
  "key7": "4fB8JQ4sJwFtuWw3fEaLzXmwB6g6SW9cwS7nma2UhNr7GYhYnW7xT7vQshqBdYFKHXpUAihF55iyBtZ2MYuMtLTQ",
  "key8": "5HGbjEyCxqWwwmtQvRsA8syvkwiVLK3kdWTfiq3GQhKN4weKNGWYP5qyG1RknebZL83VvYCSpvsFprvx8wYcF84X",
  "key9": "mLa2nxHdVUfQ8QQX9Xo9W31duCcgTf7LkJWR439uY3ymRcQRrqjpQrCmQLcLrWk1aVdS1jwXP1gbtwdSa2LjGR5",
  "key10": "28r72gm9gvzSFzePdMAtbeN4TvYTgqxEndRrUeUMDKjBj8vW5mAAfXAaGgk6w1qyzbEYMimG1LNsUe2ZFg3FRxg5",
  "key11": "YDZ7bvdrXCtNV3yHjiKPhHBLsTUk8nyVftKuvMHxBjicSx5RQDLF5HvJPBzsGUqNRpzFKdgmVXLHcuFDTRQhcfS",
  "key12": "2EgokmqjMBMDkiBr5MmVRprsvQrtzWBaqwtUgx8MPb8TNTZ3b4zoxm2DTkjUUqi9o9RB265gocM66cxxMKdGMs3A",
  "key13": "4SECN1wGDvtzwqZUQmmEywUZGy3UzKecU1aWQm67zuPLipF8oWb16Q4K851msFF7tbatCD5HeHgjVKypC21NMk1u",
  "key14": "3o1ZGjqBUmxGNsMu5agjdncJgf8LkPDhLaQwBrvL6fcuSSjFDdZqz9M3oMLwQSDeU7F85eYLs6Gvss9aLY8M8prR",
  "key15": "5ifFfVV48Np9ckKu6r5GimXguaHYhWZn8qKBmhRVw2PgWut6Tgj31JQfb4ACkeg5iWV3Cjt8wCxDmND9nUhxZbgY",
  "key16": "3PSNzaHso7LoT3bc6i8rGXKWqYg6b37A7uwZDU31TAmyz14CCvBZt2Nffp9ABkHAwYWY5uPtdx7J6KT9gzDKwofP",
  "key17": "56do1bKbFDR7PsDzjnFzoJhXhQ5UqkdDmNxAAeWYgZbvkcdYW24cPLkH3tPadPoibsDbWVwyepzKvcPxEJtk3cnx",
  "key18": "2fzj6nAQcbx3zoTScW5J7LJWsxSmb1VpyDUcAQcHcfhZ1gJVCcBu6y7VvxcUbSLv3geom7g6hBciqPfc2nJM6uBp",
  "key19": "5qxFb4UE3coai1q6CVXkn6kgJMtM7gQadhQQzPt1nbaPQjraWp1ouNnyYkLyV8pVgEDtKgBMTTS15vPAciz6HZCK",
  "key20": "36DSwPsscQfYEskr9vFiKifugBZrSLnxUcWs7sux5DNmYf7NZWJyEs3QtCKrJFR1g8FzNHCti7MqmeSpWnL9XHbm",
  "key21": "3UEUdRix8FQQfthQwv5ruWzdLBEz4w3eXVdh6f5KgA4xTo8nT23n5CNHjcSUT6h5gAu93C1h4r27vGJrYqvkoE9B",
  "key22": "2vL5jsGxfQDYKnvTU99JJ4sg3w6CiQKmvChLC3A7SGMNa7MYLDE2pu4ukHu88sSJ3pCjzB4ctZPnMT3tHy7wbe1m",
  "key23": "5NA5eukEaoQLCwYD1iBhG894i9ecbbzCnAcMQoxFuZ6jvGwFh2GSWWnxPiJdbj6qon6NeLE6mqKft4CorjgZH8Vj",
  "key24": "3wQj4CDXgdasoXemyawsWJh9RunqG6LeNRWiPrQcmcUbyGgMVw4aaV2TZsgwJposDEfjtV9tPA8Qqg5nxouzRygm",
  "key25": "YMy7Z8r11aNQ4epDZfwiXetQCCxL5g2RzASqGYYnTzX6PUL6FQjd1SrK7cf43KR2bjhRGRmNeT9YiDcMo8T4Fsn",
  "key26": "5VfJEczhRYq4BvaKBSEi52YCwSp5dsLgGbKWca6txW8PfzLc8m7pTMVcqxEtGNtF8UpC21C1YpHBLA8MM9seFm1X",
  "key27": "4F8JfrnLxNPUJfb6kyTgJCued77CF7aMBYKsnxtr4AfUgNPgHuBn4vCG7NkGiPRDXS7Tr1wGZ3DpAo5S3DhZLK7a"
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
