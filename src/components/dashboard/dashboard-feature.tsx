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
    "5HR7tCei9uhysZBnZU8n4djMLa9kv8Vg98P1K8Pvtu8EVD438aPuaUuX61cBgwZmoBnG9oYz29QT6sBo7ZmFyGDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vz33Qqq2h8SmFuvKt9S7jXCGTBrtJdqb2jBYjsHCogr9T3Z2KGoVfM8sxxfS83BriotkE5z6YJemuQCgtXJ6xMT",
  "key1": "3m9QiNbqBgzarjh2uZvpmDBeVyuQkRPdfnSXC8w8s7JXMJccw1SsiUqzjN63ibfL8GqtUYEJvMLUewS3BMnVT8Kt",
  "key2": "3CxvYsuaoP5yKdMjRRowKvesDhRcqytaBrzSgtS8pgin8zzguzkBqxrNcS5Mi4ADvD837gR6k9C1Y8UAboXYF48R",
  "key3": "HYfwg4n7PdvtRQMB1itau1KMR4Ncb6kAz8Gh4hAyuFF4EXjnbMnDDTCFmAMpV67aJbCq5eWf36CVuATb6rSQa7h",
  "key4": "3AzwsnSh1duzFd5f1NtYESNS8M1S1Wg5n9weSsG4DpzXhqz6oTKauwGE3spzyAjQPXQLdnwTFFPHrNxLi6pLgSJ4",
  "key5": "5pPnHvE3dKbp5ooBPVYqs69a2SGec3oRLUmZ7GYBu9CW2L1uCLLA7fgZazytpHgGADrZqkRV3NyfdhveHRoxXSRo",
  "key6": "3UgoKp6aQgiTFAPCLaAnmdtvRKAzSoFr1S4WpozArWpti6rcbSsD4oipaRHyhMq1PsfKbueiSfAYmseePNX6ACcZ",
  "key7": "5E4GPBVJoBsUBD1M4VUFesVbTsFEB8fUfTtWcdYQ6XZXwjxKuWkTZgiXJpb1p24UKgukcqzDzJxfZ2p2xiiimYWp",
  "key8": "3eRdj8hfHKbdHwScUyQ37koVMykA6xdbYjV5MLt7yYdtjCoTz7CZCvMnnBzVGuRtWbvGiyudkjfsREvTr3FaFFcY",
  "key9": "22UgGxdxnyMxUX7qtXN57Dr5JZazX9MDoTbTtQRCaTBvVgRMu3rfvcPH34v2grYcYcv9dFsyDKncAcvYFgnKs8mw",
  "key10": "2DT326auY1k9fQdGFyz9EyEwsiNjWQMu6iojtyRz2J9PmuyHSv1N6uw5oBo74AKY324YmJTGcqo9jpnEv1XimNmb",
  "key11": "gqTgrpNYwZfZdaG5uP4YR8nd2yq3NVFiHLk5ptD3guHrxDaz383EjLwZhxnYe4EK2Rvwp82VWzNStEk9eCX2pTy",
  "key12": "43pJQH65rw9nB9yRJL6kcPBpYLQZXNaiQBCsjRuf34tAENtBE2fyy7aPy2SnUWWX3GqY5ksMfUd1NnzWj3pYy6gg",
  "key13": "64tu7tkso28NkfdzpgCHSkM6okRfwDZUfcPznztJiUyyKU3N6Cc5oQjcQXGvBGDsi9kWNbm1cEDFk7QwGmFkbs3x",
  "key14": "57dqb7as5xwmdaR9FEXqiUx8uiLJuY4jF5MiWh8CUwjWbctsXkKoZiUZx5dZgPVFieeMfnHxwQtVhGZQ1syKPoZN",
  "key15": "3kHjtQaPacYZFN34QvuKdXyWz239KWmrYqBC7u6VUL8EsEGfgdQu6miBHMSNEku5dFoFh5Ndkb5wTProdU2XUQne",
  "key16": "42XS3edDXTwMrCABSZBZF4G6NqBALjgAC9SprCpR4i3cbs3KZinLwXGY8ZiT8XxacDdXgqrdzk9MR1bMyp9vAYa8",
  "key17": "3ro8G1FGKKSoRnqLCixp9BNG7bfv5Kko5Lt5MKYrNcZFaGMH8AGaLDXpaYHVpVLzcAagiudijYZxKF1qLDwbsYXw",
  "key18": "5F6bWbKzC81wpypziuoGWqedugbk6DbcAkChE1negNJ7b8mGPt5sHceEjn9LoArUYZ75yTrLcaz6F6vzcgnuqShC",
  "key19": "3cFVMzaVVb5p8jWaLomFhqcEKi7bPifN1QHefJebbv7X2QPCmFJ8PcBRU8W1igovnGLJZSptEdEqcQspUjuz9KD5",
  "key20": "5Lddupc6rHHCk5jQD8RFekbNz3x3QK7eCtfqxjaB5mzMrgt16bd9QtxfLNavAqEjS4JH3YVKJk4nCckn8pbqAMpk",
  "key21": "2Wr6PtezY8sSJiEsixeLyp1VYRx6gUYuA8KNgNgjU6uyxiGkG4dkzYwuENKxSQDsdhyshQo1f7VnAEfRMVXXwbjY",
  "key22": "3aLV8mQGCMwt7CE7E1idF5yRLiAALJ7C5BVVSuY7kQJteqUFw7eTmzb4exFkoxP8HSudo3JGSozSF8MALLWnj5mk",
  "key23": "5d4qtA158zxdBEYY8wzKAc3dBM6UtRe4G39tb9MvsSiPV4oTeQy6PTWJNsDwdySXTp7T6fJeiPqM9VBijYqyHdGh",
  "key24": "339p4LBpWty4b5vPYCsi8xANikSv7cShH3e9Q4x7LkZ9rfLVyjz3B9Qen6588Ezo47KMTRkfSkhFhbqkdqSnNJEz",
  "key25": "TKw8imWXVYiDMxrgqXMjFh6GtJMsc9toFFEAnDUaYMCbUUPfR3yrVTJjCw6XrtsgnMhNpNrzZ6AKot9uhtyy7Pz",
  "key26": "4PkFayP4QeoSYoeMeRm3bv4CyQ9xF5SyNmyPt9S5ty9ac4XJQRhz8rdJiThVbBH8azRfFHEJmNJ9pChcZonKDBxv",
  "key27": "59guG6jWPzpdjQBNWkGkCSKoAeUqXU2BYv6Lrq9niHLYHnaaM5fAzjNW7oDM6L2QQEr74pP6A93aAoYv8aA6b1HN",
  "key28": "3W9Xrp4eudZFGd3ZurdARg2nVsWGmsqnsfojVPabzpua3joQuFjRsHvk3NKAVMnVbQV3nzLNEpM8xMTUTAfcWMSD",
  "key29": "4roe5Ev8eErovu2D3NNn1ocyEHn2bBTYaSVcaVZn33KvPaTU71Ry7JhfPb44myJf4SZzN5cLwRnrMdVHcmJMVpkX",
  "key30": "48hsG5DYD1JzTszuWczGVkLRN7rXuHt2AKasup1Q7Vq41JneAQXFdsBACreBk8iyX5WWvzXhDhPmQcKq634Rqjcw",
  "key31": "5QTpd59f6f15iLmBjqWUPsCtXD8PRVLGjBwbSTfi5kiAKR6CgwvuWuoQRbxsjgUxVTqS6Ktu7Udc1SFBTKWJ9zoN",
  "key32": "FSec166ATNthUMVihi2VaXT8W9kEzUKePLYDsvU3ZUjfHAtRKxxdjVJJ3iwpKt8hcSiwDATwa4Ah5iNLXL8FysR",
  "key33": "Y7r4s4SKgu856jw8EvWTyr31GigRCiJrC4t1rwF2hAbsBuUqeMFxVxtPFkMjbzRvPzmFrtC2FFtNkncFjGLfpy6",
  "key34": "FrYcNSyUusLenbMMhVwHqJxrtUAkLZXygBT7R8teiUoBbKY9tVbd3So8WAYVnauYDLYm9NgKu4YkHZAnXfkahtT",
  "key35": "6qLYvgRJipFaR6iy2evnXgUxNXv3Sm2a1Hj2NqgKCxVDp9dXmJmdFjYfGon4fHx3eTUBKFWLdoDbtDFz9QZCF3c",
  "key36": "KdWqLCn3cgHNtR4FAsC412eDqHxcvxgzjPgDvCJq2ofiDPDpA7XXVrUQr19F3DXV5jB7MzEmVS84sE7RArcF88t",
  "key37": "3p7G57pXhY31tiEArAvRg2rRxjpwMzPmzTYhPs75XXoUTQSMMKN6gzHrmsoduxfPMUJX3mW1zv9sgJtV6ZFnxwvR",
  "key38": "43ydha7xK822bwE3Rnc3bi78S4ikudyvvnNMRJAH64aaory9qLtXvrwRFo4Cj8gBT6ynzWzLnChvjDbLaVhhozuo",
  "key39": "4sAhAsEkU6jESa5SZFn7m5v95H7Afv2PBy3sPn2w6GqK3gNgP3EDrHSs6KQEG2gfTarJb3QSDZ4cfZuquA5HZaTG",
  "key40": "4rnV2ky7xQMkr2iBc2Cxy3Nzfvs2nBvRbvvHQvFrfthCnabz2evs7mMFK2cLTaN2SSjEDrxL4ngJeQ4L3gtdkfW1",
  "key41": "2Rc69CGWL7NSrrz6KbvP5ftMt6aHiXouqPakgi5Ymbbt9NEnX7zzxV56LSgegNRHS58vQ13MGThzjjXRLQZDp45",
  "key42": "JvsrRnuqF6L3wfmw3v78e9AmSYVGEriRShwMGmXa1Fp86GuTTPJHV5Njb2g8wp4Tfmq2bkVmGoJzYWvf6JtAkc9",
  "key43": "4zsXCjEscXDHtsXN7kTq8GAGcWZgdgGKwVzXQm1EodmDRe2bmu3JgZX8m7qQ7ykmP8i8wowBhGQwX2JuRaoGHYVA",
  "key44": "itZWm6NdLTBFKcfZgCF3tEZMeCmhiAuipeuy6nNJCr9VHgi9gGLRQ8BoxNs2biNWQm9LauV9riQNUaiZCaQ47aU",
  "key45": "4d9CspmfoamrbB5CivQwHbxGvUWVWpR6DCSPbzXudfyXHonHAM3xVEd1v7KhEo5nNhofccppRqp7C7qh2apAyFwD",
  "key46": "3cdobEGfkeED3BrrZWPuqGwisWMuvDfUYPmWxWV9o6zxW1EhkZzKeRZVDEV4ijAucZ2JnhqdJWn5zDTwr6j5ztqw",
  "key47": "3xLfQovbUF8TTF1KHHfWWZ4mcgLhmUeXFsoZVWTDmpNHjpWBvDAPQ39SobKuwNnFBUtSEZfRQkTHj39T1KThLPRq",
  "key48": "5gxX3voYDw7sUuzFGMFqAbiMVA1ch1B7Y9cY1pNqFUCPizxeXk7EJUFKtW7G6TagAR69pr6iHEv79Nyjzjc13ZLs",
  "key49": "5AynXFHBZNMj3aGWwS4Bh9r2zw1XqsSsSgQ4c7mutYG3PgLg5CJHdMGS3cW4yehVRXk8kPeSJPftYzzBGCLqPWtX"
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
