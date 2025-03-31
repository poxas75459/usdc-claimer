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
    "4bhA8Za2b91SWYjPeJSpMiYN9Yd7rGXbBhJuD8j2Yu7tB8Bbr8pq4zqFewu1AaMa4u8iNJ6Yg9gnnUdkbVpkYyeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zKH8AVryhBvRQbzwVQcCiyafwcbVPBsBr83mHHDEk17i7hb4WMiUUcJHFuCbh5Kph4FEdUrhZfcrD6JAouq2UGa",
  "key1": "2wMqDThE71VhzWEkjoMCnZQfC1aVG1kdPfHzT5gqnPRSkAbUjBvSGSkoEL9QsvXC18Qizrp5DNJxsZbYNniPTvvJ",
  "key2": "3T9qvHxpmwFPsBFmuqfvpbYb653swSi4XBEvWKXBN1XfYMEe5zgWyUJ3mocEw5WRMuKs1RyTC32yFxLpmjNnm34m",
  "key3": "C2tNg6KtHtEh5sA3gL3wjDQB8uFKvVujmkEFgVZsNfxPqmdiUkbrtN5vho5ctk7sxWcpq9VKfDAECgz2kbLuAoz",
  "key4": "3ptfhyCA85q9pPqkrs61g6gFmHe6hTXhY8Y6TSUdz4Lua5cfoVFN9ipSjcWCGpHGvhJwooWfGMzMDQJn4PSx38E6",
  "key5": "2fqqTTVQS35iggyudy2GWeBTd6ix63gPvGY1vXGgwfHNhoDLHhaqLLMq695tW6pcUURtpEizh7m4xUGun9k3QfcD",
  "key6": "v15H7E8WywC9sp6L8uvXFLJi9gCEzUZE3gE7TekhsJCuvJjz2q4cRiZ6SxKxkCddEQsMohG89Z5NZxPR6d7o7Hw",
  "key7": "2eMTkNU8ajdwNZK7DpNPZcmjRZrLfAq91Wza1WfG32TwinwZAh11cEZtG9MysShMFcxRku4vGdCERbmpz8GwcBEf",
  "key8": "272ycATvTG6RbNGxtPv7miQSCa7FcyyWqfPnD6QbJia8eGtCqqQrJpE4w37TREyUovxQhkMx1Thxa773KJLMgknE",
  "key9": "4qccx2UXXr4xokT6JkA7aQFBkaDM8SbQQE4wV3JzRfHDGsfPHWZCpDvcrw1gFxu9avAb5ZFWLZ3NSUaa54DGW7Db",
  "key10": "2ySgYwHtmm1r711TwdBeqY8fi6UrK3XLCEUAGRZvTuPZou1TtxGw4wpfwxT1tynTrpRn3SSsxgFtYmVqFzQQ8RmT",
  "key11": "d51mudw1wcyoYUSPTYfW94tmkD3h2ZTWDc3HxxQBFiYKJGdsZfabDSZZE2PR21Td4jT6CDdetczq59cdVzHYPhW",
  "key12": "3WhUm9hBaUaTZCYnGucVPdQgfiGTbDVRsCud6U7TvUXR2iiGgSpeT9jDMPXiPGu6aW2rMj9wiAQysNRSWyY3y32G",
  "key13": "5GEL7p14A1j5JkNwvSGvS8droi4wUC73TWhELNywzoVN7x3UbkknSZb3rMKBAaHVbEtHEchqHvbVi5wBn4a9qvRZ",
  "key14": "5Nyxd39qpdA1sMzYtKizgjzKBaaGWQudoTAd5DnGkX3bcTpuZ2xFkJbKfoJndRH1kFUXqyfmMJT1u4ZauZ5YBdn9",
  "key15": "3apqR1r42dJUFhbcmVeCEP5njFVwWqR8AFDB7kEVouyLWWnY8M876geQXEVw1dAhgKo6SfpFLShKHSZuWwxigejm",
  "key16": "2ncZ1J7M6m338QBFUsAzd5tkrKHFLHb9mcp13RGYYXgmtbHing3m63CtKFBiFWsnem4SBJn6DQEDvtiijFHqyxGb",
  "key17": "3HaCEWZFSBnFabiqP2iKbg8G6zJkwKDGcFVYSufDrYRNZStfhJevPQD42EPEw241se2uWGbwhUcSXfiSePQrAAT1",
  "key18": "47bJ8PaC5sPuhX21rVGfkHQmhAFiTgYB4e4yijRzqZpCXMhDuMoCmenpHR9cxqNzxwg8LN4LXY6frNe9uGZCfFSy",
  "key19": "4KN46j6NbychGPFG84hVCNPJUD7Z4b9NnYXbASS1EMbgqQC4WPWHYMsdBrrPhyBxS4ju4AyhSdVsmtqtpNVPPxKh",
  "key20": "5oSJTac24dTeWunSfgrdz5Z4qRHF1xWLzaQdgD1abrvN3C82UMersj3VKnBbb8hwk7ssoPTP5HMt8rtjv8TCrQrk",
  "key21": "3LYs3fEzSj2GdbBgttkKfyKQmg9hQo7XRxgM7Z3Ftu4Jb6wd42MJBeSdAEoDao1xvVjfXj546d997etHK4ahrM7G",
  "key22": "5qaio9wYuVGAkVGKcH8uXSqcyzTGKcHqr7CpPuRvTkkbXZjqxXQ4hrT5ms8kQR3BevjgYas3Pneu9WRmyCunAZJM",
  "key23": "3V2hEqbkMKxQa2Cc4zLZTcALkQ5EEVaBhiasskDzN1KGJJn48XHLrTmxT7pjZRu2YLQv5L21F7HStsNYzKWT9PmZ",
  "key24": "5dkGYnf9TD7fdQZBAvpN9BsFSApseUmCdYHZSVfVmyT3zmEk1f4BTPaihCbqf1Z7gsAp8vMSbj6TpH9Xgs3NVnPz",
  "key25": "5fZefBGk5MoL6msGjCoNHLszfHoMCd3gfR9cpwMaHifniAt2bt9k1frqzt5xUgqCECjjnDLcUx4hXdgv6j7gcA3J",
  "key26": "5Y2eh3a1aLHHNdJ2qp7PzxnjLzK1W8yVzhzR4BLTmBAx2Z7hsgprchtCpRgCuY65udzz3Xh4uFxfX5BkPkDu6DJu",
  "key27": "2LoWJiR5jfGcjvFWbUVWe6D3iPJuDuqhvrsghUjAQsBrkA9joajsGiSmdmLEZar3TXyF8BJZFuRs1U7BdV9Kt4WD",
  "key28": "mKA3oDVNVz6USFaWNWuvMMBj73nZ3jcsbqpnJrwpe6eGbZM7GMPvPYQaMpY8AFqRC14LYkoEWsVPiaN1HffjePA",
  "key29": "4bEEyLFCtNwngmQA2qLYPRYY17dJFE7P9FDgsHCXDGjdrAAvkD6bWwUbuR3K6u5si4Rrkeqm5ZtDnbYTi1itQ9zP",
  "key30": "2Pgq172SPyirTgHyM4i6vzZddk3R7zJoZpzhudHG9WZQZmCn9EfMeBcfwptJQ3LhyiwYDdLY78QDGk2BeQY7Avif",
  "key31": "2PnQgPwyQvYM4TKRVKjdHDZe19Me7yvVbdNuSPTg21xVsBo7Uw6BXMbTfDcU82PxV3k6r1oHwr586CcXydrg2SEz",
  "key32": "bfswAyQJ6RVNYVvhJDExPXm5SFQR6Ay35nwWBg5ZmGKtXw7amMgbNTPFecqagrTBkRm4Giyvjta8pJDHjvHiENj",
  "key33": "4GQbomtqMo7FckxWsqGdYdPYCk5nsRzCchp8gMQwzKhzWQHKwuhN9e7e5cw7msvJoZgc5vE1gaVnmZbXEDbfW8kU",
  "key34": "37reV3YLZWYQuTRChNB2arUL67DsPAVZDnorWZdqNUjRgSXH18VkUN3CA2pcPsoBvgymoTz4JXyBxMbjEVCpXKj1",
  "key35": "3UfDX9XD74qukxvR5DDJD6UJYobAJVg9DsCQ9NH3UBMmybBTv1m4GyoGjmxUb6riKic15RBgEKzbbbGSyRTn5A7G",
  "key36": "3NxLXEjuJ8Fu4AgQu8a5PJq4Nwm2f9UMBKHGSgZRVX57UM7CWXqQkSUB2P2eZ9UYmHZYDAxV77DVPh3ESzguYF75",
  "key37": "4ubzbZCynMhCMjSXS1m1CbAQKYVmd2LrUvxBGUV9Rt9dcNH4opzGraTLAjuSqkgWCGWZyoZRUj4zNSv1Z3jw11GX",
  "key38": "5mvgg4njevQ4FwoPa1aTctzWAo6xkDHLYErZMRoeVgnM12Txe2FWwBiynMsxrGHuDJtp4MTMjy6yL76V8cqud5Qb",
  "key39": "fVenwcL6c8qJdu2t3cizHV4sFHPKdnhF4JUhGvMoBsRErig2SgAX4GciUgqSxgyTLxyLR8dRgq6oHd56XoabMzQ",
  "key40": "M2rLFPrvLot3p9XQza55DZmpLdee2EwyBvb2BadLUyzuazL3hw5BtEhjwZY9ZUXCrdVq69VSvJSRzj7jDmhYHo1",
  "key41": "2EomF6bV38XyRRXfV7hU9UeEpbRE1s7fn7v5ouszt9TxAApu3mgQ6oZn7k5ccbb1BBQAi6zq4uH9yYKjPaRfp7eZ",
  "key42": "51oz4wEWP2Sq8YmuJsYaF5QneR7kZG8kEJ2fAubxa9thDBuqsGvuXTZ1duKZgJVdUE9zseqY7jUfRjxrHz8JA4VB",
  "key43": "58eRqkBoGeFhV5Pgmj8ahoimzsi42Xr6rxz5x5yg5e9HYwAZgaViRseCa7fffhGgJnCVhDx73U9pFw9xHnB6PukQ",
  "key44": "5B6dvszWgqiwH6SBft9i2gvPGEbvhCoXzyspCUQ4cr8JbjuhezKGQjCzQqTj2DqHhEfetJsBxd5qRUW6UcSTo37D",
  "key45": "4KSFAkYwDC5AqNDTkD7Di3FiECW6TSUPzQPsq6Xquo8MuVC4BGgbrUhC9ytsrfmLwwrjdq5vjhtt2miFpzSqkkDQ",
  "key46": "4Nx4naKgjfibf8dtacbmZXkMqVFgh8A7S9Qryxx7G1W9VK9BVKd51Ms4rBcZnW56nD2wFEJLsZDRTSiu6uFpWMQU"
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
