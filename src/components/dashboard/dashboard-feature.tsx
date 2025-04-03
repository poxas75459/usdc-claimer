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
    "z8few4Zcamc8JsMoPhjLjBUGY5QbNKwrWGcYCMAgVeneizZXWnWrCWmt8nWuuHmN9yRpmY9dJ9hFCaj4oiVULQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nmrFc2EvkzEVCrK1L6MRr9qcsBqrEuBX5rVsp3iYPAQa5AAU9Rfkf1gFqk5tXRc9KQz7FukbYgscVSpuKYz1PMc",
  "key1": "3RZkaiMhes3dcRipm4Lt7kmmPvM2dJQSjQG6prvUn6XbxYgphz6QDwzt3kz1UABL9wC9asFXwCdZbh7CgY48R6bc",
  "key2": "2ceJvzAxQw3T49au4AB9Wcd4XWpjRJ54mdWt62Ws4MNzLnvii8sZR2hnCC5Eik5Nf8QnPmoPS1xCDrt91xTANVDw",
  "key3": "43bSREPq4AbgND3CgRPSD9JCaAheMawkz5hAykdoWiGX6uyYDpjN32auYAJaPuG7bEXDQbHTjRV93bJZQ4b8WKHZ",
  "key4": "WNWmGGfHxgZSQTdqzh4R3YSECWNRMuMqVmEn5h15V5BJpfMoJBgwAfY7V5db1gBMK2CkewBu3psWGHqpMGBPwEp",
  "key5": "5KiYpCSqL22pAcPbJn3L42aaMsNmcA4psmFcZ7oJ9ir8mmQJDqhoCEhQ7cjMqo184Rq4HD4CKKECXGcRPSV56ttz",
  "key6": "32Lw4nUR45un9BZhanZYirrs4yxWiiAGwnctxX1Qv4Rj6CnmDXjsRb1f8D8WPF4zDRrKiBYtXf4cortR9LkNE3F",
  "key7": "4Sh8NnmtZFNef23GJ7AWqhXPGVcYhWtxA3nfTfd3JN2Ha8Ku2QMNLNV6a2ixB43fbV8Bhw83FvyX7T4awpidmSMm",
  "key8": "31vjc2vwtozDtEBgMfDiyC6pohsmnjSyCv1irDATjQmV9RpJg1jwWD5hzGRf11kFQznm2ur5aqfBr1kKFjxDV2Vj",
  "key9": "2qDfiwrvE2rfYghMZ8H84iPCxguQUdrdGhGPqB1RkbTmpocq29h8Uy5QiGWin8YBxAnonTdeJ12BjpCSBahZLHoX",
  "key10": "gDubQ1M7PWYsUSkp1s1YdpaESLYScHrEvbrv5CwiBY1Wcrs1qYPUm5sw9o99gyUcZmTVq6N9cvyjvE7i1cS58ib",
  "key11": "32FSqqi3bKHc28oc81wyFN6R2D74RWXvdAmi1gfVheddMw3JiTwoZewPUFvT7qv4e9DQnuWam4CbGmNJYSMiquHw",
  "key12": "aiPbRUkrd7eSXVQBr43keMPkcZPJCBoY6nJwf7yB26585rdA9khqkcxfB8h7ZRett3zhRE44c1SiZrSzL9zqZXE",
  "key13": "2yvgRVaCw7r6t5L28meDevyWR9LXujXYnchJPnEUbwwrjWRZ1v3g1WiW113Shxi6QeuaKsWGZSWkF8bVeouV19Sj",
  "key14": "i3RgG8P68CrMDJHaL3JfkojJcYUA7ys8EgMDNrGYHktkpmz3sKaVstRiZtH2qmmGUWE6ETdia31CaVj1A1VJH2L",
  "key15": "274jZMEE6jNnwFUTxQGP9LZA1Nhhq6ArvzorkRHWeEHUsqFnoAbi6QAEvs6ysNQ8KkvBXzRfbv8WBGyYHg3xmAkK",
  "key16": "4f9ibJqKT9ZAr55VnTj61XS21tahzaX1i7Zyh4YK3eG8QFUrDnqTM5LfUZQ7L4hfGTUk15tDZ9irBBsfgHDAyZcc",
  "key17": "5whzczP8saTHpUcYKfb8cazrLim8pbC4LjiXYTsXL1Ne7VWaoMJTe2NitdsgjFmygxXpjdwsoEEiUgmL3BMuHtHM",
  "key18": "42ow8j9rjjKcCKbf5keN6MrHvoERyzvpjmMCNsDoft751or9vzYvZbSYaZea2cwzVGvPf7dSgDY1ALxE6m1po25s",
  "key19": "4Fn46kvjjzMeZXicWuAupPg7kabkSVZVShJTxZRcNAoeWegQFLbvHfutEqDnjeQKh8H2k9B6JLRPssr47zBGBX8h",
  "key20": "5sEWVBWCmjBiQHw7KHjJyvmpRo8c8LGy5kdWUXmMN2jY6RQjyKrR78aNQ2evac6W1kmQ5JVdip9WHwSnBoKrTp9t",
  "key21": "tq4a7vhuo4kMjpES653FMckdmp1ytbnJczQWapKyaYKNFJDGJoLSkAwFTffcSSvK8s6qmUt2Ccis1HuqRqm4qys",
  "key22": "QihgQin2wgsCeGQQ7zLKHvFFtw1mPVtv6KsK4vuM9tzBy6pFfZBudXtuRWTPbF4WiQAkq7iJdMTSQmDWHkZPV3w",
  "key23": "5fnwZZjH1h3ZFuujAYJK7jL94hXK4DVtCNi6QRLT22NQ9tnPdGJ3ha3vjHiD4mCVDic5X92wtade1GYFSB1Gybf2",
  "key24": "52kRbPfLQ3YiLYo3NHvRryWPPzNdeeCTXpHKdT7hM5ywawiEC2NmGEptJ8oiqvBJuG66xwQbvRABVZvKm62zHzv5",
  "key25": "3RGfKhAy1ePHwHAFnCRZizb9Y6qQB5DogXLfWR1BZhjSHJr2A7SF1JvySSLxKVUPeXL1fFMUoMAGwVGREDHLWYdS",
  "key26": "5fkeC3ghxY6HfXGjvMcJ2bu56okoAYwYDHYgan4gvd4cUwZY2nkuY1sHvRQhJoN1kcAqXFKZixCZipf8rspKiipa",
  "key27": "5fxeJJiKP5NFPwvjAiS7HCZyzcia4MWJ1HKNTbj88AQaLoJ5fWWKsv4QmAQUarvUX2uXH3P4arY67RUWixqxJKDj",
  "key28": "4pDYQmrA8VSVYWgHrbiiwMgGhEy6ertiKe6jFXT9MVvBHbFGVv3to5d4Tb9LMnsEFsGKcAfJBjScxVJ2uXVrGvRt",
  "key29": "65ZTXTGhdhkLfDJzXRnH9gCjTbmwVdAxWLh8Yh1TCLAvAoJkD4qzkr88nHVdDvKYnmJtQTeTxUqQPaSoB5fCoLmu",
  "key30": "VbV5RWgGRgCZfe2zmq9xtT8zKvt8QUQwz73ctwU5LaXiqy1kDuAeQer4ow2LVEmsCkpuh7n5tus2iwfjJ465TRu",
  "key31": "5uT6mDmB6t9x9Uvp8BBWcaxL73ZL1GvVo32xWC4B89pdtyK3rnT2XRLWcUjdivARWowmZHkSXED9MsXYtkgggHYN",
  "key32": "5UgyUDU2DVMCTcV91hFKFSWKy6ZQy3awxr6XoQDnCmVbK66ddqKK4J1TEFXaZ4zqabG8XLJGRMqCxsPPapA4ytM8",
  "key33": "3ZS6EY2zymzWbXGzxHa4z7R1V29gPeCBrcQ7jUdC5Xq2yjwNKuJD5EYGDTYeQuecfqu5SMUW5kDqRZRbTfA7JBGu",
  "key34": "Kcgua88EXuEJPsM8a8Yg9wdaP6SAwrDAx8oN9dzCM348DefDXwhpoQECo2H4nTUwgFVfvPGz6gbhmnbX71RRCPF",
  "key35": "4JW4C9sNBVcFtjHk5d1tV93YZmSWCdBm1epNLGNG3XzC3juySzv8zZo95fUo834TJa5BuuPj9gcKpqf2DmWyJCxn",
  "key36": "4kDNSTuyTmfagetYGcXjQKWRn1E1zaDRzfxgJoyA3N8tsNuuZWCabNrN5AsVVoDJSuhwN5tmx3HVPpErdZm91nRv",
  "key37": "42vsSY6m2z8t9bqJCq6nS8KvRYLAo5gyYu3jS6Mjja7KbUysVw8LHjrcXvkmLLgDmZy9nQqpxv3ipyNXHBVSGnwu",
  "key38": "2sbkk9brgdRceoGzCgY6BmMwDqWKmJs6WfMPdRnLnmdEck3JAKyUdpWQzaXFVU1FwecAnUg9ec6Wqic9Ty1MnC5",
  "key39": "KgeStBBiKyLdnyKvRTymUjuHR2t3n5ejhhVrVk9rA4jvdJyRwfAdWVQzP9KtSgmktRAxGKxkmH6rGoTocHpnLV3",
  "key40": "3bK4v3S6gKEzKFk5B59J2Yms3aq94VRAZL9iydu1pyhH4GAcE52jm88tfjZwiPoi1VhnNBLohvxwFbupuXFRMJ8p",
  "key41": "5TQLXoUo1LzWocSQdUKM1AtQkYxKcZXAVKC2zqSyW493c4VicpkeBrcxMmnSgfAxPhLDxnwwnNDFWCJnmog8hyJv",
  "key42": "3ax2ezwBoz5QHgckF1ABCmVLmbGsnSTUePHNSeZQQ3bQXicHvPjNGbzjm1GGFJQu7Lzqu7f2iuvBaJh6NNkunJoq",
  "key43": "bQ2P8H3Ga9NmPrV6qertZWiW2XKyAEvgyknSu239znULg54r9au6Ki9gkYpiYiBDcEQBdWBB8tPsuu8vgYEeZJe",
  "key44": "FGfKFSsGuZKesa1bfYwDZ6n9dVYmLZYJLQPCHMQXZticmDYXXc3fornLC8b2HQfWXrwTK8GmjeV5ohSeELCrZk5",
  "key45": "2sMUAKcbtHEbdWHSNG9fUtbgYGq2cYPBFdmonMpKcVqBEqhz57pHw5axvKmZ6ZY7iKxnmeRNpEKZpAT3PdhJihGr",
  "key46": "iDY9Bweh1EicfBeRvJd2AwyZLLhvjCJnCabTRPdmuzCq4jYpJwLBuxe88f7B9ffajA3jJzuaNULv2dgM118qcHj",
  "key47": "3LZQv5TzSoSKRiQ5ginm3YYq3RoaDBbSTMTqk4Gy5WxLonCoqRc9vy68qLmHBkmvBFqyh3oF2bGwfk1ZzyJ9ph1V",
  "key48": "VB2E4TUuXFNzEPHXjP1dR5kVQ3Tr7s1YY1FXRiT7ZM7ejwBqMpxzbvqVnW9aV6UGkrkH7625WPdx6RL8fip2P75"
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
