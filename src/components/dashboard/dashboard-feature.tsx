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
    "5jPenvdHfiD2AnJpsLk3EbJiM1A4Pjb91aF2VFRjuZqbtLuxCvQoyjxDLkz6qyg2yiQfrugdXtQBYdBuM3G4oARQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oi5KX9GMk3tQYmGpF1PZWHdUsbwhuJutrXhbejUgQZSuGNdpGgHyKd2mEMAyzotbLYsuTuv887gdSWnfYYCi9om",
  "key1": "2TB3H8hJ6zGyogLbbvV3DkQLQeyRVyzFjdsYAPCCypUnZv7etAg2YzLq5NkSAN9dZwGMZup91WBDFKVCfhFdY19f",
  "key2": "3QpygGnYpikoqrAhBo8Z2LxZTw9X8mP5Yqrwk3jupd1HcN9nKyFxxvDqSQCELU49Er1fbV8mxD4P9mTvNHod1DA1",
  "key3": "2augn4q59XprVfR8zcyXq9A9Bm6xmAF96B7gHNizQkkgLbSW292y9krgHML34SMrakcnph4oNoouMd6TZ6EThibm",
  "key4": "S544zDjM44M4Z4orWt9CBEahm8YRr5Xb5hTtVrFjzDJ28RQfJMboVdYUNZy6CfskjQTn4zfTRDCHttrRQBSXQ1F",
  "key5": "Vr5MF7rZY85RkPWEMW3jnGprdyPtQURYLQchgnmw6gbv9HE5DVZPi1f1AiTH6jBWQc4gLHGrMw6e2EqaXH1VDus",
  "key6": "5bzKaZQM1MgwZszQqFteJHpriSUjfVqtY9XnhW7bf5yXaUyYnrVVECQzdszjcHwTNhCjh5SnyaXUuKnu545biVHr",
  "key7": "5Pgtzri5vpgRJQVt6CzPJ2WoAwbwY5ah6cSbLHgYkcfK2YdN9dEV955UcqgNgfwyeHwy9GJArp8fzqFzdyLBxLEw",
  "key8": "R5Af6YxPh8ioqnyVbMgCAXbpJAE5VTrtPofLiRixqznj5n1d49WQmLB3vBWiPMezuTGeALA5sbg4TtzJD1dNpYU",
  "key9": "2kzxCFf2WbMz39YxMmiSfj96WVvHxQAXfeWoKiceQi8QyYMwHQZCL1PrccVzNqeqATbU5UaBhjZe2Z5dbezDwN8j",
  "key10": "3p9TAAUs1ubrpzgyL91x2QC6gWzDssi8ZQQbpchvQX7yQAjzfftLcMhouUceZZ4SRii9tr9G4FipcdgbPFGdAi6C",
  "key11": "24412ox62iUrUj96RQw3jE3sYxW225q4cwDNpsFSv6A3MGP5C8iRhbWSr1kvM1KgvrWYNYp5UH7VU2tQMKomzYPN",
  "key12": "i1c77vf36U2Q8i8M3eGikba26qvZqNgGc9GVhcWFdvDRjaeKScbDvpjC1MhYuksXppCRhyWd3gzGwQprcpX9LBo",
  "key13": "4vzmuV622yRcR29MW4udBseMrbshM28qsQt9g45aRkFR6sRLdXHGAvoxqJQz6ibYemhzs2v8oLswd8RbVUAbZ7QH",
  "key14": "21BjHTGy5tgkzBZKqRkwPiCubc4Vxrq4wx6TA7sQh8bbLAJb6auQ38j9uiVsoUfY7J5DNwRkrvnkfqn8Dj8b5nqC",
  "key15": "3zs7j9tPomnSxB4pLgmxF4FTU22tiocLCGJ5qivm4Nodihdgo5rwqHtrTJJdJkvxkKjDnoaNFFsCy7HXoULqVU3V",
  "key16": "3U2jBjWsRk7zNXrHZ6TvaF8LovHqwTTcZUoaazW98ab7nG24yjXsJE9Gh5RmGdDD7iay9pJ6UCJ4Jo9vKWKeyQn5",
  "key17": "221kTSERKm9EZFdzTd7nVfsSvhNP3Jc63g232aUP2TnwqoyWSB6HUEK1Mhpopv6sWNDKpj5o48n8itVCEbb6BZM2",
  "key18": "56zhV6oeFMEoYJfD99HRGTsWwHfUrZ7HLQZfyUUj9c4D9vSmJGwuR8Yp8rLEhN561pfdrLHuZrK2AQhd6KEjd4PC",
  "key19": "2dvbSRb9d9uKnnfB4FAPPGsZfJR182fRcxf3CmRyxkcp7uzDQq541wWNLfZ2LogEowB9kcUMKdtxU5qbNMHggV3h",
  "key20": "62JNssSXe6uxLT4tdfRfPVGMFLcDbo4VhpSfHt53tsdAY2peZmNzEGgyLhjDpptUZ669xjjqab3cdo6wgggAihMX",
  "key21": "41Qe319QYkNZ4PSi7hWzEMaFGxb5XK85Zeuc3xiRr9C3VYe5wnktjRj2DzCHaLYfgPVCHZFfDNGj7HMi3XUDKT5S",
  "key22": "2zwPCo3SKBCLokR69cMNhBFrCqzeD8WKPFTQptneVZumyQjuMf4Lp62mBV69KS3cJkwkpkkiK1xa2V7AAYQLMa2V",
  "key23": "44nDAuD4hD6dz76aVK1z9nWHU2sjDVNxyCX43xTDqeHW3pvtm8fBPPPrFti3q188iKVsKEKyN6pF8cJMjRNYpAZQ",
  "key24": "3LF18GXHXqx3N1eUBFrtipLTwjuZv5fgVVZ6nKBnYjjBv296ZYewWF9VCChN7DrXs8Cn5eABdBQDqZmSmwETbPE1",
  "key25": "3BRyCnpe3d61VVeL3zKp4hnCUFMXaU5FhZ2UitrFPGjaveY1YaxKiUTVFxZSKkTXEYfT5n37hAg14tYcYF6ieExS",
  "key26": "62epbhdGUMyeUcjoRwfLVpuGS1cP6wbaaJCM34f9wXcXNCTbCbwzUTSFNDp2W8UfB1QvVTSfrkv9GW56tjaZX1VF",
  "key27": "5PXGfYVdfktgo1RbAMbiwYPDFPFEGTLn6skVK3A3hiJ3vXBaTdEFcvqys1riThHVkwRZca6AtPwbob6mBtgY4CJj",
  "key28": "4HyJDsCcAVYeEoewjCtajMMpHpfmrHPiEzaeoMTRzxvukSmDB7iZEXWnGjvfZTEYTmQZpRjqDDMSR276dhYX3Ria",
  "key29": "3D7PBRfy9FoRGY8xsbN2AXMWyYyB5y9tLhx3c3pbHZS448KvsQcVahxN8XjoCHJFssmuZBJMCehhKjUU7i6BbAXF",
  "key30": "5vMCAphot86V3rgQ2CwHsdjWUe7586dMCcJzm5aZoxV1TEGHhy8E6YUiVpNJTMLbhyQzRcjF7N2Ws4vRotcZixXP",
  "key31": "3qMDcmHoezApT5UYveN5QHqMUBayCYjEEvEe5ygDJFykSQPtMFsEXy7g8rowG9y5pgdskXvv4jVE5hy1sQShCD4X"
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
