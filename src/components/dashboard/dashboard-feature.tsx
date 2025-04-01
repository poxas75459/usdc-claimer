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
    "53BNnGreMZbZ85EzyvAxttKeU2fRunMaf3kDJAnJU27cJxcuVbCNJHubXq8Cz2gbxw3x6njNqfygJotXQfxw1r4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B2vTnCceK6ncVc6e9ei9cuW7wnqVspCo8JmKCdsSVVpKPBhAn2powRD6qprzqdWJ4VUu7WiRU5tWxucmQn2Xhwc",
  "key1": "2oFUg3oZzpeirAoFJzua3Q2CDpYQrBXKqh8VvaidF7Mx3cfpTxEae2q5CRR5hFxcW3GepTg8JA3tmHtGHvSXYPEX",
  "key2": "5NsJ66wscgZ1vcUjqLWxQM2fLgqDC3qrj2Rrz7TyvGJ4jBhwMvzoqdh4eYyFR1okv1HBUn54qkMoathGFQRq8tkb",
  "key3": "3K71VZTwGdkVbBzHRwmCyFvabd3r5QZj5K3WX3rcHiMFaqKUHFLQCpKRCqMdFPS8F87RNrsP2dAKsLWMwTN8aR1W",
  "key4": "3x3K36jWFHLhzaDKAZoAt5K7sEYf1jpJoGjdSwoAHo4f7MtxcNHh3UckUR44zqzjicfKFhyVUpfQiFDfLf4rLnKp",
  "key5": "62JCBXkcWxAfUmLHGGncAcy5T5PzzhS5fif6tMbb9LrbGMoAzy4ndVUjQkxc7im9qGNAkZKLEBcnNYCCKkbGW8wD",
  "key6": "ukctAXoytrwJjX9JmNYLcjdWmqmhcDBBW3hFtE7Qgaf3MC4nUyXjqKxEW2tXzpi8rGnqUFXNSXXNN3J6oNb34Be",
  "key7": "51W2VoQzMLzUhfgMvrTkXbhvKXKRgnnPVs2WDxeyN659FM3F6Mxm2rXh6juZViogpirRSL4Zf9PguZgkeUgCt7My",
  "key8": "3v7ehj7ZqKwA9WXdiopzR3qBCZdTgSN9G4e4JXjxHxfpjJ6kceuDMs9XHjzM9bSfNbHu4rQG2yeJF9thqJ2Yyw7r",
  "key9": "91p1jL5d8JAMNAiTNj6yfog5dyhDVsYMoV6ibKmwvRK8HHAzVQjPwyjhr3e5vXqwKQ2fZYudzAjnjLUv1omiuwG",
  "key10": "46A9KmmE4VBKWD8iHhwgEsMiwME2vAJoHocFp3C8P984iDdPLWfzD8koYPQzqx5TmMns6bkNgriabzsB56ekXEpa",
  "key11": "5kAQ4aHNNG37UHZt54TBUse6bCHQW5CYGPBKn9MAKHi3TNzKViapVEWEdWjDxEpoWuve1z5zvjNaayTxDbReiGAY",
  "key12": "4Tu1FUN936wwUJUiqo8uspNVSQdbHDkw5FL7NnaqrV1WgwPFfj49w76cyiKuHVGyhjNay68fD8jwMyHcebvk46ya",
  "key13": "xyEbVDUJTE947hTp85ZxSnhqHiUtBoFAKoxZNBrFDgukMpWQiXvCkjb35z2VBatBH4xF2srj3UUSKfZmfNAL75X",
  "key14": "4h49d75Gq9oyxUzjiB9T5paJHHykwiqsjKauLn4MG4RifVdhpzmThohfU9Dv3YarRcFScGQhKVdb11ExHS3VWGFU",
  "key15": "2raJURwhKXeFzCuR2NbCh47VwS27x3diNPtZZMT8FxfdQmdzigmJ3kEtWowM38hmBkZJCD17Lzmyc8qNUU26xukD",
  "key16": "2WJEJE8xbw2zwSm1pPBNZ4KXfyVL6oz98uKF41Cs9By9aZ53roHzt6G3e171LQe8ahAhtjuT3h8EbkbJA8LwMHqT",
  "key17": "fL7TA5TjFSizSSZzPwSKZnhoP6Ydr1gmwBnUpbs43Y7V1jkev4FHrwyHVBaXBpWgo8ZiGNwTwyE7UXmaNWezsCc",
  "key18": "jT83jwPvXzHFp1H8z29Z8n5SqQc9RLNjTer1syxsTfkEPmQF59zYG7NF2ud8Cj71aAvEBsUCkdxxmAwsNaUtFdE",
  "key19": "25HHyWMEufiyjdHkr75EZ7A7HvomPQ6aMQUAvqyfHDMg5H2axebWbuR9svvfJSNUWd4P3gpqRxKTaGctyPGXCvnq",
  "key20": "2kuAvycmEZF7GjSMUic3NvcZxryQqhxRVuCkcB5qRpLVNnUGNFFUTiyLbzNgGYm5c7SH7bpRnDnrkwxfqEAP71CZ",
  "key21": "5AgyLBuJjURKMSUBgf7USY2ELyRMed2Dr6axsLKMGaECbAVtBwhB6iN1qirCfP41TuU9VzUG27cVFzg6ZVWqgTUk",
  "key22": "5TEKCm2kQiP6kfiamc4LYFsc7rDt5Q3oWVfPTGtzJh6WjpCKjQcGGZrV64X5VJykMt29Zue77X83GjYNNGPnGqFi",
  "key23": "gY4oxfAGQuLGrjJ8e4eunHD8Khdc9DPJcMQ9BmRxnBb9qzE6RaEUooAujdiJNgpkWWxa9GbQGZQi7W1M1nu2B6n",
  "key24": "5VaYV3Nmt1QjG3iNxXaMu3Y4ivouGrg64WnYFXY8nGBeTmAraYmtEt2GfDxXQSeZThfhXEzkoxBRdBpyAUzVHJoP",
  "key25": "21PrtK7TP6cm9CCqDECrQJA2CVaqsQecKTm6jP9murDVoh2h5XLDVqdybCcVPEzxkpQmU67PuSoGfNDZuaskDQis",
  "key26": "4UXZbLUaNV3YHkYHgRSjFpjSRpB7tyPAFfuj4KjaNsrri5GZxKyjBFPam3utEe5AKb3DkjsNCjQ2KuBE5c2L2aJk",
  "key27": "3AtmwiRx1ELP5mLzsMyV9cu2StJJptZjzxYQNRWUVnGcMPZ6Ygvnm7eYYk1qc38KtiRkge2GcNYxzYjEc39v1QYg",
  "key28": "2mo5AXwq13Lk24WJAouQ9ixJU2bvRJHyxWjptgLcRzQGEkSsoSyWbup1V87sNwSyKJuM1wnyYbh5163ckkJCqAqJ",
  "key29": "5t3Kt2fpAAubceFjP1X9TJZPufnSpcgWeHvGBLF5PukjdQrmH5SXk4NiqVxoQrUx4o3h3RfZBfte6DDAm5bFiMW1",
  "key30": "Sp2PfwpTXGUZZdY7bsQ6LJSqBw8kUJ39RxnkZesx3YihxwwRkAD6EHZkoZWtfbPsJ5evuobvnMyHCcwdy1JHNss",
  "key31": "429fBimjVDsikzh638jm844n5gNA1dK6amLQJr8gv7Z9CvyiMFA7QxL8nfDHhr8kUWgkwJbH29Zbs35kpoQ73c3A",
  "key32": "32Aiwvvf3LznMvBdrfncu7etswSCCun5apgWt4j4ef6jHcRcd4DVRSrZg2GyqAiK1zBj2qFMsVQ2tNYdvHCd5HJw",
  "key33": "4pmn9FBr6cG7zvdNFa89D9uJ5N3L5jvv3KLJt2yv9RQG8zQL7Cy8hNGQvsSuLxycJNX18tF1DqnHEManEZsA7vBW",
  "key34": "3XccHiH8CBPgAMHghoabbiJkJbnYb2yQcgZZoND2SXdE9Mp8dDekrwPTbBWwjSAUikhZfReYx5cLNiQGcVeqgkYY",
  "key35": "65usRTJoSB7KQNTp8VXhuxNySmZrm932LyWzBJumMyrLXiWYJHu8x1djQhkqCU8sKyVvNERJvvrnWtFV5yj2G2xY",
  "key36": "5Y97MGHefqrp4Ud227BFDStwixqXnTXQEKYmFTtdVcqdZNKEeLdkPmPW2hML7gZEBCngUDDdyRnXexHMDESHeB3q",
  "key37": "sC5NuoVJCy85mGtoAvjMKMXEuy6UiejU7YVVxGqcjjBR4ZRVwSc7xakc528vp7mSyfF2JPHMG3JTAzDz7xt9py3",
  "key38": "2WSmQCJZjJjk2biTmeydPxvCT3Ufbs2ci1c3tDRHnBu9RCXgnBiRmrFix1xuJFBqqrvicb6pVo7Sm7DSFdZtBn37",
  "key39": "4uPatDQTN5Kd1McJFuEQRKS5FUCUNmryTiTMztAufskTYx3Bdc3fpRUwJLpj9MkNciES7tLyjkzzbZeBEU6HEa1W",
  "key40": "uNhb37YuxoQRYJGrEWox4ZACbC3U4Jy3JXFzdKdKJXZrN5LS1ToGSjgvwL62cU4cUWMZMBEVgW8uZ1mk8pfdFGu",
  "key41": "9gY3xS1kfKPUG3q7Sj2qcge3TTLRZjSAqVWb4Jbje1KfWkGhdQArtG9QexcJs4WwajURNAsEFsurtaVaiD1XdDr",
  "key42": "Psc2JVNoq4MiEuRHJm23RqCGXdfkqdgrranAjhvECPhBQwgrDQgAihyGCK5dn1dYJGtxXTNrEoxynZcTd5fyj7E",
  "key43": "3sCbw46iiLLBPBixwMFrgFysmGCkZ5BJMH4dGoXv8JFsE9b9TsdzJKWpxdkm9958QiJNUwiAPCS1496cgwAvHLbh",
  "key44": "2FDW5ogSQRnAy8xKhWcP6kDcWfbrsWPZLYfwSSjaKNBVTXzR9fgPkCE6uwecNx8JD8EFiqProYnCSMLoMLwyMPo4",
  "key45": "4WWcVaQ6VJgG4Z1FfAn8oAwWvDFAifMMxQs1RGYwTZRz3yB46nJC3aAvYnhyWdfjxqvknKo8WpQmCuaLW5RYEABD",
  "key46": "5tW3rrF9WVX9a5cALMWxZ2hkEXQY9qiUEYH8reMv7DM6qg12fVUbWgVhDPiur6HheUK8SUGoxxZHMQbsjBMi62Ts",
  "key47": "473xsB4dR5qUXRejiR69KKyKhciFFmsgmDDJ1QeSc5SqGGjv2ctDqDYHmKeKt8jERTFb4jjbRMTfkD9BtBegUdBK",
  "key48": "4GsPfqEdeEvvRYCu6x9DEjE7S1VSxtKr6zgQw3tnE6sqapVAkS1h7cKKHpgpUCzLUdkf9eoqy2P1WY5445goRdhV"
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
