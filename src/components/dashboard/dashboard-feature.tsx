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
    "2MmkZQfertb9gUaLwaTwdXMohsdy7b2gEzrVe2pzUgPx8NJhowwD6gbQBDkj8zvQD7igkJt6MBhSopxCVcXaDd9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QfmgHM7V2JUoFvTjnCv4C5FE6dAArC8MWozKH46cgWbbtWHwEnBugnQtw9tJ53S9JPyfmreJ6jULzJt4uJRnj1r",
  "key1": "3G3SsxwfXNxY9RshnbHbs3XSc4A2RTYXhokxroz8vSQfSfBzMgx5PEP8ypqNa76QzwQn5NBUNjjCwwt5x7VbEZhQ",
  "key2": "4aUuLuAEPqAiHQbH9Awpn3P3qWVbxhEnySKLTXcSCfAB8dKCgTvnG6F7rBgvkxUiLMtCBhwKWVoBHYJnJreLri7b",
  "key3": "GcwHT9Ymn4FYw619pCisxfWUG9jNAZVdcFsxXiiB93LuGoVFMDVWgV1aZ9AmceyYhukWkcH6GZ6txCUTyhh1Az3",
  "key4": "3xckiYFs3F2K9yz3cLGZnqSvMKgYGGpxTbyQSkU4bAJ3abeaYiLuVgPziMCDPCsTchX6tCDnvihpbRCZfGRS8vzF",
  "key5": "5vzLLspYTmFRonkNTwaNTVaqURZZH6KJn3fq8cNRiHXWGQMx5KckH7HQn78G5VquKkMco28be2j9QK4d1L6W8tNe",
  "key6": "5jVHc4CX6LdeLL1Fmjb53PJofnXrL66pJsiz71WntsDxGZZLvfzvyHQqgekFBWKv3YZZYDYhpUcpz7UojUK1seWJ",
  "key7": "4cVWDW8WnPbnuXUDWyA1jJbfGL3tsv9XmJFDxNVUoUjy4v4L4QZszwPgRGxBtJqjmp2iL2xVvwSGtcJwxjb28LGm",
  "key8": "4a81myZFErATdsR4AxnuGsZnLQKGpFWy6CTHofhcdcWkxSuzPiDQXFurY9Bkoh1evVDedaos38ungV1g5dGCRSTg",
  "key9": "3XVx3eobmbY7kW5MYCxbfZAT6jar2S29FvnVkEHCkfkiLYsLSnPf9TbHAdun3t3PetQCQsaUMVgczftHqrunMaNW",
  "key10": "2X2omUGeLFdF7EXA2j9SMUsG95P4vawauAsjauhMnoDqMYxq1cWbrpvvyRJt15eqZrLz5QH1Ebh4qqQSMZu9DUJh",
  "key11": "4CNGJiiuL8LzUMPv1mFMme27796kwNT5m8y31mY4o6YxyZi5YzDTidbNNzrCAE9DE1guBBVQQ1bJ7xRAQYZd795q",
  "key12": "2vrPXrDgy8Za6MuUaVzSrHNN7Nmpfb1ptcvRRwjFnGJqo9UCP5NKrPevz51DgNkwhDm3kqUEXB52ztPf3jgcucMN",
  "key13": "SYNRi46DETWyrPZ7t23B2hNMrdXYvdKcJCqqb1QQ5LiZL77MqrYzG5kdQKsrRRMb1QSEkBhVABQdT226MZkF9Th",
  "key14": "J2FK7Xk4NzNGjnsiwg9kZJtcZHjUKYXWu4Zm9TfBLcaTsEk8NSZgS33RRAK8s56KPDnhgPzx7GcP69wxxdzvcCz",
  "key15": "4KydZP64S1CphGMDyYK6eL2JTZKvVuGVuDZhywuie1etTrYZBW6gMVGsRJ9jm9RrGgsMgivavEoawhT4a5GoUqw4",
  "key16": "5iq7zs7aUXmifvonquLHTi7A2oczy95egFHYzvP28CMSL1bdu1PwjAcXNprsTzRP9eURMePT2zu2ZYwBUEsqrWB8",
  "key17": "4UMesfsCtvPzZVFnC2hCADqsxGqatdLq8J7hcuL8YoEnrjnvxJEoY7gmQJmVNE4T5DcEs8PhmeCSTddxNB48aZMz",
  "key18": "38KEWZeXsrtyTuarhwNymoGbynSQn64ym62kUpnGh7jXns2tB2qewPqwCS22Fa1PZH7NHnkahyEEEq2chEN914ut",
  "key19": "5wvPGzHyVbeBgRb4BhQxh4BSfqGYb9PpLqvMA7tLrBa2Z3PaREdfQTSkW8uTtH3MDp6R97wFBB4sdM4uS5FfRJWh",
  "key20": "2Yj9syeTaqsLwdQzMPCRGgTVoxFeCKYi59AfXXZaRLqqA8qBM6x11peBMYkawuSefz79DX1jCrE7vXZrVpWRsEKR",
  "key21": "4K3w8X5RYMoUT1uSyarzXb7tVoPdqMX5JZJQ7baEHtv9Tk1DZuMchGgk5XFa2s7zVPweLW1CbWTnNiaCrPpaqsf7",
  "key22": "4CcyQ61WCEVK8fooZmPExtL3Ucr7dfZ97D9NUmZz32pSd16KHBhxHUP82Xa7wXY1VcUaxGAuLZpJRjDocNdyLsSE",
  "key23": "2c9tYKNfjM5xXimzoHR2ViKxPnTAd71wtFSszjtK9zEUwEwEz3yobHbLrc9x84GN4BSXB7J61o3cAHCBC7hztxkr",
  "key24": "4bHqrYrqioBrFHzGis2mbir5QeMp6ZUkCVWTu89oV2PX76QFWx4DGx59BiuVB91aQ7gS5QBJjPrUea8EHqzHZ3Fn",
  "key25": "276BCXA6uipAA4dhtZFh1QsN34uhvfJmi8jrGe1MTDDKG269cAfVdWZY2E74ZjL31XSDsP2GBtVmgEyFnoYZhKMX",
  "key26": "4CL74KeVKX5gVMbHdE54QTW9UJAdznpfL9P4QRSyfg94Vr2cnGet4hdfH3QHfv5fXFVJRvKuA2AgucGGohcijFSC",
  "key27": "4xsuV2nPQidcmuooPj4gBAYxJtC2CdFG2CXA7vwtKP7i6dK4HYQAzQoxUQN5XQoa7kMSxpfAvZp8ZhNwaufaVwEi",
  "key28": "3P99RPD6QzJMdfUhMWM5yrmaU7BtRs8zZyLG14u51BFXPnJ4TzuNd1H65zPxmETzxaNLhNfLB4UWcXw1C6Yjq5Mh",
  "key29": "242Dy9d3nHNGg4tL9PGKgfvXsPKqcWWX4EDWws9MR6sYeyyVG8wMLcFXbR6RBa5DvhNS5cqoec78ehZFvk6rY7Bz",
  "key30": "42DqwqK8a6x3PHj9Z42EGwTDSQV3pRwUDRWCuAUF5kdmTyafZc63GVZSHuQJWoTLfaKkaKoLMo4nWvBRJK6GiVb9",
  "key31": "31r3SNZUxtLyRRqRv1nK7FT2HECguq6boTTiro5e69FQxo3DYbmuQWAYWyfbkmC747zcGhjdM54e9rraUsQfsTQk",
  "key32": "5hRaRsFYcG9S7MiwHVWPAhYS3TqWJPzxbGa19JSFRrgT2EUs95xjpZj61jQXgMD2BxxfwLCUde3r9yJpJucTaEpd",
  "key33": "2t4MbcnNdxCKNWLLukS2JPQAWR4GrzxFUnx4oFxMkNck71qPtkoqhzMFVvPNe7aZq8Fo9osUdjBbc1KYqZJrSzKi",
  "key34": "5gXFBP97sNdyt2m3MauG8vRSqodPS44GPYNWBuTd28MXQjJvXQnQDupHYc6Z8J6zQUeG8ahH19qfKQrNQo3xpYoF",
  "key35": "3GHn23bpCVcncZ3aHJjCKFQw6PCA3USjjrmS6k9rhukNbXAsBREzPq5WzsQEARjyQkkHxd5GMLzA1Twb5DabNuKB",
  "key36": "2Gc3eRDahJAjFGbFeBC6cD4h5LZmZJ3nLAPwGuShxbkux4EdV4GvAv7jEJezW9s1WMwPVkbLZJ8TvKrYnLQWdkJG",
  "key37": "4caJAQnpWSMpvR8zcLTMDSLLm4SHzUrYkjPXohtcXyKgTvbMFKyPayXcevmRF6Pd4w2tiARUQYvHkUewj12pA3fQ",
  "key38": "2JdC6JKz5erQ4UTcYcDNWwsUUhwhe4h6Cj2C4BPTNu73A6DQjimf4AE5zoK1shufCnex5YS4HX9LmmDRomnF3vxq"
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
