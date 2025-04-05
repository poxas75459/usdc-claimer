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
    "4bZxa3HgRnyGvXAQbj9VPgYqqQo1EuNVR4sfTBMv5Nmgi4SKx35ZbmrBphVLTHrE1DdvAtXy99pGHNRkcHgEAUK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U1JzuQJQh5QW6GBRzmMj6VaV9N2SEk3o4crDxCWVVAeuCv5HRj7EMFXfX4XFhDWJGRWPGqdKvfwUWhJ6oHyFmFL",
  "key1": "2ZqTGWwXEF728RHqzLrtGtU8tPVMpot51AFba3pLqJSeYCB5Rum6QqfS4neNBUWmuSnkBWUH2XyAFBj6tAskHUX1",
  "key2": "rsCPLQVesydR46cMwZk8zA7NqN7wVbyrn9MLq9skiVJE8cVqjnwiJKyHQVZRSX3usNGhVbDFiW9Qe8M1K1SqZaA",
  "key3": "5kE25fYMdaxESKGmbvx7eUuusbm5enHZdc7qgkFk8agetMZD3UPR11ZfzXrLEV9BcvxtNNFsscWiq3BnPDyLngsW",
  "key4": "4bobXSLseUxUw28Jye7JGgmNp9HKR6VGGMFeSQNiqgwHGLpgvwLwtTHZ9r8ayMEyxkUCHCD3heMG43a4QnqDEeS9",
  "key5": "5VSDcnFYx5WXHueA2wnzh4PBqDM39eB7wNox1de1uE173oZUgYZSRmdDVFUSB9yGh5Zy4X2HPv2dgDugP2K9oWnm",
  "key6": "2rySG2y453nHvi3KFXksbuzwu3mhH2irydhtjC9YxaDB8pKQTQo2CtFfcMYDieCTtbPahx17YVp5sXws4r8U9hCH",
  "key7": "FeU8yunTPXo9skbwWZmaT2AEQeEQ1FXZh3YeAsv61nG9GfbTGhSvRVGawHW9Ng9b9hQPoammERUPyMbBtmdXZXT",
  "key8": "2QiXPdrkxVvTwm9VWkEud6swxtF86tVGv3vQrQzzZxG8mp7nXaz7gQGEn9UG5Xc4gGmzHaeaQas8rMCsDggaL4dW",
  "key9": "4YfcQQmqZ3DCx7hUxHgGxg5x3GYYK4fRfi2vvtHQH4CiUaKy9yzcancCEsa1mz9JDt2hfkjNKa8VVmxTKCpTTfoo",
  "key10": "41UJc6dg9KuMTZ1y7hvAjxomEqT7C3KjnsoqD1gCwxT7J1XUhsfxqSefJj7MD5vfT2Nyv91Hm78ZpjksNbFzCkJN",
  "key11": "4rammNizjmhQkg66i5xHCnELfz4jqDwRhzZvTFzW4srsYYNq35uQKQZHmtYsaXSCPs8SJKegJHgcime1UvrREtdC",
  "key12": "5YKoMXttk9c2Q2nGhHkup9735i51xCEqnvp8nRjCKBPPZXoYKP3Nk3TdnP4Vrwt9wXaPz7gSNKnoajY42byG3YG8",
  "key13": "2VGRSex5RheVn175jSrgpXRxbJqvxWXwCjfLPBc2Xd3y57MhKms8VCYD1Qs8MPQ5G6YqwPrC4pEyoMHbE5ZQ7Zrk",
  "key14": "3onRHFRzgMTJfVfFphMytR7q2Sox1ZgznimohDCAFQHhQKEWbj3UPtgbB3X5eyCDFTPBqWtz8KmsdYeuSzsAGcQB",
  "key15": "rNychMzod4ULPBCmtXJGLQxu5aKfxSUW5WtB5qxUmPtoFTtfLPLw61vnSmt6STN1wPmE89YfTu1MYbkZU1mxriz",
  "key16": "5NdoiDdanqcfp2qtS8mERnSYDT9oc8P2eiRyyEQY7Y1xpt6RqyjavGjT7qLAbC4btuz2vAL71fkRwyKnyV2M3swb",
  "key17": "FB3BdPYat83BpfXerJ6QztfGDgjSJKqgGrCjmzknafTmzQKbztgBm6LMEsWodp8cEBuWaT7DAHM7Xk6L7i8vZiv",
  "key18": "2b4G1sjEoX4vKVuFmyu1o8x4my7APo5DipftqY2KHsywBSdVA4Mzj6dACeJQzaUWPwxH8uc5uHsXWR92NV3Wn2oV",
  "key19": "TwHx2nfFQdAawDfDeLKCGPQ7nkTcGk6LCfToktKkYzLDgy77dtRLXh21jwThp2hmEgLnPkCEshKQtURWWDqckxB",
  "key20": "2mjkE7DERevGfqYvwyieAPPyKQ9ZSVjCfappEDtzT3vYMVbT8QUH4Xpeg1sAqkwwBXtDzrDDWdNhY8N2SJ2nDsRs",
  "key21": "4sG76jG9QZR5e2ztoDbn6cNRT996FeChHS9ZGm8GNBfKpk399t6TVtRjmUUrsTJJUBy52FMSMn4a47tEnyp8N6bE",
  "key22": "gmjYCwnK1GpwFYoyQsnHFkfxT7iyzpkqwGYDpLatVghieJfYwcpuMhct2pixP62bRUyG6HKZ1iPbjHRTukCoesd",
  "key23": "VdBrhNmBxMAV8kSYAgcVUUQCdg9Y1xrNsFz3jUX2N8iQWbd1JqCm9oRuTFhAsxjgzNwVVhzwg8QLLYa1jAAbJjK",
  "key24": "3GNgzLJZjz57jQ75QZACvyfcdErc9M9AgX7zVnEM12mMRxcuKjHpnYKSCXzdFx638TScmptKMdAjpdfzMmtHKad1",
  "key25": "5XN4APbPUof8otsUCkq6RmP7nxxJ5NpbvvKk9m766oEJSP7YTieg2tEDcA7c3qQQSQAPcr8Gwsfm2z3WCES5iy5t",
  "key26": "icVBjXamnKZHJBLfFqQinDazu8Ka6wXPmgEB1DLvrza7Y4tGkWiYUaCDcaBSfvR7VxW6AVc5BpsKUzfRPAhCGEz",
  "key27": "5W9TJscsMpUTZ5UHq2eoAADNa21bUihpS6mhgEGW6PFoTbrF8ycV51Xb63b1CQWUn7Hnanzaz5b3TKDdtMzzryg3",
  "key28": "5oHfJYEgY5uRBuVNGaBoQ1CeJHBsoBJe6DnE11u6V267KRbG3r5NoaS9VprqHEpgmDtwJRF8XCm31VTS8rHufsCL",
  "key29": "2dbCsVp7e5w6evLTaLYG7DBpzbKYRPYRtaSWS65NypnkHQrmcYWtxzKqqYhE8yHb3sKjnnzWBGLHsHFM6A1qHUVu",
  "key30": "4USuBFheDaKoWkPo6DDyiAarKtHRbQUEV15LFyvhg6PryeRdMEPVoQ2HpwmdynzgmJ5oihK4NU5jWZriYe81GPGp",
  "key31": "34eCfN32Zs6KhmBb3XP8LEvX7fRUEy6hW3jcBAZt4xFWrPQcVPJuyJqMdRCQ2xT6LU2AU7aG1EmgjwZT9eBoKzga",
  "key32": "3TZMncgxfgeKofbaEJ7gckmrQWHFhPLBdEWvbUKswKDT14EvVuo1uB3goJDMAo3pA9YT4hy4n4FD9Ex9KsLwtAYW"
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
