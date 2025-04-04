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
    "5JSasy4eFfoC9Z66UTstGS8r6xwzoBtcqaVZAPggSHjQciRyYhvpSojcc9GTjHpTV9bC5Pr2iiSPwvV4bbDb9H6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k5r6J438XhD4tfH6tpSV6brHPqwQm3A9MvwtVqFPu9dSbfyPwU2J6MFQ3GWpHaxiucHmJybHDUrdCk5yL7DRBnf",
  "key1": "4FwrKUdLUEP8DUtyrMR3asUVk1YBsXwP36UZwPhqGknAasudkaUmDnReB9ru6hiMNnvQjhZ3eqSNUKD3mNReEerA",
  "key2": "4Nds57DamJyWBSjbThYpGYHpnp65q6pmdYH1dB1mcvuUTa3QjFoFy9HbgZwUBLDNcopvwgGxoRa7GnpB8PnRU8JK",
  "key3": "Nu49Lgk8sTKTx1ohgfcyhkpXkYGq1UUo4ZLtEE6VAYNw1BHKe1cuC6x7Hbm4YhQZ52GZZND19WL7c1kZqYs9LXK",
  "key4": "43Zddrq3PrvKiJ1qNqkFvpUYrcdF8fHMpy2NNGncXiFKpcSKK8KTUZ3o3tpCLvQ3bbjrzho1eZbXc1dbQRk3viTy",
  "key5": "2PWX6pd4tsg6sDn6bRLiNf9j1JUdLa2K8zcmJ79pgh1wh6iKUuqxtwVLneZVBiSu61AJzWuG9fmcPyh2JazBJ32F",
  "key6": "5xL3nWYmKWBS73um8ZQdv8nDnJCZ5WihFhexuD3qjd3Cf3qJrXjseRoyBsWpHqVY8XUjYW2eQkQroYzfHhC8wHzo",
  "key7": "VXyYus5d78mq2pgmHV1YntfrmKLtcJbv3JnkXL2pc9SrUHj9LTPTyNSAxXPmVMcLCzUMkAtkoi7QY1prBwXMCLu",
  "key8": "4WwznGBJNvAn9eZCUMLDVczsu6dwqp3f6JjUtjGin2KasBHHLWaAFqhicTKjZ4ZKbrm7T1V49AEtHPkLtj7HtuLq",
  "key9": "3bkyDTn5JDXjkwoGPRkz47HukMS7dpwuQar9Eg8yzCLKaMdyMd5eFsnRso9ihKcse75kYcER8byBsNyXAzg44czs",
  "key10": "2GdZKgDyeCcrG3Sxas8jHzZTGG4BYx3aKYKb1PU59Sstps598oPzuvvRdZNRRwbhZJJZTh5oUvij22uBVrToryZ5",
  "key11": "48yCEmrTLZKAvSoG3VRwkTZocE5CU8RxRAyAyRzNG75XSHG7nDWTn26W2s6JSkxzZfePPV4adPCp9MukBt79zQy6",
  "key12": "4gdGUayYuCt2srB4HAFpquq7EJFprHT2JouanJtVt7mjRZSPM5y2Qxz2FwA7st6SHpH9ge5dNW73HdMw6Ej5qsXB",
  "key13": "2npN7HGS7AKsJPzyRdDdxGf9T93NYnuV9CnKtvrrJip9b899j1sjiLzzM2pNr6KXhGr2WSNaDVwfgBmDQjGbcvbh",
  "key14": "4dP1PDN1PbFdABEd6NgDmWbWqvc483JGeoaQWoUizHcxr5FQcu3KyCcphLRZRbFmkum6gMcqFu2NvDdAw2SAtG6v",
  "key15": "tHWYzxMNLPZXe7cz5kvjXv5F5qp5Y7gKNSChtohHaFdFzGUggm7E97AbWd1zKNVCXgZtuGNPBFsL7waQxsiSyTn",
  "key16": "59tLT7ptfZ2WNzi1rxmAxVDUzL5aRbiD5EPuUYTmJu8XsYRqo47YUsvTgGjyrtTyK3ukbjrXjzntuydnqL4GA2iQ",
  "key17": "MvAzAgm6wzrHyRXKCDRSi89Uze6ENsYuyShmDpgg7RhNMRjvMnaMMLVjheWBCqUNzXfTXVyDZUPBX3EZydey9Zt",
  "key18": "4ZWvskUGyMynbBN2HfkArCjchkudMuYiTsjo72SknCGwoVqJB6JsVpUP7gy1QZWnZwgfzZKApaYiXa5aGScS4AYj",
  "key19": "5yESGo5tRCttsejUHABbfdmvxKduubD3tKxfuFUgzDrw8tf4qYThTYHZTM2ACVJEABTdQz43DfHHu28KTfCHTtgr",
  "key20": "5sBHUxJNs5D6WR3qMkFbzAM2UNZZf44xsA3HhjzbQpcbk8jHaL7cFJCLFHFU4XhGBVY3VzBb6EdM8b1vpZvzfY2v",
  "key21": "qTLFQtMiNzQvbAbSTXyHsCLwR2JrzeTMNV7sQxLM8ZQjF29nfos9EPr7rVu9oZe91GJxr4gHWFZDUVEQTB4UwR7",
  "key22": "3BR2xV3AkmodwxfmvTVobGWAA59m5CUfg21wAXWDAd3AAyfp1rwpk73renUCJ2tAr2u9FSbpxUsK8b9MvDMZH7n4",
  "key23": "xRYKbp7CtusufQNb6QKziYHz61kFRLzrYgipAzdg1zy6bG2nFiraZW4FeLrTzqyHVWDAbotvsm8UsHm4zbpnow8",
  "key24": "4YQHGCxHR5YW74jByLVwMSKXauiz7MC1i4wvxrfqwVMnjbcrzH7LWX7EJXthvfJB4aqR62vZPvehXYEsHtCu2K9u",
  "key25": "439B4iMBZpVho7zj53rSvMTjUi3kJHtHh1ATtUG7rq6APG9GUf58686Pqn5aUuLNTekxbNg4WAG6ZacBM22cPfcn",
  "key26": "2DQUjgqdja3cpkSYo283ePCDzHj8gg7jE588xWLwDgwgVQneKjUgPhKyiGWy7rgBzQN5CYJQrcGAGKKSTdpzW8ET",
  "key27": "TSYAxApyu4DGMZManbpx6dkhBdfJ5aYGRVsVX7UrHCPTbRiSLU5JjPF5bh3mFXoxg8yAKZDuZeorBPjLYYbsoK2",
  "key28": "53SkVe3oxuywsgS5Hwh23KwJHVEGYo86VMAuMhesG3xTmFe86C5e8UKLsf54q4JZ7nwUF8CVSrXMFPYWJshPhHSn",
  "key29": "5J2GJ4H3x5V6ChACAsjEoHPFbNq1dJnVfre7bT9QLx1JAub9rF7wRyusCquFBckEMVyD7TvjoYfad4sgM32GukZM",
  "key30": "3d5XjKXjWjqaca551bU81DuGTU55CbQ49SbgQuEej93N3LdPW16e2pe5ska3EeBu4vMzNs9JXY3pSLXovzJ31NQ",
  "key31": "2UgAVNxJ1VDcsRWtPVsGRDvMWkVSJFn8eHd8A2tJ1Yv1CLeqqkc3EnUG1dS9jDepiW1zHfj73Cf3jGWt6EomCP9C",
  "key32": "58n4CkRFwuFDQPiSCMXg4THveYrPBp3G4vZ9wN3fW92KWXmSCxn8GTceUBEYurtifxG1oXBU88Zsd9uSJaHR9RYX",
  "key33": "59guKDEs9sgXdYL2DoVx7ZrRiDyKThiuScRpdy4b7RbTmmEovV58fjoD3L68DeaqLCJDUNKnGnLsjSbNUiaWppzq",
  "key34": "5Enu8P2bw3iDHHxdDmEAp96wxdDBsULYYWBZPoG5AbnPdFN9a1c7EGMLsSSkthytWXAVNP4qiKviHspnFo4QWyCr",
  "key35": "3iDLyues7FL3Mr4WuxxRZmXB3piKkbP3fKKE71VhmGuJpmGcEyNpgqeqERUTqUo7QiYQMeQuU3wyDo2tJLb6PoT5",
  "key36": "5LsA5JPt7yhh91TL2zBoTFboTbnb5mPpsz2cNBBuRaSacikSgE7aLUsKmtZfEJGJEFDqiUG5x5tZdUP8jygGmVms",
  "key37": "4AXHajZJVR3GVQeLP2MBc7uBno464MuP1qrhAbwvN3wBAz5umdwjCjevH8B7PQNvasv3c8hmFpvzAT6eAHMPtoqL",
  "key38": "26p99ciYjCusR1jLaxYrjaLPfQHce5zkT4ntp7KUzpYZVhUL8tQBeE33PN7JUwiN4Z99v4ALEmV6XVtTXRaK1r15",
  "key39": "MpxZnD27DbfSoNSNAvVHk1XpNKdkCw5aXEMXB4hMQYjWwh5u9JUMjtAt85KvkhC4uHeWubyBNjjnTncHxfYHPhF",
  "key40": "2XBWaMMAK36sM2GCWiJbhyVd4GHhXEWkYohEsVF3h7d3DKd2KGjuxkHZeKyYT6D1RdW5Nn736nfmFnQi3PkDLweK",
  "key41": "3aj8tzdUqhWejDM56Bw39AbDeuBffvzWow4hEAAVLSDcQePiky4YhUCXoUih4XR8RugiWKX2PvNq948zHG1fVUEd",
  "key42": "ieDK1zMoAQKkAUWm5RseBRjhfjzmfN65bR7jcxYbgEks9eExUuJjqTEF8jxCPXRPXSxJrgZGBAzkNg56owqZyEf",
  "key43": "5sehJcuhVUXVVa4LSHc4oBYDhnzPAakeRhD3a5ZYHrJfUv8VM8Teem6sJ57zHmMtQybxmTbhbw2UZzkCQFM1DRZa",
  "key44": "vKD7qC5Fh5rMze1ZE9fKpRA5wy9R8PErV4UCTycytVGH7KboQkD1SBwifLmnQ5n5ojqdUXi9KRaSrUzVuBrKstZ",
  "key45": "4Zv5Hj7opaeYkUuwpnBsSf8HMbRPJVYokqz8J7VcMLtYEN92wyNuvm1LxrQqZwD9EhW7FrhXAZZmdZ5Ty7b81HFU",
  "key46": "2Mh1XMn2EU3wf3XT4ZDB9ZnZNzQM8fWxYEeCGJs6PkdmdQx3EsgMJWBTHpDvnRU9w2PGCxtTYsh9VfbXv2urmsym",
  "key47": "65RJSudnrbJeAvS1krST9JMeANz2F9VUJNHvgBeiUcotpL9bH1TcQRzGSjB9dF6UdUEz6ZnNx6RUncKhXfxoCkjB"
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
