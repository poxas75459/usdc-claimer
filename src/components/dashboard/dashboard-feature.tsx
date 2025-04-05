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
    "2x2XUHNwc9jWpYR7bNCJqRGYVJAnTshXF6uRJedegZHyLRmFmna1JxRMErgbjxDLmJytLZkQq3fJwFMeMEAT6ujB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HXG3v4325gsPdCFUZsfUF8JnuCgX8VQVcwcvqUSwaAFhf7uu2m9gFL7PaTdazob6JPHduiwRxPyWCuAeZzhr9Zc",
  "key1": "4zxifJMhup2rXzMmnCoNvtj7LvhVapPyLNFYGVzpW1JVxHGBtFRLrFjiZf53HteSRY6V2B19TBvRDRazZrDAticR",
  "key2": "2LzFT1bHbggokBp3GsgAxuGL6pDFF15ZwprFCmwnGMtjvvnwmPksSR3KGuJR5GsVeY8EPJiWV5Cr7ZDWF9t16pfM",
  "key3": "5iXYmwfJ8iXh1WU5aE4ieX9ira8F1ZAsTbqRgKw1iGAwmPmePfDrKkpVQfyRpDYzWuN74wrcaYNAGGwNGx9S1GpA",
  "key4": "4LwmZscsK8YJagnxYPmWCbktjZJP7nv7r8BCPLg6ii3LKNRk7oksZnTr7RSG7eqJHWyZiU68afaf74RHc4LNDXs4",
  "key5": "4LRcvubTy5zTNVL82gc4BY8JbJTZ5vSVc5Rp3DtjpAcbBUuvvTj1jruqvbodt8GKdRFPuoXvsJcTLiZDgFNHZFv2",
  "key6": "48QVMH4hnwsUE2rjinLrGQCgciAV82QdVmLrRhgGnpBcxaY7BV2orXvmRj3wwcxaRdnwy3UFfZUY3L9yfX3NCAid",
  "key7": "4EXL755KtBEF12zEAR89kzXMjGqXgACCh3pHykstMa7nUhTnRZYxdSiJfrZiNfGbWZGkBQdyLLEsw3FtVVcZtUon",
  "key8": "WDabvVVkLQywr7QTkzqXRL1xWBwqkAzjxQPhRThxjAF6omfRm8mAjTJ1qkZ32wxn3B69j9PS1QpBiAhxsacScU7",
  "key9": "462QeAKcuTjyXLLac9otmQi5qjTcE96AsBUwWZpDhMowSabagb3hLL2Vu8mEHerRipEufwntPDrXqKTGBMcvstRW",
  "key10": "4mgs4tCw4kJ9MtVhswQCPsNGJjgY3ibARs8D22ErritsYW5KzAmRUhWBUXGeMnew8JSPEtVg3FJjeHFSuYQjuHw",
  "key11": "33LvyXrZfnRSMBL7csga4PR6LzDch6yiAKgQb4CYYepuaYjqZYWvZLk57nMcWGwTgBKDP5JAbJYiNqMMbE4ZVrxz",
  "key12": "3wd4HvipXHAFY64pWSmNeQNCuj2ye3BSHHQuExw2CdCFVzhntF7Vi8F5BK9kRp6YsktuBxKqCeFmpEcLpMv4zwNS",
  "key13": "pCDf64N2ErXuXbDKqosKa8iQwsxzWZUz7FNW7gqYubtxBWCtL8uxYLmVPhKYeU7c96SztLZqMmuF4N2nW1RMJbE",
  "key14": "51iR2JnZVcJfvEm6McJjhCaq5668BMR9QjnMimQrhQtQ9xJZpGEVnDb6ZjsSgKY1BFiHb9prC4t3DDc86mJifDT4",
  "key15": "deC8DxTciE1Fv7K146Nv1hYuVJUrtZzVePGvayz2zqusvC4mBnyCB2VGjwxqqTngVUWwYmZor3XQZSYxgAvEekN",
  "key16": "4fMykF7j1HoDpU2wsp6185htQccFxapYCzt64vvAhJumViifSiMH6uCEZ6PYtDYsSYJyLp7CJuTgk9zERYMfJ3p5",
  "key17": "5AHLdowtYpBW8gz3SYVfre6dRxHAU1NYMud4FEPQyeR15eHZbebRPVRxp792EWkx2sfxHZBCL6yzKdAfqMbqFmpD",
  "key18": "2PkkZ5Kv2pMzYwsbDmzRUPxoabksMjKZs4vaQXPBj2Z18MbARFNnr2FqggLobFZAiZ21MHcQqtwsKnkXnhwyLQnj",
  "key19": "5YRoaBiVVvTr2ZH85mMRci2BbM957vcVyWxcQgRR2grMnKJWZ8Th9WrHtsQPtupCcJPWvF4m9wSuVSj1MKq9mDQA",
  "key20": "4j7GG2ScHrVvNSpKoikrjTjWsoLFdiy6rVXp6PrF2BahBbnnkVRwHatH5DahiECKS7Dvv3mo8cETCy6a4vwHXhZ8",
  "key21": "5wbARKXEge1QK9xpNSVPhJ1JdUMab3oMBVTbbXkcFkJLfMoHpRkLamZnGyhXiH7EwAi2cEBaTw1Fz9yrxQwi3JYr",
  "key22": "5DTaWKWzJ5SWDaZQZ63zywhN4cv4NyVTfymuDmzpbfZf673D4D2KGRvEViTAywjFx171ceXNm9WHxmDY9uY9tvZ",
  "key23": "4ZPke3NVfhDGW38LfVH924WaR45aq6KNXVUAkvAQCCshWNwS1zN3U8uWABySyiFkGAvbSixgD4w4bfCrWi9qPe13",
  "key24": "vJ3gkA3YedyXuwxhcDQgAR8tP6PFvXb6nDrAiQENGxiKDqZe7p3HxWz8wWBme7Ao2deFuHWxmzJo9RaBzKfi1Xq",
  "key25": "RAFzk7QYMfMVAQDMJVbfNipVcWKWNfYjDR9YYYyJHUxrgvbWFvkcraGrHo1f9EpoqTD3hc9KMbbBfwtNY8s1wb9",
  "key26": "2HBBBwG9my2P8qCUpwEb8Gx1PMNhR45EYwsbbufBjcPZBJucJNM35sNJApnmdgAxgnuDrEZVPs9rCGKG1NAv7aX6",
  "key27": "5NkS7gS15ze8ueu5ybRkYVpSbkidjQXkhX7jj5bc8brH8WYCPqnwXGgGemtWRa7A7gdLz5kgsTL8KAQenXATaWfm",
  "key28": "fXrs5HzkqDJiLQGe438rzHwn6hQJ8Uii2mnCVKvsBZ1TUghymTn68gvLKFVwKfjuAaXLAYapsT6DVkhAMkTfUmD",
  "key29": "5dpyCwVdeADvUuwu24D4RRMbSE81xEL9oGfv2Jx2aBgKkcJHvYvUPhPm3VQvMcRsZ7hUHugVGtew249XxKxXzYCq",
  "key30": "3tnZvw4Z8iEd22jSRvaHTD7Ys3NZH7FpEk4MDV5VFD8Wh22BUua7o9SL587hysfXPDb5bLhJxgnEgAaDNn6XcVX1"
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
