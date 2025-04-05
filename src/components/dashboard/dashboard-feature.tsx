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
    "2XUK9cRnk3JEvvCvEgjAYEbj4Fj2DshUUxRroFNx37uSc4WGaDZPTdDiUSoQDNwStoCKbGYiwj7SjKafLD3xo4W9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sVZ7r8x2gebxS5hBBBwt8dJKtCg3FMkKth8VykFFEUciJnneCSSvRwEt66ECmYugvgewLSZMGMVJqk7xCWyda7q",
  "key1": "dpn6J7Bo6h9YRRNWfJ3uhLVhBjVpuiYkHbmaePWFmATXC4qJTcyUicBMgKGnppqcyAAXxmAF7vDW7kDhp8LXq8d",
  "key2": "3XSwaziTXB8MBs4eiHxtrJxY7fCQRP7uiNYegommT9uXyeP7snWcvPfyLc6atPjZ7hQnj22PKUQ7JSnwLdZM9qL4",
  "key3": "4Eao1vJPSLPEFx1e6soZ1HkBiBCzDWVw52QggxZijFnXgjHKiNNZGE2JBWYDdyTDUuq8r8yuQ1jcwWADNXtTndxM",
  "key4": "129DMwHVuLDM1bcMXL839rWMo31deaxHWoF24Pqc5TSdvegasKUbuPJxwh8nzkXghpLykPKvaTLXeuQ4pKLVPbjf",
  "key5": "5xzZWkfb3gvfzEpEXMQNTgq52HNqQanKnX9hmW8Kwxmpwnmwjxwxt8V1Mx2JcWBM7m2sgJrJ9BDXH7HAaU2EXJ96",
  "key6": "4MbrvDy5jDFi3ff7LBHP2SPsFssQiZ3kKEGZ5ePhrDMvpJWHrLojVYBkZfxDfq2PBqTFw1ExrEUYqBQ424f4z4oQ",
  "key7": "LS1BJXrjV37Pm4iGMxDMNiDRakYhD7345vHJpypWseMccE5CLfNevAzq9TvbGvcJbNwNGZ5VUfECoQyH3Hb4yK4",
  "key8": "5kYt4WL5KbhkJHYtDUzSA6Uwu9fLWZezmujNxr19iLpoa5qint8jriQTEFeicwBGoKEtB5qyoGXdRJuMgh5WGyQF",
  "key9": "2ur1aPyREuPQwPG5cqhxVyEUPViENCNZkpVCMgeVwbXVTg4Cbe1ju5jemo3CUYqzqqYydvmgNcR3hGaEQzdPEnk5",
  "key10": "4YJxw7Aszk8VxvFfZq6F2iB7So8BhZWD5xPy5YQ4i2hrCk6WWsaHsfPBwoatsHcohqQJYBMtRJgvMFggsEroqNFC",
  "key11": "4ik83XqC4stH78GFnjpSWmDAoj5u8BaERVQiK9D4LMziHsfVmZ8trRYerTXhCmNghARJTSgL5SW1Xw27MBicEch1",
  "key12": "66DgnNXZaSRSfZkPdcmwEjkx8mqs5xFfBid1pbsNMb8MvDMgg9fdD6gfZkr34RWPDBX2p256Ehw9pRyYyZkkxktd",
  "key13": "2WBv3b7JdTVpcgxv9ZgET6nwy1zdUpRzA9rjSYUixpLf5ftrSyqzevjzQ22AkAFcaRV3GfUP8gzyDP4k6Ao4Rk3k",
  "key14": "5nd14p9AmYS7bA7Uso4tcg6FzyEHrMjpTC7pKP2ReU68tgpxxrqCeNMu9KysEGSoxf6hTtZ7qWbaHgD3Woc9AaUG",
  "key15": "4q82NhPnSeb2uXpm7aohSB7rHgtmZQZ28wtoEcBhELAJvw13b6j7GUGREtEiHBSjWaGnLzzJSXw4sUd98tW3hv1x",
  "key16": "53fhvLaTCC9m6E712poh1Pqcmcx1jbqDfuvfB5SWYLxF1LXBG5U7YBeFNBXMS5xm16tUpyufDH4goHQ1sQWVSxx",
  "key17": "37FA3HsNhEg6gWbigaR911B1phFzJHc5L2ZNyWpMHGyScsuFqLjhPDoCq9DUhkGKKMi3CFohxyb3SZnrs2mf1Voz",
  "key18": "4vd9MrLnUtW8FKTTaDjpiGAa56LBBhQ6ubKk1nqxVkXncmYHn8TVLNS8R3KSYEyH6DCEXQuVbow6J3VPHJnZ19fv",
  "key19": "35GgBVJ9pCA19Fuur6vdcNZQ4p91d14fxwwTHbT6MhudCsYJow9ZDtopjsnWxAfzKAC8vM5TGwDfc1xDEr8VjZnE",
  "key20": "5sAY3hcjsnv1R31E4RRa22LV4xndp5nK46xrqTqWeLnPE4tcv7ZjF4BMY2638eERK4RQbB7fYHE1zhuQHedDAt2y",
  "key21": "hgqHip2Zote3A78jCADBMiyNVPhmRgocsTWnNwzXayBxc6nKuyiadQMaeaaTbR62JuNDGRuq3fjE5TMNv9KQqoX",
  "key22": "56Ho8kG2fWd4aLuA5SR37W1qm4bkR3MfQ3L5wNr6YDasEN3azhxzwf5Q2MEiUGdKEdTH9ckBnsnoovaNsVHjDtWB",
  "key23": "4Sj6P1PESK8n8WsNh9x8xrt7RgvNudU6kVE4wEjgbWgirjr9Kx36Vhec2QS4e5MtfhbHwBqWyym5Vxve7eDGC1UZ",
  "key24": "5P1z8DenR1i1hncfKwwffe2FPPRiWz11vWg3q6N5LLjkkMFaFn576b6dywApJGD5pj6NDqk859zpAtqoE32aG12C",
  "key25": "3Gi8xUVUB6bZyfMLbtLn4zVmHFc3Qfh5cfzjYgBNt7Q6rmu1zgAr3odEwoZSre9K2sYUxQvoq7P4uHU5H2x8qeDw",
  "key26": "3qBg6V6jHgncf3yd5CaDYYrpssUA9CAqmuoUbq5xFndDjuSn9LGqUhaN7SJkjYTPnpS3eHp4v1JSQLua7BbGf7Mi",
  "key27": "5EjyQjpbWiUvR1SzUQHCAjpXJcpheqUthtrDsq9KsnGQgpJAV74kK8GAHDRz2APw9JrauhsJyiDbELE6yANbNFqp",
  "key28": "5z3MJqaDW6pEerUzNA8YAETu6TPNfC2DjgWUNLUxoZxrWSF5vND5mDU97FdKUVJreNJdQrtGScASDhrcMFTNtCmj",
  "key29": "4yhuZd76MAF7vxMPJqDedAjgxRdUj2g3s13qmJsHLkbDXydFCkczh1rFPUBkJ1afrGQ273CHqPbjYC34oLnLFDwo",
  "key30": "5uPd66Pa9rSCbp2fLmh6ENmiVCgzfNvvQUykzqHETpDj4DbRwQK5Q373wWq8drzmX6ZQMxVkrv7FMxdsaACcDuf9",
  "key31": "4pxk5bKxjZtJG4LMRnwAdQPpe4pNW2wnWBWsVzdJLqCGnANjyH4VgDCeG9Gyr2yVZvKZjPpDPsfbfpQte6Fx1JRh",
  "key32": "nfYvRs8m9aAGmC7j7tTSLNwHtiqKPbgVGmVtbNMobqwHak7J8QuBofi29AM3fWGvVVUtic7H3SxqB9URFNCNnKa",
  "key33": "41tDSFk7yh6dJuYYdXNcLszAiYQnE2AKpGx8bwCn9Kg7i1Ev8QRr7VS81Ehtn4xcrPhUAwFy4J1BU3D3A1qbTTRu",
  "key34": "2wsL8CkRgGbsZ36HTThKZV4Zboeamh1bhj9znQWoo5C9ggNSWz5QQTUQKtWmg7M6ppn1B8cq7HphYqgk5sG96hbD",
  "key35": "3y2n1PpU95YehbHinkCVhkHVCWYcQHmVw4fo85BwiKSRvD6wt8pyASe1kss25ftbELWWu2bxp2v2gLt9CsPFPD6V",
  "key36": "5GEpdss7HHLVDdiBAfPVRLPfEMEsZ5rCHUZPRbGjC8rsD8owWxF6KAeHiEi5LCeN2ANbsHt5t2sHfZxX4k28GEEa",
  "key37": "5EGD4NYQpvSvN2e7pvBaXnzYhgZW9xBDUTfH6cdtUQGdakY7kg89Hocx54qX1A52j1EDxbNuckdVTgXFkRxv1BQV",
  "key38": "5NnKYXMvtPsA3ca8ifrG5BbE3eRyEgUkm5HJdYd7g9wNVu9e8c9NMQkc26wK6oQMEsQLJ9YnBnHrqihVacw6FbSf"
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
