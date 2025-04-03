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
    "zAmPDTN6ruyU3sVZQsUo3KZ6kY6L9VCn7jbgur7htU3mBxzqs8BTG6tniTCNmAiELcSXsk3nCSpqvhaT9PNthyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xqcr7mL5bHoGux6WuSxmvm9EzRDNLoh2ht1nkASkrZx8iNXZYQ6Cy763VWQVgzngBVgKXPw3DyjnTFBWdFw8kdL",
  "key1": "2xyYVGg34jGCgEDmobMEVjbj4NhxHWxCt5Vn9raAqDWr4aPAXNq9TvZwTEs9Fa4b9bPpQhr2sPq6jH7CGk5ZVnrT",
  "key2": "52dsbeZDALjasonrmPMDkRzerT5dVrE1ypEqLDXf94KkE3GCvaCBkvvvNvqx6GCJrWyz664b7zWUZkRYzv2QJbn1",
  "key3": "59q86xcZKS8V4C6FhLTPBCceXGzWS6VWasBThTGnQBi7sdQhGQd9kAHt2oo4cehKv7EG9MxGieVNFTWCTBFEqQnb",
  "key4": "49bfdeF9EsGDYuYsSJemcMZp7BVpCRgp3pdM3gGzYjgEUQ7SadgKccB5VsTSjKTKTPCoqTDwdnd3G4wesXfKxeTU",
  "key5": "5cPnJcqHQzw93wdWH1aQJhoXLvsuthnszRuUSrpsCVT7LqiDcJ64Qhdtp2R7xn1wSRTrF3T1LauM7gfhfhMC9B1D",
  "key6": "4o9EDbowaCbNTH1LgufjCUicLvcwbojQs6bShMrYxmmDWZ3VQWtXy3MsTU87DDXcSSLKbsBcg6WzAywnxUgWusoP",
  "key7": "5KYFDwH2YzKAmmLRsRsMrCeRULqJP8GWTGoQvNKCbN3a43QssgvLvaST6nEF6X6baERbG9crAhQkbyepPkbbKvEE",
  "key8": "4abSiQXhg2CtF89BzUPpJAHhGV7vwTNHzZGn1EAzxswXZCsetXEZ8oEvDLgTSSw9n8pLRz4quvDpTqTQ2LsYXdj7",
  "key9": "XWdyYvWLnTBxxGc6As8Hc3wuCY6PdTCzKCmcGnirvv33y6C13rV2e2Pwst6zgijz6WpFZmQRnuBQrDUF5ZRqtDJ",
  "key10": "5oavjXawt4y4v8eAjWTH4Zkdn1o5c4JeNkrZuc8aLZUJh9eyukaVrPquKzXh2LCPG2AQPgx6s6DuZshxxGh3uWXN",
  "key11": "2tVsQVfBAtJ3wWMaegHmwjz7fWhxCChGVqAvemkdfDPpkdrPc615FdiYrzjBgzRay3ofrhMATAXfuHYdqyH5vTGo",
  "key12": "58QZwe7rmj4eAcKs6WVeush3ZTaiCbfnmsprLE1AxPhxwgXdgfz383X3Hot7t7VfUBWhkVXtr51PmCA4uQj7AGuq",
  "key13": "4U8R4W1jx5Rwp4TMTEHX8fmkgVz7t3oSsdy52hgmHTy5dS9rp63V6ysBxwgodScMyCnjT1hzsNc1QbhoJi1AhjvN",
  "key14": "g7BkeLgVRgVGrD67Hg7WLAedjb12BUPTcbFEj3t4xxsP4S9qFkbtEsjzNeh5zWqae6Sy97Wu95XsrobgnsfY9WG",
  "key15": "5RfVyk4g8cVE3N1UFiPZDVtVvVUYUDmTpUoZo67JwwaAJ17Y5ggk2mmp8ehnTa6eTEva4rEYnErx9NZF9xNyz7cE",
  "key16": "4GCAAH8Yso5W3zFcfJTNmqmbbkkioRdw8bHueeFjPaHs1YFfaRdDyugkxfRzkokLfsZtjKUw149RYuf9TQy8wmCk",
  "key17": "kfkk12am78oZtckcEZKL6APbLQsxAJiZXsXp4VHFNm8niQnP6tqB3PsbBWV2Wmh1orAXcbX2gjYanPj9zUUaLTD",
  "key18": "4eMu44gSBDoogxgfpdPQpXPbx5mxTEKFRm3SPQ9ssfuSXQmx2mYe97aQxswoQM9GPf6BUz7ps8YWtLNakUQYSZq1",
  "key19": "5WKhNMEa2rUALxBJisd61n1BChcfTxe98CNs4yGQd2xAEmMmu9vDtP1P4DYXpyLDrT8rAGyWtxKYmEA6yL2SpiL1",
  "key20": "hW5BnCdaYJT56Mq1gCKdNFHqmDQkZNWfcBuzhbdjcS4CxUDq918YpBzmoE3V81q8voJAS5CrAANb7qxmhummD8s",
  "key21": "x78YpkxdCmwGmUsuQU1bNbcBUZDdfJwzWnaj7MFC2en15YTZhSwbujWPvNy7ARiGqVuD1Hw8DRF5Zp4uH9pfpt1",
  "key22": "3m6FrNUhKHBxksAAoH7J2vR9GrXNrSnfQy4oJN5oqvjrcVW47vNY1dqGtKDHVAfbBEM74qazM9r6a842RnDgRrAo",
  "key23": "32NvRb8D6548Ta5veJDEa1xPUK8uKySG3iH1sMqZbmwadnP7aUbH25uS2atoGAAJLLVye3fN3jnk3mmqjGRGwumE",
  "key24": "57EnnGKM5fGeCypU4xdarL3xbzMPqqMQNwNjM2Yp9pnGAALVFL7rSp8i2fetGkYtz4s4B8GiE4TAmJi1hBuTXwT2",
  "key25": "3gFhEgb5t8TLqJBk1Y9nZciB69nSZzmQsQ4os89e9acoxR4tADSBMPyLD1MrMy7PwZtBj6mDeaKngdBpVTCzDgCX",
  "key26": "5mKEVhkVH4Q1TfgnvRBiRdsCgrAWweNVV3frYL1KxL66YnoSkLmNqujWhuBwmoeF7W8anLJwko1PU8jTC6QcoHzW",
  "key27": "3mM1FT4sVnF5zRJaRgAxJSiRLeGtLh92STQQn73GFcrthuXPhXAxDSirKsyAyvq7PVYx5aCgWjKfXpgRibrDyXcL",
  "key28": "4fDriQLivdr3Ww7XLSc7PQCzkQpFkAZY8gWWiwGjcCFK9GjjEZ63VGf8svBHRPBYQN9UHJJdxKBDxfuEc84i75fB",
  "key29": "5J2tChhFaTvT4ZxJcrvxuQJMuWv81E2yXHZ5yYNSVN2DAJ1Cif9YgQZCnG8DKPffcawdvEe25Bn8WcNcJwkbcuB",
  "key30": "2zQWrYBNe3PzXcjniU3wgL5kKzPheak7ruD7GeiLAo9tbpqEAHrsjnzV2HsdmkYEhRipnM5PcCu9nJstMZb1kLd3",
  "key31": "38BcEceuTEDzBTamF4L688foMYPxDPuRsP4neT7sS5NLtc7CZ6eimYpGmz2vypbBAXT4y3DXKriGt9iwmPvUQi4U",
  "key32": "4cVt7TZnWpsAFwGhMo3TuwbKDPPMQgzTCkGehwQnZALgx1BNxDHgpg927BeQAcV6PZwxpk1EzkFvPpHkDURMDS3N",
  "key33": "4pLBccRArNHNjbNn1F9SnCqZQF9X1LUNMnZHUELGZSqAHawmhHpM9QLCQiYYGk9uNzEjYrK37sQq7BVf9LACmAWG",
  "key34": "2L1g4SYLraHF9ihFYiLTZFFLJaSQbZckn9sRpppF9VoGFEX4H24tUnH52a5SSs1bxw3EjrBvtR33MgNvGQKoRr3B",
  "key35": "31Dww2d93Bkp2J3BkNzZkUvsPyJJUg3AMPKDouwUB7crDHqnqoQ3J5bMFpKg8kfqVhtpgWbdHYpZPgvqJKyKJuMK",
  "key36": "22TDsSUbf76amubQFxKpGG4zJu9cnxS7kVKbjA8nNWAFD5qSHs5RphagoAZLSVF7NV5BB3ZT4t3GmWkm5rvyh18m",
  "key37": "4YDyB5ybVujXdfY3WTwwxBiDnyQ2kzwXKC2pYejeBs7uNPghTCJxdLsutHPoDZDfMkyvBWvegQhQYCaq8WuA9NAj",
  "key38": "5a58WnYv6LSssVGBCncyGiNGfGGR5jqMfgR5YDKSGvdiPVsZGQJBpc4KCeeFp4EvFg9pMTVFRAe1NQbMGkKoEWU2",
  "key39": "2SnAURbUdGVmJi8ykcxgi5CEyV3VcPQixqoFMTe3eZpXGRPhMHaeuGnY6BTvQ3hZoLLrjFqHnDhuFgDNY4XaJ8Bn"
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
