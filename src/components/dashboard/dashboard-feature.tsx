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
    "24b5o6oKEPDNTF6Uz4xefogdQ7W9R4EZeHwxFFjSjZRim5Sme5LzqPgux7TQhLLPcrnKjiEZV26nrmLfDdQRQLM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CUzPV7C8iRQaCn5tZyYxJhxRYB2GzD8oNvKW95EvRRCEpngZj7aBC8gFfpF6FsV68zmU2SAFsw3mcxiBi6b6qrC",
  "key1": "655Ckba23RCWEeqUPmo5vVde88AMZgxduGfsqxPCk9ymeBYP6S2iwvaXnewwAmiSfAxu3YZn9xnPPwv3eZh1wfmZ",
  "key2": "43RqwXhcAdPKMdCMgNkJWKNHpDLnYkTYr7gwt9LaFiW2v6xKcGCFkPb3YArz3qHh8C4BoEy4h2L47khThL3BMGzy",
  "key3": "38iicFjvqpWimcfnJ8zEmMBadPA1a1eALyBE1TZ6Byk8gcY5QfJmPRpaFdAnJYHjXHci1pnSBWrXPTVQPET68asK",
  "key4": "5MVFHTKGJjYAnNwmF6PYwPkRgB5nnJx6fwsHxmraoGaF5GjfVfzdkUaKJeGyGAgcbeQgMk6pntb4A9D82RyKfwzG",
  "key5": "3Rg29MEC8dcTheEmt6vw9zZ11L2ZLjVpCWps4SfBZ2coH5epypbh5EeUHwH6MdUbUp72X13SUx1Ncyj7EhccEjGu",
  "key6": "5k1Dcc1WmEGGodEEFYjGUs87zVLxHf62Th9RC8axVmFBiTnDjXsE7Y8HTW1ih6MbveYAqLCvrAgfiKt99otj87rU",
  "key7": "2XMDJKKfZ2v6AVV6eBqWGu2A9wkGryipgMiKMsmRP18xkvgakTiV4uNaSzoVQi3YaWcgWMCiWNrfsMq33okcEviw",
  "key8": "5SQMeFbDCY7tWkAPi2GiNCkaZRVckkVeXXaVTWzESdmu4GbBErXxCQGTEk7zj87d91BUkhxdBfWC3BrSJJz25j3x",
  "key9": "2nDevV3cLpkJE3JvuhSfiHY22A41jLc2DRdK5VtuLUk8My7dQphZwZUuW65j9YDtZt2tnsDv1asjzDNNp2QYQEuc",
  "key10": "5mgB27BF7gWMb496FKZYw7ENsGhzTk562FzYBsFtCf1pZt32GPYMmHczUq6ZH8YbswTYDJucTZr1VhtCrCAeXdm8",
  "key11": "pKDjHd4VzUe7GdrUKLCB5fXDqvF2rmEnnfn4hpGVU8iEe9iqGtzRe5gL8yB6TMScGMZy5watr6bH4zgA9qvqwkg",
  "key12": "5qfbkYJAtaQdtxBoE9i7Tna7DKm49VF9wwtyA1YSczL5Bexi2niAZNPXh2x74LWDRuNaFj5cvTgGS13FAZZPRLbz",
  "key13": "5SzyE373cn7WPqNfy3Kr8zP6rJTXdBrYXvvcE2gb7ptzaN94jCpkknotgXTEnmjh7jnf38FB3q1yibzJxLBRqVK",
  "key14": "5kqE1TkQhFi3muUFwEeuZ5erYjgvYJvGtx424d4siQvqpcsnNDnguQpDvDkL4b2CN92Uc4kmAauvH3VVKvvs7FQ4",
  "key15": "3rWiEHKz2qwgHJ2jyLC5mXkCzvKmhVVkY62xfViapZ7uTWf2fVmtHowbWuM27wXPZdgxVC44vaLXb8xPifED8mcz",
  "key16": "sZC3KXG86VkMqKuqUedNjFhGtiFoJrMpFffvau19dYA3kEzBDCxg8wb5Qo1dYRGCmdUox7EbqGPRtzbd5PyKsAW",
  "key17": "3tW7HMVpAsFUz7MBmHSpYtjSE9RKhFZqU6EmcAcYV4Jqsk7FvaDGJRcddLhyuD6HWaJj8px5xrHW1DkJSXWaCUB9",
  "key18": "31MQ88r736PuJt2oXKMQuZSyy5kfYU2am173F8ucZ8QNMY1W55t3CvUvQUM1a6DYg8DULLou57PFfzKWr77n396P",
  "key19": "3yRL2nYQNhiPUkp5LFYYoPpmcUFy3TLPr9HznR3pa8YZaR33AwpiPGLRZstxZJjirxXqCtLdqnnrXbvoDjDCJzAa",
  "key20": "4eJqthaZDuzsAoZrMMcuZySJJitVsbsBN8rCzP8wGvJt2gEgi7cb4MVc8QYCjRmLgVgNJVR2u5fEdSMhR3Mmz8T3",
  "key21": "5WAHygfHNrEdehvKdZjUEBir3gWsaRt3A9wPXZc1wsw8Hiv5PwKga63XNzgRcZDAkdMfSeWwKJSX2WrhxQiZATz1",
  "key22": "3Hf2AUj2KMX6zupSNFPZP6uvXc26mimGfzSMdtxZhcTzb37mmiB9XZPCzL39K6vutKX8U4Gg8Y2XFLeYGtukbe1K",
  "key23": "66fQGgZxm2guaPmDSRv1QVqbnksyp6hsB4v3rHszmVGgo6aPQGRzsEAtw5CjfmMCYh7GARr93SoEC91Z9pTcAvbr",
  "key24": "2FEqGDVoVUanJZgZHywBB9tzC5CndVAKwDSML5wuLaTKHji4SpF37Y2bWV1HrVT5wqebTReM78q44e9v15WD1Y1Z",
  "key25": "55ns98DKhnP3RpH6Xio8wDecpdv6yU8T9zMzi3Duo8voa6DcrgY8ZuDKBnwmRvFvZ1DcAzkBtzRLThA2bFeR3rJ3",
  "key26": "5jgCuuQ2iMaBaUKdSC81ieqvTzczLU4y2zj23BHVfunfLRK88r933ARsrJzwMBA7e7Y2Ce2NLn38LWjSdG7S2sd7",
  "key27": "2fxpKXbshBDW6rzFXmaBwx61cHi5d5rg8kAtRVDLB6zvqvN9ja6wArDGb7ApHcLQ6T85kWymNASDR51TdEFyx9q3",
  "key28": "2Xgrzkgn7YUzwXshT1JLA2pTgPuRfeLLwrT8oUzrMQcBWSHGouqRrjC1hW4jFhGf3cCcKHrfgN6CrgoJNYr8duvk",
  "key29": "4HxAjAppHJPwHrNbeufHTXvPaMK46at4wttX7ahuNVQpsT2M8F8XpwYAWicvs3cbATwVa7ep9q46ZwWaTZTm3cJn"
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
