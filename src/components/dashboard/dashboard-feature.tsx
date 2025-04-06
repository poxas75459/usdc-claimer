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
    "39BqcgsJZ8NtL95wvrG5b5uXxw9g94vaA2guGsDg5YbeALzpVco6bqYnnD4P9erqtnn44gmu7AqACxQnFTZWyD2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rRDYux4eucn4xTZnpLppnkjBYsS6VbShhHzkKk7aKS5bGxB2NdPqaxRdiHwoUv7CHd2csHxc4Y334qcvUoqSv7D",
  "key1": "43oyCtwNc9hkTrrShVoy7ScAgv2wD7cgzZnCbQAY6QEmYon2wBv8JtB2rBeHGPWt4Wm2HTh3rLEqBXu4SwN8MBJZ",
  "key2": "5EQj3awr8NzSehodVDkHxv7LGREjV2ceAYDdCGcHEJVfVGcnv9cuRdm4QQJVcbhaAMCVNSX97oJX64wbeVf9CNvr",
  "key3": "3QCys9iKna4Y5Ce7vrG6dLb6zf3ZFzidjrFJo4Kog4KUU9EV6YnPezLT36CAFaPasTEpKkie9kqFpsdNVy5QHGsS",
  "key4": "5hVwAakeXfTBYuDj1s8TTtUJm5fioHC7SxarRc79U7U3HWjM8HphHVR1dDZF7RKUmc6LyaDmiR18NKa2PnxLu9sj",
  "key5": "2FU53wQQvAKhp5Jdqz6gTUq2TB7WwRQRAoy4adDzRqNJ2MLr33WW36tKeZRBPDxhwcp1z98zrjtzwpeYMssPeGFH",
  "key6": "3yqbN9QsPVJjStV7F3WmmLRY9bUj8bB8y2umyzW23Pi2gkgJiUo5uiZ8inzUSt5WnnwfDyP7mhYFpja1GCdxoAug",
  "key7": "5QVN5AGsTRXVKfFUi87mWFnG9orLikRXs97Nqmh8oC1ZBpX4tvvU9a6FbbqNFJPRsBh6wCx97eQV6bdaUBYDd19D",
  "key8": "2kDmZwkJZ8Jvk9LXhY4ULwkcnxbMoa5chKqqcCRMrFujN4mKzTunhEHuEa6VFgFd5nLyiGhnKSd2JT2xG18W3CGc",
  "key9": "27DmvizWEXJmnsL7CANATy5UkuoimSSWzWqcYkNHbaUUCLT5q4RRTZZiLajr5kVAf9diTrfFCjVKW1UL6wKthd2b",
  "key10": "3UePezj5Zde6P9cyjW4Gcaez8SUMbs8JLHvVi8WtsArwubNVHRy6hfm2rVS2U1AyRJmrPVpcTqXGn8XgJGLoJm2i",
  "key11": "3QBBiY4Uyp5hK9NN9Q1aTPXFRt8fBxnMhavTN95rR3yNHtUQMNTmYTnw28SZYnSqmiRaKGHkJ3mq3WEMSDBixLLT",
  "key12": "V87uQzjWvUeKGNRwHkoe2BF1drb2Hap88DhUB36qvK47PAYYNewvq8yYsmkGXjTfz3kxUxyVW1nqPJj3G7oJSKX",
  "key13": "2zZcgm2K6hLwBgXaB2av9poZgYT9Q5twXvzyLkhoGUUwff29Q4BpbeSsJ1B6be612WzEeQ2oeDGzaK7MYkcU19WY",
  "key14": "42T1Z7th4MBgFwnxUCHpghFiSU8BS3Y3JNNXpCxs9t4rRspMqVK9FxFyMRQJDMuGx74ZsKqwhvY1bFXWeGVC5Qig",
  "key15": "5u4YmRMqrUL6ZdAkoCdKfN8zVYakYRFEfHTwb6VGqqbKhFkC26Xmddr8FEY5n4uKGFDJrHUbWqerX9qeznmzGf3",
  "key16": "48rKSCEPdKw2ZDHtyoPWG5gJeQRW8gw5SfFXioADBtGoT5hdnzJkXMeKKTnhQTR5tVLyRumXwS4iUbRSsP1eRwBW",
  "key17": "43PLMWPcGPs6GxuPZqRjFxzBygQ8fGQxe8k7m2Pq2UAW4sRVzGSAe4iAT1g39XpRZQjVDgoSQ5yfhcXAf7MM4wJK",
  "key18": "5YiRbHtjT3YEjt9vfCp1eKdDa1cA3KwvMxKB6rLDwArv9Z1f1bXyY9MdB3nN3XnHdZDX3sujYYGncJcv9AfzsWrN",
  "key19": "2TwUezjDfXH3BBKALKmYtEFesQzntSVDsznEvQbQYgy5rPZeyUnVMj7jwg2guEiedsiWfXdcB6hsfuJLuHwiPrKP",
  "key20": "FQWcqaPSZdEZiGonezXysX88dAQ2d6mhr9KSQT6y4mtvqtWMo6PtAubzMZ96b3dqE5gXNMaxZrSdHNQKKo4r8o1",
  "key21": "5nZWLHjDaqeyVKWokV4d8jLiHCue6XVr3CqaQPmYPG2eHNeh9fTYYJoRPevVnFfhPkbiAxpjQSF77s8hi8j2WWWR",
  "key22": "59SmB3kuGG1T5gdWriqut5jJ7vKbeKAeuheyRY8zAPiBVfZEMSP1hpyAHQHTkKmXKzHkkwxwo1xmLL9RZgaJ5JqH",
  "key23": "3yZA3tZBkmMZyhBJBT42HNXGuGh96FMv3bHtieUr1SdmZYtx1tTpdAWnk3cQLXcMXkBznck1A6WbHSNJtNTeDwa5",
  "key24": "46T8spiDTD26UoHuBSkYJgMoWaaVi5jqPFEdzHypJ3wkBtWk4zabvKsGR4SEztVyFu4NUngVsWrtjshK51m3KZdz",
  "key25": "3MeqLVB3N8JsHa541CtbXmJSUwh9utqV3o5RAM7bz1h4JwSiR6pBcHrDAZgVggSHgRciGvx9unbpLRbcW74Tod5k",
  "key26": "51tVt3amtn3dn8dXToDfM3RdnAVyaHX7sKoAAxAyzYzAbUj9L1u1TJrUvMbcxH4JxPekSTD3k1SbQgrssT2Ja8Wd",
  "key27": "25n1T8Bii66SRFYXvfXsVDE2EKuAjF1yFwSSHKytpinSpBGZPYGobksh58DsXJAmeB4Hh1Pa8rqXdysMiKMbTxdp",
  "key28": "34xhtjdtU64bWXDgH2FncJBmnfmjfcL81W2w17XdWPSh9zfnwQDJQTwzeCVR7TNxefcBUFjeu5VNWZv73LD7dx8N",
  "key29": "Fapu1rhTU9spuhD1VkT12VBL6ByAkat4k8zPZS4eMiUxGQg1BxYUVXH9NzXx6DhgCd1XJRDTm98X96wAWYEBQLQ",
  "key30": "4E26LZhtW4nycYbPvo8YcPCwUJpzdxnZJk1ifebrXn3avQsEuM1EWn7hqx7LaRb4MF2zQiug6KX9vtdfS2DuYER8",
  "key31": "2PgTzPHGppCuDWFpqSLYK8kqBZVarngd2XeWkFv2uscdnugAF2KqXTF7ThUkpev1QPfs6EfkZVFhSkHvWDZ3hBu8",
  "key32": "wU3MBdhcCufupd9id1YUhgcAA2FG1p8yGpqhh6CywX7YW35pY7gkq9gYdsv7ut7E9N1DMUpnbHgrjAT9ALuq3Rx",
  "key33": "2mH19Yiw5o6cnTwmEJBfJW7zULV51uopvkH9MzmDvQebXUyGq1etz989d9QauLmzAaMMU9CxgFSC2Fkg5hF2hqsq",
  "key34": "dpwCuK1B9NbxpqwvSy3D6uAJvjU58jzMqNKNPwJbB1PUoKXKPcw7yEo1pzp2ZNgfyNDjR3Ed9Qf8vvctmpn3LwH",
  "key35": "3sjTHmWg93ayf8bmERDduok5fSLBZ3MYRCL1oGryjiDTy36A9AY4Gw9U2BkauBtm9kAujuDo4C9TjPbdJJiD7GK7",
  "key36": "5MZzCyAFFWuZBkFLNy6vQGxpkSZcXUS2DNLtzSbb7e19LEgtD5qNeSkafMoSJXW16UTFXyRerW3Yhc1tTVhKRmgh",
  "key37": "3hTt52CCkapEMU2baLR3BauRBnkUnrsxfhJpQr5BpenkftHmUravL8DjtJnhCGdnV8GAvWYewoGFvRvME2cmkTS6",
  "key38": "3yQRN2xkqPR4DCWqNQRLgcK863t4sW32Xrm3zJSYehumB9siJd4NLbkRmLu1yqTHqiMQ7KcUfReAJPKaAdnN2KBF",
  "key39": "5ai7ZYL6hHoAfN3QNTnB196BTJuSakPiun7gHCJkaWEApgir8wFg6qhLWYmrjDekZiZAfTyDucBRAscVSintKJVp",
  "key40": "3u3dxT2nrCHXmNJRKLjTqN82BbN7L9a5DE5wgh3ruUzgfQpBUEqB8gnXhDNhCN8wM47az7S7C3hw7SbWQgGYNTnY",
  "key41": "HjSpd6rfUmKSVFQSBSUKs2KGr5ZcRtYNmTGJnY1pZTQR1Dut4yzJUpM3zgYpJ3uXDbTw2WbCoMuu2rPK2RTC5XS",
  "key42": "2pDpycpzRXNxjcTxCQoND76n8TebKweqQgommZbmwraCX4Ng58HXVKp5N2J4kitpyhG2psSepmUY2nZqtKUe5AgQ",
  "key43": "3WgvDjW39AJ3Qk63xKqorwpxRV67tQtq57mC3wwZRPvvjLegESmQBqaQLqandx9ubzMw68dEefraUX8Zm6RFk6MB",
  "key44": "2dqhBnA79zE9LzQ8ijPXi4x7yUhNuTa2dQq3tK8NbM2Jfda3FWKz6xWEumULNtKZBz7hvjBe315BjenzFTAMtDSy",
  "key45": "5jMUtAG21KTCUJ5LL5LZZpehyzayxqBTKAYXojcQ4PjvQrq1RtHW3sJVMMBMPfCGTynhJMEQGxfSGgnnhC1XgFRC",
  "key46": "3cm1PH5py5gJfRTR247Q7yPVt1N6TpPaPUGMnv4P4jG76zmRx7D2mmwLx7ZNemKtrPEGp7LKEhfcKoENv7Dpfbyu"
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
