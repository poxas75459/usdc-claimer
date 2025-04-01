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
    "3ZHwyiQVhg1T8UVWXyds3vhhHgnSdEPTX2tRTttZHAvDL9NGX8XvKNyhiWXdbhhF8Hj2XLziiXBR1crYJSj5qn6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uQyM4qVXxSrCZaRuF6ZzZQQT1cyWDepwKUpGRJWwZfbBHNDcPMnR7nSMLndQo4PZ2Bjt7tx7WFyFYpukmPPg3EN",
  "key1": "3bVHo15nNeJZthQJpoCDRikwC168hup9hKk9wHKJQdwubtyNktpdCgH3NUUoobuxk5RpebP7dHsnc4NpveYfFsAg",
  "key2": "4zjLgJUpiyJhRw11tRLJC3hZfR4N7VcmmNUcHGTjud9TGuD1PavUP3ExuM1dAfD5GhHg6gfkhgEY8R9N9w6UYXLf",
  "key3": "w7B9T8v4VbPrvt35LLWSRtm5eneduLPP9CUuzKp7RwTWnxYjir4rXzJ3MWyfZ4dxBbDQPngQ1bCYRYjitPbRGrA",
  "key4": "2icfNwiHpZqx2QrNY3FyBMNahas5tuqBe85TgzxTFAKPrNLRWck1Zwof3h2LKrwdYnSFyvDBaX4oFcJE7Lsf3MBu",
  "key5": "5qZkWSUpDvcz8k8kRGrTtKzp5kvgdGRBCTpWZX89Nt2yyhXkKnrV8riwppapKWsQcpJzK2squRWAn86qfShNMVSs",
  "key6": "3MThpUri7jTSeqwkm2ZPcZo7HJrc77zx3ps2c3pP4wzkLgAsK4jcw58EyXRnLneYKAozKuuGgHtZjuNhmLSwVHH4",
  "key7": "2XziPdaaNaELsn7p7A4f2JQBKkQNCGvArEkgo94aLoWZa9KYYFPjbuLKzZJ7bKvkvUTVMQfPNYSekgnPgyt4AQh",
  "key8": "6fL2SjHuZwfjQ5XvxyXo1RP6kwHN9BDC3Upj3YFKGx5hddsVY54XG7YuSn8AoLG1ySkidTwW5TvB83WL7PJN3FP",
  "key9": "5uMra1QVrCwcD9hEXKxT8YFyxbkQYnzqwVZ1RuVYNK7swvRqeDXZKmb9e4hw4R2ER8yzpVQMMeRyBh5NZwGUJtVu",
  "key10": "29RNG7DkaEGkLKrEcfNzqGgc518cRAw96KXaY7SJioN4Q6GL5ktYEsXZxp8paPgVafUVYn5UviBcLEX8LAgwXdWB",
  "key11": "3XEi6fS1ZVLweNWGdwyxQ9XvKpFRyeV3hbJ1gZVawMFxo2ZN2jA88XZw7AwmLySyzgPEUMAxRBJMAJfKwqDqbRvu",
  "key12": "3RdynD4LBZu8ncyrCwVTcGiiHzkfNwTv9vaBJUoLZxG4Y71xBeRkgiGbPKnaK1PmyZ55ibcbin7BLQD8Q7mHSSZx",
  "key13": "3LuJeL9WMHwez8zzyqBTABwS4MGeTytBGBmXTkttapm3YC1T8mvr7zgjNTfhjVsTuoHjR5NksY3QQYsQEW9pJkz5",
  "key14": "47DZTDUvVEjJ4VxtqB6NqmbAicT9K1fuhLxxoTcDB6NPTVuyhfiDD8rQq2icapsQBPfSwdYfdW8bLGXvNYtuTVAw",
  "key15": "4WGNoJ8nwgvw7zJGvGQu5sjJHExet7SMf7jtNMkM1Yk8Bewt36EXWSHaGjyydPzh5wZRDxmQwEYh2Ci2GkWraz4U",
  "key16": "2Ubp2YGVYuDeoTuXGewW8z4SjhEC6q8GPnUqd3XCwKbnUxfYZM8spvRf6BRhL6GDb3muN6Rn6GihW1J3JGJZEeWs",
  "key17": "62voirPrjTZG1ykzxzixLUNUYkHwXDSmvufraCRVmwKYcdKwuZA4qHiVw9b3d1r127JmwMfFBGSznkh9xhvNQrin",
  "key18": "SMCRt6ERvbWepkX9ygAKSzv2BoRXDLuJ2AtHbVfonJFzFDEpMWzJAzkpJNVscajtQctktsWTQArxh3JC2D2JpLm",
  "key19": "3g2yuo7q34iRJwVfgxxvM86Ya3UyHXkdGMdFtAspPVjwKakct2E3hCFUmrXBDwGHEThyMoyxp13ZCfyrUyvBJu3",
  "key20": "54hFQUeA36BAooA6dryu7RCJ2QK8J7arXfkuRkWXsfq1cB1Khbo2Y6W4JN3wUMsGLvCwdWTz4J42QKpdkQZgn8Jx",
  "key21": "34kkyLxcgK9BgjQcT8kydYA5BTmeoAkV74EsWcyh4nqVDmL4x55zMaYhy2Qg7eZcVotrLoqoz6JMaRXsdKJv8FoW",
  "key22": "3wPnb18WEL54S9DKrR9BVFmLAyLvdmPszdHFFwo9fKWWn57o8NHtBSJecnUegZZ2KuquK7GKEvg8ZQxSXhKx5ZK9",
  "key23": "5PuyCUyBmnDowsBr8SWBhzkZLxSAP15qwzmeVmcQAvt1p9PcFZkNeKipt3fTsUT4eiQkcDNAfMawkHHS49DEbma3",
  "key24": "5u37h1VPsuqudi1fy5KiXudVZKYJPUe8EipzKZHxey8qC7Cee6ZZdaYx3648nPCtuJU6yJ5Lor6VSp2WLLKKPaJV",
  "key25": "5kWkgXnRHH6cSEVUMRynUTfMRmfgC56ZkmpPwAn6B3yrk2d6Bd5mQ1nf7q271vNhSGHWpyznHDPahqd3VER4rC2m",
  "key26": "2khXDfNukdzPRXPqQoSdbE2oempM8vDDn77kT5Esr12C6vQCTy4QPSBW77qRK4iN5udpsN4nwqeyqmdcLi6Mvy9r",
  "key27": "pdf1fyrUXe7tKug5SRFVa2U9SP6dwGv6cFCJ8qgDasKEVbgs7qpG2cwffzQVUdhWpJBmRqGxSWkDPajaGa8YwHH",
  "key28": "4KmhQCrK9ttK3EMbMK3oMrkfvjF7BKE4LZaRXBQvmoPbwxPMLpZJx21KEs9V1QYDEmeiMVJSWNK2XYWAtxSr1sKu",
  "key29": "5wPCpYPXD3nDFw5so2QWm6trp7XXVT9PaVtNLkWNtLW8zTEBqpzDjFhYFcDS9J2JUJjSvzcyDfnbpppBgoi1zB5B",
  "key30": "4ujnR1zavqsnQf9QmPNcS4a7MpvJtcjr2SJ2THeQwmon2Ho5hoZe9skGbVDqEsMLuNWrw4bZj4PDs7HftGZwUuLD",
  "key31": "4kk5j9qETNB8NBc65QJPfyuxN6Uu4bz6KNDbJjVz3CkNpkaGtPhJJc2HPB5jjds31u8DZuYiKouMSHaUtgqNsDQW",
  "key32": "MbiyZcW6ShA47wRZ84MwBEAWxpVCQTzZCTmmaAuuGEtUQKSrMNgfFL8sKYmX6eAxK1EUv5WrsXAgmH2n7xiLapB",
  "key33": "64GHngd9LkTmz1hytfKkJ4mphyX747MYAxFocnDd8nF1q9fYGbavznM8m9gG87BAR3defpTLzBibFg1Pf99kB43R",
  "key34": "3hapSRUA3kidJxyoXkFW7mGwTwMzkL6xDQZ313p2dhmSq5w8KeCCTj9XoJz6GtStHhjKkV1gXNhvQba3WMMxAjUs",
  "key35": "3qBSfj8iGQgKPBZikry5p5ogMSLc6fyjAdyXVZMtSxnVfsE9BySsE6yu6G5pKnFenpes1CtR32JEnWSWgrxExayr",
  "key36": "MRgph674LY2n5f5g7PfXBqqzp2UAhCmqGyH8yWtkP3soZttBEg1ECpfhuroGo3nbhzZfXUXCnYcQcpgKoYELk33",
  "key37": "56ghhPxPW1jonuz6nD1r44rmZaq1jv5EGeiA1b6LqDx4gbvYrHrUD97cpvQyFZvVTdkgKBT8MPN6jSE1dc6wM1GX",
  "key38": "2RjmtSsDoELtzzWQ5XUr6jMtx2Q1D754VkwcHa5Czc2xGoaATNSzBoXH1KboHZdzWARQ7ywUnCx4FV9MEJLX5ckc",
  "key39": "55qseeN7RdxNefku4VQ1C2RpF7E1Rhvb95WPonW19Y9XwVVkmqDwRC3rLgFB3yv9z7g4PkC9XnDaybztMbgJv1DM",
  "key40": "53WwW4ufUM227bwLv6NdzN6D5s6jcB6W5MSsYJehG8qUXi7TNUJWFqctvPY7yk1D8arcjYHojtBJjoVQe1h7DyAM",
  "key41": "38SLSYuGU7Ba3LeZoZC8dJ2qrjoZnLeT6M6sSax59GNwoStB3ym6oxhD6Zbb8iWFWCeERS4QGKWV3fLtak3KSUqz",
  "key42": "RuKYBMUUSaysuMxwZSCgAF1oN1BXf4sXMBtjsTbJtA6nnNzvSRYAwuL6XWD5szMRrsFxzcoHM9tC3ScKJ2vmeQc",
  "key43": "3cugXtKY8DMDAfczkyHDXtZcgV4bUUebngWVRXyTrq53KuTnE4bftaVrRQsPJNyL3PtyaHxa2HXrsWyf5ZQuZUTJ",
  "key44": "5EEAo6KTX1M78WcJSz1EaCfoLMScehvCn6FQVTsPEoFc8ePoyPgkJf56q3p3TnRxuKtnw7H8tT6StGtdYroMotc8",
  "key45": "4zQu6Pzbrn7pC7V1ejkhpXiRtrEtYRH83LDMvNDxPmELKyKMHD7Cz2tLUMNoLU9Zctm2ahMQcAjwTJGmxgzByQoh",
  "key46": "3SQ5CxWvMjnqWdMgfuApSuvHHNj8nvG9vcjR5PRQCiWFc6KDzWeuTfzTJAGYQCbqb6Dn1QfCjLU3BwXU7tyyWLxg",
  "key47": "2Q1v6yZyVXzomrWM4eDvSY2ku21GxvsxUQ4fN3xJoiSdUqzzVSdijfWSp3xn9R2N5xqSWVfGe3jLRTgy6Jo4L9Tj",
  "key48": "4inMPqxjHbaKZRLrKhfvMdJxzh7nUQXFwQ5pC9u7RNq3BzE42rRLbGNGjnFj6iDhctdRgt4A3qMGjgRKHtUUjy2Q",
  "key49": "26xe4BQANT1WvQFA5uZixQZreKyEJ4yFF1nxVSNosqUL9zP6XCMuoZuAkb3i5wqMuctPMGSKdXBdJ5Hei5tW2gXb"
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
