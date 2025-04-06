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
    "5j4SGZspTFEv2xY8zZwGSv9yNiQWwXi9fVKbnmouDz7uad6cj5FP4gvrEsuxM6ztjfe6wo5PMtjFYiP1VgyVf4Kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tXfXbD4DdvPstTbokug2aWoKME7Q5CFjPA1JXuiiNr7ePrgKi8e4NzckqqQFT49161Mp4yZCoY2Eq5iRtfTyVVw",
  "key1": "64QmYF5ySzPcQrguaawxpiY4XjYJPbmnVXTwSpnFYLdSNFh4P5omAU73nWbHohoD5y3Vpikx6qthW2aECi8UPVRc",
  "key2": "3tQhywbFVnD4kqKPNdbhr16gFKLpNuvTGSi5CBoC2rJPa8Aw2z63q2LsqBfoLTWmHvEe6VNM3PgbVPTJ7fm4kqrm",
  "key3": "2xhRL8Ye1Ma6vscixuZg5rAtoz2f96y82h9JzhYaFhTqaw35SycLCQo2uw5VAdCqVhW8e39uncu6Y4TkXRww434o",
  "key4": "4AVn6i5jZTmhstsymman9aymMQfTn9zQ7dpZYfD7jaLL8mxMqx6pCB86qYfQahiAktKb6yWA38ydycUpmCo59NK4",
  "key5": "4UC53HqUyNxNLQgTiVRhvcM2pvjqTaCZmsN5dsrL177cYsdSWUrRWnQ2evcznHpHZ2UDjrdB3ajyfWQT47Ma5Pyy",
  "key6": "2NgcQMuMhdAMCoRt4XZvPud1ogQ85MXE153j7UxWynNh7DgvdTHogUXjuMPGiLXDam5zqgNozGsHZJcMgfNEau6K",
  "key7": "3mM3D6ZfvVDJoAPo1UM8PiXEqYupfuyfJ6aPPk5m77NdgspdNAkFeoTeYvuxzF1gZvuCFg9SGUuYRgfnDbm2Yuti",
  "key8": "2tT1DbFTmzyFhKqTn9KbSnLHz87W9CfYP9vtUVBMiHpJshsuMm6vbZaj8ZvDJpCwxWyUQ9pEWppmE1fAW8F35zpc",
  "key9": "J5JdAEA58ahL9MbJSunXdmCixE5QnbSZUMLmKPtnNxHUuknoFBaGQw2UuEkWCd1BW2RbbJA1jeTx57sASND37Jm",
  "key10": "b37bPwtDNVJS7dUkpHPUmLXWqYWjhhtQZLgw9pgD37Bcmc25S7yqTQZ6xK1um9rX259itPbSR9BygYDCShdFnHd",
  "key11": "46mctpj9nStfdT16UvP72wDF29T9hUCZneph3wZLWdjLy9qLB8nMS5f5WvQTH1Eo2j8UMw4pDkF5q1SyZbsYTePP",
  "key12": "4i8e8yfNuFPWEXCs3TC3dn9TAKN1uqBij96T3ugKosvyY9hK43oMQQh9ScfgrNREEVzi5vRtVsKQGT6VLQs5VkzT",
  "key13": "2m9PN5V7wA5inohMCF2h5qVSCzQGRotGA43LHjPGv9xn47eLPL4AwwHAU2LEyUkcQGnGpyUi3DruBMY53q47vx7R",
  "key14": "4Ps9Nbnvy1vSqWtbeCiFyQkF9aaj7tZivk4RoTsXT2c2VUThjT2yVUmoZDQ2S5HCKeBe3n9C1RQTC4zVPbN1X3cF",
  "key15": "3MEYJE8nyAut7awVtJ9soFH2BHqwTy4yALu67wfpyoFKW66TJnB4WQ7pCUppq8yHd2CCi4CUkcDYPXkZKKTUpp29",
  "key16": "5bLCUyaCvnBsv4iYK5rnqgt8Ky8r9fzDpw1jC5v4Kw11W9CMv2vnZ4EajqwNGPMwQCrkRtnG5biF22SF4At43aCp",
  "key17": "2QQDrXMBvTGVbWh5Bs2ZD47EjZ4BBhjesZJbLqQvvs2Ef6AwZnR76ZkfGapAotk3T4f2zL3AuNLwVeuz6o8SwsSR",
  "key18": "5qk2rr3ahumZfmLqausWLHzBQ2voW1CpTNY8jYxuT9c1B6dpFcZe87MSGgP7ntK1gspxJewyLzMSz2JVY1w7Pwps",
  "key19": "55YTWCbNFa57Cf76Le7yDYoZEvBW4tgapUnc1KgRfYEhZKi9Pey7Dc9qa1AS9LdQgHV1qzsJarBd9DSoaEYLb6Go",
  "key20": "4vkTj8nHTdzgyTpNvY4g2AwUCj1UvCyvAN4MboXEQ5SswLe3dP6cFG9cU7CKPpjbWLWPdTS9jGZGntqrbsMvQ5Kz",
  "key21": "5Kccdn5QTnRLJyK7xwi54dtj3xLSy3o489kzmQJVMJYixuJLR19QWae2rSyZ9m3hCfQcmtX492ckbLLxxy4khiu1",
  "key22": "3C7ML4JgyyvNzuA7YSmjmhq8HTf568rLTBampzAKSnhwUbqFXYrVbmaqTcxkAfBjvQev23ca9nXixv5ZnHqNPCLs",
  "key23": "3YTPBDJhvUcUUqYvgNoZy9WZe1hwAwBtn3sXgLtUAwRBo5EA5tt9Fhb7VCsgVCPokV3v5LebvTw7WvTg2AJhKZh9",
  "key24": "3LWj9gjJoRsE8FzeZyfYb1LRSasRsAjKKzic918E568h6qWzwcmamx2NGRiiNjxeWinUkEbUA9YVSJvFQYdZsXyR",
  "key25": "4FRzQdcUyA6RRSFVW8ihszjTDFYgAgc7MQys9TZku4tsnWkJB7JnwYih12iz911yo5EcLQw1TmBJuP3uVjTzrabT",
  "key26": "4drNjKGHdqNpZSYzJN1AtkZrptofQzMSCN3b7amk55AjhndxMVpU9XoCzcabKEP9FtPy1qkUbUFuTRfTHHvGWnfo",
  "key27": "31bMKGLr2pyz7eaJc42iDCtGVTfw1ZdrpiA9mWo2fYyTC3X9MzyXKuwB4ps8L5MPrbNtxmZ1bLHYz5WQpYtc27up",
  "key28": "8QwPosSMwSkZrV6yLzhdgyvNiKP4zKUy8nuZKKbWzk8t3Qeevh6JyiRbSpVa9B3Bq2WNxRuoQqQ5vMMmMzjViUK",
  "key29": "5mURLU4Qx5fYrtYbCt5qv2FFoYZsr5dgCgcHeXhKmcHGwQtP8KG69Z4kqcn6EYtPpR6ekHy9ahshm5sEDaegEQmA",
  "key30": "65RL1TYaGER8X4dBV2YGjgNzvre1k1Gs2KEsVjzNFS7e4vhEzV9sFyvLCWf7esoM82wq1GMpW4CGtgyytERy6L3U",
  "key31": "4M6qnujzJ45kVDaoVxt5pCekbsEx8jwLK5EqQper3P2N1FwsDd8FM9rnEPckLoDA8aKdhqmDMsUU9tACkKnadB2y",
  "key32": "P14zfPQEUgfoE9eb8XypJwd8U3Sr8vnBuaVFUGzQ31U3d9RvhRVBXTReVfXcv8uC1PX11eqj6q5EAjJzpB1yAA7",
  "key33": "2ydTbk3HptSToVzqu6zhgXZ8Z6bTQRAUBgLkmzRwjBVWiW8A5xVJW5fHZ4UjdmNjKXsWhRDEkb13sBK9kVXsEjYa",
  "key34": "3UQNxpkppuPHTzZynuNVMS3aESFpZ3K9oHTe7Ha7irXZZJMqhfuHHdThGNTgAAqKrEJtmrV5EQms6rm8B5DgS273",
  "key35": "RuBom8eXogz1VHvD8k6oqhsmjU2BzSpT3XVMmUzzQKRdNXrCdQuCN3BvPZm9uqj9gUZWgeLD4RtZaeCwU9iUqJF",
  "key36": "PVvrVvqRSK9NYbABJrNSBHvJkv4tECwqw4ibyDbE2PM9omSSA7jaQeL8JJqXu1nHffezy6QAynHdYt5G1jquoue",
  "key37": "2ispxSWXCkqeZqFYM9hfvfmdcrPk2Y2Z82oRGLi3jbDuzxRbYcyu97rnRrTS7qojPitzLVJ5TnbZVnT1Xra9fiJV",
  "key38": "2fjvvbn4YMZ65rk7eNctwXjyY8hZWBVNtRKV2UVaxQeHPCJLJgLHnryXvRoFP62kx3F5wwYTyZdsAVcAb9EohRBc",
  "key39": "3PfowcU9MEpXVrvwy8tXSLRoUiWN8vcXpZ5JuXWP6A7au8fC7c1qqnhdM8iG1YQ4maEcq3JLU4iytbJLZdqxs8ZQ",
  "key40": "5wJaikoK3KNGFfkTQLJ4yLzSVcMUm9zJprAv5x1dxRJALsA7a5gec4MY55hzPUJFAhvyYoDSCsUFdQC1MGrSZe9m",
  "key41": "5UqJpi9H37B7y3WgVeodc1B3FcyDJje2QRwYozTb4frLNuQvwZu183SRHmvPZ2juLjU5GSNLRXuWRDUg4452Y3zX",
  "key42": "44JTU2jTNY3Qhvdde5XWSZgbQjjuHmYUqJC1YZVCiw2XuJ4JzCizxC1rPwFj4r1s6X2WzBJvdCp9hK5zFQiL3YJx",
  "key43": "5GcuLuJMRHUSJY6JPZ49jEsCN1RxLNJ3FU7dZd1yuChqDaxJiQh5ui3E2Pr4kHQcpkXxX1Yr8tgdBeBYTmGbUH9w",
  "key44": "2CzKVqTRXDDMDMR4jDLUT2asH3UhSW975ya3bX6gwoMupPnZdUNRp7Vzzia3azR6QBjQAJmHn5829sDwJZcCwtFh",
  "key45": "2hKKzfhCHoE7sPqcbZMcqNCYrqRcratm5FYULndFtZqkv2MB2QVAtjr3PtBNa8kqc6gDJsbjimzYQ3EbM5aMjZtZ",
  "key46": "4EhKJedTgbQmXRGURnGUJCFGGu5v9ctJA2ATh4Px7SuYrcPgc4SASu6VbYzEJVZxv7euHC9kgxZffsZngbNpTBtg"
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
