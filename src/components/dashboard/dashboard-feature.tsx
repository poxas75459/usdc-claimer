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
    "5R4qrGhcnhsgzgC7PX8FYWUbkB8AZnRPj8Gyoz9GxVT8GC52kMahqPTwPFRvBzbkWCQB6b1ap7TCxzRpFyEiajax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QAvuMJMdwDegRF4LAmfJWTkR7vhbwS6cJGyhheUMDDxYGpKGiChEbeV7tTRAv7Ed5jxXnDsUZG4SvPRgvcz5B5t",
  "key1": "3fyZP9f8kMZZ5YA9PNNH6YuCS8HSGEyov4dBuBevbKc83PuBLA8jiUdsMtt1foxgkYhm7mkSfrEJiBLmMP7c627d",
  "key2": "222pKFUEy9UgREkAG564nhBs7jkrvoGMzMzUCJommqeDKB1L13ynLSKSdE4TpYoemzgajo1jaSkUNW7JeCBKCmEC",
  "key3": "ybKzmvkv7UrKe4B6cpb7bnC1a27X6C9XAZByDswwUW1KjCBno8xPaG7PRCAR38NaZDjVuM59oyvXua8hwHTTpoH",
  "key4": "2wiNjKRPgDREqVQxV7F8f3TdCvfJXHrxZnkjDtXWWYVueMDiimaaz2YiXbEQ2XoHeYVhPqGC4UQX1AbR3BfxF4jY",
  "key5": "kWHAfJSRK9QSVpG2g7ozRQxXoK4EEK4bi43pTy2db8t9BFM8gBVJp4UWu1EBbsnpajWJcU23neVhSzmmp6Xm9qC",
  "key6": "4BTPT8dmVbZjaaGD2sPTuCfwGAJvxrXtJnKmsc23ZuSc5mnYkbRUbb5cw1DjuzKgczpCSys6yBgSg7tkLQCDDJTc",
  "key7": "2KUgb4UkW4X4gW2Jzrf3Jzrz4Bm3WuRnS5VQ91vtNWfqpp4e3xrmu7XSSjKmdmhFwxNFJRbp72YSb8aYEjV5TQ5o",
  "key8": "2VEC5JkiRCtEAimnCsji5BombUEFSznbNGPSoyRtWtZbU9FRNggzeBPNmkE7HnWChe2ceHZGwzeJH5qEARmyCvPQ",
  "key9": "4HbdTQ9337cVM1LDuoqpai4zuA5eA7mizkvSVgwMpLnLMBo2HgQZDJDkxMKf24g1FjYdQTA1eBJyZ7zNCox2RFFf",
  "key10": "ANDWJFRZzC7L5K6wWxjNUA6U8cZeeMdrYwXiiJRdh2ECyRkJvRGzUAQqbSVW64Bio5WNKnZGDCSFCu4Vcp816V7",
  "key11": "t6ZKaNHpZsFar3cjpnV8jjqsYR1zQdho1t826iqmxMMFC1ckmWFs15w9SAyKd8RkqHqeKzvwpbgWZcDHUoLVuJp",
  "key12": "3rezSF9YHCQcNiyTmr4NQHayecshAXxKjNaLrU6f7uprpmPfkosAHbhD9uorbFHq1XcaG8WxL8VjMQo75yK61dDN",
  "key13": "385MceiEYSJSjzrswVm4FqPQqYHLecJPV7spKtmgVvKS7QgUfnUEi5i4nTrr3JPpPeNyT52rubzyLay5vzvsUuBy",
  "key14": "4gbL5pwMbwxhmFZzkGyZeNwiLdikUa2C7dawkFXYsbWVjzm72HQmusQXDiihMFj6yv8u3PwW2PoaFQ7kXS4fpWYZ",
  "key15": "4MbVvvuiGHdeYEcEabPDEzE4oEA8ufCnZ5ayiDZyoWfoGzU8N6faCpdtprY5T2FFwkChQdFCfj1XFd549BArosvP",
  "key16": "3KAYG36vTvpLbgm61LxaPzvaLexcQmYchSc7qy7D31WL28RovHL31m2qhZtk4dRaqqxVZYxDJZ2AKmMDZAfWymeZ",
  "key17": "5SXa6QRiMveufrd9mnCcjYaSCogSdZG7eQeZheDyF8CbG9yh3Z8xAbL1FatjGbj9U4nq7EqueqZXApRVMPVJ2BHz",
  "key18": "5ehJVtipx7RL836cWfgfFQNeRwbMXe2HEghRXZEfRcvzfK8pUhC7q186uuoVbXWCJvaPZrFyjNQL9KwrEg5QRgig",
  "key19": "22g8HohYTSiGPa6NQvubknccJg6Kv52zdQYjfLxQprPG5TnwrPraDKvT4vkFJKHmn7ahaMyCDybN1wPtfQ5ANnuK",
  "key20": "5X9Q1RL2SLQnnZRH8Y4Q3VPbhey2M1FNm1nmvzgcRhHMM2ghMBx8dH4KU8bT1JxU74wamYrUSjxFjgpC4h62oT4p",
  "key21": "2i8gbiQfLAkpno4Gn1shVcdHnBmUhbrmvv2XpDGPxK8qbu6kBzyRkmb9U2waGBzrAYzFSkRAYxqQfBcLyLntNZSC",
  "key22": "f6959yZ6KJnMhUUJ9kUg9HHY1ZRVVHWFWvhVTk4m2WUu75ii2fqjez2MgqiseHmdFeN9C1PNa2V5qXJYMzhG4Cs",
  "key23": "o7oYHYo7jHqh8vRdyAs449xJNRbgpRiDiQNtuhs8rk8oMN2q27iJ7rkJ8SJwB5rWF1LmR7MZG5CurQRRmMJr7eQ",
  "key24": "2MgseUrEre8eQ2ZT9EouaeCr1QrPrHDqKuMhGhk7EMqc3PuTMJqAVozppvNwoxjKNsUvZbFegMm1YHzbVrQVLaDL",
  "key25": "5MugL5QJCZzFTC8B2oAjHPFLqUi9aDdF1tUqbn5aSTaf69SUQfeYawXSHhJiUVFXEgEt6SVdtUfJRfbrBjtLur43",
  "key26": "2vuNsNJYnD8DQGWd4kuvoaRKd9TDfJXLKG6PnMYS3TWyww4Y2mNgtSm3AYEK3TCzSyeMJb2UJgR142WFS8NWUByf",
  "key27": "2ZxivGA3Ex1TbbKPRMDuCTnhMgWDvTNP2TNWNaGb2qY2ZKoXvuRiiMNo5eN198ntuXD513igwd8bn4ABCWMX61DC",
  "key28": "2B2RvpvjRzZuDxDfjNgeAi8kyu6ZtnRB1WVRG3B7fFTcp7mxSsa6iCv32wCdrQQBmdEvHUEWJWRUkTQ76n8UaCxU",
  "key29": "5rWgQPdsdcnCZLaT4s9UfkaUYxzk9MgB9ywq1vfiH8cddY4MEJNRoNkJFdyMsDH2cEd21b99NMSkwvRaN2qz56Xm",
  "key30": "3iHuyjuSSZBjbpPwQfBgcExMLfq2qohQvuNqmLsDqGYPHrxAyVV9iEtTP8TtqBjdjCMLHCaYbEFfLNRVrWe6VzPe",
  "key31": "586HfvEs5y9nZuamsujGSB9nBLu8iV668xWxngMy3M8GsFHQJpJhEUN1bfD3ybCw1vX2iwvzEDcbAX4hMzJ1p9Hd",
  "key32": "3CiZdjq8CgMZLF5sqnFXYgdnn3TPFTrGbEk177y69PxWtdPC4bYkwbbXNrt994AiTj1i6tNFKbMBXiBU7YCyG8nH",
  "key33": "2HWR1pEN7drx5pFgtv2rM7NHi25CC8AK2qS9SoVXBvLWbVhkTkyTRcCK2cEDXtiEanmrTPc2Cxc1iQi4APN2ZCEH",
  "key34": "5AmK6JwRAGhvMNbG9SKHDSTEuJQNSqrm8gqPt9iar6Pw49CEgDHGnaTkpgTZeMyCYWeAnMofdnbX2GU1hMrVWnVR",
  "key35": "3ETHcepvsMZAjeatCgiMG7AJ3e56QAQ6NmddVwnyJoNLQHQGdpZ1DHhUgftLXKcsqQCpBsfeGZYa3RUcUNgpefJn",
  "key36": "QeJrYBiiWWXLgdyQb1q6nUGTgRPJ9HRgMr1swGhMT8cxPFN2WfjsNovRKHiK7wVcsCVZD5c1fE9rdGkLtJVfyUk",
  "key37": "36qUEZBPuGBHF89tJnzLkHRcmAMe3JQEGjkaHQaoJioAApegjj8jMoR66m4hh3htxL5r2RXdVGQCNPARRAqgN92g",
  "key38": "2d7hJzerDU3w8aD89ER1X9po6NmQwxTEGiFm1fuG3gKY6VzrwmFzU2ZNcqYw2E4yhHjUAMhghRfwSvtWB34n9BKK",
  "key39": "35Vw1NDhreQKmUPYcPZMTjpG1dL8ZwySSvQ6ZAN2McnoeWjugSVkxAgiCCVy2LumpVC8huCoQN7cy8dCmZBtJLqS",
  "key40": "3fzEy4KjruCKURrRBJPJuepioRHhfNxrpikbp5dCLq6L9ovtvX2aVHgB8JBbw8UjuHBWpjhfayHpt2rGqtq4oCgD",
  "key41": "4LmfGxdS9jLKjN18TZfPcPgQYbKRqug14v4kxzVRgawWfargLyFRmLaxuQFKidavT6ef249qAeebkWAzoeu2cftC",
  "key42": "3Sg3tbBgu1JnAXYAWgUm9Gazq2Y1AAhBr6XUKBwg2fsD1R64gQaXds8BjwJ8NKYpp6NXfQnHLA3tokmwzPj7DAbV",
  "key43": "FikVyfaFciuFj3WaiQZjBefEH5W6SeSctFfkfrforFa8F7BgNMEmYYSk2dmUKt313EoRxhmp8FwsjgPdL5Wft62",
  "key44": "GsC5L65ZHY71c5UfMUL7ZRYA2h4wexjgFUakSQrba6YfN78XjbnsUNFmddje3kYt1sYu6wF8LAuu6aiZjyuighF",
  "key45": "5Hw3MNKPxBwrXwJdnGsBmtDBbAZ3DvDat1a1nCm3FBTzrSCTF1MnQHSQsL94LrDSF4Pf3BDyLhdeFq1YQhKtA2z8",
  "key46": "24KEnCMMrF6KAjAeCBcMnRYEP56LoZ4oesNqbHj2AgoxDoojYN6PpDnHZegVmZbgWNasFtmP968uJ9d7Td7sLBA3",
  "key47": "5sJ8uEtPxjiLEe8Yo3ipXaWSGmgPHhDAunYfDbQdfL5pETsSYFc4F6KKq58WwRdYcMXUtFD3NnT6qh7AHhJ8uPjk",
  "key48": "4rbzZaFEDmhQAUW9ekoSpYcBn3HKJYB3sgLgRZhUnQd6HPwbrEQCUMw1sAfgxh1SMXxDsrdRCktNMrusXaRk3f2T",
  "key49": "2HK4RrzHSF5Soo3cpKTbFq6vLbQv4Lq5JBe4pez5bj7Rxvn2qmQ9dxFsW2jz4Xw3mkhZJQX3G5ibLUamzsEizAP1"
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
