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
    "62xeNwyBSb29eyF8baZuy2jS3NVrLagz6pQXi3hmSSXEBeHWSecGUssmWdFVye2ybVfarybQBsSGVBiHJhhk7asB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NPR6cdVhxABjheUP3k7S3Bz5q2ShGQtkMF5MiN67gQDcTRdf945R42K8DEjM5jpEP2ECfnHPgCAjAf7YEYrVZBf",
  "key1": "23zPdpBo95a5dSnRMKxsz7SPSAaVoCfMfHpGJjbq3LctdipLbtMzbhVp5QMg447rbFfbim6tiZAYrGDtZMj3hqd1",
  "key2": "3yuGuMgP6nXZ3Q2uXjQVZkFn9kQbh9VY2Mt9Evh7VZrxeVi6rD7KyeX7YWc8s1XJzr1NtpreBkyCEDwMvfQsmQWv",
  "key3": "52efxpNYEM4W3wnkSZ1FymqmRgq8yRqpHAsJgVCKDbAwcNPMDA1tJp8UYZE9w2nZTfXD8Do2RNoAyaQhXXFx3giL",
  "key4": "333mAcMt1ov6CKSWuyFGnscNF9DTiVEtfJmLNfjMeUxUipHpD43WBKmNRtTvEYKaRbYdVPeu68yhZZvtGan6pyhh",
  "key5": "3tyDSxa7ujNL81nicuf2ZBAM5WBKHTqWmcsdm3mHrmtEBkBMpUAhyMvfr2J5jRKTQ4DWdtkMNnMgHv5Hq6nkgtCg",
  "key6": "2M1GsLvw3edyhoZq6qpi3YG5dzNufKaiDNFTcLEHS5YHJbpjvoVXcWiYAJBPhtPy1DzSXmWfr34bTaHArYF59Rsr",
  "key7": "3o5JJb7HS9sq7tS6GkP4iFu9Rkh2dwnRJNgxMKQUACHCFtb5fUhVvksSsJP4roNEEjTsFaRWvfJRSF5YXBN8qJko",
  "key8": "55A6LLgJGt5UD5qRvXkHKmpcZPtnD9Bg1tXm758ynPjB3NYZtqxRtzvKWisXMin1z6BkfEqeN2vUwywyThyAE6b8",
  "key9": "5EKejmi3vzKjFwaQNHznKzuHyZNUV92RAiQaNMX2KUtrReKMUp5FajEdcuyeoDvsH7X4dn2bCCN1gVdpv7HKJcRH",
  "key10": "Q7uuKgxmkdGjdbmwvtLppR9po2kKwvVFGFfeCdnSMT2NBaVQEeU4mdKzsYJFVGKEwhBagmFS671XnZ9EhpYtLH7",
  "key11": "55vLoygoGV87SEnmmaWNsUqh9KubEPdFYHKwV4Qip3vsxSySNAzZWHBEhJkJx79duZRF1trFpqHDW6qQTrwjUgGx",
  "key12": "4c6MKdEeAs6UcKATKVuRUsWLoRDm4SSbWq9SUiqkdDsnK3qJQ5pBr4YxNdeW4iUxW7sQKGGBKhnVjws38eutrDxp",
  "key13": "3pQAZDF3JYUPYU2vWScYbZvTMTqQFhuWoRuzXTL2bqfTfq7ft35WydQZePPjr1NcgGUzuXtAdqknBM73yBsC5vFN",
  "key14": "5hpcw2RHbd9iiSFVFo772QkhwBWawTQ2PNm8DQAq213ZpiicUvA8CdfZVBGJTvpXkX1sgLFdt96EzCkDdL5z9J1B",
  "key15": "3DbA1YVfAHvKG7ga49gd22ve8eRdMapnxB3wd3Jx7RZ8xLZBaaXGWGXwQr5DYbLEKiDct9PHfewGz1f9vDg4sfvL",
  "key16": "2fY42aYdFXKgGTNkNNvNh7a73ehqfB1gWwZSCGjAg9gdiDFmiq9NgBsAaqQJgKaF4RyBEr857HXwS8wmR31xSeNM",
  "key17": "5VjWpPwrf3BzA7YShkMadFR8QB5e1dKHqAhfcLZp7sLrtfzujVi4KMuCRgEm4jDZARrjHaUWrtW8ua3dgaEhQmAq",
  "key18": "RqF9AcUFuYeqCDYahLkBUwtmMY8eZpT5r35cCD19V4HJz9Ua7mPE8iPi1zLoFuKPDtpSVJRvbMtHiR8gmq4q9xo",
  "key19": "25fbTKqbdq5wyLrGEMVHmTEhvUnmUSWeDcMpq4wM8RTigXNkoSKHbzXhv8WnHmh5DxqDmcrMb9vUD3ZFbJ85gXAu",
  "key20": "4UdY6YixtbpGmqAoXFnBfNv3zWiMb8aUbtGMY5uFSdHYeBRia4fydvcUo51aLh6mXLHcoKQssxi6jp2VBzFh97E",
  "key21": "3EUpP1P9iBbPenVH9WC3GCZCmUexXsJ9anTLMncJ6VtqVDPBZYXup3bLfKyP4bFhhNXJG6Jo7bXQy3LmijExs7xk",
  "key22": "42JGiZZj2iGVcFHsjipGzNUxVQiYwKwQWSPJu4PtjSMCkSpDY9eChX2hcv7XA16YgeWfXAxmtoMCcto2BfBSJVC7",
  "key23": "AYz3jmRXNZhpmXcropjJCH7DaV5WQB9r8T8rQW31XDwsCGt8cFmKMC5P8iG3U7xTz3YztPbNDc6FMDXcHC1f36F",
  "key24": "3Jyi2gNruqoyxjmkXMM74ipNnX2thxf2cquxyuSYbZ7AwFhRqU55ASbRezJithTaJd9yVrWj3DgxwhWTs3qzBf3o",
  "key25": "4Ji3nyCc9gbfhRxb5wExnnTxxH75w1zYSR1pCZYub15NpfxeLjDKeUDm7fVGFr4qQxzatUEb5syxJa5L8iHu4ha6",
  "key26": "5D9CB4fAobnAU29Kg4wYWdJC9i9XdB5dE4jLJebVNmtw7UZ3DrKnQSJRVKjzp97rFTRhDBtFLzCFy1aSqp6wqe8e",
  "key27": "qPvrAy3Bw9PTnRXd9XE35CW9gHJYdPKRP1e7rnQRY1Njs9PUPopmXZHU1oPV2mRGTTo6meBAsHxqNkYegscD13W",
  "key28": "4GcHNsik22o8YopHkYPNCjRq6Cz8iSZnhKMkjTLH2MzZNUNzGpKen7mEgKQgCxRm5yD8HaxsYqE2UGeh1rnLZzsx",
  "key29": "5eUYBzZJAAzadNLwH5GZjDhDoH7fKo2xxNKcQYXdnR72vhZdbkDU8QwrzNJmo4Wdi4n6w9ERSXp7Gj6419p7WUyB",
  "key30": "dzkwJWqyiW8RMoTLvafYhYRSs94YvnaL4ut1ZKzxgEK1ZVVfB1fv5LdDCjiabXCuPCxp1LGw2fQzYAAJQXxJmrm",
  "key31": "5CXhmvdX7u8pDR36rLpNAAmPaednLFhS3n3rpnbNQXct2zU6fA8z3woDFC1Efu58mJGFG6Ktoi7A3GYk322LGtfu",
  "key32": "65LXx3McGA3AaBojZXb3JXrgcMSyPCcjfy6pDEXBJw9Z2qj27buwXgdvpCQfbkYmLoiYnbkg4YsoWfDz5VDuYh7S",
  "key33": "2q5Em3K5D5BAyM22d8aDjpF6fis9XuwTqB8miNZdCMQREBABLLzYfchwhRUm6abmkskKSsvodJk6JaFkWpxKkCqU",
  "key34": "633EcTn4U6oWRw54peEwLkbDpicspLJ7QEomjQakBEFPhU8a1aAjRm9GdnB3AvVnHzUvytUFjwgzZK1NDzpLRb7J",
  "key35": "5hQM3JjSTdwsRuehfRoA4QRZs2qLyXGW2g8mnf8BxBZH4tfAf37iNVm69Ffe9m5L84tdwxNP2q51DNWSM3qtkmf5"
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
