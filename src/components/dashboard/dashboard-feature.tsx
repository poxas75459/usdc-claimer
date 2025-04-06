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
    "JAkt9znoRyoHivbAz3wGegjWSDuXjDoxg6nZPbqegZwkZ8K3cpn5eYyEhjhorj6CDVaWa9mzd246joPxVwMU7oa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qz1NP9P8vLrdxbsVsek6dbRo45XGzhY8KvyYNs4f4xKRG2Pz295YRxtyW2zPEPuW26oA5XNsiDMkvKBdgdVDw7i",
  "key1": "3a6sZuCwyrk6gSFeQxV6xyRE6TA6y3vku8xfPavFzHj6DfTSVrBruddcYM5Nhccyg6WQDGb1tWaKXYD8RxuAzbKD",
  "key2": "rxsjxjHykM5TQ48WgK5WpnamFekE8dESCnm1x1Sg2zsVM47QHcbcPKahNffK2CA7Ywd3sm9P6cgDvz7htqs6FGE",
  "key3": "5bdJrUbkzQNdRHBewRevGXMV4ySzzr9gsimkBEXheXJaB612xpVeCzVGrr1ueeSXCzckBjmsoS5VaKCGU4YuC7Wk",
  "key4": "26ACopsH4QALw8gT49KxyoAnFjvkegnWLCbWW8vG4fSVbpEEWdSd7GVHAkzKk9ZxDuXkGNCwMbDUz29DWX9jjzX9",
  "key5": "5fAhT7EpaPiABtqNDtKPx9Dze4ALiNj6sLWqu63bV8eTiR5RSKuAF7Jpb8xRKk8uRbKdfrWXKdrbf27TudggHeg9",
  "key6": "4DgPAWvCbn2qho7VsBkkeSHF7DzVyiScJvTA2CrHPWiTymUasnDTjCvujSerk4aNavfxtHkGzLgPH8ceXoJt6hJi",
  "key7": "2fyd8jChkDrK6xC6WTjkFNCiHDiApxkS9JsojtM4pk8NxUtszQBqArLW5aYwiLxnRddCSnzk32kJu6wzLdTp1ySk",
  "key8": "d7kqvSH1zE91aK6U2aH6pfkezc5ZN6L8cFkLiPJsLnRkEuzFr6g8WMSQUXjxwGsoijkKDaTyp4niurnVDhWarf9",
  "key9": "4wwfrzhZ8HvfZLctPwQ6E1WeWRSwExL1Gnpwahccfsad2q2wsMqcpEwjrabJ1d8mG6f8jLgzWsdLnpNgsCqFTSWE",
  "key10": "3Ufh5P92BBb25U32W9xxsNDUdFeFunjdLfaHaXTXT6atgMZ6yNtr2ThdJB8xZcypdQLWy8WrQLzCff2mBigaqmBV",
  "key11": "2Tj3XM88gfoE4Cur8P8aLAJsXe9YjSGaHMu91DAq12sGyDmvTMiMQCHwujFBBMC1gTfCKzSriLrxJ9bEe4dDsjrB",
  "key12": "2WhUWhLNPVx1jbcJwq5oLqXetQf593BkcyJaBRgTqBxeV5rcDv7rph7tPA3XEVBWNHcRoHvenJ9mYQM8i8fMaDVS",
  "key13": "4mt6RNxeXZw72MBBP7r1cw6GSxCJt5LKu5WdQLUqpVGp7MWcxFAkee4LHdgBg9eL12r4RNo2GtekG9QDAYgYJFMg",
  "key14": "56QneS4X7hyiu5q7y7YKdEzF7nAX7QLga4divW8ZfPRxWfXDnPZRuCF3WmqnVdQNC6HC2vVBnAts6Dq3Khrd6UK5",
  "key15": "4wYyuSWRB6EjBjvvdYD3ETCP2e2p3KJ1ipj5eD3yW157xok3vpWni8dSgYd9ZGjnpxnvnMxh16cy5XVTnDraDoSV",
  "key16": "3zRRmwtrdGbJQGSwVZjRFM8dXbuquZ3bFtpiPRpD3sSJ8u88QW8E3dUZD3Qko81vWUMNpymMzUxi7AhXp7DgktXM",
  "key17": "2KMXwTTgEYTzmCAWrV6cCfoRRawasrBWSMCKBqA3M9CnuFJL7D23tVz8hKKxbgJhvDM12WkrPmRDzSHqXch8ZJ7b",
  "key18": "53CCMwnJVQxiosiegVT8tKKQsVfRg5iAnjHTDUoCpnWhK352sKptQb9xzs75eLMcHnXe9bQkoCex9t2oFXFnajiu",
  "key19": "2RXaEhigJUaedy8RgoRo6HNXStawELaYUrFFKqufxNt1y6ZPb9y2UCTJybGo65bm8kUCxTM7mAZW4cbFBKsiuoNz",
  "key20": "47GxSqQ3prWELxug74ikRbnfJKM9Xd5Q1pu7JJNUrfPsq7pPVoZcgQb5iyFfSHMGJH9BUFnCRZu71N2vj1hbJui5",
  "key21": "46S183Uth11KFb5iZdsmggEsFhdw5Bid9eJrVYN8GYA75heJNxNSKFUGYVTMTQJM251c616sE5EvGuAWk5vZ9czG",
  "key22": "Cmudg5tkkzrdToJRE9nEYpqZtyf6TYN5AJUrji91z5D1mneLhCUnkQCNED6ZGDztLYBTLo9DtYf2xWBHwWyzLFN",
  "key23": "XMQJsodqjNvfELVeNRYXnQzSqnNdJqHeVt35psP5ZGXnjcXhDWVwbrh6qM7Ra9qzThsTiojKgyHTG9PnzW8GLma",
  "key24": "5dTfbNfhZKZUUsW9Ggym3VuSkaqfetZFVSjGcrKm5kJYTc5pY1gMsXssJmjjFZtwA7B3mMouMFGPn47dtXzrhKEQ",
  "key25": "DUTAZswTBHtYgSAkF7LHhiR4PpmymEUJYjmNVHJmvGxT14GbR72AUL4Gxk7HA9aizkRtEpigZGU81f2jDc3Q3FG",
  "key26": "5eqpK2aCtrEM3MgyiWnqSWFz1fpdqSbEYvurXc6ksJgjj8ubaEn45y52AbfpiHQYpnzhbdm5FyGLDNRc6uWDH39s",
  "key27": "4D1AXLzHAaa388poRnvEmdSoBLidLdKdugy6YbTDADkfFCSCRkwTKNbwZ2JP8ZsQzVE9g9uv1dLC6rpJjvsp6up5",
  "key28": "5Y9gdMxmMkUwewv11WJeYwJhamwWHqHZDUZoXaBbpAMQ5QS56Xi6gvwii9Fk9rugUrGg7CYjVrH63jzJBcoAT9m7",
  "key29": "gX1FhMJxVryzax2fNRWjH54iiboFmkkipCjDNy26vUo9o7W75KNEEWiSEbHLqK5H5CPMqy3ycnDB8oYiP1RcE4m",
  "key30": "JJ5vqMJJk6aXrhezHWi7fHKwkw4tLfN4oBpUQcuKPhFaHxfXTLUTUT9WAT7VF7sXqPPx3FtMUkfS3AgL2vHT3nM"
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
