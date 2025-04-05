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
    "42BUmtWQinJyQgzq4tNGrwn5J7FkfBHoVMyf46csqCsKZ59mtPgjLRJyGphHVqaP44M3nyLH7Qbue6wGivz8eiMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AUyHb9nNFJHGYUke8po6Ej8hCwBTjcsK1zTFhB2VKDktTXK9ft6MuXeKpUvBMYch16AVkUhVzVPT3zJDSaQg3ey",
  "key1": "3CX7r56Tzg6YFKse69dhUdbUF4uSDWPTmYGX6rMSg48WrA6BLEVnoxtVpDT5232atFeRkowCJbrxCNPUMTKs4pds",
  "key2": "ukGRwQGFNXoTV2vcNyPdPJYWeV8bLJPViAJj1UBMcimU3kri7JHiQ2ubbnqBGPAXW4CdFyyre6WGfFxnB9wGdjR",
  "key3": "3QeQnegkS4XDNgRHhhVETgGCx3CyCwBQPVLRxCY6GxqUxQrVeegsibE1dExD3LhEbguUqh6RgwJP4GVvXeHHe8v9",
  "key4": "4JhAbU8XbLtHdKZKNMsFHv1j5LkFBUGCUsV7NwAnKM3qxoZ6sSdU3TpXgVTJn9KRjeWoBLnKmgBDxJY5EqQW3qcp",
  "key5": "4ApLBW32HnBVvi177MhKDT73JFe6gGm56Zo8JXA7gkTGUQKzqKvCgsGkucJgjfcTAn7yPRy1Mp55KbwM7FGXNPy4",
  "key6": "3a9BdE65iY2Z5d7M3H2iuYCKrrMgCvxLyZwoKQi1AXzpxkXEnxqoFrBN4Hm3zzqdRa5aLoZ7qtfRk5oytdfZqTje",
  "key7": "27rYgutd8cXSxkTqBa43rCEWQGxhcukWudAcosZYgVAf7RRgw4XbcoXjvaMnNQRHSQXuFjKzePzsi9rzn5muvbQn",
  "key8": "FZbfHrdD1P1AXoh6KbPMwEK49TUonnukYdMf9aw5J1myFuz78FaihDSYgMXFXoAvzxEP1cB9uXXUqBdgqZKPKBs",
  "key9": "3tun3vmTKsGBPuGCYFKT7kiNWYnn3sCLSLF6F9EM1mqN6Fbt5HiSPLYyQoKE8ReHoJBUFLZMSEJf3BCmESi3unrk",
  "key10": "43Q6iaCEN8w7dsGN5uLkKzZ7n75HoxF8MdUYwzGiGd8pHx8RXuKz1gLPwhLFsXZ62ejUqi1cVSZFPgXRraPcUhji",
  "key11": "5hnmh5efG5MGPUUEVtSMrMJcLjEGxDnpJGztX6CzgKWYtKdHKdkVPFf1Sog7Hn3kA8VpmFcgxCfwEFRBrJLyZxKg",
  "key12": "4U8e3wzyC1hoUWUn3gu9omoWrQRLhg94srfvSPUHPyWNmCo8b215DS1LCqqq8pMJv8qGShv3PopfQddjAhhKPWNB",
  "key13": "5dVDjn8bkCwi5dZyJoa5N4ycwRqgz9HiPwbpXxvrmWKNdK8nb6NDZX55U6Z7uqUScixTwkTTuBgHZgxJnWwVQzEW",
  "key14": "4BbvPjJHgFNKqiGppGsu43dv4u6f16iQvMs2cbj3LQS6GseB1bYss3jfeowinn372Gbffj48XTbWsgEhTZopUXGe",
  "key15": "34VSRpP9iwhLPD9uXaJsSMMhdeQc4Xpp6VUHZQU8jXbf2DLfYz7aRByic29Xi8HtnRcPiSPwomBVFqTHx9uKKx3W",
  "key16": "5vWpb7UnRgdLjescGbeKz5yJgWNapsRC4Q7TvAirJVQEpV7qE3PxWzPf23UJd7tgHkDp1sKMgtxdkTAYcwi2nhJT",
  "key17": "3B5MkmCrCcuNPZADE1ZKny5ppN5f5FKeNxkLxT7Sz4v8FTvQKpbhQUAGa4AuxZVxknK7wC3uJX84RQPioDjwenuk",
  "key18": "4fvg3NQCbN1gQ2R8EtHg8n7bhBwAiL9xUfMTxBaaAHqjVnmaVo91fLkkPYpSHqZ9cY8pKg5hbDFbvVDSDfVHpLcd",
  "key19": "33PyFnXRwBbW4CNqREzcX2VyQXshn54EwAyCqAuBYunLaq2mFGdqq5opv6e1ADi4CjatB7mupkgsJgPbPMf8JbeZ",
  "key20": "3yJt26FpoMKprLvki1MQ62ndib9h7BFXjr3yRhBCEX6ddU2q4QJS2q4yYE2Y4gaEc24TgdMd6EyYRfvTkaPW6Paj",
  "key21": "frV6cdUm3UMF2dNLhtpvAtWgqH5rMJeSoJkKoyXRP7iu6c268yNhzKeeq44ns2EY3Ahcc3engyLcFrngSDETqLX",
  "key22": "5peqxfUqHwkDtUsrGUSRMV4FPz7Qa3yRcK7z548Nj1XDVyw31F3kCw37x9i9KcJMMDxBWpfT9FbNqHpn32o3t8CB",
  "key23": "298wXCv3neVizP4CLvxk11EpU36xNjxEtaAGW3F3sjzqGsjW1woAbHpCW3cR8BUhDV7eWBfFjG5tBb1Efh5VSWv3",
  "key24": "2WdWuvuCYnUFPN15PERkaksyGPu6ThepuqDu1bMjyEBkxorrbRtDKChB6hwir3UD7UkUAoYobsAyhXw68dgui8U5",
  "key25": "4ZqfMwt2DRU2gQzV9q69Ncj99P8Y6uec4KnMcbwbh8rTfnQC6V8QdT3MDaa3xZSrgqcU6GzokXSyybuWLfcmi62J",
  "key26": "5H6vzag8bLbPoTCj4Li2HEVUMBnFbAwiKwGxuVSgd7kGjCbR3hm4MVfyDTdHepSZU4TJS5f1pQX3caqYn3QxemYu",
  "key27": "546QhSgBNcZZ6CiQviAS1jHVVjyVYQsGE6bkAxt4pWJFmkPDbZjPtgaHrGP6ymv8mc2Js1s9mhZ7MqeFHNVcGZes",
  "key28": "2DeE7vrkVXB9VEGGNi4r9De21F26EmjGuXdFgJf2scVWCfskbvHDxVN9xNUVvXWin1HwjrPCJCqg4QUKtYhjMaDn",
  "key29": "2wMSVZcxo41Rk5aKNuKXoef8XjBAnJj7aiDDVY8y6P3eXXyj7pSHref3utQVuceTntoRL1ErYyfRn3JVo5sFfKYH",
  "key30": "47KiVbWWhtbaMTnJuFo34YHiQZfKDcP1gTD4wm8KBrwNDqkfsKGnfZhaDxQWhoeoZPbL5MjPA5Lq48XqrucuHKr8",
  "key31": "3EjWpcA7yXaWeRfsvmURFbmTL3sZReQzseBSLDEdfq6KKWE4TAfvZGQkDAoJFEtWPhxMYCrqzPCYDupqAiVcRquy",
  "key32": "WbqCpePhsgB6XcZakYBVpquWYvBWJgcVGdkUSGpDsTSV78tF43Fb1BKJS2qgYRasmjEaBLa8vP9hPpwwH6twMLM",
  "key33": "NKZ8EtdVK1ExkAfSLYbz8TUhjrQw6tmwTUiLBgc56AF7Ab7iib1o4t1PYFHYzoy4YbZY6aZThyBWLGSTiH4NHD2",
  "key34": "h86SWuqK6PxDY8wpGTfm92N9eyUJ6r5GDewEGEQPWGMJ8ByG4T8oKhDMFTonUxLsUNLyVfQkQLCJa9sqLLRBffi",
  "key35": "2rJD7LKdsffjwzCqrEwuGUjQ8fRNq3JFSZdctAZa6v9adPrd1X7HzWivXeeijghRa885DjtZhtjqjQxz6XETHSiY",
  "key36": "5pZzkZndxNrptWhGyMAFfYwcDiwDWhoxEY3m7mFY9kQ1caCyPxnVKkpmAqwLmp3D1EdYyhfKZ6H7rhD53gMYeT5J",
  "key37": "4LtskwFmrbhKYrkEshEfrHVE4EiGH9u2kNw1WF5JLQ8KQFDDUGvFQRQgkBdMcDrFAe5aVanSLAkKemLNZLhGdUhN",
  "key38": "5AnKpNQLmRAkczyWNfbSi7AVEPfCURbfPiUgbVTDrNdSqHpqzKTokDE1rYtjJsnxC83G5e8bdjZ7ZPyeBaXEY56S",
  "key39": "3hMG1EAva3SYNmBSPGcRp2pUJu2XF1RyLn71ATq4hGRP3Dh7iEB6he4TA3irtkF6fQSXi8UNYHNZ9XTzDUPqBrpe",
  "key40": "3bREGdak7nyGUj99RpBr3Rak4mY6AVHAeqmtRRHTY1kkmFa9BhvhkNZFxNkTVutKESX9tyiMczLWDCK7ZyA7EYL4",
  "key41": "2RhkkfHBaVcjDR2u5avcwFVUDQ521KC8LRbShhmLNurkRti7H6gCgQzScAU7vg7FiGf72MuYCAPxGRzhfZfb5Tuh"
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
