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
    "4DacBZQSxgp1tcdC1MqDyXHfvQJJ7Tj6Ei4VWRhyjrXtogRkvKFw2voQQG78MuyB7pVNubFUrRpwtXiK6NaBWc71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tG7guxgaHZLPCCos5PGjXqh7qC677gwgr4CZ8pbJz1ZTP27cjtEn9GEqkjzsFc7WxSvAgLuckZNTWet6NF3utmV",
  "key1": "31uoFKi7mzF8mVqv74bRNBj9kJif3zmB3CHo7aHVT9VZh13MwtBRbRChjHR8nu9LNa5wmFY6389h8WaiZKEqtpkk",
  "key2": "3xq3QNQcLC9prFxEVwJG3YFpLAPSpWX7NNyYjY14rzivcZVXBZ9S9TUhYq7sanHCbufSd8BYqbSy51ShoEQMzvuy",
  "key3": "rCkKbkeqieteanfgm3HjMHUHZVoEEBokAXqseKvwkzqUTHqpydLDAGbTjRnMdc1EqhqxBrjQbM6sE4pexUsc3sp",
  "key4": "mcJngxoqusbxewqxQsp3Woyoakd2KZuksoa2oZWsVqGV9WMqQvmf8MzBzjp81CbaHnzngbfr45b6jumjCD9X2jq",
  "key5": "psD3YC3c6ToGJ4AUvTLqUkphkXKidyJb1g2J2eADTxAau7Hj8ayFAyBTpfAZxfzQHsgehfLZC4Ko4AGydpZE6SX",
  "key6": "2izz4V4zwGRsnJ5JJT6opjsxzY2MHi7vi1CStGgQL8z3gbSpTocFYqyPSYXewUQXLCqwqehvLkXME2zVBZbmyoXy",
  "key7": "4wheHtyTruqXcfE1m5wBj1fu3QfYuJBxRN6akHufyBPB1aH47wn3R2fcLSquFb33WBRPsWdFybec7oaLn4SMraVx",
  "key8": "2XuQKHkGX2oVBLiRYpVjrAyG81FZhBEEgkkQGc6uGwvrXcZn2Fn1YX1RrekkEjDTZVbG8c3LYpgWs4TatLvFuYZL",
  "key9": "4MephobyqTeTt4ny473MBq2hafXRcCeSna6D391qKVGmvwht2jV8vWrgX1a6nRV6JkvQUZsEEXxHeRBe6YcUxenX",
  "key10": "5PT1j46H1fq8KGWnfexm19g1LUbP81Nihz5guWiUP2aZxCj4raBK2VcAXTsbpfjx6ycbczAVYmQwiKaTrGop7qA3",
  "key11": "4HvJDZSamLP6x8xcKytXmvEi1D7MxGCrmEadGBZcn2uPLB9mH66G7EkpLWhBDj41riGhP9NPs1PLZKPh3GLCbaW7",
  "key12": "58gbDP9HiRV47Qq4FhXg6d58Xthjh9YGfiDt3zHw1zwymuaAMcWx5YE5g11F9C6nmbkgecgbMMvKrfs1UYResxiq",
  "key13": "dWrPB6daoSQW5sucUJFXEtLEcoTxTzCuC33y4aQa8C23JkBb5nytkgYs29NrvZmzc9g5BQx2utk6QFCS448ktBx",
  "key14": "463D4Txr6JcvCJcoGzXL4Uo9zdFdYw4TjV5PCfVkrAxyALfgHzZPw13PdJcrHBJKnSRPY7ENFusRGBESsyXp14dY",
  "key15": "28Cw9iRBGkFZZpELrnb9Nkf8dQMY9rFAYh7k3FSJ4ptEQYUiVGYCBrhY7Pkfj8FLnPeNPQcZYAxb7JbFVNGAA5Ks",
  "key16": "4uMbNSTiDy8bW2LgB72QshaVNWWZzjN96yZn86ws3YSNBkYxaH26HafdryQcrKsVcY42eYeDhF1dEepGJZCYnfmS",
  "key17": "4dnW5ioTyPdwPHh8xJ8bA1jXz3s8CiRsejqjmzxii9Ap7qhTgjE7fsy2fH98ddw9LevyLmAyAf3Z8oc7vhWp6eqc",
  "key18": "39i1tGoLwDrsD9AYkznaK5qRhBoe1hed9Gdk4GPqHdLrSm3KbXnqKYhGPPYKxB6Qzfk1eZeRkry8F9X2MGkcmSZn",
  "key19": "24oKAF6gXUQ7hd5bkJeQpmU4ZxU1ywwFCsjmUSeuWYGo2yb1seJ5A775g8Q9k7WqTso9iTswf3gr6XQcqgjGCQaC",
  "key20": "2d9U5rChsaXDvnw9zBPMJ4YSZbRkVA2UiWe7FMqoPPVtyUemRXbSXrwwy4hP21AGo2BGQ5SYZgWEtvuZxmuW9XRf",
  "key21": "2cyzyqyFm5d17SUysGxs2cbiqjGEXvzZxAiN2VdfUhWGfR9Ds4mR3tXZCWSSRjPSZtAt76HxJEekamzMutSGGY6N",
  "key22": "Ui49mq8YreRbyL81sJsQHi1k2F2wiWw5ebssBB6E7rk3wFcdz3qUodGNeQWUx2sg7zHsWhPSsKLhPGCuWdw6hyy",
  "key23": "4FEsfG6CmAe3mfL47zEUDzstgK6VR3ShSve7p8sJRWn6cJPwieyfjXkWwMrS6ErsvwdYAD1ofPFmhAe6XGYQ4hEg",
  "key24": "5N57TP7aYa6VrKPxB1PCjsfQ5cEbufmzaiQvPg1EAmeKN4LAsS4PYuvanRNzfLM9CpXhxzyp5qQA1RRvzqUNvZiB",
  "key25": "3kQi6Pu5mhiTJwshd1kM5Za4V1oaaGaFyxeHeqAoNu1toiBBivyYH7AemaViUrBajroG1c1q6vC2jLSjYyFo7ShB",
  "key26": "5ZEQhfTn3kb54Xj6TDprUPu2Nz6BMwaeWJkN9YJj9ZbapHAtgDgLKgnNaQYGvd1NVWk8FRWDmam2uFTy73FDfcE",
  "key27": "VUfvSzHJdaBkWS6miRQ1DwzeHYSHYJHqpjRUby5czVDFVzMtCfw1i41pvvbSzwrYoq5M5BwAJFKtz5paKM3n3hf",
  "key28": "3eZ8Qj3XCXUYFUzSmkoueNYi1yxNhu7TE9ZS4XsnhSn1es7WYBvTuXEwihEUZkHH2Jf2JiG6h6mniEyyoEKXKE42",
  "key29": "5pJTz2vii4QBVgprji3okV45JUmHkYQWMMnUWxH1bFLwemETDA1nRuKdotGzYAVJ6g58gb7NEpyJ4Wdwd6jfaR6g",
  "key30": "3Y3U6vxgQVjZ1FXiAdzg1E6bhgYkjXV9GWRR1u5xRzxscbXJ3H4mLCBzpBbpZw5QMtC6znXezbV9ftH1155u4Qps",
  "key31": "3GvzYXf9Bwn3pR3AAt5461Bpa6FN4wWcr7oGqvuzCmqYi1c42EZY2wFLmysBKsbVdbTmgvubYRaLF9MVufxxooWs",
  "key32": "4vNiqboneMiTD25Mdodcj3yLVAyaWsW9AaSQNSNWNuiL6yvQR8LrvpGgb5bdgsHGvUYb1Knfb5MkciPexvCz5uKp",
  "key33": "5XQgzxeud9NsfoYPwLt7ogXUmAJifdEmbx8ji2QarUVEigV8Xy3Ud47g5rMJGtxah74k39BZrS86yjCT8SEE2XeD",
  "key34": "TTCw7Hk1ypD5hrhNjGnn5n7i7hr15gv2Wcmq8QKvmdPo8CjuCdusE9oUnJDyXUBquPKhTasbHx5Y6VqKprmuc2E",
  "key35": "HmomBMcoRrtC3ZJbq2xfGbTR5Ef2utgRXXQKSprx4TdiYRhDcAzdPx6WkCqaZo7CqTgPuG6xdxCop1bBiudDEWT",
  "key36": "35FbbHbEmfoVHV9xxuJ6cQwCfYjSi4bCdLqJeJ6Ymf8yr4aFsRrFSDmR9gG8WvjvsmvshdiWXQQBzTCE4pWRcw43",
  "key37": "3jKsamewBtdTsTHUUqjJiCKQGsYW9k78c1183KT2MkUu4oE59upfTXFVgWbr4Ei2sfhpUE4hVSBMNA4741r1pLu9",
  "key38": "625e8kYZi63dQQNem2Wfoa7BrhLt2a43tQkCoRsLFsvJHD5NsrHqCjctznpa6TooUULpCswMzeDExz1ZsTxmUSGb",
  "key39": "rPdSSeuYo8FkM1joFxtGWStGm2fuuXWbV7srS7scMy83nYXjc4Jyy8jvWxzFaHjjK6rDuGXoQ16ho482ex9Bv1C",
  "key40": "4eJBMJTHhgJKww6frRKs3Po1V15rn3N97VojvhYfVxYJjhjSFQ8w9AHSNyZs7kCWh9omPWvpiDZqsdbecEGpBXPJ",
  "key41": "3PMFnkh7cyedUNKJego4nXbTNyttGDBgJ3Jb6Amd2f4CyokSx2MbTfZJkv4KCyMWQZU5x3jn5wUYGzGhxJAamZqt"
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
