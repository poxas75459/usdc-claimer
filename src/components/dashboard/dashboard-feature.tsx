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
    "2F4YKUisY8gxm4ih97cjb4BKvmmx88jvS4B31xYAa5VbFjqvpyjYwaCEKPUgHhfHjh768Zr6DEKPvhzRi6NqrP4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kk7CUqo672z5goGsUWBdQMfb41pPY7zd6HdHXLZmFbhKb864k3iATsWJPfVeVKfvVr9JjDtbfsK1av1KKgYDSis",
  "key1": "7YF6Po7xQVQ9SnSRyk7BLdwpEeuJ9pSjGkWRocnhnoRGrwvPWMqRwMjUiX1oDDyQChFo9tsZzyn35XvWPyrKTew",
  "key2": "4S2SXvUN9B8NJYNii1cA1vFdTkg4RXToanNakRiZ4m2dVzfUjxFBPjYAu4JzSeXtKFgmJAZhqDKduUdjMA8S1NVT",
  "key3": "377Aejv7mC7CsDfkxxWTwiawpKYUqFapEzRQ8R7NzfG6zKdg4novqUd3uHEF3kooRTsF9rEjP6jTtGJonK1HeB46",
  "key4": "pputtCSFPTxT8MyGwWf91wwUzAWSoRjQd84ShfizNdCgxLShYe1WP9WNCdZ4kxMomLAtQRNfxLG1sR3xb848CqF",
  "key5": "eyAaU8xLk11J75nqvvYeQ5rv3T5xGhBRMt4DUUwMjN8qtBVciLcMzqWJ6smHjpr6DSbqgmkiK2NJNaEqg5qr9jy",
  "key6": "3HVhkFFun8QAPcsNuMdU2HVXh8z6GmnQ2V3BnxgscFn68HoAstj7wFj5h7TX7tD3DVAWCiTg9iJq5bHCnhr9YQxf",
  "key7": "54o2FPmksoNNyo9QbBwsEGwRanqNYcFbmu1MbF1hUCuHPkCszwJMzUqAG95sRgDsaUoWMEaxSA8d7tYMWcF7XQq2",
  "key8": "duP6r6i2m4yTwkd9S7UyNLBdNQZ9PXwEtDj4EE1jUJr4aPkN7yB8NhTDmsK2a5Ca6SGcEUvjKTYvzns4TpMs8X7",
  "key9": "4jikGd1GEXakS7sihjqTtDAsFN7akNPkX72T7LEBY83owTHr9pqXdShSh3PFstNYhsZrkkEvYsAPyctEfdoNie2o",
  "key10": "4wdoyRCy1EmZfv9msSSEQ8ErLujz4Gojwd19Kr99oTPXgLLdmCrmSnDNXuiExzhj7y1A7RFQcn6oU8F1wxqKvnof",
  "key11": "FUSFnhYtkcxqoj7eiaYph8wLMhtECwn2fmouX8QZhaPc8hzNd4KLfKBpJLqA9pe6BjZuqpkuCmtofK8g9WvWMqu",
  "key12": "5f3yoc7TexawseL8GvdiyeFPznsmkhZYmm4CVVqBguYjdFG4BuhWKWUUxVNqD8ZEEegeqy9WRT74Mx6zbebi2PQz",
  "key13": "vTGjzG1JbNMok6TjQ7tCpQoBsrwz1LznWLiNfUynmZKFWv8NaSqgeuwX7XMXKWhVr9hxJ7Bi8dWECvSdmDPz7yM",
  "key14": "66n8Eh49uTAKjeNHf4Di6P5g7TAE4KHbbq3SUw5jF5Cg5uKSbHRm4oJxGK6cHN2PS2Wex7Jm9VJgv89fT7CfpKqU",
  "key15": "2NFUT3CGoFknZpWri5QGCC1HTUTVuVWNdkoFnweUTBDD1DFJkNUVbE8scjDcBohcFWzF6oQv1khRzCqKDr8fsg6F",
  "key16": "2AtH2XZNYWWuXNtBDEfasksY3TaMBnsBy9ZPxH2NFjzhiKT146BQe1Ht6zrf2HNtp1arLMpqMjbJNJKMbqjvVdnc",
  "key17": "4SrxAryd14fKQZgQ1CMP7uAJnnBUcDjGdsHhG8SE2BhTuMzxFCi6mUJku7QU6frcugJXbXSP5LG1jxWqqgxPEV6N",
  "key18": "4H3gVNTJNyQDoCpzEw6FnsrzqWDtwZPBepaP1RgfzNfWFpRxJoABZMKRQQtYi9xhgwqd3AHGf1SuBRBBndtdVyi5",
  "key19": "ux8wiVJr9CiAKWgiZ4FsJXebMxikgmn4g8T9k3Gsq32iGuCUFcP47q7Z1rSdaTifVmhZPxkV6rVD62NwPXbUoDF",
  "key20": "4xq7SYDZZ81kuMWKFBttT4ab7WbriJYum57BQD3pDT3W6Maov1MXoBPteRdrCW3Ahr2h99QyHBFYqBwdQNjcU4yr",
  "key21": "yxHe63gA3d5t1UXp9CJ9kw6GYW2RMh37N2R1xRYkcHyuD8zgQLzHDkfUkH1Pjx9thLTLewFP4h4f5mXjbv84XNp",
  "key22": "5Smi1zNToGhYhx64QMm2YwK2GHXFJf9DfcKJAoCLkyQjtukDEaZxKzsmkZoLvdo653RqWoKWFo2zbFNLJLBAzXb9",
  "key23": "2fsYj7KmMxBd27eau4fUVJ7hP5zz4YeTB9hCnT8JbzvnxUZq9Fpr3nfS6qi4XQcPGAPJZhsN7rKdWtxVeRsXagtL",
  "key24": "5WYUzB2Sx7XpcaveXnMjCNszQMsXzrgFLHLjz4wYSZ39Qp9uUqHGhjgQGV7PkRwPkfKFGr3c3Q45ipsA6hCQGudH",
  "key25": "26mXtoWAdMoFA9f9acnvXDyJJJScKdGhqftCHa6Xa5NAmg6iEmJR8BKeecbNg1KAHvv6R1o4Lqi8Li3LDaTd7HRP",
  "key26": "QYATQrELM37KYd2hdVtV7VuJfPdsvJMhqvdAJXjchtu54isZ6jL9u9skYAFy34zvH6yDhLi7mnrexzZ1JEmuv2c",
  "key27": "5v3Ck6iWmC2GasR6cHyj3DBvYQ656vX6twGXxAU6YGLJydkQ96D7stepRpoWTd3U4YkBG3JRZCEzeBPFSKp9beRM",
  "key28": "4HFRmX2Aoxe72kNVv9n968VTsbLayvrhAT2KDkAjfozfdbPwPoJJLB8SqfqMp2SC6oYE2Z3jpj7yhZZmFey5yTvJ",
  "key29": "5tqnMsJtEVfaarDof8A9zJ2fhqv1k8suXNrbW7RcjSzzyTfHbPFmqB1WuRJp62yYjceBKHefqan2RS5UGyaHv4ip",
  "key30": "2FuEo2t499BLUw2TTQmX58MEfR1SiYUXWhvxThtgxSx2jciTfBzW7kRyx3H9L55ybYhjSP4XSykdCcnyYFuqN7GV",
  "key31": "5kU8tXhQ7VHXwsTMSEEwkVNsbn29cnYq4JZHwsH5fpWTY2wXrz2NUoozx8g76bofp4DwZ7FMrkLGM72GDLYmjkX9",
  "key32": "C9J6PaQrbAYd9GnVvdhQ8ibm1wnQijG7F8BrmJCcF7HByBfeYUmAVP27n9jnzCT3X2z2yG8Qr6dcYY9LVjEzyBQ",
  "key33": "5d3aVqokUvDG8GmsBVDYYWzauAdjF9v1vryXCvHt9M7uFCNpanbBE9NW8gNZmSUJPLXdKHfnfbVJz9iPbSfe6yLv",
  "key34": "8aXwSrBHwRdb5sx8zCLvio2ndUGWVfW5MUvZcRXZHP3fqatefDFV1SuyPng8ZAsAogEjp6iP6YzXqyi7FKHzWmg",
  "key35": "25LMXUMBd5q2dvaHokmtLVJZZM2L4KY3W34Lg5QKn5Y4C9xPd36WJ8oS5KaqkFMJj68WzwP12WUeeGdAEY45M4KZ",
  "key36": "5DucueHQjWn6atPgVeF13HTnK3zD5VgWZ9aJvjYsi1NefBSBvWFNjbWEr3J45mfVLZDATyqUbTonnZ3oM9gvzCfv"
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
