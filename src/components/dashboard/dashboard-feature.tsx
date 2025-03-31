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
    "5Jn7wKRJJ8EVsKh8oM9HuToRtLrBUALdt2W3BR5kCrSBBwc4hMqfunbWF2jy1aL8DmUrRfGUgwsLtfqVLEYHWUrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZN2yR9ZzC6dAqdN8J1Kxx85Ed5o3XDBWmooin15xFkXkdNfexPR6vGbiE2u9iCHJFtZHCecW1YSBM8NEVThaWiZ",
  "key1": "3SDdbfGE5BDTVBDe5qprN7n5yqibpbeB27rqJAjHf4T65S6vLy2DZbFci6iBmyU6RbdHfBmHqh5BcxbaxsRqHSQ1",
  "key2": "3xA8ubohnHrHyRENvBNY3GwkLzK8ww68eFcEbKkfJp1KbUdekX5xFZtjJFRAPLg54bVk2E1NvDVCEZ397fiDkdn1",
  "key3": "U9c33xXPCebDwq2LxERJexLzg4JicVGinMBz8sXtqe1RRENk9CD59jsLrswMtZLEd8KsNUXDwQ947zVahh6RK3Q",
  "key4": "3P5uq74SYXCJGzmso4ELpuwx76NM7rStZzgJvm19qrqcYRVshAu9NJPVAjVLC3TAckMbkv2wrX31JVQw8R9JwhQF",
  "key5": "3G4YUtyg88bj2fcCG97ef3gKmktP5mPoDDBNwNtUyivE1hmW1PHFCW4c3RMpdeSPjiQv6szvdZz6wVHSLA8NiRx2",
  "key6": "4A966ieSaJDaNZb2XEk5qSkH7uB413KAbhtkQvtywNP1EqiErS1CF64wLjct4GGyvSvB4emwWGFqtkoW7GSMPuBD",
  "key7": "3PqivbK12NivXLdDNcQ3bhVrpN3i6YhDW1CWq7R3Y2uwUgTciEdzhHkKDAJ6zfcoWQvaKrZmnT6V51i4BWBgSTDC",
  "key8": "2X8KNzoQ9rgKS1pLU5bSirQWwWmPMEFS7FSfNuzdApXus9vYMBapLyr53qSmVNkJhgvtRcwuGdXLEfeseFS57cyf",
  "key9": "5F5WyqfaTiRspwvvXqLGkkJ6RXzyQYtdrwAom3RHHnANqr2f7QubvmwvwSbBVNzpmarox1BNsw6CBwLVi8qf21Dd",
  "key10": "3acGAXciTPaH5dqaUA9LPp7iDirufMpSb5PhGXQo2g4HWbs3BvuKGMxbGjXJujvjAWadmxtBJ6xuBa7RHH9kKJTW",
  "key11": "4VJwTZm8qezR8k9VycHjSKBHWx4y9n62onCnAPprbdJNJyezjowRu2iwmRKiNdvofDxrroCWoiUcQxaB9tjUmUjU",
  "key12": "2F6N7RYka38nyPAG1aYAr6KAWXTRoTfVKJcwZNVi1dtpZLeSFfEj7wFJ3QeSay2qxQXj6uSFUpdA1rrUtnbfDdEe",
  "key13": "34dSt6gC4fK9YAuzkf9ScUKiwTpw7T7Ea4bQiUprkwMrajQXkSbBHhtZvBXaUVppL6EHp7LG5tJGQchoLw3yWFPQ",
  "key14": "3ij2ariwV5e2Mn5ZktvdVjtooDiaACa5f5R9HWJjHocj7FdcEmrtbpnmA7AFSLg6uC5NfNJpFB7vQgJLBCNQXi92",
  "key15": "4o9d2Qu465YoMPnWcNSW4hVV8mr61zKFJJZ4fvk9cVpiekgqbGLdVHjqcvVqn8BccW28CBvELG4E5nHi2FEqD4Pv",
  "key16": "5KSSUkdQuX29uYDZexL1aAu6MeWmTKQng2msjSEVJ83b3jZNPrEgLzGnoSbmm4UT7RmgGqD6KGTpVX4zr4rnrHK6",
  "key17": "4iYnuxfNJohceFgUvvegWZrEd2mLwUcTdsiCvWFSFRoPVf5RqtxYUovYyQSLrQdJ3nHez2ZSmBiMMgDYWcnf6Z5h",
  "key18": "QBJt3bu4KFw5vTbP73VWqubFv8o6mVHRkkJabodepxd4xhwCKXWGkY1B15aZGVK5Q12uKGbVR9XMPTAGXnEVAg8",
  "key19": "fdJEDCnPGpF3Xej4gEA9h6Bk3t5EDNWLYgZVLfXZ8rnwwKiutjzWNp5vxLUENSPWuaLAVkvGzuteAFUDEDpixmf",
  "key20": "3u7K5i5ECEcTWACdAsoR1G8afRY8CBYHKSGEqfoK4cf22pFZbXjSoJqvVJ4va7wbCTpq95wCxp5CobQauG1Jx7WT",
  "key21": "4b62ajTyCvCtjQyLkDJQhF6FfYwUC5kXD2z7cxkHx1yvka9gHw5Z11HDtWZACfhZ7JbkGQHTRfMSKaXNUzkPZjJ3",
  "key22": "7S1TZQApaBG1yUhv1Fv12GCYs6c8BzfpHYwHTWEr5M2xYZ8XE6Lz1ofwZdb6y7j2LPvJcxpKTQ2JppaKurzLmW5",
  "key23": "5A72Uz4vXsWsboxcp1TDvnMUkCHk8rEYu5jdjRrLafG9JqDnuYoqmTZ5c9c5siKNSHqaN9qmvNQvzQtsdwBjkF4W",
  "key24": "BvNnt6D7MdtwXwGD9JzKmRdQinGSaxr7upuUBApEbvvxn8RRaFyAZ1eqU9LG1baSvzeNBanbFmRm9yrQ9GuUmqf",
  "key25": "wJiPhQ82WTQbjet3uLqNJm6v3JUgJQPAX7gkHn5oKWy8puNSWG3xwun47yfCoZQM1XJZFD3gFkCGCWe5rBvs94C",
  "key26": "rpzHGYETKMYZDqxYB11HurnveQGbGLfrwowFbXrzA59gPVVWQibCqZu6GaGbesGm3BxUJLiXBnfeA5CLMPoaA1k",
  "key27": "3LmPMDGyWK93vRdS9E1LS1nEXKYC36C8SRyFGJwZKsHsTvBAvzpd5rDBowcgQ9fKfGbvVRcFXfb3cn2eK2H9duF3",
  "key28": "2nPiSU16EqtpeYDHBjvgYAWCqKZnaM5Aczg6VsisWiBn2Bq2ms4rYXjQJAdiscPpcrv7foLFbh1qnJi3TvXPpdmF",
  "key29": "5iCu11UtmC6HjCpsoD6psaDsW3ou7GTQZeF1zYpYbj6QjAWSBk43Zmi6b7Z9XhEW9CyQf5r3homMRQuSWsauD16z",
  "key30": "5274kQA63TsFdDVte1S2BvGiV81pd9oTBze2yy7YKCkRPkcq1GEPCwuM8rMdQVY1BTseF82Lv5Cp4LicPfULrMbZ",
  "key31": "39PFP9bKGs6aaw33qkPMef9f9SE85oMa7Ksu4sTaBHZS2nuxMfriy2UdgiebGRjie5jqGjZH7h7EXDYPgLqZXn85",
  "key32": "3Xd1keaseBQ9dAHjurk3sLG2viaye2dWTtsEoQN1YkVvkCYjmGLmyfiJAquzkhEKtpCU1ErQo2VLBd8NByeLLVxi",
  "key33": "2kniufuK41LaQpVDgQGXcvU5AHLR5EcnUsjQwCHh23JPsx9zqkNjVaVs9wc9GWTFz7TeAPCtTWbXDmjFMy2fXYSZ"
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
