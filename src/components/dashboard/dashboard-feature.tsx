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
    "413NwafQrdbp8JEJbKgpkifcZwsvnb11NW754v9Wpcxioyaf5mVUhee1u6SE4xmyw84HZsS3RxFCcYysTuLQ58vY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AHt4BT7LAHD1rH57nj3tb7CVFjp1VeqDzYdWhrZ75mDceZY4TjHTcXq42xYx525C4RVcWfPZuY1QeAdsdbGZujF",
  "key1": "3vEntVJxWffSWLVxUoKEimqAhXwEEvNyYo84A5s5rkCWB9eTJYYWbZCku3tbqJAwZ16PyhhB54avcrKSNQrhEWnE",
  "key2": "5JneKjyFi1ZPTsF6aPsqkVqtBQbfpYHHNXPnkxuisMKFzhiKNjB5xwQ8Uhfgu3bHBYUGePy1EKPKNLxGd2a3ESgC",
  "key3": "yaDfs2dhjirFUBZtRwKiWgxu19MNdoeTs6W8LdzTDZzt2F7rcPqQqGvMC8mKdNbFcv5GkxyyHK1NdM9DahQoH7w",
  "key4": "4f7SX2hUnJ55MpxJHu3Z2nNNtqZmbjcWwFBBw9vczRN3PQv6iRHBst6jCQ9DjLhgRyVn1irGwMytgxmG84GHQPTc",
  "key5": "2Etiji77Scu3TksbV9zN25ZMHBGrPDPh8ypqQ8YPnco6XYZzGXxqBvLsRWJPPvjskx6r8TyNyvdHintQVkz2VTmo",
  "key6": "51GHvaqm1LzvV9FKJek49RMk7wygLEdP2c9jTrCsgM8GbuVrAdZVUgSQE8XfLVwMUSaD7B2MPjTMcwE8LXjk1szQ",
  "key7": "GdnZEe87Br12vbfaJEP64gqtELN5BiZS3AxMVz5cWf2vmP694sWbHTAuGR8quiJk3NrHRNHweN4swUUX4YqeFsX",
  "key8": "4AFAybjXqXxCntja9svMqwQ2SUYvMi32im5uCZqRNYc1vGTL7JsFrDkM1Qpwm1LMWvFZ8vctdgKrphMVcdZeoNZ",
  "key9": "Zpb2yW52vhaXZ5X8UQoX9xd1N3yCApFXBjBsoqUR9gPgfeiXJqxv5Xjd7xXKob3u7AzN8eM33bBfDZNvLKQJ6fm",
  "key10": "5Ua5wMnHrL96wLkL1QkLKH8Q6ny27Qm2TqKkfNGMa3Lv32jUgSE33jEwR7WJnhWtQYZ2yLSGh5Ca5ncVPjwfKvzK",
  "key11": "APbZtd2epNgss65W1kP8YGk35CtPGCu9ivJtEaWHuYg6ojtNqf4bET3rcCHWsbnZpG1VZhbsBVtw9cQyEK9Eswk",
  "key12": "3dHpEquFqzG5PZjxWazEWRpxAuhfBNQGT1EQf3QSmgA76bTDbUF6MgLo66s7Ey2WGBy4N9vR7PFZMruUbfWN84iL",
  "key13": "3dbhJ66kVRZXFPcdRuB1ECL5HNZ8f1DpoopCB4YsqNA3LzT3MYL1ePtaf9a1Uhy5McqNjLL4RH9HfPDZLSnLHeZX",
  "key14": "4aRnW8qccJ6rd2DD75VKGR9f5NFCzAZffLdgGhw5WmUfDhU7NmkvUH2t6DwPLenuwPoWXJTCihQQHvBXc3fJLYyy",
  "key15": "NoJApbxfjC4xyhMMe8BzChGq1cJsthQhS3sLQnG3Ng36nrzbZLj7o1q9q4PWyPk1hNom2TC7Yq2KcjjUETyXvcd",
  "key16": "43yq8Psg8tQ51XLb4jDL9eL58p7Av1rMFg5GjDbDnUq7AMqEL58CjoYgjZwJbfkvgL1ZAB3eu6vCCinFFmBvx2bu",
  "key17": "3fpQKKG7ixKzKUvZsG3tZmoCg6tJbGPRFPUp7ZTfJqzVWzemRKjHaQvDyEuJDxAjh2UaaNvjCoQqHoWZAjVVSCqn",
  "key18": "55DwshfTWiXEyXRegJKDAEtLvGw6oPzt5wMabduyr1jZuTjCzB9EbM9TTDDPnH1XgHKpwfwDVUcDRv5GbhYAukVd",
  "key19": "Y3v5WBhXW9zwUpAoXudBotDcGegH6iLtmV6CwD4VEzBhqh54KKvVjouqyK1Jw9KwFJw64f3ncp5SUVLdQANvmHt",
  "key20": "4MHL9PLP4rJNK4yKcynQtzyMEJ1ovhmZk99bGiegNY8qbaQdj8v9MhDnr7wAxHwyhDCWDaRz7q25zUyqPtjaSHT6",
  "key21": "4fAqLHRd8J4LoCuMZbSK4oCQabck2PLKpsxJgH1TR12Ugqa7EWegkMtYabMFvu9G2AyVb6xkLQ1sv926E2xeivye",
  "key22": "62ZhLRJgJZxj4QZZfMWok1YKoqFqqfNShsVbwAcgp9W7iVwwiG6jXvXqHyFyof2VtW8hcNyXSgaxQhT2wMmz71cL",
  "key23": "5QFNWgZVJbJeXtn2VhzjiUF4n1iB2LR3N67peMoGxdJscRd935Sao4N3HEfnZ6SJPJpBVuL1VwPXqCVffFWfzswD",
  "key24": "52kqkNzW92kDnFv7aHjqJjW6Eo3VPbvx4LvnVnKebArHLg9Fqy1isNs3kmFQBgxKL4NPnT3iJ452S2cZ9XokKWN1",
  "key25": "2QUuKM2kLbN2btmxcDc4CdGgcGmuPJrbrWHmFWz5jkRYVzxK4x1DR63JKWYGHCH93Aj8whwkLFCMd5BhQQVJMJ9T",
  "key26": "5ih3KA9kmLQDDKMUqw895azKT2d2fbh3qPZdj9VXii4MPd96586oV148TmkzKkWUh3GmkTRP3Wk6HinQKm9eaSDK",
  "key27": "48mFUZ9dahsTNo6gdNir2ev74jrnhHpY74E54DkWBGxUDvHpEgATo4PdiSNjVMdURSnS37d8j5bxctrFAt3EVfqc"
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
