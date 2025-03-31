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
    "2daWhVWERw7ecJZCGrdjFchqJXAK5usutng2sMBBFk9JDvTP112VXBy83oGYwess98TrwA3UpoS54AsPtyXzitva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rcYDEN7MrW1tEtTGqosN9cH4fTZBG8dn5EKR6v3V4tT8J6zRJQ7iRkVTyiGRZ8FtiQgWEJ3CNLRSNgMW3wCc4BF",
  "key1": "2KgW18VksRLJx3NL5Vf8N2gC44RUGKfFWdjgpmMUYuSjWrdWm91wBu46jiFondxQaHAnSYMPpNMMxepcKpizFZw6",
  "key2": "arB421mDAk3gGRCkBE3rXsG1oFpGEehr3AwVhATQBwCd9qR3SkWtbjQhdEhq9sBVwX1ZStoUnKEUAa7EvhEiPFN",
  "key3": "2WiE1TLZsGCKXPhcuVTzc5uLBFUL5yiCTR1KDMyHuuahaS2Ureo5twqZDYF1Ad7tAr3omm8VS3PnUCCrAHmj3EDE",
  "key4": "4EV6X5FoofD2zHkGrCXeiUPw9bG84oZMexTGSrYUqkeWU38mzpxERu1g2sKZtq39HynmcXLZ5LBjMWjPhThFHrhp",
  "key5": "2HifG98LoqdnBVN4HHrwGfM1GR1GzRgQ3ayDk1L78jkTRNCBgGJL1BAahkFK5amtE1cSHiHtJdn69am92NLjAkZj",
  "key6": "4bcpecv21Akivj8CDbCbLBeWcB3Hc6qHTfUCyinPnYfqVLif97nx1uPksEorqMQVt1cccEfTF6pcjcckijX9ywyE",
  "key7": "5Vi3jib4VaxF8FBAr9GpFo1PdBYD8uomu46SZVPXeoSrFTYoxabv1etgY1Qyvyc1FbCUAQ6PHZJAs3vuZBk2fGBa",
  "key8": "5o1WRyj8Sass8AY7fHYPbsuyf4UiLGotvJrdPdmyDTgepYefsgHvmizCN7gUqWxwS3rzdon3j3utzNnJSgx7MuJw",
  "key9": "4YtdLv8r1ihtFwushuV58tGtxAX3rquDK5r58RTFuv8nE4mTwybU4MFjJBRS54h6FoQrzZxs7sC5azL7m9KXCzsD",
  "key10": "3UepQ3f3b8VmtHnH1AJ7ZUTY67KEsUr5PfJ9y7cFLZRZ2fNZ47zhUgHBDjRiwHmMVDjvJNRCiAuD5wgLeaeFdRhG",
  "key11": "AVDiFpo2dBdvKKb2jv5FmS1beKnobivjyt6wSaxMYHgAyVSNu8D2CpwVU2u814Yp9yWHXurFvzBYcgP6PsftmTf",
  "key12": "NhpNGt526CM4nFbYErug2QkvWhmDDnWwvrASe3HQbGDyYNQCJi3u8FMs6mMEFbftaW5cTGLkgHoa6Vbop9m2itj",
  "key13": "KGkF6VhJLD8WP2HHC1BVNMWwTrYYxhzcbWWVaHW1cuy83BtSmYr6EedQKTjngazujNi2dZoEwD7Kcp4FdRmNExf",
  "key14": "4AuuhUcT7gt1tqbMWLR9mMoc6NGfpgJSDQg8aVsX84C7Kzq3jMxkerTFg8jaZ9d6eTh8BTK6YTj38gR8TaNx4igA",
  "key15": "56LLk5ct2XgS1ggzsEYGFmXJaa8vqGrufCm5c5EVwAbVx1bR9gNmvNrYVq8cAnKJjJkzDLYSEP62yEJ8sTPKUp48",
  "key16": "hukbGXgnEMYVXQDhRLb5c4UHPF3fX6FejJrDY5yiHJuoyqUpuNksQUaTdNYdmdjYzANuNKRqZH993dQKmrBnU7C",
  "key17": "3FFLyVuGRzVJi5mJZKhnRYCXWua2afMAwP9YM4PZbpvjxXGXP9JJLvHMumpsqfty3uEcL2RxiYKYEExEmumCxkb7",
  "key18": "52aUEjEyNoyoMZxKeRSinZ8Y8XcpqM5SUFxWKHAib53K23eYBtrVDGimgtuwnXcFvZ58BhgSkkXfo8rrfFUPax1x",
  "key19": "2WHeKNGJubiUuTWqxPde3Vq7gSxhTL7WuhNTsiE9pExy3jD1V3njmzQ37NkXMNBoKmTr8ZWiADdGUq9XaD4DHsMW",
  "key20": "2V7sLptPhdEzySgEqcnK4ieMY6uXuUSYgfWUhhXvNYNrbfQf26m8dBcDMPxGnYGn2y2Vd8PAFGZVwgW3LP6onaxF",
  "key21": "5cRx5wFRonQ2rC9ubCfa7RKcdMPHzcws1M6Ko4K1SkE6aLKRvxep8swBB1rMZKZ9cbwYZMQUnxF2tcooSwomaKgm",
  "key22": "5sWbdGgZKd1TfFYe66qUn6E9sUDoVFd1Q6YUzALm2kRTCKcUYedw8dmcLUzz5dLX6JiKtUK74639gzfvCRXB5aLG",
  "key23": "4VdyJjswBLCk9nqpB24fqTUAwqDGgfkDBVJrxqJwtCM7Un2kV6tU78FbxPHBj7UTY8LJJWg4b5V5eDMGxCh56w7T",
  "key24": "4eUZpCg7sdJgpYqkDmESk9eV3Fn3Y55yzffLFZn56ud5j4kNVX9h3Xqu29VCwd8sGuR94TV6w84KyFbEmhNKDDRw",
  "key25": "3KinNf29skA4g8193v3zTtMj7gDYCRrGTe4a9nFpBwDr8WcFjqVji9cuZPFcHXJTtDgvQF6XT7xLQX4Xaim5qqub",
  "key26": "CNiMcUSDmJ91bxyLhn8E8iQRGLEZiKy9LgMNyXyFpfGdHPTfQnqS7tYpFDoshDc5S9mJRgZvAXGK6CchRD84rcX",
  "key27": "3bzFNfoPmqfjoZz2Sut3KqRhfEDv4YwWz9Lxbh7zXhAk6FhjJuCiyiHbLeCSfrw9EJsBXx1UF7hGxGrDXFmJhMPM",
  "key28": "4EXVLyvrYx1JygkEy9fmiZJgPM14XAtycL7ubL73R5NWhNswW5G3vfgXBoTbVcUKbMmbihhE4bRmPTaFhW71TL7w",
  "key29": "5VL1UKqfYaNTywUsVHHfujBaEkAAA3ZapaqgknWkadFHYip1dFh2CxrndLKf8Bm3mYUthofm5yH4YDYcwHbqVipV",
  "key30": "nxffCWT3HymB7qq8j1p5yfGnphUe528HRxNtEWyyzTWxWV2dwo1fYRUSqYkAjTdNESXQS93jYWcmP6ana24Qy7X",
  "key31": "2fz3ntm4Mtzv66oW51sKAVFAqJLxh2b91VndMBcz1W5h2dZYVoZ5wKuaFCEMptMJL4DFcgWtvrzgduDyq2XT3V7j",
  "key32": "5bufkmpit6Zz31exSMHNaZXZbRu1rAjz9Ze3A8SfpuEL4txhGMfcu51WMJXYeFW8ooJcrPi4rZqgtorP7dS157hx",
  "key33": "3d3y7VpXWfEGgZmrEnymaFxJYbbvjjnLhznTSvFzv5sBtmgfdZKQNbFKUZ68PzySLH7NF5riWKcChS6ktAeU76ZM",
  "key34": "3Ymn99E668mrie269X6GiKWfBRTVVGExy2zCKTNS7Va4cinkES3ndK9qEm7yrJ9yVxTXXj28kdB5d54sRYgoqcqi",
  "key35": "4XSNVQ4RfnE9KqWR6wDK2ybLCadJwJpUcfY7CYMvq93p8QEWCRVLEaNbTcAz9NH5vu4UDk3q9kzhoEAgNgB9h86H",
  "key36": "36gRAEuo2595by3yVQxsDcRhsS3H5xhm5NfmdK2QLHrFCzRGWWYU5ynqYfsQcQYiUS1Avowf3omS2HMEriCFspEs"
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
