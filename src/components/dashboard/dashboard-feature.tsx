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
    "2K4Tro2PL3u7ZZ8pgSkoKPe1TwktqsDU8PmFmzKB69tiCvp6nDWuqCbZQQ6nXLJS6M6ZzmYZHVE1g7YGy2yQZ4Mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QUmWnpxH1Th5WywynTq6Myjqcg7hfpeEBQdJZtvbMc1nQTzGmfNKrkDC1fLj6wQVLjqdYRua9q6H19a4HfHtytR",
  "key1": "2YU7eCeT3um6YwnE8X5nkm4Aq4nLnGLy8BgCg94hXVo2iwk2rtuxz4cUoyRKdAN8iotWEg7vzYCVjPj6JtmcdJzm",
  "key2": "2LxorjjQURzvRZt37JuyKWpRX9eGDSkZsCRdVWAVVAyKChxUFaUUz1ses3QuKHsog6KYa2kjroqLJ6u2pznr1QGL",
  "key3": "5g992zKA6MbkcwH4XnwKfvKEiPjLSxPyHCUo4vohouWsZXJWwKivs3r1mXokYyNe6s9HL3Xc5NGxTt5PXzfUXagt",
  "key4": "4YZGdLhyVHs271VPYu3Lp66793V9a3USoE35BPBZ17WtYMJjEBCNRoWTLKWm8C9bd28NtBHvMWtEAGJ3muL5ytRk",
  "key5": "2fGnU9dK2uiUVc1fvhMFnYC4zuJcdcTR5YDXYKL3fa6ELTWDu436aJyBdUi3mePuaFiFNDGHbCJxbTXvvtkJGXxs",
  "key6": "2bWsaZgnM694P9VXt4utYFuD9hbKfC5C5GADuBvgXWXv83VEg5rd4gykQ77vz5VXkNtzydv43Qkvsipxm1nMw2cg",
  "key7": "qeiEQnSJmh14oyxPVdzoQDE6JAK49RuUMwEtBsdWUQFwPy2N5W87M64qd5yR8WejLCUgPPQfbmbg8LN9LJdFbVE",
  "key8": "5rTBUCnU5QkrqcRK8vQx7owFMqCp7Bhv3gBKj7UGkgS4jFJsNwGaqou6ipZUqwtL16LrbiJV2u6LKaM8AFv8TXhR",
  "key9": "3SVsCacZg9YiPALEfofvi1kEHgYc9xscfZxqPS2mMJTX12Go3jvaBjMRNswbLuTYia1rDV8PjG11Z44Qk4ywWjng",
  "key10": "FsB3JLzxLw8Jitx2uexPTbvfVyMFLNWAjD7f6nZirGATfSCnbNP2BVuxrowbEDw2cH4mGPUJPLV5YtZmHpppBir",
  "key11": "5oCERVoiGcXvzAW1pHqBvxYosp17zcXCpqf8tHLgKUGXZVkaR2kTw4TbpP2mAjXfRaUGdeD1kQc2LGRrXwQZhB6P",
  "key12": "4yrm8pUbGVKo8bzMRq1gDggPpS4XF58pUJjLxCMMXCcEP1dFm7iPkn12nSnkSgvgJFYpiC7dv5sxjiMHPV7YGSVM",
  "key13": "4XhLs8FdENpxxaThNBgdg13dotDdFDfjTQjXrTYHvUjkutaZAk55cFT5MUeTnwdxRwcBsfMsQRuf3nGSVjr9CYyX",
  "key14": "5tcwLC5eXBYjhpB9FkvVB2eoRToi223Ymcztut2M95i67YMDFvK82aiomqNrnw49yWuQ2SH4qtyehW6iiJ3t3XC1",
  "key15": "4Tnyy9hYngWy7d6govf6R4FHX59zWt7deA9VECuVducG434GAjJGQgBUqB22qDHWTVLdBmkGMJhETyoGM2fp11HB",
  "key16": "2knX86LYdoqHp5co8b4pZE12FwN4qSEdRaCTDPqbJLQ987pBSKt4avnNfM4bde8Q2zcN4Z85KFKFuRh1AfDVRrKv",
  "key17": "21fhdwwTejC9qovt19fLCfRRVebYyytQMSSLQxAf2jEGATDGVVyFqMv1VgS2Bxdn9atFQWvXvqDmdZFJYTmi7anf",
  "key18": "2KbqfoLjgrzzqV6oWGWk4dqTcKEC4jSTEqYQoMYmr9JCQ1ExHzbVzsaSBJPoSSbNA7LAQPFjcFE9LmHDEfBLk4uJ",
  "key19": "56VLDteE9PFnwxE2NPMLBpcVEUoPjH7HyQLZPXSyrY7vx4uUfX4qn7cTKD2bnGCf6eqt8NDTvhEFrkk9v3qhN4TZ",
  "key20": "3Mvqz4FLXZY2MTne1JgPaiRMPvZSGauJ48XnLiheafvK4xWAwXR9u1APTJksKMmYCX2h1q9tHmoFiGchZ4bBxHf6",
  "key21": "5eSNRWcUKLKfvwywWP1jesZ1vGsDVUvwRmgVUtHvPigboh9GPyGURBffLn7LKj21J28s3XN18dAE7H8Z3AqJd3Mw",
  "key22": "31p9Hz8doY9E2E6XXXpVaW2UYtcFvAAX9o7djMTfsccmrHB74ZjRUnuZxpdTYWNeVnuAj2SjWgjSJHh7MGPmQXsj",
  "key23": "5QhC3XzDvrZgGmxNzALUeyXmwiB7BnHM9ufe5XcAaoEJumtU13TLM4v3ZMvLGpoqAhusbH84o9K7SGvgK2A8hdxQ",
  "key24": "3S3vzYv5nBmaxzwofJLXqM8jS7MKQtqEUpGxLC4M6zG9wJrHv3PZsn46pt4VD6fvXV8bTcrfgJjP7VWrJu7oa6Jh",
  "key25": "4QZ4jorcsgwSDrmrhbUYH7RSZHxu6z7bD8cyWqn39HD1N6gW9h4dm6D9dRoTPkD3wxHnPv8E6mnoe3mEJHRvkmNh",
  "key26": "4tZ7FSBLzu9jCFidk2Smm875KXhJU4Zr5ZmJFfecanm8BpRBjCRS12xHu3cUpMj5ZsNY7Nk2ZqGMr1mMUSrqA4yt",
  "key27": "62now1sJaqYVSbWgbUzBuXAyKwJQJS7MdznkBcDPBe6XABgLZa5TnddjidnNeiHcmcwU9QSn6DgChN5L2aySfBSA",
  "key28": "3Q7W7pxewr2zsJbzYqKCGnuJGnfsmKiqrFej9jzNrrysqd1Vwf29NtyVCJetqc9cwhTeS1Y65b5zP9UHchridhG7",
  "key29": "3RgQA5dTbzAqPnBmvGZ11wE2bEvnXYVrAHLzxtLAGLLViVTr8uhsURmxRobkvjk3wQB6PzzCEJUhZ8SXWJAKhKwf",
  "key30": "3R77BKueGXisn5ii1NB1fSxRsy4NkeaAQQhah8S1n6Qtgy4oU9Y2gH4v7MwrW9sbf5BgdpEwYMjhZ9X9pmPhDfq2",
  "key31": "5Zs5Qo5wwR4LKiP5eeS4rk29PuistJLsLDqZ6WWRfvgqdwsXyDCBJ8AbbGYFSEe4fthhkW6eFNTHFQf1WiZ4iLi5",
  "key32": "sM2zupwM5riWYR1kRVFrm2Yfd1jQTxQgpDdUhsoc7hTaLt82JLvJRGhb3ZE9b1TnhDQXpSnebFZ8gFf9gy65C6y",
  "key33": "4c6NtTruFcdszhZ1NJ8nQKdD9jfc9dd4phbtH9RF65u1c9guNCadWv9kD1ipZp9iBMeQUsKC3ADBG7HPd5CFTZi2",
  "key34": "3BZj9QPPj2BG2VoPcLXernxek996Fy4XXrme3byhCCRtB1LPK69jbr8aDr1gfhj9H7NnN5SuRg88CQL9cANppJ2k",
  "key35": "51tUMzeGuW21X32SG29DEDgrUojumvodd4N6eq35MuGeTCYkMMVr9hVWZ8Z2yZpXYPMfF3hgcqzwsz2wBN7ZhcbM",
  "key36": "458w8g7kNGzkPVxYaNRX3WFYsEFTn9woKh2BpW7M1yKMPsxQnBRcpXEZPS95VYV8sephyt8EAcHmmuHfXZANFoXW"
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
