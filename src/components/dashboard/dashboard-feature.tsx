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
    "4uUh6pdqUYdUEXuNdb1xygmb29GvYtJTSPFWk2BNzUojpFiKgb3Kc36EiQYaBNBLz4rhUM116QrcHQb6Rbgjj7i9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WHk7ZJK8VpTRgHmXBuFaFPnLurQLNiEyesdHfsRpx2HFX2nhsB4MxUKxj61DUrJJUzcu61buWaWNpGPCHNR8Fpq",
  "key1": "3TNDoxEAviq3oZDMfRb77FtDe8aiQn3t6Nc3czZ5TFbcMsryroC6cMdfvySKD5BZQH11WjxgnKbU4Xspwqi6cawa",
  "key2": "618Ae7qVHWfo9aYFBKxMMyfwWBZQRCrmUAY1Kq6WZjHm7hkC9LnLzsqoxGjoXsbQ9eFwcAzX2eQV7TnWghBRtcXx",
  "key3": "3J4p46UzbwcFQ3jL1emFyXyGyAwBjETh8k5obK5aQdh65PGFFVW7th9h6de5btL6BU7mCwvX1ct5zMqMkTZgM9ZC",
  "key4": "61bop2zVD72evqG6FSjGjUjjGG9oxi52FYbdmYuBrWgjNN71UMd2jZwNTJBWfJsDH8ZS3stcgvqQtQpWngZA8CHX",
  "key5": "5LeSoWkyzZyUrdp88646WSycq7t4WmFZsTHVsyARhX7itcYS7ZULc9ginKGgBfj5yBUJVHXpcjoD9E5GcEEu2cYn",
  "key6": "2ho6VhV7bdzWXvQpBZ77bAkxGTuK4kiwkDLjgt3eziT4LS8vBCXfLdBds5wVNJotXq4XuPBUScNwfCW53xcbxCgg",
  "key7": "2m4r7s4zFQCaeC925HF8GHyCbHdnZ4TtGRyHZgGoVr3YYXknENGFGYmNjAj1jKGnDBUHnT8Y2SvqpL9wCye4s9PG",
  "key8": "c3T18eD5vCQSVVBivTGYjbPkUzgJBAJLqmnbgFUDP5RBXu3QCqi55P7UzvFbM7SwyQq1kaqLXTzHjSouWscbWQZ",
  "key9": "ds1XHc7Ds95kxUVuVhVdtbCdnuLFBjE4QoqiewAZd39iybEtsRHUaRx3roeYpqTsH86cJj8gey24Lp97r3FFYbf",
  "key10": "21QL91xNVduC9iuUqC8EPRnm1kDZhTPgoH3cuwSuWw8fkGgXSXmEFxTgbSqPhJYiLw17wzoEtbQ6UJZhJ3UhW5ay",
  "key11": "4c3Hxmko4SLFrWWJ7Hn2Bt8mLppdPbwDm7PSWFVaepE3XMXgy1B5Ut5rXok2RhkhqJ9yUZzBDxmPkXsNWXCYJYun",
  "key12": "3ksnAqTzpEs6hkEZZfXxjyJkKQ8H2xLhfQhM6Mx1nFdXCFmzv5KMB7PpaENwzdpeRA6pWQ8x1qidnwNnRQhm8khe",
  "key13": "8ittbAXzCuzF3hnj81d2JdktXBPaeUddb1bi8UcBtWmtTtPz2FHa6teoTLDYiMhPAEVQTWmtPvBLeaJ2t3jt8yH",
  "key14": "251zvn9hZLJ4u98o7PUkpQCRD5twidfvxNN3LmhRtcNwzHY1PTxaz1uvP4r2YGq23VnZGMreiCjMeW1qaHivm3Nw",
  "key15": "53AjfLjVgcsB2Xww1fturEnZZSVsY4nP5mr2EjwtwM6kzA7MrFBfG2WduLGLiE1XQpQVJ6eikGkASw9tVwQp8DGL",
  "key16": "48NqmPesu5NusdybLy1m9QtBF5aWFZ7R889qEuaLZpuT1tk3FUQ9QiNYuMjeYuUGrLcwvJkWXV4NE3X3vKG8CqwJ",
  "key17": "5phmEsqL3RboQuWr7Y8KVr48mdnWvpuDJYwMG5CQg2Xjjhi4HfqnRFA56Q7rZ4UFk5L9nkYZeZVdUj8fchB6asMo",
  "key18": "2UpKbzVZQQKQufyKRRvhZ24GFepvLCLsZxCTAWSb3BLp7z1CZKoDVKFxoQxUkTuUxKFmt2qthkvjNNHAFhCncb94",
  "key19": "SrnWi6dHZGQDmX2tXyKRtX9rmxsGiz5qqW25w1Zn5ad4vFqGmTar3Sz3rSDCuT8pddGGeR2Ph1FpwKDTHqJ1rda",
  "key20": "4phMNi3u9e4yWeLHJuUrLPzvbp9LYteKCW1zuCp6WTW7N8vvv4LsgCrpdmEEnPYQ2Mg4RTDtMbLfpKwdRT346f9p",
  "key21": "5kBsKbdoYqUkKs4aWrFJ3jnSCytoxrYkViVkoiH23qJM7A1bfqocTaBXKw4wtJVMYNbMzjfv7pXVAaLfUJdzoBMv",
  "key22": "H7siawonDhZLVrwBunYeQYUwSvbPWdJUiSWirnQPcTGT8dpKHtB5XEerCsWZyK69soahs3v5YSNNxeJ8o9cB5gj",
  "key23": "5qYjEY1XqfSHiX6QJCkPJQdxrzQAFNYYJBWsBaR3q3JTsafqwNgGRGPGfgzykUTC8vmWkzEXNMLaJbv7HjHPaJAk",
  "key24": "4MeBFZbn8jpH18K4XuZ4qGF7JazHCZSPXcbEAavYnrbqdD4zqEocRED7eCsSqq47aY54QyCHevLBT1UqfLf8imJx",
  "key25": "3MRYgUCCBdBiob4M6xJx5CRsheakeMKALg5mUZWGoNWmutKfbE7KanneVQS3Jb7tPoNSw59SBujvrX1LLUJfqtoQ",
  "key26": "5VgSrqYVgosRf8F3MGZDsRUyfyDgyuMEyTGTikQPQ29RYbuwucDxsNVAmWBz1D8Y6dchPmbYdkHd4McbZbhcSrFc",
  "key27": "EakrC7ovJ7iGjcEN3kpkZ9zoGfZtWXW4HkStLWAZQLwTd6YrEkCTjCyiX8LAn93qeqGLbtHZbVYk2U8byVxNpQU",
  "key28": "3wWDF9kJVxsNvWzDopqPVP9DYEDRHXpv4CqqZAPDEPVGJdMBExjQsET8Eg8qR9j7NgFyH3tGdLPLH4hNAF6vgg44",
  "key29": "3i8SakDGvT9p3nCSUDG3aKsetGBKGSVxFAYERotctsqysAMNK4w2woHyAfjfmvsAvaNHvNPDBYTvF2iEvS6XFooh",
  "key30": "254CRQH3p82hq5cB45SMPewLY9iGZA6d18DMG35bhsbxpUvz6UtPamCMxesAZro26kw67tT1EGkMgh51WfJ58Dmp",
  "key31": "5XoyovEkDRhzwXv6TrnruTf2KSP5yfWNr6KuXmd6vkJZUCPWdueG5aw29JKj64bLNt27p8p2US1oTGFpzftUV76y",
  "key32": "3ZJL2GSwcPhta1se4yazmeazbB5hhNcA855pixVR4pgBRvJKgHCMa8aaPzAbTjoygVw2BGXx6hVXoavkKZwShD5x",
  "key33": "2QfQYw1k1N8TA6HFeRAZcNwehcpLs2KMC2RAKS94cikaHHecyZbnqjR7R8pBQeRbeC76Zz9QR864RbjyHESMPWoB",
  "key34": "5LHZeUyBCCNE9Q17JM9vdsGw8zTQpTCsKHs1jJ2jLjrfNWeR7Vf6s1X5fCPj1ZbGMFYiJ726AZ5jY5zutS7bhvpg",
  "key35": "5Rp4Y1WxBPRydZ8tdhWzpUKhu3CtvZerzggyzDrwaYnHaErosrdJcQh81cq1hHvp1AP7STheAVSuZjCy5y98X1Mk",
  "key36": "42bThSdcj65darY95oWHEdHF9V8tMuE5Lk1zaqFgnue4JFDy7VUYh2fUqYmJLyehRGN6JnXeHHxBNqJ7XZqDsDaT",
  "key37": "94ctZJeX9ykbN478jN55wszSZoZ1KXi1NtNB529Q5WmQmEXfW6bdjSaZMULnhTH7jDRFZsp7bH4rgYeWgCqkkKV",
  "key38": "5yUKXy3L27PMd7FpqL3EVjCRrzQHGykPRbZFdiaKj6mde1ehggzawjRHRsmxG6hPZA1kFpe95A5gTpWK9VstTyyb",
  "key39": "3aeAiFV8gKuroHWRotLxXH8TfPMBjoUVWsYE4FuwY4tNv5uHTkwrxfF4ZTfPiFXeL2Ty58hq7DANapTpGyV8w2Mx",
  "key40": "26TwGnYvAW4cfC4fihtMaRxWMLnoxAzAjWewyXvuaDZRffwmWN3bFPJXV959FCpEE7TvWEEveYwFEjEVfxEbqH8A"
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
