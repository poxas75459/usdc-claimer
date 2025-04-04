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
    "2JRQPdheH1AVMQjfytKbMjypqTWhtkhuX6KUGv4DxYz1WxkiQTxTwJVi7gqzBGDmy4RSrWf8t7yFpQrLTX1McGhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x4gGQUjLVdsW6VLbikntsFLF2VrdnaA5NYaHkrQsTaNsvgPz6BDV4hDmNiS9FisjdVDLQTtMfvirJghFueT2U4t",
  "key1": "ZgsLJxt9MYwB2x8iVdAZhqDfnbfTjokrGy5vTBWJsrmVyC59PzTdFrgyMgr9qqPttRnGz1D3bT88LPy4ZfXfeQK",
  "key2": "P38ztpCCusjHm8b595eYNb4vy1CiDJXRdLpAAUVCfu9noWvqrQefMvDZZVpoQ4oCVK2uUW6pRqExdMGXXyj11CE",
  "key3": "3iRfykCgbrBFVuhB7Hrk9STz8qbE9KBEEmzJfFJfxEkTNEajFcYs11D6uyXRWrjJdYmaCNvBFm8FsqrZ15uvXY1h",
  "key4": "5Egb9VeLBuxsnVjKyUEBNboVKwDiTsKgdHBAwLbR8oQZ19pz9xyqWsTnb3AezDTRVyFpPQ74ZLQPXpNGQWSHRLae",
  "key5": "24KK94W9PP6BWF1FNoc1CDhFJoNromq7DAesSY9HdpLhKiXmBfy2HM1Knm68zZSQzdArZJbJGdPCV2iAn47EZpTc",
  "key6": "5BUYDz69MG58teXK2FAgroH5fnCnMB4CJiTPtUy2BxapNjyZdKKX5omZU4bdUshFvXDpKJu9BXBb3ZXywPVX2Kpu",
  "key7": "2xW9Ne2eVP8j9mCpDdu5tZYFNh2bDtGk5G5BttyV1f42rkj7713FpvgM6oidoTNmpA1wQGVpvxE9yxATG1ST1ayn",
  "key8": "5PyTFsoEYxdFKYguwdzebHC1eJuGLNcPi8Tr6paRSKcfwyXqpR12zFKppcVkRC8PJCzDZa4vNx1YxUHjL4s6BwEZ",
  "key9": "2AVkYF1T266uw8xzVDsack9Ch6AMYpUAgRU6P25Nfanjrpn2Jt7khoCg1Low66WyL7wg8sZqpXWV96mibdauHQmC",
  "key10": "5LmuThpc3167ySdNHKZLJZfFoisX3LtfPrFG6k94ZBMAasQDBn1RVHysJrH3oTuZgHixjUYu1uupVTy6Tu57Dohr",
  "key11": "4ESS2YQcMjWBynZUt3hnKz4YuoDUxxbd2h94u3aJWMUvhWY4yp39rixMrnogMMJjq3SupyYpSaTnbVrbkHyChjyw",
  "key12": "46vev6ZZiQE1W7bvsCtGQw8xwAL3S52a4f3wrjydT83D14mcBN9UWypZT9As4pezNauCHC7wiWJVTmFKL8b8Jesk",
  "key13": "fQF5BzPawRnXR7W3jPDqbMciCpFoCqHtH1RuwUNCnV7T7GnNTbvVWymy9UAmgmsSHk6gCixxQ4SAkD99jUv54tx",
  "key14": "1ss8Epf79cQvt5SSNzG4Y4JWZs9gF5GejALTUyPYE1Vxm16EV8fhBvTaVx8ksr7hG9vfosTKMkmMd8uCFC9Uo3W",
  "key15": "5YhZAF34eGCVeTDEs3ScizjC5BP7znSJwBXU6USQqJdztcyMQGhoxFnRi8EEsdiUqNMFUutWk1LyBCuEAwr4ygHe",
  "key16": "4jX814s3HqigWeDdmove69z3fhT9RGbeFcnUjPtk1rdemKWPKkkAjre5eiuQjcTtw2K2YeVFWdDuFKZFBUshAsiF",
  "key17": "5tVBDDnEW2hB14PCpXW9WY4Vvgf2RzqbNqXSbYdq5g6d8iFY2c13WdDdsjcTTgxuA5fz76s65ouFLQ2cBUADZEmw",
  "key18": "64Ar3FwAM7uF57kDvTFzKuk4aeiECZnbH77Q61x6jawS35V834NE2QwcNrfEynhYFaWXYkWpWTe8mdhU5R89FwWB",
  "key19": "5niAu4uFDYbeHo4mqkK2Fc3yLzrYAxGvV3ErHU63jiGvVG1XuSHisC31WTvxAWXedpSkm55vcB4Swj3fn8PRLFT5",
  "key20": "3e9XZE5EeC3vxyL1z2cuPDmBdiZ1S27bPnRsQY1h8Bbrpzyrm1EVakcsk5SnYbvbUPKUNkwdAzh7FnfoTnjCLu1J",
  "key21": "RG8me9JPon9pMj2R2Ed7Bhgx1dWpuj4eva2Zi8egQrDHiz8Auf6SLx4VxRADqpzCD2oUVJ5quUVtuVRqCBmybxn",
  "key22": "2Gsd5AMkraZ9xSDGCPha8qTYTXtZAPNamKMFiiw6vsZFpxkza2tvfdQv51zACDYWN1B1imWMdudsjMQup25tkg7K",
  "key23": "tosCEToMNSgmGsQznfusqbMecYAfDzTJrCewrPjVr5KprjQdabz4BziaEV9tbbs8B4UDThuxPCSuZ1NsmQiZvj1",
  "key24": "4YwgbAnAYr3gqUthcj7enBr4vh6UH9CGpfgu1PL7JhxnucTmQRbK9EXXb3rrn15wiCtjmi1LHGDiaxodok6KckPE",
  "key25": "2EQmCB4C4UtKrVy6MGUj8NnPR7wP445cKmwbdrv1jtMtaD3XvdbcEkuf6V1oG6f4FXUhQLyHM66LYkzTjmhjKDt6",
  "key26": "2Ay9N6KwH1ErGi4raho1MxZCJr9BhSVDALZVvXP8wrE1NLT5GCsnNdkXbq1B69eQp1QZW8p9Cm3WXdH4FFL274Rh",
  "key27": "4fLHNqvZPm9LLECMER5D6QE34pWRteU7v8zuAt1MfF7YQ4mXE1j35xq9BJd3yydQW5pbmVD64TCxo5DBwpB9K21c",
  "key28": "4gU3BtKyBDJjDV95qw2UjxDEobERBhng728QxBUx3mbzQTVnc77Hy23Y7BBhq9iA1dXNL88nEa6FrXvvY3FhzEht",
  "key29": "KoxQMnuhR6S5kfbTktqnUBdjPc9E5FS28JHdzAugLj2AgRRC2LE45sJHCFguqQdsVkvuhFVaEdhb1x4XEDpMLeZ",
  "key30": "2pG6KgLaAq5Fg6cWF63fvL13PsvbEwdHkhTnUaNRi6QUTGfus31B1VqCGooWrVdXkfBDVth6fTX3B8YA8rC6UN1Z",
  "key31": "41MLNE5TN5oVa9n43XNnMHGvXVSvu8dVQ6AFgjWTbPC7wEpZNjnAa2XtVF2sM6xW1RuehoJTGvFhSDsuYiDrQmLg",
  "key32": "3v8N94kEhnYZJh1xCqw4YxeFcYcBZiyXzuq1LRhfgTWL1MbP44uihjV2MzGiwmRBQyUYCTXAWcP28CQgTyDsisSB",
  "key33": "4RSfnZxpee3P4ppoVeHBYVTK3zCUApQHGajkGzGjNutA86cnNUKwKYcuYvDgEi3Sh2zJ2BRshA1p7nQH249op3bV",
  "key34": "QHh8gXu87Fp9Ztoxv7QvcSxDZ84dfx2WDMSpv9xaQA8YvHEDgFdtvT2P6ZxbcLoBSvZCNTUeaFLvsxcdqB1uKEs",
  "key35": "2wkGTTDzQzfoWfY4P9kT3sH5j2LAu9Qae1VqDsktwkLjg3LygnzFY8E7hsjn1jfeooVJYuE3uBA8cCJpwtTdK7ZM",
  "key36": "2La5FW8kUhRvGH352BDJXGbVwTnjcZitVgsFfv3YCdBfkqPqdJEfvsJgf92uTXoDyKr2eRD2vEvm6RvNA9YL9qie",
  "key37": "3qWbFFgVgySYwap5HtGWzPH8iEZRHX31LXt6PCx4tfjfzLdGkvsk6f5zXD9fa2VGzMWpcdGMnFXGrRtbBNiQWaAp",
  "key38": "79r2Zyy6odYgfibzQgnrFQK5BBa7tX4Q813ayXjdPFFr4HCexmy1nQs5ZBkA9aeY3DKujahkgDNr8e2FD5N97kx",
  "key39": "4sMADp6doJUjWyHysCBVXHzzYpwses7pKtvkgVTAGwAGPV4MQsSM2N8t51zKYzrMv6cdjEFP6i1g1mbvDwGvBhdM",
  "key40": "2uZx7HGb1xFe854Fig2fx6fgMsb1vEizs7UNofeUnEmn7DYDMyuJFKPMdKJWWCYVor1xkQswV7SCfwwxEpATMFH5",
  "key41": "5Bp4TZzebis5JUESZS8ghZUeYWV2syYEfbqGYg3pGzmmN3Aen6ZBJXQqyjgboKFrFqEoeUUWB4h1NY7eLzTnn7rH",
  "key42": "4XTdhx1qijiGaVQfwAksGhpbA3U1S31B2kBZijRg11jkzaHn4xRnyFep1xQ5D71R66sYQwofJkA2oCpJ3ZGb22LZ",
  "key43": "43Kn4ua14nihi9gEe6EPxM9kBLnfawBSgfBK7e4YuL8VtJFgA58ETNwEfza64Bg9TvYGmNvLFtvn3YxrCdcnUZ7T",
  "key44": "TaWbkiY3EXU42AVaoFttn65KsuzLdEn2iuuMGzqTeQMuftevCAZDCfGheJ4FtDNAKaDUhUAAqNDhQDm2J59YPDi",
  "key45": "4BuY5mg1nGt3w7LoEPf3qPxUd1E2BtLVZY23imh7TPehTpVSKoh9bC4EV5GtH46ZfNftQBZqfnz3GkXUywUeaqVu"
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
