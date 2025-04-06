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
    "4hJVMNwQ3hzxsjadr4MgD16D2uPjELh4apyUdsesnvSNsEK3CcEMz8xEVQ4zzpLWXW9FVDry71Ke6j5B74FE6Htr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35zGDM91Uqqep6yCD7qPtfHGH1yqJYY1GSv88ViQQf8n7dfta33YLCyGNipJZYoTeBS1oUpvHvxEaXk4M2FNwnXv",
  "key1": "2yJ61s6VmJJLRHQohTV4u3PRC9fUM8tEEBbpZWRviqmKJ24DzDQpH7HpzPD7NN9FRd8fcGrLZ2ppveZ8wtoVG5bB",
  "key2": "5umnfDSgpQs8NMNYCHvwSDATuvLDKmdrrgnC5RY1PBcQ2QRELMnJNq9Qbserch8umQsQnNPVLbT3c4DBp8dbgZeS",
  "key3": "23eifSCik42haZuLNqgvVTZs5Q8SK7umPqQhdqXTEX3hM6M1W3X3xdM8YN5daDHqpbvkG2HQ2fqCZkSUJCCwoe8S",
  "key4": "3Nn2QHQe9dVKouywdk7eFwbnVmBUzV94hF4GiZj83cx31UZDCPfnD2WAVUxsjrZ9PKyNeMYiijTzu7pwj1CDCejc",
  "key5": "2nEhJttBXsAF2GoWnENBAzrvt4jcGbXMaSePhtS928bNijvxZfsP9G76mQMtZG24N5WVNUe6jW8xxWa9LqA2qK86",
  "key6": "4bubYmtsuhz3bVing7YqtMu2j2nQcrxJAfC46EoyQ4fntahZgozMLhDBK3MahcD8pqmHAYikd1TsWP8UDTa6rYtq",
  "key7": "42TKD9W7vuhEEXx6gbFEFDD4KVfu4tva1FDr4XKeBwhkbMLfdC5Zr33mGSh4LK1ZNr9oF22j6UN8wVM1LHdzGw5X",
  "key8": "5MK7nGgd55dYcWTd52gcrpwQtWzgv3Rpz6TLGTJa6fHcKzN4H16Lb2bV8Qv77mAX52LW9tvHP1zRdXcnWtFAy5e4",
  "key9": "zvhbc8q2a4MYgcidCz8JcwKAzZYPkcbAXqXVXdj6hUhqfQsn45LSU5aA51z5hpoRbSJTc9xfnHemhrX3JWJMMyA",
  "key10": "5t1FYRMPJhXHWeS7Zrow5HiqS8Vd3BwEGg2wzo5cy8hqX6Z3Digf3kKmTkD6WpfoLLTWNKMkaJcVYCiQU59Kcdyd",
  "key11": "4GGxE3grjEj229qqH4cefYpMExMCYxzCiKpy25EtdhVdkdyqBCNeN2mihYtDcS5iiHFXJYeoaBQbrZVUSJsaqZSM",
  "key12": "5xjMSUp5Eb5K3y1ZM1HeATouhRvmddTYAJ6B8e3VccqbW3AVfTmbDYQCSdXRZsXE5gNc26LSvaFxmo6gGbfSEKXX",
  "key13": "3MooXNcYuKk1wvA8oBGe9m2VKmGQnYLFLv8tLBZZgPd1h7PTnFBqBVLaLL5Bd9AM48H7p8egiX23tFr3zTEibUPy",
  "key14": "28uT3adfkZjva52drhYrN3pH45UnDeFgdeRLbLLsUe2sLHro7o1padB9PYAKXuLEKgXThP4xQqKNtNWSm7fpn1yp",
  "key15": "4c51kWCF9jjEnyhtPNTxTJfUfHP2qzHR1BiWE1MybCb6aeZ6W7Z8Go2ZDVXr19E7vA2q4YhQJZh5ssEzZ9CS1amb",
  "key16": "5XoXqfKRr38njTctFwiBjMTbM7KvzcLKH9VJ2GuMsvHAorRBd7uvZQGjYJQnuXdqSgixcMu27q7X7vv6ngWkR26y",
  "key17": "34uC6Jm86aTScvvgbt6raxseJWC4BrdV3oy9wU6dSCRZ5y5urHzCcuT1y9MhZ8LgPAmsjW991c518QHXovkw6Tvz",
  "key18": "328krs8BSRwtKmCD3nB3w2XPbjoobM1836GioyvcTg4JrptUG3mSt4HbPmvNDJmDavUKaUcGy8fJpNc3d4QH3X1f",
  "key19": "2D2F6nvKMRfZwCoFtfq3xdZBBfcy2DRgLNRG14FSapsYPVC9C2pG2DSF7bV2hApgNWqZG1Kj26iQdme3KdfB8hvo",
  "key20": "3WWJxr57qMcfQUTyc6adJxUHtoXUH8py8BSiB9ADpS3mQMBXAYPPcZT7wUvSVStzHmXNo1282PjoqGwiGscRrNyT",
  "key21": "2mCWkqwA1kjxYtaFN9YDX8DRo62kCP2fb8xNTuGTCACi1naoaEtqG5nVh24YsT2jNk3S6xt1rUZoM8tewQyvrB8G",
  "key22": "3EPvoLHxpAXMYv67zDuRKDqGV2pHBFzH5mWE31rJZ8mxZrDFs7N7T6634RnW4mwUD7EgdHU2m69dZ3MTRge4PciQ",
  "key23": "4soB3nJAcE6dPy8xXq5AV6DuTeA4gXCguBJkhM7oA1w3MXSDoX6QsbfbQRkWkbkQggau94uVnhVvVf9VfUDmCQ4x",
  "key24": "ihMoCFiiaxKeSeUmgkHmeN3CjZsfDwcD6ui2D8TqbhT5a4RiLWZaF4ShyYmE6iFmiih24841wpmdBfnrAHT7r1p",
  "key25": "3ZEtCzYJ9hqMNHvMKQTYUmBs3H3MWmqdSbWgc41azQpBFYwDHNvvfTwGd7wWwV4rNxAGDU6c39vjZNRvZs9ZaXJ",
  "key26": "5G6mAQvrwDhYEDr7ALi6TYcyRSH6HVhMANAWZ1YQ7WF9LR5GxVoTMpo78c3jopJTbXMJVfgEMS1tbFuqQjJxFAU6",
  "key27": "4M5hpaq9uFTFKwUotgST7jo4yJu3i2PRDNYnhc5wciP5ghxLECbNZHcKa3tE15gR9utvjFwJT95KcM1JfGktPwdn",
  "key28": "boZsEErAeutNv9VuXkdTeht9NWdfzbGvswvcmcQsMky9xD9MuTvH9RFmfA5vjMCFBtpuFc8hAV3EaoSHPxSrpat",
  "key29": "gRbYmisya2qAPZS1v2ZPMxawdtGwPU1NjMVcorRyAjktrhtkH51sXM5XypPBojHrB2v4VgDYSRWuGgu49PX7ZpN",
  "key30": "vpFqMDHD6UbVTc4J9xVAKRYQLom4Phg2Zz4EmvJgw9YYTbPnxfU6dkYb52nF468bxbyTLKZJkViYFoGkEHevcBv",
  "key31": "3MHAWTrjZj7x39iSnmpz7dxeK5M7qRownekpiQ1NyEeaM94mQWSvCxnffeK1eDN85D9BbXy8mH74bjS2MPiXwYtn",
  "key32": "4muigZnJauMg11sJK9nh3abVtyx4uTYqKEET72bmyRdBszQjGWicVfhyFLNxwoX43x9JdUJ6ArJtoxpx1Tzfi3ae",
  "key33": "5tJnhH4YjEQxWWpVwh6CMfduXSf2cMa3ZNjrXryy2WsunYuLFxhnUaZKu7xfUYUqju37o8TxetMFc4myCsXq2J4B",
  "key34": "c9v2n3WcACYRzHLt2khjiMcN1nzHAHmw8LH1VzwhcKX2rm53vZfX7mGPJLyT6xF7tDMe66DwihW5PBaBjqmzXdb",
  "key35": "2RgxhwiEFTkBdDsXMzh8rF1e5d9PP3gxifUG4THiFCeb95jQCJ49VD3ksLfcCinUP7ACa7KLi4Do4x86FRZ95LeT",
  "key36": "24SX3tBLQ82WxaeFBpw85ABdLVKSVUfnMhLmSFFbh6QfkvcZyps3rbhX5Ga7TuRQekSVCKpwCUoM5gLNRfB16pwr",
  "key37": "3tBBHWagkKUbisfp2nKGrfuGT8J4ne3BCy87kqSJvsJeBjHACvBND6X1EguJMCwpTa74Rg9GDe4y34YV4e6jrHQs",
  "key38": "4tnhmeM9wy5tVVMcBciaMn6a31GDuKQ4e65ce4k8f7pQtmw77gPfDcEjpVMbbadsQAaidbwxLaWqRx4bqMRttES4",
  "key39": "2eS35tu9VxKhbDJZh6vpkXVxLMUysgRKpq6rtN1ofcWGYZFQyWYXDpifUpCo2fkzWszvcZftLiiPDuhwxvLDrKWT",
  "key40": "2HvY9roCJi8GMtqV5weaHoJT8ZjWJnpcuyFTN2xQ9MSZN2cz2zRK8rngJoM5TUm6wRsBZkpfuAsA8H5D1BS8c39",
  "key41": "63mFqD9tAAk49GAuULpi6YwWhnJkET2mVzewMKZmrs44GXazKnTZFnis1nzEM4GzgHfR6Cdy9HiZrksf31LBT4pp",
  "key42": "5byY9YQiQWsQDFQaUF5g3dyhAHyAZ5P36nefQshFSpkTUojP5fK7EmTuy4c141okGRzvs7HMh3nb7a8yXzEAQwuN",
  "key43": "4w56YdHQT6ZKU4Bu3tv3WaGJvuHcgzyyU93tzt2c8jdqzPE7gWBp8E88LyX1g5XmqJnx79r27WCB3Eg8ZN3vXXv7",
  "key44": "67gFWE5CjxHKuBRs4ZvFZgyrjnK2GGdqaofL3LPzTphhf9x2SvKU8XNPH8wKXWm8dZ6TP4LPkJbvUNUj1gapf9Lr",
  "key45": "USQtymaTmQD1jWvNcHa6ARHrcc5sBh3rUuqWkoxRHnk3AEvCEih5e28LQT8wmXKrYVrKLrw9DqnTJaCWpAjmpbh",
  "key46": "5kaePFkm9QREEvb7ZEnUwHn4TDHAS4JbhbARTybdGXL86xc5qu2FrP69Mn4krsUe544Rjxxwoda3sZVrUCDeC67L"
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
