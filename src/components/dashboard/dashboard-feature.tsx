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
    "34otsBaQLq7LQhGrxzkGJ4kJpmevBKxunRAq7p98wPjZ2dpft5mFxvvhxyYGArxXEUWfgjHbF5KxqLV2e5f49d2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YFmvqUZSc2bsNEbMvs2FWM2BL6rbysN2nLKH7638posHbQMNsqpEcRKk3Tcz6G9m7r6AH9qiGK3kdUGyzFF4SRr",
  "key1": "57owV4ay3kzCLz6HYxr7w5swBxuJr1j2DgtQC4qTuStRe7wKSNN7TsCF93QVpuLeqgBtFSYeT1q4J8gfVHteyqc5",
  "key2": "3SiDNa9Gg9ocpxe6Kye2oFkohKQtFS86ZnuwcAjDhhiQkkduVZ3JKMFoi47RtMwiM9QX9BwLFkfx4g9oepA1rA85",
  "key3": "4tZDoJZEVwmsbaRyqPZJW7r8PPpdYEgKVwN78qrKgynvPCvNuBvh4B5rnZX1SL58STzA89NuPccSzzgcyFgEPifH",
  "key4": "29hP4xujCJGJSmKgZQzbhjS3Tm23B2cYMhhbrykN9CJDYZVgPLvqfZJTp3VFUHbLPR2nrEvsqGcSjgbi2tz997we",
  "key5": "BGtMw5wjnMcmU2qv531vYqxpg76EwQpPZVcCzCNPYEBCdo5URWSTusmZb8TFHnTqo3KEkSKJjNzhJj8ghm41Zte",
  "key6": "48EWZVVtaHuWt9nFzS6if5irJtRyUnTGDXJrhVBVRTcJDycrnjjGbiXrXryHmGBMNk7i8sf93CxxgQQfjQtL6jkY",
  "key7": "4g4DUqe2YLnU9WCpEjubDykkY8AsJ7f4mBqjLyHU3ozGXCd45iD7K76QmCVkacDmLXuN3LzYkRQUTDYkoiDtRxTz",
  "key8": "Fw47jt7VsURSFPsZXsfLeLfMoJT7o7CiuJR57SrR8gBDbHmN9LDwKvPuzjtBDjBDJoHqXwBxHYkFD2o3qYhTTD1",
  "key9": "2HNa5gsiTJTbxtpgEwSxtD8xQerj6MFVUYuSHsw44suhZPTfnyNuNCbcPUtN11NRkeLpCye8ALFi9CmvZehXSNDQ",
  "key10": "KHn8Yux9Gmuue1Qf1iykgfvjpJ63KGfqtvBPtm8dTjQNWzQkWsm6g7Vr8pMwsFyTdYqBk31SLrRutN5y8Tm7VW3",
  "key11": "5f8D4CxFJ739jos4rwSGq7UfRLBxLksfKixguWbE6NU3gU5NL8U9hDEG9fM26wDShn741g2wGRRLXYfGnWbTsRjs",
  "key12": "2uJSgNf2Xir636BvaTeF91pYCdzA42RHYscum35ACuq1JA2FG49KSVesDP3aAGEhAAL2kw6n2AFwBUFdu8Q3xN6L",
  "key13": "4cGkyQjgX9AxtVm3XBskunTaM1yoJWGqUZV14hkVwgNnHVpRV6uaSAm3ye1sVW9CgPfo7AL6pWR2ZtQyoNwjW3ND",
  "key14": "5ZoqSwbLh6QT8r9oiorvYPcBVBcKfktEKCXDQVZEq5eeAHhebhbWWZNbFAqWejfpESHrYCoJ8MVsZ6GhuBLzXUsv",
  "key15": "5kovmQQScdFm7fia3g5esKFaXrs64Cvz2LPHyqTUuB2gJCQHCszG4UTmh6NJDsDAYEBmAmRLNQyjZnVyMSfj5MWS",
  "key16": "61bBKV131MgnHHxYjdnkEGcQWgzUfbnq7JYQXo8mTdZbA5iKqnbvSov5Ld4GM5XhKGYZwkCDXjWRZMTUbJj9srBw",
  "key17": "353Cp5UGNcPRKtVsEQuCFLPfT7JwuT6cBQ7VVPF2SV7PLTXEHxsRC9giXMcdJq7Q9aBrBLuwPzrbMKdrqLzW1MiD",
  "key18": "2ooxVZdrwHLKiGFsoNhgeuXHzhXvpKmambdigsRn6jaEd4e3UKUUD8CrpEtZiygrBx2NYHXzPvVJ19rQ7hXd2QxB",
  "key19": "5wGxwQLpZXTL4NN6VDczZ7TYi2YVVamc5QQgZrfpFuXCkaiC3KUzCcbKcmDQj25CGvdp1q8kwrGArAY6Xrmbf9DW",
  "key20": "2Qhg1wgRJHS5qDdVFyzsiDKVPs4CrL47dfoVXjRxhbBWhyQiMqKZYi1fc4f646K8RPsmp7TVhMxtHqeK94VL2CHQ",
  "key21": "3Fp5Bk1UX3M1coLoAQzxGqim1MFBVi2SeHZaMrZgAwThhaxxUAtiUyD91YxcPYxrmtc7WBgL82EQomYh5y4dMMJG",
  "key22": "39oSa63SXpdypZBrC71jr7g4jwMf99J6bnt4wat3W848WzSPuNfkfS3WhfZcMdTtirCNcX6hk5ot9ggAtkKGyr4z",
  "key23": "2kc1jr9gUfLm6xqWvuqFYbTndcJeXtQMhGvxKis9qNXCTVBw6PgbA3ComHPYW21oqfyfeqyKFcGSux113qkBcgLj",
  "key24": "XFg16kRPM7bFapuUajMJD6RxaXe4veSLJEdoApbkjWiGAnyQmTS1YPNtWRgrPY1aLF87o84mDUQDCbaBQXRop8Z",
  "key25": "4mnpaiW31breL5rT9RTbUt8ziWuY2nG64pTVUVMDxUSJ5uZma3XRJLSPc78e746Cgg35A9P6g9Q6iNwYf12zrny9",
  "key26": "t1xd1WR2eiv9rEVZ2YhqsGNHvLpaUdM33tgkB7h4yU8WsEkXnC9v5dgxfwSaZc3iNbNKEnn7h7meSh7oQZGNkfk",
  "key27": "2kifdeuwaddQt7gE28qpumGmM86N5y8FMu5JPbyLSwMxZzTSb53jUwF3Fe9MvaZn8xFBXrvVYzMvuLD9GJ9hmkY4",
  "key28": "5fRn1aGBEVjBE6J15HKWaBzg8dyXvzCSQKX8PLh8pTo8ouoxBbtMQXCtkZ3rPC8unNdQvoKrHeGJZZAhEUGf1fVH",
  "key29": "3JKScMRTg5iJxoPXvswceQfSPXXeB8qzVPsUt1dr2LkzgzQ9o5YUGrMiBUDExhuavfAb9GJySbMnwWryA4t3SbCY",
  "key30": "4UPNWm5UYMH6t4RAroVKaMPVycNsYoVvvAhzyAWG85oKGQemrfcpocWhZwXCvS2qdQT6UbG2pLgfDAkHaTe3sDRo",
  "key31": "gbjnS4c6L29yG6mhXTYEJopyAmzyU1wQdD3oCY3WLrNvmUu993JJMVhVW5XzqjqBKnMvX7k26wexucCpum54HA3",
  "key32": "3Udu4FqGKF2vmtUA1JoP68kmYZvcatdJ6qLouTMMNFoBAUpYmjRsUzUQDXcVkYLK2akvjb5QpyFpFx6CV3m9TGya",
  "key33": "DFyVUGk4dfoBfo7d9AJSSDmpnzp8wque2jPAAnhiawxY2PPX171XKZZmvzDjaxTyxfhHFP7hquuXTaZqfoo65ee",
  "key34": "5xtB4kUxS51Q8x6Y2qhgNQTrqWAQkv4x5x1udNfyHWAwZnPiX3gADb21VuuNBHiL1EriNTT4U7r6bSweZVZcEmgV",
  "key35": "3kw8sThffXZ53wH5rVU23QQ5K9mcePHwqjdgWEYKhzbSvXAMWjdkq2R2dXKPKoudbY5ykNvtmtzdwwU45abLbvwK",
  "key36": "3WYN5rxUxg2E5BmcgNqhjNdhgHTA7K4xeTep5YdTSUhuHDJNWgXusthg1Rfr1ekLSG4RjX2gfHSTQm2jdHTW86qp",
  "key37": "2kjgkJjMs7MxLeBbdas8EeVHLmryXmzsg9n4k1XEZu8xVGrfDAmUeg1cwrYNMdGFURnAjdCqtBCU8AQsGCnJLHAN",
  "key38": "2oSdh6HGcwJGU7LivR1BmHU5XAzVNicasZrZmM8QXYFT1htqYje8BP8Xe2SabyXkwpHf1YhBsSXji6wvVhBVMUXY",
  "key39": "2mLzSTCw9iWwEmin5xRvzppMJZ1kByH8mXE8Hp2RLDG6i6fYRZbRFwx6WfF5FPAT2LmVLuoDUK6UjqkTn9P9HRB6",
  "key40": "2YbAT5xr4epFdR75Mtd4t22xuBfaCpY8mxsadkEMJQeDyHct934upLDuDjdMyiafb8ox8R46rs27yavFdu9gURxS",
  "key41": "i8xRbsMKo4jKD9sg5f1YEsxh5XPv4i4AbNcxgjEWA66Rgn1Nvfpke98kXFkUHfAgyadaJ1HTVzHPMh81J2zvpJ1",
  "key42": "3WGouUKR3qHyJfiZuBdDNSTh63euqnzp15144Z99pccZco6SrpLJYmyxJcbhPkqae4GSCBTvRVzh4aNUwV2JYrAB"
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
