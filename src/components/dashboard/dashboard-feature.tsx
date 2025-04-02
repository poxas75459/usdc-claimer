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
    "5jytcMDpDWMW714rGDodTPcABqEXQfXVVktjZ5CM87cqUKpV417cD3XiyQtst7onfdVSiKXycYLt1RE8HkFphkiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wdHUSgbDh47Kp3FbhKJn2tBs8sxXKuzdXwbfZivAzURRi9wvM424Rs3DfCeXqDo2zV9HT3c9Lzcyr3Y1npz4SVp",
  "key1": "4XMafeqpPEsBtiDkifBwowiC26Sww9sJWqWdPbHE8gbiAENTuRPQgM3KuPzmAjBSupaUME6Ho62WSHVBf5HzgzPo",
  "key2": "3iHUi9tBhTQUAZkMwXodiGsbHLtQuFz6QaEE9LK79fEAhd63Vn56mPu2sANUgNMEcR5G89CJyVbfzwu5UNxD8bnz",
  "key3": "3VTcZ8Gh5k7yubzzgnEg5cNuJBg5ZhNsZrbaETWbbPy3LwsyM1Sing6Hd3qhGR9hjVK1kmGK5BBE9Tzx9XkQCciE",
  "key4": "2D7uDREiPKceYyJakPyYhyw1YydBC7GghfpKZMErEV2SZ9uoCk4qsY9c9iiGqvxdMChyBG3NWcDQSQhepow2PUq9",
  "key5": "4o1KKui7JuS1sQQP6v4TwwXnMw27e1otGUzdWQtvgsGzmNuCMpu3L1vbo6REyGou4gSF5S6cw7Sos7i9Z34Anw9K",
  "key6": "4J12NoPiY3PiqcES6sEeSM4ZnbZ9ptKdcpcjewRbqw9sk7nyFyeLfqkLxYEh1AQJsjqqg53kZFSWMybDY9WncY57",
  "key7": "3rMnuJsuChBGSxp8LgpjH6376RkZnWmLjKZuH1Hk2TdcbNMVXNTrFE445SeYUQNNhbKMKivD3izQK3U96wj8x1RR",
  "key8": "UUhppDTxqApyVF75rpA7G7i9iw37SY2RKaaUdBBuc9UWWQVDnvpD4JYb3fEo5hAs3WqzyTKstzcLPgBSQr3rTk9",
  "key9": "4ccPQy6Hm8fDp7Tum2jkEn1WC57VJUnRnAfSd755GzYdo45tm2czmmT9HqTocJwHonex6n44EWRUXLtoPQNqeGsP",
  "key10": "4xyLJ9diXY71YFd4cmFMvsoEqBy75nJ2LWwq5CthHjH28HJYVzpPUQo1LqzLqNcq82AS9rNxqG8JSq8UnyXv4vK1",
  "key11": "uWCrUU5i5bqYQUAxxM6mcmtT5oUezacybu7jEx8LsEQbTYrur6fQ5n5vLaPGZjipVxueZn4qLH95NKhRih13dhi",
  "key12": "6TpywVUeW6VL87k1TrhoT2RbghFjRGAHJj5sYQzjryhHRtGmSvm6wW6zpJo4E6Q5wBeKhvuEEDh7TvvpAPUnYRH",
  "key13": "VvM4DzfBAw2NN6G2B4AEBVxaNyc3p2NLHsga2TMjLSEmQZQp5gpk4V9eKe162u8GtveAH87N7u1TL2RWHboGh2e",
  "key14": "5vwDVguGKtSRPMcGk9avuAqqq86jExUVTTdi9hoetk6zumSZsFfX3Na9Ln2qfSWv5kmp4MG48hunvqiHPMJx7a6e",
  "key15": "2nrhYhyYarjkFWwdsJ3BcQj9jvpNUQ9gDjC7Q9CrdsmYRFEoizhUmgqA2CcjcjavENwSfUBE5xZfhZRaKMQ2jtbL",
  "key16": "cLDLERVdTzikQ468zk9ouoCxuw5yjso2KZfBtFRm1q6UCSg1TaoiwuPg3ZNoFzX4fo9dKP7xgXZzfDdRGqS8Jz8",
  "key17": "3ZtnTY1VofV9GxhxcvLrAweHrW6X1N8pk2uAS3WqQPEMgfdJFTLdULTxQXmFNr8hBuKCZakP87tMfa4NzbZuz6A1",
  "key18": "5c9bEuYQNzT3p86n3mZCNLudyq2isrjKaHPfztMsto7fMReDyv9z1ADw274iiFRqFuNFruYHwuPWZLETjZtwNcwK",
  "key19": "WNqdMiwA6TpvpjG1AJ3pwxpATiKVuxbijiMaxBN2Cut9z5BbZYBgoYYnoiwLcjFPw8NbaavGFWCUKVTJn14qdgC",
  "key20": "4oTVaUMtF7EXXSoBjBD9qrSoQEWBEb7gacGFKEiPAU9uYW81ZQtehTRKfnG6Y9ewFFSnGBkmw1sStm27bdJYRBqs",
  "key21": "5pTaKoH16Y1jmfBPo2FmMqvMXUSHzJWrS6PzgqTJUrXkBt1c8KgiCgMSbWEgNFAkbGZ1vxx7Xb6bfaAePbigcVVN",
  "key22": "55gYSb1QwuHD3wtJQw6zBbJTrFJHtCCP3e42kK8kFUY9YUvByDDF1HmzqbEytey5D3h67K9PHHyMXfk2ny4XQmfW",
  "key23": "3msEDDXd8iJYJNkBcutS3cJ1aHjkLiT4aMCgfMhMiEKKT7pfKEhUmFKTk4UZwVPJwjmnd2DmJaTL4rTafbzVev4i",
  "key24": "27L7hu8GtWnNr8Yb7TJY1h8tUb3cVG2iQkzURrS2mi6NpMYqBoZuMUWmHqWKPh3rZzARKTT5eLqsnyWQinfnwae9",
  "key25": "67pPPYCMpCoTkkYNGscyuE1rd2cmRT4xVGxJ7Z6Non1HNukJUyAqHN9m8yb19mm6f6xcNmAs8tgtm5JDXXDZGCsf",
  "key26": "5JkGNCMRx3dSN4baG6kB6igYmgd5NFrTqNBNez2Bqd1ZQY3X3UGVe3gVDrKH3j5SYndukAH8sPQM4ogmg7Cy7kH5",
  "key27": "2s3no3DYrM76obcnK9fS96ZFaPCTcGLTwtTzhJKqEJYm35c6TCWhnzksSeTEKpFnGfeS7jN9YTkMNNg9hY7ZFQ2A",
  "key28": "4Ms6HWqgDdHQ4Zj3cMNrLrMhZh69pLZnXjVNYTNAzCs7nUdvYsL2C5V7TVpfteMUc8azapsATXiBBej3HYC4UfTm",
  "key29": "5tuNHMyRDYLqH4uWBNjk17f8XiEAvrk9dqPqJexpL3aimHt9qwsnzHa9vYvJ7SJ4FpZDdTjur8xWFodw9WUwoVF6",
  "key30": "3wFEUz6BgRZd8znWcNQBsvs7J92MwaLzCcMgtoEAq8QG8gngbXzFb5dvhyqJM9qias2qefM8x1PDZ5nMvaLDqvS6",
  "key31": "5kBokxMACeD7Bg7wzvjP9TaphpnZbhBULteSMWpvnyhgEeLhUvp4XhALeBEyCsGsfesNgr3rKSEr7okqXoKH5QnL",
  "key32": "3qwmPgJcs8R3wNZFU5ubgJ5jzAENsn1fsVvy7XiP5HLnDmAZsFUJwWvAum4imXSTuzJwkdy3TbnPPDkuUWHc2dzw",
  "key33": "5NMhBuvG8dcGDMuECUN7gPtgCArA6FrhRoBpGPMtSNB9LByXNVMH45HZZZeuom1s1hASv9egFGSZHXL4H4QtJcFe",
  "key34": "41cjVkU8KuxTviVUCVkiCoUxMpU6w9invo3SSakMUeXsTBxU25DRXTvs8rGrjoYjUA9Hzku7oCdxwekVvMBGEvfU",
  "key35": "5X6Hus6xbd5UXw7AVduMp8oXAv1oZVSam12D3JLsRPKpEKJKr1dkz9BTnctY1znjbV44CEvbackN3EZZbF9tXkth",
  "key36": "3ZYUwWFwdUc3yVg9o4hRbmWfYWHB1BX9DVqJ9X2c6KPRS62n5NZkChRk765P9Kgj5dGNgiijrVTdS8oNXKExpnPj",
  "key37": "5J9WKwwjnkbj4ZjrYzS26VCqYXUm3bPZYyzgf6u2PNVeF6GeYi2sBX8uGFk3VjyqhaksA3qpCfkJX5D9th3v8iVo",
  "key38": "5oxRjykmmh2LKbTzyeVjgrSxsXYzD4LJs2RTwX5B3dDswWEuGkq1qaQU9YQmRjECyu5mWfNf5PY5DAMXWjz5KbvD",
  "key39": "4n39mzbU3ZgbvNUwnYb8nsotUeSLSic3MXVAeQ2zzZRwHSN2vomDnxDjQ2bn11zW9kR8d2Zat7Kzm8ieXFnvSvrd",
  "key40": "Y4RFwaMqweMsHWAMwCWok5pVeM9Xhaz9aUnL3sKxMVYmEcsWsMvijFuUfuFdLSHBt4V4A5P1GoBpqLk7NkFkNWN",
  "key41": "42m2WCAkSN9qbVyYmKMzQ6ZwCdTh6dZLBbDn4oeYXjJHaS17yuVz4k3crAhkH6Dqgd8h5i2hcuRioJGMHVAN9HKw"
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
