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
    "4XSfnsLP8LrWo6y6gxjuGNJ3PLmL1ZYcBHRYmqpS5RSxXdzV7oukU9rtWVebt4fE3maLQwJc9GEdNjuGDtVJyxa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NSgvRcZN5PaCwGhFToEeuAr8Pu7kjyF9jbN7C42FeMZWbwcWqrfNqpMxrfpGwANKLpnF2AD293V59dMXyRrVZ4Q",
  "key1": "5PHsFzoEZoPgwg5qsLAQftJuVBE7SeXVHoCkFgyzPYXZxVLPciFiKeU2xBHCV5PJtB83bobaQDATZxL8AqqfvcUM",
  "key2": "63jgPTwohnCRP2jfaHKP2gkt8r6Kaf9dY8v2DHjAk5JFBWBb5iMCXigvNMqkXs5YFimAxb9i4HZ1uMGm26QYjtxo",
  "key3": "2u4oMX2uhmAfGYYxrkbKna9Fnhof4pkaGkfaHwDpB9tDLMEvQz8oWmwqoHtCseaVjD5vUk1a7btXMJCKX9vEGZfc",
  "key4": "46PGhPKV1Kxrwr4DeJFVhLsRDTophkx72fMzxpQvnYYHzSqFuWreTuACMdxmNMLAdAezvu4CVAMpSZunKpzddAtx",
  "key5": "21Qk8to8BbWuKQjbb9ZGr75nVf4cWw9KcTJue3JnW2WtpgWggKhSB9VAXdWHWQGkMVf22FQJiv4qiDop5jK394kz",
  "key6": "3Jf2bHLx9XLjJt5twYhYMGfXaSmGNDfcEhCPBgwzKzHu7FiT8u17vPEuWKp3aHXe7i6gsNTUB1VvT9Q9boqSECvj",
  "key7": "5qEqj84WtVHmYqXBKYs2oDEHUoLuWupKsbC8SHRsRiCCWtQHYucD2K2Xn5biHQahQrNS8CpwmLvfufDkczLjPgW5",
  "key8": "wcKfSkYbDffcmyzLP9yAGgv16szqXqStMmfgZaCibNsfzgMQtYwui5DPD5YDMTuczWL2phfCD4ah6vo91bfXTWs",
  "key9": "L4Q2qFSwhQMZ9YBYWT5CT2WMp9nzZosv3eVWYBhoXGUeJZhBYnrF5PBMvHkzW9ZxGiboppvLpk83bwHt4j4FMo8",
  "key10": "51ETvxpt1etmAUGvCShjTDNvtVPJyCo6Dzm3t2iLoiYdGNZPofAxoAzNkWngqtWU3eLi9wTQGLPGuF6gRwTTFKMk",
  "key11": "21H5rRfczCiyQeeXTiUtanqp6x1tr3wafcw1hyUUCKC2cgSpCrYiQhbmkNwjxVRfyFyshrrFYdRkcsCvyz9NFUCU",
  "key12": "9e4sNMVEkMQaU1Rzt4rUAVLJKFjSabDVoeF2s1FUJrfWkRCtdbMQhh6riPBhR4oA1HEn31KPxvxCWNi8L7RpTDs",
  "key13": "5uWy4A12mUzYr1LJ3YqnNy1KYGC8NhgVrGybDA2Yts6fu7uh5dTv5u5g7ShzMSqYGm3WezBjhWvCKegsiCveDqfe",
  "key14": "5FzwXtYXf3HSWMmZALJnLDC6ty3xobSVdB6itQ4zVPeegS7ubPytZrSt39nXaBrYrz8qKsBssVi6wrcsiLRPsrTh",
  "key15": "2p7G7ycGUnjMPp5bQrpr9rLsQ5GdowEWyz3AKnc9yneoY7Tk1LTihy1VjwC9wHFGNehF43wYFetnfM8zQpLWd3Gz",
  "key16": "2JepcF5e58F9Np1dFJpvFKtrUADs8cwPqYtNZBtWNVevEaJoHNwiYLHcjvMCXTZbWc8A3u2YVXYeD7WmMJdJPH9n",
  "key17": "53aPAXvKgvVqLSXDkab3VPj1BWtGLAFKFAvKUTUqRBn2FbsaZWhpb44GFKoxJbGRwrmCfpMvhdUu48FgDqopsHTi",
  "key18": "3cB3Hkdm5fR6ADm3ND9cj4rbd9N2FrMpFpMeVdRf8P1NBnwPbNC4a1cZZvE7z4ZLYyJC1zY8cTgT2EFw4Q3NJwP9",
  "key19": "5Cyosz5P7kiZQuXrRg48Aos8d9EhzzjsKgzDMLgp1vVrxYewHaiBsAn5xBan7udM1Zyor8RSTTEKVrQaMB5YBgtc",
  "key20": "5xpe1CN1UgRAwF5dWDFEaVxx3fy5QXju44BcvnEkY9kGYn5XZvXFh4oUtj3L2JRw7LRPvCwUVm3GaaBBg6ggsoS1",
  "key21": "4QvfDsmAAQMNdyEPqmeyZXtHMwcRwmQGHW2kGur2KKrGZqb7NBwTNvv5imvw3rUvMdEwofMU98aFPymAZv8ACvs",
  "key22": "4gaR5PPAqfMYUkBVZPromjo3MVRFRoSdCp2EckSwZ3Vq4USHnz2P68x1T8hMZNa6zGBMve8DyYSGFFwZapN4Md46",
  "key23": "4JYCBhL7yzw6BQWFUvD6gK9sTB1CU6JmGYcpTsS2fkBv8HYyrJzMuubdR2joduib83PgvnoasRSJobq5FSc1GpvR",
  "key24": "3WXnRsUWyV19BrVHSYjRSDo6k6runw7bxFNW7ZFQpJWn9mCdtcshwUGyJmexLb9vKhiMm5QqqkBjbRCrPypaAsgK",
  "key25": "2vDhyH65YAYbU5kZWtXx8wDBAodzHYJQEKgjRCwtZAqWEmASw8DKKeaoXvGWZKGyMSzzExRpZeEivqLSzhWoARWA",
  "key26": "krWZXi2D5xnQ4um1BTpJciJp9tyz8ZeQJi9ZRkZDoEArrrGSMykyAdb8qsZZKNkPX68jciRHYHpAAyTTvk4c3qb",
  "key27": "4TJRCDqe7zLmmwJUE4CydgHfxMZK15bpf3TJaBQELFXmyrWHKeiNNFQAVRocYXHwvtBHq5GkmMiWZMadm1fCjvWs",
  "key28": "63Rs4z353vTAgyYvZGmmttRssPykK2WQEFpHPeq9Qu1UHgpwURrcqVETByyM3d52hbtCpfAoxC9TsiXRByuXhEhM",
  "key29": "3oMrj3eFXYTQUZ95sa4YTFia3PcU6W5GNcwoqHSrqgFNshPuHTf1ksos7dLXFaBwX5PQELhSXe2rEsNXfSB3iJqL",
  "key30": "2Jt9U8DV2dk9QH5VZVzqaCw1PQCJyrHABkvjmdj4NWzqew4XkcwoWCM5ytbDdsDGqGm9GnhmNrgeC2cxyjbv1FTF",
  "key31": "GbphVubnzuGw9Ht8eHAvC7JfhizXprpdN1BjENFc5hKno9QSab2uFJLiJLNLxeY6dPHUruUgEeyyZmtrXQ8qzAq",
  "key32": "2bF6soDEHVj7GTNnEsZbDk1KRVCUqqaUkMryxRGJD5b2zr3MZZoZChyLETtMk9oEVDqvroquhDodJdTiMQtgKBwq",
  "key33": "zkUpfA2GoA4uBgkvJQ2BnTcsuBSBgmNyMFZ1mHtcZqqfMvm4fNsNK3A4A9JCkkF73Pth7SRui5SNHkot75kJcMs",
  "key34": "4eQVZYjVWAN6RkA9SC8bcJTH2LQCoDCzbfWkMgtT8wjwNbAfXnJUPbMaGkdh92bbUgAoXMvbYEjAAJdhnDDf9v4V",
  "key35": "2AdC89j7kfMZJDoGnx81FXAtjbMeiuFQ168eT3MxB6QsQHfYqTHa9KAQARWncvY1LnDg8ZntXKtwLqbS3a2L5cbv",
  "key36": "4ZdLfWm4Tohhy8GQAaJNBeMrYvbUqnvfeqg9Rnc8xAJYctAyGFCUEPnggDunyhpPfFzoygu58mrWCC5F6yd8aY2Y",
  "key37": "CF2vTwvBnDJDUY8qE4h3WjduuVvgW98j6BX2ZD31AmVz4qTox1mEvWMZtQMA41fH2cA79g1tUg53cGmpAGYygaH",
  "key38": "2PMx6s6PUREEk1YyjJHBcVYvkUbgwyapjsSAZZZWUP5XgbvfmBq6rkRYMuPhqdshhbTvLonXcueU1A4NUAyrvqkB",
  "key39": "3brmXiBPSFN2kgs34ZGiL32DXeH4fGfkYqxyXmjSkZwV7pqosddo66TUxHiEM5o8XN6Kx8ai9PDuX9dYKpa9cgJY",
  "key40": "sbXkHriGZ55zbdhbmikaTJqaZ9W69EpPpUZohAySL794LxW99JwSb6vWGnF4TuRDdnCjMekrvvviHqxZSEwg7A2"
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
