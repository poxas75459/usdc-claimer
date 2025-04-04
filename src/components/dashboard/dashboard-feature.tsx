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
    "2FfRSGkBfDb1KcEGd7xeRisC6PT5tmrnC88N7kLmYwkNRryRBhHRgDjxKtsPAoEyGu262LcNspY53RGZD1m2HKHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oo6yEW8JmcQBHvYCgKnUvAtQizNRXFA4fJKv7MGCvra1ZHVTQ2BuaTXcj4rZJAXBiaxASjhQqFjnmTCXozr6KPj",
  "key1": "5zry2rqtM5Av9ESYiv8eAYPU2YRt3J2W1urHAA5BumcensU2tHbmSX8bMcDyf5KZzB2k3oDH3ojhCF6DKxXRAi52",
  "key2": "56pEvmxoXybFZSGVFKoH5CKUmcTymanVJ44TdgbZHEvbLHHKuBfzpnUh8V81NTPbyyqDYoXNdVkk1teguzQoRvU2",
  "key3": "9v4dMo7yNLYxeg8PSKZddTjR9L3SfvETRni2Jj7kHiA61TtQnrVTzKcoyB3E7qEs8MVWCtqTHNhjwrgNnJFQeoV",
  "key4": "WgVFocZPehwNBTcoSNTH1ethG2Htg4umdcAiWGME9EYkpJyesdXQ58F1mvzEfkLZP8nU4uRwkSkkvHC37yvJ6ir",
  "key5": "KvdTd4zDPenB55PxU7FLmYcP4H8STXpi7wVAA5tAxJhQnTZgTDQB8nnafgusKRfVDytgwyQqTtLKzX1ryUn1P5Z",
  "key6": "5kHRbRJv2U2ZMPKfVcMEAmYCHGJVR66LoPUTQ1uJNn2ZwL7EF8FejMd81DRn1paKxN5AXaQEc3z8k5k93iGZRJGX",
  "key7": "3gh4graGezqsz8hCAAYmM1CKMHVT1Jpoaez1aYXF7NXLcBxi1igQ7Y1tj9ctzfkyD2L1hPtA6PoGnGB6E1dSrs5o",
  "key8": "5NF8Yk7RZvdvpJbjDP17ZZWFAwsmJ6HWHvwKXgY7GqGMoTf8vve2nEYghSx4jMSbWvMBd49s1imxUGxe2ms2YRKv",
  "key9": "X6LAfCgQFJJh8bkVNn67Ktw6bzBi55CKzYuYvMFF3icuiGyARwweDWgVDZGbaPLSeC568Ahqhq5t5cga33du1SY",
  "key10": "4CkW7QafZW7JG9gZgQhATVdL9ZVZ6ftHc9gw8t4C45JCX44jQnvwEC78AyAKRbAwLh5Ghbs7D9XqAtBQChFUkkq",
  "key11": "5XhBdfWxk4rBMXAN2qCJUXMVH3eXHUj8CVCV7CZQwpYhQnfzjBEYASpZZcVJJG77tJrYERvk2BwHDbmPKrCY49Z7",
  "key12": "2tAqJC6e3fZYobWaLoPFRg1i8V6vTGeyCznz3rysPpYp52qXYCvV2xMwwKTwfMzoPtAMYJ98pCkNTPmgnoUNxEih",
  "key13": "chLRupw1RLQ1xVVb2rZUmBcmy4nMWZowDw4Emc77uBbWMaRP6fHF8M5XnEv91qyB12swkm9Kb1YQWTM6vRcnpod",
  "key14": "2jvs372PauR13rmaSYEZtX3mD1n5jF3Nj1xqPqEawqASxMdBYjgQjPs5EPFhqq72FqTzdroyRc7yqiyhBNSS5Wj7",
  "key15": "3cHqnZUv3nV5Z8GmxoWkG7Dm2Lh3MnwpeVncqRkc8jbPreaoNL6eiQUusbvdBHYL54R861tVZLAv4YqMG9ZpdaPy",
  "key16": "2PToMmrTpmr6kZpRzU4M5HXRMyN5gzG9MRbuzemef9gyXVfgcFC7eFVFFFsTHXfVMoUFD1FuKPXM5yHPmGKAD5RS",
  "key17": "iHjUyZ7ze38L9HW6X52UEaWjFhPuMUVFHVBPLvmLdrkDK4GmSmd1C1x5APyQFwkTGjWNfvFdWJdEn8iuPFaphS6",
  "key18": "3QtdUN484YQFHrm3QKMQ5nSyTxTMUb4MTVcXg8hHDwEaASthGx1LzxWxHYoqNFrZ1YXnGrGYyX4EkZFBm23nFSkp",
  "key19": "5sX8NymSK8hpv3ETktNBJ8dZbMm7swoLk7uTnbMP2MtQkekyQY693awJCd74t1xeWwKw1KJot8dbrEueNvYHyLXe",
  "key20": "3fpzaGUthegLx4oXERfUeEoCCaH9KKQtheeehF7ri1DNbrgxXtzFD254k7KiiCZSa4nJNMKASsjzDbnZRDSi9uNG",
  "key21": "4DsxYcXoi9yQ7QgD6MuRfG63deVeP1Pavv7n3Tjnj5gw9aoeXbyXDQ6WAqTrs9adywVVbmX5vJ8GvBULvg4iVoMT",
  "key22": "2BYuFSvJqnxDNACHBFkh1NnTv2MoDbUQn75sFmMA74tysgUwLo6abF2ibBbVatgdNzAbephXjtQZEQf2z2FDyHvY",
  "key23": "5cGqMrhBfsShmGqzexuiJB9zn69cPW4kUraU3sfbMdSp8SSKu8MskxvgRhRthHWauk9RbVLXpPAvEgRxNfLBz3TL",
  "key24": "3thsQ9Lec9B6grhpbTkPrjQqmQXaVFXcC9G1ZA9nV9Yijki3stwzetXkwzzJEiQiw1Pq8RytiwcDydU8uevTa77k",
  "key25": "2r4WteMQSGv6dCaLWdF7SpXcmbdnrBDUPRxUwq1NFb5F8CH3SJTeEkNToFJij2Xs5q4DNjqeETDBJMchENVz5RGJ",
  "key26": "32KcwsGT4GHp6epQNXrMJwEpDKHvz9G4eXDD4zMqXFm7hNmJ2xaMVwig3hxQ1J6KTmLHjxf4Ge79BkLfP6ZVHu29",
  "key27": "2BEX8e5VLvwYezS5KxqizVpGvzPkoZu6DjK5HJ1PW3XhpV2KBDt5fnPdfZtbyomVwixGR4yRhDaurov8fWFKa8hs",
  "key28": "a7HrkBx8Qm1S4ugC2E9i9bAzHJEc26SAfqekABk1E8w9SYyfTy816bcc5ysCZCcQcKWyWMkkarSVC8cWUCeESgG",
  "key29": "5E91Fk1GYeLhD8jN5z8U55exqB5EZJDjBvk9GBUT3MPnqWdxvAkHeQHvnmhdVakZZQFLgDgXQnvkMXsKXLJXBgau",
  "key30": "65YGSMU5sS58n8UMF2GZCYbRtzePWe1LZynfy9NCEHf8xpB9nWLBTvfcx8wG1eqYSm3UBxmLtkCUBgWmyEdDn72K",
  "key31": "4brC3U4Zbj1y2fd2sNFZWYing2E5uEk8PfMkqBhRMRrbJKr5izeKm8fZei7uYp4eCTQQFNthfQ9FZbGBgqoxt4oC",
  "key32": "LNACV94Wv2NnNKALvPu1vYJ4s9jTqGUSNvm3MjfnjguuVNXDvZKNua1vSV3SfCCsvJA5aHQzuZBUTEg3H3fsaVN",
  "key33": "3G3fssWbegQVui7TFnxbqcxa95okr7x7CXBsRkixFah1iAedYYvJgb33LjnvmBFz5V18NNpTk5MBcJSrbE75w9M9",
  "key34": "2vDZjHWqAwp8npYzrqqzwzEpWDmA4Nm9SCcgTfLMjCyQy3zfahMC7TwR4gW98d1Sk3zA48vBN3z7MocGqyJ1jZXw",
  "key35": "3CxCAzA7Z2Ekaf2Byjfa684khnDUNR8p9gzUDpHdeFgbhVGJSDM8n1dwqweHuyUXMVH8dVZYxgRQRMYAjkGNxNeB",
  "key36": "34Zv1KB1nwAZEi6QzoRtv4zEGm5UEcUkea5KZixZgeubmHg5LHo4SsonNLwhw56VnNSUGGK2SJR1riJoxkPWozg2"
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
