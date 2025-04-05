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
    "35MeWVSu22m7NqzE8rLz16jjyLQgmRLTf72YBxMHfYaxa3htbtm3YhjueCRcqTWRNd2xgPcdaNAb24A7Zg1BECjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pYtPvEGAi1WuyYn4oC34cDn3Rzc8rQycXM3AiQN245SMEX9hbJnWTeb2TKGpBvMATsf74fCuLQY5KsYf87WivbA",
  "key1": "oECMg189Ak9rJnoWNXdLHsxEcHGd4Fgf2uVSsgeECJsVdQdZHWCHzb5GhG5QSwwSXZf8iainUrNq1mHUQiHsr3g",
  "key2": "5YMjdJVBEGkASDQBQeWPHSk1yuN1Gg4YL2tjDwEwp2azGesdtJ7p5nh4P6GFKoDrgqw2SEuHjPRkaooPaP6rtSou",
  "key3": "5ZbMGzNHx5gA4bXHzd48joRyFg7oRfMXUCfvHNeWpMTZUYbBPhfuP14iXC9QnjvJgvZxfT2eoQQCzmFjP85LoyaQ",
  "key4": "5dMkSqcfa15ovKyyPvUwtk85WKdZUEg9D99CN7Jg4tanGdEWmNoM1f3xi28EEJstzCBU9GeLSQsrtuqh4YHkTRMe",
  "key5": "4KSVjbkZ6S41fzszQC3BGL1vHK39mbE6a9Ktu1ByJZUYETzrSHCiVK7kgN3gXHAG2qEJPzFiKeGfppnx9x4DArrY",
  "key6": "32z4EEnNGJNq9SNBQPQCmUG7q8J4jfMDGzCcXwjBgWynfZcvDx86MB1tb6wkNbjtHqJLsZ4TnmHykLDWk8Lc858s",
  "key7": "4uhj1TrGsxgKTS5t5C6Hkjb8MSQErw4P3b6n6piLeEFy7PmT2yJ6MQ2NxHqpTaHpjGSYCavbf8msEgec3JjrGz3z",
  "key8": "4wMTUkVumVaeofsynTATPGcdYj63JCy527tQ2Ltm72FAAJ5stRhuBgZnnKUDrQ9nSK5o7VxDvgipnY9YF4dtjDho",
  "key9": "5im9qf9U5VP93pEhdMvBkuHvXa7jjQkJ3iwTnGP2cRkSFj8tunKTEgqgCLTSt5FXCsvKrJSovgASwTE5J5vpTTjH",
  "key10": "LjJtpFkuThq94it4Lmz7UT6632VtUDc5FSGAyerpsF119XFh6BiygARNDo9JC7KEvUKhmcVX8WpyKwqn2oXBvWf",
  "key11": "is8zRgKBaiL1kbeWMQsExuMKr3i6cXzt1R1hQsYGhtAe7kyY8bNxr9DzbuV4Dben4QF7vAd7RQaL86NiQNiYzNG",
  "key12": "4mhPnDayq3SnZnCfA2CaDFcPuRchiuzKcZ76ksbUSMJHoxpXdzXz4eS97VhxEkmkNYzYzUgseEjDNxwBWZRMXhkR",
  "key13": "3a6Yaj6ntxB1bGEGVDUSc6hUEYCVbScz1TnEufMV3j1zqDYYEKaTYcy3V7TvQeQBp7ZU8bTFjygy2rLtQZkby8tb",
  "key14": "2xmo7qApik6hgT6NdJFctxpHLkiuZX5hqzSE9LtySYiyk227vJGBPDxRyjhUm7zhX5HhcezwoijeA5jZT7qoHMvK",
  "key15": "Doww13Vs4BLZAMXaVSJzXYg6BZ5D4xm6ASZ6HUGUW9Cq7GbGVzBVeX8W2Ke3pbMRobKq2qoUrJsAjDW7GsvZ3KK",
  "key16": "2iH4576516AfGVQ3thhmqj73gM79hHdTgHtf3tcRwdt6PMWgRKNTmUfJQL5sd2XtGm4zc2LW6jReQD2ubzL6SJhC",
  "key17": "2GXyVLh5bvARez1H99EDQbKbGtKWnL2EUQAt4xkiZSkFAn7Nan7fsYFF2RPy4YE39sZwRwCyy4T1uKDZ59h5CaM1",
  "key18": "2Q3sZYJ74ga83GdEzdMsWn9NAydAbpHKZM7fCjpYJ9AiNwRHkeucAmvnf1YJuF83wynWmPR7EqMxgPpSdyoe7RRt",
  "key19": "4xea5vuPtsbqHAqfdezuD9wDhj2t1859Sry2ZjACh1GcQFmF8x6pDoVj4jiBS2Ucx9L5jCCf18HDQHMREMbD1iyH",
  "key20": "hFNVVWgRUrRf4LFMwPorSJTFBsWoqdR4AjCP5pqpfjSdUnTZ2XZBJEjrZrw9xq7peHGoDKhH7wEmvGRijov4y8K",
  "key21": "3Wv45qSwzUhAdPcmB6ernKevWkjDxDFAZYzjziPdw92Uxb7uiDUiSCsEagT2MgSY9XAE9ELaXgz7LvfqskjfBfN7",
  "key22": "3GBB4LkQSeTjvpiPt3vzw8GYx7ci1Wr9YHD86G5qTtrDsLNW2TTL7QDS78fdmjb8STwYY4F9ttZNNLW4iK6Ua65n",
  "key23": "48Sdf82p37Lj3aZe8BJdjTkD1H1XPM7gyUgcEDF34FU4b2yFcKsAKt3sAerngtj5zXU7EWAr7RAwGYCNSxhZGF53",
  "key24": "4bSBEymYBSeNCN6pJfLeCeEGjpdkPu4zW135b9PBk5AQdKLVmaMiySMopkd6UpYr7QNE5CtQT9m8BSoAgHCaSnJL",
  "key25": "4fYsAFZnnhfWy1nikLLFEf8xDMg7aGwUdm9BzNKc7abCDJanuEjU1wSPfpwnr4Rat4cJnw7YMhXbaC3qLQoMDBBo",
  "key26": "3wfffUQPuMVAkSDPRcwYGB1EbSG1a4or8ukKSsx9bVFcVQtakMoKAGjux6VSVRsKvPhEe3jNC6jpGwbkVbjmkPDj",
  "key27": "5Q8Ev5bfR9i4PdpAeocMxFAcE3f5fn2nghbzDzpqPKLw8edr9efznPXztM8dWhrKJtxQu9dPPSaVaDcUeFX3zFJ5",
  "key28": "3gV9mfm5PHKZQCz2aoHZPJhoNaCLRyTGVZDs5yLfXNuVFSiJhhUt54eFfGvhiRQkzbz3wt8AK7DRfa11pXgfyYQv",
  "key29": "f3tYGNJFvUFq1efsvgQHGJoxDE5Wmt4xkic9A2yoe4iRaFn9oYa7BtXn8P95oLdvLe4qxigF3tijXXXb6FNgRG5",
  "key30": "67VZydWMnzPQemSi7rqdgkueAUyfmQ3MFKCXyrrK3pgVCUQu64XGvYkBXn9wiu5HEpb2a55KY1wiYAHgvV6zFZhS",
  "key31": "4B95U8xCYMpddmDr439ds4EGJCDtXoRRuvNjhomoQJE73PEh2Jt3Co1TyteAUyXvJBZpZChvtP5u3ir2V3Dx4TDJ",
  "key32": "3LQUmnaDG1uFRihSaw8fqwc2sKz5eHCPELDuXD2duUTzQVEoSUnDM9CFUDfzKGdowwp44gMjQMB1bDgpeS1St7xr",
  "key33": "53QkjynrLy2wGUYujMys76BDZ3SgDgycZy7LskSGciubcs2fooPgSSjBk4BsZtX1ugtTbEpPT7a9BpGbmo2K9Wea",
  "key34": "5V9wo9kmLnGTZWVB84HeA9XWKzhrMJtH7i9PBfWksAs9HcK7YdR5H2SLAXdmEbpxXE3tovzQSAG768AAm5EYffPN",
  "key35": "2aaLDaubRrS1nZsw2j6i2jjxKHwZtPXBmrx1wjA1MZiKPrsEdJ4BZqRNM9vdbkqBG7kpSoJEWXpRLp61u7kh2BTZ",
  "key36": "4FH9tpVhBsc3pjdSVPifG67JhoqVLChCYbPdBASKRzXHWPUyHWHmALuwEkvbTti2XeQxDwTvdPTfRuTLHT48ALHt",
  "key37": "3LYjfTqR6hsoUGpbUf1W4SiCKAG3ih4R6z2SYgjMKCXnZwwbbzYpWHMJeaAJULNQswE5RYqhdWaK3tsL9osX6XgQ",
  "key38": "5DgAJZBUkENphupdTKwJwq8svjSPfMGzekVDHBSQqpUnFoXB7S31zKgjfgp8vToTguF8henP4xTq7aB7aMhBK8jZ",
  "key39": "3vjtDibJw5Nbas9i5o3fjuC6Xgajdz3VT6iUvnwnPJJGQuZD2YWoffHPhEeePuuVH9XaDiNcmv2cJkiiaLcYpCQ8",
  "key40": "35MA12tnvYUjXTmK3v9SzvMEpv23n7eEi2UtjpUvmmpgDEYgqRWxrWy9eA21RA1nWe3gVYw1XXBvdbuxeLP8SZhG",
  "key41": "cc8USmqu6HnLVadHXyeyGTEC3DsGCGZkry2Ti1dxEi1RXnnteCgnxyidNCRhR2BYzuhrX9q7QyF3G4qMAL8YseR",
  "key42": "4gmEfprjK9ZfH1LzwDiyPpeKz4umpRstsVwF81WMfeNCYZoobYUh1wHGi5CLjnf8Kat9uKx2Pa2qHEwwrnjzKav6",
  "key43": "5zow93iz138Nm2eqrwVzEhj1zNLxMT4YofPM9962XUFsrsKLtCzSMXnNr64Nbfab7ku94sW5VC3o29BYajYptH7R",
  "key44": "5mPcRvdaMbbpotZBZefZFWBQT72qTDMH1iy66JpJjSxjfxK6Kx35fACREmx7T6TzXvXMiExwRUxMdEroRtXSZDFm",
  "key45": "5Gu4q5ADUYwSpuHpWPWu4HEF58EiPknAUCewpKnS75MvC3mW2xTVa4ctXQPdGf1ei3Rs5dmjS5GJ2SRgFkpThP3b"
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
