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
    "5GyPQ5WcGwv1zYBQJuQjBLWQvATixecZ2UkcwaZFckY3aDE86fCz59mRzZ3LQk5rzSqtm6E6ufY3GgKdNHHkNNrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SHnbNBZMwNmQbxr3b5ZPRrSJVs3tSi3yUAAMoChsPT8SNZiJQiGNwYhXWTQYeSjdpu83pUsNXm41WWpuULKSnrs",
  "key1": "5vtPzppjFBDuC6BDkfu3vXYki6QXcodhUUnM1rfud4psLp7wzC65aqmKYMN9KREcZ4y2K29d3ryrV3B7n7PjGxyj",
  "key2": "3quEyQz4p1wpYgA7PMym6RwpYf3S951e9jBAht4GWsKAbaS8YdG1K6QYhjwaW3DCLiYSBmE3duCJWftWQffJheh5",
  "key3": "3kdENWTdm4LxVUvN49mpMUeSyQfuyHnc2mTZoJcmJvLjZvDddhELyCEgYfAtawk88PGT1AbFQGbY9c5ApQbjkdtv",
  "key4": "5o2inDS4YFYePSm3ksmUn3BWjRcbScwAHn7PJGFfC9o3oXqsj6CrTKJu1uTT2XLGJkKpyXakYKwgnG1nMHZvK3qV",
  "key5": "2DcBL9L1Cn54AdcdVHwKK3YhsQtgbL891YHXDTPPndCiXczd21kFgtxRRzVSv28hnKrj5FCWW98QZR9tnjV5bUox",
  "key6": "88FLD93SVcHZuiLmzmk8tfdTVN52gzDmWxqVAd3hRUBAVjSycN7he9A8tgrfoyP16cK3nHUY27Du1FsQG4GskpA",
  "key7": "4WbjqfTJNG59hpyqvPnUAwL7CjcMuLPzBBuSYcWVdFD1sv1Jnc4tHCADt7GKEr7WNcie3g11yxKdbmvMdzMfWvbr",
  "key8": "4wUebBGsfauMvKSDSs9BaB5J6BKgtA8MiiNGtcpG5qZNSn27QiYncYENtAGfktpZXE4WPaVhRnkVJxzs2GNj2EKs",
  "key9": "5ahR3ia531dDzBxVGyjUKyFnm7SzmY3pe4cAmz9TjuXgi6iQTaKeCiGYHfP21XTQNeqxqPNwpvDzbFaM5h4D7wrb",
  "key10": "5rysiWRwUW37bvWsrzQJ9gGhS5Xk1djmBYz9r8bCrhmgW8cqtKBLzinSwQgqk5JYzDmqYJGrG9ZFA8XCUJNyKqXA",
  "key11": "39NYjZtJnYeX3wGLKDJ29cu6HCu2iGErC8wZUV9uX4uHvoDEQYJ7eLsoWunZo2qYvdoo6LR2yXJUAJmYhEu6Cex",
  "key12": "5ZEErJMd3He6BZRohvo61DBSZGJr31uiFauo76nsJAJ1DvsFmivDRGx2mBYGgFcZ4HWKvx2mRmjwqy4XRryyGxRh",
  "key13": "4uqjr7FQqGufoNSkfsntFaQnUZskBaL4qS15yiJbN8Li6DF7e62F9tizMkXYofuRunqDntfTexJhyXFC387ZEoxY",
  "key14": "4sQKs7GKFfccxY2pmPkcE2GeBF6a2sjEgpCyYMEPn2zmFx5W5AXNcXkqDEUqkxXeisAXqGyehBiHkEFKR1Wsc5rj",
  "key15": "4Ty2AuSFg7LWPjp4qNa2XZS2ZfiEffg5erC3TUFZZYEQ4ns55e2kkpBPMtSmbLnJwRMwaTrVauV3dqsLbU52SPSo",
  "key16": "5rd1EgbK3SnTTCnMaCQbeUZ1hph4pHzy2WFoUMryWS7ZayAz31rx9z1AGRMC7rT9ynpo9z6UJXKktswbKPW8Jei",
  "key17": "4eEfWbumZfPnXgfYLTc3HhaPwd9D9JaHGyApykHRh4M75n3M8YiawZbFZJaqxpD8dDfUB6AZW3dVEBf9u44HUraN",
  "key18": "nEJwxT2nwycS96DApS2owTDWYixMJCPoeKZt69Yc1yj2tGTPpmmKYbtXTBcNVjBs71mkRh82PsQCHFDtbsZbDZv",
  "key19": "vU7v7DM1vjtMbVKgBNjKfgZGtCGzAY57ckV3Kxt3k97fr7MjRVXaadrZyuu4JYwoCWNqJSE22bhxMvPiUiM7g9V",
  "key20": "hLnSkqKnbL9oG2sysTVo2t4f36ut2zg4ptcmfWQiot78VmTX4dZzinJd1iTv4b2oLV6WrqSN5tPBtG8c3McHKWt",
  "key21": "2aqH2uWxvGAygX5XbmS7MB2K5UVfaiC428tZZk1Z5Rv26T3UjQUXAjdEYGexaT4UXQP5wbxbCK3pJt1ZUiMqFfFp",
  "key22": "2pWsasftcktqUUL1T2Htvgrg4VyxbECLkEWgiC4UNvXYP3tLbW34q5GwGzhi7UUeSVfgBePnEGyjDMRBH6YJKGTQ",
  "key23": "49zqhHiqd7LwW5nKmBKy68CUanrag12B1d8eeyMpR5W4e6LFA5gkF6jEe6U8QVcXAZFZh7o5AQ6Pwoe2UxHQa8kn",
  "key24": "37myPwYZafn1vfS3jZsKN9xxGuC5s9FBg7qvG4Zw5gTJnzXuLBNxJa4XfqBXE5LvWwjQfGKRG8BH7AWvhTgjhH6p",
  "key25": "6Pg1BPq5rtmaWFPRqJpe6kyoacKsk5gobLpAxsgSs18oiCFFGsNy7oJsLBCzFAWa9o5SDELvUdo9mdtw8VLBziq",
  "key26": "2tajhPHhXfpddi3yiywm7UJaeHS9djQ4zwDN7YNDB1b8xZvLi1uAHYKwpxWFiZr2mUqnTvsdELnqjsdBWKRCnD7u",
  "key27": "2XZVxM2H4n17bsxa7pqrjKjKQfh4NMrnsNEK1WVxZ9NJUxZcYz1ZBHzZT1SiuCXbFEhCMmnYs61azUE7g5MenGvn",
  "key28": "67kVRzb1iuRDekH798XDE3rAix3UJw55dacAjSsoLyHnmUqdbCGtpBZ5GMY9CVSmqXvFjKxgTPwnTtwMuzas7o88",
  "key29": "2SfP9ZUWL7i5UZE7PUYxHb9EB4f1sbAAEnSeAnEJyrraDbXeyfmRCgKajbguJLPAwi4nHYMpLXTFhrf2usdJWy9h",
  "key30": "ea4PPKS68ammiLUJTaWxkYNKT73xWDhyyCVdvT8FrkooNCbZyErh6714x6HzVBRAN1vDmTAKEL4VvBHiiXxuvEF",
  "key31": "69bcdtyjGCPB28up62uM68aeiqkpCXekBiAKVtVFvcaGGUbUPEjYHRQLeKHfgvxwCmzBPCxoG8vrLaBsuXCArTG",
  "key32": "2vgW8VNvtHDcwnBQNuPPuVX91ttNGwDgp7kYGB5n1MyADiG1b8V6MyfVitk5TsWcyo7LeuazvuBby935ED6g29Lw",
  "key33": "aSkbNQWf2onVM34EUKtx3m9buTZZdCT4ZcrWJuTZRZE5TZsTrgdimvKC79gkezUCcBF1RPn2RL3GFc9rCCBbmWd",
  "key34": "5MqsYeKR5GsKY4uhAEKxK1eapZNvy174cByVFi5XVK6Z9KqhsKmgMEu7Fwuhj7MtperXUBY8Qzr5ro1bnuuZchCg",
  "key35": "42vagjv8ZpFhjhNrY8tmVdXW4ZdpE97kpBaem2K5bLX3XGJnCx3Zjm1EuJ6mi81jKogaV65AryGPu7Q84WPQV7jy",
  "key36": "R35rR2fjr2zjxhHR8YbLdRXwAuHtJMkpdRwsSJfVouoR8kW8S56EKgGVsBoYceMKYBBQtaS4RXuwQXWBRhWuWvJ",
  "key37": "4XYXShuHxzmihv2ezi8RmCNKYySAXAgff2nZ3KsnsR6kRvMKvwniZDPMUyEVES7ZUri35rw48r8ZUvLEdGHKaU6Q",
  "key38": "3UprgGwaGAdaTBqwzaXLy8vg6iEYwFZExLL4yfwYG8utdmHqgns6PgCoYxx2HC7moTN2KNepZ8HFBDuyqyL1t26r",
  "key39": "4ajDyizVPgYgvqHcja6epQU12xmox9dSXxjTNRmGi91JWLY7JsctkLKdQU2TH7faeY16srd4pMm3cKzSMMwd26HT",
  "key40": "5yZryQH1y74AyieMxzndpABFoxf8w9nb6FGPXjb8JaaBFJtiNPTh9MwaG4sUYPKXzB3NQJpxBd4D61RkQePrjqfi",
  "key41": "4zbRkpHYSHbkgYRt9kkrmsQNNHtACgYAEePpg4osQtSk3ZLuHZrBQJTYpiwLL2jR44Pi4h1eoGTuJiygTTQ5X93U",
  "key42": "24kNyCT9aPoBkGhoDgTbN5TvPjZAzzQM4D1yd5F5Y6n7HzhbxCnD9VtKhL7Zc2AMrjxucCJPYVfk68X6pXA7Lqga",
  "key43": "3XdqDYuTjW2J4wd2jNb22bq3VtNoa2s1hKQZDYEQ4rmLnU7MMBkNnHRcNrtqtEPYDeTNmwEAuenghygVpkinuGJG",
  "key44": "5supEx9pZPmr4A4baZTwEn6T5z9ZatQULBd7ihsbVuDR9AjX6ZpPBbWvhSc46pDxUaB8F1eASCXy7xHzQSyRzuKM",
  "key45": "45F7CyXPgaGNNVFqrVyrP6xfAidw5CgoZbQvyUrY9F5D3McrjqcLUqB75iWspEcsVQcYiLxx9aAo2Myg2ZbivSKy",
  "key46": "2DEoKf3jNGAkQXrM68a2wwyzwEUFxDVqG3NK7QCnvVamebVH147LsDdYHVGcVx8BetUXmxnwxncfg8PwE8jaMHiH"
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
