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
    "2vhPFfxHV3rwHwyfKsZPwtPDXkWSHfckVGWQrt4evPMCnZaGLyKFMQe8NTKrKst5DPKfTYe7qhwEbxw3vzjPg5qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gr2fvsXMgPXQJmFNx4fYFMiZ6UxtwJtwJeJJUmVzpXkUj1gqT6nbsw83bWwqW5B6rbsL4sFpXw83EeKKCeXWmbM",
  "key1": "47vqA494YJWbwz7wYkZpDKW2qv7LVSY2jymGxddvRfNNEjbHdT5cckFaHDxjkLbQijC6UtYUWHsspgABabAfm7yA",
  "key2": "5gN1zmCiBwnBmcsbmkbfHNCeM9BkjxR6iW9y756DZf9eZpB3uKc96B8EgShXmmJxzPB64ctKDzBVzWs4xmosngKd",
  "key3": "36twBV5WdM3A7E7QGW7MHc27Y7csCiXMK3PRCWtxfhVoi6GBfTegg9Zt7Q4NQ42ceeTQJHpZkwxfEz1LjTYTsfmo",
  "key4": "21jQhvpETxZN4zzmJ4dXA4qdwCTDzxcGjPAfUP7mQijBht8qpSdBvY9Ks2SbXgoWC9MS4Y2DyfoRH2urkKZNXmCB",
  "key5": "559XZV2jNGHpUdAE1ogTWbKnTc8TKwqwDC87hiKTEGJRWBmfdXjuuwTeY1AgNinrKH16i7gscdPi4KtPjLRaqDgo",
  "key6": "368HkXNNH75Rz46fwQyxpXs48QSM4fSrnnYuMsQtRvRfoRz1SeJM719ys3Csm6xwLqqJPjStahWssRBhormr8Pva",
  "key7": "KtrPyRhBxyJ2F1qnkRkPxvmcmDUvdjHsS2ZELmCA52LT2B9Qk7gUvGTe91WppZWenz5i6cME78N1bMtRRJhCubH",
  "key8": "3TycGDZg4Vq8MyWKSH1sbEfojzQRPKMBCChLpc5tqmNTuJ5oeWdp9cBvSS4ARmSCQ2sSRzWG1WyJ8LGCBBtTLSxA",
  "key9": "4dRPbhMv69X1o5bw6LSmJMq16C9hzUQpu1GMdxNXibUhXBwYHLA6JQzr2wUYYU62C4xtbmd8xsjAPJtHFoYMxVqt",
  "key10": "3whUDQs2E2dKc3xtLEnVyvjb2VH3xKf1SVPZQeT4ZbcvXkbcsvqGxiS7tRbZK9NesoyjxKec2nAqzaYHLL3sWhJ6",
  "key11": "2DXjnMxt6m5qVbjKSKMMRoE48snsZX9YwEWynvCcAmBQcd8YyXk9N7JTQsrmYy68aEjn6hTprBX16JZ8T8AoL9Ky",
  "key12": "dT1JQw2ZeWJhnaPx3sR4cmCJmhioDreyDjMNrzXqHVfmizrNKdQZpXvqqAR4pi8enqLPZJwyGtp4ewwCypiZ74H",
  "key13": "4JhYpDE44fXMZDiHTVRodDhiBkpd5W1GJJhY2v2Nux9qBXZiHmMQbu2RZuqNmL9eb4BnbkD6DX5FK7XG9Nr8ZJZF",
  "key14": "33EMRu111QMSrVZSbF7CHoW2ojREyeZ8jgV6GVTjGcnq8V7gGEnboKd4LHtCkVRFSuipd9uqnn328BN82wQ3TLdW",
  "key15": "47anemm6KZviyfB4AU8ZEgLxF2S6NUN4hQt142gTTKpwC4E4gmrrRk9dih23crd8chxzMXZ1BwAd5cbhvyTD1bkE",
  "key16": "geHwNxDzMgQ7QUv2uSuvi3bpGFHNqS5xDAT31naHnrNoWUWmtFGppgBbP5Q31YT4YRKJqo5SRWo7vZk58eYPmBX",
  "key17": "MWNAsad87CFCx9icQ19oS7C84o5u4kZS9nBC7sYpNsu1rj2cBctDBFQy4kFMTg8QaXyRDFp9UvFQpok3BPqYABZ",
  "key18": "4gX1ZP11jm1Yo5th4Ue4ARs5yt6a9WXX6VAs982ui6y5D366GBza1BZJRMrD2GsSHsCgK75ftT5MY5wJva2bwnvf",
  "key19": "3LmPzSYKqU38oH7BqAYgUPYK3h3439nwBTpATzWbMV3zaG5uMBBMJu48r3kAvamK9sgVoKELjMyFgdNUp8H81Byq",
  "key20": "27FfSEDNLVEhXSzBJHaChv8TaDDobNtrh5yturtYCUzhZsRGV7pkhFShw59b7ByskjVFK2sAmWDG4SPKRUgZwMdF",
  "key21": "aAPgujmYfKMfqjh577Jxjs9iYphN5kgz7bAFhgdSxE4mPzgUVshZbaH5sxJ5gKoGsFcCypnrw3huAi27DhFokZc",
  "key22": "4SUKgNKEzF1u347CeZyNxxy1KHeV7oj5ZHo8CXbzXTNzdtNGumaFWp4prbNczyXfPb5NVgugMsR9nCdHNk3dKkYj",
  "key23": "5EjM158muYwFFpHR1wsDCFjPxVNuJi8Yhtm49e6Ce9AwPf7Z3LfGqgRcab9Zp1LvSTQjn1qMtdt48CvWXuYUyxLb",
  "key24": "57infFhxmvYwrfNSnRLm1epeh1PpS9MRecC3wemVeqsw38KafuenoapFJTMnGMkcSuztu9wV6gYX7wtK4BUEohCb",
  "key25": "ZkTtpa28NZEA9Uq1TvNwE2Psntyr3CQV2Hkyd84mATbQ1bkPwc8KEmKSPtA56DyoCSzm2VFWpZkP2TzN8GybWxY",
  "key26": "38tg8aUWe7FchQmNRtRm5SgnBjjuBqx1eAS4DTvX3DK82JX45qStcsoGfVcGAw8FY7zqKC32bpcQJfXjq3tUg2tp",
  "key27": "3ioFwCvn4akkf6qmyKmZt9tFLzbitdz9waPeAunHbg1xbBPutmtunVhhZQYwyCfDV8ZiXHxZ5U6KZngvVknGZSWP",
  "key28": "63vBh41Shv2bcKNc8hrdCYsf7tNwXSb9nUDWNE7CLJ97LJH5Ax1u31H6inGzcQZ9PUBeG39hjr4CxRqCNy6cshY3",
  "key29": "5zBHbPdwJccdDr4PYMkYuZYSPnBevAKjogk1Dp8Hs6SbqVArEj2WGx47qHGw1iSkDbUhkpnCbD8dxWPJjvfh4xqp",
  "key30": "57sGtP7Gg7Cd3YRkb9FDDV3wowf1nUrvvo5FxCtXemdXAZYqGfJHrDuCiMQxHiW5Rf6ecXYJzBJPy4noY5zsiKi2",
  "key31": "57NoKkhPwHxVwU8XmfPLNzoWssHDzeYqFLmtjZQPfYwZQn65A3ttSMxYifERPuTkm4rqW9rqfYgq75AC9GUjrLAk",
  "key32": "5Wv5Fc26GV46MHWXayrTEHWg7nhK6AnYVXfgH2axhk3ai5KY8qcjuMFAHWoysFWbscovupjaR9omVkGEZhssY5i8",
  "key33": "4F2qhfiVnweStu4eohPHsM8CPq2wNKGq5qj82JpCorv5RV6AF6VUYRMYJRhQNjmybfcymrHhypbAmNh9oYFXcsLE",
  "key34": "4xXLvBZyxNm1b6TuZcFfYWbhNHWiPxmxZSrqwcNMY46JbfH9qB78zbup2QYo4dAX3bfKwfriAisGuBFnDeuXu9Ta",
  "key35": "4xgmEnoQLRB4q3JjjjRd9caTFwuDbrpTH1q5XpGL9dmCrbDjHRcrNifXWh7jFhNiR2MDmeTbjc7mutw7nuf2uXEm",
  "key36": "2xwbJtujnkwS25xpbSjatbLLFcimwJ3abqGEEhNda49VMKANKitwFJKXDAVE16aTpYxZSKXzhA5b6Pfgi26oXyV5"
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
