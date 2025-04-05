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
    "2iH23mBS4w8odwrPeZfveEu5Qkbsfn6HYxXVirAa4vJsvMARVMtp1RuZEMhjyb7Ec5wuBgD88P1QMGmU8FbVrFyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xS4Jy4XmEE2vitYkghWqn6gWkcRz5UtixuF2UbcQcGPTvzBHXHXKH6QeFz5goPBC3biSodYWKqfZi8enmpQCDxd",
  "key1": "2JFY8zEKWyVZ5MewEXE1vchvx5TquSeqvDJpgNjTuguJnUjxwGBPoV2APnEy7mrKczNRrw9CDusWh2Nxne6hkLrP",
  "key2": "5AWJAaeGgYNB6YT9vMzezZjXHtcCPfLQ3rF2Lt87Sd4LG4Q2st9FbspFBGKqLJCh9RHqvT1UftHTmCnKkRh8J4kz",
  "key3": "5cDQWc1Lzej9iztX2se5io4FwEtXUCpvCfWAYvyT7PT6paX1nCcxbRLUX1nvztFUwePBjnrkWrqfiABHwAyE5YAS",
  "key4": "4wJpNq2zwyeXtcpQBPuPMRYaLNjiPJN9maUxMmA3Hk4xPoqGX6S7zdUmbkSWZKkowau85K3BxRsvT4SMh7x9L1QV",
  "key5": "5TaHUQ2pP7QQJnxEFXtPTMkcX42FsgmDvNUph5ozojV4RW1v2GEFroS9XmuAxk9ZTvpDVFuesiAG649rvaJKx31t",
  "key6": "381a9e1dZZv4qhDHjR9wdSSSbmASLjAWxx2JnGUwMTz6BN5vYNt3wB2mbQfhSbScb3bxpKcj9RPxjx7J37qBrg1Z",
  "key7": "3GWqvmHrDWJyQpoij6273CjM28fJCwZHZm8zvHrQ3CogCtmRSZEmNQ3aPxrNGzHvKqcthi45RTFg1wJCa1H9RtR7",
  "key8": "5fZJCUpNZtPBsC9Z5Q5wWVyGfUahiKt69pYRxs9uqEF2VncQYTnCnP5iSjzm6humka8XkE29d6BAQUatZ4bfXyd4",
  "key9": "2sUajeBrfv1h2mmbHmXbyk9TWymVHBUwoH39tfgjw7WyMopmD9Qtr6PerhvNZuQyvqtZ8Qy4QuB2zwL4v7tyyVRQ",
  "key10": "2mYXqXtg42itYaZuGjyPzP6eYkRiHU3PDkxt2hi26bnP7bku4ykMtUiiQmUtGhpqWg1gBPkmJWKvexvFRR9NMWUk",
  "key11": "4xgYmHSpTTGHW9BRaycLnU8Be6CC7BmfHUHhiyDBh96XeXUuUGz69cDCQHDWv1veyg3cJ3rQAcAYMH4H9oJ2fCrm",
  "key12": "3FrhHR1n2Hd7vJAPYKcvpRDYuPuTPg5TXTw9yswWcFJ51TLeKvurv2hfY9P9r42tapH4DgUxxmbXguXdYGePKzZz",
  "key13": "3837tmQwLV3B45WYMvLPrWtc7RK1o3rJ8nR7jLMwzCBsTLB88eKQM8KZFMzUhPFDhUCyyTN7tA1zHHYnbVMJm53Y",
  "key14": "59pBp9xbJ6vCkCjhsbKeCk2zzAzfaqBAgn4g8JSG2pNkGt7VQUv9jjH2ZGh3XsP7RBaXqBJqPQ5APi8BKPJ1rhuw",
  "key15": "23BHeT52qgi6dY5eyKfCnGHRUD1f7ZjNFudrweE91D8wRwziiDWWPE8TbDQDHKrhzSU54sjt7KenStQhMLfepRC3",
  "key16": "3r7cA4cxDED3Yo2MDiv8dUHZSQYvnE3yxJux3fuX6Xx2ktcwKQXHwKgChvhC4nMW1JtFnGwH2LRE28nn5gSwQLu",
  "key17": "5Hor8QP8BbchTBveP7T4gZoAjn127Wbi3SC9vf9fL22Nw18FR5PnSKJ4ZNtTnvC7LnzNCSkk29Hwjd3Z7X6Qyk6q",
  "key18": "5sNVo8QCdFndiPCdn1JFKTYQhgy2LU2gBYZxRX7xK98kTauKe96HTCxqABAP1r96g8J4DdmX1me35fLnsv7Nns9A",
  "key19": "TFF6dX6wjPvUDexqeG2SHHb2v9G8RFoEyJykhJwDMHhMCo3jnHLcYpwGRuD85e9XTKuNrdQG59t2bTwREaM8iya",
  "key20": "58KikudUigrh1dNb4vUfuyFfhW7uYMvhL71ssns8MPuUBwxB4PFMSMTsPxnJ6ydp566uyLtVfQgqETqdn7Ewqjxy",
  "key21": "A7v5aZ3w3z25C5WuUkmYZ8iDpJZkoZRp3nVUeLGJiEgV2JCajzdDY4mAz65RU7iwzQWWsT8bMArZBVTynhETrU4",
  "key22": "4tauVSW6L12VhoDSHLrpQEc2hC6YUx4g3RTWpuBL8E48BKySkjYpSjQKYQFPXdrNxT9kUHFtNnSrqLcFtYHnczwQ",
  "key23": "2PzPdzsdsrojbrVkFCWyFFvND8778BA7TW9TF745HY3De4syb37HFrqcpMCc1eKYBqNffHwhuBTJyVxDBHHwUXGf",
  "key24": "3Ld1Fo2tiTh3dmiwdZ1MgveiDwKy1Sw2iNxZg3WmU2vmYX3NTmkvdMdyeRDDaEZpqaeJ3o68hWLtmAFdcwVtaLHF",
  "key25": "5LeCxrQyJ6LtjNqJ7isp9GjqZgKy7MEjoVf84dqT1BPUiPMKU4A67gA45Cpp2dimqo6c1KpYvfZngTvVak8R1z9R",
  "key26": "2kowSFLqqAHcLqDaVvjcieqQxPC3DqH4MQ46dn4FsJAEUqJQp5teZFoN6RQ5qcvSVUiXuVmNALBWNqq4m5tsmgT6",
  "key27": "8k9ps9icTAswFkvTqrjiU72uMWqndALoWKzUKgqgufR3zmcmZ3BCmk9VbYf8Hm4nFRE2aNZnoxZfr58hd6n9wmx"
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
