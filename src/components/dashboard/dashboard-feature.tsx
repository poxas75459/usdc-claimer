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
    "5XgXQVyRdeV8aGF1PRgzuHEKQKU91on7vMmErYUgUh2UWvWyA7N9a4FAA3fSqGYA8shAiPntVMFoSoqRT2Agarym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fT9d74zYDjhpJLKuphT7dWbR2WrW6NxmT2gPVqNBYQA1tFK9kkzE864m4f7rwT55Fvnf4W9vP6GJgZGTLJNdTon",
  "key1": "5WBeUg5RUhcZnBFgAhLkaWrxxpgmNBww2XsLoBWedQWRdVm7keTzCvgwunS1sCoQz6Kn8iTkq4p3WPoqwoYuBbHY",
  "key2": "2BbJSbA2YZiyrYZqW1Nj1SAFCDikaNtGZEAC7zjtAeaAijv6Szofcob2MHxqnEhZ7tXAeeb6QFWHRfcZFYpPtXAx",
  "key3": "2EYVtutWgWWtxq3SaemayZrhS3TTkV6m6zB6NwHBHFEdtEU5A6qqC4NeKa6bk8gmdzJpziwzwyQFnKj2JF5sPscN",
  "key4": "35XKprS1DNvs8qBLYffKZMRe9YtwyYDioQmgTfAVrojSzRW4rEwRAxsNZvPWoyXJKVXkqtH3HdczUx41wE7q7SCc",
  "key5": "49Qnvp1foUnihGQTJ5GdNanVP27cSbh8byHFthTi14tiY5Y4Tmi254iDAnFY2BUha7JzZz6MNkJN2LQ3xyKYqfUy",
  "key6": "3xFZ2jy84WS4aWYZ2RmQ3Y1VMNvyXpmQBw1TPrSpFcsMUDp7LLyR5vyCGWATtvrV2G2DzFv8ua41Zyr14ofe9SXg",
  "key7": "3w5CE3oJfjVfLimMvqmabnqMRufW2vriJiGvWvsmCFakDimgWyjbohgAN1nvfevfKFoeRPe21f4wbdazuPbrF8K2",
  "key8": "3RChBBnRQe9YJR7o7A1nFPGxw9Hcr7QXRNts35Y5jwqahnpjjB1LGXByo1B91rBUeFbTvZHrtiCHzjp41AE5F5yw",
  "key9": "3E9K4MDUeuQJQV47M7sa67CRN2pwNKu3vKEZNxotq7pPUPRV1JJ8ogizAhYmZuzDhBZYQrotFV9umVxWScvCdUm3",
  "key10": "3asJf19y5fFswZHh8oQtacS5t3T5iKN3dfZ7iyNmsFrCcgVjHHD8siHjCWpjSWjBFyGhni9hXt2gnsrjquZwq9Ht",
  "key11": "4zeAFiXAJ3nb1D9hgs3ji2Xq8ZaB2kgeaCxNVZBoPCRSixwb8UCVbYgjZNPDZnUUeMG9YNDZMjj1GHVyXMteTL6Z",
  "key12": "5HzGwiMipVp5gCNH1iiLxxuLSnQJ4hanYM3Q5bpmxy6f8uzTXQ4NMCCBY2j442kAbVmk63G3LScZRmEo1d3wJpUT",
  "key13": "4jcQXw88SwhAoj5WnEAk36fs6kSnDpcoocqqUXJamWj7rHT2cWmk4MjrABTaifKNutdsBFhHtQ7h5gFJAaB3Hn3B",
  "key14": "31a55mPy6abLCC2w1N25pLoGp5mYGYmhD45cLqbjqgvCeFxHd4upEy6Wevo4My4GPSPTCGqkZkdLWDkV5kz8Q8tn",
  "key15": "UsuRkn6wE9NRigucFbBSKB9GLab8raK3T5HadUmyFpnUwpWAXUAuABpEZhWEJMNzNA7JPwagTK1exZkKKnS8Sf4",
  "key16": "YbHUe439eLp1KediPizGbgm8VpLTkctRRSyN4ANJkoYt8qToxE9Heqv9EWa6PfKEueTAn4M4hm5jQwtT6cYTxL3",
  "key17": "2LwHeQzMvtuDBFg5ArRLsENrSdcCzGrtR5zNatUapH915YtPcnuow1he6GN6hfUSSp2L1s5PT5DB2A5wPk7bfEgF",
  "key18": "4629xQn95QkQod9RYBCeb9178bRg3inc5Sr3pAC2trZLxyevam3WGE1i3JsRzSz8ifXgHaYvuKyZfcjJggQ3ryGK",
  "key19": "3C3unyhXwGvRdiM4QNQRqXQeRz3uxDp2CKfRq8jKzTpzatfQZ9Zi1mQv1R3syRDXeJ5RcYSLyCDCZnGLQyAA15VJ",
  "key20": "5mz95Hyqd2zbRaTRRN4UuKRKirk7Vnd7A6TW7izs4P4ReeQQJFz6nTTepDvYNskx64sgjvUqGnSmJbSkLPRENyqo",
  "key21": "3a6bCmbeysz8W8kg5gnqr1MgWN69PZq62WPBPULRsjnJdX1TfUQsRKYdSVxsuYzyCHzSi6rqsDtsgRoEbi7Pn9Ud",
  "key22": "4XwzrbH7PpE19nXDkTpa2jjpcBWMBi22x7THJ2XMLQfD1V8gpwKkBaatHJuNF7iJ6v9Ku2qnD59xxduRnqwyAc1g",
  "key23": "2REsqs6rDUdHdmuyKg9F512MbDa633Br3bdW2iHhu8nd4tx2y4NabP7dAkCs2kqs9puxRECDDMF2qYic6KjRGfXh",
  "key24": "4FbwYQzZ4tVZvAUgiUJwpwPs5UCZiztKGifkb6oQYMB71Y58qvmsUts78jRFzqcgJEHeQjqZMePVua9PHfEeCKUU",
  "key25": "4vfAv9chgG2GKhtiKfeTvxhtwkfnskQerVxuRQu6nnm3mPkZoPrKVunj3ZFfnL12G6Y9EWr65bFRn1fAQMy2GY1k",
  "key26": "AKrNUZ8AxBRiBqrv9Csz215Yh7YWA9hNRfE4dUYcoe1Xq4v42hgQPbaMwW66FDjmnBTrdp7WV3cbBiB8xHDbQcF",
  "key27": "3RtwkVYSPzyqS7oZhgHp3Y3wAfmuYnCTjKLXima84X7HGpW1Cb5xUpCNRtRdvhEQaFRNc2P5EGNGGgDBCZhxeMY3",
  "key28": "2xESKErAveCvP2KiK7grhANxUcRoDXGpT4v7v3APCAQ1ojkjdKEQSpAWJnJFeEsNxRwoi5FpL1PvvQtNaFdV3Mg1",
  "key29": "32JkEo36FW3PED4jjPqTxUaQH3V8d6VZq7ebuCGt4xhYS2tSLhfBaAcjiBtmEbwK9TmnLPSK9oS1DNFjTAqqNSMf",
  "key30": "3wWx2q6SiqrvQ9P73GZNGcjS9tEYbPEAxERk7sAqEoa5KNDehm4pEjNtmZkhXufRUnuf7CVaamCp8RWzfujsPGmF",
  "key31": "29Mh2yeTFqi6Gv1VLwH1ezjXtWFKXB7XbKB2i3xKntzqY5ZKPWubbRadAvThXF8MrFBHt2mRLYh63tqYtnGkUeCh",
  "key32": "3e5qLFPTH2Tebm7j5rsG424X8UhCJ21AH1SnyruRzvYK2caMfqzhQFiBTPe5F4zzKUHBT11cAzeyBSKfUW7Xr8L",
  "key33": "2ChrVhykNq65GoQicrFpiWM2ELc8aG5ygjh2fPX3gJj3dDzjqg77o9cT3VZ9HLwWUHnLGr4uJmtVV55VQHWX1bNe",
  "key34": "2chzy7Xo3wjZrE4dD1TNGtfYVtV5ucSAzkQDxTjvxncMY48XkYR7MMGsskubPbGsGxJaFbp471rTvp333UJR1cGF",
  "key35": "3u4P4qKkAewhh49gMXib1cFebHHbSHJBBhHuukq9FjCKre4x5afsFQdFqXnc4noUbzh5JEoPnJJ85T2DY89SMxRy",
  "key36": "3w1G5PCd3boRkaW53p1gaCrMkLj4CCVUGBgQ3JJEGnF3Dt6aWTzrkWk5nJrLbBdxnaNV1w41SdFtsCDC6VdunQiE",
  "key37": "2jpegA1uYESFjP3jKKb13VEVcRCLcZBJynkfGJLZns5qzZZyve9YYvPtVWr8i7MyMzR28XJcx7YFF5fDPn8QS7nf",
  "key38": "5DezNSW7uERy9nhKmxLgxC7K5QByP1vF8cMbCWori6jUw4SXEEvSccH96cpGMupDyN2jrg7uz4ttGmKdEFJuFU7C",
  "key39": "E7XeCxqPwV7LsyKnSctZs1nnRnws6Ju1K9UaRT5B5dxPLLgJxGxFt6hmG4QXGyDwEAorxDHt9XUFVQPEJ1brt8p",
  "key40": "2AwUwLpQYVpP9tYyDBmP2NEufiCkxCmPyqScX4KJE7JBt1ZxguSmhMFcVFAMsBUM5uCXap1MqF37eJJSwLaqdF4z",
  "key41": "59T97R8RKHhhMAtitU7mMEPPvZ3ZUbFxpsxcXzVzevZnD9uRuKqzV8JTiEstT6xPi8Hd4ZMEcGwT6CiXvA67ttHu",
  "key42": "4EaAiHpziDhgfBGnTir2if23rN2hq9ziEVuJE6dFGX23aFM4KLfXApEiCoVcjUYFMKhKDhGQah6KvCRW6PsR5GnA",
  "key43": "3hgeJXLkYLokapyxrqUGgwrXcPwoJCEeQcYCddo8LLA1nm4evGvuzzNHnwrwEmTNgieGnQXfpbFBnTSkhNc9fMjK",
  "key44": "37Upibpmv11VYfkZRQ1WTXhBBYJQZHW9toYYT4Ziprkfsh9uCqnKB4fEQLdmaWbZx6LxthQC5ETGLXQBJNarXvn6",
  "key45": "2rwz8eGWFDw3RYp71S5XG1zVduT9v3Ekvf17bxT8sNV6z2LLP2YjdUTNWSLCy3igkVap8yksh8FHHCUDUPkseAnq",
  "key46": "54cVEfjZEaUNMMihmtERdq6YFjSVQTW4eSmH3cVhUY1AVUJBbUPfjgJrvqDA3NHQQKoxRaksJsB7dgHUGbWNZvk1"
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
