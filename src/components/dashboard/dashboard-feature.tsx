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
    "2ZkpomcqVfduEDfQiF8zNywFUYu1UrEoQcgBLQFtWd4wCqoaMcpVh1R988SyqBpN62SGh82dji1Wvb4iAMmtw6fS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vXEjSY3ct7rvMKDVfpiTCHZCbHMVDca2kCyHFewWFQ9m1ubYmE2UcnEzifZXdKtusMCymgrL3YSPmGoNRmpLFcC",
  "key1": "4sZih8RKyb7XR1bssKHVG8JSwDSMaZFcwgzVmqYQmJqdcyvgWuMfyf91bEmJotZczD8cESbHQuz7DdLP9gPWAbUd",
  "key2": "4xTR1wzkM6j4VApQrMMHKdbxMN45XTAry8v4DB1FjUG4xmwxr24Z9jm53cPU37Jmjkyi8f4g23gz7tiQFsKRwmby",
  "key3": "56J5dd4HKCnTYvGDbSQLtchbmwPxU9LdqvQfxKZQdyhUJsMNEYDGh3rnGqXh7kPNegv21WKjPtFnM2BxiMVgRvMW",
  "key4": "4eu6r2nUrBxJ41xBxZNfaGEfT3tnN8FhRE5CoKbSeRBgFkEoo1VXdeGuN9RfCprgR1RrgtxPgvPf2mTh72zWJoha",
  "key5": "5LsLLLXYzRNmZ4CGecK3eEUADQ788X6bBRm7uGRdL5Gv2KbC5d5Tsrdq952wt8dbCRYjtcUxrUBVGkYUUeUc4fxC",
  "key6": "UeNCN9ZFZVg9v1ng7jc5nC5LUfpH47hW3dwKZnhzzgozMUFtqzoPZLWRSfEUQ3PBMZPXyEEhrFeQa4uZmJRDHAY",
  "key7": "2qs6CX1tgicEJgH3G5V2w5DSdA7nbF7vzQoTaUQ7VDP3oFs4aaUXTyQtbZGU4xJGMevd6epV6hxbVJWJXzneHRpw",
  "key8": "47SsZWFZpVP9BW2N2upAQGydA8YspFy9eDt5tQu6dzJK3GtJsarzSCaaCiryUkoxDUL13Y1FrV6eTqznc66AJLh1",
  "key9": "2oucq1BF8YAXCpMrofbeQYnpQ9hxKcoxRBhY1KxV2NLUb8VJAj2bc3Lb4hBM7rmX93TrqXjwKydYmZmTbrZEjKi5",
  "key10": "49ss2fELMb9kHZE3Q9sNY8PmxxM3v2nBc92UDWCUd9nAsqhwmoqGs1S33d7asE2NshwzVJGUsPTWm4pZXG8JdU1W",
  "key11": "2SweDkvjaVRUpj5eTGHWCiAHWKHYdbUiWkxEBPAQeJkFwjjZMQwNymwcQAEqvXoWHsxHGGn2wXY1sbcZw8AwdhHh",
  "key12": "4XNJ8J7QVA1cSGA1Z46UNwPt4sUKARxsFmWD38bcF63YV5WtZbdV75iPnG6edop8WDSqGxMAMVxWUtjebJnzQL2o",
  "key13": "5QHqTQQVUPjjEaseRRaCdG1qzU7hDyeACYoTzCU3GnJSY5zgTwjRvRvPHtuYhzYweGMJy1sEfXomzXcB3wbmFfte",
  "key14": "2ptdSrZg1PhSsMJjBZSsakP8LwK4ZgfKFkXvHK48fuz8bBvBnWpFWRYJg3uVXyPihzNfDBXcQtoBt55yVQ5bHYfk",
  "key15": "4dxtZ3oVrKrLVE8snFUCnKPz5rKBiXKoYJBRZmmLfgao4MTKHVXyahaS6yJ4cFDG3uWCdSkdTsPqkxPcamrZ7de7",
  "key16": "AtaXrXcfumAR4UME4hD8b5Myg9UiCG66JwCDR5YXD5ufRv3HHacU7FDurUHACeB7tWydtSPrDYTqFnK4vWZYL2o",
  "key17": "5DEqGfjJWf1PvzdRHcBFvZbqtgrpXDu7GKqGrttTX83QjSUx3NsPTpm8EeTjGJymjS1YEZYRufTbHteg1rCFJipj",
  "key18": "puYVYba2359MQFXuDhhTqUPwU6PaGJsKBD1RFxuWVa2ior3YaLt2MBCGAig4dWxu91Cnh554X6tMxES48fX7ZYx",
  "key19": "2uAeKgVQXjtmbvTG9dJmVpKcbKJmn2Qnn2RLYSAEEzoXNm4gi5hE18coT6vXuKa995SFier2YT7n7bYNJS8yqrti",
  "key20": "3dYtMmYXdBuCKpgtxahasSemmKtVGsQbCT19NkhK8ehkcjjJdmV1TQfJTm49Td3C9ehdWn2JKjShSRGFYC5RqaJP",
  "key21": "3Tgbkn8MfAuN27Muyw3tzBqyCDxFnQTYzKD9xGG7k2CMLj3giJKXjP4XhiyAAgrYTjMMjLEnjhfnzRFgD1MPgRMM",
  "key22": "2o1B8Jf2HwPTnTsWety6Dct8JkBXwqiPyymdFeYwYYrY2LABUZY13J8ssxx4oqkPqEpr5aYkQR6nhF1Pxay5E7PF",
  "key23": "5QbBHb6zfkbZxviMnnMJwBsXRZe1r3S96ircUT4EAGD8ifZi6oufSbtqHZnSwvXPuu49CCRpWEKjFA5KrosD2P7v",
  "key24": "HEjqGh13F51FGwqJHWKzheoSQ6ZDwxBA7AdTeKgD7Gw9kfMdv69vdq1aEYfQYhNqdPfdbEdMfXHgG9X7sx8J9iY",
  "key25": "54QY6XynyLyV3LVzizZhuQ1H8Qxudm2BVrmztWqXP1Y39dfyiDUR7qydo4MhteiTYZH8bGWEm394XTPGC9qgszc3",
  "key26": "2QMCS7XRXZr9Ar4k95iqqPjcSVqG5NZCiHVZ2GcL5ukyA5GyLmP7hw4VHuwsQUJ5brDvJgZBxdpugri9Mm7SVfSM",
  "key27": "T8hBp7kNypkhs7XaPfLbmqzbH5q3iiMQ6ErnRyR8Baft2r5ApkFXSNAtYz3sHp6KYmPfY94GyJyo1CSgsmcomHt",
  "key28": "671tCYMzmkLPBkrb55aaCdUaCq2shbAD7qfiZff8VYDy4Ln6iK2BREFwnCb8THxnDGoib9zwU1MJaCpcfgCVfbno",
  "key29": "3zz9PDUR7y74T7MLrNX9P5H8cdoVxZ9LAHU1p7vDRuzF17zBP3nAsmu6igYwKHRs3MFAkF1a77Ct4mgePE8hWrSm",
  "key30": "5D76EnD4qBHve6N4gb5xiKVFnHAEFQFQxG8wTSJxQyeFCz2QDfo53HvnPbZemqgaLL19jFUpxL617EZ5L2kHUpre",
  "key31": "2Rv9FG4AS4wT2BiNb6wzdmy3i1Hpyk2FEjUwuZkckHb9nTCuz1TrdZrWgtQqTtB64RRCVJFjFsUApMgs1xrbaq9q",
  "key32": "66TeAoQZCPmPawXLcZAf7EyBgGSNMFSAHyUMvaSQ3TqG8Bn5EZ2M7EuX2jYf5XZpMWcMGGwJMFw9ceXR14hCps6m"
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
