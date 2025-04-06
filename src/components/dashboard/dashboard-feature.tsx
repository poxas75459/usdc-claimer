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
    "VTiH57qMLrt7H8fGBwCuXVF2Ndk2YF2KQXVr9PfZ1YBSQhB5hCvhvf76wGq5tYDzmpNcZ7WB52LnZnmUcWuDBcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aCfjZ3kbKXbWbzL3i9gvKKvC5qS2S9meG65A6s3MAQPLubL6Qu4U9bjoeZuRQeb9hfR68hT6M3uR5THwfzNyHyn",
  "key1": "2FyojbhuSTL672RBrGtMkNY75kVc6HC8q9XMiuGCJ1PZwWgtRrcHhTv27CTVqW3bHUgYnSVrjLap2LYyTZ6TqLrH",
  "key2": "3SGjJqeXaVGCbUcY4yV6M8bn7EWVbU8UqSEAbnU8TFZjJHF8ekKwWcawp4RoNjNk3nYS3SngruKKfSbbgpfZTXSY",
  "key3": "5C9EEBXL45Q8e7swTUDAsAy4W6rrZdv43CtLMyh17SvNdo7DyNMenD9RBCNyVwi9rFJDvYqxYzdXet8Jeq7XsqxV",
  "key4": "3DSoebgUmCTYJV5VpwwCDMAfc2wnw39KvoPTY3JhZZhUpdmTc1g6YVf1Z3NdXn3caZ6oTgBD9PJBTapz2bXF95tQ",
  "key5": "5RHuqBqQ2t1TiYWArZTYyVJGWZ8vZBsPhiwodgJ565SKAXg7w3hvTdh4vWmNigVbatwkfdg2BborNsgtme4St1TU",
  "key6": "ySFfQEqxcQ1icXfqxgtEtucmYzLWJMQupbTD4qkakfUo4HqBXq5MegVkh94xhjTcPsXj7iLr9VmGHJCGt96Td8E",
  "key7": "3BNCjDigDDy36ArxqZFXAef4gUnhBqe8vQbjmuMc2KtqiDzkEficXJyvh2u9dBQNcbLRW1mr5baVuvKR2WnMP6tr",
  "key8": "3F2jC2HRR4Nkuii9219EZ5jGQYe2Sz4XShCJKrERWreNibHwwFY4NLmxBYLUifYm9cAUAHFHkf71nZs7xmjdtSa8",
  "key9": "5cqduQYFfaLqLsEnoPUoRPisiqGzLeHkos4oYM3xLeadDT1S9KDrD6FrCsVMBJM1m6QWx3pY18QBWj5PWiUf1Lv2",
  "key10": "67mdma1Hz1Feq4VXVUpAAxFUAQtCYY2ZbNz9tKVeH6Z5D4qGhSxbYMnbYNcj6MHBA9upPQJonhHj17paWg13So8V",
  "key11": "4vSVqgLogZUitg4RZSATH7ZGuxq6FSdRmhJFy7P3b1T2RMCRq1SF4LgKq9a1T1rGBDSYqWAA1LfmTe9bSJkKQfZs",
  "key12": "3ezCYMv3tJLT968URJzQr4e1bnqa48Ug9MpZ2zU26CUWaUUdSAov5zLb1Q5YP7AVEf3iuYahkDCigmQdsRDR44Yh",
  "key13": "23LJftPpUjQEwmt9EKFtDS3veh9HpvupMvDgAbkUvWHZ4k3MkVWqJqjMf6ybEptyTPqBnSk3RfiLmXErKgSvUE2c",
  "key14": "YJvCr13Xwj6PZHQT6xjBeqfybrMcqRRbmJpuXriL35TFFvsNGb7HUT55PRQJ2SYSjXYwHgaWZvJLtFEBjsPpEgR",
  "key15": "5TXYahygZJ4dAsnfKAuaFmLNKKvU5kAV467SL6R9GACozqvhRexJh16UruUPxi3wYNmU7h1aFt6h8JEZjMgNqHK9",
  "key16": "5GhVauJaJwQBXVBeYTsbjdGx3DZNn3GnW97D9Xn7TXpFfwJ4wt5CHcnR5BRYJK86dZRrYyoEtre7reTvYrnwWya7",
  "key17": "2QyDuJwyAKR8WppTBUZgNa7fiMsFKVyvWUtUxb6goTX8Yzz87KNmCDZjuAhkYydj3bjwWyCqFsV86fvdxBHZDs4s",
  "key18": "jsi3RTZy3qV5jvZcGAK4EjdCNEQUvRPifUkxaGrV5UAVDB6rkw1WPAnzsfDyWfqcRbwQndydPUeVFCKygWvTHCJ",
  "key19": "k9CFCEKsrKBDTXyrHesGJ6rVud2HhUaU5erL7QQqgV9fuLtNR9iEfLQubSpNBxVbMpVEv79ovtwCutqRRPWaU5M",
  "key20": "4DZr9c3Z8tWh3EhaEqZ6bshYwbPjTT2p3Ax8aDZejniNoJH7PmJgEevX4cCJFgQqJqNgYfde4BdNKu1jx2GMnnSe",
  "key21": "MPgPixjQMoJZWwq52kdQkAzTgJ6Vx7U61WFdVPfNZnmMSAiz7CCbCLwBPoV1bafQEr9ftXRvDdrvXA3oCkxb5fC",
  "key22": "4A3SGg2k8GFf8ivKduAwum6VTaC7TccaVRJJbmhzD8hKzLEPg37wcXFtct7uajPdPsKd5JJBBcSrsjejtHEno79P",
  "key23": "2eVnnd237gP2GEV1ut6uy7PxBAjRn9ixgVYpXaKNoQqU4W7rWEF1otzv3BNfV8s2kuhTVRdkirjEeLzr7nt7bXxe",
  "key24": "CzPQ1FdE667MjDVw5DvAHL9M7FbpXdnYVxK767TB8RiEB5W6RdYaiP6bxa9aPqXpmWL5ENEGfLUQPNH4MyQrNGA",
  "key25": "2q95ipxwBLnY9iBYu8k7duZHqYxgsL61yKSGEt2G6yKq7cfkBeDrD9hcQ29GoBxB7WhCDFJ2Sga24GXM2kfCvUWf",
  "key26": "3pUAhCbEKyEDXnXZ1zavFcQX9nG6dXLcVpZBD4ijC2SErVvFn2fVWTz8KNwDTWTpBhgyZLYrpa1s7a9FLev5Hmpi",
  "key27": "477pGk2s29DyaHhB8EZMfKn7HPQnAugP6PUzHMvej6tNmCjeg41q7mei4md9nUJsPYsRnQHAQoy284vxD8e5oEdQ"
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
