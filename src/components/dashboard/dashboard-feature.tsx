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
    "5JcBfsBg3Ar4JKvkh97yEiwmF3LpbMK4cFPY6ta7UNMrvPdaN4LY3Cp3MrNspYqQyvKupQ4VZkKdRZqk3tEreiKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3riy7dHq462CrSQALmDTLHJ19BYVvbU4JHjGDKNHy8fVLRr4h5ajTvgDn28QFXTQBzwHQXEF1HG4HPjAWmSx27va",
  "key1": "4rQ8r48UzbPKaRa5fxniYKXUKJnqSuB986imbCufFFJRoFShgYMAuqx1xJugseKyHuw9KyPAEDfGhALiLYBZHeAV",
  "key2": "pXsjTxdeWVHrFboTwghze6wf5GbtPCyU1CCzWMcQmw4iYdXDiMiAoTKBxRm3GxiEDUu519r5wq9gyHCgfiWrgdw",
  "key3": "3mmgG2ttHbYKdTzocETvN8HBNotZkwYrQssY1Q7FsBiUWnDZ6zwevpooBHamPZs9FiSyAgGXmVbqrktYHgvmz7wv",
  "key4": "2bXbKKfMKkfUfDNegAGm2YVHZgFEEeT3Ej6ogyGbDFPR8Z4kr9hsNaEqVJyxWnyyU3JYm3vqxxS5THqkSfd56yv8",
  "key5": "3hoyZW2f5gmNMH7s54dTNVoCpZZDgZ5kRicGYnbkR8du58eXZFjydo8cBpS3Xucr95wLRua5Wuq3w2yiYCsbWmYg",
  "key6": "3QJtRJ2gKFpq88si5iThVhLFaGnzyuQi7UQb8cF44fAtE7XyDTbuVShhpEx4nogpPrga9XGQB4jWbmL1fDRHnWX5",
  "key7": "2w9fEvSNyQtUy6yTUi9YUUvSXe9FMLbuNXWCELJn7qSLjwPvZyURnchZex3qe5drQqVfWgr6DmQF2Dodpr241mMD",
  "key8": "2KryY6h5E1tAgKbZC4FcgkRwkqZ7iazp8NLCXTMqcHRBtwp7RLokfHEZayHeog659ov2KGTUFMV4tJi148tv7r4y",
  "key9": "4YbxQUXr6aiQi5ieePtxVn1qgqmRbqJdi7U8ogoVpFh7tVz1jnkNgzJeEB9rHaoLJuVXDYPYoBxmBwG1iXtK6ffV",
  "key10": "4f22ZvoFXhqeprtRVE4p5H3ewsL2QZobU5B2dyt7nYC1vv77VDDjwbUQ6ih1nYrLBiYWcN4Kaq6qCSby1Bmpy8x3",
  "key11": "59Lbart3pvcmRD2hhhRcdVwBfGdvnu8EH57p65f67of87AjW58CdE1D4xMvvxGx53he16gVXYyCmRiBAaN1T4a9o",
  "key12": "3EN2H1ewHE3fV7Yt323dwQf5R6qwTpNEB7SRneZUq4q1MU2dJ6HWCH5u3gfmnyCD4gjtCiAkRe1nfNZn9j61RhZs",
  "key13": "5HS34Ju8AMYcHoynFotoJiBpiBEfCToNzcKRMFp16Kjgi1tS6SwjBEj121ns7XL8TAZKCMmq7R6MiJnSrf12f57h",
  "key14": "2ST9NuwmrkBuGSGpxXpXDAv3tQHXJAe9JrDmv4J9bVqEBGQrSiMVjnkUTu8owCS9mgkcwhfeWK5CvChpeGZH4hmv",
  "key15": "2JQzxGoLNTvVhhUcuaCDDMzeWpoJ1dDF1YH1M9VbM6YnHdeMm2wypDy8mdoqaRszcQgLd35ZkcoKti4jA8MUZGbF",
  "key16": "588k11XvekKuJ5t8a7khS8q5vXaSqv1qYRrugfGTMyaP1quibUXGxMU8D643FyKRYizY1MVdFjxBHLqDjgUW2Uy1",
  "key17": "5N1tS4DEoLhymBpj1tnVrVk47kdep5G1KxBceUyggovJhRJewKA3q6m3SfWPWe1kXPkcYk7FLgPuXVzA8LuBvURB",
  "key18": "4RsyqhzbcHMu2bZP1n6tu2pxztQdCzroPZLru4YMArnewdwnrFJkZLAkwakRcQ2mUw4dykBEhEftS6D3wV97sudd",
  "key19": "556FqV3eo6qQJPp84Sbp12G6t2GhmLEP7euAnm4E6biCrtU6biszHXasy9jJHSj24C9TCkj6rFXJ57J2bmDbXwr",
  "key20": "3843DaEV3FMqJt99SFE3wTkoCN5bxj9Uyp462fXPzQ9TC2uobST8DxrZLcNcxhvLLAJ74Ry17tDXi7xyXNiPDenw",
  "key21": "hwZLpMehJeWnQ5FfKYm8YTvCjcUtpaabCv7wWFWYeUD4sensQpxBR42X6aA3iNa77Ko46PaooFxoYEtJjkyzR7R",
  "key22": "2w7vxcWK4pUhXzFGCAALX2RNVS8QXLPoft7vUFBMJ7UPu1xK8BiNov6SKKp79nCbEUom8GtKGABuLdSey9GLnzxp",
  "key23": "KZhLoZsqAzRvYtPvsaQmyEmWiymPPVWiaDcryS3LD9EZj1o5tExzMy7zjMp11abeKTRXcqoWn8woyP6BnJLMkjo",
  "key24": "4aMcW4mKMLZgTakUShXu1CNo1hhorzYQWpueTy1dd65TdB49Qxjq3sxBF1W8f94j3sKPHMrJA9YuT1VGgnwW2LVH",
  "key25": "j2fVsfscxCfoMeQPsZbxK3T7MGiw2Lx9zyj8WxzT9yMPfNUn1vyPc5MPrUwNVGirvTy9afqaL76oQKJ9CLCRrTn",
  "key26": "61n6Faz9wSQmhPubPLgxyuDCtXoEstJNvjCeG6Rdmnysx8y98F9rb8L8dZuToK1bdVJHRRQYnFFgdx4AJSvwvv5b",
  "key27": "3syN9wAEgFMcTAE6ZJKnn3tXtRRj4Po6RfndQzDhY9yo6sDGcKLc3mNkR5Q2LPUNEHxbLQH7ouc6kdpaX1qSkdDa",
  "key28": "CL5pMs1PoAgMzryj3TdCF21BmcicrKc5P1EthdDn8dxAKCkJ51Eg8xve4pcEHe93vP6RyqA2MYGYMyQ3RyRiE9s",
  "key29": "3TwdBp2f2KaLsuc7STjoL5Rm5t4jcY8182cwkxNyLW8b4NB1FZYQDaC1H7QAgTFpm3GD72nnAfqQ17H1VLKBN1jJ",
  "key30": "4yWvR6pgM7Xbc8ev1eBd65nFUcYiGvjVH78ZkbqQEhVWgtfFSUmii9tuGcfCNzdFTpWQPp2kPQaBdxQ1JZi8YcPH",
  "key31": "R8fyifEjNjAA1irz6DrNgfpsq8WzZK5Gz5wGT5xCpMwNWKyX2RJ12a6rjTUpMdyWCLu5fmHjiSi76QJriWbyvqQ",
  "key32": "5J4ez7p56iaEyiM9dTjAcSbN6zxhyxS9TQJqm51cgTiJEP3XtFAfSixytmLbbkNAAUb131PKpq6NcAk2W7k3k1gv",
  "key33": "5UDQZrytXb5UKbL8BwiRjCEjHwiwBa6KCzwQy83h5i2ETVfjy3VcWa39X3upbEumdfR7T7H8cicpBtSF5QDNamTG",
  "key34": "3HqSQVjH6ep4bc31eMUeeYZkGSw7MMUz91JBE9J8NkH7HB2u82DC79QFiAFQWuDworgeXEhLVayKQHAZJCAFst8k",
  "key35": "SUBmNjVHD7GzXBctTcdnn77U38RBxPQfU3mTyNTqLVjP7tJ9P3yJ121dXwNb9TwHmh5BNbkuddQmSyUr4eafji6",
  "key36": "2qKrsVXLiRwjf6yHBoRonf9ERavjyN7p7vhXz9rMubJqBQNT3gi8mwX3cWemcC4k9PZaEorKAcX3eSPi1ZX1VrHt",
  "key37": "3frTNjwSojn3utSi1pe32ZwNh2ewhDfkpy7aSMT79G4agdXqzDBkLrVYegQF1w3hsVXtNhBWFZL2TMpHp47WRZt5",
  "key38": "1p1R9KMpgMs3HUj2hTgqkyXge1PrwKPqio1VAKLGn9ut92LUf5uLr7FKCzdNEhNCqc2DGWu1gAEQCRGzK92rMAm"
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
