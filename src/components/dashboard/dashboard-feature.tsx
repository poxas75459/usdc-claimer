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
    "3dpaFTobCiE8qyiNbG1s8BLuyco4rYCnBbWqfNverEuG3kQm6WUMoqhXhLfWMYeHHDWc2hyu3ZZMC4TcLnhA1roq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rhuuzJ2RtgG3MyefZDkcRCZzeALPPNsWYgtbqPLhUPqXTJo3UBi695NVAiKAg6k2Ga2xTvgTZrUcgxsVQu22SmQ",
  "key1": "GHQdv1ZMBhc8ts2mvss2GX6wX7E7rbbmRsXHs6HhitSbQY1J4yFsktYVniD8kWF9x2xAN5vZfVAijA7hobZNnLr",
  "key2": "5z93fGb9Y6VkJFNjYN8zVCqFrWUpcQUJS583YrzvNLJntHDvS3Ag5wrpTLm1Cp7HEvoLUiZfWWamyQmRdSKkQJdM",
  "key3": "42V4TUzmhqHHxQ46R1hmvVoAE791nJkVMwkZERXVx6mEFQMEQg4mf8ep2taANZtMxiSY9s9rBNeg8LASuMUxvYK2",
  "key4": "2wEZQHZEQCd41eLSUuVhJKASbGSbVres2ypP9ooAnbRhaKGLQvZuBAyoGSxvh37Qk8exURw6BRmHs7Bm9EKBipca",
  "key5": "5Kak4L1exQW9gGmgWpHZzV5YkmWNbrRjmSdCrsatFhCBmnYzkKbrQNooMhkA887CkFGNaAm4cfPgvGnuMnB8F7XS",
  "key6": "5ZkmfTn8R6H4M1DXUiivgFkACJUbC3EujPf78N7fJSdPr41x3WjrpfHkScrAZrKZM8Pt2NKAnPiSfB7R6sfuArKn",
  "key7": "5kPeVr9MUJz9aYdM7GGrVuNxmjodwc5b9kkBRVc4jaSzmbWkcwq4xeUZTaDauS77yVnF1Cj4EEVhVpMztg6t5uLV",
  "key8": "3mVeSwdvPvKCVx2jG1hnAJYELtbUGBXXhAE719ET8sUy1bU5YtUHrsaPGUvPaBvmHcAXimbeXhaP14Jmvh9oF5iw",
  "key9": "54SkPxjTvDtw2Sk2W22A9XwrXHJxU8BUV5LoHaqgt5kzpzfq1fHq6ACX6C58SS6tbsWWhbQUFJpw47UpmEJUNRWr",
  "key10": "47SSHmH3LJa5yDcQZ4wqkEBQtrgiyEJbMf5WCLKtuZEE8Dehp7dj4sZ4iqSQZs5K1f2p1ToekhUzvBZknaX5URbR",
  "key11": "ga3M3R7Um4qefiz5HDPPNtY282XkRhxXYkeMgrS792CrHpjrWyAAP33hEGrQ36goGKn3PUm49qUiFDCWPAZvxxg",
  "key12": "2boSeWAfbUU25HNHUAsuYfPVGStueS8ieASbPUq3yK72HrwAtXqFzAC8NhRy54kuZsZkEZqKUBMPH6QhWGmppDHR",
  "key13": "4Ry4rB1oWYLDsHii8bGDfKkPyTUjrmvx5g25uzpyYG8ectjwjSkKoR9JLbiBVyfjj7DEkFEuDZt3yV6X2Ua7fsvj",
  "key14": "3oHuVMQn6LtCkNxfuxVUMjrePNvhNQT8amPSjBitk68dtiRiAsDw2uPMbr1agV8MHAR9pz2995528AqtvMcAveyH",
  "key15": "rL3gG2kmvYjHjq6PNRjSgdXDCpwQ77ydr9m7wiEsoTqqtm1NY5jWsyEHDjpriaJzpbtv73Y8BNNMgZBZiiYdwFS",
  "key16": "42fVJ3Hni9s9XcsjghzfJxfRqL6G3yzBFhpXuMZN6dTX1C3MUybVx8tAUJouLrgnBsvdxA6SJvQ9bbeM7y4tiGPm",
  "key17": "4NhrwPSPBbWejWgJCGggroxayDZvj2JfuLWhiFsspBKVSamkHEC1C2FZyFsh4nygfZ2PxPzJ7pTNRL89fHwBbPfN",
  "key18": "uCHvC33H9f2NuZgk2dWew5CCg3L1Xzokqwkn36Nj3xTVYLAHVcSUiPh2tgsuFa7UtE7H5Sw3bUg2dpicub7FcWR",
  "key19": "2HkMCzQSmT4uTzvYKqsEzDomxRS244oj9MNmSrhKj4D7BcTry3yWhc5gbY7TLyun8vpd6KY5fLivKY2uHV59MEnJ",
  "key20": "4hEH2goeCfCH6R7cJVQ13e1tdNxuMTHFkabPQU2y9qA18tUd5dcudVtfPu6wYMi3S61iw6J5txWuV9jFduwSjKJN",
  "key21": "5fCSevqhLn6oLqyssjLGV87Geu6QydVuGidbks8w6CHrLUyMXsgUairudnj7qGnXLMubCKfvomBgdMca5FDWDhGQ",
  "key22": "4VGcCrBMJcjAZin4wdaDZrdEtBSTd3HosNLDxotrkE1r2rgsdvcu1yHEAwugtmg3fXbk4s8ksK4YaMgvVdScWmTC",
  "key23": "3C8nj2EkK4ntimhH9hwYFPt3QX63MSdeJPv4mFHiKCH3CbRFiyHKDq8m1n2S3HRAgfDQEnCDxD4BgQdhX5zCTP6j",
  "key24": "3sNPCmCY2mnDQkZv9cUJBLZwHdxBF5bUtSn4WdvdupqDSwpuqoLNuBFbaGz2bbmisx1YAAdU65nSWcTXWgHxCSBu",
  "key25": "4ktGwaer22n9kFn8ygW1sKQqyCHpRRa7qXhgDryKAzkZoKRby6Jo37ZbhhMJ4X8XmVRpWxR7C7ADxDdWC3HfTHoJ",
  "key26": "5s8M6F2YqqKCiiKvDGJJB5vqdcDEfQw59aos28LyFxmZnHED9bTKMcwGWNBqDC8yEVaBLVRhtGxtkL3r1GrNXMYN",
  "key27": "5DdHSwogX9CAAqin4hhN5NoXcGF9cuVhgzAfnjwxP6wYGqXjEUhQjBfPP4C4687xZUyLPjj6XTC1XkPvqUtsMXS3",
  "key28": "SW4N6tEnaXGa9HbZyVCKWL5LcrQcpnaQV2EdCUNFSwQ13kxUrhAt74PJSk9yMLWM6A2Qqqax4LxiQ2EoS9JpqmZ",
  "key29": "4AzgYN7uLe4eTf2aFnRofZ9MVPg84sxjNgAM1gzhuMdvD4b5DVcH7sBPTgCYAK3Tt49F7AV8UHYgE3BRsULeqNZ4",
  "key30": "33bsUNBr16GxJvZXKAjiXvpXxo7aW7jn8rJbKjCa8xRtVHUpSCHuA3jGC8nXMXGahbdFmKjZPNhZFrgJ2FgSX9Xy",
  "key31": "34eKrBG1DMLeQCaQyY2nGoNCb6QC1vUsmCG6fzUUKPEMguZk4629vyi2DkBrR6ieJFmJ1eQjUL2kYjaDKSbhd5Ji",
  "key32": "3mqj9dSNvH2RQ6PhH4WoTD7mQi6BfesXMDKNtJASi5RqsHvmXfYZX32UEKabGNiVAuGfXFWPB3nXLhAGQW1XiZ6Z",
  "key33": "2yFV6XsAFbYeWZyjuspZ1KSSNpK4WfwsM9wsRHUG6QhETScvr8poUq9McQ21mPFHmARUXBmEgjcFTcsQCMzz7Zbf",
  "key34": "3FNTTbA5nJRGjSEeY2djEpBS8RhA534r2XgWSTFLgUZToU4R42Bo6JcWJLeRHJLPKRQvJSnHaskjamvAXJ5xQJut",
  "key35": "4YFBLrisftDJR2h7WexuhMFruuVPTZBMQ7vkiSdCQ6ekyRV1BoJQZcGJyHRuekUDZDKEyWjVzD3ptzGh6rN4Ymq5",
  "key36": "3vT1eJVCsGQP9endQQWTFzU6B5PNF2FxmZD99JNWjsheyGfmy1mdEUgK5d6bxZVb5fdiwKyuQTminZ7f6GXUQ6oo",
  "key37": "5jfteqX5tKDMBk9sFxxHL6dYHo1vyqkQbN1QuGgVRFZFitsLaHwFrdLUYxRUtPpKkT11YZsEZUc5WPZRko7ywZPK",
  "key38": "5X3ToNwaM4YHDapPr8KfxRyQofX9RFmd3MsXyCAzkn6dMvzXc862Yk22E8nKgu1tqhTm9Ymd6ceV2q3GKQhjVGnX",
  "key39": "4nuzS47g4C2zVLzt49tMiQsAKvE4YeiKj5Mn63phongdbyk9DJqCgf6nYAKjH8sKK2f37H9KNQJfXCnBQMp6B6CT",
  "key40": "Kh8WPNAAyMJ2Mm4PpitLnqU2TdxgPusVutCkVsTGGuQMZ5uYS66P9RZ8cdkr2KmBtFYMVnomBuREmJKT8tncL4p"
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
