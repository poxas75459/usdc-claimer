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
    "Yk5Wpq7gnyHvHnETLTWTit34Pjb2oXbSnXa9zaiJJF2iYEAh9eaghqjJgHPZq8hhpyjeLgq7LjENmXkYxwzZKW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sbHYE1SuZQxKCdqCRkqTUDgE8ndDVkjBBZLBpzat8CdxeuTGRcJobB9zfMiCCC9r6zEALHxFweHT2ezYS6Ump72",
  "key1": "PY4CQCUSX333hyt7oxZmd9FFLknBTqGroqg9MLjVDex7ZhNuyZSVJBQc1cN9z6soAgnRd3texEdUhnThsuozceM",
  "key2": "2AWXs8ddobYKhwxR8r4UzM3352GS336PU7sTRdXnp6swwJR2R5wt5LjQFvm8nnAosDt8nJDVCw6JaLyG2aA7GJv8",
  "key3": "4HJTs3CLsBAfEyvXnjZQgjPkFxzLSCTigihJzVcY2zomm8qgDvvwSZuDYd3NvfMqPm8nB3Mx36Qyg7Y7kGAwoPjz",
  "key4": "5e5dzRF8sWsnViEhD5paxB3bspJZF2SRYPQ9ZDmsVXRFY9r6rqKmhMsdCs5NMorveM8kRXVCKQdVLoCgRNAFUaRh",
  "key5": "sRdp3WapbDK4Ed9TuU9knLRk5qxT1quM9yeQUvN8Gej2DM97ra6Qq27nYgz9HxNxvezxL5SwZXoNkXPfy9Bvza3",
  "key6": "5PuxbJx4beVphwmXNnbz5skVo2vwKJe3kHQunyUXHKrWZpZHH616515tuqJnejWGM8s9ViqJyY2vm4WYB6gE6FE9",
  "key7": "5aaw3XG5zyFWGmpJgR7pm76cgZM2PsooysW6bhJhHEW89rjNt2dDQt9hp4xSeZrMGsBTM84RTJz63Qotp1k7kuJ4",
  "key8": "2VpkQLrEaoaRYXtedHKEnD1c9oWhEpANKNieqBiP2PpWASrZgfJRmN5QFkbKBGyaVgAZ1tbhKqXodfHXVfCcXngh",
  "key9": "5kZwfwd1BvKHRrtMFrXUDBQFks3EznmRTTW51NSMfLN7BCUZzFkTXomsaSvPE3pvm9noxuBmaKTFkkVuB2iBRYxa",
  "key10": "5URYX6Buovi43dsVGTrjtmFzpvfUiYDw1FtgHYDyZ33FGoMJnR2vbYU6JLU3EL17eRaSbd4UmQs5Q5vraiRDAqS6",
  "key11": "3hJzqJm41q2HioGddRjhH4NBhGYvgMCYmgv7q5kcJ3JoCDvf3GKE1EsWUEXphHnFPLCKF52j576wTBh51mZdFfMc",
  "key12": "3jwTcjrSNrpbEhXH8bFKw1ZFneV1tNYUSL3hTWKSBu2PSnjwrAaU3hJGZRrh5FAsYfAiNmwMJx4fk1on1ABC772Y",
  "key13": "5qSo2VYsDdmEzA3riQ9Dwa6BUGoURnZREUZF4nUsPZYGretwEtfWcf3fPtmwgW2fMXjfBJhxibCW5dXdy4rZ5w8B",
  "key14": "fCqWUfBr5GzXEHRmGF19gas2vrHXtZAb5L1w7cVL4B68EKrnW74BPHDt2yjfL3A9515SQKD6PGobUoXh1BiqQqx",
  "key15": "3HCiyYFQpnkXMsgNx4CkHoCwJVD8GZ1zY731orHhiN4UJ7kLwaFRp2mEGySv7nyDBqKoguR2ifHFxq3ZvWsChgPZ",
  "key16": "3NwkJ9v7CgtgjebN1kKhJ8MpN5htsk3bPCRzkmREyCG6znB9U6QKSwwyobTm6fYM7EhkTr7kmsXwaX4vyVFtBtez",
  "key17": "3dzCf4f1Uj39c6xGCtKG21paNoEiorK2u4HE1DaBkWmWFgQqpmsVXftHuyzuQj2Ngw19RDqRWiYLSfvRcb64AEnL",
  "key18": "2EMBFVoe2PGvVzgDHPyR7MgEitwWGfboeMGd6fbPnPXPfos3Fah4vsBMPiaWap7Pz2349v8yKPCXve9zJsZJV54i",
  "key19": "4N13ovVxiFVEddu4q1nvqZFckTNyazsHpTFewhpbiFJZjvfDFVx4W4V3N2yTpUNLeeiSU4YqATi7624mee3aiuQ9",
  "key20": "MxSQzUjLpPPyZRUbi8bkDEVmKBkbkcCpNwGdUddRUBfFraViU8SAPtfM1ZRoELrepqvuFMDKDHwaTsXz2yX1eoa",
  "key21": "2LEJrBovYmH4f5pHeK3a8sKy2Cida1DJcsQAqcqjUnEot91evDkySUhPRaUcq8oaVchhXvfUWx2RaCNVVMX4Hgpe",
  "key22": "BnxDvKqJMSqXWsaLRJYStFhCtxRPwSHE5YmTiAexAUDh2ZbWzgW9pyki58eZKxWy1RXGSPcJb1bQHiyoV5hzADa",
  "key23": "5ykN7yCoVgbphPENdfSU6ZcRxpLVD5Phq3t3uZGto4BfhELzmo36wwnfniJHo3u6QaRWQJsVqcX4cTPDJsNEmZm5",
  "key24": "LjQ3J5rW3xHh7k8ffvFDfZsdFEfHnb9Fs2uN7y3po8odgqV75ZpnP8sPAJRAUAkRzjkm7TM6PaScChX4LMsHFeU",
  "key25": "3cC7Sz9ofApzeutMbt66uuRMUxFhDDknRSQfk9ATRLAoL4A5KXHadz2V6b5Jw32omztLpJKrFYYcaJGDDJVMQydV",
  "key26": "2QcSsr5x1z8vGS6ErsAvot5HJ2HJZufLQ4EEhckJLTAW8Vuv9E7ZjeAzDwYUkEratsXFCgjF7i3ddREhgxHCVcmb",
  "key27": "5yqKqUyXQX2JwS4YiZKhDn7D7P7eEmfnyymoq896mkw6u45k1boPkTmchCeHaH4MyGP1qPXyRyv6S8QdyTiMJXRE",
  "key28": "3YWKM1qudoV8GcSQ1HZDhD49o12TKVkmLCNhN8PR7hiBQw8VKcs2f6uQK54QkXStRESV6zvbV8tS2sDwZ32tt5X2",
  "key29": "2bj9g5LhfBGTJ6mkg3iV6hWX5X8RL5hhzMe6Fur3rMzgvbFo2kLghVceirASSoAUhS79oSvVKpSLXqkMGRU8SnmE",
  "key30": "2H6ux6FV2HGGz4dMgWrEEFJwb877CG9FYQvNZJDGStuobYsUPsA9eheVjybjZ14Gtk9a2tc51mB9qMkTTfobg9XA",
  "key31": "4MQ93BhG1icUHReAJQqHK2bTr3HMiyyKa3GQaRL4Sy2yDhMAm5tG1Ajvi851Z6cYDJ1i2KAjwcdaUJyBZq5CiY9J",
  "key32": "4FXLioEpQbr6VgdetAmWQJDQ2Ld7c6hGBrK6dSM99uQ7QHU7EAdQKvodqpMmXtmM34ABYk5qvGuh16eQwi5xUvCG",
  "key33": "3WDWv5JofTXfRyczUakCjcBBcEtrZDAuDUByCMpmP85NmGWPSB5iG67AvQqTYKbeGY8oYrJzidQd4KiGvjaXmHBq",
  "key34": "4c6bWeq4V76eV3A2EfpaSo2Y1hZWrVXe3XKWExi4CopbPCWguURL2EuKVPwGprfPgofLt9yr7RcUM4dPbPZEjgXL"
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
