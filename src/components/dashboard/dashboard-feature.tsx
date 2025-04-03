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
    "29TpqhW3u9DCFjpDWdyKLq1TKKjJ2vbquzFXHq6qXnyEAwFwpKmdDx8qRRmYnE28Z9CUDTpGunX46DGpzHfsmuDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66MrqKKi3ojPYMtJiWocedsBYwC6C89M9JnEz2pZDoMzjTWjGtDsjTRWyAnzirFf8fzHRnHT4Bok7BaERxvdwhRF",
  "key1": "2Gy4fpxT37oA9GewSTQH6uxQHeV5qPiftDmjAGp5dEDANhN7bk9GukmSwUjDtaXdk8AKdXrsRTk5qYq5FshrMDRD",
  "key2": "XowUvsiAFo7wyb9Vr4vzq3Zm3ofr3BcaJqzBvd89bowKagfJ3hTCzfbX9mncqERcefoxgJFfhvSGbuwLiSV9p7F",
  "key3": "5YcxGRnLGZ7o4H7pmLPRFioja99MhLXYYpHQqgNEm13y6ccokNoGRCYKzsZcQzWFMJMjb5AMWgAgXPcTLxy949wb",
  "key4": "xmDDhyoDeLxZoykYTwSGZA47dLmpb7sPPLgBKBUKj74dEH8d3qUaP8hdhTkzXhp3uvd5Z6s4PnXcfxynnFjHzH5",
  "key5": "453kcJ7iTGkmTHSpwFgeffDy4jSPjNpt2TYMLn3jY3oZWo2wFA2GWBSkiJdMQ5YTot6Tm8KeVfpUSa6g1GeYtbUt",
  "key6": "5tLwetQNK1HEK81NL8atmeH29gbmULgvkg9xtp3UhXjMAaQa4ct4aKQhsXvCGkNb6rTjwocehBA7UXjHzWKpJmkH",
  "key7": "3URvazsvimoR8FEPs2VnSfvLbLMt6brei95A5EBrrV7eZVbNWS1Ti3BeLKosgPnwSsVuB1cPFLgnerrf48KDMVF",
  "key8": "66VgmFjBhD3BUq22khqfWpWNsfnZcUGTa54SpBqQvSJrMvpg9pyL8Up2AisLdXuU8YqsJRWXXagg3ijVZ3QhJ1Fg",
  "key9": "4QLw7CePW8QBQLkj2EAafnjas1LFKUJap68akTRdDRm2FnZkRDnXgUZpjYHHMsG2BYnPpCkFv58s6kPfpMVedDAL",
  "key10": "n5wbQdW9XfGnQnPyd9dNLouisTrrsFsALr36Lrh3HFuhNQunyZstLzm98izh1kNAXWRDi1sTNXZZJ9VpF7j58au",
  "key11": "5nn33kyFqM3TzBAVnLhmQdD8hh66CDwFWPymuD9DVaWUTcNwpGxmv6nkrh9iNP6RcuJU3DaVFAiPw1YmQawLZgsM",
  "key12": "4BcnfQoHYkMsM6FQ51yZ1J8p91RUZ6vRHZHNz2r69gvfiJCj1w7if34A8YNLG1cmc6BFxnvyUGEYJdkPmA1CQ99f",
  "key13": "5qk6Ye59e32KUMYxdG4Nfv84CsgN8cbe4VogFZiFRT1X9E8s5uKN7WBDdfcM1v6GphNwocpu7ruwjg7GWN9fGihD",
  "key14": "2PH5iNpvmRxvPX2xjppQ6EMS7HszMvD6EZhYEgtfYsj2HyPRxQRQnp5dXmGuuKoQd9gHd6zomZvctuK1qjb1pMkC",
  "key15": "256DwRs377r9DfyFKx2oagQJ1RhzEnUGYksXPqVXsbb298yCHrYiwmsnJsfYzTKwHEvUYtpPNeK3d9va4CNdEjJ8",
  "key16": "3iRMi1tnsKQDe8Pz2fNbtiED4E3eyLqXhsxf6mf6oQMxwBv1PrbekwJKhUekgvJn77wD5NrHkfBBvwkpv8bE5X8t",
  "key17": "MZmFETx3iTo7uxpQTtpEjGJXHw1j6cBMimk8SHnLCJnWMYPPipcUYfimbnMPCJYsNqu6QTL6DH5fjj8qjMiSG1b",
  "key18": "3ZUV9dwpMuykidLPw29keiu5gBMWBGCL54Fn6rm2eRsV8FTVKRqRC9QMGLW2pRoHsB3RPeTiSyxrTfGcm666EdFJ",
  "key19": "vjYFA2uu3XESeJc4DeyJJbMiccnaeJdfwfJXdjepiTbDnz9VVmKAjDGHduA41U3fa1DYUY79LCW7GNEdqHN4ESx",
  "key20": "3VGHNBk7DzKm7mSQkbDQZeNDMke1Ppj8ANNUg67DNH73WNj4TrErK3CgDBdXoXp6AsDcGkedhcHgNL66hcC3PZry",
  "key21": "5oE3JqFpQzC3GwqBb33eoXrX92jMBzfiU21u44KdeALWjUQ433ehcjhLkvzDRLfFfoRupRqmQ8JFqto1kEfgayB1",
  "key22": "2yJgKE5pxuhx84EvS86DwhJKC6M7JyMNj9dS7y8KRAJfCWWEfeagHxyYKWwxicRqae5MDNdtuMqHwLsAedCY5Qzm",
  "key23": "3WrcpQY6p1uCC8cbvd76HsytZwtd5kwfp9MBAbzthyqvuxJbzqMUiKkUe8dLXerD2MPVefzxHnNhJbfV9TSZg5vt",
  "key24": "5E5fvSsrtsjmD4DEhBd9vKvykqcchsdgTxjDtYovnF4hddZtTU6YyKAGABX6xTZxrMqMc57KetDaDt63DwhySvpN",
  "key25": "3e4GwnLfY6v2hVSfAYV4wgHTdLss2TmgdBsnYPSZxWxABUGke5Ewoe7B3duAYAcMFP7d7TmvMNRtoxpfzobemsSH",
  "key26": "3ddbdXH5Xf5bhYXQkcJCafkyoRDLaHzm37QzLQhcGXnSVwbK5AZeCN7fLcpdaKNNfYzVK25PzG8UJrx72ZtnFSSh",
  "key27": "NsBMwUkuhFzyviYiHKdm6PLjVC6y5m2Eupha3zxvWz1vjdnPXkgXkscN7svEfgndsJ1TC3RfiAhFQd7ifizpstT",
  "key28": "3PxyVHurA3QV27WTmnAk6wcPLLVhHT7MikhWqQ1RAXtRC9muMRzckDxVHZe6o6g4jvM2XQ758rw9mzXXbVUVBwu5",
  "key29": "5q2sZMUouTuaaH7ZnDFRSBx1THEDbrr3gqPsPCHQbSi4z6C71UgLZFsrJ5kavjceQ2w8DtJNHBGiiLehiDBcNGSn",
  "key30": "5jqJQwyHEio96gQakuarSn7ghG5DHHmScuVD4RB1gdKESZTtHTRMFHvfFARndGGGr7mnJXo6nryQvaTkjPG5rHqv",
  "key31": "4cu8ej8MxVLL5EfEbakY9fp8ndBfh6KFkQDc6a6rZ79ANE9aVADAkhD24dte8CMDBKZC7tLp3qCFThE89UpAAq89",
  "key32": "4eNNBNmWAGqps4aCmwJGh3c3JPyDnaJ4aVRsp94e3AJEoimauWgSgmJRywETvKXjRmobvEc5SVUPX7jAyLb8XYdg",
  "key33": "4ybqDrgqNL6fXWnp69mYatXcSA21d69r8DnrykBmsfPBcbyR8b2JE8ZiAV5LbM45XG5f3A5majAgiK8cVeyLcKxT",
  "key34": "4RErQkxqq4b3kQKRQLgMT5G99CPoRL4diwbGzarJD2MK2NhHRNwomhmrWcMPt8SupJU8Vpw3ihfnfJbrwH7x61HX"
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
