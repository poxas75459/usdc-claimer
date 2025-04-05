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
    "4EB78t91Jj6y75HnHoPqHsP94NvT4cpFPKu4ZGnGpYheaAJ8PwxpKCmd2mDc2MckPsvRgqG38SKnG2PQRDKuyRa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6maPTaMUEpFE5C6v8YH2ixLvxDCCZt8ZXmhJ9gWa9WqQaXKt7L5QfrdrZkzTm7fzrGdHyXhMRyoc2XwS12nHc7b",
  "key1": "5YX4GcgMAPxwQwhzFo6HVdTHpqpCYNvckeX7dhisZBvdVbTsVfiMNxShTRRcw9A8JsBocCNjRWX3Gvv9VgiPGaoz",
  "key2": "5RJpSgMiUQwXnRdv8Y5MCcaMTtko3ttaUrdBDecSxsb2J9jfxkzyrfzwqXSA9VrB4fFSKUp5eAmRy5CwdazjY52h",
  "key3": "4mFkg77yPRQ19168vqeGW1Jj1LPPt7Y44w6pFbL9vLeWgCZJVbs34LXhsV9xhb7CUSHC6z1FTqX8GspNh2rSUUEG",
  "key4": "4h8GWFa1MzwuhegLJ8jsYqnBF3XrnYk1UerKqetTiWzW39W7K68ws3tqcocqpJPe33D67ks2jVrK6y7J1gcPEwrC",
  "key5": "4jRYv9WZS6FSN2vpZnTePawHMCs6WeKGjMo2XBZNPPmLhsPNtaLeNhEHnC3pkVMzPQybtEZH8W1ZwkvSm4oz6PMa",
  "key6": "31mY9R7aQubSntkC9cXxqUGHMwq6NhixJbdJe9YtZMcuNKUqn7B5ih81QnJ2YhQ6kBy7R3mEcQu1mQvG9Zp5znB",
  "key7": "4FLovnwyQUpkNMnzZHNLUns6wagFciPuD1yJ5nNgKeNbjzJVJt3nUMDtiNoKVh88JftUuCMhQC4yRfr2ZRzxsAoY",
  "key8": "627T5FKgcZkMZmSKwY3iDs3TL6vZsfR33wyNsnfYzsi48UeJfNGX24pLmnqUzAbZp6HNwoPUtKpRNG7Hy4UVmdc9",
  "key9": "3nhSCmn18SDaSSN23rpvR5ogxmc1EzQrKZEWVJa8id61yYde3HUqVcMv5KVFyqfRfg55ohX76fh7qk9qwtjPSoCf",
  "key10": "5Xt2gLdA29KvtNn3QpiQBstUVy7ztbuyeCkYRgf77R4VUkmj3K15osqWETgzVK9dV6X8wQncHFY7nE7nfeGS6zt7",
  "key11": "krK263XGv8GZ8SPXa4CF8GncfigZgADb9yQy8imcBRRVdj6kUTpN685qBqUByVnwkPVKH9rLJwv38xqMsQyrEnk",
  "key12": "hJoih2jbZTGyCHs1btY5BBdkMuKFsihyh9AfYS3NnGAiVXg9U8AL6HaXZ9rpPRuQDWwbqrcAmuRGrMSySPaVmzq",
  "key13": "3KTSF3etNakyhh2JjS12pJnjmG4zfN5zSb2B9qXCmuw16KWPozW2VkQjJMS4nNhCvP7swVrRbT9MBusGe82uEQx8",
  "key14": "3Z9R31h4tcwF1rpb4N4uJAxdW35aakBi7cvzU8HTpaJEurRXipHsmJus3t5L1bjZzUQBZfH7J5xmar9Z85Lgv3tP",
  "key15": "2NTF9toQVyDPrS6eRaMAhM61WMk1y6zorPTHvViEk1AexgLHvLitejaqUoeUhQcsF4GqhxGqeETqLrhYxzEnkSNF",
  "key16": "WCboN7tyDgd8GreNpF8kJzK5zQb2zFido7E21WYdwgvWVgKaX52PKPZW3cCcYmoCK1Zjoj6ZyYsWDhxZaABAQdt",
  "key17": "2y1X3Db8MyGrFVETTwJ7j8vTNLkWba63771dtbPwqQzESjvNiNZGXib6tVYdm9KniuNfDX9m2NaTrbRSnxYCMA6q",
  "key18": "3mqwbbhkQHu3jrDivF6twZop2k5yJcwiR7bbG51fcpaiL7G9g6HeJGujXwMxq7JxBmi1jRvvMdFrovJFnymH57D6",
  "key19": "2QvteZF3NTDyYZutCRHHReCrdrXcXqGCVESXGGTqSnFgBPy1dpGTf4kz8mXQMVNr7RzrrBV9yMvXfcVTyLLzHf3o",
  "key20": "5jC4xJu2N4io64jzRU9iRZ7pqfBW7YaU1Z8hh33yrq8PXu1c65GJaWSR3S2nWddLNz9WTxzUjYisBsiKLEANomXA",
  "key21": "2L7SjKBzFZEAmpRgEMvRqHc8GykZRBS1QXMsbRiSxR8UjyGEdos6oo3L66z8VpXEKKyoLehUhAJKuS247An565EE",
  "key22": "5JpJ2Hc2EuuKBDs6uvnR65SechJG4rWTtVjYH2BgkkytigHuYF438fuYrqTmWDyKCbHu4c29X5tNfy27qAYEbtsc",
  "key23": "57NbKmhwSAGUycMzpcmS1GHErGa1v1Wp8Y4JwNXjVj4DFojPYs9m2oEWErpb4i3ebtVVJxUrjdjrASeMTbo2aScQ",
  "key24": "3muKmjxw76csZAcFkSurNkv8hv2atiUhKjPrNtV53CHxeDy96VnUxnwtz6iBypKXHHQoUrqKouEUUzM4wgYuiJN9",
  "key25": "5iAfkJW3gycjeQcY6gpE5qaryxoEiQzJ14Yk18MkjPwfNXMYhG3XSdi8iiYiXWvskK9MGpt1FqR2TyKpjJvQyQ8o",
  "key26": "44gApqrGC6dinoWn9EeNsZB3SQfRsyLAWBGTerWnpKVWsz2vTC5Lxtz1zSkLezzn93E1MMfVdiPC9CEocfjvTQAE",
  "key27": "3VVQs69wbUbi8X6WuCsABfht3qSuzfqURCgf4vJKismHozzrR245nF3B2cmtpM1yETV2Sa9j2Eo9pQ1u86rY3bE7",
  "key28": "5Q8qtL6UQocggb9xKT9MMWtya8p5QbWsxLQck3nR7YBgUS3J4KcZYBJRcUy6E1Mz788UQpYwpTVFben72ndMiQKy",
  "key29": "3HigwG7jrmDXio4Dntf7uPUV3LguYxkFWnoJ4guUYiqS5vSvCUoWWXRjzSGTZonaUtzvZnMUHQgHDTP3UGgiEGJE",
  "key30": "4ExjDueamDebrJfkCrMPsbEnqSQb1GYHdxaxPrQXq8M8CJFZryYDtQvxuyiH6ypL423cjcjyGNA1fptEYr6HuWEE"
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
