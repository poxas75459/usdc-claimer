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
    "RpvJBfBw5fToKNMnp9t4eUwVyJGfhWb42Vjoz4wcbHw2kzfJJM6euBacbuC4Ty8TZMEj71PKttUTq2TdrQAiZLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5izLmTnfebVfWpNywzRH1ErDx941FR3MMjgH7XY5YgyVcq92TvZU3CJKKfq4HaQGdXf2ofQC7wQiKSEnCsrve2MU",
  "key1": "5XbTcLJwL93pPibr7gsy2HozNZqcYzcEjC3aVsfXid3cybd84ZmqmEpg7NStHZGtjgYJ3ZGAKrKa2NLgNrwR3j9S",
  "key2": "3BNpjwYJDniVFPmDjJdica6YHb8TX1Fdxq73QCntRPkvn67VfDxpXdJBWHNSiHq7bSRXSThXAgYJCzfw9p8EGtAa",
  "key3": "5ckmEcBmiia4MGRXGara2PggiYsdmg9x3n1CStrU9z4hoAgXGw5e6ZPNLLgPCpPDhNztin62rDkZCXy2rKnKZLKg",
  "key4": "5WtC1w3zCQqqYfmNaGDGgpntb6XjzKSJcnBfyWZ6vMwn35D1gFCHyoFHoecCSBMxvSRVPcRcdMimorMkD2SQ6XwP",
  "key5": "4BhUqXF6EByJe2QvQyG1MGNpqfjsuhWSPc4n7VxpBZqVB5uhaBoQSbFXcebjFYTvH7dET1SDGAJA2wmMt7Vwej9Y",
  "key6": "2Nc98ymGJ2Rn1GPYRvz3LVTzp4TpvamYiq9G1sXB8ouftCNQQQCXUgpgxYZiUoYLRA6HSL65qiRhWyvNtQUiwSPt",
  "key7": "57F5g5EHTWaU1xfhqNZzJmykT2zdzMEtqymU4pfu1h31GCi4dRWpP8DHJRNuYFebqDPd2GXUZ1NwJ3kVAKnZYzdV",
  "key8": "3W3pkiEZMxEDBKJqFU73aBKbXXY5DbWm4sECiBadxeVn5fPEagt3QnCFcYRKcj39wveLG1RVnx8X88zCPUDiUEDt",
  "key9": "Q49ZnoPNDBDSdWivYUc4Hb7uKdADZv27EjrKnkDAL8qvDYwkbvG5bAUGbcLC8hzWmdugP2ufNo2gkUXqctKT9ME",
  "key10": "MK2fwwNvCBJbBwKGK48dBmLv1Gkbba79R3EGwUsUgtYkdnwBj9fDGjQ7LWxuQBjfLi4aVqyKH2Cw1xBjrMfro7h",
  "key11": "5JwpiyrWE5UTQ1KNxjh6mw8AedG7XLBwboJXw8tmSvmSZB4ZKvXtVJxvK96kxQrevH6WRziJ4krM8DvT6yGtqcD7",
  "key12": "AWLmtTB6QtbNcVjXY4kXR9sVCPDuHa23MCnTqgDvSxfHixBNVM7d2HRigYpeyhQSToPARapVBS3NtWP7jRaxXQD",
  "key13": "5HphRoQfax4nJsJFw77FNgni6RY4aEWvFTHj1dnk2wEBoN8euv7kAsLNWV2VEANiKvr3vLUGdTQhEB1h1nuKJdP4",
  "key14": "3YSJ3ji3CnSz5WMnM77He7a7oJrDAi7WNBA3XwaLodi6hNtrhjEoW4o2ckFJHUCP4f8kb6qHVKq9mV1gQoW69y41",
  "key15": "3nRD3HtdHv65fCsABrSPJ3ojbcjzs8zqn7GRqN9mAG5HXpmM6Xja3YSKaUa9eLG19jGFxagbRYhdSWEfJcdsUukk",
  "key16": "4AmkpMiqn3RYRQSE8SjSA3j91pgcPb2iC3a9cvBEb7F65uaYfqCBc15USVqbouC6fAUYfp9J9X7ZxauqnjmZ7Gbh",
  "key17": "bgeZMXYvLevhAfVgLksKJG4mYnkH7vc8n8xxPYgZ7BEfQzoeeKQc5Zxwckk93PQxgPzU1U47qzY3P7jDyWep73L",
  "key18": "364Wu28GSqiCFJovfAHbonG1RYJrHcqTymVZmWj9REWJKDyeLogKF5PHvFvCnxQ3XDEdoCfADZAfaNSDdqpXNGzv",
  "key19": "3NAMNs6jVLerWge76DmPswvkFfDa9tdMhMS71BwREuVZk7i6vS8fUi2kAtHUkH9gVReM7ANsdELAf3wgENDH6pAu",
  "key20": "5we5NMrEH45CDL1qPmyKHFEBBRKos2qWZcRvtUBwUmfiYyd8NpP2CULNboUahx1METEM15TeTBDMBKHibNNo8kqh",
  "key21": "4QcQ9YcxtGfT79waWhmNqPm5iWEqfpH7uzaPUc99QNFwii9kqHo2XXbL61cQHEiMuKBFocM4MwB2cLBjyxQRkccb",
  "key22": "4uEtaWwuMFeEfQnJVXNxS5ZdJcQ2ykVHKZV6y3NfFDgz2am5q88PmpnTKUYwLgvFdjybUMAY8S7oGvGEwc7qz1i4",
  "key23": "3r7HnXpNTe6YoxvjhbcKzsvMKWGGmSSFGSB8v8sWd9aDamcYZx1X1sMm6VfsVCvPGTXs9sAQXVg9Y5yp3AEtRdJQ",
  "key24": "vDFb74q6iLKywV7D7RWVoeTMkZYnxRrT9qWQYmtbGwrVeQETuDRpVG1resnBRAYcs6D9CspJQbFUrCN5WwGeXiZ",
  "key25": "3HSjrY8im6XGggj8grHkyAqEYLy2YvDxPxHezffhiyhb7Kktao7L37VZji2FbqEQYe8JYa78ij9PdFkY4p8zXx6t",
  "key26": "5qcRA876Rop1zMrY7QWzzkgUQp45QJkkBmoZnFdVb4Ri8m3CXPBw227Npi5SpVBDVBXppW2eGbh41FS4dH677ht6",
  "key27": "23DkEDowv9cmGCHPsyrc4bQ8zN3RYJf5gTAsPHGC1Q58rtAbvmCiE5Atf4JB722rYjkRzSHemWhVyqbweRPxE7rH",
  "key28": "jHBAG2tH2ryb51HhopZ8WHJke2Q8vvfwopMgrVGfFzrB3czH8MuBhRzYF46CxnfMZh2DEXXpukZXNRVgVo3bZ79",
  "key29": "33Q87B6Tw4BaZb7EZywdv8PVQYJHu7aJfmeFE2M4QLrs2xaRFLGykFxCooV7Y7zrRn2mRce4w4ntqpsh3A1mqnnL",
  "key30": "5S687Hszxwoti7i3inLmWaGsCDqtgrD59xosv3saGZ48Q3co4MmRtSNUeAc3gh2xdTRhDgqaEuVsLBJvV8RNKtiL",
  "key31": "3ep4oF7xrxsrcibBaadxAoSLxcJiz7zxoY5HFZTrkByWoN6UpgDwLGV1WSZP91FGUk4uX1JuLvnxFDF69tth4HLZ",
  "key32": "3n4YURBfuAZyX1oPu2tr2esYqWT2KrJoBN6tSu8vEXpDYfHP3kj8yGVJGs1mKza9CFej8yzVcsnLXxNvQ2gPNy4F",
  "key33": "3y4onMXkpsYvkgdzYh8AiJYcPeh4TwzqjJLAK8Pn4fDV4U4mS1BZaajeY2rpmP7JGEw8WsCBUXnoAmvnA588PgKs"
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
