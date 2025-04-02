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
    "2AR6FbaamsnXkCoFRnDqqDuEL8tZsDfHxLhMc7wj8uod8i8f2UfB5HKXABZNB4L7HTE7Qw4Z9uwH2WpbMAo6eEsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGgm8wnT2pwrFUBGxFnLha9jb72SGc66D4ajedDZ2NvTgWq5z4nPBaoLoHGb9f1BNBJUBCQ5TbWatjMapTZCHZh",
  "key1": "yQx8WNTdBjPgdtro9rzbS6Kkb26Y7XuaP1AMZVtJn5PCSP8VaYQULedQY7qzkwjtd31iPkRT3e9aNHeVj7jWCDx",
  "key2": "XqLGRVhe5FvTh7zQ7FVWAgaFA2ufjphGfAoTTvztv6kDWYTLfXWNkYFhi54c7niAyD5B2e2uLqZUFQXxT7dvSvb",
  "key3": "4fro7jbDqknzeWH32neLJAojHhyRsSaeW2aVKd8vz4cxj7kwZ7YuPGJaUg8eLkg7SzkvKwwmFQm8MBsujAVYphwy",
  "key4": "5Zt9Lw5CKLM7Ze1KyMS8waskGwzJCoTzPuZXMfnpoSv4PPmNVJRvfsD3PsqEJRrdDMeKwwvXuwNDTwkHjSxssJGR",
  "key5": "5a5aaXzdgCUtcPHExTQtjx7A2ef2aKmsaFvHWpscz11UuDuXRVp2UcYB4E39ULr4MLzCQaWCpVQRV7hQRy8Y1mTb",
  "key6": "ZYJt5iRFzBagyE5TSvrzDYsVEpWbzGrKzjZD9hv2BZmsW1ykDhMLuej2Nke2wjecFCMrWmrHKhu1yBnPmCfshJJ",
  "key7": "3n1HZBq2e8bixsQyYXx8WK3SWLvEud1UpZZX2hhWzii2NYsSYN3MamP9yYSKvwgdHBRHiQMvo4N3PbvsBTTYzjKw",
  "key8": "3xk7KFQbCtTqimW4b13rVQhqb7DpphLBDxucpVtw8mipSSj15E7ao1V7hSdHuTKt4ZSeE5aN6L1jwFjTUAXmiU3b",
  "key9": "22ePkhRsmMtWzWgmj4mzXD4Tm4By1UhWAixyihdE91hZgxHFUjR7iqJvbZJgWUpG6YSUzLvVtdHKqY7qJyqLJLgR",
  "key10": "2pYnKUYEBsy1S1mVQix77qic6B1w2w9kqFahyFg8kUD9X69KBXcbQuDavq1SR74fnLK76iUY4XSJcmfoY3YopynQ",
  "key11": "2SWBp5MFgo4PrgosTjwD6A7jtY75hdhjaYc2hKPxDUL1rNSEbGyYgruXGujPP12cohRTQ7cukHqRwFnNhWCNUXSE",
  "key12": "4GbMVdFAH1vH12fGkFoKSPNmoKi5BhcuxtuA14hZkGAYkvCCBtWj7Rhi9JFtz9SR2DfKX22fQxQjemEca381brLX",
  "key13": "5VUMzy3atUWVELVd7HayTHTdTnjUkg92ierNfGGjUqGUnV14EXXtLYN3H2HKMpoeCJKJrQG1oxU6s7LtGBSwPAUU",
  "key14": "DQamoQFkU9L6vbTDbpmFg1E461GEZxanbReXiQHwVwDrcUuzBKsJtjvfXBf61SeQdS6Wh4E3XDJsAm3baZMwMHi",
  "key15": "37wvNGLy3CpGf6HJkNyRrdubLkJQYwmhfzPA9Fay9gYTtUFWymMDNs4pwEbc9z4GrS4waQNYawivXvufyr9JsRNP",
  "key16": "rgKKySndKC3DJdAdYAfzTMniLqJFN2PKneeQdhYoXSPSEe1KQygFFZX78xwHxzQTU2fDPAjLw4wBiFzU68xv1dy",
  "key17": "3WMb3GBQ7Mi421cRyv39Chkhqutpq8xXzJXvqSLAC3A3sbKw2FVpogrkGna8dMUKamEGGXTc8M2hBKeo7Y7rnJrL",
  "key18": "2H94xupVps7xkCvyszkteYWYs4qsbua3m4GxNnYc9DBkBMMPsjUS6sw7t6rCrNxXb1kFfw6nieZEB6LnUg9bG2Fh",
  "key19": "5i5odGLP6qvzXmNHSsHzAdgbpz3MTB31uVqxRUcBkXXBaRNtdvpJZKJxNLoSPF6fmnk7gbJuTyfdkvWQoWTyz6LL",
  "key20": "cVGDqaxthX19uhevQzRhShtAH6WE7vGRQRcaPEZw2ZFtUrwcJzHd3vfyVtztXmAYGwtiy8eLNKYB7j2UKwpebsr",
  "key21": "5BTX8ZiEhFMT3wktik9twY8DxmCPZnFwTpJfZzBUtS1uGMHjsMSPRNZHJcdiXpHTWsX9J4WyYBSPn3Tjtn4Q4nSX",
  "key22": "43y1QaBNvpJBNg4aubVEQCLKyAaMyfBhbernTboXLPUoB4fgzkAYCZcetDjKHzhRnympF59r2M2DkCEts9JHEnaW",
  "key23": "29nXSxDgsqMnWfLBgYb234aKgQzzNbsiEX2DZ4LZQiLyqcp2gX66hk9CgCSqUnoKNnybtxo9iJCdfYGbcGfUVpZk",
  "key24": "6QPJ1Er76aXXu76pB9nJy84tXtHV42aoVan3F6TBuNjdGWzPFqXBBX1WchXDzytDw8BoWqR3TY6RwbMhmR6ewDG",
  "key25": "52cfC7PJpUuNzmEeNA9PyCpDZRfEu8i3FK7SxZu8o9khr1yDnMCgUXPy18cRQS2n3HSHdF6ykBcvnzdNhJhb4i6X",
  "key26": "2ZJiJSFsS5xBkADdRwcU2rV6STFaPkncgCRa6dqhx5SKy3o44avWvnNTmbvNfxdocRJ5NSkLWgooAzpuBDWVUXX4",
  "key27": "37L1xr9sNB4dRfx49nGvLP6GQxtkJszjKN24gzFV8qrK9TgGtjZYV6FMYXKvvHWqeosZ9ikLNi9gtAGFEXP19NmM",
  "key28": "4W9K7ByyKXzfMTEnsjT2yK64827bqzHbsNboEv6UZHS7opATcavEE3rfD8uYZX7p9r2cPkovQcbHpNcRN6qry9E1",
  "key29": "4DnMF1nv2aP3iLbxCegehQdk1iG83VTh3a3zd9krFHLemKRCEUFM6urBFqaHjcGoLFhw5278gh5Zvbh966EY7gHQ",
  "key30": "7iFkvfmNoAQHWf3ucoMbmc8deYT11nSxAFB4yGKVA9XUfriWkb2Qr8LJdt5xeWgi5qyG4g6fD4BoCvoJZm1AKyx",
  "key31": "32opKzbJWBYHC3x18AZVRYDVEkEVSUMgZ645mcbsFknWPBtPSzdR8Bw87MVG13zd5ssfeEQBSjTdZNGTURgFPQgR",
  "key32": "2osaaUFSgJe8VViM3nFEG3DTUXCrJhFwHriTsYvPy74e15jppMSN1QotPJLEvrsy7dS8bpg9REedDGqr2vwiDAKC",
  "key33": "4VVCHrZGpCWBPzFjVybz1eBwRHfh2tjM19hPFqKsM6saxY9ZK3176cFZy9ueiq4VcQ1pu8CBX4mTa3bjSfKBKtgs",
  "key34": "AKPt255up6DeTxfWyyN83TJsNu1YtpVnh8ZEQNcpVWnvYL5EdvpTWsDpLH7QkKLpn7wNCtC6TNkXkewwjuWgifh",
  "key35": "3QwDeJQFdUp65CA1PM9rwHLjZYcaQFfzKQ5cAUCrYFprqWMPf9SpwXY2rsS66vM2aB3yr4D6jDzpRamcbci1tASP",
  "key36": "61jJR6yAR6pjpL6Q7ib6hTd7R1VR8XLwHKETR1vmVXW3oEpRCfxK9CQaTBUZ5dvm3bBn1e7oYA3zR55ELxGyvpbc"
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
