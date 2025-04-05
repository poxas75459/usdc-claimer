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
    "36Qm4SYUZLRjSxx6tTbSaaBVd5SgmBJRT4GQAod5couDE1qQ7Zy6bVZpqa4xKWQVkdgQoM3jDwmu2DJjQy1c8veV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qi8GBsKjkyDMj24uR1CAFFb79YHqVb6K6BhD4MQQjFqnRFw5kudTWAt16EgnBon6XswmFHyz38N9L2MH16KJU9s",
  "key1": "3bydSk2tfUQiSmUydQFPn2gGVHoXh7NTdNe84mF2q5txj8rjPzWg4dZyS8euda1mP3aiazCZAzpPMDF2UvvS9b8s",
  "key2": "U6oSMbdVs8Hi7dpWFrULB3DBqo3Xd4aqLPQFHeL7jCBH7yLzZSeSjFx7XzVRngo9oN1fpfKAEbpB1gRN2Eycvoa",
  "key3": "4tfWFnYTKQpBFbbHJ9ZLxE2zmDbGrwC8iKhnCzy1MCVhk8oUCGk3SAvUK4ECbY11XCFnVY19Yduj1XK5aswfh2ov",
  "key4": "3BtZn5KoCDL6dMFsyJrf7s57jyXPMvosvN8spREDhoMw89mrZaX9dX1JKP2E2DaGBQgMSTHApDoVxAqyGEJe53bE",
  "key5": "3URHKYvtejmqtAPWHEShrCFKLtHkXwxa4fCC2QZEHY5PTrLx94dJ6okUX1Ck4yEq3GQtnoKQaJ2BDBjbbyo2cPnQ",
  "key6": "5PyrbS9n3frU6pcF1Ri8iD87VQ2kpbHdKVDbRLkRREkaPseVcwrzCvwy5PFXeC2XE8TyJhGMt12psJaeCRLHnGyR",
  "key7": "3pUandmXTxcqdehCfcX8Tf7xK4H9CPEMBDqVJ5XGFsnvQR1VRRveCN8SRfjLTZjmdBoUzNrPRreGr6gHXQgayK8p",
  "key8": "2Tgqc1ZCwXx3wZaqZKm9W7xqxba57tpWa2MSa9Bi7FsFh5xGfBvpjxE9iUEiuERNHaXUddgvoZN9svCMFvQ1HW3x",
  "key9": "5X97Q9mrvxhXy6zikDGyiPiscJZLYQ9zpXon9qu9A3HYKM1aUJ45QTwk1pgLRkL7ryjA6ZPtxZhq1jQGUqDFRLFt",
  "key10": "67DNK7RB4KG8zdP181LR66draHdeSxLhKqCWF8e9nfVP9LWScwVvtyJSveBmF1PQrRhHKFTEMj5zfEUzpNU8PR3m",
  "key11": "4YcL8o17c2qoKZih1dRshXJanWVESLFP5F7R4uBjusyH6izbr3MXbrXF8EoE4aPXDCzCJrsKvhdr4y2J2B4CXSGd",
  "key12": "4x28DA3wCPH8RnG9uRLqd2k7XZTNmE94iFRSN3cW4pYz4XD8CHoBFKSsNEZDgvZso24BRzjP5Q5tsCgvrd7vv6rS",
  "key13": "2m15vcnZABc99t2rdE8ZoMu3vVquUR1gMYmUxS3nPnhz5t99sACHkbBbFT8taZ7dgFpZW4V2Z1fv8hsjpa87kXjn",
  "key14": "r1kYvJwwTzwyuxMa719taFf3np1nsqePr3LUUyf52qkdQGZ6SmX5aN5Je1dpZLi6kavtiC6RhSoRqkxzmxLFuHr",
  "key15": "5kiFWX6pSBmmkC1bvrKFjNaQJaXMCvTztDU6XnSebB3RihVFp5LX3kdx8n3fj9bQGvkFZhQbuMsze1EmnxH5Xs9W",
  "key16": "iLxJwZN47iyhPzQeUzCpqaAp8iWHtByKWktaUfvi6ykx4Q9GYCqXnTM7XkAoRZbnLSyCjKBXwxqx759wCvuwTJo",
  "key17": "3j3aowvJ1zD59nN94gQwjZ3ivcoPRcjN6u9k47QQghchc4d1ooRP3S5n6GyDr5wh7s5BmHC8GM6jvNkcwGbj93kv",
  "key18": "5jkwwWcWujH6osF8e4uFJaYRHvmRZjbTm8Z9iUxLAPxUVtdcTzQZoMCJy1gnCPqztSet94zsxjcRvEyovuMuDKyr",
  "key19": "b5ZirxVMEpYPt9aUMFxRugfjDvCSrQmGAwshzuK21XKzfEDoF7tCUSoQmeuYYSqCgQQJUaVvdrLGzcRqKNbsroQ",
  "key20": "3NJZ7gUSxBsaRrJr43RbJKsEGGzcyERPmrnRfCfn75eUNa4ocxQNL3m6PJYqRxNZUuVD9EdQWzSGL2DQczMQ57kk",
  "key21": "37aB9mnLtZvsKSQtvvkPhpuia5xuYQweqbsHiRyJ3DA4gSdfRyNHcSDFRkAKiGgeb12daqtWVRSbUS5AzuigZpt5",
  "key22": "xpMpW3iKA3zp5tSCkZqQ5LyWM3EfeJc4PnNYUcQFt8nDmYh6iYYVtwDbzPCrreBmKRTB15tFXQMqdEGyxrAMtwe",
  "key23": "4o2SMyMDgcHKiqJ891mNp6uHfErJ4An8ZW8q7CpM9WPZMRnFBnCFPreRXWCHCTDJt3CHjn3jSo6h5SS6dJwymnJ5",
  "key24": "53w9sjVXJWC1XPeJM6vbqPifAvWjvdeW4Eua5efaXUzpb9r7HPnA2ZBLE7jbJ1SmDNMQDx8DmV4eQ8XAxvPvgFwx",
  "key25": "5ZcBNrbwEvMrKpAH66GUn6x27T2q1RZhYeN1gskX4U5TyEEHa4FCWvNGuh5RXmGEN7uJtk7jdpkKyDabff3SbkyP",
  "key26": "4KZLbiaXVzVXVgv32P9whywj5Qz1pX7ZZtUXCHbfoyydRk9EnKp4Y7xRdYiLq11WLS8GGGH8w6bSURXkjBm2AUgC",
  "key27": "5AzwmdFQaVdSvHSnHiYd7T95yiq3mUBExFZFzm1BNgjYEcNmnHHFdghZbjnjUN8jp9M3SiMiR6Ze4E7xKjm3EW2A",
  "key28": "2say6A3qhZTnxTrXwWUhCXMBEzEXoVFeDeMqEFBrCSWXyphRxxAJVrAdKMgiDcNFFhXsNrJeA15dj9J2xLFPkzRT",
  "key29": "21BDmhcYBUs4A4L3NuADPwrUZK5XbfNuovjzYd1fpZ1HbpSozuzpJcZ9awX6Hzf4wDnGARizio396ktc3wGTyaTz",
  "key30": "67qwM9Qdqczmx9ZBt2k9XeiQsrvoydYUEpnp6udgzgxZDzK4a9WwmugHKDFgaim9LWuVfNKnqz3r7MC9wEexSAQN",
  "key31": "QGgAyQUS7oPVywf2TPSumiKFHVE888mrUeB6HceJ8McSgrzaAU1hwGdzfKxSJt4n3kgZAqSiHAcKupfYAy8qgfm",
  "key32": "3PqYxJYzDZTbonb9Xpe3NUQUtJyBhHX85zP3EUfr1Y99UgctEiJ7Q555WFrstJXLdTKWmxLmhw7D7yvKmzCBkNdt",
  "key33": "5HRCHBURUU2QMcTLpWwVdxe33TUSwJwBTDY6HyhBSoBkFoLHunpE6zo6uaRAjkMXvLUmSTrZ86VEvaiKwa8G1JX2",
  "key34": "2dfQAdnb9vj3zxK16oPEnvUF36W1P6qj7fhwKzNikYbUh7g2DR6gM1iqC98hirUEBSj716r7NwJSwiqVcmsjkupR",
  "key35": "3Uyn4HjyBRpV8yhSURTZZrPpWWkxG5FHjtVZR2hgVMrfwstgXygodPeFNhnd2LeRy1BthyjiuK5jB9njkLmydMoR",
  "key36": "45qc4kuu9WnNWJbhqrS2sxnWzeTgnf1YtirVwK5KXufsK9jjQDmTHD2gT6mrmjJxk7oqELyZpAp9yxaPYsXZFrHS",
  "key37": "3XRVs3Hs7i6dTd48G3StqBiqfJf1qqQnqdqMkkgco6s9dNSQDJawb1GE7rf4possJFf461aM7ZxHey2gSrCjNypk",
  "key38": "4CMVByjoYLgNpJXUsHVweGfv5HckgENfZQLDu4ZTna319EXNLbkbwWTktdbN7PbguqR43nUnVP5NzKmFzGtJj2xL",
  "key39": "62f8zy7qgMLKUNUfuRnCbJBWvzxLmVxjYpbF1UcyvpioQjcsRCvVUZ6wDPB9ZTirsygjaVi5S4TvmKwHVUbaukxQ",
  "key40": "4Crg3rKywhqp1mGEyuC8XZJQ8r7hdE9enNqiGbENu9CmXombKSiPeJSmeW449zSwr6yEoTZwAY1cxRhGLPGNW7y6",
  "key41": "22sja5Jh9HomafsintUM3WEqh4gf9djJiPf29pjat6o8vZMJ88tjt5NZxyyTy9iMPk1wQFvufwwfv4FdKs1rYkRY",
  "key42": "3zxmvrMXbvy89hrxKeAseTmGVVotVxjbaMg5FTMs4Wq6X3dxWxYsX5fZnpgd1F1tTNxsNwdxsXZVJTZv1CdgMbGB",
  "key43": "1n6vV19YEPJWanpzmtQQkqNpw7x6mxyRwD65S8WuBUE39fRrWJgG9cuAvcFQjWay4bgeCVtUBQegR8ozwiqwHw2",
  "key44": "5yDjX5eUm1YJX1Tk7WTtpVAwvqGPTnELWNKmZdxWp9FYXU2PZ73GEbuqwA3nUNWdeivkKFiEf546vBhixqjuEz8h",
  "key45": "2FWQoaCuADoRqLFMFZTU24ECjQe3U6KNwivzBfmBQSmAWqgCXnsTZFqsZvRwsifChT233ULFHtiYb9FCkWWQunuy"
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
