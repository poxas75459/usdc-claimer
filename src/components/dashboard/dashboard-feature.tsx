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
    "65JtX1HdxT1cgfJhVpKDSc3xvJMMGrj9wAeoswbHN9B6ABF3xNmiig2VXba2SNoNjZf1Jm3gRLc8T3YNQUs7T3xP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5GXTFUPZPxVjZLcDqsvKpsi6g8F8m5LGgzori3PUZ8VCWi5XLwAtwxUNBfgSz567pBFvQYY3ezXNegKHJhgvkv",
  "key1": "Z5RFPn7hXk9rczQan2DUozmNefXCyyYL3pQVePLBZB8UH7xhqUFD2Hxujfipnv9AqhDu9dJtaXF4hsdQdQLhBmk",
  "key2": "5GcQUKujnuToMiyCzCDxUKEgamYv4mdv48s7QzTbLkhPkXWB4CpUvrqSZwdNa5583vcuZQ6HKRBVauqNqbhXHwvR",
  "key3": "wzkeTUEzCtwiKaQMun4f8154ZdCn9FF25NtGwkuyELMT5YN6pxNTo47Gnwp8GrMYingAFuUZHeN2mYfst39ZbkV",
  "key4": "4KxCrCSv5CWK7zLb6B358fNDrXZz1Tb4LWEuqjx4icZpFQUbxt9G3CywawrTAvaRDRv9ZjfmAp5KCPCPLKLbPKd4",
  "key5": "5NqXmPPRsaZ3PReoetsq635pDHvdKZxY2j4VTuA76QLPrFXdgsvGb4SHvp4rVNUoFhpYWbT8xVSeBfoiLqcLvDLg",
  "key6": "s8AkQ7HWYNMKrdKFD3Ubuq22q2as47aN1UvXcUCvdYZwwhhdpWLjDpVCBzEhzfovNkewxPLrYahxPBSG2bqtVCs",
  "key7": "vfSWa1KChdMXLcDxrcTbPZrgVM2gZpaxUJc2DdSwAMVBhs3UN7Q8rZ2yj32qgj4JfMEatQMQYonpLmLyqeQe48f",
  "key8": "44VKsYc46isJeiVsTGcU3mzDs5YQtyXLeyV3E7gbwskJYQqQH7EaBy4xZBK6x8xZTKZ5DpB3JCezdvXFQQog9oXa",
  "key9": "2xjWv3xKDn4fCSmGmoWKkXr1JvhExKDgPRsjz2PDV9JiHA1oULJQfnxb9LAAgDPK6MXYDtmXftxY5GZzERtUekqH",
  "key10": "2sH6gKS6QHEFYSzpq2QdP9vLziRqgDAzvMbgpGXNtwEae6p2sHe5CoNEDwvxXVpQZ3rWLuyLCuhsmamVpSAFxD3H",
  "key11": "65M5qPY36movBtBFtsYzWdob3TULXo1s7kh1suQayLVJDgR4D6434TAn1dZQhBSCbxmpjQfGyGZJ8qnpBMuKMnau",
  "key12": "44VkiEHAqbAaebhLNXdgSWbTZyR4i8fLnSZGo7MC9DvKQqy4Jfa13iC4RznujTvbEWvighyTA4iSxHiyMfUXGECe",
  "key13": "4FQ2rzvX7MUhcomwHaePvevqvQtVtMhd12nUJfAtFXk5YTsGA3aFMG5YtgvVkJ1gwNL9dPemxJrZXbxmjPV3STvD",
  "key14": "3H3ZxJfRKYaAGzh8q4ymUp2dzgQNDV8B7gDEHmsUnJcL96GTkZUC48JP2neeQtEtfTKnAh5q5WUf7FyNb7CpSpDJ",
  "key15": "2aTGj1ZSSMg5h6TNXJdXKGMXcuW6i4fgJn7qjjG5BnJLweKzGWudo497rhkJ5zsYJUChvFAVTdZyNrLmpreMFZqS",
  "key16": "5yb2SbQexgcpvENSSCcF7jp4mivdVwa5pggFxaY6t2axUPNN5317LPMVhKU5zgXpjwrtTzvaLfhcvULQn2UQwDmJ",
  "key17": "2EXTyJcDwwDwGpmE7GCsfbDSL4K5ckz7kuGMmytNZx6c3MVMUQhuhXmNpaqTp5dJt2L375VQS4v7DPNSRDD7o6TU",
  "key18": "5rUHdHuZxMhq9kTrHZAxupaMEyTwDAY8sshxQm82VzarHJwPZ1QQ11PCkUZPP3QGJrD5diYrsqyaLRDqAKjMW82b",
  "key19": "2QWPh3RaACyqCyD9fFq5Af23juQ6FrbABTB1yDvxc633Rb5FhreUvaw2be2GAUFTQeKJexCKqLorUPUhh5pdSSew",
  "key20": "p7bFidwyViA8FrcwNFm9LbdmmKQpK2QZavg8yexSJ1PgrifxfgFawc69nHhZWKFX3L9WajpktK6rsSiHSrxNSwr",
  "key21": "5WJ9vqZYQx5NJzZQ9EeNRgdzisTyZq5dhNuo3WPsBto2NL7hW6Zb4ghUnqwFKZZGnmLf8todfN32ZMCjtqDXcsAW",
  "key22": "5v6dvpPzSS28aBCYdPaD4Mt7QX14CyyqcPHjz2YmkCp3ZcAxsavdKERJQH4vJSJ74JWkHSRqFEWaVseEBRsesLXG",
  "key23": "52m7cad9mVx4Z8znHHLGUGABZ1uKpZHCLjrShm172aXhNMpngNUCbNdWSm4gfFcZcUMWSdLPKWYtFJD2dxYVWbNm",
  "key24": "5RSLYbEVYDQ3Cj7koFNEp4vVSakZupj3v8LDMy6DTcBkZpdoBDDcP4jXrSjjRM1N1SATTT1jaBRDZDTNDCavDvj",
  "key25": "4Td83J7xyVSHnZa1Zskk8Urz9et3mRdh7R5SapH7sP8TuoGuZzG9gc1efqHQUSEVYFzV7BgmYTeCjYAVkGDw5DKE",
  "key26": "5eCY8WTjE34tr8HoprwKRuMytLX3Q8QvH7ZCnaMTwUqoT9XWkvpQGU4zeEiJpjPCPZGmcFwKE5B6svjsvYUxs7bj",
  "key27": "4KWxPQLoAgL3n8nG7uvciJcVgXe7dRgFLrHrMoX3C8vC5jWYupW7AadugCsw5MoH3ckgnHD6VHHW98mnUwwTgwNk",
  "key28": "21zE7iH7zu9KDp8F9UBdS9X4wF5gvBu67dWFhmBxJDkPkSey3bJpMVs4q51yq6LTDjJ77KJqF9Y9Ff19dgSWYXhv",
  "key29": "4gXVwN5Zx56R5CQmyp1XnGtiet7ixDRWgxE3uaMVHMU1dKQoxbXbCjGCGLxJeJ7vHABUzwXmRGSxdJcmRm3jtMJ5",
  "key30": "5YpTtyCjtFC1cnfxm7A88DQgn7fZGkiN1bvsGvHhFDBpX6ouRnMsu2xVhUgVqFRjoZAwfzqnPBkmXybaxmdScE2s",
  "key31": "5ijgSb69d43wK21goNq8AHop8nhLhRmtu6QH2jK95zvgSzJnecYKN5NDZvbPxgiaMQoLmUYWWRhjyfskjrB2F8Bm",
  "key32": "VdZHp1MavdRiYzYA18MTN7SkbwUa7ugVMwDmwsabDu6KsBb21APa8X1vZHqBMH1XfxGAc1SCqGDsTKhtH44J6QJ",
  "key33": "657ABJDFhqyXVZB2Szzq9JeByNqortpYpEJ4XYWAVPf2AR6NyADCbRPXKbvm5aZMMMHA5hFKzefce3e96Dhy7Fke",
  "key34": "2gojxnEqRs8mrLx6p3ibyLrRSRCnngkktngJzSQQ7xVNUATRvjosMJUsycey79xtxXM8p7rRHY7MmRbVLxcWePVE",
  "key35": "4piAQLdpy3tKyHTn2iw9QumT1yxsowCs8vP74kPiyx19JQ2g318f2JZZNUxZBcKwPGqE688jmsAutp4YFB7LG6Rc"
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
