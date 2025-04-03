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
    "3kJw7nwKvbZz71LwbraWawn1aUm6TcrAab95GtSXnJEWkFtdp6kLYvCgPEYutqdu7kp2Yoo8UdMfwXYFbxLVTmKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ds2P5dL9Bn5La4wq6t33VZUGtCBYyAvfTi8P3FVbhnmbB1fVQPzbwK2jS57dwZ2UzhKf4HRqwUyJnQvExU4Wnoa",
  "key1": "4DrRTbM8z5LSGA6LcWgmLe2EkNG5W2HZP4sbfbkPBMnwmuaau88qgsw64Q78EnmCwJLxQVP2hQQWrKRWFf6QkpKV",
  "key2": "BPYruksRATng49U3vYf2rNY6z3MLfEJc4CcwgnJubsHMCx6LVn5GiAqFV1JARMi5inPonGeioPWPEA6zstFVP4G",
  "key3": "4fLHutFmbbgodakiVU4DrNEBAvwXpPHxKqkWSQbkYWWD3ujMQhAuu37LyEp6QpZASKjjSBrj8FHoJePmCvKE8oFr",
  "key4": "4i9tthJ6r7XUtWowgKXUZ18xCuadpqbizH2ga9FSuoJY45SSM471LVWTzxvYzU3Ed9LDePe5HRE2hBaaNZ1WjNaw",
  "key5": "2Biwzrt5XEdqL76xtUbRxkNL7hz8L7qAYDCuHebsTATgfSid6PAxULyvgsSXJjHDLpDMm9GXmpeSnCYh5d4XqeMa",
  "key6": "4CKuq2TZcVTHPe5LLSd3bx3CHExQo6rBLzu3k25RnRXN2EADReLXpTbjVNEWgMEPKr6V2cRJEb3GSoFP8HuXN6Ma",
  "key7": "3quLMjdCdU3Vnn4KUqfRYCEVH1JNLy1LLVzneDJJ5uY75tVppXk6Q9CvTTs49WTs7npGw4gBVdLXBf11Nu9q5ECD",
  "key8": "2Rzt9m5X9mQDyFFhz77KMDVH91MdK4E8mBJxrJvWQ5aUrjbEdYQwEAuqLSagv8WHozka1gJXJEE2rDy3PckxZSxQ",
  "key9": "kjpN5h17YdKfKL9Fypjpb1FjZbUB21CaQBhtUMf6Ptt5GeY93yNK9q5o65bnGukapsHMkFUfzBV8Z5Ks6rQVG8B",
  "key10": "axKPsKNgb9zEVAZWxr8skioEourByeqBDWrhxHosrb82D51y49e83Wx3bqo11SXZNkeud5hkHUvh3qNZzMDNGZn",
  "key11": "3jkft91URJNaFGqS3fk5ZxZmKZ9yQUnPrRyvg11xcnJFJa1foZHkeNx9eU3pT3EQi2fL5AoD3jgV7jajcdqEn5Ee",
  "key12": "2T2FwZDmBdMUqpHe5DMFXMZ7uANiyewUTfnTcfCdh4snke8S1ETdiKugaiJmdJvVrmg2XRqp1EZBJDoZ1eeXV9s5",
  "key13": "5Q2UkHXHn6CSx7dEgybEWiq4jVbKg5sDWE1A4NKV2j6s4Cp1Tk4FBwAY7ahvFJG8CptydFRAzGH6nprhEisEmujA",
  "key14": "gL7JonBxzj4nqwfNjKCfjyrGDR5Zhwqpk5Ucys8MfvKwh3hZmqP1hRUG8PUuuM3wwekaQJ4M36mgnRBKzWdk9v6",
  "key15": "2DDniVxxy5u2MehrYPYWksmxe4v7T7czX6rNLjah7m6yTEavxbtGmZofhvX5r45K4ybRE2uVrH7iUFhHtKDmFpPZ",
  "key16": "5ce5XQqGYwUjdhVkkJzRGd4HFR7HEsGXFce3tDThujSjR4v5w1ouQhrvwdsVMMRVeAeMkg73gBWyaP1uKHPhRc7V",
  "key17": "5ZAudF4nd7qHRwRpYx8uHPuHFqSrfQzdLg2rxSVap6765rgFJq8ioYS69GhddqqRrm5L3aCFVF3J8U2NX9xA8S4f",
  "key18": "3ZjGq8rm6QuBpVmozfkDyeEAbUud1XVk9Lng5cWAq6f7zX614vvdZpe5fBxZHAgz8iCCCoypio23kXeZrq2NmQZR",
  "key19": "4KghvD51MJHZfHRuXmdVQSrs3EdiJfa6nn5hLkcRVHio28X8WgFqewbFrU5Vm4awyMqKKPe1YRP2e6p8CeGzr7mQ",
  "key20": "5KpfVG3g2UTdw1PN9DVsCGgSZnYXf97TXaPV61GKqf5s7TJNeaiNZjKpeg4MQXFCCmPtoPu2E45z9LMX4hbCc3q9",
  "key21": "3owSVB6Kd8RqNFLvaL5MvXirhJTsSBPn66ppi2xVJ359fHYY3BAJSSfWrAMsqNQrfrEHYrVTwm3SW48UPWe13F57",
  "key22": "42QKbziSebYwJbeGyMQbFpMqBQGxKbmGhXDZgVaTPapi1PVnbrG2vUzmaBQDFyK3bcmtqwc6q5NdXMrFzBovBXYU",
  "key23": "2fQCvgH5rDEuGdmbhwyyckc7QWHXbH92zmrCpVnBqJU8KUpeFZk9c7PPorv7S9JRPWRaBnuVshSkP7aHPN1JaQxL",
  "key24": "4Da5teiuoyvTd5tFoUhHH9FHryYNZrRx2zFX47jwJ2hQaL8FYh4r6hT57FVZxF64akqojexHCd2wBU4ohmwWZiuA",
  "key25": "yvXrp3swQQimaAE4ykbfkVyVUzRAhGejkTkDKV4EyodfZYfFyaCfKEm38AieTyJUGvt67QJKkaor3kZU29Z5LxV",
  "key26": "44wDTPemYShxJk1seH4qgUUfofTiKyn4XaMxVfw3qhcuR1NttdcEySQdoKqP2CbjgqeK3jchbFRF4HdnJDTGttEF",
  "key27": "41u2ECgmE333gBxj4QZ798Xyw9ppGiZy5535uzQsjW2N8Ck3R6HDb84HkKsPqWp81rLsQXE5PgUnjvR2TDxwjkMx",
  "key28": "2Vvb4u4Mg4mLHuCGXx62ULuxJjvgjhDYSmJ9jjdq268UdXEbatdHnDppgf1jF8ktiFMfJGuppB7oLCxH6FCSmso4",
  "key29": "4KRScXQkqLgZPcMdfE2Uk4hG3V9DhDDWrZokk4EZ38o3EAAe2SbghMWc8DDr2D7DCgnQVtAAbxeQoyGiAsE3fh7v",
  "key30": "4wdXZJfaHtrJEax38TjrpHaKwpkpWa13LYPYFhwDi7JpRS47Du3pLjsej6XCNKCqCqZWNe47WBWhU73BWELFzpFA",
  "key31": "4mFoH4qQYjxqk9Hpvbf9zuccktAHXU4hRTxURYx5zspvGTc4fxU1S76BMw3ZyaTrc8ohADoy9zAaxS9ADGUibdX9",
  "key32": "b4H5LAqJhyCNcRSVsbMScXmHSc3pQsFRZ9Gh9aNSfZ11PErZeFVZRHWkURZ5HLU9A7Ep2t1d6jxYQrnfbUc7om6",
  "key33": "WM9UoNLGCnrCUQqYhMp8Ld3mqbSYeVqmQxf5dVF6GcH7wRmE2Xsa3W3pt9k5Q1wDG3osiGHhzkHTDCuS73LRhin"
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
