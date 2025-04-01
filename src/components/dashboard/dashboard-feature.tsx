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
    "2VqAUuc2mE4vqoVQzmz2TS3ZEEbjMQvmXH5wMV8wrVjtzqTaH1PNQ24ZKapvuHoHFSvzgrDjYXXzcZTFVeBtAQvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m5KCLkAAT4KrXfWa1ytqMcdpnwo9c2ppLcjmDQzTDA3kMhAiRN2mRWjWo7j3wbjrqcSWg52Hm1yVhVbzEgu1qpD",
  "key1": "4xdCN4Pc9BkjTRnPKTMv9wQUXxSJozqVFmM2Hoji1YpQK5c7fyeEETpjChQ19su3BBzJpVFGF4t56bAqPUam5MSJ",
  "key2": "5T9KRLgzy8RGLJF4en543wRG6B5V6RxN6HzDZQYB8Xh54ynuLVcRPrfaYGwAU8dddauwfcHxBJqwsG9w4XLkqdYT",
  "key3": "48t4ZVoQ8QvTMUbxaRJcxyY95TPQJ5YM8TAan9r7DDaUc2dJtPxXyfbFeZs14J8fzY1fcaUvGGLgNNG4mcPYQ1mx",
  "key4": "2xqXBB8c6y125kW5zyvPQbYkmmPncy3aJCwYABdRDdUbPkzycqPiLdKHv2yiwrfkv3KN8PzsVmmP1X4tahDnXCob",
  "key5": "5jEWvCbQGhwr4L1jwZxD6S1nTZmByhgEfsYfJrxdFBRRJuWUpMQYTJRVaTvf9WVZuy73siqqbC2dGDhzQWBQyjJZ",
  "key6": "bzButppdFKAaLaCfShgezfhkqWKpPTEmjW7ztz31kiwFbXR2ZJuLyyqU6dLRdjfFjyWAG6uD5cPMNRk1sux85kr",
  "key7": "Xxek4bsREtGFVVQsSTXBmLvjkHduskPQ6eysynp3HEkCQKoT4znVMqRvb6QmxZXE7eyqRCF4KKB58Mn1grYg8t2",
  "key8": "5eLfqW7zkPidEjEEHH8kaczuqJWjm348y4dPv161VKxgMpXm2HHZ9cdXSLBPi3bhAnABjhhkQM1U9nTtqfFvJcWe",
  "key9": "2M42Qs5izt2qxWEjCbm9ZNcVPvsYzr8TdrmJNjvuj5qeKXRbxRQn48Pd8ZurFLTdS58U9XaK8ovbxSkSrSLu9CoG",
  "key10": "3WnyWmoiqt4fzEr736YP39uWCakjTUhC47aroMjMBJwsewKc2Gk9SpG7eWFZUfMzFSSwd3vS4Z4fonsQbEcPuEob",
  "key11": "5GpxEktJLiiPG1UFDFnW6pGqTz5JYwUTjL6wtwoxbypZ5PJwVfv9z9P6bWuNT8w6cv78tk6e2Wj73TtvPwtaqK9x",
  "key12": "4dUvXLyUV3nVos7hrNpguVJPSrEJkrWCbyh2jjbqX3JXDmhamkz9Qe8pbbjZ32RFYokrV2FuGgvwVAA1eqSLNqDL",
  "key13": "3kKBJcq6aU7YuTdL7zAP56h1eSRvkkohSrxUnp4q6Li84HDGemSmhr1Cd2yjeSK7MmjU1zaeHKCHNxzsDkFFYDFf",
  "key14": "64iv85LeGMSXJTS5GQdQ9Mgq5XwBkeLbDSkHMnUNnxuewa1wYgyUyR9TVqkBowksayH1dWFkdwmV6W1BNFrRxEm4",
  "key15": "2eCGiaxGxF4EX573iM361CMqMrJJ3rqr5PEwjkgKUbSqsxC9ZRQikqofuZN3Sg63qz11NYLGNrhVshkVyvTD2jWk",
  "key16": "Tbk2ruJgWQFTZLTJEeavQovqrw39W9A5AJXRa1b5XmKzkjfdpEkeYPw9eq5VEwhwUwPcCJYvT2ZxK7NMY8PGf6u",
  "key17": "M3XFcHWEix8Qctm9hYxxGEqT7sGm3nna7rxBk1dJuZtHo8tTyuEsZmXigJaNxEwqTHTQwLaZZc7cAxVf6U4Agum",
  "key18": "2YLZXLcpDi2rd3j1vT5URwz1XFK5gPtqk8tUAR5cUN6EVUtPZH8rMAKsYr6rpyPFtQJZHWJS4WKBjHqaiJecZQUG",
  "key19": "yTG5L6dH5YtJf1pGDpZ2psrnGhdRV87R7FzaHLVHGEX7hWfPug8ZEHjsEuDsCuSHhyhBu5EhWKtJsYFovjfymkA",
  "key20": "4phh6VJ8oBUcegyA3Fp8SraGBezt84Labqhvu2tu2G8kmoyKmC6997AXMHpgb9uVMrWUXCGUhGH2cVVVa8PbzSg5",
  "key21": "4zLLhuGAk2nkLopDAVdp6aCAByBfh6ph2Rw19gi1AXZtPCZVkA1L2xWoNnJ9Rbup5NDnqNiRd8uMAZ88RTTnZaRC",
  "key22": "ftHpNdkEofMEGQgbepq4p8pgp1Bnqa7BxTsVXZeX6EJdgSGFqfcWHrcsc69qguCkWyS5c7YyL7tnbYxWF5X44UP",
  "key23": "4Gbk7wdvLHEeecEup4h5a1gT7nke7ozPaYRGFzt6sGVBV5Dgy3DztbZ7LRVWAZnb7mZ688yv9jnDZgZoW69KD7e9",
  "key24": "44xbUjJj8sjuJ1vCuQWd5PKMn1U2gD5qJM7Gekt5opqPDgN7raJk2FuEQaCkDD17BWs2DjPVbbtVvFgPSsYgLBwj",
  "key25": "26Xf5BE2A8uNKE4phoABRwvGdR7Fdbv5mNG4AnCybF1QZeY1aSvwKoW9p8L1PHg1hV2P5bhteLWjgHbqbP59dj3B",
  "key26": "3EyoKFPGGymc7nkwCz6BNysAMdgmxwcphBX8FBJm9Y56iK2E5Q3Ux7B9rYsKZKkfrZ657U9D7VXRuBCuwEyvxH4t",
  "key27": "Mpcy2QhSVY3dA97qsPtPyKLeLPuE6MBajMRUMLYtpQy3Rsio6CVDMioUHoyFBwQeefuVDknZGCxNxLewDGoCoPn"
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
