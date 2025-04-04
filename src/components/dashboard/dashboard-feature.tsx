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
    "t1AVWtvaeDGKVFGGkMAD8kgymeyghwwVGpJ42VHoTiBrC34FQvugTqPMPKWCGpABq4AAMVjUP3VKiq95bgNoU13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tLmfBQgNLzztLiMJHUwndyU5hbuPJNQWxvAA6peH7ELdv4q65Vekvv8cYASsSySXdzHgcyXM76Hk4Xq1cULneH3",
  "key1": "4S5j9yrsXgnDdeVMcvhex3qUDvth3xWeSy7s7UZRkJvfbkHJKFvu7bAAs3HoSJxgwgcgKJUTYMM3VHFGSk8h74Pw",
  "key2": "oM1UhiNkmGZsCY7Vsr4DoYtFd6U9xoSmEj484w75aDYZ9DMBZtuwDZovJoWtUn5Rqn5mmeGgyJkJvQD2ZnkXwa8",
  "key3": "4LGpSpXnZqboQRUJ2xNaXqz8G5cQ7kucqzrwuqVqEyHJGk4mPdaLzPoTUx8e69LQuvwwZhJTwG14YpG74vThEGrx",
  "key4": "wx6tBeqkrqJDbAPuyseRnVyQhszhG9yR5UcQphskahgJiP2BVuj6QDGHJBjPk3JvX4NDwm6Kt7GaoXVpettPPnb",
  "key5": "4dE4HeFPahVnTzPK62VmJRorbnE218Mr8hni7637aQY81J6qoJXnGQR6vaHsgc2KHRPuVJmZNmxFWmp1Y5DtToDc",
  "key6": "4wX4SVYAbGdyyPzTz7LusVidJrHFg8FJoRSfFuy9G3ovYbpWnd6RMQ3mjMZ44Sy2EpR3oDm77Qd8iZWzyePcs9Gw",
  "key7": "3Fw2Yk4iBb6mDbTT1yT3MVhbycrQcBxwPcrPyDWPrBUjxBj5k7vovs9dttrie6qSRJbXtLwENzDp5kvvVzWeCJcd",
  "key8": "4iSBeo9JnfvUR2UdRG2ojh7jtATAgof14zYmRx1Ryj3oBRVAAD6DHjuwUaYwBz4upbUpw1JVtSrcmbgmSRF8NCyH",
  "key9": "4Tet54FHExztPiP537eFWr9WbDe6jafadhPN7wZ6hBxyuzc9EPsNcVpj77jWe2hduDH5CYeA7z3WM1hDUsaXqo9K",
  "key10": "2KG1mg5UPgkThRNZ44tEKj4Lt5KniGG4TvuKxhNdVJ7i81MuBqf6SzLzy6VdXDz3stca7eSK5K5tWwuNJFop2UP2",
  "key11": "3RiCFXyBwTC9Qb2ra6ABxyd7emdxrpACie3YbfkCJTjuSfm4a5hA2TM1UKg4N2FHXPsVYsY1aKsJZgJE2TWGR67R",
  "key12": "5bhsu8W1zvbAraouSboBkERsTTaQc7X56h1y93zj8hRQchU6tSAyd48U9DDcQYTe24BvAwijhhjfhqA8KnigGsCU",
  "key13": "61wm9AJR6FUFTjV3vnL5mgYznf86XqMZjNpACcc9qaZLDcxHYAK5btUPF7er3gFvEfRz5xVL3rEKgqP3nBdJXBeB",
  "key14": "4G6dgj3UF6jhqoP1R4Qrohh56jyNqLQ3TtAJtY2f6docfA184QnS8x1n2Ak5UoozhLgFdGoQuQA2crfQk4oJNFxc",
  "key15": "5XbiKmLELgPvUir3ZrvVa3NTJW2GHrNHmAvXgQ78hRmuwg5kEZgjMfdiLZM3YomF6PoyGG1dyMrMtGQP1oaqUXu4",
  "key16": "4dfiJW6RKzVo9QNtFyKL8CEjZzAAHqJNiPFVoDXy4crfjYXqbV963cWwNTeZpEz657jzSJJcJRXiK6CzQmfZxtjz",
  "key17": "4iVN2iHHM49XML9XP4dF2KrsVifESTu7cNeMoZsXcaAeh2BaXZX9Wo9uHjQgtXMmnjVweEpifkuaAakBGjQUbify",
  "key18": "2jV1mBaVfsHBAGoUuojzDVBWi1yFemUVTcVwNZN9Z72hvDEfdk1JmzGpG4ktWemfn4um8XpJMDkYtdAqyexmi3ZR",
  "key19": "5Ln1qVQuNaSMra5YcSUMENZHkRz6xeXPGCHGsiEKWGwWpZKu1vD1L5at3HZ5PmSysC6TQRxLKZCQQG2XHiz5tGm8",
  "key20": "Nga7WwcF6eurYAfXFufmLWYRMjvzbYQ8X5qxRQSNo2aZ56erWmecTVwvC8YhsKiwx4dJueCcvrVMZcmUJAt7NdM",
  "key21": "sWDLE2oL9ysvrHPhGtV4KgWjc4H2WEfcmHEEZx4cdPJcNMtQqGqEAQrEYi1WV3DHbaepRdoTX8WMYLkWstjETU5",
  "key22": "27vZ9hahT4YfVF6zNDNTeg9B6XcRgUHYUt4MJ1QzSrdgynePTZz9LBurF7paUHD5BLyYtoZ7cUyS6k4jSnnSGPBw",
  "key23": "aAnUQpfYXNKJFH6f8X4BbZ9H8ZyQWs8aLFVJcMW71mgkpbWMGAtsa6P3i1ZiZVdbTdfPhzQaRsTGjtnqCZDoR5Y",
  "key24": "23bNpQvE8s2TGY4gY54sPUiwMDNW9HsnVxhgex69Q51dtXox4i75k8xpbciTs3TmunXUgWQSetdM3ofLAevmq4NT",
  "key25": "3GdkRjkzEUCDrGZGj4gKgHFm13UVeyHm2TfyiurwLG2v5xA2ZsyZ76N68eeJrkdTKsVgsheoKuLg98S9iCM9SaZA",
  "key26": "2ToC38xdVfJRY55knqnexU472GDz7dSmKhhnuTrS2QxHa92N3WxWWnK7nLTqUnB5aM3RMwEzaBuCiVhpYQFFFP3z",
  "key27": "32aqVrzV9cGEYxwgESdBuvjhx3KM7v9w1b2u2bX3vxm8rbZxVFrvyuREsZvny2dZzCyjDcMnKSLi2AXV2E5Xr164",
  "key28": "2w7aXxeYnrHXxsBec3SQSsD35V5zLag5vJqYKHDDJNPQ8GfutExAycw9CWyM32EWGqT6yMRtvYqf77NYZWgndFTh",
  "key29": "mWg1wxwfVMuxJq997g5NkUs3w7dzML6goQEdbu73vPnkBZNGgVcFoX4vSdbQiNYe375sbB2WH6XPKoki3aiUsZA",
  "key30": "26bgzLCmXhDMcN2udQdRiTZJUQk6uKdhBjyb1M2g3akB8c4PBTianLqxpZobm7tG3QXBcjAzGYgoeWAUgURmEGCZ",
  "key31": "3Yk94FY4SYZooWBxtCuax4KFTUXgEhcCsY7vYuauMmmsTFnXQLC9xgyry9qjJekncboC1rJXvqFqa3m8c8bpQg6j",
  "key32": "ywAPwsVNdg7aCaBvKg5UhD3NR6Em79xA5oTv56vK7dgPtHRX6ttYdZzEBWkkV1AnMduc1nsDfJXnQajyZmBEoK1",
  "key33": "4wLBYouELiwu7Ca78LEnDAC1Zhi3jQ7SrLc3MUPLvyoV9wevjwraP6vUnR7DaA5M1iYF7x6yR5xNUZWr4zvwCLna",
  "key34": "35fuDu3wxPNGD8n44xR7ctscG4pRU4fQSoSEGiFh3j8CUwUh55C1cfvv5xDKDwfMGrmgQvd3tqXqktPYM5vYdmGY",
  "key35": "Sx48rpq3ssAw92K1VyHpXG7P5hpQ1PQp28uX9QuCiDe1Mgv6FqckjTxXiFx8KNtnvnWpr8bEVa1uB32bcRApMcF",
  "key36": "CFEwvrDPWgUgLY5smjwZhVA27zwSU92rexqgU37aLJXGgXVjL3xzL1XtujJw4gtCZQRhjnrj8NsTx4iu3nC8LV5",
  "key37": "Fo9E8ibrqEHbppvhLqMCY4rnjcx1FGev8BgqedgowezA8JgrxUCSaqJWiVqRZSET2GqrtptdzHUY169eLvfDUNK",
  "key38": "2vmn2SB43R2eHXr46cYRnDapCrVBx6rZFjTGezg2PHu2df1b3gYkURQeZJcGnaXrGhQpKjR1kwELnFivDHbURWio",
  "key39": "2nToVzXbgVDpJ5sQjYQ2YnkGcGqNmTxXw3prJcg4dtyyCvCjTTz28Y6WmhfRK1ZFiTqQeUPfAkDjs4Huj1RJWDhL",
  "key40": "62CizXnNTB8MeWhda5djGMWajGc1xx6pMQNgbovkJU3Yg7RX8uUpzu6MSHVx5PLJKqXv5qGEnTTUUaLpQmYfkZzz",
  "key41": "5avKDt9MJ39dXY6sCVZErB8AArbWLw41FhJV5A857URkXi45kw7SJbZ3AepKYzWNjgv5fjPbMdPS6SMLDVCUFgCS"
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
