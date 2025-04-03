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
    "3BKvMR4KdsY6y3i9fCvH95dW3ZVa9tW5pJgNwchyutGt3HT7QiyktoDAxXUsh8SknTdmcQLQ7D3quTCvxgXERtQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wc8iPwSRQ4gQ87ZQ9nCgyVD2XQBeiWWaLnEn9QuT31impTP9nZjDWUpxBt5e4azmAA62yhJppwMb3T4x6WmjMiC",
  "key1": "718KpJFLNyCGudJFWmKcCduMHjnX47WZzKthFrw7JEigsTM45LfgcoSFqNFoxhs9sUNChCmG7paqrTzoWoJ7ry4",
  "key2": "5XNaHhsfQpQRfAqT2Au1JheBFUjjedfMWh1XhxzoatRywsE7nKkEdGRFXuamcoUjcvhANeSfbrf3ATad8756JZLw",
  "key3": "8qNeeqGnVzeCWjybzdV5B4o8YSQiV7iQPx5BsKbzM1SwMbCWuBdXHSXdbrEeWASZTcVBPacRz21HXrsEm6TbcA7",
  "key4": "29mq6XK3cRXFfBKr9wsoWH2ifQmddQAFpixaQwZtTcXffeEMggb2TK6XUXMnN48ydkGomdxY2jqv15FkjprLy4MC",
  "key5": "2LWew4Fco64KFALiHLSsbJxWAog4jnTrHDWc28Nzs5HKRz2AmE8s81jfAT19X9k5kFh1e94yHGjzKjgi99mUU4cU",
  "key6": "5Fmbh1188jpPyom7gffrRBrwdydphUfb3LviXYoYAnGhJLdMAmrPYvT431xQfGskbL9HDPjVQmQCLBamTeACoFBB",
  "key7": "2Wr9TNbk4hD9w6XUJaWja9mFqRnftN2KgNMffFWJGdbWrZsbNyVrcmcHXugpmTBFV6g34X5m3njbVznQd7pnPfM2",
  "key8": "3YGmrW3dRAew8ACM3twZfvBD1ewGYPPoqoJvE7NiBKVXcMBnRds4M7UrmfHwpqJJKZuMwX25SuNLJ514s3C6ozqN",
  "key9": "4YcoMTRVJJ3ycyzsAsoUHo8gbUjULfha7XW2nTeUJvYsNUzu3DtWKeDUcszfWXWKuMXxagVTmkv7VVabzY47Smex",
  "key10": "2waqj7dvRbzKXtUeNTSznQVGTN5trqfYGChdYbJHQ44JH4dHA8BufWRTgbbgCCUXY7K5Cqote23HWhZkwhgcXsVS",
  "key11": "5Dui45JLHaTr24rUsc48u7Upz2MJvriiycvnLhcj7qqkvDUyNd1EdbHH841DY3tTz8es7ahtwLUwbUYk2NM22p2r",
  "key12": "5npL7LhQYgrhaj1kHAiBzVwLXBy2AGxiGLcQGuoUg5YTzBysb1QC9do3MAJAk2E4qSE9mL6Jqrbt2JMMy2ixup1U",
  "key13": "4fDYXd8cWdwmzPt5VnbJeeJuFps8f26qdzZbEJnWrmuM96KSMWtu9zpY9pYrHp6eWzUNZZzLcxrfa2w9Sto1uL6c",
  "key14": "4JX7ZRRbunEkdgvaBnkYfTW28EbGg4dedYgQ9dwjskQmPza9nK2eZbtd1yaiBMyh6fhrf561h8NTn41JJAiYHc6Z",
  "key15": "3Cx4gEbbW8UJwVhpCHj98CdEcyFRscZPVQpzmrf9ssdVauHvkAhHBMnhbvrMJkpFnZ6Udf7Gv2dtZdzxVNFdjR6V",
  "key16": "kXtSkHnzKwyi59grXeMPgu2CMLJxEhXsnK4pkjRBxJPkBM9fM7iTVPfRT4LQuwhhTKYP9B3hpfVqkAQK1Q4Vy2p",
  "key17": "4Y1uuZn2GQ6pgqQVR5bEHp51Vest6bTuyMHWhsHoq1W3CP7qhYdfKqCvNwquWTp7TC1ddCZTP694Tj4hfQ8XxS24",
  "key18": "55f7wkFWBhcTE1jhuZYbvGiZyzLL5YvpqsiiwAJk6VRREBgyzfCKVZv1VrhXxmyLT4MCGN8gLQDCdVAXwT9Veuzs",
  "key19": "2xzwkfqUXTzZTwiYNYxhiZPqnyAbkdzcyakMVE4mJPazNvvyZ164h1ErRvonh5wcYVJi3d4r2mFFPTiHKbCkgJqa",
  "key20": "3jYum1TA6NgR5CZcuoy7hWSNeXwXYgLXoLBDMXTgLBrcVAiWn8aY15Yo8ebKLL4JyMLRXJkJEGxJ5xgv4T5nXpvY",
  "key21": "2d2TPp9CpPctk4qyCh2UH2kTBwgdW5YgZj2cF5hqMfctAuJkU2ZVoa4DfAXknUZBPxD21zotd1p2DWqxdXXTqNUz",
  "key22": "5zM2Q59dQ5eP6mFgah6UtgGucoTkfxXsEiPNQfTo3zsUscL47R9GyEsdK3dUN52PgFgZJuM15vBi6AKTBQFJr8t2",
  "key23": "4DL5Q1CcQbVZsdgDDMcaa9Xiu5yJcQi9VuksuvsGL2hK7rQZ6bY9gjpQgUKoeYAFrpjigRmg9chsiuuWqQyzovY5",
  "key24": "5hXqbKJQbhnFnVCiUgntXsbs2SJucAc4Z8RQXtyquMjdydMhpwmRMLWxSt1RCTX8i91ZaNfc58keDQ8zpSrFFo2T",
  "key25": "675QsXJcTnBCF4vD3DLisoxCAaFcy9XtBQUxXuy7e1S96dVYmWGQdXDqwPEXx9VETJEVpcT8AiEyWKf1kbTHZp1z",
  "key26": "4mw4HNUuMkrAsRz8Za5XLcgo4LhxuCzV9BHVSbAUnRwThyhgS9hDVvtVihqEZAXBFoFaMvoJujpVUcCzAFcC6LrJ",
  "key27": "4S2esnaYbr9tgHk7zggyrbyTU1vx3SkDnnzJpRGQhPfvAcprheaE7bQ4ZcaGzaW8TM74bnSg3P1SB6NvyVmk9wcD",
  "key28": "1kGJrKscViGXkMngisAofEaTQ1TuUJ5zjaVKXJpSFGBjMcH1NuX4XvyvUhZmWU2oSVySduE3gkeVgrR649pDhX5",
  "key29": "vHivGvXbK3g14cVJZtu7PrGowdKPtFBBJqy66v9N1knMHCJe7gWXzEn7X54bZbQaivgUAYVpe6MZwSuefQPuA4M",
  "key30": "2aEEn3ggALDamS2iRrxqZtqA1vrgWf7s6jKPejDtHjB5pTuyrQUGZYzp7hTiLbB5fQEFcRuWWKAMeBY22oRRWT6o",
  "key31": "498fsM1ehTRHZ8dozXmbHtg8xWsSSmjUTKruD7kJo8roeBmNK8DAj7YSh9HZexU9QWtbCnGt5bbPSDZa9DQB6sX6",
  "key32": "5e3oXgWzZCuSeHVPaXqb7pkqhVUB7vpWbL5wXWyavCuHiDoDNREaLagrbfvj4HF7PTWMiLdUTMgEKa9iWU3NghJA",
  "key33": "2nrfdLQSdUkaG6r4rADw3xoASdQto1y3ZkNvVpwCHNCXA4DBxtfUfH7Paqg2RkrNfS9oKG71PC5D7wEYk51FDr93",
  "key34": "5mpfjUZx92QA9LaRj1VeSsYnV8swriVtsopyjpzswTMFAbdZCrXuQNQhdGw9Rj5kTah5UCMdqEvXTQuBBubyaPtV",
  "key35": "4fseQ1yaRhbEdmJub2hur4qS3mwJBgidjzsafx6djgLf7kDBG3p89UFxCLqQ7bViJrrrDqPve1A2Br2QnvztCAu8"
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
