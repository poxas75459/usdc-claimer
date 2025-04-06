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
    "2tfstAp9QCp2VEg7fBcsfoUaRMBft4M2e7JqWp6jr4FTcQbdFmXjedm1rw6WrFNL9hPkUrtBrWAMnhwLvFP9Shcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JMLVq5TSKJ2Ltw2wiFMDv7SZ4VUvEW7Xmf6WF2R1rEe56jYuzw2NrqoKJHn6KdJMxnw3FkMWkneP1rRxoszCUWA",
  "key1": "5cYy5Biqw3WfPPfC4GzJCuyUhog8mYZbLYqVDsKUCgSq54Uw5ZZM8Y5NP1rzNCqDVXhNpebwfiJdaM35F43g8Ezf",
  "key2": "4qYDFHsMTjRNw6NPqkWYeFd7BFVXqcHCMqRqTeH29jmUzHvCbcwcAXBFvp29GNV8uc66oRoyMtAPykZbBceq3ub1",
  "key3": "5uHUH1A8EHiXC2Gux1hr4KnABFPJBxNt5Rt4o99LeFarCSQ1omVTX4zpi9FhNovgNzZMy4vnvnbfPLQugZMvVSqz",
  "key4": "5sipUHGtetv4Nn6D4r6yheyztKWFen8UWvJyX2PYMHuPG2nbCuj3kVKtS4JNTCzahEJupdyiN9RssGyeLKBvLWgY",
  "key5": "5Aqnh9rko8ZXd3cqmRPmoyhbKkdaSZgi8C4odmCdXc7FzP7wXePt4Zff1Uz2cZGNSW7jK2uEUCXdELLxM2KtVW2F",
  "key6": "4bERXHwNMVHef3wEGptxdY3cMCC5ZZK9rMzmtw9YmnRjYD9fNkgtQDDov8PCYpPaKN8qdMDkfs19EjCpetLVo554",
  "key7": "2ma4ZwxLz8mmQTAhK5vbKRbKwsLwBQN8NSi53QvgP6xyZefdLonrK9i6qTVnMuStwd3xgjU74JbXx7xv4nWRBkGr",
  "key8": "3ea2Amak6rZRed24pURLpom1jt1aZnmMaV5gbvh2kL8zz8FiPFEacm39KVY4nEoKgfBNVNz2a7gyVQv9A7sna4qf",
  "key9": "34NG7VY7njCbsmEMQgWhi4yHMPTNwHP1PjnGY5smPmyKharrXhUGjcs6Csci1X7BaWdnN3jJcppDRpitvcaqk2a2",
  "key10": "5xPjkTS2eCFWhMep2UkppHRyteKUpEDP5nuN8gQ5R53CZCHjrPy7RQv9cWUy87boNUGW44wxAELSjwf7x2Se1utR",
  "key11": "Eo3QYEuGAJVjJRYTH9Q5D58Pb8TKt7nF9Zw4dS4JCgd6MvsnofgX4M5GAccybdWDy26Co5b42RRLR83EwX9VaL1",
  "key12": "3n3mauj4ZbZWRs9GP9VpitFTSSNkhAgc6wbWTewaxW5nERktuF7Nrb4bdhMKZbdxgBJperAvh7QunrDyWDomxvxv",
  "key13": "5pd1AHFNt6wvsJWMYBUAQ4c31K5Mhb81vSwSLTGW1CygQf5Cpx3Qznt1UZ269uN3fKpT2epEM8A5a9SwCN4geZMu",
  "key14": "59ZN8aSrvTR7bHLvnSrZsvJkqtBe4GjEnHbyYjvNd8HMukbLwAcLHvfgTjhRMR4tn9Mziq8VpBkGMxQRFqvdy5Pv",
  "key15": "2Y48Kcp3h4zHwEMyDMk3RF31gAMPNg4JhNHr2XJ9DytdinY8F1hBxb3KpF7Vf3ZVS5v32JQqbewdEX5HAymkjSY6",
  "key16": "5WGt7s8JfgkpzKEGdfxCbDNJa7ydLQXTDtr5ATW932X3BEbwHeNJYjNAVskmPT25zbKaK436nu4WjhsQ9D5aCdy5",
  "key17": "2bXiXkq6CjaeEE75CtwZAPq5fcta78FXy2PKgkjmB2GLhacGCyUh5hymYPLJr5vrnxSZMrMmHuR7cmgRHirEArtf",
  "key18": "2kkk9ZodZhaxGZUEv3QwRhN9JTCFeZp7BiDijekntaspJW4sUAkXtuGKXd2ZbK9HJFigAewg6ok526Bj5ZmF3B2b",
  "key19": "4mvaiA6xfFC9YojxtYshChCDBKGphnGNeGQSkNCjAsRzaejeaNN4xypcZnREA5C96dMk8YLs6kReLeNszRsT7Qwh",
  "key20": "NPb5hRrEeEMagX4afcNw93hZHJzyQHy6c7jAuaHHfuUnqtNs9qk7vZzdoKQMmuHXxobuVRXWJxsxLfVTtg2y7gF",
  "key21": "5YVH5dG4RnwaPE6HwvW7caRk1xQMtw1gXbWL39JCskeYadcYCS8f55ZEb8WFVh1RETQcrszXGC41xqaPkFgER2aA",
  "key22": "3MkFp13cERCjzPE8JvYrnxYwzapnKoZwEdgTuLRLX3xKpwquhszACiyKkKCxrG2Yp9VwKa8giNtsTyy6jQZATCnv",
  "key23": "5rP7SWSaK9BAQwqCvGXntccXD6JiiC8RcvCfCRV5GrjMaBB1bFSbjnZjPVMBdXqaT4RH7dPhhBNV5fnzCj8VbSGo",
  "key24": "5cmRE1rtoZMbN1BdFSaUsqXhUuDudG2konKrtvVUD1W6jqZRjobmBRBUqkrYJpSdHkez1AeRxh9tK2LQYULu1Nt5",
  "key25": "cZ2GZPV9ACx7mpuhXwL3eGinPbUmK5m7A17zEuktjNvFfBR2GBgNNUAHL3iABhiDZPhTZ4nKQm8HFDtFpgjf9EC",
  "key26": "5W7eHuWMXMxb8TjraF6vFZioa22rxxMiHeZbBMS4Nz9MWPNQ6iKxkthQkHbcF3QWE6AmVxouw1WDL4KP2y7BT3om",
  "key27": "5MKkKhz7LhTgkiXy8XJQtQNSebZoXaWn3vAeNg5YD3YzDMq7ruD7HddZctxuTk4u6XnKwiHZgE2TdYRdgLqrgJRk",
  "key28": "3jSbFvoJVjsmVrbJskwAsgVpJFAyX1C2JgFZwTymTj26XSoxU4Pxh34tjWDu1C45XcfhhdnEWjXMnRKksNv2uPqG",
  "key29": "5wAMurcmzxHygs83V99aSS3oQcFsBxECixXT8BjNv1piciK1QT3oDuUWNvMDzqBbLQNKzKFyyGYWbbDGKk3ijTAQ",
  "key30": "2Ai4tcWXAsYD4QRrAoQsQTeKKMNc1QPiELQ5vXTMVN9n4xnCgk9XEPmchbysRYR7A8ssKx5zue3J52qYT4u3j9Cd",
  "key31": "32VN6EMq4XeAL2Jd3oDdi15ff6SzV1RprSwBYDQc3Jtjra6foxJsv5x27npAk3MKahsbnGTJ58jv61ofJf4Aagko",
  "key32": "54aKpY7iVdfzStWGhcXEJHqFdMUZtJaafoiezbift1gMrJrvU913zhecS7kubALyamqssqDi5rFboyKF86dgAujY",
  "key33": "2PbvqKjqWmLZcYbT6UrooR8HEceCHcsuYKL7zf65JMFuZQUR6V98JNbVEpZutWoPTBMB1M2uq4Smj9WFztjjbY9g",
  "key34": "5VhWiaZd3TozuT2CiYTV2M9CYMawbhZjgxoNfQ3QTDmFQXjQsWuSgbrj1WSAA6XUjZDETqHbL8vveEXd5j5FCTkb",
  "key35": "3WNrdPvjdKkRqeYY6hJ8PZ8B2S6CmK5aaKRJ6N4quiFkmBA9o2pc7qnSLjT9VDXrQRJpHmWR7vEfRKxJWYdicToW",
  "key36": "5ggXCNzi21fcA1a9XVNyJtnVxS1baqiCEUvmwfxwuvmCDcZr5n3ajbVyJFndpRmYMJemLTpsxMB78yfCGTXJ4fxV",
  "key37": "4osxCkcYwAj3odwCu6FAGFPiagHKMdcfTzH2WJpebkPA8vQbnUYvr11zZ98FE3EWKGDsefQGZJxCeFTNBjmNh9wV",
  "key38": "3KYABY32hqT2jeKiwqeQTUpHcZ6BTPK66E2FBSn8n3abSsyhP3Nj77AtpAeaNemdHLhhLV271FwZNQCpg8YRQ3tL",
  "key39": "47ugrzKejm2cGQLYRLxvwfggtpwhQRj8jdqu6exvrHmLgYNamSLSndqtewD4tfD8hUrxHcWX4q4ydC6mdzkToTeY",
  "key40": "3iBwpz51BruRQcdZmjXUWbSwVgYGFvPLz9xC6sjcCDX9pAZosV5krutweCxpGXHuUTTpCs5xrv82KohkycogNzZx",
  "key41": "2bUFcCkufBWiQXsmvh7RAHvHp9DwRtVfwYq6iKXRQgLiqnNtZQNcQU2qA73tqXGyFw1iRVbY8B1Tk2JYa2erpNEc"
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
