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
    "5RvfuW5fFHZ3QwSf9E5Z19jtiChU6aqPSzVUaA2GkzoLSaRGsDi8BoMH58ieUH77E9ZLtBc5BRAkAxAiUsjDVT2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cRAuZKJ8atQ74TcJW2Q8KX2LQw2yDCx3xqq6iaq9P1Dc1sSXdbxp5ncwR532NHCZ65gXM8QiPBK1HgQvgJCHBLo",
  "key1": "5xaDs957ApJtoSmpjgRhvfprLHQ9eFKSExJK3YK3ztX8U2cQvT7B2sYWNhVty64tk61hLVrCrSR7hwUTJqofxszR",
  "key2": "47u3GqSJsEqMF9cErcWLAx72Gn56M2bNRFkEuto3tQF2wPyGNzDC13GNXDZ8WEXSBDj1P6DzmY5jtoFYB5DH9ePJ",
  "key3": "3i288omSMxHdGrVDuXQrYGD9D64K5w7TcXE3Mu8ENPivMJx7r2wy98v2MujR2xZowM3bCWkNo61VDvXWRx3Zcim6",
  "key4": "4h1XCUcokfc9jtHfg1WBqbtiNLT6R5XqQVK6GiF5yCDZA237ob8y8gXfoMdJBgzZ2bEBosUNgRfkJ88KCHYXFKrX",
  "key5": "4TNtNGXMa8Y6Ke4qvBxPCCTFd3bNgJXSY7KED86kwnQf3VwBntCemCqfemqUbeNFg9dHpN4XrHHZmHwXo7c5ixHV",
  "key6": "47KgpvX3gvDPnoecyVCUSmRTjFb8pED5WzHSan16TVBNzZRpRvb1SYYowHGxCkW8fHgsdKJmvpKM5uW7myuZ9tRR",
  "key7": "7nPscPJpT1mM9Ba8X4M7UK4wthtVJmeDx2uxD29GfcLnFhGKpAyBYpeTqkmP4vHqkiZaRXoWUNjWN4m8wrgygRp",
  "key8": "VEAhjX542AtAheuU5wUUE8rJHqWyGLau1Pw3a1rSJaKpoTtdMc6bXFHchPMN511zmsQP6ZuyRjsc1bT5h74v2vg",
  "key9": "24gQpd5kMrQQyMV1AyKuCbTZbpxA1YDuNE5Eo2QK5Gp81MWPa2hUtjsBzycfddJkzUB5ebGttW8Het7os5KoQtyR",
  "key10": "2h8VwK7u86zuGo7GwLiFrMXuJteeSnnNcKkECQhdS2r3z5HGh5CLtSjX5qAGinZNww84DNZjD71aCoDsTqqXfQmq",
  "key11": "5taMCLf3zJGevu2R3Rvm9etVWQmhUzAr7NLX9njPBEmCJATkCEt8gNXZmvU65VbuHCP3pHukDz7sShx4J6gsM5nJ",
  "key12": "oTzsx2BGo5vvsDjZPrFo5Q7WFL9LPmWxDhU83kpHCTBZKCk4hLVDLR17EHLd4KGGciUdsnq4FhcQPukbsmU4M46",
  "key13": "5jDFvSBT1Fk5WmV59EQSaGy6HSWcFsu8bGoPtwNzfvTFMLGm8NwWcCoJKjSDmAiSRBtAXSktGZJaExX4CGvzU8cf",
  "key14": "3CJhZyvnXHkZy9P2Xz8VfZYLQK6QKjsksRqhEHXPnqkM2dBgazhjALtZnH6SUJDui6No31GTR1a7NDUHjRaGQ4i5",
  "key15": "4jBMwAp9bcsh3uwSnwHSTwfpsYqPai5HJWSHxgtzauTZ2KoCwrQ3PKtEgcjfELeUA3USa3n5pR7j3R88GDYoD1at",
  "key16": "WNHi86UmsaYFV5BpRqZQ3ps7d1ngBU6KE9ijWtBKceuShqSJzopQBc1Ng1HTKcMKxTypR2qVgxrgC6dQkuZnW7m",
  "key17": "3qrxNaEzKceY9RcbyveZwhtddDdQaw6aori7xw48xtR8eggjj8Q4EGqsNGragApcrCaR15Hpdj3kcMAt9L4ywYpT",
  "key18": "4b5cvxrAXWnZicNAKNkect23KUDX8eWuHb6bgMSvoVrsrQsuNF1UPHFiGQ3brddRh8XLQTrMrbbK2LLTedvARKFg",
  "key19": "5zwZ9XQurPC9RnmSvD7aZPFkEXiprgNr6Q9zkHTQG9ubKRPhgJ5oVGpRnKJmQK2AmjYqoWgybwkNGdWW2LYmLy4B",
  "key20": "5Rg9rVt3SameGnu2zPSAXx2yrEF8kMnPyxDyDsXM9Xsna6HvxNSkvCdm2kQzGDbofEsQhrjWfKToofdNmAe4vfpH",
  "key21": "2viFpF5JTn6FgKu8wo4C8cRsewdsRAZeTWYgWP8LKX7Va5duLoQGWctBhskouGZkZaFyibzUWenGt8FTAJJdLQes",
  "key22": "5GnjmHJ22LPTNowmgbBShHzPhAPosozoLPiqW2fHpfPse7oKctFjfpXNeyGj8dm3UkcrHQCvesNmYUENCNzbrJuk",
  "key23": "5MwAqddzFQ5hMj86XvEZMZ9CX3MRvcS94a8cQ2WNqG7b5iHtxaqwMFcxWUqm1zZDmYoosfDUpSSTjQPZt9tohiJ7",
  "key24": "42Gy4FVJedHHXrY6advp96SSomFvFxy58q1K7Vg8xu8q27qe8T4CuBdUJvnGtAReqyXvqkL8KNYw8yS5JGzHTP3q",
  "key25": "296vA43zMjY1GcFQC5ggnhZrds5WeAvsQm44d7JCKpeMiM3Cz9yFrcYt26Nqwyef9ifadXeC5fhFXwTuMk6Mh1mh",
  "key26": "29gvW7r8AvAdBsPUaHKQefTT8AB4M3C7EBURRKz9AhEZoRVB7NzsZMrUJ3JKnnevv3gaNP46sYgEyF8KvLk5CcRm"
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
