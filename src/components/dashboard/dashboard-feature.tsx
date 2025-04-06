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
    "52FxJw5YWkb46LYhMdtksGXpDJFp7rWVYqYiLw6AyZukLuZXAEep1bV7TVRy1tZtBeSgmhCBLhAMTCespvuxXuKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qFZiSWok13khQ9Fg1d5u7nDQvfn6B5xKbiioT1BkSqaz1VcZCj5W7vsFKdrDthXXKACb3yFeMZF7naedHfbt6Dt",
  "key1": "53cUShSStvKWAQAA51V1UJQHiA71ShtywGKifwV3LUqhhpkBErm1QPGpge5pfbmB9K1RdRLa2tfxPj3JtKzQHH2Y",
  "key2": "Fd3aHBwNgb2sR1PMjeqg3gFr9QXkQ4uZtyH8GYtdY6Yhn1cV68VXLnSZuEvjGGiVCKCZRFX2wMxTfFoMFhL4TWV",
  "key3": "3yfiLtR4Zz6x7xPgSGwcdyrkhmMnxKtFo6MG4w5damkCJomaT3LT41pVPQ2RrLbvMAsFkedKAoLSsD8SDqtqMjhh",
  "key4": "5NrLb17SrNE3Cn4ChttBx4mozV7a3mmDsFaXpyJZFJwyUbiFfV5kjthqfRfeaP21Wk4ERHVqpbXuKtYXXBpwVVzB",
  "key5": "m7CH1A9tV8nzHQoNMsZ1i7gSEHmBSCurAZ3etW2JtqsJtYWCjVxD94BdVYWuEPPKQzWGCWtuBj1Pdrza4m9AtGF",
  "key6": "5TMdtUocdSrB7nBHvptcDqk9sx9QhgXMvZPdWdke3rL9BmWf4adZSvYHVkf8qTj7P3vvxegNNhhoPsbHjek2VuP2",
  "key7": "4tZXrVdxNzivnjMGUbA29gwefvaCFhJeHSHDJdb5zrppcL531N1p1zdRSFguXAW32475VEd4aeX3WiUjyqe5rpU8",
  "key8": "3hGdHZytqkdwauc99Rt1QUseXAm5hq4MSLHnE9PXb1Ac8UaoYYH2QPp9BRd1aAvDSGRu1ZL6eUa6m5wX42PbDBc",
  "key9": "63tPpsqbv9SPUELpEY8xTyhKoSiM7BfeY5agFG64rbx6MuLfBDBiFkGYE2ooisVwHw7qwKX4oNEM9iPScJzxNbeq",
  "key10": "3aDUoHLty2RZjDTKCZMJ5mZSEpbYnfyqvJrTSJDiAPeu79AwHSvA1Bd9CjRCR45hx4QzE6p4oxefHpqUdXWAEH8m",
  "key11": "3VCHvoYMnRcD7ic2zMEJkWe17o1Zh8kmbS1bVEycWWa22eX5rksHzNqwazYasKhY2K5xMWyqPJKdx6AJTkMDTiQx",
  "key12": "daSBm3ZZEUqazEfv99GXaQt8RhtDFWsTYiWjk9CbwxYcQJatJtK3ZXuqTFJ8ReoghqH2FKowZQKUm9WchMMC2iL",
  "key13": "4wW5ke9jAYRoezj779XtnUkkBUA4GCeVw3z2adxjJPzwT3VxS5Pbt6vap9qXCc8YVbLKYEkQ6oFRed2gdX6K6Uzk",
  "key14": "5Tqh99d59iXk89tZjYTHmTBfdXLxiiZLucwZ6YW5vBEY7VhTn9XvsK3yYJ8SxHBFR42qqqv7ADWButtBiWi6E2ga",
  "key15": "MM1Hhe3W21vZPQdCWd3J66w3a69NH2YTyoZAWDP7Jq6QgF8UDvVmRUegBbdpBPddjMuwRo3R3McT8HqfSuPM4fE",
  "key16": "3iSYYSsPk2MDFhdqJaEtHZXcvPMLHh4EySRiUex9XAB5RbmBcKc5BqhzF2dq5uP8VfARifMEhmoLYBGqUoFhbWST",
  "key17": "66ufXtF9oocrPEThXLxhCFJY3gC8X2JkvQcm3bEZAbQGCr5VDQxTmyuvaVwYWfv4TH2UDFDhfTxCrqqnGcTVmoHk",
  "key18": "2iA6EMbsyzqLNfVvPJTwVSchcQbCzHztd1S4DmY17Jus5D3rmCdbZjrQJ6Hhzh7Q4LgwDbdb5R1dS5G2cSf1gQAW",
  "key19": "GgVUd7nedMNurnLSdoj6o6hLC8CHajHVQmGUhWdzn3dX1KAswvXha3WrVwAp9fG7GKCXai3ALAqMn2LusZhGSSn",
  "key20": "3cpM8Eh6K8fwGRJT1isP3wYfqn6pKxMuvRH8XyHftnFFmj2pCJ48H6NpsVk5KSWND9qjGBARzcYCjoRSmMuQpJh6",
  "key21": "JBNc3GxtVJmrT7MrTQTHY6oPAwfNF7qRf7WhngDT61BF3BYCekXwKXedyPc9Hr9LRYVqQGgCyiBXJGU3FwNjNKK",
  "key22": "3e93DddgJppLRUSVVLKttP4aNbwNqnp1e96UuXrXSrMMwGKspFieQ7BTeH51aCCkfQtj48cKfbMKzrjhC5NG7GDf",
  "key23": "3bgHEKSsCNhV8QrspBq7Gm1T5CApRAMadkU5zWXi6pt8VEDHKfi8k9Du1eBiz8g4fbBBgszA8tQuF5uh1jaHA78k",
  "key24": "2UgYvGTw9Fomfu1u8putogMh2quwMphrpFSr2fdwoLXPJ1A8LjKTZ7q1z8R6TMJhu22wQ6qPFkSBGADE7QAYdyka",
  "key25": "4HvnWC8frEvnToGPnxyQazEETn5Tu62rbirJ5vcn4ZNpZtuR5F112xoXSj3V8fh1Nhb7S4rP74GYzCvVMCVqA9yr",
  "key26": "3hM1XQSeBxJ7f3ZactJ472Ncfg34giA8t6tceqZZYyEV7Xh4Jv7iSb4hJN7AQS5g4JDYz9z2hAem3bBo2jAy61wu",
  "key27": "675eeye2C5ZvmxnbUoeYSTucGrjDM7dHxHNii3WTzXzjusgd3N5q2Nr1LAqk8vzvNf4ETr9LpjnTM2uT2JhXR1EW",
  "key28": "2zRtfcdmWdtanQjnENeLjvmZRyi3jjaUxUnX7V4V88VvrzMQLm9ZRfitC6XdvJCSY4bpDGzj3NadT4bzKqVSV93u",
  "key29": "osdfsAdjec4oRYnqhvm5cHN1rFNLdQdyMhsvwykuyjJ2WGRNnkuP1QpQ1PhCxqBRerj548c7vz6hyRQnYqBAPjG",
  "key30": "8TgFX6cFNfAfwQsXL6oPWGRkJbZvoBXRjS95rskszMhmQk3rvxv6t6keBJ4jRLF2nEUV2wDRecxw8btu9DYYgfY",
  "key31": "vgewgg7y2ExuPTZoKJ9uQokJwNGNo2zWMWvBuLSe7kAnNMKeJ1NVQKPJtd22rYruaP1JByF7FtzkQMsQb2zEvWs",
  "key32": "2T9hLH6Dsppq3uTYxPpqZUNWuGJo7JUVzn7ve5V24C8LgHufhjkWZr8p5W1ZLRSnQmH3dsNHkVE152nhiucZUXw4",
  "key33": "gdfUof86XsXRr759XTXwe2XFwaokhyeiotw98AvfNPfT5jMKSwhQ8nNpEFz17KH2fCooZvpUEgShfAmWs5BTEZk",
  "key34": "2BPv6SngQrfPDJMFw3rX3cLk8YeTKJxjyJ3uDYTqH5ibvMVpz14e5kEgQitfK9fbrVcYXZoRKXU9tdFt48B47R2h",
  "key35": "3Vb4zsvskD5WArJkhLMC5FLbCT1G155vVRKYtoS1o881SVbZQMR8vaAH4jyzd1B9zeSxUeiB12G1CTwkQLCnuzXK",
  "key36": "5uKmtaphAb2CGuhTHpaUs7a7SAXEWM27oU7TjwYqpoRDwm47PmoYBrvojfhqcnyPuYopfPTZ3qESjkzeLQiQFJ1M",
  "key37": "rknu98BtgnVCNwL4uPQY733MPKCxMTk5jR6JKDXVTrq5MR2L3MmydMiUCAiCR8eSmtYyKJsH66j1vmKmj5CjeZZ"
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
