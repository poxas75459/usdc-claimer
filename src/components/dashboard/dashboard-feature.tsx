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
    "dVMUfwUmPPYsFKrH2mT5d57xUTjdQkJPu842EDpQ3UUuVYA2LyxkmbvuCDuEnby6pMWv59uQA5tpKJwQjAfu1Nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E8rGcuq9EBHNX4aciyNxevM8tEqMCo3vsUw1vD3didzxLptmZ3b6Zd5rEK6UKfMTdWmQGebxXmb5Vnxg4LtQVZg",
  "key1": "3gD1SxzqVEG7t8RJAhb6JsQWr1vi8t5XALvmJRyNVnzztGMKjEEZkXYXFe6oNYMLFHUELzYM8buLhhkK5LxuMiDx",
  "key2": "3ALg8eaKtqmYmKfvYtU5yxucMncBuuHguEEbunKbwySE9KTagmtMttUZ2SndQB8iMMqwHbmhcyLCLqfBfarqL3E6",
  "key3": "AzWTQDujU9qDkwUAjErwyTNYTbBRvwXYNhbzZp88gK1fuRu9dHopTnyV9783bfHi5eGoAwzCrTVAK2MkSErZZN9",
  "key4": "4szE7JZp7PNjNhKKEHVMCSa6ngekECfeo2Jh5UoyhXN7ATMQFN9LJXy1tqsfp2iQAsqoQYmwXBMjbWj9WqPJukoi",
  "key5": "2NDJKFKWQKJj1b652RBZT7H88FXKMbVeKAdMf4SxSyueNYdZqyGisFzzWXQK7x95TcytQy3L4zQ7RqeAfVViV4xS",
  "key6": "4857TFWVHHEmfA1V7xtmUPSoySdxA94afet2niCfGSbytP38bStKzEK7BTrtCtsjht6hydwouFwW58d6j5UJckxy",
  "key7": "3DCVoCLvion4tnqNz16T37shGQL6EqpAbSaPcSpZZRWypwySXCVheqCtQBPwqYxW56gn37Ls4YP8ZE9MmDqeCraJ",
  "key8": "3QCMx8hwE9C6TEoKSXAjqQUWtgQjsLiuE7SBZw79kq7CMNzbVARrCWVa59J1SyPCTYHjSEUcp3sQHuyr8cRFfTBi",
  "key9": "3eCv7H7AAGPVHxNkwFu8T6YjTmcrsrvmZS2wKwFUnKPtGZAjeqop7WRYD6JdZcrcbvRkNCyw4s5G5QP2QD76igbu",
  "key10": "29MB6XWDLd4Zb3tRmSQ9P4WUDrJJGvAMXJHYtSuG8PaH1hdwjoXGCQ9fyr2BgVhz1xH77Y9BqHZx7iRLrrMCiXf7",
  "key11": "3UGKtS7s7sbfXhocrCymb2kHoFzwCeqNLb2z5LHXapzF1F1ZgJvt3QxcSnTxeg2UoWayqZsAsVNLXjoq1jhvwmCe",
  "key12": "3gZzU7xv63PGnTQZXjrQc6YcH1w9AyUeoXtEQ5c7hHod2MYgbjPQKgJMobH1MQ54vw5Le6oM3T7SeZXHhkaJX86J",
  "key13": "hWcHuDjgtzibRUNKikRY7ZsuzWcyqhyb6tAYMWkuRVq5o6Sr97RXY8GKQ8iTkdYDgWmm4p29AfBQtTUtGtWjTht",
  "key14": "3UJkiYuSK7AnXeDtwsqyHo4gBKYogfpG2X98g7qzLoYhi3NC3yMEccrAMdPuk1USFmcNFfDQ7o3FUsBnKQCFgFsk",
  "key15": "3bGpzRNHRFC2K3xP6yyBLY4QY7n11Uwe7QGzJSPFUVqWT5P8vdYybd46VUuRz9nP8TG1Q3D9oe6sXfTc1P7axtNd",
  "key16": "3G5FqDfCy3QBSAE3AicnpaLYiNb13xmUaZmCPG5G6H4i3mgJraKgh398qsz8yHsMCt3CmjavB9HKzcRK76yEcuLy",
  "key17": "2M29f6496vdqndDW6WeK3aDySqURiLm8LY54Uta1Wp4poijDrp6bromKXSUdEK4ADkuRqYNWRpWvMpRsHLgsc41q",
  "key18": "5VuAX6vDAuKtmBTjDT2xbUQcofogREMbtanNbpBKCzawSvmHKX8hTPsdjGVAUHdEqVwzRsaxAtPXsiye4SS5wFjB",
  "key19": "2983GsGHtX3sWUakZxEDFtdgnFfet1xryG6RharfPStjNF3KtjrbqGURCp2BgHqizwUvABMAA56NYJZ3E4kRuVsF",
  "key20": "4VMSUS9CmKEkePaAeJbHTMwmSVovHhCiGSnj6hYf9LWJMwoobDkEuXDXWNMzvrY3DH18hVojK9qC2PUhH54MVEjD",
  "key21": "3mKBwDd2qL7YbF2YTaFPQFc98iyrjgAgMUGpPsyJDrLWRg7juSVEvFk5P7pAHVW166GuQWTJofLEZJm8hgYHQ89q",
  "key22": "54XJauzxZ85f8woryzpVB6s5LhGFpeLFQe2W4gH4bvqYAxMJZgfEFSYeasbPFg72KBKbDNBeMwnUeVAzyn4VB8ev",
  "key23": "2Zd3zXnuTpgDyJDEQcPEGqGBgPZ7V7ndVJwkgHmqsf3CDbxiKm9fXha7BVbBXjMoMAPdPYk5xBTUzt4t7ZXzJhtq",
  "key24": "4ToToDNLHvuYJkVMfzvYYbYyKwKmMc8MX7QX2sPaRcgMC9TzKmHcsmcR3dvyfUbFWK2s3FpptVmdTsjq8Ah2axDC",
  "key25": "67FNozMCciPnMWBWD7TLs1T5JnHmtXw35HkeeCije4phYDFYUGdTxzi5ywvZyunqCsg21PhpsVwFq2mLxYnRDuSu",
  "key26": "4aahqq4WbjkuGp2ij2W8berJEJy7KLGd3cJ6sBtPjLEJ3Q3a8M1eD3n8fwTLpBK5edpK7jjCz1vvPUJcrbYayo52",
  "key27": "4NhsgrahBPs6tE9PhLrAxrK8LRxQcb3SgeCJ9sFnTQ8uMUDpJkvLn1nJQp6S3ywmt4g2En9iEkLfHFjLkJC6yXki",
  "key28": "csWz24XjjPnjytDwm9wGVGmJkZkCpk5A5o6ZZZBqf8TzUrf8ehYULfy9CQeVWqmVtz2Pi3epAtV1tjjgRc11cKe",
  "key29": "5o4iuABF9pW3vuFuR1VhxUSSzhzv7yn24967wsNuJEvPTzV7z74HhA6NsAbpUQyMDCCEr4tdrCA1Fe7a6zsrVeb6",
  "key30": "262ozMwfep3P7o3ssXcAyo6Gn3kYzMyxjRu3H7wdRqMbEiC5y8mQFwjiNx7Z8pfw62i4tbVviEzzaq1MHcMjjSv2",
  "key31": "4FeSf3aiJSU2cqmRXq9a4uSQSBF6znmpv3vMpYobdJP9Tpx97HgKQ5VwWs3X5mhYpZXHmmH9SDxqZ4hJnDjgfsqZ",
  "key32": "5huXZ58iUg1Gm9NTxZzYHG8Fqs7fYBC89oCTKZnydD7PGHEdNDPVkXkJkjtjgsGwz91d5ss9CcZGCAKAjFaBH8p",
  "key33": "2GzoSRkT4KJNVXf3CmUFPhF1AaXJDm3o6SRR9jYURkMzi6nRKNAj8pHgLDcsJzxAJQLtyiHLztJmziNDeHke1NSX",
  "key34": "2sCgtG99vN1ZYeckifKAaYW2BfAQQQ5CisEFsWT261N9oQQYQNPg5TPD8mVUCKUgoPit8t2RGyc5RhiaN88gN86i",
  "key35": "NDnpVbgFfj7KcBCJSirJJehnPMS1zvBnTUr6v4aJuAyFMqZVXJU3GEz1KCEf9isrHTHLQpMhYR6Ba6nYJGc7Yq7",
  "key36": "26F9dLFoxmJ1uNb2NkxyUSs8ZiGrRPnMTeKvf469nbyrzjxwr3zgQqSHdznnaFUzpH8edkjuu9Cv6pbZBzyLF2kZ",
  "key37": "2FbNkNDw1WrFBMfG5QzdYriTZgi8LQAepwpakH9v1MAAYB8qYQvw3zGBHhcQMpJagCxJ2Bb5KqWPSreKg3H77NaQ",
  "key38": "5NWmVw3VNA9AV5qexUBZwomFxgmeBU8H22ZZNdWCCUvHBfPmya4ZqJEbBxa5SVmSi6oyr79RwLmntWvqec5S5GgH",
  "key39": "2r6otZ4AxY9Fdysj66PL773LcmeuZXC9fys3WHP5prjN17gk34fQvSAXi5kDy25UWz2o93ZpMC1bFpHkZTywwtPZ",
  "key40": "3LxhdjmYWNTBKc4b3nu5LwhjGcxYs5t5U8CVTWz5twMZWMuVyBfF21cc4NpVQ8eDK6gAPKwcwVWxf8MqQWM1uT7r",
  "key41": "5GRns7xaETE3xeHwF4dqpfRPkgZNi7My74L1JU2zVzjsE3fj9kBGPEPTnAoMzPdFKyH8hcByGeuQ78EnVcSqMUZs",
  "key42": "31H7vuum4YuoRJ744RJ8yS3QBpVYAYWw83asGk5h1ytbmzyqQ7Pptpn3rURU2aB3MssAiPThtPym5SWoaoEppZxC",
  "key43": "57ScUKUkdxZBqPpX8Qrko2tVx5EUJgNd8atRg4nNVtP8KTqyHPSSiCt6WQLkSVXmvAwkNHh3VBSuSamUYmr4p3tL",
  "key44": "sCFr4p7cinxB28DMYmkBYfwtp4zi5QSZe7Azra7V5qpwcUqyFFUqohe76uxb4zpCw57mwh2h54FyP2ANTwbed4C"
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
