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
    "RUEuUCJcQ6ntUS8qC3W7BWwRvrisE6h1YMgT39L8Cz9ecxpsVDdQVDMwk8oVuo4Hwopjm2v8PZnCDy24YmRgaUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cc7yY4u47tLeDRWKG6QKzHSLhXv13qeMvL5m57qgaRmNUzSAMd8ucnWMqPwMGQkQidWTbXWp6Qv6UuzFFNWqukz",
  "key1": "ak9sZqJ5mzTCUgNGjrqMQmjzvhERpXDQV5WCavH5Aw6nVgV3mzma6PatQSkfcEv1PARRzqfL85tZ7wCmhzndsDN",
  "key2": "3fZkM4eWKMxxXEjiBMrTJRv6TkUcytTENjmU5SNZfyYKKV5bbdB2FrNdQ4wjiu8VQNkZSnSSZyHPLBp5rBugMTiu",
  "key3": "3vRPyMjNLKjqwndmXax7yAuhCra3WhLSWP1damJdowpwihTP4RW3ht2wADRXzSAYUK7GzEDZ2xy7wRvi6QAjXWAP",
  "key4": "4whh625zhNng1FRYkvwbLUq1Kgh2cdzYjNaJgDEy6rBHCWM2RrWH55oyiwTZ5MRu3vKKtV24A8oPC2xxFVdqbwyv",
  "key5": "36d6kLuLqrcvCV51rYNibLH6CFqHHVLctaPy6GSWNsv4nNo1A6yqPP7dZsWwaaGa5saAM7mNMUxNYdj9zNUkfSes",
  "key6": "47cxRusunefYuZt8EEZBne7EKjYdgC8rLqSF2cS2jffSCbxfj9EvZH4rqvGMEW7REV46yw3ggiTiEi29Fh9UPRm6",
  "key7": "4Nzp2hZC4FZYPWdt4tf41fNaBE4UdDQ2rncHJ4Zr2BP94Tk2mEvijrHd9tRvCEMi54f4VzjJyESTJkqqeMn2zRCZ",
  "key8": "2P8bj9sty6CcdNxMh39L8ytWjJVLuWpKpRBuMLv3GwXC4ksa5J2rGaiPNtTavmNzPGFXcvVP2ojsYYaHUV2AmnNg",
  "key9": "zFGKyVCDr2YyfRCvREaum7mhGHAkvRzH9yhkWiZcnbYHKWCFnTWwgGp3AvrQBEzJo69hYNfH1wmr74GddmP572T",
  "key10": "3KpzvEHMqibLMYbgw2uBjqRfkV2dxWD85TmZq1RyUzhPymyYmhWTBq7rqMurp2EPdUTHDSVcu6B684uQ7Nr7AQYR",
  "key11": "21meBKksMbx1MWMaQ57ZpQdHi4bXcR3MR8MGwpbjQTr2rNfPiUB9M7mVMrWHdNE96hmGkUyqRoi5iKoUHN8EV7Ww",
  "key12": "2ws4YtEGLDYEmi2AeYxALKgjHaLifTdUq5bUkKNCff1JaFD9ZMfTaK2qUEXCsJAr9t3kqbenM45CGkWTdCewTFn",
  "key13": "4vgM6nQHPZRdYLNvwxmNRyYpp9yvWZazFvcBQ85Sxb8pA7sKy221trPA9hErUBnC75KEXTa4aRb6KywThgeDaco8",
  "key14": "2StTCSk6ZUwsmqg4QxX2kc4QdZX1iEJXYFsnLg8L2stAZtM3kZnJpTugtyzt2pwKj7itwm8QsUdANTJ9peWhomzZ",
  "key15": "Eru43jBbXgMmUpcPcJky9FXvk2TUquHGSes1od7QnPp89ZJ1qgggXA6KuN7X9u8Evpbe3NsLwdC7R7uf1V46moo",
  "key16": "4SuMt8FaKpfq2azscXTzLrS3dqvACi9XgvEyfPY6CaHRZmcrbjE2RfYaidhprxy9uCtnjYwHWBKTFzcVVBmsySk2",
  "key17": "5XZ4z772rLdwCyNgqr7yCWgrRC7qAHe6GRxPTCD9sqqo1fQBYcBhFZKfo8vM8dhzRW1BroGfnbyh7UJuJrKKxiP7",
  "key18": "smHzWjXk4cEcgsNqBsB6UvD2ZN3HKKeHQPaYmtuZENjzhthZqg1bhL8GWxmdjZNEvCCQBD4NdsBSNMvyqjo15nP",
  "key19": "3eZNFQdxaC5mHVEYwVTt1vf21LJhHFDhYsYrPpTGSyZWtfN9af37JxfjQWqmRsZtRvC8rS8B4bEU3zreipaXE8xL",
  "key20": "2H2cxNpptT5cQ1oG2iCcdvxZ4UpGY1qdtyhHKnxHMdNkKViSwiXPR29Tbv7Jc8N7Za1aL4Yb3LkquoRf91ys7JuM",
  "key21": "XygFBaV12Gys2tuNCZ2kYNh4CrqXaDaYFYy9CHja9NHu3GMP9bUvnN7Lmkf3oxzkWjhJiZfCBwEkr9cSMStbrir",
  "key22": "3L4P7T1aX8teYJnGLub58TVpMJdsrqHJFjCx5ZkuUe7XxPcuhdkZwTwwBNZfQ23BfkUkqSiZPco4ystPAprz5H16",
  "key23": "3mXTP4Pn2FviNLAwrVLcmQxDzSU1ZYUeQUws7bWshPDsPiLsir3T93suMNcCnsKcb6r2qZurp6jrWc2KjHeQ7Dxo",
  "key24": "2xhPkNRU4wtEKV9wMgYvzFytwtBtQKsHp5nLje6Ny836DG3KVA6dXsPip44DBbPSrH1M6cYNc9653N1V2sccsNvM",
  "key25": "xftyvsb7yQHXPVkA3rAvPeSutbY3YWAjBsk5k8Rg6QadpRXd9Eboig4ryGLkbFoDZeYuLTh7GLizECzvh5pnZjz",
  "key26": "4qWQVXSpDWuG5GqM5cx38iNFPTbEAFgEB7uii4rEovHaZfyL6YsQFo28ruMxc4kjGuwyxmMo1kqGH9u5hMNZGFfu",
  "key27": "36LrQ39qmdK86BoMnPBhqjjT95D7WxqDZufHQoM6swiU2YWE3pEZgbPRgttgd516eGMzb5dYmXcXNvnEyUBSmjWC",
  "key28": "4e1okMVSESe8YUWvymw8ASaeVq82YUQpbi6T3KxqdNW8z4pFnHveQrydNRaXiaXxKBvq3ipCMTKzLFKDNhwHP2R6",
  "key29": "51aTha2zY6CdaDcitkvSwzxgYFALHVTJVaodMK6r4aUxGV3yKGpjfcVHM8QzchA67DS1uhCrbWSVViB8EAD2caUV",
  "key30": "6sshxNnghRQYz7PYGF17ssnLYXvmWvMFsgqkKLnF4L2cx93C7xuuqqFaDmL6C7EXLCWrvTv3y5okYvCoCchUDDC",
  "key31": "2rs9T5ziHRFxaPmPBmFwXdTSUwz3RRJ3Jvr5WonWwmmfbK6LwfyXkJfvXYJgWH9EsfmrkakAumBdccXWvBiTik4B",
  "key32": "3otnnCzHbyk7RD5mM3rkngVAdFvj33g4zMhV12Ctsgzmki2u2gpL8VBEF1Dg3sRppgJMVbqQaFTcxayz6SFwH6V4",
  "key33": "5rQQTA2eqiX9pZtzWZKftShwJ8BRiPNoLEREGov4WoH4wm2v1cq5HkCKSpQJuubEcnDAF5WHb7LfqsmaFd17VKK7",
  "key34": "3XiaUGawnSv8JahLxdUqL2pVNEeL9P84AwXFbT8kQ4U7xHvqBsn5eqGF6nBqc1oDD1nC8uK2AsXhapdKs5mCD3Pc",
  "key35": "jYjfi6ZYR9zhCNeVNzSpWsebxAgS86par5yKhcPUsMwMwwZZ1FYyL8LTVbW4J4zhHsaZHNniDVxxpbsDBRNVeea",
  "key36": "2KUXPhVJmmuQdC2xU2L1JMTGeaP76nRB8hW6hqJ7PhQN57LaZN2iHqDnQomK29rUgxDbfdBjQXzbf1qPScNP1Sbn",
  "key37": "3dV4qsuvszExuwKzwmL9rAFrpycQMsEWAnUskkKzviT9ivzeGctBhpA8HPNKqcCZoKKmjmKAKx7eKz25vpDos3xC",
  "key38": "3aKQy266gjMBdA1CQxxCg6i6gwo2FsE4sTiohXjNTUPc6fyM5qDtnHZiGbXAZ5fFU16Vo651ArxkrpWL2D4jU45v",
  "key39": "2fKNuwvas3TsyTJQZch5wp6BfvwDQsZiZWjEGvAHr3aZLa3uyqpWtJ5knWo8pCep3xiVvJuBTB5dWH19Xd1muZ3b",
  "key40": "32oePraFsdX6ogV2QcxXc6fVwT1dJwjwtxPvGDxgwLNgrr6cuyCw6qiaTtdkKHM27VjwqkrUREiH9svjajzJPtup",
  "key41": "4DyiWAoZmyaDv7Q9dpGyzavTmE1uJNXrSGqqBAYQYdBKHHJtwAJoPPHzAgjMquZJ9HRgFhk1F8psjzrjxJF1XwQb",
  "key42": "4MwH3Y62qHTdPWfH1acCpDECqAx2UwnHfaVp6PWiz3qJ6ryiFS5qMtbJwuFuJEScgktFUoZfQF8uBqCdN7B8S9Dm",
  "key43": "4fVXM4WNWUUr5ZWgvMmWWff8SNUehomNVSQZnDDVVAHSsogHKnPCgXH2sCiJxqZ4MD32v9CedWu4hqduwEahPdrC",
  "key44": "3MArBmv9biZLkGtvT9o3FxHzxjUm6iZKtu1RDzpJ3ziiFABqp8z94AC2uaJa43nMTD4Gw7LeWYvP7HPtTgyQLzcw"
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
