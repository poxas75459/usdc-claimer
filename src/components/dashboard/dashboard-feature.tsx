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
    "4ySCrmGxCHoQ2nsa8RWdxvZt3A4NjjbuxQeAC3My4H6zXyZ1QCVUgQ8qXJ632aEH8rYiy8NXmyypaMmc6xrP84sB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GDDxcmrqoDfdARFoMauWfQSeSd5c7ceFMnQsFzWwjYGxmYT55H7FTA6VrVeCqKMyCvLN5rY9ihdd4iaVuztVwVC",
  "key1": "3uXjHcxdfX5aAGXhEA3xQzMRj5fgo38rvQf3ydPK2GSWY9tJwTCy4U6faQRfn6J7y5n7zgd8xcsyJHpCBTeBtkhf",
  "key2": "d6MuuecPUcqvsuKfMriU5rMZW1BRGFo52yPnstWQrzWY7unSC2N1dHWZpopEvXFLzaxRpnTAKTLZkuuURFGgj39",
  "key3": "5FKMEjZDYdAEVUkmyprwHxU9ePzcEJe3Y8YjFmj8m2DPRuEk1LELTpRx5qkQynL2yGpSjoFkkNTQB4zsi3js2wCw",
  "key4": "2yNWpsR8TppJdT97WTfwkBF6hKVP1eN51azN8czEUNYJzUotfs77RCbZGRwRWc1Ez7c4WtpticPG8jpwnZSNsH89",
  "key5": "3J9ZLCoPLENzHxQL3FfL1JHwGj1LtM1DXKGE5CYBCPB3RxR2PWbhKtXvz5ouAtA4XcoTW3tZzfPuqmSfBcFk8ZvB",
  "key6": "3RtUEnJjYfNhsb85SCuFYC6RUpQ2BWGAB3jGR2MeCyHdMRLyranyx1zdWLzASZ3tp2kRhkk8fg991bK2LwPineh",
  "key7": "MsJMd3FbZXke4LDDpkMWvCPi3AF1pZD41Emo6KPZRFLY33Xv1DVU7Uup28X6E5VgPiRy9XcHRQGTPfpp3HhqiPi",
  "key8": "4gChpV7p3JT9nXVr3Jy23u2LSZMueUFHHZ71NTtd8ZuxQYt2fwNBQXCdp5BD3oLUJ4FdGmf8qy4eheXJ1ETS7pCn",
  "key9": "5QGwjPATjv3VsVm1jzGicroMiRrS3VYWTDdkgKifWqDFVTohbp9wc8rQfDbf7rnzVyvTudP7MvaDLMvfBtTK4TrQ",
  "key10": "3mwmgGSVYk5WUNitUzwRhjV9m8dWRejezpVkHZ6rkgHv7vJQdkZ29XDeAXXJDYAtjSB6ULb1Mg3gcKjxSXFT6mYv",
  "key11": "2h9dMGYxyjPyzE1XJGtUbQy6eWKKBVCnRzHVvhJDqnusNLxoxXgVJw5WTcbxNimZrfHq1fiGJEa3W4WDWHWbQSxY",
  "key12": "kgFddgomHhr9RkLVKuo1qktCh6mcJZXcYaCgcteBDWzh45RdvmVvQVdKE4vhMMzEr5eMaG73XLbijVzx1RB9Xrh",
  "key13": "4mnwH8RwAJZagzmKwwttXbn39MU424kxK1P1YttGTNkxe9JDv1RRdBA7BuMuzDc7Lt3FubBPBU23KY1NnU3C8Bhk",
  "key14": "339bQxzroiFpPKfvbP9rKCW6mp6L7aNwZnFZMhQDKzcUonJ6vKkXjksnk7gtAYhegJP1GSF2dNRPptBwxmfwMFF9",
  "key15": "3cv3ZXXQKCHwcomwQrGH1tjLaKtDf332MJrKDEikR3UDs5gD1PUEhSKc5348Kv8Svry1HjV55SduKFZhYWSSsT7P",
  "key16": "5B6qsQiBFcSSWg6VkczYQHdHaYT5tWeskwRRoJwPFbeAzu5mUT3DVJBihNSTov6XrFezBUR5Xr8Cs8AfrM4HnGxA",
  "key17": "2i2TiEzQbuXTRciuFKYgoZ3qGYDMoatqUYAToCvAc2JcoCDLFLuu4EbU22ohZyU5Jg5RYNtFvy6DfUB7yyTSib3C",
  "key18": "5poLo9mG4FbPbJewyVVDYsMQtsYMgTfXryrZuXujVe6LPiF5r76ZDzZUqxrW1muvFNcFsmWbreb6hyMeeKQwQf6j",
  "key19": "3WMpxNGrmfFTGuMVdgjT6UDvr1yFLZQdB3htsz4xavTJtioHZDzfeAsUb12F3vK8erVegaDm7TjuyscnEyu3imnN",
  "key20": "5UavfZgaMtmApxPWtPK56zfpwSJaFMnqKZpQrTNNGXpDGyZBXN9hs91xDMimhuonxDap6EMqZN2VLMNQQkYUfuUE",
  "key21": "zyxp3cNNCThYBv2u2T6KVDwbfFuRnQxzEAvAdLZjzKZmKwam3n4DGBYNGrNHcPkEbCuFbL2WjJnWYDfZXmcm7dp",
  "key22": "55zcMA69fVAGwhag9WACyovR8fTZ1P1s8XJeSYVQdfaYYqNbu8KfZfxW9dozsXUk8Gzk3H1rGPzLisXgS1XHFAQ9",
  "key23": "4k7K9c1oPCUyaAfH2FunMRhsCKNY1QU86sb5eNCnrX8CFk3trqRHL9vFyuWFYRBq2zavDyVb3Hp7U29y3yqcW2fS",
  "key24": "4211fkA13MZTszjMQgkqMNRGKxePyBiHgR4AzHmouBZvbhLaGarADe836nD8Zei7oL35CKtB6i9XreBaRHyVYncD",
  "key25": "3x7jXZEBW973AFvJXGFQvazMKxjweyaFZw2c9eGjk9p5LFGFWsCMxhNZHApWJenrV3PKSYefUXKkWBYpPrkUZ1dB",
  "key26": "61pFNq5zny9XGxr33o8BtLW5CZFqp8uBtHCJuX1R4Gecc4Jn6hTPmEyvX1oMu6R8Xz38k12ptDNUtFdMYZexiccQ",
  "key27": "5ytJzt85p12UKh8AZpJqEg1agf9quc7ShbeqgPY92GdLmmEgBFqP4JLXs9E1JhzLL6uLnvh9xxen934d8yJBqH8R",
  "key28": "5REgCvkRpYZJjbAAkUnJfFXE1H4rWtsYmoF5kimPYqmSsgkYbiLJrzqMj1m3DcseE8gpuwFGTSQf7v3SnvzLjzFS",
  "key29": "3ZZGk7xHfXCyf4LrrojxeVzUtrdWsc2r6XdXKWyXyG3ueCKd3sy7sUEqX1zXGLsVHTYx4rcMEtzMg3CWnVZeKxVX",
  "key30": "65yBjcUEPgtqEMbpXpXFp5AoiKAaCrmie4MWDW4JxUEtpyfx74NQkJqZ2CbLq7zWd1KTcjJ2N1gonmuUqBrYF3Ju",
  "key31": "2DemWnUuRYqmmoEBKmsqAD7bTMnfJeBZagcckT93tHLJfWPqefKTa817Yh9c35xbum82m1n8jPHQ5UU78eoASJZf",
  "key32": "21Dgabey4o9w7Tvn99ajYCL5oLnTkhksu5Tw2tEF2ZNLVMqTccoStTPjvjqJg7ayZzekNNXWiVyibDYNvzn4CvZf",
  "key33": "F1Ruyzv62U6DwBg9EydJDkaFCCDEiU1d2z6h3VnHDVLA6ymJRXC3rnDMHdc1LFEcoZc6GyPxF2UNGw3QxEG3zZG",
  "key34": "5jRKgNeneqCqnM2mCCSumxpCcK3zWRycnjDrrRhL2Vv3PQnP3YvQryB5zDHNf4fUxAJzjjgfhHsqBN59wF5ebjQu",
  "key35": "58SvmE6xzUrhSBd3nQ8o4kqRcuG3ubgiMJZbs4Z4bWFv9WWx8NVsxMjkc3yCD4UG9Am3atgoUs15VwgBFvWE6a5d",
  "key36": "5cVuM63cqt1mRdcustskGUy727CoU1XANhPToqEtewmfNxxPwDcjMStptjR84wFEgGHaUNM5MjBWdY6a6w6VQXC9",
  "key37": "5wTdpMAuYU9YRRQcJsVkGbhiSpk3DXMdqJ3XjY5vZD5bEkMepaqBeziTEis75XryJF8U8J3Ww1rjYXH9G7Kc9ZvK",
  "key38": "2reviDaz95EJ8dptEpXCFBTbGYnDcvJCZTWfzsbp1j7Mpufi3YtSGCHJBPzjJCE8tbcovAqzizPqFX5KeazxZXje",
  "key39": "5HcT1uLaTwjUFfgwuBSvVeVLyRTvQsBdp43SyeYPP7aQjD71iBVs7cJW8sBo5Ti3zUpL5Fod8bC5p1EsHXU4ARiz",
  "key40": "3jZEM3Q9Tmw1dDd5LWyYhkrVME7kMFJJ9667CXSaUiuDWbBgrw5dQhiVqsfeWHAsvBKqZbLNg15eoDCq3hxGGrTx",
  "key41": "cKb8USswAyE5mnFvYFboHPRqSG3gjbHQnrtGVByTxxdEqVSjK4dCVudNTDwENVFudYTybKYmVRBa78c5HdVLj5B",
  "key42": "2hQXfkrGFjWdLRYuq3iUwXC4y7XWc85v788QByGkn6iK1QuCUMPeRBQvTjLETSHqzAzBQJNX9sJjyhk3y12Dk6t6",
  "key43": "4nC6JANSAAUpqgVu8aEBNZvPyCTWw12kCXQfAYBGc7vtdmi6rgcD7FjDfv1zLwVB2H8AoEPBkdvkYGPBsQ9yLRGR",
  "key44": "T7MndVNRyDZDaHYBZohXjWgaopF6FKQfUMdsFF52D3xZGPonYELiUbMjuMMpqAMW7Nj5VU6HroenBg5djgxjjkh"
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
