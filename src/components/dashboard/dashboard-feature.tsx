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
    "64cYrPiVWg6ty6TUyhGUAbBmvLHnqv1ySNn5D26MTKnuvMrAinNddGUnsKDXNgLBw99wg7bPps9oWpdbGz69DYr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1XUa3FWfrMUNHdgAMZf19epEaoELk3KuLWjnXbTwtcLTFHpLts6AfiDU8QPdCe84qvja5z73CqXLktE7QZjV3p5",
  "key1": "5mrmu9p5zxbc68XqrYPvME71bqpXbU5xFSeQbi3tbggF4cBoa5FovuUSgcZpPJaCTQGEQwZ3MX5cXauT4WzRVARY",
  "key2": "4VzanuH9bcP1nEnf1z1znRGUJ6E4DRMCYA66XKXSoqdrXocRmjV8xu3LiNy7b5Tcdtx6h8UpYLuvwA5uDv38iuwL",
  "key3": "4ProdSBQQmrxpNJyY5ueqtKbwAgXY5p5ukV9wWws1SnwbQUukSpFKWiWWWei3NfSQxoWkCzQPGn7aV6xB1dyfhSy",
  "key4": "5rS9pnDSmR1yNrWXNmzwwZ5e2YJ4JVuH4HAo9pd8EjsgEusNN9rpABxiUDndA8Rbx4zTDK4MhhLXM5HWbonRqwLt",
  "key5": "3ScjHBFjVXvJKL7WtZsLcQ1NC8Rr1575ngJFuaPA6Zy77rmNWKj29FZ72q1c37PEFXxpkzvpE3T2E52dTVQrHpv8",
  "key6": "321XbpNpRm72HGvP9H1c6m2rJ3iDQK9hgJEvrQNMAgB2ik1DUvmwTZBEN5ubZCtKhN1pivTvRwcXRNDLAA1uioRu",
  "key7": "5MhvgY6kzYzx1SY8d2Q1rDhyWwDxsGu7YW6CbQXwH6VkT88ewNzpWZw6bwQzGdq8WFwfyBmYjzXrFDkC4mGs5CNf",
  "key8": "33HsCwwGg56H3F1KohoJSaPSwRh3oNnj7LbGP8kEJVC94bVBcvdS8Zx3sQG2hnmLry9gdyZZP3KNSZMJVskSp4zf",
  "key9": "38yFfivGBgDGrJd74KeFT1vJqHyWXgpKBonHpwDJXgDytvab1Q2FTVhh92m6GuHnBzWVQ78oKPAS21yAn61y8Jan",
  "key10": "5EdpBgQuzvsJ2fYQKqgTmK4EKCUy6r9viPGZwzuSK4dEJbeEsM8sHchZBrXbtDHW5dHNKko4CNQqSViHwNghZg92",
  "key11": "5Fta5PsawMkyXwacNUKcv49s94U5YvcsEzMTk1Qm8EUhfVWnMHdSJKqvBsjHdHwy7axFneLoGfKXEAzaAWUw7TH2",
  "key12": "5cqWGyy4DiYJPkWVDWcmShg6Bfjm9R8RYgnM2b3JFEK8BJt5dLazyEgaB3yZh9kmytCN58fetLQzYKEnwCZAkxgV",
  "key13": "5f4b5KB8CdQBFcUvNQKz6YjzLNu4c6Sj136Db62VxgJ4WkHtA1N1WyiQSnQVLKHQf1u3suXSmCoJvEiS5kznxEd3",
  "key14": "3eYpPs1euNTh2pEp4pvpmonh9Ec2EsfWshCj3Do1c2yLtEMEwjAq4oPi7XBjbo61WxwmgaBos2VF31chkyLNwegq",
  "key15": "v27BA3rKWK37xF88JW546vPd5BMeT6WoNyZYkB9JaYV7GdDXXzRHtdTr4b6s6puWAq9vVgd9PBNianR1TVSpT2W",
  "key16": "2qDWXw3jHUuhHHZ7PS3UafXYTL2FLX3NwrDijcs8jgf8qG6zbgy7FTbYxD3CSWhwK6YjkN6LB7TVZmB2aZZyjNCG",
  "key17": "4FHmM3srJontoaM3bCCME1HJHyaoBNhi96rrzWn7atqEHqbtsgVMD8toJi4m4w6fFWLmduwce4ZmL7595hyddE8K",
  "key18": "A7a1pVTtGArQAeWFuCzXYJYLd5KSAQ1M46ga2imPgakL4eHfHqNnCCDq74XJKi2CtzZJVtY9CAgjaDqVAEc5sUS",
  "key19": "2T2XVCrf1GU3ftka38Jro1FTEN3G2TahpWXQea5phVNgxrGtttDYR6zNZnVKLfEVrB4DWmRBM6wy4sudgPdzgtv5",
  "key20": "27wQJV7At43cSE8w6oWAXd8ct1zsjsCUSSNk6SD876vd3p6u54oc4DhTfSvaouQDyUM7pvYMWZDdgbbCwJBsoygw",
  "key21": "3wiNyYeR92sA6s276br9nJM5NAh27iAJjn7sKxYK28B1SKrYWVZvSoDZbbYZmxrUTBh8rr4p82UQJJs8eErvaM5H",
  "key22": "JUNym9ezwYGn8tnFvpye68WeK7eQiHnStZYmJWnGnoX9oJ2wXUCSUhq8HPdBKqEjquRbfuASdzPmgwcvFuZga5n",
  "key23": "bh9zrhivHALowaEpa3DqRYAb53cd2KYwp3mFjUzWLeUjZaDWhn7MRm8Y2nnK4GzuXehErJQBF3XpPvYZqriyNMQ",
  "key24": "3DSDscciCE4uSayxAosqmEbrTawJHJdpvkf8KK88SZYcK9aJcQWQQ3cPtfZtghKQiMM8JPcwG3xUtkXjUrP1nbPe",
  "key25": "2qkrZHJYDHYjNAVZKsPVcsLXEs3f5fhf8a4Myj4J9jfxk1ivB3PMTmFhuEtzz8pKEtmf8GiHtcrzfaxQPj7bhgHS",
  "key26": "2cPwsaDxRWriYTzcApzJJtrv7kLwb2gprnaRRtGjion2HhZMBTqotqiufCp98y4Zi9xPG4vXfLMMUZywYJkYJbKR",
  "key27": "4yLn66Qht1SjBRnLhjcyi1R72dBprrgYNyoNnmCbBQvwMossYF4xFCssFAyGGJYSngRi93wXmNkc1y7LXjiqiPzJ",
  "key28": "51uRxbS9U5x8vfz7fgEyrwzxjmvzpsCusAXSXpXpvJi2yL9jdg7Vbvrycu1rto9bteyKyKVPRrZKnxGeDjJmEtTA",
  "key29": "3iMXJpRXitTTpijX1GBfPuBwXwSSLRQNtQffzSUhNGx8SXd3Jf4vbx11mFs7Fh3nmYroxX1zVfurqEVM7H4CnfGr",
  "key30": "4uGUVdjJh9yvHuegjyNmmKdhjCGs29nhEtkaQoHbFqGBLwiAAFBqxyiQ1GVZZVNYfo59NeafLKgEbcbF2Hyg5o1t",
  "key31": "YtdZ14k1atSjYcdHNTtqotM8w41oCSanXiGvGYqVJLDnppd3Fmam7v9tx9AxURs3rk9zLvfAaNDzQLCAhxcpzGZ",
  "key32": "5YUmKFbQjGE1LucRp9aYTAnAeacw3nm6fpr7afJYbzVA9tkHJFiySBFgFU67UFPkJsroeHZ27gMnyLwVJJ3fbCkk",
  "key33": "5ehjZjs5qb1hYQHe5oENEV5bcU41PxUumpmt1cZQNXF6nnkuGoz8Nfq5UFCBiLBkbqmKCCx5gzXKbLmFk5wvro8Y",
  "key34": "82D7d4qHteAFSjZrh75bautRncBxdvxBXFQhSf7nmVAKD12y9HnSmwvKpoaT9xBL9RMh2ziuj4njgucUSdpLu2W",
  "key35": "Wi3vAGFNxCb6WBthfJ2iNJqsFDgMxAY3XgtPWhprNVYXbVGHCrMt6qYGteLYe3DbJocLr7gufxVXuZt9XJPPWMh",
  "key36": "rzsAD8Fvt5cUpZbSMsvFfcDkXPVfQSKpwKWX6WpmVi5dPdXYjuoqWepaGGmCZ63BDfZRzv3W7YNDY6qaDL8K4qY",
  "key37": "2UsKGGsYg3E5iF7iXzv36arnh6qW4UcLPhTE3cszDnW7v89mrU5psCJj8hzrB5BiEUepQdACTb2D7itGxGeScipW",
  "key38": "4zD1MtXxmWf7B4LzLuZQ5DU1FqSU6tvsHN68PX4tLHJk37HHfwScRQGvSbTaMmzAai3wJHVCe9nVFx2DaxkWJ362",
  "key39": "2EdN8WYMoiLHtgnNgG8qkF3i5awbA6cLenk4NeC7qEN2mgGe68FzRDJZcxEWx7xYrCrPJEWPRwp3XVJNoXYF4Wto"
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
