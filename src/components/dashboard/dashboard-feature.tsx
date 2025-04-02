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
    "4Rrj45tF51i7eBcZ1SQzde3x7kH8QP7PrVDdQMgyWYK9HduZsQ9ND5cnnk2fXadmkxATnr3UuBaxYJR2BSPJem36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aDw9UdHHUsTdTguZaFodfQZpxPUnWGUCtbQYuxNnntgsTxWJAKrnFhTbzE8gwJy5xVLYTwFxdBNESDSB15CZKsb",
  "key1": "33XwFd4RHucXeLJbG6zahRw14w9K2mDHfievK7qPVkXaVgPCQ8B3idNNHzjTtJJqHQbsQgpSYW6ES1TGp7k4vzH2",
  "key2": "GFHeonq2qVAe1Lqqcm6swnignVcWVRQBVtbuN8ZjXNd9VMF2pKsYQ9dCAEFNjPeL85E1QdsGKDixeL9mYMWuGHu",
  "key3": "4ZjAJkZEerJDgNYHGRkTPaYi2voVkqaYPqX9WPvjcncpN4EUCEhQERkKg1TiJwbxtiA6iewYqx9Sz3wBiDa1tqEA",
  "key4": "zXCWbkmRWFVxStm3AYZ2Pausg1JhypFy1HE2eWqbDLzi3aMAkkceHLYwUUXk2Xh8EtjQLaz2Eo1mjKwftEM2Ca9",
  "key5": "5hRHsNmv2BTqVBfqpsdYteJTywykSCXk8uC85ksjjihuMi6E1Z7wGqm3e2pZ11RqvU38dHQvHrQ9v8Bvp43Gccxr",
  "key6": "3FxQYzcr7x4f3DnbSJxm6nH71MJ6HH57gV3pQfX78eTAsspne2B6yg7izLoKQUoXtrE5zmQizNuECdKXZbvaJMSn",
  "key7": "2hsKYrCjEnAdkQtD2SVdFGZoTANtGfiJmt9Wc1UNuhARBmjDXPiH4if8wDJNM8iQnaaAZFjWVosn4hYQsALNoqaV",
  "key8": "343Gir6QYBgMR8gmx5HRyh7purRBShMgyTjYDsdyLLGSRyQZUNMBEMKQPmjcqPzX3s3bmahrWLSSJftWYVe51Y2h",
  "key9": "4HhWjLhGK4uXv4UMxwhosSw5CUUPcT8DSyTjkHgsVh7AYHhPfDkKDtS18iemEu8YQzd7xDf3FhWPePjd6S5uoHpL",
  "key10": "3GBYHfitXPCVYgkrLRzJd8jmkjCjQR9hmtyGaLaS56cLum62U7Psbjw4VAbxPvcFGncoEagcq4AJhhNVSU5Hti6M",
  "key11": "5u6NCZFibyKEHsW5QLSw6YzpcheLB2fwaDQeSqjwMgLLg8REXQRjEPpVziEHYdgu2RzQsUzTUZJyYTEVYipLzpma",
  "key12": "48ikiLoGzmDK88YQKwGq2ZBx2hcpgBtLswUV4tdziuZGcA5okFhDj22KtBq65YjuULdMKar4a3YKmHgTgBY89Y1L",
  "key13": "4Gi8PTyoLwN8GJX2ftaaNQBmboveF6wjxtFbiEQxn9CNvPTu6jybZxH1nPa6Wh2GxqSDVKxeF4Rj1XLif5hLDeF5",
  "key14": "2ednjTAEQLMReYvPidD8EjCiBTm6nz9bY6GiKZr4LMhd5YaDLegEgU3dc4dTUbkcNqE9bwFahP4JkbmF6HMp9ns3",
  "key15": "4M7fmFWyLceZYqkCDywyZHJxRpB2W7JayYwPUeiE4m8WxLqhz4vTuP5UdDVFo5HkrsbtQ8tvhZTupJpCt9nT1D9m",
  "key16": "itAf8KF2aTfxiWbGosi28uBp8fQHk5dmJHpA8CLnt7zwZY7Xxrm9DjXayFXrN33qEZBhua374cfAad81ddXsbwn",
  "key17": "4NDR7QUj2fDqwE33gfBQy6WaQboPvib5xWqWLZoUjkT53iVtc7fNSuv1gL2y8XAtoJCm7BGNj19cC5SmuTfjHMYB",
  "key18": "4rKWVBwLjimnbwE62XanNdy38V4UnhTdySJuWMqoanbBH97M8N2eYWJ6pMWLhW4tamJ8o5iF8YStjF4cdridavQ1",
  "key19": "4ytVmjmJxq2GUnaDRXGw7BC1yNq8qXa9hXmvUMUeGgmzKKik2eDjrBHcQGZM4JtT9RLgkDz9jPYcmNSdxbE45hvL",
  "key20": "2QNgvcr5fWSRSidcaJqSmKX1rYnQZzD6ciN2kozfWHKRdyWEdkkQVD5cv5g4Gn8JhDmFfxm9YH4mPW84qEGYNuuz",
  "key21": "3rCxCZY7qkj84YMJizJc6HWUpXpSfnfUzMbpZwXuq83QiPmV18Fkh81xHYejK1BsgXiiNPuLiZmatvRoZjscjdAf",
  "key22": "4gdh1vCzSyYRtiJAMVaUUuvVKreGq32ww5grxH6XDjrLaLiCbuCXA1526Ffyt3J8NxzYsLx18Nc95d1cxERG1Jw9",
  "key23": "2icE213zFtTifi7xfy68fi9QS742dVbtPY6mErK52gXTPwq8gy6fGB2xL8ygCRkd74HmTbL4UkYM7ptGPDYhJpBz",
  "key24": "4UnkwWaDxwFcz6Do9FQFfkSUrwG57R6M9gevSd1kfSLetWFM55TmvSBxRsZBHxYDrP3P8boHJbWfE3SWdpvgKAKB",
  "key25": "39gxoUpjARfG3xsrGvCH2HqmWpjsXfGvn8gqNTjk6SBRLDGJgzbGuB38sinzHFrkqhoPHSUPbUY7xKxhhS2rc8tL",
  "key26": "4x5aPG3sdQRtY7Gr1dZrMM8cTMXXkGhYN9NfipJ3u3KiftV5cEkHo2JsXwbMCyyS2qe1itrPdWZjnxFyTTUCQXW2",
  "key27": "8nt7VQ6HL422dTR6uLJCfsM7rY2GGvbn8zBRo73Tgn72TbVNXBf9byc3Q2kagpuHA5DR5h1uV2DvCvR4W1uCt8z",
  "key28": "wPJMPAWRgwxmKd4i6urqwe1CrFmYU2pX2sYihUZVHpWqcDjTjvyHmwE8gMDFPeWC2DUr9FiFXLTSRgvXMVBpPqM",
  "key29": "GFz5TNR8xgCPhrTAwTWGBZhL3GLKUzt4zmb8A2XDajoQjBnxy4g9ndmeGeNSdHuDP6ohe1cw6wi5hA27zuv1jsr",
  "key30": "5hueMNKFfhb8JTrSdvXp9RkhWBynRedkggWHU4KhDX4Gf2op7mJgoZ7ihwo4XnbuXS12zn9i4PokBz5SuaxYETXC",
  "key31": "5u2n8E2kpwivTP9KudLqSu98FbnjcLwb42NmveiQywcxqhuKsZCtxz2MWEZe342Pe2oa5CnoHTJov1KHg52jEY3C",
  "key32": "4vyi4YWw8WZzQ8tob5KU5s3NUN7Wij84Za68gQyziacSBFcLzTwsmiSVGbPCXKEuZ6Lk8PtyuBvbyHpt6BHSwwV3",
  "key33": "YfcMoiL55P2nXGnWRfRCypBRd9Nfr4v5QWxyDKK11NxcCYNJnukN7QJQxSjr4cz8SPd1fnvvSLSpMa1JxiZKUvH",
  "key34": "3y2GnbicJpmYYYE5fMhs4Vou9Fmb29AVALzUhs8zyY2PeHzXgbprTgqCYw2t8xqw1A2otLz9TgDWdre86aWSiijy",
  "key35": "5wUVZHy33DGSPpVgxRdjABpqoShG7oo6jPtJkg3B8c6PPuB4EPvVkJLgXR5LUKMmZeUiTWHu6pVjTyCWq78gKqye",
  "key36": "3GndVa5pMwyJQDyvgRdQ7TY2jsvn9cwjUL6r6sAdjA639jLMzJSe1B6CHz5BVti2om9FnuGsKM2VW5KGvGwMZ6jt",
  "key37": "3TGC8Z9uwHdk4qgebE3UKhChC42G6eGt6ytbfYnu5kMj3eof237uNzaXvQmLaEbH8VoGbjU8j8xE46uDfXNAdcEW",
  "key38": "kjUxhZjBSitJo9ZNYq8Mnysi9Tn5fXuTUsLt9BKZhu3d8jowqn6spKuAG24a98xevqzb7KHXmY8bjWWXRW61Mes"
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
