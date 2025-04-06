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
    "4NPic4M1qZMRNYgFwhkyV6bVM9Wsnw7p6T6vFjcEH1vKY4ms4P6JkGVF5ExofrJsM32pzrZ4U4USeBb93mZSEbUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43CgEagDfSp1DghsHosSwps8jacBBDm557oLPaP7tMcD4rpjtrnyydhPiCFCVGh9DdikQvKsEDoFYUcdoKnZd2mQ",
  "key1": "2y8jtLE6p2fotGA9nRwqKPTC4rGKnX6q3gm3xwWDLgh4uyY12jGKY1LizhQjUFLEnNiyqWRGdFbJd4XQdnkfJaBL",
  "key2": "4eSSUPo97PqQun3tJWVYhKY2iF7wKiUNBEDsGpKfgDrgzT7j9Jy4gQ6UwFxiKrjMXpHsA5gyfiwqmczdEeapEy84",
  "key3": "41PWUWCUF6GACP22g1q2jUTEKnAqMex8kvbuXoJRAVepjUnayXspSixABCKXtNLgqZZBi6pGnPhBuCe4W6Btvw4j",
  "key4": "2EsEQcS6achWa6yzd9rUneyDHtRcNpMzSXARSJj9fwJNLVmxknKRfJYzU4UXSEE7Cx8Ffgb9aM3HhYEPN5riKHU8",
  "key5": "51jmcPePokeafx76ERT4GsxfqcZjxS1oHUsoh36TwjJ6aCfkAJkfaDKSFPYQNCADfTT1TdDVVbjvzb6FPFN5dmHX",
  "key6": "5qoXfgiuQP14tTWkDbD74wGVQRBNBoDszfgiXDJMg55HCvrpVMHpyzzrZn2agrxdB3ccGU5gjCadoft2WTdy8WyG",
  "key7": "5JsYFYMCNUgtHU3PZMRL8hKygrQ41gZbr4QxNgeYMrh3tLZLLVrD9wsgzzcHwdXGYN2Cbj4WB4SkavcQAKwmHrJr",
  "key8": "5ZYGRKrwkBoYjdG4ChEpydWyxPrbnKjjuGoBgdb3VRERaRWoTAQLD6DTYNRsPyPsjM4TKn8f6A9VJe8wubGy8GHY",
  "key9": "2BbSXzXtLD11SknywQzmMTDe8p5fTqfN4rXDVMfgsmuGHxE9fEWuf4nhUDiK4ShKwNJHc3ctqUHTaCdo1rXEdsnN",
  "key10": "41xtaPRukniDryRnMJFRYJQaiUGYbcTqBzRxLen9fesXriotowe9fbPrehZtniu3chV5MExgA2nsqXjcM9FBq3U8",
  "key11": "5vzjMGgrBaiQSJzQ8xq5wKEWpdRQmZWXXbXsbV6yt1DXk5R1agL17X41Q8fLTthuh3J1X5bGZH3PbWHdr7cbdX19",
  "key12": "4ds6CcMt9QfnVEjwRUj3LvWiaA8TvmgYt2g7u3E1ngWGqG2VtQK36rvVzyg5s3iq6GD53JD1q3KRnWR2k2p4Qo2x",
  "key13": "3SXWJKoqpZgxguf3RZ4fXyb7Szx5VN9jAmYQ67zWzGquUbAiRaz8X9SS5tmcbucqNhWiYR2oU77cuVuCY6diag4h",
  "key14": "45GTzeP7pb69zrDHyMcX8XSXmdCR5Hrsvi5pf5ZJLmLcn2mFxN9omvhCqDqtLYQc74JNsLPUYGihQEuCd6PqinV2",
  "key15": "2b6GNy2Yzhym9kSeL5K6JgpiFFpQUyhFgqt9fbtfhp1nVjVDz2q19CKptCqteernXyQqcavpGwK9T5uB9awtYhZV",
  "key16": "43jyAtsdqkmQEyAabjPpdfnHxaXcFnkiR33Cs5J2PGvWiXEwi8LPhYWWja6n7Cbh3YkMHnKCjyPkDNmkqhrXmSoT",
  "key17": "3QT18zeARULjbbKY3fWEtpR8HwUQDYAdpiXSRF7R7GbfqUF4Hp4FW56tHUpSNbtgdAnVQgFk9VCtZtjLu15iUBTz",
  "key18": "4kEyc9YYBgKE1kFRKdX53dPgoF1eLxAEuXYKweGZqiwCuBQRQwoEiyAi6pJxkNG6N6qug1xrg6dLiLYR58PAUAUc",
  "key19": "3BSNbJN15uroDK8h1D5NNCymu7zQBDP9tSMKr6qwTX4Z6VsiDyMTCxsKQdEmcpcKjpxN261M1uGDm9jpQ75DApd1",
  "key20": "5CS6sPcRxoBxt6TRDURQ51x7pis2baPK9uuDseCFqXaSyRedU8J7Y817AmXdwKdNrzVsqUkpLW3dMdwUR6xG7rtx",
  "key21": "592VFusXY9kY6vyYjEkivPNcco8M2Pno9zENFvYt9rWjbYVw2DnUyyQD2ZmnSt2EDgUWZaNiG3G6HM7UxAh4XQTk",
  "key22": "2zdnsVFqMMTHdHg7JyC58488tsJYwqZnzyfFuNDz5N4DmqxeqftkAyd92ioPRKwUKoqbzrkVNkCFhRPwqmEAu382",
  "key23": "3Scgj6YfFAtXksW4B8SqZ5amJdZwU2y9EaEpBqydMZd9pqDamRZJEpubMAGhiPBNKUUDSVYUC4qBJi3fJw4spXBU",
  "key24": "4Jj9JTjrTFRpdSEkyXwceZaH2DcMmS7fsEy3rtEEPXKGphSs1XLoMueYdDnpifLK1iuWgt3pTdcwgpniascs7uSJ",
  "key25": "3LXRPX5yWWT9JWzM5yFK7aB9hHLB7Pr7XSkmPEPnwU2Q9mr8aHsQzJAfZ3BgjdF4NB4hbMM44s9wfncJxoaZm1UX",
  "key26": "3n1tvM1fXVe9U7r4goCqw44L5VCBKKVCXzGhRUA3D5HE9d16WddEzbxTgh53u9wgHcS8D52S8B1je3z3womRkx7D",
  "key27": "5DYEJK8jERmYE5ya6tn2zZb2FZ4sxwD3cH2e68guJe696QkoBCFJNw4bXwdi43MCBWhCn8zmkwQqjRhS8DUYCfAE",
  "key28": "b59ihPAvwEDvQuWeouKg3bt7DefuUyF9csJgHJKbWucHLTPgkPHcEzfvjTSJRMmoPbnu1eZR2GoAjHnUNx3GuKj",
  "key29": "4TgNUZzkP3k5qaQz8gDrjhQmXaJcqbKDHzjuooWAZTXk3WqEq8p35vnjRACVsShfQZw36yp5qVT2JNmQhLtbb8s5",
  "key30": "4ZNy9AfYsaMEAH2nGaaShxLtvnn6YNAhR3dgZbQ1PT1ZjMi6sNEm8vc4H1w8YYzKDqcBMeNNaaeLhy2oN7YkSwnU",
  "key31": "4MdVx53YhQQX5kvoKsXWiRE33eGzQAv56eYMGrFcHEJpzKZg8qxe4Kx6kxFduHKQeLWKaSayEsGi5MqLrTxk937Z",
  "key32": "2xRJCMu86wjSLEZvTkmVYn5QAwM8fpGYfCJ87QaVfQu3jk6LE7GyicZjrp6c2tNwiGyxiapCLU18TXpmvd8Q9WqA",
  "key33": "2ojeerhFGjM5BoPz2fqypNPsComDoHuX91AjkSMSQNTBMvEjXcKHZKhsqwY89csFmgpnkJjX6wDrb1pP6ACZ8S4R",
  "key34": "5xubA7x59WGsxbRLvbU7psyJVqzawn2SvaGVNnpYikKehxMSXHSZDbEtee5PNc4DfGeoAjQMg5KDkcnqzg11JNRR",
  "key35": "3C79xAdcooPC2oJCxdwAsSX8pZDcLVTgCy24wLx49Zg8f6vCTgc4bgRSxxj3dpZ5iLN9zvm9LAjkXrk8hpjwg438",
  "key36": "62pYptVRzo1J4FwpFxoXWamZNwxUfwihz1CQihRoDG5sedKx2MMukFm2o1H4qeZLMNc38hNWxh6RjKshfE7bvEHv",
  "key37": "H51RYwysA5Qb2wmbooZxHaSp9tBEzhBasQx9fqUMsWYUa9awWT7w5MZ3RL23eG3SRstnm3rtuwYB1queGPJ7nUB",
  "key38": "ByWjzpUhdKvqTvHZYaBMK6b97HqsNAKDCnmsd1roR4nY2UFHPTmbLQKdfF3iMLsPfZXWovBDuWP9hKtkkMbM17K",
  "key39": "2ahTFjYRVqSQZfdYnsMU4vx5UKw77GBihgyVZd4jd2whyBFxjsSs7Cj9bwZXZZW6nSyzL4fTNKSXESWhpqx9K1HZ",
  "key40": "3ZZMLd437NXqsxhm7PmXZ3QtVmjgBwWz2Y9Boxymz3k4rW3KTpLrnBVnGhvPQ1rEiEjA9BP1gqseLeiwCnoX45zC",
  "key41": "2662jAHg8jpzkAbA7cRQSvwb1NeCi9zbRGWXXqA1L6VmKfR5CnKihLP4DFhxWuQhR6EXRL5SDP5r1ZsSD34w1uXq",
  "key42": "1DJqpUJzKnQEs1m1AyzbZzxnKuP35y1gXGTckVNSfoKNnwLF62NLxX1TysLTuikgFGDFkhY9uvC4qekA2emq9uS",
  "key43": "3NEyY3Uh6g2dZtKvHchRCUhwLvqYW9ed7FUcoLgsGDijwJPHXFD4Ru1EvjbRTbpnPzCYg4ivvPXVsvA2Qm82MghB",
  "key44": "2Dr5Q7q9Fny4KNx5aUSM6uEgQEovuTRSyZ5rwoEMWyZnAiSk7Q2YCdeM6ZAShtKDaRBQtbU5nLQwMCAcVY2LNJew",
  "key45": "4M4cXisFjK2T8ijnEF1gtdTLRWfkGwB66WSsi3mAdaWmDGbNEuuaMNVjdm1wjA5LyMjQQig8K3pGQRoPqTFZphoF"
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
