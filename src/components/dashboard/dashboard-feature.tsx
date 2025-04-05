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
    "3ubGcH55Cci851WfXURCSKqV5yZQxSaUX66gaMX8fbnwKBA1nF8hwvs7EuEr7c67VNNYmV3cA685KK48UdvgfYFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rdwQvXVnKj7QXQbGfeRfQcf9dQ53rDhxAkNuTcYtFdCiiubLEYx3seKs53MecJv1YF6WdU2jufQXuarvKGn6Fj3",
  "key1": "4cWhemwruiLVobmtJ8773fcbX51VFDahTcWimcpQV89oZzgRVocq4opwVCW8Q6eqpAcoseorEbLNP3i8Yoejc2np",
  "key2": "3CxW2ggmhDDv4V1eaawTDKdNXjQnx3j7BcaxT5BBjaFbmeBtCe1bJbsnPS1wvJFrCgJ3fVNprdUSoZrQQwgVZv6d",
  "key3": "czLsrLWpFcNt33zdrHUo3wM9Vx48EqBPDTs7BaVSAhXwhc8R9dK3mCuVg64KZKoo2a1a2A8Mb6GbjVWwMopjJtw",
  "key4": "3eVwRFJPUXsiqJbHTg8SkrdZT6S79KCoGCMwVEHGtgao9AuCa6ov3bdBzdbNVze8f6r8U1CQCDJHKg6JiMcErukp",
  "key5": "5hxqBnJULNG77Lb24kDSHiLmDoDe5jZYbR7ze231z5TDXXkK8L4EcXiU55HebbGyegdrRW6TqfzDwHaMRiq2niLc",
  "key6": "ppWuvscXVaenvWxdw7Xjj9inJFVk7tWsWaaGAoaPv2xy35EfphY3PFSPAYJR5n75TthPrv1Uwr7wDjksZjvdPkH",
  "key7": "2yEp5tDJytvmZutYDYYLne5zUzgQWk8spbnxr9Vedn6KAAEf1A9GA3f2J8EwAQtghEXbHumHBJqGiLL2Dh2nCjL",
  "key8": "5oJguPVhKDLwKbVn39YWiyMgNBF6TjrMRoWNXSkRAFGxdtXKs1A5m1LpgME2AhmqkiPvv5JLTAHhxgdna3Z9y5LR",
  "key9": "597pYQQfTLkx5h7XexcosK4VDVk7H1yKY1CjzKvg1yeaC4dyhrt3xntCaMLB3hd9QWsAZMpXHXGLEjzawi1rwKUg",
  "key10": "3tqTu96Rb9p8zxU5uK2vgfZ8PMqS3G96GzL4qXq8MTwkWxBmyuDShDLJkJeJgY4TccPXxJJt6KetExx7tbZtRmgA",
  "key11": "2hQJcSUW6Y2XDkCMGjqXJv9PryEWWaWjTgLYJe38PRpE5jAnK5g3Qrjfbrrj7dD1EKtF7Lsmc2wQYAgqg5PSAAVM",
  "key12": "3rJ5ZbhiXMoYtM3qzoZbSak1WugHNnD2jRoeoDpbDLiQA1zpvGmWzKLNaF8tZyZhR6QJK8hX4LGuZ1d9ooUMP441",
  "key13": "24gaQydh4TSTXkX3z4MFSa11SCWDvxTLeEguvRAMFP4aBps1ugdX3v9JjzPLqVhHGMRRESvnYnx61pFCHm8cpmiE",
  "key14": "Kfm648PLXRCh1NzXXUsS24nuvUC87mBkFjf5SviSjXiYXaNwxeXkTtuSSqGgqYUGJP3pECNVUkb55G8zTh5qHFs",
  "key15": "WYYbuxcmPuWm9zRzn9eLNv3D5noWREru7FCBzkP8Rx2hT2NKdMnSnQc9tTniPdp3FCYHMhdZTTECSpJoFkCQVdU",
  "key16": "3Qiznc5tNWmkxsdn2ReK4rVUr1yXtuE4h4ejLxR1dA7o7gYKiqTYejcdgaULgT6fSvE3w9LN1PCTHvT9eQdfh8AR",
  "key17": "2skAdUEUPMigpMKPkGQJKzXtt2yCBw5MGaNGFT4bLCYocQLFjcxzciRDuDd75Qwp8HRuDmxwQhQfR2tgYaFnS7dU",
  "key18": "4AZ483YGWRwWx7PimJUBt5kR8gL9smn5gMfatwp8wvF5fba2UxiqXMr5J9w9inUEJoXzVemt3ahqzAsQHsAD4sxe",
  "key19": "2MSNhzJRpXxrwEBBXrLgMfUwAvURjeuhWqErd516ihThUP5cbZoGGzdBUgLEsL2KFEuKp2QvhGmSvixW7UVvesKB",
  "key20": "2SM9nPEXvp9oK416QnxW1nwWf3WU34bdLVMXNFhrzKVh1JvbfiGyc6e8n5ncLpw1fsnGg8DDDTKQRcq9S5jvyudk",
  "key21": "KykCZrix94UW6G3gwKmW3tfvCiS9m71LmU4PYZkCeuaKqg2163ug1AtdTCjsKq75obGtuYngVCPneBTeZTeqkAh",
  "key22": "5nm4j1u1TRrgWYs2L8tir5N79b6nie4d5g5F6WJjBKHYaV3v6A4UHkE86cwBZZehAhaLsg38H2Lr394tgpzg1bRN",
  "key23": "5xNButFG9LxfKc5sPMpCXq4ZsqUEKFaoC81TcDmAsLySyUgswkbcJmSo2qEH9nXmuHhT49zr6YPm5kVdTJWWoBEC",
  "key24": "5QVEB5d9ZSauKm3aLCY3mDFx8Sn2pugFhvvwSGgKTRRbDFaaUewmrqok4tpWqbcy3RpxZMbsk9hMtBLQ3XSkC1X8",
  "key25": "3LyffmCZ9ca2dbLbp8dE6YSeECHtnkbRKBUg8uiW5e8cWki13C98B67gWwohi75EW4n7KpNiRTB9n6Tw74ytGFsu",
  "key26": "4goswHyzuXVZ5hSDYWV8GJAXy2i2EvYaWunEHDREeu4zW5GmJDwbN9N5nkGtrSiNQKnjLv3fYHtk92L3nmXpc4En",
  "key27": "2jh2mJSv14QqTE1AeGiikCX3THFi3KYePuVJTeUjdJBAJDMnKYjY6fFv81ErxVctzLxxYX2Fvbr52P3h6U36Jkr4",
  "key28": "4UN5VqM8WqaxKFkYBi9EQpmTEa4EWYvZnD9N7CKjJAeNv7Wan8SnGAhmkMr6h3nwCRp48qxeHxcgHQ755vpoecfn",
  "key29": "3PKpUJvREL7hqnXBWGkm6xtu66pnSLd76R3mhHnWJ6DGC1nrs7ZUVDq7UeVZRnsL5zMuHVRr8xuxgrwNcXW8rY6v",
  "key30": "2uZMHLjy4t4ED91TVxj7QKvezq4Jn9d3Grzuch7pcKdCg8ABZw9SrEEPyQoEfJ25A1rFHCcPpm7QmJRVKmPArq1o",
  "key31": "5SokK13rSK6YCGoLRbs1iNG4Vygp9JwfGVDJ1KwrxTniRQpiMmfUnzGdPaivMbNGb6Gs2cmeQMWnN2sBQbKKG6E2",
  "key32": "5JixdXBiHdFVhwVvic4o6yBszHC8V8EQer6orkKEb5c7FUsDQmDsMctSC61nbr7k21KcfeyjFmjPynY9Au66PawD",
  "key33": "5hip1CTk8fxkvVvWMLfzY9opryVm1TJGPZbeKM6g6Hpwh4cwoHunR68UkzB7UEc4JwZLs8nmmje5j59jUy41mEF5",
  "key34": "47bxUPRdotPvFEsgaLpX7pCZsDwvXH1cAYYk1MqnswnbYPSCkRVUzFYbVMumawQdBsFWWLydDYKASq23kKZph49Q",
  "key35": "5symBEvxjiRQ3tfLuHSQAGXeU1oRLz1XSdoLpjXAJ3vCZGwi7RwCemKKXQnqLSJZcVttjUqTm3RDwgdZnuu3bswR",
  "key36": "ggaebZSV7z8cpHgdbe25aXRt9rfepmjT4wAbYGStkRj7zxEPSaCsGxcprXtkRU81cVQdg67Dg5KdQ2vcqteYHMD",
  "key37": "5WxFiiLUwzHYoNQ1bzVAaWXtofxT9EXZ9FGfi5Xu9BBfGsbU16Wr9bpiNCoudwHDVGyeEn3imqFUVWfSM3koF8Jc",
  "key38": "1pQQi3voCLjrNycBqrXL9qbVztrmXzwRkYiUpdsBd6bjohxjQnNtWPJC9orVAGt5PTZErQLpV7jEzyeTjqqdzAH",
  "key39": "45jUUJgwcPatHvBcGaLxjL5xi6XPWacnH81eqwNrStf6YHk3Ub56h7PVDYvhmr2TkRimDUqNykMvQq2zjNVTxQ1x",
  "key40": "4XsrFadCmDLyQytZDuWghDrqsruNx3kJXaSQqXpM8jA2GTWxcApsaCpnH8pwNkZVWg9bmLN6so5MwwTmXfB21X9i",
  "key41": "3gmVhX6tmiWZB5nUDFKRLWd8BhGJsSCkdGoX9x8MWHVEoxiZp5VTkVRUQLRgZ6qadYF7jFk55TdJ1TS3izfciFvz",
  "key42": "dRWyYVtKoSrPusniWSs8zEzxrCLLAuCdaz7DqSQeBhPfj2151dvQQK6X7o7hQApVckH7yCx6HT22S7MhMq7CDKo",
  "key43": "4s7Zs38uK5j7KS9xAqrGcnR78gBbRUJUUJSyGLvn4nH4hMeaQcXdE4fyhYKgyyKtUazjrvo5ZBxbQeAVtc5U9sk3",
  "key44": "5f7Gg7c18Rbje33qhVFFbtxBUqE4cnWJ34fWu4AdxPif1CUTMFCMe74Ar15seFLQCVnpzx3vKXYNDJYKDGZvi4rb",
  "key45": "4si3ibtVPnWSaDkN6vNwkECio7NQrN8mkQb1BQ5M36q34yxkTuSLXxdF9XKhuoAmkbATtx53QUTmJamW8QAfyXAM",
  "key46": "5Ar9jaEGM27UUpaS47ja7Cvs9yD9qFMdm3naPaBmFQpwcA3jy6wA1wBcueXhYbwzqT4DWwGUePcJUpoXXCV4Xkia",
  "key47": "3N1UngqZ2af4r4mfMen9hto8pytNCxQQStsxuwAXoCr3wWfVQtc1wzhsNLTGErEga9skdgXGxH354cmgxmpQVQZK"
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
