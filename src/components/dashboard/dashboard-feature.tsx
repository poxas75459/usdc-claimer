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
    "Wyrxatiex31qPE4zVVG9EWcUeUE8F41SdBqUPvZivbELn9bNc7ZJ24HM9hxdwLNQLVDksMGpoKQqJSKB4rkMCFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46226vWbzqqDw76EKDfcUjcP56hfQJfZwmes9d53sE59SfCgY5omhdArzB2M7Gv8CaohuVj9WGkVdoW4AEkdEvWq",
  "key1": "53sDbBMe8tU51fiTqhbtGjQY1oUuzMrkBsBRyhU7nP2zPghoB1NcqvxkFRwPAXtNT8p2ZpQWTCb6rMbh8DBbgxnw",
  "key2": "2tyUZk77Kv3YKU3AFUHPutjCYnQCj7haW472BGhyRLizHtb2zXo2T21Q6yynQgzfMV4qTQFUZr69jN3UV9jp6igu",
  "key3": "44D84zA191S8PrR6GHHvUJUcoQ3zhP8Z4sZ5stYyZNyx27BDe5jUp5Yr5g8MdmARqmm9sr9GuRLdaBqfGCTeTUPD",
  "key4": "3YYqeTYDD7iEWQSvHjvM4WgaHJh1Hqgf3YwYhoStFboGkJoXQbBFY2hYTR9udPx5rNfPEjvNJ1nyxppX66kNaJod",
  "key5": "2NdQgD9TvmPT9EzgKaVW7mu97WdQVfmhwdEaTRyKAHTgN7hNvh3ju5f5EYjNXvPZeESuqQeR27xMhN5k9Ui6Vs2M",
  "key6": "3vtRwr61aCpsv3PTZN33qskvVU71mqHkg6bXXX7QquesTkZpU3mu8itpga58DaiGiwzmm6uo7gHVadnYi7PGPy7p",
  "key7": "3UDhRzyEQvz2pgnPPodHgjqda2yeKje88169ttxzzJDWstsLwuqPK3PtQMgRFdQ7JixgWmBTtCkBJvAReBXCptHH",
  "key8": "WHJ8yAGuMn8cwQNe7EbH69cBq4jsP7CwADzyJZKR6LoCKb8gkqpK6JTaTebVvZAEqnXNHfu6SJuE5Yp7i4fwT6W",
  "key9": "41WVAp6h1Q2KjHPSuyyQxhoLRMniLszcgA6TXTsQrvyGBhXXp8nsMAbwLtqUn5xiHuSYz9cgi69bYyu1fhjzBw5C",
  "key10": "5zAzpQL1H9isTiE7WGRy27pdVCwj5RKaTtdDbHPK21hHKhnafsLsKs2NHMnDAzYcfxEyYfChJo8h5TDUEa785jHX",
  "key11": "5a7nKY1GQSud4Mhbft9vr1PWt5pZonaR3oFY3oh59tkb1ktDHRUp8FybzihgFPfQRfSMAf3niXPqK9XdLAsMut8p",
  "key12": "65rMGhdqD1XLi1ArZGvR7iKyVk71TXuVBmAqxSMv8wZUSfaL3GkuRR1R752GjEEeBxDSewr1WUFPeJu6v1MMHTEA",
  "key13": "4EMXgcqcsBybX3XzShJ7DAP64hdiUYNrSanSHU53kSNtAAA2DGFjG7GW2WdYSiPPupwruMyiLFs4K8vJcbPZNFio",
  "key14": "2HhyvTCLi8bu3VzkW2TkYFErUFhPsXm8JUUd87RaAHH2aDSajNNnaRP2AxTrgcwBsJSqiT9dHWY1MvY755UhPF86",
  "key15": "2DSxpSBYPCAXQABMXXuHKpx9vp5yuu1U1rMhYUj67w6msfQdRJUrkyQadt3eMBMFAtF8BnwokwBvMFGu9Xh3xzPA",
  "key16": "367vZXFioY2sG1eg59QkAnBdqe4PcgwRmy9yHzLYAVWdB8sRhDP3vjfGBJiUAnGyadseWaCiTw65qg6R2wyHYifq",
  "key17": "5Cmt8o8CDko8rdNB7cwzKSYqjMSJsPPxMrAPYRkmrGzjUuKbfmqu5wFyWdbcws3QXD9nieXvWPKEM7TaPwT9A985",
  "key18": "uHhrgDKNiiPvUtzMCL2Z9FP9bpXtLK828wb2VrG3sF2cA8z2yafParG7A7KrLr95H3oBxpShHu8kfAJ7ADCaqgC",
  "key19": "54yNmvKfDbRfa2e2wBC6gxvWMYC7FqFWupoUEPw8NCLZzghqRJRKmTaEGeZVFRh5Bu3oQBMvVRoB8NMLX5joAz5B",
  "key20": "2KKj1PFPietxNyz12Pvtmyd19ezjBkNNNo9vZX6rjPi3K2THqxmXpF4ZGLaTwBjcSUmH3aDkQfUSfQjRk8z3nfbA",
  "key21": "3h3QkN6MrQuxAdibrreLmKgHuXQJrFKRhPfj4AhgnCz9uPL2Uxj9mnUYAwLFg5n9kTT6afGp3itqXHQozhekB3qq",
  "key22": "7uwjB8uejJUepFHTeKKRFFN2zhJPijMkc7aVRmFfJjDA7NjoxqF4rjXSfWrPDZPtpDfTzCAdph2kJF5P23zLQPW",
  "key23": "5Ba9B4Sou93E6zjwsykxNDSGpR19aZ8A41TLKtdqe76qvuFMf7XtpqgeoEHfebnkiLQMpnXBZy8ANiQ88NnhTDAx",
  "key24": "5Zp4ED6y8ZJAZBqPnv8u5EPBwLV8tETnu8rREMJvugGdj166wzLiBvnw7pLkU7feTYT4wMsVFDrM7yVxB5W7tCx4",
  "key25": "4kABVK2nwoVN7udSie6ekKCFJzC4oWWXVAgmQX95j6dZ7g5b1YFDK8m1Sm7aCPedLpnQC4NdRfrFfdneUSN1iCkH",
  "key26": "2TYnAnwmSUP6cAdvxcQDNw5K2oXfFxGTB3AP8guTWcgGQ4cbYV8H1CUvjjs9uvE1eZV7oLqj68kHpxdUKxhAkBxR",
  "key27": "3wu519gg7E6xpEcN81Ei4KGgiJyoJdEmYGQe1N3KW71ajEWshfFcjQYLU1eDX93MtKYb7ZMeLMz8MUjeozLo5jzH",
  "key28": "31cXCtncuWy1LLN3WZMpYCmpUAm56e7ECu9c8yMeaoAtpeTaGfFWGZkKJgWnfNkSgzCSiMVaqKoVmoM7zH7SkYoU",
  "key29": "2BXzms64vA4bVFYogh5HGh5xdqriT6vhxdkgwigc2P4M7N377mZkxfqMz8mpqiufitcCgUurwYhGbMSTNw6fMW6Y",
  "key30": "6QJWxsQkhQWeV3aoqSDUbYRLRfjQ7yzorMxVcsMobCbTvNXL9TJMrJA5x3YVyuQEaJbuPhVXAU5Mpw5axRy4DDS",
  "key31": "cqwjDNwU3mU8H7RunqZrr4gM6YGvx1xh21zEzePTqPFQqNkoLkuX6VwfztDrw6e2axFoe7HdBHhw5Bg7W1pcuVF",
  "key32": "3c4v72bNiPu1E2gUNBwacYXpvqbw9ctqY7YJUsiLLSYZpkRDASXvP1Xj9p2oubmsgWgr7wrZ2F5x5bpekRyqTgNi",
  "key33": "4MP9Gpq7iC7Qt5BQy26bgRYbFzN5VvpfzhskELN4Su8JksPNyGhnYHqDACddRCHFx5dicY93kE9dgscD4PnSmP9E",
  "key34": "YJHe58htBSPNxf3X6yudp5nNVhyKKGxhd1h6p1Sv1Fhja9uPWyHpGYtCgY2FETiywa3JcfXwFmAZz5jYCpzhgmG",
  "key35": "rBNed5DMh6rLGzMyipBNrjuQ2rCgDGDjHe8FqHhhNX5sk4LJ41sKecEyw1XZBYkVsJDEog7idKPaw2h34bNXfPP",
  "key36": "4obYA9GCF1juiW88xYpWQhYrojq46y9fvdbFQ4bU3GeqCXLe9V3HRuq8Xxr5U1eN7CZxD62SqjuDMSdpUXrsibeG",
  "key37": "332UUn5Mbt7ubDejnWQYYiotPJGS67J2VP8tXg5pRuGdGUJHpyMGaP4NZK3XGUa6JUUbTeGJDh45qZDwAWzbTDyb",
  "key38": "5a1FeLfsVtzcCSiKM8AbDmrBTYwADu3pwowfhynVSZravHpGBgTd2VRvpcD6m86pX4s152eexujvZ8LUQpgv9CJq",
  "key39": "2Ato9StdjDbCRipoehVhVWw46CiffC3PUTsGAbYwZVAZQyeMVcVqxNaoWCfXaHwmUWkytKNuQzW3iWadxrFmbJo2"
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
