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
    "5VmRj1zSewjNeiXjJTcvHwbKS5PU5AHvZhxbb5hpt4gQ1xebqvExXYZqovfw4Vv94yxAvKGaBCKPJzjFECTB498A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PL2rN2bnpuYp6ubigQG4cBdPzRG1MV4eb8S6LdvFNzTPhUQh76WL7FnUN42v5gUYBL5WDBR8UGiv49udyoWr7xr",
  "key1": "5kJxvxeJze3QzD4moKQarNqAnPSqaSK3uDU9aYuyYJdu8E5mvAQcGPd1FCpoVnm3K7newmvBbBvnLdR7hTZFKk1N",
  "key2": "4zvDHmr6wmsxqyaXBMBVLgHqZcAFNzSes5nzS9JsiekzMXQqDALucy9bnmGQbzvV2XvfTtNPrwSCLVczH6ykbQUX",
  "key3": "5wXqQ1NErs5rP9ZG2hEXiY5phqmiptv53UujVFG9GmNZoae6yqKagDjWn2M1ZFqW8Ad1vVhs6SFLkaRkLhog9vG4",
  "key4": "4Td5QLunEqewewgiAD5aBkonWoB5DEELe4zxATxihzw3dj6A4Ltx9WQPMMK7dmNnxWDEdcvXSSrbJivcFsBgBhgv",
  "key5": "2wE4p7UtYUWXjWs9EheYrbXKt5byw2ghfWbqhRkBBzA5VuG2eVWo5Pg13GFNdLkggvCXBeDTMLZVJcQeZ7Uc9ZsG",
  "key6": "5WW6gALp2ZFe6qsB8rYdnvadJVe2DXrmcK7ztKDQJfvkzdFh6jGQShz2i2wmVPXYp6MXAgTpkRgT9cNownjzKZ4j",
  "key7": "58AkDy7tQfzTsY89FunUwxmpV4VyD9yUXGPkJ2wnifj6xPGmkYunMHhCuDdd8jJjP9TLhKpYD7Hbrgd8DEB9BcHN",
  "key8": "5AGtDjD9mCNFYEvs8WyRLYDP2EQ5VoYQm1te6c9gc1ViiDAg44QheV83Txk61pLtcVtwPjppR3sE9a3Gb1ibYrpT",
  "key9": "64x68x8JT164D1JjC4k5s8UTACcVXbM8Y8oEdA1N7RUhH5QZeANZEeARL8oiqwGFHK1anpfvAs4spzxfADsFxeGq",
  "key10": "37KBefZbGa5Jk895xddfdP1WiZxZVosVqBwatfQMdsfchjc6BpWdCYGt885eaEbBnGgJFJnJUWMbFLBCoru64RVE",
  "key11": "2enFZpuUs93GhCQmRFbFi4FhDp3JsyR4H1saCfJ58x9wxFGVXLkVZZB53hF5dqebYKBgg2gNET9oQegnu3BLYHnD",
  "key12": "nHoRbAqDEpZjiLEjKy2brm7HGqJ1CZLAbQzyRjN1mkMsixeaynzs92RHMt2pPXmZQP7ygSCAs64Ad9eWN9UzsPC",
  "key13": "5wkPdACeQUmgoneh9idHEiQeHVHPqNUHz1X9WjcDXUNN5AjqpHa9yxzxZ4jzviMVBDdXMSHvmEfY6WsxgGYYVKxK",
  "key14": "3894dKG1temLeCdCU5HX41uNBfwJwvmVnCkuBYfwzLBHwEKAkrMkq9K5T56xQVJMKNcka9Qprwio54rQB3vToKZg",
  "key15": "4PsiPh4ZvhmREdg1LYE33pyWCfJYQWGrGzu74eFdWHu97fNxMFp2K8PCPn2e9AWviBuiDtDLsxgpfKZSDWyR2XpB",
  "key16": "33aYAf2G2aAe4VHhtKYDpmgoUedQsgYq8hx3smpS8BsvmDvAxdGzQWmm48eAKpqesjhNJ88UEVEzR9keEu82kW1R",
  "key17": "62dwPeE4EYcZtKbcNPto6rzy9Lie5X5fagvczbNefpfgU9oqqotF5TssQ6JMQGKMkdsZ2W7jRciXFAKzf42rCPSr",
  "key18": "5bSgX4TaWLoTrvaEkvyw6hNvyUYdRYeT5VRRBnEyPYmgkkeiUPhLp8JjKB9R32a7qCnhkAMQWp38SXuhAksUzwwD",
  "key19": "onRsySAZqjX5oBTkbeUab4EJy4Si66rAqbmWcEVy7borjLhR45Y3zUvdYQDKk2FLo3ZBg4XPva1AsewysX2dQ3j",
  "key20": "4r1JLZZrF4dQCAQ7X1u6MU9TWmyKsec7CH4BrzE1oB4c2c2zomi29JSGtcW9cXEZDVsMBKiCbi5u8btWHNP5jRmi",
  "key21": "4aczBPiDfE9tjnbFS4uwLjzrZtKUFmDPSePQT5ZeSwUrxiuhxiF6vGU9n3RfqmcKtKEtAzp31xQT2NA7pMTuWi6g",
  "key22": "4WEbK45AFJoD87mhatkaSri5XsVDJJDX9WJnxSU7JbYYAwdBYHioek2eNu51qmb6R5dHoXwRNcT62SHhV9LRfT4D",
  "key23": "4117ox4N6XLB8MCwaYaEQ6JuyMPDJSPvdHAwbAzsiH2pE45jPhBRFuUYbY5JvxPYfxqwn4EW5FVeFotPeDXnRz9o",
  "key24": "3BSsJ9owHZWv4ZmE4iSmvb91gh78buvLjeJqabyZJyp2q9azTgJktEk1BVg8P5wFdFoRWYUaHnePitiNxLZgfjyE",
  "key25": "3ptWYBkxcFGmzqavrB3GCRifKZu2zfDD1tNUytiD9jqkW4TPXRmYZsdyGoUFkT8KdhSVScFeP5s8BLig3jZ5aDad",
  "key26": "2HREnPc5K5b51vNYmKLaKxTXka8PMsDE674zXTRhqLUXgGH1VRXLd4vhK8fUCWEdi3D6sd8cW8xAp4sT53YgWebG",
  "key27": "ctLECPJib2y3cgUgcE12pibszjCNWeHgJW9J35su5CWSL5iZfcp6BJ3GopdB2kT6PVrv4sTkCqKX9k3ScJuWnLi",
  "key28": "jkUNDLc3cv5JVXzHWWXkMcKHvFqYv23upp2ScRdQrQnGbraNCRdykX2vzMWeeNpLkjmymtJyXBjhj1pe39QDpH6",
  "key29": "3x92iZP6mza9gQZrFftokA9ZwQBkKHz3uX8vqMATbLnKSKvUiRgbVNxLptk5aAqcBk1aAhfWT15xAT3MyL9TDacC",
  "key30": "5cz7wgHEU7NzBSmSTe66NhnqeVEd5yyz8vhdq8HH9kALWgfx7nHiQrNkEWim9FVdEHCsyMCFpDjDqQvH7ATQsQBh",
  "key31": "382QvemTByP9KfiUQ6CsTVkbJcKJqcz916qPPwKazskdF5Lxf3RA8MuWDjCGDsN88rNhWNsgiqKam1osu46NpUTZ",
  "key32": "34zaEjs4jCybpbatt4xofUGdKkPncJFU1EmybCr5bXvv2vaRuxuS7YHwXcfVy1u6pN2AcukLDBAKppx6wbnNNFej",
  "key33": "29iQm2FFha6ZFqX39vGtbi9mdhhuK2GC3zyE9XsaGXMvHeanS6cKBKtGxxyNdZTuPvFqNRKSEi8qf5QKe2twgs1x",
  "key34": "5jmCvzP84zZsPyJDpP4t7Cn9sRKnAN5GsnbqpBRNYtwsR3d2jgK3AHfkCKNVUXBHwkTFaw5ouTymDo74asxmWwBr",
  "key35": "2ib1vipdg6fynv49X87ZaWuFH3UWesY2q9bmmmQQhpJZ7HqmwQxNo9CmWf4XJ1arpdBVi3pKgcDX1cFbxwhwoYhk",
  "key36": "3YALZPtkdh1pzqGRxFrrFTEnshcbPG6RTcFkDcxVexUwm6kxwB865VEJ7chuB97NpczDEBomzPBpaDXEV9idGvxf",
  "key37": "5yjJbaamgdTZuhTZuSQfEskRvxRPGTWisqUXS5XCWJ6ZUwzQMuxu3QWPNBE65TKPApPmRtva8hSJt9Jv3sBZdPaK",
  "key38": "3vWbyhevh3Hjw8S3j26n6GbrswHeoNzRjhM4cQHqmSACwFjhGwpm4a2RJ1eunWer22gu5FeBoFn3XUoYE7GP7Bt5",
  "key39": "3H668GaBe7HDPsvE8N9V7rXK7eaYHmtoVHPTpyDPXUJb9gnAhDVwwdiRYiNDvhZJr9DDEDZ1ceo5KjRtDs57Pu5r",
  "key40": "61Pa38QAZw4PJJcnAL5KB22qyRF2ggqWH1w8NPLmuj3npnhsDYDvYcxA5YnSUdJXWJCa1gymJq9k1jbpVVHDgfRH",
  "key41": "4Z9pcsTFLWuMfYr21FPxeQcmSAcBsYR6h1FKgnVjjvLULZyovJRiL2EMzVMM282wrrMFPaSXcxbsSXj7k9FanL1G",
  "key42": "372dcKYadwDbZUCkqnZY5WNqHTfufP2qDNEa2zTLuKH1K8yWd3ViaUtnbkeGfoRTsvsPVrTqb4TbH9CEv7VKAAzN",
  "key43": "4LCPqoHzn6rnz8L7cjSrRApRZx76Bj9EBg4HfNwFJ71AAtzxxgXWgkATNvBUyZRW93dU8F8oaq9FVsKDRw6MGejx",
  "key44": "FhPhodmnuDk3FhmS1mpjSag5BuFNxh6TCAD6tEPgbp3vjLYwHqrcb3rmnqMxqFDG5oKbFAsRB4ZHLoPkET8YnaH",
  "key45": "2HFURVu5LNyLh8qA1rSMUtR7BHQAoHogZ7UL5tyQHpugKezD6TGDpfoaPsMYt4ZdUQqqnBjX1Q6Jt5vQiwoobrbh",
  "key46": "4fjhWzMchZAM61LPQh2VvAVj5uSU6ZrqKG9puJaFFPoFqUGiYE5qxqykvrvnwJCBbAjcjJscjgkUcyxhre4Yv5zi",
  "key47": "3kNBmEnCzKWTi74SWJiNVKGfRnUtq8Qsw6UsPbqvN5kAjgM9jZMrA7wAVQoiHJPgp8bffr3dnbVrrCAtPYLJD9mk",
  "key48": "3zVJqSmatYKEmRqyXroNYfaonNEpqG62hUE1GWsehx8GgzgmQunT5KNmXwFoe3R994Q95ZGS7LJVKXvq3kBPr11q",
  "key49": "4Tff4gUUHBYankcgXaoAMQdokBG3e4SEfC3EctikWkJkcQEG7dwbkL8GtY4wnPtYCikVHbArf9S39TdHRxnewNae"
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
