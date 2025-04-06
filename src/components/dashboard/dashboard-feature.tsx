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
    "4t2Nw1UJL5HehJPQmizy4vmJjq9YEtvD94pkPWBoR1s7AQVrftVEJpnkFg1ZFgj3cwXZoman6eLXnxCmtAkLKH8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RiW9M95ikyfqWDKM8A7kCWjPGYB1ZnbCvV6rPWvSDrhoZgyDEgwEd1EKNg99o3z2Pjrm5tRqmx4f2ERotzaxLga",
  "key1": "58dtvvYjWwS1Tg76eAdFTqxbCoZM3k3TfNTCXxJ83PSHbsFfop875fNmuhzUgJ7dYKzYTWM3Y6SijyABXkas7KJd",
  "key2": "5N4NXNZpkew3fznKCkEkoK9qoeM2G3ufSqH2iKBJc86zqD5qeyvRaPv7x1B9WArHhBZbPtcfouGaC7jSAUTmoLQu",
  "key3": "5Qc5Zb47ntHtrMd1H8DZxrryi7VWSFFa5j7tPXaEP8DnN7z5bPgL9DiN5EE1NUZjrkZPXgHpgHusLyW7rcn4xEHV",
  "key4": "4vVAS72dEVasSioFRHUmmsmgvatB4Ec7ErDDusxDAfxnHFBqZ546kmua48CmoqdaWF3N6FkqWsrTRSvSNisqX31a",
  "key5": "5cjFv8kBdFhVV1eq8AUFqJRsjwzQ4j1aZ9ux3aoS8fP4ZbVv7yYXvrYqGxDqpFBC6KXbxT6BUEkH7NzGCNChkY8k",
  "key6": "3z5WjdLTAjmfzgCpZePPbgUSL9um77exAeCsbnP7fw9LA7rtWh6K3CMmWTgRXE3Ye8mBCnNiNB3bJKuscTgDTXVT",
  "key7": "5ygAcAiPirGfWXVwtnzJzbxZ7jJyREARqosntEFSYuUKRUUbegSAv9z7K3GqJHbRaHmwc46uWtr1SDTWnz2323B6",
  "key8": "5zujq4JCuZ3CmynAb2DzNy1bmQeFAWYa5P3wYU4eh5Y3J1bf4NDhvmECcxARcW7dKZnU8nvQk3yF4bjrB3WgPyo6",
  "key9": "fS21jBAUpws9FH8i2FLqfaBNwxxZNNcykaKtDuaRyiNA8eLdRymJ4PPdYZKgQZ439j5u9c6VjrPTCF15Pw1cznu",
  "key10": "3P8xrSA8H8gbmxQYhaCpsenaV11HRCCV5Px1CDUTFigVj9UcJNWG2HzwURFRU7gbErrMcaKuxBSR9EFu4mnYsJpj",
  "key11": "4UYEjApGXZw8k5bg4adJ5igd9nuzCLwio2WVJzaTSxVvBurNvK6xbDDft8HZ25ST8ALRjsxUL6uZymsoRRdttTKj",
  "key12": "2WrLBeRd7DzGZugHnQHogexgBr1XxgNumsarHTp7wcZVnccFS8W5FEift2v5DXpkdF84C8cs4XnVqngyswwCYpDh",
  "key13": "17uBYx8iDCwHNuWPgCdkVeD8ay2sWdZoWaRw6sxGsmviQZzd28QYmZpAtFZA6UQ6GraUkf8pCQM46dwjhj9km5d",
  "key14": "9rzi5UVptF6RXL7P2rvbxPJj5jefYE6h6nSTuaBkWwQb5EDggEujBgPRtRQ4qJZ2JiQiQNyb8ni3duxAuScLnzn",
  "key15": "349sbsp6dhbvEGVjebkqgkX6WfdfRRaAjXvJU3q3KoExHSSAP4axhruEesnuXYqu9jXL6f7NrsxTohH4yYptLH8R",
  "key16": "3ebkVVwBr4Y7VQRd7JnRcfktdiaUASaMReh1H9ck68ePTMVLTtXaVRNN8NMeGijencNmMvcvN8VmGid5wBLs138R",
  "key17": "4cR9pjWxsMvS6qNQkbHFjWH2mbp7KZk7KipPJiMGxtHTRK5yiwpNUWapYroQ4vkZfzfiPbJsGeQ7VBoY9L1fzd61",
  "key18": "5DDcdaNDrEPtcdFcQjx8qjk21LhQ1x2Wr7AD2jDb8gQFuGNf6mhmFSC6vkq5g2HYXUV45iwcoQfuWhErJYoUBMKc",
  "key19": "4JvLCMB9ZAEdNhUEqgwFfEawXPduLVVdP1ydMgMT9caAarM7rJJ3ZpjTCNn4hzaqBgcibwkLFGhsjqb8CS519EMY",
  "key20": "4C2h9h1Ge8VDUvFxCdd5mhy3RPB1dhPtGEvdPxBvmPdTknm2DgJddsZY8RCFrH1nimCrBrMjry9PSmSiJcXY9KiP",
  "key21": "5BY5BPt7RJRhYXAvswF3YQH2bUR1fScN4uVpbKHU3hzZ2gFmXhxNzqangoJtW6sud3C3FrBLkwritZjkCzhiSucM",
  "key22": "2Voef37P652QgJ3MHpAEKA184PXq3QFYXCqmGFFQkzLhWSRLybqKcnCcS8BYcpwyZ7KF3jEmmuYcrhYaZGEWNDpM",
  "key23": "3nWNe4F2RcFZBH4B6diNgZq2UmuTM4CWouVu6hmXDSreKUEMJGLb9qVaR9sLdQ6L6tzph1HsU7Z9idkLbnjrDUHM",
  "key24": "NddkiM9EdNrcTtmEyBLXqbibU8LXj8xmsh3ReHqMqfLwvZvh54j8jZWU4tra1tiyixm6PRLc6WE5oJ2UAdVNqHB",
  "key25": "2ExXkFrmd56NdhYYsWfSxdhM9m9fqXmKv8G4wHCNX4bVDBVynMMWpicGNLj8KxWLz554SChAxXxyqFSMp4X5ZYAt"
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
