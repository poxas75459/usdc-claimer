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
    "5zNNJoQNhPTvPrPnidqgGHNPmQXNYUTsN7xca9hf6p5Y83xmpGymHDzQirr74Mb8pb4KSeXcS1zizy6mY5T9aYhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39UD6LoRjvFPC4CeVj2zv1cq3rCvQKtkBjTFjmr3BFiCyeRZgWxvBhEbrxqaLi5JHEWEXsSkberMwM9rKmLmq2np",
  "key1": "4P3RXK5BbuxHXccg2JirGR5oQUyTZhU6w7MivxDwacvAySFxhzo6ULRnnmyAVMN3sZzhEouw2ANMn9PF6WTPJ72a",
  "key2": "3LQqoScGvMKUevKsy7p837einCFV4Ja2LpbTYuMVAdCCp43xwXoPPi5XWFDxQQMpH39d87vjutJ7NVwnZQajEng1",
  "key3": "562e2db7GQBThrcVQ3wu2RM891KgP1zx3Yu3icvjyLsPYnrJb1y2TW9LYc5ZrfFupYMKyEzGijNNeBrHmj7xR7yD",
  "key4": "2snccdK7sZnzEtHweYK83422YATkyqGeTA8nFpH1mCbG7LU4RPHjqzJJ2yVqdvWBdo7nzfcc5rYPDBtSu4Xhbmf5",
  "key5": "y7Ftrv7pjGp33h99rLzbzPC3jeHLiSkfd9YxtmmMz2DErhzUc4Rj1T318sHdTMEDyumJGKRUStjKC9yP4Y4mWU6",
  "key6": "4mNf1Rpsv9234WuYV1GYgSCYbU6vbV8fbznvjHAL4WykiXxMrqoyuu3nDc9DgfQDo4rMmnoCwp6JcLnprjz8kqFB",
  "key7": "vQJbizFiUiRJvN4fRqSHySwRUCEjuv4F3sYQRM3nShiVLRV2UUkeqssMEvudaRAZQS5W5EwfcCcGZT1cN1bRyGY",
  "key8": "3asuNAGK5i1dW69ELBMfwBZyYkjnkbRxNEBsHXWt1eKqcfQ5jbtcAMSpAsDGCQYFfDjVsFNdqB6Bxineq8caLUL6",
  "key9": "3ayVeyasKgmkFoRXAC9wZTCp9Q2ipqE2tJVSBpb7nPnkKRYmgUXRHVHCjjzGtWfdK9wpLJBPCxdfGUK98SDvuhPq",
  "key10": "5kioxHR54azuYRZgQCmVPs4ZWsfzdukuYSaP67viittjkG5LTqKtoXezUykyy2JCXCpViCJtovs1PxAq5GTMkUVK",
  "key11": "4A252fbPQs6n4y12gE8GKQrkbvzh6oL2KzswfQpNvCk8znCySZdBWXGsqXEdccu6G7wJVYxGyy8cLMgqXqhMUK7y",
  "key12": "4pdA45PmUspFJexJjdGKbaamDowYcR5qNUYMyN7qmQmUPYdtMZn8T7TM9TKsD9s3hkBQvJTfWLEWW3XQWTEEQa7F",
  "key13": "bfPd5nrzFMzBM4CB1Y7vjzpGncAULMBo5SUcDYW1pgzQWXQzeRufHbizx2pVEVQwaHrZBVvsjGq8BbvJXkN9qr1",
  "key14": "4jn79YiS3LH3NrgsG7PrsXkAGQ2w2mr4AkdBWz1S8gk5c4A9X66iJ9ZtAVukjtbVjWndHfQrV7vxCx8jTT2pJj3a",
  "key15": "32iYv7vdCEHM5wyF2oC28PxeEWs5YL7XcuFg4ZwiXnt3RiJH1TySHCmhUABS8DXY42ctH4nioCxdwtZZ1gppEPNS",
  "key16": "kj8pnb1pTKQxt5FRkGmhRfNGmCyUKvJGDnLT1SpiffQ7KY7TN9FcQvtbzKXexQgSKgr9Tg7WaxiLTPpCCRBrffX",
  "key17": "41bpnePzZdeCHSZohft45CJi6PuLbLqRYkpWDYwGpz76qm8CUXR5tCtQ2P5QEBxyy3b5rG54BxekTiLWaZ8q7naS",
  "key18": "QLaDrQohnHT3xT8zHdUQwNZ1idwoozCmpYohwwrZJCDJXVi6ub6GU8mWDVJWsexSB6i7e11QcUqGSJYHqmDqEXn",
  "key19": "29EvgabGkxdx98ZwYvCarY3dThw1w6DWi4ycDKb2mmwrov3ja9z2Kfz44KgxLbGyzu8zDJgmFf2vMhcWywyrpjyR",
  "key20": "5ReAuwxxXdGREzyBmDA9kAyhSZQzJKCWCZh4iCY7hW8Jag2HT6HFAPjgFQgwm25YZqYgQj2bxe5VQJLwuiMQDBe8",
  "key21": "5dQNYbosGQ2mkzuFUbsNZD48dn75LYDe3f9ADq8vMG1PcgEUm53LA1ZL9xhVvNrtQ1Xv3RZwQvgttdEoohBTjb55",
  "key22": "5vhXBWpXTXVzQdCpyyKvVVCZAT5F8NiJweoZnMSPRdvFHN2kjE6p56yqZs3mUURBLQhFnkKijFSXbYgGVoGj7A2T",
  "key23": "FHtmMbVpAMmhbcnERrgGJfkbgysKa5bRCVD5JHMTjGLJ9ixfa3PYNYcAAbeaSz3JXB6WZ49ZUAXB3i5qVM8smTt",
  "key24": "35ZkDkzP8BMSUBVSGWhCD1MaVj1BWCHa5kDSNiGZznFMJhHYAJVaXWMQTGwXMrXNiVCLXrZsvmuwVphnncQv2YsE",
  "key25": "4XCubxkyJX5Zu2jdFDY36BHrbTLjpMgJgbHxdpRGQkPuKPJY9xY2oT9ScVsxB4BmbVAexwCMbH5yAkE1iCm3Zu8b",
  "key26": "fYVVU7V4Sp7X8ZGtB1Bmrr5kNrAdaHsanLuySEu1NbiBFCUwTHDjqqTDvkTXK89V1DcfK2NHJKRvNZEDrV2xHbm",
  "key27": "XavSXBexdvd52ENgJfLiXxjFTaQ141p6wedT1QCaqQkqxUiTmYCE8yvyrURDVwzqeYd7pVw5E4eSSk9PyRrw13y",
  "key28": "3oxQsnGQkWzy9HAET6nzhGVgPDVsPgdZ6BtMKRfgCfXpjFRANgzt2eAVpcaHVDM7wk993R5aNnRdwpPGVLwM2KwK",
  "key29": "5WemVqapwkEBmVAeoo2tAaNJZepgMTLGyLhTgBmQXvC4AmF4PUStgqWpXXLHkiQpTdD5UBhJNy4qXYR3cxED5TG9",
  "key30": "2ApHAyvFw1QHxztv8pYRKG8MiTEEgx3QQHvpB3b2tNCdnjZnLFyQb44WzbXu5Q7J3KSNC3V5C1kTLy2aAZhGW7yX",
  "key31": "aAXvEwZxDZBg5PgikexdHwuMw3jGpkaVKUNp2xhmwaYQU8gdpvmNzo8PY8VZC5oJwbmc6h4QQE8VPWwUr6SBXqp",
  "key32": "3a6hs1qntnRS1M5bzBzaQ2iXVbdUAYC9HCXgZi1dhSZzxhF3JG1XRrNuSmL9eNsj1EcqnBBn9RMEzoDEteJ7BBGS",
  "key33": "2wiEa35qyKPrYuSosCfTmZobPLid2ERyh5TtEpgqCUCuXMBLh5hcUxEffPzZn1Utz1wFrwk8Z9ecK76wdxifTGtb",
  "key34": "25Awv1z35E1c6vtFQ3BDMZhHFJ9qKUgxuZ6qW3yRc9kArqmcw9nAFKTy7hrtrMBcqpyrjgdfCGoaNf5SKhy5XkH4",
  "key35": "5TJeVMFy9ZybB8rut3fvw9ZdjKbEfWE6VGp5MJD1S6rbGqzJTAvvF8K8L6XjTq2zdFx1NVr22rM9MUP4jUYGDcmJ",
  "key36": "5haF3cgFGUAwNJWYwDyK3PL66RbNTZdCHogupM1vpuP87G4yiFS8fLANbiTJL1B4uXEPZb9nwJqWRLJreiSPrrK4",
  "key37": "53AEWpcsfiXEMouKrMyEAw77VUiPv1RRNUGA1UFkwyUB42WZyaxTxJtmBuRxFrqY5BnnzN1fyqTjVqFZTtcxp8tH",
  "key38": "4UbLqrscB3zLhb6KG3VU3ozQEygJ6w3q9w6E4Y3VJd9PkDjaLiTN5FAfK46fLZYaY6Cj6BquGQouJRE7cJrjEBV2",
  "key39": "34QpCZ8RmQh9gXiw3dQSoeG15SVJcEQEiTKcZYAUJYynod1HK7Gh1VeboFfzGZKsTxbje3mQWahUgZEnTjGhF2fQ",
  "key40": "25AEe5kJ7BsyZKSVd865Rv823yyFMSxQ7fqwo6Ad3WzNKLovcRnmMJD76voLcVATLAUuP1yLc2aesqYN7NmaXq5c",
  "key41": "2z73ARLNAHJ2Njt73NTVKjTFdDGjBE5vhjRrx6y6ecNBa8ry6qnPnDpBEVPaEBZbjyFjYcfBjZaqjbgL1np5GVEP",
  "key42": "4rr6XbLxgXJJDAGg6Rt2JA5qBuWxkBcr8SL6VrBPRtC5LgNVz93Dn7zhpKpxQ5DyR2Az4ysBv7HSfJutkp5yKa7h",
  "key43": "3UcuDPZJPGNydGHPqr59ojgxZ7F3zKjNC22Xo7A9GuDR9c7aFo5UEK5rEjcnouh8gbTaLRWffT6m3W6g2LLf3Xkh"
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
