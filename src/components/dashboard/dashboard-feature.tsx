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
    "4AUjMuD5tyor8eeEzi7LuBCXabz8Y5Q175woEMeSwxrfk4pg1YG1GDh4fjpviuAUoZ4wRKq4oHKhzwSSQnP3BFnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFNkYrQFUF4NLjZkDJZhjbBX8G3afzGgjzEsGdTCJDoCfcPddPWiG6sV9sm8Hktwb1eCYxbXAg4RZxzYuntV2Zp",
  "key1": "2TYmf37sHMXEfUhF1m2aoVteRZDr5C29MC83h6rZFSUbwzero1SvKQeivU3YFKJZ2HpPfo5ZQjUrYbEyeuC1c5n1",
  "key2": "2VJwnzs8WUVzS3oFiZ17wj59KrbvyfLLjv7YxwbXebSkCoJcodYHZqW6VmYkNPnU3NPuWAUoiJB6TXmjBPYjv5s5",
  "key3": "4KSDJBR58wcHsvQMkJEW7rBWziffCtfv1EWv2aaT7VFH12tRA7zCJSirwitZ4RqQE5NxxTqmC59hpapaJtXH7a2J",
  "key4": "2msvy24nVeHGN4bQxGhvJhGLZMnYh7at34TQJ8EAdJVwnH52uwrKntgW4JE87xjzxkpDTbCLvz6KLLF8Lf5eorE4",
  "key5": "5oiWjqJRuxh4FUXL8P6ApKLxHHbURhw2RFU4tQe2pGMn15HmA5W6pehpJx1wN5ziuzH3BAkhYRJjurWsTMUNUs9C",
  "key6": "3QsY53Ggby8Uhs4nWLGVGi2oh9D1RzpfgyE8kEs3jBsQQ5kdGUE92XLhiLApWdvvueiECJkjB7vszyMDyo5w8iKr",
  "key7": "FhSWdkCCnLvA1dfe2p4UpZoDchPLCwytNHNwRL3S1Mcyp4zEieV5648st4SwVCJhm1zUDMU2yVE3qiKDy3aAu3D",
  "key8": "5vxLZrVePPHkiWFtotMYXQN8R5sunfCoqLkjEC4Poka25Dp9fcfMhLMJPLL1KiPAQRfNSBi3sH1ZMNxbHUhUFM14",
  "key9": "4eMTKGmvgX1FMue6Xec94RKxVMTuvaVNdzsL5RENDzwGGGN4g5kymtK63M5jP6NdAHnsKgNNRAkAsZiDJkgxL77m",
  "key10": "4detjCX96xuCMy6MEWKDQum2R3jW33SV8LVHFhqYG2VvH38nfXW2NyGKJ2m9uJxupK5ToYfMx5A5yJCZwTNbf9hu",
  "key11": "4MWXi25fyVyXfpzVGeT9gt3JR47GAMc56w7XNhS8BCcSS17SnVAwJvmD1AjLgw9RqXbdTxkwJGWo7Dh8ixQtYf87",
  "key12": "66HMaT5PwFStV3GUxbB1uZgZZcjhY6qVMr11w7ERtpdb4pirm9Dog9W6JdAtu7T4T5EyQjPubZMcJ6eTJarfei6N",
  "key13": "aynXq8VbCA88xNFU6joW8ocEn73BsUgdG3W97YKADmSmZ2Ne9KPUa5jmoUDGeh4Mp6eRfG7NiLNNaw2FV4VodDX",
  "key14": "46rWY5fqkUy8uVuWhFwGUj9xxFnqzWsQGD7aNb1oYKQitqUPPY68tzSrXEfP3EWnqt6Sd73qsVgReGcxBEKaiEBT",
  "key15": "397sUjJwBz2eE9MmwDWZxwXgWHWitwFSVcQPYpYgunFuAMrBf5etEB58YiDMs1uPgTXRs8dcgv9VrLvMib5XSiFM",
  "key16": "4549BnBYFsDMHHaZTigCkxRHcG8aoJW3SoqJf9HReVgvagc9s4heaRfgxLJFRN9Cz2791nfg5671uzpadLdYiLF8",
  "key17": "47MefnVPQXsvuQifDNzpLTTa1gYRxdHdqnQ4JJaVPrvuCDESwHifVxvH1SVEZ46uTRKnsoZaEBfG3UFbstq6oTEg",
  "key18": "4CrjJgpCe1LDovxqTadv9nbAXC5Hzz7Pgpqt1UQeMF49LiUASfjVc5kz4Hahu1GCxBYDmy2xB8d1pgYXWEiLntPD",
  "key19": "5uTJiUDkpd7fPbXXv3hQnVKGHWwpqPQvfBhBwbQi2WC4xCjDDnwhZTbzJ1ZBnZ49VgXjRWXn7oJqBKsarfe1DSio",
  "key20": "44eZkrBg6QBviUxeZ19AFWbXoL5nWh6BzCSRdYXm8Q3CtnFVnbb1J4ZdjuEG1SgCz9qKassPRtcTizPu875nHgu4",
  "key21": "54oNWXdoLjbNGjxCK3zhctoezATJuZnpm592HRWCCBJqiyugGow3NsKPcRjtu6NAUJPRAvfz96p2eEezrtPjNMsd",
  "key22": "4JvzfjPiR9jicRvPyoXqWAtkCgqhwPHPKHhDJRGgnB5JSaqxnQ4R7KnNV1tGgqdZtRRQAJiStGfY5rtVhmqVUhDy",
  "key23": "4crT3F8787onfjWXXMnWt9DZEic7sgVbDCech55VjUwbjMeS8mRma2259f7Qo71QLH7bjTohyhjV7eACToSxUHYq",
  "key24": "2SkHcykp49WR13zM5SugtWnfBu4b86K7DgqtVkDF4dSwqLe9V8PqypZYprX2uKfBifBstJNTUTkSTXYMUDADX8Df",
  "key25": "2EncARt73kcYxCmitLWsM2Dbd6AZuwQ6xK77JQb4dcKVkmMy9ZeeoriLCVJpdfYLbdbZNg5X3FWHmWtnLira2bq1",
  "key26": "5b8cK1FWux1xzoT4a7G17CM94jax5qpFYF4YaGKzZcbk3ncFMAaRrAXv4gbp5dTXvzv8iAbcJqBWrzf9DVKLKcEa",
  "key27": "5VKY8Jiiukd6Gvbo9hApztemd5RLe4aRbNFwPkukpK3UojpgqDH3EZrrzPvPwmwpM4mYNZHCLTLjiJoQhUgiJFkR",
  "key28": "2ErcjnxkEehDVZGC8rYoFZC6DLb3YJkbdcqDAg4E2LinhgXucyN45tLNbwoc5BLmffPZd6GL7sC8mgCHE6jouBJe",
  "key29": "dVgHDpRuSRG5hKGg2QnLrJTTjxiav9jXVQ887cGooS2TgNQXsdPdVjGCofC1caghC681zChE6USocCd3RVuauwc",
  "key30": "4JXa7pM89RGwrcsJre4QjLuVCBtJqGxWEvRtM6pwWuwHpgn2PnBZQArsRYbNeu7XM2XLW5ibFyAs8oVLoSJk1yTF",
  "key31": "2BJG4RvNPLNiMLpkZ1BfQG4LJiDS9TticyuibT4GpWNnw54u12b3q61Zt3vecvWbcPPPLJ9uK4XToV8V4wGJPaPf",
  "key32": "5w1tdb4uYqMsfZHdpWm5eixH4txForF3jXxqt8v9sJfUKucijrh1uQqXdfwH9bLVyCMubSujqDVUcAFyGDuBXnmE",
  "key33": "2bNLGWAhGJLWD9yDMjkPQSpdaevrAmy56xYZa8MQbB5PQtJ4PYWng1hJDTnMmTZ3DoQa7DMjaifqkHsDMxDXJNxr",
  "key34": "4Ewzn1BgEYFRYSSKeDax9aehkqkK3Jt74yfFCAk1YzY6sRvucNV5ajkKbFhD7M66RWcBCpFm2otdY7c6YXayMEMn",
  "key35": "3mJgAoH2BZhA564NNfmAcVr25eco4qdqtBM2jEjhwPBGeLfv1zoySic5KD26xbo1gyT8QVzs86jGDdjUqaAdVvHv",
  "key36": "5UxLB8pQNYPHhuvqMeT9apra6mTQB8iTpgT6E5XUu8K5kj3zX6qKJbTHsfobQsb5Jt1R6BNrMmREsAWFpAUeYb2A",
  "key37": "TkjJNHosHVb4ZfmYKL4ZWwLVgkRBmEBq9QAeT8nfWHwRSewgz7MTiMo1wbL55qrY38YxNAYWcmJAYkSokKjvAXg",
  "key38": "2L5ngKGpbujjqLU6anUjPDney1JbotHp1u1iHDHMZXoAaNbW66rx9M4dStyveMvzFXWqimMeqNuqtZCa4s3N4oJ4",
  "key39": "qsYKJMrTWXFSVj5zTJRSEGFkeoKDrd5MXJHUFsVKJrTuVhY6YY5GT7d82MAEb2oEqdVisKnVi4YqNAZ7x5vcmAa",
  "key40": "33qq3dqkoioKfAy82mSqT2nBzBqgyBAF4naM12zFf7jZca9uHnGnHJ6FWdDeWjMcAH73ZxRQWdeCGJ88KPiPXFoh",
  "key41": "3wB3mYLfD5bdYoC6LpjDULmA8EhWwE88FH6sPE4wRBE6Tiy3ZxbiQGz921nkKmpmJ32jRiwSNfFmvHcNqp8VyiqR",
  "key42": "3w8som1oHg9mNbioSe83QX6KmJfMrFnbatfUZGbbj5XXnfx1XJJsL8cb1nMxbGNpQqUCUacmGYoWJFN3ccekiyyY",
  "key43": "4K8FbE3eX8M1HChCyp3BR5eJcKDpK7zCn7sHCojzPQ8ESM8cjvVXMHYYAyb8HsU9U2N2CTBJfg84i11zcQoDP1zP",
  "key44": "3eDHnuuf82Q4b2epawFMBWAbwUToGiwE4jrY7cLtFNrmPFQ59Udjam8KcZe5gf6KsahZiH9jFh8xRaKfvxrmzZ7t",
  "key45": "FQWZrTubzNyzJU4ieQcDBERrS96QPS8JBo97DMK6pBemHozMiWrPzPZf2NGDtToFXqKu9BezMDzAHcJomUHvDf3",
  "key46": "5ynN5xtbAvxfSjz5ee3VHf5D3KfQAHfjwZEpUQbmEWFL7f55pNtpgc6tpudigYDvJ4of57aZMyxkyicwWr1uuNEg",
  "key47": "3aMcM58eeRcSakffFwQnkusapq2nAD1yVkWAGwFBmKWVqHn9mEMpGXUgEMNDY6D4ptrqPK29sXNZ2SpaknnGr2iw",
  "key48": "4eN5EF69axnfWn6H6fWiT7y479VX4wtCCaEj3ksAmg5xEn4kAMj9bK9o4a9eQTDNetMuFQ3Mvxy4SmyjVZcJZrsf"
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
