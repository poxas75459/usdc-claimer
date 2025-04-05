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
    "vkoAsc9PQWZ2kxG9zMxtBdzaLBFavMQZ4dLNHqaj9FuNrFZxt6gxsekPbpWyfvzbF4f3JuUGjt3i1Sogy6rNVJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uSByPNKBNqygGjJ7YniqU9F8pJ5kpaNPj3cMVS2wAdKve2NmU6Rzsg1R4jwCVCPwS4ydX6zZrKbeB2hjVBBpQZW",
  "key1": "2P9nAPjiQ2rxsQEz5AQn2gJES7XhEVUK9cPei4CH9tZpdUjwfa9cyLtHwom1mvzxZAQ1FqZqoypECHHvAX9SpMZB",
  "key2": "5nimDeMEWqRn4xtZ2iL2HAiG4ARPz6CbefvHJk3L9Xh5wcbeUTYGF2uCVi4JNCkXHtdgn4fjJioLYvnft9F4YNHj",
  "key3": "4wPF74fryjyqU86YqVAQhNAhdXf31B5FbWU9w4Rje36u4s5KrSA4h2aUdv2Dn4UvnX9tccobd35fdZ5p7o3oyRey",
  "key4": "F6J5becXyo491XQ7mZFof9oGo9hceTUJXowEVjXmKRnpEmoFWMYGVGcLdh3gtq9LiBGbwzjogFearKWtw6bR1mT",
  "key5": "3gMpmA77a8D2Mc2e7XNnnJbJLUg1M2zyWKCk425N5KmVCyu8ZwDEWz8FD1fSCJhsqueRoAWVyauRdBVB92dp9wgW",
  "key6": "3dAMRHKC552oqgKUGEsfksBf6DfhmycrNjuEeTxZv92AWaZqRzYcYKXbJjPypaxZi1hYvEYo9XNw1C8dDyFHQz93",
  "key7": "4qoT1eftjt799y7du5MDVGN8E7d5sZ9GYpTFXLwuK6e9tzJ75H3EsS2sHH5HZtiFMiVHc1Dfxj3rfbdLVypthiXK",
  "key8": "5S3gJAjbquryRz5Jd7odvXHS8M3u2YbrXMhzW1UJPvfa5tR42WwwjtukQeDNd2oUao3bdEVEJBck1hKRJXkkvaWH",
  "key9": "3TawcFzPMWLiukYNjDirg4ewkcobLquSDmy36YmiamdFa7bBYHZ3KuWAF9NSEyAQaNvdKDfm6dF5oUuY9VzodjDW",
  "key10": "36c3kmejbwe7qX9Y6w369XmrScTEaCVL4BsnHhWgvZ8L9ztLes73tdTCp3p7qi8hF4mNgTEL1txbeviiD8U1QJeg",
  "key11": "5GePxJZAezGuEQPWKdU7iKTV2yZVR2cSy9Gco4EhGyh8vJTwH541mAL9SGvVLhVvr2JSFYU3YYZL2NNJXfr7JS6y",
  "key12": "48sGZ7WiQ4PjJE47ifFUci9DvtZdUhVYb4TLJNf89ZGMfUv5ssEgy3ZVNm2bRguevNHKDh59SmLsxBr3zz848qby",
  "key13": "5Ex5xKi8FtpcLpR25SxyL6nvPtLheAtmJ7DgpGZfsvBn39doLdnuGT3o8abAVCqYyZDdtEguYkWiNHrD6ojUYnwu",
  "key14": "PFJMEd3tQrZQgcGQzckcwNkbDYZASEQmzsYQUASepGRf3vL5MhPXWLTcPedRV4F1Pwjdgm76DqSAhtuNn2zSo6F",
  "key15": "5kwYyX36DP216PUc1hQ6PXQnC9Qt8Vtw8nHdDdK3VT64gk4i42f9UmUqJteh3jw2dgt2JyknMtSPB4NPcS7a6M8K",
  "key16": "5Wmc9YE4M74qZxSBqYe5yh1C2MWJY1sto4SoQcYGtRpcG3ZsnEmpm3Zj2NMjukSX7hbEMaDimempSEmA15Yh9fWv",
  "key17": "2zsukzSZZStBWKwPZqnFRmrjXSSuHSJMp2qdF2cZPWBvmKGt3LKWvn7ELhxXn5KmfmNc57coSinKLrMwEdpAkX42",
  "key18": "2ceHhHW6McbhSGJdZy8PmTah5FFM2DZfDFmAAkESVkkodQZsejmM8bySeXKANMXsCJXHX7DTLJSG5X3XQHJQzzKX",
  "key19": "2FXJgRb4MyktcLvxm3fbnWFdaJpZAUm5sBJv6zkBfYMBAW1mphjr9hsrDQnbh6Ba1ZrHg9BS7Z8EDihu8FtPThq4",
  "key20": "2pgRPSNH1qj59mNo9aAv7TypTZ97d7cw5EEKfHackwvTSVniqBYhHRce3e4PxwNrESZTiL4CUbamuMtCRjpPdHk6",
  "key21": "4DnuLADf56knjCLPswQYMWaJf9M2yXoqgtKfJDt34iVDendrV6LUtFYc3fi8wVRBNxa6nZCnpmZua7TzY39qogZb",
  "key22": "2P1itXnj5zvXjEtzrozRrjPRVsQeQPCXfvjMUTJDbGdw2oavYgBLfF7VcT6Keq1RQauvFQBKxC5Q79A76zou9Yys",
  "key23": "2ciJ9PWU9uAZjDAuDCNKpJh6Je8tmYTNxnE7W5WPj7Wh22xSejDFAfdSHKn1MryRGrnPX6wvywtZgdkV1sBwPB7L",
  "key24": "2FaWjVBTg3T1vSRoQrXJPdPbPWZTHfkcFMF6Y5tzKPwSiEco4Y1jufwsw4ZbR7y3RTNhAmEXj3cCV5DPZJK8AYnV",
  "key25": "4LXSFHhTEeexYeyCbbUc55JJ9QrwwyGPpcXpACjZuwdLBLLqHm3ayuhXw5jRf8RTKp7JPqZ2VBapwgj9VnRZnqCa",
  "key26": "5h9bpx6G3Ri6hw4tEobXd6eJXX9oNeXw6icWKvEL3QsuVVbpkMU4QgCmQtyiixXFLaboSyTULJy1SSY5oy6BGBVk",
  "key27": "2hn1rKHv29hvJ5CFADkaTQu49qfaWQ6N5xYYnFxpB8efoq7pAfZJ3PDEGKg9DxTEtV7eA8Tw9fFAVfUdNVhwDK5z",
  "key28": "F66nDSQ4GtAdv6LmRHPBR37K46sdgpZmxewAcZgfZZgAWrswVJLZ2q6HMhjrgK3stxnwv9sQubxcdVzrbw4fkK4",
  "key29": "yx7644kjuhCDgRvJLdrFoDQGT6AZCLWwkQGDA94C6cqvexaAVKmQGn2J6XzRdDz3T5w7KKepLE6cPk5McuSfwrC",
  "key30": "BDKE8GzkSmhFVtxgrJtWpsHQdrHgBN2eqKo1pCJBtoWXKHxCVCTAy3f2xPbJX8i64iZUkNL8GiizDSeXx6eQn8Q"
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
