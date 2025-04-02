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
    "2Ys4vcGBziK8eZoLyodccpQPp2wzxgFjrv2CR8C8Cm7Z1uQPurdnGCWPyruKQ6hA9Wd36LsAfVDJukFkzdNP8amW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rJMq5TneL2ZovqtwQcwk9XNBGDmJKL4FtKxwEWQjJ2zJdFUe7d1kQ85ffSU8uWADMRHeRqnwzBuL3Qm3dcZBgZ3",
  "key1": "3jkQPuuKpnSN4YdrkKZ5vRsEnEUJSFSC9BUaTQ5WqPr9uHyxPMufXt3WUQiTuM2gmjEHJrqmnHNTrr2ZAu73vRXZ",
  "key2": "51ANTCEJQbB5G1Wc8TSaEnGkgGFysgJRa9pTVEWSQ43TWMqzUjHoVZHuEjxcUbihkph2ADttRqrAchmsYEp3nGiL",
  "key3": "2ZKXQZf7pgVgBydWEXccbEqX9BXUqEYiV6M9dQrxL8jzuyotP8aBzZSvzHtkx9RJDhemFsz4zUFjrYXCXLGGqYS6",
  "key4": "2amRYBhjUabLN4nm49GiD6unjZQLKAo7fpybLVgfgbm57G36TTUqwCEM1nHSzmbQASVAyWeUkBjswwYn7S6MXYNt",
  "key5": "37K9QmmnzUVRANPDCkJpKtLEDVoTLhuxQDkKpUQqjsPCuTEMWUn8FbuVqEKoygMKNNfzCzXx2veRdoirkyxdU9ix",
  "key6": "2GyrCPg4TCsHAZmoPPGfiwmHbRvrrFMZxR1U25EsTXeBotbRCidhGHH67R9s5xbqmy6V3mXNm8ufcVkQSCPY8fTv",
  "key7": "3Fh9xUvUGp3koR1LwTfVVCW22mmkDirdnHVpkCKkDuNBMnWGzh9heR5N2XZgmAiRtRPH8ZhVi88wFAk8LKqjetMR",
  "key8": "381a5qeHWqT4mPdBh9yC62SCVhfTeCffxfiV1k1hKS6xHWKBBwRLaHzu8DmSbHtkFjEVNkpHSJnvLCYB1kPHnQ2B",
  "key9": "4AbYBUvikfd2R71X4GwtEHGG6VYDRbUBzyMb5TH8KXvk6dQarnZrzigGEUe6A35cyUCfe6TXkShZaCgxp7zHcNRB",
  "key10": "4JDUcuLPHzEgswggeipHg7zxKfXq3Ms18pURuXVLgUuA9aobAmhJTdvCDWys9sE8C8cZKWeYuP7RfYiVS9jJLDEE",
  "key11": "4WTuPH3u9i3Wsr7xaDvarFLzxqtQtZJwMSmTik4BfVgdM1BKGySFh54eHrgzyTUQL63eKDQEa1TEM4i2ZCZ2A1vy",
  "key12": "2hZN9jg4gQYccVJApGVzrkho4ANQJxExmLTYAPLtgHzoNGCVMgAv66s1vLRPoTE8tbUHe8cPveC4MGmcc1Fwp9aK",
  "key13": "29xJKm5FYxRGSB4B4ty24uFgwYybTtLhKxy1mtyXCDgZrWJvfnzfB8UScVce4z3mWog8urBBLjXhgkVDwKstiK8e",
  "key14": "64QHT6XcJ7wWQSG7Tf3sCytBJVgVJZs6YmnPjsPr5EXqhd3AHSqfx6xfSU7z1jAJB8K1FvAb8BLrzaGLuhqXh7cg",
  "key15": "42QP1n36nynm6y9hmMk3hiyGE7yBWo19hdhWNPC8vLqwRWc3vyn7FvLSHcr8W4bKcv926iEunFrf1oYLtXPWFwwd",
  "key16": "tXMRsSoKe2jHfdaj3NtEJoGfU2fd3MbC9TfXb4Kt2qHgPoWE4mRLDPkG7D5du3P4JEUztvPJZUS1SGKwSS4XjMY",
  "key17": "4Vp9AjntEGQzcvuVMhXhGySgHTuz6m5Rk6rnr81p9Tk1nNt22H9TT7sKYBSgFDFLNf2AN5q5dNtB3LMh6iBCLpmw",
  "key18": "Tqo8inDPoXNSDbLh8cMGw7jgRScGBobLTKMxuoKWg122oURSmhV7TjjizzwbP3iT2Mz6sqvCj3ZiR8oEvTQFbL4",
  "key19": "5b4vxQY1bqAmqLcPtHTKmDnboQFBdc1SJk5CH4tgX8jMsxhhFtqiQiLAJutidGqmzTtw2FCbAZmkm1w14jKV1dFA",
  "key20": "2HJTYKi4wc5YVbQMQMXGvFGb45fyxrN8KArehRJG3LHsxEhFtrkgRzb51jakYtyBQA1cPVy5ibsE8NU7DBB3BCM9",
  "key21": "4vry9n4a5SgY8B9Ce6z5CYvucxtn9NXeRmfdFpGG36vG3p89aa1JZoLnphzYvLoTXdLTLRisReD3T82HCcoSenNB",
  "key22": "3vDJ6HuwLrC9dKiYzagaF8HnZo5XibvuUNm29Ftc9BDg8YZwLQPcULqFWbeNckLTxSTGUZBv5qgvjMt4tbkhLJ1C",
  "key23": "2fLwvtQPx2geGaLEbTJr71N5M5tHYvsMWsCx7NrxpEGchGqJES4pT6cPhrqqXAFedvK5jrkM2JkftXdTA3WUJHeS",
  "key24": "3WZsHAdLtsZX7hSt18F5KR4SbKL8ZMm4oyzZkxfKpmThRvsNeqn1nRL6s1QkCerEhATh4WN4yXMtLMXKWLsdP22k",
  "key25": "4XeYBfXqDsFGyAbiQVnNPPBdaYTniNoA9y37CSsVV5W8ZCQZnGMuagPB2He4mMuwpRudLQXfhAC37eNASWQ7YL4j",
  "key26": "2RKinCzhr95Jjc5r5stGW7af8tXhyuVwcTjekmWbKrivNoMnaEKmU9FKxXx4jpktUhcuAqkPmyQwytuVS9gRfU66"
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
