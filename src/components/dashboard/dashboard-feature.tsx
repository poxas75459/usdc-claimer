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
    "2MfzqYsoMPbLpZHUu7nXqpsshAPDGpoTCVSbjgNp18SqDpk5wDNaLg1bavemwXnptcxnUXbF8PhvPep2CudavZzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GfPBbqKdGkkUGM41nRg4My6vC62DyVWJsCcoR32xrW4zUaNrN7mNhRmEFg7hWGdpSYKRAP2N3fzFQx6g2at3Q1D",
  "key1": "5tcF6dmggz4ysWzBcBMRZYSXpxhnfo9bEiTMQ7Qi6oAyWSVkDBokiN1mqctL81fjo7JpuXtg1rZk2DLyTVBeipWa",
  "key2": "4vihWiRnTnxz8ErGEHF68fsftineWuJW9QwjGWXEE6i7WYwC7bcEvbv4jajicCurgzyksMvaV4UH5M8U4TGyg5Pf",
  "key3": "4174CmQNyag5x2d5bYctnKQkHPGxFNwxBhhmH2drbNZH3Q2saArYGzYmuva4rFHYGbr6y1fKQBmBmbTEfGKyA6Db",
  "key4": "5AchhneDruMo4io9QKdBtX44Q6fKEcPAKjuSgkeiqU79aw1Y6GgLxZRMTjkLudpSSh87Y1N4B7k5ZrznFkGnS2PL",
  "key5": "4BLVvDUbqYXZXAWPtWXxqjRKDbFsvgbf7KPeEeuDx4LdzKFhiGDsQeHBWrUYqYNsBU2xn1tkzj3mvpZRRGTiraXW",
  "key6": "64MjUjUFfstHFMyqrXh8cKZCJDmQgCibnpzYSDyNjnjdFA4rTDaHXpke4KC3KWZvVFncmEa6TzLZ49ABHXiHFppj",
  "key7": "3nQBFyaKfKHdZtUxrtLup9KRCu78DegDMriu3VvuSm2tEAGRPk9jKMVLCiTRRBKcEJghy25Zbk2mtSLJCo9bnjhf",
  "key8": "3q2eW3xnG9sTmkPJRX8u1mXpZ6i6pWYuUz492W2c5a3pEHXqLoju37JisgEHv3XVxqPYKQqBUzSW6fxQTSFLzh4d",
  "key9": "3sLs83JhjzMCZz2KBcpjz6VYWxeqAhqDjHaYXQBEDqP51hXtgZYEMbouD4QtrMNgcMwTTfL7gkMtRXosWqmDwUo5",
  "key10": "5jZiecWzF4CGAPDMwKbmxrqsyXidv3MdMd6bstCAYWfvcHPWmTT3srnFzMNQRNYe52imkVJGyeJuDuwGnoDswTXp",
  "key11": "4u6o99dgUYP4f47ahMxyjj1oj46Je17du8bTKYG3Pxgc6qABViaRbxVwtru8rc1w75qQj41pKwrMSksVWWLFn4iv",
  "key12": "43v2Y7P1v1SBiWUxnJBmZfwb4st9Rf2Lr4BRuo9ANAbSatw1YEPSUBejfkpkWwU4Qy6G38RJkYRSc9H8BE6ho7H6",
  "key13": "bb9ox17f9NBPxzjqBiBBzyAoWM6P9EuaBuwhsngC22QTNHHaFYjDxaYQC765M3LibKFcoJJZgVF5ZVSe1dKkfJK",
  "key14": "4h2jD7F4WxUSqXiN1H8UM2JtRZwnagTy9jXLHhDP7dXJ271y519RqFxXNvmuyJgjroDbdXMKusgqCXftvwbEZu2R",
  "key15": "Bfa11hzMa9csVb71RMyr5negWUPMQHBAKkmmmAU9vddTZsTcN7LcnTQgPvsG24quxABaJBehmE3mZpqq1K3zn2d",
  "key16": "3A6QXQNoqpAUvDuKrAzg2UHJ5CmRtmtKtymvrDPMTvj1s4wSW3xehe6n4vxKghBBkoQbBGaS19owV4cdTWWwim1A",
  "key17": "5Kosu5e2Qxgscj7Nn8jXiutJo1pZW6XXFfnEMMK2vnuqkjHkwMMsyfG66im3A2M82zhrZwMY8t1XC6hDwAMDfLXK",
  "key18": "5HS3KphizqjxqpoVfKvK2H6o3GsVE742Lc2QgZRPKXN4LeYix3YEFE1HH1m9tnppecP9snTbP9MmpeGXWKotZd1j",
  "key19": "4qqPQzCjqWecioxSTTck5x3HWi1gqEnQZrqqoCSM2tV4Mkzj6P3aTBp5sApD668a994YVJjy728seAG3dtpsmjAp",
  "key20": "2xQ5DNePKdUoM5NVComj221ma9crZMdLnrnVkoJPLgXggB4D4vr3jaPv7VSeMCNhuzrF8LQHoMgGh6hMJipaY9Lm",
  "key21": "65pCSkFZ5sK1V79KzzuWnBJP3emUY3Z541Xc8H1AU9Qxe23xmkhjFN9BZiYh89rMnPUCZyELt5wA3E2BjLLEXSbD",
  "key22": "5X3rFYnFcGQ78pWS7ZWtMAMwyvKNu4jhFAHoJ61qV6JQgF5t6waDowQKsbq2LuNdkNNKpXKwKXZsPdyksKe2vkEF",
  "key23": "4tiRQZmK9uKFGFrzzpbU8PNSJGgiFWCubpUhNpLTEjY7b8eaYr5JCtBcDyE9uR3hhctaTzv6isdLDgq2LcoU1Wfw",
  "key24": "3xTVkNizTNJq2vadtS3cG4Y43ZQUXLQhmR4XkoxnVWMJ4rpL3LcYMhaMpyPvANAfs1wCG3WWJSNUvWj9Rora4ZEK",
  "key25": "4pivsSJ4ziCWV9iZdjZBvgvzM1PfMyAjJoC68WHX2B4npc6KLFfzbC9GwQJtJXqRa9qM1YecjBnvGw2CEnpshMWF",
  "key26": "65RzsbCWJvD3GJ9eR7PhsvZyYQFiP3YT46849BqKrUBUsdLtHt4qhfJL4E9fCir94tc4Jodytp2eakYYArqJNh7m",
  "key27": "5CMEzdhpFP1Q2EgqF9nuJmFmzP4p4ANEmsvsDfTw8VidKCLGkhcpH7op76fJB8NZYNxK7xRE4ktFdiTZiMYN5nMr",
  "key28": "3RtQ259GwJrH4seYP2CGYrWQ54cs3rfuEz7PXpMo1Qt3wQD451tDYp3WeDnQi46CNSyjacx7ooSHQBTizZohkJjS",
  "key29": "4VHAnHTePgd3o59Jb3eUhEPP9KC1ZJ9sk9D8V5thgSenigfTHr8wgrSjHYR8i6ePjRwT3jxekdZb2BnrTQZwZuvu",
  "key30": "fx9CRueVAGivYERMJR67Zz3seobpsX4M1z2iteeps7kRM85MQc7T9P67VW6XF9n7suhSnKezQ73kZpe1ANfKxNv",
  "key31": "3eBBojpPf1Cpia9kopRhm8Dpa1YAAi33pzz3o82R816j7rDocR6YxrKXNAfpJbyWBwZv2gzesSrXb47TRTjwCkr5",
  "key32": "4CqJpn5St64nbSLXeQGU7xSP1wucMoHV5eFeUP1PWwcit5cLYEcybipfwbxHjZzv4s9ASoBBixDxqiVoxsRSz2vS",
  "key33": "4ssMQyk9quhTkar9G4xvruNVnPRUkaRQ3XWyryFSyEkNvtbE3eh4CrHNpn1xZipDEwqfVYztnMbbTvJaeL9mkR4k",
  "key34": "5BcF7dKYmJp4sXuxhFJ1cv7WgH3xMUgrSPEsRBv91vZn6i9XHoaGSW2NPzCzLZo1QtvBV3BdpVeqTz6yNJihGras",
  "key35": "4MzvidQbJTo4mSpKjcQRbeNxrs2Sn4oanW8h9w6PhFSE9D9kuSX9oeoM6ysYs5HGSgSwERw3WDSjwPSYJCDgyY6K",
  "key36": "3W2KigKQWHXj9QpqjRvHYDWL965e4tyX54yXGjMD3yBnPjSxaqRSant6nsFtDtnL22mNCRMecsMF7vJSNUpuJmfN",
  "key37": "4zKFHzduokgNTMmU39GXTEue5NKBvNhph2yVaTF9UvgVps6gArWdRd4D9mxV6kk4mr6xDYAqhzC8pxXWEfMxs7W1",
  "key38": "63KUc6NAic1vjt3E385qyoSxN7d8UAS5hdnD4bJTNpQpCki8dubWcvuTpPGwxzhqgzRLrCfRoitx9a1yTrMyn7qX",
  "key39": "2Bns7MQVNzxGKS3V9Sq7dQ42JKDZ1B6rmGznk4TdnKbKjiEerBkqEb9jg9UZyETUhMdNd8d4tPoN2y4dNLjE7jB6",
  "key40": "51fj6CQcZi2hCsv3dPkKXcVaMnFDp5gr7viUYLG1JyNxPkRrZ5Vt3iAreW1CiHVoaQT8fCNddZS2eDsa5Esr7RUX",
  "key41": "52brn4wW8MoF8GtuEc7JbRng4WNJsjgUERzb79LsC2zeod8rLrRezjgbrC4V4PQmuu8t3zUQTUuy86WynmFfW1qp",
  "key42": "41ox87wWmydsmKDLB5dMfjQKR5yY4QUbFWRWjo4HHmsL4AWdBzpmyJ3tN23Jf7nYQopJofi3cFj89qcmWGQFs3RN",
  "key43": "3qv6drYbBtxoxUtJB76Pa3R7nLH6vT1ivW3k4UMzAwrByn5dsDHZKSNWStshvJpy8PWkNgquwkBrk2Tc6rXqDR7v",
  "key44": "qQ5RTyWmh97Nm78vaV1g12xtiMHYApdnvpWpzo97t8mznfkjoompvXPZegaT4ky9RfpVck8Lf5WJqkAnvXWTpRJ",
  "key45": "4umsSnwXWAfjgPsTGLJoaicAKbJ4Tcwb3rE51QsaVk7uw7carBvueHyJT41VqzSErdby9me4NFM5iaFDjJHv9akd",
  "key46": "4eBUhxCTKSN5hHUgXxnCfa2Zm2g8ts31kA6ChTnBjMs38T3axGas9SWmiT7mDojZfEcmDXaDmkia92TN232fqaoD",
  "key47": "2XAdCYArQnqBTZYLeXP7zkvQyUc3Tbe8sY8vWJVvDzUsCuADQy9WMfTDFJoKJm8dvga6yPWGqH9TRPNDatKA57hM"
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
