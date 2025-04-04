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
    "5zEfqftbggMynxuhuX38S2SonxNVCdbECNZSNbYzMAmD1JYNHrq67pCrAymXqG4LAJqh6xfRBCXgnuawXoMHUbGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uub2Yz7zQzBSsQUpYWBgifR7qgTNJBWD7tzcUgZSfoQR2AWemD3UdzgKd5yQkW6eTSMsxoKe8sj2r4UTR8DKhFv",
  "key1": "4uEuhjcxYyXPYPuJ9ux63HdygsNEL6k2ihh6NsUDyEoZiEcqpgWzPCMDrYJhzS7iUpTa2gaFQGKW4rS4WGWqqaUA",
  "key2": "gJ37NurgdnXVHvijCDrS9Vr4n8wstnDsbK6WKoZakWMeD3RmS2ukxj9mNi8c3Tefw4DsTkUth9dXcWjcFcQiMTo",
  "key3": "5ctWd7jhbK6ohUbDaFfLL3Ep27dmkSjHjQMWBJZgGPmMuWJggRrduTYt6P7idyK1Q4Tt2TCPfiUt4rC7apcJVpjr",
  "key4": "54trQSoqENm5JoKsyhMPnLS8Z1Lx2VQqyeT6HEdF7MPvmcVWXZgbgQiCcG6TzWQJ2EEZ9PZbRyyLpDwywRNnTSCu",
  "key5": "295qf6XJfdjiQht6xAuhxjvtFnuAMnaqofUYSJTv1PzpGAHppZyt13G33fegkDfG1LX9KzLhk3w33ZBcKKM9bPGN",
  "key6": "2XkdJXehDy3bbiENRfTbcZXvk99vWQ1i4jWZ8kZdGEzamMMjixZiAvr1b5ihEC8XGpYHSKs5DPvUs2tMRukhCWa7",
  "key7": "4SJHdGjoRC1N7QcHyBmbBJ8omNpYfkqNa7NPK8ho6P2U5BDvoFux83UcayHvMLQABX85vFzTH1mbYXWuATakX9n6",
  "key8": "3ELr96EeLXjuzFDFTXDbenTPbqZRyvnLsq41vAQj5fVNu8dhmrSXyhJmuFQqFaEZZdCA3RNxw5PgbLdSZtXpxJvT",
  "key9": "4FFDiurhkuoE6wmXLBDZKyT5Y2mkqHF8Zg3vSSX47bLyZ8FmBLYMDvKeVtNiecgSswdVrMxGEP61emcJqRuumH3F",
  "key10": "gj2UfRRe4jtcWWzUuTvAgTjxpuEvXRqdm3pG9LuZb4iUvxQ6VugyNvKcwoFdDsnGCwicir3ptSKuFT2gFo5QPRB",
  "key11": "2cwofx17hCUaYiVWkgM5sN3YAARq4Uzmc1XVKu8hXkGXMKqX6hrL5UKzHh6iGsJmptt4udJLwhSkuzVweCWLqDga",
  "key12": "5WzNy9SmFeYo4P7z1LviHUib5sG8JKfEysUkPouecxQik19z3fmBhkQdKMLoD7gPAG8KPrRfaLY8PEvWGxSrVvLK",
  "key13": "5omKCvPNq9xANJ6c4gNXR37x25L6rc14zjJToePmq8G3Q8FuQaK9Uv2GH1ZDRF7snkfBhWB5tMqmKdji73szpoWA",
  "key14": "4QWpD8yDCV5osnR8Mm2MXa6Y3s98SYNqDtbvG75id7asDEvbRjyxVsuL7fBFNMCKe4cUX9siLNypFphMUYvGuGnu",
  "key15": "37E4GZUHBnxu8oockWWBbADGqjHCfW7D6vNN9aVkfHQ9pn3GVxQyihokiaGMrCzbwCVFZ6kiLJWRakuW9yN6pnh6",
  "key16": "2ryg7y9TG8QWuuL4Vccee8ozueu9yr4gCtWpB6oecLWDPND6Kuqaa66j1s8r4ZGFkoM5sPP1oUsUq7oEmwgzoSqx",
  "key17": "5MkQ1ARywhDXZdrwqYuQ9CZQRn89s8Dqys8xN4cr7xzjh7h5ZXbjxii1YcQ6sPCLUj4tJ8sRJz6rJfus5NuDE2Nq",
  "key18": "4fwgDRAFrjd3QvFiDccQLRHnL4N6psW1oBdBmDEk5oVrUC7jEfpXQbpYDuUXnPWEC315FKdj3TFRMiLopyWzTnAz",
  "key19": "2kRhxQmv4vyjpvLvvVSkqFjWocppysHiraRSoMY4bdXiCk4xcdyeBEd11A2ewmQqwuoYPnLmvzkLG5axr4md4Ppt",
  "key20": "2Vh7cSHmsyYP2XCWfZAZGmtLg8ga7eAcgXLuV53jhzyBSehXTfY9WDty7SYPRUtwn2yCixt3caMkXzYB4m2PMkue",
  "key21": "2G3BGuenB6yonWWNwoFvTM9veBXyo6dKtvVaKswGYU4kx9AC2CqUdSZwMh7Qj7nMhuJW8yz5p4xuRCyd6nG3dyga",
  "key22": "44qBvh4CqFPDSq5heBi8KxEDzDaQ8sdt4Vuy7dhCBsGMJ2VwAH5B3WJkh4J9WByAKJ9p4yQpiMzKRoFcXvKJvZ8T",
  "key23": "24JjUpUc6nJuhFKx7qrLXAga2M2uTGgJvEPcLMobicRqBy9tzwdUaCiWWuruPQxKqu6pRxoWPYCLkus7DwoLAZWw",
  "key24": "5iLa64MfH8in9RXvY3hCYPdfrTorMb24uz8VFcqPakWKBQ9mZsMHmcaA3hkMB4f2X5yPwFGFEyreARriHeg2SjPM",
  "key25": "28HF2Q33zToMi3WU3fTJbUGTH85yE2G2DXVJZXUGUeFD2THmMTYX7EggYN8cND4QwVjxN9LjByoKhDrJ5H5RBLet",
  "key26": "4YKE9me3C1H9sWp5F6m1L94HBMTcYptankiXQtNRbeV1BvjtTdUeyHK75DL8pbPnmVSEKtm846VgoPxQnAauikCa",
  "key27": "3L72hvqkRoQw9SikcgGTcLa8ALMqEioVvz7oErus4YGuG5SqGDq9HjUwuJDYBK1tpohCAnybyPtoLBREde1WmWwG",
  "key28": "3LSwCovpVWd7PgLzdKErUCm7Pqkb4miipwy79HEtbbKxfqYftNNjakncFZPwBm9Cu4CxWxGwNyEZeiiEHsYAGThA",
  "key29": "3Tin3jBe4ywcrQTfeM3irv3dcjFde6kutm9y6dhD1uUAX5tX9kqXES6NEAHw7dv2ZyberQbA1dBhrCHxBcySMYG6",
  "key30": "a1ArRjzjDfG44c6ApwexJvU3CHX3yk5nUPg5QrN3gW2J8pnrMHcczgQt7my6uBwpoqgPJE9TgxpcDyjSfq6Up8f",
  "key31": "N8gvDCjMbkQqh9zYh7NPorHK7Dd91E4usZskRqLGj7L46phfP5W2YR48PT7b7SoLVwDkUeYeTjsuag8XVa6ooru",
  "key32": "2u3NAMV6BvLBAtWmY6KH9gzJsP9Z7rJK8F6Hu1Z1Wx19JxECHMVYtFy94HF1wZxg3dSQY7GZYyZsQYZhkJQggAGA",
  "key33": "5eXJGX2m6zzgKNMN4sXmuKbnxzddqpP9dbemrFvcswa8NNMgdDiWTgVDmDPWUFk8F8b4USLBk9rDXq1QdcHJG46a",
  "key34": "328heFWxfFugXBp4jcPa7uUAiLd8xZtGRYRKYCD7Y3FL1w485pzQbVqE31YJMfTYuBt12mtUUPrSmTrjerrjJtLs",
  "key35": "4Uq8zaoaqgcuhAs418fT52KqSt117dkNrjaCAdtj7JWR4seD26D7GPZ5kaK6MsADtZpucFtpPCig4ybfcsisxYvt",
  "key36": "5ZVN8ecUaxVeVTWpNGEgoxfqEhqxNUmLxWW9k4z22xezQSxQLwUeU8SGdGhHnFqjoct2XTcjGwSEMHc4hfoMJEC",
  "key37": "2YRyBWXZXw7dm9Ya8CU8N4cznhg398wuwmXBZr2sLjebnYajvoN5xt5rCCdSqtwGekVfdjGujwVbxE3WmpHCjtxy",
  "key38": "4SESDXxzjnv2Naj122BH6LjWgBjV9nk1d7VX3CHfUJJQbU7bAb25RHit9caBYYEQGWF3Dn25rBN7X54X83cYGaLA",
  "key39": "5nsAYS4UGfCQPTTPxV9fqkWwiWQncTQULE6xikLnrLnzCHV7iuP3UjEuy1v4Fo8jqVoh1vKqLTPH6EpCVQhvxUfB",
  "key40": "2TkX4KtUFvTZjgYAJxhgv9VEK8LYJtxiTnRC3vyRW8UVMveL57qkcMjygMQn3NyP8CQTCrfeXJdSugQsYqjfvoTD",
  "key41": "82kxbP2w2bHBjCg1tzn8NCWXBU9eJNx6pyFcnBTA8diU2SkuKBuqeEhQW2AC9UMYVjsj4sRF1CEhXnnLsY59V1u",
  "key42": "5SX6E2zmggTjGzXHjMW9J44ZQMm75dSYo5bnTL7mafxXbBLLv9a1vSirvwUHHmiCk6Yw4YwXDZ5KdZxK8zBuYR1n",
  "key43": "4VeKHChB5w9MLsnAdG9KmBvgtk3AzmrTjgjhBUwAeu5ydbbgqWGY54GanGaGxqwN6JoK7FimygAqskiivrCcHaT1",
  "key44": "4j3xMruqc7yzUFRK4SkiYCF7qkoHDRYpyLThbScKKzuWcQMbuDYBkkq3xgqFA79spSiB6kD9Yp82516yuBBFrsij",
  "key45": "3vbHp6EB7f8axorV9AQcyGFXn7ikYGZ3kokCfdFWx22S59DYAjvWC9N2Ptmtjvju9j9cW1uRB4wkhUBoP47XF8pE",
  "key46": "3rGW5cbFpjHPpK6UUXbQGEVkr8qNYmhyzfTvX7CotwXaQCsKVjwPYjAR7LTC83sGhcoZoFQv8nU8EJ7GMzBCzWNT",
  "key47": "2XE6njcaebkUmkuuwGh8KvN1N9zEPECgHifpV9G8XE82Ui2a8fRuXwG6ZpYu4GSCif5Q9HvyvtFpVmHq27fM4Jdw",
  "key48": "4M1Fb1FebPztFa88spB22uF16L6enr4zjNzJwUXkiWLYBnCHTQwy98s2oyHtmd9voW9X6KBigFJBiTYMDDJhw4Px"
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
