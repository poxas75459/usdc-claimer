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
    "3tBDRr71HxKcqwYzYz6DiUyD6cbbnycb1zgu5y2diAeS1yTk1mg7Vyefj4xdo7BE2HeMULRZ5bBbaMBpks8s1eMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6KkSExc3d64Yk78M8H4xvXkFHMMJyaiM3dGWu96srtjX6WP9bwJpXu3vgQACEeJfKjGX9eyaqn1h4z1sPQxLLnh",
  "key1": "5iNnGzptkDLoWBxZyorXe74HACYtKC3mY339XLEahEva4edK7QMcdTzgzuxKLSUZexbUW5CmvJPWiT9d6keWo4jF",
  "key2": "3cTeVhSoFLZcHbRLU2JwjKMez7hcuJHeDy3gXkUVTt53t2nc3RQADTcLdJcDXhPQAtzHNndYzAL9SsXWugLXoAdX",
  "key3": "v4JDTBi3jm1BCSqb7842Se5H9pjJzp8zm8Vqz3GPB8CfEzTX2tZvKF9FNWYz5mHxAMqHDGJmfjBsC9Jgim8Nwye",
  "key4": "4H9R9SY2XvFTAQPGJVLq745RsCCCyoLCsAdEw5LC3S79suCBgedbsUVNV2rtkrzPvT64TrrKfHkCfHDzaFgaa78x",
  "key5": "5vMbCPeUKoMxnBWdocaHAhe8yq9fz8tqRz9hLFuzytoJUfZaqe3jsq9X8XwMSz6w9Xq7ctpUcwSK5Y1kBmVmV25V",
  "key6": "5HUVQNaMozWonKq7kb8tpVd9HGzHTMDJNXmYnXZeYbbTpjwPNPCRFhfS4xLKKwcsgBVyo4grXMuLrKe7aKhX643V",
  "key7": "3gfvJnRjtheLuKv7bBNLchkXgCRNBYs2e7gqZWmXVwwXeAiRxUTgCTjHEaEhMCJhby2w4PmKWeA9SxBM7vW2gHNA",
  "key8": "5jFUaFgqzaRCh6ewtxhWFu3FF3XLT5RbNGL2RZr3Co6zYp4LbkEPY5Q3ZBE61oLKUBauR6ZUz7pBnGv11ohKUDWC",
  "key9": "61XWovvQ8o52ZzX2odFhHMTgeuDnRqo5kSwkmrg5JCoob2mMnZiD2dCPkNDm1UoTC2kp28ue3h8GdfKdb72okoyE",
  "key10": "5XxhoAxAZFwkQDM4TYfdWSXMJbwzN6s1uHbJvrZunKDHCTvvtRMr5spHd7WyorYbfWZkmXtFovvBYPVxVSgrMWDg",
  "key11": "4MbhCG1F4M75DY3WgUWXh9ReP1vmLbKYs7GaAr7EtQp3UzCo1dKbQJoHrKjEWxEDyL8DuaUBPrS5mqqpXATYE1gd",
  "key12": "5tjXHbuWsTtkXq11JauDtxgkt7PLmXuKNDHTLsz3LhxFCm7HPVSi8YzZdfhyWVgZPkRswr6UmE55NrMbSqqE8dAa",
  "key13": "5VHY5bGcVwQUUKga1SzDgxfKBG5xpDC2nFj2CTbbxMu5GhJKNyRtfR8sGeQ7nypmSFjiUNfWXFpne2dnu5QBMGqK",
  "key14": "4kgHgbdwVnLD5JdN19XPoB77gfoR5n6PSfJmKATRwULdzbR7KTB549jHiANQDf4tw2m1pTVQjj7xhwoQz99nwnAe",
  "key15": "41ofiRXebCzu7sVsGKasUVVb1BK7inhYpDH86iEZLL5kqyKjqxdmD7Hzu7wNAiqu9Msnpoz6JKmR6MwH8E6hvmKt",
  "key16": "3ZTvkahkPeZW95gqGsGfNDDPMk61SY72eRFq4T9WBqJJZxzSwbioWuiVpEPmG1nJDh7pHKMg648GyPM6RNAhZvJi",
  "key17": "27bEHaKoSfNkLnUAL2i4WxNeRvdQJnCdyd86ShdCg5KLU3SeUjGwKhYPa8DHzhTjSE4r159QVan4pRR48K8SuTRF",
  "key18": "2H7F71eEU1wCYxsKxrNb5AT6WEB5QWy3XaeiWx2yADettW5648MuDCTrGQsqBQPhM86GMpk8CFEFs3jEyZqiEWc6",
  "key19": "2bXT7injfaUpmcUwGVafSqLZBeuRLzbx9XNQq3qubGWNiBmhNyEfQy9HxDpVHwhJgbyqRRUCHQS9XZZL1PviMA1N",
  "key20": "URSK8ABc8FNG6pChQtECRSrxZyZvJ6KVW3TswDWPuL852Kk1TrLUuPQ1TGMJGjocAHNhvRARUQrYbGNYDcx9Ui3",
  "key21": "KZ9qeXhykPijKt9V7puRdm3TBW8X3rCq8TtXtnDYtUWvzGW8J8Kr9kYgpeKZpp35XFtUatiupyf1P9xWTzgudXc",
  "key22": "4Ld526so3y8V6Eiyh9yzHDpqaZwk1mypJcJ5evVYkLQQBjpC2QRYrxbAzisfAy6aEMvsQRm9do6nEQ5ybLSRhf5m",
  "key23": "4HzTfAuEFu6gRu35YfeaJNTYyQgjBJ1yoQDfgvmhSDK18JbqxDiEsaDmZrF4HwspeYpoNK1D8PVsjSwdmYzYEJ7K",
  "key24": "4Pz8sJ7ULzMKeuzyUfsLj4YMGtGrJ9hAByt2ve5teNY3aCTjVTGKFrVXTCxkCkFhJhR9hoFSx2oAnzKuEoCkcWJF",
  "key25": "2vYHcW1JkrQWVZ5yJmn9CahhY7f87cRWnJN2WozTkMtvgDJXqiT76S629Q2ntDwLkvg7nCeYwXpscq2YfkXW7Nu6",
  "key26": "4x19j97DnVZqeJDEDWUH5AaR14Xu1cVmg4oRbiKfLBp1mcd6uwPL1fYm5h7mUpstp3twx7VoRveqaT6WajhaDRK3",
  "key27": "hrL1cviCZbegEhj8Q4Bv1Qn7xKGrnnMxTfMUw89Yn1YWZ2qdepidkiJJrnRaVvkridRkbqsXVBjNQpeGHCmhd3y",
  "key28": "GK17twnuumz8rvdM9i5PaWJk41odj5MPHghvyE5cvXSPknz2rvN4JSZzpdTr4BxToBkRsrQFBXFA54JJjipbZtD",
  "key29": "6E84qhxQcMiYcrZDKbypmx57fEJ3PcDnminPhqj8JS9V9kJwbvLmMJMLx66mpMD4NxFnxJgNvDpXexhC7jf3qga",
  "key30": "BFZrNECngrvFEAcomZ9pJEfyBmvnQoa1K67WYXy2SivESF1oKaBjeAQF8YAZDGLffc2uNtJRrnBUcKtTvhsB6LJ",
  "key31": "3uGa4QvHi439TobLRskm8QXT5WJWVRM6hbDEnmWEAFxBL9WLEq4pAg1Gaib96xzWsxBvR2TbEPsStaP7X3wJTRkh",
  "key32": "4h9aZh1svkDWik6v9FsCGVcENH8tLcF2wNd5FptTNRbWNziCSCvq3uFWvVKVLmDkAtwPqTH5kFtEmKv4Kj5BNera",
  "key33": "3vRsce6a1RBPhyCwiHuzfQhrnParoK5Q2egdVeSDevX2S6QVLFuEZS76GJLGAZ62Pm8aF7PyaJ3SzkeK7qZyxRvf",
  "key34": "5gGVjQJd2XjUq4ig47oqsugUjz4d8UCE5Df9tAhr9YZh1JBLpDoKok6UEr8oz6EX2dLA7b1dMGYi3Zjge6wdRwTk",
  "key35": "52va1J9EWMjDL6jvbeaVok5s8HPFNXhVNS86LsjdQqPyDphZ23sMXBNhgJspuuVhu2CUcmwrttXejydeBbFVbvxQ",
  "key36": "2FmCtdoJvbCBKLPeQfvQAen3fzMXmyyGnxwrvrYTBNrXNyZsukNHSUUx4ZP3e3sdihXb8qaADs7LxsyvvKauZFHp",
  "key37": "5BJ7pThkBLpu8hTV8bWujoQhbjCDcqWTGLoESEsmcP8psWmPXHtdoysejC7uVVLhB3tLR2513hRdTAYLHxwQ5fYd",
  "key38": "2yeBSrD2qRToHiBM9KBxriwUeNq1fRaZEUPUmgSgFueS2KZDgALDUan5dSyE64qUTD8FnZFEs6fdnXfYxyq4vahe",
  "key39": "KoTPicohNeWhsEkmBzBACNdwuA6Z2YBgYRRP5ogniP2KC3nbMHRn1jCEfUvXWtxyx5ningjwfw91HL6xpy1dtcL"
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
