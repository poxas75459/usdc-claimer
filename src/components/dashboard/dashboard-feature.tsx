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
    "4EMQ4nnsuBUo3HQL5PE84dFKVtp9m3bW9jKJeC7oCvW1N99oaQb875v5Vjqzd1eDcUPJHp3m3wJxn9UAgUVvAsft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "76rtbNbX2Mjj18wrm1wbrVHBWB8yQeJf3fg31cWq6FFoCzom6kpeupU9zFYRnk4NPJ9n4MWGWfWy8Cf1d9YykrB",
  "key1": "3bM28B8zBNuNe9a7resBYPhawT2KvzkGzQc2q8wv6Aps2t3n3nxumovwQWTb6nGr7noR7u4Gij6gM4xy6xMZGwcS",
  "key2": "5egPBzS7vAboNYkUsYd5n1Amy5nD4GSSFs9PmRPqrbNKy2qhJFhVjGcLNtuWnZsidzCqHuqVWAsGV7yZY1jtLzUB",
  "key3": "4bQN8YdtLHq4PAXH3F5FPokixFGV72K9q4YMfkggC6vza7zu65NcR1fjFVmM1Nmg38D7vCjC8dhMZk9A29Rd4qLr",
  "key4": "65Gnq4ZXhsW8GS76PzETk8sTtiZCA7uCroaFe7Zceq2HQXuNYFRP2pxQkc6BMbedZqx6nfoiEj99jBTMcVJjh62z",
  "key5": "3s6A6w37zhR6N1vUtxnrn4bKc66nh5RX58RfuiGmY9NBqjVFyYZfKbMw1g3MR9HtBxyNj4tMGFe5cK8dmFmUZPqb",
  "key6": "2KhKK3kNhLp3cxQF792VdhBferfAXSCw2DZUgXpV7sNmpgrEtogYXMHs2zQPFcUmAibKyhR5kwo2AXfT8k75GVZt",
  "key7": "23LNJhTh5p3Gc44XrJVbFwVkzhNNzy4qnqgvrwDYWew9UFZKhB4LyqvtbbozBBrodJciKw58b568aTcMzCvoKA1G",
  "key8": "MRAQb5rYbfaxsyc8Yu9vGp7PMnaxcFBJTMM3mbMZPLHhegiST2jqWZfNXaePxZ9vxMfunNXjxUaH54TRipqvQvc",
  "key9": "2K1oAy2TQN5sXDhmwUYzoFNyyGirx8zt4ev8oFCG54Dvu4rZGSp1y13vD4PWie1MycjDyfkkWePWFav3DGTs1upz",
  "key10": "4s8fDzf7NFKur6L1DWojbgmTV4HjZXUgZJ8FErbHAzcCCBKnxbVXQmdwXpSPL72Zoq81U4LqAjYmTD2q2CwjdFKE",
  "key11": "3ZhrHGuw9AFqgddWkEbyHRsisCCJcp6dCUPPENUuZHNgyvhdAvgNmk6vNkAqe2BjBqM6enwWjB43TUCc1sKdDkgm",
  "key12": "wxz72sTN47wjvdMtb6upYZ9fsbZhgAqAR4yehLmfvn5BGZcg48NZ1PRvXt1Qcy8ofouPCZrPb6HLR97DoqEmLS5",
  "key13": "3hCVB4qWp6gHLFHVpZcCw11qrQzUbnvi3uprt49jz9GqATW5wG7Zgt4j6SRj2QEvk5npLW76YQAZ6kXckH5RJiwc",
  "key14": "CW9jjBhdGA4eL9JDLaTGcmc3fg3iwCrt4AoLygzUVXhRcCzQNTkRrbyWUwnVWWrF4YLMxLYdDxyG1HDDS6Z4bQ7",
  "key15": "5kK9SZihRgane5iQwLgmp92onKcVTPqefUK3zQQQbffgj39QSknsrtFUHTUBDgbGKh5M8Aaf5u5j51CN7od5rbEP",
  "key16": "4KEPqAzLA8342cDh8r7Pen3TYTp8hLUhmsgq2e8uzbkArkK5z2nczRRtn2yQSEwbdL5SL2mZ6kCYEGHqJDvQ2k5y",
  "key17": "2Gb17DTaCca3ZiZx1n4Z49WZU24gMTkjZENz4Ufmi9BVcXmdAEVY7g3F1trC7Jd4zLZb4okZAtBXaSBJzoGqAsKU",
  "key18": "4ZzL3wxpYdZmRRsumN4NJHsY8FbMTq2CrviE7ru76Y1LtNf1zNiCWg9xAWoFcnDzgq53U9hCbNV9oeGT2xXMphoz",
  "key19": "4cEViGciHjzqBQApGXZw9nWfU239XjK4NcADkKZDCMaPpzfgyhZ19qvgZMGGeaAHKkaUXywC8vev3jTRW9n4dHs8",
  "key20": "4ymXdeNRACDEy6qCD9MeUgsUgcPEZBv3TXHHUMdKvTUgp9gDwotiy2ufHhL3mcGq8c1HEnAhRu1gnjDKDHxN3RGk",
  "key21": "5mKgt45pJSDtpmh3EcvzXdBfN5RRCQFXCwkos4fwQJVMY6SL8jo1RXzk2xAhoq15th6rTQfNDL5zMxkfCqHAvw2S",
  "key22": "2daMz6WHQyohtzzS1e7ivRcstbb7GRrMT4GMLp9HHLKCEkpLLK7X2JCgKEU84AHeW3N8orbToERN9rzd79AqjECE",
  "key23": "5XqLQHJpTsa8LRgvYwQMa7PnX3aKZBUsRViVzZEnyxy4ntZmg6sLD9ZqpDzAgiufZaeXnbWhcahvNoJmkgmeDyGD",
  "key24": "2ketygDf8EdtjzPTsxRCQwXtt6kMptYk25KUbmEd2omdcX2JqnA2PJc9ak5NsKsmhpAqFMriECHC3J688XRTiinn",
  "key25": "EeGwycvr4XhvQjevqy8KH2xDaUuW33TmwJZZHjHNkRUzWRmU8NRsbVfy9MJyjhDg3gyKVBLJ4VQRVWJz3BDAEBd",
  "key26": "5zay7SqKQCt2F7PUFGoXyFWRx4y5uuLKv1TszaZXYrg2KUPGFPEwtWs2ziZiZ6RDeFczFtSQC4hBAh3edmFMqBiZ",
  "key27": "23VKpq6dJEbz4B8UiGeicNCSVgtxTomGqBggqXsdKCK5C2R5Vw2u3tF855HmfwcGhPN7a3ai217NpPo2jsuVG5Xx",
  "key28": "3fnGdt3npnboJN2nzK1gRcHf5i8hKNhFrMRmrsshTBbn5kCnL549ovu9v654ioCUTvwhG2afVrUGSVC7D7shDb4B",
  "key29": "mZeB1GtDN3euesbD9Gj1u3wf1c25ArET2H5PGSKAUDBQxr3m6bGKPQqpjG96Gq5YUQwhEkRK8xDBdrbZrsTUPD5"
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
