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
    "4UXndrpSpv8UTxcBeM96GccJS4qRGYfWGH92C12t2K1NVN9pad3z6jq1db6VTgY46PrauFcT7g6Zm5DucQb58wDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65oFpDUznP71H9QxRSnTUvkA2Cib8fJE2VrUp7e6umXJ6UKTBRFsLWdSwX47mLtR5sCmw7dLZQyGVTnWNXwvgzEZ",
  "key1": "5J4z1n2UwaUbYcAeX3FaWuti6LP7WU1QV2ccReqTEViwc5Tg8CNmMejWurzA7pEEB9dWbv8yEc6UHPaPuLPZad7D",
  "key2": "NXvfQYo3TFaEVWZNH43qnvNPJtaG2c4jZsVakdXx82qpz3Q4RjXvpziHbZgu42F8gdrvWqgYAkTqbVsrQKsE3Uk",
  "key3": "YoKPDkwkGWkj959BYkzV6evA9WEVGb2MQTptvqx5PHLroBJzomp4NMRUGywt11z2YvkCzxtZcjGnp4UiXArgeHE",
  "key4": "53rQ3bWz2zcvzE7at14hFCHipxaTd1jJ3nuSdVK7KgJDfB5suhoECqE3Fmwkx9DbXJBoGPtf3TeNJdLy6KK8yYgJ",
  "key5": "2xUfQe5GcNDxzR5bTzJ8gXBY3HWbDVG6FQ94Ensv16VZhjD1yFMb25hGH6j1mWWn1rip5ZUTXT6SeaLBkZ1ZYCTD",
  "key6": "2JM2G8c4iu5ejnBK2nS7XHzvQERtmSx8SN8juQw5xMhLDfBhaDq1KN721jSpN3tPRqGADA88zMVYFnGpGva2iQvK",
  "key7": "4rs68HP5g58kq9jW38KwJdBidsFnQosAWUt8gRuwfZJZRVt2ATHKGnpbYqKFkKBAD11BMv1nF9GrbGR6SAcRfdLJ",
  "key8": "sGHybVmZJqvQ28YD3ihhSmthmPw3HxESHNoAXGUswPnDAcDN7ybeSoLdZ15Dypv95HzieYG5MmXUJuYcd84eqEM",
  "key9": "5eBeerCX3gv7zbA6dqvzXfVCBdLvHBm5Y7ktKaptUFKErHM32A8JPy1xKdi57uisEo2crjoH3ajtDF5eh1GDHeo3",
  "key10": "oQTEWeHtEHpoZcSB5RHvK8ueCbuGXPxZ2sNo6oLez6fEbjWbuMtEBc2UwvtsTEoN9J24nezvnhLWg5hWteubK52",
  "key11": "vtb34xcBqZPAyvQn1XarVz21QKnAGHFgFpXpeaRCzayhMUMLQF5n7foF5c6XRWvMeeXYS51VqegLL9f1smXdY1K",
  "key12": "6f7QpvC4oNU2msYPLESzK7EUDgNiV7oAH2znH9fjfvvNCzsXTbZqHVbeTRSySdE86Fp2ztcYqn5t3cJXCRKJVGi",
  "key13": "YgNZHUqtmt4gfMviqz51PSt9jJ9hwH5Wwz3Qf71fESvFjwwnzt2xUMc2JgkdL4f3Jed5frFrBuiZuho5RUAwFhe",
  "key14": "4bdT7VNjKEj6rWPpQwUXcvWKERqBz8om22w3d8NLkAKXT3joowE2xXy45BowDehPZtfop1TMtm4Hek5u7htdbVsB",
  "key15": "BnRzJKygZLdfpRcpM6utRC8XNukGp15iKym4qKaksKgP3eQemZq3tZUNkcfVxKPMjCVdzKF4dg4aLraXP9mczuN",
  "key16": "2se7arYuoZyfyFNfbDyC8mn5V9221N9P2qc9Xh5ti524TXXRyCsL5YSAL9aDkZELWUvu16mHa8yYAWnFSwQbhYhu",
  "key17": "562Y5pxqMn9wT4EHKA6MSbWbnFKLoKmV9Fp9Ax8XjwvurqoSa26H5qRt7xs6ov443qA4YwdsY5wK18TayEpKuRHq",
  "key18": "3A64HJAh5UJTM8uQNYXFsGgY2KcJnq9ruR2BgKnn1Zc2uQ1vEcV8T945mcwnJFJnigKpwRtLNn71B9xaNHSZjvLe",
  "key19": "3dPtRMBhBfXVCb96Hzg9aEcWPjpgcuycrynfThjBetrL2C4vpDiF9Kx5Tx5gDSKyiiqwB6gNdHf7uHLBkZFvoyCG",
  "key20": "5gRaevybe8rMH9KAxVAHHd2o88A65EuZj71v6KhFF4yep4nznjHUoVNZyT7feUkdqQmWBMkE4LjxcxDGiiEmaS7V",
  "key21": "5Qfnbzyri8eGjGKSXGEmMabtrX1HzjuJfmaojJnugpM2GXwNoNXusWXD17wGVnA9WoN5MZyi476uczFStW9xwYem",
  "key22": "5MH7ysF4GnSsFJzkSoo7jyMYZ4LnJ6Fq35wKd1VixXdGnggdUAkVVXNMn1nvoKB16REq3XW6jjUpZJ7cJZTHdPFy",
  "key23": "5LTGXR7nLdBq7Rx2Mu3vd4rDgjnCSmeY5nEzVA6ybC2e687gR5fxkhSR3av56ZSeFRPqkVLVcDFaMsfJQkPgAy5V",
  "key24": "4rsrhwSbnAqXSLZBxT9z2ErJBqfLYc9GguVX5axKnzA8S7QZk7YtxBkuhWq7fmWZrnjreT4K3aGkpzKX5We4U2a7",
  "key25": "Mh3tM2oN99h9n7FUxEFHbhViretL9byY2wnEcpbN2X2Xr4KH52ek1pkMEz9X5htTaVmhhTEJ5i8AXeZwowCV4ph",
  "key26": "5bcKF1qLpU8pzycG8EFQkV49J1D4XN9YaEK51hgMRTjMq2eBQU5tYv8SDESBnD7LWjzVGudxfbmLsd987vpj29pw",
  "key27": "2segk5cMkzZYfBoK899Ce4Ax2md9KbHiCP9fLppeGUVbrk4D4UnBCmhA3doZwvgc97WY4CkDsWVt9k9ZH2sp4HZf",
  "key28": "2ELdNFvXKWm6m3BCTTeTEVJsx74VuV4f7gseg7hg54GZsQHxWMpSskEFvJL5nPzGZQCpRR2EfjYegMFBFeiyHCko",
  "key29": "23zZJNn8nHMzLMLp7KtTGLQNic9PbUYKC2QDWJWQf2wdEWzDNiaSc8CeAeVrr5jwBepyau2fajbSQdYhW8tMy48L",
  "key30": "3wkcHLHrfLZKTtF2xwg5Cgh44wUVtncEu5yKaqZsEzgCv5gxx3q7Ty5rFpqe72dLhQog1DfTUdibFTTCQDyBxM2e",
  "key31": "4faWUkw6yq4XZRMnQwU2uZC9QSwbDuDunjszfSgVHsG4f18byCGSM4PJ2PK9hQe9K1JxuVEKGMRx6KoDcKpX3cW4",
  "key32": "5aDbtn2jUji198SkZkDftKLDAP8U5HssPYSoxtA2cJocUfj6h28bCffHtTmj1fimMsMWXoBLQUieD6Yhe434YNHo",
  "key33": "u8qxKfPvrogmquyPjDFJAu8x36MFbWy37eijZ1qCLX5hbxvULGa8rSZvFvbCE7y3TQTsBTpyLNFbR5Sh5VX7BYn",
  "key34": "2yrFK96aC7DyRFPER2TLTinDhsYHpvtZYj2VCvQXwRcKKdduE12qkD3ByDktbbDYwSFXoxHnAdEna8btghkLmbsR",
  "key35": "4YmDyB3HEyNnBBAVMnrFP2qt7vndszXQtJzUMvnbJRajuxJ5B5g5WTu7pTuvBUsN6MdwZ9woKpFK4WFthrSeSWFd",
  "key36": "35BPj6Pa9N4iJJpjh1HANjZ5rxe3MGN8zDLPyihzw4rDWBo9qTJ9NK4tkrE8iRw2WDAAtj3WYTARHiAdQ1VaJ9e3",
  "key37": "2DozeP6vHDmDoURrBf66TSfEYyXeeCCEMkh7Ucvgk4o7fJ1EbWi6JVxrthuLatf1uwi3qPNbG5TADjFdYjujnTJN",
  "key38": "5qFrPuWoHXFAx49hU5s2aKpJuybPQKu9L4qiVaNwZHaU1PPkkpyj111y3fB8TKQRfhdukwb9363ZA3jgkjhco7YS",
  "key39": "j3N9CkpoQb84CUdN6ePa1HDouYRD4MuX2SJD4g3s38yxjkrpmHVE1dTz6TDwB1HVXvb2L9yHAj7DE7gkPLNF7kS",
  "key40": "5epFnUzyraCyZDBjRq26pwYiFy7PoydZ4PLfDu4aUJZ4YWKvCuQvGFtVy1uvG9fJHdBkyQ1VVcCUWxdaJMbxwR9m",
  "key41": "2Xm8mFcYxwYoJbZi9ezgGU2xkcw664aBTZMFTGkvFR5F5WmbFi46dormM7mLsMVXZkxaedWuRdvYwmWBFScNohTG",
  "key42": "2gWDm69Xj1jdBRA9EvCyM513Vxbi3dx6gmD26HsPg8iJHZD6sCc4MvKWtcEFUUQN9Sphwo1kuxmXmNNFLEZfaC4M",
  "key43": "3WhHNraCGYWGet3jggo2sp4qBuNoyjiRaC1mLuioXwE8gpB9SQByVpmJ5rUqjVsMxDzjAxFBSWEds54fLGqzQXeP",
  "key44": "3pXity914wVMZrXe1W7XNcejxw6ExyKtxb6QWr9T5vnS85ZLLSfy5DBe16iUsxKK9bGeG5cfYtPMKe7B6bSoRWKr",
  "key45": "SizA6WRWt1NcKFCbkgSmg3Z43ySWKx8D8EosSV8ZQX7xUNrbRwXPxPr2K2Tg3CkX2qAzFkm5frf4qhR5ZjpcWqP",
  "key46": "53FUsCDQ6o7ftWaTEvvcNDPVGUb63wzZE3WPLUCg5mvySDsQJVuU6bpH55gV13wuVEgJSpxbCsqU36X6Kdiiisvd",
  "key47": "2m3YtUTFNhZsmB2rP6ZzXQkPJwVch299uVFLxeJqk25Ex62hy2uHzCEC9StWTHumj7g5bKp3wKTWZ5eE2wEq6P6m"
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
