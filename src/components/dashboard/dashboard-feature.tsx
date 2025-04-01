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
    "5ZwTN6QvpXWMyBvNF1Kqs4AzG7RepoNMxSaJQBoRyiodRGRFR7EYyX2SAjpYkAdupuTVeDW1QMBA8mcmrExCHmAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xzbs1gJmXFpFXSnySrt8GMfkETnuxbLHG1taGvtvqXzuG4EeMS9hGgHu1JMs1b3ap31XYnxtJ8dUuwZEyCYotr2",
  "key1": "4y8ergp9JwECfWjN6pey1sGr3T7J2uEPsYRuvp49sKkPwEsEaFwcQofKofGL8uasMxHktS9seTKTADnTDDHmHAqY",
  "key2": "W9cebE8C1JRWC1T6LZBY4nLiN7Syrb5SBJGkvbDBLpAjdP18JBrHwKc9bB1iUJCYNT8F96bN633eVGjVZFDEEWg",
  "key3": "3BdKGj52as8vGAwTUHYP6WvZwwzC4YH3xJcjtdrdMETu6McJWeZbL5mKozFJvNp6abYUoAhvFftYidyXE51juxJW",
  "key4": "5LKHHrAR7BDLbjCVrsdzEwutyR2MXt6xEXQ1JrVMNPs5cjGxG7bniEAr2SfwPvuBgf5jhsABp8Vpdj9TgbBiWmop",
  "key5": "594FcRdnbvW6izZP14m9aQREcdY4VGwhs9ekmHADKaXbZX4NC9K6bkuYezpW35gYgvnVsUxriWnvfLihjWxSQf2H",
  "key6": "56z4mNivHPrA3VpiwaVFzYzMGtWsRZ1m3x5s3yyybP1V7rVwBaNCjQ2dpuMovfW7VD18b8PSnCbru17SF8QhdTPt",
  "key7": "29hp8eQEEFSQ3ZLh6BLG44RufrQdmQHwXC2R4jWz87eK64gz5njLZ7NbXTS3bS5pZVpTJN8TwrZwY389PhK1omko",
  "key8": "5AwpDNMB3VN6VdnSJUdSiPp7iBjVLNWC9FimVvvpmJ7796VddQLjYRpdMLro6Weojs5nLWhRUxsaTE2YoCbLCEVp",
  "key9": "53DusMYxK5AgiX57cEAcx9ey2bvA5TcY2w3YxmCrwQnSDAYnuTuHrNihy2kaZZMXZqsUhxsKU8BRWB3WkoXqhXfE",
  "key10": "42THkLexz6CPDBvTjyexWHAU7aKuhLddKvYK8vmp4LDs8kPXLZ6QDSbsmR9s5iTjzjoCUspyQBMNwoTYgkwpnJ8s",
  "key11": "3aKzqJ2B9CdgwjGoxNCKv3RZGGHpv9VLardWcs4uZ8P3aBRL2BuketcQykS4QnLpoZkb6daDZt7Wi21KGvzygwao",
  "key12": "2Y6xkbyEV6JsS27CZCCLAKMrR7s2ZALrmRLLUL1USU8asLVAn2XHFQsTyWrPkgRiQ8KR3cLiiPKtzfJ8UadGs5E7",
  "key13": "oNZGUWwBmftNbqDXFpUSEaSxDUfCMF9WxPDZiNLFxGU6H4PwHDXNQT6MbQqTEaYUNZFtKHsPczsie8ELhdWcEeF",
  "key14": "4YTuv83rfxVRWmLJwPKuiRV3N5XDcqMYYSqUYG8PBAJ5FZmVeNqTMucdSG5NPRWFonKYEwntvvJksZLwpig2fYPp",
  "key15": "3G2dCCJMRAixq61uhKfmtfERf61ftPkphjnByiC5ceu7qBAcV8NmRf9NDGGmDnxhXgQpwJTgRhrKdCCgY3VkKQGT",
  "key16": "THdV6Ngz3wA6QuJ5cbEBLVsbfJghFkdUB2CFFCSrnqA7LviZZRcdvpqEiL3xmdsWuq9oMKBZaJ47Nyca4ApYftp",
  "key17": "2CEkv8zQsTxCJ3LzWBNKkvmM7idtoLDFC7kjq6vQveX46baytQW7BVf1SkmAUwAhBEMB6bHfZtCMCRYmco4jqhP8",
  "key18": "2LoFvU2KnUXxHPWxBXdAYiwdwGuy1SrPWgPBUTNtcfJLLYQcEjSbGJq2YutRUYNR5fXGXf9D6TNWasQeDW8WGRUi",
  "key19": "3hG39ewrkoz1w5zoEUHWJLysyrMCDuH5Dbqurz8ikDmQvK3vAouY52kHtxSHAPzyYzANDbKk6Fmgh3pkQtS9eCN5",
  "key20": "5bo9UMHHyQMbLjWNH9HbS2kjVURqQ3FZgPid2jU5XP1AKsXLKMgtv4gm8ngZ3m6R7ux9irSjuk4rrWwCrmAj1irT",
  "key21": "2H9qNTvxwBMTYpAWpndkX5fXRYmw6kRyt2DwRo8wr5BH4YQAJSGwrN6DKcDAbSBwQKGivtbbFhjnq4Y9x5iEgm4n",
  "key22": "24yQ8tS5JQrF9CdQCjznt55QKZnKd1jogDeUkzdn4pVYsezS5tQbD8gM3W4PH3ZLbdvWtiTdMGdoyXBnsT8pmtov",
  "key23": "53aJt37wLFQmisNayaUkE4TzeRGvwKYXHQa79QvtxLWCwWGedgreYBLDZx5EgqoV87PRF5FxZHjU5hVBhrNw5QiQ",
  "key24": "2j8e4exT6LLWebiRdBUpmLCxnnmwPYxEjegdgR7uvwKhrJpAVQnmD3UjRCLtmqf32ZNgQVsPQbCPMuWy97hjPzj9",
  "key25": "4XeFDoXphbVggmoqxDoKCuqiWXp83fjDN3CHpneESDYuB22ovjvAMkYmc6KP37aYB87PcmidHVegs1RR4jzp79fp",
  "key26": "4zSqqz4Dm4nzgXBKYPwjjyH35ytcKPMq6rF5dD1wERKE8rnHHHHF49M2A8NkpLrqzNRx4aG4iY3QcqZa89Vpjjqd",
  "key27": "2GbaF9Zir6H8Bi656fiVTBzR4kE6zZLRmZSomQxjdDGmGRQv3yrZzwcsZymuKXEMBm3wWioNcdv3As3ycope7Ztg",
  "key28": "iWJ1BF9Rvu71zb3QEjLBvQ2BiKvJCDo7upomgMZNiPCTLJGYSHTmdYMSjVPZrDcDdNfwH5TVSak6JDyUQJQofky",
  "key29": "3nssLQpDHUGMdMqjkN7DNUp32w5kzzrwmRnXLvhFeJnyYa4PowFMcnUQ4igdbC342ycXCA4TGrdF1iGEP58Quy32",
  "key30": "qRLpYoAeYa69crbko6G3iG4WS6zbfgBRrrVFBEdYeJiHyokM7PohpEKJWCj9KdSqTfDWjT3RAayZg3ajJmnM2az",
  "key31": "AwiuwVL8RKxoSxhxJbUDD31EUUdgGXeRjtxb1ZgM1ErWtbf3eYKRXVoqxccRCoYZjqydL4y6p9pKm7pXFuNyQnp",
  "key32": "5vBYpBcH6haMve7KNX5Pmq9TXyqCwj9Sk1nWKBysq1pnJnvbWeqzVj6a1QaPyL7uR9qDYaU64VMkEiPnABAK1hWD",
  "key33": "2sm7gzKuHKSDDGrVZFzKb54AnD8Ts96SFQTpCvGu7iLqKF9mdiXxhf7QV3AtjB4xLjXJz47c9ac6Rp76n923futs",
  "key34": "25Wwub4Mz4NpPajov8wuT34BqhtuaDresAqDjw3gXniTMpe9THdyejkTNg1frD2FA4rcXLFjA7Np6oKUJSdtym2P",
  "key35": "34CbUQD52B1nDePfUgbdbdoDbu37awpCkXpezKnngvQFqkFGPmSiM4ZV6EXnrZEjgHbUgJ8eAY3CNFJLj6qdEw5P",
  "key36": "5JEuHyACrr2bMBKm59snsRJC286PjS552WjMRq6WoK5vKxpCbacZQYNveETs9rkKreCxrCpWyQ82okENUEMCS42E",
  "key37": "634Ce7kLmZtoftnt6oeyRzunzu74BEWhYd6jakrnxQzPBBWyAEKQ4g9aKJbEDwWMTKvT1R3WcJ5ov8JeDjMpCeCP",
  "key38": "3gGHQLP1x54uPnT8UwjvguE6Ku6hBhBgQhfh7GQUxkHte5NTtJhRnHyQfqBvVnckfDwUGmhf9iie4XWDem7Ljknq",
  "key39": "5BxHCz1g4zoGkxY1KdTNk1SNKDvoNFpAAcAonVrS9MknuaSQQQA2TXbKNds8tzUuuCz66xvf5e5iaghU9poMJ9yS",
  "key40": "3XFxy1hzmqfs8zErWXredTHyiYNG6HpdWTTt1J1ReFKyGbtpX2xkVst4sgmQKX7SA6xmEfUrQjPDvK8BDSVm7Nqm",
  "key41": "2jyoRJzTEsaHkAp9cZV91ypf7xkBUYPxfsvWCWPn5ucJj3oE6Uy8wFmEDtczmwPb54c6XnN8YK7ynpk5NR2Lk8qJ",
  "key42": "1EiJH939azsBMQUu3Lz29hMCpQpnQwwvV9rKJeSKtCJPhaAnWoSgrE97muoLrzujq7aVBinLoDykK5p3GYUefLj",
  "key43": "27pVdEXSnZZAvMdWZZNyqyUjd24QbVsY2kxW1WZnn3qJKXkfTS1So9DgBGxKyJS6tvtX8VfeSp5SfL2WwhNUxpj3",
  "key44": "25n4EJMvQnFcZdPqWgaWz9hgGZYPvCac9YSSe5xi99ehzK9uuCXkinKa17tWJLguxU4rpUZMVZfHYWrNjgs4xxFB",
  "key45": "424Pb6bfdfKTa1uX1sW6q8vWp9Bjp3s7hSnGN9BejcfJBqWpeazMbdpLLZs18YkvAaQARRkwPhrCiaLHumcqnJTe",
  "key46": "49sczF35dM24zTpjF7dSYvv4EcGkFuB7E36up3jR5HDkCb9fT4QvEMFDkRqhUj52fUAVqBm2TJfSWGrTN9oxMifn",
  "key47": "mthztXa41BftXH9raokF3uCBofJrZV5hij4itHmx94wsuw6KbrSDkupW5LDpAPdP9jdf43TsvxDyLaNU9MdsCDh",
  "key48": "3cwDK8cmQM4A6nE3zLKZ85JQ1c28u9fQFDbbq818fPPj5hxhSKxqJBMvuvb29uiU8ked3WggEzATCi5bY72QFVmz",
  "key49": "4xpvNAS6kkdyweH6EGMP2kHbkVHjBFhVFkPFc2n5ZmfieY9JjeewVFgtpUDfQMfVvXbaDPWsYiMAnmfNGVYsesVK"
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
