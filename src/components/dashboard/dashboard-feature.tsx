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
    "tMx7pm1nnWSikzVih4Pg6s6X9SHqqESjezCk3q6EbYta3B7AnerhJkxLpBSof2AQrDx7rzFEYuz4Dh7kePa6XLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w5E3TkJB2N2J88QJBsECXFt6Dj6JgWpLQshWKZJmu14G72uCpjsTZvmkFDbG51HMjtTaeg4YWxyunoSFr2ZTehi",
  "key1": "1RXeJwBPVX3VavpnZypsFGpshC5JyNG9LRb5ddfE6zHURvHzqxTiVKpAKCrYn6iUSr46PWZHRszijqRjZNUqGNz",
  "key2": "5VgdwvV2aC4FPtQH5t9Ue68NA62z4iRRxHQVyyTk38ckS9v2U7d4L4gwsCwZrr6F9sUXacjYps34mDHpSxLuFjk3",
  "key3": "4CUrK5jMRfzRqxhyJFs75WSMRc5keK1VGsSDgk7bNN9PtQ27PCdKdoebNaW3Fem9VkXWVYaUcnwJLgwFz3pKkzyv",
  "key4": "55xK1mPi3YF5Ybk6SoznsL9UKMEYThjRwSBjzoyXshd9gMFAHA2ekZDbRSCq98WCv7u3r5xVH7AEN7YXFjC4GcEu",
  "key5": "3XxRQRoJtx9MHH8t942MzDiopfKnttsiph6cEhZvzQQreh4Nootii4riMyGXrfELFBgitH3CQXrEcsae3VnxdLD2",
  "key6": "4gKn4eraad17FJtKfrB167wUv8CCrRZEJjoBgWyNMD2wTZARZZGpi2JJZDiSymGji7XoRV9rawDoBwPpZNKfauSZ",
  "key7": "4PYvR5zCqd5vgvZ1pFBzSWzqE2veytkeN9Podbeqymn2ysptT9BF5HcHZ8DC7j3wvurW1um8wxXcC5cT1fmS4L7G",
  "key8": "2z4JkU14f8tFnH9ceNtNYv1Jkt4ZaH6mT825ZcxuEFHNMt1L7mZ4zkr4GY59WMCz3NbwiK2E7TQjzTfwxAponkQV",
  "key9": "3GgRXhQWeqgX9TED3gu7fkur4caSioCWhkqf8VofH46kVX3unaP9JTQ8EHXsefBQYJyyZPCiWQ85uyzvMNRCedVv",
  "key10": "2tAN79ma94Zq5LmnrD8YpHXbURJjVDK1YDXJAwY2aP1W8YY3hSLuwpHfGPbaXwscJXMaP4PX3zHwi8VtMo9UmWTA",
  "key11": "2pMFKoa48i4RPV3Eq74yS7hAQBroWreQHiMmzScL6uX8U9xnGN4MyxymTMbuiYVFaafNyTqFGTW6dAwJhYddKqB",
  "key12": "2RqRaoaK25UACrjwRFxkfrd6F2vQTdVEcXSNPbCCXm6515sxRzsgv5tRgpEC34RaAoxLUD7xgK8yW9Jj63EJuwzF",
  "key13": "2rK1d1kWYxjFyU5i4APtfbr6uNBC97JfWZTEQcdA7Ywb4Tzdbk56qo276SjQDcFSR88myu6XrPP1eyoMrfrBm7qb",
  "key14": "5592cTTtfcQte3WMbeBfSGEV7rZCvHzLbhoUcpRH4Gq7CLUxFwZmR4uypR3vDvm5xEFUP1ZyQrnydnv6wuCrSTYQ",
  "key15": "2iSCCaMzoQJyBS7cEG8hbTwT2f3wwesfxbvARmUZDLkQLDVsGhXkHGM45GdPYMFResecoGkAFAWB1gBszVw9phtD",
  "key16": "R5vayeCgNtPoo5aREwSSsWjMPTaPvtrGzaUksezVckvwJWv7b1BAJqd855RcpXCjkERH9zmrF2M5Ljbcj1exap6",
  "key17": "2JFQ13Ag2a1yvJxEGx6P2tjQSfs3UujqmZgwDzBmEMtHm4pjvRmee5u2Rxk6fFqryY6hP4dnjxm8Vj4MDyibbqzn",
  "key18": "5NmuBpJzxRiNjZcxtWJiXVUpZpaUzYjsiC4L9Z6Cp9RneoeoCY8LeVYY3e3W975wRxDc8epwJa75NV8c5veTBqJC",
  "key19": "EiXVVKnd8wtbWzSiX89DYuQSjgcCfSWhn3eHFhZ6Ztt1KjaWcVfu2gEbgS7yaCRyMmCQnQo57VDuWbVRxScVLZ2",
  "key20": "2bSpfJbd7HnUQH1rgBQXEdkoLJqSFz59eznu1YJ6SMr7SFf1bzNme298TDjqWfyFrz8XuFNpr54y9RYxmiz79cDP",
  "key21": "4GXAdgCRUD4tzeWsMZ4BTQtSJw3H3LPAjRHWjgGuLSK2BKhgXkRwUhS6dsVzq6mxxhN7zt3rbaCHviKhuGeGM8vp",
  "key22": "9javTxct4ocijmwyetQETyA4EZzT7tsnjhm1GffxZzTyV5NBwfyfggAoHt8uBEwfnncbA4jZzJaS6uW8p7RAZBc",
  "key23": "4tBdp9jTy5MfDaGReZsT4uSF6U15re2pReDMnCHgSfT2cSBjKjcGbrybpoAxkPyizyqTUbTpwnV7VALy7NksvpJ3",
  "key24": "2e3N9jYEdABM2RQtTxjxYe2J1ZamzEF21qMW2RG17UoNrmgugGpeC8JijUcL6a3PsVB2kDMYJ6hLSDLqAviwbpUv",
  "key25": "4N9hXMdijBTPRzm9RmcRtKt5k9v4MFtVXGeGxLt62L1RvZLtU9Qb9axixJgwXHYUBjVmJehddBBCCGTFSx1CrXaH",
  "key26": "4kyR192qJqAp5yJ4hiDFc23eSD4hwzMVup68qvYD5uihUSRmUbXFYc9iJRfDrViKMwxj2pLd7CZ6rksvjp5ULWWm",
  "key27": "5hx8ZLXbgNW5SKYHgB9ezTW5BcacfyxabcWhvzPcGqHGmiUAZRqJTAvRPhC7S4i8c2qxoGE3SvVmE7o2cyaoN8rq",
  "key28": "3fjQbwaYuwpQECxsj8Dg5idCFMFvwwpMdw1boNBVj7fhMqCq5hWU5d9oejDB9E4QaQKCyff3fzWRYvnSSFRkxACy",
  "key29": "465m134FiCYsbzncWkwfe2LHBk8YysfTApJbt4ZX5Z9fd17FykQNGmmy4skiJ2QiayHyK2S35tDNzwkzG4ZPDqGw",
  "key30": "3LQdDv3uvQrL7BMB8GEaYhbLJxST1WnV3NmuAg8YbQv4LNqRU8SdjHSryfxV4FmriyUB2vJNEDzzpYVddSZWiuM1",
  "key31": "3h1QE9PaF2KGW8HmN2fjsNkdFc9SB2toLf3D3f4GhyGYZ22963WmK7CkNK2DbVJruYhWgrF8SNXgD8Pig9UtAyx4",
  "key32": "2BRtwjJ9ziK3PPdzpkDNvT7g9rxFVBUV5K5bh3GvTE8A2ZyjhmbcgMFf4JGXf8QPvuGaaNs4B1LURJft5cMLZMBJ",
  "key33": "5mRBnCmozsWqKByXfdkZyozVtp6gtR86uSRzymyuUYCjeZ3yvYid7mjCRubv4ekNHtcwWh9gYe2QT2KbR1EALm1s",
  "key34": "2uigvHnX3yosVpa81vcdwPdd1iWh1BQXvKdBgTSmGxkyJeN9WZTeYfrgRKQgJKgt6b66ez2zhXKq7FLuMeDApqWy",
  "key35": "65DM8CHaVbuUt65hHiHv4Hx3nsKpf9pMMhhkUo8rYqiSUaXr9JLkbd7Jv7uTAhBkUFKRpJ9j9yj1Zud8Qu1Gby2J",
  "key36": "4hKUBkxTi8W7QfYhW2sB6Fwscuo3YHm5pJKLFNJySVFHMskAiuHHxaeHfsQ4oKYojsCP7e2JFGYGMAidmvnxWpry",
  "key37": "HQRkLEXMyJvuvHi2pGK9QpchAdyj27PYSN7PoEHd3m5WeSwpc9HhwY2APi3XLppsnf5FKBsptTTeKyWe9ouHu22",
  "key38": "5r1sFZ7oTw7Z56bFfaJEpUZzvykAi17naAffJnvX6kMptUfV3qAU5KKsjcCDqLTswmCmYH219du7PjnCucGaiD4r",
  "key39": "4WtTYzUGCtLmnWx4t7MESWscx73uyYmmjYMywAyyZ18AjAn7zkZ9Ao2CKHz6NHuMAoa3XFF2SGMraTBLJi2xRAyu",
  "key40": "5RXYrFhsYkgimH1Auzk1hUeX9Hv64Uxz5TpjXv3CTBoTMxQSfivMuRPie1e5ZALHjgK9www7xn4Xf6yPjqn9dYEj",
  "key41": "2K7Ffp5cR9o2FPW6Sa3tCN3e7gAwohiAV7KWkeKna7Thi8H127ejceCtcff1MVRCs19wsHkDGG78DXPhPho7YWqF",
  "key42": "3n4xhHZtGgPAtTrCzafYuGWCadp6yicYQ5giBnDGZn2ceR3BFN8HQjpwWTjv1xay1didZLgAwFCZCtuAmXrwD3zs",
  "key43": "4eHUCKGAK4afsui3MGLjcRKRJvr2QoheAtpJWeU4LeouEfRqH9B8vF3616716wrAyQwVGCQCC93RL7BCR1eru7fx",
  "key44": "GofPKSY55wJMPrjXifu2UYwtathDBucvcLXgk5ZFgtrHVub4zPNV4e5z5m5YvavWnrT1bno69jW7Bi7sicuKBuB",
  "key45": "5PUYTnbc3azMWenfqkpYpoScSewKqBjUjogaLQKX5rVBpuNi49GN5YCyE6RhxCDzBhKiFqu3M1gw8X2c9Fmi8N7V",
  "key46": "411HKnv1mmDRSVCAY6LshLToK5c8bLeDM7EiKJSLvtj8aasc3sbkpvw9wWrBS8sjQycH9G4uS5uh89FG3CBLyo1y",
  "key47": "5SARQMVwn446tshPWK8KGn4m6ZfxiankiJaBFzxs5sHRkAJP5Zz64retdqUxcXoRs94m9FpQQ3JqsSzDBUGWWLXZ"
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
