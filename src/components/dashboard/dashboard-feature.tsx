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
    "4g3jnUM1S65uYGv41A9wyAsTTCMcQcYwAt2CMcN5BVBYaNee12diJtm4WHZLBfJNCyZdUpnRvyJtTKpUEKBJLXSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oUKCgt6RhqeGAkybXsFhfZrZy8se996Fq5chi4a78vPMFgGPk3mzP9ys6jyzZbTDNRc9c79h4VH3Ehqf4Qz7z8H",
  "key1": "3FgeHuCtAN1ths38A6DCKezgsW2hg2kT4gEGJ9XtrDrGW6ECrR1by8qMobY6xGrByJGDZ9W15ZkmX9B5LsDWeJuG",
  "key2": "4n4pxk8jK6BXtXwuoPYqXZQm6g7DdyKWaqCkWRfSpf7LH4pA4neAbh58hKYGBp1iVStdGSTJHaPMJCJj5D8HsMFM",
  "key3": "4QXUDJEX2RMuvUS7aH9GAxaFFder7t4LhzukE2cudV4uffWe9QZT97kR6Cq8Yb7Gra1Nr5HtGBUQbPP4XWx6tiL5",
  "key4": "5tVgZfvaLvd822wKa9vPQ74A6bhVrV3t3K5LT29nj5xGVstjFJDUBSCBqC9DddAt2Zqodp6qE1QW5K3TZVJtYVge",
  "key5": "4GVPsZZqScHnP9jvrjrc8HEjjFQ9Z7UKqr2TzfrSBdo3uxCYmuYkaa5ksXqNwK8rDsGNpGfwErg8vbWKGK77dzUo",
  "key6": "fjCjYkhFvR6HNtZCNmxV6fKvCwThmQawK7vHoeejCvHAWAaAuqcm87SbYtdJrsHc2v1TnzjxFuTVbRKmfvfYKAQ",
  "key7": "36336wNzC9MBLfjzvXXaFz5JAWeP6Tj9dVKbKc2JSC8sh8ZfECVZ3YS5BP5wTjxmKn1ufCN2Vv6h6SYp2J22wYLe",
  "key8": "57bLXvxF2cn8DApnxLx2BLCK8tWm5UZBoHTWTwuwH7ML8uqkGtBGXiG93hUh6HqBVg2iXhBpvoxs1rccdeTSw4Je",
  "key9": "2ecJD9Rp59H5uSPrCqjBZihTvuviFbfyKX4b4KJbgHfwAEtNXCnZ1Z29A7FSAmXv6RD9o3heAuHuv4uFAnEhWeE6",
  "key10": "2pNtmdV9zaYrmPvEERuH2J9cwnN5nR7LgvBnbBchnuuMmuoXnnWvSouGH6cg1VUX5gGhB9uHKv2WcHzJqMdbtveu",
  "key11": "2vkRw2c4anCrRWHMyeZkQRYKjeWwrrzKzCrpcoggvQixkCNE4G9YRkx1HvnkW5AiNGmp1Q7HApt1Pcfzx5rUEJoM",
  "key12": "3Skp3B3yhohDTVJrtPwPFg8mt6p3Uk5kTtB2hJwYv87FnG9KrB9TtuZQ8r79fhdKMPfjppADvf2GtdGdZ4o6nzUm",
  "key13": "4rnC2CHPciSH1FhoFc3ZNZkyZZuKKp5cdV9kieYVhBS1YsNPK9WfC1Tytm7UFXD1wBcYreNKiuAyFxiyZt9WHxgK",
  "key14": "4DaWwLae4zDTzn6cmv6Ps8jY5WiraEuJCnntqVR6LvCibv4BEtdiW63njUVuwcpu36CmT4AgnXK3y5fkwLY7rSvL",
  "key15": "2vEhgNtJFcKDVb8sjYVJYETzCeE9H5gsm3abo7nXkMiW3p63tRAEwVVmycPNqYtGiq2B3op7K1WswR3xJA2KsHSj",
  "key16": "4kdTZy2Sfx7ozYg4W9Vta78sq7Z3KVKSnP9hN1jYQMZkgknZaY26qok2LQ48C7dBSKTyDLqCuc5nsafXjgqgDb4z",
  "key17": "5bKpEF9iLVDmtH532x1LEocjFAkkz5P6Q2VwFrA773fDJifM4NGY4oFQV1yqq1opYcUbCpYspq7GUApLtmUehtTb",
  "key18": "42sjtk5RnPBrsbRDUb1HCk39G9138DGAuyATCYqgjhTKAJ7b93Y3xJWbyBAAdGoPvPWKMpzB5UnwcZz34WYAqdNV",
  "key19": "2rgxafKYU4rnBEuZMtCRHj3gNeTrTLZdefoJrUVY7wCQpco3NG39kNLH9qQCVEtSpxT9s9emFgx8FUgfb7woAykj",
  "key20": "5ttPqrGoKSVQ1MRUhzSjdLb1jZNDvsa9S4yrY9D4JmjB7N1AR49NXUinJPChS86bi3TfbxrQu5DaAM1HdiaYnLuW",
  "key21": "QtMfkQnzQMqF4ThytkH1YPxfzW7z21S1p4gBR57D7mBuW4j32QvUdk31PN89d72bkDCtvV4NqodyEFS4XRtg9wg",
  "key22": "2BYfppk7YzCjA6ZS2WrpehucxMuJqtmyBGUGcx36GjYbfg8X2aXyQw4iRwHqgBxkD9Vm4zZwYzdiNjAmCUMFCW7R",
  "key23": "4N1kMgidjRaedJxLDt5XLo2QFxstAZhDuNK1QXHyqsYBfav1ALKwi4dwbXduft5emiMDmfazUJPC1amUyRaK1ftt",
  "key24": "5UxjmXcR5uP7cNw6xMHFW3AM8qei1tuvuuZJGpzao6A7HrFbJDmaUsHM5PA2yieZejvwgiP4mTyVskoMv1VPw2m1",
  "key25": "33TT5kFsrtzmrEnp6bFryZ5grwdYRAH5jd926dfgeexKF3sAbjWtMrFETozdHbQhirvULcizMUSoWZLMJSih8B8e",
  "key26": "4UkZ49zDsSHXT7roz1YiJ6nwyxksQbV5PJYj61fuXG4vhPRwsM7HQMxcrJHSqjBTMZeVeV52H4t7Q9kLygdXLRyk",
  "key27": "3R3AbjnJgVQt9S5tq6GfyuGXb9rh4xURHPDBHJmVudgjPBtQLic5yCF4Tq5ANeEhgp2R9DShP5mfQZDxby57wZT6",
  "key28": "5VcsD7xH5S5uhsB5h4KS8CNxiMArUj3Aw9TagEihfHKAUzEPytEKCwkk7YP3GAx5SSypEVJ2zdSxZ5V7iaBUbCm8",
  "key29": "4a3zS8nwu69s1zBLQRrPqHUG355qbZnPfo8niZR8wcdeA9VqHo2ZbZJcppKsLrugm7N9eQJZ69MkqHtuLNgaeEWd",
  "key30": "u8eXvFrcK1gbTfaMedwfzUovffjYsYS5LForAWjR7KdEzTtzDDzPSBdmEF8P46QRhyU65eqBg8yyi5e4VqUD5TG",
  "key31": "3XKd4UbepcXaHFfzenAU9qxyrmkZzfb5moH9UjwhJmtbiGki2tcaRU3caQ4xuCG6WngBuMJBQUkcjjcXjeTgh9cA",
  "key32": "3WgA9h3UuvjH5H8jvTzcZRC6tLUzdqU1KLUuVyqwPSFAhW5LHxomwp2KfsCW6ZUvErwCTzNMSnULbnA28G5YWeJ5",
  "key33": "3JynhLfVaSXwtBX4VnEY3fjjqFXDpLZuiS4pu5qkFWaJeaPJ3a2eJ9o71vdk1Jw7DjwqDz2zpYhmUPVCMeWhU4D",
  "key34": "5rUYvX1D4JTkcr6ZCVb4cEvgrz2KZYApvZnD6uhdFCz8YytCUmzFnWnZ1HADnpK8rSGVLdkFzMDTjP5jYiVJPGen",
  "key35": "4fMVSNVr1tUVBKUF71PLD4G6FPvxa6iH96mxXxf8XwGFcYdKPMMvD4t3XBie7Ft9c9SSBBeLiRScfGRJhVgQquGj",
  "key36": "39goxUT8mC4hGQuh6DReNjsjBGMbXyD3JpkLuXpyMwFkz1D1kYo2vwVq15xPcJ4cHZJCZ9gobCK5AvuxApHuz4u1",
  "key37": "4FdWyiFT3nq4nF1TCZiBtoJyy87qTnGZ2nXwUfz2NbiqwQGNEVYDnoRuk4MqhKN6r6WCLqtJ6ReQfnZQ3tMKYr5w",
  "key38": "4x94WWDEeRi6rrUMUXSatMrd5ixRLouu3G4vYcb3Js8TukUsHHDGQUb2nW6gnxMQ5ayHosJhesQQgvmc9gLqEj65",
  "key39": "2AHdhymrqYkzUnkArp7J9jzceXx5XKqbzW1xR3b2Vi3ooq1eaVRhMN7vmMSEAdCdYLQSdtFsdFMpFcbcnrfjo9SN",
  "key40": "44scogcvxYYgJAwdzyfyV44wue7AWuqL7rjHh45qxcSbShtm3SNybt5PJSqSrkYCnZ5DwRyXXgS1TLk88qQ6mmGE",
  "key41": "5tvkSKh1riGq6RkiJVsosVsstmq7PiQmz5kqTDqvTFZ3cbMVdKpYPHi2QkNjndQTvUSoarekWPRjUdpREjzC7Kd3",
  "key42": "59c6Kyr5LKdaKk5rsqZP2Lpy9sKHnQdDgu3ua7UwZaPD6kTG4ocUBN84MMe3vBi46mKMqr47stXbiquEbLTEy9qp",
  "key43": "4txfnpsVoPWmssfodKwC2Uq54oPGmYGZM94BJ6T3H4ZvCFZqZwMo3UvjwvDoLEd3bUWv6uYTgMhnfXyBqNkiZivU",
  "key44": "3sUxCZPFUMyA7N7VUGV6miTjfJKwuaSQjScV3gevo2AXrSt4fP4TezHhjZKQJYNiMqnt4QsHU4d1ExkFVCasaHXy",
  "key45": "3B1RMxtq63TkkJa8w7T3Bq4jNRAXzsYLWCPrhJPbZKohEqS3WXAoPWgBCywXPTfw3SUqX9TckRezpDz1fGP5SrGF",
  "key46": "64UFvnKMUvbeymqyqv6dXAJL7Px1jKYDf55ddmhrhxZU7ykKD6j3zBtMCpj78FfqRwrizwvq354pxGgCZfavwAR",
  "key47": "3SSA3fEhxXdsf9RPGFqvDHd31uFeSeUYrQZ6dkuMTqu5v186EPkFZwaVA8tQe3gPXrDtzAhz4wiwWDZ2NZ9jSeYV",
  "key48": "7ppn8nGVWkazcUmF22V3SSVPrk85PMaK9qefowD62H4QkVWLzNyyavRSG6LYiYcDpq1LFSEtpvUzwTeFrftQSNG",
  "key49": "2zDh7ZxT7TSmdDGxap8HNCkUPum2S8S47eo7nihcyDsDTE727A7F1bqAuKCaeJQGkSUEfNvimF5oUJBMrjmm6YA2"
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
