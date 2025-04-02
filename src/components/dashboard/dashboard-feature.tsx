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
    "4EChg2nZn9MJsVnUsgL1UdUzmS2whAkPzSSSoZy3GEjxsa9ie1JAKiHH7Un3tp4GdHZLiEKY9e9wsjXvFPyBGfcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EZmV63piLSpWoCojDFkGM4JkuVfEdzk8wfzDk6oDRq1gfVbuGXa7aejdPQ1u53Yi5yyH6UYdpb1PkjZnrH9DCiM",
  "key1": "5CEexbHiaAKQKSkWDFPTVdyNJK2FGZ9QkRuRvBYeiXxW4tF2fGMRdsL8UyrnqgGzvC25oHQyS5QpeG6v9Y6skYUj",
  "key2": "2yuTsmemCwrmJTiiNqmZLHLYqHtHyRG5zuRfDM5GjhMGd2QhQrpnCyxrdnwYU5p3ucx7JhKU4XS5uPP9QP1K7gWj",
  "key3": "5L1L8xLJrm2n1gKGZq3rDL3Ea2vNVfgwzLq7vnsQFUJKEtvS1XAdSun1fXXEqRxAmhuUGzx4ZEn3PFjMAfgAC9CJ",
  "key4": "3pnLNpeehhQsqLgANV9MHXMiGNg5Ev7LFzYEoBkYMdMuoogWcsocSZjxu9MnyqcBFaQWs38jFLCgSwuP81y5nNcD",
  "key5": "51WF8AgLqY9QbAo7AscuxCgpVvZ4M29KT5kgbodbT53n5mynbfXK8eXyz2Ycri46DvBKods29mAGTpM5Z1Z6D2k1",
  "key6": "2eaHrp7YKavTPWdoeoXZEk3JujAJPhdgYFXhhKyDBzYfpNmimaavXBdVWJMPLJh5ztXPFgLj1eUUqiZD85A67zoM",
  "key7": "972mnNzvyQwNcF5BEdVfjwsEqRok2QUNmx6WWyHg3YyCUuwx1W6QUKYr8Mnradxz6pRuf2LRvvZEWbnFw1QfR3F",
  "key8": "2UjPgDqUfCuvpaJfhmKUbxheCrZo9KHFPXiKCotVvGEPeqK1qNdVi6WPmferVCZWe83YSgfrnaKazYvis2e9TMT1",
  "key9": "5icE3XfkRZxchtFyx1dS8vd1NjLT13fJsDBz5x6Ybr1AHcRs9tScG3VGYV8uJW64PexzK7GgWecm4MtKJTSAfRSV",
  "key10": "46TmCfGCBtpCnkNZgK29haFjAMnbcf3sXe5rX6B9iWqTLvbz35NWunvtr8tkzhydnQVYAJBdhUswphWsjnWFg6Tv",
  "key11": "veyn2aST4SZa7urgm3AQbyfw8yjVp6D98Ey8XrugZCrcSbCSrcBtpPabzdvJJykhhFBbsrgsAdZU3Z5oskfu9QD",
  "key12": "37qBqFTvryFDErCXjm1z9MMdUqMGmmZqPkR2Anj7xKRojVEvJGv8Vocj6WFcLYNUhtmqbTwEd9BwKXzwiaza7UHg",
  "key13": "CJQcThv5UARfQKZjjEdHjakVqE3Db3wyctm7XwLScWQkgU94JtEji2MaWNzcrUZEW64TWth8Qb1bE1bGoCeGJW3",
  "key14": "3jeiKPuT9TMCTH1BDoZ3uSkdaa5fyqzqfg5seA92StFGAKWH82zvZ22FyL6tu6emi9GNSuKsz6Xj4qcJjgWP5RJk",
  "key15": "4wAw8gFsVHUtFjFBpQ9vnL3RJusifRvuNUKQZ1gmAnNHvijNkuFgRvNH9w9682zMLhyShhBeK7vKVoMKWumTBo8Z",
  "key16": "5NVadVFpjoTxU4pEdQkhaZyrxSPAFgNvU3pRCswWDaxcnNHchaVPWCPcvBFfy76BsHe5Yd3znUa86g1Euvio7zNG",
  "key17": "2sCfnzNExRReNP1XH7qynRDQfbTGgGpMxHrM5i9rXq4ka1hygiX6yQ5NZzW6NVhz6wfe6EWQE5Maw7DGDXh3FdpJ",
  "key18": "2TfUma7nuBpYdBoyTMdzcWbwk9AJZLsCzFHmWDwYBtRFkNKMmE8Mdxu8RoN5PNtFkMY1hryBmUyHosY6zQoQ1NMZ",
  "key19": "RzCFfjtxb2k3NA8qsMrWmxff1P4YdJm6eeqqnD5qMsjxt1wCbRY8NPtzpwzmWQhBXJpY1sbSFMB8fSBfJHknzWS",
  "key20": "2x5jeikpDSrgH4zWCyUXsqBpW5ZkGTVMuuB87zd7wnChvdBZei3oq4EdHiNTWcKQYVvKpf3Ri6LEFEdteV179DFE",
  "key21": "3p8FssuoKDsH1RdLQGVX9kmvwpEiwZw9hLjGKCrEajiWuT9nKf42WAjdnFuDgGaACyp5ZNeda4CDdQ4yfG86rPfT",
  "key22": "2dWr9mzV7JhJroEzWBxRWjKPDNYPzTa6FKQMvmVJowazB9Vbmtv8NV8zN2LS16Bgwcv3JYArBUPCGAKM7Yjfpi6w",
  "key23": "479ri5yWeEZqD3cBkJ7LpkjCYQBW1j7AFczZADuypwWR8hELeTZCifbDce14SSRQRpX13RzJD7UwU58SUVbUbF8t",
  "key24": "3D5xXnGPCD9ttuGEv9ZJ8K14QMTxfvpj1nfhwb3NjhJqLqVNgyiW2CKMZ5MTpVp6HhkFKY58E3GkybFRSR2hLZAH",
  "key25": "hjVUUL4NktawQkwhpAi4r7nAHrk4q33GsYwF6mQCsDztUv7TwQQ6cbVDQ2ChCXWVdszh6zSEgkJFuLVnAJCoJtT",
  "key26": "5P72SnFgVCF5NJmnuX1tskrAXhkW4GzCBysQwCohxiA27QA5gn3dgGESUwuv7JnmgFDAXWuAVGaGQ7MyNZKSys4o"
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
