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
    "3xEyhCNrzZG7CXB53FD88z6h4a2nhFyT4DGc8FrEynBCTbAhjNfofVBVxJLqZhCdLnUQ4JUfoh6SAyH28uHDXWia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EF5t37KziEK14ZJaaX9gF9WTaBchtzAt87vpqhwDeQnbh2FvZA1TSYnCk6aC85oiuL7iGt6ULBnTpV9ChxzZGtM",
  "key1": "5AzszzSUpqtnYfbgquirg8nkSwMoZU3eqmtfSWBDW6Uc25ybaHgy2u1VM2dLi2MrwJJEiTGr82jXG3MMkJxnr8cb",
  "key2": "4AzCsZi3ZmkLB42dLa3UJhQT7VR6UABYeQhrKetrbot7RNuKdUcAWCcSQHQKVEFPN9Z9jKg668Pzjq6fkS6qzRak",
  "key3": "4UNAozqisK2ZErykmu1LVbdNdX5sVtaQuMQc2y3FBk8Q14Boo1Ffan5ZsyzYbmGoGL5Uk4BzSXGjwSZjYfGf3bGm",
  "key4": "2GE6H6MmYKpGKF2TZSNYEiNwyWWim6qPXS711ETpH2ZjX6seSDMWu7vLg4cw1MHmQX89YPNA7D56idczKCiMLXGj",
  "key5": "4C32rzDSiPqDqLdtAHXpoU9vHnu8qZR6p9h6XN2vTqVa2m9QYtHRwrf9zUrbgW7UjAmzQXcuv2CvrPpPnagJawt8",
  "key6": "64mzrRzL4JoK5cZ4HLGwRJkMXKF4bZZXTrDV42f8F4S5x2qs84FX4HtTvwS5oDB5jq6PzN2HtwzmbXwq1fRuTBsz",
  "key7": "5vbTNwB43y2u3H45YHy3xq7g3kjCq9PtTrwk9u8VPJWYsfxdR6ghbc8ZNUyZnrpmRLu8G9mw2SzggG7TStNkMAGC",
  "key8": "2RTHB9oUwMVYYCkb9h2jwCnsMbbpCjWD5Y1hQ5nGbKCgsX8uwLPuq9goY2sMavSeVSTvS4k9CP4TvhvXujoLzFnj",
  "key9": "4qszDzFyZY8dZKnAd3heBKAXvoTHUrohjEAL1nxfjHtFYD2mAeF8TmARPSjbxjV97TanRey18PTN72BWA1ZXCSkc",
  "key10": "BdkKNPFA1NeksQa1peqYwpqQrg5ByJQHaao7BbLFbiQ76LgQawHkheyH49huv2ecXHU59ykX53YNjUxiRicruTq",
  "key11": "5FX1F7vEiZERad2zyGMoCtD9n7X9CjiydZdaXNumqLBR4sHoJZ9P8ee9DxieFFeFNtmPouXQaSetj9KBgiLU2332",
  "key12": "hQzjFcE84uhAg5DsWe9xNMfLLJaQeQx2RSDbbovZyfyPzRg45PTwznD7xhzpYsyYoXrjRKts5aTYNqg9UzgXVjm",
  "key13": "3J5tYrL5jR85qgJnpNUhWqJUhu5efu98tgN8b3eQR9uLAq9vBnephAFwaeNz6tVLZuGNsAw7xqzuugfzeAnQMUNy",
  "key14": "RLjwoizcwaH2pV7J33VBdjuBZAaJ4fqMfLfemQFaw5Ep5b6tJS3uX1Tt8v1RGAhqPnA6CneoDxeTeJfE2wUmfSE",
  "key15": "4uLKj9MU2FDoe7gwHtQBB8zuFRcX6PNiqEVif5KWGHpFuakDf2WXHzgKRU5QSZCUvK6vMsGNDdBGZWFo4XJHCGgj",
  "key16": "2F3ndZqo85Cikj2q4Yjtgu7wuStJt7hxnpTGtccwXp6FJkTGqroj44dGWgmViSCB3b9xjMAgdQjDesbAh4zGrzpA",
  "key17": "2gMoGRgfFAgBPi3ioScUzL9G4ooXi13WAeoFnATacy27Y9X6S8vLHZzRfypZ61rdi5UKWqXRmAAgwyJxcwgbc3Xx",
  "key18": "4y4ASqtGXjubUEYmc43gQRpvHyafqhGNAbMVu5PeRVyqFh6psEPihx2eL8Vhz66Jda7KuphND7F2o7QAuQGUAh8U",
  "key19": "5H5BytL41RgmCRPvmoQoZ7k7QTUZJVoD8MxA9qMnQLGFCmmbhxYnwvVL8GauF16dqZjfP6NV1jNte5sg9xnpnC2C",
  "key20": "5TJsxsBoBmHA4iAwXxQH2QTvZFFJZZtMiRyBV9FcSnxRYsjxUih6QV5swLFrY7Kh1Uawrsyooxd1bG4YqdG4Pzo3",
  "key21": "4yDNjBrf71T7A6MCXj9tnAuBc38pd5ysysBugHG4e2ucvKttdbz46f4s45YjTGxW9rnVoUjGjdGzmG9eKUhxqKKt",
  "key22": "5Etmj3igjTnuTyY2wQJtHUgNBQZEuShzJ8ohNA54V2bmzTW83HXUS7EGn1HQ99fkBEJQDRW6N4MWqeMRLcnKbyAZ",
  "key23": "4EGZ9549m3oTEh4SKrAK4Ni3xXMS6GDn3jMTmpo8cKgGTxVhFzf7echZ989zLeyCckP8BM52xW6G1XTYW85DjY5U",
  "key24": "213p9uNCoMmzWMgHQsdYnMraKgk41upLERX7QotK43AtgXErvgD5shSiSjQEFqvvZpHRmWraKNYVxt2JiHSKDUR9",
  "key25": "4fq7R3NwSVN2NempVLncw64BhXmARn2aQBTnWNgcjTbM11HJTvvPAY1mM9qmjb5CGdju53HGEy8mS2iD1n5eA8bb",
  "key26": "2sk7YbNnWoJFHsRkJa2k8qpRGJJvYSNURBKkh8aPdpYrE9bjUd6q1vtC9wiv4k1qbzaocg5uzE2x4o7vHhEhy9B1",
  "key27": "2U9CcCmvoD7wGn3vW22dayg1JzGFqdQVH2bLphyi6En3faAfToV2LdLN9ra29dGPbsExwYbuanvX93xxBQWJxqDt",
  "key28": "21fG2v5df8nCGpjTiv6qm5jSqCpa5jNq1PZss8zmtufbtt8zsVMLf1teZf4wHUmhVce2BsSa17Bu9b8WAnDy9iHq",
  "key29": "5itNKa4nm424aPF2iCwaeSUmt3DrfBVVSApTsX29TQRpKHHep7uGzpSUYmENzuxJB65NVStKznGqEj6B3HaqzePr",
  "key30": "2zUYvqx7L6zbaEeDPotpeUxT7vfGTWQRZPa3ZtXoyWaNJNLMVS4cS6JtQMdpLi2Ni37W8aQAVej28UGfs9edt25c",
  "key31": "3VYevgpCFraoqbtvGBghKs7qeACMYdF17ncqjo9uWr3f4fNAWTH6vrcj3Xig2iCoot5xyPH9aYP85qNYu4VMCN3t",
  "key32": "4Kvu36TjaZHdATDrALvEbp3PPLft4tDwZRqKMvUfmZrb9bBZGirrh5SLzT1Ewswz2LSqc7pyAgq1UrwX15VuNuHq",
  "key33": "43cZq7Y2qk3D7n61GtZHYBbdYMRShX247FbLe3Ki4EieEsrYPTDhMpk1A7hntZnVsh948D1CgCkQyjLHeSNJS1J1"
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
