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
    "5KWfU5chFF8Kx29ZggxDvsye7TjHS37nqL5MMARr6t8vZzxabudyzsbUDE6kh3wV96SYexibfs1Di5drU2E1MYvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kpMfSnmvvdmu4DVzA43r2dX1tbaFRvFWHepws6V6oQb86utWVhJvNQrVRseoK2FUtF1tA9FbAwxrHqo8HXrNmRc",
  "key1": "2nYWwV8hbx2PZmr1QHkG1zcGt7covoMPqw59upXwNvAkprs149myEjoognp4MCYWXE2H3dbVdegUVuf3VA4f514t",
  "key2": "5DEonEs3Wqoe1v5geVYc6pMzBro8YKBosSy1ZrG7oFUoQh2bGx1nJ2rs15JgPKTjx3CW5U8bHtWfxiBaYr9Giwax",
  "key3": "LCkcizsQrTphn6XYhiULprNNwSkXzzDdDDGAPbjhEwFEM1AbWhxuVzM6jHLucwioFscNU6QdyrahcurUFMEvdzJ",
  "key4": "5iMhrxjhKWZQzRTNBUYcC8mijw9yczbfeuYt5FjSFpHRuHkue64r5TnLt3Cn23PpK3s6y3Rp44ZRvvXbTGdB596s",
  "key5": "E7TvCLb98K9LTEiFRiRDtqEiUjwKj8P4L77pbVVsmj3oVP3mE97JS2WoXhYHHNwHdUhc6s5BntWLqQhYpk7k8pW",
  "key6": "4vdPsgS55yePCrEKPE9ehyYhv24xpFA5JyfJ7TPH54vFamKQX9meKuPQgstva3soymqvQXCho2DiUr8M4q4s7edj",
  "key7": "2CXTJyotFBn42dS41pLMi53E41xcvtQAaBE42H6eBwiMFA5R2hfoxFc442xEJfKhVNofi7Pwo2PirGnJMtsB4Zvn",
  "key8": "22Keq4XQxasnGqJxfJqRDT5Ag6uzTU325BNVwm2ksMK9oTP7Mt6pDcu6xTMQLfp6vmEVt5Xu2W3tCkfboUAqe8nN",
  "key9": "5FtR71q9pJyqGw3a154rQAY5Q1vf3yeggZzSg7WZdsSWJp5X15TrzLs9pmnusc52QSDXrPTjAQBdvW4LTWkUDw9G",
  "key10": "Ah81Z3ykHgEajoT539PuVA2gJP3r7sLodATNsL7NAs8CzV8pYUpWPcRLK7wJFdGKyXxR1kWJVcRbXxUua5A4aiA",
  "key11": "4Ki5q2Lcg9ZxKieYdq8oeLA43H8FyrtKAyzrdJrbtgXUW6t8GQCyW8mkJFxCPzzhQUkGmAkFi5wbScJiGkTrDeAy",
  "key12": "FX7dbEKM59t9updDEdANHVWRQM9s5cZQE6T3HFMU5ijmkHgrSwqwDknKg81UMakaWRxreuqiZkZzkvLXeUsHVMM",
  "key13": "AuuKXUv4s6ezdaJgkLaM4k81TopR4JJbxQUHYmFtvucFpTQpZvwhbHqdGth8CC1PJoF6C8Xrc2CyvBoscFu7paq",
  "key14": "2iYTqkSoMqRcF5Ez59wF1oqZiVKbihnvbjoG5iKL56zAKHgLZVhvZUHPLQQf1NZyoHoJzJzk8HVq6CLuCUM9WzVd",
  "key15": "GMLmZHwQiZGt7VYy5qpiAuKCLtKk7rTji61MuwZptowpU1kLNMRFMqQQ45sjQYrc1uFWEE1PiGUGcSN9k1nPYDn",
  "key16": "5ZXR97G46SCmKCyaNoGVcJ1DEZNkX9BB4jDtm3wKeTJgQSW3rj1owjpiBwDhNyN69b7vKWY6Y2zjM3xj2E1ix9TY",
  "key17": "43fZyVswWcyhX2evqetwrLKvE2dAnfiuQgLDi5utVcc4SgVenwpVMaBTfMWx6rVF3QgAYdE3YcLGzYesTirkQ3oo",
  "key18": "5d8CY3dRZyPGqYgUBe6Wy9FTh7vnqszfb13YwMuJjG3Siz251BAn3KzfXkXKaMSCYZi2jJQzUuS2uZBwg154WMHe",
  "key19": "4Mie3yeKfSW7sjRmwQNt2ezp3pzky4aJVRRY2gEtRhPep9h8PCS3VrDuFBJiNmoe1RntcBLrXPwRpYrsZARhEbB6",
  "key20": "s4TMy4Qv9DRrtoDa5dgwDLgbHfTvL6J8C2zMrqodFsjJ3A7KcHFhNuGHNBhYWZZKT89yAQtdMiKXuojws786xwB",
  "key21": "4P7ZjU7eTEPYP2QHcKLZQhMTeeFA5xSaHEd7gsyno4GebQydXUqmLnDE3UmabpLktYAc1BPrryuJW77XzEtYVFjy",
  "key22": "4MHammoQ1j3ZTCxpH4uRDrpVRhkMipKYrLEroX1Sb48ewGoexm7UAJRKuQh18Y2xzjg4XJDLSfuHLiDJfs8CiUAw",
  "key23": "5qtgr7bB8mTwtzKY7Fi4gmxYVPS3YWh2vfMz2Qne73wB1ea8E5jmf4MBxpkaTCf5BKx2KJSWKrKnUoP5QR5SmcYw",
  "key24": "5NZ8RJHfNvrh2GvKNo2z9YjK7PKp5D9zyHKqvi2HgjmtWnyWGxsT2ZExwyjtmgdcJQaoUzhycGMTLkxNZ74ZPvoU",
  "key25": "CC6Uwdw4FYBQg4BsoGP8stvivdaayawp7dhbXrjWwAkPCiqLKZ6MkohMnBu4GPErxbfkaa2SuAkSoGUpj2eKTBG",
  "key26": "4p4L8T2ygQ3N2NNXuzPkJRJoAU2Qm1CtuYqyamRmuotsLaF6fd5FFqMXJN3xgTEgWmUJRLaCdKdKTnAXVgmDrdUC",
  "key27": "3ExyFyTmfJJHTSVn4gjjUWNrjkA1GsB2yQh6EVs7XiUssaPgU5AQ9obGS9DxDKKXjgSkBEQCG6DX723L2ADYorDS",
  "key28": "429cSD4DvxDJR2rDEEKiD4ZzWpE7YDcp7f8CzHyTCPPQbG3H7pGvqHCTWX9SnJrdZSbzqwAn5uiLKCwPZWuFeth7",
  "key29": "21Hw8kTawmCP5Qyp5UJfZA2yuABARtnpGK5JrNm17xzsAR31nytxbAYVXCyrURCjYwu6qoZirhPN5rZgtKeK7cJm",
  "key30": "3m1M8hH5oEbCZvDYNbEaH9peWfVU7eFoupNBa6JRcvGqfxvKAfVcaiLD6rkNFfgd2oS48Na9jHz6GgsavRJ28G4P",
  "key31": "5xaFmZg9371akMWi73S5FcUCpJD3ME9py2qdBWVPFNimFJSjb33qUq9eR93TpEgMQV3r9WW2HyLLqn4tNtgcy8dw",
  "key32": "SLSZivPNPh4tdvzxGy9AwFt3V8JFdNk2ZtX2HAPeAFfjvfxVJn3yyZC8vzVK5W4JUmvZYn7rXYKEhcpsQZmX5JW",
  "key33": "mPEWc3yKfJyM6fw25UkniBJY7gbdRqPWEjqBS6bKDYXRetLADAw5dBTsk44yYRLrN24uGhEXeSfmX99nFcw3CFp",
  "key34": "3avqpKnnCCYLekHFGzqE6sWnreQFQZKJYwZmsRrg95sL4RNrMRFDoovfnB6qZBFURzF8g8FPdcq6o6axecH3we6t",
  "key35": "3DMMGcLreAk857WtdRNXpSBnQb3rdLZ5Jymz5k2vWDx1EghpskmBjnH2Ua2NuagkuxE8cHHtSLo4MpcREYufEDkz",
  "key36": "sz6jraJp7dMjM89j34axVF2JAK4gEHaAfk7pvNaMZBMH6uC519B6EtANu4D8k1Bd1tpBHufy58owWYpyQHM2xM3",
  "key37": "4YHXPsQ9psf3aikP29pbyuQfETNcUTzeV5VtJJD5TcZ8P23AxpgLr5q6c4yvrNoCQB1YXza7bjuHebEMqKsyoKEP"
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
