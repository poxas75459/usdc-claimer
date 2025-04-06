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
    "GcDL3d4P5vE36Cqt3avhRzBs6Z5c4rYFg3fk3fsP9594vkx7TfPiMa1DLiQGJhxKFbzDKrcuUd3fZR4eLvJ5aLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57uDaDHsjFXgvoMafMf35LNTVqRF88r3LPa14vrHvhPuVn7NCzva8DNFdW4JfEhbmSoVYnyKPSHv5PRome6Rd7LZ",
  "key1": "5FyFnT5v9KA31FZ85hgDVhuKFTKFM8W7kbXEXpxd4AcR5r1JagKn7J5nrW53j95qHoaGLzaaQfoffyxi81epqpci",
  "key2": "aGdwNRtE4MUUTyP1sGw3i5DdKfZEPeN5iX3njBnxZ5PRmrp1gGgUp7QBfPczaGgg4UHJroXBNtEBbC6GLSJAbjp",
  "key3": "5rjqG2VS3AKczAnvvz1ssv4HCGeZfnodn3j7GNJPR51dRcgy6astcsZCRiLLFVALD6GHzLXYwnu9dsye7F4iSMmh",
  "key4": "3jzpAdCECmENJTvMJyiYBfc5XrYKoFRgMqz2ZzWjuD3TPUJwJzoeK2vcyGfXGfvhq3cSNmAWXjoAUhGCS7zvKtW",
  "key5": "36mURyNb7Nd73oYnmWMCBEJPzcdWM9PBEY5w6u7uYsjRjVyjvJUDtQgPWnNP6tdxXHHskkyFWgftXMYQqAwCaTS7",
  "key6": "3q3RoTEed6C1nH7c7Lew4gQsYkdyLLnkr3KMSHPJmuFYkjiYCV8YoetkoDamV8rmBaTHc2AYHt15pasFaZerQNSZ",
  "key7": "59mtC8T2MYAf42baw7VpBjti2y61BQEBfdbPwrWCLY7g7ESZ76Jtogk4FJZjYJad11ciaRhKg441tg3nbVVxFjVL",
  "key8": "5LbtwCE9tWjLnhdZi18pfdb3nupiGw4sbhS8KjVajkWAHN42fveN3ms4FPLrz9cB34voYbR7KCZqKd5zVHaZiHjA",
  "key9": "31MXbmvK2JdUC1rrHW9WQ3hgnAMifnSHJikaXbKpMGQHrWbd9HJSAZvymJezVkmwVg2EBnJE8bbdFiHtKfeadicV",
  "key10": "5LjDtHLuaAUUWdHcBYpyyEftLe7FKLE2Qh42BK92XUXs7hPQ2fj9dZbdGBTx7nidfvZer4LRimfE8JdDEaqh9h1U",
  "key11": "48vnKFoeDVcoJG4qdMGqMonvgpYqrE8LHjDWgSnm1fWCyft1zqdnjRSu4eXkhnguqgbZVS55aMHK8uZoFmBzBKfs",
  "key12": "27YsumtLhivE3eBspAjK1KLSbvRfE1SLdMsrYexrHXKAExPr8nkg6CdPBkFiAQApKpnQMMeejWd2nmZD849oYhXB",
  "key13": "52qrgmnoRh4BxDKY7T3KEiQ6kASZFLJrDpWunZxQibrGg8Mtx8gUdbdirQDkWxZMGnz7zEWDAxrZb5zZ6U36jKVu",
  "key14": "E1v9os1sgSJEaaBiWr2vfF5PCAtBY9HRSTANmyttYLXhZzdkbpMG2M8C6K2ZiHqhAo1Qmb9rJDphvcPf6kC1agp",
  "key15": "2Tbj54UBs9Cj9yWhu1dqt9kRer3QxmFF9boMUveEo1zXdEWtDtHqhLutq6TPb4LPzcqDT2KxzvCuhs2SL1RUWsWK",
  "key16": "522iSoCFRMF5VZ3ebbc3rATx4eL7ddKsFFLoV97H2HfSf2hdsC71KXyYz1o28FARYdNEHZSKUAL9NPRWz5j1zeBe",
  "key17": "51XHy3dxzc9yeAkzjYHZ2rjRH6Dk6hedLuMSxTXdagcScyc9t25kbMzP38dqD7SE7AntEbJtYgGRjXxaEav34Cbw",
  "key18": "2xbui3sfcGbAAtZzVZJTvpSiZm3XhQs5tdUSHJTMyBKp3F8YYQ1FyBw7oAGQtopzJQh6xkFXp6mCogMtMm7ZN29A",
  "key19": "64DafVmypLua87Us2JNRUuUZxFKsNke44iL3FChGmPb18nuCfKTEg2jFa9VMXCPBGtwRuACNvhqsi46i52Ue9tG4",
  "key20": "f1dT3B8XStuWnZfMxUzZuabjpafGUsK5iijNVZFiZkDAbpfPRvMdNb1vTMcNE9yTeoArq6osF3XrQj31KazXyUe",
  "key21": "5eExC8SVjF1S1b8GiQwoTJsZVYYP6LEMt37Rq7d64ynRe2DrrjXu6WZxbc2YqnxsKL4ZXnX95YxXMjEEkYjkp13v",
  "key22": "2nYy1FfWUsRioFed2pDAGVkyKzvAAbZ4gzVb3gSrYR5eeBFTJGQpmgTf7fqzNN43YQJh4jhEgzQtQtZchUpDAd4c",
  "key23": "3ANNWZufKvpSVBZLBwJf2iz4ENxVauSZ2zDJhyQLbbexLai3GoKT6JkxydxSVgrt8vyVCHEEeCJjofgqow8xSegK",
  "key24": "2QE8JA6Dx1P4Y1cVo9zp92mDeKhTEqrPu7SV4uNrC5HEYQUmpoxrjAhxJi3W3MxoUgc4ueyLc5kryzpoj5nYK3SJ",
  "key25": "jSMF5kXMM9SkvFjy5Tz9fNEMQoUxFv9BLSyxqiPXXN5G3Cu2RikQHnjJPy7QJE42Ka5qD6p5uRvV28Ew8BDQj7g",
  "key26": "4QE1skaFQHwxK2VFkHbRwmt9ZbZQnvF7K1WtifyT4y9Dpr7NgNMHCL9VQuuHfN3v5Z3FdnW7DyCRRMGbMrJ1cjKV",
  "key27": "3HPJsijwJ6UHvTTtcofV7YQPE7xggbDANKDsdsFB33NAWU5cEcBcrihw31E5px4VpntA5z1SjoAWAyLbGSodFngc",
  "key28": "5Y3H1hhfY3mhzv6t8dwNpo7zGJ1uJGEeFTYzMKqEzrd4Y72mzPghPEJFo88pK8ibeZnmWQioegEQtGDvPtjMTeEK",
  "key29": "TunDfus8TrnbLwZcRApqknGJoEBZdZidEr4uSw7yQiwq8BiqSAjYdzfY4khxQ2H9FBxpRu255bLpxT3QdQEX2da",
  "key30": "we7uEhxCfd29Ce7V6xsR7VzWMdEtMu2BiX7r6setTT1nhgaKJ5uRgfhjhdCpKoQLM3geGiZCxjkGuGq26n9phzg",
  "key31": "42LNKjpVNTS5eTK1J3TpgqqVe2Am6K2esqQqL59GhMQi54CiuoNTa7FtMd7nSMTHPsUJG1LtkQAEAGCjQH4cST8z",
  "key32": "w85myDYhJ96ZrY3dq6UG8XZH4Ks2wSo1om1fCFmTJFFTFt8bKef4a92t59HtfYqZjoXnMTBim46amEFhuc5G3WC",
  "key33": "46NkSwgMG2GEbHvxDc8uJf5jYSRuAkdvpnYJvQr5hg62Wgx1LzLoWcSzVNeG4SrGoT3BH2HidsAAAKqWWf4j2fGd",
  "key34": "5Jz1s4UK33ywG2sy91XNWzueox7JzpAKWQRwTV3WUvqNb9rWxS8DQkbBm4dHTgvbQ2Qcks3vFsgzxra75nB3BTwc",
  "key35": "3A2s8coKNP1QTzenXogJyb5WEfh7Qwhcg2HaTRjaxL8XfhRoCP2wCg9hqtmjREx9rbzuxhoMuCLnfnwhqyAfAuqa",
  "key36": "4vU2UVGx2o5emCeoGGEi3nauaAEGWQKMJU15f3bF9rXjZJjbj7xUdAXCm7mtHkPSa54gBqumosMbmaQgfxKMAdCQ",
  "key37": "5DGY2bdRCiwPiNdcdnQTw8YUrE8jSaDXcsmoxTJt5APdmzvFxCnnH8vhaEmMn6cgXNM5DGCThcyUXg948B4CqwKy",
  "key38": "635v6exVvo9mM7AJaxudFmPjrqS7UKyXDDqyqnbbKCa5ATU8NHSz2aEykQxRioahyM494YbyudGjfsMp4CrbPENC",
  "key39": "437WTWRrUf54NpYFeM5EwVNYHeXxQXDrAjEVQJ4C12EYnHUBYgz74RsRQttM5sSTAVhMAgqa1KZXVkrufw5bRhcE",
  "key40": "2EJRd5YUUARVcVy6EyDGRAbnhFrDUbzXkKFhhsgBWEF8NF7iU3Vu3GBYxaemjHiUqm4dMEKpjHrTK2N8CNfRMNLd",
  "key41": "3j4K5J6wDJjkuyjxf4J3ByZYAWhfP2RiY2dBqMPdk4T3fLSCyKudUJwy2JMHkUh9QN8Jne5TRVh4JWjArGiFUwgi",
  "key42": "avLUBZCi4KjJtLQFa4Cxtgc4mYkYVKZXiQSkPgG8Hd4R88Y8nLycHcGKoj5QQvyg69rfF1ap96F3R3Pxah12Ham",
  "key43": "5fhPfcHQwS1fHrZ9vTzuW4QbVbqQ3rmXAmTSc455VEvjASNxF3qvbZpyQqkDqiPJB9zkZLdRueowDJmbpH1WsyB",
  "key44": "4BhYTyr1o1YDgDaxjMT15F74C73BfjQb5nAQar774kBVkwbABFRAZJE5o8mZEEhyLX3uDJSsptCqisQXrb64a7GS"
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
