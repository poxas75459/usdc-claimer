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
    "6LVtNC4UxgkybZx6Sw4fGUoAq2M7dLQSF7Fp7jVrLAwHZJLy7du5cYtamqq1Cw3szjEBTVZwjHfwHJZ5vW1BuhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zeoA1b1vrPVGACLcF9rqQeDMEvXgzRNFnBxxmy17fLHEPEEhiLXksMPCiKnvtzA7uc6EnEYTbY96xtcnwnHJxW9",
  "key1": "36Jy8hacp7bv5Wbt97vmmUDeXGw47aHuKZjeC9N85VeNnhLcJmYC6RXaaGtry6FxPMX5QMfR48icGYapGNj3ePCA",
  "key2": "3EULuoazY5vSVCNpy4XjAvvnC9PcHtKNWsGAozABpi3qXvVXz7SLcHv2UVNGWMMdMjd28upbJMizCm6xbjStQRGJ",
  "key3": "4jxNWm9kgaRaU4xSTEa3Dn6g62w8T1VSNPKs6MAc9DMy9EHuaqqCZkmUdKHSgkPjKMVtudUVfHSdDPRRNLxzmeMD",
  "key4": "5YqjFYhcNkqQoxqS5Gn9qmnEZ6LjTz2swK5pnuDfDADyjPEsbrYMNhpjZ8stpKvWgy6PbJRkNThRuUDryECK2XV9",
  "key5": "2Rec4FNHqFaZJsHN6EK7vDNRrw3bH7JNtrAmMVkhWEQ5pjznwWZ8WyXtzXeXyVgw42jTh9TZQgV2QbxAzgpnQVNK",
  "key6": "3cr329bCcSjaXTph6i2FXBvKCbaRa1PGVvPZDrXnzkVBiXtUjgt41ErYDW9z8DrnRtd2VdQJoyFvEv4ErfAXTMRN",
  "key7": "3Dj1QdhUNB8UvZh3SAyNVoRPWQnYgpbVHW1LmUoJBoLJjXymBYddtiXG3gfG1wc7Y9KQBv9wbHVG9zopABYFWVEw",
  "key8": "N98nL9KB1aqoQSZ3DEYJCj4ihRY1jyGVgpK42f9Pg81GKP6Z6YH8U8J8rQxAqJUFybxP2ogXZGaG8ZBhg8qJcd8",
  "key9": "3dFPaLVBVqiEZxPmVgacc3P8YBGLYeNDGwAopykiYhPJkwb5zhzPWcWCxCrimQmtoT2DVvcXQxcnWLYGzH5dxBof",
  "key10": "8ZbMkhaTQZctQZSU7wBLmNCMJyiBS3AGqtCqX81WiDsCPkjtvjhDxZktJZvxNo7WZFnT6H1Ekff3yUaJzQJRAup",
  "key11": "fL2fbkrTVkFS9FKaUtdHhFZNDuYussrGmZwKMRkJSm18uAYtty3AkuuRqRhZ2hFEU3iCyLrKaggHZDc3YGLCicB",
  "key12": "4RiELZLmGD7mViwFrZgkZVsTxepzVH5grYgDsU6yMSSh6byQgviZnipJLvaGbdEgiwhsQr6CvVPzydYpDFjzHEFT",
  "key13": "5c9iVnzHBZhNneF173RJJ98ibqjTn4yMF47EwR9jLaVpQ3AZDBx5SBBahUfzYSLrGwxffisZPSeifJwro79iAbit",
  "key14": "21H3iAqL27AiS6EHByA7fdD1jugUF1zXczxTFJ749jdQcaAeWNXqJC4aAYsoXZ7L5wXVuQKtuihfSX6m2V8TJ9Sx",
  "key15": "gF1Lkir3HcWRcAEpebh2Cr9SARUdFfk1G3oaMrmGUz7QwEe9zzCh41CwtgP2MbmhhotAQQLpq9KF9STmgX58oMm",
  "key16": "4vMAo8CBmo9egofNVTGurAtoXnShYV5tAvZ614bxDYtZNU4fj4gjjorYVnfUgZr6CyTLhJwwqiCu2jCpCYSjZCNx",
  "key17": "3BUcJjd3kkB7DgZujgESYjsFQryebpGaBCBVZfpa8QojFNkHGqfhZ4w8JFi91cq8C4PwJ79wRqYYKTWaReTM9J56",
  "key18": "aUGx13BwzNWuFmoKJQ3axJy8KJUS6fsCmr3jHHYdFPLejgqRWbZ5XUCGg2d7LFGC5N12VwqtcTFvXALTDmPqgzk",
  "key19": "CZRe5ENqgVsSALLJzJFUxtLjnrkvwyawsxQpw9BLgSADQ7wkN9VwJz3oy81y3YzWXhrhfWNdAyXgCkuGaBTp4JQ",
  "key20": "48cQAJqobdxPC4WmUgRZxKPM78V4b8SQ6RgYXNCRZKz28FFrCJj8mYPMYT5RxoMLZLRar2j1yMW87SbbeQcYbJci",
  "key21": "5HsLRMCMASDeh51rV5T6Q1dG2edKjimQNhXSLEF637eRhcSuYgXYw3DKgPzAaLejzdcBsD4LErXS82gVt4AB1Ers",
  "key22": "3SEugKZie2LhPnFQ2NQCdwPJCDW475V7uXs88KNMajMEgBBphK1Yz2xX6jQ4135q1i9Xqo7BnHfkCYHMEeuVsrKW",
  "key23": "5PX4Pm4NF8bswcWTYiHXeN9iZRE8W7Q8Ww6pKuFk3KnbBPWHYGX6hx6ZJej44WxK6YLt2CKJaHa9SU1Gr1BZjvYw",
  "key24": "3dh32Hq2EZRvtRtEr6d1xqWf3N7bx69sYrW3YNGnpNWG8csBAeYmPWtYZzaVwuckCBY7kmT7g8GiMTP8ZJnWz93H",
  "key25": "3Go5LBSzSL9BgJF9hny1ekrNgw8mG4tRbfK7nkvj74eripP63j5CLscrdfWZ2HMZK61CyBUbNex4tdVxQTQ8NqVX",
  "key26": "vwUkbVcww9q9fgPCigDovLPT46v3fQ8Xjrkb26w1CDgFroXJRs6Y6mNtocBJo53uDhyaaxrbfhQQaKLbUtywwvM",
  "key27": "4W1FR9kZ6rxKDeqYY8Xa46mFGus1NPnRD2nszscTc9FjXLkEGg2ncZKakyVhP9vUmKnPRVTeMCGHwR3MQQhH6DDL",
  "key28": "zrVYVQzXLWRMfUyUUDLeBXpbSDkaRicMWtpU8So1bWm6xzCEKykCdEpw57sTggbthyKC3GgpPsPjzCkS8N39iPk",
  "key29": "3dFzubuCwPwbjrfX9HemCQ2ayX1L4zoPQNRX2gftzoUmuYVPSVtaQBsn9epBV8aD8ZEK7ziJUgPthfy2KjQrVm4D",
  "key30": "4xzo6iMSY2DfWQ4D24paUeP6wxJ4GKJktZJtpLoXmGYg2bQmKCVtich1tuArKQ3cFR9SfepgHDtmZVwbJPh3AKhA",
  "key31": "2oxvZVFbUv6TJyBT65AckQTEuzu6LCyNZGBp8QyraDLdS91kAp2UabFAbwX8iLLCa2TfGjyeNuKNTKFvGPGceUjJ",
  "key32": "2CKLjVaZETXy7Xjep65dPT9ahNd4cpG1iTHdnSGvtpSt5vsDBQZ8pv3rmzWkjgsCAuiBgfkmr1xWiyxynd3zX7ir",
  "key33": "5GCmSkE5NN3NjSf92dwdihjVJsnzdyCSiyZJS3k7S4JuD9mWrcGeG9N6BrWmwyvf1WeQoBkvJJy4SHUgrGv9MVjy",
  "key34": "AcuwH8GP78RMsiQXagHnxGPGeoGCv5d6Bq3mmPwibAyYHEmszVsDVhkXpozyJQ4B2Qg2LfP1apaEqZQrtK9JH56",
  "key35": "56gs8nTHTud4Q1Uc1quNd2d8XPbG6J7nvRZdnRPKMcUMayyKYdUMwEcFT6BZTx3WBWLwuSoZUS9uzJ6iBJqZstrr",
  "key36": "3w7sHv7uWw21cSoi6zGhwFiFgjoszC7YLRStAsch3zQK9gHg5yZorh3QSbBRUsho2zGxuwn5znU4nRVCTGPxoWFM",
  "key37": "2hb4JQDWuipq4wJPNhgY2RcPtzHpYknfY7ciErvz8zsdN9KHcK2yqMKwrHsYdyFnYhDv79j6CBq65JjxymuposUt",
  "key38": "2DoxqiKhCXXRfQcCgq9UWuDhL9gxf9YhQrh5tMB9qSVsLiJtsVWcWB4ABs3qzVEVSAEUVm4yA5iNbAXybJV84i8s",
  "key39": "2FAjzEcfUPVSFP4SqExjPevurKux3oUGEYDzbepzLHNCridn4sfVmNY77kewXVrwc73E5NPfAxd1X3zc17zahUbm",
  "key40": "4SMX1dEaXy5qVcJ5g7532my7Rzn2tAGrFuacfGKnDHxGvEJaSvUwtua9oYPufpnAefmGiUXoesed3RTZuEDuH1SE",
  "key41": "BvUBQpWinbiMS2hytK5vRkPW2Pk6qXr5RiBDvk6EVvioxEHEkxEi6bJpz5ispiSFct2jZWT2NdmW7BTb5USj2Gp",
  "key42": "3Hngh6MFECBQTgESRmoqty7ZngDfhkdUzZqdkgUg8dXTxEj6yDbttEfqYuHLAGzHYYdWHPJYm6MMFvk3caciJDW1"
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
