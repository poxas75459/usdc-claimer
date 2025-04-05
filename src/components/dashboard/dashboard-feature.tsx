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
    "4AbCP98jtRzBneHxwC2kHfpL7cEnr574zz7u6ZFJS1o6hYoUUHpg6kpxNqHwXa7vcnDbqAEcAjYJiWPpBKccvBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r8LoEquw2c6yWH3FgZwUVgYmCHfW3cMRW2ujP8LDui5Lcs7o2ktYQiydLJA5eudviRu3bxh1ndK9UhPkmVMicMo",
  "key1": "2tP4uSxoGMDA9SY2SBYnMy3ecJRm2HV82yF7tT8ag2P1t9ZwuCbWNoTY8krtSYkB2cStLjR3ep713w9h7XxBJug3",
  "key2": "2vSJY2eE9JH3QTsfL2aNcDeSoMx2qczKv73dzkpbvHxJqHgpxgB6wCAsyW1p2txzjhmWp7VAhLceV2xpHx7kovnx",
  "key3": "4xEAcrAdJAo6PW7K58GRb29d7QvfABoYqSakJxeukyK74wG4osAmG7u5Fe3og3maSDPzWSmjkH8f7fxiSJpDRefz",
  "key4": "7935nsozQ2icU3L7x5r6XPK83bhfy2rQMYVFvcqp61fTureSngY99nzhvA3c3RETQTw9Qznf1cxDks7Enqyd3QG",
  "key5": "68qufsbuHf4wCFHp1zdCNXNHPEqJWq8rRrTWZZRZNkFnjsbM2sR6pszhAUMrDAbku5PszFmzz5LTLN2aWv6Lgju",
  "key6": "3NmcLipm2uapCD5Pc3yQ1RSBPfvUwLLK1tCobqurzvZPAsynQaARZPWURtgnQ4QMLS4iJMorj4GFNcC8CbKXwkfm",
  "key7": "65jWWhf6kHNkDzSvs6269cnqcpmmMrsjfpfTj2Gh5izGV2cM6GPoyLTYoZ2rNhqUQ1AZibGJab2sburuPs6XeP2N",
  "key8": "4wAvXDMVzbudMDivviPLgtKNSTMTVRVLr6JYqhCCwwiCexFd5DZZCDSDw6uB5cNN7L2DSXGJoNe1fow7qXbzzxT4",
  "key9": "2iFBFm6ocouV2yUFWLbCu69mH1onYSrPFn8sLFvhQZ5Dau7gufNhiRr82EX5cxfjvfPc2kY4hfoJsyRXDdJpp8XW",
  "key10": "9VW88eHrJgCxKJx7vZofbGrNRDRWJdA3jobTNQvFMPpboVEo8CMzJwv7BGDRKc73etQuJtLPszMEbVaNircWy2T",
  "key11": "64YidCh5RXSs197n1BYdS8a5tsqhHjvShUHcdRbQnVh377AAg5Gc8WYcaWjL8ygV4ChD8t775mgjzXzmyY86cCNr",
  "key12": "3DBsZ2S6xMJzuu2rrbJXgci1YYGZy58UEUwN6MKHLvhUQ3bACPymUP1f4QrAq3CSX6JTrfXxvHy6HCKrrqyFjLuZ",
  "key13": "3iHGwG3Zq8NH71YAUaqeZJ7oVg8ZSXMbEqzA4ejEzec4DdC46SDyLq94bAmrJPwo1jLxKAKSr3xVSCe1RwD2ShfL",
  "key14": "434H2LMnMxYpPEWP6XPiYTEdhdfzd1rABndTuhti2Xv5kTiaz8edtTVf3fW95efRd8fhDri2gXceAN5qPPuKJAQ4",
  "key15": "5hDeG1xikHWzP19CBnRgKRUdsb11RDUNgbsUeeCKWB8p7Dex8kVk9MssqoYmEa1e59uRAVaz6daxsPbvosXHBC7r",
  "key16": "2taEZXymYkLGwtD4DihumB125v6LCwPzNyrMjWYeZqEWYXKLSjoJR5m1TQPS93MNz84zWcjW7zABmepQs96EYU5o",
  "key17": "3gKt4qAgmUbZ2LKXMWRdWzAQ6boyRcGTFEHpSammDVj8Zggc8hkr7SqGdvLYc9WWsXi4Y4d9W8DFhMR5Y2jcn5Jz",
  "key18": "4hWJ6PoowdsZsbBy2APXq9G5m3vpw6nZtVsWgXSJ1ADVn8GwzDr3y6KSdxxaupRahMEi1DzQUnSBNUjnRdCR1pvL",
  "key19": "5KXVpYk7JR7H5opozMWKm3YCdEqV6tTUav2AjGWFYi5VgqREs7rEL42hTLe1ui1zNhHyRcu2gEhCKfPTEChaStmB",
  "key20": "2KbNWrGUktsZBFTBiyjGgd7oV39ysHdjgGzMiRLDs5wJApVbfGwGMXwpUUVYABGMMKt1uk2Lwp8ZAYT9D6z4sP6d",
  "key21": "55N2JWYZY9XzVNbKnGMJVTZWYqtyCgzY1oZooKqLtSWDkJBqM8AekPE3DPSSBCb5JXkqC8duqjacYHSKb94hEo5h",
  "key22": "2iFEgZpwfKpNi8kwSVjoCfwU6Uia6V3DFUY1cbrhejb5rVTRXrsD6DMbSP5Ykx4cxH7wUhpkXKyZqZFJes78THnK",
  "key23": "2xYjZXZsXxW7JTe4fLHuBVg7j63uh2R3pJq26awWUVFvCQZH757xTndaih4mH1LwP7o75LXymAPZcPK2H97aAJ68",
  "key24": "2D82uosETcApCZpsE5YvR8Wqf3dp3XDqrjQPBKQZAReZw9DFR5y3Z8pizuQWFcou6RnWf37AUSnpQXC1inY1adsc"
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
