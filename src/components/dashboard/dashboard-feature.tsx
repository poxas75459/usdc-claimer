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
    "4TE7Kt9XiPPiZF36ZZXxU9phpwnyJMrJC9ByWBLVarEqx3ktXYRLTTYznCMdyPg5L9snucjt8hKnAyRz9SSrUiPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SBrDokUpsTcFovpgcDy6Xbz7vWbFj7TExfcPpjc1HpuR4xcN7WfGnUbbkbZ1DV9T4B9xbUMQb7Ryq7KrTRXN9iT",
  "key1": "3EXfhpCeabp7PuYrtDh1ykfxYV3GqrT5AshKTCNXMzyUCLLtQRzYQm6UHsMh8Z4qXyEprRXaCyfqko5Vth4vrn9j",
  "key2": "2DsarpkcgNHHPn6T4PHWjxiuUgkLhZadLDnkRM9D9QWYfyN3EhCu3osiiw5EWxKytgQ1mpRVxdUoX8Mhb64Ptr4a",
  "key3": "3j9hoPyeng3pQAiwPLuoSnowXZvd7QdhX4AnBiXeEMcegFocZs6hrf3HeuQoiumxaGA3Uci1QcJfPnYjiBdZu7fR",
  "key4": "Gtowd4W9ajM1uVnm9bi41MvBwtnV2d55fTgen7v6aWmMHPYt3RtNQP8Sebkw3D6NBFcv8VH1TDMiagGhCN1w4Ru",
  "key5": "2UQx4d6i8phjho4RkSeoX2eXiU9CzT6Y4V3z5Cg3BtGeRkj7YVP4yXGvMhuxY2XqK84CS1bmGiU4dwp6gsGEjAon",
  "key6": "3VVYypetgZvE5ZDhBNW24uATbbEnqGEbFQ3666V8H8Efkx5qQ4GnU4sVKhhsesv9pBBP98ZjNd2ADyJgNrUF7VmT",
  "key7": "3YU813uq8DvXGB23L2BpaeAyLEErGLC6TAzcPdZKQQYMZpiehLCLuaiehdprJe6DAuK78PeM2vWDZYjRPJqb5KsC",
  "key8": "4EA4L6SrZKoYUGAw3aHhuagDY6kdeSAN6gcpZRDBCwXQFurYzBae5dvUx6S4ZU5pQscqdQGz3bkpaqFqSpNaB5bN",
  "key9": "HUKNn1bS8ce3vEkSzKyn6Ybgn6Xq7fsyFFSJX2PQDvJqebphCotTBWVUBiD3sfoqpFCX71nmxkqAKHyENj5eiBg",
  "key10": "Hb2xxVkKwPvu7GHu6VGUyTxRntjzeEyAP5J38VBkcqWqwhdRkWQBe14wdGkmiHWvdGFFgJENJUFtwRPpZcyMmGX",
  "key11": "atbMHPvXkjGQiD9ABE3DAaARW5B65GfoMT4RksUBTqS6CbZWYaHTeMsztR3siFzmPupBKqFK84CiZgztLkmNc8H",
  "key12": "2nYxd6rifBKzjx5bgB4ae8hY5CV6aL6P9r6wc2AXxb9QjnRK5KyEQVDsmXhFsUtnD2VaZFAeTL95zH1TFGzWL9gc",
  "key13": "4EjDWZRW17UQAiMHva9C41At2BnV7hkVMxPfwVEwLwjT3HUZXbWBmMG7BL4csPoVF2YbZTs2hDHPUoMDAZyBRh3o",
  "key14": "rUiJ6Bg6HrZzhrWKt8yygydwSrCNNWrQgR8PXSk1hbuSqP4hSDdNc9YEP4x4DUuU1jT4Cot2S2qnhzdE1NYPgLd",
  "key15": "JUvkJWZofdVYZu9PeWFxRmaSNwvtr1qVhDH7zrCgr7DJ6pb3YPHKj63hox9a3JFV9UK8bjpJ9nvNNguacS4DNrL",
  "key16": "M2q6fCqGcShnM2q5whkhKJN8pc5rB4AcHwoy6x9R8qZtfLvDt2NnPLta2hMsH4adMyLEZHnMDGEBgv591gcwXej",
  "key17": "25UKaMi4EEKXvtanU8pX2cFTVejYoAy9wn6Fqp13aVMNNziYNi611MAMbdwJ6HKyLFL5RocVSSHqFBqiwzPngcyU",
  "key18": "2RqmVQ6JLAeBS7mZhpLU9MDDkttfN7jSMTrsCrf9s3YRvMsKcH57sfNsjLVJkiAwiqTQn33D6EkPwC7zttz3MgAp",
  "key19": "5DsdrZzBbjGFoXvsTLUvautNwMjeYV56nDg9NfmNBr3unatv2hk551LnioquR4h7KkHmKLQBdaaAwLeDcN8x1hDB",
  "key20": "Hmy5kSvEwQeNirXAWFr1u3myrDkMN5vd9HN7BPJbf7EkPKNUD26Tet7w5Um2AhCoZkt9kKDfRXjcSH3EavSBNzH",
  "key21": "3PgJ3kbTemex8U87iPRyZniUfgXTGCnniF3nXrribd6Eosr1VEvpciuYkmcZVgVDyebidppTqAaketbV4mAqJ35P",
  "key22": "JpMcq1c1nAXjefV45PzYjmxEqC1XpmUCWNf3naN1oA2qVQSfa1n8cuLYLicJUQRSnpNfRZ3yK7LxYbSoV7hU6pk",
  "key23": "2yPDnNXb5ipV8xbyDsY2C4RujAAYe7CsETU2Eryzf4DBg4yRzjxBzfFkUAFUdrJyfV267PJE7fqwqJYSUYqZ8CXP",
  "key24": "4eyFL2QCBm4dNqKtsp4ZkJehBLhL4StPMxWGkeGWBmrLFpVYFncu7S1GoZehorA5SZzKq3WvVeTcGRa35MfuaDpr",
  "key25": "5LC9nwAKYqBdc28uZPHJhPk8S93tkgvL5CYuNWY7rdzFfScT1nNMZEAKuiRAruX2VL5W4TTwBgJh1bLR9hRmwBgk",
  "key26": "3XXN5Jrt7PJvzEpg9gUygWNmEVzXuAuhuVvdZjnqzcmhiXr5AB5WEGsu34zPkPr8Nmy1SsDCWsebWG4yfu6SBnRQ",
  "key27": "2LcCr64BfHm8XWR5hvGVN2pXLnvvSe4a8m6mBDuGKvCRKYCqv6R5tfpypfUKgF2zy7YRih4FfdVh68dgee7CsTqp",
  "key28": "3ae6qUC3muJa7Qd8Lcaw2DotHNQUJGPXwG4hKSyHPPhy8H7KouAACJmqgBmjZufiteooGHmYQYPJenEjTWrRT5Bm",
  "key29": "d5N6XfQSb9uEBPxhzfaEvL26Ktos4ipzTPwxEvQzVMVqrzrGGcS16okkfhYQA3xSaAc3EUBDfwq1JWBjekZgpWS",
  "key30": "5FRumfnwL7gsSpEd1oGwsZGSxD3uWqRz3nguTCd77CvWXxVu1i4F8aLu4qd6u6nb5m7YmojcVXfGAZGHcwd7WKWv",
  "key31": "5vQxht39NpkRGfwwHcC1bf8Ymho4WSWwzKUTF4ydLpvJYpZyDJt3oUtJV5rtiibxWD5GFzSkKCR4MjNZr7K7xyyt",
  "key32": "vaZETUPnateGTs1koqLGETUengpK2ouUM1svR8HdCdsqAdU9ZENi592sHUCKeweK9yvNg2KLyP61X2p5sdMi36U",
  "key33": "54e6wAwo7sBGLTbdLoNRaSr8MhTPLZKeute6MNCtLHrAQRahX6haPTa3PehpeSKE1o1UMxZrhysbB9XipPZ728aw"
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
