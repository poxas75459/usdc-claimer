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
    "3LwfiDQZohiCbqna6UwdPQWuYBfUnbAgpYNbRBsn4omVzhmrAEgeewqPLzyG5GFXz1o4gHoFJMqPA7TS9oma5gHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KnMDLTWTokqcBj4tYm5QjhDsjuJRnwwffcWEZk2JVSSkqrfN9sB5VXJpnbverKWbrg15WAaxLUwmQpFFtmjuBur",
  "key1": "2srfNTuh5XfxUgAXCsi9gpc29f2rCvfG4qU1zcZp68NAKZjc9fqmBR7twX9RtPpdb6W1nsHEyGWYoYMpHp8Wx7JB",
  "key2": "4Jrr93d3R38sv8G5LgSugCTu357mV7Pj62mWRT3EzTy9S3DnWnv42Y4tryJcdV3mW9PH62yP4xjfB1h9LcJaZYTx",
  "key3": "5MTLkxiE9zBmN9WBShCYEbHLdogWpajeVqVdyotyaXpoHYucHj8QvX9N8RDGGYZdBtitACqaYd86f3bU4TYCVsHs",
  "key4": "5dN41qTJbi3JWvDkGEWXJYoSoYni4Aw8mD7sNxLdLfk57WTiAcXxBSk9SZLhgyDy3S4V7FN5UwFTQejJwrL1jzC6",
  "key5": "5d52YxyW6v6qwv44VXtikipRS6wXK4pkyApYb86XeQbDz1jwd6TwvBHy3DL17unA7jzs7rMtiGEuyjiwx3WhjMBT",
  "key6": "5E8zk6XGG9uq1Z2tDUFToABy3s86ZUeoN3dsbk4mfmWaeDFV88Ypeuo9qVsRfB7zstUA6trwFJNTxB7oSyW3yoP",
  "key7": "2RJMKSq9QhhuHJo93ZBjjKmigFgUjLvWoqZeGRHqgvjwaAtgABYBQyjHq6gLTwJ3coZ4KMUDH4GG7Ynzqvy4MMkc",
  "key8": "22w47NVe61KLdHie7C1p5xDvG5a69daQa4WTdvmUYxkdvN6wv5BapKxXK4i3ycwe7ZxXYWq4xmp2LJiguCqPgmFd",
  "key9": "3L4gHQvHD9gPV7BRwwbcv3HY9SsA9A1eoho3289V9rAn2RbrRtbpHhkh3BunNXDbgdjDNXPyPBYbsf6P1n6zwH6B",
  "key10": "TyF9RG95zChqTbmkTdBWCCf5aDBA2Mk2XVkvsantRQ55mbozqbiUsNjWg9Z97a5vFRJdBoqZCzBZ5sP7X6Fyguh",
  "key11": "5cVUQ3brm8tvXAMAT2X5otKBmtLqWUKDPcKtLqcbjyHfu9Bmacep3dnfoaDSh2owkSwA2yLKVXBya6yedChwniga",
  "key12": "4a7hXmmZYsthFRbczHQ1agzDvDzL4UsFpM2WJDgRYJ4jMHxec3daxAy3PmB5uRqgMg57MWdWy77gdwibftkwdci",
  "key13": "3Qwdgn1jcihLAyps1MefC4qaRSMQ7Z5dQeJ27NijmwMMQTZVhhvcoAejRw3ECzkUbNGFVkEJ3VTMsyzFvLkvDWMz",
  "key14": "2VP74mudo4wmz8uFpTi34skJznWe3mxfjpaj56LoXSDgLWqEZn2jF6Zu5grmxBUsreae8WbM6Aj69MKaCmCmcaeA",
  "key15": "V6BDwNGnPXRWSrHfNfYa98YhJyUtVKXwZuFeNiWLRiHJPVEgXYeC7kVfq3LcCqHoAs6NsrCd9j1NZSvaLzSte3B",
  "key16": "5raNwmKD1QzTmrHQq4Yc5qfAbu6kagWX4P2WjZCmvEgynzZZoeevRTU4t4NeECqAVwYyCjqzZkFxh22D4LoZf3Lt",
  "key17": "PrBMVjBPYjwKWfMNFHwfEvHJCa3N5uugAgNJyaBq4sHRmRboi2kteLZ34FcpJHUyEhZDXAVWE7XVo8DycvTxZBa",
  "key18": "2WySdAWrBz5oAaaf5usreXwYmCdf8L2LmvZ4XovLbfHbhHUS6pge6xwRLZQaVWmzqHTBHHnEzcAN6oDSZeHu2poL",
  "key19": "2iV4dvvMxVV8E542X8bb61S4FSD52bUcnfEJjVmfdNXiWMqb8X1Wnct3SCAbRYZ1jDQVzV49E1FWmXfv6iSVzLJk",
  "key20": "2xEiXYVEbKxkMbvr2y8Fz9rbZ9faEqLVN19c3pnJxxj3QtpfBR3zEmfW8XgApkYM5Sbydkc1766QPBXVjiS7kydd",
  "key21": "roje3HURBEcuGq9b2m992wwJtyMbL32ekjaGZQFzbwNTp2vPBJqW9iVPp2VLsbnVEmyUjVMYLqyDdtBAAiDweMd",
  "key22": "5fu82AYN7sf8oqf5M5BtQTK9wEMYiPhFkNbZJfKR5UwThHf4WRvo1jybhUYCFebtfZJKxVcsjRoTeBRBrEnd6qRa",
  "key23": "2ctDgLeiJFkPwHGU4NHK1VuqKQgLe4hpg7BFzjDeMGy359i71wfeySLDSAy5WRYMYgp2Zkpwbfz4n8Y6iBuDRQdx",
  "key24": "3GpXZwnCHCqw2uPAMeAbUctzccSwTkcKrKWLVYYPeicwmyxNpADaG9EEGC5fdreUnhZJQaUzQtZtKYNBNHMdM3Eo",
  "key25": "2Tva8NKU5pR2pjzq2X3krc3U2FDM1qPEh6zE5j77XCg6ZtSktqXKuZqCTq6zA5UN6bbQacYZwnL99ttH1BKekiBT",
  "key26": "42boUZPcDHrbwcf9xVr2FRUiGqJCnUywtQyYJirwUSo1wH9wbYpt2KstYySj7iU8VYsUZUwVs8FmxKMFoYp8MSaS",
  "key27": "5s5Nnafs92zvNS24qhNhAAU7ovTMCk3xYqwxr4NBjNqY6uv8832E1DcahqMpa6cj4TqL8p2vPVmKiaUt5q6GsfuK",
  "key28": "4mz1p1deCSyhoBoEEpcp5TCaPWkQRshZM4GYNyvshBjGvtUmnT2fWQFQ3NV3kukbi4xE3A4h4duyduH7vAVQvSN2",
  "key29": "5PUfY8Rg4VGT83H5pyUphsr9WUyEvJDmE4AzwwzCMENNXhYhxDVvmdYnEA3iXfW8rgezqhHiWA1wPsxEWPns5i6S",
  "key30": "gQgZAxnDVNMANnNtinepbnPW1m4R8xJduRhm7ufAULVBg9gJm369ynNcEwxzGMryjBAU3vx3L8W1YRpbJDvgvq4",
  "key31": "5nxYmLHxai8u9aTxMBStVJZpjwT4x32Nst3LHen9zo8QZgq1RnDZkcgx5VHo5ubmc1tbJF2XACvXNqRqPYQCTN5z",
  "key32": "5Q28z3VkiZthcrkmRqREoAbnbcSKNC2r7JXe81aDdm1Hb5d6MbBrZmbzXc25xaxCyLzVvvjc6KxEatSwq4bxFQKq",
  "key33": "5qQSPbFG8LBxBqo2tmkNTEUXc1dYFMfp4jBwbhWvTFFhxaftXJAX9oWJ4qCA1AMZVt4o8STz1fdK5HYHQyYziDb4",
  "key34": "2E3HUWYEkfe15nNydozyukKpaT9oMSBovq6pLvkYzUreiXeDyh8ea1v6Fxm1UpoTsgZ836xJT5u3J9E1Qd7anhNj",
  "key35": "2owBLt2RZ8hxqvNwuWfy5hfTBYCT2KAyvTyd6k8JTLypABJTeCAyVyjPAJPZx35s8DXq7JP96qHFmWRFMaWbRoF4",
  "key36": "5zaEAv9ofLfTFwiWapbFEBpkYEiVYBrLmDnH4aK7YW17uwZF6Gg9izb36E5u5Em3iMjhxak1KnMtsSsGyhtA35SJ",
  "key37": "2d8iUgiLjrqwH2xrJikMni939oni8Jnhq4cxK1T4z4BTad25VnEJdyciVbEhvoz5XJVaYcZKDpsbMJ25KAkRqtYG",
  "key38": "2DnDPjL6RN4337Z9aJW5QWZYsTewatiV2KjQ3ipqBfLxwykEyEQFMhDKuPnDBM28EXJXunqvFEXNrt2Xqru9Xj7t",
  "key39": "5HifA7tDhcTiTZxCDXJkJ8wxMTXUBPAtQbwe3LfYy5dKwjutxX8gGPFDK2CtKbRx4htQqA1cceCFAnrwWzSkn7DZ",
  "key40": "5GLptrBYVovLjXnmGzGVDaJpPGYqpCjnW6WnDjwG6L9fQX9JPJCMsMNeLtidhiVQhJJBoqhTkX25KG3apDNYS8Hf",
  "key41": "2QWnc6Md3U6fdPWyJH9oAHctM4MR365m5LUXGy2QpUYabvkMUMqDvUZxmGrSn4TtAmg2PC7CBBgK4sAQ8FYp69qo",
  "key42": "3Kekg28MUyDFaU2XUCXm6fCaSce3itBtoTUHXefGSQMReSqQ668p5gsaN9RmH14xcyTypvW4ud2zF3NUv3T9eai9",
  "key43": "3KdYeCHFSxJR6xhMJeAcZd2T377X1Zk7TfATVSZE6akiTqhT5JXqohYB94BThe1ShuPwocGdeNqfxWmZRBkD5UTS",
  "key44": "5pBFgeFwbt5pds8ViHn9Gyn2wCjbQzA2GGMC5qEYVUxEk3oayfECUsuFscbGK2TxHcC91nYcJS9r1YwXhzQeoV2e",
  "key45": "Sipk9oo6Ab5jGzAR6DTaj6NRXxfdSvj1HKq6nRAJAeurmRpMJHQWuvPdc8HfGTYmFoW6nGt7x1bHisX4qkbm8Rr"
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
