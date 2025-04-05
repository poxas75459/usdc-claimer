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
    "2Lm5H57TxRaWque8Chr22gutmcGwrkUYNEVjohcEwRXeqRcrTtjZpG1jyTJqKDijn14xL72VN75cj63kL96WZQ3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZsWe5fcd2BPqvqWu32uGLk3y1T79waLJ7GxBAatdMDk2pSLWY6GaMf7BtjdZhaFWKoRNEfHcqFKfEvokYwuMsU8",
  "key1": "GED8XJd2i48X96WJvNype8Pj2iAFfHKUFZnM3WeikWA5PpeKgKnf6YVr2fCDXxhX7tUTbovU4SrgLXaMEfW533B",
  "key2": "Tir6uo7b6W8b4cWmDtNco2gT1fvc9LCXZiDrmnboBtughdJqcfkfcaU7Bc9KPvEqvebXPD3q118Lu11dr6k2KfE",
  "key3": "5kMgZJjLkBERvttZfkBFLGfB3ymCnF9CJdYZtNNL8RNsSbRSiVdfYd1jsnuzwAmeZDj28ufNXN8dmeFhqKPW8W6b",
  "key4": "4gS9neAm37WGR6qpmBeTxRwtKdUJUM2dAhJL485fkBkrtL2BoAYjmsTp97ZVUmXYAFY3kgFAd2CHosbWFdAtxm7T",
  "key5": "2XszVaeiYgyBisGmWsNLU8LkGsZoTb9v7qnn1S56m8EDKCez8xPN2dUn2T5aimYqpxd4EJfqC7nzXHvia2CxAoun",
  "key6": "32jJcdeBkadrFW1YsMdxcbGex25wkcy8gCcN5dfjj8Mm7181pzCAdHfZ2SpPTqjD114moc6jXc4pkKpaGiBk7Wte",
  "key7": "4hJjCY9pxnWomi76ykjGxWJcTRoiS2THbeqJzWp58P6mymc6yYC1cbxcmZwEtEsUqz4VnpJkv3BNjrAhc4gNVH1c",
  "key8": "3bFmWERS7ogLtU3yhwGqhvVxzvito233h8PPyDJXXepKjREeXEPdMZ4WbkvZoLSiyGMn3Cuv6bg1Kp2qZhqDTFi5",
  "key9": "2etR2NGbaHi9n7FLSNY1UNo68u2NDtE4BXNqQ3gDoW6RzLkcXu5MGvAU77YML1dA83GggeJG9mvR33EoTwTeAMjz",
  "key10": "4tBV8PjaFRLwvkhwhjoEpAqL1CwjEAiNxNWT4o5nE8kDdPEbUsX6EgkKsNgE77qnB9UM7rRharjcMMs8vQgwkvm7",
  "key11": "5F3fr8pey7ZAJAhtGgVsSoCTRjpLadX9PUgudievueNyijAYNEmkcFS24Z7zMXDTDPeTBsoofzh1MjGPUbhczv2v",
  "key12": "5UxtQU1GpgryV5YxfopXNnWxQHYd9PHgYyhZ9i6w1miXLAieCujrC8BkuCiKABAu7XLFZvBUCUt125CabKgP5t2u",
  "key13": "3q13ESk9YpHn6WD3DeDJDQ9xEdCTSd7nDWjVBhMtF9kATPLoD7JqwLPnG4gcAT1ZeDvLa27SMUJeRdatUzTjC1NX",
  "key14": "4JuMYqzRg7g9BdnPG3a6yzryLJ17jRPjMagB9aBVjMfsSev41uQt2CtbVjw9gN99cXqoSxhsX7c8kML4rNWHycGJ",
  "key15": "5zyGdSQJizatLRzM7unAcZTwqKLNGoqDGZcsar6L1RqAK2eFu2oFrjwd9JjSv51pYSToXDtjftmAa7jYWhPreZqT",
  "key16": "3NGaZ4j94VbJT6ZCoNfih5EfzGEc4YTZdWaZa55iy9GwKTPpGNwRhPTDPM94HLpD5bQYbKyFr4kHZzCHoMc5gHN9",
  "key17": "4jQnvcGa4RKiyBBfTn6razMt7uJWcJvkswqxBDLMgX9qsmLvEew3Gmnsm31s5m9pvSSyPJ9u3fdcMbJW9okXu4Gs",
  "key18": "5a3HbfFu4fK85SYdB2KtC48Ew4dBxq3Mo9XpShNyQUM2HvYzqnWKqCLcDffGJAVPprPP2qCRd73svSPFwdDHn1Z",
  "key19": "PckmjsrbhFBZNohC7zuLNThUaBmvZDum8ZEDmZsHLa1X2PAi41KsTrNG8ZBJ4cBD87iQkcjvDo2wPBkPS9GFnyx",
  "key20": "4rZB69qb4Fa3YcuQov1AHprufUFnPCXV4Bu1WNXA2MocNUDjcWsixhwhiiryPZT1L9ZXZaSAp4r1dh7QuZw2adYA",
  "key21": "2jcxrnckbaXdsTfhaewVeEz91dxmKKTU42vBPw9GKf4xB2GjSKwSA3c6tWyCbyxwNYso2xsZBSxhMWZCYHavpYwt",
  "key22": "426Bim7MyPQpepf9jA8a1ghtEkz97RvwpM7tik2VH4pL53BsGhjpC1BqLf53nVdaF6WpzyVRPN3iBCYNmGwzD1ra",
  "key23": "7DwNoJJ1UzLH64TznoSJCaY97F7FnZG9NDdGHvJDyQ7yy6Et4C6URC5q52V86v6kiwntuFfKAn5YQkhe1QHW8uR",
  "key24": "2RR8mbDufZrFQBkCnazfHgpgzUME2KXRjak7Ao5pf1Kaq2dabHh3LRreTu19XoAQyetdfsFsyEuPEnGAE6TeFHck",
  "key25": "5J28Nv599De9WPprajx2kjJ2Wk3zgTBZuuWpHy1qa6iJ69HmYPx6GwMMy5n7stKhC2WTYwPTbuJAiN6d4R7qkzGF",
  "key26": "2f4u428BYGz4Cy4mY9jRFkXuKoCbs9yJP7dSzEefTYKgjyiUMr9cVyvogYBQgMy8JBT3G2HT1FFbLgcJU7j2HzH8",
  "key27": "3re3MrdM3CtBpx5XsNQHtSMouA6ApnSKRfdbUdxM5J6J3jCdFmyDXuHLtt6WtrqoV9xDaGQc1iQrfJ6knS6e2S7P",
  "key28": "22Suv4dDGKtWyJ9rYTdNYFPm8y9oHaf5Li6nGRk918nMdyVZko5g5eeSd1QpsHn7VMW2quiyTfdqaPZwYyEDZaqA",
  "key29": "4VAUCe4qNX33XjsmtVp8qGECeYF9DNZhM3FY7uzgzs34tS52US8rUEDdSxFQABFvErDKQDjMjfyAuFppxfRuqdSW",
  "key30": "RHaoeyaoaCn1hYHrHVD76tNaMDiU8mpKND3gEBgrvAz9isC9qz4Eoq7AnTzA1Gy6NZuXaznYb3pZHD5jQgXc31m",
  "key31": "3KDmY8F54wpgxbTLzfCmV7w3aMFKJynjxM3PpzS1W1aJvbV7Rdr6U67qecymmNxbGpTBuJ9DYVZsnPwrVpJhfTyZ"
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
