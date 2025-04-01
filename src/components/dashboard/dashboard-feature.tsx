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
    "2P2ogTSeVVSkG6Uy61co8dEpt8PhBMVgXjWeaJVAMNT3GUwropMnkAQJFAwVeKX4Zysbef6K3su5e22MxCwqCJRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCfxb1Z6Ha8KVrRwQF8zGPBWCT9JzxYBmSaV2JfMfPv9MTrjv3bamBSQjUxo61kpqAUkhWAPiXS2XUVCsPdvafW",
  "key1": "2AJ7DC9eYZAyiJo9EK7Y388gtgHEHaNTZH63Z9RfmAvvJRSbRhhgzcH7UhCJz4PVR6SheWVhRVsdePbiyvEGcWwr",
  "key2": "4Evu5WKrMHGenscu4J7fUMb8MDh8qCYhdHZEYcDtpowT7AjZBQUMngjswfWsggSrPg6xrN6XgbavQ2PPB5obVZkG",
  "key3": "2j4xnvHxXn7YDaCdiRoH6GQXtcUJjqjX16gnFGK5yYvZmVRT3wZvusZcfXzH5rrsmPQHsFFzHsrumb57bLyEfQ3K",
  "key4": "4Mw8XLUrrM9TvCr51q197VtADgN5Q51FqhpQ48cnqJF46TzTYZ6Hu9jpYhikrK9sBRN3bRH1ouZgz7BFqUzS1YuN",
  "key5": "keQ52tPkZkxf8ZDBcau5o1DwkuxVGGeCzYXcDVpwQ6EeMe79fRqN999xd5ki6KKN5MVvHF65JRGUdGNgPKVrAXs",
  "key6": "2A27V4WzoYxMHSgxsvYcmRerm5uf8MSMLTAyE6gZwiWDkL9BkYbCCrJ4Yb7K27KACuCmzg1oP8kL4GJHMDBfCgsq",
  "key7": "22FGedArwkZSyq8oiRMpnb1zkYGaUJ2Mt1HcQ2fGKF94KzGx1YW976VWdoQdVd9Jn9qL6B3hs6QwNumMKCQf5Sam",
  "key8": "6RTAkL1krkPFj5Vk5ZhCUVLLcsTaFmZjy41i4a7UdxFnKcYKTbGDoebkKK5NnQD1t8C2QFfN5kVkf8UA4ypq1PN",
  "key9": "46vREEy3yj27jw3LxbNE6y63XcG5HmJ1ygmgbwho3yErwn39TnMMYGmLxe8AGsZGzeWNBDdp4WQ7FmDjVmUU8cLb",
  "key10": "4BScqK4JhrNFXaVdekxQ8GaNiBg7YB7YrYvbkCfPNaF5xUQaHBS5J1G9kpfAkFL5CX7bvVmFEWZ4ZeRyyGPYB2hy",
  "key11": "32y25YhjigYtnvtLpsPEcVjS49CqxStnZG6rhmE6onbF9ivwQYg7c9rEwyVJ3ZV786enE1A2ZZaNjzitnn5Sa8Nd",
  "key12": "5Hq5zpnRnSHmgS1JD6qXtyE1pQHZyXuE59SkkTNyYqoyqLU625KgXYjhJx8vZBQ3r1oJWRvvpEQ8jz3Kf6n2tHvu",
  "key13": "5rbXshddheCDcAUu1jyeDA4aJgQyCZqVzqWuLUcwnaqNaEdJsD9koR8K9prpr3FwcSP56FiRRtjotGpArVq4K6Sc",
  "key14": "oVHcPcuKd8oNMzALgu8MQ5vpdxRrxsQxGv161Qraqdu9Nk9LDGNRKWLw628To4vRdBrR1m6cL1MvruXmRXnueoV",
  "key15": "2oMYGVTyZRkSuvAQEJ4xebXwRT4wSVb9zhY7PKGZLXjKcnGDVwewZS1z3oEAqhubw56XtiU5YCXfpqjrhUPVEmjF",
  "key16": "5YLGnourTiATzvB8Kta51hufaZzxsZHq4cDL3YzPRLF7Dxs3ZyT3yztxmtARmR3K9e4qWQ8tgcCQ8zogztCzQqqy",
  "key17": "3FAhhuKkRE1XLeKhj6PZUyhY7eFzMkiajCtN2XmxkmQFB1vXpnNf9MVDj1Xdx2QPwFxNag6AeybXNfR8wbHmApk1",
  "key18": "21R2BdvgPLGdQ3f2aHThKJnno72qJva5YbXfwP7tX7z43s7LfPye94EdYr7kukkheraFnTW9f5nyhbNXkQznr3PC",
  "key19": "5rvZMzYxM3bLvFXcWY6MGsNywLE1n37bG636ZXrPXW16orSwmAFyPSaxz95cNyRpqgZhZMpFWUvvM8K6gPeHZA9t",
  "key20": "3J9G6KZ8CTQ5kqQyBpVKeV9soakoE4eEb7KfQUGRV8Ygxx97oCPQhoUbpW6QEgirKJYoAi8g498WJVUnjwCByyGv",
  "key21": "5iSnSafMF4RU3SpaLRsihidkP9cqBKNHmwy42LQ9a39xjhaC3TDGHUYNPkzrwW7AjU1Bk3iQv4kosb5XhSyExSNB",
  "key22": "q5YcPYAhJNioXFzzoUbLiwq1h7TRLZg7cPVbcpact9xwjoLFiWQiBjwuuSBi14qrJwTqnDA3s7EcywJbZrStH8C",
  "key23": "4JzAiF2UKfLBzQ8nU54Mm9LkLs4tqzdtz1in2zfHQrhZCiWHP7C8RREuLbA6zQFEp82zQiYEBVo6QwAKY1afUQpt",
  "key24": "5xGz1sUwjC2Jik8FYZ9Xzyk89qbNsqatMYYBvQiUbbU3UAo9jVqoYDwJ5ScoVFWycjfKh4y8k7bgZa8H6iuiNLtX",
  "key25": "3dRMm1S8DE7zgzwoo1NgsLqk9iH4yB4g3B3QXgYyRsHdYNwWwjSph1XFwJcR3Q1rhRWPEnzP3uYvd78niYEjdZb5",
  "key26": "piuANQftEJYJWcqPRsJE1usRGqhJpEPvbk3eQnmhT2bFQL5B26Xpmi2Q6qviKTaEYKSbr35d1KmDggXt6748WoQ",
  "key27": "3ExeeVwNZv3r7HQ8V5pY4iHzjxmoQtc4osKc66wc586kM8uCtpqV7zgbuaqSf4tGwPCRvTbvzRBLLA3XU4dQuPfp",
  "key28": "3Yfgt2zAszeLE79bg6JpMr4CzXbWxq1VMRNCZLdjRT2ERUXs1UBbixQowWCAQkBqa9AVVTPZZPFnNNLH1m1A9xKL",
  "key29": "41GVppBr1Gqv7cNCFj841tVefyzi6eAqY7YryVpJMukC6CX2HKHkTQPb62moRZfsPb3K7nLKKiK32mTqigv8jZR5",
  "key30": "3GLcytEnGV2DgTxotsrpPamUtLGH2x5MKcqtUHEpc6nusuAWtg9XhiGjyLhuNwKZGYwjCZdk3TJPpJhbChivstxu",
  "key31": "4LzzgnLbE41ffWtci9fYWCxfM8bChHKe5EEyYcT88AcKjgrYYVs4jt1LCoRNTQ8xbBcTJKhgAjYY26t9ZKxCnAiU",
  "key32": "3SdSXYqupXLEjwZAvHSFn6aNHZoFzMX5kn3BVA9xqX2RaYhaB1QDaY6Hsiw6ZxBohA311cHB9MRXHA9EuYQCk42J",
  "key33": "BoQPYin2Xv5CusUkwR6UM8JT9uwoFGDEcdUk8uosDJQa5YrCkYvgWYfJdSShjMHeWipWREjzzaJGyKcFWReRxZg",
  "key34": "2c4MuKZPhCm9GzjMDbAZgxnLke3kCPGiAou9HHNmWG7FBN7NjiFNNoMQbUgMkGuxQkzQsPSTfa3juMz5HXaGSctZ",
  "key35": "G3qfdTMbkV1B1X4zVbBwza16bHJdWdJXhF6EbjxFZFNXCrouMR2SsQqiKPKBRLVf8UsUADvCxjV9TvfQibmZuKj"
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
