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
    "2NeHoBUA7xRHezTbq9j68UKbaBSjfgp8NaHZKt9xiBFLpuzA3SFxX8erNcH4mFMssvrfPXWKLGSmNUAUaMWR3Msk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oPi2r33vgdykeEG1A2ArwTpxbTJAqwnMxaFNM79yzbH7DSYYzZeKXvk9M99tb3Xnf7niP7EGVoPk6Ng41not3xX",
  "key1": "2jFsYNizRZ95QwjkeDV581MgEoWp9JqywBVCELZiNA3M9sQXQ8z828C9DLKmxR3vbVuSGvqWt6222yc4uHet83b",
  "key2": "4FJ9zqysBsfccQfKwajQAhZXQCrtKCgzs5Be8SazuttkGdQjRRTLcTfp7toHnpRwWJnv9M1eopsWcWPaZREWmiaR",
  "key3": "3CpsmShoQgEUNRjpPfSPkwqnBzTwHp7pg3awSghMWruBHWJEtSmvNsjn9syCTPxdyxkH4jwCxM3E8khCxPPfLzD9",
  "key4": "34kMn9g6k3pmJkC5mGEaxeEGp4M1BuFWd5T6Gm9xzJ8tVZ2QnRvUnKZZ4SZYMdC9qKwqdEHfHrcE4QeUeg3muLXt",
  "key5": "5JZ4gR3S8oKpCQJVdqUTQUdWrjrQZUvhgJxUkfHgQuGdu8CXEpJ8LYaserUMeQadc1A2bD1SQ53HHLW4fjmXotCJ",
  "key6": "5KNh7FGtSHqU6iu1s3dcssxCWc1foA2a3jD3yZ8j2DEoMcQWG3uZse8dCGVAqrWDou32PGFXvy6eBE6TULxCw3xy",
  "key7": "2tGGmub53KWoPxfqauXYGzykg83UvYobhMTK6WZQJPKYJiWP2VvyGRgo9ngLsCZggpxgpiBKeeznZXUZUejBuTBD",
  "key8": "bU1CTDwcZSCsADP5NLzB9rGyMravZa6GabugzHv4GCgxEEsXrrFeK6HGxmFgZ6Gjh6Xek1NSe1j4wDSnsTJapDV",
  "key9": "4QP6UNg935yMLi8unuqLX81yXTLF74fQrD7WvjHPXJefSG85vLg74QQswWjcAMkLmFwFMo7x9KQZzjrGT6TvaGgi",
  "key10": "5du6MPvUtZCnHs376VbJPw1V1odfaQPZVAHLwBdk3TA6ZNEcdsouyLhoGCr5ZqPtaJ1WDDbpAUX5FkwLRWNNuBXn",
  "key11": "DRiBf4QVJx5aPL438q7EDNjCT6UVx34SrxPE3yrMa8MP5XbgavQfEz3CdSn84qspSQfb3N8MUc3u3CPdDV655YZ",
  "key12": "3GgBCjo3XRLLVXj4pPMTg5i2Y1M4MLEZxYDNbqxDJYiFJHCr7imE8MvcbivnbbrgfZmbF1RVdtrWe8HTcopeyJPS",
  "key13": "5LvdcoT7dm9oS2xTdFtRzwm3v223aEy1gSCknDnA8asviREUnULTsDAGyd9touhtiytDeDcWpSVzxTXUQHBLcWD5",
  "key14": "43no3YiqNyifbbifS8ekHX1yYQMXgYFNJmredL6k6zCpUpfNSiVHpidV7LoAdz6gfZ6DqozACjVjQU6oMhSkRtAU",
  "key15": "5ABDTZWAKG2Kc2pBr1cuFd6JAkQQ1LjZLQGh3sGfrmU5YVGXbT3aVoxhFtKX6STjDo7dmPc1duacuscgRjGh4CFt",
  "key16": "4qnu9Y5XEHfRM5q1BQEPmQVDwVBPn2YPwtUEp1VKC9ovZnLM3Gu6ZABGR99YeStHwhW2mQDiXAUg8BteVHw7cR2h",
  "key17": "Q1UGAqvyYrf88E1WPHv5qjXSUREekSE5atquTRDXV1GARHHJF8keP6Zx7QWupMkpmeFcskVhgzG2PuGUnALjPR2",
  "key18": "3rDUEmVEmRRCPd42nPALoGz7JEZEcTTDtxw1cV6m4UsKjnWNcQkrUmvqYFuUsbTKvLShu88t8boyQkk8nFPEZ8Qg",
  "key19": "31SuSB5rVDWTcwnCsFr1RXd6K2hnBgLRQmRb45XRB9z8ank1p3BSWE7TF7TUtvDUt543n5JsxE7jueq9MrdCN7Ds",
  "key20": "2cn9VuCAVfwzpAcwxzb4Ji1GqiQKZqXdJ7eiYWRxUSD1ZmZFkUQGBXjyxNBGVNUPzsCXDywxfHEZy2o4iaN7Kgai",
  "key21": "5iFD3DDAXEk2JYsy8vTp8tyHdWLrQptXohVsYqiB55XHZ8zxExSihManYZ8TkmMedcsrhBh5S6XhEqt5LAmdiQzw",
  "key22": "3MfMo3ktpxVXmV7huUt6EjzuSNwxrVeUuDNLnawucp7F7rpUzWSvPLzzqFePKY68eZASYnwCgPH8gy9Aw4bUaPDC",
  "key23": "3g4dmai6hdD1Tmgt9MgLVWjev6cW7a9YDdHDhmQCtyyFrKLeKEqRYsXgxhys3hPTLsCB99R9wZJ1XeMnPA7bcD7R",
  "key24": "23kH66HgK5WCjKLVTEoexh9ruMyzEMTe3omoQPk9Smab7rn9b5m7FJdUhzZnY1mAsuYU9cVv9TxXU9UszoUq5vw5",
  "key25": "4mwX9iPHvgkX71YzW9Ytq5mZGxuXbEPry9zXLuQCF3fbjESsrGKBV7BhSbbiBWbyVx5vWPBjZgnuNFN3WoVb6oXD",
  "key26": "6LYiUZzLY5jYENAPUQfzJjNw9xsot22dcc4TMQwUarp77zWaDa5rtnhxkq5TJJZLmpe7dxhsUHovorqPDf2AJFf",
  "key27": "3mqGu4hzL5N7hoV7Q49Prr4ToEYMsp2foHWvxPpRv1kpwjM71JUQEN1WKj42LFEX5PvKcviZps2ekVqWf4Bvt8Zv",
  "key28": "4FAVPgBUsJTmXVVQLkYAhAaGKc7uta7QxVKhDe1DCvFXtRPGP9p2vdiuakJ1K3p1rP4mwVXnzz4LDb24C4nNRdbL",
  "key29": "PYxqf7U5HiFTs8hcfWLgV6W3j1y7mRuTnM7G23qp9yBUNrywDD2EmMnfZXn2fnUD4xjWszpaLkpyC39gC7wqgjQ",
  "key30": "RU4qXMR6taRzfTsBkcxJ4Z7cs4pLLYLqiJTbdnrSQjsMJSVPHHXvVWUXiXEdMZMfMHuqt63SSubYpGeGyd3WEZM",
  "key31": "398QjUUqGw24LzmGx3V5TrX1DppDZftQkmGJtGGSTPwnTJZXDVDPVxaVSrdGuunwWiymptJG4G38GyosfyLPqcit",
  "key32": "52XAEuuVa5NiJMgkbrEBSmzmhe3wArx45U6ssYRBJUBXnQA6R26qT9zWKqXcLSeQEuC23FRb46STQe9TzhAqcYCL",
  "key33": "2zvnp8ZV3hStC3itoCnXZPfvKmb54Uji4ciQV99KT3TPbYbrKyMkhrPCgRBB6V6rTxmJsFmXGF14x9mLQL4dHhhy",
  "key34": "2tnXjqzTLLU7QUTL4iGuuMuZG5zPGXi5VC7KfnZh7LaFSWUrm1dpnVGkbCKyNaT6o9iPEmn6YqouKA6iEYDgP4BV",
  "key35": "Ry5dSyq8LiRAccBPzRnd5VF517evg3dQR9JD7u2shEaYxN1PzKkwoP53KvVfRpWwsrzy7Xkjj2n6bUrikEzRSkX",
  "key36": "3xDv52fgCe39PwRa14dyXHiQjw4nSAp4DkPkTCY92hRSuzRqEg6QkpyfLeVto4nRf94juXfQ461X2CRHi7foAqSP",
  "key37": "Vow1nDzj11pnZpkfkVwunXAYskQxNex1Fmq5X3BqKXSFpGtseNoXBUbB1pXrun7WgyUhh5nH39CDutEytUtcaGc",
  "key38": "19FKSgd55gpup2neBiYTE2zRvxRPoGvAF43qJEFbrkrKNqhgHhiBJjjLQR59r5MpmmpTzoKzQHj6HBg88ztGPyk",
  "key39": "35jddN3CXZkXUnvy7SKrk8fA3Aw2BkbNFrKU9rFxGqj6p3wAviuGSXxvgtgLjoxseeLS33enyAkokbqbBWwHpkvn",
  "key40": "34gZDSVhRXjCpZqAbV8yntxV7cAihaJ2J9qmVxEwaCZhG6bWgwrRdkRNtR4BTqaT6YDYJmwtZZr6fwR49oaENLnZ",
  "key41": "3mZ5uMmFbuP1XsmhRvgGXbhqy8wJ4eWPPDf6sAii6zZp9mhBfP74XB3VshGbQw4ft8ZB3zPUp6P8HenTsAedS6tH",
  "key42": "rBeLYzSzKmsH5QbM6x6Sba731Ck4h5XfPnDL7y6hH9Ro9v3MMJjHsVJDRYwMeaCFQAnoaKQ9c1boCsSZrJR3FcB",
  "key43": "2PN8W2HTjE3oTRmkupoedJk42Hbcg4aX2L3joC3R2EWGEHezua7DRu9xkDLARgFk7aRc31Qrk2qEga4W21RoJL6D",
  "key44": "4DJw2zFSe6N6MFgRQjuSdXbuiiS4dvGPJyEPLQBHwnVk1gEfpK31aqDfaMjptPBQjCHTa6oY2FgZKrK8x4747at9",
  "key45": "3sSVZsxvbJntW8cxwx4M78bfjYtLosdUZk97V8oN3HnE7Kd9uY6gXjwCixZxrjgmSocowciRfL13EPL5FbpBV7Rv",
  "key46": "3PFyiWKKwxatrYBFS13G8dgP1v99mj7VdVkCwbAWQD8WtKKGK5EbkXV5yaoWxU3EACGKXzhHyFc455uxiJxsScRU",
  "key47": "5GvwKepRzfxRne6YjEu3e5bUvcK9ruAhEwQCQcVh5rMsznNa3eug7ziQP2FuRxhA4v2hCd4JvVKtMmL2h1SaN9CA",
  "key48": "2EgSEtnUn9AEajVB6HHW4Vj8vMetbLpb3HdMDxzJzFiAHJRrw3bnz3hqW8TyxrJrQaaVmzmDsqfvPmSBWaVzrQiY"
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
