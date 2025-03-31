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
    "2nXqCzvoEkkAJfUrTuLUKaGVqPtAhHnC2oYJD22mCP2jSnvArNaoTeHL9pmiNb659r6zybR4MDjti1BXFaTGTbQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZBGq2jhvuUm8VuBosuq8tUiSAK9pdvg4TC1PzTbMa7viMFN7GmccnyUqnzBP6GvzfoAKXMxGuWxTTAdwTrSTcB1",
  "key1": "yoG2mdev57UTEje65t6q2pikdHiRpMRexVQZX9Jf1ohqQ2uwC6MFiHjJmewqDtqbFWfCnnbqXrm7N1MUcMCw9L2",
  "key2": "3zxpRVxCL8GUpKt6E25vpKGS9gSQiK8SC6TaAcuGzzZKwH1htCWDwSRobx6cmKwF6NywQoPjYyKPs1d8bz51qDHZ",
  "key3": "2WNcWfA2oJjFpKHeajBCb3CdBxWzHQVdkTUUoMRpjXCkEJD8HpdQbBDfNH8zeciHvs2GVfhWCTxnQ7CP9WtTELLE",
  "key4": "BbCsPrppmLCQ7K1pQDs1WENqsefEXMSqjhWxNm5PFhysWQfrxia7nV3e7fybDpu7erN2LYjCtCS6r2C9r9UDLay",
  "key5": "3dZA4aJCXKV1oXv9dkanimZAAuC7xva2Bw1aZCDpYo3aZK5UUMxGm1qPFvQdiGPp8w7DkmXwNPG83P9FxNNiMoHk",
  "key6": "5jtnAS636Y9knzJVAFntqnJ8fn5EGS4a8qLdieV8j61XSahcyrF7cPtLMys5iy1ibdDGfepEndGPJU1BMXE5LbR9",
  "key7": "319emzSExRiVEAuUTfcqtxXxexbDCt3S7fvPw9vp4ZKfKW8enHWt3HghGWEgyvMvt2KLBtF3HeTAfPxsUYGB3CqF",
  "key8": "bdu5n5PCMPQm4yBQgoGCTmLtvB3JvNNngTtpV6MBg4kmNGR58hMYNwKfkBD39Fh2SpmgBhEpMZw1Uv43iXvFAw7",
  "key9": "24sYxetxrNaermzvE87WCZQ8rmZVdRVH1dcP6bTGJXpDviJfYP834HBUhetfSjdVYM41kvRzQBcm3X82RCBXP2Gy",
  "key10": "TbWjmFp59ZdKqgbVCGe9Dyf3bQvASiCbF1JZpUGTi64x6Tv9p6o72xnZpiQ9FT8Me38F2GjEaGhe6Su8miRBSHZ",
  "key11": "44zdvPcYjwi5YMbnP9Zd6Jgm4rcqdueCJ5UAR9vYhkPQ7d8Aujh64f3wae15hAVzU6qs1jfn3Yc9cJzWHuFvbPJJ",
  "key12": "4oHZVNnGAK4WV1xH6HvVo7anuRYaerVtJ942kzbC43kh9A7S22cW4xfQSKfRdXtmKXxGKJBNCmvbVou4Tp38QzCV",
  "key13": "3pedvdzsdLxoLFpxH5foD8VqPyVujcZeBijfzppvSbHvpJXUigAsNoSTsSNkrcZYUD2gTw6MTn68SEmbmvsb3xxv",
  "key14": "9zGx6RUDKmR7NEcQdJMWWfKYf82raHpunoVjGkxJ7UAUCweP1YSgcAJu1bQnpvAqFqtBPriEfW51xmBsg9FFETv",
  "key15": "3BaYg9ykw6aqvD66KRH88HGAjvTYERpzWXPt9eG4vCKbxJ4GYtmAc5Z4Yn2biiaRYQ6aqAQAeX5FxQ4ZuSVQ2EZJ",
  "key16": "5TSQ5SGdbBYEfGDTocMzmFdnKPh3iemuTjuHAW42xpX8QQXREG1AobdN8tFdJBdyPRQAXLtNDEAknbJEZKbvydFB",
  "key17": "SqvJQ7b5Kpv4fX9GBKfeNdenrCmFFrntpDvdLEcfFNBPTz3tnfuXh4CySWvAsxC58VRpnzz1KGKHbTvU9sKfWm9",
  "key18": "5e1YryxZ823wVQx6wWwLfZZZviGWH1C9nyVVnbaUG2YtdWmHt8M57cBLCesSmupozHxkqWzMzwWNiUGJE1h8Kd6w",
  "key19": "rsSV8sP1g4gfjfPkpxoVeoJnip9WBxyCXRoNuhnZXgkm8TLhDdFLorDnxq2QX6i2ohEQAfcQwPPADwkNVBQqWwG",
  "key20": "2MoEuMQx9fEWJG4ohAVRCmJuWNYELaGyCkA365b1pMpmjQ7vjLxX79KgSwNUcB8sEFMjoPrnFCM6FwWDatU57n6v",
  "key21": "4sVMdYv7piNH8o3RNnvj9qTtP9Q6i5aN8GexBs7JRw4u8aePpAyYAJ73SqJeTn8NVg1xEBMCZourMLy1K81r2jDe",
  "key22": "5BqUQPAZ5jjkBFK3Z9iVe1LKFjYaoFz5iaBDVcMjYTnE5YHgWa7abV21oAMyPQmXctUqsL5fcTFVRGvBc6PQovaK",
  "key23": "32fB5vXya6ifthcGsTHtYr6MDd9fGz4CP97VSgp2pCXvZrqovqzH35wxv6XXDCDbAZkYECL1qu8r19WC9SwqqTM6",
  "key24": "65HpurmfhMoLVhV9uLcA6xw6Qe5qS4LaE8bt3miyKNcwE7tCLRAsKQU59Stvzn1XqSKK3dDsnDQNE3ozHVX1Fsir",
  "key25": "362hqrWzbvyqCe5nB3Z1NNpCa4RWrKJbcERGqwinZUYchL23xb5mdm9eZqvUY4UDK7nXMxeg6J5NHJAoHevyYF9T",
  "key26": "fCkiQpMGhpDkkiJ2u4RDbbzers778qgvEkAJhGj8Kp7RrYJe1NxEBvbnMUqVotnL2tFX2ym2KZ2PLsud4gdggk3",
  "key27": "Z8zXzsMJUAbMoM3FDdS5MvMSYp1gEFQ8yY3r8CY322cCse2piY3JeGkcN7jddjm193zn8pKw1fQ7obikTUuMk3M",
  "key28": "4YkAfhpUrtTnGgchTyTW9M7jEPJXrF6neAbr7cqPPgzktaCZV1odapGBy4bMMZpEEddmSEtdHd4KtJhduEDRsXab",
  "key29": "3sVEomQEkgMPuuVPxbKntLbiB9kP3qAbnRVrvDa589CngT7yTjVYU16K3AwjY7CkxD9Yi97SEVhiqBPADoQx4VZM",
  "key30": "2647MS95acPn9j5PP4HvAS2coSFEvFGe2GtWRiPji681z4kT5H1cz74EuoKqYDbdjaMjMoDpJ7qvyGjT4vj4vDue",
  "key31": "p2g9bH8yBEFE6tsp1aNvFTzpMoVPrVeagK4h1SzoTjtjZbJzSAYC4hqdbsmeeM8pskHia8tz3AjdHDyCazepHgU",
  "key32": "QD7kXCr9jP8epZkGSGweYWk71RcNwXtbVUGdMkAQ7ijcdoQoP5FMjZmK57X8qq4Bjm1p9wzRoyoBGZBWghDJtLs"
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
