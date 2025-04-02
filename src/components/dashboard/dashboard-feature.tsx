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
    "4nT5pfC1KNXeDdsuwZCVN5WMGbHceeBdUG1R34TWvGDEidBCfKhQMU7BRKFNTv2bwhZ1Yy8d8NqyTcea44asZ4U7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CMbqiymSuWVVBqzD6LjPgGsTcCVX5eHuyW4RFEwdoDChpuCLNzR9TgJAzmoRLUdguJ5AjSPLwdk2nzcdVJHjiuH",
  "key1": "2KrRF9LWNGETZwk6hGFuwEKfprnV2iBXZpRGAg5vtxMCam92c9moG7PUqTx9Huqt3MJQw2iMpsurhmUWQCyzeJvs",
  "key2": "4y3tw7mR4S5sUiD5XyXkHFy9XB6Fh9ZzippZPkm84PnaPAbdwf5DugisZJ2XgmJ7u4j9Suxq3tuKXrzTqQ2Trjoj",
  "key3": "22Doo4FvfBCy8HGy7WJaBVqKhrTa66cP9nfvRyW3xiN5NuiEo6UrYJaEGo3Tw94ja3RReert1uzUUwk6Zm48xsqG",
  "key4": "59u2MJwCGL47bvK5wDTE1gc48bzyK7iuZjHiaXurAbMqmcGBvDKTQbPVx2mgWgejJUPHpkZ7yKHYdULJmBc8VqN2",
  "key5": "57WvuP4qYiCYD7wyKSyJEJX93wMg4HKPT28w7Pt5Yge2zYVRCZVREWiNgbPWhZFCQf3hmV7whdsAn97U2T6e5T6Y",
  "key6": "3XJw12MXqUiAUX5c4vhB5RWeSsVXwVqUeAnmC2w9TExB4YrpJZyxMCPvDhRKffK5kQfmros385J6qfTQ8rX6rnXE",
  "key7": "W2WRXerPR4mm1FrNwZ8QyEeExoYifNderZUVDLa72KUfD1jV5oiK8dmCWrY4aNeHvsZCUwgQLKPK72B4KH6E3FP",
  "key8": "2tTNuvM41FbhNzQvdwVZigRJZMQaXDqzPziEaNeF2CQGib4qRZhaDnnJGsx7bNPWMkx3KpVJgpSthbp7S9Csdg13",
  "key9": "31k59MJeMNJyVV5vDSc6s3GnD2PwuJrLYvYQNKKqhAU4UTQakTzkidwwmWVLjUKAFA9NvsKnveiXmFXvLsFJmW8F",
  "key10": "21jCn64QEUbiiXD5tNnjfd9Mv5tnUGsBjh6Kg8jJEGa6UkryyM9gUyky1d7nTWMWHBJC4gY2d5AyonSQyyesxWfN",
  "key11": "8W5FqdFP3SFhqXjkW8Er2pfqvMBCBH9TkExxzdPCcerLT3iWFMyt7BrtXu9DhUv25vATAFft2D3JHSVmeYrB9vd",
  "key12": "3ZMcKkTdod8mLXdsz7Q7xAntGWrDJAb5MYmeb6SSkXUvmYuBRjXGW9pgRVnqteAmnpYJxia1g4Ca4pyAeGg4PSvz",
  "key13": "54ZdztYrTWpqg2ghkE13CThf4kWiW5Q7TBPUNxJD9PDSJ3MJ7HsEbvbkko4uRDVBWH9cjJNDvFyyimAAKnJjwvZU",
  "key14": "4Ek8UK8yZmLRZoJENtA7fymxHmjXwzBzhquCbmTRwNSFQ11YFKSxLj9aFvwjzbnKrDQwbd18iFd95dYztG9Ar6Mi",
  "key15": "53pjpYsaDofjgLhxvgxPrwwS3W7ty2cjm6pFp9yJSd427Qd4r7eoLcDVsYFFgsT3NGGtqnr3ERXqRSQNGwM9nZ7F",
  "key16": "5kr2tv2Z52B2oNofi7ZKxgoNUT4dk8oLXuNkaXuthvEJvHYFc5aRspM3vcabaCtYyx1ncbqxwFEL2tot47AabpMz",
  "key17": "3L1Y9SB4k9wM7ZoYVcgs3W6J1ziMviJHFHh5wk6hoZKeffBNSTQ79CWTqKCB37T1Uw4fZCcN1ChV6tAK4EJhR9WX",
  "key18": "3WvG5QcFpg55QTDZvkoHqWvHU2ogA6PGLVbnAWpJUYYqB835e8je9f6u7cD3e3S4e4RToWSC5cDxnMZGkNsxABzw",
  "key19": "4WrM4aYSKc3dHvxyZ2kubsSDRgP8oMirt58kkS2tZYioiCYZhTKPRpKDAakYhbRAP1QkrNihj8wk3vCSFez6f1fG",
  "key20": "3aLAQWBEq4Sfwd7PYm8FxSuzUZCJrpoDhQyHcedQ337HHmWUC7uUumNSAYxdFc9r7pnwNge5AVD53za9ajUvrL5x",
  "key21": "5F5Ho52aQXmDKHqRoTPo768785onEbSD5JW6SmB1WnhYLdGWdVjrGH7KX1qnHb51WYPYzs2NjGnPD11smjnpxgtk",
  "key22": "2z53HzQMyRHsZzi1vvPoQgLg3NdsAosV2YjvAXjhUxd4WnQrE4J5vE5t7H5asv7BAKfSL2HCziE9NDrL1AGwoZVu",
  "key23": "4yG4S96GnvAXwCAMSY91yESU6AyC2mwDVpNUTvC1AWq4fAEuaithr7y7aA1NBoUK4GJeaDS94TbZZbQFxywghgkz",
  "key24": "w3MA5SUM3o8jTd7H7ZEsjjDaJL7kaKXVxWodeAw3hynWbkMKDBPRDZBwMMbeLSQS8wXRnjidzjDaZo4Zyaua3En",
  "key25": "3H6jm8od23QboU6GXzsVzPe7duLGwgH2WDEZoE4FTkzZ2WhZyFgyosJ1LpD1GEJ93aEqy6tqAmwbSGjhDz9ZppXL",
  "key26": "2HHCcQyAgGS8nEyhR8KEQn88SQJ7JjdV2UfaHtjyfxRermCxf3kvfaqLvxrF2BYrgggpXtSJA45eq9ygHk2JWJf7",
  "key27": "5GSBeKZLuYat7v8kisd1WGthFbt15ecs6fEvCHSmBXJAca7JYsd3cwVw81TXVcuzQVaUSiY2UPKhS5TNB4QAxK8q",
  "key28": "5ABQ9NuUj7PvCLiMsjLAAMaStkREpjM9tKvCuvB4Xo3d4sAsVuwt3McVWQf76rA67T6GKR45PT3NKwbQgDusjqtL",
  "key29": "3Gnt7K7PZcaAThs8WbWvhzpGHYHWqwtY1dW4A4H3bdRcotjKNyudHCpq3Jto88EkSe5Er9FfuWJnuS192eXWb8Ar",
  "key30": "4c5vkXyM2Kxiz8NSeNQ7mx6YST57vxepgjrfHWcRfXun1fBfrqqPcryvEm7CX1F6qLD6akWpxL2kDZVz9m1DhoA",
  "key31": "14LYo7Q3mkLoMPfyHTYDUVQomXVzK71x4P5HTbavsYxjb7BLNAivioJsAeXELaFUe1WpxZ3CXzWFNimhrmq86VV",
  "key32": "8r3HVrHTPvR7UCaAe1b7tu6k3nvUvb7HUP6vXFJNpfNkaMdyJWAQ2dCfXXDJkQjCRuvfQxFynEzi6YsJboF4Gp7"
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
