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
    "2KXiUt4XcWb42PHccfVvw8Sm7j39UgZ2SuxDWdmb7LVeH4TG7pfjToMCidodGxiT49GBUEiiq7jiWY3xSWUaz1WG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62SqVoaBFzLdKYTWcDrdVit7QADXBd6e7ooZJrEKHo61xCgtFU3D4UWTHaG3mbt6t7BfyQ7v7F78FFB37CXNYN9X",
  "key1": "5X5jaQLeXw7vREZPzw3ew5stvkrorwXi8rAFXEfg1pgcAW6LC2jdjDe7ESsb2ZwoFZV1ZiRyTtghcGq8sXWejjex",
  "key2": "5z4znxBhZxJcPudGZZd64GTVP8ANxfGiRYeZy8pJzJeC35yCLw5LwZL1uzHpbPmNXWdqoUfUrbhVRSLxxJL9wAT3",
  "key3": "3UTTkrEnpBQ1bWyAdtZJ2Jah4omKFjpuFzW1fYrGSKAkVCqzo4TKkjRmVHc4xLXyo4Pi22ZRagnxQkvGv3eupT9Y",
  "key4": "4fRvE77ZZGb3hg47guL8CbaGQKiFHxKfu8G7HrpqDqJ6ZPq5ChTUSgyeqaxLGJUr9ZFW6zxqVJBzHEuarte2y6NX",
  "key5": "4bpmuqYnsomLJDK2NBfjszK7qBSgz72fuA4BibreocXCX1nBiPzG1zL2xFJEhoRDMWgbR4cQ7dFWQ5T2w6yYmEfJ",
  "key6": "3Km1DiNqeCY3tbCP2QZwPD1XWkCroYP7T5gVmc41C9WNUW9yXPz5f4UkbzNAjdnQPQhxGXvC3U8iPj8ANJDnpG3w",
  "key7": "2dLZAsaRfBVthfXNPzeRxookoynFX1ffv2Qv9N4krccZUAS7sTZKeKREUVZaG7BPKzYAHHNJWta48nJ6tGQfHtky",
  "key8": "5wJT7hUTW5fwt32RRbncbaN7RiKYGsAWrYzF3G5Jw4q9gfJ1CCMnyE8eeq4cuQZvhjvWn6WnbbTYKHD57tGkwC3k",
  "key9": "cy3Sarw2J5d2GnM8QUJioRuqjSzSVarD4VQm8FQ11ANEpw5WtdYoh79ZALs3BL7uc5G4bT3CW82hB5WxkUVk5F4",
  "key10": "25UFD28QHfcTCxLZLXeC7P93KCR3f2k6hqpUcV2LkmBF9hutURzFeTyFKqTx72kNx3giwL17LHLpfaBDd3CMHczh",
  "key11": "czxQZaL3kuB173Gn7TXQBCYzU945yKxY6HyafxcWgRXrHoe512xPYiMsgLtuEeEiueKxqNERDjQ46hUjkSJzrys",
  "key12": "4VozgBo4oFE4G5ambpr4U5Rc1BUQePDjqgCDDryJVHobNPC6afVcBG6sNvwLyS7HHz7AW6UqTVuSP4ZWfQZnqxys",
  "key13": "3kqWABBrhvd1pviFpikbyA9YS1TeAbB2tfDK1cCsGfH9Ppy2W5PmzVCYf1TG4NA67bCpcuGu6duZ4Uiyg23iEyMi",
  "key14": "3Quhzw93NKM6NQ3mUKD5NHCKd3EQhh4D23KPtB26RfGmeenk3UgC1Wcb64T2v26nCgEhkYej2e68MgFa2koF5eE7",
  "key15": "5DWF3WkhPgvtSbMYdLZCDKkKqkGHrDYshTxiMpfsLxfSAHEwct2wTacUKdUuBjePMAFfygVibPSoxKzGsZ1NYaYP",
  "key16": "mY4MAPbJEt8j2bMj4rrtNLvhwD7ES2SjwdS17onWk4TRqmBhgesV9r8vUe43yTAyJLVAA3GtxSABcWU4dJzjxNX",
  "key17": "4KYBa4khVEe2gg31b1ZF3SYNcMKQ6Cwnkk5mY7HLTJ9nNkBzaxAjVv5AGJv7EwFf3MuGb9R6K1JiRpSwp62tnKy2",
  "key18": "3K2DgUbxxrJYRe6fDGu1ttTr51LvYZsC2WHaqWHqXPeZQ3Ckbgnvx65mxktvPwNfNSxLoFQ9uY7tci3uGBZnfRHg",
  "key19": "bgy1U1WTCyxk8yWSRdHb8cmS3PQhR2295VA9BZ4DtCDF3ZvdejJy7dMV5BYH7AQeoV1qZPY8AEoJPDbhvXiYGKd",
  "key20": "UVLmyWmmy9uRLbvTWoT5qFtgvqu3Sfn9QwiPvKYookFvq9q79UmFivsxvwzdS13cWkL9Dffx28bBp5gFrNiTuu4",
  "key21": "4aDAtCnHepfihE35xpsvT47sPe3y5GCoB2GjbRgUmrihvykF1U5jKDMXh8v2GuwsYoqgnSHwcdYK3AuHybEbMzQh",
  "key22": "5C2FVh8P2diceZkqAYvsMKoXc2s3icQxxu1tNYSWnbUKyE1yPwFtqUAbMo8ABAACsCPZ6tyqrFUexyvpmxdSCy9H",
  "key23": "wVLs7J473HmhWdQ2gRaJV55LQALkTokABbDphqCnjj5XSQH8CctjvLX4hJJ4GNx6LeCwNZhZ6obnp4iVvyMDX6f",
  "key24": "zofSMp1n9zXLae9oje5mJNZhCyhbmuYcwJq4J9dXB6dTE16qwsjXqiD3U5QiBfH9sZFYuNjyAswwgLSYHnQoCYp",
  "key25": "2DUJZVW5RqwopqP1PDLjvMkuv8EYT9v7eq2yr66PNmrsnhyQujvSk2KLp6SmPMTbd7PHwrndMXTxjkUTdd4Kk6sw",
  "key26": "scBCsGRYQPrWwGnUjkANna18EmjMxLyFyRPwXJeCz4Wn8ges93LL5w5a6kKaeDXdzJKrDEEtPEZVBXrn3t2ARP3",
  "key27": "2za2FfkW9uiN2qUx9jDLig88RFiC5RwCo81ki9qwesnia15zaFv3fzThVFGGMmdqQaHt6KjqaEgZWVufHdhEEh8C",
  "key28": "2rSRwhsUY7sRQqNQS7CgaoosE6GhjURPMmzJsUGMhLoVpkXg9bsK8XHtj9ZuNbthi692MUPbhdZkKfQTPzvFx72z",
  "key29": "4efkn2pLd6hVosxBA86WFgMnxAg5MhH3uQGd9Z7Kcd66RS6mcivu5DpUC9jUakocv2qN1G7ABe1EsbCrcwhjnpZV",
  "key30": "4V6Eb9U9fzt7Wng3w99d676wyFrVy2RSXSPQsWTLJdZUPPddSNyYK4hDAov2UadcGRRkRyqntdFDK3gmqocXhk52",
  "key31": "5q7CR3B71t1jhM5j2kUzUU3xF63KtLMA9Jgaz7EaP5hYAWMS7FydzQgnrbjVK7abgmg98ER96AqbgnR4Cu3bryjK",
  "key32": "toFP6VyuesBVH2X1YJu6NJ6PHfqVB8xwS7mdpwRQEQnJVMGr2Fv2GGnxqM8RtLGE9F3YwoAAv8vPzYPNhuyq1qB",
  "key33": "3VCqRCzEsTpoTMkmmmThAqqQGQKMfWDkqX158MCenuJbruptyrseBhVPo5MLK85AgEacqtRRDup5Qvdshyc1SSzc",
  "key34": "2sdMxhf5rsXswL14T8nsPkGJdLG5Sp7ugUAW97zbKfJAqSa24aQmNZiZmVCVGdScYh9x67dwbuZ3Bji4c3zBuFdN",
  "key35": "4C7DGwyhXDdTydnrtZ1L2PA6u4SyKHXfzqcM8GombgwDqRh9CCLA9S6HghWsy1qknh6KuiWgwg88conbUk7z1YmY",
  "key36": "A9o8P4Hh61ebGtpp9hM6tvgEpjWtSdT4YVPbjdUSy2xEKhjbqg17WeBno8jdM7wvXDaDDKjdtgiWUC8PoqQQf5B",
  "key37": "5rYVNsGqb14CiK2BFvBQzhx8v751qLcio6VtvMLdGedsnpgK5wrhs2SqobxPzYAwKDvjdzxWJhRbNLECqHKHg1WC",
  "key38": "2qRN3ZXjfiYeD2qHYxegUcR39P8XU4Ldwt72NUVMXh3D6PCR6PK8mb4FAG1RrxVDk3mFefDvdq1yWCSZTDhwGx5g",
  "key39": "2w1Yp1NV2kkX29xRCmxBUbCQ8Tf9Cn5kXjcxEM8PkwYJfETVWFarnQRQQGVoKkMhcZmXBuduRrUR4DDqndjpfr3",
  "key40": "3e359eCZdFRHPyZbioqQ7Nq4nr84CV4ELKjhDp3U4uAothk5gXa3GEB7E2GXsRLPJ2BRuHBVtakAEJ5wMWNMPHCM",
  "key41": "2MxyW5uULpSJUQqhEj8JETePD6gAVkYGsKRYRTbPNifUF3qFuhvoutNzbFew3K8eN6kL7SnrhwJeeFRYgA7iPk3u",
  "key42": "55cN5yCCYi5X3mncSz3NdsewECDmD3x7VDZeC62JtvfQ2R4cSCwX4jchEepuwRPVFHae6riiJ7aJkJMyeA52MWHs"
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
