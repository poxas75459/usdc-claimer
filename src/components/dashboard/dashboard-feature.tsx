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
    "5qnoBW6XzwZGMB89xaWNdFw4HZFWPhFze1ipiJ1nJ3ornMxbNWFXdsTMtN4mSXhZ891W1FdEiLARLCWJSayxjLoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y9jA4SQVoGuKAigpL3AyJN8nX5TXoNdNaGYcb8RRGbTCJ3p936YDE9ac9kw9iMyYk5GKqsRUvbVH12NiFNLMpgi",
  "key1": "58PxbGw43sRPN9ZEuD6moRHx8qhzyWqRjHjjgEfZi4vsSX15RoEbG85n5nFJLth2CxEHWuEFx7CF6pcT4RoTGpSJ",
  "key2": "4HqnunSPsLyrzermVGWA9L4pVh8neQcfx3gti78WYiawhCgYK5cgh3ZciRjB7iVezUvZLEkWtxdwkfuMKw8egP36",
  "key3": "2X9t7Xq7QM3B9WoHgXiGDu1FjD93dn46zdAyP55HTpSVgytouQz4cx6aNNYshsNwdqEmXZhx4QeLVXHgqyXC5wB6",
  "key4": "sghhWk3HtUYUF4skWuPYZWjuYdeqku1X6NYgo2UoenUzMM3L1nAXEDR9J9hL3NV4gBvXuhoAVRpLsDHCfm5n47W",
  "key5": "3cScLadoHQhzoHH6tkkooAYuYmEokLPiEEqDig4ppbAvv6ijoQVQkK7VV24g6CrpVGonzcjEHh7f5Wf4YeFunzfA",
  "key6": "3PGYitYwgztNRqcJLLtxRYRECMEdf8Gep9VPiCsenJ9vrsEV2T6ry7sPX1rbFthuMXoa9UewFZvogQzYbZ3D11TD",
  "key7": "3MCiCDfugtrpbXfQaH1S8MYQZ5fqnK6TDuNyCCbGtVyUUp4qWs6xtcPNprckr814y1bSDGp6baWYSXZLQN7SK7Ar",
  "key8": "3m95CpDRjEdjLm3GjpCXjjsKQXdsm9NoRLVzmbBTZ6m2PhmRkw7mSAikYrjqiHm35GqkHkJcgJMHrSiz9SkhL6mu",
  "key9": "4urYft4Zr8mKdxYEyL9hyyFWihH8TKvj6w1mjhEgRU36uc1mEMyArFypS8k8ztvkGR3GEXBuBSqcxV85K8Uc2Cdr",
  "key10": "3hJPRKNTRfKsgv4xbosixwE9EU39FanfMrEYsWob4NE6cj4G1WXWgFekpxy2MR4YAWKJ8e1vscxZpnKsy8WnxiHk",
  "key11": "WgRaSLb8ijbRCqTuiBek1MbJxJXhCwpkhdGRf8bR6HmJzVMZSmSXq7EoJhzhQEyAJBrbXcdfCBTVoFbZ21VjWvx",
  "key12": "CxNWLkmHS9q5BZef2vhXAyyEaxvwZcRtXHXGDMspUaozt69FjM9LodjES3chWhBdx4YkLZxC4FKDPWxBtxQneHS",
  "key13": "5NqZdU97ybTimMRq4tZxh5FUk3PLpcMimzoYz7Zsg5EZV4GkVhGpCvRthWqQjucpsAU2Fkhd5UDPB4Kz4o6X8fNM",
  "key14": "vWpa6XJXGoNCAxEnAPsNYVXVa4BeWxL2pJLRWMzvP8GwFLCu4zYpYUpxZnrXzJLEj6wVmrZSn5Q57rYb5dmGCRg",
  "key15": "3pXhjfnRqxAX4ctDNsbWv9GZJVtBqQF8d672XjWgSgjgsAyE7GacSHwzXG5T7TMTPqv7XwJ142MEEEExUks4zDww",
  "key16": "XyVDxoJenccKgGgCSh5VodYWqbGx2NKAu36aCmtn38z1sb8bjSELn5PBVU7fM6LGQRtcixXwYoARsqu3mP9Uo6w",
  "key17": "2vAaWPzfETDn9rmEjnbSHuZPfFa8hbMw6p7qyCwUMLHfYp58gTNuqarKmkkm1ct9nojBEVnhQgNxTxKTQYAw2B3g",
  "key18": "4TLRCnqdByk9y7ZEFh7edxbtey43ZW3hp8fhoeJPABCfebVFozKABKX6Wuj3EcruxqWX1PviWv7RbUUghECtVeAs",
  "key19": "4SR5EkotvyTv8t9ZYqhHpGVKp5LKFVKt2ouqVcAg6aKJoefs8VguryM9DteoZVq4j18WqdDHYB5kpJ3ZW5FSX4Ri",
  "key20": "JFrHF6tF9C1SxCdZLoSgWToSEzZRPtctQMFWupHVkfnYGjNhWq3m6QKDVe7fxvwgCxRncoTEGfLa6r1xX9tTZwM",
  "key21": "4gTTkvtRKwU6GYxVfUeTW9YbTQEXnZLFkBYVnQXFm9iqYAhPLB8EwJ7VYc9VGFR9vH32MTjPGpk9pV4vciEAane5",
  "key22": "4trcs1ufGqYQJ9U4Sqxv3d5oCnuVE5Epao2SCng9BH1Gzu1ZGoYAQU8HvyKKjjDnRX4iAAWyYSWZV5qortdxAntw",
  "key23": "5wwEDVXFs69sa7d1eYE4Nt8CdjHhHB5jN383tA1W9T9nYvTnRJL5yiJyUGjCANvYF6uc2DvydEEGsJPsCpXxxP5F",
  "key24": "22PL8jZhajgkgUVLpkR7E8B3FiAUs9aYpP1T7qZmcSn9yxQMPWWM6K3JQ2r7vhvYUZSKrm4zBDtKedH6nBujUeH3",
  "key25": "56GUahasuSevR9voBNBhL4k56Lrm8JUTtTb9pHFBzftj67zxZ7jhYxMKcLnbBjP4oyJr1Yv9kue9PVLjMFpQGRGG",
  "key26": "CLekU3oJKevpxgLUeJSj4eYED9TeXC4Yf74QwWn4YUQxns7j5v7omEXtkHELHHwPUjJ11iZqNh74K7ACBsiYDzw",
  "key27": "CPS7tweTs96KcV75WuMKDNBC18yAow1yavN4AUFqvRNbzUBkTMGvUWLbGUzW6BtZdE7Fjt2Z4cnJPrVfk3f3Tu6",
  "key28": "4FNoznrSy4JLxY1L9REfX7orZTmGt2GUs1ELDdzEYgQxg32msUpsMUbGDozLSBk8Du5iffE9M31q1JWmfupr8BLb",
  "key29": "jJYcKc9cB5d4FgvyMZoGhMVsa8GbLAgj3LBg6gYrjtwz4fWZpecwfzbU49wGRVK7L7tFRFUDjytV4DXnae28XK2",
  "key30": "4wPxm4bw68DVGikSFqWJTiA91ygPGcwfEEKJFVhVhuUp3RM3E6RaUubhR1RQe3g2XBCTghNR91WR8vHBruaiWaZT",
  "key31": "gj6UAdMtFANgM5jHhcbvRqaVRpHqt39kbzyZQH68Rs1Xnsy9eoXF4tym2tWpUEhfFhJkhGR773U49yVU8ntQ3ao",
  "key32": "5F3Bm3z1dQKk984uLPrvLrFqfsEyRun93jCUHF3Zo8adKsMrN2LvbukGH5fbpUb9fsNMx8hQdRuDkPisNZdaUpPe",
  "key33": "3dVnBpCyCV2xzXzZzNNwgbBWU1LzxKYumkEzzhRZugVbtGSq4fyWQMqdizRfdZHbYw8J3vUbUwPxsgrSbhLPFbuk",
  "key34": "4xCYWASean5QWwURgNbav4eDsjUFmJfQVx2Ae6aWWZsqcrkKouaMkcq6TTjST1BuBxqXAwUBAoevb2MdJfhQfJGp",
  "key35": "3Z6nUmxUCo4ERRjvoUMezfAJxARNQu7NRYzGaPAguqfspQTQUSdW4r29xi2PZrDyaYaYsDTSWi8kT65MYHeAp5Eb",
  "key36": "2GK3CnTMYbdpUAGU6JMeFYZR5Kmorfv9aTxVkYATy2VcWrkf9D3pQ1EEVZtWHdraJMcLa4oAjrRELTeJZVsoh6Js",
  "key37": "5bRVJsqtiFZsKtHaexNcXFbg4bfVazz7J5zP49poSQ97WFEGXNibHiszsJaEGMQ2LgjZqnK9mvsEt4XjvTQmJdFm",
  "key38": "49Jh4urLnDwuF8ToQWnzznckT8BvhmuMm8meVKXp8aZoM1ZWJik4UT243TuoL61HdNkYFcdmqke8xvpsVf9tcSzG",
  "key39": "2W3KViLC1E57uNGo3ETN2nA6zEnWFzqAs1DKXVuMLTmb1dZZoM8sEGAer3UkJjemWe7kHEu1cfiV9pMbjYKBqbea",
  "key40": "3RCvWzk8bMeG6AyXEqsdw4dnXMWrHm7eX2iFfpkhfy6JWUNxptYhzC5N6QihNLaUTRdGmuHeBYU3moJtfGoSbrXe",
  "key41": "5oGx9YwvjfrcuLSiwhZr3tpz1iCX6BswLhxpU4VqxiKwujvGQkouJg6r1eGUDgp1Ew4suZ2U9cTjDmbG6xGgzXVr",
  "key42": "5cHbxTb4iM5wAW2s26dWA4j3j16FQL4zyT9DYVbd1wrkzMkzmGt2EhSR3TCto3XQSFigmcCk3EBCu7ojKaGLzQuL",
  "key43": "3adAnxCZtYuQykWzhM2V8N3dX8vHG4gmd5TLX1aEZR1Zj4vtsLidRDJUVoQafJQzdHC6pVGUzD7FkJWHAd1by8U",
  "key44": "2BCg3De7D5DVDoXD6GQ5Txnb76ZRF9METUbJqKiD1AkiVHX7HQfwWRAv4zmeMs223f7xTS5rRT5a4dGikjZzsqAx",
  "key45": "3DrkEJF2mVAnm95QioiTxcYcooZPtjjusdzU4GbdM5crhfHkVg4ZQj5Ve3rZzimq4SZb11YV1eyo4G9sRzQorcs9"
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
