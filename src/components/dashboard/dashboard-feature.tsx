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
    "23RCRyzsMYuphQQJ3Nj6M79k4TWKj8Xm425VRoyQBuEXbarJdQx2NZNvjJU3qjD41BA8KzomqDGe4RewZHhWGRgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AojgNMsPEbMeWWVcsAgUjwRq3TmhSYCpqfoAKjsyCh6WmLDkLQKDPtaKiM4LvbpktsAPj1HHLsik1u9P3gDwQsv",
  "key1": "eXQpEA7EqY53aENUpemZHPQyPrqdreid9N1hZBzAu8QsRUU8ts8KLM2vund6BfcU73Z38gpCijQ9MEonN6x1gzZ",
  "key2": "2dCp869qRowvJQYyGAqc3XGzHDn7iWKRpRH4iBVgbYXmy4W86Zenr5tXqJWxuXbCcgDPRnDjMAzoevFgTJ3X5e5W",
  "key3": "4mJYuZ5XJPtmjvhAVt1hwn8yinRVWZKyvufq9C3AEUp92eFAd3gvw7PrqRTSS87LSNeMJJi2ojDAEWBZgqYXj6p5",
  "key4": "4tEHrVFiqPtBZn1dQn477oPoArm6yyNmVSjiuY2geUBZsErRtE1KVBouYZYVHL1QSqJ6UpN11pUrCpJKz8BuAVuG",
  "key5": "442j9PvJZSQxwGo4JaK5dZc9gpT3ap5TzJfukdK6Z2PuaqzpDN631tS1oeppiz7h7rmsvmGT2pjcVwcCkLs9bLCW",
  "key6": "2yoTs6ywqygjeXArSNhsNjxrnzijaZH7eQvcvWAxfLv3ApqaQsxthtfRSNEdTFw6KpVFKbsF41qrAQvJZ6712jrP",
  "key7": "67h163iPw2KKHuNxCZrAtQPueukM9JCddpUgmqpVahrpQXK9JRziPiEwQZyX8EkjSJBFxxyAmdGpiMK1rzQMvqhH",
  "key8": "29Z32KBrw73MkCZYR79VqmfGQ68trgjX7hATBDfdmFbpNFWaXYtu8d3knE1TRuz6A9eXVzsnucuh1opzZi5mnXvP",
  "key9": "3Ra7g6QNuzDwsB8tFD4cURJd4Um7gqCpnpzQLRtskewnfVy9Ws96E5eAN6AT9ja6t93Qd1FvSRrVRc9mntyXxCmf",
  "key10": "2PDjUmBL2Ramuu7u6NzKneErMHSJtMqVvL2uDxvJbVMPPEvvg3ySA7LvoR9SwZP7fxAUZ9WRpy2MuUkaWs28h8Fo",
  "key11": "2o8Ez3mxJTVt4ERXKf3midvk647iimGKbdcNgNBeS3tTk77kjzVntwMMHDMkGcJKLPJ2YENcwxkBV2FnhihSjqi1",
  "key12": "5LUkLAjCEfbDcW1sjvsJGLVboNjrNQshM6ookwdBoVj65qQn8YVVQ7FGYaJHuxdoV48CHLWb3x8yZbL1o1TGcxE7",
  "key13": "46w9rhqpp4CFj8Ro5wxUe4Ahq4VdRVZUsDvMTxKCamS3BjpyHurttKKdjoqwmJPnmZZyQY6F3cQwPXm4Vk4pKHkx",
  "key14": "f7mFkMbS3dvtbtpKJPVYpZMadi9kQbBLDMML2zWvK47mnsGH6GrNacZ2Ex4iED9ihqDKhgJh2iLoYsRzhW2uDGC",
  "key15": "im5LWuxcNoyux59sFsDA3oczDgmgtjtN7osmiY3KsR3qb9Hqzg2s4UqBjXsWBPABmW3xUU21pq18Y6Z6BVH1vhE",
  "key16": "5RKwzQsowDvxXXLMmg7xLJofPRCg9DWW4x2WLN58PyiVX5otBzMo9s42TrnwWqmtc2T5Zr613AVHD93C9pT5Ywns",
  "key17": "3xUMr8K9xfVqx8ULdN9tgSJCpD5dgsQUaTVpMFxc47tqWfU9tUPPLx3yDwkVwhcgqwySTSZwuUTytGn8YrYeE1q8",
  "key18": "2eocZL1wtvDuKYEdtmb17qbZZuQkoDRaHdtnpUhQ4ZvpQvmawd3qBpfXLtffD5VuEDSiKDARjJ1vMEnvWqivViT7",
  "key19": "3zb58RRUFq217gVdG8mtNczyYxRb4431miqbbuJP2nEQwsgzUYUYhKrTga7M9YavAJXZzngftUWxwhwVY71qNTP5",
  "key20": "25wCrJyuQoQXiVt7ADabe258AtGH9vZCPYBYKx1fb4kSpCu9zEkyLGEw8imAAd1cRjy2E14kLPoLEYQaBtsaADWy",
  "key21": "xkoV11J4hKhRWHeKs7gee1mLpU3ByUwP1UbujQxdJn5zbHd3QAT957fW4mPLnVwGh3Ko23JZwGYp4VSXwQjdSuD",
  "key22": "5wDokKhdTtNCNbfHYibMLErtVeC7FP43fB9HNM27fTVrJmRLvrDWWixtjiG8jdSiPRuKH2rfBFgMKArRqbK63Xuk",
  "key23": "5JYy8JkWdMZDDRwnxKug6HAdpBCsdHSYv8Qcpz6NtHMfHYqZiMJEJUDts5YVFXua3kJXBN9cdfcsqWSv5JPhHz4H",
  "key24": "27Rvhs5HaVfGHbr5BfoYzZzxn1E7goYq2rJ5bpHDACxsRv5gbAjFL6ugLUDY2NWpNEi4vMjoFh4YaEvHmujE2jeN",
  "key25": "5YCtxsE7F57FaAJLF97fExNhn9McEBU5tfrJwmGRK7WL2iqSfGqXpBPFBrDx7zZwoGejQDJU4tyWgskhpQxTieb",
  "key26": "xvajK8HDF8TaZMHsCcQPvVNbcouzLHn7kK4ctWThyoZVKToMC9uWtdGxPzV2gmuzbbSQiBXkKB6eUFZ5ufvQkss",
  "key27": "PrhDdkvYgmTn9SD5sp6JMahZFF3RXVdcCT62p5ZLE2KTq6gRuqzMz6xKQZzydP74wMyrfnkxjnSoV6fRsTHZcF6",
  "key28": "4RvwWsvr6xWfSHpuDcdb9Dth9wWE6SewJoNqgJn52uadLK2dNHypynLKprLfthyxUcEYXQBm9798nZqXcE4ZXQih",
  "key29": "4kHNuU8ZUafEmbQ26C9kVEqZcjMhvYcpupq2FAfG85PCrM2eCWKhuhXSDjNtusKXVT2UG7GL6Ax3CCN2i6eFVR2s",
  "key30": "ArxGWnWAzhZmxW4tJnpXYCLEVRMGFHxoiLT6MeZTKoouzA5MRR9hmMnkR2escj8YCoTdBX7hcKyAChaevLK1aXm",
  "key31": "cRwivtPq6b8qTiUUDRsRoyaoFqWCzBwsoM8Nc48tWsF4QNtw2iJas6XmrLqqomxMmQpBXoZ22H3dyPgj4ing5SX",
  "key32": "3xEkT7GWduRVeZubVn1ViM8BWNzgZEb4n54Ck5oGJgYvZqXnLBBDYvm2RKvWnJ5Z5wwnXPJNd9R7HV83y7yPdoat",
  "key33": "45Jc7N7ZDPYck2JREsddJcN26hUcvd54jffFYazZpr3uyBGoJW1BdbsZg8HrT5EmwaG4G6MiArhBUrtu6NSaKKa8",
  "key34": "5K3SjrHyZthKSHstp4ax4zFP6opbA8D6Veu55T5WeDqsLa7zHpMVzfX9RH7sZ96sAqLjK1FLPfDx5dLtFxXujhPM",
  "key35": "3MBJYeri8XBDnfyynnigU3s5yGmFfq6XxyUNj8RXRcW84DdbNnB4SGT348W1bgoD7wuAx9i4BN4vKrBuhxqSJC1B",
  "key36": "5GX7GDYdBigB3TEgoxf2zWbmtE5RVT5J3RyB2ZqvYKQuH9XC4npouzjcy8H18g1zWit436yooU5bvxjPHANp6xzu",
  "key37": "5A8zGjuoYEZaQivvDGZgd7ahnYpPJs4g9LhRPLAsqC63g8p6MrzKEYDbSTJCG9uCYoCvoBocojK1qD4PRwq78h4h",
  "key38": "2wcKdTiVg9i4MVT634fR9f1ccj3HuSZox1tCnDkSEpNTd4YSvKERo1oCG4QKLj3a3tndwSFn1XSUqCJxVJKhVwup",
  "key39": "59mXSxUTQF4jXPsdKekt5HWdFcbVfchYYSgHCH6FR9XoUa9S5PMb1VyCdCZbfCK4CiHzepeMBrgTWdqKfDBZG362",
  "key40": "4Xm2oBrhfvfKYKxVsRS42Xc9a7k9b5S5qx5oKDCYH92UMoPgkTwVYK1yBCK2syDHbHZp8QUURaPUmza2HWXtBX3F",
  "key41": "VcazFmFdweV6WvK7x6QvN7DJDjv94NjEFjXihZHeUXX2Xg6gZEBiVswAn7knYJdroGSy6ErXSMyBk5mGwYrMQx6",
  "key42": "26f7EWQrPFjshWDUCCaWQKYYFXejm7mrWdcdHrsZdfFvtgVXVVuEKBg886mMsY8gu11guhwWx4jLwRTp4sSMX4fY"
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
