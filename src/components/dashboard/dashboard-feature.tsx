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
    "5AnZ6CEHLFSGKU8qnT5cSCeBjdzLerpLxH2db2UVn8uPJNJN84UfdSYi3GL9txZKeXfBpvTpHqcUzBZHyGyUXRjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KdKLPb43FFpMp99YpC6Sp19NJtCPRw8dmgjTiKhSEHmBtDXMTYW4x8vBwdqshVQha8HmLb827JJKLNk2MxNrM7S",
  "key1": "5yzWbPniHpRusaWAxg6QuT8i1hRU48FpRebWFBR1GNUrjsMgdCgFABQ9bqT4XJASK9cErprDMq2QAdQNBVdsD8Lh",
  "key2": "2Ve8LB6GQmimZaEULkr8inZk7HtZ4AZYVjgERepdVSu1zLg2GQKoLNeiWTNaoXUdU8j4QM9ywDA5gnzE18zPP9eY",
  "key3": "35M9KaJLV2UfK9ueXPGDxfXcthjstxtc6gtagd5ybFsDjFTxVkECJzkP2PKeWHSZcrixYyFn1iY6KePUvtYUL2jN",
  "key4": "5KgTFtBSc3CttyNnKhBdtzs3e8i7iCh8uWutKsw31YxNyoGg2Yr757Vnuz8Lc7yuhK2FoWGJdsUdzNRhWhaPtGk6",
  "key5": "8jWmz3pBgw6W71ZZz83sApQevboivQvJvLN7KChTWY1fLrXwZdtv51t3GB1aTQ2SF3qxKoJwynVQ4FptVvs9ia5",
  "key6": "2ek1cbnwVKrTh3GmiJZZQwxSgPMuyGEQS4YZgVkb2QJo1fH9Z7Rx7p8nKVfvGfCqe1ZgJ6vYqBYA9dqH1qNqb5Z9",
  "key7": "35SxwbNNj7nywzdpEum6i4qKMFHqwDQafEBtA3uZwBQcCfkEgvsxrCQ9sddkYMftnMTYQqM5pq5zcTdWytswLQ2C",
  "key8": "62eD2o3g1BL8ZRYSZmJWfpNqnB8NRDkg2eoWZa9sMwGHrcMyEjvkzhnzReHyif1sRGhm7DwLFT2kXFettYUNHYRR",
  "key9": "FfCFHK42ifd5UG67LHy6tk41iZuoRBfyLCB48YzXDaNk7GSLmA9axjBKzXAfThA2RdYEaYX29L8oMhiU7o4DXmQ",
  "key10": "4VFyn9w4MA14qiyGSRcopUoKF5TnW4HkQ4YeJC8u9NuidiABnWBmqoJpQQkAaLkqJ8rby58iMcFGq8fwZrxpcXdn",
  "key11": "2vuoERo1pazaQW31cRGs7DFoiD5nFZiYua1ui3zYJqQbg1JXUFmTc3QHjvG4JDzArQdaiV8zgEgTvqA4LHaCLDFR",
  "key12": "5oXaqGexT64rYSBZVYu2iKfvsbzYLL4cWcDWYXcMhEqbCty84sB9FK6pTHdWzAtEeM5GFNNEkTTza7FgWcNBmeYm",
  "key13": "3rR3zMcPLFoNBrEG99hiUvYQVNmyUpM9HUzuEZB32rA57T6xuAMRs1XdDEPMDKnjmBZt4ETyhrzG8qXB3GLyScoU",
  "key14": "65wwqMaFW1uiqVYanPefmPjUWKAQC9W1h6HCrj6fRtdKvEe8M4CJsMpiKX4MPtpWvDY6SHN34NLAZwPa5xRUe19Z",
  "key15": "2zejFjdjPYqFUWy3iJNhbW3mWvsCBTTALWUCTsWo8q7FAY5EmANxxx8JxaL3ijbhxxPfh2tBo3A1QEu6nC6uyPR",
  "key16": "3vTf7HPWVJNz3ZVijNkXNU2ymxEZD35CDdWQ1JALBDw3jzgwma12TZZs88eVsGdBCEZvJuhR8S917DkDTZo8KN8R",
  "key17": "5cUQJVvogxRqKhKubGEehQt87hdyhnC9yiue3MQX42cMqGVpxy7NjBtVPZPHp8jgBmQFTLBArtSJ6qQVCzutpvtY",
  "key18": "ybTqQHR1y71pDDMoitcHNVuAWb2YNyXJiRYAjfgJWaB9Dk4amq9EFfn2hRq28anHRe8BuzFYHkBeDTahSDX8inh",
  "key19": "2GBHEiMPStTSecYvDhuCjfeogFvj9Czu7Ah4xf7t2k8s1SPZkeMYyucqP33bq8vfmZn2LPoirnPq5EgtyV9mvPh1",
  "key20": "3WtdF5qCMRHYkbfZ2AvgBkz6K7nSLvrfomKbJZegBSsokjJJAqgrdSj6y4rj6ts1ntjUtvwkR2GbsqY33tpW7iyC",
  "key21": "4fP12efqJW9V75juBvA4Ww6AJXDg1vmCxWmTJx6aayBzExtkfmpEBZh1M2Sk2HtiKpTYTG95uwfcvnKYSxhci5WW",
  "key22": "4wDoJzYATZGEP9YbkYZububSLPyLGtB8e72ciQokTzu9i6BpFjssiDYCfUfQ8Gw9v1R27UpN6dgRoynsEGHz799m",
  "key23": "XN3k3VLHNEr7FUw8oHzVA5c2w9i76j1n55z3GkiRvD4tMw4wL6XVa6q9wxTPXLM9rkcQvSZnhghWs1bEvR3UWr8",
  "key24": "3RGfouvrSxqLAHVfA6MbFe838Fpmupxif88No1PVxHwY42J8QTXEEmkHj17nUXXPzGXA7cCoeRj34G7i4LrmprJ3"
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
