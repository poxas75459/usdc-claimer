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
    "5tum9wsvg1fyuNaessFLs1jF6vs6zdsL3HkxNstsU6qTMK6MQH4KcaD6pmfZedQRACF2SuDwcfaHM2ys2M8pdjFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JGb6vxjAMRnRbycj3xWDjHXCM2BbRJko1x8bMWtkHCfdKBxTiv1BKDhjy5PFPx8ZyM17uxRyEiPEadAN24fXubd",
  "key1": "5R8RETMUhr41nQCLgs4ZNQMkD42L49Xyq2rmT2nS15fgn6WPJgggJpwWVL5jCycnW7u9DKmDoiEMA47BSqrHMSVo",
  "key2": "3cK4t3CySzRCWDXxupPPuF6WCsMMGxzqLeCQxwVTRpy2yW6m7WGFyYCK6X16gsRTLeftpN1NeuASZ8DBMwEKy1cd",
  "key3": "2PvsFPz1Czow1DHwwRZemj4kUNp1PKUXcqnSYTDXRnmnijkiS81cQBmWVTEEoqy9c6W7NnKRVwV5qHMej8Myu1hE",
  "key4": "ikAVBicVmoC1B2WC4Cv6ZiS2jPXQLiC3H5sERZo1Fchpi5HN4x6ouYjQ7mdknTbn3abykVksMSASFS53Rmg4ZFm",
  "key5": "2ZTmsHvsL5ustxbu7LHKPAMGtnFnzjDZLMXgkipfwodfMiN4bSQEoYs8TyhgcEEktH1i8uMLy5Lnq8NBMg9euo9G",
  "key6": "4x5iGmMSd6ZzeSdEZgRV2he6woDBR1wV3JzfSaPY5xkmFvmGyQ9XvPRPaJtKjZde9r1DTCFxs5GbJtaQqqszk68K",
  "key7": "jWgNrZ2MQdJ2121ChWoqMwJu4y2nG2626knxzvx7GMDfiayyC7ZvpeK385r72W3N7qMS7kLvXHpLubgJENHfoVo",
  "key8": "3NjPq8Ke4hqUvu1wdNLpq6d5BGnK3YRMtbprVrUeKABvkSqx1ce56oALh9Uuv8YyfQFeARFFYNBS2mCZKWnkr2zJ",
  "key9": "4pJgRuUQUpVw757aPKJD2qtmFyZku9HNDdLsG2p8xBRe88YbPBehT8DbgaCPQurjQ1fQNzQ4DaJUcNiwxdnJPgAE",
  "key10": "2pM9ep39oTvC7kyid3K9HxCngQjQHoxxG8sLbQG9qrnJB2w43oNfQs4TqNk3U7hPPDzmEgF5KnwhCSjxb8cBgjiz",
  "key11": "SVXsR4PNQbWe1cmXhQcxoVMzR1XRyd3dm7kWbaT91PSYRFKifP8q78vSeWb56q4CP7CcD2jb7scJAxm3cWXBHKt",
  "key12": "3J1z9wrsh3Agtaf7qrL6ePgPbbZyNVeNLuDRB7jShx8J23D9CD9T9iY2X8mR2UbJ6Uj7h7uNXmJbHBmqAKULVpKP",
  "key13": "3YaMSp8RokBP5pvGXXHbPVtaqrvpxYoq8BeDnHqMVPJ9JfLcgXtC5vZKYbjjMzLFy7CmJrPbNT2PzfHavSSrsdov",
  "key14": "5ZJGbdTTQZsAC5zQzvDvmB3eJY6tRCksxzg1evLzizKYZDdGVxThRTEiZrARmo6BukgR3YztJh7NDuu3XmZmCooM",
  "key15": "weu2p1pmCHsRD1JMjiTS9qzSk93THpxPaBT9pEJ8iTydp4RQbVES9wPMpakNavbeDxQepzc7ioLQjfYUTAMJ1qc",
  "key16": "37abrFS7LqcqnxFKNT4fmdGHf3v6yU1FAH8GRNSrty1LWLuuVwQAzQrECzdKNXcYQ2JgF79NPwfXLFEivsC6YK3X",
  "key17": "2y8yv61iVqoz2R5jwCQG5wwhg1nCkfTuoLXuYLwtT2KLbtZMyyrPgLmHn9v3MuRKL2912fkM2qNQyYuDhYAtjXFx",
  "key18": "5VdVTEPT78ydtd8ymMnQEV71ztd16nC6erp8roZzsFjgB455ssw8rgkyfQDU6iZ1YKCraRk22xUAvMPhBcEXgZph",
  "key19": "22cPvLyNztYMmvBiU9vtgskpnT1gfpQtNwBZsPm6eyRpxBwwRqi48mjW2sRzp6bB83gP7B86pG3QY2pM8dDwwpz4",
  "key20": "66dixz1XEZJzLQ1kob1x275h4K5dDWaKehGvZFWcRF5eWa8okdsM7poaix9JfCgFYkuY2x94mpE2MSkNnY1nA9zm",
  "key21": "2rg4iewrEV1e987324ftv3hyv9gTKpLG9iGgZnU51xtvm99dHMd5bxMtpgA5NeMqXkzQ1nE2RX4y6eywJM69yVsR",
  "key22": "nUBSXgWRAjFSiddCv1EtUqP87vxSHcP74UU1Ez2mFHf3LexYmLEdZCWHd9oJdXiLiGrRHsptRYxZyKKwTUqWHnu",
  "key23": "4HyvSd7fFUcRtpnnxGieV9i5RdrNFJmu4SiCxK9pZyKcog1d7eY51auQQvoLcTmENZxjpsxdMMk1AdnqmG4KMf2t",
  "key24": "24rBGyVEhQ13KfWYWsivCb4SLyBCCugoRW3v6Fe9SrzkqpcrMQa1CMA3Nakn6iGpcUgdtQnahNLF1huA6YpdvNY2",
  "key25": "3vh5MvLwSjDZq8ffAV62S5JiiiX6fesXWDQdehvzMgiCNPaNud539WDZXn4qvpm5AAQ8CUXMEkhcprf5EgEFLSto",
  "key26": "658yaikTDazxVxD5y41yUFnXStZ61D3HqD7xFgvb1N2ZkVmf7mz5YgUkyjHjsYbJKX2PtFiM9GFAYzQSRx6Ahvuy",
  "key27": "36ViskcPi2wUUw8q9sSKMATk6gNC46HVu88zCjqt7gyAC68Hko2tyv5LcPBknC8KZpiNHsoB7Sx8pZAnJpRD79um",
  "key28": "3EXfaknzvMbKHM7833WHv5FWpvDQV1mN1FrCRwZiKTJGrCkbVHdqY7xgoN7idaPTyq8zCT3LNohEkRdafP6287Ga",
  "key29": "46nXHvpYCEEApiWQnhYESKF88gK9XdgFwQKA6GBR9Sa1VAGk9d6JJjxfMagkDABws8ZNPzT4Y52iKH1muE2RL9Dh",
  "key30": "4T2Kfy2A3jn2BKXrvwWMsiozZmKC3jJJaKsQMx8u9rd7PhyagkGj39Uxe7HbYiwxMMiocJ8xMgW7983Cu8krPZLJ",
  "key31": "4sGLHx81QeH6CVKszyjTKQzyoGTqcSVG4kpvniE9mTskS4wcNp4grbhWsLbJS1QTaAEZS1R4zrMWaGvz3BLDFEwY",
  "key32": "3YoCipnvnS7kxPf6BkFvSjJVwHMS5qvfJ2rPm6BEceW4RZsjVVtcxW9W9WSb13gdecxC3g4Jk5krJA7HYX4JhQP9",
  "key33": "3QzK4MhtHpghkvKLMckkz3cFEb4pjsU3v69mzDP6XsJcDujaFds6vCgZA3ABqwC4UESqQ6sTT6Qaye6KB6s1JtiB",
  "key34": "639ADLXYhDhLXr6aKxoc29FFZkaQpLurrofAQcJi7ypg4ELwW3qR7jKRikbNi6Z2CTjPJs5B72fCDGWnyS8xK2kf",
  "key35": "4sBMQeoL8fNReQTV49nrGQsDAXscnWmoc7jzZRiyNLFT8ffF3DJWYVrJ75UePiASnp1VFq4DgHWQWQhV3yVBaEz4",
  "key36": "2wQW9VEcMetgugfGFGh5nHv2etRQq5WQfjSfJte43boVCU3fxgncZszuH5F9fey5Jmfn9mcNm9C5MimwZLrtE77o",
  "key37": "3ng4WyngcWZTKZgKhGX7zMHPFSJkSmzwrC4fQ93gQC1rh42Enk3vT3RbENuJwfgmYRMr7PMRCrNHKJMJrQBKCPyZ",
  "key38": "5TWzinNyMFSEMPJr9NUSiRPVvFhZS6PBKSvWKZFCKgQu8fCdGqeoeki2RUiCGJyR1uyKBJXfSzuCXJJibks3A6P",
  "key39": "Tx2LLkUmoJP33BKuDJ6uU6mUt8hPVLFadnygoHrTv8kMpfxnKuhAhMN1ZKSCMetY2n5rBvuzAJfSbHUWMrGJQZr",
  "key40": "52YJ9od4XA7LmsvfXJKF5rGnJPBQdXbBEzwyE87P5zzFJdmWWZWbLBgCU8tzdrw8CMuHgjhSMPvq18KsfYdQ3Qt4",
  "key41": "3wXE7moUGUaQyXG3swRYUGYwRV4cPMfAYXtmTAqbzCfB4MtpC6m63g7EKAB8bZE5bXxChmLFFcTPRt1kvaidbCpg",
  "key42": "SnMz4Z3wSEjVhbif3ShKdWsj3qXogemAgKGKuijqDLdXvskjMbTWCmEBY19U9vw6tpE6uKz97AXcQwJUCZE7c6A",
  "key43": "4efCsWoR7DBBfavASq5oF8e63odipsyhwigvTAaXc1B4TaqY8xz2UNiYRr2LTdPsqDmKoND26YguVC9bnNT2qoRz",
  "key44": "imDj8ZF6zVGWCgooXJFUuxQqTRxkkRFRj4RZy98bwCFXmC7SC8hijS9xQ25hzWKFcbqLx45bAGZs2NP7wQGPBxq",
  "key45": "4A74gQe3LV1tLW4KGGw8USjpMBGb94uJPD25pt2ktPQWFywQd1LL1Nwsmc2sWdonG2S5gfthCkk5GScdpNuSkaM8",
  "key46": "2V1MhNXEZp4KiZSBVZ3Mv6yMirCKBQuhfynG6UhyLTybKcb9oggiCvnhts4VQtmXrWPVsgLQ1hxk9HYcbDeAuZuk"
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
