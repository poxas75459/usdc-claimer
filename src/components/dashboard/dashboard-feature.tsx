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
    "3aZNJyGww24VcjXtGHLY1AMgXoo3wtGTpeaAW9q3F1gGUYszeqBWXiXk3C2M8JmDvQMvRM4fPbMvfB247Wzch58v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3drsSumeLmnb1Sq1NBqLK6pzjYFmSADfcSQUzck7yTV7kH7PzkpnsNs6Yi6HeXp3r6ZjoHkkTyPrj9uJNCxuMWS5",
  "key1": "51DpTVnZ9YsNW9iUwjkcgKbcKuMuRqrCFk3FwiDgmCqZpd7uG4ez3ArfnDd5zDGCBmDjguAVBKj6vaB4XhVNefnK",
  "key2": "27caTabtZMrFcBUZfbwED518ujLqAu6XrmyZEpBvm7qdimEUtMsDJLPEKLqULCF8bpdacjNhgbZC7tQT4tMbkJfV",
  "key3": "669UFkbXTXJ68gxwmWVccy3aNbVSM5k43rxvrXvfunq3nKdgopP5eDjDxZiT4gdsY253ZphTptJcoHF9H42bs4mo",
  "key4": "2BjrYks8sEjMK6Q5ZnB8eJ5f3Ee2fog4K5FhBjr71qDgzf2wkqqoU6nsW6jTAcrTy56dFEWcV5Jsjn7JZgYcRJgN",
  "key5": "cqmjcFsAKNXLZXQER3EDHZABDszBhrvF6sLtxGk3BHmkUZpJe6UnWX9MQEYQSHiZfdXUEg6yaKdtHvKafmFy6Bf",
  "key6": "k2R1KEVjgqYHdhzZ3qbdo57Bo9N5yD9h4xLYMRTdkWL4nkVf2vtM43LBbSVXXKReccqFaD4Fd33QdDv5gKGc6GZ",
  "key7": "3gMZkjmv4kui5RpJkBGq5BPWxQ2byMJdqGWxPxywmqRb6FF6wYdHRL9WowJx2wLn5FQqJRwNBaQEWcwCbbZd5KsT",
  "key8": "5GAW8ygm625c38Yc9mSQCtCu85YLFFhU5B6nW5J8SNcGj6Dj7dyStj5vBS1bsuhDpfHXr5MhWNWxsb4A9tDUc45y",
  "key9": "46mbAbqkAHVk9j1cwPmCKfPowc5Qe9eyuYp5sGdiUxbLyDYaHuhND4xEhrFb25zN4x8mKstzLLdkYvKkgnCRGHKc",
  "key10": "gmw3d3V8ypt8z3ccMWtnT6quSkPvt2i2JTRrBVFWrCJ2gXjX2jbtuT8kZvktV4ihf9iGqs6eTos89DagVWuxErY",
  "key11": "Tx8Cku3Xe2aAfy7tifHAeUHsRe6BYecDrzqbpy72XVhGSGN6DFgQB59bmjQZMBU7zyzQxFmwyrVCfUyTdUSb5Vn",
  "key12": "5CGJ2eaFWPygA6FFxHpJt25DAoge4VhcCpiec8ePuvABno8CZ1Gf9DzBqHPbv47taanvXcVaGtAgmQyea3MhZyLt",
  "key13": "5D4hy3rBKbjEuVAjRzxXgRYyUZNDi1k6GvfU2dXNcdtsrmJnMth6w8bGaJczeLQhxCN6nJsuBrKFQxTJQEB3KANu",
  "key14": "2C6mhLhVTFk98zUDyFpsTjfiEhUUmACGw3xT4MakSTzpYFa9UW3AKjWpbu8swNKbCPM23HxC5dHnArihCAkLMz4L",
  "key15": "4YPwRu1xbZ36nQKhrKtHZw7fDcaaEcgHR7DeuGa3br7igVX39jhzGPkEsKowrYkzfHhc8FHZc8zaMR5TkfsTJXFY",
  "key16": "5Xr3qcGqD59UdMhhwqyNAJEgYW4wdCJ7aWeZ2BWwT82Wywo1hUqXaa59DDYdKQ7B3T65Uoc8g9RD48nik1W6ZHZn",
  "key17": "cxos4F4dz4S6GEvdaZQnMNWF349cXqhHf9h3hVJCBk27Rf9EsWU7LoTXLXZLrp5peNekUUJMy5cL5124dDSs1xm",
  "key18": "2H2SJa2swkvS15xqtviTcCUVxHHiY2TVmzwmyrVEemS5c9zDJhPWjUbHSR3GgDoKTrxrVdxPEXZkUiV8qSqtejZm",
  "key19": "3jzh7zmeDtSrstnskpoc8oTnp7bqM334CpnzsxyDGDRni72zqGHeyuMeynDmM9FtUwaaDtkFEdn8wD56uWKmNCf5",
  "key20": "4nSoezgzXYrx5UjhvW86AiKutyyNmWiQreJsHug4P5qisk85yipRGd18JBtKNAgbuirBnSncpnMxin4jWkahP48Z",
  "key21": "2QrTccLU9Tmp4G2nbfuVhzm79BDSPPHXMUrfyZVBHX7NwAZAgZN3cUEcwS9hK6mbPGunWmw8RL4Tea5NmM4pwFg5",
  "key22": "5HpmSiSKJYwfxaBJ5RBtjBUR9uCXRr5cYKmBfEVihtE3Z5Toh34Lz7RbXwybGkV3pM22n3i23kzum83wvQPyuPb9",
  "key23": "VmyJxYSKygrKakpquxRTNyS85m7UDUiK3JzJkQT8kzAsiDSBzXRuKQMV44KA8YqvosUT4i7UaXAE7JECD5NaMQV",
  "key24": "2aJRZoEycwN4xMp9QYvjR1zj7ncizW8fmGdrTARrPbiizi6s3ssTwB3smp9niEimvND67Jy7cM3q7xP6DAwYyRp7",
  "key25": "4QTv9EqoGFmcRJY6JrjXynx1Jv7T8PCCJwnLwUewduM1sueyBNyTKy4n3f6KnuputCP1NMQzYyg8V7Z6QxGAYvsj",
  "key26": "3Yb8nLKmdGpFgSw2mHsGFMQDBLw9en7YNk4qXNMDLg9sdMtZGNLYQKHLVUBxszS5MChw3hdTzB186WoeSpbGnCYj"
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
