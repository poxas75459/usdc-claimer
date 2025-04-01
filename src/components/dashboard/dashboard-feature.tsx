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
    "4G9WUmTxardo7DWkdv68QoeekiMXRi3PuU6xW18D7jNdYW5dDS2VVFUKzh29WTMXeKPvjBpzZZaxFrbkzpGUAojW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1dB3UjFQD7yrBMnXaD2FHwS3NWSofMibGVr61bqkgJPN2vuS3eF2Q8TrbWdtWmNKdbqrTWemuc1sUZP2MpV9JF",
  "key1": "2H1QNCqmLfq2e1T4ZE2b1eLJBrprRbNnsMv4zWaCMZuxYSpocPAQCUAjPqcBjanb2UYXjp7PV1Np6GhqBEcf9Qot",
  "key2": "5UPaCN1xwzjUCQcKUUdifq63Pvi2LD7Z3Yrte5Dh1iad19aTzBfz2XMSbSsQBbZjAmy3dWJMNvnpxJjMVNQBNhF7",
  "key3": "4Nt6E83ewRrsXb6RKJzXnnNVSriXc4BTPbK6gTswCN3fPqMo9VT8NszvQzfAPaz1Js3JmFNuRdgqKjogUUvwPXVJ",
  "key4": "3Dvqi8L6UF4uWw4j81TgkDtbSQbij4zQ3pT4SBYbJz4dspfjGEfGZp7zC5SYHosCv4enRPM2it38ezJNFqUEbc4V",
  "key5": "4uJt6vUxKQtV89pMNXXFSAeuUtMLLT4Rmtubp2bCZLkytNXfHbaJ4UtGLfAJzQuLfoEnTRDGPQh6sJkHd6PesCK1",
  "key6": "8rFiuZsFSB53PANY7kwEMmfvV3QTob8jgEmoaVtwRo9WTgnj5W6VS4PnQdzD5hRhDFiUWKdvRNRsirnZcxzDoZL",
  "key7": "6668dAC3atpM78FrEXBwb7o3BgUiPJcSDJdbAtet9QmtctRhYNKQWZm3J6iJzbp751wZATBMbUAk3tZ64dPpykWS",
  "key8": "Avs2FaPimWGnHBjtmdmpRpNVBSqRK6neFYBxUVSgw6Nz87PsCvYDcMGsZHbtFtr1RS7bdr4QSb76RErdpYU4YXf",
  "key9": "2Lf2vLXHDkcvq19mMyXyNHUXJNXgh4tUEb2DVcmpWHZs9g1xppcnWWh9bMt8a6t6tChUHnj3UkWGKJ6B6Hw7NK1E",
  "key10": "657uCMi9NQdUTX9fGPnjk87BnWjhsEtxb57uCWt7eKy185YEz2zMASEQSfSXkryo2JG4XDM6Nz3EnZqkQ1PoB917",
  "key11": "YTzYfkjtUtgTNGEj9nEZCnZQtQ7uLAL3U8BQXJug6sZpkStvM38kzmcfVqm7KQb6mYs9E4hqPGWWekt4PYPnafr",
  "key12": "ig97zafLtfgstgfBozmk6qqXYFcKcqxSFzNAqau7KSXjxNtDkXZnX7tYPC784ZBNXei8iULS5vMnEkRekJwY8gf",
  "key13": "jNnNX9CftAq48hEquegyeXLktXLogmZrRRRdNAc25vWDVeH49z5yGRhwyQD4neGN4MKFWBThM1Qu3Srpds3th2W",
  "key14": "VbBSiGDvTCVBqS1TkxLLdSN2utgUvhr7AqWxGzmfsZtJUhY439R1CehSgntPhbo1FTCDMQhHpFuNCtbT4ua82Fo",
  "key15": "2yHUeeM7wYvMzeDArzhTewumfy3EbjuuYquzJxZrssH3vQCzAiN2JtTBPemejoUBMfMpjGeGB73z7fqhH5UaTNK6",
  "key16": "5b8btBLc1dcmmGpes1XEhddZ3JNFfGRtGUvcd4VeDjtayjDt5mvge1tZobwXqqgWqhGJTMYqpihC7NPHCsVs1p76",
  "key17": "248k1eWoB2ToJpobzTzPt8ro9RyFqJfCUVx92aDdknBZ3szap7YaeBXVFVfNESthagVoGiVKZnjf2CCanYcZykkw",
  "key18": "459oN9amCynxBQG1Xh86haT5Yd6gQg2niyMSaSGsSwJXrsAxedDsy6V2rT6rnQsaga2erZt471wyiQzFZp6L99qP",
  "key19": "BhMnDnJpMZwDAoZfVeJrQqEGe2pxCJZbFThGSeG3uZWQySDdnfvfLmob1pmApTEJA3rGHzzgcPFT2TFgjyP34Rd",
  "key20": "127HFLGRUjEkvRiDuahquqyiw3gBzE1r1N3sqb8LTCoDy7GHJph4F3b9orMngRCJsCUrHtSUcwtYbQEhYxwFupxg",
  "key21": "xacF65LG7uFi8tpFL8DVY2w8RJfYB6zaUPTJ1Me2ynroepCEX6Rrw8yNXuV3kijoBZHn6nqnA7UGLdQ4apX7jdz",
  "key22": "26UjcJgQ1WrLiWMP9NXJcrrVdqTw6fsLYCxBoGvTb4ASsCZ7Zp5E8Y6HRtLxq9rKYfDzgpuSn1dmdnNqWVfdmVGG",
  "key23": "2wxd2dbdfnWzCYMfQ3BiwdwMY9guiMrS4LdJyozjpAAaS4BLZydRZRaF2bKjPLVgBnmJbsupoFT5w5pPfqgBn1NA",
  "key24": "n4Qq8p3Kn57jdgB3Egbk2s1uMKsG3PQwc1hwoidny1yuTsbZKXzBXSZKQEPKv8jaDFuYMEtJA48BBJsmgaNc8J3",
  "key25": "5PVivmCqEDBACUHfLUXVoM5cJqc7KrkTtvPYw91w4ybfVbXRCxBAjGfRgED3aDNFn5joMULi7ncRtUZrbpFYraaL",
  "key26": "35SeUDvyLqh2rsHqNVb5ALGfqnBZhYC7xyXs4af267kJoVrPXzVKuuQQfLp9NuAUMGbgqCWwF2bAprZtrkMDmsv1",
  "key27": "4jSSg9kSqMKdFHuD5uGF2KkBTBhXxVAszGnjdsJADSXVkhqo3RJo92u8xxW6QTEcRAGwW394obT6WayXXjHeRF8J",
  "key28": "3EuDNGfhHhK3hGGy97tfXEWtF2XVJZdRZxVZVCGmGSWEbBzmFrjJ8ZzVihB1LUViMmyjqfj8fp3KejnvxFcfnsbK",
  "key29": "N47bawwTEVbah2PvbMWKDi5YnCzHHL6AbdNiJ3p8SGQu1P18EjA9XLxuSsqFzjUVwXj8hw1A3xz3vcaBARKuQZ6",
  "key30": "3qfUUkjbZUFQaDNTuhctjhY8C6mSAMz4AzzEHc7f4r2ZQep71Zpu2LwLs13WKJHuNEE4oZMggf9UAvXDiuozMDan"
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
