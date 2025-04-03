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
    "2RZAKhZ1BCQEj2wwHT6zgGoQL2cYWZNWBgxmHQiQTkL82xNtFN6YM86QKnrEamFkVQggDF7qVVXhUp1PdB9Edbkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qemJpZksWKYEgaFrK9wJkAHe2BkRN39HAzdN1PJeEkk6MBeundZSedeoLVe7KaisPEhiTdgu6SXHPbogEPB7mxz",
  "key1": "62QbkmRQqg2gnwDCKHKQy5j7zoocjAvchKxkRF2a3tamsvWDUdvi5iw1gFdnQSnhMxEs6rnBhWRws15Dc52Jup9d",
  "key2": "2nx9T2XA5nF1gFgeyyXJmRst74aGdfQ2YXp5tJgyqN4qDwsZ5kv51GnVbMCMjPDMUmS6ih6f8TwnBMiC2H5VDJsL",
  "key3": "2KeAZicZ2SDBh1KBzCAzbU9dAu5b1pNCYuWansvSHUUYxSmfWErThbbVsUNnEXorVvskPpiRVy3p8ZFiQeu389Mj",
  "key4": "4PX5v6XJLPYSkadYM3hHZedaHgfe4sc1YS6gJ9AXQvWHwDx3zAtYbrU5mJza9zxu1BqjigfknjdR6zcatt2iFz3",
  "key5": "4SWXoaKUBhzPGU6FV5tAm3iXUsku4AXqG5YUFtjmudqvEXp6ym2xxsJwPeZ3DYLAz2zTJ6jVDuhFKM3TGxKGN2eU",
  "key6": "3mWDsczXcCJdooDKTSYJk76kFNrfTtG6J2xuu6KCfjdX2SVNMVQf4SZzKHt3xgqiHX4h5mENTjWydRx4Q65L9qZ4",
  "key7": "4PxcZsEMFXsGy34QAnehz6et7P5tLM5b4VsNLcDwSaoRKLQXPUaP5bT5SCB4nGCkTbDKx5TLksKsd1Q3XT3fHs1M",
  "key8": "7ztiwFXhSE6gPrjxyh9ANVK5oaJxq3Tz2oTfWzLnTsQi36GwVW5UbHhqcaqYuitQGMLDibFskVvqThKnTGEAw4b",
  "key9": "57vxPAkTGU51V584UHqBff72e1wXYXKZHTJuporo7cpwwCjaNxXfUT5jRpXEjr5oaTn7KuXPtiUNQEnoTsiUPehS",
  "key10": "4zn3VzvFbFQSsJv7fo2AeuvB1wZVLvxHNXTpTD3zxmqw55ic7ZT3ozNz16bjQtLUQYy1Shv5gxTsuJqKZtCzi54N",
  "key11": "5fngqKHNg7pwyNWw1biEzkrGkrX9tv7pkMz14myS1LVa32aJsiXCS7ZnYeAwLR1rjyBUEz45cfgQMjA9BkuSQbe5",
  "key12": "2ABQdBcvV8oqrNte9RQAVZ4jagBDnQR3dgXctDyLEgMyquEpGXVqi8xxeWrsdsWK6aTcpWTZt2sy6gTvRKpGWQTU",
  "key13": "3nVKYLSgfQq4j1ayeuEBw9UFyG4eVyymKFYwyLDEeQcDFPrFeyyNjbVeY8GCBXiYCn2trfUrbQsPq8a7Ed5fNLmz",
  "key14": "2ebjiemqnpzKT5L5J2cTQYYUE5M69q8CxGXNdg6zjecXHAdhnzfR6y1mNAJU52s76VVBcejqE4D1Lu2iyMq8E3dW",
  "key15": "5ypvKmva9EK11z7Dm1Yb5FWnmL7uhWk1tibK4jjyvrFbf7iiwEpuJRdVfGfqXzxM7iHVUqsiTjUYNTbjzVQ1Sqax",
  "key16": "2rCmjspcsoQ6XDszY289r2r8w562bhBz2EdqUnHHVP7L9L5nPan4WrWNtP7kfLZK6kAFqgbDfn4zYKwB2Xdow9dY",
  "key17": "4dSppSaiY3vABeCsswCdoazoD5mq5sMuy8ZbEiggZNxQFhvAGXuwLB6Kx9p3MmP9YNuHTzQmhjgirJ83aYqSgjEX",
  "key18": "2urL5YN5NS5pKadCdukxwVe9i7WLqYWkT9HYAAEBRbW3mPUNsrPuc4C1fMxPm1MaBzqUVpcchCxKYYv34xW5NjtD",
  "key19": "vMwynomyFn8eo9kBD2BByJF2H5QaFdpmxG7e9BmpxrY9TL5XKEE1TBvSNUxW1BPd6bEuLwN6sjrXQoWpBQ4TtKu",
  "key20": "EBwfV3oXBKTRYVTnbddP7CgFizkfTQQ7d7FyHE5ZNUypkePqdu2DBQkMbVw7b41GV3zRDybRt4iU9UJoDNf7Y9F",
  "key21": "2bXxicme2nQk8GZ5QWQ5higgB6TF6GdJQqW7aj3hh9VcF5PJWhJLpoGbegtE7WjC3nENDCxAtryZ7diDxMANNPrL",
  "key22": "4Za8XQZtyBT8jHzN2ZigD79iN5Ayybb6iwqBKyoiEZG8RnU6orMDkjaQyogT6EfgKQanmVL8TXPFZeYJW9N52Ajo",
  "key23": "2snCNT534izM6CvzYR4QSLhf2dJLSKcBmhUUdTe4cxny4amCzee9TYpqyB6jfMV93NjjR5Ni4bMGkxA7gHCgbRNY",
  "key24": "53TRJ3GM8ZN7SQDTxuBUomLXwQvRm31pnwtozLfQHxYVV5Myg77u7bUartfJM1n5ZnSjLrR85eHxeLxS8zsbNQmx",
  "key25": "2aQuSFdpcYyQJGA8cZvJ3HUbZ5XaobvpfstamLzHT9V1wwKsq6opfYj58UWuzNkiAZSWv3NN17zkFSVWU9pxGXNH",
  "key26": "3geAzC1tEMFe9fJqaFQLLwmrevGQZspnSkpBgj2W4mGmSjsK7ieGMrkVoUhTt7ajQrFJmJw9fWqAQMgkVWNEQkf2",
  "key27": "4QbQt1oSFg3v38QhkhCdS5JgbZSdBkZo955FUw5H7SLtKvLLEYgeECUj9BWBdxW6cFwYneguxRPAhEgwDV3dSWo2",
  "key28": "3sAUAr9xB9FbBpahCkbdNLHpgSb21qBtvo8Aj2JUxfWLeUJ2X7EhL6pyaScCwLFQCFYHWvc9bEZyhfGYFReYLhos",
  "key29": "3PwAaLre7c6L3s5Jg1qDirqe5MujRdHjWuP3CbBYdSnm252DoBThh8H7ozubLFqaHkgcm4x5a3Kqofk1Ety6wyyv",
  "key30": "3WS6NYazyjWmGL5vzC4Hf3Diy7ftkyZ9ETZi6uci4a1kmezARpWAp31hJKoYnRWbGZ7UkFp7yx8P4Vx4jzCELy4N",
  "key31": "4ZtNRNUUd8UKXsHx3nFomLj4Dgwgd5YhPRZ9uUjiN27aVGbKv6UrWZr9UPSJdnUGRW1cEAVbn8fekazvYJKLcnsJ",
  "key32": "59DfA5E5wzwp6keJ6pZ6h1eSke3EH9UVndoe2YEJjg4v1mMbzKH15QU73NHTg6zha8intvGSqzaE2FtZY7eG76Xx",
  "key33": "kaykL54rHFACnmMpYPAgxmKUNrZ3kFXwrDXNQ8fo8B1qypcKwTrcVC7V9CfLfAjgTXPd1wyE4kL6BpTLsSmP9Gn"
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
