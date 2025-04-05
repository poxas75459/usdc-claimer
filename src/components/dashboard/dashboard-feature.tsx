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
    "zzAi81ULU2LD3XVrSSmJMkVKSZCCLyRk3bRTV3Fk5xQTe2zyLgrkia6QAqFjaE4zfTGanqs4dYr42y6LL5SjFat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jkmHZsxFskbEZBb74NpBx7MxShoPjeKVx9pttmQz1StmDbrMhMxBvgHNbSpiRdTw8P8jFQnYBzKc8UPFjUCQ4aQ",
  "key1": "59wm5Kdi7Gyf7P6SFH5J5NsrfvqmRMkbsKm1ieFkWGZnvy675C7ikZRkiQHs45Mx6J68ryRwBenucvhfKfAUeiC9",
  "key2": "2z3SPuGv3A76XeXTPWUfwUfF9EtYSHJgWizirx3BNKZ7UPzbotWQdYdS8DUfpep2rwvjTzY13s6Z8nTjwwZ9MVf8",
  "key3": "35BZbv6GiuXDhH4KebtFt5fzmFxz7DFe9ACzNA6Zr34fu3zhHUF1ft9UcwyvVzwhLNnCgthDcdww27PK7cCGXFG1",
  "key4": "5Eas3wwLgfPX4gE4g9y6W2Y5GgxkZnsgEWQup1hmFRzJH6C16MXvv61XqKqcfDB9ALVm94FUPuLGbyuZp3YSbwga",
  "key5": "4MFpfXHiE9jBG2s1EzGLuYu5ueKU8JdGbr3oU6gpSkEGAjAXaWTAegbiZx4qukFZhQ6sG6jXKCTpe6HXSCGzyADX",
  "key6": "4PgLCkXVHjskSyqkwGUfco6FCmdbRkTVT3z4cxykKmd99Jx9fC9ZKPCsV7XrRjkgA1qMAbE3zFrdJwaSsBBWUebn",
  "key7": "5sVnw5btznjxEZpkiDpXmSZokvWaMe3yyRVaj53WdXbXdDZ9hMcxcFtarVnQUVuc4VY7EehmcTdC5dU8H3U4zFrS",
  "key8": "USr3AzpPL6QvayU3reYZTrgNFtrqLQSfXgjctu4csSBT3zXvPaVWfT2aLdi56yfP7v22RVmePomqYQ4TewUWxF1",
  "key9": "3M3p7Atk2ca2F2iKJmMQqZrSu5c7JtU4oyyBK1LMJsQaCiqdWB9QG7Ag4zcnXNzYevw7LSTaCQhGMWpu4TQ2s33C",
  "key10": "2Vrc5tKfefmyYSujThaRjGstG2ztb58B5q9othCA1Ug9NZfdsJLtvvni7chTAkPWjTxqjTtkwiR2Uqx7asygr5Cy",
  "key11": "4V3xL4CwHkpyg1g2SjCFnju4zKtk2w36YseSj5c4YrMbbKAsdKKPEWkaFJ9g99G19AanKr28SWBDweKHiYAENHEF",
  "key12": "4wPYqVXiE6QLgraZpGRYb1M8L3BfWcyWwyKi6H7QTK8MqwLCjKF63HLZC3kmjmbdd6sRFZaPCQTq93EyecjwkuWi",
  "key13": "2rqy56ffvYjsFxWVuwqf5JwcnLddCxdH6XhZeV7xBeVipuVsrQ9vWpU3FAoFWN2mCb5TNhYycRe2siJ2JobkEZB3",
  "key14": "2TWG7wnFScYouCHJEysmex5WM95CxTYhp6QyA5NxkqjPQbQ5RCLQUzPXrKbGARNjeB1kzKz2fYnucg7z51jfSkiT",
  "key15": "4Lm9sVWWQjKWVkZBEuMnRtpt3zb8mFD3XpSxDXahvuvgq336L7HUndFbFTwL6wUE4vgFrLJxYxs8J237JBERJQk2",
  "key16": "2RgsdbxJi1tiKTLYAVfRor8pEbkwUQya68toZi1Fo7iWuts5wcV9fZ86f4L1KmkY9ehVbM6TWiXuEN1cpcLNnBRS",
  "key17": "5pMWCkKc8uv3zqbGKSd5RYmFJckadSzXTQXpQhgBSRczhzxP6NApQBQLWeUjn9ABFxEbUtxeBkkEhij2KLsRZJvo",
  "key18": "4RGNk1rRD1FUUUX6KpE59LG6pTt9cw6KcZECLz1TEUC7YNQhuY6MRRUsxrLwR8exW7ZRcbJGLPABVHvaDwdVWtBK",
  "key19": "3cdipfCPisuWjfcq56ys83e4C3rFAPbu4gvgmj9AmP6eG77mCsfq94Rcp3cnXFaVjihC7D2W7yimiRU5D1kDPmFH",
  "key20": "5TVSpdASqnSY5GvrbmuDKmR4Wp6d7Z94uwoHR3qGZjzU2tUVaNEVYYANR2G5hLXkY4GvDWHAvGY9ZG6ZgJ16uAHh",
  "key21": "31vSeQncQqwKrjgRYKi2rWntcebpSNKeHv4BCaV5KdqWdvaF2SzReFmN4qX4fFFo8DvUZMXBjShxHFDC6RV2Fbr1",
  "key22": "2LD2PgnzX2pyRHE5wPBnNfVncdAYEy5YAQXhZYZty2kJ7QRMVA2yF9EuJbT6ctwUfv6qQjFU4ZdNZfYsm6xTMd3N",
  "key23": "4iDSep1i3cqqiJbnim65GA7ZpKcMMUJWWjdir827FbQx2HfDoxfng1EgZufABujji51xpCBE1MPbu5oYWGRLLdF",
  "key24": "2CqcEu7tkoCKkj5kvVvAfktmWYHxbGjs4KSXhiQXnWat1RpkuLEKQT587eqEaJQ4n5vDze2eoBNDfzQV2ytze6DJ",
  "key25": "3ivg7SPevGUs2XkLLU5CrW9W1CCiRZbo3PQtVLMiZKCjaJFukrXzyrtbKiYY8p9PszG6hBrTMjUhMCPMc1pwUQKA",
  "key26": "4p2RYszZgoiKGwgDTaQiaUZNwnZN7XcUVuLyg7NnAcv8NLSSuSVfVzvtkXMpZ6fMPKKV332Pju3vHSfFtycLLLD1",
  "key27": "5S4rqiroTXwXosQwDvkDmUZZo77SHN3zEBRyKiCPMyWNVkaJtvNUhXY3M9gxBvwDpexixv7DentXr9qU9bMA129S",
  "key28": "5NeptWe9f2gjRKg6vBF4HzS9huz9mSonFzdcGGnZeUQSPygccC8Hfr1XBFFGrZDbT75F9rtwPFXTrv6dx3kkTjR5",
  "key29": "CaBmBWrLBa6tHhaf6qNXxf25vi3AXVeLopzokbtKTH9o6QQipS9KA6qXsaZTDFuVD3o7cB5tNtYqBSo9JpZFfJ7",
  "key30": "5nDzcspimGpSfnNCLQzxjEmbFDJgzqPWMj3Xu2DgbLGJDbZPo1Kvkz6wNJwbNQq1rjQUBdvctXiT1P9hZ2RvGqsk",
  "key31": "4SgBBoWpD9GRibQPg5WpdaVLhaQqSd2v7nLAZDXn1HUABizopaFLVLNBRk5qdGxHCQU5BHNNvNpxGD8yV668RbSf",
  "key32": "4Z3EFZuuvkxoY88DZ57asSENjazkWpPyNR3oYtVc2oDT7vK6e3HLjqxghJLopkTeteyq6gdE35qR7jgy4u5senCh",
  "key33": "245m8cMaF3uuGENPDqX5aJKQqNNoyVmxeWrjSQFCweCnVg8YqjouoSXuWDeSbtbES2MKNguf5eofdaeqNMzAKcRJ",
  "key34": "63ZFTy4jkNDEgB6spLyqjHQv2BXrtaTXibnBoJpAJCh6NbRnpA3wWS3BuBDUNA648wfBTQQfETBL2UzSymtF5YZU",
  "key35": "2vLCVarZi7jZnkonUSRSY5dTHJ7HCy1Ad9iNVV85RkcQrePcoqVnkJmBK8okKbFGKRWvKqaXBmHbWFdLgCN6P1o7",
  "key36": "657cxrwnsXz8m8Bm34s2ciBoYXkEAZQG68baZdU1xzNM4B9G52fBuhxj2DxMZvGbdfVah5ppoNoqXACXE5nw3Dwr",
  "key37": "j7FSZA2G8MtCDF5FRj5RMiiEgCT1da97BMdj5Ty5PubUjzepti8dkQAWWBB1hmwCHkhEQjTxsjKb56tEVh54vUW",
  "key38": "5h4wBL7EeESjPz4YS53HuqxXNnQphZNdtYG6hCf1Dotgovd4L8oW2LeSeUocsGZzLzkpGeTJV6tKz7aHVsa8jVs6",
  "key39": "2awmqp82v56V375iYdeQq2WrvA8J5X4xuxh9gvo6mFURwExrGfmDLAByCWsvzzp9Cr7U23KMC1wrYCd8xv7hAVDY",
  "key40": "4snhFkXPV8s2Jo5sE9oUvQGEUbXaaLDRJb3KXYFD3PKkX4Qy88cNtGLzqcSmL34DJvjUF2YMrgWudMVFwfqxyuCQ",
  "key41": "3ygxyjmVUHu1j9j6iMevjN46ZEkmcN2SSVYsq47WupY8wXbSmnLLvwbkz8G9p64HnWBVxbJzi6jGPDVGtqPVWbRg",
  "key42": "GH27d3NVq6LmEHeUgvdFbG8dgqvka35cqaGzMDohHaKs7593ZW1NRBkqHx6AVTRADoUsRP9aJR67KtAR1qTZsKg",
  "key43": "4Q8fCwCjTUXAUFQhJqK65UA6fwUgfzHCXHzgtY9b1sbmHUJHnZrBcN5jA4a4YZaSAsqT3XaDRnQkMNYxvzESjVS7",
  "key44": "4ew6sRgteFaEVsgxEYUg5BnQrnvFYnC5KSh4FM9bZGYacmMKpR7NJGgD1Uxfgv8w7v4Xsmo3UNwc5YmAcssYUX3H",
  "key45": "2MfeP3durCQdSCPw4yXX4Y2Eh5GM3xq74y6soF9SmRmuNNKeYigJkUiTYWpXG86WqEdsTpbGKCG9dqQRfAUoL42d",
  "key46": "2BfbSvC9A6aMm6rhy8tnbHNzSS2FP8j5t4QFeLgTDAzCxSQisj2MHFEQLUa1vdqs7EcL7CpCAxTy3bmkecmbdSj1",
  "key47": "2YDaAw4L7haFU64Appdb6hUNBi2e9QyhRpN1SD1J7wMrR2sirKPoF4QtbzcTdX6CDx6TxA35yV5SSjECV5wTSotM",
  "key48": "5pqKuZNPtb4gVHuepaQyD4x5aVWBepacr2VqP1JHwEtNNm6bRJjs1DgwPNfYeLK7ckCX7cmWeZtPkA9Ls8aswGjG"
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
