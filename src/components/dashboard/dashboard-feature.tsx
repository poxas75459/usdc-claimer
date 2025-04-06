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
    "38YiJoHaR38CxuRHu44sk7zqVkyBymFoW66yqVb7pt1EWdCeGCt5XNr7vRQYmN3gEC2jKKXaXrzjdtS2VmP7eUji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2A7zagmphQCxRujEKpQ1iLfkAu73rChCeBw4fzCTGrKe8LVvaojqVas1AvhXH6zTuXwBykLCaXEtr3ZAJ6Pufx",
  "key1": "oCdiT8ez6bDuw3ZhP3jmeTPNe3me713LWqHnrA7ZAhegrTWAtYrT2Bd4YtFGJ8ZzLpKDSEMLzAnzDeNoaZTauyN",
  "key2": "5uCKd8oHSBgrxhoN6xyYE42pZ9wg7QwVo7irV3TfQRNf37jzXrzicZ17nFYxdgffbcnaM9fRBjNyyRhG7RMmshGv",
  "key3": "3s8yGNHYrVTuJFhwsSmzgfRDpVwHoXXYtk4Hbgxo6Gz3UajC8Zqx9bq1qGRCK6e5wCtgtCsZzn9FUa1PMeQBco5K",
  "key4": "5sd2sFmaNSHGzA83M9hSD2Hre67V9mGoQAHzPyszYbG7UkkcLYVuCNnz9nEiXcVKG7F5hvTdW6xwHoh8jSbiM4oJ",
  "key5": "3sjZ4P1Y18geobZvPAaHjDtSric1qirKwqscmxP2qUZ2HVn74vTH9Gw1uB9D8uMFBBhetAq46FosJG7z2hVASqn5",
  "key6": "TQ1owWnCD7yDpT9tPqCpFTPtq5S5qnTHK7V1fgi1m1T9yLCHuAGZdxuupqdtyg394AC7CrsBDpQsa8KDT1ncRij",
  "key7": "2dFGXE5Bd4CQ23S73YGn5wfvB51M37m7SNrKbVMxVjAdEMUkrqhYTNb3drWpkLLec4CyaA1GSipewntzboBuS44r",
  "key8": "3XkpdA5Q51gd6KH57msHXkxdwjQuSoo8q6DyYdtPp6ZjMELWDWp9D54UQVT2sTMkg2esjzwXEsrybz2wuBqJ71UA",
  "key9": "4XLCSQBK1gQUWxV4jV5BJRrGYC9nC3eThQqWFVW3V2d9sgjdgK9S7JgvTFWhyheStdEqb8NEmALEWCwFJAkupFzU",
  "key10": "5Fqwqw1ujGwtK1mYaQnCbBrfFjePZ4f6axBshWGs8i9NNBqWXbtDMCbxUHnByKRDBqjbN1CUJ88KeX45SruoZBpP",
  "key11": "54SxU8RV5xb3hqJhhav84HAh33eKsQdqSfYNfSZExu6XFdJkcwUVUHaoE7iPe7DnqJvAuBfWoGivLoxBhaQp6qS9",
  "key12": "3UwFkhBfg447h933qsv2RzYyH8cJ6naGsFJ66kkanKririuhk59HW5sae5zEUqByod6jDZ4huJinbpkvArwfzdpC",
  "key13": "5exq2Y12YHr2MFdqfDnCwRyj3GYxFh691i4UFcAvgTYSNUtB1vwq36YZdPjWnyZu2dFfj2yJshPZEyRvJVfaymNQ",
  "key14": "2hgfGt4HP8eKWSKTf6F1qhCNewdawguRUVH6u2RdZVDLrw7ap2HiVG1rZYYXwqjBUNkKp6GWXS5gwGhgTzxAnNg",
  "key15": "39VQut3Ljco5Wxq8LqJ8mX3aaMzdgYhCAsYm1d9cM8veg1mjsR5srC16BYwPVKEaBWN8HvtnnsN9wv788WBoUksY",
  "key16": "2f75UHheTiBpkAYQiKbtPczTRBuEPPrvYac2WPkbb2hZ8pbEvkn46EDG3i3fwBwVG8Dzpo63zpxeV5iBR4HQ5GJC",
  "key17": "3mY4tCr5sJYawdMLga7fCxJ6qo9vxKTLpf6zZkxdxWwgFsVJp8KxcnEAMX2y9CYPvTQPgpaNR9r8VCmeo1B6JBoN",
  "key18": "82T6wnruMxRTAENBSZexJWku5V8TQ27Mx8ENhavdSSiG1vMSgTinSBPK5p4ZnNQeg96yXcfD9RYrbT8terAb9Ev",
  "key19": "q4EPmUA9Gb4NnB7GMsXvKQ2bqrYMVA4aGRCVUzLmRbUkH5LgeCPiTFqVJJV9mHePx4SDTdkhCc4mmxNphzfnFX1",
  "key20": "wtqQsvY27uN5ZwRMP31dJgVhkd5Rbfs1Cko79norFtqGobMMaW6hZ8riuxChigBoQ4vbF8aoenmDjjNey95ARZA",
  "key21": "25Ljso1gFhk1CfGL76fxzGXZNZv1nNeBScNp8u7U3ow9MczSi47B5cFZQjELfAfQmHmpjLBKm1ro39mW6YEmXJKg",
  "key22": "nQhW8dCCmuMQnFgySRayHDDbeQd8Qn8851fyYpnJFLZHkQZF69TY4bLDcTJp7HpjcUTyhSH43XF12j7X9NjL4YE",
  "key23": "Pa7MLoopToQboTTe2SQRBkbvQfHUagpwkMXMVEGp2cqRkAAXDYTSt6SpRrRNXyyXegiwkXC7CZdmvGcEcciuu1e",
  "key24": "5NfYXcZWRZL1hnEhChhQfUwymQfDCnMYQ62gC8GhGpNRrUxvGLmw1py89xLSsrCdNtEm9q4TdJUbQgSLFSa2h2xD",
  "key25": "43AC6r9gKvYg14TtYduUYciyRWJnoghkHvdPndi9C7a4nRMHhTCZ8738N8VQ7s3J9hAUNyhoGe24B6Swd62fM5tR",
  "key26": "5HmWDGRPvZS75Z5w7RUqxMKcMpyFb1ezNR8MnZRGbL4psrd5EGwpPGmxJRpjZ7gdiPqxf3TjGeEHwUhEjN1PJaCt",
  "key27": "52yNocNaZDh6KzicVMp49ieYp92NGksKbPVLV6GGZfdCKxQoyrEfHWz9ktAMhb7YC65eBwifpqyjGWzGpkNn23EW",
  "key28": "4UxTjxziLewdkTCSv6uq3AKUvT3DaWpbu6YAacPwJk4c2fWmonZhUGPsooShpNpnYYmhJbdmdF5HHvZXyNG7D4Hp",
  "key29": "5iHZ1iSULRTjuDZ6HBPKKvkZGnVTY449LGTp8rLSesUgezU5jX9G1LcQqRJJJHzQsfZp9chBZnZ52h3j44Qk4uC1",
  "key30": "3aTNtdzPpVwTMNR3UJwRfD9YSgeEpAAoHf6QmEJiSeBaNE86QSP26VdHxeb3gf9WeARkBfZWjqVPDJUW6dNcdxTp",
  "key31": "5ggzgbfXZ47EjK1BMh4oe1F1mfpJtnxPejWWtkdTeqRhpq7Jy649hMw8sqnSm8FA9SxziUhsyg6S6MtgXbCtqbQF",
  "key32": "4N47ZuUAFhgYiKQ2YiKUVEJADNqGk2h2hUWBqsEguatmchcUzv531Q8PjRkmSZYoXdjZ94ARehsSzDD6Z228Dsyw",
  "key33": "355CosCSjYMFfRovZFEb8fS49dnnGpXrJ2v7JYD8poGjsDM8BVvRnCbDTv86cJhHiySQkac5pqYVFfphcP51ki3w",
  "key34": "5xwBGZsPdUf3wVqqUK3qR3GbjkTpEA5PGg6x3YukoyBLHhoftqpXaLatd7LPp9kXKCvDxz8RNe6n9hqnawoYua4t",
  "key35": "5ToxrsTy5vx3MwJosLvRsXpGMtafh6LvBmPgxHJhMfHuBMEEunDMuqoDT44EuQF1YsngmZrQ1ctJ34AGq5JyMsqi",
  "key36": "5YPbreJA4eEWKqmSMvLSX7n6PbKwPfxg6JtppPtbxREhqQzpv7SE4RLovNgkyCNYjhDuYggP6WHW5ctNhUyFtyvA",
  "key37": "2EkAhBujBtDh6FJVVucEcEkMbJSXpZH23Gtd8fc2uMEeCBHBin8WUprpEv28K5vfDyjsabRpyHb1UMwpWX67Lr3x",
  "key38": "2suJg6xTFGdbbQkoqYQ3tcrWD7X7eZ9PNyfFwYD5fpbFwHpCRyYXNBPRGLBHRctThoanb1WtmxSsQP3gkyW66A3W",
  "key39": "5pjXdycgUGkT8iyUmZ9LB3WqtS1KtM5f56aGDBJJprbJGR4qchkfDuzeUthszJF7CpDXPm6DSHw3gAhYnWT1WJhD",
  "key40": "5zBbXRFsumDUJ4BatnbHzZB3JwurW52ges3f9R84mBHUvzWEQgeUppTdmFBGE63Bsj7M4RaL6VumtsNeFSv6X7Kt",
  "key41": "MnQ37TEM22eCTLgYFGV9Q45VPx2URGA1eLLwdTEvKjfoeUGPDRLPnRbJoEBtctY6rWvxhi5tgdRPRzqQrHqmoR9",
  "key42": "37NggmwwYWMnHdGJffScbHUaaSDRn8fD6rkZeNJtx23c1oQJEWqFPGiFHawFxkvaNXPEHfWRjjQJUTQZB21Hxe46",
  "key43": "4K6AunGAyMgozWjkXrSwC1dq5LAj5ydfuJyzYKjoQZZEnajZG4jnSpcEShAwyxXqMfTEiwzeWKNmVQw78bGzFgMJ",
  "key44": "dDdU7Nyn3hTq3X8hL8WMGZxMtzySNwf2ALM7CZsRMjHKTWM3yqnqVyPSYmvUFeam7cx2BWoubfi7JoUKAgEmZGt",
  "key45": "4jSMrNu6w5zz2kdm5Fe4edKtVwNtupbnGMZSk62T4yuy5ddTh5UND8NcMwgsjcj7CBbMwEo7p7Y6nSSZvhcZ58DU",
  "key46": "3WXj9UiqaPsQNmSNpm5vnTd9FePhogr7uEeFJe2JYZdLLeinSXZYZApN99W3tTT1stzwVdNuVY6SMX1NNujpu3CQ",
  "key47": "Hh6zxLC4zYAhvcnKEeKxiHPRdoAAzyPo2Coi6zpqTQiZ6uYdmf1Vqx1Ctd3uQG4xV6WXqAKjQ6pV4L8XvmitiCz"
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
