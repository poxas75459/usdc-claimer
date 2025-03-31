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
    "Asm4uAWLh2hkziXM7BRfQbfcLbTEjLy9Dj2DQxNSkjw5T7LxSDv6WnasM59VgcLYL9jrgp2Lb2sskCFKgXMgSTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "swgibuqqC62DFbMYaoswpLtnkYvtERS9ys5oUv52DhYxQBbXPyqTDnebCZPhDjDZFRjGp1AicufDJfdxMDDr82X",
  "key1": "3RPWHPLGFGWHmt8JrS6jrw2cEGELSkevA68ykTLk92G2zrmf9LED7T39AGuoMgbqKKMg4mYqvwd4A4uMix8kpW9n",
  "key2": "2ZUHeDDWihXZZGu8j7dxkkMgJ5YUCeTGhz5nA3zoCwpzrTgS6NSSAtSzN9XcBT8y44yJVjSnAMakAk3YTT4EJG2F",
  "key3": "53ebutGiM4HX2Ha6fvdU3vv9WtUJAdCKk3WeP8UKfhnvSrdFGAFAeSBH9v6wh9TzGmTpuC4fteqjiJxDLisugKWa",
  "key4": "53pADv6VgAhr59bJ7seWHLpnWPxULdgsyr4CRfbePSLL6AQrKEgnmmGhKbpmrhb7AsYvZdJ6aucCTY9smACoXrwg",
  "key5": "2UaLtFePmq8hB6CvhZLYMuvsaMW3uuFxhYmX6TiSVoHpwcJtc1saFQ18tuxV9TrQdFja3e7mLPHMvvVEYjPnWqzN",
  "key6": "4SKhpWNXTKNN9EHjwZdW743CNGgUBAB8ZpdBiCLfmmdCxHVogV9hQ1kYydANVp71WJKHcWbv42qCignd2FUAeXER",
  "key7": "4D9z5h87YrMqnSw6thUhYiBLvPMwiq7CXPY4VadHaf1HX3TPR7JYjL6EaJHhXcwh19aqGCiLEnt1z5BgqfgUdTLE",
  "key8": "47XfaRCeJQL5JLTuf2oypSwxgSyCEtvjvpixrxATybf62Sg9tZdt4qaRrReXLPw5Kxz6ATszTCrh6UG5dPW4NFJy",
  "key9": "2zv93PBQkHqJ73Gi9VcuEkSWduauxDtv93L5vE4CbNnpZN8dpfYZVD9SwC2fGS6UsgHqSyLfs3F2MT9sy2a3zzPm",
  "key10": "411QvcTmT1zMJNzZoTSD16fuuPuz1r7f255ZxDnaPdepD42K39RNE7d5hSsKzegnShHSJWN56M7Uz9c5nWUt3ynw",
  "key11": "BGgVrbM7Dn9QWjYpgMbDZ23oWENgsS2xTgQgAcXvi5PMnjhYfQr7MWJQePz6HT8JccWPU4pEKBgkeFrmpaRP4Rm",
  "key12": "3yz4GvdPJ2Nznhzb8GYkHi4hJGu8ESqwUZXG76mjcmvpS7mrV36CAVx3aZxLRb23TrPPfBU7vvjDXoXVEwUGYeP1",
  "key13": "5SWWn7uqEgFYvsoCArcJPMSGRWWgJnDLqJqHSupqzMkxtFgXbNNXR4M9eWet7zrGq8Dr5Yr6qDYMwqmMMFAgLJGA",
  "key14": "NY3pVXuspyLstnMMNGZtf2GFyA6Ef7fh9KoZYYPNTika4LgeiZ97AggSonWSsjSSnNCeqs4roBJdrvyypCouYmB",
  "key15": "5iyGjjne3M3co7hXwzn8M6Xno2yT89FLQPjEChTC16BgFPhDjok3XefYywVA1PeLJ9g5sWbQo99sw5zmsc1o1LHH",
  "key16": "67BirsGXWPC5BCstsmEkuxYo3574eaQvTLN3HHMASmKojvsV3FSp3ZkeZbKzKDzpBzQUU7vVY2593njhio8gHr2b",
  "key17": "6TtHc1zsKAgc8Az3sUyh5777UURXR78yEJgdV74zdVsfDD4NFyvFBmDWHMXCkfnaqnes3VsBEgZV47yobNWBTyw",
  "key18": "32cmF6GSxLFZFUcz7cTzdcorNxJuwA97JjVQG9FnTLEUasr2vJ4M3ppwg6mm2Q5PDRHzXYf6PGyGX5wvvhH2PNNw",
  "key19": "27ejSeDUpy7hNCduFxzGmUCBTwudE9TEKRd8m7KD2KH8DUWTo5fXY8JgSQPXoCHyKkVgAhUPcvoT3V9me1TD4Gtm",
  "key20": "vdiqG3V4MWz6y1x4fwqEnQ5C4QVdP3JxTfmmg8sNGLKNSYpirEc6cuTeSYgrhT1F8goqq5M6pRvR3Skno34eo3M",
  "key21": "5hTrq45HNhVdLamL71CRRHs98Hq2iidiBa7U4L8apjk98bzdDxDH7o8f9ve6dRmJDMpmK3PuLWdWE1sAQdWUsx3A",
  "key22": "8gsADaqmJQ5TScbcXdPesykobak1V3Gud2WCYaWKyhPdws16HErMUragcjQx32Z8mbJzY5J5usDgTucn8JkRxyE",
  "key23": "48WQ5HmgNHZmS2mBR2ewEPeVkoCcuvKRb9PutYC6VcnidHFVi9YGGg9WHCdQQwus6amEU9NKMjbvFbXEbFK9GSQd",
  "key24": "59vyju2zbG7KpHJ25KEyGYeCrVGX5HF3re81dBE56UVes2DahdH8gRobBAZccufsm2Gv9jiXhDuiW4sRhmsTpQwR",
  "key25": "3uP3wVGFwBjXW53m1h9DqEvbPXF2hvMJ3wNUB74xNpSYfgNt63TCRUbyojGzNo6L5KGsqYr7FYQ6V44EZ7yDGz7m",
  "key26": "3QL4zc6wviRnqNeXXgHp1BbLraoshFYKEmRX2BNcAoESXbFpoaukMTDDoqztjsgby6ic68d2y2VtmVWC6iY1ujV4",
  "key27": "2XYdjJyZiWBtF9oM7kJe7Xr7CKVAzvYXnn3UPYZrcSDv8e5eTN71C5Git49cwcnfGRUHWao76V59K3nAqDmwD5Gp",
  "key28": "sjTTp4mGv2LHp75dyUSn8uCrSQcprjJQBBm3cqWCiPRj2knbtjKG8kecXV8QCrfqRsepKR3Zfnqv1Xq92AgY2cD",
  "key29": "61Ly3kvinPYvqy8PnQShG7HUVTzBHRuXgrA8zzTuGe5VNaLi3PPxxqyvAod1UUtBzEKZPRZoW29rA5QpyQN98UsB",
  "key30": "3onAbv5e2KLcyyH5rZCUNEy21PXVvETtLwtoKvuMdgqeNyLNDRHPLkAqySx1BUwY8PTfgfm4T3aTYD5xhGoAggx3",
  "key31": "ah4Hw2P46pS3Fte9zzVfsJfPLJ8imUdZ6ywanzRYy19Xa7mQzYKarKmE4HTTzrFTBs6pHNuB5Xjex1ieoeSEhtg",
  "key32": "4NxmsNKTFV4zAjAj42B9f17SJE3TrSjB76BiZ4QMupeZGDJTG4X76EmfWzm2uJXak87YipvhUY4x2Ac7jcwJ9Xmw",
  "key33": "3to5ez2sdULEy2MHaC8jk1bmqhMQtW7TaEv6btvGEKEkxiaQnEF1qUaUvzmobiURasAhsbbL8zPAVZzTVzB5dJ9p",
  "key34": "2bVyEzasNzDSHuhgCELQhLruGr7m5MwP3yT4n9L8D3wxbwkyC1VEEkqAguRkbFE9j5PG2D8sJ6pooKUrKzBysS4u",
  "key35": "3W4pvJvghTJ21EpiMzLzhfrJvFoRfGZb93tGDfijxdxuRPhKaTayL5HjpH6LTwpafbAreTca8DNiCqofbrA4Gcpj",
  "key36": "3g945ShjcYvsoSWAUixuzmoJ9jaTnLFB7pNQUTMWERQXeWYyTNdL2nDhqAn7BLkLxYD9rhzdhYUFjsruDZTy7XLc",
  "key37": "5vbm79e929sVTMCqAgf2mHNXWuJ9VWeijoidrBkbUsqLyF55xPbkGP6bMjqgSjBm22tdKboFk6JAuLdYPZ8uFzq9",
  "key38": "233JiVJm6ytWX1vX4PiJBAAZvRWPw4Uk62ZNsPS3KPZnShcJfZBzdbQCvcjPsmv2atFMtgBJ8tMZr3TxjLoGLUv8"
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
