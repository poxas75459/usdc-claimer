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
    "4rpCTixCA6yyG9V7RaxHVPD2o7QWhrhXBuyjihYn89PNDCFMnHJ5Qu7697Ep3nYB7zieQLEw2q7biawEjgWdAe4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZpKFa2G3MjVQTKQe4jnMEoCgXH4x9U7AHzmANEzoR2uK8nuJf3CpPVrGHQH9G4zSxebQkds8JvPRJkd9Vaaaev",
  "key1": "3Nvpqsc77jX3twZfKUBV8qmuv4dqB4h3gLdNUgghYfDiGwJNJqyuf9XZkAj3gmjyh9kAHAobegHTAS5LFqiwYRYU",
  "key2": "26jDB6jD967kMW5PoZZLLgR8BkYuhzigHDewo8NXbGARRJbgAu4uQASwNKS4TmAtCosHYC7UJ1T9YTsPPeYzRbFx",
  "key3": "3qRd3CY2rcwC39RdpqBiXH7w6kgrwUwGTyW4MTRHwqg4pfk6YxdKsgMQrNxjhVpZeo5fN1K17ovhRuTaymqD9afh",
  "key4": "KTym55vpbpR3bmneBtqC2x54pqdwBvmYaX3FkQVRxJE9nNZiF4u41pcykqB4L1hufRPntegN43Q16FK3cGHFENX",
  "key5": "4m5HAZPyuU3vcXDuXsTsQ8gtHLexDpm1cy9igcEZQ2YhKSRRVB4QZZQVxmYeHjdKBaejb9CR81JUyXNJv2DeUZFA",
  "key6": "59B4AbNGRy7tvLoah5wKT2YcL7xXmFXGBZpkKDnejXc669SvjBRhtnexc9uFbzAgEHgwVd91xQyw337BGjvUop3K",
  "key7": "5NpBZCC1mJpv7krPYgf6kTcAkZ2UtpXJdSvh4P5vUiYG19gun1F9X7i9TsZYZH8Kp5BsvbzHDLpKk6LmTa6PaG1d",
  "key8": "21LUU3UFvguLSH3yJ9kf47eb9MCU55y56SNNUckNihgpNJqbJq34rarUYUh41MPP1qDoPBAd7nA2T8uMVdCjs1La",
  "key9": "4usVKy5Ne8XxeFSYwyzKJaLXznKjXS38iLcQs9BSNHmKxr3zE3HFGn4UoGbWJvgwTuh2Lb6XytxAauCRHYAuz2JL",
  "key10": "i2wpzmG1NkKko9kNqGipkkigedf9WgFR6BMEefsE9BLEs2AhXoeQNAmdJdvz3ZAAy1pgJXdYqa97BGnPDQ89oRo",
  "key11": "CzeAbp12vWyzrf96JeV35Nqbtmpj37gJSbMxs13P2KL3D6jmTwSFJ5RRWKxi15ZXgSkrUvN5ctdp57URa3VqHox",
  "key12": "3Vuh4HQbjvi3Fu2EYg7Nypxy8D4fTq1o6hLXBgmNtJGHQkLpCtbQ9zgmHYGhmQwoV334zHJb9gG6FtY5LWvmqGeV",
  "key13": "55ajNhkea4SbsvujNeyTKNiPdDTB2hZRu7AiwcpMPjVicLVy4d4gVgwQmue2gMckjJQzCK99smA3xPsGe6472LgX",
  "key14": "5DmZWTUAW9Gdm9oeFLAbuNvAJdKizpGEP6eP2sbx6n9TAyC4NFnyq546qGupDADxA14Xmrq8LKvgpoQP8J2VdgRe",
  "key15": "h8Gs4t1yeUSv29DVxwq9P5krC6F9h5SzvMDwLKsQUxvAc3mjs1mzSsJyqRYPobKMV5em9sjX37hpRHAueKVhrzw",
  "key16": "4ooerDWreYR7ZEkAYMW1hpQdu3zcXvoFxHEsSFj7UqjGyTN2XP4ApjEfj17XtJ6wTwBjPzCqu1MFoDxAf6DJ6EEx",
  "key17": "31sH3LEzTNHTuBitM7QtZvK6XkPqHdSh7pWv9c7xBXjR3RvkjsYc8aS739vGL61MRkVF8HrcMuQmqxQasE8H2Cak",
  "key18": "2jRJJmaRGKAJze7aAtk6srv3H6ZTD7Z1pqVgSB4DY3gUPB3XHPpdMNt9K6krQj7wRp5VyAZCPkdHxpNxNYVfWtid",
  "key19": "3fGQigPXD7ehBeQE5XfPrTwLDdG7AhoTNX1Ms7zCEjx2QFVCQcuv5qMUoHw1frHjHU8hrKfXFcVEhaHBAkUSwiXr",
  "key20": "2JdFvcxWvheawKwf8jeKCUtykrjXCsMnaFhBv7qLbw68eWfejaC5J9vh14B6dG6VNrUqdzm3PkJ8VtnMEkAQRTn1",
  "key21": "3T48y4dmxPsuqJ3UnLwhNHWGPrkDDtQ3TkVFWYvN6ywc6n2AEmieVRVms48vVUuCxzemZaB8JATEgobwP3n3kmZp",
  "key22": "MJfZNjphHjxzpKRrUHaN47gnswv1WkSMHLbPMqzncBmEroUMoPmUpSt7v7feqYg2f5TZ3UBf5JhfD9WsS9KiWEz",
  "key23": "2aBugYuLcfzLqnAxs1PXXjmQnvFw16jB51Fzt5WpELqJianipPz4bHtE2dHyhqNWjqGpP4ktbDBEDGcCoHt4PnSQ",
  "key24": "5s6kPVBPEtmRqxuT3ANefWcPPVdTsRDz43T9qePfsmjXDxUTB3z7pXKYm8eJ5ZsCMHTr987vwPQDSHq6iU4oqhU5",
  "key25": "3mLqQ9MnY8Zbg9wjWzWxk3VT3Tmwp4xUmLp8UxZxywAamXRXj7QGkgQMZv3JcuDet86ZcCLuBVoMFv2gyWgwX1Eg",
  "key26": "29VpRQG8CC6wefg7A4JNUGjQnoLjkAQF8xqk8APXnfPZTDgwDq5oWp71VioG36kZQjZ5ccqpPMDuZujCTf4p3oia",
  "key27": "431eBT33LafkuLL7yMDJZa474wiNnWdoR2qpx5DeFizFiS5hKpiWoTmuhUSQEoHmoRMyajj7d8DdfQ8nhSCXh1oy",
  "key28": "5bjMZSLSS4A3kPkoyeEQvAW1TS3AAtTRUCmGLngBExmdHNUYb3W4PcPffqUqMV4Ps9oVv5kiE26xuYeTWezBfBwW",
  "key29": "4H8vFyw2jpbf3c7aThA9tdTSjSHTEQD9fBcyZzadaQrFqmqjqktpqkR7EDJu1Wf6DVakJzKpVmBGeJ6uzWnB7DtE",
  "key30": "2oX7XCyzHCuhWiLe6QMFa3jVrFAJPrSpXywUBYxVgyMU7aaXLybcEoRW2W3k9f56Pnfs4j3f7Mtig8QSZ4SagLPa",
  "key31": "5wRtHr8SphRt6DrTonYoggySg5R71xMekvHQxkMV7wFQ2cyQUu9hCdMzFgUNqNrgtt1XXkbGQtbd3QvAnaZSVEKk"
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
