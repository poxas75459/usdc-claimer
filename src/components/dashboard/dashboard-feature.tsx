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
    "2yuoaEwKp6STFjwcbauz5h7GdPaBJxW5GdAp4hLEhxCLAfFi6wGioi7edEpU5oS5xoCi2ppftFfq9cwfK85C8Shu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V9wBqhMQQ2KQBWzT5AnM2XKGM8Wb9hAuLW2V2QTvpQAmohSMRHtBczKhDbhvuaFVPrjJJ4HoEJ2iiidqpqr7wyj",
  "key1": "5zvk56hcn989DY5zRLkWhhqCfSwjcnk3HG2T1iYo7bNZFJwuUSSqeCZP66mVgQgvT5SgvErBC4DLpepfpakyXqyC",
  "key2": "2Qkq7NF6EUrsaZF5uV1RyedYGz5b7bduSmi84a1x8ZWpA5vUpnqWWwrR9jtK2azT2YZFXwEhPdHiAEH441igBe4k",
  "key3": "65vE9fTKi6iEpieTWC7WfCoeitrqrcnS97vC7JeYWVsFh1FgqmUdMxLNBZZnna2qU923QSXoNUjBjXSeKEUsgdDd",
  "key4": "4YJzogfJS9KEtUHwSHJUudKFL8wZvfxs5WCtEriGvFuQsBJQzQNWByYDtKwkgdN9nwzJ9CBw4gn76deJz3Ni5Bwu",
  "key5": "z8Y58Ke95gB8o8HDp1KokBKgUVgzigTZ5kQmzgC75DpX2akw5AYjJkSZXxmmuyDkxoKindVKrs8cSZxZ6Ek6rnU",
  "key6": "3GHCysuyxREGYY7cLb7frRR2ui4AJnSYwDfy2Cm3cpfXvwNV9ogMZo1r8LFJi9vhbskAmnLrZ8u9nkza8jQc6YQj",
  "key7": "5N8ZjxVWTXEX6gXFRCVkyZY8MAaqqUhd7gNcpVzpiWXu2xLnNRs1QF3yFrz99U2GG4sWHXPFTWTdvRiMVu2cDF2f",
  "key8": "45y5MNSRg7hiCia5fW1DJrT8VhGYdc4YSQ71CKMUgrdrWUS1tf2spdArYrSWiaUvXxLbfJBzisyQEETdiqgAEoWK",
  "key9": "m2N5pNJojTVzxH3k6G5yAhgH6yyKRVD85LCDtC6eLhDHZpj4n3SpyNNMjd4NSc4fZpAjXYdRaysQZqkUBMNbP4U",
  "key10": "2zBhFmaSpCRBeibseTrqc4Qz3Rcrrd4qUVcvE674rX3m3VS9kQEtS9EkfDaxc5ApC75qT5nT6SfziSTgGfmh5Kau",
  "key11": "7aPYkJzveid4mf63DxTNgjHvWJpXn5hXxUKjkwaAuCqvWiSxnfbMNkKZj1FYqyRXN7fsqkcEFd9aKbd8STBM5cT",
  "key12": "44rxf88QsNvEWW8EK6LB243CCE9WPrSidGkAvSkRv9zwL8bGgL78z4TXWGCdjdnjwsymg5VegRrxEbiPDw2t3VLx",
  "key13": "5wderm5yEd9PGCSihkiQptQxNnGaj2jPCGKg4nSsMa6FTy5WVS2N7bcmt3WGpkQsMsoXL5vcSdT6Wat9GMx7rboZ",
  "key14": "5X8DdXRcv4E7iBN2yfuXLpcxbw7aT7WitWroyWAaDn8AmDh5uS49BTadLmhn5dM2Y2eZGeW42NMnmns7GV6JywYc",
  "key15": "348AZbwgy4gawd7W5eQF7MLX62cCCqFDqS4Dfc9m8Wh5GytCrYb7AULFn9rKJPc88hpDbFvbCmRWNA6G3Z6DkLKp",
  "key16": "NfbHLXjLZc5d5xpTtCgnat1U4j1fW7nVdiegVuQ9BzeD8mm92p26qpd2aybYEwMtEfqnYeFhQVH82DKFtHRUkgF",
  "key17": "4YvLKZoqu7w9iQ754Av5P5VejdDo92pFhXdm89ZUpVtPsby4V6p13r56TRp7f9GawE2ETQsbFdCdw3CAaEGxJmW5",
  "key18": "5QyeHyEmSj3jggvkF93FS2S8NvrTzGFpRWru7jCnL2NeUuzSj9jDEXL2Y5fBn6LniH24Hk1vbV6VbjwSbTEXYKGA",
  "key19": "2iF8SBNVUbVtRGYg4L3ihngzb2ZJgd4uqAgatZvs6no8iWCSVbm6EHsDBxwWubryV5H5B6wCa9MVCU5agKM66AxJ",
  "key20": "2WDaQCfaAxAibzVJYgCAHK5wt7fzv6oaQFjL6XacqpusftgBBEPzxEkBso2ybcpCCJ8YriLmq3nGjmJN6awoNjpa",
  "key21": "5YZRBLiR1g2DWyP23WCxJrCUcca3PWdHDhe485zh1t3pZbc5gXwfk4y1Dt8J7cLNRfYxNH7J1MoRAxhsr7kFcJvZ",
  "key22": "3sDPgdvnMqEm9pVvwLT4wu24VdEwUGc1PM1JNJP5No2e429q16xShQZ9hfn8hpJwKjhvXy8HyFcV2ZWufJchuEat",
  "key23": "2koCTeBZa3VJjRRHaT7kTaakjMd2dTx8cWS42QSpVn9F5UgyboP7Ta1pdHu4iv48a65JwPRcv643NaDujwJj9W1p",
  "key24": "SxoJo2SHs2hMcV8Gj95gmQDp85cwqxkoXHAnbXL6D5Zd8RQiyeQ8ZXDdrFrvD34BuShf6WzJvv9uZ1EWBiAECrP",
  "key25": "5Aq4HLubjp5bUoh8uGrAbkx73drPR2roTSq2nyNXsbkSQAffeY4V9dbPWy9Yf5fo9aKDrREgzywp45cQy8fjEaNS",
  "key26": "2jyq2ih48YzVxPcjGwGUGoKYGN2uqj2EwXt8aQTTSMN9qNBjgBh96sszVB8CKgp6fYmCt6na7FCEb5493yGAzdVV",
  "key27": "3bZjFmUgVfdCM3qc2sJCxcfXSsTSkuHNzZ16NhLeeyXvHt4ifSVqSoeAfkG4XjT1juN1NjCTAMc8CXCEZxfPreJ8",
  "key28": "2LjjhRQ7Lk5eT2e2ddcdeFycyCaDs98v8qhGkkKLkmocJ1cMZFQUNWkwwgCHttdLyCKoiLUUuxiwmdtbHqPXDYhH",
  "key29": "23kdaiDrtuCo3conZfq1DVuxNmkEWXX6M9N8DmQgRAPjHgm8D9f5Mebv43MaQ99BasFfT6uU5hw7WnLLRvK4pGQm",
  "key30": "T97Q6TStuxZb59brYd2k797ECWUZ8CjDWsEHobRX5fZehEr84tkQpBjPU6zTYZnELcdxgiTX2cApAJSe3uB1HM7",
  "key31": "kwHDQyhDmVvm2v7K2EMJpZYfjEz8Aisgw2GmZ1qumtWKo6hK7eLLzWzAzjmQmi6TLutgdMkybgtwnHSbWRfULa6",
  "key32": "2efoTfbUgqn2bswp6WGsWGfcP3raB8N3fge4i9j7UUn67bacKkJBjp1GLU89XMqhyGdEN8hjaauHXXpFZhpC4qUm",
  "key33": "4wNTc4G5XxUYh1J3KTfuZ9gVdTQdCYA1FNSNQvMYxxdYqvMyo3sKTzWkWRCsJun2e4is686dA9DE7jfanVqAAUtS",
  "key34": "5a65EVCDFmUjEoMijLVUQCVo8mua9iwWqSGinb1musphgmdcM8aLPo84bQ7gGjYRpYvmgjAev1qsHKEM5AZKFAJR",
  "key35": "2BN1rXAAwoySWdNEQ2dNy4wdKb7nM1H3x3KhR1VdhWBnQcwkisH4r5xTeUbwAGBF3YCxP2E8qaKnM4VRQxENXFxy",
  "key36": "3tz2mqBzDsLqEhWNBzm6eatpbayB34jWKGVXKqwuLdmBca5WTEiCaq89R4eDf5nDfku9QRudb1mVAezyYsX6WdQP"
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
