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
    "42Ar6VF8XzVXeJXPNNXQ2tuQ3cyg3uYvqkczhFvKmfc6R2eJ1ZKtdVkbXaZ9N9eJcKqE8Mu6TidhuVh1PgdAhjq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1u7PZUVc74HkMv4iiwmzBcUMud2MXjp2B3Xp6WUojWDCECkUGWw4JpE9y1FCdBXwBFN18QoMRue8W4UEVCtWxB",
  "key1": "6i487K11xJxSwNGaWLcTB998SQBkSNexinQcK2eyLRGY4A9yqLddhHnY9jVBHcgb9UNtozaDndVMpZbeavR2oYC",
  "key2": "3jnDdR5CrPz6UvVBkjKQtGyDPTa82UF7JXu2w16VvW4xNwdHBpwyesXE7Yn99QN6hrmxa2MawfqwcywvCRMtgsm9",
  "key3": "4uZzgs1XQTmPY8GdihEeYypfKYhcYc5vfziFNKhHJiZRCyH6dGCXaXbevbDcMs35gKjc5KQdxZGaZ9sHh1SY2Kmm",
  "key4": "31QRHpr3vBe7AhGBYQf4dEB5Y3LLWtQNye7ZUniEmK9jwxTKRwkbHFniw8LPXDfAkRgX7HePXX6HGMihY4hgpqH8",
  "key5": "3G6hG9yEaji1mb1Ky214o6aJuQfK3ziBETBHKvKiEHTdKVnSe81PQhgsUknBBsS4Md9Jm7p926irmoXKwGf7bGDG",
  "key6": "4ZgvLnBg7M9RR5xJ9xopDgB1fkLpb3NCfPNJAFihZhjmQoREDueFNoKWFRRYvGCmbMnK5BzRV3LS7oPtK1P44tFH",
  "key7": "5pRLs98mx7ndbLXd8gvtzfs1KLUWUWoStzDUauZE6szzKFsEeYQYJLqgJT7jfPmZUHbSxtZ5K3XM91FWuD49TNHq",
  "key8": "29MFWb5gC2Y8a7dAj41hx4svHSBycqkjbn5vrfLY3nKENPqmvzthVyND9UiA99sDrNpZ9Ddt15f35rFS55Dv4v9n",
  "key9": "2i8Bqjz4fYomQFL93qz64wgydhq4Uoiin6PF4cPP3g63JfxYvg7epD2J5sfWh8Q7gkoYdLuvwihSPVsYsQTBDUdz",
  "key10": "3UqFcuebCkF9gDQq1za86Hu2RBeAjfqFLrXt8fgkGEaYi9ruKwJZ2hm1ryghdkSRgDzex52Ske7nijm9tGSP5253",
  "key11": "25XqZ9UWkRiYJkqvKVQSoBgxkCJMnrhE9EUWDci6do48d6PCJ7RsSZkuWfya8cSDK2df8WLKW4dcTiKYwzwKYGQn",
  "key12": "3gfs9pHQBz1v8zYJLk3b5puAvJQziJweQ1UbqDocYq1ab7XjCwpvZUfuo2FhLLBYHi4NnqSDCzjjxjXXimpLDZQu",
  "key13": "ezWFYfgksXfcotCjyHsJTzKecZU4Swa9UbnZ42GqoUu9B5X1mwYkGnvrvdX2VNXBrrRQXxmQ9TrkhRsg2RVUhd1",
  "key14": "3PFYtSZrQUgejwxHcwLyZWrXaQtbJULD1MUG2KGE6q6CD51sk74tiHXMBjfUdWiTKmgwDsrz9yEpvofgMFwps1QG",
  "key15": "3GjDgEaUXNUwrm1ehQdMouUAVyGRu3V5L4BDEGnD3wxkmSWV3bBkaKDmCYAPgrQsk5UBReTmTXyYbWFvH6Dt32nV",
  "key16": "w3YKHqRQU65hNWS57xiWk8WHg7NVffEX6N6BKErsTJCcAUP3soC3ccjfSm7Nqkr1i8noGgnRNAnEnhQPerVekpL",
  "key17": "3Ta336JoSgSHewBSFfNAKBmNpYNQZeVWAg8kijmvqcc7P4qe38v9KMt3iB9Sab6W4KCWVDuLMsN1brYpooE9qnfU",
  "key18": "2YChzyphiwHkAagpZBECSooKxH5bhSGZ599yjQE2FR1iWMZtp2Qr6bBYy3YzJTuvuLNigqLCJSSp4Tq6uWSLQ4gR",
  "key19": "2QJsiqCtceazdkHsvefnc3hnXjW91LLsCtjNivnicNcXcejJ6a4fMhcShAwfYGjpKTA7doBe7qJDR9jWaYrwhzLB",
  "key20": "65eJJN7VxJPiNcWkMmM4q1xX1EgWMYc8evtHf4DUN4MAxsnPB5ZYZEt7e6t8jc5L7w7fVZCDC69KFa3ep8A2xL87",
  "key21": "47nJj8RDz3AiiVTQfbuA8jKQpoKrqAtYqR4tFUzphSxY7gPrFdpvLeoLpJUV724cdU6s76UyMhE8o3fCaCyobV1C",
  "key22": "BWChHvhU3WvL8VTe1ZGbDbZybEL2jNzNCXUJyWVLBEBBxLRhu14owTNz6Fk2KJCmj7gwqbEgF8jjaCgHK11JRej",
  "key23": "2cymgDG7Qki3FJeCep1muvTc17xJsncghGbcBryfssHeWTWqDA9VPwryPxVdFgaFTFjL9EKzGXiTiFhUMXK3Y3Zw",
  "key24": "xJHL9AzSGeqkfVKKUHSPRjAAde7UmSTBKghunmd2bKaBYHQbGcvubn8tQMhk8wm2HGuAhv5hqeeb6i2ALLXuYWL",
  "key25": "5UNeBtJzF3k1bERBnqgLQMZ8ELXsxbh1aChif9XmpE5sMnM74DkgVyMMADk3XHGNVNSzc9UPJtnSDnbmrHYyJS8m",
  "key26": "mVERPqkKpJHeYAEegG9r4SnHDwULopoLz9pHNtTy2TE2Cb15M3jGWFs8aRMjj53PhoxbYEV8eL1kutJjFVQtSAL",
  "key27": "3aw67CMU4NGSe5ooHc3VbE9tyuoonfmgx9DQatEKvoGxNY2ssurRHvSZoGPcz3K7ziaMY6A4dRLWu43JabzL55kN",
  "key28": "xqWRTJ54skwf6KHPaiZgvAfFg2b3WfKDdQxD7L3AUaogF5SNdTi6S9uB87qdBahyCSzZw4pvXZT9Y87xqqSTdAh",
  "key29": "3yaqaWTCHHdTPYA1To3TWxvUNDgMkc1kTYB4pVQioX5qTNEFAUKcTWfvijMhgxxSWMo1f33yHP2w2LoWi1KqkDhX",
  "key30": "2n9JDET4Dt7yb3TLfFMnuhz7Xpb7eTbVAN4dSWhFoUpuAvRWLtcnRzCja3HvmsdpXPsfq5WYscdVsuGD1DHEz5gS",
  "key31": "26bZooo17iJNdim14xxH8xoqN482oaPmUYMHdDVnsDQ2g8EgHNCcbCRomDmYB4KS1moknUmtCCU2fMAME9S1tcNP",
  "key32": "5HpCFjv5TxkNNb5hCYkAxdcfERRxuyvhJRqD7zF23WBr96KxtatJtqdcqug8o9h9vmjPHztn11vS8bKgneuNsvH1",
  "key33": "55YMNt4LD7B4UTbbvnQbnPnwSpPJkdjqgHVbe266rQJ3u6g9Wvv6z8eQKnMX3etu1YYpijVRqZsQVyMF7HZwb7em",
  "key34": "YaxAA4FaAK1rRiZP5qbKDVr5G8bx4vURTTBoqnGj25Pjx3VPjdtgQT6QNkb7ESRE127r5igCStD6SgTNmcJJxc1",
  "key35": "5v1hd6LGT87HGNLyaXkLy8WeVi3ngRTmUDwarnd2CwdKygkdzv7dRgK9Nhj8JHApLH8rc6fsdx565A7bz2eTwAKR",
  "key36": "btFT6vtsfT2PCdkXPiQ1TFVao742Kdhdd3qAL8Rie2AuM6qS9syr4EoFpLUT1bHY6YTxWnEEArwKoPJn62dxNhQ"
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
