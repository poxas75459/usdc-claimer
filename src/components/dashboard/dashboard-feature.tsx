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
    "2X7E88LcX7sF4gRCsBsyR8dUxVLCRRh4D4TfLgw2KtK9qaUdjkWS9mUVFjgzYjnaUhLp8jY9ydu9ZV8JA7HmAbdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ihZp4pznaZmVw4hLUYQ2BBcyrGZYW5xVM39xNzLNQd5U52B5WC3ioiPHWPKWgeXmqBkBywSGRLmRafEiQw9AmgY",
  "key1": "5h8EgHJmEVAmptKgG79wttiyqFHJaYPhWjyhEn6kTcKFLnMiwrMFQbcMP9K5jPUDMm3ARGEzxAHX5dQX5pPTPNNK",
  "key2": "3qVs1goAgzn6A2CEcoNufnwLzi1ayKeBP7YQp9Yk3pS6D1HsPFKZjcXzjK3x8enthT2X9oaXtXFpoCBkLPQbspHM",
  "key3": "5wzfRYRC2iWZoN8XEKgukN5Z8B1KCXC6Kkonw8ypwkmP6XZEUNT8qq2kkVm6CkXdTGuLBtztXaKjmqZ7jaYigDoV",
  "key4": "2edbSK19Byk14fmoqmzSxhCLfns6nfV9zLCcLzvxQ47gFBa5Se1opAQuL7LZ6kpegdCzTFFePdxKt3A7MNU1EhoC",
  "key5": "31HejVYBnfRZ3jaUFAtDuNQy9XxmoN8UCYVBQFhmHfJxTLdmtFXogf2g4jqmNKEQ9UUC144q7Ref8vYHrDvWKhra",
  "key6": "2Up9GdpUBPDDaxASzZHmCEfRFUrXKJaiQZJ7mWa7LtX3HgAiRpbg4z4xKqrquicUgwEGYM6P4vjZ5WZ6hWTyXDQ5",
  "key7": "4sx5oRZgpR4B7LCASjYucrFXdmWehsHKKBZYdTUjcypJt5BDUj2m9FKLuB37yasqzVGgARsCrp1EKNhQxTSVU58G",
  "key8": "27eoR74LqiKp6Cfkc8gLzCSe7YBgFxwTBjKa5gEpCjNsMp4rgJ2KQoKgrJUGutJNnbEi3rC3fspjmwjHEns6kteZ",
  "key9": "4W5q1mmjYaphWt4yTcm6MJwgz9LL92rZzFfgUPbfBGFwprJUJFWjEewbYok2dMW5uZ8fDhPh1h7qtAXBZei1nNR2",
  "key10": "3rKHsXWsXVX3CtRroDPAPQvhXpBShT5tqFkbsM8JLHnGM4gK2qQaFqzJF1WWNxgsqLd5EEAk5VkzCkCrZygNj2uu",
  "key11": "z3jwHbhrDzZTYHmC7meaaQUyKqw5ZerE5PRNNqrwKuMJC8yPVBhtap8GyZ1hiunwfJxUGwvaQFVtrHbo7xUZRAv",
  "key12": "2ZgGodr2GiXPU23988xSncLDm6y5dPbB85855UZuQ7diAhg2V5XYLgeZP9E5CbM86aTk7qcyUDmJUtyAXajgT4xb",
  "key13": "rB5um5Npn5N5hdjmqU6qNtVELDm5W3MgwqojJV6i8xHD5jVDNB45WkiXvXJtEwW3R4jdRqHWdTKamRrWyQxueCj",
  "key14": "4U6m5T55CdtQH1oh8eBKGUSWZbfhZ2thQxTcGgPkKq43nd5dhY27HaWbLJPAWdby9X38dCwzp9d5gu8kDECFyr3j",
  "key15": "4Necem5CsHJYvAxRXagAk2adt6tWzWF3YJqUF5GbuxCUwCYcyUsCD6pH6WdJXbFcLKiVsXCukUgBRzfo3Deaz5hc",
  "key16": "4q3Tdk5i7ZZUUVg8GvxjF1KTdvHVfMGEwyKqpQTzQySPHixZcT9H18f8XTDmytGxyz5MHfxmY9JKUXPXvH84THpV",
  "key17": "5SzGoNUym7VPz14eL7g7fX9sfmKJvS9arvpziBZ3rjT9MevJEGpdoDY6b99tCTzomAJuv1sDh4S4JEx1nynd9PZn",
  "key18": "2VDsxha4KggCaQUufHBVzh8NWZiyPSH1NuBSBaRmRbcButeQZJT5htbp3tF6PSpxnknws1EBDi1r69xGABxWnW4c",
  "key19": "2CvWwaSdTirXMr6n1ubD6RrMThX5YnG56HXnJ2XAxiDiZAvxAMSov9y7F7GtsXPf7z4FJxxkLmcauYRBHT6dRJPd",
  "key20": "22JRGb1AukBLcwbKzimwdyFMv6khMWc9vLePFrL698x1gtQ4a9WmZ27CpU7ydDErVGMvfc2FMRqB1sqy2VCbDda8",
  "key21": "2bsYtxbxYqLCbSE71ujFAUW8wWMMU5rdx1cBsab83DoZcCTSwW4BqYCkaphydw72o65Ecrctfu2xPM62rXWgoSb4",
  "key22": "4jUBufmxjyi1skBZmHeWxhVE6Ar8nh5BaZuRoz7fcrZe4USmJn6PTZd8vDiKtu8Ppcf58sNNGn5pCa41jg3exyDz",
  "key23": "3fe3PYSKWMYRPhpCnQzRfFtaQtEKGyf9Fp2t69xCqqUQTY6oxog5dGsg6NXRqDKSewAmBCJLYCqnhGDktNfvNiMW",
  "key24": "3qA2sNCKxuiYH1tJkwusL1CCWuK1e8ko4xerEJMPyZzLS8w6Eue5pSjPtjfrzBeV2H51xvYWnVZSKdU6C81ZTt6x",
  "key25": "22gD1s6riBadpcbJgzcrMouanob8S1GVGae5f7i6bjeMqPhrB34V6WKMmRxVqDGFAzZ9PxYvjFA1wnpD4VcdpNX2",
  "key26": "5hGyJPBpQtCQcp1q6DHwfPuNxiJ31nG4Lt6afhZW2tmVVisDjVqoXyUG2SbXvLFiX4Gf2B4kEvL2F6Fwb7dboCKi",
  "key27": "4Tu7SP8owbCmuq2w9JHkjM8ovD9xrmjdaa4eC9TjzNWURWfJy5o4E2cDyLzwDT1ZWmS9199vDnEhNtjp62ziQANW",
  "key28": "2TQNWL48GSYHUnUdtHU4NRt5aNb7dojJ6Wx5b6X8VAMVdVXNNq61c8Vb8zFCCpTC3YudALDuT9whYjLraWwyqqiH",
  "key29": "3HNbjP433mge4X7mxh7wfxFs6vXLCy2waWyMwZk9mJg6iczZTiqbR8fSvw2yt33q86EzZwpmScu7x8M75VbBKgjk",
  "key30": "3nkNdFzqvNMYuQDjyzy8wYzf3Pr2AUV9MTxnPnZeHDbHBq4P7NsgdoFWNPobRY3DXdNBvc3Sz6iWqR5jhzRHGwSs",
  "key31": "9mZ4QuLNhMivZ8auVpKGVauANLoqTTbXy5Khtpieq5YYpfBNn89ZytPvRR2u1whvzUyzywKUBqTmTpXE1MjbDLz",
  "key32": "5KXCbYuXE7uwVksHvKPDHjNYDbjw9nL1oAMti3Wcxe2JTVb5CeFFo375KeAn2KJhgsiB7Tu3ggZeF71xaWC5D1Rh",
  "key33": "5QsqqqEBsVTqMNrDJHM2HT2y4EW2dyeEaEdnLirEZbSVx7rGQFa2qMUtmDL5NJ2LsKvQGztp5m1rqUeG73JpN7nu"
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
