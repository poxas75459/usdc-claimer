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
    "3jQo7WhBvyA2N29o2jMS81uvnsBWjZ96WXPYuQp79LMntsMTYvq9Boway7G5uURvcfp5QriCJp8wRLhQv9s8BEND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FJoxN9yo7t2DvWnPUKznsUduaguzCzJeexiTVkonEnxB8Go1jDNK7G7Nv7kySWJa5FPNpxFcpZxijNTmvBwGvQk",
  "key1": "4Jr3hj8GCTYC2nWpRV1rRwoL1nT7xMrQvJJnZrddihqeWkLc8uTjMaQfFSMdKvtF3SkeJnTJKf9fJVGFMwR7oN4t",
  "key2": "5Nbo4fQpwHk1b1GeBMGyJ1V4ZKxPRX1x2reEFSwg4tpqg4KqE2TCwhpAD1vDcbS1CWJ5YgrEbKA5V4XJmRkFgjoY",
  "key3": "4JHaBnf3Rs9rcFqFx2r9rxvxg9PG4mADYyWS6hDWLjiLgz7ovMauqEWwwjumi82H2exXTcwrJixsJCbtXrTm2jgS",
  "key4": "4QeThJZ6yBLxbGuK1WA43wdrmMuf5P8TmHRwj4tFcvAu85bfC7ssj5xva9rkMB4XUomTKd4afYvkk2motEJiZbuN",
  "key5": "63r5AwJqfyjH15ukiQNAUu35aWxGKsuHndGncVrvq1dEMPKZmSz7464QNQ6B4qpamAJ7LjD2f6XCmpwzpm3ULWYa",
  "key6": "2oXyKgBKqYph8GCXZ6HkmWFUE3ZsSXA6bUKqy1XJ648zvzeVfrQ83BPUCox1URXj93w84v5i2sdm6uVftTG1MK9r",
  "key7": "532b7aX1Wg8JGc56mwLLvWxi7VP1dNVZYh6QtfKbzB9p8Xoizb5cY2TTY1ToKiNaa3VSsGNCbpMwswhrCgMgrVhY",
  "key8": "5TEUhoiSqQtLycDi1u67QVHYanF1owKWD9ArEGQskTjKZ2ijBF3b8epAPYLCDxvrQ6oztYo1GDoL6P9oVR4DxYGY",
  "key9": "8hgzGNprYK1W7pxkuxyEndXxWK2x6QZ82TBzSbA92Et8NFmrP6cWheBaDx6bnC28WoxNHZMudwoTkd5yZhwLhzj",
  "key10": "rnxEUtXGUjQakjKbUbHdJXaLS81NKe67TNE2kHftEhqxfGeayiMj42thCeuXzZ74EGcxMHiM3Wa78FJGg1LDPaJ",
  "key11": "48xZPmkvAtuRWg6FMVg9EnX7mJ4JAuUnRsUXE9xsxXHAyWLQ3G2qFkBSk4F5NhqgVcib1kExrv1M2XJRRtfMThtS",
  "key12": "2sqf9T3sxu8eeqgMaCkmGRAyuV5qNThcxhX7Wzib3qVv4uLq4tFED8W8Ej6uBcv8cKqkDWxr194yrYdiJXsAPHYY",
  "key13": "3hdwKofTF7rtBN8uhRNShsVyM1mGVSiLzH8aHbvHH63gGG9erNnGPu3ReMA5KpS1z3vdzxz3bMcUyjizCPNjdcSt",
  "key14": "2izSKx4iKLm6vaTGA7nxdD74xJnzZBGnntGpXAsTgvugFfBe8QpLNkLvZHTR87fqkgwcxWQWBXhGaoWUzWNnZ1di",
  "key15": "MgwnXjTNqXqAeDgtJDgvEjkegpR8wabmBv8wqsg7Qy9oZu1UaPgoU4ZrJHcsH5STuyJXK3ezoig2VQjvJKNwU46",
  "key16": "2McF4pxZEbUNihaJoYaxrQQCscP6HSxW3Bp1ySV7GgLbFZ5HGi2NDrAozC3E3fj2A7bFtXZDHa5usy4HQZAzLVSp",
  "key17": "5CzKdonPxYo6ezGt3ArAfwNckSE5Vdb7EbmNYWFympnaJShhh3Zw7qSvFHDyckGFkrE51E56e7aNXUKUbN5ixCjy",
  "key18": "6FjxoKwCf3hSJuQH5rkLNwk7LqSCbtPRcCgWbNXTYRXXMrfaAa6Dq7ybtqpUfN3XVkyecoHuriFVpvMN4qpk2gU",
  "key19": "2gYXsWxdugu6cdb2C8ERisGs3zBDMGmD5TwBDyB8npygTaUYKeASaqBajwkjisdSA2tsPqvD7wzTwa94QF4CbnCe",
  "key20": "TYrTxYJWYN3eKLdKwFJs9EwSqX3UbeZahZTCZFLW6gEPRPtCRQNQctGxVCgRK8YUT37RMfYW136ZxoNvx7htpRN",
  "key21": "37v1DHH3VsHHZNf79PbjwgAiSJ7FoacfuCqEjBp6sjAGa5avLYBtiYdyNdP7qfc6xbnH3PvQnY483n7aD5gvCGKb",
  "key22": "hB3EY94L711WaWJYZtCnm8Wt6wtyq7KE2K4fJvpudGrEnFSARb53AJAq95etuqvBReKcKHqQcZV4Xzc8stfkF45",
  "key23": "3FymathcrozwGhax3TfdsLRnBYJSPCAKuMeioKvZKzbfwQpwPnGfaPs6p6sCLtW2VuJtA6H297jzWb9J4LjpxGeP",
  "key24": "5Ub4JYkZjefmhgQvfLgcdANE3NVhxdL4pttK6UjdyukVfZPMJHngL2hyYGDSpbMZTpyd2ooA6nAnzgxfV5swGonG",
  "key25": "k2Ynfyb5RfrjgSrdjHDtCtofwG5Zoeiy3v44oS3oAYxi3tWxgzx248aXPoEdNj7P2fuw85BTozdfoKtUt8qH5ad",
  "key26": "3DtCYCD6nhFedktJEre937qKyj1Zqa1gHTkxaRGsJkafyxHaWTHzoyE94F9g3m2VFdvH6kpVB7WRMjQPCRJWTytE",
  "key27": "2kxcB9EQGqjtCE8hUepnDjuCzuDvkxrp1jDgezJC6ESsmLVt28LbrAgR1G6SZx8cZxATr3aW6sGDm8v5b54hMFyf",
  "key28": "3a6RjS4aamfXMc9TKvuaeuMUjN83QyU4g6FBFXHSF1MPyLNNuKr3hS9XvHmbjc5Wbq44P9p9RWVNN4Tb9smHFaAF",
  "key29": "49FgYgMJfPHpJSFZPJMVVAbLcFsMS7Z2qJf9qy1PfxjGu5PFiwEHen1tqxUchatUasyoPjjnNbztfPnZ1W1D6Kku",
  "key30": "3EtLsMPuRYZXUpeyyGr52Mgw6utAExUbtRXQrZt76BxpHhpYEiKUXw3WJU5AfTXTAgcfuQm1ChADC7ZZfaUEtduX",
  "key31": "3bTxJiiYYGQ9eNAdcELsCCNU6PDsZuGsPr93RCAxagYAbkKKaXnxQ9ZGUBXpxUptXN7NGsXsKbjzGkJv9BsP7KWM",
  "key32": "5jSwoM1Ep93pfBdJfYWrQZkjVxj8VAYmDaQDgQJwYhjhCSu6wwJUorjXZhEYt2vowAYbWE7gnZxyKipfdZ8SU3dk",
  "key33": "3MZuQuba7mcnTLyYxUsWBYVJjNYfPb1G5y1DZs93MC1TYBQewufjFDXXBDiPJetUJ2BNAUgSFntQUGkFW46c3GWs",
  "key34": "3GeQSRurfTFmCKMabsEmEXb8jsH2ehQqdZm4EegxPQCutW6ada1MAtD7K49cpxDELySZYKHyxuWCr4ujf7bRjhLE",
  "key35": "5B9ggmdyjs3RnK4CfqrLLA83TaSNjtGT6UBWmCyubrFR2nKDhs9oeR3yaRxNfgzDFECLpV8hLPsuCXQaeubuoMWX",
  "key36": "jSfSW7dZnQzommqH6oCujZTLtoUB1XkLFa1hPU4FK42LGzSKVagAThoQoNTqm8PJuf71WPqRGGtZmHCegE5PfSG",
  "key37": "4PHZNuZinDNJtVoR6C8YsecUTsekp4oWgtwCFxodHuHKd97YRhsfUWRnBaJtdu3rkNFcWEb9FpWwEMSrjxpadkpg",
  "key38": "31jUG1DuW5aJ4ZwKYLbvpZxH2uHBtnefAijgYQpVCLsfHoHd9zG5TJNo3ckUvP8YCXcWQ1gZWzGDMCgyFotHnfXd",
  "key39": "gHejNNDqajc7QyVKzGTDiYwJTjm83Ma3caRaLW1p8JitwbFnaXr4Z13McRUsi8eyzCJhBQBbNczBs42Ngk94YWq",
  "key40": "5eTHGdDVQ3mdAfVipnTtt2dR3pWvWxF59pURfot3cPDia3SdfDyRbeJwU7tCs8Y96f5nfrFXabYjUVhaERtbAZhv",
  "key41": "46upy3vNBZcih3aMBzoukzprJJ9VGX1WGA5U3qyRyrnxrgbiHRBACAzbVrGeLX6stgnxzh92j6xKCE7kYabcQrWj"
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
