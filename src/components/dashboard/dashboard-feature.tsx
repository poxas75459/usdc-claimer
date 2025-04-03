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
    "TZr4nnZUXwXezG67G3yNh9SfaR6vXozDBgn9CqS4dAnEX659aJPnP99iRYVayfNb2utqMYyUVL59p5BkXQBZs7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qHbrRcXMUPwLBTYoqzDr6dHuLpmnyNsKBAoNvJAKYY6zhxzyqsjf2YkdQ9euei3i6M3rRRydKsF9tebZM4v66RE",
  "key1": "JSPSDtMNKnhzKL3ceKRT77KxygTZ6fgYzpmu2cJycb7CkRCRiy96ztU1HcPrJg4HcLLDoh3RveLgPocB5ebcnoz",
  "key2": "5TRQDByHA2bDwXbZsHHQtGpBX96NeSei46Z5wdWcSrNg4ks3GHWVJLFgyugnuBri9G3Hv3QBo8ZoQKZB74Zbkz4n",
  "key3": "2J6JdW7jhwpdLxZFHz4b2XnuZq5VxkgTXbRpV6T2ZP9tJPPezhCrEV9j32brJnrgVUn4YFkNUyJ5QKgQsoeZG1F4",
  "key4": "5U8A8vVqisz43Apxk1etSZbMeckGsEibGUCSewgjsbLfwaFST1kjapWj8ah4axegGJWeCh51YygiLqLPQf1A5oT7",
  "key5": "3Z8Zd68fZZorwnZhkk18EtLbPCtD7snz8bxPCKHxqzRmNgDveShvVBKQy9yFExQL473kqzh5P8CqbuETWYzgwuRj",
  "key6": "3341T1ujRszFiB5xjjUXWbLK4EtcEVW6DKw5KQkQsHxGJnxzq58ABbNJ2osNZbcyDvHL1xKGKaWxAatWFiQjAidV",
  "key7": "58ahZmN3VyZhEYgiBLiRNkUPeDmrjxhdaL9BSkpCNRmC7BtTz8gk2UurKXT6WdvrW5RMf4TTy51keRRUV52JbmtJ",
  "key8": "24q2kq8KW5NhYbsijhntihJPEKknDyWwS6iWKf1KuiB2rcbqcuLZvrTPrxMnsjGy9k4cZSZuFDAKTbTxvvooQSJH",
  "key9": "3q8isjmnujv7QBe5wdk2NHSACVcBV4tF7DjYMqozNnJLwJ9qnXfQo7eR35o8izD3kQB5GRME13o1vjARcHUHRYke",
  "key10": "2iFTofmWknjgczGxf3ADeH5QQpUTGeHBCae2tQ9SmakQbyygQ4MsAU7qBH5SyCHrNMBHqMESiAJ73Tb98MFcz4Ma",
  "key11": "66iD4yCrXsGdd6QAvgqGnCmkvNHyqWAY1QVWGkujZtb59rs2HY5wip9UUj9vpDmQpFvr6zpFXqfsD6T7H7f6u8eA",
  "key12": "3oDueUpft2pAKRzQZ7uYAJMtkaB43P75tPL1UWeyYGsdJDBt8kHg2StF5d3NCxDeLacG3oMNxZwv6M8XZViTtugb",
  "key13": "3rSwsPruRk5m1X5hbAzy6Uo91vZNhZMQzDAzxqWHbpvm5dBmVVrdreA3yxiM4DkeFkH1uvxRa3Q8dYPo2JT6wKXC",
  "key14": "2oJ2dTdpgH9USMwNBNWTcJFTX6QER5wLmC8wHW8L9vwzSyUUqjwuc6h5K42gTW8cTHbosP8a3gfDstL9KWRnYL8U",
  "key15": "BXmKom5q6Jc7BwiRnp9riyMpS8tzBa5nbD6jqeAXLzt88fJcDa7h3WRwLuJTpjKXTg3gCd1RiQcWHFGHzzXoZ1p",
  "key16": "4bzUcCW3u3g3dbSihzTQuvy5haMGt4o42nXRRKyFmUzbH69JiARa9VhTZcKGcXBVy1kr44Whocfr3r4YJtgRGA73",
  "key17": "5ahzinj1Az3XZ1otUKfGRWcQFQDgRGPrjqEFDZUqaksWpwZmMNvwF3gbKAeffyz8csJk7dhU3vPWaR513uxxkwXf",
  "key18": "3VQX9Dc79bWEnML7FMuJnrAqvdsiK4HwXjk5LkS994ZAhzda4dNZhuEKXbW22cDpwWqJtQios7P3LoKcum5A7xjG",
  "key19": "5SZKDQTm5HyDZ8n3r2r4C2EzKJGjjzUGAbweUqN8v6tqcbW6PqfnzLR3jMPxWcPKRPvqX7q1MAR1EWK3PCEcEZSV",
  "key20": "3qUjzbk8L6Mkw3VTtdzTR6G1FEpBMo3bAUUFbKt7MrvsoAgRKWvLBLV5aUjAaHkQ2BzmqmALm48bU5v7SmQsB8ER",
  "key21": "4LL5JT5fEKFv9TeGbh2gTmzVTW882p4kH9q2xKCMgibXS7WrnBhNhXL9jLLhtTJtBuKGJ3Ci1RGpZsRxthoHnryV",
  "key22": "36aphvJH79hN5sBS14CK4guL6Jbc2E6Vua3UXu9uAjFfoZxXQemc5QEn5yQbkYAiHtLHJbJVg9Vg2cY12dku4T1r",
  "key23": "2LSmB6SNENKW4JvvUdyM8LXQsqfnK2YmaPkFW3Vi4G2KL8JRRE5XPKbMS4Ayw2CGyUopa1vrrXU6yAWhpyCFVePJ",
  "key24": "hFCe8tUanLHUFA9QW4H9AR5ehbscRcP5RBtMjGxv9mKAbCmLXZuLqq9yzZzZCwqmsRbM1fEJfZqtmB3mKSdDv3C",
  "key25": "aX3sKZixDN3GHHEgbFFcUu7xi7DpTaZgSHWRb2HigcxpunvC1aa5DfmDFexVLSwxZyNpVzShgKmadz4DHp37pvZ",
  "key26": "2PDzpXCQ9xHBTQRrt6caWJ9BfRAoY1aaV6zFqJK4QhPJUL5ZLYe8hPFnQjh5bmUS2J75UMjJkoQVqp78dhW6q6VH",
  "key27": "2rVZvtCmW8ddTd2dA9g4mJuShmqxKL3wXVP9HLECj17QG9bB9j92oDDG67mMCTqAYDZN7v9KzmF5KHiS8sibuUY3",
  "key28": "52SX8tM9tvjrjCvjFxS6KC4BUTau1Szi4FwggoA79yRCEKS7dmbR2i34T1cdKCpnw8GvXPEHyYbnCbi8zGVmFNiy",
  "key29": "47L3SFx8dD8ebwtxTcPtN98uVAJ8KCCAjtKTHPGoBcR8mbPgRVCLZ9mJcQmEpdhAVTMPT3aJu7BYdkA2G34WSnmj",
  "key30": "5tLemrZpJKpEuC8Pq3PJBoTyWBJjZN2sch9b5ZaiTNDrWnB22B8LRMPZAsWVzypeCTij5ejLgsJebuRe4wNDUDoz",
  "key31": "26uQbx7AqBtinTH22zQ5Q5YP7qtRUaNkBsSfF5x426FWEiQ7SZpMumcJ5fwy4gr5PnRL6Pa8ekJ1NFvcmJxuqnnf"
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
