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
    "5XM2PKhtFF2X6WDM3TRKu8GYJtmfAfVMy2wYGgMYu2M4LwNZ2Ti6V69MYeBPkJLpZiSQbZBvoNR3BavthavUKJAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LB1cyyZYpbEfjEHBNkLWRABjYNjMhmT2s4XK3J663auPseG3PyfEx9HTcNZ4HSEAh1kJTBvTL71uaj1VJwbs7ob",
  "key1": "66unQEAgn7khZcRQSbX1fMDyZFauktB1XLLEMEV9bnH1d3hiSgZJNSR7YJoWA5QhsKdnx588vKh5mD6wQiRcbXPs",
  "key2": "2DwHuT6s7dxYvhghCfDvKKu3G1GwoLmXwtGX4ucQNPvcmV9TaguWPoJui6NmxfFYnmHjjEeTx8unZYFzwGLBzQPZ",
  "key3": "5Q5qSC3EWm2MTsziABGGLaH5JBuaYJsepf7EkfFeU5wHkpFsH3chKPn8z4ek8LVJwaQ5ScMqWRWFVRHgKUZEBXYX",
  "key4": "RSV7w4rQECzgKA6m5xabgK6YRhvEkgHGry3X5AxGDzAY23mhi8LAsw5ziuJWbH89ajrvshxh7amjQNhRKddqd5e",
  "key5": "4HGWZgGMMyTHCfxXosyAMMW9zqHsNpNmKxviZy77ToURS1HkENG97aSqaBUsfurCZeuzMXsUEEE9RqLsK54fwTZD",
  "key6": "25uAXWiNmpybEoEo3CS5LL9Zy13dKTRbgE7QaAQuW36S2m8ph6edCXNuWTjRkHVRfzf7f6DdAbxf16exxqTx22rV",
  "key7": "2xWBetwTrLYkLk4BmvWLLNs9ThDUJATY2CXuTybBpJ8qixbWKNvhLm4JXra6ppqFWRqdxJAch5GkQxQsZQh44gyZ",
  "key8": "TLdxPfoC9LDQDUwrdznRq45AjoGNpup9maKjvnMuu1aRKtyjQsa1SNFF1uUXb5XbFfJ1ZgpqhboQKdp2uh3Jj8W",
  "key9": "62L4gT8HDayB7xoKtj6WYFu2bUq9ptMXvTHJqJtvj2ocbmswxDN7MGDG6ZPXaZBLk1JjpdSwthm45RdpVqeWmvS1",
  "key10": "BaVkHg6xmuPTz3UbemZQipb8YWqQcRojN6G8JURtAq7mgnVGs6A3oF4dPajoEYdzBMWDZoL1S4squvHp8dXsVzj",
  "key11": "228LJ8uZT8RwGaHV76VtBYZC9sGxJJ2KGtxFSjgpFH5VwZquMzuEyCSDyd7UUuseEqt4YyNFKby8vZksgJYmqTUg",
  "key12": "2HtxnJTCB6yuVywucQaAEX71VNzFzoShiJ3ykNaRNpW1jZWyc7JGmHDTF9JSjjSuqrAdi2uQvpA9XQJnmxjvFKa4",
  "key13": "2FChY128AKr39bFG428tz2nSGPBjDxRaNQAoDAj5rP1QChjrFzwzL6QDb6U8fitK4L745omjBmEAhDXsNoiZkVpk",
  "key14": "2f1W1TuW2AsyUZBN2yktKqxHQorJHhffMG9CgnVsQAn8Tmvs5FmDUkTMhxiZD7ZSdhVZGppWrK4rU5yjALTyPPWf",
  "key15": "4bQf2iMxzubYEYChTvo8mj2GJaQszVHMG3HhV3gMcP6zCC52uumk1kWXrWdmNZRktkF2KtoXsCWuAQMpn6DUP6mK",
  "key16": "39t82HZw9zvnNpQXDviGwg9g4J1Nyw97kVF3CyRNMzmospBx4tyV92p6CFnsvPmYyHNbxX9Ekcv5pgKaAPcwyQzw",
  "key17": "5LSwb9M57LicBTshcxFXWfYcuUTswP7TZ4AKqvVq2yh6oGG8rqfkTs46wVatQ1XzA8bb8UZEyNy4j3T13tGKy6HZ",
  "key18": "5EEhuGBVDhWoYEmqBDHw2BL1JuDoTqQ9TbrgCknxCD698MJRrKBenKczVzNoyQpENY4UZGfMRVdfeHPkioMF1cfg",
  "key19": "2pVahNBQknZbGLcteK6Yvnu5HnnYuXYAFDWfJF5HZvvdwyyuQfHXqufsY4X4JsyjqKx8dFppmPe7wkwCYSnJqw5P",
  "key20": "4eLREBCNmteEUC7zUXpcyHpLqaJb5NnTJWW8EqRQEmJaJMEJEMvxnqRNy5P4dVuERMcDvn1Cc3YL3SutNVFQfjym",
  "key21": "4KqShhgPK7Gfx6iMFiQmJvjaJaEKSKDKTS4sVJtKBusrVJrM5wEH5Hj9baSiwFLtsNpYSAdePMXKc86yccWMLnjC",
  "key22": "229f94LdJhDePW2oguHnaYbPqonzH4D7kbR3XqDbjXMYPHBaAsMfYbZ7SogtguAEStwXbNHid29hTiwDUYYSSbGQ",
  "key23": "eJL1QdVwdCTfrPhDry33b7gfwLUruVJ4BVMjy2i1EHYn8cG5f4dRzG1VqLDfyhgBxWa3kNdFNyVYgaBTEXUwA8Y",
  "key24": "22upUL39KMq6zrUxkXVKpUb8E1HPe3AkzcMjoRHmqeJwR3nUQzpurqTHZKZJkWWmfAWye3xcjXMj9cyNkKBnFVgv",
  "key25": "2V3Vo75nYARwQq3XJVPEdVsSohZCf2UYxMGdz48yfc4KVWwYBZMpHvNLTMFnibJ8r7T9LcsFiNZvvJ5hjtrore3T",
  "key26": "4x1scZpyKCBZTaU6xeJwAd1Yn7py4ujtFKpSSbZXYWzREajPjz8XgHTPv82HAyHXQznCho9RhEkDQTiCDDX5isnZ",
  "key27": "4NXXjjkRHqSwcrP4aMrCaE68xXJzvVPQ68sXCnh5Mp41fikTxLj2EUABx4W95VmFH6qMdw6ewdzvDYs5nARo9yPN",
  "key28": "3AutvxPJvo1SjZZUjpo9ypmt5vUcR2QvKzt8T591GhjUYp3sZJoSFMDLXEQrLYakjthGLjY8EL99VUHgDzSnbhDP",
  "key29": "GACdLbgLsbh7n49P4Gk6n3MizxxLhRMni9kKkCh9zA6JVHxcRttaj5fFv3FhyM6GzPaCapwSfyGQxiXMhPJ6VqX",
  "key30": "5JpELbttRHMC3EqJticXH1AZ5BJAyycP3xbjQEpkdarVP1poFLsq7MsE2xwbgty1yXYrEjQjuE7i8MT7xuC5bT16",
  "key31": "2bci4iJuVVqb6MwKAooFr9XC7fzmdKCaifGfEKVi33KeaomFGp62UrbFeyZ2V5QQx5r9Afhi3Xd2RxWdaa98AeVn",
  "key32": "iUFoHNgia2SoV6GhrKhA1obUfRDE6HmBBEXvVCEvvBbDjK3nKLzQnQLTEq6suHLPhFnfuzJ9TktZBNMWAKR7PqV",
  "key33": "28ggkpkmaS55n6jJNTL7zbiSpkFjSMK9C68KkTAQCWBN846FzfXpeCxtPAJQRmcMC5DYkD2r6h1hTfw6GNAdgvPu",
  "key34": "ufczqyLPBBwuyFdqVJejUUGbjWwF4vzxbkoztVqC38HiDsebxNMBwBCTTzPS6kXDpe6qd7htZ7GSeAAsiGicQyX",
  "key35": "5v2nF5RkQKsHeSdnDcY1qwHvbsBirF3ZL1aGLaCphmzoavoYFeCGEViz3jjkERNYyQBP9h8VN2sYcu3i63wi8tWr"
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
