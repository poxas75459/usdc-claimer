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
    "4x4CNgH9YAd9AE1XUW7fXwszSyYeQtQAzmRqzKeFFRHyAqYYwiQLpszLH6qLAzKRPNkMdWmmYDSDnQdvvHGoyXwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1HHufANF39rpEXG9aigs9PsKiy622D47E3giJXGXNJo5chuPYuX5NgHXB5xvLcnapPWFiCPCuCDZAypJhajXwbM",
  "key1": "3AiDYbhdGeJPimHtVbEUtLkYB89es4KXgEZBPdD6CndqTbwZqigPUiRiELgDFghSZcBymuHqSM7DWQjmNRwKzXq3",
  "key2": "3joNaXT7FmUCPsxF7xtX7bh5XYK6PggVpVj5WxmLZcmF3UWY4roV5JwzS83MEawFTLgFXo6n1AGaDs3WmMCzzNud",
  "key3": "5mCBGi26KhYrKosnXURRExfUMLS9vZdHJNLJxwszggBbRGTazJYy3A84oKNLt3ZUCVQv8cfVvGR6GLJJCnoqd8ei",
  "key4": "3JRkUzJkY4vSf37etAxmBhkP3kxGpQJzGaFMM9zcs2GYroo5vGq4gLYBCfNhWvfoHC7MG7hpCAaVHpJydRGCN7Nu",
  "key5": "2DBAnczh3Q2MfNAhX8XWP9iVssk66pR4y46Tkhc7gnqKRF4QUtK387hTh3f9ti85obeVCRQtikVnahUKp2U6TprY",
  "key6": "DCKtgDHNikEKLVnDXWfoKZHRiXYUGvd9TsrjNWrPXJzyh8zngBvpEEVJvHRRjsoDE2aXyhbszKT3vXQfgmJyFXb",
  "key7": "299auMekzHBLKuN8cfMDYQppisbMYpz3zUjfMCxj1AmAQf4tCp9mJzayFdNedZEK5Kx7n3UZk8AViHqR29AQrGQu",
  "key8": "ZDa6cMRHJMM9xA4KA2Z4oGh5SVGCv5AfXxZ9jENqj2EFg7fYnbPWMvuGZKha7cXDhyiJSLhzEitPWyCqVSHPru4",
  "key9": "5CXCYaNzzjmgDtb6kvBnNfDjdB9fwhuPRBnMZUJmvcNGxjg7gBxtCagsheDf7gX1idnXLkRCSHD3TKegyfTH5qRr",
  "key10": "4uPicnZ1tmRy1mExbGzwRDi6i9JLYNBjJKqQxVkGkXBEmRUwu14L5wY9bsCzDHy7EZLECsWgMiqEYZR7Y2cpTUxr",
  "key11": "5yEJGoT8a6WeVaDLqJsPPRGxJ5jc7vEtJTFuENABdjbx86KxipcDjsVX2FAAHHTX7veuKoWpBnBadF3iqQg3EfB4",
  "key12": "8uxg7mjBscyWPwbcGTBsTnwXUY85JgRw1Un1zKkbq8zjSb3kRmXeVFBXUnHMudPVVkJWtB9XyfakfQwpVkQe4Tn",
  "key13": "HkHmPKP2pbSSefheQuuNjeG1g7tWYVZJ516tYm97Kre26WwLECtyrbswL88s8ZD1srPhgFhk42zphfpUtmLUtsH",
  "key14": "3iG1PrxwRFKTjQRYjMnXsBouBT5RCN24GtYBHWJQPrtrAaennwNji8Lgw9GPwps4H88AnuB4tNT4tZ5NAQUnAC5j",
  "key15": "5nAWRDatryir83q6twNvaVfPDM5fg4Cd6Kzb9HJdpd4YgTFEFAUsgZs6tu91jMaBbrndcArW84KyaDo3ge8htnZ9",
  "key16": "5UmqiZ6ADu3ny54zUm9YsjBeRGvkMybys691ApRobqo5x2v1dkcQfkaS79CNew5rQvCHaaLL1mUrXMP55ZYEgvrH",
  "key17": "5g7L9heo8e9Kc7iSsao3kizbPhbFMQVW3sMTJm42sNpQgkNVLtVkLHYR1VJ4bqcJbqZqzpGM2VnS2f4hJX1ubR2L",
  "key18": "3zmSexj6Q7JTbXNQw5naMwhvkgCb3Q7msmYZERGMo9AztpYFaTKKAaYXtiCoTD5ciAzEvw2HP4dx5KNQgazm3HeZ",
  "key19": "2nYaPp7Ad12yzBX3kyB2BdC8y1WvwuVd8moAjpRcHnjgAu4rFoJGH884qFrpzj288XHeYGPNAznySvFUcaCovbch",
  "key20": "48Jpndc45gEHKHzu5BUamwqitxsXZk6wb45oyXNX4QwYudpMy2NmvmR15KzCa4QPAPpyrmoCtejH974JkFnsTNdv",
  "key21": "2qEYtH1fxgXP6PCPnTksfrnG7zL7W3nTewtgKZmsg7K9yvB5ndMf2V2Q2MF8wkE8w2ceV6DnMAjtPGjJDosHn2jR",
  "key22": "3u9Yf3CJPk5JQenCPqnmxKaebLxFkcPa3kJwmHuVLUY64XRLvApMFQNXuMcSKd2Gfq8zqAjmxpGUJ55iy76kUJJU",
  "key23": "2ZnmGETRBoQ4HnANprhzRBGaTpY9jwZtWhA7ykiPzfLvpXCm8XF6sgkCHgH8cRCWk1YAvvg8pWkx35KkY4wGESpo",
  "key24": "28TX8z5kDrUBEh6AMfiVdDH91WrDj6PqR4irRT6FxZBBun8D6RkvAUsrEgdhPxWhk4tzztCL41dspDXf9taQNMu4",
  "key25": "3fFC3yeEj5LWWSLYQ3xhCzEUHG4g9G6tyaWNnRYP8ej7GzL2B5yCbnUR4WLAaCc6VqV62FEWZqGckMPhm4Qn2La",
  "key26": "2JBc8eeHWYgBiEjq7keBrjqwrZzwsrsR3eQ1xbar3UfKWU3LUDAGg44tbuwShPbuGErsugtp9RtTcWuUCVMEoshg",
  "key27": "v2Z8WeJi4odiSnv7j8XYa8qYEZbwB2zeGWvhzVLadVtVq29ndb9nBHsjJtteKQQ8WuPdGq1h1dCMSXNEjBHCZnR",
  "key28": "51Aj6dnNv9uhTGjGuptdMzKyL7JNYY3VeL56MqF8NT5HQmGR2FENfVQUhvY8qURgzFU9jEhVoT9KnnDJkTjJYMVb",
  "key29": "525Z3fAX9pu31PVmxpqhLNmWxzqPjo28RSXRsvPgqB9K88ZaTbHzrh9Me2f3zEVSv4NrRYtzfc6WyugQVB6Hqmb1",
  "key30": "39rry7nDRnSbad33psThyvATTjeFQr7Nevh2AbFRF2HXnVknqUcdF6dEvZD9dEhFHGHMM2QjPrFcBnHVX9pGDuSd",
  "key31": "4xdPzKGrxNBubxHXmCD3P912BVpBkKVVHihN2EsXgNQUjF3mqr7KRExe8pi6gTY184a5tVPvb7RJ83zNmYtyXnHN",
  "key32": "tqBMSQ7sBK9Ev8Fnzqk2mypeDK6CDf98jiFkH1dEWQ9FpCtYSA2hJwncvC5k6gmcQsYZzmXFKNbk5Rmy1juF5uW",
  "key33": "2DuHvodJDbXz4ZVjdta9V1p6QjiKN4XpLPSUHweAwqmieykGZFmfuwCdh3CgPrFidsCGwM5oCmvcdhhK3whUhFuN",
  "key34": "3Qo9zYJb3uJNdhk6SR7e2ETzV3pMiPA4xCxyXEdqVE193Hs8Yx837S1VRGrzXfJGrgNDgNzmxhy6LXQfAqRrwM2H",
  "key35": "G7Y4MtWiPhV3odyVWorPktnk1EuJDkM5dQ4frZ6KqJTMF6CxuRZctDxNYdfBQczm3FgyaEn3wrdocK8yEE7nScE",
  "key36": "2RhbjcimXLR1nM1xg41WL5bRkj91pbxf1BEQEc811FVQ8RsmV95kbNRy7ZJ5hhXwezwzdmQNkX9rWDB69yZmQhjf",
  "key37": "5BmJA5uPASzQYGWsMtu2PBsnME7NTk7PwyRZmHzn5mXwZ4XPQzcq97DiMgyKS1C4P3KExbPP49XVwBEXkufsUCek",
  "key38": "Acg1E1mskYDFNrbavPrHygdhAkdpLoBLYXYNXjWkkaFNdsobCepKVZx3rx4H2FuahD9qSQDEt43k5VfeEX3VyNd",
  "key39": "UsuCMHJtQPqbUKyi9WRMhTbLRfv3GiGDscHWv8ZgGbVWsCAjm2JCrv6cqsq5qptBafZhpVTeWPNyCFMhg9LKYfM",
  "key40": "3iPi3tr9iv3vDqhKvSvjqiht1G8xaHGcoSYdCng3dRB8AsQ3aNqYbj8q7vG9eiRFQFU8iY85YHxQKnTssGa95hBK",
  "key41": "TjkNK8xtHjqhTCRJ6QMqiWFRkpswQRu3yrZx1xDiMtcSntVjScVW1G1JfDEJLB7zRQSp9AJsxW52jSyGWkZXNDq",
  "key42": "hLzDqJn9XSCrEP8M4XuR7pjaMLQKVKVhn49srBv8rcE19TVd69tB8TpmEcDERXUm66aqCnyTMr4rRTebf2YuXd1",
  "key43": "5HjC133JEW6fYG55LjNEcqpExoP4j67PuARfDcgc786gbNmWfEZrwZHj7yrcC5X3iwbMjhc6giysiUYfT98qKSN5"
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
