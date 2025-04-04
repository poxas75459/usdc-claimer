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
    "shMeScexsU3yaEHsMFc7JGaDrbX6CY53YmNPTaMqMVvdeayH1G2tyvPiR6XXikxddoYaeeDiHGaNMWjF2xkehsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WL6W7juP4Z8aWCRd29cPwc2aP3KMzjYg16JxPRnzDr46X93x8LR3EhhFTwDATt1V1aEujGbSoJhLCiFyowuPvLY",
  "key1": "21LdXWvRoCneGQLyGcF2UQHPpXaATmrJu8Jjx34oDnryXmRxjZAeVzHLTTfYhY14XR86ixi7F9ygGnHZfNiGG8TY",
  "key2": "5c1nAhtnmATssAGBjmc7CmfqTsyViAXgVJyXBqJD7Q6coi9cuQAvVpJ9QXqmyGXgM2CHxyd3ZjQpMg6jvSHYhfXY",
  "key3": "uhaV3mWLzbPhcevL4fTf2tNVqTvuxhMALxPDW528DpmhV5XDdztJE7Fw31TAUwRcGQR1G1aGuy39UjCRS9S2NT8",
  "key4": "4qe5ZitrdN1Kd4qYZZcCpLgWv6vPzAJPDmjW8j2L4EqwrWs5jAqnExvcTjicgXT6cKvi8B92FcCFKuD1VerM6RxN",
  "key5": "5Apgv8LdRYoY9jMXC51kfBdUoxJhsfX1o5tHo5MhjXiw3ActiDaFuyLvUhvawngFRz9nfM79sfzHSyC6tt7uAi2m",
  "key6": "3pxhgBXNGhAgBww41GK8rTCY26VNVgD6acbS6sVrxCdofBP25MjXEkjCQDN8J1LKKF5jctD6YubLetGRJRDK2K2Z",
  "key7": "5eZiRgVZoGzL2K1U1bkpa542N53NkG97S5mMcEiMV96eow8cuv1QVzJD6ggC3rVgKGBMbuXs5XR17hwbwVpN9NPU",
  "key8": "Rww2ays244ycBqksse5svYX6dtzpMKfszyFVj2TcTxgCooesga18kANQfLQdnSsHYUpUoRVoQMAbVtryRoC2yT1",
  "key9": "bCt2tkNW5VGg3BYsBskXpF1LdZzYCyVGeu6brfeE7Qs5mKTWi5JxQL1ioXGtifQb265qB49JoqFgGKUjN52Pqcp",
  "key10": "5789Ab6yKdyu9cLy78Wke8x7AkF9Xrc58k4MXyFkEGJqh2GC17i182VG2YP5JNn4a6q9snQo5Ae6AkaafU5i51jD",
  "key11": "4dP26sfTYHyQA7bL3Coq5nDX5YxS3UpPyhuLbdKJGGTUNM2xpjRmDz5AE8c2igasShHArJXEawriZbkwnmVxx2kn",
  "key12": "5gK6PiB1mg9yHED6bZ4rcKXkP2DVBtjHwsMXqZeJ3UNxME5WuX3HcwGzy9EHiWBKb2NKhqZ5kqFQoiLGE5dfA14U",
  "key13": "4hQqUEBZNmcy3t3s2HnVXCC6b4CGGEXi6CdficTRrBAtX4Q5RR6xx4yRSYvzos5uo3EXJhsukiZCHKWMCumpmKxu",
  "key14": "5oLwJW7tQFfvfjnCK5Yru1wtmQweqNKjwu7sTsjPodFvDmZw2dVn6dxNuswVE8LgsYwWYHKQoZyBAhzTgY6MPxUZ",
  "key15": "23UqfJ5e4HH3gY4vkctyXS8QRgQ64cbCv76t8VmSnxpWGLHrwz3VpaHN4HEJZws18Y6mrQSQ3YvfuKZveLFCqbUr",
  "key16": "32BrKiNqpWVQyNfgJCwZ7EG2YjWnMuXURQ85ht8HGjwnN1X6zx8HKbBYbkHXHqywrP3TRi5ejhHEuSiFzL1NNccy",
  "key17": "3VxSQwS6YCUxhZy2QaC3CnQykTcBVGELzDnGeZpDGbeBc38mF5DUAxS8mKhCgxhqYBest8mSJBmBzZxokDNJin5g",
  "key18": "2KQgFXH795yc1sC69Qay2BRjn7ZeujRhP2pRpGUTSyxHTADrUMNLTvL5QBWT4FCQGpraBhMxraPX6SqhSH2QNsK5",
  "key19": "3NiE96VHZv5XpEsZmjPghYg8metvR88PtNzEKPt2MPrUvrkcCoGePcRSVLu7XSMuWUtEue7sMWGSRVniE1e5aQQ4",
  "key20": "5D8taJyxiQCXcWiDrcRh7kMtuLioQSh3eXgZrYyxxf8e415mvy5zAF6xFq3SGPs6t1fW7w5PKEUr7zvqpqg33rvb",
  "key21": "5GRA7rnfAdhTE2i46DShvgG5VkEir2RwUf75Qx57yKuLisCQVtLj9J5nzUzvPXyJLmjn9QkW6Wv4AJkU7aHx6qWq",
  "key22": "4PSm87bSwsXG6FLypLvW1a49jWTX3ndKbu8roYmPZipVxiCkPJaTEGrPxB3HDsyHjpQQ5QSP6hCY3BjPmozvgdN9",
  "key23": "44z7Cqn4CziPZDYb9At2zjBtMDmFrJrZKjALcuHtRQXXQ1cjCwmprevC8dHizyrAgJ9Rcb9XbckgETBFeeVc56pk",
  "key24": "3qtvxsLfHsmHbzEai2PEEB7tiYNtaedTXb2kkDyf2Y8uQBvvyAcuLL7bS1PKsyVTukDAQ79Qoh77HacwAzHCYiZd",
  "key25": "49YiStrWgjwcvfPqN1pmAYwfYkUYL19QBBipV6cWAfA7d4eCmq2WWUJFSHjxLb4T8AQNaUUzD2snsZK25wDSxsyw",
  "key26": "NMLk6yZvzru4GNfF2BLeNLzhdDTpqoB3dKwJMCr6N79xAdPCbJdLLuozGqRbv84JmuWCpjCL32wt6vAD2wDgLtP",
  "key27": "2Per4Hgaj63wzbigmFtDTswQTu9cxqQguxaDQ2xRQE6yts3ZZzDrVyPN8SRfpGwjqKL7Q1GcGm2KDznUa8D7TBha",
  "key28": "3FswETqCM8at4BqawBTKkvtPRAVgfFcwdV4vTdkzovjfxTMHB4uvJMoHyGCPijZTMQjHKJDBEhyqum5K4B8rMmmR",
  "key29": "4Q5M2LGzxiZP1rwfKuWvLhsNAnSjLCSpptLMrQjVNwtBhgTBgYRjzTcnduYNdL1prqbar7qUFSYQt9ptHKDjGmLH",
  "key30": "2abfG19H7rxUJbQQvZKo4uSMQDcoe1Dhcs5Wjd1Y7Kr9FjQ8PpVzX7EuEZCQat2pLjGkB7ag1SoTKtVQWd8qrbYP",
  "key31": "62KRBTnuBGznvVrsh9ZNPotc1WEzA55er6A9JXiMQMNrtViYtbAX88ZjUWK5JLAeSkcbGGM5gUvrMDXBoEorwgfe",
  "key32": "3gj4XSEGGVo7rXvLoDWDRXixAcZiAyqf7bDdUtE1YG9xRGu2v2xJBr8TQom45hC8q2793eEF5yoRAzvwYfG9x84i",
  "key33": "51E1suMTHtZ9zXbWd7nvG3FUAPFr8e9VjfvUJBA5cfDbo9iwHSvCPfBVqujHZqvJBrGUdtWaV3ZMQsnGGw38MGh2",
  "key34": "4aeMJNsErAG8ZmXQEzwFu8UCbpAfNHWC6jxNRHoSNwn2EJqwgVzw9GRVjU36S77rGhc6ewHcSkaTShFCv679kiHF",
  "key35": "5cduJ8L54nLSw4RWmixGQ95YCxi14wY8p8rz9jb5zkLyE2kEDjbNNjfY84GQZhpzWCuA3F7f5XNXxUzVFH3Vx8oV",
  "key36": "4wiAC3hkq6pLw4am5WFuhh1Z5AKZGqp7Yuyr6JPb6t84qqYeLHwTgxEhx7oB1qScQ78iQUAVBW2LSSvtoftBjCxL",
  "key37": "RLSVjMGMQSL5Uf6YLYnRoCS9MutZGyHzcYPQyXrZX1zJMKGE86VecMvkfunJTx4tYgdhJgTc3uESHPDED77ViyU",
  "key38": "3GQpeSu1XN9ixB8wuPgsJAAk8pRoezZQQrzaUAvKVJTp15JZPJjE1QVtHKQ7DyWGH77o1LsRpADBYs2TGNLSsTGs",
  "key39": "2KUucFRZmv5CPCsSqrHRQgoa4Mf8iwgWatcqSRaKQ9fc12KbDrh883bTTtuGUvH6AC8zo3CzrL4XETDHG4o2FfgX",
  "key40": "2TtN5SLqUyd4BYaGseo6ukUgeqvRfb9Q8BNipP8dsVDPepmmavqPbC4fsoHfx2GW7WkMdMgb2TF2LzKNSmqkBvis",
  "key41": "2NHf34TTdVPsXXqVcRtUm8vyKmErSWmdt34g2nsRkGMZg82uxeodTaoXkpj83HFKQRXMFJJ3oi1opTAUR7jbttnh",
  "key42": "Nb5VQWiUDrFsdHMGDz9rrqC4YhT1HWCr9KsYsmFgvGgoRa4T3k55GtYdQFrvpAzwbmUfXT1qvMUNKrRpbzyvkn8"
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
