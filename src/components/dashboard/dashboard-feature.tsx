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
    "3zM5zAtiyvrSJzTYbW4tAawpqP36zBu312qMn6Y5FcAGFP5asYVAHk6CgqFex3mVDB45YfypgvfMfoeYAfzThSwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "biYDQ7RyBQLEoRiaK3i9Zqbh69jDwNk5EE73YcM6QXqdNM3SqM9UouYzx3tMyGSskyD2c3F91Wgd6w3nbWUPKYF",
  "key1": "QXofthoGZPxwBG9dQ2AJpkM9BFu2fCcX9DuYc2phwDNbbRHrYxGqyNRmBFwPJJv853vdAWz7UhVB5L6ruUYBZ6g",
  "key2": "5YVQCEc3RytrrDHmFwxvzrxfxNfSYbdGLsgtjbiEqrzb7vY66ewCz5LoGEQ2W8R3WC7XyvN82myGivrPuqhjzRwF",
  "key3": "5GDWrqLZhyhUeCvd4zd9LsX3c4EHUG98eqcTSRAMduZtn1ynjKYw1TxwYbVNkX92yuFqYbQaJT9YDRmCxWdYyAnB",
  "key4": "3sMDoe4T7REephVWKW2kBUkqoKc2uD6asGj7EwTcaZ8rWG2hdGTa4WaQQR25j6Bqcy8zegrw7SpA6hY117WiotcF",
  "key5": "3ox4io2Gumo5Meu2VssGMLYBhvZ3Txh5Ybtc6BEZrRDSb5wpXu7BpiBDkAB8XN3fMuBqLcXQnYJe6qxTRJPaN7ax",
  "key6": "4ZqWR4jRGSxHW5fUzMR5WDRvKXkWGVZMtm3NSKLNDE2H888zHKfRD3DNrqFFG7QC1csbXD8kL5Hg9XpySLftL1XE",
  "key7": "gG4nm1jY2n43NtJJ1w8FZRfXSAxs4DjGoJgDWGd6n1GxutUZrnQtmQRLSKQRuWQuB9WaUPQyiSQoYSVHCPvxeMv",
  "key8": "5uoQ6AQcYyx9UvFgXszt3HDMAhHukvRtewwwE1P2oveN2QacER9wbDNmQCuxj5erijxcd5p24WMn9MshjvpSTaXm",
  "key9": "3u1FTKzipTg1fMxaKR5QC9dHeqvYWEw3W4dtvMSqdm1R555gb4pkZSemvv394SijQAULqy5vE7Z7Qnk6Hck7m77H",
  "key10": "MsuWinrkLgd3WTpsNUw9MGafbGp9SxHqzHHrVVYRQ3Ur3XusmW4ySc2jh56F7u93BrewmD3VSxWyTunkxwRNhiw",
  "key11": "1ZCvBWLpRv6xo4JZmrddYaxevPnxD8ZATzED3THzYMHooBWpkkLcku3XjFMftcuZSWMX7kbNdJtEeMGrN6kwR3u",
  "key12": "3J62TK5g8QWTQNFrHaeUxB4weXZZPJSytr27nCjwZpwAmWKQs7po7m6idBQTAWGzgT1znrKFYMfFwR6rRVZvzywa",
  "key13": "5eNtUjAHmektRcvRT6Qhk2WqFxcDdnDXfQ5qifnypKQMZsVMbNQdtDEd4oxBASxmaZuoR6Ts2kGWX1Q2zSVR5EgC",
  "key14": "4hdBxH7jeJZHWzxL4aJvz45Xj6QCLUmbEtgEkbGnCvdVNpPnpUAeQWNMSUbisSaE8fYGwdJDbwDULYYLLcb2Y6bp",
  "key15": "3K6X6aUoYGgNe3uizMSpUHfcNixFprBJiDvrhHVWskSM7afbwgdtZPEbmyz7BEDu4LDW6MrmosKf9g92EMg7hK5",
  "key16": "28esxWUK5bx9SdHCjsKWZThghsbWsQFdXj9gjwRcwecHeDXNnXJ6edie7Kui8Ws6Dhm6ECxmKp2A2GhNZ1SVmJiG",
  "key17": "3eT3XsZNYpBdRDYyxX871avaBdL9pEs3RWiFWQjHqgbLQFq7j3RdpEgoMaUZUZpdqxXJdBCQDpeGykk6HfdGDacZ",
  "key18": "SAih4gKFpq596yiUC5kgyjNSxchwt1NPK5YXqZnUqyGJCGGi44jnxVKc5X2TnSmGSX29JGLucWVJq4vwzzyWwTm",
  "key19": "4r7yA7fvwvnKPCWA6n2yRgoPNctdjeyN2jyEaHbromGRndMSMCJRpHYZcPUgS8V4F7ga2M3SFCFEkM8B8tFU2bGE",
  "key20": "x7qZe9zkpyCScErLpCrgDPn5op6HzGw6NMa3UXbAj7y2CjbcpgQsR51t5qi9RQWTtuTSAgCK6UPtgbY4h4zrjaM",
  "key21": "2JNNLLTve9Bv4xi1cFrCPyH9o8v1CcfdBxrzqKSu2E7edmS6Gv1tgDey2KNxDpTVneEa2zdE2YnJiTMRYaEDCApX",
  "key22": "2LqwodKuCTcHZGAS6m45q4zio6q9iVKQovULi75ckfyFxTByqJbPgEAs1EsEZNiaTUJmLH71LvHwJJfYDrJ4YaCt",
  "key23": "2vrpVvCBmiuYjXpD8cgecDb4AJ8miTCQkHYmb8HHx8PEnbUDyRHUuBQYeEtG8SkgpTBozDowFGY1ezj7JHE2mGp8",
  "key24": "63DxyLFwgXrY3fVNs5XsnT6w6y24fSAmoRW69tekMPAEc5zQf8CYz8qeTrzPnUBZauoLNSqJU7ANh8RoEXsKoscL",
  "key25": "5tuFe2uYzNnSJVHgjewsTwRNZmDMqBrexSZVFpm7PQ7ZHw44zuH5oDYh8UQCTqjKaAwAhDNaCr1rvucYmpsiGHKK",
  "key26": "2uLu8TJPAmnAhSDFVUBBEC7Z69S8GJnTNuKrobkh2cpTeekhjxaMAjGSEwcM2CgbLRriY8axhmRa82h1eXPoqTTi",
  "key27": "4FwebccSBjZsRBGoeAvG8TsiF1hACX4YMVhsg4nne7myXajzVoBuE7rDFgdqnyg4CMotgrZo2e2FsWhqXYeHqNu4",
  "key28": "4FfZDPQbx4ps1WPZxXVVLpP2pa2G9LUdJKrkXiFLa8yAGQogifL56Ayw7iGy4DtybJDgGKgVkgmgCYcXPNv86ukL",
  "key29": "2mjnJaDMcaDBzhS5CtjgeCQSaAH2TsUMkPsGDbGeR2jgPr6YrBE7Xg4ANwt6ekPzcoA4txoU4o3LYBBgFQQmFtU",
  "key30": "522RNBPSZX329DQAjvHZf2jiDAvCDMyTxeVmVmscjRDUHoTG14YWGE5PeMwD4GrYPARZSCQC559heHT5ZjCsfYM",
  "key31": "JrBHfRxGsAPhycsF9g83auvzYFZWq3z6PAt59DdvLGX32aS3krJmuLmebEBhqyhaAsDFLK5zRYakiFNrP5z5qHG",
  "key32": "5dgb8BcsRaf3kqSpAuG3GtUbR4Yg7MPsp5UVhABssMMS1nNf6wmnQK5zhMHXYCQf5HyT2fUVk1kWQdGCpgjwH6pK",
  "key33": "3pXzDU8T3cMomdXtNqE4FvmydEeq7WyrZY53mp5TUTEGz9hMs3EXi8o48M3e1KAW3qj7jj88jLW25Bjs336cBKQJ",
  "key34": "3vwJTx5r75YJUu1ReJC5x9hpBf48XnDBoDeSzWQX6mtf2RBfbnH12HyrwBkDpHVCb9W9ozBaBURHKg5FuMjoLohC",
  "key35": "2TZB5E4EuZRZmVtwTKvNwcafaANy8g1TCu899hh2PVLJwDyiMcJeMCgYMyro8us2VCn5mfg6Gfp7kqz8BBENPZ8Q",
  "key36": "5pd2HcwJURYUYDHSAqbwT2rWzhaaUaUqXmJGgcPhbKy4v6LHB9qH9xce3xe8jTKLCverEEDULn5HUKuFL29muQLi",
  "key37": "4XUzR6jGvhz9ftTPbf9QNLU2DV3SHF3pfYPxi8C9PDx3ny6Pdv1RkjjZVSSdYisUYUUfsdgviMZNtM3QDnfSnxtX",
  "key38": "5wsx6st4VEJhEagKtfeBf7595XHXFDFQQYDj8MmSCdHyRrNuBtkyaQZVirWUCBLu38xK6Kf4RnTj8bPK7QAtXi1Z"
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
