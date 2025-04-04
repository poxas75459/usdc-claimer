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
    "jSQzvosRLSJaR256LyrC4E3m2BH143jx95xVPKCmU3WVi1P5Hs5oe8aJJR1N52NTxz7fAQtr5KkHwbs5Cz8Sokb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3prMpCrkYCNzPT3q7V2hm3wqHc4GVcfd7ZCMUexZLcuaEGamzC8Pe5ZBXMtKZrtvKDzAuVZCo9FApEJ6fE6iiydA",
  "key1": "5A1qzscdbWvQQiJd3U62T4Yci68uxQvEC327xo9UeL2Y7tRxT6aYv2ARiLbxTox3gyxTk3THiodqddsMyxb5HgS6",
  "key2": "33tavebxiEiX6h2a1jw7uAk1YwtRa6gqzTN4qhokgZdJsvAFP3qAqbYYBzu3jWfnJDnZGQHz3gccTLnKvXb1txAX",
  "key3": "5m4AQ6u4SR9UmxYtm1fajuotTfESMcGSu9qK2JnkbZspdCuxYxzk2agHAFaMGkXnzgocPhKfASJjt1qj84zAhKn9",
  "key4": "2L2eWXmbxsso8jqetDV55miAEK3EStbEFTgvUPyeVjKxFffkxteucfYXMRf32s2vDfD52T8gh33PEQiihZ8rxevN",
  "key5": "3rW4ofxroGUdZ6LDfQp7ADeXsSpTPEvDvUMyLcYZrd5mhTPUjw2Rbgq7TiRW7Mh3NVS3iNu2Gx61weNE1sVA1pt1",
  "key6": "5Q4tg9SHpi3hCThk1RhvjZjLtUsAnkSFcJH8eKMoC2EnAFzHSFmkNtViS5AEKpi9TW6G5PsrQkLXvJSMiieXBhTF",
  "key7": "2L9dTqgz7EXS9CBQ3Cip7Ny7xrMtxSnkbvhMDtQGWdsfgnKkEMECwep8mc69U8W53B9bVTk13iXGtJz5UGxSEYWz",
  "key8": "5oB1w9hu1JbFpgdT8pDoFPU2T4braBSitWe2anXEwyH6vsM9ErzGc1KH4dmocgw7HhgCxvmHw8rkoyvoNbCqYR97",
  "key9": "3NoqnoxJ47uswQ1NfyuABU2SnqbmY92TdJZGz9soD2FjxeEuUtdS8MHx9QHUTDqXBDr47sHVPZq8Egg1DuseXMv8",
  "key10": "3KYqiFNPudMqcwnscEPVH5dvjVUc9C6AugijVEMeBeJprWJ9CpHLf19Tgt2aanzTjZhHCbKTCHgtDZ1wUr1bLddu",
  "key11": "3dHNcwV3AWZu8DDVp1x9VAEWitJDtnCyk6hMtY6kzJ3bwTCDh4zZqzizNCXU6VQKTf8YY2ArNBWfj8B5kWqwKkD2",
  "key12": "hXn1Zy5o1d7qRgzEdDDcy3QoY8NMBdMj298TX2aPxJ4muB7sJnLRuRAXVw9gAYtV6HofAiTykdmpcAzJF9n6ZiS",
  "key13": "41BBJKqrFF3y8pQKyivvLYe83VN934CDYAVAWZivBgsgwAuzbxug3KATJzQu9o1ksFDBMwdj9DhobJNeeZJrJNZN",
  "key14": "3YmbFtHk3THNwA3mqmcSaiVFShq8i71pT1oHouVf1noRhNcCMcuut5gjbMB4RXJT8MHYarcp1Wm3tCGpdTbiu3SD",
  "key15": "2Xu2aWRhv3AfkeZmRfzpx2fAWUZSsr7epE1WJ9NGFEgbJDt2hZRgKGJpVaFtimUz9a6EoYv7bxWAWFRh85Uk2v9B",
  "key16": "2S7NgzPxB5msBibBr9Tus3ra8VMSFQNeLzUJSxiWdAGaFn4UiBwHLWEDaNKU79Nop8azQoixqxnKYpTM8qHJike2",
  "key17": "4eqDdocx7PAVCQgi97tkgsuSahNrWZYGYz5T2eWwcNoEQnEUWKipLQBrDbmPXmtUvTrFR8RPj5HPq1WdPkPhNEQS",
  "key18": "5tswCmNfrRzwiDtHtZ5wwZe872XfuUddKV9gmKWJMPAs2YhywaSXy3Aec4MuSDbtXkAnYHnKz3ATkuQtXrsdfH3z",
  "key19": "5jYHrAbMSWiTMS8gP3LUW1ztzx7z5ibuFrakHZGGvJQAhV6CHGtcVmsb9YNavapCxHT8MizxrXmn8cukdQimYoth",
  "key20": "29M7LtLxNZPxNTpem8ZFxwpeLt9LcSCqnG5Z1L7nQcbRYMqDB9V18RjQkcjhTZ9XWbZMCkwM2pFRQGCkEFsKfwry",
  "key21": "5Txv7CejEeV1syfzWp6NEV45XRz14h1bEfspL2LgFQQESBVwL1GwLfusFmqw4w8pxQrpmQA25uSRUztBGWr4qpJs",
  "key22": "5EQLZcJ1KMAGM65G23YWSoD6yoRsSganUkUhAcFR5jXC3LSKMs8v4hLewCcJUafRFCtbL64bauGjSLXVQmia8ZWw",
  "key23": "4ZPXYbvYS792mi8A2J7XodoHzHcRGNo7xGJk2WkEGtZ43BkC4d7YCnLHT51hbQgr9wW5g3hFxut2jZrHid3zKp3X",
  "key24": "3NupJ24QFDt4iu5ji7RnSGNaEByEGzbZ5upgjVFv1gPepcVwd1T53izqDCc8KS2zqENjYHAKe4C6tSXVtsDWwbGa",
  "key25": "3dkXhBMjZcYzz7H2V7UwToh5c1pyygsXsbd7f53WP2poPNrJHBx3YGj18ssTx8KA1qJayqE6AKwygBWJyUwMBG7x",
  "key26": "3F5JhTpo5Dyj7AG2SNerx9yXhQYUYZapuYafVKNNdFewmrFYSpbXxJNLZQj3bL3rH5um2znZwrdH5qnjXS6irGUf",
  "key27": "2LUPzGkp4JCN1QV4jjtjwBWWZhSLCxbmomJFvH7L8rKQoq2Dytry7VC2YxkEyZN4HxSiCwa8rrVGcMoa5CHq6iPh",
  "key28": "28uiAzL5pL6ULey52aLF88V467j7uABfpJchUUGTvmnH5yhTZEGLKATRU3455K7QLUmd8S1dgQFsAA3tjQhkf3J6",
  "key29": "3BCKjy5DjrFhWFng9PRmmSkrpgtjWKfEkNBcrVkksMCP19T9dhqFY1Unf91awmLZzxknUjdXpTtJfpukkuGsf2Dw",
  "key30": "28MSi9zbPuTV5S1JZRnZVfrEPK98KGsQeSEtuEZLXTNGSpY9iitL61Zj18Lmwg8EH1HnJVwe3oDYxcdqkbLsjGZF",
  "key31": "4gfqkhwCFXnhYgSRcm5vYyn19u5VaV723RQ5YS5qu4v3vyH3ztTmBqo3PZJRUscZwxx6jTY14TBeHouPdmHUu4d1"
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
