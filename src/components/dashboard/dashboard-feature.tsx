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
    "4ijV7oJeDxXEQi7SGSubpAmozjdGmHdvw6vBqGL3fArpNCSrsyoipV8t7xkrjHbcJQhvTrWy6w63E5aGrcvYBWDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FN2gz7gNRwKy1QxvofvvAsy3XUgUYtjKuCMph33xKoJDvV7EMTEosXJPHZRX6H2zZqbrxyC9deSxxBfcEW28bkn",
  "key1": "36ZJ6vb1YhdDJynidBBvfZjpyYuCCDvTKsS6CeZNbEEzWiKVYQbLPv67gFVHjJeEY1WdCsJpC8GQPpu8hoFZqNc7",
  "key2": "3RoFDQmMDuPtKCyXYUCm8Rwv9j9KzZREXj1qb3397pBm5XS2HbBMzeXDAxCAKpdwWNmpNiN6xwZk1in7xHQtZ545",
  "key3": "4ctyKQ2BSbWNokZaBDqbWypd8sv428AWkTgDGzLt4YGGGKEmpyXuvmFKzYe1TjS9BhaN3irWoqPRQ2NMHfX5xTsf",
  "key4": "5BD9Wy4ZLQ2fU5gVzH7yAnQcssx2M97u8VtKku7ywx8TkAWY2qiaXfWSfaUBzcEGACsVBg1HNfVayyr1ZfJFhzfw",
  "key5": "2Bmu1aX3dnAzzxAoyedu5rn2L8X81uJMfvufSQ8BU6ZgfkZHi3hn7ZRDN5SNS7GRyRxb87HDGwSy7NN773Wf5kLP",
  "key6": "3wDbRTepgmmEK7ywiUkf436JFAKKPqWd5xKiHDaRcLMYTsdizUv5r2DCE5vTJjJZWmArYkzALKbvDb1AMD2Auefm",
  "key7": "4Tt2pR9WxgkdcZF7HGxGQqtiBjBte8aWfri581n5MFbFaX7FQnLt8EQWpsizaU1zinysosLCyS2hRsyujQQSwkic",
  "key8": "4H1dPQkrpiWNXCjANCj2TSpr5yLiNNsVAyLXBgh2c2RDKoDVAdyf36gAf4gXw5CqayEHZ3JgFyRYGXWnJrET4LUW",
  "key9": "4CtQRJZudvctLxBG7v41WWqNmti1MtFbC1SMS2WJstaa8rbP784RpUtrmFXwnC9iR3nmjgYN16TsGwK5suguGMZ1",
  "key10": "2Yg7gKLev5iAbywcQTFCtPR6Yk8fUNbVdzQYTtGaxwEtsUxjdKhoSoWFT3d8DE29iKrG6HVfmURXKZ6VynkRgyAC",
  "key11": "4ty6xZ72faabSphZLZNffZq6bnnSyHk3N8X7FYrEDSoSBeA2FeixKdcqZcpHGAs7WgDquzkYvTXubDRpKYYPUC9L",
  "key12": "WBxJJDX3YGpHAHnGBpC2Vri291KFvNQaRXwPG7t5s36iwRq4NeGoGyvXFPdDGJKGKV3sEBb1uSur69YzLvBeNuZ",
  "key13": "XhwS3CPg9mGocRFyM2zhspwA8qjHAWi3q55HsRn2dpVNpdzedD4zTGT2AtseK4KXwFFqXZHsHjEGu5c89TPT8Vt",
  "key14": "5Jkn4Dr4G588xyVttjirNnLZhTDodQoFYvwXxq5s99FPYAj899vupWRQACf1rhHKZbY5TUnG1qg44F2NodWQ5tpF",
  "key15": "4pTPZmCiYD8vGMnYYNqZuTm3WdSvH785nR7xPJNpDJxtbRLHXnXfCRE1iA6Mxw8dTqabL2oxuXNDp5UJrE4xx4WM",
  "key16": "4eWGkoayufuoeTgPAb6da9iC3bNyCpSFNJ2Gg1WEb2dG6tCLH9v7Yus41m3ATxsyxewtiZFVTRY9ek5a4extTbYu",
  "key17": "2A4aykqbWLfvb3WLP4g7t5rS3JMxPAGP5c8sdJ5gtgaybNam9gnwcVWrytvFH4kVLAEJenqTAkMpzEaHKsPDJmcy",
  "key18": "5pnXKNvrsjghbPwDdUu4vfyVtjT4JKSGyCfyPzs395WZUKRZc6RnuyMiARnAqsf9RJEetgNfKVN5pCvNaF6KYZFk",
  "key19": "5WV59WQbuomFDzsazReUsqBtpCkS3ttLpp4xaTSZNyoeiD6QbRT5f88CX9dww2VApVhg8aDrGtTYd4fZEfhvEuge",
  "key20": "HJuxQH94bcKiPhsQHkcsoPr3Vqk6NeMvnf6o9HXHaFegPQX8hWUTa117nRYxTQp39Lac3eB9bpCn7Ag1hbcKAgr",
  "key21": "2AhnnvvyV1xDZEBk24qVswPj2jyS7EBnsAPkP5ZJ555PxDhDY13fcY2hqqUdmCT1q3Ny9QCuTMAfjsE5Rz6CqT4",
  "key22": "46Tca3c1pyAdKnjHwn5cz41ty1MWFSyjTxeeCGthEaPMaz5aBwnBPHwAFERdNnvLQMt9WGjuhJ1eu4Jrm86WCn3t",
  "key23": "4GW56aYED2S6CCiGV2LhzcyzFPtJidZahMfHQkwv1mEi4aaPMyfQUDYhkfEPg9FAXwxxb5kTsAEuB58si459Ufjn",
  "key24": "3wX5SxUm4fjA37ofvzwSPYu5MGnyFL3pauhtoUPmY72yB8dmbgZmaFQGtZBADjQEqdYHKAHPpPrvtQWJqyLkKB5E",
  "key25": "2q27nkCVT7av16842yTY8pJnrYrmhbuVDrUh5uGBc71xvZmN6oC7teuMECrCy5vMuPjMkiFZNodZkW9k8pX3wZc2",
  "key26": "47UxFRJmkmfzDkncAFSX31uwx9hqskPFCAVuYgD4o6RYV72in7zJQCpjsG6Ydwwx1x5ojidXPCmEfd9xMi3es4Nh",
  "key27": "2JZzX9Z9XcTXqBvgFQKEb8261BUdJNpCqzShMKoi2YNy7AoRzMs3CRrE6mW3WAP3dUwduiCfhkbLtS6oRxHRDSfD",
  "key28": "9Qimcmv2VMJKzqkLk6G8uvPSTy3RUn6JjVmmDTy1YefuqrhVY9kZMBtY4gpNfoukbfw37eZQjQ6KNn4xPJUhj1u",
  "key29": "2DQxQBjpFSodqDHf3Y4kYkyreZXMidH8LbmxzjFg83CKdX5Fubp2VnjvhUx2VZPopbBwns8QJqVDGY9iUjbKrja7",
  "key30": "3HR2E1bvSktnZYBZGZBRytUZqZykuHNNWS5iNrj4FSKf3PJUKyrKAoBmfisZvQB4JFoJkK4DogrBeFMrdyQi3BXC",
  "key31": "669naGuHrrGTnjL4yjjLr9RtQgmBvYsxMjLPQ2Ue1eTqMfbWd4BLWYCTpzByyhVRpCeS2aecjF5xBH7YkPkCCNF6",
  "key32": "3bSDdwDTpq5EUwmwwy7JFxuZGJrp1B3am2rsHta27NqQJM3K1JzerpHmkeuWsbPF6LRp9pL2UUd9TiHJCEpTLmah",
  "key33": "2Q99Q9KxbXgsGnvrb5p4q28mGopYtdEv2MJEB5F21HCtASNxVaTo8HHYbTZZYAhaoqz7EDCwQPaMwvPqMnDbE4uJ",
  "key34": "5YPuFa4L9fpM6YZYjAv1Jnr9A4bJf3FjvEnBtgxpxctpBMYX9zviYN5RjPGkaY4DjXwYMWaZv8q6NN8smm4X97dj",
  "key35": "3Lnvs7X73guvfkYfuAJsR4aWsUJEdnJhrfAH1bAWZT6pvcQs9hxbFdWdJ2RxWwhoeezMXAHQbFkSaNQu8Y7Dgvyt",
  "key36": "276tLLV27qZyVBJpLzCUNJNghwRmmy4NEfr95atcn6bVVsu7Ex7X5JS6sno2YcMRjhgreeJ9ETmZrxtik8ZRfrRG",
  "key37": "MRGCZhRpwbDVgjQDKkj9ERUCgczAeWGrS8K8XjdQqXC1x9gMraXVXghpaJifBcYto7nMAfPNuqyoCMLkDM8fE9z",
  "key38": "5XLg88wtyM1AsURhAmaWy59p6k5eTHfjTwJF6TQthKT8pYmRQJcVrE4qWtrHKipRjceNC3ynGsgGATvFsH8FDbC",
  "key39": "3y19jSLzFV9xNvuRM8bGTnVQnJHrUhrGKTq1L6GyHgmU5Jse69vkABmEamPwAVZUz6uFmtEUCYdFu2ZsvjMStCom",
  "key40": "hC4ubH658htcMHF2FiSdJ71jSzhXBDMKgnMvzs4kCJ8qQPMEYzLoLb2t75abn2QJK9dUbdicea1KsmVAFuGdJVS",
  "key41": "47ZdruYUd2U4HD7oaPpJLF5sW9kEEJhtSWoS6z9uC4PVGoZVDV2irEB5zRVQ46bW78RNPtQEc8N9w1LpmNoFFCc2",
  "key42": "5Ub5YH4vRZyueoq6va2DgLN1VSWEhTdgNgfKAJzgCmRKTkai3iDBmSZSFXXKkxvdfkM4gXuU2gqxP3L2WbSHDtje",
  "key43": "2ZEBmoKv9uHdraXNnDRQi9i6fmsgR7VFugpdhV8VTSVEthpymCXBNvRvHCicJkgH4MvVabXZNWRcMdtQEg2j5a3B",
  "key44": "5Ehz6zWiNCvC481MeYhy4Jfuf8RQD6F3kxBgGSLvrk5xRoPtNpFDS166239MDdakdJmxsA3Hu7ZhjQEfBAYTS8GR"
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
