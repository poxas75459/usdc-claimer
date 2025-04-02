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
    "1Um6DesSg5L4wpUQZ7rDyiKPAr2asRZXBUBPwp3AwHCsWkHUCNfaRqvGDZMyvRwVSN6hwsXWhACSHqt1KksfyKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z9bZGHURdiMzxaWyx2YcyGFsRiri98fr7JVQpochCCBWuHszhPF3vm6oxrDkNVDYC2QPGuWvPjK7d9ux6zoBxza",
  "key1": "5VYACiqrJtZ6gyXtSFBLhrUK5M3e5oDsiNunkK5unwkLPPCTM4C1jprGeD5MYGXjLMSe1TBBYVYZdsMJwqWSjxv9",
  "key2": "3uNUT7NesgAheTrfyrTFQE81vuv2QVCJhSWVcquABSmP5Jme1exwoeqbLU1WAFbT4hNe5LCuur8gkVPas9GMDYVH",
  "key3": "5JmHkNKTbVqPKGwi2hoWHxgLt76eeUABBgkscbhRuwBghi32NQPX8DqC6pdbnkmTsNKMVf5ZuxWF9u6MSmS7JRpZ",
  "key4": "3KktEWHNeGJn3BnUb6EjRkKjXYwXK5DCXdw5giRb33MiaAqgkaFGkVSuoC88yTbJ81A4J2hjH17GGjEQFS3Si96i",
  "key5": "3dijPWWa8hfTkv7HmA6PEzukcoz4x1J1piJMdbNMYPaaeHnWJsNX7ipiuF1aq23TDdRAEh3YYhiCffGqw9qrz93z",
  "key6": "27cKmvCBpiymAgTjk5xi6y5AA7ZP6sFN8Xmg2PchVwqdpEB2gb9gdAGieYJKp3YzKYPp53H7BzZTGXX7zuUpbwMi",
  "key7": "DVdubLafLyB7eNvmqF2nSYTAi6jWnRP8FCMVWxjSr1Y1VV7gZQnhsAzrT52ZjsukofZicEMJQkGvX7ARDqcrd4D",
  "key8": "338H8rK3q2hHmFYkbc1aC2Vyh4RAetQAE49SKBLvsDxYYsVVE4cUfbBvzsLg26DQLf4YD7qxPgfXSs9Mv4oCzL5C",
  "key9": "3CtSTVmQVhn2qCt4jnU5g86MASyNdyzXukTYe8iCZzeZpbWTtrjtTdyyBafBAomCB5y2kfnkARyvHPwnQ4mBThoG",
  "key10": "3dPrGvMJPLf3vsMdK5gr8xQGQ4ZU2CNhzvJoVVXbBJzoX2R8jxUnCC6xRArZFBvx6KfMZv9MAY6TKuLk3LsFGWR6",
  "key11": "3JHya5fq24R45pPbSkSSBBgf6kCLYkC6Fu8ZhkDGzK6w5xSErrUPXKLZcfB5M3Wy8ckX4svuqfeWk2tC4UhX1QZS",
  "key12": "A5aATaNcXGP9tUsWaJYN6jxddNp7uNUDWxxxKNmKea1eM4ccfWTHfMc7v5M28ZepP3Jk7cHTMkWVvR6Qfo2CvpY",
  "key13": "4CPH2EUVpAssz4cTN36mkUcMXKPmy5dzRVuWWDxYSWydRqXEisfVA8qpCqnQctrDE6WG1UhWMxyZyrVP6BSD3Aj3",
  "key14": "bPv2NrRMzZLvD8NWEeKXncXoqjro35vaXWLNvVNnr87uzB2bLniqq99nb7WWuDZRzFXF16yamVpMb4CWSg1vz6b",
  "key15": "aPXt86uYjXuSAhkcjwnxYnJLGoUdi89awv9dGXwqTuhBy6KjqxmNYmjRcbNPmdwc7tQDnwyroYbepTvbmYjPB12",
  "key16": "5LkgJskimv2bWWBwaP2gEkGMsZZbByu7JN3YFtJ71mYTmnZyWGttsKnmvYPxQpG8VQVjFQTuMF2nxmX5wEK4iEYF",
  "key17": "4pevceBKtX9NnPfrqQ95Q3UjsnYZqXxNsqTYVe3vrhHT9KDV4Z6zuDNQzTZmSEoTABBTZwoGUbS4WnvD96cAv3Jv",
  "key18": "5MngoDVU2eBJJoefYbRQRag1KpHX3J95TFcPoyhhnHyGw2r7MNJqBZM5z1YHby1n8GpsvuStoyAfjesw8dr2toYT",
  "key19": "JymBBXLb1Kz526SpFKLa7ztet2g43cy8w51eWXRDh9pMncEizRJpL9QtornU9J3vDtcnZjovdy444GXgYB8MSEz",
  "key20": "jYzh9bEQT4LKQWrzu2Wi9gMp389bX2wqaQHKyZcUSyMPogKtBxFQS9t47AiMqnFvP24T6b3cee9TTUexWpYroHW",
  "key21": "5NuwR2oTPNwQdteqhSww5R6wBzhR8Z77gWwLiAVRfNzHzj3nhCWUPx2jmrfUddPFNn42Mihe7C1vHWVJqiaBZ6PN",
  "key22": "G76KmweMAaNB7vZP3zhey4XBvR1WPDHyBJyv7pzZyoLMBosQv6VTZb2Wxe6ipFkFbvoC7yh5VcX1XYj5wjTGaLa",
  "key23": "3Vk6tJNGtEDdqdsVc75XBKYBDzLbAP8WSdqBcxEc9pWgpncKKrVAvhWCQjBcVUYHqGVvdGk58qv2xoUPaz53rr8x",
  "key24": "3DMELvvVpRedsJbFKGxhD9hgyrZatorU4LyFL43wanZP4N2VaCWWA1VuxH7P9o6S1GxZuV31B9T5zdcU2mzAE7oT",
  "key25": "2SCDZGcuKEZQ6LPq743yttKvq9acmj426kjRGkPogWVpK3pc6Bgp6ZQpnDdEJSxco1EjYs5GrGj3P729VB2TY3Mq",
  "key26": "5d8s5L4Tcn4jwiKejaSYSnZJJpTm2evwiN59oCpxo4KokXNQaGWQL7j2wXx8MU1zsxzTZXZfWhGABLtDbm598EHu",
  "key27": "2MgApkX71DNLznJ85GDadDQ6wiGxecCtoFdceVZCCB6wSKqTBwRrZfyRVNfq6t31pbxnexgx412p3mgh4eEtt4Y8",
  "key28": "2nhKVivQi8trrtyrWfg5nKCytN3BX4NXvsCkSuEFwGpwvgzps17195ncN5aQ1ZMoPqzoMcEEMfX6Qoxh6a3Eq1H4",
  "key29": "2pVnyWa3Z2AafoGh9LEoPLRVpyDrCw26u17sdYrqvwV3VVUmyurETh2W2fqWCU4N4rVYMaiJGTbHHWvo7Q5oTBJ1",
  "key30": "2jMYH9JxzNy2BXf3FoLZMEetsLVVtpkDPAa6xikpmVPWgFyVJU9fvxczaJryDjZawJsfDnuzFLbaPMnJmL7GC32",
  "key31": "3RoNUZPPtkMYWiRe39nYrh8te3jMJQEJCtxXYphAJCHmZb7BurwtA1m2ykaayZndh6QU7XkQxnfB2dhJ8oBanFBG",
  "key32": "36oCKvSJFHVBHdYuBD8LjvRGXYEjoK3PFkZPhWqqFy5LQPUhgLxqx8TcGVUXyRbsD9UQy73AoeiA6nSBqKuuxqY5",
  "key33": "5i3WNRdDTEvdj8ba7uHamSLKsNoKJhE6dBLyX72vV2XHRCiyNGwGtkjLBJM8CeKFhdBkcQE4FjJiJW9YRndNRXSR",
  "key34": "3fAquQzSvXAtrhpcW58dRZGH2nzcc9B3vu7RMRCSBjf3es4YF4qgRmNqTTaUrdNjb3xAKnjvaJoMVnAdZuLQJkQs",
  "key35": "3Vmp41tbmc72b3NbZ5baQY29dJbTrsVrvobV5LaL7n7g7CfcV7jBoFPSWLr1gp4RfzwuBtt5os2jBAbZ97ZZjteV",
  "key36": "4Qh3rDcfYfo85wu91G4JRrVy7yHSTieHkSvrAuhZXsNTfBURHYezKR5h9f8yybyUNMNs3xjMSGjuNsmVpn5vyvpZ",
  "key37": "2Ha6dvsGVJq317WTUh1zqji6Rth4vNfK5pyb7U4CTNALJEWRk7PwBvPpwHgW3kRcmZzPY3NntZgK2DY5MRhSN8Tz",
  "key38": "imey1bGYAceMK6cT2yJ4DJfCgWq2rYwywNYZY8ptWCcukz4uZPC8i4AH5zbbueYgqk5GD2rUFL7uGf6m5ZiExBN",
  "key39": "5ug2Wqf92xMqvb6u6pk9oPXt8hJnxcjfGUpwZtTz4RxoyNQnjN9p8Nurfvb12SX41DHgqupZiVdfj1PxmupaGCX8",
  "key40": "rKLWtDLJqc96Pw91yGYN5CdVFMF5nwm3YhihxNE6eEDgz6M7DutPn7ptGo1zWWD5s73dvtfykBwbsLUkGc4JUGj",
  "key41": "5KuSnMJeXd5pPZXfmqYC4rnYUNnRThHuUDjc9iiswNZYzz6ARTY7gTLQMGe76tyDxrQ1Sk1LvNVnHefjEymKENGc",
  "key42": "62hKsro5ZypkKLb7kSRfuktSv1erfA2t7HDjb2oNcZqGKNdv6nMeznXPKWxcbY9okCZWjhmdsT5e93beF47Pr8Xp",
  "key43": "5SsAbwpaP9F57oqpYKUqDnwoE1YSEdWBAo2eUx8AWdkrF7okLoVJpvK4CEj8QWPGqR1EMCjzRzLZkrkTo8shkfEq",
  "key44": "D3nt7JpzKVh5jqT6j88rCwdgb6uvQhnoJKwhJwfBr7fhgKZ9i2iimypuTRBd7xXzYUSRjQ7Nt2HirxZpTLinexY",
  "key45": "HpBcJkVEiRgU6Bn6X5EWqgq562ZvZqJt3uXqVfaDxaPapmCfGr8MgNK8FsU5J39YsZLYg7rdfrw2ZgWTKdumZnj",
  "key46": "23DsAqmDGoBE7uS1Mu1jQ6BdcwH7Frzd6zyAz8xUpLqAC9nQq3TFJh1UqzutwWDd1cRU5HhQcoaph6voEqxFb89c",
  "key47": "YU4yU5XnGhA5vfEPUEheLJiQr3J7sABZrCgSW5SP1x2Vw34VK7vbKvphZyMNSoQmgRbBmuq9zxtWZy7ZFqKU1TX",
  "key48": "aCGUt1pftgrKpEKQe88RsfMgd3EWDxB3arGufMKWBJ4VyMzrNeEas1jHqAond7hzYwokvuEXKsG9tTLDFxcq5PM"
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
