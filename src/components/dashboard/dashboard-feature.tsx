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
    "3RGPWxsQFbFae53uHgf4gJpxXF8Es7qUQGZ51gwR6VtVyrj78rczTBdmsSW7LBYifLPB775iLvchPNtKYE5up27z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m1H7eDXGoV2TJ7wbrhyKPqwZvCDNvkmaXGC4ShL9ByHjbp3DmcFRb4unHaAZw2C6sUL5ARcjRxwPfRAx1WKt2i8",
  "key1": "4bjAfnXrdwJnhzXT15tnDqWPepFoXAi41sDZmWqPhW2aKZWP8a3UayzUcr29PrGoCo4MDf4drc1BBRP7wYcZo23v",
  "key2": "5ivWC3DSRUTe8z3T2kL4tnhZ9e4WraZDSRTfM8wD2cGg9uFrdjuiv5MoFGudg1892LVmR78uoDat1NJZGNHwHoK3",
  "key3": "2N8KhBDjHqVYR9iazKHLQtUc78pDGvFCusAajL2BiEvKBBXSyeE56PBLm4XcxdhFAviUwuKbxejRhsidYSZMEdfr",
  "key4": "2XRC5ntwpGeKLpmgxiVfQkczcdWSutaQBa9fpRYyh5v8dNmzHyW4hf4Aa4ivCgx5X1wB9gjkVg6HWsHT2r45TERm",
  "key5": "2D8ZZVtcTumCMp5bPGE1hYCJ5tUt4mXWQMqYM2M9ZEb5veNMw4dMGu7yQeLnFk1UVBBBh4HCx2MSUsSgjbDRTmyd",
  "key6": "2JhUYzw9cvW4Z1tLLRYgYzMkZVNrKCw6Hrzg5jacbiDAqfzCLXGwdjXzonSQuaUoxQqfcoNG7sBtKKSXdBBmoh4Z",
  "key7": "63uXqNmED7GEskAiCJtQBaq1c46g2PCm2jspMeD6tN7a3uvswd4mnbCLVhjXxCzj1sQoL7Tc9N15gqMSiwd7F2s6",
  "key8": "63KLnq699dCTnLYAPMwz1q4XCdFtcD1Br9Nv42GgvTzQJ1AuJC5wgGmJJwYdn4migTgFvjNwpgCGrcM1TQkLQacK",
  "key9": "3xKfoFYkCo7bNxsFxHu7GZnUFShhvwrPqu4Gzy4SJrirkagKjERatzjGEZmZHRBxMPbR17Yc4QajKDYSpTHfRv6H",
  "key10": "MYRSmdKiV1hyEMNuzs7onuHHaWjj1dHHVdrTXV5giKxr7go12EBojqsKwsunSiJDyJXZX5RCaqCdfHeGk5SG6Sy",
  "key11": "2BZmm95Jw2JL9BPnJUzwoimvq6VZpeKvWc9HQ9ebJTKsMcQ8hxzAZLSmN1UEZAiW8HFXg3ufoFeZ5FJWbV5wnEzX",
  "key12": "2hDxJVWHPExSTKq6k8Ao7HufcUVoNzW8r6rYZ8HTkF7WYcBBwkhR3JnpZ1eaUmNwWTJse6U9VCQhpRRT9gchkhsp",
  "key13": "2xQUAjRYyYeC16PGmXAPV7U3bYDGbAnAtV8Fdt3o4sY38iMJEL9YSAftfqoVnJGteHHicTg6HZcYYxPiNT9ytNYs",
  "key14": "3SE1uZV4BAfYjHL7rsW8uh32ZFx4n4Tj7izzosXs1bTKXCMHE3KyAWRWx4AcqLxjb5VkNWJpyvv4ECiLdntDwBmb",
  "key15": "GY4fPdqnS5YoKKEuPs7wc5rDhLGg9Xif9GRg1117jdxRcviWDReC77cwWyQ1mxomHsLBxscnzzgWr644H9Q8Lvi",
  "key16": "K9sYxsZWAy1sjMBcDWuD3FKZeZ459D4BVV4wZ7NvxagyM9wceg3UTpGjcuoVKWCzdbpbjUXnc9BdFHxPiJpi5Hc",
  "key17": "2vpujpcxwhKX3sMZPBsopmAZxvsyi2pZ7XdEabGJjy59K6WxTMhbBW4c7m7hb6PwSsonUmBhDDbYZZCXagzSuenN",
  "key18": "4uRKmrfM13RhULVdNUhnqfZdchmWudXj9TzBYqWGduYJ7cuRwnhmAMXQLj3aXJr4bRqeSykdG1UFmCXEgyMuj1nT",
  "key19": "5mKRxRoLA1xdSqzovXHU1NgRDMk6peZ1XQtfwnigNvMmZooTWqg8ggSRqSo7voJtm9Sv4SZQ2crPF4kT3cJL1vYp",
  "key20": "2zt8NaoXeYSmspFmuBrCfMnBrnSqc5wGaxRxMpRY9R8jJ4dLx9xY7JdRnfR3zsFLrnL7GKfQSDnoXfcwow74JJuk",
  "key21": "44LcKPqav1dTnkX1SnSMGvRVkeJbZfGXyfidRgwBkfG1sWTPYhj8F6zEmXYYhT1xQcSA12mziLhuWaRthGFTzpmU",
  "key22": "5B5pLnZvngyfpxYpwz5EX76fWW2SSjBnqVksDbA19pwHCaFUZ9yW927RtBcFByp3oF7DDW7pgLBrYrmGgHtMtxhi",
  "key23": "5antMrfQuZDF2QzLcPAh5koUk888mAsszTVFgCf4Bc4aZMU92Lg9CscewnA8cW1U2nvAqbKoRtvgaydUCLMXufKr",
  "key24": "66ii2kNqFbKeWxbiJYVSdxLjagKxNoEbz1zsZcmsUUQ8FCE9wSY8WSfHyfHTFMrCNLr6g7YFpTRXDSE9Ln8xPdEs",
  "key25": "5BKDJt5Gn2zNk6BY87ZAyxKFx4t5DxkF9fw6y5vmLbstyJFbp6bFHWc9RrBfSYejJrb3PNZxu6VfLAVigrnqL8Zn",
  "key26": "2ruBbYDxV96DcRRnbQ8hoyrGNeT2BwKoW9SuUJryzTtabWAmHd6gzMgwFk4PkE5Z3r87Y6coMt5b8rY9wtbjP5ux",
  "key27": "4KCto6ihuB3CTeh33GnTQREjHqNRcv4JLyDUYpVLxbTax6UQWoR7mYQgcM7BFkEBwHsPNBvHP9F9wfSLEiTGthdj",
  "key28": "3Ak7xAtZicjXzEYTBFimcHtnV2MRQrzgALZhfdFzdzq6yK7eP7uJ8VttVhbRU5vxuhbC39RqZ6M9kTecX7Pte1vy"
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
