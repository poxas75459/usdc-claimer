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
    "2uwtXbmrJUSvW3ENDnRpJSYaHpVhwf8qRXGbq7NwUUh9cf2KuweV7qrbkC1sCB3Nx1txGeLPtumCeUMcSbpN1wWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GmQbviB3RXF68HdKF9zvfPKdajcmZXsSPTpcBgACKaC9NZXKkXnxNgPz8Ay8wgjbVRAFfAGjFtEc5eyXkwHPU4L",
  "key1": "4eep9FMuy9nSvbqcWrPv1rMwEaXwpkvETPiWJbt7tC2Nm8jqUGAbLCPkR1SusYs7yVRttPByYdKUkYamxpJqABoQ",
  "key2": "9j52k8BmkyJX57rbG7zijXRzqjdy5HrQmmgmcJHhESTA9cSxRWjkAZrY2YmnZ6fK81SRXtrM2YKyvXqNsTRxsZV",
  "key3": "5JDH8DGKhSiAMDhLsJL3DqnJPRYwuqhujzcoBWkZUZ1aLaQz3MyrvJvWUQRmy57pZ62tXY4sMyi12xziVj6JyCJ7",
  "key4": "HteDXJ9ZwBpxaZ5KzJQbY7pjPHV1wd44hXiNWXUf8BgrqQrgngEEpTMRuxbM47mxE8ambEd4nXUwzGLomzEA7D3",
  "key5": "2oyuVca9LrPvSML4pRawhrD3mY2RvSQCEYr2rnMa1PLVx3ZfujuzNnW231pSyTHPfLwJaATpaXepJH9bW2bNpJHk",
  "key6": "QHZwgJYAarS1qSdtX2zDPi1We34AaoFb7Zbh8Dh5hYJCiR8oi8kKyPVLjVc8t9KpfrVWLZyUHW2wdaNoi9izBBG",
  "key7": "2nSDZUEZiM4wzH46M4LHWDbiMgtVJ1wL1ECsMA8fukKvaSZ3LXD1pDA6p25ZtcRAwdPJsj4UVdorkDSDxLrGDEBi",
  "key8": "3ZXcG1jKTxGUKJSNiJbwLPB9ZoNEL1YQT8PfcDwkZeaa9druYtFfPbpYPAcuX4ZFyeLAvSGbJgnwhNmpttJXmVEU",
  "key9": "E8bRtA2AUEi5WrXDWuC2m6XJMbQo3tDq7SyArn9AwS2Skio4zTzihfSdxZm5RXNnqfpxMDDQP1yYzst3exgEiS3",
  "key10": "h5yV9MtcQNvUXRMp7FvqvdMtH5fTvTUoQqZz3RGWY7kW9wTKYRw71Z92kBXegew7mRmCREF93rDMEXPauXbitFr",
  "key11": "4FyHJ5hx64fKKBazKyAn4udUDSCSiKJnMrY78QeBtRBW9pvtmGmak8hLwVfXaT3pdibAyWBgyK6qVUEYDcj4TWni",
  "key12": "4W1zk7weWDPXsRagM75rgNmktkomVTFTqVanrn499awBDv2drVp7nWYwZ19drpUsSmqtf5YzH4bGhyEKFKfS4aY3",
  "key13": "34SyGcEsMacdPuKqJYUbFYCVo9cnjB1EQJSpaK8AuaKR7x6jrAyCELVr2vpNaUj2ref6JzUDTD92dhZEnBnGnZcm",
  "key14": "4VB9gFWxyAzTQucE5FRRXET1mHdqaHdQiQytgVQDy2Qyvkrok53BqeLf4vhZeizfyyECvoCzfZfrchTEXBPzFpnx",
  "key15": "2GqigYmNAmVfrtbGbJKUGLKtmCBUpZea7D3CodXjgVjVZV4wDnaKqorDWHCNTvMBVf5tjbFibhFumSVDezwtNPc3",
  "key16": "2fURDuUGkYnHcTXgCjwC8R81gNKEXAwAvRRuMsEs1MeJGEs8whCdw4zjCFNU7DqN8DwvhDtf4ibk5RJMkG6VT38P",
  "key17": "2BjQ4gzExVPQqx6MjRbuZBk8A2hxnsLSKbX83NwjCxKBnUdbT9qyHCoN9QoykukUKApC7EthGcAkHtaNjBFEyEhe",
  "key18": "3pGfa4uZpJFQnb9m6NEjjfBonzKpLYBH1Ud6HJu7XDWcTjXaVr8bkKvunE7372WLGFx9JfYfA6EZHYHc8Eigc3uy",
  "key19": "5SYj8adKeADCLaEicdGrk8ADWCajN33ub5xch9ULxEddd88waVE9szAdQSBQh44XEFBxE3j9a6EJC9eFB6V9j28J",
  "key20": "28e6AovAY1jXWRYZ8EiMaixWCJ7PURvU2GTiU8DZx7CFCpQ63NrhNCYRxYoVWoCAz45Y9GPfyvFfS87BVXXNUYGx",
  "key21": "4irm6Ws5tMoAjPU1XSVPwrcavq89uCKpYqPkoFN3rQpJn58YS2HGmP4YAvv6G9jwAJm21Z7HmobqvzF8FCi17R6a",
  "key22": "245JrCnnTFE3s8bQmofXcz4h8S1gtHg1RCVxM81NyLft9NXMr7sRWwVsrZakda84vQZvVzsPjKh5JANSy7UK3yrT",
  "key23": "3WMEnV1BTNhB6FCzfdtoVcMr5GhV7ZiZ7BWMm6dCYHFheyhmQpP2HgM52wwh2JQb4eEReogyafipHqwzerzJ8ufp",
  "key24": "611eENzy186fdDdLh4h5nWYS7r5cExnua6vKZgtqP2ZwTyj84hVAcDrouDd7jCAUWTrHYs7q6KVE8cWfXwSvyWUj",
  "key25": "23iRmBBs5EkFsGBJzVgG6WLXSU2NmuhPAn8w15sm4Kjthc5A6AUa4gV4hrj8927RB6T2ALEHWpaLth9epwcRnHEd",
  "key26": "93q7xsziSGVD1GoVJav4t4ByW2iNfHCYB8yEqb2LadbJYuPsiiXvv9pXouNSSVTXSssRCdoqFe3h4LKHH2DGH1P"
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
