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
    "5ubLfY6SJyS8i18b7Poynbcw8uSxL2f1hr4fXYfZFChnxqQGJTKeE1WV5CLexQ4x8ficgMcgfUzHNgSKsVYjYR7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eniQtz2r1zFhQkkEiRymmXRRHhR1pAcP5TDD94qsmqz4PmWmXDf3vsfz4PYt6PypWbxUTpYejGKZdHWknupGZBH",
  "key1": "2JeWqqgM44MuaS3HWBGU7Z9Qxedt3CcLXT6NdDZGreKp9MysF19gjhtgsWLqVjDudH1r4cADFDdNELkJwUquRUFx",
  "key2": "5cNrAAFwLUUQi2bS9UXJHYmzNuWwzzQkb5QKZi3VizgCQfAcyvUbtHibEuQQzP6LpsojvUdLpwr52u39wPQq8ReT",
  "key3": "5CkmoZFUxGZg8E4hnbrUvUqD9epenzKdEFAhmivpFqbkVechZhYNVT7jtv9hTRfn44n7ni9rSvBHSBCPX639Tmum",
  "key4": "2qJZ9qWjg9ftUn6Xpah7Yg9JMFn8qhDuAYdFEpuRG4QsFG8stoq9pDhpKE4DsowMjUPsN41wr5LkFusQL6xxfDwf",
  "key5": "3Z37HtEUWnNC18Vo81HnrL7BVVEK7nUydxPP4xdv16uf5hRXvQfxQdVA6KXGoNdYiz3xSUYNEeWxoUCadruTWnN2",
  "key6": "SqV9AQnrWZ6Z6KWgJTGhSsYGfp3yMJ5uryrsNRipCPuTtrXkBijjJerxLStcaUGCkuZNQSzH348eM6uLgFbRYH1",
  "key7": "3KeagQBNHSF6b1GrWXrtrTe7S6RHtuh9QX6E1vFcjqDg45dyYzk8BW4Ynv5euX1YrwPpEeUQ4tezrUGDb3tCWxyv",
  "key8": "5DTzGfTT2CpKjeg9T1VxDjKpkZzkc1N7u1Py71qFruYLDBgRPMx9qXX9fUhdEFjE9yGH83EtXD4PgUSiz7i8VYcx",
  "key9": "2M5k9h7bUdsF7vopFXpH1DLMLgM5bQi11AL7yfoJWunXhDSZf4Bboi6oaEdDUVJtKLKuCpod1udStyyKzoQanGKH",
  "key10": "zo6uaVmSy3LW33eWcvgGAjBemkeoBRgHs84QX47JLE9CoUYh5yZ1nPe61uc3LicVHb5MzTDQEqQJFHjFVDYMdGg",
  "key11": "382dZst6Ti4JktD1YadKnha1TmqfLTMqFrtHioFbaYLYh1aLRGsozMg1WxEr5HVPod9VztgfH4S2rXZbSyTNVXeH",
  "key12": "5tZcQkhAjtabQZsNi279UuDv5wirBTiKCneMVrnb3w5irR6AzNLYc1jutiPqoi3j5KzbfGDYECdQ4oFBaBdLBjbC",
  "key13": "3ANit1ZEBLvXk9yYv1EuXp88dzHnd4g1fnVq7wDuVgMjXw36ambJmwbyzVTSfLQUokcMKkDiNuLLinKbWK3RMBMq",
  "key14": "4UDucYXpXTWsB6UmLKbzeT8KjUR5JMUjTrYcVUezZkuDCLHQbByHLxjQZXb7m2GBqSwgmQwWLwsitj5us7Rvmt7w",
  "key15": "5rxZ8rdGDCJTzAnExWtY4C3DMXzhVTftBUtbxjRdGDyncmzTP8sgFjQicjhf4hjeTh1n8dttRo4KmgJrZCMK1i9B",
  "key16": "2Db3vyqwHmTmNKsTAanWMqsisVaokAzbPsNNmkTZPnYFE4TpHrdWPLfqDCQkXUT5ikgaJLny8BPZ5YeXrvLynMCg",
  "key17": "S4pkeVcgQ7FHWZthWoTWSsNSAkd7qYYfpBX5BdqZUe8Ft1YHWvgTWNpd6H5FLxSQvixVBv6Jpfzt1y8r5TVvxMy",
  "key18": "4a1bnPbRTKJ6rdZwzP7CWqSS6M1xUHfGgnPHDuw755aaoekRAXEfDz3DHRnwxyea6RbVJPzg4efwF6A8PAGf5yv1",
  "key19": "44v7DTNRjCNodq5XawbTeBEwPfR4tmVdW13LPAJA2419zQxe3uSVNqwJq8a1811y8uKK8PJubaqT64JSjxwNR3MQ",
  "key20": "59rWRd9csvAkSY2gUhcXgwsE2wjZwgRRqshGLca6rfUtoo4ztLnbQQPyhgSfPAy2XALcPoKEuoW35U1zFqdFG4C4",
  "key21": "5AzFiwMmLj5wYdT5N4iaraaczbcpRgH3TfzYooHdccB2ujKFx1mnDvhUmjeVNNRcpJMS48oGtum6BjCehwVtkwzC",
  "key22": "3t7iRCQXB3tHkmxXL9zfJFYJdMqHJbkcxV113xbzzLMqCTP9m3wrktAhUEDz5YLnx2GqKQNiFdudCYgU6F5KYCnS",
  "key23": "3zW9ufFGeqY57xkZWGdUeWS7BMJCfjSpXyBNFhobnKo2WSyWAGfVSvyfWBp8aHmoKuuxRG9iRvLqD61PE2nz6Tiq",
  "key24": "7jXwePfTDKgz4V9HgiF2ifc7vprGRzZSGY2TuYsH2KGkpEunuVi8Cfcm4vP2Tvi8fb4RX6h2xpC3sUiC3A1HKLe",
  "key25": "WDR8F5bApBfVVnjFySkNebKaSZgHxULDC48qLQypYiB4ZeF9CjmvHuiokwr6cfPbbgr3LvfWA9CiCE1z4ewCmJp",
  "key26": "3BvFfY29ed3roTqBe9UPxt5YnRtaD4VfKgpHUyosuL2czNhDuxpFrH5BHh56Acr61CAmm1hYDvhwJ5iGuPmVU1Xz",
  "key27": "3nqw6uh9E7Vtpd98xVTcM6Hphwz7eMh5RsCLwR1XGQsBbahF4xT9wub7dmSnVxL6tUDnbysTNZqwi61FvAnM9Beu",
  "key28": "2L7JrKMP3Un7g1AMveBw79cMegnaeC9oaSWZT6jVf1HEz7LApnwS4ykG9JTVqAepfGkA51r2sc1bFHuDYyUyg4Kc",
  "key29": "8sLZ1Z6gPXYMgbiLHPsojP1AdzWEugbe9PRB7Ufpin3um6L4WuwTc4ewGP3u6w1BPK1n1sEcY8BgxMz3cEuqRNx",
  "key30": "4qkxzxJHXbvJQtqPqP12QpBr9NjYZ7BVcqnrBpcSFV84uNwCdeaGWbJufXNynYEa6i9nGpRBmSVSuw9LoBFz4SPC",
  "key31": "2xH4zFXGzCEb1DiEHDSjkpq2cBsKvHNFXopZy83ngMXaryUss2xVDTnHPQzhGNgXcrtH5r8uHGu8r5KAPaVDt7jA"
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
