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
    "5xDH3eeBqaMb4rnbdjRK6qu2r3fJpgfKC8LmmXT4Si5tVTsd4Wf2WdwerTnpDTxn7iTT6Y3fv11dxgKPhPsXjMKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UA2XW7TMncXhiyJZghGEV2WSmu9DUufJc36AvA5qKbCHG6XevBa9dBC2ojv6rhi28zEiAVVxzRdvLAmKjrZ4DFT",
  "key1": "2hi1p4q7JSxXeHrh6bs5CpWBVYhCJ3fYE6npktuyGRXeTYAvjKzevdYvNkpacN8oeTMbcUEkbsKdCFwGxw1qP5Qf",
  "key2": "4R96eRFutwLoiNvyG5nfPqSEK4uqo5d3ipyhdmeCHnSR83wUQcsXvkB9Uw9s8AuU21mzNauypJSn5hBeJS2N6trV",
  "key3": "rXoiUeNqR4N9HnB49Yj32kwY1fTHfJ7yiSebbv96aFt6VsEH446hF1pK5z4inVkkZhCyrYYx3QLkc2MH8adduBj",
  "key4": "5u5CsxUvHNzU6YnaabdTYYrLvfPVS3ctkJQfizJV6FKG9ytZ9mzWfhm5KEoLFVzA3Soc9TigcznwwohPCRCYfmxN",
  "key5": "5G7CYkgYy9PGqFtJC2qFjcHj54YDQWRJSGM3Xc5oLa18aRiT7EN8VQnJG36Xrj4U1YCz2QsWzyiLPspnYMKzLRZy",
  "key6": "53YwL84egY6FRUJUK1ip3QrUn2KjH2TT3NWxK4UPdNKJM2dAkp2kguar9YECaPf1HqZASW6FzAweDBxHBNRtFDLb",
  "key7": "4Ctgwdex4VTkx3kXyZpiG3t18WN6rxtwWKfzTCKVfzBY4b3wHkYa6jPoqC1Vt1kaT7MrjWKUm6a11s131qSLZkvQ",
  "key8": "4hNx9dVVvXz42HW6wcFH48nCHorSj2uJ6uCyuuM4FNNezt2tdGR5grWDRnYTDGcwSoRd9cJbg7zvWduP939ki44V",
  "key9": "24K6HNoHN51sjUuwJQjLti9MLzLwnj5qojntNC89S1Z2jKZ6AKWEF8vu847QDeZaWNafgbKmNMe1UB3RrrwDFYFp",
  "key10": "4jmfWqht5kQ2fSPyRRwACpsZdNhXX9oeZP6tZKGoKjfMCvMx6zajGwv57AXYGbjoYTa2XY2K1bNMkFraK2ayLSv4",
  "key11": "3v6afvZCLq2YjzRZtHGNMof5YR6emEVvXL4vwaZRHBY2uhG9dWfxA9Gw8gaGTtVkFMseBL2CwkGUh8pKpEF9fXY1",
  "key12": "3q72fzypEpW5iY4erQohep277Mw2CHrK2PVmL1ZMhGWpbjmt3BweXSNvt7fjkMyoefpD1sxkyWKBTeSTFHncACPS",
  "key13": "34HNFQUSdKBVAouTyVn7ftDazvAXKNJ3BHgZBRFS77FqmGEtuX3BpKrF1B3PcQ5jbaM3kw7sUoK5ZvUL9mZ3KfSh",
  "key14": "42AZh3J6cCPCWqBykvKAjLv4j5e8wNErcYfXggnakqAGA4Avm7HUfft9rR6NBGDtYm9C5FDrJjoewd9BVPHy8jn1",
  "key15": "hvPVQXAMU3hVvaaWFSDfiwoGg1wewFeCCdvEdg66bJ7XaVZFSCt1r6RLzwJx858MpaH5zsWnM39BCPRtacDqDAp",
  "key16": "4gSDt2mG7Q3gAjGtiT5tckiXbKrdg39W89dT6Kt1XCMkfC1yFvkQQw1bhbwpJ5wd1snj7VS9PsMUTMMK9MXAwHZV",
  "key17": "5T1dq3QsTfmj7MYYeNA3xhXmYbPaaLfFNtuYbkWsz7USAXoPcCHsMuJtuZCEaJMLRirQTBhQeLH8zVuYMD7e1UNy",
  "key18": "64EjKr4PVdbuo9h2t9hnpjk9ThiQjxeZkeUFqjG8LY2WuxCKb8HEXTT3Z22h9Jyw72EWnGwAfsEfpzSo6vHmHKk9",
  "key19": "457Cqo6N5hzCRvNCQhnRmH9SFUiHh5iJRxFf9JGz8qN84bhgtbmCMgbkb9RsA2M2mbUxHyuXLqKDf44HPD7MFwwQ",
  "key20": "2XdhxLv5YPg1fczSwxYyciM1ENCo2ptn62eQmm2HUc7P2k8nwXZRV2qpgKhFN9DhqZ8mobNyvjrAgHgfkdcjkTGA",
  "key21": "27scPqHUPprLuXmirct2uZUwHd7qcJp26H9RvKy16PfqntAcsHpZ2Zp9fZukZZjwU8HemvBn5aq2KHGaJqLetKwS",
  "key22": "4Po8G4nnXQWYJWDFUdQYhgkvggV3stmGCBkDARQVwSU8vrg4V5QXYgutgcK8KyK5aKf8HQD5pk7NpYybsWFjcvVi",
  "key23": "2ifii6kBAgcvigkEW7ztbaMNyjHG2Jopz41uXh5vxi19JrGTnt4kw9tN3edG4Nf5veZLboF84yERg5aAi6CY8qJP",
  "key24": "2ouYe1cvnb4SRJAwztWmwgCJhqUoNFz736ustdiXbjz4gznSAQPNJnpj6Tj4u2K6xQVuWtj3E75TJcHcVqCBAJF7",
  "key25": "bZKHLYJvPfcEHpjDht2RtMaDd8AjKo5Z21f9FV5mLsUpWfwYuiDekRP6Loq9fnrreYA2MCGSvcncUEMrbdtj3DF",
  "key26": "7YVWGLMzU1mwCS9sAoSq7dNhJWsG8YpWjuy1GfHfM65k3wLXaeVxpzDFdqRMMie9dTjR69mzn9dcVZJqou7Kbv7",
  "key27": "57WAHyQZWkHWrKAuqRdkTmPRFrNDQmE1eA7Xf8Aerax7x9ixZV8nzkfDH6w75JmptammxSXi2WnzXWp2rE8A4GPm",
  "key28": "22tviDN3rzGUEAxgooJVadfNVMf6u3uyXaoRazzuWnDMiMok8MEd1w2wkRVNFezhUzyayqvw2SkM9iMNTEc1fqtv",
  "key29": "2azmnLnEu9AUwg9HdQjiDpq9qcdPCPmpnhoP1JG66EFbJgh1gePDWkFxUaq7jmGP55cw5yTbmCuH2DqtYUNgvtWs",
  "key30": "2dBWxg6WnLix2E5xetsb7TcuKBQdC7qwziBiMuUeVWGAmBEXkYerkNP391dfTVo6AvAEmN5vRGXvB8UALrbFdjdT",
  "key31": "gxVGBAJPKkkGXnFod3d1VYQ9NRgVEshnH7pLUDho4F7hhdr1SsXHtJXvYmoN7ovQipx1bM2v78buFk1jGuFKs3w",
  "key32": "xpHzLyTrWjruH2J1Tkiiytmi5GVtP7k7F7JNdCf9xvK1zmJfDgeWLjyVLWeutCHmQEwP7LrpjFbdGPjpDfi5HcW",
  "key33": "61jsqKh2MERwu36LWNR2wyrQk61apr38bcF6WHpX729BxGu4DgtEK3yWXquF3VTeiizqcyVDuMLUPZbTd8bDkW2f",
  "key34": "ujPRqB6cAjoM4pUqwGptCRJ18vEuHsVX2wMtRiaWBg1dEYTgCrNxqG6XBdL85Ti9FxUp978PoBC4SrJ6oa13h9P",
  "key35": "5rssjBDeZvTdecxkBAxAXdJk35Kp1Mu1Xja6QFFyhcFsxJBQFKbhocppb3LvttQsVGbnUTxV3EtonzjWSLR2K1Ee",
  "key36": "3Av7rFzEbuW6HpseuKvpVPj16LCRbnGfUwGTizby5jnakU6SYdQYSmPRKk3KL88H4F7DGf4sDpKYmX92d3e4BqbM",
  "key37": "4ZBVQeYenGd6ccPz6HBsyCFqHavXeG61nheiTt5jvJoZ4VgY4xGTnVguhZfH3W9goS6i1BuuBJEW8BWJzpuMhZcU",
  "key38": "4eGSjfmHZED3kDon1skMM9mfb2Esu9GEt11Gsqiiwma1J81cksbYMBmJtyPVgadj3PaYt3e9dneKgWHtc3Nwwgzp",
  "key39": "2ZzQGDUWd8hu4oHwKis3KLQyST26RWv8fNMmMLsdAk3hacZkDHn1afreFSPuKFXqorE4jj5fp7T4ky6Gh2jQMysy",
  "key40": "5RutEL4vE1p2rkHKNhEpwEGTXjMDW5sdsxZ2a3joeaPfk5LANqjNSxVhH4mSyjX5A7iJxSJDqKW7kg5qLnYBk4Dt",
  "key41": "3AdaXLQ65uGkruAENRB76rxCc3wvPe6iyefL57CUhknU5buhHieASztDeQSvZP8miKae7Qbc4PoJ4hLTy2D9ogxU",
  "key42": "4m25kpRNB6JzvmyivcjjvvbxEdnpqQ82mPggdBFrwfqDQAoqYfdU4EQQP2eYmKM1F4Ve93VjGVHQqj6n1FVdaWwu",
  "key43": "5UWM5n7LKrgYMNgkDeYBGgJRnAWP8otSTf3iZsm3G7zEhMzmAe8PUpc2GEFThDfqrSjN6Lwvtq4A4uzjAWdag8zR",
  "key44": "27dA6kDybDfKFP49mZ4uwDWtxTFFvktpKz1m15sw6qc4MZMju2RBhpdginLwU2eRLbAyCNH43o9fLJfT1zQL2Cjj"
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
