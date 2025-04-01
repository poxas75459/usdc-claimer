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
    "6Unzrz8e8GxaSeFU7Mni4LNsq43fnV4JM24A7ggVfEVh3ovqLRVkxRJNGmheB4Ze3uFfw9rtMPBdsnXFrYXDNe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ihwp2MGuq2SPPbFxkZZT59KgCCB3YAup5hqF1ri7fnjWtx2GjNYfHZjN4kCVJ33hQzaVEdxdLihi9HEokLQCW6J",
  "key1": "5MMkuLtf2QfbaSDmtufYHdfp5CZZEszyHJziXdR8Lg8tuQLz2yyeWJFVNAZs8edAkasgbRzEKQ9J23Vz3KFuaQqd",
  "key2": "328LxFTeHXQwD6BQYedfjdi8khvcGxCDEXjTQCFTSuobHnibEiH6JPkX7X8aNuCLD2Bkr1rYsHHe7rztoNDMvxPL",
  "key3": "4vjMbcSWvqq8sXN2o64vgock3KKnkNp8PMpjSpBvWi9FUTFxFqNduCBTBrFnJtCsKsLr7qQQpEYES6TiPP38f3yS",
  "key4": "h5DdD7nJoNgc5fhVc88MEzKe6G51fnprFJLYqhBQKzeEsCbZnGidnZCGdD4FPsevaQZduyKqeThk9npE9a93KEn",
  "key5": "57dqa7FcRJ8KRkhvzkGnKNt1dZqeNRqaFi86oQXEB9DBgv9ptS1WyRxEyrN1kezX1mTZUVCoP7s23XwhPzoqFBrJ",
  "key6": "3RoBG2xDxjNA5wzZLS5bDXQc2VHVp3j92B3qnyLfS7BLu8wFHbJq2zdcj8ptXCrxoaEhfd6x7pLAWvJvqoTeEMfb",
  "key7": "628MEFQ7TQuVx6SX9PTmzVt5ZALnBFZB9ceqJxMKYgobSiw55fMsngZ4t4oWyUPjCpscV9h74pRQcX2pRsT39UEL",
  "key8": "3x6AzSjvGqHBU5MYDAJAtBCHCdciycHXEDp7vf7Veac7Z9Qpj3V7WnN4tZnE1yNuqLEasWcrJBEg3YMKaJ1BJAtQ",
  "key9": "vYvk5cWvm9LVB7ry85hmz6zFouSqxQJqif1mejy7dBKU8VUtXnxrUTDMRVy7PY7boALgLLU92U18DJojups8BJK",
  "key10": "2LWN3jby14qiS5QXrNXSjPi6min9NV5nJYJjUDyVv3xaLVFtjJCqsrac4gjK9ipm5tqiAQRCdRWUEJ5UwPTJsP9w",
  "key11": "33HfwpbgC4rPFd78MQaoiTdUwueBvB87evyj2KHpRLKTwCFVsB81hz39qCVHfaTsg2R1LWqBGhsSXdoRvfPZUy7u",
  "key12": "LAqQVwrgMrX4hF5MV3SgbkSow48G9w1oYJusVH8P1ceLSa3mQ533RTfStRzViXjfEHFvLDQArNsWipUS9hBdmp3",
  "key13": "cCtjKbeAwVDB1BkvdNi8mbep3JNZA8KMjsGnFv7w3EGh62VCdFrLgbgQyRutiWEtFWhFvECJ71agsYoFkCNC3b1",
  "key14": "3WrZZsvKXCok5BwB6Qb34KqB8q3mip6vodN6qrYRWxEEwrNsLHNHMD9d4UJpDxp2QDxdjuMa7B7A8JLtBwC8buP2",
  "key15": "4HXBnUDqAhQiuooVEC2i6U5XjwUgr2cReCit2BFJ1b5rH4shQEXYzizDDr2pys3mdqNkppGSNrzxEdE8zcqGaDEY",
  "key16": "3NwfPdZ2nzyrH6TEX5zskePPtjnhK5VbXeAEzX7ogNg4Zg4g9zNk5VTrLTHiWZB77BDUP3Z39jqfqxPibnJZkRkQ",
  "key17": "LfQPmnFVEDfsBFBXu69iVzEpSuCqKyfZmkstP2J8pYnvVnYJNXBLvf9mZFUCfyWgaZumW93jXJbcGi8qTazGNeZ",
  "key18": "3XqXiMobPZejFGVQJLvUF9NGVJp1BXAbUpmgmYqsBjvczifpVkJMacFH2AbXFcj65AVMrcmWNzM1ogAxzZ8CqK64",
  "key19": "4PgDD3aAtx2zSzZjP2SYHX5YWZg225GjV7P6iXBVWqZeaTCrbVYp4F2n7P7oTasENsZPTYTeCefQN5yWvsBTibz8",
  "key20": "XrrdJbjqhj5RJeAsE4gjQk7vHXSHKxpw8CG4rCWmuU3EJQUFfnrGdizB1ne6sbMeQMTNY5PRThADRSjZP3h47NX",
  "key21": "qsvvPi8ecJf1tpH5638S66U15n1Jvks7vQ5jh3PS4ZvZGKvQvcovHHjXQgYxMit42ERTcNKTvCfCnqDg5soR3Vq",
  "key22": "5AQ3mQuGhm9cRBSLsQ1aGkM7jwUKewaGUT7HTRTrMCsRp8yQBhqmaP3E3pAc6zTPgQZ97TXMiEkz96moCofcXGpp",
  "key23": "446pYaGK5LHzBynrHmfMM3CGSU7rciU8xN5bqgFQZ1HH1PV7Qt7AycZzr8spy5VHAyiZseTHDnzJgjF96r358zt",
  "key24": "2ppuMxnG9xuBD1ivf598AS4so99PHC3xejVEvbDaXZLr3VtUaKyzwEdAqrYwtKxsgt8q1VGbFK7mR8NnVtxsRSYN",
  "key25": "2atb1iybmeWemUYS3BLmFoSXLgwP13UV6kgSzvMTKHDw6k2cswnvRcp8qUAiJs4jwVX2mWmN15BmynATDUG8m9av",
  "key26": "5J1todYxBdUKALLKSNQSYH9vpV8nw3rc6jNkVcNVxt9APJkRNC1m5LprdJxGEms19Sqi6LB5Q8MpKm4Ao3yeDCdF",
  "key27": "3TdGVViroCXH5okpHMEN78ZpwFe7sJ49yodTNhbgCNLxrNeBZTYLR91J68v68TW6KPRbsceuES5BJzFsNrpsCg5B",
  "key28": "X2nfCNX7N99VGGL7ni1CnvLRHRtWrmKJiF9LSm1WT5cjBfx71VwRQ1GcTQ3DuxDxzm3ty7NBLshananrbr6sB1s",
  "key29": "3V5zJodDncrksBtJSTZahMH2hb5i1ZnDbiFDUFzJ8bcaxxmVdvpNeMp4ffAUk311MJd5PK4suV5SUpkgsisCwV6k",
  "key30": "26Wf7YxTCeyHT4QYm5p5jyGgLS7axbnR3AWZW9nmauiRhq1hQytgSg4WNR6dpy7ZNh5CqZ79uRbnBwnsXhycrsus",
  "key31": "2rMjZLfmu2fuV3o7MHpTyC5dZjfh2KgP2mtSBknmqXzwQcddZuu6FzFiTBdfqhzuZMBfenAzW4EyF3pnWSbpWojL",
  "key32": "4zzPiZvATg1cBGzdFVyZWGGyH68zVREufMjtCpyYGQRFF6gjTiFtRZctK6WCTPFLLi8MrQneqhNHQQqcFPoKX8cS",
  "key33": "2wuUEAEKuprP3Z8RrA36yJZAEAPfFVMDUJzaJKoSHrMbrfwZuBJA4yfxBgwNhnjSrQo54aRSEQSmVMZFRuhYkyh1",
  "key34": "62SerdM5ZUwHhEopJpj8qjieRHx7mxrMy8hTE3viWsqjWY7NHc5ku8x2f7zXjyFpVTidLdf47jENJrkXLaqXrtEQ",
  "key35": "4biWYVNoip7GPKWxG2Qaguuc2MYAnV8Hzixu2pPcPBJpH3wVsP4f2bPfeJyBb1c6GkbrTUbkGgfi8Me4gze9DfrW",
  "key36": "36n9a8g9twqLzA6w25hfmEdgWQaw35eDTdajBPg5D1VTJwWmRq3BJ5p296HHUiWSJ7EUbWT9r3txx5PyvWk8feKw",
  "key37": "4kY4RjPfsSgh9YVsL4kebN9rcWHr1QLRV7eTGgU5dq85vz9K5N6ykVUL1Z9mZNAJeXUxDD9g3emgkcwvyTh1fRoq",
  "key38": "2dcAAaNMSjA6EHRxepsDEr3koLyts3zD2uYoJgY8JqnAXN2uWFjV8BbkhjkrnYiVWaQNdHSNKXn3TCSYz9yRMxRi",
  "key39": "3FpaKczCh2GRgTRmchuoczd3hhy1eT9wmyGqbS5g9EuADBhBRt9FJQvVixkGy1GoVkHNtqqVjvcZT3vkR6HKV7A8",
  "key40": "Vdcb8LwJKsPu5eAhZqa9DGL8gp5FvGMkVTtt5v24m66ixe67Dv8qrYXMFC4CBoDBDw98YNmf1agmQ6jvPWACycH",
  "key41": "2xinxJUJ5R6yUFjTbTUqLXE9aTnXaAFmegVyJgTg6eshk88u1HSoTmTPXCTurpuU28vA78wqY55Cab3EfVcsntAP",
  "key42": "2hfS7zFhYcDMhKhXTVLV7huYKeMfd2X5GVx4UjH2VRk9X7bd5WQPzhPknAExs6zhoyqjBfXA9RPWg2pkBscZyh4t",
  "key43": "55kMU2nLjYyY75K45TjFPTw8jDBjJsLi79wupc1yHGV5Y56mr8tweinsM9jDynQnEkmARf5R1om7CFqiA2dZzcYM",
  "key44": "4SQ6XSfiC5ETLHYt3LoMP1X3NfK1GVj1H1HFguV4KcogHmzRkPub8c9LsePbm2dwHyc5EAWoGmvzahLncECWMw58",
  "key45": "61N8ySHLpKgsgpTyp4DWccDrAk3HPxeXuFqan1vJdYXdXaUGZMsuHh21qscbBW1rNRSk3ffGnJwHZ7yQwdwvaRcC"
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
