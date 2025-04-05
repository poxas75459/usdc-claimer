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
    "4Z6LiwAqhn4YqikViBPZHPbToTSycX6paUTwmJCTyZGsKwoRS2zN6x7Pk6v4fC69iqTuJSK5Ard4LuTwjRnN8aeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LiB3yQfcbueeRCnh5p6yP5iiUWMj5EKds89a4ZVxPp4VMDV7BrTZ1RyDApDJRPG8EsBE4oUsBW6EXHKzuQPT7rE",
  "key1": "5ogSavrGWbvJLaPiquiKt5qbyCJ2x4VCEg9soyHVKwe3vpnqo9x5N4JmjuBwNvBJJoTNQuavzD2erCKRpLxr5geg",
  "key2": "3PiDhk6oSZU7oBjxF7guvNdNMtfzSAVaVo5YTkwZ4DTEtLFHDZD89Hg4TSC6pBdfBWecFf19GBVMuSZSKLVRzzF8",
  "key3": "3QEJiuUSUkzWcQ9L4FLw4pC7Jnvt4XTyFLTvr1FyfyzSRV7SzMpVnUitdEdx9JjTEjLyMUnWwMG9SAejtiX4oXS1",
  "key4": "gg8b9Cxn6m7kmMLazvC7n9r4b1FgeGvmxvS6kiptxgGBarx7iADeoYcJF5fmyzgzvXjKbVsAwVDMGhDiW6Fu2HH",
  "key5": "2gdNH5w162fz91omsbPiFDgWXV8tiFVMgSnv2xC1V4vcrKoZzDSZWKzbodvjEECywFAgdyK5qXYPdGtiqxNLEGcn",
  "key6": "4J7JMfVuZdUwbQs5RWR8AG6eMpNHm8v3bT4vaimAe3uNcoVXehpwTgEETrWvRnZyqi6JAF5KzeZevH7fJ4U6QUfM",
  "key7": "2XPnWsEaG7aJStR5EoHrMd1Zi7H1RiurU9S71TeLFbFoSiEtrmw1eVruoswt93o4WYUMaY69K127TMVKMkASRDyi",
  "key8": "2UYydaHo4fVKygYmtMFKZZY9dkQdmDdWjZAnqwdSuab3tWHS4EfUTR1izEEcBaDE5kS9EasECx3VKWnKiRrgePrs",
  "key9": "2Ut3beagqD9f4AycJsVjpHyq956XZEPXJF582Sp365THQMn9E6avQjCPYzT751Rg8KkzYez1pJfZfhqGzCRfZe6u",
  "key10": "5zqy8srrqbDnbuawqsWCgmbFNAQVTxjKrkNnKgwFpWXGzhBrgTXqjZJ6pDMDC5tTTd3Gb8mLGtHmpuNq8Nizb5BQ",
  "key11": "21Cye3b9eztKpz2WJZqYnjC3rS596Gkzh9YM9WrdPpLt3rdL6zmcfPv8giM7xDCpSHdHXT2u1XSqhunCKe9GZCXy",
  "key12": "2MLsvefYFTjxs63TL93EbZfE4aLJZBx4GMYV5Ce6Nj7oTTiEqHWCX3NpCFLL8YS2GVxHKwXmxe8pQySsjjHwLHtR",
  "key13": "2eBZDgqcb8TDY17NxSHhKtuoY34ojYFwJRWBU8b1vWL8wMjZB2Aa3TRqmaxHTt1j8by55WhtTntzMs4ckuub4e3P",
  "key14": "3ehiuun4aFjVnJMAHxdzt3aKSsMFju2zUhVTiEtwQH9oQNxqVuLPtzYfwcNHNbBe4JGaymC5wyHXXaMw7rM12yqv",
  "key15": "4kd1JZ3Qk9GEL15sh7Qoa61hsLftqxbodau2nMc14wm2A4uXbVse2empRCagPLB3mv6ysb9pvpgT1rsUXEcRYsJP",
  "key16": "2Ydu5dhU3W1EfQhnmNka65mBX9fL9E3xSB3MYLFrS8mfcWzLiVo6roSbC6AkeXEKcetLRzRNQ3TmcXL1mJwUviXo",
  "key17": "3eq1bZy4DqkUGxY2vNcNzGVcUA4i27CVSjBN9BNCqjbzPt7hBCjtAgcgXF2owDxLp5WpFkLVCEvfn68TUFpeSG7Y",
  "key18": "2CPNELUFDJ2RtLZFKcDf5TQXQpHeJmkyKQGEkCx7ZxyC6sbXUSUenxE7ZF7Yff6iBfLzfQLUYZi4y4JamyvWpSW9",
  "key19": "3bBmM9R6Jn758uPiYqRZdULSE8VgE8KbujeVSmPSPbjuiMrZQTB4Bb9vjBcukV4L89HAEgfS1Wy17s1H5VJJqPM5",
  "key20": "5pmypAktLxaALZghLoD42c6HHNrEPvhD2dZzi2v3DCnXVg5KWtFjZMcSDyx3HZQcxDyZpMD34uJfnSAKDYtiqA2L",
  "key21": "7t8et4kvpRBiAyrrCBqXTfTsGsftE3za3fF8w6Res89s8wshJJ1GPgWgHmbRe3mQUztQ6KdndqJHJuZ8joRtTvb",
  "key22": "YsPGYLqzhgxb9Lw5PEFjopUQnwfBPWQVVUqj34W4jTP7b6QsDXnHbce8CtHTRxPZYLQqn8VW7G63gsRzAdaBgpU",
  "key23": "2WDqxwyX9hrT7HTPzAM92fgizMCCeDCUjEqNsZFZcpfTxBA5wewwtSXXQY4NBgjErxbyojRSUnbRiJVHqVnnBrAj",
  "key24": "2JBbdsyRqdwGJ1MecwEfo59gXoFD3wbut5TohwKJaiyrS9neKrBvh2Yo81c5ZbwjeBgiSUkQGYhFVvVgsGStugat",
  "key25": "363RjJE1kVReYgLwCAEbvbp6TvZWX4Kpqd7LNhuAjEjqCaiphA45j6jcQ5R9AMFW9GMp3cNWgC7CjFpWc3UTRvz4",
  "key26": "4JVARVayFUnKAE4VLdQU3ahH2kt6kpFNsau8iiz8yH3Tm7zfvgkqE6jVG1ZPH4Eq23wDu1qCweYiiiBH5RYoMjGH",
  "key27": "swx2vgMJz89ycGie8poMHTQynpmNbRfrUpro3Cmq1bbTybFUDibA4bNRNNbukJw5yUYEPPVY3swbY5uzqVkBXqs",
  "key28": "2ieiSwqy6R29JEpSY5ZF15Bcfa9cPihRnF7iGxLs42VvDkjLP3gfH3GHiemym5jSb5TjTDxnhZ6cwbu3qAvvTLzZ",
  "key29": "FdarmWJjGxopG8TP3Va6BCTKDJ2zuyEhtHqmDCKuyUhfhdQLNSypo9mz58wkQx35G1TLAe5JNJxwsPnnBjbFw4z",
  "key30": "21X7eJoXEWjbfsjpSxjVuyYXC3BQVxRwbarMfMVmJYiaoYiWD92RQQMq9tcngLKLTT7wkLsoDCVUi7xLvTuZVqNq",
  "key31": "29oAsDttCgtjzZ7xWN2TLyE2HWpGEPXb1NbnVQWaWnBoABybTqMHrnruNFCEszouzPkZNm4Pf2tJSHU5rqYZXyA8",
  "key32": "5bbCHWajVPmsPV2QZymrBc6NNCwZuwFzTV25NGLxXXvKDkZAE2VXg9mgWY9VwY2Zp8CGZUhyDCu28cFPiKVU5PPh",
  "key33": "2CAgEvY1dnj5AE5ySg8Cnfn9JTb9yLwTbCDbge6Z2xVm2ZzWZQJqkHqYZBFKAnz3GiwrGJ7N2kJyDyefM12MCyJ3",
  "key34": "N4qbKrxZvZEdsgzxnhNj1jfu4hJAF4wHoAf4vGXCfPg5awj3eAQu1Yz3t6Y8QtchuVenxtTq2ANmiXFQLtYRDW6",
  "key35": "5fQX3kvQR11iSP2gLMMsVmySs5ws2pf1dNa9c2FfXVSCwYzAUuEQi1dpHgjE2Fcmaxr977WmEMcnvXEHjs8EgNcs",
  "key36": "5deQFveMAReqJ652war62gM5XPjiyXEDZBhxc3WvHRd6RCbezjGpTjbamKSioZXpjVEtcx6XbSk3QJdQmBMvxSLT",
  "key37": "24gmigijNHhStCp6EV1VQDKwvkbvXnWyDix38XfUFHf7yJNp8QVqVrtWCh1uLD3TekJKWUXtZcnx2NR2xhAtrm8C",
  "key38": "3y2bLPx732cxQvjzP6QgWEs1AkJYTJkKBVy6fK7rrA5g71oPjFK8qxw3HjbDUUrAcfu4RrAoLHoTQwV5saV4tMZb",
  "key39": "5mQs1Qm2QfFkHhEqtZvhLBz4HK9AkUVpTqtfbegoRHEMTWwrPsRpcNV8dDWxKz6GrRg2KuCQ4FjC6R4dJSt9hHYj",
  "key40": "5zwAQY581x1pTPTf2WgWeJGxRFYGURbNsra1yVdCwnQusbLnAbPfADuE4qcem3pHkkQBQ1pMN3DaBryNvuradv9a"
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
