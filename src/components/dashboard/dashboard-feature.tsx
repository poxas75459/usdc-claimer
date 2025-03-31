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
    "4CuQ6RSJSPRS6CdBEs6tej9iQviEmMCdLQcNVv8zKcwNuYZuyiiQpfvPLvEDPV4XHZ6BfmqHmu3PNQWTV2LbwCc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uGX7UraJS3eZ9Rmuaf58uUgFyaBGzxrWU9pnaZ8EPmwmUubgmKf3tgTZiA2Qs1FbTsrXTm7rBk8R7pWWSh1XGvT",
  "key1": "61nAA5CfSA5XNfxFYodGqFTbWooLAjmiQ7ZaMGUY2bMXNkVGeSREwxQyoC5txXwm7Cufk5aKxrhZutsYhajtgu1B",
  "key2": "2z1ZRx1HSji55vcCXT6QqPuLJS54u8mmdre7wF3h1FDV1VDLnH5TsrUFSi6f9WubGUGhFP5ejpFBkFYCccQVkMP6",
  "key3": "3ppHinfZFRoCBRDuxwZK8Ui2AhkZGKuF7EM59dv8SMewG3XRkgUvaNQKEKYHvDHSQhFzQizMKL4jCFyvZDz2eAPH",
  "key4": "qtxj3sZBCMSfpy83hvTUHUqcN3FP2uYLRZ93zKgLTieqwWzEgNrGqPMJ5KgUzQqisnZsjVhRe1S33Ckfk1uDzdf",
  "key5": "T2SQDtp9a3roScDU9v5jG44eWTn1s1VAQbdciHGuindN7b7rCCTrJPYuDywepUB7nHjvKTozb1u69qjE69PN2eE",
  "key6": "S5EEFZsQD2PAkLwYVcv8oYGxF7VHDrkeuff5Jbo2NdtT973auiRoPuTd8UHmjbiMtupqUrEQg7Wfp46Z2wNkHkw",
  "key7": "4LXWrh8uVzw4TvgGJa3psCyyuX6qwdS4MGwCpckGKS9FDUa73UsPZLYS8vo9NCiCEnPv2Cu6ATorDRS6mP6BPCrc",
  "key8": "2CdfxWrwY6s8zfhk33T2tmnzryajb3xrwmm1cCxxPn3Ax72FqLihMPVShJC73eYRNKVNNdoduMYa8VRyCNTcbD6E",
  "key9": "vXVZFCVyTHcG2TnVUTeJifi8bmxUePt4DsXMEko1bo2qoZaiKyFPQ2TfBythJgcFx58H7YN9AUJQPbCsm2iWcpZ",
  "key10": "58UGu1GycLhkHzahR7GNocpskQaV7PQ3bWGQ2vzUkyRVi1zxrEuVu8MrPoxLSSiRiV5ekCY7MTXMAvpPkrEGbWDJ",
  "key11": "5u2Yv2ttXwxzHXyiBdj8N34WKjeYqDbLbCe8dXy1fZvezHWFzX9unXfXpoDjAKa7GcWj9tC745vr7bDkExdGgEus",
  "key12": "FJE4Dg3MTmi27bBk3pDV25nTk9zL7F2KG9a39HT8ENX55LKeD8eGzDaigpve8cjpGQywzABKM2EitxzEgGDnY3x",
  "key13": "hxRzSGp3CpdJJJFwwio1raY3R9QXT12w9Hsj1jSxYFvY1XCxdnGkxzJZPDhnMeizMry8Q3EHno1PndULCYzQNKb",
  "key14": "R1QHZBUcRnyLfELsvPEJCUSusYmLPp6Fd5tXRyqDAjoUc87ruCHXQq8ohYpWVifhXKRkJ8YDtzxisb2z1aRrq8E",
  "key15": "3atG1zMA1fdVAULYXVhkjwnvtEHpEqm25BcWAtiWkT6RZwwzKDbahYebnyB9gUbhuPtZ7WF3sWNmFhnxhaxeS6N4",
  "key16": "2jQ7ZCYJM66SswuiKeoRgZteBmrwr3x4XFFuckBgA3pE7a5ADTiAgqf6Y1H7duy2cHgDk89dqCshZ9Ypzok9iK3T",
  "key17": "64wXiXf6vJV6ML1UsLL2YvJxxqjSkjumrdQuFd1VqKAm48ZqyN5AJSwP4LXXZQPjRf9w8EvwCFWJy38Ho5KDZGx3",
  "key18": "5NhZC63yKtEeAGuCVA6zEATBjfhqeutrG1BvpyivDUoaQ4PPuixg6W1Ys1zZHfE3YHvyuK9Zhzd9UKE9nDPTUcT3",
  "key19": "4Wvy8W9fnNVeenQUD9HNs386CQDMUsgqQvVP76iuvN7xxkN7GqXYdHqZpLqScYcbTdbfmFnPn8CT1wDmuj7BD2pf",
  "key20": "2cmw1NB4jqc7KT6g3GmSyUnSF7dYGipLhCWezevCL5czzBbj8QC3H5DGTYaR9TS3kxsy3sZ7d3PPjoPdeZUAAPSc",
  "key21": "5FjSzSmmeRPgPVkMbnvrjgr9nmvUwz3ds4S2Bep9z1JpLgHthodkTDq32KZr5VT4Hejzz4exTYnkYUvh48HgVGGp",
  "key22": "5e9CGCrjk9zAzaGDy9bV1p84WSCoDgoP7nyqR7tD1E5noQ4LByJ6f5hYCxA8QcdRzmH8Q21WDubomN6E1D6CawAH",
  "key23": "5DBxGBS5KLf1Lv5TU2Xp1ZvnrCr6CeYHm2sJTS83qhjG7vr8EumoJzPcx466nsZ1BeMhP397JheGkpMkXSTW6cRc",
  "key24": "uYiFYh2nXhaDwYXo4rzz8GTe5HvUiUsMAakh683U7ozcfsBsQo7xo3aDUZF1Mbknte84qqzkcjLaw7JAzzhaEiz",
  "key25": "4Wjv3eACjs3BP7sTFxY92e63gwmBQP6Vws2gpfAHHgMswSYBjEy6eVC3iZ9ErGu8Wr43LN7iHCnPiZH11HdDjeqP",
  "key26": "XDUAgRrHQyTRKnxC5HLQqsSGCpAaUp4ThXhdCvhUBuASCqB2HhAYo54F95q9jju63QkkSuDuMTDSvmHzMZdEWXH",
  "key27": "4qsi8PciVt8Db3EUCKCdHTyAzRHr4bC7V1LcMmVxdHn9YJyUKqZtXGsup5M2yzhNDeeNNAEYL1mgvBZXxZqk8VWT",
  "key28": "4BDrv451rEpKa2sE6Sse9Eg7U6qCT2xSxHgjQ4QUeowrC8GCcix9tHad1FiA67z4DfpUpWaUEovWW2r1CdB2KLaa",
  "key29": "58FxaHT7W3YCAJjhTVYfDGP3MwuNYuQowxqgFCf5o331U59R36aicWL4KKrzTEQS5dfuyRTNJYxcHbNF1dSg1tja"
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
