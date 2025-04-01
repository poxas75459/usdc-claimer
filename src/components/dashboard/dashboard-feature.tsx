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
    "4gu9bg69NWqAXw8k6o9LSrF5ygVwct79vCCZAr9EqXCTgT1ARpnCrMRYB89qSZmJFv7hQ2J5rA5JYrGXrEWW72Nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HiyVK5XXu5GKvsAgCJrG9rxviNXe4K84EcTbwxgmRWkKQfadBv4xmL4a4M6HxTfHa8iYQEjdCN7Yp8gRSaYYMuE",
  "key1": "bZkj5JRQUTwf8pV1W6fyKw6Zha3biaCBZwHMZvTz2BLvh3QbWZhTYH9udGisf96k234nUNUQehyE2U1BqFYt15f",
  "key2": "5mEG4gfoGzaYAsashVQ7WMAWVy9GpS8NVLgvWRELHnLuEf6hjcxS5hkCVTTgnAszgq4B9CbTURKJxMnhG4Pj6xtS",
  "key3": "3G3yDSYDhQB7h1vZ8PkoEQWTUahATEbaywWsPpGCXEobCQVm9pZrXKAXFwDiCuWQSwhQLVB4zUYpfFiCj99ocXAY",
  "key4": "28hSEX6KrwYLzwzNbN3sUuCyX9V2Y2ToVdgibQEbJHbg1nsheorouAZ2oqPREULKmTWaMgKNy5f17e3mN1WD8TS9",
  "key5": "3aGujxP9cVCdhRC1norSdcCXgoBrRbL2mkFxHtX4uTMUeN2rgfyvv71tVqyXsi8ZT5zUnZE6TeHrVSigsSjhP9K9",
  "key6": "5hwRhmAwnQbJwMTsBBWnAw8zuUohSqzxdbocrrAwyUf1pHLkYaznNKfW65tZbf1KyENx9KdqVTwoW9BkorHR9d9G",
  "key7": "5NHsxfeMCu2MvkVN1kVo2EtF4ivvdq9qmK1Psu1GbXgUjZuZ4d9PUKxYdoT8JNNxACbEN333knuMU7ggaBxToRCJ",
  "key8": "5NRdJdmui4mjTmdihTkcCYmHSTEVYzuodjoZroL2DyZbJHxvGm8GQ2MeYhKrRNmmdoqaVoRFMsXtZXjsJjUyBb9J",
  "key9": "2D8EAKH1BmqNTJ6qFtzh9DLhnm9gqLUVVPef69rKhPwBgHLpgxqHVN7k6L3ZDUyoHqa8mB91j1ZMjjoRxyGhhVPV",
  "key10": "3YeSUootkrJJUGSR7eyLSTsB8TG5t8T8rNiXHc6kQZqxA2KUHfaofPbKDriqaN4EyVmRKLwuupXMHKphR8PFPP12",
  "key11": "3dXN8bkkN8g2XqibYaQqHrcptSGYv3nLA58ST2bhNCdzeyqZbQmm3zwoSV3AN274NBGkyPGg6xTMuMTJh2mAERTp",
  "key12": "53hR6dnoGfGEuEYY3ggJ3baukHVYajxd5pzqN4w6EZnpxYsRY6L4DFVRQyBYth4f4MzJg9Dz2dbRGGwwa95when8",
  "key13": "2peWdrtr3e4uVnu9aPKzBB1ijGwVHLVuvWkwVZYri2tCRMX6s91kuzSHteihsUF8vuCgzqgSp5b8Q1mP1sBfycpq",
  "key14": "5m8yyKsLUwptt9TqQ1mz1BiH1hSgfLYP61YX67ssF5RsuVvqWLtQxGHibtiwuMCw9ZYUS2Pm4D5dZk9qP1a9HpFv",
  "key15": "65UwBaKMnxWvgFt9uNkQLdTPyMCjRYK3RyrHjdtJSSLJQQAaEr18yUkbrZ1jtmXHRqpSqi8xDppo7jkUiyrL4aWm",
  "key16": "4ibutda8TNZCww9zzNP2vPxrUzAZ699S2cHADpFCYfLxFyvXPiSVGeN9cFaNZDT18jvSjr3xE2E6r6FPiDR7n539",
  "key17": "kojxRvkPWeMEYd9VMXCUjZ4fNvNfoGaQRLLcGmj34e82142pgKnbz2pWzkYbM79WKjQ2zb5r3U8JEyanz8HXeza",
  "key18": "2YZmvQbSHLJCqLDAH5YxXE1wKky9X76jHFgchri7skaBJ35NUQT6vMnGWfR7hPdhtNh5CK9VdhSdjhq8cqtvhuZc",
  "key19": "kuG6RPCxumdvSBbsLFu7ZRFhwBaAJXj7XtuXXoL3nQ3HZGFy776mXv5cZrZi5sseLmJaGUdH9qLihVvWCUfDZUV",
  "key20": "3XQHqFAfa8mf3aHUxDqZVAsNWwiKqt9NcBF1zsjoVj4duAzcdLh5VNZZ1DRFW12QF3pokDhTUwHv3p2GK7WcN6rY",
  "key21": "q7xV18fuz85yYpBfgmaL6mSyPzsP9Pyiyn2JcVvHCFtjU45zJoXJbAExR3oBg1mVKk3L3BCK6xQDrXKSkS64TCm",
  "key22": "4rY1Ww9AFdJah6Zb6xxUdVU1v2EkBZ2WMktp1ZQm9B7QYp8SdUbrocp5CcmtAmTaxU4TiEQbisBpWwWdzbpggwir",
  "key23": "pqAnMiGvHH9F6pLQbcWBPt2RRr49gPKvSUzUqnXJrQs6ZKid2mCDm2hq8ZfKVvKrBUoVGYgCNiWmoN67ZEZUk4X",
  "key24": "5UL7W6YkNcahHKRk2btAKcaQMTds8aFsM6CEyBZW4DFWLsyE6fSsRB9fvbcQJJwGhLZpmLnDynQnqSPtG1sjxVrM",
  "key25": "3Q4UHRfB1VfbYLi3azx1yzyySZS7TKx5vuF8mFVi44nGrZERnFmxLZzu3yra5vhPyzd5CZXGd3WxVkJh9qvuewe5",
  "key26": "2HE7MLz2S6Sj12KERLue56afPTxsbLtEUDtwy5MXjhgZ98WEh8pbvpQU7zxp79MqUE7rq7pAQmmnBNbmjK6aS5Y1",
  "key27": "3knQMzV1r4qnx6rp4CJF9W3ADm3kE4xPbRTZLdBPJoCUCPDw9JXRtQpVbgADq7BaiMJS66Nr4fYhkT6U5a5LTgD",
  "key28": "2Ci9cco8tB1uT1GpfihuVoRfpuE4jsHEWZ9xhTUSZfp1Mfn7zgv1WeeQmiyK4AzUeUdEZgadXXAKv5m9kj227QNe",
  "key29": "2HcXSDirBHQgnbM9F7EcTfAeZHwGUYz4KAvseZgEkTLrFtqDsAmuSvPKwwYnKcjKAbxqaRSJP6SAQ42VrzFpsxRT",
  "key30": "BJHa3eWJxP6oy3rth6ApCw7fdSeqUNdeCi63eAZM3RuZBjZDQfGe6JqFodS9Uo1gP4VGU9mPfEknPKcTAjcp3ou",
  "key31": "5vktJ4NyJqs2aRj7m7pjmUobPfnvNXN8E6ijKkLxkT6QjqGbCa7Viq48DFGdq2tpErq1a4BJPz6n5XHnG2SGbdUo",
  "key32": "63Rx9vVmz2ttpJofFijxgT2BwxWDqPYVjXGi7LhMpMjKcnMUb4XR3nAvbj7aNvbuYdBwUUQgWTC86rvqximCm4BL",
  "key33": "TQ9fxWp155P8Ecipi2VfKLciLRH1FYkMS9ohGjz427g1mPuRhwfbZc23g3WAPUS47pXCZEWyHAyhqLur5sQpUQb",
  "key34": "3SaUVgZcbS5RtgHppFnDHNGQd8HutTcLMNUc5bLLTSaNXvg9GHDzvr924MnUPKG9XM8KWqJwon7N4UJQyFzXQcKy",
  "key35": "2skA35sgm1GxQL2cmtmxFc52Q8VBJQszLUujgCoo61P7pKJ3RA11yAMLv4p7N6j7VCwp8twbRnpeSEVBnJpiVNrj",
  "key36": "2CXnpkdkZ49KN1Gk2tacfoUzYm7NS6ZnbCdw6bY8Zrpe3uoKccDVQiGHqyJA9pzbHqysMeUShjCyi9kUgNP3qPMK",
  "key37": "zt3mxjnjShASUdqBzb5KSWD2b5nhkCK3jfdKumYnTXpeiyTWxh1nHnrvAjGaaoRbBbbZRmcBgRqErSh7gHqY3R9",
  "key38": "qTteUduXXCmW9a5iXaMs3nKy6ztRdy3cULtcn5gsg65bQo3316o3P5JAeSJoSkL4uZifteXcNdHkD9ttdgnc8kd",
  "key39": "2P1voEdkCRq4Rg46k4QWTLf2VAxLudnwujiXyxYbzpWZDtNfNDufPQYYxjZgxywjzrXiWfhP9T9mKie23Zif1zYF",
  "key40": "sJamBMUhqUooGrymLYD69v5siAS1W5XipyyYCeUhYErY5MPv6FhGHwiudXMU4NdHHBPxUyB84GTD9t6eE5XS6v3",
  "key41": "51RvQE5UTuo95dd7Mg6WFKwzkifo5N8Pqi52DAuzXSc8WPkLWo6ahkicyUxQeHbDVK6WC5X6fSqGP6iVm9Y6Wv1z",
  "key42": "22CoqgHVyzP68NEM7J5U3cowXtQMmy3pKW6vmANP8qqosSPLn5y4D87c7E7sw3fCCfot3XdjpKXDL4okqXz1XSRU"
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
