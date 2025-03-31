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
    "m5puSZh8P8sq1bHEJjZuZXqA69exqaeqgALuzxZGHQk2AeKJhCxHQV5U1uuvhShW2H2z3dbHA1w7apaLacSFt2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vapJsTTxUgCp31kArs7C4jypx4NrJexiPasbNLxGgFqsBitEfNBsLSyyyoZ5dN5S6njUkc3SfhJSw9ss9F8PrzS",
  "key1": "4zeGQo8LbPyeUBwjYvQFZxEfrvtpYSKPPFi9uMegFvjwL5gm9cUHMyrudgta67waUn1yGv7ov88qJYag8vVYMGmb",
  "key2": "4Dr7mAHo1JVieNpQ2DexQsCUBTHagDCj8Wp3BKQEFnw6Z1dTcnGcpHYEggERHBYoMFaC9Jf1efMgsjpmRpqQMAqQ",
  "key3": "2jJGsuNWHbSGGejf4aJsiu6FCUHEBq7kuqS4eQe74wyJvKsmQSRcrr5W9GpmZvhJ8zFG4bmWb3j7FR6gfXMSHuBN",
  "key4": "3kaBXsjgtfuzYfQGtXgcqpW7YXECrPNLCydXJM19yqLWsGmxbeZvtnRfeDk7DdVmt6EwMpucVFTxK1YqS6THY9Rw",
  "key5": "Ls3eurvKMDphNGDd7yLFqSfs12mM8s1BCqYagNMnGt6D6ff2bhikzquJRf5hv1yykqC3zoWiBMM2t7272q7zqUQ",
  "key6": "m6zfPLjBzDX5FYunRARa36ZTUW2Bq6aH8oZi9Lsgw6oE5rZXuhzTtMvqAA5wszasiHeGhc2jxPWmowFem2WGji6",
  "key7": "vWwD1dusNDH5xWwuzD8RXJbDmwzxsDYKpkji582b3v3watjzvtyceyMag2pXD12Ax98axRA9BJSxttembqi5zWV",
  "key8": "3sPxDVnRYmF7Yr3y8fRgSVfR4DvMdBt3oB3ktohKp3on4R6537ZtdEqqTnVvYqJ5iW5rTUPsFR2vkdtoRrxVzeMC",
  "key9": "zvh1fbz9AXXNo1PDvM2wrH9yXoqMVxsVaSRXR1P8B1ZHmkfCk7NmMf6NEe3w9uBiysHpZ3AVj4mJ6TTYEyCVqdM",
  "key10": "5tackKPxhFv6GEW2LQU99qfhM1kFG6S4s227bEyQQ7945ueRiHZAK24oeuqDqCrJpi8dbCo6hDH54y94ALu9eow7",
  "key11": "55EiLMi1p3KY8pnc1o8hMQDM88UGkeoVMpV7QtUsWg1DexV9zGg8Gyz3zReNzpD3STgWTzzRvqVM82tP8b8XqtGB",
  "key12": "5XP3Vaw3QNcrm1Dj54KMjVkGVRWKn3kF7qEHwVMNGRytqXhVwFFBN9sSf92Hdr2rbNT97MQ5rZaHQEYfomXmMxrU",
  "key13": "QvCsGwFFBJ2HtYZS9GpTf8kYSQYkiHFUMtgMN4YBPRjPhYGHWWCtRce8mtQviQ73bUKApik57RtK38MtXRycNd8",
  "key14": "3JAiwY9DgB7qDuJTjMYWdZGqXdgWXTxXSz2Lh26JmvMCrggQMttZKpCa4xh2EGWXNApaPCA3BSs3cDctZSZeLv23",
  "key15": "5geC1hfH4Zc8f45SPUNC5pXXuwae3BH1pr5CSXqwNb6UuWpypNjuxeic99E8kxuTsFasMB3apSzyUqJ6kRHqMwW4",
  "key16": "5LUee8Mcy9jEBtpi9LXdNcdzY9gK6dEq6prokTopAFWHhxoQNoAVgcd6KZmSawnPUSsaV4xUx4TJeEUSCFZKHidN",
  "key17": "7C5HLYSPYe5WF6qosss3DBJxQbTnbTJFdg53fwXUUtsXo1m3EBBqD3p23dCGkQ8fy4E9hnRyyU6EemF99DFnk6u",
  "key18": "2e4tnemuWz2r7yC9DoUcE4FSkxmiDJCwmU5RTcLqTqMPRoEq8G8Er1yer3G1pnv99L3Nhk52daKU7dPzwQv7ftfB",
  "key19": "62WUJs9Yrf9rtjvp1f2FtEoDPVDVfcBbEiARgSwGa8gkndwiNU8EMAtcKvniPy3Bwcvri3MDYPdZL2LaQd18D3Us",
  "key20": "5oov3VNzHZh7XW9tGCJ257H7QepEnCyhK5MmWg23dHeqCG1XxKbKFiuDALFwCC4E7wJo53oAxCG9wzA222yXS9Sj",
  "key21": "3xiA6gzZZWyKnRRv4ZsNeUCrJaebKfZjyHMN27ZeuJEGzTfE2goQ8ruaPyE2tTGgkiTUWMYoVSQRAXKfPnZuxkuu",
  "key22": "55gtvpS1fwxVEPV9UtQQoxD2ucK6fxjX7bPNhmfFkxGW19Wdcor1RfzbZph8ts8XCaEucxefuBBt6YytGDsgQEEe",
  "key23": "4b3QbQyySnr9Z9SJmSwfHiqijraXAkN8NVWr99bVCfik9NUG9wi4WCsQ3GUWsZNn1gzrXFbs2wTZcJjyJUpeL6QU",
  "key24": "4zKU8s9C4oX8VJbiTeFi9WTc45rb3BxTnfUVYMrPY5b5mYZ1qqh5bshvdPk5Qoo6DzqsxrczgGNQtE3qGhwqHW1A",
  "key25": "3WKY7AS5HbQn6cqhTRt6GARbh2FUfEyEivqoC7wNuTj6GtwMgWZU8eu7ofEpBw19pm6CGpbsmucjkDKS79wBBnFB",
  "key26": "3wiZgEMU1fKswbjRdnh1tRibK4PGd77yhmRBF79mYVr4cXmEPshK4ENB5qRX9PmeQ5LXdugScnBkZ9RyxCfENt5V",
  "key27": "4oBi4S9A3gkZaYmLLMHWNpjNcxAyNuW79P4G5Fcmuq13ziLJPUk46K4nEAwGLZsQ4DitiAK9ZnBskMHwVJ2mhFTF",
  "key28": "4XAfzjNrRzLoutGdd5n44MUFQWXcJzovYQeKDUF3CyovxXNiVWcF9Ttw7y1iVh8t91sHBMTdCwvQusnvdMnWetZj",
  "key29": "3MecNNvSFFNzgGBquip8qir37Ruz9FTN8KtwBTu5fNpxq8MAdqd3oef2EZciref5pC5xK6R6T8oPNnHn7A8NYMqz",
  "key30": "5xMWxLXdDvsLmC7NMAFc1DV85PNqPW6ENzN6cBqw8rqyor2m4FwEqf56n8MRyXVjywmiGZQ3RvdUvWxK1PwceKLt",
  "key31": "1LuBmM8kBn9NZd5SuYmTCLqoC8NN5zrbxm5n1mHHzN37z5169zcP62Rpypi4gAWQQoTh9skJRysqG8iegqzwuRZ",
  "key32": "3wj1CYgg5eHNAqDweGySf7oNjL5jWn8PHK3bYuqW4yi2ubBoYSsLoQcTjYNbVNb9pNudfhzgB8KwHgf3dyKNkaJr",
  "key33": "4DjjTmuKcUt9oPGiCEW99Ae5ZwkskQAGPM8Qn3WwgV2LQKooPNpKuAexXSsnixi4EHwMMUQucoTR7UKZdZP9LfHx",
  "key34": "sceAQ4NMWEw5skhjrLNACHy7fxR98C52vZpfhS7Zw45YWPx7LcYXDVkV3t6x4w9S2NTShpusUbv5rNcZoUb1nJv",
  "key35": "5vXCCaANByX7yjyorFmtPmSn1aqPugtJYbtDGwVDJKPygJYDDXMk894G7BkxpWrDBgQKpRUUHWicCwiyP2gXxmaQ",
  "key36": "2ABnesp15uvsCgMaBeW4k9eB38r1oAGvEo5qaiReLEfkvTdocNSiBUEdyK5LQZptPeQeghnXNM9GMCfuHF36mNe9",
  "key37": "3JeywSPoRM9kJNeUM6Wzv5J1EWcVXs72wqvagENJCHASwxhUDNx6vbnMU9CNCs8CpGagJyRZn3oc4R4wsReaz5XJ"
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
