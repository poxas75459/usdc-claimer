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
    "oL5fWhQtqBoeDUhxAuRfCWukXrkPQceYiTTEQMK6iSszd4SH7Vevib2HdB8Pp9VE73jHFjuCZP85hspnZeUwRNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQb1z5bKNY2GhZPAVQqZGozKzY3jhAqXgKRvFLXKbVcHN3DWv34toHjELpXPSMKDHwYxJx5yd5fJay9nyXq9EGJ",
  "key1": "3hdda8Kp73tYGvPrhNZ7gYUmgmKKmGQAiF3x5c8wTznrvsLYAzkNaCWyox8sY2zTnvcV13PVcVvwvoRkJe8M4fob",
  "key2": "24VMeMB8ZiPgEkUZcgJAB4jwcTx73bwXkUNAkzQfaW3kC3isNwCjpABPVEKyFSY8sPAzsvT3RKy4GiCypLh8dvgz",
  "key3": "4msBRi92LrSYW8oV8qCNDHuVYNKyS2zsTVKCumvzJYmpRpb4ZiaLykYfpKLTequt4hdq7SVEvnwqHCVYXoY2qE3c",
  "key4": "56HnTaWbv7F47XZzKShQgfMR9zx6ncPVRwFuw22HyBMo9qb7JBtQWDq1WQoTdU9TSshFe3Z66fgbxHN7n4uF2mNy",
  "key5": "3v43wcuDDLykk3kCG5XZAcunUWuJ8eP4k59PcUaXgvQ5CVQV2iEfaVAqXJFdGWjnnh6HQr3UAFTeTJUDULvsSWdz",
  "key6": "2td5rWquTqi8f3QZMdLcFrdfs3vDnDMpbkaquDRtU5bRzimJPJov6rGoXYfUZBVSnTUAy26QAvMBCSQxa22GZ3W",
  "key7": "2W835uWSxYX9YaPSCsdREoDAAbiUxeLUbkbdtZa3D4NcdtVUzf97xBKr5A48C5P9bgxMCqG5rSD4WHRtADsoxH3c",
  "key8": "5avsC21i4u9Bqj1BsvLiZum9TXS9y3HCVkjxdZsDwp4pqSxSUcLNTEQ9cDFWQvUY5MFbbLPyb3THT7TCCdLJ2T4y",
  "key9": "3t5usQys57hvzH8E4TqZoGqXGFwb7NTxCUBGPfEMEUjosuzCUBSmtem8c8SSqFdfs1kTH5ULEkDbRfguHaK1BjBA",
  "key10": "4CTaFwFbHSHtNfgVfRww7bnJCNfkD79ZSVUHnF2QVHnD1AtG7EYHy4N4NZEkcGfbqyTEzBNRX2GQ1s97Qn1YSCqh",
  "key11": "4jgAurbT6xyH7CL9R6RxZ83zj77AFUJBJfG8HxxaT8Z2z47G2z9tCTrmW11HjEHGhXSrHxCs3bUCUM6KPzdqyXKc",
  "key12": "ycXDCd6oL7VdWRZM19dRmfPNB5daHGzdwxVJbVjmrVMy8YstMZ2pXvPqe7FDR4y18pJ5QXnF72rkQd3eJ6jfbjP",
  "key13": "3tuNULwTcreNdoEQrXbEeCSvJSPeZU5C6pDHFHc5X3DBr2VWNkZN9pmRgw6f9RSiEkZjG8jTo7FvYH3yTy4t86z2",
  "key14": "3WU27NNwvF7dA2G4gyFBrug3E9qUscAZMpNzafKhRjSkY54TG2YSszuPGjrBR4CbQEobh6mTeJKZ7aLHmwDwM1Ah",
  "key15": "52YLy92yPRu8RhHWpUghZ31Z9wmSS6t5HUcpYFFbvFZyk6UErA4j2DbFB442287KUfaCva5w6kLu9Jm5hZsarS8W",
  "key16": "4XVcsTJbSuuPuQQziECtUWYf2Xr4cQxweozbA5dh1kKUR68eVA1nuWJVjpDwvJXwJBk6hEs96uAj8yx5bqbcvqsa",
  "key17": "45FaDtC1cBoczj96NrbdyKsWvnn2fkwCra9oRugSvvwUrw2UBT76Btot1CrT4XtjR8pKviZ1MKpyzwhCLQh3Aekn",
  "key18": "4rTLHTfJBvctq9bhJv3RLRmrdDjg5cwoGxoF1rtRn3Q1RLih3cbufBnrFGY868eoigiH9uxEAke5AJKkT2Fkb4t",
  "key19": "3WHfe8CKPTPT1oKTQrCkKXkDKzSeBujF6BNET31ijuKeukJw2726bU2ve8SxH2KNbSWo224iKmpw9gA6RtRB3JEv",
  "key20": "5jnmNKyA15kafpfzo4DjQ6yRHCi2HnWzn6MPCL9NGy2oMytaerQhw8NidGmmoiaazMTsRDkWxHeuDgZrXU6ZRvVi",
  "key21": "25ffZe7vCicwaG7BQUnaUeicn4FpmueS9ouZ7sezrCmCdfhUz1uYYWXboGJrkZDzc1YsP5SBJ3aZiZuLyPiXdhBp",
  "key22": "6AXYrzwk1yxPsztqLVEJavNkN4rqbQ1e9JnEGNTdcfXpBx4yaHJhgE47oH3buyh943E2ijGJW2Tg8eWFTdshine",
  "key23": "22T5ReGg3fCTvuR6PGg9PFY3iygkZK6JjzSzmCEGgyjeCEvGtM7zkLP85dJfSKTDRVYDLiF2KxJprndRvSUB57SW",
  "key24": "386yYXnacBSnGfSeSnmyZPSQkFeDgNn3aYXvgcmAe2fucevFJ93BpXMRWFjNdN57yLZJb6ZYsSqECRyDA15UvLGm",
  "key25": "4KDARABB8CZCcrweCcihVjD6WmjdzHMQ9H1UcwNuWnWCNRvxnzTYDQbBuN59g7JDvxZbGKuR88FwPTz2wDXU8QVs",
  "key26": "qQK4Kdo815BYyhEQLZz7cKDEfpzFvwZriPSMzQaJ5scX2dqedoe43CvmUCBFQfDJEUzJt2ciaC9FNe5j58xijER",
  "key27": "5YwvvRMMG57FD8FSSs2PYZFDABUxVwUKHu4REZTAgV6TPH8hrdb8kn3jJZQPGSqr94EwWWCLbeeh54ccXmPPte7g",
  "key28": "5WwiwmaPhFWEJvrTi7eyFkVsuGnR1w2kgyA5Sn8573VPLWxKEpc9imrbxp8tFNQo9fiBnsdJSaEAs6pXjjed875D"
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
