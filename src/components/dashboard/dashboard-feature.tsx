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
    "2XsqVhLr4aZvfkEkbxdy7NoTFqer6TJVGDDdrGHBCxxEkMHVD3hmbMzar1tYfYv1Dc88ikYwks2htoL8gqwXjcr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29GiqZRsJAJwrGRHix4WNELc8vNFZS7b5xyTMCF25Deavq9Az4WUkhmzgH9sXezLfYvPd9VrpvSNEuAx4RBF7bYj",
  "key1": "Xkvv38cZmVGEP5whoNjWr7i1sAVcU2WbVKyV4q8h6ZwmRbC8zFkFkcg31R7JpaRwh25piFRGzGbaHJxsUi5kp77",
  "key2": "4HQvwdiXdeQWA6oSS1TEYSgHBPyVUhYixwXXRGK8jfocygB3uacXNqfYm6o9GPXhyj4zEGJ9LzVsXGXAqk216JZ3",
  "key3": "5MxgFNn3o5WycBUzeLrNBtS4syjHuQob7fH8t9u2RJGvE3RMJys8qYDqBCLybt2G3QDrQp7z6oVzfSj73KmN7Lcp",
  "key4": "rvH4BHKdM1aoK6zjhYsAGD9TGSe6RbWQvQvvCUPNEKnnFiPx6k1G6GwkQqUDHxUUQjxoKT1UAZENfw73VQtEAUb",
  "key5": "4shureA5Soc5bFmYDUPGxM3BpKojsT2SSaiZ75iUoimHro1tmehxcKNLxnwgt8zfTJgrjfu88xbxRD9SU2o1Fy7X",
  "key6": "4XbExSpvmaXrQaZnAaTazbiUzxz6j1SiVFxV48PTVxCSJF6tyUTLNwKMUUuXQ6MsibCPcTU6J1TPmYQqAuz2r8zf",
  "key7": "4L6Nm9w9x15Uyf15hvCTM7ovDC912EZQcLd3qf2wqT2zTPktfMmZB4iS9bcEd1MXmFUUdFzgd4YNRu49JRafMaSR",
  "key8": "5G8LvZm7AUc7aZLoiM7tGFX6n8QuAD6b29mdUSVLbG5wRYqdnsJeHXWjSoUt1rqfoeULjFqTnK54nrrxcp2n7avr",
  "key9": "oCbqqUMM1SV3556Ro6SvJcve2XCwYhEf6MdDnZh7redKQvZVjvsbPxwHdgJuVApgC1hBZPbWLURQ3M1sS4spQwm",
  "key10": "227K8NdHf5mBtBWGYnRTecN2a1MvXkHJJYsSUHf9sv7UbqoQK9zmoLFFdeX32fay5Qxwx6DStdd9483kXn1LU2jp",
  "key11": "24dNBTCchZBmyKpx6FZvKmyhpT81zkDsgusCBswET7YLKmCzfwR4QG1wtfm4tXoG1WFknobLWxjJ6fjH2ET6PjK4",
  "key12": "5DGA4JcxTVM2Kmxe72KJqKgFu5792BLRfxhp3Fh9u5MnhRawbJMRd6S9cK4UouFnWh6c2VULGZoSkQsBHctACTSQ",
  "key13": "4f32QhDRRe8NpnQdhV5HCz42YYLuWm2qQ7F5KsnA9irLaRYfiXTJVeQR1G6Lm6s8J44vHqC2C3k5xm1KoA6ZqNVr",
  "key14": "4Ytms3qdH1g6BiNqiDHSiHvHmFTPzs6mCDZHcTuaX536hqAfaSqvjT9xgnz76zDyGPfB7N9D8Ydi4LSGN2Ut6ZoP",
  "key15": "4kfeaHSry6TWqUoyu1zjJVBEuyd9NPK2igUvTXYFYsSybAUooTSxrDugm7YWYMz4fGLxvK1UAgNSqYC9niX76529",
  "key16": "3DhBHLRNmUtDwXgDG3Tncs2BN4eSznqFeFXhY2ebnK3pRNwUpZ3PjRjuV5KwBP4cVuz53rfG7V3VGgdsLoPBEASn",
  "key17": "3RvUM86XboMFVu8EgijKHAwAFGMcH34zNaDFgwt7gLU6EvYKyiiVavvzaKCaWn9BsMiBBbrVnFYSrC1coLyXe3G2",
  "key18": "58q7nN3RfMTkHQKhQmvkNodcLj3VJFxWD4pegL7FkiuPWHxGubE3Hz9w2etgUASLHgt6ADbupAkKxLVxxQwcVdUX",
  "key19": "313F3Yw2HPZKzaj5aHBCBLkZUZF9Y5cAKS2wWsRcwpGFFGNMr9Ly4qF3GgWX5Tm4fZHLG2XEHj5MrfqtZNPQHu6i",
  "key20": "43kb7S447b8VVnoC16CycqLQEDqmMqLfGceyfMSMX9WmAeHju9jTC75uK6nN8kSRck7veuEHatx4722RPR7h5zZe",
  "key21": "PmAKirUo4gHBja6aVwqvUyQFBJBkn967PdWgky4B9SkUtUA7yurtxaA14CDhyahS67f5hX8BYRkAghkJ1KH6SoN",
  "key22": "5Y2reSxA3TtkyhS49N5MDDh8h6FNQ8Gj5u36pGun81K7U9fCSaDa6J6yY3ZttWycgNUBgCd7XpfriknfgzgKdReP",
  "key23": "5pHMK1Y66u79ccterXx2p1DsyaxrrpcsZwPDBUKpQdoSf8TVNhAE74aekWhFDVZxF9VALDdKmKzAuujUPpZJDEp7",
  "key24": "nwoUYWsjes1ktbMqSVJhNxk81A8kGqix8odwkHqPJmoRDStGKwgmTejZRocGHsb9zXuEuRHzSZA2q1ojAzFEtnV",
  "key25": "UYFiGkCzDRR36LwGinQiQfsLoAEMMzXDzFfsQB9YUjoAEZUNWLRxVmeVeggtrY2T6TrTkM8K9f24EcvNnW64efK",
  "key26": "5ERv1q19w2nBM86K9A5xpefmHgZrymZfoyCiT4eMaATzqBLMGjLVPCqRGRXsNxJRwC4gsRJKT2bYDz9jBLvWx7Xv",
  "key27": "2tWWCPRoqbH8iqeQvTm5ay8xinc2PB74XCyvYwm7BxhDRKXbHiHwiy7idJawsb65ePJMWFQX7yMvYgGYphUSpsEg",
  "key28": "jc4ugm2fK9uuYbmJ73Pw7XiQrWbgMahsFtpXRTBqYLBfCzEJ9pgWMJPrcGRrLWJ3v4KssW589UDDzrsUFoRRP5R",
  "key29": "42UHW8eGQnCiNjQKBUA2ZKa1vAircCJPCnF3ar4v2CcrDxdfJxkabJmod7krAM5JABSw9vThYpU6v1WaN8xwGErW",
  "key30": "2nucfgjbrmmTDBz6VKTLxLY3NuFWi4pGa9FqpKKm1jLSnFe9gZaS97vrwvZVh6u9QgQVWq8ccixM4qGVyWtuMPZS",
  "key31": "2zrFDg7W7cRiU988KQ9HVAusLWPMuEZqfL8g2XKzN9fFbYqb5744tuBe6Cy3UZsfm6wC5R2wPFPczyHMFT6HVwxb",
  "key32": "3gPgeVt71CarkzCKTiASmm711jxFxvEjZn2yqyLc65CWoRuPELTT9BTrHXNS163WMKED1thrvZj3vmCrsueMYKzW",
  "key33": "2hpj1HJKhYLLbjGg5SLWmog9fMNDrZ994chTsJMDyYdeYCoroXDXommEGfnGPXgd1Por81hqn6fKxSeQK4oEtLNP",
  "key34": "52ZeUhKDtUZNYjmeryN6FzfkqEeWtKizntmDbf3ZRnmLc8DoPJvqGqz5AXDxGrbpc1nBFErfa9C6wDe9NSGCpKVg",
  "key35": "23WPQxnD8ujZxZNWUW65o6p4wBvZ6jcGvDxJba8cwgigxB2b9NeVETU2KFTkhTZ9NEMKTkXumhV6c8EDefeNQvix",
  "key36": "4SsMV9YYjePKg9fgtMMBSsNiESKhpY9Q3njnVs6yqTF6CWpda7ZtsMVvcscS3jM53cBE3w8HHTLcPqk7JWwAMRHz",
  "key37": "5GPBWcrDJFNW6S7mAyjSb4jb1ar8DyHmdnLt19AkQMZodhbmjZUfsct6NwD1R6XabVFRfPgDV3jv5h5DCYGzYwpW"
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
