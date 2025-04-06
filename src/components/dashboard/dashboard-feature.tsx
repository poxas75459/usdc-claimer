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
    "65dVJd8XpoinJnEDUyvrNgrJES8Qukiof2uef2SkhQ5t7wKDURQLMYprS4GBbsmVJvzNG4Bsm2QJwZUt2857XWfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DDioXGpyX5RPXojdqb7wXPWb1etkcXiHhkQkYvo7c27TvA3KL7Qbj1zQV1HMjz1pFBGJXZdgGDLH9crVd1oJJg9",
  "key1": "5tQZCxyYFrtqG8wUC1TTzzq7E5t5rNxChBNhKaw4BrSb4aHzB54cb1UrsGTQMhcjZu2MPkgS26J1J82Li17uD2uL",
  "key2": "2drUdQQuLRSb966QyNU7QUoiJXssEdTuNAiaRcGck4jRve7xWwpZVkC75deY7wGop1crDibqapUxrdkjypnPXXSF",
  "key3": "4aGY8oCNpjVH7wH5dJ75ENsndogXiJ3gyWZdAcVmGiS6eAwPehnbhmifnveTTiRcxKmTxGhEvu9jCfWJqA82zHYa",
  "key4": "5uXEmnMK7znNWzTnnwDC3DfVtyJdWNqk5jUDxSEyErkf2AMK1WRw9CD1bXf7ptESbWL3zEceP9bM2WkovXXG4X1a",
  "key5": "5HZZffgXPAZWdEhmJm43gQwvQ8e8NVvqPoZQYABsQsiYAbqWe52eUpBRTG12D8cTpXszdvXXpvCYwH6P6dUY15qh",
  "key6": "2ntWfpcyA1ptZhzQZQms2zu9Wk5KqVWC7S57dv6jiAD1oqTfTtFNJ1LButg9RPYdTa4auAjirmTunZ7tEWTD7xCm",
  "key7": "4Zr8fPq6GDTUys6nsyV2VRTmsMEnaaZG8SDu67mRkZ9XywQnEBNVo2kJFqTq75MNUydtsNbEzGYuzkeNj5zkXTeV",
  "key8": "4Yh7o5tnC33Qf6RNMhZ4iVuHWfStHzhR4Ty2AewqMRHnDgbg5fZj8xkQn5XYKEbhGKb9huWagGaLTavMmTZzGZ7k",
  "key9": "31LCxAMjKcFyEPZmur8Wa2BqSmceUoZyD2erErfpEiooxiwy1doKna7hWYcATgayvhWqdvv1jDCVyUJnR8eRBYGQ",
  "key10": "3AuYDfnpD28EPPjePzWJDza8e2Qz2rmhCppmjunoKVJ9a1YWU98kB3hk8JCYggkN7gpoihBJCbEXkmKHS1JoFgQd",
  "key11": "4JrVAxcwz1Jn967ncPoWjRZNYhRuQsLkMp6LvStwYnbtsoFyU5kDDGzRmUVqv2QPYeWDLk53qMxVeX5vzbrZKFTg",
  "key12": "4Yd9W7KsLgDi9heJ7oMiynwMdZRTyYfjrSpxm3tgb5mY4jF2PDGsMQPNSD9tik8TNsrtgfvYwuD93ujkeQBn33VS",
  "key13": "fm3JBEoKUCic65ah1mHqgNRozvRvLi9UhFAtCSPmAGX8xYN5nSBB1XNmw3dB5SiKgVo7i5ubsgq7g7tFiLRUKj1",
  "key14": "4spREWzjFnuKMxd76TnYQxAooeLU2dEi4ghHZ297dXgKTusGP5q9BwYZJybR7najtuM9aAxcwF7me4SbTboSzQDC",
  "key15": "2E3z6pJ8uVLygSuXXT4jRKCg6ErT8FnEX2PwEH8wPJkAVvoCwLj77oY8mudBnbDCnrtUtwT13JYCFAtfJC9gcBaM",
  "key16": "vGNBXbTdFogj1madfq7NifutkGW9H2gUSd5kndXCZmFGaCDLKsVRvUbFZzj1Z6HDjtPLGGM3ZW7DJQUiLa7cndC",
  "key17": "3JvDMXNqw2Xkzaftp7mv85WbRJQTmLirdSRVK14KmCLcF6Svb2z2BJZx2JD4uKACVhuBBeidNcYuuhEVnjfFiHsb",
  "key18": "5ZUsBQjHBoozTGn6LC5Zov6q1G6yZkuNHm3YABoXD26RPGPJPRKMtUD8MedCcVnaBnhdmwPr8TcJ6JSiUZpumXDn",
  "key19": "2YoivMY9NJeKBJ5v22HoLL2Awf58XhZwuw5W8kVRbwZXpKky5SL85RoDYhqurmYrsUpZX3NCACHTCeLGMDHAvJfQ",
  "key20": "2Aa2kqrWMmJHsvyYaJGyRCiwyAErh2dtJWtMzZRCpmksBDdyMyL46mesmiHLkfbhDzdvrngv2WJeGdsKeupAidJp",
  "key21": "4nkBw8mnC3imt7gaKQwK38NxGYzmGtbtsque3x8tUP9qp5jfBNyPLNtqfegBEfHiCeHQJEEuEqKeB8DVcKQNCiCK",
  "key22": "5PRYYSqETMfHPtPEybNJvBiLqDG5ZDkE6miJ2NmjdYqKST634nrDH6uvzEMzv8UthEQ4cXqcvFiyFbj3ZeZv4ckU",
  "key23": "9z2fMu4rFmLu8deVEhkCGih97chhbFmPfNiAg53ganjo5LrFzJgrHr24ZchBb8SAGkdXcTAdNEw7x92zhqH7RSu",
  "key24": "qwUpDDtTCzeUc9g6fudZtRDyyzRuAwum9zpBAQNTAN4QPQtfQxLdAK1RdumZQBCGGTDKAaHLd3VbNud8WDm6dJ3",
  "key25": "3jRDcJVCexxr9zT42KWQM9ardbQsbaFeuZY1pXtDak7SoZZWdbHHNrHdtA8ojHzj9vTdV7ZsTv41LyUc8gRtDxgD",
  "key26": "5AJ912db1Px2evY5ugupqu6ybPaer76ruq3S8a7MYzrwWqnex1d3SZkT5cssyAtZhwrt6wCT3LLYAWdUdF28TPpN",
  "key27": "thZCyXJgLu8p92YEfgaoWrEVpvsgzzD8aTQ1XRzc45Vs6Ai6r7wD6fkKSaFH5PrWuXs2YMatVNgW2kDqtDQVdWG",
  "key28": "3nKVQMbzb1fFX3dxMfQuNyAQFMmab7pTyFSFogAhFksugHYpD11Cp4HHLjkmVBSMmphzqE1dw3qRwkcsV7CTDpCV"
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
