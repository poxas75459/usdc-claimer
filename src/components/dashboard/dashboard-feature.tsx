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
    "67WRJujdDHnz89c1XwodNG417EwhuLB6qpvohy4o1wXDPsWbuktCwxaUyiAaSfCMfEn2SoH2kqkQHkS9SsQDK2Yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SUpKFAgSPCJk7NVV3MToYrQjZWJnMhhGwmAwQt53mBzn4MUVHBWD9xMMsYETSEWvgx3gYoHexeAc6o2K2wCbBpR",
  "key1": "3kG5QhN2vWPyWPU2VkZdTP6P2btFaKt8h4JhFz4eZrX7jwNo2rNtcPXwtHHxpUUaurv4NtEYyWbyKCnTHvNGohBd",
  "key2": "3vMaYbovQR1qWYiuBF8bBDEcVeKVghMzdmdv1Kccau3MewDzgbKg2ttZAgCc9CFuGg99GkFCnKmNLDYmKgxFAVv3",
  "key3": "m5p68uGmmijcYkrj5hdCECBDgcF1fFo15pU5VxtVy3hy2LZzzF93NNmdpHs9kKzj9ctPmYeP6xnw4e2gFKeoMWF",
  "key4": "4AHs3DJ51N9qPWzVw4zC6N4e1FdTicDG6KkETv7SrXg1KgH44HjgYmsmGGyv7ivaBxPEHgC3R5BD3eSCZzcn9WcQ",
  "key5": "2KBkuZvGG6qeZMRnhAqZMq72V9cBGPSxa4zDqjVmyQkjdeWfNZre59xkCGd7XBx7ToPrRNjttikUsW4i1HoWM2Lz",
  "key6": "3WmT8Lq3z7FX93KafvgNDJnxZD2bSvRKjzmx84NFerjg8BbpnoDJY2e8KutTHFGUfzXkK77A1J4BmDT31mSHUdyN",
  "key7": "5HDyDAdtxajRwiREb79xEGbdAbXbuGbUEKMTgYx2pVvQatBT43Uuvg9JH7J8iGNoqC2KiapZdfqt2WToQTKMvw7m",
  "key8": "6uQ2aEXg6MMwTTz2TRc5szTks9wmgfALBhbhkGzgYB1ySEKwWwh9Y6UnpsyJWqLzGhXi9a2DPPY17ZzBKXkazQg",
  "key9": "5LRTfa1gzt9BrXV96zBAT2nVBUYtsRNJ694aMrgYXuYTUnwnK8v1GgU5ssBPNqnVhs7G7aNpra3pWZXtZm2rGvwY",
  "key10": "2QvErNJRypdBbUKxrdvbpLX1Gk5pxebSPPyKkiQyYvoR1snJtqRFTZZ9jZYUvJCgKn9ezvmfpKEhykjWzLcQ6dfm",
  "key11": "4hSX42WG6me39AXMFQ4ewNprhojZYEf83xwo16aNh2sVB3yyY1cF92fUvN9cNg11AuQBjKYnPTqRK4EQeb233Xhk",
  "key12": "4D6BSYmNBsS1jtRLzMa3Zy3PHw94h7MG231qVH2fRmYSbu18hJza4y2UXLkdzi9wD1ZoGUA2CfrSsJCevEy6L2hU",
  "key13": "7CMypj1PQzfbr2BuVah48zPTeRbL48a9HxpnjiWpPLxinz2rVSLBs7VX6MKpcpBEVAWSr2nYWpBbABcaZCCGa18",
  "key14": "2DiFxioVfjhWMhEP6goaKRYhTC638mi7H82s3GYNKyNXvneytoVKYty3dmHJG62KDsKtCsbVtjuzVefQ7EhpkG3Z",
  "key15": "617mS9EysjigJVvEkJHWk9HKY2jWKtSJYYnVLNMVy9HVc4NXD83cwjhCkMSGjjE3DFU7F3HNZmxVZUugo7qJiYr6",
  "key16": "3xX21H5fQwMu7dFeSZfHgxGr4GGwiK6jqRJi3WDjiu5PjiuR4mHMKBc5pN3unbXmwcVFNNRMc8avt8ByD6vhpRdp",
  "key17": "3zgqhEenNWSiWjMnYjGmFgbCNr7aNSia2xM4GZ7SGJaYypwkRBNHXPi2QiqRSctW1g5fCUfQFZa6PisUyFBeNYdK",
  "key18": "2x62VKLEwM9atNYqr7QaPLn1en626VVg4D7DjnsyfNXME1ZCyk9xHHG8Bqrvzu75TtX4m4LtvYayoHs8DvrCeUkV",
  "key19": "4gahzvk7UKryvdeiZFydKb56ugLjNiXk3dNhqKiurxTngVqaJc5A5p1mSCpx62rgyKbYhuN5C8BfvUW24PMUFx6Y",
  "key20": "2HhDJY2FbWkMAzo6CsKCT8DUh931c1zxy12yzPGiYceUm6Bbcpq4HudxcfxB32z9gf8Fq3UJ1eKyVUcD2jB5d7zc",
  "key21": "4kNc61qFC4eUoHWyShZb2qaxVaEtHPU1Cm7TdkREz3UVMrSybNwQ81aBQizSdr9ijSEyFj5WprPeXxPMPmbjETgu",
  "key22": "3rLmpSYVTSdFWcMZbqo5rF6fhNXUuA5mXpQ3YjsVwp11nT894LdhMztgkcJ3jrHgyVzW6Tfd3eRE48E1KmJoqPKC",
  "key23": "29Jyg56jWYionkRLoAYzMppeuSPrbRkyVSLWTnWeTPcz7By1giYmS1H5KGtuvWUPeMa34qcBBrKx2mTQm3k98SPf",
  "key24": "PCxmR99VAUkf1njojQhoU5thpHruxLAe85RbatWu8EKx4RiSgJrddkcqV5qLs4nrwCg5iDXtnt8diHUJNKcSq5r",
  "key25": "2b1nweBGGsLkvosoVD9hrLmuqwg1NgdWX8kLSTnsVHwu2dyP5oGY2BTtghoZMWfrNY8h7ws81TWp2S1VWbM9PVVw",
  "key26": "4yfDUvGZX2ZKX2fLsoP2iDi4Ezo2TJs9FNU7uQbN4LYix9R7pZAGAvX3nHsJXHQsR8CmD6xFmS22BdX1rfr8sx7a",
  "key27": "nqGwpqavUG5vhuPNQK9QBGYcWc3WZHafcY6mQwJYDZXSXPvrFf4j4MYY3tmuFsVxZQiN6GbsgRJ5uyxWDdF81c2",
  "key28": "Ku26tsq3EULxSeAyP5kVAHJmbC7sHZTNFp4B77zFE8j91QkPen8BBbeN1WXoaya9q6E1FB1jZRkr488gL4gNsBB",
  "key29": "5bnkmsKSAMKYC4Kx8RQcFPAbyhgpUbTJiPBX71FFST5ypijFkRrE8BdPgeUnVXQn2gDgZXQSHmChAVE8X4fKVZCg",
  "key30": "5sL1hsyJ8xmjaVENKhTc4DL1uhnF3iz6wtXNaJufnXAfQyaGxFend21uRKZNxTYGqNuPy81cfnDdP2qL4oMEEdrf",
  "key31": "2enppMQ87vdrqE61uUVNoFrKVQbBH1jkZDzH1vs67zcybuX2ZTUGqDzAXQtN2v8hBueX4eGGqNzGMGiHk1SCnQVA",
  "key32": "4UBnxDbPK1TD1XvaxQ2BQH3p8C1FEBYq3SZYA9bsHRWSjRPe7n2XiDYxic6s5jagSdDaBcsdDFwxweMDTQf1Qzkb",
  "key33": "p5qA7zDQFsWZ9A55eaUH8dJW5RefcgyM7gWgUiQd97LoDw5Yt1BD67H8UoXMqnQ9513G78J9UA2Jmx8NxdhrPyD",
  "key34": "qacLQJn8qgmTcofgbiNRb8ShGGV7Z1DVgnimU5GMavDkXhKQPg3nhpJBpCEXAgxvPwLeFjgLN3KcCxnRuUEqLSH",
  "key35": "2ywEyidFnyRg9b1shaywHPdJUxARPp61Y2ZnxHpHFNSsuAe7GwPq6BDPCzSjnbPJs7ZQMhucjjKpHVWtfN5aCpwk",
  "key36": "WSJtWGLbkunMQfbCNwVKdDB7qLDTLbDEbftEHN6EJnKxA82PJ9kY7oqvpjddU4GzK4vLBXDXtU6431TP13DUgrW",
  "key37": "2b2scH6qfzfU9jk3hWxkZSmkY8UG1VeEzMxPpDer2RiMAhfwt1pxRjGTms45oypXx8WDgqtmNG3e3RCe3XpYc47o",
  "key38": "4fCrnrQPo5nS6LqHvbppi3wqjZR7u8ieLU7ZYhGMaErToVqTuGUjjk6q8jb84A6McU9Pkv914CysLPocSMRS2RVp",
  "key39": "2eY4eASKjJng41Bp3KvZJzYTwYW7w6kfUQGT1qXEZ6z6dTtX4pDR4Ryp8o6Vko1gnBmxr7M94uvWMBrRKhVzTiQm",
  "key40": "sn4ZU6ueAm7Gd2fhHRMW1rthbnmNjcrzFSRgSrkJoQrrL8bhpcZY1dYJAF3muw8xwdv7BZ16SfoXVfjqUEEhKfW",
  "key41": "2UTLDTExukEqhjMGzQkqWkxAuB6gXUPUhGSA6ZLtHgod4bZbv64AZeukVrmjD8sQhNJ21VYYf9NjvVdi6KCy1Txr",
  "key42": "31y5gHBjwyzTDk2FoJjHZA2ChKYEy1tf9ft9bmSMzXhf5ytc5qV9ohbx2LFB2ChKpdAsE4u777fykKss3LbeE9Vk",
  "key43": "4pBC2DGqkTaH19ukKJd5X6t4TZzwhsfZTMrgutjk1g8xRZyyVVCazR9NBngDeh35nBcpvoFBq2DybVMCEeshhQSW",
  "key44": "4Yu1qFzyjidieximsfdQ3qoAxDBhVCLuiYnsm7d4tbZQTfAK3YuNiSGozstUyZtgDVwTF9M4DyhGp3MCu5Uc2kfJ",
  "key45": "2dL5ddK3qt3swA42Wpa6kYjxzd7ahLJRMcMHLnNqU56CuoxgE1vgaNfirZeygiivXhevrft8HG9Y5ga2Z2q2zSNN",
  "key46": "2ekrp3CeMnmruLPzoAz9YkAny8RVUpcUra23cK4z1gzgqhekeDc4iwfdAAQZFBhDcr1pL774K3rQ8C7E3PjGrCJQ"
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
