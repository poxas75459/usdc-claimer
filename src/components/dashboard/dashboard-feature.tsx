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
    "5SLAJd9gWErmkgCP6e2ubtZBK2iaqwdEW4URfV92eah5RK294zTBgRETqAiEmQ8ToH6PwvtVMkzMeiEpefyabh1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZxyVS8puZGNJTyZTgYjrVbQmmtUx7aPkW2ZVAqSHPrxmMRZhSDwQDNBorZCSZTc5o8s5yPdE1Bi6ZfY1snNih3i",
  "key1": "4w6JTd5A1gY7a2rGMw8D3jQgVdsQ3iyJVLAz3nPWCDKhkiCHxdBTEBYgb6ngryh3pFKNKG7CaJbrRbViEGuf16ud",
  "key2": "38jZBq657faKD5ydJ4byzEsHDWiCZWrXjsFuWoKdgcA3ugYKtwgZMEB3k5ySYsgqWU6x4oRZNP5rEBc4GqgjuqEo",
  "key3": "5kML9H346nRRZpkEeCMbCuNeHhQDJxU4i42FtdLXWCWRsYZfjC5FhUtomjndSzKotX8qSMvf8jz3tjvE5WF2Wuv3",
  "key4": "66DnsPNTVr2459XKMCo2NPiRZjYTboBwAKmca5BqaYzhsb2CMzkTVzRqotzR3QubmfQnvAuU8jBx5XE8DUcQfPh2",
  "key5": "aPDnNBE3hqHcXPgPQfRCEXkgieAjGs1YMKCcoxtg2kehy2YuiTkuymPDbadXapCBu7bZ6C3MDHnioPsTYaZkJ2f",
  "key6": "47kiLb8QBwJ2M1GPbw9m7tuHMsHaSjHYHTGhfcVmzc1T9nnt8JNyJQ6qVBWsVzHRES1E5PCdGFBnz7PLHTh7tphH",
  "key7": "dJEEpA44qY2EuyMMPnLMZc1VdtPmCYWVTU7qmMvEgKQbuS3BxdsPuZ5JtBx7VHfzieTBRSRpn1P8YEhvjYzrEQw",
  "key8": "UGNcgCcoP9Gfd1kHakDFHSr7BrnAA73EYVfLmYwbF1Gn4dmZ7Bzy2K7czMiu4HG8wkZwxTRELAPotVA6ymQrEQ8",
  "key9": "5JRCvve4K8fShP6PjSrJMwUYNnXYLwbXHTSqgywFi5szrTdRynsATieS5PbhigmkHWSGduSq53Xz5GcMUk7SjGQr",
  "key10": "M121pUCJwfjEymHMSa7pCmNHgJQX33NhiJpDRh3PhPx9nrE8iRbSsB2doZAVgUAF4nyRj5daCZVPzF3Xmssnnoz",
  "key11": "4uFSt7UsF1b7Mgdo2KPVC4G2PkksTcjdraG6dVNiJWxxRd1Vv282tQQoebrBchGRy5dNymYnHhskyqg6MB9YZdon",
  "key12": "5Ay5Y1QabMo9knrK2uiLik4S2rxPhfK1CjDaDfHXdgiugx13eZFinEY9CWoNWuYT1ewsv62EyUFXRXs4m7EYAZeN",
  "key13": "Nn2NbgjBk3aLGVdHUEB13ex1JkXNZSivqqoLLoh3nWFiubDiQZ6pWzF7of3yPYfDrFDeihPmQAktC4gK5zyjAQE",
  "key14": "627tZJxhM9R6T7JEVFvZTPoUNGoeoUXe9qs4xNqgMLo5yF5jQ5ryV9xMoNnyKNUHVAc7KLuzBBkRoweh2jxsmHNn",
  "key15": "D6ss8MNwLnbe74NX5E72LVTExZpcz2Qv8URChS1zccGF3z6amRCE4LVL1HtMnqCDi4jZeMaSvhet6mGzoaDFVcg",
  "key16": "4cXAfKbaQYwkwVDFwG6Qh83Xh54oDh3qMoH9tKiV3E4nHgHoWXYHA5n2eEjTQTMzPKr2aGWRXx7eobjbeijSBfxS",
  "key17": "2LGx9XfgAT5w4brKSd4r7eMHu7PgkmkFiLuSHJ8Ks7k2T5G7TNUZtXTTKMSW2gBLQtjCQhFxD5morRjSQgYwNNvq",
  "key18": "3ZTTTq41UsWEKf9RqhTDTuGp1QjgpzqCn56z7SRC3aBzs4yjNMKLKE6HWt4QWXo4msLaiLFApNALt9hgB2J3HHim",
  "key19": "T13BPyqkNQrs4dK9rpAqVTm1o3joARvDxYXeWXT3teJg5eYwStY3NBNGofS5jcS3EWPR31iyiQ33ht8AzpWdmox",
  "key20": "tz7H2KBaqTCsYdHD8vDvSo4xhNj5z9sSBmfPsxJXi9BkbfjLcmsLmPU7pxrbWbDpZthxVpNxsM6EgR4zqLW8sj4",
  "key21": "2Ftz1PPc9wgqmgWbju4PZfAv4aDTmy91MGRYUNoi8CH6nCbfvyKgwrwaucFDHfrmwzrHDtgpAN733Zq6vWRrfvjY",
  "key22": "2vCTzU1waZxWGq7pzp1VYGBwzB6uTXgS7i6XjibTN4NY5kK8ARs16sGXQ8AnmQK1FrQXuBZDTg1YsF4ArEPymMaL",
  "key23": "3ar1DEnZuxAWB54yyJ7i26aa3EAHYsLgQQkEsVnxMT43EV24ZgyD9yKmHq8sVBkAzuJyQrTEthp9HjU5JbqWpCCr",
  "key24": "3aqmkWFgS5VsnoWwVUNQE9z4tVW3NepHGfwcYbq2knZ1CukDSRnfzBZ6GodkLCeuhLq4Bm8DtpSKmi4cNRrHqg4h",
  "key25": "4A42ExfBfSb8RqmKEuUPVWeKiBUPpJsvBKhPb1jj3UjiqeRxDbQjjCEdB4xpX8zofNuaVZXE5biCwq4UEmm6GbHA",
  "key26": "2GUQzqfsXNRF87oAW9DhzGWqee9inC3ueNXzpnyLBQWvcrrHk7JNMEhpXhnUduKaBrc6qAjxTAQneYgvSx5jKcmb",
  "key27": "nPqs42qBXtqXgiuinkFYYig8jvfPnDaconm5CMqLrTu8EhBG9dDXjSpps8PKr46Q7cTcRnTb6RhrSR7cnuvRM6D",
  "key28": "3mBa55ezp56VcCoUhuA8NZ2qtku1DMitUwuR6CUHfThn4YkGgNDcuosHivyD6F6qE4vzR5Aoigrz5w6TFnxSsqik",
  "key29": "4Yi5PrSQ9nBSA7C8A7KkUsNkJtPVEjCEcsZbBRWbnGCBydKNkEeopqvBzExZXXrvXG9QAsaRfF8dihhpZhg2f9TB",
  "key30": "42jE7rAMxcZKjQ8bXupSxpn38iwJNQBaGDGoyn4nSBPFssv5JgnjURU9nB1h6z95vXbrMGVNnGLGAXGsRfRSUck5",
  "key31": "3zfLyjroJjMsVkB6nrJ7BxWM1DS7pF5xC294PDwRPg2FFUxMz8xFaVPDWWJvie9QDpfiEktLn4tzRivV2Y2e7EBq",
  "key32": "4gAeD9MPqCxdyp6kzgupaBorSM19hXwKbqoekNYKicswY9jLu8VmxKjAWB4PLgEqfkBFv9esYG7UyW2dnpVwnRzu",
  "key33": "4hGybLkKiXESdcsK6g4z5AKaUHFDiLGvsDXZLoZQr4PsJHvuHSWfpXkWBMLAnpv8a51FJHGmWcWSFFEoFxNH4q8u",
  "key34": "51CpvdGHvFVPu3AyU1QX1m1rZwP5JLFKDCpvN244XqqyfRsYefyqm6hkCkM1Xoqvzk9uWdR5QUNGr5QcxqqxBDU3",
  "key35": "5zBTRcJFTtDiDMAJuKHYRyXWSYWEz5QE23U9F9T8iBHgKsNBMSH4TNAZt2JPVQVBxvi9Z8ZsTqxJmXJ6KGG1XpYe",
  "key36": "39VrPwYzhbKwj7Pg5yjjpzuxC1p8mz4DhsTHmLNoMTqzSDvnSRGByV4JEjoGgajAiXA8KyJXErjpvu3nbpKuW1SF",
  "key37": "4f7CUXs54ZAPFgGZgTpjuETS95sVmWAquTRVRMcxFYkxY97CGYvYQkMVmoXEjn2hQJwgdfjd4cnszyhYxdjbyQcR",
  "key38": "3zhG1KgsyCiUFTvkNV44i5caaib4Ycbn2CvE6oBNiHbRaiFWYgheb4K43dPGMavQhaxEMvon3Jc9PzM8cHMHRUA6",
  "key39": "5mXJERgUD4fQvBajcMbfk4VaCJbb6AYKm4zGzqh4G1arP6pW5oMnAcgGsL6YbYr6NUhehxVvmQVZNjNd648Pdqt1",
  "key40": "3iGYcZz4Cx3ydkeU4qbwvo8VA9mzxM94mivdTdQhtPFeWV1Uy7wt1qXoGopwVTaGdhTBjMHHn5TSHtNQFUuQ7wj2",
  "key41": "2tw25ak76Sme1u42bsuDtHmwTruCsSc4WGJmaPFc2y6zxnnfSLjQtuHr9TTNA5ZhQPcdpWNWguf9az97MYC6qhdk",
  "key42": "2j5Moxz4WtaScHrFZVXtKyVGNqTPyTQEqE3cPbanG1W8d6PYT3mb2Yy5Ej2gYaSMiTYQvkrGCZ5GMymzSimriJGs",
  "key43": "mnLj5XE73phFWz1DqrEWDdSm1ri7KhH8t8WNjmEHES9hYtheRT2T57XaBf5ES2Ux2ucWSwqaf2sZAZc9m8SVfRd",
  "key44": "3e9SoyGP8VCejwPPtRKMskjMpMb7nPt2WpqpqypZLNUASP946kWLg417jAV4D8H2gSpwLd1qoM6WDJSeTNZHzDMB",
  "key45": "vLku44ZYaoiz6PbaEYLwwHet5KwYJEDWLA5zjSFEBdfeZo4MqEYcywyQ8wkDUX6QqaMSfp14LCYnsxxiWoac13Z",
  "key46": "4t7bdtdJ63wm21cp9NCV2Ux9SknaH6m3MArTDn6QWuyCuCq3EZeuiXqV3GznJe5cdd1RLswhASM3K6rNZrLp75UL",
  "key47": "kMEUB83k1Upnd5JWq5HAvmc5TrbHwcrKZuft23pbH2qXg3STfnkucp9gLzfaLGYNVMW2RAsQ5JYSbk5r9t9A3a4",
  "key48": "4ZWmCp5CwmguzC888qQYTbHRrPG52UEJQ2TLTiEUTUrjKk629V9aiRo5TubD4JdZ76R9jRn8f12nFXo47EEQF64G",
  "key49": "4NcLFw5mGdhTDBKTCyiA1W5jDVFBvsq9JRT6fXQjCxMB2yv2P3eUivDsgJP3S7AD5FhZfgxemuatBM5tUASrV7fB"
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
