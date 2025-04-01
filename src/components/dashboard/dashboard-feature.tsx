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
    "2tjtFsvqDpVqU1zbL8mTyry8yAkPLtsQY4YCD2xCSiASfkpVwUY5M2XTTCSkakrPbDojQRfuXmdt6vnr68iPJLZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FJB4e4rfbPAQQ8fSHBH6QjJXkJmQ2mcwQQfQSGBRqUQq3sUCe2D6zXD9bUR84C1eknvE36yVUjJJbqkdLZQS3eW",
  "key1": "5gR78SVEAgAburyFe3kDk4EJk82UCfnichYtkHMW3QVpRfRdox1vU2XzYDFkhnAK98tc3hvntCMVZmAL4JgTVoft",
  "key2": "2mbHeAXripkNxD1DwpYcpK5HKxqqa2VBEbPCgm3fng35Cqxx724ZxUCZwpdmiVoJDCrJ1AGCFmTzeC7QqscJvL88",
  "key3": "cZ9WYL1wtTjBHA4kX5afhywb48T7rzfvK9cRchgQDVNFa2AssALZivzzj6j7aiCzsrYpimBJ8kwogkaiG3dn6to",
  "key4": "37UPsHvRxmnVLsvycZR489y1J3q94a4F26ySFmMFbqVmajnsMRrJxJBD22X8CtoRJkP31XQWxzcAbepwJA45PP4H",
  "key5": "D79cHxoJFPsg4T2hAj1PnYNyt2CWx1eye62Dd1ycwNNtU9YcHCrFaH5RDPDj56zipT2iK8SEWnfsQm6vgoVSg61",
  "key6": "2pLJhkXtFGGBpkoNJV8EH35RTeBrDsVNXV5D72DYgpqJ8MjAU6dv9CnVFxSxusc9uU4B4zHbzrzAG4sdmn28EQ7B",
  "key7": "2KmvXfS3F2zp6cofLk1vzJ7dSQqdhA9axXueWQknSFoZr7hfwDZE6zLGQLzSV1a7pQpDj728JSfw3Q9sPAj6LFTX",
  "key8": "2Zv4hcrJUb7HfAbnwMhTkujwsGuuLn4zchQE73tW57ZsgPceG8HpHDz5XnP2RbQcdfH1GkPW542N2nAxkztENNqG",
  "key9": "cADdgsAE3moWPbW6FRSKY55zRt6yJnipW1mjyDmqzX2h36gFcm1gPAmv1TVRe7wDUUaYf6wiTWBvfcThSR8dQX4",
  "key10": "ouKbN7dLcLaoFM3dRPo64tbtjcymkVbJnXqcGJcCtgkmduugEq49PEGuG28uE1YPcZS8o5XznqBcsSQNwMS3PVR",
  "key11": "UjZRe76E71CQmmU233ioWxXCbuTuhguCW5CaP2pSNcaUvbN25vug4waKUb628AsJDtvNqBpVvS6WyqhTPMW24fv",
  "key12": "5mgLTDnKYboBGyC1kYZoEjFYQ8AsLPGC6ZsqUhG17jPKxPNCmknbzwbmjpzPzKjeqJQsyLSfk3rb1H2RLEmkU5nA",
  "key13": "gma5kmez72yJk35M6skT5N9AK7cqhUy9S9Y1Zr8u7KvDFAQ6JM1w3XEdd27PgebBwYcEXwtkr2uC8EVgmPjvpzf",
  "key14": "3T56TSveiQt9d9qSbrKVedDRCk3gk9sMFTpiNmw6iea9NcobKurKygPDu7q2MGJ959zwGXZNRiHroaBRVjrssYLJ",
  "key15": "3VFdvDRguuwZDJmkr1xMg2BH8FKiNZuwSM6PWDbtRdWvN22ax5q662tiFh5eQ8TpiZ7A7mVg1Z8e6vY6TVukFSmr",
  "key16": "4ELmDxL5VJYBx8Mk8bpLRThS6Q94MJXcXTu5MQaTbX74TGfjgZCawRFPJwAku1MRUQSwn119iWcsb9yZnzvNiYAF",
  "key17": "tTRuvex1quTAKyaMHndtEKLYeSvsm5wkzTyt8Bvjiwf7RWHQ67Kjx25oGzUYgTZNYwZRLKc1pD4h71XxDjnzGHo",
  "key18": "5E3GzKS23czhz5cs28FdfUoY2LKg3kU7JyaHMKTTZE58drc2hXi4aAZGnVuHUg8NN2cb3y5zorfrf5Y38t5PSftY",
  "key19": "2MpdXvx2Uu3RcwQYduXqJ3x9TdzQFeCrGjJefBGFGNiNs6pZfzKUkJ8Ev3ympCpVXeaC7Zt4RZWitL3XvB3JhaHy",
  "key20": "66Q9iyQogqG2e6nvbenMkYABDpSW3T6xSA9ZuyZ5wRP9JyDXKqW2iYpj44phwr8LQMWGrzFnJb86hhfoQFN9Y1nL",
  "key21": "3RdHV2U1pG13q7qH8ADCCBp3niG1SP7V1tRFUhNWKC7gR9nYwnqfcVHMsXvza3Z6cZDPetgTTyXRtXkeAmjcHctM",
  "key22": "431UUtcGB3HgpGwuW1VH68bNbK21jyeDGpJjnhJRBn9bRCsDMStFdHnKwXGu61JTodBD6yMs2AAS7oBwK93gT67x",
  "key23": "66Dsp25ZvgKT5Yz8cUGiECsoywTQM1sunL3sBf8ZN2DwRHbs8ZhtbvxDxAxvUdcdNGWqzUjeGfgS97uyW4JQeVQn",
  "key24": "5LV472YGna1tzqUU7CpRFM4MjoZCHYHeTWE5qgFnddXDTAdp9Xm4w1vnnt5kUVGmJXvKQ6HR8EDKQx5pQc7aJnfM",
  "key25": "hwSeVcBNi761GNy76iUsQEYzeTecwhS4Ghq9nPb72tJ4kKQerDdm8vbRYmmtCDr4oMQzDvJVG7PnKjbrkBmf7zU",
  "key26": "4G9nAPjsARBtE5MCVDnHLYm5T4qxpxDj9E8EBWhxRjrjPwYKdrEDjTzJjVMYhaXp81kVormCLnRHpuJk57XZ1Zrb",
  "key27": "2neCbSgaG1zphg75uPtAh2tTENzJfmg522Zpo1DhGqqYdWxXNNQ6rgJA4DJ2qGFni4Sod2DjAsvAd5co8SB9KP5y",
  "key28": "37N35FWKzhre9sh3R1xZp7SzXLLH2StFofzja9EaedoapkwGGqjNrUwTDHGuUfaZ2PHQa9J52xgXDULjBCJ7j8Ue",
  "key29": "2DXZASoahQwuCNH7bqELaTrTBDwaBwtnAFt5SSnVKsHtQRfLHQRxBUv9Mf3ZT8S4XuhQrNkBM39KqjN9ftFYZ7xe",
  "key30": "2CzP5mRXgL5KcfGQFjKsvtxrrsZ7jDnwpdZaTaTjzbmZtZ4YrayThUAJALhuxxirRc3gt8VhrAEWwePY6VZFz1HN",
  "key31": "2fTRjRoCattyRvqa296Gf72QRpHoDU92jC18oQBVyux7Ae7bR5YJyHhFUMF4LjgsGL1GUEjmM6rH6yAQU3BfsF95",
  "key32": "E8HJscPtjY8LkA3exk3v4rrP3kQrjKmNXK9w3V8eAHpqqqti8a47kr1jbuQ68WVg5iujUZf3Nz2udcQFjXnPBUB",
  "key33": "2FVUJSu1jX96L6oqvZLaSuxAWab5uavKwidyHKicCjrjQYsfqqn4MGgpWaqfkmFB7beyu8QpLocCzdwL3hKKtKDc",
  "key34": "3AXbbgNPwwfYB5jd7EzLJuEJfLFcyi3UoJrwv1jUTFHQN2382HACDJQwxwRnFVw8jnZFWuJ8ce3tL3CQgaV7egtE",
  "key35": "48DkWySJkixCiCZXFWcRSZanP8XFjcLQTrUBfQqvbprWh2736GhAwnszs5x3XP2MzM7KnxL591xniznaeu1EFo49",
  "key36": "kNMW91zG3g2Da6xV7A9z8UKdRCySWcUVQ4XMBtRrvTiFMdkoNLTystiDBKtH4ARrGTttqPcFf5fg8GMWFc55h88",
  "key37": "2KSFKPGpqyYWF4BDt3ZVe59GvFNiDm1b6N4rgZJ9NVjgH4ujYcLAYjNh77Ka28f2i6g7K2GabTyHCKdvH6py3bsh",
  "key38": "16BQWCKiPst6ofXjEFZWAKhWxhHpuMcZDnfP9yKtEyB47RR5DMhypacQn7jBLaLhNpCcb926q79gKTt6YZt9SEC",
  "key39": "ypeEBsEbXuvvzcoAMfhHRDRjjNSp2c29Nr3LXy7QsnG8XNLrKAHrzdg4xx9fGxunAXx8imPYzoBeuQAfLHG29j3",
  "key40": "M1EuZiKzY5JqSnfqgtAVZLZUyhJdLZRhGovJR5YZsAiDaJvaDwk8h9zUE8VxtBfaEbXzLB11RNC5UFEt897PupF"
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
