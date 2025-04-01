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
    "2YCywLw8szoUfnH3A5ZejYhnoWQPsftakgguDNHzfGmAxkD96CFvtrcgqGXx4aTEEiFFGLqzGd3uES39UBC3gJVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fgNLiS7jnd3jZE1L7K5aGp37ejEZBF9cvz5oWFSJkgkRuAzQqToLm6tXg3vhnf5wuk7znZGoqXi861dwR15gdfP",
  "key1": "63Avg2mqEKkQMu3DCmppMj8VXkeJxFsRJQU8JJgjGhMQ9EL1PbVucABsj6LitjLFNUpydPcdsaSnAsfpurgzVq3w",
  "key2": "4Bgu9s5cLPgCSGjBX3MjMrqjoVBMF3zKvcj4vxWcRFGN8uGTZDq2uFeXJezxEHFbTuGb3nigDGjoSAhqAYfUDjk2",
  "key3": "n4DfUKjoUVtdD1dQ9HewXQLYzPLSLfUWsBhKJ6mPxR5abYUg6F4KohFwQgx6CigrRz2LRe7VzG8vHi9adWjvFP3",
  "key4": "2X56YnR5AfnpFJFD2Q4PBbzyhUKeMXQjQ94kabC1CKh1A2oGTnwPLxSQKy9njG6qhK5cHw4kX9hJkrNugK4hs4BN",
  "key5": "2y4snyBaJ9QHDMoKrwtu3eGuYATXN6wKiGn2Y7ao8Fw82n6bPMXrUjkrba8rmptR4TVhS688DaYNX6z4XPLeqdrp",
  "key6": "2o4YYtSBZABcQhQRDsdKeFRZuzMGQWjnzf73R8nmp2BgunN2q8Tj97n2GPTTZPHUxVgboD46vZeFk91Bxu1ffQTs",
  "key7": "65UvmuaASohXhnELrBLEgsJyWxxmBMNM2HPBzbhiXdkmPVtwLAAZUrBhdpPMXSxaB99NtpG4nWGH7f6NxUsKkyrd",
  "key8": "SJ1Vt7FXngRfSTWFM8EfkUuYKxVfCXrSpzauCt7aV1gS9YMNaGksPLFEwZjSYvoGvDR7bgsVN7KJvBzKNo6o4br",
  "key9": "58Thgf9hG5jtoY4VamP5pdn6s5ezTBBpYaThvKdikWBVPpSX18WG8vpYnNngPdRVkgisrn3XmRQ5j2Si37PFkhHs",
  "key10": "585n5XGM7ptFaLS2SJjH3HNBwg1J2RTkL2jxA5h6ctV45GAyAzseaEmFkA5EE2vQmWyPiq1sMJcM6ink5KNWdvUn",
  "key11": "4YESQBtBfrWquj8Jqi2zc8NcTRKQXWYFZs7zWy6pGvMAkY6iaTCQDVbbTEgD62VKWTihKhu3kKqf7fDuCyc4gRxk",
  "key12": "3yw9AYJekC6btBW7X1kT2CYAKQjidsKwfcE7vKxxVHHHYjiL5mKFQkNHHo24LycgDBseoTBuYVaA6vpeJvGmxyXG",
  "key13": "3D9dLo4UqtSjGXbvZrqXjZfSebCdiykK6P8WevMc7C3YGWibhBx7TfZUjP7n9vGdAgxVr56sUbJuXepfEVqYvKqo",
  "key14": "45qRXCKqm7DDXGJgnTKfakRHAHyUzXcuYKZd854KxLP3WjsbV6V1H35dbroJSh4PKMmNmbRFLWxkeMHoQg6rxRjw",
  "key15": "2JAK3iUf5u9fE7N5sMkVzknehG4V8RZntvBH74k5wDYS7Vij8tjJKvfmfnYS3GyswAsAs8VJeG9w5N2YpxvbGQK",
  "key16": "Gey4RDf3q1GyZwccBpwY8KHtqEdvLRiHHjyHzn71rPvrxURDLZSNHPLm7eeLZLLY8o9e7C3PEC5a1LjnZT9D6Zs",
  "key17": "2m2spcdSz4jWts1JJzyBBbHWGD4Fr19v2EkRzZfVFcqw5xAGf4jGe9oDnToEW6Y1ATVuHumKNA7dtPBxSTjkPrDT",
  "key18": "3eFES8hgWNqSDxrLZmbhpnDUNmGJB6yexdWh36rSGY7dXgSQ9pUcp58QcmcM32hHk853WmRZ4pYkvwrWBEZ3Lbbr",
  "key19": "64Ks8GLe812Vp8tiJ2ZrHPkK9gRK78UXucR3PB5Dp3BfAeMGZs3YgCXDzybAxCCXGUuuqGB99ibAkEdCe1jMNoCk",
  "key20": "DMfmsif2umQhsCbJtDBpFR3e7rf1QnRQxuY1Ch2FuxHKNaub44C8zm7CZrD33cD53LgFMStFDhxDnuMNp3V4F47",
  "key21": "4MLWchNLemRyLsJwrbsBdcZMNWfEaKb8dmSoKbqTdXNVcRkTAzhuCEM6VtgeJrAY7ZiwiZ1SvhGEwbP1bupt3FLf",
  "key22": "7Kq1noQog4NKbodozN6TBrzMogt6feXBsfL9rwtyCR6TMKg7WhdzW9h3Z28duyFajxxCkue5r3PDfv4RzjuHcSN",
  "key23": "UVYu4XdVxM8spa1Ce24zA6qEJfMYjUpKgM7TdnpBMGoGvzVUUmwXBeSXCUP3nQdRhUvzHTrD8QFRVaWnGZ8QEHT",
  "key24": "4pvqWHgkd7Rqo8SYQHnH9jqqMa4YCPCgZRySbr2T8cRaPt3eSi8QZc7v2Y3Fb4TH2WqH3RcLcQDZXGCNdEKDqwon",
  "key25": "4uYbmFdLsgbAGRuprGmxp4tZ9TW79wsaYg8p4c4o9F6h1t4TKXag2ev7rpiAt2s7GNKRkfxzQBQ96m1AB77JVpFT",
  "key26": "4JUeHyCZTQ1jhtMXc2dPCAQEHGn9wQAC4xRNS7Qj4EaUTSQeGqunksXQinU6foqACQzYw3ec6xpioJXbzDMmhj3N",
  "key27": "2wSEyFPU4iEMV9X2k6MkYDijQpFi2CTf8DzhwhxxHx93fh1jgrtezN27hFJM48YmQJQVzrjyBPMbppoFjBcPXpR7",
  "key28": "Faieycr2XDXTvsUKABPjAHV4hXZa4EbkMA7MXwEMop8yfwVFtD6CqoabKhdptbpzi7ax2QGWWmZC2ecDCZ13tiz",
  "key29": "3zQ9rSZLAP6dLZMn3i4y9wTp6KkxGvKJvhp1RqSGuK4KJPvcJXvyEgGjCBFSFZpA5rz4LKK1Uc4ahCEy1h3dJzdQ",
  "key30": "5FB46Jb4E4RKSQ4XTShDoDwT6Mo95SDaLtzg6EzG4KJ3tg8nBEWLhuZKhTPUJVWPaemvXPAXF4rYxaDxfHLcqDSF",
  "key31": "2DTf8CpG9kRAGiYZcxtjLsMeTjYvq3VFm3Qoky3zJkaRBUsNAmDdnDxMnV4va4Kb1QfL3x7nN8GCXGzuYN4DNM6V",
  "key32": "4Mi8tjfEnZSF5Y2GPsTQDnpybyFBoBYujsEhetEV2ePaem1HiAedydSvKRz2gsKi8F6P9xC6f1RAToSBi4p8nii5",
  "key33": "3p88WFFeD2sKLJrcASBJ1pAQ6pEqFw9MKDRC71Zd3uLcxKf4DjAcncH1zweMTUEWzBv1aZ1Tjw3DntAtf5tb2uQv"
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
