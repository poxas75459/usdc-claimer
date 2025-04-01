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
    "2EWz8T8bnRdPFiugtPhvV66iAX8KGDt7r8Bo8r2uQ1562u7wm7QLewS6vRdsTnLw3Mce1p9TfRj4yFiZpfVkEN3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rx7Fn2UcCoGDW6nniEUZqeCj6iTxpA3chVMSFPJbwxY8J77jbKsHccqpaSriVJct4hekkEGBB3PYHAhDZn6C9sE",
  "key1": "qiiiaV2BJ6yUM83NfvA3kp2evZpTX8GFAAZy84k7zsNm1NwTio6WtWpX3GQwpcjMVEZQ1bWBYNxdbFK6YYEN4pU",
  "key2": "2k6sf7N8zKnMmfubgUSr8MEJb9dMHE2WuLB9RXFsRUbzcJPT1P5B2bgP4Sn1b3D4TMANjy9eYVfvHT91qpBCTXNG",
  "key3": "2eTBvkkQv29kPfvn2D2XGd2o58SzNJQbg56wRG6ZHotUykXxAdHASeNHmhhNk9Z8kfExTRM9x7zmaE3ZCUY8oAN1",
  "key4": "2awaPBugSwmUzpPcnEd6YT88UCopFY97A59JHrWzh9GHySBek7GrPyScYZf1MKJy9QKKtmYYDyyJK9Le9kagsD9P",
  "key5": "1h2utkjU26pW4kv1ymXs7UxqqnrHKEUdpceNgsDXQ1WHXRmJqjSd6e5Lt1N1Yx4nkPue4rHoSTLSjzdiUCmMatL",
  "key6": "CPfjiKpddFztiWEhnhCQHBsZXgk928WNWcmNMKgfAxWz6HZE3ARZcyJb1L8VE87hV1cCVokrDRdE8icRb2kx9Mr",
  "key7": "V5BY1JcEPouDwYju6Gpu7onaPESEvTQnLsSAhtkvKx6CdGkQ3Jd5HirYvp4ArWXXokztmSwzfZUrSRWUYfLQgdg",
  "key8": "MxYS93Krc8sjrzYT7MTLjZeRuFQ18R655TwWGxD8jKLMeqGwUMwY9zzC89VE8RY3oG25LbHLW1EsHb6jBCJRoj6",
  "key9": "2KvFLSc3AxkJeZqcPekDirjjcxWy2n5wsxZ2zM34GSoHWPfHyHMajHNqZC1LfkyTuR5eYX1n2TkVJCdUseH3y1HV",
  "key10": "4SXAREXNJf3FxJMtQGvWWkEroMcSFAHP7EPyWrLfaXEoX96cy2nAUkxfugMjnhZNvyYkzGrhRmmQktihWsrLYYaD",
  "key11": "3GEUykCJbFms4QacPDXj7KdBcLYS3UZGP5AMd5hSQHXR6YhCPNpQKvuf3DPSuxHmp9SNvrhRKiGgoKcjb9J6vRzq",
  "key12": "sjxcRpswtixx33Q7Ud3t7Jnp77VFA5yQfhSTtCn85yepwGHH6RmhCJ2Kq496h74d4CCLmD2sCJj3sXhGCexpNH5",
  "key13": "2vB4fpkTpgAaxsq1uEsgtnV4m2EM2nGVgkvufJrCeFdsaJw8v8fCaFuSAwTDPcaxgoFbCJaYVeNMbf7AKHeddzph",
  "key14": "3nJRE19Nx4D9i6HuxdfrvGNrjxwFMm4yU3AXGiWftMcWEUUUwZMCxhy1fcV7sd9cTECx62fCPsbtWv623zkdSdi1",
  "key15": "3dsrURipnomYGWJ4wAxn4spwFg5yLvDT42i2dosP4YYBkREDJQKqoCz4io2vLFJkvqBYJowZjbpNxidGW3HQzGJS",
  "key16": "5fazygbnW38JFH8w71VBM759ijvvLn8Gc1Pm3YXYPTDXxKXw7LpXBUraT6jBN2EWwyCMcAsz2x2QCRvqiv7mJy4c",
  "key17": "5ogg6HsNj19WP7S3NDLrUh1uSUgcHYcaJbRy2kpMDhKqYcaMSLdUBWcjsjW5wsQFAdk75Na2CH3C3wjkQb863Qj7",
  "key18": "visTFAharP3jifQyNHUqbtF42iXFvkgHakJTHFmkF5EWnBXMpteM47F722Z2qnc293Us7yHdMNxMyWs2kGg3idH",
  "key19": "4BArWwb7bUvgYMFMqJUzBCXvYGPwbgcQDdv7gvuCC6Xhz5vwFyRzJiGSkZ8cjhD3SHtcWdiTUBT1fHHwCSXXVR2o",
  "key20": "3NRVkFeD1A1vjzQ5NZDrioChdoYdW5rdLLqNYTaJubDbRQGELRVCVhpJxmZWsAH3WrHkkgTMKStnwQFgCic7cgv3",
  "key21": "5e7sKMC1JicnCp9QhtNL1SC6WZN527ipbGTNApPZpfy1jtvFhKDeWg16797uF9jA93sBK5QDQr5qKsFLFiaz9SZN",
  "key22": "28zBDB3jfwonarpABYdirJzGgTCy7rGyeV5VeWdBzsAWuQr497a3qHrWZcnwF24czYXzbFF2WBGmExghsgo3YJRA",
  "key23": "4avcYik4r5j51UHFnpRLFB7S6Liwd6eXyM65U3XVRtgiwyNx8weN5EF5bN4C31opaANBLztcHXJ9hHvTsxCSwZm8",
  "key24": "2PgnKkJ7rZ3oD3kdJHZ7jMEcQT9oK9mMbjsfAfeXkpKDt19GabJ1bMvSx4PxLa4CBBwCWqruDEd17f9v4yyMxTMa",
  "key25": "3tiRsb1XB2FueM7oVcWN1KjgYykFSvEzqf4P8zCEj9aYvtJLLHjh8gGcGLnDnFJT5r3ztr7qKC4Cwf2yFRjNNiMD",
  "key26": "PNgbBHQ5DqtFh3jRhTe9PmMCGnv8GLVR97rPQxbyS6zXBobEwt3tXP9zCH1dWrXm4nvL4fMzbE2t8Cm3dvSuQ2k",
  "key27": "3TGJLpMNPPdrds43bJb1KRPRGtPXNQRLqD3osPQoEUwvMn8EjTjnWSQWFsDLgSk3vjdwCLwYNTxbHk7KzvawfKzX",
  "key28": "2emdSDq4qJSQQDkG1rxXZwZXdrcVm6otFwFdYb5at9JpYiXUm5wC1iLQPRGagfjUjKLkKY1D4S7HcxsFC7rPijQL",
  "key29": "Wea6HeskjguTn6FCLHEibhNB9q9qwxPaqEEUD9EgWfrwskPvMhy6axRYVyZsqDSs6hBBYGUuo4JdBXANkJuY526",
  "key30": "CoxEELG86hyjVjhp2X6Zgi3CoZ3AibCN5ykf6TxcNpZjgfKvbfX2gUWZfDrm6EhWjYrkfvPKV4ZpMbPDxQsz3jG",
  "key31": "zoscGEzPdSNLUyt7a8s7v1v4BGoSB7tzCzW5zGYcMYFcaAJn8qXSFom7kQXYwXw2bP7LkLYqwY4pXDeK2HmBv7h",
  "key32": "5RBWNaZFRezGHUJfYLSENfS3xgqm8uQf1MagXc9DkMwZZkhFiMCEm9Mk7pNPG9BbCp67t4MmZKe8qieTiuvfZKzT",
  "key33": "2uxdBC8on6mz7SK3hieZTDKnDRa4Dp6DMn7sFkD2YgYREbZbB8qwqGh1bzerfb4EprR4oT41ddE3o3Zhy8CnHiep",
  "key34": "4LVFuXKCpuXdzmnMci92sHMUAFpwEVfed2AvxFBVLvfjEKF3kygb3VVnCF9Eb5SMJUaxpeZTMahX6E4teZjvLCSS",
  "key35": "36VwbaoEDv6WvKZu3ohF3SEA78g2xx8aFF8YYgENvZPzGaKCoEwBcnsE6XgJHTaYddfnydFS8VJMmBm4BNogZTqF",
  "key36": "2xxV1kovMVKjhqRm75RXHBja7QWg5TutCaTJ42MpkUw3XqYFL52GU8KWJw6hMtxMzCxicQi2mgdqUqs5jv9WNRLn",
  "key37": "3SiX8SiMUPqKSenQH2Rcn6vjixZkVLuoiog7CawFPLRcbUWj5KRoaqP3yCF5iz9ES2JETY4NeivaYKpwJzWYZTfB",
  "key38": "3U7zi5znsUkrbsseyJfDawNWv3HJLLNnPboJmAS63QuqdY74Vt6CpdPdxjQFptXodrmM7ACwCzgGofzK5No9MHD2",
  "key39": "2dshAJooaJVMCWCKAUwZxsLidUtfdJ6JTntSTYxNVYD7W2XbT6RYSpMmZGTu5LFY39TVs1yGwAcDGBvVSKGcE8kx",
  "key40": "2gH31L8fXguVN7sVp7pMGCEySAGenXzowMVZfCReix8xFC3rZcj4Yoz47PR2dBsKgyuswzPB71PYbDaDS2AuSUU5",
  "key41": "5Qzards5mcXVSNex8U9vyahRYwNq2UCoVZQpyCqrtwHVMkXXeZaxpdWbaKvQG3n9ZtuHccr8TD7WWrVSiGFa7VLR",
  "key42": "2Cn3bwoTGkDVeZ68L1mKxUAfgVrsqEMagYakKTCkgpYffpyR63uC9dViSP4fvY25pVDeAuJq8dRhDctifGTCBkYR",
  "key43": "5Nqjm74SG6gXJex31NGBRi4h3RNZXoGgS1NGY72KFK7Av6qECUgfuzg9ng6juFWTa3Go6hpqFAYWPA5Wf1fhd1U9",
  "key44": "3pPWKQytt5HrjeJcrzW2wcFWqHrpGmN6HrUpmCri6e9XNFu9yUccdNffaqZS1xs5LayaWEWGrDARtZJJc8Hes8mY",
  "key45": "Ra2hPgJc2wpaP6h4eRpWW7iEKK9VUfx8nyvyg7y82Eagpwh8tGb1eqQTD4UwarZhiZvdLUKycL8Ye7yUhfzd9DQ"
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
