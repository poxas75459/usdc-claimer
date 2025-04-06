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
    "5xtGrPctPgK1TzXY3u4X8bX7adkoNvtR9rJYJUfkppjurCaL7PgR6CSjbY2p5k2YSvXvb2YZzx6g8cgL3xbreU8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GEbdHu8FWyXjkowFEZDRxhYq7NRjKy746FwiBWkr5s5voC7kaqXBd515SAFkuTg1Baw3pdfNkB2L1Yo2bwj8mMM",
  "key1": "4eXxsQekThu3W5u4mj3vCLrqzyUhLfFgnXDPZQkota9wjfjUbE9zzWRLNc4nJecKuEaotJ7yKp4vWP6NLjR1ojhz",
  "key2": "4NbzZcH8chXTdDkKtd8ASCiVto8TRpGiD3Mtoi2xQ4vhMMzp6Ccy5t3SpcgxmbcGzKKq94vxYUqMgBuRS6pPxvum",
  "key3": "2UgNKgAhTuQSwGp8bXdoKqdChw8m1M1ZLePK6DXnM7AGwFYyjhae8J54QTKTUgXaTNki7o6FDbQXp6wWYiqivXiE",
  "key4": "q6XauVib24txzr39u7VdY2Lb3vd1GfksL95HPTFgBwYo6PAWAysVdju9JNV473Biym9A27h1L5ECUatCqdK6B4f",
  "key5": "5B8zSoNYr5gs8S6nZBpi9NvDzFGrbBfEsug7jGP1Sdu1gYEbPYpJgt5tpwxmDSr1PTYvV3m1P3PB8uBroyJPDyvY",
  "key6": "4fPMVqiptc9gdNiaMy6Ebp9djxFy7igGsYF59p4pefFipWBGRHwZDcVgTukm8QkQm8whbPr9kwNPzSKonz2cXskx",
  "key7": "kN1LTDhyR6AWRaBrwbTQ553ZQzCqu4QrPuM32Stidbqp9ZBHPjxXwS1LGS44Cz8ZJGyPWc9CpTSyktWcBemmFps",
  "key8": "3rn1rMrCeodA8zs9WBSVTTpn53kh7jCyu5eVxVYj9uejeZoHniKzhrepuY9UTkEPnDHxNCJnLZjAaYJXXr2BSrs8",
  "key9": "ypQJb2PMvY7WMEfcjrZKGP22vKWDjJ4dDc7uXh4mtTMTMzmF4ofc9oAcpqnUDmMDY5JmCrQEu81ZGA2akzg7NDG",
  "key10": "4QPBbfbP5Pru8eBVVHQ9VTcdJuHgfaV9QDjBuqVYzxPhRL5bLGN4TajdwdRHAM7nqesYnjWWkza7v3Ceu4StuxxH",
  "key11": "dUoYfK5qRUEinNj3mfV3x5eyYVecAnpUDRpbxm78qCXbdSkjjC95i6XwWASLXRGC2z57RKmjhsaSHSJTspFxiqV",
  "key12": "43KEJD9mY7w2qP4UjBjbG3P2JGvyG4pChB3Qz5YwmqEyQgZPdhkRp3FBhEbLvryG3U7HK3ZG1CPw46qd1Rik4WdA",
  "key13": "3iSEB9gBdBnX8iWZMt3AXYbHEQ2QvLazc2bKj5jEctybwnk6fNFKXxJYJHZhdEBUBLqP3qVaBrJ9EB43dD1qqHri",
  "key14": "5EsTNrm4PTZ39rRtB4LADb1sKQgVtFzxGNZLyGtWiqjvAjg8XfCZmhNUa63GxiU3VqGYZUwGeCpM2AMExYeJC76o",
  "key15": "3Z4KQsUusnU1GSf9qAtuv32Ny18KNrESXwceqxvrxBDpK7qrrxbMWQNWZMCpEVCxhXi4DBU4MWCNFCFAchWpf4v4",
  "key16": "6225FteHMUYnUsCdUWA5az4yjf6VZMHevAQiutQdHLrH6RLHspPm3VMBcNrMrJhfL6rZFB9HQMidoefpnBPYRgrM",
  "key17": "4Y3X5Bo6E8mZfPDn4yetx3yvpkjicM6kX99F6pjy2yB9FAKzTAv9GXywvSxXZHkZKjD5WBioU9wURvUNYCWGVkAT",
  "key18": "5TnWfTDYxMK9Wapff632a64s9KFGnYQC8kS1iq6RuarHCRfhBjJLx3Lycm7rGB2zUBeUcUTLBA9vN57aHTHVbYZx",
  "key19": "3utBVLGd25V1bYQNEUeUMjdm8J5an7Dkii5RoK9rdTvuiZU5ycM4mG8qUsfYwJCnvsnsHUusukau9wiGS7hG89d7",
  "key20": "3AjWsiL8TMmKPKeh2G6Jiqb3ajxSXrWpvTwjuLiM8WdqyCZLfV5zzsU7fJnTR7gPW3ZgmNVFcjBNDakU82Dfmf5x",
  "key21": "2b1WHKhzPR4LAMMPjyV2ATk1bkiMHnQT3dR8c5xMq7bSVLWocWjB6oyvVPEuo34FyirDqGnh7MVSE3LmAH3Nt5X8",
  "key22": "vjJPcqmL9bdgvXd1oFDER1FJkzb33ymzHtRPpJoJRueAcKMYty7jJkEcYz3pr2cBoKWbj62Nz2mvYVZqKKDk7cV",
  "key23": "49qCYZGX36Sn4CMMNkktpEUUw5ziYm1nze7rHUfE9oAdv4fdio6E7p8qTKR94WUn4uHRM1ST7rQHZHP5NPX752fu",
  "key24": "2HYsywLUG4QW6gcvG9kaaLjQCv22J3pZmbmuyiFCBaUwv4g51vPMhHt6jQo9PrurfbDqB3wbQT5eec64hXjYqNtG",
  "key25": "4Aww7aa6YJm7hfMJrnSCDifPe7UKYHBUxdfazez1g4MsSZZBRTarqDtFQNAPpFWiJbF5xUtNJbaKeTEDzpUpXdoY",
  "key26": "3YRC2UztbbWcMu24dSW7eL1KiqwmMuUn9rCgGdXoXU7XanuTkwLcsrK121QhatmxBAgr6LZqPvLQfGJhgZKc4sQ1",
  "key27": "q2bEz9aCVrYEx8huhdBxQ1f77QRXa87fYjjYDR4ayJZzZygsn7wRu8zuG4icTwZAyLd632712dD69W1R67E3uuN",
  "key28": "5L5j6oiZ8ouiggfNLQ215QSFsbBpvneKi4tdhZV6oVihSCP6SoDtVywBsREEXMEGrKvdBZ2eoackyuzA8UNL4iMZ",
  "key29": "4sFUoSn2UkLVNdMu6BaacBT8ugrXftq73xZV8aFFCFG8zXdP18JBQ74nf6PFzkSs64UUfSJcKFcDFbiSQHywdWMq",
  "key30": "34SM3FVUrDjN7Vc7DvySR8Ai7ydo6AFPko9b1HndN9CHe2LkDZv42rBrbK1eQsd7wwLuurjoUsCp7RwibNXR9LR3",
  "key31": "4yuuJDFGW64N8N9q7PH2wiSwYQZkmuieeZ9kWxHoaaqCSp3X24xqr3iiWUbnC9i6oPKj49HV1wVSZvsjUgBofRmt",
  "key32": "3jWFnetVVWVoevkn21iy9dnGqhR2a7AfHDFgEDugNi1Zh6Hm2KGTPFFup7sP7Aw1VqSRXRE3m8ikB4b5ZtuoGPyL",
  "key33": "2GcEvFJCeksmfKShX6kdB5RWUTjCqdJmZE2uhhqrJKjTWkJQpjPE5xU4ormfkDKsrXrypDdGcfGojYX2yPb24bfU",
  "key34": "MiKLLd3sASNN3uHLiurUqVa2L9f7fQqyuqUHH7KV3E8fzxfNFeS3ian7puyTrUZZMeTcrVXtj4WvLe9JjzD5aWT",
  "key35": "3MCKoS5GFLYVd1HFD2oPbZdkwFEZRCW4Vzo3xyb4PGeJZUKrJEH7dhEVA7NvankUnLRm2KNPLWTTgc59X5jPCiWS",
  "key36": "4YJeD1jRCuibZuZa8XiLp5x2TqCWpdR451SUcUnjLpDJRCbQiKb2UCCnivFRYw4GXRWUwtbP9C3rfBpZDk7dVg3z",
  "key37": "3TMMd46AVun7UanBAQkQY7ihw2LLedkFCXjPqw9sFGoBPuizMfUo6u5Bjs2SzMetaDa2QpkMCwcssACL3tpyRftb",
  "key38": "2QUNQpDhSCFwR8Cmfwjx5VXBeH2Kmrnk9ja3N1pPMHndP8aCDEYGLSaNewD9DG4G4hNcedzGWdK3SFmXnLWAyEsF",
  "key39": "3YJHdkSrGvCsrSZgVDXfaQbv982ZmqpVzFqcY2NjkuYxZUUfWXX9JVjW7hBoGghd2vnhmbVwLbCPepYsttWycndi",
  "key40": "4RCmS2bez2HXoZiVbU6QrU95jzEBHd22zYKU1pGtBpGYS6CAbiK6RaAmmPxpLyTXz9cqQopfW46KFbk2aaEkkhYC",
  "key41": "3qNsFunGtTJBxKzknhe4p99Jj5MwNBSLEc41NhdpMnVpEqXcSmanhvdVCBJqL6annyKJUYZtVpUkDyRK5TTb9eRu",
  "key42": "5atRheDjvAB2EdevRFjXMhJ86tkXk2wfwkPuBUxqQW1mRsYeH217h7DTbAQ56AcrnYocSboLthq6DX369MVMSaeB",
  "key43": "2oXTTGBok6wzchAeHRbNgbuQefyVRvQgnzj6ZczALBjEQwfc2pq9RtY7hzunXTXVsGvKMnHXgHDAATLr52fU9kev",
  "key44": "2PixeysMXST7Wn6w8vdNK9sPqTUQj7Li3PxhHie45nrVp7QArYAV724ZN1poXkZyQogAfa2gA1VLr8jZAbyJ9BeX",
  "key45": "3XWDwrSbVdh4FWUhkhXdXKNqqdFY3rmasJu5er9xpceS96qP6iM8NPVrzBX9ptUnMjDv6kB2ZwUMqrpCp5oUnEVp",
  "key46": "2Txmyp5oXLZbqwxs5GZ44PuERLM3oT3PA6NAy5uwxJVF4QEF9Uuxrs73xwK3bVWhLMUje34KxWDz1jJNRfZgdWXR"
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
