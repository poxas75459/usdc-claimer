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
    "2LKjoxKE3YA9kcJJC2UD1CN4DAHTfJujfwAjDmGaTGsMZJrAr755vTQpR8nmJdtqnPuxwg1jZPhMVFHYTVUH5SEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2srgVgeCaa8ZRcWHN48z9mAj8FacT5af3GeZRtRMBAJyHBaBqKK7YEK3RZxKduj7cFvXdTw2KDmvatTw8AWsLU8s",
  "key1": "5x1m8btXihANZW2jQUkKM1nFtKgNZ8SxKHtbcQ5QwVeYFkkCLxQ2SiUhW4mhp1qowmHTdxU7YLqG6adNPwQNzau",
  "key2": "5afq3Hhh76GcWo5FZZy2yZ2WV77ZNDSvSYrofQ8xwe1BPyXUf3d81YefxJFXWAhyg41qtpSoH2Ew46k4Y2jy1uxh",
  "key3": "4NZiKt9FBNcckGyiRoEgjjQabnZf93Ts7g5jCbZXNqtbYQbEE9HBwkUXaSdRTGnW8sA9KhzHWMBGQRcnavigq9Hm",
  "key4": "2454QMoYW8keCwqo8xK1sRttohDP2WYiXyAFWvUB2iRReRFns4P1qyRvepkxxerjq736zK9wC7SD2JTsUinLUS9U",
  "key5": "3UEMa9rotS3i8dUDo6NWBRJDgi2YP6Wm5H6qJscXT7gA5r67RCUQ6JuCmQntBU2s9M8kWyXgkfLjpF9EzLjHUBb6",
  "key6": "3pmyZCbwKGoEfSZq6sym5HFtj8hBnMmrhXbR1Aupxy8vFXCtsazswJCQ6ZxT5Z8tzwUhYVmYTWRTNZX6UjVVN4uP",
  "key7": "29kCPDwyWTwhWqkxgUAWpgP6LuyyqTgdnetFzoYmRrpu3L8c9XvRu2JD8y28C3oigQGjxcu9jKmJmABTAsRqjELt",
  "key8": "65hZHRnjhBjLSX9EQ8DxUmCeJDvDrNYtK1i3YEbH48Kc1tTtERdQJGDDVb1yT5u5HM3ydXKdmg9qnsaDBy9dkyQg",
  "key9": "51cACuM7CKYGYqWCbxZJMuJ1cJRTQEBx6WmraAn26g4uz4HppDkVg1fhYZEQQ4tGEX9HAxzba1Lxs5J3htYKVU3D",
  "key10": "TnPtqk277QiQzLRNboH3mybqHceeivfiTnGkJg35mrXvKUHBxWAUpGdQirLcXdMrcGCQzWpardb29XkaEixCMQM",
  "key11": "UM2sBi4nFD9MPS2HPgyuqnk8mj2pXjD9NoonaScdRY8o2ZcU5i5jaVY1M93KYSUHp5GeHqE6BxLf17VwSHkcqKB",
  "key12": "5MWZ1caSc4g1LStZ1eXM8XrgCM1ghsCpopAfjt8WgBRjY9GWVTemPrE3YH7NHRoYVtvXEsBVNNMKS2jTfmjZKEU1",
  "key13": "rGt7D2RkGjvKkK2814uEdrzbM4RDvfRvHuUTgBRGHV7cqeQ9g4PXromtFgdp9ivoFrRc2a6TWySsNGrMK5UwUVx",
  "key14": "pKU2dVVftkbgc9LqPFQ4m9bofkkC4KGQ3LpQhfVekZp1L7vm2Jybm3mywSu4cBLjJrXcsLPLUUaXn9B4gopHg6b",
  "key15": "2Z5oniEBCRUNDwwtADC7trytxZYxnJKNYtQS79ZiQkbKYcBR7A2aMtMA2J3uVyL7uQJHdZUgX1Laqr1XkZNPNpzk",
  "key16": "5AqPny6pFmgKZsm5aLBzyFFicJQcizbJGWPsTmy8gHXDHvzajitpn7QC7itXNNqhWFxQU2mgJZYWYQokAWfnyZrn",
  "key17": "2nWj5atBX9mJHnRR4LhmCeLToRHFnFT2zqSM5QMWh28eALpthvsHXwCFabqe9gbe4wgNfZGD79UvLWVeCUPXwnrS",
  "key18": "43t1JrV6ALY2yJinKLH1mPBRgvhdGwfqBDaKowTbc5VewMZnZEeYa9XU2g7kYT4FuTfzK5P7CuipyVXA8Bf5frXN",
  "key19": "d8tboFQmJrBDCPxPeWKRmuDxwtMm4mM7zd5ee3frprT5rZeCga8sEsq1R6pykZuh5Mi4BokUPFPcKF4CXV1f92c",
  "key20": "5AjhiqDfj4CfM5T6qy9VgAsK5zWMzvxoiKwUiwYi39az8xp5FP8XvuwvcQmzvhkpB29hhTntovkWHiNuSf6LEbyu",
  "key21": "4f5JS6j4P6CTHDAHDoir2uZr6QFQeqNktBgHtVfvj4jN6bgrAZkU5HndfyetbtK4yYitHvCZcB8KaMt5MFaKaCFs",
  "key22": "26GxZphv7zcSZ6GxAwcgJY6erLQB8F9mZA5KX2D9XTg8bnBhe3nAh7eR1JYKTUwz5XUYByZsEQZ7kyWzGYeRjWo6",
  "key23": "4y9ecKcMBWotJYLgKzQWxhfKvJpFNpkWNvWfLi1GRFB8ZazwEyckUvZBHKiSAagiFehE77HiWfyc4u1MKxxYCtwr",
  "key24": "5pXywjsY51ZpyAgEAHLKerSrzfupRSVYhJG5JR2UT46c5eW99DHvzVwL6JsGCovWd52MvLgitoDcvV9XpkZTZjN3",
  "key25": "4BzLW4WNQtHEyKZNWPaZ4eV1MHtFJjDzMi8qEuDikUZavsZJ9CNpA2XCGs3V51DRdwvXsQFBVKRA1Tw1ACmLBsb1",
  "key26": "4EWwdagLiS4QPmtEXy8VHBa2xJZ53dgWcnPHS1gDWtoeX66iPVQT4BqaniFJFVSAhgaihacsgP6Q9m8mRw4o6bGw",
  "key27": "pE7sQtVgPk8xqFyFpiqGnie9U5BRZgPqD67sgv8HzEDkUuuGXJvefgW7YyCVJsiBSopKYmQvgAAZhjZKQsVAaJi",
  "key28": "3Nh49Nj8T1tT2risdFeoFTo9xdNo8gELF6oc69q7DkjQdx6LdK9rFqhKsYWbBSRVrHzH7NRdJV3NWrdfVXo3GeJa",
  "key29": "543HsMsACuLv4PGCoz3BxscxBymv26UDnXKDwHrTjHeJud3nmFpCZt9ftfsPwUjA5VbmK4i9yVR7kjpwswH6fJHz",
  "key30": "63wjYAVi3BrdAJ3ujZxewokjXx6zQkjyUDTRaNYKjiQxRyUCYiPRskEybKj5uUag2V75mmXfuvyGgz5VRFtsJJe8",
  "key31": "2uQXrrccWtyyw15nNzTCEt2swPykWmANZe9RpdhoC3kZatkV7xcVgWpiVgmaaa98VvwpDzc8RT7BzcStFtaXwh8m",
  "key32": "5VvuEYmBSRHFuSZzciMWJ8SmDBTZB1auiP8ayxGbKUj6QJtrwJpcJVsqxkjvPZ4iXKJnWHp6jyLRHvkjavwj4MU1",
  "key33": "7gDjTNhVDw3QRiCxxc7dgY2PZScRi1NUGWqWMZqzKv1RHQxQfVBAptnpnmsEz1ADe7hPwemiXGCFt7WbNPKtgUX",
  "key34": "M2A2r6S5n3mCTjikar9QEhU77uKKAa64zdfh7L9j4w38jJpQEJnte7D5GKKz3kWeZ3RcBSSDdjRRJKS8ZNq56VJ",
  "key35": "4U89h2bEi6kzKzRLvEvwakkehxP1adu63UmjgfDdaiG3auiyJkkV3Uq5WRTAgi8PMzNjSU34dFdi2avptoCrN2fn",
  "key36": "5DnTJvdJDGPv9mHTiQnDZAnD1A2JEij89NKzYyKJb5YzEinNQpV3gUXTJkny6XJLeHDNbuQZdQREDdaxkX5digCe",
  "key37": "3hhaXFzoFN1AsJdL2aS3qCw1p2sFySWyr2TKNVC8VrPNs3xUUBwGfdEa6UjehxBHjJzA5XJrrSRQeYAhMVndvbYL",
  "key38": "337iYxbJjz3qGG8dReWpXuKeMLTU5wh9WbVhm6PEztpZbg5wkckgCYFfqymiDkXYSSehhEgNHMVusW4MWG9foe1A",
  "key39": "4R13LXFarRCKKBS82wkQrpDTfQ5M2eN6W1AgT7DJy9KJ5qRDsooveJgjf6XrR1PLLitRTerheJdLmgQHwqkVZaNn",
  "key40": "qUWDRmvqZeQnCPDRgHcUSJ6SmB6RV7PQGh8WEp1rbuRta7fifc2CwD81XugGiDsc4PtTS2PnCEyiCUTAUCTtkvx",
  "key41": "EPUQmNkYMRHHyareZE65ZNTabgP1WcuoyqtxPfip3XHqKhUd4zdtRmZAzEuXmDp94ZjBgsyJvPq64v79A4PjFdL",
  "key42": "3ztAUxvLH88UZfBby4rhUq8XYUyT5nyeifQigAmVwVP9pcJpUiRUzqBYL9UEnsQbi494vEYm8rEg7kaZiV1F27fv",
  "key43": "5c4a7sDKt7e7SXHzgp786hP6rwUgNFeLmJGUjSiZRNyjshDrrgpnZGP3d4mCSb6tPHnS1vjZR5ZcbT5Q2TvbtD1y",
  "key44": "DL56tp66qeom4fadSEdBrr9F4y2fPSsYVoFioAtwWRXaLf8VmbQwCbLsfHxEMEGpaEtJzNtgJxvyp5M2NPwEWVs",
  "key45": "A5ikRCR9sM3fubcv3BP5PKgX54iuJnqAQPmk5DUmkKFJzmKr7T7tYUHTPcFewQQcwDhGGVxB3MtsLjck8es1135"
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
