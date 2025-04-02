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
    "3u5ahVJMriJgLfDwEoFwEbbzrWzkQ7TmsGuAd4yxqL7xSxTTcKCa9FR6fN8vMnY367AJwEVgEEiyePrxGtj6FYqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61p5dL4v6L686n9Xp1zQHzUR3SCcGNT1GwGpXDGUwwioR9tTMhGZA7dnWHgQ3hn5gEAdc8t1ZQwE2adAaXLaRQwG",
  "key1": "34vjBghefhWsnC14YpBc9ZkXyydJvhibcXGYuTVVKpLyAqJTghirqeeJTipVBy7EdsEEJ8SKJAYZ74WtBjn5iewk",
  "key2": "5ZTiMiVri9AHpANqbycjruMp6UcqjdEFm1AtAV1Fag6Viw7wup1bF56jMHrfBxRTeT7oeqpCnoPpWP9XtKu9KczD",
  "key3": "5h7MKLkSay6yEv7KLn9Wk8JHv3TdZFdpu7zUiVupqTuVAN8RXop5MiYcuN8KnXYfLz4m6aY3thZcCKjksDudwqKQ",
  "key4": "2NuyDg8Zd3A6ieJDGaWhRAJrfh9PVoACXUpQGTabm7aihzt1zqfkRsAEYN9aMg4WMLTdbPreHP1QZ1Te8kFdgoiZ",
  "key5": "3owJFx49h3DsNtEgbVJ2d3UxGEAw1uPYYqtdpJp7Lp4DARsJGk9KqZSU75Mmg2uccmnmSodWTLLXw8ktUgtNxg4y",
  "key6": "4mjerZYRYyiPS6Sea2uu5SU5Sfz6QiP4ccK5JSiUqh6kP3CQBN936YZ7trgyygdhTVBCh4vuTokVRY4DeJPipfDh",
  "key7": "27dnzdTtXYoSghi1Vr2NBEkZFm9Ge36Df5xQovdEaYAovDUDsTUEKHMdZWy4gTLeS88zg7bj96U7JDT9zuSvRnkx",
  "key8": "3aMkRvWswfT4TsTapDzHjSra8srfFPxjN8Z2trjtPpuazxyvKnZKS9eZwyhoPVWiC3esbQjXbD5N49T99VCCJrX8",
  "key9": "3cTbm9AcQVUFVNHMJsQiFhxud85tCkjMxFWiLoA5KzE68eojAHX5hHKFeGGvCx1eU6DztpzgXoL9QeBjBFDPfjEz",
  "key10": "2rWju5Y5SwzUK7rSa2tRBXQGXqF16zAcJKTGtAp1JeH2uWJVqxLbGp8KgV57jLirv4ZNq8epXfKsrmzqLQ4XoVdD",
  "key11": "4Zz2psQy3K1tJvyRXQtJ29AVnqYVZMRpjMuCe9uUitPXvadzj58Szvu3ruQgUXSE541vxvRjoifwwSxi27VppGwB",
  "key12": "3rqCkJae4zXdBHV7RHVzjr383N5xVtbC66iBvev1SWRUQN8EQ2hYfsYuNbhgmdCPczNSeGb5KYLbkCgRBQeXwDwq",
  "key13": "DQJYT6vSpR77EEm7B4qqhQ81Q1tE3vdje4ejXKQFFQqCRbyA9eeTLRB7mQvaqFB1SefComN9Z4mEyjGwJLdjPap",
  "key14": "3gCQs7dk5VyqssLH77XGwqhnx59hQV87se1TVbJ7zBkJ5yj1TPyhiaDjfNJEvjDHKJqJTk3GtYiCGyKvsKMCBryE",
  "key15": "4xyyY98mNYUV68aQ5QDKrdZcfrXRQsMjUxQhzjSzRWjN9c2LazV3Gb5crXBrDoUmCNkLzhMTgsr9TJLEUaG28JLw",
  "key16": "395xwfPJNUHnp86qKLu3TCzfL72WF9n6Em74cJ9Ki673Tu6jm51uwk3cMVYTSXzb9MKSy4CyQYZWTLWapVbepu4i",
  "key17": "5iptV94VT3ZmFUeL1kpJK5LhMf1hbAbyvP4sGzVEZC9A6s4hEiDTdi28tS9oSB424uJ5eNUE4LuTtkRAQcQ61URF",
  "key18": "5sbrWiWCm1QbGjoP76vvHrdbKpgvFRGjaedBpnTDMduiqNv4ohXNHX5SNjbTSvMKzcEd8K1dNQmtTteR6ywDefGY",
  "key19": "QZuNhJtfcL4g18RTMK6ZKAakpdQfgZZKKCX22Pv2tUoZSiLuD5AQ5MDS3yGk2Rvazc5kfbNRH86yDqZU6aUyX5S",
  "key20": "2JybZ4nos6WhkodbPmrwm7Kx41ubUgZt2h9SiPfWyedsdSxzrGY6MzZVCHfeqi5JNLTb32zwmBzKYCXHYFVvU5v3",
  "key21": "3nKYEgRdNPTwTdEHnUCAsNKCMrYiQNRFhy9w82Mu9GKTrvnYrDdpNxBnhtgvfoiGDiB63yiQRNh9Y58cHmckk2wT",
  "key22": "4V3ewDXyxnpcEryoHEMCaPwZvKxxPhHAqckqjboA95B41PsAsBxEFHwAbaCfKwH23DvEi6DA43q9aF1z2fSxA7kh",
  "key23": "28Lc1HrnACPkRSuMvBegnypbV4LczPYtVYwpsEsJ4KJhbPNuZCvLKsvmHMVCvYp9qXWbnaknaJaeTtWguSRe8Whv",
  "key24": "4HdbHeZUGSYTxg9Rqc8XYWgPXnprs8ngkReC9HnPKg45m1m6xxxrH9r2g6xEPTdAzJDcTtUwcNb7XfpJq1A4FQ8u",
  "key25": "36QAR5w66RuGoMcZc3jVwqYiFe9LMZ62pvsV1NBzKaYTKPQbQLK4xjSkP7Tqyy7GG5CGG8ZhqRu353QcyGBeVcEC",
  "key26": "18KNcAsqXmejU7Ua5DtmAXGJtDNyY4YwMH7mAcqwoT6FkizfYfMmWSrWAs3nxfRodDkNBQjW4R7UfDZqG1ivJJ2",
  "key27": "7pWwq6kZSjp3K8BhYQumEqqpkaJZ6MneNqwEbr5ScAGcSieN5Q9zsmC58hTSAa9V88HQ5EXVef8MLSTW2CcevPm",
  "key28": "mzP8WYg3jrkqLFfj1t3YF7qFnotGEjT6nneJ7fMRtCac8fsfXePrTvmA888U5kaertj1tQoK9oMFqFvtyVzCiKq",
  "key29": "juPowU9xKQnYNJhH81J7mym8CZjcvYX1ZdF73JJzogNUdfLv96HbBJCkC4kD1Uv3pjkPvQFiARNpYBmssdpdkdd",
  "key30": "2U1DscM2V8MhuMiughW4Bf86np8CFpcLnPHb6i4vxauAMy5SGzwHTttsiX4hjNqCsgTrihPuRQfPdrppPD42YuMt",
  "key31": "44XysyaH9cHeUj2zMq9xmf4kQUpvS8Lp7oSqQ2Pnmbey8noUubuJHwHBkkwLCcTso9A8SLkCx84xpUHPz5yJKvQU",
  "key32": "M3jNcfzjsTJvAyjSNzjAPbL1VJNsNuhmp766pNmHumCf1WLzpzvythHiFwt6LEp7oTYE1waybzh1xYyC9TXvm1w",
  "key33": "2sRnDm263wctXRVe1EJb2ey2M37geDxwHRvpRgfYZQDHUSptydRvWNWFNHExTMNwxAVtCJXfeuwxJGxVZ8vweZZw",
  "key34": "4pRkBt8VA3RQa3REpYpvMwNcSP9dE9U1BzKWwZ9ivUjuUgpZacx3LhnjC9uhM5Q6r5aHxaBoJuyAg1MURBGs9KPS",
  "key35": "pY9VRtePXZTpPmJzi7EwjVcr765PAJyh3EznC2v2QC3tyT212HRhCofTTYMPof9KUWFpYgtWKDLXGcHtMLW1yVk",
  "key36": "3dPFeUYjoHTUP4Rh4ez2AEvKsmYW4twq61DUk1dSZW8hjqUV8gVhg7SfuKJKHEzxK5DdhEcr9AnAGUuYESWUWF9F",
  "key37": "3ruGkHSuHbU9WDovb6MZvS1etHnH72v6jtujtMdGLutCa1tyefpktsdwvQrNMNSsQbFbigTzwAXSPTj2aekYfx8k",
  "key38": "2s6uWok7eJpw95hjZSxJji8Tf6RWZemNEo9HEw9KjzU1jpCSojcrCE6Gv84yrrn7iop2skhW6SeCW5zr5gjn8JQs",
  "key39": "YteRodstEePP9WF2uYLApiq3tEGU1EFushtY9QWPo7cat414GNhEnmBjdKf9oJyCj7cnkZAozMjveTWSHZh7psV",
  "key40": "5UxguUWkECJ9R3wkXLYuS5uMUF3pfWrpRvNU2RWdM5TMxKMie5Zu1riyCEyFwHfa75W8P8U83CLfiBfKzcRP56gP",
  "key41": "4o46sighcP95fJXxL6Rnx4x1TbowcZffWDbj76pBx9DvUPGE6xpt3oWXyMqAgyTrfjkdVUdbb3FcZ4EnR23qSzGp",
  "key42": "3Xvs4XYuHZpY8CNouppW7NJZHdXv4gCz4YZhp4PCU5roLmj2WsFz5RHA85CetTP9hZVvvzjrqduJhjxksnq5DVn9",
  "key43": "4uW1ScB22q74dL66WCns3uKqyCP6sMyqQ2f8DSuhRVJcLuL51azBgW427gRQaF9HEDnwz5APvzkNGDsXUSqeTuk",
  "key44": "2dv7AqVBNZpUFRvZu1kBJTRRvQdmDAGsAGCkPgoMWArhEJKYopcdyQCJJSk3C9ixhV4xvNT7EMp5paeMz1EhfQ4R",
  "key45": "ozf7TDx1RyZLf46XTeDq3qFP1QxYhkG5p9aHgpa71RK3kCoZ2fNZeAp51RMzuE6coDNAMDRFnu9e9yFX8geBJUo",
  "key46": "5TftYZmXpaRqLytn5aF4adNzWaH59bKsKWgdwow6kWCo7SBX2t6pDXDsFSRxWBAp9sb4XkHHvtMqafksfRAmYSo2"
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
