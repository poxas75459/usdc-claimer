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
    "5xy8buUAdDxAgJsq19xGcX2jtAw3xqoaLTxscLNQKQuEFJWgRoB8QNSXqWyD92F7x11FZFc5fZTVaQVthcXJZhYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MgMkHwbjaNXtcDQiAQJtxJjeMjx4JMEj5LqN41cewdii9ZEoh9hJVd5unmJWNJHhxyPnK5NF4mdUxemREh8fEQF",
  "key1": "51X9gX4nH9SKRi3sZchba23sxQ4qu4oNX5v6WQCxSxFRSRXSXuUAgh233fBD8DrrpKQqeHxo5Y34aTbRSkQHU4QY",
  "key2": "3PxrFkMqgvBRWQzsgoBkivbswWpAZFeAmbT3j3fxQMxxaENjCZrxwCqYZz9QdjUU9edBcNudyN9RmP6JD3ntCnz4",
  "key3": "3E8VdSkzqT92woP6Bo7nabwPLZ9zidqYm8Qp3qDznJGLpau1guY5X9U8qbbYg2Mby8TCLWWJdee4a8ZGU7ndZeZ8",
  "key4": "2jhskTXFEMM6r5PQRiCfuyjDAhGUjGHGb5SGXGZKr4pMAA4SdT2P1aCWJVMcE9V393k5nyLNjz76gTku9zNUMdbG",
  "key5": "4hnGtGrEC4eUnkuLRztm3LFR8MUua5BQhbCWY7zQqPiQ4pTd69GVV6vkX982KuULdWzBhXE1SXcErHnkReV51jP8",
  "key6": "3KLNkytzAq5QYkAfi9BXJo5obyffixDoY7xjEUH4ynTm3dbMhDyzyvrLD5D2Ymsy9UCrcpE38hL2gtBvMKqLFHMC",
  "key7": "2U3MFDe5Am6kANnG8XU1aj3i2ohHksoFXtsoR4e1wLdKhD39S2HQyLHxNYk2JC2Vkx72obvW98aWRxAkxUSrvNPC",
  "key8": "37B5VVSgCzgLTBoRjtUbBZwjcTY76XSKRbn6WsX7aNLAR7cGp5BrAzeQV8r2BoLsQwpWq7K8ew1pt97QA2tu4SXX",
  "key9": "59BSUU4PiMEd2C7pNbHjxVip4mBruVhP6iwSLMtMhNwWLzXarP66xKT2qSq11iZXTy7p5KqXxXUXPBV7MjBSmeGU",
  "key10": "3B67cWZ3iuoskNtcvUyZDVEtafZQ2wPDpbyF1okHpqzG5FsaYVgK4MstLkcuM9iPBzGz1sfzuj3zmGPExYNw9jp4",
  "key11": "5edP9Fgb9JMcbtRTC9oaudcXAA9LFNXHTL168VLaHmJhPwJzXa9HaHTXV484nGw1fecM87oaThGbDHHnXSD5gLbw",
  "key12": "4VQcJgUwexBtimBrTGZTTeVg4FAYuFrSco5RvyC1eRzQyJubRxB6qjcA8UF11xXG17peR4eR3ubfWLy2tNRuAo9P",
  "key13": "zn83JbkfqMcDd66ui6mNwMLdNJEVDXuqvuig1pjyueanp6xMwPuhfrrjyAF3gJiA5agFuNP8LkaTxk6ca1CyLVF",
  "key14": "GGnLmn7PdFYXUgfwkCAF9zQFCgjQYR2ZroqEVj3JcevLsbzUpdkA8cbqqczjagr7QzmG9DYq6tt4yaVW2FG4k4m",
  "key15": "34Qq8uqNKQXDvny8uDMtSgesuYwZPEpsHz4HKSvi14fuQharPZa1TZ4wpW16Qv3zkXVrYLHFNFo6ss6uhfvfCnCz",
  "key16": "2NwmBQ5txmoVJPRMGnuMk5pF5xCBGDGR3E8r9tPidDv7ikr6eUpHr1n7sVaTkN27Z49hs3owQDh9irabPixJdiBW",
  "key17": "2NfWXbjcqhwBzW5ttxfKffVAn2RVZqzjYKDhQ72DNcQeRXtHdnRKTpeHYZZbxdfDgkQDexfTb3pcces53dXM6mv6",
  "key18": "mNYMmaCgXG2BdUUX1k28J2CdiLR4ZcyGW48csR7p8WZbJryFKdQT2oRowCTWRbWGADTFFywerETiW6LVEMLo5EQ",
  "key19": "5HzyqF8RYGyKWi5Hs96j2c3Qx3QyLg68w5C4M5KG7ibc2XhM9MYASp7t4jPyBn21F87xpySiusE4ikYPvq7FjgLm",
  "key20": "32XoS2dg5x7r7Te2K4sgDVQ3uyt76vXd1pRsozS9MXkZo61aWMjqFyxSKhAnxrVK92BgmH7gEtv5Wni2Cf8HuhzA",
  "key21": "bnSXFTpJkv1SvFVZQrvD6pJPovTFz5kAEoxVUyXcfHAdvvvhSGfTLAEe9LUWJQGPXqCzeLQKp2iVzAe48EVkvZj",
  "key22": "4a6YiC7pCLJpLtpfhuwS35ygsQZfM2XW3hvAtNWLjUUWhQd9Tvs9X18dcNotmP4NNyEuSXHCG9sayTKUxdhstnBm",
  "key23": "2mquwJbC87c6LPWmyTzhrvifTFNAzT6mBrYBt81PTQh3UiH8e2h3srvZmrmdf36c9xmemacgvoytdWbkWYuoSBhh",
  "key24": "4Q7xYVfxkdadHzLB6WqazZKmxDJ98EoXDTUmff3aE6h5P1NbUEZRaxCLNZ9PiEC2LsfqrSaSqZXF4cCjBQwf7kmr",
  "key25": "2pqN2Rs9qXZ82DQeiUTkz5gGAcEzER3FugsCTuWtgDXssPXr6dqndwHyRUCJh7w2Lyb6UTxREMGNjxJnkKhS951a",
  "key26": "xYUkirNsNcqt9Xm3MEMSHzn4uA7Zg6h1f9KdKCQ9GR9YtjgeNYzS2vF18bgvphU5bz1W66VuvDr4kbr1zXeB39Q",
  "key27": "5yUXherbvfo1LvmKQbfvwh9B8Mfes1z7kfomvyRQmULdK5e5RJQMGaM2m8ayx649CPMQea93832pZQJoPxATsQKf",
  "key28": "2M1iFEtd9xdChLQ1K7XP7fStUVBS7hhPgEuVCHM4WQJvrNnxsV6YLGuL9YDs5rt879o2K78qd62GXXJuwfnU248e",
  "key29": "2Zg6Hc8o7eWigDeZAoPDbGYVDhrdt87VBh55X5r6i3HVBfuneaGWe41XeqYseGaTEJNNRQJmSPsTkZi42vcttSH7",
  "key30": "4Uj9enjnrdKBn4abRMWdTmdXb4oQuYc3VmYXB3oDdKbHzFVQxtyWnxS1ncxLkdd9NqFAUSG6DLquHdbeR33pmNv7",
  "key31": "4bMTdNKfZ8nXFFyWatqM5Qf9ZqLrLXjtUfLn9vjywdLGC6zokKXwpzHgWpefmUDPBJ7YWEkDndAHfJnFC7vdRvo6",
  "key32": "59FvcFLgBsGJPed2nuYQdTNXZDuWSySur8HZNVKeYv8nuENwKeW3jZGuaUgHELGz5UFu5wuHchUCaTdQBmwYBuiZ",
  "key33": "2FQAgExaGQu3THkvUmPY3sPEuBBo2MYQ2pqfuWwtiBTjTHJfja2VZyWYTBqoqw8ihvKREyotZo5Zg4m6KMaLQmqd",
  "key34": "5iNd5skFEBkzxGwBV6JWY3yVeHUz7YLU6MBc9kgjGh63FyKJ5tNrXxCLf259xjYv8moEx2xSDU9zMZC8J54mN23U",
  "key35": "4uKYAsQ1x2PMAT5dRLktLB1MYHzrvq3xT8o8Lg4JJhD94ffMqWBe1otybCuwxP1MjXzesVG5BVRZ2JqhjaM8yHrU",
  "key36": "5G8R3mthghdoRzYBH7kGxLFUTbYgzNxUhTy6JpfmmFnkLNfLvyjHzyCHH8GafEfNrPPTGrurrJb1SVhCPfQAxjFr",
  "key37": "3k6tabxhbvzKQSsVdoSF2XWu4cZkcw3uCwwinFkCzxuntybqQpza7KAnoSpSJFnqxL6JG5SKmjRV7WJ1kQ7wifMq",
  "key38": "dhY7NU8hwzqctaMwPC1fnbqQbPiC7FQwop5qkDZWFynoZqCtkefHToKBB1nGKDW42iwWvYtdfcfMz64JgJSdLZb",
  "key39": "2rne8MV6FUzxjwxZeGg56KHxJnP6ciJ6z4aaQocqxTCBbpS8mHKVPVPwj3rbguGvMoKV9MpcNaLnNuxx4Ruh6A2w",
  "key40": "q3S1RRUqLzoXK69DYvJcCPMVLM7ccooRJ4awVZF5xNNkyhH5iHer7kn6dgq3vCBh6kbnnm2pLsteLodTt6Q2xfg",
  "key41": "49ZiuBgoKNxW7UnQY2zBwEEeKnha9iGjVxxztAKhHmudVv922EBjcFDdp15FYCsceysXR99dKqndn1Udsm4Wc5Di"
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
