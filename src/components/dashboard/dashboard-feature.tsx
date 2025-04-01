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
    "3pVHXBmAh6bAtQPXmNDQYALCF11H2kQPivdfrRZcqaZ4r6Ewi9RxXdqnhnkuC5rntr7VT53qSDauX8ERAxuBUcGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FxeoZmwk2UBXFkHiNbTDeS2xJDuCRhWqfuTVZQq94EswFZngLLcz8aPB6nqq6Y2BHSkefc1M3DRLvLMsvmaBhix",
  "key1": "4P4jYy8bscPT24H3XQU3st8BCcBYKVgijFzxDxWq7XCzfx8DGL2tSZRy2JGrEKEYKqfXdpzVMerUdPMawHGf4e4n",
  "key2": "4FcKrzTiXuQE6xPKqesyKZDgjryY7cuFY5tQHgzQWiDBAP3Yeg1B2aZSnSHGr7NxaAhhDFw7GksURqgvvZn8b5ja",
  "key3": "4iGjeFs2JDXxBFUVbpzBh8Jw8HwccZNv3UKxgsDocbvJsxAmzx8givDwBdTYBAepgLumo2YbBFh1gKKXhLwEC6Qg",
  "key4": "3gyhvkqXqVQdqVyZPqW9eaP2oRcKritr68RC9ZphoGr51WrKEJ2FzVD9XTQYMH3qeXELJfEgn4X6hAnCRRpmAJHg",
  "key5": "74YUqyJb3tjzHuvWpCw6DwG3X4GU1Zf2YE52qHHGbmiumhGCsFp7PJvd1SXMhv3uYPAkq631rhWL6R3F8HbkDcf",
  "key6": "512mAmLHJGXsYiMhNAhpX9Fc8B5jW9eUYVVLRgf7AsDE2AmPVeKZTGjWEEbu6SQ1aVk5aocKF5dqkCfWtfcYUGdM",
  "key7": "3oShf9Js1m6SxQqBZ23SaesKHJHfuDjot5Zr1vc2nxYBzeFGyQw1Uq5ipjnKduofcG8PZ7wNG7yJoaidGmTRPHc3",
  "key8": "562WBzmgrenK2TjRGrsxZ7HReidVWYfgqPfmGGLTPHwoB7SoytdRqjwtyucJkUsRfutvYwqhb8fYoMtVPSkj52ZJ",
  "key9": "4gZHaLB8N6Lhwnr3BY4nigsoqXCuBP32FvZCPWQMPqNiayoGyQDRTnAJtTsGjCS9AUoX4zjE3UUScbDPL8Q93rJR",
  "key10": "24Ax4y5GJt44qa5kXUgCnRY853bMWrpapMkomFzFWjqK5wx7HZVJoPJ8wSsUrsH2UQEk3rK5eRxCe43GBazxRJDw",
  "key11": "5bvFudYvbkQmvWvAsYFs1EbT99hBwwZhnf9ryGNB3Ca7aPzPkqmjSTvEjrTjXWxv9p8b4xhWhAih54ZExk5pByRm",
  "key12": "65Fk9MdQSuACRUSypmx6uGTYnbnavzXbgPND9xoMuzcUeCgZ2HJPTniqdhUmqXxJsc1UxM4sDjT2FQWH4sP2i3hj",
  "key13": "3xs6jrCTVcTdaP9v3KQd6ySQQUXjpSjeL3F9mepZHr2DBiVt8HYQ8X5UjVXdok2Tig535hTJtxWSNXzirJJtnUtv",
  "key14": "7pyatz6WqyCNtjGYwGMZH5CWvEBLzgdjfsRACrZiGaMyXFxXVMxKpPchLVxfkekj6NUUuXbGRXPWu2B1AEXigww",
  "key15": "5zfxfGyRaueGscEwkRBjSBqp8gJ7i7qUP8Ws19hvwoWPMztdnaM4YQ6hd3ax65RzHFbLraBPR35oaRgyiPym58yd",
  "key16": "47NhPF9rToeCi7iHQWnJyoEicDYPvamH87t814qfVaNzXx31MV4efgLApaHbWR62DAV1TzatKNu5gXwcdEPEw7Mo",
  "key17": "hx4A6KC8UAELEnZkiGpRF5jzQKgbPdM16A9AaQWgge6y6GEYeMFuF2kQZyczqrNWdmZyFyfwLjy7qzF8siZT8Kb",
  "key18": "PQHV4g2wghour7GYb4UXU3xE8GGBGAAdLdixXGhazSiGSU5QJmh48qrkmAnRhAab8Vkk9JjCnPBWEQE8D7tBeXw",
  "key19": "2tzHZeEPSChdhNjSrYm61vHQt8gAzV3pZuGP2AZixtCZgDTiLSnzXADWLgSZYLNAWeasNS5vn5fZdnAdP253F6ap",
  "key20": "mQvJYheDfesiDGDL6hu1GoUGBnBmroyE47DPqTJsManVvkxjoVGkN3GGvEFDDWje4GkdJhkuK71v51vHgeWZdxK",
  "key21": "4grCEscUfcQj5bGnzSSbKgcdvVKeFQ35Yi5YPAxX2hkxXeSjW87jrAhKaCAHU83JuACZTVniQfeRW7p4wyrQq5iT",
  "key22": "4v9aovpYmh7HEwctBiM1kXiHVc31qg32txSiDz8DTxPdTUW9du3LCx1TAd1Fcc68HqymyicNCtUTHT1AyVJ65PPk",
  "key23": "2ZG38FNB2sfZGTmQN5S3x7sQtuCCvtXkMVfrM2SmfYzDPnaVo66cwCDBmx43TDcqjHZ6PMWhHJF7iJsL3bsGMpdk",
  "key24": "2zVWB5qSkYjArsVqVbqAaoExRf8ondYKzNTLRV2aLTkqywVVHHjVkyQaAcT3zKx7oTNEvJnYjtEoXpC6LuW3RhT7",
  "key25": "dtUBLopFjBWXySXU7P8VcmyZmjGz5F1yu4XhEkF47CiWgzyXjmK4zwX47iSTidMcCY1EUQCxF7h3hxhzTDU29mp",
  "key26": "2QTrHKuGDfqrhzKpfzLN96EjnTAjju4m9FM3nqnFknnSuhp8Zjnjuy4iPF9WjhV79LZD2463R4XwGJaoufMCEpJo",
  "key27": "4fPajedAY3nBptZwkPyFpyEYsUwWJtsojv5R6fVFisZpSiLH1rhcJYCbV7UWXxwVC6UNe9CDPcZoT8UYxJXpUZqX",
  "key28": "4YMdDKiP2LMrZ5cuXx1BjYBqTTYYmyovLuvNFCVff1Hu7Nb5QCu8dNTy9yeuBmwkym7fcMJgfb1P9ZC6MKMbFxr8",
  "key29": "2amnbnajWuV7ZjzYao7rQGPxV3TVcZB4kAMiWbifvccBv8xmz4LvoAajNkk6PgUkCoNmXDuBoinr3jfNLBnBr6kq",
  "key30": "DgEPWSDMpXbtvkShdMbKxyH2PF6eqiDp5sjartmJeHQmtF21bDQuogrvKaqgvpdpRo9mRMN6jXj3a4cwXCQsVAQ"
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
