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
    "38EGfnFg2dtyqKjRWrseFaKfiJjpysZNS3YFWsZWdaEt2WqWLxGxj3nuRjCwHqvdm9EVa7Q159nBbmwofXSXD1xT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1dWGjgSxhBxJXfewAydA3k47UvYran8J7Jh8e4jDUfaHd5Ppr7FGaGGJJfohXbmxeDvQvDKw2ZXjskwkmeUviAT",
  "key1": "5R7ATbJbXvBKwkn486DRkJ8HFHTZxoW2CPVhd6AMP1K5xJGgjMyzUgdXHtmZoM6DWiWd62MineiHzVnFWNzGTafp",
  "key2": "3SoNLVEBkuYa3FMdt7UwPKzkjbq3GpxifoQmWfGTwC3ZHyhcHV8jya1vQCfy52vAaj5VGkZH45skdU3Q3VtzxwEK",
  "key3": "4LWyj2HsxY5mtFCcNyvj5cqfKfaE2csH8fUV4DmcHaggcaJv4vbbybsnJmswvkNqCiBNi9aBArKtgKtRYwMQPsVY",
  "key4": "3KEmSVaJiY9P9HUtftQsn1JBQdiruT71sst1etUZYNmghY8KCAYvsLFfdRpQUQuvDqUw8CphWBLdCtfCMAHYW9RT",
  "key5": "8zbUUuLM1rQidTyms3uYhHPosELaGA15qCybh7EkBgdrbCcfDpjFeod28ybfQSqaghnR6wRoFJ74r18hWMdmv9T",
  "key6": "25AGJqY1Ax341EHnkobkfgZU3zPf3cApQMkpP3QYPbQtoyDUjq7DoQinmUKchP3d9bg2dRyZz289Z21xcKhhXUCw",
  "key7": "2FgUFonf4cbmLpfeb6xxX5d1kQ1aFzixDjregfoai1RfLkdkBnFpvfJQBEhe1gT45niNahwDFQhJJHFBQDx8E4zg",
  "key8": "9PrW9UmgJcx9TtRPcD1ghAdDZ8cL36Si5BC9xRAzc59rKcxS6jWhyx7qaXaHKJf94Djh5vw5EMHxe7qibHJxPp4",
  "key9": "3EYj86wgHLthoFFhYjNrRBB9NaAanEjxJa4ehABzUPwPRJsNSvsqygNCAHX8szp1grBxsmuQbUte3QJR4TqLULrZ",
  "key10": "5S3742F1EBzmXv1jE2ZjZdmeBJeAyoQikbpVZf1iABwdjqZX9c7v76J9SVeMpKY3Qk3GP3sMYi6qi4Bk1NnSGHqN",
  "key11": "2RDVBys2FDmQwJfNo8CHunZJu4BLbmcUhzV3bATsqSK2GAcmQbbYmShKkzmJtepukwUWR5rqRQh7M89NrYtg9z7K",
  "key12": "2DRzU8tfXxsFayVmv5cKggiQM4rektBp9Jvw4wkE6snU7WNYRigNVD4v28H8AXjGgYABVcAomGHpA37FXt5a7sL5",
  "key13": "XKNCKgtYaiuTkqdWSp4qLAbJsagq1U1YpAJAekRocZZCpGahKkLRUmfx4WSFW4oN1Pv4NQkagWJaBuaNLfwtrx9",
  "key14": "Dv37wmmWkPnYAB3HA6J4mEU6LMTg7RroJSerkz9GevkDyH67f6WcNMhzwcqr696GooBTZaDucqiqV6bzt85W9iV",
  "key15": "2Fp9gdFUG1H4a5Z9AWTWnaUoo9RMPS68n9mcLabagANoJYAKqeUceq5BNUbjG4rdwZ2AYsJSyspHkAQ8969Kwc4Y",
  "key16": "vxbpE2jZqC3K17n1tzNnEzzyKVyMkeDa8n9iTGbQYgMouGwRvDn8t8eCQBpFiiFCcotd7Erv3oj8UhFUPwxDoyP",
  "key17": "aHFfc3kXvU9hepyykZw6bkFTpn5xTZ433vsSaWTb8bQWKcNPckfX9zqJfiBwBTo6jUnQVCELMbA1X4MJSjypNao",
  "key18": "4JxYCJNovhDSp2DGFjCUQ6woA8cNEotwx9bgvpkHHm2VNWXS6WZBZC7tD7LpTS3o3tiRuSRT35gVFANgn1acVErT",
  "key19": "5ZWo8iHHQm1D4W9waZGvdC1WANvU2EhkCcPt2t4HyYRjQb923VHMwJ8yYF8bTUBytW5jJwTuoaPpaccadXKmBfgs",
  "key20": "3v318XYgRoxbbmLoVGL6pummHH3Hog594Cuy6yCW75MszR6YCvSVbNzSNXLxo5yEkprwZkSo8JZTbXjgjUWijrXh",
  "key21": "5LVsYUrmyCWz1nJzv5UJeURTAY6mW1c9E2XrAgkFz3UFvvCJ9TqenqcXeUzHAxtXoDGZ6ggUMZYLttsFAMw8SjAR",
  "key22": "4mvNxn9HZhMKYnaYUBhWpCBsZBvnfWVxs2iTLyzSkUzhxPUZAiiR9T9zCwt5zxrNF8f5GsjkVhPPmgTHoTuBonHo",
  "key23": "2qiS12dpBzfDAuwVdZ7EQRw9aZVmF8u3TUEWbRn1GMhmrf1ctNUTS8EvBjJ1eXP9JYtdWcVbFjCi2eTu5pGu9BJ5",
  "key24": "4TXDGAYN8CUjMmJ63aGrJ4NnxS8QXfpSPkFtzhZa9uQzdjgyz8hoPNyuicP6ShEMGa6PhfjTdzd2RSFuTVLQmZ8t",
  "key25": "4zMMbbhY3adXhsNiM4jcgfQKva1Ricage8JhrqXHEPBQYPrESp3eJkFhskfXd7C6VD5BcKTji2k2ZR6Rdbrqdx7A",
  "key26": "44pKGnybpdZJnvwi9WrxnxGERRujGP13qpoJ2pVedxFVCAYYdnZjnA4FqMgTtTAYRMZFNUP9vQFoH8Z4YnwBBgY9",
  "key27": "4EiGsteEQTBJED9avi7Ym6eiyhWQ4nLrAxNeSwAKULNm71hwBosgQBajPhGj63pFGAbz4nUh4v9jiKFBpCsr5xiC",
  "key28": "5fQatGNzWm2iGtLAQHMgopGMbMkPhLa1ksSPZ9dyjSPyrsyW77i2jiREYKHXzbCAj8huUGxHpXSGy5wEzdmB9U5d"
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
