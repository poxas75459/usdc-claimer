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
    "2ZiGas2uoMYedHWqwQ7RtN2uRn66FNEoUYhNEWgyiL4dxyV4xrwpZXAd75d2RipeaHrdYEoWAEBUAdq9Mnfw9HNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47E3ywR4taE888LzEovD1qpNL6yYSUsTbrRxsJrtZTJEa6K2156pHaf2zeexb3T63n973XyekoVwHqbxikLcumZn",
  "key1": "5ihYV9wjjoXxxwQgxEEDVykMqWGbDAVs6QDFLGfrbh2ip55Vk5urCAsGHr36bjmVWvH8shVA1GdeymMqvrsBRjhg",
  "key2": "4wRPbrp8aW6EMCko9iJx5CzwUFyVyVEtG4g7f5M4G4bupY3cZJcsZu11579tLwkUHNoDrBEo4LLEmbkQ2NVAcvxj",
  "key3": "242eBbXXJqiNmjMg4noTGsci1XY6Faf7CrZnsAbo75ZRM9NQuVf18UqDH8Cz8t2AssEVWcEs69XRPj595WvgCy3C",
  "key4": "3vZ9C8XuaPVKUnHbBs6qoHTNX6RzEEpm9TNaGbNLEjYupkQHTGpHbFNJLpBdC4FcUyr3LtsAUVqLRf4YXaRgJCqh",
  "key5": "3Qx9wHrmLFtfC7YV2sP1y1UfXSYy3UqWkqHzvvRSBV7GvE3qmJHhENsKhn5AQHtutG38bybbhYbjxbPVpxajMZHH",
  "key6": "21TTYBVHSv22o4d4zvT2VtNxPhKyiCMxWtfuMRpFHdaf7Eb8PG2mSssvwjZ88xR3AQJzcqSsyunqwAi6w9w11QNG",
  "key7": "4J3FtD3Q9wFJ77LGXozWNPYYhUebVAL5MSY1tP9bBDmLiEqWrjf2YwGJtysVVM7jaGgjLdJytSYd4i8y7RYi7xbQ",
  "key8": "2hsyPjGcBVQY5vB4xuybUQbSxAwNgXzgCG9rqUBkDYNS3nrw28HgdEZzUUf3QCxYJ4X931RaHp2ebfqqkik2baxY",
  "key9": "zvx8RugrWAy2kRXW9RCzutkRrtfcTzNSVPAAQuDb7965dWk96xyXZK2oq4qVQXYUSC9Jp52XED4X6pkZxYT2LTU",
  "key10": "4oDKYkT4gB73GjsVQ2HvSHQF95Z7k99nptYGuTMFXwjHQmVJZP8U94whx2iv8koi75YKYmFo9D3RZA7am9xTWdjE",
  "key11": "4saBkj4WZ2KqhcitDSvbH5CjAbHSSeFX8VM8EznNtQAtkqC2k2wQEKd6wGJ3iAv72QePZxkKkDyV4r1boSGuAxum",
  "key12": "3TUPajox91eER3hQthJY3UxFkj4qtLaEKAr9ZqPTT6TS1yQX1BZh1NTvknHR6i1dEcvmfUgBHffnW5cYifga7kYE",
  "key13": "P8U5YQgqWwUP6eFgmQMmhTEEGKV7MpfWdyTqUbK9oV8S8HAbaTqdAB8T9uxhmqJ9avz9W741FMtonvrunzeJaT8",
  "key14": "yWXdAAKbs6qXH3AoysoHE1ofCUXRKLyyJfQSZeEJYiJTQCeLt5eEApiGcdSEQuWHhsJbErLn5RmnC1wDPfsnT8t",
  "key15": "5aVDy1pCudeAaVnDKJZmbwU8JwzUaBWN3Ru5fyyKEhKzjFMDdd1nVy7N8QnjLqmT6mP9aSWTochoN6sY38MBehyU",
  "key16": "2kbqYtvFH4bct5v9uyw7C7ZCZxK9fXQaFu2VtE7axsZoHxJHEA3xpMVF72oXadUbdNC7xiUMmZgywzm9EoqXmhAx",
  "key17": "4rDmocw33cYuDyq9x5Hb3paqLCbEtbnD52p68JsT1uzFZUeCa35KqoGmXch3Luq64zUwzu4BrD3XvC6uGp2r8eqi",
  "key18": "2GnZGFPedbS1JSyZkcC2Sug5AjBNJyyh4ToPGkoy4AD3rD4A5JHVqJQuHGJbsN3r7fV5Kqb3zephc864H7nRYngL",
  "key19": "5z1w2HkkgEC63znZsG132R9tWgeWRF1kqwsrQ5C9nFA9uk2W4NMAo4K1pazvvKsfNqRsmWhBsKHMue2vrgaX3vQp",
  "key20": "2JMgb3Pz27dNzUTuEitKZE67jF3PTHVjVNKpz933AEZ8tAQcxMTP16zd7BAFPKZQd9oxLdmTkxQSj81uTVmETzQq",
  "key21": "34DMrqdJHbkTSKGnzo9cigA3aNbrdpMxTJKn3k7B8fcmgiLYykLUsZxEhUjw1Vfgcckx9FvPH24QvRGPyYhfYqbe",
  "key22": "2QAJNmcpUAMLsqaj6Q2wwZGGTZw36r3YC36PNAS7397dGmNGpBGujpXXkeg1KuQjMyptNd6QPozp5KPfopLyzwLL",
  "key23": "5BGTr7DKRWizNUk7mA3kMJBgwfPLhHaAeiZbL9nJUw81qgnbcNkhcvt1ECtZ7rdWJS9Ss353jiSUUw7G11Sx5QMf",
  "key24": "6XTpAWQs9svjX938iph6X36UZcyRS3yjdeSnTSqWgifmN37X7fJTkEswnKMk8FJTENh73ksVLvwBRTBzsPA4DnQ",
  "key25": "5zBKRbMz3Cv8yBU3RHauq3AexwZ5opT2tEEBr1Zv5dcTZbNpvhFhiE3wSUuRK8nWwg2SxEMcHcHs1VZuwGhZUh62",
  "key26": "Y7dqW4PqQWRZWETc5N1DoXgqv7bdnp4AdbE6e5G2ykU2M4Z9eLbzd2F6nYRWz66y31PbkRxRUHV38W72MrZiAPH",
  "key27": "4DANfTFzFc9WeEBDYmYcpVLkJ6MPsggJYDUiVhawV1YqCjwKmhEcXtzZTmZ3PEFjoJcy5JTtLrCutDCqhLELEzco",
  "key28": "5dZnJFFi5YbgxBp8TjGdSm9MrHLvpt4DoXHzDFdt1qHyYZQJSjLVu7LBfcdrHfK9Tjh946dhMH7N9vjdL9g1WS2d"
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
