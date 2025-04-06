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
    "675XjH2Wj7UVrnqjXAqVaeZHA98qwnUFqESdXUocdKpXb4xR2u5ji6Mb28NhbUHFxV2untKoYkzf791e1aBupWua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wYjBwLu365Fm85krtaruy328KudmaEqCgPevLSD7q6dGD6hgTQMHWBoqygKn8JgcPaBS87MyhQEEUydVEfboDvh",
  "key1": "4LtYKm478BDmmddqVX3gfbxZFnt2fFdS7Yk2pfvYnyhPCtiU3T8YFCZ2dYoYKkUg1GC3wK9rPqutXsgM1ga5EEqu",
  "key2": "2StP8Vi99DpqBzkCaQ6hoTdB4JdFP9SAkjztKdfzEDqdJq4fjTV2hG4Z9uHeWBQDG8Sa5wXwR2keDjt6rqQQ96z",
  "key3": "2Sxybwge4TbFHjnmU712WpwViCUPCVjgekomTFwZfaXneYa9a7yniwjdtX1ay7MUe4PhnH44oU6zQdg561XVxo1X",
  "key4": "3m7CsbWydQcMFeipnaXfn3NDuunNhULgT965Wt7VDku2FnfybGT57anCDKHSSg5qq3WDFUsywZDq2Rpc425oXLCn",
  "key5": "5Jiz7xiNpk3cgukwzHt5onoufAJZZdoesKptyjWfrPvSxRvyeh8AZu6aAoLfxsGG1UbP6697G1dsvs2sF8FZLQM3",
  "key6": "3xMCiqWCUoJJP9mWHLYXva2iCa3qGnGvsXwxbb8K3pm5gpuZ5Vo5tVxF5r6J4BXA38tMhGWByrP7d1jKPtfHYZwh",
  "key7": "24bbnNzJqiQ5UN2B7Da4jiXxtgt9vC8NbgntFtDT9Qw6gp8Aca9rhesjp71MjtKAFSCXSTGMU2tYhW4SzAFZtqe8",
  "key8": "62UzJ1JRKcrY36MJM4U2uiCGDLXoNZnWF8e2DWzYufB3cQsQrDz1uxuXUe4hFyj6VaaYZPd9qcEMrQ8NrTA2qqQr",
  "key9": "4XUB1o9WEdcQ9q295ziZuSGCCHUDRcxXXJJEi29Rcf4Rhb147mLV8jzmfKawdnR3b8Nw4BxUysC2u7ogAAFYzjyV",
  "key10": "3ijXqdgY38e3xbZb5GWdMx2oy92ShjP4y8QPqTWiLAUdAnbkVuHGTtwWEotoF4YLRoo6tVvSfECEdnqd3AokSruQ",
  "key11": "5rsAUY6vmxGaJoHyzVRfYDeW4bne5wrQWtYHxw4cLLaKN7z9fGzVdHwJ6o1F5biXmB3pi5qZWzbgsrrq62Xqe6R4",
  "key12": "4wk9uvdLKmUyj51enAXMMYji58rY1Bs4UJJJKQFYuna881SX9cg4s8A9MhVg7PhPnUB7SN74FKCdcUV8jX5cvh9L",
  "key13": "32zj4qsDZfWrrTnnK41uuDwqCeQv7DCtSvb9pLFvgzmARWsGqo9THgyxPUHjZStYoMmVV6BhfzwUFLpjAj9bQ5a6",
  "key14": "3TBsxVmgdfUcR7ddzvdwRmBwkvsMiWTHGtd9FGhH7y8dnCEbe4xpb5KWWYuMvAhum9aMUjLjEe9oHk35U7gzke4f",
  "key15": "V2ySS1GkYqGLpU2cokWbgeBKy6R2T2DFwQ2k5fAgs2441CDahm4cneSLiTLWra47YrF6uNTidMphXeK6NCh2Qv1",
  "key16": "3rrvFbvFBimwyAFuj8Lr72MGVRnHdKjMtQGfp3DeWEi8VvrSGuCvbYDiYTS5pav98z7XyXhpL6bRkQpgxF1vUv2j",
  "key17": "4EhPnCBrMDXBL6e8dxfsXp6yhmU5XcmioAvpmJbTSCVV4JU9w3MTg3VT6BLK3Y7F2nhaYE2tofFyfwYRME6Ut7TF",
  "key18": "5N9RF7san1LyApv5TSFvoyKkQsHtZ7BTdVRo8Z2H4A7VWqDiMqbaZxvwwYdJ2VUAEwVMvRzJXVVQ9nynDjXw4oG7",
  "key19": "CnEnvygHaXFpwtKahoZyNKKRnQXC1VRkuMndkX3YEKhfePewf5KugYXpzcsyBBwQKXb9aSHSKid5s1iYJgcuDzp",
  "key20": "62cTemAvtzvyvhnFvv5H3zyoV4tDvc486WzxY343jhF89NdcBNTcxSP4KVt6WWZeNmoRYe3cN5BB6kiFmnGjjrnD",
  "key21": "63QTQkK8M2C4tpkDb28AjWTi7BeV39BPHZRNGtDXZTNe6seDLUnQ4rWSDUfmHoZSqr6gZFKJd3uA7rdxPa59TDnm",
  "key22": "4ry9NgMNUPcocDaPWBy9pFCQab6T4tC9KzGHj9bQtJtrYCZhgkivc3fwrTocSkhH4YTR8WFECGJjfMJcBAaKGfQx",
  "key23": "m4Kumk6YTvR464PKbF1uWwAEqpidfwpCVL52pH3C9oiZPmPYEWsRiQQMMmVyJ3xmey5XuvAyYZ4qaPNFqxGxN7h",
  "key24": "3RCYZdaT5Uy6wWhkSoosEtKsUzcUGwJTnERZv5TZuncdo1LuPpzk3qMurhwrB3RUbgXazntK5ad578zaH5F2bYXE",
  "key25": "45wW3A854kDkvMk7wz9uCdVWptSGMtY5KxgBdNXzbY7CFERV4y5vapV8yKXUfuCTFwFhyhSnY1VbZy385YYskiEr",
  "key26": "5aLebTdDw7GN5cHJNp4ZMqHsNCNFNu47FKJGg4nVY5tqXp4vo7xWbMLpHbtBMSZEEmdppXHKyQjrZd1kVAo6oPXn",
  "key27": "5GD6rxfvA2Tg1UHNRpwru1VfKK2xnZte3dkPLUxQoaTegZW8YhUhLu3agDMgwNfXJmPtK9cuwzST6JaA7rm4FWYc",
  "key28": "63EP4Yh3WQ14H35c7NgAyCMVwpxbH4hJU62ypgE9MU3S29venhVzFkgRme9rkCTnDTMCqhceD1FoyEwecvuh8GeW",
  "key29": "2bsyGi5n8Hny4ppSC79r1R9LHF5FDui8AGYwb32goWEEhUrQ96MurwE42XWnMsqNUGJAwm7txX7iRPRiUT8PsJMS",
  "key30": "2XMvZpxzfAqJkNDcq6DnGJeVxyRz6uLmkXjutNFNX1or6iXHrZxJGNoNZAPdbbdss4Czg1j5r7dsUKPkFVwphGUN",
  "key31": "55hGCiYhTv88cqaCA6mowAZ4j2AZpnYFo6GGZ3tx3x87gge4GdafGueEmK4ygN5rj49PA7aLnxV2XbTgrfU6SwYo",
  "key32": "4XgvVYfAVoZoWTrPmfS3cCBs8DAzVBPKqo2Z9xrvA2GbG2fRZu2NS19hxRiJUhs8Rgowz9EkH6iWWqoipVV6HzL9",
  "key33": "5g8kayWKaSMHxpqqpvADy8untDbAkrDU8VMHjCgqXiMKmvT3dLR8GbqYeJSNxmbVRKVDPBJ2fBbP5uzVP3qmCgqy",
  "key34": "5QR2Ndo7deWLBPH64Eb67w6CfxpRLV7kGhgLt6UQmFhjmsD5k67EC3YAvgdTEMPcpEDLiGvZyFtGe1bc7tyEf2Dn",
  "key35": "5vFAvaGPoGDdrHeTJjC4FocdENm1UnTYfZGXApnp5dFYXy2CH6A5tPcrMLmQUP7wmp1j6neragCXsoKfprduuzHa"
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
