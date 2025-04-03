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
    "671B9uwmg5AWdRw9435yrkJtttrn5mTehEJzvxj2epN8mCJk2XndQgcFkeXnWtjL1XgUo2S7d5uzGPGb3nKxZ542"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55FvhidY9vxEGcVpRhGWZ3uZC7T7QvxKiNN9BYoECMVW862nNiS3gCureYN5Z4wuURGRDEpKub9zgAcb4svyuRFs",
  "key1": "5bD5v6DimQae9rBK7pTKmhYDEvWUjvjthSsMaxjSS4CR4o2rpVLbqs1qZBLKnUjwHH6ymjkJMcQBD29uS86v2iBb",
  "key2": "4xXN6QHhKFXfJU6KLwutKmFEYJVez5V6p2D2MmSgcFcTsj5Qh8gUvw3Xm4Y2DcML7K2gdNPwJUeLXbPhNwaHN8FV",
  "key3": "9rrtPP9uqKKZnZvWDFP2NiWe8Fo1TmhaoHs2d49pANe6wi1mK9SUBoQzWrLwH8QQiFBA2uwWJnxXXVwt7JHTFw9",
  "key4": "4ygzdWceeBKAL2KVtYXEkUM3rR52R9Nh6BqZH3Cdt132At3c5D4nn8vq59JVNVKcfqcDgL5zJs2AfF5wY1o67xif",
  "key5": "5r88Jkv45WeXHJekV4Bhp2mE9KUxMYkYnmrFWGDDhbVhsiVNDU8VoVNfTxdgj282CSvSnRAwJYWA8Pwo4f7vHwr8",
  "key6": "4kqd8b73Ao7wTFBPQUrgd6eRHU8dZ7AnP995iVqhZzbZpbtT3kb5ST2P4CiDfSfT6popvcDauhVyHiZQnmsDpNMr",
  "key7": "DLs4KWSfv8Vrb5zzEfFYTTiCJNFaCHLdYTYAphfko71jYZw5MGqFP7NkqV21KUUZPqNt3iVHXSEuBkQ4BJCNHxD",
  "key8": "5TDw1FW9rf9zQ7sH5ftjKPKU4qaCi3A4bUU8nUbx3qxoRsvs62dGzByDJx18jTBu7eYtoGDp4Hcjw2QEs59wk75n",
  "key9": "45GjLJj4bjwCd5jgJpnRigFGfPRorVefx1dHUY1GHwKHBGBcuPz7PiHM3gaFZiGAKB1JeGgLct7CfMybcJDLDPXT",
  "key10": "2oMKUue59ug5JL8QUev8ZwFJ6jsbHZoDiRkCJVoacz1rvaZMmY14JS1FJPpkbVncg77Q2zhdommPhr52RHCiievn",
  "key11": "62CP1MXhpg4VXSgeuHP7MaXrB7CZ1Ls7B7nqRWCcqdnbnrq1FV6qJSKcarnRNJAChtd4RkQqFP8xyeote9zJcEpv",
  "key12": "4rMC4TyMC9xRZkiyUStPskC7y5XapyBiV8nQM4bcnnBEMQ5phvjJrwsYWkdc2qHj5gDFwpncN2teDqBrdg9hkRGB",
  "key13": "653qVNxvQtDtBzfKhJ5C7PYPWpwrUyFNC9a124nCfcgLKkoRuLyRAXfjEadY1izDRGcsriC1uaRjzevA5aFuUEAJ",
  "key14": "Kc3VbZX8HyFupH5TjSt8x5bw5v8nsttdNUxD8e7hQa89tvcrZ7WnS611sQ8LBCjSBszZ4YXoxKeT3jE6yJRMn3j",
  "key15": "5kPjcXgpqQ8CkWWo1vhbCWRbY4VRNZ6bumd5kR4QePoUk3cvDo2rV6YwzGtfgoJarzNfJy1Y4xFH7BVnhcU7m2AG",
  "key16": "2QVUdoFq8ePzdwXjyvJm5JALW7D67LvEorcCEvuVy5V48wFUCtMCKhj41JeXU3juqo6hiPge2tzjeLsRbaLyuWDF",
  "key17": "55N9962RWkjopq2nQN37nktZTyiLHxaLJwFbutF6hdQcP11RVWCo4hiR675gAC4Jw9o3sfbpjSKiuX75AbTnfQjV",
  "key18": "xosrVocKZEHe9Pkcf2xYv62FSoT1UrenSDNwJe1ogAdYdrzCQpTim8JQBcksTsn47w3ZKKMFv78hwk1gZJUWJee",
  "key19": "4MAav5KbisRM4yEUH2L1SBRfLy8PXTZY7Zo6Kiam7v5T3H1yCNriVfqsQg8zrpRd1ZskrDS9ymZBizWQJYnSVYr2",
  "key20": "3n1xoDApMxuzsUJvRc41n4o4dFzqpxbXc35wLu8uNsmszYEjwyymjSYoZGTzmmtQu5QWYSBzPsWX2DMhRNmtRrkN",
  "key21": "3iE1RXx5QLNuiSrSpvZCnazygZ4CmDkyxkp6yAsiYPyAnsZbibt4JV1XWjFgDnB718Ja16NRBiyEv1ftK32UAEst",
  "key22": "2Sa89M5L8iHoWwh186kjb9meqN9pmmmY4WRLm9M3sX29GL6x5thUCW1csRRFJSjAbj1kGx2iWeW5v7AaQZj5pXvq",
  "key23": "5YuskJGrX4RQEbfh6FawFn4EMKPAoVLRvfbRi6vsU91FePkKw61fVWwvSm32VeAuTCGk66X7ktzzfq5QKZayx5up",
  "key24": "3Nx4JcHihCbKVFELKHe4kcqazWhMYhe5w2UpZfr6eC667o9vtDnFR2Zwqtr2rBHbcFhMxY4T28pHmgzg1JgMgjKP",
  "key25": "3gTdg2oWS76ZFzgJhVHhoU8b42JCaMNB49n4kE7PddeH8ryQ5w1xWhRkajRwCpogFKzXMFMeCnLo9acnECXHNTq2",
  "key26": "HNVwpvefN9KKHXckWje3PqyqnBruJRpbBaktav17jEsDcpMHKyMFJh1ts4xg3uTvNuxuR9aqrphzFxUCYeHQXmH",
  "key27": "31GQMBdd7WprhK9sxFYutfsk7njeGAPa2hizhK2HW1m2cQsKnu7rGr5BhEdY543DXZXoxdhVNq8rUw4UyGZT1qbh",
  "key28": "2Dbb1b9ctsdLdRSyuJn7NEjWyLeSY2uDU2J1gzbUeKwmtX7yVWNA65eWDNZ2PfLiRzobhwqrWLEPyM7xHRYYb9wQ",
  "key29": "ZHLhQ9WMrZBrLMDCi4g9w9EKrv3AbWphxZirDgMSii5J9MK98Zpi2WzpYk2G7aGHUwy9fPAHbvGjphgY9B9WXwK",
  "key30": "3udmkeb3zfHgWbY3H6edxNXm6vKvRdii3h6MSXYd6xjeidKjGaqf2LXBS5swdmF1dtN8tkCoKyM7gSA7UWWjVzk5",
  "key31": "44fGk9VyQAzhb6qHMkV6YjJ4H59YSSqM9xrNb2rZamxXbaVPzLHsWcGr3KDtK31r3ucyKBVVezbTmjpN3H6e5prg",
  "key32": "5iRMBFhGBfcxs1ePstu2LQeGNSkiVUaoL4j8bbmNXZgY1yffXGHfv4oJ71xxUKXYRZjHTo3v6VHQ5Q7QT52dSQS9",
  "key33": "2jj2jc1GyQZBP9EN6XHRbbscQtcoUfSqCcVmarPWdBDKsw4edtCzZLXmruYMa3mRMRSzgmw5neCFXnPso3mYzk3s"
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
