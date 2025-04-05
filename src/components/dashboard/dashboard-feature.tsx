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
    "4KG4qEteNwcNtTbPDtbSiPuWbs8VC77HheC17XT2dX6pUvFFz6fcNDhJkmgPZepQwUNK1UBwdAoxMVXFBZZBbGS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wzG3y7PjdKLd23wbqmH8HroBmctGbGhu9Q2JJgrHZQWzMGv7ZtjYxr8XKCLpeK2dH5rzTqk5G5QxFG8kV4RAUrp",
  "key1": "63AogV327BEbPSCuJGZurT6hMwzd9Ab4BDCvSQjMhoM4BXdSsXtHiy1G46y6tS1Uy3ApgPgEQCotBqB61UdfxXWb",
  "key2": "33zG1xAgfM7K8Jtt2MVdasfFFNBSKtgrzkkCCy18eUNS6GMCeCANLZ7DLVXTLDd93z499eqKL9LiQuu4RGyHu92y",
  "key3": "ELdXBtSQR9MtCWRFte8uqvED6beLobYxkYnigLV297uQnwBfnxTJ9pvTTVWRmKyRqE8huhpsXmKhePPPomPoF3U",
  "key4": "45jsU5QpQCn7rT5okRBDKdZJMZuGSBPatk1zYuCM2shQD61Ea7CjfyAWemwXyJ23qy3A92GhMPGf7QwwCT9JuNs7",
  "key5": "5H1T7Dh5cDiBf5VP7sDKRqs6UgCkGcnvi2BKm1gJjqcAtLT2eRHcNhEL1CbSmPNxfVtobjX7ypnSXHYr3dKU9LNb",
  "key6": "42XWeHKMEHdoQikmemYNXk5xsxRTnYaeZCRmvF4AdGYFQpVXe8a1Zs4veH5QCtoMr2WsnhPaTvUdpxHVWei46rvZ",
  "key7": "3NDno9FZYDW8HLDGbZRxR25mPhGjcH2MXGEjuT7oYSs7RLuLpj921v8f5Ld6VrVYPddLg2DXjrvvqQGMfZXVsGwP",
  "key8": "63mAQ9KZrar9w1YAR83Xh9xWKgCN4HipJboQ2jNP7ko7NenWewGdEwpdUv5jmTUB6DLmoDSRrumGHzpZbZ5rR56K",
  "key9": "2Q8miNV2a3Z7fc9ZvEGnrL2nLxK2UfHgBv2J91MyafyhDeR1RaxE14jbzqpiMwWm9GVdFhXxU8KhvmiFLQueq8eL",
  "key10": "3y4zgDLk3Tnq3MUfgYSCD3t7mktEgeriwNGSsAhDyMXhx17Bdr4uEn35nhXPhnJvDUBfKioeVW2PHFskeziRaqQR",
  "key11": "4498FB3yu2BfpAdJsUsqXCcBrFWfwEVyzLUr5FkeiChQFEoH4ViyRGeh2GCvbpk56kbwoDezfxFxUdSDjxA9TT1e",
  "key12": "5ZU5EyUCWcfDhmkUqFefWrmpuswNouanYBzuESbTjMnScWrJZ95poGj3E9RThznF8CWhaUPs4zkpSFyYJKjkPWCz",
  "key13": "28hxEfw58ajwPULExZSMLF6snp5Uvh5fQPugCWYDAAcrzuQ1PiaPL4GEsYGb8UZV5xFcifBwZdcigAhLhDeZmsZA",
  "key14": "2DKChmMYiw7zJM64czN1sppiPcFMztPybzieaRz2Q6MdjypfVrZJi9BU6fcJtXn3JBtbcwj9igejvQj4cQSZcEmh",
  "key15": "4bNkNGpQZyUJmVQkMNCtvzVYtVGkHu9opb6XBBVHqcts9gNXSZiHEbGr7Y1orTZW9H9a6wSeucnf6cjJKJQmMuBr",
  "key16": "4LFHs8fBySM5ucmbD7LsnNMjpTLNGH88LGXbBXkcjfak9FahifCE3htdVnds4mpQLUtkdfyTqenTtKP8xTeCHeLx",
  "key17": "3L1BfT1CK7qFo18HfpEPoyPkH6oZ7HQtg5mG8HT9jb2wRk67Y6qQWEioWu9DHMdZM44QMop7EayjKofgkLLdDmhN",
  "key18": "5yT5J8aB5yFcAzDAc3TBdTjUHeLjmqzN4Ko75DXg9FvHLV1DLYSjFc4c33b4FuSxi82vJQnqSU3xhoJKDsKsiMyX",
  "key19": "5W366H5mUdMkwcwCTmYDYLHpNBCb82fAfyknngFzFKkgYYRE1gCp1ChLZ81VAbb5mHCsrAVz5VMtCsR2BBs9iQgP",
  "key20": "3pCfVyhqR8koABnP7UamEBtr2Zt4q4H4pZ72BTYL1J8GLWivxMiNZgma5ygWiHJXCyZMSvDt5PTMVaTpsMcfUytb",
  "key21": "3zvB3ScdA4LXjXasiXkeZNvuh8y86kkgZJPkQ14QKAxTEfG8C3xzP2xmynxbSjqraZM4ksGx1GT7fssuBuhbeHW7",
  "key22": "5fZzvB9J9kXnecduacTuaT1GMDrkMnVrNiJSRKE5ggeDG5uBsmhbx4scAVGJFj5pw5yBQSZDgjxmHHM5iK4w6JjK",
  "key23": "V754JeXondfgUsK2LzBLipUZ2bCrG8Fe9fnLnD3yahATNHL1YknxehQ3dcA2icFbf3e7zeoPvdQdf7zEGQQN6UV",
  "key24": "61fuz4UDZY6qBKTXjyWPAtJ13kKoLqjdhSsXopgEm4JpdNHGe3J7ixwbnUwUYoTjWDdKrBV6pBdY3ik6JSaVfqKk",
  "key25": "4ASwfNCvaJ3vDogwQWZ4myrCV9eMmoBH64JwDyP4avSWicc5su4A9Zn1PD5QUh61u2mXLM2sm8FhvEf5yT6oie1j",
  "key26": "wdvQ5XPUxcQJKRLekQkh15PgaAYt8PTbn9ReerQYgUeS6Bmx9i5gz8d3G3a3cM7uvcefvN3AALqcDsFW5CRn8Pe",
  "key27": "4WxYxq5KAaexnhfVU4mzzQxLNQ3qApVfGwLzGDXGXLHXx3Ex34ZXogkjLsUpHFaUTvPynwGeeN5fP371KEAShzRG",
  "key28": "2uDQbZNPXZoJjgKbGwaSqrYzjsAyVXQtFrsQDvw9zW2oJ5nfmRk3xJLh8JsQMNxv99Ax4F8ZucuEMLybK4ZRjFfK",
  "key29": "4iuLRvpGnpe52oBKuvcGeorDovgnsCYUsZjyVyHmb1EcDpPpWS51r5mGwEtE6ZVYo9d6JVqYsbsnNnAaUvK38Jri",
  "key30": "3KcAvnuwZPCV7NvfYe5p9TpkfkhnFpRGFhpScCabBLYnuaA4BQqZeojYL4ur8tz77BTWdWCdsnE8JnxQSFaMNXzA",
  "key31": "2YUT161xMv39Ppo29BTGcFQcnVEdfbQLcKNBLKbC1aPxCypf7YUP9yohCTtYtN7asspbonHSjjD3W8NJWSAxsiZP",
  "key32": "5XJrJTnV92wj81wNxdEH3hW9YApYYqYoeaoHRz3F5n6i46yt2V3sY6JqLFKqNaWqYk8RDYxwaqMwPj7YBLDENzBR",
  "key33": "4KHYtRgTy5xufNZrFLSnzKgk6XUyj34zRghvPzEHJb66SFUbSTGuLRa3zWVQ18rnGHMiYRzDCGUg7TBsfGYJFEba",
  "key34": "SbdqPv3K5kXb7bmoDUswQjApCw5yybdnuRsbyrhoJ7uhscbhp6bxrubfj1wzsFzZfpGcaj9jBACgnvAvraQfz43",
  "key35": "4n8kMMRSoUvSKKAXfgypitgbcV68RtWGzUtjNrQZtPo3fu4hWDR5nxh4JbHTSWYKwHUL1ZAC1WAQu6WZXeaNAfDE",
  "key36": "5ca4QKB4tWwTHdyMMHXUtUz3ubyftGVvBYXDz1gpNpzhuRtmNVsi6SjyxSJQRHSEVK7v8muhZ6kCdrPeSGuo9sW3",
  "key37": "5fUmXi636BaRSfEbYtXQLnpuA2T4UrZPdo2aUaWhw2UZZYVs6taBfzrGTjk8StzjZNfj1PnZBes86P2wAiDV83vT",
  "key38": "3bgFU4oi6hfPKNkyVrrQPtGyYErtrkWv8YmkFncKrvARJonDrrzh6BQh4JHgojhJcBhQvFzNs7iUQCFcXf5ytwZp",
  "key39": "3gX7HJxcVAkW12LCqvfm4JDKropjKbp12XNvDv6UWVGhUT68HGP3Hxi5tvePRGWK5saKBZ4wmLmM8XHcnmtJdsKR",
  "key40": "4Ukx8MtyW9MZtjpQMi5XcnK7DmgkEWLAWUMH4soNW68am7Vb7PvNzKXibnspKg1k23ofEP5ksNbCkbTWccnswUWb",
  "key41": "46B1CkaU6kMfo89cy6Uv2Xowj2jEFv3Pt8Ta9PyNYUinkjAc6MaeNDbjujFJTPdjAcGG7K3PKfUSbqMSVUyaxv9L",
  "key42": "3PcR3WR9kzm3Zk4d9qSt9EmPZtAJ7js5cCHvGqJ2fdeeF2s6qhQNfnyLcgf6HSHJUkbVDhX2wf1ujsvHauAk91x1",
  "key43": "LHFKVZKohdWwJeGwoKQA1UrKceWYXxwmT6jGmEahfPYRtyDsoMcNMV8qNKAwgmzGQGSJ2X4kzXUZMQiz5cDCLua",
  "key44": "2swCLTk33XxDVccpuirYycyj7zpyEsnrq6KWcjargJd1xYiuAhyM1awATniQL1wQgm2NuLX3KFNFMZiQJfxPrhnL"
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
