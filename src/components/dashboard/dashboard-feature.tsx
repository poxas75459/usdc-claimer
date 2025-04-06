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
    "2pHTW1ZKhv7yK6MiRo1zitXEkPSqYYJv7tF91ygNEt2CWT5fmtcEU7a3M9uhYU5BNtF8yK8uhwYkuRTq1TgDdkd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iyu4Vtnk18n9jaGaryLxwMHNmtJnVLn4TprD8mDqycQj3fQ7CRDibS92pHt14XnX1KpaZzTHUZ91JMBmgHpv2uk",
  "key1": "3TnGzZj8o5C7QE55bScZ6ky4cn7cuSjK3M2bT2Z3DH4khGe2YCt4ug8eoCFmXwejkbD2g8ngQJVF4WEPkYXXwMMn",
  "key2": "2Jtu5qyEcDDzaLAWAZXwE6aEkRtbgLUv4KbBa2SvNWRcL9EiokEA581d185QYLvYQ9HVfkYv8Ek63eFtsUA3ExGJ",
  "key3": "4w8wPFnPGHFaJVg7Y5YiEYWmVipBCrKmzgvo4fWi5aG4vU8u5b4GQkJiHgQEZv74s7j83frqgdSeYp4UkFqEPR2m",
  "key4": "2oGJCCTKxNS1udfkVi1y9AqSRE5tH1eccwgPPRL9L71ZPRVMEsHsrFggaCXqCYqjm5UKgDKtpJoLcJn42hJgbp31",
  "key5": "3F2z42HVwUDqmuFRPh67p1DoxUPuxn61rpCmmdNsyuduQDWQyfH1qXrLnV5EHa6hhwHSbYCEa89bTZMBRSf1rvnX",
  "key6": "sxPinEeaZstzHaSKXBzh9FmY1ZPG4ToZZ2gPTUQPhVrBxdAt7LrX3j4iZegGU92NyrzKo7v4CuLX855nSe14sKC",
  "key7": "43wHMSGiUmDaeFJHQURAiiJz1ogtyWx2vDASczqtHXtwgwgcvA8DsFYjYZk6d6C51X6KdjfrLRpp7iPepokrPw2f",
  "key8": "Ae2x9V6YF8ZkJqTdrwD7eHfNM3B8vzRKQn92A2zdfRNLA1hksRRdsDsW9L23qzGRViffQPz4DJKgZSEHBBYpgrr",
  "key9": "5mtrfhuJ4GX3cUitYFHJm6foAaGeBoY5ZsrTq2Kfza9Q85cLMkXdbS4wdsE6DJZixF2hN4k7ysABiviu4xnVtccq",
  "key10": "3MNExz4SALx4YiQejh4yfozGBfqxrouQ4hE3ZaCGcGDsh677fnqEJkS7htFhTd2o9nGcEg7D2jT97YFmpgndAU82",
  "key11": "TkdiZ2JDdhVEmB1aK12TmGLux1ugs4c7VDJdU4ch8pT1PLbRWVJkMKvu7Bngekzabiy9fE7vMQ7MapF5fk2UyfU",
  "key12": "suvczLaRc9XGkNBhB7FnKGCJ5tZboj2YL2brcCz6DFXs4vFd1FWTbokY7FmCrdJH4h9YSMVNRXBW4xvESciEDo3",
  "key13": "FHpGmtMpSNt4c3pEXm34wjwVetou9AxMDMAeyA3hgnYHYBXLHfcN2ZyhEuwaVcFKLMZBa6ykiwUKRgXJKM7pZJ3",
  "key14": "5aC27HeFmuzYtwd2T5QYBUihTKfXoLXHryNdLzBcQAppPWpkAofeWyUExdB8maXcXKDk9gTr1PJZRTckBufWTn7k",
  "key15": "BK225EpewxXo9C8mVKoWCVKS15i1rFr7nWCf3vFzyvvUDjSbomWBE55YKnzbssYvbwiYr3kXnx1aSkUbjN4UPHK",
  "key16": "YbYjXtUmkVQ5HSWCHT4jemJpuvJM57wKFfYrCByp3KTed74wkRRjEDgwNh7yvALuHETSwZsM3hiL6KVzD1MMkvB",
  "key17": "2BtTwHQ2boxKBPhoGdtjL834qkPPvGKyQpbKUS4cLv3QJ3nVu2ymP5KvV6wDNn8Wt6Exjekj21UP83GhQP2orcRG",
  "key18": "5VMa3jBGJtGmouXxMVsiyTNR7dH8tVtaajaWKVSuyDHYj1mLnc8sjnom3iW2NX1YiKMLAnxNunQExs9aNV3ms9A1",
  "key19": "G6McCJ7ZZ2Xv6VMgaVTUidYp74ja7QZzeky8RkQLdQoFiCH4KNPp7SgNpqCpU8SE6FHjPWmVGWA5yUDkcHUPa3p",
  "key20": "5LMoPF1CZU3ZMe5spD7uouyZMwKaEDf3Vtf6fnbPaBZRutEXKPHJx1Dsaajd9n9pCEmzFpyrdwUtZJ2DiFGfSLSN",
  "key21": "4yzvmen1jSy2rvZe9jerebdkFnQX9EczwgG3Mbk2uaC43Uz6LwKP5nC2HJw3GWxu1gkzYYFhGcNY1hUcjxgm6H4o",
  "key22": "2KNxrwvJzZh4jvYVQRXwP2dqj6p4njdRBh9yD8eyB9izkiwbHVHsgMEH1egqeMmvftqAH9DYZzg4Bm9p21sVMpG9",
  "key23": "4XAZfmsMohYcXKCEPFCtXrQ68ZBkNG849rG6k3g9ZwndhkpBFezqUHEEPxB3N9Ln3eeLwBR12UZ9ZgiBje3yS8uT",
  "key24": "43ehqFcdJMAdvWy8fCbNbHuKaNtEe7KrnxoUPJKojGt2r6JuBZpMviCUbPCFVVWLoKQQtBXqX6GaC7mjbBCX62wW",
  "key25": "66tvrJE4UAsxqskWiv2GYgudXqhz1nTA5hebbRU3bE8kn5M6syZWFE8dFgnRvZ1PdCKrZyMsoWr7vtFhWcgEcaJD",
  "key26": "64586HojBYEomUSbh6uf8WDuVQqxSTuTcQBH7qkRgxLJCq49r7f6hsovdL7BUxjuLea2572iiHWZBed3LWFBt4bT",
  "key27": "3YuuCbc8DvXcvJPDvaLjHh8Vx9si7AfinAE5oURJqfZJHfTVffL4kq81dPg88hSiAE9QDPYWyLpEyGS99JmM5bx8",
  "key28": "2TD7GXLjmsUpAv54FvuhiNVZ83tkmq1WAiLGiMSmFpqi1nWreKdccHniXK9g9qGcmNxXqZDbriPWXtTarzmbAwon",
  "key29": "2WonHHEE1d75uJ2breUz55o5Fc51CErPfWQE4ezHiB9WF8zqgnm7cAZMqKfbdERMRp2jiGSxCnt5SuXkbBZKkycv",
  "key30": "4wMyUvRw2rnDnwcZWBMdmv2BrnYsY2wLmuXZdYX2M1XV6vsPc39kRj7h8MvaBtknLctyx9yzGGj6NG4im5jMm4JH",
  "key31": "2ZmCUDddN6mrb5J7mhJgvRj1qijMYgzesqNfLRgyMggbrm4yR9MdrLe4dVxuWAKCuQ69oh7TUhnUGad91joGpe6E",
  "key32": "5cjbJj6yMUMusSgvu9umFUSk6ZCXA5mpAEfwsuXx5kqsGa9TK5Re89mttPtmR56sNRbVAZYmD47DRs7f6CDYbiah",
  "key33": "2avh9pnhpGyYoYR5YMUxYbbirQqHZrA36UxRVRYNZhynpV6aeFptAZJgN86WRaevffrT3fBcg3Q1MxM2iBmiyYAw",
  "key34": "5J4Nhegi8M58iS4pVqSKef4ALDpCaJuDsXxNh7NYpfYqVYqpdrUZDJaVrbdb9BmgHnsXAmgWNayyQLN7verM5ydy",
  "key35": "Xv9pBBGiAcL5jMd4vunEVXKptR9FhRRajKJmKqBrPhBqoqG8DJQ1YmiKapvjhk6Qg8UTeW2j5vNGkWaUf5VHm2F"
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
