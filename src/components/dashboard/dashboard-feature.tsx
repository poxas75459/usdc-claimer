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
    "NaxNcq8P3pPjksViYGqiQkhAU9T2yJsyDnFd2NNeUnPgWHDovjCU7313MqL5catZ1WGdggeNv6xbEPeEhBDTGXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nb9Zv2Q1nHHB2BArWkDY8SfxwUrJSxqEPtd8CRs6EsbfDiv8ZUMWN6J8SmnJ4twRrD28945G5cmjjtwFjo5tYYX",
  "key1": "2Zo5JzhumA9bF4H7nyBALxxQY7JZXi2WPmquZriYJ3AugHEnCXYAsL9q5ayebW4KTKUitNEEbsHowvvXpY4Vd9U4",
  "key2": "21jmHer7cHfMR1UpA5a12sHHebBu6HwG2rQVY1jgMsV1qDYbpm15LAr9ZAUPC471FHiZQR28hzd3FUZ5ceqx7pPT",
  "key3": "2yJbfmVawMnA1mhjptXW5KfqYc4ACMYVC9bjySH4g8AQ8vtHgad6UNEpf58TBTtjZtim5UxikatZ68tkHy5GpncJ",
  "key4": "39VxoYLnh7PMBAV4r5NaZivWHKmrMvciPA6eqDwtJU1eN2iuFj5fFKUhFpRNeH5qVuTVWuTUffVj3J7w7HYMpNaE",
  "key5": "5EqUtCY7DTg9xKEHqSZ3Jb5ZUZ3CDxEAKMYsztK5Bc9sAhwNNyRn39qej6oBh67wjdGXZm1rW3rybGJKiKoVWhfk",
  "key6": "5ZcgziaDwvAzbiXQJtQHk7ocwHetckcr3GZwD7N3yAj7zgS2AG2hzcrAM5ayN5Tjyi3LhhVLm3hhRnbjqf7sSZKb",
  "key7": "fcCLWh8ETpZGwc6NCYV1bX6CttReeyxJ2Mgkd2mWPgSJ3E8Vk3tSNVqJtbER4zBcHEubDQAQYTWvbC3E9eXZyYF",
  "key8": "4QVHYZCrkhnCHW4JsoFb9HKccCMf8UVrKb46PHP6EpMy51MzU4uQzEAxqykMXLEAQyJYQpzN2yQnaYiEon3QywpN",
  "key9": "31GuhfCQefmdeqNKj3rTqu4B6waH4Q7F39acH4rTqmaztu1mdFPRg1dzvcMrsxePZBiDdsZgNHNKDq9oyfy4XUxW",
  "key10": "iJUYKaZJshuWe6B5gmsd18YVc6ztXNpNMLdqM6tMKV7JGREptv7FLN5UNG5fqPUgD8QNboHnPTzYQ7KZvt8Zn2Z",
  "key11": "5Vwty4gw6WHZnwLeGtuw3SKxax2vHvm4h6MnZRHhoL5rhZZWLWBM1iDiTGmWGcgStA742zYwkYN7BWwq9LhAuT2C",
  "key12": "5uvBFQrj47DvrTGDoffV3QvJYHp71AV28FW5NxLuSDxstfyDUWEPS6GYUR1nqAqNtbbe5k8zRz3pCAdFNtXEBPmR",
  "key13": "4zHdvy7SCQjvuA4hVD9waAaHskpwwkV1dx1xjAbQN32xCp6pWxtmze7HQya2cRtiwEVovuMwx5mdTfXn8Am7U3Xa",
  "key14": "5KTeJhakYwgaEz5MdxunkTwiHHZ84kjYfLCnSTkYavjtMKSDNsMArJpEYTu7FjLeLNEozCe3MWqVVuGodxExSica",
  "key15": "598obidRpcaWU3U4vBZgAMU4udv86EAy5XtqnuF4PkF7C1oaJ9Amm9JhQFyThPvRQ5tNiwEMt2aRsxGgJSDNQ6zt",
  "key16": "2uKPWgmavaBtMn2mwxRQ1fkoUf685M3zBrV155YhhCRfuK7VY1gHT2JGBSm9JBdz3ESafh349gmJUNheuXyBTp7r",
  "key17": "4HShJSxcLWoDcnfUWs7TnMwBqdqqv84KDovaMVLHfKgEVzx1H26YeEPafAxiFLvA5Z6RCFYKqYYdruvo3WLWeN6P",
  "key18": "4cuATXNG4j2DBkNramMCkMHrjhSz22J3VvFKvRsXgcwhyt1f3WsXfcqFStGuhM6pJWaojfP7frsvNqYwNdgkKdi",
  "key19": "FiwpSbKYQkk3pgoj7pZPZgNDo23o3Tckba5J8Xdz9Ecx7q9ZkWiukCkuHkKeH5nVaenjtmTC9xtBn5RT1uLd4Hh",
  "key20": "4v4Bp3LZtraeeS2pxHu3VoAeWWuvcaWJrp7w89R15Ng4tMUzpvfQV2dVcJ144LiV6LhgVBKsUSU6puDWk4kuusBF",
  "key21": "c9R7GBVv9PWuYyBjKDn43evbKNNnwZ77SCAgXW4j9gkEX3RUZSw4zV8cfPVwnhvGZoYcuvwuToS7qhTTtCiN1H2",
  "key22": "2WvHUggGGHDphrNceuHWWcYGEh4u25VMyJGFKxLPBZJAKeRaN3DVdeDZvSrkDPWKiEgAwAu6tjFCd3v4CLb5Xhwk",
  "key23": "2ynromj5tNYLh97ugxsWxhm1TuJ9hMc6BdWNxrFhh77tSezNtGPz36RJ7j1gamF4weAC4fEcLFy3dLdZWVY9GAEi",
  "key24": "dX8Mttxdq94QKYiKUBBqynhYC28sHekApAJJJhgu2i17QBsvAxsBKTEiNVA9MDzwkEVbfuFrn8EKDGiw5xZaJtp",
  "key25": "AqkdUENeBzC6cgHruTuBV2T2kCmSFeEVwXjGBrYgZnBq5pbNeGtTzVQtx8pTvdM2oqicmJSo7oGZ9qVzkSEUzmd",
  "key26": "2gZjMD25QBGWMxWRVCZmLLEZXXTke44FxKtxR6FUpGpQk8vZdnMA2VJC148YrW2ueZ7JXgGmn7jzJUifmauCxxF1",
  "key27": "JQNab1UZURq4HaGhFbCCiUNML8BTE7uQQN8ZDnxCFnt2Hpw9v9jS4MzrPMVGatCMRDq4uUyyvc3sNJzLwv1Dd5C",
  "key28": "5AMptNNGvDFUiCtc9QvgbFMZbncGsdXTZeNZMSNZckeQZto7TLWmrCnY38XHw76UG4JJF7FfeUmJdvF1RqYyqymK",
  "key29": "35RrUvgyRawrg2bMcB8ShMvB1s53ERaGYk8KWfceq6bNEM1ctjRGa25ahLbW9ZvEpegFdo6ETRXy9nrXuattto1N",
  "key30": "K9hsiCYCu68vyNJRa9QR1xBVduzjo3g3tHcHEvZYbEgKCoXsXR9TP8pyAYapuFSMYDU5YMqjniHzVEauHK5zvmR",
  "key31": "3YRktZwAbfUQNgDrmqj6De36Vn6fiFBV2YeUSKcEKPaVFb9fEsrsKBwP8BKUstTDLHbRo4bXzPWU4WCKFuZ8xhDQ",
  "key32": "5TApR1d815CEjZheGoJN3TK4GVTtwMPLFjwgEVj44MXV5CUYMs4npQu7YbXoeNqTdjxSUvKUxroiv2ULAaC6sD2n",
  "key33": "2QS25SHnNgpzVdA7q9w4Hq8EkGPKS6u2FUqnphNcMSt76DgqQoHQjDJ6ZzAU4Qk16oqFp5zqXmxDZUU6CQgkKWHr",
  "key34": "dTWfVRoLUbBdcPiC7nCm1S5ehbToMb5NDX32BUCch2mDbxNgZ5jh3rqXq9nDZ59pvFE2UdHhxwitGTF2HoQfbQ3",
  "key35": "3tFfoRBMpQBCKc3ccQPx4wWm6pvqVCwKzt7GUKTrSaDQ5vAtBhhjWt3zDkYq2a2VS8irbC6xbZoxiimkdLhPURPv",
  "key36": "guMTmwMS7h8RgKoiELeug9SixyJJYGrXaf4BKUTQVLJ6thWoZ3FG4sB9xPrsgjeiG53WXi1ANikySqMrRfqeTrQ",
  "key37": "Bf22gTM22u32Tw7S4G7xYvDRkqQZ6hU8n644DuG5xo46q6bM62RnYneUtT8HFYcw7jNMnTh3LTBxSNzdfMgJxMp",
  "key38": "biiarfcwNkqtzzXx9PFnR2pYPsaeEErYSq5HsvAQzNk8GtsHsYe1rvB8BuPL85Fas5Tvc9obHiH3EMr1rjm8Tsc"
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
