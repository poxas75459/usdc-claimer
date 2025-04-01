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
    "3yrsFdsUUrjL8abXFUcMhsabnB3pPw2gJBMrTRXGBg5QtMqv4oiHDWCQSqDb4fU4oKd1Qm7TQQQnK4deJL7P73e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mj5tpfGPmGjePFEVdNweNz9u3C58rKzQnYMT1WN3GKaBAk56E8tM8ccnmpL1HmYfWbBywaXzkPFNWWBNdnsfxhP",
  "key1": "V8W7n8CAhJvMHagxP3epDXU3quQHzsdW4yFp1NjahvVz3kgt5Pi7SUoLJVJyqcCQSN341PqBtrYatX4zVA7fMrx",
  "key2": "5duz4ksntAqx4YY1Gfxw4TkTmbb2GiG5nUBq4xW6UQCSDRRD1EM18yLVmLqW4214GjzoDocNWm4EawyCkmo1zf3f",
  "key3": "4nk4vmersELfcQjwcTimqYPvgik5o4DgPfpLUfKP6byHb2QUJQ5ziDHs8cu5aegF3uoJZFvtCfzwu7fJMBJoguw",
  "key4": "3kx3o4eFubUmTZk8TiZy4WDfAwqvVbteUphwCj7DjuaRFgvRPWPjMk2mQ6TLHqbPM99uAnMvDAYZw3xbaqiY2FHL",
  "key5": "5Bmwf6y3bibbe53kHQWantR2JuaBccQ622Dw9X6WgCjtYZ89v4gnVefa9MfkYK5X79LSo9t5o9hHrojavouDWe3y",
  "key6": "4W4g8hCvUL5Esrih58rxbX2hNaKVoiiu9gzAJRP1NzYnhd5A6LHpKRoNcxUJPFkZ2t68V9WCsrLHPQm7QNBiUZoz",
  "key7": "wQGpHHfGT1xZwxQBm5adCci2LZFfnkCxfVGKT2FHazH83dLxjroX7ToV82J3H3nyrqb6uHYmGcp7hq15cabLvBC",
  "key8": "2ju557QrQY2ux98vk8q5pCmELnkwDfrVe6V8t7KffofpXVmZ4PXuUp7iyd6daBt3p5knDP16RJxgGPB7gZwSijDg",
  "key9": "5PrmQnpVsnLfp5JcCZoU3zEuvcgLpF8veeE21JGRWveikSKRDpUVd31tCvN7EiihhmjTMoDT9as2Hk1nNi7vUTqd",
  "key10": "56HnUS6yCaQLReuvYecf6Fw1BTSwwaGjJGDQyPVxpZh7gvu5cC7xPnUZYyCQXvPKiApX1Z1EUN9qfPuXNCx8w5rA",
  "key11": "4PZcRoUFAiYyJthQk1zcq3SNpMbpxx1dvS7Bgzbr1FZ9b313D8vdRSiyy5RJesguhkfbJmxo2PYwkZMBuLVy5Vvg",
  "key12": "23Yicjj5Lqr9hfZLD4ykearGLmebxpaHjGipTUAoB34xsv35o2E3FjYpwhXRbkLRSxCvLn7zZWEBYjXzSurKCdXN",
  "key13": "2XYro8S1YE8xsH9yQsEHYBetVXGn7KAZpsGBmcYFQehexstPiMxVuQhKa8XWbW8pHnw6wd5Th8LtQ34tMLMihrqw",
  "key14": "3nW4bHccGftRkuWTMwtH1SFSVQuhTL4rDpJ2fkYZoZc6M14mqpAq4ekabafuT9zAQ4ZyHUwcFH5U1KZdPLuWzCuP",
  "key15": "5CEuagrxtSCPkaqRRXDcuZWo2tALMx9VNMxF8j2WnZZuAm6euketchkmzhoeSW28Tr5sMvbpFs9oZHws8PRN8ZKB",
  "key16": "2DjYMfLguMnwSwESKSXyH8GS6ankQrYqpukV5MsUqwWh93Hsab7Qsh5vuQorfn6NKNwQ9AsTnsFni6sDUFAVTZgS",
  "key17": "KHEc3SWDrfyAgk3GDZonAEjbG6LP8RMaS3jzit74bicXe4oBaR639w1U6Sr7CyB7cCE359LR3q14HgikUVuhquF",
  "key18": "4hxpL5L5BDqMzZeTj8HVShdKMAjEDa2prci81ZGtqVpXjxLuzd65b1rrK3nwXVCRchoACpWt46vYCZuez2qMxGCZ",
  "key19": "ZzC1GrLyHF5WaVWkWxkJgjA3FY2jkefcHREdvDA2af8NPSAR39r8b2cfwHdEQ7hn9TFD3zQLcRxjPMdTvVq9Phs",
  "key20": "3K4gmw7VCWqDoh4Cpqea5jAkCU3Zsnb2mQKJcsU7gF2rrXKepurMetZS6U9g7X4NzPU7WTjVQYiN3HCrv8jpGudF",
  "key21": "5TxwMxoD7vhvofeyMnWJQTDC9ecsGLeNX5R68w3qqEHobqxBVHanEWtkdVaFPQ8yMTems1FhexSEHHeRqEsCVMHk",
  "key22": "2q4gnZ56WBkwWK5ktHQYq8ToN2xFi7GFSZZniVxkiyCcxUwWCPcNzf7HuFNdJfDAbbdFWPQeuFaebGiEFMf2DnQR",
  "key23": "5NTriS3UDer4UqNFUEb6FEiVX2YkrHQQRndyxyZNhNcof9vv9C94iQFFWubVZrB9p2ib3LkdevT7bu5Nf4bScqp8",
  "key24": "4EUQjqLD7AUo281cEjtQEsxdq7H53y4Wn32Y1X8VjMaUgYdBxgsfS581whAkZJ6u13FjXAF6yNm4ivVh4jBX3bH9",
  "key25": "TuthGC7DTkhhzJqwZBbBT42j3icJqB2HqghMG6AXC9ypKK9gRjhYmh1sd1H9QM4skoENiqUNyCgNJbvzVUcX1Cj",
  "key26": "3qc2Kv225ow2ksSkXFMnqdx76Gv5d42uFY6tWSjNfbt2opBeGvFPAAYchqq9cragMsZX9tbCbm28wdxMuHk4sDHg",
  "key27": "2Mv95LnbaC3ZGobnpUXYYUf9WJjDvCX1jJzLEvuHD7sXKUY1XUei7FYP5CQxNGC5ENDat7iswpd2WuHBCsgFDDY5",
  "key28": "235EWo6kqvsmcaPzMdt8EAW5uTVxNgxGs3jVtMQ1S85XLGfeSdcJ7HUrTk9Rj1vFDshLPik6MXE3jB7Skc7Wrdb2",
  "key29": "L1FDkbGudTceB7HtDcCf7vSTKVP53Y3b3GRJ4E9VfQKxtR8eQ45hmrqciKAhaHBJCRRrzHLFEebVLhptk1FZZET",
  "key30": "iwuTWQhjRKtmXEByj9YRb1MGbmcM8XfaDYtybszvGvsMRqUG9Pnm6frnt5Swu3xJicDjp252W33MrqvWh5bXGqj",
  "key31": "5NF8YdCHRM9AMYpY4F9wuAAQU9JXaKmfK4Geku2r7ZxQCdGExE4K3MsESnixB5YtXuFuFaX6K28iBU4F7hCqvWXV",
  "key32": "4Y8fEF4FHN3MxD5mAc6qqNtE1ztY47Xz22XAU2zMrSfieB3ZjkWA2X4BRcB5ag2TWk3j7wZQPCGHfF1pEfHMFmzT",
  "key33": "2xnNZGucmKLHMdwdUvug6yNvHsWTHL1q49w54jju5QULiuZ8dUuqR341nmTaXN7PK956sbunnvc5gLxAyEPVt7ps",
  "key34": "m8TysCYsd8AF43UbvVE8pxj8BnA73f3qai9EnLLv7NB9yX2QPFGpRgD4o8v4zSb1XHVNHPwW7tz9fxzxvqbxRKq",
  "key35": "2dZAEb3svRtfSM34pLiwpN2hhg4d5tUdKeB69NkUVki5M5PN9mgPcSJ2MezMfCCUk8BZSsmtn66512ukR723ph8s",
  "key36": "2P3J4xx1R2XYSs7KAtwQjN4CrCVzX26wT6M8niUrDyge6964tGVm4tkuDvGBSBE7nZpP4Kdf4gMCaSgA8bs7xb1h",
  "key37": "4y7gfRqMm74WV1dJiiUKtkfcrkxzEF38qJo84kgJ9fPaxYk6KsVSDcKhZdN1165TBZMLbgHxM1aYVbL81P57AKfX",
  "key38": "HMJeqDa2b7g162dK8Hz8rs9WEGCTsH19FZuojdtbfjDo4TSsgvwuTp6JJvkY1QgL4Ntnw6LkWadKkYe6gB61mYn",
  "key39": "2xr3zUGnLtt9M6ZCh8qQhBU7nUHWih68x3fASkhxQHnV7tR7vf4KiXXwPQ1vnZBrC8BX6CHPyPMCXKaNhk1mnxuB",
  "key40": "3ZYjeCTZYq2kuuP1ySQw4254pCpviqaSoMw4xhGhuRqCFNvfacmWvav6TKbx4FuKwkhQGXGyhGJcAyXLq2jznx3b",
  "key41": "FEPWLVPXMDxXa7E1tD5dboJxe4V5B4txLhUhow4b6CFuUQSLDZnuzSz4VDqVB78DHv9UuztBWci4Mmhxrxtb8Yt",
  "key42": "3oV6mykeVVSAfnztgvvSr7poBjj98ZziuErYUnDsfSkRkdtgJae8xvo3Eaxsc6MnEjNQkPBm8sfHaMCJegccMdDT",
  "key43": "5C4MAJK9dj2yrBJeYG1CvTBhLFsmyrQXLNPF251WFuhfVinmwrmhkSFDQjSHSuAapzcjTe3pPnX8xFmpaUbW2voM"
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
