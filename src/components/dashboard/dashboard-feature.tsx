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
    "5qhSSjFw2GNsNhcEbrUZQTved5wH6899yReZ6mVVXWAv31aqeDsZXj41GU2xLsXk8D7FnBYwTzNF9UM44gENW2ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55chhKQieUCUJzMZeqekibh8gAziusAp8Rf3YPxQJmC51VuuJU7zLBQQp2uDPWA8qTmz879eYCpi4BfvYfzvd7Bv",
  "key1": "5AfuB8qmV7XpFoNZo2RvB4gMqjmuG852LDs9ubciMaTDcSJ9AQW7Umj2L3ua3wfj5p4nHzUCorTjYRPRvEVyJDGQ",
  "key2": "3UcGqe7yYk5tEjnDMBnhM7YZsxcsfrr6WzW3f5LYYp3b7phGYJYy6vdRtdGs1zVemQe1d6VF3SqgSFu6Pe54bDPB",
  "key3": "5cXeQQKT3oLFJyNAZXNtJoUepK8LygzdAMV6ERqd7hrGtCPDpRoVSnaWCxk4Lp5MJxrxyn8oNqeduWcKcbExe5QS",
  "key4": "45GZQDn8vah49U15dzpyKfCGvXRkrg4XpFmTyCfsHEgSdeoJvXyDGpkUj5JMdge6YtMRCZMHotug73Uhrk41XPfP",
  "key5": "3i8QNCu2T85Uj7nv7bNdLM98n7phtmuMTzPoq3M6DfkKsoQCU3PmBP958pGSCpACmT7b4bvG1KhF9SZ4BRVJ3LKV",
  "key6": "5ETky56TVMSyKpZzKvzdcRmfvRZvAKkCiKDoeEjsMcYjYhtpxrBQ7z4bGEzuDPMXPuD84MqezdzP8uUBVJj5WpMP",
  "key7": "5psMNn4CsJMP5fy6jEfvQKDYvkx6wEH8daH2DTFEdsTNRmTX7v1JCzDpLB9YhaFgKx48QReZH9Y2HgMX7nuRZi18",
  "key8": "5zKcVBjWwmiaC3s6K3KpxGwTpS385ZA65f3VL6UB9SPDQ2Apdz21f6hEqxg1oeeJpaHCtjnSuuJXzKZYsky2vk7J",
  "key9": "2mHy5NtrRNQfCM3Pk3ZNB91d6quwcdp3YRRUSEEpu6jHtGnQZhvLmKZrXZzRwrifHVRyoVyLxY5RwHVYsGamzpiZ",
  "key10": "5CYpFaVgZvAseLtxubqmSxdQQnJRCPu3JNqv6uiaXu6ByvuV7jPs3YQXZztzay14AiDaeCSepKLQRjGu7ZHHusVo",
  "key11": "3J1asoXyBBiqsrViwWdsg9a1Cq2rcpzsAE1rHHpSMeWi3bwMgupfMurBu91fXXqJVQmt6h4SjMmfCPFY4e4cFrjn",
  "key12": "2qvzTTxond8dtPKqg31a3PqMMmjD2nEsBcvWLV9b3FneZ8Bgaih3f6gDyu1HdtLht3QRvstEUgFG5MZ5BHQWkFha",
  "key13": "51wRPZE2fxS9CkMeoiCb4BmkDpnAujbJBgw4VGg1bgC57ERn31hm2viHWs1tsAwS61io8nNBeh3kxdWK43QQ1XCR",
  "key14": "2tU6CMPLNwnSvNEhH1yruANaaTLPciRbLWm4jC3oiWAUo6aV3mUD91Jk1PgtTtJs3f15ffyzoTqHGk3mPM6P9nUE",
  "key15": "JKbLCqzMcH55UnREtLzBUJGVDiTrzjdERkvT8YKAx1BJ5XDLFqAmFR6QBq5okBpPVaFpww9RwjVJxqAsuTAaVYW",
  "key16": "4paKdqJmhD59aNWUaHmVENYywhsJfS28RAeSfxaR5Gs5JaCNyx2RovWkYa1fSUTJzMXhijbgxHnU3jbBi77vbkcW",
  "key17": "3tvwUKXwHEvtFzaKfB1REw3pk4iZqtXz6YXtDbRtzLeUp7BtKJkqqsM7GLxXhMbZBPZw5YvunJbYZ3hHCA5nFS6P",
  "key18": "3f4XP7eZi7Tep4qtpCZetcWp58GU5wSHfakSdk8h67RDJJTJBzYzVcLbGNob64KVj3PvUAGeuQSadn5N7VTUG32F",
  "key19": "CL4zoTf8UvfiWVAEisaTkXY3cGzewKJEpYJBDGToKRGZwFMk5qEadQ76tMAqZvya6YrzYLHzJPbhqs5iQYPY3pM",
  "key20": "2JdTFQ2JSkhZHLWwzLuqpg8xmwDGb9aJM95hfvBceW67tbPtKAKHqTxxkJGG2iABBoZzPHCS45i9A6sLcoRcBhT7",
  "key21": "4rQjsTmfT3kiJWh61UK8hkUGUnw7cCCBEDLNWTYNSooYZy4W3vDgzvGSMvTqbHHMnC7bQnHvFvVZN9yEjoz4aFkG",
  "key22": "43nFdsBhZ94veVuvWtVnZczCYfXB2m32tgaRDMRWiCrsSUXXJ84zqmWC7hcQvgox2LycnRihm2yKMmve6Hsz2VZj",
  "key23": "4guS7VAePGB2d7A6WsxqNUE4FmLYWz9cxAuJ5GXegSNnDAKq2daJTESdzDKAzuWzMGu8TkxfDVdnsiCJFN7xhjL5",
  "key24": "33oushNueVNTx3dBvS1vxzxd4h7Ds7mNM7a9WPzEtTe6HPpbSanDn17e25eDAyaLwcwjTZY4xstFyDWG2dSsGGJ9",
  "key25": "3KP3xFuziDJYeUHegLa14Xn9mK1k8tHo7rkHbUma3TQ4yqcQR5WoMSpdnwmpN9Q5ZRyY5A3MDKhuigjy4qNeuTt2",
  "key26": "AcMR87EZAoDCiWyGWTN2it64yHGrAAdbbPjd8AuRy1XMNE9oRsB9iP1ppukXZ4hv989iEDjrJonfZZCtRrCvcCN",
  "key27": "DCcqYajHpW8GMpDK7VVt5bf5TwRAijvVjGk3Eueuq9qy1fNHPRAgraEsTryfxrCtC1bYbPwKz9SNS55S9zEnMvW",
  "key28": "24f3zPrMF6Pmow2oTbgmXTgfsGi1mrJeg4TdaT6DnaKxj1UqM33y3UsiRNQmMfLjtgUps2HnzuePpYaTWHHwToaw",
  "key29": "2QFyQzYwM6Z8vKWLd56eBd3vRk9Z6GjENkgCzoMrgovwNKsdJJkJ1c23HXRxAT5WnmYNouVXWV4eLXx6NkwRDfhS",
  "key30": "2bqFk1g5453YWTSPEfjohXH2azekMa7Ddo3pdsQm4yurQ9X57Xjgbp7bh6tnGFEPZKKj2HQhB8BDkNJi5SM1GfW4",
  "key31": "2KNeGHL6jM6RuYdW4UbUMCHsAHyoZeHDT6ekKkFeraGbKLSkjHK9T7S98ZKHM23tw2grfq2Nz5LWR6i7Rp1fcxVz",
  "key32": "3LxbgyAYscS7ECFKiCViWFpPTevynGGffBmHydsbryNok1ryGqJ9QUFwY8bM54KKJqv5FkBZXakryUN2zBFG4NWU",
  "key33": "5HwmS7qSuBtBNxWXWGr5Z3G5D7VhR8eZpLf1WcSzDswJjEZUq1awDNw8cavVbBWqjZ61HHPJJxMbWs5AMfbA5fkj",
  "key34": "nVJR3SzfzHaBxHZvHcMU8nfBZ3qDuqcCYuxH8eEGsWfMX6Cdk4DpXb22aCzoLqt8Vs5zxBudYs9u7JoBQ4MqkiL",
  "key35": "58stWCkqBh3k3wcDngxqTEUZa6LQgZFY57YChdMJm19h6rWhZFdnZfyWrwXDXcfBLJLceh8PsFpp37Hz4y3hWHZJ",
  "key36": "2ePjHnYbZvSFbdwqLqFBcfrpCGBcmqXqA69VgooiCwbeH28UrFGNQuJQxbZSmDQ39ojry11dXDER3SjrezTRkugf",
  "key37": "5RAXNHrCmHMczGDnTDBgFoxBbRotZXvE1YC4aVkgfcgCe1r3RF1Yw1zWS9GUtuRKeWabo3LzHvaYwgzSyB52qDD1",
  "key38": "4eJZbMSj1aDAnArFhMJx9cGmdVPVt6v4FP1EENRWN7jwqXtrWK5esVwX83RmSc7kcndtGpmgRiKDtHWuFHH32DuP",
  "key39": "2M1xmPgoFs8pQH4g8N4GvsXjuu4ow2BD5QBhPvr2nVZjPwGGvUFxuSwnwfHhQ1BW5arpGPWhC426RyxuX4NovA2w",
  "key40": "raAUd1NUU2Awn6pZB12BwXYDsV9zHY3LB8QhW7KioMbgG6uMcYkgRxpwFcZhcFCDeUwB58g66u8Ha7rxuPudBwJ",
  "key41": "4R8SUPiUzeSeNyVenCRXWsVGLdk1qjgcAwhig2vj47cMGkneZvmstNnZj1wHeT82G8okLjJtUEGqw4Q8CpU7Hnec",
  "key42": "7RTR7E28xEgip5iSCuvcXJBkpCWH6xy5qNZUxJLFXi1hPFNa83PLJvcHVjgKrvTXpYW6ScCPB7EtKXLn1ceaMUT",
  "key43": "5hriCGZ5vKdm7okUxACR76f17eXYipDLQJhcE4yhu2GHZijxGPtvah3JuzGHaVFvUSsAGzNES9PxPmvPghJK6VFP"
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
