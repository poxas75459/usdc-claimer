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
    "5ASR5NNZqtar6bZcaKn5wEBodxpa7aZZQPFp1L7pTQ3jnzMt9vXeX4hewsenfJw3SwehMxQrRmrNkTA2dFGE7MWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kpDtbediQVvgaSrJyBfGJNRuFEosVJgPdfKNY2f3ofQ5g1ByRrqQiBsygbGUANdS85ZYeyD5MEmcGYcQFPzCSzW",
  "key1": "pzjhowKquz9FrGLLCAaYautEuaVcUWbW5zmEtf7Mg2wAB59buCwFocGetfGXqjavoXk4uietX8KZN9QT8KJguuT",
  "key2": "BApW6j8pXfhpqy2xwmAx3Yhpacj7WDR9QBThEZARkT1eAXfQXSCmtN1PtuQomH6PoVGi7zw4ni7wkYTcRmphKP1",
  "key3": "qTbftAJHovbEpsaR4DZibsxAAfUQJcUFvF3MDSJG1Hy2aQvuvMTLeL8vyV4dight88YbV7xPRPktTu5fKYVd9j4",
  "key4": "htyxo9cdtGu9VjnVKh5tUca3Kvg86Z7wirhrT8PxkubLL9ayiyWe9xqqD9j1budAFCbPXnURRHJwFHNiLG1tc3r",
  "key5": "5yNLhrjaVk7RnVFAuGiox2kYpUUtwcxEBnMSS9HrZN95XLEWYRjVeYdAc5QPbRWTECqLjsD1sA87iAGCU9mbZD7J",
  "key6": "4mCyqU2kBHoUtUqKGw8t26r3GxVGvLzuhFLyz6KN2rAf2f4gCpvdNqF8hbyUb43oh1Gi9HeAnCPZfGxqr2i7ApJn",
  "key7": "4yKezP1iXmMcvDMgK4TJcjvqgsHjBaRtxT7SGxeCnSd942CLYPptUS845jhY2oSG4vLtLcNoukYP3P6bN1t1iLPw",
  "key8": "4Bnu5o3JBi3x2HCJBe7dHi13rMrzyPmt2qD6oQzKNh3MTx896AY8mUs4gEWCNKu5FQ5CqUrLrZXpQyU8r2juBLXz",
  "key9": "ZZ1NuPbHyrwVjESSn1XkmyhLK7Vp24GSrhytjiMBEXAgm83yTVnwja8GzpWh68VNUsei2FvQHEVN6ZfqfmkKh12",
  "key10": "3EnVtKTpQAePnrmijJKPy4Bvw1c63kqfcsasE6VFtobiWsEPm31gq1Wi9PPzVwhnyDFoaungHEsSjMDB4ppxeJgQ",
  "key11": "58nh8tcM1wcnWsLFmj6aSp5qWVRuV4BGn7WpQPSREc3KKqCoLAhkbr51uzR5q46MCJqZsgzm8jDuHJj1F3g2tNE8",
  "key12": "5EbCyPDZMihq4FtxYTDJayVSScwisxGx7dPNFCmwKDVZB48e5GaoLAR6kYeaLQeXquhPQgCK6vAebg7AUsKsCYiA",
  "key13": "2FwxqSJHPC8MfW1BE2vzS9fBSqet7xmDHnqrQbTLKjQMV6AMzhJq9kFHxBszMx9M5CurCRGjgaFwZaysqs6NCuZt",
  "key14": "5PGTqyh2fDKj5F3P36uvgFupscBUgjPPYJKJ98skC6QfqStpfi6XZz84y2XbYB9iKKWoJT7N67p5ZccHtEEZ4QuE",
  "key15": "2sMVC3PXXKazuD13cZ3bfvKC2K745ZwzPDWxWv2WhkTuepxm8e8P36t3JPexNN6M7y3RiFwEikABf4kfh1mQLLMq",
  "key16": "5Z72p9rqcz5yFks7qHhXWXpx7tQ9919tnxZUd9Ds4iLESQ5A1zE62h8B3pcdpRCSzddNzsK7m7PZoinCeKNmV6pN",
  "key17": "2khKsxu1agKZzvGutvdTumisSrJvETX97qotjGZDzggQqrnYhucWYCC5TZLF5rnfhs182LRTtYrbDZ5GpRw5iU9X",
  "key18": "5Xeyrpv2eZBtvZwfc9YJymn8ZNNsyKgrRcUdgwNWhmmVsesj8Gnu2EZDdSP7UPZAPvSiiVn2G1YErWbS1b851Tf4",
  "key19": "62xyvsYHr7pv3H4HWApGAE51kjDPsScvuZR1EZzd5jk6mwtEE68qD4LqNcxrD5aZLyfPG4Ai4ZA9crgV3EesaX8B",
  "key20": "3u9VwVoU72aDuMpBxDcALBs6fUnpWHt9jhEQtSHoXPpoZamLLsP3ctdjaj4ZKdsXvroXWqFrfswi43Bqf7kx52rc",
  "key21": "24fyAzuenwTNtapZZiWm79JB56qCnpb6QFNnDyn2fybm2JGwTWvP3QGZVu82wQ97rEKNJt3AeMcGhT4bxhE7iztJ",
  "key22": "2TYgE78Pv2utNapRs4RKkbMnqnYGC1oaHGbRtA9Lxe4bH3WVjjbeaqhJWByf3B7GYHNx7mfT3pPysREpH5cTWiHL",
  "key23": "6bY4fjMLSZgnXsjqS3uYXcHUeAyZH66N7W4pwznBd2MJa4kyFavbSPAMxsUsuR6NEjkDuEvShkXDQ6HHgyNFUr9",
  "key24": "2BeZZZDKRztzqfiv9HL6nwUpWueJdm59YZekwKEv8gzVGgoiaNHPW2YubRvsf2Wi3153Wcjfq7TQJaNoANXsTnjt",
  "key25": "7pyKyGd8CRjeaYFYSFudd2YEtQF91xTZMJtj45jR5Vz8nJsQ14RJhyk2aPUbNY8oo7V4rn92i24JtC1GQAdVGdW",
  "key26": "5xrZWqxn2LjRHCdMAnLHz8Cc2HUZNMw8ZCjyFHWfz9eEYKVFCfeeP9x8KhY71u1j41ZqSkGQLWVDrxyJjX4K6FGX",
  "key27": "57m4GeeS44pNhjA5Nsnvj4t3Pg4nupSYDzbwSTEvtcdvnNVo471NGn5nFF674XYGVYvLPb15iYXiCzmMsLmCgAka",
  "key28": "MxfAm7fdksoP9SZ4bTovs9LyAxdpBmriShADZXWk1f9uXWs3w4HkSa6YHizSQvYM7d3ZQrq1MNedgJ1hDFHrUkQ",
  "key29": "5TqBS9BbyFpB7D9rqrBn2vUFXw1FMMGVTiPvEZKYf4yakhgJtHJCXKKbSpqndpH8E1Rk4qscHp8SkHu3ZvK8cev",
  "key30": "5qHWTMuQG3QfnxFaLCKnvQUoTeMW29sat7yAMkBdCKWAUVabDusvWCkxNfCVtrnJXpJDhA8iBzJhtiQtaoQtvrCM",
  "key31": "5iFs5mjSJ1YMbnhWQZS5hxbwBCXNMJ7YkgdWeRZ4aRTL8wspNfNop7qmsL9Eu4TVdnr2J7betHEF9nVhHYAYUuxv",
  "key32": "5tbJeUEmzD1GLnqfyhQfW3nSXGF1BR74TwDr9BZogFGRM7ryY2Y84RrKkEnYsjmmDpZbq57Frdi9RqUeELZRRgpS",
  "key33": "59hAdYrNG7KFnkcTUUyzcpSHvLz6nkfTgzfunYubfhTUmdzRREN5ASKGqdxbcWT9K3sr6Yem9fD8c43rpFeb7VkU",
  "key34": "5BQsZhAqEciDKDhmjwFf3M9SbgXA4dTytAtTyEURxpxLcTAD8Xc8Lr1nGoWeEzgz15ZLrsdqnfTGjvjV7Q6yVdJa",
  "key35": "3mLyFcYKN7aBYyk6noh7fMQ4Qxs5zm4aJcCmf5bvede9C1jYuVuz4myrZ8a4jPqXLeR3cVSSpjU72YHBWNFWUi8V",
  "key36": "2uvFZBircdj5yQF5ntyLbPmNxVbegbs6C7xkyX7cy5rJFN6wUEYpgB5kG2ccNUdEUPiSJLDbHNd7YQG2zMQiqTWz",
  "key37": "5nTHvZTjgY6yexFWDjmSrYHAcewALW3PygKN4vTPj6BM6t9KSGtCMepoyPo74xG9jTmT7yKwSw7bXb7o3dt8rgzS",
  "key38": "21ZiLxUTWkzoZVqG3vyxv8B5CWXThHzUn11QYFdV535YjANacDjRMTBBJyREVMTD2wsjRftk26Q39mDFoBkfSY4A",
  "key39": "Eygnem1SRjSV5sTQ3XH3zPVMdJkjR4mmHLfzKxJZfianmofrK2znmJFGRyj6wiHsgZDkxf9yDiL1g94qDvKM6iE",
  "key40": "5KD1DdtGBybgEMmpRqBXnqJ24eRVbtCyG7myNUvFpCjyQ6xsq4i45sVnTV1ZdEtxVycBtE3r176WCQPf8L8Ytkk9",
  "key41": "54YbVAuuuwbFqpFWuqPhiq9hiCRBPsLiQ4wjNW9wd5QsixMoJBy1A2KTCE8d65SWJqqTAHNYMsyVawWmoP6XF5bk",
  "key42": "4KN1X8TULWU9gwZm6F39WkjrsfvYgu4sEic7DevBVbWyqnzwEJriGMQUqabravUcddUMB6PwXTxMTTDoxxdFSkML",
  "key43": "52cT9pMumivgwMxANeo23f1uDPg4hjF1L873Hkxv4HBBys1UViurQPtJxKR68A5i84YNb3dTMEt62jDizTabkS4u"
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
