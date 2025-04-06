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
    "2H8Ag8TaL9DbiJd43Zcjy1RkL1rPLtheYzseLBjXXD33xUFEeNVKY1U5fu9C7vpEXEhc2sUbTSz1qsAdsdzYHNU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RZuTNAdoEeVMe4hn7tCcd7a6Zz9ce13ywj4pXmqsYfzPEAg6QeuJQe4FseMmUxCyaTgG7CgAPRc2iHfza3iVonA",
  "key1": "kmwgyoFzumd6RmMwYQnc2EZfQJ2U3Zagj8ex5cnvMgicWJqb4FVf8d37bsym7ekHDRXVhEzGQxTNytYcZ7Y8Eui",
  "key2": "3jNpnNSLqeiamK62PYMkLf2mKUDsRR93BnaCSoThDQQhZi5DaZNy9EmBNzManBxdjZ24HmmgDReQjMpxbUi8SXsN",
  "key3": "2k6s8z379wFvf31LDNWSQcUCCF5j41jv6cfaeAA3VfyYixsfdKUuWXzmWrqJL23pR8x64tLLdz3qGy6Am79vYa3f",
  "key4": "cbxp8w9p1fENyfiEnyJRonUEbpQdwrsE54iLt6k2UpxGTB43AKoi8eQHmVTjyA8nTNb5CLD8Ztr3Fo8MDtMTdqp",
  "key5": "3BRfzzm4ciqJ8EPGacbCmFS9u4xBH81tBa8ikznvTe43qYX3CfhFjBV4ZFVuJZjKePrmPUwEbTVg5xs4YyX1iayH",
  "key6": "59u6mpkiJ3fNo9ST1dGJegoGJL3JhurqJhJhXia5NpbyHVsyBSHp2eEX3ciWrweDJb7sEdKPsw2HNFf9cpABh7yA",
  "key7": "2ofQEic7AKsVe4Fb48QASiKapVgTGq3yXuua47MpBMCqVgsPKWvQPfQbX83m4k3m8dg4an1zazyGUV5ixbq5xKDG",
  "key8": "gcXHzFHwkef2Wu9Wc8XoGyNKVxPLUU9SxprUqBth1jV7zyqx8KfHL7kjvbwp27Ckx3rZG78PYsazga2m3vMoehA",
  "key9": "3HuP7tm3eWUSXbe9K9rDNEmLfTu5TrrCpM1buwV8wYrsoMYaN14BaZBaPu9HpKt6Py8VD2thvob9N6zAjMzb9x4Z",
  "key10": "5KMiSYdV3yemu2JPXdX3qkAKTZt8QfuRWAJC5Sd5adbddFXCUrSnM9YhymLuBUnSxSGPPGVRNdzjWBNyzz9q2Tjn",
  "key11": "47oWJjDTeEuBA7kQtoo2Jf3K7anNq2PqX2DqYA2ieaF42Wawqx3kCLxGP9rtC6yUMMbMZ7LznS4CX4TYHK6HYTWV",
  "key12": "36XGz7CxBCp7oyUuQjtV6yVg9DntBvm91Uq1apm1F16vS96o6nUCxqeoqGGtXMmDpTrSQNYm3JkeQHpZS3yd7JJA",
  "key13": "4cH4CKRmKjxufaGq1xeNdrvT6SR1tMt8MB23k24tPfVfdYdMRH1m6dnj4YP9SScR1hNQ1pMBZQp6ru6stfctjKVf",
  "key14": "2Ua88JFHXJMz5tNRXXVddYtE2eeD8JgHFAoJTt8NKuzryGTLrZp6PGPNF8zMSpqU2a8ufrH9HTEVz78cK74pr13A",
  "key15": "4gx24HUqJL2nMM99CAeiPEjk47ek99tqxh2Y1RiuTG6ptyavJgfAvHS6XxPUbm8jW1RWjjQLujjPn39znexfVbmt",
  "key16": "7H2LKsogyH7yoxXF1EAfgzzFysudc5cnUwLoaNK9DHsrkbwzCxXND6NccW7RdRaBpN5F82HpzqcrtVFpTxhUvbP",
  "key17": "3ZnN1VZDmbQsz6nLf52Tc8ke4yGAX1YwxheaHANfMvizS1C4fLN2LmeChyZGxG23nm6F8oT1GZ5pwt8D9VmZavmG",
  "key18": "39DUXggqgxuQ6VponmmNDHGPCoJupxhh5jRsYDvk8VzyYQpgEL2za6SDzNHki6f2smAqufcLowMX68kzZQyfASy4",
  "key19": "3gb64vnJdfcmyhkhPpaZJBoPGbUtpNHS3sbK2ZskeTi86mAvkxQYLhgXg3uSSRZYQjyBdoLRy3egYbn7iQchCVH2",
  "key20": "2bvWa97zDsnc3hGbaVifQBJchG8d3fDvuKtGay4uKhxDYyJ9wZY33McDFEgk3a8uTMxRJ6tmwuK6V1Ht3c1SGwXH",
  "key21": "4AHz7wLha9THa2jpzCvQs9zh1yTkSgmviiucBk6qTWeh5sVCZgdGuvcdmwgR3UCsNVRsstJ6XBuXsBwGkaoVixmf",
  "key22": "QaEtYJVeW2mVpN9urqZgu4kGqNGuQBtiawB9b6B8CJad9ztVM2UV6feBGmeW5uuaEmpyL5L9u5RqV8EakAZRMUV",
  "key23": "kiUccC75pygNzpuqgvUubFeQsVnpzJVMfsPVvqK7mRgd8BoHnM5P5aSwVFWX4ZDp6YWf2sFcM3bWJ6nWZe8JqWe",
  "key24": "5jXiBoj9Mk3tMAgFKVSYkcEEeUJtAgc8opLRyFCfuCM8mfEyAW1q1uScLzqCpcYupy8XQ17BZJixdWRFWYQMiv8F",
  "key25": "nAnG5b5oYBseVdFx8SZVTKX6v8TuHGm7dHXVYDa9gEayBJra4gyLG2sXg1adZ1gccbZjNd7HPuhTecCjzsZ3XT2",
  "key26": "2D3ET3yaQvYEBJccpRZWaLxiu7toD1DusxcgkQeNFAZNk11rari1MubfeuPcwa7m2xKB9ckToiwcL3BgnUfPsc21",
  "key27": "4cH2zBgmLS32vkfiKqqNkqzify3nU2453VWXAeh7PSdQxfiN47w4yjkez4ccmBV4snaMqbXfwjp8LsnzdC11Rs3M",
  "key28": "28sS8a4M6Y2Q38RMsfXZeVrXx4LHCwcqQ8xg1ghyvyngs6TTz6fvL76JfpAR24yg9DGvHWEfSuGjwxNWqVs4teDr",
  "key29": "4iheyD3fhQ39feBZfpRxZWuvM1H7Buh5XiwekYaAyqZcdDTSgJNYt8yhUZeP9ZdbkfDgC9fLsYZY342CgxXg8gsZ",
  "key30": "4LfAev5rnncjsGK9DaWDfZRcFYukcoHX7wmaXc8L7z8FFBvgMmvoHmYzj7S8zPQMFZ75ZqPN9td6oWCaTM3BeLSG"
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
