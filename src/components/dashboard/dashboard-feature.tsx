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
    "36tdYbkvToYzoYWJmUR27JVUYpQJw43dh12YTQeapcMft6UFFdBE66RrZ6ZWhgu9PxSKGDMQ2DZaQaFQ1odEQuuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mcVGXNYgfqZx6Q83LGgpiSpYZRL6BhttoEe6mbVpzRaRBJsefnoWMFbghYi1xCgoJqio9UzrAEVRQ7BXmmZyMaT",
  "key1": "5i8ANkJfPK3hcWpKEUNBFL2UYMLVCnVYyJsRggvJpmVUMpEqQs58ZjyTjcgEaUX2RdonnsQeHXoKZF3wR1deTrHR",
  "key2": "5PbPeThahtcASfTwDYHiH98Qi6tTED1YW147CVGxb4NCd1TaToGvGZzfZL7VEgCXg5SQx7Ln2X77ddLP71e1RUnK",
  "key3": "N76944JZsYKSGPn3SfHjovtcHsn6XBDSWr5dV7TvzqZoj7RMhHAQzLayFti2nELwLFs2YxTQ6aZ12pnGBqmok2z",
  "key4": "3zDjpjVp5QjQRu43om8TMWRo1XzXnf3fohUxFjYQaySj3UpvBYE32uyWgMvxyz8F7JcTB8jJ2vLjjs9QbGeEdBhr",
  "key5": "2XW6dLpzwim8hXX8Xza9t7uaggrDR3brTiFCSUhFjGASpdoH1hfx41jsYBTtpA6EnF9qFce2qnRt28pGK9hgVHmM",
  "key6": "3WBkdfzBH327xnZtsqchbSBvYBi8TyRQvp3PQdocrYGehH44hVP4FQV1oG1gwUwZ3bdtXmXGGJ3v4U9xqvw8ZFYk",
  "key7": "LdZ9bkV2LdAcxoCQbpAPDZtnDPwufjhcuY85xSTGasS6AojtcJfzWmhNf8nGGBr3RC9JP3ycdXMke2vyyvPK41x",
  "key8": "4KrqGvjT2cuC9DneAeUNMNPaPoVHQGbGzPGyQeVVQJ4poMu6eKLrjpiYX7nmUT4vLeghFWzukXnHnVbkgxHYwLdx",
  "key9": "35QtZj695VdSohjtGjpBsRoymjmj5UEqSPGumoFxWr9ttikF1GPBrrnE8N69AFN12E2dwLEKHnQYm3dq8FPry6j4",
  "key10": "2dSghdxTftWdQ1agueEPjuxsZ5vCrM6TZ6ryerNmjHMc8HgxVmFHMJJNVfABuRDDxERP4PiWvPjt2Nhqch9PUK1N",
  "key11": "Vh1UAmXUT2zAtUPX8NyGrXosKkw2ZeNtosz8Yq96xqWYA32U8kxCW77RfG8vq6nbAt8iouCSe2GB6NQQJH3Peoj",
  "key12": "uZp1x8baFbkX9wHQWHBTtBEntD3nyVS7NuoXhATaXDJ9NufLVmeihdSCceozUDXzM6W5vpDYUkBfTRp6GxiiTyQ",
  "key13": "5cjsNzMwkPPb31YwYePnskC3XsHq83f323ASxt3iyQXqwKtyegF4LJidcNripYtUDehM5od7b6opYBTWHb5qKJMp",
  "key14": "zMzY51GmkkDL1XF1bZHRoJ6y1rM7patX1nfjsGMqURuWjc5TXRhTYKLzs3smxVLDYgGzsw3ELZ9GiwGdfEp4yDR",
  "key15": "rGq63RxuYdWjBSMZM9dwGc1GHz3fgWnuLWqYo2xqcJttS8tKhXjnnxtLwr8M8NSptXDouJLNdao4t3ZiGt6vLGb",
  "key16": "3vXYpzBSYM8jGtXt36Eu3kkU8WUVCgFfV6XcBzv9JgJeWNApa5Q5DJviHkbhmPpWFREQK2AVmfzqiSiizv717xrF",
  "key17": "458KdXN5vwkyYWvXQxkV3q7DD5MevPyUDZKVYzGxJzSwHgnt4wJUVTmxpcNv9uT8mTdDvpY8vbXsbKoBAYvQ5T7D",
  "key18": "2327qicPutdWUuWU8d9ooKuEmUa3UJES1nNbSZP1hM8aT6uZJaWYtrvrcuywdUDiBZaHeMuDj8YFwAEevKmisyMv",
  "key19": "2LXQ1WJf4WRAYxc6D5SvRVako3XA12M7xjRvcSokfAxgSf7NxfZR7pEdRFCnbg9mZ8a1rnMLDm2LrtZX8xoDBXyP",
  "key20": "4Z3kjtschu5D45WRd9GVxAHfuujeW83biizUNDMXpDHZhF9znBLdHcMfTCaXPvBF9w1d5cBQKLQJYvPhQ2L5WQFv",
  "key21": "5PQB9jSFcKUthNVsfRMucgXssmCGzBZW18dWCtZ91Sck2AfuiTpCXcrSzKiKq2tx7L5pQdNRJt26fjafKUM27LNv",
  "key22": "2tX1BxD4vx6qJsMWat94HP2UijvbjQ9eFwNRyfYdSVMemMizF5qDPgz3TZCPdiZs8mSMZCfQPsqwj6CQQgqpwSme",
  "key23": "stzWQnUebwby7LSDqMEbw1kjBmmN2ZFZXxDL9WVyp1j2n7jasYuFy2n3Untrc8BhBEAG8aXzVnRXjUwffc9wtVE",
  "key24": "3ujq2x9fWMUQFEuqpRybHNUTPXxSdketneMYKgn1Bj3xXgxHqsP4YsepnDbm3mP9eLCM1jsiPr5wJfbBipBcagsz",
  "key25": "2a6ZeZGNWPqYTxZfEQrWiRDuaRB483KAsTiMBYZxt6ifg44tqTepKSqGi5ZwSPQEk9vfHJNLxgRvst6BRyix2sUQ",
  "key26": "2a7N33aNq9ZVNu61VrcJdyoHXYJ7tEovVo1kpYWTgmpKTW4Fq2Ktsvy7QdGgm4kqGsdbLHrV2Ns7SwzUjNzCK5wE",
  "key27": "4ruXFRBY7wGg6Zs1rPtY9ouxhpUt8KmBr58LtVE5eCWUTBf2v8tN38wm6N6taV7Xj981MuXtw2adsJozCPw5uMFd",
  "key28": "5yw8KXbiwQR6An9WUkvAoBMjXZ89gBvDTSsTkycTJSMdz82aTKJuLzUzMgwU23b9vmXAAnuQ3d8BMZuH89qxyBcC",
  "key29": "5HmyxHbatkDbtXMgtQsqvyK3yA2C7HCEwA6wh7vc34Bzj3oDaDVpBoP6ksGNMyQj7WQJL8uLsyBn3qxAiFeuVfjB",
  "key30": "2bEQyVHLPx7naZVmXLgsNDvcVwgwtTGTyesFyXe54Lq5PJBkRqVpE36Z5XDKqQJqWuZnvUaP5hsGPnZQAzxEtDHu",
  "key31": "2NXCWSsLoigszi78XzYsDnUNncuqCMMLcPqDaZCbA8b6Do2YkJPEjP4Eit8jmFKQvaN57XPr8WxNi3RS3vA1iB6d",
  "key32": "m8JfoYtmFCnegGkoB86DTumrUjRdsTMaKmrS3oAdBmdUWHLdJbK6C8ZT9v4Padv4oPfhMjXUSbohFB234Ee61PS",
  "key33": "2JDcVRiuZxDztVAUFCUtP4NZxoUXz6wcNA482ADMSskdiuthCRsmmfYzgBhtQqHmiQJMTbBq3SxMjziY7JLKcKKe",
  "key34": "52ERgaUVMNtNwsw19XCEUfBx4fDuq5muvk7ZG9VXj1Wkx3Z41RsQQXBw44YCkcHP2b3wNJU57Nf9NuJHeUt15gnH"
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
