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
    "4o8wKj9nikuMbT81ctDFmMm35LExiTintj19tQmhvSPdbNjdd8PFqLHJifdfGURGTosn1W67PVaQRcTr6NMXey2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iUjKiHnwMr5bugBH32HqXdq2P3cucLkGUadjGLaznQCCd2QdhWDtvXQWZQkpNy5Xc2Dw27nPR2qM1tPcrEQv3k8",
  "key1": "546BpaD7e7REVfjgGc359pcmxbXKj8h1uwwiLJtozAxAiEhcZagMk8EVscZznXGN342qehmv5CMSeHo6QwXj7Agt",
  "key2": "2C1GAeHrS61v4KDnGMYrSwSPffPomgG37Bn3YbBkGx2Gzv9xXfxq2Z3rCVAWybp3qFgyoFg2Uxdg6mf7RVCZJF6G",
  "key3": "SVo16aaspfbVY31e14rbujrREfi4MkSriPoAC1KRpMfCW7Sz8RvDXSfg1osAuNgnzxKQn3YeNTTVgHZA1Y7ygBq",
  "key4": "33N5mDCs3jQe5gqiH3GP6qve5XKMgehmCspbsutekdBnMHHKgLMxs2Y63DGKsvfKMU9k4CygW7L21pkJRTcfLvWk",
  "key5": "2efzYHvnz1H9tWycZGbuKL67XBd4ywvNTMoqsuNhRMm6fnEXXTEdp2hTkUXfcD71MPAF7uAHQjBVvA7PWCaJZ3by",
  "key6": "5T54ar3ryLfyTdsSqcnjmzMVu5pPcxVyqGfZo3Q1nb8tFJEX1pFyYr62GWpWE8AzMbTDKmyUoWP1MaTHwpq71NQN",
  "key7": "65MiRqTPbSfEtqv3u32TYKEHaLnpfN3raxSEko6dbaxdgsZJMz6vcQiYea7DFFLv6seN3ZJXNVd6Kjan5nDbj4KV",
  "key8": "1CnkFix9Kzg11KwnigbN1YMo8VEeeHZSsr7EwVM87DT8WA6ipbojoHU1Dsjn4vKWyz7bRnezG3yBokyVhtDXqGb",
  "key9": "5p68Vgdwjx1FFqgrfomyCYANmxKYhfp9Z17mpXrAkQzw2NyxyS1z5Dosux6k5A8RPVoKUn5oSv9CuJSwaMxA1fc3",
  "key10": "25NDy6TNeVV4fXP337UQm5JhB82K311BcMBHNe6wMC3Rq7JDLnbo4cWqNiQSmHYuxC1rUSZQWiGVGkqk9YTQK1kv",
  "key11": "YUQqkyNHjsQ3Sgh8T1o8tjRU38ea7qMSk37mHKsNzpwPH7CUPHEFg7MvYBW312iTrHLtk4TmbwH8orp9RQmGXaD",
  "key12": "4EKZV7BvQDBv2VVoaqbKwxEQqYjccBkgyqHj1HqMHnb39RE9Lgd9kt5BBHdoW18HgwYrEBpkBU7E7AWyCMpazsw7",
  "key13": "z5evwNAG6yfSTELaLgB2exh3zuUM8pbnrFukfYn9TLiZPezwiMg19FSpFf7pnqaU2qju2CVFF9QBziS5MWLd52d",
  "key14": "4MDi1yTpbgPzteojT3bLkaENHmwcDj8AjxYJU1KbN2QT6zZKQnGe6zCWCqG1iBRj1pL5LMfdxHRGwvBd4sgyp2g3",
  "key15": "3G9fecGH5MANgrRpJRDeUX22ypTw1LmuuiDkt6HiKtEbL2CbRNgVcTdnd82Vbe1mGJjngSL3r8sP5xr9vHdjNGWN",
  "key16": "3Cmwmxkk8HRyCnkSqZaNkneis1Hf9Brk5FMwBqyUPBtvCRzXUu3tg3vnKDvw9q3of7Fm1HR4dCe8eLPRbcLP2DBk",
  "key17": "5ekSEBsuK3Y2SpuXWzisQBroa7sewbN1otCHR9gjHesq7Z4SH7JovAheMsHQymjfMME2SbjNTtubWpcrcLZfTNGt",
  "key18": "3t5VPp14JXf2NTz5cLRu95Vp6uspDWDeFsbNsw2M5UtTf7TFquzra97jDH2sYf6QrmfxVqQPpjZdX9mpLTaBEeHW",
  "key19": "3pXL6zFiU3dY9XFZtod8rKiZgX5kx1yYfprB1VpkiMHSwbmgMbmhXcECXHpsK93K2ttfHbNntSJWNvwpk8knJkAK",
  "key20": "8Q11ct2WWuSGDwsZJEcUUVRnPhQ1TV1G8QT8pu2EbQ7h8JPssQxzNA1RAaycx2JeLzEqKVEoPs8vFxdsFGMBWHu",
  "key21": "2pPmAo5yyaRW2sdSJzZFF9QNQWU8uhE4JMZAakVojDKVAbpVf4okfzTxzdgm9xNCbyDs1G6467k1tfQK1TRi59oY",
  "key22": "2e8MjqJyozNjv2x22dX1dUtcroSB8AoYr7nwwZqWgc7FXhdccFN3FpJLxvqeUUoJxt2VvakGi7drM7N9rXFaKQEQ",
  "key23": "61x5zk24SC5yz17eGvc6qm7r4u6h9o1wjZXASQ5z2aNiMcscM39oza3e2k3UaYVtHjMAuiE98H2g4fEYpjB82XMw",
  "key24": "3jeV81TuQg47g7y6VccmHztEt5ESsJXaz8eERgPqqihq9EvybXDpW44i9D9EhCfYDMTHXjmFWweuFRnDDwiH1WEY",
  "key25": "4CsGA98hy26Fvpkn47nz39QkjP3gFLwMkozCZtpmaTJJVTM4iKrSejfULyHWufScerT2RgXHYAXxiK7167hqzuKg",
  "key26": "57abY3VYLazuFASiHrYRQMJF2GNiPh8AacYkvWqeEVztmgnVzvMfL4gooPKTuec7mSmzdFzz5DeCMXnjqf5LjoWr",
  "key27": "5QHvNjX5iREFaB2T6dyvjP3HPCeYbgxJ2A6wakyoG3aVBMv9nH68Azg4un9vqaf5nEk7GBEJLSJE1DpKPUcM4Xo",
  "key28": "2e5etSUm9hCNh75Hj1F9nZoNt9iH3oUfYeWdB3fE9W5xsRBEa4d9aqJLQ6C9dehNGv1saNwihCEquob5LtVmRutR",
  "key29": "4RUE1TJXs7TiqQVs3JXW1w6ymZ7rHtWo9LxmJaVNyceSFQ1juNLDuyDCk5Sba3duESkWKxyF1Xpyo9XLgZYVQmE3",
  "key30": "3sc7HfFxWKsyFxjKq9Uz7CGr1aC1rcMwUgke6rk8qNP6KLuDgG4VJMqQwnDmMLamvYuNUEeM8PFXvkQtZn3APALS",
  "key31": "52RSqgJxjKdXaAFvFRzMFd33m74nsJ7UbPS2qtsdSRGLNn78qeJrfKB8X3X4VCXoqodqkDiS7igXnh1hFThrSTen",
  "key32": "2RWtaysjEkDABWiYULFq8tG9broknYvGCedjLkJe3EC4Jtdkic4VbAnRULosJY1ErdptvMeMnMEG2bq47ygG1yMY",
  "key33": "3RXVf6Z8xdxXe1kA2e8cdtuW9wvYVnUvTf2pA36X5xt76De2rEEXgYxCyY9KoR9QVxsic48sYt5yvqPSckHjCM5G",
  "key34": "3E1AKjHouRa5SRms7n84fok4YxcFib51LfcEXcW1ENP9ckNhASbuRWYJZz36ZU8vu78x6CmNpvtuCj6d3nP1Z6o5",
  "key35": "23w6dYxfi9rbZVUQHMm7qQG5UtqhJQng493MyV4Wf4C4wjQja6xgqwYPin8PAPgbnyGt1KDuV1dbhQpnAnBDG5V9",
  "key36": "63aU9EcLei6eAc8KgHtudqENeErSKitXRF5RNUMi8fzJBGWoSVYMN3FGXj2vfE19iGLfsCAnXuwMoFHbhWJkt4jc",
  "key37": "9N4eXYrhx97hxWaPHKj5tomKHytzsyNdRHVUdwN4wY1UcfnPku74P4Jkc2tG22BvtPjDXV3JsiQL5kUVxM96q5V",
  "key38": "4qr57mW6DgGdn12LBCrVeWWmpJKbA34iGDRjzYpW9k1rNjF3VV5teidwWFjMHFKKsPyYejjcZ1qGJatkqdqXgcu2",
  "key39": "4HLNcV2nGe6TZAMc4ZLzghDvdGTxMJxjiFKmmWcjrx8XiAhfZCzjebvZ6aGgYGgiu3oGdAHx84hRyKZ93bbNiUFe",
  "key40": "37qFdvK8Y3psEMyX5Q8GfbwKCJT4LwCP62zLa4RguwxYGXF6fdWduzNNp7Jxt6VU6gNt1S38Xye9BoVt8KFkxBLB",
  "key41": "5kHU22di1rfK8rU4P3BAtBXRUbod6DVo2UKCLoDcGtw8JmBmj2mQgZbqw573QTAcCpP5ttjMLsww8AuuGrCgVEFV",
  "key42": "44672NSEaJnbV7rBtSZDgJ6BrVS9weQsri41LM8Ubx3Gu8aR6DG79aorzWJvWrhZpD7H92xUSAYtDBAoWtnNnz9u",
  "key43": "2JagYmxpxiL18CvpmQyoGidepzF3pndURV96bzbG3NoPqH3sq9jfV1Y2AUZHdzLYiW7Ti62oVpaGTvSgbYN1N97Q",
  "key44": "4bHSVJkqkyMPYqBBTqZKfruE1rY5Nu2t2Kob1MVfEnLYyphn2sMz4TSsLVM3CEDkrp4rSqVByGuS8h9YGy3GSwvk",
  "key45": "3EcczuriW4H8YBkDAk24N4ss4o9jQtEBVnCbZv6XP1VMTdD3yg9jnruqNQ8NUwTKxRCSMvoSGm1o333BSG5hwmsq",
  "key46": "5HzCKTL4Xs1apzNLMz8TMkr6FyQZwxySUEE4kj5arCS3DiyMufoxa5TX7jcugGvCBJzYtnsP6d1sHJ4ekWryBxYy",
  "key47": "bKwZnuM7WPiCEk9vbc5tULcD1PpS2m558jyDQa9M93oaCqwQcZrBZhcz4nRtxhoH2YTTdvuJLJ6cdz9goc51WSU",
  "key48": "4Sb9tUdX2LgvtSnKSmBdqPXwrP4BgbAYnYmmvMU26sgZTv5tYK3CenLuJsLAtfaueVrefbfQVaz4fHC6L2Th213e",
  "key49": "5hMU8GxrN7UgMw9jZtaWwGE6Zqv35NNXe31Coq7YGPfUHDh5UxGDK8Uy9G6KfEJP2w7k5pP5EZfcS5z7zGH6e71h"
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
