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
    "35F2AGsMNGSmXGCkaVK6FmNqPMDE4HCku9nQw4gdKvT6hHFKapptGgv4QX5crTnNccVE77qReDTW6JfngbziiByC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rKDBxrAucNjfJm5AvQPerUkASk7Ym7tkM31th5xG86aGNqrHEapGCqVLjdxNRErfLQb5hyst3thq9pzhpuwZjjy",
  "key1": "3oijVTuQNWkBQ3rnhgLDN1zeoJh4Vsg2YB9ZgaYNe5CiuJP2nsY7b7jM8vkveS7k6xeY28oxLn5pzk2D74RpUYwF",
  "key2": "4JomgHt4HuMe1H66f6u4u4hAy66rpCxUozstcfn5i1E4WfpwucRopLHCmtWDdZrpkSSr1fEqKtCU9Qfvotjbsuzc",
  "key3": "8LJggjCDTNqrcoZotV9DFUb8RGbiunTikkMzMaVhcfd1rHTkRAfF4pDjzBY47W7d9xLbGQFDuihnmF1aXY2eGAr",
  "key4": "4CJ7NgNNqfNf8C7otdePEyNf53bU6R5KwKoJZzgCdW4UWLVSJWFwn7RprY2CJc9NzJCEJ2nc5EuGAEn8z987erQ8",
  "key5": "2VDVboNiuAMnCMpf1gyYWDfQj9pbacHrXJDTngeRCZShGfMauybVxPHeetybMyQxd75cczrdJuUMaC2A7Pgt6Lbm",
  "key6": "4PYjeq1d1XDPiwyZHSfBD6W2jtZc4231PtURquCAC2TdXYqcdtQfDyfKwyD4uGnH9ZuTzvSGdrgD2LevnAdcWL2Z",
  "key7": "3Uwpt46n9sgYD3uoNh77pLHQqjmFRucHUKttU5wHC7v6BmZE8CDJqCpodPHvxCZ6UCtyYRbikM2QdDNXZPgc7MDJ",
  "key8": "3fsprdwNj3CzzkcALC4V8tVxBYgtAVSLDwEMcAFPoE8spprx5zmn4ErpgyqZR9TdCRVAjPykeRwcEnU9o7B77e4t",
  "key9": "cKYceFR57TA7PvarRFkP94Xc1eBkv5RMCMCSB4Crudp6ELjpTxTJZZw1jTLfyCxBjhxbStGpRDbPvnrQupeCDBp",
  "key10": "en8tftpy8LrJyVqaS9UYvi7VFyaCRG5Yg2584HYksMtSLCTAxv3rEZXqanzyutBjoZyN3UHMFGiwZPq2RgionYX",
  "key11": "obShpSXiPHGcwWjvsbyLHbgTuQ4bZwMBMRUXDhWobZgTPD6M8n31cR52nqmkrhjjWDL8ZYyEAyD1hjDNmCyJXF8",
  "key12": "2dP9Lvdm317F5uhTVwu7E5HHk1hJLWjgip5wcjY4iQQpCpsXTwu7vtKAf63LPh7KiYBGiyNGqwDtJ1TECAqPbT4o",
  "key13": "3w5ketzeCFoRFutNSKhGUS2DCn3JtzQe9su3HWxERYahznxLBJTWGc5rJCrV9ndCXiuKXaNtveYipzpqu4p1umMQ",
  "key14": "4GU8pimW7Hk4nMnasRWYwEeY4TpZUHdn2DiQEgCwyzCvMnrFrrGPyFxFauAB5N2uMvEMMj3wPgmqfdmU8SSiXx5R",
  "key15": "3HU2CzHHz929e6DHtogha65Bb29B2SEHSWt39FwGtqpRPEf7jP2TebSdD7z3pMTDqziYWhW8AVCkhEBWoVzdyBnt",
  "key16": "iXFVktyHLPJYXpnHuVoUBYseCt7S6ugpuPuparYtZ93xisscAvjxxjoQxo4SrEDzLADmTXQaj8SadLanrjqR9eu",
  "key17": "3TKcRZGJPNhHU76KDvCdzwamK3zMLHyFfeicS4xDGHgWqzVAHSp2CPHyMr1nu9ZF4zq5ubxaRNs4aYHEaV4ss67E",
  "key18": "4k8AL6KgKmYmf57AVRzWX9QFBaU4WaBM2KFUZwGM9xAyD6RvUiswKtvLbqdP1ozVieDWgaEpe2Rq4m3h3FsyX24b",
  "key19": "2bVHJkJgq5yEWnZhC1Y2QHiyLb2heK5E1nRbpLWcaNb6TvMd3GeJFeQGA1vT2FANw39jV9bH9Sxckbws2tXkgXCx",
  "key20": "2YCWXFiC6HPWfMJYTftdk1J9PUGThbDZv7D6MZSqTsw9iU7phmS7j8ixQqinRsNLe3c9ire8m4d2abToA3GHAYLo",
  "key21": "3QvLRgF8ZFg5rPjvA4EXD28pgNKWcqbtyx112QBQBXDkqJDXikYzJijue5owMacTr4Lq6oSSQ8UMP1ErRFYbXfnw",
  "key22": "4zn2hRCAdurb5ESbBjdbFNYBRKbeiJUJhqvRKM4qKZpjiT4YoFw6NKLGTiriPovcGSBSpNvp7UJHkMdQQyu8jreo",
  "key23": "5uT8XzUpBRBya2CVozu6aWpqbSBGdGzxiqqKGq4SKC2ZWUxxajw7TAVp7WD87DakjoKykFK56oQc3XdQpLqYFU9m",
  "key24": "5p7bg3KRNwmT9s3p7y23UdiNcXcUU5UscoFxa87b2ipWaDajCiXLznGHx2YpFaFKxHv7gzEtLzZS6JocLHofSaao",
  "key25": "2ZhJfvUTw2FNCqp2vxYmcEZ9hj1BjdFsnPkT3bCyV93MDCKFnNxB2WPwncMT2iV1fP3cVp15GvfwopBU5kY4BGFj",
  "key26": "2hcfGbLUqSaRMo44KY22HytFSrsDAyczR2R5APBgqCkvo76QXQGiQzrpA84TC1yNisbrt471FdvQrR6hipyur6bo",
  "key27": "x3RnonmZQGfimqejoj993cAYaPp4gmB1V5dbyD3jfTJg2hBUQWQhs4XpbLZPNBqfvnZcnsh8VkKksV9bPU6ijiM",
  "key28": "4jW3jkPtb5PMtgWrGwQhMizXscyJSreoebVrX2MwTHtRam3mCrAvsFDGoFHLQhuod3PD3j9prV1ubUY3qk3dtE2T",
  "key29": "33bjpVZ5YMTcpzegC6fL61geq42YCUH81FqDzuxGbv9xGFih2Dtu5WZeBchthm76cF3oEqikJTRfq1dKvdgPoNxe",
  "key30": "J92twuMqsXW9oF7NpxKU2jNVZbFNtSvPwzYFZvddm3Pi1NMzA7Umcf9L795hf24VwuDGn983oLXyz3YCcXvf5qh",
  "key31": "2NyRbwy1reuQcpJ12mkD4fR4oSSVuaGsa1eT9sUm6WuMBddmXssP3jHZi7n6hH6MvbG8Ga2EnTGLg3jD6REr8cR9",
  "key32": "28xyqJ54rHwV5pMRKFHbbgAcs4Nvx8q7ihktRn5DLw7kjV9LcHpuMLgJFrmejqpzTY6YVzxap2hntC6xve2Lvc97",
  "key33": "5vAkZeTFoBBYLcuoAf51DWK6V1RrLESW71KfysKdiaXEgzaNi1wYnZB8dwpDsz7AEY9pwb5VKM5eHYYK9icLVBox",
  "key34": "5Fcmqan8kWRDSq72EgaCjADnsWU8AZSXuKuSHSYbPHQMfvCWNiF4TQMkmGM4zDeMy8Jrdr8YhL5DTi9QpinyPcSo",
  "key35": "288ivVF9RDqo6vtnMmKCjERcQqmYSarrGBuVM5b3CnSKyeRSgPHHGZktsvkZpQUnenjXQZEVqB97kqRMJ3i3BafK",
  "key36": "4FuNpSano8PWgt5qogVindi1QbN61uwASjiiPcjVcHKxVD3ge3T9prgNo8rcafGHMCw6rkjFdMcsZCR1XUVa1Ups",
  "key37": "3mZri39voN9gHGeQfXYCU5VqtrVXb7iVegpZcwzzSA6B7TLYwBJ4kJvxYwVU9LrGxL3re3WtZg5poZUkavLcxvu7",
  "key38": "gibNhtcc71S3TsgSTGNyPvwyTGUzMMUyfoA2Q8QVvFP63i3MWN3xC2cXrfCDNZGzs5crPPYysYPnZTSH94oKCpT",
  "key39": "5R5WTb1VAeU9YbkyA49QYmXWMarMeg5DFq1Yt6q2A5aPHuheTPo6JRkMfpLC5Fup1o6ZrWxP6cJEPPKcqpmQkaPB",
  "key40": "2Zchk915Ldq8EFQk2eSQy61Px1gq8EEvQ19xLb5GsaS7ExNFw8BNHaR6L3gRc2LHWwYKw33ynihzUz5rMgx3iuzn",
  "key41": "3KnJLgRneH7wFd2nG5QbNuA7BzYWcHTcVLhDzmegqs997DVW6X4WtPVyCYsawBH5qJDHDoRUpr5ikMb2YXQCTugT",
  "key42": "8XcxQiDmX2c79AePVHh9Ww1P3hVdhYHZmLsVN7EY9aPHnfBR2YFihAxKnctZCWsdK7Cy1sFg1xBxqx4Ckcw7cWM",
  "key43": "458iQh6PzuvVQTMMZQwxXxJKTYMThH79ZV3wSSV5iHXdrUMQp5YaWf8nR8qGFzbswSAchX9oRrq2YiMQvAanKrj5"
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
