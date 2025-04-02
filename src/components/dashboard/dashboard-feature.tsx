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
    "4khtanMYrkCcHJfe8u9U36D4Se9A6tDDQAWzgnwrW6phrNbEBaXM2YaTkDr6Q6kXoGLV7RQ66bkJNaNVxRZfGS1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4y9viomjoYpBCbChFkmdEdXNCEzX9aZfrCGPGTvU73UddBh191V75EiP4SBwjjdCBK4YAHTAj3FjzyeeG5xk8d",
  "key1": "5gnv7G1D45o6kNjqymxasybp1t2f7TfTmVfDkWvbwWDZWsUkH8Sxgkfv5WvX2zC76ARYPqyq3ziY8DgAF2KU17XE",
  "key2": "KaGuBHBkcLud4y4mDM6tMERRmwH9b9DcgwHnjU8X3Asg1e6AkdCjyT1sW1vngfxU4CvgYtd2d6D1zEupcgthJVc",
  "key3": "2eJamSETc1MNqVEs7iATDQUVqzt6XRf94AvE1wXrDC3J7LX4MUymMva45H1XCEEGkaeCbQwWiZfoQofQHqZFZYVr",
  "key4": "tePLYW1MZBF7PjhsNcSXorhLk9r78zfa9ksZhNwxW8MtMT6k7vuiLuaAKuGyzzpmKL4fnJ5K7pZREnh9WCar5KR",
  "key5": "pNQEEhbMDkCcLTBCUJRfAnmxecYJazneounYgErhzCfWqcwq5GWaAsnt7vRY3TJCxuwyxYGDwfVaKkWU9G9zgMM",
  "key6": "6FSkYiAquasryMUErywhdgDQBN4okHiRBTzzm8n684hhavoFyD8Ui2SL2PhMHmVnHUxLMZfiNq3UVBYvkfiXZ6W",
  "key7": "4CS5Rnwa76bDRLMZP88nRNsfWFq7dfygz3qtUVduihQjfSUThco7QD5zt6DPJg97CCGJD6TzhJi87Sy4bs6GBMEF",
  "key8": "4ZYXsBdEd8fyC1bKW6CELy63avwA5Kbn5TzkQpCJfqDh597HreJ422h4a8ZvBMvAZgvw6Ez4SwTL4yMjXkv5n5EQ",
  "key9": "3uPgKk2RCaxxJjmvMD2yHDP4ZqKmCXkMvrF2j9UieQB3ZF7frCpuJZ5ga39PJQEjJ9XhgRoVgfswKW52a416wvuz",
  "key10": "4eVYNrKFfXwko3eSrwq9erraYmMV9vdMVuUmy6YamiDqAPx6sYGALCm5AvTR8EAyLbPGuBK31dSiq87f1YhnBuJ",
  "key11": "4HqvNxLE6m97pwRkshTRCqCahC6LzwQhcagT7MnaEqDTTkA3m4bukYMUm2amJqtzbj4aYHLGxXxvs8nQExk2PGT7",
  "key12": "KnqEoXrh8bjBPTahX2gDM4KvtxhG7XWcS1oAEjEfSpdaqXWr9JFXxWeXyBtiXnsrsonFfwaBrNsce3rvQtXDGsC",
  "key13": "5i14PxjU4oE6NY7HFbfAvw99cVgwAwRP7ubu7M67jocw3aCqS6R1Mgtyh1xDY5Xvf48M4fZfMND7WP7QssbBtsR",
  "key14": "4nM7Qp7EnqpkKNGtpjEa2CSjCE85vuehNFSZkZj4crQkjb6Dbj2zbxus3a3BvJU44PGBwu4nW1PeYRgqKPwukhr8",
  "key15": "2SC9MkpSf7Myon5HSJqsPq4vouPCoYfKjsNQiNMiJobi8EG5CzdRcMQkrAqkkJBPTXs2PB55E1MZ6pc9sqjVTJ5A",
  "key16": "4Dr2bGhbj4uSryQ6oCzzMeShUJEQaNkaqSSks6SM82bo18XD1gu6fPk9fJ7CZ9Nue4YAwLgmqHqDQFoDYsEWEams",
  "key17": "DVTFSGAXPiN2uigACFsrq5RZ7J49enrPgGS6cJ7Mw3vn9ChuKeFrhERi6CCZKWXwJV2U8duwQNJvAECfHv4o52z",
  "key18": "2Paru1XQCgB45f1zuJWTm5ENhHvpzj8xf3EMpG5e9eTXtapBZyc2NBo1qG5mXoNH6JsSaSDwWWgPkQce61ABfmmi",
  "key19": "2PxEcKeF7V1sET1k6MSkK7ad3HG6JDdcMJpfhLFm6yj3XJKLmeHrHgtMghfA2QELxxxpMBT9Zy36qJEV4kteCYXx",
  "key20": "2iY9JnwL4Zc79LXej9LXFJ9VaKQ8763jRsM56hNqGREZkc33Sk2FQBswwFdb6FnNU8WEwmzfCtuH1Afy396WoLhq",
  "key21": "2XkgD4yHwijKw9rur7xTHkDPazPwVuY2uTi5WhisUhG1dUanz1caxgNfDFCQM8ywUSa8DoEcymp9hSi6DfxhTruH",
  "key22": "3xqhEPT8pJJBwwQv8JhRN4X8Hs1g4TnyPdTMbyKwD3h4Q3FjfnQ2TLKQCbfV6iNvtixsMWfkURkzpwfmD8SNbB1F",
  "key23": "5fXZCACdPBnQsZhFHZqJ3Hdv1kaorvV8Qm8ziwXotKQrpwdVNJnqgFfHyYgPRB2UjuFteWKpytowWR99swskLtbp",
  "key24": "kXw1NoczWKEVNj2JTim8i4iZW7jFPNS5GzsrMfUt5pb9mjzzJMyC2oDKtMCRmQY7SP5PiFdosUzShdYuiC8LVY2",
  "key25": "4fKv4L4e6ci1dXC2bNmk1Xr8bpMjLR6Nz3WBxNyv5JBXP5eu5BzHawLdiC5oyZvEc7dJVmvqChiNZF5JuJbwpvQL",
  "key26": "2Czw92pCZyjooH5v5vo4o4GQsc9upMdwNfjv2LwUhBfTPp4yXj63UyX55NNxinv2pLRUNEdr9vvH4ugkQmYwrBJ9",
  "key27": "5D8iFvjjXqBR3atReWyXVKeZ5Y9GXkgJDqXCHmGJv77adnQ8fc9n897e5F3viLKpqizoM8GUykdPYkUs3NGd9yK",
  "key28": "3Ev3YDNKCNVKDp97p4YmaiK7SJA6a3GzhHUjN66R5sgS4Aup5fRx8CGQfifJ79EC7E2VbN9V7rX7xWonrUByYZKV",
  "key29": "34m3DkGKKmfR9Rd72zY39XQWKsv9FF1whrS4bGDcJ1KGLap4UBsGhPa4vdHjcU1FXRrtvpfgX2FCzGikurLJR9Xf",
  "key30": "5vk9x8Z2wphHYNn7rCvFXmAhr6wqSjTamR5kfSuEUBKQTf6BcwQjXDWL34t6SGCL4KSQuPMfjqrfWbz4CNJWvxBc",
  "key31": "62PNhanNKHw51dgQNeZgY48V7eV76FgohAqynKGcW6GvtadX8643Bpc1ig1QWn37vXTbmgi8LvdvZSEE5BXPb2QY",
  "key32": "2G1ESDRyAzRmSVhWZYX9wJsY6hihMHZWeGXCLfy5tord8i58cp97TmLAsoyVtdWXm7DzyPGGuE5Y3XtWEsvukpsu",
  "key33": "5Y8EFJbJLZwLnFWT41eK3JquBZJtbcKqe2gWUwbq6YebxKR3RXCBYA3N94vU3uusrxndocxjfNYsRswHgnRc5uDp",
  "key34": "4SAXssiAgAnNte9eg6MfzgqMu9Nt75F1nbuRBcLNPuBFJBJnWtMPYk2FoQ3u43aHfbS5qU83StRnuJtXCrrUSXAd",
  "key35": "5C84SPZ8xGzxsLY1eq8gCGmv4UUsMvQ77dw5xFP6DE27ngZPsSYijzDFCUm23zcLU4mGVk6fhV7HmJNXM3Hx7AJg",
  "key36": "3yWztLfjeVLhbjte4xJz5fzumzePCxGScoZV7MZXfin6nTBcHeo9Tp6xWNHNnSKuC7Mty6CpZSvSQ74esGHbwhu1",
  "key37": "5yiwYKXcs9r7rBH3WmjNLRkTCrntpRaToG9nRrPdUp3144aTSrT2GpaNfAaxqrGKVrDRbNknjtQ4DhfwJoABjSq9",
  "key38": "3SM72a2NmkycegaJvtUJBa283o6xYHQKSu6DkrFwrL2s8uTdxwy96JiyjJQegnDP3azLfNMUjBtfcj8sHvJeRAEu",
  "key39": "33zkmR1yibcwzueqFAEMYS7PbfQGxBDimxpTyq2HL1AULzbhepKdk2tBuSJ9Pc3kgnKBhgYdjMPdy9eQ3u5U1xSP",
  "key40": "435G7NU1dkHfCM6dFq9WqDdNFxr9FL6fyCy8P3S9Y5Q1s6dtHqN5YLrpUL2doVbpnDTvNRHVWTLn3ZC9MrabkL5q",
  "key41": "3fRJ9jYMv7jQA1wR7Qc3X64ftDEKMV8e5PKpJxykvp4uQ4UNoxcdHTp6pqaQC8JPb7AmAa6UpyTrRGfmN5BFa5aN",
  "key42": "2G3dS9aN1W5MciCpY8L4mq4HEucQiWtFKmLgm9L1Ser5HcCdMYrABAXkfeNZi6S5KR1GAruBdRFsDrGisuGR3s5F",
  "key43": "tVsdQ43Rxc764gJExt9ss9RzAsoETKHNw1BuyJvfTKtj2nJzW3kRpehEkBQJaYeN8FVKKPnyeJETbQghZNQCoRv",
  "key44": "4M7NxX2TJd4RF6FUZLW5zpLrQwk2fy1gazEkgK16TkCbew4C5YSJdVJ8yucukR6yTFmDHQ6dqCDchtYtkearKz4p",
  "key45": "3HSHB3XyGPRZ6USLQK4atGSjJXNRZXeG2hdEtfu33g8SJWHJYsAaECvhFUdwHJAd71nDuEJpvbeQoBmYVzGZ2uzM",
  "key46": "3XkMotzNK1d1FxFcq8AjVqj9Vq8bm75ZSriN8xdF5Zx4fxm8WxWDwiz11XuV5zmf85s2DgQkBGN62idnKVSZurJr",
  "key47": "QCzWTbGUjD4zkmVG9cR7C7LMveY7v3PUJrVNQ4z7RuHyb4zoHSe923Ca9HsZhLNuQ2DCQkuwjbZpXsWcGaS84ja",
  "key48": "5dHBRWACWCfsPCNw4Azq2wsB8aWTVoLP7YUgtnCMbgn1XpgvCHvV839fNWCPHRVfsDqNWHngjfp3WD4qEmEuQCGn",
  "key49": "4rgTwapr9jhsMmzy2C14grpbNH8daUvrsfYVoNA8atB2BaUbMgPrwSaJR2aS73LL9GLtghZ1aQXoXsLXAEMhXD6e"
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
