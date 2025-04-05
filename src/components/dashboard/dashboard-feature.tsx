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
    "63WuDEPdq7jr1WwL2nUphzUi5p8m9VBQWjidQtVXaR6D1rQVfSZoqhUPdaVQCT48Qfse2Z8QbEj9m1GeZRyvdAe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bmu6KTeCUPk5ha5s6gnJvtbfZs2fmQyQx7reCpJtm9u4mCXBAJ7mB1avGjNtigg7cS3ErRLU8qitUU4w68zLGu4",
  "key1": "47T7jLhUCK6aoeSPbsh3PWSjXYisRtBmGzwPd3WBcsetktybfzDE2UGbNoF1GfeVwZ7AFv5k4XcU9Yy69qGKvMDa",
  "key2": "2Y1c3QXvzDyy6mWzgyuMGH4UK8GNAMFdghZStBJfKY9PAz66QkMaJrwjZwtYqB3u7jtFGgSZGAPHKFLRbcqKESF6",
  "key3": "5oWtAVXZcEQeu77AZE6AEWGLJDkdxaPwKVZ5weXTNfEmoGz7hT6xw32r3S2is2Uo1gMLvu3a2X98LUAfd4VCmzmE",
  "key4": "o4ih7Jv65yFxzECYD6LxvxJSPuQVLrY1fpyHjVhK6rJPmNgC6KZYnAG2zmB8TYh9es83DqHp5HYv7yR8gkcsRMf",
  "key5": "2WE89CSiwEi7p3bwhyEX2NBxqEAcJuFmLCsZXMYZuKsVNVjSdcVzpNNSCsycEJUhRvUvEXRgVCvQxHPDqoSCcaar",
  "key6": "5i6aChfKLNHWdKnYHaN4p4ffPgB5rWSwW3UTPK2r4VJn1yCg3HxtqeEAk1nFjxbKZrJMbSppMMFoMTVZc6XQqMne",
  "key7": "P7zocq2Xx6jaNHmeDficbP9y4yes7qEUAwkbDWEjYA86v2BixvKx4cwXfaaidAsmzLd56U6ZVTBoaZTgV7zJcBD",
  "key8": "4UzvrLiwPBLmBVF7zbjWQbPzmfZK85MBk1VEpF9vTQ5oy8RVWyzrnHVgx54kUZ6B2ngLSN8o8NqoKPeUbEhuXjsy",
  "key9": "29p6nbQMydyYtLnu1GBiRjKPfBtkJL178FPXVB5upM2n7WfQ9D8sUEYDTRYVXmuJBv41fcqCARxTmodk8uKiQin7",
  "key10": "s6LwckPWW53XEVkaujyww3TN6PsrHquvooWLDg1ZNx1HgC2e7AmfJTSGUsgep63AZdMH1qw9XWAbN3zs4ccjGcR",
  "key11": "4L7nFJQ5fGcFW7WY7UBSzw4UqL8DVKupfKtenPaqD6bvWShXghYxB1aYLWZ7DYL3MecaKPex33bgtcSr7E7dFAYJ",
  "key12": "5sYJnbztxXkW1Qua6M8yAij6Xr6TM1SkDfrkJtUJdHnbGR8Xf2iiVEwjAhxPJFEtsQvq696dCoCx9eZXENJwfctU",
  "key13": "4Z81FCZbSZrUpeUoTkF2jHyQ7GKEitCvkDPJeZ2pba1GQuW72Z5qrFX4kQvWaZwJoEj9MKJd9bjxCtXk6q5xdavx",
  "key14": "CwR3x63tDyKJfuvfK3jdxMB3wpgsrdoFN1s7TCRBnasjDPVvtSLfYj7G35EkRNbbm4cuyxJwc4fTkqYPTWoG5kA",
  "key15": "41aKNtSCkXfLKFQDp17TjZimgoihMSmvYkbzofEteg2Y2kXMnYoe7URd9iHrVbDVqzia5jS27iFxcRSKpq6qrjWU",
  "key16": "4GiRrFXjMsAXeJrqyL3QA7KmV3n8cwSxvL75KUsV4yW3sQMRXQ3E2mBtMC3oyXhGNDztYAJSBCCv6ys37ttCbipq",
  "key17": "KfrVtrpm2Fv9LDwdBKBjKWXwQhxhy4e7FZ7v7oPgYUZfCoWteg1hEvX7VnchQKvsdgr5CcgdqYNByeUVxovw1Kb",
  "key18": "5XRL6tRpVDZZYURRmUHDjSFAQH2kjJvs1kZz4vkGbnyCmtzy38dfqXeWPiD2BGJW6TbCxnD1NbbajiQ3fSYGgZpw",
  "key19": "1Uku5igdxxKFhJyn6npjcvT6WX6nBwDesms73YfCYiTLW2oAk8xTyxesdf3wDGPc4aowv3SZFiPcxskdAwZbCBT",
  "key20": "4ixHQTVCxDMwpiXYkPLtBEUV96xHofgnotUDDAsWLXmofdv8epCSYreHDAxZ3hE97Y5nt3uPX9M3z4TcNFbhRbeY",
  "key21": "4Fnmd4g7KHoWajTRqRWCZhUwatF4w4NjGp2yytaNR1DrmsGBh7H9ucZioV23sMZdrnTFkys96wnDSuKSbPMT2ZY2",
  "key22": "UGBLkPVoE9Kr7XbMtzQCqJGeCnda9rsMcSDfr7ENuCMaDqgC8HztbHGfSN7NqxBmvDWyfA4Jwr3ydZaUd5Su2w9",
  "key23": "5RU9SZANNFGFJSo7qpH3fLCJ8J3ix2fTZQxxnXqaaVC2PdwvYgVnwxLaGfV4zZUwBbQ6GnTL4aqe11YsuVh9q75Q",
  "key24": "4FSbXVm67xjzWKwHdgjgVdukrGFUayCqQ1Bc6kUqSRJpGJzBmGd4EBYR5T1SJ2T1rNPMMuPsmTYCs4qxTfgVYZne",
  "key25": "LxQzhaP4drKmNyGgbCMTwvLSCFRQYagk3SukWWQ8reZFRHV4p3G9Rf875CESVgPkPWzAdBtim4zzC4Z3MfTTMTb",
  "key26": "4wdkmqK2n2RmnbaYb35iYoXNnLkcuqxbWHwhqjSzKvsiJn9CaVppGTHNEGNUz9g7QjN3VnEtKv4xJybM4zoswvAx",
  "key27": "NBd5151mS7RvtJW8VHaHV1xTMS8DXMHrCa9rVwzhzG54CNMjRJHcTr6D5rpRkSWfgdZh3M58Dz65ZuvXN9pFdNi",
  "key28": "4B8ZGufWzntTAGoXfhDuS4rUXfFja74mkUZc5VsFzntXgqgX2f7zBHYp75wTFTGDdub4pvVwjCyfFJ9s3x7db2sQ",
  "key29": "55Ec7qpHU5fVJW1fBngn3n2vyDHuHCYB4yyGa2HSSM5TPViyoCQCyzv2WAmj3ZshPMjqR3Grh1AUVj7bFnDbkQdx"
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
