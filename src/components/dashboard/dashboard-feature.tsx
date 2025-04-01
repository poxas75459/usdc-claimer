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
    "4nyGEZ1rxUCHT5523MvKJ2YsRUiGB1LZgWGbPttCi6BRTWgLzHzrjkdkZtmjgrWQvoqKe1m9gYFKMwrjTgiExL5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtGLUMuuKMiFz8T6c1Y5WUGvh35r8qESDhwaz2U9uU5z5t4AqbhYSz5gBifcsKRAUaSWAVL1YYtcdz5Z6zMxW5b",
  "key1": "31qViA5dLy7Z2m76VhJXEHyiJrrwr4fs32LuJXPYBMsBrJbAGFVkU3sVaKXQF69NWk4C43uWZd71sy6k6JYbF9wN",
  "key2": "5U77BymBrHU813VKgqiffkWeDZQPxEvrp3D2tapgPv9aLbDRSgVi9j1kR1bLfXdB5D7A8fpjxiWSTsWvRkRtuGbi",
  "key3": "eGBHN4urgKn6g4ywiDWiT7zPNZJqU9qjsBvXxP9GarEuTy5aVGi6rVaGgNxFSNTWWfBsMXMX3nd6bFLtXrcmDvt",
  "key4": "oxCgPkcnCiu4KqnmSsaDg1NRmr1npiLVK5octRR24YyDdA4fviGs7o32xALLFZmer9Cp8V4Q5Zy5Mc7N5xEYdoj",
  "key5": "3Pn65uiKf7N4FXExULoLgfC8xEuyW6Xprq1MUTtnWEp4j8yAN8vJ7KgiJuCDtdkMh61NrPoRj5NErgYofRRXrW2k",
  "key6": "5K3FgxxbcmChAaiurvZ2TCJEhfnfeKg8qj4KA4UWgAP8WYCeF79sYWnJuB1BVhYA9WpXeMKEVAuieEbWsRvfXrvA",
  "key7": "4wJZMzK4u1neXTX8BFYy8L94Ep9s7CPDLTUzUCJbPsWjKNaigxdiYLMYyuQezkxh431CjR816JWcLtxWBgCg6dky",
  "key8": "64mVp9Z6ByMiaNx7siFFxykr66aTnqdu3UzUF5UCsYHTjDA2xB2dzL6sb4Jwsf9B4N6RANvJ1amjZ5t42Nf8JGet",
  "key9": "hYPhne8kHHR2TSD5LHF1rPFrurWjtwE69XADwHVWADZTbKfoHUsVkXNECsi6AggLSVtAXjwzQPZCsbkc7yExNGM",
  "key10": "2ChHji5tAFLhgEdKBzD49ht4UCpt5foskrpxquUifunukkb5q2w3xFR4WgAdTrBUFzX1wXkzvTxRSb8iRAf2w8Kg",
  "key11": "XhCpPRFDNkNTyTDAbmWLDQAafjqeYEtH8xb1W2Po5H2di8MgGiou6vSrJuBz8oU9LXUJBkLHf17UpVL344KwATM",
  "key12": "5BZQ5esz3BwZgBB75fVJSkfdUf6kpdg99TrEr8JxB3XaAyfvz5xMXKRx47zZCUt5fEVqwvu4c9ZnEFzxhjaHxKz4",
  "key13": "jz26w4NgYkDmQoRjLR5vZAzAos83iXmPWWvvwcdKc1QC87zQLRKdWUFkMrZ1pF7VpYTnCEdKgxzTodeq6aepMW6",
  "key14": "MBbiAceySP2zg44ByPGRMtKUDtTFHGbeHV1EvsE3VzP6RmEoxFAJ1rY5xoprSjCb7AXGA2spFnhHyZvtd32N6zm",
  "key15": "4pA4BcARU8XLSAAfMcMTotambGstHTnEp2doooqi4y3QUVgbtdMjjLBTwczbLjpipLHwhiQj8GXKVwBCDepuNoVE",
  "key16": "5a9NvaRnwQBdKwYY8FXk8XsBbhNs45GLjCWtvVbAKDZnq78KeT16pztMdvsKQ9sW4e8VKnEiESQM9m5yzKtu7kjw",
  "key17": "3ciMbLLRnqYSEuQdAWZC7Ne5XsQqCbLvTGSGQ6VJACeo1cKJUNFgKcPfQd9GbuygMtJTpMa8F86n6d3SpqJoN5gS",
  "key18": "3PPT4m2PrtA6cqv4FGJ7UuTpAzKr6sE5AUZ94gNtbyJYnKYkkywBnvHYQxdHQYv9bQnC1v5HB4uXJo92ib2ob8hj",
  "key19": "u5P6XiHGYBnLpjXfzXiFYSLzC9PqPtPn7nc59t3zxgjzTBmTbMNPYFN3EELGoLMur4H78p8bspNCeHU8uQbyE9o",
  "key20": "61bDVSqR7DXz3EQNfM3VZv49YQPD6BvsFr1Pw2nZ95MKG2u2QWhAY8pmesS7PAubuC3zzV9yjyaSyDxxgXqA9uYM",
  "key21": "2mciMWVdh6R7GbhFf2Hh246xFz1396VDQoe4nYCSTFjR8Fc5sGz45VbXPjmVycKMgJPstqjLYLe3kmds5bLRJ8AK",
  "key22": "kooynmUcQNv77EfcgrhPKDC3Md4ZNkL7rcRxfYi9fQ46cs9WxvP4FtPPHR5CK6FP3TCnnQg7pBGy2KeBRswWcy4",
  "key23": "29ftXayhKEnD4V75LQNKfPVbNkkRH4YMzh8FUFToppJdusaAJZr4YVKLxZ9c24FuV2hhUNppPV9oCiKo2FxazYAS",
  "key24": "5GftbAzUvaTVtmyMdYSvKUkv2oWn4Gos1H7nFLLFuDAe1rpGMHK3wAU8quRdeqc8LSP1dEBtQdcCtgna1jExJJ1W",
  "key25": "4qinf1M62ueYBcTVFEWp6tUJWGFH6YEyPKCKvAno5sJ3iSjayJ7rANwCrtoqAN6auFDZJYFR99ncYzY91JsgQ3ho",
  "key26": "5VkxdZr5WU3w8U4c6Z2HAg3TrSugSZ1njp676FVgokZUgHqC2GuBUs2RcYqiK256KDAcUHB9nP6KfkEKkZE2LstE",
  "key27": "4LU5GGVT5bhodhDGKK44VdvvuZNGGXywt5zj8P1MbwQPVc1dSEa7ma9J9JeyDQd4dfUagj4B44hsW25N7r1SSth3",
  "key28": "Lsa6KSPh3mm7UEQjGitju7n3BXWfQgZoJSMhRj5D1yBeFttWuLmYeWg3utosmF3kLzw9JEUHrKCtFhXaRwBWnLe",
  "key29": "2CyNzV7iqiyzCmAjtxFpHBqgUcXjik13rPfAZht8fZPwEgCtPBGfy1dYZP9rXaDWd7G9Zga2hVsc1kYriq2jF1L9",
  "key30": "YrGh9wZpkHjqGsiSQ7w5RUSGiADm17FhioCG9SAub4gFyewr71XQtv66LiJAbMAmUjFMV4jEjLXyC3g5w2nWFUL",
  "key31": "2rYKmQCWfPVYzJtu4V8ikZzNezadTKtx8BBYUpNVGzuJYK1udYUPLQb4h8p59LurqNDZEKoTn38eGoyprjukbwTU",
  "key32": "4ULmDnBUpD8kduf4iq3gKuAc9vrcxd9dY9Wwbrx9hCmWri5TTeCWkzTo2EQPn9xPTsLpSXVVjwwE8EuaYBoepvLi",
  "key33": "2wFM4f6oRow9Uz9tmM3hAHzRUEbsyAsYxt9bpGU3gk3SqLRhbAwfsHsExbuQRV6CGXmJtedATT7U75kacKQTzd8A",
  "key34": "xKh1wyuszc7w21WrKnK2p7PESgMZXasxW4bWP9sg4R66Cv1PYv8VSLc5tJRLq1BFvxfhCVnNMLddvdUdpUFeurd",
  "key35": "3CWyBAEJnA7rqXzs4UsqtTZZEHvZtszCNC3TaKxygmZzwGsYAkEj6fty5xKcnJPxXgYwqpE1ykqWfFjTdQNnUPSe",
  "key36": "2tGQ1EY6Fgh8i3hdcd2fK13WrjtSMp2i9gRbFZcSG6Bq2zUfVq9has3xbj4j7T4PNAfYS9G5uPUGeYZYMqnchQEZ",
  "key37": "4PiFSo2j8qQ2JiLNMteFGo5svmHx1zwEC1TXmaYRCUqiH212SqmYmCPBC1afW8A3dbTCqzxpvX4jyuE9n6r8PxaZ",
  "key38": "4DZPFLCr2MhcoRqAd47Cqtcb6usaunRHPpDrbvtAbt95vHBQiUniKRW9ZoefG6zeNqu3a9t9mqf62ykndLEbiQ44",
  "key39": "3fiRwrVbfbgnJoe7oKuciWmbhFgdedqCUj2KtMHQhqnVyyE9fv2ukCd1TX4UADbVrgXV47FKZcBvCjmgMWpLcAmi",
  "key40": "614fE8phY9iAh4TqvZsCwQFjtnxMKoqATL9YkmpvvKrWSJi4tZokadRFDgoXuXhgMBR4oHsKA34fpMsvZbidgDNX",
  "key41": "2khyJx4zfxzon1GceYDs6DjesfSwLUtWEXmXcZZsBVA4CtDE3M5YSsXits8azoPFrNE4WvkLW5RG7QwNNK9d9QfY",
  "key42": "3cLBchQMMvdhqc7XAfBwLwsuqiHsRjjLf1Dr6nSsGPscybaEk5vmfadG8P2of96u5phoz6PeAazHneRKPau5uFx6"
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
