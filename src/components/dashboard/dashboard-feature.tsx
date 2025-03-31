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
    "5vx91BenuuqByeifgibNaGewEvEpoQ8vy9ybCm9nUdKnQNUMNupiSvp7gwpFENhRTbdutzswKtvhjN8Xr4s7USny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XkcZeMWXzb7zSxtg6W4CV5n54A2q8b1LwrowS3jd4PFXx97fWZLqHSNsXbhMw4sz4kpoBAuJxQh73cQL4GsbA5j",
  "key1": "3ukhBLHjjH8d5KKGPu27pJkWF5vEfUToXCeXARkjNManiETSMzxrVxaRD57caNp9VjBUJGCs6hgNzVoDpqRVfWC2",
  "key2": "4H2So1HEC3zFtDa6k1Gp9XmG7pkPEmGYyDTGqLe1oPUHTbLAdU1Kodj8W3morDvysgfZdAQuVTrcbNTRo5KaEDnR",
  "key3": "57aVg8BHHQDA8MatDVKSMFZdDU4Jk1NsQQTKe8Zn7EJFDUj5HFM34vYgfvDvUY71guBDpaaDq6yqzouMrBtGjxXP",
  "key4": "uYRnRFpqTeTAoJoVCkinuPadqSA8pntquBufurr7qXE5jEUMgEs7FEEyZcbeMBqn71jJUMpbeiG7svTiWL8c6Nm",
  "key5": "4itVxGUSboNp919TF5y6Hin56y7dmPFkYeDqaGZ5DcVGW6b4Fd8SPjfSRuy4U2faN3MoSyb4viaDUfGopyXAbDfH",
  "key6": "33Q8CGRpdVnR8Spk1WAmNyvMwVXd8me1nKZo3MSL3wrccH77doemh47MpFSTxstNh76DJjf4SbjT6jDbJQFj3CmA",
  "key7": "5d9p1Zae9vA73LAQ4g2p6jKqyba75K8R1z2UbN4GUwrN97SysWfw8gm72Z7JSBFkXpZdgLayHa7guW25xiHFZfqG",
  "key8": "DDE2954Zr4tGsSu5mxgAZGGJqavQWLiHwdunN68LwLFNX7bbBzdRJehsqGw5GUrE7ur5nPhVw9SWLJK3WgMAr4u",
  "key9": "2zmQutMMvonZcxfiuQPZSuKAtKDE33CC6ScdK2LsgAta5iFVi96Cjn8LBYXZuqPDb18D9kT774iZStuVdkqWvfCZ",
  "key10": "2v1Fukzg85e4aQAqtePdScqj9fJ76J22QFDffmGeyjJjWn8RArh2LhUFvvwXwyZk3urqEehTiCqnVKq28XWzRzWU",
  "key11": "4dNze1rfpVWi3xQ1rvR3hqrfQbeou8eXYJLsr37n91DGtwWm8ZamH9rsmsrVhSLynJUNdshCRN9xzkqwysyKZW2C",
  "key12": "58abediA9ToX4MR2aWyBURTp9rAXP9hsdu77Y2aWSS5LceKfMzWmSpRXVG1uE5MgvmkkKJppEd2Ezr9i8uMhjdro",
  "key13": "3wF6cyiQUrT9CihXoX7ZoqZEfK4F994oPprmvPyB2dkCD647GTNRdNAmUZ3K7TGUZU1DSSXBhq7h11exXhghT7WE",
  "key14": "4dcoFcMC5ubrpgr1bFvXt2Ukx1Luw1Fk4mQgnunGBeQ1AD74wqYgKhzteXc4RypHzH4DoyCR58Y9Nq87QTjwCSeG",
  "key15": "5F5JpefUGWnsLRqCjGimTz7YHBLujo1K8FwR8WvNDVomWW8MrpcCb7RJLKD9RWsKGL66m5UdQWt28ypQJHLENW51",
  "key16": "5JWxDfxPqDG1d1htcyRqySUBz2Asaa1RowF8SMV1yDSCcqdbSrvpdwBoZidfnETEj7vbehuhiDAnrBVyH5J84DbW",
  "key17": "Dha9DFXrJFVxrvo1vP7p7QudRdPZkiUtSergvTKJYmcjJSL7pjTuLxBf2GTLzFYxqqhpztrR1ksvoDw5YMbGp1N",
  "key18": "5b5uj7kmgZp9MtWHanXj5HrFh6RJAyzSucjVcAvkykqa454AzPZnmJE5REU3zZPjYCgTM35QkU5SLbH79XHFP147",
  "key19": "3DgPA75ZVFdig73YEborhSJ9Psf3xnyc2eZP2jPG8mWRGT2DGybEx4YiUi2VciTd5FK91HptYhkJwYT2wytGrPP6",
  "key20": "4hrgybhMDJzuC4qZpcUCVCb4SwvURjGiD3qudrUvqqwuLEQYi1cbgR8rK4hLJLqkjWyWzA4aXcGp5Pq383hnh6GQ",
  "key21": "29BnNmKuptfGEEMdCCebFZfyZvVPxGwNxoFfGoiF5d9wTBGo4mqrKUzPAmSPhz8zUKT7vWSLizg4UUHk1cHEZsXW",
  "key22": "2j61UeZjjWyiZHzeSG7ksjLSBFzU9mxmGoDeANCRYCeN1nkAb4p6HnyjygPi9FuVTfzUCSLsrnVYMR2uzGrX5XTH",
  "key23": "5pDhR7E5eSsaP6r7aimqwsmbWSpkSSVfagEUdb4Ws5FUpr9cPPoKP52kr9R8AzHhdhboFxK6BBrA7E4CKpyTSvRZ",
  "key24": "5iZtF7s1pwh6QgikzG8DoZruGFn1T2d3anYuo24DsUD66SLUG5R861nVHU7fCuAMGFsB1UsUA8zNWfY2rc31MvHd",
  "key25": "YJaiVq2rJaXW45KxqLgPRME3k9KWVtfLKvRShyv2WpZh5WiqwDwqBYZuBVBmiYQtrRRbEKLkAkt5Tz9XUmwtd1P",
  "key26": "2Ncmpm9wAoJ2f9cak4yQwure5KB64wunsuLNhMPRtbYLWMUXbBnCD3DwUTYsqZaZm8K3ZJSnfLvC2SfMHBY6RVBF",
  "key27": "29W8Ra3ehZkuM9BYFJgmrtBURGH9qc635h7iVHpYCrqAGYBCGE7RRK676MbUQDZp9mJxHvMRGXZjjkvA6Mwg8Kha",
  "key28": "596mbc8Q8p67anoaPNuDyZWcxG7weM9cHaVA83v74qPSaDRUWFMr7JbkaGvCpgFDBz2LncU5ud5jTRhVb46cU4jh",
  "key29": "4vMu3jvWWK2741moTViHiS9agKVBZCgdWBefGUDj95KSHo9GwusVNHhEsKv9YbhTWEQjgMQb4jXRN5D9jwUC7kKs",
  "key30": "5gFtbzcDYnAQet9X8FCyambPvz1UQMvigvNXU6HGXNfCaGkMQoCPyXZv1QTiJwqQsxY2cMa9kZy27yW37y8a9ZjA",
  "key31": "57P3dzeEjdZJg1qTtZ2sC7gpxEx9FqTFxdsuMJb4DTsvey6WFLtzi24icfpbmq6hpVe7KaPxq9fq8h7cGZtV619u",
  "key32": "4iMhxptnjM18jM3gQtC8XUvAKJvKsqeM4kWzMgNvudtqtedC7KRECRXpZevuHRmH4NEqG85WmVka53rLWUm7hgVh",
  "key33": "4vgjNA5BnTt4ZcKYGjt63NpMNLiCiTnV8WJCv6kfwXs6U22DqrpBnpKa7DFzsueACfTdE1Pd87NSjwFXYs8LR6Ga",
  "key34": "4BHi852nUjdtHcuh4LatftqNJd9aDrxVZ2qExrqbxXGNZiuH2AxUXgZYRz56HTY61AtuCfV7CujXDCTqtcXCVeup",
  "key35": "37TXotuct8w442zqEUGXAxuAuffTaVQTCf9WZob2R5jLu5bLfErDryhGpF7DfVZLBSu4UnhwaYJ3Z1wksSuhK65S",
  "key36": "37FjCn7x4jYjtLxHuWdh56cDyfqEWaneQK2G2pGGpPqtmZGoXm8vtcjHyWikdfhm4V8PPVYexeja9GfGgoQZxXT7",
  "key37": "4nSQowEZUS6VAwXyGuXWy5nGLYQtt7RVmtPhCnA5R4nPFngeDsHMp6W8bVWo89PvxNHdgAn7LmUtMWoTsnDmBLmE",
  "key38": "3PNdTmhhTfeg6JXJxC39wAhjrgyCGb94ZLGykoeyq4KXr1hEbN8qYerWqDF5HaTVXgXZFjPcUNrAKbcNgBx3qJAD",
  "key39": "3CgmUcSd7Mi5wjoTAcuxgvCC5jni7c7u4sAq5rxz6cf8YWhZ5y2x9SeYQjrzX5JMVwJKhh7ZekNv4gRTDbqUopMc",
  "key40": "53phMK5CcjeUpzGCLhgieWXDtC9dxN9PXoLDaU6NC1dWiSrGTAkmYhL6PJjxzoaBXHwJGQV1ayrvxYaqkzxArFLm",
  "key41": "23xvKqA4H82UcU6Xtq2LVN7UPwnu4a8WTgi7B1ACjoQbKX2DBPtYrxQDP95gr9wtvtQ3VkGAoc2Si9noTwWkZUhK",
  "key42": "aqvuszTErgaLXgyXttvwsayc1kYeD4dHxxGygK9KWRyahfu23p13A16Hexxm4k4JThp4zpEX9YwMMMVLd4pifdv",
  "key43": "2rH5s3aGGp3wraaMMfJm7e6h7A6iMAFdawr34NjQ8jC83twBbqHNXR1Bw8ALxN2wioSe7iyFDVQykWWUpaa3zUut",
  "key44": "3McGHoHp2GQF8G9NxBRdrLWbH54AgcfN1gkS6k3V7u4qUH9FWwZMzfg8KWqcTU1YLF1daSK96XHjJK1UZVRLb2hq",
  "key45": "36MKvGDUv36xZFM4PxXuBGBgT1YdUwDCU1L7d99RnQy34iFz37Lj8xgThk42xyjhFtYkGp39uM38LHqXLAjkiPyx",
  "key46": "2TYPqackN9zB51bYjSwrvZ5YoMc1YrckWoQdMwvUfLN5DP162RztnuEzf5gjWxWfw2hrZNCLDZy4JpWSJjWvdmRY",
  "key47": "5wSwUFS1PfENgEPYDH8XfkKUMorAcUG3eha5jMUAz24RwnVZyjeutwDspd2s7DrtcW5ctFb1qLGVvoNEKGnbUzqQ",
  "key48": "51LtfbXp7Bgfci3JsQYJ8iRVzBHUxK4o2wwXTq1zvAhuQZtPpBqhXDu3WdFFy53hia2ThXjkqYuW98mxyoiQmKhq"
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
