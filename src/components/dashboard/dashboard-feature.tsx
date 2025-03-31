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
    "PNdUKLa512MpWCgBLgDfP3JoXFPzL76fV4KMhMn8TqDbNuxi42d5uiqzM3BAjtmafwVcwiZJ3uKqPXacwe2ATDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63AG21ap9kN7swwQKnoRNLSJdhkgEaiDzXFi2eZZ2zXX5tvM5J56Pq6VWaFYcDodyn32JGwqyx24n1eJF2JK1GNY",
  "key1": "3uwbuSQKdLJoMc9vRtWqizDLFtHuE4k4p4k3xzwEbb4dhWccm8qM5zPALP7BPXCvcY5ncYkfPQgJ3x8AQMMSbpNH",
  "key2": "HkYAz7XM8BMYiMsS9xrrpQcQSV3x98HJ9Nmx6H7Gy3oKrZUWEX26BqNsYJWc18fWZJy4nm6xW5SoB7uyeJWX2Ed",
  "key3": "2Wpb5qKVtwgCu3TMEUdjbUhJ9qCnZfSgcjaQJsLJU2byHKTyt8e5eLSjK6KNzN9kENjaNL1bLN5xYjmPRbzw63xg",
  "key4": "22M3gXETLZ8kKQx6t9hArFzyCvdMnVBrWtG6KmHitivj7MdZjRWU5GqsovBdsxdgh2gvRUXemNPTHJJi76oNi1RC",
  "key5": "2cy6qEtePVAcjoUcAEnKMYJyMSSVp4ygbYBeLzpJiJAaK3uzc8rY98jvQMUfmQsQxYWYKb2U1R2iBaQr9xUgZiDJ",
  "key6": "4HfCUUqQjS4REBWrpVE3vJRa6dm8A3X5XfHBDEoCN1vxr8fGQ9Qfo44HTKto7BSnWJwnSBUKkBN3riNhWy6cUJ66",
  "key7": "2yg4PcbrGnEU33scPpbNxpNAxQjoz1iK4hEVnzyhAe7RgDQNX52117RGKn6LJVRqS4rMtBLXN6d5RRZsXQvDan4p",
  "key8": "2ggK8rwqbjLLV6JN6b7vfpJLAvhKxvipSxihoaFdFKgiAN7tTxcsbdNJAUT7PtMDH7b43ccgxvVTTahd8DCgcJyX",
  "key9": "PquFNprBuhYZTYZ5Z5QWZr7LTWjCfpbJ8W6tGKxyQqCC2oVCSnHLiMwH4rJdBrrSqvdcccHGuyBx3Gu4RRo6yJR",
  "key10": "4Qsv4Q39Wy5G3LuXxUKpDCLuVYLSHUXcCX2HAp6P9H597sB3pQpe7m2zpcMQDx6nrAd4djXxpe75Axjx8sU5xaj5",
  "key11": "u7qoFsGdPrt7DFJxu2NEopszBFz6Ppgc1NgGYfUnScM9HaAJiz6yjLkC2iQiyJnmRWNaMeYVvxVmSXueBFoUV5z",
  "key12": "2mAUGfHSGk3vTPhmkJ44RQVDEZ1zxAYzHjFxZo7Pz94HNKmh6rjMd5iJfYJr4x3D9tAMq7E55dLop51a97BEWf86",
  "key13": "QrHkoetqR8E2NchxczWxR92C7ivhfRHu5PrK5KxKXbUnk8Teea3CVMkow1QKxovrgi9rF7LkWn3nUHYaMUjHpki",
  "key14": "a4vbtSbLrcZ6h8r7oJV2ZC6ogMFCdy6keqZS5Cnsg1qzMdvqAkBmP56gVPhPgKTXB8Z75qHEzY2QtRgqnJKgVhK",
  "key15": "4UigQBgW1smknfhAQJqSmrEJ1vP5pDiXmCfUMWs52HhmB377vaCz2JQjmXHmEmpjvcWsG3Fe5dec8mDYa2ZE61m9",
  "key16": "3NixvSiG6oWMVTMK11MsFpyxJesXXooxCJxfRKao79KcxrxeVRWKH2AmWZcStGYA6BNvJBJ4ZktbVKfpcWmD8JZu",
  "key17": "2xcyETB4rt5x7DMoary4iUm1oEDttKmaWaK3VFnySRHCrJ63MTxYk8KWhZtzaRmQjNcMLpT3j323sddJ8iDWi4wD",
  "key18": "3tuxnyaehsz2PXykshDALseXB7BCyBWVqJDNALQvpvPc3JvW62jmcPmcSgTNMrpqRZLC9ifPrEftoMSChBbB474b",
  "key19": "22mA2a5v3WvYY6DJTUib57bDbvem1aEkws5RKwJFCfjYRifk6jCniTML5udjMk2uBp9z9F3nsvhkD1bqQeMhXFjC",
  "key20": "tBHp6J3s6g7SLoCsLjzGu62Kd8QnKuYSj9jNcsLS3tM8bZF9Mq72CVFMxWgCmCZoY9YabvedXEUhCqgoLaDCiL7",
  "key21": "3LZbQy9ioWvX5z2et6kevteV1tTjiXKUp18KfYHfLi8Au5xBJgKs9Qo65vvV6dLbtbXhqLxhZHBG2W85wxqAXQZ7",
  "key22": "3X8wKGDZsHrwRc2PmTW1LSdJswXejAX1HARkVH8B7mckmcmpLnVn9SzThsbZYFTbdX1Mzp8DnFpJtGqcW4BrPVkd",
  "key23": "4A4PQ3t7NRhN3SVexVbojHwJnuXnzaidvrE9NF8WjT3vZZFAfgMvAmFh2hVRuozcB1kf2iz489y2m4SpT1iQeiD2",
  "key24": "KTcfYs1xATCzSvwL71A7gdpPKM5BaThqrGoWGMRL7YWv8opuLmXAe2CBML8vgAiPSYK4vWQBjTbkeWn4cTTbfeG",
  "key25": "5G3TYYZsBttJpiMqE4pnZysa4ykdVCYwPJPe8RYK4P6oUTQQedu3yR1W1EdbE7s6VyveDpZAm9XWseU3hCJnTqWg",
  "key26": "44jg15Fsv6T8tV6EVBZfk55x6eAY6qF1VVk4zwFPGwDATqoW3EE5LBSgR5vvXyBZcZiAVsMg6jc3psTYWwAQzZ6P",
  "key27": "58CbPrJqbtVQDde35LYXVi6KPPEV2q7VHTHYjS5sMVwkkzxPff4mJwKh7b2JcNsDvLnWv2qJ1T8hwHLAeYA7SEpk"
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
