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
    "4baGTRENYYLmge8rjjwWb2pq5pcNuKrJNtueNTxVnvPWZ2CcmhBeiL19UMvLqJh95z5UANdN9nFTnwEbKpbGuyzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AfLf1Qzvjo6kq7YCoAyZM4iFKUZX6nqQR9aCtUVTbFJLuSoWfhqdfym47vSdGLWoX1gJkFhmXaCFsL9Xj188kG1",
  "key1": "AZoHQ8akr8PVadnFuv9YyDX3xJVbzwmeXqFLRitFvQRwFjDsXzBQA7cZ5ZEjm5FzuV6AESdb27dDFhPCTzmr2GK",
  "key2": "4pquPpKjfwJZUtRVuNHdVTNjMqLi1eV3zb8euhxQo3o6JhzhjYo7WhkuR5SMD8CUnsyZ2zNNX5gXxpVvzG5pDWu4",
  "key3": "2wP3phU7Nk7QfpLR9EF8WuEytTafybGsg7P1Y6nesDyEVykNcjzqQM7KTgwenhYGuNMwZKBVbxCwUWh1ogJ4nTDD",
  "key4": "2e1nAiDBaMkZc3C5ScZ6yohuHdmXRkAQwCQBQ6Wm9Sao7FP93VgKpZGrsTt8qjX8AiXqe6t9Lz7NtCjwXFfj222Z",
  "key5": "5KREdHPRACH7dUntEsLvAN1Wp8gBBS6VcAiX9XgGSeUnmWKQkqEcFaFhBbV8hL6Zrawz8CxdJLE6DBP6wpMa6bQi",
  "key6": "4Y3ZRpe5JVXBMhp9EksFpUGdvYfEcX7DNGEvJexo3jiFeu1q37DDeAsXxGZQzpDjKdLGKB2y571ExVm9eo2qxcvp",
  "key7": "VjbxGYye8Djqi5YWZaVavKCbEc51BDXAGgnEqsGJnPsTZyVLge5xddQ5RGbVUVnxbXqWXt85P5MmtFSgSsNNC4b",
  "key8": "4Hx4Yhha919dCeni7rhwTeYUzJamULsNMXZz9iiM5zLpiDepEEN8xd5gzGx1eSsqHUsGGVBTF1rtprgbDE29g817",
  "key9": "5vY2xFV6kspzVwvhb3WTGernmvare1pWVJESuUvNKijEtXpBrLwudTSLEMZgpQbqXeZNLMd9H5P3NsYBt727YbBi",
  "key10": "4HtwMY88G7U7CHDBWECe82qx4jqfk8oMLZpKbJTsD3x2Zh4UewQpPKSK5ZUeUCZ4Y67Bhd5t8adtKJ8iMEziUtY5",
  "key11": "51eHqdcEz5yzVB4SL4n9M7H1xQCuCZFnMx1AqZ2K3EQzdzq3AqeHL2LqpxQDZ894cZZLBpVVNE7czQm5AiB792KV",
  "key12": "3MjNkVejApXYbP1cw7EN72eJSeZpWmaYMFj2jA1ktd9VC3CmmDyeCNSaeD2zqKsatKWhtxndeTKkeqAoQPktBqsV",
  "key13": "5SjidAyoHr1iKswdzZ674o8hTzLPuvRDCNXRGzksHcpY5X1cFgCWbuJmfAUb6CQmLydE4n1jwYjh5XzwCsthFmfv",
  "key14": "3easEVSVaApHMxA8DjpQZoQ6oHjWLHN52TL6ox4iTVmznRKKPXXRrG5SxEudunqzwhrjHPobj9NGq9euFPNvXqM",
  "key15": "kREzpzQn8xwRa6SHY8QnTUUrJm7xSawoWdXdUXHjCrPCdYaYhaoa8KgYyuuMmZh27a8N318LWnSB7FLxUD4eH1f",
  "key16": "5U6Wr15FuoFgTCQfJp6bUZLUcFuQqcEbPaXgZF7BU2sVYFMLrLaobsrgVJNNJ7bQXy3b1uY1xrEaLhV9qWGtgNhQ",
  "key17": "5aDPdLSapARDL335Xp4ZQDiRBNd1UVmdjmcA2qSQJNKG7ABx6YojWbUdCNK4aou3yjzGdqD5AYjLDqRkuk7J8FdS",
  "key18": "52W1p1srzNA2wNsmRexJj1vSaCsmg9JEsKHELTt5hNCJ8N7pzZX4n4NFNz5wArKPBHAbS9pPv6CBoxxhnHi2Ftyr",
  "key19": "nZKAV7o8TDCNVpKkEYxZeoACCUTGK6VZQKwAA6PK4eBQsN34XGAxLwgPcxNmfgHFTB6uokVc9otnEkyCEjErZM8",
  "key20": "31LXuw1pkbEC4HtCfMBPPc5ZKzTQdt5mUTAgS1dAxKXRYGUj5Pj8uJr1NG3BCfQJZHULCPip8VKhxokRaLXKqNDW",
  "key21": "4hHBpW89nytdALwbFaHZ9kHFyszKLprqBqNGYcHApo8CqpyvhoeCLyAJahoFaoZbrvBtsma3TYM5kV9fdnUUgVv",
  "key22": "5dzUYmCXANi2gctntXdcSsPpLTpH9Y8eMc9RFbQnwtG7AfGL3fAT8K5b1NtKEiGve4NPiwFWn8DMRg4fx4ACkDqu",
  "key23": "1n8yzjR97oyZuatudYrAvDZ7STYxtCt3f3HucJv9xWLaxMqDnbsNbiHWfpuCVZhFuBVSVqrwL6jRKTn83F2Mn9K",
  "key24": "5LUAhFW23oJ6ypSLVFd3z57RBiFi91Bvewz69URFsoBqsgJrZ9hxZTymLyLxx4trc6i5cbtXLywWmqRxUD2Xd8Mr",
  "key25": "4T2Xo1grgkQh2BrwVFgch3zwJyBBHVdxUFDrW13mx23h9DDCZZTUtn4RjdKbAua7mTs7Hpn9obbW4o2PxjUfLVQo",
  "key26": "37xP2CDm5GrDmUEwB8ubw29yQJ48kpg5C315UgNjkmYnmA2esd42uQ3CSqz3PDvHXtgAUVWd7cgKEGqxCteKBL4t",
  "key27": "59dvtQ5TGJoVXrsFrNFfKrdRzbpGXHVUyMmw9BsE39VJ2jpeQ8YVk2wGD27T515K7XswARp3sJRitQZwsc9mZgGx",
  "key28": "3PiNNHLRUDTKqncmw9ztxpXfomxE8JzUbJJs9VnKMMkigeViJoehpzFFqXkEHcHE53ArTeWZW9exm7GG1UhsNkcj",
  "key29": "LmZ9hCmS5QSUZTVQZWdJB3rVy69C6LSSmqpFtteZDkHxh2dFGRJCKFv5MEkSaGUtSoTTFuujeNX6ABDLcZMWG5c",
  "key30": "2HHoLvetizZmPPwUMHXbuLhpXD5JgDcdc7gNLpdXD3vqYjqz2ZK3TC9jUqcNf3aPTdTdJ8b7tmxbLk337xiNZ1Dc",
  "key31": "4DXYj27z1APqr7pva4eyY5bJCfkJ5aufnenqtHmPxpUzuwtJqNwuNskNcLNQje8hqxs5SPx7dE59YBstoEJ3BdtB",
  "key32": "5LxSTkBPZt92oWxniZAbo6Cfuy7kdWFbfcjrpx8HqFtt89rVXegcwBy16nfKNjmykvRxi8rq5jKW9BoGuLcxJnFv",
  "key33": "MsDow8BoXtcQ9J4XxF4U8XDCekEq7tp9GV9GfKpbbNXHHCMSzHH7uDn7qo9yym5VMWDj8bhgBJ2m31EJ6mXe4Nq",
  "key34": "3n86Dynxm5iGAJrmnFK62Q7656KuaceFny1zzZhrGuaBCZpvrfHmZCzArmUKpBWpm4YdaHFeZhzAoLkipUoaNy7x",
  "key35": "2gwt2NFWtEyYmttYk4ZqKYVrFGNVnK4b7BhGWeHiNsnzErgjQLrRCLojbzHKvYQuUazuzYuDEf6hxZGKx9aEo6TD",
  "key36": "3JoGj1LRd3iLVcXNg4sMTYPyzRAB74SdugGsrWYm7sLSHcs1nJYd3HFTZyGCVmbaaiEtszNXggJiainttgwTgSXQ",
  "key37": "4A9NwE4ZQz8XwEKYoaZTEmrVEfewBfQF7n78WhfnbNbVeRA12YAbkEhdmBraNtdF4YacrvfCZrpFGG3FMnuGFbH4",
  "key38": "41is55DrUexabfMXTNZtzD9mmGtTQLyfAGNJZEf6D3dKCKPSgVgMkmGisPUSn85WxMqhX82eRUbngcLZqt7h6Xma",
  "key39": "5BKJN32Z3NAUfqqiajhttJi5fdy3ohQkmAEnnVk2nY6xYxHWELCxzqhQXuWFAzogpUQG3fqzaqLrNJfDHaBKC3jc",
  "key40": "3XoSGo97hKFAbSRSj4TpcheAVMECqbCP544ryV7td55qGBzW8eDT6UreSyFD74iDn3dJ7sxzeEmtGhALs5tJsCKv",
  "key41": "4mNFR6DxFnF7GMZMHovXrfkCYVdiRw519mfgBtsXBxWy9VR9Po7X9k7MFEcK1pCW8WDaRFyZNcmxRT1k1Vk8hsaT",
  "key42": "3gk14P1bJhaCvBaz4qBmPsBRs9LqGsmpLkutPYHUxVEkdupzYtJc1ekSRKvWz2er9B7VQBkzNjBLRPpJyAptGzoP",
  "key43": "RhprmZQPB3GPUakaAm3LiGWog2G6KzvBAiJnqQXaxE8JE8kSsx3q3En2iRbp1UhDPVxtkN4Fx7BBw8LeiRvYnMY"
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
