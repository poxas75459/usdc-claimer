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
    "35ox6Sby8XbXcoFzEokveqGa54pXiTgWfUnWFFFg4MVvqhBVvrgyHvccXiRpDahi3xAcoRKaJ1vVZnHCpczzA8NM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZjNQsEqr9ES28A3Q4Wu7W13t8FGPwW8QfjhJLWSXRHZcvTunRQuDxezqJedWq8HMm8vpVgBi5tRW9hh3WjVoo4z",
  "key1": "3shvdjFeEXj5HhDTJ4dyVMp7HaBzCaBf2ufVChq2xrGjBKcUMCAwBZnPyH4N7G3wm1HgqrDXQh3iefd2hFGBgwio",
  "key2": "37Ufvef1r1JGTo5ErW6dxkTRyoPePTEf1khJFAS5WK66Ls5xRyL7BsiUjtPiXdWkz5SwnqT5ebKYj1CbztLiaGkm",
  "key3": "BC3eDvYGY2kKK6riN3gCAFRGVJ43Xzj898ox72ZBz3QKmQAvVpRGQ2amy1As8DAzPf39oZd4XhrjQkZjg38vVZz",
  "key4": "5TKW9iYHpyo1pagERK36vWeCXrBCrmg4Lu3NikwBZ1R4wMsj7SxULzEwXom2WwJMTveRFwvspM7GeLyECTKgPgp7",
  "key5": "5cM1xhXioKUoY5FiqMoBFC6rd4WZah4m8mkiX71w3fFGFU5Gyzjb7VAQtTNfkU6FVCQYF6Q6UqyBQMEW3uZRMxEm",
  "key6": "5imsVtRfrx95tGx4xzj6eSqvd9Gzhyncf4tyoj6NPmHRLktN4yUiWvncCt8XYiwgF75YYJtrfqU4Hszj8KqGyL9y",
  "key7": "3QW3Q5Gyvi3DfGbu9SGFHhakyxwP1vpEYDqsYTebKyx6bvsr9eYmnkLUCUz2W9hHJWprMHo1Zww2xMv8VCbN9RHs",
  "key8": "4SR42tE98mQrKxKJ6qX2Z1dHhyHd24EjzgoZQXqwS5RZz9YX4uc8Kov1gcSLAFX1eoA3oWNmRWsbwK1Cn6Z2PdcQ",
  "key9": "LxPzf1fgiDVFFWaC7dMsv2HxXquDRkJmKJidTMs8XfKx3U5HJSnq5it4G47dQABKnW7kfX24PTkCgLdqgPnzAnz",
  "key10": "2Dge3ZBwbnk76YpHo4a8WFytCqkjiSCwUbajbqkFxD3am2ZvnBBM1t8TgFYv3X41ZwQpzUoe7DmubzTNCtE5nTbF",
  "key11": "4aoRAAbxsnxeAGTWn3Rr4HqP9LUJGe4BGimfDcBqjwonxAUFpFz1G3SdTghLXDojpnr5nTWwcjmSXsUeJxvHzPJe",
  "key12": "3FfwMMYH9aE3oPaa8YuxPwBxg7tnk7tf9RFvYGb1xFuhQ5jPTjpt5kA5GhvZXFd7NUcbX5HzUSJJrwnMoRynZvhW",
  "key13": "5wEsQQvrz1DVaufQZP754mxUAFcx5Z3MjHupd5CthRVYURjcyymSJoCmsKoKJexeJZWja74AE5FaXYM9e2fnXPP1",
  "key14": "Bne57Kb2msizuWZvKeGvyzixJM4vhT44ytcQgMKaxnEfYZfHeUS9JJbURHVZtcmoWc6UcQfCtpiyfetsDqo3cCc",
  "key15": "4kPqQ1WE2NSTbrFszhgwNtGnLPnuT5A9p7jSUUGwaETW7TLsX1PRn5BhTTBTbnnMLwkEXFrsjQVa6D69tq8393LN",
  "key16": "5qK3oU8waMqVLgvF2a2rzsuFNcbGg3BNHE639Y43WPm8sYzVLf3LHmTz4834oDfRECNKFfSuYCaJNdMaDDcrajsW",
  "key17": "5HBwsBRo1D1XeYELHNruaV3ec2W41jVxXNd5Jpp1557PxjZLsAZTCA5WGKNw2U5dP3FRh6JgsJKkkrWQcx2UnQWY",
  "key18": "5VcgnyVwUFNv5vx6upfgLnXXeFg4E1u7WUh7vvs7LdW5f2ZXVJMR1Tv5vuQYULLGbsjeH5LFQ8QUktXa3GtKNr9k",
  "key19": "4AQutYqMHZxpvxMFY1C6FVJuoWmhUp7N7WAncTxUTT5uZYwVNMVFDvA5tgr8HseFtdhjx85TeRFkoso2Uef78Z1Q",
  "key20": "5iMEJi2REGKP9drDkMZ7PJ9kKyiPUFdpc2veHf2xNAsqNmSgQg4LFmA8YnuWLBCwT3FQwpBZvoVKRrey5j3JtjnR",
  "key21": "3xqeJgewm8PaNk9ubCPubzeP1tpcUDL3A3CwbYcL6V8ijTztN6YD4r5oXNAMvngPLqhxG7x3QSHARjrmYR6iA6CA",
  "key22": "3UWp2rBXXjuMt5Ppog19gxrKRXgE35q64gAPSh8CZZS71rTkhsCS5NGqWE4V3VzcbQrSomqikKaDdvXcMpbhmHM",
  "key23": "2xGDYKTk9Qoen3JQ3btpq8jW11jKrWAafJp2HrQbNx5wowiUEhhvehQt6VkpdshjG7WmmadP2Kjqju5THzxNu2wk",
  "key24": "UVihkHmwSG9jqwLQkRLvHHmzYrtAmtEhKepvTctwJVPLxcYLTjnQz9u7Fu5LmGww6PuLasjad6BWqiPspVQi6aM",
  "key25": "5cUK3DknCP1g6LHLwoDpV8kA9nuVbRQHfzhhB3gqR5ipgRL518L8Uh6LMdWFsgXFfAr5X7oDAGXPwNdboWYdFws6",
  "key26": "4KGHQcTKJPoxTi3T4vLPWngjoug9rjaD8mRxZgTGgdRtTZt3EDUug2mYvb47UqHUwvz1Zusvjpzj3PQFsoXqHKGV",
  "key27": "5jqSzd8vTTaLHspAa1Wsyt75mJMAnR8DCHVru8KzBxLhPHPzDpFkZefWwD6XM7s6bfoQ2TfAfyjiMu6xwR2HzhAm",
  "key28": "5NNhD6ufBMX8sdAX5RGbJ8ZxFHxhgqgn9kBsShm5aUi2ztN6DB3hAFrDZMZCHt6ADBMkxwyhuNvRmvMML44X9Lfj",
  "key29": "55hQbNJz71F3ob3UsxHrdLpucM4azJm2UWmu9WgpDydndpiutYxc1bh1v3SeXJwa8aSD3pqmoyGmAo2HEfoqf2PR",
  "key30": "3jL2Z5dGsKKJV5zG4VQqCCVgV25JfS6LmjbBQoAwoiFnNKTTABDocXXAxFh76g1jdiAPBvoZA5ZtiGNYF1cpgrKB",
  "key31": "3oneXM2AVEMeGuQQKtoXvCdJRgfcJu3AimLKuFwdyG83ebykxrdDcSC39wjSoVaXZMbfpiknJcPgb32d9mbVSVmS",
  "key32": "4uutwJcoHCrzHDPbDuWmPgJAZQ5zqnRCu7nXDK2qcdz6TUuZNpC3Qoq68GZ7bggyfA4obPwYnEDaccAQNtzLKi7M",
  "key33": "385Ay5aagxD8gwo7MJTvMyQmsmWCgV2egbSML2zYmBZxwqdJuZFruBi5FXMd7rh1cbifukqMmHJoBkX1L6crWCvT",
  "key34": "5bATJe1HnzsHezdUBzcui6ydsuux7LmgJSvrs1ZF97ndQuW6vbE1R6dpg3PHLMJzffzMR9WuJ8fTT2oMc5QhNeWf"
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
