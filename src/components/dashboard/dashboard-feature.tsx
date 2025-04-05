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
    "4qXZXEdfMZsjqJwEcwVotSpG4TBhHfQGQdZPbDbDCawkJY4yKdAS2aHDiMyzKJL2phrYKj8hBuEgWfxq5698WpLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42GcDcvEnocte8nW4AtdM6rpb6yCnXEqwB8f3R5E7Brpiye1jxwvA4cExfqQKdiE6S2sMmx6xS5Hyowo7raTUYi",
  "key1": "43XULCmk5PDRXSstdducB4cPKL8CuJdi668rJZL7FQebrB2bvVPuPxLDw4gBNzx33xY3wjjgfsEzmPPMiyGCowvx",
  "key2": "3gDbfDaRgGe5PAbMAE3r96vPUj9NvgPb9NjMSvEnZ6pbgcmT9sSj9CcoNNjLzFRJHMsxgqK1nZFfjQabAJRYgD1u",
  "key3": "23Yv2k5fGajMfWEqyZ2SpRarY5ZLabbJq3QY9kgW9NSdYragYxuBNp5AVXR9i5JaypaXvSZNsYUxqscNMYSAoHJm",
  "key4": "UJtatARo9s1mZ6kRY5GzhViLiCQmDo1yzDSisAvPwy9L2HD6A5FRxBQX7P5kbb1YXaTfEe32coQj6z9bo4BE9rM",
  "key5": "39RA1fds4U83NBFytPqv9mnrEZqhh5vdbS5cJtThV3xmpkrZCRbrekWDX6MKNT6wBuFYPeXzweTgAVQSTPmrgtvf",
  "key6": "632JA4w6qGjhcNu23bBSjU1y83xr5JDsgud88fMg6ZmxR26hbRCLAphde5w5Dk2CJLTyDzMHpYrfr6ckMS2wr1ce",
  "key7": "3W99CGZNUvQp1B3t38XFtxis2duL28SmPjrRzwayN2cPyht6NYo8HdEGrFXjcJgpoEa7WMfsR9ARgaLXdR2XZ49C",
  "key8": "4jAR5cY3iZmBeEadqe7GkcoQjzMnv2ZhGnz9eoBbbaMbinCxV8iyW52EJ1giRNP1zmCUm7H9SmURn9HPtPtDDRqY",
  "key9": "rH2qp4sekH1S6bCpwwSV3TPhT2oSCqyKET8xet4pRYaqAMHqPmXaiZzPNUqfPTd8YzdqMsJkChfCnHsss4QEefP",
  "key10": "3rHczAwyYTaw3e2zKBQqyxdL9wuUegA5cVzjzdJ516ciViePCTschvaic1J2FgEYnUBTW4bzSCexcNuCfSAhsJnZ",
  "key11": "iPv7rw8doyKo8a9RLHHfa6PTmM4An7Fuir5T6aFt13WyJVTGa9ApqPG7zccBaKA9TtXrv9E7SxMUKuAUh7GnPXq",
  "key12": "3QFsWqHthUbQPFZSHCSiSRNsNbo2B3pohMtQ7om8qW8mu29GARmgcFbYb29brzFJdFP2hYkDvrSfPZy9dXVdf1h2",
  "key13": "258F8tnMM1HxP3kqqNBY2TqWo7jwQW2FJhUgegcGSNDsjW6qXC2SVrGd6THGS6wvnTgKj4YEBVmLDkYXCjBTQiPW",
  "key14": "vrJvbSBDjHX52C3nA687VDeYUrqDt6cVyYJQG7vs56H8Ch5E3MfPQVhYzYJGyKr8RoAHbrh4tAg1Kfau8BiydcE",
  "key15": "4BmXPXs59PZ6hTttA2nfkoMg6xY4in6RAE9SFY61MaRY8GBMSt8Cf5WzzagPouiCvM7rThvGWLAwkB3rd9TFBhzC",
  "key16": "625Mh3gjFzSzXNTduJr7EJaeSKMQxmj9tDqgXbBMUJAMkJk7JpJrwc659sfBaA2fkMPNUoZ73e2VjnjjVHn1thZm",
  "key17": "41vy1Cke7A3wsELmLa4ioXg3M1kBVyHcLiFU5hRh1cQm5M7CfqbHpuRN5DVX4hZRQzHxYGZAamLi99hht6TnVWbc",
  "key18": "2HsNEKjeCyHE1u2PvYFe4ar1Y6jcZra5yp5G8KHxy5YSDL3G3ftsSQ5bM1We7tJjcCjfZq4GagyzzjGdoESUubqq",
  "key19": "48una64kSCewCm717gR3geiNUmDswjbE5o2nfYYSLtCZrHW7rN2KpNJrXYzzkWDuyszKfxJPrMtUcpTC2UYZzmxA",
  "key20": "61NpDjKqZzBm4imqhBcCGHpGNDQMKj9x1hfD9hhq2sDSLQzj5urCieiy91hnmtVJv2JjiYbgK3ZeJSB6aDGBkjD4",
  "key21": "4ZmWsMaqrXKjvCStfmBoLpMJQnq95L9jmhFeYgrg2Ma5jkgaAtyU95q7qLTzGwUs3PseAppFXE6zPGmsmttBNJpE",
  "key22": "31FByJHdpy8wN6k4LWtLcKqDVDK6tLCkMAXALbEMVB1QRJVWWBzmaBkkjmi7vA6J5JBBBKBBTeYoPbzXq6TdEY4S",
  "key23": "4o9hsyLB1PcZJfMAcSv3wkXyW8yNmNm7ThPQbM81UT8VeYZBMCwtVhYX1CurBcEwshbaxqKxiSNpEDDEyi2NvfA",
  "key24": "5CssVe6izNPNPRN2QFgUJ16cRbNKv6f75Dy4rQwDAQvb539ttFCR3V5g4E1UGKHEUw28nLqAmEBMZwZ1bMJsMzWy"
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
