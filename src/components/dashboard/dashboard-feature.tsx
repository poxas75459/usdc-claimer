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
    "47QxfLUB26Xwjfo121HS1UWPHWqquMPJ9rPhgvkRQj2dwQpFKn87aF5exjmJEFd54bTf67LLKJKcriYL6fZQB7xT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ysbKjkR3A96zcQywJZcRXZ1UKTzTWS9WTgaWF7i6T4fP8pJn5LJ433MxDoVXaWUbhxZfuFeoL9Y7DZtLRcfiLDy",
  "key1": "3iUVb5NwiGQPvyX3VEJece32Q7SxqiqW47mAWJrVx9sXvBRKTp9n95hJ1CXYtKnJyS9r6UecqKh7vX18uyiih5Zb",
  "key2": "4wDx7xBAdEwNCuvkDEC5CiS3rD5mUborC5uhDHYdioektHVxK6eXFx6qMzYigDx9XCzKbze148KcpXjVGEZhUrr1",
  "key3": "3GYkb2tEMgQBtWRAQHLvrUqXs4FAFaZHWGFVCLzQS4jCyzj4PErv6d4F6q5W4MZc5R7A25cUrLJW9MPvXkxDBUoC",
  "key4": "4xwGJcNGxi948bVhiswi2sCvne4NRQU3XZyGpVvsiufhb4nqEVqLDkwhaX43WhVHGnsY2DUXUfcM4S4WQ1TbJvv8",
  "key5": "4FZwdWqQJc5Bfof3zAzaCo3Wq9kpQabmxCeGVmuhzaRTnz468ssCWtnZqmVygNx5tDB862NTgWFgLFsMcN3aEeUF",
  "key6": "4FPkEf8M5hmMC8Gc98ue15jEXRdQvZ3p2yFfdg6VhSaw5voiUJLqPaz9tYMR5SLdzY9kJCwUBnuY64T5EzakA3VY",
  "key7": "3QCnpaTKERxbrDimQojTTUjLBFgK8oq4qSo7ruptcREaxLnBAQy7Qe4smdUX5rX9QxJyLCR8C1Mwp43vHp9TtYLx",
  "key8": "3YZM6PyE1EzEPct5rBsZZcdoTw1qcb8yMC8krxkLEtCwRtVasJuHnaroNUsnbvxES1EcwajEaHBDjoFZWGzLvw4z",
  "key9": "3UJ1qZ5AmnxuXaQsE9Dw8S1NFWB9dNsXPJd9NjtmMDGBBjLGmSHBmn1Roh7Bqv5RQ4FzbnnTcfAZ2MaWga1fTuud",
  "key10": "2AFErrvvSw4m9inen75zr8SvE2Tn8EgKM2MD9nfbFjrnWGwEtgdFZenPeBQsM47325oqMZSSMm2cLDrdxujddFpS",
  "key11": "48cAEBNkJhY4Q9qCcHv1ZBkPEfa7RXm3QuPjCBiuYMFxtwtw9K5LmSkFzhcgLyFp2Zkqc3A4G8XHWkggpfBa7uq1",
  "key12": "urRqbAWJgY3CJUx58oLuZYG8tAaNGwuRSTRtA9toGAmjsYDRyf969MJHiUwW8F3XNPjiAjq2xs9aV9Y5LNmknGY",
  "key13": "Rgjqho73Qr6eHvzeun2Ua9kWaZBiu1XuJy6LecPiuiiDUKHCeZmrw4d81QiUGBxsTZvxCBHtuvZUBACznBBtqcD",
  "key14": "3YkMztLo66PQ8JLAhjAEH6zJXbrxGbQBoiQHZAq6Vu9NW2hLBxQe7HDo9g53jceFmXV2pCkmMww7VrFWqe3hC3Bv",
  "key15": "3BbeafamjZNqcA6oeE8sipzUNjDUGaRygp5f74Rzyt8X73fE5caWtPXtLrpemL3AkhAGV7WPcYiq8bEcCcRLmFbY",
  "key16": "56avQJgZ1SVHcTuDHVuVCGEJoBLtyDhSFhHv1dfdiESWxyTWiV7VThqZYC3yRThsEUExf91gCkMmgpJ6JpokLRds",
  "key17": "2EhpYs3fSDiCzAVFXgvR6d4MF6nGGJXVjNxrby72FLhgX2JVZ51u9X9eUExzDCmGqcvZ52vLGWMxWA6rbQMhdeQZ",
  "key18": "65ryuWP1RPz9aj3mATTLY7yJwjPWjAGBndxPwSN1MkdfEwo4bVUqSqzrxMzyTQuxvSvC3Zp6UJbhXbTc69gJLfZw",
  "key19": "5tFnQus3mkjJvJqaCkWrvpqwf1JLC9MjLW2HLrNH4PFG6uqqUeKkz5i5H5Ka1HrJQeuNkj5vsxpfStMahpWQ1p9P",
  "key20": "imccfqHRNfxDrNnJ6cjsKUs2nYujZFixrn1RuGx2VnqWTw4Mmdh7taWtsmKG4zYRyUZtTnAfcmYrsFMQHM8LK38",
  "key21": "5fxf2piDcKmm4AwB47Ff5S9aPi1SwQECLXrhjZtoxFvs6VUeWimvi38nJRauh6rYFKwZvTCwbWJhiinPovpbkteH",
  "key22": "65qBd9DyvWYFqV5xMEMsb3Cf1xLwTMHBfCoenBPbq7JZTFhHHqpNQA28C5Coofv2L8qzzgbpYfTe6P9nEFrSuENa",
  "key23": "2J6UD4g9RLDtY2gnfCsnRsi1QoTcuA8gqJwEJs6GWjDyuSyUxydXMRgUSnbGMmDmMRYXB2igu76n9aa4XS4gGuFF",
  "key24": "4GXfXbZLwQvMfp6d6aA3RspgZk3YpTpgD4UJti3jYKnqbwBExZHZsR1ZjCuWs5pTsAh6XHgmDHotpZkYYRYzfXVA",
  "key25": "3k1rjjecEfyhiBeEyUjwQo9SPyGb26QupqHDRinFs4PSV2usERPobmPsxqofsYTujrDrx1ZBqMPbdKA5y4VhU7ar",
  "key26": "22VYqZk1eaZHfc65Yn4npLtc9itXYc35v8gwymkLWjXx6xKEWYdaiDgEcNPemoYgqwBtwhEzyjPFohNRyhivhdPw",
  "key27": "4LEjx7gkn7NNxLYTnt51zdotrCSc7mJDD5GSbAAiTrZ1ncUds7VNZq6rwYnYUkc9dvN7uGMX3NoEyxSrKJxgtcQN",
  "key28": "3LWRFGfu4W3Z9HhTqR5apyawhpbqQQsZtCcxrEXdHfj26CtcwHjikMesZnpg9yFhf66D6R979p2Sp5m89iQTkJHr",
  "key29": "5AXpyiwVV6jRSw3BLyZbUo9DwtbEn5pKNP12f2s575HsskmmLhy6F2uuRrpBqBPkJ8kUCqKMybaPV19RB89ZpbPq",
  "key30": "5x9uVRMou6NqsFvhYEUU2jKEM1Q8y7V2d3dz6nrtDhsgTcn2jgsG8nLsCT6TrUzkAPqmJPz3zZNquEPTtVZSvNZY",
  "key31": "2L6BKEJgv9QrbtB5izpqJnfBvKmVxmgRw5AEgrBMXhWHgovLq9T5cRhPiWhaNPwiEDSzbYcirMJgXGghfa6rAZiT",
  "key32": "3JG5wardU9b2C9V8GydY9AVbKgh33bwEUrAereRSG1Cdg3drVuHv87bocWNFeGjFHgBF11QmhoU67dxNzzUbam9t",
  "key33": "3eK6w5B1NMQ5CwywWqhKfFMbLLaDJTgRDkRHWRd7RujsE2MzCTJCMnMNMmQcVRVc6Zps46AtVYsshiRqtC1QXZT8",
  "key34": "3g5ZjndbpRfDNeJgeWHtFZDdGbca7b9JhzQh7VkLK3Fvq8bPMTyRy7mHGGaow6BGFUFQNNe1JnxJf7PC6qiDefSW",
  "key35": "5Q6u1euzzXUpR5zszBH22T9Yxs6KoQEo1DqUMaydRPWFvaZHqB2ydqZBCHjq1ZRfkLYMymNH6fnQX6svEMs8sL9E",
  "key36": "5Dwwg63xK3b77VHG991Q9Q67Vqudi6JqikvviikMdKK9B6hZmoWvxUrbTnbUWQHF1v9EMGoSFMwuTVH61Cz7QMci"
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
