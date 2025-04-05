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
    "4TQ2odXNqfRW8AM2kJV5fENGMBNUmpmet45jcXiNYtffscg7fHp2Eq9YsVeSFYNEcbnTDPZNo5fG8VUzthT8qsPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G2cRNkvjZMnVQSRQZVrR64qyBdoEby8GvwGzWy8Znwud2Hw5CHYmGcnZHvMynrttfZAmKYEt366cTjGy9NtcghE",
  "key1": "3jtVao7yhSTTNvCLwVduZPEocR9qscT4DmRywsZ7QpfU51YeTgbUMEvLCWzhgRmoy2evavZSrFYs1LxKLnh8tsTx",
  "key2": "Qggoweq6KDW3cArLzTU8QuoZCFpFVrbsGeZ2cnK2zCrDGV1EXuXhnus9XADCd9yXWsJQnVLkDeAKFhy724fnjix",
  "key3": "5FsRPVWHuZaW4cZc6QdbPWrmXYZVEmSY4RzDufJWuidHRVkGLFjjrxzCEcRN87P78ztdbuJjhwiYuNunbKEBV1Kz",
  "key4": "5JQbpGidy6MZPMzJBPQx6Lard3B7ZGJKKU7XsReDMQ6yda5R7CYUQUEiNLwvvcX5hKWXrLJuGHsUoNbYY9r63SZ8",
  "key5": "3FeH11iTMp1HRzcZDTMHXV81spinjTWQFaMyWsFaX8m6EmpAxGzNaBGnAvRMP3fBugKfVSAee5b94E1PWynZTmAa",
  "key6": "2u6BQNq5ykATAACzET6Qz5uZnSdeR4zvSkJMmRuyY1LKfm297XcRgGpoEnKkFzNWn5PtpzrMm5bSvAomy9HtEsWg",
  "key7": "3iCkkaP4ftoYpoTkRjzjJA8AoCPQFac8GVHhuxQg1aseuYMK5Jigwr61gX5L1zL9FMj5QR3UGtPqVCn33jreja4s",
  "key8": "2dpKExheyiitU1i7PkYGowdcVcM7WJFFNkpUUKgpLNqDJRETMJwUYvBdpXUNDL2coR9AZcPmVM4bcLoNkS8iKW68",
  "key9": "4JzKfmmdbmpVkjdkRkRYfPxPcwZDpskznE279ADRxdQN89ki4Er43g523XBkWGmrAr1xwusSXAQNiPMEoSnCokGt",
  "key10": "2TKDx9J159Ja3mxadBjcDmTzizKU8prrRv2RNbnxoakxy8v4PmW7AEHHLvRayPxFYexkbWJy6ywKCUsHv1qcimWk",
  "key11": "3ziom6UoX6xb79Fo8neJ7sFJuRbgm7ERC35XyaUPsV798udQxsFWMibCjCGpQD1EDDcsfmNY1yvbMbxqS6uqwSE4",
  "key12": "4tewswgPpaavuggbisL8EcaHNwe9CdqnMGn4YYevEUPo6z7HeX1YvdatKk2fbXeumAhfqWc9HRrdGWTJP63dtJ3B",
  "key13": "5aRYziKHqHWHJdr5EHusSFrp92qxy5H6YGWgeu3L3pR1AZQNqJwNgW2r969jmVCq8b6WZPKrgfuDWy1A5wf88Eyq",
  "key14": "4X4mEUYVhE3mnaRUczNv7XJfFjTA17kuNSp4Bjo4y7TNaV9Jdf4pXC1Z8YLsBK3M6gGyhrnky2a9DScDnSPphwmY",
  "key15": "cCtTucaDfcoptTzL8DBJDThUPxQxmWVmNc7L6E29x4DxFJp2x6z8qaPu75EsHMAHrMJChZAzojw3xuof97ndKUY",
  "key16": "3722W8oR8ABv8EmgNaqXtLiGjyWpsyt2WRiDsQzjV9HnpMdLYYBMW2sKaZQzTw4MEiXA3epYKDerxQbEqnRkk3BH",
  "key17": "55URzP2h37DKTqm5aysS3c7aRfc8SG7LREBcW7VWGLVxoRBy8eUcMVqbnxtXepRLjMcSPL6W1Hcf9PedfXtWxHsa",
  "key18": "2CbvDpA12hVR5N34Kr2NjbS5E5sKTm33oEjksLZz7NcHkBtHsaQL1ahS7VtCV5fuM4ayq4DUK562pwHLCgZiBEpn",
  "key19": "5o1m1zfiypxeN1ec4Yf2JxJbtCZ8PiZQwB5Q7CK23fJ6UJqExKXiKq6YCyYMDhi4k8Z9xU8oq1LBii5zgk3RsHm",
  "key20": "4KwPg72USwRUMk1rnS72eD3nFbMvXHkaUicGkC6B41GP4L5CMz6abBXF4UdTfR8NE2LwhZ9BPU8MJcvpvWJ1CMG1",
  "key21": "5RWKC2x2hggMqcfirYZXHAecVBn7PLmzZqugL4worCV9koRC2SxY1AxiKNB3qFpaSgxQGuPbSbfRZ7UVmyo7xymj",
  "key22": "Gaa2kv2aNroffY7w1Fi7my58XM6bCN2Y6EnbtgVzmnfY3K5KF6pLXJXdDxzGVGGK47sdGyPQquR6sQvcrXwYsxx",
  "key23": "5pEFkoRWi78pnKhHHntUHWb5Rh5zM1h9KoRaFXgrWGvpPoDBZp82aUWamoxC3dkC6XcFApoXJCZsdMsU68sHqMnn",
  "key24": "2EzSjiPKtN4A7UceDNiAqx3L8Bce1K5S6FHu7yXyfJn35SccLYQGASEMa1eMVLUK1rvLq6joRpixDcyKqd2FcmbL",
  "key25": "59EBdvpKSshcvUP7u4j9tykMioQRiAbfbkNDQrSKyjvdZapHz63afyCqTh3VV4DNxt1E5cE1Cs6wn1KYqPmYusC4",
  "key26": "5yhw4bGD7ymNg8tk94Y9WN5efJTG1z5Xbc5UJgzPkCae2iDQsMzXjNVtT5BZcDS2ueaXZPYk7ifQyejzMD3qXCrX",
  "key27": "4i74WKapZNTE4UkSP9HH1HGA7L86Gn39JGHuxyiMTwKK6xZBrWRsrtringQeSo1NYbDX72yNKJqZtgb2Z5Vsw4My",
  "key28": "2YQAQMUHT2hE9bkxFGxByBiqXuNaeJS4VmktcmJkacuv7Kf3VF8AfTSeVk8iVA3cHibC42ormG9eWSgzRVzJayYV",
  "key29": "2QADFuqjGJmcpLkdEnG9PpDRNVVfKRUgrEBXT6o1nB5uvJzH5nqR8mpVdAJkEAbvhKzJ4k8FEoYGNLKb7RVGM2zh",
  "key30": "5L79DVk5o3fRWsaNiadixGS3MUPU7RHNp1eFUV9etyNfaVapWiLKuZQPuKBwcXmgZ9XZ33GtGYumHjx6Bpa9Upb2",
  "key31": "2RQUWc5Amima8U8xUDACrYdAXpj2CwZrfksnQFcjx2sHJ9w3g4q5APHB9hAv8F3sskDDkpnEKwFvMC721b5TH1XD",
  "key32": "5ppvRFPuWJf2uQ29SVTyX8oqrxrYEEb1WEGN8U5qg3AYjcdAReX8W9G7GfU1HkmhPBBevuA9j8MyUybgPG7DdLNq",
  "key33": "48zLEGwrdQcW9GVsHGnt2XaVNmUwgWMqFA9kJGRAZcvd5d7ZncXTwusyYTD2jA55SiNDWbydJmbbr98TAAVemKg8",
  "key34": "5ueJAZFFeTraQFcAEm43MQQw1SeBmpjCXBRmnp8GsqW959fmWgXYjH8zmTeJqKX96LguUwxWBRwK6PjWCNciRp4z",
  "key35": "3BbhCMnA1UtYwK7fg8RtsH7HcU2yREGvmu73RVgU57CAkeDHmpHvX2xJe4Jt1bDxv3TWuN6j15nxcc2aqrmuhQh1",
  "key36": "4MArMYMbriEiZsEgvkaWHyGjtMksP6dNiGqz3dDcfKVZFj7C7TA6tnG3ryDgWgNtdEq9ArcwQY7n4vgFYNWJkJ5E",
  "key37": "289N4NX4t7GY7GDQcXK4deyAzUfPpaMkSKPpKiW78uLscPr5TGgDvmXfwPEr55TDtmQL1LHaEf5jGw8uGb999bEA",
  "key38": "5ko276WVZQosVodwbTFqBfKzvrrpHDyCHRy5k1zmWko4YHPuoCPjFTZuF9u3FhXa4dmaQScrFcgLLc4W9kjtFgRH",
  "key39": "5cXxnuSHG3wBffoEopor2NnX6nKPXvCpb1oGoPHawgaNxBGk28tPT1Sa1rqMhCgJyKSn8uVQdQZc3H8JUp34aGiD",
  "key40": "56PB8ph6CTCc93oa8yzp4je1N3V5KUJ3BVfDzMXhsJQEmavUrY9xCorFYJyLXUrPGyBQ38abb4E97XtBmzxeaJwt",
  "key41": "5VMiPQXPk3CrS665cjHbE6UaqktB17wLH4ubQX1vKg684pHhagrxrtSuTzw2UpkACRUwCsdnTYW64v3RWWCUGh8L",
  "key42": "4aPaosApDaXPzfmbJRtGi4KRqnfCXPPwbGBFQtxbSg6rqem37gPGryjhw3iR5pez1rDqXyWjDH9LDCx5cgLxtUGu",
  "key43": "5HDRLAv83UVkunWq3tXfuLJa4TkkS9gTC8SLuJWmYgn9D5GpL7nJCXTvqBwK2kQJwR5FaXQQTm8y5T6qS4WV7vhJ",
  "key44": "4gbFdUz99gRT4PbQWWTwHMkbwERjFcDR7Jserhhf3UkG8xXRiBWnRGcdasmtrqxxonBGesUV62VUNiTn7ht2Bv79",
  "key45": "3TGt7mq1qHfirnBWN5VxFCy4SWvHjnPu2qbb7dU8B7KwBhyHYcbwF5A77cgTSVVVy1D5USvV5xzxn8NskWfyujyz",
  "key46": "3JvfZcquRpMUYUxmrocejPvmHg8Dbc58bVSkMHq6XK3QQZ6YLWJxJJgVpMDtWWQnLs1neAjaypHKT7NJ5jbZ5wPx",
  "key47": "zSYAQUcDjHonKxxvRPU6pBuERFuDbfFn2AWk3DstBfJpuAGUu8cswSYuiDCfMnETQSnC96ctAz3ZLjbnyfEowEx",
  "key48": "26A79Xkycger6hNqNjeZvWUSPyhuGFmfBTu4txerdNFFDtn5fNyMxKjVkGefXUkcr9JeYDsiFfiSjJpNGRsV43jG"
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
