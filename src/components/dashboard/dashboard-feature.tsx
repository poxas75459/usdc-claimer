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
    "3rAuXYw1E1dGeH7FWBUZsiJo2CBBjt2mL4FYVMTmgpWLD3kwW1GG5DnpMq1nirVcYWH2wpzo6Q9HYFFG8Smnxrvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YT3quxvncXGMKPrcJszUeBVKePZyfvMrcZcFsXQMmw974vQChibDqapEnD4TZNz3qzoKrtm7TNECJsWnszoogyN",
  "key1": "3YWUX2RBbixcKdPEiTa9STjwRoM5FkMUBRaSeVRkhLJ5VyD5zDGgq2tUXuXsBSWq7xh8DEqWT8oxt7jPjzY7Ej2f",
  "key2": "4ZFswmVrbLcEXxxmJotYrcCZwC94us9hPTgNATrgN1c9TWAG2nYzhTG6h24UTCWvXEFHvncB1kJwv6a7hKAap71v",
  "key3": "wmT5ytRCLoHiFSmqn3WV7dBVvay5YKU2GDtq9akF5mWw3kciRZonnLYYdkzRmSxuMVpSVbwpzPiimHuGqKCTK28",
  "key4": "4HHVH4XK7zSsRwygZBB4iKydvmQqpe7FtJFgN1Pg7oRrSZv1NiGd2EqPqXTcF3BABPMpGGHkgVHfjUywhmi9BUKi",
  "key5": "28X5ecTQCiq12ctHUmEjcazsRvvqQYN4Aj9muMcKUeUeVPf41b1YavgYC8tSWaMH6LHpkWM2AXTSSGDEowRADwrP",
  "key6": "DLbMSLsyHwqBKWnEVDH6cHXMv6iHqdBwu3jSLKViqt72dgPpXZRJK1sBd7ARneBdgwyEDGYbkQd9vFi9onehfyM",
  "key7": "3s3kcbeEtGaJ3KSdysdKjHkWKQno76B9GuYocbwxix9a85rpMYMJnt5Yj5FayQtWHetiuT99QwjYgcpMSSGNbjLB",
  "key8": "59kM8LUsVrSWbTHJCbjDrEkeHfdjseGw3rcBXUFBvaQjvKNHSVEPC9NFBZD3YL3fKbYFkarDtZVhTPsKtjb46gqw",
  "key9": "2t5yJ6rvUnVodFdE8Wr36VC77wHoHfqYqBasVkuuivynQhAoCEun9F5yZnNtVAxYAJU7gQ4vc8CNsNvhD7bamdp6",
  "key10": "5H4gZKnHyPGpg1ATF2BGbyrdp1bYwikDWvu27FZfYvYYyUJVAGZPkqPBUpQc2PkPjVwU3jAeB9HFCAPodXhe43iG",
  "key11": "3Ps8ge4cjYfemMHQi5f5uqi997DM43D1qs5nEj7LeuQiNTjmECjtdGfhZD4AN79EW7PgEcAGkw8xhHwFWVuk3ntH",
  "key12": "35KhxgyBAWTJ8HWNcY1mkYD2YwhoATzt1hGWRJwATE2DKxw2iAaQDqxHpqssks6wgFLbajBiFvnzJUv3F7qim6a4",
  "key13": "AqKx9bA6vrdoQ8xqEQZyaozthCUFDzF9WL5oJTotuh4tVW46WCvoRjGzBiq6fpBEDGVJjbpir37tN9V27sWH8us",
  "key14": "CnLziCd4kpaNHgRBVtXgsF34A8wB786QQiJTLivGWVCkJWK7f3krU7AZCpQEbggySkhNK8fX7VtmMAPXjT5Dm8R",
  "key15": "4z9HkXJvm5hqpXptEh1EXCvE36eQVmPxtkFoEGjBRM31x18f7m6PmGjeBkmYoKxrJdV4YhKa8LBKAsv4jdXeJCrX",
  "key16": "5B4HFL78ktvt1i2YtnpQVKUTKT7DxurHHNpYH2Jgcr2veUJ75jPBQ6XVpf4LCnvDKWHhqsYA9ar7XhUSBTGt1wZh",
  "key17": "5fmje2sfVWketuVgTAwgqXe5UaSSjrPEvYhwBbV5ZnQvXFTMtMBby2xhxRPiinGBijGTKT8NiGniULTmVR8yicp5",
  "key18": "2YQfB2MEQJnE1Zi8AfeYGewZ2KYsSMRek91yKEKEv3cvvVXGqyRjUJXbJTCPbgm52Cy1kjbQrxraAYBBvJL8eVFk",
  "key19": "3Rw4mwq2ji2FjkTE4qJE9TX8Fxh9uLrQUmXFtZtYXTNy2tHuvQfjTEGrjdFDLhnFSUgooy5tLcgrbpg56rcfE98d",
  "key20": "5Ruvpb5SaFHcTEGasSDG2sgCYPDmNvE5xzoMkxvDBoX237PtGNTyCg99saLsKK9Jpvj26E7PXtBy2SyJxgeGReja",
  "key21": "59tKdro6zZP3uBv3fM4XdUhf9YD982eHzXkNgM5VsRaEQKimJi6sFkWRZkrUkQrbvEB2WrKgRedmbbqGftdVtQYn",
  "key22": "5yukkN6vLnhYf1s2Zcwb6KBqv2RBV8vjZgo7nXzQv73FExquW5Bi96oHpvka2aha61DXvGBVWRcwwwcajmv27sgs",
  "key23": "66KRsMyZXZDoigSvvm5DC1sbB6qJypoCgBAeVLR8RMLQSZMNAtxgLW324rm8bKb4rGMe1EkaJb4aGmEuRSWaaiES",
  "key24": "2bwZQnZUD4Wqf6GHG8ApFh7i8Hqcx1bQjr1VV9L1CUjdsNT7pESipqvQaYgvXwDAn8fULPc9gxeDe4tYF5bn8RqX",
  "key25": "oHXtUTp6uF8AYHbW1c4T4Qx2qSwSJKH8xkQhajS9yAtqVa2KhWWKbm4CUmDRRBtwGkWEYYhgJD2RaLqnRkaPMZR",
  "key26": "4qq6KdefXqUonMUs2BvXBtTR1NG8xcHfqGPsr58nH9xPw2oUU4HhsQHv4fEdwozB6wcMzeM8cVv8URBBCiG2T5rC",
  "key27": "3gKN6G9AnUuUhHyNZqTLEfgRo3RGGi9yum2YxZ9LpFy8Lcv85hNVEYrcD52swR3Kbnt4GMV8f8VKg7zqjgAZbgsR",
  "key28": "zCTBdjKhASTnqJcFoYgaSVzPdEcQ23owiAwQLYVsXfpqgv7vTn5dKNTAsQqFCtFu9XYNre7GmTxofG4Hm47uysf",
  "key29": "55ZYhVMVHvCXYv3QgRd6LLAggbprWi77sUWgZtN4xbSvi395ToSRyGNijZNwRcV8ok9CBegKkdvj7g2pc4TYLn9M",
  "key30": "3FGmtWCTknRauCN86hhF9dRRRpcrvNVixZqzpgGyUEFuiD164SySgLALJ3fzF8q13HAomD6do1ohjhVh3rbXPx9R",
  "key31": "4TjjePqeLgJAgkDdKD1hhKkJwPSN18bYdAxG93n52318yqewFxoqwEozZ7EjEyctSCqsEzabEWAGxFovpCHQjpSW",
  "key32": "3L6qkffLBdsyqBtLbg5fph2mQtqok3yCzeqM3tTzNAvLGfCjYsFsw4UhafTPAHxG6N7Sc8aTyBfeXBZCidwu86kt",
  "key33": "47X6XDJJ77eyi1kWW5H55W8PhH8MWypZgATh9S9TDMwVXwBJtmdJmzUkKwNsJ6uEvHgvN8UGkgSfgKHqHtohNW3n",
  "key34": "3csPcqDhNZE9CRm9yghDQS1sdTWoRyM3hLVjBx3mobzbsaG9GYxErkT5QFvuAMNWyxb7DqX644HAp3ue61sSWBeR",
  "key35": "5zuEuFv8FbNoeVeBwmipV2KdTUv2515aSqURKYXKMdtoLQuQtyT5qbF71YtofCEF8a2jhtkV6wwaev7d2bxQ53YX",
  "key36": "5PyE2b8uQJkJZNYsD11uz4QP2zrHTMdP8tXnbtTGoumXBcX5oK43QYrkhfNT1GH7RyhCEbMjko458kZyt6UuawEE",
  "key37": "SCfrhhhxamPFGGUbriwfowzBXPfRPR2n9f5VXY2xstt4djK971wiThRgYMNtiRhf7vAjC2HW69z5Jq9JEeykKv5",
  "key38": "36gvdDyvC6ZbZsjGsAKPFzLb5KdGhHorDEkebUg56c4E54d6BAwEhs3zW6gDWCWvxUaRKLGLfQcuBRBgZfajRkQX",
  "key39": "5reHQ5EJKRKko2537nM4QGy6uJSYyGo5za3oPbuZjc4Abqo1TktcoHLBBxfcbCi9ZZRWpDdEYuuBjfBj4HkbjjyE",
  "key40": "5Xc7jzmk5Pojh2PASWLcPj7qKTQwHva4XtWBgLgfEQZB6dUctaqY9m5F998KjT1nHp5cx4YEYgQ45x71E9z1T7W6",
  "key41": "4tYphtKY2RnTNsZpVd5kBEs4F89r6E4sgiiWNLforjnbau4mRZFW9DqhuFnpjsJohs8HMchAJCQpJQvevfbSumvG",
  "key42": "2ESXiJrot94B2eH3TyydDRs8i9QEfR9tY4aZruMc6myAaS3drzBpSkD2A52XuKxwBtDThwKXUqUqjea5T3Pvu6Uz",
  "key43": "5RxALjpmCW2xmuNYwmpM49vUwK5MKCPJttmH8jn9o5T6ofVLv7Wpizk6Zy3Fq8Xxjs3aYkY2yDYbWrYADH2ZMN2n",
  "key44": "3wKTVGVuo2FeW4HtQwEoJkFhv2AJ6HHcS7E63GSYUZA6rfFeQyCZfJndPfx2N7oewcLyV5ZVKyTK9j4pMn6mBkDc",
  "key45": "5DvUB83fAiwtAtCh1qWmJUbqc4CQeinRUeYJvcfCG8Srg1448RaqKHrJf772hhy2UpgFWXSTKa7GxaBkrWixE434",
  "key46": "6QhCq3ZUkW6a4AiDoUhizoNbJrd4LqF89zTXC9teb99SowqmbCWUJQZrRdDTqkntDRNc4AbFWovjKDSdUZuyHpD"
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
