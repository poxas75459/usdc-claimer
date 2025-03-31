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
    "3naGGd6qP59vkvZTf8ygD3NRsmNazTtqDgxctHike1UpjV4pfh6ucESoFbnC7EQpNwdiL6wnQdajPQp5NdMcttnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4emxJCoCvaifkQnaLx8UcLM5Nz8N4DgE9e8soNfKEtTZFCNpeFqwDNjRBZPudBrHcJyemuhEH2QFX75xuPQhxudq",
  "key1": "23c3pf3mCfQwSgMs8ujdAn2X6tw9MLmLaxhhY3soShrHYQTChWnXjCjPA2mxUezGeWVGiofxTjczf7gK2W2WnAQc",
  "key2": "HnLw8WYr8EeZRADswKEhdfwhCSxEZkrxLjpwW7k83ZozQeK4CZeawZpWEaXpugUF6Rpv3evCrgbqukbhiojM7NK",
  "key3": "3W5MMhsQQ1nsBr5Sw89Quq5JcbNTCSUqCYXhAykPKq63Ebesu2ciF8Yq8RxviFBGz4TKtPixysH9kNKrLDUgzPLf",
  "key4": "3xVyTDAFSCuj8fkuvaTy8wpzcJuPPaRSgAdWq2Ydjd4qRB95kv6beAtfCN4RsrHM4zJV5xBb18RBA9YMYr6PwyTh",
  "key5": "4M9emaTR4BopYLALCs9Y47x5ZtfRQRmnFQ1HyY3nPbNxSGN919Jnp9TNtPAK5HXwT4sLjCHMsHtRcH14KTVhGUW8",
  "key6": "5xVHmr9NwGzePseSKyKoEYN2rhVpHkWRUsQ9aobe2jgUdURj1iaND43RUtatUtnXJujN6gMaJMJqcHAKUHRHCTBf",
  "key7": "3kg4XRHjPvDG1PJSpR7n3Wp22afjb5HJEbzCm3EsnEwD49434n3QKa9jLaqumuXg1y19GSgJFR97s1L18uEVBqDA",
  "key8": "5qaQRfNPzNqbFU82Z1MnaphHoFUX7FzKc1qmLBYyffhYHE9zPn9Yod3ysbsaxFcTrD8vxkNgCVeQSMpANrFsrqiQ",
  "key9": "owd6bsKJKqct5nFCHj92kGoCggX6kpVnYsQrs2Hw4qHRS6RwkXsUbStopEGDqT5YZNYTzXVFfAikw8ToUxsZeLR",
  "key10": "3WSdVLJj94qpzcTV34Lw1hJh7KyoN9WKHkodxBmwocrtUkeCVtV9kUzajEwCa9iYmfFcfcfGc6mL9DoY8n8sShxX",
  "key11": "5M9Ug4GkYuWJPr8VqcZ7KtUotCjhKDyACL4b2RyhWok6ZQCyNrFRrrNV4eLTRZWziMmbD41JbEGRgowa9MDmcjjt",
  "key12": "4cf868XsRAivoRTpREUiodnGezVZ7oufkdC2Qwjxc3ZyFLo5XXTqbqwaR8jfxBHwX4fjuXBLF9euKrR1YbzPwp6R",
  "key13": "5kzc67KvK1cqB9kXoSXzKCYYL1VSQsxeNzWU5Rd43gj47iKYDcDayX751rrs51TDtzkgW5KLJsvkNnYYA9KVR5Zb",
  "key14": "2jSK3LJ7h9DnASfsiMkvQKMHSTAM36NhTyuyr3LN6kfz9ZFnYJeN8zekdyNLPmrUaVT48PpyTBApo4Z1CgyiyGbG",
  "key15": "Pj1EUbfBX9RsxqPZmcyNauaRYHndPXZuNGpQ8QCDCPE4Z4MrasUwYn8GBkcq58wvQ7w64N1KEEYhvtw9UVajp9D",
  "key16": "3MtgE82Gd2ZL4qcp9VXKBPizdwXmYznK7ETdY2VEX57HzVWRxtyNAFJrc5BGhi73h3k5CChQHhV8uY6YP33vwxW1",
  "key17": "2TDE13nMQjMgnnwvQijXSXHXmPLnCt57oCWj5CdPDJkuNMUATh7tDpF2MLjWRgzcwKNDvA41V3gkWvb9nN4Hveui",
  "key18": "46dZS1qutgSt39BHtzshrRisgacjZapx6jYugguCSWh5sVo7bcM51vLXE16nCx1vUup1GgcRut9ogpBZK4yMaw9N",
  "key19": "2pxo2ns7YxqjCxcSH2ACh9GhJf88Ten4vF1XAmFKA4Hxbpt39DAprvihGmXdqowanxcEayVQDccdz9C2RhgVHWj5",
  "key20": "61KAgkwHYk9ypb3tx5feimYQiF1p1e988LvAoeQbxyMaRAudEVPo9VsZ2toh5QyERqfXpWqCKcjsEAGTCuGmH7Aa",
  "key21": "2P5msRLfEBonLZNomrzsixrRgzTSN6CotrkfXoxBuxQXacfZPzR1FUBwAsNj6H41eU94hUuPj5rf76UzDhMQNz4o",
  "key22": "5xi3JPcgnf4edn7Xt7UhikuZvpw5KwsDQ98v16fsXiA5Jh3GjRMm5We8phSpHrrqyis1JkQZtgPQEfauWZe334nA",
  "key23": "3nbkcyHt6C62tBK68YuQainduBQ5u7s836VfQns7SWHJ4y8VhWGCKyDFRkaE5CpJYvMhPvtHDBndydgswpBWTVa",
  "key24": "5Pb7qk8WqC7ymTg7fFJChsPehdZLqeGkEZ3oXz9QzzzysHTqA4FDfPprKxCxuh4TzUQY2tCF7sftcbG1teSsHhsR",
  "key25": "25XFYniRBkEdpigRBoCaY8DVUzaXqDrr3SH1eXLwH331Bv8ggRFtNgvXaPc2p7Fa2tzhHUM9bJqrVpXSULgh9iMx",
  "key26": "Vbn7h12aVAj6yFey8VLAL6prkipkjvsdRFyrH7CJ1pwpw9jYKSgtJprKGqQ9zDX6UxthBF6mSenxSpgWDRQojYb",
  "key27": "2dZsn4jnWNrDNDz12mMLd9RRrhpo5nnVn9Y37wJeQLzFviy2u7onVpGiV2NC97kpYy8vKxRx1kFnj3UeYhia7jyQ",
  "key28": "5JK6fme1VgnT2pZYQaSbgBkttjjC5Z1QAVKDJ45CYrzVfh8gZxxECF6x4RwDJGeCmZN694wRkL8qotEZkNhWxBkr",
  "key29": "5DHkzKTqZYY4vJAxXD4zfn22QLbGBfSANTxWXf9vyfyAZ4p3WGw81WCcBDqufeYr9eQJMmYyjpdDtKyPHy6mfnyh",
  "key30": "5QVUKW5wwFH975p4cJMxFrC3QB7VY52xTN7BcwHCR3rMinQP3fsDWSLiqvkRaxjHDVYbDTP2fBMRCFADjf9AaPQv",
  "key31": "2eqqgST3xZQkAzqMmFk2bUCxZiD9sM4HZz7jXXLdwmwyzTQwFDe3aN9BFTcn1GQcPeBoGQJAf7chBMibxoBQZunD",
  "key32": "2sSb16YpLAMUV2LQg4rSxqCjNnwW4rBBBcYmj5ap3bQakNTxccpxEvrUpC9kLfggQtUEJQcRU7Mvmf5rscV5WsGu",
  "key33": "5vgatLhfmRTRJR633fTw8n5jdeQYp9VvSzYgXRWgtJc2D2bSY3NG87AxHJoJXZwKH1vER5R5egVaWM6DoiATDBtY",
  "key34": "4cuzMjigSrqNWEyURHmYZiYoUT3zky9UZTNqboD3k4Wyujwnae7hz2eKEEDznL2bSXoKtBRpRJkPZwreRnk51o6V",
  "key35": "4uiLuRTXfU9LZRinxC8Nvh4nQiiaMH4jWqK7qUZtUQh9BQFNg6KjuKKghBBXGLQUxfwyBPjdVs3H6Bktf3q6ThLr",
  "key36": "4fezH9E5fGBBFvxHT3Zzgc73kqTDoEwhRw7s7jGSJ1t1fexPzPSobsLCJuo5eT6VHihESgZSScJKnWipeFi9Lh6J",
  "key37": "2QxT92r7A4TsAZeueRuTyZjVpxftMKK6k6H3mks2JYVSppyiFbaSZ744FzQwgKEb6ANtwpnYrsxJRrst4ckzYh2J",
  "key38": "4yLzbG28drbfsRDT8ptzQz66cP3nhAbJgKAp1g15WF4Ygc8UF9Duv9EzquExwHnncrtBtx7vEhmkYgo8oWvEmtKz",
  "key39": "2h1H7oRcQxuRKpGVV5niTLv5Tg8Y48nD1mZpFWqhBgaqPFyhdaVAnnJNNiQDjVtCYZxby5WJTLPyRvBTy5HL2UPF",
  "key40": "37JwzZKWiRyCMYMaa7eXriZDkEokBXFMzfXqhfMFryH1ELr3jaR8zLKjPSLs9cAKGjUpG27mXgBLY8ca3fhoBoJF",
  "key41": "5bku2swuFZURFTNr3r9Q4ptBCf4GSwkDTw68TJDvk2Y8j9PNdvouttkPaEsi9JZjPcJjxqADJTA4niwZiAYHaUvA"
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
