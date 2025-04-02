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
    "Dmoz7QXJBSwhAFDvGKZjzRcCFvqCpS8WaWLhW2LjcFrnhrG8T162GZkPxp2zmrX7XzzzYKH8JvaZf4MKjVrXk3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54UXFEGCk74H9kpyA1vTBroVgkPQZ4AMhqYddLgxuRTrYEWqbaJcwLjJDBA122VH8GR35NMKPQHnxfqVUECnjX6x",
  "key1": "125t5vVPVbiMUQ8ynSTS73EEPAzZDuF7wmfBfxpA6fBwPFB42aHXBnCKEoBEaXAPfaKiKzmRUJ5TcSRh4UFFhwsw",
  "key2": "3SLim6wPnQ4XVw4Z5hpL59M4N7GzceRBB78Zeag6AiKgTwPPGVTe5BXHKaZbmGAH7rtRhg9stNRATyUypUA3LJFp",
  "key3": "ftTNQdmwfLF7qdzXiiLhC5XXWCqwJwHFT1YFxxCBxGkL73WQaRrAYK1jH4wbZzbPCY4Sa6AJJuNhtG3s71a1bC4",
  "key4": "21wiYmJZXjGaEpPdbWAPhUkSsovxYmah3PxZdmahGtoX6iA2VkPZFQsUQtamWMoRr5cAZUHngrvW1EQFvz446wSX",
  "key5": "Z2gVMoHFwsuFyLt4QwjbMUxo8XDpUEvFBdxHcRZhhSRD13eUEo4RUJa3LCjgZUDer8iyxZJd6VqKvXwSZkwsVMB",
  "key6": "2gVYXgUQYpdGsvQ1zpSDfQFsZRGWB1ejfPTnXwVukzwvSbkznFsugtDReP9P8qPG6KWJ6ma2gwm7bBts71vWuNxN",
  "key7": "3WkHpzqwV38kffTxQdRvf4anmBEPGLSfHiwAduwhRDrb6WGuqWi17rueSC3vgmvJnSeZKbLXipkCUAQqRf6rZMbH",
  "key8": "4t8vqUMcXwVxw8khan95JCoWHnFEEmWAsfrhmSRvbpvNCLqnZahJa9h64didQGxS8e4T6ED3NjihGN46iCRCg4DW",
  "key9": "cxPAfUFqPASPPkJc7Wni2tVi6HQMhWc5e6V9FqTHYFPSsUKKrjQ2y3EiktH2JM2ihqLoNhoy5X111ez8Mbamt1A",
  "key10": "5moMdQE7F79PggNQezGCEErW6kLpXdoEdaFSxTVsFHVAZvgh6r6KibU8UTmPzRvm2aWyyYwEHDYdjpQq52nvn2TV",
  "key11": "5Gy8c6g81esMsHZFdir9TtKqxhTvLc4sKtETyQxnyBNjYRhvWk7duTYh7HNXdH9sdnBNv3SYCddRxXLQdau5cG9x",
  "key12": "4Y6P6wHuanTRZNGJbSyL85rtkg9wsLrYaN8q7fBjAFr1cB6Ni1JE3XT4QQMn1Vew3nNgNrCHBwWReh6munvfK2X6",
  "key13": "3dJQrWp17qfeXanW5kENEkb5dKCGRhZWxtVobUMCUFhkWKmRYoGgSGg18w7RaAqU2Wsj7KNUHehDxovusWJixqQG",
  "key14": "2oExhPNL27KLm1B9cTrBFLg9hJHQt6yFEcF6N3VQQwXcjvCrmnP9nFZqVgEM9Rdt41krsAud6QzXqf7WiP3yLfR4",
  "key15": "AVYrRAXXEpx91FEyDdTydvPiBLp4f5rHwAxV56ySdm1kSt3SbHTNXzEUF3KeJEkdF5psttJoixDWr9KzRaHkYeY",
  "key16": "3Sdnz58V82ryJsFBL6Dxn5oBjkXTz1GqHZWPvSNqrZ5vLwnKDw2ENwMeMAoQRZrfP4uDk6mGErPXRb5mtGVS1ids",
  "key17": "5gTDrRM6Tc7bGWMnhqiaLwz3tDrcJgXHMqwnV24PrfYFCvBpEvr3BeBbMbZLMu4J5mHHSTGo1PDD2Y7XFNzjHKB2",
  "key18": "628JLTyuqGhaSrR9UHx1edACRUUKvcNx2UrpxtSXmECt4jdQR5ZTonCnormLwrCVBLNJYexohXrhR1yeLv7X7RQB",
  "key19": "5ewrwLkidFx9EEy1YfoRt94dWTQspzU9oBXraVJmkawyT4ZFz2E61FzCGitK8kj9u7HpBTnjzFHNf5X4Rx2azzt1",
  "key20": "3wH65iyYhHeZKoT8CRPmBchnUG7L6aGxh3vseK9JESLb6LgmM99m9fiEJgc4P9HmUno94BknkgvhjyJCE4txxaQT",
  "key21": "3dZyhBPnugix6M7nua2x2fdy4jaS9mn9v1ejqYyrnABxa7fct6aaX6xPL2o4Vqr8KwoFQAAqH4JrN3A6EogA7rVx",
  "key22": "H8ecxdmT35FGTEXy6eotEnGHygL6FLt2zP7iosx3GRyx6xbyUGd9Aj4nz2yw1wqVo81oR9uxAJfvp6jymJa3eWs",
  "key23": "5DMX9DPF33sAc1u3VGuwHdgvwFyAc4WEJ489AKG8sCnu4TDy9SWyoFumEfzynVztq977HtsNwcxLsonpqb5W4XmJ",
  "key24": "3prYQwz7deJc4r23em6qMW1N4V3C3SZL15khmK74JCB62P42q93MasxVEogdtxQZg4QQxjroWn1CbyZ4br1JS3LH",
  "key25": "5XUSxQNEivVVaxkYqVSJXK1AbkQnSCq9nuzEME8HDXvN87abnz2hV1xUSk3L8XC9F234AZTKeVEZmFQaqXk3tURv",
  "key26": "2bKR6f9VyvsdXw58QdumRu6gA3dvjFR4Q41mgeiQfnMUWZiDxrTgESVxRxvoU5cNjMS8W4QZuf9yQbBTYR2vWUGt",
  "key27": "4C9LBZhWMcV7FCwXFVAyyNaMpLcbBHA1NX38RaaxjPo8FXxSz6NHdA594o9FbcbwM143BdNgcL3cnFKPRLCFYVyZ",
  "key28": "4X3v5rmaSeKX8rDxs9L4xd1BEiH7Qr4dSgD5nwiwy3f1KUBMh6rGdzhwqd6vtNXCmkrWgxdkva3dpE7mN3xQQ2BD",
  "key29": "4dBEqHRUS9q6W6TBXNeEBZr7KD7Nf8BtZQz6ACAKrhMn4ewDxk2H3sYC2EGmQGDKxzzavuNSq6Mg7ssy1g6zgeRg",
  "key30": "4TnQSGRqrL8iULQHRjWJhVD4K2GjButt9eBYDbCAUegG9LZdLQybqZbjF2gbVcwGhqgJJfJuTtvtjXG1CgyFD76w",
  "key31": "4H31JUTnAFjswvtiEESwP1FobRNXuDzyKuE1ni7MFwgVLcgH4RbtLoFX6nKzKn7EKQzWL8rdunr1jJhbpyeDF89Y",
  "key32": "5yYibavtDuSjCjocWtad4m8LGcaPqZQqRXFgMFJjSEVi2jUZfYmz6BaMVDL5tJ46zccF1jrNZHQzWEHjtm9KmW5n",
  "key33": "5pnvNh5ZenzJRghdQhANHUb3C45Xtpt3XvFJEzq6KCyfJM6FXtNdhvUqT1XHBrAibmA3GHwsbyXfJhLKTCm8aBSs",
  "key34": "64ysL4whCnPhc2r2hz2VqG3gQcrK8JmXwwwgnP9mHu42nHNnXGL37UBQJsrXNQ9QPCa8uYKyDfd8nQgEmE7iL59V",
  "key35": "2Vc2BEYH1ZXM863a1t3ZkamA7yJJiE5PJcwwBfeErk6fij214B9rHa88wo8vFL9pm6tnJyjYcBCcL99rcJbxZAEN",
  "key36": "rzKthLEec6zFEY8Q8wkhRFAqk9QXz2h6ZuzEzCX1TqRvAJ27Gxt7TqoN2qzygqurRGeHVMD3U2GUjcSFLkw1No5",
  "key37": "2cbK88L8UFJD2VPhn3St44pCvHQhaPhhUtiB4WAUEaVErTqqYPsx22mL7LzF5dNPByidVuVdy7TVE8hjqXQziwqm",
  "key38": "2JNjMcFTnqc1pf72di5koWEkEwHwhQfyg9149tqNQt269jmjTYZ3js5jQnFLgDSVvUdiZYMd4FzSeFkofeazotuW",
  "key39": "2ztF98PZcVPb3MV1xXDKq96nHVtZDMNhHL91PyQQ1grcjq5rcZxjuyxiZgXAQxfLxiYcTC23hpZKMvpPGxTessTy",
  "key40": "aiPRjwyU9xNwDv9TP5MEeLhL92pQAeffvaUuHQK3ytAaQQupbSn49nc1PT8yM6BkLHRfTqigf2wmP9hwkmCwsfE",
  "key41": "5mCafhKy8Yhy8TmJW21Ej4swVLP5Lg3VxptebZjEyFj7e97NNWmf79mLn7gYMCH5s8WABTJ1TjL5Az8sxwUPJ7JD",
  "key42": "2eftLB6DrbiQQTUbLf1B4Yp8T2iqqThVYvDSjDehwXtqMcS3U6X95m7gcgQDNi8udfRj2PyLzKNetPnwiFWLPjsr",
  "key43": "stUqumvSXyKzJ1AdkvH8r85CBqtP5Q4kF2YNfWfYBRWAVamRKXQg2Qetv87Q6g2Z1YbauGwvwB8YdFkmd3hVbHr",
  "key44": "2HTBQJyHnoC7PNc8GrFMqAJCNAD4ixFseW9q1M4g3yjokoLCELxqhQYku9sRzfuHUBeUMPPnkT13MWwjNRVyNRRW",
  "key45": "2gDQw38QH6jSiy4gcLgxCXGbJNUieeVdPrtmxxCoTRoE5dRKZQ64G2EZJucqcG7KR7kZtGizgfJmTgCkUh9nJamd",
  "key46": "gir7yLcZKmHF43MCVyRPzGhcyMSqoAYJvZLG4Gsco4qrUsdLSrBEgzisKtZzuDvBmTwamU9EXDFWMrTUF3HT1rV"
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
