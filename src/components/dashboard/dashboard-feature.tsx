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
    "4cAkcQKg3MndnMeHnM3rkMpYGuVgRNdkF4C5vxLFbwqSDd7TSETjLY6UHj85vrW4AbL7jAT2EkWSAi1x7dNf61Pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwtbMu3bYtKakGRYWT3kkf9Q7pDy22rwD2ij2grNEwzeQStreGBCNFtXzKPPWUzXZQpEXeLAfeiaxEo2VjTzeNj",
  "key1": "4UdfGn9Qune4Vf7hp4K2QG4uJx5tDa5zRYChttjEa4U79ACuqFayReQ35wsnyuEddwNDwoi8nrNS5nENR9KdVyiC",
  "key2": "2ztEoTiHKUcCREh92SdSnVSTtLLaLc9krCHHsYUXiMuL6HrrqWyDftLwTkDqSW5KTeygMqMWFrTtmNzEMgQNz5ha",
  "key3": "2dDp3EwQEBTkFubDFFc9P3tZWsCQdzXYc1htUb99wvfFu2jX8Mon2fsBBor7jsRDB1V83f9pLPRyhgA8yqmqi7AM",
  "key4": "4kNqRV9hr2UBJYyb9mesNf6gvsk5Yhq1iMCmBXswrc5A2z4cvfBLojgbDy6JqHcz6SgvGAoLCwJ1HndShVtbwFB9",
  "key5": "FU6YjRXjvpwbnLQqVDHodstqtyyFMnFvVMB8pPzjGHbjCwFtXgbapzVatbqeJS5bsGFFLvZp3mmeaBYjsJ6qcyF",
  "key6": "4m1et6sNxsiBnQYTToFWhUya19wtRr1YxpLud46iLrbjcX2fr23JQpkJeizHUAw1K6biPsCHTzgUD3J8Snfv94Wj",
  "key7": "58J4KZ5d3ZiRk8UrJSuaVf6U8cLQMzRuDNqroHbrPfaYZbEdMmsyhXwvPNv9A8LUSYN8eryikpQAX3GmapUthWMj",
  "key8": "2HvauzJmD6hyM237fZP9Se89AGR3BBV6fLpV8i2TwEGG3TGVx1iAdxpFBXtAvqgSj4h6a13riepXJHqVG2qQ1Vbp",
  "key9": "4A6FkzTYSPgjTHpidyv9ByKXV4EtoZriprrvct4kgC1E5K6S6PaT9yRXV9yBuxd9K5pVFTeXZQ6qnRvFEnsYfcig",
  "key10": "3avjr8mwvoU46hyo1zuk93Te9RQeK75tHV8DWrQEUPG6wGsCcPjbSmpA6JXJVAMQwdchbSgUgfj9Rtr1RvfKGD4k",
  "key11": "3Z7c3vq7xq6276dysifZitD1mScC9EXd5nPft4AM4SzxJN6bpqgs3L178oGuj2hSHRvNUq9z3BLdSQgRdWKZvU2C",
  "key12": "2B9LoTsAsi1zZACYPpw9W4NmSkfeqjJzotvAcYkDEcnL3ke4rFK1aAzVgrnLK9LYuHqYgcR3TRAS3neGwWdxchM2",
  "key13": "2YZ8jKjxwWbwrGnHej8tgRmwkeA43wG3uKKCNUwUPgq6duPAZ2u7Vc9FxfjbdTRhwkdHzYzozJxbShEqzbnCAZua",
  "key14": "2PJQ2LrvQzgNf7XRaSjKrN3mes5Kfix3M53gMxu3wJCyx45ZWGSQXFUquWpFQU9jo5a4VojuMRYLFeqTBPHFbTmf",
  "key15": "YE3sgufcnCo3BxfEB6qJWnZ2DrwcymAo6HbspYFaWnoAAk7JX2t4oX2iY7VN67v2KzpBJKM5ucVq8u84qAXg3Ch",
  "key16": "zTLwtS8kLNEG4SQYBYNReHhrxXgH45oCozsKes3HKdMmidrZb5kBPUwpoVon7jBbrkP4UzpGMe2GARakAyKVRVH",
  "key17": "3wTuDraAmwZNfM84xPF2wcqBkWrhLthHNrQqWSDCQeeanfLy2En8SWkd1VpU3w7mmQ3DtA1pFNE4a8PtKqUZytn7",
  "key18": "44vS5rB3Tyt7w9SRaLuWGeJYU46Rj81ZdCb2AQP1pPBNzhvp63fcp3zgW4ZNdykrP3MEzKF7gYAwvYdBH3jPdxd4",
  "key19": "2v6oFkFYNkaWdbP9aq1pzVtbWtqqYAe2bFEJySrrx59mfo5nmra6yu5SLoRmfxwJCo4kqoGugUmRZLnbmjDXnXVv",
  "key20": "5wFPphvaoQEVwTVb5GYoj3cszf9HZcecRv2AKJ1Um3w6ee1snu4cqKMYi8k3WjEq2RRHQDhvtJz7fV1seTBrTM4B",
  "key21": "3dwZWHsYoSsSsgG7Go5W7QjS6q19ZRLP2Tz78xFxWA1hoR6VUwY6LhBXZMuRReaetXMKthyef6XdesfHJSexh5TC",
  "key22": "2tfXkkPsMBsKBnKtyUBEqmHnaiY3xjRYJYt2hHVsEPFCgV6tte1Bf42VqWBwmaXPT9HcCDpMPkfz5QeQBSLjfweR",
  "key23": "51hhvGq3gSvSauZhFj1D4dfxFdq256PKcopApU6XpZjahHeKf36XtKFDJCUn3MKyRUovRMbUYBFzM3NrJgiQZ6yx",
  "key24": "5ipaDxvNAnjveTDY3duGUnoZTkWBxE6opS1zhJMiLuSb9q7CmabW6PxMqMVSvtwCjKvp9EiqxEg8229joK3JChhs",
  "key25": "2vzFF7GRKw2ZnsKutxbqxHFbVVEvH2nDUfiMYoe4pfGb8ENDu4Vm3riyBuCSuwFgTcx5k24j3CS7rh76KuPd79aM",
  "key26": "2Rc5XsKquTcna5muZnZHSKiDoKjhyepm2Vh76ePitm1p8wrPn9ykDiZxn8ncnAwWknZje379xBSwbr4s1eFz1zHj",
  "key27": "27wyhLNL9g15X7EtxGqZyBGtRjyrbFHUhthWNc5DnetYjJye7t3EFGJsF4ewNKvDcuhgFHbBoQFFhMhP1eHwA5wJ",
  "key28": "3UyKt1jG6G5BfNjQnd36a1WXcj1VJf7Cbhd77y5WPzwbrKeQeyo37qTS8tdfZPPGTh8LqMHG9qE5yUqkD6hNUNpr",
  "key29": "4YWXqr3AwNFhWYAp396W4uha3gv6HLC7tKZzKn2jmpuredWiNYHcgL1aTtQdpFZaWhdLTz8gB38VEsDdFPKzPSFS",
  "key30": "4E2f4LQgCTeUkgUC5fKEYfY4FJGKrB6GqXuR7smLWBmd3RCZTYRsjoQhxxfmdRvRAqtfXU5vHaJPn7VSmWjpNBTG",
  "key31": "51bnTqGpiQ6rDwcZNxDKGixRajwLKUZFN1PChr5iRjRMuQ3AwUCNySiBVxtR3WDfZBP7HY5xyzTu88mhy9uBvYz1",
  "key32": "s1s1K9GF2CvgZponKE1voyJQCoVqqyXPzLBCz6XWb32XCRERR2X11PzS3f5Notwveit4UyA1SErSXwFK7YaMsah",
  "key33": "db9Diq1PSVSKiN4WpTvbz3iAznisLQPJaKiPiZ1ff1sri1ozLPun3k67mpt6dcRHi84udBMdMpHy9hXcspiUN1Q",
  "key34": "2abw8JYnVhAdRKU7468s8eE6n1Pfsebz9XjkCst3CE2g62bdAxueFA9NzKgcEmhtYjyRcSCKYPUvcZXMutd2vVUY",
  "key35": "522MfUqMqdtoVtdcmWUuSaZxDxBiAUgUks3Nj8dfG1t36DR3BgXA31AgcbapG8afjmMXFh4hGH4vJ6CpKAshsrQy",
  "key36": "5DeiHY3nHyTJFkZZrwB77cr26wvWRqZFLHjszbdDRirzq2bfA8LgpQgrkKWngKUoSuEj7etmP2eFnp45X4aXfKL6",
  "key37": "rKk7GNG1tSyEPZvg6JBMuBVzmHSQvcEWxqkAbwZc1vptbwG2aHJVqK8BahEDrSSg7s3EmiLM2kbNctGcMhcTYLu",
  "key38": "AapMLQ9VE8pYamAvat9xKoaS6X4fBahKe12WCUQtBrV6dw3JJ7tCZ6DTAoB5eW9frCbhYijotGy5J1ZnbfupZUF",
  "key39": "4ovLaWVhBpkqJLLBdZPx59r3ZZrwkoy99kLWaMkiDLFcet5Zu3d7ZabZWFuQG1xYhWL3GeuYfLaS49zuh8SoDMJS",
  "key40": "5wVrevPJoN5yMutArssbmJ5xqq8KxxHUMzHYXmrWtfPZjmTGbbHxKZirRmrqwE6vpwhAttVTPToK6Hdqmvg9fqFk"
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
