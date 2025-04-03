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
    "2QUFBrbF4W4WZYskTvBJL6vSdthSSAhoWScx6Yk2kJRx5NqVtC5f47U3hEwXmdyXHGNzQ1bNrudy97fFJ2TXyk3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h2VzKoWTCvb5dxfwMVsh2U7H3WyWRMqJTihLe2z5xLwe5neUsWcLq8KFF7UvJxC9z5oq8qqfENYaECUQM9Pzyit",
  "key1": "4ZtLtssD9uYmVvS1x8q8aMHuW2Z9z61DuoBEZNW1UuBbwZKKK6fqmYCmp9v9cZHoibWwDyhU7a1qPRbAmNtXTiL2",
  "key2": "39yzg5YJkgmhWKynsQJpY1EvFdDTn2uGH3HyPZVu5dnfUDQZNHTRP8XA7d3Xpag2hEgQ2iz2HtgB6mAupME58jcE",
  "key3": "5otDoBfBSJbeDsGxkz7cWc49HaCV2fhKwXuYHeKF7ASUvNttjhhc1x5DmhyuwgtjzCeZeyHyLpVxG5WXnJ8vdioL",
  "key4": "MjJpb3vxBNnS7By1ExStSfyLcKnTa3ymesCE411gBRjoUkQo9xNotwTmynYEXXMNxvdBeQJSuXxRw89sgyawZXP",
  "key5": "4AdGitVCBKdTVJXCQJfN25T6D3TmXwitzawbz8PWiTihR29jtfhnDrPbuCjZCjjwQT2otmEdogzHejxop3pam9yw",
  "key6": "5YjN5aPPyLzGRHqL5oaUyuq9cve4G9eXoCLyop4FbbG1SC6cinSyhQuQo4ey39Pb2b8873414R3tcdtmvv3Xxegf",
  "key7": "585tGcXDjvzT9oLhMpAXM4mz7gAWfwzU7DkonJrcRSGFwSTBZJVTdiJxAySjucAeUe9f2To1qTH4HGWG5tkgJZN9",
  "key8": "8KNYhMD36aRSj7rxKjigpo5413CjC7jrVPopKYBHeeBjeBdDfZ8xxUJD8kgRJMSfQ5D4EYX1uX9fkTPT4ET5A1i",
  "key9": "4B42ids8b3DP6nV162LwgQtkM1WwJUBBFqehcaDsetCDDoWUW1zWaf4kW5HkSzHmhdpgohP8JerrHM622Nne8LPq",
  "key10": "4CgK4zGPQmr8BURYR1JovTHtr2nSXyfvX5KuZSxp5zXSRkKtExB1gw8NzT5dTrCXvaEw2skwyp1T8PQLEHoH24To",
  "key11": "5QuJBc492YAdLYZJGMGYHQpvV3GA1nFneTXqTv4qJKuWJCF8JJHVHC5cE4VW5HbRqdctEktn4PUG2muGGcWfo6Z5",
  "key12": "2sHLwCJqDkNrRHjr8FJik6ywMWkLaUPQbh1SojqmozB16N8iAxS2Zc3UwUVnL7f65mA9Xv7uqmsLwL7ML2Jdx4Cm",
  "key13": "3HNiEAZf7WQykiSZCX5BESc9wyBdeiAApau1pD1MeUBjGmVpQx4hc1w3B6yTu6EJxg2APwpur1hR5TekF85DjqCW",
  "key14": "4XtitKCvrarGVb9myXAiMT8BRMD8TBMcSoNJnptMxVADH2uRmrv8r2qKxib3unwrXxENHELnrJKZ1RXwfAKZZfE9",
  "key15": "3ptaTEnzcyTcHYBzjwG8kTs3kbpP58FzJRkXrP6sq6QwajGNjpT5vZwokeCe8vu6U5YA3dcD8nQwKQg4RbhEtiG8",
  "key16": "67PYe1npkp1cJ7mfy9mo8wCB49mAbvS84udkVZdV7mSoD8xNouNYNfR9582Y8tUsneQdayJ33uqMeHg5mV3qq4h4",
  "key17": "5bS315eS2H3ctSj9HA9NGoiKpGXgJx91MnPQb3wcWMbe2YJL9mLR4gfuZ125agJgPLoj5tmSeKnGpLqAy7233B4q",
  "key18": "5ciZgS2Q6arsKLKqqe43GYKaj7AB3LXncwJgYRuXZNRksVfGPCC7rzVow87MfSQSjY3PJE2jEvu4RHMfuYxHMN6C",
  "key19": "4XoAkMf19hkrPmVKV21W6Q8nSd7qjvUxby4zMPTs43KG9GNhwnrhRcrfxmHoqrFt8Qq9gHFYFu1casJCR8JBVG4p",
  "key20": "2GXjQPRuPqEPAbjkk8i86xgpVjZQHaLaBt9G3wcJDyzPwhWbe2HfC58QwAbYQsq996cEbvdi4JpfM9xGdjxsdSzV",
  "key21": "2f9USwRoq8NWmwnhpx2D6891sS2wrKiX4zB7z5QWdMAFonZDRbokRScwiHZmuQduRTtKhxJyKGxYSYVYbnRumtN8",
  "key22": "9v1rQt6WekWRfPX1HiNPDd2Qpr4tLSAKPBMjSqPCVBYoG7V4UPJKPUa46arEoUrEoH3JCg2STdaMXzuUkHdugV3",
  "key23": "2sYZSQ9b4NZSNwpJCaa7wM19XHwEoFT5c2T77Yqy7yNskk2xf4XTa8KqLf7Jg7FKz5NxWagCHJSJEujk7ntMEwvV",
  "key24": "4aaniNQW1dgdpCEtmYg9GjVbLRjovtTjJzqsRCv5a7ASdhreDKt1N93rBBx4xNhn2J26fdC1j7AEnGoPLbHC3sjW",
  "key25": "x25ut2a5TvsPvnWUAJmEHUom6gaXnVtrcDJdUPA1d8pa9cQnvxuuckte3fSPyJ8MATFqUgFmCJEsPBZuKTW8e7H",
  "key26": "5AVYYa4hSGvyaiRjibjZyzC9r3SKTTciwnQjxwcdEeMR9eVwg4EE59nL1NeFBhyzkVcw5AU8LUBEyUQetFEX2Sob",
  "key27": "oajz6Mysugc9PtZi4JmDUq1XWk8XWXJ5j4QNAnG4BERMcPXBHUSaYmGKzRssE8f9wcm722sg5veCsYXy4mxCUP8",
  "key28": "pFeBtZ35wAaotuaBfKkqaA22Su3FtWP2veVFGc5y463fbhKd3SZP5SX2WuRJJ7nbjEghxFbDAice6e9jYEACYWr"
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
