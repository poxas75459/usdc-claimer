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
    "43FASiCidjsqLzvP4G7FuzD7ZvFHVBczC1PvZAf1gVYnE4dARYiu2dXoUZp3QgUyhZ4G6H4QNGkzTcLxWgNmXZkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H35W5n1ZywHomWoLrMuwrNaG887RJiYF9XMvGBVvmGAANuX51VF6oW6gg5gsvUesYwePZkuFxSsKebdJb2WFzBn",
  "key1": "rFjW8WBHqnfpSUHAat8WFUnxsy5DYyL5hxiBHNywMmia21rmV7eS9V5xcSRqoLtPWPz5ayz25Ls5UjTg2w9bRTf",
  "key2": "2gm6qBsNtEw817jsDKwJwCvU1b2jrVB5NxvkLDxwgJUWEbTDKGM5Ht8kzdy2xXx9yMgi15cZ9M2Td2wUXYiLUuBh",
  "key3": "3YrHQQs2cZDpEMw7S5tLdVvATCW2RYYVkTq8wJSYbMtZ749Jz9MguZ8KDH6qNHSBcMLhn7agKiuRHPMx96s3gmqs",
  "key4": "aMTPxknjeKeQoQQ2iDZVnNQprmSJbhsHfvEGSPaZTm7wrrb2WZ1ETQsfKkd9TAiwvTGsjgRAL5BBiuxrVRUNmTh",
  "key5": "3Bo3YJCWtUWFiWVpzBh4hireGBA9qMUZWiWwyVCsomsyqhEQrP5WTyh6HNqniXZVkVXGEPJ3sdwYXrMrZ7HcByTK",
  "key6": "4QmUxynYYX1fCbmJ61tv2EtpBgKXVfPvJtEL4hsEwSSno6QuZJcat2iFBmZQiDwbWyZkhqveZPGwxzZUdBJHJGhE",
  "key7": "258XUhSpykQp2umkuccgpUakVWSnVhFq2yAXcXAwEZQEXCMHk5vMyMvsR4dNrdkXXjjQEsnQTB1m5jQ59FLQoNXs",
  "key8": "2UAUryx1dZeMgj3KH79WNGSgLEGfzXG9h33ErLrUavhnHqJXWXzhtvLJL6mRKbqZuLbta5Lq9br9UTcU8Jnueffz",
  "key9": "SGkYx3Udh6EKvKjDRqdA75YyBieU42PCxhTYmw2gnYWmFrTv4HnjA1Q8WSTT9EqRyTabwVjtxV5fvhhjrddx33a",
  "key10": "2YZtbHA2rH1ftFrXkQvFB8mQGTqyazCEPFDu6XVXgVGeQvjLN6e3R4LrrPhKJ26GVyPKjUHvSnsGfBjz4nAehrCZ",
  "key11": "4ZaEr3ZLZMmZhqcvDMV2mUHiRhp9YjrUNRKgnQBbqeat1s7Sdcbgg8FqyKd6yxB89jJU2mBFemYkjScVUuq4fSFf",
  "key12": "5HpbQUXWddo6LHE53JdZ5PXCxPrJHWrSZxYHWFQKjNfeguvoSu9hbvHomD7dCQ4HdrhVmj7BTmebBBa32UKAVWhN",
  "key13": "3qjyfW8JyuaDa8erkzA3m7EFcp2pWHASmN1bh29MUZab243pwBAnTCykVwTUb4PdMZvh1gtcWJMdVmyk1TRpmiiM",
  "key14": "4XBr9h8PXgXwrFhNB6qAfVpwkxHhfGYv4rhtPW1HT3mf6NDKaAzowjRZzitsZsqd8jGDVqfr1mERrmFxcDRPKAzZ",
  "key15": "2soh5qM97mNjTkkejkvobJcXxj74YeLCGYxsMJYaGvGEfvkrb7nhsZbJ4HheghrkzLNKYsX8DpHqrqTfZEJfB1Dy",
  "key16": "nqd8RTLwRuNxc5nJuM6vKAkd87SNDibZ1NCWYewJH5KSY3du73DeypLxxvAXqNkJfZay8BnmZ22fpWounzfEJNo",
  "key17": "3TqX5PyrYSQDSQxbKfYE65GQA3JF4WJzEG1Rb7GHR2hhBDZpp8fQH1JvgfRFScah1Pn2PnkbSCp1agq39V64rZdT",
  "key18": "2JPfGvd9oC8aeRUH1Lz5efHfjdZNSzMEnjtENeEskvsYiu2iAVeAyuDiHzMMtoG5RLsZWcSsxJAATGjWWGDdGXPB",
  "key19": "XHZyLGw8PkBiZwj6nUsLDNhHDyvjePXJ1EvrwNyrBVanaKShyoeaGtAqqb4M1xLScKNs1RCrwcHi6GftJuGqBCF",
  "key20": "2dG3Cc4r9YpA2bXL1vC9SDM1ZZULABRdEqqrBWpdTnRTF86ygTmH2C2P5tjUXedPLATwfVW64bwi1pHu2frg8ztv",
  "key21": "m5PNLKCKEnLJuj9yhaz8fXrNqyvmVFnJj2KkZBewtJzS1jjKrz7GpkVvRy5GiY65vwgBczLzs19QMdPAYo4y34d",
  "key22": "33FFZXZFd3HChBqJgHQV3TknvJSBitun9kRyLhdcW3uoASZcgjA8nTLZ1D1pnAhYTfNjy9ZBE744FanyFHx95ida",
  "key23": "58J4JziMzntJkTBvMrUCJYY9CT6b2dTAX9wzPXWZoLAgeXSxHxNUeLZHEtc5aQUFKVDPgXevbyGfKvEap83RLFFj",
  "key24": "3TYP1BavhUTyhKR79qHP4vQGZTKcZeTR67pTeu1okj8aNcTKv3kvaDccyq35TFEnVa5gm77soGzGQG5pRYjAp52i",
  "key25": "2vos7zTGZmgZ9PFSmTW9kkycC4JYPRPA3buBeYKvS85oy4VNAzCCAn535AhP1rNM81nyFkr2SnjsVVqePD77rxq",
  "key26": "SKANT1GgCYxfWbPL6pdnnX6RcCU8KkDdJQchisSrAvQ8ANi8L5sAUGRe5dsbCJRd5ALijV6n8fvoSp6PbuWmZ4H",
  "key27": "3iHyL7mURaUctL9VbLVuS1TobdPRPQyRHuDmpgnGgQCghEtYmWCi5Nm3eKU5R7AsUHxJEsTWGxjngXUGWn7H8FbA",
  "key28": "2rErmpyq7WSZrTB9gqF2qmeHnS4P4xUuJujExrTpzrcSEYgoPvqZSN537EPsPyD7LRNbbrXBqePHVycm5C3JkTeU"
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
