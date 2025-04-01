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
    "2SrWo4aanoCPWBiWinHWB9RCar9BBucVoyoUNtteFkkFM4LDxe2p94Socr5mmVdFBZt8nNcTURfTeHovNpeQoGtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cn3Bhv6onM5YGVHaQTTr5Ko5jRUXVJ6qLcFWs89wBM4W5vhQGiRkvxazuKiZhQqmRQbgiXPkzJ6MX4yFfEKBurV",
  "key1": "5Sa8ysJEuf78DGxcT9ByqogTZvQB7xCSrtUg9ce8iVFGbQ28N61YZUjWLWjWAWFDtPVGKXnPQyTFv1GrawUwfiXJ",
  "key2": "3oGqiQNXeQ9dMfcMv57iQPJ5Da5Q7ZBLybP5ANQToHZgDrkVMNnC4pKuRA1oD4dur4j1sacgyZwUmA9jD6anpuij",
  "key3": "2BWXbd3dP13KxZTWfEdTJM1kQucRc3EHxwvT5NQEYDEXsn8eYDHkA7Hhqob3rWwg9DqfLxhnusYQ6KHpa52wHFg5",
  "key4": "3jJeD1ZuXyNdJ5SeYJthqKgHoZ8ZQ9qmuhhfkHLVKTdthQACVfYoZhqvmW4ifi7iuWu3aEeHRGULtP1EoGySBDd2",
  "key5": "5CKCz8BuqhFHU5QiRHXXKSrvc9Bgyx8L8sDHvf6heEBPAA17Wzhq1rzbEqZWK14ah3C4LqU2rbFwUDSDxa5xrJ81",
  "key6": "2aa3VwDx3Hgb8ZbzkigLLNo4R3kKuUyDmuzAHvytbLvbJFjS1VkPyikTvMRAYsQmjygBfHaEzU6MSTp5GZ7yXg7P",
  "key7": "4oQFEuYpsXAcAt1QyLUXvaDgfoLB6dbQdjMa9JPpdno4eBST5ANyBX6se9KohwSTrqqT6bephHXeMW2pUb9ZwER6",
  "key8": "553XMmete2HsPs7KUd4jxyHzVxYYyc32uKgo8kdjFw3v8pGZi369Gjv1xGRewtZEE8V3LugksHRyFMkPUdoev7Po",
  "key9": "2E273DX6d4LEkW7wboG3kCQdtamEsuKNzn81NXGd4xSYyEGZUviZnqHHJDBymAWp166a7XtPaGAK3d1EtPZnb9Dr",
  "key10": "5sgcS2DSEGJK5YK86GpDcJEjZH35rvDoY7jvK4ovxTaV8BwXY5qNZFXpBkbvyzYLU3gZGFMXGdBiomkqfEgL2faS",
  "key11": "4QZwbEMqX9zAWY3aDvMMiZQZ6JG8oT1c6GiyAsFFRKXtb8kP34LSktun223N33799A438UttnsDCUhRP6W21iVjX",
  "key12": "5Et5XkfPWo3xcf4Jf3myB9E7zxvBbc7exsmc1na9UyUaPXLfxbvPNV2cEQNqdW5tZN66HC7dhXC6bLpFNDkqrMcK",
  "key13": "GQG9ddV1rzfypv7KzEZgiS2bZ8nDHUE1aYd2RHibdpNV9xGQ9RxwpagA4hMjYps2gDCkwsoMUqwvPGSFrmpkjNV",
  "key14": "3JxBqMf7Y6tjLqVKUAk9HgBKJDGaZG9WSqAHvBYPvXjRaTsVcBznMdc1wJww2wuWYE37aUDXh6nQhZnDC1Vzhbxo",
  "key15": "2NU3fxu38ntW94fpo3tEzxiRSY1agSrMY8NpvkSdjFj5i2DiQLxifeQUcELJTBdLfrj2HDhdZdyFQPEfbM3dpH2Y",
  "key16": "3XT41UqJvK9xALRJ83zMwfeucfp9PR946Hhj4cqPXBn46JQr1E2urP81MGya4jyCJNpP3taDuKqvp6pkJqkGmbGr",
  "key17": "2AmULWLyewE8uQLBkwSUw37rBCwrV425mT93saazaRqSV8hXFS2huLuTvZTuAmKUEn8oYkjGuEn6ftNWBPRhTXGi",
  "key18": "5CF4GgdcWKNJwCyUC1e6MFCzpjRvvzk4HpkTw8ye7sraKDV5fYmAaTVcdgGmPaT8Q8QHG3LtdBSbHMCqeAG61YME",
  "key19": "5Hd5PD5SwXvGNXzMQe8gQZ71wPk4TSQHPoLcRxKRWYjbXiT3PBrDa5XQpEEjzQepjiVCmUUYy6wJjBTiVRDv8pen",
  "key20": "2CYpgf64QDDMGbwKk2buTmB2AqmigRnqnq2anSsnjLsYeoFaJn7tEzLpL5EF5Du9sdByKDQ4z6g9t4cnhCaYU7nU",
  "key21": "3nR5Qnh4M5Qs2fG8DSF2L4czuMNkAoc8j2HWubbPHVWNRN6kxqrkLNtnxwcx9VL9nDrSAkdvyRHRfDnEKJkKkaaY",
  "key22": "412iuL6wasS1Gmi7Ybo6TRYRipKNUAHZUdhC8nZNPps2RiRyWEzagj6wsZYj36ryxZw6pv8mkS7b1dpmHgBs5L8F",
  "key23": "5omTP5FPFKV9cjZZevkD4o45X6XSir9dGDfzXm6c1x2WruxBGkkpdZy6SnnFsM7N6BntACjCYDzzdRN6tpjtCaZz",
  "key24": "47SQFz8Emr2uS3qZZ51i7zPjxDFpMgx8tYtU3WX2RMfY47BNHVYRb2aBWNgRQYzJGjZjKu3ytpJDjMKYdZTHESci",
  "key25": "5V5cz6PSWGV28PidE2L7qFjTjCz1snDdqtMHMKwAqkHbfynstas243iyboy8ksRpGGC3VwiSK7CEt7DEHva1rWcC",
  "key26": "5kthTjwRiPiG7DSJbo8c1af4M4Td3YgRF3pv8gn11f1CzHCyzgKQEePsYmVrd8zjjyF1jSrA4eCrnvuAXMyTwtTh",
  "key27": "4L3CzxWbR5GuXC2LjkQL12sBj2oe5sve8LB1uY8jhhk9qBrGGYYhrza6Z94GHr6zsRv7KYpCFsKu2cj1op3FdFei",
  "key28": "57MjHf4e2EpDQ151gNHeK1A97k1mnjzFcCQRqmTgDBdY8R53RsP3wfVYdxeev7dEcrYsrUHkqRiBfy5nX5VEQCuT",
  "key29": "5D5KvxYMeabeybqS8rUSfgdhSo8bLXKizTwAacqDjVouP26qyy8fZM3SWUaKFpLAXfvfdfhWuhkhqCq6seTmrBe5",
  "key30": "5fsamcycYXGvDjJYcAYyygEN4Gsy5DEbdDmvcudpmoXg57HcnAzYGKtCoJAMG9NJ5zQsthyYmxZhf8bREzuZYdSU",
  "key31": "4G5A1Nox7d762TACmQuMvYNdXyMKp2tVaQsqT6wRcyEmGSRTQzLjL9pxpCAiisq9NN4C3eyS3JkB8aAg3vwDyjKV",
  "key32": "5ASa5YRcgj2tHF8Km1B6Kz7Zha1vAeJYmzVV9Qwa6LCnee17nCUUF81ESVmnNeD4FSqUgpYBErFDwJ6pfkUbzsag",
  "key33": "3w4HVQQUUcE3pb3pbSG7FcBWXjmVzqCVWc94UjrRVXxksBaj3w5ZH9H2xgCwqW783ZcULKEuD3shvazPbmyz3Jzb",
  "key34": "4wEvRQHh9aGnU3dHmiqJgYoTDzgb3e98gpi7Z4ryhpLvyp544kNDcpEapxxVpBPSiFJQye7EeFCS1orFbShnxEc9",
  "key35": "21g6zv8uxU6hRHbLsbQeytcSxs82QwRBaUq3qwb8xRDFjWmmKK6bAMXMeuvPaPnYEWtJqr2yng5Hbwutf1i79Mi2",
  "key36": "9PBxnxrVgh3hZhtobHe7DKcBHqHefWdmFuGJ5CUWvCbZkRKC3gpE4byNkwccfyuN57qBHt6WY2NA1RnM7pFYbkm",
  "key37": "5B1ifZQXpEWYmHXYYFEKqzGwb3ZJc1vw9RL1gMAtQgVywtKDbiw3GBRDuR4w57gtvZmoXTHSRzZWo9x1rXEJ9DSm",
  "key38": "m9FDcr2qi53FJ2eucbS5j33Ner3YqrPG8GztuFYtXF1nj8g6wLez4Quo2PaVTb84scq22kktmJEpp48pdy2JssB",
  "key39": "ypjhURq3YgLMNUtp2XVEJ3WtcwQsBSXpixBsWPMPiPdC13q5gUguvpjQd5oBFTz8RFetWLACmFZNerDcg4kwJcL",
  "key40": "32uYYbxX4ad3MQef67rnKwuaSZo1gWSb9WXyLqhtYjjs6k9DkTSzhr6xVmrFTLxVnBuw6vLChAW6F93UVhw7RAKL",
  "key41": "2Eyyt1LcEK3EM2R1DjWHnCCvYT9nndZkkrNp5mPJZ7jKgJpMHMepkqimh9tCLfNtKbh52QNhrByJgqQ6HHw3bUft",
  "key42": "Ufk5RQnKtQdpyzmzYMvBNqUWSTVzWwT2i6hGmkP8HBw2gFxzLrdR3DQNZWdWxafE7rL5miUgpvJQeF1XnDqmEbL",
  "key43": "4veE7vR9g82uw2BPMM6L9j4ophKuXN9jF1C4BzebMxM1HXvRKSKdpmgBjrRWia35Uy4aqpQV6CSi8m3wiWBeHqj8",
  "key44": "3UKHzqmTajQ2Luu8kmLtk5LXU4tJkbka1faD6sEhoaPXk1Nb6UG7bJW1hJAeJq9DdQXGnVJMoSWLxkbKXL1nfnnT",
  "key45": "5cpR4DyhbjUAdYrX9atTyQz594ZTGN1Hdt7hG6QHxgyhTWrp47X6XgsT8tWCy2R1TmhJSsKaUHmVerjvHwyx1Y7c",
  "key46": "wuBP98kZswLENP8ekTJep6jVbJrAAQc9eHFGgSXwBzfi5rrRzMwfJL9Kz4HDBUJ4sxXHpKZpi9ujYCPTfMbBa3y"
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
