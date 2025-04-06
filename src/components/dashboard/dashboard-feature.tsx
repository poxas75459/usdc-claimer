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
    "2yG35vrmMHqvzMTt7jkRhRCUqRPPVC7th1xPkunRcrWmUYsTNKxkcevxdGnrPkfUqmMG1NqU4VXfUVr8gLfmUUrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zbmBRdVYXije6WSa6TxSWx1PrV5rzxMmykUQosmZe46whMkVpNhgBeaKtjarZMop8fxhGQopYwSBEQk3Zpb4Drd",
  "key1": "5KgBuEbo2KJsgxGvvYvH43WjQME1tSoVT3B1fHDMewTs6JWNyZ5dntfBdwWN5sBstf2rMim6gJjUSLYgr3tnLKhE",
  "key2": "dotG7xxQadJGMq3efTBjahmHdnXNQxJtwRYq1XGsEsQ7xCxtW7hSHoD5f4XgVc6m9ETjtoEZFJMXKVdNDZqYUJg",
  "key3": "5hZ1Ev322Y7Nxa1yJdDZjTmvMxazVmYmDHZ8ELZfCvF5JYsm4HnFoGj6bBQyenTfVbPL93mkRzmcxvsfwU28khNZ",
  "key4": "4To2dkuRSV4GUm1DLV6oLhrp4LivKwu7HmddFz2aVAUfGAme23KhxHWvASPbpyF7ajb8PXu1Y9ZJmkKb31ijBrgr",
  "key5": "2CK5WgzhfoaF8hVQdCLLszMZ6hDfw4JvHjpUyKfvFSqBZ3W8VGyZgcUNmFHx6nUBxsbwo3cDLPP4ttpNHKqjtZgo",
  "key6": "31d9uNZNCEzzR96mNK9oHdtmTai1NDvjrTn8kRgQbmt46KBKYKpk28DhDnXiq1C1zHZHVG9SMMi93nv5YikP2RbP",
  "key7": "VXSfYeh8rPajFzz32H1R5FaEPWm5vR9wzWGNohMUnGKCt2fXCw5BmCDvNPi4RaNXUXkhNrZFTyoT3EATQ5M8rgW",
  "key8": "5fyknort1WbbWtmSEKhkqZh9uJmSnH1bQJqFgaqKb9mVgQCd6rvXrbWtwmzqSgzyA4MQ7iAcA6U5SaaX7VU2QbZd",
  "key9": "2No8eaPDAcWiXqsrVK6ie49JYuE6xKPfyEnyoQQnE28SSu53VRdcDB3Y76ebiUwwraSQjD8vgbXTwLq6t9hg9VCK",
  "key10": "66gSM7asvTKycmwpXHxaqJwN5iNfePdvWHKKJWacCTyBRBryedk97qCCoUQnqBhcwGVFgLXm2xq2L42Xs9CY5JwT",
  "key11": "37bYVgUzMs2hTv5KtFmgwC22iswLTnnXChQCG6kMKFA284EqAKoPk5ck5YQLSdpLx3tpLavNWhbMsSBiSemQULVg",
  "key12": "3p6j4FyiL3Bsp2hrePfFNUNdfbUu3Eq7bP6N4QTJcChGJhX8dWmRH4eEkq8tLB8TuRcNAGJ8MZtiJ4fCxdh9BTsA",
  "key13": "5BhMHXtBKP5zTzHkjyhCbjzcEWQVzn58Sfw8ToNrV7NMWJuzSjsUkv4FSkJA3GxHwq8Qvzf9ZrYUJyPen5bC4etj",
  "key14": "3ihvip6J9XcpdjGBmgHL2hcfx8eNXNPXxEBJDmWZZ9q3Jsa2dctpFPx4ZZtD8HTvLLqyNGx5yNxmKmsmfTYgSk2c",
  "key15": "3z8xTS2zEpinSkrknjRiawMss5NSsnQvfXjAc83sevEGTbMVFMGVPTZwdEi7rTzrKWHQ1cNW8pywxJN78DVd1a6Y",
  "key16": "4SMd1rtjcYAiDp7nHFsCqQPdpLKeX79JXf4uGHhUy1U7utQraX34KT2kxLoavKKEFsGAxrELBjBsb6K59S5rP8Qa",
  "key17": "38S76wsYbZYYiGPYgK4q7s9RKhe3guq3JvKiruKMyZHSPxFn93Jorpz8ofyu6kwfDAjpTFk31xHU4AbQ55UYDtoP",
  "key18": "5kbUXj8sfwDbZfgZ5XDvAfwwu6qWwTcWpKrY99pzY7aDhCExu3iUZfkb9cb3bWBt5PRPoPEsSQpb6FsBnynQmDiy",
  "key19": "3Q4mPZa76QQwpWnQs8ZTsRxvra6JSwCvaGMj41g8gHc9gr2SzHSWtnYJLT63YRN3RUXpSKhMyS67d2FsS4bMUsDq",
  "key20": "4h8yF5P1HNsbpBRtFK45LXgJTfsECtBtQMGZzJHzVTgucLttbpqFQ6Htgc99k8oTPjbph4nvG29SK5YX6zARZnrU",
  "key21": "s3MizHaWrmEQELCvpHo7kXBa2C7xEBsokoKQqsHAqPFECBYk6Ne5B7rWC8YSCNi3oHzinqb4hunAcW9gS5Dq3GE",
  "key22": "51Df7KKrhtEtF9ySRFKdaNv8q9K6Ltm5sA8aJ6AtLXqARZgK71xCVfuPwuwKUs8MHSYSdzsAZVRLFceenwEskdqj",
  "key23": "3ZtMmUC6ixXJPxsZ4DL7pxvX5XKVE2uhwnbQ2yJDC15scYfLTUvn7QutgDrZQN1Fg3tuGbtx6Neb1s7G3E7HMuCJ",
  "key24": "4zgNS2C9Kzci6moF2jjdWY42tj5BpRPDo7q2z3jJzYQERZLfvBmiAm2KaqP2wtbJxzVfgWbJVCcRhRK3M46nD1P5",
  "key25": "41NecMbirGEPyhMcCdoA3dZk3FYgwu3kuiZGtyDasGQYGbnYvYRSwc4aihEwugFSyvS7Hh8vn99JqBwAeV5moxre",
  "key26": "5KHZsrFPozDEUQSi8rxqTgqogyweizTuvFCk9Ngqy4nNSbLMPjcPdJWauh9BLdvcuzsVcopT4rcCAhJR74JeG3cm",
  "key27": "2KSKBPVPJbCz3eiW686h8YvbAHrquQJhP1hxpYi8sdWozP95Vi6SDC6QzL5fnpWnS4Ka21a9CsDvpMfYu5aiqsJM",
  "key28": "58GpiBQMCdZKV9G4dRPFQFXVfP6XZZtZKwV25Q2puN8M7JEhGySM9vAohb6HBMpNNvPkaydBzCjgiJicwVWkZ7oG",
  "key29": "5AAo7eXg6hJYVjMXvXsXa199Z2SrKApGx5B39kcGXJprJQzTDBqcvZFGzhMYMivaqJ4MYd9rQur37dbo8fbcUf2q",
  "key30": "3DzU7gGD3haCcwboSDSHxtcvLAagtWaLTpVKDVsNP1AgFK9rVxfsJU1aoQrhZDfoWPsALy9Vc1cJWARfkresUqcV",
  "key31": "RT1JC6CVTbdMHiv2Qqnpii18Yizp8WogsedUpe4KMfW74momFN8wpQ2nxUATyF7E7Cu461Y1T2RFNAJWGgBx7dk",
  "key32": "3oMhJDmks2EtcPQ1cJhpyq15dkwpmJLcwS6sdsGRRGyzEGGbcHLnKH7LLqmQ5436uxbWtjZJ8Jqi4DPtuB9P1KL2",
  "key33": "67WG8NcH3NXzwxAY6QHiF3syziYhG5HYq6jGXNWJoj9RquxNTvDvbPRUDiK36irLjpj4usm1dL6tbNH9W2zwmxet"
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
