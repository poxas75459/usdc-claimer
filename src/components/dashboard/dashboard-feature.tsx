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
    "5C5oxZxdFiz8BafAGwTXUcmpvu8rXnzGNrw1imRCJ6mnwBpeGn66JLvKn89s9q6pK1AufL1uhVuxnA52tEpx14ip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mr6nZ8G6KZUD359yQqxDvS8BiqWBDw5h2RpZV294LsVAUoHiqL7ENXcau5bqDSWfg1ntkS5RKYtoiFxi6c9tb3o",
  "key1": "2oThTpFHxk1QTpNGqFZkSRoLXhBJ2zP1URa91HMAKg3X9Kf8DiZ2Bydht8umN9REXqGG9cmfv6ngBHyAibtU1BHe",
  "key2": "2med7wk1wJPejSvyTKTADzo51PePahrSL8PVMAbyPfchxGBBJetsFshkpbrf8wvbKL8GvWENVVTZQBSDK2q7LSpn",
  "key3": "2vvArjAobVPpwtmyNBqmK3uJpxJ96rCQwEiKpAi38aWdV2bURwQJSE7SczBGvMQULLRwDjiQuRqHMQPzReDBgLqC",
  "key4": "61sX9fEy4zK8kpGhje991KtcepcjpdmXrD46phsqsmMgFJPs2g8HEMiMLMXVCHQGgFJtokvyEhFUcrCqfVR5eZyd",
  "key5": "3JDKUjD99uGoMgVY2Lyj8bY5RanYvuebFSFNnkMAcVzwnxU8pSue3KWYQbeQdL1qSXGWhwdsbx1CtVw6W3B1rDGA",
  "key6": "9Kr8offJA5urbcG4sJ2q4XnkPzgrZPBEYGVSjv2RiurXC1yLvctpswdqpTgTP7SGAThPFQoA4U4xqXkdqzvPapw",
  "key7": "5dsRd5jhZmSQyBpM1kkrRVWHdUMvLtr5cv3BhrqrYdutW3cNwAViH7f1Kn9iYGtG2qYQB8Tj8irMXJceKQSVLAdP",
  "key8": "3SXsv9SMh5Qhz9sALm2o6VqScUWPxq4FXhu7TcNSgPFvCnSPYgqLNoqbT3U42cuKWnBi6HXEVpaCUbPuofevpngN",
  "key9": "2dxGsuSVjtx9bGiLJjW796fcWoA7uV7Ex2PKEZ1RXuYynq1usLcMXL4mvv16qvvr1fQGvgFjoTWx1bjLUAtPDBAQ",
  "key10": "2d9592r1YGuSobupnAHeFNaM6NueiQnysxWiF2Lw7tg1vZPKWdTZZaS6nmCsG9DGZrbggfptJYjui5g5hiDAUhvA",
  "key11": "58ma9tfLSBw24qmZLDxUaMZJ8w9b7hruBzPsYxAJKd65Hifw3SPVZcDASs4su8oLSWR7aVvSv31CCrcrz9Q5ySY5",
  "key12": "4PPDG4PjDru8BeHjQXg9wNUTu8CHy3wi494G3fLAcQknrFxpZzp5AdpuAvgQQMBWLyRaPHTkLRUfEFUcexXkRGUN",
  "key13": "546wu96Un7A6EsqSjHVLnLUXCXEYoifpv11UoizbcALjKA5sqdKodhezyUZXmsCE6kmwoEJ7KKHyZohiGfhbQ4nk",
  "key14": "23ZrFzNnSNADrdVs4AexGhXLDKw3pVBJUAkRoqqTWH4FsnVjfkCpZYFyrCoXEMmHtwbJqQaNsrUq8cKDQovsWoJx",
  "key15": "2Td3xA7rEcorsW9XpwWu1p6E5xLDzAzDZUpp8wsStknFdHGg8YPqoYpNxTWgea7UhdVG6KVN1nGFRbNHM2c3iyUq",
  "key16": "2sZLJrw8gP5U5CrXp8cMaH1qZhVfSo3xYrEhZ46JDVYRGXJ3NxRQTSd3CUmGLKZadRkiydMeeFtC3r6FNVzRaLhk",
  "key17": "368UYj4akRqqDA2cfewfEkmxs7ps7QhnVRzU3F3CZvpCh7HMteNrJDN8mmw1caQK89gNwqzaJrv6cCCts9EidHry",
  "key18": "aixXeS1A7BFe3pAyqVm5q9515hWCWKUhJU8BHN3H5Y2cgEonNqDmtFxpK71rw6TDWVLoS6enN8FkUxtMvNo3obX",
  "key19": "2u4T5hF9FJG25fY5H6VEQLP9ZPVsHE94Zihkgb1rkiDBvbfC9yPhgUFLc38dNz4sF8WNpZNaWwzDPs4ZPPaQT3zB",
  "key20": "4sB95WpG1G8PxXmTML4Db57G7SmSGyEpeB7rUrNCiAUZF3PgowEWHtdUtybGMgYcCvtvaSqnLLehga7sTSgwhtCB",
  "key21": "4ujzZDisi6GRngkK7P1CRs1jbG9pqkGHu2srSsb11Q8cdkfq75E8BK7GTzvSsKMR4FWU6WvpdW79ULMjPse8QSfZ",
  "key22": "4J7isSuvoUS6ByKDNV8CL7mM53ETESdX9yo3T3VA3N6YtBhcVFe1E6Um9AiuGiTspXJ8ph6rb8bYBdBxC1rZrHUs",
  "key23": "NmFhvsXJ59X4pRsmNC8zzQFG4gncVBC3yfPh5QLcLuGzsrC4zyaKTMpz3yTzPdNtKc4ogxL7exJCKaPA1q7i2yi",
  "key24": "3rdki4DLALYhHbjci7sLF4pJGvGfu76K8UyXaPzch39aGJFWFEGDiAKjfKddQWcjpDrzkvHrss6oTELgUcHgsoqw",
  "key25": "44EEjtsf3JjQQ3s4GZPP2WZny5y54RrtHWkr3fBC8CQPJ57QTkEv5txtGXEZLANxWhLzLfJvZY8WDtwyNX1BhLaV",
  "key26": "49qdbnMyTAG7KUfUMV41H5d1nTfzWnNreCMKYpHePVraR63tDka7PMU4PFQstUKhWqUNSR3g3vwP5USGRkE53qGr",
  "key27": "4CWstHyZQCPDfNmN2aBbF5zeL6PBu6gTQdnL5pXjRsbucXfMZ4e9DPSqtrFfoUdZfYjFqt2ZHUTAQYwo26fuub6u",
  "key28": "3KWZzSeMACFvmcAoC3B3avHSpVJF2G67BVQowJj9DBThntGZge7pnnUULgEgEJ2VSf7BbyVeM5y75gXGTt25B8aw",
  "key29": "5qSpbCYU5Mc63DmjdRqexVnEPhd3eNUpiYUg8XRCxbUws2xSxB5na3dJV1LRWweBPxrV3GiAmCaXKgGpdXvtxh7V",
  "key30": "62nptbM54X2to8Vk3ZYmr3WjnXRoeWae6B48gnAJh5Xom4ZLuEMkCtftWS8uCcTHb5UUUCxAqt3sWe59HF7LmWeg",
  "key31": "hrqLdk8Sy3Zux5ke9sL5TU1VtifCy5AYpCEY3rbf6fbcYfiAraQ3Xd1qQkQ7V9JgxXdVhPKxso6oyQq2sgYgnux",
  "key32": "2JwmMzisFEWtQKxaRB8ofjjHfiUmhT3Z7juwuyx3Yt5JPiEv8KTtAWeMYsPe3ayWMv8PrYLxs84oYzwtUGKGf9ZA",
  "key33": "4VEMLQnxEThdbhZtbmc8mkz7xkgarSNwcHL1frftqoKysPDBAWgkot6TGphpHCT3ePmERcpot8u53CCNiAumfQAM",
  "key34": "2midHnnfbp9TrfwD1wAFR4EDoA1eyco3QqLtywZuXSeQU8VewE4dtsYVqtjbSiNci9wbinCKM82B5FuEWDoEo4cU",
  "key35": "5vKyFYU685yq1MbRic7NnqGr5hWi8mPv59rmVkapjBUZFE4TTVMTvhW3X4JALooHqWMuAZc65v74B3MNWwDGATTg",
  "key36": "F856x4v9ogNqE9VtNkk4GzoR5apUNjPrZ98L8Gh3RLYY8opZfn4GmcGpEhvYxo8s7ZFMcbTQobafoQtD5M5aQQk",
  "key37": "3oZuBTgZN61vAy5bxSU8FoDZbfJVp2xW1gjc5WriGANmJBdZGu9NtYmX9znCdiJZiTydPuhULeep7NQ1qtroLKQ6",
  "key38": "9TRzh4X9ya86dMsmMgqWL5EA7yCs9mpdP3NV2nKk2FRr415LqtW92No86tW1azMjuQpJcYN9sKZG1F9EryoWtKj",
  "key39": "ZVSab257CwPgP6Xr5mq8gAzFaSe13arnSYAKdU3b6CogGXrGv4f3XEs4aEhp6nZNnsAYCTzi6dUcrWUQTnx2VJz",
  "key40": "5KKnyCMZYhg3HYBB9TGWueMJowvW5g2UgCYVtK1XhG5xpo7LPkK4P4veZ7u1qYaH3V2mu96QQDgJYivzyr8fzB2J",
  "key41": "5vfG1NN12EFnXtafqMGpQ1Usjd7tB3yZu5dcjJGqhfdntpwxMpfrryb7Qa5etdQhCGb6VWr7ke2PyXnHrPZCNkBD",
  "key42": "3k2khMCg2strJxo3FGwoSvKEiBjJLjosYdwZToHGLvfKq287DSCWbxZsLDUKPriwbneh8KLPpGukZ8gDLUNzBYss",
  "key43": "45p4oZaTJAcztNbCEUrNPCbLeC2Gvxfj52TVB5Cq7RnY3vr97pzPG3yPDgVLWa6Q5wEndXgknc9tupRJr62i6VFG",
  "key44": "3XDxP42s2mCzrkQwrLbZQ5wZmpXxKr4qpy4HCchcfb6cc6PqjkiDLT3bnCgCMtTR4aAojR1xbFfgxmS7FRdhESAR",
  "key45": "4Kc5h7v4y74aYpRCiDypKc6nYRitcaSkz2hjK73uNtPtYxKsJkrW8kpoSsHm1uprzgzddcGaV7ByJ4mFV42ztoyM"
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
