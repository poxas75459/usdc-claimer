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
    "3oKrfKXCUgBYz69uQnmsjSretLRpFxePvjgAWDM5tzHHiesiaEGhLubxsQyxzRViJGCvECYqcdfxtKjUQeDcj3xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Sh3t8JFG26ukhnh26wvwDB8QhuciTsiiwXWEbYZBsGaFJHdmKHgAiwLPzU8JEXF616QFnzNkEzPvGNeA4yotF8",
  "key1": "2nM8W2iBLSSC9MJPP3mMjf6QpvHrtjd79p1XAWb7qi2RVLbbc4AGAD97bwx1kWJgQHi9ENUownoRT9YyTVGKguWk",
  "key2": "2ULS8VFoYneCTijbxtRk2XvmJVvzXHaJVcbiiyGdy7FcUJVecHwwumBzeybGttG7aQZnD7kEf3JYjxsALRMjjDhR",
  "key3": "cLrrpPJeCjRhGuBZtF13Q86B7FJrDGjywGYEy6sR4yjVx9rSGTaGLe8sGjSVe1pZHxrd1NbdwKnKMqhc99pVLYK",
  "key4": "Lbjq8tXbcPm1HgYhfMdN5UTFGTpsiZk7FT5qQhWDDKuK9ZV2Xo3pMZxsYKRCvDNiBzYnqFj1gSkhAu8eiSbyX9q",
  "key5": "cvTFaw9nNWxeR83XHPgQjK92JQkzRk16h4fvh8jUrS1uEehFyEzEDnyyKshpNKCDB6ZJKtrf11t41vtF4zEr6ME",
  "key6": "29vck18Nyf7uG6smaNikft2RWfxJ2vmT7p471BycQ9a7QCt6LSQWytGBG2jf5NhoW2otwbeSLgApKFUagxJ1e8MR",
  "key7": "5GGN1FwRTBWNFZJ7H59RWGeqyoUQo2m7DWn117bhy1ABfBHQcK8VaCbUoCEqVMoAdnxLojfrwoZLkNW4awTFAX4E",
  "key8": "2zyc8mQJw9QT4bQjpy9C1bkSrVBEn6Rt1n5nEHntPnjVxKKHJ3mDjoqTuVWiMoMvCiYUtQxUwuPB94hjnetFNCYq",
  "key9": "2RTmxr5EGPDqVwWHwt8AAwyo7sBRTqsePhG89ADw4mtz7mpcAiQaqWbaDznEJFTeYx56KDD8J166LXyMYQmLBtn8",
  "key10": "to1ZR7vTx8yM34Sby9YpTPkgE2TGEQtqjDo6sz5UeHVMXWvBvfWvQZ7mftXV8U79vnUv1Gi9uXzksVsyh3b6BZT",
  "key11": "5ikWCz7qTpugFYkyhcyc1AFh42QSLF1wucygvCKBR7BkjmxKsBJWxD88cnvWHJZ5KBi54sgY9PZyrVqsjKQzLG6G",
  "key12": "noNPATfniQ3bmNWAzwmPMickk8X8n1JmejS3AWNwJ3z6kYo67S6rTNTRtmWzRrEYSdiK7RmCntp9NtXM3Gne51q",
  "key13": "gyXRGf2RqGYHE8SK3hnvm2ow3EV7TA2QatFQL6GhP2rorKm5gk5JLzozB7etaLQkrgm3jH1wqdkSBadduWkoL2U",
  "key14": "fhn4AHHhHgEMssjtkK1EhL6ADhpCVKSdkpyb3KZ5dYFN772QBBXVH4KimQKXRPx1bqTUcmdKSxHT7cFy6kBx8YE",
  "key15": "5Ydw3BMwio2KoPyiFFMFMcLBWXMncfar8wWv4RpVMX2m1AXrA5z3n8AjAhPfBqqL3WjYJvFkiBSHyyv96wCM81eP",
  "key16": "5bPrp3xPkYaDYP7ru6u4c2TaHs4zUYL5xUXCQeQJbw2b37ti5ajo4X31ZkJsC1UNr5D2Ai4oktiDQUwGbg9Xr3Uy",
  "key17": "S8SSFscSQWUVqE6nqgZraChfxwQxhPgidbbJ3748VZSDTaWnmk6upkWsBiWoVufnKKfijGH3UE1cS6kBBkAdCTx",
  "key18": "5zSbYnX2hdkcAqMGGfNr13UwWw9JAdCefAR73ckcqiidPS9z8PCT7ot3KJqd7zwEuFNSXt5Q7fN1rYdfm2YiggSL",
  "key19": "4ALAfUX2PNCPJkWshHqivnL8TiLsTuR6Yq9ozNMoavxJGRNXpNFDqonfEjKs4VECt9wQgtPvae8nQk6TY4qhvmu7",
  "key20": "JxtcLzMPTuYmgZtjQuth531wdXptPRiWPq9MV6NvptwU7gRsYJvaUxjKTcaz44LWFV9mr2oXd6kGLfvgmuebrYU",
  "key21": "kzE9WhAawWEHopCb6qCBfcx5EALGE6BEonCKrg8vzPf7TipvQzBNXqSUtmyVbtvXLVPdDKqVRLinuXWGNj2t1Fj",
  "key22": "VM3bQ5zbdS527tCNiJP9b2vGKvZGRFAbgeQsUi2TjMdwsAi898puyNggr4sHTJUDEJJkyFaCVvcDjLd8NZhgRPY",
  "key23": "3yZ6uBfx5chMrjQnhu5q4Dgj329ecfyd3drUr7Pm5CZQAkTSLkA4WsDDgbFdi8gzYReHspAwaxEpUKZUV7CqJfMa",
  "key24": "4qwAjNfvPJibyuVSVXErRoV64484Moa8AbSxnPog7wyb2Kh6YmG1eR23bCto5JvKY849HUZFJzcLrWbnNyjKC8S6",
  "key25": "4wpQDiQLFqTeZ2nfvnvZdjtXemKDhG6Y51fy1iEZkwGJZFXFCX5PoF13XEzK3F289VvDThMQE7WirkXhmoB5Uyai",
  "key26": "QwqEGSuKpXCEZvKHdry11nTXsW1rwxtGU6z8gR57tUQSa1PsqaQ7XXpMFMNhoxved2Ym59jKbBB1W22Ypr9ZWQj",
  "key27": "Ci2HaAs1vjSRLs3NeZjoJEw2PBBuESCii7xRPupi5LYh2Rzbs8ggU6afpg96mamceso9KPba3htCUbwgevwTkwk",
  "key28": "dc6Z2As46SU8kmhojWRDijXedrS675YzpeQQNtc6DHWT2K6jbswrrYXvv3Cdpgdn879bxcgjyKB1Xaw8zT5w93k",
  "key29": "4JEAXGt7MdCVFsLvdj9usj15NrATZ1KsEmHBSDwCnbNa7pRCdXrRQvWqVD7tJB52sLthaYEWHHLyEg15o4wSLPit",
  "key30": "3aheJ5tKyZiBb8Yd9CV5K9w5SvpCPxFoNyqCaeGPKYfxBUSVe6dgPyDpTEGUP1Fg8bDs6t77SifQfXMfvgw8mozM",
  "key31": "2TM3xjURQdKniaeBwM1q4LQTYpHQM5TMKgt3u7bdeQtjrx9U2b1JrxJprvEbw8i9h3Z69mGEqEVqMwgKnZ3JJjb1",
  "key32": "5JPyVFDnFmXq2rXH6osoDR1H6T5VxydeEW9s96FjFFaR7eGPurBf5y8hcR1Ls6WZ1w4CFWqWBpi1JyUQ15BY5ChL",
  "key33": "5rRD9fyHiHpw6JTm7Rdy2c4p3Vzxnkz8nT7C5crBK9jCqCjm4f3XKuqyosnE3SZWoHtRuC1jXqi8rnxoDSF1hcsd"
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
