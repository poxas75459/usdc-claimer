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
    "4PMSgP76rBEA9U933GzMmhPrNBw71BzaSrTQRWD96uKyBSTZw8KAwM3vD922QEQ1ULEqCj7dhTk1RC5Le9S2RCsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FRkapAoNfziAiBij1Eng9DYjx7sxrvYLRyf5vTqCwYweHxDCFNxQDDUZNvKcULNvWjGBtBTTPGRr8NDTxYV8n4i",
  "key1": "VQXx4gqNa6jnAbSPWWFEu54nAxdSYRJP3KrogeLpyCEJG64xEVcUU7NZQgJzpLjZmtS59ENY1thriADz8yPXWSi",
  "key2": "4RXmToq334C3JTropvFkfiBitojCpw2e1xCRVLUYHbHEgnoqhT9vScra3FMRxbKtxM8XBvQbcxMLSKWnvxCwFmQG",
  "key3": "3tVdxZ2T7hPygdH1iN4G3z6EaSKFSYcqKcQm2pfTGcTwwozUFjyZWXW7RjaHcKMGw6XUoXbN3fRsfDu9abcxaxgW",
  "key4": "52X2j9tgkkwcPKeBZoLpgkw5Rykv5eCnbSstMokBJoamcQ6iVLnzuQ7Axd5jpETwyYEKoRbRo1oWMKcsSAEEbAbL",
  "key5": "4eq89jz81vvQ3J5Xu7BRbKSCwTcP6cph698GGGYRpffzEjq6YPLvNgFVbSeaeZ169hNxcUQcgupQee6ofNRvgLpJ",
  "key6": "hYkYU1KbtSZ6j5ppr5hHruU1tPSV5tQwdDu5gEgD1XLCKzBJ9woskyjs8gu3vgU8sUaWkJRPXEPTwVVGZu6xuqG",
  "key7": "2c9pZguzLAWMenER1cX98bAUwL4U9T4umjZy5oTDGwg9iYa8j6SS8cwTFoKrPah36BUaqxFgEa2LhXNM7XQa67cw",
  "key8": "5wvxcLjqdZubHNMuEVZQUJpRm4aZGQQkzEAo3JMFxR6GtkuzsgTRpsS8sTpZvLp82wDVS75aeRqdZsnDme6Jp5xo",
  "key9": "3Kq3raK5DnujNbDRxRSfXDDDe3Fq7pfcwvvNYi93NYdnN5YQZid1SDKj6qyLB9GxE7Y9G9VfER5ysshvTsa6k7BG",
  "key10": "5HQzxZXo1DnjXibCYdC222LGZynG74NhqjiiqdkKYnREowwLfPjWuRaRjCAsJqo7QzsUoQxCeWLYfp7tjir1PLeA",
  "key11": "4orWSmLY3jQ6PcnwciKc1DfTPc5tcaKCrwzdXjRi5fpbtLqQjf2kjkHPV8zz4ymRY2Y69sg1PoKtfaqckc5B7gsd",
  "key12": "2EYRGcNhk4fnrbLhJPM3pCdLWk8eJqBDMo5TJ1cdeSTEhPxCLWQKYTUjHdQZVgcSLMa3rxUCK7FTVA9SppZwmpsW",
  "key13": "5ef67eEywvwX8TzSLyt6YjksRZH1zP8TMcdKZhGH3FUdvKQZx6r9fwyf6eXofhWKNvZjJWu6t53VsWLjtnu7CBSr",
  "key14": "3qLtZa9mtwL4nih9B1VYW1Gf9ccyjhRSb3bwUGV83ZHXkfPySMRaZbG4Td5AH6TqfxvU3qBizWmTnZr4NAWiDUWf",
  "key15": "GXTeTHqTGvkFSS4qbErjdYeCug4RkDjh9RBRwh921NhV4dPrPn56FQPyDojNFDXsZURefq7M2JqjJ77Y8E7gqxD",
  "key16": "5JmUEB2EV4XULDnUjsbDubtsou3sYExqd4A5Y5yEcmovXzPVugXaDRJCCgNRAfHL85xHY3dtgqpV8xx1P2JDQef",
  "key17": "4EVzsr816yJeYSvQbCBZQmqixvgYjEjS1tiGdrhAqCfrfxRzsvrdP3PG1JNsdxVXNgPADpEH2Pb7JEuYFyuBag9w",
  "key18": "4PSAg7Cf5YBSgHQTfNb2XbuKHvSizcggUYDw9enLBdmZHMEB61RLdM6KvTzHy2cSLoVsQtMrmd9PFJzfBPvEosbP",
  "key19": "3P51sCkVd35QcfG68GdZxeY12a2rW1WEjfHyNtRcQqLh3iczm8EaozazQnFCD9vExtxVihcbacpiDAeNjsJVhgzD",
  "key20": "2BFwzH5GKhUq6R5nyREu1aAvJuhRPH5SminS6FCZ7ny4F5njB75T6tzYGo8RZNYwbcUGnuDr6NMohmCqWsFhmGM",
  "key21": "5hBhPP8E1WCpikbcmpbYHHddVUAV1jtMipa6HLdXuMdckY7qZitESvtzvDmt34u2M5QgtrzDXaWSFZVZZdgiCzms",
  "key22": "zLSHZwVhJWsvjMRod1M862qc9Rehj66xwmUDioLdr6MW5kM3F29u82i67pFDUjPPKoDRJsDAiE2NzCYdj4bpXe2",
  "key23": "5MwUv3UGMFPjeLoTq2iieQXwT7cJs76R6FLNBHxPiejJw3y73zBByGpFbHUHnXLhfmRRt8B3HgHB2pfd584XpvS6",
  "key24": "3UGQZfhm5zt9DDDy6jW8LN8HKPD8RbDEsmcxs6QRPUt1FUokwfRhXRDwY5LCBnsjxdwFiNb8nUpcn4DvuX1L2XKx",
  "key25": "4d3LUTmeykd24R9pJCY4QHnVHHyt3QmP51dpVFhP61LQrj3mDwaTUvcFrMvcNaYmR23qkb7EC5Lz9j7jtTWbbqvX",
  "key26": "LmtEdEssjzzSKD5ASjCqoeJBekerFbbg3kAikwqqo84R9RqFCXyeMSwy48DhWRpfQz9s7iqtjkiaoUaW71HAkP3",
  "key27": "Rmc2Xa3KSVcEAY1dtNjQWfMrQFryCyy5TixLerUU3UnkYepksFoqQwk1jvHDvH7JVq7HYpwpiborGPC1iZwn86p",
  "key28": "3nAU8sC4JhddYxHhAnoTDxbqJL2hsdVpWAALbAfqkgW6V9rwPRD96kwVuBRLyHBG9nuWB2miZ3bHPoJiqK93uXDr",
  "key29": "4JLjUZpUApPAN6QMpwoJUE8mk2jUFtcvC88izpSXVW5mXfEkcjw4wJhr15dQUW1beDF6Cute9V2cFHERpKEg4o1F",
  "key30": "3Tbhh3zx71NZnw5oyQqikrnYGUc5MPf4WZMdQFMsvJuGpwTzbPdmK3prXQodRS5pVAEijVVFAZJ6N43L8riBvYxy",
  "key31": "31A5PHfX3yCGo89RjgmEMWBCSFskzgGaixWA8xeAdiQryEErZkSPyzsnBmLRcCGpF9NRHJinzeFAJKa4CgpoUKZ5",
  "key32": "4c4vXqEzVNj3PqQv4B6LPTbcFAF5KEvn7yeC19ty1xVj5prtRrpufu21NBpiVAy7KCmV8m3K1bHjainGWqk6RPHY",
  "key33": "4kDwwmtimcNH5xUvXkWkkFN4xKUfjBjyL3TvoWn96XDFnonR2GQTmiGcnTecTVfx95evvHCCCauoge5gBJHWFqKe",
  "key34": "3YYunfDC38nmzdCFHb92E2BqSVvhjYN3iqb5aWU1btJFokULczjjQBR9CmD27m8qU7AMTPu8SqqeoHTVLsxJmj5D",
  "key35": "5AqjrgwSAMsMxHM2PqwVLPeta8tgKVatdMxvWgxQjRE9fnQt6ZajLbk5VgpmtpGHo5Lq2xtMyY98LWDbHNfVGec7",
  "key36": "2582D7WjPjFPZfFCt8P1G7tBgfbzoQYJpFviF1X5KjHs45pf9R8kEgp4eYTfP4z6nimcHe5NDHnACJ86XCfeUM11",
  "key37": "4CMX4yfFczsweHWEdok4WLFsgbs4djViL8TF4xA5h9uirfFnATJCtswHBEGTUAg5KknPJzfjvpQaJs5PqiEqhzHi",
  "key38": "xKMpNQ1ykPjiR5oeCyLASn9CLmXVyPHRbAFg9mA8jAViZjRiAw7u9VPVEyLKPtbBK5DZkDBM4T8Dby45g27n3o1",
  "key39": "c2Z7SAYwfG8fTaeoChPi9QFfuJvXGjJWnhcPs6T8Q5UKf1nzBaaKzkcUgNnZhB2sJCfhkoemEufswpv9XD699sG",
  "key40": "57E713VEpPfZJYxVfy6nRjP2RdaJMzEJxMZcPwGEfQnnEX4nDWKmzzP6cThXSnA5wiBArtvyfp4FxupqMSgpW85n",
  "key41": "2Zmac77wMjBdRNKK7XaJ5HEK1dPXQer4fhM42rffeAb1YbBcWPKFUiKKU4Zv83tPmPbzM1DPcQMNQPkyz8CmqzAp",
  "key42": "azxViKWfPvF2iRsYigNjg61p9aKxTKkfdpZAB1sHSiZUBigJL8r3oZgaZSp82Ypor21g1h6cLVLdGP1MwWDQi5G",
  "key43": "4PJh5d7mD64gH6dg4FQHk5mBbugR3g75gWRmnv6TzMGWgBx6Jrz2QwutpfkDVQDUQXMmNQ5TXX4XKdjKzs99N2Sa"
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
