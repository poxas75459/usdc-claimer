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
    "itkdpmY3J7zTeaHkhFYuwQTAZuygXdCFRjdB8HztisJUAGgQzBsi9WbuFxxLCZmXJgTeCsDQms7d3gesCEpu83b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a4mGaeZAk3s98BmCgcqnnJmRkdnrvGvxfSFNapPyuX5LRFHcuk2qzcPopkJKcW93tQRbvAfKecmKKQdjPcy7fxd",
  "key1": "2Cm7cAgVfdpQR2WSp2KCQjnejNMBJMTd6Gax6HYi58yr62P3Y8pfoP3pGagTE6MXc3SiqyqqryYbckKpZe62XN9h",
  "key2": "5EuXNchxYdmx7G33yyQU9JHf4yQQekx6BeaULR8d5s1iJLfoSinE11jyvWoJdvUJJZH5rfFoYFNxxXMdWi69ALzJ",
  "key3": "3yiBk1joHJxMT3gmKt8HptxnupxAH3zGyeQr7Tk8qxkDm3SR8ZMGFFLJQbp8T3iN76WovLhFns78eQphZiqL3z45",
  "key4": "2ri6QRSGA6qLKY6SJ1EEFP7pQ8xmMDjqNBVQ4wjUi4Lz1Py7mYrrEjKzebbX9Ssfbzcd6rgMp7GhBpwsp22rrRd6",
  "key5": "5DMsif7njYHuoCPCTuftFocufqppcfVurQ9JVebiZsrAs865FB91zfY1MZkDswEdhUGcgjE5Vxo5xCerbotnkrSc",
  "key6": "2xJd4yaha4cuLWWTmBPE7PDu6xFqmpMjdbkJbpggKBoekQKmTe9oQhPEDqiV5nVHsWVbDuTc6uFa38do6yzzuzkh",
  "key7": "4CsqxZsyDQhjvUwtNvXtG6qZNjxgfKaK5tjPjgrsvQhhCo4JY2HC1gphi7M5BVFDJroU4WuFATG7sj4NPV2EYzv3",
  "key8": "Y2Gt9iNcHf3vnkj1Z4FUFipoQVRW5YuAVD2w8dW1g6c2cxqt5v4YzmUHWzGJXAyh3pnwvR7Nu3J78amXupdPwRZ",
  "key9": "MrmEbMDEVNtJEyeJroSiXL27BiUWnfqCKCecyvucDGGh5iUvmjYK9r2zoH5wdaQDnq8hYzV37yrXK8veHvCKSy2",
  "key10": "64SzD7VvMr4Fhk5cM9Lnfd7CEADbaWUTPB2EN7sAo9k6k1zFHziKByUGC7u8xzpx6T13dNqxgrkizAPmPM9RCWyr",
  "key11": "3N6RSWvyF7ngCfmhJVhyec8gzYZ6DCJi9td7CamoewVQuhnNdfA284eyXZmQdmQT42D4D17zuvyV1YXpnP3nu7qS",
  "key12": "2yCY9K8skENKu7mHBpvYFanQjqFek8LkwZZYYSRBuX9NST1RYGkRe23Z7QT1pWe9pez5SbjKrsoU5wQcDSq3TSG4",
  "key13": "64pHQcYtckn6wvcqJ2iz1dMSeTKgyWSYSJCFGonCkvjL1v4xhYD4TwroYuNEhepuLmietcxAznFWoTbLrLk566ar",
  "key14": "omzc3soByFJpCbwn69sqF5a8f8FpCvgKqQ6yEF14gg1GjcqciKLwDZxvtaA8TTiGeJwokpev53ptpixYbQtR7hG",
  "key15": "4d9YggpVXMbSjC32tNac9QvzYEbuoCyqaGuhCq66WqbSVPgY9ai9BKVWoLCYmMDbgqwxH9mUHXZeTKDaEwChzvFv",
  "key16": "3M3kBgufM93T6sxkLxi2ApLVpq4ghS9KeywEHm73QbBvrYafgdzsQGYEemR3WhHFA9HptiPoBgJZR5JzXSDYX7x8",
  "key17": "21VWr7sC9uduVuYGAgxJPWx2KRxz2sSSKPaCnpfGkBWgpeAw7hotCFArA27iqvj5G3pzLW91yqiGpnFMkgWTDLQu",
  "key18": "3H4w7Hhbv3brjYmMq7ZPoC9iMiXW4FjdWkfDp8XbfZWaVosYhMmmrbW3rWL8K48AiR4r8yX2qRxKqwoYnVh8UXCT",
  "key19": "4d4Vt5GCBQxH6pzFVqw2bty8CBrBKEf5amZeGRvzjfP9UGUW6nvsJffhozbgSZPtAzbEps4rsHDJD5cSHgQgbm3d",
  "key20": "2bEJwbF5c7dM4hum2MX862cEgzko1fWyNCGWWUQNEWu2ztbT1kH17SksDgwaRUsBTd3NTPAYgdjrukqCtHcAwaVN",
  "key21": "4QSWJDYjfEasm6bZm3jBQvS7pLtdvvHCpuJ9EzeLysCLSGDM9Fizd3NraYDJC7zoNdr4En46oGqg9GQfC2LKNcwV",
  "key22": "4P1h3h9MBGbptxeq4gKz4Nuciut8P5YXNCBdkQMhnLPXh7HfEUXhw1B1qtNdASVJ69L6KwSbZgQjPGDsJmXjsh7J",
  "key23": "5dqjt4rHXqJ8ScxtV9i44ngid7sXpkfYj1hKPZT39TsTvrimmyCV8R4xSHVxEbZDXcLASAusRrdWpqhgXE74MMeS",
  "key24": "5fNXk91prc7dL2g8yitdRrZHDVkbGSsfCkut6SWUpj4KD85LnURotQs6k2DwYmVwWTiFyNYDcjVASTim1uD3qrx6",
  "key25": "YLVcijzjMnnL4x9mZAqLYbRDYJ2vPs6rMe9RnwiM6bY5FodXzhDxretKh4ZzJctt5c31Pxk3UoGFnjsrbxn2pQC",
  "key26": "4T8VMzBvR5jqx5QJJbZhWUzgf6eH3TvJo6FeP2ECYwAyN5CzydWm6WLg7CLF3FGroTePF1De5gP8BZoLrcERpFdV",
  "key27": "5zzFbX124xsuFCMWdVCuQSaud2pcX26KsCDDomTn7czZabyYs4WirShL42ChUzr73JfuoLfBFDKLYYeLAkoZgMdm",
  "key28": "2nHPZQ5tmJjpN66JFPNrPMwE3ecoiM6ALtohWd1LX3RapaKkbQZKyjnmxHCnXnh2dfqd8nLPGCYqzKWmwTu19N1X",
  "key29": "4Cf854VU5WvKyhdhdNuYBMvhxmn16LW4eM9v8TgefV3U3PHqFQznkj5AT6m5z7ruWDgzny3tWu4GvNqVzjpG1LFe",
  "key30": "er8QQckW5Pm5k4ZKTti6ipqGwVCqrN1tN4ifohswAbtWp1eLYSote95R9BNvQn2UJs68nk8QU7KFTXrpQ7WR8Rn",
  "key31": "2U7NC3xwkUCAkFUQhaBTwpvtPtrFc7VPaJ82sxeYFZmchannrvwFYE8diFj2JBCRswFvReB5PRhMLjRLYyXK3tbc",
  "key32": "4hxsjNnCV32hFazTeKgGNVAQ4iHgfT7Zoviex8n1a7juU5RQNrd67FvRmFdrq3qC2DaRtNXfGhPcJztns6Qr6tMn"
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
