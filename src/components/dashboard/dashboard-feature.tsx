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
    "3rBeGXzfHdHVaGT5BLHxtf32qKtfQgZRCBVwkWjzQtgQoUpUPyEbebsqi6qX1MNorMviLWtnUEDoX5HKrR7xEwii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uN6rbdnqHNMqPws1nk3VjWU9khu4xbmLj4jVandZzAmYjCqD7MYQ8Qojp8FDoZxQ1Exdctwz5PMZZQc2ifVytPU",
  "key1": "2wannuYU2pyMu9boigz1wnFfA8n3RZYZKtVZEzZbRtJdXzGcL1bxrgqxRFzHzxzjinAmLHfhKtsowqdwPXpDyWKQ",
  "key2": "2dwJwZm5js3iYx8iNfMBM4wcNrEcoJF48qoZx5VAteLnpHW8pxcUCkmnmVrNcZw2SCPZW6kNNL1WQvkpZ8ZfhrEr",
  "key3": "33txbwQpPNn4kKUEQdK33AvBrqxPMnHPV5xApAZGMUXcDo5WhkaJKucvKxgTwkGab3rEaPRWwceGGaqbV3T74Kaq",
  "key4": "4FSPRK6qdAnzd7ztKS5PyX3c6LymMCykkqqrYjXyeubYp8yvJBYAf2fyvBwyJ1DMTFeJ9DArtCoC7RwDgx92Mqq3",
  "key5": "2F6W111X6QZjQVUyrUs6uLeMiNv4cvroDvgQiN9UXtmuWzyAYGYe9jArc8k3ximqVzi7HL5tG4HkmpWChFBmLDg2",
  "key6": "wwBnJJDs433r5fDtqpWBJ6yNDhBV7XSUjjwtDpjppf2qfgL9FJeecAGbS2ktHtXxQctA848WVis78YMzGbAS99D",
  "key7": "2ja1ky1LY231Y2KGydprsPDdotPjuZcT8ST7srr2xCyTSqdt7ZCJwQQ98VsAfEDhDneB411uJGHkV9DfMfVn3SCm",
  "key8": "2mdqWFzHxF9pZh3KwLwi3rQ5qUsoeau44Zr3jTHJiA5Qgod3BrznaGCrSZUvHNv5etYSvrTzuKWwcrtA3aBme5pV",
  "key9": "2qKJpYAyEBW82486kD2npmVCc75bf5BEfkzACAoiMvVnFHQP1Z3VMSzHNf4hw3qQ3qagvWgkg1uwjb76NLKYQx5X",
  "key10": "2HLr6m7B4YkMnRGnfoGxGPTCUjzLwtRZ1MhYNDeztRzbTxDJ14V1ojZzAhPfiKCumgHfmfiqkEWUBpyXmiL1cH7a",
  "key11": "ib8gfJpRXeyPswSTMiNrrYn5Rkss7UUXc1UCbVgNaZrHrqo5TTiB9tRA4MQfVYpz12FhpWNkWB2shNxuZjDTpfc",
  "key12": "3AnqjWe6P9Bf1uajiGUEMoYLvx61fufmPibTuBC9fh3xJ4aSEwLw5A8oH5D4VX7LwMgToagpnmMza6MEwEREfhT6",
  "key13": "3T7Kaz5aRuQYEuvV39paJTfyPGKjw3pwwHszmq7ADGzbkohsJ89Ti8WgCdoS34aU42z7ZXpCCp72vnPt7EupMYhP",
  "key14": "AZf28K2tNMdBtxNqdRe3zFaU8LsWuPHfUYcJrAVvW5GMz6aGsx4dBBegEhZPyQZeQXw5Kx8xDgQo6kdU1DvyEDp",
  "key15": "48AHzsYfnmPA65thEuvbzgKDpfUaStgAtpo7KFaRYpxudqdRbae388iy2N1Rj4gU4cs3wZ7xU1griySNrAn7yHJH",
  "key16": "3jokAUHKDbmQk6nsXes6TL1cLNGoiRt6Wds2Lx5j8yJQ9VadcFgwWzXa852GhVJtix7y4Y789GAd2PbETQcqiE1V",
  "key17": "3a4R5Ngte5NDBX3A71TMFDgquHdfWbEps6zjjPvs4LrsUKB9zsLgS3npTqRPiwwjTC5KRH7wqGa3NerP7vKY7GmV",
  "key18": "25xpZJUncfFnGV2ch93xxHZSrJu2LHTLnGBPUpNqRpHS9FmrQUyrs7XpSHb5EVunCq19Y46gMJjVePijdNH1p2jx",
  "key19": "4YE4xjzrQ8XWEa2AW8QjAVPbHyeLLxfjPtAQMggZdCgbcy2S28qGCNYQXUcuXUoCNc1JGKbPkxdFUQfoyjBPMhUv",
  "key20": "5cSzdCTx9qaou6ZvSWdVRkjjRX2VZ7K3GdhB3rw4J7gZB3nn6Aopxnb7A8YJUv88dHrSYeRQb6JmqMuGGCjtd4RV",
  "key21": "4oRbVx5y5uy6ZRP5LeV5AccmR6Lv4g42hbSW9W1CntL1BUEvcPFVDbJMUS3ZoNWGiXv4RtMWW2Svfnxm6F1XFWTN",
  "key22": "yKU2w27nVmeSVixKyVnhncDNfbfmuwW1Ma66X5DnHjRurRgy48MG3KaVxPamFbSRweHU7EaCnpMD37PBk148vRN",
  "key23": "3EVXxt9RFrkXAYPJDq5Gf5tgoupQrvTS5tsrf74ZBgw1Uqe4z1tTVXaoEecHoW8wG9v7g7UDGdrRL7oyHpgYtuXK",
  "key24": "2BFrYdAf7d5s4WLBRhPL9GRevaitHLEWamo3VxxjoW2Eb8FGRw8v55V5UNQk9sxu4iunV2Qfq7fJtZGQ5yFHDKCm",
  "key25": "528mDYuEEQFqUSMQpc3ok65o44g9K5Uf4KK8Ag3zSS6ewDxmB2m3dvAnSgupWwhM8tbJeFv8CcXtbWiKSqqi7TXV",
  "key26": "2AjVD3PrHRdyVyEkiAVTBjHbH4FQzknBxYk8rhw7XiMxKwYdYGuz69ETY1URQq8xsCBf4j7Qme6WFdKRjrhB8b8s",
  "key27": "4cC8igQEDsFGzdBNA8iQ2q2KHYMokABQ4MJ5K7pnpmY2Xt18sgJBm25GNMRAwSQxiBvjjv6kj6Bm6gT2Z1Nu6Gua",
  "key28": "4D43PTs4AFMdwGUsf7pEMRC23GGGgF9T66krYLbGVsYNVWHb7T2b82jfGmhiuhjkUfPi7FMYu9d9nVtNWckWgPT4",
  "key29": "22RR5KU1XAL8da6tSJAP3L7Cbs8DxFZ6bUBHnHrx4jMQkmAFARoRwyNCA88gScNec5NNFgrt92GZxaSKVBJQAj5o",
  "key30": "2pfUNkbKxJ1AoBgyhmHSJ52uwPSbzfiZymTyXZBo6rMnAQDChEC2TcGfTH6LhyR36CGdfWoAcVCqmraD4iMEbJ5Q",
  "key31": "3MWqC8UfUdy3bdtLhbUTNEZaUYNepXZxRmy5xGKVKRDcrWbAEBtwUgSUNzRvutUq1jC1WAapCx5SCEkif4XaBQ78",
  "key32": "4rQDCE72a9kYNUhkberaf2xZxoifUXL1pdFMiTBA467u5oTQ8z2J5Rnub6uuDJ63XoWvA2ynQUU8zQHKSAHQ1hxQ",
  "key33": "2TapgnFr3bdgJNC5n5ck8BZYVeYSjKD5isUg9J9nDRpab2HyQL9mKQZpT8LR8hwVPvhviM4SVKh1DvTqEazwqogr"
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
