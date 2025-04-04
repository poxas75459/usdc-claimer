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
    "3fkyp477R51eCsc12AaKZ57bWf1XabgeozjpWk8Dtp3DKwc55x1tP3ZgS3BCc4NCsAb55d9BfcSKrYNHCWLo65iM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23fBzYfhbRaWyeohSSQrGVQfN6BT5pa1eQeEdrozBLKAGD9bqMqz4GmWCh3dmYo7y9BuQWaHhf1qGak5tFYwhtfL",
  "key1": "3FvrWJJDv3yi8TDbCwiAH4wMSKLALDHNmbJzdrf5BGyxZcqQvnW6aRqhss84urLCRhcf338joX6FnEBAk2BWdHeQ",
  "key2": "3dRAzNDvVvzWmtJoApdxbrRS7v9zvQndpbPrddpQ76hZWTo5yXashymiScvdFSwHAwGwL5PhkgcMa4vRANNoMqHm",
  "key3": "FQkr3KSqgNkWCbT3Vb34DKz3wtEyGzWkahbdti9785qmvHUHNscK32QzuxZeHnMfao1bMzhoySRVtYHmUhMCMU5",
  "key4": "5FMZPNM3RoP5qTCTFFGFbaaCLEjddcYGgB2r2GyYn8jhYpMBpUkZByCHiWna8sKGmssfd2WzXHA3udGDQJqcWVz1",
  "key5": "cXz57ZtBXDGRvVevmuyVKujzCSR6VyZACzjGNnDeS9ANNT9kgjiREkBfE7agSCysgHA6FHf35BNsh295WajsdzN",
  "key6": "2Xc5Wx1HuYAHGfFwRMdPiqKXjQMeLKeAS4m7WSPyv3BPTZ1117rYi3jiDPFtK87NFnHGie8xQnGyUbCjFrME2mkq",
  "key7": "5GuPrKAwJeeediu25W8XroypURe3E6F6EMHuXy3pzKjRp7HmFUa5P6Ngu5hhvtH3EiykWN493idgoGCgpWKGpShF",
  "key8": "4VaVL6rZGEGEL4D48Q5gQdhqxKE6DHcrngBDLnDgwoK7gWDZzc27gooVjY6biKyLrbRmn8rEKdZBpNmiJssvPA3k",
  "key9": "5GjZX3rLcBMXXMUboCM6TdkncPSNwCtPcN6cPRvn8DddKFEWhRZr2TmfevDQEcw6efWacm6VnL2BA7xR1KsgB1L9",
  "key10": "FLamiHkkvFwZPFrxD5zb1Daz59uJUqr3CRvs3P72GXxF6kgfPEMQmznKvcMgAz133ztUrSCqwomyjz8gjnZUL3R",
  "key11": "4E5qqGAqdMsxAacDrdjHL39TDiH873Zq4KWce5EjhN6jsoyArra6Bb4btBTtjT7zJLdDSb8GGjRbMYceYoLsuVbL",
  "key12": "2j3W61v2L2w7T4uDxqAGbRYrge8eoYk5RtFt3oGWrx3DZqVwStELZovGbtfcn8zA1T6ZPyWmAKnHjDkeTpMcdEvW",
  "key13": "4hD5Lez5HiMmvYaGKVt2gWKjkSXTKCAka3NZptBmsrfS6C6k8oLexB6fEVT78jSZjicH6dx8wSBzrQgYfbnceCrT",
  "key14": "321EZjxqkE3r8LtYU3zPCoWRdBfBwPKLLSqboKcSepCTdAeejFHgtVWg9u27FULiCc6pF8VY6sEC5Xz9zVBCxE2M",
  "key15": "LY5GGv2scEZDtMz1FZPqBvgwhcz2DaC7gfGSNaYEM5L4rkVmoNtMd5SFME9Fk8NWaKeRG6VXPQc9VF4388KAjDb",
  "key16": "4RsraUMLHMh2YhgBfhpUpwkdhiN2N926DwZQ1q8zTriB7TASart9m7MkdQd5x2vxz1qtjEM8E326z3kd3TQAwHTJ",
  "key17": "2TvZcsS7MLjJoxNxEemF9kTbaQmR3i5Cyu8FHX3t1bzQvsWExxTKqqNZf5v5UgoprWPCptxqWiWsc46CcKHqjHFm",
  "key18": "2gJ78b8QL9Y2GyF8MTpXvLTMgsi3jr98UhpJPZVVuR4UsHtB3dkNd2CfT1rRLTdCgbaaQ3bMJ6CK3pbSh5s459BE",
  "key19": "5rJrnqpXFrgio2TFQGoewukgXJDyAGGK9ciHKy2PSrAahgf9P9ayqHqt97EDXBKRx569wAFL2nFYuxCa6mbtkQpB",
  "key20": "4dX3KkEzkCVpRzK1YbRkaF4usewsyjiZnQh77uuTHzm7nwgzE2PRnbvqyBFcTQ5ftmv8RQd8vWnqfEaqqFaM4Cyi",
  "key21": "5dzVToZVXKRZFfTie3hGfjoTATt6Zx47FMt5eVvHnHUNmcmvTa43Y7b2qUGTN15NuQh1tkUi1fDX934RFF1ys6QU",
  "key22": "2VUNCUjzz67R7g95DDc1ADW8UoqjYSj3RzuJb6b21afW9Dmy4vkaCZH39YKfPU9pne5kBYdmXZaGDMSboaJv68Je",
  "key23": "3B9u19LnBqtgEnVaj9wtLjf3opgTgeEjbxcA4RpYb15TNPv8d7TVsxZ2NoqCMZnMSKE79kDtjMLxshXxy7BXrixL",
  "key24": "2aGLLdMjLXbjkb3yhah75VS1S45muEFdouDEacjTtFxxjLw5bgvxR7SjWmq1CXBxtUCKm9ZfQrQER6bfZq4wEd7H",
  "key25": "4ECpDeugpF7B6T65hRpgBqBs5udZZBheuG8Mtd2M2ua2z52ZAqNmcrZfBD6Z4BLtjidoqBx8wgXCMYrkZsCMHHNi",
  "key26": "QVG4trjTwiKcFm7AENxmHPCsEXzvjKkpMf5j7HtCPjqNe8N91ugBJ8WrmQb7BM8cNWJ2JVr3hrFv68cq2buDh9G",
  "key27": "32geSZQNi73pXTEq8K5WxG1MbECejX5agUYfVv4syg4y7ov7amdk2th8kdgheq3Jq7Ah5Yujtd9EohiNYPwCeqho",
  "key28": "2TzBCjf6xQAxchj7guLgnFcb2VcuvvXvMpA6iWxmaXU1ehJaeTmL3AGDsUpBfLksRayykkcRG9isBAeHtWxY8gEA",
  "key29": "JWwbMoTjhrkUgCiXBCLjitc1Dv8WbcVwEJVDN3JhxSRZeMmsxLpUKTer2VFYfgJy6D7eqgJU7jK7Ccz6Ng6u3br",
  "key30": "4hpFbz4xVru2g6J3TGBgsWsUeMAbh7ann87fJyRrEKg6uYWuURyiCXzeXZxsx8coME8XPLzHAaaY6J4zZyZQKfLP",
  "key31": "2zZa9CfedpxtmgeW5HcN5FZS5qn1gZtpRvtvMZS5Cj3WHLYVaUVGkFzuKmcTvwy8q44RTErjwYJk8tAd5bqeEzMV",
  "key32": "5vzvjctH8D1FZsWhGVmHZbHY5hCBjgD8n7cCpp1xsTHBAxvpejSG1MhmLBWh26ivvKC6RS6p9nSZiFHewvAeiGXX",
  "key33": "3pmgrJdbuiEWHw2VSr5nc1SmUfCpYkF6uKF9iwUHVv3CGzkmeRdC87jVHGaXoqMEnF1zAgKxrgquJJfpYjoMW922",
  "key34": "53PwkL1t6YMxx6GiZLt2HugRnj6isPoffXmgAkv6JJGeKs1QdB9j7YoQY3e9USA7LYcrvou1mSFxfhg1aCNBYtb1",
  "key35": "2j8pxzuH7oQz1EPQWCmn3uA1fVh2yK9HwkRDm3iVNeory9UAsSrqzvfWFgrRdLPGeK2TZYqJRbvmTMRDbRjJgPk4",
  "key36": "3J1bjCR21ehyFf9mdqiuzY9BDyJsBQA5x2WFnVJH3z9ojPYhBnvjzAJqv329gGeLguocGNbnuSsdt3TWgegs72aS",
  "key37": "2TNrMsQQTSk3PZZ5wXKFpUkb94Aq114Z5nwQ748njkQLKXedt1ha8Tgbz62w5f4kep6QqMMViAQRuY9MoTfnD3uX",
  "key38": "2oQD5tAWM4KFADy4jSdU3MKegkQsMZkvCFsr6GAJrjEkY6cv5gAfRV7h8npGeWGd4T5H5XFA4ZgUN2tb2uPkj5Tq",
  "key39": "2MsyFpvPiqiaxAb21co4V5R5ooLmLvZuP5XDKPn4ERN9q1Zm9ghfKY8txQ4szMks4NVDPqdzFkKgJXemB15mxVpJ",
  "key40": "4vZzE7jmbGdFVTPeXPhFPfLacTewYcSgHq2oE2KH3RpWLvkTPjwFdjvFxAwCiJczwrFniAgyQCDUe1ZT345bDAKN",
  "key41": "3WXVZhGcYNonkp67N87TLBLfiVF6JV5heXpUp6xmvTSgrsbiiXbxMymwgiHR4UsCX6PLeJnFfKPG9QKtULr33PNh",
  "key42": "4iWjGbjiEfPrUfADTN7R5aqhhaL1kpKpempx2ib4ri43oCPnBmGnudxmQpcyHt6W6uS1g9VMrDavSyHS95fuhGA5",
  "key43": "4sFuJzQJzYfokZVsaRjFwCjywEnjwCysfkGbEf9Jix6wzK94QU13ykvWkCUBcxgx8eg3LqfovppvZtpWTQXLy1X9",
  "key44": "2JirySuysQNkh3GTZaxcERoAm2jtRDpHHBJXy8Qst4F9o9Ckb3Zdejmuc5gUPQaJLhk5iwXhjVFkmVAxZt92XCZC",
  "key45": "5n6RKPJowPndWU3ch12Tieo4EABu25WP5fEm2YLwo7dz4mpp4oy2T3MEwpb2LQH78W9HEg6AEgJEjds4PZ9J11ry",
  "key46": "sb3f4uEKkpBynDEoUmQ19VQ5EB85NRdU7JWB7Ge75dYKREM5pUt2fLWmzRK2vvUbYkGQecntHozTBeaDt2J66DK",
  "key47": "3f4b6dhQX6Rzin5ArU76nUqiD8n6WUhVJZiohdYpozwFNmVjYCCop4Xnnm8edgH1Qv9ZHdEcccprAjrv8p11kYhf"
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
