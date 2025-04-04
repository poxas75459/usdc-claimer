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
    "2kXcjjrp2mPLCV5kjF884AcXodWx8Ssp93FvhkaRA2YZQSD9JoVLguGmYej1s1UgtHUE2fPTZ2YGrPnLh8GxEwQH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aQJCV7jVSSHyiHAV779FDe1vucyBwtQGcdhWt6gZVWuksCYeB7uQAsnLdbpXtsvpgvUJm149t9jBkEhntyr2FVv",
  "key1": "RqCen4viPD65ki2pvkYMjEKJpAWC73rXJLh6NpPVZEmALJnmNiNyrWmcEVZPa3ndA6VFp5meebyPvSWZuJabQE7",
  "key2": "XS7gKrjVuHcrJFZGe85sgpXTF6FmXnUtmMwBKuZHCY7aQZZH9szzPbP5Wcr4rKZkXEodFf3hM4i4EraXjAZwmuq",
  "key3": "5dbugZgyd3tnwiy7iVHeoAk8rfJATSmWsiuhberarC1GT7gsX6jyk4SSYJtB7ATp6LxEbyuapZcBJn6rLAXFoqxV",
  "key4": "3Jb2gZSJNn9CoG1KBBf87cC633SFDVLVkM9VUzFpMJNeAA5ReDoHmTY8pAFrCboPXdu4vmBfJmwAq5NuGitoMf52",
  "key5": "2QBpegdKxaJCXw62byYjfVwuZwyrAtBoZb2WmU2aJrpAKYJtQMB2tdqn8wCs2ugsQMM6Rn54c8ZiNCQ4jqEbDY7C",
  "key6": "58pxRmg4D9QbshmFgKo9zbPX9JbXkepgvHt3cn9tvpbA4AWRKPyahYkU3oTUThsXd16Pb9uLjZLgVdJaW73EFFs4",
  "key7": "2r88VSQwrcxQqsFRvNegYDVWgZny1DhGeFXLGYfkUJ4b7XKQoTYd3YkW5MVg6UUdzihiBMUBCZF7JcLZi2e9PkP",
  "key8": "5QbaNcpkv9CBB8ECcivoWHwsyEfPvotmfMhGpUX6oWA64ufHhBaN4YzjeXmx6rWFE7GEZdmtvD4LUgvT2ZavKpbn",
  "key9": "4CvpCWstknFfobj6HWhZ51DGiT4PEAqnxhRX1SuYz8g2z4JFRkGLb4s6gMMAmeNKuyXHscEzMBhTCDd7eyZNSzL9",
  "key10": "4w3rkSzr3hZHZKzbThdYD5LmyngbckvEzfZ757FH482ZBMm3mFhrWX1aM76uPMt9jmfxcuTbUCeX7WQL9q63jVw2",
  "key11": "WFxSnVNCyhuRb4rB8BDZkhqdY2N932KuyTNv6UUVsxhdbHDnGNBKFAoek1fFchUGkKyf7CBgxj163SX3iK8Rvns",
  "key12": "3K2WymWuYkk3VKJ7dC972viJUCHGe5g7mTM5wixtdti1faxXukqMYteES9uNkpQgRWyLirYMHE7tfrEbQbMibiXY",
  "key13": "3VrMraPtPrSP51A4ds5dethZYYKtqC4MLbC79G5wgouxaPivZCUhBkp88gzrjXXnaieDgE1d1q1CMxQDe8vnUAfK",
  "key14": "4Ec2axYAVUCGHAweN74DLZfmEswvq9NggUUWxkpnfWxEp5QjhdZm8Ej6FTcPEdPaX3zg87P7Gc6FGastUufgMJzf",
  "key15": "57JXMjrqEL8R5hngehcSRohd9zj3ebNYgLESZ3VApkcLFxjmpTQqTFywMq751oLpDt73A6EcWrPnmPjTRsNq2K29",
  "key16": "2GS8JHhuBC37dU4iwpTFn9SKSEH2jJuB1q4W2sBv87o4qrc2VMNGujXY57cQZLHb8CHRZvL5fW6CzSqm9Jkuvs5i",
  "key17": "5xowvY3e42Hr1dkGW7o74BDg5UCDTXvMUtNtSk5DLT2rdVViGA6PQq5hHzkPSsMmr6BnRJkKTtXTHgMvQ77dXsjT",
  "key18": "PyJiDPfpaih1fWfmwSjML4M6HVnwFY6p536oCGHHYVCHmCPgaELonQYtei6e4jv7mWTWXXUPyaKHFgs3suCKU2F",
  "key19": "34hAPct4VnkcpZcdwUpDt3K43BLGANo5qkpgbcVLXbFCJAYWnZu1WKWHCeq1mUcNixiJ9y23hfGLKyL9MBWV5Mto",
  "key20": "5SLYHTUUKswsXDgCpxSrkundyi8jRQw1yXVQygmJuAPbgLicYPfEw8A6VvgyEkhbucAKdj2z51PxA44eLXSExdap",
  "key21": "5rJKDuFWwgKjXX6SXJ12zp9QeQWj933Wn66LKkCsRdd4qubm7SPazfcoQQbwDnKzzQfpMUyBoW9NFm1DQ1gAFbQL",
  "key22": "2uXzeHUfHVjVHqc7M6L7ohQoDccziaExAECBNiWwXVj2thfyX58nd8RQVaqskExycbJdyEVt5NGYJuv2fHSrLgTi",
  "key23": "KvKBHjYuEQLHH3mBGDwNNr7fJa8xYZgjrs1piB28jf6rk83HuVpaQWgLEhrHkv5vSjegPqpAvPiup8KjMDxHqkh",
  "key24": "46FpwVDTTdS7NQM5qyjna7UK1weHUC42xHKKDMKwPTixti9jxq3KncyAWaAK7cZZevxrEJ7omV8UPKG51RG57uHh",
  "key25": "3zT6dM4YKAgBbfc8kvUBse4CiKXQWz9m26DEc1s5qSskQrqqWH3fETUAqgHExF91e72fUvM2vB47PodP9dmFwCmS",
  "key26": "2Az42avepnSU8fJx6A8oK4izpEjoifptiVkWsi9bJre8XVrVbh6sNRufNE3yUw1ywqCiHiDrTaetxUQFqM53gKSe",
  "key27": "5bfMwisYU5mn5wjrpTXaXunaiLh8CyEn3qAjZrrouyJNtxPVXm7dSx2bYgEYkswt8oZVoCP1rZfXcH5TapLpb3iK",
  "key28": "665zNuJBKiXvyeNaZZuKgSTXvQJjPz6zYfUbPdnYvhS8bcxeQfyZk6FaeZaQtUuNkHxMRsDjHXha2u1T191fDSin",
  "key29": "5h3W7oVKP63hcoMG3VNHX6vWXx89ZFje1uEeTRkYxu4qYkQtJtKAf6xxMRT3NKgaJgFrT6GquAeDrvej7XcfeaDr",
  "key30": "34mhtPhX3jLgAcXHh2V3cMTUkR9F37C1MTJ878wDJuTW7HupZf8i6MdrqmXhLs8jmpsTXBXjdoswWQ2UyEkRJM2X",
  "key31": "33Hk1pWTPj6Nu7FWyHpWdo1sHARXTEBzcjVjyuiM8P3LbWKwiytCgpTgYV4zBkmN7uNfb7n3wfn3MVgJdLx5fBH3",
  "key32": "4EmA4tjgEjDzbqpHFzxvhKyroNGBKLupiJwpdKfjiz3wnNhxsxQboVQqRUY6dMv441wuymWay7BYWk7C4ZXT7RKp",
  "key33": "3HTDdUyMv6iTWfx1vPBynr6j9FuCWhbYzdL8tvkgrbMiGracVe7LGLY2RCHFqG5FZ3gzPssWLGZ14URAtoj3V6me",
  "key34": "3t3fBSyAifzFjMiuAbxiVRu85KKGG314agJiYTXCZicRdhJnvprfXSLsLx2sUk1REp2uKyNF4dDdjkjysNTu8Xwv",
  "key35": "2QaCv49Mgy9kPp8DGZtTyR7JL2RPFGwwFTDe3ZsUTzBrkTRr2jrnHVjDK8bBfjCBvxT3tWQjjLcVuXPybL9bZi2N",
  "key36": "KWS86XrCk4JdqsjVC1ZuZHSiE7oALB7W4YjqAruzJ2Xoh2AAAyj67XTihoX77zp2kCBcRya6gKwaBnzF1MmxJFB",
  "key37": "YSAV27MWRNYTLYba7jEmApxjgoKihNqAiVmuKV8QwtTYmUq7aTtzeFsBvEQpbUEhbADNCt4bYv4JBRwKeDJeB4L",
  "key38": "7ZGWotQ8g9xzdpzujL2ftn6K3yWPPGUhWY7JYyHn6RqQR1fLLR5L71r32TrqUdZ1mbG9iUYrJxqHsU6Ys85rheh",
  "key39": "3GxWWb2e8BLAozZLyiDoRUVueUUNPssGdmabFBYD7C9eWprJVCmD9bFoQmbCvorEida4ZG8XQYvLozN54QsJw2wK",
  "key40": "2FNphXYdJKdersdFVzyLNNGCu4UHjVUT5ZzHD9xxrjXzazCKQ5k9mRufk6rHMQdLxbgkGa3W8jZHQ8FhhDkxFs6f",
  "key41": "2iWqXewFZ9RrSSg5TizSDACrmrW6AuPZtXVCRTcxqJ6QMkRPcBnKi1J3yJ4FTS5zsBcAPCqWpvvstJWE41YiTkyt",
  "key42": "2LVYJonrvupv712piu5TRqbWtZ1zhpbGk9o76KYnbohnqJYBYxf3escCMvTtKu52aku9udHNLHEjuzhPZNS1scxS",
  "key43": "3TgpVK47qyTYcSr6BUtLxiAZ9CzSPMfLmUYAzgbsaiAf8cYapvnWJKDNdAXHAzUDF77cfVW9Z2Qig6MTye4BgioL",
  "key44": "3DKHRtvYJvDABeXhSgVKU5yDK583DPQ9x3qojpdyK6xdWuLxMjgFSSiirQNM52eX6TZBcg6oHzc3n51GrGaL9ELT",
  "key45": "3BarYfJiWG6dZxg1oARvjSoJAJPmSA44RpF1NJua5mMpGm4HgoRrdFugC9cX3R8QpnZW74YbN4w7naBqo5ZGE2K2",
  "key46": "5fzyojYpusSzcheG6eheMXPxmm8aAm2CWgtDya7f15Yv58Dr8wUcGNtxP8Cu5EhgjmXJKhLdHnxYe6J89FGzAKif",
  "key47": "58C52KMhwxByEdsdcbWDv6rrqCaAuqv4Kt25MNtEyHo4RfVRtNw8BjEMy2vDSh6wa57CAo7R1o3jH8kp4NjdN28K"
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
