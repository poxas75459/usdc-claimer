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
    "2PsFTpAupGN3mLkZwvb17DiPdJRWpjByHsNhsLa7ar5vkXmTcY36JFK5M3JmbY1DQxFwbcmxga5S53qLuX58WKkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mjEpBNPApCnWFona3uX3CVZr9sMXGVCzcLC4CB1tS1fVVb35nYnSSfacdwZhMoPj35TDP4xkS8cp7rXXvvAqyUy",
  "key1": "31NLmj879nqhJjJpoa2HePFtom3N7YKvR5zwrNH6mJasknsMpmcPJR9K5CHUkmxLRDFZhqt3obAMqHHZG6kMn93U",
  "key2": "MobRprrkPXbs5rsK6nNoMnsFbRd33CH5Az7SuF71m5Qm27bJA6qCiH7AiuS5MTWNdfw9RyQ1RD58QkboYi7Pwvv",
  "key3": "5sKAAFoK5vZ5pUZpGCtdQwEPLSuqXNHPcrioNtsfQnQW3Uin7gw5wT3bGsg7EnQdgyn5huZ3jooVAciJmqisqWQk",
  "key4": "2dTpvGi6FQZCKVc1u8bAZzez3sG8MBZqp4x5Q2iW3t7rhCRbsvPv9DNxUyW5DKf7eQnhbjQrfiKLuwZ3Q5HowN4D",
  "key5": "2n6jWypy6v4b5BUy3rnJ2KkQgK5BhXeRfDsW26HtQzr7TSyPTcuwqVMHVvmcGmD8CssoNHpMsq4c6ibA7wtVqqUz",
  "key6": "66jYmLja4cCP8tvAaVXC1BDF4awP81YZydBf1NMpddujQCZhPmmsAzoGaJ25mXAvC5PDdf8vJiYyM1gUDmANzpVJ",
  "key7": "2EucDfNmsmwv5HwC8Cxg68xM7bPVhG8UrzXLJZ9WBWJzea2otRv34AmG9PHKJ4TuSLcFZGAwxoq6m6Etj6bMXFGr",
  "key8": "3HXaBH8RtpvsSUGb5cZpAi32nKNST5p1DzbxVnpmRCpQpxUoRiEJvgjJPgMuimkGhMiHNto4oKhi5dEAxnBQhQJg",
  "key9": "32KkYeU6kBo1aCbqSaak6rxhBwXNKqcnwjZ6LBGHRtcjqpMQA3GfsVGrGgT1WFCfJqnXqQg7y9V5s5qkC7Wzph1m",
  "key10": "EuVzWMThcf7ebjNP8F3uPNxvGqdvJxwqDBQf7TTQc6cnR3cPUUcynTn4UxKQZq1TXVKUw9sLWKHF7EKyHTCtPC2",
  "key11": "2D7MzPgx2gMT34xDaWffLkLhVL1YYUtsyoqWJCHbKVBWpBVg6gENT6HbPjYHKcdgydsnbmSxn1TRFP5xBV8ihd7R",
  "key12": "5Vgg2DM9gc4cvqT6CcW8WeNqgcTQEna9srg3syFRiLUxKnsTiANFz2esAwyzk81dhdZZhHTeA9WuVLjqwxzhjhFz",
  "key13": "4rm7k1CRhgBGYBcWx7BtWU4wRoTzABQVxQXbqEPg4aUkq3ZHRvYu6ZA7UuWjQBcUGnw1WECpePzXfUpEu78ycwqj",
  "key14": "22nDFgZaRwFMAu9qURKzfJpXb5RyFDUd2qVnhB8P5fQvUFNyY2MHuauWtHtiK3d6pkDHjzWA8iXwj7MLU6tvTVTK",
  "key15": "25wQmXz7Zx3XK84JSddBqvq16YSxnJg3wcwHSXkDLfrW2ynoJuYDqHWKgxcLRbD2YEeupkpkZ1Dxyq3HL57GqFvC",
  "key16": "3yeDSx7QEoAzjPTfjCxhy3sSq49xe8PSe8YLYNwapQ988RWs5mai3RmSSTcV5Loo94NiXtSFgvsZqQCEj1RLdHXi",
  "key17": "5UEh26YMVdmKAsu7B3fzNxQpEJyKieGht9GUniCKUxUtWgBbTWftPFrrwPSjrrrL7KSTwomZSU9TvrQRD7FmHpAM",
  "key18": "4grnfhKAAAswMxeT6EwXq4CmRWUoqmCEJqXHkdqq3wcbjZWjCPRBw73goeP8BmoAEYEQT2cmiuU2UXJPU2HMj25f",
  "key19": "2wjwuADz1N9EyMh3tc9g28T6BvrtTrhYSuJdQwVUSGr9G2g7uZZNuuZ39qwBf5rh598pFPJVFzbR5ajhkuUBrwZU",
  "key20": "HtgqfKSgGmaVk6xMinUWuyNPf3oQjU3XkWPuB5gFULAYs1JZxLAXw8ktLvczVQVD6HQScKLb695i5m72XDXgti7",
  "key21": "RroPps8iCQ88F7h2do2w8B3mPnG18DAWWEKWPmNhHjDjVidh7nCa5xYQMztMkJfpUa9YdruoLVrueupg1KsR4BD",
  "key22": "x9AGQbNPzy6v1D6aUrqmWiCXqvaRU4QkjozSNtePcC9eLUXeRNgQ6JsJjxpBih4YC1oedEtLhDnuAPqaoVtmhc3",
  "key23": "59AXtmRokFRa8Conu7A7ZFcgh7t7MCJoZKGoupekScvgyahQJZB3xDf7FG2isMEvtC9MPG7r3BbgR2Epdjyb6yig",
  "key24": "4n5uL5V2irNVwd7AxhvxvBPwoCnyszwG8iE7pcwfwKj7v1JrwLMP8PrsoLwJxTCHx28W7BcfQVXgJN6bn46YrVbf",
  "key25": "2Ku3i68quPfaEquNJn92o6Qyx1bCzLRVe5iokWUHn3NQk1SbgggL6eY88yzaE4U5MDzw6XY4CvJqgYi3MQLXuHv8",
  "key26": "2NTwMMpRukzeurdR79iuUKViCb6TJM8TU9WZ4wKXV5mcMVUXAwdEWy7geDJXG4pDS213ZkMNSS1LLCU8CmvvBc2u",
  "key27": "5t5JK3uz4XHBFjTJSiQxpQhaTLt9SZ6Qz46BcNT7MB8fqz5Etcq2s5FGmkXcqzXbJEvprrLrb7X3vmFSDkiuzYvt",
  "key28": "4jsMLWUMa7EMfDv3auHDQvw9XvKoUzSWnXLcK7823z54SP9hFLGTTMHeWBixn3TE8wJ69VNcx3Bz5b65kVGXbnFr",
  "key29": "2eMDsA8RCYzYEe9LJAf5yZUNSxeSwCb5XPB9NgTztJNdPVDYavDRmUmhSpDFk4e6GwZv5HP9dUGDH8Cy3nvEwUpz",
  "key30": "5G5p8mwEcCEs7KP3zVrmNCAXsE7DaS4Wz1ENskw91ZvrF1HypSqREYcxZiLZURi8iS5Ucfj44MvXpnLHj16x1mAx",
  "key31": "5nMejLV8hybTXxLv1musC2bNnWxKi2XK9G9iP91XbDvMFL6bR5avR2MNXFAVGergtAikhppECXyVPFqZ5dgeQZqL",
  "key32": "5K9xgbZ3oPpkX9ytkgfMxBv83HwCHBApkRK4ydTPncnGmSk31YZc1e29DSkPs9WmU4fBGhJVZE1Zi9CiyNsmzX6X",
  "key33": "X59NeRqqbgFGiYEZV1GgqJFi6K9FSLtQ7HknuvyLBHweK6xMqGfyTbVQGdaNo6A482RDgVPKmkGW9NbRrcb44Pu",
  "key34": "21fWJsLWEZkZHz3SuwwWsc9n7khv13e9QD6PrD5wG61R2aLsxD1GL766zDSd5vpqcjaNcddf7TQswFWgfcSZ6mzu",
  "key35": "327Lk69HdsXe1ehFFhfWQ2JEbq7gMTSFZ783YNT8QeLL2M6tTorXnddLaSTqPHuYaMbEGqpdn9krw4Gk1aUj6zUr",
  "key36": "5pHUfXoQzqgZyqh6x7eSK2UCY56198Nt2LcnRPrmcaCydG1EFtSKS7jhm2LqbNN2sMse8Lqh8XcmvZnLoRcLpzBf",
  "key37": "2zffRETXmjAXmHET5kX4vsRKBovLPTJcdpHzts4HHsAcYFxbiuvK21HKVZhbLDfay8wo1FJG2twkr3pufzD64HoL",
  "key38": "3gFm3UqUmbgbaSr9wL3nEpKhe2rgFaQhTLkAkFVZkCJrWnenuUvEMh2X3mcEAwRYiAeJQRG7dDNWB28VEvrZrSq9",
  "key39": "32NoVMQQ5M83qrCeMgUAMuLVAdPXmsESxQjE4yVn3zYb45UjaMBUvj6S6KA4Np43J5h7E6rnQJyX1N6udPFvZ3Py",
  "key40": "vxcwyFWpwRPDBia8Tivdgqx7Peyo3m8b7fBNCTtXKtnn9NU1xyMTUCrJonyMc2khXvKukocZvHd1eZDngFvtpHd",
  "key41": "2q8g5vbxFsZJcL8MxYpfnKVxKFyhKnyk872b9QrpiV8eT3kAk9mTz4PU8qPxvVnz8LArEuwQMCrN4gag6uoU97oB",
  "key42": "2Mbawb6eEx8gVnnCHsB8rwtoZpgB4gXctDNK944unq6EBe7CnJLK71bTSvtdggx3GiCxiTRyXxh4gEYzAvjGaRYT",
  "key43": "4mfP53UgF4dWaGEEUyaaF8Uthfm2MTgkUHoAddTxS7ratXaiGe9XJXgFsnE8Ns2ashtsEPXNGVCVZGkMLUQhzbh"
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
