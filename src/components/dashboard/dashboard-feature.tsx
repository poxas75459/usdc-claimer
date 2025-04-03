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
    "WQp8b7AfRboK3PhexgM5F7xUFmWRX9VHD4P616e4eHJg3WPMCLmyWTqas5ZBm9XqcncAYKC2dc9AwFnQEvfpdAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dpNrbyZxvYSc21NXzkMQGFzqkKvoAGW2h952Yst19AZA1M7PiJbpE6VbZKe3wZuDS6YxE9ABWsEZ3FynBh6oB1P",
  "key1": "4iHJUrXtCwHUMKJW2dBYRJnS8xr8VuaJpbt5Mr9hgvsXhegG2WRDmE6uuMhEtqcPP9NBcAgFyMgQjPHKmNVJnN8Z",
  "key2": "2mg81cCqNEqfVYqUZJ9ftbrwXR8gvWYCdubEq2ZCRri4W13FCQThFASjdamXHYVMfPP3hH9kdQWR1RjhGdo9X87G",
  "key3": "3s59Li68WJSc2xRso8oqTDwzpkKsLXoHZkbU3Un4oVQdXE6H862UfPXAqLKWDF6ooTHjBighFKKo9zoHNaUYmP6W",
  "key4": "8JpNtiNokrMgeQujeW6K9ZhXkvMd7E1hL7uYPL472k7eUJGPpEs1ykwJXjn5q2QgykW5jYsk4gkijqGRAk8FqEx",
  "key5": "4uaTh3jkBmntCg9WijpoiXBsF6PW2m1e8UW5zmCMgRVMJjHjLhg5UHNBxknYwU7dq96v7x6NcWGUWqvep6cStJrs",
  "key6": "5DEqFQQCUP1sfRvDj63V2SUgeztKReHKaGEDAkRLoPccsuiB6MgVdnhBxQUJiRch5DKNGE8YqKazaBf6d3Km9yWE",
  "key7": "5Ge7wA2a3HqhBimi5VULNh32Fp8tVr8992bez2rjX3kk1TwkHG2VurUSzsVnWbv84L4XG9h2AGgJtLDhbgA9vCCt",
  "key8": "4SgqavJewQtN2f5dqtdkYhT1ocfJJ2FwDw2vAuyKxf5ZgLgwPzBErPssBo2ZXQ9o7B85mEMGnVskcasMVRqw7cn2",
  "key9": "5XtWQ9HKjbDspq7TfjAySDj8sFmosDC7kohoRPuio9qRDb3xjDYLbCU1FmMRiBDoFeiAXG75d82HMzT8ZoiB55f5",
  "key10": "5k6i8v1whKJ9cNn8bWXia3xsE5LSKhhmGbCLQC2pN8h9WRqabxAj8x97bVfyWf4Uf8qEtvRx3dwNH2ZMhcHqRoU2",
  "key11": "5wQYNebGxkjT1Zke2hLp8oxYf7yaUiiptjWnFceYKsuMEorxLtorFyGRjFXUQw1p4KA2pEmYedzksKSjrdKCrzi3",
  "key12": "5GnqpF9nKC4GHrVYoJJUaQk42xoibV7c2oKA1eGxR4CzwwspX2ARiUMUsADq4Xkbqtq6eTMxMUZBvENagqaEBkLN",
  "key13": "218hUVmtCXR7mUGyLfikW5JUHRCbWrrfncZVMTCN6dzmCYQVSUfxk8FQDXj9d1kEbzn4F4nSk11ExEHe937xRLkc",
  "key14": "2G2UvPjM9Cs25m9CNJxcCer7TusTFV4LUDgNet6hx7KSEAJ5oAdgxaXhNZRf37ED41YshfGc63hr6QjoybW96G2t",
  "key15": "5jgct6AtFCu5vFLWW7dhs9nwm3JYwDjEK7AJGZ8mDG8t7eK2r7uw6sbFPhDtyqeBUinvtkTArvtxVQdT5PrrGiqg",
  "key16": "H7cuJMUD6KB9TAUmWkrJqE1G9rt9jWuskKoqR3LgzkGoWfjL469E7eLmKLCP2q9uQfoXGy8TZYoMHmhgr4xdbZ1",
  "key17": "2yrFyYJx55m15vrYTciadKfA9H1K95rs3gf6ZAbBzGFHzRJu44Avu6urQRnDt7x4wsTh4VkAf6rGBVMWRwF32u9H",
  "key18": "43LMgn6EQWBue3CqXWsHJYRvNWbUNBHLNYaKwKfpmBV6CwhAS4U46Y2YdTmKYFzigqLF22umgU1hHsNZ9fmL5Wez",
  "key19": "5p7GKJv2x7QLr7NX5jHNfATY8WXwGiy5V3puMyR9kY8TFSemdbeZf4GRCz2jy9Mka1Z5V5RGQ45PiCayR46ZWp6",
  "key20": "2T2k8nwTRf4xK27kUDQ3VaSoFMaHZqY6zpj5ntxvxWwxwdPcvEBHk48q2F4GTLy9xBrfshBwvoQeQshehbQ4A4xn",
  "key21": "2UQQgXx7SwRZvYVjCsvV86bP7Ywbdj9eT6o4YPJNvshX6qhvMpwCF3yyHbM6kc8zQLWJNBWg2aabKskrahzy2knz",
  "key22": "5rCcCdaS2v7yGyyZxKPbq9NXBNkfu3c3zUcpACLUWiaathQZa24eR5xughFu91UtMixGmD5ByqTwCMEXhbUup1zv",
  "key23": "5M1476SPFzzT1Un4U7o8GryoxraU4D1ouiFTyefqEr3pcX5cM7aUbvf8Eq3oYGvJ2aWXVhKW3Yuj59PupDkxLmF4",
  "key24": "3EwsQBc9wUiE7vNC9k1gDrf2zmnLrpLa6U7Vge9M9WW641LQprbGQG3bZrMdNENTbXwUPSu8mxGYv8bP7RWyGJvi",
  "key25": "KsT1g36rjWVHibFioiksEKzwpaXadh7jAgAGEQSJEdazBqTwRYAWwFazSj7i88U1UpCYNDvMhnEG5bFtAdf7G9W",
  "key26": "5BP2KTdG5VbfJJuWiWeVteCCca1mV6c4zjWSbgCSTiH7zUYnCZDy5Can1Y7Ya1HZDsbTTBo1wYTRJtrzocyunNeR",
  "key27": "5uQ62MGCJWaVUUfMzFS5TzYYQrzzfft6LFCXBLUQ6BZRebULvZqcUVRVzUujiZcA7qpFtZbtpjrk4ynaWAyURbtS",
  "key28": "BrM6c4TJorwKSqvkNdyHJNAuV6wVUwwb2JkNspFqwQt6ytgw9kw6qGcbH6HiLf5FtQkryY5RAnvFdPiWCHM623S",
  "key29": "3kBVo5x7WdmQ6rV5czM5FxBorQBYmnDuzeooYwUB3uZ5B6vW2fdz3xRmTvTPz5pQdCLM4NpxtzHrrx3Yog2wsvZn",
  "key30": "49eheG6nv1G9qzVaJvCN5kkgZstv53vYqN4yn1StRuhrnLoK8HTKYD76pm4TaWCCKD4yTYf3PqLNgZJQdVSfQ5dG",
  "key31": "23WdyYyBMccZ1MVgmNCBntSfwi2xdS3eoBZ3LpTWCUSevQquui4ej5wwdfte2KSFE5TSvR4M6PCU63WjJGRDiART",
  "key32": "3LjoKhvG6a8x24SREGuCqLziv4XhWnsGPAb2ovSKuwXjatuvmQdRjiGnd3gsYEwcpbj6ZYa7Db4Jx8Mwf3Aru2hp"
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
