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
    "5yVtLULUeSb4DBHR34ADJUuG5i62wrWLauCVUCzagcKAxk69ZbSF4zfRqC6zHmu3SqUMKwHgJS39naQyHcLhK4gF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gUguUNNp9JFjZofz32ag1RYZP6tzRkNFq6h5tWVVwshi3vfDQZPfSKau21X8buBCZrwwnDLX7mijLVouQNJMhpx",
  "key1": "46HgU9xApWRKmzRfCPrQS5U7LihfFNeogNpwVhzDGNYQXtBY5NDH2dv54sPzBsmJnAQebxpHGT1iYLAL9Gk51fem",
  "key2": "y7LLo9ViuRfzCvpXeVnQ7nr4pKfQL59bX4n99rQY6YFcuiKASUhVWyqJJKMienMrg3JR48S5PZ2EBuekV5koFtu",
  "key3": "2KD7trjxHk4wVK18MP9hhgP3vhdUN9YFmtE6KKz7RSTQQJHxva9fCdeFzqgJ4Bm8vec8Mgxy8kfVnNXar7NVy9An",
  "key4": "27c3wq5XUNy9JVonGmStutGQFqjMhtyPLUJdxpnJf8sRLerHAP5sMPTxUYM6zHj9CoZuNw5Ut1jrzuj2Az5bDExz",
  "key5": "5ma7YX63FtupFCwDyYGp5UYaH9QgrcBNc9QHXxPLiEnFxDu1VraLcwGAovyPgpVbVeGYJx3vC2BrzyKtExd4UJYm",
  "key6": "2DiGau5MXTHaCWKu1ejHENBjYrEgwJSRyJ4No7zaTpieqxLAdeUB3YurxuMhpoNcDzeRPkuCXHLhtnfkzC8JEJNW",
  "key7": "5Vtjqmtdb5n5cyHWtQSissLqJ18abo3v2tCpDhH4cC2RME5uR9S2YqNAEJdtqvBAqPjU1DzWGsW1PV43BPtAWdz3",
  "key8": "3bj9n2LahVLTzbEGoaZM7yzBu4nNvrdfmPpvE9Y565oUrsNXnBGivpdTetupyZwpbNYoJMVXAUAKL8mAaTxybLz5",
  "key9": "2QZQcypaUoP6zACFk7cK15VKacTS2aXei5JggZKpFBeDd983Htzstk6395LUvEabYVe9BPyZoK4QYpdYRtC9KCfM",
  "key10": "5UPN5H19tccMaxChkxwHdru1smC1ZPZa4UF4JDHcVmieXnFTTzbsRpnAW6GWSvvYuqyLfSiMqrXXcUdAEZGNQhxn",
  "key11": "2DbCMHNo4u2gZdgsUwzb3xsqsE86mU1PmFKxGA5rqmQKDtz574KhifKxtBoAgVtcUNvtSKBzfs6jiftsx5RGUNga",
  "key12": "83g2HNtkR5jubEMPV9NWUeSuGCEnVUrvLVi9NzjYyBPzvsFcZbsvG3tXYwVVZjBJg5TcAFhw3owxfGUG45YbPBy",
  "key13": "4kKdbzQL9WHbHx3W7vMcEXDqFGtHSfFShT9USCYHgpghXv7kEeD2rsBmnfAzPfoCqFmjATXo5w7aUUZSXEpzk1kw",
  "key14": "4Y6tDcrzgWQzycLdWWZDB2gehVZSTj1rzLQ38dNeSWAhWDKAFi5qQsKHgMN3VsYWhThhwhNHeMPm8xHUcJLjHR8T",
  "key15": "3A3HRuQ838DoMMTsNiDbed7y48UjsEW4rYwypK6wo1B71924XPubFLHeAgpCzVwqDgsxPsEPjxy7tTUk96WnhKJ9",
  "key16": "4UBJ2APyw7whiretovm3GayygRecjDDuUuef8EDEinwXqvFivxUg7Fi6ecJz41JqnvVCQDKZF2JgRGWMcGCMrzN1",
  "key17": "HgMGgG5AQBu5bdoDdSs1c9fWBmZPGaXAvFhDn7HNSBMXT7mMxmc2UcypRmT257uACifAW5QxqWBbxFfFFkw2qzt",
  "key18": "371NLzzow6FYc6DRwwDNSaTBm9UViBmv34Bm95DbmroojUiydqAJjkMss2TneaFuYwydRmQ2rgxUnLgZN6GqigUh",
  "key19": "3TyHzbvAK7kwAVN7yhQxpAv61EYT2jbitKEGYqkHD9dcqr9akh4cP85Dcb3tpcr5rx1LVftRurLH2UDjComHT5hx",
  "key20": "5x3Pvn7CJY3pQwLhzG7DQPUgYro2Kg9PRgqYZSP4zs7bQr8ZLNVUJngGtsECBQv1vZjjctMjwhdeCudDS824vQbZ",
  "key21": "2p3oE9Xvz1TQfNj9cXE9FL5T4QG6rEvuVtt3DErDSg946Yw4WZZiMnEB8kjR1VCHHxkpTtVWE1mjqLXBo7EMDPVv",
  "key22": "3j3xcXecJLqEXc4yyXrcqFJCQgLgN3hiAY7tKobcSxkvjtuVoYCt7pUZsGCq9c6FuU4uYzCUvWV8XY1o76FUmrG4",
  "key23": "3mtnco6tkgtVzbNQzDtGaTid5RvowinoLLNkB1S6EEMJRpUV1HcSF6A5hLUYkG7V2biKJ9eppT6x4anHG2p7J3Lj",
  "key24": "4zVE47mjTyhWdcc3jydNsCE3p56j6MJe2n5hKiCYD49ePaUhEuKPSHGiKSKxfnvkjvAhawHUbuBgfVZQJQzTtZs1",
  "key25": "2AxKv37sdnm8jtxAFVxuZuyGyFWZFJUfMujFvH3ZeEHeg9fXDKHvxRNMRzihCq6QxHqq6D75zcSm1NpA49yD2FGu",
  "key26": "5RQPd316xkzzES8Z1ruFAVxd8shTDZDMJU3E9QQ3Ti8Fn6Z3caXHiwHcK1EHwDsMNJazLH16Fvxx93KUMtrxv8wP",
  "key27": "JTVmGkvTSpERzBZe7FJahKFZAhjvuKfqZBGPcPa8EJq6PEwJgqF6WGm75TpEeBgUj88UJ7vHBRu1Rmrh5UJdWUQ",
  "key28": "28s9DkDtmmhfdMbrVD61khDucqRaWKCxCqfz2PitbTQ82WHNnXRPrwGoyUzVePSwFUnsHUSgw9M4LQV9fqv5yiYE",
  "key29": "2rfdaY1fYEk5cheSpzRg9CifH5StZpRvzW5oJ5C3znMUp8878iUw4SrD6EJutZmaaGAarjpXKfqYuM5vBt6wchBM",
  "key30": "59XQYTqhqvc2obUXgvuW2fnfrtiDG6oU1vDDaywYoR3GL5Bew7qY4HcbR7tQFKQTrqixQD22ehXTw8SWQ6u96p6B",
  "key31": "3aPAgSD8u31JgvFeeEAKoGcN8YRQrt76HxRA17qD7Bt1SL31ivTmCJTjb9WtDGytDBkP65RW6VNkTvAa8BRkk2bR"
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
