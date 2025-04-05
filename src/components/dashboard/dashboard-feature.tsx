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
    "4GX8LTdePbZm7t4gkWwWrqTCrvs1HVRa6ZFMLxNzAE3nXy9bAy5bf9BMEJd6X5FGMN3FxapWnqW2daKikcwFw4mU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25w7eJWaFj5YaqjhEyZDY33e7ynZVp9CVYJ8hxHdZXA4VtpNV4D8FeJtUCkybETEefQgmmG13s1Sm1dmZWAuKNSa",
  "key1": "2LW5skS7P2SnGN6rTGXF8s5JWPP8EPSX76emYSH35xk1fHShAj25BcGZ3LKcvzG5Nr8PWi5fGFNsAwmxjeGgNyi4",
  "key2": "4H5diRiLFeUtEFMzXULgVEr5ExQA5xvSqpjGkFwqwiBSz9F99Q6LBegsVftLXiDcsHqB9uQH7WXK28UsVPDWvGHt",
  "key3": "3kxU9uq5i7wFoFe5wpVym65nBPwcyoDSXzegM8eVQ1PzPVwmKCadGuHJgaF2enYvggS7wdSypGTPJX9VMy5BBqmM",
  "key4": "5EuLjrV1Kc398zUXwc5zJ1DxTxmkWEFYcvvqYpfLzYnuGFjCJ581GGoEaTFvjvkR2LFXZV1nmydfEujgmr7FTUfv",
  "key5": "3YKWPpKn5qKZQ4FBGty55rXSgHmcMkryZ2gYLaVKh8W9RsAhqu5sYvUYvGXCkzwVxv7QAW76v4KxHdSkN1VsZZtB",
  "key6": "3m6ryFnTzjQJ7XHgf6Gj1nZPB78eT5BDmDvzmXKGeN2EVgYUWYTzgq8iAgexmoqefGnqS8KRuZ3AgZcWnwvEr5hV",
  "key7": "2hTfsmN73GYZAiqd8hp7ctV8fFfvnzTSfnDNGmqipp9hAf1xZPpTSTSmGGSRz5oHJWWDcZwYySgmk9eNxzNrjdz",
  "key8": "9PYmp5BHkgoPTFTLoBMYknWvhsQmhnB2QUzBqkryYrRaVh4nAxppXdCTkrBDbx5xPZJVZj7nxu5Zxq7et8rAA4n",
  "key9": "5b2D9fAcTv46mzoKqJ3TMNWQuGNf6mAbMdgTKwXzN1bXL5rBkuzDF4pPd9V3tKYs7tqHkFR8RKDX3VAj4a9tejiv",
  "key10": "4eGycg8z4GCt1vG72uxUPYtHXVNwxLc5DtTw8QQkEM12YP2BMhXPdR6QXANqnotN45i7JJKctq7V3EfFSdqn47Ut",
  "key11": "2i2QSJUXm1tp7QCk6JRTYVUqRofhv9pNHz6PCVuLZ5TvDrP7xJaNAKsZ5wpDsXGEyjrm8ioPAjuXQqfLdYiXnuzH",
  "key12": "zYiauLCzDTu4p2HyWZ1dTQ2EMjzj26Xxu2dcd4MFsaUzdS67KYc3Q8RmRAETfW9TM1Lhouo3hQYKV5J1VmDSCWR",
  "key13": "5fsrBBFTeeit9CG2WnbgCqr4BAcvWKVTuyrmB1tmgsHWZB1yiVL8ktPyEsdwAiucaZw35d7xKkkEJGapKM8hSnqc",
  "key14": "3DgbU1H8bcDY4fw44HxhHvNC8gDAYzp1JqjtsY6FrbVZyUgq3fMn3DWt7rbvcywbacbABPuJCFK7d1f8ApsiaZme",
  "key15": "3e4cE8YfhP59WZCD2fyYwY2GWJPC8bAbWsLbCGVhE9goASMixjStzQaD536niA7bi7KrT7o6CfpsYtpyw7AEXL5j",
  "key16": "2xHxSYgtQVCkPrdydjezdwfGSrBgZmbD7HS23HXpkRBydGgSZSwQdjh6p7rH5bkfyx9VaVhH1w2TUMp2sLrUhPHB",
  "key17": "2fQfcLbQ2z68s6J2zvBCT4PQ5dyfev9SzBBa7fp65qsgzm6jX5rpJ43z5Tg3ihF18VjGCHUVN4vHAzj7fZdcujMH",
  "key18": "3B29phcFmPjySBobANucX9pJVsBfswcqs6y6ATE1fUnBJddT5KYkm8DTshaFKVJgbAxxvynHEqmV9KQ6xb8sCXQk",
  "key19": "VWC4X5TynMGV8CLmPH1noWNx5tCU7xVp483yDJ51FeHDV3ahwbobqn2bQmnDLxsZPJEg5cU4RJEcQcqmmKThv5b",
  "key20": "4Tvs3PrFMV2MDkgoMuhMhUwEfz7mMuvJcgqzAv2sSKGr1jT7JMoBDScTa5N5uAom1zVnkMF8MfgvegtUWiq6NrVZ",
  "key21": "4Tgu5RWuoC5cPDNaHNsXZ1wpYQEaHjHi5m6FacCjLu4uAg8gUSwjdtgwSWjpZ3kBJhusg8RT3tjsQZmQNx8q3rsU",
  "key22": "4ycmHuiWYyPq6f26L4A3pFpeq5zqNH2ZvgU3yr8haiLKrJEc611aFnwSuq3sRvzLRZrQBGJbLnw4gANVtjwbKekQ",
  "key23": "5gt8G1w96ijZVsRk2dyDouMg2GA5vfiJ8d4XEz3YyhepQzaxwKw6USvUjFy6EfWZfxJ5s8XxzZkMwZme2HM1RQSj",
  "key24": "4Qkd9gt5giXvmRuoRXUR441pxhzKzWnVzxF1B88NWYheagHZjww3Ctrzp5GJX8D9YEdwQvKA7dYEXDzGGW9LUbW7",
  "key25": "3XDrs5gpeJXP86fQtzgh2SMDP2ceQgyHZLR6BKtudtEWRct9L1xe75ZMtj42ED7QC2r2hsUL6bGavx4Hh3HZY9Mn",
  "key26": "PeEbFKovvbhSgsLvbHEc6NVneAnkkMrhvRPEVnS3LAyyYjrNy6neJUnQ1U2QtMP7aVi39zVAH2p7c6wmEu4xAH8",
  "key27": "3oG4pytj7tBj5DpJT4xJzScn8hh36sW4ikouWicRswqtzoy475cbrBQzHX9JPC8svW9xRwtV7zW6ft8F6n5Fw4Sx",
  "key28": "4DqYCT1TBaN9rcT9U87q6QQFA5Ff1zKBhSccHBJtPupScoYAs2Xc5UsctRcurTAQXGYca1yg4t3QYdvnmNTGTtsu",
  "key29": "oatnJhUy2hwdTvLSZnbJgRkkJWJ58w3tfzDBsypVqKYhKuTPc5jN56cj6STF5s7bNsPx4WN9Amyoxe4GStYevXM",
  "key30": "5Mojzh2g2csxJmxj81PTNpM6SpmkTkfgnKhi7NqD4bHUQ4jVTrPoDHCiWzW2TxXw9HD9YmuPUkqhugn5YqJojLMT"
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
