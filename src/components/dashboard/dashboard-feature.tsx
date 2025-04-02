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
    "3PAH7Y41XsjVWPQ7QAx9aAe2q3XdB26Sjaau9nHSMxitNn8c338vDJ7i4NQEfZFvd7a7ZkKGdzRRKQFWnRMA5SPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QgKLg1u47HEtpHTBSCznae7R933321fJ1ZBSMcEyAU7PSSywGSZB7S6YuiNhTEPiEuzW3BqTB6ZpRFeFj6Zu1Zn",
  "key1": "3dkWJF3VQ4HFFpffFLguBjECVYXmCtJHgxtokvFn87hmSuaabMDyNPUMAoTcyq5ESE6MXtfYVP4Ja4bJGPeDR7j5",
  "key2": "3eR2gfpC1kWUP7C8u8vDa1ZqQi1r2WdmE8cmWgovHSN3rhY3wnwjdz88rmhxCvuzibb9hneq5znopMfmoxYnrc9p",
  "key3": "cSxYf7x2yfnUFwqGw8Vo8uP6co4SiG6enWL7pLq11Eu4r5tU6d16bEWRF4CjA3BzEP3VEdiBtraz6fiotn6Qv17",
  "key4": "qxLhoGtmxLsJMCJSkKsGD8H76JRsaQpfZT372QvFX9DcmZY77wEZW4m7JiY9St8US6gyQzUnEQ7R9apYCirMhYS",
  "key5": "5DfLVZASfHNmWVxr3LPom7gckJU4L52DpwLJ3HmmCZH5mc6GKZ7i8YfJoutwbmsjx5P8oSw3ExeGFw7MNH5vdYyk",
  "key6": "2LAJJ9A8erW8tyKpH13hh5JeKVpcc2s3eAVjEfpE6gn92BQYvsVfRdosLiRfyFhic4hQy2qgAZTEFir4rVuQgz3r",
  "key7": "3SBcJmH3PsTmVZdFFGzTYL6Y42XHthLkXhb6ZC1EJMFxMEpTejnkM1NSscsGgkzxGeSq98z8X2vRswENDQKKc5P8",
  "key8": "61FpGsvDmhuo6xjkLy9FKB72TTTMTUFdGMjLyftTwKpUS323Puyvk2CJkLFcRtD8yVJ5H6TgDzkwMsTzUXc1xeqs",
  "key9": "5GzwSjgJkC1PgFJNaQycn81fGq1B8Hae4HN7W1MTKBofqkNr5Qpf53vm6ZejiqXfRR64e851DZHspoSMYQvhuqFR",
  "key10": "e1xZW8mTreLFK5pwNauDxfrtTMK1LE7TQ1xaCaVZLXxJBzgja7AkZaVYkK6fZCQ5bwmGZZYW1Z2r6jsZKBAUEQ4",
  "key11": "bWFSuUquTu5R9eZs8BNJ1Cfv8GKwUHQ7HnFvskGBuyrHUsgCCSf1Q8zoq8A5Gw3Vn2watgiQmZTuFRQ2u4Hv2ej",
  "key12": "3JC5CfPnifLKpB7sBunDWD6qEeCKJ6KyryF8j2gzVeJybTVaGDkX3BQhtSVidE3T4DBeH7XrPCctETwQTJWqpFxJ",
  "key13": "3D8qCaBVoiABJnjmNm2eoUVY9VoSTJerCA11kU29aLPD41CnmF41483fbX71DBRMkmA7PrQWzDp28ALz4dVdMxdM",
  "key14": "2bdsQfTk8s2qVxvxkPxWNTzGko7ATuuJku1JXxPYdLTeyYydgp77jCCEJdMEFKzX57tWgK2zwgg9TuRtcf9FwGkC",
  "key15": "4fQLb9hPjU1XQatRd1upX9uURxcR3xUx8kCUwzXnfPkKJZvQcZ4c3dyKFSFosQTtWTuqQSFHkLHJ3nVS4SWAo3n6",
  "key16": "3toHg5NA19B42xZNDCmW9t3gf6QftECCcPJK2aNiA1BEByZoDMRT36xxoK5pNQEdgyGt6a6LaNgUNoVQEFNxUSv6",
  "key17": "4EXQajAsHZjNsZwUoVinPZ9XndHNrBT8sYm2wkNFfsmnzZmMhck4UtmAY3EYxKPXykMeqqqTr9tcvag8MqgWdcoq",
  "key18": "NT7xYeztAJrqMbrgNyh7suzTnY8wj4FQmdg2mc8B8tZmoTcd398QoPBc8BmBjwCDeSxPMGZDd3gD1XDjrPD4Qdk",
  "key19": "2VnnHrBSYrfkwSvHfNrR7Rn28Ra5Lp2yjoGaaN6hnV2dUDcAadSwxMMznDEc8Sf98QgPhJdnkFwYuLsLLirqYpiQ",
  "key20": "5yrXVNUB5mDZfHHY9hPXmMNwwABbupmxgraNsWCN8iawjmoWr7SRSGDEQ1uNyyUDkSnoL5oe9Ah36V8S226nNm93",
  "key21": "4QUWwtigUTPwLicmssBVRuKqqrHRGcuJShbLpdVpmTKNPkQ7VbeUDBSV5rRpM9873oPV9eLf4c6JQP3EngxYvJh",
  "key22": "5NDebHLXto9X3YYwFZuRykFqKvV7SisiyBB7yVbBhooNgNentXxvcL7WMFuZYwuSu4RX85zBKAxWE3F1nR5pVf1a",
  "key23": "JbzLRpKKx1DFxWt6f95TmdsykXAe56NRZAdrU1yqsb3oV887QTJpcUDc8si5WWkhmusVnqCHZYXHQug4BjjuSpL",
  "key24": "3BJrWPZ39jEa2YjSsfGJzkJ64pSbRWKZfgP2e6s716Aac4QqfEMoM2dQDPvRMAucUNE94o3Z7L8Au2dSQZ7TicSS",
  "key25": "3DXd4QZuDLgxRwTLizrgqmGJjdkvUG6QPjyhogXmgnbgAy93V62kF5bBpjE1E8uta5W1wCbNH1vZfGA3qTraM7mh",
  "key26": "2c5S4KbwVxDZrYpqgvShKTP3E6uQyGB4N3vRumuBtGosDSs4nMKY6tiYgcjGKhJH85iHKUhFEkZmihUGJ7XahZjB",
  "key27": "f5oLqsD2QPKagPtLD7r32FNDdAJm4eDoKKqSUJXH8EkjeBbsBxEbtersej46v642Yftz3Trm4qhNHiXbiSrETj4",
  "key28": "3XiRuR9ppKr4JtHbwE8S8ZLnPtwXGS7KQPdb22A5xCnmYWQYe2qNph5s6j3XXoAZjs94VVYz25iEMW6CYzJzKi8d",
  "key29": "3zwfLUmTU8BYZmWgSJP8d7kERzh2qt9zXUhyDv8VsR7oKCdu4corvHoxuwDxkRLtrhUyaRgogcRvjBTxXQNP6yqi",
  "key30": "4sRYdu8PF7xgtwDcY9AfguL8MpAHMBSr7fyN4LD1tv4771e1pDLjtwb4SyHbp6PtXNxnX3EaUWuVNuxFQjy7mixV",
  "key31": "WuZnsjgfivPWJ18xfVZCd76Wwi1R5YqiNHuHEBjmsGzKMLuPig6YCeVHmQ7VEbtBNb7jJS7md9AqmpFtM4oWEYV",
  "key32": "8j4Nac1epsSMbVMEL84a1srL2J9NorQ5G3Rox1JysQiJ93CrepiPsBpLp8QGPpX5NseArxb6dGDFXsbwAbMQrV1",
  "key33": "37y45dWhq2aJMQC2bSwf9bhZwyyNMjBFNXjtpgmeEm73zhwVMRMwpjUqLtapTPu1iqZCUKTFsMxjzHGpur5V1iFH",
  "key34": "3ExdMPKHfgMo7EcXeSkUBZvVDbJm3C3CGnRmt5Dp3LcYJH33qcmLb3Q7C5PBS7fjZoFtYc3wuqPZEpaemUzz4UvG",
  "key35": "4BL8MYNFadJq7rYXYx98wWooGiqyWQUyLZJ2NF6GJSiqZREPntbvE9RNCutAGZewNCLTPsmRgFwvZVUuni9xLSWU",
  "key36": "3ezaZnJnZK8yRQR5eZhYTDcCHZnTjmvK82dFb3YAzBXhG98frBG7NsGgPDvAqfc6hUCs5tiCDRFLGRrVWQKYQrL2",
  "key37": "5kNph2k3RH4pPgSqQyhmb61xXG4oaXZMKfcMi3boR8bxPGr842kJNishE5ojw8pN2Sf2YqifoCZxbbEkGT7R378S",
  "key38": "2Wi1yChNc5c8iApmyJr36SBFK1ppJZcJtRWzESmT3S4nuYcx2uQsuz6skeZSE8xT1sYhxhpn2rhze5kF9bbJJXfr",
  "key39": "38AqM5LfQFJZ2NpM1q8G2BQWhqxYaQQFt2CxvcdCkn4JZiJmBg7eQwKHsWXW2EmY4tRzY29UxTeZPnZ9oE7XLKyb",
  "key40": "3d8U3yJGmTfYoSjhW2ATXAy5ajtrvu75fsiKL8BUGFkPsFJSXUZDrTSowkEoYc7ejP8f1hLz1b68pnfvoSjHdVFd",
  "key41": "5wDFjYNC4DHJbdSMi68GigXKNSUPfdNcxgNQyndqC7xV6FyECCqnJ567Hxq2VQhou5aZALNtDv1TNVEfzKKoxfah",
  "key42": "5Sy1cQnVMK7xDS5DQ7TVmgdFguvV7q62CrUXFn6vdmK757vdkBf5Gp6PbdHQZ5R3qbCUhxnUapPoRzLkKa8TQFqu",
  "key43": "5Jpko6jLgcuppSpJQA1zTBB1d4V3zQAYTQkNKTmzqJabdz9g2tbSYeos8aSED5EtHkbPf3mWWG97ieHJYuerBePU",
  "key44": "qC4MmyWPrZD631YXsYyWV6PPRpTmBggc5dAVNUpxSKUCABzP6F6M4vFZK1CoFsfdbt9wB3u1JRcFSrdk1BRoJeM"
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
