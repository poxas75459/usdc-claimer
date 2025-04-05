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
    "2eXq4r5sHLAeGvrxpBa6ACYHBD8kpDBg8n4M3men55BB3GQb7zpafzEzFuaWmBzVQ5xmypraXx9Nkm5Bqi7WmhfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38uZeePoBedxa5bBQUG8KgG8zZeEQTaMuhSexiwfcMg2SSxZJVwdcyjWv6DU3Sa2JMUs6ox1fXN1wvZb6XfzUEWU",
  "key1": "5oWgwSkNHd31EjwmUib2zpsfYLvEnvEpuTVEpeZUbSho42gYycw5bWrysK5Lzz6qRmZavfVzZbQk1dj6jiiXcctA",
  "key2": "5Uxcpv3p7DLzPavcLWrM8XKNhjcEjm8KLfEUqHwrwTYPemdEFmqsRxioWRJ8p7oYoV3iSAFSuGF91tpgCfJmEZNU",
  "key3": "4yEkE8gxUC3ugUh9WUs1nhikGKHWQo6xCwyMCo1ooMFbUggDbJqC5SvJzL53g5XPopEDpJpjin2HYM4PD9NGgzGW",
  "key4": "2xnWJ2ADFHaNyAWjXHb4Y2AX6gcGdjg5gtUk37vxb1YNnvxYKkJXmpRxPWJtvMnTJANRvpR8Fe5SyFE5FhG5b7hz",
  "key5": "XzUQFLNSsrzoYqaXmzZ79VYRMSYa1MM3fCWhsuG55p2cVMb6m8abRm1Nydx6DEZqGvLgHVeCwKRw44AdRjqYiJF",
  "key6": "FBWBHrJTjJJZmDk2AQiXkpP7nvk1kDGVXQ1uswso2CtgtTaNTGJM4iaY7eZcusqXitZfwP34rNuTq8L2Se5Z7CT",
  "key7": "5FBmSpvjYifWLJcw9YLJZaoLmMVp81aS3bU6xJ7eqb1NCAwWpt143k3TbgwaCwJiVGLpDgBj6x4tuor2dVriMBP6",
  "key8": "2kz4xJ8A8mvvPDkRYXuoLe4NcifYhG63CAb66fUVbCvVGjoPe8nHaEg94mAg8CRd8a3kqRvMLDeoW8ANovo47zms",
  "key9": "2QAo2zYS7RRC7MQpiRwYq54zgjrirL1rStvZcofHQjSrZeL3KFMZ1X8ptitjbrbP71HJwP6JR9g7ap4RbkYmRNGX",
  "key10": "4RHBvsYZohzXXrW4KkRhY1KPcQ66GNYnr9LJxMwRirSix8sMcjXthqshDJEBQiuw8VYsSRSMUYmmAC4BNAu3W9DK",
  "key11": "2VZxHcKVrwxuiHu3XTbxbgR6ia4QT1Fuq1AhnGF3PcssTqZLopKi5pg16Fc7u5RJzvpXkHresZ8BMQfw1xSEJNZd",
  "key12": "55cspkLwPxod1Pvuho8mdqtPdog29pLi8Xqb2FgcA81FB9igVAFpcrdfvqziYUhTMYCh7rBNsmHTaWHUn59bhR3z",
  "key13": "5JCN1zRgCLrDKWq6ueYNjvBgJot1SA1fZXpFHpwHDQaZCtNrqTFy42MADfWgWFMb3pVkVKpfHcMeTwRo62tDNWAb",
  "key14": "53FKGgCXGhaNdqZfBJVHmEV2iDTct1GyhvfYGftaocJdjRcN9gS7x3VHvpQfWMUs2YYEYvGnAQN1rM8n841rnpUG",
  "key15": "3P8wRAvdYWuDxmhvdDU3bgYJbC7WdsW38W6EJ2nMHsPsFNfcZMGfFh8nguN9f9zwcgxD1auRzZ426bwyvcYoiSeP",
  "key16": "2W9AdYZ3X4DBPVipqAEjUagVGRuYmw7rDAUBaEzbekKdZMygG2HWZbEzgUz9Df7pYHZq8w7VsjvngC3UAok9Gxdf",
  "key17": "3bYuNnZ25unncYT5mf5ECLDFB5M3yaQwqMA82bGztNKKv3oCgrLzvwNbkjdzq8F61iVMqVmowta22bASUSjqjvzg",
  "key18": "2QNFuAMdRh8hKqurPiDdjkanysLCAH8FZsRqGm9phqDBqYEWhMPmEKgd7s3mwho7LThiw72EVgFKXqyMVL1XgC41",
  "key19": "48dCuUwv8TxHw3uHVmrjnzNmLLCrEfF41V1gySrosMGWYqgXoWCgXYiQibB5Jr9DdfnURjY5HPK9ma2HVpdykehm",
  "key20": "38m9KFekk2YiTVeXnvrLRi1JR8253mUGjnvrdeY4Dqw343Jepfh3DsWN58BAmAzNUaQqZ2NjHKo2ZK9xRjDSffAG",
  "key21": "4HFC4YTEoBw81GGMPpJ9FjgsbxCvye9QEiwntx5tf6sL7VddTgS1ymfxgGbVVBkyy86gdpAYQYqUNCmdCCFoRkFH",
  "key22": "4eKNaSNeZmFy6MU6LgpqaoD2qyQCDS1ozRUZ5DSTq3RA1GtchGeCibe26dfsddEwQjxTrFd86ZXSyPvThQ2s4MfK",
  "key23": "SxcSdThkobPQXvqtKTvxsbkW6CNmrJMcNGALrATfZTJfZC4KxUVVyDre6aiWbQKeTiQVjaB2bhE38Nz1U8XqJKG",
  "key24": "38Wt5LBezcb47UaBtMHSfNZ6mQGbHyyksd7Tu89624JvuDLUcPKMrdNGo4mR1vKzYMBij915HwK1pH9dNReeNN9x",
  "key25": "58X8kBf4v7TwjNjK5SfqVj3sbVQ8oPsJubNNfphSCuXJghH6g9KCyx8D5GE7gfYDVNE8bDnCw21CrVoh2DW5oSDE",
  "key26": "2svTHWWcf7D8z5TwVGV8VW9gSA6FXzbdeAWbeg8QFFM71LkwprxprGkLdny4hiYXe6nKCPQMWKn7rkZBb9UV7AKM",
  "key27": "ukA26zQ2qFN2LaVTESgJtkT2ZyxnRP1Psh4Pv9FLDhMQY3PtqxEKB7QzoAsuiP9b6NnnW1V5eRtNGWLjrd5PvAd",
  "key28": "2JCy5piBmUuu433N1GerVPCeY5qnTrYV3cidWnNKjAoGKUvyKUwpf9CRmCZwahAFMgd6jrhH5pFmpFFp7WfJEsLV",
  "key29": "3V6GQkXHpQb24DouFRHgQJmnAazeXCSmcKensWacEPTtTnh637A7a9WHjVHAm9L5BNFQs8gjVZporQawcEa7EULW",
  "key30": "47N6g2uKBHNN33xR8s7NpsEeuYGRk2cNh4d8LB6a5VPgwjTxaZxbNgGn86qZbgAGubhjomRNXt2rLq5P9cW7AHiv",
  "key31": "2tQ41cSw5EDBJynSDMUgp2kynoJmzaQLxZvkVExAMisg4muxMmYFSiNCJvvxeE6NDEAijr9bZTwcBeCkRL1DSYWy",
  "key32": "64RncWBNdaW89HRUipNNgTQjcoX2tKvQZ5Ao3ojRkyc4vBF5r7TNJsFzHx2mWTv7u25kCjX8eR4BSyZXfHsqTie7",
  "key33": "4obvpnMtFDzfSKg2Dzw4DoZqEy8ahvbawzoz3Ky5UTm6xpkBhVHftzq2SjPoFfeaVVXy7DAkScDGFXfg5QYyubv9",
  "key34": "5Njjh6qY4FpnPnZpz8oYaF985WcNKiNDXjn64Ws7U7DvzECVBSnjX26monzy9gvytwrXdVk6x6bXr1BxkhqQrL9L",
  "key35": "k2mSHcdpUazdJE98ax9rjasJSMozkGtAfLnka1ZTgmzs4xwpaXeCRT6SYnANTq5jG6QbCh3d69VBiqQh5pme1v9",
  "key36": "4pAPX96sNzPeKZBfqc8J7XjMYWjFLuV3CaFS6HL1dMcB5Lt8h9b61GWW4ogAs2q2HrgJGToH69AnwGMPNvM6JQj3",
  "key37": "2Xw8gHcSte6Q8UPgKV9HjVXsxv5sosgoMwR5kthhFvSfn6s5qSgqFfc5Pp1THWGe2CkznAg1JC8MW7cobvH2fHXZ",
  "key38": "XBeuV86WXmUPu5NQS4uDmhmB4dRLyW4SKddgF9J15fSDJinJjxbN29Ss8sPHHNFM5Ktyof5E6avcvrxPGKcVY1L",
  "key39": "5UgpsDbTN7XvzKxxPWz7oM2xJkn6XMPezL8RrHGyQtDjoabvmKVcszJUbEJ5XrHVhwdi1MbNs7HDbkfsJyz75vSQ",
  "key40": "4dK4eVR5Nntgx5gfUTgnYaAjAHpS5Nbm88RejqgHWhnbrB6vPrRQ43RQKDTU7ahRUL9qDwY11uYjMNfbmsuiJ3x7",
  "key41": "4Fhs1odCggzS911fn6xHgVHr9zxF17zMQx3dvyFJ3CvjJGX5jLzCnJ1pzdo3Ft8EBBzM4qcReSrmRNnNCUTzXHGM",
  "key42": "5mhXWNUwZy1tHUMpM3dUvbznWJZYPCZhbjdTNqC2gaHpDKzroDUs5QQumSvHZGJ53bJrtKftaYgQrcPd2TsUxDNH",
  "key43": "26ogQ6bC2si5749mhrDqFAQ8PvFPiMczTS4JTB5gpBL3wyAYusF9G2d2MxDhXHs4CMspnVRd5iTydwYL9Mjk8LnC"
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
