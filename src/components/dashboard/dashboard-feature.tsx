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
    "4N5PhiLn2MyLrn8Nnn8XBg6yatPweMFx41ksZS9gTmET1XxP5biFK5X12UZwvenMLP9GRmNAxYx8dyp41aNpypxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pVKBrQHniKT6tZ7dx8Ez2aCx6ZuA6abn6BfwEwy1ZKWd9c5btHgcA6Rr6dHyKFGVp1ocbVLCATUiSjXbVeMpVi6",
  "key1": "4rtBPgcam784XBb5SbxGvY2ChWc6mEKs1x65Uz5RsqbuYLUxGyAsV2nmF8iSSmDaDtHkwSk4Pr9ZUgP1bVMdc7Em",
  "key2": "3dXnM49g4kRJET854eb5qKYa7NrshyJToezY25fhLS9RXXbnyrJvj3ey2QkNMG2C79FqJvAoQwNdSW7ShNnsbffE",
  "key3": "4A6mVLFiN1gTeNnKu5ydAV8vk8Xe4sYT4U6S5zr1rmHL5SzL2DUrFHQySTyu16NXwBqPLfkKerw6b2cWfx43fCeK",
  "key4": "wezPJGfWv57yQWYgWDbJjdzK8raZHBZ52YzrCdipJ4KwWVkzUqrsQd16EzGZwcLCQVVHqF8MGzG8asxXSwZnSfd",
  "key5": "2WLAowfsSyfpnxR9zkZAJyPkYN2jjVm4CXA2jHtAK2BDLjDmbCRnggmPP6uEBQtKup6XVbgSZS8YTGB6YdGfgDYE",
  "key6": "2UrN1WLzc1dqBoAV3bnAujF3P6gC9xjRwidq8ZAssknioYYqefWo8mzuymjkqW1LEJLUSVum7fCUa6yThmHLyqn7",
  "key7": "4Z2Kou2Ps5g9eUg1QgQZ3EXiNo1jGMMB5hKvBDbEm7PnXMVvgnDAQHykuJPvC1jNbyMP8UAPo5tiU2uVZZNYaGzg",
  "key8": "3khBzbxtfknZvCLa7iEs6pddp59Hg7n8vqDn4fAZ3D3dsWzcoARZzkSW4GDyZ8jZnJTa8WaWHXbYBESHqgWpedJW",
  "key9": "4YZmAgokKgEYmJxZB9xJrCCNptKjeSRzegCo8ZK9cbDoj9KFtJZRoHfeZFdtu32EVNj7hEWNemaJpBdYZ1CdmdkX",
  "key10": "8SrvZNUbFCzEwq4QdGfdPrQbdmeE8M723HSkL3jh1VppY7xQjYDbn8UpR9J95CExcAN2coAyyihPJ3vwPh9YgYJ",
  "key11": "jrkFywDNtbC9YDpQeHXD7wy7c2Gyz64qedoN1TeQv12AcbGz2qjmbeDfpQP8EAdmoRzLuqYwqbFVQWnRKeKEAv9",
  "key12": "bmHWAddVC6Pt8nqjibM3gx9PeRtBTyhC1CU9MUuasryf1YbzGdNS7fpdhtjZKQCUJ7KRGoGomYAxegVqUdanJnB",
  "key13": "5R1SzsPvWghw99CfkJXAWi1xQGK8cHRevWswM4hWw51C1QdThfGJ6dAYBMhPRNPLWMFvQhjdkSRQsKH5D3fgc9Qg",
  "key14": "rxwddMsLcYopjGv6h1UuRU1QAjZDfrPZpGbTuTpyPm9m9hBJ3EkgugS2LWKspNWPahaVn4CpTjfkHeoVkXwmNPp",
  "key15": "3ZFdE7WQJB1Zadr8qPh8W837xU154H6HbEEUyyMw37fFFi4iGrZbA1JJn5beTk6viMC6e8EPSYAmfrWhEJA6SaxD",
  "key16": "5HiifSYYi24uSWnkSK8yX2h3n1X7VbAnk8Q9vbB4jjtnpvnpwdC6Mp7MRXrEmVTL83TrYgVYameb7NFAhVDvT9vu",
  "key17": "4oPAhRbQE43QdeBTr9qtdnD5Vaa86csw3c172CZZXSMTe6QSv37C5VP18yaaBvq17zefYeW2hGJfEYmm8DzvY5E5",
  "key18": "2MUxKRurt5Yd8eKA75997dCN44DVDxEsStmAgJN69aRANShiPV4wpXjWj9iZ4JbdeAxmYVC7dHC88pEy1AV3yre7",
  "key19": "29ydoQYoJDUkGDjAm2WYvD7NDYbvELHJ3Z9o8mLiCLhHN9Xb8Bq4tDbBDAjgPS93aLtSdV23hmv9REFsa1bhfUEj",
  "key20": "64UxYG668H7KMrXZCQXgPsh3nqVKdWtRCBUdCmVRaYYCuzx6MBFvrUrEdjYk7YCGhyqnRd3yktot373sHTpQyfLg",
  "key21": "4XErjjXXJ1oHfKEavjCkSvh9cBNU6V8aaXzHvNZ7uyLiLYvgArNJ5vx7ue4DTp11ZW21KmN9hgBePSLWiEs5K7Bu",
  "key22": "5FsezyQk1NfZD22AziTbjtprFfL3qFF8wDn62sHYhHjzsoQZgWHQ1KSep3tTpLMUfySztqd9A9y6qSPmdsEkWthm",
  "key23": "5mViwtcKEnFQuM7KfCCKd1gHBPFmvr8Wz3nrA2w73HCKv3Hnj5KkmHiPVdhn3cbKaEHUcNJeZXAZAJVTtgCgtLGu",
  "key24": "51FLUzr5Noyux8xRwApav7q5tkPYcVWJuh95qZXJDCKtLSqLELujCUEzbMNfKiUjX84s639L822iPpNib597nHzh",
  "key25": "2VfoG5ShVTpopyPW5xeKJgTPLP8751qG4A4aLrp8xHiTyF6tbErbB7w4qxHPMPvSuUaUWKcWJt2bkoC4AdWERBAE",
  "key26": "4bf1oC7JW7UBwAipRzF7t1guTZgiwcYhoJsC6CQTwRyWBm8jE7S2drfoqqrFtT7fKw5PBN6fjGXvXSspcTrAv9Ej",
  "key27": "2JEgNDEpq5m4aP4pTbs3385aN2eWY7hduNpXgx6dsPTbXfXekQXvsa1vzKaNRtaQYY63VDM5hwPU8CwRgYPBQG4E",
  "key28": "5YPJzrZ3YPJ4eokKc6LCZy8gRTZcALzV4qPq59SV8bHEhZqRjX7RydGrncRFaea5269R48kvqeX57JKLJvG5greg",
  "key29": "2UXesrPqoMAKgz9zCxfWj34DrJvmtaaU7EwcDU9GcxTkFygrZboPj6HuohitpcxiAPxfFnzZUdzXmVtodt6Kq3PQ",
  "key30": "5W276HMMqW65KCn132odCkypPSnUhsawEGBi1FipCf4hfwRjiyLQDFFLL3jBKxM1eeNA9RASKUhNGL3MuMPvyNJs",
  "key31": "4zuS1vjDBa8iM8SVv5Z6nFje9BQpFMCtMjjBCC6ESH9dCcBRRR8p4hMt5mntDzZ6scdRtLQZUwLrTV84X2hpoaUD",
  "key32": "5ciFBPDNnt15DjPE2Ax5Yixmgp4mm6qqA9J18W6yyntqPvDWZ4hyrEbqx6diWD1QHN3t4JdGd4BMZVNkyWjTp1fR",
  "key33": "41dQbvmX8oUKxfxCk1KVZFxkJh5NBy38WeYaYNtuQ6PtMXNEiTyo3EdZUPLmtSiTMCfvp7fHbjiGNL62bB1GBYww",
  "key34": "5MDKTZ7XptXepbWjErC9RSYd1YZvJsR1fW3hXHMkk6otj69LwCo3MpKT4LZn3NUX9oRB2VkCUPQ7kJxvMzgjBmNH",
  "key35": "SP4DUaHbdj5DfpkxutMrFqogbqiKMirScaYycaw7F8adMbg87MLtWvmvUHNfscFZiMq7Meftq3HTZE48SaSCDYZ",
  "key36": "a8VeyhGyPVPAEfSDgH89d8RDSjC8WogvgYsebvfqWNXahZNGFCQV6kpuW4md2iUemRoJ976AuqKdHC4ZXpAJZhr",
  "key37": "2uE27EjNYuovaakXto9UW3JwdJK8PQiP9tvwcraWtyhQtqr7X66umvKgKFPiQWeX198W88kAmBwZFdjp8mL79R7A",
  "key38": "2kz6iLsAR3mfSeRYfMUCqDC4oDwrEfNVHBoMoGNDkD5kssMmz8WMqzf1DJnRvrd2vMBVMuP5QGLX5JEHFUC485cg",
  "key39": "bEFKmWEtbQMKhMHGbyv3g7vvbRvSJjfU7NoAPpUENqRqYNfnUan55zeSyZY3b3MmDF5efCwrzLYH2JvYkiZAS6d",
  "key40": "5ugVRjCXTFonX2NZjqQ6amuF5o63jkJuaPyc3hc6nVQawf44ERGStj5TGSwqypanHg1GVVdZ2FS8wzc33oVZ5S6B",
  "key41": "2iUVLQD9XghJ147K2SWDvdxjL2pcjMFnfvtyutrauXJsh54cR1jnsVanMdDSpBGgdbZt4AJvnbEVg869Lx9JXbwk",
  "key42": "3hgKQ9ZgYcR2cF8onrCLEv2LPRELwsxVHK1x6dazeP3z3UqouTYk1asarq3EZXfU41bPoehGXKtZom9DB1vsrVtT",
  "key43": "2sA9ydLeGf2PLTRjC4in6FyotjunuKNB8YxCjFfkiqbc88osp9ZYBAnkFgaZWVALK1NQXFsRaEA6uvJ3F1YipEqr"
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
