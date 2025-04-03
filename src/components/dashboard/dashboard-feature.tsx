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
    "28QPW3Ab9ny3Xpb5Ksv5vSXTMBbHcVqgX9GvJrsMK9KfCdNULcn3ehDX7YSW461GsTBy5kyoqijNvFbpVdKknywr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dBZSwJ7nYgQPres9peBQpzcU6HNj1a6GAuyjxfpkT6MDEMsLik1cMSk3uHnyKfB6xkacokfUwNLns3w3KtBo2mP",
  "key1": "3KDtWuh7V8arFShBN5cDakiyzT8hY5aBgPDkWnNBae2fTttzT8ow6UaDHNLXtSwKMVJ66RgQKR49aggz74f4jm5F",
  "key2": "4EzUpXMM9dziRxThK5yWfL1VW9sB8uaFkaipMQctSYe9yh66LZhtYvQHFSzXqzArqV6owkrpjhYydVHNWRHF515q",
  "key3": "41yiSywXYsiSP53HgkAMCdaDZ8hv7LPtMaSpRYU2hipy859b7qD5oeCoxDDmdoKM8FfS2XiJmLueMUtx3EhHHXBo",
  "key4": "6LaScLCKDj8N1yaSc4GPWt2REXt4d1Vcd8hWuNXtCWGx74yowvbwyVKsXX17f1gzywwcr3E5PiGH9sApkLbVH66",
  "key5": "rj1qZfsbTfVzimWSdZPHrco9oPSdn7S2G388CS23U86hRkiXyd6VkrT1oPsCMDeaTNo8Vu8pcTNSyUY8knqjuXC",
  "key6": "2ziDPaVLRBzRsbP7dZr7HUTM3hA8v8t3u7KYvWPx8NykhsXXUHA7Ahv8Q6uPYGzRBJfxWRi8vMdFG11jdZGrkktn",
  "key7": "5T3NftjNS3Mm7jng6wT9gJtFiXRPaRDttVSvy53qdoQWaGrMANvisSmuaELr1szrSrhLYDbA5UrB8dn9NqW4Awrx",
  "key8": "55YZ2wzYRPHrWYxZEZS3oHrThMNUbaWpnNiSsMfMzscDLMBVv3xujYebx2j2guL8d6p7VGNGLVvNrLgeqMXRqiWY",
  "key9": "oq4BN9cMctdaKQEokPEzFRUxeTqiZbjqkaZa6sEMFr83jFXXpYbjrDLJgFbSynT66ge7aPvJuuToAML1qfuPGCY",
  "key10": "5FxGA9NpCLoNY7XTLmPwZegZZMfXJxsohgowCHYnosqNv6iBvYeZ8Z6vMtYkw4b5GgdDWvKXg1cerzJhpJo6rZLs",
  "key11": "4uMwJVQNeFn35j9bhwCKT1qc4tJ32JsYqgBRk2dUmQ8rZdniXiX33chr45Y7R1Afa5pCAUhoY3vr64xC566B7EXs",
  "key12": "3JkFygxUCeCjMJjw2YxbQTuz2Ue9LjnThqUeFUcZTPQgLsjDZVhMSt97qYtSQKcWGpQcEppVTkiiNTZZrWdQp8Fa",
  "key13": "259kx1R5QDkS2VdEYwfenZh6fETaxG64q4o3VHHriqp3DbcNhubqtuT46uVgj5v4jLcDo2dBfPSjsUS67NDy6sWa",
  "key14": "5i9LUAxRaJaUkDA9BpDHj3TYhEe8y6vXTEfU5fqU9gDcWMACRiE78cLPrYNTt4BaNN2tuh3z6JbBM6iVnTeDZ9zk",
  "key15": "4ef1BXtGfXd5F4jKfZ3KYqhXGUrwN1KaVzN71cV5ZxqdTE7CvVUqy9ypXMm3NJy1Cqro5BPuD3K8C3fWNdT8xhxA",
  "key16": "2rJBN4DKTD5Aih6RiiytqZWcqsPfMkAVPEV88iXh2swWGw3NyBQWupiK77fX9k86pCUhs172WYJhdGBSvnJLaEBh",
  "key17": "3hHKyZeGTzt2kCGGPr7gitcL7C6wrzR6MBjeqsGE4Z9cLxJL7iKY78mhZNKaVGNNJzT2Q73PyeKfEnwvoAh5rDZx",
  "key18": "5zK9s7XojQ1FxFRfaZdE3C8bJBUhFEwJSSDoYTuidYiNVA9Snnu6NhMmLGP4pi5uDRYewDWBundNLi65epmvFH8D",
  "key19": "5MDA4uWHvoxJ7omU6eFqfBnkUsuyvDqU2TSAoBW7EiSKgrV3VW87t8eSYvqMtaMDmZn5F1q7Zw69z87tEkoLEpz4",
  "key20": "2TKvsqPBCT3XHYtxLkaxpEgx7mNfHZbvbxuRpDC4jAinqgM1LsMs6TG1dMw3c3onH5k41jzfQWxYUejaUJAs6Kya",
  "key21": "4dbuSucmeKyhNbLxthqfeDigPjtjkm886HrPawfuWRtjhL56S5pPecfutCboEHaHeYnQnQjC8ScsH4PYV7qSFoki",
  "key22": "4pZaACBcwVJQw3iuT3befGmHb4xcHzdssTcvvwMrGnY3aZATtdegYekipuDFaU1J5rbaKr2gkPZFinc8dPQQnmQh",
  "key23": "4wJEyfGLzG7h8hQmqHXC3F2hAGNJ4knHS3fcagbARoFt5bfAmbhXRZfuBvoxqjqK6exZJRwqTijNqcRwT66EwiBf",
  "key24": "59kHv4TU3QKbBUyqZxuvkvX9MvTxuCo1P3TFebvtBaCPjHmV6q6WAYibrE7NPhqv8zPqMQqfYyj5sCYZnnFJBH9s",
  "key25": "2rVJhugBVzXRQcyYVZq3EbGScRntUDJyF7TPrpYfrTtmnU1pYrB6SsWQweCrsKZP4TeTxs1qhaeHDyBwaPN7vXki",
  "key26": "4XczYGQR2BMepLovvFAywnLKZweKom49ceMbm9UTq6vX9keajdRED4fq7or5RELCZp1x7SE5JrZYBDdj5rjrtQpS",
  "key27": "3j8MbSQt1hVHLUg54XZchiQ3Xv89xb4M8Yip5eSDNTB5bVtvJ3GPeeT2q2SM9Nn9indY5rZJRmLGYBDNVWYGgeL8",
  "key28": "5Js9ZrwpcB1muRazUSC2qLg358uR5zSqkxjfmAmUKT4ur38hbZwGcNKeucPE1ykBYm3tN28Vm22di3Mu2FF2dvxT",
  "key29": "2HqshcPRU7PtKyd2W4fNzJRBeMricWTgR2v1jpEDd1icauhj8PuFrLTTxL3dmJDGMTSoEW3JHLaVKoxd7EUeEZHW",
  "key30": "c2F1wkcHiLzDjyzVpPN7D4Mihad7asaZG3p69s7DBgEKfFmhAQe14JtHJWFxeuW33mGxEdvhNdNPX2uj8tQ89ke",
  "key31": "P2i9eQs7gb9QEmyVUAzkFMg3SFeroT6Pbx6ji7p6KVHwdry6LR79NpjJEW7k5N2RJyUrXVNm9BwqaujQQhY4k72",
  "key32": "s6zFptxjShr4a8vCg5VbEWefYQNfa85qQpW91kLpnr2819X2mcjn4zCNn45AUn1kj57TDmHp4GbjuhHY68tLxFv",
  "key33": "pRgVKB488PqsJrGb3LgKx46Yr6Z9RhcZreC4ASki2grfiJKn4RQzLmbcH14d4TtSi1WF31JWYqbiA8TRXvMjywK",
  "key34": "3wbHoN4WbbygoLz7a7bKfm7NVSReuQ8XZnr5B6cAaUn14cE8JdQcKs4zMAkTUQfstyKffP33Vxt3hntBcpu2YnKq",
  "key35": "5BWVHjLPpedePfqQGzTyQVHYsJGyvXtwAD62fumjcTMrcWSRrx9W1Vfyyj2DnYMqR3mcvjLwN1drw6vdUXAefgdN"
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
