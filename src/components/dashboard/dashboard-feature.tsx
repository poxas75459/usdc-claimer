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
    "3XZtGs5hWPaRbf4LKtDBSRFpJQ5nPZ4PodUSB9td3GSkDw5VUnwzQCNKY2doHJknbcUb4F5gcJQBKXuqQymZJiDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oZm1nLXt7MmZ5gdTDg3BPJ7hVTn32jMJHJBi3t4RQCqUuBS5EDsbvRcpkU4Y7w7fL4tEQJUVqwUtYRahsvyxiaS",
  "key1": "tkG6DWuqMt4JpZRt2zJRJmPXbcXKGRLBrPJHgtHPtZqdaYU3ugGeK9EhxRS6zcL2E3NKGWdRwF3obcX9tjQSbpi",
  "key2": "2o7osPM36XBewLDNhHhLAZFYjj2jCg7HpkwquFW3XD2ALvG8yjWMb7pN6BRoPCFu3iYYGfeLy58aikiLZgyhPcFh",
  "key3": "5hqyBD4EpnMF2S2eFufKipabknR593jr8zS1BZPCoYC58fwz57TuyaHTjnbv2gCEiAE8JQyEMezwKGFhYPQ7PtWA",
  "key4": "zHCZjxSC9jb29Heonz3EukeUyqtGkWbS1zQtUZUU1XGKg8oWgqDHQW5KWhMyGjuQpoqXVWZoCydgWoxQ2hbxtKp",
  "key5": "2VZkd2YLJk6QBHc5UKMQaPvrNjApWYVRV9W2xnVEqcv5zVUmoR9DaSzD2Cs8PdGxQAGrasv7ZHbyQuDajztSZwCR",
  "key6": "46teiJgZKT1nHgJu3EFzbNhdjchpR3shXKWd1vjASQwYaQ1bubE8EdT3Gz7xz23LLp3Pdq4zEMnnDZMX32u4CSBq",
  "key7": "2uoTLv5RZbvS1cmtJf3Uw8rBbWzoLRjQJQA24QjsJ9e3xkozhEJY8KBa55mH2B9BHwjbEC1PFUkk2EJg9Rt7kHRB",
  "key8": "4QWLbt4gGwouiwFvT2L962k4XVnikeJpF6Pvo8mP5bGBsiEDKG8goKfmfnm8SAznEiTuKi6bymbdoZMYtFFa3uwy",
  "key9": "37enYVpGsy3QTJmFq6RP9aFmyHBXref6kj9nkyiw8H4SwkXzGodyWeoAUgmh45edPsZrEHe2Zq9tysQuRw9W5aFf",
  "key10": "2TvvuYc8Xy2acmNfusBh7MzrGABZFkBMohNeRcMjqZGUZUPPyxPSVPc9xGsBVj2g2iPvPVnscKPM5qhg4C2wT5Gr",
  "key11": "2B8JUrx48qA4KJHpA7rC4GMPSv3AeoFeScxoJAN5pqgWusQQVQL3vWxcoYQmqYtfNgSrPU91utrFg9XJVdyjQQne",
  "key12": "47oqmKy2n61He1y9NwTbnV6Yqr2CJWSSV5naHY6YaHUjE8yVQfD9bqACeYmrJ5Dws8UNd1iiA393aGGbLCwta1GA",
  "key13": "3rCXb7rRx15K323CoG731VTgkfPtuq2KfPGhGkMDtPuAn3dwyGraFkkiJYSEoGgtHYQXnztBkaMDFAKet99z26Vs",
  "key14": "2joThuFSBLSmKkTAjWNtP8Li2BLU1qTCgPUNZ3iwMqa1PuhFe8FCmqZr5dU3Y3f2JuqApxR1weGj9wqZpHzR1gtw",
  "key15": "LhBep2NFSGYo3Qh9vZZYL1XaA8WgajsjoFLo8uEmvnyFur3HmTHSFPUbuukyB9sssucMASWqGDuZdi1DEpmgWBu",
  "key16": "4DPDvJspwTphHkqKPSkhG3ijjGLxXn65UqmjgtBKmNn3S6xW22yzDxggySTWKnsuaWjycy1UAdNRzwJC25fKqhbT",
  "key17": "2baHY45zzFvQd5ut3eiMwt3U5oeZzFxuwMpuuzpYwd1smyjya5Mvy6dqLwdM1zFKTJy9NMw9WMK4BoNPfu6keJUk",
  "key18": "pzXkwz8gzsmyQSstyWRnJqYRtDieGCpRWLNguBiEDf8qw6vj2YFy6NqQ9fuRtSDPLMQHV6WmYjb7zHBnMdHPxQ2",
  "key19": "495FDrsJtfAZb9yQc9egAPzm1suiRUUTHCzQHguApqncXauPEg79TvKxuK1QDeTGR6mvVaXdJf7wUnCompqrZmnN",
  "key20": "3F9Q4VZKGD79A1v59xXsXos7K5PVwHARnJYdTJF5eopzM34ea1TM6ppdkaKGbMuwdP8nwTWdcBdaW3pP7sdX2Dtp",
  "key21": "4DBtQgkRf9r5ha3v3sindvuH8LfnEdfQcP2EWJuSPjjzDA64zQ88fhsM5VrkYVHkfCh2p6KPMrq45bNTFm6REz14",
  "key22": "2sZwwm8R7r6dpHuzLjvm3TeaJGAE18iNGz4gPW7swTt1cu1YbmtuRsPNuudSVqtXZ9NWdwtDBfie1nHekdMuzEa8",
  "key23": "4uSCPM2dxUiQ8cauUN7WLB4a3488dEsaGciHtkBDrpmUUkitYb9gjk3KZxw3S9buR7FBR1xVeYwec7MNiYnhiNKp",
  "key24": "5NJ6m3GVK7fAbXq313ddPonpAsCwYZB5vdYpQ5vCbBQui4G79NqXHr5WDTi6Qyw6FykmM2UXquHw5JoDpoBRdPsm",
  "key25": "md1SmmHgEVycP3QRBgBgrmxpD8QRvfJGAFpgmhX2eQfKGgbCHj4xb5o2tVGHJvkoiDoFARvBwPjiVGxE5YrKkjw",
  "key26": "UmsJxC5KbUd6WmrsngkE5dZnwfFV5NtuajeUG6YGZ3BrKwmLc5HVnhFs32cwsRJFXVgVinXjAixP78pqJw1Fgiv",
  "key27": "3VmnAeUCDECF1VABWmRFE7FeFCmndS3G42XkHZpn1r6e9Rod3nBVNu5hG6qG8BUawd4BrdnsW72DgY865Qk1ZaXK",
  "key28": "rWHrZSnvD1SjadkuHXH8JMPqyrKWegVPJVt2WArznsT4fEZeCwQunJkgcaA6f2bpyjMv7fUu9SrMtJXpXgMmyLS",
  "key29": "Vyz6rvRayGAVGPX8LzFY1PHoouRAN69CW1s57N1ueMQ5cFgxESahV2MH3s4ShxHsxE7jLbV1YFNZKiSkhTy8Sqz",
  "key30": "658df9AyfmLGArDgcJvMMXbm6jJ15CDgxdPJAjqjtQ2NkGetWmAJfR4VRzBmUbfRzSRu65F4WMBKWXrkiczsd7jJ",
  "key31": "3TnXbDvb3zzcUMNoBj1Gkiap3s5epRxCm8xsYQcATka1KRNj8vzHaPVS3P9Y2Xnp6gZbXBChhHEEv1uy4VouqV86",
  "key32": "4JdME9ExeCfNbiyTVvcxosu9ymzhT8QS7J9DZ4cqiKtURkBsfiwioqnwKPAdKaodtVRgf6835YcFWD7hpdRBi7j8",
  "key33": "4wLvQhEJNEApvCSv8Bzcph3R3K9xjYoo3M6bRGapQMzSg4eDuLTnyhqTxSGjBxMv3E1oz4ikS6g36bdEn9xZbTHK",
  "key34": "57dMLvMDmb93hZ9yTCdhy5JwxrqqMdZknKtgZ9iNWu8crEjUr6AcvqfByARyYtoks1qALNt61oAZh1ZFr5E7Wxpa",
  "key35": "41M94tEHagA1BtBsTG5qFwxL3epikqE8bk11vsPeZyo1RszxqdMpw48UEtqME2EE5FNFJvFUU3NFm9jposF1uyLi",
  "key36": "mxwdScTPCsYiPEVLwLp3MXyAePpnHb2EE2kS9F9zvo76Kk8JMUqLYPxk6kZoPWQsdn4BHm2Xuj2quimJfKjwtQW",
  "key37": "4CRqRaSrvdcjR91EpgERXhGDPa4DqATb8nDkBs4RqPEnys1ehoFUgnm8vYB6DBBHHuUsHMARc5yJQyYAyf2tzQJv",
  "key38": "3m35NWAzRySJEd3QUK7WJkNafmeLMr72KXoWbh2CSfUqqaAHZ6iVFubJbdTn2gQhdBjQgB1E9xw7o1Gints9XFsh",
  "key39": "55ow2LfzTEoTjsVxC3Pmgv1BudjMfuYz4knZXU5B4cVzdtn8xY824XACyJBUoY7oA6EWzWh9bV6Cd8tyjj91tYEK",
  "key40": "5wmpLswbZhirUw24awoP7pnP1XLsUAdCEe4vS38j3CURRU8AETPLr6WvU5pWDi6GNbt8XmkS2uWrskDJpMK1pgzQ",
  "key41": "315aAmUy3FpYjKcYLEopjuTVy8V75wTRA1VuJC4GufipbNEag94tnJWAzkXw5prPxTadpTg6Pf1a7a6ZvN7PKxmv",
  "key42": "43qXqGsN3ysV2TKAtQfmvGMcfzEUiDcuJ3BubLR6Z4L2TdC6BWcTd8n1gUb5AaLQDeMWcm9c9qR27BJ3Pt3qoEuj",
  "key43": "2EtTE4cESEunCBqs62zV3Nn9Hr6ZpGB4rWmjgTEg2veZZf4sBeRRGLSBUZpM3U6goomuVhfEsH1WfEPd7XgEft6",
  "key44": "5smSQyaLGXsnPRQWkafDGgE8DpfbTDHg99G2rYKy4FT3AXa3XRWpHvYALdt4XKQmH1QH6Xp5xGCkkp1LYJNerDce",
  "key45": "2QLx1Qd6CgAacFFsNKhsfmxQ39ioiTM7aPNCwY1HyBgEHYB1qZomofsRotciZSYGkspWzxFXZzmUFLFukXUqKdyL",
  "key46": "5F39Mnv2TQD1ksy9Z6Sp3m2VzfJYg5jNReQk2yLqHqiZFSNW7L6LZk836ZtqkyA4ZAbH2xpFjhXtbLPzoLqoXQrs"
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
