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
    "5n38J1Tjku8dVRVAhKemJ38T2ErovRFDuUhdRLFLNoHJmdmkUQD5JXkGW1cW6Q9eK1HVU9gcHDBpU8AWGteqioXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pWdswtsgMLs8UWBL65rfYtBjgCYg9Jf35Xm2Yg9XuMrZ59Ksf4DEe2oJQvBY1FDvX7nZvN9ZEWzQyYUPNsCDx5F",
  "key1": "4fzf7xiF96StFDoqyn3YtfyhKpm9fa1CGtFzRgEqYvYoMMJScDynPBsCUacy9npS5ApGUYvu1r12E4NkDiSf5BJb",
  "key2": "5mGJRW89TZDzMZjU1H9hxAnkQ5cwoTaVzjuXSNKx1DsFCpPiHWQp9VhL2Q6Komyvngv6mGYm3ecPA874pReZ9qd8",
  "key3": "vrNYhKYZVsSw2DjgUkWhdN4mVFRwGVY5tfnRQDC5TU4QAxDEhHczsdUXT2kFA36vEUowXGC21ys15U1dZ41MKTJ",
  "key4": "5bgpyoajtL9x8dLwZ1taW5JQUTgbrVNZFL9iN7nWCEvaraBri1t7Yr1g4qDnBqZUqQYsUFy4DiLVeYetXz2nCGdE",
  "key5": "4fqg1duaLAEwkyg9ELnT7VYNnJC8VYJimwVGZvFDQEu4U3UwuEwYbG4afU5dJ8e4i1y42YuZmu441HMak4hrJppC",
  "key6": "2yGfUp4Gcb7TuohVV5deXEQ8cEKm1XF6pMB2pvpJqHsb33UTpWToY513o3QQiTUFE5hyfBi91oQFyNH6eqWLySN7",
  "key7": "2ZmKpyncqTcvU7srLfqGX2U5XEKqntXagAnqe3oCycfTby3cVL1LB1XRkSGyvYLp5FiNToxNgrQ1mqSCE8rxiSAM",
  "key8": "2uRaZAUJB4GacPdLNSuWSUXW9bvHsdzbSDXygjLafLQGS9j1vFUw9pedbogaEpbqaQ7fdu2Y3bo7RZdj9AZtpxwH",
  "key9": "43foyBFbg58gygRgkhCEq4uBhg9UQAj4dXAUUe9Q6xemVE8xGWXDeHTnsgHGt49rkQAQoaQxJPKf1vgUP3igksEm",
  "key10": "2TjBEo45GUjVf4R9y9bis8wwmWuXVfAENPJn3HbKMJo8VHzFJozbRZpjzb9QWGW3XPcVQU4f4UDmCmc16n3gp4H2",
  "key11": "24MxpwoCQBbjwu6AEuJT8szSB7ogyKnZEZQsMP3psJU5ym6EeniQymXnBFgFXYGGrrg1Abg56zgzXHxJBXf91Xr4",
  "key12": "3otLz32oM4BzU86wTqLuXcKAzACpy9wEm5JFn7pPUHEQY5awyRjzrpKVVbVGJ64f5V5nUc4ewZ4BS29cy9aJnfNy",
  "key13": "3SRYJvGGeGVki7KvgEtcWNM1MjUievrwJKhYHjnZ3hye89jSZMLwunBnLXoDKG5GeYvSiZxdfrUSwWxT8NaRaRAe",
  "key14": "5TP3tYFJdKF2pHcnkeJQ6o1CwNpoaxAJRrFprdtNA5qcCz8Gio42yxfNcDc3wuPaBs18p5QxypTEB2jTaPcjaF92",
  "key15": "4nUgYRSTzm82suK6tdhPteVc2r6mWg9sgmSqSbMxD4H5vMiGatGh2UeRjwj7ScPTfaGuwfoNWtVw57pKGkUFbWDt",
  "key16": "2Dd5tcNtpG2wDtU2TyzN2qNZ2kGADcM2QKDEi1z8bsvZDDwHVmzcc8SfZybCwGWes3hogAtMRZ7c4a6Li8bWSE9L",
  "key17": "3u7RPmrA4taXwDKds2MQMyrSoSmLhpBQyUasyXsZZ7wfAeoWbMiUmRx7WJWEaob8tQ2H5pPW1p5tgZCJresw4hyj",
  "key18": "4rvLUTY2W6Z7YtLivzKMF5agXyK5xYCjSPgpmV7E2dH8jaQbsRybo5EbqJTzot73VGH8Jm4Z3Bji8wdSPuY7VrLk",
  "key19": "H7MYDdh1Pdm7CLPmT8Qpn1Q33W2D1qCrbVs5QWxwK3Nvr5Apc4zSq8vYb7NU84rPPFwmCgDXPAesDFfcv1ra6Ks",
  "key20": "kEdxY8SKnPZRyNG9WgUuJkuSn4bBiLiKVD4EnUh4btvPBzbZPWoi6c3ws9N52E8r72uozPmY5PDSQtbKZj7XcQD",
  "key21": "ZcvUHoZUijrQqKh5MVcGuq6bNH664xzhF85eQDLy54ZFiTkaoyLohwayon6onMqP31rQcKcJ9nNsaMXrGMcCJGy",
  "key22": "5L72wcMPEwkLC6sy3GFwx9BkwxBX5nPQPNths5QzsywSNhpFTJW7vGPgnyLMvUFtBSyP7ZrWiCZk9nsChdihDik4",
  "key23": "m2PeJQ39hdQhQDZHi7a1XaWurUjScND9WvNcs1sKNujF2y4AZrR7FkzvuSudV4xPBdarxCPPZGRo4HhHznvEeGW",
  "key24": "4QFEHYxKiVKkjy37PsD5yv5gobhPHWKqEL9VSvwWy9oEfXAVnbsNV4UaeEe3jWfBqpH2Z3srRTRYFUXi8dfq8e7q",
  "key25": "9QMPSdpvuMz4fxaYBVMErSeuyErQckqydDfGpP1ZtqLxGQ39Ztk9gX75R22PUVzzUPcUeendUveDWCiCtgnnVpQ",
  "key26": "9cL6Ercoi5fqm2Nec5b1mvXm9z9gZempi1BviBLNGfL4MFV2JNe9i9idXicokUXvyyJsRoZYaDc3WXbuXkSj3o8",
  "key27": "5xxQMjCBW7mYR2bGTeoJnPt1zE7RQpHp4vZg3ma2McX8YRMabd9uraP7kChEHHe48rCCLWHJWDk7hLRXkZ3gj5Gb",
  "key28": "5xoUmbYfVg4FqrB49Vsb9HCyRx2GtMeWKkx3NNDBjNKXY86aq5cQZ6pXrDB5R3QPUxJPPc9p3bSFBByfWctgHM1W",
  "key29": "57PRjx7yHxxYuKK3J8kjyx4pxr7X3ATbHmUxXEJrWkVvXjJtmU3ioUyoD15vCn5HPKC2VzgMeyNNRv9dNTyzmC9m",
  "key30": "7QWHjctewvnuNkdRZ3zSMrRCA57YMW6u6h8EXtC3q2Nuo7LcGC4TSFFmcXsbrsZCNKJJ32KSSjFUeV8PGKrzEEo",
  "key31": "kEcnQ5PB3iVf2z1JLsB78VmMtZv8W6kgucd8uqgSoSsjK8YmaJQsnVxuAaCvmuuj9ErhatQxAVX6hcgfbwcMG5j",
  "key32": "45Avxw9KF5t2YzRLrKPZBqT8jpPWDJXosHk55XovkGvLNEWyn5vKMyAbLn9qepYCN8tHVQksA22U1H31qLHEnWbM",
  "key33": "3o3CyzYeg52j2DEjaGeAUgzBPwpmmhnCfjejBEwWuapZob3wq9nCQ7PQg7d3CQkv9QsVyhBb91qtmtvvJsz5a1R3",
  "key34": "5bChHY1hAvQYGuR59KNqY9HAFnUq8fHH7NiNQ8ZQ3ZAYJcfjUvM33aH1qzr6Vnv2EcVXPoQtArZXKLFqiR7cd3iQ",
  "key35": "BrUkfhxCueXw6ktLHWECG5jc1H81HjLhWjD5g4cyHNUorak2vvEudGirsCkGg3bwHuDuZDKnYxraU1TZaiW2hZW",
  "key36": "65GXuJNYp9F9PGHuK5NSXy8vi26A28Hj2buCNhLbxrroMMngzWSjMhxojfeyHCQ6C18RADwcSzV8k9mV73HXbcg3",
  "key37": "5XieCVjNHtD127vk7Kozcv76yrqwzZKh6Th7oafJDs9Li4ycSJSze78pgf3zaYNDtja53Bjc5o1wZsXiBnxhh9kr",
  "key38": "3zVjzRHBE1etH4jGKqYBygjQVjLjxBEZg4YUBt4zxuZNX9VKhdNrKy2rbdZW3ajnoGxw8D3uMD3bkZk8TSFJjoZG",
  "key39": "52VEyWuqrfb9NBsevBpK9c8iJEXtk76DC5YVq4t47jzDHYMZpN58b4TjKx6Z8BTUg5ZgmLhu2D15TWTjjLhuD6W9",
  "key40": "5B8Cucf7y2jVdMbe7Uo8PxHCkPbFKqwRqfcHjQWoj95FcsnSuexoLG4XVjoGLsfm1yhSvJhJ2Tod6TfHY36ituTu"
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
