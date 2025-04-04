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
    "36VcmQRz3kyiYFaCVe5AhfbfzENiJLuQH9x59gL5yRxxzjMKqX1q6CyXxEyJogoApQoWDgy2eJi8QFxhY2af212a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T6QhcMJXiNEz1iNKSGn7GmLcqMxCdUhjxoLmBpagH98ye1eLP28h9wNdw6DUUTR4noAdJka7QKmHk9uY8dHBDHb",
  "key1": "4sNqJ85oLPwDjbavUmQqfmaeVr2x4XpdWrTYbQpcYSKK8aC5CkykogwyNoArk27iP8fAFCumJSomiivDfKMkeSC8",
  "key2": "4hus5sYVdi4nNZZFrJvxj2W5hVBLYfFZNVt3qRLpHkTpeLXQekVReWLsFLQnLk9YZ77YfkijxN8mmur8WRw5Xjvb",
  "key3": "HeC4UN8HRWFiFHS4KaSJVPuTKHySHagfuwGQJbiYDcwJfWH7zXNnbdGjRvC4VmZquoG2ntDKiHahD1pYHbFPsSw",
  "key4": "5t1GbCgstBPrHUFeoBKZH6sbPrztbaKR3GGX7XdNbTsh7DRewbjR9tARwmtkYAFoT6kbEJoWYYMpHHjKnLpE9D76",
  "key5": "4Zfytc62RcHRzxZLuJtHQqmDjmuR26Xa54yLhQi9DoAHRvhuN3PZm8b4KhYA1bEdTgzKREpqxq6G2guNvjU9auac",
  "key6": "4gtv8jP22QyoA6AatXNLL2CKKcQcWoSzakEpc9ADCBRheRjAyVZCyjU6Gor9XUU3nSnBLEQmMShQ7trGLUxBkQGw",
  "key7": "2LqMWa7JQem3U1WESBrteuFL4pwAHbtk38njd3qznt77v3Usp3fYzk4tJ1rWXCzZVxqaKLnFkaX6SE5vGbiuWX9w",
  "key8": "B7u7AEYo9V65Y7E1Z8nNk182HsuunsUnaVnAUeVV5GYjATaRdyjrUGazu6syvo8DkKg9jBMUAvirV1tFuKsynGC",
  "key9": "4KVXsg5RFRYLdStso8NKy3BMSukx8dgMciq1LjeGt3DRJXo3nA2p4qJDui81685AnNCW4UXTHoCXAht3EHCE39Xz",
  "key10": "85FbccTpa4UyXSHqRbZqx1Nv8Xbn1onHSFC8LHnez326NfMTMtzPr7bVtuFbU3oPbiv4CSWLyQAXTqTemVNcmrN",
  "key11": "vk1rnv1ihJhsiMhip58shMS6Tg8ib6s6ikuMxEJL9G4yEN5fwtq1GDQDJfvpj4fERD9jfwR8FeTdeCVCX2cHLpy",
  "key12": "26F1ArnXRMuFbEvVsdSJ69r4mZ9r3jXb4FWHTdJoyyTX3KWjczmo3DtkmgcyJdLcG686nCwaku1NJf3hY9pZqmu6",
  "key13": "2ouPwUhyvmu5QPdoA7JDHVuvnyZ1CUSmbJ4Ns6dWMPEG9xhuzWjGqbpEUhkpQEKMUMmfjXRrc9LFYXyRG4sWjM92",
  "key14": "38kE56BsKJuUbpfy9zztTcASqmFdicnmEDmYLmbjyX4XM1ioWzg5uiUyGrfCsMGHt77Nn4tnSCTpcfZ65iKdMe74",
  "key15": "4hg28ssC7QTr9vgvs855YrT4HMVJUm8u4BqPNiWdfpJo3mBAJ33Ch3wCom4mamAtusB4xvbaJd9KFcedVM2Tqfhc",
  "key16": "5AvxWBKnyUWzV7MS74x6RCA78a6bjnNgKks65L3x2FvNbowq5JcPEi26wj7TGzCdAuARt6ZNSQCnx5mxAifxKBPJ",
  "key17": "KmjvukDviZ7rm2ujR4pcYKxjzrxNKu22MruZxAKBTQQFXqbz1GqN4WnuLKz1iKKnPNmeXSrusx5mXGrhBp5bNk2",
  "key18": "3xu9WNEMMtXDZCnzPoppepSPTagZ1yTYXxDYE6S1RPnq94yqZwf3WEDWmvJ4QGDYrq7XH5vQwH5k6tufwkTEzfLc",
  "key19": "2jvWnKgUPSfNEmieNhsjQxWeChRmstkQfoQnyxpRpW5xcRjRhZWG8ZVk5dtR7GZhHpqb3KHkwUqDEMnmifoQdHQK",
  "key20": "5ixHjRc71B3jrLUPtB1B6LEDfw7BwFftzoaUW2vzCU1zYaCHi4Fe6xrrYptFm4GvEpKzVRipwDzGguZa6QcsCwE9",
  "key21": "aiDcQeVxb5a4hRK7F3GLkHsKeB3xT4gaBDkqN4ttrrr5nnYBRtNMAzuewy5RBgHwrdbkycaQSzgErX6cvtbCQEP",
  "key22": "59wLm3P6yfDF5uetkeqUaBFeqBcd7AGvoq9ui4NpG8Fm41wW3udR6CzxNsmSFvMpmvCMoynfH3EWQCjPYXd3b9RH",
  "key23": "3CXoR7y3Vtrfp4GjpMikUK3TA9HJ8cZjFWZJYG2gtZgJ1Hpki7VhaD9DMm991uYAGurWCrXxkKjxKc7df6Q9tjDL",
  "key24": "2fEt9Ada8rWj9cMXm1JvF16wVzf5AE2eEdR66ByfmQsksQtjW2TUmdPSr92xfyh4abr2Tg2yTN6nBhMepP3nSqDg",
  "key25": "97sDP9hLEfqkbYQpbb9DjPvNbaCSAjam5zHzRwrKDfdXoNzypjoTa4GWKMUNDR6vzZ38YEQteidjWDPGNacprnZ",
  "key26": "32wvhjSa6M3UPZHWRcTY5NNJe3FuV2PMRghPNSDZMKGrsDCmPUkW9RFCa2157E6vVMz4fhnDi7ZHAPBkM6pcPmKy",
  "key27": "2KNH8AA7et8c7p5Q2KLmQpQuxX4toPbme3cfR8fU3DosGEE7yzDdoLohpaty3LM5vNefUQagRtXanbQaYSAhxJRH",
  "key28": "3grZfzKDthTU1ykSN9kX1qwsznsqNgJf3mMBTKHKftvPYNAeoSSpuB3gecWvV5G1rDMbbQWa7woHysTNgsKpdhE7"
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
