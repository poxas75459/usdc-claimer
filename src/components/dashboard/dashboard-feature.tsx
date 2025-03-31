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
    "3xjnKnfVnVbxG5KonR2HEHcj43buH6vu6e1oHWur4As9U8yBM89c61aFKqnRAqAy6ozuTyFVt5Rqot2XBnadbhkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AXAdJa9prTM54CsMw2BoPHCPXsTbThUsFHebCf9tjy161X6vZJ17Bo83vohvQeNgfB6DuaqCkDuen4EofijWUdE",
  "key1": "3ht1AMKrrNG7VpXu3mbKVEd8Sh2s6LvsmxuNApASEeqJ2RHtuXXZZXDS5Pxrg9DXgxByDhxP8sokZeciHJiKGwip",
  "key2": "3AMVMNA9rJQcrM1oVYE9zU2jxaS8yJqJy9fv9pjNovBfqr62tBBoZ69YjPKHAuWv9mjhR3Rv7RY5ko1Udha4TFQ2",
  "key3": "61hJSJ6dcoaGfmUUF9XkmTGH8NhEyspD7DMyBYsJCpAgD96y6X32WZma92PJP1TGaD2RetFDyhNuNPLkTUzam5VG",
  "key4": "3NXaNGRh2rkMx8Nzng11M3PP5NfYQMZPafnbnX5dKx5Cou1JQFmg9LoWxjdBmtXPpDMafpWuappTkNL5DiATf9va",
  "key5": "2bghT4H7Q1g3tMCCkRU8QqUaWpUdKUoKHRZvtZZv8C7ZbhYfdgRVzoqC5ttGxDovwMtn6CgCp7gUpLox1Y7pHtCT",
  "key6": "5v32mWEwHyY2WMYMJ77eWTMCNqDws7Dqrf6fpRXbn9JQPbRWTiN5EnTRcVrSUcD2Dp4xQ6wcqdsxgR94ReZnDNwN",
  "key7": "4wtwXc6o1JyGxehLWA7ESmSPs2cw8qwYxa8rXTKPivZdnx1Bmq3tZte2SCJPX1pk5HQghdFnq8qbscSmeCmzHr4C",
  "key8": "5pMhDYtqKr4TYbY74ux8CmKHy7fcciMJ7MNcoZmh18XwaH5FURKoeNJf4a4p31hCDhF7mukrY8ZiscUMd5aWGANP",
  "key9": "zPR3BMvcguk5UQeTokHvVtw4PcKkrEXnsa946as6wmheYnJJmZ2ZcHYH69ke4YVKvurgi5YK8hTBgzV6Q43zrWE",
  "key10": "5MwvWrdj3H7ZJXeFhHYGhCjfY25xR4fRTaTZ8Jq5s3egJKPXEVC6XSgKntvkdmoZX78L3p7MEU9pf1c5HFp59X5o",
  "key11": "juBvG6pd7Pz4aeHMCWm6EJqtEFBgqviFw6tTfHe9bP88bm4BpJ52MzXS6tfg22vATkidiE77hkqHCXvuVZsZ1kR",
  "key12": "3vMPEfhdX9xu8fcPggQvGmmBA8hUJbVii8HU2CqimLFfh5VQwtAMW6LPmhbnpt7JYdqoZfePA6NZRepHZP3ye6Xz",
  "key13": "2pnpm2tBSy7HE4R5Sik9hp3o4cUaEn5dHS1t36ozBBywKMsaCM6G1Upj9QT4waUbUsKiqugQ3KXU586PsVsYzFGD",
  "key14": "agDhjmPWkRAw67KMHemyRUA4GyJ78jjVJSfjxePemTcX4rSXiWD6xKRkgJbganCyUfnXi7vu15p24eZkZxdkNVW",
  "key15": "dMANbkKH9NhnjEAzrLWzUG3RNXjkQkVPyaHBYwgSregTLqqHPfi6CWXELgDsM5aYhuadFZAwzkFDqyWmQSKYCUZ",
  "key16": "2r6N7x9P6gAYWcotLkYakJCiwgS1EeX6a3ARxftsQeXKVMkHZECoD5eGqLLxDfwJ7rVS5x7Lf16Ld5VrtmFZ74jg",
  "key17": "5AuAVVcW7JowY8tqytnR6TbxJEhpJsai5vZjKJgHGRmg65nbtvGzYpSWTueJ6HL5PB5fZXJB4dVL5EVasCgLfBVW",
  "key18": "2Z7Qovwa1Yqy5YgYxwnppqnuhwYZTyoUKi8A4qH9cR9yQXsNY2BuNT7h23kkgVXuogLa4GZPCGvPL3pKayFoDY52",
  "key19": "B2EzzrYr7toYiKneN6vo2hdmtUYkxF5oqrNbdc2LNeDi8eqa4CNBDo3iRcAa2CkJYZTW5LvqkAMfYByaP5tL1bQ",
  "key20": "3HnniG2jnV86mpX4qu2yYVdWeaXwVukWZLj5ZK8jk3qppyC1NWuDZxU7yWmwWJSNfFNxpUqZi3PpE33xWyvZyjg5",
  "key21": "2swo3c7c1N7F4T4NEP2Gikn57EniRPgpd3Zg2ffAj3grd8kjhSZPLepLNEe8c9hgUiQC39fds3wqZrym75Uwxvm8",
  "key22": "2ZcNZAwsaU29xDCWQPnkZLyDewm2GLUeuaD1yeupxbWcr1ENWPAs3rbPvTCdH5SXEvSKm2AFW9M6dDyNZdR7RB8u",
  "key23": "2TAbrhtoX25DZkWC5QVgdgcKHU8G6ycaVWaSHKvjWMBRu1Bvx6kKjiH5PmwEtVeBq75e5pjKcXjWArWYMchdadsi",
  "key24": "3eKGdtHy7uD2MiwhKppW2srfRSr3wvpqLPLbLP52sh9aZMhXayM2pUxdZU4RGgDadU5UNcumDgNz45igtPDLfm3y",
  "key25": "2LMiCxJFfd6ugV5QQwCSUZZsDcyB91pBg8jTCjJWn1HWVk1FjNsuUt6fiHz6fEgGpRzuYMnHxsppRZiV7gERFsUF",
  "key26": "5uUaPCJJn7u8t1NmCJXfkNsWoyEvMYakpjpzaEV4CWeH2PejX6jV7tM6SUy4gPMT16pLHcePziwhzw1GCeuJbF98",
  "key27": "5JziMXpcjSXNhimRBRP43osdiSTa4s8yAWsmBDoTuQkgrEsnX74UKMgtX8sEjxtmrgRb72QoY6k6WKuff7mAQ7kZ",
  "key28": "tZ2wBxPM9995h7MYTPDLr5TNCYUWpzPqyWDE7n8w6vVAoADZJ8jNTLvPMRTMvqTDVfsCtPy4UQJ3GzdKTQrEYGr",
  "key29": "3XgsZqQp7LB51DRRhteUyeXZarQGXjh7C4RJnA83Uy5uoWBw6zWUELt4goKThm1ox2jPGcvrUuubBgFSFJY7RGVN",
  "key30": "2HtjKJ39KSWKXS1FDanmhS3skBhKWxQgcVxsiti4GZ1tT8UHrbsXiDTCAXrQSvhnt2LgZPFXaeNodWYjJ38Rwsba",
  "key31": "zgV9Q6vnZz3cQSkjzy7Ba8gB6YsvSkzG29bqctaEsjMhH95mhug3bhKxknmXBhbaXFvRQxdQQHA4vd2hXeorPRm",
  "key32": "5PtEPRAxtFxg1cu4Pi6wwp6b8Mc1zq7GWSLgtSmYAc1ubMsnpybXC4NKwwYvbJQBafztMH3SJkKQXvop8FTz2Px2",
  "key33": "3F1fckKuPaBssffS7ZRMsxEAJPhp9oYbpPgT1UypQLZuNoLLDgPyS3Wzk75c6toznE1ZW1w2JCVihFv5ap4Qg5Yo",
  "key34": "4uxaGAUUua61vDFMHmHNXE1pi6iPpLobWz6Ne2RQ82WfGEjbkKaeizU6fMFH2SUF6wmqWKpeo5wGmhEhGiuEeCtx",
  "key35": "394mKVGYQocfwso2pyPyREicoN1CnZ1WRZAp3PKVadgJvhaJquCdNUNT5gjJqmj7g1MWjz9JxG21PVCnj66mRsrn",
  "key36": "3KUybLUg5YDXRg5gtrhf7THsjpZzSQfxSuSgQKHy6bigkddT95hj9SBN8CRWq82Ld2Qz3FFTEyPPXPrSYGg9c3Vw",
  "key37": "45aCv2ViA5KYjGKxRHuQtVtSFPVVy2DFoRgJ35jwrtKZryXgdANNn7YJk3fbS52vYjdtasxHQ75iCJPtdAL8ZHG7",
  "key38": "37jPAvREbSRZmqv2Uqpkq4TXgT99rxasrnxeJkWALTZzLukBtofbck3QFr6B9rTXsZn8pBLRQCUCqcoVyVCFR8v5",
  "key39": "4ZgkDZmDARCfEvRNH5zyLz32Yu88nzfn6Sq3swhdfyPyzmw799ajefUvasZ79JT2AiQ2X6xhvcJN1hnFj1WpqFYH",
  "key40": "4uDi1cwD4q9YreSoGK7DKUPfGYYB3GQYLseVsSsAKoBm6G9icDzKa7XPyJaXPbjYUJibyM1a6ah28Ehs2KRQcUwu"
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
