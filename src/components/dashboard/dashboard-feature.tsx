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
    "tJyKupMFnpxppLcxXtobu6DdKnYeoZb4cj8Ji9H58T6j9vAYr3ZLWQLqfHC2ZkuqPVaTDCLBcna7AHSkbZh3kZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "355WxdaALGgpyoU7jj5SqQi9Qn9Bhnm5Zz2XjHDpCvDBhxdiEKJv2xqDCzgACGELnRBHzrjAqoY7E7WNETASA8GN",
  "key1": "4skRJ6MWi8T6BNqsnqWPZzkBSjftWcmp8zgPmXzJgd7CRsip6Fge3pC4LnQiq8i3tc9DreGz5Eu8He1Qznikyu1V",
  "key2": "2k3NeHoeHxTtVRqv12PvLRd4WRX84mXe2NY7neH2wrFzPQuxFsAyGEd5sKzVXbMd9P9NoX2yenmxq4HpbwSqs58G",
  "key3": "2j9ZQ5i3vmBiipuy3SgXbkgKVcrDJLJqzf2r6U5J5g3ajhPDe2yVWuZndHoJtS1FtY2thgcTwQnCnwxCgNmzbd4c",
  "key4": "26CMd1T8FuJgGHFw3DHCAFozFsYDHyThstcsP4dpca1QpdSxqKz16VUc5Vup8v6NVLA8f1HfRMjyHHYX3gSVGs8u",
  "key5": "3AHVqv5X9DqoZ7x1axCh3TYaizbrQoFHJ7VMpw7UCuhdSzNnhbkvi4qwczBD88RaVJHt46Wkt7PUnPxtKC7ZAnLf",
  "key6": "3jjGDfikNeUMqW6BPAvxx5TZdqihtPX8N3bBztUHebUga6Htb3KN97etNT4BgGEkKrBXKXXwWUM7R2YAWCYHUaCM",
  "key7": "59Pif8hZBuZDEa9FzQUn8zSMGFNK4NzAjVXC2jwB31F7KtVVvEGixzG8G2vpvLH4NCVUQ8uw2EBq83ogC1a5DNT7",
  "key8": "3jd1qkRi28woF7dKQZ4LxV1tnXdgvAFeA244bM9VKoJv3uviqRxwdEGoc9kMG7tNQTgvYxDQY4MZaU2GumeeL19x",
  "key9": "5Bn6jVc1D6tzABeRxzya5cXFYN8nGtRZMZunRvdnausQM3Tvtm17aUgdh78yZTYwGrfzNx1wy7q8J8x75H4787c2",
  "key10": "3SuHWxiQtcXLNpw5QVN1yr9SCDwN82arVHenSRQi7yBHD6y9RnB7jJmTHxnL9UvE1XUJvNFFi8fbxjkuwCUsGRN9",
  "key11": "7wYsF1F3bmJzfVkiumaxgwNmdTANRbk4FHEnDHU8bf18jWBggzfaTTg9LQZufjWU5reuYct3E2vCpTZuPNDDexJ",
  "key12": "u3gRthi4aD3ThL4FircyVNWTfESg4nEQCsgSAHnpoHf12uCt8tBL5T15mJoGHuLnShHFWJb3kcQHzMWRGKTYUN9",
  "key13": "3Xq9LKzgjKC336ooa6WwV9os8Dpdmpu7dYfaXG5K8DGMBDJPLi5naBsV6jr45Wqc9HBw48ACHMTxKzqew5zxVVuU",
  "key14": "4MEsW5yLC5L6Pu1JeGDaoznJMo8NLy8g75yj2KkkVyGVUtpYEkuHK8c1CxbgDSuPokhG73mbMLhXZLwixdYLrrf1",
  "key15": "fRhij21S9cuEF95bRyKZfR5EczLrWbwH7b4Dnto4ZczCbWvxAsAaHUr6CBzotMKgpyR8ibohyVnLBTnYu2CrYY6",
  "key16": "24UftBXDHx1maxPXfFnUppSjoXSYEakpxkmREMNdf5WW9QzJqJsw1RQPMJCNq1p7ymFq7Rxgp625YyHhCeekP3dY",
  "key17": "4FEfEvSXry4fK8g5Eg4NmXJHyVPWCb7tS3ANbYfdBxiwL3XaC1TaYkWbe3uK6bMqAsXYDSnJPT3k7h1jdEpzSFDE",
  "key18": "WxBmttvjrjVS3fXXCqZHg7DtYZGVXrMBanjJzsajfGLTmqnY3WmiouR7K7gwYx6kXg8n8EDGaEkmmFF2R9XEk2s",
  "key19": "3bxHdyMonRox1nsC9BnKKeimQUNrMjHH1zS4S1SEPppTRDxFFYiifBHCiMwuZQFyMK4fiGGQW2gfa8wAhuWciR95",
  "key20": "23xFvAC9yfc1kn26BknWtMWi5JemYZBySa1bPwRSu8WTtyGwk2rR5Rihs4rmxeFE1YzBjtoPFctFZ2kymZ4j8XC2",
  "key21": "25P4mJLdB8CxPdx4bVy4dCbCtQqZSy4mWCKtc6iMfpNfbZ6fTNDVGznjtkeRV2kzfcAepMzuvQ7dXktFtDrGsAQF",
  "key22": "2kw3BhrkceQBKxroaZNdtEMCtgcQLRUexMyw25eWgWnjxgSwtyfDrFvC7fTLNqXQ9G8g3URuK8ZkL55Q4BaMMLBg",
  "key23": "2Eb7H1mNKAdpnjG6XEV1jwUSyE9N5uGyCVnsXGJi6sXAkkj54xiEKLzzfwYrm1CWKHhuWso1uNEwe4g3jA8P1ShT",
  "key24": "oHNMFqR6qr8y7gBAxTgDBDQMXUxvAacaMbkV9SQGeMW7p1hvebqShCybVLnsMueDkHkNqbpjXxhQhHeHZC6pFa2",
  "key25": "3d4wea6wkqZ3Um9FA2dhNAB4uYQuuCAatWwAyZHTKmcPX5CkUwwztz7mz8rSZFrTdXXp69GPrjbhW8wDf7yvmtyN",
  "key26": "38wbYUrG1z18wSYnKVJkMhHjwEdjCBue8NgajzgCrP17dxAoNhtJwunm9fPo8QixDdZpMetMB5qDY24feXp28Fnn",
  "key27": "dXhh4i8ha6Nuzuy2XNTHvNqmoR6K1D5jbeD7ybKZ6QjtgvY3CpYCFdG6pigoRLNSVLaKkGxrdXeQ5AMaLoS9hmh",
  "key28": "5uwgzii1Zs7aZpvk47LJDpBA7e8BKBATPqQztx6sdG3C3qF58SKacpH6DW1Jg4SVS8gizyX4wJAqW9SNEbo44yzo",
  "key29": "3VLFKnKz7bWd8bgaw13erCMASCRA8LF1d1yrbzQKiLCEu9MU1zXboPnQS22wntATcRszmCx7TGBz4x7GA27tRAKd",
  "key30": "53WMZnCtZsQ6sV6tZhVxf36BvMriMKgnwtEPyayq8HKfCky2M8otunwUsrk9Cuw5rpYAbedz3M6VvsqoJVYqYZWx",
  "key31": "4XeDHogCT7sH1QAQPkfwea8YPye1dV16P6o9BSzebTXRh9z7oZQD9qmhXrvJJYGQTLDPF1sDbLinwtM4V6xxMMt3",
  "key32": "3Esy1127ygEdojJqP1acGaCxXnRVPi6VeBeMFQVQ7JwhyEaarCPCFxcWG5m1w79eRZ91sCYn4eRQFAeJvehBGwz4",
  "key33": "zVCDRFFGyhuYbbKXpLjfSAUbYiHcknxV4w9U3XZRUaS6P7LE8TANJhRQ8znHjKwB4Jz5oPVXijJ1JkYb8vJfLjW",
  "key34": "2iTAD5DQt2mffCaRCw6kX6qzUA35mxYnnDgpSYFY4CDc92jmY2NKx1oiBN8VKqorkmg5yvamAN5cmDG8WiQVgPQS",
  "key35": "2mrW8HLiAgumJ9cpntwkyQQevPgaW1eAxaMYhmmrNYAdJzyJdvAQ81YngEeZsHQfkQipz9MePcG9QKESFr18Mycc",
  "key36": "hDRpv6GqUJc3SQKRk5KMnyScNnjvSZiZU2KeiGX4p1yR3uELQysqADrh6V4ZZuG2RxJK9ELVupnUorXR4T97cbU",
  "key37": "cnFf8XdLA9fH22chYkuBnRMn7RxMP78jV8PFdDMCZ3hkYKa3ZxMxryeMN6SpFjGm3W9HfgojvLLYuB1zBNdrsx1",
  "key38": "5QukXnV5KdoCkt3Ch3N4fvL9jngSQAuZ7cYwL76TEmA4AGyESgLfrb2kp5522nKK1dJFJdwTDaYSSYG9LrjvFr4G",
  "key39": "69X98nm6cuRiu8tdUKqRQ7pvAn7pUK3tTst8LyW4kuf84i45BCB83abkbya7G2tJqPzjVjtN7G2VZWFRP68Jja6",
  "key40": "LzBkVkuxgqHP7G3evFg2DZjmu8xXEquBG8mbtFVeLZHj9pso2yRLWSAMEXxDPaBdtYGYZowg7LTayYdqpyp4eY3"
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
