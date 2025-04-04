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
    "aLhVFpqqnzV6NwW6HDbSBtB2eR9zYonTVqcuAjSXpMxMT349n9pRcQEoV3VJTW7agYGFa85KrmUVAfRbPEabKWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ife1u79ktMYHGvyDoGznbYokrKp8UrSnYQqBcWoQpT3LuwCX6uQXRZvuKzTz1bmVPNv4GN8UQFQaX5ecf3LfExB",
  "key1": "y328YwYUwecRLrVzP2z9W5B6Ys871XWwopadx5Dye6gAbANGxcR6gDm6dyFuWP84Du1W5HYDjXmz8xPhAvHuVAS",
  "key2": "5aDi7cypDKxt6UVRgyUX3tBQCm8ByUvE81SzHgBvXLoNPGYHYx1CbQd9gTAaL6j2t7dKapoEmDcLhcsLRbCiakAr",
  "key3": "53koz3pFAwrfQLjFr2yjS56NwkxZCKUf5qT4r6ATH4jW9xFiQHpqz44JLbNsbr8jJDkyAVNtegYsrcdrz2Fm3j6V",
  "key4": "37nVZNtTdvRgNrFVX9o2f7A2CZDt4QFefe3nZN37WVoZ6nMeWWQeGeYHoSnYVK9XvYj5qamW9TC2mE6vZXhoKw8B",
  "key5": "2ubSWCWDpB1evNfhajzaYxkAetwqGLTf5dijkp5CM62PAeqmHe7DdYht8FFmJA5VikmASacdy3ougwHuXCaspcpX",
  "key6": "sfoYJbGLJ6tMa6U3wefhxH1tkhyTHfsuJCsH8ZrxDvVEYh8d58SCoCXZdia3KLuMWdbbMRVms5GuLndSMwDUFph",
  "key7": "2s7kv23Zgvz4XoywUsderBjWt5BNBzhKaTZ59Y8vnKfTHTkh74vhj7otwCRveVP5Hn74JsySEQYgRNTNw3Rjinfa",
  "key8": "5AP9YWTwzp7rcuEiCByGhUJg9rUgX1rky7y4zWX3jxArnhHbHPaX46VwVyGNxyWFSh2UxSd52GV2rhrsitQMdv2j",
  "key9": "qbZjNf9W6eaynzjDVGoawaaitqopqZGYV3fdktPQDpAg37xpS9rbC9Qyy9jowZm7D6HKManus4HjPTj7599qJL9",
  "key10": "5woi3NLksG1p7VdYbF8KXrWsxEViJAy3QqaFAtp7noENCFTSE8Av8gtYwg1UACd16LqDTTRmJnSTKASFup9PxuoU",
  "key11": "49Ge3xS5A86b6EDhdb9vZ3KAHxbFzbgtM3J25Fn1o5FS4aYL5yJUuK2JL3HSXfNiq1cB2iBHbEdq6SBPJTfva5U5",
  "key12": "4NxEr63PJ7ZFYV3YsKDHKKwSwXFiJfrAwXf8wZP6S1ZHDGpLLYgkHcfubes4rUXNdP7kngRpi7WgE7Pqn9knUnYH",
  "key13": "2xswiQysskU9iaeLY2t8MbXBVsy5Cs5E7XYMh31Awxw9QfvjnCdW5KfyhRWhGXc9sCb7UmdiF7rhnC8zYRMh1MgS",
  "key14": "qdyK69NgPuhuwsTjxJk4VKZoWaEhNjbvFdMrXkFsSLo9j6dnK5YYuzn8VbWs9RTjkSoaxuz94JM1LuQTwG5DRyM",
  "key15": "2K64GvyaRDdNBen1CXFGkHMVZRdFqUtQHXrhXFpYJL6ZQiVZPc84cCYV1ZLZ4CjbacjVo3oD5eqb3r1SRGcZ1QgS",
  "key16": "2JNzZP6mT15g8bRTz9DxZUn4r7ctF2i9mDUThFF2bYP6F5kYALt6srV64YpBHuBavvTsVZa1jDMAXSvTrUihpRBD",
  "key17": "2X4wqr5cyPYYVcnQGaCtfnfPrbnfs4BsC9sRowEVtC6opy9rQhs9VkT56PVNuXrbrNrHvX7fDMhYy67Kip4QJrZP",
  "key18": "2tmknmCC8xjA4JwfqWLGTATxTfaxYwcS3BfmRpfXhwAPd69BmUyjcp6EfPGuMHUYtcLBN93KqBvtcM3o6y5WR47U",
  "key19": "3BHcYZ9JDjKmE9ztAmDxM6bDrZwJ68JoqnZubN2FgpfeN45CpvrResiqXfLYsnm4336BbPyLW3fd6Hdn85WVhoDF",
  "key20": "5xZtNDyjn7kZ5cKdpBPhhRxFm6ednTd1Jn6REJp5vMfJREdaeurhvue3HBPQaEr17FRYL9WrQhNrHKMhvPxi8Uoz",
  "key21": "FRAvDsMSxDwG9ALNtfrGjWmjsnD9op1Ut2bVM2GnVS3z8TZob3Lh3gH9dnFf5z9ZarLkv23bKXxS9eiZsThZWau",
  "key22": "4N77hJuf4FBKhp5oXVXvTB9Pei2PebkzbYGDmdF9BoGde7Qb4ZREkoC5aasQ7S3Ar5N9cu9PxesTxcEdks4Aa7rM",
  "key23": "49KTzrSSZEj69RR3ksbydAq1EN2BH1ZovN1pjfps7d46SRrRFWRQ4D5dwfAB7d4GihRvV9seyNkuVm9mjEK56aMA",
  "key24": "GbiN2EcDJT2xyeehE84cccDZf2rXS5MykqeHZB3Eaedhxq8SAYAXLqgPa5uyT4ZDU5a7mAY5YDMx6KecFzygkRQ",
  "key25": "44PDr7MUz33a6C433bsAUX5hu3xQ8gQrBtZth8wyZZqdSJhac4nWmWC9NXYDZtbaHZFPtCcJqHiiaUWgAzkqvpGr",
  "key26": "qpPj6TJ6xAqX9sUTw6fFCFoWB6MPxSGYMvLDNGeaRmd9f1tGbqDCNX57qqnjxuqwunDExGvSsFVULtPSf1uymit",
  "key27": "2xYL4eW92mnqWB74vPom7DsMpu6bfMYQLgPNdRCRjcHd8s11DACHDXz2DxCgScEskQ8XqBYE6Xpx2CKwFujUgRWu",
  "key28": "2BBHS3qVQe495wUFsrZ84XShNmdHpBKPVGii1rEFQsK3uAgjw2dGLExcM3TA26QFucj1bSmETHsnYzhEaCztFSRJ",
  "key29": "4XTbTtesVxu5Zgy9LX5J47JtWF3dcc6bEoApiyznKmmYUQ5AjQewqxNSKfSNwueRGYgovreAYNrixdLEW7WJv4mh",
  "key30": "2EUfANKt8UktyUsZuFK23VxXXYJw8WRcRHBFcDKiKod8xdCFmDwfhXgLnZirhdbvuvdJ3wWKvU8daJ4W1LFZMfqE",
  "key31": "k1xfZr2dusDai39CDNtdK1sYPpygkGha2s4xKz9GpWqZfca8tt6hw2EucNRMXCnS5wDDxQVxtdz3q5q3kC57naw",
  "key32": "4jWKLdSY5B7YkVx2vYuYvtfab67bR3ZYdkAS4CTQqoF3BV8nJNngo98Lb6pfnQwEfEyzBnxPx1dsoczQEoAfW8ET",
  "key33": "HuN2Ecre5PAGqd5c7y3HDV13iVY1VLDtTGDwjZuCjDbwinutdotRYyQnVv7jvGUgRMtJkhTDh9hPdcXBLgGELsP",
  "key34": "61LGUXhJaKxmGGeU4dg9Z6s9DSQUEcHNP9aFEiGN9G3zVAvj7tc6Rzn4n5ivabTVji2fhQvwGXhbeHgBgFaTYL4r",
  "key35": "55hPZMW9ePuEftBfbRjGsUqtiyhvpR8zNr32bQ9G3U68mnCKYFa91oREjSfNq87z79MRK8uKzfD3b37LpVqutWHd",
  "key36": "2Q5rkGm7oZQYFVwbXCF9i76rduH6hHhNdTMojKjAvYLPqVXTS6ADEBvtuthw2mHPhrc2NYQt8UCJQoXV6qJcxpYY"
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
