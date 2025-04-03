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
    "4PrstMj4EEZAX24GVtr8hmN7dy87ytNPiCKtaf9S7WoAbhSysM3PXx12bEwCVCF6fzpWqMHZBjxNVT3L7cfemFCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kng8tPxbDXoWqF7WxZEq9G153iqkJMs4HzBFeNmkBFkfJrMTzo84BGA2Ka2CCi7KEh6ZwtH5ifEHE2EZfp9Pfxu",
  "key1": "2jbSvfU8GzRYPSevebPFAU6Y5Ef4U3D2niahmH9DFfZz1Xnr5URQEN37FEzMW3NUkXLhTuFveCEuUsMfU3VBasEb",
  "key2": "5Q21UKuqht71cyZypE9Vht5aGRVBtAhLRCpQ9uV5fYU1ZGLSuuifDZkjhfXGKctrW5JnZWMPR2QU5zZNU8GGzxYy",
  "key3": "2jcMACv91V8HeUR2aJy9scBdmStbiWJjg7kxDsWiQYyUscUBwkCc325HYEGUkh3bEe7dvB8CcVBtLAtJM3cobH2C",
  "key4": "KVit15q8Ms63PH3FSX26wqzeK3vRk95KDkki5oFsEAydN15axbLEVdtxqVKyBQnKnGQ3RAUvkK1u8p5jmKUVGyZ",
  "key5": "5JAq2JhJs7jNBm1jrjQTJqgdGmUXxoQTW64UvQy5QaM1sUz4SG4nefy7hsH3aPkUoWnAtyXEFVr9pM7acynXWsZG",
  "key6": "3QVveForqhRhUj2Nx7Wq7hrDpX6oMWgDJCnCyn2A2ajiWZRw19r9EV3ADJUrtsd9xEisXU2c9QjbDZ2dgrkXrhcK",
  "key7": "2Rd7R1Co1T6U24PEvyiTvMVtPdhYkAUDMzHPYpqjRrs63UQpNdwP2Xy5YewRYGJLLckFdHE9J2vvXJ5R4RXVcXuL",
  "key8": "5USkkDjAGWZa3EAi5VkQe3CuqXMLY4Q73ZMN7HKeZSQLFk4krkFvjY3A2uzvUSqEkmvoEsbc7XMLiU8jrMmVmXHD",
  "key9": "37UxV7YaxCPdvYH1XKwt6hK8faxCxnF6QDDzw8HYyrfSRmQmG7gqKAz7Ku6y2TkcL5i1rCTnymGYubMiUgDWPkr7",
  "key10": "2qS2RfTR1TZ6i24NzwM7N9AjBkqZVStQh7Wk9yoaZnZzeiNwjsPwkovytvdhoKbzLZ3HooNh2V4EiuKjnYR1E5ZC",
  "key11": "4VE17EgsYoKKNiCg8qCbCXgwThdGJFJyCbbnrxzhXHjUL2Dc7C16AqSVkMLvxsLD7GA443ouwF63bePBBgmyKXUx",
  "key12": "4jQcuu7uLxhDD81figiLQhdFqQethuaVS8fz8Rv4vGJQAuaLBihjsMAme5EZJRVkeNczfoQBtkMYVWYBY1GpEJFp",
  "key13": "3uohgWoqySx8CRB1TtBHk246Rg3THDdtEZaGMVXvhR1kp2j9QH8bGhBqEmsxc4N7NDRJNL1GjfpPa6C3P1wkD1L4",
  "key14": "2mhJXrfDqMd8283AxUeZYaGZ2bdzZmH4aeuPMZvS16TLpsJi59a5Bo2HWRnR6FdQ7aRuHWKvA77oajo9t2ajoDin",
  "key15": "4faGWnh2PkYYB2jRqRajU9DgKwADwgef8jwXFnP1JEnst34ZSUCrRod2kxg44ceoeDZGrRM7ZMrkqNwpATssHVvK",
  "key16": "4vpn8H6K1AN9yQXvfNKPPUeWhnRZvGBDNFK6KnRHrhWAadZLPUfFP1uj9zXANpBjKsCJ31AFrV8zBBWpXcKMcoDW",
  "key17": "3EWLWeTa6Xq4e3ZwbM6zQrDRxPPPYpa6cQ16C6h8w4jAski6RnJnkopT6HRT2DoWpzfiCvZ2HWu8Gg7bJyeYesSA",
  "key18": "3xYBdEA9w9VsuM8DySQWASFpTb8b1LfNNPgngR6Nt9qYvYSeBUyw5PAbhxNi4hy7BQA8snQdXe49vnpqiGRXLEdK",
  "key19": "PVAaLfF4ZQk8kCZMNr2XxGQN8sRTenPa7YcG4FC7U6NXhmo26kXL2ikfeANHRZBu3zNmKMdR1KKpV73vMGwRq9T",
  "key20": "5drx4WQkUxNovfRvgU8utREDvxvP29doyYCvhGSXtXTfYuL87MhvAyH7Mzwsd6Y6tM2M1jGhiEWcKwnwFzwzk7kK",
  "key21": "3GJno4rjJ7wnTQTX4wQSTv8yM17gMtiEfU38KfzbkcGMGPCbzFhutP1JA3t6AGpSityLbpdtGLERUYruzAGURmp8",
  "key22": "4X9JtHNEcqfFrrp55NDeyYeposXU3oTVb5Hwf5D5MvAxa6CTUJu3PN3fkxjn7Dn4E8icuVAsKH524osiwndEkqMg",
  "key23": "23Nj3xorgvhXqMpQmbXFG1mow5HEiSrB6AhMtBCAwmcKQegoZADbZkvoAcQRW9G8fimWNiXocJhFSWtLvnKGN4MV",
  "key24": "GrZuVyiCru6Fb3wqDfvK416faUhJ5K3KYHzi4qpdLk7jkyPQwiHWNCVxE3HifU9Hue1yA1hCScXPrZMymL5i8Nw",
  "key25": "5hqupn3urG3ZiiiKd7WNcDjPsd5mMKdmnvVT58ayNeud6aPcnhtZBeFQfea9ogdixrCHo9rKxDsmCCZ3TJgP3pW8",
  "key26": "5N7mRfDL6CLoGzqNChiFuFQ4fWeqqMro4byzMzxbYZHDkYtnU1i3BGXRaD1MTUTmvH3ACQbeyYth5S3TqoJH8Cp4",
  "key27": "5MSPjwQHcx7QpyZzj6nP3ttXBaSQ65ZxMHaF7bWLSKB7rCKnszRbL6WePCxTYbkm5ENJ92qcwknZs4PGq3zqAAYe",
  "key28": "46RHFbB4KiShu4dP66a2jtBQzMmSu8zeqhyUNiFhgq1oGKHHcTuHSZt3qXV1mPJNBRMJmK562XWDCFjF1uYBBreY"
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
