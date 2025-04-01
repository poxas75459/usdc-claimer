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
    "2FUb4Q2WejGM9sEDm5QZhFZmsVXWrvBRRC7Fk7Pbk8ap6Riedk9jgSWiVSaBQWZ41XSe91y9u8ZbbTQHu2sLueSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RnuQ3mRkNM7WE2P3m2UFWr691zMxbTBgEFh9ePSsj8QWbg9zNX9v6sw5XBQqo4UrsiDBAsSjXm1sD3iLdj9wZRB",
  "key1": "545maBLEXRfeAshooMfocKf7iWAZVnYzmGgs9aN6Cqq9FJtdv1h7SxbPBnkBupNXQfSJcRhx7b31UE1eNanVzAfS",
  "key2": "5t9zBSfqUzBNRPXwktfQ8Mo3xpdpFPTSQ25XB7gqhL7qXePPc86CPUPDMpm8Sn1SrPggG7V4zwTJFfE2LssFKya9",
  "key3": "2j5PbtXZh73VgVMjwjnkpxCesUND1PAi9HhXX52NKhL36gzNWqfoto5CwapwhCfhLdeUBuVHq1TusEZxefxq4qZb",
  "key4": "2JVQjFjajdVvHgQg9MzZxHqQngGjYoAgp3Tj3JU2UWmBsMKxJm9V1aHA2zpEWRqM9dRzfDXkrHxCcqXuZezCvYTj",
  "key5": "CaYatyRoBDDKQq3JiLkeEJbyMNcU2EZTN3PTbiiCuyeEnXWNYEYJD8ZXBgfdNG6muHRCySCepo9La4R5D25ZaMh",
  "key6": "3ixtb8tEueouuhd4RVDAihDaoYDEucmiRKtYbB4CdvZU1DGUTRjkHZktPePcu6QviTerTpagtVwk4DfLbSKzKPaA",
  "key7": "4GmMTfgFDAid8z663ErQtS55xbWzz2NHZ72rgTe6xUmYzbksyQFfSeGtYHf7rmR9786vxpL9edTK5nfHPrkYVKdg",
  "key8": "2zREwnP9k1rzD2aJ4thTWh54mfZywBFUU2SgpHq9fLZ1D87WyrjNfULju8e88f6ux3PqYq58ZiLd3zL4j1C1pDC2",
  "key9": "4L115yDeVyzkSMVPBRtph7S67AGMpswnzSmUPr2vjMjBchqF9mbXWmRMZ17AyM64eHVVDJHq9MuTjfHUximDFXHh",
  "key10": "YcgxaFtqnbMaiz7o2i8UtDGqP6EF8Jw5bHspvexpUymMYNHxRxyz6MVty4St9nZZjrCUerfKjPeYZS26tJKii1r",
  "key11": "5tTSbZyrm4WQHik5FNDJG2V1HhAXgASrrTUVAQeEXPoUMxCU6757CSknFxp2w7xBvn4vNsamHg65USShzC1tMDzv",
  "key12": "5HMi61yjtePsTztKgxVqhanhPnYqhCCgn8ULSq3jo4WaG9i89EVUS2VTZWpM12vLcCuFwvsWx4xxM5c5BPvPwWka",
  "key13": "2bT3asv7G4Uu2Akn6p3nBzHgnD2iUf6iB487go7X2YE5c7R37JoPUzsDZKie7JKCYemwWH8FTvAJYjnBYH4YQgGi",
  "key14": "4LbjDwJCwvx6xqMCGHhKt9jBnhPxywXZSJJ7JBYmVme8xw6Rsvk2oyP7Vi3t8pffqdgaZ9MLqftQ6P3hfEVQKY69",
  "key15": "2kp91pkBNZHvswLXSeSQb33YfVdeHoVnqgA2eWe7jSH2zT4h1s2KHsJLJ7WNzQnKHsDzeyyxVqvPcVhS3Mz1h6Ab",
  "key16": "3v67oHDWSWoCewe2mcM7jYgkcESp7ujSKEcZjJ22rj4vYBaiPh5oSfBZRgKxSEYVj2yMPrG6SHxk7xbZGyi2VYTh",
  "key17": "onSSFdUeaLkSBrJY4Ckbi3HmkFBKDuQb337G1vW8W3HBVE5dUwgmwBYQCLJuCjvsnf3aXzxqudunCheHUTi4KNg",
  "key18": "3i9JrWAaMnKmcMGXavQo5BsQE7S15HBdsbYrcQGBpraxmp7j7CMYWpf1sR3PtZkHcpWAytax2TVnBc2Euc7PzUH8",
  "key19": "4cPgYGAM4q7pvfPb2nX6BHU8DmqeESdcLoYZCePi3E7ZhWBkvS1jipAQxT5Uizn2LDMKXumePxh5w5VD4smJoAny",
  "key20": "PwnXfTxQimLiypXvsaL3QRwhvAYmPypg2LaBXEqQFgFimr9eUafn3TFNuyTGxCCKwZkiiwRkUnVtvUzDBDfgDNF",
  "key21": "2LeFxw1Ut3w8chbrqcTCzUkyVEPqD93qHNpQLntH2SU1GKvLkfGVbVHwbb6TkerdqEvKS44xSoFShomt71HSLQVJ",
  "key22": "5cmKB9nQQubUsyNThSchWQQ98SjLnCAWa23kDhEMgiWD6o9SmYsL46NAaMAfMHGjQ2F5RNEtMBsot4F8g7noCvfH",
  "key23": "4hUuiaKjGmhMgPbENu4SXP89fauoJAtJTSen1W17qKvUbmiUKkgCoEATWWJdvEvF4K7TEQDKpfr5DdC5BMAG8VzK",
  "key24": "5t46ybLvYVqpWJDpdP6wxYG8DPUrdt4mBPssYFqF5ziUvinkMCxZ4azPjS8TvpzJCQ8oFFDgceaRE5qFwRaUKtvw",
  "key25": "qijgsBuKJ1KFhKEv4h5zkQ7A9oMdMagRsuCTgBLSUjbJkGBKmrZtRjshP2DxtxsDWgvuEpLBi6NDzydHDutfjsM",
  "key26": "4ajsZqeQSU4ZLgks5AKYgtiGCC3aohDBKv7xVeLhFpBwQhPuzVj19TvyTerRrEi7KCtBNeiRLEZLdDNaDcBT3Nvi",
  "key27": "3NHGvYeXMi1CR5u4VEathwMiKnU459uZiX7xA4BznhzF3K5wMAzimMXbvwYBbnJRtoccGMA6uaK4p4VbHheRKmwQ",
  "key28": "4hW5hxoEgBjoTohYfEbuJ1mJJozCKnRsZq3bNNZQeT8JTM4gDeRWfR8Vf3EkqiHtjdV27mmTJbVrHBQzc31d35Hg",
  "key29": "39U6sbnJNT31u5fuWtKFuY5P3XZvSYnkLwV51zAA6SDQkhubTZ5RndEK7bmL4HuM2HLNpvzdynDhKggAvZpmPGdL",
  "key30": "3WWbzAa7JZQ3mTQZngbe5CzHWhgMky8iyvvHoxZ7fE4isUsdJ6ysKsnnFwqVf4AGgfq179ZAJwo8ndgGZLdvTiGP",
  "key31": "3c3JBM7PzpxYz6AQYU3uNVAriHL7sCd8vHpJ7p8RCXM4LdGXvbfmfXhpZbPkr99EKStg6yZ8ZuUmq7Wv94dYPR6U",
  "key32": "go1guVcA8T8VJ5GtDEkacdfNzK7td4yM54kdpthtdUAxuAm6mu8owNzP1sjoN5VL6ZJ8vwQHdnYc4c4zfqf3uz7",
  "key33": "2DgJqGPQFs9PesEY5rbtQmSzCMgt3kt88kX6xKMFTJHH5p8BtfPjvBszCLn6VvaCncsH3UvAHYqUYKseBzBHvBgX",
  "key34": "3gxeZmdA7as9YTszNKmvoMyF1H3Zv2qsmCsXCqSF2VmzRo3hq6FU1uZEpz8LwzokBnqyy3M3poF8cyWCtnfbMZJK",
  "key35": "64XP4mprcV75HpUmR4SpviLz2M6nA2fRhshMeM3XFUBiAGZxFZRQU5H2qaRfMsKccfQzCJanXuWDzXHj2dhFxAaB",
  "key36": "3h9SGCYj6D8Uu2g5jMYG8dYGgDxPHGvXC4K6hyCLCo7FdcSaAhkLL1514JA1Rnyda4oHBwNjdVobX7UZumbM42bx",
  "key37": "5A7eYpqNRBciMdvFF4b6JzQSfyER3HzWWCWGizoGre4o223B2qBwFLw78Xfq4wgoke8L5AJoErBTcfwsctwCuCDL",
  "key38": "2ixuzaUfMBepVfyc5B3V4mr7GFXjvEc8qunj3RgmPRRtjq14CrPAtkmhnd3jFEZb2CodfHyJ6TV1AFmPXyCxJGKH",
  "key39": "kZrypMrSsD1oV3SaQiBo95aRU56TswhDTe36Jce9L2mzfbRSj2Qs5SF2H3sH2TZaLoSCwWguVwXC6berUqmVUcS"
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
