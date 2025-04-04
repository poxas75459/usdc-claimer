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
    "4NvsqTt75ZQrZqjEXYVuSffVc7wfQFyPu39yeh3HcUzyehXLEJpEbYJijFxDLNLudGpLC5MPByE9jRWqQWm29VpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RVd7suTPeWuYdUgvhFYHWa5JeprjyA8u74Z3arLZXfV1hiii7315iRwmUzGJx6rWUsAPxvFpwnCAFgFk9xLvCGR",
  "key1": "5oGP3t8D1TA2Q9nmjGJX3njb3ML9Uutry5VA1fYcv5NYTpe3TgGfqKoj4ajquKt2PuDoYNLQYKfY4mrkVYcerM2e",
  "key2": "3Nuh4h1F7L9ABuZzaUdYExHpeGbB8bW7hBTbwbM7c3cMZyXUMXYX5p48EmdLcT8EJmg5q8xtKxcjSnbN5a3GuMRv",
  "key3": "4DyWNTjnGV1jry5N7QQUM5NQnrV7NbWzDFpNzLxw9ohjQQr8Fod92Ky8q9kMaPKYaUq3RT6tHCY1foMh6sQdkAXi",
  "key4": "uQMDk7FtTG5HszWYWrvMuoNP6V11zPjwUuKDsNRvTgfGcY8qVPJU2t4befNKcdKaMSV9TAACkUJQBnX8tmS3Lgo",
  "key5": "4XBUWg2H56kL2PfaHNU86KSkniz5RkHx6ycKSFATvjAMrY6ZP84C2J8yxVAWBDzftmDUz8BCjrSJrkfXGnrQByiu",
  "key6": "41T73wN41pwHaU2KEes9r47XDojvS7GzL7aBjgmvv7YK11b23DkqfnF2v5G5JvRrZ3YiUfZKkiK7LNG1etupYKJ8",
  "key7": "3BvytxNzoU575TpNFTN3TpG2q8BxU96mJ288W1csaBm5pjUSm2QDqhNrUThDk35AZhoosJDTFP1z2pBG8EyAz1vb",
  "key8": "64jR2yYWTLzSY22T7N2SHMnC7GNKVA53JrrTLnyXbKnnsHhq23KL9bm34VMWFyELWGQcv6rpbqBW99ZzDXNKSeat",
  "key9": "5Fo12A9HNdzF4e352uiNqho7PU2TmmYfW76bZ81P7cGmkUQuD1tCQjBnH564oycD1aUTzjMhf131xffQeQCLJUUG",
  "key10": "6xdBLFRVkfq4CNFRMNmJgn2RSx2m4PaLb29Kr6W3PqGcRFkrZ4srjV2amoGNipPpgLfLH8wgpymULQ43fwD7XHe",
  "key11": "4ukgbs44zf1LGMAYfETW8rFCT2yvwXPYhkw1gLhQ7FACNvgvBbKuvmSJ8EPWbr92WoMdSuCELpRGs1suP7tC1kYr",
  "key12": "3hsF2Htm9q97XiFnQb3qPFVa2GAQBCneMsckNGHQbK49SnbVJT6oXNmL6SABBzrtynpdrxdEop3uVWScopLZNBah",
  "key13": "4yd8eBVvFavQ5WBvu2qNgbqDr2nrW22wyUjnjnbpDJpmU9ir8bRPnkE4aM1NaApwqMFXbK8Dt7aCchywGK5QLkWj",
  "key14": "47VDqjXdyBBae9Fa85YnALNTDYkUNSZtJoxmHme43JNipikEPwFtB5shLbfFzdyVxc5r3KkBvw7LRAihTTZuLix",
  "key15": "2xSvM8zJ5XQNemkRhcmoVmSHXJgUxGMbB2zFXTgZMDqugLWGPNBc6wtShXVT1uJqNdzuXWfodGpEctKnVmowLMki",
  "key16": "5ACWm52KrrzJPRqitkRr6FH5htaX2JECZEU8qN6RVtR1D3Y83Ue36dXUFxqyNFA7W6127JY3j6hNEZQHm4cTra5L",
  "key17": "3xShesFaGFeciw9s512MPR87y22EvQzbB7YQjMo4FibZmD6d4jcw2nSDKAWiaqh6AutXLvVqY3RiHJEUiAxguTXx",
  "key18": "4W1Rqjg5hQj2AZTCrVmYe39LAWXErSAtBtuAq8F1jvCU5yxvaykDb7UJPveDYvaywxdsqosUAak6g2wQyaazdAWg",
  "key19": "5nmN6JirjGNwDSGEDKiHdYhXrmToGL5BG78Mu734uyr346zk8HiXfYdbMZ1hwZxuPYA8b7aNxEcxt6ctnTq3uduv",
  "key20": "5vucHzVA1PPUCpXQCbNdLCAjteFW8C23cdYmwTNW3spQxj2Te9L7kDDKW78HKRD8Yn5wV5mAPTh5BPrGHyU3js81",
  "key21": "53oscKjyR2tcRrJHdSWw2mcqcDYKLj6otgQCrHrLxmwB6b1waaSH6p5hS83y8KnsXfwbBGZHZeGE1RLsnC5YE69m",
  "key22": "aUuBCHvSvmxFCKvveg7ZrmkHoMndoF1bbDpAegdWaGnpoEh6P56LUey3EJeaZ9brZPxxtE6uZHDvqivtgbeLy4s",
  "key23": "3LjwTBYd9KBosJvJaDYF6u1Tusq5ri28XRzpupN5qackTZuvrjGuo67Tgu3jkmR93tX2w4pvkkNVmAddNAjYwzRM",
  "key24": "58jRBN5vi2ZgPUER8edLs9Wfmp9iFAwxrR8rQvkwGgnJvZBVtD6gdKT4tWnhh87wsaEjDEYHwsutoxv1R8cas9rW",
  "key25": "5cmKeoxpST661tBRMMu11ojcZe2mYakhTWrvzFLvfDAsBEo3LgWnaL1Uv2BUNAEmizdU9fy1r4bRi26ZgBGjhsNM",
  "key26": "4MMWQKJfcTNs2wgVBp3UEHsi5AxVJmLmuUofgYHANnUFZSHsDwRz3Bh3uPLKUdF1mja1pvxwwcXYFtmDeACdbmHB",
  "key27": "3iG3oKvPAK95kpJDpyboSVgUHeJLTJ9UQhJhHAVeydCZPUJCAV7PuXXTF4BoNJHDupsv8WXuTXbZMsdyTzGEJVnE",
  "key28": "2QAqphHjtUsmANkggiXAHpWHwEhvFdqTnXoXo418soY1Nok3SXnPx43MzEguQb5REXH3nUwR2b4nUtXLKzmBFT9X",
  "key29": "1PTU7ouymJJCATm7YWRPGkYpxkHe6kzNy9CWY4njdr7UU48k5jp9dtF6JuvHmZhZeZHKxajGePQ5GvUwxVgCoRQ",
  "key30": "5k8PwyMPKnzJZg1b49T7w8uCK7RqVrDwxDSNN8U52L7P5ytiE9c4d878oNM419jTZhv9si2VCBupRpKkHk3veb9n",
  "key31": "33GUSJAKWaX7fsGw4cUvpBz4irTxWmwWfDQ7qUauz1wFJ9eF4jmW5eC7mFLRWzqY6263UzZ2WNVvdZ9d28ELrgXq",
  "key32": "4geJVYep8NPSo4dMrC9fpH9G6jUhzoj6AGZRsfrbcBMXAHHGwsdznioYtAEJiX56WvGfKA1aaESFMuKZLduGZhQp",
  "key33": "4zbZSFF78bxSVmjduwJrdKeXr72FfuhEn4u5nBE4sjVLjnRAwFHh79paTVYcBSGoBByA5DztWcSGa3u4xYCDsyWo",
  "key34": "2SNFLVQvQtqzKnkaL6mWX6HYdB77WBBRaLxWW8jWtgtA2yBeTeYiBBCg2sBumiwnHHYzar3nc9C3KLahT4EfbBqg",
  "key35": "2tiqDmMzvoBtmX523vHxy8xn5Pg1zpRacwermuoGT9kA1UnwfEgeJyuAN5PEqpFQxQpF4qYVJhSWwnUqLiaV3Ppi",
  "key36": "Y8ospmHEHLMYLVeRky8axkaX4QD4SNiEJh3CG9Z5HccqEYuLgpFRv3Es1BqiLeBJGn841PpUgpz7kJR17bFsXM7"
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
