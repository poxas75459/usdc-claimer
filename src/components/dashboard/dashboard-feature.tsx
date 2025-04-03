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
    "5nUbSw4semVy2RqeA6UAKLZdJQg6sEBS7comDjykPh2wrMaJDyQfpnxogp41LwNobxtTXSTCfLCQNDG7LGJCdWwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJChuQn5tnMMbMZnaZE4qqKHMEgLGbcw1hvERQ2QBc2c4BbqW2vNeBPmT9Urqr68wnT47cCXerUSZR9uC6un2cB",
  "key1": "4QunAWWi13gdHyEoH7eGKpkAgLVsbuCvkRwpmRUx35iMo4GQ73nL2m8YASXw1DMTHJJn1nxnnBWZ1xgLcZoQCW1y",
  "key2": "5guwWkvRQNDYMbqbJkS3Rt1Qsa7Y83oYqmDbUhj4uEFH7Fdt2f1m1graywXfWPnBb9g4z6bWE4JMkc9MyE19jBCR",
  "key3": "2srqEGXYkD7MhqJ9w378cZVijDZAB3k1qZfNjoZXDNoR1AR3nGbKzwEuXmdVteRnK6Q7CNN9cwySn1dGcTn3gZoT",
  "key4": "LQ3YG7JU6taHmc5T2T2bCPNmDdAWVLGaq1pPFKSJhV2oPw5N3az7PJNcZ4UETWrPq2CViB6aAMPpSewho2n6GEi",
  "key5": "5AePaBborEux1S7HKG4iT5mxmP1Ncjn3MNDyxwRxtLmhgUU8wnrRGXS3RyJdSUkNLUbj2u4TENeA1teSZvTGPE35",
  "key6": "3iuTwdYfkGKSDFTafaA7SgnmCNuAZNKfTtsYtFaPNTc7VJAjk1ZGGJEdQ6UwxgUmRLjoDLEvRZ9QGyYDvAF9dRpa",
  "key7": "5YZ5J7oK6a9HB2Zh5f6Z1RQotosuWN3D6VhZAMAqiKszpTeTPw8F8movd19NYHXWzUm4tU7THjiRvMVvJ1tiUNaR",
  "key8": "3AQXigucWzambF5eaeeqCxqjM4B3rM8Qu3gpCvpcGyjokxYmsaCKLZNcmgxkjjFRRW76mjrvHV3AkkAr7CDiqvmN",
  "key9": "2DajBopWjxMBfvzQiEcxVX7JogUaHiVjWjdLB33XZRTPxDFVUDFRBfuPAZo34NvBJhxZFT3YAdoeF5dTBqByjySZ",
  "key10": "3naLfe8uUmzJQkZBRusnk8aPZxc9LVpxDC1Cbk4pBDGshpJxjD77ELeCgmi3SoWTEvEmcELCmuoZcrSzQic9715B",
  "key11": "3TW5PfNx3JWPbYfYLDKXvgw7nqBJCsNhK2HzPrnVcox38LGQe6GX4kWBoM7mqygbCVssBWLF3C2TMqWf9xyw8ygK",
  "key12": "FbwP5X6ZscG7fLXPysmTBfuiwhopr1bAhdWjozejHrkkFa5MHxLUEJiC9zd3x4WhZZGYhQWucCKQMwE29Qo2xoY",
  "key13": "fTXgMPjc62bMSrJPTXBbkyuYGuyteiBaGevqsBZNdoekPYPC4h6aWCUpxTnHBWJ56gVuSqzKawdce7hEHPN2Q8N",
  "key14": "3TaTU5Wbm9p1AxMymY9CAVvcAVapLvY8sQgvA1AAhrmJDNCf4MutUAmPWMZWWsh5iuVrtApSBgftz9frGbve98u6",
  "key15": "5UcoT11xFG9AQjop2sFL6rGShVWN3nQhEUmy3o4qoMpUMrA1Cur7YTnjGdYyuuughb4PE5j9wtwJvixHVxHpGTSj",
  "key16": "2Zn4xuYq7aJBikfQ7N8t57VwEei7cBJHhgEsJBRMHzyGHP8vLSzWtkrHwhqJpyJcArPVfMV5kUGsJsrrhkXYct5D",
  "key17": "2M8e19mjaqnRJFYuhwezmjb7Hyg7Wz8BepBet44UQh86vsCxynbHRgTTUTRC7UKB2NXzyJWeRCHSuDuLhqxjUQAk",
  "key18": "4PctKifgyiSck4po5xzMYsP71ST32omGgLdjQYg8b72zxhiswFcmamyoFgyNWbUjpvLJd66ysfat6aBvJpsKit9A",
  "key19": "2kuLRmryxyPMJFkXsibtbyHK4iWtkotWAaRLLjWQn6MGWDXNbY5WvdRLw5XUnACMiTDRvYWGnxeNgANNroDviPvP",
  "key20": "rx1V3QpXXY6iYh5afTBkniwmGWJzbbeMeUirTmpXnp69qVJjX6Jj2UPLjv2mJjsu4vafoo6sM6GSuffUVCoQTh8",
  "key21": "65jce27vLj5R4BBELhejPBv4yPpe7uDxibszgvT1WqxNp6G6myLzVSFBVD5t5DyMThGtU1HYJqzj84qbDZ9iA6Tf",
  "key22": "4YUEGVp3FFqrdwVAdDnT38puKA9WvABnj6JmgpQFREPqyUWDBf3wgschTdU8y8jpt38TUk9ad1qvVesiAZwkQgby",
  "key23": "4jauBi58bTKybt2YYc5hrTeUg241PRyNtPHDhCRxMP1sXEQAXaMqhCYAG1NMkVszMoi5MpxaZ4KTaar4REVkYQyx",
  "key24": "5VR2fWA54B67ddPpcCvSinP8rE4V364cxUqzDq8AYEwst4Cv2fdHCus7Q7EsBJFL5Htkbc7qex5xmSaBmrMoqAkr",
  "key25": "4nUmsLjVDGVgoYnPK46BW8WZMfNGy1eznYRyK4jzhPAnLhf92nCMK9mgE8MGL8AJYS5q5iasyD2xYFSLwXaWQBet",
  "key26": "45cKvoJTNaxPefciT494aRyw9uufgY6jZ26S3K2bPoQ6HM4bJPYFXzreQFk2DARcsVutFKPBj1fLqoHFFCFp9fuy",
  "key27": "48hLDPFFdqJbWfioesWfX5F9JJrwDZcSXTHvb33tfths9yWRCN8whyrMd1M7jcWL9fjNaEz5KZLdMULLNEQW1ggd",
  "key28": "a6ZMcWzQpoEKzCPkK8uKwzZQ7w5QEL1LCDBiPADta8YidWJ5A9kPMY7UpjPNQsbd1qrUdbJe3hK86Zyz9RLe3Wz",
  "key29": "2RQRgf7D2kYb2FD3ndV6Y7Z97u1rA2QsqVvfkv3QxqHWxDwd8hXg7uyo6a2WKCF8BFLcs1YsM1fEi5sRtpWxjG1W",
  "key30": "N41AAvVRdEjpHhk1eEwHYnqr5gvbNwNBFEXuxLY1ZnH2NUa3rXxkV1Sqr6WvxqXusuC2N716qdwJq3SCsucNiV3",
  "key31": "23qLMdGPrFusBPrKELNhyxg6nYoJKSr9s93iRNQykr4TkNKkJWA3a8GdjPp7c3GtsdevsFSYNEbxkNpD1deDcVZc",
  "key32": "5GAxTDVKxwZhTiyQUmAaN5py7zmneJV8rcsg2b3hyzdHJ741BqAf3Nq1j7i55diWcgdz79vmYSnA3ZVVuYpY6Bw9",
  "key33": "4CrEwnk64akJJKNynGChD56bRxySfCiY589GLxkkLCeSjdGE7Q9k6siLHd9Pbixnixfhm3ZpWpZrjj9J5GYwSmSY",
  "key34": "X43R12qvPYBYR6VCwrCZzP5pvWaC6iT7DHo1RQmi5mGK1S1C4R7jHniFJnhsKbQmvKDb9wy1L7ybHXMVNooiw71",
  "key35": "qrEKdGWmwzo66wnfWZcnqjoowNABL6CG4dT4wwQTLjWZhPVDg3NtoXksGEcm43aJgSjAdLEgXnjvfRjiupGrmQT",
  "key36": "21pEaTrHSuDU7R3kksmyX9ed3jrWh7igMJLWKSvdKze2LKRM6usVtKia56YD2KdS6zuNdb6zVSzA3YcjL33P2zDi",
  "key37": "3z8XHEp9PP82N8Uz61AaCohxSvhUgFPZFVGw27hjgdiPJgY9Cr9wgt5sixJXASbpiADbfWuCqEP9QEFw6hs1TBVS",
  "key38": "47ki5ubuWvi3CrqPJhrpm5TuhbZhERtBKfRmPZYa7fT1XFaNiKkGTyUR2PzSanYmcQ6ctcAKRzPhCsuLZknbbE7j",
  "key39": "5yJUtcfHp8qbAUCYk7GJvuosC3ZXfTTtdoS8XUkf53Wc1NswcctDzPDtiK5FXKHZgz76KMGoDcftwnzD3jiubFjk"
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
