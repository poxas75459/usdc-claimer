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
    "45EBCqho4r1zyH9eGuoq8n3owccE65ozoiHM5VrU7d9XHnf1QBCAaNmzRpBFGCjBRiCz5qQwxPUJQuj328JLJBZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XLNkVB31mfHzJ3ErVR2zR2wgjfdhv85Nu549yvQ3uRimo45Uc3bUammeb5KxGEzBCW49Z6evBhxvgUHjakgLf9d",
  "key1": "wuwLNkXjTFEZaYjHtSDH4ym5MUNQJvYQc46CKu165Z45st8E91NRU1omDyU3w31cYpL5f938UuywRsn13FB1gcY",
  "key2": "2zPuX1p6RdFrRUSVMi994dPjj53eC85YfRM1zqULeK6NSCwv2bDkgmf5airuuvAvCRtLwgKvqkQtjHghGtoaiCan",
  "key3": "47JYAfZpKyc9eiWTdMU6cyy6bG5MdqkmSNrPPTXY4bB3dYN7veiT3P1m6GiXMd6crVfEsZEdXeySXuA3QY5ah274",
  "key4": "2PjFeMo53C1TimxWF3yzdBXC9dZE5zPUGV62iCxd6cEB61zpe3WHR1E2e65YKKtQwN79zHcVgHz5aB6WkzrPwzux",
  "key5": "5hKFhAfXURgTMCrtNudreG5KszWLHaKXf4XLm3G7FAUnkp9JfRDQMh7nbg76snQuyZabMcu5RaiB6a2sEzktUCYS",
  "key6": "5t86HaS4EvVV6w4JWJgxVWBWiLxida9WNoSS3TPmmCJMbYqvstAjwNURdbeGo5CNPxWJ8GdGSydgKEYeUwVhWLjc",
  "key7": "4h9WG5J3iZPpei67VvMrrUeF4XLba1Ga23pXzP2WaneaxJv1odGpUgRXH8U88xaUGMhoQeLYroUMf7RwCxQbrp8m",
  "key8": "Z8UXknbnT1pnKWkfyuDg99YUTo1QX6go1gEpovJHPu3dzVvW1CzmozLMiQq91oKLRbwqdLggie5XF562n6ZVNVY",
  "key9": "5p7Q9s68NuS7dddj5xQR2TkxsZ7t7BoTwrFMCMUFx2VWvTRNaidzNrELn5Ja5Tb9i1zjuimLdSYmMmLfvqyrJMEp",
  "key10": "2EAEi1FCht5dMtWcF8PsLdZFGsuGDaj4bbrCenqByKzfzmFT451H8GH1ioSr89jfmf4pGUYYhSo8QC4ssw7CJDJf",
  "key11": "2BqoJ8ZuxPiV4ZfNyzKbEb6DeSjAK67i62o6m596SgdXubT7yXQpPFuTcWRDKfFFs1GBU1cVRhFQZiGKyoYkbLfU",
  "key12": "2qgU4ieyzUeEP14h7uQLuPyu5XaCn3gJ1jN6atdb6kQhvx6S7qsfSYVdUDaF6X6QJXyvmbidFopWWVF2ZA7gRuSJ",
  "key13": "3cfuSBCjhJEqV8QQZJ57asb6oAtaD6cFxMwzAk6yASE5zPp86JTFd56xwnj4YvFKSqzskrFsom6cCmX9qLS7qnWj",
  "key14": "3i21FaNC9ksETF2VKUEtbaRagyPwYrHqvVRZqwzPqtj8eqxQrPTzB4AFdo2YAibMxjRmFrrYWkPuFf1TZGX3pHrR",
  "key15": "q5i4oYj7H1PQrrcedPr8bWTNx4aUwt5hHhjaHqDvYC9D77iK6sNBw4U3DuJcGSVECmdfqy1CQzcxBjgyWvV5dGr",
  "key16": "4UA7cZnzvfCPvS9D7k92sA3n4H86zRB3yX3coPt5XdXMrUr6eAkXioi7iqkqkW3s85374HK5rgp8XfwD5Mw3kmhM",
  "key17": "2bD6xu7ienPhzhGBbxtvzMCkmowfvwg4xoHsvx6D9w7vLcr7MmSMX1F6Dz3FxjsivyuWp42q6wFYYggaAeaAj2Eu",
  "key18": "23cNeexCS8RuAntYGukmrHkjdHL38hTkcXb3u3bhipH5CYfnLY1KziPfn8M7AQ2fwWRoHtHGm17aqeqJUswhzSdU",
  "key19": "3UZH7vVwGjjmk1ixvUiLZGGoMAcqD71kcVdvR75y3U8ZYNHg2Lx43jJ6Pm76TnYgE4nCabhfNyAFNDKRHWoAa49u",
  "key20": "22Hgkf1NKQi8kvCCumd8hxwMFWYHSc5K3NUgEGZoxpeSaP8hGWp8qg16utNLz8JLpQ9b62Ci7ogcdBRAFRqMxwic",
  "key21": "WkPEcNwYBfWosfUFbbYs5PNGWLtSaAvdBr5NWDXCc4fNfUWmDauyjeZPdt26PGSo61CAZCp7iD26R2kMXbbtJ8v",
  "key22": "7qa9cwYwUq4MLJA7znBqeJQZHy8X9oW1kwZUw2L1Ytjz6QsZ5ZRvqR9V8JCVwLgvEpBZtBJSXEYHgN6J3AVcpWe",
  "key23": "3MpmkTwtk9rncLmTbUiAfdbptfmnMUMFRFB9K1dZjLUmD8gXYSULeUNQuytbgQXR2cbu48rkoqHiGzJGZLfY724M",
  "key24": "6sJc8ETL6ZLowghjBhY5jYjvCeN2c6gTMmEtCEXNCehDqh4jCF2jKpqXTugV39C4SGcriHWFLxXTpdF7BwrEAYg",
  "key25": "5oeeRAqTRnwqDergdDpAQXk7iQNjZ3G8fQEi2Z5hhHSijCVPC4KK85b7wb5yGZV3TkR5FDRBZ7zwbT65WBoeYogv",
  "key26": "5M3UpvX9iZFQKmapxTEYv2eAMYNziH9P5f8kTVHEmNYneBK5mQt35hVvxEaDNYGcRKJtDbEWfxtUrkbg4tfDZv46",
  "key27": "3poW328rH4M73JUz2PHt7EMccRWee89yp7CCQ8NncqSzHs7qcTiFx4WvV7TtDGBUZ6v6ibZUFhD9ETVWGtxFYrGV",
  "key28": "3tsXy1WYVCsNKRcmWp2NqZxFdpmX4Ff8sTuq7VDZd4cpTjqscCvKRU4vKVokqaV9RkLK9h6jprkaNRDZGVW54AGp",
  "key29": "3fFsatvnXJJkHYP9h2fjr9UzySg49kJ7fX2Ej49fRTSZVtKeokXgWgSwJGrgZ39TcVG4W2wjma8vDUHNEJRAZedN"
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
