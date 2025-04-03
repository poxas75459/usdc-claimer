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
    "5b4VQ9ho6W8exirYJ2EEwNRhmFakWkFzK7AxBn7BS1njSUugiHZxcPh3DkLxr7K5JxoZxGGKZATfqQTqJEhHdi1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K4ynR9Sdeb1jmjJRAY6LbciCYv18H5z1DrSH7B3vi7fVWL9LaQZhkeB8V7ovETPRsTEGuBdNKihge6tsf4AVXkL",
  "key1": "xvB8yy6xT1hnUMJEhGMABWhyRdkLf8Wn6FcF5gjh6v12GVy7ijHM8ED2rvpA3BR7pPCPakknTgZdmJ5y8JUjyTo",
  "key2": "2UdErVmKE5Xhzo1mLadWhqdDu7rkC4nj7xLbwnkMSwq9dEEues3TkM3zw4KU6VfiVeDyivQyWPECzfZFUryGFH9B",
  "key3": "59fSD4XgjjNG7Hu4KnaRc5SPnghce6rWwY959pD7gkp8gKyVAX8MuTmknSH5bXfinFMMsnBNdasUVVfq6omojs5H",
  "key4": "5TTyeDErELNf3jebuHNkJDaM8fSqD6h8sS6ErLsJwLkNRHVkcN1938MJwuyHBEmAA7aK45Q6wzJDrtQhpNmSrqym",
  "key5": "3AGmvUS9df6oRht8EhoGA1CPkJBZjWQbTbmdskzPYB4QsWPvRgzCQUTGViwP3bS68aoHbA4YZTdyTNX7Aao8bxA5",
  "key6": "5AS9ampmBCZDYzbFD36oLp13JGAGHk1VnzFh1ACggJ3XNRCJV3ukfBCh24WCRR7f72aGGbSE35w2FicYfVssLdLr",
  "key7": "TyRBUuya3QNfzssvvC8FjyZVpcFHoy63cMcb67Cduo24i9fhJTEznspKEURrpTUWBgYKhxo58SLHGPgFWjBy7qd",
  "key8": "3mD3xsZEQUeuVSoj5uvxa2p57inDa8xYiHeZtRVvYwdeMsMSmUhEx3nevLEA3wq5nRr5dp1CYS372YjJddWZaXj9",
  "key9": "3VTBX8JBJawjiGSLRNF9QMswRha7VLMVd8FndJ6XW5pzq5gJFdDQw3z11uqFTdwfWCFUxjtR4aH2L6xXiYTPeoPi",
  "key10": "3ov91PyQNSQeGC2ddD8JLdhh5Z7azBDMjkz6p4T8yajPykxVyx4wdc6pu6oYhRWbE5ar3Apwbz7r8esC4bhQxxPs",
  "key11": "wb6B41ayHa2ScPGrwuk58pTeUjwwJA1fsCzkYLHisjee4bKBg4QT954CQWoTY8XVcuBeG3Gbf6AYktBYPoe8hJ3",
  "key12": "3jSMbAfBbrgzynzwTz8ntQDKQSGeF6FvbTq4GLjJgcFSiCGKz9GobaVity68nujJJCC6vma873fq5jACmraUJdtg",
  "key13": "2P2gtofGMTqcuVUqTrqNK5VeghWYE2L14MeN61TTqa2oV8DNY5AHR1iNWsSS2EECJRMDnVNr1ETpf44k4okPwGox",
  "key14": "5DEU4dnD6wXjaNp4xaYhPAeoFVT8L7xQQSQ2KEgXPSeUNUyBHD2Kbs3ej3QFgKg5PyhVmXYYtnUwWBAvFeSdKGCY",
  "key15": "4koQxdyEjRKNrsPGAptb4jnWPrn7UQUohApmfokT52rsx5rqxiAe3mcTMBr3QVcyVi2pCjHbN3RqVEmULJ8RcYTY",
  "key16": "5tBb33xht2qp7iU2br6Qk6UoEc5MgGdFcb31JKUMJzUmWsHuvVbR6dZJRVbvJgNcoym9TWQBnYWpcgqSzQxa7ssn",
  "key17": "3JxuqTf7YCcKLHnK7t9B28tWMvaQv879JVT1yftYXDyrZ7Vvrua31QV4cUxmvXx3z3sTrbALCavGb98H7rQUFtwm",
  "key18": "47dViKqa8SiTPfdhwGRLw1919URGx3hBKKzZpBtSLNc7tW1HRDse3qjd46v2DVtbbifPyea5pM1nYeLXT9Uzg62Q",
  "key19": "3vbeVbdSCVSD7aBVakMWz2didXGRsQMeyxmbBiiFNgZ21CLbp4WHrPPdQzYKGC34R98CYfK4zytpES3Jzy9jr1cR",
  "key20": "TYWCiuuwNrLbYD1m4EYvUdoxuM2egCJyPQ3sVXMFMxJLJSQUPMH57X1y2dJjLqRykk1D6zheip5sDYpJ74xeJHT",
  "key21": "2qsS6vFjwgCL6Tsotonxa9Fa2h98kgDs2aKfbe8beTWRuwaHdttiwLy3Sis5kJ3ioJMcRXKsvszJ1sAw4qgDHdLC",
  "key22": "3ky7eSttkzcxXRbEJaY75z2UfX6iN5uCPP1s5iEBUY7yMNHxknG94zoiFrcjUdtHfDomqZXsFB4WGEpL243uihuo",
  "key23": "3EmZog3E2vbZ2wQ7GkMN1Cx94NvAJkMZbQTpSRY6r21eeyJff3xG5FRhDAT2TDgYWx9GETtrDekQyz2r7bvv98iz",
  "key24": "57dUz6SCpJ3p7EYw48XbxodWzDBk21n8AA8YuMiqvqKsqYWwuaDUg9hf2jHgAYxbx4xcxDrb4z2FKhHuqmtZofQV",
  "key25": "pG3AXhpY9XYMh58UXPbMbA3mpGerEYqgUBeogcVed5AL3giHuXea8uj4mutYKaQRVU8f4km6Mw8v44yPc67YTqu",
  "key26": "2hLCoFYFkNUjdDhCKfLhfqns5M9aQr7bGSLvMKHPGBhfz4yZR3F1rRvfiWTxtXn1of52be2CiMaa9uSFaBXK9VNP",
  "key27": "4hQd59ZxZF3w1c1qL1YXKXcUuQFYLwXFnq6xb5N3GcJ7uAKtmgiEgHyiJh2JW8nRXa9sJ5w2qdZrM65poPCCFHGi",
  "key28": "5yv2WUxiVfvFwEdqW5gCBSQ7gqXNYG6ZaxQLULKGDVbUmx5rv1nBHpeKoiCpeC6B9dLhSZekHwSGoyvzYAnfzqn4",
  "key29": "BXFvfZgmdJXgL8sJC6UodqAbkB277FoyC9yMyajSpRX1eKkVqQKFdNe4CzoaaUYsHsg7EAPBhXxpq8nJEP1ZjVJ",
  "key30": "2BAtuDLTrirfCwditg4EbP1APvRgsRdm6icDfnipPC3X636MnMpgvUFq5EFnhejMwH56DCFzDBRcWAEETDcCEkpK",
  "key31": "szQAT4FKqsfj2PmqwSzLo6pKW2fupEcrdaki4RDkhBLPAyBCSmschpGBxL76iHoftaLs8vukiEQBQDZGF7FrUYE",
  "key32": "2Ds32fFZTEakgRSYQ6qNmWNEu8QpsCv5mGMh8hSW9MZ5TptMgVJCbSt6kdCY2D8V2A3pKtvEQMu6FAtmvdyZ4jrB",
  "key33": "3PxmYPxPcRiYHUpmV6ysgt5sY2Vzac98hrkH8jGMrywmaYCRzGhsNk4FLNGbH7vxjt8GWjKL6pnk4u9NcWhrBA3a",
  "key34": "F9X8ncpQJpm6uTvBUME3Zg93DquyXXYe2SHJ2ssLpKYuXeUwkCKFP5KaVfaYmuDPRGzTpuTWJBmtawKTaVnGhzq",
  "key35": "5exVMvVagtRyvu6u55jgGRQvqv1sKAUTQfnKyJPcYRb1vKTCUm5i6T416ucxixpy8ZxQqkwdMchFwCDXCbDrbcf4",
  "key36": "CPWt7nmLCEtvz2bWSw4RSv88G2wtV6zbHitAnLmAXf9yydJbDwZ8szLgBqk95v3Koj2Ky3fPhcrjrCHqdhNWB3D",
  "key37": "4AttbGHdadw66CVqkC7h7itm3q5mRfh2GBdKKX1v6PqmRVj6D6Ru8ua5jD1rQchMPKjA76TJY32VErbn1TRYZ1TG",
  "key38": "xDv37VKE2wjLGJE6D9iJBYbS1EotFiSaJJ22roRt47joNQKbnUQMYSHo8WZqFaowzkUZGTRAzx2HetYuAjje3yc",
  "key39": "evbTwLiTp8TVDZi5PXDGMGZtthED1vEwGZ3xDsWJ63jeqZAX8wMs7dtJN5qKGQKTg3VYU8Pv13uGfbpjNdPjD6s",
  "key40": "3EdhUf3Z8fbuHdaaSGfQzT8M7XYVsAPxXhZDg8xwnFhmLsMYhs82enFDnkq7yseCbExa3wJcnNxrScPZk35ZcsTJ",
  "key41": "PQoGuDxwjmpUgpBfzUF2awkt3TV3ZrNdyjx7xohzXTFnd2hFKpk2nS8QtsvyojgL9ij1Tg14po93cRfMXPds3wp"
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
