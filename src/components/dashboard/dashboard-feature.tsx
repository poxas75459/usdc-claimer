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
    "2DR3Tkw5Pj1L9VPh1jr1JoeXXKSXNRL91QRYhhKVazMZNnNTd1KeuhC5bYyz4vHyM1Vci3PZoLfrfZho9ix8w7T8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57dv1fB7KBVC6DG53jZoaUW4N944XjHXTAnQWo2ZbtBxuHw3o6NkJ8Y2bHN2Cjr7UJ225Lb7e5ySUuBBCiK8jT65",
  "key1": "5JECidseMDpjwQ4Y5kRPFQRx162jKvyYK7NacFMji67asPQ5jg8P7SqS6Byq5HeXdHpmxebPPhs2WJughfkdKbm8",
  "key2": "46yQRybfvEnamBBGGQvcNrzuLZgKUqB2ErSePzCq22G4SDFPVHrVegDgJBjRHRvNiZgkktgAB7T56pLp5oj3KShu",
  "key3": "5Xmmm3cvEbDUkMLmUJYVZyRCaWdj8mcExVSYpx2nJmZXPrMPd2T1fkB1S45AE7jgJyNgFgW7K2o17QiPQK8xnuTE",
  "key4": "5GG5X3CviuufNdXUYtEcxJmzQDzdBx3KQvUVf3xNKVN75VWv9JSXhNngemmqidiqVC7UJW3J3xpcjLM2LE8JzZRD",
  "key5": "xu6CLynzSQ2djvkTYdni6VV9BQ9moCc2ATAcUciJezxkhZgvYXHofBi9Hk8b98oHVdbUivWZF76gVqcxc2a6QzN",
  "key6": "q8d6HwiwYQJfEEVTHUqSkTKXaHepcsJvT3bHwqoKRizKZs52JFkfPrzY57CwmMRTxB94LLRv3z43v22goGV7WTY",
  "key7": "2HEs3jX2Y6vKjfo1yVXYWaxXz3ZtgYFbSvfSvQKqfGpofXX4xVCTbfABakNEsRSVeBi2ZBVJJLMYJJHi74qyoySo",
  "key8": "ztLM3DaYJTK8NBsW3151PDXfZWjm4N9SkuBp4CX3cw4vETaSWPkvj4xM3J6AL6G3UsBJFJe2f9cUD8NXtSVJybt",
  "key9": "29aFfie6kciGrHH6Qb9kYZDXPvYwareagwYR8yh2hYf5uFfuDLfvVwyS5aeiF2HecDV82vS8MoEU6wvTopCPRLCH",
  "key10": "ED26n6y2iYE5NrzE2UMN4frHCCxyZT6iqgbuSWQe14umEvXWiygQEJKNPgJgaU6HRCUHngVSjraKf6JgbpB4p5L",
  "key11": "2dQDwLd9N21cP52mqpKCTLkbNcwYb9hZLhH9AXSnjF4pxLtHZprDjHFB7cUxtD7VQiALXMHaFU4zmZr3Btt12h9A",
  "key12": "28ivCMNTDeC5DGnjLjUAh3f5sy92avuh7CAjAhSJeMqsrMac9hURUbhU1j5GeYZnfJkFgyafBUNxZxARCK9S6Xi3",
  "key13": "MPdnnYEt1bB2iSc5YSdTa2uMdEkmthDL23ousxWTg3w6xuVAsLzw279zfAWiriHEsQrQEk4ak1nVMB7qR7zRwjq",
  "key14": "5YtzyJ6aAsgRX3bkGdyo9mTpyJ8u7z9xthVbPDAUZhVUukHagPGVh3398uaxRA1t6W67c2T2NcUK1eEA7i1omrcG",
  "key15": "4tsGqF73EEUQqyAcJg8pr2LFoXc6wfMsXBEmL82kyp7k59U6h2NjQmCB7Li5MvJLQoPZJxyvLafueTCWCduxgHSC",
  "key16": "wA7qhBD171tTZDqajskN2dZYvsUS7n8g9gv6F1L7WicwFjuAqHGh47D7xibk2pxe1kd1Htt2Z8a11B69oVRx6gt",
  "key17": "3hC2VKooA4dGUPUrRLcztjRGq81nS8s8LmWWPt2FwUoCDadtenirvdfxUPFTZ6NWpjys1XbjEdXWoU1nZr5KMJUC",
  "key18": "4Xjc4cZpmrVYhRrNHDu2Wb4xVHpbmD99itqfCZUJfwVJXbsHiXGCxb9c1nFymJekt4drEzGG4JNyuUz5GQbHQ4ho",
  "key19": "5273XEC8xo3KVY2oDX9Pp6iHbfFg9hubHyqVPUkyURAsA2m3FYkWKKdR2u6JYByGQ2K7Hw7o5YPsB1SowmtyWNyK",
  "key20": "4UN2YFBaG6XDrVw9hZUB2gUEE1oCvSSwwFd1ZNfGzEY7Yv36KQR3yJrnaLXvqJyYb8BBrGbxSf5FQzynguyyiane",
  "key21": "2U4h78MrFfvX5mudCt48ujAskiGsEtFnvWKD72Ahzv8iZWJ3FjbHGSMap4sxj2LqK9tG7xv6DWt9SXkQ9FqZ4b7P",
  "key22": "2EkVqbSWTpAEk5hpv8MVa5sRMxzpK33wQNoSf6Me1Yqg2eKsqzvkAdign9uvGA9uarG2KRB5LzcAsYRhYvynFWax",
  "key23": "2RiUqMVEZwnM9fy9CmvVVhicJBETyAarzVsj8JJoWE5jtEeuTYmkirAxZg8PieFah9gM6JQTqPAYdtjsMckrouzj",
  "key24": "3SV72Xug87b7LnT9tYmuLoYBAEbfh6djsFeCKSD6gq3Qh7t63kXYUjTV2UsdtCYeQ8XZKbu9NVErL8TyvUkiCbrx",
  "key25": "UvzfyWoq5bD3aAngUqkT7nHUa4CkYNVkXkyEcHRF2EPPU47eBcXoDufEPdxtRBbKUwmPyWYksjMmdAD5TBfxuh5",
  "key26": "4azpfT7jXc9dSkBKCfVdwAf8MLzLt7FY6M9bqhRvdXr46bFeNUJpfLCaTwEnqNeMVZMN3LgGypNXEdXBV26YhG4p",
  "key27": "2nnfwXxm1xp4sBWoC297Jw1weJZKyayHNwzaXuQgoDnUUUfjWwbuwCKCow3215vBxLzu9Fqv4NPigh8S8BrD6FmA",
  "key28": "4qgep9Y13MtPvFxJHcDGQfeNHxbXZq9PMXGbZbvk8QMBgRGuqQTZr6w3CELnt6ajy7AX7ZbyViMPNhL9MThere9B",
  "key29": "2KanNX3gifj7ch3prtHRDiaQJurVh2r3vTqMLWUEw7AUTh2iDL33GgoGnFsfxUuzfzBYCzvqfd4s2bkzhvcD535w",
  "key30": "9XLhrBUcsnkpq5gKn7AKW3A3vdkjmKXFMgh6EFExbRH1Hyn28csDRD26CERvL6XKJV1ixnHoquF52zpzTJtj4HD",
  "key31": "3Mcu2fba8esJo6LpDJC3ysuwiC3d2SPSYw3KSkghSFqWtyanAhVobWMdaxooyRvoLEvTUtiFgH67zTZkZRpad5Lw",
  "key32": "2uHjcKQTQxBu71FffjCeyNqVg4oZAunYb8yRcc32jqRo1yNXLjgAbX4U51yxnsZG4fXv5yAhujTS8iB2KHrrp6Th",
  "key33": "Bhp6kXnqEChwVtntNo4HfXNvGcMBZmfkJjWvExkPUeYFwKTvU1qDJjbHGV84Evz5g3fd9SAxGNnVBMrbBY4gbcb",
  "key34": "4BSWT4qB51xsZVkZCebzerWqNVLaMewNWfqWCKF9F2C6fwFjru7A51V95LuZq9dC6ryergmf8hbEoLX6uW6kSbwo",
  "key35": "3D5CiPUao5EpavBnDjjsFpMTWh7jSRRxyCQFApsFDXERzcBNWwJ1q2aH6LPaqnMcvVVKPWejuEBMjUxG4jPjj42Y",
  "key36": "61D9CZzcvb2hTdaqFLqtCV6HWPC8YNQ5zYi3jC5WXnTiZrhdFHuE6oo8Hn7v8MYo4CDTmGrLMKioQKEfWGbXAzzd",
  "key37": "3i5Dij8UfdnL5vvAPP8e7DUQHr4EEbWNemGWQM19jkjRNy6uNN1bmozjdKCXML6aDqrxiqovykUyai3hiXCRXKFA",
  "key38": "3XMYj1y6itfkQUq45Drcfdzy94KK42W9ozavSjT9YC76vF6tSmtoWNZ555FtdyPagJpuaPd1ca9d1BUt4KTvVfKh",
  "key39": "b2Stq4h7hWUjZQAQnWRusZ5z3DuxzTmj9hTjWNQK4q3Thn6JGR5i6KpbTWPc6kq3RFaa1i4nJDmEGjwYmnRBJbt",
  "key40": "eYEuhNQMbbBWhvHtoY5QoUdEcGD6bP6MFtKFvCDHqhiUB1Vf3X7RbdgbyRG1motcgS1AFaLgZRz8D4947xwajEF",
  "key41": "33CdugTwYC5XxHVMzYLTppc9u4wdgWkbGfNTQeThDUUtz587hgJz8tdVaQfXC8MtF7YdcB12PVMUDz1exYGL2bHt",
  "key42": "2cExg4GFvodpiiYrS1iTLiErPv1GU7kTuUEYqHhZCvTfJgnyaum269jvfjEMFj6kKVZwSSAkMrK5MGK4rxofz19Y",
  "key43": "3cieyDjkZkPQEqKiadsu3bNdtq48k6kqeukzeKsN5kY33rgENoGXJGRWCYSfWeYurFcnbjhQxAinWv7epRUjmF1Q",
  "key44": "29KMcpCLGGzrzAvSRdJh9pYiKZmdGGZDVzbEikTw8b8RPpqMEfJvaP7P4Cax4SpmsTf9GCxi4xZvFNv7FYVmUUTx",
  "key45": "4MKPvDnFz2RUyVUEK2EQgfppTFtX6vTMRZUX49918VipaKxe5J5Hv13ACRneygAcbgnmFEPtcqrBJqPTeAWxQ9ah",
  "key46": "2riZeciR5abZkQr5GQbCQbyCWAcFGh4Yw7CyWvhY5epbuHHuKK4Gtz4obnkQRi2XUA7yzZUpkMVZNgNmpvr1E9Pc",
  "key47": "4SbdTTBzzzhiCsQTwuFDRnfz56WrtbSHJzKw4GfytiGzea7i9ZvG4JqF84NzQ4e7fru7JWgQU4vAM2j3iPXYxLdS",
  "key48": "3oLVYrqxo2Thv768ZE4CDZFBbkMgtiULW9CdwFS8ETGZjRd6mCC57ySC9pFpStckwGygjqpneRZ5GDyn2Lw8knpt"
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
