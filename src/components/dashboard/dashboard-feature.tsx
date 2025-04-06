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
    "4N4D9aDCgTxqCzoowGncjHPfAVL6qMVERYPrKY1auexhkXnHt4mq4vxHBMbrS1rmRPRPafyq1S4cgTi5XPCwBVKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Ukd2Y3vC1R74GqdQwbQweJKGKqXL5RvBsELa2H99eSXTrZkSs67u2kZ9CdbwW8256tZQR6mrPLVWNQ6L5Z9ENL",
  "key1": "s18WikRBQVYSqs4JnNAGcYP1DuEBy1v8AvtrxfHCNC9C9LKvBy7fuFWH1ygAk1eQHzmRQCnbiZUs3Cohf8AuVRh",
  "key2": "GyeXE2Tw4WNr5nLmqJGCYKqsnD1suHyEdzsLahLi5pyVtY8wvHUALXHB7sJ72BsdLCubgo1m8PNSZeCG1Nb9gx4",
  "key3": "DpTgREjmaPSMV6QftMxshjvFjDHv1m1hQ1DZFc9RwK4mHzjGU1hHM6W92PrwiwjCA8UQeb4wvwwaZCELAbMQ5Qs",
  "key4": "KUqQ2pZeRUdeEgrMhPTHCJKqnSkkM2n6HJVnZtATxBZjWRkCtLRVN2DD45FRu63ZLRwBfxo6r9WPqhhtef8ysYC",
  "key5": "5V3g8ae9zqLZhHnkWonZphXHgtSZ6HBUwywUaTNUkcorcLTcdqikmgzytvLBMyNe4Lx5jmV75jDtKqsYj6tyt8oZ",
  "key6": "4PFfNmVhTFLdbTrtgtC2wGxaMGAF99xMNyNGxW17FJnzbW2mvyDzx8Rd2y3EbXJh3f533ubRAhJo39NQurazsPVq",
  "key7": "2EfXiUNrM8BL5mbat1uoHR6HHUTqEeFbuYoqLiDiQVnUb6U1xhND4AjVzV6XxMMr7s8C28RmW22FzxzP9CLnbZVb",
  "key8": "5i3aky6iwZJ8AZmLqvmEmBhs1Mvy7bHrTuYkVAryBFFWzdQR3XTKXaTqMV8dg2N2YyAikQ9ewgrUGbcKrPLs7SBe",
  "key9": "2j9Z58wzRVV3ruuHTfP7PMQMEJYTgje1cMmB79xauLVr4uzDe8DaeQ8P3CnewJRUNoATREdK1ZHTwngAitG6mhJc",
  "key10": "2iiMCQ8BnYUisWjuuZoyjwYCdFSXdNU9mjQBtXryr45rNwXM4gCWJXghqCRawU4L7wKa9jnf7SK61Jw83ie1EAFq",
  "key11": "3A1E3LUuNq4ZM8nycbJQuDbiS7V5DaeGtr3uzBoiaCYU6NDi9bcnFsQnvvhq4bh8vdBXMJ1tV2LMksXQgKpHFiX5",
  "key12": "3cCNTTqi3oLm8hN2f8SaENrp1ZkZXEgdPSxnX76JhYYKACGfwjGhYtge5wu1myWFXpeSjfqsMdH6DKqQhwnC7ySW",
  "key13": "4bqDrs1uWLrW2shneK7Sqdm7p3YTFsrYiNiRVZDq65sWC1MXpGRcPTnQH2yVH7JRX9tKYMSYdvTpzuQHwVsPN1Ys",
  "key14": "33gnJnbbf76HvNr2X8f9tcd78SBPDWFzdTmUMk1fB3kwLAvkYjhjJC6xkw93v8BsoWurVMYKofBKDweNP3y79HsQ",
  "key15": "4zskkydKAihGyXPn2LSHSQmmLiaEr1qkt6a1Dqa5LkGJaXmNfsW1dheL9xnvXWswgDyTJhiyoRjXC9Hboq1WnGVu",
  "key16": "25hEVEUU5gXi17Q5BgxNYBrptCjvpzxFveX38bg4TuLo5ph8ZdcrfUSdxNBHGbd5LitG7RqyZnw75C4NbzLXUeso",
  "key17": "43dh2AjsER11ypCsaCyjS46Zcg6rYudYxGj6EyUuiAbQckRfbkwWgK1Ev8NiS1UvwuohAF9DjVKzHi5sh9CVQ6r7",
  "key18": "3wPx7JmGZyEuiH8zvEkDQB6Epk9JeZKFdRi2LCmm2DWqqYNpFmhA5QkAVv6pjqkBdHY9RjFmYSbRvbLF9NHvkvqa",
  "key19": "2VVTFSmftukYTSx4bZWbwLFBMNYHUPwaNCMsP4CrECZXwptNH1nEEmzgyCJQbNigZRB5ouM46at3pc5f8suUtf7N",
  "key20": "42AJLwZFMqynNHpFh9vLsvYnGzhdt3wpfNvQU56vCjFPdhHByCUm4UmwDCmxNoH1T1n5K5VvhNaPgYUQjnWxMceT",
  "key21": "5Xq13UDHmE18BbjwdpCHEDWaooV9GQK1Yjvu1x6oW7Popo6RFpX6qbpG8gt9GXTrB1vSt1gbjWa44nDj7mwvMPYN",
  "key22": "54DdcVfR6wiu6QXrrQgBBTUfYWs8a8F9mAeaMFGLL3hRnPw1CNqKNBhd2KozmQ8dDaMsPAj3Gg1HAMcCCg2QBGkK",
  "key23": "4iA9ReFCvQNsKGTB27XzPAJmGZuXTPn4btLgBFi25Bab9U3wVoQFFeAujvjKi4nnRNVAihsNiiXgidsvKyaFtKyj",
  "key24": "55DmngAwhFh9D5CQM1KqXPJTJ6oRqDmHcjWHxMH7CqxPAKxaiX6Hb8uzLN1hyoAeYWouVd55HshhJmaRiyHEKzLd",
  "key25": "63yb2XQfaLkuTgWSKQqYafE8JZuPtDqvdwmGnqvsBS3WJTSzvC3q3SsJTsiSBqqj89hw2ss19AgY6QtNyCT8bpGQ",
  "key26": "2HsyY6QS4JcNE9t1Mn6uScwUDBzZBcZD9e1UDfmn7JHdXRnUyt6cZXzB2TtsqfCLm55QVeEiageVkog4V9bMgHaM",
  "key27": "2NEaZmCzaRRrY3dE6W8oVksGj2ya6AXDvq7VwcNCtGF77UzUgz1BnfD668Dz5HSEBoWZL2TuapKRX5B89qkCfBSb",
  "key28": "62SeC3gk7h8BCRAXT5zeNaFPTLjFD6VaWteMZhbUAZQziVrKweeapjyqt4VC2HM1r44sKD8836Y567WtxzeWV4J6",
  "key29": "2Y2appsNxPycAidowbJKQ2e46z4bstu7ycArRD7duaKWbYEhqKREVqqNEGN5FiSBLM3uha9D4Xu4ytSSJ78AkLiP",
  "key30": "oGk3MgB9URkDqbYFZfhCzreoxeFVwmq4c4boRQiC2ZiLncYrSooM5nXv3rVZTB2CtktTsfTnWMjodRxNAe8W4os",
  "key31": "55JWsmwUsBqy9oWu6t3pyDKffnoPLmHyyrf53SATHVKJtZ8Er92NowfbR47SFa8hxx9UezW3PEDpCpdmgXtAuawy",
  "key32": "2WXdfgLK6mH4eabaVoa4z18fu8XbBbxsyX1gDLiU2XpGubQkSyrW9YCmT2hQLuVsLJVKv78xxyvDvPWZ9wAdMMR6",
  "key33": "32mfrvG9kBWj38Gt3xhKgnj3e97XwEz8Ngw4potDhAMJVViScEhBRyBMoenmLQcjaKCtz9fYNQMyxSMm4Pq5naYF",
  "key34": "5VszrgvHcShos3g5VDCuxwq2iX58EqqtQC6nCxG8Vr5PXSLnws4ywwntBFb6VDQeSgdPKAkCqzTNskKUreFCdbS5",
  "key35": "3Kz1mYnnErnRt44re7sngrNK9GdKZa6jJGs8eagZaQEiZH4PXeyavyqUAR2V6EK6dMNQbgdF2GZwkdnuLSYTPRpf",
  "key36": "zTqi2zWHTisFP8CcWXuNhwkdvPGYxLMeHX8BM4vfS5eRhtDyVNbyBYv2dXWLbSrxcTxWkvMCFybpUjiTjknjMM8",
  "key37": "6XuxpNYebKNWRZ5U5hQoiSPzLVUTzuyPjoHVMR1uLeYVmEvF4psHB1TsW4y44mo1aPctStzN9tbu9YsJdGBehfw"
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
