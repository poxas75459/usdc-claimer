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
    "2xHEtr3fhMDqVobQMxTAagufXYN3ydoKMhfgMS2EAhTdXvev97VZjzHffQrYodu9da3TyreVfs5LwuiHnTtgGjzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iRYTEKxaXK5QdaJNEPmDpFSShr2LXnEHjA4bw4Gz8PLU8cJk4JkjuJidinCyWMZPHhHVUhvMHiUGumM2fYVcFNr",
  "key1": "4sg5r6CwsJp2kJEPfZxPq7vaVsdLCVpgdKpVfNyW3Av7bm6eiZaVndDxM1dLhatT3BUQSgWCNwGsJjghtpmb35ZE",
  "key2": "5TqnNazMM6eo3pkv2dgYaWY2Sv8PNQzywTTcLDGtJRoFaiRzgb2mF2fe9VhCEPSYGfstxvFarQkiKvRNExDwchPR",
  "key3": "4xC2gGGVHQdCsDCtoNXYjhZy5zKy1ApgCAq335zBpLttZ5Toodj2jP2TWE5KTj5xaSN1AGCTMFxt8NxwF8p9SY4y",
  "key4": "3SwZwYoarkcR5MvqEuNyX4vb2EC752QS5n7GWcJRdDAadigbVZ8ZescFKFkBA3PkYD6smjqJVc5ogLLEzW8JbqpT",
  "key5": "4qiq7tvohz61LVQgPCQFh6xvHN6UsY8ieWYCRrWPpx7MVAbZgroRkKQ1Lged1BXwpbiR9ELxDsnxUNvAn3tTXfEX",
  "key6": "2ZNciqzHVbFdrbvoGoUQ2HzcdfuypWvzEwU1GnF8WwmwyN3TrdxqBE7BSBkTo9SMH6S6CuVMN8zK2PtAanBpGSdT",
  "key7": "295QJEckABfXBCqcfyNCC344qdnGwZ5vA9EqGFjDguffDvUe3HipZ21serX2JX3g4vm38MCCvrxLRvVkbbQymxvy",
  "key8": "2fZMaWUoSG61vyX5U5q3U7w5eQX82SytGnV4TkCF2t4a7KECKDw9Qu9CFL6Z8zzH1hQZp2oe6h7JEZAf4knBo7Tk",
  "key9": "288nfCucAfP74RD2fNW8nTBMMtjYmXapChGwQVZtJzjonAKzFqoJLR5642P7kduPvJUYxu3GEbA394nCq4C4hwbH",
  "key10": "2zZoNg2H8gWPnJPrffvfdkdDcHj7MvK2hYdohzBM7x6GSQVvXmDPAEm8otSFcVKaMqN9DhPC5Ri7tXgyLQMw9L1G",
  "key11": "388DxYPxN1LBktm6vrswNn4H9zWhE6Zyn7UZgS6FW8KTBUzsQssL9mT5bx4yPg8mXKQw2wWGyYCDBR6bwGesXCAu",
  "key12": "4UDZjv4wWNAeNmM3x7jxJDbWwureefgGJa9CFPKspZ5MBX9Zhyefy1p46cBME6cHM2s5E11pRz1JyutVh2beKDsA",
  "key13": "3kJrymA3f7XNSyiEJNFVce2BMhqDihGXCrDuQkBKVbRaTQhCo8GCQWBizw8mbNCkeu5f61osYT8kxs82btVQe9Tq",
  "key14": "66u1Qbmx5uNhDnGkaHrnrn7nHhTPHMRxjnMfo9E7urkhdkF1zgsLWt9o3wde1BkNvYFfRZPtwcKnzGEmVmYw98h4",
  "key15": "hh7U2i5mTvsBLUUeBY3nGB3sQwPnBtCFCDSKQ31kJtd4Y4HBLUREnaJy1cVDVpyN15jrJHEuZdzxAD6h94KYTW5",
  "key16": "2ZAjf1fYcK2R5HEmMVBUSbbGuCBTHP8dgR6yGFkXMSEdbZZmKFHqvwZ7SrsWnrXSdRuki8VtETT3dVA4G6LuMef2",
  "key17": "4e9qkYhmsB5M1wrEHm6yMo4brxud19YgNyMDZxKgeFRUQ6KLrLVemMwcJfk8oBoa3motEVC7CURoEknCwQ9oJKqH",
  "key18": "5wntWaF2t3VuJuJhdF7Evf3ap6zJeW41C4qyw7HhBPg1raxMxkvsmSAebR8NoQhPPHMcus1VnSK47jaCiLTpKqix",
  "key19": "32DfoWnsCfUNuU8BQhTwZApGogUBnt48DsDqbVEgh85cBfC2yXm2CSEvuFA8Z2XYFHNa8hghL4WbK619FfphRhvn",
  "key20": "5sw2gBxCzBA2182Z2WHtANYJQQH8STACgqswzvtNJKSX8hNi7RBaWTESCn7uMmH5kv8bSvXu47RxVjeE9gc38pHx",
  "key21": "4vskD9Sx8kjaDsh9pkfcAiq9fFXb63uHqt9p4sCbJjMq6Yp8SMKDjoVkWGBziR3JmmzP4a5Ab3c8fY6VPbTHqujS",
  "key22": "47XuMJvYa2WDkzQdiJEuAbiiWwsRJXFEE7Y5bgNGXvXo2nvZM2iHsMMbcPZVFJobXck7a9E9bPJ4kKkgkaQjuFYu",
  "key23": "5K2tVJ7fRn3wCTKAYfw49cb8QuXbV7NoKfL2BEcYd9zAwyq4V8ESg79ptuL3ymiSnbKu5nMbkg1dqSJvktqouBce",
  "key24": "3gkiRez9gLXDPohaacntEtuoNNrtea6QA1ETayMm2E4MPo9YRP5rQpimJz4yFdLRkMcSZH6vrHmGDGCFf8Kr9VYU",
  "key25": "4d1nMhQ2zhEDtRQEmguaHRmZYcUeGdBsTNG11PW3UjkyUYJDZ8Rdb6qLRCVbbADt1VUruNtrfh7hP9m7oGLMwjgp",
  "key26": "3KAdwcuqgkk4PADzsCcBoyTwzD1uPyABhy5tvYUQGFqj48fQZaVfxeibPkQbWQQEjmiChgY36zHQ27cUNBSJScCB"
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
