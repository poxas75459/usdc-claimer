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
    "5v866uoHw7JUxGk1NH4RDqs35LHdDwSGZHBRSvyz9UNVF71a8YDkFrsXAaHxAajqMHAU1NKp4aLMTipUzXMi8GSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41zid4Wb95Y1tyKDHd5rodfgGbmersvC63ALuXnxVyNcNcq94LHjqxGgX2egJYLieEiCQpjkfjizQnmN32i1voL9",
  "key1": "47QZJ5wyFCySLf5QR3Up9EozvfhgjMSdtHyiPz3PnqenbevfyhyxyV1TD3vexHPqhk19Pswvyi9v7eKjUt4Gs2Mj",
  "key2": "3r8wJpNUx1PkXJro2DSmyqARMoA4nJBdqbRgqaUYSp8ohDTD4gVyRwkYjRxkxRUcsBH1vVbSJ3vtVPjU3zFrf6Jm",
  "key3": "BzppuZU4n5kuDVPhypiQcyjDfyhVA6QhVM4xUZz7nobCd7dgoeUfEkFvkBwn6RoUsgfPZYoQHkHM9m9cn96PB9f",
  "key4": "5vBnTQwj87ZVHWt8dD1aLnQW3z7BCEBMaeNCH8N2pJdNtGcJ5dkTrvLhsbRt6PgDnCRjJmfo1GXGisUTuWXUReod",
  "key5": "2Tzz5f6D72Fc1ZY5DS4veQa5effrLo4Q74K6UjixhzqRpFzeYqcWuwx4GZxAZuaA8xBd5fwA14oLQEgaRYbtrBEv",
  "key6": "tvLrEwZFoJDY3wuNdE1P6HDzFq4Wg9UqrN5SX6gaixg62by9xwB4VRZtVWT8oQW6T8SkW7X8LHDaY3QhN4jDvSu",
  "key7": "3iG8yU8gygtfT8TKi7rUmGeD3EqZFjH1rrsZ574wE4Yhs35fbaPNJp4z4rQf1HYBXJG1a672MhfFCypnchwXdxCb",
  "key8": "4z3GL425Wggf3VYHFKytFAatdRJoV4HA5z2Fri6bh4FmNH4SybrdnwMia2ythf3ytHsgK66cDwZ2CZQqtAiHh5rh",
  "key9": "2gma3hB8pygUDfCyB1F2dPvq2WWatDenUM1ffmwvLYMSYDzBg9SJNQxbCeNkyP46CGCM1Y2hcVHdmq5RFZwqNLC2",
  "key10": "63ZeJ3cispVVqhvudQwR21hxMivTEyTfPpWNbiFjXN8hgU4kaH59P9B1XjQXWSKKGFTgrUEntby8GEokYjQP49Nu",
  "key11": "4me6BFDxJVWktjzF1rLNcbw1N98oYWtvpVopBP7W9kBvYgmV9A76FJNbXXngnP3QKg1KgiQYQLaWKUetHUk2Ke6s",
  "key12": "4qqweAoALr7N2w4iToG4QLtTEZVDo93m4YtanoDsUUuAeyJRwiFrEFpSS2wQCWR3pDZYt9zUHyrwNaei9D4uRqZU",
  "key13": "yRKc6McisvWiNDeKDffrMkUfA5KYKzseckeuQSBZZQpSK6x6RQkANDFt6BEpaKNpxNk6i15CVkWSbsqYYMAqjbn",
  "key14": "3iQNqX4qhdf7vdZhXwC2YTkaFejW7FwbUPCPufZmSwBppZK4GdnRcuu2rJ2XhvBHHmh9tntTbwnbQEarv91NXixg",
  "key15": "5uz7pB13mwEczuvp5qdzpx5dvssaDNaN1FfCw4TUBDxARLtPAngH5CxDSA2TL6LSztUZiBd2MQYpEHwWHBKYnzHf",
  "key16": "2ZixfFGoZDbnnMZgf4F6FHfDN8LCZw8p21RggWD24tPqaPgjK4vhJBU4D6E5LojcJdJd6876NDJZA9HxmFsPfGGi",
  "key17": "3Z38VWetVGQFDcNoTd8EY41L6B18NH65z6TakS9CS9gHcc4trXDiw2zvkhjZZ6gLmYq7SkLhgCnV8oJCbg5Qp47Z",
  "key18": "5X7VRFP7j3g3guXSJoex1nLR5ssdvjzQWGDScpYZb3pWX1dootqi45cEF4c4Gx57o7MjGvUfVMqCZidd6jujianq",
  "key19": "58hkN8eRJEi4BWL1nzLBLW1BP3uc1ydKrosQXNjnuFdZXEQsLTztWYmtzhbxiFq7dB26CsbGKZppjDTvtazTGspU",
  "key20": "5HFfrBH3DsbkTfyjQVwV8UZDr5zE83PJ5sAV542q8Qn1kfHtVTmRCdDrnn1jjRtDy8p63V9qto3hwBKVrf5AhEVA",
  "key21": "4KtH5reQ8MQN5JtsmpikENurZKG2KoqYDi7K5Hb96qQwoLHjBjTE5Dy2asUPRmuS3T4TZrGEgVnmL5aS33fvRxX8",
  "key22": "5VT6sarjkxpZ4iQ7t7aoYmRkLz6wnErgmTZ378nDsJMy8V5ML1oR3HQq4KKuJi9YtN4QyzLZ5v4y8GHjrXBKEhmk",
  "key23": "47dBVYRBgMXWDUoAoCzX35jU7TuERLcZf7m6ZPJTJZkNtZwF58MkG24bUVhpmnRm8qwhWEyVumRD5FauiXMWcQaA",
  "key24": "2PCpxxmG2fJCbsZ6Z6Teo9kXEBKmgs2Hd4JQ6GaarFyVUHbZR2A9Z8UWWKZb888pHDG6bhZjart3CixzbR4odxyi",
  "key25": "21Fcw9pEvWHJzorxdDHDX6NrQnq5nUU69C47K33gnZpUv5a7vHKrjiHDgF3LvGG5VubSjWVa6YVjco4R55YQvQrX",
  "key26": "2PGvThvL9gcFhUEHJ4VkjZgHgjzkRWRu5mGoVXKqmUcxFGc48EKnSUGvEpNhmTNPLx6i2sq8kpL3VN3cPvdzyeWT",
  "key27": "2TozUvo6j4gKUEwQ9KXCCtDfR6hYxFpRZwXCeTdKkPVy4RaYu5yrzGeaQwWebtUHEtVNpUJLkbiW19mz6FK8fVAz",
  "key28": "ZvePdf8Wtkq4LNay78VqajXjmpcMbi61BKaMpWvj12cejJ4jyr8xuKLdjdYhyAXUpK2PwvEXQNu6Pr1TMLvTxeV",
  "key29": "2LHLrST2Us79EhG2NXihFezTHaMKwzsWbRbnwHbUnfKyhZZj283EYz2u8vKdsfR6RWnzCaTeoHVX8tyiwopm9HhX",
  "key30": "5Ap9YJZ6mfZdaadqUpSrf2NjfLhTzku69Z1wPB36KcVqjPngc5Czeved4d7mp7gQAWxhz287MvZdmt6wPxesHq8B",
  "key31": "3A4naVs6ziDMiWPWSwFZ2eBbN23hfiec5n5LPnZaPE5j32pHSFjFDR8uxE5ioQfiaMKMonFsf4M5ci6cXs6eon6b"
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
