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
    "7iNs2UemViWEFK9orem4wgA6k6GV7djrw6r9dxNrLBWzUQ9HgZBqxEJFGm1pG9RbgRN5vVvbWWeuA7bsfntSoZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wKfdrKDqLHX6b1efJgBD9Kqt7dspZjZoKYJGTEue5LtRJcAcwGAbSQsEcLhsQxdL4Pmsuyi6EwMZiwmaRqTCp1p",
  "key1": "H3Pv41URwpnYfHvoL1n6jATSMoMXsRA33Ry2XGbkH2DCSVB8ydKJtds1tziP8MNNMJ7AjdLKTW7yhk3sQkhtwey",
  "key2": "4aHGYSwqPcV4vmHMsg4Wbf4KhRJFJpdKumjw9ex9sTzZWyfuG6uKmZGPkbgstvDw7KxkUwCut3wWD3MeAnZmmLYR",
  "key3": "3L4vZUBmp92piGrpGshKciVzMamxnYdXBn7HUtyMi6LTXvJahCeRiEh4q3Vbp664RAGBPeobwKZ2XA1CDS7mLbG6",
  "key4": "2ChjivuyMZu2XoziWWSScgAWDFP3zx66WYf6uzXRYksPj7JkVwmpD97m6z2RKtxfp2JgBNNPR4kTu82sAKEcPUxm",
  "key5": "59uVaT3HQdD5WJbjskTX9kEksfhXs3y6Mtsep4ThTfh3h7Lhy6Mmh6zCS65R8HdFQMSGQcWUTWToPspFJ1PKyAWo",
  "key6": "5nBYQHrbbM14gDSeycifYDDpaGZS2XpgsXvNP1asvGEJgam4GDPQZNmhw3S9PLugEWBPnw46N1Ch4n5xHNowWjqz",
  "key7": "3aco1vJySWqMnbMeTWvhwkoXf3ef7ozqJ4hGKT7beR5CbP4mMXsApVF7MFsPnehjPfsKDu65h2PneVmFpQpX37fQ",
  "key8": "5fbVvuxaPJMmK2sY3fbmDSYBZnMMYNJ5U3m8yjTKcyZ7rUX8dkksYkk9M5wwuevFUBwFcsS2q8qovmSiUKRB8hFx",
  "key9": "4y9yrHfesL3EcjQYsDFSnvwoopmftQxF3mouE8VTmpuxUE4A5FzwyhYw8p4MT4WjBV12TfLtCfWzuQSjKmTFvYcK",
  "key10": "AQJ8h4uam3WRjHNoxT3YzoAWZLkXMn2QwyTkx3pRLPJZvxdAaCeWmhxmp4XYYQhj6rDUdEN7z47H8Fa3BsMjG59",
  "key11": "2QeuXJf6VeQyRY6ba4PyqJ5g9p8M6muSGnhgNboNBhdNEu597myVqy24JsrdFQhxpY8yTYHbE8qF3HhoqDzxKe4n",
  "key12": "5yF2W4dJWZV68U8xMiCJpPoRESaERurYvtBNdqTZQLwiUCKFiLaVcxNZUrG9SASM4mYLJpx41CdeRPrrhfWD1man",
  "key13": "61rFNoHpFVYFvRxMV2EdNntkLYpgNreb8LatgepyYrPFKFbdYxotNVrRqDtMdJAGvnYeHTmxr7xLRUGzvHPHbp8Q",
  "key14": "4kg8CYyHGCuV4KbZMQPYYiDGD5L52GBiheA6DvWEb3HehPS8MD5cpAyrdQYLt18N1YAQsa6vEQaTtA2XWMo39VQA",
  "key15": "2781SJ28oeg3rKtRWTBG7RoeZ2BnX9WFiqk3n9izpjSM7Y1bhHK3ZRpLTfrEvuJmHwWCxtFkrYVt198WdDfuApHv",
  "key16": "WVzoR7UBQdrNQW3j5nQ6NHvBWsXpAqKA8nNoM2x7uGt2Zj7uq5MNZF2miTPKxGP5n2ZH8f47HbaWZhMPEgx9QX1",
  "key17": "3GHCfi1EXPieS6e1N4xghjWknPFQxm17Z7HyaPnsg1DYDbjCwZfByMH3xDNR9QDkkRZAAj6qLSniua5Kofn29u58",
  "key18": "5pB4wduUEz2FxAXd6zZdzBD3qyRJnMTLJKwdfKqotHH6CWqVaEWZr7N9t8DWYTCSBbedBoYySJa4Uq78tCv4jPve",
  "key19": "3yL68ohYz9Pdet6cupWejqyEhXcUVzvNsow1PYmwcQ1DrTspq9w5a2J6Z3FDquXUPYoA4D67yhPbLvaCkJpQsG5i",
  "key20": "3BPZjHxrcvwVEeD3q7QG1iSHSJE2SXJNrkQq9EWESb1JvmigdnvfehHbks4XrLyFuZQUyQ4aX5co8mWedXa1Jqe1",
  "key21": "2o2LDXbHigHVcpTy4HiMuJZAPtjQ3j4pxte1WgsohSFykED7TB2tsTUTTc9UnNuxkWypgKtnLrwLn3mkMLZhpDK9",
  "key22": "wLZFhHQayxMvB9QvwtgMxxknczvRbCvozszmeGAS7JTBuPZWCBLWAvR9CPV93weHZKzXzpSfQ5rHtBbDhVPAJNJ",
  "key23": "2iRjmPp8JtSfBmPBpJqfdT9awJiXhqdj6dHFpQxvv5SpTvPWU8eTAvPcPZPwL9U7uwwuQ4DjeN2GnGQpfFbuxhSP",
  "key24": "2sRZNFw8FXpsshFEptmFMbTz1VAdNbmBSTnGyY4RG1RaBuu4Px2FBC7RTJTMjwX59SjDdxPYT67rvoRLfAqBPWv3",
  "key25": "2JpcBHjENMpWxsAkCfmZt9PKCc12LqKQj2wpV7aCM6P24vTxnB2v3954t2yv3jpXekwtgAV3PpmHzZxhkF6QSFVM",
  "key26": "aCeEUxe6F1goJY4vuCLmt2kVhWnA5e1LHmpdMxgUdENMwFn3gqQxBTk65YAD4NX5hJGjBhthdZzkJWuZEG8GLBN",
  "key27": "2KBbxFqn8ijjgzSiKMsXoP9FPAWnRDintd5Yd2az8GHjHqWEnXW581y6Yi4hBBisGswWtcqqsrhWsRtiai5iFgga",
  "key28": "nujcrmXMgXRv1sEb3bbuydavzA5jNv9AUQpJuB6Y1WRH12XS7LbwsSTE63gt8bPXxC1T18NZSM3FJccYSCdcjyw",
  "key29": "2dEyJg53VTFUbQA7fbdqVofzrQ9buRZrJDM5WQac3Ee4Kt45V3aUt5baynMDegB1gGrqwmTrq4TceAPHRAGrqYeg",
  "key30": "5Aq4LrDB3jyPAigMwGcgKcLaFLHa2s8YyBuKvaGZL56yfdMbmpJ7GWxdwtSzqvPmv2Afku62KbPN5YRe8zwjAau9",
  "key31": "5F3TXMuizUyY9W3DeNRrx7yKQEZtS2Ssj5SwUeXafoSFu4KUCAmwGnWx3RsbUV1Kr2wtBi4HUnq5WKBDu9XNKKjv",
  "key32": "LhHkdSe4t2ZqhPJUyWmBPSHkyJYnuay8DZ6C5sK15urgVv71ik5ACJzu52AHWP6Gxn8B5YgYYEjTJKWCzPGFHQJ",
  "key33": "3zuBDyFshT1GupnjhoSa7Yu3TZn1qnAv48JBjsZ1pnVkNK5jqCftcqWj4Wnay9AAW5diWfWMjeaEx6neRcUvZVbz",
  "key34": "4oRDGMx8EVXuy5ArjcnYUsT1wQjzHyzgdS7BGKRNgDNd8a65S5NCYN7LU5KQezTnpMAAe19Cvw5Cmk1j7LnwbtDP",
  "key35": "m1mZQLzXFrvNsYEweALWb1rGkUK6QScV7dS8Dr1ft3BR2zYnk5QWVDNDzt5tgkLjnH6PPcrKwt9cv8N1a6572b6",
  "key36": "2sGUZUiGcbyXmjFKcUrbHqC9p3ePHa8ho6qeGqGEQQcRV7ogoHKnVA4JZACtyDF6vydHuoRMRJMdpEoK6txAxwMv",
  "key37": "62ASssoRuENhCcrYp9dDWSTXB1b9CJyS2RFtitXYDbNv15CksP64zRunwranAsb9Avk4ehKPaSPNBLnBF2UabQib",
  "key38": "4zA7H9wJcBJARFtFG8mJ5msQcpC86pjbpzmYYLtRh6RfWkWtVdk6RAQoBhjrmy1M9tqz9vohp6RyPW2kjHFS8BnR",
  "key39": "4LZWp7uW1q1QXBgJpuoTRvDtTVf8fwdAqgNkLUSc11yXv1Syi7n9c3HtYpf2ihAYh85yY9dh4YPFZ29q81eoj14i",
  "key40": "4Gj1b1d5vLCLdSeQrJNbzJ8AM8uxdi4o2xp6ZH4zXJAxTaDFyUX8vKVqxR49URYe3J9tBX3Bk3SPuJU2o554DPne",
  "key41": "NRmDy3amtYnGasDoHqupyHJvWrHse74m6F8BT5zD8fgmohmFUisCBA6GYSnoUViCLiJ3fqHSy7FdtaoXjArMEEX",
  "key42": "65uhZFKCnACyoN5XmZMUHk9dZmBbAhAk5p2niWjFtvfCdpCEbZom98MMS5doBRcg2omXby3JNpNGqPS3E1JvwKwj"
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
