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
    "4hcJtXp1CDbEusr79Gfbu2nFpwZwPcN2DWZeHbgSBfernu1zCmqKHeAkNntcFknkyeFwnPFCSRRvZjVXt6oeH5E6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21kC97hho33GKA4Cqgi4kTw1PiCNT6R2gmbETGn6s2RBwH2MXWL4doRVM8K4wgv3LX4EkUmEeY5ivoa7uhp2geuo",
  "key1": "5c5bmAgBy7C8oek3DzpUZqVqrwtfmpP7JRC2QqdV5okPn6MqFdgJr6T45jqd4vojKJGWjaWLAYKDUjhRzEUVYkpB",
  "key2": "4zVFphv8zzw696M8PR7EPABaoYzWFMpfo6vvJzgRJbE8psACyk9cmdButn8XtKdKR1JYA6yT3yLzcJpEwH6nTzX1",
  "key3": "2hhz1FrnHSfkQJ4aNXmmZbXbFsqVKfCeYeeqUf4N3UnLTyKZUBzjuMKaPMYYyCSQ57WDLPGbB4QtYPtU8b2JG61a",
  "key4": "2dvYAXdGwguxrN42c251sqpQsWAjG3MYeW2zWYco5wsM7fXSdnruVEjnmw2NgEVb3MXFUuAFt6hwMeega1nGPmXC",
  "key5": "P5NGo2vS1ZpsKn5mitTQkw73qhtrD3o2oEf2jACFJzTgC44TyF3JLhmegyvN9sZMpYJjjzE6DRH1JZektbgKJDZ",
  "key6": "38M6WWbafhNwGSJ49f6PWH18y45XoyV3Wkv4dFaLc3YGhuuwpbHiupPyCuDeZAysRWRJhxxhd4vcGmQgEBQWnaCz",
  "key7": "6MC27UTdxLheoCTS2dUSBgB4dAMY5iLfF5FMfi6yTLZkQKtihUNMv8eGgMDA71gKpBYbZL7t6cxyJo8ZYw4gnSg",
  "key8": "D4iEmMGy6TXXWvKvTMKEXi1JeKLr7Gx17q3Ay9Tr1o5xy1jttShJgupQAddg3QHqKvApQGrHi8N4hrU3SMNRgvg",
  "key9": "525HHfpvmaeUZvNAQgmhMMmT3LEAY8ZFP2Rhr77Rpf5CTno5GXehE2iSX5BubvQYcYRygNncuKALfhea8TcJcVL6",
  "key10": "3xqknXMHsG24sPgUqt7djY6S7Fs15dCG6LtrG6NoTUPGzdMgQjrxuxijB4ztrucp1DKrPJb6ufSGCsYfKj4ae9qG",
  "key11": "4feP3VNGkwrvXhxtT2tAAx42ShM88CRi9vBVxjKKbgza9hB8qm7fWepx8P3pBZ95q4E7Y7NjDts5rJVaBZqjWx7",
  "key12": "5jLW8qKzv15DBQD1uWM1KqgKiQtvwGg6vfy3bx2D8ULCLSrp363QNkbWCmGE4f3tm2Y2w6MaQcbx1YVD99kUQDpv",
  "key13": "46jL8s6M2wMtuMNx6Mtjhrbihfk6JbgPJhonZShoxNonzGxVUXfS2ha4SnQk7ySjtgpy5LUAQJiEx65JxQW1Ho5L",
  "key14": "5QSN4BxZU6cSnfvKD952rUV4pXsTPeiQZxFphfxDoVo82K8xonmC2hdfmqNkWJJDmeNVjXtjDAD5Dmk6F2sAsvxZ",
  "key15": "2q37SkuuBYUr6fYfKq2r2YC5ekQRuuXQ4azXUoCtaEYQHYAWcBshxtoFKYWo1Ms9nHwqZJfiC3URm9EQr8Y77stG",
  "key16": "sGnjYY9seGQySfdNsYzKS18LBr76LxaejcoLCszCbzEC24SapSSZSvSDvVQY4reaEKDRmxSYsmY9T3VggBH3eYE",
  "key17": "2wPix433PmS7afqS6xPT5f16HHpuWn3eo9z976c8N6r9g9BRsLfj2qbdBZbmVpJ7Y97UTKrgKVwmpFvpettmGqPa",
  "key18": "3tkDNNee7LvJmj9SxhCoq3UZyYcPCBTLMDPnD9x1iegYqEE5iTmZdTK1qbMa54Q7QT6LHb8uzuxQobJedfN9pj93",
  "key19": "Z5djwd64HSGqrwzZ4iDugmZ8RjcGYkE2hpoSneVY9DmWbeJzo2FioMjHx2myy11YjpxgSCFJgZyUoUQ1YrJrxJM",
  "key20": "k3t78THqzQdu31Qs1rvGT7J5D9axXHWGXJgmRJJxtyjePtnhad9crYGGkCkyK2ChTxNAWMjh7VTKXaUTJKyZkm1",
  "key21": "5u5PsGKuKy4Vkvg3QevuSz9T89U3gUJjTn9SUF2LbEj2torLH32Lq9Ere5N34M4UVjv8nFtRNma2V9WivJAgVcyo",
  "key22": "5W5XvpgbMEPJacT12sMkSRvG7YStS2HLMGTzyQwBoW1D3Fgvw99a9BNJNMw86hEdha57Y1eUVEFin2dZQ6NXPUnc",
  "key23": "2Bq6QsVrtS4hUiharFHxVDnFxhC678CxXQJMtz9gvkVnMrboiLhXvXQDtJtawJXwirqcG6mxyPXoSj7soDqrs95n",
  "key24": "3siJX2rUNrH24YCK486ddfKkukSmskejPQTma3s5XduFidYSNL2tAT8U9LRQrCCmFkzrVC79ho9SsMMcFSARyWAr",
  "key25": "4gkcZ22EphzxfhR5ksNJsJCPUHvAztYajhq6AoaKQkHzRymWtXN4YvC9LfgoXVaWH2RemPP7EY1rvBYqFhzEEodt",
  "key26": "5gcJGW423a7KZzL1U683nHtbojiF2hVciU6A6ccGTnYrdYcrwkcW5Siwhwg4LvwWRKsxspeDTfnzfzuJXEcQV1un",
  "key27": "3tmCLnPeSu8GZbFuNAQWYwCagPrkaTWXYpmzAybyAN6c3Y4zxoZBY85Lc162bo2AtxvaAjaRhapEvYxdQ8vvbwF1",
  "key28": "4XYa7TJAZ4K1Jc31mYXtVjctUdGPKHRUqFxvgFawhfX7g5Xv5c9XsP4BaJRRXC8UCdkkTywDxbgKkWiTz2YKfmh6",
  "key29": "3ggJCZUxowmKSsiPeKBRELBA1JpXCWvBBmjyfmDCrdUTabkfQrQFF7vwKBqR6L1NZFGFb8TpkRCaa9KFX4iMh9u4",
  "key30": "35qNVgShwQZK4gvwna7wXXvo7T64uxTHSoroLXQQoWkbSr9Pak9G8HYkCQV2UmjxuDxcE3CL8LAw3shAuagnEtW2",
  "key31": "3izEdY7oAsBxiTAJJPnt3Kk8nz8AP9LW6kZGHejy9hfjHd44PJS9HekJo76iyHzabSdkCKWF7UkN21mLKMGFHwzw",
  "key32": "5xupMjqsYxUZf8EvC4xmC2iz5ctrNsk737Qmo9XcsP7Ek8U2emz1wQc7TXNF1Zu2trU7Gr5u3CMsoy7mZqYXwfxF",
  "key33": "4pSi2pikpU2MLrbfgkqBJeRx4qHn7WRy3UiRzr6ZgaujFRt4yfSLSzEDD3GYaVEwQcvefDpSff2sWoDKnTaAzsxc",
  "key34": "3FLCXwVQvvCzhDCcGheD1m9MfPurgyH4YwZjJeeE4PjcN6Z6NzrhfTu1BZSTo9pVSmBbADmXBoZ4kCFTmKZbqfoE",
  "key35": "onKE54WKQBgKJ68z6TcS3ykcesERNHAtGk9myJD2a3PrhLnrQDqA5WHUaEEu6bYJrjUUiXYweQcZVoyPtL7VYoU",
  "key36": "4K7mCCrzT9BZaK323E4ahC8r95GV1xnGsyAbhSxQvScTS2vvwTmfvqkBJ1sLxpjKJHhvG8fHwAFyipq68oLNNThA"
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
