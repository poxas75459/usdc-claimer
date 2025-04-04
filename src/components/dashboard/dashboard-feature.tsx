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
    "63NhbyquamxapBJEcj4GN7WS7H65azc3bHmXifzDX5fNzeReVa9pFcVWHqJkxnqxoELTm3mQBc99gZhj47TNWCzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FWJ3xVKQD3ATM5GvBEC1wEgLSYbkd2KXTCikAoksdUM7Myr9vRYCHowZM8ZCGkWeSp9kSeq9k3cGrDnd3GotSNj",
  "key1": "2TJAgb5RraMjbYmgZuKgQdMKJV9eRCbEZ4c5WqZxZAoTaW9fKTGFiZahQTcRWDNZ2UFRtz1yJgRuyr3KdiuD527Y",
  "key2": "48hz1rezPn47hDAMBsQ9QUkEb8Vu6F52yrAQuhLsfC1osjJc8EXL8cfneT8p11K6LXSQibfW789hz49vCQF2qRKC",
  "key3": "2Sjy89bthzDdgnv5VJGDr7Ez9tyHcfDuQonZKNXRXz6SfR2DWkdkfbHfFYWYrxkmh4dhNQ7zDGDWC3k253CnxtcX",
  "key4": "ci4yUvwY7kGqX5QrgBZ58uwFfbA1EDax9ftywDc2cFfr8bEYFZwku1LaNWQcxzJvEBsvBEsUm1G6tn2JWgzYjQJ",
  "key5": "2C4JVz46HBiBC7kTs1N8gRGHxeFvGi4L2d5gqh4XqrZGoTFWMTkbhg7fQenMikjSEQFVL8BZ2SD3NfpJh9uNMrn6",
  "key6": "29mhWg7pSHNiiY9GkbkfHEdMa6yMgJwXvPCeD8E7oPK8x66k5SH1amQZrenhRK6uLnf7EaXhoFfBiecHizLdEJ3r",
  "key7": "rHzkybFjK8JTDoWw2ArS9GMhpdSUkvyRhMeZA3CqtmmCbMWicEZLu1AaJSB5VWhjNaF3cXmKiMnnoji743L67at",
  "key8": "jcPWVoedAgbGe72iM1HBsCf4zeHXWghAscxTLBBLZoAt9FZRokY6XKPEZMt9BRvsrXHcB5fUMfADrhh5okFM7do",
  "key9": "2xLnMQLiFS3RyrzxSqNFPpAmZzkjBDShWCTUQ196NBJVTnXLWksZneNwuW93xht7msKUzE6bgNjXxjrx8pdacjtZ",
  "key10": "FoeiwzDcwTUpBbuw2ip54fQLVX9XcBFD9a5VUrX8nuCaLPMn9fkEgXNhB7JXwgeDJAqAtVca2PukACfoPnmGt38",
  "key11": "rfrXv3EiUXrbYvbe8yyN4R4XgY3xEzvbqtqMQeLwBMwiKw57wDVFuKpw6Dr78pdAUMXkU5VQC9yn3ucUDkKisQF",
  "key12": "4jdRJEXLUdVp13ad2bt8kpbNsLJVEqva3MeHtZvGtBwpAuZba6KxEK3zBX8gZcwMsd69pE1fBBq53242zmbayG5e",
  "key13": "4AZmEBTtpTZZ17UJB8sLT4NhYsL9NFm2FrjMo6NTtgFvDztH7drFgK3NC3Y97ePwkWYhEaLwAQZuYKYk6kctCkYr",
  "key14": "XUuU5gx1ouXR6cvEn4t8rDkLEQadyLgEuAR1mX77c7mDwq3yssAodpLVYtcJ3XBopxZj7hKCTUhJD49MArw9Xag",
  "key15": "4B9BXXvkMJFBmSfF4Pc854EbKVyJ5XZz7m8nRFxhPA2A2n4umCVStL5HNXx4KnjTfiZUiuMKQ8ZFxRjT8Zs3otPn",
  "key16": "4n7FS3UNx9wvaBH5CJe5ozobgdymyBVkXchSs7Cre8q29ZzUiw6MjfihUccAWndCQgEPn2hK9zzhumQGjfW6jrkC",
  "key17": "3mJruG9LNZNopoCYFbrchYBscucF9S29L78W2wT3rrkkqCeUF2RcPK3dCLy24AeJufzoAnT1zWNrgyBoj8KWrAn3",
  "key18": "2cWVp6mmi8HVvp2qLFgcGpw4AK3E1Emrxgbh9sxWW5kFfjvcc4CQKLhXQmoc8yZtGc6DBeRfGW9JNEZZUwYJEb21",
  "key19": "4rK6b9TQG2XR5ikLicYYCCfbFMc5yoSqhdrfPDGGGvoRAL8EmWvKLRLFTi7tZUHvmPytnQNBH7c8thdSKXMrCsL3",
  "key20": "2n5v62xw1oNtNHYvkzoTAaFFVSQdHQ7TsbjcW58q9f2bi2UbkA6ZQBuqEcSGXte8k8iFynkuH4Wsujf6osFBa7op",
  "key21": "45VM9u84p6RijZh4BKzF8F9TwAfjFfSvpyYQfetVZ7YDZxJfXmXw191PfhNvkLdTS5Dfvvo6hMddFLy7nzuDqjjM",
  "key22": "3bjGQrxcmQdC4wKLTxsH22DBw9kVRqJU6R8Lv4hUjoSeP3DBqsV4YNBxe5QXT5QNZYx8cfS9EiBb2sF3zSZRpwey",
  "key23": "PiZZRHwgDm7WfVnA8DTBH5uDt8JGBqFY2yUdsCtzfeNLbiUwBWzUfnewmtBZ5k9S86No1gzdmzktGdzRY6kcZRr",
  "key24": "3KTwHDrJmLn35mVFvxVcnZyrJprCwHaDRtfGFiHjEEoPhNsFfMhkyRHCSjy2vYEbzHdcnVcXdtX473Ls44jmDuKk",
  "key25": "q7DeHkszBRq83ZYjh8B54jGq4gkwrpdzsbYqy4u5nrhSC54By23K1byxEgJFzWNHBEAyMYMES3972LnPGpmFcWB",
  "key26": "4LPNqUEoQxtDPGdNpnBeRoKSMAd88xrcMNYnpFLQMgpFskmVmGSmSYBoVCmq7igUDCqi9RzwmNBMYtYmnZiakUFu",
  "key27": "DAK6JwC4F2FyDnTJveTcC1qDcgM84j9cyC5BaSFyfnKMqqLYFqQojSVkFnpfq7MCn8crgkG6EoxaWpdF9EwvDcD",
  "key28": "3rHrFcXfoPM8sEo1F8KSZsuF3ohrb7QU3kA47u3YgoPpFzLqm9f1CxRe5zVjx558mkEnJXvFDhAJwQuZw6PYSnnh",
  "key29": "3zh2tqn28tyPKyx1GiHfPG1aVLbt7wkV3LfsUyyDNVnQTt5hnKuZv9uRoFMEhQkhoBLDjmu5cG5HyKFjhr9DfpeF",
  "key30": "2B3D7sBRKdNHWBVQbeBSWVdEGs3zzV8RC2A4Yi1fD7YyFf38gr6NNTj1DZdNe4ZjPrqVkAgsNqvjeSV5gu3g6FFP",
  "key31": "3qmzpRpQ74bSiEzxDfCjRxHRZJ7wjvtX54WkeDbRTxaducaVEQSPZcDkgvqdhBN7LpTf6Up6KizpfYsRwLhRtPiY",
  "key32": "3QSCrxfgwdo4YMktJFj4wNgLx6ZAK7ePawDhetGQgY4eBmNF2RBv94wUbFfJiKHkYBDS2eQpXyL14nzTNqaj5b3w",
  "key33": "3w166eHXPXzrRkCYwinFT7zdQPr7rnD417C9h3nxai34H8Hi6jW7g9P1AGAwKiTjZkZagG73q8PpqEbcB3somiMc",
  "key34": "5U8rFH5YezGEkHvbauT9ESqzwpdnkBZg9bjV8s52Vb6oj5pakMvhjRtLma5c9gQ4gt1DJLQkRdqBkDU5nGWGBFin",
  "key35": "3vRqtRyc7E7f8j6Nuh56ToFYv6TUiKbW7uAeQcg1yHHaFk4CpYfy5ZBySY6Pd9UzXGHabaNuJPX3VwgVQ49zP6nQ",
  "key36": "4U26eHSmZgVW6tdHKUY7St8Hncst8VxxNZGQYuskgiFhM9wisZmEU954yFA3TQJRaFR8PeFM34rmFndSQ8QRu8SX",
  "key37": "MJzz5ZT4e89hjYMeHAN3u1GsvNPbNDBF8njmkxvi7gEWU7oeUBxjdJGkWMDJxLXCWFqnUR4Ta1odjNjezjjvsVE",
  "key38": "mybDCoMiq4nF99DqV7YVHxC7Aw6Sh24p1DtY6nyjwdK94UD1obSBi2NCqwXbnYosiv51U8ybve7T59qCnztvXMU",
  "key39": "W89FKrxkYuVWPphsExWncHW2Wi1omURwF75XwkaKFfNrEQ1fRqW1cvm5KzG8Hz6u9EmfmpaDQ2R9UYwq6TJ9x6n",
  "key40": "5G3Gvo2GTkJtMFnwPLfoKmpQtgYS1ycRo5efxgJtropjCEoQ13FMtdPtyzXVXrhpwCzcEGGgPuNiJ5jc9TUVFsCB",
  "key41": "5SRYvWYWMNvETj4tWAwHusiFRKJtKuHjt4PB2kAiM5uz7kg5ESMdjdNVR3nvyzyKRx8HAari8LSTodFduBgRNnBp",
  "key42": "4icXGiFszrRRtmQBGNGdQyFo5Xq4W53Gd6fwxAGVEcNcfK9DYij7dF6vqkyxpY56Qhwhcgvdy7AqxDRvRA2zzA9S",
  "key43": "4MF3H6FzgRJNtr5DnmYHz5TndsB4HJKsrU6gWuC9d7Ko74DHbr5ZKs4JPVQ6uaxGxw2uZrJocYqfVSgnB8c7TdQz",
  "key44": "5Jqa8jJYkazmMcbpbuYPQDTqPk4Be88B99SvrU63BpbEFmJ4q3SsK5EgASw5jfgcmXxuBrTHChzuBy5RwtiUfgrn",
  "key45": "3xWVLKvw5UbahYQqBNckGmTKSYicFugaHNEZ3TMwCprRyBWvv2mwCgGspY3KUhVUscuNViYH1BVe1wFxRjMHsxbp"
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
