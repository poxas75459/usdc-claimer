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
    "2FXJacdSyA9VrHW2XCCW7NyDr8hSXnuWtUSFp1yATadt4ZnsH2fsCMpX3qNsysfK6tj1VgxPQiqRXaJJjPNfVuo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ozzpkMihKjz1uCCcZ3xz87tqnW6RgkNSuCcdhFUfk2SEQ8WP9x9wPXuPrSEdbC3GihiUb7ioyxj5Mxs9K45nNzx",
  "key1": "5bAx7KvBxshHZyZiF7ZrULHcVPUyUBRNeuskL6o4STwKtrfRJcmX7bcR5mZ6fbyqnRd6KVpD2pVTVhrjVtXJoMJA",
  "key2": "3tpCtDXcNncypt7JWpeUAsfbt7nWPjUJZcRSdGCiM7RzFUioqYzfWMpBjZDwpep32JaxZwRQzNFP8j9Mat6XcUTu",
  "key3": "5vrzEH5Kp2QfeWqsmMyxJTaTWoZ6nqsupYThaG6pGoBmMAwS7ZCKoo1PnQrHoKe8g4kpaj2Hpj5F21Vud2iY3fDU",
  "key4": "2ryvr6b8FqNyFD9SaHy8ouhGmsgFNKkjo1rhbAtnHC2zKUMn1AXgUUF2cZMdrZ5st1yYwrcM9zjqM5HU9B7KWueu",
  "key5": "3TAb51jSxJrJMpq7ZFtRSTfDBzDP2DqaEMPrUZmFtRyvMH25fXwryeGEi5wJXGfH2tQEFNk9JRssXpkMVvmhsyya",
  "key6": "2Ubaw9kwyMK7kRrL8R3963qnSj2jEvx9uss8t1iK6HvXcjcWKauEjitJqZhHQTvcKk5xxACzgtoksNtmm7PTPxJA",
  "key7": "5Wfw5DZfJVrQupxDu6BjZTANkvxp3w9HysLuZFgxDeARHQPt63zdDJ2sVwQRwgEdtxVVzTAPfQQaYqGf4BrZ1sHZ",
  "key8": "38JjMxBAEJnNdXgfn7HskkvHX9hStGxAxdfS1nzJ9sXRKaZFkS8FQjYLwi9kL4ogC3jmLWLRq1H3DjU1LA9ta9cS",
  "key9": "5Zgyrz9snhjBqKq1VybYF4TW3ShdYALns6WKoH6SaYQwbEJhwQ3wRJVWqcsB68AbvHT7QJvGYmHPecgyNNy7YLuS",
  "key10": "3LDfLBoeRX3QamySDF2EeatrgA9LqBexNw5eboc5d9JBBH4w9Yq1rStULukDQ2vEgvdvSk9q6a9iHR1het7SyPm4",
  "key11": "45KUeQGG5jTauyaEXCJpGSJj4eh2oGPPTJptDTFAsn6dkqjgLtzFw6VUaubMyjxTkEvLUTq398Vgf63UAkLTb9Kr",
  "key12": "8hPyi8FRcKewMMuZBzpbeowKyKvnBqFdbYHyad4Cc2khP2gjnpi3m93MaVLA6xUZoZV2gPk9W52MQ5r5ZEXVh93",
  "key13": "3QFiBTDMHiW94AuT4wuSfkquNiyMqEeFZGu1xAHgMUmg4uq1m8pJEkVA67vM1XwXn1bYMdZpBSf7pdBPGy99BxkT",
  "key14": "51NbZS8n336fevyxyAoAPy2V2KfR98DiN7v5nKkrS6PcuEsKA8WoML92B9VuSAX6DnXUFPnSVTo7anbikhMy8SoC",
  "key15": "2THdg2qLfspu5GRakYqjzv5VWmZnQwmyKG8MA62AostvMzZjx3HnwHomw9pWUU1g8Rdtov6p4p7F4WSx6rAXMZr2",
  "key16": "3UDvY1NcMEKakfg45NQPUQjHsdYkcGPdMxC5zLQPKnxhc2XqEdcYXb4bFvrFYwEHB7z811njabJt5sEiQ5QeALZ4",
  "key17": "4ztxupoHKjkqnA6Yet8HyNa9XwDVdLhEJj6kDmiQ6gm4DDRsWfJySonF2uMAK7iv243WpGuF1UYUUMTFWuThH5Mk",
  "key18": "67iELHmppLsyqnzXV4DrbLkNFkVSN8UnAwEfTYRKVTGvbXa4Y3DheZJEGmh3Pyhs6qBArmevTjqpmys6n4ZjN8Bi",
  "key19": "45k6yjjvRC8jeQwG9tG4Rr6hDZ5vug2jQKLiuTfXt4eJ2vXiCi3pDMNUeXu7LjeN3pkiBw39Cnf3EXbceu8MKBEG",
  "key20": "5uG4EVMNUDAbzngZgTWRzqgLh8cHMq1YkuTGEjjHVT8mQgJkPjmYEvnsWf8GBnpeRNkLFdCNdkQprJHb2sk69mtn",
  "key21": "2cZjyCDSqrdf2wEKQxuNRT3oceqEjhswQ5nvzL8QNFafM3h6ULN5qCumkSjHBieLNHXdBYY6Pise3iLKG8taziXu",
  "key22": "25AeSxv11e54F7JiaHQWdPy9p7fYSgxFz43saKAM8Kb7YpD2sueLTWT6P7sNiqhv8oVFeaXZ91j4ZefuFZqP4R7c",
  "key23": "4hAxXQ9qRdJmJwn6tuv2C8yvLsznHypiPZYG22hyzLp7k9pFQdXBa6icQ4YVMMMHSZ9auMKY1TXKLCeoZZvJbhx6",
  "key24": "59MZfutkBQyZbvcM5R2d1FXbyyrVuEM8dJdGsBta4xgDNgh4kQxUs1ji8HSZdsYNv7fJcPM1uAtafvekgGUhAEai",
  "key25": "xJ5VKqEoo7qV4QGbVkXqioTh5hcR58RFr9zugWg4qzeWURtsTivXvresxRMn6TauoMQvpp39kS5c2amiqRsdBa9",
  "key26": "3n21MVhc6juVvUugrFqgbS9J2Ua9DqCfSCkJg3P9io9dajSmZLhR2rz11rGqXgeD6yUSNwpQeNGQYPAX82MUCpXV",
  "key27": "7zdHUMS9CMYu5tmqYUUZhfTCTMf6mmRTq7eaV2i1xY4BzcPnGebUsdUbu96FQZec8ep3gPqcot7u6HW5SEAoqDn",
  "key28": "5hNHvoNe7tDX6UgTGJaEGWnPprPeYoHTaC887US9ogXdHqRuLgphbtRfW3L3BW5jxSWq1xcAauLc2WjMt9WXtRZK",
  "key29": "5BJZ6UrhjKaNTZUx2zHaKkAU7a4yv9oXWFTdFhEfFz8UGf2yN95vEV5B59JyMCka2VCErSUpRtDxJmyEkgxUEwuV",
  "key30": "cJCBi6uXHKf19cNfRgiMhBx4oh6DTGBoWFaznm4MMgUkRTnwLmGzB8KBenLdcHgsFUj1f7gjKbuZx2jfiaw61RL",
  "key31": "3oMTu7anrFaCbJRKwPDkzx3eBUsUs8gRMn697K68GcvywXfmMNoEJRY8UhwS9GbC1y6x2Ndh72hpxrM38Y2RhduR"
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
