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
    "2W4HKXsNuWhEn1wRb39uTCrcC93NzvjJUhtJ2remF1HpoNgGjGWACCmYuosJnQwgxGK1EQ7imQMCrYD7hSsQcTrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mjtwN8z3FzNYRcFCnXyi2P65wwKF6dCCfFQtEzHXAd892by5JnmBb4dqRi6XLxoVtXE9zFj6KwT6fxCiHgzqpTY",
  "key1": "4f7DpiTFf5B8EFcEowB2s87eJ3VrLwFSDrFNeNHXcULGwHrZgPf7taecxtgWrwizRi357DNzo46aRtwfGS7Km2DZ",
  "key2": "5E7awGgsUCYVaG1BTFbsA8dMkQ3QuxfAS53CZ3dtzLEEA4arjVm6G6S8p6vinez6A6wKyduKG6Gtf8W8iZ4fH5iA",
  "key3": "2G9jEaV1p853K2rZBoCja4ymvzu1K1RVYr56xkd4kdEPTJGRafxMArmVd5L5sX77682CzXJv2yMyY22PkRE6rcxu",
  "key4": "4cso6fuCsEYsa7mVVT2oKTcjuT9baBRViuH7mHwAnt6UqLSZMsk9MBpyyX4egR1CXWjA4z5oeLybXJUctvWFhwdc",
  "key5": "3k8dFxPhq4Sqh5gZYycfEnqjuLtzADZp4DUceC9HnXobLa5cBtSymuUVG8MK88pT34UUpFNPTyt1iJHtS2Rwjei8",
  "key6": "2MikLQ8QXoerFvzkMbscpkFYz2w6rjJWQoTiXpvUYpH1xAswHbzx9VrvUH3uAmtBTXYNPwvJuK7x9gd2Jem7uWHk",
  "key7": "pmkJZjG21Bx1sr77rHRURy7AMM6Sjh9mzoA3zrTwseYAUpyo6ACF6mMpF95zQjKZmCEYML5eNMqA9HAD9t7PEK7",
  "key8": "4iVpEYFr7rnw1gtQhJPZwHCo1xb7vJXg5YcPiDQMd4eK62VLupYRsevPDJssfRcJ99XP9sJ8VCdaX9cfpxWHX7S3",
  "key9": "3iBav3Qn1kbMW2asTrcpM68TD7NB6vVFsGTwxdYnynboxy9ZHrYUh2KsCAL3DPQj9etpasfkhiw7Z3CTcnB78j8L",
  "key10": "4P3M2itUcPPdDqxMsn8uH15zVZC4cVXVApxjEwqEkGjN4BMop5uvv2eohZzRfXVJiihcq7tRtAny5Ka8hX1RcpC",
  "key11": "3Ln2tR8e5ja2s8U2sZqHZMLoz9rmHNMu5pBmJXS4MmHH78y8hhSxtENLLEBTMZfzwzQENbHJ16doMP8fvbvJ8qYy",
  "key12": "BkYGFaS5PhtGQGXacUXCa6xgJWMCQ5C45HL9oLujHawtKzZYygzVJzLqRstbhme8FeF5BUk7U5t4B3EZ4T9BFhh",
  "key13": "4ucn8JGG5vPiUxeJx7bfrTaqnYPquve5neQSviFk1svA2zsHEUbJWxzkc5B55NetwGRGP8hoQPmZLPQpkHK9jTa9",
  "key14": "2EZ3Bx9LkBaV5dzV5bXHByThRCwmE2hwt6k8jefGzpgMU2rZNxbczXpYaaN3gwLiGP7Sk2sDUeXRo4A2XSpM2W1k",
  "key15": "4rRgV3KX92P2kDKtgPxEpqLRemo5mshXaRBDmD9U4rmdB7S7Jbc2VDo94CLazckYA6ckcxjd1t2BW9nLpuhWEWV3",
  "key16": "36gnewWa4NhaAP67Bk7ouwRW2wZjqbodfYj3ucj2snVvJYLzTotqKvSzMZe9PTuGYS7QfXfQMP3ia8yoUXvFcejh",
  "key17": "2AUuFEzfM15NRBTDuyn7oBdPX9Te2ConbBPbCvzyD9KL93KCrqGjtM2zyBXXiwXZ3nhiHizezuSMbQumQdtDWkY9",
  "key18": "3zbw3Gkqhh4nUVB761PhaamnJLouKU4NXM22BKi3RwbdRySSdakmRPQkJSQPiXUfkjYkd2CR3zZpWwyDJh2sw3X9",
  "key19": "3Hs85ByNXHFrpqVCiNLCMUEo5chCygh2eL6oKJZGXuBWZ4SzhkVj6riYqZuEJzsSYpw1739BUkDS9NkhGfzV8gSL",
  "key20": "h4upL41arrii1QWzhcHDfgmuW4NCcKmyZ5DZut1bg5T4cNLkZ9MG3YggjEbmcGZ3ZpzCoywkGEWbugbGwKi3dDq",
  "key21": "3uXeNVrfxiR8kxZ8mU7upPX5Mcpa86ZAkK7em1YZhJbnWrKTLJ8UYwt3CKNgfnrSgjUhLVZa1iaaXB47a5MrTbvQ",
  "key22": "5sEYz5mnJePbmAnQV87VU998G6PU8MBzZttezePG1HcSN14eR8sQuLEXdzbAXRVzAYjiXXVXGKczzstVgzvzdW4s",
  "key23": "5PUaLcjqokqsNUmS7LhgM17P3uKVR5oj8rD9dMmQSh7YaE6V5HfxKNG1UbakufSQKCGjnT1b5NoWGad52FvLCpyw",
  "key24": "5obhobETeLnN8MarxLEagF63KKJyUPMcuWaNBmKumcJiw9H2uqL4obDHguYyJjkpayvZecWcmb1q6GychJJaJV7f",
  "key25": "3VTeY1DL24mtx5cF4t8E6FFN4UpvYMMd9CoAFgK5xZYGhkQ8Hsx5iysRtYcmEdahxkQku2CUmdYiARiiCf7rJCYU",
  "key26": "3n9mWDK2T4puFYSst8V2QoFXhftRVzjUQBybzCvG4EUcirBpV3bks4vgssdfMZ1iuogu8DBQQxCuEePGNpgiDpnn",
  "key27": "2yG37EchXrcT1epQVvrjMow8zgbuptRYG6fZMLZJd76pxdWkMZZfyqdjWAKLENSuM7kNMHANe3x9mV1jSgwFHHsh",
  "key28": "5X3QbASzjuAmqdKNBi1UEjM4Mvomr8VXDx4NArZi8ryuuE5GzX5prSZ5Jz5GFJwCvU21NcpQeVzC2voXFc6Kdjte",
  "key29": "5iktaziZEimnJVe7kcJCqHG4jJCoTPNsYzZdyctrU91vWtpfLT6vkF5d63C1bWp1ZjP7ZKcgPGH7zicZbRAUwmPy",
  "key30": "MjeJjeZod44YAtLJXUWx3ZRFVjTQb6EoLdhCsFuJRzL7GLEEi7QhxCcX97XkhNx81ikvvHWrGC1T1MgXWJqp2aD",
  "key31": "vvSYQ3zLnV9uUjiSt5Rxod6gi9LmRG4eoABbnduw91qcqdTHkxrabnw5coQ4tDbbgKDyQ8pHaj7SmXotXZjdkqj",
  "key32": "5hRLLrqUSBZ9efngWHvxXEmkon3y833ER5bHRyshcvS2PijoeyH37cRhnjsMwYejtGFUha9KhJfMwEWyqAMxWHo3",
  "key33": "4QVJZHnEqxrxS2dJcjypMuB9SjzFEHPfwK5JDWj7Mr61wq7JN8BVXdHd8xVFNgknRe9qKQF7thkdzeMPkQkNNYie",
  "key34": "rWrnmuYWEcfDEs8ZMLyu5VwxowRhUzSAFhddGU9a7YE5VdpEXhMa1U5a9UeeN54N7i2cVKFQCVgZrJfW7vy5AHc",
  "key35": "3ZeRhDdx2hWxmoaBd2ninfJKaaehQJuQnEst6iMjbJGqG8zfHeRRwkg5P6SP9tRs8u4YBAietprNr3FzBxrC8GrD",
  "key36": "3Hy4CgB6Qi9xC1nBr8n3pahoxAa64oo6PNPccC5gjwwXvyJRREfYkp6ZLWuwKGEqsjWu2Eu4MHeUq478SyXHy3ae",
  "key37": "2SiXPUhZm4RV5CP99fTFLGyNxD2ZjKSWrSpeytPgywns1JwFcvWXchpVAA5kjyDWrSNMrvoBii67yn3b5fBA3ogr",
  "key38": "tWpKyiLzEe8v5ndwfGSSeMGyuZp7uBeaDRSBKzQu7XBXqX8964FMVh3TxSDAEozVd5oLHw8UzkpN28EdWDkYGM7",
  "key39": "22yTp4G4aABxSPvSwye4oThmjukUYShiCsZvu7p3f4KxLuNGLjVypx3kvNcufkZKHRq27qd3AwstBf4Dh8C3aJT7"
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
