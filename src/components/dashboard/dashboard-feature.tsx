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
    "3T2aCtFphVPeZNTjsLix7wK8sEa88TPoEEzNuWfw1RReTA3XYC7utGg5EEY2eHvULNAeva7UGQ6nqSVU9LPwFSZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WVhYo3A7uAhc7H7WM5cQQVWCXWRssVmm1YQ5vBX7Vyn8oDfRpn1Xm884XTHkHbrsKjT2yHyhcAJJrLntm1SoyBz",
  "key1": "hcScpcsauEjv2h8vmH6xVABZtEm5GPzk4cARRrcP38g3ueTcy1J3c5iDyU91H8PC4UdZSWRaFETFPXr3HZxg4hB",
  "key2": "2nvcf3moA2BxfCLmLRCkCttAxvjkoF8A9GzNE4NYUg1KjvasVeNxD5cDareLZvGw59U3heuzhaejDtNc2haYX8tx",
  "key3": "3ZyAJ4qfp5cT7NKjtLjYN7ByhnbPYmq5ywxuskW9YWf6k1qdQempKUDETfSaznPZ2f8rSCphYpU8qvATtbuLxHbS",
  "key4": "3Nofcescdv4ftuvCSssrHe88qNgDFdKcoDSYB8EgxaPmWTQQbBZaM7XAqr5Zw8uot4H2MJg3zxD7VTzuNw7RQsm4",
  "key5": "5hLrZcsyyEeGQGv5T5bcawBBb4f2MMdjd8uPwyt6SZWpmuak5J8xRhe1M4LPzLW4DGF9AQSZV5Y4YtprPuedwqY8",
  "key6": "5jk13nMXgxRZxV9mA5mb2FduTp9VJGGc4Tsc9Nd22S7CwpU8dVC8DUuzKvbjjncsPhri2NDptFBCqFqFzEpvAnY7",
  "key7": "crfnBEHNmtmgT24X9um1jPDVJoBonZ3ppzkHi1Y4g2drus3CmyrxfSpVkSasfiqCCiB2QB1ucU3PQ8caHhyJsQV",
  "key8": "3mrXeYfBEkEmpL6ngUwCknhutGu3oJEP66g1dyZT8th1yw4qGqGhFdLYmcau1J2RDRBtKEziZvLMX1d2BveVPZhs",
  "key9": "sYz3WkF26a8pPKswCDLUDjv5W6v7qyDdsD2QB9PvNW5Zxg1KmqRaaaJHQFKAgi2stxxHWELqo8suMjsMzu5uMJy",
  "key10": "3sdnW2yLh1kfMxWJuz6apX4PVqnMRYWKN5SZUv5VsndJwx9Wq1pYUqEMk7zKzSY8z3N98r43GUaPKAFfMHS1ahaK",
  "key11": "3YHrJJk5L8mv2ddqcoPWR8FCb54ww9GKqnqhraGowoM4oes6Qi64PseXNu8eYeJwt4EQYCsEdKzhQ2KUxhYjnUKZ",
  "key12": "2knPw4XjqjjQozjv3PBpjz9MtUXegELy3x8rcyvNrbLw9mkvRxcRDGzB3YNLgYNcimh3qiufUU3fZv3sx9T2sMzR",
  "key13": "3qeb5opfbAAfWDAM2XqLFTi35r4P6bkyuSUBYpkXmUhK5NZJ2URuUS8iJzGKpigUbwdoRrBLwUiZqDvFCJxspHZ8",
  "key14": "5Kn5gDnPgsUhie2ESu7zHiZDHzs8XcTJUQojWqBrgx1KAFtTv3pgG75GRQZH7WfoCpLTTpC4SFSKpmjWXCqonKy4",
  "key15": "ziVy8gnosnaCQrrfXyGETShmf799z4TtMnLjQwEht6rr9nP1E6fg6mM4BWTVkMGRQZR73i7tB5WiGYSu8BRWL7Y",
  "key16": "3m8f2Tfmkqc8ytSyqMaF8zpoN1kheiBPbVrxza8xaCiWrtiXgsebhEK9hQUktbBGU8BuYrJJoBLPbofDipThJvSN",
  "key17": "2xyGRaxw5oZgBs83yFa1gBXmhBed4XikeMtCzroWSz4nHPf72jvtoa35Zm9gx7dGCC9tUKFje8KP4gA47MPjfDzt",
  "key18": "NmxcHXcznx4o2YozqypMSbgzHxEp16UzsTf6ZuiwwSNumzbDnk3gxEri5uNGjAeJWSJV7m1pperTLUUCfWLaV8V",
  "key19": "5ZjipNausYQDFUUGjx9Vf32MPSBC3FqEdpFCB6Kty4BtkvDafP691xW1sAeEHMaBP8jNkYbKTS6eiWeS8yoHLyhm",
  "key20": "2MmASCR3fbSbDo14kZpZHQtuB3JAKt5nz42yKqptHLCLTjd9ToiUM6m1evRf3kRcPzdZnAS178xc2HEeCcvMoTUg",
  "key21": "4o212P5guooSWrGX6SNoWbAP3k3uK4xmsAoTvP1xFbDXTP3fnmNbjVmSNNmBuH27tXeGs9CEjBQdJL2U66iuC2fe",
  "key22": "2VJCWpDfoeLQVwCz7AQLj6ECAcoaqYjcdiWFaYDCnt6uTMzzSEE8LVaz3b9oqaEN9uKz3ywK8BRQy66Epyk36Aca",
  "key23": "5f4Esv1cH3dXppn76VTYui3Vpx7pkAWpuDZ8rgxn4PYNzn4T8uD4Y3LarNuQ3njpxrtkRyETrPmsZzkm5mwJeFZN",
  "key24": "3EHB5BZhWxUhY8SFKXq2ZUpgTrsErqLjnF6fR9uKPw7BtR1NhgyrgGFGPnQtnZVUht6uQWCZhjEJDn9oNCjH7ePj",
  "key25": "2NwDHv3qFZnr6zVsdr1wJ8mProx1VNC3GU4F717LWD9VuLU7YSTisU2SAaJknbErJPhyMmjzg5RkCeun4MQfDqv3",
  "key26": "5xpBUdrA3X95xT7bTtrUk1cxP2Fd8CPjHLLJEw8nFjePQtBpSLqh8E3pX7YT8kwnWMEgBdfFdvyVvJyi6BsMzBbE",
  "key27": "49WaVxUi4pHqdq5hMFGJxPQXUZcEMCgpi6EWME2bpK7U9BdCbHcJuXECkT5QuneK9Q9tLJabpB3ASD84GgzbJeeG",
  "key28": "5o7Ahm1e8bcHe5spJT9wwCDc4Q8wc3TMQNemFZ35FHYn5gZMNGaAdVQ3oAvCkaChDffs1iuNVN7NTmhhPBXkgQXh",
  "key29": "2UX7EVMUTj6Si6aJ6KzbKTrjcomLfMDrWfcjZvJQ6GzaSoCt9HdN45T7CGrVLHeSPNUGTbMuUwntePZ2FZYajcdj",
  "key30": "cTrgGeR5yFoWJdoAutpyHVXpRAcz68bTuWV78Gw6LkQoQfWkrM9VFV1tjfSHtjoyHyCj4iTRKESzY2y52wzbSpX",
  "key31": "67kcksuVf13MiexGAe71PFa8axuLziF3eAbZiKkDmU7RFeyLtXJiMiQreE5GYPTY9iQw9yznEi3D3mFVVbRUC3GW",
  "key32": "4mn7Yocg3VAuJ3rHttf7oLL1xN2XxgJrA6TrBZq4tKRGFA1uw4c8596qXf2zfyq5BJJXq4f1vizLswgwFvZei8qL",
  "key33": "4Rbpad162r2arcSL6ZoYyc2H8i4KLgcg8ysjBYmD7re8whbtzHyqf7QDKa62G6Xp8sPQxVGvECic1BMFkjyb6dx",
  "key34": "4ZPV5NBJnzFi7Qbvw4dwDeAvxAnKNtNProHDLonyvz78BemYF6em9K9zFG6YfBpdb5V7ZQWx5VzCWu6Ba7ssXJt5",
  "key35": "4enpmUURTzv2KbHBkVtwQWgP8zvQmX5DswFEPzTDLPKNRzBi1ooxnTL2GKzYN5ooUiAvYjx5iXmYPPFzmHFPFaUZ",
  "key36": "4NXx7hzdj45tfWaBxbp5N1dao2TqEci9P2m3ftj2Q6yFdZNfMSKGJbqyTikDU2v4KpdcnSQMfjt6XRz48xHSEQG9",
  "key37": "5F6wgwBgsinauYxGXQfkDQXppnJez8QmhiQYk4nxScAgrHskWDEFb8Rbui1bBrnxTK2ewQ9cdZB5yVs9aHAk5V6P",
  "key38": "4uuJEyni3FVSRs7ugEEo14tV8GLPp1NV6nGRY7AWGm2bd5PDN467vjhZ927pNi26X2oawHcjnrT5mxHUJP85uFvC",
  "key39": "5jSnPsK5WuPfceq2XrKMQ4gjwbK2b4GFvWD22q2pzJyGsg4uhirUZdKJcasiJtWJ2LkRvJb25CRRZxUuMuNVujG3",
  "key40": "5xeXdVeddytWYyP3qH3vxuNoQ8xYJBxYi55UHyVzgy6gKd5NyrLPixM5f2nzL8SWjUu12BZ5WxbtT1vWp8Y14Ssz",
  "key41": "4t2qpBLapgznVLkUDH6d5H45oJHzgaBrXmMSt7jtsrd3fjChej5vxjryCt4uvKbb6BXUzA9mgijzyRVjrczgHu7w",
  "key42": "4aTPRkGjxpysn1ofTeehgGntgK52BaHNMx8BMt9kBnp5rAVEvjLZUvQgqeKX6eF9qCKmLrUJ8KxwpmAqCTVPBRqp",
  "key43": "5FkCUozJrjUWC95wjGdFCJ92XdaWKrJvnR2TU1a7NfUbFQ1fPWNcecrEnE3b7F5eUSyNUBMbtdY1DZGPfxfZVoAG",
  "key44": "y8LZU2dNedwvLVBnfR6uph3ASCzyphhUmZKo9qud2yoADcy38GbhvTis4ub3gTHoFarrtJ6y71ULqbvGmBLuYem",
  "key45": "pTW3gsF3L8YSCnRQSfziJ1QdUt4UFs9KW9ErgdCpjteTbPNnazFz3zd56KtFNep94oqsEbJe1WF6LXNWa6Gbf8d",
  "key46": "568dtbAeXqpKw9qkizGvcT9hkRUqP91dY3AY9pGJQvYrNWsa2mWx96ka7AEohCEKc48QM2Qz11ikBurAGvkvSW22",
  "key47": "2Pc8FExfoN5CoveYwrHbUwH8CVHPP8FKhKr4bzAatH7HieKdu2GYXnmqAKm9imuTHpqz2vQ7AbRkZBHTtwt7Tpjy"
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
