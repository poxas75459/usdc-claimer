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
    "3M54s5LfdhfhiwjwZZ7nTz1um8c4gS1dvCV5GwRVwsjyAkJsxF3pGjMpd5JSPAXeRrWV6Z6ZshbHhtHXqKBB85QZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZpngJFcjt87cs2cdTk6xGNcUqtXHYydsExjF6GCSAuZmMNWW4bXZ7piVNwmCAkxLvGMWuVTspeEbJC5JYNktQ7",
  "key1": "66fu952iVLQd6n16JFbz76GC2sriwvF3LiS78n35ZMTUJAp9omrx6LeKNXyFMS4rPthBC2JReS6bWrmUuk4v8aDP",
  "key2": "PK6KkYJ6UXECmm6B6KZraaf1ttpR8nxfthbpeMPgLAd5patfEtA69bfDDHddsWrc9cxYJxYQZN29CPUWTygdg3P",
  "key3": "5YvoH9hLrZngoXeD9b9DjJkBFabtbk1PzEb9Moduj51e5Z6yjdfC4c3UNeL4SDikgdPF2NTjRmYxgCZLERi73uVd",
  "key4": "4WxsT6pgkweTjVP45GGx8iiuz7uxJdfFvL8Tkof2GCN5CKpmBSKGqBDiZXtUe6L8PGD52LBViRwZQ3qtz3unWfgB",
  "key5": "2h2jRDVAKebFuYa3jQTNpbm3cit4hCHUv5yuotH9zhrkQFcYz7NDqrByauE7LtHnJeWZKxP4ZwxqpV9nUBd25Vry",
  "key6": "5JaihMvU6ywYvmcSVQDqzzeT9oFDzQ6AGJewt9WDvrDpy1HYKAVNyRf65V9x95pUtC2xLm162HcNjW6oypSGwuHu",
  "key7": "3uN9ZaTdz6PDZv5p6euDxxAQ72Gzh5THPaCjjGxE9Ef3Sz9nYGFfatz2sLhD7ANaWqykWZjWcVpFRPR6eTm7c5vq",
  "key8": "3waFWbAJEiiMQVeQrKX3Qj1252FvXGfKsNRQXgwTLQhfYF36gx1ky53dKURLNF2FJF6ZyfApy1zHMJc1E939xvWL",
  "key9": "2dWGRM7EkiNY1gEJ8aUXo9oC2XLGr67DfRWVvLsKJsGCUfsXMsKndmtSepZC79iaV7uFWxbocXrY1XFpdLmikoTW",
  "key10": "3psmiMgEW68Bk4rn1dNqhK8b6GoUVSDvs979R6rDiwkzvCGhJ3chdWMaKZquaJo24m62nKQaQ8HpX1n3ivHtoZoR",
  "key11": "3Z2vWPnQ2sRN6z8xXpKEPEW3VVa2xKRMCvWXLARGVZ21GMcG8bi7JKC6TAYarrnGRW2o3JQCBXQzBHPSxHzUEqCD",
  "key12": "2oDtAd67g1RsB5uBTDaAJRJusSQBN1wWfzhX1tPjTdzC6XdC2s8dPSnxJ2bbV2zg6PfiFJB6j5AmtNW4kH4YieSX",
  "key13": "3Jf5treLMkWNnnp46NZb66DTJupJ5cWBpxam9Dvc1Pp3hMT8QAsCVu5MUeAUWagxPQk6b4hQJ5FZUwPECPjtFDLf",
  "key14": "6thsrjkdhg8ForxXxiLrtLRcmBRwkDuudBjFbEnavRKnzs4YkgmwYFnMRGNbcuWsJoeDNxa49zerSY5HnqczaFg",
  "key15": "3x9r44DBZf7Sy7cEEHTRrKukFNsYuMcsoXgU6NvnhnN5J94i1LQQ5phfzA745G52nGHsm9qkig5ZCNwWS9HUt3Ev",
  "key16": "64E8VmjWEHr9pcWS4zJb7Tn7KScXSV6pGQMR9mvZE3tE9MFwsjH7Vdi6SRe21p5ZbZziv4VirbrXVkxgrbnVqSws",
  "key17": "5DEcSQ7BR6DVX8CgbE1NDVHaQEmrR6upzn3WXj428p7ghdPb17HGh2MvfkpPQthMV8hmCy1zAghqjNHz3YDZaPna",
  "key18": "2mpSUbDEXvvxV33TbCXWWyPdKby45zGHzTYX4oDqpTD9NdLSycXFxFoPBXTfyzgvMViYA3zxon7yqbzreuBuTnKH",
  "key19": "3UE21xRqf6ZJYE1Lu26Ro3sz7qvs9BRrvuzCP9Tt8c9ATqTeXsWbfMYUAuvJLieX9y5GVRqeTyEvTLDPssvLZ2bY",
  "key20": "4FLtMRUTufkTdB6hAdmi4bCLpH8GDp2SzDFNjccCXFVPfhSvQiab6DZ4DPQ6KUNVp7qLaSF2fzsVzYCmv7BuJZeu",
  "key21": "5usB2G9NM5QQpjdDJx62b1XsAXC6dkcQG38euxxAA3JwjeZGaNw1mqreiJ3CQLsBEDoSqdtSbeyrEYGvcHC1cbrN",
  "key22": "2NfUkYvXapK5xqAbXiPcW9nwqvfVPVQhGmGTVLM9rtze4pYfjQdHAi5G8JBebh8zJfJ3aKDcY9dhSM8YcDtfCwrF",
  "key23": "5q6FDo6EinnoNdzWezuYKz4TfmrVmiqBbc4GXuw4wPBYcfHSqas6HZ6Tde1EfUperUrJKbqw7gihs5JtZ3qbeSR",
  "key24": "23jJXZBGGvvxTG8nKHpEUVgFmrQGX9w9fc2vs6tPb7jrRV3WqwxA8oZWoStVcdQZuymWaqGdzHBjvGAi81VdV4G6"
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
