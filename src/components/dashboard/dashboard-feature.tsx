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
    "3XEvaRFdp2Tuxyss33BpqgPhb1THoKUCSwnn1EFHKtzYUim7xMqsGagDsPnk86g97adf13qwz2ZJtsRpWctnjhSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62rp4N4aruop8KT53CZLRQd8UdUBPQoAvGMz9xLyAWB9ng5mtAEHPZGBWTcxMhC13juXE9iKhKeD2AL1oMTVk5cn",
  "key1": "4hxr2Yip5f5mxndcd9K89v7fFvdBnoGdmrmxXx1kNCMFG6HLUrUYcuUcjRt6zMiubHquHq15zXYs2VaMJZkVhQYE",
  "key2": "4sRqRxKU5iDxddFRdCXSbz1mdHjgzny4GS4pae66nKgnPQd4TVxmprDbthYqXzC6Q3L4MjgrXyrrekEcmcEYcXaH",
  "key3": "2yDisZLor7gUXoxtUUyNG5CNXXay9HBmmAuLcocaDgcedyD956NuikN9psqEEfD3n56mgp72fXVLC9EwBTRkByNZ",
  "key4": "3VP4jW8EmVaSe6pZNUxk6bimYy9RcfT1yP3g7ybVgyKGXwqtRERNQTh7sZFfCrEwYQwfsg3oQ8RZo1VNqSXJmiHr",
  "key5": "38FVsSBPgKERfAPJZ348L4MCg58xLb8pTHruuPfUjAQ7CAEMVZUR6su1owsFCFGNbKWT9z9NthKWjPQsn9WSUAj7",
  "key6": "5fnfLBjfw4gs5KayA2zHAybMnu3FHjK9VAprcgjrpftUu3mvpvCZ16CzEtzCmxk2ac3vnfcUn3tMiBhwC5bVLk98",
  "key7": "2SyuoYEdqtUHJftNHPJ7ynWjGaUTpT6DEtoyRn5pk495cxMnTvQFVdHFXhdFkv7DeFpWc48qw2wCuwLrqN4KRV5",
  "key8": "jLKLEZY5ARdaBRVPDCy5Af7cxEzPiVQcYqF9TvNUk4oTKgXmMeV4auAdsvGWL1iP6PsbgeSsUK4mavomhbBhyNZ",
  "key9": "4GqN5tMXPH8fKQur7v226Fyd9fkaCKWBCdyYYESF4SCDRpkhQuY7LsPD5wcS1MjZuDx6fSaW3bY8mQUWZKj6adUo",
  "key10": "3CnMT1C2vHroPn1kgx9zdSETWHsf5fo3DFtsfGE9zfWmzsTLZjFiHyUy1zgTLF8Qvhpc8bDzrp8w9dops9U385GG",
  "key11": "ar2fdjauqFFKd13soc5ksSDzGmiWFEBzJYPXjAMRANevveWkccY6ouhDa53W8tbAUWCWKX1N3PzCp6xBW1QQ2MD",
  "key12": "5NR573dVkU4biquvwYw7q9FFSamnJwi143QpV5Jber6DqcSpjHsu3LBKe1EXp3VoD5x1qXRRVjmbAKpD1ioz5Pqg",
  "key13": "4r7bhfxfQKqtNbXZfxQuvV7ncKFQvHTdumcauJ4dUQjFrQHWVz5cJHJTsTDMTurhaBuoze7k3GUYqeu75xnyUjxz",
  "key14": "2zc8ExTuv4cBCwVrFVKCaui8ZmUmBsZQnNdTTtnud8sq1w6X4QmqVQkVWA5fx4m63C7tTMzbbuDYm7w6bQxMgUhx",
  "key15": "dQzPwEQCxkFQET7Eovrrsp58qf5oxEkGEbAZ6teLUADGMPxkf4X56mmCPCPyVSgd1Lr13oC4TnkZMQQCcU6gVvT",
  "key16": "3xVCdP2kpTgVz7xPrPjiG1VnNcU3sEJvryFo3zoyc6hCfsPv4bCw55TAL6JU11Kh98GBeNZA85yAu8yaSpYGDQrr",
  "key17": "3FeqrbDqKTdCEuVeQoz1bcCJHYAqY7ueiaW3pjRs6GTPb7wSrXfs4eE8yJWrEoq3AChCtZNsrmNHsLmzd7Bu6q8D",
  "key18": "4AXx5HrRQyRQB6FfaGvHMkUcZ6rUp8vfcpjEj6FJFQEhnvpVji64EboZF1R1DCgANPuQu4eVkrdZz5YgoSMg531S",
  "key19": "DknVxenYV7SMbf83qv3fjPYxyayFwtbFmpFeK6Sfqq4sUNaVxzXfY6t3nW4C4H57KCsZ1EkGnQDu4wkT4qMGG2J",
  "key20": "4boZUqYvEHg9uwW5PdKNaw7Gi4diFVbHssKf9Z2hskwMJCpMnPdMwcxYPSr8cezrjKyDLnzfUJfCQtQF9fEDhG83",
  "key21": "5SBw4hyvrP9FoDSbY6VDtThkDro7bh6TqnowGHvD7Q1AQXWSm4sUoFRqyRr1v3uHnHrBcF39ynQiUpaDYbH83bu2",
  "key22": "3qUKJvj21zb5Pb5oEMXtJwrvQWngPNnT1h4WdN4QGr54TD1MJQZaYB2kb1xGKkVr3cSqNjkSkRJnLQ8onJrwNQ9q",
  "key23": "3oNomcPKxmdv78RJZiXsohthowetZe8uT77DNmX9wLYsFyHKPxSXTdGGetP39dyC9fgHBBqkKi6wECQ8FqSLG2Ca",
  "key24": "1Y6pt3EkmfsKzuNeqQUh7mCWrmXwzK25YEjpYBXK4N5rDnNymqQbffhSkJQ84XCRqc2XQ9ATEYA8Sr3n669S2qf",
  "key25": "49JEtm7LpbxSWyteHx6dET2tQ3Ptvwgh7YfyKzYw5VLu7wZYGrdnAfnLN5Riq6FMtV8jbwM3SimxJDFNvQwoSoA3",
  "key26": "2bYZwFWQ49buKVgW9ZkNmkpJdWNfrmwqAwWT6ZVRcCv3wBcYmn2SwxkZFfhT1CWz4RX3C3aqBaMbYQgr6hBGFfE5",
  "key27": "2DHGEtYknEmv1FVUTTtfGkffWh4gyN5KR9UqPhHfG3X6GX7KETjEakxsCmUkRoBFVQ35bx1YyB2PyV7PKqHt2nba",
  "key28": "4obfEMM9qKRFuws97JN69JzY5To58iGtUUkQsfBh12nU1avfsVgcRHPMjAWUt83wnfJoyhMCRnLUtQr3zwMdy7sK",
  "key29": "YN7uhuzKbZTQmjsz3Wqxgq9XXdwfZ8WhmTmotR8DUeCt6564PVhAGZsYWHDWeAceMc2BLRQRKPvi9untSHoeVqS",
  "key30": "4bTG5Ss49ybrBsMYdBHwnVZh3C4ezFZokaSByWivHJ48Fzi4MvMastiLt5u3Xm897XiSM732od1vF6uzVyJ6mzrY",
  "key31": "2NR85w5w1Acd6vuMEgvimjS39Q8n5L4TZwqwP6eFAV9N6zMiDV2XDH55hUbLDpZPPEtZqN4MQJBqrRv38bMeKEtg",
  "key32": "3rs3tdbixEEwc8qHPDz2gtW2xgt1YayFK7xyCZ9Bx8JpNkncA1rF3LXNPmaq1NejhmD2KRfqbWKyP9oCWeFH4Jrd",
  "key33": "2DFBJCRFh9cJmevhtwx6QpVRDB7yUZ21pzJMmx1rjykxfu4qWfRdajLZbcfWkvVAtwK5zRPtZ4XwFmwhHuJajtNQ",
  "key34": "4b34aKPCTUkaWEnngEKsK2a1yX7AUYohb2nXJMkqZLrxMjFESwTG3uRiQowfJohDsTyfsN9V25oiQLxnAYkB8264",
  "key35": "5Gxxo6eexpS1fxcjNHqDMeqXFP6JZFQn77wYQcaMQvHuP49k3R59Wp1JCihbnZNzj2xqbnAhU9LX4TXms2K3cPSx",
  "key36": "5hmPSmbLcsShY8dMdHzn1nauQPauT6QS1i3L3Es62BExcffZPpMo69f6j8V14J8fqN7PLnyp8SEV9Ffhi2A2nu9W",
  "key37": "xV6KoKFMj8EDUcT5uh4CRKjkzhmkuS2HA4qLEaVMUg64F42xwVqLkne4iDmkqXuPW1SY6PVKu5HcwhXZodptD8z",
  "key38": "4iLTjk4KGe3vmvpQd1e2ZDdWRtoEnNNDAtwcheTAsn3HFS4jmEc8xYwYh4cMNk4dKGWV7g3CfGxeg5ihwb6CgHCN",
  "key39": "2NhStVNgxeuP7TzF1bD6mTYB76apMTJQScoiYAWUYTLj5cbQX2d8sf62xDxMBQ1quxUcPNEDHzZwKh4JoFYLHSuE"
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
