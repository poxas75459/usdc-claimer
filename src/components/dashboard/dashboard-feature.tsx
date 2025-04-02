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
    "5n5GGJBrCZG2pCsMdArHW2zSJ4g7ebKVbuTUHxLTTYeAqECbbUWG83GrcAzXvXqG67ST9if2K1sXX7rxVBjeKjaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fLaL9sHxjrLZcTxYYe6J8veNrTTYuiC85rLtzhvr7HEWnANbkPyqzibsUGM46wBXLQi2UWQWDHhDkZuQtHJXFQV",
  "key1": "3SaTgmRxU6WaTddLKWrhXkh1T7snxFSsFfMJojdeDo4LEYTXUYZshPPU8U1FgSjcQyuhvzREKtp4H2ZBNFiPJ5RF",
  "key2": "3Ds2heLgQ2Mjp3VKtZxYNea8U4Kd9qih521oekdMTsSudbb9MD7gDstjwfVxEJXBYBozZicck83oLPaUkegFajG2",
  "key3": "32rKTo97RBQ7hXKKYVdvBK7hZ4Rf8eUz8LyedvC5GeFUEBazJ7F11WmazbxyxwTVD4XCVfsQyzoc6k5Mfevx2GaX",
  "key4": "5DYFRwN7nhCXbdg2MVg6T7yFjxwtpxNV4q1R7VAvnEnK4VVu2NdajjfAeyYTAkAXj6GpRQ7WVG7kA7mNZcDQ6Ydb",
  "key5": "3PGG9t91XjfaRvEKqkxcQJr38hRPcyYFosKserpW7GUAjhaMCBXsLm2W3mm47sMtLipDfCTvqKJFvHU4BQr5vdWp",
  "key6": "p9D5kcBa2L8CM4TcqbUWANhYuxmBwJAURLsQepQ47LQX1S9qkEu5sZMSyWebE5iG3qHffRLYjJnWDhZW2B1PTU2",
  "key7": "2r3QZEqEiYadRgow8xpRBmsi48cUYGfNuKVHjQZG5uKuKewx4dvU93uWQ8HcFLdKcKFRMDKiHKU2tSWXD1Dk86zR",
  "key8": "5GWuqFb4HfLHfqpW6tZ7Tq7CE9RC4s5YNewYyhDjWinZeRTQ9Y8ULDzhFWafCjnK6PBugDcR9DvjdKxvD98bsTzS",
  "key9": "4KFm3bvjKPcKXNBotqvB2sKgGDoWfwZz6mczxK4eVVVY6yTLEzdc87gMi6d2B1EfunqWTwLTz8t5n6R3xyVjCuQb",
  "key10": "21gn5uFiQczyREJPUiQWp1SoMb6amS3besur97u455o5i9FwUj6Fke5SjKutuxshTwiC6q4YaeGzz52FRqqySMov",
  "key11": "4UxkX7vRMvqsQ1zRAozhPRcxL4Z155hw1yLogLZwHvhNuuJxZ49EneSSZJFnYsMNM2kvdFyXWh71NquPKBaYbUdX",
  "key12": "5PbZyAKSqSC5doc9JGxsDsketZ6Gqq8nwGZqNBUYPkSj2sCibdq2W471HVVxrKt8S6QxUiZeYuHhGRVewcFvZjE6",
  "key13": "Y753bs32rE3kzphsmcGrNuiQiksAAs1SkypyAPso6aeyda3VVpMPphknikEmhuKYTHGw7PXSm6Z1eFEp5X2NJWq",
  "key14": "bswWSxptgiLWhSy3XH2jaDEifTkn6hgTnKG2zCqCvKGgnKx3ricAGi9aJwmqKaL1aZww8WAdaLUTYYWZn4seqTc",
  "key15": "42X7HkmaqFbqKDKeSXoJfK3Fd53mEC9hxm8FSD9AXTu5JqUyqeM4qEqwQMUchyU4VsDuqiWvZWfg4eBamuohTKub",
  "key16": "3S5xZ2w8weAmV8YQXXTSA2FdD4XVRB4i77gmpeBYtSrkULmjG2nqDJXAgUXLxpNDWy6RstzmZGSDtBa4P2q1EPGU",
  "key17": "RYG5yF6asB5YQLTkYh6ac2pHoxPnZJvsbndRT6ukvTebe24B2r9Ur4LrZK7AXiy49nwveXwkPN1jyUs7MPJVm1y",
  "key18": "4SzQEikQmuBeQ5ysAVTrKW29cNhU7SJTvgsSbhCnyR1wZutmkxUKrEwRqvAhUtV3TorjmAFrWMEozKZhqdKqs7CZ",
  "key19": "61Jc2sGksECmmP6eP1sk5xAjjqqJxqZfddc4BRX2PbtD4rqsQg5W5yBekyr296smYEr9erogs8yFGag13mfd1a3s",
  "key20": "2FnJU3MmxJE2TH59iwG3XBBVMYRUUDmHVZryuZqnAg2PpgER9zTvYG2QVfqDk4rM9uHGDeQApYNWFCuA15iJjnLH",
  "key21": "5e2n7PXVvdSQ1fzq1vu23jQuxrJWuRZn6bGooD3ZDUc5N3UYMdhqtFidKeQk2eYw2w7M1nc87ra8V6AY73RcfCo6",
  "key22": "5NphNhggfyz1mUhrHy712qbTCTmLYxQD6qDaUNaaYqWoXABXXAQv1TP8ReDbQ1rfBaegFn74ugCZGLWCQohkc7aV",
  "key23": "4oyt3ZV4iD1qiGtYVD9t2jM7vCJrLHtdmUwT4ov6qvZvr6FUv1w36DLq9LGosWBiYdiuN2CqPFD2Q5fKF8Fpea72",
  "key24": "3d4KZZQSjUC33PNTDwHr4mbqUNk5FDQHWGsz9iYwTzHefwZcqnTkhrhRHcbPCrZ4Ui9YxF9tn9UCmYf6HusFDEu",
  "key25": "2pgqAN7hFBMCPR8FySN745azJgyFNCDKRHAZbRSXeYBXWBK71FfRhYEK313vJr6rkdiGR7p3kaP11vCe65vBDUAt",
  "key26": "4DU1kn9fWTQZy7dPiymCVPu3pBNe7ymFvywezEWkeQ2PRCm49ze8asb2Tcv7eUL1nejtusUkUKf4Y5yY2CqmoWDR",
  "key27": "4ohMYAq6TGKMEwCNk6g8acaAf1nK747i3o3wCimGoxX3FFxJjKMiKTmTopbbWZb2N3LcFoQ6msiUXbxEjUGNtMWK",
  "key28": "4Nddm2Hr4eGTPhRvbGm9cjaPuCB7tG4Q6x2nkQTnqWyPA7m5eh97dGVuz1iG8GqmSViJVG1t6JdeXJap9mXUz2aK",
  "key29": "4H14hDx1Fwwk3p7gAtkdntfJZgZHZ4Unue6ufBxyGHvCBXNsN6BsxkXokDfjDmrMJtNFREECF7HikcFqm3tJ6sKT",
  "key30": "2MDZYLLjuUwuqRDH76XVqtLPkZ6WNkmWM5ZnGY6xDuj95bqy5SLSKbU3kVuWzPHERekM3HwdPwcR7j1Y7peZ44L5",
  "key31": "3tz1s4t1qLCtURtar72QbMpsKn3Es29k6K4UcjmWeW5iB631FHJc2n43bcDiyhLTMCt7gMgTwFPxpcYdCzReJXxD",
  "key32": "5TJVSfjuhTnaCxad6RVYwRBRdvePqZFyN14ADg1v3k7mAp5NSA42Jm12JmTokHjRPyTGAaCzmJhC1SozaXAGesyc",
  "key33": "5k1DqhhCLR4oSDavEpg1dbt8MGAXVQ48phnEpgbbpwmBFujU1cfWFZUbkfW731Pyeohn4ggnkW6MkwPSn8kEk1EB",
  "key34": "2GiPLxf7Pa1tzjSQ4YukYFMnSdvtNj1bJR7BavsAtNb8PZYPm3JoGwVoogtAeXu4B2ajGtoKQZgmP4ZBKDS2kjdd",
  "key35": "nmFmMkHkWk4E4zsTPaqnZNHXGARHCRrQ7Re3PoMR7pgvVBkyjCJU9e1CLj4eb2ceWTi19ugsR93rb62q8FxZAqt",
  "key36": "5AuewJ1yvVqCFsV9DWHFxJS9AdLqxEdPtKL9EkgwSy6iNfgZ24NJFkcNHVpbtrgCPSCqDYf31XyLbxzEk9j91gYn",
  "key37": "3Er8XFqRtgY5HQG6be24rwFQzGJKGoiZdudRBxwMZRgq24o6Ab4HTXcY8vAMBTR2Yd4Qq6SvwbAifRtktoUHVFvM",
  "key38": "2D9YeGKJgyHUPsjirf2wX2oNKKwrAsMF6t9dA9cH7Uk4Qr4ntpS3hadjWXLbiv3NPjGVYvyLjb6yG2jGyFkGawzp",
  "key39": "2kkB5no2Qd14bC41DyV3PZJbTpY5XGZHiaF8BaJTRWvvt4Vajp6wA56cSBYBi6baNUiEuDJK3fv8Hg8GidFfqHsw",
  "key40": "3caMfghwMGBWNmg9TFdGuzk3xGiD8gg8Chd5vdrw6rkMC65YH3pJDUUnTa3pU1ZkKEQdYrHANdTU13EDcfHEP7BR",
  "key41": "AvH2ngEvTYrQ1VDriwKxtURh8a9SoTaoiJnnvW6WFssPWyG2CgEQVGWQt11Q7jXpwEc2vU8gNCcLL2ZNMs8vJnE",
  "key42": "5DdoLbkop4L7JW776M3ySak8xHbTYtX8HHTahMCSmVWEmtC4YVVt6BVgjcqtvyzbLMrf8Ks6gJxvGbiDbsjyMPjU",
  "key43": "HyJqLxmT1GjysS2h9qP9DuDcY3BcLfQukUq37HGwiEoscmKCi4ohweGwQyCw9bEiaFLr3NPG3o7THsf3NBbdUYs",
  "key44": "3YsFJ6MQVyZLwom55KmeXUtu2zkL7zKiRMAW3rYvpmpJraSia34tDB235rBZ3r8aDcJSPDgsb6YPjWzhpA7vu41E"
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
