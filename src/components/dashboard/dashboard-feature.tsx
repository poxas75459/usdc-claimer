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
    "f3odTSmguutKvyAqZuK7MKPmCAvaUx9bPKvmjiXBL4GPu5KeRQU62TUdb7bu6uSXvGJZAiZcbLwNxkgWtVHJJHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BDsiBbo8mrJ1xYKooKPnchw6UW4rQ5LNUvrei7D69Em3PN8JQ2vR2UYZyaDEfZNiJNxvHvWJpHuYKuABmDtKkGK",
  "key1": "3Cfzb5rTDsWVnBGQ31fpstpMTM2aMe8B3rrL3cYzxCX7kAvtYTRyXgfGiMxHuQzvd2jrA6SNYo4fTfPQbvJKJxxh",
  "key2": "6yf98SFWAce69zakD8aAWepmbnqk1bBEwHgFrN6cGCBBj4A8BEEPUhgRV2yLs89cqDFvJccBjasxEZ9T8WmCaGL",
  "key3": "3Sd7SvJTBQZkQifi36N9jiD1Z9fiqZnazxLJHcjep6fKEKHrscUcdPK2Qs1Wm4qFMcpwwH9TPhS5MxN1rQG1FDUp",
  "key4": "3JrNKsLuMciV19yU7JzjQRg4VXiknzsayxXKpvrinGb2QnBZa56ViT5XftZpDk6shpYNKNaPGq728sFvDz7ikSUz",
  "key5": "49xSWyXE96mLniPUX44SZAE9HxvVvsnBAxpRibmxwNU3T6GrB8uzFkj3RSX1sjkCNmBnf2hb74tLCaxxdfVzWwrr",
  "key6": "29MQQisxodywp8AxqtJym34mjKVznhVht6hwJKiVPUXTZfnje3CpUv9EE7C15B7v2DAPYSoGxKorvLoWznunURsW",
  "key7": "4xaeq8s7DLXTuzMp7hVJ29eLzMMsbfor1AmfMADyo6r3j3vxmCefRt9yjKAqoUumUv3b5zq2HheysWHGEmCgERJR",
  "key8": "3XGSuNgXd4o9rTePv4js6VtL82wSQBt2ZrVvLAs72vDrbcSeLR1kHEnCJbLqr7adWPhzA7vGfA6NQnU7QsyshVW",
  "key9": "56wL5BZ2CaMLHs5Do4jGMSinbkAT6y83zoxseuMQqDfRrPKCbzsPY49opcbPkEMEa8XVcH2Lvp1PG1Jb8UdqVomd",
  "key10": "3tUhXZZjR7Mpwz6zatzS4TdMDCruukAMwQMVX4MMfMYtB2bvfwhXoRqyMbFuow8UBmGGgzU43NU1DWsabi7bfHkz",
  "key11": "MntouJ4xuEqNnwtsNuDAuXuHK1YTCsSG1ZXLF7UX6WCsxf1iTBLMpCsE5QQRDVXBTqT3gY69p5vdSkgLPuWQKio",
  "key12": "4cxiRUn18V95UDoJvC63V8898awhVvHWtFyzzerVumjfH9tepVFYFftGKcyr3EkjpFdtQ28Rjb1wvr8Y5arMDpDb",
  "key13": "4RGEjAYrWUT3sgvJNr7RFesE5Vc5NkCebmY4petw6VzSe67mt5UsEKALk9pgnx2BHDdBxftAEnCzUjo3j14u9U3V",
  "key14": "2Wp6Gh4gjwLFW7Jo1hSGapzuZQEttnsuRN9748BTaeGNdV94aTrZky2gTKfRz2iSsrM2fxwTPC74NWrXqaCiEMJA",
  "key15": "dGehvjv1qrwbE4N46kHqomHWNottbPoeBe6vLUxy7UzgMKoXyt4vRowx6d8bnpmfUXEML9XqixBKKFB9U2EaLFf",
  "key16": "3DwU75SNqps4vwE6ch2YXx34HCj2xfcnuRByrK1sG21gyBSkun5q87xa7EiCRrTBiWGNuyQL6XmuzhUouERZFaBK",
  "key17": "2VDAnKmT8GYuS1fJ49LS1gQygxj2qk8b9qMnRYBHUsk8FpsbeqkQna7Ltkxqp22kyNK9SBg3kSBxH4C7tWZcHvPo",
  "key18": "3rN8bvs8Nzw7T6pPgakxKjuRHa1rt4jqYxWKCecTNtAS7DBTyBFgNCr8P93bQ1zx8Xknw3tbHhyBzbiUFom1gKiJ",
  "key19": "5vRVwidrD3WQXJ2mUwb4nutZeRHDbZCeYYJmA6r8k8VRnViQCNs5qemVjyd7yLCrLMvnqiBN2RtgtbFCgf2uLWZN",
  "key20": "3bCD7qBb7mSPeraFFaDG4GFUFr1RiMnbBujDfZhGLVMBEE8oG3rbBAuV8BdSMDFMNCZGbp2arG5pukuiaq9KUavz",
  "key21": "48eNwdi5myWNem5VyWhnQRGeXVXYBfGoNmszwHpPTMokJ5Fv1uKZVj8v6rZBtGAhU1UMLMSswRLXfDtaaqWXDAad",
  "key22": "2XLmTST3hw7SjevQWrkPXiWKTs5fAGyTpLbKg5xK4R6HRbEiKKKT2BKhdNeRsMfZ4Xo8hJDhjmbUPLr2jkdmQsWP",
  "key23": "5R3boaDRy3R29nRXEiv2XKZcLCmGtPzVvdiXdaWb5B7xexezr4Ps3ApDmdoCn6nwmFwawb4tCdPwLaA2BkQ45Ywz",
  "key24": "2SkSPvHNBfPTnZy5ZfjYbqF5n7kYxpWzG5TUNCrm3z7nZ6UBwG4i6HeCnef8GNXzGhNfZDJoZqA3SMUnmEXyjLVk",
  "key25": "2kW8T2oF8WuMZf78u5895PH2ENinUWd9D3prHyhPXXMHPCjQPAV8aQdi5WqiXdAHvwvxcFzaWX7dp52xm5asY6NS",
  "key26": "gQbsXhj7sdx4DQHM2BPJSs3JHWdBMfJtnn2EajE83trxh4KxY8ccjnFMaoMjKtEw6gy1xRx1ZbDnmVvXVvfkCsW",
  "key27": "5WopFTHuH9WJZjACt1dHYDz52VTGVSgYorYy8aA9oBsUXMqodAg7d6eadvDbHV4h9qMkkZ2FDZSZnqXJQmGu1pL7",
  "key28": "3MqANhaCmMaBLejLW585xfFvzQmsrywDzh5w6oKJgzWxP4iJFACNYZv3GN5v37gsLgc8C57zhJj3jRk7m5RYY7iZ",
  "key29": "CbhrTYCWfHRbV69icA4pE7keBEb4cwSa3stZwQpArmxWwfLqMYUmnNnea3tcumiRu8mvtGZ4wvLEBvP5yNWNZJy",
  "key30": "31T8YWtFDETVhehTfi3qMEK55i3jjH1KAq4qMGsvfaUu17AqN7PZikgASDwT99EMZW5MwhVvjsyTBoupy6FU7VpN",
  "key31": "3pinfPTfXSrrHmhFT4kxcSfjfKWkkX1yKhPdRx9nxyHQdEfm1KwnXZFtUHT5fGK5vQ4rA8V14bAJ4dJg7F82zusK",
  "key32": "56Vyo4SvsTtRZBKHDoPiv5NMeiWRwLXkewmFkjjzREHysS3QpKxthbom7DmVy6QkPVwnsB5L2v49EMoeeP1gok5B",
  "key33": "4nTjc3KQVoXko5x3KGenmGRSoB75UFZWBd1tQvzqnsrDoAc28ty5hujsLyzs3BZ4c2ZBrL6UfmXLKz6ZzFt3YNAW",
  "key34": "2Y2AAUwCcXmTWfPWRvYtbuK7fgSenjTVkdauHQVkSRQF8SggyaBC9TH4gn9smzpb7ovgTrJfGPBrcW68cBHhRNVT",
  "key35": "3vmadWjEbjTJx7nL1BdteuJsbBtRC2vNj8EnwD7XWkL2XwNwTkU4cF22bvekCtWkXnkThmt82VRvtV9gweFjSTbK",
  "key36": "3VdJrq95FjkNsd6i71i1vmohiZAX2kk4surRZrfMhEaDpWysuNEUygTrREqFAQtTutcAF94qLs9r5N3odVKKB22T",
  "key37": "5x44VbaapusFFbQt1mEAFnVfLYNTiM73m6Ad4MgZCGfPqymqBsp49fK8GRrgYgeFQi8R97s8DZ2EQsKuZ8zrYKCA",
  "key38": "5brJXfHTe8bvSvyFvbbTafQXePD2LcBz3Q9HRVX3hWPHyPaM91iGcBTJPAxGRRWDo3hQ84ftE33RK5Y7yTLaQdf4",
  "key39": "3sfibg4JME2pdub1zyFVyYLp44RMnzm3BhhPbtEeejrU6qQHkoF9ABzbsfpEeX9LibUcpo4EZjDYbvy7LAnf6VWY",
  "key40": "4XuGJSJwAnQKZeMK6pKpfz5zVQrtEruVHZtDTws3inQC8ZqHzs1kf67YPxt8jzu4U59SDcYNwwxj1j6K72ojDbTF",
  "key41": "4586dfiRteEvA4W1K31BR5CYv4zJ42xh8EYHf5ipqqdT848VYENV758FKEX26XMYguG5T2jSQd2M1AgsigVzYV4B",
  "key42": "2nevfCAi4U4vRVPARqpqMD5wBnDwPU5VjyRM8Avj9VDsz3aHoL5wbg2mFA8EfFvr9fxhDkCJ5LokRUF5A1dk8AAJ",
  "key43": "4S83mu8bKqALuy2Et6wiq936os56UpHLZKAqnsp9qBMPvEzXzV6zLVdMvz88fdXuZAkWfLeprX6gPCEukDCgKQtk",
  "key44": "54psfmd5u51ZToN4NcNunDiASHuKD3CCp12V5cUMZhe7MazgZSDU4SEUA46XrDFvykZ1LnJRSNuSwDjAjTZmXc1",
  "key45": "21bzWywDr1EKnJZ9ruZ4UBcMvCyyfEJ3zv97oVRbnzgYXXq7ce5QgwDyUMQZeNZ1LpkasP9GwV5jjUiCzjKqX3Xk",
  "key46": "2ogxk8RDpngTRFKmkgVDPNMpdEsM8qRAsSKCgjHyhJv1hpHyMe3294hkB8V7221zY941rdnHESF6LKqy8fC3HXMN"
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
