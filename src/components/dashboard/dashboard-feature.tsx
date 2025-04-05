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
    "4SHWU9qvATm1dTDHLTowVrMomQHvkbmY1meswHDFRTJ7MMgWiLrCZmLVFDLLJHhvgG8UNexEZedrtaag75D9CDCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fmDEttdPyzWatU3qykBBA4Erd32SeguVwnkwCbwvF9tUqQu6sY3m453ao8Awm5pzjF2GMQ8XBfmenC6aBMAAruK",
  "key1": "3dCfe3Y6aZCDzv7XwdAbftCYtcmX7Eg6MndH7AoGahashbx8Gu9wkUePMiTJoBfSgTTWMDcUBTfGr48r8uo282Q9",
  "key2": "2QVJghEzXN7jEQvfAXZTPtBmXGk7b6uR1ZJu2aNGABEDTGxXN7TC44rAfAMG9rWfrAfKfduBHxTnvneZy5NtRuZB",
  "key3": "5icHKRqaFFzX8e6Zrv4rQ63Ae7YA89tWjoB3DB8jCzaVspCNpsSsQkDbRG2gyvbgXckgNJyBsygMmU3U3Gh58YrC",
  "key4": "4CRRHyncV1oLXnmC4cFF3egP6zhXug8HSwgzeeSK2PwPyANEcvMcUB4MdCrrRNcxxFHvdtatcSVVJQz316Lhaakb",
  "key5": "3ZFFAa8szgRqxtGV7So7mXPWpeRSw8feV4qamkTyk9j8HE3expBCtGpnEhUD1PGe5LqR7bqDkVLwzZt74dHwYMTG",
  "key6": "4Md18g7UwBze82PTzHysPauwuzLb2fEWF4hZUXj2x475mTmGnDsVjR13w4QahxtVe2SzC9nVBxboix4Vn95rQ7uG",
  "key7": "2wMsCugwBwA9LEY3dt1tKNanvuPMZMCLFSKYHMQZFgBpeJHx9w4R4rkQfuxVSunL1ZdwsmVrENvSXCJorbiVwebx",
  "key8": "p9psJ8eFXkgoDePh1QAo54G3P45upUqmHiA4bRrJJKABzsPrbjV4bttZhCg2yKtjUDdL2HMySeNTcXUAtDhLw84",
  "key9": "m458G8GKJmu8ryenrQa6AyPEjqrD7BPdZaNyQmSv3FV19buG2mRKYzgqXari69wJz53kNKXkDTUHXNiswrM9miV",
  "key10": "2Daj5j8JnGfNRUGVSus5wuRMkTwEtPimU5xLEknr1JsJbUmvQ7qzN83VKabn7ZcyWiNwofGGobEDYnmA26EdUEkz",
  "key11": "39vM3AKkkjkDJZSSiGmMXrXmpZsnH7iLJigMcoG4RJdDtjeo3b2hyfzAN6NoRNr24yDpr3USiDb5EZxq2F9NygsQ",
  "key12": "2DT5bQsLRRJAAPrevP3UdVMWAPGgf63KNAnWjFW9drrZDg3VaA6k1FDNngj7Ck8J9YWAnfGWyeU7sj3YjPuNuoCK",
  "key13": "4YLgXuYzWaQMfYf2mAoTDKoySei3PUWPzuvcg3JrEFcRdEkarLLLjYssLkUsXCDAWCyHaxPEVjvmm6z3nrK6SMMe",
  "key14": "2ubeU5vNWmAfzh9CgJQkED8WDrWyH32Q3tTcv3VmXR3Sy2gm8XDVqJGsQEPHeAbS4HbekvJDekf8eyNsPEpcsK1z",
  "key15": "2zoz1wgJwnCfH4Pkriqm7Qdp4fKTioFSEt692BmBUSrmNVE6eGiXfMjDwBq9ayCsmJGuqYJjHStZzQjmpAgqUi9g",
  "key16": "4uH6gfV8VRcJzKJtgmV9Zr6kjyQZW9WV5bMA1QsZr7LhhnycscP4JS2qq6LdNjzxcjWzEPTNtZXoJ1b2KaQ1mUVN",
  "key17": "3RYoocYarjY82ZAuhaDxUUaJYxZTjz1QwcruXGqp7qZ7mJaStwS1yBdv2ZESbdcWm8SJ7QkzDrThk1CqddBvdka",
  "key18": "GmVfCCQUDgQU17Jbzb3NYxcUNrHmr4VKKLmnzSL5zFMr2oiMvqAzgNmcBMHpmgpE54MzgKJ6KXYwSYtVE4BAA47",
  "key19": "2XMCTF4s6tCkRCXRazFcUR7fsxEvuC9jcHgWTCLzYPXBLWnGkrjduzapQ1hkAyoSARnct4QeH6bmmWgbfXz8vsJ2",
  "key20": "5zH4kiYkDd5posgdCP5kLzBEH4u9BEorW9Wp3ZoDJnFoJYYTtFv4EyHrpQFRhm7a9ijLYpqdfZ563sGeL3D6Z7SY",
  "key21": "5ytPjr4FQnE2THTa8DVwtcYo2vnmiNzrk5SRJhkq9a4jQFLnAWA8c5HkNT4DJN7PxxiTE34i5G8XSLGB556w8h9w",
  "key22": "3jDJKmHun7MqeEuerZLV13RicxkGgDmScihtKgx5VpLhtNUJJTEz47VfLPDg7Ur6JD9kacw5y3r76nebQd6v7yHD",
  "key23": "5mnmcDGXFrLNziiN2tx1kwgaQMmmsR4MqYp1s9nLx77ZemyTZZE5HzrQwMPQUSd2fdv1kqTEg7krmiTVuHGuQFBX",
  "key24": "5PRPEhCefMYtgnnoUou3xy8HLZHwzqv7f8u4DZL6KKRhQfkfAFcLVMPysYhCr1BbhbuGE7ENZWvcE5ARmrzSFUm5",
  "key25": "xSJQWNcstuMGJVHAunwR9zHnXGC3UQTtWQQadVhUkT9yP2xYV3nS9AmcBvkn8YkhZdXE5YdmnWh19rvdfCEDdr6",
  "key26": "3tYTpyTQR9cc5hdqZ7ra9TtdJQPp67ubG5uz3MRjQUC1jhqQsRqVXM79X4emaYFxzLsEAwLjtwEDcMe84K3ejxA9",
  "key27": "2oPnXxqEYahGDY6NX8Ht1o3PGEixfbNd9DKMBKSKnDVkqw6shDT7btoubMJscMyqmyBAtMnysExgCNjsfREPbchV",
  "key28": "zQ8cQZn4DE6VTKqwjr9B3ivVTBgLFs33rNgPHsHJLbkuUogjJqEKiFCcYf1G6r56r9HoQoTXhcbmNVU2orShzob",
  "key29": "4GJEroNWeZfkrKqUTP17pduTPjSL7WHYewzpB759ySXe5x5jPRUZG5gwWqbTyk2y7jgmL2xJjZqrWMyopZX2GnTc",
  "key30": "4iPmrkXiJn7f2Gn1yfNGKZizYUJeiZkLtRLAyMm3oEmWsKXguyfEdHfZbZbcSUR5RmWzSxobgWYnCrcK5ZKV97xZ",
  "key31": "5NZjBNNDYpW1gxRuCtXg6acS1P3L4fyZ6LiJqCJ5XBU2Vb6Y4oamLpSJD5XcWoGhzDJkd3YYBkZ63g8JVzJyCBnd",
  "key32": "w9yMPKSvRb38X3kDEn2PSr7gdYV6VWwTYGgNK1SH6yXg8SzVbzMyhU1PKTnKrZHVbT7VMueVyrB4UpJwo5Cg2uH",
  "key33": "67EKuKRY5EjLE712hThcNqiVredzeuLzo3jjffBchjs6YhNRaKAEtkvTLqd7ZKeZcE5rbUQe9UnYtZuSEiKztTit",
  "key34": "5HQ3krMTdBs2TMs5nNWCukiTn1epYALRBeaHtTn9zYsZAEwcKpCGUyy9oBxgpHWbc1ttX69zi3LSHwuo88c9Wgf",
  "key35": "2t7ANfU1mz6DQG3CN5eca9Bet6sK8Un6Y8qXy4JRjQ4dCLWCiJBasqwgCh45g5BcBGU9tosJkMZNDQui21jd4ait",
  "key36": "3QBEGxBrB6sf1Cf4HGwYbUCUX9xqbj7p9mkxbgrV1oeMvGka9cjL9SPeBMDY4bGCDAPErdp7W4Y4gXMAg8Dn4cH5"
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
