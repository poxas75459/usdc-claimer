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
    "4mBiLJjgtpLjerzBGBv7Mo22M9gBPg5wgDQ7bZWWhBYnw8wZk969NiS6vRGx1P1Faj25htpcorokSdT9jHa65PYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ojJFStnYZwDpSM1rmSg1BYV2F5jvp1Px6H8kg5oVFTYTKa3sGzq4qFxBe6eYgR2nFhbH9M3uGjtQpgj2u3aGb3",
  "key1": "23tQXrPnZMdT7Xz9oqDosEmeTbLsudwJvFnoGT4YJmH2SPmdtuhC8fr6heJDnHkhjXbgCTNUTSZMnxhhYuaz48y7",
  "key2": "4shjvM8WvixRKFk2e1A4ycNfwXmgmg8WtbSeoXPMnDtjm314Z4QkLMBP4hFLWXS4hGSWn2GaRS9FHWTr1h2m6UUU",
  "key3": "4UpkYqLBoDbESVWzjRXWALsTRsMkqjJL82PUzMUVqmdd4qP1t6ZTpADHmfpVDgCgrHXeQPq7mmfL5bP1Nqeh9fmD",
  "key4": "4xDku9CTF3H2mraogvYjK7FRv7eunZSVRoxe8icZg5mxDRro3Tq5qE2zUf5ZMK2d6XooBpqihsudm5QcpY2BrpXg",
  "key5": "4auscEojnyeSXAtfmwS6rHizTTG8UmgjE4JhGZSx2QKBiS3JuRySB6vK6mkutoyuou68njPJtZmWsHuuoDDda3eq",
  "key6": "5gxwegEktG6pxxzPzpxWSZoM8r8NBe7mN3fh5E5ADUxHuN31h72rC5TwSPiQmFU5gQ8JmL5ykpLzAMnZQ3kBZ97p",
  "key7": "2LcWCFCWAAECfe3uEJd4nHq77is9CQuPzfEurWFL4Rw2iWNJkaExcybLrjXZE3dvK4YjQvqcyAP3VsSLuuUM4cna",
  "key8": "4VHV9asw9qQCzCJZGTdxrUyngkeXSL6dn9wDwjdJpSTxfKdwKsX6Dedh3RFpuBNW75XPFMLpRFmCAsHTUosn2Lcs",
  "key9": "Fg1YYTRJk2FNJ5Mozj1qiS3iHCdtNKybAFt36oRgqkaUYRFcDRDk561nDKob3nPsQsKgH4B5XTE9FZEx682xn4a",
  "key10": "5htxrGiDyQkrqquqtXeNAC29n9wphqJEJup94k4k6vxMVRf38Rji2pd89v5CuHTpW4dTjdAgAu5QaC2XdJvUokxB",
  "key11": "5uAK32MNgU7Ep9QuSnvLy4xErJzRrjzRi8oXrKLKiaVpTqYDjcX1fZid4Nrvgjdu45mfvybGJKCVWr4FytxJJTab",
  "key12": "3xQN1yLPSo8cwJAaWxCmXL4titWEDrZ6dHrPXyyZiayCDrJUvRQ5uqquMcC1yiTzuzzx5vSWbggebTRJA7n5hwQd",
  "key13": "5dk6nxrpC8VZxQcJjQVbwKfomGf64fgqmEwtojZjHxDeASFSfW8zeQZQxn3KcSkNdxnDBsL7VkSMyqcUABn8jfEX",
  "key14": "2omx8dC7zGEznSEywBxKernF5i6KuCcPFnyX4wdacGpRn2XmUG2cNm2SjK3GCYfEjq8pTtgoA5zwRSozDb5mLoTY",
  "key15": "zqUZ1sA8H6i4LwuuoNfgAt3P6SamBQzQ4M99P7Z4A9cyMTGoSx2ErTs29KQYgkQeQJv1fkCuywoD4rqXXuY6QTg",
  "key16": "46J7uYDe1RVucrXT2i49JwGL4ChsRcs4r38XNB69Wbp2Tfj1wS3CiaAvYR64WDHRYR3SJ82bcyseickZYRzrjnnS",
  "key17": "673qT1Jj2Vcjfthj8AmuSg9sWr56punRsbLxTps3J4oDLkMUpKCLBe9w4kCRsBzn8P3oafYTANZKEGFQmA5wBD1H",
  "key18": "Ji5rvL8tiXVjxJex2cpdHB9FNFmQKzsUu7zNW4476fc4h1c4JKbuXMtJP3aoQqWZg4asH81x7PxQVRvprn71pfv",
  "key19": "4WcDsVuK5ZtcSGN86tJzuSbCJTCvbbFdVXmiZqno2hNyodE6hCedUhZwiQf73fj1DvchdTetYnt2DEmgSgaVcJ36",
  "key20": "rGGPNt6GgmFqMj4Lt19HqQGpKgauZAYYytKffZbAAfAaZ785xZwfY7jJ51D3h6V4fSitfuRZ8PJ2nknQavN9gAb",
  "key21": "4whCuJfkyxqg54BmvcXhLCB9HbBKk7NjARk5B9cbZQXUhuCs2NnHPhSaEodDbUVtSLPNYntMEWZiAuPSzsbYd9fN",
  "key22": "4kg6FC1zTNwQ1Js4wteoMtV5iMjdn7Ex4MZRNkf7aDXrtiKsHehBnjuhfZ9PmaJmaUaqPkJkYX3EXCnGoH6SQ8Xj",
  "key23": "4KdBXgdUX5FSTjkxtWT3ZgZMdCKjcnpajfC2vUhcetFuGUmjigtku7eLWMKAN3vH7fDuhCv5c8Y3tLyNFc8jGwDD",
  "key24": "59JFNZ48FVYMRAzvqL4A2xBFjDdRERMf1xV334L3n2mwD7BJWjiX4YPTFuvhycFDeY3RPaPYn2ujNRLhdDGbAWgC",
  "key25": "3M9U9xM9jHa1gHUSoauGUA9zgpZ8zeUpBatkfehcTFtKSNpBPdSgHMn5zuWvD1xoVQVfXshtRr4a1NeQqW5fJTGN",
  "key26": "36ffVYQ4nNgPDi3Lv8W8Z1LxGTJ9WxV4SgcCPEYBXS1KZ6G7i1zKUaBbbuwBKULSxDymJJ7emrJBHyPvBHHeErwW",
  "key27": "2VfJ6S8qWXBD8GMbpDEFeH7TAuVF8ZiAjkaNBRHkTwoYq6C5sw54tTLNipq8ndsL3iAiHRiZ5LgrkFeLyWr7oKVm",
  "key28": "5VEq6QFTRNpjd5SVqhvV9DkjvZx6vrtBeGK4uZLEE4so7LCAmbes7iCjqhF3j6sjGrzQ7ZqYXcFHyYyH2qGKLyqL",
  "key29": "mHgkdE3nqbrrmnoJUzTMJrXY38vPXXHKCdCa6DcWnP6mFjGzRc1SjbwvWqPQQwChd2cun1dzyqqQdmWt2La9vJd",
  "key30": "4ykwkdeF8uoLGr8SadfwSP3CtpJ6Eb1TPoN4pTCneM8VUZxZDdg3KjDGH9UJTPdV9UPCBz9p2nujsZUXbtcSAw26",
  "key31": "5txpjxS8tGmX4b5DMMdhGdhQs2ekMztK8Jzc2NCfFcj4zF7bjPfqUM1mbpLAyDb1Y7fA7PQAHkXx9Ur2JnTBqawH",
  "key32": "5NED5QkjKV2RYPYRBVM7r8G5t29CEswbDMCQFeRKxDDgZquWh44KcwqHNB7niE9fZD4CjDW7ktki559J5dYJeXhG",
  "key33": "i9AkzZbZyDA6gawYfj3Q1ejqyDXbD5ZF957AxC7AAJqFzugY4rzUoYMNJ6dSYoJQCvfiL6HgA2irtogDb1p6ipV",
  "key34": "2FRGG6wEE9ManWQ9DXaHgj6LebakwbkQSzmLM42nCGX51VRMWu4CTkwYde8wELT4MgtbMJ5XKEK97NzvR1bhBXhj",
  "key35": "4qex6XTbEXgT1LDTSKxYQMPSf3JNbCC7LxE5BwBkD1wNz3gv99EYXDe7QEode2QBkyToDLQRcncuAkKGCSWXMcdo",
  "key36": "4BESHnAKh8jgpAjhF8T3MegfbQRydWJwTss2CkuFB7v1fcWR3TpxcfL9ZhkLWJtFsxT5sRoY1EY59hwTUaB4Rh1D",
  "key37": "akX65Tj2tch2gppRCAy8dr1uKQHf8GcZcgSa9ZvBo48BUEd6L4cwfKQBXNj2BjjxPZNuPYzhPoZjapNL2nPuntE",
  "key38": "4SQRv9BmEQzMRCJsPtuapwyQZM7mZYDaWoR4LymJ8YBef32BtcwreSDZoZehdYMgazUkq7q3UKEzk1b6TvhNidwB",
  "key39": "iKpQxtqRPtxnNktn5vbXRNpJ6aK55gaYTyvy1DnLWkdyHdkmmJ5rMwKNngRrMQUxZe8zJCfgBK3DTnErCh6ussQ",
  "key40": "wVRJYMn6KmPFjxv3Ea2J1foPC3RNM8pvcFQbAVMjJcZsKhfyjaPGPyShvFZAVYKz937cPXLR7hictnrnTiuXH75",
  "key41": "2UQfRSeNML5wQYAWeJ3Dmpk7pzceuYL7Tvpyb7FNz8ZrQ5Zpr5vdvVrrscDBpohxepRp21SHDSsncrf4ZrhU8ojR",
  "key42": "52L9y122hpPBsxdv6U6xpKv1jEuaLcEW71mX7YMvc21vpuXN8zKeaJKtMKwPYXhzG8Pr3PZnNzTiCJpVajAgqbcJ",
  "key43": "4RKNZUNcVsDKjyfWm75FgfbBPAisxu2ZmmGbbpNQ4LEpAs1HPqmmbzMQY4pqtMKhyd9zb8XvMEnCsNzKcUPE4p3R",
  "key44": "3MT4FZmY8gLgwaJYaABxLq2zVHLuiKd9KKiWj3YhPiYVia7BnKo5yrVzL3usXBxDfMFz6Tk5cR8swr7DpWPKEECD",
  "key45": "54zppSD5YiFE5kS9FNyk5TmTM7xVU9H4dWV36jWjNRqUhatn7c8GxfUVUxrbgRXataMn59Ek8EE5wDsuesJ82rT2",
  "key46": "5Jq55Dg17CsRWpZzbT5Lv1XjChQaqfiffP2TFMCpYaLy42mU8qRNQFZKhm6i3WtZzSVj6CyXQu2TVH1rhssYSzNB",
  "key47": "5y5a72LNe3pZocKEPg9ExtHhciXnR5WVaH58CnW5DyNqZiEbkcHFdXhiHRaBRk4iYYPjEXxDmQEG3sJQW3qxZezY",
  "key48": "2ECrRLjQ8f4zXbkg4sB5nZJgqYP1T1i2tMUKwkY7DzHMwxLd6suMRaKQsAuk9rNoFYbkYNFFFwJ4VZUTLDJFLemG"
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
