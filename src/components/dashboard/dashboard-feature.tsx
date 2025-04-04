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
    "3GbbheD7NCZKc1tMs6xmeGqV5LWmFGVN8Xj2wa4djHBBrmmTEvPN2xeZPuMQAGWW9LQNkXibiWoJHE7rEgweZ5LV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "519iyS6sNeAteMZPu2CNEmay9w4ediiHkyvEKFV33S29eob4UaZNGn3jJEa2v2nm4gY2NW6Q8JQwJAbkZX7EphNP",
  "key1": "2anDe1rjWrGDhFii4ZwKCQbW5md4zwmXQUtzpoAP9ASEfkgwiV8SByh113t1HEpHSGX8uwo2ZgWgHh2hWs8ZsV52",
  "key2": "4HUEWFsYr8XvobFWJQFQfPKo6BxZTkAyxq6N8eMZdF5kyaYrKa7nHEtSyPgJGvGkBsEnfDwy7Esc8CC8GchvTFR6",
  "key3": "5j5v5vwEqc8qaW9TSE5h9bnSaJMtzdXpS9Z49JgE3pXBxEVt6qxW7kMvDocQ816QEPGSfxyZsghTD3xihNLAU7vH",
  "key4": "64DP8DNb2C4Df9iX2DzSiDvbev766JP16f2EsYohju13qu7qx3mC7dXu2pEoBwTPBEiVZRAHVWLkkLS3JNMXku53",
  "key5": "5nxk7cp3wUXaazTQW1LiuH4bDpUu1S7cjyZ2HwrPr7GbAzq8LnYF6u83ZcKBqF4G6Ee69rA3WSTrN4AzNdHRM3RD",
  "key6": "Jm3Pbg4918GHJZVqkUr9FzfRwf9Bqp3bkw7PeDN26RasFN7VpP2GAjgCUXFmLQhevfvGre5kM1mFfbZNvphKW53",
  "key7": "3vrwfaWTb9uhbuFZSXYXQ1jHtZZZxucDCK8v1d59C9iP1LFdc7no1wv6dhQhC1QDJzAu2S1Fez5Q5mfPzfZpnhu1",
  "key8": "4CjwndHeiMjVkospDcYTNoS7ynxmehnYVqDB5nUaqczVcoJqSeCGCbuf8qvNVT6iN9cPonxPAQPVNRHdYDZh9Ekr",
  "key9": "2CpKhWqmMgCxhhUuts9gr3MgwgjJRhBBVuykm66sjQ7AzKn4cYhNG5V9s647sUdxmFuPckRnsSeu5KymivR48pjB",
  "key10": "pqigiDnjVwYrARZWmUM93uqaJoqy6vK82FNPE8PsomBUAbGJs8K2LYxqqkMR26aZfCw64QmwgSgeBF6XnpSG5J1",
  "key11": "4SYXkR7UR7C5GgSch6ZjDHDzpBhA1bDqgnHHzBs5LPNPoGp8ngXY8Rx5h2hEXdivqTQMzQnaHSqM9qswPBgdoguG",
  "key12": "svKQDjdpg7o6rHZ9623oa1zm595xYgAJaNtW22R96PcDZogoVBmq3EWACvLqeChssmvwfoR3Norh9E6h7E93cHM",
  "key13": "4y1AbEkZUNWDhQ4EvnN633SgjnrwLYFTSRfUx8vxdji1F4B48vTWsfF4uThAmt4foUuuwjz8t3HHNRXc8QAm9Avm",
  "key14": "39H6mvEt9BRw5UFLVyCupp83TqeMe2M3sLH6GbKvBLwN5fbZabRziAqQSDUruYtxNCFZ87ma5dR2291JWi3kderX",
  "key15": "5sGAobjDvnicb7f8e6ZTXw5goYjbmbmmfhits26sGimHpekR1A5pGyxNDU28Gpe952a4duFeL4w9mL93ZVWaCeep",
  "key16": "2KbNg4SrUfm2U2uHJkG9ycddTRT1sHNVSpwJ5EKbU3P5BL12gHyLw24oEDsduVG3MHbMXRKiYZCAiPixaVdNNU3G",
  "key17": "5jPbboQa7kYMETTHtXDNCeNT4mPQy1E8jmr6CJY9PbFeNXo1z68jvUXGoDxeLCKSSmrE5xLS8P2WAQgt6TtGep5w",
  "key18": "3MGMsGuGoFBdSpi13xWLRSswvUdDndhpbHQJAcZg17GjdUoM41TNeF18XjaSTkPvu4dmi7RBeVbiK1X27YF5seiZ",
  "key19": "2gD1Wucd4pdgRPAgDyUiQAWYaUnHURQZR1q1Q9pSpo8LBgr9xDxuMwCB5NAheZzJV4jBLNQMLjt1qHn8sRdqqquG",
  "key20": "Siwu449dRFRaJ34KRQeV7KJK3H4q8eamBbBib4VpQuB2jJ8x85ZJQRHYX8r3jiY881sT3Bweg1hhi1SERydMDzt",
  "key21": "2BNQWxify3on24YvsgdNnX43vvM4oCnYKcy2d8sUaHw7Jqm59HpVCfeEqbx6cy8f8wheV5chZJ6j9B5MQ3A8fKni",
  "key22": "5maCA3KkoqKgSKXBXM4kuBtdEUNbrGdLq92oU7KTbkB8oXEGW3K73S76UauPc24FmZeDAwtkKLkvvRCcjwCAA8fg",
  "key23": "3LCCJWEzTyvVCDhhRT2XZipRExGvdHLScWMQ6pbdyAkdtTtFPvCVGsEKahoLMqhTyfYxv5zicgLpVqm7tmYJxGmv",
  "key24": "5DtAh7bAY1VjNGWFtPbENWq5K2QzHyD2LxXN7mY1S6nm7NMfYCZ3H3sq13hxBCaHC7Cm3xtevPPEf81veaawSwZ8",
  "key25": "4MpPyZC1XXhh7W2Uxb9G7aCeM3YT6LUgxwNjBHgsEw2oD3Htbf1fj4dwUujk7GQwWaFNmC9nRxXMhvUxWPn1zsTM",
  "key26": "q8YKnEiW31R889vSe1EbFHjAu18WEoCdPk6WGe7BZReKH9vXapxyrmA5fDQEDuWSieHkruti6xSfoSBkWoexSjg"
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
