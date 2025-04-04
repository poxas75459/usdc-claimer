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
    "4YJRfoi4J9jDhxov61LWMgpLnZet2scVgvFVhg3sms5D418Ucnxbn1UQr5ikKrZE68FDg7L7J69TcTm6XiM7V1q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fsCUhkBBhk744k2D7qMw6BG2hhqQ8o62NEbgoz4tNDhSCUHWV16hXkGCthFd6UmcgLs9CTbrdp6Ak8wCuXWyFG4",
  "key1": "3dqGhHeNUTtcuEJD1uZj8XBtt9c9UZHDFSRGg3swyztPYQLNs7HiV7ygBnkGro8HAuy3B3xHUDYFKN6pA63SC2NC",
  "key2": "5J5MmPv8SvnAToSnQP5qixu63s99JFbhkBRjGTYr5R2D9QC33koq6HLFxi1xcAYrZG5gq9ChuJonsKY47B8PQ9rD",
  "key3": "3BYPLzGXBacvFYhXFr3AmhJww2YTWgW91McV823WzpBcNgyX7y1DyzD6GdV49kq2y8UQj9eqPT2YgdzgEyuRG7Nr",
  "key4": "3enqXfHuyAsrBXAVNLtg2CM28iRVX9gRK278XLsMH3QHCZ1TNTzyAC6UFKNN8nUCEy4FoDMEJu4XdvVzVS83csQj",
  "key5": "57VXU1nJFZWR9b3uUTUYHoDENDp8yyAw3C8jGZbDSsWASQTsbHMCDDPA7dFGVzb8LDgtrzSyLdgJ7XiiHnbCAfM6",
  "key6": "2CoURfdgSJnihgqNpSky7H4kg6sRbrg4kaHuMHTYvWCJKTpEz7XhX4Nk6KWvDx1gS6PzXBa4CsuqLfnEpxcyNwQ2",
  "key7": "5uW1wAPVmiGKt7jf3AnHZiXfsz77HaUDzCiEPJQH4w9QH1GFniJ3YijTXrxQbSxgbJiEYKsmE1pmmReeqTMXQSdM",
  "key8": "3FnKYkE2zKgXgFkGzvkFnCS8q3Pc7aMsvg8EvHrofVLVp7NXq9SvP1ZvNvtVE83su29aany1RivA1mAM6KatfPzR",
  "key9": "5yYQeaoviVo4Em67PBBMdruZ7GWRcEXSx6UPVuccXbgVsPTZdo9pXrcYcjRkX8PdveUUTkTYPXzDb1BEyjJ6f1Cm",
  "key10": "5vb135qSZehTyvak38NBZwUZNSY2GFptVJi6mvzNkbDPcHUBA2wsvF6tgoS6spgBa3NuRoVQxJVsu9kLZyum8j1W",
  "key11": "4h1Rrnndi6LN6xysHtWsRAqqh4i4iXiY5NX5XtXJAbEFrQZXusMq4o2VUknXFYUgn2pRbEjfbzqMJYqa24nx3ovz",
  "key12": "5sKTFJuJp6XdM9wiaes9nvn9jkRZ9qvRHfmG8UPkghKX921Fymr5r9bHjohH9eYUQ62nXNaHNgrztSfPXp3Pf6Wv",
  "key13": "g9han1FNLt7yookzwDz993eG8GGYe8Y4dtLPYnxKsuBTdaYyuJtHjvA3aAPNYESPbHpj5QsgtXFTz4UTuUCqXmD",
  "key14": "65r3kC2eLvBDCZzskSeXxDyqPmP1Kv53e1qjypHrVajE66XF4qMBDAaA8spwosaqXtxQa8DRQqK4SZJTVR6ACacS",
  "key15": "2ZymN3NJrS85CxgqdvskbfSy2FZsERfD2T4GDcYCjHRHSw1ZtpCSFAnycyj6HHMzE2Ck9CTozZ7unxt1fXmrzcMJ",
  "key16": "hmR8HJ9wV5JmJMj57bWfAjPVUHMV6rd7sZTSBnZ1Hh4topekHx4GicrjVgfjdFyUPSJijVph5NVTyrWNpQwDNgD",
  "key17": "s7H1fTyDhJYVj6wwhnK2fqCYF2kCdNL7WjfcHcfnBdXWJJ1HGpui7ky8h6u9xuwB2MMCSbfZ36T8B8z6CXUHyef",
  "key18": "2HqiYaRAuHFh8ukwauJnMEUkyqfQi1ypzNxkCA7A6Aauu6CXn3FHUJ5hsnd1JnkPsMUzSUxg1Ktt2UADP1x5FLAq",
  "key19": "qFmJh7hhce1Eegt3WjBXvbHW79EVUxNZ2QKP5KFn2EogQuXyfHB8YspNvk97xccSGxpj755jz23UCpFmE95WT38",
  "key20": "54NF3QuLhwkmBVKSTFKw3WLCJx3CX8vrXDJFgY4mngNDV2KuCEQsY9cSTiMyj4WeLLyqWvTYEtqKhgDmPBqmMY7a",
  "key21": "koyRGE5W32wtwUDdfNnRYErux4mD69mqX8numFbFubST514hgv1wT4PiKYXEuF7YvcEdGSuPZhU99vGoa82ACqd",
  "key22": "5EoX8d5fD6SvUJmrBjBGybWjBvCQRKLT5rXcqkpJvsvMXp8SkWwGCi2SE4G7aFfdykUEa8ot7QuV2Lz5cGd6FZz",
  "key23": "5HhMSPiS64hiWF4Y8yHkKy4qtGx8udEXuv5d3jBbZC4ACnYJd5iMccNCGsLfvPKGggVtJaEjiePhj99jeo1eEpeh",
  "key24": "4LfFqiP99SAycwTdcfJU17GirJeNPUPQn6EFgcg3D1kLaXtFo4uHeVKmjKxAkdoc5wxvDuEgK4arkZjguBLqdjJc",
  "key25": "wAptBk4ERthrUPDMSsGk6sb1D822m2y2tNRYAz28xBmL1qJ6ofRXNFYfZTHtuZqBXiWsmypDemqKQGnoraWhLZw",
  "key26": "2VE65x6iU5To3VYpnJ6gQqVcGgqhg5Tk5VYuwRD7VqRizETrwQqxEVusTXS34vodw1ijR7ieyHJxjGnVY5g9EbR",
  "key27": "GoHMoRKmbhhyUAHTxHqukWJA4eMWTb4fa4mzaTpGDVdaGBQ4dHt3WZetVEDRi7rddvb5asW8zo864znFCmqxHtj",
  "key28": "5buZaxGEv5cu3PhuD4qdRvUnEXtKQWDrbY1pTUWVdTdaRv3sh7SftxxnAmC4EpdaQJC2Ndj6c3fNbtPKgwJuq46S",
  "key29": "4xc5NCXhYRQ1Lpndcs5EMqNTsebV22g6WAeRK3gdCFejxYskWgkDe1xCe2P6drvfjmJJmQisjGMvXLBn7e5D2AvQ",
  "key30": "48sBVWtych7JEp5khHzmbi8gQGkfkpbgHsEhgeVzwu5jPJVCYkDhLPHCDa7B52LUsbLMoRw2woqu7EnTW3XhERGU",
  "key31": "49Y9Qi2emcg4ooKh4J2pB93uVBqsZgvJqfHU6YTChC8uZg88tBGgf4wfhJzPcjWu745jcpTQ96HfrjJ1r7FMs8xF",
  "key32": "5A6TmW5tWkU6KBCxbwNJ5XH4MmvW3UNbHTLgSRrx5n9ENv9bB7FRunvAu8r2ASvGyWbbXnjRWCWBNyrSK982T9CX",
  "key33": "5F4GB9iuXvpPZqRhiW4EffESDJsmfw5Gi1oHx5nwQhv6w1M8CJdyoCsonG9BnMvmf9VdcyJ4dQN6ACLNdbeTC1pf",
  "key34": "3NWbRwaFxZzrde8rNs1CcYNMBxhsGp59mW8umV2NS8y3N3xLaGoyCqRPrCJhCHGTHs5J6te3sQdnNUQLz3D88NMV",
  "key35": "3ooi9KTSC52y17LNQdhEZurJp3yvspQZDw355uUVV1a8aGobRCvCM7JCuN5ufs6ioY4RqdYTa8BkDFjZKByGUzj2",
  "key36": "5bkehang2hvTCZnyA7UepsbV9NiH5FudcWox9kkC8aAidjD6HWpwJ1qky7RGFYdAhyo3X8zo26Rg8vxk23h4LuqP",
  "key37": "4qWbWW4spXpzJMbFtQsMdqPEnXH7959vBUd37X7B4r1BtH3QVcU4hbYNrR5z2ez4N1SXPqjB5QMYt3wC9gE3XmC",
  "key38": "65fXazZTTkHjavC8p9ESMEfCMprCi7LDAbSJow48GVHWufwhrCNZ7sd97QX289zyRmgYCdxWrZYtN6YsWJTKXabd",
  "key39": "temCcFf5m41RYtWbfXBvpWKjoRn54YTZTBkrg41zEtUuDjvJyLhBjSHZTiXm4tNRmdgRoZB9gssAwpgQM5sa7bM",
  "key40": "jZ3yrw1EC8vzhv7Lr7XqYYtxuk7B2EeQa4xQPVFYMi9fLNwRxpKmBF9MbM8JVoMCPxAE1gbz1zPxLZsyUjxj2UR",
  "key41": "2VywFRybF5ksGvUQjJvAitNnWcy2QzWij9UZif4B5nNNkQM2LUru82vjds3atdQqen3U5LtmtvPoqVopvZMFUWhD",
  "key42": "35pHu5KfDmtXJ77fiLMzLU82mA47niZUNmzh11cNPfDKAc3AZUTMqBLpfMrw6fEPhM9iuCcEdSWTYLgQ7rrfJB3q",
  "key43": "m5J67yAzkaYkhmdM3wRQYTAbNzAgNjuwgj8cXtmKqxCaGkUHHDcT88A6amsRdUtFjyfTTBqc8woZMdj3V332UqP",
  "key44": "599qnJrTq4HT1k5QwEBT8jb6pqmzaYpdyNQo61ChwoBwNbt6dBeHwpShGkccvDzQBvLaZAPLiXB6JaAQd8Ls58R",
  "key45": "5cGEh6fN6qVfPfk3NQyLAGyMkht6T7iFk44eWoqbFXQK2edszXpuedPBje4zLbSMYJS58oHGwQ26JqKHPKdTbK2S",
  "key46": "2qx2roWtJhbxoVdQE2E3rMpSBiRqZ2T7DQyiy1UkXqdpt9jXEzVfqUv2xvrXVA4TnvxJC9FFrEDmutwGmA36hY9E",
  "key47": "4YJhzaK3uH1rzaoLRVvssfhSmm4uWUxzjANpsCHoLf3qCXLybcTAG8p6VVT9gVzGCof4ZR4om1VroJBnVGkEgqBL",
  "key48": "5PfSduGbCRVyH4c1bMCaR8LeEu5JNuXTSy6KRAiyUzwVYuzX5MnvxQxeSh4iFqpQctxHFEyDew2XCxfKVXrK6xBR"
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
