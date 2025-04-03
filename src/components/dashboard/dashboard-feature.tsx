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
    "541XuZ3Bt162fQdWTt5z39Qo57L6Pv4LVxHXA11gFzHtZfyYULoHLVCXc1BbPGtzP315TsRRr5fNtnuNGze9gvB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gWGcZVzqNN7NkJhP7ji7ARzk2P67t9Yq8Sy8oKcq8RLB3Bzho9fCpCFMSVMNQfBRthVUmFtTaym1kq35fHC13dg",
  "key1": "ENPPNAcmqgmkYxAWhWLrJ9n9zwnaw1JySLTpVPM7GgVQe7LN4tKhvTiJTr66T5HL9HnWqxNdZ5ve9av2aDPBiXg",
  "key2": "2e27WKuxUaE7GXjGs1DvN4FELKjQi5GmxqdaULjCF4wY2ccPdYAm3d2ocBDV2oxmGiWSbaYQyQBxas5jCJ9TB2xQ",
  "key3": "3Xtync1km3g7Pi4euZy2BmWZngoAkCyFGeAERtuQzvew1Y1sGarLxc18ZhLVDUMU6AtjYKwLTyenpxA8uGpcYJwr",
  "key4": "zJUr9zAnXpcpt415MxAPUHK58qW37hNJzTQipiuvn1kMBKX58fMqZfRYM9xmMN9YNRMZ92DvSLVNUxTe9PEdYH9",
  "key5": "5UNAzSA8pm2aSQWUzveVRGoV4bALxcw7WuaYcA1xstgVhvU1XXxYbDZKxHcReHwiF46iMxVaCYZBNxwD7ZukmwCf",
  "key6": "59g5UzqqUCxyCKsinXHQb7CwUKVmZGasnp2WaLnnRsaS5sB8QVNA8LCxgmZCUTw6sLD7Lu4JbHWadt6b2cryJzuP",
  "key7": "4sjqksXh4uYZq8Ax7iVQvF2FahXg1qE4ofCGzzdaGFMhnpUGwBM9HdAm4xxwAg1nfDXrrEpmG5VxharbSim2zwJN",
  "key8": "66ah3e7QQDfgn2pmm9A3rCsSr5DSp8V3iNRQif1CkVYJJFjjQ1nAFKuEHCX2B6kwQSpNkgmPcG6rHMSQ1WAh3Up8",
  "key9": "3iJf83LQT58rvLcKLqgRJeTTjSWtW6Uq2HTLqFdroB3nNEKxirG5JXEqgQkpLidTeFA23556WJ7nLTnb6Lg7nEWZ",
  "key10": "47xw9VheqmdafxnRqNsWTDmG2DEbXvFrsTPaUvZ2iHg1GsZV8bhS4mAn2CnRNc18eeS7Ude7JnLsRJnfwBk3jVwP",
  "key11": "22hhD1pXqW2pn1zdNBC67vET4FDZcy3BCDSsbNvZTfgh21PGBMdYdTGhWFqr5gRjZh27GhPF628S3Yfo2nZtwc67",
  "key12": "4UsbSDCqNLNaEUq58KK2eATfozDo9EJuY7teBHB7unSu9Wn3xfp9zVf8PCQpMxuw8vJndVBDv6KWmxCbkTETZVYP",
  "key13": "5QCRt5QpH8f4d6Rx2K1tmwR6xMShGPcAtwRmGjzGCCqa6CkdNrA5cxxpdeigrqHZic2eVq8prgwYK652d7ZKeVFb",
  "key14": "mmAgwitMJaGaFV77rL3SeHbDXPHAZFgi2yvm9oKf3C2qypdeCoD2muoc62MdbLKTLuSQmEPQhkTdc4oow9X3K9M",
  "key15": "3rQ7pzPJYdXUedS5Qj4PyNzAE6emzSgkPUPwNFqdqAdvstvo7UHVKWpNPWktH8Y5CSfLeuLSWZfdgt1CJkqhCbME",
  "key16": "4L1DpJszZptnFfvkXfnof1oKo7VZmTAoRNSaeFPh8uRyMoBSzFfy8KyoFqskArVyEArKncKg5UFSfKd87uJ9XE9k",
  "key17": "2pGob4MxGnZeuND8w54wTmPMcrKAWEwfnpX2nHQJvbt6gyGaWS3x6ahbZk8C1Xe9eN9FP3juep3Vm63v1rgZBL1K",
  "key18": "3VqoBiyJH1s4Uy7jrNbd4KYaDEd2rMRBEgE52RJwuoNgdUfVqDieSAG8iEXAJCMh5LUdFWZPFKHzM4JqfdF4Voxg",
  "key19": "59Rkwvp9VuXxNFyZkCwjPe1mAvTQ31vFmAojrDg3dUnGATzTRK7TTKwArQZPvMMzv8FMnBcBkDWkiDwU63rn93M",
  "key20": "EeQpJbLQcVi6HbURRecHHoc8mu87ZCDnPVKSs7PWkXaTRjAxH2KfacXQtRtUUYtu9CitDVp6eywgMLgHaGPA12j",
  "key21": "2YgvDbmfFUFLoQuMixnuH4g7BEFVWrwvQT2YrsqGbndgM2BVNsKckfGSj2kZiPnop7LVuCSKfBbXiah733q2f4q2",
  "key22": "4pgGG3yZzm1Jv77p5hQeZTMF9FYU4J7eeR6L6JZLzv1MBbBzoNRh2C8spzoYWZ3B3HzSMMubYsJpNqdrzFV3nRNa",
  "key23": "3WHVvH2cfLe5TDp9Mc7ctFyQnXy3Ljsr8gaeLUJcMzstBWFNqy8VqSoKQHYdom9hNsLrKzzny7Cy2WB82AAwnowj",
  "key24": "2bcJLEFUSns3Unkzej313rc6ysbi94RDM889pxtfrjoUEmswKkKXVpXuCWYudDCAUzqBFV2qKZVoRb7Wkn73aaxb",
  "key25": "3SYAPa2LuRbM3HB1fWUP1F9bni9AoEbA5zqUuC5Mx4nSWK2p5ue2r3HBS6D6tfDKbUwzn3kiJMzFYqysa9FqtJGU",
  "key26": "UtJRWnixNr4ZuEfeAjPAan6TDRYHEgCGKJeww14UeY2jEUJtxrPtAd5wbodUsihh2VL3rxRD2wQ8VfQSo2VUKHm",
  "key27": "4pHxMvKTQxH14gQrUqvhdp2dPCFGhYmQB7LgHN4ESjJPmU9BWssECvawqXivCUJJiYk9hosyg2szsGs8uCR7yZVr",
  "key28": "2cVc7kUhM7YmvCVMmQt7yR2UjQUnfJGZRT9fLRSXyn6uXpqyBLvb2aJhXaa8SuqgiQQWZLui7kbaFyVuLjVWw7je",
  "key29": "zbC9JdmxgVRA6GmpntAqBUQ3ZaWeVozDk1w6FNxH2jSh2BAqTDJLnRU84QpcV4Zv9KNFueWGA1dTd1rF3BKbi9Z",
  "key30": "3V3kTtuCkENJtwQLpKPyTnDXBU3BBmLqxYgVmDxJo2arVRojbchn69SXQ35jQ9tjvg6ayoo1cpHauah1RNmKEzJa",
  "key31": "4eLTK5yCad3e7PWVBbZDMfB7Gu2ve5ZcgTXA6JdHib3uJSbs9txK64PnS5m5z8iKrttHija6f9JowWq9Cp62C7SJ",
  "key32": "4gqjefk9k4RFGXLev3TRaZDHegbzuM7FUvqQ6YMUjcHF784HwcLSuVK56t93j3CSbuHFzNnbeRAa5nCQapvpg3wW",
  "key33": "2FZMgGpP2zTvc2qrqj2QgHjoWDFC27U9NUih4oitxh4vkE2GfFFG9DwvUgwfo8YK3BZxTB9ymyD2s9XbKNuJJFMH",
  "key34": "5NP6eGJGBmqefYrF78QDjSJDQH9YJVtpWZJTnGnfqJrSHHq7J4bXfokLa7tQLdPNxKG6z6oY49TdcGcw2TBTmpkE",
  "key35": "3n5LpuoTqTkqsvR1nUvVxEqbu542xmtKx22S2RGSz2gMwmpHwiNynEEQhYcZTHXE351wb555TUmmpAmABzHVVQTP",
  "key36": "2jUARUvvHpw3KCYXkda3yvj19aFWYjiCJsaLM1X3cNVeVV8TzyiJEFRLtL1yNHV1poyzFUaz2Hkdzu63PSZUABhM",
  "key37": "32L1SLaJczsJEm6HLSV5auyFW2QYRApnqDWZYHTz3dtpNmQf3U4eQkx9JsZVntPnNorCMuREMSDT4rwdGsx6AYQA",
  "key38": "2Nfp18RRtKC2aJ3vQzGJmL4iyQm7Qs2DydzFZEeF7CXkJYYz45jpW6GZ4zBG7VHmCDnpcVU4QDWoV9N5eBgKB9uY",
  "key39": "4ZqxYtwRc4Pw1bcGsuchQzoHVcQGpUXHs7zxoxkcLXJDVSpFkvrwyAE5gBqpvDtWPR2QiDFazG9VkE7WkQMYMjpD",
  "key40": "3GKZtcrWVFecn8fPubo2NMUVEzXU26hSt9pUG6h1eww4oTiMG6zLVWe5PE6Dk6ofWQe1HNCeJ7SX9bqcBuFiipCq",
  "key41": "2hsRnkce1QDUsWWcdj2NTMgCevcwyDUuaYy9qTeZvQG6rE13qFRmjwFiXdVimJmcRuqjSuCrkcKXBMvMS78KTiX4",
  "key42": "KVLhs8dQeVW2V5t3VEAPgxdqF1TcQKKij5Xkj32SYy2u39uVgd8vqLa43ph8xca7SMBCWchefBhXev11qMe9pnF",
  "key43": "Aiyrm5bWiaHCcr2PBJ2XEmH2pwYYGbvLGRYqgRRP1zpTZd855e6V9Gw9sdZynp5Y7yV7e2yo14SmmMw9QUtZEdr",
  "key44": "2LapWuy5uGQ9AyDsWvCoehgf8uvW8MKF3hRBiVRuxLAbW26K1o7PWuwWA89aBk7JvjxLrZz2Msi3eak4RK8L3Vku",
  "key45": "2gWgZTrx7azdmrw8m8Z8PKV9rJne1MaovSBck1p5fDqaXDL9u2N4UpkncSxpYVs7KeTTqiNK9qQaCAKgXDNCWGfH",
  "key46": "D7UFKU6ys4NVxskrH4Fz6grgK3yFihEEzu7JaDazjJAvY94ywwRjHU9K4ZvGtji71ZUv2VdAfuZNqqTnWGSmku8"
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
