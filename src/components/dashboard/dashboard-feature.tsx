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
    "tGLB5xo6k2WBuLzayf5TAKKv7TwsrV8W4AtJzB6kL62bL9pmRfeNS9QFU41J6MDL1AapyMqK2WS5g3ifLm5ZN5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rS3ZmRBYGMwNvbwoDkafuKsFfY294XcCcDD8HBjMu4WsdqopfMrDQ2Nv3Fsv4bTUmv1oakzTUytADNhPpdgHPp8",
  "key1": "324DuMgQfKP3vZ6tREviX23vsohjtYAiFQ34tkBzzvPpdqFDXd8kW2DRVUMtjJunwyYKzUVZwdmnH34hbKC8h1iU",
  "key2": "1Trji5RnTZ5Gp3B9yUhiQsxdyf9jwbLohofzwT5wc84zKAMJgAM7pnALbVERH5VEbSKN6Y3XkkVmrqSk5vfBfch",
  "key3": "4nS65fQ4kf2RU4MJtRM2Z7yKr6vprCQSCeQ5yYKx73JnCHkUqN3j4hLGSxZMNETeJbtuCTVDmTmYe5EGmByN2ZFa",
  "key4": "2Gc1cT7KhFMao9mv8TcTwQZJda4KLfrZodLZAKK8tkMoZ69T583qDpGat5hNVqPbF6DJVWpt5mfnFYwAhbEbpU5z",
  "key5": "DRDBDiHDsurGTKgPnhs8LQpJWi7MenUJC2vPR6qyGR385fJnTUL7g5JLowAfTnvUXeTFzsTRZz4Tym1jBgWhMKE",
  "key6": "41ZnCWdsqrh5Q2igUpMA6KAMFvRXLNBX6jEiJ9wURqDfY2gY75nY5VXFEcnxr6taHj1XqCXSjx5im4SxFrpjxk1K",
  "key7": "5cpcFkwV9jJJZt7QpLia5cPPEV1ZNr3eaurptLLLZvoQJJFaDkispKbCZ5ovx1Ed7tohKammat7VMmdjdowHh1z5",
  "key8": "3fd4YDjVGHAEk2EbTcMNtUDreST4fTpMwvWfNte17esu6wcRcZDaDsmQpbKvr47ZTvF12DRVPRVXMX6DWupu9d1W",
  "key9": "4efb1iUtfmJ6xPaAkPUxonQtdew6FfmEz4h2LT8Z3aveN2HoKcBwXHSVqgD8iDEGU4ShkDFq5NW6EsVMxQx69oS4",
  "key10": "2RChBigzfDiSMPd7FzVJ3iAMxqmWvbtgRoLq1UUJAMSr7dqeQWC6G67LZjeNty1s1baikZ37YMr5LYrz7xbdYDnr",
  "key11": "57m3s7tm1HrdKEhZw5HNcDwRfkz2cBZi8C22V5kVGqcTboN7TGW5EytswLaEMZQaxXMNmpVDJDQsj9qejERQe9Lb",
  "key12": "45JTq8R5bFgsgXuLW5FvFXMzVfFwoU55vt3oZB3Rdv6fDWRAoo1FgUxaFcJMGuTJZG7YvDi98vTReBFtHx8AxEhY",
  "key13": "4kLwvQk1kaSv1D9wxcFZLaab2YzoorjoNqaedjzVtB7W3pMGEbhrWh8ru2R6XhNoj2ebirNzYRKR6N59g6FmHzFy",
  "key14": "5t1D5YdNjzqDKLjsD3wrrRR1nW7sA4ihbMajS2fo2DSPrxcPJeJQWA8ZrA3M2HmNknjzVeUeEagHP3bDimEzVxBr",
  "key15": "4gKJkog4Yv82Pu59Yh37pD1T6Mq8SGMtyFDCHpXiQFgtZXubrcxX31Cq6YXpyLEoETEvzpHNvUaSamUWuvyM4mN4",
  "key16": "9u3EBvs1v5nkUmPZLdm9cs7s7HTKUKa5Rdm6S7YtCok7npnbsaVNCrkZQfT2QmiNfmvmAyP8LNTwxaDCb58EVxf",
  "key17": "2RWjXcKJqGtUAZQ7G8nwJLpwNwaki2xb2aPAT8UpJj221gb7kEUNm6bRt4jgirSE456eTUXnvLExdUEL48JzJBSP",
  "key18": "rnT2EEB5YU8i5bE2m2qr2qQ2yUUjWzbSLc9MGzPWgfVZ8v5PFJvbQvtkbeP6V6WymFUsNXwxfBpB8vEGq7SeJf3",
  "key19": "akMBdRvpCT5Hkzq8VtwDiHsh3FbFd5fu61oXgRCmZuRSXwUETU8WnsEhVNmqUvRRLtRxao4nyMGRiWJ8QQk7mFg",
  "key20": "2ZdLuo9hjdLeS8oqP3pfVkZgp6mXxwNQ6fYFhLm9qkfXeaP4h1cHQ2LzH6fA5xfbMwdQXvD1emuBLskVteKDjTvj",
  "key21": "3gBb466483R6Wbh1tVRADaHD1Hx8aDfKLhnraJmmwE96kYw9BbU1DQVppcLQBimpMjVYXUQgW9BKmD2j5537frUe",
  "key22": "3ysAJDzLnhq5GkArFgimYTC2tZQikAaFcw94XnNnXua3U2p5vidg5hkcPBwXWPTFv6inP89ArSUHuMHMJDHeT8FS",
  "key23": "62Kd7icRJprxsTU3J5fXsTqKWecNHTJYyGjih4XzWSQ2cnvaCdJcw8NioSqT7QRBTXvZr7JtGwock5WJmTVPvkuh",
  "key24": "5zSzbNSCJZRMJFJk8r9sF2cAgNVcYtr9n4iogXuH74ofFbvWndk2QNAGp4yd8d33dVesz4Yz9z3DhzBZz671xwrK",
  "key25": "3BCgXuJgdxWFKjCwBpwTnbkMDB6f1BhR9GofZKLCX9dyHALVWpPfuwV5NPU7PFB7Kacdi9YRoxtQzpWNKG8MPJEo",
  "key26": "25tKhEMwFrQqhoRL5QAMo7vNLp95aGad3ZurrDGFZfT1mfxnU1vWtaAWvhT1G9aP1BrexLCM494Z6mqCcTLtDte4",
  "key27": "UyBhXEPrJdfYeQPAiXe3uUJr3qLFFJiFmxvKHa5vaSxJriabocizv1m6prq6mggzmari8MqZeYu6hk8dos23G6A",
  "key28": "2RzvSvUoSSv3HAf4jpi9Ly4uiJgxAjCRugi2EzjtvFrid62WHppajt7kfiAfCB7bfPU4TS5uF2zXpBYYVPqspko2",
  "key29": "4L8pdxf2Bgrio3sHfU8hfkNhUfi3rdHQgc5VNWTZV4vQEG2jJamgWqFVJSy8Qz6Cb5YAWaZtdxdE3Uw4VpCYv26c",
  "key30": "5V7nJV9QxKtAunFqT4kkNdDwiK6weE3tajLZZkTFercFsXStdhmxhQBFQeJeJ7n9d9qMvR2BQ1h1NvpvyPp1Ai9U",
  "key31": "2NVGmbA1GkHc7AvQ8Jt9UrjLuTt4XPikdf74n6cLsmbMg1KqffVhX83g6STv1xBjRDmPcpztzRH9yoBjJRrA65Vs",
  "key32": "pAYxdE4UV1yBcC3uQdLB7dGgcxQdELcmgbfXQAXiJNwVe2zMjULyY16yT2apVKXiJjtBBeYM9CaSP2KnWBfn5Nn",
  "key33": "2MeBS1ciAnPar4qkmFNbaRfKpo36gXWoxHXVeiCPYGSjKWiDNWqUF9bLehu9nVA7GkFnhgT79PJGq5i5SjLecc1c",
  "key34": "4dJZj1D2rCs6LmqgQgUnbmbk84Xpp9BZoPehwSZQhWnYw4WGGZXE53ymXC9A63F2fHgVaem3Bic3AZAW32wjaj4K",
  "key35": "P51dWUcEPezaaE4GkC9YV2TNsPN7rm88JC2T1phkaEbJ69x8oLRpYwM59RX3vBvbikQMN7xHUc5cegUmefvBQTo",
  "key36": "3FveRaZSat8CLYg6TEgYcL7A87sZbrh7z4aMD1D9YpaUPsywaGYs1q28t89tv6VEwjmm2ZTFQzhFa8ecmHUtvUbX"
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
