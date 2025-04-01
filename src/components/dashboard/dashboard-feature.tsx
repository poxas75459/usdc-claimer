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
    "3Jy5KXmMxU7Rs2wFHodeBxFCTthopDbqzV4QntTX947vdSoh4wD74LDa7MFD1erN76hudEH6NBD7VEymrfEdRoqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DVHK1FNQj4h1A9hLt73NMVJqymLAs9CvBia7CAdJXNT9xUamMpzFmT4s3V23VzgJBrLJEJVXQ86meDfZ1YxEbQC",
  "key1": "s7XGDAxkHYrqNRngSc2RGJMq4RT8m38RA6w26ZaPry2t7DBdKF8LYSPdmjeTpJd5J3pbXXeJ1HUXK9WGG4EkA48",
  "key2": "5B7QA3iqu9TKmJkaCm57pmVZGUn59CqywN4MjbQ1TJXREG17FbsToXVoTXcF2uLHtrLN42Zpw7p8JqyFL9FJfNRQ",
  "key3": "64jjChU5e9j7kS4kawVNPVjERK8wCVqdJWrK56ZWVmthqYquogbXiw2c5p3ZJbx3pedLfcY52t8Rf55i9EH4BJKW",
  "key4": "XeWPvV3XaX65AjfCRgQJyJ3iWYQ7wxaWDsoWDnTt3t7s8SYfr36WyJemBU9jAmZFe61B1A4KNPsGxHubX5oyCpd",
  "key5": "4fb1JN9qeb8TEb2W27TYm6QK9FJmP3g6Mwp5L8bgjouVKeiSfDRpttg8aLYA5yQBDb2zpH6Mw3rAc1K12kzZequB",
  "key6": "5dGveXo5opzagmLkN2mfS8idGk8v9f6Dxw3asNRSUTmyxnBiAY97bdPP6GCcYTi4V8yT4idexziMmk4woF1AxfDE",
  "key7": "XbsEHA6CvS7N9LsLmXpReMGmiXgWFwmTWKmP1cjiZ8tGT75GEZCoa9CngUw4n18emLpTBUhdp4xegjy85Go4EiE",
  "key8": "5jN726vXEegvn1Tfkwwf6YXDDErURYpiGJwDosHt88eaivgSdYBrix1xGNgwKXcLWPeKCtrxMUWKezwEd9N5bMtT",
  "key9": "2QEa8q3vvU9arvs7W3wDa6JLJYmTP5RerAvQhgN9wvQXAD8APT9zsNkdYcX9XBXEqMPw83iGmS2ujXaNfwM5SNeJ",
  "key10": "5SAfYGETtaZoSQVeDNA76Qb1e7pGuUzkqmogZjPHTvJcPXox41PKQ2pm6cyjrbmjpSvodEgS7LjWwYdCjvACjuNg",
  "key11": "4qzEFxnMbMd7drt9LVgVZxpbp11VmqFzy3exNSuK7XX3PZ1KCyUkF9mpWKDdJk5xXS3dSgGU2TPk1n39LnQC41vQ",
  "key12": "8JbqHAro7x9iZzpobs9rXPTo14KrVcxLDuSZGpUZe5ncUXhVNFoV15WWtvdLiorCi7SoDAjCw9x9XTFoJB1pXHS",
  "key13": "3oTvLawBLReZSb82BnM2P7o3NsBhgoF9mYDw3LPN1TwXNdFJcDbupXyuntEriPyZnKLLHsBuRX2SKuBUNLypYXvQ",
  "key14": "3H3ZEPsosgJBUEZfWM8Zvra1Pk1wfD7aTW4HyKudrvb8RjyvfeT4u4gyCEbdVfnz4PhrXr2TLmZ7nxrPdhbmWimp",
  "key15": "5YLcd66d8kAMsMcRnRDwpvszRx2rkWHs6wCr3J1qkAYfGcXrMYjYRwtcAPvv6ZNtaNyyoeqkKqDUaLY2zrTJzPvE",
  "key16": "61Fzt1haDaoiHmiwTCXcbLrFcAo27BjeZWoTRSoc7vfYAvreyrA59esUaMtyZkcTUgTCDoNoqS5QQ3ZmDY7Q6yDe",
  "key17": "58B2pvYymHBRTfwU2hgfghdoMfK78r5DWjU7oA1CmnW7YLzbMcfZ9PzgmXYUcZareQAmWGA3ZDhFdgZcihAPjEyg",
  "key18": "5y62GidvwcP62PqTiX8yGbb4xJkZzkTWnvxwNN81dPbC5ttwdQyvdFEsszi85YuXm2tj6kT6PCsR7qm5WDgAnM9y",
  "key19": "56kUnVvRDvLAVDzv6DVGtQVCaAbrPAeGCNuUQcGdFu9qviKVBwV6MEot4qGKaJkorkV98SGwE63zHDUm1JB562GF",
  "key20": "71uynr2pZPgKBUn6g5HqMZYrSDdfnG7rmrWBDreHSJyqibTiKef9HHrvu1ZynganMFARGq7g1mEZaTDrnhhiLH4",
  "key21": "oEeApkbsXrry7zgcxRHape9My9ugwJdho9aJBYdGSjqm5DsUCAT3KKuSnC4w6wqj4M7Xrb98bnbJg8G4szubqpQ",
  "key22": "49mh1oPNyH6BYag2vMHbCm573xrrjrXtwu2fDLj5prjRb9LkZ1WLQySUt29PFTCyGr4QchKssAkWuZrfFpcXnQbK",
  "key23": "61VvGVGAYzSQxakwJoAXe1FFdGgBnJLXVKo2FjzLMRnjpViR236hrG59qT834h8u37rFBaJNujNB9Cj9QnWuFA29",
  "key24": "LK4Ja5JcLLtpvHw69P5rdUVbVjxh4enyyLR6zB4tC3ADWa1NJCivQZi75Xa6rku7kkq8eEoTMUdKuFgC1SYn9vc",
  "key25": "5nfxpfabUcyhHrCbCCaMYXvzTM4fGqKpN1XGtV3EdpHogbBRB2modjapeaLHWQYpBj93SNh9gHyGfMebBbb9Tw1r",
  "key26": "5ifKjp6Tgp5dX9tZUWdnaA158h65M8YyBoZ6Bnx6kKaEoijjvQuQpqJa83pq6hKLKBuNC1zZQmCPakDUxDFD8PvG",
  "key27": "YuUsrjLnu7hjZT8FiSVBvHgiQduH6wZvJT6HzPapCyzNmbkRML85mDNYLkkRqzvCneMVbp8Fj5EWBQjPqcHYrVn",
  "key28": "mDuoTWMTbCvZUjtFRik5kqx164o1k7Zd844emJJqykpPWdepbdnq8BYUA5HYPorinhvREuDCQgQ5XDuRv6hyabt",
  "key29": "5ZsM92nSjedwwRovAcszwzLs2FtKX1Qjva18sCPNm6aWGupU7DWzq3B2w3tEx2ck1XahXrUoVMdp748KXNoRzBWn",
  "key30": "21NqFq8bjU7Fu7cpDVt7JzxJVYTsD6QvCb2kHukFbEvSMbXJN5TZnUmzTHfiQTNuhJN6xYiwFpxshFYuCJw2kkDk",
  "key31": "535gwEZhCrVa5TzDHyJXVqot2xkBpacUUoZLb9QxEqtjoohgmm2HGtXenLjx4WW6raeTAYhbySFwbntGmtthXkCX",
  "key32": "3rKaan3CiMskxqS8HCnKPMYHbqfaHgqzswfu9c5YSNRgxCxPNUPb65DYL7cAqoe7cpUEuWF9bWyb6RYRgMHKeYor",
  "key33": "dJRsiV13EZGn53dJY8arhTxEu4qn5nqfkfJdXLqNy4cQVbRPLogkE2PqwsgPujZQXUntgnQW61zM4ZoUEV8Gp1i",
  "key34": "2wZ5TSyhhg7oJAVFB3cJSuGtJDiiNd7EusnkCYuvjdV2gLxt1KYUr4vqeBs74qECk5xTQXsJGWpXwfh1adoKsdmM",
  "key35": "5pWJAyAHf9StCTJziAhPLitGzxVZvGbjts8ma9hp72P3T364oc2UEU9kCKHNB3QY9p9eWQJYWeYcxAkk9WCyjSj3",
  "key36": "QHHaZMBh4Dy61Pon4XZRvLaddJBZjfWxojfwAkmUJuS6KNJkE5brMteN87WqupJeKCnnwtVWZ9Z1MfgKe4d344k",
  "key37": "9aausCxUrW7zA5d6LMWnScrXrZAJGfahLg48qhSFHViueBrLBc8UD9JVXo9X566uYG4GR4NdJhEu3yfyJQQYvkH",
  "key38": "35e49tMKUtSddjHYxsPB8hHrCnMjqfZ9N4UzZ2KzykjyyuW7Uxf8JptjVF7Jhgci7FZgFurPh3GyMQpnyFDkWyqb",
  "key39": "3emvgUsrJHHhminGA44oEFpJEquQ3pWbC9BCEParXKxZXQ5NDGkw38w9cjsCWt2HE51YnhM9uDmb7oHUxHa9VDju",
  "key40": "4YLsGrmBFboxQitPfaRc6wvVG1rkLy8hBdrBB2jepcrToZfTqCFtYW7dfGKfzdQjy3vA8f9hMQG4FQHVSZp7nxzu",
  "key41": "JxfReevkk3EEc3qVo4tD5hC3SmEZWGwCe5k3HWH4FZQSdHCPC4KqXceT5wHGAWNRDW8A1ZLiVZBKHRFmyydVof4",
  "key42": "5LuTmwaC4MDJHEdQybwaFgarJD6woRakHdP7QKXmuxvngtvDmRcx6mc63wN9X76dTFMqg8J6RBqmhZA9UvJ8AtPW"
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
