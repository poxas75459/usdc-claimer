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
    "VZw6BncK3ejwWfRvTMmNuvkP92wKMaZCDjeu9UWZ2Ntqr2og6FjYo4KBqqnry36YGBjQi5XQbFB91f8Tqa5DEVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wniZZaf5iKpAa8QreK93vUm1HhJEgZSVaeHqLiiUqSn3GoXYpMFdWqKm2zfUhovs9oWuBg8Dug8pDzPahnc1gZ3",
  "key1": "27QGk1SmHUjpjXzTEf1yraDKyEHBUA7QKscgDjg5L6AMHQr8C4fD5r7xzH96vpokm3tXJEFu5cNH52Evfpm6h5ey",
  "key2": "4SXkjmr4RQa4YXV2dJkG7KxBxjwEoowYUENpa55GNVyEokaFx7cEsbXy6KwyexBhJdppwxrtXyLEQYK2hcmVPBpJ",
  "key3": "48QfyscM2VPHZh5Ai1csvHXUTm2Z3ZQQtsDVy2do9Uq24qWqh4GTdQYbzmHXzke5sms3Y6hRaNM4RRzWmgu6CfQM",
  "key4": "YKUMhtdVWixwnuBjKPr2E3Uaqx7krA8QKDCTY5oJyBxfbqn9uB5YWxU6KSzZ5yikaKdZxVfPnBnV7AHyaUUY8T6",
  "key5": "5CDda8oNZfYGX154mKWcUvc8Vf4hDKzbKcKb3cmpJVndEYvLRZXURxoAMExfL5eqmjPb7hBcEMWHoqcNr8WARpva",
  "key6": "4vRKB3KadxMuFpAVDoYnAbbPms88jvYgwu2NQ6aT8txzusXiTrhEUEo1ykRxgjRPSCJ5rBezZTjkoi2n1QtQEgR6",
  "key7": "5uLhbF5J3HWcb47Po4KGTUB2JyRvgyiNc9e3FJxKeMQnWkBrt3aE7sGFgjRQVqwLmrGDfn8KB3czTqvGfLgQf6Wk",
  "key8": "mu8KbjkxcKs6nGVgFvRYCZVksF9eui4XmpTb6hU9D2Yq1iChWy55mgucNTZJ9QU2SduMenHh1HeiBgnJqakvvad",
  "key9": "LaxCCWHPoQg5BYmhx4MLtKHTG6K1rSYn2fqxTVvVygzQSEMtuN2btuAZ4bEdPN4wBWsU3Utfnvh6G3mpVA2qpqe",
  "key10": "3TNGt4SbzVsZS9AaFpjokY8VdbuJDSPEskUBiNCkWvXetZ2KGHJSuqM1LFPdG1JKTizV9U2kCjeKef95PTGdyg34",
  "key11": "5LMnQQuXqseoBKYD3hBfwiwhe4btbPBEqgkSjv8yZXkJN9VdmaqLea3wPhXLKY1wsQVtJZGRY8kK7CRXiw4z6a9V",
  "key12": "2SADPArgqjSDn8W3wcZnaXy7r1BQX47fd9xnPZd3z3p9FRE4nuDosk3jVb5pC39q42oNur2p9YoTfHFhtAecUgqw",
  "key13": "4ATHnrpmCX1FaNyctFq76MrSbqJFJnjm3hJepPfmnayZoa6GnphvxE93diYYmxpGcbQYjqQfwZFdjj2ibxN2jDwi",
  "key14": "Z7ZzGfsp54tapupU8qkcwkykQhxY6SbwsFnvUEhUr92QC7JyBteduRS6tc7iudcJTEizu7VKDefFSkMCSfZQQYM",
  "key15": "4gKQ5AeGkLC4h26qPwhpRAn5ejRbowD1RoqM6oQStPFpWRn461qa8Zs2BSAEXMQxeSGwS8uuaPBrAafp6eo8rc27",
  "key16": "4JpAYnSGwztZJcrHLx7DYX4ZFqA4vsBQv8DGjCpq1yxaYqHA1khKmNkTapsUFCXwHn1Rsbh1wWkV4SaiMeZD9QfE",
  "key17": "5yBGtzb8nTrap21X7NYXwY5ZTyUh5JFdb24n5PqsMeo8ghgizNf4jMrwwZ6FjGZp4ig7qxc3xndBNKmFWYqX1ueo",
  "key18": "4FBQEsymBhuCFa3NTbYQjcJTpDLA8Hmb4GCokt52QS3CVwjZNyfoGJGbz61117oNyqScnw7cEcFTDoXt8khfBbQa",
  "key19": "2aVT21tZZtC2BNTdqV65sY9DXpRSFEFUgx7i8SdVJQ27NXWY9H6PgDCd59pmx7NNzc5sbJHitAqgvuHc4tE4soQ2",
  "key20": "4LyJAKmFkeSEprcQwRAdB6jekHPhTD345RMoRf2XFL6o9EXFj58EfeJanV3unXdwML8KKoNcBP6gNDNtM8kEZCis",
  "key21": "zpqCikaH52qXQjSdWJ5oZEUXizy9K6zanAsnW5ZQysL6dAemz925AFxNDAovWau6AUeonz4mfcwkfRfndqYeH4v",
  "key22": "53Kuya8DtiyofjMaSHa5FZ98Wa4ZDeutXbzWgq2n8m8HvGv31SdU5AUv459XaEqwFAxbK5YD88q8kGVgERbMNJpd",
  "key23": "zvQDajRcbLWyTejyKmFBgexLCaNq7CL1J7i8VAH6QUejCj2aqLud7GafnuCwxjn3efV39hhrRZ7S9J8uEmu1sXt",
  "key24": "2WD18YrKb2BnodGqR7BynbokXW8tzAUQv5TERskRxejBsoVUqpRDYb1bMmCm8QxhoqQUCr9vVACvbQSo2CfaxwZi",
  "key25": "4VizizpCPxGavKFgKY5Ks3JwkvAA1vrp4Sgz62cAfwiesaXpL1mGzNMb77y8Vij2sozGtKdRqd7DJ3LYJ66dJCT1",
  "key26": "v5M56JuXJPwve8XvsDkm6dwo2gW6xiLh2yhTdapdtjDGgVYKnD7sSmTB7dz13RWSSR3UAYL6kDyRPrEpRVQ28Uh",
  "key27": "5QrWaPN5wsZYQwa2FXM4JJPqjmeaGcFJdXyX8a46ToYHhwRdDNwkdBCQjx2UFdD9gtZ9uZXrmTfCx9dPBPgmusXM",
  "key28": "3usKrBvUka4tXesu5ztzdTD8vtqtgXbCrZXjn1xGxHRfGkphmLLz93XeRpKynY58hQcgHeH9kNGyYJXG8EWJ1m1E",
  "key29": "56xd74QQZi2fNayMGcC66dffVs5nuZXH58nMnDH5NkiMBA4i5sUqhCsevWuLQpT8zDPRJkNe3j87NHpbEv9rX2bp",
  "key30": "2gcVQZinuZF9KQh1FjQSo9ww8YMfiyJnVLs5GWP4SPqSuEY89o8BJgZQBCUBx2e4ZScSvYCRzWka4fhjLgiVHzBi",
  "key31": "3NAr1AGRj83kEaBwDxaeCw1YmuFCHm8hhTDnTGLJP9uZVYcBLx598fEryuFUj7JnN8uZQSuU3aNT9rggdNFzwQjK",
  "key32": "5shKkPEx4ESLobEAkRkvjAiwyFK7rtaHRq9RcufavNkhbCuFRKNLTB2HYVfyeysT36fAAG5A6PcoUgULM8AEBG3H",
  "key33": "tnZtj76vKWqHGVeGzaFzkQy9p4Khuxu3iSEVimBBWUh58GPiE3SXLvYLZQRwh4iCJdJZCSeZRGyDBGXaJ3Fya3f"
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
