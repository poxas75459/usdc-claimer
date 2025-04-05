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
    "61g1L1xK1MRgMhX9wN8daSvrMJ6GgGvDE23JFHRbcq7J2yvS9taZeVSBNgQ44YgrQPxRKdzgwbZgsk1hmY2L8RDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N765bagqoEFjukCYrdwV4WggUHu4XW5TeVW3ZrjiKnzwC5j2SjRRhrpUkWZSwUR2jwoMWAMdaB2YwYenrVV4zKU",
  "key1": "JYcZXM7YgvRrLjy94PT6zw6jNuU59xjifdWcsGkk8R7x6EEVtjKSjc9aqR9USW1nZ3qc3s5Y55vHbKJAZ7QyqeM",
  "key2": "4KZzfXQWXFkNvWxsWPpaYsN1Z8S4V5126Kc5v1A9NMUyLm959AxbPR8w2wT92KPT1CxUuRjYXNvedrdTBNSTZ3dR",
  "key3": "5ohkHYz45Ym99JdG42iWpDVMb2RDLjU3ZicfLruBnfd22yWJ1c8yXdiQQ3m49tGop1zX2Vyfok8VYZwj1erkqayz",
  "key4": "3hUHyt3aKfB5ickfBQXzR3FqCzwyRF7RcBkLU1LXcikefhF2iPAMTM4GzwqZpM8nFJG4vyqxUTK4bu2wXcMxnWQn",
  "key5": "2DY7jWgwiS68UTubtYjzYFfHrXEKYSWTCfRV2Eaqw252SKRHGZhdNyj4MGC9sR5eqymz7EGjMyVMUNwDxKBebpcp",
  "key6": "Gv8EFHgpKSv3nPMViLUR8NLdN278gk8HrdCs8FvGrh3HSxMM8Fs749KzMcEsRHgrUGTwfNc7oafsYPDcfivyQZk",
  "key7": "4sWLYz1kFUc8w83Sj7fHxx2t3KMsNfu7eTdKgK916af42C7zpnEBhVrPLmPvnmwVoiAQstveToEVBTuyWBDKuzwj",
  "key8": "4WKE8ScdfedBGJJVBL57Zr6qgoRDqyboGVTugEbwVgYQEB71qjpHP74AkGwWxnJ3oZ5kj6uqXfnGBEtZXckCtT7p",
  "key9": "257VNZ5dtiQa5wdRPukgS84jxUNyepT3cJzeASMFZpZGZCJtZj3gVfPB84q2sLiAueBZR5hTjSS31yH5sjbuUM5H",
  "key10": "48t6DuKn5ibszDVA2cPDTZBwYXVNinFDvSyK2Fb832ZxdSrtd6wqtmeQZdPpe9J8WLMg3LLZuvyRoRof2HmWC3s5",
  "key11": "4Ns25B5CmR3uavdf5h6E8c2cQ3VPx8FQmowZA54h5SiGJgprD2iBrGJrgrme1jxDKi6oU75y1J6U1sBoBFP8issW",
  "key12": "2oBWp5Y2DrFBWBzQQuX6tKPUUhgTcfqCP9atwx2dQA4uMT7HNGNHRUMKcJgrnmpsgjqNN4ZWJrPuDLUUALQszZH5",
  "key13": "232Br753iYhkZGwkXqjQpWZb8UrVnx7GNiup8dQrGRaipiHBtLzZkP2FRN5Hjueg7AFq3Ybs6P4jTSMxehnu8g8x",
  "key14": "57LxtSXVF3siGQN3FPrXK7FWQkCF5YVPYqsRFNqArqq2ehP5GhqnLWZCwbnXA49gsQGvUpRJGaweSFwkEenQKC76",
  "key15": "4k8iopCaCdaMNuSqoq3ssXaKHVbG136nx97N6bkeoUYQvz4QKn2cLuD7MFfdq4upvQXkz2ArnLz3bzf4UrwU5C7s",
  "key16": "PpsAGhL9wVk16L1reZYEGMMZ4CySYgoNJqGHoJmShco1jqRSHiKNri6MK4u7KHz6odCyyBUUKf3AwxMHcMmp3s9",
  "key17": "3M4h8QYT6Tab28yYdPL1fPupQmJadHj627BDmXoBAYK3WT9gMpLGheujfAsYLGbDgtXuxjjn3neymbctNXnjKDJV",
  "key18": "CuUDXXPi27jtNng4ffe6xzgh7JiwjyWSug5ih98mBtNqv4D1FbQXSiQmYWPmxM6n2mgmgbyVFeEDMQ57E7MGfWp",
  "key19": "3zh6Jqb1dUEZdA8bWMLKH7UEYyNbuHabAboSvauzHV84grcnxW7XK64bn9YekPpBqULsnLyw5aTCofbomVCfqX2s",
  "key20": "1MvfT11ymUK2Wty3ksodqQtP7DAYESXiaKNEzRaXMAsXYBLq7Z8PMEJvAtFKmuCbJDJANaBUkNWHjmmCDJ4tuGE",
  "key21": "3VA2AyYEXJd9fcsKjUzFqLoTwWoVMrR9Sa17TGRrKLNTbYBMraNYh1MSVCHhzzZeFqsRKHbv65xDGEj3An2jobMz",
  "key22": "2iD7o9iNPv3iveypV8pZ31myEgRJgTqn4eiLTMPZzSCJab8qhAr5rDxV7YwD5e4eyVSxPtxGwxqSmLLbwnENtJQo",
  "key23": "4F2iMJGc8LbmMHFk5zLWF33SuphNvuBtFHhhM5veYhaDssqB5B1NYBbJTrb4c2a9JeY2eW5e9yLvwfZjP2PxpYFn",
  "key24": "5dvoxhyoNgw6JWUuH8f7h5JYLRiw6vfcgfEHWMqbA3uSoqrbtgAZxQNZ878g5KdfZkeFziv6dsWvvLN3oQj4iZGk",
  "key25": "4Jb19U73ZTXuvPzLT5ugR47Ht5MKLxF7gx8Dq4825Dd24rqKZWuXjKb8C19xMtv7XgudbBRTtRDEGvag2ysQ49Ae",
  "key26": "gQyTXmieZVhnUZgHrmpzou5L1EieT5ZtkCVD1YEpuaKpoUf1Gdr7WivVFjgSdjp6PWdDZNi1nMJf7Rr7Lpg2Sfv",
  "key27": "3QMc2qo8K38Ts5yc6pgzGDydoikVHGQTYhUoowzWzgVXeUryTtMbLD3xWMgKvdUPZrhbKi1CvuEEcR2MgJMEFjux",
  "key28": "5iE7aaFjWbmdvj2RCkvcDQXyqVUzy9sRdVRJLF1iYM4ZfVhwTbQsgugbuFFN9EdhvrJhMTWtVTqPXgFmn8ysaenF",
  "key29": "3268Bogmvp2btP83F4cV9AV1uQvaVARNyBD8YSk4gjx6vkrCSq2nPSyjkv5dbCwNZLc96ituzk1TKamTpCmsdmnM",
  "key30": "pfYsxHwagYC4vwxvTRyhS2xf486YtaPhZ52kVNgCkSNwMJGiLG694nADH4nrwtgd7zy57rBoyBV1oW2tRUGGBiD",
  "key31": "4bMeVhQM3jZnXyE74siEnv7yrWnRH7LUoMKpYbNUXGnFLqK42zpMMVmXGgVdp1fxHAsSbP2UgmXoFdbuGmdi7Cz8",
  "key32": "3v5CswzpCCH2tWC4fwZxJAd72wub55vJH8YAvP7krtqEVBE5yYXeNzgYTvS7eju295J8CE91LL8dn4VsJRT4CboA",
  "key33": "5Ak1snSRksSZZeeXrq5sV3Fdcpr2YVboPKRH5WRTkZjJhqqrSCViHNrW5WarWXnrgUdCwKMnfTafN1Zt2eoDryrL",
  "key34": "3WMaAva5yE8ZwJiRoq6BLTUfgccy9R45VmxdbASrsXVerx85mFEd9Q6TVYBJgwagdh131Z5NHLefuzVDvhfLnWfM",
  "key35": "5TmNCjHvv6Q9LLCfz8LvrCxepdHh9rKcmLUutpDArfg7cfxmErG9vkrsrmjPhKUjVriJWhdVfnAWpd5dt2cEEdcX",
  "key36": "2wrYjJWs7UBNPkCh95te8b9jQ5fi2Uu12zeK6FvsdEF33eDH82zsa2FNBP3nYit1XS2MMtDnP7a7roZkZccXh426",
  "key37": "5FWJyLar2ZPra2bua87YabLZ7MCh8hu7q1TFEi75fkxjwqCB8vxS3WeVbxRu5cftrBN4AUMuLTidSzpi8QBeRBY2",
  "key38": "65mtBJAMk7aEwESe1CCLRYLWhMjdE73fKxopvjGwHq3dGQ1kEK8Tp5gUsmC2HCikBg9EaQ986HYhL6rwsgyoeELx",
  "key39": "421ybDVuDzZTJhVj5rj55gZaKDV6mCxDawunvqHTcBmuv5Xh7Z7SrWi7D6TWy8rkeKSRtHcgCRFbdrZgvLAx5uA8",
  "key40": "5e4YckkW34pXJsZsG9mUoFkSy7dMWu2CaGkETSD8ChMvFB8ZbbqgsxUkjktbvqYGqne59MBCfkjYQRc3Jk3CrYRZ",
  "key41": "34VFo2MVKhrUVURSf3ZJarx2WqUzoRzK26BTPNaT9Z1uFPiy8yfs3TM5gzZX7sXjFyu2p9jBPtLkgP5vgqTjvWKj",
  "key42": "5Y2m8QEcFoFoCpWHSN1MyYuF1KTG2KDG7jkeazBHhM8h7nviuCUYanLLmEVaGJPzGHd1HfsMZo3vbJMACkcWGRRg",
  "key43": "4TDuDM6pKzTeKsJwRJojaCH9kB5YNoPX9GngMrecaU2HLUp6BJQB6jHvoCDFjH4A5mRrdfs2d2JqyXuQP81L2tae",
  "key44": "AmXWQ8rT5QEBn2PpcQg8DShMGpbVVgAnpch9Pe7fQ9au2DnJ9iLQQFy7bA1vG5jAg9QiBmTVPawSxGBLzV39Tn8",
  "key45": "4buTrLPDsNyGJ3dczKYqW2eQJtvFAwtFBznRbQNNU7qNaC9n2kS2MYxE8TsMty5oZJE3pvKMwCdwEh84m7zPGEfm",
  "key46": "2JarACeYThecDSnaCGZDieMVox2tfrHBJv74gPVc2Wzn4WCppDz1sR9rp3R3tSJhCxaYbQWWJqMSoheD3Ck1N84G",
  "key47": "5GE4GVEdRjW6C1S3T7D199WvNVSwjt1RnXHyhzabdZXBadixpM4axJvv6bsLzTzBJL7WNDv5DgePEeWVRyopuW19",
  "key48": "4Vx4NUGyomNegVbqwUmdN3zRz2phFV9MGP2gmnTqfGTSuPxfP19gBM3VaSgWQC2gG6CxWAAZRSUvCeQgs7QbuRUL"
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
