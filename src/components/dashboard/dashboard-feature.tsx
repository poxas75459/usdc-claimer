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
    "5XVsmmkdfE7WNWE49hjb3xp1mpeWozZxqYMyqqjuvrc79bHPa2viLFGJRuMb7mMT7JhXK1HXB2k2FAxByGBM646B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41MxWyQ5qanZmE8QEFz9AHfZte9FRg5CE8gxYWiXvrXbNHhQqLpDYqjziqatyt7vZjUHtCT74S88DF815y6t8eMF",
  "key1": "3iDNfC7YwRtagoBtJVPygJ2MDbuFnPXREr8NMrTgoUUvcRi6L5CDUCWGMhZ1CzDx4sYkekdXJ5i4yDeK8KXN9E7m",
  "key2": "2i4U83Mxrvv4K7TfmEsT2DDLkadwmCbhtp2QNJQqmQvC8zyvspRmef5hDpJ37U6QAWkNaoudjPBsa5p9dJq1ouXC",
  "key3": "5JW1LfTPsTnwFxqH3Y9rG4JSsxw6SNRYSFpzh2QoVjZfcYj8ea7GL2KRhhDQ7smGk6MMHA6fr5aTQakwq6h1WAYq",
  "key4": "3uA1izjBnC5oG3BCaktvHiZN9hoFbtJhLzhi3psLfqePqkt4DFcQUAjiEfwNLLAZ7UJsrjzzx4ePbHbKGasf2sE4",
  "key5": "5oxbQs2ujPmhkGUFRm6MhKnG5mrUtbcJd7eDZs619JgjSL2uANGHP9fmBgEDS9tTnF2UoDP6fUDSQeNxVkkJkg4y",
  "key6": "4NMigTR4n7NXTsUzfr6YHiJJFduP2cySnqwGmNewZzvo7jNRYn1TTeTmenoXsABYyHkbssXzDnPNdQ5H7ZY4Yq54",
  "key7": "L43DypXADXwQmS5KtmYbamkAdTvESMDx1SoYN94ZaiEyPy1yUFBV6PEczCkpoEhoM31hQJrUmTchpSejJtksozU",
  "key8": "4wBUDjLqK9nuYyNcFuWS2kGLm37xnokZUh9cgUsFMEctictXMxpaouL6JTCjZAgQxLFunTSyC6JqeXSmWYBkvMwe",
  "key9": "2cFs9ZCxB4bo6V1zAf6WFvnnV8GcezTyoPNzrMGwdNNoUrYv9jfHsKX8meCHF8BPgzoQ1F6oE7bsfiNw7u2kg8yx",
  "key10": "5jHPYbd6NT9FmkwUmuJq1YrUoGvc9A21B3mzcqbjGMJfxZTDao4AKWaiTeBGp9hX3ND19R54t6mWuQpmjRkxWvV3",
  "key11": "5dDLoupwy3vq341YKWF1aadsohCXMKkjSEqN8NzAoj1fCtNnCmgUmyYzD3hjCwy2hZfkbJRPJDxDg9aQQgU77ZrJ",
  "key12": "26nBr9gBiZ5VYuSLrznJv2F2SdoDvst6TRbMGUnga91uJrZtJo1VNnCcUcPpu8WAxYZFFaS5PVaRtbrn3iswdzJm",
  "key13": "hUUnmVaEeHMEqPkQM2Wgirw9Q6i3awpvFabm59es3jHkwMxRB9PoNiUjQYNBZo6L1bTwKAGFTfK7QKvmjvM4VaB",
  "key14": "hUNcAsVdZkpGeCaPCKMpPBW6SwhxjJ3fN9VE9LaCbSysrzjXu7z1AxNVhbisKdoENmsSxkLZqNku6Dao745FjQy",
  "key15": "CHnCoJUi8tUv3SWicnbDp7EDpWPQb4uJ5NkaxDwqgysg34WZj3umPVH66S4CfgbjFo9imfBqkf75wzNgrGcf5tq",
  "key16": "kJ8sArZuiRtYn2w9B72Qzj8MWGsZRuWzTQsoSXjktFSdfQQqdXzhE83yNZFBvh6oniuyPbckN9ggVdddrzaBFhL",
  "key17": "251J1AxUjuhBVw4ZKaBagdmHPhHLbw3TZXeZMuerYFYPELo3j11q2adQuG4BNzsLrCfDkyvKvq32ECtHwHdmSpf7",
  "key18": "5gSnpcUHgZGKGW8DunqCmtYYnb7XdufmeLMNAT7sGg53ySXu5zMxbSPw9Jdzu1Q6ujgwLbmK7C6tLCkEp7EnDyeN",
  "key19": "5CC58MJbz5hYXXVYdQsTDAXu23uwWx7RZPwur3DLtjkGFytWrYeHR54BXn2aTFA1pc9JamdA2nk1VCCqQpqmnrEq",
  "key20": "2kuNy3yt8nWiQVRvZ1ckQYCAaj8c8tSBNz4BKMcBLv6Nxa5wdhqsrQNdxnU4w5pMnKzPwToS7JWNmjQdiSNKHRRg",
  "key21": "5kkXCZfFCKft9itYYC2DeWQWGYB4TenNdTrERcoEvghwkuwa1FUuXH7hRVHHKaLsu4cZPn7FZXkvSJVDhN9dpmWY",
  "key22": "2gTu8HFw4XAjSa5p7KFEaPZB3QEP41Hf1oLMzhtPEX5zUe1oejmWaGpC3rRVoFhWUPT2ppkY1Z5w42o5s3Ftf5H2",
  "key23": "3fhiAxxDEPWrC8GKhLMWNx3A55oR1ek74LX7oqBwYFmJwKHQG77D5Ncrz4R4yzUsuhfaHmkSmwu9arLFnBeQAvmc",
  "key24": "3MwaQX19scisLPHDyULpWG5u2BPCpdQodCm4KdfEzD8U856zhaczoECWu6srKj74nN7S5T2eHTHZQMNE3NJ2cy1z",
  "key25": "3prvh9yEZhTE4PpZmMyJayFojzewyVnXRKWgp3CzyTxqG28W9VzzC7NSUD8pm3jgX2oj2FvEpKmrirR4dvayti2B",
  "key26": "3iiFNrfDmxH6oKTnpReZLaYMwGVGkvyyfraTiiX32mD3biTtDEsVgaZKnG7y2H9yfFLNacuUg1D8xQEC6tE3YibR",
  "key27": "2yvAP8MTEfDriqWe3WaSPTZrHcJ2Ap8vgEr2yrLQv1APNdnDNN7WbKGmNvJ35wPFibPddkwXRPXFG6sL2rTSjxJA",
  "key28": "4miqYisdtQDQgKd4jNYGNCXgoTFAz5Fmg1tZMbnTuJeYdc3YHasigtWXSSyPW7xWT8BxZmuEjEA4VTJWpJ848onJ",
  "key29": "5Nky8rVTwHtJebi5gPjG4VGRXiaSKcUFWRJ5o6xAfw1rDhtnBmMHXh7kC4YRi5Bpzwu5xE3n71hEkrexLeqtZaQU",
  "key30": "3w3mzxoroSmkgUQ9vhoPvYZoS6yjAyM4sb4nXxu1Zmpaf3fhtJTQZm6mjFtgeL3GDzhrPf8NL9XjcLrfKZ1q4zJR",
  "key31": "2UowMqFV5e9Kv4VSAmSwWoapRCSm2JL6UVmRepG9n65sW6ePncmG29NjXueCjX4A9eRKSe8bukJG5bTihTtv1D6u",
  "key32": "xehpTbVvTz6k9FEwrv8EvRXRG1y97Wo5Bc5hUe6rkk7RMWLD7vdiW3anLJhckqC8grRwbxJkGPaDpBFkABXwYPv",
  "key33": "sMJxj1SFq56udKr4XYFopKFowtLkfsPJM8gnVqDq47A6Vup9HYK2TEJs9AydWN2gWYDVsmMUQCgghpftQUDWQk8",
  "key34": "5gvGZAXb9m4d7kiLPXfBG5XmnsjAMpa6HtWbLuAsTpm5Axfwj5ZssonrJsi1urwALtWKq93f5G5W6AQ6D4kkA7uD",
  "key35": "2AJJd8JZcDpWGww3gpro8vmCNMCJYMsHkd2WYyENADXQfRgZPM69WPyw5YjL8Vtcnq2jjwPv5XfGn3Rx1fUvB4SN",
  "key36": "4S9KRbsod2xyLRnG5BG5kQwA6UrPFvYKKsJRg8EF7UvdQ8X8oEJmyExcfzvQDZ4SrFUgwA2n47ETuZyywiGuK8Gx",
  "key37": "xSNPqVsu4Lnsun9j6wz4euSCeguq7qZZbg5hMeanfLvB51tYPGcsN2XWns7soDpy8oh4SbRpiA9ejM9dZbkLEHJ",
  "key38": "5mFaJ4wJeVFv8JGW98K2zgF2BchaLhZ7YrCC5MGrPxHxjqsGUJFKVbZybT1LZJWAEqQHrYBPKeS1JdfmLMgYr8hb",
  "key39": "4xUVLYLFBXTjbHNFnRVrtqXxkxpYMK7ucPxHEbVfRjJ2smkEyJb1cUrrfhNGX3V8f51kDyYe8ZzEUuja4auAaZ1b",
  "key40": "WCjmNcxvyEaok8amuaczDWGMwUqQuCk4mfCygpeen5FN9hMbYxnubdhMLkQPfy1HtBTyZbPr1yNayfjxGkjmYaT",
  "key41": "5xP6DCkV4S28fLSu7do7wJ3j9pjYTuR2pTPUnSvVoyqTE7FrdiicM8c4DcTCYZEtLM4hGmBPUC5tvfBSSBcoGar9"
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
