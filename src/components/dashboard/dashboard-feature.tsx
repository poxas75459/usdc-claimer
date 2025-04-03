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
    "5tXuUCvxqxFNcMGBHqyc7WQgxDbq5KwUFDBuM7WpCbJ5GiVEuTecXU5DPZ2pFAS1CyvTkNTWjfL8eBVsq2ymEUUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65eaR6GBiqKRtfM6QfWRf4Sq5gBJaWM35gRPbacxR5ieUpvJh8fV4LA565LB8ewTmHA5vfaRM3d8DmQvmLA4tQ8Z",
  "key1": "S1Vcv9abqBxKfbYCsmRSUns4gQfd5RCDhJAaemEV4e8vYHe8NpyYR7umMFsfAGjXGHXZTr32Ez37XKAvP7Vhq4m",
  "key2": "2Q3wMcXWJTaJBEmVK6uAU9VGQnKfLEqyhoCM5ENEHsk6YXYhFPoLfCkMur44a8HvWRcqGFzouv7a33o2HEdmSf9e",
  "key3": "43gzUim2i9LBPJTRbwvrHSrZd9bgJhrxkKZ6finokj6fYmQDaRsG8vQ9EJfGuVaT757wjstGEM8bxdYUVSJHmxFY",
  "key4": "3LukWCTw1n6qC1JzU8pwgptUaucQkvDMMKuSjoJRgmQCw1CVyBKnYQBPHKeLmGAnZXnHXiNqkVr51eeqqu6Tq46N",
  "key5": "4WtiHcBiPPR5TVXrsHueeqd5pZ9kpxKicQet58rNFb8sArc4J5Sv8jbzu6ZzWTbaHBWtBdtmPSsQW4TWRL3JjiGw",
  "key6": "3HqFiweK5MBgRk6PRFjJFyNjHPbVwizD7owfXnuEpomVEFPZXdJZcJ7ozbY4wrCkizsgsdDigjfHf7CWBZY4vfdP",
  "key7": "5wDdafEYg5J7y3J4kHuwzjNVohzyH45dsVrEnTC5oP1nQwKG4ENwyg5Uu2m926RDTFM3eeWLvLv94oJrFbbLySpH",
  "key8": "5cYbKyxjZjFvg4LD7Mm2Synj6uTgbaYmAsfwVFfRySVbzjgsyZ92rcUrjoWAakrvmhyrCMhx1wvCJGWXY2Mqaveo",
  "key9": "5MYcBLJcUfhXaDrAw4agDprqeV3LZxMxjb78TuBtV9sjkW5wuqWkYfWvVXnpSoyxf4ddGGCVVca5FQ2pF8uMghe9",
  "key10": "578HQL5NMGGcMPAtxq7unHdxHd1wpgyDfzrvMBYVD71NZzsdhVhE41hr9v8x9pKe1w1outf94waLSVVkdYJbUL65",
  "key11": "5JwUj9ohXufhgu8qdyxwrp3fEg6iVzF4HM3PentDrcba87sjJSLUGhCYVRDMfYcqsb9pM6z6ER8P8K2uYg7HLgQD",
  "key12": "4nkXzHnaW37XGCXdtDcznLLjA7jvT5gjtJ3TZuafnfNHjmaXkkaR3SJgbPXgZ1rw2cmSoTwvvRViU3Kv64DDkf27",
  "key13": "cVA6LPyxS422U8dk6Mnr22MtU76b6DamhH9iUj4GPNWYtc9MpwJg7hvULPNcvcxoQa62S2TNhfC8EbE5rwTGk31",
  "key14": "568MJKmWJHTGcn2JthasCoHPmyL9PgeNrnFdX1KXY7gC9WsZqAoadvtq5SJkmP6tGF8LXJggosJ4rWh1YPUTMDy6",
  "key15": "4mV5umeip1us3AWzC5QMKZNGwDjAjSqj7DhrMgXKYiSeYTDECnq1ouMLEQFtd3GsM8P4CDQYJkEmrxTBuU1UQmK",
  "key16": "3JMEEL4efyHnKAc12yQvnw4vLLaiFbBACAEsRjGS816q2y6PVFRydHyATJx6aCy5w5t5irrddqxLMJicd94Vv6LB",
  "key17": "35wVceDyrB938DVDpZ9c637dz14KySBnSjK4aCG37vqznzEE5HWU5CFE1ZMLtsmXhyaZzcaCCfYPkEb1tZ3TLhRk",
  "key18": "qLNyE1wr5fuQ89MFpdToGmk9tkYvirdbfgQ4p7Qfb7kidct2NjbZTboBpfH5qBM8bzKHzWhX4XDqmKobDiVU8k5",
  "key19": "4QP4hwdc423i3H9mNqqB3GL98V88GRdaG7VvwD9SxorhcpGv6G3Lzt22p1D1f3gewAgj4qxqWnVaATAxKxo4kH67",
  "key20": "4FWg6DiMt3Ti2FsMLoZSKwxX72S2LbSKneNWwZWoG9FkfgMMC1XzAZQ5rLHevMrknGL4SY7YUuKnrTsFq47Df9u4",
  "key21": "2j58FBSjEdaHCyWsVkKMuhQZfqdzvm45nhGundazTfxgKtqwYVSjMWJALkjisBGzNokU2TpLMhbP1xxeYKoSeW2p",
  "key22": "295pyLXgW7SN82ynehCg7wLLZ5YijxvxqxN4UT7dCsmGiSGDkSha69ayMG3QwaRnJdXvpLQG3pYGGZGPx47chWT7",
  "key23": "2m4ezkYd6dYFGwLwhdwXNqnmEXdC22UCagJyCPNvcf2NaSswpiCcrHdKpe1KfbSKqfzHwAbGM2q7vJWAMZZWPjRY",
  "key24": "2vXztD22z2EFqGVdCeiFCku65fwWE79zHU1KT5Qd8aum1Jafu1Rb8FqSrcRcppyGEALxboM3yZVBRQibK6NoNZkJ",
  "key25": "4PXiPRyrsEbphSHFVquBRXnevEppikdP81Xm6CGwobgFMk63gNRzsb3BqJ82WFsN6JcX2Eeo6AMoLtVkLVaHntsE",
  "key26": "4xwwe2hHCFsp7JnABFarNUQ9NAGs7KHwiRvyA9PAATbpWgTa1dC2WxykQBQ6urw1hWtCQmtsZYNUuVA12t6gNMZz",
  "key27": "3TkpFNNCH8wT1BbVtRBoJ71wqFyzCmSZj78wBHojLNENLDGg7pLeiwkaoyCen48Rek8bFGHNWrexkJueWZoBA5QA",
  "key28": "2iGvVsXejwsZfQeTiAFtrjFB1fWEiQNiRPEeEEXritDVvYJVX4ZatVS7vaFStAg7r21Z26RzvyKquZqVyTUhUc2j",
  "key29": "Z4wfzUQ9JfssihhN1MkDNwbGBcAa9CaxSuWNc8QcU1VEMFAtiYPU1CNrkQeDVwrGZYqqnqRzivu81m3Jzdi9r2h",
  "key30": "umzZGF9XMHhBKykmbmAwWnivtC2a276KQfNSzNEGoVGaN3ksuCxLQ42koV6rbrUGJn7eQrBoWELwCahqwQUBYw6",
  "key31": "5ScMAeouNjYchkcw1Ut1AUJ7kLA2CMWw5Ea8X4Hbb8qsFzgRLKiDcYUa6injCBxribRhxv5kXrpP6WvVnCcVEFPr",
  "key32": "AwRjaanErcy16CTYV2Z9uiEvRBZWzyh3TRqhkijMXzq2Uc8byLBEpW7X3Lb76RjfAiazmv6LCKCvrpJb6VTq7Eu",
  "key33": "5uMbwy8832p9sDmFPaYescoTaN2fNaERqm9SDZsMkwp33MgoVWppzBzCSNm6D19gMdHEGt8w9rmCSp3vBaWH73Bk",
  "key34": "4ujQJNBtHvCK1cQySxcemwDctyuCPhqTvrnQWd2zpzEsV8o9uwUbWXijErg6Thu7FDxLr49zKpZDQ5n5jQQ2he7A",
  "key35": "5wmR9ijmfRBJ6KVWSkAyZEsfgtZDKRa1zCXkyWk2oFYtoZRzt82ZtsVFpTAZVcjqkeS8SgjF9FfzGxDkuDQW1cos",
  "key36": "5m3CY1WY1josCGKKZbQB3NU6AhWufEv9FkEvm7WwyuypEj8kpww6xUv9CC2G3Gcjdd1YznjWPCNnVd5XdcSTWFcf",
  "key37": "P6UnfdisrnckA7vjVvmq8vovQcgXLNnqMUq23jBtJkTyre76MCyVYkz79bi5LMo7U9tKYfbpzYGRseFu3rVUYYP",
  "key38": "4XULRWvkuW38m188UqYZPsKab3ss7nbb47BwCoJMB7Umd6pB62uMeLn7ceqq9dSfcA9iSRGFjab8PEEh2ZWuo9Gd",
  "key39": "9WwfgXktyvvXmKkBU2BGHhMMKbPEYM3PbHCq3BHcZ5S88JzhdVGMmihnmoYaC1eerFuHp4B3T2SRijYvXC7n7T6",
  "key40": "45tvCEiEC2RPeMQHQSigDJZAPVg3Z8Y1DEwXSU8gdv6zgd4PoToCpDnAJpM7CzekW7kru2Fn3MxxvqsynMvx5YAW"
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
