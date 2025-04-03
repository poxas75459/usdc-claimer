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
    "2o4aC3kqKQYZppd28Yx4tkjCN7gddxbKAa4nFKU3i81HAfzL5epqZbKRfrVNZ4jgB15PUzTzpx1ywSuqvrAtCADF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UosE9erHtngQTvXtjx6ghSfasBzfgYYaUGKFJu1ZuA9fzd4nD6mECbyLYLJyW6vouY18p1D19pUCnmnxdtTfFxX",
  "key1": "36DriHFuqBXcvuU4ZSkTnhV3fkA54Hnf4YK7SBfwpEdJGZ7C9SqpqZXwvo2Er4gRej4UsxHxzwshDXF9qTGfBKmD",
  "key2": "4hrudGTc9wC5avAgn4LwWSVaBDcJLmMhY8WuJCEzBNwL7mKLjdjiXg8siaeKH7xQ3JoLUVHn846Rj1Up4ttEBmUG",
  "key3": "wFBWQHQ6C6Z8odNunubSRJNPf9CRHSuntxTuHGQtMbmcmYcK1PDmk3uQ3wE7CQ3Kf2ACk4emUdFsei5WNqYHFMZ",
  "key4": "44zn8fH8f7mt9D5sYBCxp6hdLTx3zRvGe4uyKy5QiacWLg2T66TAuS1Ey9aJ8GZK6aaNG5LFtaNpkULWKDWgCFyR",
  "key5": "5vqkAVfAk7VhXVUgFiJZCy3MLeL6fD1ExwLUNRtiR6HTidQD5EggoApkEvXXYiMTYdwmWoskhY9Q6Q7k1UdSqp9s",
  "key6": "63KnPFJAmJpXySKr1Qgu8JvkQKEUi9kzDZ71HU9qZETu8aF2a6c5wDE38bTVbn92b9Cy7VbYDJUmvpuBJz2g7hXi",
  "key7": "3U4zy6v2emQDY6B11W3NtWYrunvJ6A9Xx8i8eMqSGECaQGK7BN6mSfY4uiGvrNJE1u2LrHNNyMzWsE4Y48MHdmNC",
  "key8": "4XKmn1TCC64yoXAGYirfw26DVGBh4pS9htJ9rmMCCBf6KcZwJEUuPi1TBtV1gd5N6GYoQYp2BT8MSorvVhftg2W1",
  "key9": "5yCiiX7PuZdhVegJW3GBBpUm1JEnc55fLF92CJza4ob8X4f2po8o4nTDwTB2qV6UCDmiijtbS3NTo2qhnFZZsKTV",
  "key10": "4SKRCUxV1gzW7b595iYvvLqEEyjXj4fDDi8PE4ZQPqQ2dm9qPx5dfTcvfAUUJ9LUeE8ndXpqFmxxPVi1RZpD1Bkw",
  "key11": "3rpGNAnrFmdESnJWiv8T9u8otEerXSawzj461v6YsbDcyqMKusZ8wHg6q8DQ9X8brYphAuWmA6TRU9vm5DSHp8nh",
  "key12": "55V2Ey7oF3Gfm1iG7saqYC8vGD3cPKWiz5SHA8oUkmvGtSHovTuqW3JvZjQsj2xUxMbdh45MCZMwSokaTjYxHC7k",
  "key13": "55DkdRgJdiVba57E8i3Z8heiLaUrXhrVXPMbeNNK6uw3KwKTvdGWTuRRpmKHrz98EuwSGjU6avNA2v1fq8G8NPiP",
  "key14": "5Wf5R8cpR4hGXW72RTXsQXahWSRwvpTt9cgPC9ezh5Ww8CE1eosUJP1KVpkxvAevMbJaUBUTfakiFPRA8EssjeLZ",
  "key15": "4cG46w6F7YhdVjRkaYcBUSdmDbr15WTAEVCYQ37FEAfW9H7xHeEE9hXNnP95qZvVxs5RTh8QzuMEpNeczYD1cZ7w",
  "key16": "2rHFnxJ9fMWKD7wSXL4qZoFN4NuXxp8xJvKqJJiAJRN3F55oZ5xypCzYKv4sAjzWMZxd9WRxSaF9i7eTv5XtwwXP",
  "key17": "4S5qWrDvW12Z37aKkw72UCkDqheGzWDztgpcynHzCxMbAdpU6NU2AYgZeLuWuq8ryi8xVz356Yr2Fz24S1JJZ5pR",
  "key18": "crjJDYwHbC2ThSSyvFCahugv2NrBTTiqsAgstmXC7PF28ZyNcGTs57WwEVoo3Qib2GirUabKiAALF4YXsrVYeu2",
  "key19": "mg22kLi4DWasyZkek1WNvr4XQF6guDaUbrAwo4jpeApevnaa84SWyYPQtm6etZzVyT2g4kPwC9EqbgtEbnqWeEx",
  "key20": "zKy6RsM6o9ASeFdyKjMBTYRnCfw8zE5JXFhTYpXnDdTrmxwi6hr4ApaKjD9uch53CextaKKpMpkeQEPB2czdTik",
  "key21": "3fPwncLtgX56NdV8bDjU4cNguvAqntJsR4rvBYrPAGWDQJfGSMtqGiQS2PGNoSiAQpsq1ENNrhB2j8SnakSHC2cr",
  "key22": "2BhTX63wTfZEQ4zhJ3ETmcpH1P9FQVVz21XDgQSQDZHSyTNXBTdVeUZsxZjAfbHvFevygaXLNyEbzBGHMrxupr1B",
  "key23": "2Vp2oeeoYNkq7kKQXECnUPwYRkxvBFQv4MxktmuA7HZqFLPimBSv4ZPATPdYc4DCasVErspdwv1qiVAXH3NtzNQX",
  "key24": "ZMD5ZYG7jWwmc2gnfEbcAu3zCZa59QzGQFbhFGYPcBuhERpLKvdweQDZAv2Rem2HBNkLx2TtyDXiyPyeK6BFdxP",
  "key25": "3T2tKvHNYQhpoRHtCfoo2iQDwrJ9j2oKsakNGU714WpsxgPXtYQXPotG7qXjFQoxcTEmKgnLr1dvxaMFLePfax65",
  "key26": "4toTcyV23gfR6i2rhV6M233HqV19cbChptYjmZqkm3oUpNCXAtSogHSGuGshvrSKZZjC3PXLBC537hTwTCWJpMcD",
  "key27": "3EV4oHDaBvcL7K3KbkQr33ziMDbTNF8RJkUVWKHiS7a56h8gfZxGGHmmHcTyMX2f22Qjyk85JkVqXp7jwTzAQbVJ",
  "key28": "3tbMoifkyw4GMNci8tHq2gnEixsqaeSwnfxNPBAWFwDDCNjPeKL2y4cDvUCGBRYXBXNL9tAi4ccMPqhojy9fMUL5",
  "key29": "Nka3EP2g9P371P4mtBKnsXeZvQqbH4p5S2N89rz4UQ5qCEji2Ysk2fGiPLG3Emch2d4TDVcyHkkvKLhVGW4Yd4n",
  "key30": "4dDFrkaDCoRmgVDZm9CwrfhyWsTfuS6fc9iQHns3UHuz2PgBMjwmTZgipye1AVmnMMKieVnJCSYBUNZYir31M5Rk",
  "key31": "3wybASgtWe6mb4wv86mRhKMm9GKevEXoqX3U9YMR333QpvrLAccAkr1dxZpKmD3yoEGrZJDoPjX2X95jMRdeCUV",
  "key32": "2w5ybJneDm7gFNqEKgjQL129t41ts7sgQ5LdBjb5Yx8TjmosG7zzoFtqzbrbEg7pVT7qetFRgHNJGG9QeytMydyp",
  "key33": "4DuHjocSVHa3gHUreGURf6DKK28GV3d2VrHj19EaJ8XHcUVKLCvVKBdZKoQXjxQoK3jGV6Qk97s5tREeMt3X4yZo",
  "key34": "6JJCLnSTMUc9EDRtMGoSgxEGJCDuZqUqphksRKC9AyZDXJk3q25QiduxTUxinonnGDsftmHsiSwf3LRrvUmxron",
  "key35": "4WqPc9Sm1nZHWeHFB7fJDWQJ1aJSTaMN9HHS6vA5DUpBh9Y6AYwWbRw9r3gY7fixPQCCe6pPGrYHXhfDDxxdKAcc",
  "key36": "2ps4xGswBMByC9BKYNuwRkvdjD3tuWGVzZcrNCSueaPa5Qg1mo3fLGYaTarcX8WdY5gUndoiKA1DUjonrZUp9vvo",
  "key37": "51iNw1qbmFFphNBsmYVMdcbGbawfFvMCNvwJ9jkYfr2Aoicq8QNrgyDw4GxUPDUXQPjLAsMFfK9JM3Vg8Ro9fw7p",
  "key38": "3RCNTfWZbgrKBkQcmjJvmMH3CLmuTYp7UpW1SjuSfJPks81bGPAx6WusqvUEi1voTkE8KXtu9AuKbXQvoBYiUuhQ",
  "key39": "5JQ5exQuHswGsCNkZB86TzzjdbYqwtxBXhn59hUSe6GCxTfWRhthTZa8fmpGfbayXVLCeKTmspDPtZRaPxT3AB7h",
  "key40": "4pzPy2bzVTtrFRWSXGTCKGRvxwSby897ViAyWVnw2Svy6gmV3S9JnYxzS8srNmuhBLpqTc7TqVfVJzmuhwyYSx4h",
  "key41": "DrA2t3eqbxYypGutBLMy1WP8hN5FqKfa72nREV77T2xQ9zAwxWFyCxH52NfZUw9g1bmSWQJZt3tqe7rB8f9yGUo",
  "key42": "445iAmMe5vPfwdTw4ajw3P71esEpKxechTePSHFcuWuYAmFqAyJkER5bFL66Lac6VA9YXs1nYMuG9kaySNG1zVdG",
  "key43": "5dBdtyERXiG4a1N8Y2ib7wbfvGRdWFdpr3XUaKavdFrUEpTqpEE9AyuNVNWEpADCG2eypUadx7PZTZVqVYQfMFkp"
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
