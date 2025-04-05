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
    "2NBA3bRcRABFUzJTNfx6bqH1a1zVf8rRVrn4Him9mUsjUfoNMseYL1aCnwYYNjAFk5zuYzZuweLtKZuiqVoEV8mR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eCS6n1ifGbfddwHiRAmxMnZZqpjxkgSuYUnWGWod7SeueLGYcYkQe6jzsC4cxmKWHJo3z5GPRRzQ2nXFYAZCSAL",
  "key1": "2bQ2sAgyB2SR9doZT9TvbpsjVENi9gBY26Eo1PazEvorEuJSfb2fNzH1YNprKryDWFth2gJ1Cuayu9iZ1oomFbf5",
  "key2": "3jT3KuFhMS9BNsBVP6irzYfAzScFzQaYouLF19La1T5XSeH7g5i2gFaAc8mrjANayeT7mWyWsMQ9hyi4C9oW5uc4",
  "key3": "4343Wem1FYaEeUhWm9yahGDtfgCC5WVV7z4VtsAg86GTNHQJyNVBvvNnHamgUHtE754jKzQnXRUuPiDmTFUGDdYK",
  "key4": "r46DsCvaHm7ziwfQUFQib76dxDn3GYTha5nbSUbT5CbMShJc3e7haaLbGEBuzjT3c6pFoCiAihKXthvLr7tiFa2",
  "key5": "4KsC1i4z6K9xWUae74ZrsZzmLJfwpoGz2r4978UKxdD7SBoijQGFMASYiUbBY2MgR3YBgscNssLAThwzVG5vJ4sU",
  "key6": "XdPqv3SFVYLEXppbFCQYrQ2gRzRe1AyRx7qgXRjaBRa5en12Toh1atqHtZ7PX9upyfWgwPxQJ1oHEA4gjLGidiD",
  "key7": "4uZhnprYdadVyJLKd2DUy6EqVijU6aGPTdLcusfdXAvMh84Eg8W5PthUFzA3vs7FWEDFT9p9CDt71eivcBJw4ZFJ",
  "key8": "3v85Db7UD49xQpYeogMVnPZ5ZfepJnxFqAmqscjkAxVALLSC3vppR8bMLKDvzhBB8c7NfLZWRQB7qBLYVsBSWARC",
  "key9": "fjRgvgFt3yk8Ro6nMzieq1eTkX55AaD7LeRyvWRekUfToTcoM5bat7VCEU2SBWR9aty77UeXdtYFeHUdcpcmhkr",
  "key10": "zrXBynFWX1wZ5pKgo7d3voUgJ9eYEPad4tJhikQCiqyoHR84MtwLkYLg1b2N3TEMDkfySPKo6Fe9igRAX4QjkU3",
  "key11": "3u7fyLeahawyTqXqNyRk33LnHqroqmMxvm2cDmM4GzKnDR9xCYFGW5KvS5RyqKs4atqyRa1eXrS9ZBoA5vMJ6YbM",
  "key12": "5RicBihaNdDHpmfUZpsoJP71oFeFwW5xQyMY2scsq5DtcKcMai7EswqX2v4go3PAmYsCRo3GD69xayyN3cfM5zQs",
  "key13": "5MwJezfpTr4fsGPXP65pVsasZ4QRAaFguoSGPjdYpTQqokoEadxji413JjjMSqe874QRUDp2xEgYBdUsZo9wy9mt",
  "key14": "oPs5gGHjNZCK2gP2ogcb4Jsh5yFuEQuwEqx2utfhWsn6aF3ybumgXqU8D32R7Nwxmi4PUyHSzisNm85UbfccWnY",
  "key15": "3Naa97q4QcaprH1wWiTMFNMNjbNKTg9MPvBkG8R8TUQ6hoY8CCikNVDQ3WPJuVo9FdibnQ8uiFD5azztPBLg5Hx7",
  "key16": "CbJZVaRUo5GPi3xA9LSHRB6ou6sYh165VpzCS3eT7NQ8g3bDKXCh589EXwV6HoxysTaHJXmBRZA1je4zYAhSv7G",
  "key17": "3Dcg9GyZpEfhfhFPvz1f9XUNVUBFiVByuH5Snvc4ZQnYexq7FcboT1R3naycMjTFPknP6UfJrt2MGNDB3M2kwdFA",
  "key18": "TFtny9pjprSsXwmSC1RmT8qcq6S1EWa3U2gqL9gY6A9wTZQag1dKhk5pNFosEgPE5PC4pCk7gZUT6eAtn27bPpM",
  "key19": "TUndQv8p9ooQKcGscmm4UHprjKpnYEED3Wv6Y4zbn4FgMKcewK2YSf9faspwKBsXbQniVF6awFEQFUrjNiavnZa",
  "key20": "4zUwYH3q7aQ4qXXSrcLaajU4Vr8YysS7FsU4wnLko8m5KcJkFW14zd1cjVxJU4YVewbHiLvguUKQqapx2cxib49x",
  "key21": "3DDsqGRD92gX3qZ1MBDB3kbPqgkUy6tVdkJBATQQsHxfRrbpfpRccrDpF6gEFN92WQYhRMLhMnBPGx1g1Ftcgmbo",
  "key22": "3T117CCUaWKUXntFvCSDmPk3qTB1Y2rXXTTbd2jycqhZx2gLYR3Zyq45PG1q5rns5fhL9DZTv6abrt3u18whYCpm",
  "key23": "2iuUum5GGHWwS6w9rHiYEzMycxDSvQed6PFSFaA1mZdeQRhUM5wwyQSTh8EDNBG2YsUeyotYX2VuunmNfko6FEEE",
  "key24": "4YJVfFwieyAUbYLDvCu4kEoTV823fdoHFiYjALE6iKGwLK4AKvgLtrXMWGhS5MN2EPKDZKQcsu7j9G2yRdShthxp",
  "key25": "dvQkv5NHhMwZLCT33CM9Vyhf7drq3eyFLmT7bJQBzH6DUkgnC626VAaqoE3KdptwPDyWYt1btYyHyuykSuwiJkn",
  "key26": "niFe7GrMRetYx2MG2FiBjZfVUipGPLTXqUUQg85uTZzCmFmW3MJPSGz4zy1aDbQnDynyxnNdcYFB4evvzSVKTf1",
  "key27": "5vJDSwkQMNTrx5cEahcMXziYAaKBjiWftMM8MoKw9vEwpNKYe2hmr468KVjJ9rrjetqTf6iEaoSEGVAkHvyJNFcz",
  "key28": "4xoRexqWVWS27od5f8bHvpASkd6CtMEmguRfSh56kT2pQtKYAdAg1TCVjGkV3DYvRQSFDfj57LGphuDo2C3EoTkT",
  "key29": "2a33oVaJLwb5GejfnmyQqqeNRUuzhFA9zmNXEN5VRJrjidjPi1wia92D72SKfj82BVFGPCBPu8ryBNC2UgVFMUxc",
  "key30": "qccUDDBzk3w1VuwdAeJhtorbu2gUQXwLtvxSFKVgFK9UfHMjM2DxgArsWtgRC9B7T33Fa5cb4dnpaPdNSN2T3wC",
  "key31": "K8zzs57Ethm92fBZeMTSws3Bz1K8fGvMSr2ucuxgJM6wbAZU8Who6ivxjMcwjod9T4k1uLdDtBqJeG5NEXq8PEK",
  "key32": "5DckkQnkC7rVfezhJFoyVaKQtMiDM2kZH5bTLkppvZZqeEtEjPg4g5KRRFcf3Cz7J9Nq5ev1b639opgd1C8pbNsV",
  "key33": "35ymuc5CFHDmwp8vCWVEETvWqfCZtmS2JWjgKuGhuRbUYMbRvckfvqyWfRjUkZXawMZYEGRAmkjBgLKgF9c4M6ra",
  "key34": "2m8Wv6P2AwrCVsP2Kox7tz1zoPfZPPpSBrBBkurpqReNfDYfqW1UFFapGsxTmeMwJkqSJcGrfNkKqskJqDNB4Qpx",
  "key35": "583UCzjSNC167oDpWXjpKuTJbb8ceS7EMhKQ47FchqkmUcdR4kQZJSvwJo5d4Hw5iAjs7GJKtb1odwgKR6HLxHZN",
  "key36": "5YF43iq3c2nSmcAbdU64MQN5kHmncznh6Fea5DHZJqPDngdFmHHtBnmes7G6R9bg61Xojqe7nzHXY9YPXqasno1Z",
  "key37": "3kCFXvLxKWzUH2bZVfqxpyPsZwwriWVVqiqe8Ad9pX7T6idtYYoJYzyg8cczb3gtii5ARxtJDHtBR8bPfbkfegx1",
  "key38": "5KSjhAfLpzd8wUZNSDsdJM1mZ2styqXdsJwrPfUgeDr47yJVhkN9FCEqWBhqsjH5c13auYy6z8KAehwaioWPKnU",
  "key39": "WKpm192hM6zoQSHkfitJPo7TBCPkpzfV8HP6qaS6L5LwG4Yttx8ZA9tNPS4gaeqvVRtY1cHHPSfUk3iQ7ci61tx",
  "key40": "dgC6SkBGLTt7HBmeDhx5mVgFiosEZP5UrWpMyKdkFozYWwAq9zjG7gnbWXQy4H41paioaL3wFWK2xaaLyTVE98X",
  "key41": "2o9E2BK7Rj5mN1qocordVQntETBaRYdqzmAiEr28RAGhmvBPRrGV8yUxwCatYy5RuSu2TdAy7gUq9g12zEhgZwQ8",
  "key42": "2uS1DYXo9jQ8MuXRVq2GN2JXrdpYapbcNhZRUrnjid832bq8v1KjRrU936mzA9dZcgmrZQohDSgah98uWbJKa9P4",
  "key43": "by92xetvXtqqaP8jt63MHEqJEiYRuRxLCiHFd1komUhZhDbfSymiicDSXG9BUKiPUHtVftBAfqNDPwh5muBMLXp",
  "key44": "5qMhEktno5BR88QzWmXoySbdS3hvQFpM7fnRW7BFmGUCXu156kpZoPhUH6CJZ7EvsDge3kdCVMXz3Ga4rAschLhX",
  "key45": "5SccYDXGygjD2k2yBDAuw4uRKyJ3YHZ5kNfzyKeCVd9suTNC2yfFUemNdbmfFB3PChNeVVntT8JKUM8z9xL8zan7",
  "key46": "2gnU4xrWJagDXCYnKz2c5Hasm9gnD6D8t3vc12gYRtvBa6ejY9zWopWJJoDdKC6pNgjRkiPHuC5xf2ei8JYePDbH"
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
