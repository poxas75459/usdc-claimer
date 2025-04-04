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
    "3xBhUaJBZsZjmhjzf5asPoLtpP13UcJ8rTEKwqyX9W9vfdf36H1LY8yWouw4G1Qa8p6H4vwsCiqzvnuQwxdjvLDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BihNfgcq9q1FV9R5F1eKFCeEjbeAKgdorLdfqStfpWjxRF1UQXy4XionXKB1CTt6j7iZQpfgQVJUc2CJPbuujG9",
  "key1": "4u6uJrMCyciV3fcEXe3Bn4mEbJHkMXX11vZPAPa5gdHVhSZHGpfg8919XQ7GX5cnmdArVSDjRiP2939EHXNi6hcU",
  "key2": "2HVnsTHr4Za8C6hMpyw5VSG7sKKcN2MVXqsRLLEChdQ4NqJ1DAfTzT5rQBs5aCeV3pA56AKKDQFvewd9ukxSu4t6",
  "key3": "5cD4LPqB8DN6B5pGatFa9v2vSRPfoyTDw8eyR2SNb3BfveLXqhbkDm9h1HYzT8vwV2gr9GiuV3x2rz6FKd2A7g1D",
  "key4": "43Bx43pVtCQN77tayzQTkWUHnyGcjPf5s1ZitZPU8c6Yb7x37EB3geNKQjKbwJHLcuLFMYzhTnwjG8zZ9k1X8DBp",
  "key5": "5ca1MRi4Nd8uXP7tinQ5nYv4y4pTvfShmJDvTqmADXwFwjSZY7N1QhhgrMiWFjxyu5XbLccHi96CgvKhRAZ18ohn",
  "key6": "jEYgkJPjfGwLsE2CjdKiiNwuQX5WSws2DWfLs49BJ3kznx5bGgSuFU1SBDoCMP6d4wV1pk1c442mefQmxQtViVv",
  "key7": "3bqw9P1rqVAEGEGPcYTpEhc5TYCxTLPmNcecz8w436NEX1DFcifAwjcd92YYeJ2nzRU6mGFooznG8uCtMyg6fYDY",
  "key8": "3jbpe7oPuXs9tw8rEMEf9tsKQrDx8Xs6H3Vd2nNxm7KZ8GcXgPWJMquwWfZ8AKXJSKJFeNPor9hZu2Zw6tGhoFVd",
  "key9": "9sot1ryw23HJzKpmNf3uJamoUGGFt5AgcsjPDn4QNQS7WhrnqKQAf7vbitLs3JgDYjwsfi91BQZyFn4QQH15JV9",
  "key10": "3bkmfZ2gYVAzqF5XzuLA7PZ5vRLSVGheHGKQu7jZJ9fhvGntdcvZgeWA3EiV4dWGjZ2rG3tSG3kgjS3EGj6N5ZJ8",
  "key11": "Rz6JojeAKMWwwNqbLnsR4vTxM8Vm8nESRhjj6RkD9ydSFf8x2eoPcok1eEcq7jhuaGPEtnpye4QcH94oRzoDKv1",
  "key12": "47iDynUuG6fFvCCHfDmNxy7iowxGywWws8zs4ifBhxhXvnvyEXR5RYLJ3zL3xJJX6yendT7yujzHhzTfVxALSZzB",
  "key13": "4rFNED4dW1hmZU9DvuqbrXuKMQ6Ls9T9ioQwwD5LKWejMoUQ6vGeqybxsSckKMFjNrGMJMt1zAtC782Np996Jy3y",
  "key14": "3JX1E1wnse5nS3khQodQ5M6FHRzZgsTZ2YtvZ3jnv13Sm61gTQyUfbsVBJCiwGLipMQspkP48Sc2aEJYzGq37M4",
  "key15": "3AvaG6mxigQji1fTySDQswV85xUVj1qpaQY19yXudZuAt5M5pmVGkUMTdygaPeJ79UWvJ3oBEzhJinL8YPPXaZKy",
  "key16": "4RYwjWV7NrRWsNNoPa8efbxpAD2ePyE2b3EfxvqbimvW3rXXCNH4h3FC6tjtv26STk9wEEop2AcXMqnNNxGdCBV8",
  "key17": "3nbbzkN1uXwTCtzH2H5h5Up1RJBd7cy49ejEX3PyayLaDWbATaimFvBMvkjvw4Hdu51n6x6BqtRKjZFSZGr1MZC2",
  "key18": "3KkPUXdzn7fwS2i4atXw5CqDmaWVemHs8kpKNEqWF62jPnc63yd6L5DPhXXU1FMTYsL3GBjYihaxoSTYPEXyVKCA",
  "key19": "65X6stnyjP9tVFHBRn2e164w6fr3mgKxrAMe6RUxdnkaDaKkgp2xmCbhWTXfdq8ymcaNAUFddc77a723iU8hHRhK",
  "key20": "4iSomgs2TSfp9ygJe4MXn8FDTZ2gV6LUC6wkk178fpZMEDU6PfsVuXiQaFKa9h35cJGs4jjw4iJTErgSCrKTqDkt",
  "key21": "45LTw4BWTwiuB3YmJTEi1C5DLqECqYMVYQStrSMod2Hns5Cwr9Fka8dPLFZGsRBPQXmRbEwwHvHcHd1LmUtF3xdM",
  "key22": "4sVmYwbCL5ivkBEVAbRJhvUkWqa1pF4PUJYr7G21iDRcRex86ougDZ9Kv6M6DwbtEHEgosiNEVQ5N97QKFJVB1Hz",
  "key23": "LrRbnGiL2JXhS3SyinrAceTV5gjxe5vsWLFnpeDajXTzDr3WrNfXAJcugkyhEBzmSRhJD4CBfzosV52tVbdFwin",
  "key24": "5n5kFwNEsLYg2FaNRXeiYZ9KZS4PwRbVozebspC9AULnJdu8ktQDZvrERzUspLVkoVv1vPg9ynCnsMqkiB3NeRPy",
  "key25": "3DxXxirVb9saQunkLgtJvkY65XkqCFT4HFecNKYbrkF8cRroShXy5VHj45o8ysqfK2HAQXdUZHDmBjbH6L57Bq79",
  "key26": "tMrVB3cNhMss3n5UNwGCSUxVwpj2vsGrQSJhJTd2vEJZzJZy8ZaiXD97WD9xGwZ2ERwjrhNUtaMgkd132s32bzf",
  "key27": "ko1RLPfCvCq47sYDGVphwkc9dZBRjLHx6tG4chbBTNFWCUTyMBZ1UHnsn348zTLG5HVtDKFLTQyNb2qN3B2qQ2x",
  "key28": "2ZbXFZ1yyuKZuXfLcazWGXWpDZMxNCdRw1dsUYp5uEYn3NmQThxspDV3Pe4yDxnamFtWCn1XuJKtcPYUYubt7ogb",
  "key29": "5dCK1KVwfTJJvfLDX5a19GaZWMEtAGfAJgD3mSSxfhZExjpzGXuYZmcuvCZACpphczEyn3fqFr3m2Ybmafyxr58C",
  "key30": "7vAf34NDGaW3WMVaT6Wftukzrk5b59b4jh6kzqSYCxi7gSLy9UnLSd8zcANaT9LQsKkYu9yUpGQWH8jGUmJ81Yk",
  "key31": "2qqqGYb3TTKnyp2gRm3Jmfsq6daJYF51TPXhbEURXGpCRUWHD34Z87qetNc8gPHoRM4CJF84ffST8XD6PARDzZRd",
  "key32": "2qTFqyEeao2dnHLKiwvD2njrSLwWDYeFVJs3zPRMG7mWMdPttvBa5vmyiVKYe3QkxvyaHsQkm48jZbCmCBT9KWCk",
  "key33": "3fpygdNyBwvxwVBN2pboRXdFQuM73YyGpesSW7e5HPEzWGvCXMqDFhZ9eT1uGF2AjyZDu25jAsSyQKR1e7yNqknm",
  "key34": "G662C7uLUPC62jdiFUWZQoHZRxkDPUY3BmMXLwwNa94Z5FY1KLggrGVsHpEu14CpAE5A8u9fS2bSPLMHyiyAUo3",
  "key35": "5hTG6esyGKCWahoUyH5HcgC6rvJyQQjGWh976d5YrNR9CFqw29UcPZYeNuPDZaBZqvk9H1s7XmWW9EyeStV3p3o2",
  "key36": "3AK3e5jGPWuhGjKUjRXKPEnQueB5WtMj9nn9Z5zyuS5Lw2RBd7yTTBsk1t837vs8WBdvW45URpJkPYAkgyuBcFWW",
  "key37": "3MhZMTYezPieCZ3sL7Ash6R6MUWErYY9RAvAuqyyx76Po9Qx1R8u8qgxRk8AxZSf8DwNk7nc9JK5B9kzdUDYjBcM",
  "key38": "32Lg1hyaMSPoKFh7NKFB6XttVjXpt9Wc29aL8JXKkGxFToC3kXzwyXbAef4C29MoZXkCF55zGoqvm5hzwudPcZ3f",
  "key39": "4AsiVheWX8QYWFkpJUekRFTjqhVwqqG1wx4Hv92U4YP23jv9KM9mpr5113aPwhhWvgHNt7gzr7N84pupBUHjjWqz",
  "key40": "4iffAcqWkPZsgotS93vyLJRCEyioRsgfc6UkmiXRrWMHVbbzJkrovPFCFuWvA4t9c6fLwQMhNqqMrxjHozo2L5tK",
  "key41": "3u4iTheMZaJjzanKZMhw94dQFpGCZ6S8Qx1cpE6aepSiVisTLgfcwrFYw6rxUkLx3D3mpMeGbn6L8atXbysBeTSn"
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
