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
    "5Xh3EJxt5VNDMYneb9W7yFnJ3kJVnNxAM3s7XnPE8u8N2DVvukekaG1ZT9iMYjxuFRHHYh4PUkAvzXbPiaKtCncH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vp3Z1JXd2wT4ZgK47gfW9ks5UBPcgBduFUdHNGFt9Y91Div3Cdtf6k36njTdg7u2M4nEpbKgxyWGo8d2apdbrZu",
  "key1": "5Hj8EvMrQNEQxyizZR37WrF9uLtUFLppMkLWo2V8frSEpBnMJPpxBAriS2Rt9sjfHL3Quvj3b1cupETMHKKoAaa4",
  "key2": "Qs1dcWFs66i1u8HunYWEcgakR438jgKrB2QH2JZk42CUxUr5NPhDpErwEi52J7a2yQG6T2wZ5g9SZuFzN4iDztk",
  "key3": "NJTVDWcYa7nL6Us6tGgQtWBDuw1xjq9JQfY2GUMNA3Y8SA8AZMsjo6keRz27EkNmSYPuPDNMT8n7hjEKZQy7ut1",
  "key4": "3Siz1zyP87xwqwYMjT4upNkgNgzkuuxo8BhWN1tYg56mEqF46fQA88iYcYgV4J59bySTA7j9Hez8DyQxMy4k6hfN",
  "key5": "jq6XJg2BRb3UhsMBDh581v3nmLnjjy34tD8kwC9ayZZskAT9iyFuEsorK7B9R19nkvNNMoa6Ad6GRZRfhEaojqW",
  "key6": "4iV2bkCmRNfGtN1RFb2CmLQMPaQPpDtbi1Phaxm1G1WsdbzZuijBEA7xXbPZjYpRdReDWEtLCokNFePEdZCEi1UU",
  "key7": "3rUEHP9jDa87iL6qSE9mMMWiAdhCQ6gWBKT4bTpP5LtK4N7Aq1WL1wZgZBhCwbqxmHTVmQrT9vtead253YRxuM1i",
  "key8": "5v62ZWppCbBjAYeh7vaEuZ9eHWji59FLMccDQWGq7TCWuBhSHxpxHVDXuwypQNCD8V2GK52993rYZ57AihgPbw6H",
  "key9": "2y8KCgU4bJBZePm3dAgSehaUpRpe4ikxzYKFuTdGbqUbQisAYWy5W3LBUZrE4ofK3upmnAnE4z9sRhNaiNZgSvvN",
  "key10": "2t3j6qgH5uSMvTnV24x8SSK6VCf6q8ZWWsk98hN5t8pUoSAVvdsg2Hrx89YisVZdb1tvhapr3HfbvuLrKzSV1De6",
  "key11": "JNGQg99F2ZxEYB7nA3f6Jv3LKnh5uUyUf9LBUdtrnZHrqqZ9xFb9maKwCptLCemretMcjbi9AUoYcceNjM47bKs",
  "key12": "2b2whBYrRGwCgVhJcMYdRzNEw6tqCBVgCFmpPkaH8uvgfqDLVkSzaExcZ28xnKsDyJwvbs8nG4Yob9urYDXUdKHe",
  "key13": "5kEna3FFGGAWEN1x1UPzWWFZhbENE6e4xj9wesEdPXkZAKPjoQUYbdwksjZWtmeRWNSbvDXUwHz3kEk6ifFTzUYW",
  "key14": "4m4zde5Y6Lb7rM6MjZqsPUbuhemugtWYtMq93EfpDisTmw47ghZ31ze4S3qw6buVnUBxAE1uNjhfDEFHQy2mq7na",
  "key15": "4n7KhVw3bynubcVTaFq49eVJqUsAUqAnYBhn5rVLRmy1K8vB7cFeoRAb2oCSn6oqLmWfjTPbHwrsakUBzz5ga3s1",
  "key16": "4gnLgU4mEZzPTE7zVERwUp5C5Hx8NqwEbxMv7AJy4dtQRBEAQ3kttU8Sed1qgTCBfdznxfW9rgnGSw8hzVtkAfdD",
  "key17": "bqBtAW2Cgy7PWPejJUsWNiX8E2sdw13VHZ32oegb85iKorEXuw51RcgfmQLUU5xreKbsgeh3DqLbnkAwKP7gR7t",
  "key18": "61bh9Kujehe4Q2gpvprp92MUARjzanbVZRYPBuZMU5zaq36GSp5GZFuVTqAPdRqq2JfH76gzNPts3Gr8V1uo2ktG",
  "key19": "2DyGHSwnrfDk92tzFHBBP61fuWikTqkg45E6K3voD7hHVcriPd1KGjRhUgpV5Vjh9fGMCM3GrHqoV3eajphBL3og",
  "key20": "2MC5JQDv4dKH97iq9oHmzwCJpsbrhMCuTU1ch8T7qTVWhy5pSB5XCeYAHGP5QcMsMJesdYQQhSqBNsqVvbRR6piZ",
  "key21": "53NuGUHqa7yqaL9KYbSk1CMwNRXZtDEpzSFeDytzEKs5hAMy9jouP6oLGPo4ip3MyTUXN9pFWTKfA8YNML5RB4sj",
  "key22": "4K8K2SGV8N6cwxr6Kj14ZJWVGgoN9DTLzEwtH3AfpQYeQsFiMtheyot1NQjJ1LJoUYYrGF36saoijy4tw2Zmt6Jk",
  "key23": "9WukkJtB5audRBxxDNjwtbb7ba5R6Q9zbrik3deLX3sWRV1bX5AgodaVM23THMgkhhqU9MdUHeMwQc8pNzXqbFg",
  "key24": "5gCtj3pmqyMRp7m3Q7tqhNGSESYzHGVdg7uXxRUSSkJx53U1rg4hYeEkrzbNLH7TcTdDUcBj7E76BnXJaEjNwn1m",
  "key25": "5AhW2B1JMNjzCPXAgqKCQ5LQC7RpKSX1HiXRSWaf2Tb83eR7fAca5U5kokJ5tq34bZQsjqgdv88pJWiiswyzkZ7q",
  "key26": "2QXEM48Xh8eSg35rcLFieXeiKKNrMQqB6hJcFnsMwhyE3BXvte8Pvq5QDqqA2C8f8JNWAokACH66zY2e9UArWUPG",
  "key27": "5bfiegcbocrxXBVC6QQWLkD1bFEgoYucasarrCinY4sSzMnKPrik9TueueU1NbTJvxRszYErCrhe8bm7UTKdfmHG",
  "key28": "3cneVS54zmfRxgyyQThToAerabmQzc4R6ySk2tCsHmqifNSmT3bFikPFvVgNFUP7zAifgZD7ucm9VmnnXd9Hjabo",
  "key29": "44aUJee9LFucVT4tdvVHAFwicTmWoUy2CmTyaENQAeUHjaE83GVWJDTf3rhxmJZzyvpT43pZJFvx8JjYCT8dJkH5",
  "key30": "2JwdAXUDyD3xiXeAYnbxQBx8mzPdSLXHUaotzwZcKrd1y7uZTeJz729N3V5Ddi47qU9KDkFZHATQV9rZz9S6dYbJ",
  "key31": "M69jyjnuazPnWWpCwVPQUwLbFys3PSe8tkmH6X843dCr8owUAfRZurmtWZim8KXVe4GKacQmfS7BLHQWb8X4oYK",
  "key32": "d4jARioEHSht7h3NTk3hQFEfBooywMmnsSCVQX1giu54bPzMKxzPW2LfU33EFofeycj5EcaEASwCfrwBBWtcFZo",
  "key33": "5TBWtFsVA6H5f4cn1Ne2e7gCxjGw4tkL2t4yj2ZsZjDN5HqgpE9y1rAFCqafFBGf5cqNf3J81q4T9bDXYUeJUM31",
  "key34": "VWkARM9pCSdseS5riPBxyRr4yYWP1xjdkZsaUSv8HWdQ6891eXhoZLhm3FRgQNZFLEYCUKFPekNnTpM95ZnhpaC",
  "key35": "4EDvK1HTkL5o9eYaTNzYtqLRVkpfpo2HhddB49wUKBd9z2dbmp4CqjRmmYdPciV2hQZS5L22tYp6RTej3NFS1Max",
  "key36": "42AoU8kUm63ttER9nriBP2jW9JXYqA2wEsMi8jCfAW5riNfdAZr56wLi5iLvTjzANDRbGXYRjTvZxqs16KXeX1sx",
  "key37": "285rX9M1DuzKwTSnucVKDUT7KMZXx7Zi81XiHbpvPNUjii94748PKTnFosdStVHeXJBo2mj9HTTJb3iUKsQPZqJM",
  "key38": "2VgBce34jJU21P1gSpkkY22LjkGK8LxqiTgqwqXenX5qkrcKhchGr9MpvYqd5qidSS18uoF2XESsaU6vujLqdKhn",
  "key39": "3hEn98vr522FRHgiZEDGfsCYxG5i7Dru9HsVvNep3z2opziMiAKZ3WM63tPoqStGei5xqTyDuim2BvinTqNnzLFp",
  "key40": "3PyZDDUZyD6HSdgVS8FsiaTjGKmG1moVp8x4jHbDYivYT6BnkMeB3n14m78NZsg2gqgHo3h85xTa6oBKYQLXwh4V",
  "key41": "4r8caban9XqsrJgWUra9i5qkTTwgDmRzp1pdJrf1khred1Cido3M3FfJDfNee6E9WCFBSLRGdfscbYK6ytvAuiJT",
  "key42": "2j7UauknEuiKRSy1xqaU9vVNGqow2ftRYQRJi4Cmuiv6qTp7pPbXHJubJMNCoQbMvHcyrdxpU9KGHFqFJQCPw52w",
  "key43": "2wVkft6AF9rrfbV7myGhfKNZxtJuf9iSav28gYjejtRjWuiGjCPAWoEHXJJEi3XYarpR5tpmiywb8ZmLy9p2jCXN",
  "key44": "pZHGz9TKk9X9QC5TTXdbQMQ8d9oPdiWudA5h9SPByQR7QUAM8oTb7yo29r7wbHuD4GMCa9DC4U9uZk94T8EZxzC",
  "key45": "4y7dS9qWFtTyhnHHdakHwjkmdUyfQNHe4YtEr6SMERpnKM292bRSi5nM3EWGkbn4Xrnn8GTt6pkY77Wx7s5kZez",
  "key46": "oDJWN3X5eRnDJQa6qDohC8C8EXkdFmBsLUnDerBVc75xGYmfXfom9nBgoNJfmPifCRNLDVgiMKEWNm5kDq3GrLa",
  "key47": "4DSKYTe4Ut4dRQbHjmHp2YcaBth1vhpesB4iSKQxCLpaYuQiWPW4f5dvuMT2bDrAYhaKi2gfK1XTU4V593LRdyLP",
  "key48": "5AFXgLjXWDb873vvZkfk9dhJ4cSGtrRNMtzV6e4n6UXbyXMFkRmD6GG2UiCiJgZxHkm7gKzBdagyv3fQiXwZdEZv"
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
