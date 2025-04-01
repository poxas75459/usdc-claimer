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
    "4CxJe4eoTgzki9LLri74Eq2SEciMTew2oqyc1QG9Dyff7v7Rzpw2bqvcQaP2Ptw6rmNtaLV24bsGmLjsFZZ1cBYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUCtCCq6JKvc9a3qTCh31VbMWc53M2miAbDhYaanVPfapnzw5RG5sSPMVJt5UcUaqksXiWThcSndB9Rj2CnK8Y3",
  "key1": "255ER17fySgSUMwjeeiwPhYarcQ5JC7DMK5nu2XFSxmdKWm1nzwgufAoCcLUA6sHyv3j35diMKdHDMsiCbD3HovR",
  "key2": "4TCSN3V6ZyhEgvNhNW2gMb83vmordyQiC9ypRLXsbbyfJqZp7U9CLAuv6XVQNPLYecH5gbvSk48UpRF5L44QoLqQ",
  "key3": "5ZDaaG7QKwHAY6FNAFwVz4zNbF1dJYwPCP4DXF4v6cbqWRmYQDisSSRefMmSweHYgoQUhWq4w4HcwCUoyRGBiYa",
  "key4": "3raR6igoRzgfmFun77rxvCPahtBrEK7i9hNSYGqPUgfokecEWdEibWUWmnFBz4mEHojzX31xCoXdRyotpmaJ3ACg",
  "key5": "2mj9A8z6Ts3dbEBSm7yFfFX8xBg7pWzF85te7CQh5prME6KjvTPCQErpzMGkWKbL3nEBNrn3RizZxU3WWELqNQXo",
  "key6": "44KxhNeWE7AiqjfQbnemZfHyKg8zV27r8qZBvkuod9DU2yfRQ9UmcRDhtXL73PDVy6eWYx6ALgePcJt3tXRqMCRg",
  "key7": "4kpVNESbq5Qdk7ajyvRawH5xvZ2YdDXwacgQ7gxCLKgWAUK78Y5FDhFN8CFqfEUK8GcQ8sYtE6zpBfGTSywBTtMP",
  "key8": "5vf3gHSvyMq8FpHwSDPPksT9NLSc8AU2pWeQtU5kSm2eF5xjwuRhVVmf6YiSA4uPizqtb3rbxBHbhrkoNXjzFU6h",
  "key9": "3FpaGPnMia3oDyhG4EQBAz7SmkcgCBvnXRDsmwn9kzRgTB4Jjkh6MAhoCdNqaoXwffzMnQPSk3rZ8J6cBAeagBRb",
  "key10": "5jp8YodJFDqCUeQJXSt3pQjfAUDdvZXEStSuSieTMhRiiHJya2b9qQCNQu4Y4BmQ8GqHgdXwKTkPR8R74QYpmePz",
  "key11": "4KnpvUN5h1oD9622r42wNZr1RPHHnVr3AC6wTGbmncAT8sGc3JVR91VXTU3ZGz6mPxVfjxWkWPVz5DWsFZ3mF3A1",
  "key12": "hyhSRRSR87sKXr1X1yReX7BLTaoLe3mmgWFy3vGwAgpFCqgyPh9pKZogvaUJbaaEmSi1X18r2qFfxUXFvGWz7S2",
  "key13": "2yj7FGjFeMQzVAW9WR3vJkege5FpRmyvjfQGrnpv1sryfJE9Sco34tKLoKsQrtup5nonFH7QCPAKaWvtsgjEDoQw",
  "key14": "5magDNVahV3ecc7dhPBx26e7RvmzjEMsAZwg3cN87X3oXDQjoUhhXCi3sJZePh8bsUoX3J6R7n11Re3pV16NtgVR",
  "key15": "2GXteUCAPaYQ9q13xYgV2RMEtkLzkoK7CdDKSaqfNF5kcC91MNXQrMHpr5qyvPqzGkhSE21RWiv9MvRDytifjD7G",
  "key16": "5o2rJ2HMmBFv5A2WWWW1k5j8cLBreZ9tNVt8VfdfeGMT6r33tASJmYGPWium4SbUFAFJApiLzL3ognR2k7tMadXa",
  "key17": "4XL2DrT5JvqMd7qnhcTS46R3sY55DdBdrEMwKxJvFsMuhdMrxpmYRGmooF3LdEKGUu49e4YdFLwGJZ1A48xMRq3C",
  "key18": "y4NdERs3DMAbud1Y3438ppPoKmqZex5Hr8dp1LpEAXoaHhCkGhsY9KNVZqVkBhmiG3qr3wFeKzvL9b4FSjzNa2u",
  "key19": "pohPpuv4pQXb3wocxrKtx6mAHhBqs9VScg7PAr4mRooW1Yq1tA9qG36RS2eWdka6jDJncG5sbRVFGyEKiWdgj5s",
  "key20": "3uSzmToSaAFFFYWWTYuo4wdprcKthhSSHmDxxKtkEcDfUAwoQfe85xNwssVsRH8vPjUa1BSs66LysdSgqFrgLqkG",
  "key21": "53cziAAqX3Kbcj67tJqwnnALpoEN94oHPze4EnbWN7Wzi1FN58fhq1XeiDWFQGdY7uXmeBQkU16M5S2iwEMELoDd",
  "key22": "AuoLaFdYSSJs8L9L3dRKL4QvFhNqp98ZSu4LcWArPYPZEwBvnwrqqmHV3hubn5W74X6xxRh6rwReFkezjRQteD5",
  "key23": "4eM7dBzPekR26umy7HQXxEfdSesBGi4q5merwy6YEcs4eoC9jEoQE2oedK8uK3Jhbz2HEZH9Xe27S5pzfo3sSNRv",
  "key24": "kYj9q6i5XYWa5hhELotNrrf23grhBqeFBc7XXUois6FEcj1A51vNgQJt3kyFDfg79PgANvhumuVPPCgccaDqqg2",
  "key25": "6RSQwv9KZCyarZPe5HV2FFEmuHKsLVo5ZsfjE5BSjR2oYfe6GfwYAWVXGyKQj8XSmVvBrQDtmHPE5B9QwLYwrgo",
  "key26": "5jF4hdYkouVkYpBEti7VVBovqeb6MWCcMEJFUxCj4pm8r1oYRDzxjW5rjEeCBQLKcnEGCwJbYnHSLNDAeoqyyV4E",
  "key27": "5yKEFaheNw6dxnYBv33Smr7nt3bkeTBCMei9LJHNjMKME4g5Y4C69QGcZahBDgmxPhJL2dyew12yjfH65UiH4NKf",
  "key28": "36Xf2tW2LKet99EXyLcScu2iXYtLgeVsNdMDBtfs34EVtavU9RYFzvP8xZJuLMLxebpbudmkhYLDMmXCyRjpVeY9",
  "key29": "aenBssdn5cas8TUGMgRB9851tTNkGo8oqVWFep2bDUSiAq13mXsKXBiahQymJppNf5kvXdcTzbBhAFbce6cF6PV",
  "key30": "52nf5yn6Zs5kypyeUPxL2V9Ujrej3WtLwJzmoxXZcq33QinzJHdkesDi1sQrqDQ7bfwcxuCZSMsQwRkCFHr7Zi5e",
  "key31": "3RdJrJ49ekQXHqktb1YHemVJcqncgM6XdKT2yqjxaRjJxoYJ3iuMhvNeLxCqjQj9712KuaPmTtxM1HsK464fgYhi",
  "key32": "5RDRtt12k1W42WokMAeLYYf32uGzyFCCH8hRrQMQYmHV5H49zJEsEDehg81qDueNaT3izNBbtCk7yUBp7xpEK4tA",
  "key33": "54UBESom1FJ3vvFCVAY2FynniVJn1N5iKCpSjVaMUPJDA5cTRFCskvmncWRp8Q2nr45vfNJ81FL8gNwZ5arQjHwx",
  "key34": "3BXYpGPEKkWZxiDxMg4nWpoaYqHsx1sDvMWtGcdyWnwEgSCauJ7hrdD4fwQkdnmwqjMN7CEU92Bjw1MeXPrBNjVM",
  "key35": "3wmkHkXtiaknTePSStKFdtYn4YUZLV1YRHfhiemRNv3kSef19ofTwWdaRnr45GmtDmawJn7wTuwQGhZXsefio7Qs",
  "key36": "2McwfrL2Gn9aBCBMXsqq3hcTHm8ejM1esfAEVMLc5Y8ULR8XjcNcxfMHjwaWi4dVmpMVRAfkaDV8dF4e1E9FWWs9",
  "key37": "2qnKQaHzDrLzsr9Deb3MxrsaB6R9da1skkHFZsmBaNz3pa5buXg7hwq1HBdTa4NG65AjZHB1odK6ogeXwzhygYHh",
  "key38": "5zhdLKhz3z3hFGdvkgfUb2eqi2KAuUGWU1d3ksyoAEAzXEAcc3GBRfNKEdkEZcTybV6GnWMfucwB5VCPGB59zRNd",
  "key39": "2NsBbbcppZHc7fwgJWzsASuR5LBp714c7AryDCXshv9ezBhgVjdCixU9Na1TYof6ASHwfjn2Jy5kYRAv6DbWiWRZ",
  "key40": "3DXW1ifrXsEpnubefCfh1eHbzrKPWjAAW8Eu5MKHXexDoTfGDab1BcBpCnp5m1qp8xwBE1c47dZEhpdYCJXCG3nh",
  "key41": "5aAdUs5tTeAkUJZGmU8xfHY7WKinMJG1hmZYASUcUhRTKYojWNsFfxJ69HrcuJMjt19STkuPVnn4sz1c8jYQ7wAv",
  "key42": "4Jf3nNs62WgyMhoYJfMPtr19mjkgcHHs4XoPuovDuV1wa6DMhCCwsmZLL3e56nbc9GHJ5NLRTArzvhR7Vvt8zJJo"
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
