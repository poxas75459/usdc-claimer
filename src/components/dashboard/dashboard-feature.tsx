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
    "jRUuqB9PfmFa9ZPfw2UkvqHYqGz4Qthx8jZZeqcqsjjSdpqub3mNDd3tqRbcrEGaK47xcqJciqc1WrxHTqrjVhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41CFBtmhZWqJ23GoJWrR3vDuo4iKX3qpVh13qoVyJ2VUddkap1Nj1r2EE6j1Kj2D4k6i6ZQMtWCokqGPdbpPriTV",
  "key1": "4gsibKEDuCdZgvTx8KAF7P5ZkifH13ExDpm8uwEpKq1xHGfAnwFuAdv2B6XjQVJfvtoNdv8Raup4CP7fpkY2WoYZ",
  "key2": "3HHyrnhL73LF9qvZSkgyJT79KQupLDSShbucymxN6Ay24Z9cddD9MRW72SxuFLxMWv2Soy1xkTE3ibEiUAiLTy7Y",
  "key3": "4YyhaAUMYjxNcrVbLCgKMNTRcrJbj2BHb3wE9YeBCU8TbzrRSzzkpkbpChQz5JK734t4v28m5NfRjsgUCS6XYit9",
  "key4": "XZ1p5VqZYwv5GqoiZYQmt7aQ41rSxPJpTEyFCiZyYLMR62SpjkF7gqeGhzi8mxNi7GGRV5G2DnpHrVxJGDni8ki",
  "key5": "3i1mjCNCzErD7AMpPTBHviLmfPvJi5D72HNGBKfaPzkrK1kTzbw6MQM4FmeWk2eRcbg6pvBWyvcgvtjhL6HnbsP",
  "key6": "4nbWajvthSvnE6DCx71Yt5T4mNHH6HQeY3YXX4xqVXHF5D9zSq5bd1tDo2xFLYvGVHt1E4jBmzJUz1DFZxmENgGs",
  "key7": "57NXcmFoEqCgz7SNXLk3yCEa2fHQaspZjEseaFyZstwBgTZQ4kf27bZ7Y3EXzcKzMJzqX7h1U5Raz9o2iDpm8Nq",
  "key8": "25P3572jMxJtVPQojtACjkSXHvbcQwqR75bDKQhgXfE2re8VeFnMcL4jEJdZ8JRgx4WCcqSJ8615YvSTBy8fCtPs",
  "key9": "PP7j1Sm5ZvzzCPVgTivU3cwLme6hZx1mNZ5ceuK7N1e5hZnjNAYk1YWFHWa3UNnDVs1bSjAR1jcaosUZ8P1YAZi",
  "key10": "4yY6795ERWmVHABTmUu5LHwRAsYPQhLscTpiZGR2FEmge9J4pkggtRY8gVJ4kreHAhdab9XhFiWjdMMuszEnUc4V",
  "key11": "JH52qhuHPRBQY2NG1NQ9djqVAnEebAYYQJgvmvEyowqA4ujStqiChhpSymnPo5A297C35H3yDXK5zDbcNbXUwrE",
  "key12": "4cjRb7tL9DgaxJUnV6CuD99jrWKo2kfGJk4C14mFhCba5gXWxbrUpEbt4QymxkF27B1h9bP5vLsiQJY9pdB2RoRL",
  "key13": "4AN4mBDsgKv2zBniwQACeTPqKWFeBPfvsTtLHr8cF1qc9qaVRAQWTQruBP5Nrk9cX4BtSX51LHrm47Lx6MKoMmqm",
  "key14": "rMefZoguk1GVtFpSugk5VxKXp5cYQHoTi3P3CSHyFqvamv34yx7jjDSX3HspptQhK1ixtkahDoL15ssnUgZWxp2",
  "key15": "3J2gUDukE3FwrgXjEmomW3hpNTY9J69bkTk6uTSiMSRDow5RF6ghmXoQaMjvWhQsziGK5dfJMsypzNvrjicpsEpc",
  "key16": "36HwqQt2UNf4DoLQg6KeL46AF9xHK7od8uaL82A3hDJVa6Gg36AW5mFQdSp1QmPQTQZGCZd21oUyVNCx9dtMopXB",
  "key17": "8HfjF4ZwntBUz67tHT5EdhTLKUsbGQjhKVi1QVLn7BKRM1KE1b98wQXgmDkETjSRy6XwN4y7rzhdMbk8BKow1pc",
  "key18": "eeKNSyRuriHrgw5nZnvsYfZfnmGwbZSjxCtasLxCMSCkYQByPfVZparVzeYVFz8fnYf3zwh7fEecUJSiWEoWHMk",
  "key19": "2gGusauEPcDPSJ5AqkT9sXW2iT9yvT3MPsK8kjxBKEYxsTtDryE2Xr3GRexsLzm1HHqq4reSH6c9YbjYS6DAjqr",
  "key20": "4o97Gnk7qu6kfyyYXYurXNH4D1WxEgxk6aQbEmnKtsqFTVwcW6mEmmr9SEeWr3cFPr5GRhSg1MWudfuoe5gr7As",
  "key21": "4eQLhtXPqTMRNF4tZaK7NFqmsYdtWXe8SaXiRNJJ3BqyV5QJhXTotRfHfPSx6KXSpqdQjXcCLbwE5KVFnLWmGhLA",
  "key22": "2KexxJSnvhpXNCwktygrxkWjTCkCiRiRQvYVXXVhxVNz3LU74KvW2kgR5zBgXFoH989jKBwzc3sAPpetkcfNFueT",
  "key23": "2vCRKWag7vRzQSmv5hF8kDtqF2DTedUtK2FoHEoyo2Txg78NqjakQKeURPNjD8nqusXufLiBNFLN6zWuN8cq6WAR",
  "key24": "2VSrijDoDSdprgJfN9wPpn4JwyvDrETKgnsyBgRKGeoKYVWnMw1Df2tRA3jAFb6jyqgHt4JUxS8AEZTeLAoNxiXF",
  "key25": "5MxvrAeAd4Vj6ZufTngFZq18QKX7FxhX9RWSjQiVooZGt1h4cVY8GBWxF5gG4tS7h7uNDMZWoCZaNLNndKe9CcHK",
  "key26": "2gDpf75x7Nhw916uW6rqEpenne6WhZpoLf77QTuewczuRzQyba3ARuwKBeYG98weY8JxtBbjzoX6TTt98qZ11GL",
  "key27": "5MUAZYs8tPFUc4t5jR3iwmEpkNnEcxvNSoBzhnzhfG1JAq8tpwREv28ekYq31ZXkVaMqgHqGFX2CtXnA79dtw8Tb",
  "key28": "2VmpjqAeACYRKHUKJAm6HDsdYDWesLeYWup4YdbT6De1x686AL7JtUNNKtpzxpycLPqH5EgNox6esZZy5uAu99yZ",
  "key29": "5vH5dh8BB6zHQzfRN5riTg6kRF43jn3s957Am1AKFDr65qFpKy6mhsmXDN8vYHHiWZZ73xNfTfnoMU3yrQq74wm7",
  "key30": "3nArfYrcFNZz3E57xkwgBX3GdjkUhfJNfx6roq5Qf6wJdkNK8KnS27eMKYhn3BvsZyRibqMe5vEFpDg8LYpBxcFk",
  "key31": "5CmyhBLTUErhXWsqtQ4Y4Upj14CdShUKnwDq857QkGhEQkVuMMt46BehSdphs32kUH2VkgFsXuBFGtUFL8xMH1sW",
  "key32": "2D4AXXjpDWb3Ncjs2exStDjoW3UDuZZUoD33kW3EyYvHhhbApcfDBeb3ZytXUUUrrrs6weepv5j6DSPJk4qbKMMx",
  "key33": "2bh6kSNWFHdL4JiWxJDVbJvwT1VTQLjyYXBoX27bbJb1Ys9pCZLou8oC5zy99YrqdksuJsrPEiFmHYRW9L6ndZkC",
  "key34": "274azAJ6rvQzKhhL73jxrCkFK9BbRdVm4dx1QJZ2mSXyrqQDDkTmiDTuxpZroPcFsWW1UQyR97VhpMAfaJq9GGSr",
  "key35": "4QxJd86LnvZrj79hnHzXy6PFWtM9wZ2XTyNZfaQTEVaFAcmy9egFoAL7QcDozxAxRFb8chm5DtzhgeW7mngbyCo5",
  "key36": "2C5WPty1KV6raAxHmsWQU4xcjCW8ebdKNHoFY1ymVXVfxwu5SBsWZTDp534nepnDR54kUScqwhXgTsjGza1WmcDn",
  "key37": "5pDiiZVCfXKr9PPt2FconBkmJoDrTciwVPxqeVjsp9qeu6vLTMhJQz5TXX25KjSZyrcUsvDqfqCrMiXur9dKTMV9",
  "key38": "m96oxV8u8AVRH1YJxmBdkqwt6EEtT38UZUXt2PTAcch4jA6NTh2PBj4LppfJpwQXSafNAN6voH98PQXt2SSAeui",
  "key39": "59TMU81NM3TCH2LV7V9SFiap9UuwpPgWZRKXVHQoedCVeswv2NevNjc24XB4rf3Jsyt52VLYau19gKs2humFEwtj",
  "key40": "5o9GJPVLAQEHz9w2mtgPUayq5hUXyb2at6smfRM6nzCX76GyDVkJYqaAmaHtjTt9uxQjEoonBu2HzcTCMvRW9Z5A",
  "key41": "4XUjpeDqWkn4SMXwJqBrsrKyUY6R5AQYWWrduPRN3VhdKDSvDaLZ9qHbXuQgSjtuYLUbV22ydUL2LNJyMxkekp5C"
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
