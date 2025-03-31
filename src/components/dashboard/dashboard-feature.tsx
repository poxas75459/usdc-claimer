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
    "3GozimifPc2bwL3j6NmBvhGdfBwMKcCgTUjsjLiJY1hfFRBD6BPMSMQu272F43ZTqTDxZvwqL56W2VVkYsPkSkTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54gUWAP29My6x8CACJyBipYCoCqprMknEn1pcHZEbGWSSt3j4JQJpPnqzpU7QtxJYhHXqT8MZgi2DSNiaSBGhHR2",
  "key1": "3KCV9CXFvdKxHnHTSxQNL7ChGhGgU3nFcpeAVCRPHxNZN5FDj4APjaR1XDQjZ4frAzkUpaNvJb16QmGT2cKgQuRH",
  "key2": "TVYSJrRUBdQZS6xTBM4FjaTcFr2uS9fhYrJ32LYqBoBw2vf6cAvL9mAzXkNPxjta3xR5kr29nRFGHtPArnpbCg4",
  "key3": "vZysMdnPhphUPMD2Zv2BndjwWk6CFR16mtmCcB4cnF3PK6CbBgnziGQkbw2UThoDA6n3kYEXFYDxJRgd5aEf7jG",
  "key4": "4nUnfViWZQZRxbbodUP8jshVfJAESD82C7QHQKTUV4X6APewirYE9Zz65mdpvPJ8VyTE2gJM2rMEUTTzy2f9bzeB",
  "key5": "3Wx5NAepJY3DxLhMK6gbVSRDM2zf7GZxXMUaxm7RRySnfaKC6F9QoEcB8KpLJwN3iDrN3dTREFKAS3krdz49ENCF",
  "key6": "pirzThZMfHWKxVn4FXmdruzyBehg6SUdmp7Yf3u39he5fgdwud9YAsqAQZCA9XQx3ymJK2jL1TQ31QjtZ5YT8kx",
  "key7": "66wwU8cGxtza5XmAK87nkLrSCWQJ2zizeodeCZjdiDZF5pcG6xyP65ECkN6J7yJYXs7nqX5pNHihywmS1rijf7w7",
  "key8": "4f7bTH9jB2RpcQbE5Cmos4tfxNwSHYCKc1qczHphYpNMpWrCB162hnfnUGRkKfjvYXVrFCwPW2MsGPwMqQ6iWJTa",
  "key9": "67G4AXJgbD9CNuQ7kzJKiLZdcDqXwV6f2D1LY43x1rnfh4q2zbbLiY8xxEonBGPGewPDvDR9b1Vv991XPpUJz4MX",
  "key10": "2PNZZGxkGpKuumGEHCfV1YEA3oz8qYFYwb5jkmaifyDDiUnsRpFv5o3519vz2nE5Zfwwpa9VnxhA8WeQgSH8SLo9",
  "key11": "617QERZac9MMSjQtJj9GdwSEdgHNSxMuTF63ebftGrF4xkorPyfiYocGj1Eebs8CKMZuG2mAE7MXXj21YZPKRGpr",
  "key12": "5tCvK9NpyjdqWCs5kJQhcTiU8N9HTBEydaxCqf1fwvBiqSRvv5V3b4Z81FT9yobbbuzQutS55cGXBmJ7QESoNz41",
  "key13": "x2MxydUy4QtwJQ987qR7kVaKypfSJMEgQD7Mjy6HuKh5D1zeKFL9k1TJifRJ3K6sLkFmCbMy327oiqefVaEegpd",
  "key14": "3XeADu1oXzshnzb2LwwB6nzBSWZrBMh1Y3KkZXHbjkNN6vtCR6CKSAYmwbHnNTKMNbAgihTqWaPZK2Ac9tzs12dC",
  "key15": "4cP6cTYmVNiJKdQTZybWgPMKAaUkr3kv7nSuF8oswttz5WR4nqYFsJYQbEV8Vmy9JW1nCi2m6LRFDuEDFVCQ6YjY",
  "key16": "5hyVMKxFBPS7yiyDFJDdsQ9JZe7iGKDdqpDkCjh4krcK5T4fPW9aEyHMWSZHWJyQAak5vDDNsMubPh32L7T8UrR1",
  "key17": "4aocZm3FXy9qAZjoohHoMX7oRbPj6gZH6RiPBfMwFHa9Xe1n5zBh3F4etpUmC1hsra2tBNKBxMG7yVWgbdTgZdBh",
  "key18": "7X96NSuW7apvQV6CPXi9FSfQqxJLjc1yunbWeaYHjc62jd1qzMgCR88scXtR1RaxeBg9R5pyWNyvNG8iPULmBrJ",
  "key19": "31kx1HVHzMpD1vkecbwrwser56ZPwdryQKRrYHtDBafb5Vr1XqD22EAcPa9JzwEZkyNdptCnCkg6ipWxbUvfif64",
  "key20": "4wcTf3CT9cmNnUhxLp3ZRBVot8SqUdoHEqpG2QMJqbVLfHqoVMBvgPXPaN3GnK5mk96WQkU1GC1ZoCL1eZaA9Eg4",
  "key21": "3BWLZYq9Vjd98ztTziEj8YLmSjZpmaowmf4tBF5ASm3WTpWUhhjYNFCv7KLsW8WRK639EV2VqLyKNQz1ERZxSCbx",
  "key22": "txJGpjgQWsCDrQxzJ3nnnPJ2evrZ3iSr6AKLaVUodHAUB4ooyVCedWwD4cV9jKtwgbjGdUD188gFJUbtXDMptTX",
  "key23": "5SiQsntP79f9PaXoGbpJHHWofGnq39iB1w5ZHvH8ATdvfQ61JqjFbEGp4VaYHVppKPNmJtXs5Boo1u4MYgTU3cuE",
  "key24": "46XQpj769yNxYDzobHi16tBJ122RgMdycRErCWtmH97hsN7P1pCHWwsy6ShWNX3e1ph1uCmKLsmWa5HDBXAyKoBE",
  "key25": "4JTMUjWojacMdUDLkLNT8pxHhgep8hvcpn1JnuTGHWnq3ixo2YUNJA8AVRxWBupUsaHk7TVMN6JEPWARfHpJQtud",
  "key26": "51njex6VH8mWsFVh4DYn8RTCHMk641EM9XUh7fBPYTvAh1ATvcjY3k81WpYtKsLpYss4ERZFFd4cY9s8GWugYeQC",
  "key27": "2ZHcWhCYoGyxCiCkL78mS87fzZBA8kyR5RssxPFcSVMor7tfGWzjM4zAA9cJjJa2HCbcJookRx3wRKKn5JeJZiwQ",
  "key28": "3XUpWwAYiJtB254nnJ3CmowNQ5HdZHEGakKnK8dX3hbd2o3yaQ89V1VpDueNy9QNQ6yQTiMmdaajhEB28xRazuju",
  "key29": "5qFYbMevGATgmgdq51S2fo7fs5rZEe1aBUuAryFyZC1eemGGTt9SyeTBGA1Pv9wzaMcCktTvi8iW3FFkoCWsn9uD",
  "key30": "w9Th9Uzo4Hui49XcrqgQXykFRioPTzfwjox1GrPWPZmD9MytdwFa3zQHMMxYyQ8WkJd4qrp5Pyb5ss41PG7oKqn",
  "key31": "4ymPCVdkNyJWBT2tich52b3XZZiAc4C4oBtKpMZbGVWKMNY1pkzP3ZmYyymCe1tVkSJrPeqXJ2rPtm7cqFGcnbk5",
  "key32": "4TCL4wqEDmFNuVHvgoXXktopSFTWeAvjA4fY3adCqd6KupDSf25GAyxZGgVziUKjfmojgSXnPv4VxFUDsSoJF9Cu",
  "key33": "5m9v1ATyKwAp3vR11uVg8RyJfqjZY4bqT7zbRSs3VfmWrDrcwL4vxJeKv7uDhDeTw6nWA81g5tDsyLLJof8hMUCA",
  "key34": "2LZ7GpzguQCkKKWQM1p3LxRSTkuvDgH68qkpM8QMRyrVMKvBapb4JHUj7cpy46u4w773D5wUrnGKX5QeNZy31MK4",
  "key35": "3JuLCbsbTtN5qzZZkPCbWdF9jv8qEJVZxbRZ2QcyJ9XHpT1tM5p4NovdFKkPBWWSmZFQou9T1M9bvFNGFpDqgRRE",
  "key36": "5SULDUK4q8NcXrd6KiXPrsVjcMbZQHyU4cuMbFwjbhY1BQysSR6sy96Xk7NCSMrxtXAJ1TV2BrbbspQqWQe6oRMR",
  "key37": "njhAnXScJWe79WSivyTSkpDGmhhmMdmBhUvK2a8iC9cPqEwhMKTcLk9ubMcq2BqSjTZVRsBTvhcMZskzSzSKuaL",
  "key38": "39nY6AE2YDQx1iTLqDZoHd8YrAWNS96bNiemLqYK9ZKhxQUSaPNJhC8trQXdK7m4gUbwLJXzd1YT8cs4eH3aKTu8",
  "key39": "3gHnsV81LVPniTAD9wLZn7ttzJ6LWRm99MiU2nDGpvvQB4pt5ew3fKALsUTL1h1UuBTE9Z3TNrqUYfjN6fbZTTAa",
  "key40": "3X5q18cVE4x8rQCSJaCJ3X3RuvbiMoKYfndA5sJ2xgDSsusybFxoMhMcorUtRSUiMaXjb84dCfCcUPwoGKnZmER9",
  "key41": "3pL398HUjjzbBrxRysdFvvzzq5FTMP4JCo3TY5etiTUp2upndCzYdH6XFFwgG94yAgm1S8Tw9dJtsEc1dG2Xpthd",
  "key42": "3AkXiEewinmqGV7Dk9GphVg6nB52JFBjGcQSsHsrAMfakNJi2TmyAEdRUu2e3ASetzYjVtE6zghrxD89fJfGMDYB",
  "key43": "Hh6Afu14YeBxv3yW9jVphUfDDk9RjaUFKif37HeduQXqZ2mQjKowJEFkpwksTPE2RnhFdMPkoigCsxYDrUPEqrV",
  "key44": "2TL2Pa25TBGVzriDydRNMaFoiEAxfDbDd6fXZMNYaj8dnWfcL8Fir3DN5PSnE1YmEMamDgShBqo5AAfmMS7ipbrf",
  "key45": "2jiTA8U6sYWf4bqYG8J5c2ehjhMGvBXd11m64iWJQtqMsGNac2wj9xnbPcZUXE47mft6LcXB5QRyBGNRMNxoATEn"
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
