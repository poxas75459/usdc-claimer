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
    "38GXAZwi8HHGEuA28dCt9MN1jBFhftBs59zm2NfCqVBNgXqsHHokkBHFarUyjmMy5MHSKB1K9nYmih6xd8VXm9ot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pL5LdqTWdVQ7f8mkjhw8V9cg7zxnxJUCvZdo1sHvun65DZZzRHG9TorTHP2nxhVhVoAGTF2DqF3dvASw4D34a7D",
  "key1": "4tRvrNjVW7qyj5QPobDSc6QetDRpmuXQHuzdhfiRsBbC7SecpMoAZuLzd3E8sqbH6bR3UnSbnHU7GCWMW5iU8aoD",
  "key2": "5DrAQTjQ2s3Uyq83GJjgHbGxXHX4cyLka5xNkeugivsD5DQJtyqdT4QnPRTvhFE9YQSwjcPYDuLAbu4cjsvRXCf2",
  "key3": "27wEPAKFYBRaDWLBgyMaj49fNPBDC4ogCU487fya5AvFHm4mrQEajQm6KmwXPALkMwRzn89aF6bG67KKZHVcCtWi",
  "key4": "4T4KKHVCwvuqkH1emMAnXuvy7dtQwFTEw325PvYy7j9ddb4Mw9gk9FKkaV4uj9BLwW2rkHL1nNJCDKmARSA92Y8r",
  "key5": "5sV6WkGbW4y4fLUWFi2vaowk4vWRD8FX7kMA6NpHC9RUamc1ocWjLEQLPBDcSC8RNmuNKwu3BEyJWeptkpjueSCz",
  "key6": "3mocnCqX6qGZ4KLoTTq6neS9RJo57zMv4GkbvQS9TLQscudGrddzuPiLnsoc94FrRovEz8QEFizRreiTmWWJgkKm",
  "key7": "5CMpfaV91nCjgesXtqGMsBQrgD9e6JYRSdzBjWL5rWmSeBDbf5ieWYUBRe7annR2GSX5MKArRozC2ZDC3imPhbdw",
  "key8": "5WdmE3oVVVCJrpDdHmCXbLx4STi2RoJZ12FKJ3ub28tLuKXRXKKVpYdZQJpLz86LBtWvqigCX4kyXwyifNokqdEz",
  "key9": "5jT18GiPV4FngmL6qscULAZ6wgkbaHMPkxPs8AsbgU4bvmhYChmk6bU9ddFB2nN7SqGMEqnRZyXzHBsyXK4LyNGY",
  "key10": "2Hq8W6LniddcVmwQkmuzaAJioVbP2XrsYo9gd3x98Ugz1vS5CrWExKPMASfUfZi4vSRNVVfAZjZZJBYh42hAfU5m",
  "key11": "3VTQrcgY6KCbgUzLeebGq3CjmU1hrAjqhQRvyEfAJj9FSS6a18tGwREQbah4pyk5GKhAWejcJWFKBMMw8WW6d6e",
  "key12": "9pc2JcyFhH9xKcA72GGXXUjoa8dHYiUWNZ4hzAuX84n49BVmJXLXwR3HzNapCeMhVhuCtUnvMWijNy6LnDygJCa",
  "key13": "5MudB9wYq4dugbhLSLbL1WTQKLuyJ7x83Umic447wPvEtiNPNTCHiDwXGQ3kQTV2QYFdT4Cd7BXy7rSq3thkEynU",
  "key14": "2UNc4d5HUaMDRDUYGLufzudbcyxWNr8BJUJCWuJx2ap8Phgoni4EvaHjBduK8MVFGXxpWipMoTPc4ESwXP3PxgKi",
  "key15": "SCvqu1UZYpRLF2rGzAfR7aJeToVfbMGvkAHStYJuHq63wcKS1AioM6G2GMJJbPW6HC9gtvfL7J6QYjQQBMsDQkA",
  "key16": "2PW2Q6eYmocMzK6zhRYRTnSyYUrSL8KrmXVoVreJZ9yrGdpqvNRpf5qAwJGKBTKcAcMfkFZakHyUwPRma1ACE8aa",
  "key17": "4Dv7nFcjGX6fKt2reT68exMougVUKu5VwCric1BkcswK3eFcmCsmvCdKG4e6LaRJmDd18uB32XvhMnvMKywoqKAR",
  "key18": "25RYDmQLns62htsahUxs6mnycKD5aCHt3Tg9kjPwJgHrvxEeEJ6nLpzAPFrstZQW6R6CuC1pUiiKDtgzPpWKs6eH",
  "key19": "3XF8CzJfcmhJCuvwqkvqfYezUvCbqfBRQZDMawujxTQ2PRo4BW9QWv3GUqw4QX79BQmJi7zrRaRK5j5nG3z6c1v7",
  "key20": "66eVokSVfVSVAaemTEfh7Pax9iiRBsyfpXhv7jtM7YRpBpXspYrm1FrzMzm21itpd7c5bhqa6viCUFg1QRE78CzA",
  "key21": "3iRVrBozYUxYT6JWuh9c3NVeLACg1nhZp2zqYtJ2Yn2oioR2GRJytzSo6z5FfV5pE7RW9KdmD4k2V9cx3akp6WtX",
  "key22": "3Um6enQ9A8mepi5CQw7UHtH8C2NJbgUfjnUgnrLwF5GiVPFGadqRoRmYr54BQTUwqbr4JngNHbJiWVR25Cm4d8fS",
  "key23": "2H7DkVz4GqBQbCs1DtZbsbJ9RWoVPRo5DmD5HqGm3iXGzHS55X6KoEF1fqPZKaL97FtvxMCsoHm8V1MJYLfdwF4g",
  "key24": "z43MVVx2jNXMnYvP5SuHPvxufYstgYvhikeXL4mMrVGLDCo9YS5ADjSq3Nfb8LjTBmBw4iU6uAbgv2FwADGGUoX",
  "key25": "j8Z35awDF9DeYZhcbjS7BwCcezPv4GtrsBjq8itnZHXn3fwWYdj8urE9CL492XURf1YJhWC52cjY7G6BWwUNM3c",
  "key26": "3L1XLUKtf3r7jfYwSdPfyVcnmF6V4KL1fgTtwfFmPPq5Fn5NMvoKL8FBp3yrpMS6kTEkxngg4Z5aADE7qpoHghKg",
  "key27": "j4c7WGhLabqrtnMRA4cD2mq9qVr6De8FYv9f4K9M35ZrXbzZfawwhSVhq6vHYMSwFdZdyVkAssWE66DA4cyey2d",
  "key28": "46tdF39HJH834TNn49qz5fBYs3vcMMrEKFQnVbc9G7NK7q8RKhSSBbdjANnkqr9tDombxfBJX8wbdNRZBH6C7cTL",
  "key29": "j46MS197Yecc2ybCor8ADSfvZTtTYzGmjc57viPL6NTbKa9RSZFEEtnN6JGQDmgQqbwqaTd9nJVSBhx4Q43cvZf",
  "key30": "2Ej6rU3Sm9PYPR3JvBaYkTYQN3ZAzvcsVkLAN3Svt8FQpECcjun9ywMym7gkDSUy3w1xnozzsfXv6bKKw8r4vGQz",
  "key31": "CrY2CGdcNeqCwPLGWVcCmWEN6UVQ915mttugNDQxCLMQ5tSsAmrgZYkGpECAUJcrJR2kYMk5Kgmv6iMmAADAhp5",
  "key32": "513vfM9pHXgYhgqFFCwRsEjB5qZSyCh1Y9yJ2JR1u9WeStcttE35pQS38kdUJGXR2QUiHmrCX91JxcXvx21dhnzU",
  "key33": "4mqqXHBeR8tgs5rVUYgXw2i6AgwtonEjmUbfUQ7BcbAsBLkN9cm2onhKomJUP5Tn4XHcLQK8zfe5AyaLECpfy8SV",
  "key34": "FuDocYEr5SMidWdaiZtN1dzqvhBJxCD8SXFseWvUFBseApXhwtUHLG8sQFaC4pPYpw7q51zdjaCz2LyzuuwTtQz",
  "key35": "5itAmnnyAwnNKbUvDaU8PxuuHGrcNzCESxqxKcbzCdJdg4D6WTCGuUxvEUp2CbXnoDo6UYq6c3kdKm9oegqYgnZk",
  "key36": "5vrcKPRThfMARLnxbyzcf8KYnpVEcCU9K5M6R2tS7nTwtW1dVtMD7mTd3T44Q4Bh135ZCKDJH59tu44tA8yG5e8j",
  "key37": "4mFpp2p4tonAaeoGMAv7MYyqbWrbDZEpwwAs3RTYjjhqBrjSDoY6McRZfbfH8AdZaaEmXznstQNgf2LgjFFNUceo",
  "key38": "Mp1nSsos1tJhkrc1QPbBUakVGp7FEk87hyuBX21cyuLxZa4N1pES9ynkBsh5JLc2k53mCaqnzVJUxp5XyZK2744",
  "key39": "XrXT4vToDtGZKMgbNuukzcUWr9o7XcJSJQSyTitFTsVFFfc8ZSRhumJwo6er447LS8uwVfcZ1opim3U9Quayz69",
  "key40": "xdsyAxXbNK25Agywp5GjVzvyKYy11D2D73h922JR9X1yYfpCDu4pQCEoaAWrLNHq6hJZ7o9uSxNrX6kTv7PqW3D",
  "key41": "251PK4UKSa4Fhqx52vV7kgaLQUtqs1QnKPvJg1Qf6J9GTdVmQ5iwUEYRRwN2dPKMRrL1Hh5NXGkC2TkKCTw4aXUY",
  "key42": "2GtXh3gaj5Byu1H9qjZZ6rJmvq5ke5ETK5ep7g7GiDvHUkForZT4B4eY6HFGnekM1fYMxEKuVHBMbEVJhuzRajCt",
  "key43": "Aj6fSMoRVdjWoKA9KsARY59RZXHjMCiVFNsfzJAPZJ6Fex8eKUQt6xfduhtBW5WRAq9WjQSbSeYJRJxMQTDwAFd",
  "key44": "5UyD9JhPW1igShsCKvpQVB16KQ7qTeeTrN2aExp3w9sLNGG7Lmq9NcWy1WKkqn3qDzLWw864AuKJEmib3TtCgeGm",
  "key45": "3iD2m8iG5BHTgcuMag3GbPMqZayDvGxdgcL8Zc9oLduz1fteV9g3ZbSTNiHqLEbxyEb6xif7MyTJw7E935dTCpEw",
  "key46": "2a723kAcFzwDJKwESWr9agwAcewHKzka4Dsw6S9sixYG5n9uAruy1NEBHSQt4KZxev81S41rx5Le9JnaoJLCJekX",
  "key47": "4dZJng7WFkFh5zR2DP3NQi1pEPWyhHPawTwkB9EvDVX9UQxbTUVhh23YvUVVLMurmWDxmutMJuPhTXMTMRgFnMbr"
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
