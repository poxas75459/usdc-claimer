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
    "63Jo7tfa6cqeUgsbtb16omAS9kte789cWv84CVrDGMJuRE1BJCkE3N8Vi9A4mTjWmqzfqPnLoxiYRSjrxiQy89gK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hdkV9zAGRBmwNQu7aLp5ue7QraUkyaoBWrvDMdWDaSNCZVd8jZEw8Cramyhju3icB5Nwv4RcV4REN6kKB8FKvQ1",
  "key1": "2wfhM4ATdkZTcHT5ePEhKAAHsuXWfXA6WxgzbgAUztCarA2Yfi53SsU961sJUWEZpK5rfKJrYMMTTizeHKTCpS2m",
  "key2": "2c9MT6JREWfNmekKCTwxCGbBjXJc2B5JJfqXVbKGL4nq2QtVK4KsJok3jsz9AfBokJ7a1XtdZPTF4d6Cjbb3Enb1",
  "key3": "58t3jnetH6mYTb9x1kDfLriVQsgMtXK7dL9CGTvxoAcfHNsdDcZ8xTRLMjawh7mz7UwT9GKqhPmKupFWUY7FUWER",
  "key4": "5Q43r254CT56Urjtn1YeqaSgUUR6JnsmDQQZYHDRrzL83V9SCyT1ef4RaPKEnVjATJtZt9kvVLxxoRcrcbKcSTeV",
  "key5": "PwuxfPRqJvU1JEZwKBAjurU5nUqSy6Z5h9RKreu4BoVtCfSuG4DNhSMYpXCdkrVCd3SaeT4eMXXGPTLBkyHXB8d",
  "key6": "4PC6ybZMgACPqboa6tLKWAo15hVMTog3UtVfqpPWq1GkKsfpLiA6ZUT8Te5eTGTYEfHLcXMvfMa8fUiW55E1NsRj",
  "key7": "LfRsRyZGVSC2BAmeazSZKFkQMUD2rhGTDjen62YoTUPJVa9ZkGVFXpNjxb2GytjChqioYUSg5rs9hHEh8xNNaCz",
  "key8": "MUjRG7QBVi1s6Mb3fU3bJR9f2aaXhwT1aCzRwz6jAPaMcVwdv3UqCMUN1R1EH51MyH29yQopvynfzx9eoaCJihc",
  "key9": "37Mt1bsHDMuhaAayVrcHrmJna3DdwAZW2Pzby8QwcTy3p6e86D4wvxotYM4RhY4qDLVA1UgKTbBn8QHo5rDmujA",
  "key10": "5SFT8MVLeixgZqng3q5q3KvzKwqhUPF6aSF7ofzuUA1teJhpx87mENqK9mEEvnmTy82oZa9mA9G8x8z1LVwKxuSc",
  "key11": "2rbJQqq7DEYYWPVoDG4HgvrSBjHANxFWQiDyrzKMgzxHqZE4ZPkwfvRbZj2BTrCmJjeb3kXuy5vqeBLJ6XVb3tAa",
  "key12": "3epD6521zR7KHwzsHBP7vUGRWye5Xro6a6bnncnKFiVbVsMht8JXK7tyji4hRxt6M4bcMR7RknFVxmuodkQ8CJJg",
  "key13": "4wQJjpqih3DAmw58eHqBBGjAtowxktiUAYxX15QBQy8C2brwz1SRshKd7vRYUp61b1ND2srRSsyJE1w7n233aRBM",
  "key14": "2BYhWvvcDMXd2se9V7HduyJSCwvzwBykdwZ8Uz1ELTozyAPXA2yjY8dm8mXkVurTsiZKfvc7JkcNetHrsKkfpPD4",
  "key15": "5jhEU76R9Bguz6YeiBCQFibMJWypjvWyeMP9HAokZJhcST1tiNk82zb6Vd5hmYBunwcLv189ydh8C4wrmpEDCSJF",
  "key16": "PZx1CPq7VVPNZMEZPkxtsqur2Se43m8cRi8AbfixMtspswJiViWs3QeJGq9BUVY1Gqf6XNbBvmqVLH8cYBjpdDT",
  "key17": "4nV7rxw4Dgnv3PUSf3QZMs8cFKn5jYZ6G7aoib8Y7Q9tCUTw9XYVkxxRACGq8NDUSbHPnqgs9SnVKuDKzrprUQ1R",
  "key18": "2U3ptBjnNxQoEgMN4sGkwUh8x963yYSdA3T1zrL8tXCg6sENMRDguuu8zFctYQQYt1Vr3TKA25QjWZpxvMPC91mN",
  "key19": "61o43mvf2Q22HMCJo4bihsPhAYZihWVUdmqRiWrnz2NSwKYCcQ92QTR7H8yYKTntjfNzE2739Nhw9R6K6m4FqgQX",
  "key20": "3R3G35HEksU1aq5cuLaiiuycwHXCGoqQdBzdcxRAQLhMuzF8LZ7jUCYg1RXU1pByE8JiEiCP2kigkLL7e8NvghVZ",
  "key21": "BJnEEWAu7vSKPxDLvZEpNqskPXJsx4BbXedaC8nzHGcQoP4NchJwmpRLgswtBnNRGvMuZym4eapWvt5DyuwyM3a",
  "key22": "2W52RnCgzbpos2qjjwEt1eTu8SdZMvwqcRq2z5D93ZeKpxtHmmRbA5PSxaDQdS4oJ5sutEJnvjobPDk5zc6iFM2b",
  "key23": "5SLSVQu8yrRKTy4SFY2SqRXYWZtuE2Pj2SXjCxBXrLW8CuFGbveYTJGzLUjhmSNKYHohoqGT5QCAWcLZa4aGJSrC",
  "key24": "4VNqpFQeWgMmmUtNhk54QtZgsGmb6PzYKzfugU9vU7KYFe3eGCCB7g79dht727vYJahi3nz5XyMf7VCkJmGuCnVD",
  "key25": "4VQhc289phQtP7WAD68xRTeaW4VmYqm6BJkdjwAFF8BEGE22QaadHa6hxKpBQAdbwcAmP3rvwFCRweksZF7BgioS",
  "key26": "C7RA3YmSbkPkgPJMVrEyjVwtbvURgkAyev82pWT2Vz7sshfrG1BPgxz9acgdoJy57pyXBFSxy263eYHbEMys91r",
  "key27": "4AANbepf4yXLPKcQtgstETTek1vRJKHw1jUH7HCMqrKF6kao7JGVsPzPLrU32fY2F5Sxnu9cKe83DAmWpsMV75ZQ",
  "key28": "2Jnu8nBq5fmTpjckTeMiLiUH8XvDpLPMNaaiBMXcbVAhEL1jHKFbcY3yqCiBs4SojjFDAwc1kBvpR9VVc6Y89xKg",
  "key29": "2jwn98VpgouPDNk4VqwvV1QtKSUDYAvU5ZyJgs2ca5mn3CgoKuNrJ1rJr96QBUBr7TpWhcd5AyzdXUzpKbwSPm7G",
  "key30": "4RvmcuRyxTXRmzzzEX9xQAmPkmdE5mm8bPd5XjHPCheEUS2hC5VVGCtMF4YzUkMLq6xMrHLZjMbLZFAnGu5wRQ2C",
  "key31": "3ywhe6Z1o9Jxkb5kQfrWqVMhRn5VJawi85Pq8wrrfi9eqnzrnS51gVaAmMLAYFbevktwVLqyJjC2JKik8FNSLZuE",
  "key32": "3W7MJ5m9uSJgC6L7MAHj9YSkBLMhvobRGDgZg63HdZYNn3iEmef3C7x224HFCg1H6BhDGZpNqgY5FF5CGFUhX2dk"
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
