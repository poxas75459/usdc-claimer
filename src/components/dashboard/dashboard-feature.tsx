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
    "4NZi91akntEDdkveA5wB5HZX61q4wngcazUj3wVz2DDEmHomx7SEmpnLUo7RkCq5R2MiyNK7JvRXoMQQ1HzH5BgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XXX2UbbupQUmbkyAkZdoLGtfEHJ6Cv2QjzCDWTHuvXVPWDn31zPY7hy5mCDQDCSMszd2U3gurJyi9Ewvs8nLcZt",
  "key1": "3jxJbvWA7sJAHJEJbgYT857Fw2er5vikvPcMp8Sg6E6nKV1GiALugNPPMymmyiUPZYgWRtMCL9wLiPxks2CHsKt9",
  "key2": "3rqCpF9riyTbCLoZq2tabkgsCxAtKUCgA3uJTWp3VTgD5VvEUY4Y8WcFGhLpa2BpHXkhSoGSkC6oJFgVothycgRk",
  "key3": "63ygycn9SqKQrE28yzsAgtbytbrf4pV548wcLu3TyyME3NVoXMD9NX5mc5zQt6BfS3y1G9BjJ6X9irdmNHn4iyqa",
  "key4": "44RpMXZiqgyhmjrucX6N5CFh4HMwjC1LdcwG25ct3YePvmLq7bLtGxgkdvVvGBfRv1RQzo532iqcDB7NCnLhhueN",
  "key5": "yWxDyekvjfNCMXtPRY4rMxL5ZzAznZY9wNCHzB7b8pzsZ87DqzcUorfQpoop2XgPZsk4rGxgfiRErfZzTKmvQnX",
  "key6": "2WntFEZzptHzKCebYiXXMcVZ4CK2wZeNCfiqNxpZMFoqDkeEzU4SGPzdzranSvRg2iCLJdPTAdTMcmbVaXGKVVTy",
  "key7": "SjVYf88vwTqWzc4KVBdUwh5hwrbPsxsdzbK9VExq5a4KCUPekjNi5NT6LGFfT1x5vqrrNPkiupHioDk7fJ8ZFzX",
  "key8": "3M1zD6CKJofhrtHxz67iaSd8mV3C2gqJBNfKVeDmUgQRKg5LL46YjyUoHE5i19BRxmfjDCmuMWZHJSSoN4VFn8rh",
  "key9": "35aZXWgUbRz7ZCViyGC3LqnkdHuqPYt8q7qbSrWgjkx3wo6JUEoTX3LxczwNXJL4qSVPxt7qjtSCqi1kuhHGraze",
  "key10": "5Grem7sMQUMprK36wtVdK5dJ2s1k7hz8yoWNpFD5i7Hucg9NoyFQ9pvcZWUdNBS141TQqYeN5vux4mVXukqsMz3C",
  "key11": "2Zqk4Khqw7GqYMyXxDp1jBLbyDRFLoNEJ3byz82231Zn1CGaXZb76BBgK5MKoo2kmyHoGvXfviyNAQX6RXx5dBoZ",
  "key12": "59ovz9tiETjywPpeGktV7yisqtwU2hzmSYq7QMFdUgQAy2o2XP526TfNLzUSWQ3biwR5SVTtZXyAz2BvBPpxzf7s",
  "key13": "2yVMEkRgS47ynWZcmKaLhvf93cEyYMJhBmTvHhZThmmTNfJbMBWN5d9uXxXsJvUy6zvZrHnxKJi9x9yFMRy6gQ7u",
  "key14": "4uW7H7pdM61F1QpahfTmT5hQXgE8euBVRwugcK5t9TdAES5yHYwNUpZnnbPhwLnatjct4JpET1VoS1CL1z8G5U5E",
  "key15": "2Q54PUHFE6gyQaNk1s79f4snj2XeQHyQjFUTZaP5aUu3YtREy5MxJFfdschRtSarecko3ayXhor98auUaaTZmw85",
  "key16": "5WbBEgWQQMebYfBZzdnPME5sky1jtNzbTnLVFcYSC9PT5o2LpCPZDt9dopTu1yu13ayUC2yuVCCuAPhfphh5kNdc",
  "key17": "4Rtwnk3KrVtCEQTNES4iz8oz8CAbQZGT7Lkmrqeko6voCATy8oYaHjTdSY5qort3eCsMp251zL1dCWFLft4j5rY2",
  "key18": "3GRfAV5hnk1edzm2GzxDXAtNa916Vzk1miHdDjU5ibjd2wcYbHjFiX7XcpE1RKPwcCnFL6CodWY7oC9wGgHeq9pA",
  "key19": "2B5JKi52qF2Nx8sswYZJ1gUytMMC5DeH8ryyYsxF959gCD1x1q6v8LqKErFYyamm2RKevDCUu6sCtgnwgDVjkkZE",
  "key20": "PLBz8wLssGTKTHjy6ESZbgYejthDx2xtpuddnmtbwqZxvfyBrWhgyVwvSC19gKvQhw2b4uxbfFUP1o1frUC7pfP",
  "key21": "5odSmEsAuSk2mLtXpwCmhZ3XkKXyF2J9WwCSQccfqGeh61tmeB85bpVEsxNVmAbGPBdHkksCgKpSnPFW78wmAUTz",
  "key22": "oAd7Q8HZBwnhdSxbqtB79eZpA69PZEUxZ38gmjHTub5ZFDHaSL9zgGKxqsVLF67pEvwxzDtw7UxnyJwpuoRMknZ",
  "key23": "Jcew67Wc7J8kNsjr5FUiNSvuWg4U6qHP2mCHMwpfMByKbLKpGqfbwqScZR647JbQeM8xfLWzQ2qxppksfkAYHaR",
  "key24": "f39Pz8fA8WzCH9LM7iUdCDAs3mC7b2WXjCpeSrvxz8g8CcBXZvbTQwYgSib3z7MuddLopsqxNCQzM8Hz6ZLtiJT",
  "key25": "5htbGWvhe11wounQpGzDjwL4Vpzbj1mUsRpmAWXVxvLYf1McZKuJJ531XaAVCrm3G5ZqpkNka9ENKyz7YGZDbRBM",
  "key26": "2QmX1Ym48AMiGQxMqFSbGdS3RwzMi53MDyRBQdxXxFEzkKdCew5at4KnFJSAQ7UoVKubQaEaPQF9ra8nQASzCsTM",
  "key27": "4d2FCPp4XVmobUc48gpEieEhqRjvUKvpQeDgWpnpwiGtGRUPzx1GpaUvVpq8adG8jNDH3n7vj1ciGyZurKe57nXp",
  "key28": "2uJ11JA6mD6PE9KLBq5uXzuNDMo1iSQdxcCXujBWRTW6uQMz7u4sy8URidJv1JofFLD1Gfhqb8LoYcNXehhUHRbF",
  "key29": "4DCXBmB3zns9ZgHWTKf13fV5Nez9MJL7ucWzvdF8XaKJ8eUjCYAqjQz11UvAHEvcNXUMGXFdzpgcJfiA3LbpZtem",
  "key30": "3axTxLuzZeYNEY16o2usNRcg79vwnZoaEkbgYq3nB2N5gfrNbdrtCxqKcsd5szooQiXeNfkrTtfcwxkULEAqS3P9",
  "key31": "iNGQLDEQLPEu9QXvG4k69XhNrinaQWstaeZ7NH5pVRDBtnW1UjWwZirTuZRqgsjNjNVVKBBpzWkTSDhEbCS2nFx",
  "key32": "4P1RuDTZKMj2s2NSJSppur29fVXNA6eH1drRvJRDntNwJHHfTan1WwKfboWiSevUn6VZd7Y7mMJojfREdWPSm1jN",
  "key33": "pG1puFy2sDiqhA1r57M6NhSmo73h1UzxMsjcz9KZRMndteGdLuMg1dtVQefFykQBhkF3ZphJ7ieueYrvdoThoXV",
  "key34": "5YZMWc6XaSsLX5dAUbTsJTyVM1Z3t3TSLEHiFcJ2KFLC2eA9rAh2H4ooH8V87gy863cRRFLQq2JKmBYac954tz8E",
  "key35": "4fTbejHq6dv7SiMJtDBfMFi7exRYeCTmxSj219Szwccr7y7E6hnqhUNkWo3QjoWvrmxVSuLYtpMC5BEJKdnSPh7A",
  "key36": "5ijEkNiMUppgoQHzwQwtaxuc3woabra9GPsnVcxLM1SNhfuByQdyBj2vejKeSDn6NfoRkGFw3LKMxruM3pxnmdp1",
  "key37": "2c1ZxYGVe7ECqpP6JoeDqodCreC8farm53JRbaCjLcPikrUsrS8CBMwJAS659BG43nPKQu5LswDDg7BnrDzmmvEk",
  "key38": "UbPzwrXgr4GXDEJaokzGvVwC3BGP4CZWEGdxRzYbPk9qxe34DGzVqCDjdYddXSfvRVXuTaBbGwRs47U2hi2iPqH",
  "key39": "2BCZwJgj9MmuUGESpYxafqD9HxpSuShC1KNt8RhUdappHqg9hesESr69H9dNEWLsfkwLGKmbMbo9KGviRSgCGbyq",
  "key40": "58WtW3g8khpXFLwu3vPoZ1DP9mp8uSCQbt8WAwLxwJtohAHWz6M5ECiskLbdSPvhdjVfH1gKcKZgz4UUXJYYzF1Y",
  "key41": "3kYLmB6jULkYFHRUqB7wVVNm93BxNTMYxrVLorQpX9Dctuyz1n6boJvr5qtNaQUVFtJ5TNH67kEmKUHTAgH6b4fE"
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
