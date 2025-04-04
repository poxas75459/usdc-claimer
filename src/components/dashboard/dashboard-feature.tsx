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
    "67FnMfXp8WopfjVLmf7fdym77LckNDPJkUZ8dvVzeNwfQ6Dujt5qXbkamLVQes2gUKNPsaqrXxN1VHEWGhRNHsV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BjGw1GYDvcE1WjPdfjFeKSJipNzXMKHBJh5UbgbHUupprWYVC9NC4p8i2mpXKXRTz9vZcKuKF2ux1fvtNc2W4s3",
  "key1": "38t87GNghYPR2iPX3LF95Fy93CPLhyMiBbCdXe1cSE8iSpfPfQ5kKEYBGW7TtpfMWs9o1gQhsKEWMK4nTDFGXfpm",
  "key2": "38Lr2U3T7aSU3h6Q8iU1NropmdCnYxfaZMUiimuXMQzYjaEA2Vo43eEqS2jQnA1f1bLJeXLwHT6PyN18xur5sK4U",
  "key3": "5yBvB2YFRs4MyZVFv6mmrRwezAygGbA1r67uRQqsBdnJFX6W44Z8pAoUQhS6R59iaa5EdFpJwJwwTDJYtKdgoLtk",
  "key4": "x1tBWk7biyWCxZgmQh4dkWbCRuWr53phgVbhqdUpfv3chW1jb5nVLjjBkW8fetaD1C3hQymQHWovicV8gKXFXgk",
  "key5": "5Gejt4SZeV2bnmV4jYvcDHccJuf2QyVrCJcWJGJNMUt67PN1Zn6QCtbz5W5eLnHQgzNuzwrxsnhREF7Yrgrcn27p",
  "key6": "iGoz8dJD3DCmEaH1AV39QRsEdWVmW45HwTcnQqGpzJfJPGYygjnHqKNUBNBVdhRiTABwFsAkATo4WuXixrFtGMV",
  "key7": "38Xfcu1zqFVmaZSw5tnbTr78ByyQUMUm9BdwN1e8puyCxgRh1CdgwnSjismZeGdnw3GoenE5663CrS2BJRqpF5nL",
  "key8": "4HcKbduYCaNwWoEH3KYdfKehaqWJzKffs5Fv1HwjWcEtqoXbLZvj5VuWrD1bUdqjEy9FSKocQnT6CPCzbRmsJ7tx",
  "key9": "55CEKntoJSjmzZ1d3ZZvFJ9e9Czg5pbhRkWAfizF3Rz1rMduNmuggqinSHu7ZfZZTstA1egfjsG3MXeSZMErjn4V",
  "key10": "2z4tFwb2bMgg8GbagMeSrqBTQY6XFAEL6k7DshE5fLqosz5BxHzMcVJpKcMBFTQH47yj53XUyP6YP5xEgKrU1RNo",
  "key11": "4CqqwAGid8HVWdcGnxUuQ7pBretWcHW5Jdora1DDpBGf9u6Z8Vugzfo8KJf7EDtX7WAVnGpX7JGwqXhwcw6UCGsm",
  "key12": "385ejyn9Zu3HrpS1dtEXE3h4uQVMGwba415NYxq6xjnH14cwmZ9sCqF3izo7uSxHa5kKQPmTEweX7MEDeWXKBc3i",
  "key13": "58N7nsX3h9S9rcbBoiJ1RRP4jyJ4kg1tvDL6ahj2rP2e3zDMEgFLLeYhj3nWPaMiENsVx3boCBJEzWQPQBnWUjKz",
  "key14": "2J2XscXz1H5o4CqRMvnGAhAFef3CwdnSFhzVazrLUgB5nASvbbJX7Md1Xg4Z7aEJekNyezvRTvo4SVDWqEpH357z",
  "key15": "3LThH9XQBjW7rnub1RSpZN1FyM612ueJGDHbyRNQoWEzLowytfJ4td8Mw2P9Dbd8xrtA5uBYQ4zP4uweq3JEK4mj",
  "key16": "5LkH6LfkR9XTcW3bg4V2raAtJV7EE6tKwvrS8rJuFfpH5iHyv4BMupMgSAPuiuwof159f613XEAwo8o5yhQtdyHG",
  "key17": "22zsibCqLCqK2hznxmPvNCSgF9t9DT6pUrnAbAgP3WsbNGDjN8nS9mDLbUadKL87YMkAWpns8zFNS5tt6X5BSjdo",
  "key18": "4rcNVRLbGvAaWVexJ9ZGQwWWuAe3u6kgMjPJHGykgdAYYEn6cPxnKUnew8nAMQAZ4PTkdGxrhJhuaAwTadjrE7P4",
  "key19": "5R81xpVy8ipu1B7tKzMyaM3vFy7T1MCPYG3X3puhJfQ6eNginm3prHUeAzAjkqyeYftDu7xQ3QVRt9W6YFyaajmH",
  "key20": "2DBvnp3uRy9xMTBkw6uTvtiH8KQyW5vSCEq2AHktZ3CyEEoCCAG1WtazMZef9fbkxrMnfEApqP4nE8yVFvamZEDK",
  "key21": "3gkC63RynvidnbY2e5QLL7xjD2GFNGPS7RzN2V9Wrd97j2gUP9hkcq6PjjmxTCNmFxzVjv7qszu3Fi1LkB7wzaVQ",
  "key22": "5idJkZNqfdYQjXanPcJwVxpTriyP8KbR8yAsMezBd3Bp2fcJFXvBU93Pyv6ALMqPb4nraUKjHXfMP74S3qUJbgyJ",
  "key23": "2GsU7capXNdnJgEB2Xd1f6fM8KvMkJpHjfr9dUKekefy28j9JjExmAcBzqoJY32oJKybZDyFTcwXdjHKC54ackUB",
  "key24": "3CCmJYYRZdE2hckyZ6g7pq8vEFB7UKZCqMBKJ9DU91c4AVsocdCYJwagjnDxAMm16yvpLEG7PS7Enc9qyXaYpsBD",
  "key25": "55CbHH12VTFXskkp4GrB6NAS2MK7f7fHy7v4Ly923F8qZRBf1WZDWLLxubFpWCqRRLgYKx8qhmyotKTtAfk5vHY9",
  "key26": "55JZNUisVnLHHamKDxpNWGeWScMj2uDmS8uoAtXremULxpkf1zBzzB3NodsQe9LimADUKitxqkjLzet32wz58J9w",
  "key27": "46JGhZqx7xn2g8cCocoDpdu4UhLuy8eQsynyxAH5qsTKhkzGrRF3ckZfz18k13Hev7zhH2ChZb8ktNkcMnb7x54B",
  "key28": "3ipTcjPCPphXmpReRUadrAuiizUpzzFGzCGBZsWSt1zT8U9zL1HJNFB5YbV5gukDk36UmzwKGtZkPCTevFDxqWe",
  "key29": "3TWbtrstmdEjH5d2LsbgzUHyUj6iRL2m4peuWAj7QneJ5jT1XX14EXx1WBgH4kFCkmhhtY2sfMy38vj9EN2ZCngP",
  "key30": "2UTkWWtyW55hPVE8Upyy3XK63xgFEQfEh2iJdqHcHtdWxCKwKSkbAusdDQYb3S4GD4DGsLkXr91ueUs9YqGoNTnJ",
  "key31": "41SPQEsSCHfKwKHBp8h85dcejRMcHXBL7GCXAS2EAiYkynwM3v288kQFmVQYnieTu3yBhFjxcikQ3SkH8ZdN9zDE",
  "key32": "4XTyvXxGrdiLTzWrLq5p4sWeV3CQpufvqZ8pv1tudbrWeWCSeUiTjABWTdykSd3B4pqVGRiogwAWMtbDJMSALFBE",
  "key33": "4fGJ92qyV7duMTpK9GUJdGnEzpCGD5FuqJTiUyCb9DrCD9FWzy2Bv6SQzRDXPNDe6wUP2bruZZLopPVG3MQVK89Z",
  "key34": "2hJbDyY721Kha1DdGCYjTTMB3gwLMd2q5iWz9RjSKxM96PZqZDvwTzW5X64nCRcwz3YYGVWS579JGC5Epanvc6ne",
  "key35": "2b9ZJk7BdzTBHWeHaWeTwdpqosDW42iPyZfhEQdLeGvsMSsVWqgEpJwxQ9ciexdEaRG8KTUuAedGC8tbwtFrPCPa",
  "key36": "rAaDqp7wobCQYYkqyZqMvQbYaRpDobgJT4Dj9LtqYneRrAUSTLH6hCvt5VRrLaaAxBu9CQShkytAigYFFwAbBZ7"
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
