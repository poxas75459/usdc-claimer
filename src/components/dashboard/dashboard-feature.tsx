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
    "2B2kf2aUwQtSQakLDFHeD7opYGyh6ZK5FW9Xr8T341YxvaMMB6fHkYPs6yZ9JJjacBtnJLHVHMWu5boXpRUci8SE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wRoQLB6aPZJEh4pP3XtiSHSqCBtxtTKcRrxMFMaAHpDiYYYzD63f9riaAazCCXiKxum9SmdTEMcRG1whJ8dd2u5",
  "key1": "59SaB6ZqsUZddJWBFRGfarVxRCmCRgxyZizAfHUXgKtUA7hLvsZfXC2qRLgNM5KdwXEehA6khWgFamzDBWFVMscs",
  "key2": "Z1XQg7WvuZJAGx7Zd9hUQ98NRpGsDmnoEcu98gLQiaADw6TCcK2kHjk5C28b2xNtxcVdarxBiw9kyNbmZU3XAxR",
  "key3": "49hR6YmP3qZUXLwx9apvHUpuatiSRzJLjXraLJNQCRrh2H3GUmW82TfDCtSUi3rCitZSjRj6MRFncBBjK2LWNr7n",
  "key4": "EiWEJS98TkhDmTZB2BDg8eopE6ydhXEomUmpXBXb9qSVhWYxovZwTvHiLe7xwpVSfudpubnpdfc6JfegNvRkDP6",
  "key5": "2AbZhqq1DFBgCuGX2TJP6yhdky4g3dJ2TRkJZ9pfRyYa7Nd279WMu7kCU5DzVvjPEufi3FTMNumNcFLSZtBPTp7o",
  "key6": "5Pv45xdcMdfrUnPsvqptTNqFEVvMpXWpxCtGeDhVqUeSJLNYHfsxH19G91pXcqss5aYussBSqCpngWqsGhJyXUfi",
  "key7": "34LyA8L2V8Lp3x1XbNsHQniygZ7XHb4mG8g5G8q8DkhQuV9642hAborJtysBCHyd8TyuHtddXG7m7BV5wh3PPMJd",
  "key8": "3HWRrauYoz5uMHCkzR4PouGT3nXh3GDvdckABWz4mKoDZ9Mm8qYpp4utZUHTWErKqEAaxdDMJRmm4rUBUuxAqj5Y",
  "key9": "jGe9Fr6mjmLFjbhzRExhe5L8oEznP7tixfDqgnAp2DxLA9XJoZV9Pvvkxfs9hPewWLyiWakZEsfXbxoKNtZf8Nm",
  "key10": "ibMz7VngphChMLFX3tMWjea1B94SCLEqMULzF1LdGPyUfZJRKwNd3eM7vAroMjtdXqcuwGv4km2exzU9XcrRdxE",
  "key11": "3J7zQ6xn4wqL6SWBGWKTsYyaif5AQq2VzpGfBqbWe6kHKFUx3uHtyJjD1H3RRQyHaD12mjYz9uW9o3UfpK1irR1P",
  "key12": "ufSbPyVq6ySuEdF8NGLfP55aQeFxgYcbCa56Kyp9hx5n3hLdht4jhjT5a3PHWKzH8wfiXgJ6GhQHhQCT7QXTwKU",
  "key13": "3k7RZx1DgRw8GAsk46zugP4TWqYHLhxWrmUmVynSN37TQMiBUTz7YQEf4SFVat12Er6XCwSpesNhnj9y8NfS17ZR",
  "key14": "3DC2dFvAc4PyrhoWcJHpuvYggfLJYQYZ4v71oXEmFwxDeAYJNBXgsRnAkbrkcm4LtZ6ztARXBr8hq6By3rjjzY4Z",
  "key15": "3G82dWfyQq2QtFc8VZRDhuda1c6se3v6YYPGMMADcHTKKJtd8CRu9ukJ9c1s8mUpiBufNQ2yQQfYaGhUxXdgc2Df",
  "key16": "3uAoNcTeDGovKayGCxkhVpmT5MMAVXpStcivkvuLRHzRNm3XJo5UVYa1jNqk1QhH1VP5GRCS1eXVKw17YRMCsKWa",
  "key17": "5Y7w2m1g9nB3JTFfBsBz6fq8kam9TZoW2eUEyMrXfJhtFpBhBbX7GGJzWWHjGkNZqoi1hwGPCm6Y37s2mtjRa9dW",
  "key18": "34kP6pqvRgdfHU2TUrbx5QUp3W247JrDVpf4rdzEX4AEs1k8Kj3SanePETi76CQjsSuGfiA77x7VomLrFqSCyyCk",
  "key19": "4vGGTDRKqbvfNQ1geQeNpZ2yZ8NCmdcbXqHzJvnfFUQGBt8vGJCCLXwDTvnByfgfwH6U6VLge6BFm2tiBdcQFLNh",
  "key20": "5AbRucmA2eBeAzKUxP3DMxJGDoYCzip8FcQDsh6nhr6RLXzjBhYWdwM16Z4VwchKRbLQcPMa6FV3mUTVaQQWtTCp",
  "key21": "4r6iBSGptRS5uPGZSmNpm8oezxWGSRoDuEQfWuM5nFcsxKmvEvNd5xyW8bTHTuGZk4mtqcaiLzXevupoPinmLdA9",
  "key22": "i39SwdALmDmxw22ZEEFPxTPXhBdiiTWGZ9J5RBAxSY4ptiEZCztaYyUKWLjN9VsRoj5qhauezSLZJxosxdsFZ6m",
  "key23": "FD32FABfaZbguM3bQ5bg17M17ZyodZuoiCyasbggCHf8VNUREDLLyfYYs7TJW1MUmCRhJf1aUrfAnLcnPj6CrCj",
  "key24": "wpCnEQ5aD76qawg5PSUxAu2uwrEagPQ6nLQbdxyCzugWPQ59RRimbqasQheKmDxciKsxtFvGNpEfLq4E8Zm9WRM",
  "key25": "5Rq9LVsjjKmrVnCG8Q4ztVWBDNjd8TzVq7xp8hAzCncMf7bmbCq2JTzcHy1W7e85GrNk2e5zGgWbGr73i9hdXi3Q",
  "key26": "3e2xreDS1BzW89VjyW2ozehejcywXrQgu3XAeuMM8aZAKiqqRA63UmZuhwTPr3R2yHY2sfhgg3A6NHQDGun9dLjo",
  "key27": "gEBiWbZ2zkf3wCXUMGyiM6X1UZoHMo5s8bfMccCC7M1kAg9PYXYqmsX8jK5VWsN1uobrw4RQcRWG7PswEHi6Ytt",
  "key28": "bVsU5mJdCcQyMcri21NzjpLh2uvmGpErZgpQB8nEKgnEE318yzXm4GSrxqrcUMeaov4dT9rzx2aQCptovv3bUfX",
  "key29": "2pMyzmr3BsVm6SfRZdy7gQyUQX31v7MSZLSjZnksEqUNosZY8omecX6WJmAHLW12NXsDAWazzDj6hrBhQMxNN7Am",
  "key30": "2BfedaDUxUYdiEp2MbswbTbJrkqG5PVEf8TPFs2Se6JaKJRweY2iHJY4uG666CLBC4mwNmpMGphWBvAsVGQBzFev",
  "key31": "2MxGBEcSvdjui5rge8F3Hjs4CFVmwEd2G7YV7ztBrFE8ZVD7scFpxcUM77jnfpkouJarjPVfdXpi1eBCWM8CMmJp",
  "key32": "4VNCL2xQvX2DAPC2fXmCdZxCR4GRNgktJUgmApcVW1F4hrCw1ojcUEhXpqitEEGBDWxoTPv3S2KN4zY3XpoU19fg",
  "key33": "5Eefj7DbdsDR7zJ2PrHcLQmQ7CJjEbkj5xccxZCs1K4K6XBxgeVGgsXhZNHbmGLVZX25UZuSuFaayBAZiJCEGyjP",
  "key34": "4x2o1xZDHEvJM8QRswvWac4b11qaGJ7q8HmhszaQjtJivXSm1c7HFNgXyKNssShoKUEV9wmjn8ENLZccT3Jq9aq3",
  "key35": "484sWpcTxsFW6Mke99yLfa2mEjuUJjbBDEup3ZwX38LEZKhnptjMW6hc8bMHuMKcPEhQFtAotEBEnvr23dwYHMxd",
  "key36": "3YrhS9eZJLhFrsDfhMvQFYd59LUjbQtGsZ2iSJRCwFPGQPE8Szyjm7pa3jU2tWqyPa4F6XQPRATpLkqebdzuApP5"
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
