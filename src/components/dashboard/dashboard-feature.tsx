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
    "4y1YA2SF12aHvtj5zUfwYhqHMiqFAJRGH84F3R96CHpznWTKeBLGscLVgYH5gmBLAtoh3ZCbNbH8MGDP5ZQEepBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZFHD3u3KH3VXqvSf4fXvBvtbMuU8SXH41VWKPzqUJ4yMDzT2eq7Hp1yfwt1ZCsD5ZZMTyPQGgDBZkpmudZaTPTJ",
  "key1": "3pLXb7zxMXscP3bHPpUtfLo6NtLfTmCLucMT8T5Bfwbk6Lgd8FnDqC1sAoU4Cc8j1BJkDxw3q2ejif6144fq3a7K",
  "key2": "48rETgjJRHEB2zoHBeJf6a4mp6PRK1xygXumACmFoknbB7Lu6MK4MJDPj8Fhf663YqGyVPfpHPGGVUrN7SvMxeBe",
  "key3": "2X5Y1VEAuhwxntuchfb4dTsxtRg6AY72PoNwGedv7VtnRJYRKMaTwydZNMNzwqct8hpmi6XgtEMsTvrRkpcHmv7b",
  "key4": "6KvyAGXSu4ZhsZyvhtihZbMabM8Duy8dpppXL53c9h9bTCVCSDeyBJWRvorpAtzmNRbtgkLiprtbnuDHs9rZZ4E",
  "key5": "5xNFgMVbTxKjWL2jU37JSAaxojTvk2c8Mzft2RxTc5zkJkqpF5ZgPgoSn72UPxPejztcKwXoeQ6Hf61uahjxVoYy",
  "key6": "4wdaZoqZo1m1Jn5wfpx4PnjTwKMQEvkLxeXUi7tfZP9DKHWEGtwFigoVY919TEU8awb7hKPisKENiwcWpKYHprqd",
  "key7": "4BMtxhxFUJJbchbhr7NEiGv88DXq9GqAhK6Mp3nzpF5ibuuLUVDLkvUPZn54WxdV6uZqvLwkNFKnjH6W8Vr28F9w",
  "key8": "4uMRnu1HWT9aQEPM25fqMZTu77LXRRkvTtbrdxpScAx4Wde8BrAnZ7SaqWim2wqZzUcp2FajiqQQ3eMU4zkpeKDi",
  "key9": "4Dpp6q9zxSmfNPhLYCthBUKkqLd8yZ4r9ABvjqKNmTQLfDdBpVhw3S243FqoKViAZXkr1iywi3WPbhbvSQwxxzSZ",
  "key10": "2wdW9SrSbxT5Q6yPLaoYVMJg4w2WmmJdeusvZxLCvM1piJ9BnefTJCTCXaEHfJsMUGc8EkQrhNk76XiFFrvjM3Vi",
  "key11": "3QmvBXHCitniw78777t6FAccJ3e9Qyfp2ahoDKvp2uRrtMHqLQekZbMq1m5Yh6mQrAK5ZLcJQJNexZuwiK66Y9zg",
  "key12": "3KqmbGvm8kZfvXbSQSYwUHCDU297fAKZjRVKoctA52xwnAodt43rJysdzBaphFKyC2vvse6YFPr7A5QMDfBpGJPh",
  "key13": "2QoWSjPKe7sLD2DhWk71aUjBUdwHcQVvKd2kk1eHWtSZNWdZE2mUbRSW6dC3zrqhfriLf35b6p3t74eAp5QeaiNk",
  "key14": "uFUHFfJWRYuZkxGYFAjJKSP44B4hrThAqUZ26E8Lh6nEDF4k9GpzPPLWzz11j2VhtPSKemkksHGnJwD5j7QyXYR",
  "key15": "5FhfdhKLmSwg7CZyBLra72vezEaXVqhPH1F5mCEFgp5dDKqZp98vGNL9cMSmuyG7ahjH2tkWk8DaPuPZACicqcmc",
  "key16": "bNpktHg271hdgfdifi2M9afLvNpnvpywgJE9YZE66eDmZtzsFWuYbj6fKDwJbipuaALTsQu75JMENSSaa1BGnu8",
  "key17": "3QWzbU7q85ePFYWHuJ4AdyvG17Dx7j4CwAynJ9kEjbc2YhUWorGAE6SuTAMRTiXHbASfDWiDrCPd5xBhz2h4AtxN",
  "key18": "3PWzQcPBVPG7TMVKuyEsr8rx5YNes9Kb4754Q16r5LgviGymLEWKFDJ5sDJE5dKHiPQJJhWieVioYLhwZvc6Fp1p",
  "key19": "3yGRxoqiVuwDCW4VNERAiHt99mVUgMeLrWkCMLEZubkddwffFbZRQyFgY7WVVtqMUCFqMy6xN9kxc1ewRPNKifTy",
  "key20": "574Zf2F85DhYf5qKu3bNaTUgkBP8vTdRVNaKxXb6XxavQWYqxgdVFd9EAGF9hPwuK8ra8JWx4ctwjTQpV8NKKMwt",
  "key21": "2ixCUUQwbc87hmwbbqjhqhtFeGdEuWHcH7AhHXiVjMmNNJy7kGfQ5CjMawV783T1kNC8sX2MVUts62M2ormWPCpM",
  "key22": "3WgKHJ184pLWS91z8AurnYg4TZLAKa3vEPP7ErsnHTqiqSPA7WgXScKnTPGKSGZw6BqvFkN3jLqhKWz7GnYq7zid",
  "key23": "4NNL7EXnARQfWFFBP4f1dxpnSDR32FT4uAt2ufqSM1H5MZZRmSSMvMRTXDXZ7raE346mLD4geta11is9Qox4Uidc",
  "key24": "3z2uMM5uTvtXPDrVrZf2bYLX4kLZAVu3Cdb7jT3tpLiGPoShvz54oC4jq9pA1YUV2iyBA222aDycJ8a5aKjAVykN",
  "key25": "4yQcGVw24qVX9kaiB1pKjyBBMCstz4Lg7zP6BybGuzCQ5Q1DDQYSKj9DVAmfTSwsxHKhT9ZKMFPJNbdzCcZFAwfL",
  "key26": "5E4qF4pvT2rPygCzTbbx1hVTowkukjU5958F56rwh1NksEKAwbfrVpcj6tb7X3WTST2UjjNb81KrYk5s3rjF9ESU",
  "key27": "ubMNhjtsMV2KSJnySbAs9nRQS1rRVWRr6j8TUopByKJEMVZ7LzmMWkxrxFSz7QAx6hqtCJ7QoMRmv7YCGuZ3bmN",
  "key28": "4gKyjzJGFxug4EhgKn1LxB5tSi1e5YT4mdRcvxzh1LRLJ8iY6Zi3Y55vmUWsA8nwNtHeiySuybag1uT1ox4Y7iWM",
  "key29": "5xNecPZeHtV57uXLSXCg8sVR1wLQtrtXvKWan57ZM532n36kcyy1BuHr61EgEv6S1kR4LGCbSWWUQ3MZzbddqBMF",
  "key30": "25kgusTSGfoEdfV7gVMQLRQ8sMU4vLi8MY6QVHRrET5qwK9m8DS27eg6tjW2JY1iezb3MPAcXmNm8nk2Hch91ats",
  "key31": "5B1usjVF2wxvgWEBiTftDnmHWny8J1jFMm5GciKmN8jVhxqpLx4NuuM5XydpB33R5WsAznorwGrMJjCgWBMJEncE",
  "key32": "1zJawqcpSHBP3TuB6H8PXfQqqWzZK2eYxqW3fpSeP123Zo4oqXEQCMwc89QtHiAgMkKu55Z1cRE6BQh9mVLQR1k",
  "key33": "4mUNXV1fm42QTzBhmuFHo7ihwtLRpFDYcpmt1mnzbFTJzyusQwFhWe6pAh7teTxkZv52Gbgo7w5qo6TM4TcQzGzh",
  "key34": "3kAZHAwym2fynvU8oDjDxxpjUJhDP1eL3SocLc5JB5KqcYwMaUvjpuk3jaTcNa492WPfv7BUv5YKSGkhsD3397MF",
  "key35": "azmQjN7SsL3CHPN1sSZQ72QkWqErMKrRpZmohoUcMkqNRFWgWVNqzMHRKqXiK7STjuyKMb83JYz8jw7mKmSAj67",
  "key36": "4npEUdhn3JauYke9mgtR8ari6afsPYTS1WHDdLRfEaNk4BxfNjMtuVXUv12bK6pKXAxA4YhzdfNsFaHFR8mu2QWc"
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
