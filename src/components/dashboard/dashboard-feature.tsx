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
    "4JM3btH3LQtbCYvSsbeFzmivXFtB9UAyDcNUUTka9kNzHTFEv15XXuqGKC7c1aLJPUWjKs8k1oVo2UvwAgrXvZZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jTKYcFNcm1HbvrShnXvTzAUgX6bqSiYNVMm5WAAZwSeizG6zzP1JdmCm7UVRnY81Pvk1sgoT7XVpt5eKBpWh3PQ",
  "key1": "274JQRg2pjKe6sJJiufH84xPU8tWNrpHfkpCgLeEygDJ3AeyuNCSjoDEzVZ5JBMoKLjmvREYQa2NKiK5enu5GNZA",
  "key2": "2yuf2GSJGxuACTDPbYRE8Lw8uDb2D4Xiy4jQhpRo5Ruh3ugoJ8gyHR2hfYHjAr7BStwqv1u2nvQao4oX1dhDVzF9",
  "key3": "4ex2wH96tGEDoUy8ntx4a7LgKF1eEvwH3AfaQQtYxNeUzFk52BU4yvCQNAwcFkj2UvVE5SVnwdtoVLyWm7evgQcx",
  "key4": "3vXBkVwKX7yy641v1nqvDEpEpV19zFAaqaqy4UGaTjbJ7RRcq9cCzk23KESTRJAqJyBtsM3rvxYM2CWAJ9Bx1KbU",
  "key5": "2gqdfbsNa6MjbG49ByafbFAGwKRafssenei5ME5tjZvoVJYWemyaKFs82gYwdpbygbjjveFjYYk8P7P4XZT6iS2p",
  "key6": "3HPCkHzN9zmFN4uwVpZe67hfnm6LZAn9uBbiJgPCgSM71X8KpotkjNmtJDxTSta11a3EQZpGtYhzdW1WvdYwH9An",
  "key7": "41g51LsrZhBzcYJiZqCpJwQJTaLKtArWw5t2sjdqTHmsZKfCn8MWCogDpPszQFnE5bpQbv5AbNvsZJcDFU75cEqu",
  "key8": "2Lo88aQ2AGbNbyKs8eMTUZb25rkJrGoQuQt3cSAKbcm3bvMg7KMDKAFMbRtZdSNjBxSELdffBnQNk1tF2izqa792",
  "key9": "5y6EY1HU1tEapBkcsZ8MvTPaa12TJZzLqc3RmsrAM2NeVeHQaDMD1GqnskqnRT4BJNwMyBW15VsVSWhWtErpZQGb",
  "key10": "3ZpsLfuYgBtiR1HXpQvkhXNx1Buqg58Gp2B4tb3JejG9Fy73XeBNJp7Bhh6FHKHBGe7LnqssYdoFeKKGAUVK8cCL",
  "key11": "3jzc9eELcx3gZhBuegkczL3KmQUaEeHK42PbDHacb4YnY3cBEbCKk9uD9crntXVUJM9WDsn32KNLYi4wmFsA86sh",
  "key12": "uLjDLCJuuvfzj8UbE8LpLKac5cQU8jJpcgokzY3svAV2n6PvQbdUpnxKodnnJ8iYqpLpFfxFvL7f3YAewfz8EAW",
  "key13": "4BhEyTdJ2uKNTCngV5cucXHU9RwVYedGstkoScfdt5Cqz9bjzEY9B1CQ8NnHaFRfWqMuUgDSAHvWGcGiMi3xSNsZ",
  "key14": "5YFNcT5GjHoKqfhU6YhQpWFNYKaonJaNWUkCghoGVzuW9aYE9dK3L2LMqNwCsjxje3r3f2KA4S8EbcRMmP5uYk5U",
  "key15": "31JsRb3yWKYQbBnPtbGujtyaNssF3e4hg87ib8goPLvXdShxSayiUtW344CPJd1Guvgv1x2iPV3t3kjR4VU7MzFn",
  "key16": "3jjQ1orJBFpqGKDFTqvkcnGKPfdXcY7Uzb9ZsjgWbS6BjeWKkE2Mx37Bi4mWoqovfSSZuNtRTRgZcRJgkA8Wb4Rq",
  "key17": "DR8W9koUrBuoSiMveC7GpRqzz79sDEhTBEKNGn7khRwemxvWHSYTo7qNgWcQfW4HwNdbcWHPobbLPYXdgGmre6X",
  "key18": "5tmmQLThLu87fuaWLF4Luk6DyUgFAm1PWx3uQs7QFuCtRMVAFPfq6atPNrk46dHJ7fC1Y2a4F3AtLsmCk3JY2tWY",
  "key19": "3NvgGWXQEVbbkboPnS89UNXaCAuhZmNzS4QtxuxGQbNvkRwyVEU3AP8jbqTLbHaL577pB1pqsewKTq3PydmwDAhW",
  "key20": "h2U2Xjtfea4GxFefnaWstRxCv6WjkXuCeP7skWUwZCv6YR469oiHUJQ8kYeP69VsZ5YVBuGRtfQfiUnysGgz9UM",
  "key21": "3DkdRVfk4KzVYzfGU4JxGkr7TM9eFrQkFmizbn5FKUU6inEZa3Mv6megsQRabAdwrDUjhUbdPFQH6N9LZQMKEwCR",
  "key22": "3S1mmsLpbMe5FBHywpwQPMyZfh9VJ15juHonBH2gDqtDS2FYp8xqphXaNgRcrdbzfv3WmoWSEQJWHRidHwZZSEDQ",
  "key23": "3nmoWgHJmup6MUqyt3a7dDZ5x5CkEfGGqCzX8vY6GkgSmzEjGnj4CvNcTnTmWnzvitVjGCFGpm5KWS8ETSYYASnf",
  "key24": "4i924tpzCYWtD65nrc7hGAEArpSeNTzgWgUkKGv7EAvYUzXHbofbrTHwzemZ6873F6EzX18ayggVjAykfT2SPuoh",
  "key25": "2WvVeDFQVGhhfK3SdKyyiSozjrjgtZmGxQLwGELiaVcgYBR6WbYVot5nQ23J7xyqfuy8eJBgZqXP1CHs2df3Htjg",
  "key26": "31QFaHJh6NcuDU1xoqdBJnGsD8qxQseanr5vaHrYHEaMjjQKitEdoryGdtRZPd7BfM6E7jdxzXdjyyJ9hnAkkuxy",
  "key27": "2GPPdVzVxhpfW7aax2oG6y4BXfeD1kZsWUZ79imeMGR9uxu7rAB21efNfEgzZ1jvz3uEyaF41Ep3d9uwo8fLXHB1",
  "key28": "yeqNf8jmVfB3743fDdtmteQJruLBcNGa4zTwtbv4maFP6BXNCkQyAYLiULi7XUd4DwaQ6feDfqsLagFKPbho1aP",
  "key29": "4TughrAYSVcCRyq4n4wigECmdvu91q854KUZzpcXbuTfyJiNNANwvi8exmW6X8weFQ2wzKLDuYdg5eRgMcswcQiJ",
  "key30": "4iTRZgcPyk8r2PgPxhZ26ybVXqyDXwmdqZM64ZcVJbKK1qZeH6y6cMNKCt5wKWSx5SjkQszkKSZs9nq9DxbmuuSo",
  "key31": "3VoaPgVrFJHQKAnqL1Cw8cFc4N8aN6BmMDsywkATtYWVddfifMzsaiTc5qS4azCPapFc8qKAptdgBB91nvps8Ggj",
  "key32": "53mRSX7dxSa5JHCkiLiT5MwVnMiJqVGydTP4xSdz3eDDqqMbZc22NghSK54YvLkhLwcidHCpjbWY8ZYo7D2EscXE",
  "key33": "5y5zz6dtLMPkAnSfBr7cfdwGZkLktfq1JnUvvGUqeWD3AMqEUXmRRzBjeZ9aSmrQLFqPgnqz284eZSvE2uKAbCrh",
  "key34": "3JpvrPTdF4Xyzj6SyRGc5hLBJqr3HyZnSfm5FnNLfCA3Hej5guG3Y8cXqv4LMjoxvNkEqPziEtLmHySTxgyZoHR3",
  "key35": "5GdACqafNKGyqqo99gQRs2AxnsFA4mGhokjy7Q4RNuyatkC15xh7TER4APGf4SYXTpJTJLxR2MFhj4BbnpExx8YD",
  "key36": "4z6gotXxYymHNhpwEG6fm3DtdRz9M5Qrs2Uogu3NJ2YVN5FoGHWxqP8tp5w21o8Uu1vZDo97jpmZHNeDQzPj1DVT",
  "key37": "3LPWcXCZJypjDco8CNFJbxHgYVdxNoXiE6B8fM8e9wwHPskr2BBgbPtWTUTZoJqSsyBT5TutH6iv2crNR6Meb19q",
  "key38": "4oqo9UScbW9pe1QA8wsxyJuzr1gAduvFD3sdrrKbmGu5aZg8JgzgsnskkDe3Z8D4Yuzjmr1U31pSkhFoHHjAGkkq",
  "key39": "5wfSsSmWC5MU9HXdTnu8XZq7TKhxJcXEyxCkpBCATjDUHRby8mzyJFGxt7f4XA1if5sDdv3qivUCGWTE2QZWZwT7",
  "key40": "3E5XjsKQWGPixDnJrQSd94vQFyPtySJfhL6UAhDxjqXjKggYuPX57SCftwJaLq8aYNfRGzj32t2c1EcFawsxPm4n",
  "key41": "2oaQztY5rNh4fRHg581pvrQ7SwLJWjWq1LCAbMXpDVdjhhgmsUMRCShW2ts3b2CQtp7XpZJEDr5UkFgXrNzNwCT3",
  "key42": "XCmS948Zgi5kxpUM2ATBg6hK2eYmfZLktm8XmcypzodP3Q6C35vezK9rxVJ2u34QK2gcKZ932JpqeAeVYkUbrP5",
  "key43": "3tPmXPT92CW8NzFHmZG6pvdiX3mRGn5Und3UwDXFWnpJNwXxbEpKJJ3YpmYGMdSaQ1agTRhtb36BjMh8UjJYJ9Z9",
  "key44": "24T7bvN9ZzGTk8JnHucdSRfAbCcWUN8JRfz2pcSWwZQ7p6nEuEQxCFbYbiTa3KYmSu4bqFUuskFrSxYGNgCQSFjK",
  "key45": "58PzHW9N6d2RndZ7PmnRrqFceTF9CYz2EvoQ5TkSgWEAcZ94UiMppXjMRmEk4AcQMD2VhihXyCULUmwqeVRPCZ3A",
  "key46": "CsK6cbzU7Q7AZWHmTGnBqsAqU21GC1F2J5LWTdNN9NMuH2PrqF49NhudVCG8A88EMF8WvLDqbuNf7Nx8JB5yf9L"
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
