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
    "2AKt1nAwN2wq8V2WjyFc9pkXc6hHa2FC6BFSgav2mMyrNow5nL4tDaVkEkRo354USQZ3uMKMvahLWy2i1jwu48J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tkMhV4YwKJeXUkUb9s9JpdpGB9HipRbgXAZfr5P4Ex4yZ7ncjtJbJe8HQXXxHVpPHPoxBuVJccp1FGhu4vupgBq",
  "key1": "39VLXFD8t9jmdGMmZsJRSvEEnB7BQyBQD8xCjA7e12GkRTjJRq7KNqpjnsafQzEMyuKAZWWv8VYXriA4Lwoc7Nz",
  "key2": "4RMBAYGzkNHV1tTEPeEhxNeuaz8AVhY2Un4MsfLJC1YAm3yx2oGbndDfKkrUJXhqusrnm5xFrKEtr5FWTrjZpDhv",
  "key3": "4eZXVUXnCPXfEtCjoidA79w66jf5aQH2Z9zkeJnBh2kfzuNSrNPhSQrxiQoPLifpeCHVECjp7asQXNXzK6cGAng4",
  "key4": "5CBfu4pzytmusZb64Xmn45uLdCojCP2Qv3v9gnt7GWZcUuNY1jG59TjNakwBdFCrPENAQgJJJ1gFQsZAUShNGnrU",
  "key5": "284Mo1Cg5rPHiq3H7ywSjtavRwdjKndJfKE4y3cF76iJPq2vMJ54SK9ZAKMJrByhNbmkWFUTBBgDLsUQnaEUmwD2",
  "key6": "4FqRsQnzcyqn4HxMpDuHm2TehLLd6jYK9LXstEn4knzyy5nZmzeLKCazuu5cZGRb2ViA6uVkhsUpcQZdyofyLsSM",
  "key7": "KSx19nniapZdL3qMaPijfLERWnAfTcA8oTeUzCYJFReDtkpCtqGycNWsHuxdgAkJPr11GaMQUPN1g5BiJtd4eye",
  "key8": "4RyGsVy3gH1d9dGMErDP2q8LmD6ZdLjKeuJp1ewCy4BCeqSt7GHayyka5pFRPWYcYoK6CZ4f8iM1cPWWJdKJcFWE",
  "key9": "21mTjN1uHSjUdufLMn676pd1akp4PdhELmJispVndAmhLTsc2bSm6Ph6jTRfMe4CXXwhvNUmEJs1ftNvnrFH4xp3",
  "key10": "5CkJioTzUC9GAixuHxJ2AHwjF5Bx1DogiKRFE181srgTMdaGKTHQRWTMuGiSNSqockfjQKspihvi3ETgRaesk3P1",
  "key11": "ygAXmn6LC99MYVcTjqWYy8QVbH8Mi767XHTmjEHvRJSwchCYbzgaJJaGi5jk1msrqLtYeWmjTXrjHuYM99fmT94",
  "key12": "3vWgToFjoZywxZ4e53ACvi7tJsHczFmkMFt61yvkwoLNzVte8SLBEa5Ezi5CyER9ndRyCpM4shL1fVoS1L9SbjGr",
  "key13": "8dVSS47gNmFvwEhu7yAyLoWA2BHJpmTBJn9X5Wqc36MqcBwibqdMVFRqGwkhYffRtm5uLVpVatBMe6nGc3VBxCb",
  "key14": "57RfucRKb446tPL6b16KYbrmug34JfZBkbLPuiHVfSG5zPvtfSDTzesXbgztnLSKZYFoTSEd4PLy19HhdAw5ieoN",
  "key15": "43ABx46LkWJLk6YfAw2vy7fHFu4cv2Fq7p68QoK5fZV44KSeXJugP8WEKd7T8NaaBrnu5DSUbngeQ67AsuAdoE97",
  "key16": "2HYfJrAGiLctzbwiLA6YFqBavia2fYduWjiagLELExejZbs6uwqeEAQwNanYYiBmvUtNimb9GkVY56gaLwyyLY81",
  "key17": "Fh4nYHVi2nmco5JP6mniXiz9qteEgxyVECSdVNXfL94zZTeVjCg6Zi4pwKmtseUmRfLMvRsdSbyMfZeEoeTsoMm",
  "key18": "4jvCGnqwifzP5TShUxCb2MRmt1kbVEfaEjhyMHCGW9F5wy5C1KG21HhBvVg7SQKGmVigdg1WET554WJ7pxzXTrBr",
  "key19": "5SwMnAYpnfge1DLk5rsKttkZdPampFKdisZgjhW5xtK7dhnCdcEeqpojxXWQyQKTSTg1RAG96o6EHpw5kNGxmaN3",
  "key20": "gKSxXdoYxSHE5hqF22Bi3wrgMnEyDNQx3iVfBczypdTwLoTGsFtt76AfcQ9LvGaTVzF77qTNYuvFhUEgpARtXp5",
  "key21": "36L7FTxt1ixjCjgvDaYmzasnBbkF4VWZDnowuXKkgxSzKieC9d9c7JYe2vbGaf9b4vo4KTyWThEu3pnw2qu3kLt2",
  "key22": "65SakkjrYusFXG3Uq8Qb3gcCB2EoJY41oxkUiZz7zowXtgqNSGwGeEsDw7PgbEeuLjWtbRjsTUYMeb9hWvEANYE3",
  "key23": "2S3sTZGYKNMSotGENCeyudWZWz5oCfjc3Hd1BX5Dx5HXBG14EyZNmikqMY9SXVMDHPPJdyiYpPCBJYLqP33sMoGs",
  "key24": "4uu4XSVuWJnvCbqGDgEDNF9rBXVzzD7sWfbndyZFC1nXLdGAmL1T2vtAziWau3rmC2XeXR7iqViScWD2GPJz1Mg9",
  "key25": "NCqZfF2FhR7bxKmkXBas2CRemdsHH1hmW5AZip2QwD6nkLWwskLqu7yneTWry4ppe3Fm6FrmKaQA7sqy9iPghnM",
  "key26": "4D3NKiaqChifhkG2szmQeESVpxqDvEnQ8YndqK55RP5GQdDz9ZKVckpBX2f2ar1Xqsf3PJqm7RaWom4XVBREnLmr",
  "key27": "2kYZSUTenNUwPkjHrhjAK6JaYcB26MK7U8R6djCYDWnC7p8aB6JRU6HVhG1DWCWNR7UYwRX82YVcG9JsLucBBCDQ",
  "key28": "5z3NNxBjk5NVwpK6eHrQwyqSpSi6bEVbwPmLrw6uJYuUDdv1mJ9A3u9xmqjvisXXycgx9qhNQ1xoT8r2eGhNFV8X",
  "key29": "5LVUHMHBWDcqRyPfCSQUeNZE4cnMBGZtMKeAK2cp4BZk1QYf5LTv5BELr6DeVFtDmgJECBdnDwUnapCFZZLJSimj",
  "key30": "4zzGdADoZnmWFKDswG8wTUhwrbv3kfZrq9GswGPX9L6CqXFbLaA25tAxiGRB9PDV7EVzqVuWgT1aePy8jf1x9oHf",
  "key31": "3AdLnT9BJin8q3oEWFQn8Bapaw1jC7VVH6Kw9teWmhK9ZwyaftXmmnHN4tCA86NN5HA5CLhamWzrXitjYybVFuT1",
  "key32": "4kcbs3KJNnjGeSganLuDUm9EJ2xQ71uELLjQsk4P7twJAg8ZAmy5y9JWupiYnMDQEtaeW7z6YcwWP48dVTWTVbwq",
  "key33": "55Eg7vSudpz3XJdnCQx8i9sbvu8ARFnNgnhqsirrFNY9TtYywtS2zUD9a1BpXEbHuhBqMyRSq37BwmRSJqk2rArX",
  "key34": "3rtrqvxrA2N12x4PuCsVMaE66U2gQWKHnhRgLsu2iPPyb7QwZsj9rrdCL7DajHXgZg4AA3SmAbmK5yCPYHDc8FtU"
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
