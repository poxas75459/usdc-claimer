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
    "3B367qzu7tawHwi8g5DZpqfjSucifXasycPa22D9swSFAaJk7Tpf447sNBWRWjfGu1UCfh8G5StLEWrAv3UrEe3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EiggVSe7smq9VnJT54Cb4rgyxZHHBFZNPw9i9h4JW4qvURY6XrdQnnekPBWqxiUpVmWaWPuv1A87LCxz2myDH6Z",
  "key1": "5X3wtWa6PuL2Lo7pLVX4yqz7UJpENE9x8s1ob5fMpEuiU9aWCe589yBeLeLLS6wkF2t3ASp4bMGWWW8EbH6TwcW3",
  "key2": "4ehwLiwT9SZSsmKXMW9YrXjYPKf3jfXEVnfgPqV6p75rqvjHhQEmXeQyMNDZ3ET6zecpPr9ZwhuAQr6XFucjBd4S",
  "key3": "2rrA9cFnnfeDF1LnXeyVuCZW3mBXzZvKHoQgw8QM6w5niSdHkSSWjwcrEYQ5uGLzCwpAUEQpRFvr3Bnkmv19XZya",
  "key4": "qYiVXZQd3yCVaUWkp5sXn7WdoEKta87Gx9mdyvVizUtxc2JvAumXY62X1F4X1cFiYpFHyqbcHCtUeSXVXWNdvXP",
  "key5": "46mxcxbiyRsyEKVYtCk7WeRunH5cuLAmC9P8M9r4PAmZ8VxKSpMsQefRA7W4iiokrTHE1ZfF24AoxHoVjZHTX9Dd",
  "key6": "5ZAYHrUBjKJZ5bw7UhyyDWww85hVWXCK22DqxgnTz17cxoKhTyMggaSZcbEWkF6v9SUXK9GujcrnxUAGjgBP6phh",
  "key7": "54Gxs6mLZ2zjYZ6x7xM9qpTTpjun2mjJN2Cg181jPD2GWikukrAdZUgPuLpydWwBBMqWdYqqqELXQsZAVUaudBQe",
  "key8": "63RivGUTr3bVK46KAJkboYeZLetgKxzpL8NXLbneAANK9oukdtdeme8JNoHAs88zRgCXQWrWVa4J4bxQ3TiazZtu",
  "key9": "ZS9BSSHw7Hqj4jJzt24fzdL6KjDZaPcucc9iNWNtxoJWTKgD6uMLyHgGZPuT4p4HWaSYoWbrhZMHwFyYcPfTWbF",
  "key10": "2Z54oXUe5wjFgBxZuRQDQrnCrYXksoXV2ejy4xAB2DrgNts5cwNFxMJa1pT9BntA4ojYqD18ZppAp5LyXZtVTaoE",
  "key11": "3xhJuZQjZ3JwXzCHRPvhVLaHfQZCPXbt3jTZi7fKubkKG1vQyxjhQLJdUocc75a5x9C7k53MjKGzpyRSBs6Wa1Q6",
  "key12": "5hq1yF6kxbPREZstK6k1e9YwigYWHAzoyHX68bXGPonjuy83eU2HP9dmUkLvgqk5siXL59uwm2HGQzp8TWtKMDKS",
  "key13": "5N9iy6ydLs4S8fTcV9sTDrXCqWnLUzUfv85je7knzCeTjdB9peH3Qtmx4dbJ2G6gnJ8sGTAVE8JUbJQV493wqidc",
  "key14": "51gi8P3qyZbtEafNxjgf2Lgx2PW1qULv45FypYRTjUQiru2A5wBfNfScU7RfLpJxepTmm4VDCr5yYFiZ62cXJF6j",
  "key15": "2HRzyyZL74tXswT8nB7P2XUHg5Bo56u1SV7uZKBFXn4PLhGDsx7BRtLtkYSCuynquE5AbB16uuekeDYWTYFgmx9W",
  "key16": "3goAh572nBP4MsgmVqQFNq881CjR8emCqeyDkUmcEbFZZWjDnbNVi6NwfvtY7u8SJgZgUimDkTpCsiNPWkZx3TAp",
  "key17": "tjgLkEm8YcLU7W2M7BLV4FgRiRQaEU4FT23puSpSpTSeXjyda8Nx1GPiBLq7rh2STdBck6LRzdSUtu9568VZBMu",
  "key18": "5xGLDczmSFZZV18DrZg9T8JW9YMBZrCQ4YzjcnKtBC2G1W1bXKFXHqrZZ8eNHXkhK2jPNmxECdxQZaDfZi96FnWe",
  "key19": "32QHELd2JxoJxNp6gnuRkZkUUBTeyKfUV76sgXaa4qQhEfuZEqfu9KJwHuZUbHk29ERCfaKxv8QzAKiEHffUH2J",
  "key20": "d3jPA1neyU4cMuepJbuz6wbjq5SnnGmqUdxLZSbVv5Yv31mHNYs4MEPCTAgLebN4cPqzEk52HSnzsjbtRCMNwk6",
  "key21": "5eGHcTmJuvSukGQpS4M9MCm7nym43zN4JJCg7gxRcXcjRQ1F8AMEkQzjtXKCjDi2enKFeKCdPXpMjfv2VfrQqLEt",
  "key22": "3GRaLUkZaxfJp2YbVkKeFrKU7FB221PRYuYsdkoAcL82cVGcTcZsdkoztWGW1Pck28LPRgZk73ym7RNYbMXnvsiP",
  "key23": "53ssqpWR3aZGkQiXGWEMNDPG21aQtGtUTDukcNcYjE8M4FafuxegBRe4ym5XaDd9tW6Z9fHF12a5wMCqiYMeZbB2",
  "key24": "ybtf8kt9LTeWcaafCiMjaAs7H4wDm4knHucXmR5MEeczPX9YDznzQhH2iZq6MJ2iv6avYVgaexK4JPAuLXtbfMh",
  "key25": "4KMaDTXzEoCLZs2dfJJa89VUmQnCWYrSah4SdvuVaaWYsmAH9xQzhYgBbP55mqzQRXBEavPhC7nqtJHhPrMyfaX4",
  "key26": "4CGArZX4rPpBZCmv4daabTREihUVjcntrffnry2bUT7qL4JTf4ARapCbz4kBQeXYrMWhsdjdxNE24qhspBnCuwTZ",
  "key27": "4roxr6vi5GLyLkPNEJ8TEdT9RG69qPkDYNfGepYpBwU9xnTPfEyEMc5w8CJdW5EaNb9icjb6nuzXGSGj18M3RdGH",
  "key28": "j8scw7BWa8Za6XBPgWXHp1yuRniv4k6idLfY9q3W8JuznQQ4TKKmpPgSm4NEY8X89w4AcHnRxAKV8y7QJvbZNZu",
  "key29": "3WLGRY8eYZmLHjJ4h6ymr9dKsJV5je8iwv8YgasaHVCaCP6AXhTb9DhzBGmyVaGEaStts9h7mVsdm5mUjsGDP7m3",
  "key30": "2FFGsZD2okDPDAxcDy6GukYR9qpEXobHZyLz7ZDDncmJjb72jCXyWmQtwqrESH6uzraoRBneRftbKQkdRFJftGb",
  "key31": "4U9WMBVYwrDVD7CwS74JE6GnTTV4usqi2z5zkYgxS1aJH4HcteUvpwoDQmrMMxWgkvdn1JTVaeNwtdcWVZGhfYyQ",
  "key32": "3Z5NApDGxXyRU29FV6rxz4w3VNM217VwcQx1o9AYyyQESEHSWMH9HiKzzfpvH9LGHqh3pazdkNt5r5e8tt4Tu2nW",
  "key33": "MCJNxub3MCLdLuCZYDqswPPRudYCbQDDN6gXN2QXg9qqcjmkdu8ysWz2dE5SrbGTEFBqbWqM9cPY4WQRjmQnTV4",
  "key34": "5RD62SVkda6w9rT3HKrLavjp1yr3dkVr4SSCc5VQbYFrftk9tdFENnVXfYLqWeBui6LncznSPr7iE9wLQm3Lqe63",
  "key35": "4kSyS7TC9fr4qsvnr2jhs2wS8as5QFMT9ksFAj3ke17SoWtcfAveDtZJu62iJ5HwsDRKVHQa8FJbWzLh8HpgRfiv",
  "key36": "u5REusnPTkqJJsupdEKXdvCY77yJQUyAa3par5ChRyXGYZnawpNZ9GsVyyMFAyG4WqLzWkBjJdR6hdPZtzWNEkH",
  "key37": "2KwPwNicuHzRefow3eH45r113PCYMoiUrwdYVvyPh1vCNYs2nby98xtP4V1TbUatvUcGxoiP345nXqA1b93H4sv7",
  "key38": "3mKtKCF7BG6cbCRCu1fqdGbUwPQL2jhaLAYa7YtXBduu1JnKB8KGkjBjYJRQKopVR8jTNFvxLjnLuULhviqCusBX",
  "key39": "4PqtdrnjsD1iYqvZhVeiT7BU44dAV7VYNeWQLf5bzWs6Y6ij9sYoR2EWXMjURwD8oAW25nXSd4yT5UA8ZMgoA5fe",
  "key40": "zzpqVgH4ud8qqiBsyrGZ91HZiosV4W1sSGZWAFyRjjwZQTEJV31AHwEa8UfnJtxh4k8s7RcwAktcwJ3x16nnC48",
  "key41": "4bf5687jCJzY2MsxwSvigZ6gEubZY5odrqJBFMouCS1GQZhznSWmYFS1ignZPTYb8B3VwuFjHZgjdr1QeyaUVKqH",
  "key42": "3wPjiDwVSFjLpzupryJGNGegRaBjmsWesS6Gh34KZ937j5Er4SSULr8FmvzspJdVkm51QFQzqMCX3CykJ4DmASTz",
  "key43": "48qi8rAMTzCKDh14M7BFkreBg8rPWnBe8RTFnwS6Dn55iA5Nh2bsbrk2dQaM1FrR44oKyeawFpU8hebHj67Qgr53",
  "key44": "5BFNPnN1cisSs2FkDxtKR9xxPp3FaEjy4Ri8Ryqh3D83Crg5wzaDCzsGecLp4CQ7giHnRhpzV4Dm9iG4GmL39B9L",
  "key45": "2AjfpTZF3x1t23pG43B4kqK8VhDurRMj6c2LJ8ffjVkm84jsMGWHsV85T2wGELGtyHbyWvhWN8d4iQEc8Ta3bwy1"
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
