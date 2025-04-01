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
    "2t31LBVw5Cw4W1ZBCS1dikykPUmD1mMBc25suNWVALR69yqNX1a4wrpTrpqfLSYJ1JVFapvQefN5f7enqhPFW6Ae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YX4NGgEVR1sFtMrb8hD4oaag4CLxbD2XgKZgZRSdadaHymnZvXoHhAufbSpwYVr828M2eULREHAGoW6XUBU7vUE",
  "key1": "3eyDCfaodp5e2mkjUEhGABtmqYm9cdN5ASrLu7zQpLRei5Lfza598efr5twnCQxMD8tFXkdUcp8wZf6mMR2fEQSC",
  "key2": "4KAwPhgj5cbiwn7LVS1fExL3tDsGt5h6pYjygx7iXkJqVnY31VVP2zQvr2cjN2MnfNbRjXqHDWCmoYtGjtGeXRJm",
  "key3": "4ZsQGiNSdjx8yEme8PnEtrAzV292HSvd8uxdNrfpcHW9zPtK46GsAAaMLYMiNHJSVr6cE8bnGTYYYQwY5wp7Z4S2",
  "key4": "2CeWqQ8cRgWW1UGidRnxoU6jeDmejkZihNwwTGgWjL5eZqgJRVrs7Ksh56JkCUfcYoacgFZhbgQzyuVBQyyZfDM2",
  "key5": "4n2k4Nk9MTKyuifLcERPimvFNEyeDKUVQjMoeo8GQAWYEzFbYSVcYWmMwCLopNq6LLbCurPNjnuDEGCd6pzCyp4Z",
  "key6": "2x3NF6PaCgUoSjMjrcbu3X9NUVjEdWwUoMbkTK3JxVBcuwErQM5XJ9H647XvDL7dGV9Hkh1wNAvLJkBuawAncYgk",
  "key7": "xkf4F2vMVsH66A2fteEWr6kb6RtbiZF5b6dZ7Z7oJkYz8oQAaqYynyPLxMbdY6v8sd3j1BHkSaiLWFoASrt8xth",
  "key8": "DomJ7wGPc4ijByxzF9Dp9Tj3nKhT5TfZiy7zLuAAbQWjtYeDoypCN1Sm21aJq5KP1L7n1WL9MNUkY5LT7y2rkAd",
  "key9": "wGFEB8X1rJTrxyGmpgTCS1EGL9wavpeieF2Lh4Nyp1u353XTVsxFXMP4aRtS9Vcj47AyQmTzu73rywYeA6B2AL1",
  "key10": "5kC616gT7EUGpnfxqcPLVdXzjnfDah9pYN92tU2NNMLk3wwErftveArkRskzMU27TQ39Fy9TDQGKuPWnZpAchJCV",
  "key11": "2J81xajwG75FeHpkuLbJQByX6kUmKa1eu5odYEKBGHuqT663sSs7k7sL71vH6nJtiWXiYL3UrDhQZDTZhVA3gpVc",
  "key12": "2RpwUPboKMzdRk52ZKSuLAcgdb9zRedDbxjSFyfptvqoNpWg4UdbvuwYymVC1LdJ4Yc2zXe8tqR6wwSMJxeUMykj",
  "key13": "2h6kPbtiijGBDBBMzp9MTdVq27hUjXrPDEg5PB6WvDFMry8hm4txUZrNtoqy5KYzC2Yb37JX4ru7ELnGdzDVeh58",
  "key14": "5n4VP8GzvL8kyatCw11THrJvf9L2GqojeSNQrzTxbpBJB9D1XxiDMiZE6mLKpWsebdY1zHqA82Kp2xbdEWPL87vN",
  "key15": "3eFvcdTesFdYMMQKsCsvpRrUbWT3oEJUbDQKPZYQDrcpP8wRzCK8KR2pjXkkoDVgJwmQL9ak3gRcYi7hEh38QGq6",
  "key16": "tqf3Cafy5DxXFJ2PyXgq1QEeLJboCfRLsRr9MAPNfCtHZQRQA9UU1UgdvFdHRyd3ref7tnsvrdHpyRximByyZT7",
  "key17": "3mAmkDJ3CykcJPUbNBKvjjydG9QiEybD1sEEUrKjWugMRB7n1Z3iGFPxgSTE9NUUSAbSqPVZTrRRrsS8Hkh5UrtZ",
  "key18": "43pRD1694dGo5UbWcbQPupv8rCC1VDLMApvESnXz5zU7GmGffVHs5p2qQXCmTiFjQbVtwj7Ddpfgt5nHUwvoHZ5F",
  "key19": "ACu6Rx91wasK49nxpCFFEnYvBfCcgBnA1gNdKEg3Qv1CXJweYCYoQPg8NRfoU9bWZwJGt5jgJL5LHSGPyV4FTrS",
  "key20": "XXjsFdmHnyRJX8rKUhgg8XExNYeNRuAurW54q1ohA7cwGmr1sq8KREMjSXSqsCajKWgVRz6Hyf7bD5jxmw4BsaQ",
  "key21": "2AywHa4Aah5KXqa7AN8wSKKFzNjLeShZkWUSEzX1w1wReffhod4padAhsfQnSYFunwsSAgociT4vPrEZ9ZdmEb4m",
  "key22": "5jvFMbQgKWDQRjWzjEvBN7KNxQUqviZt27hhh45e1fXjPmY9sMsVZHx7iN9TXff55DYMMZfcsYTWzjwgePPBVbQZ",
  "key23": "2i9Zrh7uB1THG3wmhxePNg2vZf3AWWPHft6jFouademk8jSged5hefrTVJCLpVPYq7nH2tpzdrSFkbixRvWnL3Kq",
  "key24": "2PD2gbw5isMdp9Wnv4i2UrWVqXfyhDfZRdGvBsgbsShiymDsqwaC7uteerfGKCnod153EunHxNVenAfDQDfFt1BR",
  "key25": "2XSEQNZfFLZkFdL2YGSonqs9f3Sf2MvFju48DmbYp72EXFukyZQiNYpTVFr9rUKR18CaJUpogk4mR6pddBQ62oKe",
  "key26": "PB4GYezq6i7GaXPFbeJuThWRn6By69Tz8WkYX1JGGbTCu14YxjJRUW8PZ5eNEhhhPkveB9FfBJdqFYTdMGM1AxU",
  "key27": "363X7CkRGcfmbUf6GBEvUjUYYHhKFWQdhbwubpFe92uzCigofbTGzShf1Wj78cWNe1fFQyTZwNFyPXjkZjgPuv7W",
  "key28": "3nKjyjssopPi2nDs7tVmWpNasSNGUNJrFLtJv7xEjEZVtTcZ47Ag426k9bTVGCcBn6YdqGFoFCaLmTZLTQXrkn5K",
  "key29": "mMfi2opEuiZ7nFtvnoKcwqQUEcwyCQ7tDAuTYYsZQkJKWhbDWaLbtNSkM8t1HDrTzQ6UxA6zXsKtUay5asdQrSB",
  "key30": "4g2GudoKpjis7Uku4EbMvZEnNampqLBH5zyyY2hBksxwesr5RsitKDuCTT8Z2Nmah5c6uGZsagtEXXdim1qrXfVA",
  "key31": "56TrvFe1FJsLENLU4bHSiEPvZTZP43h7UGgBS9AXZ3mKP6y5KJpHU8YEDSAmJGYZuqyjG88F3LiiVg3VzhU5ZH6N",
  "key32": "4s6K8PEDENAFgD6inz5acy9B2MYJ58i8sgGHSfy3Fim3u68ErKZ82k22AdwokGrr3fHB4MJZK6fzffSbnr7QmR7T",
  "key33": "4iMQQRNkwNeMzEQodWWhAR8CqXH9xfvh9GnjsaAfTXok2emWiDFwc5FN6NEPf4rdBsjvfrqJQFVByGSz4nbPESnp",
  "key34": "44Vcw6BD1CdcQhT8AbwBcqg2ALMEyZ64hKiSLKgtnDycYFpWmvBe12jSxXsuyBXKbZFoEPb4cRnvBcsw9suTk9pQ",
  "key35": "2HysEhJwBJJfsbKadBJQ6hRxojyZTXTunqCTTsSLSck6kd6FzVX9g9MP6HELR3eNwQAwgFzyU3SxBBQY6iRRCBcx",
  "key36": "4Uh2z37e87K6EWBw5HjDYsz5A8HVmCFuG2py76risBbE59GYS7TYkHMgTvhudcj7JTkumEX3UP2Bpc46Dz1ii7Qw",
  "key37": "2svZm3rVG3JpDCCZ8Hzpgc2QoNFEPCnAzxQw96c3wQJendua76J8gzKH2ggpvorxHyEcgREw7UTqQdsypXcY1Djo",
  "key38": "4wBm4x6oRUsXtMknxBWHWnUJH5saoXfKRp6XUSXQRyDH3vxL2qdd198oiLb9BpdG9EabbTSX84tLjhRJk6pmUwxg",
  "key39": "3QzmNtGReRVswMWiiwmdf5fbJGjXLtXQY9rkXVroxvjrfLR1UM4ogFqgVNPBqcdsyM8erYu2jWMLSnqaE8ouNxzZ",
  "key40": "3tGH7iz1tvDaqt4GgbbrkYGQy4JzRujatdJiwDhhRzH77mAikyF3fxk1BUZu4mWTP8ziRTMH6Ba4oWTg7mKP6F2W",
  "key41": "2c6CMMuw3zZsMf7n66vBoBKP2TYSuKsmJrZ5XstNZSzxUQWdammjjUAzjzgG2AxahhVN6Z57WbRyjKTNJYfGq4GZ",
  "key42": "4KUPtsYHesrxTCUGyMi1MsKjY6vHATz6eht8jTrYzRQkDLWJjUaR3ifKBzyn7unikxGzXyso66BhRGtgd3QsidhB",
  "key43": "4einhg9RXRgA77cnPjhCrRigLC4GuHjq6DeaMdKTkRBHaxVWoqb4KTKsBTGb5epG99W1CsqLHo7ifMWUTrLLKZWH",
  "key44": "2J8UJdjiUfK7UmjF7SnRyxCjUwnmDYboYHjWG7xRUGBd9T8N4yekiVkNvn8pY3sPRrk1EitMufoPzEJSGF9gLv9R",
  "key45": "4TWYWXssNMGGXrFESoHRymLQ6bYFU6WWs27eGxNbSmUgJ8wzzGhjC9QKLJSEGdXxap9VqC4smZSBtEUzyqHsQ9gq",
  "key46": "4PQPNxXgqu29KQxpNjpSVvQ8z2t3WxqCgh5X9YQS9scAyXqCKXQiTbQRqZNmxwA2AFRwik8dqC8drb9PuQEbwGpk",
  "key47": "4JDD4ieE9371CiejzXs2prS7szxhuav47qy3v2qFmbLwYsam5SRHtm1LNEGP1kD5NaMphTYTajVauoUKGALNtVtL"
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
