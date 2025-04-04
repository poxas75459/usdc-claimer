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
    "3xFLutYp1eUudVVbeRKHrSfb4CzC43L9o7bTk3oS7fjVsaPLdgRSvpbhWvK1Kpe4kGcUJThAH5sTczEW6ieQBdAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nyYiQpWGgYr7ZM4K6VPsrLTwyWqdxbWM8tBNxY3xh6SDugeLGLpqYYKdbQozwK92XQFhd4UpBxhcWJe4eFP8pDj",
  "key1": "67TSehSKAq3BrpTzrDh31QF55Htm5yLfM7z1jvm7GDY6otZeC9rJCYcHUyCLqhxv8sRRzX5uHgBkdLtvHwRuSxTQ",
  "key2": "bKteJs1WEqkQZT4DV642KoV8PsmLdfgBAn74Ef3LYmZYLJcHVNrHJQHnmcb2xBPX9LCi5vNTwshf8uJXmjcmpGh",
  "key3": "4TdfFTusX3Vq4wCJNZLSEw554k4ia6ZwsvTMB4gh6xcApqyJAhXjwUqaSsGzviM6T7FbRDbERy5krbjHFeZGp4ga",
  "key4": "3kCcxmJinHu1vG2ofyfVVzzRM1BeaukyoGnjj6opg3zgws4QGhbsajRW7VyuxS1AYgByw1yE4pwkVdzHrgiggkZL",
  "key5": "31txTpd1NrXmq33NS8SKYDaXgZRX4p4WL384Xnq7AP8weoz8GZE4UZDvgTzVUDVYtXQadpJoTxAuWvxuuSu4M22Y",
  "key6": "2Pzh1cbTbPAENwBy8EmhgniTC8o9y9BZgjk8vNQRT68PAKyiQLLxUn8cNHxFibTSyFE8YQ7Ff4HLVD2TevMjRB2",
  "key7": "2Uhy7HMCagcxB8fABtH6Yijt8Lw9uyewEVDFEQXTxZc4drA44xdhgtnnG68BZ7Uei3FBiow9jdr4EgP3kMtE8EhH",
  "key8": "583f33NnAVFrFt5GMAWh3b55kmWzBSpfX9651HYtA61NGgu7uUdhHMs9FUpQ3RHikkyfFPgLuf8gPeJRJceRfmWH",
  "key9": "52htRs7xNBw7a1L7CgQknxUEJWPeyaW1X8oJsxrNtpDio5Y94CS4tcXFQ1V39a1PZSicSdCnsSzXhLHX1G7rtjp6",
  "key10": "5DktC8fbsutjT3Uu1nCjbUavTjCbLgaRTxkx9sDuwgWtrpUsaz8GSZxstYUDES5WSfrCVKKufHiv5VBo8hxRA67B",
  "key11": "NXQWry7qrz2jfT9BcwnxLstUmKodm3f13fqTzKo4fow66QBbVHSyTRbiGDDnmokx1NDY7dnGJoLVBdSAmBizogi",
  "key12": "3ggmsBa1SuXS6czuUe7juG5NREyq4YTQ7LWLT62fpxHEZmL1pda4VUwh36Agm3L2CaoyFygRXwcBdp4KyPBk4y4u",
  "key13": "2MoufWK1dASFL7VqZRQaMqww6J2JkGdaHbwZZ9Q4TwUPeikMpmahnB498ueuvU4qRMJVLX7vgPnNa8Xot8Gk2K68",
  "key14": "Df8qxuDpvfdXvHpLdFnKzkM2HPevWDR1414H1zjJnCMZQSgQuTEtWR6vXSGCPufxZrkXYpcZcV96fpNeodh9mTY",
  "key15": "2eMnuuayBhWyeG6d1DfKnWfpdLCGLgQ7GSGSuQ1wgop5AcN3gJyHyE3pSn5dKpUMC5xiAvE3vTsqno5ShCWUkDYd",
  "key16": "4TFD1VfJMbx4VFanTsgm34AooJX9XdPqwxctfmYeC2qPyChDjhxHhauj49uDkBntJRY7YSFybaJprP4M1nx33G8J",
  "key17": "2MCNSYfY3hFQHjtfrXbCPjVS4XKVuRn8iANTdLZsYoef4thGngPw99J7h4XRmrFdfb8Zwaki5GSJQXcr3mpLzJWv",
  "key18": "3ySsATHmer9RWzGLWxgzwzSawbtY1Cmk1YxQ7Pk1zWqdcQvAohYPUJFAHPFxnXUpinMPihG6h23Lw9EUiMBZmGiu",
  "key19": "2MsVf9cA97HUfpp3zGvcCCZnBDRFG9QAVBhsCvFZ6qEjCt9h5ASS91rBBCwVmULbhu7PKzUHiq2VY57EYmccRio2",
  "key20": "5QPWYox3MHV1mdXoFkNG6SnqvkmtxaQcE2KYdd8Xai5uuiAMbKn5Hy4UWtr8cxSFQb1XGJx9TN4Ax1jJBcRdz29q",
  "key21": "BSJ12S8E6rt9n1JhnAsazKU2XuvMNUxffV1LtUQanyCwTg1H7maLAu3YU33qNgs3RqZuo5JaETDrtXZMez5vsbU",
  "key22": "5eQwmXkFu7UZnzA1vXNuXxGrk5Ep4QEzvHsLQufBbhk8CUXdBAJw5KHR6PoL537ZuKnT8ySoYxPuFGShNrGPqtSm",
  "key23": "4L7QsQE3JauCQfaRncc3h1NdrxhXQuw15enPrbvUXkn5EEuRqU9hGbRJyQeq41xreVNQZGAwP7e9vMbxiZb6VoMD",
  "key24": "27rWRacxAeXvJ1yFDvdpJExA2dYXRsfoc1cHHwBB8x5VTvbdyi1oKGH8PJDjiLJd2c5BVw9nLivwc7cd42sGKegy",
  "key25": "du3eiPhdYA2nwBpsfnX6Fwe7Bri5T6pwjrscwA2abnRjtPmmN2Pon4QzJYVsQ6fESQJH4bvj7rZ4WCqRn4oV4sW",
  "key26": "SzCmLj61Y5hHePi3FuzzJFgBcGgHsAw6jf64vqF98MS22GutXZ2ALu43RVeVpT9hzUpYRWq8oq4ebK51uQmbymY",
  "key27": "551Xr8DnpeozWL5fSMUpBGYHhSemDv3nEaxAKZfNunHHJApm6hg57sw72vZm249KYNZPopzj5ogoUVY4jrAs7cWv",
  "key28": "5itCgke6jRxcjDyLHdU2MsMDqDupnZpLHYSLVEQuxp7ES2iLo8uoHZWwvRsNcFBZV3jKMDfHKiFxSvGLsr4anMcq",
  "key29": "2FLPQYKJqM2zXbQqqnEtkTpHHWTbChS5u96BMe3Qf4wYwS2k87Zgp9X7ZgYhgy9dyZLg9zBdiB7x4JFL8URRshbo",
  "key30": "4ncBn9m4WDzu4AdfrVf5WZK8xAdvBBPCcr7yX4i3uubTM4cwtzBrfBjksqyDYW51xByUmZfovX5VmLybrsxceSXx",
  "key31": "2ewVRoC5AGMQLCvPcRTVGxLB4YkkZDYyjH1cNA2zoHLLs7QQNtmKpXeNAckYNEu3xfHU4Vi55k2Vm7A4qP7oY5PT",
  "key32": "4AxQYvVQgSwpdej97cS2qpZt72CZLj4EcbBvUpMSQZ6w5JvK3c1i4NigoAexX5GMYbAEg1oL5wYkmyu5R8u7fELo",
  "key33": "2gAA8BnZx48aPrHjt63fMqthiB5eEZJkfiMUYMjXPMz7LxB9hQcBYzyzQ6bDwrbQBtdMH6GkUM1h4rcbnT2USDe3",
  "key34": "4VGXuznwCCfDaZveVfuo7npFZJw7AJQziDh5xMSJfT3CvxtovRoae6aFgzx1nz46WnuM4ZWrWwkY9rxFqHgJa2DE",
  "key35": "3h1h6FFHrDN95JQYcZtZBfTiQh8V5nJa5wvv8JpefbRbgr7gqPLWpFg9Rbb3vnLeHZ8x794EvaXmXV8s1HbvCykJ",
  "key36": "VESTRa3NtME3sZ1E8YEFo9VrQ2gt37yNjeW1Qi6Sz2qN4wUjewqbmuHJbUMcE3mE8ddh6HDiCdJJn8cBqJSEMDz",
  "key37": "5KhUaskRHJDQ9vgwsLM3FWUY9u8tedvqo5dJ7PAH2H1Ne65UWZihXgJJ9nmFKjAbyBQ6iqsFXjmCHqwy929pfaCA",
  "key38": "3KSKE8wP9hpRDdxprTebUvYWiT5zXZGgkJ6hPjte7XxSorpXRtVpAeX3qjguP7hoAoqc9LW2ZKvxsfE5qF8zfJrD",
  "key39": "weXQpUM1o54iHfJYKAymFCvkaP8n5qP9nTBBWGJpHb74QW6UKg1fFv7MWSbSHTBnLWrytKrawX2ybyoFiHBJm5L",
  "key40": "BDnu1TiTfbYWpUt6kTrb3FduiCNikc9GyKw9RXNE4FqMnsjsSfu3pswLKmvqWoJaefYE4C9DF5fRYAXdP2zo6gg",
  "key41": "5bVJGRzjush8YoA7cKutTYsvQ3YK6EwAQ3QG9V4LRyexLzrcqccbZBi18H45mQZM2wHaV7RR3ri8cejyMU45MHFR",
  "key42": "3iRY2birCDJuuZFmeLnBbgDCnpC4EK2QEvtWSTkGZ811trMAfzjV8sRx57FBRzca63Ps5hpTxLZh7SffqNJoVMTw",
  "key43": "4WwUuZH9X5MVpuxteqmPRE2H6uSzAg1b2M7srvk7i1KZJ64ZpHPDci41rNPQUmqdWaux6U6gz9etGDrsCsiL8oZX",
  "key44": "4d7RCtuhVy38ApRVJvVM2U3C4KXtTHUMqVWGyjNytLgTJ9wWFsfzLr5GSUbtRb7uhm9hKjCsnSaVwiuaZYs74MjB",
  "key45": "3SHYytHhmnZFnHgAiwJhbFSvs7NTWd8ymiXerWjeSmUcx7SNpkHJLyigzj14VaGMLcgr5vj4Rm6nZUJpqM3vSo5c",
  "key46": "25ALjegARGhWuViXutBwjFP3Cvb2MEdGBRmMwakmokJMDu21hgp6diFN4ykugFPuzgr5AwPsHMwGgwUusPzB46Bv",
  "key47": "5x3mU9Z14WWFLWkshh8BquJzpSN8cjeNrDvWPCLAg81TEah1RLnXcufg12PEcg96na5fhWvSvRwMejLJ9CbkThsL",
  "key48": "2HMWPPDpS7s2epbGajeSVhDXAqjJw8ep2K6qSXp7xt7KjH8kZPX8htCPrPEibfkkAKmSfDy56WufjHNEBzCNPRDE"
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
