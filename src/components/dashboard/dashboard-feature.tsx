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
    "XVpdEDnsY3t4hqkqhn5KBoXVtzyjcjDugmw3dFVFc2s2FxhF7h3itK7UrKjhhG2pWG1DG5qRNCo3uoVLD6g1iP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Lx5FYi1z5rNwr3xfaLp6rksrDwvsrm1a5SYq4uCHbeams5xPangdPwXYSPC2QycgxP8XaYUtte6FgrtLzXuTcN",
  "key1": "2XQP6To2ZiY7xwEQuwwkWfyiTuf9KMwjWQNxJdLWxXgz8h3DAW8BjYefuCFpfCUJMwTFVjwQ2X5cNqvR6Zk1iq17",
  "key2": "4M5wJ1hF96WPjoDJBjdxqd4sZidm2qckecWkhtE51vKNNmNtwJjGCgFCzYJ4n9PftSp9sLQQJKhrm9jTCbFcJrJi",
  "key3": "35YrBAVFeXRtC2djPr6uMFaoU7GMRVRQFrdQdVabsofr6xhMV2qDsiN228HkWuDoMTNatjfcSfbsVFa1st6gnLHH",
  "key4": "4T3NVwLeYFEqRV5x3MSLse9JgknwFZFBargNSByhC7CXmentnuSZQJoEBPK9UGCE3KpWFoHqpLEzVBTMCvJ5R4gh",
  "key5": "3gf27NSihv2T9srGMbXgskRMhWAWBynG3DaAC1hEPRj4UWvkx8fKEMWwjjXRWMphZ2XUCqNLmQDksGqvASRMKekU",
  "key6": "3QuVRfHF96Fzdejaew3mtiHnbf9v98yyzFXtcs1UtKyP8azqo8URyyxzbcnQvCsx85rN79zmjEhsCdZYFSnE7jQM",
  "key7": "38SpDRvB2rYEMJn1zPY5Hmcaa9HAQfwASvAEBmz7YuNvTFKsEYzHbYoPaz13ev6rUmVKeHBkGaHRLSyTZW7Tb4bu",
  "key8": "3sAvesVXUf4JQ7GQmpeU2YDxTUC9pwqkLnCgtawoSyoYqZZTm14vZU5JBctbNXMhVfiQ8tm4oXPa7H2wrS4vf81e",
  "key9": "2UPkFAzeKjW969HJyJjRPoNiR2FwZ7KPGU7JtiUbWNmqsZUjzG1iJ9vMJYVJEUrbGDnxdEU243GFkoqucmruZ6sh",
  "key10": "T8nSr1mEVkRRU6D6K4R2c1SvzmbG71PYjXgqKuFXqmjpk5TKDPaWBfcAdm3q5WeqcELoij7PqtjnLBBP258FPiU",
  "key11": "QKctbfm7ZMNZgw3ZmL1dKA1mYfXJbVreGFxtsHV5yEcvW59FnX6YRizoPC3f68xDJr5wtmKa9At5EQER47ys3RL",
  "key12": "42xHC3unBwPwN6J53MtNjPeKNXpBepDuDjQCjc4TodBS6jASP17mjRnEZ6RpzjdaQwQUCNrQqcviFVeDnF1DtnzP",
  "key13": "5kPHNyazc4gyLK2PBGTHRRF9eb1PSRo6F9v5EMuGZJzA5N7ibT8GVNUBmPd7gFQCWtjk8aU94enpeYybQ7sjSBF9",
  "key14": "PSoU2u2DgnfYoYckMBwnQa3wRc8F6YZpFBFMBtEWjA2etFzYpDXxh82wfAYYD3rAHJ3KAWt3GWyUudpyx3NJAEE",
  "key15": "5Y4GrSVSb4prjER7rxooQ6nxKDr1u6y24xBJrYLrEjshDrx6sZB5KDS5Pn6sazEmAXnBbfvNszpsQWTU5TTxTWrd",
  "key16": "4SHc9h17CyzpsH8xh22jCvzYK47H8SgA4XxhBxcRdidxT4JPpNifpoTXgQsrTfZQeRYnMoKjxShebQyUkE6ZRijN",
  "key17": "2ZK9ZZqF1XtLuF57cshWqPA8AEZdKzVY6GZ7Xh9YiTusWX6ucKa2YVDwhP1WYjqhHasFrQv9ytcGwK5pfdiugjvj",
  "key18": "2EALikYUw6axHJz918DhokQQm8tojzbJNT2tnnBbdZ6kxJXnADgQ59HZ8EXvNLykrz2R3wTpLBajC1FP5zqH6e37",
  "key19": "4r3ZLPuCEjbkC9CDjeJmog3CZijJdyWWFDWTSSKs1aSVTZTMzfbsZ7tWqLqfeFAod9X4mFeYPs4o2om5xEcUtVxp",
  "key20": "2MZjAFE7LFNtHSggHL6aCzH9oGv3fgrwy8fpDU6FUxg6LoGEH2FcCZr8PUawes9sD5BkDw9d43yLXZhJnXE6TYd2",
  "key21": "2PegzrCt7giipwQKrU4hfLqZKYz7WMY3m3HG4bHSgwWsiBydGoVXQPLrnXNhdkzHFa41ELRaVR38vWEbNaRyNJ36",
  "key22": "8WXF6dHoUBFc9PveetL33EucYxARQ67YwmZ1imMyx67RessJ1HH8B4nZESN94vc5YjhwkrREkCYxgQdgqt6V52w",
  "key23": "3WzoPxdptuw1yrBB5y4aVLJZHF1EbeQc86bn6F5fbYQZSYFQFmh2gBeWaz38J6z2MNmrzJxrAqP7983RNNirgwGR",
  "key24": "3X79BajJB5xLzHRhroD5fM7vqCZnEd3BvWzrXF99TG45kXHZkBCPKE11YDWuibaYV8BYkXNp4QZBndvdMf4HVfU3",
  "key25": "2UUuXrnwNT4HYj4cNvxATSdLXXEhPtFPEYo4GzNNwWPJg17mBidTqtz3wC88csj6xQH1FQDfzgD1SZzpUfvUJFoD",
  "key26": "5GKfox2SAHwXm43YEkuNm2Q9GdNszhSUPfG8PHZ8PBJUs9SktNPSYmNx4pkS7kkxvYw8wvPmg1TTuYVPiq4ZAUCn"
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
