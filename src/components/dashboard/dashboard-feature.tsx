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
    "3fHCEHWTXUDbZAbFW1bxBHpcQPeQbCXwUPuCgq54Qe6nPCaqfXPTspsuFasanKV7iaQhL8WdDnoqmqDAMkHEQrk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fvA4RU5U3M4zynREpgY7n3a7DewD6xE19c9KgJCsDsk3JGNbxaUgJrAcpqKifFnP8v398ubMuTh5jwn9cyVWosq",
  "key1": "3ao1EpRgN8mJM3QA4J2tL7PesrSNbswv9oh2ZVuuM7mqH8F7Forez9eDG8PSkn6mdEUduG9Soa3ei8iSciQs8SUt",
  "key2": "2Y9tdorcZxAHqEXRG52T25RXKJREikrsZyq3DSB2iZ8JLG5Q978QeC2mbAbVonHCSE1RJNWTYHaHyyD4SbrcZs26",
  "key3": "2piVRk3nmMtrkSvQNuiqbaVNVS9YcgVM7pxaeKqWa7ycnpjxyiJhHGgW6anaqRgPekE4UijC8cC8LQh9vkZPGu6h",
  "key4": "55zhDye9QRQHTByLFFSrRGapTpWrjuwrZ5QorLdoBdQ5sgP6V8jQMsbwWBs4QsPgyYvVGW3x6kizRkfgmq6A6JBE",
  "key5": "4ZsrqZ7FJb978Kj6yzmQRBN7A2Tfp5J4Vi6QFtu9pQVtYEjszxGpHK3tEh5Ffs5YXj3sfScUbzo7XkeSszBZnWYL",
  "key6": "34YSoXD74MNMQBoTA8fkf4NCp1ZLXSitupDNKsZhQwccfEmUx6QZPbFn6gQZ8E1vdHoQvKApQvRpBNb2V419ntyC",
  "key7": "ct9wr1tyioNbSJyx8UjesSV9z3A37xV9vtJc4MAoc9faANnrB4N9HPx4MKqshU2NBu1L2Ad48Ht5dHntkV3CsNj",
  "key8": "GACkDLnttvMUJRLPdZUWHs1AqfTcN3274sPQ1hP2wiFmUqfDrVk1gu8uWXKubk5MWHRxyy9D2quDHv2W4YSZ9BV",
  "key9": "2L9tRjZejHcCfxwYvSWrHePHr145C6Wqf2VnumF5o9BJJLZvinD9nhQk7iA8Ekk8ZjKwhomfLHjdCkt1qcWGqfo4",
  "key10": "5UQsNn6m299Y82sZYzxt1yZ7r6mGdiVuqNaGhYQcuqtkvpHM1naQ1Puhz19PmKhGzdSNKg6rDZ2wh7ksG9BgjkR8",
  "key11": "4qijTttvhURj4J4QSpiEpkzJsWZZoqADekFtfcnkZQghG6cungyB1xu7ZWYburXczbkWmZFw4dg3Xb8ALiY83dk6",
  "key12": "3CWzaiGabwvEE5Rp6FFTzAvDUMMUUgGyLNjaGG4vFBgXQ1iMHjoDYegHDz1rbmzvcsZPutQsFDx5r5PQAqVqLqVa",
  "key13": "2hk1im9xoVQGN214SW43pdExE4HnDf5Kph2ikX2QojgQ5x5Rqw2tEc9KtKTxKr2FbYoVe5jmP44kX2saGe3b9rA8",
  "key14": "5HwCZqGg88aQiQ4wJ6PR2qkxS3tnB4wPLtkrvMjfYFnQkZdKctjkk5D4SVtE7Qd53gm9qr5SaEEqhU1kQxbYjd29",
  "key15": "ZXBGhrMrYoqMv5kka7UVueEVfLi4VdVE6xRsM1AAqvds9YvGvuQGJK6Ef9Loj5211RwRJoU2R38gU2zLSgruTGu",
  "key16": "66qx1jxQibAaY4NcWu2qk4obrB12BU3p5o5zRbFmQ6rRXv54BM2JQjbLebWSAGsQdbcjuKnVq2QgvaBcvQ4hBud1",
  "key17": "4CJGfVE9e4Be8oZMGapqirZxG9FyUbrcm9WrjUx9oDXN3Ve4c2XreEL7NdR1nhdJLVVpnQv6jYWJrhg2TUXR3GKN",
  "key18": "4SsosRmv3bP1Dc5Aqfd19wgwbNossbwBrWYkjaCWhEfeVefuNggED8FW2XAgmfHY9Rib1zrHYtd2idCczapSBJmM",
  "key19": "2X45uGtWLHyPNPV37V1VaiktfkbshTMcBu2N24gQU3jvkXhKYKgAGA8Dh13SnorFWTJHh6xDy7BdtFadHWrWF7J9",
  "key20": "YDknXuBLbMbKFjBrfiof9fagLHhxKEroJ5QuenHAi6vrrbbKc96ExygBWdEzB73Wjjz1Fppvkc81rwB2qNzfP7b",
  "key21": "2qkvCaxJvC8LmtTyyAkME58rpEoGNx5x645MRhMkZ7jktCpLzuUniurVrDPGJFbzrXEqCniCHh9zVSf32wAuHLgb",
  "key22": "2JjrY8JwakEbP7YzJYyUbY5S658HK13mKgA34tdCmqm4irUT6XHL94y4ddUiv9hXjzrSwCia1H1qkGwwEzgpT1Gh",
  "key23": "59Z4pK73pymfHK82gZDE7X8r1QdYoNDHHaZSPNy7qagQt9hwbwEnG2H14DwtjLR4wHYBPkj7L1Ug6uN8urFUPzZv",
  "key24": "36rzd6ytSuxUBaUWksDcs2VHEjzMgptkeYjm95VzxHS3pofFK3tVhgxNgodfDMSwhEsUgZcSJk7W9ySrXVfeTyTE",
  "key25": "4fgQfkoPsP4SFBMBbovVZE8Y5iFFV4RZvxA3GqpYbnr5AdkcQwMY9Xs51kV1wqFeikLr1LBxXQXSYkqPSqbBnwZq",
  "key26": "5ab98bf4He39itJFCsL1VJXdC7ZmWKaF3N7k8UA7uoC9gfS8yozV3H3cRDaTugvN7DpfNmGjVA9yEh3z1aWoqe6L",
  "key27": "5hDABLynnxS3HvcFAoXXreiZtTiwHFUU9bLswXKHWa2Snk1FrZkLTyZKvVWjiYqtCdxQPX2AZUyT6xSrDkc55iWK",
  "key28": "3HjuW3M3fXuheBaPW8rg5sBpkwLbAe73g8PfGJJXzTJrkq7UQUeRgFCfZZyUAWotw9bZGWDm8UGo8Tsa2peRNGJU",
  "key29": "2G4uZVm8uccEWeEqmCsG3b8bo81uQnc9ThDtJy4FHvwH5eErFmVaKWA4aTdnS2bZL8w72NA9kmmeteQhGPk1sifU",
  "key30": "2JztVsFkJfpMnnfGtsUNCicRAU3uPTQgufWS2pvoQpRYQ1Lnu7cvWAUP3Dy1ah4V9gcaR8iNPxDxbkys31RjmT9h",
  "key31": "2VKgY1TH7yRfJFJBKHiuzEsHTumf1J8zGeBM8ZryD7Lzjv4CpiG3RkdCnn2CfVhEwvjMpTeUvYn1KiUr7EkuMGU2",
  "key32": "5VUcJAAwK5wiuV48bXTNzHdZGEaarUHN4CnbX7aZi5vEMB6M14w2pbDX729aYDjJSv5SfxYL3dtY7vTb9UXGZUup",
  "key33": "5yZ1yCMqSS8X4CBr3Yf5fvtDkwSKUhiPS7SyBMpHiSbh7XXN51phMcU5atu16Q4ywZRAGy8LSi5GwDDfX3BeoSnx"
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
