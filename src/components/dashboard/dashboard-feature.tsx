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
    "5aRhUNzN1uFGnhMZaTC4gp7ajPmSfi7KbiizJXbEButcsjJghS1E3XAQtqxVpQpMYmoPiqrJHgEJwRXKTeZxZKwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EjqAaWXzhioPZRPKdW5bk4xrhXY2nj3EvSiqVfdMpnjdrLf3LWHbdEgpCzhwTfUQYbNzoCtwvZuADCU6EhGzWLY",
  "key1": "4YuMF6P8kD5ir17WZ2oXx9UkzGeb4HLBtYZw61ZAwyweUheLXzNyHvxMMWMFVq4DKxw3HVXzTNyEfdNd2xodCDVH",
  "key2": "1zbNCN77aVf7zuBzHGaYwXcjjod1vw7Nt2iP1SvwqyP7ATM7Ax8WDtYaDDGnfK9KJhzMs555uZzgW2Wy2SeYm9Y",
  "key3": "4VBzveed5V4zeq9enQKSU4NTrwkTHGcKQhpBZRLMtZ5K1UKZ2iaAZFwcbi2Qznxt8pEizgfjjGgMooxuwc6AgueV",
  "key4": "4UKYx4NWDVQRpUVrEB6i2vXrvYKkvhpZKouiTtkDNhYpc32KPRUWo69euRoBs1ipKerh91jLFQugNukS2DVdnjbj",
  "key5": "3aesvAWByDpHxECoSaRtwyPvzHPNs2bWDX8MJ5dmw6aakeHSxgRd4HYP6WypNHPuFo5CXex3HPR6N4ewb5xHsqzW",
  "key6": "3vgXEXDPWj5B3HmjuGj4fVfzZT69hkQnSgaLZKmfWVqHrJEBaWEHA7m2A7ZXLkmmjjwwhpDubcXpEfQHq32fH3DX",
  "key7": "2dmUzKw1V1dALEkzAVBGtits5eDaWEou6yErXXVddsVRFLgGMpzpBSB53qRKjDJtwP3EhEf5LV6xHvM3rbNLmhfd",
  "key8": "2piQukH4MGfY5hfRrS1eifiWBX2uoEZ6g819FKNEYe2aoJG9faZtQFnoBr91vNyj3mRZm6djzHGbHvLy4WqP8uTW",
  "key9": "4VMzG9aBzZXrFtURSK4xehXfz3qwKcfBSbKwTG5Hxq3ooj6EnTr4vcUSqKF5pHczZhfBcosy1xURpzknYfe6VP6p",
  "key10": "5A8ozYqQyD8Umy6sYBLEUub4GZHZbRqgzE4SpmVFd62mgS4uLD4tkZHGCNQMnWBuezCL3cSDT6tq1h7kDm1oYSfB",
  "key11": "X3LoPtfn2ow4C4RT69xbZaBb9xyBrTcxmY51wuntqimYCaewKk9cdHWbf7UREf2pSwvYpLACmUpX2G5XZGYpheR",
  "key12": "3Zi3mTha7CoLJc71cNfX1mdA3i3ECh5QbAbA2qDmheeARsDji3j6FMzQt1u1R6JsKNHH1uzxpBaKWjGEuhRwqKS8",
  "key13": "5K6te5fLz1u9YvRw5ZqrpLwkd9EWFnubmMaFmKUGSKkcFZgv5TumgUv6o4b85PW5y7eEy8EH4fxCNqcrrciUSZQ2",
  "key14": "2cmUCYTSBKEBEYxbBmb7YMn4kcgYN9mZGNJNus8NdWcBgQ2wp4jaKFYqsd9yYFbSiWt1yruRBdt1kyn7G9THweEe",
  "key15": "38xzD9Bf9jgMpaaeCxa57hDaZ85zZHLq1EpszedTxw9psNoBRrwc9znVNeThfZZA1TYWtkjv6BE3oGDAGwvWzahE",
  "key16": "VixVKQJYKqYM24HmRruaDcc1g65YTHv6JhXg1ojSrWNmwNEZueWaHh6sAGu4cvEyQcTFH5NJ984M6z2DP5JetZi",
  "key17": "5c5z4Ju6vVk6DpvzRpw2Tb5n7WpesQ4xDHbCZCvQbv8iypbmmRgEtMf1apouf6PjoipvQZHVnf65oDovZUR8SgX4",
  "key18": "29FjVFAf3GzorbZFPL9LErTvTZ8qGFRjQfhWWUqdFk1GEgjWbtW6a8p8j4LNHJDQsc88G3saKNqgCzSqTFeHbrfh",
  "key19": "2UYRZgfkhnbXKPPEJUc6nSvC198pfaZ5HhxD9Nqhcb9pJXtCXvE6Myj3uEHKX7BMZbqF39WmdTn6EidMYL1chHs",
  "key20": "3e8tuQG2gnF2aBQvkqwNMya4qF6k6HaujWtkHNH6RFBWoEa7ZS1ZA8bscZVPtoTH2oBqexZaibDtrG5be2rusUKg",
  "key21": "5ThU22DcYQi9hR8jioFxzWrjvKd8JyaPqF8i66sQkRbVbnUU2c79PJZzxki5sKPxi4b3Z866Dat588CocnWzuvi6",
  "key22": "2nA9pcLarFyKAQLBqXTJ3yoBtnChVueTAx2nBfKEMS8CvNA7VsdfR4JiGb1bQx57keEpYrLoX7RG6Lq6UpMtQUgW",
  "key23": "3DwS4dq34nHSoaCtT3Zq3K652p6f53ndv2ETow8gn4P4GhPJ5XxZfLLeYUFEvLxBhvaATQ4RebA1SXNKCFFXRWvx",
  "key24": "24NiDHGLBFSpFhhReJXxpPs2eCmEgQCP7c9heL6gSp4fQ3SnyjHGGtEnSTECskjkqQ3dqAoMkWQpHk7ZivPgrtFV",
  "key25": "2hSxhbGH9jKDcu1AtNZCV5GQy6oJwdz3uhJiZKs3RGf6xDtQCXjv1BRnueZm995UWLdDNrMNtAnF5Fpea4b1NUms",
  "key26": "5ksWjRjxEw9jbqRViSiHfMyELn4x9dhaPEyekroNC99FPv3FHWLBU7PX9nJB2erpUK1iNw6c5p8af5vkjcAeFhTi",
  "key27": "4A7v9VwB67Rm7D627kmG6MVfhZhCPkhRTUXdWhDCALLUYQjXgHU3PiQVGk5TY4MVhouQNnpwHxshRsZvEetSq2qb",
  "key28": "2dNcG9b76JtT3cq2GskjnVn8kE97353ny7NChznw8PtRUndiDbwQphZiftmtDB8cMWNTburSCbSiCySK5UJcBiCF",
  "key29": "qDmBGCwjkGH4ukMnQ6ZJU3UJ4MR32etqN99Jq6SfYeNdVMixQ5fSvio5TgGef5p6tfmoEag1tdYkcY7EoCRBgLE",
  "key30": "2tKsXGDJm1TJxTxfevRxKooYetGR4RjXPyDHj2fty5M1qemDwZGtGo6EYUFxqv9hdZ5gnchcyGED42G5KPrgd3pQ",
  "key31": "2zmhnhxq6sxPEZr5mSqzeMByYBBRACyPCZASPvCNgM1jNdhhXETZA1K2kEcEN2NJQToYPK9wNSR8onrRx8jJjxa5",
  "key32": "97ixvSmCZco5qxvPyh2CHwF5ndMygictEq8j4ZnYrDnotgFPoUH8fm1nXyh81FkZYeBVecHUCQ9h9LKDPqRCN8i",
  "key33": "huwdaVpLEpE4LCmvXStqVoGqfcd5UcQM5eThhuTd2w7TRU9Ng1ZnKcaHq5s28wuz7Xpq4BMxWxwNwBi9QyGzCvt",
  "key34": "GZXnCh9cFcJfTdG1huEcUGsRWBRCtSmYZQ4pJRdp88oebCQwLXazaVz2hesxXswZq7WoUzMXXuV2hc7eXG8VyKf",
  "key35": "3DwdZFc8VAEVDkqpMTGcyyT3r3Y4f6JL15S7oN1jvDaY17dArsZ56QVdTo68aeJVDKFytuozv3dL3j6zcU8WWXR",
  "key36": "62JsYg1sJtuX5t9X65t7BLUY4k7d7z7SWwUXUFo3P95YCrBmb4eo7GSxx78mTGZ4h4o5JjnSy3JViU5SeCfFvVXx",
  "key37": "5njXLN4ZXgQrTUJxKp3yNWR1SAukAXnbYPNZt28MTfuSduYri95ek2BiB4e12aL8RfWSDQPtGHv7rv2EiX5YVNvm",
  "key38": "2A4bwqps13jE12yU6dRRU6j4P4ujFA6HHsYWBLbR8Ldr8bermexfC2p7RnU7DFxH8yBg7F6zYSmWE5EuoEwPfdYa",
  "key39": "wWUFsksaom1RYjuDZfTBTAxS4zFuygS8AoHnKkB1r2BUxEJacpqs89ugCqnE7LSJxVqQFjjMd2qSNjwgwUwPvEE",
  "key40": "2gHiU8V2FKedubVvir6D9GFnxkgs17oAagqKe52RYxT3Y6BFaW1hv4amCRQZY3JRHVmMXyrzEGK4EzEcPgPz9Zfn",
  "key41": "5gvYcodT9YQG6oWNrXnWHGMTYZ9uNRdaLBPU8r7MVckaADLe2DjrAfsrLKkJeHK6JFJ8Z6VYX2owiwDKJ7cGfL49",
  "key42": "4ZtUP5nJow1CowswsV3r8PC5tUqLg9FXZU67xky9DDym6L6J1uByuV3sENSpHVRCVhAQXTRkeJjVCjFwMaVazqM4"
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
