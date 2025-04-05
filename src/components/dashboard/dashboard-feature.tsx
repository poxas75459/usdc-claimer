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
    "3woGRSHJnoxeNbvHHUkrW2rxr11ksjRmbejNc3vsUtUrHFyd1FGMXzfWm9gpXXqgF6p4Uk98rwfkZHP9D6PV4LLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AjANU5FMxn2E9HXzYARdsTD4JcGGaUiNReU2L3cSGaCV9zyP3F78DNXJFf1iuMufTCfqjV8QkvVAe6qyWr15eSn",
  "key1": "VTsewKvu32cWfJLHq3UxSH35oGzStvJoBXTE193CAH516WPmXGsmb42FQpVHeerkWqD8epSRezBtn14cszfYCfY",
  "key2": "vZtoxtrP6bLfo9bdWf1PzZG2qD9wmHqGb7C3NJKrmdNVy9M71sBPLQ37EN3g74m6t6sSWXtVevhk7N4bBgbApRE",
  "key3": "vFseGfeXbccbmw5h98dvC6dwZJ4rcj1wAUPzPdLva8QQeupv5hSim4B6nKsheVvtsbzPycKmxjib9jTApjq5QvU",
  "key4": "4WBqYAxhq7HKNdo6UKZzyVKcBjut53jeskhPzFEbDMmcwYiRBkLMaEGceEo67KZUzgHp8vi6bK2P7gpTXZdDSWga",
  "key5": "5dokFkF9hbmkPZt1ZbbNwbp2Gd56HQVYTZeD3GQ5EwfHNWQFcAMZ4Db3zPNcQYpB7qHgAXjRc444PoMEhpNJYAxU",
  "key6": "641AHbbU5hBrraCyL2SSA5pBkaoxDUR1cJizHhgV3ZeSPMbd9idn9SvofV1wG5Zn323ZxVUwFWYAr3LR9uhYip3X",
  "key7": "4VF9P1v4Jmn6421WheHYGvDrJajSDtYtevhR9qdfSEeZstukiTGWxRc76LQhL6PJgEFEXxwLQBX1wH5HTKUTfrQa",
  "key8": "5Nab7DXxsyT3JvVNx2RKCfT1DNeo47b5H8pVc71bDYDdZNGH6nhKtacxfTxDvM9JzHgmD3VHAAowopKdJFkhViyW",
  "key9": "3ScupopYzf2Da92hupRqLr28YxBzPf29CM19vu1a6ypDz21fNZnuYNSQPtLCUWBDW6PKeMKGqnECyxtMgdUdM1Cc",
  "key10": "2YiyPBnhMmYRXwDPDz4mHe4qiegE2az7dBZtQmcBbvHysfEoi9joBZ7sR9XiKUemo9QgWhX4mfkxSGo5bEQaCAvt",
  "key11": "2jbzrZDPxzRQDj4gHDL4c74UwitH6CosPg645En34tqTNGbXc9KZUH6HkAQs2mbS8PPujJdzd4HRkjEZ2FFbxixQ",
  "key12": "4Ajgtdf4VYWeeAh7D7rF1jjWjd3F59VU5B7p3AnkkMGHK4p6zWodpmtGg1qmzR3D3j5qou8mxV6nXiEE9GmrTBGe",
  "key13": "3DK1zcqkVz8tBzxeLBqA8byjWGiPLsi9AFy2hDAxwkFG8GDgYABzX87SHfnWWmtiwQfZwuY9toMC1uRbuUgQVV9C",
  "key14": "2EXTUc2Nx4YPdjvUvhnXvPNtJFBnnJ9KSqyLhiwyK3KpPc7ZoHDgjrrT7Sku6y6kHGqQPJ2mcsiwF6rJp3Aw46hs",
  "key15": "2aZuUKBFQYHugjDSyjVzMx2fQZ8yt2TxMSWvgLxj5iZWfG3sP3UATHvA4PMKuAUh9Cs6wCqCJSpzzijbSUUd7EQb",
  "key16": "3PZKhGKbxwJeUvwrAYuXJgZtY9cc6cFAawPSuwXAbfrnnHjprxnABiWHECCnapDqjRijn68oMftKthFi2kKYMtnj",
  "key17": "3jaWRiXAD2PK9H5zkSXzzecnCS2afwszbkMRVJmcKajEWjFsDyi64M1RyKXBmZGMoSTTwZkYV98mCkvtyHyedePu",
  "key18": "5rAG7oy7XmdQegJC9YHWpYGzUMqvF1twQXsvduoS1tCqCuxLtgo2y3H6jw5jbnsZrfp26knkK1YE7vNumgeKUbdz",
  "key19": "hawsNcVChcmZvXCFtw3cAAj6sswYAvAC6LVfre1KTuonSV9WDUJUv4wSK8tM12kvgCYoveXp54VJXNmVLri9GtG",
  "key20": "3ouLwZ7LFdEoMcLJ1RzD2fFEZEmjAd2pKFWeZHt1jSEn4zJnP2dr24RhEREv2zMvT3U1aZfcaQYMdizp6btdTEbM",
  "key21": "WoubCkgggbwCa8iQqN2K8nDfs2UzS9DjCh9AgRkiTWVKfsA3FVco9VLUfpXwoqFLiH3iP8U4fAb5gro2epW1UAp",
  "key22": "5kbP5vLySvZmJriMH5e2p9zsjzrzxPz8M6vck4yCkjY3WrRFap3NLoBtuqg8JsQh79RiNKa6uREp8ccoo2rM9DDi",
  "key23": "2QafEsLecB3XP5kcQGLms8QUP3W1Uxn9N7kPFW1gMTxm75VEPdHiEBvokRP16CLqpU1bnfm585EpRgvg9cFNYMMd",
  "key24": "5tHmDwygZUSbLJFhRZT158cVye3yUDjiTo6vZjGr56WKfp7XYf6n9NQScHHn16i38c8uJajGH5ovkgWmTRssKEdT",
  "key25": "3ZKGR8aYGavwaHvxur3eSKqtByTnuFniAoPJ2bdxmE7Xy3kZgsceZe9adjZqFtRaDv8o46gpHHVKFMazf3NeVzQC",
  "key26": "dxE1aKdepvWEdweP5rVMj1GfGnhSjrH1JJaWFVBgYe7H5gMz1aemQACVtRuXkuNmnHFqLKj7Vr1EpwSjvnbN9An",
  "key27": "4tQDaD6wuooKSwyvjyJNPuBR2HaKuN5a8t2D2QdG1FkhoftKkGphqkE1Qs6vbaUfDzw2GHDT9mWErh4escarnqxX",
  "key28": "FiEasw4fbn5PSxMTvx1yQhyMrs8TZDjL9APXeo5HncEmYASwNxgtT5QQwyoMDniykeBEcAuroXVsMJQyDjwjbBP",
  "key29": "5xRoH3UZPCfiNk7GuF6CeQLibByN19K6yyWGLn6sYFEe5GLoUnHKYgBUEYRySdBuhHFBWKB3RphUJMVQi3R4kM5o",
  "key30": "3tq2u87nZjBcpraNrWpMfBNsEgH6QpXSeyTRrXs3f6UsinEnumsTvpCAdKDw925kHTqfjTaMfRxmQCrVFB6RCFcm",
  "key31": "2RC85QN94tX94wrTHeGCboVsu4YAapC1JkMAyeqD2m8Ke6FQj4ks9H23EiA6Jh1ivTLea9TwfKj1VDcs4k9j962P",
  "key32": "3c8LWa44RGkWZBXu8RCiL5Ejdm4vYR54WHkngfKhHjEAaRnihYSwcJiLEZYiWpNyDCREviUwi4euxJrA8bff9bhg",
  "key33": "42AaE6GfTxU4cQKpDUYgKm3x6BoLBfmS8J6MQaDqhPyt6XLvRxcu1yL3UyFbxGFmKwchmwDbRdd7zDCU8f5QPc9j",
  "key34": "dV2gwAUqzKuS5vfN4mw1BYtuA5coZNHABDR6JZ66DwNEcqiJVBke3xJiWf7mu9o1hCCMURW6HHxubx6u5FaZkLn",
  "key35": "5e59LLCFchLoN8tKTpyvsDBhcV8riA9ASSq8Q9jrzoiat6F28CyDPoiQJmaNqUfumGLvpSYGv7JAjR17DdBNMvRr",
  "key36": "3VS9rg7z8U7BiLuRJdd5NccGvDo8oWcrGf1a8N1QGs8CLNwZC9QMKpQBXjE8R6Hy43X5P6DC44jEpnGmZQSmvjbF",
  "key37": "35tEBKmTUUjmvu2UEkXBBXCGMjqyFBxPFyBLD3d54hwx669q1qWQC6FQAt78LvKEtE5DMTDwGmZuG2oqEyJz1Db7",
  "key38": "rtVk9MVUsnmFTAse96SkijAsXSZDxJU77pCknUPD1eZ5RfXeXuBZNuNrLxjLR8sq3yMgoWyJCQsnqs1Quhqo1pF",
  "key39": "4sjJk3Dj7X6PTNT6vXQBnArYcdeMm8PijCb5DhLnqPifstTv5MYU3zr1XuawFCoyFZXMcM4hRfsGsyD2LgXg72HH",
  "key40": "65bPEFtfBEMLxPDvVcgDzJuBhr2YnWFqrbvCvmgAGxjFYhAWrnTrJNh1f33LtkhEsEoi89XdwyPVviMX3u1wqaEw",
  "key41": "3auzpfSg48Mupn8T9ZtYHuV8q2oicR6zVB5sqSufnChGSTwHVGVB6MNLiq8LToaq7jv7xHEcoWzfpqtW9EGr4me7",
  "key42": "4R8t1JvXZs5jqqVFVGZ5TJJHVZ8rS2KEEnrNFK8X5xZVsedHDzahKmyt5b7tG87ANBJNJFtH81KsQSinsEdxJpjW",
  "key43": "4ZnfDcx1T8B3jWKDH7JGem37q4NfnRsooCRytpdPgAtWcUBykHgmfrMrYBK8YToXCsSGuZznLxjPyFNcLBrQ3fQX",
  "key44": "4uKocD5WtU44DbqEN3CxPMjZyn1B2ZGfGeEnD87kCzwdKMcRGKDm1ci1vjUeDXAxDTsJLSAHJ6jpZAKgcSVhnjCg",
  "key45": "3Db9NgMqwbyBm9haMAcDdUhrUUmD2rp24vHhmRa9CMdgA75g49kVpPQjVDzK8Di7QYKuuYXZULdDWPizkxFfHQGh",
  "key46": "UvLTkVRiq2ommz3Lx7hvVtkkqmYjK1KsLeEctkEXWNsQ5Di4PDY1o4BouCqZkXDsHUekjysiRy3LjqgsWPKVuuf",
  "key47": "27BKLJa5FUmkVFKDUad9AjVeyScPmL3z14UmhcbQyCrzrCYWuRFh5UsqYTvbyt9VBhzzCdP9e6C1HzsmWQ1r9koD",
  "key48": "4EN8CmWuzDdU29qkdkVtV3DxaoHz52SqwwkKTrt5Q3HEJmp9P3pdvdJMn2f2vYG8RBZ8MkjyWS8WMgYiyuAgvn3w"
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
