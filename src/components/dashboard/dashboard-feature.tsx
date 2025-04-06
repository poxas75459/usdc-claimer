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
    "4Xg3A8NQvtAyqZAmdxnqMQ4Prq59zj8EJCfRphjnDWFJNNJinN9THwUVwkLL8hh1TLzGVWJdYasVmgdbWQKEHVzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r3QN9eJ3D69WTQQzPEmKASMeVBa3nr4QzNRShRCkTzUpe9qgcEERPR46sRMUB8SjVkT15bJm6Dsped3q1B4CB77",
  "key1": "5ndfZ7zeDWDYMNudFT6bzg5kqBUzvosyrz2aqEbuimNEWJM2VXFsxx5uTuWPbAQ5Ybqfw8rvopyGPExVsDZxvKq2",
  "key2": "3vpamEp6RmMwRFMBkujFpvcqVPwyHBfSjVzYZtNpH2ywP1UebSdvPRBQJ5praoztEFMm752eNGgCzE5cBsCQUBGM",
  "key3": "gjPxwM55V8iPzEAcjTctdDYmnoWPWkbet2ibQ6feHtbpPiRU4X1s3H2wWxzRaFi5vcaRGdYVzxoLQu9YHj7nCFN",
  "key4": "x2U7t9dNTHmYnJFx7TMjHNPK7X6pFkP4XSNX8Y8NB722Bt2vnHnnbv3ssRsyWzXX5wsq3eBARuw6wece6CYaprh",
  "key5": "RcqtCQb6AN5QF6Hsqxvd3q9LYmNPay6zGCnNu3c9kxhotJfqqtMwPewHyMf47LxY7qJhCroBaKLFfKAhGJhpiJs",
  "key6": "64TsRKMthoBM8EnLA7CsMh6gnjY6TubC4K1t17pixcW7sKq9NPU6RfMh18jRRtEYu315E8ZrVkX66gihuaK5DF2s",
  "key7": "4g7cN8xfwGuK4etMNujbLay4JnEW7eVYrkaYUWnsXgRe2NfqGG4EbjDtzyHiyoRDnT8iuXTbg7FzVSL3idvrCUxb",
  "key8": "krU7c9WB95ZkLiEDxKUJftfwRSZgUtLGSm8jxr3mmp5CqgzpKhzQYrnpfTFUEDdBUQHLav8FkeD9inL9KADLC5i",
  "key9": "3ZaqfZeGNyFMAnQBMgRzopfmqjK5WSQgY6shum2UVhcjSk5yzJpM983zY6akCqxHjphvMokk2Qm2t16mizcQdT5V",
  "key10": "57jpsBgmD2PraapNVqRjMPJRHP7qS2ZnJpkur2Qv8C4XVwqYXb2tJ5kE23K93TEoT6pKQyWQMXaQts31GcV5a7uu",
  "key11": "3tuDy8gDHsQaztbah5apCmqvX5n21CqDkYaKGWeXjdgvuBd3qG6DbMWpmj2TBiRLQ8MqLkpMv65FQkFdALVkGWqA",
  "key12": "4FXq35VZuXEG4n1shcg9VFpeDarcE2mJ6YNBKu9PpYBuocKEsY8815P6CpSJ7st5su56QCFL3FsrDCKRBRr9zp2w",
  "key13": "4NZ7zVMFcuWSa3J9ouiyo8LfMoePikaeHbPeS6quYasfuoeydn6mgYP2jkCGaLWjyPjWgihaNbUWjWf4yiMvjM9Y",
  "key14": "49MwoZSxigdQuSSnbeYZRd6ykHEnL5PQFiZAJ6arWLthLHTR95fjACipJjdidxkBe39zpq8agPDcpfne2DHfhDhb",
  "key15": "2GcaF7dEagLnpeqdEnNTjmU4U7vYsK6M93AHNQvoRtBXEWQrnyCnZQb6zSbHxGBqj6fuRevTiLytZ1yG1nNGyAB1",
  "key16": "3MtTC61SzCnLKTQ2e1GAuz6mhyStkevnSo1t7T3hZR6E2tM9F68vBR9SFmCCuRZ1sTa6Xs4jpd2Lxfv83y1YAj96",
  "key17": "54cUbVNxJk3eYyFtRtcp4m9boL65ggeDCjdUveJYNr3nTawsRFQj29mVvqtqcFzTtBbumY9N67LaqdBK32Vh9HDs",
  "key18": "5NQ3sPqoHmCApQRpQTGfuTFSAfndpTwidqcpWLkgoZT5Y8KhYc5VjzJgvobR7YwRe88mfiLWZm9Fg2CAurvf8cF8",
  "key19": "34Zk7YFhEu1copwr5rN9wDvV9YZEBqbpgHzxyM2Hp4W8PYVcexZtqrGmCcuJ5y1smFPU5JbpwDmxqxbX1hpijq8V",
  "key20": "3FPTjgv5oykVMmBWSpSAgAou6JxpesCGuVctNZzb6mJbujFuPgAvRyY2cJgssYXQawE6XXuYvNT4c92QvLyGMFar",
  "key21": "5ptS2ybk9reByuf3FmXQCf6SMigv23USpQB1ZQPNLEBMv1PgPVdB5wAmfGBmtp9unMB8zVieFtT2uXMbpQT92yNC",
  "key22": "2LBFrA6AHN4zqrmJMdPXxvhJVxk46ABCWCjMGSmgoj48j5ktAnRxHMZdKrxjJ1EbPCtjmwEAEnW8aAo8S4kHauQY",
  "key23": "4eNktmBu9C4KVhmfpgsBBLu874miBCBwm15XHFP2Uz6LC5vHJkmxjUm2L4TJbxKTTFuYygaBryrTZbLss9itgqsD",
  "key24": "5TPhmytwXP8a69yTX2Qw1mHFnV6knyTbbtvxbsWpovWz8H3HNTu4sFo9LC688eDd59BTbksAuoqiPjAg9XTtnnss",
  "key25": "24XD7KXf9iV4LjmGHSH6CaNpx1xzQhXA6fbmSz5BjCdd2Xuk4vFDccEaraG8YTXezkCACRiYiKnY4sMCiNzQp7t6",
  "key26": "Q4wB9qw1UE9rseW3DwGkWpY8bpNyHuiwHYEqpWt9RShwykbCFRCRx8tYoXTyHtVxCoiNNXooVscFwcP2k1BE7cg",
  "key27": "Bqzv14wRvutpwAt5p2ysxZt1GXtLcnsF8k8YmpdvEn47cGYhoMgSc9yPwip7P2o1t8uEmZusTWcHZQEmb4GvUYQ",
  "key28": "qQhdTqqYbrWMua49X1owDsAn7qrXacp6FuqwFS5UGhnKQ3V42nVAQA12BjtK3pzN1nfVRLVbYX3g7Y4wFmiuHzd",
  "key29": "vjCu25mXwBNaE4QV2zHn56Eay6itQQoLoKMrRbcpBdeb284wb8QKWLMyRHE57G6QKYPsxdEC58vAq5kafdChwq5",
  "key30": "2bPFy6Mq5CT1opYTvWdSxxct2Kw96mEXB4g5czEqRH2Pu5EGLQ6ijxfW4GYAmvBSiacqjE314zrJruPCzAUjEP2n",
  "key31": "nMd8BfXVoCrxbYPvBXfW4cyYoHD1SVqv838Txw6UGvjTWzEQFx8aSi2KpSqzc1nEDSrqLKECRMn995HfvcbSCCL",
  "key32": "48N5rz5ky1yXCwbccT53QtbiDTLnqADyanEisneXbVDXv2aRzfMxiY2oTP3CnVMan3PR2CDYBs1oaWGUduZv6HCQ",
  "key33": "caHKb8LGLQiGCxhqxe2EVvQJ4aN846PBoNv5zBxdAd1Z63ZyBCa8879sMF2XLzjt4ZXJSgEgHn5x2EbzJ23HHVg",
  "key34": "4BAg6CrYWKtZEwNedj4c7JAyHQNR8ztqD1RXGnnzfZwzraGu9bTtkgFuP6sHbE6PP6kVqUSCECXH65QnzfCZJ8As",
  "key35": "5dLaZCVu9eec1LfxUyaS9MJrqi6XZYzbZbJRz5ipNwE8vbf8p2sSgQZCvYYmNfgVAscwuRAyT3W1zfFxk35iaAhT",
  "key36": "YhyaKAP8GVsPdKeNaxTKbYKhJzYrhPfBCA1hfiqBm3JfC1c3iK5RHW6nV5hTF9ajGURxTzbMMFDskf8HGKUdf74",
  "key37": "3NJcZqNQCEvwU2jEPEECHJzjYX5zoWgPffjr8c8eSPKSnLE55YfTc9QufhY3Ks5mRWjHtmvZvrFmfUXzp7HQ7nEX",
  "key38": "2joPeb7kufSApxCTqYyTWQVTGEFTkfRR7VD1TRc1aGnY1UGGe5ZehYm3TrqGb7UZsb2qtmz5Y3e1qTfonkNdRTax",
  "key39": "schdGsUZoDHj4BMfDKkXgNpH7xvcKB69YBC7fddKPkXPNQoyKGnAHpsEDbdTG9pzcg94oLokih5RLkVAWZWxE2X",
  "key40": "5p1gjTjvoe3mbjPocXbnhBziGw3rZ8xKgTgaGtpgbpohsAvReZowxT8ULMR4zGsdGdJUpb8AkVBfDzTH3RoYXuow",
  "key41": "3Y6Nb8V1qWwmQqKYLbY9MFCxa58RCL6ncNq2wAMk23AcwdFA8GSvbekNauLQ69gPPXKwkwMmoyK1AFKgNBgb6txg",
  "key42": "3f57af3kdS84m6j1jRarKD7vnFE91kSGJyG49D7Fm4PqP2NWd86zQ6EW6gf9vZZQPymyK8Ws1p1u8mb6LzUArwTq",
  "key43": "3iQpFWAQHXv5HGgrpnNqAmqZ2jo19DJ8XRhXXZzXmMvZgUBBbz6FShR14HsMMdtmvM8JNzkasPHHjLaxUNeHzmhs",
  "key44": "63e4quWC8uGVmbFFgokpzKDJZQBLbsupVn8je5YB7SJy1FEaoQYW9ZSi2DXPk9hr68PwZBbFLf85r4zB966Vd8d9",
  "key45": "XXj6Am3mX8RUVH9X7jAnPH3XWmMJGgUyXgQWBJVJ8BcdkQ2qBNd58Lk1xeeCko4aKJpqqfXZbXaG5GysYhKJrto",
  "key46": "2gafcYyskBmYKSw4z36xcULXN9ChA4rT2EAtXY1BHNGVwzs3GKFTXYyvfHkzXeQJo1bgbQtQcEmvLr1cPEsC9sTi",
  "key47": "4TsBFQcFM6g4VCUwHt5neEJQP4x8r1VYj5tpk8Y8oEzuQw2bhMwomFjZc7p3UXPBxRxRQR2mNBvAXj224dtKfhRH"
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
