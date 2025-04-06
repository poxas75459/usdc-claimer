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
    "LDEMR4R1rhQJK8sC1JuAtSp26rk4DuSRM7yopDGGiuJbW7qBnHDNWPmU5ujfdR2sf2L35UcULYJkNmptWGNtXMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZmnrLNJDdvRZdh2DpVZhehtBZfWPWmpwb8rAztNWds56jjrnSacshK9FNUr7Gxugb1Wr8UCAeiVX4gVb5m3trqG",
  "key1": "3RGqoN9ico6dkUZFb3ZV4ttUd8fiia1xAMcHjM5jtHYXebu2GVDNhnC3J4gyBfmbF5s4bfATDDHJkJDwz5oAm3wD",
  "key2": "5EoUjE6mLw27vyV9wWmJcuzqD1dKjRd9mUDgSgNS3QUFKTicdkpJJyfAd2dNby1MoxYyAQgaU6YELYF4cokv6wLj",
  "key3": "4E4dk3g54WFDryN8hJ8qnosZ5hDUtZvzxGxzvpkhJYWPZ3Y9f5y3AmU56pmJniDaVPzydzzs7cfByYwZL3yssqjz",
  "key4": "Ctme2jEvTpzusiw37WXmRL9LFv52uFZzSMbWrEfGLnHKxqMn1Z1s4a4wwfLRs85GXPza6Rmdw8wQWg4FQaDvRbK",
  "key5": "ns8qrHWDdjwggGNkXf4Yugvau9ymLxKJwJ7Ds1wNH9dRqdh8hLujtGLLM4cFM1ZAc9xBHnrDzZaYGFstsAQgd33",
  "key6": "5L1WRYArPEAJhBFFRCgm1oYM9jCmNAnSxTfadNaGjSdhoRZmtJkUS2P5gwgaQmdWVGE9WbPQydHuwHtr138KZaYi",
  "key7": "4o7B62M5MNe2QtoPtKbSghTFTajL8UuhADQ3NTuNnWfCBSUP5XD2A3eY3fTvRkrV4Zo4xMFTY5cdzHgD3TSFazR5",
  "key8": "CscKjhtJM5Acp8mYttc54uxr5titBThiojFbCk5FmvJJAPkVWErc2dNCGuHJg7URJm7tcVNHcr5BS7zwRsRMdfd",
  "key9": "43bEXvwraLuDZTUf4rPna1WZ5UqB8DXxPN9bHjkAG2uUiEaK5UKQL9XypMiFanPnhWLYFfLxjp6eJdJ5CrdUPQhz",
  "key10": "27RWT8qMLKNDnQNSv5k7PX2Vo9xY3mnVaY7b6be5BhtbB4M5b4BCTnEM6DeDyEYStGmyaxutQRxwqUsrkRxm8K52",
  "key11": "61PWgQ1EXJmHz2W6nWqxUb9b1HfgARctTD83AJUfrR8CrEZ17oF52JA94CMqJ2zuzTCTQ9W4CTaBY9LNVgGztq2L",
  "key12": "2E83qtDwwEbX4rzoKyBvdanbpUdJ3D7L6J7NogGMAHF9JVqSdqPqQAr7mVPZcfLL7YkLpxmjq3onJLNgGEj36fA5",
  "key13": "3Hz8KDgJhAkedEvHNEArHvPunsyJqex7AA2MPCw3vPUEME4mih21mfyUdRPpkWeaS3vZfhEZEwqqebAnobhCsYgy",
  "key14": "2Cm2NM1D59dZ4pStbtbR8Yfzvg1iZk81bbFGWssxXEPer74nFYq93mYTN4MgSVYyjxgQUsQHjwCUpXsNGthxJJtD",
  "key15": "2BqReCa8ojbAjJsFw7d1fR3LGBm3FjU9JAWqNDFMar6kivkyE8UtyNwjk9jGqe4KtvWo4DpNVoqM5RiH5UhroZh9",
  "key16": "LDdekbH3UdfauZYx1Zhw1V7XARhsXV8MrbgL1wE1H7pLP7Qc7ymbWu3xec5PjjpnjqWUpLnVz9KKHUQn1zgwrPQ",
  "key17": "Nhktf8Yup3RYCBSY3cWDzMEwgnYEVUYpSZ9QXfMDSnSkhrL6fvFgRKm5CiJ6hYyW9FeH3e4rumyLCoVbfvXwERL",
  "key18": "5W6f7uQLGQGbJdjR4YyoNfJa3Z4jY5sf9YxYSdVoDXZp7wZMhQSdXEZc3pUBBu77Zba8XrZWwg38y4ZL37jf5Yqu",
  "key19": "3cyVLc3TkFoAYQoD3aym58uKV1WbhZS5xqErWpmH7WwGbSZf4zAD5Wjh2T4GYGRquFuFRc8NwjHwGc9zaMz7hrGh",
  "key20": "3yb4tPf68cdp5fnwQDXrgvd62aZudNevVfTsW5pAaosL2hk3usgUkLZiQs5wbhfLcxGpjrJo3Xvxrv2sipg48YjP",
  "key21": "5C2tKowbgPfCqNjGGrnR3TttPSV6auysP13b81z9xoZVQDf5dgq1TQQtwZYRPWj3zZ2CYVbF2qH83YZJoc1YTDtZ",
  "key22": "5RWtu1HKdJcEKHKFRzDEz1cXJzZuv9BrPDXPCUGrWxHB2Rdb2cfF637CwAen5qJ7A2G2CwZ2Gy8RfVmdR6hu8aJs",
  "key23": "32iG8LgCCWkz27UqEsnooPyyQtauGrqcnBpdH96GKzPyjxRmzSSzxrGqhHhZ1hdXbVsd3MDGtd3siaEGyLA34PHM",
  "key24": "29WSPKont2aJxbgv8RHDDmC6cWSR5Qr597qwoQ7EgXo1hZtfKWYebAAvBNwPPCk2dDhN9gwmLoUZpLy5SwhLFsHT"
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
