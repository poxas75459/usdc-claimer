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
    "3SDG3t6K1Ntw5ENZCb5ugyfa8JcLvUmnLbw5Ky1uwrtxqLG3vy7Goe8uqdyUgZ7tu2SwzWNdK6Er2oduaNpVZ6Mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1tk48MFbY7gyBsR8Xvj8XnXwZaMvjmmHHZoTC8MM6qxJ1kXxnRhPghK8q1XkgN1dAjMGZoQHopUQr2dVtJcPgJ",
  "key1": "5i9Z5XDiUXEKwkr33RCfHRSXV4BXY3teL3bg4XXhyoA6LnRMvdLy2FAxnPyiidXJms81oXWx9vmxKYGtX7VnkBsD",
  "key2": "2gVLCt7cPywuaoQJs1kkPtZ9vjNqnGU7mfZEsNNsXBSNriaLDWcM7oL7u1nDbbyUjDzMjs62CkHkHcJcnq6azbg",
  "key3": "2wT2qR7D6sYeWExGgVfdLeYZUP5M1xkzerDp7nK5pL8FmT9Z5qvSxSErVNRdjjodvWjUj3x5HiBXVfwY97wngpFB",
  "key4": "39TpjJWU3hi6ng662SSCWwGaxg18d8GEF9CpJfJZkPcDpZKhow2YDR6XpqFLmxxpvLaz3XQ85aeN3pL2oG74PZd5",
  "key5": "3nyUDBMPAsmvrZXKh7siGXVTQzWQ1kSBHgBT3gq5dj3hZ8546EWFqE7Cf9WLo1dKCmTvhpzNXd9Ar5773nKDD6si",
  "key6": "2EczWDxSTviFUZMm7MHeN9mBt2kjdJ98iDBwRhNcQLpQxoNuWcwwwoHrx3Qh29Zm2jEb8zuZZkf9LdZSnhe7xAtH",
  "key7": "HKDeQHSBS15V2Gm82jYMjzLQVSWExFN4twp5JNiUPZ3oKfUt6EDTPNJUkA6VnZKcstXY8za9ZtxXga3mc2uiydQ",
  "key8": "2QBv7AoZh8WFmhWz68mdYcV4V9AkELz6nZBDXqZhqtJEWZY3KBHvfA2zHgWLzVKXa4VaYj8ZssSGVRMNFz2Afqor",
  "key9": "KehmsqkZYJmPS9pgP26SFbHuXhQJJJyyMDRzTT9M8PJkgAWLbSAV6VwJiNBbPvN1kVuqQm7mo6e5aaXrL17jgg8",
  "key10": "5QnEbKYY7WA2SWRJMani5xyvhAE9Yp1b2LTYofg12ghWKqAtp4X2ruqptMDE58EgJLmysN4kRf3iu5wjbw7XwBe5",
  "key11": "2UvBxEin75ZrMAr8oq1tCoafPwxwaDUbWeA4m36M3GzvnCBwJjgrZrTmHTir73c18o5bCqGXVBKaqpApvxHpc11L",
  "key12": "5RJcckithJ5rLVRLdg1EE3jcCuBkiEBHVmVvxzsrUWnieDdcfHALLKQoii5336XiRcCt6tn7dBUmcpkqmA9cfQPY",
  "key13": "Lukmt7N6JPCriRGgZxG6xrijMmNCDy4Rd3UY3eaABdGGmKHRNSFX3pxSXJGQZnbQF7RzEWM1H8e4RjzpeVdwCdT",
  "key14": "rH3WKDcawkMFGVC3tNzvXsNYQGG85xtBuQxJx51TVDKKE2sCE21nzxtZgdidMW3HhszcZz6ixCAb8qWZXQstgU2",
  "key15": "5nJRsT99v4VcN3ZB4SLzPJUQYWQEjAz81AGJGB7yd1PVth6TgUpCNvFNDSoK2pUwSwEXTqsKh16t87kXdyVGQF9N",
  "key16": "5Zx991qxySrqBd7VVKcndTuC5YxCLzrEmo4sccc8cRVmbtQdsCWyXYAbypjrQjJt1pMBJYvNqVK4XukEVeS85Rxe",
  "key17": "LKE62ge3q4T32My7MMTYgK5XVGyt8nLaWStFfLbpidKwCViHaa26jVVvLvCDbeqdU6wTGvhH9AVZnP8JHRqZCDt",
  "key18": "5H61mDwH4cmkaWNFZ93A28RyXBQESTa4SWadRYe7tdXXampYRJMgVfTDfpsRMeCodybghU4wq8Kag4EKd4one5Tf",
  "key19": "2zbJG5YELTdgCUJHFuoXzNkDfsJ63YjgSGbfsmsdoSSpkrba5uNSxhjv1NGUtTf3gFVjq5Dv2SsQPK3wi4JVH8PX",
  "key20": "4jiquXwSR4g1cz2cyK5dWbWyFuQJ1E19m4AvPWEUeKWiTk7QLLS1wL5udm7W8A7VNRuUvvJMEZ6tQa62bx2geMU7",
  "key21": "5nXZTYx9xWFiuRcHHmnH6v9Bg4qtF1tv8es4SCahU6SyWAmCuT5d1TpJ3TAFgC9Ugf5x9w7TbtUmFDTSX7JU6j55",
  "key22": "3zSAyARdXJTo3dcY2JyBoK6z6TMAjgbTSnbEbjDxLJRRcbb7jwbkNivmLB979copKaTGUHweExTz9V15YBhdVdiS",
  "key23": "4n8Ls1KuUBnEQy3Vz77rUjmMBuQSZNMaRGjh5NACn7EuUkyJ2NAEebfZMaYf7cxtNcpT5GkViAurPeRYx5xoZEwA",
  "key24": "49J4RNfL7PMF8wdf72ynwk3FD7eRogPW4RhbX2GdPKvVtBZJMQ8tWBNvwHEnTyzDYPcX36M1neeTZ4Wmsh2FBfFn",
  "key25": "48jgdMuCcx1AUBeg57fBjD2bAzhiRysrFMxsfwqYdTTtZZBrAB5oiY63MdoXuzsS3UdbiGxtDyBybR25p7tfLRDc",
  "key26": "2jNCn99NQpdTJkJVNbneoHHtejp69uNnaXYeEmcjCbct69shEXET3V3X4tPj26NmcPmobrJfEAQ98gENNLS6BXFH",
  "key27": "5MkUbcins7aRxh81Cjtf5aNxH7vPGsgYpMirMxBtydowvUZG8Gq1XPASVHvgYq18J8vQpyaShH7LeVueyGX3JGTU",
  "key28": "3gJEyzb2ZbCLYuJWi6HvHu88m4xVVvEr1NVBgijDVebBMaNGWrJjKMGfamJ7Qe7oBu5C4vsgT71gaCSYimFG6jth",
  "key29": "61QJA4C6obH9ozC6YLSSwgDSWtBXYeAthxhEptdZXR2tFTtmFNuc7mYY5aN1PHZtjJbXevnfSXs7WNBL8xc415aD",
  "key30": "QUNFGnvduLQ3H9ngv5sGywDWYsQD53tWt2LW21uYQX7X6KzbjgQHUqh8ezJ6vHdZ544aRLuN9wjvd4Kh9temzrh",
  "key31": "DtnxJVKXjUt6irRgt8TVBnwr4kcVkV66UAqDeT8ho4XrrCT8N8Pab3SyjYHWvkmPh9hm8dKW4QWD763m4ZphcsY",
  "key32": "a73xjcTpYd9PgSsTTtSwy4YqmHwx5fGShJ2b7RCucT6Y7DYoKnc4q8NMLJfX2UDgygqJWNf56gJKuimQzjNQ96t",
  "key33": "3pT7AXRruypeeNCBxvKqKrwS1tQvaYdH6LRKxqHhJSHNUxSawiLp26F4wzvyRA9Zg1gQ5XfVeasxMvc3Kqpxbzt3",
  "key34": "2LnMyQs1UyyfY11J9M3yGinvNmD2yMJ9MTQPGwS7HmXiSeVYTfsjtvT8Hd4rD9Se23NBVmHuuaAPfPreEWTfbBr7",
  "key35": "2AFtbiLCUgLvqjd1KH32EKfWsgtNSAQkpEmudPVYXWNjLbQPv1LX4iB9opSMDZ5sN67X83kHyQPpXsxiuSJ2bJ2L",
  "key36": "5ED3NzWwMGqmDiJVu8tRskPDqtjeHMHRDacQBHUuXbncTGWGFJ5F7qsrxAPG5vzdPWhi8eVNzenkAXiNwXAwEGCz",
  "key37": "3hK5cxDVBEr9WBRZNd7SqPNTTShXqu2mAyAdezPqPwKdF4zFBthYCRDi3z2JTXWT7PAGn7HgxX8Qjr5riNSdLwyG",
  "key38": "4LcowVdeS6rdLeRmDwEAkMn9rVECfeeG8gpApNewzfdw9NDWKqp7ReyMcbNPCF3zN2dE9FRpSXDRJtHiYF1RxeuU",
  "key39": "27BxSdvrspLgnABh85Rft88h3BTnyqRvFyzmzqpE4krV1shb7Dz53CTYa6z9WSEwKMJCh5QgXyc9jvCg6MP8ZJno",
  "key40": "2hsJDmAjNZKFHU2MTgZtr2uESvQecXzpxEN39Gy4hJi2C8pHSMymBLJLKfQTxf6y9MLrZ5aQiZ5Ex7H7FmXGCFfK",
  "key41": "5UMecPuv5QScyR5mA4bt9tHTDL8reNKokwGQzJjkXNcBWCgAu4QTmBczhREjeywBYUiBwdCFhGSENimyhsyaUekp",
  "key42": "3i7khNa5KRepzpgbDtY2QFjCGCA2eFvhm26uCDrUHk9VyStkpHq8dZ4ZcamyUr7yTQE7YEHodo3JEwqH3edk3vNi",
  "key43": "21UefSBnFYJpf1UczM7Ybb4u8KvaKZSk4UPQjXm2pwHXWn9FjVwHk5sEqU3ZNA1JytbM9F9upxGgDNuDf5w7qsp7",
  "key44": "ac7CpxriBWSSDg5ikfUzfR14z1zyDwsmagQBrX8YUyhDQzUb5y9wTWmfp2PXpZAJqUhGVSDxat2k8k1oW761XBJ",
  "key45": "qy28daB5YMFZoUqmVHS4kJbHN2qasSQcYyvsYFhXjkzjU4NY7q5zJGGzLRqed6JfgVbEyrgnDg7cNrDJKcSb3U5"
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
