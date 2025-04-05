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
    "5CbPoGG8c7z2ZqP3EPDUKM35R8uSogUV8BzintV9fiudUyTpVzqFb97nnp8GgocS4EV4nkdYj7e9uKHS9Y9WTVVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PSBAUumTXVuChqZvae5uf3hLyRmS4UYF4ra1U1qT2sNvNecK9NiHvHsCXbfwPZJR3QV7YyuTepQkuR1BV7mDuJL",
  "key1": "4d8rAYpoyuVv9DAKvzVqXLxBCLdxn7tYN7QrgX5yzu181J2cHAaVgzTYxd6upic4jUDP52LGAbZwAi5iMqp7eoWZ",
  "key2": "YZWEjoAnqUNYaQ6bzDMpBiMwoVd2ssAPH165N63BMapjokHhsSrVzA7a6NhdsxbUA34t6rGGAUnUeZ6nGBU4UA5",
  "key3": "2hs8QtMUdchp8QuZUWYPRiUAWpxQFHBftP9kQ2xEnnnJkostUjNAL76NLujKZ5erzRWgSF98MP7NVy3cRout2BUK",
  "key4": "4z5fpmHL5b7DuVo7gxtvevrrN4bh5CUyAvEgkJvzxwKMtBZYLn4Vh6aaPZo6whPK6VSYvncGMtCxSzxCyEnYHfZs",
  "key5": "43eyr5WJMnHAaQ96jfpjN6iZmMh5szhTQPefp7L3Z3GU4XYCTti6pobKvUahSrSSHpwW68EfKhiNTk9PXpFAxZJn",
  "key6": "2g2CS5dYft3jA4BAew2Wtw1csmaEkQPMp94iem1Y8i2qST6w4BnEoWdcUBkxMwq9McMRnvj4NqZDsNyFoMjwGs6t",
  "key7": "aakfXbiJf533YqUWahnJqja1t8Bb4bMrboc8phYW8DeZ8ph1Su4EKxPgVo1h75QtaesrDCKk81bmXE78MEWBKXc",
  "key8": "4vRooc7KSXZ894iHsCVdvzKwi2zMwiZ6RnWoEDnwCz3sB4ormgjPjv7PeFiCaaKe2nm3zMtADLHYouue4hXMNSbj",
  "key9": "282Y9pqMHHwwkXr8eRNZU5rorArdKA4vHEeybToZS7ZuEgXcn1LhB4vNrQCrPYqnzDi6VXbRCxnhmTi4YxVxvoGs",
  "key10": "2ziUuFHu56XiyRxFTRdmmDHBQPaTfwG3Lu6QsZd8zZjMNvZx2D21SrGQeKjHsK59NhaGrirQhB7cvy12PBDgBqS8",
  "key11": "2dqQebzmMAdkkqPvnXyVsVSvYeWf8NJ69SoNw8CGqSdebkbDvLsKRfP6mCPpAhr54VBBrF6gbpD3stTnwM7A1LHC",
  "key12": "37FtqxR8BxFB2oY3sBVeuQnDwCAxJ7qjx4DMS5HSm7VkKxtT9iXSsiXonQU1CqV6KKUGmfKmPvTFaK2njs4r9cBp",
  "key13": "5JKa3L5VUx5zVWv9kfbq5x1sD18P2Ezd4BQ4Tj2J6k3uP8eFPsDGpW5LLAXLSWJLucjzJFQvZ1ucp5J2BdGbYhNY",
  "key14": "2t122f4f25JvfAaUxer4cFPQ9jD1pRnrvSyqiAQQmKnax48uhD5fE1hBzYu6H3aA62XwEJd8McKKqkTpfwqRRjE2",
  "key15": "4cnNh11jtW8UZ7tsCxKMcjNosUtPthGmNwD2YccfbJ6BpeEzGUeZ4yaRtDPDbhX4Bw2CRp3tcsCbV5NRSg6bodwa",
  "key16": "ybSjBvDqRRsESfQ7edrWGpV1v28gU82CnKVZz765AYdh9VuS6mAjaK6iP62SsSKV1ewQzkrLGCRv3jPnyRk1q22",
  "key17": "2h58CDof9NTUwWuYRxKccwET9Gs6JDvS6LWn6q2KGe458347417gP8L9PoX7GxFaijRcYobbdFYDVdSGEB97JBVK",
  "key18": "52Jq5ud6rsVF7K5PCNfnZ6gCPsna8sgdHvgL7ktM1Xb9kS6swXw6XCgoixY3GP4DwByH3kgJRUACqvR9r9E8N9TZ",
  "key19": "3pnt3Yi196ahjWwYdckVcW5rwWUGdXcKQoL2d67i2fTgAmQaELaYrB8nkBdFrDhnZyTAYRnrqjYFQhZMkyFEdth4",
  "key20": "2FTR61wwNNDm3oKCStTWp8zsGpPLzmtDXWo23TC4osrPdyRqdtxBLJGmxVtXSwwRcBmsPosewLDayfszExEq2cCn",
  "key21": "2wZE3QgqdFJPrQdewjWNd5NYS6uGHcxUcK7hp27x2HtmKeyTkXBqmAKZwXVEGTBkrfdtNe2esyCBj1VQtdpVb26c",
  "key22": "2QenoJj5MS11JrtoMxjK2Hekaxt2PXYXaVvp65gnxmuMXpoyK3azDVryYPTfqwgUGyQv7JAMrfRTkAe8GsqGQPs5",
  "key23": "3FhU6C5xQYNnjEnwpJPTYcoQ3zGgrt5mbuKj5u6169BhqWjH6ZDpNxL6gbYFm1LrF8zLFw2DKqR5QBhYyYE4rPLB",
  "key24": "4sRbPEc1R8vysn6GTHCMcWir3p9fFpKiegEZVRPyvqCfY6WyDxGiuU3uStxr7tdXgvkvApD37L2TXQyku88NFvR2",
  "key25": "5Zf54BQcYTB1ELX9H4Tokajt9sJDo5vdhQbgbmpNqx9WnA2KUyc1LYY6psP9ZuWUsVdNw8SHFYXJiJfuXiaciX8T",
  "key26": "56yzz1T1y5hT243twqbJ7QvjGJfzJ9iXout5JPfMB1r8NpKRMAy9HgzSBZjPWgTr9f9hEGRBCEbqx1p8iEFRkj5S",
  "key27": "3emH29LZUQv9goiTwxpCQiZMDcGg68TT7De18rVg5K1tDi4Pf6s7gQo3aeVTGUhsHWgexthQPPC96mtSnNaakJ4v",
  "key28": "3cG4umqTm37KTgwKxJkgqrwkCy3szeLiD2vvkKCL8ikFb48nnRrirkxkoATbyMxC9iq4CPtZX7MbX1L23qdWgUuA",
  "key29": "4qHfvnDKCSXWsg3hNEWLV3RDWFMrXKehVf2UWqt2XaSPL51fTfKL5qdtgXoLen4FcV51AKD3aNLpZo1VF9KMHnss",
  "key30": "42b3osYUEfU6j1oBAUT8cn94PQmgK7LLdvqkri9UzCkN26P2yqPnRzAUnUQjMqdSMEteLD5EWqP4TtwBqqtZQZGv",
  "key31": "2UFirjZfprnLjGtcM7xic7CnCNHrGFnP58mz9xLh5iqjKWJuvn22pNbh5xcQ7GyLjktUopy5TWB7mqmKG815v9rT",
  "key32": "4BqQhd779gXacGkcqYqZXQuFYvpCA6UTLHXjEAyKSUMvFZQ4JoAACqXmXcdoqiLtacVR3zRqMrgQjDKnCu2BwEJ4",
  "key33": "3Ap4VWyWc9LNc5NaCkyaf9ZQXd1i8WgtcJVREGKUpnVyKkyvkprwkrGGw8teMVPsrKPtXyjZuhwFz6Y6ndBQaEfs",
  "key34": "oMwAv1cQNdHPY9phBdBWWDthU3E8i7gGkCejjADcXPeLCJrmR2ah6bZqip36sqrGUsNvW1PJDa3GBhV8X3UvF4K",
  "key35": "4DmdtHEYw2QCummqthMnd1MAdBzTyJoEqmzHYGEgKsgCzJ4Jt6fkoQBoFGXyWupKbBsnyJd2dphak4v3rTAxjZzr",
  "key36": "49d1qptKcGueAbr1UbMC6PqLUExyUJXG7KkhSC58tbQ8Va66bm9METqTqyc2YXNqE3j4aupJLLGev5Zr4nxbuiHj",
  "key37": "5kwniVqDor12omVbcwgtnXH8TqAkXeybFCdiBtZ7du8gWC2ZaYdPj3smuGmqkqsKoaH9iPRX26F3aZ31BFY4Hfvt",
  "key38": "xKEhQAqw3mrcZQ6zJ1jnyvvqtKUgSv9hZ5kqFxW638cxT4LM5ZAmm3HfkB6XhEmpTkwewQTrKYDRxiZNaieMTSc",
  "key39": "2K2poe8tqxSSfCpSRgBTdMzKdsDJwog3xMiAX1FGLRvBf27t3PN85edFe77mn1Ej6nTfdayCRMoxuQtoiFpsBpib",
  "key40": "37tHX7WZMKUMsxPp9SLQ9fuE6yYpSYk4hsb55d2u1q19PCHHhKGuxiUoVnhKS8L4fB6ez6ijy5JknV3PHjUqHUPQ",
  "key41": "2oJgVWvb6EeABQe6QyeHzYEHWLPzy5eELivoef6WZKrbgCX2urNDd9h6BJsDwDKGMAJHq6L3ZNn2WmfRZs7Ddqkj",
  "key42": "4JCjvWUPwQDmq4gzq4FuqG2sHK5MqaKvo38dxLUaNV9VeDvvb81mfBvrb5hadf7RFFer4SdxV2kPogUVHJRuvJPq",
  "key43": "9mUPQ9Rir5YohLWueot5KL5xT8xP38Zc3WmQjXQMJYUxdXdnN7RhMqtDAXt9dQ2PhSbfAj7QaY1Z8NRuVgGbCyh",
  "key44": "63ptA27QwV3HkhKSnNcxqYjeqbTtZJicfe3XfpnMeBWpiY7W9GSZ8MD7CgBL9rpMrZ5m82DZE69PcdXgcZcnLchK",
  "key45": "6434APXLimkmG6cahk6msSrRQQKr7M5StYFzX1qmzdEXmJyefAxy4Znuv8F4WUtUcDXCMmMKPCfXZuKfjfJUe8jT",
  "key46": "3AtgRH6PktFm1ScDrDAi84HWGj8PTiWMgnxo1y2qzYM89c7c1d7Go7VEGkbg3MDjxn34qnq68MCdrxB3xU6wFxYR"
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
