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
    "BPoE5tqgmjwmhpe53fSFfYtaM3gJ213etNRREhvfyPGe6xeFCAKSAqM7kW7ft9bLqMbV2aySL4e3GFRN2nXGKW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nBecWkdidfCJKPHjVCvks5XUMwaioA8AtTH2xEy4rzAsPyoLEQbRyDusQfduKfw9a7xbSuWaKQvthVmy2i45jWD",
  "key1": "5eYevaxpPPHMvEgrus9qdHyxcHmM2xqyJcVk5rBLsLpEn5gBpymT4UDnJ6m1RRiiJKySZPWPMnyKsURzDPMAV1qG",
  "key2": "4N4tep79hhMASa94xqHPs8LQ4GRHMWeJJZ8Sp9tbGG8bJZxKubK3PPCUEXz8hheb1BGmYv6F28NtEP7YXMpCfbWt",
  "key3": "2itAL49hPF4RFo7pZggqhf2DEDLZzZ191b3ygUHzq38HEzLRBt38QdjBddHmTEZdSab1E7r2hR2nEiZhaCYjuGY1",
  "key4": "putGJDkxej4uDQbUE89m7DD6ZomBMNLvwbQeMovSc1ah5D4WCfrkvroyS5nWei89VW4e2XmLYnhsM9krZNsZ9k4",
  "key5": "2wZssLaYirdjofMWucHiDWXZFLjvEYaRK2AEMEcFvQHsiE15R7UyyDkfCAXfdksEsuoMRCdTdM5twVJVDkH7cPAn",
  "key6": "CGATu9iUZLJgEWh3AoUJovU9NgYW11p9wJ9Docu2QcJffu1qpcCUtYWdAmQkeKbyCNu5VPYGSL269FCxcgo1sbL",
  "key7": "3smxgs2nsx98XcJUsJihohddpvX2uJEyMQpsTxm59gT5H6P1qMTAUMRgc1HS61sQAy1pTvvBtZsqSnJAbeEWfTWQ",
  "key8": "8wmDahEcSbUKnvHef4xQdEbCbkMUCBwzcHNXu9PV8CnSx6AXBuKANpg532oRkb29Uvxhgc8gpKz4yCoNqR2pCiC",
  "key9": "2rb17VVwXRjMBNwzXAMTctbQXMQ2gSxHHsPPSTk1EKJdmKqRe2nebbJyiWXCzbtiYNnNXYxiLHjfaR7tom84UC5U",
  "key10": "5WRC1VpZMwDAV7gBwSyPAGgtz953mXoFAxQ3C6BDfnxBfDJF8zr6cDKNXpafU7AGu9pHuAJ1moUciGWCxJ7JW217",
  "key11": "3kGTjMqgJMGcBAg2vkfXzqWutdBRA8FH1Erqye7UoWHyGb1NtnVmcA4FU6fuPJtgL3YXtcu97uWsCk5eJWY5PZWM",
  "key12": "3jDEqyLyCb7rhtVRf6wDskcFSEEQHpNSCEmF2ZddbX6FL4EJV4tStMr6tNuvQvw7GA4Sn1ZkFwT2DMh7FcEB42Gm",
  "key13": "5LGpDRjzaNoZ8DHpjbYvbgE5b7ioTJn46mh9fjn3N9aCU6tQ7xoz5wJS8MmLWm1iteoaqRbqkrg47RV4GzdQkmmy",
  "key14": "2qprEJiefDNNPvnDehNbV3bUkuL7vm47KSJP2542mpvNpa2eDLyZvmyH1tt1Np2yhhWFHBKVk3rPB8JvE8aPv1fE",
  "key15": "28vXGcKghEpzPH9E7GEqmmnDbs7m73fQvrMALdE3fZJVPd739GCUffVpi5wfipZzPGf6KKoAzJkheDD6S7zkpqkd",
  "key16": "3Vdm2VWV74yAJLSLLfKdErDBNJGB2ARHKoqCrtZAvp5HAWi7grsV7yPumMSwMouUAxd2d9wrk3cSJEZataNMESKR",
  "key17": "3vufnjpSW4LN42rJu4bCvEXkJ2A4xGLMkWrEz5hYGVeaMsPzPZACUkBHjKqKudrkC8jSHMyG4d1PvCB9To89vyKp",
  "key18": "4y64VofWFyCc7qdW8nhznTGNyfyYCoYm9S1AjYLCZufiBPQmQXahcgR7ZEhxgVx1zDMJr5Lxo6YNemW7t9vydnjP",
  "key19": "uXdQH23Juw1kzfSWRF15JugH69UAv8mFfbvcUmE4TsoHXqLGizEoadFy6omd1hPqrfig4aNv45fAun4pP2SnVvV",
  "key20": "66h8jHtmq4ByHV9Y7smcruKZ4nS5uiTsqJ1SzZr16JvjaYffbH2fm5xTRnY6S4kZRJiKn5LhGr3GqegkWXdUTqup",
  "key21": "KH6rqsNsiAaMhWiZxwmd2u7rN72ZqWkhRxeaHjiV49hR9Ra6pQpcnzW5eC6ziM6P6vSY41v59UAdGezhapeCLj4",
  "key22": "2mg12GVUoW8pFeKKUqCwLoR5qk1wKd7U5aRUwrDQwHmSFRFvMeE9hM3kXJYJJFMFV48xjvBqd3ydkeeUm6iin8Pu",
  "key23": "4NS9vaLrwCYFh72oHirj323rn4DiXMkKxZDnVH3tfmyBzUiKmLUh1hwQzvTVWjZfzjjQ464xESCLk9zoj7cSVN32",
  "key24": "NSiNU9vQEdibWbRBKnju275XfckEq12xL7zx9gLrjRGzBYvnAWrieeJNm55tyEr8W4W7tx3R17gNFwvbCy2uSHD",
  "key25": "2ccHkYeNUEWkNBtxKKF4eaepJiTzCJRWvxcopickVuSqqYw69r3eF82ZxRF3PvJhYKtpQYk1DotdXWbK2feqWCc4",
  "key26": "3kh2XLkxUTGJcVP97WyuLp2ipF4FfpD9WWfh8etK46LzJ67PNkndUAzCdAHHeDizJVu25B5RtmrmVZKvV4yq1S6h",
  "key27": "3AX2tGPXNApomr6C38oKrXiEVnEExGQHMfzRYH6ooXcNiptqnPpkNwkJ8JMHPryas79snE1JWVc9rrm3zhcVsXrJ",
  "key28": "4vjLiHXzVQvnbYZX1n1Gn1Vnae4EvnBPYbJEPBHQ9KupjgsjZ1TkQu431gBhmxBnc7F37Rg7FMD88Ab11t5Emp5d",
  "key29": "5DEV2drcyD2Hiq7q4C46YXEbBD2351Qv5sEvJmCqKFTSDyTRSobqpe7pcLU2W7ksLuMekjuaFcDiARVbRdQdkgZv",
  "key30": "2twKn9VE5CjQuVmTHZ6zDR8ehvdQn9F4c7SjF1PHwSzqWuzRDFKgfLKnTTt1NT5Cfupgjqgme877Krk8ASfsYJJw"
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
