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
    "cbvtVLAZp2nH8oGJ8dHtHaPNfR4Y61RmT4Hm2r1iSaeEHo6U3cJcFgNxDfxyuVgcxK81axNqzfYjVU4CP8Pbety"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L8FBL9qLfq5rYW1uT1N2vcJc1nXpSffJqFWBR2uD9LAL3b2ZqEzq4JMPJz2MA625SMELrfcMfSHm5q7CAHYQXQo",
  "key1": "296qJabKnuzJJBbHT5u7jmxr2sDAWBwkxkuGnDcjR94i6hMnuyRGB9b2eQbHrbxSVUvznCdSYNc2m1auwBe7DP4T",
  "key2": "fjpMbcNzNJkrUXiiFQqgRMKdCzTmMtNQaEU8oQcRgP1WrLf4n5Fv13U1kFdWbAtupUFDCgHakfMLYuzSZzTJvwt",
  "key3": "2fAcp5uUB7Ti5E4dgai3ytiYfYqA3pMAmFdCZoHrm1d3niKYWbBFHD6Hc6CisdkrNys5h3T9NgdqDWVTiZQUF6Fc",
  "key4": "121JYxbNVxYYXQPrhNqmjAHAha54tu7L4ij3sCPJ76Top7pMG2t1AHQK4BF7aQKhbj9N8wQUY1xHi26DWc7ar5CC",
  "key5": "2hVVGaP8tEnP1QNUXsiPVa3eCRkasnQaFkUaAxePgc1XXu3ez9wfKWYFNy3YN634UtaxtVaxtTjEEyL3VcebEz2i",
  "key6": "55mmaH5DEyeFp6fhQ4U9ti7zP9EfTox4Bv63uLudd4PUvvCQ7MJCUg9b5wJXGGveNM8zn6DeJD5ubjDW19TNkeSW",
  "key7": "2YvRY37UMSv9btUnwSEhxooTFMBU4Ewv4n8VWh8robhb2C7y5vzeKSNNdZLYvcdJrfbdWCV9kp794TGirKbmh1De",
  "key8": "4BMpj9W1Ki1xZXy8vfbHCAcCZwQUWdnwazisMywjvZdNSQPe9j6hP1248yM5jgk4tLtzq3i8gL6JeZwXWShjPevN",
  "key9": "GGJUk1LCJsAvAXNh27zdZLYb9P28VVZAjG2eQ3rTDBBmMbsp1pK8J4nyJNSGuiNcZ5DotHZUbVd9zqYYh3gQhTE",
  "key10": "2AofrWns2bnd1xgnBevQxReV7vTkxUQwZ4kLNDqYmikf1ZjAvcnCMpABGkerxpc1oAnbVkJSzQsXDXmW2cUZL6uP",
  "key11": "3VrQDzX3eqoxq9aasAEa7HQeT9iFWKxCVx9FzFZcRJmoDMeHcuZrGjMNu7rZCcxHozK8bTEv2dzhseskiUnDVfE6",
  "key12": "Rph3XJj1drbjPcT2pixKE9eGsC18e2ZG7Brq1KJtKBDSdWgk9V14sh4FsoWb3VgZTbD1LGs4nWk6V9HpCvMQiuV",
  "key13": "4AnvfbtxZQRs53515kYd5XsLBVXKYUnKkXf4iRWPDzikkD5HYV9YCHt9UEJrhYAMnDtTY33XSSKmA8nGxeS77dce",
  "key14": "4EjyZh2P2GiwjKcR8fcHy1myUyFBWmUWrnd5XiSDt8Yh9wfAKd5HwF1jCgfFyuE5qSoimQBFAC7PGiYfid8kNE6S",
  "key15": "3gcjoFzqNUJ34bG9AtQQxpFpH9GL6kmpRjXWKRAT5ZHwDVTE1wBdgWHPbVUPqxoPyVBHVx74jUGEQ9GwyRejuQoJ",
  "key16": "umsVMmKNLmbKT3g2zDC1AJVSefHM3XGDK1mvDqy9zyVauNVMQmtnHsjhSvgRantYoK5xWKkLfvjaisp2W4JkJM6",
  "key17": "4veGRkZLHuSrgoLeYemiFnMMVhmwzixJQA6QTB4ACyP8jnsRepLyVovtp3pQjXs7hShXhoEuSxET7zfqSpGbexC7",
  "key18": "3h7uSWsLEdrxxzsSSt6neKuLHa1yEyKe5jW3rpyFwyHqJdBaQ3zcTg2Hko54cmJAvFPHTkrFJsZktMcG3Gr3ea31",
  "key19": "Gn35TTmsBestEorsFMk9h24gKbtxCk7nFJ5QvhrRKmLBugGNASdk5vuvD3ZZJ7s1caPFmZCCof3nkZesGNxU9uJ",
  "key20": "5t7jeP5HhsuAmcjQuUpZYZDQBf1qPQGbtNNJ67tzgft9PReQz2bVDWaScRez1HwjWH7jaruMD3BxV8hqJpLc7jnq",
  "key21": "5wYngJR18faHFsNmLCRFqnv9psMXTDBER4gQqMNqh743CQpTJupMP8PbvNShpXpgWNpuEgTtro6wbn35Hc76UFDJ",
  "key22": "2bdaQXjmBpmDk6zcxSnTed6ZPmidxttGfRF89a7mwfr2SNiRXkcm7LSUvVyhe3YWAtnqZ3XZcet3S2G7wAbsGt62",
  "key23": "28rXPTVE9pBcpYdCEkfCzGHDhbmGKHnmQg7fckMb16SpoFBJgMzz5BoohqagQQCtaUEKwSK1Xfo21pbryRhvjdpY",
  "key24": "3wfuSc1g3oUEKMQ2XMZ8vnBDp8F2C4HTjb9rdyn5KiDir6E5mn3QF5du9AyGrAQJ4ECJSgdwzHntfHc8xBVbEodw",
  "key25": "5aCmLqPaT1ChyBmdakbChcjCMsFZXGnXY644Wa7qTWgnRPk6ajFemiLqP42abcJJe76UKks6WuJYwz8p7CJBX6LZ",
  "key26": "3fsCBMpiUrn3DwsmAht4VfGyP3x8iL2AjaLaPzPJfwKgPCsRVHJq8BmdhMaJRKj8S9uLTMdS8kBDENtn8JNF5p3j",
  "key27": "4TnGofpRfFZHUJz4TdW2dBE9MJC6uCt65BX1baBoeqD48e9kfoUoxqx1XJpefeJKwJgM7HHxw8rua19arCoFoJoj",
  "key28": "3FyMp8LQjc1cmXfnji9ybz7XWRimsA6vLdF88AptjtoRDvQu4BoYPecoM47uNVrXwLiSM8oBJtzxHbhWP47N1mUS",
  "key29": "56cY4kgCmVtUuney2uS8dL8oNKot2GyZTaCwtppWRXy6K8bLB4nAL9PtjzgT3HyGYmUwtyiQ1wXefWBXQGpCPCFf",
  "key30": "AwW5LcbhxLVGZFuoAmGmkUNngiA2ZM4B48oFts5XMKbAfJ9JVu1mzMWoCKwDttVFUYV5KDP8sknVr7X7ZWhbxH8",
  "key31": "bEtg1DujnnbwXWAhX2rsxxvCpsNJzGWx7rHn8rRDsjAoNe74SpTgeMJNnuecCbZorsdypyPigNcELp9fpUc7Res",
  "key32": "3fTRghdCjNR8ypgtDGYfvRgNm3TE6cAUgtynv5gL1FCsu6bbmcDxWHkBFwyJ3jMNht4ZxyQDBtb7TBcgqCTXvFR6",
  "key33": "4yw2rRzFnRbw1fP5KZ3rjZbtPj1A53VfcEDvtQMwd1Yv1cpsfMBf1vP3uhEpsqa9mbhCa6RbTR6S4iiZxesjH811",
  "key34": "3vgGK3VqBmSAKEoQYH9wuPva62qkges8ay1epucxQWBfHbYkuYkswx4SmCSjveKZNNqKhhtvE7BG6Vpv2QGUzimm",
  "key35": "3TPzPUx8EEVDnmtSejnG3WRpwBr5fiGJfALKux2kDHQWCZHpoFgc5uTzQz424NLSNDkPx2xAsZ4yRyJf46bGgzaH",
  "key36": "5L5hCtA4rfKRybc5ofJanaeFs3AH7M35Jga1o1BnrLjzKvatWF8PQyBwvo2rzpToFgqHxdPY5eYwuBtyE8dcdsrV",
  "key37": "5PZ8NUCtneUozGJyg5TGhCm4oBXG5FrCimSwq8PQ7niB7msRL4AGtDQavPpTJEkJdRFxMxG8iz923H3gjdJJyX3L",
  "key38": "42tykK8rfr9vxuqXq2t3EwMpr1oimTKeW8yn15UdDpZMAkRwDvUwfocupXAKehCZA3oGWx7fDrXi3o1amTTFEiWs",
  "key39": "3hYFfGXoEVtAtKP9cGwzoizeyQpiXjhFPc5pR4twGkg2boDMa8opDkcSg48MqUASRQnYzV3wFzZ1TxdiDkNM5kKq",
  "key40": "4ofTHbymjgUqVAEpyp8H1CeT3VewEDw7FNX3FAqkq1vbYQAN41sDnKpGXgxqv3BNQ32K14aFwNt2WwRgMikDZz4C",
  "key41": "3zf6gUZXFpkDVpCZEHC1d3j2UM5H4p1KrzH5xim8iDuTVdUthk11LczuRpridU6mZ2q1DumAg2krWgMfAYserFUu",
  "key42": "5YKPRVwBD1cZPk8Ui6RwFtit2pVqdAtBMz31FbteYW3DvPYndFndVQ42b4pZ1JT7DhQYYQnEzZHSqC2PhLiFZhF3",
  "key43": "3fNxsCmriH66iMbj1M2AMpourPqqqNJHVzFLY9HL9kW3uiwp7dTNUkTRMnB2jVrFj9QhhaDYG2HMELQvdYDVu6Th",
  "key44": "28g1gt1W5JkJDwA2cmxdg4xmGMxrdkxSBakyzqLtCX1GHme7qvEEmPasB1nyfv7Z9mFab3gcfUJh7HEwmujYaof4",
  "key45": "3xdYBjBsEaTYmVGxBuwH9FwmqZQZYQ8mgJZXpgLimpraHS1qqySNt7YKeTMxn4hu5FA7FWJ9ndZMG57XSKCf1kyp"
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
