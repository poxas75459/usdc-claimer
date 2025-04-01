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
    "2Aa4JqLKPi2hiNSW1tW7PbQ3HKa4DKELoAjF5chmdrQRAaJVs6X6jKwt9GxpVtKe7uRwTpJpXaYN3H2b4LmbCe7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qa34iU1UEFfcstuubxSrfBngzPwHBZ6E67QzydyfCyzGiw8XxpwAhbkUhfPDgPY5Mb9wtsAn8ouQ4Pm9WqaY9w2",
  "key1": "qc1WsEAu9JaCh1DsFd79siUayMqTP4eFUD8GUPeyTvGdoZQ8uXBQpHwLqkA63xUgE1USaDhbr1752oB8RsNFczz",
  "key2": "4BysodAQTiS3wHQ7Cz88M7ZwaZhRcaR4RUBLM3LAi5QxKZAPxCQ1NfcizoxM5Biv4vKJ4yXMmeCfnoS7FmyN5aXu",
  "key3": "2gqa3sXFc6an1PDvqcKTgpXiFrkR576YWrZVxqpvzfLPjArcAEifP6Wx4WB9XdcSqssqdfqWR7qU5eEvkmovTFhV",
  "key4": "24pQE2PhqVM3qDLztveyN7TqoR1K9dPwfmDRUMxGZEJbjy2C3ZAgRV4AwPxa8356y7xqs1DJaTEwiHQNfZw7c63q",
  "key5": "2xNvMFagYUQGxNSgrPvVT8Gg51JMbEXFRyRiDsPbiqmebtp2vTFi8C48zaJg7nx9vxyDztDw7PZoniFtVQHK3G35",
  "key6": "33fzkgRxAbCNheU6DobbkG6WGUHPixFrSM9FyGkcBVPwmMF2MAwNsQ5zCtzWvcRkzk9xkTPPPMRB1fyerR73hQ6y",
  "key7": "3viouy8Wac19rruGZQ3QoCmpAhR5eucQw8YkTA7pbAUz1iKzUHxJAgihD42SThhaBzs3NWUw33AvBsmLAyQWUAWg",
  "key8": "4TwdApYy1VUSWV2KhbG5XRsBjzWNidmMGNek5ks1cLaExpU6i1F3UCXym77V9ZJYFw2xNDEftSUNW7mYzW4tHmFo",
  "key9": "AukrpRgADdUhs5YV1GacJK4U6rKXkWbLe5sQbYiyQMAk2LUA4NEg9WjiGx6zDigDh7pvY2t4HZzn4Gs2s49gEH5",
  "key10": "2dLn6eydZ23Hay1mAE7u8mxBJShUUx1m9ReVF5Sot1F26xCi8Fer34VNVduEri7ZzVoCQzriCAZQT9zAvgc2sHqf",
  "key11": "4L1vJ7z2LWF5NUQAsNjb18LrdwsThtfk5RGxTRRg9G2cNydhLznLAQ3q6QneqJwkDShNPCk17aBdb57aNkJCxx72",
  "key12": "4etMPDVXGzfcDfrosVjtqUeL9suP6egHeK2uNjYKtnKJEwjQ5A2Twv4TraCdBcjNS4ea8qhZMTm6cJqXm1zwxGks",
  "key13": "nrsNjhzGphKSTmfNAJ9hJrPdrWs6yzXLbFenMEJfovKckkii6pk2RebCv5mv4LT6kc7nAWtGb1gxzoG1Ufz1faE",
  "key14": "4EzErVhBZXWXqZTcZmb8qTkQRMX8SJfLMyZ5FdTncdN2FgE8Rsqus6NzcPEZWeR8HpF6bMzjcqmVNumBQykditKy",
  "key15": "2Ps1X4hhb4Rk8VaBjxxC19BENbsLrLXis6FAbGSm9qQZHrmDHbrvDWoLJVtihyvLT79Nb4KgmM6Sun7JLWHwL744",
  "key16": "3KBvE8F3czfCysDJsXU2N9HyrCe4wLY4JSP82XJqrJVvJdBn5aVzL74L8X69pgFXVLZn2oSfjrdVEZwjqkuroHZL",
  "key17": "67Czofhx1pgTrZC1i2NrCq3sqZkgmdcDpZiHxgHTSeKwYQyorjnpTP2XK86zjASXicM6yxFz1R9veUru7NXLSk43",
  "key18": "R3uHqZbYgjSsi4r7vAF3pgcsGpWQ3Awdi7PzdfHUsF4PhVAvYxTPxYZ2VSS8Yk2xTn3TuPeGYQScxxA1ey9fmd1",
  "key19": "4T83im5BkX54VPHsyKhU57MFeUysFetzfiZpjDJhLykB369JkCBeP5TFbKQG42RXhyCJ3U4WkMpWhdFSB38mabU4",
  "key20": "3kzL2c2rad8k2JsHeiRWsi6f6Jt9ZQ3LtZ53PaR3BvVEh6gka5EQysv1jNpEsfCfSoDWJgvknC1G8UfDnEcksVHb",
  "key21": "5FoXmvv2Vm7RETz4zwn8dh6yVw2ZZdJnCtPpcC9NXqUp7jfHrznBHX1ZYpZf4V2LH8cjUbXav2qfTJyLTHbqJpSK",
  "key22": "4G8sHNY5xP6gf3ur3cXwj1pfqfS9M31R6Y3autK1iWboGVqHc6Ec7m1PivFPTkwzU8cxEje1upp5Z9kwj9Lko7Kt",
  "key23": "2XCGC4DYqs68WBYMsNEFV7RTEwJ354gjdaMsM2yszKYnHMs5vwycEaxhwFjoCsujAzWYhyGzavGB4GyJtYks4LVr",
  "key24": "2reoJcrDDUpwo8Z7RaQpkTkhns4jpB9yvz6pgDZBiK3DFNmLbsh2grzbMVHHqHauMQVYx8rhBZt7DkzvkBK6Swbi",
  "key25": "2j8TQJCgtSytTqkmjpEVSJWaL8Y6uwbHuNqv4oeNsRFnCAasF5uQnCGMA9Xg2c4QK9KHQw6Nc4saULht67HZX4yS",
  "key26": "38RnCggaGqt5eH1egeHR5Gpaa5k6bQhqtubgZFaDj84q9HURL5AWArP1wZv8jNxzpQFyLE3MGXQ5FdaCRYL7yYUg",
  "key27": "4bWEqdvd1h7AbhPjzFuqMqsB1L5EfB43yWPErYpSqWJMNuZ3U4VBuF6dibudPZ1m5aKAmVjMUJKtLKZjFwV3QVT9",
  "key28": "5Qpirvf97MECfFyhfmz7QbdTF9PA3XTGzHH462Udzq1g6L64PfsR9i3D88UQHUUzCKttru7tcYiyLK8YdKL4vAxq",
  "key29": "5Y96Er9SnnvWCWhNszmq4KDdkFry6yDGT4UWL7mqkL24FKkgAvR3Tkt4NqY1WxshqfmhVEj7vkSBRKFocErBcorN",
  "key30": "tAunfe2f3BYzWPebPCrsgQRNbznwuAoXges7BJ1JD5CUoCe6LqyewYgJxXNFFXDcRK24GQVXfPZnu6FrH92qfyo",
  "key31": "52k1fQY2ChUeGFngYjZhMqcYDkao4NWhUebaNo73fF6US5vDeoGzsussaBPAhYXUk8UeYRZ7R2i6Dho3j3RzMisS",
  "key32": "2aWhBUGQeQ85hqrdgTb3myBTtccRqH2QvBG8w22z1ftRCodMHGkfXDaAyTu8CPg6Ku3h1MxA1vRhdWQsPsHTncFi",
  "key33": "3t74MCMFmqe4j9sxbrd4UmgvxHWs6PtNQhoUjRfcxkYA4Hdn9TL2cCw6pHFztBpVAxaRpY1KScVRvyd8xPNioi4r",
  "key34": "26oo4R4ro4sfJBjvydyJFA5pQ21BSBAqJxjWxucxY7HN5VHgvthpjkfh67F5DLXV6dkYLiHUGXHSTHyP2APz5Xy4",
  "key35": "5HBmcLhRaEasm6E9Ln9u9Szbkg2keNJvzDMKQAXVrRmp3gqsN9kuN449WrPC5cdZ9WTLK3vtDiKUBiMEL28iLSz6",
  "key36": "Eh8RXqdM9yW9MTQcNuVsGLSav2M8kNb82QnnwPQSCx7A18VvfTmLya1Dsuug8My9sfC7VWZa2vwWZMhhSfpPoc2",
  "key37": "2r2AgbDyBVRdLYWJkzLtLZKpMwW6NV2tAdA1m9isRWHFVqLnYJ4cHrSteU2DZiZV8GdmgU32jjcQ8ywdGVKzPXoQ",
  "key38": "53NknqEu54eAtgpuEFz6pVf6bW4sVht42qtpZxGaUG5Kz29Pbccu35Rvhm7H7nC5F5UjejwwQvPQj8wKq3qiw4rP",
  "key39": "5DsQSgvwahaKr7roKKTDxvEccepMiiNJLsnThH6QjteHaBDZTFXWEwdXfGwamME7waordAnAy5hri4qf87GxNLrr",
  "key40": "2ykLWiaujwXNgxVxrBR6XqkL4cjG7BJimRsbSLTiaqSRocwJG4EvScsA2SiSQbt3V6SmqRwkjwWgWWsx41D2pAu5",
  "key41": "623KQgwCkxUehyZk3FNsKcZ5maugPfMQZj4sP3Gn4M8XAZRUCRR33s136EfzhTDgb6zfGokmALNXqJMKa69ikYJM",
  "key42": "N5zPCGYv9GFHHGPB28wNCP185Jh2meeTRpJ3mihUH4GaE82mbnk27YsRRAvHLS1J2SaHnC4QypbSQ7ipgHgHHTW",
  "key43": "NJ6vfUwBtH3iG5WEApCr2t3fRzYh6Qi3wbRvVTky3cMnq2DHoAZeRD77CpXU5Ge6Z9X6GN1HyVz4B9NxkhJMoKy",
  "key44": "4LRaD53bP84N7L8isNtCTKiozLzT9UQEuQCtPkgtuHPTam4NgS2rTiZ5Cd2q4JxtE5JVgnxvNodYqUwrk3yvLZni",
  "key45": "4VqGrn46byTZ7gRkAGRUduyAjtSzngMxX5oYpjXrHcpvcqqid8jVYQgRMvvx4DA6ih5KVjmWggvxEvwZCT7tpt6y",
  "key46": "2E8Azwqu722sF3Mg6KKuXPiQThcrgURJLWSZgNH7uGKje7QVh12wPpE7GdBGVfRaRqPVmnQuHwQACSqAGm1Gax4f"
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
