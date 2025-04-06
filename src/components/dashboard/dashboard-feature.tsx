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
    "5DKKEcEgbBjfXV9997u71LEAR2JdRM7h5xGpZ6Y1pBzVtt6oXRof2eq6bZiQMMksTVjejuNmjWj9Wh4A1Y5Y8N5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iN46MgS1bs5LjiApj47G6jGEX4dVsNMNp64PmZ78ATpBLJQDArbERbf2syeSK23XUh2dQ3g5XNAmb68Z7XfykZm",
  "key1": "5343Czsk1TQzq8UVVgzUmoyvb7J2veSnYu1v7UZiSAJio6WKhFUde8CumAdaNY45XHhgxt8ypCKVqoJhC2hQbi48",
  "key2": "VYNLNqcmwSrfWCeZSkvqHEeCUcSNHMNtSLVjXK13B9JWjRNVBQPo4FrpFLy63Bg8ZZBZC5wxNickXjTu17Lcez4",
  "key3": "4HxL5g7PgWCB6d3pec1Uq9JGCPctquT1sbhTFtimdbvUYUNXhjXTPShSQQ5nDCdjsz1CFX4JXvC1VhpAEDJtGiY5",
  "key4": "5aXAGi1Qyk3R7LTzh4xTcdSg5GUrK851RWa9uzzC3z3MaWd3VqzifajDBPEDMUAgoUgNquqXQYJLS66UfambJS7a",
  "key5": "4wjwbQtLWRzQV5qLgACxGZfR1YQSoCL1Cn5YosXWF6MzQVfKZ19fJa1BtvSpHnFDALwqYNPJJofyHTaSBjGLPsyo",
  "key6": "2TRnBCqGBa7ZVx5rdveXwCgDuT9yG579ZtCcvK1FAQfPLFVi4CWgixrY16G92wLxsKYUSSNPcNHAGp9QnNUVBR7F",
  "key7": "36XSWpymU7tNqTzrY6gx5Yvx4YvPRorZ146PCwZpLco8bef7bas1cicu4onH73hLYBLKNE3YZQtPvQksByAAUGcH",
  "key8": "2HW1jHwTicEN9xjW44o1q5DuaKycSTrd58GzhcQZ2xXyVihQ4Qb78W7Cvojx1rg5wZC2gubUJBZuY8LdQJ3BjFnF",
  "key9": "3iXRn9oWHWy1wXuSg4JWoLen2zZh2PSepYesgxAc7SnwUCkNhvnBkRa2rs4tUUbsaAyfNewnpqMtefiHxMBojiYM",
  "key10": "6g8shJDSDNBaHvTeDC1qkpsYA7JqteMymtLnQQM8ZE9CWWP6DYH38Wgps6pDkWjCUKCey1V8iJQQvqbVJGHZDx8",
  "key11": "wLxLY8pXzTW5bwgtXDcu9NVSfWsofWKk9t3J3HfPZGkCjJMwSrLtqEiVEFBqneQXRirppZrGYjDuuMaCuxSfCuF",
  "key12": "28U3WMDcfeVrKX8J9RpGXzRsNLtTm6jpvCYWHAJ6dXAG5ZyD2mCB8hL4yscqygmq3BYnjpycnv5Va3HjtdPMG5UH",
  "key13": "4AgGa52hGAmNKLVjukAHQ5L12JNGHUFiuG8VuKY35bTN1HWLwEanjDWiQGRUdqnS64xLJ55jYPw3tvVWLbaFrLb6",
  "key14": "42pfs31u473tWkWyNHfXHWxSvuxzej6495GPEC2dbC9e6ws17DaMUCNeZ4jQiuEV3EzTBAakR2nUGQduW5jpkaEL",
  "key15": "5PoFtxqaeQPacCwUTXoMBvUXhanmU3at7oHFc4SEPCdaDWeZkJ85p4ZJ9Va9iR7iKZDbz7Hmuoav8KaTmLqucNLb",
  "key16": "2EMroRKS3KaQGKMPERqyn7GthPmvoim2LGBoJBngNA84ANeRsAm8UWWj1G7R3NjY9T2ZXzLM7w3VLntuBHXYxFdm",
  "key17": "66M9xQMLZNdqEEdLeB7Jxkwd5bnXugYPWuBmpH2gbTtvW22EMgsEZxobBjF8y3uD7XSPMq1C1iyQihiqUx5RQVU7",
  "key18": "2miiVZKpNRPeZ8YB5NFdxhDQyS4wF33D1gPW97HarWMRMMNpKndYA5wB61m8gaEVZUMTvgw53Wp7upPApd8QvMNa",
  "key19": "29RKH2BJvmvzNpWvkgQTcqGRDTujgA2SmCGzeGJ1pBX1vK5iG68tDWTTzav3ELFaMd9NhKptMHVZwRuQV5rbbQgQ",
  "key20": "5KjBVbfFVSCDb3EMS47ppLhumqdAY2tZjVqG8TyafLcGQJzkA5RAi1ggGA4n5sG7fv3NsDPKfcbCJkZqAZmzvv12",
  "key21": "oEcQkXpheXCTgi1xAKSCUY3VTudWUZUwQDmPnU2Hwd3GuNKseELNbcc9Sa2RvnYyqNvqWXp2UjRxKLbPMwwQvBk",
  "key22": "3JVBixs4Fy4xoJQtrNvBYJkMUGBjpg7wRi3iSbXXPXg3XXKHMsoxsVcsCfwFHKMzFaGt3f9DjEFacJzoYx8ckUJn",
  "key23": "3UiTk39tUQ4aGuLavt8kMArUiBFBddg8zchq5aiKfWNNuPqcAXaSiXRqVEYZ1cktnW6wpfA96e9nFFFZFR6r8JoQ",
  "key24": "2FB4vt2aF5CcbiHnJj8MFZcvseJ5nr51cZAsfTFuFhPBp7jPC8NSmRGiwqu5incsnQKdD7TLtgVq3MVwGZYQ1Hrm"
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
