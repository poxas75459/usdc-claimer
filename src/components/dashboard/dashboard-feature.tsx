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
    "3egnxihhkKkVtA43wtswwnDxhETY1P6fkf9meFgM95JWEtwNm9Yccx8qFCyR9pCm8oktPX4Xc8HCT9y6L1voCkyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgaHU3disosxhKXYePST5HG8pVmB1aEaj42astZfj1MyZj9WwZPYZmFFN2YNnPcGh8Jh4Uavwuak4a5FYNVhSoy",
  "key1": "5mw3yLjcYsGyD3Wvbq8gx8ZSV9XbdPw6whB2zbCUCPxW8otqTJvAaTMazT4Tf8SV3qUAXYZckWrDdR58yuBriJMr",
  "key2": "5eXMwBvK2t3VWXvy5dFziV6jczaR8ztSJ2RqwTFVHd6sFuXtU8RQwAFXNdLuxa2nvauTWMHBnQnGSB9pTp4m2zPH",
  "key3": "3Nm4Dfn15gtMcHaFFz3ySE6fmLnNWEj3enTLgxT1bUJzF2wnYc8DrSLttYMfAYnzoRCQCLfijYaBssc9P7XLQdgT",
  "key4": "3urcdwzQreB6wZC9zBBSwhB1pm35HfbhJaHiX322MMtK6rmTfUca2L7494HgPDhiKxEx9vj43eBXHLNFu4GQVMcd",
  "key5": "2EpbBtGW6aX2ZdaQFwHttmcVFEjqhiCNrK2SvLGwUp5hWQjXWasT5sHrVpxX5wH5WrWW1aF8C9y7LXKXHiUXPwU2",
  "key6": "DiraAh67BZUFtugFeh7Bre8xterVDnGHw4JJxMAURCf2B1DKtPzkRjKukRqfjvCPJFZwRwMAHXvRGKsoWaB4n6h",
  "key7": "3RNtfScqWPHq9xYYmLBjgeMpRnmnhjqb26fnyAcdpUYp5nzNVVnTwL69SsQaFR4wpCJ4t4nsecdNUm2KE4NLeBh4",
  "key8": "5TGBzy5fB4hGjE8rDpmgLEtYaC4TvA8MQdLVAvQ6FrbaaMz4n3Ed96uc8V2343igSGsk2sR6uPDhngZbzWtjqZez",
  "key9": "oCgLMVuYut2SkUy4B4iKvxmSCZkxjxaDGuwDgaNrkMLT4v2UDZuZYU8cZRgmjJmL7NAm24x39GfrqE2uE2Q6F2F",
  "key10": "4tWU8PsHdQV4Y4HfmrHCr15qYrvNqrwMSmKQBBxP6YEDjrgxr7NT7rH7pPXTvMpFqg5uYRSVfTkbwfAHgTmxMgEA",
  "key11": "633NQQCvw89yAgYci1Es5aQSbGhys7ETmGtvwnBA8NvqpHvG1jS7KrpVqEc6oBrrvXAESyFrmPEjyS3EqBzhiaRG",
  "key12": "5Vaj5mJo3HpaH35j7UZ5vyVzEZUUSo2WwnvszeHF8JcsYoRjau6jrsKMMpdroFsCmhzC5wh4cjx8s78xjtUbKZuS",
  "key13": "4TCWGoJemB3zvS97keYAJEzAuTjZpjJeq6BKxT3Es18naAq8x9ZU2Kxuxd23pv1qHSTGNWF9y24ZCo1k2QAGfpaP",
  "key14": "3iv4xESdHW3B6SWUdHxdXhhd243ypwZSzySrBYiXFzwB4sBwuvYSfSgNSvUQ9iXUSH7MMhSTYenPM3j8Tfd7nkVc",
  "key15": "5YQPob2PtK2oCyjApxmFzExv1tkvUkvbERDLuzdRHBx5MksVW9jyBqLw3D3MjTb9sQ2eiaLTsi7vYJFq2wSAdf1S",
  "key16": "2P6K8o6SoSLC22mydT9c4ofacHJQyDERmrcyCt2BXCHjCtC26RsdgcX9PRh4c2YL5MRA3hT18HD2TcuABonsXdor",
  "key17": "31re6N13bqA5jN5rjiPMsBzYSmCkaMk3AvK6SN8b6ihAKbY3TeH6XxwmwEjFZ87Hi1Mmp2aCGgMzSa6LZHhYvB7b",
  "key18": "3dY2VnVuMumxDnfervCvL5LVs4DTw6M4uJ7aDzcNGS1jmXgsx9CcsrejXMfLKFyLLLsTEdZfXWP9MuMLj8T13TZt",
  "key19": "f8oTLBZQi8H8NNfjVc7wVHY3jDjhqxwHnwziU93bV3QmvEQDyqyhvFk2syctJUpyiwyN7ae2kEiTGpxjg7jUofZ",
  "key20": "5UugNGrcLVrYePfh6w4NxZxwhyAHx8e16rvAuRugSE7ToCFtAxgcFhZZ6on8zD6xKHrq329AKnAJoAUaFZTAkP3i",
  "key21": "28UqVTVhM1pUheaY8xzFt6vxZVBMKJH2erKFYwfHfEE766iR81ENLmoUqYWRkrG8Mw6ucpC5Fafex34YGKC58Wod",
  "key22": "2sUooH4TNPC8mu2QWYyiEDT44PBe9CRycvRreNsVF6T5NuDw21DgiH5tscaLU2PNiztaK7KFHJjqjYQzwuWjcD8E",
  "key23": "46xsSvhvA1JwyydY62uX9ByPCHGszMk5UfZXWsVASm4YaJC8ZYB2CiLKopyyxNxKMxApAPa2uBMycHYR6ueDzVWo",
  "key24": "47NutenNnBAvHx6TYzRbwVcsA8Gsj1q4xjxXVcYVHxywzs16bEoW8nJsCvCxEQX2hAe1Dw3jhyyzwNmYbzehesUF",
  "key25": "3H6xpcpfmviC6rbDCqXp184Ws4w18Ufn3x4tcYfLRTRY7cU8ft5vEJNscYWqygoTg1eXgxfWjc2Rh9NKex8moMcP",
  "key26": "3Ayg9cgDWeEJDAJYZxrBP2KxEiC6DYXYhViavMMisqeW9diFqN2xNYCjJR6oGgEbZuHx5ocDi3cs561dgqA8k7Ac",
  "key27": "2t3bDgqZhqGga172WwvzLAcfc5P8LYXJmtHsSiXntY2tBAb7w9KPutg3qYcBhyy35m7nA3ckfSuTTYvoJ7Z9nU7z",
  "key28": "3k43DqfAXfqERjv1h3FTeJXw2uU6x3aoKydUicwDPaaGWxHwvgmk2UR4nuEbGgJecXpiWUv1scjYkNZcevAZH16j",
  "key29": "63fpbHE3XmGgFuvpSDNV8FCspAQp4RJf2wU8kLgWGxfFutUzAAycxbQtqhnNmAW27fYeNji5z3oKcdG5aoBNg7CK",
  "key30": "oUPY3qCv7QyiVuFTB5BQgj1Pas8eoG2gZJ4ZDwHxjnXjnXY1YhhHXyGP1tdpuNLQu8nDFYvDS56rpccwAQtVsoN",
  "key31": "4wBvMH1yhGHQqBb8apUS2h969vhLjfWM7g3pbGcNooazzp4j68r4aJohihq4GqhgXEfHuo63PxURiq5yyBMXahpX",
  "key32": "3d9YAeUdFVoKeuqAebeuKp9r3xzGYymVy9FXc2kaveJUUs8tX7QLqyvv1QUxeEdFNns9VE2pNSYpMCRmJ9fCN3bB",
  "key33": "2Ah3xcJfdd2f1dfwaK6jJjPMEFKqEwenx6ic79m6seASEFGWhPwhVDi9MQ4gFuNZ9rKLsJ7RHXiK3PtmW9rqQa7k",
  "key34": "33Tu5YDfUXzSoH4QzkCzkndETFGpenerfhMS7ghcS5uWMXsxpE2H2qPMuDpruBPXqCqHStqihT7YjqoziPr7KTei",
  "key35": "2b4iCfPrh4jaHrwUjeAmMe5oB9NUCjoPG2SRDr5adASABtkEFxddDDNMXoMpvdPwXQqjjb8Hh3j1hMfYtaoPoT1x"
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
