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
    "35y75xMugCz5h7dWdV2HYvfRCcQCfEVeoptaEzTVWb6CTXd5s2iE7S4g9PELRRa7bamjGrJw6xTmuR6iiKBsREyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H2Lb6Sr92ojnWBnWVV72jdMRYPMW9kJ3VEzXbbeB3btANUcR2L7TkCZJPQDrtMW8EPdiGsF4vfGVejEsfctLEq1",
  "key1": "438apCYrHC3gV3suxKsHJ3CqM3cJkfxL1JEcJB4pr3bfzHMRQSu9UFgVQvyXjJswW9sNxRfExX31Ww1VgMoigKvt",
  "key2": "29mR76LvfyjxKfSTmrCiPQm1E3qscKicZzyyVEgGLK3XZmBwTpj9oNb7r1ZpL2rVvPnDTJRPvxM3d6pe6NQgqsQ1",
  "key3": "5e7cj62gxRYzTiqPjjTK7oHjuSBxipBvXgGQB1rV5d5qTzqLttCVkWZtBvjo9ZUHRPWAqeE1F5skGHi1CxAiuc82",
  "key4": "BKG1hQFhCQTty1jJu1bRvBUKbCkf89buRPsEn7daN2hUvwwZQ8G5dbWUbpmrB48p8pV9B4TCLv5YCE8CH3fr6WJ",
  "key5": "5UzungaeP3bmuXfPyx3btERUrkEEwvMjy6KpyCxSR17MqmTHEPJVVH2PfZ4dDfrrSQmhH9QSRMSwXY4J4E7KihxM",
  "key6": "jw8EANEJojyjSWby41pCfV4fFEmVHHWiWtUnya3boNXR1N41pmyZdxCG9sSwakCFaQrnd9kuK2GHsj6eQJr8ndG",
  "key7": "hyJYdPnHWBk11BSjNzpA154Fnt6k1iVWjE9z1ksJnGufi8ZDESFuRTTyxgSYH5CWGDBVUENJFkhGLKXQXF9R9pJ",
  "key8": "5vmarUSuMAwpwBdB6tShyZF28EBZF4CK2NXWpHnaoBFt6UFU4i78cmL4fVpmDRX8j4xB7encrso2wNHgydVKoTTc",
  "key9": "4GDyHUCHd8Cn6UEXhgwPt3fQmdqd7Pfe7uBYZhGfeHfmx6zZsH1n2brntwbBRQkkiA815v3XPyQ8YLpTAigAV6oc",
  "key10": "qsuYdmp2tMkyADYEpeEboDHX9vYJkutB7FLv1r88MdSW11Le6GTTPtrRB9djZjwfbEGVFWNQojxpYhWqq82iYow",
  "key11": "474i7YagyEgjec445VydrDgKiAYhUoMT4okaGdAvjwZVkcB4gSaLcyXezDeA8ZxfUVLq7o6qrUaVdwX7FdY8f9jd",
  "key12": "3ECTg8JuqAEog7MrfjyPtbCwCCFBc41qvmsJ2hdCTmzy95k9WFLjpi95EjUjVL6TNCamsRgnmAg3EjiUSRjDgK57",
  "key13": "5TS4JM1CSXavpag8dj6HCg6pnQ9DdqwFF2jwjMNbFbpKw6fwXuLHWfNijD8teD2bwVPoJzp2sPEzJPRghP1cXhAS",
  "key14": "2ZC7v6Eyeh84jDscAqNi2AVNBo6CWZkXXbNKsn7H5gAwMhJCQhFRR6dexY8S4Tf3ZQ3mUCUT6j717QYrwBqu2DRk",
  "key15": "fVAZZScfTnyZ8BDQo75PGhQKike4asqTxH8dQ4Z5gQHWyL1R83UQyHGmUdWJqVVxAx4omMS3rZUPg8nd5Xhe3ZC",
  "key16": "4qsR6FFEUfHtLHUNEVo9xSDmHbPK49G3iwmNKeaEumMxgEuFh8mBaq7jRHKDPnPMth5FUu2sbZBnBUkfuRGaLQ5Y",
  "key17": "2F9GRRKim24G26eDVJ1kWvToDQpUntHW7UXNNcKBMnapGeUXHF9A7j2WbZ94oNQsoP7JB67tjQPuW2kavPWv6fRh",
  "key18": "3RA1uPS5izgc97ejPDfpFvZJiRdFKT9PKvzQHoLktUPjbqAVASPoDUJWcE5kpryVxJMYccobkC5hnV3Z4oDtDZ5c",
  "key19": "3K5gyYJLVGwkZnZWPqW3K5AFVuiiMTsYuoFwTrSg9FSKqFZWMGwQPcdtAQv2x2W9mnXPi14SsgJfkA7qV8wVX2wD",
  "key20": "21GeueRDXy3pC5vE9UgfiU3uCBtjsT36Npiro2sUqF3S7ZAHBJJFCcNHmkj1e73AZymYrCwLYRGbjbqm8tDD7BMq",
  "key21": "2NUQsYxvNAfe45XzxuisocLrsy5hK961e9iThe9puFSpoXnmkNDbmuaQF1464CyjnFCNFuo2x5x3oqnyDLx1c8zc",
  "key22": "65tSiNQUtm4QYAkNVK1diunSNjYeqQXue4V9rGancHds3veF2LfKSQu4Q4hmQDqQfh6jMi7NmTz6CXaGJsxsbqRF",
  "key23": "38Uawvk66cy7a3P8UvKhLKAVicPXzWch6fHoB5zm2DpE1eM7iFoiMzMk1ZhYQKacYig5wPFFWN9FH6C8hURP673B",
  "key24": "3bcfrXwzVedJ66WqQMARPjE2VpKRtJ3NCPVr4k9jXe3Fvc8UkZdsy525T9ApRnLyFnTs7AubbKVkDPTaVJytTdKU",
  "key25": "5dirsGt8mieG1777gaGcDfSNE6QVdhE5ztW2uRDJFGbpaUJLAQedydEN3Gwofg9VT1JfJY9R9H8zQ5NLgo9fDNnF",
  "key26": "3s77FFXBuhLBsKAXKJADEFuCSFbqBD5K51VK7cC8yE692mFBSkhWwAfUqThb8cFNgushq7PujNV6gv2cVV7AFzEv",
  "key27": "hFH9BKxA6uNsWEYwAgpUkaAfanxTbKycQuvcxGhgR4Lmyy36zJwnbpoqYW2ZXcrD4K3sN3YK7aXmKkyjw8SKEF1",
  "key28": "55g6n26TsJdTZoX38UmJkEvkL1hjZt1WTnYNE3auB2MAM3Sg5mLBW79dc7ZXeQji2WR3k2KJ4yNuZxTfKW3eQ3Ak",
  "key29": "3cqzXJHM7dUbGxSdWgMkZ6Ge1Vd9EPRHrtGMZmquDD3D7o4C4im8Y244fCfoTTwtzHuJHzYKdZosusGwZ4ZTRwZ4",
  "key30": "4997KUC3bGB4xgays4o6wS8YCUTq59PTH2czknoDpqSdp53WEw6WFHyciUgwJxhG12dfdq4zVxn9oGUzwHb6AE9e",
  "key31": "3G9MeNaX711NMFKWLQHqszT6SnH3qbSjkVuva1mVXEA4RYf3xttQRfy16kpFuKgwZX9PMzGzt5zMptbS7FnW8mdt",
  "key32": "5NUUgbremq5YEojeyiTVoqhDcCGFZ8uNX82wcjZgGeVFSg48dCB9EyJuw9outnzjVZ5PAy2EDegYS2v8b1CiuMM3",
  "key33": "KXBJjgN6HdV9xvJK6DVnQhpFWPepuJ77GNFZYuWUEmNJ2zmepuSbHf37GLMAi4eJkJ9hM46R2BXWN51RAjnPNvp",
  "key34": "3295c7MFcp21yhd8rXh76FoNNVsvEbQKWoyiFxfyZhunADAe15KHZ9ZXrpizKpYiLEDGyTivnFy3njw3SbJHDc3m",
  "key35": "26E9wWoZHsFvpkp3Ye4CvwT2X6MRkxt4Q5ARQapm7iDSuMqQze49d7ondZjqMCGztHb51JpHQMPcMQWeq9ZPgjz1",
  "key36": "2aU98HeytdgNgdVMaWGqA7WoAdHcdMdvEaXGz4TR3fJMaCWBsR1zDyJDgR2Lxbi7vtmf2wE8N8GaiUQ1g6RQdA86",
  "key37": "TtHbEE7VAQZiZFVg5g44Da3Pkuu2bzNcHQusVyp8nDNuRCYq8qYLJKUMgX6gWooReKXjKKMMq5kCbmmyYyGyN1Y",
  "key38": "3RZ5dotUGPgM3kDJZZwgC9QpSw99BNFYjjg2hKocUB2vWHfp1KfMHZPQ3pDNa8hdZ1SqsWkGLo7F8oJQt7YEoMZ7",
  "key39": "332cvDgLeNwgLAtFyvYEj7frYGdygeV4YrTMkBBw8nvkqrqrZ4wWFF1nKvVBy73HpBaq17EdnYaxSzW8nv7sCQaL",
  "key40": "2vXxg6yKFuymXHkuCj8eSX56M3trtAJohsX2azcaoYcFTHrpRmnMHdwFnkL5jyh3w7STAx78ZtqvcCaFF8Cg9LJj",
  "key41": "3qTfNsee7tXaDZmzm2dkRSyqmUpzynqK4nnpnvg8jU474tJraXUGepwFdNLP6oDsMoYjTRreMCNqngKnhhGqocmi",
  "key42": "2pwrUkagtbnDNRrdWg8wTBKWAn9dMZ5d5nyYkj1gkMMW8k1unjsgGjwzw9fynf64heYtHBhZkiodMRdRAMtmpaVu",
  "key43": "NnySJDrWF7KnTRK7Vh5EG422p8WC2HKuH4W54aXurkCDCNXuwavgY3owY6uB7o2SDtGe1pfuLsy2SGA8rjvi9vE",
  "key44": "4WLmkhT9tvjD4J8HhpWMg3gCwEvCpr5g8sTjXhY7uqVv8UfQV1ta8vqYzaNtHAqQfAcL7Z5ZFXJokiB5Qho9S9pA",
  "key45": "2UKkmwd4P4Bdu4re74nkT261tAkbcWheSPKKqZyVvKSCbAWojLS5T8ezRQrSnhB6G6Cd9Dp8dL3xdMfC7kjbbSSd"
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
