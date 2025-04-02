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
    "3c3vAKBzJ1uR7Pr9MWsaqGDj8LdkCzgmpraTKbx34rPypdidmbqhveoQgdackR5GHTmHXJmWnVtnKSTE2VXBjf68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tE5QS3uLZfyu7wibV6cVytLmattEZT3JkBxeuEBZJ8a5JuKnxH7SV9x1MKKTnRouhsTFsLXGuT85tAqNLtnLmcj",
  "key1": "4DDVb9AUzT7Nu3K1uP6EMuM8sZPpyR3VvXoYEYXchgQCx229vHbcjLdmiLXMNvDN293uPLZrknKcjhB6e8FHgUCT",
  "key2": "4Njta4DhPD8wsviqqYG6t46NLKcPx33h8VcFrXpm7pHrehFY33s7krQBqQxNwVeiVFx1Jy7EbFPidgmJiBCU9rYf",
  "key3": "298PoWqA2aRNrWjvVbsqr94BVH2iRd9N3qMb3JfH3PLmVdsRujCVdQ3g4UTXYmYjNcozuDcwNBKB5LErSTGb2Ptr",
  "key4": "5nzZcpd626uib59hGzFApBF9sZENwNaa8Lic5SdW93PD9CMQtrXZF5Tdggeha7kM3zQyYNWnNACtYvkpsC4Zn9x3",
  "key5": "2JzanFPEmvS84m3iBUZcHZj96pDUBbPvtWNZe5VnyEVYRV7HbfCW8BqqK54FTyokYXvRGuPvvPC5v9zWEkqn9gMu",
  "key6": "tc8nd2xXCjJ5GQkkNTwxXqjBYgM3vfrodnwkorRLtsetvSqbMznMpnJ28Cs7WYKFPdns3snCP3EgHUe7q2Qr7HK",
  "key7": "2m68XCnzJXH4hCR3ytrnFoHGQG4UMEKMHuvEz8ShZGycYSnPtQqKV6V8746g5ySu8HgUkn8zyi3eEWBT7TWWL3sW",
  "key8": "3pBkYi5CLYRDwkfz7ERMbLmfSDbVbyiLdNkBNkDgFhHRVb6KCrfiFM7hdPgKoxfundasUCA1sS7AAovppS5nggMQ",
  "key9": "3inDkkLucqyoMnLUqKD3ecqFhoC42UJ3MfUF18LhUtjii7qy9LYvET1yt2F5fTU2uUp2R7U8DZVXJotEdFVreVW7",
  "key10": "5mxQzNpWWTFEHx8zrmvWppRxzhB9fNeNjPV9QPyHBzKrkBkgdiWifQJWneW3d877aCqW9ALRcXGKJvWvmsLCPHR9",
  "key11": "3zA8ModGU2L5qtkmsRJ7QfXUkeapAFV2LZqbRVr149eZt69ZHFHyyZ4KV3FH4vbNmoKxrhajWr2AhXnBum7Qfwj9",
  "key12": "4bqSyMuvXr7SpFaXAfc3jikRq4jffJYtmJrjZhd5mzfEyVQTpnpnBrany6YkZ73G7oFZGUHc1udyqHtYbnUdXsC2",
  "key13": "sujHTV2jnrb4NAy7JjFcLEaLn8TypuET9en4yLTbMUm9uvkWoLDkLkRqdbRUzUTg3JRkVKNsTShDAbBXBHZTk1x",
  "key14": "32Yr9hsry4sXFMWEW7F1kN8mTh5oHAhJpQusnVdzKinuvXzd7DfVWSXR3H6G5vaJHCRfVPhJ5yoBLMg3HQz9hfCv",
  "key15": "2sHX3G86LkHnJEbaJKvm7GX1M7qMbxDUi3mHo5oASvbW599D66sCLhG9nkMftM6PMY9WCGEcMpq6iwbcDeSRyGj7",
  "key16": "4mNB4JFp3j9JuBCpVzgvU6fvUHixieMS73uzGijVu5j7Xo336QkNe3qyuGWxSv7UeUyjGSWewqkbBNXaBUKoYT1Y",
  "key17": "2qEUHptJB8tFemaGWeQ5XGKZo2y2FgcR4ac3Sktjd45mcqZf31ov8LniwSGPUEsZUyAZ9yeYhf7MRrw2asAQF47C",
  "key18": "66AG8H9Xzc5F3yWmGeHcpcjn7WgTt57wEnynYM26eqpQMHmV93HiArkSqqsV2JNBdta42A1cNGAuKpFaJmzWJ8Xh",
  "key19": "63Eo5ste9CyYNUf32R7MCAJvWAfRB6WTP3c2ymkzwGw8GPgZYABm1GQvxQDoRhzqRgyzkrVb1A76gBipvfT9ogXH",
  "key20": "7AJeYkWpyBsbTqjRbpG8Tn9agufoqU6rNwj5wFKGeCTtCBHCPF5UQd8vKyUWkLQrsY2sGW8gTBkJVzif2Wfe4Yu",
  "key21": "nCvUpiHxHcu7Yi1zYXc2oQzKVRkmBXsFmduXcrwBYmDTpdk1tYNv4EUJaWeeWug6gyQHsW22MMCYBVjHdARPmRD",
  "key22": "5U6TzFFaFiyr3sSQXF1UxkQ97nMbBm1aoVtQFrEUdsZND6Zq64NC6J2pKfqxGVuTepxWraaf3ssee3QmvfZSbjrz",
  "key23": "5SDMDPxDLa5QuYCzJ3qsufTrVf3ayZotMbnDVWZU6vsHCv3u1UcVR1KLiDqRSgAcjG2iiV4n8CeCGM2EEucoVh1Y",
  "key24": "2PQUJ2n3aqXQPWZgvt1YCLkJYWnad3ChqZSvVd96tmoPxPX61qt9eSa6oEfiQjgdanor3tTTQX71GLE3VKmYU5zT",
  "key25": "627RkS3obiYSaYfWCfNRkgtuMYooXrF4GbkPx2i8iCMNXPFDQtK6Ue3qCXUtv9yiiuFUfp3wgCDMaZwu9kF3fAWY",
  "key26": "2kKrAGEbwZr6jdqADVpPWTvvQrcQiypt3is3orxyzXyyLPJHN33vjjGaMv7S1qKDTHf1UnRj1TYFpT8kYZ6LLa7t",
  "key27": "4XJpitUYr2e97Khcxi9MjhUGCsW6uLerDaYApR6z1CL1P8J79qKDtkdpaVhMogre6jQ8W2fqbDqGcj241HsrExBM",
  "key28": "64ZQmaXQ77SbExS1sNz2M2iYS4W4JgDUVWKpNCgLrc5SPoTSe3bzMNmSR6woitAtpZBKTymwGpwjHV7Dw3AoNqvR",
  "key29": "uQoVN28xotwGA23ure4Hsfje2j5KcsQzyvsQYTi8zBA1fmkFDfP5XCTYgVyAgum3Xqsm8NUayZSQ1t3wmCkUq4u",
  "key30": "5sF3dzfc8xA3cCBBTp5D8Pug6oPHsRBXPA4y5AupH5dWWRnrKGEeRq7GVZpzhPiAP4jC2qGpTTo4ayZXSeiiEZha",
  "key31": "2bymSdRWSPVmBC7Hc1bBRCbeEehLiJeD1V6iWRwBRcYZ11FadVFwTfnMtDHDEqm2P11HZLdBrBGCknCaihtRuCfP",
  "key32": "zu38rX868NWLArscWy9i7MVAoAjQaTxw9gbujzbsTkQjZKevkMaG7tk9w7RtRb6YM4qCXN6uBwU1rraoCLx7We6",
  "key33": "4nPg5DH631VRJxd5NbcxiRQy83LxkTZsbKMAjwHsWMSp3HTqnpaUdmnbzgYQbgaikg8gU2WMRihfyZDdxEdzZYUi",
  "key34": "3w6ypfzddt2nh1cPCnDnNKevtRGQaVBy8VpKqxzQV9jNiBEaEghWNFxK3vMegm8XnBoYJ3CD8nnLYkF52P3zWZ2m",
  "key35": "U2NMLcANbZspNVrbvvBXt6MHmEnppCiNEKtZwCvhcnBejPrGCs9qpz4hyi24iBPSXFgp92KAPBbmBwXEKhVq96G",
  "key36": "63qK2GY7pb9QXGMXJsFq7pfwG7KRdgUjmVUMgLqwKo7zrwuzNC3q6u4UMVgSpnvFqVhExyKKstvP8qwL4EVofvnr",
  "key37": "3KxBaJB8APrecuTjrs3tnS9jsRf8B1hn44EUARamFTmANyND3vNFoJLgEAU5f9w9sw71J4UcmRoV2yr5G6Wk64Mw",
  "key38": "RhBuwgyrH8g7GimFGmca2TVsvNHVkLxUWtBoPbEe33myKR9HGGMeUT79zJ4a3PoD41LBsiE7ueYbm2Jdq9ua56s",
  "key39": "4nohraDcmw7PkZfRFuZdakqY63q54SQFPNwUiPtx9a9KeSpVM4vSHgXnLJatoedkz8pGnhh6mNatU1YEEEanvxQj",
  "key40": "4kRZ9QwLThSy185HdWcTM38Kt2ZgU5PqTSBLumtmzGZ3epsR5RpwADKNdsiGxHBX4qi5berYFyAvT9amgJARNp5U",
  "key41": "3BSHT6QRFZY2qxmbNMBHqheE4ABPqAaJb8kTZ9KeLq9JDkhevBkVK59MroMhLnbwe2NphEgvLoxUFrt8bgntuJt5",
  "key42": "5PmMKxVArmf8JcQDGQU8ZLTW67hKtfcX6sJZKLdb1aeshJAMdXPYj9sN5ZVxTxDpvP5RiiWZt4g548WaKpCJPP68",
  "key43": "5xwpGS3XaioT1fCSVJDeo66P8KJwk86D984pM7RqR7DQoAU4snwtTwp32Bq5cyzUiph2LYS6aK9UWUDEWjv9EEcT",
  "key44": "3pwXMjiQbPURN5rxeV3TetpvphpyJcuaF2cQsK1MLa1oFw6uQhYyERiVSnXgu1H3LwxHHCfTR1W9EbjR7fkxk4Qb",
  "key45": "feEBwyNCMFkCtrBopinJdgbeeis7t9gXZgm7yGiw14sCCoH5M7aLUEKL2XyJeyRcBPAGiVFRq8GE45M9ETe7xjR"
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
