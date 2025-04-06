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
    "3HAtukEN6RTf3sc4mbsK5eFUexiEUPiWnJx6ucw7H6tEqQMUZ4TsWUCmuASibX9BZfjajQonuP3WSCVN3XTEtbA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vb9GXZ7tpmxVwrQNZtgWm9WsWQoqgNtj5RT1TG6DQsumfbvbnZJ4z6svVifCFr4UpmrpNPNohK9PrVQXTmnn4m8",
  "key1": "5TdLZpicjU72AnScJ5fU1AdtierR2rUPUVQV9WjaRBfCfYdddSpFHynHDHbD1Uf5iAjPNg6P1jDFgc9ProsWJrdX",
  "key2": "3puo4LdQXymYoQHb6cnUerdNh759ufDYMZA3xY8XPTxzceMs25W4ekxVaNKxDSEdDdePtgqZaWhv3baCz954HXsn",
  "key3": "2SbSsig1veU4iYfVZkb8LYpuz6vTGYezRn1v8NsyS4nHvP1asR48gndPWsY4VTiduvsef1PDchdJwUCcPpY253HN",
  "key4": "3EhxfvmwqpetZ9dtXGKuoTWGfuCvCovycESjNbryuNAVjV6B45zeE4u6i3rvyyCEbrPa2FJLhAYNrYDvPuTsEfb",
  "key5": "34duNGmGa6LkMQ74SZvTwxf1sDD7ty5c3G88QujRD7HwL6j1275vRnEktVGSWrV5t46q57bKudZ4yAE1eQSWnwwJ",
  "key6": "64buwmBTf72dVUDp2SsaJfTCxGXjVB89ipGLdpWqTWZHcA8hbRgTXkM7VNMxNpZH2PGPTRPR8vS4eZbbP82N5Mzy",
  "key7": "XWLM7Zmkx5WBjvQQkLyivpExQwwfseePvAcuUXkXY6LQUkaqwro9jupm9ythkVG2N3nj6z4x9CAkHKqnx2jSd1D",
  "key8": "5oPsLJLqTpPknbqEHaLMMntVPAn2qE2qw9J5tRzuBcSCm3SpLessWtzE8UqKCuWhrTRrmh5dWVwSdDZ12BwJ4gbS",
  "key9": "2aNyTvAcfDKuZeSFoAVFhGnVqp6YqwyyaSyVY7bX1ELgiSD8H1ACPhdtUzx8M3MgoztqfpQqcEYzXa3a3m4TnB6t",
  "key10": "3eQfRivge9bxgqroL6Mk8vdS9UstFZZ1W5oEqXHrAjG3dvpRhu97uCSYhrDdnbEMAqv14xJCK3f1HW5YZ4PXHSo7",
  "key11": "2xAuUt3aBKAySogEEri4nvS3xTGsjEWKtrJXwJQpEkAXTfe2e7bRwVXwy3xFScH5vSH5PBtub32QXzpeCVuwCCW1",
  "key12": "35TBVa7cMJaqjqqunWvRtTPNkFUZNxZvGAYd9iDEL3R75pPau64ARjQh5QfgRyUyuvPgYtGbtgTH7182VS2xQF16",
  "key13": "3B72v6B6gCEKBzKZPu3myTPbob86pgxNiLQXiappYjBnVYzpyzaWUNsQiaykfLLQcUdnBACcmqFKLav7TxuAyXrY",
  "key14": "GHUfyfdxggyZWCxidmCSWMUBLmvjHCeqhcvs1NE5r4Wv5oa9MBZ4Jc8MRc1huZ9GTm68GxnVnrBL7w1bH1V4bM4",
  "key15": "bjVdnpPLiDBLJzGeaQjPaLWpEFTymRMpZsgm5Kxpry6mRYdqMAWi2dAcKpqeRmwqJZXkqqPG68e8vuCvQxdNmMj",
  "key16": "2ZcJCGiz3Hdws8nVf3mdx93nwbWdyDEH2ztJ73SK3pe8bC8mXPs85NiP8PT2ASFV54KwbktkvyMLhggVYnvxAq6F",
  "key17": "9P8HeH4NbZYFxLqgYEY3z5r8eQRLgYfTqVbkjyNUCXT8ngDfm1QZrUXzeaTMHKWPqt3L5LvN62XUmYDnd8tYiEz",
  "key18": "5yLeMa4QsgpUSDibwpkk5nVVj5mTgT8JhJijREefkSFp7DBfxv5h4MqA8kFzENiNCKpceihwsWYLfhdrUwaSfXwd",
  "key19": "RPU4iXbQNxAgZu9FAjMymDSE2oUSE3FqbPSnmTEjRXN9sNGEfdKwGQ8qSyGX3z69GzrYQc383KnAAfyqnAvzaJK",
  "key20": "4W4Po8pyppgxxLkpXsuj1xeUvg72NdNjPKUdMrHeRNJtfnBSKYHy8DETFhGKa8PL9C1AhBTprVJKQqdNMNt5mw5B",
  "key21": "4JoMY9mVDFmrikd9ihjXRdE3WcKon5DjspGnjTqFt1M71ttxaL8wT5xswN3rWssbPqQc5pLSxbMpcUf4YUat3SYX",
  "key22": "4ugTw6fK8DUEUzkMgxb1iuAb5efE3D4WfXfyLUKFYXJHtr4FN6J4v6sgP2EkztiR4G2oUfZTMkvxeQnfMrikLxma",
  "key23": "4VSxyGUed5U2YkXgZkVgK4FPaaZuzyAcrWjXEZYFHJfLQM5P5dyHiYitC9JpsSmKLUN3nZfGSa1WLzdJd9VhFZjY",
  "key24": "rrT4FJM5To2oD9hWnYGjxCBZmd9Koo2wfvs9ciRYLuYBgdHheNHduFHFfVYuHdf8pqsSsnWUREUFnjTXDQEhnT7",
  "key25": "4jSENZCn4vvvUapok1Bre6MKC6dgdsxdzqQPt4bdzjF8EAuoyVw33eeW74UNaXjK2kNE5yoruBjQhCpEppfqqaHi",
  "key26": "5XAx6easU6DwyEKAFupyKCJsFtvm5PAJqDdTpyVqE11D7ddSaQZHba1qh6jaeXGAf621LW6QYmDLb3WUdTNezyDm",
  "key27": "4cbfC7XMkgMve5KZAvdWNvyJkcauNZUtLULmSuAmZpE1J3dbgbykQ2Kobif5hQyHLmwqGGL7RPXVjptx7RHsQYm6",
  "key28": "4UE4NyquU5yodP7nZ1aBdRNmQg1MUCMS6tqLUuTAXcZYeqVscDjF7WM2AZTWR4i4o1bwVfDoSQX7Xkw25HLHuiBf",
  "key29": "4GozWxCpZzECnK6ghx92H5McgA95PXLZehSYzQb1NVx3DyPMNhvzj2juNtPW1NRh5Rp5oASJE46PTv26K8iSKfJf",
  "key30": "RcjTKK2y4h98aSNxkFz659Q11f5mk6dhNRcpVbFXfSHCvUWV4N3KvQjWNELTPS34mn8QeZ8yiUG1qrRuSkjtbM3",
  "key31": "NAUADc4HCpzcXXETD3MikqLjCGmTZMtpHyioEPSKESLSGNBG2bpnseCVJnFBnZnPoGVuKijKiZrwheZJ2dZJN9y",
  "key32": "2eEyX3NwVer6oYYAx6oXPmAXsURjtHHX4bxeRXJZb5UYVfDYCxyVq6Rf2KEUm34ygg9RkGkdJaHEcZnKcEygNPzk",
  "key33": "5UQNv8n3GxXZ642YkDXUPfA3r8Wk5dMNiQsXb9EM6Q1hykJwMtMFRCDs7a3rVjjQzacMviXwRz1GdhUd9MQZE2JV",
  "key34": "2MP7GGRe9PY92DjwYRSRcv2CpiqAWgW8YF4xDVCo3pSU1XDr5E6c2mvT1pYY3RrmVgAFoHHAjK3ndw7ggyipFLJv",
  "key35": "49Y4KfdLCVLLrNjaXAzc9W2KoiR5djiiPujf1efj9drjXNVcmMmjepqpnqfbFYroQNgPiN9LA9Fku9cdTRKkbct1",
  "key36": "5w3o3TVUbdmAh2gjJRcCx6W4oXccofEeze1W2FSDdqyqo1KF3BQfG6pizvdAJW6x154BdEy2LEj2Zfsn1NEwidub",
  "key37": "4DT1rrVQ9rUTjToeU6oQC4SDjoFDUWQpWAMLefNf6aRsiJrhGWZ8vgvUGNh2inKyaQEQfLYQwp2Hqp9RkTAF4yAS",
  "key38": "2tPpmwyte3AvoK7VksFF9YThpipVB9YcAyvVK5zjJ8kX6PZQLS6CGkyv6qJpQtSmxiVmWvsmC4StAP6tk5tWAudS",
  "key39": "3Fx9T5RZNZraSFEWj1dEAe7srvDRnHhSChMcfiBRZwmLqGkb8gyveAqQ5VQrUt3uM4MYQL8Z5tNvRJb212Mm8FCc",
  "key40": "4BSjgfiSSyRRZqfVJgdjaSdbHfn98u7zjN1Y3LWUxfHNunxWXG19mCDKCoJqg5681k79BLRKMFTcV4XuWfZScWSJ",
  "key41": "5WboTmqaTuHsFvQ2srWYLHP3NVZqPYKB4yNZxsfd87YPjnubPAjS4W3oZZyyjFbbdErUDpvQHhfLoF4gkL7MXDgx",
  "key42": "24MvNb9KY6SepzXxojaR5rLXfU8n4PZjKeoxqBhNbc4EBD2fRJ5QWUJQSoMUmwdjqMYYWDeRKtYb6ZAqGXdPMP6t",
  "key43": "3BfixVmMBogymfxBJWiBDgVvJXhsahfzmttAr1Li1RJVwV9ttodxgrYNSrMpu9zArUcSuq1jdKXzNzcXi5sjP6DF",
  "key44": "39B2Nt45KBJfrF6sAtd8dMp9cXdJWRfVNnwYk8fUnqyg5nib2iJCSaaJcixifkvZ1YJFFwEEYS8aJxvfYmLWBaMJ",
  "key45": "BCJvgrKgQbchS4Mw72HTYtodtLjSwXUXj8rrpbrDBRideG5jreoGRdPrAxRj9Fh7yxyon7Kb34GpFcjBPdknop6",
  "key46": "4xG3Ehyd8bYDh55uY6UWgWYGYjhuqKr1SwfjNA5g1sE27NnuAMoXLEaoYiDHkcwuUosAf8Pyv8YgmVzELg8BhJA7",
  "key47": "528GmiLGkbCuhJyayxujndSawZRrKNkN38bgiaZ2cSUaTJCzEhkp7X43pEuHs4GcyYTWkEfmowubjmWfqPXiADXc",
  "key48": "4cEBjKyEC3qMmTsCdZEmA7gnDSp4cEwLGESVKeyzW3UcGzuEXdP9KUyZQ33B53y3vX9TrzofcztEi2MNg9CctuHj",
  "key49": "3217S3xxYLM4VVrj9WeQH7fAv4JWFjzFEYGFcxW3ZwCwg1p5wy2TNnzdt5UfAwAjVLFFXzJjQkT9nS1TZyjSAL8A"
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
