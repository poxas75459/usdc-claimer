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
    "526BjJx8SfoavhQneR7Ng9VxMMGT9EvEjyPerRjHmecmCTAt2r2TJoaKKJvjTACHxqbSrQHtafTagZetsbTo4y6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MLWgXk1x1fMsewUB9XbAXM5LBuL5zfVi8YT9NqmBrv9pEUBbXEDGdbdU5Sruvgo4Bc7MjiGwWKwTXF1pLPoEaQs",
  "key1": "262gZubi1hWJ5yAK49QStTMbytU7ifnSRTusQ1AypJUefueBgJLzu79B616PUEAAc4v6irZfB4EjvG4pjRFom5Db",
  "key2": "32Nw1dzGYeGXvkgJ2BdrY5Rox1Fw14RMJuJf7dSvb694Nmeaaew65so4oaoifPjHtNbjtS1bJMze4CcqHZBVPVVn",
  "key3": "3GfVsRRBT8FGEX6yPxxW5XjviXdH5wq52onj3AW5TdhzsL1uTcFgT7cRwTV6XRFMXskSYyDd3QieFfN9mxuGJcnq",
  "key4": "B4Hn6vBXC5sncLTw92S1QTUQTF3FJ26xDHzTjFpLbgxWYEM7PBWGv1LnovRLBYrw3Yng7ip4q5dJrjiyvvYR8Sk",
  "key5": "2qNuiM7oRPW6xZhxKvXRKYiPLSi6uy6DjPuZRPRD3wXuUVP1HA5pjeZYzVPvewJ7sqTLyBcskLqiCBqXNKacnMUj",
  "key6": "4AUSZvSz8gcU9Cgd2Zpbs8F3gB2MUN96JBbQe4NwRYD8KbcHxQ9JqqzoAzrHiUanrQKGxJNVynvZBAUwbHW71eiG",
  "key7": "4AWFVh9eE9m26Ysg6C2S3EvT5iymUEYiVZNvHbDQfcztp2ZH7De96dzuE83NFabaeJW3ZTSgxxWLM3KVTQKSbGAH",
  "key8": "5RmQokK1q9qHFkce69iDoWrd9NuaoJHqKM9AL9uJw6gXxCkNgES7W5seBH2crWtEA7oL9W6RsWqXj9WDc1S3Ebrq",
  "key9": "4we9DCEEG2NaXbcDMgxmEoNQmvERmjwmj8hSjgPFEGzDsQW6SptvPjbV8TcLXCMTSEPvmzvKnvg6Ybb7uSp6iD9V",
  "key10": "4MRkemeh5av1SGz3hF3Mbxsv9daoVEv8YHWKF7UwtAau6yhJKvF123mjg8JQDb9MsCYUpf31AAKUN9fjjU9ZETVJ",
  "key11": "57XAJjskt9Au6WhogtWfVoYCQQ1Ld7w4fs1QwRHquDYVG4RXWrutJdN3g6dMnSLCVFjVgmdkhoVxKSu5Bh5oo5sa",
  "key12": "C7hxHEAmaVXfUpE8gu8rkxn4WgRmfbF9RZTvR8eHSbReNW6fUhKBWPhfQAi5aYid98W8i5koBTMWchCMRJjNaX8",
  "key13": "H7gqHD3x44wLZYcNWA8tJA7yM4nff1DNfUB1t4tGoqekn52eDbj41EDJ3MsjgamZxhbDXjWWDHuKrbj3g2E7DZ3",
  "key14": "Yn6tGdZbjhQQC9ygLuLExznaEVU9iRqU7i1QVPbMRL1xKj4abbDytwNXpQoWg2kbux95Hf7twDAk1d3gHGUNY8b",
  "key15": "5bvsA16Z8cf56Bna4HSDeAxWaJCYUaqDuaPbUfQ8imU2ARssbHfhKBTBYHP7Pk1wKvi28WQMZ3Q87AWVpskZPLTZ",
  "key16": "4DbmTNhXzkug8r6WHCKGJsUdVxd491Epoch56Tg85marRBchJ7r4KxnKx1Epr5Jvu4kAigCLsU8bioY5R89C5eVf",
  "key17": "hhBCiPTpcSxyGV4mku5zk9bksrHvgJYAqVaRsjRz9Y3SetdgvEHDFt5Q2pCPnGY48AT6tKTdNpVVCCBTLKTrca8",
  "key18": "zTuspsQDdJowAkGY7ryyqfegtx5KSB2SXrva7twq9z49j8nHvQHgnLpZL7PGekJf3zwnFkJusPukRDQHF5UdHW2",
  "key19": "jeAs6mChGW5kGwVvEeN3mar1KrrKRnH2V69uaEd6BC7EHhFhJTKvtxzw6ydqo4MGhd5ZV9EwaYc5hnWMuzkEiAm",
  "key20": "4KA3SX7GzUjpjLVX473Ui7oqbC2KHoBAB4jVCbrdsgSRJwxBBAW7rBurtofCnpjC4Ymcn4ntPmPPpBcgXLusXoFm",
  "key21": "2X3p2MrUGFgEqTPKg2wDSsnjFuhQa1AWGhvazBjYsDdo9wtweAzTB6ZUJTk5eVRS8BX9Kt5L3HRoYQ9XhFJsARhs",
  "key22": "5ybY7Yxf2VSdg1gZ3uF9yoWYxzkfWWpVBXNRCB86nF33REdMmtaUP3MFbxqSnzyJcAag1TpArxu2JfoNsEKEkZ6d",
  "key23": "4YF4nwpXUFaVj5XvzFbK7VmH5nKfpozdZFJ8378W1ZGkdeS8FHh8MNDA7ioRwTZ4KgqbWPt7g46mh2h7fANRieZG",
  "key24": "4jQ4krV41fARQ8gm6ixPsw7kkFdDGg4kJYPDBWdvN4ajwBkAeV29urABCgHMG1e11Gkv6eysadndz4PfY8DjehKe",
  "key25": "4wMz9V7jLeGQ1Jf9mo1gjuu56fUtvoS3tLq9nZjnRrrzXy3MZ6snebTFq9cGXBHNdAvBu57DdfyzcZVHDhUukExt",
  "key26": "2csXVtxyUXbqXG3KzFoFmFnS3SfEhhpsp3MyowgwgsPoasuyWHzs6skjZp9LKVc9NpM9qehAujMj1QTjNpe9giE9",
  "key27": "2KnpzEZcZCYGSicKueMEaLU4Px2n4a9PyAWdyCZyUXMLsvxYiUKuAcD4x1yFjJTzPPZJzWr3pM4Jmp1D25LE7uyp",
  "key28": "2ZVYGFP72YrZiH8JfTfjsYwRnhyRL8x35SwaLwgH7wfLAi7aDTp7QTxC6tiTgBUGUgqLBrKP9rrscjY6nvTcpBi5",
  "key29": "dqR4xqzg8a6dmbPgt6tZVkot6Kzjpd5DrTtPAQ1VbuczcVA3ooKYmz1swjxf8pQRTPhrk5rqS7zZ4EAWzH9ZVJw",
  "key30": "4pZ5JbeBBb9r3TFKgF3M4hrv7j11mwqWN9ZjWvfMMLrdtgjtBWZpdZmji3nAoAQWf2vDJinMiPyemR2SrnMzePhK",
  "key31": "39LqmUJUT6ijQBKRRxo3KyEcAZ5NmgHonpQ8cAWgK5BXZuazbuu12bmrax4H5vNqf9grxwWSYPp9K6UnH8xu5uML",
  "key32": "4HHDD379F5xNmdvba9SdAguQPtd42S89hxG64cmBaKqQ1XBCnfuQqg2etDzHBsbBnm52tygSJvaxrinr6n5ao2Fh",
  "key33": "3s5NGRT98piSPFArXoTi211iAgi26NnVF777M5L3S1QUTyvkb6FLm1GrRbbZ6G4wHc6Rpg37evbLfJ97wvyeXjVr",
  "key34": "49nVjA9ZpwU29JryCf6hdktC5MEcyRWTZhjZAmsFveD22D5888Av8fcfxMmnhNLXgfiGzWvuMrH797JTfBarYCZH",
  "key35": "4g7Ap43TRtfMMPAkafUTHQA9MQHsWJPeHw6m8jnCqoLm4Lx4q3BZNuGpDZcw8hayCfZ5iaWX9pwa7ARvitz1GqgV",
  "key36": "43WrFeT6xMzy1ukqe1s4a3XP6pn8fruygR64ECUSsrjNtPS9zzV3hSN93rEQEyvx186tXNY8R2fbGeKLkpo57owr"
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
