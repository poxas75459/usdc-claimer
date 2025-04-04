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
    "WBK8vw5xaMFbbzdXFPTywMX8cj8H17RnBCLW3Kt11wk7RzGeXMziZzgHXgbkB2gqjGat3ngrwyNP3kxVDxLiV7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JeDQUDRtm7UvHdx1sUUHe8gpy5icy4AfM9UJFdGZgpaUspUxDcZBMn6Sj6qpdQ45qmet1s1dJW34X5U3mqstnrC",
  "key1": "3FZedU2jmjMHbZv2iEy45mdvGxDjceDjhx4qweLF6mCsEsFP7grANReGCVSJhiC77FF3dUGC8DW6dfAZ7MBi4a5Y",
  "key2": "4bi8Twvp8Cngi57MW9TKSwnKYxPBibuGpGA5WuSMpXwnwbG3WXSWp8rP9JzqDeqQcc3SQTBCHKDLfMsA1Ev3zGPi",
  "key3": "2d84p4cySW4gFxa31j4sV3dbFVFRPDS97QfyEBbKp1mBgFZMZP2T36Xi3gNbLsKCgrwbC1Pp6nKRPyET4adPBaP9",
  "key4": "27X5JZKvec3TvjX7s8aLpbYRQWb1zgJvUj16EnFBdGr2f1ZPXvXooxLXfaPYRN9Laa4vrfVF8LLYh7kV6Ufwx1i8",
  "key5": "ERSCZXFr6mVLYtWSf52H3L62focsPM4AbspURBm1AXJ4MCXRdQKyrwtYfBfNd9Tw7GJ5kvpTZWArALWy7wuNsib",
  "key6": "2gNTEpQfo5KoWsdFMcxkqh5RaxX4NpDzbTpF48RhkgzZB7hM21HMyUKZFePsQUTLeDLpppUqWF38Hb3nqrN2o5i7",
  "key7": "3gEfnAdAt7vARapQDtgnw4S13YuVP3VUqypbeJHmvZAV4hFbNMcyw24vu8voiaV7Pe1uZXQ6PyowwaRFJ6H6XCd3",
  "key8": "4pGFtrykDXcTew3Zv7rvGat7oyLznY3fTpwJRwjxWVwnqafNEpKUV8LFbLsjG5gA8C1R8WtxKAo4sKREUJMxic4T",
  "key9": "DL7G9JYTEeGzXxRmpEi7451Q2P7vGNh4CCDBJyEZ8hwvmrq1S64BJ7gM4nEc4xEoUvtEBxeH8L7JazFcwqWJYy6",
  "key10": "2SVzcrwYgj5j2DCi8C5iWoL9Poz2T2LYScV5MwCRjZW5FfR2T9E8yq1EET1LNVsdVTx8kB5H5t54oCmkbo1dCGpR",
  "key11": "AfEyjSaxR3wQ6y2R4UxJFdbydnh8WNpfDejuBzRRpDbfyxDKgZv53B6qMgwuLWk7EWyALcH8UUsizU4vAcX66iG",
  "key12": "2HPKutitK7zzdED5rkySV8JhadSGhmgWEecpecv7XJyR13etcnuFMe3h7Dm7MN83zqj8FmRJysURxBh8nuRcYGYB",
  "key13": "3ixcWnvCpHjvVSC9eQVx3Do8fWkf3SRRegi2GVqoHUhBkLbirRAF9cegDmGRe8Xpii2JqL94RAgLvcGwpVsPhFeD",
  "key14": "5MB5iKJGPtGAZhVFoYuta58PYZpQake5ZPixbdwnjsGpuDiXDPX8cTtqz5U48BovYxAR1J6sRutR8Wd8NgMsz7u",
  "key15": "3EPicUruYyjksALGLRSkfsVPWAvMMmtnLMaUizWoFpAivgyPJuAy8JS2Hwgrcgf94CRwY8P446Zznzb51MBtaHPR",
  "key16": "3K31MLCKS8Hy2HVz7UvVVUbRaC6pA2pH6vMbcgAXUaLP8VejavD5BMWXsmiCj5PRn7JKuHfqfMSwQovr74GqR78d",
  "key17": "5G7yZDuiYVS4sjWScXfSr8XaoJWru4t39TEtWrqUe9E33nHmQjiDgEp6oDwncTny34nuxHCUYP4cfJcUuFwp7wUB",
  "key18": "3fBFinw9e8KxNDe5BoZvWR8aiEJ5Zoa39aggM2TPUaeGDMuiP52yFkHe42HJqzJGAJcdUoM873pDwRYpygmU39vY",
  "key19": "4gKpyuSTwAzfZEnXA8KG9CAYGGPk4QbEAH5LWjrRKotEE5UjWv5cvFk4GKADkxxgArpX4oHmMtrHKnS5GGNBwcKK",
  "key20": "tkBj7wmy8B5d13GPpDEjM5kb8DrpBuwV77f6DqyjvChSjQmHCUnxzNJaimbip7b9Rodh4qq1r8LQEkm31RZ7hS5",
  "key21": "2RNiKwBaEHvBz8nZZm9RYgi1Cypg8w4wMzyys9H4Uc4kNvySgphJnRQfnAeHgGY8tjWq7HRWoE12UB8aAq8g7Lc5",
  "key22": "64N2mxHhCULzMBqMeER1sz6f8s5ye2CHvr9siGArhVCRsh45Y5qzkCS9e5dtppYYEmWTcDXYnXKiK41fK8qrrpoC",
  "key23": "3iVkggFYnRPRDwGQWibgxC2A91WJBeroRgYiPvS1DZRcAvrH1dETLRAHSMSVcUJzYWSDoWHjWEHTMjV1RrnGDoZV",
  "key24": "4JETkCrDLtSsHf7gSPzt4JHZbBdyHopsHAkib6q9UyDmNmqTYP1NvR2j3egXdKjLjCBj6vv5naXsYJ5W5mXjuMUv",
  "key25": "5eAhspYXwDjyyYFEwvqfJbTDSf4FBjRMNds1NhsXEzmyqp9RvniU6LJqTaJ7EmDhCLYabmGcneVMDXudTVxtGcqq",
  "key26": "3xW7Uj7zm8Z4DsRVTQ5FeTDVz1kHrZ4WX8GUyF8H3jY6BHFGhip7WZ1PxrqgtZvWhB9Bk4MhGqWrPM4Q9jFW7kQn",
  "key27": "Pq4qpTXHUCLrbTbP9FJxh3mjUhjDoJyKtzF53bY9M9YcuZpyB1jEyzLTQ3uqQQDVCQkSn4VpL3uhg8tmAwewzrL",
  "key28": "3bf4KqNwvoZoLg5KGALjtixhAJSDv7Kb9t1HG6jDEbXdVixDcVaQELf9pR5P69GnoGqtRKmVbiNo52faABSMJWb2",
  "key29": "4dszL131EtEhKZfUFgbBANjUBX2eA6Vc4AYmP2Xf1bfbkmLyiHcgHLx5AWzGeCQP3wuBNU5STMnjpe6UeRohfB3j",
  "key30": "4Sv9NwPKSpTvkr4qioCnkowvBbvA5SoWE7XPorf6W7svik18RBvtZm3wSuF6dQRvetqyc8fEWbyMZWghFuhswGPL",
  "key31": "2ZtRndrYzPosigAnX7Ce4eE9QbwJKjkWUxvZ2Rizj8MxLdRMarAoQxu36cPRNZrMNheNghjV5cYs6bGC8cEp4e9Y",
  "key32": "5pzroGQZ7WG41XLjKFgvfkTTSK3Q8XDfZBs3gCN1Va7kXV1SgSqGymgKQF6Yvzb9SohKxqXahWCE5EXnL6prPpDf",
  "key33": "2b4pVLzZg7GPyBH2hf2u46mWDJTMcXZLFUjgAa6ZybxcJVoNJQnAVvKG1WF9iFkP6NnFBYdVRoKcVAzS14fLQbfD",
  "key34": "4SA4YTUsL3F1Qebbf59gaGpA6hdg2QTUsFHFVvD9sk5JW1eMkt93wasPDR3LguaArxYpXud7ECyN8RpwtLfU48NA",
  "key35": "2KnYpz3NEWdh8zTzXDND7mLTH874zs5zqujPxLrJUD9VUWHo54fmJAoxafWvQsMZcZ4cASkXZfQ2mn4vdGNKLEw8",
  "key36": "5ATNfpgdyf8iA8gdRQrZnsnU5DRBSsdAEMeDZJg73LvzvFRKTJgZuJs1sMMuJB9gQPWFE5MLmW634pQE4HZz46cU",
  "key37": "4h7ZNBo2G3cEjWZDiSkXE3sBh8qR76zgxqmD57vkndcv2havdrhQFjWwfTG4ib99aPPE4mmz1FBctuRx7BQ7PueD",
  "key38": "xaU61sBJMLQn5XfnbaPh64NAN6vFJgNQJMTtWJ6chXrWxrZPPEae4rzjb5ojwMWdB8J3pDa7iGRbDBpyz1vNE1W",
  "key39": "sCBDRtzho1sDawZTqd33VVZmfk1pxXiMk84ZeeaaCSVDYidN7UnBoMS9MfU1NRuHNvfzQyAzfNNC79bAqNfmvjF",
  "key40": "yiApGhiDeWpUhUQ4ReZdPAZkU74yAALhLHecLHjyqi7h7wo6FVMrkyDjaamp5kU9UnykzfbpDqn4XbTu21wDExw",
  "key41": "5csTz3CuGY4u4coeZox1JxcfYuYRoAsCUBA8bvuSv5BDEc2pbnJ2fETMVS11BQX83PnEtaxWWWr61AGMFuopDDW4",
  "key42": "4TzwnjgS2WTiXBmNyxE7iJjYkS7i5BLG5fsDTk5MbL58pRf58W8z65aahju32WfqHgPnMmwUwgxHTJgsV1UDLdLF",
  "key43": "5TALpnu9TB4Vk94QYDYQTZz2QJJF1vj9x51mFbrgjcYEYGvdJejLCzVQtmDPB4mwc4vQFUv5T66CRX1QG8Tscx2E"
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
