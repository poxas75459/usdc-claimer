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
    "23VfuAAxbWuKZScJk4jFdNNatzNAKKUbbnsugnPRtJKjAd1qPRQNsjLzUn5o4Yf7oa8JHJPwDjejAar3KjdAdYh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ouNG3duSGXZ4zQAguR4f1rn5r3uXBtBoudDRApUHymWKn2xvnHpTo2tcPxn36hsWQWgieJm5WyhAFtf7pq5j68",
  "key1": "2YP5qxNfdtLEhsWoy7KDyE9K8RMTRU5swr5yBQDudbKbmToeUwqEb8SUeUbaEKUcSor4xtzUs86LLWk2iRU7E7Jn",
  "key2": "4sLD4TqpGibyQTsdwttDkgu8tMFHwotbEGtBf3p4h54ipDVEjXmUrkMLx5jv5iXTmNEAfLypQkDJrqAJnyh9FEyQ",
  "key3": "o9iz4QcZa3ZbtwamYEgfXw3V3bri9cvMJCE34GqVKuZFYFKHkEsgBkvD8hS44aHUysbAvXoajDgQuo1MrtWDCES",
  "key4": "3bUNTPZQSf4wGb7gJFgVSD2o2DqYZu8fCKYFgFJsG15UtDKf7g3Nu5MTa8yp7aaLwimMzLGy4FLtZHJfGiUTbfzT",
  "key5": "5X57hjWk9LYZKRqeNft6girNvZxja5FJgw262BUT7aVaS2j4RWDU4cnNxCBVmauLucPzTsFvBig2aHhwrSrpZTf9",
  "key6": "4CLKFi3dGbm3nfmbNDFYVeMfiAnRYUHJpbuWGBkb3H7p9syK8o9ZYSskRfD2947SWYoaKmDg5upgu2UrPpAQESmi",
  "key7": "5XQ9Fh5uD3sfRWY7KPNVVLiY1eHSo6W7a5FdihfQdePQbHP9JNBYXRktTSMpqKhaZf2H8589JeYbEu8AFgHL4w2C",
  "key8": "671APoLtsV15xpppGMR62yWJmqXijog8gr9oKWpV8dzdayJVKPHk1YaXmPQD7bcP7oKdRK5186akWyDGmBtwq5Ya",
  "key9": "57YxBcJJZxNd8hPJwRBMEXGQv6cjaMJgjWfbZk62qWiwmKkLtLGbVvgsQKTf9ACotccDf8ULcSKTNjgByrn4RnGw",
  "key10": "3yRxMXPx4LrBHiJzs8KBJ4uJSomSLFUrHCjwNP2kRn7EwuC6ZGUUx5iUq7cPf91CJPz63FVVs2g6xpGf9gk6TGEw",
  "key11": "mPkFZUASeDwygTPHqjPNq3HQeqwiGUmq2zufMcLKeFdpgKr7RmWyCAfM68NkXtWh3VAgF965t8YqKgJqy7M18bc",
  "key12": "59XKerBq4riRFoyMjBoEdbuMC58TwW6K8z9snhR7BUWXpFaC68aUfXAq5TEb11B3mMGoAUq952Eaaf4eWseJfHZd",
  "key13": "2QEzwFuuY8pCi4t4RxSXshB3KEgB2dp9rAraZ4c43u7WE2ZCxm1UViifP3PuB78WAtsr2fvWnHYYfRd8P6JhC32m",
  "key14": "ydLz7Q5uMYJufmArGKhKkJYWGdyfZE5cmPLCkWLWfipAcbpgi4UyvevvkQG7wzN8wojgB5ysYCR89ANvQrdmL9w",
  "key15": "4MQCkfRNE3M4aD4J1hwNdEZP59s37WqZYqFj16SWu7j3rW1YHAcDg1Qp1keMFtJb4VnGWG6jDspHLZojKUMrLAZk",
  "key16": "3ec5Ex6MVgaBUBQWjCG4eMeD9tbCf9bvuQRXVwqcn5Kui7d6wWhPhmgLkYJzu9oKee9Fwv63eTsD4Zx1fKmEP1Yd",
  "key17": "5gRZC8yKTHCoKXPujzcpmgWHCBa7rBrSVY2Mbqn3JCkcqzK82w6sSKP3NKBvt7YK7YnAjB9LpLTz63qbWBFb2Ff7",
  "key18": "2DKtbySqf5Njw3yMjA36cLujRZFEq2qubj9BvQs117arDbPwSyk82iaQ7yC12qVQFNYB6TvN8yQ7DDprhGRhHyim",
  "key19": "4Uo952AzfmBudcPoRnUWUNfT69xGGnWz5evY6TG6vLMV8EPK6b9PTU7ihQMiZp1raAn83RkmrkoyscLs2ss6euLi",
  "key20": "46e2MLF5hVMyQMqrTgosuJWQ9ERvcoZjU7ZMWcZ7Ft9caWnrg3MKBAepPxZwz5zPYkMPbt2whcKzKZHsRCjQ4B1w",
  "key21": "46M5DdMh515oTvfojYHAkPM3RYKHrRc54A6KakBkpV4tsnEj7ZPnKYYBvg4CP6sU2Yq1rD9jamTFoti8rkH3g1Hu",
  "key22": "5vKoa4Zj1f28tmThe8wHv4BwzxAVioW6vY4YR5JG9E4nLxXfF1eo9g846j3i5XJ1kbKDJHdJ41KXytfsotnRagJp",
  "key23": "423aaEEoKMPCquTrun6UeEU4JGQXzBihddgavb1GcEFywPVMhmCXsXNqvYbT2XUBtrmA3t3Zf1mmVK31rm3Qn2J6",
  "key24": "3ToZVacetr3r3SH1BcePevsFkDMkNE8TkEvi4iU9xeEP3n3MH3u48METkaGq9nn2kAz8gaSn2FjLDdByD1yg86Um",
  "key25": "2fTY28JqmNhQoUxezSBLZHXxDP2zFZXYvTNPAnYeo8YafjNkeUtF2Wq9K3fYzsRdgJAV4jUfphEKFe3FZizLk3yR",
  "key26": "31WS35o1rMWrSZhCpzmx3pTBJXje41ZekUn4qi4Dvg3SKRTeboqowy4reXKjVBRDKx8ncqgaPXg6HHLoQkpKLt5R",
  "key27": "5qPgCiv6VYiGd4qBAGVr2QV1SKMVZxZpkthagHos3geVok4dzLeNFqWPcgVAn8GcvmqDLrwzXVHEb54qrA3FCtZh",
  "key28": "2gEHXYEUzCW9nqZMrdw6q39VWr8JhvGi1cQCU8JaMF7t86CUsCmdsY1iewhvJMeX2NXro9gUbPhcwPtfiNp1pnjQ",
  "key29": "LFV7ZfAyoR6NhhwBS4Wr742ZrS4iNRJdFmoGTuZG7MhmwuXtzDZGc9sYfZA6kPXUV2DGEcdfrBRJcEHZ1qgF6Mb",
  "key30": "5FzVsWstuN2oVjGuki5k9VQmH2UMmN7ssEnpvm3gzqNXV9hTQGLwjZQ1MkgttcXJQ3TRR69YTsdKaibSRPAW5EEE",
  "key31": "5TCTeg9jnvWX49XfBGCmy8bqcWxg7nccn5NBQ5dJDHfru3jfa4huoBoH8DuGGSkJuksXqmefiNiHPzmLNPTGVddu",
  "key32": "62DDySA7qDTqnpqh6M1XwzJAEUBa2nAAF5rMyhtaR6UZwEfWFbaFtr8QtJJASoM4XhRQmTgUf2ztEdqD8zYjJeLt",
  "key33": "3acVoWimCR1uHzHCXcLVWwf6iumf8DnZp8nLoJTocWaF5sjPykvmqtxJdNFmstfNGadnV9rbe9fogLpSyJvWt9GM",
  "key34": "3CA7eUKhPSzt57NjEkmfVFc8CLFvbz5VCXryq6vKFsr9gSuqAXK5ZacGaTbk7W47uEbdJ2hRn7mWDMh6on9di2fo",
  "key35": "KqKP4SuQfpYzpaa9MdtfJFxVuxukVMQM1g81QshZCVrTwEDXqvDnijEEWTdfsexJJp9a448Fk5VkPV2UeaGLNdA",
  "key36": "4bXjezzf5FDFfgTipC1AnLTmyqGSGeC6GrLWuqEX6Y8gTHiX5ssbkjj8Prra33LZUtbwv6rPicVu75qbWUy3JorA",
  "key37": "3YQWjsyMmo5wuCc8JQ6uE5hvkYL3g41BTYHWSD168oaofzSe5prwE5hSJqsi876w4bkVKUodcw9n8DVXTUuWsh3u",
  "key38": "4T6ZskcXmGayUd2joiedmDpPU66hdJwX9d4ECS5WrgShj1mt2RWiz7iM8d4Xx59DuBHy224SKq72JMWC34nQtzwp",
  "key39": "WfYAM2ERESerYVfp7v2nRixHTnYhJCAa34tfLR4zeCHd2LcEmnuDdVY7noGPASZRYZM85SyT9EMxJb4SQAL19WU",
  "key40": "2ccemSnc1X2SoD4acji5vLtnVjpKbpJNZYGZTPiYbcfG2tp9hpJgv9u4n1Ef5dSqAXKdHTo1TB4uXFCqLPkMiRpM",
  "key41": "pbex2NQtvXKyq2hE9psRfEDRLkwns4BqrtV2faXQrfHiTq4qUdSFiHvTaw29XEN4myZ7zYT8kU47fDPCzHQ7Xvs",
  "key42": "26maCW67uyU5sjKLFgtv1P4c3MRKAsHzQttxRhHoQsHDbdMp9Syss2gKdehLMYtUD3j7oSkq52KDpFzYYtmWEqit",
  "key43": "5dvM93g7ft51UyqsBc32wLy1N4JS2QHpij892spDGgvh15PDwpDNuLsFwWriKRpbuH2VHxxLvSVJyZZ5dGoTQ6Yu",
  "key44": "3Y1Vp3UpSqJYGtEuTAsQnunpg3MFgzCgbzDe9AFKazsoj4Lgxay7d2waLm81obQ3C8f4bgfuvtLTH6hfEqTNRMhT"
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
