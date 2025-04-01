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
    "5aVQbW7Z4gh9VBYwXVV7krd8wKPzRahj4W9R4ghsiPF4eTGuRxkj6BsvM3d4qRXZWPBNmmfv2asxwG3tcDHSGvGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VmFQJ2JvEKgyiHassBoiY8rPxbWRCr28iUUyAUFKAzJgBguCqBfvU4GMEhefAyHVR78Rtu42UfU2EZ93Jm4FDHM",
  "key1": "2tbJqpXyByinAhMwqBeTyo3oTDJbSN1qjUEAdCJnQqZF13PZBhbni7rhHQqA68Wh3XymoCsEYYiH28jpnYB3aDHZ",
  "key2": "5E6JuttmJQCRBtGaeKhKBJ74b9FgNGrdJGhkVSZDtGxL3EahNcUs4BvbUEKxZ4hF2tRXWeJfm3CPyudMfh9o699u",
  "key3": "3hePg9d9oJSFHYNvX3iDfCgkPESTXeNYE2o1ArKe87QEpHmApMJ6NmntcWJoB4VVt7GPEAqBiN6KGhYiDixaKcyA",
  "key4": "5aKv64khdW24dHSWDBfiYkfdW42YMtJ2oyMvLSvQLMsexDHUMYG6553xx7vohdkc2XYgn2LThUV8wFLke9wKX8JQ",
  "key5": "3Tms26CSNHak2yGnRcmr21duE9c4K6Ep92j222JmZMbD9hjmq7W4Wsm71P34vNfT9cFc9cNa3PUcrGasg5cWEsG1",
  "key6": "5TwVp4JSZxcWm2r4XBg4eBqapMjZoPwr8NKCqdsKum2ZnHnwZ8PoXfvJ5HRg9TC8e9eApQ5aZNKqJsJ5bWdcwcD1",
  "key7": "4Aq8QYyf7j4dkmE43cdfhq8ASM6YZNkKXVoAyTKimCpowyCb7yCJQHA6HDiMrniJxQMtVQ93UQNe3SNYTzFk5kCK",
  "key8": "3wB6LHqMgkxwBjMkD1T8qjYqCNAgsZJnexBiuwNUDRKWaULzxhKhUGmTgtfQWoeoKu8jkVEqJUXt1zjX3CVRXWPY",
  "key9": "44SdvhUmYhgso1zLcm1af5f44S1dtCr3UFDK7Q6UfNMrbadFxKXPxtfNAvFn5gvWU7fhhD2Nq2YxqLowTtb3aPp",
  "key10": "5E8jGpNTLYVAAzZX3fDmn49MTTpGrw2Fgc2e7HQnAsYESJg2bK7KqKNqAUbrsY3NywMDdngHDUgXs7wgTbpLimMn",
  "key11": "4mcKUbSoyMpfyVwtAztkUnNtnAMVoQb3BEmoCV2FA2jPCWwJuSemFgZjXoZQa8pugVafA3bvTGepa8CMExMLucdL",
  "key12": "2ECS6hRyhgKiiaYPvdBYee7XA3ADBua1NnWMf1auLVxCT8CLKBJzxbqoA5nYLCe4xoR8F4oHy1LDzAbfcwN73Dp2",
  "key13": "2jGJvPjKAE4nPCNTFYnz7j36c7W5Q8vpiteZ1rK7aVZ14wbvsDxAymujkhcegG5dFbieGhJ2QpqWvoB38JjNpK3C",
  "key14": "3oUKJxoqmMDGHHDxbk4QKUwJUvJWyS56HKs1nRWeBhmo5Q2FManx32GZYAQWUdhExMc3r9zZCVSm8rDej5b5zSHa",
  "key15": "3nrWn8FGipjo55H5n8URf2qAjmuqkzqAtz6e36hQ65QRPUxa7EWBd7EaMWvjrs2qkrffCifQSjdApwXUeiX49Dvs",
  "key16": "21Cu76wA9QvoXWSozhCXZdFpn3Ftykp3anmp13zsPEdq9bKnv6ZZ2gAJdMAfHm2nqzdrUrv2Bf4xpF5EATpJ47sC",
  "key17": "5dQLgLw4T7U5mkcfMMREECjcAu3h4wbBQGTupzu2ohwJLbQKm1hULwUUuyhe82wkcdQ86FYeFYMAvBuxqzzJ52QW",
  "key18": "4676g51ju2RyVpLroVsgnGBsWrbDgXLHfFhdRmwpq7FFwW9P3d9sEbC23dAF4cyGDPc34aFkYu83Pawo6Fc2dY3z",
  "key19": "2TZFfk6e3wFtD83ZL5Jfo2BTPEktt3sf7rknGMKthgMroo5jxjcwpaJe7W27n2G28nEcHm8E4ERpkj6cAU3YUPBD",
  "key20": "4xBUZFhYgBD5YM6qSBfVrctTwZrJ6zcer43G6iow8pw54CRhYMkBx6xqhb3AyH9LAg34mRMrWFYDQat3XfdjXBtB",
  "key21": "rQzdZYnuHhi1cLb5KT3E9iuB6ztpiu2ohjQ3XxLxoBg1ukFwhpScfKww3u79bQK2TsyABayVBjWhexecwjPmoit",
  "key22": "4dBubKJfnq6KD2NoXmXUH8js3UQTXRMMtbQDJWnBvwuaMnvCy3coXJNZukvHKExGW9XH7LmwsYoLMCsv4TWB2TrY",
  "key23": "2h3wjwzpXqcuzycw6tvRdQXXBx4xz1V8H5kqP9cghskkGiJ6HqXFJcp4PYWSxZb13LctCcu9pLzxqaybQUd4zf7m",
  "key24": "4ZGQsVoZjhCsziAYPsDySRExvnb9DgQVomJb7qEtH57CUr6pKhGEwTwFjvJavYE2zJBnGJnwMXkpNzQUUtbATTwS",
  "key25": "5WRC7iDYaDM11fYaMzCpXB11YJ1jQz6VGSXBtVcB2XYvjfErv3RWfc3vZpa6yR5L8AtcJoZVD8Y8J8zgJm2uYjFV",
  "key26": "9Lx4V61R99NtBoyw4TMYMuajttm19i39VZVHAypzoR8sT5FG6XfBCo48dMCKNZwqUw8kC8AU394nHoHKCXHTVt1",
  "key27": "AJCBab25k2RRq1DkYYFtpy4NWJi7Pu5YxCkmukuZs3pH4VNDUkuHL4Ufy6s6d5aB8P9RKqRwwYBPnTPZjmcj4k9",
  "key28": "fUniXJs2DA5iyunRFDVyT47SxxZnuJCZKUm6vBP9GKGbaP6kz5Qqv2aq3u2K6UJGFxJgqJ3WxqTSofGRjxzjwHY",
  "key29": "5wWWRcDkMNeVPxLfjck1M1yoorRqMhVgb4RvLh6rRrpn3qGrWQtGKsEoCB3EdQTfeiJbed28ZifLKQxnkWREzwpC",
  "key30": "3oFnrVLjBQNi3wvhjZ3NAXHkrm6LTKBxwZnfuhc6RfeGvPmnBPt6eDT7KNZsKS9UqCCuzPd2qLprc4T7BaH7vwYp",
  "key31": "4Z2kkD3wa262pmYRdBeeuBrWNfQv5TC1YNtpsJqsvaNSLkNsKPDbDnXp2zvkQ1WacR444BQgMq5L5mZnpvYFkthD",
  "key32": "UaxABo2oXfNDcMtmzXmMS3drUDpgDj6Yp7kYXSQGCannjxGeN2iCrZRafdtYhuux2GtU6q5NBE6kjrnbFG7ua8C",
  "key33": "2yjgJVSHM9Q8XYSCw6t64rhND6vh8vh31avCiGw4rgB2WZ3xzbnj3qZp7AHQ1iCpg3eaY1zBGuv5ikvxed2bgniV",
  "key34": "2BqMfauPtENMzKmZwcyXZvtqNQXaSeeuu6h13eThZmm2bQZkVjJy88ZVgWCFaiZEFBZSYQUmFu9dJXj1x7QjRZZj"
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
