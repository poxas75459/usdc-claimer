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
    "28AreE9pzucCz5Kpvgmro8NMK6ZZcSs4y6nMNe16Zk61hCzzJjxyXgzbkcSBHn1RAFjjUfQDVyweThCvxZW5ot4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYpUQzajT5ejGTAjx587uqxnJpGNTCmwaYhKQGBZ2pewa3cZMXXVd8k6wr3BTbxW8VhWSDnzCYkjCg4c8h9ih7N",
  "key1": "YBBLwuFLywGzJfsKLuFbngeiXt7yhXeDy3kD6NGS5ohbwKLE66ubMzKWzXRHN2174SX8fMsdzWQbAdSuYSWh79d",
  "key2": "5xtdBpvui9vj8oy4KtS3LJ75XEEQF6yzAVzSRfM21H1Ehr1gpEd5DnTNQx7zEADZG4kcxQ6MCv7D2wFJAsHFMgjP",
  "key3": "5DuN5WDWjL6d4kpE4BeGzwcu6QmFE93QaVsk8BX89ikP8Dv3uKsQBsQN8hwZha5cFQae3ZnHf5kq1Zj2Ha6fVm4M",
  "key4": "5GJXjnscLWKaZDcDcSjLnzKFtpFgSRvyU2DqVod2KVLMxpZe5kUMekLFKvrVg6LmF26kDhBrDhZKAfToZkAKvomx",
  "key5": "5rWzAZqPEdLkjPTudtMfx6GxGRX5jaRH3JcNYeVL24haJpEzJ6bP3hgdBTwHdEuj1cNumFEPKuJ4fzXvN5YHWQPZ",
  "key6": "4ryv3tii6hdBtwPt78GpjwPozCWZBwBX5nfEGvfxgeNPt7v89rfKMGm2EiravTWrt6FqghMCkyeLp6gG3pMTAvmM",
  "key7": "2vwEGPzzWYykpgufdsbx76KMbeQZ9uBZwr241mXZP5TdL7avZS2HPBFNNqondQt8WwVbXdoCjqGR3vVEvZ7WFPJ3",
  "key8": "4UUx8HAspJHruNDsRkXsWF5Ysn6uEpiDp6we3iEJGQ3Hbs2dgMPiceDwViPkk2nJSB4Y5ugbfttXZFLf31GiB9LK",
  "key9": "zAYYg4uSwzdt89vXWLn9D1dz1MrTt341VyHpz4RP3nCH8Hae6MYGeUHPoNjVnsWyiPLEFpx3pXDjN8VggabEmD6",
  "key10": "27hbFfRwDpcoSCG4JAYU9bG4orMTnZwXmy9XmuZaC9MoUB5opRnsPV6kix8CB2Xz2UfKgtDKQTZjUUkAk6PGkNMg",
  "key11": "45KSfF7rLLyty2c8QZGxxSDdfhh3RDNjwT73zp6xQv2KpXND8Yd4qWjf3hXuTg6Yr1KsPFcpjaB5Qq8mTGe9WbZ2",
  "key12": "5SeKH1n5PKuVwGa8RLc7ErbQPt6S1pAb5vHuLLw2LZhyL4gFDJRDzRcedUbLo2x9LVieZhbHrrCHt4PJnqZKqvZD",
  "key13": "3QSpJbkM17aYa8UgT71Cj8Y2J4eGpS4giBDSAwXNshzvwtSq9ezNhVRK1E1ZrK6tG2k9JrH55DrX4UaezpFJbVyB",
  "key14": "2vLWdBFwszd1wV8PNGX4NFBvgdQc4RpWvFxSRLuazTH8g5QdgccqGq5WazBgKE4yFxTkZex9SS5FkohVAFEit1L6",
  "key15": "2VbcUfGtoitosGYofD1M8rvgWLa6vQw1pULshiikGh1FaZZex9pLLvjn7N4amjdqrHczzwSHutwkdpWBy86MWvMZ",
  "key16": "3tPE3FnKWgDb7TGYv5d8mip2J1s3xPGprZiNk16YNfpL4mDskXU3mqU6dBjX73JJ9af6n8qpZyBKPcGYQ2o9dX41",
  "key17": "37PsctDLTYyKUEhSCcaGWJi6Dfbbh7GYLUG6moCbpJVXqC4ETHwohtD9gJ6PHyc5h77zbDZrNMCJquSasBNiJhEA",
  "key18": "2x7Brru8EJxtvRr1v5Lzzuwerse3sQ8AVcNXXJUxxiyqw8xp7RwfAX92JrsJztadUrt5dAGrpuZ3RsUKETv3sTT5",
  "key19": "eFtmD1Q2Lt1nBjCNj1aBYNJKkZFs9LaexRXePDCBBN6NRox8Hh2sDCrELsfPS286DySouAE9AQApwPMeLC2DsMj",
  "key20": "3Y3wDmcFFU4yVEFb9wgtKZevdhFWxDZ7UHJdHZPcg4L7fGQot1ewoq8cFbDq62Z9KZfksDnWg3wBWySWgQdK3qYs",
  "key21": "2Y747a6vL4bVVkz7GVrptMfe8DpXx7vc8Qox1zHNmL7Q7GbwpgkbW5ghBFiEnU8FfMXtERxKb3FQgye16rwAubqX",
  "key22": "yNE58bGvFMaecZPcZQzwGbuG657gLuxgnDYE4rL3HYiPoD5TewKicwRuLSPhSnS1SGBiqTGSaDeQ2Q17kXf17uZ",
  "key23": "464CNeA3dzeLUB2H7KAaK5ZKmdZciSsJ4RWxQ7nux4FiaSwBwtkgBsRHKkKZHc6G6k3rPZREVTkSdFFVqryrYrgn",
  "key24": "4d7K9L4yY3rXFtHsAM3K8D6Pw27hnNoxUBzj2rZXdx2Z7p5qq6EKvHBMfWwqqFPKQrBwPhni7SuiPhW8SJXymqzw",
  "key25": "4nvXXoCjWUzZmyYFvSDp66wDfCMDbiPJhXCLD4NxdvzY7Xs3nEFuDCF5DJSoKgiD3kT4qZKtJX7dmja5Q99Cdscy",
  "key26": "3BKK8edXGPZcbrrCs6y78Mn6eATm7F7ywLrVtm9ZQJdW7Ns1oX4K7v6gM4cfRs7rg3bC6SXxR1WKBSnnyi55mGr2",
  "key27": "3Ct12c38z8oboGGVU3w5G9gS3mztBuiC1tSE5r6Aj7b5YfEfzUE6Xc7QRPP3A6AwzzneKvBhAvrkdEu3ms8xEce3",
  "key28": "49nR2aVd8KPJmsFqeibSzTzT3EsqsJn2CrXJ9ddSLPe55PHqQvHstDYKpZ1nwPYWoNfJb9tDbSNCGTrjRS7AX2YP",
  "key29": "3LfdJGBn9Q6LZ9N2yDzv83jpKso38owxv6uE6Kqwjs8GjH8Hx5JkxVeGjuYqQbnB8hzmfyNJgatrN3hN9MxmNkx5",
  "key30": "3XmY9upHbtEF5uEUfJxzMz1ysjibkUPuDW7w96KDGRBaAJxEkr52CiRobH2Nw9KLEZ1uYJYTkFqgHtNRd8CM2enG",
  "key31": "5EmW74TwZcBbsouwVSezTCLktszeS1QQrFgSovkXtqLyxGEhy7jhPFuSovBZHyoSw88RQhrxytLYjfWkLLW1nPD3",
  "key32": "32h94YZm9SUMSygHoKHCpDdfT2ezhLZdox8F92swBueu23pjmLnzqojYG7yJ4TarhifHLbiKf3iPAoaHuJ2P9bKv",
  "key33": "4aQw6rDXNRyB6gV5tUaMRrg7CMn7JGbMehftKNKgFYXqc3nEZVu2sHr5QTfnmHCNrT9LwTpVV2qfUnaha9SNwpms",
  "key34": "aXs6yhZEjzJr8YV7qt4pqb9Z79AZBuDxJRuTcHwGMYpYTieTwQZYGH3QwT2bwtiXkrLVoPcSRUAPgZj4CvYzx8U",
  "key35": "2iYybNvsGePUWaoTyKs6nveDDcJAfikKJa42w3pzVDma6q7qTYMZ2HpwuDN283gZXRmPaMMZYmxJ8txRe32TBz94",
  "key36": "3iVYYLUkL3cs98g6mNVKr7Zq3bB4MNjT3kViKtSFxQ1wmrN6jj2cLtHdaNdgZQNtMYNTARh9yBDA13y1RjmQTRA2",
  "key37": "44LHx3zKHaStVhbtta244vjvtvubEGKUr6ctKiqSWGAgETuKFS4NjPccW62h6XYmEFTAAu1DTg854k6sPAT831et",
  "key38": "47JnqYVhdfmjo1oHvViXqPFn5H1ML6WuuAtXLAY7iYgqPjEVF2TWPAEb1FNQiVHrDDuHejharttVxBH8GKQC6tT9",
  "key39": "4sRrCX2S6uWUBr2TstxLSpWka7mqR8HtUSCzg45YZoy3f1VkXUGWBoRiJMfZwTiNxELFQQ9TLddfEbbZ8sFrSZ1Y",
  "key40": "4KyWgsKo85H3AfJD1tFbETxmTC9FqDcdzdTaLz1WQDYQh2iPqE9zqNBNt9VbcLQ91CLMcNAE7YTJMTSumrQNZQga",
  "key41": "4b8ptBDzPFinruTp7vyLCp2uAfkhXqeNq7tK8AhDN1QmgvZJp6BXHHQDyE2AF7ssnZtFhwrbEyFmadmV8Lo9vZpU",
  "key42": "3iDiZTiKKeuHky6CZRDDAeyBx8C38MYP7gbbZukcT9czD6FcaaaiaoCXujNAf4c8ZQ1zJGoXKv2UJLQzz55CZE9W",
  "key43": "5XJdY9HtxxaDskaW8gjLobRicDPbwHJFdMRAYHXoUxfcNsYPzarKPt1ymwwjEPpuNRcuULsuixKKRswuvzPzTUwa",
  "key44": "5gwiYNTHcAo8STmh5Je9eAHoZLsvMcs25CKAZj7rM3gS9tqeadFfgW73jHaHobkNMsm4yAFfwr2NKWEGT64MDjC8",
  "key45": "2SkMsFoNZuQmGSuJSW275FXkK9jKe8TDZzo3qsNGsaVSutNzxov9dcE2i6iDHDotmUpvqKZUVBsDc4dA49YgZrHB",
  "key46": "4Nd81tu178tP4nDaHxYYpu8QHhdKx7jxRfBfX7nuTjwkUT1fSMuWBMbY5C7UnNqXYM691D7QHhPniVxr348Eearf",
  "key47": "5ag9MVo9R9UP2TXgySe9sPCPTt8stUPJLmF16SWjvtEd7euMyuUU7LRVDKfkXrBYCraKnR6UhZchgL8SPBsfAHR6"
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
