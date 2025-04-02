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
    "4xdo7LP6U8jLU8Mck5qVhDkSrcp5wxYqo51q9FHDRK55pkgKx66NkJ9iiw4jmEEciVLPWmA42VtR1J3SxsTTy6tS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FPyg3iZiZct6nwyeotZnwiWndCZYoNhWVwH3BgLYEERBtTz3GkgK4uF1dCAKUUw11jSTQPrkQGeTzReMuoenHEY",
  "key1": "2dc9sZ86yADC4ufBqnHm7Y2Q9LTMBT43gZgr3U3E7ppMTxcZNbf8qtLkyzKVb7g729NbQUR2Dkqifsfw1cUCy1Kz",
  "key2": "4364YqaFJpaqXL8P7bQiNK53cLY8FQ9QiGAfpb4rH4M9r1c2JvwveJEGwanMgfXCCbbKrZFRRxNedh2q37p9YrLX",
  "key3": "3P8YbFc61UPaWGvttuubXgSSvFSVrcK8akPcyJMTuTrpUeECyHeeaqVsXk8fmevnBW9H3FRLmSUMiLsb1zEYvHhi",
  "key4": "3bUTcHo1DbDZQJQWUsSoQvdorEG7KQD6j3ACs63FaakJQZgw3VTCNu7D3rvLerPxMad9LEWQnBknLm7Mdyawvvwk",
  "key5": "3RYEskVtwM3mNxUELmGNsMnwCw2z1prypcXaeyugpRf46eAFhpijxpEjgjgniqVg12AZFx7NEsq3FQ6QwGgfnfXV",
  "key6": "2AgAYZE7J3GVCWhcoPRAmVrMsmS1wQVYxszVLz9UnrEsoBimL47oHwa4xsrSTtPBXtgDE9Uij8HJat7KJwSBwCP7",
  "key7": "5qUdino4nqZ9gk8AZAcNZqLgMcs5fXS51NBYmxzV3A6M8qoeENAh4gRKRSgBJYSNvJeXoUJiuDFHnvSiPsQfiCX",
  "key8": "2gxhPGH1PqeZhkFjUEaQjuH2swWhxNuZhNJZh8ojrM4oYEHcVDSfUTFimPr2UySNgRoK7jKVS8xDNCDKZqTbvGx4",
  "key9": "2bp6LErk1bHuJbFmxevL6B9ttYp5dzxKfTHNdvPwmVDdQpDqi27sQeEUGDLQdU9r11dMnRYpDZ5di4oFXfJPGWKm",
  "key10": "P5tp62rFSTgNFUQsdnx3M2EPvkjKG61XoRDwo6vAhYWqahvzHK29KdmJHqrh1pyLP1V3yhewrDdM5MamFQ2iHoT",
  "key11": "64BMxB8u87Yo9xZZ73WUKg5LxaC57AGLh8EkuBKavNyHTq8aC61WJpnFnv9SsDm78CbpkKSetqqbo9tPwuvNKRGU",
  "key12": "2TW59Kn2e1hdYGYUNWcAfv9oxYRFdMY2wJXTNYT8Dakiwxy8VpQ7waRaBbAzdafTv3eizzeNEtea6YDkESM7YVWq",
  "key13": "5Go9PrqJ6XrEFfv5JAE8TcyN6Kt1sNaPtVDMzX5vqPsJrYXTq22iWBsYaTFjf1HPrmnH2Z2bryowtG1UiRvGuYFK",
  "key14": "2qx4Ly4UL5zJJ8mPp9PPA2SpJkU9W83xiNpfoA6tUkGf3VVeEVQCyahPHCNMUHVBzvdhd16Jz7yjaagopNCekQL1",
  "key15": "TvRNhBQNCcYwvLfnhdR1ft4tPYc4w2DgAm8BCV8UGpr5WRpEjMoNCvVQdhMPxosUS4B721s3uKPrfi4ZSxtrRhy",
  "key16": "3ytZGujrZ9cV93fjGESPpRRPZ8BQpPHofH7PZRFZ2unNKUhTUFj3CWjvoJY4mChKfFj5PTr6YXqxYxDMKprDpYtZ",
  "key17": "3Bczbxqe7xKL9KL1KSvQh32Yv16HPf5b84iUvPPfZDSxAwD3K3hHJH9BCLaqfLYcHCPRv1S35QGse4p3nrHGhuZ4",
  "key18": "YXwkXi2wufRYUEjyj5inbJMxijBpAH25RkCqjcAYeDseuMNmAbKq5atwUQjYzptg5Y4YwF9fp8t89Aw1FEKCCae",
  "key19": "qLhxME59zqCmg4a18HByrVNHikPoDqvFzGPdXuwMkXjjsUjFBMTyN6Jd8T4Pu3h799CWrXpbAPP737NbMC5H1cW",
  "key20": "4f2V5sQjhkSWsfNVTSod4xEk33NZVMo2SMdim3a2wztH9WF3zHcKE4GPEH1hSSf677yYtZjirPeeg87ccVAdvZmF",
  "key21": "62B164QDaxpZ3AHerfz61X38G2CodbghZABo4NNeho97xKxq24RA6xdXZPg7pRsXohaVeqGzAKGkJ5T2v8RPbfEv",
  "key22": "4gE1u4FLSdqe8heWYFPwYcZKezmYpQvdBETkX9kVLx3nDnhnT2N64S684vgBjzPanENVsZjVctG5qG9jRNRJqosv",
  "key23": "B3K8hZaMjTJU9EBrrpVQ3pCFneiFM5n4UbXf5adKjpex8kPN3y4AXf27RfUpjdMuzzsPfziy4ZY2nNozHrzHCjL",
  "key24": "2cuULgNpyVbwnBtd3nuvGa9n8yWjQS5ugL2rbBt3c1P5niA9T8T6G198gjPUCTwJmSFnkJqmq6FmwXYmccexWKKa",
  "key25": "2VUaT9dWNmWpiYnZys2i4uYkryuHJpqxZkhedxYckS34a5WEAgzJkoitaNVaFhsB7msmFSXcYHRa4eUnFRJ9zSuU",
  "key26": "41ApNwuU8ei6xxuGKwiCgyEaouBsMLenyCgu44iPdESPZS6XULecXo3mg7nBDramcESmNqbHdzG5RTiSDSQ2UdGo",
  "key27": "3rhactCvuB6tQYkUMXcPfoAS6cRChFpPXLyjuyMPDAypE3MwtEeHyWwsxDprjB5dBnhcqHRWRPTGHh4X6dQgEQwq",
  "key28": "31Pc7TVv6Uv26u7H9CTzqsMJFuviJRALGmxukPY8QuZ85dGrRyJHfhywB3zYsTarGE9g67F6pX8pzZuTTAHvJvVa",
  "key29": "459wnrdtPYpRshhub3n1j4vZgmWQBN5CgRacmaWSDiiAB9FcTvDhKhDes5YDvnnscfk5S7qBKzGDsE4fyQHJXV7L",
  "key30": "49xvusKEJiogdAasZ6fHZH9qDaVz9e5qMNALK95bYmU1q8CBSD3vtGfEjDShLmvwXtLak2bxGmgLt8U1T1xFMc2q",
  "key31": "2cRw9zXEqbQC4BpmqBUawEuDXzkZXMJ9BAUfVxYxxSgtwGnR2BDb8TrjcBLjBPvbSuPwokvt6wafB3t83NTPEVwf",
  "key32": "6qaohkB6jyNNqNVs8vZSNYSGHrHuBMXTtb5dDY8mWL4NZi23oxrH2SnEVaSP9h6zfDoMYzqSe1qJBTwkssCjdUS",
  "key33": "23RfRRuBmrESsVu1icACxV6MqUaBNaJ9aVnWtSBp4hgUsjPsBARaZ6ALKpEyw7txHxdexxpKMpoG86WZFuhd5aDF",
  "key34": "XYRPVsVurmq8bNDGJwBWbofSDT3UfzzrB9JafJzEhpPKXf8ibHZoos7eyhkDUNaMRUoNgTZTaRMwV8G1ZRAmHeM",
  "key35": "4XzLELbTsntxpiroD7iucYyAr65cGgZnpV21hBqvXxSuH9AspRk8we5MWFHoufdwrPx3y6xXfPTWqeDVP1CxywJQ",
  "key36": "3hcGYd81NMvPDgLLikL9NVopBiySak1cRskTpzNQo8h94YDohZYFQeky4YLWCwzYstmhMTcMhnxfkmd7TJbtzRNt",
  "key37": "4YoAZMTTYQ4o9KfEUPqeac9z4tuhYeNdDXpPH3etAkNUq68arUnheZZNB35t2NghvpFb7SLt8mARCTdDcDrtE8zj",
  "key38": "31qYbBoXhGX57zGJd7a75C9bYrbxkJWAfpvE2y7Mim3tQ9ZNEU2Z2xdAtSwhw22FnTKosp7xFDPEMaVHD3hyTRiy",
  "key39": "sQjrdT2ebb8JTU7SDXmvuyxxkuHnNT7t2WjmVT17oAhL7wQQpavjfje1MfXZ9rLbjJZgPH8Xxfod9EpVQgfUBPu",
  "key40": "3BoixdAnEZQp6cJx768AvSmoKEiPmVsEKDizsHskQag9QfPwYcTsqRiBSLgNG4hzwHGonJbP5DBoZKrcfDjjUx1M",
  "key41": "64soFYbsHkwuiCYJiuD1hXmo6MP1rfebpYtCn65rdXs2J44FWHE6JgaH53RQBqsHDQvKwzipfaubSJgeE8PXjQRV",
  "key42": "5dyx5H48GB8yZGLRueM49USnTVTmmCJB415HTRGqwv1fJp4NGn5vztXRfetsT3Msyb2RVtKD6fnV94ub4Su6V3XH",
  "key43": "2XDMnAwT66Q4kHZ9fNYowQHcaajky1oZrF27cMXHog3pRgVcUApLT65uzw3aeNxoQ7qfHL1iqkHLvtFQcjhZjer9",
  "key44": "4MLQE54QhbVQw7GaipR7rSkV9czJeYVuHTnzS6WBVc4pCNpjUDGfZ74xm8QscBcnZCjLetCKxQdU3Dh8PokeR36G",
  "key45": "12A8b51TvWR1GTVzZs3uCKUzF5f5pVKwBoNdSgGZYHTnY784MdMigTgkVtmyR4MYLvjAnNQ1bCyT2pMLNK9ju99y",
  "key46": "2yKAKsam7Xy8dUU5PbPmy9TdW7aynge23sjMvuiqSi7a2XBUpuUAjE5JBk3A9Nn7JR3utXJBKYHcGZtaBiFA11dw",
  "key47": "2F9XXNnTwTwmUsKZPcgsV7vrd6iwJSQY1pPR2iUArc4DNXC7AhmzPZa1gbh3kQ7L8zzNgLt6aB7VUyBUyeAcUF6y"
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
