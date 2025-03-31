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
    "2kukaTmfGAJEZMuVXQrCYDDhaTmiG2bfd2aUfPMutkpWPDybR6v6EhwDU2pRVRxqynQExTVKDGuN36NvzX2Gn7Zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eGjMibcGZNiKYb5gbL57vLDQfqrMCAq1zycZy4qCKEfKBWhv79Ftqvz5UjNQqCfFd96thSGJiFTpcFr5GtzycRV",
  "key1": "1PGkAd4F1pFCqaoMSnWR8B9sJ6rZmqVrWwDTXq37Ry5DsZoofx26gBZFoP4Zfcy5YG5JUVVY6PwtcDbyRpJxTHN",
  "key2": "224vaDb4CoZDkrSdkJta229GTsRYSeeHG2zLGzxm2RkK6tWbCveui1nRFGj454o1HSPwMXMXBAoXWCL7WVhq56c9",
  "key3": "3Yb4vmgjEASjKG97eLvkSovkAY2qspKks5Yx7RYUio7xzfuxjEZTfPNbeXZaW34DKUPuocuCR4w6vLLzzf5TK3CK",
  "key4": "4LuFeuHviCgKHFMaxRLh3tRwZ5GaE4dZc8LDtA5VEPzfp8CC5fSv352yzJdpt2UEzWFwV9DgYD52nReXb2J4wbLy",
  "key5": "2VfUGMP3B6xnKKDaTkPs68Fcj2bZ8c8wYjDQbw6sY5mhKzTUzic5XfSQAwzzHJ7wFBBaMtGvqyGZg581n7Pduio9",
  "key6": "DZTdHBBiWVPkF8vsxsKR5CADaYCcFJ6gv1HRZ8F5935u4sAAiRyJvBwXWZtGLdL6cKu5EF7Pu3tyVRt3YHLkCLx",
  "key7": "54NVkM7dFF7qYg9ceKvVszHr7Q4gTMRgEf46GqgJmDGspKV4AL3pkVTz8WicvPQHh9W17nXzdPknQqLQYkTpwRWA",
  "key8": "3ZRBJSSonPXhCdWfsUhMcMbRQerSCZnnf8hnK4ZamZxUaAfdkqgETfadxcrTdHQM1baBTGTmKU3URZHsqwvvFmq6",
  "key9": "3uiuq6MifgeW7pvZESp3MpHMsQFLf65eLwtoNjRggTyMXwYudR2v9vcpYbK4UVRH9c1ivtP45eqLx7M48FZweLrf",
  "key10": "zk593UJ7JzTevkGKjEFk8AFx9NHqD9r4EgzGkFHNarPKZ8LxvCHZ8AR8Gs3TBCoSprMWQHtWNZEY8eWn8KW7KE2",
  "key11": "3rEnUpdhC6occ3GYRJ2m4sFQvUnvXHwa1dKGe5Vot4Xq5hhUYM3yUnZsFucfPiboxVk81vdtCmBWAJVuLfJktTDp",
  "key12": "8RKTQ6PBo32LpTS2mAtjMtpRgU3VhKcDgXQ7hFQZTiWMbnFQ7so88L9YjkdqMmk7WybrUmtfBKi75ZXBdKixphB",
  "key13": "fkLu4XTwNoekLUrFF4MYyFMjR6iuZLvq9BeUPESNZHjzWg4CqAEoeMr7oSJ8Za8zhRaizru9xWjYMJxzyjRp9ro",
  "key14": "5xxabjH3jTSMBVoFDxGZk6aCyjN8w32QUa1DThRwMPnPu9cVBvG7drd9xwvx4f21dKxxFVfomZErd8oXMJ1Wpvon",
  "key15": "3Nj8RfQjWZPtxY4XuZWqVvXGfvsZnrmrcjgu6fHNbmz73W3MGxXSgQgrZZfYmYHetSm6Z6xQaHF13bBDe8oVkk6b",
  "key16": "2o2EFytmvntokpXEHsUN2dK71wyh4UbQFYp6ZGdQCvL6xPuH8jfCiFuGdP3jnN7qJo9Dra99LhKbaEvj2M5w6Ls2",
  "key17": "5d8a7943zntG8h8b4KUwV6e1gVLEJspzTMEBo7Q7Nkjjb5Ba13U5B2e2Rk1zkrNxGuyVx2W4R7UwPoQib2q5hQfo",
  "key18": "4juFhDbVMM2M9y5kiXXDXW3ws1uVb4kv7qncBdTbNPCam5z37py8ysVsQM3FuCxs5fFbHJGq6Rs324CYnqLNz869",
  "key19": "5Cisji7WZKUwN88QBP2qgxhec12cZhj21WjYSyWazFeRy3uvFbjs7C6NueKQdFfutYZCsmSNdFAmjCW4zXiH54p7",
  "key20": "2wo41UhDFYCxeHQVohkcFLTDsxXnF4KLifCe9DzCjCfDWhFH5fGNKNNqurv4vHJ4cQpE1bqF2gCE2xnZ9q1bAkwd",
  "key21": "4ecoxPmoHP5mm1J42uSeJN3xCfjPpqftJETQgFg2jwvkF1X61QAeszxFH6jBmMze7c7expUsbZYMJw7bTq6mtKdP",
  "key22": "2foozFLRLVtAAhi1wMqrzSEfiUp5efGH5aBwcmi1DPeJTvf3rYXKbo7MssBfy1L4w1Xo7Yn4EzeJvgM1W5im2HWY",
  "key23": "4f7tcHqpRoMWdvjRuhi51xdjL7DuFReM6wYFwP9GxbTykKjXsmP6kk1QwATR9yoCv3GAmRvRmDExy9FnHP9F26sv",
  "key24": "vWgwXRSVL16UaRsPnfRbAq98h1xxpkX3zFYDy83Hvc5V3gwX8KSwvHax6Uj2jQUFbX22wYmaM9w9aXrxEV12WGG",
  "key25": "67XreZdJpWgFjrAvWR5KbTXNbEAhLu94jJ5RKubtW5kQK2FJb48RajWTuQ2Tge9h2hi5qAbV1fK8v9DS2HSFNThf",
  "key26": "5rcBUX63oW558EAL74UNYjtc2RmjfAEZzBWyg5dHMc1vE5Gm2pzYp8V9YKuXcjQP7ApRUX2YrEdaVGaL9bPNGZ4T",
  "key27": "SjPLoQckeCXZNvSskfhRwARBmNxVNKtU4GFn7PMXbqYDUTRwgMhhCgnH6haSWb9XBk66DA3yuwMCrkFsdECoNi3",
  "key28": "4pupapCymwchPe6xQg5aQcYWdwhXdU84isKzCjqxeHVx5Y6swbcMUUEW8rQkgKc4TuvRdnmGyNcbTuXgSABxi8Rc",
  "key29": "4ddiAh2FfRZ8GpJdymVE7uQR44iQr1ncjZPi3QerCLR1QxEkDNsntdZgWQJFvzziaujWjAoqYAido87eZm7UsVWi",
  "key30": "2i42Gm9FvggL2HxPiVijx3rbtEUz36rR9N7dYrULidJid5ktQmbN5cgd8AA3ALq9osxT8bKLCJstuNfWsaS4tKJJ",
  "key31": "4QuhBSSYN1HZuQZH6toANwii2aHrhLUqVCjtYGwL1XVdXRRSwRSmsWGoHb5DqkBoNhRsVk53kNNzKWwLNaE1pCD6",
  "key32": "2VM6r3J2GvTcbKK7Qd7BP6x3AB5VG8ygRieQpbD1qZ9Y5cWxbMnvQpFGVSenJW59P3UmPw9N2Cpvpy9FEdUhLBAf",
  "key33": "2FGtrUsnksgtfvjmCqYKn7T6a7t5cXqf7EXDQim1zvcXEgbKKXvub5QKkpuXCsaJvzqSp4KX2HfBtD9jRw5ZxwzZ",
  "key34": "39Vx7GeMV9SYHAq4QhwDF6pEQg2KaFZNZYinEXtTB1rK9y1p59M9uGefKbMGNJP9SXLUbDMD8uaWfRLHNPcbn5uC",
  "key35": "29bxTRbvLhkM6boRLioQLKL1jQUS8nosEh6LDyoHYyR6fJWpCbsNG6fowT62K9dMe6LZesmJjRuhQPGSgsBrNrrv",
  "key36": "fbAjM7due4skCm5w6sCARhQxG3CFcuPEHQrLXpGSVsY92AJzqRgYHxKCqP5pdLu4eDbjTZbZCyywK4T3URbHUav",
  "key37": "578asNRZ5u6CMt6SLb57GuxVKFrC9BEFNPxCMVPhyhjtJKzoxZ8QzfBhcNJ2x5PX75JCRNtZQLgdVue22ffKoQ1y",
  "key38": "3ME6DMGLiAobnr1F99MnqU24H7vuq4caKn66CJop4Ns1CAmwZuWFvEAnEzd6JVKyfpWi9GibpFR5ASM8ZiTf9spA",
  "key39": "4cw1VokaNR1ej7cshDKDesTvdjNswjMpx4RHy6czAkqzb5EmsVgnS5T5Qt3ajTGAJ954onLfFcyvRmwM9PoxzSEX"
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
