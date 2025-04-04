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
    "4G4MSRqiYpg1774hDb1TBt21YeDUKrpfa1Fy7JtMMq5YrENswBdPgk5NT2M9ya8ctnqoXHUjMy63tULyGqUmS4q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FkY9zDTmN6MmCWq7zdYJxUzngUKWythFasvjzTxiyNhX2FNmLYneWP5MFs5MZ9ffSktpeJw2rYHsLTwUx9ATQr1",
  "key1": "4APchYF7jPqDPyHUqTZWndQDJ9R3XrBdLyFN2c7V8q1yDAZnpDLbWgoKtAvrpfbVvoqowJakG9KbT3xPHFNbRfkp",
  "key2": "5iVK4jWdqVoCFZrfuM8zcJJqcJNdhixPsYmHC4cQKgaTV8GJJ6Gf3qbSSyqTctYSPGohXwmREQLKgqaiuPm8CaYG",
  "key3": "5ccgeardQxoHMSqrD1eGj6NcS4N3r5fQ1jXzoyqwVEUmUZdxfZnRGvTPTK8tvCTtmU18Gso5GcXDeJFrgq7FcaVo",
  "key4": "38FNEyyiGs6LobQ5xjUXnSXpdXdFyxtUvz45B3ucfhg6gRTTAgmd772qLWJ7pQhYNnCUcXZDUFKHCudhi1avEWze",
  "key5": "2tCmjAD3VoKZJnVRUuzgXnpd7jwd8SCmGKrLgkVw1uoQhv2waQA97QzXmX4GknUxmNDK2BQBkkKXNnqGR38TWGtf",
  "key6": "jquQB4vhDB7HxS2dy96CupvTShC1wD25Fg9ePKV3LkyvskPxrPF6Zmio31UzqpMbH4kFBEQenhrXUnpD4zLja7h",
  "key7": "41PA6z1oi7z57nhU5og9Zb6M1px6nxAWbzQzEK4iMcysqZLXLmEKnRGq5bS5cXKjToPFsXiSSNmLiwacm8aqxwjY",
  "key8": "3VjTfMvrMiVJCsQXNTnPKzdPnT6pcbuf1JdVA2j9D2u8wG1BjS28V3g1EF7Lh1DkJerV3wRzmi956kBtAq4TX62R",
  "key9": "3Th7PhnZeSWE1kDjxyf1MTZn2xTddX43D9zwcx2hVEtHUBS5wBw3ky8pVSvzoa2XZ85MBMGyakQGRxMnR7gJjzQ1",
  "key10": "58ymW1187vmRjxPpCR9Xc5j7idFhrHV9pFKbgrUmGBkdXenVWD9LvXfs9pyDcwSB6FTr9jFVEdNVsxw5MhQPQ57R",
  "key11": "2PqetfVDxxLqW1LVWnBZthf7XjLiMGWbowBG3SgekQqaYjP1CrMSu7oNUifEt2Ewt47M2CeiwEGMcphPjSzC5CYD",
  "key12": "33Ao3ASwAjCDUua2odwkumwijWbS1wqaJ1vTQEBvw8DucHDCnUQ27cfgQvL5AXANhFYfqSJ6iWFnBvwPunbNbyCn",
  "key13": "2jwBJ94gqnPoXDHJY7TPe2yRwommTA88q9Y3r5gJpq3MVBvyHmYk26fvB9PsWrdGio18k5oXPx9MRLmMH6sp9vkD",
  "key14": "2TWK6KZckBENLpqgoGvmyruDdvALA5tiHqV37wCcCUXtF1QxQq2ik99quKoz5fefwgZGEuNG8PszzmmQxp9saB44",
  "key15": "4Su7jfuf2qaEEjHvSGr7L7umGaWjyU86htNQwrtgggajEaegE18u9pyZvnnAYkuWSQP5dB2ZKffnQAWybnpzpTNn",
  "key16": "3FdnVfFVhR4eTeG51uTPtad2aRbm4hGAiduujPZmJThbFmEL83vMQunbdtFF8tUXDyEWAckvzCFq6daWun2Jw2Tr",
  "key17": "3GXhWxxtaubn3udPdc8MdmcPcfhk15DUBLWVMhR21ENkw1VpptepGeLVgbwR8KnuXo62ga8ADPHAXUdzfhvZPWf",
  "key18": "4E81DqUUd2HLUmtSD1CKCjYq8WiVWDuwHhLrxnAe3XmCYh2q3LtKje2bdbcvQFoTqp46xMiDEuPcshNciWFWmmu8",
  "key19": "4N3KoDXejoYmPDxJM1SjijModSW79X6PM7Kv5p9beMA6YAU4QEdDsYW59BiCpbtyehyYCxkdNFa1P2uWwEBKprK5",
  "key20": "4Y6zQyrESqvh9U3VY6iWZTYQrG9kuNJ2f13d31spzZQXQYavSwfMafvC7GXddXCzbofuwrn2JRJmNZyfqfPyKDBB",
  "key21": "3T4Zqfv1ASD4u4Ps7b56N9FBkyiS3oix5p8sNEAcx6jLZGS3ctpLcFCP3FMtCrZi49AHZr9u3HgY9aigZcuGhcd4",
  "key22": "Xqdig7BGq6v2mdqiPk7yf9RwSKujo65ZuXVELTxdVKzmcXQGY6UmpUF8fwJYFErBKi9jq35ZznhJtbapS2K5LmU",
  "key23": "2hUJ9LZPztfPBaEb7DShLCU5dKWgJ2js7j3173DLeJuEU5ThiS1VpxAZakifwewpRtXfDaNj7QHgpzDPLaGTpB5A",
  "key24": "3HEvf3saUjdmTs1pfQa5BDNoYkHSGVm1U54YxHQomTvtJdjdcY4DnbrZrfu5tXYgkwkowiTayJEn6TfyxAnJVXWr",
  "key25": "5smT3vX6pfMBGFomxV4aYpfkrKrmv9NHpK5jv4Zt3J5FnrUawkeENKmC1MCxyyK7mYnhu46GWSvH5Kej7uRLK16V",
  "key26": "5NMaZgTQzmjDfLcfe5cBBiGErZvjZ2cxZjX6D8oqLk5ZTuHVVRmR37V2XwdLFSbtopBak2nJkcjBdDqyALNHxz7r",
  "key27": "3uCpqmjAfeQCv5XssgYx7Cc5Yk6ef6FQKDgXNapjoYGfyj5UtK7swkzua1ky2oBjapcMoqJ3DPefuejibDTsGZZo",
  "key28": "4f8r1TXZLVt8M6w3vkKyYqJxeKCesLUh7oMbKURj2VrCYkDFu2Rry7NSo1WdAB5xjzkcHA1dxr5FdbAFcUZGVtEH",
  "key29": "4jinVjZ3EP8pzJt5txh5SqKGRwfzNDFQNQvX6kQSZr7HjkDQdmqb9P9uyCBXnT5aJ43qLs5dsYL2CQL5d18ymPHQ",
  "key30": "5Atm59k3QM3K8D6C2MwghzsJioxhqyVzAHRR3XLXhWkYH7vv1disaQwR9aCai46gfDiNsCUmxYZDtzVcFirhMrsD",
  "key31": "4dN2RM1cLhjrDYMfbTSsGAi4LqMB95zHFbXYt1JPC7Q74v9czuzUTnCBkfJj29bBCCMJKTmPwG35mr1FFLLjdUGn",
  "key32": "3PWAyMnohdiVEvaDag4t52ymotPFW3qvwZS31EkzJJS96HwpqidKXZFJGkMphAWFBPQejPxbFTeyTYJZ9fZow5c3",
  "key33": "jE1smdBbmgV9zfGeEcEhtFMAM9GeyvjpEaJpSQKmMiQ46xsLjVWM3bPgU9ssEdvx1gKdQxtHwkouZAu2zPtKv8M",
  "key34": "2Evx4EMhrRjtbo3YpQueKFrjcWZo8f7Tt1du3vgqKqSU9qkbZ6Vq2xqyaapn56NZQMtws3XdhW8fVqvgeGNm4uKA",
  "key35": "3cyANBJa1BrKmH7U5kwMTmhGNR6rXs6Q2gRdYZFMRsYDgbGFyo3oKeyDzd7aoCwKrMMP1tBsBvi3mxJ5eyo17EYf",
  "key36": "4TRYP9BciBgkJpWy5AXUGGqBPvp3wKaMcmKeB1dwqed64BrS78pCzV5Xt4Bn3xGknrMSKkv7Zhr2RDp1Fm549gF6",
  "key37": "2wADHwJa85xUJYnQec4mUyxCyTmNu8ufX4EZGrFPzHQaLd9R2hLFDmzXjGmqMT11TbT1fZWpACk7VdUsVo32qEeQ"
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
