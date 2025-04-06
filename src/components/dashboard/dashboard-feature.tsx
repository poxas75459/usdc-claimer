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
    "5XhVnW6tGirQGY3HUehsBjtgsowJYjpA3eK2BNZj6iM3fhYQjeVdokmwbgMsaXpC4ADLqMydGJGT6ZVQDkoz5Gng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F8zB1fSqSwKqqn53RpeLD5LjHxVrsiijCy7hq9CWBpg5qQmu1Yw9znDf2Lc7KHaC5ZNypbUjBY7MZLe4akpaENM",
  "key1": "2dKLFr99pyB3BYs9uweoVHbjpDwThxjo7jV6ymmhVCvXRfwTDY5tZKGc3gs6AFfh5NnihDpmTBcp92KqiXdxZjDT",
  "key2": "3jv9thc9kGf8eqfuWGxFkXMPrWX7U16y8LcPfHn6rG7bUi1ZqRZ23ZhjjjBpJzTpkMgLKrKKnbuoNtqB1EDv5t4M",
  "key3": "451Jbci6JroiMXJKX7veXa81gqttUJnMgZdDCzJLJ9wsJjySTr5t8eTKXYFjm2aY8yLWAYWuFko17LQvhVckrKcK",
  "key4": "2AbFHuAfQNU3XQPHTa4mrnNqbrgvEXu1HUcQFPyY1vQdHoy8QBHzxihSZv7urVZEuJiBZw5HWmwRFoZmPWLZsSba",
  "key5": "J31TDPTpQxvWGRMzbqQ2NefQ9UtUkXzaPA3V9tfaSxHC4TvnnVxE5GEYis6nU6WMK5QBtSFZwon1UzDQx8jbnsu",
  "key6": "MczpnMbqUUGAi8kLKENrBPg6tCWSpUYaEwwG3JxyX1Qk8Fb76e57mtCFhDaGxcsPFCKPz14xbzwXPoYiQG5mkQV",
  "key7": "59Q952eTCtUsmeVZGhedk3vndWK4w2Goi2Beu7JYNA8hKnM9EFGmm5TMaCHfGt7nw79TZo6JzMxgZdwvUZnP2JxC",
  "key8": "29pDdKidDncXedvatZ8AAib1qdL9D6QVSirJrwb2nTvfHjjtDPFohguyThTDQfVqD37eKiZgkMgMWmDXGHAhsCB1",
  "key9": "dr3Ccmnb8MKmBS7AFy2UzfcU8c6ucee8fKaxdk7uE2vxNgyc7914Y4jdaiy2HtvwDnR4U618VF8uqu7XS7vQGan",
  "key10": "2uFBKBDbQXCMPMSSSEPPThG5yxYKx8joemnx7KJBhQJKmjuS1ycQkzow4ZFEapGmBwGqQu35k5eVLv9ikHGKAGK8",
  "key11": "66Cm2mcW6SxtfhB9jttXh7jRENhXDviE55q8htKzjK1AGXsS2JppKucTMfULTZ1S4gBZZz4PiVXDu1TnmBXfBdyC",
  "key12": "5kuiDRUZ7kTqqnQrbMKKPDD69hvsmwdnTV42w4VaizwHV9uw2SPerX4gSw6T9JkNHP19UgGpieycUEAQXgeQUYeA",
  "key13": "YzTHo8DsNchFoqpBp3YLYsrSWKiVaLta1MthY7i8XnMgaNRuTxKTcePARia27vi2RXSKvSsFVzv1betkhvMxWHG",
  "key14": "2cVmwTXpZP1iU2jXPinjDr87ePHVQz9x5ZBiYWSfsfvBQRRiwfu1KDwZTPm45EUXEqn18ZZrm2Uis1Q7evwzSnBA",
  "key15": "5F7u8ysBk79Lfvy72NL7vzh5eWW6Mt5upJZ7yXUVZ342sMYPRD2CtBQFV33yLbGEZ7Q4rVp2weMxQrA1CR3mY8eX",
  "key16": "2Czt8iMe9pBfB3c3RfwcaWris7o9kxYVvkdCCDSy71VZA2fDndGf8XUqGcz8j5T9D3LRP3tNbLcG5qrNUvDMmfwc",
  "key17": "oTpEQcfqJGgvLS9BL1Cb4nZfomwhVFJoBqTiGtpNRo3VQbN7bbZ1bPn1RfFwd62it3GJtMM3cLrDLn32i8hvj9s",
  "key18": "3qwfYNEPatWwaYA8VWMDaRbA53R4SbbmCFmugZzDn83jUu87uNPxHWeGriBujYgfMKxHQ8k9KTi448xnAcvEA2Aa",
  "key19": "3MKHPK7bJQAEtRb1YGNwUL5tPjMfXxth3B3cPhdBNLQf5CxZwKvUKfqGDrKAgmiKfTUXpJdUTD5C4XUvPzPmdisi",
  "key20": "2ZMYidabSEKRgaGAuikvZNvdzyJqYTacipN5VKLYvMvUigLXhGUdZFbfB3cJmArzcX3fSyyPzYpP9J7a25rM4K3x",
  "key21": "4dikvsDyyy7NU2wreq64MwA4rk6rD1KVMSPtEKc1Tg2KbWoAU15wv9r5LwHAXdPK8vBwU8Ft7cWMRiASarsW1gCv",
  "key22": "cqnQ1a55kk97gnZBL3EYR3qX1S5tZhsQWwd2iuaju3jwa5AgghXspbozMqBijKjb2EbZgnECfiXpaUWmPYBefyF",
  "key23": "5H5dHeLDcTmGSuGgUmJCxR3ysrH8zxknYhyP9m5xgm2oXhJQKMt7u23VTPjQA7witTVsneRUuQC1kffksfhyUotf",
  "key24": "32WNZtw71ZThcMYRJjA4cw5j9Buh5yWmPFZwTaJsgjrMVfocKcJd8CMdXQTpXDuj5FVn9JnyNYAGhQvurrHYYLH",
  "key25": "52ZZMzTKt4H5ZebHz9myfRGbdsTXLLEufjQJ9JuHBuKL8N8pRxxX9XAaQVJZDvVW4R8D1Xr8MccBaF1mdTy3mums",
  "key26": "3U5sV2fE6p1HwVb3FASQRuDzcKSsSYjzh9h7G9gv6TLztfDQ9idFhtXL6pwRBEKuN7b1FfXRbeDtvqaewft7Q6gd",
  "key27": "5PpFCTRCW82jRWED1g6c55PccRCP5AhzhfrzZv9orhUWSzeC9NJ1xusAwJu9bgdX2s5jVSmGKEWgLxxhiFwrRayj",
  "key28": "66uFY7ZYRBnGnwVF1g7SAeQguxQnmyDwarUffjmrcp4TLgTCEdkVcrj2ogbSTX4jXweDNLXwtZPzPKEfYfzEE4Fs",
  "key29": "oE4xkCkwJKUxFp7uwfv6HfqfPdaje1NeuoUXr8kEz1r9MGXoQt7M1WA7DMYdw6h1MmPZJqGNGiNYiRZz8wXQHuP",
  "key30": "3WsAuo6jrDhb3idVq71Ge9d5sepvzkP2MogX5PrZdRMzkLteJFjjR2GPDvRf7WiwbUYKrXPrnw9DK31ery7cUxmf",
  "key31": "3z3sVcKVCQPZFRJxcqiDjb5kfbrfEN1gBx9zHWXDn3MMZYU7y2KSFSqvY5ew8m7aXRGHiak1PMwsTGgtNXUZKh58",
  "key32": "2X5Hn3rQ1j5G5usGFS3K4Yhs3gLXxkVpYnDCAd3hiQJXHs5RDxpsnKVuDTaRBusaXk1xHwonn8E2nHdG6WnUnZH3",
  "key33": "52mvWMo7wizjmJkKTvCHpzDd53PGtVykA2TfT4t4BAciMhNUQk69LYJKerHpYh3AH9NpryJ9LdWNTRvnB8zGQxNU",
  "key34": "2TZZcgYXuBGB3xPVtwrQhcp1CdjKbZpC5yv2FKvJFYrEq6cUUapozh7Gow78ruebWYS1NYfXrukkZb8WqoswHtxU",
  "key35": "2M9TaUGjBcW9mXWjwqA4GNnjRyFhZYubtXYUKUPrYtENn6PGcy9VmFn31chfp5hjCKv4wh44PdPTzzqkiH8ETwEo",
  "key36": "3RjvaZnFxiRy4XWmnGfcJ3Xudrv548vDp3HuSLRWFY7Dacst6FzQsNvrfZXoq2HMpLiWKJSy4y2KQi4pctV38zyY",
  "key37": "4xsS3GLgTYah3bfNytoHhtzNoRHr7VZkadfrrxsvx7f7mJgPLhKu3wzFoccTU5b13UunN1SkSrd7E31sd588ipBc",
  "key38": "4JqQRFNF2YuGrAzRMSkXbyWMkB9wDWYtmiamGaHPT6F9ytdeWycLH4yb6yRp1Ske2WPRXJ7ggzbE6SoWDEHkx3b",
  "key39": "dU9FJUppAtAhxdbMCkBR48AKfTtbxL4oeLNcG6cEaf4g9ak2w2RtdjkyiKnn4iwBPSSaZRRG7N7398tkrehKpBt",
  "key40": "Bk4wdUkaiZ4MLz7Wn9P7TZzEoS8Xj6Ph7wPcWFCh6nps9HpLXaWUu26EM99Rq9iTDoVoK5T2DV2YNaJ58Kiq9SP",
  "key41": "3U7pBiQB4syskJ8y578qS3TRyWbh1aYrMsPBwCpjGNwUpLzNC3SCJdvHw4Zn8ATZoypi4UPMpyirhkjWNBXisLBY",
  "key42": "5igfryCYk6jT2Uhk7Ugbuoct5RAWqwTf9t9u4Q29Akkz9Dz2BhAecoBVZwr7RK6h4CzZLhXksaEZW4wLdvqGaQaa",
  "key43": "2SryWZnTChsyJs3KEiYywxHMpopfbsTqvQM2PBDzwcY4dRTiRgWbJPffY7q5YTxsduNz5MQcfdXbzeMrZmC9ELPi",
  "key44": "5up5mNeadeLax72JxM8XoNL4am6Ah454AWRFqpNqfeEmYjsqdxasWhCm84avx66wGZs4uQcqrA1cnFAi2CKNj6HZ",
  "key45": "zim8FYeGuUJeQr8MErKBSjrxZ4bYXnbSSz91P58USQMa6M6x2vEAukeNwktwzoDWxSWkT43HVpkrMkX65stysSD"
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
