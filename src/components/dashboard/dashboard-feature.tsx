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
    "3Z2yzQkwUptC6np4CSP9RfXH9G9t4AxrY8cJBR4RGn9ep5XFTQZsmzuVepiv1Z4C8e7dW6o5BS3mJU732VPT24Q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cSi6fD5szUtnFkRqWYt2xnbD6Yhj2UoVZpwvA9t6vhYEJEqekUbChe7Zg8zxjB5TtFiEhEFdkieHX5gSFGyKMdM",
  "key1": "2FCBLzAkhd1iNnXvCBiGRxvhNuiEYusuW4b9WsHB267eS1z8tLxtULiGfzCcZgX7bLfURrAxoq5XxSTdbbTfQcjz",
  "key2": "3BvZBnN7CiRVPtruzLRHTx6E8wvgEtGqfTPbzmAhq8qgA8GB1ZNfFk7fMrs9ijFm89tkfcNFMddQ1F32SBkmLXXe",
  "key3": "3Di4VVQtBkZHwk6mDRbpiyCinocaLDor67Ud8hYGEuATgryGjz8vaJL9vx4XUgu5CiBTbcR7rD6pw5fWDt424CTc",
  "key4": "3ouU8GcBarx4B9p6qxNz8bRAipLD5dNxA8qPxnE4Xdt7Zdm99KwV58ddkdEPxzZh8MHJN1KTDZQkk4gX35bnvpBj",
  "key5": "2G5y7BGJdMW6SffG87nwxU1ACXVjev2GTLtUwrFXEAsrJgsvVGQvCSKQjdXSKZFC6Hdy5EgsrfFqMWSTQ7m14o79",
  "key6": "5BgSKv71yfcwcJRH6W72B3tpd35zJwfRwgaCBrwtSFJtX4ofsbUpcVmBxxtrUBBnJXHSfcUX5AfgyVFkiSvCN9RT",
  "key7": "yXjP7qpoXcPZ2suxgo6x5qXoaC9cHucgGbQK5vFKufLUzzNBozQGMDuu16GHBfRESuiLSfMtTGAVfF85TKCArbv",
  "key8": "2easd3AyynHefBdAhftG9XfEe8dPFWg48Qh6pSNeeVEiaihD7WXxvxBtmEXwM9A3hXfzM7C7STsmrKY7kReN4SJb",
  "key9": "56RcuyNoexszz9CcYu4tVKENULoW4VbkgQgLvzjwD7grGx2XGPASne3sAtiL9FGRkZQfVjKi6Uof7GTt2UvdkwvF",
  "key10": "VxcdNrWz614iRMJxVHcpL9oQxJzQhDAAq1fwzVN3PPnrMoFgAT2NnZLHyEWngnhn6um6PwyuejyBmmQrALVvd3P",
  "key11": "SUEBsNW9bAVGCoJ1wW7Ji35VzndyvteVogU7VgiBFGf6wGQDYgDiWAHq2AdiVwKMzTUvV26Mj4puiiyaeWbsaB9",
  "key12": "nJm6YG8yj8jRX4mZGngsAQ84dhC4KS6khKcfumLnZekTvxGwuHKsxArXQj2xs9XrW3Xyff4XoBC81tJxW7bXgvw",
  "key13": "eCaZzk34YfKArpMRVNVgroYq8wnoPqQzBqBGsKtHy3hVeD2Umma5r65zJkiXmq6VSoVU5H67A7LR3TR73HP2czB",
  "key14": "48VnWeHfu3GxHHv8pQneteHvagzEDZjKsYpyfVStNadeWfw1Bu5btbHyiCRj2ZaVGqfrA5wbzxWoGtpYV1Q1Be6k",
  "key15": "2kRqqNy7Rxdr7xp7T3Rk3nc1zvR5FnsG4YyASH2k71xHttu8i3giuptSkcwvjinmafUSLtwheSFoXGcfYZtMV2mz",
  "key16": "hBNefnGS6WovcEcKxNtDXMPJdZsz7oEqqA3xhRNcDVTezCr6VZa74xBwedbDjcsZPFvNvZ89xtaeAJix6cTkQrg",
  "key17": "R5uWtLHXRp3F8fgnUg2rBYvVUqaa7v8b2CUSKj5E4B2Hq8sgmMuCX2jVDrzoMwbiquDxzXzvu4KCgibfmQw3nxu",
  "key18": "2eob5JVkhVqbH8RamcGw75C9tztuxVKpum2m1Dm4wzesSPgoTWj86sjM1eohEtt6zigwJGY7ZJFMhZQtxUgFYHFN",
  "key19": "4JKy6CQJWNcL3UvtG9Up2fxBibxR8rdZjtNwLu6oR7k6nrrSacrQs2QBgMdfgyiBNhvnUQSxHjD1bJ8jDXKNnyrz",
  "key20": "29w91WFnntQzj3J8ntQVugTMQnjZYqEVCzncrGM4ys344MoQgu7sxPHj6Z7zsfHyWJjckMyLkmBX1wEnToTHM89y",
  "key21": "5zdguucPk5erGmX8ayHZVdQ5vmapkTRjpCKenLzCw6q91RtSbyVxaK4kMUyM4u74BrqDM7TwiTpANSQA3s6iytjr",
  "key22": "2NMVqSYEhXit8EQ51Vx1WGLmdCkE5sNewiSDVLmN1YynEHL8mx9HGUP9xQvoTuaLWXGdemxEPp3BsZhRkSo7hkK5",
  "key23": "27VdZfZsBR89TB4xyakHGVq4FNVPq1mD8JJgEtBHe3QT9WWueV2h9QvomFZ8hCnx1hbPTnx86ubgHaYJYbVvoWdq",
  "key24": "sKRfAYqZrViMPAHie3tJzuNobzANZjMkZWw79R6y4K2fjntMn4VopQrNtYrdXqkhcSf1uoUfxwdEJqP4z2yGj6b",
  "key25": "23zLJ2CKnC11B2pJAeYUqbNKazqC6gcs8WBFDPQJBHHvzBhyha1w3dGMnSaPxcWz9zJLJNxZR2PyniXvras8yCF4",
  "key26": "gskRzxfL5sorN6C5rVaHbeTL7A15mDzbN12CzjbnwqhccS8hMzsTU3GumitVXKBh8EpvvaukvmAatEcK6pwmVL3",
  "key27": "3S5T7KyXEUrf4jhCDaFCECr5A1EW8jipJFJVqqbMYEay5hurVmYaEuTRZCotrspcY1igbYa8i4FgSmnnzY6igD8n",
  "key28": "qjx7e4FKsvz8N1CYCmWn29wDNkgt66PdFqCR16CZdGbYzhtmVFnVdJjM2GWkQTohwMQM8hN8XKD6KXVsCZyjFK2",
  "key29": "3n8VsXDsf4nhqDEzVLR6fAMGdFq2LuhR63erW4ycw2RUyRneoajztF6Rs1kao3qUFrcWeCMPb4cMxEWz3Yn95aqZ",
  "key30": "4Myc5TwYNY8uRr9rqBrXRUUsE4KikPiwXU5GhgLkgZ6FM2UMSK9iCTmfWbQR3FEUSLqvPCuVgzfEZTQfn7QXHtzs",
  "key31": "4JfFckY7ue83ei42yQtK1QExBC66QMrCURW9GH4ynHL6oiq2BuZMCEZiQoptLJxGyW4zkjT2LVsse4trAfDMngah",
  "key32": "2mHxNdyXbL7PdAz2joU6Fejr6FYYq3iZNHtmjneZraAtvRZBRXhoDpizCHgd5o49ePncYukiHDc9hJijBGV2apYx"
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
