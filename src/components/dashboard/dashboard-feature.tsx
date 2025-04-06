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
    "2UH45QfX8wGEJPexjKvVJwkNMBCMWgQFDBSfcnmYgm1yb49jXkYrXBMDdzLiM9wpkXdz5vpB7SamrypKhWdbzbyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q8u9L7DRFPXxP1yTQnDbkXWZUNLXzraPuCmzaCYJgmSte755B3KoLgw4yrvAu1RxbAKPiuSsB7PmHnCQRFQedqj",
  "key1": "3GUz3utWXoMYjTnuqY7YLaaThSXjVyiPeY2ZxFMBHApPWm8cjuYjHvWnHXLkwTHL5nTHA34KRBoxLqdYazy2DD2m",
  "key2": "5D7HkK9k8n19jtqJSPiYAZ28TdEYHy2xn5CAtcbT1Bn3XfdrKQSE23uKdbZC6LwFcHzwsGdVtvvFn4eA67mbJT42",
  "key3": "4rt448Rrn7dH6nkCcpbtSQ4fQYwfaqqSvJ6CGpbv8EAK8xvyhph9Pt2dzAvSw6skv6CWDz43dfgwx2unUVWKzoe8",
  "key4": "3aAqLBKcrdxzTXuA7M8nQa1P3FbbFyS9PRbDSnwHfVhcNqyN13Xjdfevtn1v7M97BDqYa2hGrq7LpvhV3eax2Rtn",
  "key5": "5WhK2hih6rLjuSM5Yujpx1ExVFLdNs7znzL3NA9WvMcuNwjzwgiy3qR6kVLj9a5DNgibnREstZYeHfpi6nPM2VYt",
  "key6": "3Sf2EVeYkT4xuYiP1LRp2GZvpzJu7wataZQRhSXi9rhVv91jAjyQevpBBV4oAyKUj3PdavQVWS2VsbQi9w63oP9N",
  "key7": "4SWnxW3wK1XnQCpfe83ZHw74G1QEN3eiW38Q1UbEGKqDPyPw8WRevDM4ssX92KpqtS81HvKrNKg2tswZbrpkoB88",
  "key8": "3MCDzN9PRMkn1aEPZNBYaPN3WLQSDpPwbViAcBYVRpoMsnynKHNjAuwUvt1HHZ12cQfUPcr4cmLEAUdQFU1iFoxA",
  "key9": "23pi9EvYFsJ9BAYDTLheZr4teTgDmdieWywQwVDZ4JZcypVdsBQ4EgVnxPARDZWzg5oyoRQVDqLnpwuRBmfrf4ao",
  "key10": "5gN6HKZZViW7qgkJescKFraNQV7dHmBBzb6VGckScFgMzng8vvVEdahwBdwsAUq891BAWwJVG7YmuEqSQgLtQNXm",
  "key11": "4i3gPmHCsGoesUzNShX4VcS4QidUHc9f6ywsHUuBWVBMnouGpJK9Lu21pGE25j9dvXmhBEaD54cRSqDUX4WKhvfs",
  "key12": "4i84RPdrpHeU5D924sdwRN5YFH9G2JpMtQNGZP1besvPbBFmApPkcha9cEJJ22wyNRkdCD8zg8faTjnpUV8fvKxM",
  "key13": "2YNUkFgvQ29mVjLeRbFSn49SBn8eTx8PAhN5huYMqACQxe3S2V7WBcB1nscg8uyTRU4H6BS3GYmqcuQWsPtWroEr",
  "key14": "EABQnGQGRQeCm2hnsY8bT8PbVsLxGkYCE5gSHzyiozhGKYa4yNipDPwTTcseuS9AdD6tTw37Dqnd92BJ6LHM6d2",
  "key15": "3bYLbHvXh4ingNvNSBz26qWjyo8xDKaUPFD4SDeuBhBUnuBZaFYyaqDjbrGqtgV4oar2Sm9k1YzJS4d1L3tUEpcV",
  "key16": "3u8bsiSZcNtj7BuNgcTFAevhHj9ubKpn7Ufb6MbEdPYuyigyA3henCfqUoyWoWRjkJLHL3xgPZvTkTuKiHYtat11",
  "key17": "bC49zkC4AtfjJoaUj59K699xerMhKb9xNngzBCfK5AJXm1uUaQKHDZF8ohjHgqYwLafkZpDeufUL6uVoZ48ScSD",
  "key18": "3vnLqjLWXy2Qg9k2dPQ34E7g8MkF2Kews3JwSQPGPhXgbD8d4e7dxKVEqbQR2yLR9gSKbwA9joWJFNXp9ZNRN12t",
  "key19": "2tkd3r8xzfh3JL7RYW64FR8gCNC6gk8PnUnExujmm75koJmBR65L7tjmncxn4zTdwAYeLd6rbG2D66RStgTrwzkB",
  "key20": "3NgZdk64Wm99a6PAi1nBbiBDXAVUwMdZqBxVaRdpdi7THa72ZqmjkYTwKTBQYsvgd3wgaEwCGddvJnh6N8nCJ19o",
  "key21": "5zkm4vkJa3ZL23jVYi3BDjRqRDMSQGSsfG3m33xbEaVS7VKBUkDwkA8d9r6Vh4nvGZVJEz9wSeKhkSsq2rjP3d24",
  "key22": "5GSbmjAKeHvVs9yu2y8hxqZhjtLVZcpppdkJqeaR1dCHVQ5y2TXEqBrbJ2rtjQt3LkDx1qYUw798h2H5iYbdvbYx",
  "key23": "9Abn1xaBxxoQk4JhUdYYgfnDN7tDWbbFA5ywe23qY2xGtgmVq5qTjMfAaHjaZFpDJKnqqXXjQdxXxWaY37w7oUc",
  "key24": "5XnVBXmn22TjJHt4ZMCiKMjLKBgZNN6etS4Z25WzwR1rvMf94KGKkCyq8YBXdcjmyg9bG9AfYVwFbJH7BVVttDPV",
  "key25": "4zw74sQmevki4p1Dkt5XP1Etp4aWn5bhFxqrEx8NYoXPChZXBCz4tJZC4G6QQdQs4PkNztSpMQZ7v1xK9C5Ue38K",
  "key26": "36wmc3AiJXkHmu9tqasr59zg3dGqLD1yurisC7FvPepCCAhqLKY23Z3EUskAvqa4kxCF1tdxFeZqC1qBTBSEJe64",
  "key27": "2KYa4wUXmoZkc3u491ATsKWjh9EB4ydW3SgJBhaMcBC2GiPFtFgQ6v8DzsKj6wJ56Af5tvzdzyTRJvc7cbWzvp3s",
  "key28": "GgSU28ESjLvobGLaKXJy1uu241pkjrEHrrTG7Hz3RDeBpLZysq7vy44yBdMPM8Sjz1MXx6E2Jtw56a5W78Vc68Y",
  "key29": "3TbTceoPzrFT5w81cD6j9PQXxVihLYQVsnYWmW8sCJSvPKj8yWFnG5gUZUdGf3GpUikMRg4uU54SCbMazztpiyY8",
  "key30": "4E4FWZcEqDmoVCnTpht2DB1435j8FJ1A1BvNYLWPHzgb2BXahykd1EVFAF1J2Umrz44DPG1hnay4gYbnBZcYhvXM",
  "key31": "3gaf72qrKwfBsapKuzkSm3r4bgMkCAgGDjSQLF2znMEeuBTnfEoND7fwrcYC8h1aD8HYaAnMoLeS7i3ZdxZdDamr",
  "key32": "3wWKmSgQqGYK3vVhnibsavgYdH8fRdW88VU9uXz2f854djwp9GdLKo3r52kk1jsLAt5WfC6Kp51M8aB3jf484Rtg",
  "key33": "3e6oFe7D4JmWMsvWYoQiBmcvcZYg9FmGHd588UZ2yNtEhVfNJYKrHiaEF9oX7Ems6BD5Q32DiFF9iEWVqwjNcAR6",
  "key34": "4o468TLU8P9Rv4wmUe6SLEYjahho4vo3AxWUAsv1bM9c6mxuMNDECNhknt2867QwJegK386hvEzd4F4iXysvz9eg",
  "key35": "4JXoKzsQfRC7qx7AhEym9RE2UCPQJuGuFcGBACFW5BWmFyoEGHh9xfbtYogFSgJ8LNT5zMJfu4UHFAwX58xCoQ3C",
  "key36": "2CY8mxB2cfrDbvYvTiiftyDse74KgE8Ln3opzN7GtmAEN5faNatEDvFtNoSchAaid4TGiXPiS6qpSDTBneXwume6",
  "key37": "4gCTrxYJHJMoh8X5Jwy3Gcni5oWoqASLrESL9jJqUx86PZBbx8fkvMoUyBGexFJfj6TjtfTMChFyQ2CcXJXiV6QT",
  "key38": "2pzL1skU1C6am97CrLchxnhRApqDQmbzctQKuAZGrKzjfJBY7pc9iU5ea8xdNRx8uYSki1PRWBvi5HX8dKdMgjCr",
  "key39": "vA9WKvs5M8ePrKyVUf53Y9m7nzqDjNNcZhFq9LWpf3pXB11YYtdpF57FKsHX989Bw8cmvrHcduPZTSKyoGHuTM1",
  "key40": "31wivGFCF5vvVFLeY1L2Q2ePpsGMgbkWxdNt4wB3WQTYN7LSF3Dm4WvbWkobJGwLzhZkW4pHum6JtPrqQJLfWb4B",
  "key41": "3s3dEWWRmUp6iZbrk8XbLXsBREXe1iazwoCbL58QbRoAASS8EpxY67GZ8UW9qeFgTfbGTiKcBJLS55mKXkLStj5v"
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
