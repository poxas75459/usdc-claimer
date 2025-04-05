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
    "2VxM72QgP5SVhcJmeBqdtmEnNSHnxqci1SRnrzNeBW6fngr481mGiX1PmDRE8VPRox8rrF6HVnXp79TEqtvghXLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zyhhKB7fbqLG3AP2VMJn23acE7xUrY6GXfkUkLQWPasdxm8SwzA2YbFL3FdBtW4dTDxVVbQtjhitg9D2XBufSnP",
  "key1": "3BWwCftUHBapxBkSHxdqFsqC3P8Lr1hb9i78o7UWmEZh91tLiZLVtnXLCDDTG7PdYddyiCFuwoyc6mDDSjELWARS",
  "key2": "2aexSWqZa9uxjnVNPKgazSZgp3SbAQuBKfy6ZtK25oth2bRxKEEJRc98fFgWFXjjN4bzGfkEi6RxN6sVEhgf2Nh7",
  "key3": "5unbyPJryEJV8VFu2HvToiLkVpUCFnW4j4JSaXgkqemt7NP9X2fvfFTKi9qRd6Ab6iEKh9VyqzD7vpeZ7MNzSq6S",
  "key4": "4Fw3Hz8ase5NRHwchevfAqdwdyHoxdkg3WNJpc8JFoE7PoMhE4H5qedD7pM9VbiAsyTwMMKcs6wQMnUjMTMX3EWh",
  "key5": "4KT7N6ec1jD3TkkupsvAJdhKWFXp7vs9tUCBnStWViwJkDr34T9BKjrTLXjTQkEVJn334mdSXucNUka5ttVNA5nv",
  "key6": "67cypGqUVojMhFotTgkrafqyvb6KciXvcYzsbXcKYZcjsuiP5pDGQh2qQLp3GGCwar9idRPKtrtDDPX57wQHm4QV",
  "key7": "NpLFDb55pES5xMHtEjbBBDTxzPF8GjWpX53NeXTGkoLJW44mUbPQaB7iKPkFmtvuVeyB32GawXi5VoD9japeSX7",
  "key8": "QJvzC3pm24qUPA51oyG8sUrRoBUZvGSebB9pnaTJVyT5pzdYXU6eQrRxwLcLb4z3meuQU4FFAmyWKWgGnXtZkRX",
  "key9": "47JzY29wzUw7Bwtif1rKfNap1hp2iKvgZHdnekZnxHj7NU7YKhofrvQYdymFcpUaN6GPSyWdArYuas2wMJ2xMxSa",
  "key10": "3N2eY3kq63nPpwHM1qRK5WJAYr7JC4pssNxaJRGLXB8LXvAN8jWqR1BfvL5Pa3MtKAhkDhHbtFzznyr6M7JTscPA",
  "key11": "3xCai3MxSbiLeKHkDLYiQ8hAKz8hs9qu1b3aNjHBy1Aypphzn1VbJh8u7KYCti6ZjvAfRPjMqsSGYVB1DZcUidir",
  "key12": "2Pfhg84XKcrKxbS2HPswr9LXDooHEXgoyPeCsGaJHmXnTFQcNAJ9A3vx9YfPgyRPZvqKCEvyLNi5vf4tbY8eZWBP",
  "key13": "5pTa3eef51YTRvwiPV57NjU4RyqDAnBxnM15qeHowDZC2U6nyfgReQPF1exr4s29dbbJgHmHwUEb5QPUv6pGb1e6",
  "key14": "3H4p62EaYUFvg9wNSwGkPrz4LDBzEmFApupPon1vZ6r5Y5yGTi4FbFWDuhKpxqqYeyiSGBH2fPhTMhA58KuVERHv",
  "key15": "45cC1ujXEqMYyeFFSStTft43UHb1etSM7NAVky15YQRXhMNtbRY8jKtr1DDdJXQXm3cuxnbrH6Br2CqVtSRiSVDP",
  "key16": "5SuQrtu7MygDzKT5MMZq7SqmghBrptekDGu5AXwrvxMJJy7fYYcSKVK8UP48b4r7BLgc6qcvTk6vx3UdYqKx7ju9",
  "key17": "3ojTbwjvSd9tb2ZhVuk32QowM8M1n4R5v6zwcn7vCibe4nNDnTPL71QohWV9vzP25whG7cJBp9ZYHXZLmi6qwr7J",
  "key18": "ztTzwZ8p5McqiV4PixnENjZFE4dGypvy3L1MGviqNrC3CuedquJnjGxuh1axqGYtGpKw2vQL3AsPuxNEyLDBeeC",
  "key19": "5Rs2JQkefKxMXESG3xkDqmEAjF6NqwnX5nAE2rLydAnLaC2EFXq1nq8qe1Z6f8FShjHtEWy18VYwoYNA5XQEzdmb",
  "key20": "5mQsKGW4Dy9MmpWjjyea7oi6UqDbfNXo977Nzqzdvo5fEMdo159TDiMJMjfHbFxFmPLomFjNDvTekpw2kq1zS7g4",
  "key21": "32UVZvv4i5PmWea3JGFmNBJdP39dieFGL15kAuzcrsjHF79cUXxnD4JkVm7ezx5f9B4Lu5pjPVVVFrmtVZnAPbuX",
  "key22": "53DeqM1bKUiKTg3PjvNx5QQ2Zzj271YKEpwcong6SfLgi2XG6R71jy6fb1QyKQxALcbDgbr1znW6z19MRXrLQu12",
  "key23": "65pwBYFn5T4mPGGaY15s9NvUhMSACW2wL6pgL4ZDk7aPcALtdsNJ8C2AdDi4sU1bbzhSmQBD3KGHXcJkKeL8ZAnM",
  "key24": "3XsYetJifKA1FdeJD18Ugc1w4ymbtabu8U7ifsCbhyo1gKhxNjwxaNbXNMxgY4naPP2MoehXHYMv5Kdq7bTt7gBR",
  "key25": "2Qw1szUS6thk4TYSRiey8QBDa52UTA9rX82xNBVftschHn7DP6QKw2zjj943Z31kdocNpoYpPpAwG1JwMgRwtibi",
  "key26": "4wi2coDmHT9qbK1Sc16px2Lb3vss6nZmSdFmAVNdJij3jR6AV4VQjdwQmcbQF8fsNGVwGo4Vg4SVjEtbLynTpcdB",
  "key27": "4J43SFAgMMS91knJrhRJnQfLUdjv5dHA6heF3fjWnKBG4fJVjHeGD3eYnBnkjTSXDq5w5Ws8fix6A11mbUbCHkq6",
  "key28": "5sa6ZPD2DSvWt6dWEJXV92oWBMCMesfxMgXKgRXzoyDaWY2GTZwYP26hjrfiXfasAyMN7ELhYxcxsWswgJpvkuYy",
  "key29": "2d9vQhxgeQFrxS38LForrjxnERQq3eQEYkduxCKY3vzfnLg3PtLY79z2To4NPKiEtHAcDBHDccP8xRxUAbGyhLk8",
  "key30": "WPcBYymasSJya3kRPGB61s3dbEUZLwLieNmDXpqKT9rGndVDDRqPiM75Dwgj3huBjezJZt48QSM4FmRykemEGnp",
  "key31": "3eSRXLgwPqWuvFfwvS6Pcjn6PsQSxK5cK1aHuy1DyN4dyZCwue3uEngGgQs4VKxiJC9fuY8yw51Mr3nAPYmkGCp",
  "key32": "24qkAoXtMWz5VVrrV4PPz2z4cuKJWHUuCpTZixn7i3mQ2NAnbrbTuEaegjuRqDyk91AdwdFAdLUeojJtjDvQ3iU3",
  "key33": "4xkKm16HkJxj1dPswFDcdBExU4SwjMfp9MyVfQYEHH3mY8XdTGWz5UDn4J69swikJ8MLSbbi4tJ6em8V3Bz5CeZz",
  "key34": "4q2cafdmpj6CfG6HurxDGZxuo52vYedao9JWqdxeiq6uacmSQDygL9SQArS6p9WHW7mUHW2KMxG9xr63aKpfRHFJ",
  "key35": "FzqUvxWjSbsD9xScCpqKUD896t4DZxeL4WvasxvPafTUebwXMbEXMSW5nRBAJ2nfWcnzAbfrqffAcit5byARv1C",
  "key36": "514YXbrt4T8czeZ2QRVc2Vgi95GM7wzWfH6eCxdiMBgkziZDfnvLpjiEFUYXopfUUKiqLF7TwPrkBxnux6ytmRbv",
  "key37": "JmeDJDGtvdDBLuNAimA3DwUxGsmCcN99Jc4oayvh5PM2cU5giQHC8XC6KwWy755SJkbSvScvSpL8uNg6jeSK4iD",
  "key38": "2Q2zoyPbRjGgx4mwwuJXNrwNiiXvXjMK9o1hzZMyvF3b8xecvSHEmN4i8PRSWoRmXCTgrBWcDouoarQZFMet4WV5",
  "key39": "2q81pLEgYekPoeNWH3UoAJmkEFtGbtqGXP1MPKEzatwwPzv7fbVvTgJ6xKMccvfw9hHkUPCeWYd8rjh6AJqu23WJ",
  "key40": "3LP5AZSvbmHknBYuTYRU4gUxpYnZVRCHTNmixacdurbmCAS61Ery8mvHk1tkPjw3mHaJGcN26tnrJh8h61PhZs3Q",
  "key41": "3GdG8FTCQVmwmHbyyx8c1YgpyJt8etfuKMZhomJAmeiXCbVv2kKNJB8ocptyS1Vh66oUh5LpV47Hb8JtL1gjxxVn",
  "key42": "xW65PGUsyepU6Whvu5RpdEKYSYjmszweMXtu7h7PgxzQF1ATBg3WNc1dnqRwsC8jt4XAFJEQd17SgZS5x74oGwm",
  "key43": "66xuhs15eeGnx8rTwuS1cv8cJUadbsr2oRUTjp5Xik82gi9NrnaMkf8jxhPiswDr7fcyC96RthZSWvAFZcaUJxmm",
  "key44": "4Bwgg6qSD5ZdMC9ozoqWshWcHg9VDoY7w9iK95E654pCwUp915wSLsaUWcTiqg938yP4PrnDvY91xa5D94KdxYpb",
  "key45": "4SJA42A9ouqcs2PbTvhvy2KYC7sZyyx1CLFVnGEzRv6EZ5yvBoKKChNFzCQocSzZLuQbBE4Ut2ctg53fkQdveBbe",
  "key46": "5LBzH7LKTPmPAgqZ12J468RyRXVbHfKGr1d2QVz3PUDodhwqCE29AJpWESLhPdrAkbmnphbvndBGNZqNyynCA2C7"
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
