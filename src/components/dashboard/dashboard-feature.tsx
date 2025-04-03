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
    "5t7f41oMJ3kEobKxRg7srjHY8pbXF7MLXjYSZbMsNHCWPXVLQ3fYvw9y5bFfFieEDtNKvwStxuNPfGbbi5g8FN5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XwzAS8tWVfhsmgbJ44EpiJSm47h623F1ueaE91CiGoZcevacZRFRkLRALskowGUA7Qie9huQhipjxY1Fj1WWaCd",
  "key1": "4u4bEgDMDK8q129785f3esq8XvgAudy86vDJSkpf822ecX4MWRSWJoZdeN4nwpScCGjvCqxnoqPNLmAaA9joKctK",
  "key2": "28C7w9hhg4kicRr7DFKRAmxEXE9scmwAseM1iEJbAGAnMxgGFsgYkLdCvuqF6U2sePjimr4si1fF5xzgp5pLsuok",
  "key3": "45RE7nh7PXTQTsSQLa9JfB1sQ1PGsPugjjJWP5yyfi1uXpyp5Tzrk67xX27ccWxvWBSErULS18Yt5siePfYKtBpV",
  "key4": "67omgqofvaTqEEzZH845NLf76khUzLu551SPj1c8Jr1CD581RxbxWokXbmxTiagt7UBTUhNHjzJ3DqJX3Wc4ayhX",
  "key5": "5iih9jHZLRz7vXX99XCr51aFeoaGWUs6ngEgZeibbLeSa1biP2hj6T8NdYP8EdHtuvbkYRpsT7gyGqMF7saRJXmT",
  "key6": "3h8iGrL7PXVMSPni7wy7t6wZiSHfmfyUsu7YuQTJhcKPebVCPFL9tZepYD7p9Xf16Cr3929KmXUJP64GfCokTuve",
  "key7": "3h5DHr5pijGfChR6hPftfJp4mutQVi91gHEDEck7aESXXAq5yZADEk8D3dy372HTLaqowwT1tBQxdFsRRpfKA1H",
  "key8": "2SZpdvdky9zPiorbVaap9VhsFFvq8h4JmNzEvfY4ixPzxTBoGus8dmjP7zJoaTZQPB85LKdN3stn4AU33kKhoerd",
  "key9": "32dLh9GhLgYFocejQJmyhE2U6pbYMSvTr3Abq1p2dFd3Wu4YKJUMDpvuzpwGWbeU81KxH71F8QHenyc8FV3HHNZ1",
  "key10": "5LvoxEt7f6mSdPJFt3mafkKNfczf2qQtWpkxMMUB3cFLtyHyh1jR5qx8FGshyViM7bDRDCU665roFPjjR72c3T9E",
  "key11": "3UfVmPZYBo6qu9NzaHeMosxGLs3Qqma5Z7TJ1u1h9VGN4n8ZGyHx7YeSCgUozNMsK5DhTkcDveuZiCRkDSonQPJp",
  "key12": "22LiRYExP54SgRJnxHLJm2uPTbNQseoG7a5s2FJtTQbHbN1VbSaeAYtKcBrHvx2QZhgzYeCweA3vDLPPpQE2FVre",
  "key13": "4A4qRqcN1ncYxw8DGQVV8RT4aU2MAC8xkwF4wFNoaEt9L4EAmQ1w71MrtWgtkS38uBEDN1RnK83rbHtyUSaDQT6o",
  "key14": "FGUEPpwTiAx6YuSoY1vNuEsfWzk2DDes5cnHYHRGVVFsbGxd6ioKjmJEU5s6KHBEuQoLoNdw9cH4o2ZwTVk9Fqk",
  "key15": "634chQkBzNKhvoSgpUUyaruxerJWPCNu9J6CQwDp9RPDL6wehMZ5zySQLjzspXf8qX8t2bcaAJk5PSH7z6udJ7Lm",
  "key16": "4frZykJsz3uGjMC6uxHmN7nNLFtDDJu2NXwpDTzbk9wvchLcXKGKYdPofE3agq6zRFKkJYACQdV7KFKDVGzBvc4Z",
  "key17": "3jLzJbcwnTgLNeeiubEAT2aEzjMaA2neC5VvLPAD8TBptT2xztoWE5dSpwoVkR1uYoWg3gtDcWHsqSemS7nN8uzG",
  "key18": "451mRptM1MsYPyijkq763oECbTB4gdyFJGfmMsmxJLgtb9drRrFkUYkDU4zsP2CHkFZYd34wojdQBmoEyyYUWvhV",
  "key19": "2eFSVgMSJqxggEWLPtSEnMu2WrV2oBCc8wtefM98HfgG8YADUZKXKDDzZaVbeKq4BXp7iN7EmWdkjVTN6w7MvfEd",
  "key20": "5rWYhBjQqKkVUZbRhUJRhoGnjdEFTwVQrpemzgzmdB6GsZKhZ5CoeNjhN5J7PGxYNC5yN7JtjH7Cmh1N2PsSPHss",
  "key21": "66WLWVc4nTEm8fjxQ2yHtgXZifTUPEEiLjmRt1VCE9hAY4BtYDQ4UhoijerQgAhbG16LdAamuHcasAbLhdyzUREB",
  "key22": "2MfHHEhoTHRxJjmCYsqR2oxHv9hV7cpAhGX83j7JEGCuxBKZjnFJTHKBSBpcJoRbFpRywCEHaef8D1uuYKGocndf",
  "key23": "49cZXuoCiNfw7ksfeg5eyGGfMyX5vabRKV1896zkp4j8HHAMqb6WVkG8UcXFLNq9z2QNL8hF8weXUkDwF9inE7NF",
  "key24": "4b1YTbZZP469odZqB9DS8QnCpVyNUQEqzpWH4KjApvL5mHt8uRihARym8gXbpxSsBLVZan57iz6dkWNN3BQQbCZF",
  "key25": "4vrRdx7qyKDDDUkzpQMbjzGE7dGj58azMKH8Nf1THKU835QRQckNhdhE6pc4La1upyxy3t6u1bjgtxGBQ3zFW7qF",
  "key26": "3kyb82oMoU6F4G6pUczkMd1d9PGHbi2LykEEqS1PoPJUBxYqr9LMLJPHv5Rnh27fWK93NrFAfFbNhmakECcT3XmM",
  "key27": "wtBjAkgbe19iR4gtxu59Toswfd4nKBhvwBWc1YXbm92ugC79GmraTJr7EeXdmHYwM1yL3kRNXKiWAqXWNYaZyhZ",
  "key28": "xU531chxQhumQwkuQbfgem4Lac7rPTBprr3amYNnXKAuocCBEME7SEeoNcnzhSeiMEaPKj9nVuzwEj6o34nhfzF",
  "key29": "4QECps9QEbjS9shzNjRgdSxZRaYS6d6jTvqFjLPqr6DbEuk8kr9quMUAsGzyoaJYzR2nRL4NGS1bXjdeQV4hhQnf",
  "key30": "2DzVy5YbHhrH1pGpHUBt9PD6Dc6a58TkxyhoEnYDLGc3CGu8u7JnEjkc95zkaiRxLYhbt9zWvZuYioKRAXhYNXg5",
  "key31": "2Hj27nRmduPbMVY3gfgRNWsnhtDPoPxnAtah7xyvs8piytZFgNnRXeT5k61SG2ZCAybvUuEMjJ5xEzBUbZ8bUP3p",
  "key32": "4GQA4xe6KdeTYpcZAfbSrbCMiKn6rpW2dNGy7RGwPLsmf2GEzRVgqiAPZyMWRjjzG79vvjJXZdS5b9JPgRfqfBti",
  "key33": "5z2VjW1mnx7iFfELhDdEt8ZnwrZHTDSKFRoQZcmQgPWj9nvHQrtchqXHVk7LBmfb8qLpMQumGjj3AiqjVHqrQGtj",
  "key34": "2eSW4UiqdWJsDB16qwCJ3DQPMJF2YTZTJH9WskNXeKf3Fs1SKpsNzHNqCkScxL8wSTWYt3whLLic2fmBpATW1Jgn",
  "key35": "Yv43bKr8ZGd7ZdtkccqJbJ8Cj7eG6tpRFP8ZZgKPaxJkMDFVNpVNRsKBJmGxQ3utwnD1oH57VSafTSk2uZ6gJUZ",
  "key36": "3msU3wgv6YC44ZZsopGrUfdGRS1B2Waok7gLDEHB67f9YVGMH8obFxwfoN9S5TTDoozNVTDMUfGpzEivhNt6J9HW",
  "key37": "5Q4JmMVqJ2r9JzcXeKNSo4zGeWRFp9cHU2TvSrysahRvuHvoPs89Er9s4g6dASM1p7cqEgSgQeVpg5bcyaKdiiVL",
  "key38": "kkc7R9tkdQsDEaM4DSCRLnDLsmPZ6fcG64XBLEf5odsL52CNAHfoo44BXcxzdZkkAL7dRC9YpMLs3bqrjerN8Ci",
  "key39": "4PzCBu1Q4RmBVCJuhVZvJ4SEMs64sdErrtcr848iVKvV2ukZA3p4jbvVLjhkJiVhyRdz7kYQQbgh2eTk98W6mRnU",
  "key40": "43uKtERtsNmCU1bGbnyu6p4jXJ9jUUtB75UDtkdVkeUgMdJr9HCQ2FBsBzc3TpysEyyj3JERBRczZXiSQq1mtSQX",
  "key41": "5BitEsb7sG2y65rzU6HCq2gqQQk4hGXdWM4XMJyP1JifJg6GA2gs4uFL58UHekcn9Lt8mZfHu9caSGbFqqi2DHpG",
  "key42": "3YdeFNVRpcPKFLPLKCHifM71F3PXtKgJQvCc7nVvLLmx3CPsUUXf1TMopCN7fbembtbL2dfrgPeNHCZ92rnzvEEC",
  "key43": "4suLwJFMynMVP1b8KZ4d29GotufHQ1PyxWD1L5DTzBwmBTJHLU847ciTkWt5Ppnbw99mcfkEVzbYi7nqB1hZcSEo",
  "key44": "3AbLP6M5F28d8j522G92MVNGkT7imG5XfGxwJ4MMtgosU3h3Uy4rffFhM7RYyks7xhmbDHGVdZ5CG823mdgFrUN2",
  "key45": "3znV6eqTDNecC3P8MgGvs58W1LiUvzQ5gzwmH3r9e9Lkg46y6aPNe6tfW2UCjXyfQc71ZQGqZbfLDMhzwABtrAPD",
  "key46": "3i7jeo6xRewEoTTBNermz8uRf3Ew5JLSfb6w4czLeGQjv7VohUHYxjrpUZL95FYayfYPjx1fZmF8qLS1zRfZEhrm",
  "key47": "3qrwyoCFky8nVvfsvMBf4G3Wkv3M382Do1wx2crtNzqwibJfwDuvABpHPRs2g31ccJfn1n8dGdMpfHgDsUFctGRg"
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
