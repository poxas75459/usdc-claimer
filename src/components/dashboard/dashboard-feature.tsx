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
    "Hc6j3J2BRo3y4eSVyRsbdXVcUB11xpLwG87ekkyibnrfKQPKzsbfZ9dTWBU7AJ86FJWRnFaSPzsaLxRXyTWNe7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c1y3q9oNDvbpTGdN9rqoeFmm2UQeN8sGXAUwe6iXV4jXbkTZtRhvTnXuYrT86Z3UqTJsqAgvcLX5AvrA2Z9qjt5",
  "key1": "4rxb6y9LRVfMoxSyogKZN9tyfTHb6zGtL21GeaBQzfLvJzt3dJRD2HkzgJdY6PJncziZdtSbzui9mzgPRHXvHVYs",
  "key2": "24buuCKEADPxb6JpmKr6qiG5HHMg5E5ueGDuXdN3qWYRuJpjDrAkZc4A1vCzaJVN1uekLUhtQWRpjTjnMBCmhNN5",
  "key3": "1EQXrya1HvpS7hAmk6Nt3yjZV5d86KhsoWJrPTg6F9w79NSEcQPFFxjmWyucgwRXGEXuAYEcW3AGVoBEnTXZ5jj",
  "key4": "3ZVA7sf5H27YT9vXpjr7RKoWDtVkTEw6tQrYwMcigst71jR3zx5s2U3pcmmyED5Bp2FurEUDmMEwfknBvWxMqyRg",
  "key5": "2Wyqg9LVkbzu1K9o8mFc2p7Wp2KGjMUztLRXwMMnygcoWxfvyZ92f2mfyp7ZHeVmn8neCWskHooye99muuztR2ms",
  "key6": "2Lnj616xqVaNHqrSddqeoRJqjY1h7eSKdEvqdwNyDy5jd6D1XECXPkpVRgM5t4D65hFsiRF2ubkWUJz9iYndq6KK",
  "key7": "5MuHxiCsmn3ohtt64oingLYkgcQN4vjA7q27Mfo7zMWNPLZ2sCido1qn86k1WeSJU94vrTZAYgQgSSL9uPXYRDDY",
  "key8": "5juJXfqfYyRMtwwBaafWVGPQ1SjaLRK8LW6m7g97eYCaKgumKg1wNWKHHjSnXXmXtUchhbXjQ4sLSGbf4cvkJcK6",
  "key9": "5VAEGAfDYvCDvWokphCwkJVepbAFh35Nqpopn4zwUBBpXyKLTnbVAUJQoP2mDCs7pcBpef4FCRjLn9vZs59KGY4V",
  "key10": "kKiqDG8X4ukgwNTmnTE5WD5bD8QvkkERaKpJEr5iwva8jqtYyevqHTTHCTbqpQNqJsZvcWprd1LPAfkRWq2wvFW",
  "key11": "5srpPPPS9krbV3Lp1aC1zT5VEw7UXuZCHuV5rtH1gTMdrZjiz41UQXbMaXFUS2Psd2Xb6bRmYwoSEEMdMEocH3ma",
  "key12": "GDQTbSuEvWE3tUAnKXh8BS4B8hZUNNrqHr8RayxhojjXjeAHFLZMFsk6y4n9t2ZgdHNLNc1JGWKvftdXj8MGntr",
  "key13": "2dBSs2y2vCT9ssK64oDwW4miKysVgPtXwmYjUEoKTo61if1VxA5pXCym5L3HJsEVnywSb7NtnTSJTnoPa96pG1aN",
  "key14": "5hoRYKaX49yhxJ5djasgJFRojiRXk9N7Zbe7hghBv9sERt7QJU6D1AtqJ7nBSqTqvXTi4tDB3AJB5Xz5RSZKcNZp",
  "key15": "4t3KRK8fuo7ewyJFgkufwuLoCR8tKRWjxs8VxcZFUoen6kX5AKRsSoz23penGV3HyH6sazg6Dj4qujWvJfnvQAar",
  "key16": "5DwkZnK4sUNHCvF8HS62d5KpYoEsZA9jZAQtYUdrZRnAdn3UnaSnR6LKK86h2b9y5ZrdWB5TJ2p8T1SmhTU9qL6K",
  "key17": "2GzaSHH4dXyBGozEh7XjLfk8cjhu6WHiHqm3kUYFK8obwgeN6rb81pGZS29kJ5ZoBQJaDJdboDjnFnm1RrmjBvJw",
  "key18": "4wFYgGRSCTUxtZqpqjaS7F92aoWcBAVJo3yzykJjWa3h7d5c4Z1S9U5qKJyDcUxdyt4LQuf9vKAFCFB55EBY8DNZ",
  "key19": "5S8mn6qFKBxWZzmzUxMAjwpWdQxNuyzcFeS7t6K3XsCYLuKsv3W3R69XRRpar8DCPbuQUafLgWb4ACtrzBuCGRLf",
  "key20": "3sdv4FTDee9wfnCTjPDT8SX7gXZUx79YFhU7PQrfumbowuAjUEYi8a5sSA3JEPbQBCypea8XmMwUAt8yfLrQ514m",
  "key21": "3JEgAaLK5eqfRV66WKuy1C8i7wUH2rFST7ZqvybvssCH8xpCs66ZCSJFc4DxyTT2oDN6yME9CsSZs8CdWddZ98GA",
  "key22": "4X78nr3kdDsdqbb1vD1GUWoUFD4WwigDdayVu3L9xzv9Q6k8WPsorVUQpeGj4JxeeStdszxjN4cpd4rnro9bDepd",
  "key23": "3cmEYKbXLjPafW4CnYUMUJUds2Vz4JYLXSxo15XWVWKCPSYiM7PKgaMMXvGRpLPJ4ghc9zzFHVSZCw1dJimfT6Y5",
  "key24": "3Vz6hHGpuENtpBsZcRegC9jqLQ5yX5AQYascXX3bTVv4eFGrhA4pzp4EWpacPRDEDcz2NooCUz4YdFkAhVvDc3WS",
  "key25": "25kyqyjGZ95mLQ5BeUVH7hVgWCCgNgYF1B42MUVaua1ru61Q4b6wCmDJEZhJ4C5Y1DBvbgxL7R2qbpUtZJxVyRg4",
  "key26": "yJqx2KoJ8vc35ww6ZFitcZTiAgtMjZzdKQqigU77aSpnEBh9f5d6Z7gC3sWYbKkbBJFzA9aZmXNGHNnh4Ce1grm",
  "key27": "1UFe3SrhTaxMbAuxhi7LaNSQqyyMLXbNBVQ3uqLc6imXHVV9Lzh2FQCH6nH7xbH1k77wTJbXCPtGUWZ8UyF3FVC",
  "key28": "39rSJrcDMeJtoaHzRr9FFGyTNaLGLcLoqJwbwwYzrTMAH5WRzSYVnPeAmJirtQUz27qSKBuEkuRBpH1wUE5j4L2H",
  "key29": "43vMVtfDL4njU669dTjZNioUt2zmxxYcdpt7vNSwNPxP3tCiEWCaixpMioiU1Zv7PTHTvwf61qRCYYofVv53svDK",
  "key30": "31uN1eRu9QhsLHcgB2U9k8mSagaRvJQhk3QL5SgbXuZCmL84rv6ZH3QuLfKv2vxNwD54TJtuLmDZTUCntjbi9ZWM",
  "key31": "2uUaUgsUbBJed9X5oj3QxbvHPBtmYHgyannqeMgk8QqdVyEn1TymwRVx2otVrbxX1nT8HMkmkud7bTf2BhHBrLAU",
  "key32": "4ySSFYfrdMJvYFGaeCyXqsZZ8xCzMtL3SnZJ42dEv6hgfNWiW1NTHNDABthsif8BNRWLhXH1dmQoLDw3NLqLs3ho",
  "key33": "5Qf9K3ADfJvUjqDUCajprjNiBE9osvM2tXdmB88HNG395WDSuLuNRRgbXgh6zsHVpNPTRdyaHVG7Z9X8FaRMtk63",
  "key34": "zQDd2HQvVPrYr4ZgFwywbeEbUF2jWTkM84hsNvM2NPQMrg1hU34y22jFKsdZgLHa71hWMZGM7SS7uEoKK5N7kD2",
  "key35": "2PuekCgY3GM3kBF4mVPLwrep8bWtooas5ShiCETKj7BcKKUXUYpEqHqywAzFDhJPibuvohv4GX54i9MSPfANvU9q",
  "key36": "4ZZ7dcCWvcz1NVFc7dAoNJbEWsRggugZKp2xjXEpTHTHQj2ygJWtv3XZb3nsBQwZfkhz9rYnFyeXvmnM582G5BcS",
  "key37": "W7VxiHcTppM745kMyw9qZSJumVXF18MJSjKnKYjZro6iLJyDBmLs35aHPrHdHzpVduz82SYxCcADmmutkJaskon",
  "key38": "3pRpaQZAQoR8JA6v869Pexuwu1SPUcj6CgGyHFqGzF7hJyyLoWrYALmw4DBqw9fZe55jV9CsaACYryASfAqhzfYh",
  "key39": "yAptHJSTe6Pb3hojRWLnWryFqzuiQepP4LLdBzjvhyPjMWXkFN7Z5KXahDie1kDrVbApF88zWxntarHumpypA4Q",
  "key40": "2X65teEbLF4GfgRMX1A8HmXTgKwdZjm1D1ZQyp8utducfkFdENWvGNU2QjPj5ka5z8qNGgibNkPg24AQpfDzGUtV",
  "key41": "5Pc1Lk8aWhYFHuuSL6ypPGb5QFdqeJLBtychNJ6a2LzRjtbD19cb2QAvccQX5it3cDeqecevTYqXih6ZTxHHMZaQ",
  "key42": "2aHa2sRY15VGe8ac7nD54qewCdfGow2W9AiyjCqSuxW2fJDFKx7iHP6uu1qFkZb2ahNqgdX5dkSzQoeXGsQNDYFX",
  "key43": "2Vu8L4oPCAXnXMkEtBLrN4tuDd4v6p4WD4sM7PuqeaE2oG3MzhgpzGr7wfjx3ZpS4YXDwb2zWUKhFCGmsQ7vpRLn",
  "key44": "5p7Q128hBFHrYZ4RfazpDdK1zKE4XpC6iQcsvt2qB4ZJ4bgoe853azFNwprtqr5iuF2Xd8uvij2oAThuW4EDnRLr",
  "key45": "5ZTPVrY5U49RBpArZTRZqg6yAS9B7YTGzexJRWrm2p6JmsW1QQGrmfhiAstBWyyDXYPhuzHHSJCy6bi8F57rDoTx",
  "key46": "2ymVU2TzfAmzNzUNUSpYcWfsCdXssYfr6vFj6EGKTAnnHVW7VeZnQvJB9pmpzBdvbq1Zoyr1Bi9yPJnwwftPirgU",
  "key47": "3HQ4C6NF66M721uvxmaFtadUHcCSs9YcG7o25GQ21vTA7pY8Fw64urJggYrfJGq9eAXdFYRobTPiPVg9UieENq9V",
  "key48": "5f6ehTL1QCvPbVagXCozFTS5nvwSvSnBwuPZonoW3RefweqKeZ3NfQkTSbxsU3hfvnqKHJC1WVzT6F9URJjzanvA",
  "key49": "3mZyDaC5qTAa218oUxYC6FgTWKX9jnv2UV94PiShPqGqM1Vf4EKE8P5HKaH7m91gaN8LLjQaoforjNhLh8oPYi9P"
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
