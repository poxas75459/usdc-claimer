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
    "2TT72WoqtheNpvEgkYc5GQuGd1z7ho2BeU1vmNLDHEHYZRJFBsmvj3rQkLhNGpLcReejdoJVToQvRr5T6rL6g6Wp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K9nJLZVHdxbfFFZvGeAhDR1Vq72QjfzKHczCMieRVHaYNhm4ZvikHfYFE5vm9iEzV5F1BU16wVXRKabxEjBWpVA",
  "key1": "4rS8mcybUbUZhWSAQ4BbH8kTsLaJa3dgmyeS2V2zEZ6qqXF1Amr64VZrVHXoeXW32CZNp5fsWECGhteZuuK2ehtk",
  "key2": "qGpdjQ8mAGxgSZ7RrQ9vVxrstiaJgXb7jBUBWeSoZdBbbYbpspnWkEDfwCnN5p7Sk2XawrhQZ86LYJCyRBEYn2r",
  "key3": "2DUzDYxCqPsPWHTsJKNjzjCkfvA3mHNPuDhKajyiPcgTdSYyCPnaQMTdxaaeHBsCkdmvsUoTtxvgN3HCzME2dqFV",
  "key4": "5MGn43TSzjnR3qCwbU1eiC3KG6zakZtgoUAk9XBb3QsCLyTVGKxU4PCBHq1vy7SW9wBKU61Eheh3xxcmmT4c4vb4",
  "key5": "2werGtBq47T2ropYBvECrbWkbFeHBHupMnmuJqfvgbZp8Kax6Aao8tRW8jd3BhVwCBYEXXoB6hsHVV8MHNeCknQT",
  "key6": "3g4gKxJ1dnsiNEo3Y5Puys9MZYLkm1m6uNwuLzGV2CvJZNN5V38xmu7Ln2HXK5jqdo5DnXVLtmMdUmnzmgUc9YD4",
  "key7": "64wF1fZhdtZr9pHpaVPKzAY4zF11y6M1r6Bk7CGoncwK1wA1wpnBM4P8xppvPKSXPqPxS6VRT9avD2BqDAkmYZsS",
  "key8": "2TjMvqpVbzvZz7usbYSSUHSVaWSFiZQFKE3yUoXX6X8iHFzHNwczoNWaW3tu5rdEFTGSyQw7mDp4sgNqG4eZEP7F",
  "key9": "HtKChMrtFFdAw4sS8DssPNWNx7tABGbxAE2NU4yWvPH26DH6ss7qdqsef1x3RekbJBXSBMmfUq8BZiDAexEDNMs",
  "key10": "gsLKaagEr4FiZnjZssi8JCng4LbfVZer64EoBP1ex9vZ1oXsskMNZPrq4UxeWQoq1Jd25o1JeK8eh3MJefgZini",
  "key11": "33VXnktcrHPe2mRwoRMvPzdWwM92SZhsx6gzpjKJwzJEaS6JHPcfEBoPTFbnArw1gpCLNN5ADojr6Tk7izxMevZ6",
  "key12": "4k67b8uiVMKSpfdYnWAednqv8K82JgaZWh49V3rT5SQgyrEaGUj7ZYe4hYdedBMpKTdVXmMwrL6iDqpdq6yGxW1H",
  "key13": "3izEt9SGG1NJcojzadLiJyZCgkfUegwWLh1Xq9v4BAyTrfggRWCUiE48yFnt9HDqkMwwforULSZaCLgGPvupnoKM",
  "key14": "2WxFfiG517oDfB7ksdDrWvBh8iZXYoDAMuX7gU7Gofnk7nYZjZHeY7iai6chuwTgVbkShbDVzXngYkTtySGvLxRu",
  "key15": "FgQt1hnEfsb21xVF84HB2DrW1vLkS6ALm2tgXNpNuSz1nCcYSYdXjNyk6Td8dQzRw4gt1VTZ5W3CgHajfhQDuaP",
  "key16": "4PVT5KA7qABdaaRQUowpSZY48AdUpd622sXF6QS38uXhrbwDZpb2pA5E8itfWvPvgregp9WfczbZbmurEaigsdef",
  "key17": "634TMRnULNv6comsZzu6J8rwCXY14pgBrb3wnRxicEkEKd4yGdGRB8rFsJ6zAX464Z9hc4rrMQcptaXjxJxWLMGY",
  "key18": "2W57pkN37FbCzRzUuSQotUTgU3aY6LRCR9A3okNcRAbfRY3j3CLn3ifeX8n7tvCEcRyxGRAoYwaW5Afyqdnt1SaE",
  "key19": "5gb6EzryEHmFnhwA1RJduT3tHQDxgZ9RJj7AhmnF3ZDJDKKb3c3yBFsKPWJxA5SFbMdhWeMvwtuqJm5Vkqi9AeXG",
  "key20": "2cynZvLBDiDPcqrAo5weCU9ssqdWEvujxhbw9AVcRL3LPZmBhiMdUj14xy5ULUUhaJoj8j9AXomtXsVfwzHY53KE",
  "key21": "W5wQeA2a4JCwUd6NumQGdKJz8jpw2eqcKETTChXUaFkGSWtFZxiPGCwVTmwo99YJUhP1oiKjWBj8Y88CaBFWpSB",
  "key22": "3B24cXQtcne3FrMm6jtu1Yyp1GVdB3wjv3oBoJ6ZzUoMST2rCNHqbWeDEmbb9skpdhQ8Evq8WcdBRVM1PGd155d",
  "key23": "ZAviSMxf9Z9KWB2f35jo9CcNidbvnakmWyZFNmEnrHGACoULzVHGXxPR9rX6Jb8s1MPuG2yTnYY75zm6Z2KAh9f",
  "key24": "2JCXYdTJFspDipeDnab8ZEEBAexSxywLyU6PRt5Aho3hHo4yr2uvNspjm1cqHRT3QWWvrmB77F6EPrNHYFmHpREa",
  "key25": "3RwpcbX6ufdsdXSD9qEJ7CU8AwcUZwVr1wTzxnuPVUpHVKJbg8QeJGfApg7RQZcDNrRfELSYab5ahmhrqnqNMS59",
  "key26": "2XLkQ8SpWxmr93BFYR38VE6MjUUnwe9vqGBTUX1M3TeKYrY59u6CTGLFA2Wdkqzwv17KW8iU4X33dEy35VgrTUGw",
  "key27": "67JTH3ER6Wyf3pjk5KfG1hX4xBbKFuubkNj9FM2mGLiEE8WLnyPFXtmi4YC3gPss1EKex1AJCjaLtKidx4moh6sV",
  "key28": "4ZWLb23SSZKgCyJ8DnbHKZDGmxUbtyQwM9aa673WiWRR7oJLUHdTExGhmANDuNVWtnnZgdkdUDihJKJd5czw369h",
  "key29": "uiBDTejtFMCNDnFPA2hctofZHshcQG6H9E1r73CU8dnaCcKf19aN5HYgznqPLnyheuffqJEQw2z7iBZ7n1BhoQj",
  "key30": "2RzAFghnJTyN9A7foCzbqzj1jPJpEytYh9T9mPkCWLvPQ26cyr3cAJhWxcHNjit1wcmQUAPnQ4V2pYHpkBedyeE1",
  "key31": "5NJaZgpnHxZF1Dj6GnKkxNahksC1oR1YMuzTSa4nDxw7Tg4A7Qq5n12wXQPsC1jfJvuPGwfrTD8VWtT3J3LJdyfa",
  "key32": "4VyZTbQGM5H5t8UWTC1yAxKk5MHNRPjNu8fjH2XJGertBDdzv1P9bG4LQqeyHSr2muHaCBSwWQzsAsa1q9gptPJH"
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
