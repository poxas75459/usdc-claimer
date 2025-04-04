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
    "3VkPwz3VR9LvCZz3qaMPxT8B1CwMoiHtSubiDbYeBDwJ1d9wxj8wNk8atyai23sTCKWXmXTPgnoXk6VZKEVC71G4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ACzdjyC8f1PZPzKQMBD7niDhhoQKFtz4iLwiyZ8f1i2NVw6WE4FQXvCa4PjVxzxNCQPNL4aCfyVo4JSruKb1WEA",
  "key1": "2Wyz51u5ZDygVNvE1XvKjS1dBNKfFKpZ6RFMwvjUgfxsHvyQv8NnJmjDxeojhikHqgDLbwjhfJX4M3AXJ9tayhSp",
  "key2": "3KCwUgPbype2bGGNFuPHBMZcdt6KUQfndfoiThUysmncnpyXkLvSb6FuwQ3vBZjWKkgdKkc1357zcZVHRGt94NCi",
  "key3": "37LZLzVFfA1pKWkHuGL77zH9LHhtoEqzyPvk8MbveGR5aYBdq15mWEGGtqaTDNHj78VShEVHKHQD128vBPDcHrMo",
  "key4": "3cpZbEJiXJ3i9QdbTGp38n2TxrSin1sgEzNAFoiyCcS5G2voYyVCY7NcXjJgtndJnPTG6CpQriB2FU7BrmumEdGq",
  "key5": "NYcxaGHAYBkY1eZ7c6TKXvuZg9mZSTNRHmWyRoPrt5FZEgRQcykbTGtor31SRqk7dAmJWTmoZqbH8g5pKbaCezv",
  "key6": "38G2MeQNikx7sPiP63juGCaXxZLPJe3wQ1Eutip2fhwBaKTwFGXiKeH95Tqv3ZPtG9YDeLTfrq8nsp1LmTYAvbZN",
  "key7": "5hTqBfDi4ArEeaLbi17TguadeG29H8pvnoCN3QdETRWgm8JyjE9aHd9bkPbKySnKU9yghUXD2VBvzEjQtEujS9fY",
  "key8": "5HmLu2mUBnqUx4mwXnxkkdAMSDJtK4cYAp9wRBtE5nRSWnTRazjs7ynWhvhfChYqQipxE9cdhn6bkmSafrn5xQGq",
  "key9": "65m9fLboe6MCKJSfp2ctCFUB36F8AeuQDvk43BfZ2Zim5eNnBeym4RAh28WLZk7SqYyrXPdL25qLK1NXGDZBccZH",
  "key10": "5UPdRiY1uKe8f4qcTeeUhiRU2pkYowJne8aXPcCyUYQTDQazE8FSWwt5K6igQdqwr89Jbunu3ESn5Vx23GbXMwv4",
  "key11": "yJXLzHoHWt1Ygj2kPweFpkyZKEHfjR9BSQEVyeRCCeKcy8V5iw2ZrKrN45emjwrajdnujvUb9fMvdMrgrraNrMt",
  "key12": "v9WuHrJKwnNfC2ACbYUrdZViaP1vU1yK2LqFiPs3CAh9mk3fRzSu672vwoQ9E58fEAedE2bx66oU2ypXQY9313v",
  "key13": "aaqw2jZYvxVnvGY2HCQ7Fon8HNGWS4Vr3X7TjXcSiadv3dmLgWiwkQ6CgvSFDMNfTzsF3VpURrE6hBpA5TVX5VB",
  "key14": "34ymT7kw7Sfyg9Et6G4HRQrxYceT2Q9MHTuZn298nXEoEkNFnTKwXKPFoxbVs3jvq4NYxhh4BJ1pkUvR3YdkSarJ",
  "key15": "yXGLQxRTChf1UjsmeEutoj6fDZTEnMyD7L25L7dMxZqrYX4eYou88qpV9kPKK5taUdXs97C5S86CgB8J8kRatnz",
  "key16": "4JgiEvsDFQCyTB38VvK7mUJ9QTwwJDJJ5qZRsnKxscj4r4N9gN8vBxk9XxEWT2yCJc66mJzDddKqa88WsUnznAq2",
  "key17": "41T5ZXz7FZSquRMaaM5uQ9FvcYamNiwryxLBEfykzjo9pY71KVuXvHLHMg1vb68JjDpXYnwBmxErh69yJHXPdUxT",
  "key18": "5q5YY1ynyYYoPfowdmVi8W7NXfmCu2tdE9VNuvwNgWzohfCCRtSTxjaRG9NgAhzmU3zHv3opi3HouMqXMjXRzmet",
  "key19": "5hPjeGpxGdDURgRHZq4q3U636Q9tkcJAcrJSJFBwgkr2HtkxovttvR4iCbbCYazPb6KAwyc66nCRBpgjgCGXe2id",
  "key20": "21ba8FKB48UQYERkbPJx8soqsgsF4xA7oDcNW13diTjV1LxLGVKfGGxfapykaivcvRw3HVREiCqmfgRUNEK2wE5t",
  "key21": "5jWMWNA1us8saLmHYKL4uvF1h23hx4Jo3Yn14awgq3dNXC2g4CYDRfTrpy3HKMxqCpDk8U5KRYsvUWY6XxHgea1D",
  "key22": "6639LKEUpU7a7H4LVtdRnV4Bbb8KhsHny7kJQFmwBB3N6spvbYDp2QMaVYN3fF8SZmq1S6JyB4EZaGFDgNYEgof5",
  "key23": "4KaNJ1X4TFUb6Sj7CrdTgHZvbBFpg8mPaJZuKTLsDRgM6ig3KudJxxWo74pdGWVhaFFaZXXkfh9oha6e8Akx49Mp",
  "key24": "3gT3K7M52Ek8zQ7JDQwEu9EnNcrk2Bs9Pv5WVtpxtThJampCHSEDDPrzXgGrT8pWGUeajUcn6cG94XhYPeSSAazo",
  "key25": "4W9LFmcdhMBKrMR5cVSyEUfgEfT6Ba2jXRiBNyMph7mfnkePyk9LUbt2pDBDRU4PGoGCvDBawJbFPxDdas6UZPyv",
  "key26": "2bCBsw2XUMUYcLgCMwiyaKtvR6XcPxh3ZW4j1eNur7QWopnEo1wEed8Ptinohe2yMbVUn9X8xszny41fkDC2X516",
  "key27": "678GnujVPsM5zNB8u5EUfwjfg9efFZJVVumGBw5dTBiW7xykbnh77n9Kvze3JY5eRdfBpNACv5T3SXToxyxGH8DP",
  "key28": "4R5Lz2N3nqS7ZNiWCes5QUGXLiNeicZd8kox14e8z6nAkBPnn2EkAtj4UDcUiGHhLzVcuSJLFg5cD4LErjhUXK23",
  "key29": "574MqPZTiG3nwo6TfXBMvXor6W7vJrmez34eQRRCCGexceC91tex4SCx6n7MbQhcizHcXRpTcAxCRhcwstUJKKic",
  "key30": "G5NWnF8UzoHbxdJYG8EjVzN238e9McEtLZgyUJmVV8Q67BAejeJCjy7CsfUtUoir5ijfTQPvxqccbDBwsyKFvVu",
  "key31": "66RLm9E4sRSUR5TvszAkhxhhYcooneKd3kJMePvzk1KvAppdmUy1kZJDBduMzyD5tVia11EP63LCRGK4hjnwwyGe",
  "key32": "5apv6wfB57QHtyZtAzfNGZc12i26cHHiaJLeBt3xoUQawVLS9hVacYw3b3Cwm1ym7wQYWduJnPPmEbyGxfqgi66n",
  "key33": "3Cz8guSmzTGgymBnMRkYxXhaJH7SaehCC4pLCojUMtjTqcZVRdnvyWo1eGEfss3sJ8uqiv7S7o5wTTgpur87tjnN",
  "key34": "4VqznkR6K2fLfAkr4KLkxpmwKkgqdEwdGjeXicWCGsPNjr49Txr6Z6i128YhCSF7JjU4XmxZyXCP8dtVoUT7xhmK",
  "key35": "T8W3t9psvt4VcXXjpAojEhcWwfmc9MmYVTwxmdPFauPhYVgs5ug94Z6ymSzvpxbgGN1gU94WDy9mbMgTJfsXYN9",
  "key36": "3oDHhydLAHYvPj8KbrvvVR264TzNRrvpRVLbf5uLvs55nCgLQvHD8qGzNXyBQSGU5m67BJo3YDXcec3sATs4QBM5",
  "key37": "3C7weJxDb19QV2PVxF5moXHG3p64AxhUuzaXF8ejeQ34pPAQZZtFcteTVpzgyjmJ6YVEnGb8dwubyCDPVCAzkheB",
  "key38": "v82Jte1qJPow7AjYtpitjBibjgZsd4hUkX6yGjF2iQrPo94vHWsUjDwfdttprmxv1e5wpxypBL6TZv5C8ebqEfW",
  "key39": "3KHS3zuDgKA2jE7j2ZivZhxRYJUqRLAnYWDtihzzDV99qpV3tWU6ki4wDWRAaKtHZpavBkWF82oVxPuoRyikhteo",
  "key40": "Nzu9TFCqHEKsSeQTj99UXUCcRGhhnA16jyiQRBoB5dgTTARCaCwAEnn9wxj46Mt8waguHpZ2qh16qekTWcMHwFu",
  "key41": "5c6KfXMVr8wsKyvEXBftMNMjhfpQ13VaDzaSZMEn6cLqArncGFdPjLt7oLdqCLXmDCkB2YA2fyakJY4E8WZXRCsr",
  "key42": "4kjv5hqLBJHgb4XbcpngwPE1xcu51Vvm1E1ufKLaLjXwv74osFZWCQh2dtcnG8qahMkJU4g8cZrhLg6XwLa2tAY3",
  "key43": "2yN3kqaCvcNtVNMevx2LhdES4zzWiJUu5seYhZ4PT4Gj6m1dSRcy8dYJvfPrtJdurteBvH9KAhNmJ1Qz468sUXbz",
  "key44": "5YjyGSLXdq2YyYssdarcfvZLNs5UB7QizD33bJR1C6AJcjrqKW9VXm5zzpghfWhekBMKL5BSwej5VeGAzzHdE5WU",
  "key45": "nBvWpU6vxND1vunXcBddGN2srPGqvQnNhUXqARq8fL1B4PWzMU9asRE653yyNe5dR4tE6kdhdNQ38y9ckMu3JyA",
  "key46": "4ghu5JmQ4mBvA8GccLUHamQxxoBa1TZBNJVTsnXnybMvUTMrki8JcUMVG4ZknMkEfbHZBmb3n59jgtWbu4bSaRTc",
  "key47": "2bFL4R7T42Gd2ycAMBiTvn1JAyfUKjkoVJ4EiiqLzvzhXAHMhsXZepbQZCctv9HM4jateupGGaMgXHDnTXJUJkQ5",
  "key48": "Vr7h1fQoFMtY5a3hLcQZ9bgvzHaWRLjm1Xv4hJtFYrMmwbKfd3RNb4MxiskpiE5C3TCbjAGPQjtS2mRj2y1NPxA",
  "key49": "5oRbapMa6wrYkTGvdYodgoaWWvBU8MizGy67a8eKw3gyispFthFKeCEURz46LeGpiw5TDqvQBvSqdN6JHPyP8YGZ"
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
