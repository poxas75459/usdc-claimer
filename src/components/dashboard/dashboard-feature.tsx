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
    "2B73LWbPskaEzabfR2icUe5hTf8FUUYtkzbyLzpr5bGAozFD7VfaDEf5NZmEL7Q5cPuuis2bQRntfNY5LNSmQgFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29FFDS38rivg37rDN79DJbJNiTXxyWxiKJRM9j9wFG2DPo1jqA2tV67z8HgkH1Nj4cEkgvR26ScZ9N5KJfbKnXiR",
  "key1": "2LW55TbKCewiqYRQPrFddevsXMbnrN12a81Dh171uhgwAhgqrtvqBFMznzG6x6Av7i21otmC9NEXuwDSmoQNjmpv",
  "key2": "62wPYpSwtTQyfngPwBUg2jDxXzCv2x6a9MH2uN8SQoWot2dd6HjNNMbjhJraKcrGozsHnJUB7yhK4m22jj7ZdPaf",
  "key3": "2zj8XSTGSZA9s3d13SJZbCkzDbUMbgFH2yHaNPU3z7LPRTDJKzTKo5Tg15eyQa2hGwa6mQWNh4feqiYyJD3qHQqZ",
  "key4": "5ACmi8RrRJt9WRCN1vC7HsB6z3iQvNwYh5FQ4bsjCJC6u4NNER3idp41Zot5od1AZX9rkf8z1Y1jVKJ3ou8Wpyxx",
  "key5": "2yNLmo7n3KBeX8j6pVLKUGrYW6VLiEcVamhGoW1oopiZzdVUg1Ci1bGQ72Bq1F9EZ31Xa4qX7gVCgDhxiwtEuhbo",
  "key6": "4i3hEJyt3bJBr2UPJzSYb6Nh3XoZ314oGUz7stCZKqPejC3aMo1vottU8vU2CFTqYucvrqX3EU6scVxYCNuHcgPr",
  "key7": "3yTzys5i4MRD37s8Sj1B9DKifV29pY5e2sHczKoYFbzSwtjgnEREVmJz5wPUm5xBBpT89aTthpk7BfGvVN9iXfHQ",
  "key8": "BH1efVMVdC191mUimCLmfNWDQ2yefSjQV1R7a5E7Sbb45VkKe9NqFGecwD2sw7MRVsG89NhmyWaiATbGRh6NXqB",
  "key9": "1tp4BTf5u9PpM4zfGjGE9NtLMMaEPCTksiuv1nkKLXM2GDr8pZJbkEunNCpSsjuYkE85J3yx8BSvdnYpNfqyn8i",
  "key10": "2XEsJCD2VPtxv46SfUJ82iqpt4UMZy2phDnHt2ckWWwgNLCgxuAnqqudCYJNrGiXtkmxfRVavMhuSEjLK2pxij5i",
  "key11": "cfCNBxn7c6vWPaZDZpztQrHLLrjkMeQyUvhezHn4ZSJjD6weEJuFAYR35jy87UdpGVPaJFwN9WEpHTubaTHgdui",
  "key12": "3ZJpUPZF13mdZKZzJC1miw8g2BH53soQ6mr4R1rgGc53GWcdgyweWZxZGXk2wJLGFjrGtmfqyfjRPm7wxaUtXNSQ",
  "key13": "ai5RdjdBxjBcHeGej6PcKAmQwX5BAY6wagS4DLfLWge2s2Q7wfdLpEBKvEM5VNrFWhe6FhAbxRqBHHBrrtTbqkJ",
  "key14": "5bSK6KWPfRnc9DZPHLz3dypo5vry2FnoYi9YNomnT5nugWSxGRzDbFWva1UxV9Fhn9UA1GwK2kAYgzAzP7zocJYG",
  "key15": "5rYu59JU8coCVyCduJYyJh9pnwcjsphsry1mwKtksdEPWUaRAUXuKHVJ118L857nNwbBZtNYdd6ssvgSzxm6hg4w",
  "key16": "5z7E7ARhA8AxDKEycmxrJnKpf2VerAZprD18JPgVzpZqdxTtqVe3gbhM9eWnvXxAVhpDHMQ99RzHYQtfe8SE3peF",
  "key17": "3rjnnWTmBVUfnJWdCGa2XU174edj8HAK3UmFerTKMwLceWCydHxAMHT3YYm8gtZn9u79GmntwBVTAycxHv1uz6m1",
  "key18": "jysH26aXvtN9BX5L2HXZUyiHpfa9J2zSUSi7w1LvMbpcXUPFcnNYxvigyPbA2KoUSsNztcnEdQoPPmYKwm12Nid",
  "key19": "58XvbdcQALdr4mPQPYc6BheVDkKw8esu1fgpCDFFVkX58etmGvT2bqbPoPp3uDqKDFXUmB8TgTssJdm3Ns4DkMnb",
  "key20": "MTFQvdgtKyE3gLZotqLMKeGVkzUPySPhfMAAXrjjb2wHWTUpJZmFqAdLKVfHg8Sf9BcPkDsNwDioBWRYYvZSiyx",
  "key21": "3LyosXXnJiFLHXiBX91zL74Jfy8iEshJshSXXdABb3bfg1Cdh1MV9nUVNb6SrgyqsQxkiifjhFUcLdnVWptzsUaN",
  "key22": "632KEXZ8aebSsVrBEdDyBQrjJhiYbjzoJhjqyBx8dtzPoM2PcCzsJe9GAujHHHebaVjD14F9cQWr4UnkeuNUZxoo",
  "key23": "eDoKGMrftrYfBauhv7zCqAndyFRGQLCriiBqka6pyRBNNXU41wgunPykmwzD7mT5mB2B1VDRYKbSveENBLVt8JM",
  "key24": "2F5izkbNQUfTXPGxsXWbCqKFmUk5CzSwmjd3xzsy9BLWBD45Vq6HxKN8xzEzagi8ArgY9aJ5fq1aFBv3CzQMpkPP",
  "key25": "QtF2JvU24ci9uz4gtjA1bRyqGFgkYbwx3oRFgxoTkAZKiCPGWQd1eoG5kXDXTuHhtnqbRMtMQayk5ZByYYHRvrP",
  "key26": "4BjxJAEBAmjEn6JK3Sx3onnRpc87oQiPvfWNkFos1ZXmk3VtCmC8GnTcXqtzTJDo31fodD2fCxAnxLSKupZ6eoip",
  "key27": "Tw7FebgyjBePQigppjo2U8QCxm9cCVsb4yq7vq26PoBeFfQtFmq9nsuFfKnz7BY1mtrkCLdVFPiD7omKRfn6yjy",
  "key28": "32XFw7VYsJLsCbAWf2fuxq69THfmSgasMJG3eVcM2K6XEC6BzUGuQbRxWJbq5jG91Mo166eP4baEwHC5vzyfLYPN",
  "key29": "3pXsQFbD6V8CRsJRaUaeEHVReudaAyksXstyNDTyHvRCZQe98mjfYrXeiyPF9CNPwpaKGTCEihJ2qsRkfS6xopNA",
  "key30": "3GNhbbXaTX4P3v53bytkW4fUdnGvCaJ8Shx6mXnDvSNyS6MVWVDDmTvTQRwysMzpCNiUtbuUKCbGyZV9Q9kRV9He",
  "key31": "3VkeoNuuX7xZvnB6B4QBxpXQHDqXsWqR1qLE3iGECgyXnFan9NJARiKy6KjEP7ZTkng3vdsk2zWuxZ82WEA1EbQF",
  "key32": "TDx97vPh2JepBkjdDi25mRLqqmeNBj8FXbDoGG7pVuHsQPyceMKiJAbdr681J9D2RR1uuLXuWQdy5CkZ1KpxsDE",
  "key33": "2c2rKFF8qu6MC7Bus6eT8vzRAfBiPx5YS4e94QhJdJX8y9KneasrXmbiA6oetUbGRHciTV1y2W5v8CmiSr46S9yy",
  "key34": "2X9UgvXKWvwgQM9FAntoiqFy6ZndiSZda2UP24czStRypLckGTLYpPzUi5XykH2KPZPF2EjvpCEuELhcns68XQjH",
  "key35": "2kko9e5ojHZLssVhCU8w9KKcmUNkn48Afft5Uh6BWmGMS8xR8cUXHDQzC7543nM1dWqfhh4hz6tSSkAKwiGZJi2t",
  "key36": "4oZZnnVjhvxxSLei5qRvi8Ptn91hrR6GQC4qfxp2VspG7KzjnMZ5o2YaP7RXdr4j1RHcpP7cXhP5J9893NUCBdgJ",
  "key37": "4fGb1S4NwtpjSjpm4yLeAP6gtbBPtbeYYAiR8Fk5HKicZGQmVJY1WwjeStZ9T3vCtLVVLw1KjGmxQUjww5KnUCzk",
  "key38": "5yKCnh53C3a242euiEEDjca7cdKH3KZDtkfdY7P754o9LvgtyRzrJuvqYcR5ZmkfnCWxMujbkHx7DbyxkyVded3V",
  "key39": "24AwrrfHb9pnFeHftZKm58VLh7Ehx7zcoeofEdLgNV9cLMQ2P6w8XsGFPPyVCb5rMQmMDxeaPDDWtmnBCkKqSj72",
  "key40": "4YF2HECLoKAjnezZ1MwFWh1ZqEf8ccwFAmURckwPRp3P1bJduqEF2c4iTCUT7jkbfWHCZgQGQAAf4YrG8m23S2WK",
  "key41": "4Lt9DAyF5t5EqnJxRSN7aGrAZ1ANfrrjTkteb1d7pguCCuh7QSsdk2Eofi1d2rXDHwFSVRkAYuA8xU7Q163ky5du",
  "key42": "4PicEUAnfxc3anAGii825LJASTRWubhDDES2bcptJ5T3gLu9kLu28mMPLYiQAyY7aYyHQ4pqDGkrMUNNhY8YqBR8",
  "key43": "51pfuMeAcKCTjT4hu8FBJhz44v3ihoF7WW7ErZ7qz1PKoawyi3PQmgdhDptBUiEGXftvt6XHRBYTKJoy51gd5gjM",
  "key44": "5HtpGCNzpLudv2KjwENPM19sSmTz7cFoMyVyyt2CjN7GQCTY3uf6P1jzaFKhSfC4WM6y6Evp3b8KyuZ7HG7ehUHs",
  "key45": "q3SPKwGbKVGjn4mC7rPcxee3YbxY4VpYtMVCy9UrfY4LFnGWJSsv7cXpwEsFjhHoqi8yKaFjgz3jN9yt8m6JZFe",
  "key46": "4yp3VHbPtcywdkjYw3RUZJzGS6B3omSQVtDHFbnCsWoavrxd53YqB3yVBdRmds1zSdEKgzVAaoSUn7oneKp4CXVP",
  "key47": "JzxDGGT8oKTHST5K2aGwiEo3BabVKQYHn5hrwMFYxbM2D5odj1mQe1Fh1fq4hb7Hc8Jm1oG6xXxaRjJTGXGbgma",
  "key48": "53QhcHXsxcUETp6QwDU4aMpipVVjcnSXWinBVPjoTNDcDia2DuZDWipk1iC7spQZbJRdStvu9jBTMw2HtAeh5yX5"
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
