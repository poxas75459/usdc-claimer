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
    "55jMao2SPhj9oXRdm5KtjaVTA1Nwix7tuwDEgwkiPmo52Ny7wiFD39kE6S76WCc6A5QYG7Me2X5dQLZEJw5vNEuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EumLLCxcWRyEZdgiG6csoAbmMLdEvsLgYGy2azpncVFBpraXppTFs39DsSyFraE7UTSyd4dYmn2eYpjxPe1rMzY",
  "key1": "2mgTxaBap6hAxnRBWPmnHLEpXW91VWr6dUcwnVX4Z1ox3q9b3ZMdomiFj8sqGw92nhFuut8aNBK8oK9F3CWv9f32",
  "key2": "5JvVwpZMBqjaiL8mKjkday6kFfwhLDZZ9XNb9b4n9PSLBjxmVnsCXKHMkRGZy3NvU3L9eTndSHhJk288LNkoDL99",
  "key3": "5rPXajLUtKNZMY92nZ9jRae49Xrpssgp7NKH6vehfLWNS6w7jEeKXox43UbWrgGa3J1AdjQp4Wy3VGopDHGDUt2a",
  "key4": "2rbrqpmBp6JY2xJ3og4VYiHwxinzKweoX9f3Qiz8j7iCi5eb62R2YirBfSd3MmPSeNSUcapoi2ts6EjCPDj9jjFn",
  "key5": "41aogSjYNnhtCogPnp81UtCUviGSZjkhuBZBgsL557QPShDW6kM2st1QdgDWhMXKXWsucUDYhtzjNLojSLxE5NaM",
  "key6": "4rG1f4NGMXeqqeARmjiN1uxxCf8qzgQsXUDAjyRuN2xY5VHyYEGT8xj6BXMuUkcJsqt8nafWZwW3NWrpGdy2Jq2r",
  "key7": "4BZ3aaGHGLRmGSzRsdnMQiX12abWGZUsYjhUctfmUnkNjhbDg8WMToveUJCSaRfRsqE9biWFJaUWMh7bP1S2xbzx",
  "key8": "4cPXH7w5JcfUReXYQkRdktCHa51jMusAKEDr9aXoHCVZJdtbqiJRgsAkeCSBgjcWzhbtYohd12pHogXtNdio4Nvk",
  "key9": "4s69ScC82wA6ZrJE6nnqSimD9iugmDoszQVQhDvpt7v2vfumT1J86iu2ieeGQm6yJVsvk8xZFSwrpzTAjeqRa3Ji",
  "key10": "5bpe9kbyKk6oHRQawhNWNTpvYjWuEa2eZUd597VNAwGy25BRdYDy7jbuRbzwygaZfQTQyVPdZ8MJwAt6NM33MFVw",
  "key11": "3ieMPuKipzeBfRzXMMam4MTeB9qfF6i4pwq64kAsCsQZha8qVvkNQa1wwYE4hn2UC8bDyULrh5qDTmhj3eqxNn3C",
  "key12": "5Nq1spdDaF1DLZGes3aETvSgHTd6Bata1wmH2YuQ9ca3p6brZK4CLCK42bYtvx7jXHgrkyv1btM6jqRE2sWismcb",
  "key13": "3AN42Yb7vm9HHMJYEPhd5pEGCqJNDnQZGwrsbWcyoyr5258WzxsStrTQddmS3fvxmLMsCkJTbLnxu8B79ipetjiX",
  "key14": "3rcGPMtDC5x8KroDE9ju1WSSiY7q5bLAgZx5rvhdLVD6A2s61C22EqsWYb1BUASPdJ5FeJ4myNW22x3P7STx48q8",
  "key15": "4eure7esTFtKVYx85dYGCHYgXqC6b27o9Jt9BqHX7wmTHFLbicPNVNj2Wyu6rWTvtcPGe6QBBZ5rbLPmpcFdUZJh",
  "key16": "4HDWimHFKU8S9RVrGTQMZu2LXh2aM3norJPZaPtZsCnZXWcjmGnA5qSRaJVwg1ZUSoQ73fUDRHiJWNNPAioXRr1Y",
  "key17": "471qmWDPmMQakx5uGPT6rkGVrobNBpUgQ7CbSiU6eLfaKiYGVAvRBNBkmTa2GL9qb8EnnLcDYvVYbbdJPE8N4PW2",
  "key18": "4nazn5GwbsHprkRkNUxjCbFYqDRxSVBwnU5Yjss8y2LP6QsRK2eL6uVrrSbUDeVtTteVdD53ofniU5p7PZ6nCPRj",
  "key19": "drDmy4TgDtwwMPm7nGJqanBeEMk5M6wsuTBZ1sC1ecJVRC66SmCzTJ48rtTXtEobZGUxGW3rpfL2BfY8PjtuiJy",
  "key20": "42QeJo7nzXdgpvWgStSCTA4ZXvSYEFzfj7WRqeFHXxpRjpv5KY5wTuW1odhDuRJxw87YN6mk2kVuyd8vnjzs6UYv",
  "key21": "BbwAJ8muE9H7EeYXRPyqJxkFfGmigxmPP44rhppnDRsw72q9dUDe5fvf7dvQBTuijKBSLuw4nYQppx8QEZrtHMR",
  "key22": "5yYbNGq3N3zPh9mXyMD8XBNJRGm8XVvqw5q8VoiSRXBgUq13VSLsjaK4SAzPxf1LHNQXPadxT6jQHBCG4WP4LM6b",
  "key23": "3heqe7V8Zg6ZjVgxSHCbhq6EMoEGXFcz8zg9RFi86BKtaqbKTA7DeBynWJSR3mTB4toiicVEvLMum6w1SGCXoxWX",
  "key24": "AR5BYjTjjFhcJjRiDbSpacPtnaqTNZCgHQ1J4VAZzK8Pn7eoxktyNKPdEfy1MiaypAE3iYkvXwEMwsrhyoB4EKx",
  "key25": "28qbBZxLJwK7xipbzWdApdJ7mViaNm7o1FneLTipeguqNoBjdSciF6QygBxTJhRM5k2fvghyMkVtixAiJBYQq8US",
  "key26": "3RL5WuXre6o1fbU4UHV168Z7EedNoED9F4nEKnXgeEwKPjb2XnHUqwSskVqdPDkkxo7UrEZdioRugk5ZiZx1aZEX",
  "key27": "3jJLVM1rpEXDdjSAewqEgqNzy3vnMBS5XprERX62qYLQLi4ps1EGuG1AdDb8ENHLwtFvyTXBgsG9gCjKLr9MVkj9",
  "key28": "5fXAhdxM6EwMHys2SVAtMqAD2FNncGB6tgidAutHvjywJu49SAVew8e7rhHCG9DcWPvs5hb5nFd8y5MT7AYUB99C",
  "key29": "3ZE91NZmQWtwu5J6GgxzvSSLYLtnyrgAuju1hHABcPLBLJDVrbuY6uZp7vVd7ZBxohs9sFVYLwkGqxpodu6pdu9Q",
  "key30": "34tvy5mgtYqwmRY3CTinb7QZnwsnZ32q7K1Nm6c2MQi5nbpM38BNSnp8Ba2j17XCS55HFW8yXmvu6hinw1kcrZ6A",
  "key31": "2PwcPNkVe831vnoeVzUyqjQ28tYh9AH38LPYP4hvR3vuvWbFHTHJGtYx9dSB5GCqQJC19gA9VnV4wBDjipsn4qia",
  "key32": "L2Gh5gEmq3SHveDfNkHpTKW96XXc1GLh5Jo3GCYJcHHAzyShkXsCxxtY3yfACpx7c4UXM4BCnhQCDGPsSNcnKfB",
  "key33": "2wwk4RTkn5L26rerjfG8gNowSVPdpLy2khk1ScYBJ2cf3KCcHr3ERAhRAi7boHpD7msXSBHAe1erGDGGUyvnKqXd",
  "key34": "2VBBBq9muRKFvFkpFMZzXnkcSxY7mQr9xRnnF47phJeNma2uqBDxqPiKL1YiQxqEpqq9nqAUP5XEj5WBJPiS7oAp",
  "key35": "5Pijx1Fe8tCt18fUhJNRUcNpx6gZhYyd39vkJGJWzoCj1Skk25tCKPgn5QPzjMhDa8jJBE9nUmeim8RTvqUjPvhY",
  "key36": "29FiANWmHYwySaPz8QGaVkWQrH7ymZoPCdUFtJPiLyLnXc6EW17utggew2dxJus2H16KJtcnke96qVDNjwH1seML",
  "key37": "299Lixp86QryzLrsKguJzMoN4wmrAvJav1qUYhRDo1hTY25GCvwtoueAApZdUtzPBST3zh9wZU82LuQCSwYER8hH",
  "key38": "5FPqJjZAbTaTYPWG2h3guqGvAyGwqE7v6cKyHXF2fTMrzPtpmoPqBqRNjhud1SMMt2TXaMCwCyKh61JkpCbCw7Kd",
  "key39": "37y3fjREnvhwDg3nJoMrwZ4G3p3497zB929GDrF8DY3cQDjzx6tUBTXkERdTKxk77Cta1LFoRrUA4GSyqGkRm48T"
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
