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
    "3ySVX1ceoJx6fjgwxGbgapWfN2E1VDRXKmVTfRUPqjibxLcooaqqW2SUHsaDTwpFC8CERC4RG3a1W8Unus5N2tZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kKBPuJWZxC6JmZFe8JjqJR3kSLQ61mbb6CRiTrYLfKgG6ULJry7gKnnc3G2z2Wc9rtdzMtb82gQJ3vDMcNMPT23",
  "key1": "56hQHHHaKaFF1cMX5oEM66UNjgqGyjAu569Tqd23fjznntLpd4AEepioYf1M8kL39ksUh7AgxC7LcDMkY7M5fgVp",
  "key2": "552uvnjr2LAxMdm3qHNzAVi1z5Pqf9htgZ9cDAyV9NMfP9z6kQKirM6hEk4bCB8aoS39o5sKn4GazxJ7Fsd4arrD",
  "key3": "4HfGWccMdJ1nhT2E4PvqCp9Ehn26y5ZKBQmpWiGsWA5WomFNKvT1P1dhuYnFzWWZwYpEKuPUoow8AJWY98f52rys",
  "key4": "25gsrJRM82PHKKYgXNVtetUZb1g8wMXGgFRdZQDYANkAv5YnecDzNbPRdCkX8ytooBUxTmaqjrCbH1WcMqGm4Lu1",
  "key5": "RujZVguSmMiQNUnqhkBwEPPhyrcL32Xviww1kNhBt8GBS7HCAK3B5ioF693AyHgxTMYDhsifZHoiScPM3Re4K1r",
  "key6": "3aExQvdaF7adYc2ZiwvEMVrfGuPiHn1dX9Ye9jdcYaugC7jSWQwtQKuQwCZ3ZMu8JP1UHipUFnYzkn2HRXGLKpk6",
  "key7": "BHACnQxBiZN5zJKzeqSipctjTULm7LDKChriMWkqzGznEGnjzYm1W7okQQGKvFxv6ki43TZ2aYJVGYTcE9zP5Pb",
  "key8": "VfcbwYYL6CW7RBiPfeGBEuizNRm6dJ339G2Ln6LoCA4DeS7uoKguB7TZ2NcrivFeYu4USAJLM95g5QA1uC3ExRr",
  "key9": "3S8Jj5Mng97cyjk7iN7tk16MzcDCf85RzBoB2iNPz4Yb9EpuPukpxvVe5k4qeoSgzps1onC8zLvppAdMcapgJoY4",
  "key10": "44xsVQcMwVy9qhRzrbkAcE3fKgbDEipvfuovz3Uyfj21ffyERuYLcA4B6FjyW2WfmVYdvgXyBVfhAmYtQoY6vhQw",
  "key11": "5LaGpRzprmEBCsgtNKM4XLA5W1DGuj77avRBERSeSq9MoixUdtgmqK7JnqKiqbqDiEy9ZNRug1Cn2E78NEndg4Ls",
  "key12": "5dXXoa2duhxHBgYpxiBWegYFiWgAA3pP2DHTcAm3u7yM8tTTcZ47ZZDSHGfPa73WtZsjfEAfeT55W9LkhQsxnarC",
  "key13": "4NNhNHkEqTHiNX35LCcWTvXzswaPj2Ts3JWyYWYahjU9rAXyeHNFokW6h3hmJf3b62ixcjjS6C16GGnf8NnM5y7C",
  "key14": "4wsxNCvJuQV7Cs3YsYAEHKBYMfeM4PgVojVc5XgygghP9yac52BkWApgvNF7QdGeZoKnwh9HVmBRyhZvW33vY9s8",
  "key15": "4ukxFAYQzg5t97Wb7Q2t7iEZbe4k6jyoFY2GtiocNJ7TAvhWP71TBUPN32rtLd8n8WiBcnoGQuJ26Fzo1GNRhaRD",
  "key16": "3WtNbJ3QG8mAfRZkp7D7AF5CYxZVeTJ9p2LiNScaSia7W9mepPepSAfc3ng5tpojPLFa5wqEVLeLPHJ8NyFTKATH",
  "key17": "64vTuSQRw4pMj5XAtphT17M4CyVZ6wRaz9HqseUxABGqidCJfQpqTYvGe83u6uHda19paovPjG4SAnC3JjXSGGZK",
  "key18": "4hhdUGnVsH5DLNJMNzxmwvKA6VRVikYu8N5EZK34x24WoPfVmue7fFeuYRX7H6vdboNcQshuEPriE2YZYEqxRkYg",
  "key19": "49VFMq3Dn1S2Ds5HTXuLQgH19HkEBNY2TnGYB3z68ywZZpQ6qCnqWXXtbYKuP7d3f3z12KuyFVrAyNtBvx1AFi1Z",
  "key20": "4TJrBA7MGSNeVE7hpBQUK7RF35EmH4RaHcPWTUsxF5KrrtAamfvrtxDsESuHP1ULfzkaPa3qQhLaRjEYc4NeTer7",
  "key21": "3hJoHqZwYwQJb4GoEvgCJFPSpTW5ZXB7LGaeVrLYqaJ9D9ZXqhHMY7Tf3pv5NYXCLWjEgHNqoHYN5e9yxJVuKkVS",
  "key22": "3hf78jeV3tkfpMdzdz3BBKiRsETzL3Ppxw44rSM1CPEWwW5GMrnj3B3HCcmpUT4TnCmtoBnQwZqnTF15niW6bheZ",
  "key23": "3bG2MR151izZEbqD4ZdH3haLEhUQjZGimaFF1re18XH2DM8yYMAfmNW6f36VCXBF8VKc7LhTjyJYWUy2PMxVqPjW",
  "key24": "YSqKKghGjorZaqz2VheUWrpWBtTJSB6t8nzHEqDgKDbFE9VbkzD9EpLr88Jt3Eye8myyqvxXtAdqFsLmociwqXA",
  "key25": "3G6SzwRWjdYh5ABdyVfYcSQjMqHPURxL5pisaEbQqFvfX2RnwXnMFWLUt1iS9DCf89MDj9ir61a1kmuK9sL9uQR6",
  "key26": "2cNvAV6omZdwH67RVS6igk4WKLVruHLpsCSKLyotJYoT5UQDgzNH2Ctx4DZLUjtkJ5yycibc2vKx7MZ1YBmJWHiX",
  "key27": "2mm2s4jReoEc1uwQVMZ9oQX2V8WWvbFKMRex8cWKhMTPM4K9fzf8gYDbnU8HuPft5fkwtr997PjrXuEfsr6JG9qd"
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
