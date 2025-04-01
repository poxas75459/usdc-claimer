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
    "QFuMxdogyzN52yrhmTsnr1Z1nKTXngPFew8iWet3DGYHqS5Rh9aNW7Pd5GovNwvL2iRyxZ4Xd6g4sQQZBgFCN9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34pNPe8rV6jw3JF2D4LwZA83Z2yv9yFjfUqw98Ti6SByZLVXUNwQYQZ6V99nUtHJqLybhkZbttzz9ZgdbVN1UosM",
  "key1": "3xrGxjXZwVCVAQF1xaZExg5523Pa3FatGHP1aXVniNA2k8Febj3C7NK81BjNq1vHbX1CpaLUbz3cZqKbkLTU4Q71",
  "key2": "5yv9DzkED4LiT2aZnPcZzsXmGqdRXbUv1VKZKvkYtaCB8rp4ZnFezKaedBGx9UgHBjynGPRbNi2q7BSNV5sWmRKh",
  "key3": "2PZMfjm65vBasUAk7u6bwmw4oaTms3P5uLvcUTwnfChUcHzFWJ7mRLV8QvnLZw2RE6pHJadWp3ax2jWk21znKx6N",
  "key4": "5n1YCUzYM8sVVM1pzhSkXxzz2S2ufWkTXkxNWJ5nvGhwfmFDsfGNp94M7h3cXmuugjpLaSQQf8JhhYk9iN53jcSq",
  "key5": "fWz68tnvQao7pckapHAHtGEJWwQrkPmFV6griKPmAo3n3VL2tbuNcvjNUjCHoqotNQvvYZtkY4VLVpkuHjLbGTZ",
  "key6": "5Z2rDsGqUSZpF4hBzLUX3tWDXv7w9yZp79cZBhLw9shgjgSWx5gPD61u6mQZ24GwPeEhk7WK8ojd25J5jPVWq43c",
  "key7": "2fBd7B38P6xakXVe5QkaXASYx7bk7hsQC2mjHx5XGpVNoFJxMA4iWxhVqT88ow11d1q6WiXbYABCmQznqKt4MWEG",
  "key8": "3BuGPuZHhrLCCvjiL2NmAr5zRqKuUWsAonyxXGZHSo9y9dYNiL14rTfE16TUjRDXNxNmHHdg9D1YkBbuUACaFyNk",
  "key9": "2VfpFvpDLtmcmAuZdUswkgUGxVNjPE97Qv8sNEpGtvXwam55ApkAjazzkCt9i1SToxmecTS5xZtxVzPNRiTScZUx",
  "key10": "39ZWcJUPLx3aRUfLbUWc16eWeZVJgNndF33zpiRC2QQyUdC6tJc6ErS7rZ1M5NsufrNo9DWhdM3SBorKnbykQfzZ",
  "key11": "3RGpNqWV6az7uhkiwZyhTZWqTZrTk863Vd9xreVJaqV1BgWkJUQmfDykvksMoXvQGXiRabZ34aNTN1oYqvnxeaQV",
  "key12": "36gFBk9Xou3i16QmwH3Rp5qmzM1HHEG6Ef8vQtqtWWUBhBeMTu2BNi5zy86HLq874Hy76R8FuZwQuJcb1fmnJhNK",
  "key13": "4EgkC3qHbaFbDjU59PMZePfpDn4h9QbrXb2U3pMUJiMVVXwwSJX6jucpMsLj2gzD72L3pvrx7mw3ximgQVscXjDi",
  "key14": "4wP8o3ijSNw1KVwRy2VWtZwdsXsHi6jAXB9BdsbPgBfLN31tck69ccVaPGbye2rjgfYMKsssFjqdx6HLVuQkxHdG",
  "key15": "4joXs6phUeGQT8EZVLzQrVNZkyTUpNXwjqoxHTa7d3WJD2RX6CvJ6AfQnDoYFomx8kJEzddYjuLh5HgfhTFBPsir",
  "key16": "5Y2rDUW1tuhT7BCzveBqtPztPd9YXkMGLisjCha3ERdJ3kGrcfaa2yTpifWM1xWGvLaZxYJuSaWh4gmBG7r8V4UL",
  "key17": "2eesStNgKShTLEmmnKjDqzWTA4rTFuPcMfVcE4kijhUm6Dz2xccrsVTDaP6XvuHD5KBnDjitnJVkw3oi5Yn6CpjS",
  "key18": "3MzQLywfGqZjRi3LmNoejBaDPubpy7HahSPxeRVnhCgtib49U1hJzZ4NsRjDNEF5zAvdv7y9uhJFD5RcLFEaX3hQ",
  "key19": "3V48AjBHpQrxrUhPei7afAqQsyaDf5T7Et8QZm3qo24jzebv4FHUB7Cs1ncpfHcAZoaUu9SfEVqnPkaZcR1fk9FK",
  "key20": "3besnaSmpmt7whUTWw2eHz1abrGHM6915er3GnWXPCFpkt8fBHhQK7ZbXBZuNLjFBN1BUrz9ja6e6gpCBSubG1E8",
  "key21": "vsnEtvktyP5qHxNfEEw4BwPcmgEaMryCu1ZY3eNJaxcXWgbyGWAc7U65pJjURVKSSoNJj5qu3sMQCCRCHetrhwr",
  "key22": "24kvUCBP3kqNvr18TwmZoTvWWk9dj2SLonYCQA1hbnnoFXEbxKqH7XivnA27W9bq7nVKr4HyyAKxC7wzbhp9Y6mD",
  "key23": "3TLfQ93JzV3p2XZfauZ7DF5pTjzxwBKzz9xui5YZV2nZxwT9hDfKuBo5faC2TtT69iuYPSrCXP6GCGUKXcWogQqy",
  "key24": "37nAaHzCLvSFBz4bK3XeRTBnFnReBtGBp876BEW7DkgYRHaEdQHB3AixkfJmuDfEmgwDKHniWxybm9QkEPiG1xAs",
  "key25": "3BsgnMddtfhuV8655Rdu9EpYXXd3SGZ9ByhekjRntXhjjMp2dZTvZuAHTULHd4vuCD2hAYqcbaBG4nKt8Ddqm3va",
  "key26": "LuhcLLQjPKr969v1YLzXrFoVE7u9YDfD827Xa9gYLgq4ATkfrJ8BWfbkemK4bsrYuqAkky6RaVbhX5C5nbQLgyR",
  "key27": "3GVnw3P6pH9w5QCFEejNnqiKaa2PkCCs8q1YQAxLitmtQQGnsDnGZAuE426ouu2kn85yD48RZHGWT7z5eH1G4Pcy",
  "key28": "2oHPC8GRGJWU9u9iEFvNka43Mscb2TxnpRuj4QsWUjUX1xPXiz4mkbV6q5K928HwVZHsX1sPQocPp9dTyc2ceLpT",
  "key29": "4ATeLCsyg8pDYPUqgFnGmfe76iyUTqj1F8YwuxZatGTpizJRpEGQAkwupygJCEymdnFVXwzzrzUYD8GnH8kERwfq",
  "key30": "2sKCYdr3wbFjoVAdKmy1WLhvsNsEFysMDQFaKZH47DZTfRbWpZSwJ8iHXqv2cS4S1kC9W5U3fZ34g6JpXGdyQtrP",
  "key31": "3Dts7BcKcrmvhCGENnhFe4cErwjo825jBR9jHkKs8ogbNMWzGfcn5BE4JN4uiC31pSBEm2yWy1AvrUq5C35dpohu",
  "key32": "5ZY4H6wJbWHYP6Am8yvairtPZUquHk59tCAVGHniAQt7iKBuhLQzTKXTXqSy1s9ZGabZyMxcB5mdYYTNrntSyhdF",
  "key33": "5nCf9UdyUA9wM9cjCDUT1QKxxYNVjHmL4zztvLpiJ4VJZUPumaSoGi9xvh1Z47vpUcDjw15B3cdEdxs99GQcPsk8",
  "key34": "85KuKoVTE8xAY4E2aTCc7w9LvfL4sr28XfU333iPA7JqRdVL6SBo3MRQbcQr28NNeQFTt52mbwPEbtUAvTNaC6k",
  "key35": "4hv5CBbWvX4oDxVR2LcrDnCfs938d7swZCWk6AtzfuKiEoBaWh7Y5BMws7vpH7VBVJ72pGuyvsBuXN69Q2td52yW",
  "key36": "42w88yNKmsJW24P9x18PSET85vkmajWLVVKdBLSjok8JvHgKmU13Hw3t7LPRHq18mjg63J5UiFv2yQkNRd61XSva",
  "key37": "2JKiZ5Ki1HjPNrBU23FXHuvMjxan7anEEQR1QoRT7tAtkhuP8j3ZRgKorSUJtHgpiNKnixnku5QdRmJf8qLqLHJt",
  "key38": "5yYdXMTkiTH7LNq62TchQJkUHpiu11hnKnC6vkASZef6RXhrc69QWQGb8L2JYwp2XwiFRx8sE3Nf4ENVEUBB6WWn",
  "key39": "4rmvL2jJbu4ut7Sauf3uM7fSJaKHF4MRpVEnHpmdi9NsG3BJt3KdWDPUkT4VWoTi34EsaDbq4R5hLVCFtHkug1yz",
  "key40": "3vWzR1WhQZr7GrQSugmiUgkJXWrupS8Z1jvj2fCuYr1oFSqYwTMFjGU2e3A9NnU5yEc53a8BfcwSrzZxiqdP8awj"
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
