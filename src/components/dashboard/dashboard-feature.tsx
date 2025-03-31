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
    "3fakBavMKJak1AA91o4zrPU2UbQH44Q8tZ55V71D35P61k6Zw7EPwgvfp6r2FMxHR5gMrY1BYVNusx9kwVgXW1KR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V59dxTcKe4FRVv65hGLUNmG77uWajNGRn9GXwfPKoaZf75YWUFMPEmxcJGoaEnquToiFhZury6xju5jdGhvXXx6",
  "key1": "52X4boYZMo1AnMQQb7CKvTrgp7hVoCmSSvjPxhPo2R3tZRvvJFT2WW3pam2upkVgDLBHbsRVo2R73auK3z76J7dg",
  "key2": "2gJiphDry2A1Eh1p5UY9MYoS7PP1faMzJpef7U93RpGWQYehpVReXyfrYDC4Y3hjjYvwnKEnWABppxdD24TjHX9s",
  "key3": "51evXaZvk3X7PyScanbJYL4currizHsv2iQD9uYY9K2VvE8uCWVZ3xS7iuNNVoKhSXwsWjdKWEjwfj282GaPdFHK",
  "key4": "4SuqAVkkaRVh4Zhr65K9RkiFpkBXFdDXDJEYkUrxT8Z4uiB6knxgB2cNg8QuziAdd1qU9V8Mq7zAoWsZz1wdresz",
  "key5": "Lcao97YLaaq5xPPkFvkziYhoyX4EPHAyNqAF21e5atyhDLqdQUfEFb5u1y3YWzoD5Qyz2awnYYCLxgsb4LohTzr",
  "key6": "4EtBouyfdtcAgB6sP8SntfmbRLsfMRLkBzWbfo8343R4YMekRZRPWagqxv9s5BA9EeUYa4nc69LKMXBQ6usA5urg",
  "key7": "5UQg2DtGRRf7kSSsDpZcwgsd7HAtrSym2W3s7dtJEgdPttZ28Y9AVKcF6TtK9KNA9esneEaHebrcDvYY6tNToK79",
  "key8": "2fF1BdPX4s2Lzn3zRnoqjZWvCz1DCmhbGJS1kNnKFg3v8aw9nAfzfKVw1G7pfYgeKzNztEfJf3e7jv3ZFkmdWSe1",
  "key9": "366VyEu6coPVdPGBcUkW13iT7Wo8zjJ5RsJZAZrHEuxzVesbRh9PCtNTiReUhaGjnvgP2uxyEjcvuEJsCo86tW46",
  "key10": "37cpUfnN3nrVVFz5Hvqfxt6JGcSzDcm9k14g1wh7yqtbAYEjTB76UrgZpFWGDMvJVw1Hq9uF3Tzb3WUKZjPQSTPj",
  "key11": "gCYnrLGt1b4Lw7zu8nMyvmZqe3M5oZ7RpWi5RVZwgcABxBztSGtF3Eoenvk4Lb9CSHZkTKhCAvdsDjn2kgKxhej",
  "key12": "FsTLNMgw6FGxuunWz7pzgDmUiAfCu23TU6EnNDpVkeWwveG3JF1LSpQmcMGpm9mGWTMMuXrrVdwQkhaibavJGyr",
  "key13": "yH12sghD5vP2Phd1iXgDreEjehFx8BTLUhE2wTZkVDv3fdiHkGC36M7fLcrFE54avRiBcRPGvmfu3u3YLPyCixJ",
  "key14": "KMTfJ4uFZSmGCatFifc2qWPLgeyjs4YcwECf7fdRGHsnDEbeCZ5FqMBXXUTBvhFfEtB5uSgLCc2Hy4x7i78foZs",
  "key15": "5km2rtdTcbsVoMJ7g29xN1w7zaXrXBUFGAFq2K6Rn2YyvL79nUm3cBnR3PcJoX7vQFfetBunuCqf2Ku2hDyJaLAy",
  "key16": "iJTq3chuf5S3ADTdf1uzEijTBVeb4iX3tdv3esYFkoEhQ6tCx5hFMtpbgHwjuJ1AuiN81mFsjFoYQD4BCLURB15",
  "key17": "2QVpCTqVEPTU9xUVDgHJVb3JNMVAvb9y1GjeWSLazPLJiPjArvtpF5y8hwCqNm4zTnXDcatJjX3yUMrRD1R1AX6L",
  "key18": "47tjTK3ZW2eUR1CW8fx6ZQiTPnC6ds1GW9d8e1UnqDgUHq6dGkXCQCCoMx3fKKZjqvb3r9vb1LT9Q8Sd1vAhvZcm",
  "key19": "5SKHuTPyxCaXWTmw6qeYRAqXfwYCxf5ERverJHEkKULaiz4RTQDpNqsLCuZEm6emozaWyCkuK3U122KBndA7FC5P",
  "key20": "gxfpZ3cCZ4Q1LysEQDPVaxqbqyJzpbq2rmYiTu4mnsnKtmSA9qHbXyHeEsXXsWstDzEKAZYnZqtfvXMyycqAbex",
  "key21": "2xp4ZPvuS3KscL9roKR2QwcY6sUXgzb8Rx6hoxgc2J58o5Fi3WTgyJBoAikmzvDiA8aup73WYoEgQvXanoUqHFue",
  "key22": "2SJW4g8LDu19HC9KrhE9k92SuZAHBgnfMHTvqvoCRNfBCiaKDGRKoB2gjoe1hD7bFzqX4RZbn9Aid7r8dwxTcimz",
  "key23": "25sVcstydfczPG7rkaAKx6Uut2Y7sLHe6CJ4DfHm8LMM8ViQj5uQMzqLff1L8BoMqbz4vUtxWBvBRBE3aryVvjDY",
  "key24": "3e1CTWw7bdJqbqXVSsPjTnGMY7qG9HQnk7CBRuJ8cFsvzsyE2adVaWNp26JqcGZtTjtyh9wbbu8Hd4trAs3BDrUN",
  "key25": "3XTcJAQkTCiVu5GDvbBYxn3X7wWN5npYc4wM1HM1wzix15ZpSVB5qwyPFS82vZahZ5fmWABX8FqoQ26aZk3UpzQe",
  "key26": "5KLSYMVsubW9YKfG1Y6hnxiTMHZyD2dQDQ8daJFx3k7PmiVv7ihT7eVK2kEpiXHKXYPcCnkgYXLeSvzCpbvtjvgK",
  "key27": "3pBMv8Sk7X5GvJdRPDVNU5RR9uJNhswzGu6S7y7EcenXYYZV8Av87YvBapB9B639hfAuZpQBPjUz4nUKs7ejbwf8",
  "key28": "5xUnXP8VcSeebZfUQjiN1GH8LgfDVpaLG55Asy3uXtT53nfbcTUAD2b2NbEnZAaZyt5LQtKDYF37aonbeMGrXxXG",
  "key29": "31KdM1z8AdF1pj874EeMjpdjnpkUkmX1LtEcVKoEbafw6YzmRGp5b8kk9Abxz3t4yA4VgVCtY3aBZ7ZFgMNBK5Cv",
  "key30": "4PFLhjCapCHfsmcV3xWvvXpzjEzksWCdy7XE6h2eE2YnmNUCLRM6RssL3fGo2fT1ru5sgKqYa89aL4uECFEiuHB2",
  "key31": "3frcW4yzRyfguoijptqFjyAYRKwp6RA2xEagR7Ehma84wd57aXNtvYrjEokztT1xAac4pm7B2LypJYogjdAzM7Tx",
  "key32": "j3JWgBzKYAtZppWwsqSXWqaVZiQgkENZyKMuHvYg671jj6vjoz2Rbn7VrDJELKUsLsYpYMMDgAZEh6EDaKn8fEC",
  "key33": "3jHswex9SBVvzqpwqf1F4ppR99QKJQySQddTHvs6xMaF9rknbumiJKBgXKUPv4YrWuNZjtEfvVXapcrG2YEos68z",
  "key34": "58GkeTTiivg9SGnhZaQ9kx3egvFH3Va3LW3Roen2neUVjTSdeNxp4V2wNDjQtB2NYnpreb9UYmP6cHytdmjcVWRp",
  "key35": "3fixAhcpo7n6L7UeXVihYnGrfzWniSaqZvJMBDtj3i9oytUr7fhHj4niaiVke2HqzWFUxmHLYuXnH2jTvzQtyAwk",
  "key36": "3NQ7R7nbdiDXo3wPwbyBtLP2Ui4vLuougPFd4JCXntD5uUXPcre6majVWCQHFSmVvmozSsxUHZoXXV8JLaxzhSQv",
  "key37": "5vfWDpV5DEfW9eanp1dFGUdsnLAbbmjXB76B85dYXAFGB7AL9DGYD1MDJSpepFczEM8kCiiCSFhahqiWNRWS3fk6",
  "key38": "31gNNiqeXk7d47F6mdYFppfTe9HC5RTPf2DSecgmevAcpQsknZfn4zFjoTNAtmB9RnEp1etyV2kKK9HBJN6xT2oz",
  "key39": "3f3K3syfzrSzg1CBcMGLJseu28YSeL8RMMCp3SkX623m9RY221rzkw5huAAVwitGqz6zCWytP4zgnnK75Ti7erWb",
  "key40": "GjxkW5GNtZS2sSgvyvAx7SjrnaRAx4Gno4REAu1mSTRxfSvxMsCkr41Xs7cauJEvXZU4sMzV6fvZFXAjoyHChSw",
  "key41": "UxHj7USD1KsYkim3KhvQYo4BQFs1pJu8GoCWR9VLwJwyHTBK3BZSA7isQyakSQick5F3a5LygbXPeWtARLLtiFi",
  "key42": "5jH1vuf8rPemkZ777dfCArA16LGbHZJaPGCQLRNm3Mt5MhdWM4JnD8r7yrtZWm2cpfcfjfEhL496vs9tG9GfkfDn",
  "key43": "3HpdM3NxAQrwELXcRQ6aWjko57tGNof3AKkxwHcND1JFAM8DizBA1NUHidDFfQnyrvAjJmWy661pkXXY5NzAyKwF",
  "key44": "NVe34C7XZkuTYpahwC16M6wiWRwfxF478QwYZVany2Q6BpjQSYQCyqwsMYZjRjN5F3YBJjteyidaU6xQE6h1Wzk",
  "key45": "2pbPR8FBEYqyHtJRbfGruEzexn38tHX7R2BgyJYwr8bQLDBZTSqMZFbeFh1zvLSNEJPxozT6NXzfniiQmPCeT9Tb"
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
