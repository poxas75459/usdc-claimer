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
    "2tqo6ofC3VJeX44TcqwSsAERdMRdTVDfYimiiyghpeSoKELzwUUTu2dJrHa5UHErnT86uGBTQFoFRBkYJeb37w47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jSp8rBUp844rQB1mmrrpn7bp5YQh19ixukW656XekHE7Xki9J1K3gBWvGvaa6oMP719ZTEwqt5qDmJTcSRJus9i",
  "key1": "TNAPQt8To62r1bAU3qMKYBa8pXXQriVwMsuUj4csin87msQv78L7Tc93Zkf5qwttggHibtPotwhByvSkoZPvLbP",
  "key2": "23fyocJcPA3htuwec1FWmeAgco2KV6hWh3ySeSYsgysPazJjUZuYNeWHfbycyCTaPnvxnhm1VXZRabQTVD6Wniis",
  "key3": "4hcoaM27eq1UsLKnHEhLYP4Gr6q9HhYQhrrdp1XRyq6ePVdro9NoRC9ZWzkh7T2dsetioDN9Ac25NezYmj2jnE1z",
  "key4": "66km8BrxiXdaNXRbmDRJLrwwheqqhoXheQGwzfBJy5AgckwPoTR8mPKmj4svZx4NWtg9TVF9NMerZAJNXmkKTHdB",
  "key5": "5pnbLSyPDhhKqBFmmsn7WcWhSuoxv6ZcojrkKVEyzTJj8JYRxShQgY7FEisnF4YLivFd5NdU9iX9GWbhihrALQGz",
  "key6": "2oKkJGmrkURSvUMKpqJzB1Guu7WUene1vTfZRjZt1T9ifzdZ2Twu4x1odNtQih4EAGc2YAcGbdZoddNjVsY6PsNR",
  "key7": "hpE5iPWCr1gLUkr6frw3MP3JUiYaRLvcMsn7Af5gsUeVkJk4eByLfyzNAtuJG4yRTYs3Cn6jzmwxEfn86Smt264",
  "key8": "2fPfAdmn3NXs9TVwv2uT7c1XrEYmycUyYZaQ46Ajw6g8jBqxS1vk2pBmHvXHihsrPfXpJ96cnE7N3yW8y2bxf5Ks",
  "key9": "2jLCm2qcC5cMSctQXzmyjGemRErdoN5ttR7qwagSTQJgbPKksot5kdhoywUCGyb8MgSuLqfYGG7nbPdo9AWBm2Ph",
  "key10": "gsmns4UQ9J15fFN1dzkyvte8GaQqDyNs26nUjePNz4eJVNixYLFhZszzPmUND4VZx4xcRdTQBYrJMBNsGCcyB31",
  "key11": "KpWH1VMtYqe5bw6pdqaKNkQZpHvRi2ZKWZHHv7hSAu8bmLEw5D6TXay68reyMYtjYrj9HESJfwLKqcHiuEGeSwu",
  "key12": "b4X7GhLBfBax8mXP7DoSJ4zELFr5jwbP3DpJeNBsZhHp5R7t7bYq3G5AJbm5qc4RGkDRrU5sUHwJQ1C86Vd8J4u",
  "key13": "4YLkAUjtN8ydrLo6d7qupJNTJsd2znUWikTAUTPZVWT1L9g4w3zvA3Z1AshKeDNK4LAVr7c1ofiV33fUyyfQ5Qti",
  "key14": "3v6zaiDxKesaQBGMJ5sA2Gam7BFYLfF8xKYeQWbF7dU1y5oQ6ypWkPvzv5xPp3yLxWVUmu5niE492HFD2SMmihyd",
  "key15": "jMDVb8QjezMKnZB11GBUZbSzr6xG5owgUr49RYqwtySagE87WjfkDGGvBnFmaYCfT9ujpGb83e5cLSQYqjGLZsH",
  "key16": "duCZ4iJpmoFsJ3pKF2yRT89UbAet1WJkFjMW5dbWqnwWaBUyKegYZScahEViZMzQXPXuFLwkHpu4TW9dwqfTAng",
  "key17": "QAhk7vrk716Ux58u4EEgvZ7PAzEF5ARirqko72zZKpAWiRWu5LRu2DDCA3SDGeUALnLKufFy6oBvqC5VSSK8t8w",
  "key18": "T8ARJioiwkq7fXbBvpRYTePsaHcCt6a6aYiASgoNfzobUZuN3nrvhsGzoBN75zKkKajwErRAtivLjaiJyzSgVjc",
  "key19": "2LLhKwe6GbrBqgeynGhgr1XYUorvsVrkb39phRD8EFpof8pCtrCKyBXpKYF2cauzk5w6PkEhMahpc5TYAghDYACd",
  "key20": "3US4ZQ2tLv2vVxxXsS1b9skhuMdbvQb6VDDMJ9S1C8reVxNXmuS63vATKYxX1RnU73Gw7MnkWoSGRFUfq1U7j9zy",
  "key21": "3g9qVq9ANVj22pXizGAgn7P8C9dnNvYapjifRRs1C6SjDH3D9NZjqZqiLfzz3Gw7kLzdhkge5MBhqmjhAgLZPjAJ",
  "key22": "2sNHZbRRqXBA52qb6BzawrfNi4q74aWPZDX8yyP3gxbAW9Ds2BSBbRL7yErYQw7wTjVnqKUkNF5nCa16uxn7hmkA",
  "key23": "5u4H4KCJAX1nhur2zoyRz3sdayqNc1tMbVHz7mcvHUAZyWAieUjwvo65pFNS9RhUS8m7Nznkxw4YDa7hLR7GRWuj",
  "key24": "2emikJVXt5WMpSYcJFwPJFHcZLNgUPtUvvPUZjZ1Cp4hraT77WGPZo6dqcCX881rD7CAETSkB5HEmULxZdBFJUnj",
  "key25": "4EqK4pgcnv8VZLrv5aUA8FbjL6bWr9HLsNGMEXZKBuLZMpQQxrUszctfqU2bNqLHYk6SBwWGQwAMsuCgBy4fV56D",
  "key26": "2TwH9r6QHgqhUiJCWXUNZQuM9UJfad26pn4CsBGFdLmH8kXH6swDZDgY7VhcKS5oaW175hgndftHreVSovhYHxx5",
  "key27": "55mtazmLMmt1QhprNFnKFzySmaFnzjWbNXiNHUymJuAPs9mFennWjGMxRNudVy7Tydm3qhuGtyYz5nYTkDGqgsow",
  "key28": "5GjX5gBWjjcVPLqUTss1uGdAYfzfWgKDHvMzwXtWzGU3aTKexeZ2aiTN1gpJKPeyRAXuq3jfdLWozJZFhjV19qw",
  "key29": "46BZUpvt6au51tupZhgTzt3jHoKxBDb4JKTmTJ1mo8frTvh9QjV6sQizYNeaZsdSnc1DMvnQHT2HMbBZvugQywMy",
  "key30": "1Rmi11q9hds5pyMHk8h38JETXk8CnFJpwBKNGwLboEbaQvHFxjcfqS7m8i7rzJXxu8tY1DnYuEwpxdR5cGG5LWy",
  "key31": "38M3uqDhJhtFDiRHtqf3m755SzHPEzMbXZnK1aURdwUEEhMy7dqQXPaYxQhBUZtXYPPRxJYcpH8iuXgSNaPFs4KC",
  "key32": "aK3Zf5iJTPQ8NcjPShaVXLbzuHhY6imCveAXqsnqqZcLub7wdhpaTzXCFatJ41JEhFfURxabXaq9jr59Y9doPU6",
  "key33": "5PGkQxrs8CQ2mabvW924vNKSdkVCaWG82VrsVhjGRd8KT1xiu5RU93Xg9Qa1qV5f1nz8gfnyrmYhAkMPUJy8jkrn",
  "key34": "FR6f2sCMjRPnCn18mBTLBkuhnarc5CrR6FoC3mTwhxNdwqc61oKEJc2TwHWB1TNdSUY1yAaz9RnHzxirSr6JCSP",
  "key35": "21LzfJRECDpnUjHvggY91X6V62P7yfHxHpUasQt71bUYrcD1okhA8MAQsQyy9SvxuyvzG21zhqSitD2pTg1sA3JS",
  "key36": "478FvMud83Vg9AHsM6wQot9rmw2fYN47AfijLp9YAobyRvDKZ1G6h8ybLCst58bJPFXuaLCSM491nGPTcw4KJvzP",
  "key37": "4pqdLpUizu2o8s1dxBUAy2CbZJQCMvN4yeu2a29SZpobaaYeUuaT9wTGDwkS6H6neLwx8equgU9LiE2QUQzDi7rJ",
  "key38": "hQ6mX1eV2K5DzYTGdKCJpyqPb5jbwnRsjq6mPD1zeCoJjjCBx8S29dNGCAsjgaWMtEH9o1ajNk15kLbMHuMPn5q",
  "key39": "5o783qTNtxDs9cBJ7QG5wq2hQ1v3LHMRYxfC7BGfffpnxtF7Z5xYrRx1LkRkQRWYyiGQDdogoKtczmsKEt2wUpS5",
  "key40": "5QPwNhvQvboAU6VDgHVXz7vD5TY8rSfCiVwYm1cPZXUApBbvEuqV8V1zFqiXnR3NCQ9QHFEcTQP6reo6LpT7GxHA"
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
