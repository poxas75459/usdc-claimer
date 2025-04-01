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
    "L8JAuauNgjGxCzmw7zTVhHAwRc3uKvdk1d949WvzY1zfJWTtt1SsFNkfjf58YCxVLDae2z1fjZuynq955bCixvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qitxcyqu1FKSJ4Zovqo39zbCvjf8ZKxNGMdxfMsSjCbWu77G7vQGKY46MnMBpwPoUoX8pD6Q69nicYCKY6MMt8B",
  "key1": "357UKKLy3TtcQSp9wGoMVk1UoprNfERVp1A8a3R4TdUj2fSQFAkDvrYoaXyHTmunTu8JD9EJpTuN4aViiTwYtYG6",
  "key2": "27KdPdkF26kxjVzY7VSV1HpT6GXTuCLSPMYhgQ92FmaKhiuapSYaFxYZn1Hvd9S522TenzGKW6NaNynBpZqkpXox",
  "key3": "4D4hTMHbvNGN1RFagbUn6KfDqbfGxLvTTuLRPt6RJwjW4Kz2RzFFuW9DrP75PmUwezetfeyp2VgDR5h1V1qgTNSn",
  "key4": "4JUT6zZ1xHMRWGDTL2DWdvLACRDq2cV97yjHSS7oxYAPeHK5aHRcRjvwhHXAGGTqtuEHo6LUX9KYWidYEn91VGvd",
  "key5": "2zuEyZ8exbCFXZ2yRYyFEwXvbd7c651PNanbeZTJx3LKTku6K9C5cpsBaTqmxgoWyzTPkYEVSkC8LWddhG5XKB5h",
  "key6": "29H91JvgJJmvPw3P1jVHNcAg7wk7CKAjwXea3ykzrNyg7kpzY378E1wA2ynaSGZRgCPYK5Y218Nivc4WTWBBZcYE",
  "key7": "5haNWePqCAYR29MFxBNq48aDpX14N1fJdVoQwKckrZx2vikzqM5XF2XD3uHBoZNXqtXMdfJzqej1ZcyXWYZNV5ac",
  "key8": "3tsJYry6yKuJpPP194WqB5bMAG6hrtTS5j1s4EheJKB2yQAAofD3WNexmyFvrPJSXHp9zmCtHx4WhJZZqV4brHJd",
  "key9": "5tWdqWifX3kDib5MUtq3zzjGS4A6ZcAzV7492hBLtvmxHnjk6zwiHeefswMX4wCwkqg9d2oRF5CpgmfRCod3btNh",
  "key10": "2ye7qPdzhHKTpwb7KTZ8zLfSus1FxVeD8NMzZSzSPEVHhb7mRpGwiH52pQD1SviVGbSahXwoaCNrcyLQHoeXu8zz",
  "key11": "4CeFUkybqhrQXE8Ew25QwoSwg7PaXmjrn7gUwraqFHARGAvDW2gWxSeUzJ3KmzfzeVtTzY3seFEWpfR4zDqEzoAc",
  "key12": "5iuvbHmZYRyKViRVn8nt4m4DyofgDPKSXVmimSWaJhTAVZtMrJNeEW8Etkxt8WDVZ2Gxyf9dZyzM9A3HVHsdkXE4",
  "key13": "5HPKJjtYPKoVYnSWyP9oBMWXKsymgdTqPijjfS6XAsNW2PB4jHAAZmDsv4KsqNfnRuyQT772L9Frmm4AcAnFnsCq",
  "key14": "4Q1ke69v4uULNLfqMJRWmXSPKVL7pfmjfqyBQBgHHMXhx7pFYmbKGP24Fe7Pjmbecwc8n22B2tfVXJRGXDv34e7R",
  "key15": "3bqZv5C9FQSgkmvNEfyTbNUhLGZ1w9zkQEzih2Uoup2qBmTU4r9gHJA9A4tAUMPAhZLf83YTRDyrCzpDLtvq85Pz",
  "key16": "5EB6xVyGud7ubSyEcDh6DSp4mqvKyc4pf8EtSwY4xEA6AMGdNDkbQ1VCkskwScELMP9gXFJM7MCcFyoQf9B9ez7s",
  "key17": "2LfuqUuZzjSLQS8tfjKWAFXRHk2EK9rLAEbXArt9rL7XxXxbpiDsToRPmttikh5eWgb31W5Tx2yCxFAKT9kBGUGT",
  "key18": "58pTyYU1vGt7h7dunfnwzvVACfRhnpm5WntM7XjBEYVwCDP4rP4g314XDN7CyrrDxMYkUPFM3QrUi2oEmQrhoj9a",
  "key19": "2zk5fyeqPLqhJwnhVkupX9ejtUFu86XxQho8B1EG87MNGmYG8wuG39CnSR7JGVFkRrT6EYMoQwiAGytzw9o6frPo",
  "key20": "ZK7LdcuC81pr1NGZXJ89ontZEeez8cNWkoQQPdptNeqdNakuC67yWTwtRquPs5ydevpWhcrb4X1TTnrKSDv6Jxj",
  "key21": "PnitWemSL4kP9SgFvB4ovNiPHpr2UT92QNQcERoGz5TBGRDiyYTPdjbBLfh8tES1Z11qXeWsqesXTHkVzMErjV1",
  "key22": "4Gevz4FRdYPUNePzzworqPD9usb2pR7M7TDjPq4dXGmR2eo6vMVt8oUDfcvwTyAtJ9AZ49YmFt8AH8YJocpB6N5w",
  "key23": "2NDdNtVjrs3pNZYonLXnqT5k6H1rCfjCcQYPcPWZUk7aiiWtmBhK6fKqASJuhF9AThKeZWYxWd5ktCMUmD3YQnu7",
  "key24": "4wtD9VM8UxAc1TS2X1RrNkyrVMJramSqL1dpS5kty2diuD2DjQyM1qQ4dzKRzswnrFgRARfGn6xGKHQK8aZioEEy",
  "key25": "4ha488BML4diuW9VxsWq6gATUjWwWmfCw8xN2NUsMeoSMWw6BW7nLaUE8PasdWtDcB74DzwPk3bTriRcm6AUkYiu",
  "key26": "2cVnDtH1nuJXkV3xrzpSBYT2iD5aoQuZChpnHyw3vVGNj1KF8c1EWmDdH7NxDKXbbu68M6xETeSdn7zrzc5mW5y3",
  "key27": "gKN75mE7CLSMRC5vLdTpwTwhSp7rxb3eH6nB6WaZ4DFLkvBEw8sZ9UuyiooFeuWRSW7yZ8ZDmnY4TvoNFQZgksX",
  "key28": "635P7qD7peq1WEhEtSrLckf6gSHaYVwYqBC61TcGeCHFu222AW11H6ztpo7CphHfKCJVxJJ1XAa7hjc2b25kz4ng",
  "key29": "28AvX257g4oSuUuDYXhzoRSbrDZAfwxa43ywHcLkgkcD9b5UUS8J7dLhE9t9ZgVmseu7VTBpiNiN9aGyukfjnRUu",
  "key30": "3jbKS1nv6tLYt8CVrKpvYD4gUt5ND4guybwtoHdH6Uo4EN7NG9EzhDxPTv7yrYE2krRUdstLVdFYAo37Kv6Y1ybu",
  "key31": "Z1MMqHvqrBkMkosx8zdUsGs6297M5RyEyjt1Mm1TxUWJs8wTyP8KsnP8dTNMcZMWZzbKvJbcZszfjGSUcm2Zq1L",
  "key32": "2GL9LdEt6Ax18cqd6PjFFY3LNxKiJu3hdWAJgRsRyxa8ArfwVQ8oJ4Fdpu1xoHD4cDup9JsMPe1i7JAGxK6N3AFR",
  "key33": "4cZrZ8x6RRjxomjgNeP8AEsqTyBG4gQ7QK8WXwBUTsMFBqRCKdDWvUZw3DJhGxejVrv8Z9CLwkmnLqnWRgjKnCiw",
  "key34": "5tekZgCyGRe78yhS9ok8536uUmGVas3YExeFTLQgwgeGEMorRJYsC96xfqTeFKuk5sPfR4S3mGZYw4FRaWMHr3TM",
  "key35": "4nXWxb94eHGmRVQ7DftfytrJbzLmb2zUzzUwes4ZMQsZEfrW9eNiXdUhPrFgGEPrk4TU93XnPXCBbChL8ULvLeYk",
  "key36": "3MDGsj8C1Q6HcN4wL99Qj1boCRGLEXtzC6t7AN4TCD2vJgUYJEnkKAHGmWaZEi5mpFavvkoTdyqpmcgKHVR7v5jU",
  "key37": "5E5kQgfmMwEK55P6sBHrxCMwKGq6mtgjvsGax6SePDQZuzNJu22b96UKBTq8F7Z3sH2ooexxtFSatsBvfPWnBJPJ",
  "key38": "2F74gmCgfjywyp2A5uEZEPGz4FDXtM5bURQ6dYjfv3FCRDEJikKZEMbWYtpiWACR2SLhS9ZzsHtRCmdgMEfVEieQ",
  "key39": "57avczRY7tPinvi8XUyjfYKfU2duB9HXURsp5Xny4iunKmGMxjEYye2edG8bc2iBuyJqzYLii23JDEQb14J1W2CB",
  "key40": "2soJnfwyMqueXoTLdUN2XquH398vgVELR1y1A9TtZt3SQdGYjRPsTc34Hc66NfbQ1FTWjx9UrRBUaMUDVbrfr54K",
  "key41": "3Zyj94dVuqNqvB4bPYcVjgDYx8QZJVXbsYhbcXXV5WVWfed9MLBaqijXj2bGxS8MBDy8g4darKvegvV5ZQw3dTpM",
  "key42": "ex5ztYMShG82PB1KU6Y9toaZuPzwSmsedW16KBowveLpbFm3z7bMiccMQax1XVECNAtQRncMRnwbAcooWwjnk2X",
  "key43": "2zmUw6UdRnvPmUM1x4DTQP8gqhsgE4XuuaSZQLPexjPU6dppVbi1NWJ5KhddSdQ8xNaNayhG1zccknku6nkZtzTi",
  "key44": "AZfeB1yDdo2KW3ACk5FZ75s24uQxf6pkjiviKvnBosZ9wFEhoNXXTT19TSzvQHcA89h6Nn9HuuZAXKnkXHLweGx",
  "key45": "vk9vt4LyMK55CRMxUBN9Rfh1zUyzkdRFCjJNz9eDPQWXDgxQA7nN4CTXAWdJtCDDMSF9xx863NpRApv425nV4kS",
  "key46": "4R7Hxw8yri3GUyDsLkwph2MynV2JGmh4TLNCxuhoXE75ESUWfox16GprU9KpQMvc24jRhAdU3cm36LwgYqVEfet",
  "key47": "2fBygoiinrG7fcjpT5mrRsCzw7dzQC8EyEdGAB8LwUcMGTu7rJzidcVWzFDF9kSrf4zuvgjiRhj36wYJnEKyJxdW",
  "key48": "4iQzS1GoMi6d3rrRd7tu4Ycx9bkE14yf8xrShwvkpumqCZNAg76T8YTDiKAFFHusaTkaJ4kB7JYJuBtKByKFrMcB"
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
