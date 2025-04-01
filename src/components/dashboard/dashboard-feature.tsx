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
    "xe75aVHdNEBoiyVXWxSfiAkZLGA35CQr91DguHtgjssgD4xB1D7fVo4Ur6TqfrEVbZQXzqFcAyXwJ15HWFvpYnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vQvJSwP5ULPfZwzYwRdyN6ZRNLBczKdn42Hf14Y1LtZzTq8cE8RXH1G5eoT27HubbfHNYJzGWWM1aT25pXpDRdD",
  "key1": "5N17xwYQxNff43JBvvhxCMwdZJ6HGuhS3YbN4Tdh84CzNYn126WGdYZywNogKRVE4sPbbXyH3AzgrTTbwoVp6tj5",
  "key2": "PuJzN7cgrQUdsVrM3K93zXLPq8Bw5ic5NttDom486KKeW3wLETBAZZEx4omEkH7Fcc2JsvRmC5NRNC3zNYJRNN5",
  "key3": "uhfkp2pvctsdGYji7eDU7hWKntpNnL3YuRdEFJCVWXmizdVrMqD51hVmFxkGPKYFnjSS5AK94kWiakpdfGeYLjg",
  "key4": "4S1S4szGP44vLwGSr2Za3nfbSbXfWH3rifz8SZNrmCNHiSDMJxhDAwTTKpB9ARtXeyPXy9EoFMifXNQCSbpfui7i",
  "key5": "mLHtWuKhNJ2MHifiAArnrfd5mKXKrPRi4AxMMq8Q13fhCg9DieghTVN16FahynRdGa62dcuD181KaXBLt3hpNrZ",
  "key6": "hrvR8rG5j5SW2Bp92Psote3k77cGzgX3ZpkXVUsAqZtpkyTc4C7NdKiD75oouDtgUCppHZAMFjFXvmmTMnzScRg",
  "key7": "4deKi2fwpR4Voezg3Ma1JVXMw4izCE9PKh5zNJ3csuzu7WBKDrLpWtoYGSA1Zrkhm6f4JN1kBaszrjAaw83rd1fp",
  "key8": "LBJVPQTk5myvnPgPnpL8UVa6NLjFuNpzXtgfPU1uuFPLTpyuuSJbKq6xakmimtGoP9s75b6wU1QqcE7nnxbaPFW",
  "key9": "5wUhtYagKyK3ECHVxT3Zd1rcxhPSn4bhgQxSR9qcVfnXtVVftDxNXuVFLBMg7zcuY9nZhHdV8Vv9ctVhuKcu9dk1",
  "key10": "2t1tsqihNErcvrq2mzN2Bx7UETqxs8j21rLz4GvVDhQWET4iezZKJD5A5HLaPvjDnKyhL8hpTDmCjnxrkQmmvQm2",
  "key11": "24BS4w731CqLEZqX9o7LJ6hikHWb4d73JJE51ZqFXjixwwXNpisnGsWq845KzPYLkVVfPer5nUVbE5z2Q53ceYHe",
  "key12": "5VBwFrBeKCCfTRQ6uBTXGFgpa6rQy8T8xL2DsEHDGosoLtjXzjE4CFPaWPvHCRosMnBdjfLDWL9WZ6CWq79ozL9A",
  "key13": "3pVwgEMTdmM1NpDJsonsKQ8tzLZnfTJWBDCkqne7mPpzuTtfPhgS7jrNNUvq2tVQ7EgQB2LDqoFaabNffZP72TBh",
  "key14": "21SrNubT49VSqA1DZdH7a2tHDrbjmWzE1sBjm2sEYHDrN9VgtxMVyG2tpaTSRXmx9yT6FmDhTdKPsaniiRcUS2d6",
  "key15": "3THMVH75FT6NnHmqxRtfxsjc8PzEVTowtSS42sqRk4Zz8P8QdELWZmHdPfhHeKcroYvNRkiJvX6KokQKa26qs7yi",
  "key16": "2eW7nR4h7YE9P2kVaQt8n5mirzjeFwrQraKPvwU2kym1m1MPNiqZtYFHq2pwwbs9ZAoKCvvgd4gvGMzXeAk2fDVL",
  "key17": "3oYGVZ3YwGJmwegYLdEYWXCkvKr38MHT22ko9VA6UcsPeRB2asP1HbuxRj7RESzz7VXNEwXRpfU1mQWY9jtiyH1U",
  "key18": "25XJQ4R1WAhDNLh4nMCkF1Fo8XbYRZVrxKzW7Uv8oD3tH3PJcyb563LPTGvA5wSwNSnN656MATYcgju2pCMWrFfC",
  "key19": "5cva73y5rtLwkyWQWkbgUxbiBSsmgzhQqW2aSRz7uPjQ4LaRzPN7yx3McNJfKbCnG9C3oZbr1dB4NS9hEnSTkY6f",
  "key20": "3mGRUjD1Pe43nf5MagTtzS9cYfdWsT2mNpBUmGPk4FurJJqjkRUMT4Ao9mr5DgaB1kxdSaqKtQDgGm7QXPd64YuA",
  "key21": "5CX1tVqk4oaCdHvBzBnDc3P73gcbEtJ49HTp95MTYomdWjc7QNRei2ovMLdbh3DXbLjEYGhqG9EKxgdBnZH36aqS",
  "key22": "5MQJX2uvfvcHpzHbrrWm4tN7qj341cHFikGg9jc8SViBGYKLk12M8qd9PMsBNXALFKoBUVQa22fdYdUifUijTNfh",
  "key23": "5x8cJ66wzx2ndC8kfwjujthV9jW3kUWaKG3Yq6KdEn1w2R6KizzFRbXuBf7VPtvEf5op5ZzPusoAjoT7N11M3aQi",
  "key24": "5QEU26F9MU7nnuPhNszvgjR2vpo7nqGNnQjYbrogAUPYh9NR9PVYnT97ThJYhRuSUFsiNakz6xWk8Qaq9U7orZWx",
  "key25": "acAypSGBFEEnTLbqkMgk1ucGof51EpnQdVDNjtqLsKQnNxM5WSFR1Qh7ANshQrsG3JG3TZBEPPoEYfYJp6fFwpV",
  "key26": "Z36PTjZAW9MMKM8aFzmyhikQLhvR6JDhs654Jddq93fPy6fgSzz6AMsTVWLnN1emkgw4eqbZYJE7mqoPBR4QtjR",
  "key27": "3mMmUdp4z72yULPy7CSRVfdPk5rkw2sGHWxPcpUtZqSgoM6zfJdUkNQVzgPkNrhCGHv9MewRjE75hNLKt3H1AP2a",
  "key28": "2zqLZRww58B7ZoK6UMiCFVWbFEw2zwTmGkC6SjCeEirjUSqgts7PEabmLcRjTq4xzv52XUmeVz9cNP8QejYMBiqu",
  "key29": "9QrevX7msZaLix8bFWfNxrueW8JzSzX3yx1EXR5qMupLS7vJR5XhXmdm8s1dD17Krqsa8YWDS1ZmoETkKaVYgRd",
  "key30": "4eXntwbsRRmt68nPB6GXViaBX7KjZ6gCopuNJ9PNVTQXSbEHk3EzttNewkVMq3u8DLzi6NCsKrRgY18yLgCiS9QB",
  "key31": "5qYU3ECyHXcfTgMzkoJZbvCmqJhGme3fS9KdxP8MtUM14y1sBThTw7S1xEf9ERxhMuhbEgtmJeZkLx1qDMDkRVVG",
  "key32": "3LZLUqs3pkWYb5knN6ecQVzqEUxj7iCcujrwSkmhiAnaD4yg5YnV41utW12hYGFMEhnjRwAm3WaUkYFU6Ace1YmC",
  "key33": "5EesxWy8LTbhhB6sRu5p56mWka9CGrPLi9viQReW5L5ewEWMQGSutP5rX9zqDF2HWqsKw11RbF9n9jo9XSgZXSBS",
  "key34": "3HvoBTE4ybPhmQiWqxepoZmvX1iV74UBy17nGt56XRm9QZ63mvgabkQdcaRC71ZFpPh6Bnd1DqBsqFWRQX4MmRkQ",
  "key35": "4A4pz6sMrS3yC8GsD6cFRjzsRu1nn9cFm9B8E3XdtaChJsU9Z3vxneRaMRhspGQkaeHbuxz9QD7hnKmFX7vYc6zF",
  "key36": "5daQcTAEqANarn24eTz7Uu8Gvrv21uuinmPzydNyCJpjnb7FjUHRaBiiH8DCUykvX2KjLJzRXuQKQECDsf2FegPV",
  "key37": "567nuvafVqmSgBBj5kJQcox5eVHWJquK5VzWXgJwzQESTZz5PNJBRXYByC5hnZjwCtgg19QpgBPjaaxZtCn3wKjy",
  "key38": "3QHEekpEZ6jk23htzngCWEW2qx4hooNaGKyv5C5LtKWH7TUp98PYm31tSYdDTrjQVm8NZAKY4JvdvWQiw1Se1eMp",
  "key39": "1WQKbmwbZKVX6S9aSnBMuF1Sv4pv5w2tn1XVfyFFPSaYznGL3PvBPgCXW27b75Uvb3573nCSDBTVEM6uaFM1uaN",
  "key40": "64aF7k63bjyMZUwzvQC17Gi8sALdQ2AGqQf2dgjhk7GbFUydkSrZkRDzEeYrptdKRb9MMoJP8hdVkPRWjDkutv3o"
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
