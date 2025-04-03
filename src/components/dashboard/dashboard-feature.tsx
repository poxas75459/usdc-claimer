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
    "2KRpPByY66UwfQ8v7JuJER7APkU1HWkNAXa9bVigcrfMDXyZWKRk8FEp9W69uapDFdJWHmSDiW52k61bL94aRwg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ud2pPkSFsHd7Mthpq1L6vBrkopW3y2aMpCTbLWJBxS7sCCNpoR8iFehtJgQCftkkFRK7HvsHyb3Mrd3M6crSSZY",
  "key1": "3Lxic8i8zYsxQyjUbdbjyw4giCbhAH7sY48uDDFvYi18FMickt9Bd11GZ9f3H6QRMYSiajBgVCNGspmMVqukZ4E5",
  "key2": "3nVsyKpbBynqYURtGBGapFvP1HgCEZHatASPLHynfGKxzwB6VjHUJrXvDW6eoZPsnqR3p7y4AeJF5AyAJUZ7kgdP",
  "key3": "2bBW3PZqCthUkUvu8bdGosvL6wairC1FnQQC2bmswaCdwSqtKxqE7HZ4JQy9JZmLp6gvQr1UCnXGeJfYY6hH8ECN",
  "key4": "41bYNY6hg4zve8wc6WPnhM6y9Z5p4jgYo3tZSDRr6SxdDqKGWWDoNFfW2UvXz4erRdnZi8hx4Vc5wVEUvqV9v7PV",
  "key5": "3ocQxgtpTtd6pWU2A6YD6wo2XfMDnes1zs89ZtvrpNkHwiLGCZrZ9VFzXkaFB7mdYBffwaSpbyptuAwoyYiGnVTq",
  "key6": "7p551LtSsf5ohaZg9bg8wjezNQcyTKYDoz3y8zhntUzcyTHxg1E95JZKMCPxu1Cd2Ve2DbL3WXNDc66338cyUKb",
  "key7": "5LeXFXsVF7AP9co96RgpTgGkHA4qLgavXYy87S8QwBejg2h53jomMpNnRTwKXEhcCqq5w84ZbXWQZ4NzfRZ5ARft",
  "key8": "2ePtfCgK6soEKGjNDH2SPNWXmjAo1EfxiTNCKqS2jXMPoHTY17s6CGCPjwcN7kVZzUSpa6azxCSZUw69WKM3Hzx",
  "key9": "5msicFpWWYwQV7mSfL3YppHgP3q2J1UJWm75eVVvw1u63knFGFYZfsNcG3THJxvY82GdVP769HN9gH171bhVwzHt",
  "key10": "iNYGLYrMtv1NxDnkoz7t3yXGnUw5F1AqTBhtgkNT8TKYUSmHpVK4xrJB7P92V4vDU2GdhCF5wqZG5g7sTEr1k9z",
  "key11": "brTE4RkLbuHTS3kvgR961iMYkLX9nqq4Bom5R3tk38WZp44xgQhppmecSgWp5B7ad31dtYyAas6xNeEkjqneoqH",
  "key12": "55Wwu2zzrC1TCshMY1xncyVA5t6uWRUHTKux1aHYZ5VVfDtCNyDQaSJy86zmuGrt8ActzZ6bvMnMb2TMzSe26aoe",
  "key13": "5kjsVv9v5h9zphzTf5dX8MpEZCxZVYNwdAKZPYdL4KdjsSbECoeKB72av3R3aT6btb8NVLkza1CFRApAT9CCiauE",
  "key14": "4wBnNDddQfd9wKy7mtNWE66bUWGiNBSWtHbncubzsfLbvikSEcZfZgkK11Bmv5adU8BN9SSvAUizwvZRXaenS4ur",
  "key15": "5B5Kfyz8HnRtVJfA1EEi8K6V8xyUebF3dSTgtQrZXDFyg4ouefZmkCtsPhn4FgZRZbaD1v9UnNcGeU7yo2iBGNaU",
  "key16": "3z4c19bYrtTaLrbzK4yvd7izx91u2HDjnYfhasqgzJ6qinr3nL9ZkPM9CKnSg9rt5QwFb9fFYcxNFNC4Y8A25zmJ",
  "key17": "632hUamozbZrAgmGRxUJF1MbGYfJ7AD1FdYEZDD1NZ3mde6i1eiBfZZVWxcqWMNgy9HUbTQJrVSA3d5PMFnww2NT",
  "key18": "2ojfYD7hdvVNYREFcYrMxXu457436g6AjkLJNkYdGr4GzQ9zzdCNoX4JrMpiCTmxQqz3MbmnC3pBdasATJbDUxEP",
  "key19": "3abLHEQ9vXbpSkhRPTwnd9guekSLDbAkA6gjFtLv1hCEbRfymES68Vtci5gEYr3NyVGM7rfYVZHuF9HYFaEWzS8t",
  "key20": "4P99Nc4WpGpUrFKT8SaGBEzcFuQSU6vQ8ELJmQkC9DAwg9tChELMXLygscYg3LFQTgfMCp9hZNfv6VApUwyj3jWw",
  "key21": "3YECh7LhzRvqSd26bZ8XWntMBj9mhvyf9Md1AuRUFvGzUpn9CTthZYUskzakwoDH8RmXJeitA1TUgnB2vCyJZj5M",
  "key22": "ziAzgWP9sj5aDKzRF55GJ2m5F3Xi6iqYk2f6FxH5yE6Uv1itf1sVoYkchLAUxCGT5FvKkkQunxM1AGjTRzVvfYj",
  "key23": "52AG2kD2mDkPkqPNeqwXQLityoLZLDo6FYweS8WzakX2gPUtspdJyaFvRqL8P2WgAN8kkdSB3k9mXqsDD5bZ7GzL",
  "key24": "4CktsVPha4eKciaQcH7mNdT4pwvCKznFunHxiszUKGAMbyDa2jBkYeQ35bFPkfHM2z4SSSSMMPFuLBUSB61qX8Hn",
  "key25": "2oL5puMt4BvJ3xEFoMcjHiQwCypRhMiyG2xsFDYxxGADMFparB2V3PdcqBeEk8oep44P4upPp9a7yyr5kieBvaXa",
  "key26": "Qa2nXjc1mkvjjQ1pjC4czw2c2T43SMTEzCTfWZLntaU32CTMP85VcWR9RTs9ZRbGMTYyRqdqyzGr8mXDhMJcPBa",
  "key27": "5seVRQB7NixTdey5NkRJmrqktnfRvuXYpFp25gLnDLrCECri8uQ35iCKaZMiXoA7CjVjYqNPmzYxCPS34F8Ru6fA",
  "key28": "4iLQQXX1nyWX943nWuFw8FbntMg4jx1MB7VgbkECdw12xRBffLsq2iGiv6tb8zxy1Q1Ni4zG7yi5QdMGVnLMRGJo"
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
