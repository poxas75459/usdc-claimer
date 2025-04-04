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
    "4LJKcnjHS3YCd5FaDfZ2URaTpaJmePDuzGJP7wkPPh2j6HRG4EsuDfChLJmNTAw8mmnmSmZdW3Le4KBKRUk4f4Ni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zCV9YyAHqaQyGrkha7gvP4dUfXaemoQNofbtcgWqYb6cSEjRC1xYg3RgGzKFo9bBAgiTzSdfaVgz7SzWj2QPaKc",
  "key1": "1cDtE6LvjyHCzctCUR1nv3Dj6BSoVKdutKieN3fcg3qDqcEh9XbNnJRFwEueLc9KiKqGJx1bE7MkVQuG4Uy2DbS",
  "key2": "sgSBWE3ycoh2PMQpKAkP8WgWj9rDk5NXDoF6hVtyvvusR2uwCEhozgN1YSq3JgagAwGqVgyne3Ct9XBvCUvcGTD",
  "key3": "33AF44w9df9HtFYjSBEtcnVZ92vuPfj7w3Rx8DD4vWG2f5w7oJerspAsYvfEQ7XGwJWTKhqzp9CDSvq7M3dYK5gW",
  "key4": "2xcFcexxWW57hR1UGu5wenLyozeVbbteXdyppBsbqkEkipXAhyCShGKK72axwyUJcEMjJCKoFpanSiH1YgN2CXiY",
  "key5": "5DZ6Zj7oYbexzXi6JQSZgeokf63AwLyRkwgXcYb36tyXpMAwrfG88k3WDbHEHSBk2mCapgSd9jRaunQbuDE7YdnF",
  "key6": "ax9L19eAXNCevic3SyRbuMcred73oAqSBk77v4vhytZVUC8JoH7DXNzxasErHKAQepWxDeCSwyXSkLyYVzjntzt",
  "key7": "4yUh5bWkNextD1LG1mW66uxF73z1MNoBg7R5eepoGYhpYCBnMmeC2q6SLAcu9y3c8Sif9tYvwGQyy7pE3RcTybv5",
  "key8": "GLNf7GQ2tZEf4wLDswgSzhEC9zPHJxSUQ3iQ1LzuTjzgytQmr4rMqN3eJgsMDgKUbjzD3tEH4SZG7WNdwjhTY9X",
  "key9": "b2mJDjZmkpQvMAsdRq42ardVCCBP4CZfwA1RFEoLVunteCtHVLqjyrwcKGv2pBZazZrQgXJqQfNqeNVECsUynYz",
  "key10": "5Bd9wzoZFUvLAnN7EPHbxCtNFv4FxSJjBy4549dkravbn2RyYs8mmLNCa25JCKnk7Kh1ZcdUJxtFQHgEHQhVni1R",
  "key11": "5YkwuG4WZiVyR1bgR7uDLtWsG5PGmYovZMK4yKwHqbsc4Nm6J6GyR7x6zxbZGz9A5KxH3RCmCGtvVbJdFSb1i8ex",
  "key12": "2e2o5ygYaYRxsEfamjTkJ19bux631qX2662XwSbpXqaGa4SKsTceBGR3BRnPFSvfThPjHiYXs24eQwef1M5RMqWM",
  "key13": "4BcJdpLv5yKyS7e5LBvQ6SigGw2r2HxQmukqhFPswjnZLKLsBCKWBB8fqaXgZLWgi4LPz3NZAoMbeakjZWZASDNp",
  "key14": "2aQJFf1onDL8yxcpS7njkSu9sBLdtj6V91qiwyX8v1AUwtt7sj29Qa3u5jMDzLXRkZKbzKtsByicKAhqdRCuePQh",
  "key15": "516dvEAu8uXQe4qtse95yz1ewbnnNxGYvHvTtE8q8tJXPiS6LNY6WBdGNsPvrociofu3PrV8RofkRk7uVXu6mJek",
  "key16": "62dKPzJegjPPaDyr5deJXdMh4MK727fHPrQ5R9YthQeSZzCi1zNE9ouhzehUxmDww3nLMft4UyFEmRBaVNjcoxfs",
  "key17": "4W7TBQig1P5o5XzavTAmE3p3VNzi2w5p86dkK57hvbvhj57bq5GG7mmBVxuq9QTmiVk8tjBVq43sUW9oaaAkvoJ7",
  "key18": "3SUsunyrn9A9N47fBN5UDh6ruGViPqy3Uycce6awzexHUsnBgxY3sVemT6CsFzA4w3GHLdBbTiNy1XJ5UWHCyswZ",
  "key19": "bJJFo1dTtSBRy5MuYwnkRK5Wa4AyPHEZQLJJ78GgmCGr2aPFNsN3iKGt7fD9KchixPqxk3kR9x3qXywvUWh4X68",
  "key20": "3zHvEhnGH1Xr6G3Ue1mZ6tGdiQznmtbqYWpLBEHeJQozaTEW54LDWcfwFp4Agm5WNgvMk9rfyDwxzwStEgvfTC8e",
  "key21": "5DoLCBV27YX3hKv7vM3kT2NZvDGFBhfAY5AgmzXwVvLUdaNxmEbvdGF8dvMJQK2je2cUZGFHKMCWdzzYvRG75THj",
  "key22": "vjW6RtrZSTntMhaQp9FYySMqSc6ieZr34ePaxBdzH4hHkZ7nMvG3wG9sw2Xm94eC96GTn9nR1WSnrUvoTWKhor3",
  "key23": "YNqzhP2vnazCPZvJ4RTM6cp4ZAVh6FqJfvz4CK6zo5URF37m1JpPXLT9zTUkYkPHkTZKQ6h52bLZ6deYUWMkbNC",
  "key24": "3pUuxag3ifxyQ3jErtbDELC1perPL9XLXK5U2tFoEybQMgWduqNxqJ8CMBFP45jF4dejhrToXG7PDQmvcbWqjWmv",
  "key25": "5zDZzT1UFVfhcxT34WcgvwV8ZXrkt2m2yC2JBr1Gtei9a6WuXoH5CVxXApw7gd2DJDFJvJ6k7tWSWWuDX6SxVaeU",
  "key26": "28VbLB9owSgyDZtRzzhU9czjNkJewb1Vd945U3YZqm9N9gPapM3w2h7jKyXsCKcPBeR6wyfquYrMh9pMCKUsZTSo",
  "key27": "5iQu9ft1M7mDKA8JYY8DFz8SaZ44UU68zDnvZs3AmSGVGYnL2aXwBeReWpgUHBwrUt6khsfwffk9SX8c6FivZwgj",
  "key28": "5BNg8w4fkdiwNCm1EFAZ25rcfvVVr8uJWQDYLZK2Yf4MVEgqLgDdbE7M8ihfMitouFatPjVFRZiJTCSmemhBAQSV",
  "key29": "3mgBjXhw26PT1fnx2BU3QV6Fu6vyAiP36soLtX9mk2QS38C9aSnfuCJYcdeT4LwTekwH9dGNexgtaV9B8bVaqgzM"
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
