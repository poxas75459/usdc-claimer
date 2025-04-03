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
    "525fNieun2S5ZRLBLFdzvBkzfwqn4zN9Hwmp6uXECyZugd3Q31uSHCXAgdyzcnVcho41VSnFMgAbdykeCiSmYKgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KWDe4VUNKzhJcNwKpeG3Qiyo3KFDShm5WXiYWarmSw7Nj5goTj1p4h6CVJkhvqztAVRHjMiY7QcHzadcvo79Kbi",
  "key1": "5fhXrb2vtyY3xDgrqSaV58fPz2t6FLS7ZQnQxzXG9YZN99LmmecpAspcWg7RchbYwWjQuu1og9UaNSLqVUrptFd8",
  "key2": "5B9Z7roxAr61HwqRRiKEM6t3ikZWzqkP11rW2kUbiXXnfQ4kf5wo5M6kEjxCdEVgW5XnT55QrWxGVxXumUEyQjaF",
  "key3": "4W7jd5jgAXQGeNdTJuujPA6pZJFmskfedQRivHUFk8mbxcwZaXvX2kbDNHnbU7qRauXhQCv9d9jnJ57KR5HmpZw7",
  "key4": "4XG3SyQpXvvz6wH8bDUdwaDrXKpWMrEk6GAMGwzXJA2GYsJnFTHprmaz8NC11xHukhqWKVSzUgasNRVAyjmSZKeY",
  "key5": "dwmuGYntThTWrF1ToLn6rjvZZfszJGo3hLtahwPfVPShi9CP59SLsR42r5svP8S62dftjTdm6XW2dtXPtdx313v",
  "key6": "51qeVCXZGRe6R2F4FtoywZywmRrVS24wSw1ELXKqKYHKbVVqsLFCH21nDymVqTAJYMmT7X1Vhh76uEkabcCW1Gv1",
  "key7": "4Z3ZRDxBGuoSkVrQY951z1WssTixm24LPgWifY8rJm2sw59arC6Y6VkefJipZkEcwc2qVWUpUHdxhmXL3xN7JLN6",
  "key8": "3GJRTZGzREv96DJLPFjcFuxpqd7TnSKCXGdcDMrDTMBaPtev4yVwFEND5QAjXPkATiXqKnMFW5oLaRBksMoGYABp",
  "key9": "5j7f3YjUVF7Dyuic5khk66buPKuseVLRAkLuFA6TPVyxGfeCYWioWj6eUatwE9P1z5t38zVYFTECXS4ReLb8EXeb",
  "key10": "21o46Y5mr1stQVWoVjrrEKQmHkoLDe55Q7Mskkx3Sy3h5qJZb2We12t6uGfGDt9HHLDLzJEm4jn1tJKGySpfrJjJ",
  "key11": "629KgFJUo7GSK4prjwAM7jw7VVq3geZVx2FEDQJiWjo91Kk62fKaz4fj5wigMBzFs8rk7ofzugGLm5vC3e6CCErB",
  "key12": "3nmsNwnUFBX5KnWMpGLTj4QUBi1DPQjwtR2ZRKZNyCMSZZgawVkRfawikbbAAwsQurF7tYZ4t7Gy8w2QJ4F7TS5Y",
  "key13": "rC4KPCvZ4pLCC9LYYrAwfVAnQURAXh7KGth5j2vufMF9P6od3SMKN2fHvVP6B8mMPyDqQqNenG9xcTLxzofk5Fy",
  "key14": "2mMQEsmHL89Z3zWX6he5Pnkrcidpec2Lo4uCpRhrFBHxxa295pKSx6EAMi6mTgKbySyhrsm2aUry46BEChkW7eVd",
  "key15": "4Jqvg51ZHc1sM857EbbTV6ypxTW2L2BRuB8EFRJvcibDwJQEnwUsvLhZDqmSSqaAQBjQ2NLg3PcV8LHeFcy7YWgg",
  "key16": "JzQAteFSWzaN6Jhm2XNVxnU5ZSgaLrw5s42KcvxYnekGALcSZmZ46KFSfuJ49zyU1M9znyEbXWEp8ECQK22NVvc",
  "key17": "GhiP3jw6GNYo3TA1JR6KmrCuoUcvXoqTJ9Z2fedGdnyfjqT1nQvQQYFhgoh3McWsw228s8oSZyVkMqiiVEt6ydw",
  "key18": "g17LsfkLxYJ1dXF3jCUQ5zyMkrtvQ2U6tPeZkGqhztgUDoPfnqewucdrFnu41yT5nbnxEjgxEgTWRgLazFjpJfr",
  "key19": "3uP12RjrcqCJ5hRN3s69fQ61eVrHRn5Cv8RHbcZ5XQzYbhWnNMH6gGtEA7iXJfGJDJNuYRATjpzcFgky7J5s186R",
  "key20": "5hzmJboomj9re1JK5iv1GbKc7yxT5b3PbZRLPLi2iGneYadS2o5iFpTkcyDQtJrejLmJgPSZb9tqEuow8jFu9X1E",
  "key21": "29ay4nmLgkgNV8kdPJMvBLVWCaWT5xJMu7pSafvJnQTAHFoHvHDzBghBrJTsSdcRbHb2Ysjvws2c2Bo1dpkfsuuR",
  "key22": "3aAEodeBqF2FCpVmoSWt3L2uEEBLS53d6D8N3LvonU8MyGgaiu8S6fHqhAFiDh91sDtvSTBreBsZbr3rViqa8PtB",
  "key23": "3pfgiAenuyjubhwV9FfKpgKYnRtduJzPwwgedn3HqmXXhFqQoe9pZfabLapZnJZTkA4G6nysiakkKRrBofK9ehyv",
  "key24": "4fk9WdozTSnh8QAmZ6yUBVMBa7zmi5HaPHT6LaTREypBVVMenjuh4nLMSNhStTJBGRYCzSf6Hos4X98NADbGGimT",
  "key25": "2X52hHNgTMVGF2wbBRYyYUZHXm965K9cyV9FCztBSRcn8VCCNdDkxvPAEhZ62MvfnnXXqmNeFZ1weD2TKvRb9Hy8",
  "key26": "5vtJsmh8aPMSrfAvR9F87CWD2yM7BSgDA6fd5Jr4Bcciy41Nr7SQJ1cvJHTd5CwZXHxJMXsVSjkdUN3YnCiXpEBm",
  "key27": "4WXsv7TvuuLY4ReNKZ1EC4EWMVW3wDP5YRSrXMhQjzp5ZHBRZDGiVuFAtYJKpJWt8vMAWZQRG2bJRZWznfNCNE42",
  "key28": "5XVQ7RU6kknYPfqJMK4B8nBjeqsENxhUuGnKCJhcnDHtLFKsRTaYQ7YGZcwiT8kCRYPGVytXZS8cQtGtnVuLmV3A",
  "key29": "3LXf6p6wyR4sBwF1KkxYk1h9JvphHpNfW5y6QtgvLd6ypM8rJNq5wCygeVGKcnRYKmfirCL3PCcq9h8GTsGB8Tze",
  "key30": "4aa3upnJrw1rKTusxc7xKS9BqShyazaJfnF1scRaHMLmgJXM9VoQZypbkUnBT52L4c5QyjULASqukBxPA92FGbrS",
  "key31": "5HmWyiQjeHr6KJsLdFTtJ9jJFYhPeQQ7BPgFbTXhxNGFppa3uKvhVVrSc9s84nmhC86EsnKoVrz83uW8Bj3y6k43",
  "key32": "39DPSzwJyzcCpUwo3sJsCibrcuxSvm1zgSUnBGXKQBg48nSivpM8WeGt8GU8kDKaoy3da2F7peMeVQL4eQcrEGrw",
  "key33": "SEdYGh5r9DMzguVDzNBv6yiowKKqqVnjhH4s77CHHv4QZacKwDvNADLheiLaX4D4TPBotZ7uga4v7YZ9kMgrhDw",
  "key34": "31nUqAjwRNZnPtqHZuCotYh8CZSjWijq6xJXWgc2Zas2LizeAyrQEKb6N3Dm3C4coSmmM6usv4H3KbRmBNwrGn79",
  "key35": "25jUt4GSUUSzgrfoHhSe3phsLhwWtS738vTJXh2DeopfJ5AKmXVLFgxJt22CsafuAT7ZqEq8ia1tbmcjvLnjgprt",
  "key36": "4Bb2wizqfNVcbbRX8gdqZuMj6vutNVn4ZzjKHcwhXjHjtEKdZoWdZi5G5CHAM3fG1r4dUJk3jL82EUsuhX4zUpZW",
  "key37": "5L3zXHVG7qJSw2r1k1vsWQG1TtirTZttdP4NXZu4BWvbZ72xxbgLv8Jmz4DkTrUuyv8cs1AAtDd9xxGsS2bwA6EN",
  "key38": "2EcNbaKY9oq2yWMHbK8Ab7ztRLhW1g5aoJBiqcfL3i5C5iHs5uCqRZyQq7hkMVNZbb7Gp9zR21wMMV2hjAfEoePb",
  "key39": "5SxBjkUhBqAb5BFFCvveubqnF2mfAXB5i6j5NyKzmhznUmBSSkaSj6dDycXb3LzNbgZvhcuMZhHCrSWY98dkSJNR",
  "key40": "5N1xu4o1ViQpfoCgWrpgQvP97kyRLsrbnJUqDfMTdhY2BnioyhJHNTi7hvraB6UTN6jz8NE4erwczNt6usxy2DQ8",
  "key41": "2nsP8jbRtQbHpy3wYUcKXWg7gz2pYT2jzB7tsc3tcQ4CUFfKXWsiTfy3hirNgcvk9yBxyEq6hyuioKhPUee4sdzK",
  "key42": "4GhJ9R4BotG1UnFKYUE9inGfJ9JbPut4YVQQoE7gWE5mWApg3AArF8a6ouLYZDEp5nEMqG3NpZtJPdgyH2hitiFU",
  "key43": "3qck3sS2uqauGcP2eQuV6hvBVjSxcYK3YhLybrN9sGm2zVti3cZmx8FBuo53QoBu15hhDXHxHVcETZbLa8RsyoXR"
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
