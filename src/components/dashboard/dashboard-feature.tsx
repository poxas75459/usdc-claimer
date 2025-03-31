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
    "4253rpkxnvxxVrCU5pSzKuSuh7xYFhEP2jncRxiyi4JzLh4xnb5yE3TgYGbWDLjGuiJEL5vyX4LayqbxDR1tcmkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35q9ecR1YWq5J9iHd9wLsS2EHq7vdTcqG4MndHgvgCkq6p49cXvU8pxGWt9WB6MA4m9p5ow6hDXTyybSpqjAXtiK",
  "key1": "38gjmxyqtLZWaoEXuy2uwVjzA2zsFThqcwNShqSwzJsPu7sQww6SPavVzvSM6PmMatnrfpE9hb7aYzF7SUnaFPFY",
  "key2": "4FQwa3PsebFt4vhUkoH5N87LsBUw3r6m9efUjXFbCn38qngF8WsHxbkRzpigqba5a9vzHkpqEpbiQTjNW3VK1P33",
  "key3": "3VZRumMeVv8qGUKaPq1bd6jjtsGhgRK68F9siiQwGLB6qAswrtsRJ92cmn47cqBRw3ZGh1N3vuhzcvjGnxiK13bZ",
  "key4": "2czsVRrisTfQpkGDxZysjH1epK1KaGzf68oJBh1BiNQcmGtXnvVh91Tf9e3UveyezdKijgm2S9WXSNucnLSphH47",
  "key5": "5DocahsMq9JFALt2MQZwPtU1xSiRY4UHjqb55uEHn8P7J5JsLGA6ge5KTS6pCfCYjY5kVap4LFqrGDmNqEMkSrrV",
  "key6": "5kTJoYrACB9cFCDaoYYdxvhTECAkhwffHf49AMaeSXTwNVNee4HifMD6FioW1fKvDq8Lg9QcwdPfHKUtVm5SH3pn",
  "key7": "mcvYq3CGNTNf6LLGL4WeWMG49ixeTdh47vPBMjHDBxPiABaMKGJDZEkMv1mDumvyLMV4wJpnzSFHhggABCuYGya",
  "key8": "3KSDvBzwn66h3fSA13qC8uZ71h7jKphfANpTJFAR43fdNh2BkAnkjXdWcJ5oHVxwEd4yuSAMDmtP8Nt9iufqrfq9",
  "key9": "k1EgUSBNR8BTugwqtiQ7QQZf86ihDRsgeiaQ9sFGSmVB5UpgQESyZDZLX1weE32Skg1hJXiAGM3m3nQGDYdcTRP",
  "key10": "47ZBZc49BuFVXfhy1LFkwh2fDXrYfUHC5KgKkhr8i7ZxbEcMtAviwQQowCGMDgd8EyxSTdbnAARRvnuK4ykVBG8q",
  "key11": "5LVY3i3HfBS3yuUBKoiNSLtZY2TnkxM4kU3sujvKY2vZDdMf49Ur1VXa913jsUrzraSFBSChCtRfzNakoQePteTs",
  "key12": "2n3uuDd5oaDXVWzhDPW7A9fUSnzSruH3V9emXzm534kXtGzM82yNDWh5fSbArDgWnNCzAkGEEkPG4nG5cxgUZYAz",
  "key13": "sFoQ5iLrGVb6PiqUu7w3MGttewt6VzBKMbGb3qJv7gc9i1YddyD7rHvW39HU83RbiKTCaxS2bxM49ZWS7UA8r7d",
  "key14": "2kaoA1W8BMVUfK49tSFNwAWC2hXpwPrAQNNQqeAXPpAv7dRazBB7Xz839ZikgbPUk1D295XCGdfUrM9Wfhzg9GnU",
  "key15": "Ptzmj8HZfKDHGxrx92Deh1s469JduqwSgtsNPUamypgkUneYfGNmAz66AjyBAULtQc8nfmjRDwjWeQgXRiThJAr",
  "key16": "4aT3wqXU7dTpLv6z9s9mg5S4HYpigPRSAUn342jPxqJYvCBJQX86SB7fqTZ3YgFqLYCzthHrUEcknc4JovVpZL7U",
  "key17": "4DG6xR8efWDtu28o2kqx2yAK91RD3t2wLu7MqySgWKr7JHUi46JkEhMGTAhy4qpsjRGXthAtpSnR79sADTWxV5E2",
  "key18": "2qjn35UE6eFF1oZWKLaWFsHsorARxsgkVyQSfoXuWMncNhESDJLBwPYCEbkNLxZ2dbSVfqZLht2td7EwYSZrXYWb",
  "key19": "5AALC2wdQY5SJjdidmiMFLBwRYs37fAXbwWkLPwmxGRo3hLM3QLWexL8yy1V1JgnQneU1hxVF6KBhrB1kczLi8rn",
  "key20": "3Zg8cRvF4DGidrZ95k1hVHosDgtBkFB7LvHSLPy7eneMb99Vwncqa3LakwfjtHfxBoqLTwr74Rc34ZEienHcoU8j",
  "key21": "5ymrn8hmRVojvwJes56YMaMf4oU33KZg8116MqRcsKWdtayUeZs6bK6McSVx96n3L8t7eLosnKrXU9wPCZrBUZpw",
  "key22": "2BAEkUDWJc24LHU1egc8YtKPT1Enxb7GmHFvJDWHwWQSYbXPb6Mb5xQnwA8tX8Eqmbjp1cKmQXfAxUoxf7WmDtin",
  "key23": "5EWjTnDMVmkQaJ3bLr9qv6RGnB7E668MfqtQPN2Qji9STuozbTnLThbAtWRxKEkKM3jrvD8faduxP7NZ5GUxNemo",
  "key24": "5YcienconbRwscvLFo7K38xTFzfmVrTUTpx5seL2fedL5jeYT2Qvt4xjho5zknYLMZvGA8UmTrBfFrsTD9D4YkSR",
  "key25": "4fZixz8aTPYhRR8L6dUHuNXP185fxsto4bQ31W8K5CCff5sKJmm8Br2WEgkmfufSrG6iHV3CVZ2XUbM3KoK6u9qJ",
  "key26": "3A31UtE2ZUvkdWyCsuSzyLc4Sq4Uk1CZ3WMBXWgNVJBXaaN4EaZ7VuqsRoUerd75PgS6kuHoT3wYrZkoRtzpp2E3",
  "key27": "2tPVMvpzm9UucGkLUQyKpuVCdWihvk9WpHDaGKKTdGYpWktHCviKpgeLugVyZmirEvpB72Nrn8uySkCF9vZrqmfh",
  "key28": "2bKm65rNuQN8eBwArRPjZNNytxr6z1tbELwZEM26dv1F6ma5LJcLTYPnT44zTBQ1qEZmzvkkj3or6kLPyyRsFoav",
  "key29": "wsxV9oLCzrntiazzZjENkja5TGheq25qkeQWURU8hi7Ct4MDj6yW2P23TxpDyNqFLBqqvf35d7M1sJ6YvSHXo95",
  "key30": "4qCzwCta3jXFSrqx5DdfgUKhf5mc9EuKtGB5jPJwNqU24st992YnJ4WRQ81smqmxf3j21hCDRRg3Uif9aUg5xXKe",
  "key31": "4GaEtVoNbhYXA58q31eERWENKV23uceoXvCaCTeZgbbwaJj3b8CAZGf9QszBR9DAt3gLt4SMEeLjEr3zkPHXo2Rq",
  "key32": "5VbEw1mnniCkTBiLo5apkeMCHyzp5mbr1Pqust6NE9F3q1ncP9F83kSBugZrRyVpk5bE7GjzLf43b3M1xEWPkKZV",
  "key33": "3rdLFUeWFRqrgmqKYTdJdfPHqxx9TPy6BvGwMuecEuzCY7Y7hEzdvHCwxmGteR2NS6kYmj2A2dHbeNw7vbwsY9CN",
  "key34": "4At5DDtU6cRqhBNhDsiLtUgE6wa7MHwGbvTPm68j2ZmLsBfEuZC3ufDE8HY5ZYGBrWcwcRgrLvJHoDDboBDZhP2C",
  "key35": "3mgHizAG1917FtaQe3ZtPVqyXPF4J2HnPxM6XR5pF3uAwUCEQewgnjHdGC5PQzDrJmD36Y8joJBENeiTZz7sLUZJ",
  "key36": "2nW9Arhy3cLF8TAtNyagxtkUoxUyTySbMUH5QQkM2S5QZd2fEnXZnjnJWLQVP6C6osPm3wLUT34gzvkT9XX4o3ak",
  "key37": "2sJV5fmYum9RqNokhoGLxwgr9iKzgArSJjCmgoY4rRqLKEwxn9SgWmQYZg4j5eJCfBfq98ucER2iMgKDLrJWC2Lf",
  "key38": "4FXntUq5ZoLWSC8zcTcFnw1Nm87JpMWPBQrJWa5jCDzm5NExvrXcJ1TfUW3i4gJmtbwjPPvzpZT4Fr6VxXUzouay",
  "key39": "54caFbRvbzHsCjzgvfLV4fjJfjNByK74Pg4JMHJ8YgVSYbqnpntRgndP5HtvEZL7soW8tsZaWTFCqrwEpDyfHn9S",
  "key40": "51SdiQue9tRxFS32GXWEC66SdEj4xMQnNou9gsFXZUzqmdFDUTavMUhWtiqtLsX6QYH87ekxPEjEigx13KvpwhBD",
  "key41": "5oCFdrtkwcbRHqiEJAYg4S4Fy88oPiphdcKzAeb4inePnzoiiCAnkDixMqh3K9auGUJ3SJvDXpHCCYgTY7zaQ1T2",
  "key42": "52SQwiR5tLqoN4n6v1AaRF239GidQDu5ose3rNv4b5HqcUUvjitsXwFjGA7NAJVhohgCbvV1eHwf7R6aYHaVppZx",
  "key43": "3MHUc9jGUJMdYQnR3bTcGrv57T2ZvJMMfVP1vhGKUvcVsyBgZvzjmsMaZL45jJD1qBCq2FYBzdJiEa3K5PbgZPma"
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
