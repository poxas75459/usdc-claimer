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
    "2zvqifEf71JqDo3kjvRskMSJuQYbp5MgA93FY7BXX4eJ4fZeYQPNx2CjS8U7h7tkqLYwStqrZQnURwT92cdZvbbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPDW7S3nuV5KLnkdFoUVwZvq58jPYqTL2Sa7zd4v7yQFtHefRbjdcYb7ky4gJMhs7fcdHz5GMpQZ5X4zTunmBe2",
  "key1": "dG8to5fT3RArwq2x3jmvsg67zwcu1qbABuMVTRzrp9DKN2UHmxhwr5zVk6ykmgFqhZAenJCL4ZfiqZbuibMvFLL",
  "key2": "663cKJKFD1zaD9NXXmrMtLcz51bgK34qx84wsu7rNhDih7uFgsNYHnJbUY8vN9rzRnC95SCBwzGCMFUDpdZ4WVcf",
  "key3": "4uBMqxqs6Upp84Bu7ScdzHDfDdzfGuds21mCCCVG83E8JkwBY4uXHfJcmqAkTdtyJNdymVrDp7u1gXGU2kgRbwYJ",
  "key4": "KwRDcyWxdkVbqJcbeiGnGHFWnduCtB4txmhyZQVHQLLhJF14iC3yuoCUyvgjf6u9zaFBzp999JQXePdHoSPnt2H",
  "key5": "4NiMhD93yNXqJVixZG8KC4xx8UJdcLkxxJjpjq7cERghy1tB92gRDeLujwTTUu5j6TWHDSYjJuZZLAzHFQFUP8nL",
  "key6": "DweC516r5TLFuPbfnsmEdMxFtpGGQGTE8rT3YSzpr5RHyodWFkwfb4zx8Z9fTGKafwKRtQFCGaeyAdKYPss1VvX",
  "key7": "47bephUZssYCxAS3NYPy4HngLbSEu6cHjR8ATRJcZkDgL6wZo4yRNDEyxMhgS7vgcgHeAWZD3zZL4iCQeeeaUM7N",
  "key8": "5jZJeYGd2WaMCfjCuYhBboyXyAS3iAnot3sfweYsJnAspUQzy54yVHHotfqTATYNnBGVQBLqHM3YQYyEHkhw69Sz",
  "key9": "2DkFVPjASu5ZqsniKEjZm8DYZAdJRrsMyRBsfGfQqMxD1r2uBgzD3x8DFMYoWDszNfyTBjVMPRaiiP76VP4H6T2F",
  "key10": "23i8qX7Ztz9PKQSu2nPG2pd4UAZUicVmtJgqnK4UQwkn7C1grXdFb7tWqjbAesw6Wmwo8uSXSTECWmyKHXiXrxQg",
  "key11": "464bswx7jefBP6Kok9TRMGWgM6fR9BeAUMqGVmwxKgBr2b7WLLQhJQ4tjpbA6MYBYBbVSPXStk7EyccJxZu344LA",
  "key12": "5eLfxweaB4Kv2edxJi4MX4CKKgmJQ8hkbBmwHq4fHQgNdTwYmBkdGYMoS1V3v2R9kh784VtYi4H7z7TcVBErjJj7",
  "key13": "3VrddTMLHWFYNPB434AumsaWQygda3EhGT4RGq7S18nsxn9R9reGGC64e61v8Fxr5BFUkUBKrm3V9XpxA9kZNt5M",
  "key14": "3yg6e4M8rhit8RuJ2pNbN9iyyRXSpo6dVcVbZS38feZ18J2cMGPpyQLSF5zey2PeTxiSnV87WdDsHCm4TjKNgP3f",
  "key15": "2XsKQ8t7fBK2dv5TkG4GXLsGf5XnTJNjZRhKSkwKGkJpHHJWUniw8CSfPhc54PsKgSAgt587Ycao3AFWKjYvr7Fd",
  "key16": "5MybRx8YetaWdFnrNi465BiqPCZNJyzdH4rPcPj94pTJ4Hw6BBn5UXaz5SY3t3f858KMVt93U7YoXNd6mbwnWE9H",
  "key17": "4xMFTcrBSubPwHdyEA1ECEx9uJi3EQ6KVuhTrvBgdFR838vSGpn7H3r5KsaczFYBh3xAtXHHneFEs8p6heB1XrMh",
  "key18": "4cAoFieBqQRbDizBEv5ZposSrECMx6LaoRgBPN7fSf3qbJV7rub32vnncc5YkXSALccagTEccnY1xE1t25quHKzn",
  "key19": "4oYj6CpnzwQbNarnEqy8atJGZjbMmhoPubAWgjGJM8gW1pWTPYrbktSBL2kpNEGtGokUgUtMvAJxz2h2H735fXkq",
  "key20": "5dYGqdfL4GZvtB7cUq4P3XjHGv8TYJ6YuB9i86jP3CCiRxsoBW6cxJUUvUMapQYhvtziPYfQ8E4dGe24U48yfofx",
  "key21": "khPCQQasUuHSAs6VWHuTPN9j9eawrLcV7JhoSbbaB2oND5cfrRNVAGPV3hsLRHDTgr3BdcrmxMAwsU3fJVQhZht",
  "key22": "9gmabpT3NfkUbmeuq8yH9sjanjEKkEU9ANTDcEgSooFxwGZnMPTxhv7pw8SbgWQMUVDXDNiL2JvKFC4L8MebrjK",
  "key23": "4NNUChqALnekzeJLhBNhcBpgpsuHgvURJZL8WEeL7wFLyTi7VKKwJHduSptkbWsQiLCyHU117HRMKv9MzAjqqYEq",
  "key24": "5dZvyQsbCYaXEzhQR6GF99bSa42eEvj4xLuyJSmMjJYPNNLf3gSFaGsiXRWUwwdkTP1RwhUYkFafzncwD6DRQXMH",
  "key25": "2AKXaxhLVkK8oGek3utRRuxB8kPHT5WbWjfSABVUZuRyRT5QYHeHNxoppkMMiLLBdRmc71YbpCqjNF6tPtcN8ueW",
  "key26": "2jqz3w67PNV9WRtnoMkyp21xvSQf3viCqF8qig7Gx1V6yhaGXPRbkwPtuvZqe63nQs8Q2JYevbFmwym1CTTzrWJV",
  "key27": "3RQG5SKSUeExsMUAYM1Et36gHzBTjpHabHoSijP3Tr9pADKWLuoMt3ryHAzuufF2smuawTp1o1eBdwzvGhtP78x6",
  "key28": "4K1iuoahGodo5RVQv65w7hYLR8gciGYD7Ej2p57ypyYzjYRJ8D6TqS6igJxNMEsi9ty7MizYJeFHMYS5Ze2pUPAc",
  "key29": "2SMEZZpsv8tKgCQDoJ7UuYa7HqxcjePBTwJZ2C4rRHN5W5Q13myx6LkKVW94JSx1ZtgyAMyY9KiYVA6Fjxeo9mfL",
  "key30": "2WgYVA2G2GNcSbm2ps77XCTWcFRuzXVjbqQEMJ4yBtKSnftrY2vB5L7xbrmEVPNTBJo67RrwhQDdH5KQe52DrSxs",
  "key31": "2ToMbAL6mUWS83zPbcM1NR6VZ3DmWWXvGqoE5dmnzy5rRaUp1HsXZcgbtc9D3p7qpp7xSdDVL5vSjQDM3y8MXfdW"
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
