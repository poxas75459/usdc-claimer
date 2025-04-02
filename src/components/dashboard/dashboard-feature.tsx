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
    "4NTcFkVrR2YGEcYUJtmBcEDgcvqKWJbjySTtbaAdsfTVeAiPtSehVp6FoR5DsFU3jDqgVAxqgdWQbgc3ysSL36Ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FBbkLteCc5BN7uvJtNcT8KaiD79FyJ3UK6A1HTFFaQJz4To1ioF61WdwUG6pdd61Zi1q14rELxMGHLynjM2Y31R",
  "key1": "4wGpKKxB9ywrFCXG4EtbSP5biW7QPDLV7AHWtFDteeY1xpsrRSS29HwJhkg6nWzqEPfAHhosiKTJYWvW5FHZ4zEC",
  "key2": "51dri1xvpZynHbEXjaNAM1pCZg9DhBHBjgGW8qQLb7rLTvysg6FN8XCWSRCXon9xYQXQknWLrEvd1nGFsTdsz8ke",
  "key3": "4gjV9YnQ7CzCHoxweegGxSV3NBXxLtdzUCjAkDF37mkr3nq7Mcd9umFA7qbZcpNbXJ9AUNw3ENdEL29rDAdvp25Y",
  "key4": "5BNkAwdXaK8j6BxT7rkr5Z1aMopDaPKtYfCYLZVcZumrxyVoMHo33JykJFKoBendK2J3DLjwzorJtstAc8Etpesu",
  "key5": "pnKtkmBkSXAs9gw1c7rq9WVjxLNe7YQMmCNTczi9T9LxLgLneadsbuKVnK1HMPPopSJu9sQonoSwRKMCsz8AELT",
  "key6": "3sfdpg36A74JANXVWoDoyNhhbVQ3tyaffCy4bgXY21vFQcp1uuV4V7zfcYLTV2DSuMAF8NpXNAkDSTF2DPGTQzE7",
  "key7": "516n3gQ9Gd5zs2vgzBHrHqrtwhWXS6CG7icARTVANaYbwfcG9tnnyW7rvQj7vGJDJhb8FRJ59jP7ZEKc8md8uFdD",
  "key8": "3wuZ2AcQdBhFoVVBtHuDqYMEj4PoRwejqHM5XLy26FMT11AobhYTuYfPuJFA3VFUPMQNmnYuoijrFLLTXPtpaZup",
  "key9": "3TppowDqb8z7jKT57MzjPoz5qPLXgZ2E6Q2GciZKcx5iRg28xgKpHsy9jrZfxZupU4Sy5dauafwNzWJQ28ARJSiJ",
  "key10": "4U3S3dk5j3UFheC1GUbKczVCVHjqbZNZ5HjW1Qq3hF5biKzbVofKU4FfqNzAaMCpywKkdKb2mTdZWk7tfwK6jGcD",
  "key11": "2oDb2E8HdsTqbVECMB8yfdY13uHgDjsXjKXVX7e8AvzNQJmvYX9z4VWMyzrfmjKkYp46gzwasyitVEnuQ8zT8SyT",
  "key12": "5ogZ2tgPawwAMuNAu5Vi43kp6DaiqUdvy4rUnoigvJ5fEYZdxJSvALSDm35zr1icCPqviQvMWTcbZKo8sQ2jXnKv",
  "key13": "xpu5mKtcrp83v5xcMw32HUz3WrFzc5TGsEFtruXZkyrR1QUaUFt9bofoAmTUvjg82Y24FpF3qNFXUkW687NQvxE",
  "key14": "zfPg5XBcXZsphj1duzQeXXLcyfKVmpuMw4bbKzP6CN6tKTpZj3bMf7oRHPtcEhCqdysQ6wo4HyVGuuFCrV9KwUB",
  "key15": "4GSFuBTq5yCCe73S8i5qopMy3ywXCBVmPGoZbjYVhu1KCgbcYZnAfXibopHmptjzebeb1dynbXk9RKMYxEECg9sP",
  "key16": "5AV1pH5RpP6P38j5Dy23g3R3hiJsqXHSGUYk9QFbE3qnNC7YavSLpw4U1zFJJ5HmKotvFaSt8onYxMGcVDPPCJKe",
  "key17": "5mDkwshHn8PT6ePNghh6YNc1VGsY1zrV3w1wq47f37bgrDtN9RSCGWeMa6eTywwYvi8sPcsi7ksXWGywAgtD6kdf",
  "key18": "3Ng91pKjcZCMpYBNKQNnDbeFWrCgKQbXvPhNzJirVioa5Gqx7E2tDZSWXCMhcjePad21Z9PPTbF1V9zenxCpwbWw",
  "key19": "3yebmmdeMFmyZCTor4JWgqUFZFp8mee6HY2Foykj95J9LDYa9wwQvFynYjbuTyhMBSB3r5kbTdjKQ1WEUZD4fACk",
  "key20": "4SFS4FykjjrCYTZfPcezTAbNJcA37utS3Q8TaKGr1eLBJh3Kiv83bqr991J5nTtB8XmhUHjxZnADDKm1uAuE5fX1",
  "key21": "5PV4MixAhHhQYZ2CaLyZdbXWoVnDm5fdTrk89pA83dTfRPemWoxWs8WBQHjZKc1cHpihSE77VBrHGMYf55vicy49",
  "key22": "4cP3T5aF853P1nL1ZmWzfrLX9UF3G6iC1FpC7RS4xD6V7nszrTWXdGip9jUCJB1dMpuCe837EbgvMainNXzY4DaQ",
  "key23": "2xXtk5ekbcNZyKSe48KkKcf3PraiWEhAXcXAQaCE43VzYTi5ZrYAHCL5RDgnQjdKiyMjwcbB3zvo5UvapKXgtkAL",
  "key24": "28bK4aqkv24pN1qG9WNhx4WZKnhZkUBh5s5ZEUHwQSZZA3gcQUCCnz3RsdrX6DZH5Buv6JJn171rdMFQt45u17Pj",
  "key25": "293jMbuyw3TuD3LMye53SJPZ1TqP9xCTfvVKyn1UWCZ9pXLvea1CjpsoDPoF92rwLa5s2px3ziMXANHfiHWUAj8Z",
  "key26": "3VtKeFAAmcUZ5oCKKZHex31bKoWrqzc9wYf1n5i5EGT5CXzbokafsof8ZrFPxhsvo8TByCcMgEyMvJBnFHdKTDLy",
  "key27": "3Kc7EHSx6DX43WU3ksGPj5Hm5h4F8RPyoGDhqv68vBzRvj2CoA7CLNXD6ftiQ3xWvyvz8AKEWdcSfagrGPvjzMrJ",
  "key28": "4jp9RA9sSUVg3LMrzNFdbrWkmzuBzQwmtenr6uJsBwhhui9Gt7xQdUePVHCTNE9uwtR5fVLeRr1NGZ5qfHFxBhir",
  "key29": "4Ku46BtpqHSLyFNNPa9SGmA25RENSk1wt23pzxZ5KKdBU1iL1dUE8C2bFVeHovmEXQE6pssDS7oFybP1HzpTvuWU",
  "key30": "5UwBXtpqrRC2BRm7W6REaY8ZZio9HYa37dTkdMFn4ympYsDfeRKAWek3vNfUkad8QYQuWKLeBvzZZpdpgkxL3MHN",
  "key31": "5DKK8tBeufSiBBv3GbNAdnoCwuCoNPo3yCkgzDJAVuSdUtwtfJMV8A4bLJKXBYCk6YBJFnCnoDyToGQJ6yYNrHEa",
  "key32": "3g7YhpUUUz89oNVTaGonABT35QF7Hw6p4JkhBq6xqQ4TkRmES28Yr2fHQghXm4ySbKSxJEEBSwsogBQu6L5qQCF6",
  "key33": "37qZ8cgawyRyHnncwrDSB8kvcEyQ4G1j7uDQuunEEovqqAe23gUTpTTZD7kDfDu1AcXXQisBq2kwUfaY4uYxJ9dV",
  "key34": "22vcEtRAhjMXaBAnMwzMxygBvBn6smiav8Ceu7KrLrtxdsLyy31etx1At5aexbpXZf8YtQTteoBiUVR3qvYsJ73W",
  "key35": "59qeUka2LYWk7DZc5aRh1QS5dxsiEHc4Nsip7YQtFdKJ7vR8q7jM5dryMeDv7tNp9xA6Sng7sBj92bV3eZwky1Zj"
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
