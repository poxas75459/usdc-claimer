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
    "56C1jPK8VfkjQuKtMWfLm7XthjJL8poyGoMKRpzGffXcVpNDJgCSZqRfFnneUJQF1DwSNBigV9pxYWYxKtnXAJyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n8Ma1CLWwromspLfCNi3b7NHrivtQzuV3RJ4wLpW78Vc6NPR9dqi1FAx9E8KeS1eBNBJ8Qtzmk54VgxQQGkHPB",
  "key1": "dXXda8ebkToKoSNmjpxCmbch9FwCTadMsrfLJGvCpRxTKHiNY7Svwy1PUxgjcjDNiTUtyZPybrL2RwFXC8cGQ4C",
  "key2": "4knWk1huQFK3NvjyFwBbhdieZpYdHRvCt4k3KGpokYSQP9DEpYAkkAW55WkTP56m9471yffUnnXQ4LjKjTXFTRR7",
  "key3": "3Rj8uNDbk5z9BV1aNBt3pTrx5S2knuR7VrXiNpKodVF1v1YmhwrE6EmMAXKrobTegdGc5GSu9VNL1EToKkSg8gro",
  "key4": "uRLeRXXZK9t96DFUTdU2nDU3bUiLGYsb8vTu8UyH3HLZ61b626nXRkAxmRgKZwUHgVrFNk5oHNhKMxzD1ikGt27",
  "key5": "2jNKdjBFay67XPT8dvSPhpvLn7jTnW9EAgzqKZxmnBvEqCnEadiZp9dF2niFf7SVJF8H3LkgBWx5TbpQWjuiB9o2",
  "key6": "5Vs4LXhQUdgZSjJnSWJS6gRWJQCDapPmA7HMJXFxRrmgdeDz92NnJTPKvSxbhxPrcBurHC1uVwLwUsVGcUrnHm27",
  "key7": "3jDbmB3CGsbjFmy67boAtpAJ8PDPhK8Lp7fU4UYHUQqrGEw8ogYZnG9PDZ9SWUmfAkaa5np4816kSZEFPEvqLABK",
  "key8": "2XXxKPqAWoxTvzjqDmQg6r7vkt3WtCUCZR8JSeUqdhpcsrLbHB3M8PzTm8pwt4L9tzhnKSZrbv4UcqpUqZNw7448",
  "key9": "3mvCWpACTMkjrSr3mBRyX23utd9RXKbjf4Lo5nuAaeHU7mV8eijtuhVagWTk2iTbwwdG564HFiPAwSi1tqUHtwYi",
  "key10": "2aMcvr188kvqYtqLfBfFK15FMmzXBWMdLUPbhW5n2YL59SDWV6X74euGaC7S7nZCaHPV77iz1ddxBfvH43v7NqBy",
  "key11": "49Eipx5XuMDzr8kGUq1UkVi6VtCws6J17q8nWT8opSppFgzo3PiHJYXXduFQujNy8AuU3Tu3XSz9GmkTGxRkPgF",
  "key12": "4QKfDB5Bzqhcj8coKnBvECZUnCbDZ6AnrtDjdcV4VwTXe2Y8ephb2HH4TqoiRvgzUt72qmmNSEnDJvpkZd9j5y5R",
  "key13": "BdhUAQpcAcz7QbCJETercQxX56yYotAG36p5r6xnqbu9wLT1nK4ojB8WzMB7WVJo7WMAV48SqSdaYTsRBUXJAmr",
  "key14": "5WPz2n5wAWWTXEHoxCjxUBC1YTXsGBfUAvoWhscvV6Q77HogG3uPJW9eRctks58oj8e3g99rUoE9unV9dAnfMvcs",
  "key15": "2mz8Z9KqNGL42cpwD1rnTYjtaTN5VTzdMcRWpSAmQvCZUBWBfcy7xhkdeXHA66kwRnNncHhx2d3iVfXa3gmncQk",
  "key16": "128tAbroRLzkRkunP75SsxqdF8T1peCkYV3vgCor3AohU8i8zDH7JJtbPy5gfyfh9HaxrfHcw1isioZeG6Rya4dD",
  "key17": "5iRKkHftJJ7Zr29BdY687H5Rp9Xbxyv9bsThLR5BLmG9FDCbQqoMVqAe4jDRUBk4s7mwtRFZgHqJhG6495gx5BXY",
  "key18": "5ifDsSQSawpqZqt51e9L4Z3garRB2b2D8LmDPBd4zBpBDPFtaFt1vMvhKnqpaTqUJVUqFn1r3w54JHGuHWhasu1W",
  "key19": "VV7KKobNARaQqB1N6sC9ipw4nkPyyUhkKC8CTujjiAUd75njAG7vjwkPpvc8h2UMimbxjg9A68Bem33W9RqGMxH",
  "key20": "3yMHmMm7PeXYNkzH6jCfwtCm4sDrK71sgtcukrVTFtpWtkCkNJDm6oC64cuYqrY843P27bZhKAapnxuBWpuX33i1",
  "key21": "67oWMZNxBpJ68oxaMzGHYe2y8seSZBgabAiSX3hoTHqRrHAWvGotUPbLRPHNzsLTcMJft6izbHrtzWr1LC9MqJ9h",
  "key22": "4DfNNrDqfnes36JJfLegbaJLeMcVkEg2g4UUqGTTcAG71Tm5qLpwrZhgJmMJx68uqYchmMJnhbjocWz4hScCLwYi",
  "key23": "5mDsexQtgJe1gkkU4vpqUvnCwyKT1XpN9kA2ZWiuhXsdR6uTaoeeNu7zpWYqiyrhMGcaftWHwQrX3qjoUdB71KtL",
  "key24": "4x9z1LLL6TRk9Xd5g6QfrBjaEJKaVzfyvVpX6hcjv461UkcskTSPibMx9rTXGTuF38McDgoCVvToQom3tC4L5YHs",
  "key25": "3Ra2JURt6KQ62PY6iLyPer3FEkFb7yFtoyw4A5MuUxnPGEyjaooYiyj88GBh5bSnPmh5bDgVEzTfKdeYEfnx43QY",
  "key26": "ioUm3xL2p3J3HHDm24Zm6o2PdG1EtGREZa1emnW6bV91zoDeGdxckHXra5YbDdn2XSGdEgVfBUR926zLXZPLk3m",
  "key27": "Fn5rFC9cKgbBqHKhUbKg5ie1tWMnNCHGNA2pjo3whENrtVxVifqiy7j6aArzWXNDGeS9HYmr4MtTCCyXPdQWAUg",
  "key28": "4CDVz228Dic6bFZH6gGMDyJzky1ez7KmqQGdT7ZmdqyZFoz7ZU9EXjAvJRna2vUDPBbLs4UM8e3rqCro2vYhELPk"
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
