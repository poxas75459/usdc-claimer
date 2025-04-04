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
    "4dg25oeVqP6zELyQ8ERyqGCK1WmBfSWVaFYeMj9NEuZoovV9t6c4v88GHxijBKYMR1ZmqsKL9jMMsMqFDvcqnp4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ogA6yXy6zTCnKtAKveddqAEer9MpAfXYrpGDaX8tJYTwZERzR3FB8RZvP2tg69umwLmnsZUesi2uVEiwAXPjYf8",
  "key1": "4ybrNA8NWdcDHonPihK1mAFHD7uQ4FMXUaUao2Z3Le1HiXzGXZRX8rvRzpiSHyuojQG76z71kHajVRR7oGNYHkbK",
  "key2": "53ZGhoMrxg6Jj56EJ2AUCnkJJoLxwGL4NUPrbVCKvhJS4LHk5Kjoh8QwSt5iGPr8bcubyKigKw4D7u2mn8MaxDgy",
  "key3": "2iCE9fA9KVYYJtrjs1v1bN1qRtaQPh5AtmVTfChrUa7ryZ5CpRjB5kxqTu481PfaieQeTiqYyNa2jCPrZVcdzVBo",
  "key4": "4R7UxfWrrRCmGgr89boVaqLqNELPQiePhKpca7BL5aPLrn78kZxs49948TgcuutooL1ateJ7cMeVVHwuHVzW7pRt",
  "key5": "5n5CT2j4LBzWH72y4ftV5A4gxmrYfaTUwoAGF17mfneqhhEcwxEo56BjcDsEjn4eWmtAeq1ifrVgrz6y9zdraNGF",
  "key6": "kPpXbJKWby5Bj2WBGhF3SnN7aXNRRYfzxTH358ufvDA1ym1hTdx768QPSFHHTFq5TEUN1boF1hw3VeZYTyQx1oE",
  "key7": "3cyD5ULhptAzuTsQyWbochUvbr2dm5hMJtuMPd1WyjZRDRefMcDKbSzRaVuHXhpXbDi1Ku1pratnvn6bjiPcjkze",
  "key8": "5yNd577JmaMzKKjXQVwkWj6RZ1HMm4htK8aPQJFxYRi29mQTe7tFCGyTitcgVFwxK1PxxQp3P4Z5XJWnyz3Lawu9",
  "key9": "56pJnbxtxCNjJqgC5xp6asejkbgfzAwSGpoLiP3UZ5yVmxUGrFJw7NigkedBxhky3CnYVusAhTBP9Yp9iqo6toms",
  "key10": "2MVbu8RuCMXcWxzQAFCZw9u4Duf4xZ8kYhF3qbMa4Xh9TqzXBhFyLBFFvnDXa1YCF1SR3rx9kTiK1REfsNSGrPZ8",
  "key11": "3zyEqFewkynbZpvw3G3ozcQJMvkWXL4viK4AdumT711r6cJAVnurMoaQME3jnmvj9ed4g8tgFw9g2CsVpMYC4NaD",
  "key12": "2bMKtDJhj5bN4DTi7HdZb6CF1oVmtUWUdyEZ8FT7tg2Ln1JTudGdkPQirtk2dYyQ1z2nYCLUMJWYxuGTVsfCMpXG",
  "key13": "2ZLt35LbmnnmsZHrmoRfN9jwgUzA1pZDZYfwGAGpqkuSMsnzuik9RZoKWWmHTjxn7QgbTh5eBfJZSnxMM99baLSM",
  "key14": "61bGmnrVDQv5FcQSJxdbrqWmTfU8FUV3hDrFoKQFGtkm2cTMyPcGg5vq1cCWfdwmg4Rw1zPjHfsRPxgLZEBQD1m5",
  "key15": "skftGy5SaJATqDUqemodQxWVYpxwYkkTa2iRfDsBPn7tK8VgVUPv6E9EJe8B2t4VRzPrgUGoPYwPUaJ4WQdUV3X",
  "key16": "8EvWpLdgnxdx9Hry7UbqC1XRygJn8K6B9Y3pg7wt7ZeZzvngG159SzXwbJQ8ZpuZ8En3YdqM6wxqcoMHVvXCfqY",
  "key17": "3ngVCKwE6mcsQy7UZSbrK4k8m9EJ6kVZ7uVHiZ6RhVum9DfVt2FXUFLeygt5ZCtbVdT7BGGkLa6oWzringZV68Ew",
  "key18": "4GhqocWuYwVofQdfX9LxPakL9bhYDgckSoNy2AH6kHwddrC8SReFXy4XHxjeSi8nPdawxREjUdz7k1kas97sQJjC",
  "key19": "5fKjbuFDYnKg85BCCMhgubnJMzx6ur5ivsCpLb5veNUJtsJnoaiCXQJkFZndRRru3YVGP9tVV5ZuGozauf6qETL8",
  "key20": "37Lw7Fayu9RoHoNXnoTmgY2sxcyk4jctWncpkTsTdXcnTAnYecwKjzm7CEsdUafQAXSkQqVf7gqxRKUrmCzqgQ6G",
  "key21": "2FxXpS6bqZg6mNxSAeSuXsVboazb9V4zQ4t8CPZ279vzdVCSzCWTd9a3Aboc51VL3MsNoVtdTkoQoCyhFH4EqEB8",
  "key22": "4u1fyVVYXHSHATUxvC9WnUGh8cqKRpfLdfGms34pyCdN9q4XAjYey7ko8k8FwnARR8PYPsbGmp3tJnfvDKxVnsyx",
  "key23": "37ohFF5KA4HS2arMJDpppkCnEKtYs6cn1iiZZ92pgaodu6h62GBwC18aTSkYhnxTWbj1oratUHAbTGMmWRrLS9yr",
  "key24": "3Pof1vg2B2fmQ9Yg1zr2TJA67yqJSkHGnSo3FbFZkZJ3GvXUSw3CCfU7phBX8tnwKibTUaBXwu8rdaCkdxYigonf",
  "key25": "eNFvcTbQcyh663JakRWsfBa5BmZCGfj55QVFRxPSGVF4z5Dxd46tyQg9n3GsriouPw7akXiL3UeEFgTdb2cgVfm",
  "key26": "4rgvZPdgNN5AeA2DBdVY3ScaysEzkRBSrYeZJdzPM9d3SNX3pFqxssjDB1fUgrkayVVLpH2VWSMCadW9cpyGdwNN",
  "key27": "2sVQ4bWjEKVKxmzoo1TMQKEsh73ZKxKxejTMRFUyePez233bEHTv5u7TfUqHaPRfwL3oiAMFrep69JtuhiVa6bw5",
  "key28": "FU7MBpQ9qfYK88tF6z7d4UvpJXuAJkrCGUiyUCjpZow5FGTnPTVdmDRVT9ZVMhLE55hoyr8P9B3WFXhpk4W7qkR",
  "key29": "2JYb817D8VMTGi6zhY31Zi7Cy75xSiXtH4qMW1t1kFr1PnQwJVLcZddsxHzMEb1YhATkP3DNTwcYZSPrGiZ1d1VT",
  "key30": "qTsydsdQVAk9GY8P94u7PN8bwLmYjfmBCKink56y1TcFQ939rEE77FMxLoG7PVnoLdsKZK1nxWJc94zoMJLT9Qc"
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
