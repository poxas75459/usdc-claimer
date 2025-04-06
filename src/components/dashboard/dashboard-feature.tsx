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
    "4FtTTk1ZYgZT6Ybj8B81zyTwG9jQN9AwngDrVi9KQpNYuhdjqEXPbf3LNw9bHu5yRffc48LZrX9bVLEvhCrBtRck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xC5JPYFVM9QrvXA6rmz5smwwJtpcnEasdcFrHCmcXEEAsQS9CFQpyAxqZrQU3gqKCmr6kXHBcpDmwGAwNze5Cxh",
  "key1": "Jqs5fkpyYryarwQciMqRw5tTAXHKmwbSCK8nhKXTLLjxcnDY8d8JxQfVAHVMGVGU6uNzn9Ao7MPc3pBz2UNJADn",
  "key2": "5FKB7QYkJjBBYNDY2vXuBmu83WXapmUXom1mnWJCemiK1W5Yy24piBwDeQ1u9Ryin1zJaiNW7yiF9c4FRj7D5h1b",
  "key3": "4JDXKXSohi1JKUdB1UNjkkX3ahyRihnSAjYZfUHwKUxkuGHKbNRyAvgwZpULBFrRnY7Nem9pBp9LfPPikriymTw5",
  "key4": "3Kmx2sqnJQyQQGZoGE6QXWJg1mVfM764zHUBBchDoAs9QrUJwKbBAaxgkoMyW9dxzQKVHveEzkASZp4wV8JKPeZY",
  "key5": "5tXLcqAWcqFNEVXPZeCv6EisJeZKqPfi64fMSu3bi42m1MW76DvLvvbSRLa9pALWk3pVdXnpX2ua9Qvqb22VEzL3",
  "key6": "34Evdibqjq6y5sDdSPCzU4WpEjMKEonWajwFw15WfZCNL9BFBiaJT5FPbKp5e8DAvktqauujQE3pJcBGjiQSJc9Y",
  "key7": "2BPbAUy6RFHEEjWGLXm5suZH8HfY6QmijokPiwyMXgGazCWt7YDDybBgpLJ3zaobLr4EVzVMMAx92nok1f4hG1oV",
  "key8": "3Ss3EkZuMed3MCZk1mRKFE1D5n4qMmQhMHwEnSNWMJX16gtTLPaEKJVw95S9LpAzksk3V5Vm9ke2C1LiaviLiWxR",
  "key9": "5EcL9Vi1d4FxsA4XRJaeCi77t3eoNXoqqS6P7vD8u4YkQVTDXRHjKzTg5fLx9U4uQU9w95KjWxbE3bcKYmXx7qtG",
  "key10": "BTSnzFTZ2dSoPXPV8v6rfyLmGNXvQBYj33h1btYUxFRs9xPBZmQfm37mivhzYwqr13Mb58TMbumfyu5bTPHKECv",
  "key11": "4qVfKw72jtEvxQbb9vXTLVf2yz2uV6HJnBQKJGCL1FDAE6stCmNneQL7VZaNvEgYcZvDx9ACAPmEf5tJmB5sY3ig",
  "key12": "5xn8viDoUmB3GwZngtWBm3nu5X9pT7Rv2KNBCU1vQAKQKJthAGifAVdXKtU9jTDidvz4mVHH59DJBGNqBX3xfp9Y",
  "key13": "4E7XWTUfF5hZqxahjWUebjXijKySxMYTsr8tHdVDfMpxeQbQadm9aHYB6V2xCL58RJTGNMoDbmqfnFdVKCbwTdGq",
  "key14": "2RNWkhjouVBoEcziN1889QxubPLweX9aXZkU4osWH3EUaYdSGWBYvKiHTaAVsysqC62JxTkyFw2MqTQTz5axMF6N",
  "key15": "44rSyTbGJLepjn9fU9MUVcjZkkeUR1ffV8Hoa76iNHwVKsYMrJqdWUgFeSEQoxcFjj54njCgzgHcy3thWVLmDy6w",
  "key16": "t7mLvvr5m3nDCiy9WQLwPaQqqPD3nsKtQBZHGkDkTKrzTo2pJUWAQucibPKgXuerXjg9yLcPJJXXaLz4f6N9WMU",
  "key17": "25mh6urZkVMLnU2ETB8rTgRoULza4zFTciRXfxXh5GpgG8wTfwFhnSedXj5Q1HtJnivdjoKzndY6CYwxKyX9WAYa",
  "key18": "5gpXs5XBN6aQ9BaaYUdSubPrnUd5enp1nMmBy6SMYCb8eco9mXQ1szkdnuHRrvSFVPreNrUyXbXBVYK94duaPQav",
  "key19": "GcRYxM9GTpDsa5iMKkTw7zy2BWuSM2GY14BxrBNUPcSB8DNXkfR454AmTCXeWCZ9yApqFyNaQirgck4FCBKrCYC",
  "key20": "3xV1jhyCpAdojRbiCRykntNXGhXBUHjYuZL4s66sPryoexN9q8PDx347ado4DeWyTv3uPEGsCxGrGHdhP6aCwzvt",
  "key21": "4ihCDu95pB78vnvYh7pt1xBcLk69EurKFNHypCbt5Bhs6QFRjx5TcVEEsCMgfQspT4DehBLyAA85guHwgPey2hSQ",
  "key22": "5suP7TeZe21Kvx4DhNzNgZBJrjuT1mhnFkVoQB185fyjRLK8n84NByyLEoqPkh7EwJuCnriPWoFWyvrTqmeWw71m",
  "key23": "2rKJj5FzYgHL18P6RdrxFn6osfFDahiP9tDZbazg2HBCQFhbbW2LcPgLQFsMe66m8jYzuppvPRZEwpgbNDphMDJR",
  "key24": "TzruaGcdcfXxdDmUxPofz1JVBoz8VuHzYeA73cYqkuKU6gJF67JEKFT8cNX8wrkJGwjFMgUhydETq5wZCWpK9N5",
  "key25": "62nhKRTc8igiTau949Y4DqKAv74726eBXLeza6ZoYbvn6JQdiNR15ugNdG6MUmTHafXWK5VMKgViRT6dPh2z3qxV",
  "key26": "3f8Z35FGZPFAcBEuVq8LdqsHQDkgg9kLsfJF4qzBwnd56Jm4fduDvNrM2M5taSvnr9cbgATExDdSCv45B4euaahU",
  "key27": "3w2fZ4EeR8ff5y7ze8CqKAi396ZgSEMKzkSrqdwtcGVTYFaznWde6oWjxQChHrNS1pqaJESSdP6XKXWFTAreqLU5",
  "key28": "j4BVt4ztd88m1P74Yk24KsMtEHm43HSaoD7isXcS2Y8CTrX6BS7Lk91L2vwu6YDoCKQ1ACbps2Rhz86mLThMTsX",
  "key29": "3nBiocaBVWG6MiGEd97uMTDhXVs7BcHVYb3CC9fQaEoPu8MyFWPMenpnpoFK2bCWdEUYYnSkLm44NyR9mLmXMYeG",
  "key30": "58NMmkjzCAuJJf2zpN56R75wa6qb9jtYqN5sKT5qjgz1QNE1bxqu2n9UXT1Zz14GDzFLYy3sHCtd7VWRu4vqYXMh",
  "key31": "31Azm6Fc4RApqNTesm7ZqW1fZrwEJAHQjXZg6HU5XKzrk7dmM51E3Vc4TUf9GdKqcqMdFTagZXMBpq5XKgVPFDFi",
  "key32": "rbt8RFgFmS6pAXvinLxPd1uX6RtYnoo8sKswC8yKWbBeZ7senVbTo8WXDVumALjWjDyZeeVsTRA3Uwa2H4YEuz8",
  "key33": "2v8EWvkFePPpZYYYjgS7vrZmxfnsTB57XzuBPejjj79qyhajNc3pHvsyGcs8zmEhVE1arGjE2aQ9wttSpn1kAJ6Y",
  "key34": "2n6QsrWAQFsP8nLfGKCDsANS3LLg68N1piMXJvSLbDxZM6rGJmp4RkctbyeiohEBc8SpDUvG97RcrBnya3aJTSoM",
  "key35": "5pWuQJuLdKVNX5aDP9wLHS5VM4Ae9hnUsTnxT9TNtDZ3zizRuG8T6HmUSTLGPAdGzUcGmtERwhWSX8Yr7U464mUk",
  "key36": "ziCNaBkdMJCDCTmmVqofWxkWzdH4a2u8KdiQhXvPWrUN6bGr9oJzRChi74sPsZqRq8ocd3LRJvkGWWERq31HKPA",
  "key37": "4bkEScVZikGYiG3FN3tPVzciaDmt9AuPHBXgPf6rf8ktax57RzXY4BUJ1UvS7vdZUDkw5HsrdKLaS87vzw2cxJBo",
  "key38": "4vU87fvMDwC3QAcx8QtvScBVem4vWUZ8h132RT5Edx6f3EJdJ85oDEZfY7ynhUdqmoqm6HkAE7wbQkqtS5noo5GM",
  "key39": "44dzUTEMbdQ1YsSYVNfMAQLKWhiUoWaLAtbJRX4tjWG4WV11nVdFq1NvnCMvuwP6EcVFtA7ukzhx78oSgpmodA5G",
  "key40": "5h4VvtT42b7xcSSzrrd5UQyMMWrVoQtfvRUJcWTUvqPoZ2m1Dp17bcfJ1pdNFKv1EjHm7DKvECqtnjt3HwxwJtrq",
  "key41": "yoAjuukaHFRjCKGwkCcnRnSYKXFddh7wcg2FrWZmj6fDm5TTHQkeVFGtzX1JMCvrRnMQjaNV93UsQgH283yzNve",
  "key42": "YZ3rWGZ2UfYs3Y1GqVivPiiFJssH6UTznTLoQ68JzZPh1CjRGSgLfWXDkLtAnKTeJNqbxg4NDt6VLLMsV5sLWvo",
  "key43": "5PrYCapuVzREBAf9V7qD6gdSvoUMMNzKb8jnp5G2Bvfd9WcCY4YVeQWgasctZfkW8FHyn8NGBnmG2ZnA6svAT8pD",
  "key44": "4fN1HWgtGtHx5dJ1igZq9LwPvDG8nFbZBb7GPYk6yA6Y2vDPzSyueCz4oBG6bDB1jJzCEEjhD2AwetiV7E9P9Nuk",
  "key45": "2NYPgTAPQW6h3UUHZg8kV6mS1ezvGbGdD1MZiZgU63BUtUixwMzFtLBpLemGAvgJVgWcFevHGgJwtxcM9B5vBWdp",
  "key46": "4CLC2X84DwqcczrPYdmBMBPzm3Mrgg84Dzpe7WrjqfvLTbStPssYUWPGgXzU3Df2eMeW4Awn1r8JgXtT7psqXDRi"
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
