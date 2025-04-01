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
    "52N6jar4i1WxaU8juHLfmQHGcBCUWkTQKaJgK9wuoxGxpRdk4gfGXraCFzEbjkfkiMk95Gb3Kx2NxVn7EsR6qMhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ogoC1TS9tvpfmv6ezP4YWiG1u1zG1Z6uHR5RhvK96Wq3V5tkxPAHCpPtmnNRnkg7okmJbdgESyiFCRW2eJyAakg",
  "key1": "5exxA4dFoG4qfYMPgjMsH8kDkDew45xYrNBMVuMtsV6P6RxVsKFkWhQQQMFf5kKKDhSKM6R5rqRhpwg8Kmv9U1YR",
  "key2": "2A4cs8neJeHrhXtziBmuEajk47HHWwuD4K7J9vQhU7pSH1MguEWZu3NK3hyru4gNaqCrDTFPN9KDGdCytWnPBvPQ",
  "key3": "2CmAhh6G6ETiDZXaMSP3Av25uHjf6xDyqdbsVXDMQdg6TKJrywrm3sU16EJERkN2EecgsYrMyZByAfcmtBcXjjym",
  "key4": "2f7US4Yfcbh47gzNyvSGsgCrkk1XRK7CUsjCqEM2RBU3nZo6jjcZkP9qyXkCGqBj7qYKTauW3MXeJmpH4RkqhhFV",
  "key5": "QgUPWf3QCNh3L35hGSj7F3L1wvT6UhnvYD26jZQdcobcsz8Tmxayfx63TZsEQypixqb3v4i8WeCZ8ZZB4a8kAGe",
  "key6": "4pMkLUu9NGhXNJ79HMdZr9FGoNeCuHjdinMzLaCYBJLyK1cJTySeBxhq1AwrEnChcpFqZ3tBt59wENSRwLvnL2qr",
  "key7": "4xrvNhtvPPUSVVZetnzSauQdG4wLpxmGbhd8kYZGQDmoynKGwPbrCQx9dzfUQb19M3NR9mLhA4AzFfmMsYzmzwNT",
  "key8": "3V2pqNFbBxs9XozTSEd5vSuGru18dWJ9iL6iTqgvBtaaWLmTTSZEDyDbL26z3RBvhkChGFQgDk1K7g6z5jeiMSkD",
  "key9": "5yLTj4nvNUtWEsywnb8J47i14CqzL6h8Sv9m7kRYCQiRUtLkLrVH9VjEjaLNkPsMoseuYPW9UYswEXgkLqaewzXD",
  "key10": "3zP8nfHsji8cTQw1qbSBSg1GJW7CzcXXokg3CktSqxRRy9hf1Z8rQY8ybXbj5tXVodFjsjXxKdb9q8AaN5jhEu46",
  "key11": "vsjvQanzNYXA5RfXXQBAJCA8NWbPuYvz1JehB835jajmGHTGH6w4RQxmQ3hLX38D9wCYSCMBm8oPzBpu5obfa6T",
  "key12": "54xvTKMbdZBs8ihRa5mZ1rp1L62oyLj3Z4KR984nuHTbivyiVVFAuazsLkppY1CS1Zped9nRZmKwRZH7JZgRcRAx",
  "key13": "3wpFMLZLCydY4RTH8XLnaQW5xJsVKnGL1e8vfrFyXGAidRGDGYcVPGjYvDpTBEYsyzaJynJkvGwKYqx2DTwtgDD",
  "key14": "WTr5DYDfKuZ9viPgeyHk5YxDBvHeEMqg2Q3tNSpcwecacCXHWckNdkzMGboYVnNNhEYtnnJobTxvKc9SEBA78os",
  "key15": "54dNSGqgzEpj4NyPyCEDZu54Ld3TPPaDL8iuuUd8DirpfjyguZUecuBvCkeyNsML7nQDqM2aofBYmuxStEXH2QnS",
  "key16": "5TNWpe93otk1t9U5BerANea8aPWUvGSxPr3619mbMMPYpez4bGhG9c6iFkeZaySaviWiNQUxCbTtHnypBjPYjzFx",
  "key17": "sN9tc4wMgn5t3186KorPB1um9dqtGj8Htm9oNkun1fcf5FY9PS6ovFsPvfTPVJehwNFpyUoimmbBMMydZ2Pg3xy",
  "key18": "2VhAksCFMbHPkvsh1aLPfpnhiwFXNZRZqR6H68rdrkzWnkpUVihQRBcL97dgcXxTuwyKZU5RrmTARMv1EbAma8kU",
  "key19": "2X4bmNPrdWMux65Nh75Xni99DeykNkgSDDMyRMPTUUKM8TMLCpvb1F56hGCeigyzXRnaj7gKHLyiKqQVHwAX7fpX",
  "key20": "zxvTtHfc8DBm56ak2gnBn1R4nwmv4e4PKhocwcDprD7aPNj7krxWr4BpyXzx3NgRiKKerXGuz1fCgVL23ACW9eh",
  "key21": "Hhnw7GSM4YHdVTXVU5CcJ4kEeYjwhVofEf5uEQDUfHqUrGnFBoWNfqdLsTvWWCj6r3WhmtELxkTFmBir12Pj7Th",
  "key22": "BZzrQQUZCVYW6csWbg8pwYyJCPm5sqdo1cyfTEUdpuMDpMdiKryzSeNk1wUPrJzqkfRDN3De7phiTezXc1iBTAs",
  "key23": "5pD5cKJfcGMpS7k5rk3GioCUjYJzHheyWqNatDYQuy948rneSecn6UEhJoMKK5yYvyQQxYQhvzzCpQ7wm4Xw1RJz",
  "key24": "C3RRoVDWYFqDuSj8ekAjF6AMLG2kSZbeKXo1DvvpsU9inYFfQFuWLDvU2ukH1zW5SPGxm4PscgttQb4NKQZ1SGW",
  "key25": "3iXMxNhytstHWuhgHTno5SkcDXA5djZpnNhCgqDSmGAmPtREXM2WB9WUSTeDyR89uLKWANMcEaDGWDGRMP5SxVbq",
  "key26": "21idLPxiwCNCwRz8UzYRP7JW8w4jWHfywPLWYNgTCJxs4APNwqATZrBJDRCn6qegQRvWi6X7RrZUDS8GioyeNbGZ",
  "key27": "4UYZ5d2ZNVM6PfX4eXhEbqUvuwHNEp7F2BrAYTdqBmEezgsad8TXYKKYr9KRyTRm2yLhY8Y1W7ghUmmR1D5Jmyvx",
  "key28": "3bQT8ehC1XHa9EcXaJRf8mU3hiSiJSsh7sXvymuNEWGbRdRrCkFcFz1LiHrDEXZJPfhVweK4pLQtAP8XCi3kb3GN",
  "key29": "4XCNWazX9XxzCdjNJk5RToo4WoUJLA9KkjG2fUm4bPSrAJMbMRowMSb1iyzXSGWgtUridxHnn7ffATJySH7JP36T",
  "key30": "qN6VpPTtp3eUrKwVJsTQudemzLkHYwTBr8X9JTbSwQUK7LCRkMtZC6swfhrQrLN7PF9Uh8MLNj71PBv3qRssAxX",
  "key31": "cUMKikmMxCRUoLpFo3eidELMa87sPXnnTBHgZm1i4B6WPP4TqTvxwPgYd2MZ7uuAdVgH5tMqa9GTCqgx7whLmDW",
  "key32": "5fxSDSRKRKPhHGofFxKc9TA4covWSzBM7UhWwAeXqsssUxM2fohvAKQWqXqP1jgAX7vquf9QesVFMS8gJ58KDPhP",
  "key33": "D46whTRJszYGu5ouMCeQnnxsQWZkgDGA6KJDMGss48D12NEiTg7HX5JhjeaGv2YRb7tLKmva7afQNT4YpyG1Z4W",
  "key34": "3M2N7HA8TdkehYDhcHYszw8rmtEEbv8KrMCY3LRVHFNazsyTr9SiwuG3AnEahUrdh1vB3w6T13qyF3QhTuB5HBef",
  "key35": "5vhzEs4omLx5v26jpeykkbzjZVzZU9im6uJ7Cnqo1SpEWmPKDRLaSgqvaauXnyw4dYjGeAcSbzF27pYcwzQftY12",
  "key36": "2xwwNdhFu98GsiL6cAMHxBBKzLuikVu88Nv9q7jfNdJBvFyZwojVvBM9ttNmgW6v4HFTWzBGp6QzGfepogTZ7GZv",
  "key37": "2xjfxQDJ11GffGDDkhGkiZ1Q95LqNUiFnhafgj2UJLpMjvZikvx5S1MnFKQy7B1zHrEF3q2oEwCb8tiFoVU1Xzqt",
  "key38": "3VtG2BQ2wR61VS9w4uGYJP4gsPPHdNFTqwm49CtwshCCJcMeCKcpupScBkZbd4rK8umUqREPUtBJJZ9QQEgNRVT8",
  "key39": "VNx1uegzWH3pPBVt4gsjA2QaiBjx9ijdrSb3fPh4GHccK5MKPaPSMQRQXSqrsBpmrmHydxnUiyPGw94o3RKjXAG",
  "key40": "2dow4eUac6p4uR75RYXGCVUkzVQwX1HsheWF8j1cJsiMGpdBTCzgDppyXKpjvedEvChGgNLHhZmppDjyvmUrE1y7",
  "key41": "5FYmc9eJVXE6sqVcdR5PdncSdeKAQU9P52DtdZDQHmGhoriEC2msCMrF8X1XC8p97J4h67T5amYRRkm4reb5m5Tr",
  "key42": "TQj93ozyN9DEPjczX3tNUoKSUeb2rj9F6nudcvKHq1ERoTjaQ7ZCJSRv9xzMQ1QBTwsUtotoF167Pd5WUdxnfyY"
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
