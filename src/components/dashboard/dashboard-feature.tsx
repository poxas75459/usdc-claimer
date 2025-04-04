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
    "33yiUq6bUsXgaEqmxAr6ht1itdMo3LLJg54n4TXKqniX5u2vYVkYKH9vLaGutxxaG2agd4QEtXB46Q7ANqwk85Ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mh7RsNrZV9Tnrvs9VBWg2DhLkJErJKKCrrSaiT2J9he2pUDLP2i6PeZ7bX3e1knUg9ni618d7EAu9bGiNrPv1uC",
  "key1": "chNRPdLpXNhCfui7eU2n6ErRS2aXxVHoeRu34dXx9W8tBEzxcEsPMWX6sP8oRHLxkS7nRHqcpuo73pDNACrbfF4",
  "key2": "3cGp8LAMgnAfB83PLdwNM6C33dtoNzB2ATJPmBbCC7ct5PMoD7TfHKDmjWVDmEuNr7KYVkc8hw8z3cvoYH9KyivT",
  "key3": "3RkHfjEruRk6mogVS37M4f3XsnuqqaYN14Su47T29fTfkGCBjrdcDdxppyKWL5r8Tp6myZn88ptXVckfVxxiKSJT",
  "key4": "3S3NJkXE5FvSvoUK1M6Q7aEi9dLoHBsuL2SwP15tUoKgTLeY73JxMngH1inFFa5jm1iu3SacBB3gXSoiB4aUEhXi",
  "key5": "2RJ6RPUNujMgid4MRvQv8USDK8ZzVC1JHjJJXbAzZX6aiUFDxkMwu6yk7nb8myXWV5yECrFnjPo2tCPdgzb7nbV1",
  "key6": "5kWARaoKoh1FbYCGq1QDiSEhUSrrmHB3M1yv9ns8iqxFQe3DTFgZ4UKSxJKUExgUhiXGvxUhXfxszjAfZVzXvytB",
  "key7": "66ixR5rPjfsQe34PniLzwLbsVFnqsB3qn1fihW8y92jtmvGNu84C6D6BXpVMEKogvVrqQNc2KSTBTmv5TNCh8q6z",
  "key8": "4ALFkbnFW8fB6QoEb16szQ9YpWbcbZ7sk6wfrZ23kcsJhS1QYQ3JvtXjhLtj5tHdh48rax75VKcRZuUUMoC4FY4U",
  "key9": "2zG4mkie926y6JyDn2XYwvhf63kkTMPBMEFEbjJJQ1tPKo4PGLeM2Yd89nNHtuYNFGDt1rrqJKo3T86mpPsew1BR",
  "key10": "5joSbmhmpWnxxXSA9jtbpT6vGNFJGVGFEEfAjSYdrNHswt9kE6xRdGc1dd2tHkDx1nuyJ8EKX9nkRj5JGLCspiKR",
  "key11": "4vLGTZ6SL1QiJk7Z4h9QosBNL991eDGb2qfJdTMHzAvQWu6EJ8pnhBf9471MnpA69Qopjd7utZyQ17pWqmdM8NM5",
  "key12": "zbkdrQPWc2jvHLWngLnNa5PfXFL5fNTKzG1XwqjyaUEMFvcYVPWtZqd7TayEZNEYGrdFJt1UAU14r5LnsuByDWv",
  "key13": "59SuszwMWabFsntQc5dFynsDyvTNvW9WVZmjKJM195H1KZE8p4Stn7FE7bhABqwzEayRTn4VSw5YAFyXsx2XcdQ4",
  "key14": "Qbrp54pXXduuyjJYTHY9Hg38vme9J2XBbp7xpCHpMuJJmhNfTz2dzLtxBspiJZ1SGyeczHjZTUuA1eSAirWSU4H",
  "key15": "3nFx4iB8ELHbyWemXZuErrin1TfTWo93jvUoDx6hBX1DM5W7odj7SM5S8BEBTddNJfo4aq5qUiVgSDpEpQjpWKDt",
  "key16": "49akXxRFB4JNh74SKc3yK3rDVc8AYT8LZUfU3yUtRvRPazkWhfnxexFpCBVXRMS9r6kbL2gnBvkoGqdHYFMarjjK",
  "key17": "4vQW5SZxbjUUSyWnPVf1NFZYBydas4dBAnhqTjVPvMk1te8EiivV74ZX8bqBUykgcE2MZTdf3mPEdAiDG4RsfAd7",
  "key18": "XxTFcEEBYGW56KyBCchGV7wZLEtetZnqL5GsSnRxnbdqtVYPm1WoCNUan3tBFWScQAVipNJ7hpXUMXECCRvaKyZ",
  "key19": "3ZEsWmirL3M18CGg9xZ7FuPE6NsmH3uHqWDXAVe8BF269dji2C9TSg9awE9UGrPRWNkErTJy1AQxH8FA9M9Z3tLW",
  "key20": "67djpmmQq5UdHqS31Ax4EEwTyMgXxZG6NxeKsy1QbtAJF3yb5SRkeXrqEH8VrcrT3JvLk7Tyo33DegecFnRkhBgK",
  "key21": "4pH6D8yANfD3K6FY8A6DH7j5h4ZApy6ygPmk91QLbqchLG62iS4f56swF7LCaqRTUxoZfDKfKxEoCjQxNgvTeqs1",
  "key22": "4ezTwerqC6FdxcsM62msCW8Uq6nUE72caSRub1hWXoTgEzMJ8AUZuXgtPkPEdBAKQnTV2UzNwTsVbyV6t8XpPcL9",
  "key23": "127vC3RKANKN1LAxWoJxFez8PZmUrjrgaXXm7y8cnjGe5cjnTzDn4ZE4LxF8yVXnYkv9q6HCkTLmBxEs4cWMZSSZ",
  "key24": "4SJJB6vwLAJKuK89v1QG3mR9hY3LjTwoiesZ6wqGeEQMAYBUwgLULjWgC4crcD21Lh1GsqacE4DATMm2JESfcV1",
  "key25": "3rjUDD4yy6Mw7okrYbjQYcHH5EDQdaWBZm6ErkyLXa6RoWiUuLwYfuiCXs8p3KoR9H47XfzvLH41JzGoARYKPy9D",
  "key26": "3NF8WT8Xzb9A8raVRs2vVuw375hyhjjP3N8SiwFvo6Et5hwM6M4f9xGgLKrn28nY1qUBaJf5ar2r3PJ5Bum1K63P",
  "key27": "UGFjgdhJNmJhKjNKLVMLrnZL5JbaqfyS6jyeBUq6ZYUd1S1zQWNLwZHCEwjvGhWXmvnkvZMYD8BqoyguBG3wTNb",
  "key28": "5guFEUeuoMEe7cEd5fnseFaiN1WnJfEs2ePLogzmJgcSg9j7R5UUHukStKMd81rFdsVj7dfZXytXYHKENGxRugMA",
  "key29": "3cTN2F6V28UfX2VRGTtha72gMCi2CujBurvpKGjs2cK8RSSKJfChWBjFLgHzwQoSrsxP81E9YJTrSv14udo8MAZ2"
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
