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
    "5tGA6TNNN2UmyfL7yuCvyE8phK4vbJjEYfm5i2yEcMikF9J7HN5rKZYajN1F7T1YjGMX4rok1jtqsn7Eof6xrXCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ECDDUCbS55ThLNutxJDjn83jDqBR5racg1Pc8NUna4rCh7APcM7UmDn1rbLuv99YF9hamZgDQPDvk1NDHs8NNuV",
  "key1": "2UTtES7yjffzFT1saWL6fRDTHmzbwGgm5wNeEmEpeYzyiT4Xyv17qzSh1z31ekGMmVnmkjhEX1zzow3TfbGxN5Tr",
  "key2": "4tfUVjPNi7gvQQUvWa1BtXEjeXrYixD3Xvwjo2HDxAEWjsK86F3f31CJs4o58DcVzPa2WjguGuzt6ctGWSdG9FMj",
  "key3": "2ayhZenJYNsP6LgkxbJBWUrh6aVysbe11nsor95sugfiKp6X2UNVvsTQvNQDb5bdoy4u9ghtqRSfhKizxviAwVDK",
  "key4": "2EgEJAtBnECj5yMPkUuaay2sXic2D2kVec1hXz25vuiQvp7D11eJCzdPi3P5c3XfSvBdMRSEpj2BwWFk5w1x35JG",
  "key5": "4JsUawDjRsfKdaLShu46pc92xntxaUaPaiPYTYaGnqYpGEbbge98eYthfZHsejUcWWPKbHZ8ggBJciL8EaaWJQm2",
  "key6": "dbvC2h7tPNGCB8LpTStXF4h1w8ocm3b6UJPa2Z5DSD4eg9nuBdtCefe7bktsG535M4u9zUqcdZwKW9J6wwU2Dbm",
  "key7": "5CdaWphqLpJ4N4ZPQa5kRyw2ixnLsbSntnswbJUZNMJrshCdseQgGbabnAd8UqNyfiyk7gHrM3a77EAX2tBvgSZr",
  "key8": "4PtdyP3SJmXouZq2WatnW9DAw2JyXrgddWPn1uP4Dyu7QC4tfPUEm6N5JckAVcn9iVErSoTfyE5j5LjRmEZTZE8b",
  "key9": "hTeY8jnGuFnm4N8mJs2xyfUQp6Vqp7FJgyMBq5fRcDoSw65mw2Hh2DjnMcqb186M8tK2Tb19qi4FmL6gWTsEQKk",
  "key10": "3sN4TNmG591WxBmmSNeLqSqFNTUi11gqqaUWKFk3NkYHWM7WUoYVqGVb4iDXJygvrGqXvoPBSC2w5FEtK1MtxFEj",
  "key11": "58iHmnBWd89TMQRiUB1B8JmbGEcABRE2mcv9NLmNm3PCRvDSdu6zdcFkdEsz2qGBD7PATExwWBcgTvC5L97MJjkP",
  "key12": "41Lk6m4dmb73YCWpcLraid1mkxM5z88z1mfKs4TNr8qcTqMUtgoxdaC4RbHtfhifZizNcSJpTNXaq9kpUXRxvWqD",
  "key13": "2JmQuv51FHo4dgKRnD9WuR8q94GyHy421WyVPLL598caYt4CN8k8pwh5RbQBdf1KHmqQ1c4HzqEJADPF9KWvJAeB",
  "key14": "232fAksVzrVv4XW7kXdjoHxgLL669zJesB2nxJMpk6HuUmYgyWKVtsgcmthHLXJbWbZzFnLwkUHzUv87Ca5bYKpM",
  "key15": "5r9Szkfwaq52jM7jYjcWjy7qTFnxxyquG2KkW5QuBkdGN1qdFGBHGDuZ5xsXVHBQv8PFf5L4DcLtp3HdWqQ8bz2q",
  "key16": "fyUMNxrc1y6Q6XgPhDra3Yb8uwVMdM5Tarebh6e8BZ7twLH2csq56WcwzL6w3iq7bS4QyhL25D2N7nqSKCAc3tt",
  "key17": "4JnXg9CijZRwh9an7gLGG9365zXeoHQgbtHmz64cpaGgiCznheWswBhpgdWWpYW8k4RJVKd79H678N9RsV6k5Wh",
  "key18": "33JSLUKqVC2Es9Z1KpsFZrriCUw22Bd8badV6hsDf6MsqvVxDE3jF4wBTtLygfQfH1UerkptaUw4UeKG1n38xbbH",
  "key19": "j4TqUMmv7dSwrKRsTEW6Q4qBVqhzR7i6FJEpR8nN6pvt2QvyZUTmN5XFHcyZSicB1jufQiPCkigYk3i649cuEt8",
  "key20": "5PEcKi7vqCuHTYy1DZrrnSt2estZSv8zYRbufyyQFBoZuWxHhM3QefBiaR1qqZzsAJ2adqL5DVFGnTrWeNmEY5bu",
  "key21": "67q75ipGwARESVnw2X8h9197hotarA1QvPLTwi9DGYkuMy8TwkgGQDus1e2RwsVg6pMrrAFirNwcKR2z84nrRBrt",
  "key22": "6PerR7eWjUTCPbkL7f4RgArhsnMD2HphnByhzEkv8pvVkRqSfuLPLVuw8uuSzgQMHSYNyf12vapt38ehKeGZyKx",
  "key23": "471TNhfXvVnuAhH2c1QwZXyJFEQ9Ja3Vz9sjjNCX29u7UEffPS6NgTdwCVdATKC1Wh7483imFJT9e3WyDQGxsteG",
  "key24": "5fdiuBscCSqL2y29i4Eh3h3LFEdyRN1cJ5a5R2RzurgMjyR8DYF5sV4NRG6QhqeVXKYVWEGvKNikkvs5QdaSijVK",
  "key25": "2y1csA1TjH5kdfb4AwudMqguYnQjwLbs63zNi4xVpvZ8NcGC6ZZHGNH23HxVLg5HgGaXBsthUWYVNTrJsHBWgQTT",
  "key26": "4FVh5kKVj4fcMto23pGVVmQCbYScRsKXgBYAg6qTzxvxkzEh6n5hqb96tdCEWMssECF3WnjJh5bAT9UAjfxM2iGs",
  "key27": "2iweCUdVGdzvChR9mYFfxoeGVdgtoXEWNoKpEmEntuyZnwuuqu1o5rUykSRf42PBh4vB4Gvgscrd6tzxhHb2ebTh",
  "key28": "66kTnkfBaBERvAvfWD5idU7RTAJSLEaEdufR2gurQg3DFAkBmoHorgcTh6Sn2Zmb1hN6Bawr48Ca5LCCtSa1oRBA",
  "key29": "4sTeFqwXSTg6hR8qHqszGqQpXkDCdBnLXzWVbSjRUQDvkSjzxXSqRUTXAZM9vqFU3vAmoivarYcUV4U7F9vvhjNW",
  "key30": "5LocWXXmVeujNcdAorZwujCkExeTos1EAxKJ877sNqrgkwk6HxjsD4PcrubNXmTsuuRVX8GC8so2ec8q1KHHP9NZ",
  "key31": "2PxRAXRp9KHpvq74ZJJNrMLa1Z9ZbzNQRCAYC7fnQCu8rvM5iWh6SuUGHggyj1QA3BGtu9uVzDkpFqh43FF5E7i3",
  "key32": "5ZvjK4rtvoNZQscqJmsE4BnWyp3DYwuY7yCMJqQTyUPDUuFwRSDe7TnhPTP5uTBTR4MBncuqVEbvHjVdc7u1TNpu",
  "key33": "5Dk1XPeGyKumKZNJtfmatGjcCNs699hqTHuMJ7qjMYfbKVLVJK2U3apzmMencN36NRfz8J2XRbkmit7ugqZiWZwD",
  "key34": "35CNNTw8AEHP3DvVvieKVwWRnUsDQhojNDLp9bK8XXSXkvdntiGbwbXoShUnafsLsHw4FspgmxoYnESH4M5URbVc",
  "key35": "23H9nr1PUia7S1hdEePfUkwqP2nbeVYcyDErGYPrM7N18mokquupJuYBW4hmxUZw4QrkT62CZ3FPSfRCYLREGmhZ",
  "key36": "82u5wgnzA7j4vhTqv8X8FTc1pfvBjZRogUZHDvXDSRVcGfq6teM3krRe3LENTmngbDUC9nuDdSP92WdZ4iXnVhz",
  "key37": "2kpFo1EKxeAqLbnj1XwT84Um42yiAojXJNhv1HHkQ6wqyGBAW1EQcuEWKxUa5obf3bNJSS7QQ68CM2bbvj7dAUym",
  "key38": "4qCNfhjBMZBS68Mmw9tkLtSfdZPruDE5jyQwX4LV16QNCKXbzvbWcsd55yN8MkBwQdY8iHcrnogzEES64Qw38BuD",
  "key39": "4PsaoJaQHVEEF4zD9x2LEkrtrGT8zJhz8Y8xf3YEANaTLu8q2H3KW2RouVb51sUtpqq4u71RsWc5koupvWzQucFX",
  "key40": "3ZosPMmbADmKm4Zqwh3jsvqx4gJsqQnj4ya9LFFKFhNGQbPnY6RNigxMvyVUhBAATJppyWrv5iNzx2DpuUEdpKi6",
  "key41": "TcvQyCWZR8kGy4tTQSEVwPJqC2vNSzaM5UMcpWU1bp1pfSiA58FMzJmNpbyqvxvvzv8YKJid7iepKZ1gMaVchiy",
  "key42": "hvVkTuQusYoXtY4Pph1PFUKJTVLQmvhUua6MmyiqhHvr9dZ3XYdJGW3x3X1mGRmbAM3xcRXAJVBYzNFFQEsodYb"
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
