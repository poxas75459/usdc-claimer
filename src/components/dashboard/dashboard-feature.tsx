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
    "NzBi96VmLmzqNwkAecBZ8GNmBSSHTqPEf815aYJckoU9QcQWavjmCPeHDD6EVsF7q7dWFzojHrB7GnqFNMnm7jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BRpqZn22QZ1DB16DdHQmVhfumbNy6C2XHg8EjoRPVrM3cF1efiahqWV4hK2NWEwEcKYHvvTT9WafZcrYBYAaMmP",
  "key1": "L2pGoBPX9VFMLCYwioGouw2xgVuDvUX1WNhqG4GCquZq87kUehf4DGf2fEio8LCABZjHCzvsru7DM6cTVrZixwk",
  "key2": "5DuCqqVDCroGgcBzQj3CBu5cNTTysr8P6Xy3Ef6yAwbw8wqFf57EuqUgsXYy5dzUbWB7bSQWAu4MoKPGxRN4GVCj",
  "key3": "3V2y8MaGZLEMZdPr3aKjo7sRmPiSiKMj4Q7aNcmg4FSyUAXNfZykmkeRho7sTv7Bdza5n1PmUHLC8ciabG3mBKtD",
  "key4": "5WNcnhvbwrSpEx93aMD1SBcnwSSuw2mZdCGyaibS3t4ssghb4YosUqkTQviDF9iAKw9mPLM87TxmLhhAudSFGhRM",
  "key5": "5MQeUQ2b2HPCUQb6QY1D2kpcd5tC9vXJgWpb5uuCccrrfgbsszheHaKvxRnsEgt7hsChDSD5GdKUmKovDZdXYUu3",
  "key6": "GvjHoFQhznhgUjsVXidnJUYAdfWUe4nk5PCWwKiJS3Hq9Cd2XhY4fGqMXuVrToCvvEPweDkcnCf84EyxcHQpGhA",
  "key7": "4UoZf63NVKgq1r5MKm9dE4QPUv4WJPDH38GTCJZD3QW33b6zce6596UCxNurQk6Rzyx55YP51UeuBVEzHJCBHtmu",
  "key8": "98QHYNvZ2atU1WFhAxrN5Cxv17LU8mSXbR144hQRX9DmEvYVuGy7u9yBs7R9sk5Lm3A8hWHdY3ZkMsA4LtuwfjK",
  "key9": "5naDA49UdSgZWzSoM5UbRqLK6593jaAr14UAWVXMgCxLjDD38E3BPs39Y8g4qFRW76JnsyRKSjsWhaSxZGUsEPoo",
  "key10": "2TkR7TGmXkztT7TG6pmDJwpQfv3LY5MkW23KowQeK3gZs1tew3TLQMqpYTEcCdPdo6uu1UWMnt2HErNJCwYRmxgm",
  "key11": "58o541RvL6ncmSGDCfZutNjvFzHLFE2oj1Vcx3KTWr5cFi9JxVafPWBLRwrBZvCPwoh9j3qz1v2K6tXBhsbJpts2",
  "key12": "54nGiL5DmRFgAA4qWVXC4aKAy4xQrKj9GbXTok4YaPJHpgr18AzJcrZHCBDqvfsG2eYTopfo1KAAn6ebKHgHfeBD",
  "key13": "3dVLwiJDDpX2fsXXQLrKQ6CCVbsoDYW4mHw1oLrqypiYeg8aW87AkZskVSGie7rYbKvKG6C5nvNqXSxSktgi5UnX",
  "key14": "2eWfzxiXAqGJjtJx9Cagz8x7TK7tB1vVRKiADLx9bP1dfwUFfnNjNDjj6ZA6STdoGGnR3XUAcmxTcoTFLsPvtD2Z",
  "key15": "4FrQVuqc7fEftXp2ha1eSD6VCq14CF6DYAP43gWjt992TBa8PpSkDH4q3GbwJ6Lk57kEtTfVtXmSWuVs7BwNQLy1",
  "key16": "BM1re4sKR8x6Z1ftmck7E1WvRtkgNhABkbwU37RV9dFpuBqgpabgMsMuL9Mej42XpbHVSbBohSqMTGpGEJ6y1fK",
  "key17": "FzWWuYgf6bqVXuEEnGpLTyj95wFXwmiYQcnVYVrYtZCUZYs7WqtEKTrP5xZPwuWfw12DdNS7Wu4a4YcpzuToqoH",
  "key18": "hW9ypJ7waT1NYyRDGf5TEpdcWeTyNFV1qQXYji12UQdnGSjz6rS4x26uwqxfR7PEaNRZDus7xHEANLpLhszxhCt",
  "key19": "AxyXik69zjhUhT3V5pHGvR7txBWJD8j9Jqnf1YMxVtA9eudq59r5eKpQmFyjXV1XcjW98GoLUW4eP8TT852S36G",
  "key20": "38kw1iyHvKXtMXvHc2upwjqzWpSeihTnW9sVh1eUVo6s2YBV96suVEBahpPfcqH4cgvqDY7h2Z8KnTmrJEewrrVK",
  "key21": "5QQx9S72E5kVDzJ4AF6shBV23enyuwEgSvR6QCYEL7xgFMeHunoR2KQTvj31vj1ZUaiFyRMgrcXXMxGZ2WTRbaxX",
  "key22": "DyL6HwqRkCjZFsvVivCHrX4HLgj9Dq8ndbZMDQHhV78ZbHWAev5nDvxn5p59ADf8Fo5gNBxAdjzVW1Za7EQ1cNy",
  "key23": "2yvCaJtz7V5bhrXssdVSYXwxhdscXDRqKNHMwQJZhmVvptc9dvvu3N1QEoH4nTBzmqbmLgWfFP7UaxEFutFANLQo",
  "key24": "3kD7kTdSmUBQGNBvcyPCgz1jexdzZJ12WYeBadVZCYhHpzZMgBAS3C8fNm9vxhzMEY72zBTw1KZkeuCCriUWSFCL",
  "key25": "3daHMgs7fcBRkWqFUKJkQU2SZM2TvUYB2xqER78iKtB85cs7ULHRZDjNPz7ozUZev933YFRM1pyziSZaafcXvLmP",
  "key26": "4zgoWDNQ8UkoNddmJmUP5jNXqzCYNJ4CfaZc1AuKkXVSHuLvoNXnpjXieLZanMFqGwtGdhbbZL8njeubEnQU2Xsj",
  "key27": "3wFT6UDk6dSLbuKXM18Kz33PrLNjeGRamAvZjVnDNUfgU6RkgG7ksH3F1T1f54sichhhvTe7cKi2gYN7VCj5JBhA",
  "key28": "2d8Ko6YJNa3zc16R4giCCm1yN5tjkK6wDyPcWbjWnh77upFq7cJiAM5daoHqTLsEWJEdUx76Z5iCiPfp8BZVZCEz",
  "key29": "3SGgiPUnfrW1uAN2qeh5x2sPcdMD7BnuKx5smWVTHZeuVnG6cGk8LaQqJWzWCgDjZqDBoRh9qqozeskaBmBYfozh",
  "key30": "4o8XHZEy4yWFb5qi8PLT89btSC2w8KdVWKhEeBxUnbNoas6kqkj94MLnnvrkvQgUKgZ2V7CojAovkQpNvYA6ZPai",
  "key31": "2LKs8crfca6SngLS9y4igiiDFAyeQZ6hAeztfon4L9oUMvJ92jNUksq8GBBSUCEAcJQVe8wpmHmTQV1EDaJh6Rp6",
  "key32": "2bHKZ77BNYHpumH4KPFHHmvf57sNr1ZEqnTZ1NtiHNn4DRPKE3Kv1h8XaegPr2oRczzyyVj1bddpPJhnESzx7gVy",
  "key33": "JiCfwMZ331n5NtPVq5n1AajwVYJRTWxZjJqkB6svTXoCEL3uymtrEDFNhVoGhe8XkhQVFj1JNDi9vruM7HQakvf",
  "key34": "5RK6SDhF7p6XaMPQhRDGwxoXgcMxqTY7fqXG18ccbzvkC9HvyPTadkB1Jj2ftjkKDoJhi4qSkV1rbCvJPPAXVMKq",
  "key35": "AkfCuHu9hYUA5DupMAGyx46XZGmcgSbLzAAadKoJzjZxHgd698P3a5qCpvK7DBmZqGUy8xEyRzrXooSPJcHarBy",
  "key36": "2J6ytony9WDmfaF7GTsJRgiyN1RgLdCQy5uofdu4eTsNkGdSZdCEWQQ9PnQHQRUb2pAa4cufZWMArYATTUZD2ZTt",
  "key37": "3ZFuVSvKj5btnGpTXyWGBMEp1ume1nb7vMCbZWLZiBXLD8J7Vzn1gc3X4dEFPzusf94CaaX3ozjGaDRYf69y3adw",
  "key38": "51rcZc3gHr43hPcgMb1CQdSGe4BUwF131t6avKp5TE7fd2Pjb1ed2uc1rv1TQyGVXsiJtiXTEG1ZPY8zw9wUFx2i",
  "key39": "kddJ715US1PcDfEZVbzfc2gzY73U2hVCsBPyeZVkTxbHYPZhyb6KJDcBKBbaBwHqFAHvBqixteq5ZijjwwKa6Fx",
  "key40": "3kwHh3pFLxT1SU9pKAbBnwkJi3wUXTmdqSzJ82cTpX9Vcjpf7YbJZDfbREM7rAdr1dNP1kzbhsQ2o4NQUfZok5Gj",
  "key41": "2FghwY9eSdJ5EnqaFsQFdL8eEvsvC6kLn2RhaXVoV76rF6FCZLQqSKBSs7imqXxen1YUnd8ygcKot7c4czoJg3kd",
  "key42": "46n6zFysnrYSSao9w5uU5KVfNyGtNgRp4fHukUpcXrYX1qj8VCWFaKBAhUQ38g4Bp5hT5Fd6kEDjiZL59Joxdekn",
  "key43": "QzHozk8CJucoTTVHq4FyUSHWbhprV5x5zKcyprEwYkmSkD4hcmM34sfTS4JzK2MbLwz6HdLN3FbDBUVdAv2RZ9V",
  "key44": "2CHALEg4gzhmrTfqWGMTEquUXJv1DoUffnaTNgA5yj11SGJPZRVk966LtSBtFMjzMoWSrSepd5QEEL2kW6dX6hN5"
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
