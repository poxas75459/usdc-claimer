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
    "5mEgdqPsREWYSrQLMouwtRRCe8W187dMsE2DrGMJPxkPuKknehJjs2o3bcDsBf3n5LStXy7Wdos695wDK94azBPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NxkmbKUHuYFH9NEzm14TiMKXYnHLYuLZp2tZCzp9TUUV4mkdQZUApxPj7oYtt8okWh1UnPr8U6EtSFpjRaS52KL",
  "key1": "5MiVon1kw26LhN4qTJmPTvxnWCyG7jMmzNqDX2Lj8nZuqQui4TbfKRCqqt4QwLAa8WMazMqATcvFrYzrsfTLohfm",
  "key2": "4CYmxYYH4m77fjP5V18EKCBW9a858pYDiHELKfFemKsfBB2vjAmcjjKgMu6wcDRPNQbNpwoqF5sqpW2hgygXxW1j",
  "key3": "bJDs3rG2awD8RhYz3b4fRESbPrB2zF9b1fDiCqVuoqk9Rr6W3xufMN5uSkWBjBDfrgLk5JowaXBaBduttR2bcU3",
  "key4": "5pzCSdPyEAvV5kfueSoomWvwVcU4fskR5Hz2xXGeiwodx4s1jDh2KHkS5ZQgvTyt5pqMnUiD1kTKf6WQoL2H4N6U",
  "key5": "5naNfzTqawRXWgxEyCTkvRZBgZXXb1U3jaUp55mJKdJcFtzHYLPbfmXZQywsUyH1mANpxB2Nuh58DV5kHxYHmUxY",
  "key6": "3TgZsvKQCnFoexEaZCgtm5YLK1j5dC5jRZ2DmESjepFfhLgeetP9uXDJX18PpLNJDvBwZPe9xYxkcWY8nkS3E1XM",
  "key7": "4PfoPZVTiHk8b7fMFo5AHymoyiLSss8264GhBuoSG6Ah6G3ZhydEbPykg2EKuowz48DhWiMK34Sa6HrbkgQ6guo",
  "key8": "ST4ozK8hURXiG47pGxy9yZakowSecBeWuqK5rwrTR1j7zkBuDHcZs6Dp5L7mrZxAc9CXzccvgoR7v56Sa6SkqUz",
  "key9": "5zUnwUQPdfrpgjS4kLuJcNVVDxe2ETWZ3VHeUTQ1ZLZkHWknA4RwRjYUZCeMHfJyMPh7f97LFWqJ3zKkWX2xxh1Z",
  "key10": "2xbcW7pw3mRSEarQYPjgpXoYDCkWdYPeQPPJ2vuDhEWq8hmxjqJbM8L4RGjQ6rv8SL1mk5YxUvwXyu3oudLrbNAK",
  "key11": "57NcUcPGdeJwqnJmVZjZpYN9o9XbLeZgSeh36ZdKeGjwRvdptRBk1fyG8kXb1aihqkAoyrbTbzpZprMnSj8jX6vu",
  "key12": "djvKdo5CTuhWidoBi6Jv2NuiFu2FKGqbPibXLrUskA5Q6MwAWTkg25NHziB8AFE2fUsEXrQdEyXYwT95HyeZEeT",
  "key13": "hMenoecDXpmCxqqPRS9yueGqncEMTCvZFkkAPtj1QrMYGxyV7jAoU1s7ZXTZYkpES3mqWEBXpT5p4GDKUiv8g23",
  "key14": "nRQ6ZBVEaePBNzRPQSkAMV6ArLuRFiZrYZUNEbJKZEYXK814Agdd9cqiNBezuTwbiiZNDH3XNqVSYtFgeuCgZ4m",
  "key15": "2JZtFikjunkd7oy2UFDMVh4LanKAcnN1U9wnw7FpXNsntEgcuR95tofgaZ7Bdyb8cyknEJsnn3HivEena7CQwt6G",
  "key16": "2ZZkoGjrxDhs9ABSmig3Qpr2P8T1ghi3cuVJGbEApJcvdSMWpCLPTEGaXGZwNd8QvFtjBfhTEttsgmjRMy7HxJC8",
  "key17": "4JbpQQTmr2mfRHfmjwGin2GLwuznAGtxTDVeWay1hyJJZo8ck4WVfD5tiHgVxrDADUuUzTaRvosGU9QWuFF7644e",
  "key18": "nkJBFGtK1UGs7QeGZvfEXTc7TLCVJx5pBjSVLz32PcMG7TUMfNxSqYsL5in7HHcw7Ki4QqqaBCRmfSp7y7N8r3p",
  "key19": "3QKcEjHhdFbshJFNoioTN9vRKpEjrs6jFhGjh1WS2sR2HUhTcrreiFPFHRrsZW352FcPZ6c47AAw1GeXu79f1bZi",
  "key20": "gY1bYPPoDFStBgbmqBSTfYwsTov8j5KgqsYtdkaqXKfdpWQdRoi3BJyWVmTF6rnFSQyZER178ucsvJqwsnqJL3Z",
  "key21": "2WHT7TUT4qCJmTPdQkd7V5jZhGXNqai7iVHrgmaKUcsRW3ERFaMFmisr6BA6YGqTXxZDPGVyw3UagffRQVUt7og2",
  "key22": "5TCTpYZwuSmyiaFKrswEMsYnayATRCcqr3R8QxnirG3mw7ccKpNAp9bnj1n61zatS7o6R3wPot4rwcTi11v8eabH",
  "key23": "L3RzbWn5bJNTk2TCYwX7Z6DLqKdrPMejo3jfTQ47qmTUizrjDjuQoCLWg9ZfhcK7YLRQFXE49ManHynR6x3SUE6",
  "key24": "4uLAmMFjtZUQnij9razw1c6RxNDM5v7VA3jMssQqfo9y6sZsmZrEyEQiBJr1KZQ9UzQzGtqxXZc6UVm7goiiqf2o",
  "key25": "gYjkF46FAaxocKuj7bYMezu151tGCgxgzqeWea1XKW2idQpm2XKXi3H3ueeWgAAFrTENWLD62Fq3wy4nrKr2kyZ",
  "key26": "3XXNQbGikKQAsfmRBRS1gigkkW8irnaeKZV4Y5n1mJLMsDQarKALMktxXb8wfTAbj7HfCBkxVBuWqSvu6mWVFxz5",
  "key27": "5tcTyTiQKijeohsb6U59vnMvs3ZkjjmR89dx7LYVpHjWg45Dfu8suLpsNa97GMcQeWPe2MNESVJb3ZYinTuHBSkX",
  "key28": "4HE6uBUgM3fCMffB8xE8jExXVcWrZJXDQfFNCg68wsJxh3paFbXFmhMTCsVZNZDKd8BaB91PsG3YmHvu3xUHfLCk",
  "key29": "4cH32WFkEDqfPjXycDfVZbx9LzBNnRdjrLQyDNhBx6ShoRCP17B1DDTPXDUnXnfX6qCkYBwNDfGc62QvWXknnNND",
  "key30": "2mVpeLaZMnpfq18TvvMhY8RymwLH9EWs4jaKkC7sycBC7so8smhS7mQj8auUX566grknMsjAmoLeAqW39mTED5dG",
  "key31": "2BcuBdGsJnoACRaqTrTqc7k9FnwuyFwr41jTycqeGJdGjaWqcmivbf8Va1QWEsPRnwXNLxnaBzWsZNAKaMwFv9Vo",
  "key32": "4S8ki7LDJt9rnVK8NLprNon3u7vR5AxzeANxcuYC1gek1ToNNB1P94TusNKUHdqeSaX5hdh7xVy8cNsEw1CX5vHz",
  "key33": "4Fg6AvMJrKuyLWJkFLc6AaoF5kZyZFFuLv6sqTGCNhpAPrEf2ghsr8erpFU5B8br2wcNWaY5j8TJtVRaKTBrVUPP",
  "key34": "3sbzCKVozwrt42ezS1mvf2aJWWSDKbP2U9juj7x8uKJVeBeTu7WKfp4TjkBZE9vembDndDaU3ZKDo9Nw2VYJsRsA",
  "key35": "5bkszFGdSbrtZSdZWe1gCDHNWxDQ3Vjcv1jtS3n4ZorAZjbuDmc1c9jGkbprD8hoGwfGnEZagND7bXk97LSEscpU",
  "key36": "3Pq1d6KggtmaVPEeJdJYxNR94hSAKthte6cYkLF7uEKxr9RZXzQapSdcLiBbgbQCmt48B8FssscH58KhmkLYEHRG",
  "key37": "3Xzu5Q6APVcRv68Pbyo9YE9zQkGeBeta7ASBzLKJKWXJYLtBod7wW23gLK1BHLSn2fiMQHZWmancsZx2A2sqRocf"
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
