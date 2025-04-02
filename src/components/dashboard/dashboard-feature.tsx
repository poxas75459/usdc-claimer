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
    "5RKVDMZKzkuY58LHVqvafzgEavTUUe7BySCTdK7NKzzfM6KBuVyBFJQWi2vb49mKTxUWM6tP3CGyEukj63QkQdiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "446SpGh9tA9eEajrrMBD5uBcQ17sVGEoccRSgyQN36nhLQULK1haLFuUqoPh3b5gfkEVE9HXZZ2x3h3aWU8Jr6Hv",
  "key1": "4ocSNgAM8bkr6QxAV5YDnPQhAJE8Yjip3CUFpaAHCkdShSk5prHrZndFDnJ75VAWG4LGeituT6UgWK4Upk62ipnH",
  "key2": "2U4qMzbBW4gWKEspm2kWTUpBF2T68NNdHPTDsDCAKXbeVU157NC2fCwkQY8UKnXiRGvuv6RjpW1xQLf56teHhWvn",
  "key3": "5p4v3Y5sxxWyYhdEuY3RoqNMCxJ8AHG8fEzh75G7CgoMMD6cByafmBUajcP6Wp4ggQDp722bbNCLUNtPzQndUK7b",
  "key4": "3baoVf2Z2FnqNbeGmCop3EYbFrhNiuSdoWTfpQbPhB9KfNvUj7eJprAg6w6jBjv59jRrxD22cixam4Q7DZRJPk9k",
  "key5": "3zmoUf62zCEU9j6f9DXVhpB647tzuY53aL5L9exxwwSnsUfZQAzovFp87ZWpZH9wyWXUsvSP1gQLbzwF52FSsjxa",
  "key6": "5HTxbxxi2WMMGCzq29ADp7exd3fLESim1Mwk77ayvVf8FXeCqZuJwcFAkqXJHS24tSSFf5aUfzguyLCTn2kXM25t",
  "key7": "3dP3aBwC6zxSVdRRKATU9uFTdq6ReJ5KJdGhNzSoctfqWy2HDroA1HZQEKjEtGe3UNJ33oUgH3RouK2wx3gQQegn",
  "key8": "2GBMsriteHCdmddm77DuYDungxnrRZZhymf8CrguavF6s8Zg9rDXEEc4rbUBBgC4mT9XC67RFgg6ieNYCwaF19oh",
  "key9": "4u3rRMNEmbs8NZ523RFnKXR8DJ1pgCfmwRPZasSXQ9S2ztFP9V2BkpVVUHxS5yV1JqEBm9oRWPF4cR1czszUA86P",
  "key10": "3RQ1KJMWThjgYaxzkAnuzFMS3GCbwiZb5Ufya6aLvbqJQbHw5SvX6s1aAogMVkcLhz93qgDRY6qwGZ7xVKzb17rP",
  "key11": "3WFbXhix8x5CUTQVhgAMsx1f7wK9GZQJQMSAYsGC9eLNNVzvdry3owBVssVrqz9JLYBdmbtdjijXJGk9U4oaxozv",
  "key12": "5cx5W2gDngvWJhmizEF3rMn9JjB6SDPxvKdbuMhSDqtxM2i8LRCT57By7nwu7mM929bGJqvHb8Ei5Umqdm9Joan6",
  "key13": "EkHf35bFDSnyBNQEo2mtUN3Ath22qJq4UHkuPkL4dQPknycpNF1A4uXzFPQFdX7fD26voL7rR3zq5SLe6wo4sTm",
  "key14": "22d25X335tbw8TTd6KxaLk1CxBfLVKH7qb15ZZcKdeDt4aX2zndnQVCJ5hmNjNiSLg4WUnwVuea91DVeswrh3ox1",
  "key15": "2j4dJQiDaVc35nJgjq382aPmQLUnCS7XccxbUn7k67j44bk7G8t86QWe3BYhNphPxeqHXYRDiLGhNCVfLhLsNSsH",
  "key16": "2f44ZNGWu95w1YchnraUukqphsB5dYsB68FviFg8yXAW1Jxj6xQ7PznpyyuENZANZdJRFGTLGMCJUpUXiKwWntr7",
  "key17": "MX7nfG4bYhzzXC8XvqMncrAzz4nxfp1ySMyfBQwMimsMeMsPqX789axgKWyFuTizxV4ZpxDiJfucDbiLo4k61Pb",
  "key18": "5Bwt1qfuQGGQZS3TMatTeaaGaLCYd7JQhfVo4fbR9unevjf5kz1VJk9p2atPaMf7N7ig2PZ7vha3ZWfcBBZ4ah58",
  "key19": "44jNA3gWHABMGfd2VmSdka6pfBQPhRDLKwJacMgQ89RbAPkf1KMGTd1tiTYYox9mCAhrpR8KrU4jr5NhvTnUgCrg",
  "key20": "3nytaSBpEgTzja1eUcMKAettUCT5HRyEmuvXkGoYHTox3EoxYBuMHAHCC12cqS4ht1hb1oqce1bSAcpdaTxzPtqE",
  "key21": "4gV6uMfzbDxDWvhU4JhbHooiexmCbDdkJVNYDQ3iqVLJCtg5sR4WYRr3QW7S63FwdHYtU8gP9KAw6oScfgW14NvH",
  "key22": "5yhPu7rjV9WRgpoj3Drrz2itSvrtxwk48YUJRqK58tT29NzdLiGfGQAGVqUAaE3hza3qMNG9xspB73FVag2TD44U",
  "key23": "4pxCheP5dqwj6KW4BwreLZvJdrMmdW2ZLkVZ7FiECGC7e59buk9wxgBESgSjYPTmVsiaZkwtVQz534pfE4dUr5rK",
  "key24": "3ujosSRXgidB7apZphRTL5KYmbiss5ubCEzHw5wch519c1tnEhJ3t9B9i8cz4c2nXgnE3fSPoKdcp7oG1U87WZ8s",
  "key25": "21AfTCcTnM4zGjs2FS9Kb6yCDQEoyEQAP4H8buaHh265qNWLw5gSrCcXZXuPkq4wX8ecVL278nR73MaQ4uMgM1hx",
  "key26": "paFhHmrHBsma6eE4LBTV643GRxtM2xakzMpaxxYS2xRZ4BqRsnuDDbCHijWoxxqgXXjjLgbiYcqJ9yARz95hv6c",
  "key27": "3damMZb2ys6fbESxo2Rjekmc9P8mzdbRtXEoXiZvDgQsaRgMGbdmhDfYqnHUvpS1MG9KW5ZhXj9kqD76xjxh2a3",
  "key28": "3TuFSbSCpZpE7BbyMzsPiDB2XR8F5mBpCET1ronfvtZymp4ErRrKFtJP95DTZ6wMVvdbVqXigVLXYgqq4k3ds7WH",
  "key29": "4zW4cFNhtVqAtLgsscixaJ54EFfbbzL99WkimyThKKPkwXnruCHyfJxtcCs9CtpKDjLVpRjPLdukUfxgbWPv3Hp3",
  "key30": "2Ccx1D5bujwLYN4u8ucJxYphRVT39Vkd7FjZBRQM7xCf4HepAuLnM85rA9uJcPfN6BJw45GmmURjed2myvs4SbN9",
  "key31": "331RYFBq9toCnyuiFTMedhVp3gVnGQUQXU98oMPDRvrugqAoyX65WSYs25AMNXq8GdzV3hsX6PvZHoavVzcKJBjc",
  "key32": "38JhanLp12WKeRJko6KKoxwHdgXxoPLrFMSKyrCk9V77pVcM3riXqApWtxuKFevLhGho22ChAZx3XEhfciv5qeBv",
  "key33": "5Lb45M7gsFqUmohbiWNh3r7rrxsgMvKQpSE6fULvjEz2Hi2dfNNV74Hi22Bzj3fm59SFAjkbxoQxVAnBVufy4UY6",
  "key34": "4AGv1xgX92f6pQw1Ys89DAzedF5qm92nxsEhtqg2zQFTAkwjkCGfYSuQXW9JAzk2zZbuqbKAB3B9rrC77FujAgPZ",
  "key35": "5cL2m4V6Z2E5ewzr6uxJi5KTynVhm37PKRc1KnRF6HJD4FxwcwdR5RSLS2DwPrUMAp49HMEDf4wyHah6QGgR9RHw",
  "key36": "1iR8jFYEFuNJSRh1t4faWunqJLYZJqNCnNACqFW5z7DVWUFn9o933utnm2pmQF6HRcnxSEEkEtftjG1on5hg1bU",
  "key37": "4xLTLYHhqCRpwByauY5UwrXAoLzxpWL2aAnfsLfe9Wxri2Yhin3PveHq86KjUQpagabEfLb32kxNizUegbSWS9wf",
  "key38": "qvRPrrN1d2sY7EvaQV6p8VJRuRrndoTxCXjPmhvnbi3dnecyj9igpaqNbf7Qxt3qjFAjzm8HP9aoUXR33RMcaWR",
  "key39": "heAmSKBqK1HmuZYQ1jNEKxRJGc5ubSpNL61mrHfXvMjrkJD833MXhk3FPqtrJDM97vC9yeKpJw2Ko7djsESr6Mn",
  "key40": "3QoTipgCbtWFY5Urvok5untzH4nPaeehbbLFLJ2MPUU9n9pnaLFTpwUop8aryjkjw3Pn7CYaSa7tSw4dK8aRUEkX",
  "key41": "DTtoBfMYY13Zn8rT5VabG6yWCFcbJXGDFcJsKus8ZzJ1Ey6aXZ6RkoxN7SsaaE4KFynecP14qYTrVBVgTip8kTu",
  "key42": "44gcorNrNWT48fohsXMqEBymy1kQa2jztyuPGX1W7T9iMaWynEUmek5T17uJpjyWEttcDGNUed31Ku8Q1TyNjUPb",
  "key43": "5jRNJigD5cC78kNYLdMr2K3rfhp8znY2KY6HWfPMPJVV9PGaqc2cKJ2P7aZpN69j54qv58YAsKuybHyMCppKsoay",
  "key44": "4Gs8PMpqyjVqfw13VnR5rrW28azveJydMycCCCK3mwskovFUskc4dPUzkgUAW6kVWpJjTMeBbVTFLHVjTCw1oXt5",
  "key45": "5suoozTGXWzApG2hBKu2mBWUugEKJx9EdHrUWvtTgR3vb3F273jckqi41LQSpZoCtzCT8CzpcF7sv1Lqu8Q7RFrG"
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
