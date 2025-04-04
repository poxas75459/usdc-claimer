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
    "u34xrzpoCL3FDQN3dkzFJJnEs8hDFRXoDx8en9rmDcZRsaFogvKD7sdifrJJ9yuSbP7mqg6EdxXYs32Za5Gypso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sQ8wggg6FSFMNvddBnNcFy1jy2Baz7Yr79WPpeL76cf2V5Rh9QppAKS9GLMbuuhtrkBbo2z3ScgduRK2gSLDFup",
  "key1": "3XBoc8AxvDLsPWhmr5Fa7Ef95gRoGNW2pxdTbALBXXkbpTH3tgp1KWgafSAPKsRg8MxqD7nti2AYTGYpJk4xg6cD",
  "key2": "2boB6ojnFppmpZX1HXoKZVDCzhGTEBwEGJKd3sVXvQ8x5YyZVd5aaVVC5sKQoAv2BoNFyNKLWPMD8CF2yFRJj86R",
  "key3": "4Uu4QgQZfaGeej8pUsw2SmbkX2UJSqqsC8SpNK2PPCALSR4v3L3LupdEaGQ91guVNto7LELypTnt43DeZs5vhR5d",
  "key4": "ggqFbSrT92rcPL5E4Uy5Son9Xg4k2JEyPNfx5obcgsCFdPGAyiybBZPqRiwCSzPSZd8TSp9Stxw3iopfGb8pWY2",
  "key5": "4RdXnXJV6h2Td4Z3dsn9vHsJRajEqReRndhFcu7oNbiu7Qy4QSt9MZVBeCUnrwGkYUUW7fx5ESvnguHmn3CUFrM5",
  "key6": "4hVnWjMUgPFTEKteTsijdRrsBokHtG71PbVP78k6C8rJvHimMdDK8MR3mkL42iSJw8fFehJuBgmqYpWsNQixFR2a",
  "key7": "4r3veeU2Ewi1QHpraLWrGpgmmQg12AWhCS91UB5c1JUqyY7EGqV2cBgspqTCPSJa3wcnLabZXE4QFQbX1SZYUuUR",
  "key8": "cLDY4ezbNGrQaYEpbDkK5aipPKunPittCeLhv8B2YdDZjzcuy2dhZ7h3axRwrUcwKURSzLo4yL119YVEsnj1scT",
  "key9": "3Ymo9JW5honPNGJN3PeFvFpBzqCL34NscrsjaUUtKHAerswB8wQw7zB9Zs199b4H6hWRPEvYPFDCg2Vs63WWEJST",
  "key10": "3fyiANcANuPWcSrrpToXNVfcD3acEnY6C1doPLftJBXbYy9mbpZamnVtcz5Ewg2URYuri5YLEyULxzAM8R5LF7QD",
  "key11": "2E3GMTuLjDAf1NqMgHnNiQ5D3hMWAP2cwV2gMz7TPEsQhCNuZRv1mRyHwBkoAfkvmDk7NYmbyGp9zWub94g2Fkzq",
  "key12": "NLds3X3Ytx6uAT44rwN9WfUt2EfNp4GX7s5bpU6PaFsjRvkhQf9362x7g88bGj6FAapSBQR3TUvxspBnb2TE56C",
  "key13": "vvASYadX9X4i8dNQL9BcXgRnAf8vmEMbBKfhYm8kodcXbg1gWVXPf8zWRKiyp4F94ZEhFheYMPytPs5o5mWh8r2",
  "key14": "R6RxX762ioBW1ycA5KJyTgWcxrrBBYvtzdaUCysqSebhQmQ1amV3StxVRuy9XwG6rgF9989Fb1ycCXQcsAXViS4",
  "key15": "yeY8SLu5hm96tu4GnXajKRye4zdRiYZjmayg7zHJhqwpuH34HdKKBQgSjfhgurfdzz67y9iuu6FgcCkot4MZ52c",
  "key16": "5cz2PMw6MZhmxLnemJ39SWXgLPWuQgrTRdA2eqg7R96wbdwUmGCPHHAVbQfuQqfg8ayuXZTag84AZwKxxAiuPxsu",
  "key17": "2zj4WKWYrRzDTAAPuoWSHFUkATSk9WRkGRkF1p3XfDh8ondQXpXnBrxBfadSyv2gu19BgrWsg7TPM3zdAhRrV761",
  "key18": "3G6qY5HBURT9UVwDkeYMw5ZU4NTEDLyA8PwoowSRJ2EonCNagf2zWXjDTdTLXoubPM3PE1tAGSs5rMMr1Tfg9W3E",
  "key19": "ewFPL4UjmmsMVojwneSMhgBQXn76Se1SyZZhxoH1jTL9mRUXFAv3o8XfF7sXiicBwC6F4T8fgY7coS9H9tttZAZ",
  "key20": "5i7EqCHWTkZQoEknXfXNr4MKXBWmjRpjxrDQCimSfR2GceqXjAVZCVDDdZrMTjn15gAnEpry534boSAvjXoDKP5z",
  "key21": "568NcWm8m2qEgG4hPdYkhLYimaAxDKwjVsHgus4pn5UVoaiZpGi9KArohC5jvmW9tRd7egiUYCNqUTh2SXVsxBTa",
  "key22": "53YJAmkmcmanjmXE5Z13eHmfuR3VpnwR1UGkzDC6rQQXaPE1mEdHxLuVUynFyP1JSTBFt31XmvsJywYrSHEuzuXV",
  "key23": "rK48TY73fC4jaugfx8yxRUxvw1bq3GAcC82av6wyskNLoA1gky1ig6Dw7D5z1aASZx43oFYRVd5vkbaBQRbu52p",
  "key24": "2sq7tMeBLNTPXaAA5KkJ8g1CQSu3b8g3jTC4EP6DhPGeQsb5UirBfayx3ci3QCUsEenyBxcD2Qr3AfeUDbysDQcU",
  "key25": "2nboHYMjoBna76QnejiNEu138Sk3qYi6BbznjwCEroRDgszBy9SHCMPx41yuA3Nu2dzcgJ16z7iSdVS9HP7tY6Hi",
  "key26": "31CJptYzo1XzR4DYabPv5cipUsCKcpLSgGBRsaT2UjjV1jUetDG1yVkP1NaaudkREsnEKeNLGb9PSaP6UTPm9ycz",
  "key27": "5tHZy1AHWFUAM76NpHdKxdHVeCEp9A3FYMbHEY9jShKrJTNYgaE5e1617QiEdLbo12mNP8FpG5V65txMU5DTeGGv",
  "key28": "3s3KDuiDsXyuVYnLMD8uoS8cw4NvMQiV238f8RYLw6KdaYARaC3eAeBP9KEAeb9kTMM1TsZzkRXGWCsCRdSmsSbx",
  "key29": "2kV9N8cBtKzGycy7tGpLouFFq2LmZ81TUKWRSGyoyAJfcEeyXKW493CcfAx9PJgrWidSsGzfp9zuu4yapi9fPfAo",
  "key30": "3vhYJNkyWrFD4Rd7qJM6EcdpACVqM9wWdvvBX785Ejo1zK7qJ2Bx2cmGZkHqMzKYVks7CjpNJJ6LGzjimTjNKVju",
  "key31": "2QVQ6ePpgK7rj7bYJ7QZTdwsDSgQ8pobFNcZTA8C8uTXFDTyVHmX4qkSwDKFwJeeU3dDHipmtUwMnEvyj8ynmBdf",
  "key32": "5xwaeBJ2P54QxuMPAapSWj5HiM4afdXAGz8BgnS5TyDu7oMfNcfcW454ogAEZcBof13vft67K2st67k9o9tJu7YZ",
  "key33": "2q4Kb8rxVnNnqeQH2XzBbQyAEkAe6Mqg4qkNRbhNi4UkbCKe9frA12ckfvZBU9jAq8z14uXJ1GJkvj11od9eL66W",
  "key34": "v5wdg8bMapHZM6LMGDf1pGt2jGHr8DKS7TRLynh6Hmn2BqNNdai3KRSJhbeQQVRtHPcqvBU83a6czYeBKH3EaP9",
  "key35": "5Jpsk7q6dETqKiGhmXwwjU1eKx9qvpKQ5rhnGerp5EPnQrT2sgMLjtfySg8kP9L3ayqmpYkWivdig79mKu7HK1yX",
  "key36": "3L4qSTsftF7xFAx4bk3AtiYkM14PNPxat7PTmzyfHWfjkCHgH29MkgCmr4er6vSWYJuz1rnCHmfLfL9vnoppeojx",
  "key37": "QHHsssJaF834wABWwcqPoHPKoG22j3gU85ZUiLG1A8x7toveRS3ruCw4tuSvkWz3ky38jYgPsoqyViy2ZPGRimE",
  "key38": "sGwsaVfG2oWnMh6Y5UoTcFHh7ttNzjpZvmdmWLU7N22S5ZKcntHamyosdYYgfG1MHLpxgYouyR123p2VxJcowA2",
  "key39": "4gkGmGKQ6BHwrefDrYeoG2Fs5EymKdvQsADFtBMusq8pDYepbDLyJsX4DehmwMojUAtEtUjWZxEx9X59BwpBHRFr",
  "key40": "bp3HhcmiFSjMwEo4VnY2mjjUkmtvB29f5hPYFq7zygJfjQCuRDjM66QwSYW1t88it39wEicrDbbMYrKk5TwZxjU",
  "key41": "mJAc9GShLkJeaf2D5fhv4ES2bCawC4q1WyvbvxmFtvDFiFZShzpnq8WydeUQykYubSPpffi32draqWE6K1cJg7U",
  "key42": "2s2WeZwZo9GSfaLgbiZdjdNTb1CWJfECFr1rtqKk1JSW1BZN4GpxECoyM3e3EiPL6mfWCEEZ3UtxZm7KtGzb1n4i"
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
