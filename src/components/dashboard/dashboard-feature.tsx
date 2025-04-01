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
    "5xUdmeCqBVoerjZ6F8RzLk7mGB78S4Q684tq9teyV98KwvAEQFzfuCwjUKTQnpTUi4QdrS9Lgu9LK6BgGYKBZJU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jioZjZw3LZh7g8ufUaknwjzCeYZmgAnDDSEtxoG2S3RuBnRps9WFAQRFiMnvvnpF1TfCscxTFJ6KHHXPg9x7jYu",
  "key1": "3hANL7aCvQrAC3nrnRjaCTLPGGjpbn4VnFoJ63nq7ipBbbTFzXRE94BtRoqGTzqW7Q2QTpKo7ZR7Av3r5EBr3273",
  "key2": "3pGS9MV3eZ2knHuFvCf2sDGviaE8uLZGqg6xhJssvUbZRvizY7RMotQNqW8Rw9WFrFh49tFbMvi1qw4CpzgYywnY",
  "key3": "4hYd6pqUzCXm3R7H9AiQEVJU8gsApM5wAcFc6cCo3dZ5qRXaU9FAHaTCAot9u3GBsAUZs2Qunoc15PaCve7yuaVb",
  "key4": "2hEW8A3Vi97rX7UzwXyo8W64eQcCLhdQR1yGYA7PmpWpKxCUnxRvj1DbZPreVanHH6a1hmio46py3D2uMkNYRhWx",
  "key5": "QSYT65UJPnSgXkEy6wCWs6KSibamoxbExznf8T15Vcdmv36Qs9Qa1sxBGANxFCyqR9DfaXL7EBzLXTbSnvfpm5Z",
  "key6": "4eaDLz72QThU4fGZBJdFGC9XATu1bqeRFn7AbxYUtFDgRd5jpo2UNw7k3471KphXkJjJKQamws2LLzgAyvkc1bbr",
  "key7": "3iMevWFYCT6t5rkAij9vAD8VsVssLQ33PG34rDdaik3dVyeLzWhVRpck6BFS1t2DhiTMcw5f89tMNwCaMa2jqz7e",
  "key8": "4k5twSwvJYMSecZCS2pZJHjXbNbPjLBBTkdafqKYSEYi7oBX44ZHZEyZKJcRtBrp6c52Tryhcpx3FFEwLimWiXj8",
  "key9": "2ngKQvRr3yEPejNGrz9pXnCYiZxUxPNqGi7iWntww9GpdreM9St529JsHkToYFYn36Nxwg8ovQFPwopAa3imxJwr",
  "key10": "5C4XBWWtnJW7EsjkiD428gC1JfEszGqnWG8rb1Kia1RAn4ajBvJrzoAiJcVm71JVy5MRBvxXAVvd8teegNCpx1Ej",
  "key11": "57NfDvUyqUwKuwxCxobdfeKGmRiSejYYMtA2CpHzUYvmGJdWFtT1dPjZZupYmKmTx1frzyBdMAGE3XB4Zu6LDo23",
  "key12": "4tSEtYqazm5LMVu2tTJWRwrAJyAZLHHsA5fZ7bjvPjDkvkvVsViiTUU4uzaeG4T8daJw2B8Qse5x77P6KbEe1n5Q",
  "key13": "4zWcvD7MoMT33Ke8UjbhKrD2GjTBi4diGpmzmXmszkkDjD8fK1oS5Pteq9esZzGVzGPjbFKSp1ATthwDTYNHVrwW",
  "key14": "4HBUyrE5i3fPTEvG1KGiMVmKKQQpL3vXzoBQL94wNNRa8McuwAP5yPKdhAbcnpAzU7zNK7HDoxdsuRHVqbavJXZW",
  "key15": "Mghne3bJL5YbrTxAKKwHaygcZnAtNe2isBxMZo2Q6G2Dkt2dP4qbzAUwfgMCDYqFoBsRYoutit8oGzPAuxPzaAo",
  "key16": "Afd5bq42f85njnQzguxttfbgLfiMvdjbvNpLhRPBT8fjTfNzTENiiTWD4AwvM2j3vfbTqTxQwx9ZrKxjJjrgQiG",
  "key17": "22AksoP49wfXqyiZjKosgB2jM5sSshoMHPGzyrzttEmWPULnzTAPVmSPi1JX3CXKZPDAdki7NvizBWEgvUKMGV5x",
  "key18": "5BkC5srAzm5GgJ71SiS1dtapqbqaqeewqsgt8eicZ21Fay1UmyPPXovEZJKo34fXdWicKyixnqLQKzXSEZ1ptJuv",
  "key19": "57zgfo4QpouVLFwPz55XEVpsJ5SRzXRc6brQYb3fBMkDGt93jp7QbAnv5F8zZApQg18GUW2UpdUcQejrcD67Vv38",
  "key20": "TNtkHeJYfuh3BnJ7h5MpJzh1Yb8SkW71BMu7mx7n3iesuEDysWEU9SEnozF6qxLCKiJzEPrdWQgJwsRy8iTLmUF",
  "key21": "yo2ukRvgk8MExZe8XkgajSp8YUsaWpHe6nGPfbTGk6KV6zJvetyt64GVjGQk1VMRkWH59pXEkcQuET1do72Dg5d",
  "key22": "3Zkt6tax3nP5z7iag1P71Zv9cG7haLhgyhk6iPvgKhZymAB1M5VhDt9Jj3jygvqgMvD6Vt4tD8BtkUmdxNsoJRa2",
  "key23": "m96YMiEDbHmstjGmtogxcVhh9MTBW4C5SB7hGWe5ZVEDHhdMXxUSQFHYf9X7Kr2CAwSyDzJbh4ZEsAyF6PyfD4i",
  "key24": "5mEr7XzAtZukyWiZkMW2JXTbuMwCQtJkufqecbf1bk6Vk5sUrFGv6nD4XLh7FJVnwC4cgTpGAiXBN6TxhvyXRMrP",
  "key25": "44eSSAFYK56MkaqdCni6vz6qFi99feqCnBZMoKiAgxBv5t5rW6vexc8P8ccbjgr6179KLNYdRaA8dQ2kn9nkTyBi",
  "key26": "HBEoN7dKiBm1p34g2o5ZmuD52bUFUSJD6r8trqCpeCWH4viUeDeWcCm9HMJgMtF9UsvPUTsEXZdLKTvtVYG1rPK",
  "key27": "2ZCoJgmYtCGAcr2gm521F19N4698odweVwv4qbN62Eu1p4Znzmz91AZHP7zuPzw2AaZP7XxB8gL3eGt4rihkWxD7",
  "key28": "5TF3edTvV7fBd3FQrRFrPDaoMcK5mdnzMkmHq1c9Lt8pSJouLEqKUKTtBgCtSAW7E6A7ycr87mezVexCkPvjxThk",
  "key29": "2zVnM33N2n6JTmdZ5PVYG7xcuPXuwFsXaoTieLSuq3tR1nfezDqJMJp2H2SJezkSud55UVKeqrumUghR51d1hAYh",
  "key30": "4qCG991KaZqKwvBRpdTtiEgbugyt8NiaNPdjJqmqXTWct8PSqY75DhMNovNYRcJzpWLk7Kvj1iCqR1T51251pmR2",
  "key31": "2YPXodiNHjvBL1suRYFsUthCvbphw4N2uNgZr6wHwu73tgmxfVzoWQXwymM3oWnJdyqtn9JkTkPXua3Ae6sLmvHQ",
  "key32": "zVojt8TwQyWmEpiykBqFen6UvRWhWGpCq8k2UMrCzkuFRWMJufMiute2JgTatvib7CsdAu3ZstCQ5DutrHNah6Z",
  "key33": "35uPQk1dmBkkxRr16JdpWPyQY2j79KUbS7cxvVHJKJDuvHGWBzN6faqTKiPvBwDTB37DEzFrBJtdyL1PVzLxvXz9",
  "key34": "2sdnGAEYPci4B8tCjbUYKwgK4RAPxtzhEP8eAffM6HfiV4B7LFu4W2ywkDrUjL49L5tdCWZzybdyudyQ6x6KAJMn",
  "key35": "3Zp8jU2Vyedno4L1Euni9vPfe5tvYUkGVB2BfrHXYMecRA2CG5EVexSYdduJqsFMtB1aqnJYYE2UDohXU4rNyaaa",
  "key36": "2B3cYuy9zR5t9tL1axNW2ZtkZPdb2gzJv6BRwEGvzd1xkheRzPEzovVtp2FURvcPGtXpbjWhuD97CkBXW6ECdGgv",
  "key37": "9NtFwLcgyMgk6y5Lx5KgxkyVELFp5dhcwYrG7MuHnKhyaM8wiBCXNYyYkiJ7DWgyghJpGF3u6vfobY6BpcQUyMj"
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
