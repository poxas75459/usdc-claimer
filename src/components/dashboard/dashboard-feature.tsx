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
    "5BeZ1Vc9uroZxeqLmejv3PRVimGX1a3C6V4MiFPx98JvTjcgUcH1g1Sg2SBsTZNo5amaKnR6pNf6gLcqjKqAQZXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oyTCXx3ytCpWtGyqTbKgTcVHFyWHU3LYdw7YRckTVXDbfDNLw5DbQgJuT6FVBQMtFdW9xbyHv3MMbcbLf86TJTd",
  "key1": "4vGjefoBt2cwfeoUq8zUeg5x8p5mDJkmnwwfZDqcTY3TsbDF3QHe7T2THNhwQvKjETVNspHaSTmAjLVGJHbq8QAA",
  "key2": "2DYZ3tq1mrVt4CJ7QAFUTxevegy7H1Bhr8FpqSBgQ5oi6AZQYpXBjFxqm43LBKegfhqKRv62Q514ej8dQ3J7H7GK",
  "key3": "3KwzMKMznJyLQJiJ36KrGqNRgkHVN5o68MwkoPTRDakxhbG9gV2BpgmQ7ovy2X7u6VwcNxvHbZpmVC9R6hKnAhkf",
  "key4": "4Shcgkz6Hu4uZd3N2jRbKZdyw1zhxN7er6Tp7iMJ5D4CbXXK3mSFmxjqhhcQsQUfqACvXZc7gt8sEJBPSi1owS99",
  "key5": "3py7CJyCP6kHPmWb8eQBvC6oDfinRxKdMidCHBqMYNq4aWMFixZAjGv7N5SjAvZBKmQHis6zAw4KwLhH32QHZrYU",
  "key6": "mVvfFGTtQMJjMuTqyxhBecxhiKcLpoJgWoTD6CQUpF6fx2fE54afLa1ds6Mfgq5wwXdAQ6sUaFwwpRT1XLpTKEf",
  "key7": "1nzXdH2sZWC5eZnvfPH8MJievPSyy5wticJhmnkq2FoDHZm15LPmwKdKDcUQTzgxphdRZJMvg75VZBu7mTS6hux",
  "key8": "4kEFDMggTk7TLDD86vKjB9jwFc4Qf8Bbrx7cZ8VAwcmfDzzJnhwKGj3MNWPMUKrpAmtUtqSUdxQ6WJeg2pFpURxV",
  "key9": "iamEvUAAyPAacyoN6ZcZwdwJdoiUhKEr4nvyQ1dz93bDCCeCdkfqytTH4BwMxJvCwBn9bbBe9edND8BSvUDVbmN",
  "key10": "4YDt1Tc3HrH6JYckMy64L9Yo4e8mvMiPR86sQsgGPTu7aHzsFDA2rH4PJPP3R4rXrxZvNB51bdiMJZsKNPxPaAF",
  "key11": "QiVyEZKCb2SKq9PxGViekJdnvWGaJ3VVLGNjmqJ55ZToJNBmFCuVDgkqeqSS7FMVxh9mJLZ8KTaKucX8rSxjtQC",
  "key12": "3wFC6mBi4sCPHRjPAces7BKnyGVG4BUUPT3Uj2h8Nkx2hqsj821t7RDqCXDNGK6VSQF3n9iWYsSeK7ooNsbrGMkc",
  "key13": "YEfn7cLte8ETbtPMA2x28nN4MigjXSn2oa7XY7RCh85BzsKxkLzxr4ZRYiddcAPPN4t9oGKBVFTY1M52ZhGNzLy",
  "key14": "3LV18o1hLQTDA36Jy4vbxsVfC1RA9D4eAC2JFRpQiep5nMJsgPGWZS89PHvgaojSjmmrxJCw67vNDmzbQ4QKnw5T",
  "key15": "kU3ia142eqXM2BQ5RrY5iXhaWhJVCCtKZy91CRUiE2j4tRo1uSbeeChvr3X5gwmSf9NvV7YPRX47AcUi2QqNt9y",
  "key16": "2ULd8bC1oyiXakMN3woqn7ihRz4kZAh6LmogaX2wdPyjymoPkj8JQbjzTTdQ5J3GmoqCxhgGfZqZtB9NoXpSaZyy",
  "key17": "eQgZz9Yo9X7uNfm5UkJXYoeMze5VqKs2xBBPcPiGd9Nd5XN4pboEsYGoTeEb1pyYvutiUbbKNu3vyupMLcGMGZ7",
  "key18": "3TBDg6DJ9Yhp6Y4nNFLFzLaFGVMgFbnM2VJqakrp7oM6PTg5VzKsAdVZ2V59f9ZqYHZvfkzC64UsK3U6U37qmjBy",
  "key19": "3zFiNm1uyuA8JCYk3QmmtaGFi3jaUwHrzQLvheVXi42oQyCJep7chwKc487ZoooCk3gNK75hp8xx32Q6Zb83pGMn",
  "key20": "4UoUgUXmaATeV91mLNSYWCMNZuDkqrB8sBWiaLkV51vY7jUoUorJK1fYP8bN2FTaKMcEJEHVwbNfFDhxwV2Nt57q",
  "key21": "21dz1CcmbcHaYrCS6Tq8hQ5Gsn4rcVb5kScmcG7EohiRqxZ8DkYywQJNiWJQJ9fXT25ukU2nVFPR86TnA5XTMsWE",
  "key22": "5Ld3fTYGUDEdP84vcHaNgggVsy9jDPbttS3hNj1j3NFwBWaotwS3uhsGin6yi1eFxRSVMZqMwnhESZFiixebSQXT",
  "key23": "YZ1swyhJBLjeEKo4keTftr7BHfugwBZ8xvF3ieqh4YX9imNBhUwAGVCS3oAM7Rfts1HrGeKKxcVMmR8Wti8Pfa3",
  "key24": "58omT7V4e4E1tFxjB3g9MwgxVra3uub1nDSfUqLWbmwRND19ptJxKh6h5J6Dabdf8rFUVeb4gT64gxQaNt9hVuuK",
  "key25": "fTe6YeQh6ZrVWEKwnieJEsxgzK42QX6DPUA6uuxda6D4Z3HFZwGBs4oJ2WoeLrHMyLX6yWAv5Hd8hY6WRGvbWWg",
  "key26": "23um9MyN61pWCCsF5WAX7dp5dKih7Wtb4KcpUjK6oNyXBRnFKdfFPLfToXhzZh662kbWzbDn79K6oyj5vqpiue7K",
  "key27": "4pgDc7CjorfS9VUmD5cMPLAogm68uvZATmqVdwHCWx67PKsqZ3VXCGwXTiH6m5SYAeufatBUA9eANsqkAvgLPDBr",
  "key28": "mHJthgGMTJT6jzvShsW7uJuWyy3JcjbK2V9TKHTivDja1JJ5Ygu93zD7Q9VcszUQnxMkkT1EYp8mjxxbWSk99ng",
  "key29": "6kvR35cohbfQTuiDqgvxvSGU8yWkBvvhepLrWYTR6hJzfMnnQeRKXgeYtLDxnUpWauALgDzYCjFWZKWnnBBgGSP",
  "key30": "2TuHtZ9HvuJcet6YskVdtpMPTajq6WVgQstJyrzyetNaBLpk8pZTCJG5bAR7TLZx1PvkC8SNssHFeuHWNAcGsoNC",
  "key31": "41GWR7UeEqqqfPutY8W3UmkWZnwVhB38u9qPDYwxcbpvfWkhgWrZyjNN5MzrkFkF9Q8zstz6p24HKj8r2hPTDngG",
  "key32": "FLnDbrwrZssKxW4nMRuYU8q2Tiy6zuHcd2MAFe8qYzCgA6e15BGxiVrwLEWF7SdJmKTv3KYB5eQZU6jikzUvfxM",
  "key33": "d7f4UR52s8tJ8AYreCzB5L47tPWKEaHmTj1ByNTLJXKvaT3N9Nw4sGP68B1VbjjRPzzcvg8txuKF4ukaRVbN2UG",
  "key34": "4TUEvjsod2F4VdG1onSHgDJAVYn5NerzVLqVv67pVE2byP9U2oBuGxxpfv5kspUDXJ8C91mgsrpK6PoccmDX6VSz",
  "key35": "2VMQHtUGCb6wGWr7Md7GuazTYKtHXYr9a1zKwPFQpFkPGro1b1yfghfg1EYG14aycysjweSYn4UaioVZ2pmMevM7",
  "key36": "5sUUe49TP8K78jBEGruk6nHdy3VyTXurQ28wW4uNYS13he6BygcQatLf2BJALwn2XFrWNCPz25YXtaoRQ3SY3W8L",
  "key37": "3VGuoz1526L5KY8s4sLnN2YH4PyYpBkgY3Q9XmQ4cL4R2eboB9u1WqyHPZV9m77KHbfhQKw3M7Hs9WVFGkXz7mhY",
  "key38": "2EtFdRVLjusb7EAvLYj9nhkfZGhYSjXxv4qebVT7TXwMo4SEUhSe9dhwmwR5CAnHBajbKHoRs3XsdXWHfECVtFHG",
  "key39": "5BL5CHC11wqraQKqijTbztBynJQid1j6RdMovNFUovHaYSd1LQ9weLNfG8pnc9SH3HvXeBxEwwvPbgdfLUDBaLaK",
  "key40": "4zNrT2wzWpcLSZsooxaTkhj3gK4njLd8w9SYvynxSdsae5EwdswKjqDqz4y9THbSHNAthRMrJ7xhxjtoUAhVnwkK",
  "key41": "2Aw2oC5YMKLKvMh4T6HoB2pMaP5weJkgK468AYBPciRrTka3AYNLMfhMqU9WrCp6sKiMsnRg1vANxabyjxXxAu9N",
  "key42": "3qrZaxhy7MMiBUXeD86qa6QzZPfQAiUJF7qZyik2DxbJB86DdYRXyViiopdyY4btecWwCoEJMxd6qRgGZU6f3Tvk",
  "key43": "5yGDR8ynerSTVjKkYvUZsdgUouui3sQ7p8fzCwjonbjWrLFf3Z7duuH8i3SoruufEVvQLYX477XNwTp2ttZ35Wes",
  "key44": "26Sfr6cTemwZ8woHzyGNHec3bX5AWRY4skL86ZjcjLaEeJgut2F6tm2TCYTMFkXr8qx8Yi1yR7Gz9KiHRrhf3Mpg",
  "key45": "2216tGf1kaxG2qypgGuB5u1grzc3Es2mikkwxitz9x6EpfkkDHaeKz6WxZbEpKHBJf5h6Zer73sqSWaVdtVzmefz",
  "key46": "4GUtNiJt1yKp2bkAVLWttuvg3QMwxX6YLhzHw5KroNJ218m5p7bhEaq4kR5c8iRJQ1rtAoUmCMAStv4cukTJF4Tw",
  "key47": "51KzBNbfwkd9j7Dc46ysFJRckytZv7se7JCNhUBrHJsFBJMncqUrHYt3rqzvG9Qncxn9FLGeu2CjTMWmU5SGJraA",
  "key48": "2JEDQM6wiieB4f8LH2qsxUfKm7bvrsk8YVvuj614jaLvV2FGvKv56XWwZnZ5tY9pC8efDdHGnRZGnGSNy6vcyocG"
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
