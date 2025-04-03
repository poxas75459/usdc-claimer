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
    "2djJrJhZZHzdzxSkw9ACkBfeAbixTjqoHWxf9tF7FH9wzLt6cY5mmyq3mydpC92SgKFNnDKYuVKkLEzxRC6fAhBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jhRW3RxWg6QvZW4w6n7t23uiLBYLPcXWvsjNHJJUHcjPHrUd94h1Zz8AoMqdP7HY3nXpYFSY7THNqTkeYw22iQX",
  "key1": "3VdzGfsvWtsMDtjVsUAN9jxBbMPBgW8Lp17raiThPJXfRyeiviPBEnW7zJQbNVxJhMHFh9a7iCvYEAgZtmRrAusn",
  "key2": "3M975ehjaQUt7LSXYJmpDvPpNJxq7mVdYsyhtBrYjyFh5bnS2rLbfYbi3zXeEsz9vJKt7p6qLMPeC9eg7yiAPpFH",
  "key3": "43X8QtsBKGb9usdL89g1e3aGohiMaV1JefWyp27wuTHfPi2Erm4AWwT6z3oP3oAaANC8Z3Bre1gw5Y7NB29Kb1C4",
  "key4": "2Nto4gKWdPNwHTQjXp3mMWUCLpdn7gypiVs5SR3zWvwfHHxmBru7EEKRmjvHCg28m6JZxTCTwC73rSVP5ouvBMY1",
  "key5": "4XSLgBG8xyJeAjVwiVnn7rEs2auxZ2i3idf8PWBGh3twyDXVip3xHYXstDpdf236NE3ort4wVNoP6pTCsTWkzX68",
  "key6": "2uYHv2Z2SiQTB6CE2WxEmT5SBuMSKuLudmYHNMoQbnP3nh7xRWhn3egQvkmUJX2fq6CXgv9Ndfc5D85PteC6G9Z6",
  "key7": "2zfM2Hoa4CnC1hvGEaofCnkGAw1YzzdKExs7bECtWwnBnTNsTGS3PybvcgRgcT8BtXsphNYGiPRK6z9UwKPhjjYh",
  "key8": "3eDwwg6Su39CrFdjGEmWCHoD1wM5KRU62KMwuHvDmKfxBWSHLvpqCrY8SjTTxBJogm2ViXkZST1MmufEcvELYuhF",
  "key9": "x9VACXEqfeacM6VBZRQ8KYJnvSngYufXFMvveYxWS51oA59ARHWFoFMcwK3aNJCZPGBbFXeuXhMtpS9KQtZ4Sow",
  "key10": "jypPw8zFVSHcR6uvMGLt1WnviMTctaMwAM5zYtefrbwm4AMeLHvZPGufLDMTaR4wxhkDwfQLprSuqoDPiZaGNd2",
  "key11": "37ZCTVohMphjf57k99No1UdB3Sg8u8CbRbgXS81xNmTUgfTUM46pxU89e4sj1qE7Q18bQYGAZEkWgiohjoqPvsFH",
  "key12": "w76EDPTkqsDcQWt4s4Hq7V59uP7FX7ex33thfUwYbw3VwRNobXLBZpmPPS7JYfnFPGg1sLw1oA8hMqpgXQHv87E",
  "key13": "25JdJpPZB4jz2oL1uCVQZZBwvwg1xdtusLMoM9K1vWR3GxqUoc8NCpEnULtfaqkcK8Uceu3PFBfn4m95vE57VBkd",
  "key14": "283mXVwSBo463YoHX3zncp4vLnffk6gnsc92PhBeGfCHBoTbUiT8VrUtSbVZVJBiz722phU425oZnSe1zgYhBcVR",
  "key15": "2woj8Aqz91siZEqzC1dRAHGGD5MN6hmYzmDCYWDoCoXFmXrTQvY5e8ftES8ASpscSg5Z9dxyiVRX12ESgW5brVwY",
  "key16": "2JWeCmP3jL1NGP7zs15fJP24kmeAuLLJeZaSU1cePfkFW5RrDgYNjjQ6qjB8zdyadQELvNxD3tmFhijnQg7dhfc1",
  "key17": "3BTkJDcE2NEfJSR6aynmEhY1BXJ343oKio4RPa2DEK7ewSLboApR39fezkSQCDSLhE2NMphpYwAhd1EQ1u5EuXNw",
  "key18": "wbSPhecufnW4MJnNvaVUSVFZbpvjxqMoXethXSiqzRc6DU97SYpxpQ4cV8XSX5ojCjddj5gX6JQz2uDvfCQTNSu",
  "key19": "3FvNgdQ6C8AUiWFW6VDjh5BGUwZoSr7LLpDvcFi7LCe7VT1nUKz6WYZw8C2iXFLVVUquma9y3UWCt8DSb8H968sz",
  "key20": "4xNpQUPq3TU4Bdo4pe9MYcKBXbJ1f9gxUAkC2MCc9sPNB9geN63drG3e36eoM9TRHfYsWBkYz8JbmrYs88UxQ4QF",
  "key21": "5nLHayjxhP1yYoees5qLByZhdTwVn71bqF87H4ASBTme6WxqfA5d6qgHvJmW52jS8hVhBu2PTPHjXmoAE2TQ9gie",
  "key22": "3xRydZ9ZGn4roiFfoNx3tigWaUAZxSdd6pj38jUb7AoLek5EFyBbyZAxanDgaf4o9ejHCHDuq5Lbz3rMd8Mk92fj",
  "key23": "n8kCs8h4pPtcEXgUMiev6Z2kZE4FjyYaL7q25tE8JHYxKwDX8QYyQtrgTcacfdsSc8p5vvajcs6Tifd2AXG6jAD",
  "key24": "mLTib74kAKP6SxwrrpdNbn1hm7nSb8p9e5Dq1P9oMErTHkVyPEo1UAVxJFxSYQhsQfR5EN3GkvxwcvGrKL2oZLB",
  "key25": "2Lo6U4J32pNG6bMcuHtNxnirpSnXis2KfmwjCNF8P8p44FdE2JsoJ6JDSVScaiY4kdpWtcGAeMvjRcYqKGsQV2xJ",
  "key26": "4V1YmWSRmCvkJBghqnEhHFDSChp3UjEz4on7tD8mXPA3MbxwGDkAcRyFKGY8S9TAuXpf71zTVcA83fLcjt98MRsy",
  "key27": "5iKYyFS4KkMBANN7EW45DtrZjsmnBUUaKQeHNquNUxSRnNH8toWq71zTqtQsM1pK2edPX6tAqY7P9ZhDhvA28p77",
  "key28": "4hNWAxdPr87n86Yqnbrs8pKfzN9A169jZsLaZQRcxNSJxgQ3pqiMQ3D9FYSXScnjgXaDcg1VmpfkZb19omCuG2mg",
  "key29": "5N2AfCizFQK3ZuxH4VC9yXQXErDNF6Es7Er4pD9RvKV14EvMpGis8iMbWsetpop1Bzu1BxYRtGodgk41oigkLku3",
  "key30": "3iCtGG3hAJKKynLAiunu3L7NkG37zmknTyres3NZgiW34hnuarawCS1hb41w2UrGgyHGK4echqeuPUq6nTRCCW5J",
  "key31": "4ATW5cYCeXjrmycFG6Ucb7QjQDc3ni7SxiWccnXuyPjEEkuTVEqm1H1ZJnHS47wkPRrsjyyWbtjs3NEJxhCrNvKp",
  "key32": "4o8nUFi6v2NRiZf1Rmoy65cuznBRyJLaj772DSyydVVS9ZPi4WTifji5TtqABAK2HRfacMcmxRZxjdDNmX2B6NB7",
  "key33": "4WKiSaLDRhfNfTWNQfd2X2aH1Ji2umxeRGhuTUrRS4ZhoPq24VDjeghUtEMZvvXBDgyokXFrDebn2bvnuhoncyzy",
  "key34": "2ePHMfTe2VdZYJNnXqi5T7ZzFa4z4tJWZaM2R6HSzB35jb9YoCyvXvNrBNqXiuhny9zntPCyiR2DonQwWB25Ey2u",
  "key35": "4H1jW3ZLe6PFyVMN1BYkJU3x15NgVEggMfE8nbWqG7E83Y5CnDm8o6gRN9nFuqCUkdYwHqDwxZbNvE5wuwiiJ8S3",
  "key36": "4gUoFiADFmYh5oqVz3HW7i6ZR4Pnunm5JpwhuaDjE6uUNtqHamg6TeQXyPJJNfxEBzjBFyAyuroFDgYN6htra2Fw",
  "key37": "5a6dKzwhL2ipdyhH2PQQBJeY5MxsBd99KmLbSPMomZRcDmnZuozJZAwEWGix2E3h6Azcp3bkoj3mZHuhunS4e87g",
  "key38": "4nyYHL19mznBaFY2GWQw9xZB3wrrxJSjy3hcCaHomvXvQHeb7FLdhKrB6pZSsAr4JM314pyUkh43jP332QBLX5Lh",
  "key39": "3itSjoGS8UFX8ZfPJr4CRer1t1vsnVuaDTK9EMR6E7qarsuMbg9ugzdfnTnZjNUTLtzWFXJrM8pCZPSZznhsXNBw",
  "key40": "5AnuLkdK9t1qVWtY66wthsjBThqgp51jLw1T2xfjZkonStWiZdixMKpKastYQSfVC4TQo2Z4EioKCTcDY8PFMQ7R",
  "key41": "4WcJY7QCL7hrr8PBfnepntXbcRMZotvVQMYRuqX9atBe5mX8mPeFnd9kYHhq5bMjcs83Smxq8F9B36tSLfujKo17",
  "key42": "4NZcMEF6f6zMF1ep1xPC2ZPhbrqbn4vEPjwjghLoReJnwCjcci4xWo22jytDuqbeJ73kbtHBNZhTkEUG55qBg98U",
  "key43": "avyCUx8GqSLNFaeRP5x3LoamkB8TJ2V9yiPBuUscbAwJ4oJ99HtsN2w8zb3jciDLFxK7jn4FayhFFRRDsaUu2CV",
  "key44": "aS9BzAMAqGwNsZjvroHq1LPULv24mT8SdNjEKF2tie4MWZo5UU8Gds4NK21g5UNWmckFtDtjnraEbcJGsUujjEd",
  "key45": "2NY66VehbnEuURsnVoMWvgVk3fRiVfU4phi1kzKMp8oKUb8wsKvKvyBmVqN1zdq5npQhCuqqr1vnRL9zKW5p31JU"
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
