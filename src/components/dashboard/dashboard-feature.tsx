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
    "4HuPw8g5Zv9DoG5CBMf4eJzYbuHcQMpSrHVQ2vFTnx6RQJivnEraCGpm5Q2X6Pm1FXANMxnoktMQUNDrQJXpqxqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tk7PR82LaGXsJcAhfUqpc9HCcVVgRVjtGb7iVxHUpcM6kvuLnBEmqTDBqYXQ2zH25a6fnEceFGQQQgbLTARveKY",
  "key1": "3RfwaughqMrH6KV5iXpLHVDqe9FaKFr647uX9uhMWK9eFGFfgRctVpSbTqpj6rFciVFavVE673fBhB1XADX9p9co",
  "key2": "4UsufkxduS3mwEcFAWVkvQTLFVqDMvz4otfUadQQtWbmwf23yQdGt1uh76p4HbxAnPANKuCcm7e2k6VtQfapUpq5",
  "key3": "5yWXzwcfdL5Hmf21mkhfWDBEgYk45SBfhJZfJdXE8HrsGib7s8j1N7d4d1ioBvnNPzJtrtXcEhzLLMBGmJcTGYmV",
  "key4": "2oBxrfgVDZeGujMQaQW8jvcRiu4iYy2NFKzQDSMe4SWRMBTNPqoJGnEFQvAu6pTHnzMzSKXLabdeXEjuHbRtbSsR",
  "key5": "gVJEDS1T67XjsXDdjMQpHKfqyTh6btiHDnTEZzdrU45o5u1ve5MFC76p73FPUXDvPEi2xKFxnHzhmyQegqTMnsm",
  "key6": "ebQDQ8ubuCU6SHZzxqr2Pq1aaT6bAjX4u13hjdoqP8NQmrWxJgne7JJdJ5TT5BfB7Kb6jXKqgKSGYkmimwKCU1T",
  "key7": "59CktLnCJ9TzYah3gyZidFoiW9K1WYf9QYFePEwQ5NKFQxPtkdewS4CwtZ6E7CLXHKrwwH1oFvpQatbnhuqVhEdm",
  "key8": "5ZsvcobqsV8px7j4cEyxessKrbvH8L2A7wwesLNtjSPc6cNiN3UKsvaXyAHKm99vbFG8ZrhfbCCV3qAdf3XejNNY",
  "key9": "3cqqM64SThm89LMvK9BgpQxm4hik184DmzCXfwjFXoCfug67LFLVtigFosSBNxfErvfLZnTaasApmFqMRyDXQzXS",
  "key10": "592uGyezmtm1AGYtpUrtZx4dPgqT9WbWoUd5JiyExyY9K9bjAfTCe8wUbebJvd84zeXKwUQS72xHJs2AxYwALdik",
  "key11": "TGK328oCk5VgfNuUNKhcdwdiMqQpsrWT1iZiKeZcoX4Qpg3yDpZ2Kfix5tR7HQqWvpqPoybenGahkRSSYhDmWj2",
  "key12": "2YDPYtqq8oZdsWHsV59jvN4dXYe9dRFG54cFvirQfwCUMqQeTXY8p8PojjeGaiFyZ9GVckKXWKFryUnZaU2756tA",
  "key13": "3HRqGgzzYMnx8hgsw8mAmNZuTDrcGfxvx2zJQPJstWUC24KJVqqPnV6iLrCugw8fSUbPbChv9uAcfzuXkpUYJ8VT",
  "key14": "5zYdFWXG1z94jMwfdEvQC3578LdvGYTeMVivCDXaKLbrVq4sT24X8vaESqsXAdFgVoSP1EaVAVTMVWcPEyYQ7K4G",
  "key15": "2SAYTU8ZvxobtXuqpw5ieBxPCDc2F4pjGrTUjLN1bkTFhQbZ2U5WSmmbjA4dLVw4A274CcWDwAoy6w6HRNsce5ax",
  "key16": "2diwy4jCVJHMwGvF1imKw5LTG6JjYk1tQefvB3x4XGu3g1aVu6eUUV7jdzdGPY8tUTmwkc5GhYoBqTVcWXqUh7xx",
  "key17": "5FPfTB3MZ9kGsbbemj3NDp7MZg3McRzCi8rgJFFnvxNy3H3rC9YmSyCHtTXuBtEDMTfja3QodDVbwc6qxUJjdyPp",
  "key18": "4sGmYU67aVAC6SHeT3LcmFvzDrrbLu4awDaBZkeybq7sTBZ795SNaj6p1KhgC4TY4n2L6oFKVTrkfcvXJbWsMHi4",
  "key19": "4Pdy8SrGJrEXWHJGJJJdWF5nDayZe3TvBLEPKYcSLE7gVVYBk8JY6dEtkEyAMPjiby4eSnsXSALBBnMQN314YcqM",
  "key20": "22h5NvVT8UkvJgE1LW5LR7YFkMgey1suDXpNQQCTbfQHEYjx4zzVgEk5NP5Lv2JgNUFtpr8J438GCmqaXs7Ld4Fz",
  "key21": "4q6umGsjbFxbtkcBJoyMDBKp98qbRwdY1hYwDe3n1dxusv7j4Ng9ZRE9VeuQy4R1hXb6zTJDPw2EpV47tyEjwwCu",
  "key22": "4e8sQzVNG32KoozCnPPkVKLALje41ppqNdPwJB81pzR7v6kkw8QtquKcMTYziS5csEuhp8d11Z2rUyjWXQ3EW8Gb",
  "key23": "4xBCznBNVY8XxotbJ9NWiSqNw31vrXhAZm9V717S3z7uNFb8pMVYDd2vEqXRJcR71S9wNAMJ33AxRtCGUL3jrsxq",
  "key24": "VfRNkvr7SvCPQxVbySd4vJ7XySvtho38KFcp3TqvFrUDRbX1zfREdVUvGAfVCjSTMaaqP45PyUm7kfcgWRyL8o1",
  "key25": "5A4Zgr1zNYZMsV8q4LmR77UyXWmovCP6CRQEGEG1miJJ2EeRoUBv2cLGMsTE6YCTz6WBiqUoWn5j5cX49Eqiin6U",
  "key26": "4ghYriKVxBKX7rmpzRWa42Gp5ZUsebRqfGRxLvffXakLF9iewPNuB9zPCSYyhpxBTqBM5xgBsj5sqVs1PNpNE9X5",
  "key27": "CCTEYwbzk6kZVbj8J9eANhxk9Mzb55Muj5iXZ85rtUyw7eHMKPMuPkA5Q4GzLgBtshcD4wgBQV1iXoPLpSACbxH",
  "key28": "3TCXdr9QUweMFcHtHk7LppSxBVpY9xHeyG6VGDcPDKgKnb9Vvf1WvSopzDCFG4WPXkmC2wWVAGUrdc7faoNHe3rX",
  "key29": "34DjbjwiVC1GXpBwULkNMBKavQ5g9Ni9cT5sSXUBeWdMXyFwRvJEZ9W7Yug17WBrnMwyzAHNAqszytH7Tuifd7t9",
  "key30": "1PMG7vxfKTiz5saEG1EFcEYhQB7pT5eePwjRJ8pxvzT9yJ8tQzXXs9yWNddwLFNJN7qy8tB4WaiRdKmZJhm7bdz",
  "key31": "WkYGbYJUZchpwmemmN8wkHjb9mnBHutUrtNtHxVxSTfpqmFNwrqBQAc6HSHc3RT3LVgCVSRSxTHN8oZrxWEPi6S",
  "key32": "3vTZqYnBYVGP8Fg6WWCWbQwd6Uk18x1zmeoiTwmH7ctWJtuqDtqMPcxQ1qHQr7jzGa63hVpGsZev9vkXiV2hPLgj",
  "key33": "MQU7azgCWynMycLVTnq8iwuDjg2duQyrWqAkoKGiVio24mB7PRXUdA7eLJ3nJsg4uLxTdVPDdHkbLFU9MWVGwyB",
  "key34": "2yTdn4oNhrMQNgidWNahaKeCvUca9nK1UBqMyxJ6J7KJMcNqH3E3oW8idWhTJUova2g71Wedr66ovvMm8P5CoZCW",
  "key35": "2frtdTdJ1zif3qQstq5UQ9NWwGwVN85NiprxaxM5dfuJY31cM3gBgMaAe86yDdcatTwuutdc3mGkgjpXgLb6MdwM",
  "key36": "qLBY5f6w3TohXEL9zLuuytnQyi3R1BzHbCSNM7ZKisG95RvsLh9Q9MUceAykoFZPd4siZo8SMfJPzmfTVxKgaks",
  "key37": "5Lgi2fPASufhyiGpYfakT5185kfudjiSbAXr3h4ZQ1okg4co4389soLL8zLsLXvu2v8FYGhgsh4WAMRa9wPK3dkC",
  "key38": "3Gtm8cKmXFgnCZgUBtWYS5uLLAn7xT7aKChUjgkSELTHSoT3DEdN2N8YXjF4FAPcDxRRRUUyTaSTwJkYurzycmTT",
  "key39": "4hKK7FMYjrhNZwZT4C4ZHExByHEYm14RDNFZqve6q21Q3Vr2122iKQw5TDukLPhkFhDC1S7qr8RHiaUdkuGd649T",
  "key40": "7wzc1YAezMge2eRnYuBD7rnGHqk19VMt1yCLPW7UjVjaqhKnwynFsZksbD7bCkWSCApaEHv1n26cDNseqKzWmD7",
  "key41": "5HbLBQ1SP4x9d1arL71uee56UxGZwtSfUrcz5a1aZCHdR6HuayYUuLKkTNaWZFvrHZxQG1sqsLpHtmRkDZ1u1meH",
  "key42": "3CAhCozqDGLkzF7ZaFTQDAupw4jnmpjqnPqme261v8dyYsZT1dCPK4UottHbBhQwLJiP4zbe6z2muUfhZcxBYPB8",
  "key43": "2AsfpDz7zXgBJpsd2CPsvdE2Ees3kpf4X3ZYssFMrxLLQaTGMheq2v7khTyr9s7LV6v7fNWoVHvQ4SZ53gFM1kVG",
  "key44": "37u9sWcN1DmG15CsRWhC5LqgUWpXp2eEDd9Aib8udNbaQBduufXoHewxfTtWta9gXELC9EqZRABiEM4rk1eqiF8h",
  "key45": "4HwbqCzpUNNuNSgJn1usdRsFvutMuzGdn61dbZ5xMDNqfzD9cH9MNvNFEwosqssTt683JcPKywF76ESJe4gwhSJB",
  "key46": "2tR1CSVB7DrwbVwqmTvT4jaXvLfChGb7GG3G7HRxPA3HAxfb3vWHdBVt6M2r1VSKzsTRY8ZrR1XVf2TT5eB8B22C",
  "key47": "2QVUpU8FLyykjcttKiEsFZkuJz4Nii48Lj8s2ZQiaUw7HRTKG8t12eGPj29BYoFdTi4zCyGqAXZ3SUK3ZQsYfWu8",
  "key48": "5yoc5KagkK3kBXfHwb9yRkQC9iPuNPmXX4BcP3wiRrQojf72LuNvjSPDzXvk88gZjteFA2NtZupJdLHW9BWCBM9G",
  "key49": "59jd8Z3ueUU2bzicB3UCLVs4ABCA8ddriFdRRqQxDfxvEkJKMSEb85qSGVz47XPXUoqGhwsyxrQboWnZxgA9nDNb"
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
