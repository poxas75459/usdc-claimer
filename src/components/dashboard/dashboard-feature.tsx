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
    "516L9mf7L25YqkaFAPA4NTTbY5k6JbFAPdbDx19chCEzFL7xUhrZJUMwH3e4kzAo6cZRpWs5TQDTzjfdECMCamRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mhDr9kwTaPBZwxhV5hBwuuyG2rajuCeYjj6mApAXP5ubJPJXycVv7NpAUgmf9YsDaf6GHxhcne2WM5k7nxz4p1m",
  "key1": "dU7eEt1uWUcimQpLduJJh1i6E92WwENQbApFbX7qcYvdjJnvZpteVXwAdL6wb6E5rTkf2JeWfbStAVsDLm1sEyQ",
  "key2": "3hCuBJR7LptkstMaWZKCKKaJoThZVYmJpz9kA1iUbRzJn8ckGC2FzhzipHEYXkWtAb9qGyTo6jpVc9jWJmWSYLBZ",
  "key3": "4niDMneMbrkHYyhSmtZvFCWY9PHv18zraU3bnNZYSwnWMjZXcG98zux4rkbMisFvnrq5DhySH2Lc3yZK4ZF52Chf",
  "key4": "4Yb5sBhVK7ez4FzoDiJQtWgvbkBH7ixVMBHTdW5EqedS7XGoofEknY3PSwFcMsBZDV7JNpN4L5cpC9xmkBxxgjXV",
  "key5": "2wHs5UfNqqkyxvQDGDq3SSvid6ytBNVnZ3oXLq7cziABaiLju2tJQyWR2qWthbFeZt9nxjMWKQjjnzFy3WovXZte",
  "key6": "3hPrRqwUE48u5vrCZGt8v4wCpDmtVGMNwpsEcfP5mDdUA2afEMLjTQa31Mukx5vQm58BcrPAizoT3i9c4rvUMnQD",
  "key7": "pvvdPMZTqyJNGa2k7146pUWbtunrJ5Sr6NNrBsi1mYyPYwXcrwqQKYSWqM1sxAMVSgsdR2umBaMsCQF1bgMAnJW",
  "key8": "4DhS8YZSk84wn2goSpFZokV42FgX67cjimRJgnaf5vq7drS8i9G3VdudNUHDnQYNZii2zmoYuDW51Fm8UWo9PjW8",
  "key9": "3THmubgKogjsXtUA1z4Fi2R6jBRZJ43DMWKyayqqoMjXrqgdPBorjDGYNc3X8aq2AFdmtwmKJHuEpxnyeTyX9yqU",
  "key10": "2uts6FdqJR7Q3Pn6MtnC9bZZSGAXWTtqeMoMfZpovwpj9UGZWPCH356YFecoMtMonFKB4fcQrH2xBVnk4P274XLu",
  "key11": "dLEU2gbBSN2N6NmDM4SUScFyY6JtKa1nMa7V9znUM5C1G4q7BUAba5PgT4aamDfTsGBzVPVLEHm42AL5dsgcdpq",
  "key12": "5yi2XGifdX25WE9nS2hXNKKn4i8zhb7SjWnqX3eQXEheqdhGJGvDR9C2jo7UvudvpRtqCtVVRcfnAVkYLkjeBhHc",
  "key13": "26PAvERkfXsPq473bB9XBZr7wcifzWRJQffwM8accYfrpuYX99DSR22Nzu2EZRpUwVsZjuRNpoaiVUjAckQ418hT",
  "key14": "2AbpcJpCfPYpvMUsfFgVc8wacbD77TVXDwkGWD6riSkSgsnbQfCDoUoRBisx9LJNW7Aq9jjhEEaNg9CshKr3En4p",
  "key15": "5tUWEviRFYjrjHTnCvuunhm5aFBN1TRoN3pQe6tbskorDBceFQ6CqT6kKzKQymLVHy47M5oA5F286cjfDqXJmRnq",
  "key16": "2FhVM6AomgytkCQ8TUQDTbCY5dUincLuCpSiyKhfKSZQjE3uzJL5s7WinoZpsV4Meh1qAC8GnbYuVohoxNZgPwWE",
  "key17": "2PuN7o6Fr9Zbo3XkN4b8GwNFWiQooHBAQLH2EJ3at4WfEBEqcQjfWh93msRgSh6MAh4UgoPdWyhE7jidzQzccqiK",
  "key18": "64MPMhk4LGJHWUiJuCTseswC1UyWdTFiKrHtVsz43Gk8JR42Eve7U7xNtpvdUgjue8MfcjikdGqJP41bdCEHMLfZ",
  "key19": "2MS3rYiVG2YKBTxpv5UDh62CM4QjRTZRYspaPMmhydDmWVxXq11u7AtzRfye2XFrsqDJFcp9DCVYzAMBNrtWzFWW",
  "key20": "4hh5EHnfQF4jKSx5KmxtikyfaUgxFbkWUWkVE7Z9QtuzyzcQPLLq4U4rRaZzRt7vwF8Dx7CguJBUJ57Ex6j8SdQT",
  "key21": "4aH3rVVdQCkvkYQcQMRhiX9LQe4Mynb3zQTqZ29zbsPpQwrYEdnVfcDiWABs1qy8PrPecDApc5YQPkZYqb52wr9a",
  "key22": "247KSxJPRMzYBrD2yMM4H6qtBsHvu8VnSvzQenR3hnFnEhQ1zYcKPD3CZosUqffcdBpLvJg3W2UD9A89vRB18KDF",
  "key23": "2hHDETRQmZFfQkD8zAy51HfMimYK2FKpim3Y9euQXSo3YngSBMpiKn33SzayLFzKBVSB6xrs8gmPEGt6ZbE1RpcD",
  "key24": "32uKvqdrcDUriik8r8tmtY6NTm3iy3Uym7br3b8GevJdUMXWcryNQ6ws8rUwn5ER1j29hhy7H4pfeEsNVaM7cjXk",
  "key25": "2DVLZoyqPFY1zTJpG1hgf2qkKsycDbUS7wu5xFXvviPGVCaPDVeYWkHsVS5ZbCGUEMGUsSnJZVXehWhZj4BFHwHM",
  "key26": "2NecJtrTGUoJXCf3WrjPhZwzR3fTngZHxQysc6f26eyMZTAGfBPp7uJCyM3UvZWVgzrmvtafLbg3ojN21vGAZPqF",
  "key27": "ms6L94sK9PbvpH55MnXhR8qPd1ZzRz8EnXR1GjYhR2VNpPZt5ZhY3F39nF5AyGPZDXdJtYxGVoLmL94PwV5252B",
  "key28": "5ZcSbjvufc3bVnJnpzkrng4RcCDFAJvgtJZvzivTv1Axsusg9WmueqaTvtVmWZEmQN7uasXjUGL5c5MVLMD1TTwg",
  "key29": "qRAfd7KE4fpKxzUZjZQEstmPHfYBn4mU7iVaWHsmoL1G4qYkS4VYTbsD85iJLruLPgLhPHFoTyp3GqMdga4rz1R",
  "key30": "4apJUQzTrNDRQQimWzwFVbbqN4GV1kkrpAWEC32WPeK8j5YDDMx9d27Wh4Y1CsMfLKsMZSDve8fbedzSUNGMY81W",
  "key31": "pKF8sonwSmZQ96hktao6EWqgNczkYCKH4dDwt6m9SqDQ1STXxDa46KWin98u2UuTijiiWbMZM6HU5HXNQfLCJPU",
  "key32": "2RFsJTrivyVCjpokGm3FHWvsQdU2zgMBpnQ7Au9C6iVcQrecqf1KVtwW6hKMozn1gD4DGC9JCmtc4ifbToR84Ygi",
  "key33": "3KcuujxU9zP98qs8FmoBwQAJUxmAKfLSU1EDVfKDUaKP6eKHEcH2RQJ28etubKPg7MtwHHyqyFNTMRV3Bq8SX1tg",
  "key34": "vyvwrkEfJGLfrwmKHUQd34cZV6BiSCYW7iRfyNR2tSWFN3QrVm9cajBcZbprtfW9YfCoJfBuofkG3CdschFMTvk",
  "key35": "4ZwFE4BaZ763dtVeRQt9AR4hRyQYcc9TSm6wuQWDRc8N6E9FZqbAV6eEJQZNXNmRXiQr9tijTgq7VkiFudD2RXTR",
  "key36": "3dZ57yM4ApY66YjrEasnNhbDif1cgbWGoTDQcV6ReTarZhDLAdLyvSoKiCqduzsg8VwMo5oRbLYQRefgwmjgE3b5",
  "key37": "3byBsuQH6rLs5BMQwYvjKDUu24CHsj9UKfzA2gxYB2R4u2pJdswoNei787cNAiWGswxMPWMG7pT8Be11mCwnxeRD",
  "key38": "3nENBkxhuUd8skdS8aVthrq9uHfSnVzuAvHaTZHhjgb39J6mf2hcS6NmxNo8e4VNYK1jZWagdPH81mkRRuSf7FLQ",
  "key39": "Tg6DFboLQbRhdwqKAjgkkBhiQ9w9SPMaqERCAxaGmCSnQ2cNLGWeNiNMN6gHYnobtJwncgudLxKbVXyrkxbhzes",
  "key40": "5en7H9M3L2pFAohFCnNzuMYMtk4NLcoq1NuyEtDFjFqNanwtd3nbXMZ9Yxkc631iFudP3eBocESFz3AwJvzd16mq",
  "key41": "3iYD93nxQER5TFaXexa8aAoZaP8xMpk1DtPjUAcuAH9nwf3y4R5Hewc3n52VQkR25VfVnWi1Hk2aGMb9y3fuUhD5",
  "key42": "3cMzmJKGZnBAQz7M9SzZop75iQJjzfiqHXnt4V1ASWEWfDw9CEmnEudSeMV8BcjuD374Qx9BLALSY2Q8yyTFS7vn",
  "key43": "2YPcPRKGttFxARShLuZgmFFeVQTqCpL1pPZ9qQrEDq1Pju5NtGgbCQJKvGUa86dfbYwmEd3NuNAMUXsTCUKLF7fL",
  "key44": "pBzi5ycuYPT7HUDvRiLd32bXkTjzpRWGcj4Qc4QNKXfvoyBKmAvtK97FGMjmufLyb5ctrDkqe2MbpkD2VXCYRCQ",
  "key45": "5sx7mbz1NJJd7yvuzm2xb9Kn1KNNthQHUy1WVJsaEN82wBZqK4isSHLSHFkfkjBdk3vfGuhtZsGvrB5VLb6NCbzj",
  "key46": "2PdKmhr875GoVeEzzqmysSoxqnTf5bntukmQTnmDA7S1UMxcirdfwm3TytZvBCcj23QbBDFBq77XfvP4AiySBr3q",
  "key47": "49kiCixAXAR1QTQueGgDoiuybAF2abHANSN1tPcmscRfhXitXYj3y6J1kjvxzun77hzJBPxxdhwf68a7SZNEz4Hf",
  "key48": "5PW81WQPPM5Z7hSLHvu2ZuRyot3TEpDHXLPpVdEdQwUuCDWLamAD4hQUFQsgiZBiKLseWHNFvSi6k4dQQNynZdnb",
  "key49": "4SnkhEEnYEdB9PYz7hm7kEiU2kqh6N67ApQtWMvwcrC4U7Rnx1PwSsSbM4GHPYiTRCKs4sZZG4ZyzENoiRNa9jrk"
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
