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
    "4xAnNA6PxTiP2aw4E1CECgcQ2nrbdPwCydwaBTP9XKKHPDdGGGWFpihepdaS5DocvtuFDu75F73dRGukR2ktrksc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23XLNsB2cS5bjopacNVHgTjAW8wr2AyN5RJmVTVq3XLncEmTpQv4bbyCw2CheD8abHZnhvcMV4VvhCMR2EhGn33q",
  "key1": "56MPQH8p9YiXcr4QbS3XRTeAbcph9gbvrK6mLv7Sb56sziKyyBmitpiWwXBknH7KCNM95QJe5FCSCokRZbmA5XZZ",
  "key2": "5X3Y65M3oY17XB3gWSwY49RUm2MQ8Gt7Gm2UHknmLyNE7F1agM5ucRGZqkMKRBWmq2ZxvkuzBB8fYqYvtDhH9pCM",
  "key3": "2XEjkFAUScx5ZuQs59pPpt8x4ffwdTCbmc3bFZ1CyAs71Hf6MKBsNHXA8sPgem1UcVVrNj6MQj64LB2JFWHa1Whe",
  "key4": "4xLTaCnJ6Tv4JgB8818KdAhT62j3rhashkk2sBYhBKs8eYSyVga7JGwFfBudhKNQYrS4vPGx5q4RYkc43C1gYqhR",
  "key5": "5XSgMJ4eeVCJ7TbtVbzhFjKKTCkzPMGgb5FE2whvc1MjH9aeKMMocu1k9HYYebLN3zFu1UfHoBc5pwr9EJ9NpQmZ",
  "key6": "38jrmqFqx8Wjgg3wmzSKZrh1gmwoyE4BW1rdWawzHUA7NgdWKh6oGXL7U4yHKkSZtJTruPUSKrDpYEe35k1S6LBU",
  "key7": "35Mm9Vyq2m8wM3dGjAZ77Jgc3zRQELiCiAFXQQ8VoZXziPGSWx9Ghv5mpZPbqfRM6ZnYFpM7dUxKerYAQYoGgF2S",
  "key8": "5GEbSzfibTUzk41oFHbXCcGaaj7fwmWb8bHato9pCh7ZzzVP9DA1uRkrixFKgzeurpnbFasbS1s5wee6nAAXvkBk",
  "key9": "t2MQRngd4FaaEdi9DyTBfky3hTg5tKVYXfJo7gcBGyfS5zbho27VJSxiWLvLKMTZA7aqQ7HEpXR3zhevNoTPodz",
  "key10": "Lok4ijCCh3fRBztj2kazDXoPacgpnrGkf8GTVCsn1SQjxoTUgdjt5ijeRm7YMdwCaDmGJRko9fKoKJ88V1fiqNX",
  "key11": "2ouUyF8MziiVGNbp4MueBjw7CmuZvMbRdJkSYXbeMcRVmfNiiba8CtT7zEsXRbaSGT5dCKnVwm5ZgBGrDsfuyLzA",
  "key12": "24uLQAnDShUcDGZ8Aa9UipPY41sWqwenri9WfUGEXnc4xVJWbAgQHBSLMiXLne41v7t67MxkaKKdiKWkkj8U7Teo",
  "key13": "4hHLq2LAkgU8VPkdbNwE3wuhXuhpWYuCD7eqxFkL4THGXstXF9xW5X4T4DDo1q6ymBB17KyJVDGCpLK4ZJeVeTwB",
  "key14": "2HCC6hqe8d8BgZigWDdeUZXF1houV7RzBhL1m2541ZzLpoUUPQ4fQs3i3sEKmpJ5DpA594SpAQbA9NFZxSuprk4m",
  "key15": "3MoDJXT5GTWAzQQ6cwJMZFYQuJwP97JNoiYLrjGBmc1FKZD6iSTnP8sJCsuFmCXp8w2syKgcM7qiKJH3y6z84iXy",
  "key16": "4dDTyuiDs2K2gQCyXCtvstwdWNeTMKcQb8UtxqvKukTueuLEvsyVjGaGxk8SgfJNZmv134EfY3xdTqh4FhQxV2vn",
  "key17": "srL6qcYEKMV9cVXo4PdKn1qecgb8ViYJ3xyCJSx4shUhq8j3q493PW2mHs2iaxwM28hZUASXKaS8aSMWvHEVFwd",
  "key18": "3waQViJc66zpHToRYD6sQjxyz8WFxKyKD5waxLoNFQjid6VPfUtDdMidYc1W4931ruZG4RQQgQ3yzra8zvxeNpsZ",
  "key19": "3RD4FsmDmb6xYBCL1kFA13R3zeoj27RXGrZjXeziUjqFTUa1Bbkg3ZkYiwLGoR9vXDa8CK5ubp7oMHRsaBiJDyPb",
  "key20": "63kN8Yx3fzc1C5M26hQtZ7X9QxF5ZSFBw6tK4jxavpdFiX6TTuoRRtbLsG1nfofegAA5WrQtFHskKwDfkyoEPzzd",
  "key21": "3GFua4CjXUGkcBgzZGvsv4wRYF5zhWd9YtgBKkKetXAfNBf8poKbyFqJTyfsX5oqcacPGkyJa3ERmdTgdLhUsmxW",
  "key22": "zHnEDYm5jMo5AKmjeaTYBP4gtxjRx8q7aUZvbRUX2JH3rLZ5j27TXpQz7V5mWNRCEa3f1pLxH38RRKEXwd1Ldi2",
  "key23": "4CSxSg9RSwqc6p9vnM678oSUDGku25wjuvU7vqi4oMPGv6zRTPAcfYwvMyH5QqUNZHvUbtzxDBoBsJB1pdk5oHD2",
  "key24": "DijCZzSN8WSgvdCDxVfyZZzGMjd6trd7u1z9zSjdN2wxtrpQ8JFtXLyKMJSYYi3yuyqsn99zBVaTC1WADuTm7MY",
  "key25": "3z113dmsHJHejSqyBZsg7x3V8hBjkYobpXd3bUXh8XZLbRCXUtHNexrNd11FZ19C9vVBNSBTQnz4Xapj9CNJR8u2",
  "key26": "3rDRJS5YVYuYmXDpF3eANLz8zCQCExYMsX3BK4YKHHCJByXGyi6CV2pmUEgLTnGZ7wBPUE7rqGhMeddbtJZYJaUH",
  "key27": "25RVwbajrdW7gSQeWucKEJb6maqxiwDikMTdaywKDX38k4r3NExAbFeTHcGU17JZh2xSi1BvPMeFNwrS9Kn6PCH5",
  "key28": "4MX9bUPYQLw2XvxVuGKScSixCs4TiCULkxcMoaaz32BdmZxCpgvXt4zYeWdMikQra2rqGNZwRnNs4imyCfT2ANuQ",
  "key29": "5Bg1KnxY7kmAxz64fmdPPv8nRBWxBvzVAn5wQmKYEMkyWtK7bALHQUGmDpiCsjAwR6APiNUBZbUDa5WqEz5LCzrN",
  "key30": "4V1bCszUqBzgVXfuT5qTsCC1mqAy3DRGvvLKBwQWD5Cc6224UbYsk2TexH6wPsjp7i86Bma3RnEyjDbVAfLz7D65",
  "key31": "2nDRfBGghTwSqfDFfcBnrLWuxrSMW3ktFjj4YZ1PhDcAso2f9ZD4yEMGkDmA5YHLRLaot7T7ppyLpz84VxZkjazj",
  "key32": "2kHLJKtBs8UUnbBrZYshdEPZJ11ev7dRPrGcJbThTb2nDtDYXZa2AgxRzcZYfyVKSVuPjMx7aM2d3YwvxuFjidwp",
  "key33": "4jBrXtt2eaSATdipvEMZF1B5yeBmnbqsokoJgRZUon53uNXGbBuQ19NcHadmG36hoycC1PZec1zUXdzfohQhdSt",
  "key34": "4By94wfciZFYxFx1TEK4XnPBYshmUHvBwUPHzJuf8gEwDZDshYgCAD91mCL8u3upaMtB2HQRCKfXTPUuxNcArEew",
  "key35": "2Urhv8dJN3k4NPkev4q65PwaP5DheobQc3Fs57SvPsnAb8oZR3Lm2m5resb5XtsQUj8in1NE1nhxaKKxSEAhQfDd",
  "key36": "cxh2cp6zf94KJKKMrL21aXu9nhGUs3Xp84FkKEYRjejGmwqs4mF3Kbj35ZWSzX977P7JS2ouQ8pbGdCGDQQjHVq",
  "key37": "5UuQckZ87Xy6KseA8qMzixSqFniCWRmvNPJs5uqyfbriGQA2EcrSYo4z7MgmRdaCWGgibyNoUMpaVJ7QXSdbHv3j",
  "key38": "JFWHQSc2JDXRWxPMi3DLzxafeKi6KJypMRZgHZZ3GWPgwaHNt9PwuMhsCWZUEuqS8y8kHnZqJM1M181raJmH9pY",
  "key39": "4CmyE1LFtU3Gs4MV8Kzq8UvRD5PMNjCt4MfgVQ4EHxL23T9nKFuKTQCLEXCh6gP9RjQ8E2utkPExyA3asnixmGUk",
  "key40": "2kwNWKyHNndKkjS41coVJFc5ZYZnhQmr1fEAvpd8m1vz3h86MjzX8V42sFtT4K3YaNPUdBEGRZsUa4bfS15cuSib",
  "key41": "2QKAGxDgehQBjRf5puJMnu29SgHMCMNzPJ6ZYZD9wMgiFrCzwD7gSAN15Q1yvi4HT1geGrsEMP3HcK8773JNkx8R",
  "key42": "2VAr5sbFbEP3RK8Gs5oFyqS7yAoxhWU3TuRjGB9oS65FNQv4uGHmoGGCL9bnrGTAws3uRfdQD4qDnkFcoZzNQzhi",
  "key43": "6a4u8tqEwz73Nie1BhK2oDQ1FVBgjZUXyTiMk5G8hgFyV21tLzseDpDNtyt1x6JA36pB6gWrnhApKQm7aTcCsSA"
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
