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
    "5RCQBWRzFbaBbVg8gmwpsjC1CXgs4MgPrhtgLFqgLEd6tpvFdT5SugC8xgun4fg6XSj6Exez278MiWNxAXwHHVxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aDXxD6fCNV22iS4zQkVGJ1C7J3AicGM9yFSFF34bGpXozfTnS2gK6DjGCWR6L8s2PmsobqQzZNPZKj8VR69U9s",
  "key1": "4HEQ9oFg72JpCksJg3YjzVySfamZkWfKk7sKbDRrfhrurVNfh3oPqJzaK4nvjBJZdqiMbjAMT8Pa4s6Fb8rxdkoR",
  "key2": "4TqTAYXRAdBCXRkUyZf1UvjFd6JL1G3PcCn1NkMwDdaGfZhQNN6EhXxzYm51LvhXtGufBtXvGQR4rFFr3PyhF18a",
  "key3": "2cKRR4mVwU7nmpmFKYwLoo66WiXPBmg9hX768EhXCHARYKXyRouFCtWcF4uu42TTgkcCR33HXQsSVYug4MnBDDNA",
  "key4": "25LBgECVuEhQj3eodbKXoGnnZS3cPd6iVXgQJ6DgCJ11tZG1Qi4jNEvHDouXgjqwGuv6SiiSw8wsFaDPGLLvV86U",
  "key5": "3FNdB33S3QHDM8h6TASfGJQgm1UmzNBHfvHgrEjx3mbrgvgaMjQUhW7VqpsFnU2kcJhkVxy64YpNeJQfYRw9M63v",
  "key6": "2fXyAC4dYngbEBdV8SjLVkKGEugrs5S98WdRwU4uJW3c1qYfVkV6MWiGcf6WQB12uD8Q7vQgC47qLF6KKhZ4AKnH",
  "key7": "36qg1GRwETKW2UkcJAfaQvn5tnmWDrjaZGdmNJEoLGtGDk8RcmqKA1zxXQnFPTxHWoMkxorD6AaCcQos2e1BHFim",
  "key8": "4daZqNvjiAxE2shopxZYzpXgHFci9S6tgZzKtm8z3TAgF1qXHj2b6qGLZeMKmNfvWTY9YZWKSh1Cpk7cAikYZY8o",
  "key9": "5v2sNU8EuZUba2456fFYSu67nhE1BwFDCYVQJBLYnFpwCx67auM2vbCkgsRAhQC4pk64YM927Maqc4KVM5fhE3YT",
  "key10": "1YsLWYE7Asj8FQ4z5bRZRsXbZc8NuVJKSbsGJd1eyWYuquXaQJYheJx8fVS3hcNzuvpV6hJAqATnfvFFMewAJsT",
  "key11": "4CWe1NDCJMfARWqD5KfFffqC7cio1WeMU5kNJmxAxccosknXzm6z7vWH7uoxciRZApXLaK6jS42x79XtkmThLbKq",
  "key12": "4oUeYFTzc2AnW7SiPDaxbSCXqC7XZaHc2MidWBfFLM5NrSs6SmY5hAxZrwGtToTqkeLByDSZxrJtcQmLa5bY6D5V",
  "key13": "5qC1D7e64vYMBhjtkvBy94h6nWEo6NwwuBXHLmC6q7Ny3JjmmJB5BAmMt8j1n44g6HM7EgkP5Tz8nXeh5qVLdBKg",
  "key14": "4AfxcuN8mzwKKa5YfZsdyqicmqpduUGMko1znEs9MWyNQxobtHQ4KGZgaJ446uu2dQYmqdoVS5oP6CsMz3GapGy1",
  "key15": "4rYMQxZ4wLUuEN4DdfTUK35A4VhnhQnnnA5Dd3hKqfnLPn7ocQpxaKaVhMrNqjv5RdJ4J97tH6yJBzX9wx559Fq5",
  "key16": "2sgiXWdPaSSAWNxQnW9gJjsou5h83pjVFUymrZDRAtZP2E35U2nFnUgPsSYqjHXMaXyD5doEGUuEfRBSV9P1EXLA",
  "key17": "5NcCZwgt1C95ZDC5shPHX1hizhCB2LamA8i3FxjoZyLAsm9YJbsJisLs9S5xjSUdHVVbwhRjA8vK91nywZEVdD78",
  "key18": "3mWDkg1BXTZEmWqqF2656MWsMBvLys4dXrEvYsonYQJEhEBzzXeSxABAaZiZxVam4guvFBDQwMzqzDyowSn8u51S",
  "key19": "23JuN49ajzWiRayEMgRFLNKPC4jdcB6cFvf9QwvGqw8uP54HU77xpPzrjmZUopRVFzqtVax7vLhUMx1YMfwXeRu5",
  "key20": "5QF4Bso2G9xNEDnu4MvX6vV9yqpBEY6UrkGuGr8sCmTveE43gE7QrdYNLP8bBzYCTvfa9Y4tN3XFKrbgbdz7UGJG",
  "key21": "2GECC23ZMnHMXaWqZZzEcTtKKziYuod1fuSstAPo3GTxxPqF3Arb6rJJA7PzBjdLmZUFkWRQb5aY2rkT4GqZnjbZ",
  "key22": "2vAPsacradbPuVpd3YL1XgtTraX1fNKYccPztNeZCm5RRq4VntHCxTBeTw4FjxThXbWM8tiJnvH6WUc3iMWEHEpR",
  "key23": "4ToHd98aTsUxX27VtA5ABj5EDxCXG1up3urUwv7vk33gDacFokn4eQRctMi9by944cEhPL8C6Y7Low6LWd5VLfBX",
  "key24": "21TPZZXtfzGC2vy54nx4sksKwiUAa9sEk9d6U5x7FQjjkGF4zwBUAtwQZxLobmMspKuSGjehJD9rzyEjAyG1UUzG",
  "key25": "5JkbrtHGEqmFdaSmacDhs8J7f7c77eurwK6a7PnGLL42SAU7EssqjKYjbGk1TF9H9Ej6atxdAucVrJQ9skt1fMHo",
  "key26": "3aCBraWuJHWr3Q2V3BVvrGUiGSjg82vrSwyEFqTgiNPxJpkNhsMNnfY2i32DvUoJtFDifexEiJgJCNnmoFPEKpXC",
  "key27": "BcNDywW3jSxhoXCwHdfLHnJ4D7hGjTzyPq5e7CeYctpQruq6B5rjM775FmnouAhu86r3Pk6mPmWSoqH9wnouXm8",
  "key28": "2TDPoa8bGDSshARMG9JZiaDgQqGJrDc4GnNogDoy8AqVga6vkXbB8mCZhBGtTGSKjeTNMHRod15kvWpuxJc4H8oP",
  "key29": "pspGtBFkKsFAMeDoejQbjFmi4zMLVFr4U8dMTfgBUeWggwmp1i2vbRgiKvqornQ4BpAWGqXZvDLQdQ117xrN82R",
  "key30": "2SM8KuuMDL8GvvT6nbbaUVmdqVQryo5qD7HoFhjCyuQ7n8tnmGMr2pQTCkW1YEGsCnP6SXZUcyxA2LXK5sNaJC3K",
  "key31": "2DatfJmzjuv2Y1DiV8QDVZ5oActbEGpMcmSwrXAtjqXEf3B5obPAhSnhnoiiZZ4ALczxqQ2kwpRw7RijNu5VEy3W",
  "key32": "3tZrZSJ3TRdp7Vb54BuU7PgQFSFtJbeT9g4i3g97pDriTfg1cDJNgzn2V133uabmqvUSfbq9U32wwDEZkGtQmHAz",
  "key33": "4sSPuwen9v8KHjoMrhkqwZv5NwP5d7vjA4zDCxpsaUv44tH9oDhq8YEC8bv4DBCLba5D4QRKzBAr3f9c5BRM9Xo3",
  "key34": "2oD3am9thzaVbGK6pDyvWZRRtdnTGjas1sowmdyEmw1djDCjihdThnGiqqsmfSAdwgMvYerWPEsXJB1QcpzVc69t",
  "key35": "bmTFydy4N4dsS9Jk9Cr4cpjztK5p6afPsvfLZbEpcQpUZEXJiGp9LLxQiNNVJw1QP3uietXJaBjC9dWsrambR7P",
  "key36": "46oDpc5Bf7TMDtp55tsH7vFpdB598phRbZVrXja6fUQv5cMevaAvupS7tzZpBcuicNNGeZR5uHqjRBsFBzmDhkeJ",
  "key37": "WWytFS4uzus9kxkmFYjqDe75R5KaUewsz7dP33BDogaUqqprLPsS6Uj2zztaiDeLHSKPqA8Xq2tGmeF1epr7dtd",
  "key38": "2btBwrJaqJdEodAriMTm1gYdcyj2kzW9BdjsEJj4s258rbUySNHuvr8NNHwUx7uaxccpSTmG8Q3xYYPZfryRYsie",
  "key39": "hj6qE3f5A3jUimjskw5XSH6UpiYZJKdrS23Z2oxjLwZJLWbfik6xJvwFieRCFcih36GCuzn86sCL7RoUfv6sNST",
  "key40": "5w3wmE2F9USbbDroYX3aCcD9QZ9gBUuXrV8KZVmY3xZqzSeC9bXtsfopEorCCnALAcHCdjvV7aqRmsEakmi4PhNE",
  "key41": "2eYjT9JfdmvXVYikTypNkyTKFVLzL4Fxp61B2KPHeUhaz6ADV5juA59pzojb63TDxnk4dRHkFr23pCRYCGqxDHDc",
  "key42": "4zRBvqkfBUETmeh7nLMuYjfGrNfduEAsj91vnT6DrsHQDLPnC1K7NzKwWTXp5aLDS9fmvtM1kQ3Nh8VaAacESnmS"
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
