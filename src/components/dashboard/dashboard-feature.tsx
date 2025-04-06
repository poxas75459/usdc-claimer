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
    "8Qsqg2ZFwcXPDv7KxNjf1DWAxyiuFQpMDKSMMmuhwBfZSqHhj6hopWFpVRTzUmEZYTnjq9de8d33iyxar4sweEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42GE6MyPbnTsKn2SENVXadVU8q2Hoc8jbCbqcyjDZWR9RwNN7g3McpxbLHJy6Phqrd6MrgcXp4rsotH8YHpnQMkg",
  "key1": "25bKw3XiUCNXMjyYBYNwre8vSdpQeLZXXJhpzSuSFtEYBC5Ui2Q25ttDQT9fNL11cc2QkBSDqHZg665oYBq2qUxJ",
  "key2": "bo8oS5f91zSvgojcezmpLjSKWa5veKRUMvHupsfbUACamaMpA8emBmWXDwbyqCp54aVsGJceyRFwYFwbDebBcRc",
  "key3": "5nhxfafUx9k5VHP6QfYjrb9jYGbJjeTUnBxLbpUa7g4GNEDcNsFikhj1QiqTPdk3QaSSWEiSFL6qNRyZ7Jr4UDwC",
  "key4": "3rCVh1QvCf2G4VUdSwwXhd2GcPMEADtrQAKqbMZxSF6uMH92Ehc9BbNj8HzJaadmdsN1nR1nNwwAFocwpuyTcxAx",
  "key5": "smgxc5zu7i7pkEuexLcBZiU2EYc39oemCVfnAnzQEHvVUadbmJK3BEDTFBDQWYbZ1TihLRyoFZBvF42aLdmu4xS",
  "key6": "2HfXAaUYkS1iPaLgN8M5ipHGG263MQgSFX8yrFZ2ZADm3LU9vVZpiHzjLoMv6Tzr3HHyhUEz6XeoaoURw7nWMv5C",
  "key7": "4HJo7zS6JgRdtShXruf4vzYTPHh4ZDWujCCb69oAMsKtZ6dzTJeuvLUBqsWUyWXs2pqkDdoahmVojm8rYfoFQh4f",
  "key8": "HfCtmBTKsLk1La1QYu9sySXX9iJ4o78kHneTxDd29sDPA9oJrymWf4Gi7iZySYmLLHk2hZjf2Y22YAYHdnzsDWU",
  "key9": "5XCffBERuNQgGNm9QXemFZqaBB9FzWLK5jYaTVHykonJnnNBaHtTmRJGdGnpty8kgu5Nr4nLeHbm5SVX157WThuY",
  "key10": "44x1XvKS7U6qd6SiQGmnMJRFK7NTWm9zrreRma7uhS5YDbu86EqZr2bqV2PA9BfEHZFpyTnj6qkzEAYLv3ZnLJwr",
  "key11": "2wDR7FxYVksKt535ZPC1Fj92bDEoU9dB7c3F8gHRZwQKYznxGdck31gbJbYuo7qkLUtfKjaNRBdTZLvW7y9yViKN",
  "key12": "4kfzaYSW9QCCf1uUFMcHFQjap5zft1MzYaNDw3XNEKHbzrggxUCacWCSVs1cQFQiwsp5dstDhoz9QxfufrqBct3z",
  "key13": "3h4uyy2C6Vi1qfUx2sJMpk1Kh4PwEpHAx1e36fpcEJm2s1YRhf1kPR2YNT4XkeDyktB9Qd5vXuWkj5oD74oLisgm",
  "key14": "5rcdQqjfef8wzkMzrbmVLKCQEz9aRf8VB4Lby97d9YaRuzErBZ1TiJQhCZe1L62BNNtJKPsQZc3BZrcJEuSDmGyX",
  "key15": "5xfFg7FdteviN7qHXLTLhkqqH2m9bEacqQbCm2mmNDs5L5RicfScr66pMaEi3qBBaQZXz3XbhmgCH6Ya37PiD5Ax",
  "key16": "35nds19sHQWkDf9FFZf1woCPZzQ82gMiUg8oaLN9SCsnpmBgerknZZk7wNWHj67eLnPJYJKXPiXQkkDFU6DDnhmE",
  "key17": "4AefZcTMaEVtePzoNVSdfQHz1KJjyKBmiYeCN6LVcdeZmDNKwj9pi1yYoBkvkmZv213YAjWkb5JtPuurbSTukq55",
  "key18": "5Z9H3LUdRFp8GtQgvqPUd93d42gnbcnUvrb3XNfco2W25gfML6ytaHFkYNGXBynK9WwAt91vZP4DmwR71BB9z49g",
  "key19": "5vgvt3KVj9aUCvoXMBnPVsy3GG4GmNQLDYiY2nghVwE7Qu1PLTikPhCFBr2fPWMqkARhuKo5KozFDWdG4ftvDiJL",
  "key20": "5MvE8xjGMaPfTeXz8nyAhn4CE7nchgcz7FAPST5K13fn4fa3YLzJabQt15j8zQogEwRxF2no9kiuurkJP2iN8a1S",
  "key21": "3oU5jtGSPciric2NKFYQSW1vR4JfqoF1euJebZc9w56wi4GWawcmPUEDWu6QnoTmYZqcPV74tajEQT7T6Fwr52PR",
  "key22": "vr8BopQZ8cUDdLpfGyibqezQTr65AKZniBrvBdf2oAxFiqjKaEmgLh8HTC6UE92kAtTFdoJHCjJ66qLBfQYZ9Sv",
  "key23": "hgCpaac7PgLNjuZqRtYFeqWvryfCKfxea2R2Da9qShnE1CdAXhJ4rTCBDxhiER8QGdjDfpMkaPQPEfS5V4gzNyZ",
  "key24": "5aNYw3Yrmgkq9fMr8snXBKCEQqrUvAbLuWRALzTFBHdKpXVTD5tJgeuiQncgjgML3hMAqp7b4WYjY8qmZ9H48EPR",
  "key25": "4GCP8ZwJ2zdt381SVYYpBzpfyLWLh9vdZPQnKSYArZVPPmbbtcCWeTVrE22MSYkmaKK6i7t1wZH1FwbjCU39V2bV",
  "key26": "282nfkc2tfQXeJH2E7DLP3eNBfk2qaYLzDCmCcqdAg43vaiWwgQLNpyz4d96uGt1YDAZ5LUUs6rAUJ2kvv66xPQQ",
  "key27": "4KHbnJAqMrEHuNAQreBvJGBqrTHDvS9cPa2YTgf1CuxCK27NHG2GonCqtgNnRgFUGzXC9YUv49EDCNEF1jyqeyxx",
  "key28": "53ZaSeRbBwyChDP3iiXgdjCNnweU66u1Nm9N7evS2RieVi16e9Nyc5tM1JtP8TH5D8QsRv22396wKHhacGuAWmhs",
  "key29": "4oEsrgCPYxu4EkAEaSw2uhRDi36Srmeny8iq85TjWQPNj8LZ1BZB5FYBG7Kvy4b7h79STKAjA9nDJhQF7pqHZChA",
  "key30": "2uLaUXDgZ43QQN1TNE6fNMYujaVSFjq6HfLgjxNVsn8anD5MwWPD7UzJQq46XqXK8x2rUdmXKrad7fNcQF56o6ua",
  "key31": "2Ydx7dZwbAArQFUeHWQJcMjjAZqRc8zLZeAbg1PRKSFsaEqAKGngtFMKppHPV9ibyx3DE89atN7EXwvdHZfDE5M8",
  "key32": "58Jt8PSQNGMDdNKPaSTpK4G6WBLwHhTxwsufjAxppEjtS4WWb8N8mVD8N3CALM86CSVCaTWaWg8HmqRyR2U1MRyT",
  "key33": "51i5qd9V3YZXJdabMeBR2rTy61Mi8jnEK9tNTJ9M7yx21SSsEopmRZRLVwHt9xYCxndaUma6zhab4mfPqeqCcaNr",
  "key34": "ftnV4q4wyAvUxMyB59zo1QeyXPpGLpYs9VnRzzKojJLFgaCCqLepebNanvr5T5jH9GFQc4aKBJEn1Kruhkw1vAL",
  "key35": "4TG5xm9qtun15U96aHPmx832WU8eU3BSERXxCGiGDAQvmFmpXZFydanJ9fNMgysJUBgAzxa47e52MvujJFFhQ93q",
  "key36": "SzBt2RFzFKgq5gLK6uFJ1bd68C8DBng6ytbu5TmQNFfKBDhVP3AcrvY1wqjwbzD769DGxHHxHE4r8bQv19f1ghk",
  "key37": "J8BfDxBkowHxiJUwcvbNveoxYEH8Hm1oLMVkAHYn2Bm2ofoGWgJ5rUtzjkLvFd1RbrEz76JaEAburJrGkkRov7q",
  "key38": "5wBVaAde3w4RGXwvi4gqRAb2iQMHgFbWa22st7Cb8BSNJvrkpaeBdWCLMZ5hta6QJvHoWT5u544Efh2FQNoKu7pz"
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
