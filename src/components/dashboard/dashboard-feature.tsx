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
    "3sMQMDsGPJuC23ZZCM5d5A7BcTGSrzusH8eZpqQhZxfGC2pBiMB5gmdsRYCHqYL2EbBauCUWxwnmvcrV6vZKBoHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DYyZ33xTWmR2tbHw6o85MMJf7bxdjtZ5nhYj4FPHgrLyXL98g82zhPTqNv4AvuVEaYZsNn2tXbezU3HY3P3vKoX",
  "key1": "2jHAc8AMJRd1EypZXg4K114AbtYG42TiqZg1nuXX9arxjAxMPc9vpSa1rYCAdJiWgu7e6DSRX4eTkKJWe43WcezZ",
  "key2": "2sBAqFsQgNTQWGZjHcYdCTC27efAju373moKGqFz48wuHTb2CDq5mzS1Cp9by3nFyKuYKfhSj8J6cxeh46yEWub1",
  "key3": "324bMX2T6eYBkEwJYZx3CQZhqENc1iQm1kEauNDdhVoJpKkCsTRjei3MXCe6L5bHvCnBaGjphFc5chG18aEYzkX7",
  "key4": "49k42uj1wmmmMctfhFWL9w1T2QM36FxZyf24KoyhsM77hBzc9hvMVALcqhkJ5SjYw2n7QkvyP8Gxk8NdTAbuvUxj",
  "key5": "3sLtuPLzDjPbgwNVqNQZRmtfm4f2pQWEZWybGxUzEMeY3vTJU4LTC7JetN6sS5bDUCfW1a2EHduxC69TxqnecY3X",
  "key6": "2ssAMBFE4z3gygQXHeaXRVpCWoPQxBZvNUQPYpacwCuXREfQ6nUeYwjMFKHyNddEz3xoEAEi4BKW7raBrefF7ywg",
  "key7": "2GUYUo9TW2yGt9bMxidaD6CegHJFXrwz81Az6YxTmakNQSpTz8RPrDJjsihxoDTVwooY8c19hCSm1ejFBAGeVhZb",
  "key8": "4d1H5i4UmbtpzcdE1LBo2PEr5sfoD17Bj2AG78Ruc8bDwaZwnnyXJEz7indNn92LmbWRWYzGd6M3E5XRhNxTce9t",
  "key9": "5pbTLedGQWPJSTDaskr24n1qfcV7uArmgqMKr9KCcisCUhMCsVtCe219xV4WPa1KXC4vCeZLjg4RbHYGnqeHy4Mn",
  "key10": "5viNswBZK3rfZFUXhnzagWC2B64ZjXMBN8K6TAmok1jaRbkK3avJAqaESGLWtLB1D2jw35AXCMRaTUaMpgVmUUYT",
  "key11": "5579LbkVSdR2VqWojuynP6fUmzaxZrrduwaBSW3ePZuSEGdSbVFPb7M58qeumJ4VL5Q9b6F95fVEvVyBqefBptyF",
  "key12": "4KrqqJHZCKmAc4c1Hn6QBGXT2eYW375fTCL81iXAy3PaGC1mq9PGejGhSkiN86SgCX7WjX3Pauh9c7afphMtFL44",
  "key13": "MvSQT5kSYvTzRZhGC4AVVvzv1WtAEnTSsahgqLttnDjmF2LrBK69HQnecFN45KSA3JL1rNuifuUtcoWKG8QhxQJ",
  "key14": "r6gsHpxtisKJkkeqsRZdZcrFGTJjTgzeBieoHWh1uQGTKVxqpTQW2xLj5GWzmhCayZxZBmbdcVtjvNtWtk8cJR2",
  "key15": "yxyPDQiKQf6NB2WP9ht4cPdwLiTMPLwBFhkUqicJ3aNtjDBY7CR4yw4NGuQcZKpxqprgc76EMpptwmMD8EhC8rE",
  "key16": "5gmQjQQqPMWorP5DhMUtX28gGk1Y7Ahr1dubK47PywuiPeiJRrbmmDcKRLtinrAepobcmXvQr1itr45g2Dq9E3uA",
  "key17": "3yyo2oRzSy3659LT3DYSVoRJ9Z63KrZUQbhp347o7AnGY8qKLPRd5WZp3mE6Gk9fRz7n4CvUadHTbxTEf9dtyNDW",
  "key18": "5Y5DTiKfTKJbYfFG5LvBxPgQW9sGewVYuFAQUcFGBTTsyXES61FQpVGLmNpn1TeX9TyxLLU7DsYNbSrQYSAiU6M7",
  "key19": "3rdtVAv1cC71kq3zuu9uYbu1FD9rrN4fpTTm773Yq3jQLgKu6iPRhJ7CjxFA8TWqfVfVDUeD7xt6QRcHgTfQvcGL",
  "key20": "3JUTkPcgdngYpHUVteLDfqRmxHCtS4YADVBPhLgVwskxsCNZsuFn6oyUZtFZ46qJcGLDP1smrUVBVUMqpk1wDG4j",
  "key21": "3sBvEPHk9bG68BXqXrefAPxqGQcnG1rcVrKz5AJxnrsFzbHiRLZ9C1fv8TPZW1NEDrcuanB3soAcs1KwRbxhwzzo",
  "key22": "4FPEC9nFqmDp5Z5FwYMx2zdPVft6tKRGiuVUT1HhZuXHNwDuif3s94CMtn6FLQGPkemucHUedyCAkhPESmuyW2Kv",
  "key23": "5T6aqYAkkiibfR3r1KexczGf6gxzWKBUkBimctDpVDeVCnizBBaqL8UE4De89Ztg5u4rXxYkMFidXqjQNF5chg1P",
  "key24": "5y7g67M7fbJSfjqwXNZb7fb8Xzh89GByLavT33Cnht8w6xpHHR3K6yytYSMLE1iJxxnaYGZNiYf7kRv61hjKnPrV",
  "key25": "1zwZCD1brhi5dJvudqafRtKWcfngB48yfcg7EzhcpbYLqa8qpmis5PGHgkQwC331yf5Tr7NVvse8xGRxyMUWZP6",
  "key26": "3epvZ8KovjKbvXxKaA22kiSDL2M9Sq3SUPYPYr854rvEwXiKbp6AMsa4sbaQREAt9JS9DCRc2r8hj6LZRGUYaUFn",
  "key27": "3ZjgbzqSoKQm1xsQxES4p7BVJgXyUEcN6sVt25JicRqt1KtKp1z8Hpqev3rSnSUoWWfspJAEkeLbZpVJySDhbWbU",
  "key28": "28YKLADmn2b7SQWzPChJePy4nW3tGQ92QcnSzG75ncF48bDqzSakrG4pnUuknj7yBcLFqv9MVdbRcKCH3CKh4pX9",
  "key29": "54eTg46S3SzBG2T4YqrQxKj3eYQobDRNLFu5qDyDgt34zLHdHHAqp71mCvCKbJgydkKCe4SeWcsvBxpVqyfGUc4j",
  "key30": "hmPHgxXBfTpgunXh9BzgNoVWv8VPzu47n1heLWjZyu8iGgYbtmUYATpVFpdqWLhi5TVjsPh74hMGoYDPUmXCP5n",
  "key31": "5fawWDVymCZogStuGJm4fpyRTqJnKxfZftXC9Ht2qkQanzVAmSFH2g3uaNdFTLaBwxFCZUom26bSjiqe6WhfEjeD",
  "key32": "3ypdJGh2LdHkLVUpcLhqrAPfEXjGqWfvFEzG4XTSGuEu4jSYhy8YwUVsqP4c9ZAT36UNTJpcwXBFvP129ZdH6fbK",
  "key33": "3FacDu1L2SJjXHCCpRYo9PZ7HXw9r3341M9Z5L3fwxDuriYr5sYounPBabhApKu2rDG3dsSadGaPkAf7LkxUQ43H",
  "key34": "2d66TZRKivb5SsLWgdsquC7AZxpQ4VAk8E91cBuvSwPgWqRq2WAqpm5r9Fc66Qav4qVrrqrbMXw95p8UtLM7C5G5",
  "key35": "4ig8KUGZBuAxpDqhpvjpw1dELqLVHwWXy65MjuiojdknE7nFk1fpGDFbvXofTVoXsxUe3yKrwGFzT7E6S5wpA67B",
  "key36": "39w9ti7tGtXV4bVUBxkAG34skByqf7CGohnFaiBX2jigXdGcjsFEAu6466zoyvkuoyF4hFxwPdt5Y2QcMcz44zpX",
  "key37": "3qcH91YLqiABrJzCmWBi2o8zEyA1SEqaTGGSTjpsi5JZadcDrN9c2YykHLRkQv9DiwbyuDCXXyogakLEzA3nzv6U"
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
