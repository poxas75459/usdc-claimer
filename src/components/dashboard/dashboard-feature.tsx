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
    "2QQMBGo2VcbS6KGEF8Abpv4Ad7LhD3fdbxYDkG8pb6XPH25ERDprqKeidGwMDJpT6XN51muLnzrHHspt1vd9Bqs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27qPCzFpaKfwKoWhTLSwXNRGPT9aRvNGow6Uw5oYrdNzY7cF8h9ggZB5sNvC77exnCWHUNgZvFJw1F7EBvKXzSpK",
  "key1": "31x848rrMT1VBai1Y1hAYuTzu9xAAkPFu4NFaVFU2nPGzo9TjVSfeaQhmtF3LAqj9G1sqR9LiDJ9jtuMEuWuojNa",
  "key2": "2AaoUuYosBWZCR6DKDYDJfUxHnpqZYwN8hPhFzjVQtkHcxNAzs4fEpPEzCnw1fjpquf3eQ6GEjjuecgXaJmQWQei",
  "key3": "55jmzw6LvW21Qufw25TfzQogP47StpY1t1dKQBCujAmXekzXrLWto3Ktd2VnjcYvd96JGpq3qPFJFW9HvpB4x1g9",
  "key4": "2kdMQo73AxAEn4iLzUgE7V54fEc7R4SmdcR1hR8TNhmdLTe9zQoSwksEAStA8eLymBdrbRcpeVeowbnKkozt4mhs",
  "key5": "Znn16bRYkRVFQVxTGzUkGYsnQBAFwpy6m6Q95EVUazjXP1WtxbphjpXoWBTffQad6iFovnsqsjwtaqbCyJMef14",
  "key6": "2JmwBh7ejH3DzJH4RsgfVbFL7oqdpKG4A4DY35UfpnNmGskmrDuALE7W5y2GnadSUkcnps829vCm1gt8eUuJZWLQ",
  "key7": "5KpNvfhAh1ZooVoLBvqPDKcb1aAJQYqrhvmTiBFRLCgLcto1QzNbkiYiBmQTzJ3LmtGNqx3VYUydmTsawxeBRPaX",
  "key8": "wr83LqtyyHDQZimmqZQ91NtM5uunATQvTXZDPxPa7MiQF41VqyexTywGgteKUxbFAwHgJg6k3sjU4cq6XzSExuf",
  "key9": "4i4hGNcLp3CyPY7ouddjRft7h2N3T4R2ZYdk7t49xNseybc539fjWXiuvkewVXoLjbdJ7G3Xd96yX5PVDVmhHgJF",
  "key10": "3uFrrNsWw2fJ73VfAyg1G9xxYk4X194toXLpseLbZDRewJcd1JP2tUhAR5JN6rehWGoXehEuw55L1GkPWBRx6Zhb",
  "key11": "2EhoiFWVVqFdLmbsFRabRAPTCAjGz7HeVPJXTugeeeR4ZwXqpKdcvTcVzUx36o9jyssLAqupt5i4CzrnhhffoEL7",
  "key12": "ta3LG5n3gMUX8nSPbZTvERuqNjQj6ekVBrfCuopJFNvH3k7BYw6XfeLpWesgT1Kxo5BqYSj2RCbTz4QJrC4HaQA",
  "key13": "4gtnTX9L2Btqbkt9pwKYkz2vF4Z8LKD8R78QxBEJt47nR6jqEobahUAMYBxpzdaSHfiSejNr2DFJeVmCZVVyan34",
  "key14": "Lfd4skCnmnBnvwUbqDzkfn3AVCrWtXzHNtcpaEzvUY24gMsa2qYGoBeg6sodxta6M7H8yJJvAcgRYE77Hn2uWtM",
  "key15": "2fBNJRZuVWBQHZZJhxdHURotnsY2wn32cM2Qjshc7GK9F5HBUiuP5k2WJp543DMrA5T8bkecVZU7TffohBGWoPVY",
  "key16": "3yjpM4FLybbXEdxQ9Yz6FyFzJ5QkRfNFTGr9qp9K18XBzBVigxEiJTyQp4oXd5rBjC5xQ6jLyiZkpJQSTkFUTRb8",
  "key17": "2q3zNLQUutLeAKa71qR8hds4fGX7gnGK1YBqmBdCzV7TLApjQvHo1C1MZ4CBu8yzD4Ao8NJQaoHnbUGuCkoS6jVE",
  "key18": "4dYgabqe52gqXNdfBayd7CP7fQfhjE7gAuNiTwAsNPE3prVs5taqSAiK2FgvvAUek1aniiJ7w1AZcTeBpCR38Lv9",
  "key19": "5nKy7Srta6DDwL7prTKDDqAxPhwmw6MssTb6xb8cdioFYkVH7jE9mwL7NRJxkSPoYC1w7jwcWnt5oqfZZT8w9nwk",
  "key20": "3CZ5cSmX9TxH9UnYW1H9iMoJuuTu1KxWwvHQphb3CK7t7xtm5Mzb9AfxFhVHqcDw1ZgQAxeAcqmW1rA6H6LWqBVw",
  "key21": "bdk2mfnxMUseKx314kKqRDnSN9c7J71wnAdJsfbbjmzJdU4bZhKNL9x8QVyr7YumV3eAYbVxtM6CHd8eUSr4YLb",
  "key22": "3g3WVJitBaqmAwdsn7yZKjWQgHQMHsR5nvjFVECCu8qdYbdM6NM6S6FeaXLAzfsDB9gwtJzGG7JtTcTV6DWHftFD",
  "key23": "2mFGu25TjeWSWXVYV9Zh196nvA7tV26V6NFK6fcY3h9EGxZcqgMCVkDxoUyPu54svwmT2qeu6xuToo7bFtGJj4RE",
  "key24": "5XLxz4ig5rHKXvcjp9tZEfkLLX9KMiFKkC6fF4QDkHwyURmXZczSn4RWHZY1HEkkqLfhA2TxP3Qe2febSWXzRJcB",
  "key25": "2vJvyW5gYSsfya9XCeHjoxmRjGZZqExZPC1H7mSnzZCJ2ERv127vUSYwvxiHY9QwoL54Cedng8qfqWaXmM6DNbXM",
  "key26": "43dxd4SULvpmm5NJLy91fXx9pQcShZouoTnad2FA3ycMet6n49prHw3zGzrMYXkTr7F8eJifdfTHCa5RUPcqD1dQ",
  "key27": "514J6Pej9zbmXNvZeBYFNmqv2Hh75q61dgqKPx7gKZkpAQasVJapcFBAtvsZoWm5ofBpraKQDrkTnNBamZxi5v8P",
  "key28": "8RkXpVVjqNHPEH3X9UTur4iv2je34HsNJzhXjmiLNq2TbKQhzJXqnD1p9ZqGEtrVCsMmwgCrBAx76Dk5NZT3aG1",
  "key29": "vnTCYaThgiD9tWmcdK4SRMdw5LiuGnntagR81qCNqNAsRkiB8qSK7h6uBg9rNfqHFX1Q5M9Qq5UWSZTxZtnteoa",
  "key30": "ieeDuB9dedUT9YmF79nj6oowBG4KMaiRsLvajqcEBbgSwUy3UiGn3kGXkwjFCWoVpieYGmQWRTGgGDtKtAVmNWT",
  "key31": "5LtqMKXhmREnbJ4FrFNag3tc7UjtB4VX9K3Ws2AE8twLcSSDABLD9oqTm9sTVWoxWxg5GZDvJmNdvQe7kR2syokU",
  "key32": "5TdxNLRpgrtsauYXkUH58t2HuXN3JyAGfy7bKhiDWWbEav3rS8ZDbYrTGTvw8ULVnLt2uwrPVjWfuTjDotj6dQi9",
  "key33": "UU7GLYHS5XtxKn3C2U9AqSBTaNwwUefECgXqkDsHW78dyGwqHqBVykM8ZNDBiqdcXMLt5QHdm8hcQGjcCgmXxuy",
  "key34": "4NyJawQqi43DXDXrLjDh4EsL4PXnFfj6PYtxGBboubXq9mgjV8APzHkVuieEHnt7FJbfYdYq8nsYanmfyexRihsj",
  "key35": "45rH8KjVtbHnRqyAd8rf5YmbkC65zYPBB1sRcqGJj2LZMtSPHzaExbDm7zjUwYAaMHgnbZjHRZLVLdVgWRLmDpkP",
  "key36": "5z3N4Et5CbQ6rxLm4MNH6m5FGcN64vyB4kD9mty8bc9vJNTakogCDepGM1VbdnVMbdhNdSUGuZk7MPnwSGWvKs4p",
  "key37": "2f3cEbiGaXtABPhYrfRMThSBWn5FNgqzbjiJRtmYdEZFNzUovgaGe52uRpca4iZgKhv4sLzERBsNyE8oJzLTrnC9",
  "key38": "2PH3QwWpAveVuNVfPDT2uZWGLa4StV5wgq7QCjUkcpFRM4xiL1iiBoPpxgZvXEzn9gXxA4H9yS4tekjjQRiHXDEG",
  "key39": "62P3T4cmZppsNdrE36K4sUA6C7HK5AntC2ZVUYzZNP2Bo9Uy5EksvqnsdA4ENRzzhGS61LKXp9SckxyKyWogppmS",
  "key40": "4DjjFCghj1TaKeKDrkfNWrzPXHRSRc6n11pnZQyTtzQriRkkhW3FkxWQMPLArVi2nsRSAKcaxMyrAYe6PMHxvhvc",
  "key41": "3UXwAUTDdZWuRb6mgtAZcJRGdSdvXoYQmddXmPbPgK2eE7MUeFnKL2S8X6eDrsduethVLPqbmgfHUEbFYp8o3vZ7",
  "key42": "5yCbboi9aEEiJ43W9wCP1eWuxBabNwf5cjQE4UEnzUHA8ytmLJe2LNVwiGp4NrbgUxkYYr3JwNf5SfXvAzpT65vX",
  "key43": "6hdLhTDHaMdpBKhJ39Fi4KssZHY4SdQf1RcJ2puZGyR4t7Nsqosf951pd4d1FSLUTuMKGtAtVDWLLwsA7xhZAGo",
  "key44": "431YeMaoPjY1Qn9J8tQeDPjTKpEiUSTcpmt34w31qZ488j3Gzg4BJB6EWa4Qpd9agL3KjnHasaK3CJ1SDXd3B6Vb",
  "key45": "4iffFLc1ZqLvnS1pYk2WVEENCRsXDgicvbbWdDVLdFPAr7jxARgbXa8sfjnCnNsqojXg3c9rCe3ohECH6PdsudhB"
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
