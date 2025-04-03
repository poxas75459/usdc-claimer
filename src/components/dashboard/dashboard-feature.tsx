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
    "ioR4tmRMMYwJmjjtfLuwHTgH6eLt9h7xSc24Ttfz7tXf6rpoakveZsb7QdnnzSRfe8TVkV3WRXazzmcztMrZVqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J5A86fcc6WPVYif1VkPhF9btnUKA7QnNn3K2ubaavWrusDx6a24HxWsxqZcsDiwyWQ8zXkrTeWBzWtrqcFrXfpY",
  "key1": "4ASsuauNaeZib3jjaXghr37SyVbvm3ASRngRh5J1aaX4ECG6pUhuWwowrjGesKK5jbkN7LLoNCAF7PBuud1xmxt8",
  "key2": "297b3X5sBAyAXtExchCU1vnW2PD3FmuM6d99kThNeQ1Erpf4LpMN9F3iok4T25EJeRG5E51MAu75XZDnFGbVARSp",
  "key3": "WwY4FsxdYxTy4dG7WB1r8EhQiduRyb51j6LyGKJxbBt8cW68m3yrjDrUmwWBANJictnv3kC9CKbtLwfJLj9W8Zi",
  "key4": "21uvETNvZc5yqaDRppUWp7Zbhhwp7aQ7jvy1tQQV2BQQraBfyrZUZwxd7SP9Mo526ZuUyw2KiH34cisH3TuHhRqM",
  "key5": "4Uq9itJCugHHqF4EhuKLSETkpFPdXfjcHejR6FzsNg8sPVdETqiqq9LUk6TqhBFxdpY59vB4KspEwL8yvWziANwm",
  "key6": "5HzcSDH1bkiLu1ZD9Gxh3KBCVKkgpHaZSu44jLgf3MVxCkwx9cMyJXDReNuMktP5qSnSA58jrf6LCATvAnumxuRZ",
  "key7": "5admagesJSE4GDtKRCYXj2Pa9A76AmLV7HPasGccVZeLytKKZEyCdkLeCHyJqmj2iRa26r2LSY9x7Arty79Yduzk",
  "key8": "cij6rPQAez7imEbNnLixwyec4nwPVVY8VFxnR1c45f2FRSTZX4u5RrmgmJQbjte3Pe5s2pyjii3HYSNAmZKB5Ng",
  "key9": "5tHSapTD7vfrp1memACJf1kKcHec3ptDebA96JPPVR6L6Y3LncK5wGyTVLWR3iyyrHJqEGRQEGh6ZpAgHBHbUNZC",
  "key10": "MhxAjmJBbsGrjRJ8KmjhiuUi73ZkCRCg4GUsTGnW7yMkVK69ejCRhc9kCfvzh99NVPJCgmM2Ev5ZBYo78Yn8Kt2",
  "key11": "4amHLjTmdonZDTpXibxdz2A7JVXWLptQQpRMu5z3Mfk7KTNZXhri1mAGrvKkFZXKfvNqCMGpb21G7SvBqzsAaq7L",
  "key12": "3Vy3gCL6hYKav9DRHZhhohS5QdevVcG94wFNfdKtvgu1LVQEY2ugaFRE9nowNED2FvQyeamjL2Hj1ib5HVTKHbGK",
  "key13": "4ZmyGZ1dNZex8efdKGKcpmsTXv6UijkV9tkgE8sMvgxa91ZCnacwPYHoiNrJ7NgoK2hA2i87qwfBmCvnniGWv3ug",
  "key14": "2hCqB3aLbSgy9dYSnq3jysVihq3wHGLdfZ4tWicKqRz2BmMVT7ANrpaWNaFiBu7qHqqwpxoiqQZyFUoY2wm5Nyc9",
  "key15": "517fEyxUhG2e5XBnWadFAru2yTrJns4zkc8Twg7zoUvCvRTUBFVn5PKU73vdAbYzFeJvK98PTnkuXN255MtBe4yu",
  "key16": "2tTr6zc1XPnQMHzyuyg8PCkFbQE42Z5SpEoJkc1m5ACS26BXtCW47hv1mmX8YrUWYMCoerdDcr6f39MxUpQZaApH",
  "key17": "Au6Cv2M2o5ywV2AKwuJeQehnxA6fFEnXBnGJRpNyXZqvqFeb745iUeDPcizBRra8juhB2QdEk63VZAVf8xijP1w",
  "key18": "3V9piVMEtFSzZWKkgPLzBY3xkbi5WBHE8jmiCFgiSPnRhQAtgMZ8yqzJErwvSiVWbD19cPjALyGXdwCD3rkuqD5",
  "key19": "28TqLeoLMWDx9S8nKWhuZPGdGgz7F3zS2i9ahaj5a61LTk7VKvXjUcnhJruNavmxrtCgJRCpYFcwR3UPxVgPo1ai",
  "key20": "3Q6gnpHYKDKCfVruS6tY6izkDsrRRqPHqVYc2aCvj2TszZSsPf2N8LU13SqB5E965nfKRAWzf8BGuuLPaawxmvYc",
  "key21": "5MbNFQqWgVjZS2JiAb4KEG1NNZStCZoZs2JfYPL6vC4DddJj13Me9nWiuqkZTtrVDEQiZZy2Li7jwSrZ3YoFVKcC",
  "key22": "3csQYMsS3zYoJg3yuJbb7KNz31qYzYtKB4CTPtyFJ1oLkh6xNF9Lobnf1eWbNH62yEY8YVh8uRwmajKFoWDzQEcm",
  "key23": "zsyDHrt3YKVuSogpw9ScxFHyEBon7MWVY6zNTTrzMuHBtsagKahK4doNZ2x87hU8yTaxZ93haKj6f6VbRT8GHif",
  "key24": "5Zu1SzDyCs9bGtvfihbKErW6uWoCu795rrvXQrjACJCQ4dDcTFXfcHEk6XXGzdgDr7C8LLCe3RroRQ7FKwq6dy7W",
  "key25": "3Uieo3XHUFk99fxVSEz6yxP6bNxxx7gRRgLQSLHXD8YDU2EpmSwX89rN7tLiJHv5x6DYJMiw77rdH3zVYNoWKhiA",
  "key26": "p3JLYB3BSXyLzPoMN3mB5t1aAty2dG2WaCqTx5dYDZ9Ss6WLBuofN1ee35eBjiYPzt5bAjtj57zby4g87ELwf6E",
  "key27": "2pDX5KmCi11ReqPsqTCQpKkRNWzVwFfXuxpDsq9s3snPXNjyuBHVsti343LXqeZKjvbBjBNcKueBXqGRM2EJbdEw",
  "key28": "4UBydAMu3gyTKkqzVJD7RLBiEr6j693mXDQjLQ7qoaNjWht9Cztf3UCPwSftqobSqiomDgSTSb5Jyz6R1s8seTPG",
  "key29": "29j7WoaD8JFPbEE7oT59NP8ynym9JWpnXikNcHtn1L23Gmu76iMmgeookYbeDHRMsJSwJrz5Jxua2QD8ZgT5eJDy",
  "key30": "iYAuQLLb7TeDrzLnUNpfd3J6n6VahYUzckJ3FUkBx2ke3KqVUEVtruPXq2pQW9bTayZsqDpkVa3okqBnsEK1QZd"
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
