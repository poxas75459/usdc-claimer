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
    "64kUqXT4B7JEXjoSL3pRodGszk3j3JQUdwWSXdjHVRs2EFX9JpkMv5u1Ft4WsNTKfyoDYqXWi5akvgbkBQ1w8mAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9m2zpVNZv4R7sKt4UX1oqitMRextsyUrGiBQmDFEG789WL3fy3B1aWbMNSia9wjGRYFX5xzptUaAVGdUkRWhhn",
  "key1": "3ffQBvyLfXF9mDbexadgL5YegXu6984oogPg91cj3tckDvgFMNEerrJtnJ9Kh7Bjn9BUJt9PeGtfgEPYsuUqrXuF",
  "key2": "LV6Hr13hSfsY69HqtPtLuyKDaxTgs1VuWzq6jJV7ACQB3Yauzh2C85cCrUmbmPnqAJT94Y3tVb9ZRNMMXKVTFDr",
  "key3": "4Gf95Td6jGqahzJr3ZseX1j3gBh7X1wTRX8zXXPUPdPkmPMvkWDTTcQcdZdpqwVfXXuRVLcqJnVChBUs3iQvyobf",
  "key4": "3ry23HDLnPji8PUdfQVBFQcZc8y3rq61hft8UVk81HDzHUtVVjWC4odems37vcYBhDWNdu3aYyZ9ucAZ6kASRuDW",
  "key5": "5KtYL3TnsW4KJh4cjVc3sN6Wj1SSbZb2nVaxqQf6mJ2j8jbiq5NLNLTM7A8Y4mPHxRYba9YmTmuoJHmauWbfwLKb",
  "key6": "34qqUuPWh7pCGoqui2ZBaPiEiXunPrrj2L6yYKxf7WR7JWivSVVDryGroEx9ryjFc5LknixBduj6by4VSUsTwFL8",
  "key7": "3pQ4qQ94fr24xk4FuxygWsmKyHxTBCBPVeN6D6rLc7DPkzYbwYxCSJX9kHqw2c7Df75sRrrfmZZLzf42G5bXv1Nv",
  "key8": "2bpFaNJaFtpJcjoCpwos8P7nj4mrWJLSLcKBwrMGGVceu25me36cCLwhdiAoxigRBHEioaQ6PCcfHXPSSvTPLocY",
  "key9": "5yErR8JoPopDdqDMnJCdo5j2u6uDmdQEzH3cxS6PDGxVb4LnL9i9HJjXgBL7gnLTJbQcxo26MQWQA1HqZb7RUxAy",
  "key10": "4BAUx3yiatfnS8JmzHXLxcyUnatqwQ47Mf5kXXG5JdAGomoc67pcqKfip7hXn2LF8JWCCbvaPS5rxmGM3wcJ9dM8",
  "key11": "5LFofcMshVsWPgUtKZLwneveMJQW7nA7P8oKU8Gx4BS899hZV4ieu6KCwLcXkZTMYGmQLAxMSum7RdCDAr1EuezT",
  "key12": "5AWbQBuKqhPbvztNurBsBcN6MmT7wdogUrKb7GrwB5QB5smNxhymNprAjbZxAgSCj8NyFd87zE4Xh7mxJnKyKygi",
  "key13": "4MCpEDNtwM7HiyTwnzbn5vuUqHA87NJqXNb5uLH7vCGznSNqi7UFteDC2B58y48k1bBfhyzHoqHQmMLjVEovtspL",
  "key14": "62JsMXcJUK12xqMFvUJTGt45ovCNTLjTEtVXfxzFxek2dnyzqJMvopzmtyRcNjR3XR6bzGaepot88RniKA8VAuTQ",
  "key15": "2XZSpGe4dQr8yFhKwHHxxaU8zzJfDck2aeWQCYYoaHZSWMWCB8DHmvkHAHhdTjkTMPm4rRw6mYZmfB6cjCD5dPeu",
  "key16": "3Jwhq3zNULfXc1R6cGBAMQCb7b9GM5pRa94v9RvndCLnj2odWbZXYy48LwMCF1iqYW8jLrfFwEywsDmCqCAuVtBJ",
  "key17": "56Vq8NTBx2rugDmCrUBQ67wR5J1P1oYzJaJ2fRAkF5CJmp2Zcbi7psSvsY37NEX5SU2Z6njpiMfGtQMmjESdyRtD",
  "key18": "vdqmCEkFuDoEFvUjYuthNCW8dR7YceZQgmpDnX24eJrsYtxYvRgPPXDVFyoYfVmfgLEC8DXDYV8A4njv63yNVyd",
  "key19": "5zHhZxex8D4qJXbwJBEiymYXuLoBsuFfGw9wmtGM6rwwJYFV9tg7u2qdtBNzoAoU8WqphfuG6yRcXViCTm2ieMEG",
  "key20": "2zgJXARjMvYjE9oi2pPd6y3wYwguafj5wLBtodfQTKiopPJQUZcsbE6zZzK3UPP3swYswc12FC8VR9MRJJpL6nx8",
  "key21": "3YpkQasoSx5KEeWoW7NSTofUSrktj7rkUN9tNiqSLJCSThTegokkLMUBpVbSGY6cwTABSp2K1GE6imBq4edQJB8P",
  "key22": "4iHUKAzGniSnVyb3YuLuc3k1XUDEHRW8kqQLg4V6xpq9u75u6kT2iBHn8Ypd11n7s7ugi1aXNKwDWpTfCkXDm9p8",
  "key23": "4U8vdyYRfHT5PxqCVCat5MfZUhTdSHW5y7CsBXAPaBk9Pxt6XpTSvBbN5VHWFY9REb1p419WJHn6qYuA4gxSGD6q",
  "key24": "2KfH3DMNQbFXPkL1KbLaEkXd2gkPEShtGWzbnH85MLwpwvpY8YbxzjpjBr2dUNQw92MKiH2BRp17FpDoeJZ7VxnR",
  "key25": "4vt1CKYrk3Ui8MdGcuAFWCaDRng6DpRhe5Qw31Xv53TUQaLX4h8jD54MQwDo9akBK6joZqxcMALFKPngmKcU9CZP",
  "key26": "53tjA2aSZbb36v8Be1xZtiN2ZsB7c51mBBpE1tgpwEn6gRr15XbF2vSJCtdJYo1CiZn96xRaTp4nBjamYskAW4Je",
  "key27": "pszVsqpJdzM8BLkKb48ZLhLk1SiV2ggLULpgkrECwLSmJSX77vKUT41ga1DKqGTVM6n4mRK4vEQR6qFiyD3W1vP",
  "key28": "2i1yhUM96z61EuiH6VF9K3fFRnyNnJLrPm4BCHKdv8hvq2Rh1vSwLcFbERHBSbkqB3Psh34BQNPxPuoHaJMU5Lzc",
  "key29": "4dwaY7ebtCbyFVppSvBXF1VqaBk3TLixKZtuA8LDwKrxpew4GCqNDn7ZjSfzTCknwJTL2iLdsJhY8KsH6PnVsrPn",
  "key30": "fLyMWSx7iRo3TLTRdDYDkZWNmKQcrL9XfgWqH8dnkEGLw91iyfuMc2pLRYXrG9jihr9HNLkPMMnHrC5R8aYTK54",
  "key31": "3gzW6vwzYYqUe2rfWo8PntNDbzrM5tRoKfRAZfb8snt2XqhjxgAVC2Mx3twADfFZy1vY36DugQNVMKp6nouQGQce",
  "key32": "4eeHgYYroTAXkL8PGf7efoxSaX9Sw4Yir75JULHkXeGbxmAohnKq1icKvETPXXrDfWNBoYu3M5MFKSAqgEX2sXQB",
  "key33": "2x3QevQvX2Qo4RWoiiq3dZoYfY542An2FFDoGuJF55yTd94fsy6tD1udwHLn3JM69bwJYKDZk7VNUjAGatpuUnur",
  "key34": "JoyFourR5AqxqchGoXENvzGVWDQhFktMyt7qfyqeV2TpLc4uRc2BK5PQuhyuLDhuivYxanVm4tsmvos32RgAVpy",
  "key35": "4b3rPcFgY5ivWdXzwWLB5m1YDpJtsdHcFneZUYfEYd9sgcY8EKoWEgvykwHg4jvrxoDicoWjqiFuBajbXRCy3k6S",
  "key36": "5GhvRzJhW13J4E5zYnXi9GgThKChdVR6nWL2JoUtF7MUGP1Le5osTUJcifBcjYmGvzW6VRDWhhJ4cBpZa1fNZCTe",
  "key37": "21Yo61ejKYQDBw5Pvbc53LgLR8byWGRipfpC7NLV21LX4jgW1TZd4wAPZGANJ3WVyKYR8dvrV9pEEwAd8BGBG1gc",
  "key38": "45KQZdHku5L5RfBabiKQgPHoAbWqj8Q7MV7tF1Y8Z5ECE6rG7TS6VKwkEHDzWjaDQ3nZeGuU15rfLPFFuFR8DsZn",
  "key39": "5z8kZf5eSUJzvEGb5k6ScYTVi2Cqr1mWpaoymzWknQBcr5G1GeQrrF5Sea5oVQScomCUrdzZBrBBt9JJfbSq6GHn",
  "key40": "28Zt146mL8vcVUz98GUv3e15yAxgfTPJoKEmPTgDdGSyV6ES1tUwEU8TgY4bJNRhu8tJ1rZhDcKMbXAB9cvY5hcH"
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
