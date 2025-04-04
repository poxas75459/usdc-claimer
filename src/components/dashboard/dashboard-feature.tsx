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
    "3jbFPs9vVcpFRoyJbuAengpBoprmYPpeifFHrd6g89EpuVLee7pP8KArqyD9UM4ZVfMFwGMdEDrixeKBirAmvEhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LdkuWsgfCRnL7S1ntvGhVspz2jAyJvkJc1cZpB6KbiT85sPf25cvYvCv2KWgJ19XVNbGPPijW3w4qdiZ31j6E3a",
  "key1": "2weF88NzgUune6sKvKWUCzm34aZzMoVmiGxYxdV9cKNkPSwEX1o7ouDSwLUL62sgrBgNJFmV4QYXieeBNY7HxAqi",
  "key2": "2Xg4esQf6kxKHtfDdbXV7uzgfWnCT7spUVTvQqu48jZxNxVNhs8VZYiA7cy169Nh3CuK9j1pBKxznT8vuSiQXSh6",
  "key3": "54GeYVg8S1X1SqzCWtjA7DGbTVCzdHsc7CLqtYJMYAvkDEgxTjNwtCBFimdSw49MqHN1EnQVcmYddJYAP9QRyBJg",
  "key4": "4Xq4Pr5V3dFPBUGkEoCuGVyc3pRWJHHh4KrrUcYGNYKYkEnWnU6ZLYtCf4hvraRzW1MpHYA3m3H7Cpoj32RGQCff",
  "key5": "4FARLLNTjtotFpAaB96jQgSG6LiXSnobxtaMqXjwXXYHHMGCDJb95T8xq88yKPWqqzKFDwozcyDbLS71gThZsQry",
  "key6": "4TFJbnC4dkFPvjxcKH9b38KvnWkHbrzKBJsyETQiCRGDCsda1b6m9xixEuK5FYu4rVfSHjQzVBSskNgeLQCAJqxD",
  "key7": "26Z7Hiep5NJz2WpnBQDvs3xH7P3QdfUcGNXaZkSNHV1euMkPAUV8zky4moxh6c373BcZBm4HPoFz84YextCaph4j",
  "key8": "5GJWeZrHtdbJbLzm9FnSHcNeRdhpXo6hHbxiXTye7oakEyJwTQjXrerMVnyWGw2Em5THGmqyQ4hdNKm7xUowpCbT",
  "key9": "X6wS1fLBY37XzPgEdPr9q3wcXkbcDp8iSxRuSYdhwTtACmB9fxLM33WRGLM5GitCjg1z1SYoyHAm1HXqNvcgPhq",
  "key10": "3TmUkXUQmUvi5bHctGxStqoPSp8xxWnAeewBHdcPKqrwDedryxoSAuy52as2ZHSNHtJi1Qdo5MCJfH6aXumTWM6p",
  "key11": "Ce2uGxeyBiRmbsXbTUpWzrfi7wehrUUyzust4Hz9x7cQFj1uLYRMkhZkvdpwjwNx8wcsR3iB56UDC1TE2r7oQmE",
  "key12": "fYfbwazvDT71Y19iFfJYjpTsvU68WwuJ4kJJTVASrRo3PJHcoZyGAFVPzV4pWDcV49ajyRHUNQtXJveWGTrsMrG",
  "key13": "7rHzYaPtFhKJ2Ji5qGQnXmuMxYDUgFsHLXtZ7iuvchEbozSCi3gMBCFBPBYdxnMyAbH4mcu75wSKv8rJAX77wNr",
  "key14": "4Xr6sTTT5KxWQ5w25C8KcD5ygGRsFTEVA7Z6rE8TvWXmsdhrGcrkBiBUe2AgcJcercqCErjcAUNBui6CcNSpjv2X",
  "key15": "2YaGSnbW9oDz6rrt6EzV9k3HqR6VSt2jrB3Q1CnoWT9YgeMppuVH5uvZsYf4tZuKMySayhVFvrKrdCr6ijhvm93W",
  "key16": "5939bft7qbLhtVcKvyHgBxuoLYqx4NYbTTKM9C1zeLrgJUZ9a5LRQo8ydK9NGzD9n6ztYB2suuKhfYZY2yspAgon",
  "key17": "GBrDR4mTfcNyuWMsGbcsDrcNypEBkCBBF2wEBE7xw1axZu3VdpLC2cfbb7eiK5Yzse8xd5FDSE8RjdYxQJ1Fn4F",
  "key18": "pwg5VgZUg91kXrCvGyCUe1wGoxGppo1tbRSJKaQQi9j3d7GQUCtShLRCkzmHEekhwijyu12GUYX9azTzpS2QC9U",
  "key19": "4wfkcLuKRcVRT3xw9sZNBua3QmH4Uh56SA43LHz891DotPXd1sKTUSxrD12eysJ6Axh3bvtrqMuTu7jUntGbMJfT",
  "key20": "48DNGmZ3F1LVNT4s65SD9HCCXf9B35LJRHN2J3FfT2Re85Ra3ZWyG9LsFaEtCwnnYCx7iGE7HNy3MKtYQviEmUUo",
  "key21": "2r43qQupyoxuG2z3p2bLjqxsU9pGmqDwpNG1Kt4uKXcLiq66dvwTtAmrva9qTVKcefqyrncdJ1KvDhTE3hxXCFxw",
  "key22": "2KR5qy8s8Sf8E76VsKUvAU879K2oRsNLSgbpTdvpJjpDJuZvwAaGG8J8tbAgeooFkMLTMh6VwN1GuJCKmSH6AX4C",
  "key23": "RCPvtBfZFGxdrpW3D3btXKoMidqiTRG2V6MpKJ47rPq8ar36KfaftuVhRrEGTC92Wq4ztkdkJhYbkJDdGW3qAu4",
  "key24": "3quVp6Ryqo7DpqgAdybY3YBwHNYzD2G2EBGGBZGk97jFfdqrRz8bU8mq1GLtFuw2kmk4drJAwyN1TPBJxvnrCgvn",
  "key25": "MNmpFpYummsVk4sndFD6fahSpBhJAriYzvt7XkGpg5sPZBS1pJGcwuyTuataz3D8mMtiFakvE9i1619gtNrNxwq",
  "key26": "4QXXe5c4Tijzgq8qGgjmn1zcagR6Gn74oqtbkPN9E2Pwbqo7WEtvJH2EQ74jx2fBhq4jDQYBwuCtmHjAMWm3KQr3",
  "key27": "4AaR7DnK8mxue15GsCcP3oSrDk3nhdLSWzTDH91Q3gAEtLzzYsMAhaFLD9DLQA7xJP4reK3ancXdVrw9tmwp8A6k",
  "key28": "5FxJwW4k2KrAG4rwwqaJCgMjPkTf57pGNQ3fagtAurNbqnrBRWmXBANLXR72ACXi8o8BC2ZKWsqCv5ho1jjKEGtu",
  "key29": "2aXsCBNs9wfBypbt7n7WmhVr75ubPw3vSMiEqro8itiTrgtN7M2vL81bPowdzJ7zj5U8hCcV4UaRdqN1AgjgBXiW",
  "key30": "274gpTRzLJ7yH5VrG5SNrUgZcFsGFsQX3xvuFH7XY9BSGHJbtachJMgyJLYR9sw548jmZxJtojA6BJefaWjeb2UA",
  "key31": "3dBpPqqVh9u52upEfXEKhusWiX2QPW44Gek8v8V8j7CcSt9Px7ne11M3eJTvwDjBsasYb4UxQjfZk7GcCxJdRhsX",
  "key32": "1XWAFUPZfENc6cocm9oGHz74tsniMbYP8VqgB4pEiQGEbLF63tfhjFFozhXecqMX6MRodrhkAH9VBQwjzL3y9JA",
  "key33": "o9Wd4xrmECGAtmNDqk4SpedWuJyfknXfcA3w2i8wEiTHAVLfKmEvB5dumQ2T5R8amuXLXxkbgxXEtX6A9rvbbfz",
  "key34": "79ag86EF4upjsjsaDrDC6RDBSMrNQSPUcE5jgonEUkRCZYT6nXDV7YhHWySpHW9KhN4RXzinJYJAru8G2PxAh93",
  "key35": "2kTxnA7TnmEHDYXUcqys8CMxHWdf2Zcc26hzaoAzJwRjYmmRHjgkhgwgo4LqriLapyzj5uXAiWv5xwqCazRvvGSJ",
  "key36": "3pKt9MQ78jrJhZarPY7C1jYYLn7ue3hb5c3ojDXzt2C4W2hGzqKi7u847XiWqED92Hwf3QFkBhcVBYHuaU8uxvdk",
  "key37": "238htjcVg93wwFntayK1TiVkpGPC6u3D4o2v7Qt72eu9hooVErLTWEsB717TwRgh51j4hN7Hu3D9Pv36F7vvWf5f"
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
