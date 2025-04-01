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
    "i47LNcAxudddzrdbh9Pn1pwd8jZSsSscrtbshKbAjAYhKq88EiyVRu81bta39hzqVdiXZePWBMJHGn7XNCq5uhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VYGLFQFNs2q4XEZfcduZvjjt4CqaCmkxwoVvZHxkd1R2GWGxb8g38qLvuw6F9k8fdyk6FYPpVfvvGZXqqfP4JDC",
  "key1": "47UCupEGQAwMwvK2XzYtzeWMegbbdhFZ11Jhfcoizu7z26ACaWcGe7reaa32zSxFNDXYyZq9LhAzGENvtQsQsxo6",
  "key2": "D1z4fcqFqBMQ6uKto45kmnn7XwMMR8CCsEjFXqNnkZqrFb122KQrvsxAZm9eqzRPiFL5ow4YqmhgzP9NiF74oUN",
  "key3": "wZGCSQAjkBUaHdtJSEA4Ys2LLCit9qdYUztwV6E28H72MSiSwLtpRYR2HQfno4ms1hUmVt73RNa795iSYxGPFWX",
  "key4": "5k1c74gJ4uspyZcYwgzaqmYNPdZGgRDJVGppGjn3rH4xHVvjRjmvv2xaUKXxRD19ttm3bLRVZcRt1ar1a1AsEdi2",
  "key5": "5nXByKdRe7Etey19iqZPXdGPB9R6LwoGVNzmogr1woU9stCoFvBa49zbRRgLZj7MhsAnrXLUx24aNGkpR2qJy21W",
  "key6": "5quKqjzgpU3u9UKkjQ3XZMdaGw5dG4v5QiSKFCtHAKVQAMnus9QfaMjRnGL3dVY3FHrHtcA1UJNLnr4NXv7mBmvW",
  "key7": "5V21huN2skJozZp9c6YEBcLs97DiECmAygExz9pjQhmxa32WNFyW6nqp8A53NEpXo2jksdzddzaW1voJg7YkZHg2",
  "key8": "4heVBBXZQGTG6EFPMcimzqdZi8wqwrZcMyBP4Q2Us9jtEs2wp4yzAMiv6aJLFdn8XvvK3G8rmEy5hUkjokuAGdAj",
  "key9": "4tmS7tyW1UjqqeDF451mU5oMKXyDVxLjnJqTKkbxhHnu4iVGfDs3h5BAtJyGsXvxPqt4CoaSDBwHdRrThfAGVDim",
  "key10": "5vvZ3B5a8SqgncnJoBzxPRxvJ45zavZup2NKcHbd1mDDTWQbaS4JE9SzJ2n56PSpGeF1aVScusPqWp5teTQkmfg3",
  "key11": "wDjd5q9LLWSk3GBYKpCxTFgsejqXeytetGFikoMk9bXbWw1HKcRdz7ZfmuA4VbJnbVc9doQ8GDVzT5GRsx17t2j",
  "key12": "3aSWK4zaLUQHj8JhXhJooMNrrPBGFP2FHjKEAmT1DVq92KjYjEuMv2MWPQByBNxiBqgPoM49BMUnmHKVGgAedH2W",
  "key13": "52zK3F3KusmJPV369YoU8W5sHmp54exWRWLQtzekhr4wfZ4G3TUfdwcE713PTXaDrDgVW11zh91yV5SnREr5mnvJ",
  "key14": "2HkHqqTPNrEsiCaRWBTYGvc3rFuaDq4FM4LtQr1b5ELQvD2hmmm4L9cc7VWapF3y4WYXxXnMtgX8sARJHXHh8hKY",
  "key15": "51VM7FWvBryNyvec9EKumizLkFf5dYF7BxUzzu3iUpQkGkTnzSx1bZsXzm84hzkRpjQxNyhn4BbkAfQPWpZoq32K",
  "key16": "4Fdu3QBfUnypT8atN1dTekPQp9AMKuD5TMW9rV29rT4amqBGx5hEusHLTrELUMaFqGDB9Sxtd8ruyM7tqDKbjKLi",
  "key17": "F1jJgSjLspaX5DSJCgE8Ddw5Rq2DD8MdNcZCj1EwkiLwhu7CD1qATRYCWJynyLj2DEuHHSroUZMGKrDeq4sYtB8",
  "key18": "2xXCAHzrvMTjfaTqXG7ZoUWvP7e8UkMcUV5bbzej6wFgvuPRPmYTjsXRDHWZJTMGug24fr7PrFf35TXvkxsTgJVF",
  "key19": "63Tav5fp76Tev5MvNAHmD7o8NrMxDh4GLHPdb8QCFZSzpa5KpEXseBt1cYz3ngoMhLjfXcd1qoA1ct9NeHRmiYtR",
  "key20": "3dkPVpRKurSLK5RjUC6uMfhHsvUAqxnugDzTVqP571Va9JF3D9KXXJ7aiTLeQxdRRBTMGEYGJqNaEwqWXrTmkhbQ",
  "key21": "3a9YtswkGZreTodeccQiW68JCEqgktN5dCQTdrH9aSbsh8Pt2TLG3MhhT9ri998JY38uWrsfe4Gp4MTKv6xEfSSZ",
  "key22": "4hopRjYyCx2i24chvJcXCaKJB1GgSYkAqsdvHvzUeEnPxhy1HzaAfL1uAw21zXAxMDDjyBv78G2Htvge17BxNrxM",
  "key23": "au5XBfVitN1CFBRhwyGUmQgyNvYyGXBwUmY7TCbp3rASBQqEcsZ5A4rwJ13kQ6Sxd2tJpVscT8r9v2j13b4wvV5",
  "key24": "4Ty33t3JndKNWenqZ8xSrs4VhpQWjDr6MsF6CrmamKQQjkXCn7gcunEEhMbpmpbob8W3Qxzb8jtNrtQZpnZXGf2e",
  "key25": "2yXoyr7TiB4KDZuoGoeMiB7M8rWG7PH3RdKBE9ScWxTP4qxZrT4DCq9gJjoiSHh6U4jyDU4T9m4JebdGhs7fdJap",
  "key26": "4VqnjJgBzn6gm6MnUtDfdsAXuBLUCiy6qGMW4LHxGBj9jYZyKwbsAALBbi2iipM2TidrztVUEczsKwq5fe2C18ZG",
  "key27": "4VXNDehL7t7Ljz69dgew1cPA1msxepjgN2S73f4sDTzr3WpBz4w5QMyKETmK5yMf1njwtzUTb6XhRLCuJqcS5Ze4",
  "key28": "4QY9nXijMNEX1AUX8mM9YdAdYYvqbv2Pg29PuqX9b6N9bvT3eoEhuURejbauPdN2M1gcwFVKpvmwuHEd7Xg2DnDR",
  "key29": "4L3KdeUeSgxkr5uCrCdytbgoz5SwUaDRzUKmiULtpq2kzU8cNmLxqjNrrozuqmiKwtQqmUXisTVtmdVHu9PX7mkH",
  "key30": "43EbQYBWP4JtrGHZZ8mauxDj8Xdmj159y9N9QKov6xQzTU4XNqkbqVLJ4RkasgxvRVLZLi5rScBuXkfkAY1856KN",
  "key31": "2V6wxBUcwJnGGjKgFsaFpakNqTdYaGNPuWfEURnqd8j5VRXiXpiie3ScumiQcDVXdPLBEQdFJvnZYJQyzLFFHTvq",
  "key32": "46BSD5w1zq37hQsXz94imB1p6hvw6ueUde8juxbU1T4zS2n1H7RTUf9uAJBXjFvhRHkX9zzbHJpLdgjFzbNSJhSH",
  "key33": "3wEsGxaP1Qdnv7vRhmJh97EWoq32yVpdbMtz5L1Bs5egj3qSfWShgkezXBPBk8f9dFVaubtCpnRhu6gYZeEtvuzV",
  "key34": "4vhVNnqiMnk8FTAw16TnWD21oByacYiVvgUdqf1KhgEvT8dMP9bdyZzEahcBA7JfF3ys3y4JXxYJuxMkBPY5icxN",
  "key35": "3nYTCLaHzZe5nkLJ6WLLbChkuvmziRo4pSrihC5jDYYanS6QePfGFeM2QCiaixMdhHVrL1gFfL8Z2f1QNVFTKTMT",
  "key36": "icP23wzuRs2F2AUWGaNSB1L93uYpcffBLpMk1G5BPzugZbLhoSAqfedJNZnYAEnrzsWjAYzqPQYbgTEZMBnjwDf"
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
