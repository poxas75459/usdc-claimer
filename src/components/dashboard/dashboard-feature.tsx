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
    "3VKHpDEmLswBf18fUY4A3qzNYE2FvNJEgp2HYNLZr6tDsRVdom258vKjfAM29UxFJETky1tPxVwJ9U51Ukek7Shh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q77Rce6xJKyg2t1Zj5T3M8mU29CKxBE2igVgTcazAnQXTqy5cTt2hCYQzW37dCPXoDGiUJj11tGowtDPeTu8dk9",
  "key1": "4dhCxBj2ufhuMg67tsAT1VLYn4aaKoeHi9tZYuLqNRduqMhMgNhTNGworFiiy6cerTsCY2T2evdj6euFMcWdGt1g",
  "key2": "25Xt1XWiwoBfQQ3Lx7r6zLHnDV86w8Szk2PVYHY7iRGBnDSPUgcTKfjcbhbkH8BzC8sW3HhcFfNRKarBTgej4fZV",
  "key3": "4pTFTXw8kZBn4kUDBFavFBBXtDYHBK37ZnDvJcnHxjWHPpVKk4vm3F9TbjSnozY5Wa4df84z7tz2zJZk5tGRT9Nj",
  "key4": "A6Yn1mCva34g7hZVrqqtteaVaEx8dYqZnL53Fw4frViRbvAcfTBt46xf7BcasVk8D5t1hbnkAXjCgQJo92aep4y",
  "key5": "3KpPsxgkHtCG8f4Q1wiaPQXZwSjP1Gx9Lmr3nuUJZxats8rVbN16Ay1XXgSS9fEBAGyzvuM4GyxYi1MPkHPYG3QP",
  "key6": "DHAAkxngbJJaK7VoDptFfDS3JRjeYaQ2EGzgUyMM77koCrT8vhe9suQ7PTFsrnjRkDp5BWqCK4WYPC7UBCroJSc",
  "key7": "VcgY414RyxfvdNZJ9NpzVnSk7FJSEqR5L4482iLwXroTtssCr3ZeXftMiS9zn6LSzYdE8KbXTGfY76y1DQ4o1oB",
  "key8": "3qxF9aCeSL3oi6wntGqbSZhRYK8rqvJ2Vf7J2WUpda8QgZ2veMf5BEWa1VMgtgs7KoFwBLX1XFZ3aKNSS6e3PdBr",
  "key9": "5ShdmkPJuLzA5bCUSuutsBB1Dt38zYE9Fhgz2UVrXEDED7chzpxUKzWMqXFNCPyuvA7nMFKnYt7LBgBVqNEi7GRr",
  "key10": "5PBRkp7GjH7UfoJNhW6RkZoWBfoWb2R2wdpiTqChRPpKMMivHdMCpAs5jw6mWQUM9tmHP8NCcEU46bid7xLM3Lxz",
  "key11": "5nDaZjhbs39vjFpVdnQ1JeXu7z89VqPU8mUsfmgXseX2hHyX1CEru7YNvi1KRXzLthzpR37b3CC9kmgk8ohdkjhp",
  "key12": "3UYz2QGCJYCJ5pDt3T216xdKnzKFUY74G46PzoUjiv4G8P9rA574cS7w3ti9ZzPno9Huw2EYS8Ng2Bp8xvbdKA4y",
  "key13": "cZWU8LYeBKZT742gnmTQyNT3i7p7hpsLKzRnMgjux4C8hMoFWByvs8wyRCmUuw9gpUr6okqBhXizcS6oPNXHJVK",
  "key14": "2APHFuPsmu5FoVDSRDvyyhjo9tuyeXjQ91NK4Fi5xnqXNcdfArHKzmST7NhdkbKLf5QmKX3e3XGgNK3QzxQo5bdg",
  "key15": "2EpN5Bf7QzfH7k1AoykiwvaSr9nK8koEg5sjKKbUKSsRk3qPvf1Gy8uNgmYd7QBaVLS39DTpwiyfHWFzNq3Yo2yu",
  "key16": "2StRyiso3PE7wr2rM4GkcxiUB25b7TodAuYAcduVddhpgNLxbqceE8uixG2N4fKf5qLxofueqiTsVG1Ti2nv8heB",
  "key17": "39Sf8vtgNT4Tt2xi45MDc3iVsN8sctmmWnDdjiKsYBCScNXZxHowLbaT6T76koFHrwBaVkNGiT4upNUy4zKPp4MJ",
  "key18": "3BFZqwcDuU4duMjv69sb7muVJdp7GnpDcR7ARR66TmhZx5qVmZDbTr8yTbfYE4Ymg4Bg5t7niWdbvVi4C5MKf7qB",
  "key19": "tn676bHoZQiHnuo1mYwVKRENrhapTC6GgvtydkFTHfGvNvSM4npRCzP7YUvUKmNeZWFZipjQRPHf5JBM2sbVJuz",
  "key20": "57QSW8Jzgh9e3CVeoKb2Us41VM4FoNpgToxUE6paBPN6j9TSEGCsR9SU5R8ZjAEAuFjSSwymMhKC3p4xfLBseYG4",
  "key21": "4pDTxwbrEnSRgQtk24ynmH4zK9GnZcTzMa6EhJJ8Shaq6EBDH6hV9WxLLmYSKmpgEcspKgWwi8XANmVZyYqGcdPt",
  "key22": "5fGLbnDVUiTAS2Uv5RouDAt72UqMEvp53zPAg2w5dyn52vuLBw9cVA2FJi2CkpLKwHH3P36uhFZm8k2shQ5BDUQK",
  "key23": "4TJj7MPqdYwgTdXNHSxj5UdaiaScM84onXutg1z8ARmqa8FQNTnukaX3t5iYz1gPcG8tGCz1k3K5PyzVzhm7t6MC",
  "key24": "36d4AUrQ5ZuqW4ndW3r3VBKSBT4iaaFowXq5CYwtpATsPdBniD8jW1nHtDVkZhs9ChqKyKs9RufZzwBDaT7EHCiW",
  "key25": "33f1cjUoTQ2XedGvkM5sUjT3x3uF8NLBZiMpYDeU9ibpyn4qwqS8dbLpVS8LyXzDaMrF5UXaFkYBsBBMXFtvnw81",
  "key26": "5MbxyVgsvgRdAJnUN7TMw6JmCViNPfynr1DkHLmbRTRSpizYZF3YFD9LhVwpMewzf1Ft5fn9y59CqVATjt38SSyF",
  "key27": "37uV4y1JBbjzEgZiajd3TzV9pNrNhGR2GmkCUq9a95vZ5JpNT5sioBf2zuu2ortM2nTUuNuUwCuL9qjjHdgcbsD6",
  "key28": "5K73gfB9FrU8Mfq5fXvn2MZs6RiB3s4hPt39XCq8rVcmMAb6Yt24RApZ2DkUkD6u2SNDzCEDhzkQwGYZQZMVVgBp",
  "key29": "3rQan6K9FLxWkQuGzoD4Svm96FXtJ5jjao81YumdR8SG1QiE4WxwYffnThCMDNcy7N85L3byDh5C3bsuDCJxmzAo",
  "key30": "41LffCNWhcHUzvMNXuWUFYhuWZ1R2xrphAXrxq15pirvbSdAWzfiVTWoGfWEHxFDBWLm3CDfPE8mYuExfArYK7ZM",
  "key31": "2DughJGK47jvDtWvpcci7dm44tcCt2Ve94RQQpsKGCH9TSgxh96jopiukFSH7Bn8jnsg1cRFe6EY1KzRRYpca1Z7",
  "key32": "37JhitHqjiLPiKNNsbd6rsAiy7tWSW8uH7eUA1NqYvQBHDPe5Ldxon6MYusZKiniNRzw13qHm1LtHZAkm73Uf1dK",
  "key33": "jcSJdWueQULQ9DWGj5FSTX2gwscKixzJRcbtUkSpiRUS4RohCichX4TMAGrRSfKb1JXhRhFznyp1VHNtUhFyauz",
  "key34": "Tur5hbWtQvzy2LeUbP1JbaLcX9mM2JA6nEfqSsNMAJdiv2gSayrkUnE7nRwMqiYBTxBLrUnD7F8ZieMw7pojU1i",
  "key35": "2nLq5cE8PchJqspsJx5nCskpA26pRCaTPKSkQojdP9iWxdCRDWTDJg8hA8QH8CMEXLMjkPzsvVZZFthXeR71teNM",
  "key36": "3tw13npQPj63t19Eid6hqYN6sE7XFa3YMZs3e1bqmW1NhG95iqBAjpshZi3Uh6FR2F2gQ8GFzgNAxnTz58zktwzx",
  "key37": "2uiGg3eH57BeTapc6yRdkLK28n2TXzuip4CdUmq4tkXiannCf51s3ah7j4azKnjMmLMPPyJzVe8p6DCcCzuyJ284",
  "key38": "2DCm42b6T3ATYKRYAaV42ybcKjUFptzWCSH4aMh3Bfvw5mD5d5A36L1z6H9ctTAqrRkC3F8Y7C2AYWniSc4x4QLN",
  "key39": "6Vhn2BFaYNoV4zUAwWDMmQCNc7oLSdBsiPjtLbPkgFA3zS5aq1eLB7tnjfhTJGNtWTEtLYLSTWYXgWii3eV4wos"
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
