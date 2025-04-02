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
    "4erKD2PA2BhayJXuRb3tFTfwjE9qXRjPZLYcfBRUHDCyCLWvrMyV7MtA8CMtYzce7jVfckBJPHEAs5o8EQRo5oJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hDJqA7EEm3NHa78tSNjLjzbjkwk6N4XXa2vJXXP5ffPdfFVeGEizALC1EW95EimHWyzyKVeDHS2mbtgjqzU1QT8",
  "key1": "F76B53ZyCqugNCQHJ5fCne7TdvDJRhyAYs1D9MbZXXYb9MEvemvGRVFZaidrDjS81qmBVTyFXkmQettYDTpfJ72",
  "key2": "soFWfZb4h9PyjLvt2cM4eC5iaBMrhpUSRurnSN1f3c27eGpx7HrqMJ82hH3XPteaSetmpGQyvyPUztDKzLe9Bws",
  "key3": "2UNPwPwHrdFYws45s3uaXwsMHTdGPmwzyxHcfVNWRWSBmCoETyvDCn3rmHsMcYoAHSUB5SWmKd2zkADHhibQkqXe",
  "key4": "5hiqUFNBbsjHgMRAsLDBBjqe6CzT4uhTcdDtekhU3qrJKWmGtNnVXh7jzg2CaT71mRerVNDRzyZuLMkmZ5qDRbqX",
  "key5": "2AiyzTA9SCvshhCYkLm6fiQ87ncFpci98L8BtUJZiAu4Fed6qveqquq3wETqjeTAEsSbfpsSRhc1z8nvWRKvZizs",
  "key6": "2L2MnEHXiqmc9DhmSw77RoQd9b8qEASxsKhGureEuS6rJME1VRffkkfSd8srUsoDwrKGwiH9nm5TqzZcpnsgoFyc",
  "key7": "3SmjJjLhC4qq4vqD5yp6EbXEBqZmmG9PVYKCoJs5XGjykSniW4XNbPbB7fHb8KnnoNTx5Gaz18rmbtaHpgx1wE67",
  "key8": "iihKSrgcdM3vdKyEBR6Qk5uKa35PQ3iqzxpgtHejbqLCbrkgZy6Dwx7vRpCoBQPaEpYEGMz9BjmxMtr3ZvtSW9d",
  "key9": "F2d2e92XBeWqH2kGAS8hBdnFfqczBb9aPQEY3HtiKqAVEkLLnBanYKivSdLvNDU8keCFVxBb2MxCJAD1PPMRhbi",
  "key10": "kijGeH9XQheNpZaBR7dWpMQJ3sJJvkxefqhbtho8TtkE7oFqnp5DhYqgyqyWLKqk4kw1sMFFazgefDooVsPkKn3",
  "key11": "36nQ6BQ5sUbHusg7kt29Fb4pHiA5y3ZS5Gb5QVVw2hazWGStFsvchQB53FiqjLDYysxMECarwmRohUCmSW3nwQkh",
  "key12": "3mKufgSn3QnvpcKH5jKdReHBdDMcm5Zx9FyQfJS8dhmsvxPreRGrzrZ4gCix2rLbBEKR6oFeqWfL8WYqLS1CNSGR",
  "key13": "5Zr3XvwuUsem7vye4ubdCPZuk8PjzvqNtJv6dF5vfv13t12YHeGZXYKF562rET1BLm4XKfZc1cTcwpQ6UNTH67Mm",
  "key14": "gSNQrVd8mo9JeYSWVzbfo743ghTUzBdywtBXaHCsg24SgzyEMX4TEYjRvAxzhoZcCWDRpA2RKVi87Kas2zGYZMV",
  "key15": "5zG1B733iyVax7whZr7TPkUX3zboYuTfLfhNLVDUDvorKP9fdqSKbedjsCB7z6VS2vYVz4scRvwDzpmBbL6sp8r6",
  "key16": "5qSKUKCaQ8addpnvRG8Zpwsmmee28qsPQQdXhrtwkFw7cxtSv8XVvBWGXjv29C1YUfAWbejHHsGf9Dfk4LqLBxq4",
  "key17": "GTWy18M7G9cJyio8bFv88qCrdCGUEPBxj2HmcNwdta9qZygqPih3KmG8V66DLSMv7YNWS1m8DZ4L7necYR2zFA3",
  "key18": "58BmnQrpJtw1sJFicGwKgRMDy6a9aKFmmdVByBFDaULaCPLeU9RkiqFCFVoh96JKFhpYe4J1W2dBVRQhj5S4CFkc",
  "key19": "5PYxJjtVXDb4KWHPnCZYTn9qqYekKNd4WpcvFe3mSiPbgw5uZMJ8tp3BMK41vhjef1NwSxByDQ8SvpR7oxm8CZQa",
  "key20": "3H5tnNG3zZSz4mwEC7h7RGFhLAwjHKtk9DsYTZeC8CSX4aCM37rCyXnNLWBVqW3XQiRyLZ8vnaoQU4o2uT9GiV6a",
  "key21": "4nYkU8FVYiob89TwBLq2q6AXrm4xEt3LdVUAxcYZxNU59NHWtg1JPSr7gUeEGsAtiHFqrUsDFU1T15NSci7ZqNVD",
  "key22": "4XfJJbfvVuTT7dRsW2kj4hermdgPNTGPtZqbL9TWU1dNjEk4Ci2nDJDnDJmH6H1L7vKvUKE1K9jab5n3XQzHi2Wd",
  "key23": "4jjivi5qWgb9JQDiRbE3AtomyzRcEwyTjoLxvb1mLbqquYkdZpprktT5bhtSbvBhDpHbeBqtoF15uE9h3ZV63WCS",
  "key24": "M7wYFWXCR3uCtthjqVCeFBTYS3LnnWVonUuNs1gDdk3sY4ugvdBGyrfWN6BGBavxGQpeACNkhvmxxuH42VwSJHi",
  "key25": "52q4hi3Smvbq6RSK7HHSqcysLnGQziAoZmLUWWkvJ3487Wtea2Ccr6Pc6nXSExR2yBtgAuYAycXL3k7YFD6nQEZZ",
  "key26": "4dnFNCQPbL8JNtGs8oC63VctACbeZTgaTQrERuvwRyUeXZqWyxpNUrRCz3XjpWmUrDKVPLvp1YRJo4QBtdPY98aG",
  "key27": "2Ax21V6bM1BvLBkv5jm9PLjoJ6LTgJFEU8VHH8kJoSY3w3YYqCM7jzxMzjJy5SxVe6GEcTMtKzYHDEebVtc6icyt",
  "key28": "PMjU5uX1HmckDpwywoLW96cb1fttaompKcqL1XDJXr2E21amx8YTkQ1YGfcb3ErbWkpxfUYKqTqhdwhNMBsrBfS",
  "key29": "4S2SE7WqsfaGWx9M2Cfn2h8xdwCrB8cYamLKrhzZ6FP2tCo1XSqHvmDUTdSUTTC2kA1iYu7V8zWQ9W7LDbKVwvUj",
  "key30": "3PhTuaqJUD7vbA1n7iUM4xv6uS6edzi8Fb5aBLEgqsYjgnRqdLKQCBvE8mBLgXS4cexZ3DVwLjVQmDXZonw2dNhH",
  "key31": "3DhvwquyVAHeTYDqoczWbQAUuEqZQy3oWS9A4iEcJNGFNzGyhis9EkMMa9urtmYtZjN3XrBx6dnMkdfQSUAS8rAU",
  "key32": "38f7sEXFY8Ti6cjkC7y3nsHfDrArgfpHMZhcBt6zQNziardYXUzbdwqAz2AiXmntbQc22TtttjLwW1MUJxXu3Z4X",
  "key33": "3N8gHy9DbVGvbAvwLr5bQi5XRfHAQJcSTreTk2hwLFKPVk6s8AzomsGdYCbmNemD9AZFzbDupMafwZH7XYHutQux",
  "key34": "fGq2K2TPgNRaGUq3fGmkmY2hDVGx52ED217X2xKaW3WVWLEv2xi3qrZktGYGz4RzSrQmXm1zTobAtLN4G6dkGeH",
  "key35": "3GnbX4e3aYPnY7dD19zs88StX6wfoN9A3Dy9cNhqwMJsvteV3WGGbUtZWtHvKuPMxEGwgu2ktezSKwo1cJzGDgDe",
  "key36": "nkYQKgUtDbzDBCjR4JbY9pZa2khrXVMUvZUeGagqQK99927Gutk3ZD5B3Ua6xbuBfQsbXajdYLyADXPzoBs5Y53",
  "key37": "58fpSRSHD6bf2LfgR9wvPuyUr1HccAyQXzTtCGD7QpNoMPgvgXDfeXRf5Ras7FjrV6J1KiFpz8uYV13wMqFFiLaL",
  "key38": "4NTmufiCV96ve3Ted4sj1mmd4YNTAVXsSBeL6ygJZV2f9Q4BewwNeSZUmPU6yiD2C1K2uThNe1WyKokNUU1VCpqC",
  "key39": "DDEzhbGFskwak3571xMebxnHXc5XZGzLywMTCapfQFsTjkrcfjazAjnEYvNqvGHJBn66EWRFXuQbzAz7TQZBJDg",
  "key40": "3oXYnWxuea26f8geis6cVu6fmGyTQVP11KwHK2TBQBEFuzgWqRMLqdgycF9dtupuqg526Sf8DbiZcgGPKB5AdjtZ",
  "key41": "moc9dfxHQVupA6YSYJdo1Sh6AQeBF4ZXdcmE6B5KoDCLVdJauHYaxfbYRbtA1ic4beVBFEzMJEEXrViym7VJ2sh",
  "key42": "rsW4ejjgCtUvmGAmgpzzUcewrVrJRnKxYopKvbqG88ZRE19voKtZJZ5JtQn9xTnyJnG9hNm7R6EeMQkNLrEY7Lb",
  "key43": "3dxaRnRHKdWufSt4kTVpDMZ4J83oDYrSci1N8i6R8qaQqnKcns3s5JboLmCHXFSxEgEZ9T5DJUNFmqcTSGRmCDD1",
  "key44": "2L1zuZNqNahyCJ5okt2mLeiQSmBqhMoZZje4iUxdDfuzJbNJdw2UGBEKVSpjPdb4efsxQAWAety9zAKg1pYSSYCh",
  "key45": "RbS4fupGK5JoMPqSRBV3WkeTRgVfdPdd6BmAtzBHmMGJ1tgjpFQvZNxs4NesgsSp19Z9GqbrAxX6BF4ANP7XdLW",
  "key46": "4x3nZAyRdoAYVoRbRZmH8thQ6QcKkJ9Z6BeorrojCRTufvbqBa6Mybj1YpbAje5vPBzH9MmdEY9vHPozqxoPuS8s"
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
