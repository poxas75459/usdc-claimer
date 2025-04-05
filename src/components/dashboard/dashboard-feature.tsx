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
    "4q6PterWQW3tsF5iazgjBdRQWfnTfXBeGqAKqJbDfsRHZXHmG64hmbNtofkD6uwJ9MbaFDBSwZNb89o5obQfMRuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ApsEJ1brkr8aMpSRH7NjARdjg2gSSgoka2GGxroowQtPnubv4D5dNsvEQBdDYKdRx93e5WgVZp2U43P3TAaAgZU",
  "key1": "Hns98Md59CSznwdkJbPZLws11vguJ8mTf3YnSpqJqskTAtean9yj27TcMib6NscFxKW4Kihk39RB1w6VMukSiLF",
  "key2": "r8PSvPEQBEWZgMZykEY1bAF2NBB8djmYoBp85PuLXAEAWeq7udPWfXvpuF4Lf2uwisDH8QKpLmhQGhsJoPb7eaz",
  "key3": "3HBRFCmgqgybuxDHFkF2xCvRzPK7gt95pPt2txecWpJqoXRMJNQuV4mSAPm6AY3cCwx5soxF7JyupWaJq61aM8F7",
  "key4": "5EAaSJfLePEa8LgVEm5pJQyuh9yvz44VyZzwKGsdxy9a9Zy8xfs1eEEhqSEanp1vF8YuuUKbQ8jw5cfPdqdKXyEz",
  "key5": "3tRgrVWasWXrYJX8MQUtNRyrQb5Z9CBFKmk4DWB4PncQZ8EMoUW4NcKTQeF8wHJDQuBqQwNXoJTi5pPrBsSFXeLs",
  "key6": "2BRsxrx7hBEQN7LtCa2GVJCnMTEnsgxjNt3W2b7vUDzyvs8GLP2tQX4EvfA6wr5uUAHKeF9FdSeqBmqeZaQKgZXK",
  "key7": "2HR7k17yqkvrWSBiHVitbLdKTu9dyDyvH4bCwYUrphxLn9XjZF37iCvegbQKiysCES3KgBim5sNKoM9x3MJVPz3",
  "key8": "WxnpFyAxCLpVi5SXHVMxyARDUyP2A4h7C2L2Qu7kUh5HtikjwbtrKGVP8wWzGaDGjcoU9oVEsgnBup9AeuYThd6",
  "key9": "NwZj8AQibwHDoq4d8pgXEEHsWzic7jDb7vpG5Zv571dE2bAieazkCoN9YaUwHUZYLQci2NaTmyYbbLxpQJ43kHj",
  "key10": "44Qz4pYZtSChYziZLz2rVAuvCrYk2g7AJbkkKC9FkQrUAbuWC3oBQMzCXMxRW2gmA6s6ryDEaFyPZAXE6ZjpfeZD",
  "key11": "5CDQCJrz2cfVrUtZPdbzfg7S8LxPZpzT5AHZVZuRJCB5DknLhq5zMTrPVpcYjj2guwMLw38mAFii2if83uffM2Km",
  "key12": "46ofQJwKUqwB8UhNCBx6VeJ4V84WhoPFKFAZaPFXPS7fYRkLdNnRUCCuqwzW8udBbWQ4ToF1Lsuyu3V3b6S8aeZG",
  "key13": "2LA5DiCCnRYUtNpV1B61kuU1gSxL3t81pGcr8rJaEXZ3jk6ZXzh6a5B7WyThsdV8Xw1naz82ZyEZRX3UWoGVFgD9",
  "key14": "pLd6rniWqg4q16jNTfwLJuAjnPnJquxEX47BLnExWqqVvFtHbcHPRCS5GCmnoUDTS4LCg41S9WQicStzpqwgLKw",
  "key15": "5CDCta9GkhjaRMmWPjkEzqTQNw15cS6bo3aCsY76DJJDAoxpn1TSUpBD224T5rRxKyR77LdZEsTdCgHvbAmYFTai",
  "key16": "xN2YZosZfm2xfmVFsDTfcXDYyh6AZndPzyQrYtvFnpGcZGefqkuYxs7cvBf678AF8b5sNmD2DHft8MDtbbga87U",
  "key17": "5LxYtNcwB1sFFPmu2pC6xpVCBQ6w5qkNAT8wZg3Loj3kCZ6XK1oBo4ajyJ8JPML36gnJrJ2AQGJ1rNcVjZb943bc",
  "key18": "4GW4R29j81tdhnRMjjQ4vWv6QRKbvS5214PdaPCuRrGhdabHXZjbgsKFLJEsuarPbre8uRkcp7JS9ePt8efTimNF",
  "key19": "57FN8QvTE9pUxa6xKruqXRk6iePkkKX8Zt9VeQ6Wbtti4vVLResk14hnTNs4aZEt6quPvcrEHWRNDZdSoG8YEFkL",
  "key20": "44qsEhycSkjpBiutgazX6gKYeb1hmCJBRAZD84ifZ9asnqaAoY5vVg3aYG1zcbBTtSaiRKSCsJKXBpbRKfJk9Rrh",
  "key21": "2sYcXFHhbswBCxdmdPXWxT6SdASKqGTL8MV2jn64gJb3acVnYHSgryjdiFi9iA5n7KzSAh4QZiXsoEsEMXp1vJM",
  "key22": "3NiVZ1Euq7rNcahaZVR4N6KzExMewmykBzF4RMp7joLYa5dCpTnDK8dixuryiDeRovkrNN63M5R59nXbnzzRCjEM",
  "key23": "5qn8YSZA5dShRJH3AKapWgC3hv9dDvCicGabFN1U4jJiH7YDWkTtJM4PQYgxnG8o9zU67UXZmEJ4N5BBbQVw1br2",
  "key24": "578QJWgW2A8nE4C9YFTXYjK7AHixvzDkk8T9isXSQfguKDHRJXf7iLjSipmRwM79jCqdK9pqDVgExfHp56zTjQoZ",
  "key25": "4V2tm6k8XNxWh6W6JdtnfnmNmD455xopMz8BswjLy1bJ5evCF7h6v4bbE5NPBzhgjqX1A1v2uYVjXousbAhqQ55e",
  "key26": "MTKd4PXFi9rd9XYiY19vNTXeuQctBvjXB19bnPQJvXhmBgQq1XRWnw8iqBoArMGywijUiJgRiy7Pn4UysyjKTXc",
  "key27": "5tCDfRAJqNbdry3BPXZjBL5oJZvQaSp8S3nvSvtvvLyi69rEhHSiZaRVdjrHgRsVKQGHQgjnbk2Q7Yid49Wd1NXq",
  "key28": "5m8bQmt21MaymAaoJdkHxDHkzcYfQYHiZqpjyepXmWf8zC9G7o4pouUqS5B4YYbbwEnnKRZdEVCU2K1dsbtFCaQp",
  "key29": "2VASai4TvYGAQQuxFMfDixSCGjMWehVukc22yoyn84FsfK2U7hruqSP6DunA2fdPfrxnFT6RCaFnmuLiYruKPyBG",
  "key30": "NMeoXp4MzRhnCS1wCvDjxMN9vd3dWQ2KrhS3J3EYNqCqY4gdLwXf4e56bX1o1fwuXUKHcvHEvmrhGQuxFkcd64M",
  "key31": "VVdNCtykNH1YnPxxPM3aFiznk8t25g2hCi7QzrnAPAhwxLkPZtFQKbPhBnnhRVMXDmEvmmc8tBv7Z7Xeum3yWn4",
  "key32": "vddGncZkXS9xS3f2xmkv7tuUq97vgp5Jr5kZrGr99V5sjapFeoMFYAASCFZ1hg1xLFecxgkbvmByPNzVRBqhX2f",
  "key33": "54Svz1NLNDf4EdL3Qkaso1Gwuz1gsS3wSgCtikG8iT9RzjQewvFXQVxycRoHmJd4QeogVR6J2LTzxBRtE4BbVS3i",
  "key34": "5qqPhSsFNJfVRYNZx6dUpEwZdQ1HwUd152ERqTDZYwqgG79NvsPyfwTbthrrf5RTtsahZ6YfSwfCfapimdxstySJ",
  "key35": "yxmtT1rgeg7NwoQbL4sqAznKArXL5PMuBHXiqAyFyRXEJhGFi7QwLgSawZ6GY6fkofcG32tPUQ5hVe3kZbQmc5i",
  "key36": "37e38rtkrGxrPZzXYp1ScDeckEva3Yye4PubbuzEa24YVdKf1iKmX9aQ7cgsbhxUzybbQJJcERvqxdUJDVBAJzTm",
  "key37": "4fQSeoHLnmyP29qwFx8mMKMYuvzWqxTW3qUGARQXqPNQSP5E7xcqQP6B5eqZ9VfnciuC8ZRZc3gr31NAjSCvfspF",
  "key38": "3z3DZc36vYhoGbJaFbZ3B3Da3J8qEFE3Ni27iLaSCzBzwcPwdknafgShgicpNGzqHxHhrj3JrGWtXDn7GPAtYGYM",
  "key39": "5xv33rpWXoJfmLJzCcs16GF3xchCgHDZkvCbNpS7wnEVzq3j75eaHirdayPLP2c7BgoS4H4K8yvq5opxCKzLgx2Z",
  "key40": "ft42MRjgJw17mv4XSqkRCry5ufr2dxzKNUEAXqsc4pe8sRBgT9kxYZ3McMY8qrBPa2EFaTa9o5j3RYsKpumAzoi"
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
