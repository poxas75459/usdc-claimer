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
    "5vHpYymZ5GYkV1TxAjFVjrExWL8Te3tygRFZPgxgDNrbX2FfJ282XPfb8s9iAPtNoAe8siSRN8NLk1UNJDWEdoP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dt9DdgXArhpX8UGuC9V1QLjkmW7Y3X8Pt3FLhor4K2DVWyyZg9n2T9fqEogQrktjmGryQx6dbm7xRU7rvhFjBHP",
  "key1": "5uPHZbH9rgRYkvbRPfAnhgLgd6vQZdaJAaWLDaTkrTXXm5k9R5hBhL5rZwDSvkfvmFSmGh9Te84bUE6gx9EkBqkp",
  "key2": "4Q3yeE7orPdAqmaPFmrbWR4iM9cu5igDKYHrnNHFVaPazrFWATmSjFgnNAVuo2YyinDNbKTm9qHScCr4RqCURvEk",
  "key3": "62mHNWic1Q5UFGwYat55T4UgzcaP7GWhJvtCzTj6oEBSexnnMWVMt6iU3ua24H1dZZ74oU4aS68Wmzpt6j9bLJ9S",
  "key4": "4TEWL1Czz1qE9y3zNXEcsG8Dd75jk8w1bDMZF8THXzzmSQZ3gdqvNRtxuVG8LugeHqGnzfXWU6oD66Mhs9eki9jC",
  "key5": "5UfKSR3wuKGCNVFzW5v1GScSFbiaDPuGDD5U6czpcKrZqZogPXuikhE9YF26B2fkuJa6YUqswH9FSn2i9FgjSUeB",
  "key6": "2xKpio6WbEmYpJ2A5CfPHsc3ZZ2wf8YzBcWTx32RBBECkSemXw4PfjPBHHzMsJVsQGmkgUGTJrBrSUs57WzALW8e",
  "key7": "388wEdzqGuCTsRbXpd8xG2ptV3XVGPBhsU2WxxA2m8dCg49mL4vHHSZiYKvkDXZEpNP9nv6mzdT6GQU9ZizX4b4C",
  "key8": "3FdX3y3iaPWdVM49aXnmrmsNtqZwBZLomkVc1kFP5JLo2sBF2Kf4RES6gPPHPRV4Fe2CrM9FCCGUQnUNc2EvyKqv",
  "key9": "3pPz7o8RCKKUcDrAaxwvADcH2bYtaoPzg1AS5yowAstmyaMdA5Gid68HxwYM2ymSSM5b9pWUwFJ2XBFACv9P68ER",
  "key10": "24T8uwJpuPEyQH6hyFWo1Kg9dntgyzj9kA5oZa58AVgJSYrwHwz2H5p5uTqJcYzCe8KdMWLvaJoWzJZim7kCqjpW",
  "key11": "4Y6iNsE362actUkFdxwh1fA5DTcdXuZrJQvMxZmHHze5X1jbUf94ss3S5EnJuNxy739gG8wDMkcPbAbfU29oBkjp",
  "key12": "3E5FsvB3EHSUZV8DQL7L4Jge4pG1A1u27hYXJTFyQi8jWEw41nW4ye8de19RqEyqkpRRWttiXbxd1gA1zh9kZAQs",
  "key13": "JJ2t8RBP9pxp1sBKN1bAnJ9v2CV458aWkPUGHdjygWTK4e54vfdQ2b1qWdkp1jxYFwRou4ev5rTuXFE5DaEcTFt",
  "key14": "4HF2sPWB2WA4GQJtCPyj8cF1pdiCrnhLRqwSRZDPREFCaLAvt54M2XeerCkuranK2bN5Y7yLh3FBY7QKT8Kwq6wn",
  "key15": "7sRW3AMJCaPiHedjtunMcu6V4mstxVLC45gfXf7v55FreKhLVm2NN6B9oxagzdFFPxVDikY3g2mDdFnddSeXDxn",
  "key16": "4oQPBR2nmNj9UunSrEiZWTPCZrC7x2zufVmNdHx9GjQM6F39GynwUe9NKvsbQo6PcCfdmKLqx6SEKB72yXaxjVS3",
  "key17": "qBkWb4eqQoVRJAVccWfs66iXtiZbLDDQncYUrkexwud71js2MJESPsVvw5tFx7mT41A8jw8yyFjUNktrMmrh6Bb",
  "key18": "4CUuw6yEA9t2U8QxGahBk6Ahe4jmKzP7jXWoQ1ZQ3xXvB4KG1u3UYVWNAzYfrRGzfonTG87aQmTBpHXrnRvvW2JH",
  "key19": "4MTKRiu8CkJ4Qay4NTRqtwB2zwN4AqARUxE9P5txqxbU41YQW1xrT5ZzzW9Tt92dW8zk9zZurPfDadYVHU4faT73",
  "key20": "2mC31yEXZPsgDdHjcrPTXJZBydrkiiUzLDX3rD46qCnDgkzGr2TktcPnU84zMaPPNukx1YbJjw7M9frfBSLiV2Jq",
  "key21": "4ndhGxPJrnucDe14mXuRkXLLs1S5ghARqbxq4Z249B2swU19uoKZ9Koi2GkTAJNtRofcpvWYNXrX6oyWmfsfotgf",
  "key22": "32WzCZWgwYojNLVjbTyywY11v8jcE8zFnGUPwWUbYSAUkeDDkg7ufFFjZW81MhHnoSdP7tNKTnbh2kuVLphcHVWU",
  "key23": "5Cumt5GriKbBDL6pNGRWJR1Lnw2FZV1sa7Bgz6WBZDuA8VqDVsJ9PrBi46m9WKZNLYnDJQzM2QF1K8VbAqAMCc5z",
  "key24": "4zNCyiV2WqRGKw8wQWceCDn5NcNQmz8hmGWP2o1oBRy1tSg5Ux3cjvLsD4YpTLEBP5fgR4qzuh19upenR6Q1mjee",
  "key25": "5hiqTFvPmyQJUDmKpmniAy7THNwsYBLE63hA8Ej5kJCHdTVQWhFmcZMGENRsHMcpgPeXjNVaw7RtWUrm9Vh6BsUR",
  "key26": "fP1pngc2AqzBHGgKSfPSjiEkaHdFzwfv1A3e3447d3PHzPp44PxaiAfpU7YcHKSeNE2noHVfpQDaaSdj2ZcGTHL",
  "key27": "2WuoQajDXgLiQogxgZGMpFHTWS9972HCBFAABj1W3zdBHx6qafyhLnRf8TiPNdKLxfgFo2mTV5q81o2AJVZSg3X6",
  "key28": "4g26MjVQ4tA4D16UBiDdH6vqmnq2UiPBb2yRjYb9W7YnUUxVbVvUys9xyNnntqumNjgh4goHtR4vuxikcwa6zv7D",
  "key29": "Yt8bQiQBM3eYkp2ABf1F83hUPWbWfK9PU7SrvbJbLyR7RGZiNGsq7QhXvSz2nofB5SXrAy3nYCH5pws6rypmffY",
  "key30": "3JQC7q5jaSYw4qd2nm31jEhYpdbExdyF5GJNeRREuN1rKpnNjFN8YWU6F9oNXGu56AMSit1vy1Q2MJXJm4PXh2z7",
  "key31": "3ZrFw2V9Hf3ketSXZK9VgpZNro7qaqsuyRafxzJ8iABrC4UsRWRyafYKDierqYDA69dvHuFbSkSSWa3eH4eAdiZc",
  "key32": "3UxXxxXtZ2VARjst8ymMCgBZspCAQerUb5vAM2xMGiUvhitdjTDKgYSyGS2ZrJSkYXRJKARoUd5Jgcs9zSVEtvb5",
  "key33": "iV2u8MXiTEnx6bkv6BKqtVaXnfp96ViuREfofgSFT6AuhamfP9N5gCJb4E48xmSw3EuWwFTm93ab2LeC34rJShV",
  "key34": "GJk7RADyrTbDuGoLpT79uqQSBoPePgtkTwgnzASJWuLNtNb9gkY4EGdbRkgG98z7pbkM17MMzbV5KYG56yBCkD4",
  "key35": "3X7VYVy9ai4ySFoS4PdjtUbNTy7yqteCnRt1RR9zAm8USfVbUS9BagMG41926CZeyKni7K8igiuiLNk4R8XJrW3M",
  "key36": "5bfCBHuaoHaYQ6zKnyqgfGLpxnhWcrWKbg6w8qxKXxZA4wiVDKknT3NjEmWY4NxoCEhtXspm4aceahyzh6NBsq9U",
  "key37": "5h5MycDP1aUfDvU7ZccukR5QopuE8NS4uEDD3svvhE2NHzqn5z569Q2HNhsfDm9h2VNGxTXox2P1rmNQ9VMTF3v2",
  "key38": "4X4Z8iB1yWVsQyUTvy1YvRyCZJtup7zVcDW4ErQXfBnKHK19iFAcxLRBN74XPGuTniCT3qyrTuJGTuGkQqxpWjYY",
  "key39": "245ey2zwXtKUEmXTS9UDXmofjswWU1N2Ze64NehmcY2B2GqbLj1HA8VSumxwAgMvPPa15RhyL2dVsSMvRC8R28dz",
  "key40": "6513gTsgBofejXGr3V8nBQdqjVqCZPB5Bgxi4cgJaqtKKUiJbFuF1ekteW1ATjGnpSVn66f4GhKadZFYyhjMBce8",
  "key41": "3vZ4WtjRVYVJqUZtdejEMd1NpcqggzQffjEy3SFx7t1xExCTKGvyQ2RY5LzcLycCXx4vkQtysg9CzeEj2TwaNh6t",
  "key42": "2a69TRiMq5TXDFcXmdxz4UKRm2ZLTFHHaWGtndkSW6XFTxhvh1nj2oaqc8Dpsimd2kNrUi2EnH8aWbZYM1oaVU8m",
  "key43": "xN6zkuwU3Q27UTUCW431K7P4LnAhoe4rTNATgtrHW2cssF1uax1fbm1J6dnbp9TkcVcVii7zz6ZWUaKyJfaiCt1"
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
