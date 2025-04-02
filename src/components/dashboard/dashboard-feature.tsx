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
    "22XRZTnc5h9F6z6Gkga8HBVwLfRe1iaFGZdcqp79Z59XoNz9jALo1LBSr7RpoVt7VTRN4RxBvXCYxtGYJpLZgqdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C7mhZxRFw7D8YDAhWj6Y9XhSeydnDXv73qyNSpPdHZE6sbi7f568NgFVmQ72v4KuWfXzkG9kWhg2c3bv6p5WfR6",
  "key1": "67bwqq4Vz2m5WbrqzPrunQD3FFTMnCnp1zURgkZUdrKyDQ5NpzXFnXg5g4MRKoFwatpzTht3WQ84YNdLR8ncRcUM",
  "key2": "3f1FLjuCo5LQZHLoTrL4YuaiehC87QJQM2r8ykYWfqLaYe1JE82LDxgVkJZciviAxgztkjntmdCvkcMb5TtvmPfP",
  "key3": "2k8MAvRVjoN2FqoYMQjJAFExH5hWVVTmUUrPmgDhL72xfJrtazhXiEDNy9AS7DKwfNAYynVX9WpHLFJCbL1Tp2YV",
  "key4": "5X3E7dvmQmcZs1Uj9ETAE8iGfYJu3mZJhSRVqoARs4z9MXpdAX2JCFX6AYAgXDw3ML8kELwo1DhGdcarBGuuBzkw",
  "key5": "Gij1pXyPCjUxV4hQc1hPSPQuaLVkxF434aDpz4NC7UoDivsfgnp6fJQTNJpYSW9VxLdVwWnDYQ6toNnsQCnoqxE",
  "key6": "V3M7ARFCFHnCGcrhHPV9jEAaPJwDMPCSfjkKiZyxMHojxzzR9Gn63hW4BCKR6zB8K6SL5zquNL3CRzvSbyBTrP4",
  "key7": "4YScd9Kekhf3GB2ZuTbLLvhHTRZYuupCwscS7zncTYybiAao6TQJYJbK756Nt8YZo8cNnAp3CpCcpkfCvJCYKnSW",
  "key8": "4Fn2nZ85umm9ZpnLhnmbzYCQVQviK3aJhGoPcLHasw2vwRFh7yrtTEbbByk1UV3CZjYEDJuyS2Via9uguGsJHNXq",
  "key9": "4Y2PUHgBEzLHHEHj2Z5t1z4qSM1Js7KGgdsrMGt79u6yxceN6YeJVAds53PTXtn6D5Feesu7Cb97jra92SUwmUD7",
  "key10": "2URJQhegjLE8fAZxfv92SzgRD1Vzds5afEZfaimWjv16TRWVN8hVZGZmeUAUh1WPhdVVhLJQ7PDTmTCc1kP8Wgvg",
  "key11": "f1916qTFsmguainPuVmNnpc7J9Xcoj6DqxV3RFdXgFCwuCaX7fvokki6EB2cffgKJTVhk2PZXKbVSyKpProrZTV",
  "key12": "2KF5wccqc6CqqQ5YSae4VC6hYzncWdNU4NmMk3KfgN7E9D3ZpsnPBwDLXrdrHs6DshEsKLrWjtBhJfHh61XLomJh",
  "key13": "4qGC7nEPKYGAy3kLP97vkC8VpmEk6FwWPHWX6dUoBdrYYBHMavXEhgYQKZPSUG4pkb5D6KY9XdsSF3WDZYfsT97s",
  "key14": "q6QqDRX4FVX3AfpjeVvVg3yt2XAa77joEoWeY7e9dzkgGfAtMjTQTA7yii4uspbmonqQZWw1Lp3uwPbwoNTJxnX",
  "key15": "5CdBfmGvB9zFYW8RHjK31TZyMY72bq679Cpc21ShrfG9NryAmm9aaJx1Q4dcRS6BexD9jz2SN5XjrcCA8d5dY7af",
  "key16": "J65Tt5ipkM6GR6dobkz9EeJRyn1YkVbYx3DgqonJJ9y2viw1G6zUduXWke8ZLYJr94qzmGiYZbpzgWPPrEVHztq",
  "key17": "26s1kzrPQmsgdwYhLS1sRbWYqFewZHi2hz7UuGQi3iV7tbnEEd5QYmKtFPEqTR8G8ewPrrdZrGhau8FHAtM6Rjxy",
  "key18": "3mHnDBbpTou46vpRw5bgV3qNdiSeAEo6H7L5ReBaSGA78VywVMa3EoWuehu5wppSLGeTfABzcSjaMdei2ACWvU7p",
  "key19": "4F5fFYbE5XFg22V8fRDiEh6vfKiDohHFxThsUKm7akMkiYVzMiCrvNb42p1VB6cbvavJmB3S3NYqHucCZeQsfUpd",
  "key20": "b1sbnopE46YTfmwkVL2kxroz4NK5sQgZcTA33rCfdkTeBoNLAKhCxmuqu8sNuduFkwZsiFArHT5D3mMVD6jpGdm",
  "key21": "ab2VeNpzG7D7QWJzoFVTzqmtHjK5Mb5soPn5Gg1u1gLcFujTh9x9muxS1c7YPiueRb7gdvmfWimaDrrpmCHKLQ7",
  "key22": "pDrHq9SwcF8MuJLtrixZ45xLWYDNKk4SZuD5ytno31DqKQTjXQndD3myykCsnim34CsrVFTX5ifLBwZyaAGTwEf",
  "key23": "2jrCiTA5e3nHgrE6niNQQ5ijNuRFFDp5Lhkavmq9rhPHB54Lh3mcX2jB9HX1LJmidBehjqzaZcmRMa58DrSAbSZc",
  "key24": "TkneMDzvsNfkdW1AfeuKjAFL5nmAGAiWSGhep2ukrGbn3MzgjdCXX3htXDp9Rxg5RVK2a5NpQ9SEDLdUQswU3xd",
  "key25": "4suMTxRcGK8mG7fXPfi7qV3hb7gxDB95DMU3vspGontrXmLpJjPLFQrDX3ZYnyQfjZP5aCmjtJ3zQkrHynoqduVU",
  "key26": "5ZRNpsmQZgqKtqj97NAmM47hJ1wqwXifcdmeVBN1KMeRrDE5WGeK1hvPhuz75m5PNoCctJZGZE3miAB7gxeQW8Lk",
  "key27": "65piL1TE9zDkhCw7gZJnwZ2BSGw4N1MybbBLB8xFDwAuQGmjs73SpqUUEXANYB2chiyEbzHRm2XKynGJS9Hh4hyB",
  "key28": "444Ab9eUsMJx32sbbdLboc91oKMFgiWMiv91oqdcyLhhPsnJr9WmeF15EmTx24kocdnB9JbGuu41PFkWDsMuvwho",
  "key29": "4bAfLUx1SPL4muKovqyxkTkJKwHYa9F3T3DDKNDtwHqjRJ2ayiMeg2FWFAEarAcr2osDgToCvWbWQopqighKAP4D",
  "key30": "epoTZJeZ5bGwpSikPMPiFfNv9D4rcsvkH7uLsBX358qJCB5MF8iSse2j6eCwo8CfzCBNt4vQjUrhnxZfAAAygpM",
  "key31": "yqS1i9WqGshCfmjXJXcUeiURFdbSEmnDVVNkG9wkxvqpjC5NxZfLea2XxGXKqkuqPmJmkCxjUYYaziVh6g5ZdCV",
  "key32": "5AdffyRbZXcHzZbckQzDG8TRreanQR4KpBrv47znUp5QvzwF7L9K1CdgvtCTQFYAaeY4Cx3o6J34DrqJUQ5G77vC",
  "key33": "5WnBrrPe8RddybDufR9Pj45xzc3YLpUdZ6SHq3Km5hccyuucs76Rq7wrVkviRg4ZepCbv4G21XM541Ut8xWFCDxD",
  "key34": "2GDX46x6fCi3PTjwSnni3xHYnbnPXmXpHmpHnsNBRXHxvvewwvmQd8zrY4drpWoZsG4rkLJaLT5XjX4Q5tLmTrqm",
  "key35": "4CVhgn2xPgnWARcYqSX88wAa4Vrj9dvdD5BpHV7hDDMnLeG89UKHasfRv8jUa85fqX4Rdi8h1f8QApR542wkyKN8",
  "key36": "43mJCvWPz5WJfswBz3V2jCVJ4NFkXFcsG5pe1dPtCZcJH5dccbrn7K2Aw6cjtFjgy6i8Dr11MJmEAmnQDcmkhotw",
  "key37": "2HSZtex2TiQYDeGJw1V9g3YyeqAe2zeXWP4ueN3F6QXWpA7nwocxeiEVZtiLVTrLU6kD8aYAccEepnzWVXoLgKu8",
  "key38": "3toE496BfCg5Tdq1dSYpn5WmNSFbRxR13iG8gKwzWZKSmX245tSbvSPc6fUzNJFP3d15ESNSXfM4nmc9xxx8bn5M",
  "key39": "4KszrbhjDHNf8AFXY1c68PLc1yieT8oZtrh2uAoUZsx3wDJUxRRXELEcCWRXMeU17oUh4wyDNndbsMGkXsgJowo5",
  "key40": "4DUJyRpUHGm6h8k3Na6gtdtb6n81tHmsqmpwQmTctRVpFuH8x6b9NSg4iUCVvbJxoXW8EG5peaFB86murM7PoQ8V",
  "key41": "2uyHKPbXBbz436pGHBTykxNfzf9dhQ3PdPtznfJqDYoj78L5LGjCzuMeJLMjJt5QcagEoj5npQHaq6jtyCmZULoJ",
  "key42": "u6mF8DDQqgVmPa5H8nu1rtzsmz3yqohwQGMG392FxrhidcGfUyCpEotWzmjx7beW7jo4E1z4uyMmJ1hs1ZprbG7",
  "key43": "3BXqsj3ZbcqhidUK8uviuWQ4woYVXi2gQ56jJzGY3V8WjWy145poSW85KwR3CNAUZVuUf1iyuEigaMZhEsewQHwU"
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
