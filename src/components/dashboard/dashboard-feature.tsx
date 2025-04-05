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
    "2prz2TZXKwxvWroadUoMzZ3BDi1gVTuriPW5FBFXhL6z5KcajPdXCTY8mr8BRpoixWR2kC9ADduGJfDMbvESgwSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUm51XAbrAbkSqFjhuQbRcHwwx6N6K6Nj3bggGqzG84U9Pypw2soknwZeBhVWuuMTYZspq3UHjSXqt8PhjMYhrC",
  "key1": "2on4nNcU37vV6CZHTnZnaQPABmdFB8AopxAuvn78E5g7A2Jrs9XZtzMYZAcFrz1AD1K4rDjp3MPVnDyad8y6fMga",
  "key2": "5KQrDYSPtFuofTBz6ZfSPQwkGMVpkowp6RsSJVqTE9gchWyjMYq8HTrd3UW7tCBtmWL5emZziiASNYB8NsgRPEmL",
  "key3": "ioeuT3WctzR6Qxsf7zU1khSfEkbF2GXEAQsCG5yGU8wrrS94mAx3soGAeCfinNrpXjpY4H7DJ9o6juNQTWmkDfu",
  "key4": "3usVa1T8JDWDwh9fM2bDRjQUQv9wSHrXqR1D28my2kAZcfe8RW9Hw2gV4AGyaWPMdGorzxQ5dwThmKbz25GFGdvs",
  "key5": "3aCEwGzP9Tt6WgTFHnBaFTdox2K9DdXdC2Cez2XYttj1PzE9smmzWQCshJQhfk8AKQXvGQWmBGGMevSdVbEtFzG6",
  "key6": "az9Y7du7L1JquAUF7tVPZF1GYb3NceDDCWdwfp7hFhQJXHrGs7FwGHAwS4iqwn6HtYm1yxcf7QsLRmbTyci7sUe",
  "key7": "1v7zSKbxWuTpxF9p5qhmGB3L9G6NBBaiuBP8LUvQBn3Y5aoftpVCTuNDEXNzP5JG5HbWjfcQn7DQsAhPzqXymWa",
  "key8": "Ag4JYndux5aUZ8w2QLoqazZgWXHL76W8a9srxDHe3Afhu3cEd59EFyLve7YfVuVdjLsmiewuYeDvTX2G4KYQQwa",
  "key9": "5E1EXn5Be8iTDo6VNH8pbfButTEeQweW7dhzsC3ZkyLErU8X5N4G9Ui4QkVdZMQsJYkPiN6QQHpaxzCg5hj3RRXD",
  "key10": "4V3AQ4nDxkzkwF72CB5H1J1bYKamNnm5jYaCg2mCTyoGkykjcUZVMbJSzzw6STFGuziHerPx37CdkQVEDz9Raw63",
  "key11": "26AzpiaQDLh8i68Vvk25Dv1awZuyVpUSJLSTLKWE5C2FHKKj8ANgYfSK8tDLvcwXpG4gqioX92cMMKwfwA9gvMgM",
  "key12": "634DqZebznr5oBiyPtsTeKyydbKdGrUwapB87EKv4GqoSTazP7s2H9RkHXto1LjuAHdvtWGB3Lvg21KpRFUpmtYR",
  "key13": "5bsvTkUUkT4RwZDy9X6AXj1fMSjRUiXTs3zSLbXQyTA1QCUSJoTjakzS3csy8xTYvdQurcKZiAu6rzHFoppycQgf",
  "key14": "K9KUvMKYi7211LkeYWapLaoVGRdQX7r9oPLUBwsAE2ytRvUZeZrcWsX8mvHyYSqE5ARWdBgKeS2BDqVjqZBVMiu",
  "key15": "2tVvSxbwUwfrTAMU3g6Fs8ZBhqn35TbUCVmW3WN7hXLNAVYekYWQZcYVw9nyfqj7CGwGuKrynq8CzSCydEvoCqtf",
  "key16": "3BVRQPeKrnSUw68HgiDjJfxWwkBENTrxkdZFVGNYiQBKyVhH9eTPcUtBDNfCGDgAbcZosfXtqNLULhgFEgPvUHs5",
  "key17": "pf1vv3wA5oeYf9dSaeojXQiz5873ToUQ2tmEyeuoZXbRkeBvg9LvRTaE75LAawqHdEc8FMBpNgqJeXB74KsmLjw",
  "key18": "5rCD5kpEZYAzqYAp9WCi7VzXG6hZaqFBch8R49pMcRukLyaUvys86wVJMCxFTYNq3V8anrWgxjW1vLT3A3XMYvgm",
  "key19": "3mTirosnqsDwmM5iYi8Nujbha33Y6rHJdngpV4PYdphWwL1gnogXymEH5rJry94FcSirT4LH5G2Tp6kMp8F8V3Cp",
  "key20": "Xs4dWUwsLR1ZjtRS2cmihKBodShF8P6j7QprdvoYnWGYF92v3536oRZ23yevvePT1r8DihACaQLwtGhoywm7bb5",
  "key21": "58p3nmEvQiNHGsSaMPRnNZ9mezysnGbZi9m8viw3C9EnLi4QJq5A5bk61b7oaLRk2MdYDadse7ApFmjFjxaRtRzb",
  "key22": "Lz9pAzhQC2UngyXKjJvXTi1aQFUGpEfCapaczQg7zapPRcfqaWZEmL6NqsaM5efwhn8V8AZy4uH5EWpdqsUZ7b2",
  "key23": "3rvF98811coWzkZXWBWc6FR8ai2U7RF3keXj2cC88zgb5KZpCNhNNsU3REEhYaDMAYC7zFfkqjDQz5FMjfEBWy7u",
  "key24": "47XV7qPSY7RELogHBW7e1KEKeW6cqkbm22i6kqdEGCTbACCQaqtUZhfjMqxSkbztVscNQty83neZjcbhqfgCbaHp",
  "key25": "5frKE4LnBc363EmrYBgcwGBQSp1F5uvXU8MHyk8798bZcBVvKfn5upHZJnPDGJRaudCGTcKhyAAA1hjYxxEyBTvv",
  "key26": "4uiXNCmXzG3DRScEkmQR9dMQGEN2q4qjMKu1VqZKz6DPsc6KdFeqMeZChgvrakYa9forgpmdArsBtM71k28q9GNc",
  "key27": "2tXsHmP7GgCdvA6EdHc15ZWbPuyoBwhifjUrFAFyNyZzfMzsnjrGzmiozk3J2P9yXmUkdyAsiSHcUeKyu5AkBZZV",
  "key28": "625hsNUR6s22ocFdS8YkwTVsZoxZzBx3veEMHxQ1cpzy2rCnL3KVLX7uuvekdachnNrHvjxZ9cW1oZ6qPu7scwzj",
  "key29": "2uyXSzAFNsYsCQkrfxddReM8Sr4kAy5fo8Y716B5Lh4rkEmtsrm2MyZvxiPgSnHLit8HSvyFANJheZkPwUNACToR",
  "key30": "2dhmtjbE4zpXbzF1NXu6cLUkazFiEVLGxHxcMgXALark8jC28g2KxjTjHd9P9HdwEdpSEhkLz93owckZZLxrJGNe",
  "key31": "2qb7Hxs2Ct694ekssEGK9EDaPRH2tkcPNDSiQVDqE8bxs5kgn1NNhFLx9W8VZYCPDVNJ233gPRKhetomnMqjLX8z",
  "key32": "2KHqAFySjWRG4Thsi6wYgV4oo38eyx1vRMWjEzMcdCiwA3neLrEXiJrpeMLyKxDmjLkNJ5UNd1gdScunRHtRqyy4",
  "key33": "5xhtsUBGxbjQgXHePutYxsgda5ASJcThCcotnthQVwq12hMVFRUyAGCCmcxwXQo3qMrbhHGaAJhEAJ4w2H4UF15y",
  "key34": "25YBMm8hBQ9UZu95Hhj7CZnk8FsGmNhHzHvZ9v8o5LfpDDP2LDkjmh7Lt1QL6X4GXJqAxA4Pv9FMq1UfsqkjyodB",
  "key35": "5BbsrsYwanGNVeiXk9ggy8TqEFfySzyWrHqtGywgU3ZdzacdYjnc8EFZUXm816Qvi7mLZnqU4UkUj2UvmYqrdh3p",
  "key36": "33stgGqQtvir8vAcr9NiiRvPBFc7bMPtcZ5EujB1yGjfvr8QX5uXUM76Chn42z6qQgvLou4Rf5z725A8LKxWZ5gA",
  "key37": "4M9stPP249ZA2CfySXo6eia8RBeuJvV6f5maWGCY8dUTFA7gEUhPVMHok4Ypk9BxhCww1ZY7kU81EomQJtWem8i8"
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
