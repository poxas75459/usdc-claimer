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
    "34NfsMJBCBdjWtKNFHtdDsXn6Rq6Ao9mE6AhLHM487rNwWV4E2ot3syuHFTfGmEFDnEMcz5wFF1zdEfBdSKSUfet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2znHTaS7PGYUvXKeLwRtSpULdTzVAf6iUvMS9rTmTn7n7jmAN3po5UvncviyLF3bmZPiHZiK8e93Xipf8zafLRji",
  "key1": "5yc9j23DvsKBawkXpBk2xEJJC5S3NV8tXbXqHd9ubj6W93QjfXVbgJywrpidrAUXWxLk3nuWV72DjnKAJqenNk9e",
  "key2": "4JGKmRwCny1iDqmfA6uJ1jn5j82Dkc5cMQjKvsa2oeku95rLTUx4KHPe2BWWKPuYbwXC1h9foTsK7m7VDcQCFtLV",
  "key3": "BJxDdwBcdWJa4xT29kLEo18YwYgVh8uVwcPvGoYz5uiTcFu1MB7JVvAjVKWbaNzhHLtQn5zP1TrtM2Y6ybnBV6g",
  "key4": "3g64TEhTxfongz4wMvSMzbhJ7CAQQUVX7cGVFpwf5qU8JCDe1aQJxx4trmnuvUDAebpbakf4h8Ag9b2pzF1vpGPP",
  "key5": "xwTuhuSZxWDcGKjMM3jkBPgm9h32mHkqsmsdJSgKwtb5AF4V7kt3LFobwZyWni9sFHt8QE332gXV3eP5ffYr7GU",
  "key6": "45UNy8bLtYgK6EgUW8t9299Phixsj4fEUJeQZRGd5wPcpYiXK59gfbcDDdjfEj2FMn9yYgCLuGLAHbrY5rUpGT4n",
  "key7": "51rF75Ff8wZnfcZmgDXZfqRJPW4V4NmRtZXQuexUFJCjayoAAFR2kZmaE2AezN2eeBWdWRGD7623J797WuAivDur",
  "key8": "xJPPZEtdC12yCjCDXQ8oiDW1E2CAhtrPygcQ57GiShvw4pXPLjn6gKJwQfrQCZvVvU9UT28sDZeStMdQVEumFZp",
  "key9": "474WwWfhmqR5z4nwQjuhUocrgG6y29iZkKVbnJNqTRmv5JLGwbRj4wkSs4NvWaLkbQ1WQ7P2Ur45wvRntQMvs3Qm",
  "key10": "641hCeA5aPLfmiGkgtHZfPvbnFcdKH95ScURwaDk9qVAvnLRwGtSpS4NmLqjbPKXhcmQGXC15Z2u7xjn6doA5Jza",
  "key11": "UFJtp9wniLXNGLb3rnC2mPgdaLzRrFJgrCPkmQMit6KCzpqqyxRBUjyASbFj5w2KnpohEwz34iw2yKNM1dkJr5Y",
  "key12": "2Lj8A1bwV4V1r4C3JZeWKDe6EVhSwNGP7AR2FVMFTrB2LxJD8XBfuuBbtddVMwy4py2LMythTcJF6abesi56eicJ",
  "key13": "5Rsve8SA42QuwDRvjy9xVRcbxx8PxVqsjUHtWh3n5LYvj3mmsm7smnSfXQUjmrs7CZiAb9ztfVf1cKjaJLfkAKwd",
  "key14": "3KzR48mtJNwVgf1H79LxwK2kAxNJToUsFR4ffHQBTvpmb3u6R3uRZukG7LWYf5rNoLPg2YSmPzXCoxuChTgphGu3",
  "key15": "4fTVmoM29vqh9sn65wnvh2ftxMtpMfoqg5KtY8C2ajq7BNQq4MBQwV25A4PBq87mZTjspqokgEF8WNfcoUpbGMAb",
  "key16": "qEW5jqUqDUdGyiwVp1kkDu56e6bqMrDVK7nGdcrozaPP9yvmAx6HzDr4xpqVubdqizXm8dhwvEk6ryTGBFFDnCA",
  "key17": "VGwPCkjB14jvTJy5PRdvLY7eRRvsXU3m2DWoPAtdSbSgyBfeT65mxMn9DW1FEdLVTYczG3WRGKJEBxMicjoDTVz",
  "key18": "2jGxTtUKgQG4QjCXCPpWFfsa7Ya7iiT3DcqkzsSc2Qzgpq2j2AnoQER5opsQsUK8KNV1ohXEJQT7SiHHGKbcJtaj",
  "key19": "4M2h9YefSz5tgb6puBNVwPdLZXQGDzuP8YjRqLuKfEa3uYfJA55a8cv9q6JDaZkKqCYN5rSQzifmXv1sFVhD1AQD",
  "key20": "4EdeNu8CyqxFxSy8xWNoERdd9TJiABf66s9BHaQ5bVE88JyWZhaRVSyK4SqBoqZ4VcAWzCMYrj8MSqY9p3LiNopg",
  "key21": "24RotpN4x8hNAQtRWgf1cDS1NDPMe4KfmsycWWhmEbsxBBaj6wWAQxkcx76Dd2zSpVwwwrfkiqBRQvpXaP1ZtgbN",
  "key22": "zYVrUCRrypvi2tchj1L1iWJ9mNnADggVr2MUoCYjPQmL3H529Ajp2RS1h95YcgSaPUGoDbXZf8FYLdy5QNj5XjK",
  "key23": "4gGGRDtEqAdFXvxHhcVpGbWXh3k3eAaMytD7NUT4K5Be5fFqWd4wtgHhaeLf2H7gJcq7tF1CosS5z65Rj28x7YJ9",
  "key24": "5d3qdEqxaZTR1XW7vuPXfDbcQWSrpJ131jmVdReincvALADPVLUWZ61tXKRUS32ME5JBniark4iykVAdA6ZRpHUE"
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
