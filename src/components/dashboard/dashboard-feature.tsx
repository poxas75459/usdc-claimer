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
    "67hM7aHtmb3zTBurEZpMcj68FbGXwygPdCRmcc6snrwbe8pn4h3zMdSgNbVT8EjtVyBcqrquRQxtY9yvGUe9vmid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfxxMbkudR9xw2LuHbg77QP8QKojvWwzYQhkQNQEqJW2AgpCi8EuvMndLsqGU5he2LboRSX5rW3Jizk3yHfzPg6",
  "key1": "4drTg3c9GN43bBknfq9dD4w3LVNk1kTjs7zRbPnU8mi8c5M4KY7XGZLzT7PWA3rZkPjRP89aVk4waGEtXnSTfX4Z",
  "key2": "p4L8c8f5BjbSa3LMSZZ8Qvri8qbG7DPkbYhTkAKzBf3Psae5QjxYz1iDQ9nNz9gtD8EhGhMYqxqg8rs8YkTMqwc",
  "key3": "2Y5WPewYcTNq9P3ozJPPV5kRtW6W8iANAKBdcd3cnZrQp2i7NKpCsUWEL8AKWgaWaN2KkmgRU8xGGb1vQ4SFVaWk",
  "key4": "4E7UYm76GiPNqyKYfArEC24trVPXR2KPc74dw1a5WmMKmpZrPqacnYLjWmPYWDxrorRdHcS4XmVHPhvfkMtFmmM8",
  "key5": "3azgrujXt3Bqhi6Poje6KXmFg9ZnnLGeBpvMoBdSfziGbgW7XJAKA9xYVsh9pH6zpEFv4wNpa9YjJk9MCWJJm3cH",
  "key6": "5t92yDuXF5jyMh4D61UXJpy7eJW5ydtoo2H8at77B9nPJkkAw1L7Ej9SoyHcTcUk1hbh3JUwNf6KUHJEPwU4bhRM",
  "key7": "61yy9bLMDjd46fLVF3kTTAH7o6PDzydDQvkEUTM3Mk1mxrJgyHqYTm8DemWAJMKkNEUKQkEa1Wd1sNUomL1dvZY8",
  "key8": "4AXuLvFmkvNcXxP4bLbtCVwiYUYnCFU2ukgvCm5LPy8dikriGFMEFcDKDfq1LdYZep1YTWbPAQQ27JB3rG23Fkw4",
  "key9": "3z6LxG9uxGBEb5rkbKD7ZqcRD8MKDHyLPwWTTtXMnqRhTwLxsgPgF6MZK8uG6L3iLsbqdYmhoTaq2UfuF1kDZEgy",
  "key10": "3UF7yzpobezAChqyTnV8tLtHAcVZv2oWuPiqiJrSmgfPwvQMDXDKKyN6o3vaDhY4NZjguvZKL5JVtt2EjECd2FYR",
  "key11": "3fAf3nMbf5cA4jVpazZzDNpEs9p1KjymcKYQsShtu2Q2jzhhkdSQcBdGpiWbukGATix6ss1XPNgsZRZggPbixUPQ",
  "key12": "2eLsq2tUcvVD3pvJp7MaVdLiGn3KShC7bbyA4W5nivAa5mgvSH6K97WHoR1XqGSuVUUYfdUExGYftfZMALYWVUcz",
  "key13": "2H8rkWzTvVGYwsDkaHwbrxVSbDjghYJKKyfEE5WxTj86AVWdESskhZ2Dsa1hieTY9WTubdBpvxNDFFvAHm3MsFQP",
  "key14": "YVQE7knAivVo9P7TVWaGxNt964EsNfJZcibsYrFdfe85vxZNGeBt8CbJEKtrkN92mU31cWUGuJMrmVKVhhZv3Nv",
  "key15": "5fzbATGViJEBUUptwxAuPV7kV2wgTzECb5juN2AUBu7gLtFnQVEC7C5eUe7oiEvNAFkBJmwtEA4Pn1ES4vwx58Fw",
  "key16": "2jjYUogoBk4WqhLHLqqN1QqnmNUYn9t2R1oCvDs68Rsyqt95HHzc69nYBSAyzscCG9yKbGHFFjpNQMEvxXJTd4Yc",
  "key17": "SvDPvrPDzEMiVFEfBVTH7XPJFsNDbMRvLFyaQ319u6C8QHP48ag354YHoXkuC5zktgMddwauJHpUAgSsrsDqNUv",
  "key18": "2T2JWAqs5Jx4u8sEkufW2BBwe6EbxZ1cTmHDb1cSotY4n5wBn4wjX5C8Sfy424trZdWRzEksRz3jr9EY8JhHz3oA",
  "key19": "2NV83waLUtnx8w5t7r9jJnEoD6DgPyMkaLfiyHGSBYvkyKepUgvMLYn99AEDoqAiQnkMcuosSbokwGvZkbhNJrG1",
  "key20": "5xsM7DjC6zee8msP2i9JrTXwLjBrM9rmf7vfqEpjwE7akjAPiuPhRRE5QmB11zMmxZAtRHdnzvE1zJ66FHF23qbE",
  "key21": "3PaEz9aMUcS1zxgUYT7oSmHw7pPVuK3kfx6engj5SXYnsHQiCcPY7BhERv8ohAEoXyHUTrRpSB3hvCrvHmyemrQS",
  "key22": "2ssEEVBcVZusY45T1rEjvTRkRmvVpeUj1cTUg9S6RSC6CG7XTf1577cSmHqDwJhMS3edmVyR5T5x1THBubyibgCm",
  "key23": "3n8rLrWu1grLEruX9wVwAANcZ3BUBfhXncjQzYXXif2h7w5tPw5k3CQ9DaGadoiQSgxmAG9Vi4oWk5uMkHneZRj7",
  "key24": "4aPdXCJ322WSZZK5WoXUCTPR8GWfvQRnw68HnEmLcGfnjMtRWjPDUN1zamx3PLb5LfUqXEwM1fbuf8JkhXXuRVsp"
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
