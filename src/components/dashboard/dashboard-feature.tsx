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
    "3JiUQ2gEgyS7V69h2W1SgEp6XwMePNzczjucgPJUZHcJM7TZAfTmSFysuJE3c3QY62h8kxvUY2xUbaxdHXCavJsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oF4HVzAzMCpcngx4Kmpj7oWqrRoi4th8q5ts6cQPfxeYpAmMqNNRMa2oR5MHg6tLyWrR5uDagXen1SPU5AaFvQy",
  "key1": "2gHGrYFe3c1ZxMajbtCMAtoykJNZhmgyHXuRfN3jNDojBtHZsE9mbmBpDq7TfreMwq9FXZKEhqhafL2KZNfYYfrD",
  "key2": "5vyULKzQrSpkFKrJsvYmwAbcuCnk32Cu26Dhn8vLuuNSHg955mUqkFVd8j1MwXQbHmoJ4ac8mNs7QvSGPD6iXRVb",
  "key3": "3Yd4mMAi6GZYAyHt8WSG2zpo73YsmuvXhH4rgz6JSa3mHNR2F5crpRifRfrVFAVzEBpqP1999VENVZrZodyBwtsz",
  "key4": "2WbfyjdGA5SX6mCy5QRojujUYYaQ8JsrVAiYH6rTUdTicXZFY1tmg3kF2JseKW73XrimWtgScPbZq51pT5LPpQTF",
  "key5": "4mUe7qZhEhgB5wrFrzkyYrKW4X2wGAQ5oUbQU2DxwHwr36KDUv4g3tbqKJkqoxcvcG5qsmjZbJJ978XCd24ffqtQ",
  "key6": "2FjfZup7kGyGTULpaUdXnhDvNvkzENFpLYB2C12nun1eHQm8hLXGdi5Riq63xdMctVzDrPRotcBiBCPGDXfSqeQs",
  "key7": "tLuK2RxvTjj5KmzrPBkp5e7qK2kExMDuBvNs4sWmP1bbx42fLzLGE7Dc3i2zgSJSd1E2zUH8pduHEehUXFrWjoD",
  "key8": "2nob4pW324aug5Q9FX7pwscaGqidiHfoXuXr3BX47tjLkpkSJGnWLWR26hwwanQiAAr4X5bjjrxniDpo7x23n7d1",
  "key9": "3zRdgkf6294umFE5QZRjcnJzpmf7ZhBwfgsFw4E8rRpodq9W9rHeTVah8o1PZSjgsNJpYX2vU4fo5uj9yGSsbiQN",
  "key10": "2b3vnbw6JG1wti3ZXWxoeHypVizm721jhM2YG82YSbz6ovGFA4dmUFEVE7VDB4dVM7PykvKHm9GCNXngxGUsnNoX",
  "key11": "4yBXxsLPfv31W5JwxvKFghe1jXCQRTLmUJtKZiiBtQtiHJPUqw8JjRwEboyAGrMaUtFoiWBmPaspVkLA114GFe3",
  "key12": "3S7HQ1mj43zTnWsBEGZ8n7xaX1k6GinwLq6VUXB3cGskycCADwts5XwA98C19KmgiftycByfH4cFUxqhddMVHr4g",
  "key13": "5A4xyqFRVRwu5MCTZ1v7Je9gGRZuiT6ARQxJidMUmx2u2WvFSYRyVatJYLhfc2WTrW6CpUZXki7r2GSFAScN2WLM",
  "key14": "2stWsDPJzG5s5uZoPMXdyCLVR5MgGF4p5r4jDe3QnrAsLP253U6aps7VX7hZKSqJV1VTAG6QWkSPpLmBGGLfhqwQ",
  "key15": "4qcndqQb2vkWKuZLyLrX6WQbaWiwN8hDKZ4qc9cfnchkE3KakbsaUQMt6So5FSBVMNBpysH7EtUVTgsM9Nngyupy",
  "key16": "4ZwAY9hfbCyqEN6YK1zY3hFkiCyFpUNm3vMJwuff4LCjyeYN1LBVGKWZgHDjcQHyX2E5tynx8NHMNtG3D78DrZWa",
  "key17": "4c6aX9PohY7PDNCrXNp7ipfbMpSf9ynmRiwHaLfPNkCQgv3SSPq2pLUiW5SwVJYrjA4tUs2fGxxi5Xyi3f5jqVp",
  "key18": "3HssqQqdAhuR9SmEumJXfVj9pnjW3GntAGDMNckp9N4j4C3QXgvcB6ULDxZXWhoaeEtiqoMC2Kf3vGrb4jxNQbxw",
  "key19": "3WC46uhXWzV5BCsN9Y6wyspbrwS74TaHmiGZ7NmrzWRfPcAto7Euf5UaDtg7y8YHrbivMpTT3sgU5dqMVJpQyfDS",
  "key20": "4YUAkeV796dp4a1DH3Qw1LkNp4zXMxjR1E5TYbCYGqBFY6kQugGBsdPURmw8RBg7V88BWCZQkEzGkGaxgRLTDBmg",
  "key21": "wgRTgh38p4CkVFaoBH1TZN7ykmqoAjSbunvgokijMnQrhUVFoPT4JtHc3hRqwMU6gbtceHVZ3Z2L5CFjsPhaf4S",
  "key22": "ZKHPBcTS4zaZTQutgFHgSMuanCwDYTKyhz6SJbLBVT9tvaSFxxHPXRzCvrgsHJ5nW7NEDFnojPV7ZW5coVnmzLX",
  "key23": "5y3KocBVzCTnN1FmytEXc9tfFFoY8vBxEhts5C8D5WQNDM4Z6VLb9Pdny1rvtHSFpx1CMrR7AjBVYnNkeESHfQbB",
  "key24": "4SdoGVpcHLAgL1DWSNX5arCBkkyHPyL6C9LtWArDhdHs3f4cPsEgSXNsY5bMN21HqzavFZPnw4gc4W3nwSF53Gu8",
  "key25": "Ckk6JgFjmkmusYLgDk3aBDRaEL925VvTj4c9QPonymESZuXVF8nx8zFhzWCugjvjeDDhHRCKzjdWTvf746ePATt",
  "key26": "37mv1JJ1wGCnsc8Vd583cAEVuzM6xNCR9WafZMRkTfdTNDfmqp9i6c2D3wWz53f7woBatFpCztJdouRZA7G6XpjJ",
  "key27": "VyqRGTNKvrMYx2BRR75TP2vqbvwXRhYU85A1TonCzM1pZ2t1NPgbAYGEJeKsbAnsNtuGHXeBFUX6HNRgN5ct14C",
  "key28": "2bMtuB24NzCLps4w5GGCnU6GZeEbocVZY3RWqTnZRjFRq7RLT7EL41ngaDA11USb5NV9BtRkJSB8wrFqk9nSY1Yi",
  "key29": "4qgH5X13pUeJ2w58Vcp8mnAZfL5YuEfL169YRseYAjXPhewTeTvFcjUhSTFNH1EEVJUnZ7hQYQCi6nL4MLAiUsug",
  "key30": "27EpNMfbhMq8jUaEgUZPwJ4HSVR8UvdVXEeYY4jn9u8H5dE9FLQzfZbgMLjKZfJ74ETnDznm9DHXSsaSGH3b9LoZ",
  "key31": "hET8LyTuvQzds6xC9XAc2Vefo9oSPw2yPjCGYR35jGL8X14RXhw8YmNfp9pw4s8FGpbmqR3tGLC94sfFd3SQSni",
  "key32": "3khzM2HyhhTPJCp1rBySNQ3CfHTAqnDifMhNVVj3tbmB3AZgVnii8TeqcpSWm3QQvviceV96YZ2niHzV7gAaxM2q",
  "key33": "4QjMxp6Ja9hVbQoavGitvXq5Rw8FT8oWHRkFixy7pYt1wduwkVhXs9HJ3Z7Su745W6PmP71n4DT7KGRhGbHiehiP",
  "key34": "5sqQqrSba14ofQZbFaNwgynm7nV8drozWK2ZTNz8w6xUe2PHV9Ba8RaNuxJBsd4d8QwNnJkR2S22oobfUMM2bwTp",
  "key35": "UZk1vAtC48hkiSTAA1iPFMhCv2gDpVS8WtkxCX1UpwZVWMUnWAcRG9L74naaSkMWfuamAEUvcrgxJwwHc3RyiLe",
  "key36": "2NkXrVvKxeTQRJHFXKnWFp58GBujGYhMQQwQpq4phNyngSeGZQS7vb1ybXG9z4mD1BVwvASkb1W3YaKLaey9A7eb",
  "key37": "5USCZJnm69gmjtFnZdjT4weDNLxhLp4je2Pts1BruBBpGETDPBGeuqvx6fRyTygJYfcdzsSE1tvyu5dK4QviPAdX",
  "key38": "5F243v1ETQrpBFyCYycBffZPUPF79qRJjbZ6xNekx9iRTwKPTWHKEpqLijhZHFrwyBd8nKX1shvU8A4pvP9f16FF",
  "key39": "31Vw6hEDzLA4PBT7SiPTg7xnggEPnJcYJM7GoeykF9cWFPjb1aTep1qe6x6fLR9DKGSTNMCKoqaHoSHqzvhun17e",
  "key40": "5mUAhmA3ioybeCs9ioHj8py9VDvFt3qvfU6xYTJWMWAx3Z6rxqbpkFYcQdJ6wmAUh6LDg5dBHovR9kXxWpWZg29Z",
  "key41": "3bE1cpq1e832GjMR1mt582Kp7mFpDSUbDrfY7iDBrsmbJjNLidR7UcYXiVeFgS4BoaCL5eJKvB1XbnYZS6h7iXJh",
  "key42": "MVSd3XoewuAtcA9LS9yXqe1YsRToka1E6hMRV38CvTtYhSPXbBMDyyydnJL28j29mJZ6j2Aa1W88gUoZM3uQaCj",
  "key43": "44rdmzSJMtDWCLrH4SvF3B8h3ouSwy8NANYpHgRAYwm6h433FH41hhx42vtv8NgT71M75LR8Gi2YgiM1mHiTavVm",
  "key44": "5W6zNy9ZUNT5B688e1WnrBno35nNPUY3bnLgai1dViXRE2hdhM91REDtoLxmoWkAtugkKedKLuQ6aK1mGwRnhFjL",
  "key45": "3RiczKYjiQsJduHAWwcgPsogfum8CUeegCpsHgjdomGzX36MyhPnFEbyKgWKX14UDJ5ffgSRVsNyKR2W3YxNm4gY",
  "key46": "sBiYsBuDNYAjPFcRadVNhUoADqNeQdungLWSYdfoMeEZJESpqTn2iWxQ4VpKd4Z8mmML89HY613yBzYKGzG2rWr"
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
